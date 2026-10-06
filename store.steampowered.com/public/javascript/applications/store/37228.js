/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [37228],
    {
      37228: (d, v, e) => {
        "use strict";
        e.r(v), e.d(v, { default: () => O });
        var a = e(7850),
          E = e(72609),
          P = e(29522),
          D = e(40358),
          f = e(65946),
          s = e(74107),
          M = e(18860),
          R = e(48890),
          o = e.n(R),
          u = e(19495);
        function O(I) {
          const {
              rgPackageTuples: L,
              rgHardwareDetails: n,
              selectedProduct: g,
              bAllowMultipleModels: N,
            } = I,
            [W, _, m, l, h] = (0, f.q3)(() => [
              n?.some((t) => t.collection_time_active),
              n?.some(
                (t) =>
                  t.collection_time_active &&
                  t.collection_time_active < E.TS.NOW,
              ),
              L.length,
              n?.find((t) => (0, M.k)(t.reservation_state)),
              n?.find(
                (t) => !!t.packageid && t.packageid === g?.reservation_package,
              ),
            ]),
            C = (0, P.oc)(l?.packageid),
            { data: c } = (0, D.J$)(C);
          if (!n) return null;
          const i = l && (0, M.k)(l.reservation_state);
          if (W)
            if (N) {
              if (_ && i)
                return (0, a.jsx)("div", {
                  className: o().Message,
                  children: s.F5.Localize("#Reservation_InPool"),
                });
              if (!_)
                return (0, a.jsx)("div", {
                  className: o().Message,
                  children: i
                    ? s.F5.Localize("#Reservation_InPool_NoDate", m)
                    : s.F5.Localize("#Reserationn_NoListJoined", m),
                });
            } else {
              if (i)
                return (0, a.jsx)("div", {
                  className: o().Message,
                  children: c?.name
                    ? s.F5.Localize("#Reservation_InPool_WithName", c.name)
                    : s.F5.Localize("#Reservation_InPool_NoName"),
                });
              if (!_)
                return (0, a.jsx)("div", {
                  className: o().Message,
                  children: s.F5.Localize("#Reservation_NoListJoined_OneModel"),
                });
            }
          const A = (0, u.i)(l, h),
            r = c?.name;
          if (A) {
            if (r && i)
              return (0, a.jsx)("div", {
                className: o().Message,
                children: s.F5.Localize(
                  "#Reservation_In_Waitlist_WithName_NoDate",
                  r,
                ),
              });
            if (!i)
              return (0, a.jsx)("div", {
                className: o().Message,
                children: s.F5.Localize("#Reservation_Pool_Closed"),
              });
          }
          return r && i
            ? (0, a.jsx)("div", {
                className: o().Message,
                children: s.F5.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  r,
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
