/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [7343],
    {
      94381: (l, m, e) => {
        "use strict";
        e.d(m, { S: () => I });
        var o = e(7850),
          f = e(68031),
          h = e(31857);
        function r(t) {
          return (0, o.jsx)(h.I, {
            ...t,
            viewBoxSize: 16,
            children: (0, o.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var d = e(21895),
          L = e(64238),
          x = e.n(L),
          s = e(80549);
        function I(t) {
          const {
              checked: a,
              onChange: p,
              disabled: z,
              children: C,
              ref: G,
              variant: M,
              color: N,
              align: k = "center",
              ...F
            } = t,
            P = a === "indeterminate",
            g = P ? S : r,
            R = () => {
              z || (p && p(P ? !0 : !a));
            },
            D = (n) => {
              z ||
                (n.key === " " &&
                  (R(), n.preventDefault(), n.stopPropagation()));
            },
            c = (0, s.f)("Checkbox", M);
          return (0, o.jsxs)(f.s, {
            align: k,
            ref: G,
            role: "checkbox",
            "aria-checked": P ? "mixed" : a,
            "data-state": v(a),
            className: x()(d.Root, d[`Variant-${c}`], z && d.Disabled),
            onClick: R,
            tabIndex: 0,
            onKeyDown: D,
            cursor: "default",
            "aria-disabled": z,
            "data-accent-color": N,
            ...F,
            children: [
              (0, o.jsx)("div", {
                className: d.Checkbox,
                children: a && (0, o.jsx)(g, { className: d.Icon }),
              }),
              C,
            ],
          });
        }
        function v(t) {
          return t === "indeterminate" ? t : t ? "checked" : "unchecked";
        }
        function S(t) {
          return (0, o.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, o.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      31857: (l, m, e) => {
        "use strict";
        e.d(m, { I: () => L });
        var o = e(7850),
          f = e(69289),
          h = e(8928),
          r = e(16619),
          d = e.n(r);
        function L(s) {
          const { viewBoxSize: I = 20, ...v } = s,
            S = v.size ? void 0 : r.IconSizeDefault;
          return (0, o.jsx)("svg", {
            viewBox: `0 0 ${I} ${I}`,
            ...(0, f.mz)({ className: S, ...v }, x),
          });
        }
        const x = [
          ...h.L,
          {
            prop: "size",
            responsive: !0,
            className: (s) => r[`IconSize-${s}`],
          },
          {
            prop: "color",
            className: r.Color,
            cssProperty: (s) => ["--icon-color", (0, f.w7)(s)],
          },
          {
            prop: "hitSlop",
            className: r.HitSlop,
            cssProperty: (s) => [
              "--hit-slop-custom",
              typeof s == "string" ? s : "",
            ],
          },
          h.h.find(({ prop: s }) => s === "cursor"),
        ];
      },
      7343: (l, m, e) => {
        "use strict";
        e.r(m), e.d(m, { ShuffleActions: () => D, default: () => R });
        var o = e(7850),
          f = e(94381),
          h = e(72609),
          r = e(39905),
          d = e(3348),
          L = e(65946),
          x = e(90626),
          s = e(78603),
          I = e(71421),
          v = e(36707),
          S = e(18210),
          t = e(74107),
          a = e(18860),
          p = e(72429),
          z = e(11243);
        function C(c) {
          const { rtime: n } = c;
          return n
            ? (0, o.jsx)(p.K4, { dateAndTime: n, bSingleLine: !0 })
            : null;
        }
        function G(c) {
          const { rtime: n, onValueChange: i, label: j, tooltip: E } = c;
          let T;
          return (
            n > 0 && (T = jsx(C, { rtime: n })),
            jsxs(Fragment, {
              children: [
                jsxs(Text, {
                  children: [j, E && jsx(QuestionTooltip, { tooltip: E })],
                }),
                jsx(CoercingTextInput, {
                  value: n,
                  valueToString: (u) => u.toString(),
                  valueFromString: (u) => Number.parseInt(u),
                  clearable: !1,
                  onValueChange: (u) => {
                    i(Number(u));
                  },
                  afterContent: T,
                }),
              ],
            })
          );
        }
        var M = e(89926),
          N = e(99880),
          k = e(64054),
          F = e(31960),
          P = e(15843),
          g = e.n(P);
        function R(c) {
          const {
              hardwareDetail: n,
              reservationAdvancedSettings: i,
              storeItemReleaseInfo: j,
              bShuffleInProgress: E,
              bHasSomeReservation: T,
            } = c,
            [u, A] = (0, L.q3)(() => [
              i?.collection_rtime_end,
              i?.collection_time_learn_more_url,
            ]),
            [K, O] = (0, x.useState)({}),
            b = (0, x.useCallback)(
              (B) => {
                O((H) => ({ ...H, [n.packageid]: B }));
              },
              [n],
            ),
            W = (0, d.VM)(j);
          if (E)
            return (0, o.jsxs)("div", {
              className: (0, v.A)(s.expecteddate_str),
              children: [
                t.F5.Localize(
                  T
                    ? "#Reservation_Pool_InProgress_Joined"
                    : "#Reservation_Pool_InProgress_NotJoined",
                ),
                A &&
                  (0, o.jsx)("a", {
                    className: g().LearnMoreLink,
                    href: A,
                    children: r.Z.Localize("#Button_Learn"),
                  }),
              ],
            });
          const V = (0, a.k)(n.reservation_state),
            U = !!i && !!i.collection_time_term_and_conditions_url,
            y = K[n.packageid] ?? !U;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)("div", {
                className: (0, v.A)(s.expecteddate_str),
                children: [
                  t.F5.LocalizeReact(
                    "#Reservation_InPool_Message",
                    u ? (0, o.jsx)(C, { rtime: u }) : W,
                  ),
                  A &&
                    (0, o.jsx)("a", {
                      className: g().LearnMoreLink,
                      href: A,
                      children: r.Z.Localize("#Button_Learn"),
                    }),
                ],
              }),
              U &&
                (0, o.jsx)(
                  f.S,
                  {
                    checked: y || V,
                    onChange: b,
                    "data-checkbox": "",
                    disabled: V,
                    children: (0, o.jsxs)("div", {
                      className: g().Terms,
                      children: [
                        " ",
                        (0, S.oW)(
                          t.F5.Localize("#Reservation_JoinPool_Terms"),
                          (0, o.jsx)("a", {
                            href: i.collection_time_term_and_conditions_url,
                            className: g().TOCLink,
                            onClick: (B) => B.stopPropagation(),
                          }),
                        ),
                      ],
                    }),
                  },
                  n.packageid,
                ),
              h.iA.logged_in
                ? (0, o.jsx)(D, {
                    hardwareDetail: n,
                    bUserAcceptedTerms: !U || y,
                    onLeaveShuffleList: () => b(!1),
                  })
                : (0, o.jsx)("div", {
                    className: (0, v.A)(s.reserverow),
                    children: (0, o.jsx)(M.v, {
                      label: t.F5.Localize("#Reservation_Pool_NotSignedIn"),
                      strDialogDesc: t.F5.Localize(
                        "#Reservation_Pool_NotSignedIn_Desc",
                      ),
                    }),
                  }),
            ],
          });
        }
        function D(c) {
          const {
            hardwareDetail: n,
            bUserAcceptedTerms: i,
            onLeaveShuffleList: j,
          } = c;
          switch (n.reservation_state) {
            case a.G.k_EPurchaseReservationState_NotReserved:
            case a.G.k_EPurchaseReservationState_Consumed:
            case a.G.k_EPurchaseReservationState_Cancelled:
              return (0, o.jsx)(I.Gq, {
                toolTipContent: i
                  ? void 0
                  : t.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                children: (0, o.jsx)(N.R, {
                  bInputDisabled: !i,
                  packageid: n.packageid,
                  label: t.F5.Localize("#Reservation_JoinPool"),
                }),
              });
            case a.G.k_EPurchaseReservationState_Reserved:
            case a.G.k_EPurchaseReservationState_Allocated:
            default:
              return (0, o.jsx)(k.p, {
                packageid: n.packageid,
                strAction: t.F5.Localize("#Reservation_Cancel_Pool"),
                strDesc: t.F5.Localize("#Reservation_Cancel_Pool_Desc"),
                onCancelSucceeded: j,
              });
            case a.G.k_EPurchaseReservationState_UnavailableRegion:
              return (0, o.jsx)(F.b, {});
          }
        }
      },
      21895: (l) => {
        l.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (l) => {
        l.exports = {
          Color: "_2Vc3a-PM4tOhJcD72NEq1U",
          IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
          "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
          "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
          "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
          "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
          "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
          "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
          "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
          "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
          "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
          HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
        };
      },
      15843: (l) => {
        l.exports = {
          TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
          LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
          Terms: "_2oU42aqXAKCuhoH2GmPkWD",
        };
      },
    },
  ]);
})();
