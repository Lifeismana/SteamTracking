/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7108],
  {
    72854: (e) => {
      e.exports = { Table: "_2H4PpVokNS3DA0bvEZgYk3" };
    },
    3191: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => h });
      var r = t(7850),
        n = t(90626),
        l = t(84811),
        a = t(72854),
        o = t.n(a),
        c = t(12493),
        i = t(7860),
        d = t(22797);
      function h(e) {
        const { creatorHomes: s } = e,
          [t, a] = n.useState(!0),
          [h, m] = n.useState(void 0),
          [x, j] = n.useState(0);
        return (
          n.useEffect(() => {
            if (!s) return;
            (async () => {
              const e = [];
              for (let t = 0; t < s.length; t += 10) {
                const r = s
                    .slice(t, t + 10)
                    .map((e) => i.L.fetchQuery((0, c.A2)(Number(e.accountid)))),
                  n = await Promise.all(r);
                e.push(...n);
                const l = [...e].sort(
                  (e, s) => s.GetNumFollowers() - e.GetNumFollowers(),
                );
                m(l), j(t);
              }
              a(!1);
            })();
          }, [s]),
          h && s
            ? (0, r.jsxs)(l.tH, {
                children: [
                  t &&
                    (0, r.jsxs)("span", {
                      children: [
                        (0, r.jsx)("span", { children: "Loading: " }),
                        (0, r.jsxs)("span", {
                          children: [x + 1, " / ", s.length],
                        }),
                        (0, r.jsx)(d.t, { size: "small" }),
                      ],
                    }),
                  (0, r.jsxs)("table", {
                    className: o().Table,
                    children: [
                      (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                          children: [
                            (0, r.jsx)("th", { children: "Name" }),
                            (0, r.jsx)("th", { children: "Followers" }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("tbody", {
                        children: h.map((e) =>
                          (0, r.jsx)(
                            u,
                            { creatorHome: e },
                            e.GetClanAccountID(),
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, r.jsx)(d.t, {})
        );
      }
      function u(e) {
        const { creatorHome: s } = e;
        return (0, r.jsxs)("tr", {
          children: [
            (0, r.jsx)("td", {
              children: (0, r.jsx)("a", {
                href: s.GetCreatorHomeURL("developer"),
                target: "_blank",
                rel: "noopener noreferrer",
                children: s.GetName(),
              }),
            }),
            (0, r.jsx)("td", { children: s.GetNumFollowers() }),
          ],
        });
      }
    },
  },
]);
