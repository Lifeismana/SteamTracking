_();
function _(_) {
  let _ = [];
  switch (_) {
    case 5:
      _.push(2), _.push(1);
    case 1:
      _.push(4);
    case 4:
      _.push(3);
      break;
  }
  return _;
}
var _ = new Map();
_.set(2, 5), _.set(1, 5), _.set(4, 1), _.set(3, 4);
function _(_) {
  let _ = [],
    _ = _.get(_);
  return _ && (_.push(_), _.push(..._(_))), _;
}
function _(_) {
  let _ = null;
  switch (_) {
    case 5:
      _ = `#ContentDescriptor_GeneralMatureContent`;
      break;
    case 2:
      _ = `#ContentDescriptor_FrequentViolenceOrGore`;
      break;
    case 1:
      _ = `#ContentDescriptor_NudityOrSexualContent`;
      break;
    case 4:
      _ = `#ContentDescriptor_GratuitousNudityOrSexualContent`;
      break;
    case 3:
      _ = `#ContentDescriptor_AdultOnlySexualContent`;
      break;
    default:
      throw `Invalid content descriptor.`;
  }
  return _(_);
}
export { _, _, _ };
