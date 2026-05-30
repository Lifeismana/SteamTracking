var _ = _(_(), 1);
var _ = _.createContext({
  eAdultOnlyMediaBehavior: "masked",
});
function _() {
  return _.useMemo(() => {
    let _ = _("forceallages");
    return !!(
      (_ && _ !== "0") ||
      (_.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function _() {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _();
  return _() ||
    (_ == "masked" &&
      (_.excluded_content_descriptors.includes(
        _.k_EContentDescriptor_GratuitousSexualContent,
      ) ||
        _.excluded_content_descriptors.includes(
          _.k_EContentDescriptor_AdultOnlySexualContent,
        )))
    ? "blocked"
    : _ == "masked" && _
      ? "allowed"
      : _;
}
function _() {
  return _() != "allowed";
}
var _ = "bDisableAOWarning",
  _ = 2 * _.PerDay;
function _() {
  let _ = _(_),
    _ = _ ? parseInt(_) : 0;
  return _ != 0 ? _ : null;
}
function _() {
  return {
    queryKey: ["AOWarningCookie"],
    queryFn: () => _(),
    placeholderData: () => _(),
    staleTime: 0,
  };
}
function _() {
  let { data: _ } = _(_());
  return _ && _ > Date.now() / 1e3;
}
function _(_) {
  let _ = _() == "blocked" && !!_,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    );
  return _
    ? _
      ? _.content_descriptorids.includes(
          _.k_EContentDescriptor_AdultOnlySexualContent,
        ) ||
        _.content_descriptorids.includes(
          _.k_EContentDescriptor_GratuitousSexualContent,
        )
      : !0
    : !1;
}
export { _, _ };
