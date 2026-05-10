var _ = _(_(), 1);
var _ = {
  SimpleModalDialog: "IB4xxefNPtw-",
  SimpleModalDialogHeader: "VDx4AGCUo-c-",
  SimpleModalDialogTitle: "IREsxRBF3-8-",
  XButton: "_-7dzbVH142U-",
};
var _ = _(_(), 1);
function _(_) {
  let {
    onClose: _,
    className: _,
    navID: _,
    children: _,
    strTitle: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: _ ?? "SimpleModalDialog",
    ..._,
    children: (0, _.jsxs)("div", {
      className: (0, _.default)(_, _.SimpleModalDialog),
      children: [
        " ",
        (0, _.jsxs)(_, {
          className: _.SimpleModalDialogHeader,
          children: [
            _ &&
              (0, _.jsx)("h2", {
                className: _.SimpleModalDialogTitle,
                children: _,
              }),
            (0, _.jsx)("button", {
              onClick: (_) => (_("xclick"), _.preventDefault(), !1),
              className: _.XButton,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        _,
      ],
    }),
  });
}
export { _ };
