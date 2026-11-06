/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as t, ft as n } from "./libraries.js?contenthash=CNC_iAx3";
import { $ as r, Q as i } from "./salesectionfactory.js?contenthash=2CVoea60";
import { h as a } from "./partnerevent.js?contenthash=CvQHnTcq";
import { t as o } from "./partnersaledisplay.js?contenthash=DkeEjamz";
import { n as s, t as c } from "./eventinitialization.js?contenthash=wz_nobsH";
import { t as l } from "./throbber.js?contenthash=Dip9pbhW";
import { n as u } from "./partnereventstore.js?contenthash=CV5m4Ocg";
import {
  Iy as d,
  Uy as f,
  fd as p,
  gt as m,
  ht as h,
  ix as g,
  nx as _,
  t as v,
} from "./main.js?contenthash=BznMolNX";
var y = e(t()),
  b = n();
function x(e) {
  let { eventModel: t } = e;
  return (0, b.jsx)(c, {
    bSalePage: !0,
    children: (0, b.jsx)(S, { ...e, overrideEventModel: t }),
  });
}
function S(e) {
  let { promotionName: t, language: n, overrideEventModel: c } = e,
    [p, x] = y.useState(
      c ?? u.GetClanEventFromAnnouncementGID(g.ANNOUNCEMENT_GID),
    );
  y.useEffect(() => {
    if (!c && p?.AnnouncementGID != g.ANNOUNCEMENT_GID) {
      let e = new d(_.CLANSTEAMID);
      u.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
        e,
        g.ANNOUNCEMENT_GID,
        null,
      ).then(x);
    }
  }, [p, c]);
  let S = r() ?? p,
    w = i();
  if ((s(1500), !S))
    return (0, b.jsx)(`div`, {
      className: v,
      style: { height: `500px` },
      children: (0, b.jsx)(l, { size: `medium`, string: f(`#Loading`) }),
    });
  let T =
    (S.visibility_state !== a.k_EEventStateVisible &&
      S.visibility_state !== a.k_EEventStateUnlisted) ||
    w;
  return (0, b.jsx)(C, {
    eventModel: S,
    children: (0, b.jsx)(m, {
      children: (0, b.jsx)(h, {
        curator_clanid: S?.clanSteamID?.GetAccountID(),
        children: (0, b.jsx)(o, {
          promotionName: t,
          language: n,
          eventModel: S,
          bIsPreview: T,
        }),
      }),
    }),
  });
}
function C(e) {
  let { eventModel: t, children: n } = e,
    r = t.GetContentHubType() == `adultonly`;
  return (0, b.jsx)(p, {
    eAdultOnlyMediaBehavior: r ? `allowed` : `masked`,
    children: n,
  });
}
export { x as default };
