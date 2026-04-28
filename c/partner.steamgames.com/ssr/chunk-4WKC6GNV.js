var _ = _(_(), 1);
var _ = {};
_(_, {
  LineClamp: () => _,
  Text: () => _,
  TextAlign: () => _,
  "TextSize-1": () => _,
  "TextSize-2": () => _,
  "TextSize-3": () => _,
  "TextSize-4": () => _,
  "TextSize-5": () => _,
  "TextSize-6": () => _,
  "TextSize-7": () => _,
  "TextSize-8": () => _,
  "TextSize-9": () => _,
  TextWeight: () => _,
  Truncate: () => _,
  WhiteSpace: () => _,
  default: () => _,
});
var _ = "NI9oaXH36YQ-";
var _ = "KX9eQJSfx5A-";
var _ = "vJx0c3-pUA0-";
var _ = "LB7oRJG7djU-";
var _ = "QbHOJdWEOFk-";
var _ = "U1qtAHnPvEo-";
var _ = "jU8-REjbMVs-";
var _ = "dloY1cYx8hc-";
var _ = "Vqm-cFLf-nw-";
var _ = "WyO2MofYaqg-";
var _ = "cAwo746HChY-";
var _ = "EZ-ocZV850k-";
var _ = "ifBXpA-M7mM-";
var _ = "eHC015acU04-";
var _ = "nJuwSdA6pwU-";
var _ = {
  Text: "NI9oaXH36YQ-",
  Truncate: "KX9eQJSfx5A-",
  "TextSize-1": "vJx0c3-pUA0-",
  "TextSize-2": "LB7oRJG7djU-",
  "TextSize-3": "QbHOJdWEOFk-",
  "TextSize-4": "U1qtAHnPvEo-",
  "TextSize-5": "jU8-REjbMVs-",
  "TextSize-6": "dloY1cYx8hc-",
  "TextSize-7": "Vqm-cFLf-nw-",
  "TextSize-8": "WyO2MofYaqg-",
  "TextSize-9": "cAwo746HChY-",
  TextWeight: "EZ-ocZV850k-",
  TextAlign: "ifBXpA-M7mM-",
  LineClamp: "eHC015acU04-",
  WhiteSpace: "nJuwSdA6pwU-",
};
var _ = _(_(), 1);
function _(_) {
  let { _: _ = "span", ref: _, className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ref: _,
    ..._(
      {
        ..._,
        className: (0, _.default)(_, _),
      },
      _,
    ),
  });
}
var _ = [
    {
      prop: "weight",
      responsive: !0,
      className: _,
      cssProperty: (_) => ["--text-weight", `var(--font-weight-${_})`],
    },
    {
      prop: "align",
      responsive: !0,
      className: _,
      cssProperty: "--text-align",
    },
    {
      prop: "color",
      cssProperty: (_, _) => ["--text-color", _(_, _.contrast ?? "body")],
    },
    {
      prop: "contrast",
      cssProperty: (_, _) => ["--text-color", _(_.color ?? "text-body", _)],
    },
    {
      prop: "truncate",
      className: _,
    },
    {
      prop: "lineClamp",
      responsive: !0,
      className: _,
      cssProperty: "--line-clamp",
    },
    {
      prop: "whiteSpace",
      className: _,
      cssProperty: "--white-space",
    },
  ],
  _ = [
    ..._,
    ..._,
    {
      prop: "size",
      responsive: !0,
      className: (_) => _[`TextSize-${_}`],
    },
  ];
export { _, _ };
