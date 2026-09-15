var _ = `unUserdataVersion`;
function _() {
  return Number.parseInt(window.localStorage.getItem(_) || `0`);
}
function _(_, _, _) {
  let _ = _(),
    _ = `${_}dynamicstore/userdata/?id=${_}&cc=${_}&origin=${self.origin}`;
  return _ && (_ += `&v=${_}`), _;
}
function _() {
  window.localStorage.setItem(
    _,
    (Number.parseInt(window.localStorage.getItem(_) || `0`) + 1).toString(),
  );
}
function _(_) {
  return _(
    _.coming_soon_display,
    _.steam_release_date,
    _.custom_release_date_message,
  );
}
function _(_, _, _, _) {
  switch (_) {
    case `date_full`:
      return _(_);
    case `date_month`:
      return _(new Date(_ * 1e3));
    case `date_quarter`:
      return _(new Date(_ * 1e3), _);
    case `date_year`:
      return _(new Date(_ * 1e3));
    case `text_comingsoon`:
      return _ || _(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return _ || _(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
export { _, _, _ };
