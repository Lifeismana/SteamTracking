var _ = _(_(), 1),
  _ = _(),
  _ = (0, _.createContext)([]);
function _(_) {
  let [_, _] = (0, _.useState)([_()]);
  return (
    window.SSR &&
      (window.SSR.saveMetricsMetadata = (_) => {
        _((_) => [..._, _]);
      }),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.use)(_);
}
export { _, _ };
