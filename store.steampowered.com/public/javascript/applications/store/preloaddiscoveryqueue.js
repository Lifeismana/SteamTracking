/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as t } from "./libraries.js?contenthash=CNC_iAx3";
import { ax as n, bu as r, iy as i } from "./main.js?contenthash=BznMolNX";
import { n as a } from "./discoveryqueuestore.js?contenthash=B2YNMPre";
var o = e(t());
function s() {
  let [e, t] = (0, o.useState)(!n.logged_in),
    [s] = r(),
    c = i();
  return (
    (0, o.useEffect)(() => {
      e || (a.Init(c), t(!0));
    }, [e, c]),
    e && !s
  );
}
export { s as t };
