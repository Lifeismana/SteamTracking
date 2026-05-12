/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4226],
  {
    34044: (l, e, n) => {
      n.r(e), n.d(e, { default: () => u });
      var t = n(7850),
        s = n(39891);
      function u(l) {
        const { dataprops: e, results: n } = l;
        let u = null;
        if (n && n.length > 0) {
          const l = e.appid ?? null;
          if (l) {
            let e = n.findIndex((e) => e.appid == l);
            u = -1 != e ? n[e] : null;
          }
          const t = e.search_id ?? null;
          if (!u && t) {
            let l = n.findIndex((l) => l.search_id == t);
            u = -1 != l ? n[l] : null;
          }
        }
        return u
          ? (0, t.jsx)(s.default, { results: u, bIncludeSteamOS: !0 })
          : null;
      }
    },
  },
]);
