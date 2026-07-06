var _ = _(_());
var _ = _(_());
var _ = (_) =>
    (0, _.jsx)(_.Fragment, {
      children: _.condition ? _.wrap(_.children) : _.children,
    }),
  _ = class {
    m_Promise;
    m_Value = void 0;
    constructor(_) {
      _(this), (this.promise = _);
    }
    set promise(_) {
      (this.m_Promise = _),
        (this.m_Value = void 0),
        _?.then((_) => {
          this.m_Promise === _ && (this.m_Value = _);
        });
    }
    get promise() {
      return this.m_Promise;
    }
    get value() {
      return this.m_Value;
    }
  };
_([_], _.prototype, "m_Value", 2);
function _(_, _, _) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)("div", {
      ..._,
      role: _,
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
function _(_, _) {
  return Array.from(Array.from(Array(_ - _ + 1).keys()).map((_) => _ + _));
}
function _(_) {
  if (typeof _ != "string") return NaN;
  let _ = !_.includes("ms") && _.includes("s"),
    _ = Number.parseFloat(_);
  return _ && (_ *= 1e3), _;
}
export { _, _, _, _ };
