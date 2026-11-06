/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { nt as t } from "./libraries.js?contenthash=CNC_iAx3";
import { t as n } from "./usedataloader.client.js?contenthash=BsFeMYKq";
import { ut as r } from "./main.js?contenthash=BznMolNX";
var i = e(t(), 1);
function a(e, t) {
  return new i.default(
    async (t) => {
      let n = [...t],
        i = await r.GetPlayerLinkDetails(e, { steamids: n }),
        a = new Map();
      return (
        i
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            a.set(t.public_data.steamid, t);
          }),
        n.map((e) => a.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function o(e) {
  return n(`PlayerLinkDetails`, () => a(e));
}
export { o as n, a as t };
