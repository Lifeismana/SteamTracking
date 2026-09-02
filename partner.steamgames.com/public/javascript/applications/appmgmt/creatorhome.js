/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7108],
    {
      56258: (n, a, t) => {
        "use strict";
        t.r(a), t.d(a, { default: () => D });
        var e = t(7850),
          o = t(90626),
          d = t(25792),
          u = t(72854),
          E = t.n(u),
          f = t(16512),
          j = t(40497),
          i = t(85599);
        function D(c) {
          const { creatorHomes: s } = c,
            [M, P] = o.useState(!0),
            [_, b] = o.useState(void 0),
            [O, C] = o.useState(0);
          return (
            o.useEffect(() => {
              if (!s) return;
              (async () => {
                const m = [];
                for (let r = 0; r < s.length; r += 10) {
                  const L = s
                      .slice(r, r + 10)
                      .map((h) =>
                        j.L.fetchQuery((0, f.A2)(Number(h.accountid))),
                      ),
                    S = await Promise.all(L);
                  m.push(...S);
                  const v = [...m].sort(
                    (h, A) => A.GetNumFollowers() - h.GetNumFollowers(),
                  );
                  b(v), C(r);
                }
                P(!1);
              })();
            }, [s]),
            !_ || !s
              ? (0, e.jsx)(i.t, {})
              : (0, e.jsxs)(d.tH, {
                  children: [
                    M &&
                      (0, e.jsxs)("span", {
                        children: [
                          (0, e.jsx)("span", { children: "Loading: " }),
                          (0, e.jsxs)("span", {
                            children: [O + 1, " / ", s.length],
                          }),
                          (0, e.jsx)(i.t, { size: "small" }),
                        ],
                      }),
                    (0, e.jsxs)("table", {
                      className: E().Table,
                      children: [
                        (0, e.jsx)("thead", {
                          children: (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", { children: "Name" }),
                              (0, e.jsx)("th", { children: "Followers" }),
                            ],
                          }),
                        }),
                        (0, e.jsx)("tbody", {
                          children: _.map((l) =>
                            (0, e.jsx)(
                              x,
                              { creatorHome: l },
                              l.GetClanAccountID(),
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                })
          );
        }
        function x(c) {
          const { creatorHome: s } = c;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)("a", {
                  href: s.GetCreatorHomeURL("developer"),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: s.GetName(),
                }),
              }),
              (0, e.jsx)("td", { children: s.GetNumFollowers() }),
            ],
          });
        }
      },
      77291: (n, a, t) => {
        "use strict";
        t.d(a, { V: () => e });
        function e(o, d) {
          typeof window > "u" || (window[o] = d);
        }
      },
      72854: (n) => {
        n.exports = { Table: "_2H4PpVokNS3DA0bvEZgYk3" };
      },
    },
  ]);
})();
