function _(_, ..._) {
  let _ = _.match(/(?:^|\/)(:[^/]+)/g);
  if (!_) return _;
  let _ = _;
  return (
    _.forEach((_, _) => {
      let _ = _[_];
      _.startsWith("/") && (_ = "/" + _), (_ = _.replace(_, _));
    }),
    _
  );
}
function _() {
  async function _(_, _, ..._) {
    return _(_, _, ..._);
  }
  async function _(_, _, ..._) {
    return _(_, _, ..._);
  }
  return {
    BuildRouteURL: _,
    FetchQueryAction: _,
    CallMutationAction: _,
    NavigateToRoute: _,
    RouteURL_t: "",
  };
}
var {
  BuildRouteURL: _,
  CallMutationAction: _,
  FetchQueryAction: _,
  NavigateToRoute: _,
  RouteURL_t: _,
} = _();
export { _, _ };
