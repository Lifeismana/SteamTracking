function _(_, _) {
  let _ = _.lastIndexOf(`.`);
  if (_ == -1) return !1;
  let _ = _.substring(0, _),
    _ = _.substring(_ + 1),
    _ = _(_, _);
  return _ !== null && typeof _[_] == `function`;
}
function _(_) {
  return _(window, _);
}
function _(_, _) {
  let _ = (_) => _ && typeof _ == `object`,
    _ = _?.SteamClient;
  for (let _ of _.split(`.`)) {
    if (!_(_) || !(_ in _)) return null;
    _ = _[_];
  }
  return _(_) ? _ : null;
}
export { _, _ };
