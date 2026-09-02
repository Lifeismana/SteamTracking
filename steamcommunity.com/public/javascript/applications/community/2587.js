/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2587],
    {
      2587: (u, c, e) => {
        "use strict";
        e.r(c), e.d(c, { ShuffleActions: () => T, default: () => p });
        var s = e(7850),
          M = e(85367),
          O = e(72609),
          d = e(39905),
          R = e(3348),
          E = e(65946),
          v = e(90626),
          n = e(78603),
          r = e.n(n),
          L = e(71421),
          i = e(36707),
          P = e(18210),
          a = e(74107),
          t = e(18860),
          j = e(52917),
          g = e(89926),
          W = e(99880),
          B = e(64054),
          K = e(31960),
          S = e(15843),
          m = e.n(S);
        function p(h) {
          var l;
          const {
              hardwareDetail: _,
              reservationAdvancedSettings: o,
              storeItemReleaseInfo: z,
              bShuffleInProgress: F,
              bHasSomeReservation: N,
            } = h,
            [f, D] = (0, E.q3)(() => [
              o == null ? void 0 : o.collection_rtime_end,
              o == null ? void 0 : o.collection_time_learn_more_url,
            ]),
            [G, J] = (0, v.useState)({}),
            x = (0, v.useCallback)(
              (A) => {
                J((y) => ({ ...y, [_.packageid]: A }));
              },
              [_],
            ),
            k = (0, R.VM)(z);
          if (F)
            return (0, s.jsxs)("div", {
              className: (0, i.A)(n.expecteddate_str),
              children: [
                a.F5.Localize(
                  N
                    ? "#Reservation_Pool_InProgress_Joined"
                    : "#Reservation_Pool_InProgress_NotJoined",
                ),
                D &&
                  (0, s.jsx)("a", {
                    className: m().LearnMoreLink,
                    href: D,
                    children: d.Z.Localize("#Button_Learn"),
                  }),
              ],
            });
          const I = (0, t.k)(_.reservation_state),
            C = !!o && !!o.collection_time_term_and_conditions_url,
            U = (l = G[_.packageid]) != null ? l : !C;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: (0, i.A)(n.expecteddate_str),
                children: [
                  a.F5.LocalizeReact(
                    "#Reservation_InPool_Message",
                    f ? (0, s.jsx)(j.m, { rtime: f }) : k,
                  ),
                  D &&
                    (0, s.jsx)("a", {
                      className: m().LearnMoreLink,
                      href: D,
                      children: d.Z.Localize("#Button_Learn"),
                    }),
                ],
              }),
              C &&
                (0, s.jsx)(
                  M.S,
                  {
                    checked: U || I,
                    onChange: x,
                    "data-checkbox": "",
                    disabled: I,
                    children: (0, s.jsxs)("div", {
                      className: m().Terms,
                      children: [
                        " ",
                        (0, P.oW)(
                          a.F5.Localize("#Reservation_JoinPool_Terms"),
                          (0, s.jsx)("a", {
                            href: o.collection_time_term_and_conditions_url,
                            className: m().TOCLink,
                            onClick: (A) => A.stopPropagation(),
                          }),
                        ),
                      ],
                    }),
                  },
                  _.packageid,
                ),
              O.iA.logged_in
                ? (0, s.jsx)(T, {
                    hardwareDetail: _,
                    bUserAcceptedTerms: !C || U,
                    onLeaveShuffleList: () => x(!1),
                  })
                : (0, s.jsx)("div", {
                    className: (0, i.A)(n.reserverow),
                    children: (0, s.jsx)(g.v, {
                      label: a.F5.Localize("#Reservation_Pool_NotSignedIn"),
                      strDialogDesc: a.F5.Localize(
                        "#Reservation_Pool_NotSignedIn_Desc",
                      ),
                    }),
                  }),
            ],
          });
        }
        function T(h) {
          const {
            hardwareDetail: l,
            bUserAcceptedTerms: _,
            onLeaveShuffleList: o,
          } = h;
          switch (l.reservation_state) {
            case t.G.k_EPurchaseReservationState_NotReserved:
            case t.G.k_EPurchaseReservationState_Consumed:
            case t.G.k_EPurchaseReservationState_Cancelled:
              return (0, s.jsx)(L.Gq, {
                toolTipContent: _
                  ? void 0
                  : a.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                children: (0, s.jsx)(W.R, {
                  bInputDisabled: !_,
                  packageid: l.packageid,
                  label: a.F5.Localize("#Reservation_JoinPool"),
                }),
              });
            case t.G.k_EPurchaseReservationState_Reserved:
            case t.G.k_EPurchaseReservationState_Allocated:
            default:
              return (0, s.jsx)(B.p, {
                packageid: l.packageid,
                strAction: a.F5.Localize("#Reservation_Cancel_Pool"),
                strDesc: a.F5.Localize("#Reservation_Cancel_Pool_Desc"),
                onCancelSucceeded: o,
              });
            case t.G.k_EPurchaseReservationState_UnavailableRegion:
              return (0, s.jsx)(K.b, {});
          }
        }
      },
      52917: (u, c, e) => {
        "use strict";
        e.d(c, { R: () => v, m: () => E });
        var s = e(7850),
          M = e(15252),
          O = e(99631),
          d = e(72429),
          R = e(11243);
        function E(n) {
          const { rtime: r } = n;
          return r
            ? (0, s.jsx)(d.K4, { dateAndTime: r, bSingleLine: !0 })
            : null;
        }
        function v(n) {
          const { rtime: r, onValueChange: L, label: i, tooltip: P } = n;
          let a;
          return (
            r > 0 && (a = (0, s.jsx)(E, { rtime: r })),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)(M.EY, {
                  children: [i, P && (0, s.jsx)(R.o, { tooltip: P })],
                }),
                (0, s.jsx)(O.I, {
                  value: r,
                  valueToString: (t) => t.toString(),
                  valueFromString: (t) => Number.parseInt(t),
                  clearable: !1,
                  onValueChange: (t) => {
                    L(Number(t));
                  },
                  afterContent: a,
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
        };
      },
    },
  ]);
})();
