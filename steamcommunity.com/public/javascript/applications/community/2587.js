/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2587],
    {
      2587: (u, v, e) => {
        "use strict";
        e.r(v), e.d(v, { ShuffleActions: () => x, default: () => p });
        var s = e(7850),
          M = e(85367),
          O = e(72609),
          P = e(39905),
          L = e(65946),
          c = e(90626),
          i = e(78603),
          m = e.n(i),
          n = e(71421),
          d = e(36707),
          R = e(18210),
          a = e(74107),
          _ = e(18860),
          r = e(52917),
          I = e(89926),
          g = e(50168),
          W = e(99880),
          B = e(64054),
          K = e(31960),
          S = e(15843),
          E = e.n(S);
        function p(h) {
          var l;
          const {
              hardwareDetail: o,
              reservationAdvancedSettings: t,
              bShuffleInProgress: C,
              bHasSomeReservation: z,
              reservedHardwareDetail: N,
            } = h,
            [F, D, G] = (0, L.q3)(() => [
              t == null ? void 0 : t.collection_rtime_end,
              t == null ? void 0 : t.collection_time_learn_more_url,
              !!(t != null && t.collection_time_allow_multiple_models),
            ]),
            [k, b] = (0, c.useState)({}),
            f = (0, c.useCallback)(
              (T) => {
                b((H) => ({ ...H, [o.packageid]: T }));
              },
              [o],
            );
          if (C)
            return (0, s.jsxs)("div", {
              className: (0, d.A)(i.expecteddate_str),
              children: [
                a.F5.Localize(
                  z
                    ? "#Reservation_Pool_InProgress_Joined"
                    : "#Reservation_Pool_InProgress_NotJoined",
                ),
                D &&
                  (0, s.jsx)("a", {
                    className: E().LearnMoreLink,
                    href: D,
                    children: P.Z.Localize("#Button_Learn"),
                  }),
              ],
            });
          const U = (0, _.k)(o.reservation_state),
            A = !!t && !!t.collection_time_term_and_conditions_url,
            j = (l = k[o.packageid]) != null ? l : !A;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: (0, d.A)(i.expecteddate_str),
                children: [
                  (0, s.jsx)("div", {
                    className: E().PoolMessage,
                    children: a.F5.LocalizeReact(
                      "#Reservation_InPool_Message_Date",
                      (0, s.jsx)(r.m, { rtime: F || o.collection_time_active }),
                    ),
                  }),
                  D &&
                    (0, s.jsx)("a", {
                      className: E().LearnMoreLink,
                      href: D,
                      children: P.Z.Localize("#Button_Learn"),
                    }),
                ],
              }),
              A &&
                (0, s.jsx)(
                  M.S,
                  {
                    checked: j || U,
                    onChange: f,
                    "data-checkbox": "",
                    disabled: U,
                    children: (0, s.jsxs)("div", {
                      className: E().Terms,
                      children: [
                        " ",
                        (0, R.oW)(
                          a.F5.Localize("#Reservation_JoinPool_Terms"),
                          (0, s.jsx)("a", {
                            href: t.collection_time_term_and_conditions_url,
                            className: E().TOCLink,
                            onClick: (T) => T.stopPropagation(),
                          }),
                        ),
                      ],
                    }),
                  },
                  o.packageid,
                ),
              O.iA.logged_in
                ? (0, s.jsx)(x, {
                    hardwareDetail: o,
                    reservedHardwareDetail: G ? void 0 : N,
                    bUserAcceptedTerms: !A || j,
                    onLeaveShuffleList: () => f(!1),
                  })
                : (0, s.jsx)("div", {
                    className: (0, d.A)(i.reserverow),
                    children: (0, s.jsx)(I.v, {
                      label: a.F5.Localize("#Reservation_Pool_NotSignedIn"),
                      strDialogDesc: a.F5.Localize(
                        "#Reservation_Pool_NotSignedIn_Desc",
                      ),
                    }),
                  }),
            ],
          });
        }
        function x(h) {
          const {
            hardwareDetail: l,
            reservedHardwareDetail: o,
            bUserAcceptedTerms: t,
            onLeaveShuffleList: C,
          } = h;
          switch (l.reservation_state) {
            case _.G.k_EPurchaseReservationState_NotReserved:
            case _.G.k_EPurchaseReservationState_Consumed:
            case _.G.k_EPurchaseReservationState_Cancelled:
              return o && o.packageid !== l.packageid
                ? (0, s.jsx)(n.Gq, {
                    toolTipContent: t
                      ? void 0
                      : a.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                    children: (0, s.jsx)(g.$, {
                      hardwareDetail: l,
                      reservedHardwareDetail: o,
                      bInputDisabled: !t,
                      bShufflePool: !0,
                    }),
                  })
                : (0, s.jsx)(n.Gq, {
                    toolTipContent: t
                      ? void 0
                      : a.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                    children: (0, s.jsx)(W.R, {
                      bInputDisabled: !t,
                      packageid: l.packageid,
                      label: a.F5.Localize("#Reservation_JoinPool"),
                    }),
                  });
            case _.G.k_EPurchaseReservationState_Reserved:
            case _.G.k_EPurchaseReservationState_Allocated:
            default:
              return (0, s.jsx)(B.p, {
                packageid: l.packageid,
                strAction: a.F5.Localize("#Reservation_Cancel_Pool"),
                strDesc: a.F5.Localize("#Reservation_Cancel_Pool_Desc"),
                onCancelSucceeded: C,
              });
            case _.G.k_EPurchaseReservationState_UnavailableRegion:
              return (0, s.jsx)(K.b, {});
          }
        }
      },
      52917: (u, v, e) => {
        "use strict";
        e.d(v, { R: () => i, m: () => c });
        var s = e(7850),
          M = e(15252),
          O = e(99631),
          P = e(18057),
          L = e(11243);
        function c(m) {
          const { rtime: n } = m;
          return n
            ? (0, s.jsx)(P.K4, { dateAndTime: n, bSingleLine: !0 })
            : null;
        }
        function i(m) {
          const { rtime: n, onValueChange: d, label: R, tooltip: a } = m;
          let _;
          return (
            n > 0 && (_ = (0, s.jsx)(c, { rtime: n })),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)(M.EY, {
                  children: [R, a && (0, s.jsx)(L.o, { tooltip: a })],
                }),
                (0, s.jsx)(O.I, {
                  value: n,
                  valueToString: (r) => r.toString(),
                  valueFromString: (r) => Number.parseInt(r),
                  clearable: !1,
                  onValueChange: (r) => {
                    d(Number(r));
                  },
                  afterContent: _,
                }),
              ],
            })
          );
        }
      },
      15843: (u) => {
        u.exports = {
          TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
          LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
          Terms: "_2oU42aqXAKCuhoH2GmPkWD",
          PoolMessage: "_3-_nsU7fX4Uep5Nr-eATPw",
        };
      },
    },
  ]);
})();
