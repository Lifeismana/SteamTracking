import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=BSMOk6Fq";
import { _ } from "./copytoclipboardbutton.js?contenthash=BjjR1E8M";
var _ = _(_()),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(
      () => localStorage.floatingforumreportedsubjectslist !== void 0,
    ),
    _ = (0, _.useMemo)(() => {
      let _ = window.location.href.split(`#`)[0];
      return _.gidcomment !== null && (_ += `#c` + _.gidcomment), _;
    }, [_.gidcomment]);
  return (0, _.jsx)(_, {
    text: _,
    size: _ ? `large` : `small`,
  });
}
export { _ as default };
