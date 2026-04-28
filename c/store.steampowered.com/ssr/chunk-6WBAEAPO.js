var _ = _(_());
var _ = !1,
  _ = !1,
  _ = !1,
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
      window.location.href.match("[?&]" + _ + "=")) ||
    (typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf(_.toLowerCase()) != -1)
  );
}
function _() {
  let _ = navigator,
    _ = _ && _.maxTouchPoints && _.maxTouchPoints > 1;
  (_ = _("Valve Steam Tenfoot", "force_tenfoot_client_view")),
    (_ = _("Valve Steam GameOverlay", "force_overlay_view")),
    (_ = _ || _("Valve Steam Client", "force_client_view")),
    (_ = _("macintosh", "force_mac_view")),
    (_ =
      _("iphone", "force_ios_view") ||
      _("ipad", "force_ios_view") ||
      _("ipod", "force_ios_view") ||
      (_("macintosh", "force_ios_view") && _)),
    (_ = _("android", "force_android_view")),
    (_ = !0);
}
var _ = _.default.createContext({}),
  _ = (_) => {
    let _ = _.default.useContext(_);
    return (
      _(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        "Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.",
      ),
      _
    );
  };
function _(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = _({
      bSuppressAssert: !0,
    }),
    _ = _()?.startsWith("Gamepad VR"),
    _ = _.default.useMemo(
      () => ({
        IN_GAMEPADUI: _ ?? _?.IN_GAMEPADUI ?? _.IN_GAMEPADUI,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return _.default.createElement(
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
  return _(_)?.IN_VR;
}
function _() {
  return _.EREALM === 2;
}
function _() {
  return _.PLATFORM == "windows";
}
function _() {
  return _.PLATFORM == "macos";
}
function _() {
  return _.PLATFORM == "linux";
}
function _() {
  return _.IN_CHROMEOS;
}
function _() {
  return _.ON_STEAMOS;
}
function _(_, _) {
  return _.length != 0 && _.startsWith(_);
}
var _ = "unknown";
function _() {
  if (!window || !window.location || !window.location.href)
    return console.warn("Unable to determine base url!"), _;
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
                    : _(_, "https://steamloopback.host")
                      ? "https://steamloopback.host"
                      : "";
}
function _() {
  return "store";
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
