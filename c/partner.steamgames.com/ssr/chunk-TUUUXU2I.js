var _ = {};
_(_, {
  Heading: () => _,
  "HeadingSize-1": () => _,
  "HeadingSize-2": () => _,
  "HeadingSize-3": () => _,
  "HeadingSize-4": () => _,
  "HeadingSize-5": () => _,
  "HeadingSize-6": () => _,
  "HeadingSize-7": () => _,
  "HeadingSize-8": () => _,
  "HeadingSize-9": () => _,
  default: () => _,
});
var _ = "YSx27r8UVdU-";
var _ = "_7Ek-aKJIN8w-";
var _ = "SRBiKn09hiM-";
var _ = "Yjqebr8Xl-I-";
var _ = "Qk5gUMBPRbw-";
var _ = "_6txkg--ndn0-";
var _ = "jTZ-n4nnJGM-";
var _ = "ggtnOIsDA3I-";
var _ = "nuq2Wi-uWdM-";
var _ = "PlYOLTK4lfE-";
var _ = {
  Heading: "YSx27r8UVdU-",
  "HeadingSize-1": "_7Ek-aKJIN8w-",
  "HeadingSize-2": "SRBiKn09hiM-",
  "HeadingSize-3": "Yjqebr8Xl-I-",
  "HeadingSize-4": "Qk5gUMBPRbw-",
  "HeadingSize-5": "_6txkg--ndn0-",
  "HeadingSize-6": "jTZ-n4nnJGM-",
  "HeadingSize-7": "ggtnOIsDA3I-",
  "HeadingSize-8": "nuq2Wi-uWdM-",
  "HeadingSize-9": "PlYOLTK4lfE-",
};
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _.default.createContext({
  depth: 0,
});
function _() {
  return (0, _.useContext)(_).depth;
}
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let { level: _ = "auto", className: _, color: _ } = _,
    _ = _(),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._(
      {
        ..._,
        className: (0, _.default)(_(), _, _),
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`HeadingSize-${_}`],
  },
];
function _(_, _) {
  if (_ === "auto" && _ === 0) return "h1";
  let _ = _ === "auto" ? _.toString() : _;
  return /^[1-6]$/.test(_)
    ? "h" + _
    : _ === "auto"
      ? (console.error('<Section> nesting has exceeded "h6" for headings.'),
        "h6")
      : (console.error(`Attempt to render invalid heading level, "${_}".`),
        "h1");
}
var _ = {
  DefaultFancyTable: "_0ZJzfzqTK80-",
  NoColumnBorders: "a8RYlTcDi1w-",
};
var _ = "ywN8-z04oR0-";
var _ = _(_(), 1);
function _(_) {
  let { crumbs: _, className: _, bHideLastArrow: _ } = _;
  return !_ || _.length == 0
    ? null
    : (0, _.jsxs)("div", {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            className: "blockbg",
            "flow-children": "row",
            children: _.map((_, _) => {
              let _ = new Array();
              return (
                _.url.startsWith("http")
                  ? _.push(
                      (0, _.jsx)(
                        _,
                        {
                          href: _.url,
                          children: _.name,
                        },
                        "anchor_" + _.name,
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _,
                        {
                          _: _.url,
                          children: _.name,
                        },
                        "link_" + _.name,
                      ),
                    ),
                (!_ || _ < _.length - 1) &&
                  _.push(
                    (0, _.jsx)(
                      "span",
                      {
                        children: " > ",
                      },
                      _.name + "span",
                    ),
                  ),
                _
              );
            }),
          }),
          (0, _.jsx)("div", {
            style: {
              clear: "left",
            },
          }),
        ],
      });
}
var _ = _(_(), 1);
var _ = "./partnershared_arabic-XXXXXXXX.json";
var _ = "./partnershared_brazilian-XXXXXXXX.json";
var _ = "./partnershared_bulgarian-XXXXXXXX.json";
var _ = "./partnershared_czech-XXXXXXXX.json";
var _ = "./partnershared_danish-XXXXXXXX.json";
var _ = "./partnershared_dutch-XXXXXXXX.json";
var _ = "./partnershared_english-XXXXXXXX.json";
var _ = "./partnershared_finnish-XXXXXXXX.json";
var _ = "./partnershared_french-XXXXXXXX.json";
var _ = "./partnershared_german-XXXXXXXX.json";
var _ = "./partnershared_greek-XXXXXXXX.json";
var _ = "./partnershared_hungarian-XXXXXXXX.json";
var _ = "./partnershared_indonesian-XXXXXXXX.json";
var _ = "./partnershared_italian-XXXXXXXX.json";
var _ = "./partnershared_japanese-XXXXXXXX.json";
var _ = "./partnershared_koreana-XXXXXXXX.json";
var _ = "./partnershared_latam-XXXXXXXX.json";
var _ = "./partnershared_norwegian-XXXXXXXX.json";
var _ = "./partnershared_polish-XXXXXXXX.json";
var _ = "./partnershared_portuguese-XXXXXXXX.json";
var _ = "./partnershared_romanian-XXXXXXXX.json";
var _ = "./partnershared_russian-XXXXXXXX.json";
var _ = "./partnershared_schinese-XXXXXXXX.json";
var _ = "./partnershared_spanish-XXXXXXXX.json";
var _ = "./partnershared_swedish-XXXXXXXX.json";
var _ = "./partnershared_tchinese-XXXXXXXX.json";
var _ = "./partnershared_thai-XXXXXXXX.json";
var _ = "./partnershared_turkish-XXXXXXXX.json";
var _ = "./partnershared_ukrainian-XXXXXXXX.json";
var _ = "./partnershared_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
var _ = _(_());
function _(_) {
  return (0, _.useMemo)(() => {
    if (!(_ == null || _ == _))
      return {
        appid: _,
      };
  }, [_]);
}
var _ = _(_(), 1);
function _(_) {
  let { nAppID: _, rgCrumbs: _, strSubtitle: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      let _ = [
        {
          name: _.Localize("#BreadCrumbs_Steamworks"),
          url: `${_.PARTNER_BASE_URL}`,
        },
        {
          name: _.Localize("#BreadCrumbs_AppAdmin"),
          url: `${_.PARTNER_BASE_URL}apps`,
        },
        {
          name: _?.name ?? "" + _,
          url: `${_.PARTNER_BASE_URL}apps/landing/${_}`,
        },
      ];
      return _ && _.length > 0 && _.push(..._), _;
    }, [_, _?.name, _]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        crumbs: _,
        bHideLastArrow: !0,
      }),
      (0, _.jsxs)("div", {
        children: [_?.name ?? "", " (", _, ")", _ ? " - " + _ : ""],
      }),
      (0, _.jsx)("hr", {}),
    ],
  });
}
export { _, _, _ };
