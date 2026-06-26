var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = (0, _.createContext)({
    instances: {},
    factories: {},
  });
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = typeof _ == "string" ? _ : _(..._),
    _ = _;
  for (; _; ) {
    if (_ in _.instances) return _.instances[_];
    if (_ in _.factories) break;
    _ = _.parent;
  }
  let _ = (_?.factories[_] ?? _)();
  return ((_ ?? _).instances[_] = _), _;
}
export { _ };
