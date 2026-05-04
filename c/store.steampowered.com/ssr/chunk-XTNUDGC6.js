var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.createContext({
    ePreferredHWCompat: 0,
  });
function _(_) {
  let { ePreferredHWCompat: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ePreferredHWCompat: _,
    },
    children: _.children,
  });
}
function _() {
  return _.useContext(_).ePreferredHWCompat;
}
var _ = _(_(), 1);
function _(_, _) {
  let [_, _] = (0, _.useState)(_),
    _ = _(_, {
      nTimeoutMS: _,
      nTimeoutExtensionMS: _,
      nMaxTimeoutExtensions: 1 / 0,
    });
  return [_, _, _];
}
function _(_, _ = {}) {
  let {
      nTimeoutMS: _ = 350,
      nTimeoutExtensionMS: _ = 125,
      nMaxTimeoutExtensions: _ = 3,
    } = _,
    [_, _] = _.default.useState(_),
    _ = _.default.useRef(void 0);
  return (
    _.default.useEffect(() => {
      let _ = performance.now();
      _.current
        ? _ - _.current.tsLastChange < _ * _ &&
          (_.current.tsScheduledTimeout = Math.max(
            performance.now() + _,
            _.current.tsScheduledTimeout,
          ))
        : (_.current = {
            tsLastChange: _,
            tsScheduledTimeout: performance.now() + _,
          });
      let _ = _.current.tsScheduledTimeout - performance.now(),
        _ = window.setTimeout(() => {
          (_.current = void 0), _(_);
        }, _);
      return () => window.clearTimeout(_);
    }, [_, _, _, _]),
    _
  );
}
var _ = _(_(), 1);
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
export { _, _, _, _, _ };
