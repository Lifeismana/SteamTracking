var _ = "SteamBeta_VOnly_",
  _ = {
    name: _,
    options: {
      path: "/",
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_, _) {
  let _ = {
    ..._,
    name: _(_),
  };
  _.default === _ ? _(_) : _(_, _ ? "1" : "0");
}
function _(_) {
  return `${_}${_.shortName}`;
}
export { _ };
