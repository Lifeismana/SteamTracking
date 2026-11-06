/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { U as e } from "./mobx.esm.js?contenthash=CQiZDS-T";
import { O as t } from "./react-router.js?contenthash=C8paMHEZ";
function n() {
  return t().languages.map((e) => r(e.strISOCode));
}
function r(t) {
  return t.length == 2 && e.COUNTRY ? `${t}-${e.COUNTRY}` : t;
}
export { n as t };
