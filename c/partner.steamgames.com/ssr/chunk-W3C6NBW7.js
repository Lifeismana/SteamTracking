var _ = {};
_(_, {
  Color: () => _,
  HitSlop: () => _,
  "IconSize-1": () => _,
  "IconSize-2": () => _,
  "IconSize-3": () => _,
  "IconSize-4": () => _,
  "IconSize-5": () => _,
  "IconSize-6": () => _,
  "IconSize-7": () => _,
  "IconSize-8": () => _,
  "IconSize-9": () => _,
  IconSizeDefault: () => _,
  default: () => _,
});
var _ = "_9zrcVXFMEbM-";
var _ = "WFJk5tr0xtQ-";
var _ = "qImpStzZK8M-";
var _ = "yP22qcC63pM-";
var _ = "RPgYv9kTJyA-";
var _ = "eBuEavARxmo-";
var _ = "fZtylfshoOM-";
var _ = "ZK8m1W7k6-g-";
var _ = "e3e4RMfxvn4-";
var _ = "kbZNX2QJaPk-";
var _ = "_-0E1a53728o-";
var _ = "dFoiuQNGt-c-";
var _ = {
  Color: "_9zrcVXFMEbM-",
  IconSizeDefault: "WFJk5tr0xtQ-",
  "IconSize-1": "qImpStzZK8M-",
  "IconSize-2": "yP22qcC63pM-",
  "IconSize-3": "RPgYv9kTJyA-",
  "IconSize-4": "eBuEavARxmo-",
  "IconSize-5": "fZtylfshoOM-",
  "IconSize-6": "ZK8m1W7k6-g-",
  "IconSize-7": "e3e4RMfxvn4-",
  "IconSize-8": "kbZNX2QJaPk-",
  "IconSize-9": "_-0E1a53728o-",
  HitSlop: "dFoiuQNGt-c-",
};
var _ = _(_(), 1);
function _(_) {
  let { viewBoxSize: _ = 20, ..._ } = _,
    _ = _.size ? void 0 : _;
  return (0, _.jsx)("svg", {
    viewBox: `0 0 ${_} ${_}`,
    ..._(
      {
        className: _,
        ..._,
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`IconSize-${_}`],
  },
  {
    prop: "color",
    className: _,
    cssProperty: (_) => ["--icon-color", _(_)],
  },
  {
    prop: "hitSlop",
    className: _,
    cssProperty: (_) => ["--hit-slop-custom", typeof _ == "string" ? _ : ""],
  },
  _.find(({ prop: _ }) => _ === "cursor"),
];
var _ = _(_(), 1);
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 12,
    children: (0, _.jsx)("path", {
      _: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
      fill: "currentColor",
    }),
  });
}
var _ = _(_(), 1);
var _ = {};
_(_, {
  Clickable: () => _,
  ControlBox: () => _,
  Disabled: () => _,
  Focusable: () => _,
  Hoverable: () => _,
  "Size-1": () => _,
  "Size-2": () => _,
  "Size-3": () => _,
  "Variant-default": () => _,
  "Variant-highlight": () => _,
  "Variant-inset": () => _,
  "Variant-inset-focus": () => _,
  "Variant-underline": () => _,
  default: () => _,
});
var _ = "MfFMsIuDiWQ-";
var _ = "_7wsyxeN-f2g-";
var _ = "_6FH0jMPoxT0-";
var _ = "OyNo1p0TpyU-";
var _ = "eWU2vcvOOE0-";
var _ = "W338F6BdZXE-";
var _ = "ZW65UCg4kxs-";
var _ = "bG2NtC5tCTc-";
var _ = "eVF7fbj4R8w-";
var _ = "H69XtSaDens-";
var _ = "jObSrBSaPBM-";
var _ = "LUF0vPBWoU8-";
var _ = "tcHFAQleIx8-";
var _ = {
  "Variant-default": "MfFMsIuDiWQ-",
  "Size-3": "_7wsyxeN-f2g-",
  "Variant-inset": "_6FH0jMPoxT0-",
  "Variant-inset-focus": "OyNo1p0TpyU-",
  Focusable: "eWU2vcvOOE0-",
  "Variant-underline": "W338F6BdZXE-",
  "Variant-highlight": "ZW65UCg4kxs-",
  ControlBox: "bG2NtC5tCTc-",
  Hoverable: "eVF7fbj4R8w-",
  Clickable: "H69XtSaDens-",
  Disabled: "jObSrBSaPBM-",
  "Size-1": "LUF0vPBWoU8-",
  "Size-2": "tcHFAQleIx8-",
};
var _ = _(_(), 1);
function _(_) {
  let { children: _, beforeContent: _, afterContent: _, hasValue: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsxs)(_, {
    ..._,
    align: "center",
    "data-has-value": !!_,
    children: [
      _ &&
        (0, _.jsx)(_, {
          paddingRight: "2",
          children: _,
        }),
      (0, _.jsx)(_, {
        flexGrow: "1",
        minWidth: "0",
        children: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          paddingLeft: "2",
          children: _,
        }),
    ],
  });
}
function _(_) {
  let {
    variant: _ = "default",
    size: _ = "2",
    radius: _,
    focusable: _ = !0,
    hoverable: _ = !0,
    clickable: _ = !0,
    disabled: _,
    className: _,
    ..._
  } = _;
  return _(
    {
      ..._,
      radius: _ === "underline" ? "none" : _,
      className: (0, _.default)(
        _,
        _ && !_ && _,
        _ && !_ && _,
        _ && !_ && _,
        _ && _,
        _[`Variant-${_}`],
        _[`Size-${_}`],
        _,
      ),
    },
    _,
  );
}
export { _, _, _, _ };
