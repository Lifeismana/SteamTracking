/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6966],
    {
      75793: (h, E, o) => {
        "use strict";
        o.r(E), o.d(E, { default: () => s });
        var _ = o(7850),
          a = o(90626),
          c = o(1317),
          u = o(94276),
          D = o(13018),
          f = o(3166),
          P = o(8059),
          g = o(9211),
          n = o.n(g);
        function s(e) {
          const { redirectUrl: r = f.TS.COMMUNITY_BASE_URL } = e,
            [t] = (0, a.useState)(
              new D.D(f.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [i, l] = (0, a.useState)(!1),
            M = (U) => {
              U == P.wI.k_PrimaryDomainFail ? l(!0) : window.location.assign(r);
            };
          return (0, _.jsx)("div", {
            className: g.LoginContainer,
            children: i
              ? (0, _.jsx)(c.Fn, {})
              : (0, _.jsx)(c.YN, {
                  autoFocus: !0,
                  transport: t,
                  platform: u.SS.tS,
                  onComplete: M,
                  redirectUrl: r,
                }),
          });
        }
      },
      179: (h, E, o) => {
        "use strict";
        o.d(E, {
          Bm: () => u,
          QD: () => f,
          f3: () => c,
          iV: () => g,
          ip: () => P,
          le: () => D,
        });
        var _ = o(90626),
          a = o(92757);
        function c(n, s) {
          let e;
          if (typeof n == "string") e = n;
          else if ("location" in n) e = n.location.search;
          else if ("search" in n) e = n.search;
          else return;
          const r = new URLSearchParams(e.substring(1));
          if (r.has(s)) {
            const t = r.getAll(s);
            return t[t.length - 1];
          }
        }
        function u(n, s, e, r = !1) {
          const t = new URLSearchParams(n.location.search.substring(1));
          if (e != null && e != null) {
            if (t.get(s) == e) return;
            t.set(s, e);
          } else {
            if (!t.has(s)) return;
            t.delete(s);
          }
          r
            ? n.replace(`?${t.toString()}`, { ...n.location.state })
            : n.push(`?${t.toString()}`);
        }
        function D(n, s, e) {
          u(n, s, e, !0);
        }
        function f(n, s) {
          const e = (0, a.W6)(),
            r = (0, a.zy)(),
            t = (0, _.useMemo)(() => {
              const l = c(r.search, n);
              return l != null && l != null
                ? s != null && s != null
                  ? typeof s == "boolean"
                    ? s.constructor(l !== "false")
                    : s.constructor(l)
                  : l
                : s;
            }, [r.search, n, s]),
            i = (0, _.useCallback)(
              (l, M = !1) => {
                u(e, n, l != null && l != null ? String(l) : null, M);
              },
              [e, n],
            );
          return [t, i];
        }
        function P(n, s, e = !1) {
          const r = new URLSearchParams(n.location.search.substring(1));
          for (const t in s)
            if (s.hasOwnProperty(t)) {
              const i = s[t];
              r.delete(t), i != null && i != null && r.append(t, i);
            }
          e
            ? n.replace(`?${r.toString()}`, { ...n.location.state })
            : n.push(`?${r.toString()}`);
        }
        function g(n, s) {
          P(n, s, !0);
        }
      },
      9211: (h) => {
        h.exports = { LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk" };
      },
    },
  ]);
})();
