var _ = _(_(), 1),
  _ = `dmzX-yWLrRg-`,
  _ = `lzBKqrR1yUg-`,
  _ = `ehkvAMvvf98-`,
  _ = `ySgNaS6YeO0-`,
  _ = _();
function _(_) {
  return !!_ && _ !== 3;
}
function _(_) {
  return _(_.status)
    ? (0, _.jsxs)(`span`, {
        className: (0, _.default)(_, _.className),
        children: [_.label, _.status === 1 && `?`],
      })
    : null;
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `Terrorism`,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `CSAM`,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `Violent threat`,
  });
}
function _(_) {
  let { subject: _ } = _;
  return !_(_.terrorism_status) &&
    !_(_.csam_status) &&
    !_(_.credible_threat_of_violence_status)
    ? null
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(_, {
            status: _.terrorism_status,
          }),
          (0, _.jsx)(_, {
            status: _.csam_status,
          }),
          (0, _.jsx)(_, {
            status: _.credible_threat_of_violence_status,
          }),
        ],
      });
}
export { _, _, _, _ };
