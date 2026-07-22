var _ = _(_(), 1),
  _ = `BvATwcUCrt0-`,
  _ = _(),
  _ = (0, _.createContext)({}),
  _ = (0, _.createContext)(() => {});
function _(_) {
  let [_, _] = (0, _.useState)({});
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = _(_(), 1),
  _ = _.memo(function (_) {
    let {
        defaultTextSize: _,
        accentColor: _ = `blue`,
        dullColor: _ = `greyneutral`,
        bodyTextColor: _ = `text-light`,
        breakpoints: _,
        variants: _,
        children: _,
        zoo: _,
      } = _,
      _;
    return (
      _ &&
        (_ = {
          "--default-font-size": `var(--text-size-${_})`,
          "--default-line-height": `var(--line-height-${_})`,
          "--default-letter-spacing": `var(--letter-spacing-${_})`,
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          breakpoints: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(`div`, {
              className: (0, _.default)(_, `noOpinionatedGlobalStyles`),
              style: _,
              children: (0, _.jsxs)(_, {
                accentColor: _,
                dullColor: _,
                bodyTextColor: _,
                variants: _,
                children: [_, !1],
              }),
            }),
          }),
        }),
      })
    );
  });
function _(_) {
  let { children: _ } = _,
    { formFactorOverride: _ } = _();
  return (0, _.jsx)(_, {
    formFactor: _,
    children: _,
  });
}
export { _ };
