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
  return _(
    _,
    _.useCallback(
      (_, _) =>
        _.ResizeObserver
          ? new _.ResizeObserver(_)
          : (_(!1, `ResizeObserver is not available`),
            {
              observe: () => {},
              unobserve: () => {},
              disconnect: () => {},
            }),
      [],
    ),
  );
}
function _(_, _) {
  return _(
    _,
    _.useCallback((_, _) => new _.IntersectionObserver(_, _), [_]),
  );
}
function _(_, ..._) {
  let _ = new _.ownerDocument.defaultView.ResizeObserver(..._);
  return _.observe(_), _;
}
function _(_, ..._) {
  let _ = new _.ownerDocument.defaultView.IntersectionObserver(..._);
  return _.observe(_), _;
}
function _() {
  let [_, _] = (0, _.useState)(!1),
    _ = _((0, _.useCallback)((_) => _(_.isIntersecting), [])),
    { style: _, ref: _ } = _(),
    _ = _(_, _),
    _ = !_ || _.visibility !== `hidden`;
  return {
    bVisible: _ && _,
    ref: _,
  };
}
function _() {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      _ && _(window.getComputedStyle(_));
    }, [_]),
    {
      style: _,
      ref: _,
    }
  );
}
export { _, _, _, _, _ };
