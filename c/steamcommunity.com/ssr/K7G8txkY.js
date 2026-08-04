var _ = _(_(), 1),
  _ = _(),
  _ = 400;
function _(_) {
  let { onTrigger: _ } = _,
    [_] = (0, _.useState)({
      threshold: 1,
      rootMargin: `0px 0px ${_}px 0px`,
    });
  return (0, _.jsx)(`div`, {
    ref: _(
      (0, _.useCallback)(
        (_) => {
          _.isIntersecting && _();
        },
        [_],
      ),
      _,
    ),
  });
}
export { _ };
