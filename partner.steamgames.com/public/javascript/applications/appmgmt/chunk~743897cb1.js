/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [59352],
    {
      55298: (ae, K, a) => {
        "use strict";
        a.d(K, { YA: () => T, p: () => v, qh: () => t });
        var f = a(72604),
          L = a(20194),
          c = a(41735),
          p = a.n(c),
          i = a(3166);
        function t() {
          const j = (0, L.I)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const z = `${i.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                S = await p().get(z);
              return S?.status == 200 && S.data?.success == f.R
                ? S.data.admins
                : (console.error("ValveAccounts:", S?.status), []);
            },
          });
          return j.isLoading ? null : j.data;
        }
        function v(j) {
          return t()?.find((S) => S.id == j);
        }
        function T(j, z) {
          return j.getQueryData(["useValveAccounts"])?.find((B) => B.id === z);
        }
      },
      65532: (ae, K, a) => {
        "use strict";
        a.d(K, { DP: () => t, Gb: () => i, iS: () => T, sM: () => v });
        var f = a(7850),
          L = a(78430),
          c = a.n(L),
          p = a(24642);
        function i(j) {
          const z = j.getValue();
          return z?.length > 0
            ? (0, f.jsx)(t, { text: z, regExp: /\r\n|\r|\n/ })
            : "";
        }
        function t(j) {
          const { text: z, regExp: S } = j;
          if (!z) return (0, f.jsx)(f.Fragment, {});
          const B = z.split(S);
          return (0, f.jsx)("div", {
            className: c().FeedbackText,
            children: B.map((m, k) =>
              (0, f.jsxs)(
                "span",
                { children: [m, k < B.length - 1 && (0, f.jsx)("br", {})] },
                k,
              ),
            ),
          });
        }
        function v(j) {
          return Number.parseInt(j.getValue()) ? "yes" : "no";
        }
        function T(j) {
          const z = Number.parseInt(j.getValue());
          return (0, p.D)(z);
        }
      },
      40299: (ae, K, a) => {
        "use strict";
        a.d(K, { K: () => L });
        var f = a(22880);
        function L(c, p, i) {
          const t = [],
            v = i.map((T) => T.header);
          t.push(v);
          for (const T of p) {
            const j = [];
            for (const z of i) {
              const S = T[z.accessorKey];
              j.push(S != null ? S.toString() : "");
            }
            t.push(j);
          }
          f.g.WriteCSVToFile(t, c);
        }
      },
      91916: (ae, K, a) => {
        "use strict";
        a.d(K, {
          MY: () => B,
          UA: () => $,
          Yd: () => A,
          qG: () => W,
          rN: () => Z,
          vh: () => h,
        });
        var f = a(41735),
          L = a.n(f),
          c = a(90626),
          p = a(99412),
          i = a(72604),
          t = a(34592),
          v = a(3166),
          T = a(27066),
          j = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          S = (G, w, x, E) => {
            for (
              var M = E > 1 ? void 0 : E ? z(w, x) : w, g = G.length - 1, O;
              g >= 0;
              g--
            )
              (O = G[g]) && (M = (E ? O(w, x, M) : O(M)) || M);
            return E && M && j(w, x, M), M;
          };
        function B() {
          return v.TS.EUNIVERSE == p.Rv ? 12 : 1;
        }
        const m = class we {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(w) {
            return this.m_mapOptInToPartners.get(w);
          }
          BHasPartnerInfoLoad(w) {
            return this.m_mapOptInToPartners.has(w);
          }
          async FindPartnerByName(w) {
            return (
              this.m_mapPromises.has(w) ||
                this.m_mapPromises.set(w, this.InternalFindPartnerByName(w)),
              this.m_mapPromises.get(w)
            );
          }
          async InternalFindPartnerByName(w) {
            const x = new Array();
            try {
              const E = v.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                M = {
                  sessionid: (0, v.KC)(),
                  searchtext: w,
                  origin: self.origin,
                },
                g = await L().get(E, { params: M });
              g?.status == 200 && g?.data?.success == i.R
                ? g.data.publishers.forEach((O) => {
                    const y = {
                      partnerid: O.publisherid,
                      name: O.publishername,
                      partner_url:
                        v.TS.PARTNER_BASE_URL +
                        `pub/publisher/${O.publisherid}/`,
                      contacts: O.contacts,
                    };
                    this.m_mapOptInToPartners.set(O.publisherid, y), x.push(y);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${g?.status} eresult ${g?.data?.success} and msg ${g?.data?.msg}`,
                  );
            } catch (E) {
              const M = (0, t.H)(E);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  M.strErrorMsg,
                M,
              );
            }
            return x;
          }
          async LoadPartnerInfo(w) {
            if (this.m_mapOptInToPartners.has(w))
              return this.m_mapOptInToPartners.get(w);
            const x = await this.FindPartnerByName("" + w);
            return (
              this.BHasPartnerInfoLoad(w) ||
                this.m_mapOptInToPartners.set(w, null),
              this.m_mapOptInToPartners.get(w)
            );
          }
          async LoadMultiplePartnerInfo(w) {
            if (!w || w.length == 0) return [];
            const x = w.filter((E) => !this.m_mapOptInToPartners.has(E));
            return (
              x.length > 0 && (await this.FindPartnerByName("" + x.join(","))),
              w.map((E) => this.m_mapOptInToPartners.get(E)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              we.s_Singleton || (we.s_Singleton = new we()), we.s_Singleton
            );
          }
          constructor() {
            let w = JSON.parse(
              JSON.stringify((0, v.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(w) &&
              w.forEach((x) => this.m_mapOptInToPartners.set(x.partnerid, x));
          }
          ValidateStoreDefault(w) {
            const x = w;
            return x &&
              Array.isArray(x) &&
              x.length > 0 &&
              typeof x[0] == "object"
              ? typeof x[0].partnerid == "number" &&
                  typeof x[0].name == "string"
              : !1;
          }
        };
        S([T.o], m.prototype, "FindPartnerByName", 1);
        let k = m;
        function h(G) {
          const [w, x] = (0, c.useState)(!1);
          return (
            (0, c.useEffect)(() => {
              !w &&
                G?.length > 0 &&
                k
                  .Get()
                  .LoadMultiplePartnerInfo(G)
                  .then(() => x(!0));
            }, [G, w]),
            w
          );
        }
        function $(G) {
          const [w, x] = c.useState(() => k.Get().GetPartnerInfo(G));
          return (
            c.useEffect(() => {
              !k.Get().BHasPartnerInfoLoad(G) && G > 0
                ? k
                    .Get()
                    .LoadPartnerInfo(G)
                    .then((E) => x(E))
                : k.Get().BHasPartnerInfoLoad(G) &&
                  w?.partnerid != G &&
                  x(k.Get().GetPartnerInfo(G));
            }, [G, w]),
            [w]
          );
        }
        function Z() {
          return { fnFindPartnerByName: k.Get().FindPartnerByName };
        }
        function A(G) {
          return k.Get().GetPartnerInfo(G);
        }
        function W(G) {
          return k.Get().LoadPartnerInfo(G);
        }
      },
      40772: (ae, K, a) => {
        "use strict";
        a.d(K, {
          Gl: () => k,
          N6: () => h,
          PQ: () => m,
          Z4: () => $,
          fI: () => Z,
        });
        var f = a(41735),
          L = a.n(f),
          c = a(90626),
          p = a(20194),
          i = a(75233),
          t = a(72604),
          v = a(3166),
          T = a(20117),
          j = a(41635);
        class z {
          m_mapPartnerToContactInfo = new Map();
          m_mapPromisePartnerLoading = new Map();
          async FetchValvePartnerContacts(W) {
            const G =
                v.TS.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
              w = { sessionid: (0, v.KC)(), strPartnerIDs: W.join(",") },
              x = await L().get(G, { params: w, withCredentials: !0 });
            return x?.status == 200 && x?.data.success == t.R
              ? (x.data.contacts.forEach((E) => {
                  this.m_mapPartnerToContactInfo.has(E.partnerid) ||
                    this.m_mapPartnerToContactInfo.set(E.partnerid, []),
                    this.m_mapPartnerToContactInfo.get(E.partnerid).push(E);
                }),
                x.data.contacts)
              : [];
          }
          async LoadValvePartnerContact(W) {
            return W
              ? this.m_mapPartnerToContactInfo.has(W)
                ? this.m_mapPartnerToContactInfo.get(W)
                : (this.m_mapPromisePartnerLoading.has(W) ||
                    this.m_mapPromisePartnerLoading.set(
                      W,
                      this.InternalLoadValvePartnerContact(W),
                    ),
                  this.m_mapPromisePartnerLoading.get(W))
              : [];
          }
          async InternalLoadValvePartnerContact(W) {
            return this.FetchValvePartnerContacts([W]);
          }
          async InternalLoadMultiplePartnerContact(W) {
            return this.FetchValvePartnerContacts(W);
          }
          GetPartnerContact(W) {
            return this.m_mapPartnerToContactInfo.get(W);
          }
          GetPartnerContactAccountsByFilter(W, G, w) {
            const x = this.m_mapPartnerToContactInfo.get(W);
            if (x?.length > 0) {
              const E = x
                .filter((M) => !M.appid || M.appid == G)
                .filter(
                  (M) =>
                    !w ||
                    w == "any" ||
                    (w == "business" && M.is_business_contact) ||
                    (w == "tech" && M.is_tech_contact),
                )
                .map((M) => new T.b2(M.steamid).GetAccountID());
              return j.Ew(E);
            }
            return [];
          }
          static s_Singleton;
          static Get() {
            return (
              z.s_Singleton ||
                ((z.s_Singleton = new z()), z.s_Singleton.Init()),
              z.s_Singleton
            );
          }
          Init() {
            const W = (0, v.Fd)(
              "partner_valve_contact_list",
              "application_config",
            );
            W &&
              W.forEach((G) => {
                this.m_mapPartnerToContactInfo.has(G.partnerid)
                  ? this.m_mapPartnerToContactInfo.get(G.partnerid).push(G)
                  : this.m_mapPartnerToContactInfo.set(G.partnerid, [G]);
              });
          }
        }
        function S(A) {
          return ["PartnerValveContactByPartnerID", A];
        }
        function B(A) {
          const { data: W, isLoading: G } = (0, p.I)({
            queryKey: S(A),
            queryFn: async () => z.Get().LoadValvePartnerContact(A),
          });
          return G ? null : W;
        }
        function m(A, W) {
          return A.prefetchQuery({
            queryKey: S(W),
            queryFn: async () => z.Get().LoadValvePartnerContact(W),
          });
        }
        function k(A) {
          return z.Get().GetPartnerContact(A);
        }
        function h(A, W, G) {
          return z.Get().GetPartnerContactAccountsByFilter(A, W, G);
        }
        function $(A, W, G) {
          const [w, x] = (0, c.useState)(null),
            E = B(A);
          return (
            (0, c.useEffect)(() => {
              E && x(z.Get().GetPartnerContactAccountsByFilter(A, W, G));
            }, [E, W, G, A]),
            w
          );
        }
        function Z(A) {
          const W = (0, i.jE)();
          return (0, p.I)({
            queryKey: ["multiloadpartnerconatact", ...(A || [])],
            queryFn: async () => {
              const G = await z.Get().InternalLoadMultiplePartnerContact(A);
              return (
                A.forEach((w) => {
                  const x = G.filter((E) => E.partnerid == w);
                  W.setQueryData(S(w), x);
                }),
                G
              );
            },
            enabled: !!(A && A.length > 0),
          });
        }
      },
      25518: (ae, K, a) => {
        "use strict";
        a.d(K, { Kl: () => f, Yj: () => j, iH: () => L, zV: () => z });
        const f = [
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "smalltext",
            "b",
            "u",
            "hr",
            "i",
            "emoticon",
            "dynamiclink",
            "img",
            "strike",
            "spoiler",
            "noparse",
            "url",
            "list",
            "olist",
            "*",
            "quote",
            "pullquote",
            "code",
            "table",
            "tr",
            "td",
            "th",
            "carousel",
            "previewyoutube",
            "looping_media",
            "roomeffect",
            "sticker",
            "price",
            "pricesavings",
            "trailer",
            "speaker",
            "doclink",
            "video",
            "vod",
            "youtubeorvideo",
            "giveawayeligible",
            "claimitem",
            "packagepurchaseable",
            "actiondialog",
            "uploadfilebutton",
            "docimg",
            "meetsteamsessiongroup",
            "meetsteamscheduleview",
            "center",
            "c",
            "expand",
            "remindme",
            "calendarevent",
            "color",
            "bgcolor",
            "userpolls",
          ],
          L = [
            "h1",
            "h2",
            "h3",
            "b",
            "u",
            "i",
            "strike",
            "spoiler",
            "noparse",
            "url",
          ],
          c = [
            "img",
            "carousel",
            "previewyoutube",
            "looping_media",
            "roomeffect",
            "video",
            "vod",
            "trailer",
            "youtubeorvideo",
            "docimg",
          ],
          p = f.filter((S) => !c.includes(S)),
          i = null;
        function t(S) {
          const { bIncludeMedia: B = !1, bIncludeValveOnly: m = !1 } = S,
            k = new Set();
          return (
            B || c.forEach((h) => k.add(h)),
            m || i.forEach((h) => k.add(h)),
            f.filter((h) => !k.has(h))
          );
        }
        let v;
        function T(S) {
          return S
            ? S.map((B) => (B == "*" ? "\\*" : B)).join("|")
            : (v || (v = T(f)), v);
        }
        function j(S, B = null, m = " ") {
          const k = new RegExp(
            "\\[(" + T(B) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return S.replace(k, m);
        }
        function z(S, B = null, m = "") {
          const k = "\\[\\/?(?:" + T(B) + "){1,}.*?]";
          return S.replace(new RegExp(k, "gi"), m);
        }
      },
      29630: (ae, K, a) => {
        "use strict";
        a.d(K, { zU: () => M, z5: () => w });
        var f = a(38340),
          L = a(9046),
          c = a(99412),
          p = a(72604),
          i = a(7742),
          t = a(72849),
          v = a(76559),
          T = a(71742),
          j = a(34592),
          z = a(51746),
          S = a(72609),
          B = a(7850),
          m = a(90626);
        function k(g, O) {
          return `${g}/${O}`;
        }
        const h = {},
          $ = m.createContext(h);
        function Z(g) {
          const { resolutions: O, children: y } = g;
          return jsx($.Provider, { value: O, children: y });
        }
        function A() {
          return m.useContext($);
        }
        const W = new RegExp(
          `${f.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function G(g) {
          const O = [],
            y = new Set();
          for (const I of g.matchAll(W)) {
            const P = Number.parseInt(I[1]),
              C = I[2],
              X = k(P, C);
            P > 0 &&
              !y.has(X) &&
              (y.add(X), O.push({ clanAccountID: P, hashAndExt: C }));
          }
          return O;
        }
        function w(g, O, y = 0) {
          const I = A();
          return E(g, O, y, I);
        }
        async function x(g, O, y = 0) {
          return E(g, O, y);
        }
        function E(g, O, y = 0, I) {
          if (!g || g.length == 0) return null;
          if (g?.startsWith(f.lw)) return M.ReplacementTokenToClanImageURL(g);
          if (g?.startsWith(f.eg)) {
            const P = M.GetBaseURL(),
              C = g.substring(f.eg.length + 1),
              X = parseInt(C.substring(0, C.indexOf("/"))),
              te = C.substring(C.indexOf("/") + 1),
              Y = M.GenerateURLFromHashAndExt(X, te);
            if (I?.[k(X, te)] === !1) return Y;
            const u = M.GetLocalizedClanImageFileNames(te, O).map(
              (d) => P + X + "/" + d + "?t=" + y,
            );
            return u.push(Y), u;
          }
          return g;
        }
        const M = {
          GetBaseURL() {
            return `${S.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${S.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(g) {
            return (
              (g = g.replace(f.lw, this.GetBaseURL())),
              g.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(g) {
            const y =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                g,
              );
            return y?.groups
              ? [y.groups.filename, parseInt(y.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(g) {
            return (
              (g.file_type != null ? (0, z.EG)(g.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(g) {
            return g ? g.image_hash + this.GetExtensionString(g) : null;
          },
          GetThumbHashAndExt(g) {
            return g ? g.thumbnail_hash + this.GetExtensionString(g) : null;
          },
          GetHashFromHashAndExt(g) {
            let O = g.substring(g.lastIndexOf("."));
            return g.substring(0, g.length - O.length);
          },
          GetExtStringFromHashAndExt(g) {
            return g.substring(g.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(g, O) {
            if (O == null) return [];
            const y = this.GetHashFromHashAndExt(g),
              I = this.GetExtStringFromHashAndExt(g),
              P = [y + "/" + (0, c.LgB)(O) + I];
            return (
              O == c.Pn1 && P.push(y + "/" + (0, c.x6o)((0, c.LgB)(O)) + I), P
            );
          },
          GenerateURLFromHashAndExt(g, O, y = L.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              g,
              O,
              y,
              c.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(g, O, y = L.wI.full, I, P) {
            g instanceof v.b && (g = g.GetAccountID());
            let C = this.GetBaseURL();
            const X = I != null && I != c.xPp;
            if (y == L.wI.full && !X) return C + g + "/" + O;
            {
              let te = O.substring(O.lastIndexOf(".")),
                Y = O.substring(0, O.length - te.length);
              return !X || I == c.Bhc || P != "localized_image_group"
                ? C + g + "/" + Y + y + te
                : C + g + "/" + Y + "/" + (0, c.x6o)((0, c.LgB)(I)) + te;
            }
          },
          GetHashAndExtFromURL(g) {
            let O = this.GetBaseURL();
            return !g?.startsWith(O) ||
              ((g = g.substring(O.length)), g.indexOf("/") == -1)
              ? null
              : ((g = g.substring(g.indexOf("/") + 1)), g);
          },
          GenerateEditableURLFromHashAndExt(g, O, y) {
            let I =
              S.TS.COMMUNITY_BASE_URL +
              "gid/" +
              g.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              O;
            return y && (I += "&lang=" + y), I;
          },
          GetMimeType(g) {
            return (0, z.ab)(g);
          },
          async AsyncGetImageResolution(g, O, y, I, P) {
            const C = O + this.GetExtensionString({ file_type: y }),
              X = this.GenerateEditableURLFromHashAndExt(g, C);
            return await this.AsyncGetImageResolutionInternal(X, I, P);
          },
          async AsyncGetImageResolutionInternal(g, O, y) {
            const I = (0, i.x0)();
            let P = new Image();
            (P.crossOrigin = "anonymous"),
              (P.onerror = (Y) => {
                const u = { success: p.zi };
                y ||
                  ((u.err_msg =
                    "Load fail on url " +
                    g +
                    " with error: " +
                    (0, j.H)(Y).strErrorMsg),
                  console.error(u.err_msg)),
                  (u.success = p.zi),
                  I.resolve(u);
              }),
              (P.onload = () => {
                const Y = { success: p.zi };
                if (
                  ((Y.width = P.width),
                  (Y.height = P.height),
                  !(P.width > 0) || !(P.height > 0))
                ) {
                  (0, T.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + g,
                  ),
                    (Y.err_msg = "No resolution reported for url " + g),
                    I.resolve(Y);
                  return;
                }
                (Y.success = p.R), I.resolve(Y);
              }),
              (P.src = g),
              O.token.promise.catch(() => {
                (P.onload = () => {}),
                  (P.onerror = () => {}),
                  I.resolve({ success: p.e9 });
              });
            let C;
            const X = new Promise((Y, u) => {
              C = setTimeout(() => u(), 1e4);
            });
            let te;
            try {
              te = await Promise.race([X, I.promise]);
            } catch {
              te = { success: p._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(C);
            }
            return te;
          },
          BIsClanImageVideo(g) {
            return g.file_type == t.bg.nn || g.file_type == t.bg.pJ;
          },
        };
      },
      9046: (ae, K, a) => {
        "use strict";
        a.d(K, { pb: () => c, wI: () => L });
        class f {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var L = ((p) => (
          (p.full = ""),
          (p.background_main = "_960x311"),
          (p.background_mini = "_480x156"),
          (p.capsule_main = "_400x225"),
          (p.spotlight_main = "_1054x230"),
          p
        ))(L || {});
        const c = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      54357: (ae, K, a) => {
        "use strict";
        a.d(K, { B: () => j });
        var f = a(7850),
          L = a(90626);
        function c(S) {
          const [B, m] = useState(!1);
          return (
            useEffect(() => {
              startTransition(() => m(!0));
            }, []),
            jsx(p.Provider, { value: B, children: S.children })
          );
        }
        const p = (0, L.createContext)(!1);
        function i() {
          return (0, L.useContext)(p);
        }
        const t = Intl.DateTimeFormat().resolvedOptions().timeZone,
          v =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((S) => S.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          T = v && decodeURIComponent(v);
        function j() {
          return i() ? t : (T ?? t);
        }
        function z() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${t};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        z();
      },
      64165: (ae, K, a) => {
        "use strict";
        a.d(K, { n: () => L, s: () => c });
        var f = a(50974);
        function L(p, i, t) {
          return p == f.wv
            ? `charts/topnewreleases/${i}`
            : p == f.yT
              ? `charts/bestofyear/${i}`
              : t
                ? `sale/${i}`
                : `curator/${p}/sale/${i}`;
        }
        function c(p, i) {
          return L(p, "", i).startsWith("curator/");
        }
      },
      16369: (ae, K, a) => {
        "use strict";
        a.d(K, { H: () => c });
        var f = a(99412),
          L = a(72609);
        const c = () => (L.TS.EUNIVERSE === f.Rv ? 2581 : 45267781);
      },
      69909: (ae, K, a) => {
        "use strict";
        a.d(K, {
          Lc: () => G,
          Mr: () => O,
          _t: () => x,
          ee: () => A,
          hh: () => z,
          mG: () => h,
          my: () => B,
          rF: () => M,
        });
        var f = a(16936),
          L = a(54357),
          c = a(20194),
          p = a(16369),
          i = a(36174),
          t = a(65946),
          v = a(92264),
          T = a(87937),
          j = a.n(T);
        const z = "America/Los_Angeles";
        function S(y, I) {
          return {
            queryKey: m(y, I),
            queryFn: () => (0, f.t3)(I),
            enabled: (0, p.H)() == y,
            staleTime: i.Kp.PerMinute * 10,
          };
        }
        function B(y, I) {
          return (0, c.I)(S(y, I));
        }
        const m = (y, I) => ["useMeetSteamGetAvailability", y, I];
        function k(y, I, P) {
          return {
            queryKey: $(y, I, P),
            queryFn: async () => {
              const C = await (0, f.vd)(I);
              return C ? JSON.parse(C) : {};
            },
            enabled: (0, p.H)() == y && !!P,
          };
        }
        function h(y, I, P) {
          return (0, c.I)(k(y, I, P));
        }
        const $ = (y, I, P) => ["useMeetSteamGetRegistrationDetails", y, I, P];
        function Z(y) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", y],
            queryFn: () => (0, f.Nc)(),
            enabled: !!y,
            staleTime: i.Kp.PerMinute * 10,
          };
        }
        function A(y) {
          return (0, c.I)(Z(y));
        }
        function W(y, I) {
          return {
            queryKey: ["useMeetSteamQRCode", y, I],
            queryFn: () => (0, f.EI)(y, I),
            enabled: !!I && !0,
            staleTime: i.Kp.PerMinute * 10,
          };
        }
        function G(y, I) {
          return (0, c.I)(W(y, I)).data?.qrcode;
        }
        function w(y, I = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return y.location_type === "in_person"
            ? (y.in_person_time_zone ?? z)
            : I;
        }
        function x(y) {
          const I = (0, L.B)();
          return (0, t.q3)(() => ({
            rtime_start: y.rtime_start,
            rtime_end: y.rtime_end,
            sDisplayTimeZone: w(y, I),
          }));
        }
        function E(y, I) {
          const P = j().unix(y),
            X = j().unix(y).tz(I).utcOffset() - P.utcOffset();
          return new Date((y + X * 60) * 1e3);
        }
        function M(y, I) {
          const P = E(y, I),
            C = new Date();
          return P.getFullYear() == C.getFullYear()
            ? (0, v.$w)(P)
            : (0, v._9)(P);
        }
        function g(y, I) {
          const P = moment.unix(y),
            X = moment.unix(y).tz(I).utcOffset() - P.utcOffset();
          return LocalizeRTimeToHourAndMinutes(y + X * 60);
        }
        function O(y, I, P, C) {
          const X = j().unix(y),
            Y = j().unix(y).tz(P).utcOffset() - X.utcOffset(),
            u = j().unix(I),
            d = j().unix(I).tz(P),
            _ = d.utcOffset() - u.utcOffset();
          return (
            (0, v.Vx)(y + Y * 60, I + _ * 60, !0) +
            (C ? "" : " " + d.format("z"))
          );
        }
      },
      16936: (ae, K, a) => {
        "use strict";
        a.d(K, {
          t3: () => j,
          EI: () => m,
          Nc: () => B,
          vd: () => S,
          _V: () => z,
          kR: () => k,
        });
        var f = a(72609);
        const L = "meetsteam/availability",
          c = "meetsteam/registrations",
          p = "meetsteam/registrationdetails",
          i = "meetsteam/updateregistration",
          t = "meetsteam/registrantinfo",
          v = "meetsteam/attendance_qrcode";
        async function T(h, $) {
          const Z = new URL(f.TS.STORE_BASE_URL + h);
          for (const [W, G] of Object.entries($)) Z.searchParams.set(W, G);
          const A = await fetch(Z, { credentials: "include" });
          if (!A.ok) throw new Error(`${Z} answered ${A.status}`);
          return await A.json();
        }
        async function j(h) {
          return (await T(L, { gid: h })).availability ?? [];
        }
        async function z(h) {
          return (await T(c, { gid: h })).registrations ?? [];
        }
        async function S(h) {
          return (await T(p, { gid: h })).strJSONData ?? "";
        }
        async function B() {
          return (
            (await T(t, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function m(h, $) {
          return await T(v, { gid: h, accountid: String($) });
        }
        async function k(h) {
          const $ = f.TS.STORE_BASE_URL + i,
            Z = new URLSearchParams({
              gid: h.gid,
              group_id: String(h.group_id),
              session_id: String(h.session_id),
              guest_count: String(h.guest_count),
              jsondata: h.jsondata,
              skip_email: h.skip_email ? "1" : "0",
            }),
            A = await fetch($, {
              method: "POST",
              credentials: "include",
              body: Z,
            });
          if (!A.ok) throw new Error(`${$} answered ${A.status}`);
          return (await A.json()).success;
        }
      },
      34041: (ae, K, a) => {
        "use strict";
        a.d(K, {
          Dp: () => n,
          wz: () => U,
          qX: () => R,
          cD: () => de,
          yX: () => pe,
          Q5: () => f,
          Ji: () => c,
          Xs: () => L,
          AH: () => Ke,
          zF: () => Re,
        });
        var f = {};
        a.r(f), a.d(f, { qZ: () => T });
        var L = {};
        a.r(L), a.d(L, { bV: () => tt });
        var c = {};
        a.r(c), a.d(c, { mP: () => He });
        var p = a(80613),
          i = a.n(p),
          t = a(75245),
          v = a(35038);
        const T = 0,
          j = 50,
          z = 51,
          S = 52,
          B = 53,
          m = 54,
          k = 55,
          h = 56,
          $ = 57,
          Z = 58,
          A = 59,
          W = 60,
          G = 61,
          w = 62,
          x = 63,
          E = 64,
          M = 65,
          g = 66,
          O = 67,
          y = 68,
          I = 69,
          P = 70,
          C = 71,
          X = 72,
          te = 73,
          Y = 74,
          u = 75,
          d = 76,
          _ = 77,
          b = 78,
          H = 79,
          J = 80,
          F = 81,
          N = 82,
          re = 83,
          ne = 90,
          q = 91,
          ee = 92,
          se = 93,
          ie = 94,
          De = 95,
          je = 96,
          st = 97,
          it = 98,
          $e = 99,
          ot = 100,
          lt = 101,
          Qe = 110,
          Ae = 111,
          ct = 112,
          ut = 113,
          xe = 114,
          Fe = 115,
          Ue = 116,
          We = 117,
          Ye = 118,
          Je = 119,
          dt = 120,
          mt = 130,
          gt = 131,
          ht = 132,
          _t = 133,
          Xe = 134,
          ze = 135,
          ft = 136,
          Ze = 137,
          Ge = 138,
          Ne = 139,
          Ve = 140,
          qe = 0,
          pt = 1,
          et = 2,
          tt = 3,
          Ce = 0,
          yt = 1,
          vt = 2,
          ke = 3,
          He = 4,
          rt = 5,
          Et = 6,
          at = 7;
        function Bt(Ie) {
          return "unknown ESteamAwardVoteCategoryID ( " + Ie + " )";
        }
        function nt(Ie) {
          return "unknown EVoteDefinitionFlag ( " + Ie + " )";
        }
        function bt(Ie) {
          return "unknown ESteamAwardsNominationSource ( " + Ie + " )";
        }
        class ye extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.voteid || t.Sg(ye.M()),
              p.Message.initialize(this, e, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    voteid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    active: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    start_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_discounts: { n: 5, c: ue, r: !0, q: !0 },
                    grouped_vote_options: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    groups: { n: 7, c: ge, r: !0, q: !0 },
                    internal_name: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localization: { n: 9, c: he },
                    reveal_time: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    release_date_min: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    winner_appid: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    flag: { n: 13, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    release_date_max: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    item_type: {
                      n: 15,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ye.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ye();
            return ye.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ye.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ye.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition";
          }
        }
        class ue extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.appid || t.Sg(ue.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    discount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ue.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ue();
            return ue.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ue.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ue.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class ge extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.groupid || t.Sg(ge.M()),
              p.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    groupid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    group_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    app_discounts: { n: 3, c: ue, r: !0, q: !0 },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ge.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ge();
            return ge.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ge.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ge.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class he extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.title || t.Sg(he.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    title_linebreak: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title_award: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    award_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(he.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new he();
            return he.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(he.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(he.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_Localization";
          }
        }
        class de extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.language || t.Sg(de.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sale_appid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(de.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new de();
            return de.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(de.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(de.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class _e extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.votes || t.Sg(_e.M()),
              p.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    votes: { n: 1, c: ye, r: !0, q: !0 },
                    labor_of_love_winners: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(_e.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new _e();
            return _e.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(_e.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(_e.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class me extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.voteid || t.Sg(me.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    voteid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    communityitemid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(me.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new me();
            return me.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(me.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(me.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAwardsUserVote";
          }
        }
        class R extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.sale_appid || t.Sg(R.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    sale_appid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(R.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new R();
            return R.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(R.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(R.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Request";
          }
        }
        class fe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.user_votes || t.Sg(fe.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: { user_votes: { n: 1, c: me, r: !0, q: !0 } },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(fe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new fe();
            return fe.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(fe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(fe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Response";
          }
        }
        class pe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.voteid || t.Sg(pe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    voteid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    sale_appid: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(pe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new pe();
            return pe.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(pe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(pe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Request";
          }
        }
        class o extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.user_votes || t.Sg(o.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: { user_votes: { n: 1, c: me, r: !0, q: !0 } },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = t.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(o.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new o();
            return o.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(o.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(o.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Response";
          }
        }
        class r extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              r.prototype.category_id || t.Sg(r.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              r.sm_m ||
                (r.sm_m = {
                  proto: r,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    last_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              r.sm_m
            );
          }
          static MBF() {
            return r.sm_mbf || (r.sm_mbf = t.w0(r.M())), r.sm_mbf;
          }
          toObject(e = !1) {
            return r.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(r.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(r.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new r();
            return r.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(r.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(r.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              r.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwardsNomination";
          }
        }
        class n extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return n.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new n();
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new n();
            return n.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class l extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              l.prototype.nominations || t.Sg(l.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: { nominations: { n: 1, c: r, r: !0, q: !0 } },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = t.w0(l.M())), l.sm_mbf;
          }
          toObject(e = !1) {
            return l.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(l.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(l.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new l();
            return l.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(l.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(l.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class D extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.steamid || t.Sg(D.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    code: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(D.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new D();
            return D.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(D.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(D.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class U extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.category_id || t.Sg(U.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    nominated_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    source: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(U.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new U();
            return U.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(U.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(U.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Request";
          }
        }
        class V extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.nominations || t.Sg(V.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { nominations: { n: 1, c: r, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(V.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new V();
            return V.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(V.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(V.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Response";
          }
        }
        class oe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.category_id || t.Sg(oe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(oe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new oe();
            return oe.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(oe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(oe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class le extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.played_app || t.Sg(le.M()),
              p.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    played_app: { n: 1, c: ce, r: !0, q: !0 },
                    suggested_events: { n: 2, c: ve, r: !0, q: !0 },
                    suggested_apps: { n: 3, c: Ee, r: !0, q: !0 },
                    debug_query: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(le.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new le();
            return le.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(le.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(le.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response";
          }
        }
        class ce extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.appid || t.Sg(ce.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    playtime: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ce.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ce();
            return ce.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ce.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ce.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class ve extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.clanid || t.Sg(ve.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    clanid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    event_gid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ve.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ve();
            return ve.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ve.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ve.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
          }
        }
        class Ee extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.appid || t.Sg(Ee.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ee.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new Ee();
            return Ee.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ee.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ee.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class Be extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.generate_new || t.Sg(Be.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    generate_new: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Be.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new Be();
            return Be.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Be.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Be.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class be extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.code || t.Sg(be.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    code: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(be.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new be();
            return be.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(be.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(be.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var Re;
        ((Ie) => {
          function e(Se, Le, Me) {
            return Se.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, v.I8)(de, Le, Me),
              _e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Ie.GetVoteDefinitions = e;
          function s(Se, Le, Me) {
            return Se.SendMsg(
              "StoreSales.SetVote#1",
              (0, v.I8)(pe, Le, Me),
              o,
              { ePrivilege: 1 },
            );
          }
          Ie.SetVote = s;
          function Q(Se, Le, Me) {
            return Se.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, v.I8)(R, Le, Me),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.GetUserVotes = Q;
        })(Re || (Re = {}));
        var Ke;
        ((Ie) => {
          function e(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, v.I8)(n, Te, Pe),
              l,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.GetUserNominations = e;
          function s(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, v.I8)(D, Te, Pe),
              l,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          Ie.GetOtherUserNominations = s;
          function Q(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.Nominate#1",
              (0, v.I8)(U, Te, Pe),
              V,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.Nominate = Q;
          function Se(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, v.I8)(oe, Te, Pe),
              le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.GetNominationRecommendations = Se;
          function Le(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, v.I8)(Be, Te, Pe),
              be,
              { ePrivilege: 1 },
            );
          }
          Ie.GetNominationShareLink = Le;
        })(Ke || (Ke = {}));
      },
      39829: (ae, K, a) => {
        "use strict";
        a.d(K, { Wn: () => v, a4: () => B });
        var f = a(33902),
          L = a(90626),
          c = a(73259);
        const p = "100% 0px 100% 0px",
          i = "SaleSection_",
          t = "tab",
          v = 940,
          T = 1920;
        function j() {
          return window.innerWidth ?? T;
        }
        function z() {
          return j() >= v;
        }
        function S() {
          const h = (0, f.d)(),
            [$, Z] = (0, L.useState)(() => j());
          return (
            (0, L.useEffect)(() => {
              const A = () => {
                Z(j());
              };
              return (
                A(),
                window.addEventListener("resize", A),
                () => window.removeEventListener("resize", A)
              );
            }, []),
            $
          );
        }
        function B(h = v) {
          return S() >= h;
        }
        function m(h) {
          const $ = S(),
            Z = $ >= v,
            A = GetSectionTypeLayoutSizes(h);
          return Z
            ? { nMaxCapsulesPerRow: A.nMaxItemsPerRow, bScreenIsWide: Z }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(Math.floor($ / A.nItemMinimumWidth), 1),
                  A.nMaxItemsPerRow,
                ),
                bScreenIsWide: Z,
              };
        }
        function k(h) {
          const $ = GetSectionTypeLayoutSizes(h);
          return z()
            ? $.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / $.nItemMinimumWidth),
                  1,
                ),
                $.nMaxItemsPerRow,
              );
        }
      },
      38340: (ae, K, a) => {
        "use strict";
        a.d(K, { eg: () => L, lw: () => f });
        const f = "{STEAM_CLAN_IMAGE}",
          L = "{STEAM_CLAN_LOC_IMAGE}",
          c = "{STEAM_APP_IMAGE}";
      },
      73259: (ae, K, a) => {
        "use strict";
        a.d(K, {
          CU: () => Ge,
          ye: () => ze,
          DJ: () => ke,
          G6: () => et,
          zv: () => Ae,
          IS: () => We,
          GE: () => Fe,
          yX: () => Ue,
          w: () => Ce,
          EE: () => xe,
          lh: () => fe,
          Pm: () => Ne,
          qR: () => Xe,
          dm: () => rt,
          DU: () => se,
          cB: () => He,
        });
        var f = a(25518),
          L = a(32093),
          c = a(99412),
          p = a(34041),
          i = a(14947);
        const t = null,
          v = {
            bBroadcastEnabled: !1,
            broadcastChatSetting: "hide",
            default_broadcast_title: "#Broadcast_default_title_dev",
            localized_broadcast_title: new Array(c.bP9),
            localized_broadcast_left_image: new Array(c.bP9),
            localized_broadcast_right_image: new Array(c.bP9),
            broadcast_whitelist: [],
          };
        var T = a(76559),
          j = a(29630),
          z = a(9046),
          S = a(50974),
          B = a(59432),
          m = a(64165),
          k = a(71742),
          h = a(18210),
          $ = a(13854),
          Z = a(71684),
          A = a(48473),
          W = a(36174),
          G = a(27066),
          w = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          E = (o, r, n, l) => {
            for (
              var D = l > 1 ? void 0 : l ? x(r, n) : r, U = o.length - 1, V;
              U >= 0;
              U--
            )
              (V = o[U]) && (D = (l ? V(r, n, D) : V(D)) || D);
            return l && D && w(r, n, D), D;
          };
        const M = null,
          g = { bScheduleEnabled: !1, scheduleEntries: [] },
          O = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class y {
          m_eventModel;
          constructor(r) {
            this.m_eventModel = r;
          }
          BHasScheduleEnabled() {
            return this.m_eventModel.jsondata.bScheduleEnabled;
          }
          GetScheduleEntries() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries
              : [];
          }
          GetScheduleEntriesCount() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries.length
              : 0;
          }
        }
        class I {
          m_eventModel;
          m_entry;
          constructor(r, n) {
            (this.m_eventModel = r), (this.m_entry = n);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }
        E([G.o], I.prototype, "GetEventStartTime", 1);
        const P = 1e4,
          C = 99999;
        function X() {
          return Math.floor(P + Math.random() * (C - P + 1));
        }
        var te = a(18994),
          Y = a(72609),
          u = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          _ = (o, r, n, l) => {
            for (
              var D = l > 1 ? void 0 : l ? d(r, n) : r, U = o.length - 1, V;
              U >= 0;
              U--
            )
              (V = o[U]) && (D = (l ? V(r, n, D) : V(D)) || D);
            return l && D && u(r, n, D), D;
          };
        const b = [
          c.u0,
          c.zeJ,
          c.Fa4,
          c.Aav,
          c.SRb,
          c.zA,
          c.y6,
          c.hGl,
          c.WNR,
          c.pIh,
          c.izQ,
          c.uYK,
          c.f4X,
          c.zcX,
          c.yhO,
        ];
        function H(o) {
          return (
            b.some((r) => r == o.GetEventType()) &&
            !o.BHasTag("steam_award_nomination_request") &&
            !o.BHasTag("curator")
          );
        }
        const J = [c.HRy, c.LOv, c.HFK];
        function F(o) {
          return !J.some((r) => r == o.GetEventType()) && !o.BHasTag("curator");
        }
        const N = [c.Fwr, c.HFK];
        function re(o) {
          return !N.some((r) => r == o.GetEventType()) && !o.BHasTag("curator");
        }
        const ne = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          q = new Set(ne);
        function ee(o) {
          return !!o.endTime && q.has(o.type);
        }
        const se = 593110,
          ie = 766,
          De = 221410,
          je = 1675200,
          st = 4165890,
          it = [se, ie, De],
          $e = [c.Fwr, c.HFK];
        function ot(o) {
          return (
            !$e.some((r) => r == o.GetEventType()) && !o.BHasTag("curator")
          );
        }
        function lt(o, r = GetEventRTimeNow()) {
          const n = 60 * Seconds.PerDay;
          return (
            o.BIsVisibleEvent(r) &&
            o.BIsOGGEvent() &&
            (o.rtime32_last_modified ?? 0) > r - n &&
            !Qe(o)
          );
        }
        function Qe(o) {
          return (
            o.BHasTag("mod_reviewed") && !o.BHasTag("mod_require_rereview")
          );
        }
        var Ae = ((o) => (
          (o[(o.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (o[(o.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (o[(o.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (o[(o.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          o
        ))(Ae || {});
        function ct(o) {
          switch (o) {
            case "links":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "itemdef":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "contenthubspecials":
              return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
            default:
              return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
          }
        }
        const ut = "bordered";
        var xe = ((o) => (
            (o[(o.k_EStoreFilterClauseTypeOr = 0)] =
              "k_EStoreFilterClauseTypeOr"),
            (o[(o.k_EStoreFilterClauseTypeAnd = 1)] =
              "k_EStoreFilterClauseTypeAnd"),
            (o[(o.k_EStoreFilterClauseTypeStoreTag = 2)] =
              "k_EStoreFilterClauseTypeStoreTag"),
            (o[(o.k_EStoreFilterClauseTypeFeatureTag = 3)] =
              "k_EStoreFilterClauseTypeFeatureTag"),
            (o[(o.k_EStoreFilterClauseTypeLanguage = 4)] =
              "k_EStoreFilterClauseTypeLanguage"),
            (o[(o.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
              "k_EStoreFilterClauseTypeContentDescriptor"),
            (o[(o.k_EStoreFilterClauseTypePrice = 6)] =
              "k_EStoreFilterClauseTypePrice"),
            (o[(o.k_EStoreFilterClauseTypeAppType = 7)] =
              "k_EStoreFilterClauseTypeAppType"),
            (o[(o.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
              "k_EStoreFilterClauseTypeOptInRegistrationTag"),
            o
          ))(xe || {}),
          Fe = ((o) => (
            (o[(o.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (o[(o.k_ELanguage = 1)] = "k_ELanguage"),
            (o[(o.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (o[(o.k_EUserPreference = 3)] = "k_EUserPreference"),
            (o[(o.k_EPrice = 4)] = "k_EPrice"),
            (o[(o.k_EAppType = 5)] = "k_EAppType"),
            o
          ))(Fe || {}),
          Ue = ((o) => (
            (o[(o.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (o[(o.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (o[(o.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            o
          ))(Ue || {}),
          We = ((o) => (
            (o[(o.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (o[(o.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (o[(o.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            o
          ))(We || {}),
          Ye = ((o) => (
            (o.Steam = "Steam"),
            (o.Facebook = "Facebook"),
            (o.Twitter = "Twitter"),
            (o.Reddit = "Reddit"),
            o
          ))(Ye || {}),
          Je = ((o) => (
            (o.Summary = "summary"),
            (o.SummaryLargeImage = "summary_large_image"),
            o
          ))(Je || {});
        const dt = null;
        function mt(o) {
          return o && !!o.show_as_carousel && !o.enable_faceted_browsing;
        }
        function gt(o) {
          return o.carousel_rows || 1;
        }
        function ht(o) {
          return o.cap_item_count || 0;
        }
        function _t(o) {
          return o.cap_section_row_count && o.cap_section_row_count > 0
            ? o.cap_section_row_count
            : o.section_type == "trailercarousel"
              ? 1
              : o.cap_section_content
                ? 4
                : 0;
        }
        function Xe(o) {
          return o?.store_filter ? JSON.stringify(o.store_filter) : void 0;
        }
        function ze(o) {
          switch (o) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
              return !0;
          }
          return !1;
        }
        function ft(o) {
          switch (o) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function Ze(o) {
          switch (o) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
            case "events":
            case "sale_events":
            case "contenthubspecials":
              return !0;
          }
          return !1;
        }
        function Ge(o, r = !1) {
          return !o || !Ze(o.section_type)
            ? !1
            : r
              ? o.sale_tag_filter?.clauses?.length
                ? !0
                : !!o.smart_section
              : !!o.smart_section && o.smart_section_type != null;
        }
        function Ne(o) {
          return Ge(o) ? o?.smart_section_type : void 0;
        }
        function Ve(o) {
          return (
            (o.jsondata.sale_ml_recommender_delay_hours &&
              (o.startTime ?? 0) +
                o.jsondata.sale_ml_recommender_delay_hours * Seconds.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        function qe(o, r, n) {
          return !o.BIsNextFest() || !ze(r.section_type)
            ? !1
            : n == EExplorationMode.Random
              ? !0
              : Ve(o) > 0;
        }
        function pt(o, r, n) {
          return !!(r.use_random_order || qe(o, r, n));
        }
        const et = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(c.bP9),
            localized_label_image: new Array(c.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          tt = { internal_type: "subscription_pricing" };
        var Ce = ((o) => (
          (o[(o.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (o[(o.k_EContentHub = 1)] = "k_EContentHub"),
          o
        ))(Ce || {});
        function yt(o) {
          return {
            arrowFill: o?.sale_carousel_arrow_color,
            arrowStyle: o?.sale_carousel_arrow_style,
            breadcrumbActiveColor: o?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: o?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: o?.sale_carousel_breadcrumb_style,
          };
        }
        function vt(o, r, n) {
          (r.library_spotlight = void 0),
            r.email_setting &&
              ((r.email_setting.locked = void 0),
              (r.email_setting.force_feature_id = void 0)),
            (r.steam_award_category_suggestion = void 0),
            (r.steam_award_category_voteids = void 0),
            (r.action_end_time = void 0),
            (r.ownership_requirement_info = void 0),
            (r.sale_use_subscription_layout = void 0),
            (r.app_right_requirement_info = void 0),
            (r.clone_from_event_gid = n),
            (r.clone_from_sale_enabled = r.bSaleEnabled),
            (r.bSaleEnabled = o == k_EClanEventType_CreatorHome),
            (r.sale_discount_event_id = void 0),
            (r.valve_access_log = []),
            (r.bInvisibleGameOptIn = void 0),
            (r.rt_migrated_time = void 0),
            (r.optin_tagid || r.sale_opt_in_page_name) &&
              ((r.tagged_items = void 0),
              (r.tagged_item_filter = void 0),
              (r.auto_item_tags = void 0)),
            (r.optin_prune_tagid = void 0),
            (r.optin_tagid = void 0),
            (r.sale_opt_in_page_name = void 0),
            (r.prune_list_optin_name = void 0),
            (r.optin_only = void 0),
            (r.child_demo_appid_for_repost = void 0),
            (r.sale_vanity_id = void 0),
            (r.sale_update_landing_page_vanity_id = void 0),
            (r.automatically_push_updated_source = void 0),
            (r.country_restriction = void 0);
        }
        const ke = {
            localized_subtitle: new Array(c.bP9),
            localized_summary: new Array(c.bP9),
            localized_title_image: new Array(c.bP9),
            localized_capsule_image: new Array(c.bP9),
            bSaleEnabled: !1,
            sale_show_creator: !1,
            sale_sections: [],
            sale_browsemore_text: "",
            sale_browsemore_url: "",
            sale_browsemore_color: "",
            sale_browsemore_bgcolor: "",
            localized_sale_header: new Array(c.bP9),
            localized_sale_overlay: new Array(c.bP9),
            localized_sale_product_banner: new Array(c.bP9),
            localized_sale_product_mobile_banner: new Array(c.bP9),
            localized_sale_logo: new Array(c.bP9),
            sale_font: "",
            sale_background_color: "",
            sale_header_offset: 530,
            referenced_appids: [],
            ...v,
            ...g,
          },
          He = "old_announce_",
          rt = 80,
          Et = 120,
          at = 180,
          Bt = "hide_from_events_and_discount",
          nt = [
            "workshop",
            "patchnotes",
            "contenthub",
            "skip_megaphone",
            "curator",
            "curator_group_members",
            "curator_public",
            "audience_followers",
            "enable_steam_china",
            "disable_steam_global",
            "adult_only_content",
            "stablechannel",
            "betachannel",
            "previewchannel",
          ],
          bt = null,
          ye = null,
          ue = [c.HRy, c.LOv, c.HFK],
          ge = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          he = [L.TU.k_ESteamRealmGlobal],
          de = [L.TU.k_ESteamRealmChina],
          _e = [L.TU.k_ESteamRealmGlobal, L.TU.k_ESteamRealmChina],
          me = [],
          R = class Oe {
            constructor() {
              (0, i.Gn)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new T.b();
            forumTopicGID = void 0;
            clanSteamIDOriginal = void 0;
            type = c.DRF;
            appid = 0;
            name = new Map();
            description = new Map();
            timestamp_loc_updated = new Map();
            createTime = void 0;
            startTime = void 0;
            endTime = void 0;
            visibilityStartTime = void 0;
            visibilityEndTime = void 0;
            m_nBuildID = void 0;
            m_strBuildBranch = void 0;
            postTime = void 0;
            visibility_state = 0;
            broadcaster = void 0;
            jsondata = ke;
            nCommentCount = 0;
            nVotesUp = 0;
            nVotesDown = 0;
            comment_type;
            gidfeature;
            gidfeature2;
            featured_app_tagid;
            bOldAnnouncement = !1;
            announcementClanSteamID = void 0;
            loadedAllLanguages = !1;
            bLoaded = !1;
            deleteInProgress = !1;
            vecTags = new Array();
            creator_steamid;
            last_update_steamid = void 0;
            rtime32_last_modified = void 0;
            rtime32_last_solr_search_col_updated = void 0;
            rtime32_last_local_modification = void 0;
            rtime32_moderator_reviewed = void 0;
            video_preview_type = void 0;
            video_preview_id = void 0;
            has_live_stream;
            live_stream_viewer_count;
            m_overrideCurrentDay = void 0;
            fnGetLocalizedGroupImages;
            BIsPartnerEvent() {
              return !this.bOldAnnouncement && !!this.GID;
            }
            static FromJSON(r) {
              let n = new Oe(),
                l = JSON.parse(r);
              return (
                Object.assign(n, l),
                (n.name = new Map(l.name)),
                (n.description = new Map(l.description)),
                (n.vecTags = [...(l.vecTags ?? l.tags ?? [])]),
                (n.clanSteamID = new T.b(l.clanSteamID)),
                (0, k.wT)(
                  n.clanSteamID && n.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    n.clanSteamID.ConvertTo64BitString(),
                ),
                l.broadcaster &&
                  ((n.broadcaster = new T.b(l.broadcaster)),
                  (0, k.wT)(
                    n.broadcaster && n.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      n.broadcaster.ConvertTo64BitString(),
                  )),
                n
              );
            }
            static FromCClanEventData(r, n) {
              let l = new Oe();
              (l.GID = r.gid),
                (l.clanSteamID = new T.b(r.clan_steamid)),
                l.name.set(n, r.event_name ?? ""),
                (l.type = r.event_type),
                (l.appid = r.appid ?? 0),
                (l.startTime = r.rtime32_start_time),
                (l.endTime = r.rtime32_end_time),
                (l.nCommentCount = r.comment_count ?? 0),
                (l.creator_steamid = r.creator_steamid),
                (l.last_update_steamid = r.last_update_steamid),
                (l.jsondata = JSON.parse(r.jsondata ?? "{}")),
                (l.rtime32_last_local_modification = r.rtime32_last_modified),
                r.published
                  ? r.hidden
                    ? (l.visibility_state = r.unlisted ? 3 : 1)
                    : (l.visibility_state = 2)
                  : (l.visibility_state = 0),
                (l.createTime = r.rtime_created),
                (l.m_nBuildID = r.build_id),
                (l.m_strBuildBranch = r.build_branch),
                (l.visibilityStartTime = r.rtime32_visibility_start),
                (l.visibilityEndTime = r.rtime32_visibility_end),
                (l.rtime32_moderator_reviewed = r.rtime_mod_reviewed),
                (l.featured_app_tagid = r.featured_app_tagid),
                r.broadcaster_accountid &&
                  (l.broadcaster = T.b.InitFromAccountID(
                    r.broadcaster_accountid,
                  )),
                (l.AnnouncementGID = r.announcement_body?.gid ?? "0");
              const D = r.clan_steamid_original;
              return (
                D
                  ? (l.clanSteamIDOriginal = new T.b(D))
                  : r.announcement_body?.clanid &&
                    (l.clanSteamIDOriginal = T.b.InitFromClanID(
                      Number(r.announcement_body.clanid),
                    )),
                (l.postTime = r.announcement_body?.posttime),
                (l.forumTopicGID = r.forum_topic_id),
                l.name.set(n, r.announcement_body?.headline ?? ""),
                l.description.set(n, r.announcement_body?.body ?? ""),
                (l.nCommentCount = r.comment_count ?? 0),
                (l.vecTags = [...(r.announcement_body?.tags ?? [])]),
                (l.forumTopicGID = r.announcement_body?.forum_topic_id),
                (l.nVotesUp = r.announcement_body?.voteupcount ?? 0),
                (l.nVotesDown = r.announcement_body?.votedowncount ?? 0),
                l
              );
            }
            toJSON(r) {
              let n = new Object();
              return (
                Object.assign(n, this),
                (n.name = Array.from(this.name)),
                (n.description = Array.from(this.description)),
                (n.vecTags = Array.from(this.vecTags)),
                (n.tags = n.vecTags),
                (n.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
                this.broadcaster &&
                  (n.broadcaster = this.broadcaster.ConvertTo64BitString()),
                n
              );
            }
            clone(r = !1) {
              let n = new Oe();
              if (
                ((n.GID = this.GID),
                (n.AnnouncementGID = this.AnnouncementGID),
                (n.clanSteamID = this.clanSteamID),
                (n.clanSteamIDOriginal = this.clanSteamIDOriginal),
                (n.bOldAnnouncement = this.bOldAnnouncement),
                (n.nCommentCount = this.nCommentCount),
                (n.nVotesUp = this.nVotesUp),
                (n.nVotesDown = this.nVotesDown),
                (n.forumTopicGID = this.forumTopicGID),
                (n.comment_type = this.comment_type),
                (n.gidfeature = this.gidfeature),
                (n.gidfeature2 = this.gidfeature2),
                (n.featured_app_tagid = this.featured_app_tagid),
                (n.creator_steamid = this.creator_steamid),
                (n.last_update_steamid = this.last_update_steamid),
                (n.rtime32_last_modified = this.rtime32_last_modified),
                (n.rtime32_last_solr_search_col_updated =
                  this.rtime32_last_solr_search_col_updated),
                (n.rtime32_moderator_reviewed =
                  this.rtime32_moderator_reviewed),
                (n.type = this.type),
                (n.appid = this.appid),
                (n.name = new Map()),
                this.name.forEach((l, D) => {
                  n.name.set(D, l);
                }),
                (n.description = new Map()),
                this.description.forEach((l, D) => {
                  n.description.set(D, l);
                }),
                (n.timestamp_loc_updated = new Map()),
                this.timestamp_loc_updated.forEach((l, D) => {
                  n.timestamp_loc_updated.set(D, l);
                }),
                (n.createTime = this.createTime ?? 0),
                (n.startTime = this.startTime),
                (n.endTime = this.endTime),
                (n.visibilityStartTime = this.visibilityStartTime),
                (n.visibilityEndTime = this.visibilityEndTime),
                (n.postTime = this.postTime),
                (n.visibility_state = this.visibility_state),
                (n.loadedAllLanguages = this.loadedAllLanguages),
                (n.bLoaded = this.bLoaded),
                (n.broadcaster = this.broadcaster
                  ? new T.b(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (n.vecTags = new Array()),
                r
                  ? ((n.m_nBuildID = this.m_nBuildID),
                    (n.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((l) => n.vecTags.push(l)))
                  : this.vecTags.forEach((l) => {
                      nt.includes(l) && n.vecTags.push(l);
                    }),
                n.jsondata.email_setting)
              ) {
                let l = 100;
                for (let D of n.jsondata.email_setting.sections)
                  D.unique_id || ((D.unique_id = `email_section_${l}`), l++);
              }
              return n;
            }
            GetLastReferencedSaleDayFromCapsules(r, n) {
              let l = n;
              return (
                r?.forEach((D) => {
                  D.visibility_index !== void 0 &&
                    (l =
                      l === void 0
                        ? D.visibility_index
                        : Math.max(l, D.visibility_index));
                }),
                l
              );
            }
            GetLastReferencedSaleDay() {
              let r;
              for (const n of this.GetSaleSections())
                if (n.section_type === "tabs") {
                  if ((n.tabs?.length ?? 0) > 0)
                    for (const l of n.tabs ?? [])
                      r = this.GetLastReferencedSaleDayFromCapsules(
                        l.capsules,
                        r,
                      );
                } else
                  r = this.GetLastReferencedSaleDayFromCapsules(n.capsules, r);
              return (
                (this.jsondata.sale_num_headers ?? 0) > 1 &&
                  (r == null || r < (this.jsondata.sale_num_headers ?? 0)) &&
                  (r = this.jsondata.sale_num_headers),
                r
              );
            }
            GetDayIndexFromEventStart(r = (0, B.Gw)()) {
              let n = 0;
              this.startTime !== void 0 &&
                r >= this.startTime &&
                (n = Math.floor((r - this.startTime) / (3600 * 24))),
                this.m_overrideCurrentDay !== void 0 &&
                  this.m_overrideCurrentDay >= 0 &&
                  (n = this.m_overrideCurrentDay);
              const l = this.GetLastReferencedSaleDay() || 0;
              return Math.min(n, l);
            }
            GetNameWithFallback(r) {
              const n = h.A0.GetELanguageFallback(r);
              return this.name.get(r) || this.name.get(n);
            }
            BInRealmGlobal() {
              return !this.BHasTag("disable_steam_global");
            }
            BInRealmChina() {
              return this.BHasTag("enable_steam_china");
            }
            BIsLanguageValidForRealms(r) {
              return !!(
                (this.BInRealmGlobal() &&
                  h.A0.IsELanguageValidInRealm(r, L.TU.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  h.A0.IsELanguageValidInRealm(r, L.TU.k_ESteamRealmChina))
              );
            }
            GetImgArray(r) {
              let n = [];
              if (
                ((r === "background" || r == "localized_title_image") &&
                  (n = this.jsondata.localized_title_image),
                r === "capsule")
              )
                n = this.jsondata.localized_capsule_image;
              else if (r === "spotlight")
                n = this.jsondata.localized_spotlight_image;
              else if (r === "email_full" || r === "email_centered")
                n = this.jsondata.email_setting
                  ? this.jsondata.email_setting.sections[0].localized_image
                  : [];
              else if (r === "broadcast_left")
                n = this.jsondata.localized_broadcast_left_image;
              else if (r === "broadcast_right")
                n = this.jsondata.localized_broadcast_right_image;
              else if (r === "sale_header")
                if ((this.jsondata.sale_num_headers ?? 0) > 1) {
                  const l = Math.min(
                    (this.jsondata.sale_num_headers ?? 0) - 1,
                    this.GetDayIndexFromEventStart(),
                  );
                  n = this.jsondata.localized_per_day_sales_header?.[l];
                } else n = this.jsondata.localized_sale_header;
              else
                r === "sale_logo"
                  ? (n = this.jsondata.localized_sale_logo)
                  : r === "sale_overlay"
                    ? (n = this.jsondata.localized_sale_overlay)
                    : z.pb.includes(r)
                      ? (n = this.fnGetLocalizedGroupImages?.())
                      : r === "product_banner"
                        ? (n = this.jsondata.localized_sale_product_banner)
                        : r === "product_mobile_banner"
                          ? (n =
                              this.jsondata
                                .localized_sale_product_mobile_banner)
                          : r === "bestofyear_banner"
                            ? (n = this.jsondata.localized_bestofyear_banner)
                            : r === "bestofyear_banner_mobile"
                              ? (n =
                                  this.jsondata
                                    .localized_bestofyear_banner_mobile)
                              : r === "localized_store_app_spotlight"
                                ? (n =
                                    this.jsondata.localized_store_app_spotlight)
                                : r ===
                                    "localized_store_app_spotlight_mobile" &&
                                  (n =
                                    this.jsondata
                                      .localized_store_app_spotlight_mobile);
              return n;
            }
            GetImageURL(r, n = c.Bhc, l = z.wI.full) {
              const D = this.GetImgArray(r),
                U = D && D.length > n && D[n] != null;
              return U && D[n]?.startsWith("http")
                ? D[n]
                : U
                  ? j.zU.GenerateURLFromHashAndExt(
                      this.clanSteamID,
                      D[n] ?? "",
                      l,
                    )
                  : void 0;
            }
            GetImageHash(r, n = c.Bhc) {
              let l = this.GetImgArray(r);
              return l && l.length > n && l[n] != null
                ? l[n].substr(0, l[n].length - 4)
                : null;
            }
            GetImageHashAndExt(r, n = c.Bhc) {
              let l = this.GetImgArray(r);
              return l && l.length > n && l[n] != null ? l[n] : null;
            }
            BHasSomeImage(r) {
              let n = this.GetImgArray(r);
              return !!n && n.some((l) => l != null && l.length > 0);
            }
            BHasImage(r, n) {
              let l = this.GetImgArray(r);
              return !!l && l.length > n && l[n] != null;
            }
            BHasAnnouncementGID() {
              return (
                this.AnnouncementGID !== null &&
                this.AnnouncementGID !== void 0 &&
                this.AnnouncementGID.length > 1
              );
            }
            GetAnnouncementGID() {
              return this.AnnouncementGID;
            }
            BHasForumTopicGID() {
              return (
                this.forumTopicGID !== null &&
                this.forumTopicGID !== void 0 &&
                this.forumTopicGID.length > 1
              );
            }
            GetForumTopicURL(r) {
              return this.BHasForumTopicGID()
                ? this.appid
                  ? Y.TS.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : r
                    ? Y.TS.COMMUNITY_BASE_URL +
                      "groups/" +
                      r +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : Y.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            GetDiscussionURL(r) {
              return this.BHasForumTopicGID()
                ? this.GetForumTopicURL(r)
                : this.GetLegacyAnnouncementCommentsURL();
            }
            GetLegacyAnnouncementCommentsURL() {
              const r = this.clanSteamIDOriginal ?? this.clanSteamID;
              return !this.BHasAnnouncementGID() || !r || !r.BIsValid()
                ? ""
                : Y.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    r.ConvertTo64BitString() +
                    "/announcements/old_detail/" +
                    this.AnnouncementGID;
            }
            BIsEventInFuture(r = (0, B.Gw)()) {
              return r < (this.startTime ?? 0);
            }
            BHasEventEnded(r = (0, B.Gw)()) {
              return (this.endTime ?? 0) < r;
            }
            UpdateVoteCount(r, n) {
              r == "up"
                ? (this.nVotesUp = (0, $.OQ)(
                    this.nVotesUp + n,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : r == "down" &&
                  (this.nVotesDown = (0, $.OQ)(
                    this.nVotesDown + n,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ));
            }
            GetImageFromBeginningOfDescription(r, n) {
              let l = this.GetDescriptionWithFallback(r);
              if (l) {
                let D = l.indexOf("[img]");
                if (D !== -1 && D < n) {
                  D += 5;
                  let U = l.indexOf("[/img]", D);
                  if (U != -1) {
                    let V = l.substring(D, U).trim();
                    if (V.length != 0)
                      return j.zU.ReplacementTokenToClanImageURL(V);
                  }
                }
              }
              return null;
            }
            GetAppIDOrReferenceAppID() {
              return this.appid
                ? this.appid
                : this.jsondata?.referenced_appids?.[0];
            }
            BImageNeedScreenshotFallback(r, n) {
              let l = this.GetImageURL(r, n);
              if (!l || l.length == 0) {
                const D = h.A0.GetELanguageFallback(n);
                n != D && (l = this.GetImageURL(r, D));
              }
              return !l || l.length == 0;
            }
            GetDescriptionWithFallback(r) {
              const n = h.A0.GetELanguageFallback(r);
              return this.description.get(r) || this.description.get(n);
            }
            BIsImageSafeForAllAges(r, n, l = {}) {
              const D = h.A0.GetELanguageFallback(n);
              return (
                this.GetImageURL(r, n) != null ||
                (n != D && this.GetImageURL(r, D) != null) ||
                (this.appid && l.bAppHasAgeSafeScreenshots) ||
                (!this.appid &&
                  l.clanInfo &&
                  ((l.clanInfo.is_creator_home && !l.clanInfo.is_ogg) ||
                    l.clanInfo.is_curator))
              );
            }
            BIsVisibleEvent(r = (0, B.Gw)()) {
              let n = Math.floor(r);
              return (
                this.visibility_state == 3 ||
                (this.visibility_state == 2 &&
                  n > (this.visibilityStartTime ?? 0) &&
                  ((this.visibilityEndTime ?? 0) < 10 ||
                    n < (this.visibilityEndTime ?? 0)))
              );
            }
            BIsStagedEvent() {
              return this.visibility_state == 1;
            }
            BIsUnlistedEvent() {
              return this.visibility_state == 3;
            }
            GetStartTimeAndDateUnixSeconds() {
              return this.startTime ?? 0;
            }
            GetEndTimeAndDateUnixSeconds() {
              return this.endTime ?? 0;
            }
            GetPostTimeAndDateUnixSeconds() {
              return this.postTime ?? 0;
            }
            GetVisibilityStartTimeAndDateUnixSeconds() {
              return this.visibilityStartTime ?? 0;
            }
            BIsEventActionEnabled(r = (0, B.Gw)()) {
              return (
                !!this.jsondata.action_end_time &&
                (this.jsondata.action_end_time > r ||
                  (this.jsondata.action_end_time == 1575396e3 &&
                    1606845600 > r))
              );
            }
            BHasSubTitle(r) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                r >= this.jsondata.localized_subtitle.length
              )
                return !1;
              let n = this.jsondata.localized_subtitle[r];
              return n != null && n != "";
            }
            GetSubTitle(r) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                r >= this.jsondata.localized_subtitle.length
              )
                return "";
              let n = this.jsondata.localized_subtitle[r];
              return n || "";
            }
            GetSubTitleWithLanguageFallback(r) {
              return this.jsondata
                ? h.NT.GetWithFallback(this.jsondata.localized_subtitle, r)
                : "";
            }
            GetSubTitleWithSummaryFallback(r) {
              return (
                h.NT.GetWithFallback(this.jsondata?.localized_subtitle, r) ||
                Oe.GenerateSummaryFromText(this.GetDescriptionWithFallback(r))
              );
            }
            GetSummaryWithFallback(r, n) {
              return (
                h.NT.GetWithFallback(this.jsondata?.localized_summary, r) ||
                Oe.GenerateSummaryFromText(
                  this.GetDescriptionWithFallback(r),
                  n,
                )
              );
            }
            GetSummary(r) {
              return h.NT.Get(this.jsondata?.localized_summary ?? [], r);
            }
            BHasSummary(r) {
              return !!this.GetSummary(r);
            }
            static GenerateSummaryFromText(r, n) {
              return !r || r.trim().length == 0
                ? ""
                : ((r = (0, f.Yj)(r, [
                    "img",
                    "h1",
                    "h2",
                    "h3",
                    "spoiler",
                    "table",
                    "previewyoutube",
                    "looping_media",
                    "roomeffect",
                    "sticker",
                  ])),
                  (r = (0, f.zV)(r, ["p"], " ")),
                  (r = (0, f.zV)(r)),
                  (r = (0, A.aX)(r)),
                  (0, A.bC)(r, n || at));
            }
            BHasTag(r) {
              return this.vecTags.indexOf(r) != -1;
            }
            BHasTagStartingWith(r) {
              return this.vecTags.some((n) => n?.startsWith(r));
            }
            BIsOGGEvent() {
              return !!this.appid && this.appid > 0;
            }
            BShowLibrarySpotlight(r) {
              if (!r) return !!this.jsondata.library_spotlight;
              if (!this.jsondata.library_spotlight || ue.includes(this.type))
                return !1;
              const n = new Date().getTime() / 1e3;
              return !(
                (ge.includes(this.type) && this.endTime && n > this.endTime) ||
                (this.startTime && n > this.startTime + W.Kp.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(r, n = (0, B.Gw)()) {
              if (this.jsondata.bSaleEnabled)
                return this.BHasBroadcastEnabled();
              const l = this.endTime ? this.endTime : n + 3600;
              return (
                this.BHasBroadcastEnabled() &&
                !!this.jsondata.broadcast_whitelist &&
                this.jsondata.broadcast_whitelist.length > 0 &&
                (r || ((this.startTime ?? 0) - 600 <= n && n < l))
              );
            }
            BHasBroadcastForceBanner() {
              return !!this.jsondata.broadcast_force_banner;
            }
            BSaleShowBroadcastAtTopOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (n) => n.section_type == "broadcast",
                )
              );
            }
            BSaleShowCuratorRecommendationAtBottomOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (n) => n.section_type == "curator_recommendation",
                )
              );
            }
            GetBroadcastChatVisibility() {
              return this.jsondata.broadcastChatSetting || "hide";
            }
            GetBroadcastTitle(r) {
              return (
                h.NT.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  r,
                ) ||
                (0, h.we)(
                  this.jsondata.default_broadcast_title ??
                    "#Broadcast_default_title_dev",
                )
              );
            }
            GetBroadcastWhitelist() {
              return this.jsondata.broadcast_whitelist ?? [];
            }
            GetBroadcastWhitelistAsSteamIDs() {
              return (
                this.jsondata.broadcast_whitelist?.map((r) =>
                  T.b.InitFromAccountID(r).ConvertTo64BitString(),
                ) ?? []
              );
            }
            BIsBroadcastAccountIDWhiteListed(r) {
              return (this.jsondata.broadcast_whitelist || []).includes(
                Number(r),
              );
            }
            BHasSaleEnabled() {
              return !!this.jsondata.bSaleEnabled;
            }
            BHasSaleVanity() {
              return (
                !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id
              );
            }
            GetSaleVanity() {
              return this.jsondata.sale_vanity_id ?? "";
            }
            BHasSaleUpdateLandingPageVanity() {
              return (
                !!this.jsondata.bSaleEnabled &&
                !!this.jsondata.sale_update_landing_page_vanity_id
              );
            }
            GetSaleUpdateLandingPageVanity() {
              return this.jsondata.sale_update_landing_page_vanity_id ?? "";
            }
            GetSaleURL(r) {
              if (!this.jsondata.bSaleEnabled) return null;
              if (this.jsondata.sale_update_landing_page_vanity_id)
                return (
                  Y.TS.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  Y.TS.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const U = this.jsondata.source_content_hub;
                return U
                  ? typeof U == "string"
                    ? Y.TS.STORE_BASE_URL + "category/" + U
                    : U.type == "category"
                      ? Y.TS.STORE_BASE_URL + "category/" + U.category
                      : U.type == "tags"
                        ? Y.TS.STORE_BASE_URL +
                          "tags/" +
                          ((0, h.l4)() || "en") +
                          "/" +
                          U.tagid
                        : U.type == "freetoplay"
                          ? Y.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : U.type == "earlyaccess"
                            ? Y.TS.STORE_BASE_URL + "genre/Early%20Access/"
                            : Y.TS.STORE_BASE_URL + U.type
                  : Y.TS.STORE_BASE_URL +
                      "sale/" +
                      this.jsondata.sale_vanity_id;
              }
              const n = this.clanSteamID.GetAccountID(),
                l =
                  !!this.jsondata
                    .sale_vanity_id_valve_approved_for_sale_subpath,
                D = this.GetSaleVanity();
              return r && (0, m.s)(n, l)
                ? r + "sale/" + D
                : Y.TS.STORE_BASE_URL + (0, m.n)(n, D, l);
            }
            BHasEmailEnabled() {
              return (
                !!this.jsondata.email_setting &&
                this.jsondata.email_setting.bEnable
              );
            }
            GetSaleSections() {
              return this.jsondata.sale_sections ?? [];
            }
            GenerateDynamicSaleSections(r, n, l, D, U, V) {
              const oe = [],
                le = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let ce = C + 10;
              return (
                r &&
                  oe.push({
                    ...le,
                    section_type: "footer_self_creator_home",
                    unique_id: ce++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                n &&
                  oe.push({
                    ...le,
                    section_type: "footer_browse_more",
                    unique_id: ce++,
                  }),
                D &&
                  oe.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      ce++,
                      le,
                      V,
                    ),
                  ),
                l &&
                  oe.push({
                    ...le,
                    section_type: "footer_default_social_share",
                    unique_id: ce++,
                  }),
                U &&
                  oe.push({
                    ...le,
                    section_type: "nextfest_header",
                    unique_id: ce++,
                  }),
                oe
              );
            }
            GetSaleSectionIncludingFooterSections(r = 0) {
              const n = this.jsondata?.sale_show_creator,
                l = this.jsondata.sale_browse_more_button,
                D =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                U = this.GetEventType() == c.ajI,
                V = this.BShowNextFestHeader(!0);
              return n || l || D || U || V
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, V, r),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!n, !!l, D, U, !1, r),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(r, n = 0) {
              return r > C
                ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, n).find(
                    (D) => D.unique_id == r,
                  )
                : this.jsondata.sale_sections?.find((l) => l.unique_id == r);
            }
            GetSaleSectionCount() {
              return this.jsondata.sale_sections?.length ?? 0;
            }
            GetSaleSectionsByType(r) {
              return (
                this.jsondata.sale_sections?.filter(
                  (n) => n.section_type == r,
                ) ?? []
              );
            }
            GetLastUpdateTime() {
              return this.rtime32_last_modified ?? 0;
            }
            GetLastUpdaterSteamIDStr() {
              return this.last_update_steamid ?? "";
            }
            GetSaleSectionFirstMatchByType(r) {
              const n = this.jsondata.sale_sections?.length ?? 0;
              if (n != 0) {
                for (let l = 0; l < n; ++l)
                  if (this.jsondata.sale_sections[l].section_type === r)
                    return this.jsondata.sale_sections[l];
              }
            }
            static AccumulateCapsuleListIDs(r, n, l, D) {
              r &&
                r.forEach((U) => {
                  U &&
                    U.type &&
                    n.has(U.type) &&
                    (!D || D(U.id)) &&
                    l.add(U.id);
                });
            }
            GetSaleItemOfType(r, n) {
              if (!this.jsondata.sale_sections) return new Set();
              const l = new Set(r),
                D = new Set();
              return (
                (0, k.wT)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((U) => {
                  Oe.AccumulateCapsuleListIDs([U.capsule], l, D, n);
                }),
                this.jsondata.sale_sections.forEach((U) => {
                  if (ze(U.section_type))
                    Oe.AccumulateCapsuleListIDs(U.capsules, l, D, n);
                  else if (U.section_type === "tabs" && U.tabs)
                    for (const V of U.tabs)
                      Oe.AccumulateCapsuleListIDs(V.capsules, l, D, n);
                }),
                D
              );
            }
            GetSaleItemCountOfType(r, n) {
              return this.GetSaleItemOfType(r, n).size;
            }
            GetSaleFeaturedAppsCount(r) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music"],
                r,
              );
            }
            GetSaleFeaturedAppsAndDemosCount(r) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                r,
              );
            }
            GetSaleFeaturedBundlesCount(r) {
              return this.GetSaleItemCountOfType(["bundle"], r);
            }
            GetSaleFeaturedPackagesCount(r) {
              return this.GetSaleItemCountOfType(["sub"], r);
            }
            GetSaleFeaturedApps(r) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music"],
                r,
              );
            }
            GetSaleFeaturedAppsAndDemos(r) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                r,
              );
            }
            GetSaleFeaturedBundles(r) {
              return this.GetSaleItemOfType(["bundle"], r);
            }
            GetSaleFeaturedPackages(r) {
              return this.GetSaleItemOfType(["sub"], r);
            }
            GetTaggedItems() {
              return this.jsondata.tagged_items || [];
            }
            BHasScheduleEnabled() {
              return this.jsondata.bScheduleEnabled;
            }
            GetEventType() {
              return this.type;
            }
            GetEventTypeAsString() {
              return (0, Z.rG)(this.type);
            }
            GetCategoryAsString(r) {
              return this.BHasTag("steam_award_nomination_request")
                ? (0, h.we)("#PartnerEvent_SteamAwardNominations")
                : this.BHasTag("steam_award_vote_request")
                  ? (0, h.we)("#PartnerEvent_SteamAwardVoteRequest")
                  : this.BHasTag("steam_game_festival_artist_statement")
                    ? (0, h.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                    : this.BHasTag("steam_game_festival_office_hour")
                      ? (0, h.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                      : this.BHasTag("steam_game_festival_broadcast") ||
                          (this.BHasTagStartingWith("sale_nextfest_") &&
                            this.type == c.KDJ)
                        ? (0, h.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && r
                          ? (0, h.we)("#PartnerEvent_MM_MajorUpdate")
                          : this.GetEventTypeAsString();
            }
            GetAllTags() {
              return this.vecTags;
            }
            BMatchesAllTags(r) {
              let n = !0;
              return (
                r?.forEach((l) => {
                  this.vecTags.includes(l) || (n = !1);
                }),
                n
              );
            }
            BAllowedSteamStoreSpotlight() {
              return !!this.jsondata.store_spotlight;
            }
            BHasLibaryHomeSpotlight() {
              return !!this.jsondata.library_home_spotlight;
            }
            BHasSaleProductBanners() {
              return (
                !!this.jsondata.bSaleEnabled &&
                (this.BHasSomeImage("product_banner") ||
                  this.BHasSomeImage("product_banner_override"))
              );
            }
            GetSteamAwardCategory() {
              return this.jsondata.steam_award_category_suggestion ?? p.Q5.qZ;
            }
            GetSteamAwardNomineeCategories() {
              return this.jsondata.steam_award_category_voteids ?? [];
            }
            BIsLockedToGameOwners() {
              return !!this.jsondata.ownership_requirement_info
                ?.bLockedToAppOwners;
            }
            GetRequiredAppIDs() {
              return this.jsondata.ownership_requirement_info
                ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
                : [];
            }
            GetRequiredPackageIDs() {
              return this.jsondata.ownership_requirement_info
                ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
                : [];
            }
            BUseSubscriptionLayout() {
              return !!this.jsondata.sale_use_subscription_layout;
            }
            BIsLockedToPartnerAppRights() {
              return !!this.jsondata.app_right_requirement_info
                ?.bLockedToPartnerAppRights;
            }
            GetRequiredPartnerAppRights() {
              return this.jsondata.app_right_requirement_info;
            }
            GetValveAccessLog() {
              return Array.isArray(this.jsondata.valve_access_log)
                ? this.jsondata.valve_access_log
                : [];
            }
            BUsesContentHubForItemSource() {
              return (
                this.jsondata.item_source_type === 1 &&
                !!this.jsondata.source_content_hub
              );
            }
            GetContentHubType() {
              if (this.BUsesContentHubForItemSource())
                return this.jsondata.source_content_hub == null
                  ? "games"
                  : typeof this.jsondata.source_content_hub == "string"
                    ? "category"
                    : this.jsondata.source_content_hub.type;
            }
            GetContentHubCategory() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? this.jsondata.source_content_hub
                  : this.jsondata.source_content_hub.category;
            }
            GetContentHubTag() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? 0
                  : this.jsondata.source_content_hub.tagid;
            }
            GetContentHub() {
              return typeof this.jsondata.source_content_hub == "string"
                ? {
                    type: "category",
                    category: this.jsondata.source_content_hub,
                  }
                : this.jsondata.source_content_hub;
            }
            BContentHubDiscountedOnly() {
              return !!this.jsondata.content_hub_discounted_only;
            }
            BIsBackgroundImageGroupingEnabled() {
              return !!this.jsondata.sale_background_img_groups?.enabled;
            }
            GetSalePageGroupDefinition() {
              return this.jsondata.sale_background_img_groups;
            }
            GetSalePageBackgroundImageGroupCount() {
              return this.jsondata.sale_background_img_groups?.enabled
                ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
                : 0;
            }
            GetAllSalePageGroups() {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups
                : [];
            }
            GetSalePageBackgroundGroup(r) {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups?.[r]
                : void 0;
            }
            GetIncludedRealmList() {
              const r = this.BInRealmGlobal(),
                n = this.BInRealmChina();
              return (
                (0, k.wT)(
                  r || n,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                r && n ? _e : r ? he : n ? de : me
              );
            }
            BIsValidForRealm(r) {
              return this.GetIncludedRealmList().includes(r);
            }
            BIsNextFest(r = !1) {
              const n = "nextfest",
                l = this.jsondata.sale_vanity_id?.toLowerCase(),
                D = new T.b(this.clanSteamID).GetAccountID();
              return !(
                !l ||
                D != S.GU ||
                !l.startsWith(n) ||
                (r && (l.endsWith("preview") || l.endsWith("press")))
              );
            }
            BShowNextFestHeader(r) {
              return r && Y.iA.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(r, n, l) {
              const U = l >= 7;
              return {
                ...n,
                section_type: "sale_item_browser",
                unique_id: r,
                item_browse_section_data: {
                  enable_search: !0,
                  tabs: [
                    "all_released",
                    "popularpurchased",
                    "all_upcoming",
                    "discounted",
                  ],
                  prefer_assets_without_overrides: !1,
                },
                prefer_assets_without_overrides: !1,
                enable_faceted_browsing: U,
                min_capsule_matches_for_facet_values: 5,
                max_facet_values_for_facet: 5,
                background_gradient_top: "#0000006b",
                background_gradient_bottom: "#0000006b",
                facet_sort_order: 1,
                cap_item_count: 24,
                show_more_count: 48,
                facet_auto_generate_options: {
                  only_facets: [
                    { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                    {
                      loc_token: "#AppTypeLabelTitle",
                      only_values: [
                        "#AppTypeLabel_game",
                        "#AppTypeLabel_dlc",
                        "#AppTypeLabel_demo",
                        "#AppTypeLabel_music",
                      ],
                      initially_selected_values: ["#AppTypeLabel_game"],
                    },
                    { loc_token: "#Sale_Preferences" },
                  ],
                  initially_expanded_facets: [
                    "#AppTypeLabelTitle",
                    "#App_Taxonomy_Survey_QSuperGenreTitle",
                  ],
                  prioritized_facets: [
                    "#AppTypeLabelTitle",
                    "#App_Taxonomy_Survey_QSuperGenreTitle",
                  ],
                },
              };
            }
          };
        _([i.sH], R.prototype, "GID", 2),
          _([i.sH], R.prototype, "AnnouncementGID", 2),
          _([i.sH], R.prototype, "forumTopicGID", 2),
          _([i.sH], R.prototype, "type", 2),
          _([i.sH], R.prototype, "appid", 2),
          _([i.sH], R.prototype, "name", 2),
          _([i.sH], R.prototype, "description", 2),
          _([i.sH], R.prototype, "timestamp_loc_updated", 2),
          _([i.sH], R.prototype, "startTime", 2),
          _([i.sH], R.prototype, "endTime", 2),
          _([i.sH], R.prototype, "visibilityStartTime", 2),
          _([i.sH], R.prototype, "visibilityEndTime", 2),
          _([i.sH], R.prototype, "m_nBuildID", 2),
          _([i.sH], R.prototype, "m_strBuildBranch", 2),
          _([i.sH], R.prototype, "postTime", 2),
          _([i.sH], R.prototype, "visibility_state", 2),
          _([i.sH], R.prototype, "broadcaster", 2),
          _([i.sH], R.prototype, "jsondata", 2),
          _([i.sH], R.prototype, "nCommentCount", 2),
          _([i.sH], R.prototype, "nVotesUp", 2),
          _([i.sH], R.prototype, "nVotesDown", 2),
          _([i.sH], R.prototype, "bOldAnnouncement", 2),
          _([i.sH], R.prototype, "announcementClanSteamID", 2),
          _([i.sH], R.prototype, "loadedAllLanguages", 2),
          _([i.sH], R.prototype, "bLoaded", 2),
          _([i.sH], R.prototype, "deleteInProgress", 2),
          _([i.sH], R.prototype, "vecTags", 2),
          _([i.sH], R.prototype, "last_update_steamid", 2),
          _([i.sH], R.prototype, "rtime32_last_modified", 2),
          _([i.sH], R.prototype, "rtime32_last_solr_search_col_updated", 2),
          _([i.sH], R.prototype, "rtime32_last_local_modification", 2),
          _([i.sH], R.prototype, "rtime32_moderator_reviewed", 2),
          _([i.sH], R.prototype, "video_preview_type", 2),
          _([i.sH], R.prototype, "video_preview_id", 2),
          _([i.sH], R.prototype, "m_overrideCurrentDay", 2);
        let fe = R;
        function pe(o) {
          if (o) return o?.replace(/[()]/g, "\\$&");
        }
      },
      48421: (ae, K, a) => {
        "use strict";
        a.d(K, { B9: () => Z, PB: () => $, RR: () => h, hE: () => G });
        var f = a(90626),
          L = a(72604),
          c = a(65804),
          p = a(47689),
          i = a(76559),
          t = a(3166),
          v = a(69561),
          T = a(20194),
          j = a(18210),
          z = a(41735),
          S = a.n(z),
          B = a(34592);
        function m(E) {
          return useObserver(() => [E.m_nBuildID, E.m_strBuildBranch]);
        }
        function k(E, M = 0, g) {
          const [O, y] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(E),
            ),
            I = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (O?.AnnouncementGID != E) {
                g_PartnerEventStore.Init();
                const P = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(P, E, M, g)
                  .then((C) => {
                    C && !I.token.reason && y(C);
                  });
              }
            }, [E, M, g, O, I]),
            O
          );
        }
        function h(E) {
          const [M, g] = (0, f.useState)(() => c.O3.GetClanEventModel(E)),
            O = (0, p.m)("usePartnerEventByEventGID");
          return (
            (0, f.useEffect)(() => {
              E &&
                M?.GID != E &&
                (c.O3.Init(),
                c.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [E],
                  [],
                  O,
                ).then((y) => {
                  y?.length == 1 && y[0].GID == E && !O.token.reason && g(y[0]);
                }));
            }, [E, M, O]),
            M
          );
        }
        function $(E) {
          const M = (0, p.m)("usePreloadPartnerEventsByEventGID"),
            g = (0, T.I)({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                c.O3.Init(),
                c.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  E,
                  [],
                  M,
                )
              ),
            });
          return { bIsLoading: g.isLoading, events: g.data };
        }
        function Z(E, M, g) {
          const [O, y] = (0, f.useState)(
              M ? c.O3.GetClanEventModel(M) : void 0,
            ),
            [I, P] = (0, f.useState)(!!E && !!M),
            [C, X] = (0, f.useState)(),
            [te, Y] = (0, f.useState)(L.R),
            u = (0, p.m)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, f.useEffect)(() => {
              (async () => {
                try {
                  if (O?.GID != M && M && E) {
                    c.O3.Init();
                    const _ = i.b.InitFromClanID(E);
                    let b;
                    try {
                      b =
                        await c.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          _,
                          M,
                          0,
                          g,
                        );
                    } catch (H) {
                      X(H?.response?.data?.err_msg),
                        Y(H?.response?.data?.success || L.zi);
                    }
                    u.token.reason || y(b);
                  }
                } finally {
                  P(!1);
                }
              })();
            }, [E, M, O, g, u]),
            { eventModel: O, bLoading: I, sErrorMessage: C, eResult: te }
          );
        }
        function A(E, M = []) {
          const [g, O] = useState(void 0),
            y = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              E &&
                (!g || g?.appid != E) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    E,
                    0,
                    1,
                    { require_tags: ["patchnotes", ...M] },
                    y,
                  )
                  .then((I) => {
                    I?.length && !y.token.reason && O(I[0]);
                  }));
            }, [E, y, M, g]),
            g
          );
        }
        function W(E, M = []) {
          const g = useCancelTokenSource("useLatestPatchNoteForSource"),
            O = typeof E == "number" ? E : k_nAppIdInvalid,
            y = typeof E == "object" ? E : void 0,
            I = useCallback(async () => {
              if (!M?.length) return null;
              g_PartnerEventStore.Init();
              const C = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                y,
                O,
                0,
                1,
                { require_tags: ["patchnotes", ...M] },
                g,
              );
              return C?.length ? C[0] : null;
            }, [O, g, y, M]),
            P = ["LatestPatchNote2", O, y, M, g];
          return useQuery({ queryKey: P, queryFn: I });
        }
        function G(E) {
          let M = "" + E;
          const g = j.A0.GetELanguageFallback(E);
          return E != g && (M += "_" + g), M;
        }
        async function w(E, M, g, O) {
          const y = new Array(),
            I = {
              clan_accountid: E ? E.GetAccountID() : void 0,
              gidevent: M,
              count_before: 0,
              count_after: g,
              lang_list: G(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            P = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            C = await axios.get(P, { params: I, cancelToken: O?.token });
          if (C?.data?.success == k_EResultOK) {
            const X = M == null ? C.data.events : C.data.events.slice(1);
            for (let te of X)
              !te.gid || !((te.jsondata?.length ?? 0) > 0) || y.push(te);
          } else {
            const X = GetMsgAndErrorCodeFromResponse(C?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (E ? E.GetAccountID() : 0) +
                  " " +
                  X.strErrorMsg,
                X,
              ),
              C?.data)
            );
          }
          return y;
        }
        function x(E, M, g) {
          const {
            data: O,
            error: y,
            fetchNextPage: I,
            hasNextPage: P,
            isFetching: C,
            isFetchingNextPage: X,
            status: te,
            refetch: Y,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", E, M],
            queryFn: ({ pageParam: u }) => w(E, u, M, g),
            initialPageParam: void 0,
            getNextPageParam: (u) =>
              u.length > 0 ? u[u.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: O,
            bHasNextPage: P,
            fnFetchNextPage: I,
            bIsFetching: C,
            bIsFetchingNextPage: X,
            clanEventSummaryStatus: te,
            clanEventSummaryLoadError: y,
            fnRefetch: Y,
          };
        }
      },
      38884: (ae, K, a) => {
        "use strict";
        a.d(K, { E0: () => j, oE: () => z });
        var f = a(71742),
          L = a(3166),
          c = a(76559),
          p = a(73259),
          i = a(34592),
          t = a(99412),
          v = a(41635);
        function T(S) {
          return (
            (S.gid == null || S.gid == null || S.gid == "0") &&
            !!S.announcement_body &&
            S.announcement_body.gid != "0"
          );
        }
        function j(S) {
          return T(S) ? p.cB + S.announcement_body?.gid : S.gid;
        }
        function z(S, B) {
          let m = new p.lh();
          if (
            ((m.clanSteamID = S),
            (0, f.wT)(
              m.clanSteamID && m.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                m.clanSteamID.ConvertTo64BitString() +
                " " +
                L.TS.EUNIVERSE,
            ),
            (m.GID = j(B)),
            (m.bOldAnnouncement = T(B)),
            (m.appid = B.appid ?? 0),
            (m.createTime = B.rtime_created),
            (m.startTime = B.rtime32_start_time),
            (m.endTime = B.rtime32_end_time),
            (m.visibilityStartTime = B.rtime32_visibility_start),
            (m.visibilityEndTime = B.rtime32_visibility_end),
            (m.loadedAllLanguages = !1),
            (m.type = B.event_type ?? t.DRF),
            (m.nVotesUp = B.votes_up ?? 0),
            (m.nVotesDown = B.votes_down ?? 0),
            (m.comment_type = B.comment_type),
            (m.gidfeature = B.gidfeature),
            (m.gidfeature2 = B.gidfeature2),
            (m.featured_app_tagid = B.featured_app_tagid),
            (m.vecTags = new Array()),
            (m.creator_steamid = B.creator_steamid),
            (m.last_update_steamid = B.last_update_steamid),
            (m.rtime32_last_modified = B.rtime32_last_modified),
            (m.rtime32_moderator_reviewed = B.rtime_mod_reviewed),
            (m.video_preview_type = B.video_preview_type),
            (m.video_preview_id = B.video_preview_id),
            (m.has_live_stream = B.has_live_stream),
            (m.live_stream_viewer_count = B.live_stream_viewer_count),
            (m.m_nBuildID = B.build_id),
            (m.m_strBuildBranch = B.build_branch),
            B.announcement_body)
          ) {
            let h = B.announcement_body;
            (m.AnnouncementGID = h.gid),
              m.name.set(h.language, h.headline),
              m.description.set(h.language, h.body),
              m.timestamp_loc_updated.clear(),
              (m.forumTopicGID = h.forum_topic_id),
              (m.nCommentCount = h.commentcount),
              (m.postTime = h.posttime),
              m.bOldAnnouncement && !h.hidden && (m.startTime = h.posttime),
              (m.announcementClanSteamID = new c.b(h.clanid)),
              h.tags &&
                h.tags.length > 0 &&
                h.tags.forEach(($) => m.vecTags.push($)),
              !m.rtime32_last_solr_search_col_updated &&
                m.rtime32_last_modified &&
                ((m.rtime32_last_solr_search_col_updated =
                  m.rtime32_last_modified),
                (m.rtime32_last_modified = h.updatetime));
          } else
            (m.AnnouncementGID = "0"),
              (m.forumTopicGID = B.forum_topic_id),
              m.name.clear(),
              m.description.clear(),
              m.timestamp_loc_updated.clear(),
              (m.postTime = B.rtime32_start_time),
              (m.nCommentCount = B.comment_count ?? 0),
              m.name.set(t.Bhc, B.event_name ?? ""),
              m.description.set(t.Bhc, B.event_notes ?? "");
          B.broadcaster_accountid &&
            (m.broadcaster = new c.b(B.broadcaster_accountid));
          const k = p.DJ;
          try {
            m.jsondata = {
              ...k,
              ...(B.jsondata ? JSON.parse(B.jsondata) : void 0),
            };
          } catch (h) {
            const $ = (0, i.H)(h);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  $.strErrorMsg,
                $,
              ),
              h)
            );
          }
          if (
            ((m.jsondata.localized_capsule_image = (0, v.$Y)(
              m.jsondata.localized_capsule_image || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_title_image = (0, v.$Y)(
              m.jsondata.localized_title_image || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_subtitle = (0, v.$Y)(
              m.jsondata.localized_subtitle || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_summary = (0, v.$Y)(
              m.jsondata.localized_summary || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_broadcast_title = (0, v.$Y)(
              m.jsondata.localized_broadcast_title || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_broadcast_left_image = (0, v.$Y)(
              m.jsondata.localized_broadcast_left_image || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_broadcast_right_image = (0, v.$Y)(
              m.jsondata.localized_broadcast_right_image || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_sale_header = (0, v.$Y)(
              m.jsondata.localized_sale_header || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_sale_overlay = (0, v.$Y)(
              m.jsondata.localized_sale_overlay || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_sale_product_banner = (0, v.$Y)(
              m.jsondata.localized_sale_product_banner || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_sale_product_mobile_banner = (0, v.$Y)(
              m.jsondata.localized_sale_product_mobile_banner || [],
              t.bP9,
              null,
            )),
            (m.jsondata.localized_sale_logo = (0, v.$Y)(
              m.jsondata.localized_sale_logo || [],
              t.bP9,
              null,
            )),
            m.jsondata.sale_num_headers !== void 0 &&
              m.jsondata.localized_per_day_sales_header)
          )
            for (let h = 0; h < m.jsondata.sale_num_headers; ++h)
              m.jsondata.localized_per_day_sales_header[h] = (0, v.$Y)(
                m.jsondata.localized_per_day_sales_header[h],
                t.bP9,
                null,
              );
          return (
            m.jsondata.sale_sections &&
              m.jsondata.sale_sections.forEach((h, $) => {
                h.localized_label &&
                  (h.localized_label = (0, v.$Y)(
                    h.localized_label,
                    t.bP9,
                    null,
                  )),
                  h.section_type === "trailercarousel" &&
                    (h.show_as_carousel = !1),
                  (m.jsondata.sale_sections[$] = { ...p.G6, ...h });
              }),
            m.jsondata.email_setting &&
              m.jsondata.email_setting.sections &&
              m.jsondata.email_setting.sections.forEach((h) => {
                h.localized_headline !== void 0 &&
                  h.localized_headline !== null &&
                  (h.localized_headline = (0, v.$Y)(
                    h.localized_headline,
                    t.bP9,
                    null,
                  )),
                  h.localized_body !== void 0 &&
                    h.localized_body !== null &&
                    (h.localized_body = (0, v.$Y)(
                      h.localized_body,
                      t.bP9,
                      null,
                    )),
                  h.localized_image !== void 0 &&
                    h.localized_image !== null &&
                    (h.localized_image = (0, v.$Y)(
                      h.localized_image,
                      t.bP9,
                      null,
                    ));
              }),
            m.jsondata.localized_title_image.forEach((h, $) => {
              if (h != null && h.substr(0, 4) == "http") {
                let Z = h.lastIndexOf("/"),
                  A = h.substr(Z + 1);
                m.jsondata.localized_title_image[$] = A;
              }
            }),
            (m.bLoaded = !0),
            B.published
              ? B.unlisted
                ? (m.visibility_state = p.zv.k_EEventStateUnlisted)
                : B.hidden
                  ? (m.visibility_state = p.zv.k_EEventStateStaged)
                  : (m.visibility_state = p.zv.k_EEventStateVisible)
              : (m.visibility_state = p.zv.k_EEventStateUnpublished),
            m
          );
        }
      },
      18994: (ae, K, a) => {
        "use strict";
        a.d(K, { Wn: () => f.Wn, a4: () => f.a4 });
        var f = a(39829);
        const L = "exploration";
        var c = ((t) => ((t.Random = "r"), (t.Personalized = "p"), t))(c || {});
        function p(t) {
          switch (t) {
            case k_EControllerType_XBoxOneController:
              return k_EStoreCategoryFullController;
            case k_EControllerType_PS4Controller:
              return k_EStoreCategoryPS4Controller;
            case k_EControllerType_PS5Controller:
              return k_EStoreCategoryPS5Controller;
            case k_EControllerType_SteamController:
              return k_EStoreCategorySteamInputAPI;
            default:
              return;
          }
        }
        function i(t) {
          switch (t) {
            case k_EStoreCategoryFullController:
              return k_EControllerType_XBoxOneController;
            case k_EStoreCategoryPS4Controller:
              return k_EControllerType_PS4Controller;
            case k_EStoreCategoryPS5Controller:
              return k_EControllerType_PS5Controller;
            default:
              return;
          }
        }
      },
      65804: (ae, K, a) => {
        "use strict";
        a.d(K, { ZQ: () => I, O3: () => P, dB: () => X, CO: () => te });
        var f = a(41735),
          L = a.n(f),
          c = a(14947),
          p = a(31561),
          i = a(99412),
          t = a(72604),
          v = a(73259),
          T = a(76559);
        function j(Y) {
          return window.StoreDefaults ? window.StoreDefaults[Y] : void 0;
        }
        var z = a(41635),
          S = a(71742),
          B = a(34592),
          m = a(8323),
          k = a(48473),
          h = a(3166),
          $ = a(90626),
          Z = a(54963),
          A = a(48421),
          W = a(38884),
          G = a(77291),
          w = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          E = (Y, u, d, _) => {
            for (
              var b = _ > 1 ? void 0 : _ ? x(u, d) : u, H = Y.length - 1, J;
              H >= 0;
              H--
            )
              (J = Y[H]) && (b = (_ ? J(u, d, b) : J(b)) || b);
            return _ && b && w(u, d, b), b;
          };
        const M = null;
        class g {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(u) {
            (0, S.wT)(
              typeof u.appid == "number",
              "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
            ),
              (this.appid = u.appid),
              (this.date = u.date),
              (this.can_play = u.can_play),
              (this.playtime = u.playtime),
              (this.announcementid = u.announcementid);
          }
        }
        const O = null,
          y = null;
        class I {
          constructor(u = !1) {
            (0, c.Gn)(this), (this.m_bOnlySummary = u);
          }
          m_bOnlySummary = !1;
          m_mapExistingEvents = new Map();
          m_mapEventUpdateCallback = new Map();
          m_mapAnnouncementBodyToEvent = new Map();
          m_mapClanToGIDs = new Map();
          m_mapAppIDToGIDs = new Map();
          m_mapAdjacentAnnouncementGIDs = new Map();
          m_mapUpdatedApps = new Map();
          m_tsUpdatedAppsQueryTime = 0;
          m_rgQueuedEventsClanIDs = new Array();
          m_rgQueuedEventsUniqueIDs = new Array();
          m_rgQueuedEventsForEditFlags = new Array();
          m_QueuedEventTimeout = new m.LU();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let u = j("PartnerEventStore");
              this.ValidateStoreDefault(u) &&
                u.forEach((b) => {
                  if (b) {
                    let H = new T.b(b.clan_steamid);
                    const J = this.InsertEventModelFromClanEventData(H, b);
                    b.announcement_body &&
                      this.m_mapExistingEvents.set(
                        v.cB + b.announcement_body.gid,
                        J,
                      );
                  }
                });
              let d = (0, h.Fd)("partnereventstore", "application_config");
              this.ValidateStoreDefault(d) &&
                d.forEach((b) => {
                  if (b) {
                    let H = new T.b(b.clan_steamid);
                    const J = this.InsertEventModelFromClanEventData(H, b);
                    b.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        v.cB + b.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        v.cB + b.announcement_body.gid,
                        J,
                      );
                  }
                });
              let _ = (0, h.Fd)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(_) &&
                _.forEach((b) => {
                  b &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      b.announcementGID,
                      b.adjacents,
                    );
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(u) {
            const d = u;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              d[0] &&
              typeof d[0] == "object"
              ? typeof d[0].gid == "string" ||
                  (typeof d[0].announcement_body == "object" &&
                    typeof d[0].announcement_body.gid == "string")
              : !1;
          }
          ValidateAdjacentEvent(u) {
            const d = u;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              typeof d[0] == "object"
              ? typeof d[0].announcementGID == "string" &&
                  Array.isArray(d[0].adjacents) &&
                  (d[0].adjacents.length == 0 ||
                    typeof d[0].adjacents[0] == "string")
              : !1;
          }
          GetPartnerEventChangeCallback(u) {
            let d = this.m_mapEventUpdateCallback.get(u);
            return (
              d ||
                (this.m_mapEventUpdateCallback.set(u, new m.lu()),
                (d = this.m_mapEventUpdateCallback.get(u))),
              d
            );
          }
          GetClanEventGIDs(u) {
            let d = this.m_mapClanToGIDs.get(u.GetAccountID());
            return d || [];
          }
          GetClanEventGIDsForApp(u) {
            let d = this.m_mapAppIDToGIDs.get(u);
            return d || [];
          }
          GetClanEventModel(u) {
            return this.m_mapExistingEvents.get(u);
          }
          BHasClanEventModel(u) {
            return this.m_mapExistingEvents.has(u);
          }
          BHasClanAnnouncementGID(u) {
            if (this.m_mapAnnouncementBodyToEvent.has(u)) {
              const d = this.m_mapAnnouncementBodyToEvent.get(u);
              return !!d && this.BHasClanEventModel(d);
            }
            return !1;
          }
          GetClanEventGIDFromAnnouncementGID(u) {
            return this.m_mapAnnouncementBodyToEvent.get(u);
          }
          GetClanEventFromAnnouncementGID(u) {
            const d = this.m_mapAnnouncementBodyToEvent.get(u);
            return d ? this.m_mapExistingEvents.get(d) : void 0;
          }
          DefaultEventSortFunction(u, d) {
            return u.startTime == d.startTime
              ? (0, k.kd)(u.GID ?? "", d.GID ?? "")
              : (d.startTime ?? 0) - (u.startTime ?? 0);
          }
          RegisterClanEvents(u) {
            if (u)
              for (const d of u) {
                const _ = (0, W.E0)(d);
                if (!this.m_mapExistingEvents.has(_)) {
                  const b = new T.b(d.clan_steamid);
                  this.InsertEventModelFromClanEventData(b, d);
                }
              }
          }
          GetRankedClanEvents(u, d) {
            let _ = [],
              b = u
                ? this.GetClanEventGIDs(u)
                : d
                  ? this.GetClanEventGIDsForApp(d)
                  : void 0;
            if (!b || b.length == 0) return _;
            for (let H of b) {
              let J = this.GetClanEventModel(H);
              J && _.push(J);
            }
            return _.sort(this.DefaultEventSortFunction), _;
          }
          InsertEventModelFromClanEventData(u, d) {
            const _ = (0, W.oE)(u, d);
            return (
              this.InsertUniqueEventGID(u.GetAccountID(), _.appid, _.GID),
              this.m_mapExistingEvents.set(_.GID, _),
              _.AnnouncementGID &&
                _.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
              _
            );
          }
          HelperInitializeNumSalesHeaderArray(u) {
            if ((u.jsondata.sale_num_headers ?? 0) > 1) {
              u.jsondata.localized_per_day_sales_header = [];
              for (let d = 0; d < (u.jsondata.sale_num_headers ?? 0); ++d)
                u.jsondata.localized_per_day_sales_header.push(
                  (0, z.$Y)([], i.bP9, null),
                );
              u.m_overrideCurrentDay = 0;
            } else u.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(u) {
            let d = new Array();
            return (
              this.m_mapClanToGIDs.has(u.GetAccountID()) &&
                this.m_mapClanToGIDs.get(u.GetAccountID()).forEach((_) => {
                  let b = this.m_mapExistingEvents.get(_);
                  b && d.push(b);
                }),
              d
            );
          }
          async QueueLoadPartnerEvent(u, d, _) {
            if (this.m_mapExistingEvents.has(d)) return;
            this.m_rgQueuedEventsClanIDs.push(u),
              this.m_rgQueuedEventsUniqueIDs.push(d),
              this.m_rgQueuedEventsForEditFlags.push(!!_),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (F) => (this.m_PendingInfoResolve = F),
                ));
            const b = this.m_PendingInfoPromise,
              H = () => {
                const F = this.m_PendingInfoResolve,
                  N = this.m_rgQueuedEventsClanIDs,
                  re = this.m_rgQueuedEventsUniqueIDs,
                  ne = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(N, re, ne).then(() =>
                    F?.(),
                  );
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), H())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, H),
              b
            );
          }
          async InternalLoadPartnerEventList(u, d, _) {
            let b = _.some((N) => N);
            const H =
                h.TS.STORE_BASE_URL +
                (b
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              J = (0, A.hE)((0, i.sfN)(h.TS.LANGUAGE)),
              F = {
                clanid_list: u.join(","),
                uniqueid_list: d.join(","),
                lang_list: J,
                origin: self.origin,
              };
            try {
              const N = await L().get(H, { params: F, withCredentials: b });
              this.RegisterClanEvents(N.data.events);
            } catch (N) {
              let re = (0, B.H)(N);
              console.error("GetEventDetails hit error " + re.strErrorMsg, re);
            }
          }
          async LoadAdjacentPartnerEvents(u, d, _, b, H, J, F) {
            return this.InternalLoadAdjacentPartnerEvents(
              u,
              void 0,
              d,
              _,
              b,
              H,
              J,
              F,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(u, d, _, b, H, J, F) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              u,
              d,
              _,
              b,
              H,
              J,
              F,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(u, d, _, b, H, J, F) {
            const N = d || u.clanSteamID;
            return u.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  u.AnnouncementGID,
                  N,
                  _,
                  b,
                  H,
                  J,
                  F,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  u.GID,
                  u.AnnouncementGID,
                  N,
                  _,
                  b,
                  H,
                  J,
                  F,
                );
          }
          async InternalLoadAdjacentPartnerEvents(u, d, _, b, H, J, F, N) {
            let re = new Array();
            if (!d || !this.m_mapAdjacentAnnouncementGIDs.has(d)) {
              let ne =
                h.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const q = (0, A.hE)((0, i.sfN)(h.TS.LANGUAGE));
              F?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, S.wT)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (F.only_summaries = void 0));
              let ee = {
                clan_accountid: _ ? _.GetAccountID() : void 0,
                appid: b,
                count_before: H,
                count_after: J,
                gidevent: u,
                gidannouncement: d,
                lang_list: q,
                rtime_oldestevent: F ? F.rtime_oldestevent : void 0,
                require_tags:
                  F && F.require_tags ? F.require_tags.join(",") : void 0,
                exclude_tags:
                  F && F.exclude_tags ? F.exclude_tags.join(",") : void 0,
                require_no_tags: F ? F.require_no_tags : void 0,
                event_type_filter:
                  F && F.event_type_filter
                    ? F.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  F && F.exclude_event_types
                    ? F.exclude_event_types.join(",")
                    : void 0,
                only_summaries: F && !!F.only_summaries,
                origin: self.origin,
              };
              try {
                let se = await L().get(ne, {
                  params: ee,
                  cancelToken: N?.token,
                });
                if (se?.data?.success == t.R)
                  (0, c.h5)(() => {
                    for (let ie of se.data.events) {
                      let De = (0, W.E0)(ie);
                      if (!this.m_mapExistingEvents.has(De)) {
                        let je = new T.b(ie.clan_steamid);
                        this.InsertEventModelFromClanEventData(_ || je, ie);
                      }
                      re.push(this.m_mapExistingEvents.get(De));
                    }
                    if (re.length == 0) {
                      if (u && this.BHasClanEventModel(u))
                        this.m_mapExistingEvents.get(u) &&
                          re.push(this.m_mapExistingEvents.get(u));
                      else if (d && this.BHasClanAnnouncementGID(d)) {
                        const ie = this.GetClanEventFromAnnouncementGID(d);
                        ie && re.push(ie);
                      }
                    }
                  });
                else {
                  let ie = (0, B.H)(se?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      b +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      ie.strErrorMsg,
                    ie,
                  );
                }
              } catch (se) {
                let ie = (0, B.H)(se);
                ie.errorCode != t.e9 &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      b +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      ie.strErrorMsg,
                    ie,
                  );
              }
            } else {
              let ne = this.m_mapAdjacentAnnouncementGIDs.get(d),
                q = new Array();
              ne?.forEach((ee) => {
                if (this.m_mapAnnouncementBodyToEvent.has(ee)) {
                  let se = this.m_mapAnnouncementBodyToEvent.get(ee);
                  se &&
                    this.m_mapExistingEvents.get(se) &&
                    re.push(this.m_mapExistingEvents.get(se));
                } else q.push(ee);
              }),
                q.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      q,
                      N,
                    )
                  ).forEach((se) => re.push(se));
            }
            return re;
          }
          async LoadPartnerEventsPageable(u, d, _ = 0, b = 0, H) {
            let J = new Array(),
              F = h.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              N = {
                clan_accountid: u ? u.GetAccountID() : void 0,
                appid: d,
                offset: _,
                count: b,
                l: h.TS.LANGUAGE,
                origin: self.origin,
                exclude_tags: H && H.length > 0 ? H?.join(",") : void 0,
              };
            try {
              let re = await L().get(F, { params: N });
              (0, c.h5)(() => {
                for (let ne of re.data.events) {
                  let q = (0, W.E0)(ne);
                  if (!this.m_mapExistingEvents.has(q)) {
                    let ee = new T.b(ne.clan_steamid);
                    this.InsertEventModelFromClanEventData(ee, ne);
                  }
                  J.push(this.m_mapExistingEvents.get(q));
                }
              });
            } catch (re) {
              console.error(
                "LoadClanEventInDateRange hit error " +
                  (0, B.H)(re).strErrorMsg,
              );
            }
            return J;
          }
          async GetBestEventsForCurrentUser(u, d, _) {
            let b = new Array(),
              H = {
                l: h.TS.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: u,
                include_only_game_updates: d,
              },
              J = h.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              F = await L().get(J, {
                params: H,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
            if (!F.data?.events) {
              let N = F.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${N})`,
              );
            }
            return (
              (0, c.h5)(() => {
                for (let N of F.data.events) {
                  let re = (0, W.E0)(N);
                  if (!this.m_mapExistingEvents.has(re)) {
                    let q = new T.b(N.clan_steamid);
                    this.InsertEventModelFromClanEventData(q, N);
                  }
                  let ne = {
                    nAppPriority: N.nAppPriority,
                    bPossibleTakeOver: N.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(re),
                  };
                  b.push(ne);
                }
              }),
              b
            );
          }
          async LoadImportantEventsAroundToday(u, d, _, b, H, J) {
            let F = new Array(),
              N = new Array();
            N.push({ priority: 0, appids: d }),
              _ && N.push({ priority: 1, appids: _ }),
              b && N.push({ priority: 2, appids: b });
            let re = {
                count: u,
                strAppIDPriority: JSON.stringify({ prioritized_apps: N }),
                filterToEventTypes: J ? J.toString() : "",
                l: h.TS.LANGUAGE,
              },
              ne = h.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              q = await L().get(ne, {
                params: re,
                withCredentials: !0,
                cancelToken: H.token,
              });
            return (
              (0, c.h5)(() => {
                for (let ee of q.data.events) {
                  let se = (0, W.E0)(ee);
                  if (!this.m_mapExistingEvents.has(se)) {
                    let ie = new T.b(ee.clan_steamid);
                    this.InsertEventModelFromClanEventData(ie, ee);
                  }
                  F.push(this.m_mapExistingEvents.get(se));
                }
              }),
              F
            );
          }
          InsertUniqueEventGID(u, d, _) {
            let b = this.m_mapClanToGIDs.get(u);
            b ||
              (this.m_mapClanToGIDs.set(u, new Array()),
              (b = this.m_mapClanToGIDs.get(u)));
            let H = this.m_mapAppIDToGIDs.get(d);
            H ||
              (this.m_mapAppIDToGIDs.set(d, new Array()),
              (H = this.m_mapAppIDToGIDs.get(d))),
              b.indexOf(_) == -1 && (b.push(_), H.push(_));
          }
          ResetModel() {}
          async DeleteClanEvent(u, d) {
            this.m_mapExistingEvents.has(d) &&
              (this.m_mapExistingEvents.get(d).deleteInProgress = !0);
            let _ = new URLSearchParams();
            _.append("sessionid", (0, h.KC)()),
              _.append("bDelete", "1"),
              _.append("gid", d);
            const b = await L().post(
              h.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                u.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              _,
            );
            return this.RemoveGIDFromList(u, d), b.data;
          }
          RemoveGIDFromList(u, d) {
            if (
              (this.m_mapExistingEvents.delete(d),
              this.m_mapClanToGIDs.has(u.GetAccountID()))
            ) {
              let _ = this.m_mapClanToGIDs.get(u.GetAccountID()),
                b = _.indexOf(d);
              b >= 0 && _.splice(b, 1);
            }
          }
          FlushEventFromCache(u, d) {
            if (
              (u &&
                this.m_mapExistingEvents.has(u) &&
                (d || (d = this.m_mapExistingEvents.get(u).AnnouncementGID),
                this.m_mapExistingEvents.delete(u)),
              d &&
                (this.m_mapExistingEvents.has(v.cB + d) &&
                  this.m_mapExistingEvents.delete(v.cB + d),
                this.m_mapAnnouncementBodyToEvent.has(d)))
            ) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(d);
              _ &&
                this.m_mapExistingEvents.has(_) &&
                this.m_mapExistingEvents.delete(_),
                this.m_mapAnnouncementBodyToEvent.delete(d);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            u,
            d,
            _,
            b,
            H,
            J = !1,
          ) {
            let F = (0, A.hE)(J ? i.Bhc : (0, i.sfN)(h.TS.LANGUAGE)),
              N = {
                appid: d,
                clan_accountid: u ? u.GetAccountID() : void 0,
                announcement_gid: b,
                event_gid: _,
                lang_list: F,
                last_modified_time: H || 0,
                origin: self.origin,
                for_edit: J,
                only_summary: this.m_bOnlySummary,
              },
              re = null,
              ne = null;
            if (J) {
              const q = (0, h.yK)();
              q === "community"
                ? ((ne = h.TS.COMMUNITY_BASE_URL),
                  (ne += u ? "gid/" + u.ConvertTo64BitString() : "ogg/" + d),
                  (ne += "/"))
                : q === "partner"
                  ? (ne = h.TS.PARTNER_BASE_URL + "sales/")
                  : (ne = h.TS.STORE_BASE_URL + "events/"),
                (ne += "ajaxgetpartnereventforedit"),
                (re = { params: N, withCredentials: !0 });
            } else
              (ne = h.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (re = { params: N, withCredentials: !1 });
            try {
              let q = await L().get(ne, re);
              if (q.data.success !== t.R) return;
              let ee = q.data.event,
                se = (0, W.E0)(ee);
              if (
                !this.m_mapExistingEvents.has(se) ||
                (this.m_mapExistingEvents.get(se).rtime32_last_modified ?? 0) <
                  (ee.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(se).rtime32_moderator_reviewed ??
                  0) < (ee.rtime_mod_reviewed ?? 0)
              ) {
                (0, S.wT)(
                  ee.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let ie = new T.b(ee.clan_steamid);
                this.InsertEventModelFromClanEventData(ie, ee);
              }
              return this.m_mapExistingEvents.get(se);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            u,
            d,
            _,
            b,
            H,
            J,
          ) {
            if (_ && this.m_mapExistingEvents.has(_))
              return this.m_mapExistingEvents.get(_);
            if (b) {
              if (this.m_mapExistingEvents.has(v.cB + b))
                return this.m_mapExistingEvents.get(v.cB + b);
              if (this.m_mapAnnouncementBodyToEvent.has(b)) {
                const F = this.m_mapAnnouncementBodyToEvent.get(b);
                if (F && this.m_mapExistingEvents.has(F))
                  return this.m_mapExistingEvents.get(F);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              d,
              _,
              b,
              H,
              J,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(u, d, _, b) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              u,
              void 0,
              d,
              _,
              b,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(u, d, _, b) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              void 0,
              void 0,
              d,
              _,
              b,
            );
          }
          async LoadPartnerEventFromClanEventGID(u, d, _, b) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              u,
              d,
              void 0,
              _,
              b,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(u, d, _, b) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              void 0,
              d,
              void 0,
              _,
              b,
            );
          }
          async LoadPartnerEventGeneric(u, d, _, b, H) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              d,
              _,
              b,
              H,
            );
          }
          async LoadHiddenPartnerEvent(u, d) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              void 0,
              d,
              void 0,
              0,
              !0,
            );
          }
          async LoadHiddenPartnerEventByAnnouncementGID(u, d) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              void 0,
              void 0,
              d,
              0,
              !0,
            );
          }
          async HintLoadImportantUpdates() {
            const d = (0, p.tB)(36e5);
            if (d != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = d;
              const _ = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
                b = h.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                H = await L().get(b, { params: _, withCredentials: !0 });
              H.data.apps &&
                H.data.apps.length > 0 &&
                (0, c.h5)(() => {
                  const J = new Map(
                    H.data.apps?.map((F) => [F.appid, new g(F)]),
                  );
                  this.m_mapUpdatedApps = J;
                });
            }
            return this.m_mapUpdatedApps;
          }
          GetAppImportantUpdate(u) {
            return (
              this.HintLoadImportantUpdates().catch((d) => {
                console.log("UpdatedApps failed to load: ", d.response?.data);
              }),
              this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(u)
            );
          }
          async LoadClanEventLocalizationFromAnnouncementGID(u, d) {
            let _ =
              h.TS.COMMUNITY_BASE_URL +
              "gid/" +
              u.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              d;
            return (await L().get(_)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(u, d, _) {
            const b = new Array(),
              H = h.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              J = (0, A.hE)((0, i.sfN)(h.TS.LANGUAGE));
            let F = null,
              N = null;
            if (u) {
              let q = new Array();
              u.forEach((ee) => {
                this.m_mapExistingEvents.has(ee)
                  ? b.push(this.m_mapExistingEvents.get(ee))
                  : q.push(ee);
              }),
                q.sort(),
                (F = q);
            }
            if (d) {
              let q = new Array();
              d.forEach((ee) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(ee) &&
                  this.m_mapAnnouncementBodyToEvent.get(ee) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(ee),
                  )
                ) {
                  let se = this.m_mapAnnouncementBodyToEvent.get(ee);
                  if (se) {
                    const ie = this.m_mapExistingEvents.get(se);
                    ie && b.push(ie);
                  }
                } else q.push(ee);
              }),
                q.sort(),
                (N = q);
            }
            if (!F && !N) return b;
            const re = new Array(),
              ne = 100;
            for (; (F?.length ?? 0) > 0 || (N?.length ?? 0) > 0; ) {
              let q = {
                event_gids:
                  (F?.length ?? 0) > 0 ? F?.splice(0, ne).join(",") : void 0,
                announcement_gids:
                  (N?.length ?? 0) > 0 ? N?.splice(0, ne).join(",") : void 0,
                lang_list: J,
                origin: self.origin,
              };
              re.push(
                L().get(H, { params: q, cancelToken: _ ? _.token : void 0 }),
              );
            }
            try {
              const q = await Promise.all([...re]);
              let ee = 0;
              (0, c.h5)(() =>
                q.forEach((se) => {
                  if (se && se.data && se.data.events)
                    for (let ie of se.data.events) {
                      let De = (0, W.E0)(ie);
                      if (!this.m_mapExistingEvents.has(De)) {
                        let je = new T.b(ie.clan_steamid);
                        this.InsertEventModelFromClanEventData(je, ie);
                      }
                      b.push(this.m_mapExistingEvents.get(De));
                    }
                  else {
                    const ie = (0, B.H)(se);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        ie.strErrorMsg,
                      ie,
                    );
                  }
                  ee += 1;
                }),
              );
            } catch (q) {
              const ee = (0, B.H)(q);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  ee.strErrorMsg,
                ee,
              );
            }
            return b;
          }
          async SavePartnerEventSaleAssets(u, d, _, b) {
            let H = null;
            if (!this.m_mapExistingEvents.has(d)) return !1;
            try {
              const J = `${h.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${u}`,
                F = new FormData();
              F.append("sessionid", (0, h.KC)()),
                F.append("gidclanevent", d),
                F.append("json", JSON.stringify(_)),
                F.append("pageStyles", JSON.stringify(b));
              const N = await L().post(J, F, { withCredentials: !0 });
              if (N?.data?.success == t.R) {
                const re = this.m_mapExistingEvents.get(d);
                if (re && re.jsondata) {
                  for (const ne in _)
                    if (_.hasOwnProperty(ne) && _[ne]) {
                      const q = ne,
                        ee = _[q];
                      ee !== void 0 && q !== void 0 && (re.jsondata[q] = ee);
                    }
                }
                return this.GetPartnerEventChangeCallback(d).Dispatch(re), !0;
              }
              H = (0, B.H)(N);
            } catch (J) {
              H = (0, B.H)(J);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  H?.strErrorMsg,
                H,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        E([c.sH], I.prototype, "m_mapExistingEvents", 2),
          E([c.sH], I.prototype, "m_mapAnnouncementBodyToEvent", 2),
          E([c.sH], I.prototype, "m_mapClanToGIDs", 2),
          E([c.sH], I.prototype, "m_mapAppIDToGIDs", 2),
          E([c.sH], I.prototype, "m_mapUpdatedApps", 2),
          E([c.XI], I.prototype, "Init", 1),
          E([Z.oI], I.prototype, "GetPartnerEventChangeCallback", 1),
          E([c.XI], I.prototype, "RegisterClanEvents", 1),
          E([c.XI], I.prototype, "InsertEventModelFromClanEventData", 1),
          E([c.XI], I.prototype, "DeleteClanEvent", 1),
          E([c.XI], I.prototype, "RemoveGIDFromList", 1),
          E([c.XI], I.prototype, "FlushEventFromCache", 1),
          E([Z.oI], I.prototype, "SavePartnerEventSaleAssets", 1);
        const P = new I();
        (0, G.V)("g_PartnerEventStore", P);
        const C = new I(!0);
        (0, G.V)("g_PartnerEventSummaryStore", C);
        function X(Y, u, d = !1) {
          const [_, b] = (0, $.useState)(() => P.GetClanEventModel(u)),
            [H, J] = (0, $.useState)(!0),
            F = (0, $.useMemo)(() => T.b.InitFromClanID(Y), [Y]);
          return (
            (0, $.useEffect)(() => {
              !_ &&
                Y > 0 &&
                (P.Init(),
                P.LoadPartnerEventFromClanEventGIDAndClanSteamID(F, u, 0, d)
                  .then(b)
                  .finally(() => J(!1)));
            }, [F, u, _, Y, d]),
            (0, Z.hL)(d ? P.GetPartnerEventChangeCallback(u) : void 0, b),
            { eventModel: _, bLoading: H }
          );
        }
        function te() {
          return { fnSaveSaleAssets: P.SavePartnerEventSaleAssets };
        }
      },
      63854: (ae, K, a) => {
        "use strict";
        a.d(K, { a: () => v, z: () => t });
        var f = a(71742),
          L = a(13018),
          c = a(60298),
          p = a(98609),
          i = a(67705);
        class t {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              t.s_Singleton ||
                ((t.s_Singleton = new t()), t.s_Singleton.Init()),
              t.s_Singleton
            );
          }
          Init() {
            const j = (0, i.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            (0, f.wT)(!!j, "require promotion_operation_token"),
              (this.m_steamInterface = (0, c.p)(
                new L.D(p.TS.WEBAPI_BASE_URL, j),
              ));
          }
        }
        function v() {
          return t.Get().GetPromotionTransport().GetServiceTransport();
        }
      },
      61266: (ae, K, a) => {
        "use strict";
        a.d(K, { T: () => j, m: () => T });
        var f = a(90626),
          L = a(13018),
          c = a(60298),
          p = a(10142),
          i = a(71742),
          t = a(3166),
          v = a(14616);
        function T(B) {
          const [m, k] = (0, f.useState)(!1),
            [h] = (0, f.useState)(() => z()),
            $ = (0, f.useMemo)(
              () => ({
                country: t.TS.COUNTRY,
                language: t.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, f.useEffect)(() => (k(!0), S(h)), [h]),
            m
              ? (0, f.createElement)(v.V3, {
                  context: $,
                  serviceTransportOverride: h.GetServiceTransport(),
                  children: B.children,
                })
              : null
          );
        }
        function j(B) {
          const [m] = (0, f.useState)(() => z()),
            k = (0, f.useMemo)(
              () => ({
                country: t.TS.COUNTRY,
                language: t.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: B.bIncludeUnpublished,
              }),
              [B.bIncludeUnpublished],
            );
          return (0, f.createElement)(v.V3, {
            context: k,
            serviceTransportOverride: m.GetServiceTransport(),
            children: B.children,
          });
        }
        function z() {
          const B = (0, t.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, i.wT)(!!B, "require partnerbrowse_webapi_token"),
            (0, c.p)(new L.D(t.TS.WEBAPI_BASE_URL, B))
          );
        }
        function S(B) {
          return p.A.Initialize(
            B.GetServiceTransport(),
            t.iA.is_partner_member,
          );
        }
      },
      54407: (ae, K, a) => {
        "use strict";
        a.d(K, { B3: () => x, CF: () => E, KM: () => Z, KT: () => w });
        var f = a(41735),
          L = a.n(f),
          c = a(58632),
          p = a.n(c),
          i = a(90626),
          t = a(20194),
          v = a(75233),
          T = a(72604),
          j = a(76559),
          z = a(34592),
          S = a(3166),
          B = a(35038),
          m = a(27386),
          k = a(68312),
          h = a(40497);
        const $ = "nicknames";
        function Z(M) {
          const g = (0, k.KV)(),
            { data: O, isLoading: y } = (0, t.I)({
              queryKey: [$],
              queryFn: async () => {
                const I = new Map();
                if (S.iA.logged_in) {
                  const P = B.w.Init(m.w_T),
                    X = (await m.xtC.GetNicknameList(g, P)).Body().toObject();
                  X?.nicknames &&
                    X.nicknames.length > 0 &&
                    X.nicknames.forEach((te) => {
                      te.accountid &&
                        te.nickname &&
                        I.set(te.accountid, te.nickname);
                    });
                }
                return I;
              },
            });
          return O ? O.get(M) : null;
        }
        async function A(M) {
          if (!M || M.length == 0) return [];
          const g =
            (0, S.yK)() == "community"
              ? S.TS.COMMUNITY_BASE_URL
              : S.TS.STORE_BASE_URL;
          if (M.length == 1) {
            const O = { accountid: M[0], origin: self.origin },
              y = await L().get(`${g}actions/ajaxgetavatarpersona`, {
                params: O,
              });
            if (
              !y ||
              y.status != 200 ||
              y.data?.success != T.R ||
              !y.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, z.H))(y).strErrorMsg}`;
            return [y.data.userinfo];
          } else {
            const O = { accountids: M.join(","), origin: self.origin },
              y = await L().get(`${g}actions/ajaxgetmultiavatarpersona`, {
                params: O,
              });
            if (
              !y ||
              y.status != 200 ||
              y.data?.success != T.R ||
              !y.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, z.H))(y).strErrorMsg}`;
            const I = new Map();
            return (
              y.data.userinfos.forEach((P) =>
                I.set(new j.b(P.steamid).GetAccountID(), P),
              ),
              M.map((P) => I.get(P))
            );
          }
        }
        const W = new (p())((M) => A(M), { cache: !1 }),
          G = "avatarandpersonas";
        function w(M) {
          const { data: g, isLoading: O } = (0, t.I)({
            queryKey: [G, M],
            queryFn: () => W.load(M),
          });
          return [g, O];
        }
        function x(M) {
          const g = (0, v.jE)(),
            { data: O, isLoading: y } = (0, t.I)({
              queryKey: [G, M],
              queryFn: async () => {
                const P = await W.loadMany(M);
                return (
                  P.forEach((C) => {
                    if (C instanceof Error) return;
                    const X = [G, new j.b(C.steamid).GetAccountID()];
                    g.setQueryData(X, C);
                  }),
                  P
                );
              },
              enabled: M?.length > 0,
            }),
            I = (0, i.useMemo)(() => {
              const P = new Array();
              return (
                O?.forEach((C) => {
                  C instanceof Error || P.push(C);
                }),
                P
              );
            }, [O]);
          return y ? null : I;
        }
        function E(M) {
          return h.L.getQueryData([G, M]);
        }
      },
      19324: (ae, K, a) => {
        "use strict";
        a.d(K, { S: () => z, c: () => j });
        var f = a(72604),
          L = a(41735),
          c = a.n(L),
          p = a(20194),
          i = a(34592),
          t = a(98609),
          v = a(3166);
        async function T(S) {
          const B = { accountid: S, origin: self.origin };
          let m = `${t.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, v.yK)() == "partner" &&
            (m = `${t.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const k = await c().get(m, { params: B, withCredentials: !0 });
          if (
            !k ||
            k.status != 200 ||
            k.data?.success != f.R ||
            !k.data?.partners
          )
            throw `Load single user partner info failed ${((0, i.H))(k).strErrorMsg}`;
          return k.data.partners;
        }
        function j(S) {
          const { data: B, isLoading: m } = (0, p.I)({
            queryKey: ["PartnerInfoList", S],
            queryFn: () => T(S),
          });
          return m ? null : B;
        }
        function z(S, B) {
          return j(S)?.find((k) => k.partnerid === B);
        }
      },
      24806: (ae, K, a) => {
        "use strict";
        a.d(K, { Ng: () => A, iN: () => W, yk: () => G });
        var f = a(7850),
          L = a(75844),
          c = a(65946),
          p = a(90626),
          i = a(99412),
          t = a(32093),
          v = a(50109),
          T = a(95695),
          j = a.n(T),
          z = a(36707),
          S = a(18210),
          B = a(92264),
          m = a(54963),
          k = a(71421),
          h = Object.defineProperty,
          $ = Object.getOwnPropertyDescriptor,
          Z = (w, x, E, M) => {
            for (
              var g = M > 1 ? void 0 : M ? $(x, E) : x, O = w.length - 1, y;
              O >= 0;
              O--
            )
              (y = w[O]) && (g = (M ? y(x, E, g) : y(g)) || g);
            return M && g && h(x, E, g), g;
          };
        let A = class extends p.Component {
          GenerateLanguageOptions() {
            let w = [];
            const {
              fnFilterLanguage: x,
              fnLangHasData: E,
              fnLastUpdateRTime: M,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              w.push(
                (0, f.jsx)(
                  "option",
                  {
                    value: i.xPp,
                    children: (0, S.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let O = new Array();
            const y = this.props.realms || [t.TU.k_ESteamRealmGlobal];
            for (const P of S.A0.GetLanguageListForRealms(y)) {
              if (x && !x(P)) continue;
              const C = (0, i.LgB)(P),
                X = (0, S.we)("#Language_" + C),
                te = !!(g && g(P));
              O.push({ eLang: P, sLocName: X, bSupported: te });
            }
            O.sort((P, C) =>
              P.bSupported != C.bSupported
                ? P.bSupported
                  ? -1
                  : 1
                : P.sLocName.localeCompare(C.sLocName),
            );
            let I = !1;
            for (const P of O) {
              P.bSupported != I &&
                (w.push(
                  (0, f.jsx)(
                    "option",
                    {
                      className: j().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, S.we)(
                        P.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    P.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (I = P.bSupported));
              const C = E && E(P.eLang),
                X = M && M(P.eLang);
              let te = P.sLocName;
              X &&
                X !== 0 &&
                ((te += " "),
                (te += (0, S.we)(
                  "#Language_Last_Update",
                  (0, S.$z)(X) +
                    " @ " +
                    (0, B.KC)(X, { bForce24HourClock: !1 }),
                ))),
                w.push(
                  (0, f.jsx)(
                    "option",
                    {
                      value: P.eLang,
                      className: (0, z.A)(
                        { [j().LanguageWithContent]: C },
                        P.bSupported
                          ? j().SupportedLanguage
                          : j().UnsupportedLanguage,
                      ),
                      children: te,
                    },
                    "langpicker" + P.eLang + (C ? "_hasdata" : ""),
                  ),
                );
            }
            return w;
          }
          OnLanguageChange(w) {
            const { fnOnLanguageChanged: x, selectedLang: E } = this.props;
            let M = Number.parseInt(w.currentTarget.value);
            M != E && x && x(M);
          }
          render() {
            const { selectedLang: w, bDisabled: x, strTooltip: E } = this.props;
            let M = this.GenerateLanguageOptions();
            return (0, f.jsx)(k.he, {
              toolTipContent: E,
              children: (0, f.jsx)("select", {
                value: w,
                onChange: this.OnLanguageChange,
                disabled: x,
                children: M,
              }),
            });
          }
        };
        Z([m.oI], A.prototype, "OnLanguageChange", 1), (A = Z([L.PA], A));
        function W(w) {
          const [x, E] = (0, c.q3)(() => [
            v.O.Get().GetHasLocalizationContext(),
            v.O.Get().GetCurEditLanguage(),
          ]);
          return (0, f.jsx)(A, {
            selectedLang: E,
            fnLangHasData: v.O.Get().BHasLanguageData,
            fnOnLanguageChanged: v.O.Get().SetCurEditLanguage,
            bDisabled: !x,
            strTooltip: x
              ? void 0
              : (0, S.we)("#Localization_EditorNotInFocus"),
          });
        }
        function G(w) {
          const { fnLangHasData: x } = w;
          p.useEffect(
            () => (
              v.O.Get().SetHasLocalizationContext(!0),
              () => v.O.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const E = (0, c.q3)(() => {
            const M = [];
            for (let g = i.Bhc; g < i.bP9; ++g) M[g] = !!(x && x(g));
            return M;
          });
          return (
            p.useEffect(() => v.O.Get().SetHasLanguage(E), [E]),
            (0, f.jsx)(f.Fragment, {})
          );
        }
      },
      12932: (ae, K, a) => {
        "use strict";
        a.d(K, { AQ: () => k, pn: () => $, qx: () => h });
        var f = a(7850),
          L = a(58534),
          c = a(18210),
          p = a(36118),
          i = a(90626),
          t = a(36707),
          v = a(95695),
          T = a.n(v),
          j = a(25792),
          z = a(64734),
          S = a.n(z),
          B = a(65946),
          m = a(11243);
        function k(Z) {
          const {
              title: A,
              tooltip: W,
              getMinimized: G,
              toggleMinimized: w,
              className: x,
              children: E,
              elAdditionalButtons: M,
            } = Z,
            g = (0, B.q3)(() => G());
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)("div", {
                className: (0, t.A)(
                  x,
                  z.SectionTitleHeader,
                  z.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, f.jsxs)("div", {
                    className: (0, t.A)(
                      v.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [A, !!W && (0, f.jsx)(m.o, { tooltip: W })],
                  }),
                  (0, f.jsxs)("div", {
                    className: z.SectionTitleButtons,
                    children: [
                      M,
                      (0, f.jsx)($, { bIsMinimized: g, fnToggleMinimize: w }),
                    ],
                  }),
                ],
              }),
              !g && (0, f.jsx)(j.tH, { children: E }),
            ],
          });
        }
        function h(Z) {
          const [A, W] = i.useState(!!Z.bStartMinimized);
          return (0, f.jsx)(k, {
            ...Z,
            getMinimized: () => A,
            toggleMinimized: () => W(!A),
            children: Z.children,
          });
        }
        function $(Z) {
          const { bIsMinimized: A, fnToggleMinimize: W } = Z,
            G = A ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, f.jsx)(L.$n, {
            "data-tooltip-text": (0, c.we)(G),
            onClick: W,
            children: Z.bIsMinimized
              ? (0, f.jsx)(p.hz4, {})
              : (0, f.jsx)(p.Xjb, {}),
          });
        }
      },
      41502: (ae, K, a) => {
        "use strict";
        a.d(K, { J2: () => L, bv: () => p, kO: () => c, xi: () => f });
        function f(i) {
          const t = new Date(i.getTime());
          return t.setHours(0, 0, 0, 0), t;
        }
        function L(i) {
          const t = new Date(i.getTime());
          return t.setDate(1), t.setHours(0, 0, 0, 0), t;
        }
        function c(i, t) {
          const v = new Date(i);
          return v.setDate(i.getDate() + t), v;
        }
        function p(i, t) {
          return i.reduce((v, T) => {
            const j = t(T),
              z = Math.floor(j.getTime() / 1e3),
              S = v.get(z) || [];
            return v.set(z, [...S, T]), v;
          }, new Map());
        }
      },
      22880: (ae, K, a) => {
        "use strict";
        a.d(K, { g: () => c });
        var f = a(40323),
          L = a.n(f);
        class c {
          static ParseCSVFile(i, t) {
            return new Promise((v, T) => {
              const z = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: v,
                error: (S) => T({ errors: [S] }),
                transformHeader: t,
              };
              L().parse(i, z);
            });
          }
          static ReadFile(i) {
            return new Promise((t, v) => {
              const T = new FileReader();
              (T.onload = (j) => t(T.result)), T.readAsText(i);
            });
          }
          static WriteFile(i, t) {
            let v = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(i, t);
            else {
              const T = window.URL.createObjectURL(i);
              v.href = T;
            }
            v.setAttribute("download", t), v.click();
            try {
              document.removeChild(v);
            } catch {}
          }
          static WriteCSVToFile(i, t, v, T) {
            const j = T
                ? L().unparse({ fields: T, data: i }, { header: !0 })
                : L().unparse(i, { header: !0 }),
              z = v == !0 ? ["\uFEFF" + j] : [j];
            c.WriteFile(new Blob(z, { type: "text/csv:charset=utf-8;" }), t);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(i, t) {
            const v = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let T =
              "<" +
              v() +
              'xml version="1.0" encoding="UTF-8" ' +
              v() +
              `>
`;
            (T += new XMLSerializer().serializeToString(i)),
              c.WriteFile(
                new Blob([T], { type: "application/xml:charset=utf-8;" }),
                t,
              );
          }
        }
      },
      71684: (ae, K, a) => {
        "use strict";
        a.d(K, { JS: () => p, rG: () => v });
        var f = a(99412),
          L = a(39905);
        function c(T) {
          return T !== k_EClanEventType_NewsEvent;
        }
        function p(T) {
          switch (T) {
            case f.Aqr:
            case f.I5b:
            case f.jO6:
            case f.Y3j:
            case f.Bb7:
            case f.TiP:
            case f.EPt:
            case f.E3D:
            case f.L0X:
            case f.KDJ:
            case f.Fa4:
            case f.Aav:
            case f.SRb:
            case f.HRy:
            case f.C$4:
            case f.zA:
            case f.y6:
            case f.hGl:
            case f.WNR:
            case f.pIh:
            case f.izQ:
            case f.LOv:
            case f.zcX:
            case f.DRF:
            case f.HFK:
              return !0;
          }
          return !1;
        }
        function i(T, j) {
          return !(
            T == k_EClanEventType_SmallUpdateEvent ||
            T == k_EClanEventType_CreatorHome ||
            (j && j.indexOf("curator") != -1)
          );
        }
        function t(T) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(T);
        }
        function v(T) {
          let j = "#PartnerEvent_" + T,
            z = L.Z.Localize(j);
          return z != j ? z : L.Z.Localize("#PartnerEvent_Other");
        }
      },
      78430: (ae) => {
        ae.exports = { FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj" };
      },
      64734: (ae) => {
        ae.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
