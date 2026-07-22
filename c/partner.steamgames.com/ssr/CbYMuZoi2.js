function _(_, _) {
  return _ ? typeof _.SteamClient == `object` && _ in _.SteamClient : !1;
}
function _(_, _) {
  if (!_) return !1;
  let [_, _] = _.split(`.`, 2);
  return _ && _ && _(_, _) && _ in _.SteamClient[_];
}
function _(_) {
  return _(window, _);
}
export { _, _ };
