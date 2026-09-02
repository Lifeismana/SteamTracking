/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [5136],
    {
      24655: (c, d, e) => {
        e.r(d), e.d(d, { RecapHubRoutes: () => r, default: () => _ });
        var t = e(7850),
          o = e(90783),
          m = e(17083),
          s = e(92757),
          x = e(58732),
          p = e(25175);
        const r = {
          NextFestRecapListPartner: (n) => `/nextfest/${n}`,
          NextFestRecapList: () => "/nextfest",
          NextFestRecap: (n, a) => `/nextfest/${n}/${a}`,
        };
        function _(n) {
          return (0, t.jsx)(m.Kd, {
            basename: (0, x.C)() + "recap/",
            children: (0, t.jsxs)(s.dO, {
              children: [
                (0, t.jsx)(s.qh, {
                  path: r.NextFestRecap(":postfix", ":partnerid(\\d+)"),
                  render: (a) =>
                    (0, t.jsx)(p.ap, {
                      pagePostFix: a.match.params.postfix,
                      nPartnerID: Number.parseInt(a.match.params.partnerid),
                    }),
                }),
                (0, t.jsx)(s.qh, {
                  path: r.NextFestRecapListPartner(":partnerid(\\d+)"),
                  render: (a) =>
                    (0, t.jsx)(p.yb, {
                      nPartnerID: Number.parseInt(a.match.params.partnerid),
                    }),
                }),
                (0, t.jsx)(s.qh, {
                  path: r.NextFestRecapList(),
                  render: (a) => (0, t.jsx)(p.yb, { nPartnerID: void 0 }),
                }),
                (0, t.jsx)(s.qh, { component: o.a }),
              ],
            }),
          });
        }
      },
    },
  ]);
})();
