var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _();
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 12,
    children: (0, _.jsx)(`path`, {
      _: `M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { extracted: _, remaining: _ } = _(_),
    {
      value: _,
      onTextChange: _,
      onTextClear: _,
      clearable: _,
      onChange: _,
      radius: _,
      variant: _,
      size: _,
      beforeContent: _,
      afterContent: _,
      inputRef: _,
      ref: _,
      disabled: _,
      gamepadFocusable: _ = !0,
      ..._
    } = _,
    _ = _(),
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ =
      _ && _
        ? (0, _.jsx)(_, {
            onClick: () => {
              _(``), _ && _();
            },
            cursor: `pointer`,
            hitSlop: !0,
          })
        : _,
    _ = _(`TextInput`, _),
    _ = {
      ..._,
      variant: _,
      size: _,
      radius: _,
      beforeContent: _,
      afterContent: _,
      ref: _,
      disabled: _,
    },
    _ = (0, _.useRef)(null),
    _ = (_) => {
      _.current && _.target !== _.current && _.current.focus();
    },
    _ = _ && _ ? _ : `input`;
  return (0, _.jsx)(_, {
    cursor: `text`,
    ..._,
    onClick: _,
    children: (0, _.jsx)(_, {
      ref: _(_, _),
      type: `text`,
      "aria-disabled": _,
      readOnly: _,
      className: (0, _.default)(_(), _()),
      value: _ || ``,
      onChange: _,
      ..._,
    }),
  });
}
export { _, _ };
