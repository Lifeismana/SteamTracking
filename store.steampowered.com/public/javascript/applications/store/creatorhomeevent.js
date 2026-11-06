/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as t, ft as n } from "./libraries.js?contenthash=CNC_iAx3";
import { o as r } from "./historyutils.js?contenthash=DxNfPuHi";
import { t as i } from "./throbber.js?contenthash=Dip9pbhW";
import { t as a } from "./eventdevfeaturestore.js?contenthash=CXIdHFd_";
import { n as o } from "./fakesalehelper.js?contenthash=C_4kCeD8";
import { i as s } from "./partnereventstore.js?contenthash=CV5m4Ocg";
import { mS as c, rx as l } from "./main.js?contenthash=BznMolNX";
import u from "./storesaledisplay.js?contenthash=qpIN92dm";
var d = e(t()),
  f = n();
function p(e) {
  let { clanAccountID: t, gidEvent: n } = e,
    { eventModel: p, bLoading: m } = s(t, n),
    h = c(l.LANGUAGE),
    [g] = r(`livepreview`);
  return (
    g && (p = o(t, 36, `creatorhome_fake`, a())),
    d.useEffect(() => {
      if (!m && !p) {
        let e = new URL(window.location.href);
        e.searchParams.set(`v1`, `1`), window.location.replace(e.toString());
      }
    }, [m, p]),
    p
      ? (0, f.jsx)(u, {
          eventModel: p,
          promotionName: `creatorhome_${n}`,
          language: h,
        })
      : (0, f.jsx)(i, {})
  );
}
export { p as default };
