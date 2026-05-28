var _ = _(_(), 1);
var _ = {
  SimpleModalDialog: "IB4xxefNPtw-",
  SimpleModalDialogHeader: "VDx4AGCUo-c-",
  SimpleModalDialogTitle: "IREsxRBF3-8-",
  XButton: "_-7dzbVH142U-",
  SimpleModalContentCtn: "YqxOxjuRbX0-",
};
var _ = _(_(), 1);
function _(_) {
  let {
    onClose: _,
    className: _,
    navID: _,
    children: _,
    strTitle: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: _ ?? "SimpleModalDialog",
    ..._,
    children: (0, _.jsxs)("div", {
      className: (0, _.default)(_, _.SimpleModalDialog),
      children: [
        " ",
        (0, _.jsxs)(_, {
          className: _.SimpleModalDialogHeader,
          children: [
            _ &&
              (0, _.jsx)("h2", {
                className: _.SimpleModalDialogTitle,
                children: _,
              }),
            (0, _.jsx)("button", {
              onClick: (_) => (_("xclick"), _.preventDefault(), !1),
              className: _.XButton,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        (0, _.jsx)("div", {
          className: _.SimpleModalContentCtn,
          children: _,
        }),
      ],
    }),
  });
}
var _ = _(_());
var _ = [
  _.k_EContentDescriptor_AnyMatureContent,
  _.k_EContentDescriptor_FrequentViolenceOrGore,
  _.k_EContentDescriptor_NudityOrSexualContent,
  _.k_EContentDescriptor_GratuitousSexualContent,
  _.k_EContentDescriptor_AdultOnlySexualContent,
];
function _(_) {
  let _ = [];
  switch (_) {
    case _.k_EContentDescriptor_AnyMatureContent:
      _.push(_.k_EContentDescriptor_FrequentViolenceOrGore),
        _.push(_.k_EContentDescriptor_NudityOrSexualContent);
    case _.k_EContentDescriptor_NudityOrSexualContent:
      _.push(_.k_EContentDescriptor_GratuitousSexualContent);
    case _.k_EContentDescriptor_GratuitousSexualContent:
      _.push(_.k_EContentDescriptor_AdultOnlySexualContent);
      break;
  }
  return _;
}
var _ = new Map();
_.set(
  _.k_EContentDescriptor_FrequentViolenceOrGore,
  _.k_EContentDescriptor_AnyMatureContent,
);
_.set(
  _.k_EContentDescriptor_NudityOrSexualContent,
  _.k_EContentDescriptor_AnyMatureContent,
);
_.set(
  _.k_EContentDescriptor_GratuitousSexualContent,
  _.k_EContentDescriptor_NudityOrSexualContent,
);
_.set(
  _.k_EContentDescriptor_AdultOnlySexualContent,
  _.k_EContentDescriptor_GratuitousSexualContent,
);
function _(_) {
  let _ = [],
    _ = _.get(_);
  return _ && (_.push(_), _.push(..._(_))), _;
}
function _(_) {
  let _ = null;
  switch (_) {
    case _.k_EContentDescriptor_AnyMatureContent:
      _ = "#ContentDescriptor_GeneralMatureContent";
      break;
    case _.k_EContentDescriptor_FrequentViolenceOrGore:
      _ = "#ContentDescriptor_FrequentViolenceOrGore";
      break;
    case _.k_EContentDescriptor_NudityOrSexualContent:
      _ = "#ContentDescriptor_NudityOrSexualContent";
      break;
    case _.k_EContentDescriptor_GratuitousSexualContent:
      _ = "#ContentDescriptor_GratuitousNudityOrSexualContent";
      break;
    case _.k_EContentDescriptor_AdultOnlySexualContent:
      _ = "#ContentDescriptor_AdultOnlySexualContent";
      break;
    default:
      throw "Invalid content descriptor.";
  }
  return _(_);
}
export { _, _, _, _ };
