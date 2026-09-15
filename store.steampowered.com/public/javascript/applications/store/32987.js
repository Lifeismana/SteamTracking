/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [32987],
  {
    48890: (e) => {
      e.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
    },
    32987: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => u });
      var i = s(7850),
        o = s(66418),
        t = s(14987),
        l = s(39777),
        n = s(65946),
        r = s(67936),
        c = s(53807),
        d = s(48890),
        _ = s.n(d),
        v = s(79050);
      function u(e) {
        const {
            rgPackageTuples: a,
            rgHardwareDetails: s,
            selectedProduct: d,
            bAllowMultipleModels: u,
          } = e,
          [g, m, f, N, h] = (0, n.q3)(() => [
            s?.some((e) => e.collection_time_active),
            s?.some(
              (e) =>
                e.collection_time_active && e.collection_time_active < o.TS.NOW,
            ),
            a.length,
            s?.find((e) => (0, c.k)(e.reservation_state)),
            s?.find(
              (e) => !!e.packageid && e.packageid === d?.reservation_package,
            ),
          ]),
          M = (0, t.oc)(N?.packageid),
          { data: k } = (0, l.J$)(M);
        if (!s) return null;
        const L = N && (0, c.k)(N.reservation_state);
        if (g)
          if (u) {
            if (m && L)
              return (0, i.jsx)("div", {
                className: _().Message,
                children: r.F5.Localize("#Reservation_InPool"),
              });
            if (!m)
              return (0, i.jsx)("div", {
                className: _().Message,
                children: L
                  ? r.F5.Localize("#Reservation_InPool_NoDate", f)
                  : r.F5.Localize("#Reserationn_NoListJoined", f),
              });
          } else {
            if (L)
              return (0, i.jsx)("div", {
                className: _().Message,
                children: k?.name
                  ? r.F5.Localize("#Reservation_InPool_WithName", k.name)
                  : r.F5.Localize("#Reservation_InPool_NoName"),
              });
            if (!m)
              return (0, i.jsx)("div", {
                className: _().Message,
                children: r.F5.Localize("#Reservation_NoListJoined_OneModel"),
              });
          }
        const R = (0, v.i)(N, h),
          p = k?.name;
        if (R) {
          if (p && L)
            return (0, i.jsx)("div", {
              className: _().Message,
              children: r.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                p,
              ),
            });
          if (!L)
            return (0, i.jsx)("div", {
              className: _().Message,
              children: r.F5.Localize("#Reservation_Pool_Closed"),
            });
        }
        return p && L
          ? (0, i.jsx)("div", {
              className: _().Message,
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
