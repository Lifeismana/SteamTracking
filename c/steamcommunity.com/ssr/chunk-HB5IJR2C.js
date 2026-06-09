var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
var _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
  _ =
    "document" in globalThis
      ? document.cookie
          .split(";")
          .find((_) => _.trim().startsWith("timezoneName"))
          ?.split("=")[1]
      : void 0,
  _ = _ && decodeURIComponent(_);
function _() {
  "document" in globalThis &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
}
_();
function _() {
  return _().languages.map((_) => _(_.strISOCode));
}
function _(_) {
  return _.length == 2 && _.COUNTRY ? `${_}-${_.COUNTRY}` : _;
}
function _(_) {
  return _.toLocaleString(_());
}
var _ = "./localization_arabic-XXXXXXXX.json";
var _ = "./localization_brazilian-XXXXXXXX.json";
var _ = "./localization_bulgarian-XXXXXXXX.json";
var _ = "./localization_czech-XXXXXXXX.json";
var _ = "./localization_danish-XXXXXXXX.json";
var _ = "./localization_dutch-XXXXXXXX.json";
var _ = "./localization_english-XXXXXXXX.json";
var _ = "./localization_finnish-XXXXXXXX.json";
var _ = "./localization_french-XXXXXXXX.json";
var _ = "./localization_german-XXXXXXXX.json";
var _ = "./localization_greek-XXXXXXXX.json";
var _ = "./localization_hungarian-XXXXXXXX.json";
var _ = "./localization_indonesian-XXXXXXXX.json";
var _ = "./localization_italian-XXXXXXXX.json";
var _ = "./localization_japanese-XXXXXXXX.json";
var _ = "./localization_koreana-XXXXXXXX.json";
var _ = "./localization_latam-XXXXXXXX.json";
var _ = "./localization_malay-XXXXXXXX.json";
var _ = "./localization_norwegian-XXXXXXXX.json";
var _ = "./localization_polish-XXXXXXXX.json";
var _ = "./localization_portuguese-XXXXXXXX.json";
var _ = "./localization_romanian-XXXXXXXX.json";
var _ = "./localization_russian-XXXXXXXX.json";
var _ = "./localization_sc_schinese-XXXXXXXX.json";
var _ = "./localization_schinese-XXXXXXXX.json";
var _ = "./localization_spanish-XXXXXXXX.json";
var _ = "./localization_swedish-XXXXXXXX.json";
var _ = "./localization_tchinese-XXXXXXXX.json";
var _ = "./localization_thai-XXXXXXXX.json";
var _ = "./localization_turkish-XXXXXXXX.json";
var _ = "./localization_ukrainian-XXXXXXXX.json";
var _ = "./localization_vietnamese-XXXXXXXX.json";
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
_.malay = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.sc_schinese = _;
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
var _ = _(_(), 1);
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.default.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return (
    _.push(_.substr(_)), _.default.createElement(_.default.Fragment, null, ..._)
  );
}
function _(_, _ = ["b", "i", "br"]) {
  let _ = _.join("|"),
    _ = [],
    _ = new RegExp(
      `(?<before>.*?)<(?<tagname>${_})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
      "gs",
    ),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    if (!_.groups) continue;
    if (!_.groups?.endtag) {
      let _ = _.groups.before.length + _.groups.tagname.length + 2;
      (_ += _), (_.lastIndex = _.index + _), _.push(_.groups.before);
      let _ = _[2],
        _ = _.default.createElement(_);
      _.push(_);
      continue;
    }
    (_ += _[0].length), _.push(_.groups.before);
    let _ = _.groups.tagname,
      _ = _.groups.contents || "",
      _ = null;
    _ && (_ = _(_, _));
    let _ = _.default.createElement(_, {}, _);
    _.push(_);
  }
  return (
    _.push(_.slice(_)), _.default.createElement(_.default.Fragment, null, ..._)
  );
}
function _(_, _) {
  let _ = _.toLowerCase().replace(/[^\p{L}\p{N}\p{Z}]/gu, ""),
    _ = _[_];
  return _ && (_ = _.replace(_, "")), _.trim();
}
function _(_, _) {
  let _ = _().languages[0].strLanguage,
    _ = _.map((_) => ({
      item: _,
      strSort: _(_ ? _(_) : _, _),
    })),
    _ = new Intl.Collator(_(), {
      numeric: !0,
    });
  return (
    _.sort((_, _) => _.compare(_.strSort, _.strSort)), _.map(({ item: _ }) => _)
  );
}
var _ = {
  english: /^(the |a |an )/,
  brazilian: /^(o |os |a |as |um |uns |uma |umas )/,
  danish: /^(en |et |den |det |de )/,
  dutch: /^(de |het |een )/,
  french: /^(le |la |l'|les |un |une |des )/,
  german: /^(der |die |das |ein |eine )/,
  greek: /^(ο |η |το |οι |τα |ένας |μια |μία |ένα )/,
  hungarian: /^(a |az |egy )/,
  italian: /^(il |lo |la |l'|i |gli |le |un |uno |una |un')/,
  portuguese: /^(o |a |os |as |um |uma |uns |umas )/,
  romanian: /^(un |o |unii |unele )/,
  spanish: /^(el |la |los |las |un |una |unos |unas )/,
  latam: /^(el |la |los |las |un |una |unos |unas )/,
};
var _ = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function _() {
  return _().languages[0];
}
var _ = _(_);
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: "numeric",
      month: "short",
      day: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let {
      fullmonthname: _ = !1,
      bUseRelativeNames: _ = !0,
      bIncludeDayName: _ = !1,
    } = _ ?? {},
    _ = new Date(),
    _ = new Date(_ * 1e3);
  if (_.getFullYear() != _.getFullYear())
    return _(_, {
      month: _ ? "long" : "short",
    });
  let _ = new Date();
  if ((_.setHours(0, 0, 0, 0), _)) {
    if (_ >= _) {
      if ((_.setDate(_.getDate() + 1), _ < _)) return _.Localize("#Time_Today");
      if ((_.setDate(_.getDate() + 1), _ < _))
        return _.Localize("#Time_Tomorrow");
    } else if ((_.setDate(_.getDate() - 1), _ >= _))
      return _.Localize("#Time_Yesterday");
  }
  let _ = {
    month: _ ? "long" : "short",
    day: "numeric",
  };
  return _ && (_.weekday = "long"), _.toLocaleDateString(_(), _);
}
function _(_) {
  let _ = new Date();
  _.setHours(15);
  let _ = _.toLocaleTimeString(_, {
      hour: "numeric",
    }),
    _ = _.toLocaleTimeString(_, {
      hour: "numeric",
      hour12: !1,
    });
  return _ == _;
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23",
    },
    _ = {
      hour: "numeric",
      minute: "2-digit",
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3);
  return (
    _(_, !1, !1) +
    " " +
    _(_, {
      bForce24HourClock: _,
    }) +
    " " +
    _
  );
}
function _(_, _ = !1, _ = !0) {
  let _ = {
    weekday: _ ? "long" : "short",
    day: "numeric",
    month: _ ? "long" : "short",
  };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  return (
    (_ === void 0 || isNaN(_)) && (_ = 0),
    {
      hours: Math.floor(_ / 3600),
      minutes: Math.floor((_ % 3600) / 60),
      seconds: Math.floor(_ % 60),
      fraction: _ - Math.floor(_),
    }
  );
}
function _(_) {
  let _ = _(_),
    _ = _.hours * 60 + _.minutes,
    _ = _.hours,
    _ = Math.floor(_.hours / 24),
    _ = Math.floor(_ / 30);
  return _ > 1
    ? _.Localize("#ReadableDuration_Months", _)
    : _ === 1
      ? _.Localize("#ReadableDuration_OneMonth")
      : _ > 1
        ? _.Localize("#ReadableDuration_Days", _)
        : _ > 2
          ? _.Localize("#ReadableDuration_Hours", _)
          : _ > 2
            ? _.Localize("#ReadableDuration_Minutes", _)
            : _ > 1
              ? _.Localize("#ReadableDuration_OneMinute")
              : _.Localize("#ReadableDuration_LessThanOneMinute");
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
