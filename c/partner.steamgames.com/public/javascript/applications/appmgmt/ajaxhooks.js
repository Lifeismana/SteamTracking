import { _, _ } from "./mobx.esm.js?contenthash=CQiZDS-T";
import { _ } from "./axios.js?contenthash=DJSofgRR";
var _ = _(_()),
  _ = _(_());
function _(_) {
  let _ = _.useRef(_.default.CancelToken.source());
  return (
    _.useEffect(() => {
      let _ = _.current;
      return () => _.cancel(_ ? `${_}: unmounting` : `unmounting`);
    }, [_]),
    _.current
  );
}
export { _ };
