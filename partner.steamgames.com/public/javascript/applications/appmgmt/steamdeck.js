/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4226],
    {
      18243: (f, d, n) => {
        n.r(d), n.d(d, { default: () => p });
        var m = n(7850),
          r = n(51409);
        function p(c) {
          const { dataprops: i, results: t } = c;
          let e = null;
          if (t && t.length > 0) {
            const a = i.appid ?? null;
            if (a) {
              let l = t.findIndex((s) => s.appid == a);
              e = l != -1 ? t[l] : null;
            }
            const u = i.search_id ?? null;
            if (!e && u) {
              let l = t.findIndex((s) => s.search_id == u);
              e = l != -1 ? t[l] : null;
            }
          }
          return e ? (0, m.jsx)(r.default, { results: e }) : null;
        }
      },
    },
  ]);
})();
