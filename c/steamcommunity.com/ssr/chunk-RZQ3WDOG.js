var _ = _(_(), 1);
function _(_) {
  let _ = _(_.args) ?? _(_.args, "href");
  return !_ || !_.match(/^https?:\/\//)
    ? _.children
    : (_(_) && (_ = _(_)),
      (0, _.jsx)(_, {
        target: "_blank",
        href: _,
        underline: "auto",
        contrast: "title",
        children: _.children,
      }));
}
var _ = _(_(), 1),
  _ = {
    list: {
      Constructor: _,
      skipInternalNewline: !0,
    },
    olist: {
      Constructor: _,
      skipInternalNewline: !0,
    },
    "*": {
      Constructor: _,
      autocloses: !0,
    },
  };
function _(_) {
  return (0, _.jsx)("ul", {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)("ol", {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)("li", {
    children: _.children,
  });
}
export { _, _ };
