/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [37228],
    {
      37228: (d, v, e) => {
        "use strict";
        e.r(v), e.d(v, { default: () => I });
        var a = e(7850),
          E = e(72609),
          P = e(29522),
          D = e(40358),
          f = e(65946),
          s = e(74107),
          m = e(18860),
          R = e(48890),
          i = e.n(R),
          O = e(19495);
        function I(L) {
          const {
              rgPackageTuples: g,
              rgHardwareDetails: t,
              selectedProduct: u,
              bAllowMultipleModels: N,
            } = L,
            [W, c, M, n, h] = (0, f.q3)(() => [
              t == null ? void 0 : t.some((o) => o.collection_time_active),
              t == null
                ? void 0
                : t.some(
                    (o) =>
                      o.collection_time_active &&
                      o.collection_time_active < E.TS.NOW,
                  ),
              g.length,
              t == null ? void 0 : t.find((o) => (0, m.k)(o.reservation_state)),
              t == null
                ? void 0
                : t.find(
                    (o) =>
                      !!o.packageid &&
                      o.packageid ===
                        (u == null ? void 0 : u.reservation_package),
                  ),
            ]),
            C = (0, P.oc)(n == null ? void 0 : n.packageid),
            { data: r } = (0, D.J$)(C);
          if (!t) return null;
          const l = n && (0, m.k)(n.reservation_state);
          if (W)
            if (N) {
              if (c && l)
                return (0, a.jsx)("div", {
                  className: i().Message,
                  children: s.F5.Localize("#Reservation_InPool"),
                });
              if (!c)
                return (0, a.jsx)("div", {
                  className: i().Message,
                  children: l
                    ? s.F5.Localize("#Reservation_InPool_NoDate", M)
                    : s.F5.Localize("#Reserationn_NoListJoined", M),
                });
            } else {
              if (l)
                return (0, a.jsx)("div", {
                  className: i().Message,
                  children:
                    r != null && r.name
                      ? s.F5.Localize("#Reservation_InPool_WithName", r.name)
                      : s.F5.Localize("#Reservation_InPool_NoName"),
                });
              if (!c)
                return (0, a.jsx)("div", {
                  className: i().Message,
                  children: s.F5.Localize("#Reservation_NoListJoined_OneModel"),
                });
            }
          const A = (0, O.i)(n, h),
            _ = r == null ? void 0 : r.name;
          if (A) {
            if (_ && l)
              return (0, a.jsx)("div", {
                className: i().Message,
                children: s.F5.Localize(
                  "#Reservation_In_Waitlist_WithName_NoDate",
                  _,
                ),
              });
            if (!l)
              return (0, a.jsx)("div", {
                className: i().Message,
                children: s.F5.Localize("#Reservation_Pool_Closed"),
              });
          }
          return _ && l
            ? (0, a.jsx)("div", {
                className: i().Message,
                children: s.F5.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  _,
                ),
              })
            : null;
        }
      },
      48890: (d) => {
        d.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
      },
    },
  ]);
})();
