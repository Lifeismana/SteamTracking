/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ft as e } from "./libraries.js?contenthash=CNC_iAx3";
import { n as t } from "./lazyrenderchildren.js?contenthash=S6s_G9bS";
import "./main.js?contenthash=BznMolNX";
import { t as n } from "./discoveryqueuewidget.js?contenthash=DjcI9i04";
var r = e();
function i() {
  return (0, r.jsx)(t, {
    placeholderHeight: `200px`,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, r.jsx)(n, { eStoreDiscoveryQueueType: 0 }),
  });
}
export { i as default };
