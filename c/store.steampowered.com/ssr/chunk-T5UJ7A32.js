var _ = {};
_(_, {
  Clamp: () => _,
  InRangeArray: () => _,
  InRangeInclusive: () => _,
  IsDigits: () => _,
  IsHexDigits: () => _,
  RandomInt: () => _,
  RemapVal: () => _,
  RemapValClamped: () => _,
  ScalePreserveAspectRatio: () => _,
  isInt64: () => _,
});
function _(_, _) {
  return (
    (_ = Math.ceil(_)),
    (_ = Math.floor(_)),
    Math.floor(Math.random() * (_ - _ + 1)) + _
  );
}
function _(_, _, _) {
  return _ == null || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
}
function _(_, _, _) {
  return _ == null || isNaN(_) ? !1 : _ >= _ && _ <= _;
}
function _(_, _) {
  return _ == null || isNaN(_) || _ == null ? !1 : _ >= 0 && _ < _.length;
}
function _(_, _, _, _, _) {
  return _ + ((_ - _) * (_ - _)) / (_ - _);
}
function _(_, _, _, _, _) {
  return _(_ + ((_ - _) * (_ - _)) / (_ - _), Math.min(_, _), Math.max(_, _));
}
function _(_) {
  if (_.length == 0) return !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.charCodeAt(_);
    if (_ < 48 || _ > 57) return !1;
  }
  return !0;
}
function _(_) {
  if (_.length == 0) return !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.charCodeAt(_);
    if (
      !(_ >= 48 && _ <= 57) &&
      !(_ >= 97 && _ <= 102) &&
      !(_ >= 65 && _ <= 70)
    )
      return !1;
  }
  return !0;
}
function _(_) {
  if (!/^-?\d+$/.test(_)) return !1;
  let _ = BigInt("-9223372036854775808"),
    _ = BigInt("9223372036854775807");
  try {
    let _ = BigInt(_);
    return _ >= _ && _ <= _;
  } catch {
    return !1;
  }
}
function _(_, _, _, _) {
  let _ = _ / _,
    _ = _ / _,
    _ = Math.min(_, _);
  return [_ * _, _ * _];
}
export { _, _, _, _, _, _, _ };
