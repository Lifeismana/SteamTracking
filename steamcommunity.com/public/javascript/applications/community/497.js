/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [497],
    {
      90497: (o, l, s) => {
        "use strict";
        s.r(l), s.d(l, { default: () => A });
        var e = s(7850),
          v = s(72609),
          r = s(78603),
          I = s.n(r),
          E = s(36707),
          D = s(89926),
          a = s(74107),
          t = s(18860),
          d = s(50168),
          P = s(99880),
          R = s(64054),
          M = s(31960),
          O = s(65946),
          L = s(39905),
          W = s(58519),
          C = s.n(W);
        function A(i) {
          const {
              hardwareDetail: _,
              reservationAdvancedSettings: n,
              reservedHardwareDetail: x,
            } = i,
            [c] = (0, O.q3)(() => [
              n == null ? void 0 : n.waiting_learn_more_url,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v.iA.logged_in
                ? (0, e.jsx)(h, {
                    hardwareDetail: _,
                    reservedHardwareDetail: x,
                  })
                : (0, e.jsx)("div", {
                    className: (0, E.A)(r.reserverow),
                    children: (0, e.jsx)(D.v, {
                      label: a.F5.Localize("#Reservation_Waitlist_NotSignedIn"),
                      strDialogDesc: a.F5.Localize(
                        "#Reservation_Waitlist_NotSignedIn_Desc",
                      ),
                    }),
                  }),
              (0, e.jsx)("div", {
                className: (0, E.A)(r.expecteddate_str),
                children: (0, t.k)(_.reservation_state)
                  ? a.F5.LocalizeReact("#Reservation_In_Waitlist_Message")
                  : a.F5.LocalizeReact(
                      "#Reservation_In_Waitlist_Message_NotJoin",
                    ),
              }),
              c &&
                (0, e.jsx)("a", {
                  className: C().LearnMoreLink,
                  href: c,
                  children: L.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        }
        function h(i) {
          const { hardwareDetail: _, reservedHardwareDetail: n } = i;
          switch (_.reservation_state) {
            case t.G.k_EPurchaseReservationState_NotReserved:
            case t.G.k_EPurchaseReservationState_Consumed:
            case t.G.k_EPurchaseReservationState_Cancelled:
              return n
                ? (0, e.jsx)(d.$, {
                    hardwareDetail: _,
                    reservedHardwareDetail: n,
                  })
                : (0, e.jsx)(P.R, {
                    packageid: _.packageid,
                    label: a.F5.Localize("#Reservation_JoinWaitList"),
                  });
            case t.G.k_EPurchaseReservationState_Reserved:
            case t.G.k_EPurchaseReservationState_Allocated:
            default:
              return (0, e.jsx)(R.p, {
                packageid: _.packageid,
                strAction: a.F5.Localize("#Reservation_Cancel_Waitlist"),
                strDesc: a.F5.Localize("#Reservation_Cancel_Waitlist_Desc"),
              });
            case t.G.k_EPurchaseReservationState_UnavailableRegion:
              return (0, e.jsx)(M.b, {});
          }
        }
      },
      58519: (o) => {
        o.exports = { LearnMoreLink: "_39Z_xV6srt_o-RoCqEbes3" };
      },
    },
  ]);
})();
