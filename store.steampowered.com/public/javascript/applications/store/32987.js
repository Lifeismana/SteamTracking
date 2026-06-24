/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [32987],
  {
    48890: (e) => {
      e.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
    },
    32987: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, { default: () => u });
      var a = i(7850),
        t = i(8527),
        o = i(65946),
        n = i(67936),
        l = i(53807),
        r = i(48890),
        c = i.n(r),
        _ = i(35380),
        d = i(39777);
      function u(e) {
        const {
            rgPackageTuples: s,
            rgHardwareDetails: i,
            selectedProduct: r,
          } = e,
          [u, v, g, f, m] = (0, o.q3)(() => [
            i?.some((e) => e.collection_time_active),
            i?.some(
              (e) =>
                e.collection_time_active && e.collection_time_active < t.TS.NOW,
            ),
            s.length,
            i?.find((e) => (0, l.k)(e.reservation_state)),
            i?.at(0),
          ]),
          h = (0, _.oc)(f?.packageid),
          { data: N } = (0, d.J$)(h);
        if (!i) return null;
        const k = f && (0, l.k)(f.reservation_state);
        if (u) {
          if (v && k)
            return (0, a.jsx)("div", {
              className: c().Message,
              children: n.F5.Localize("#Reservation_InPool"),
            });
          if (!v)
            return (0, a.jsx)("div", {
              className: c().Message,
              children: k
                ? n.F5.Localize("#Reservation_InPool_NoDate", g)
                : n.F5.Localize("#Reserationn_NoListJoined", g),
            });
        }
        const R =
            (k && f?.position_is_waitlist) || (!k && m?.queue_in_waitlist),
          p = N?.name;
        if (R) {
          if (p && k)
            return (0, a.jsx)("div", {
              className: c().Message,
              children: n.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                p,
              ),
            });
          if (!k)
            return (0, a.jsx)("div", {
              className: c().Message,
              children: n.F5.Localize("#Reservation_Pool_Closed"),
            });
        }
        return p && k
          ? (0, a.jsx)("div", {
              className: c().Message,
              children: n.F5.Localize(
                "#Reservation_OnRegularReserveForModel",
                p,
              ),
            })
          : null;
      }
    },
  },
]);
