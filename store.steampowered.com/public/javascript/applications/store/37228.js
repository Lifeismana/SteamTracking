/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [37228],
    {
      37228: (_, c, e) => {
        "use strict";
        e.r(c), e.d(c, { default: () => R });
        var a = e(7850),
          M = e(72609),
          P = e(29522),
          D = e(40358),
          m = e(65946),
          t = e(74107),
          d = e(18860),
          f = e(48890),
          o = e.n(f),
          O = e(19495);
        function R(u) {
          const {
              rgPackageTuples: I,
              rgHardwareDetails: r,
              selectedProduct: g,
            } = u,
            [L, v, E, n, W] = (0, m.q3)(() => [
              r?.some((s) => s.collection_time_active),
              r?.some(
                (s) =>
                  s.collection_time_active &&
                  s.collection_time_active < M.TS.NOW,
              ),
              I.length,
              r?.find((s) => (0, d.k)(s.reservation_state)),
              r?.find(
                (s) => !!s.packageid && s.packageid === g?.reservation_package,
              ),
            ]),
            C = (0, P.oc)(n?.packageid),
            { data: T } = (0, D.J$)(C);
          if (!r) return null;
          const i = n && (0, d.k)(n.reservation_state);
          if (L) {
            if (v && i)
              return (0, a.jsx)("div", {
                className: o().Message,
                children: t.F5.Localize("#Reservation_InPool"),
              });
            if (!v)
              return (0, a.jsx)("div", {
                className: o().Message,
                children: i
                  ? t.F5.Localize("#Reservation_InPool_NoDate", E)
                  : t.F5.Localize("#Reserationn_NoListJoined", E),
              });
          }
          const A = (0, O.i)(n, W),
            l = T?.name;
          if (A) {
            if (l && i)
              return (0, a.jsx)("div", {
                className: o().Message,
                children: t.F5.Localize(
                  "#Reservation_In_Waitlist_WithName_NoDate",
                  l,
                ),
              });
            if (!i)
              return (0, a.jsx)("div", {
                className: o().Message,
                children: t.F5.Localize("#Reservation_Pool_Closed"),
              });
          }
          return l && i
            ? (0, a.jsx)("div", {
                className: o().Message,
                children: t.F5.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  l,
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
