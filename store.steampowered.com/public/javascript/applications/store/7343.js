/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [7343],
    {
      94381: (v, g, e) => {
        "use strict";
        e.d(g, { S: () => h });
        var n = e(7850),
          I = e(68031),
          p = e(31857);
        function r(s) {
          return (0, n.jsx)(p.I, {
            ...s,
            viewBox: 16,
            children: (0, n.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var u = e(21895),
          L = e(64238),
          m = e.n(L),
          P = e(80549);
        function h(s) {
          const {
              checked: i,
              onChange: R,
              disabled: l,
              children: G,
              ref: T,
              variant: A,
              color: E,
              align: M = "center",
              icon: N,
              ...k
            } = s,
            c = i === "indeterminate",
            b = N ?? (c ? o : r),
            C = () => {
              l || (R && R(c ? !0 : !i));
            },
            d = (a) => {
              l ||
                (a.key === " " &&
                  (C(), a.preventDefault(), a.stopPropagation()));
            },
            t = (0, P.f)("Checkbox", A);
          return (0, n.jsxs)(I.s, {
            align: M,
            ref: T,
            role: "checkbox",
            "aria-checked": c ? "mixed" : i,
            "data-state": j(i),
            className: m()(u.Root, u[`Variant-${t}`], l && u.Disabled),
            onClick: C,
            tabIndex: 0,
            onKeyDown: d,
            cursor: "default",
            "aria-disabled": l,
            "data-accent-color": E,
            ...k,
            children: [
              (0, n.jsx)("div", {
                className: u.Checkbox,
                children: i && (0, n.jsx)(b, { className: u.Icon }),
              }),
              G,
            ],
          });
        }
        function j(s) {
          return s === "indeterminate" ? s : s ? "checked" : "unchecked";
        }
        function o(s) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      31857: (v, g, e) => {
        "use strict";
        e.d(g, { I: () => L });
        var n = e(7850),
          I = e(69289),
          p = e(8928),
          r = e(16619),
          u = e.n(r);
        function L(o) {
          return (0, n.jsx)("svg", { ...h(o) });
        }
        const m = [
          ...p.L,
          {
            prop: "size",
            responsive: !0,
            className: (o) => r[`IconSize-${o}`],
          },
          {
            prop: "color",
            className: r.Color,
            cssProperty: (o) => ["--icon-color", P(o)],
          },
          {
            prop: "hitSlop",
            className: r.HitSlop,
            cssProperty: (o) => [
              "--hit-slop-custom",
              typeof o == "string" ? o : "",
            ],
          },
          p.h.find(({ prop: o }) => o === "cursor"),
        ];
        function P(o) {
          return !o || o[0] === "#" ? o : (0, I.w7)(o);
        }
        function h(o) {
          const { viewBox: s, ...i } = o,
            l = { className: i.size ? void 0 : r.IconSizeDefault, ...i };
          return s && (l.viewBox = j(s)), (0, I.mz)(l, m);
        }
        function j(o) {
          if (o)
            return typeof o == "number"
              ? `0 0 ${o} ${o}`
              : typeof o == "string"
                ? o
                : `0 0 ${o.width} ${o.height}`;
        }
      },
      7343: (v, g, e) => {
        "use strict";
        e.r(g), e.d(g, { ShuffleActions: () => C, default: () => b });
        var n = e(7850),
          I = e(94381),
          p = e(72609),
          r = e(39905),
          u = e(65946),
          L = e(90626),
          m = e(78603),
          P = e(71421),
          h = e(36707),
          j = e(18210),
          o = e(74107),
          s = e(18860),
          i = e(18057),
          R = e(11243);
        function l(d) {
          const { rtime: t } = d;
          return t
            ? (0, n.jsx)(i.K4, { dateAndTime: t, bSingleLine: !0 })
            : null;
        }
        function G(d) {
          const { rtime: t, onValueChange: a, label: f, tooltip: S } = d;
          let z;
          return (
            t > 0 && (z = jsx(l, { rtime: t })),
            jsxs(Fragment, {
              children: [
                jsxs(Text, {
                  children: [f, S && jsx(QuestionTooltip, { tooltip: S })],
                }),
                jsx(CoercingTextInput, {
                  value: t,
                  valueToString: (x) => x.toString(),
                  valueFromString: (x) => Number.parseInt(x),
                  clearable: !1,
                  onValueChange: (x) => {
                    a(Number(x));
                  },
                  afterContent: z,
                }),
              ],
            })
          );
        }
        var T = e(89926),
          A = e(50168),
          E = e(99880),
          M = e(64054),
          N = e(31960),
          k = e(15843),
          c = e.n(k);
        function b(d) {
          const {
              hardwareDetail: t,
              reservationAdvancedSettings: a,
              bShuffleInProgress: f,
              bHasSomeReservation: S,
              reservedHardwareDetail: z,
            } = d,
            [x, D, K] = (0, u.q3)(() => [
              a?.collection_rtime_end,
              a?.collection_time_learn_more_url,
              !!a?.collection_time_allow_multiple_models,
            ]),
            [O, W] = (0, L.useState)({}),
            V = (0, L.useCallback)(
              (F) => {
                W((J) => ({ ...J, [t.packageid]: F }));
              },
              [t],
            );
          if (f)
            return (0, n.jsxs)("div", {
              className: (0, h.A)(m.expecteddate_str),
              children: [
                o.F5.Localize(
                  S
                    ? "#Reservation_Pool_InProgress_Joined"
                    : "#Reservation_Pool_InProgress_NotJoined",
                ),
                D &&
                  (0, n.jsx)("a", {
                    className: c().LearnMoreLink,
                    href: D,
                    children: r.Z.Localize("#Button_Learn"),
                  }),
              ],
            });
          const y = (0, s.k)(t.reservation_state),
            U = !!a && !!a.collection_time_term_and_conditions_url,
            H = O[t.packageid] ?? !U;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: (0, h.A)(m.expecteddate_str),
                children: [
                  (0, n.jsx)("div", {
                    className: c().PoolMessage,
                    children: o.F5.LocalizeReact(
                      "#Reservation_InPool_Message_Date",
                      (0, n.jsx)(l, { rtime: x || t.collection_time_active }),
                    ),
                  }),
                  D &&
                    (0, n.jsx)("a", {
                      className: c().LearnMoreLink,
                      href: D,
                      children: r.Z.Localize("#Button_Learn"),
                    }),
                ],
              }),
              U &&
                (0, n.jsx)(
                  I.S,
                  {
                    checked: H || y,
                    onChange: V,
                    "data-checkbox": "",
                    disabled: y,
                    children: (0, n.jsxs)("div", {
                      className: c().Terms,
                      children: [
                        " ",
                        (0, j.oW)(
                          o.F5.Localize("#Reservation_JoinPool_Terms"),
                          (0, n.jsx)("a", {
                            href: a.collection_time_term_and_conditions_url,
                            className: c().TOCLink,
                            onClick: (F) => F.stopPropagation(),
                          }),
                        ),
                      ],
                    }),
                  },
                  t.packageid,
                ),
              p.iA.logged_in
                ? (0, n.jsx)(C, {
                    hardwareDetail: t,
                    reservedHardwareDetail: K ? void 0 : z,
                    bUserAcceptedTerms: !U || H,
                    onLeaveShuffleList: () => V(!1),
                  })
                : (0, n.jsx)("div", {
                    className: (0, h.A)(m.reserverow),
                    children: (0, n.jsx)(T.v, {
                      label: o.F5.Localize("#Reservation_Pool_NotSignedIn"),
                      strDialogDesc: o.F5.Localize(
                        "#Reservation_Pool_NotSignedIn_Desc",
                      ),
                    }),
                  }),
            ],
          });
        }
        function C(d) {
          const {
            hardwareDetail: t,
            reservedHardwareDetail: a,
            bUserAcceptedTerms: f,
            onLeaveShuffleList: S,
          } = d;
          switch (t.reservation_state) {
            case s.G.k_EPurchaseReservationState_NotReserved:
            case s.G.k_EPurchaseReservationState_Consumed:
            case s.G.k_EPurchaseReservationState_Cancelled:
              return a && a.packageid !== t.packageid
                ? (0, n.jsx)(P.Gq, {
                    toolTipContent: f
                      ? void 0
                      : o.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                    children: (0, n.jsx)(A.$, {
                      hardwareDetail: t,
                      reservedHardwareDetail: a,
                      bInputDisabled: !f,
                      bShufflePool: !0,
                    }),
                  })
                : (0, n.jsx)(P.Gq, {
                    toolTipContent: f
                      ? void 0
                      : o.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                    children: (0, n.jsx)(E.R, {
                      bInputDisabled: !f,
                      packageid: t.packageid,
                      label: o.F5.Localize("#Reservation_JoinPool"),
                    }),
                  });
            case s.G.k_EPurchaseReservationState_Reserved:
            case s.G.k_EPurchaseReservationState_Allocated:
            default:
              return (0, n.jsx)(M.p, {
                packageid: t.packageid,
                strAction: o.F5.Localize("#Reservation_Cancel_Pool"),
                strDesc: o.F5.Localize("#Reservation_Cancel_Pool_Desc"),
                onCancelSucceeded: S,
              });
            case s.G.k_EPurchaseReservationState_UnavailableRegion:
              return (0, n.jsx)(N.b, {});
          }
        }
      },
      21895: (v) => {
        v.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (v) => {
        v.exports = {
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
      15843: (v) => {
        v.exports = {
          TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
          LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
          Terms: "_2oU42aqXAKCuhoH2GmPkWD",
          PoolMessage: "_3-_nsU7fX4Uep5Nr-eATPw",
        };
      },
    },
  ]);
})();
