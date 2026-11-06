/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as e, ft as t } from "./libraries.js?contenthash=CNC_iAx3";
import { i as n } from "./clanimagemodels.js?contenthash=DAJrDkbc";
import { t as r } from "./multisourceimage.js?contenthash=BKu7brjS";
e();
var i = t();
function a(e) {
  let { strImageToken: t, language: a, strAltText: o } = e,
    s = n(t, a);
  return s
    ? typeof s == `string`
      ? (0, i.jsx)(`img`, { src: s, alt: o })
      : (0, i.jsx)(r, { rgSources: s, strAltText: o })
    : null;
}
export { a as t };
