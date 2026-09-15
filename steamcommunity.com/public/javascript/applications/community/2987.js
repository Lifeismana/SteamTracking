/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2987],
  {
    48890: (e) => {
      e.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
    },
    32987: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, { default: () => _ });
      var l = a(7850),
        s = a(66418),
        o = a(14987),
        n = a(39777),
        t = a(65946),
        r = a(67936),
        c = a(53807),
        d = a(48890),
        v = a.n(d),
        u = a(79050);
      function _(e) {
        const {
            rgPackageTuples: i,
            rgHardwareDetails: a,
            selectedProduct: d,
            bAllowMultipleModels: _,
          } = e,
          [m, g, f, N, h] = (0, t.q3)(() => [
            null == a ? void 0 : a.some((e) => e.collection_time_active),
            null == a
              ? void 0
              : a.some(
                  (e) =>
                    e.collection_time_active &&
                    e.collection_time_active < s.TS.NOW,
                ),
            i.length,
            null == a ? void 0 : a.find((e) => (0, c.k)(e.reservation_state)),
            null == a
              ? void 0
              : a.find(
                  (e) =>
                    !!e.packageid &&
                    e.packageid ===
                      (null == d ? void 0 : d.reservation_package),
                ),
          ]),
          M = (0, o.oc)(null == N ? void 0 : N.packageid),
          { data: k } = (0, n.J$)(M);
        if (!a) return null;
        const L = N && (0, c.k)(N.reservation_state);
        if (m)
          if (_) {
            if (g && L)
              return (0, l.jsx)("div", {
                className: v().Message,
                children: r.F5.Localize("#Reservation_InPool"),
              });
            if (!g)
              return (0, l.jsx)("div", {
                className: v().Message,
                children: L
                  ? r.F5.Localize("#Reservation_InPool_NoDate", f)
                  : r.F5.Localize("#Reserationn_NoListJoined", f),
              });
          } else {
            if (L)
              return (0, l.jsx)("div", {
                className: v().Message,
                children: (null == k ? void 0 : k.name)
                  ? r.F5.Localize("#Reservation_InPool_WithName", k.name)
                  : r.F5.Localize("#Reservation_InPool_NoName"),
              });
            if (!g)
              return (0, l.jsx)("div", {
                className: v().Message,
                children: r.F5.Localize("#Reservation_NoListJoined_OneModel"),
              });
          }
        const R = (0, u.i)(N, h),
          p = null == k ? void 0 : k.name;
        if (R) {
          if (p && L)
            return (0, l.jsx)("div", {
              className: v().Message,
              children: r.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                p,
              ),
            });
          if (!L)
            return (0, l.jsx)("div", {
              className: v().Message,
              children: r.F5.Localize("#Reservation_Pool_Closed"),
            });
        }
        return p && L
          ? (0, l.jsx)("div", {
              className: v().Message,
              children: r.F5.Localize(
                "#Reservation_OnRegularReserveForModel",
                p,
              ),
            })
          : null;
      }
    },
  },
]);
