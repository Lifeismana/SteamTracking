import { readFile, writeFile } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import "./dump_javascript_paths.mjs"; // fixing estraverse Syntax and VisitorKeys

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

const files = [
	{
		file: pathResolve(rootDir, "store.steampowered.com/public/javascript/applications/store/main.js"),
		cdn: "https://store.steampowered.com/public/",
	},
	{
		file: pathResolve(rootDir, "steamcommunity.com/public/javascript/applications/community/main.js"),
		cdn: "https://steamcommunity.com/public/",
	},
	{
		file: pathResolve(rootDir, "help.steampowered.com/public/javascript/applications/help/main.js"),
		cdn: "https://help.steampowered.com/public/",
	},
	{
		file: pathResolve(rootDir, "partner.steamgames.com/public/javascript/applications/appmgmt/main.js"),
		cdn: "https://partner.steamgames.com/public/",
	},
];

// Non-English language suffixes emitted by Rolldown localization chunks
const NON_ENGLISH_LANG_REGEX =
	/_(arabic|brazilian|bulgarian|czech|danish|dutch|finnish|french|german|greek|hungarian|indonesian|italian|japanese|koreana|korean|latam|malay|norwegian|polish|portuguese|romanian|russian|sc_schinese|schinese|spanish|swedish|tchinese|thai|turkish|ukrainian|vietnamese)(-json)?\.js$/;

const ASSET_PATH_REGEX = /^\.\.?\/.+\.(css|js)\?contenthash=/;

const urls = new Set();
let oldUrls = [];

try {
	oldUrls = (await readFile(pathResolve(rootDir, ".support/urls_from_manifests.txt"), { encoding: "utf8" }))
		.trim()
		.split("\n");
} catch {
	// file does not exist
}

for (const url of oldUrls) {
	const fileName = url.substring(url.lastIndexOf("/") + 1);

	if (!/^(chunk~|libraries~|[0-9]+\.)/.test(fileName)) {
		urls.add(url);
	}
}

console.log("Remembered", urls.size, "urls");

for (const { file, cdn } of files) {
	let found = false;

	try {
		const code = await readFile(file, "utf8");
		const ast = parse(code, {
			ecmaVersion: latestEcmaVersion,
			sourceType: "module",
			loc: true,
		});

		// Reconstruct the full URL of main.js to resolve "./" and "../../../" paths against
		const relativeFileUrl = file.replaceAll("\\", "/").split("/public/")[1];
		const baseUrl = new URL(relativeFileUrl, cdn);

		const processCandidate = (rawValue) => {
			if (typeof rawValue !== "string" || !ASSET_PATH_REGEX.test(rawValue)) {
				return;
			}

			const resolved = new URL(rawValue, baseUrl);
			const cleanUrl = resolved.origin + resolved.pathname;

			if (!cleanUrl.startsWith(cdn)) {
				console.error("Wrong match:", cleanUrl);
				return;
			}

			if (NON_ENGLISH_LANG_REGEX.test(cleanUrl)) {
				return;
			}

			const folderAndFile = cleanUrl.slice(cdn.length);
			let suffix;

			if (folderAndFile.startsWith("javascript/") && cleanUrl.endsWith(".js")) {
				suffix = "?__TIME__&l=english&__CDN__";
			} else if (folderAndFile.startsWith("css/") && cleanUrl.endsWith(".css")) {
				suffix = "?__TIME__&__CDN__";
			} else {
				console.error("Wrong match:", folderAndFile);
				return;
			}

			urls.add(cleanUrl + suffix);
			found = true;
		};

		traverse(ast, {
			enter(node) {
				// Matches strings in __vite__mapDeps and static import declarations
				if (node.type === Syntax.Literal && typeof node.value === "string") {
					processCandidate(node.value);
				}

				// Matches minified dynamic imports: import(`./shared_english.js?contenthash=...`)
				if (node.type === Syntax.TemplateLiteral && node.expressions.length === 0 && node.quasis.length === 1) {
					processCandidate(node.quasis[0].value.cooked);
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
		continue;
	}

	if (!found) {
		console.error(`Did not find any files in "${file}"`);
	}
}

console.log("Found", urls.size, "urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(pathResolve(rootDir, ".support/urls_from_manifests.txt"), strings);
