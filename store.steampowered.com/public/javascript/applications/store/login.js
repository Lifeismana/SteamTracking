/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [96966],
    {
      179: (h, E, r) => {
        "use strict";
        r.d(E, {
          Bm: () => a,
          QD: () => P,
          f3: () => g,
          iV: () => d,
          ip: () => f,
          le: () => u,
        });
        var i = r(90626),
          c = r(92757);
        function g(n, s) {
          let e;
          if (typeof n == "string") e = n;
          else if ("location" in n) e = n.location.search;
          else if ("search" in n) e = n.search;
          else return;
          const o = new URLSearchParams(e.substring(1));
          if (o.has(s)) {
            const t = o.getAll(s);
            return t[t.length - 1];
          }
        }
        function a(n, s, e, o = !1) {
          const t = new URLSearchParams(n.location.search.substring(1));
          if (e != null && e != null) {
            if (t.get(s) == e) return;
            t.set(s, e);
          } else {
            if (!t.has(s)) return;
            t.delete(s);
          }
          o
            ? n.replace(`?${t.toString()}`, { ...n.location.state })
            : n.push(`?${t.toString()}`);
        }
        function u(n, s, e) {
          a(n, s, e, !0);
        }
        function P(n, s) {
          const e = (0, c.W6)(),
            o = (0, c.zy)(),
            t = (0, i.useMemo)(() => {
              const l = g(o.search, n);
              return l != null && l != null
                ? s != null && s != null
                  ? typeof s == "boolean"
                    ? s.constructor(l !== "false")
                    : s.constructor(l)
                  : l
                : s;
            }, [o.search, n, s]),
            _ = (0, i.useCallback)(
              (l, D = !1) => {
                a(e, n, l != null && l != null ? String(l) : null, D);
              },
              [e, n],
            );
          return [t, _];
        }
        function f(n, s, e = !1) {
          const o = new URLSearchParams(n.location.search.substring(1));
          for (const t in s)
            if (s.hasOwnProperty(t)) {
              const _ = s[t];
              o.delete(t), _ != null && _ != null && o.append(t, _);
            }
          e
            ? n.replace(`?${o.toString()}`, { ...n.location.state })
            : n.push(`?${o.toString()}`);
        }
        function d(n, s) {
          f(n, s, !0);
        }
      },
      99170: (h, E, r) => {
        "use strict";
        r.r(E), r.d(E, { default: () => s });
        var i = r(7850),
          c = r(67692),
          g = r.n(c),
          a = r(90626),
          u = r(34004),
          P = r(6740),
          f = r(3166),
          d = r(8059),
          n = r(68312);
        function s(e) {
          const { redirectUrl: o = f.TS.STORE_BASE_URL } = e,
            t = (0, n.rW)(),
            [_, l] = (0, a.useState)(!1),
            D = e.guest,
            U = (M) => {
              M == d.wI.k_PrimaryDomainFail ? l(!0) : window.location.assign(o);
            };
          return (0, i.jsx)("div", {
            className: c.LoginContainer,
            children: _
              ? (0, i.jsx)(u.Fn, {})
              : (0, i.jsx)(u.YN, {
                  autoFocus: !0,
                  transport: t,
                  platform: P.SS.tS,
                  onComplete: U,
                  redirectUrl: o,
                  children:
                    D && (0, i.jsx)(u.Mk, { redirectURL: e.redirectUrl }),
                }),
          });
        }
      },
      67692: (h) => {
        h.exports = { LoginContainer: "_2kLRmRsLwjGDlm-ZfUpChG" };
      },
    },
  ]);
})();
