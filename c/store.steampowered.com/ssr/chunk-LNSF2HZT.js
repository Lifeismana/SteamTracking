var _ = _(_(), 1);
function _(_) {
  let { data: _ } = _(_),
    _ = _();
  if (!_) return;
  let _ = [...(_.highlights || []), ...(_.other_trailers || [])];
  return _ ? _.filter((_) => !!_.all_ages) : _;
}
function _(_) {
  let _ = _(_);
  if (!(!_ || _.length == 0)) return _[0];
}
function _(_) {
  return `${_.STORE_ITEM_BASE_URL}${_.trailer_url_format.replace("${FILENAME}", _.screenshot_full ?? _.screenshot_medium ?? "")}`;
}
function _(_, _) {
  return `${_.VIDEO_CDN_URL}store_trailers/${_.trailer_url_format.replace("${FILENAME}", _)}`;
}
function _(_, _) {
  return `${_.VIDEO_CDN_URL}store_trailers/${_}`;
}
function _(_) {
  let _ = [];
  _.adaptive_trailers &&
    (_ = _.adaptive_trailers
      .filter(
        (_) =>
          (_.encoding == "dash_h264" || _.encoding == "dash_av1") && _.cdn_path,
      )
      .map((_) => _(_, _.cdn_path || "")));
  let _ = [];
  return (
    _.adaptive_trailers &&
      (_ = _.adaptive_trailers
        .filter((_) => _.encoding == "hls_h264" && _.cdn_path)
        .map((_) => _(_, _.cdn_path || ""))),
    {
      rgDashTrailers: _,
      rgHlsTrailers: _,
    }
  );
}
export { _, _, _, _, _ };
