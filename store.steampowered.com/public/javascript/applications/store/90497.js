/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [90497],
    {
      90497: (o, l, s) => {
        "use strict";
        s.r(l), s.d(l, { default: () => A });
        var e = s(7850),
          c = s(72609),
          n = s(78603),
          I = s.n(n),
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
              reservationAdvancedSettings: r,
              reservedHardwareDetail: x,
            } = i,
            [v] = (0, O.q3)(() => [r?.waiting_learn_more_url]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              c.iA.logged_in
                ? (0, e.jsx)(h, {
                    hardwareDetail: _,
                    reservedHardwareDetail: x,
                  })
                : (0, e.jsx)("div", {
                    className: (0, E.A)(n.reserverow),
                    children: (0, e.jsx)(D.v, {
                      label: a.F5.Localize("#Reservation_Waitlist_NotSignedIn"),
                      strDialogDesc: a.F5.Localize(
                        "#Reservation_Waitlist_NotSignedIn_Desc",
                      ),
                    }),
                  }),
              (0, e.jsx)("div", {
                className: (0, E.A)(n.expecteddate_str),
                children: (0, t.k)(_.reservation_state)
                  ? a.F5.LocalizeReact("#Reservation_In_Waitlist_Message")
                  : a.F5.LocalizeReact(
                      "#Reservation_In_Waitlist_Message_NotJoin",
                    ),
              }),
              v &&
                (0, e.jsx)("a", {
                  className: C().LearnMoreLink,
                  href: v,
                  children: L.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        }
        function h(i) {
          const { hardwareDetail: _, reservedHardwareDetail: r } = i;
          switch (_.reservation_state) {
            case t.G.k_EPurchaseReservationState_NotReserved:
            case t.G.k_EPurchaseReservationState_Consumed:
            case t.G.k_EPurchaseReservationState_Cancelled:
              return r
                ? (0, e.jsx)(d.$, {
                    hardwareDetail: _,
                    reservedHardwareDetail: r,
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
