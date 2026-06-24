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
      a.r(i), a.d(i, { default: () => v });
      var o = a(7850),
        s = a(8527),
        l = a(65946),
        t = a(67936),
        n = a(53807),
        c = a(48890),
        r = a.n(c),
        d = a(35380),
        _ = a(39777);
      function v(e) {
        const {
            rgPackageTuples: i,
            rgHardwareDetails: a,
            selectedProduct: c,
          } = e,
          [v, u, m, g] = (0, l.q3)(() => [
            null == a ? void 0 : a.some((e) => e.collection_time_active),
            null == a
              ? void 0
              : a.some(
                  (e) =>
                    e.collection_time_active &&
                    e.collection_time_active < s.TS.NOW,
                ),
            i.length,
            null == a ? void 0 : a.find((e) => (0, n.k)(e.reservation_state)),
          ]),
          N = (0, d.oc)(null == g ? void 0 : g.packageid),
          { data: h } = (0, _.J$)(N);
        if (!a) return null;
        if (v)
          return u
            ? (0, o.jsx)("div", {
                className: r().Message,
                children: g
                  ? t.F5.Localize("#Reservation_InPool_NoDate")
                  : t.F5.Localize("#Reservation_Pool_Closed"),
              })
            : (0, o.jsx)("div", {
                className: r().Message,
                children: g
                  ? t.F5.Localize("#Reservation_InPool_NoDate", m)
                  : t.F5.Localize("#Reserationn_NoListJoined", m),
              });
        const k = g && (0, n.k)(g.reservation_state),
          p =
            (k && (null == g ? void 0 : g.position_is_waitlist)) ||
            (!k && (null == g ? void 0 : g.position_is_waitlist)),
          R = null == h ? void 0 : h.name;
        return p && R && k
          ? (0, o.jsx)("div", {
              className: r().Message,
              children: t.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                R,
              ),
            })
          : R && k
            ? (0, o.jsx)("div", {
                className: r().Message,
                children: t.F5.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  R,
                ),
              })
            : null;
      }
    },
  },
]);
