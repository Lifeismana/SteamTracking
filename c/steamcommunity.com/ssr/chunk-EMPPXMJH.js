var _ = _(_(), 1);
var _ = {
  ModalConfirmDialog: "qwA5BLuU6jE-",
  Header: "e1fOZZF2Hp0-",
  Buttons: "-ggTgNpcvJE-",
};
var _ = _(_(), 1);
function _(_) {
  let {
    strTitle: _,
    strDescription: _,
    className: _,
    children: _,
    navID: _,
    ..._
  } = _;
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _.ModalConfirmDialog),
    onClose: _.onClose,
    navID: _,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          className: _.Header,
          children: [
            (0, _.jsx)("h2", {
              children: _,
            }),
            (0, _.jsx)("button", {
              onClick: _.onClose,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          className: _.Description,
          children: (0, _.jsx)("div", {
            children: _,
          }),
        }),
      _,
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { strOKLabel: _, strCancelLabel: _, onOK: _, onClose: _ } = _;
  return (0, _.jsxs)(_, {
    className: _.Buttons,
    children: [
      !!_ &&
        (0, _.jsx)(_, {
          onClick: _ ?? _,
          children: _,
        }),
      !!_ &&
        (0, _.jsx)(_, {
          onClick: _,
          children: _,
        }),
    ],
  });
}
export { _ };
