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
      var s = a(7850),
        l = a(66418),
        n = a(39777),
        o = a(65946),
        t = a(35380),
        c = a(67936),
        r = a(53807),
        d = a(48890),
        u = a.n(d),
        v = a(79050);
      function _(e) {
        const {
            rgPackageTuples: i,
            rgHardwareDetails: a,
            selectedProduct: d,
          } = e,
          [_, g, m, f, k] = (0, o.q3)(() => [
            null == a ? void 0 : a.some((e) => e.collection_time_active),
            null == a
              ? void 0
              : a.some(
                  (e) =>
                    e.collection_time_active &&
                    e.collection_time_active < l.TS.NOW,
                ),
            i.length,
            null == a ? void 0 : a.find((e) => (0, r.k)(e.reservation_state)),
            null == a
              ? void 0
              : a.find(
                  (e) =>
                    !!e.packageid &&
                    e.packageid ===
                      (null == d ? void 0 : d.reservation_package),
                ),
          ]),
          h = (0, t.oc)(null == f ? void 0 : f.packageid),
          { data: N } = (0, n.J$)(h);
        if (!a) return null;
        const p = f && (0, r.k)(f.reservation_state);
        if (_) {
          if (g && p)
            return (0, s.jsx)("div", {
              className: u().Message,
              children: c.F5.Localize("#Reservation_InPool"),
            });
          if (!g)
            return (0, s.jsx)("div", {
              className: u().Message,
              children: p
                ? c.F5.Localize("#Reservation_InPool_NoDate", m)
                : c.F5.Localize("#Reserationn_NoListJoined", m),
            });
        }
        const R = (0, v.i)(f, k),
          F = null == N ? void 0 : N.name;
        if (R) {
          if (F && p)
            return (0, s.jsx)("div", {
              className: u().Message,
              children: c.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                F,
              ),
            });
          if (!p)
            return (0, s.jsx)("div", {
              className: u().Message,
              children: c.F5.Localize("#Reservation_Pool_Closed"),
            });
        }
        return F && p
          ? (0, s.jsx)("div", {
              className: u().Message,
              children: c.F5.Localize(
                "#Reservation_OnRegularReserveForModel",
                F,
              ),
            })
          : null;
      }
    },
  },
]);
