var _ = {
    EUNIVERSE: 0,
    WEB_UNIVERSE: ``,
    LANGUAGE: `english`,
    SUPPORTED_LANGUAGES: [],
    COUNTRY: ``,
    AVATAR_BASE_URL: ``,
    MEDIA_CDN_COMMUNITY_URL: ``,
    MEDIA_CDN_URL: ``,
    CLAN_CDN_ASSET_URL: ``,
    COMMUNITY_ASSETS_BASE_URL: ``,
    VIDEO_CDN_URL: ``,
    COMMUNITY_CDN_URL: ``,
    COMMUNITY_CDN_ASSET_URL: ``,
    BASE_URL_SHARED_CDN: ``,
    STORE_CDN_URL: ``,
    PUBLIC_SHARED_URL: ``,
    COMMUNITY_BASE_URL: ``,
    CHAT_BASE_URL: ``,
    STORE_BASE_URL: ``,
    STORE_CHECKOUT_BASE_URL: ``,
    LOGIN_BASE_URL: ``,
    SUPPORT_BASE_URL: ``,
    STORE_ICON_BASE_URL: ``,
    STORE_ITEM_BASE_URL: ``,
    IMG_URL: ``,
    STEAMTV_BASE_URL: ``,
    HELP_BASE_URL: ``,
    PARTNER_BASE_URL: ``,
    STATS_BASE_URL: ``,
    INTERNAL_STATS_BASE_URL: ``,
    BASE_URL_STORE_CDN_ASSETS: ``,
    IN_CLIENT: !1,
    USE_POPUPS: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    IN_TENFOOT: !1,
    PLATFORM: ``,
    ARCH: ``,
    SNR: ``,
    LAUNCHER_TYPE: 0,
    EREALM: 0,
    IN_CHROMEOS: !1,
    TESLA: !1,
    LOCAL_HOSTNAME: ``,
    WEBAPI_BASE_URL: ``,
    TOKEN_URL: ``,
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: `Unknown`,
    IN_STEAMUI: !1,
    FORCED_DISPLAY_MODE: void 0,
    ON_FRAME: !1,
    IS_STEAMOS: !1,
    ON_STEAMOS_CLIENT_BRANCH: !1,
    IN_GAMESCOPE: !1,
    USE_LONGEST_LOC_STRING: !1,
    SILENT_STARTUP: !1,
    DEV_MODE: !1,
    CLIENT_SESSION: 0,
    NOW: 0,
  },
  _ = {
    logged_in: !1,
    steamid: ``,
    accountid: 0,
    account_name: ``,
    token: void 0,
    token_use_id: void 0,
    webapi_token: ``,
    authwgtoken: ``,
    is_support: !1,
    is_limited: !1,
    is_partner_member: !1,
    is_valve_email: !1,
    short_url: ``,
    country_code: ``,
    excluded_content_descriptors: [3, 4, 1],
  },
  _ = {
    CLANSTEAMID: ``,
    CLANACCOUNTID: 0,
    APPID: 0,
    VANITY_ID: ``,
    IS_CREATOR_HOME: !1,
    IS_CURATOR: !1,
    IS_OGG: !1,
    CAN_UPLOAD_IMAGES: !1,
    IS_VALVE_GROUP: !1,
    IS_ALLOWED_SC: !1,
  };
function _(_, _) {
  return (
    (_ = Math.ceil(_)),
    (_ = Math.floor(_)),
    Math.floor(Math.random() * (_ - _ + 1)) + _
  );
}
function _(_, _, _) {
  return _ == null || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
}
function _(_, _, _, _, _) {
  return _ + ((_ - _) * (_ - _)) / (_ - _);
}
function _(_, _, _, _, _) {
  return _(_ + ((_ - _) * (_ - _)) / (_ - _), Math.min(_, _), Math.max(_, _));
}
function _(_) {
  if (!_) return !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.charCodeAt(_);
    if (_ < 48 || _ > 57) return !1;
  }
  return !0;
}
function _(_, _, _, _) {
  let _ = _ / _,
    _ = _ / _,
    _ = Math.min(_, _);
  return [_ * _, _ * _];
}
function _(_) {
  if (!_() || !window.document.cookie) return null;
  let _ = document.cookie.match(`(^|; )` + _ + `=([^;]*)`);
  return _ && _[2] ? decodeURIComponent(_[2]) : null;
}
function _(_, _, _, _) {
  if (!_()) return;
  _ ||= `/`;
  let _ = ``;
  if (_ !== void 0 && _) {
    let _ = new Date();
    _.setTime(_.getTime() + 1e3 * 60 * 60 * 24 * _),
      (_ = `; expires=` + _.toUTCString());
  }
  document.cookie =
    encodeURIComponent(_) + `=` + encodeURIComponent(_) + _ + `;path=` + _;
}
function _() {
  return !!window.document;
}
var _ = `webui_config`;
function _(_, _ = _) {
  return _(_, _, !0);
}
function _(_, _ = _) {
  return _(_, _, !1);
}
function _(_, _ = _, _) {
  let _;
  if (((_ = typeof _ == `string` ? document.getElementById(_) : _), _))
    try {
      return _.hasAttribute(`data-` + _)
        ? JSON.parse(_.getAttribute(`data-` + _))
        : null;
    } catch (_) {
      console.error(
        `Failed to parse config for ` +
          _.steamid +
          ` (` +
          window.location.href +
          `)`,
        _,
      );
    }
  else _ && console.error(`Missing config element #`, _);
}
var _;
function _() {
  if (!_()) return (_ ||= _()), _;
  let _ = _(`sessionid`);
  return (_ ||= _()), _;
}
function _() {
  let _ = ``;
  for (let _ = 0; _ < 24; _++) _ += _(0, 35).toString(36);
  return _;
}
function _() {
  let _ = _();
  return _(`sessionid`, _, 0), _;
}
var _ = new Set();
function _() {
  return new Promise((_) => {
    _.add(_);
  });
}
var _ = `presentation_mode`;
function _() {
  let _ = null;
  return _() && (_ = _(_)), !!(_ && Number.parseInt(_) === 1);
}
function _(_) {
  return _;
}
var _ = window.Config ?? _,
  _ = window.UserConfig ?? _,
  _ = window.Config ? () => Promise.resolve() : _;
window.Config && Object.assign(_, window.Config),
  window.UserConfig && Object.assign(_, window.UserConfig);
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
