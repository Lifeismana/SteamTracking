/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7228],
    {
      37228: (_, c, e) => {
        "use strict";
        e.r(c), e.d(c, { default: () => I });
        var o = e(7850),
          M = e(72609),
          P = e(29522),
          D = e(40358),
          f = e(65946),
          a = e(74107),
          d = e(18860),
          O = e(48890),
          i = e.n(O),
          R = e(19495);
        function I(g) {
          const {
              rgPackageTuples: L,
              rgHardwareDetails: s,
              selectedProduct: v,
            } = g,
            [W, u, E, n, C] = (0, f.q3)(() => [
              s == null ? void 0 : s.some((t) => t.collection_time_active),
              s == null
                ? void 0
                : s.some(
                    (t) =>
                      t.collection_time_active &&
                      t.collection_time_active < M.TS.NOW,
                  ),
              L.length,
              s == null ? void 0 : s.find((t) => (0, d.k)(t.reservation_state)),
              s == null
                ? void 0
                : s.find(
                    (t) =>
                      !!t.packageid &&
                      t.packageid ===
                        (v == null ? void 0 : v.reservation_package),
                  ),
            ]),
            T = (0, P.oc)(n == null ? void 0 : n.packageid),
            { data: m } = (0, D.J$)(T);
          if (!s) return null;
          const l = n && (0, d.k)(n.reservation_state);
          if (W) {
            if (u && l)
              return (0, o.jsx)("div", {
                className: i().Message,
                children: a.F5.Localize("#Reservation_InPool"),
              });
            if (!u)
              return (0, o.jsx)("div", {
                className: i().Message,
                children: l
                  ? a.F5.Localize("#Reservation_InPool_NoDate", E)
                  : a.F5.Localize("#Reserationn_NoListJoined", E),
              });
          }
          const A = (0, R.i)(n, C),
            r = m == null ? void 0 : m.name;
          if (A) {
            if (r && l)
              return (0, o.jsx)("div", {
                className: i().Message,
                children: a.F5.Localize(
                  "#Reservation_In_Waitlist_WithName_NoDate",
                  r,
                ),
              });
            if (!l)
              return (0, o.jsx)("div", {
                className: i().Message,
                children: a.F5.Localize("#Reservation_Pool_Closed"),
              });
          }
          return r && l
            ? (0, o.jsx)("div", {
                className: i().Message,
                children: a.F5.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  r,
                ),
              })
            : null;
        }
      },
      48890: (_) => {
        _.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
      },
    },
  ]);
})();
