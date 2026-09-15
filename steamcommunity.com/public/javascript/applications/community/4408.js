/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4408],
  {
    15843: (e) => {
      e.exports = {
        TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
        LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
        Terms: "_2oU42aqXAKCuhoH2GmPkWD",
        PoolMessage: "_3-_nsU7fX4Uep5Nr-eATPw",
      };
    },
    64408: (e, a, o) => {
      "use strict";
      o.r(a), o.d(a, { ShuffleActions: () => R, default: () => f });
      var t = o(7850),
        r = o(52908),
        s = o(66418),
        i = o(78686),
        n = o(65946),
        l = o(90626),
        c = o(78603),
        d = o(32754),
        _ = o(52038),
        u = o(61859),
        v = o(67936),
        m = o(53807),
        h = o(73694),
        g = o(84547),
        k = o(75821),
        p = o(23601),
        x = o(18899),
        j = o(52865),
        L = o(15843),
        P = o.n(L);
      function f(e) {
        var a;
        const {
            hardwareDetail: o,
            reservationAdvancedSettings: d,
            bShuffleInProgress: k,
            bHasSomeReservation: p,
            reservedHardwareDetail: x,
          } = e,
          [j, L, f] = (0, n.q3)(() => [
            null == d ? void 0 : d.collection_rtime_end,
            null == d ? void 0 : d.collection_time_learn_more_url,
            !!(null == d ? void 0 : d.collection_time_allow_multiple_models),
          ]),
          [b, S] = (0, l.useState)({}),
          C = (0, l.useCallback)(
            (e) => {
              S((a) => ({ ...a, [o.packageid]: e }));
            },
            [o],
          );
        if (k)
          return (0, t.jsxs)("div", {
            className: (0, _.A)(c.expecteddate_str),
            children: [
              v.F5.Localize(
                p
                  ? "#Reservation_Pool_InProgress_Joined"
                  : "#Reservation_Pool_InProgress_NotJoined",
              ),
              L &&
                (0, t.jsx)("a", {
                  className: P().LearnMoreLink,
                  href: L,
                  children: i.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        const D = (0, m.k)(o.reservation_state),
          N = !!d && !!d.collection_time_term_and_conditions_url,
          w = null !== (a = b[o.packageid]) && void 0 !== a ? a : !N;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: (0, _.A)(c.expecteddate_str),
              children: [
                (0, t.jsx)("div", {
                  className: P().PoolMessage,
                  children: v.F5.LocalizeReact(
                    "#Reservation_InPool_Message_Date",
                    (0, t.jsx)(h.m, { rtime: j || o.collection_time_active }),
                  ),
                }),
                L &&
                  (0, t.jsx)("a", {
                    className: P().LearnMoreLink,
                    href: L,
                    children: i.Z.Localize("#Button_Learn"),
                  }),
              ],
            }),
            N &&
              (0, t.jsx)(
                r.S,
                {
                  checked: w || D,
                  onChange: C,
                  "data-checkbox": "",
                  disabled: D,
                  children: (0, t.jsxs)("div", {
                    className: P().Terms,
                    children: [
                      " ",
                      (0, u.oW)(
                        v.F5.Localize("#Reservation_JoinPool_Terms"),
                        (0, t.jsx)("a", {
                          href: d.collection_time_term_and_conditions_url,
                          className: P().TOCLink,
                          onClick: (e) => e.stopPropagation(),
                        }),
                      ),
                    ],
                  }),
                },
                o.packageid,
              ),
            s.iA.logged_in
              ? (0, t.jsx)(R, {
                  hardwareDetail: o,
                  reservedHardwareDetail: f ? void 0 : x,
                  bUserAcceptedTerms: !N || w,
                  onLeaveShuffleList: () => C(!1),
                })
              : (0, t.jsx)("div", {
                  className: (0, _.A)(c.reserverow),
                  children: (0, t.jsx)(g.v, {
                    label: v.F5.Localize("#Reservation_Pool_NotSignedIn"),
                    strDialogDesc: v.F5.Localize(
                      "#Reservation_Pool_NotSignedIn_Desc",
                    ),
                  }),
                }),
          ],
        });
      }
      function R(e) {
        const {
          hardwareDetail: a,
          reservedHardwareDetail: o,
          bUserAcceptedTerms: r,
          onLeaveShuffleList: s,
        } = e;
        switch (a.reservation_state) {
          case m.G.k_EPurchaseReservationState_NotReserved:
          case m.G.k_EPurchaseReservationState_Consumed:
          case m.G.k_EPurchaseReservationState_Cancelled:
            return o && o.packageid !== a.packageid
              ? (0, t.jsx)(d.Gq, {
                  toolTipContent: r
                    ? void 0
                    : v.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                  children: (0, t.jsx)(k.$, {
                    hardwareDetail: a,
                    reservedHardwareDetail: o,
                    bInputDisabled: !r,
                    bShufflePool: !0,
                  }),
                })
              : (0, t.jsx)(d.Gq, {
                  toolTipContent: r
                    ? void 0
                    : v.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                  children: (0, t.jsx)(p.R, {
                    bInputDisabled: !r,
                    packageid: a.packageid,
                    label: v.F5.Localize("#Reservation_JoinPool"),
                  }),
                });
          case m.G.k_EPurchaseReservationState_Reserved:
          case m.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, t.jsx)(x.p, {
              packageid: a.packageid,
              strAction: v.F5.Localize("#Reservation_Cancel_Pool"),
              strDesc: v.F5.Localize("#Reservation_Cancel_Pool_Desc"),
              onCancelSucceeded: s,
            });
          case m.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, t.jsx)(j.b, {});
        }
      }
    },
    73694: (e, a, o) => {
      "use strict";
      o.d(a, { R: () => c, m: () => l });
      var t = o(7850),
        r = o(20187),
        s = o(48906),
        i = o(34121),
        n = o(26408);
      function l(e) {
        const { rtime: a } = e;
        return a ? (0, t.jsx)(i.K4, { dateAndTime: a, bSingleLine: !0 }) : null;
      }
      function c(e) {
        const { rtime: a, onValueChange: o, label: i, tooltip: c } = e;
        let d;
        return (
          a > 0 && (d = (0, t.jsx)(l, { rtime: a })),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(r.EY, {
                children: [i, c && (0, t.jsx)(n.o, { tooltip: c })],
              }),
              (0, t.jsx)(s.I, {
                value: a,
                valueToString: (e) => e.toString(),
                valueFromString: (e) => Number.parseInt(e),
                clearable: !1,
                onValueChange: (e) => {
                  o(Number(e));
                },
                afterContent: d,
              }),
            ],
          })
        );
      }
    },
  },
]);
