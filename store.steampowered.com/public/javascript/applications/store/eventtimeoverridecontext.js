/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as t, ft as n } from "./libraries.js?contenthash=CNC_iAx3";
import { n as r } from "./eventtime.js?contenthash=CazMM9P8";
var i = e(t(), 1);
n();
var a = i.createContext(void 0);
function o() {
  return i.useContext(a) ?? r();
}
export { o as t };
