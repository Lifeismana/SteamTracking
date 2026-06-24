/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2796],
  {
    58519: (e) => {
      e.exports = { LearnMoreLink: "_39Z_xV6srt_o-RoCqEbes3" };
    },
    72796: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => L });
      var s = t(7850),
        r = t(8527),
        i = t(78603),
        n = t(52038),
        c = t(84547),
        l = t(67936),
        o = t(53807),
        _ = t(75821),
        d = t(23601),
        v = t(18899),
        u = t(52865),
        R = t(65946),
        h = t(78686),
        k = t(58519),
        g = t.n(k);
      function L(e) {
        const {
            hardwareDetail: a,
            reservationAdvancedSettings: t,
            reservedHardwareDetail: _,
          } = e,
          [d] = (0, R.q3)(() => [
            null == t ? void 0 : t.waiting_learn_more_url,
          ]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            r.iA.logged_in
              ? (0, s.jsx)(w, { hardwareDetail: a, reservedHardwareDetail: _ })
              : (0, s.jsx)("div", {
                  className: (0, n.A)(i.reserverow),
                  children: (0, s.jsx)(c.vU, {
                    label: l.F5.Localize("#Reservation_Waitlist_NotSignedIn"),
                    strDialogDesc: l.F5.Localize(
                      "#Reservation_Waitlist_NotSignedIn_Desc",
                    ),
                  }),
                }),
            (0, s.jsx)("div", {
              className: (0, n.A)(i.expecteddate_str),
              children: (0, o.k)(a.reservation_state)
                ? l.F5.LocalizeReact("#Reservation_In_Waitlist_Message")
                : l.F5.LocalizeReact(
                    "#Reservation_In_Waitlist_Message_NotJoin",
                  ),
            }),
            d &&
              (0, s.jsx)("a", {
                className: g().LearnMoreLink,
                href: d,
                children: h.Z.Localize("#Button_Learn"),
              }),
          ],
        });
      }
      function w(e) {
        const { hardwareDetail: a, reservedHardwareDetail: t } = e;
        switch (a.reservation_state) {
          case o.G.k_EPurchaseReservationState_NotReserved:
          case o.G.k_EPurchaseReservationState_Consumed:
          case o.G.k_EPurchaseReservationState_Cancelled:
            return t
              ? (0, s.jsx)(_.$, {
                  hardwareDetail: a,
                  reservedHardwareDetail: t,
                })
              : (0, s.jsx)(d.R, {
                  packageid: a.packageid,
                  label: l.F5.Localize("#Reservation_JoinWaitList"),
                });
          case o.G.k_EPurchaseReservationState_Reserved:
          case o.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, s.jsx)(v.p, {
              packageid: a.packageid,
              strAction: l.F5.Localize("#Reservation_Cancel_Waitlist"),
              strDesc: l.F5.Localize("#Reservation_Cancel_Waitlist_Desc"),
            });
          case o.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, s.jsx)(u.b, {});
        }
      }
    },
  },
]);
