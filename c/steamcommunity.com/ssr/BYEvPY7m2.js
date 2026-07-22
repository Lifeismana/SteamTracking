_();
var _ = _();
function _(_) {
  let {
      accentColor: _,
      dullColor: _,
      bodyTextColor: _,
      children: _,
      breakpoints: _,
      variants: _,
    } = _,
    _ = {
      display: `contents`,
    },
    _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `accent`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `dull`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, _);
  let _ = (0, _.jsx)(_, {
    variants: _,
    children: (0, _.jsx)(`div`, {
      "data-accent-color": _,
      "data-dull-color": _,
      "data-body-text-color": _,
      style: _,
      children: (0, _.jsx)(`div`, {
        style: {
          display: `contents`,
          color: `var(--color-text-body-body)`,
        },
        children: _,
      }),
    }),
  });
  return _
    ? (0, _.jsx)(_, {
        breakpoints: _,
        children: _,
      })
    : _;
}
function _(_, _, _) {
  for (let [_, _] of Object.entries(_)) _[`--color-${_}-${_}`] = _;
}
function _(_, _) {
  for (let [_, _] of Object.entries(_)) _[`--color-text-body-${_}`] = _;
}
export { _ };
