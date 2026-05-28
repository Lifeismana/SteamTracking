var _ = !0,
  _ = "Invariant failed";
function _(_, _) {
  if (!_) {
    if (_) throw new Error(_);
    var _ = typeof _ == "function" ? _() : _,
      _ = _ ? "".concat(_, ": ").concat(_) : _;
    throw new Error(_);
  }
}
export { _ };
