function _(_, _, ..._) {
  console.assert
    ? _.length == 0
      ? console.assert(!!_, _)
      : console.assert(!!_, _, ..._)
    : _ || console.warn(_, ..._);
}
function _(_, _, ..._) {
  if (
    (console.assert
      ? _.length == 0
        ? console.assert(!!_, _)
        : console.assert(!!_, _, ..._)
      : _ || console.warn(_, ..._),
    !_)
  )
    throw _;
}
function _(_, _, ..._) {
  _(!1, _, ..._);
}
var _ = (function () {
    let _ = typeof document < `u` && document.createElement(`link`).relList;
    return _ && _.supports && _.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  _ = function (_, _) {
    return new URL(_, _).href;
  },
  _ = {},
  _ = function (_, _, _) {
    let _ = Promise.resolve();
    if (_ && _.length > 0) {
      let _ = document.getElementsByTagName(`link`),
        _ = document.querySelector(`meta[property=csp-nonce]`),
        _ = _?.nonce || _?.getAttribute(`nonce`);
      function _(_) {
        return Promise.all(
          _.map((_) =>
            Promise.resolve(_).then(
              (_) => ({
                status: `fulfilled`,
                value: _,
              }),
              (_) => ({
                status: `rejected`,
                reason: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        return import.meta.resolve
          ? import.meta.resolve(_)
          : new URL(_, import.meta.url).href;
      }
      _ = _(
        _.map((_) => {
          if (((_ = _(_, _)), (_ = _(_)), _ in _)) return;
          _[_] = !0;
          let _ = _.endsWith(`.css`);
          for (let _ = _.length - 1; _ >= 0; _--) {
            let _ = _[_];
            if (_.href === _ && (!_ || _.rel === `stylesheet`)) return;
          }
          let _ = document.createElement(`link`);
          if (
            ((_.rel = _ ? `stylesheet` : _),
            _ || (_._ = `script`),
            (_.crossOrigin = ``),
            (_.href = _),
            _ && _.setAttribute(`nonce`, _),
            document.head.appendChild(_),
            _)
          )
            return new Promise((_, _) => {
              _.addEventListener(`load`, _),
                _.addEventListener(`error`, () =>
                  _(Error(`Unable to preload CSS for ${_}`)),
                );
            });
        }),
      );
    }
    function _(_) {
      let _ = new Event(`vite:preloadError`, {
        cancelable: !0,
      });
      if (((_.payload = _), window.dispatchEvent(_), !_.defaultPrevented))
        throw _;
    }
    return _.then((_) => {
      for (let _ of _ || []) _.status === `rejected` && _(_.reason);
      return _().catch(_);
    });
  },
  _ = (function (_) {
    return (
      (_[(_.k_ESteamRealmUnknown = 0)] = `k_ESteamRealmUnknown`),
      (_[(_.k_ESteamRealmGlobal = 1)] = `k_ESteamRealmGlobal`),
      (_[(_.k_ESteamRealmChina = 2)] = `k_ESteamRealmChina`),
      _
    );
  })({});
function _(_) {
  return _ === _.k_ESteamRealmChina;
}
var _ = _(_()),
  _ = !1,
  _ = !1,
  _ = !1,
  _ = !1;
function _() {
  return _ || _(), _;
}
function _() {
  return _ || _(), _;
}
function _() {
  return _() || _();
}
function _() {
  if (!navigator?.userAgent) return;
  let _ = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (_ && _.length == 2) return _[1];
}
function _(_, _) {
  return !!(
    (window &&
      window.location &&
      window.location.href &&
      window.location.href.match(`[?&]` + _ + `=`)) ||
    (typeof navigator < `u` &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf(_.toLowerCase()) != -1)
  );
}
function _() {
  let _ = navigator,
    _ = _ && _.maxTouchPoints && _.maxTouchPoints > 1;
  (_ = _(`Valve Steam Tenfoot`, `force_tenfoot_client_view`)),
    _(`Valve Steam GameOverlay`, `force_overlay_view`),
    _ || _(`Valve Steam Client`, `force_client_view`),
    _(`macintosh`, `force_mac_view`),
    (_ =
      _(`iphone`, `force_ios_view`) ||
      _(`ipad`, `force_ios_view`) ||
      _(`ipod`, `force_ios_view`) ||
      (_(`macintosh`, `force_ios_view`) && _)),
    (_ = _(`android`, `force_android_view`)),
    (_ = !0);
}
var _ = _.createContext({}),
  _ = (_) => {
    let _ = _.useContext(_);
    return (
      _(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        `Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.`,
      ),
      _
    );
  };
function _(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = _({
      bSuppressAssert: !0,
    }),
    _ = _()?.startsWith(`Gamepad VR`) ?? !1,
    _ = _.useMemo(
      () => ({
        IN_GAMEPADUI: _ ?? _?.IN_GAMEPADUI ?? _()?.startsWith(`Gamepad`) ?? !1,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_) {
  return _(_)?.IN_GAMEPADUI;
}
function _(_) {
  return _(_)?.IN_DESKTOPUI;
}
function _(_) {
  return _(_)?.IN_VR;
}
function _() {
  return _.EREALM === _.k_ESteamRealmChina;
}
function _() {
  return _.PLATFORM == `windows`;
}
function _() {
  return _.PLATFORM == `macos`;
}
function _() {
  return _.PLATFORM == `linux`;
}
function _() {
  return _.IN_CHROMEOS;
}
function _() {
  return _.IS_STEAMOS;
}
function _(_, _) {
  return _.length != 0 && _.startsWith(_);
}
var _ = `unknown`;
function _() {
  if (!window || !window.location || !window.location.href)
    return console.warn(`Unable to determine base url!`), _;
  let _ = window.location.href;
  return _(_, _.STORE_BASE_URL)
    ? _.STORE_BASE_URL
    : _(_, _.COMMUNITY_BASE_URL)
      ? _.COMMUNITY_BASE_URL
      : _(_, _.CHAT_BASE_URL)
        ? _.CHAT_BASE_URL
        : _(_, _.PARTNER_BASE_URL)
          ? _.PARTNER_BASE_URL
          : _(_, _.HELP_BASE_URL)
            ? _.HELP_BASE_URL
            : _(_, _.STEAMTV_BASE_URL)
              ? _.STEAMTV_BASE_URL
              : _(_, _.STATS_BASE_URL)
                ? _.STATS_BASE_URL
                : _(_, _.INTERNAL_STATS_BASE_URL)
                  ? _.INTERNAL_STATS_BASE_URL
                  : _(_, _.STORE_CHECKOUT_BASE_URL)
                    ? _.STORE_CHECKOUT_BASE_URL
                    : _(_, `https://steamloopback.host`)
                      ? `https://steamloopback.host`
                      : ``;
}
function _() {
  return `community`;
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
