import "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _ } from "./clanimagemodels.js?contenthash=DAJrDkbc";
import { _ } from "./multisourceimage.js?contenthash=BKu7brjS";
_();
var _ = _();
function _(_) {
  let { strImageToken: _, language: _, strAltText: _ } = _,
    _ = _(_, _);
  return _
    ? typeof _ == `string`
      ? (0, _.jsx)(`img`, {
          src: _,
          alt: _,
        })
      : (0, _.jsx)(_, {
          rgSources: _,
          strAltText: _,
        })
    : null;
}
export { _ };
