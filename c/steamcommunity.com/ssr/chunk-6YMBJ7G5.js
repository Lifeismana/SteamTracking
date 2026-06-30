var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let {
      children: _,
      hoverContent: _,
      nDelayShowMS: _,
      bTooltipMode: _,
      popoverProps: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (_) => {
      (_() && !_) || _(_);
    },
    _ = (_) => {
      let _ = {
        ..._,
        delay: {
          open: _,
          close: 0,
        },
      };
      return (
        _ &&
          (_ = {
            ..._,
            handleClose: null,
          }),
        _
      );
    };
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      hover: _,
    },
    ..._,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _,
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    ],
  });
}
export { _ };
