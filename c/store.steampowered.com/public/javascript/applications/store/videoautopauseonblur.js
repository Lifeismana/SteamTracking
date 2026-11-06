import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _ } from "./main.js?contenthash=BznMolNX";
var _ = _(_()),
  _ = 2e4;
function _(_) {
  let _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)(() => {
      _.current = setTimeout(() => {
        _.current && !_.current.paused && (_.current.pause(), (_.current = !0));
      }, _);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      (_.current &&= (clearTimeout(_.current), null)),
        _.current && _.current && (_.current.play(), (_.current = !1));
    }, [_]);
  _(window, `blur`, _), _(window, `focus`, _);
}
export { _ };
