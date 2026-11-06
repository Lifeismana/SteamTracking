/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t } from "./mobx.esm.js?contenthash=CQiZDS-T";
import {
  v as n,
  y as r,
} from "./promotionoperationowner.js?contenthash=DRb6m5ZI";
import { a as i, r as a } from "./react-router.js?contenthash=C8paMHEZ";
import { r as o, t as s } from "./react-router-dom.js?contenthash=C5N9ARHv";
import { t as c } from "./unknownroute.js?contenthash=CtgV9GMi";
t();
var l = e(),
  u = {
    NextFestRecapListPartner: (e) => `/nextfest/${e}`,
    NextFestRecapList: () => `/nextfest`,
    NextFestRecap: (e, t) => `/nextfest/${e}/${t}`,
  };
function d(e) {
  return (0, l.jsx)(s, {
    basename: o() + `recap/`,
    children: (0, l.jsxs)(i, {
      children: [
        (0, l.jsx)(a, {
          path: u.NextFestRecap(`:postfix`, `:partnerid(\\d+)`),
          render: (e) =>
            (0, l.jsx)(n, {
              pagePostFix: e.match.params.postfix,
              nPartnerID: Number.parseInt(e.match.params.partnerid),
            }),
        }),
        (0, l.jsx)(a, {
          path: u.NextFestRecapListPartner(`:partnerid(\\d+)`),
          render: (e) =>
            (0, l.jsx)(r, {
              nPartnerID: Number.parseInt(e.match.params.partnerid),
            }),
        }),
        (0, l.jsx)(a, {
          path: u.NextFestRecapList(),
          render: (e) => (0, l.jsx)(r, { nPartnerID: void 0 }),
        }),
        (0, l.jsx)(a, { component: c }),
      ],
    }),
  });
}
export { u as RecapHubRoutes, d as default };
