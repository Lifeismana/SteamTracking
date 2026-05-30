var _ = _(_());
function _(_, _) {
  return _(
    (_) => {
      if (!_) return;
      let _ = _(_.ownerDocument.defaultView, (_) => {
        _(_[0]);
      });
      return _.observe(_), () => _.unobserve(_);
    },
    [_, _],
  );
}
function _(_) {
  let _ = _.useCallback(
    (_, _) =>
      _.ResizeObserver
        ? new _.ResizeObserver(_)
        : (_(!1, "ResizeObserver is not available"),
          {
            observe: () => {},
            unobserve: () => {},
            disconnect: () => {},
          }),
    [],
  );
  return _(_, _);
}
function _(_, _) {
  let _ = _.useCallback((_, _) => new _.IntersectionObserver(_, _), [_]);
  return _(_, _);
}
function _(_, ..._) {
  let _ = _.ownerDocument.defaultView,
    _ = new _.IntersectionObserver(..._);
  return _.observe(_), _;
}
function _(_) {
  if (_ === void 0) return console.error("Cannot GetHostname on empty URL"), "";
  let _ = new RegExp(
      "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
      "im",
    ),
    _ = _.match(_);
  return _ && _.length > 5 ? _[6].toString() : _;
}
function _(_) {
  if (!_) return !0;
  let _ = _(_).toLocaleLowerCase();
  return (
    [
      _(_.COMMUNITY_CDN_URL).toLocaleLowerCase(),
      _(_.MEDIA_CDN_URL).toLocaleLowerCase(),
      _(_.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
      _(_.STORE_CDN_URL).toLocaleLowerCase(),
      _(_.BASE_URL_SHARED_CDN).toLocaleLowerCase(),
      _(_.CLAN_CDN_ASSET_URL).toLocaleLowerCase(),
      _(_.VIDEO_CDN_URL).toLocaleLowerCase(),
      "support.steampowered.com",
      "steamcdn-a.akamaihd.net",
      "cdn.cloudflare.steamstatic.com",
      "cdn.fastly.steamstatic.com",
      "cdn.akamai.steamstatic.com",
    ].indexOf(_) >= 0
  );
}
function _(_, _) {
  try {
    let _ = new URL(_),
      _ = new URL(_);
    return _.href.replace(/\/$/, "") + _.pathname + _.search + _.hash;
  } catch {
    return "";
  }
}
function _(_, _) {
  return (
    _.IN_STEAMUI &&
      !_.startsWith("steam://") &&
      (_
        ? (_ = `steam://openurl_external/${_}`)
        : (_ = `steam://openurl/${_}`)),
    _
  );
}
export { _, _, _, _, _, _, _ };
