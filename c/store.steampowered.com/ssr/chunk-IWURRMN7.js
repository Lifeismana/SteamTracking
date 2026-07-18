var _ = _((_) => {
  "use strict";
  var _ = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.fragment");
  function _(_, _, _) {
    var _ = null;
    if (
      (_ !== void 0 && (_ = "" + _),
      _.key !== void 0 && (_ = "" + _.key),
      "key" in _)
    ) {
      _ = {};
      for (var _ in _) _ !== "key" && (_[_] = _[_]);
    } else _ = _;
    return (
      (_ = _.ref),
      {
        $$typeof: _,
        type: _,
        key: _,
        ref: _ !== void 0 ? _ : null,
        props: _,
      }
    );
  }
  _.Fragment = _;
  _.jsx = _;
  _.jsxs = _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
var _ = {};
_(_, {
  k_EContentDescriptorMAX: () => _,
  k_EContentDescriptor_AdultOnlySexualContent: () => _,
  k_EContentDescriptor_AnyMatureContent: () => _,
  k_EContentDescriptor_FrequentViolenceOrGore: () => _,
  k_EContentDescriptor_GratuitousSexualContent: () => _,
  k_EContentDescriptor_NudityOrSexualContent: () => _,
});
var _ = 1,
  _ = 2,
  _ = 3,
  _ = 4,
  _ = 5,
  _ = 6;
function _(_) {
  return "unknown EContentDescriptorID ( " + _ + " )";
}
var _ = {
    EUNIVERSE: 0,
    WEB_UNIVERSE: "",
    LANGUAGE: "english",
    SUPPORTED_LANGUAGES: [],
    COUNTRY: "",
    AVATAR_BASE_URL: "",
    MEDIA_CDN_COMMUNITY_URL: "",
    MEDIA_CDN_URL: "",
    CLAN_CDN_ASSET_URL: "",
    COMMUNITY_ASSETS_BASE_URL: "",
    VIDEO_CDN_URL: "",
    COMMUNITY_CDN_URL: "",
    COMMUNITY_CDN_ASSET_URL: "",
    BASE_URL_SHARED_CDN: "",
    STORE_CDN_URL: "",
    PUBLIC_SHARED_URL: "",
    COMMUNITY_BASE_URL: "",
    CHAT_BASE_URL: "",
    STORE_BASE_URL: "",
    STORE_CHECKOUT_BASE_URL: "",
    LOGIN_BASE_URL: "",
    SUPPORT_BASE_URL: "",
    STORE_ICON_BASE_URL: "",
    STORE_ITEM_BASE_URL: "",
    IMG_URL: "",
    STEAMTV_BASE_URL: "",
    HELP_BASE_URL: "",
    PARTNER_BASE_URL: "",
    STATS_BASE_URL: "",
    INTERNAL_STATS_BASE_URL: "",
    BASE_URL_STORE_CDN_ASSETS: "",
    IN_CLIENT: !1,
    USE_POPUPS: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    IN_TENFOOT: !1,
    PLATFORM: "",
    ARCH: "",
    SNR: "",
    LAUNCHER_TYPE: 0,
    EREALM: 0,
    IN_CHROMEOS: !1,
    TESLA: !1,
    LOCAL_HOSTNAME: "",
    WEBAPI_BASE_URL: "",
    TOKEN_URL: "",
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: "Unknown",
    IN_STEAMUI: !1,
    IN_GAMEPADUI: !1,
    FORCED_DISPLAY_MODE: void 0,
    ON_FRAME: !1,
    IS_STEAMOS: !1,
    ON_STEAMOS_CLIENT_BRANCH: !1,
    IN_GAMESCOPE: !1,
    IN_LOGIN: !1,
    IN_LOGIN_REFRESH: !1,
    USE_LONGEST_LOC_STRING: !1,
    SILENT_STARTUP: !1,
    DEV_MODE: !1,
    CLIENT_SESSION: 0,
    NOW: 0,
  },
  _ = {
    logged_in: !1,
    steamid: "",
    accountid: 0,
    account_name: "",
    token: void 0,
    token_use_id: void 0,
    webapi_token: "",
    authwgtoken: "",
    is_support: !1,
    is_limited: !1,
    is_partner_member: !1,
    is_valve_email: !1,
    short_url: "",
    country_code: "",
    excluded_content_descriptors: [
      _.k_EContentDescriptor_AdultOnlySexualContent,
      _.k_EContentDescriptor_GratuitousSexualContent,
      _.k_EContentDescriptor_NudityOrSexualContent,
    ],
  };
var _ = {
  CLANSTEAMID: "",
  CLANACCOUNTID: 0,
  APPID: 0,
  VANITY_ID: "",
  IS_CREATOR_HOME: !1,
  IS_CURATOR: !1,
  IS_OGG: !1,
  CAN_UPLOAD_IMAGES: !1,
  IS_VALVE_GROUP: !1,
  IS_ALLOWED_SC: !1,
};
function _(_) {
  if (!_() || !window.document.cookie) return null;
  let _ = document.cookie.match("(^|; )" + _ + "=([^;]*)");
  return _ && _[2] ? decodeURIComponent(_[2]) : null;
}
function _(_, _, _, _) {
  if (!_()) return;
  _ || (_ = "/");
  let _ = "";
  if (typeof _ < "u" && _) {
    let _ = new Date();
    _.setTime(_.getTime() + 1e3 * 60 * 60 * 24 * _),
      (_ = "; expires=" + _.toUTCString());
  }
  document.cookie =
    encodeURIComponent(_) + "=" + encodeURIComponent(_) + _ + ";path=" + _;
}
function _() {
  return !!window.document;
}
var _ = "webui_config",
  _;
function _() {
  if (!_()) return _ || (_ = _()), _;
  let _ = _("sessionid");
  return _ || (_ = _()), _;
}
function _() {
  let _ = "";
  for (let _ = 0; _ < 24; _++) _ += _(0, 35).toString(36);
  return _;
}
function _() {
  let _ = _();
  return _("sessionid", _, 0), _;
}
var _ = new Set(),
  _ = !1;
function _() {
  return _
    ? Promise.resolve()
    : new Promise((_) => {
        _.add(_);
      });
}
function _(_, _ = _) {
  return _(_, _, !0);
}
function _(_, _ = _) {
  return _(_, _, !1);
}
function _(_, _ = _, _) {
  let _;
  if ((typeof _ == "string" ? (_ = document.getElementById(_)) : (_ = _), _))
    try {
      return _.hasAttribute("data-" + _)
        ? JSON.parse(_.getAttribute("data-" + _))
        : null;
    } catch (_) {
      console.error(
        "Failed to parse config for " +
          _.steamid +
          " (" +
          window.location.href +
          ")",
        _,
      );
    }
  else _ && console.error("Missing config element #", _);
}
var _ = "presentation_mode";
function _() {
  let _ = null;
  return _() && (_ = _(_)), !!(_ && Number.parseInt(_) === 1);
}
var _ = window.Config ?? _,
  _ = window.UserConfig ?? _,
  _ = window.Config ? () => Promise.resolve() : _;
window.Config && Object.assign(_, window.Config);
window.UserConfig && Object.assign(_, window.UserConfig);
function _(_) {
  return "PUBLIC_PATH" in _ ? _.PUBLIC_PATH + _ : _;
}
var _;
_ ??= new Set();
var _;
function _() {
  return (_ ??= Promise.all(_));
}
function _(_) {
  (_ ??= new Set()), _.add(_), (_ = Promise.all(_));
}
var _ = _(_(), 1);
var _ = [
    "sc_schinese",
    "schinese",
    "tchinese",
    "japanese",
    "koreana",
    "thai",
    "arabic",
    "indonesian",
    "malay",
    "bulgarian",
    "czech",
    "danish",
    "german",
    "english",
    "spanish",
    "latam",
    "greek",
    "french",
    "italian",
    "hungarian",
    "dutch",
    "norwegian",
    "polish",
    "portuguese",
    "brazilian",
    "romanian",
    "russian",
    "finnish",
    "swedish",
    "turkish",
    "vietnamese",
    "ukrainian",
  ],
  _ = new Set(_);
var _ = new Map([
  ["en", "english"],
  ["de", "german"],
  ["fr", "french"],
  ["it", "italian"],
  ["ko", "koreana"],
  ["es-419", "latam"],
  ["es", "spanish"],
  ["zh", "schinese"],
  ["zh-cn", "schinese"],
  ["zh-tw", "tchinese"],
  ["ru", "russian"],
  ["ar", "arabic"],
  ["th", "thai"],
  ["ja", "japanese"],
  ["pt-br", "brazilian"],
  ["pt", "portuguese"],
  ["pl", "polish"],
  ["da", "danish"],
  ["nl", "dutch"],
  ["fi", "finnish"],
  ["nb", "norwegian"],
  ["no", "norwegian"],
  ["sv", "swedish"],
  ["hu", "hungarian"],
  ["cs", "czech"],
  ["ro", "romanian"],
  ["tr", "turkish"],
  ["bg", "bulgarian"],
  ["el", "greek"],
  ["uk", "ukrainian"],
  ["vn", "vietnamese"],
  ["vi", "vietnamese"],
  ["id", "indonesian"],
  ["ms", "malay"],
]);
var _ = new Map();
for (let [_, _] of _.entries()) _.set(_, _);
_.set("sc_schinese", _.get("schinese"));
_.set("korean", _.get("koreana"));
function _(_) {
  return _.get(_);
}
function _(_) {
  if (_ !== "english") return _ === "sc_schinese" ? "schinese" : "english";
}
function _(_) {
  return _ === "arabic";
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? "");
        }
        return _;
      })),
    _
  );
}
function _(_) {
  let _ = new Map();
  async function _() {
    await _();
    let _ = _(),
      _ = new Set([]);
    for (let _ of _.languages) {
      _.add(_.strLanguage);
      let _ = _(_.strLanguage);
      _ && _.add(_);
    }
    return Promise.all(
      Array.from(_).map((_) =>
        _(_).then((_) => {
          if (!_) return;
          let _ = new Map();
          for (let [_, _] of Object.entries(_)) _.set("#" + _, _);
          _.set(_, _);
        }),
      ),
    );
  }
  let _ = _(),
    _ = !1;
  _.then(() => (_ = !0)), _(_);
  function _(_, _) {
    let [_, ..._] = _,
      _ =
        _.get(_.strLanguage)?.get(_) ??
        _.get(_(_.strLanguage) ?? "english")?.get(_);
    return _ !== void 0
      ? _
      : _.length === 0
        ? (console.error("Couldn't find localization key", _), _)
        : _(_, _);
  }
  function _(_, ..._) {
    let _ = _().languages,
      _ = _(_, _);
    return _(_, ..._);
  }
  return {
    Localize(_, ..._) {
      return _(_, ..._);
    },
    LocalizeReact(_, ..._) {
      let _ = this.Localize(_);
      if (_ === _) return _;
      let _ = [],
        _ = /(.*?)%(\d+)\$s/g,
        _ = 0,
        _;
      for (; (_ = _.exec(_)); ) {
        (_ += _[0].length), _.push(_[1]);
        let _ = parseInt(_[2]);
        _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
      }
      return (
        _.push(_.slice(_)),
        _.default.createElement(_.default.Fragment, null, ..._)
      );
    },
    LocalizePlural(_, _, ..._) {
      return _ === 1 || _ === "1" ? _(_, _, ..._) : _(_ + "_Plural", _, ..._);
    },
    LocalizeInSpecificLang(_, _, ..._) {
      let _ = _(_, [_]);
      return _(_, ..._);
    },
    Ready() {
      return _;
    },
    IsReady() {
      return _;
    },
  };
}
function _() {
  if (!("SSR" in window)) throw "SSR missing";
  return (
    window.SSR.renderContext?.localizationSettings ?? {
      languages: [
        {
          strLanguage: "english",
          eSource: 5,
          strISOCode: "en",
        },
      ],
    }
  );
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
