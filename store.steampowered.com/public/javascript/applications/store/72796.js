/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [72796],
  {
    58519: (e) => {
      e.exports = { LearnMoreLink: "_39Z_xV6srt_o-RoCqEbes3" };
    },
    72796: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => L });
      var t = s(7850),
        r = s(8527),
        i = s(78603),
        n = s(52038),
        o = s(84547),
        c = s(67936),
        l = s(53807),
        _ = s(75821),
        d = s(23601),
        v = s(18899),
        u = s(52865),
        R = s(65946),
        h = s(78686),
        g = s(58519),
        k = s.n(g);
      function L(e) {
        const {
            hardwareDetail: a,
            reservationAdvancedSettings: s,
            reservedHardwareDetail: _,
            bShuffleInProgress: d,
          } = e,
          [v] = (0, R.q3)(() => [s?.waiting_learn_more_url]);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            r.iA.logged_in
              ? (0, t.jsx)(w, { hardwareDetail: a, reservedHardwareDetail: _ })
              : (0, t.jsx)("div", {
                  className: (0, n.A)(i.reserverow),
                  children: (0, t.jsx)(o.vU, {
                    label: c.F5.Localize("#Reservation_Waitlist_NotSignedIn"),
                    strDialogDesc: c.F5.Localize(
                      "#Reservation_Waitlist_NotSignedIn_Desc",
                    ),
                  }),
                }),
            (0, t.jsx)("div", {
              className: (0, n.A)(i.expecteddate_str),
              children: (0, l.k)(a.reservation_state)
                ? c.F5.LocalizeReact("#Reservation_In_Waitlist_Message")
                : c.F5.LocalizeReact(
                    d
                      ? "#Reservation_Pool_InProgress_NotJoined"
                      : "#Reservation_In_Waitlist_Message_NotJoin",
                  ),
            }),
            v &&
              (0, t.jsx)("a", {
                className: k().LearnMoreLink,
                href: v,
                children: h.Z.Localize("#Button_Learn"),
              }),
          ],
        });
      }
      function w(e) {
        const { hardwareDetail: a, reservedHardwareDetail: s } = e;
        switch (a.reservation_state) {
          case l.G.k_EPurchaseReservationState_NotReserved:
          case l.G.k_EPurchaseReservationState_Consumed:
          case l.G.k_EPurchaseReservationState_Cancelled:
            return s
              ? (0, t.jsx)(_.$, {
                  hardwareDetail: a,
                  reservedHardwareDetail: s,
                })
              : (0, t.jsx)(d.R, {
                  packageid: a.packageid,
                  label: c.F5.Localize("#Reservation_JoinWaitList"),
                });
          case l.G.k_EPurchaseReservationState_Reserved:
          case l.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, t.jsx)(v.p, {
              packageid: a.packageid,
              strAction: c.F5.Localize("#Reservation_Cancel_Waitlist"),
              strDesc: c.F5.Localize("#Reservation_Cancel_Waitlist_Desc"),
            });
          case l.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, t.jsx)(u.b, {});
        }
      }
    },
  },
]);
