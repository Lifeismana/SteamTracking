/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [48312],
  {
    21895: (e) => {
      e.exports = {
        Root: "_1kIuUssJvopWbHik1IKMG6",
        "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
        "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
        "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
        Disabled: "kLcGKsNxkoEqxgok6YzML",
        Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
        Icon: "cngAYeP7ZvFo2pT_v3-xO",
      };
    },
    16619: (e) => {
      e.exports = {
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
    15843: (e) => {
      e.exports = {
        TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
        LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
        Terms: "_2oU42aqXAKCuhoH2GmPkWD",
        PoolMessage: "_3-_nsU7fX4Uep5Nr-eATPw",
      };
    },
    57757: (e, a, o) => {
      "use strict";
      o.d(a, { S: () => _ });
      var r = o(7850),
        i = o(83392),
        s = o(40704);
      function n(e) {
        return (0, r.jsx)(s.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, r.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var t = o(21895),
        c = o(64238),
        l = o.n(c),
        d = o(66922);
      function _(e) {
        const {
            checked: a,
            onChange: o,
            disabled: s,
            children: c,
            ref: _,
            variant: h,
            color: p,
            align: k = "center",
            icon: x,
            ...m
          } = e,
          f = "indeterminate" === a,
          L = x ?? (f ? v : n),
          g = () => {
            s || (o && o(!!f || !a));
          },
          S = (0, d.f)("Checkbox", h);
        return (0, r.jsxs)(i.s, {
          align: k,
          ref: _,
          role: "checkbox",
          "aria-checked": f ? "mixed" : a,
          "data-state": u(a),
          className: l()(t.Root, t[`Variant-${S}`], s && t.Disabled),
          onClick: g,
          tabIndex: 0,
          onKeyDown: (e) => {
            s ||
              (" " === e.key && (g(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": s,
          "data-accent-color": p,
          ...m,
          children: [
            (0, r.jsx)("div", {
              className: t.Checkbox,
              children: a && (0, r.jsx)(L, { className: t.Icon }),
            }),
            c,
          ],
        });
      }
      function u(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function v(e) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
            fill: "currentColor",
          }),
        });
      }
    },
    40704: (e, a, o) => {
      "use strict";
      o.d(a, { I: () => t });
      var r = o(7850),
        i = o(11526),
        s = o(75659),
        n = o(16619);
      function t(e) {
        const { viewBoxSize: a = 20, ...o } = e,
          s = o.size ? void 0 : n.IconSizeDefault;
        return (0, r.jsx)("svg", {
          viewBox: `0 0 ${a} ${a}`,
          ...(0, i.mz)({ className: s, ...o }, c),
        });
      }
      const c = [
        ...s.L,
        { prop: "size", responsive: !0, className: (e) => n[`IconSize-${e}`] },
        {
          prop: "color",
          className: n.Color,
          cssProperty: (e) => ["--icon-color", (0, i.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: n.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        s.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    48312: (e, a, o) => {
      "use strict";
      o.r(a), o.d(a, { ShuffleActions: () => I, default: () => b });
      var r = o(7850),
        i = o(57757),
        s = o(66418),
        n = o(78686),
        t = o(65946),
        c = o(90626),
        l = o(78603),
        d = o(32754),
        _ = o(52038),
        u = o(61859),
        v = o(67936),
        h = o(53807),
        p = o(76684);
      o(26408);
      function k(e) {
        const { rtime: a } = e;
        return a ? (0, r.jsx)(p.K4, { dateAndTime: a, bSingleLine: !0 }) : null;
      }
      var x = o(84547),
        m = o(75821),
        f = o(23601),
        L = o(18899),
        g = o(52865),
        S = o(15843),
        z = o.n(S);
      function b(e) {
        const {
            hardwareDetail: a,
            reservationAdvancedSettings: o,
            bShuffleInProgress: d,
            bHasSomeReservation: p,
            reservedHardwareDetail: m,
          } = e,
          [f, L, g] = (0, t.q3)(() => [
            o?.collection_rtime_end,
            o?.collection_time_learn_more_url,
            !!o?.collection_time_allow_multiple_models,
          ]),
          [S, b] = (0, c.useState)({}),
          j = (0, c.useCallback)(
            (e) => {
              b((o) => ({ ...o, [a.packageid]: e }));
            },
            [a],
          );
        if (d)
          return (0, r.jsxs)("div", {
            className: (0, _.A)(l.expecteddate_str),
            children: [
              v.F5.Localize(
                p
                  ? "#Reservation_Pool_InProgress_Joined"
                  : "#Reservation_Pool_InProgress_NotJoined",
              ),
              L &&
                (0, r.jsx)("a", {
                  className: z().LearnMoreLink,
                  href: L,
                  children: n.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        const P = (0, h.k)(a.reservation_state),
          w = !!o && !!o.collection_time_term_and_conditions_url,
          D = S[a.packageid] ?? !w;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: (0, _.A)(l.expecteddate_str),
              children: [
                (0, r.jsx)("div", {
                  className: z().PoolMessage,
                  children: v.F5.LocalizeReact(
                    "#Reservation_InPool_Message_Date",
                    (0, r.jsx)(k, { rtime: f || a.collection_time_active }),
                  ),
                }),
                L &&
                  (0, r.jsx)("a", {
                    className: z().LearnMoreLink,
                    href: L,
                    children: n.Z.Localize("#Button_Learn"),
                  }),
              ],
            }),
            w &&
              (0, r.jsx)(
                i.S,
                {
                  checked: D || P,
                  onChange: j,
                  "data-checkbox": "",
                  disabled: P,
                  children: (0, r.jsxs)("div", {
                    className: z().Terms,
                    children: [
                      " ",
                      (0, u.oW)(
                        v.F5.Localize("#Reservation_JoinPool_Terms"),
                        (0, r.jsx)("a", {
                          href: o.collection_time_term_and_conditions_url,
                          className: z().TOCLink,
                          onClick: (e) => e.stopPropagation(),
                        }),
                      ),
                    ],
                  }),
                },
                a.packageid,
              ),
            s.iA.logged_in
              ? (0, r.jsx)(I, {
                  hardwareDetail: a,
                  reservedHardwareDetail: g ? void 0 : m,
                  bUserAcceptedTerms: !w || D,
                  onLeaveShuffleList: () => j(!1),
                })
              : (0, r.jsx)("div", {
                  className: (0, _.A)(l.reserverow),
                  children: (0, r.jsx)(x.v, {
                    label: v.F5.Localize("#Reservation_Pool_NotSignedIn"),
                    strDialogDesc: v.F5.Localize(
                      "#Reservation_Pool_NotSignedIn_Desc",
                    ),
                  }),
                }),
          ],
        });
      }
      function I(e) {
        const {
          hardwareDetail: a,
          reservedHardwareDetail: o,
          bUserAcceptedTerms: i,
          onLeaveShuffleList: s,
        } = e;
        switch (a.reservation_state) {
          case h.G.k_EPurchaseReservationState_NotReserved:
          case h.G.k_EPurchaseReservationState_Consumed:
          case h.G.k_EPurchaseReservationState_Cancelled:
            return o && o.packageid !== a.packageid
              ? (0, r.jsx)(d.Gq, {
                  toolTipContent: i
                    ? void 0
                    : v.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                  children: (0, r.jsx)(m.$, {
                    hardwareDetail: a,
                    reservedHardwareDetail: o,
                    bInputDisabled: !i,
                    bShufflePool: !0,
                  }),
                })
              : (0, r.jsx)(d.Gq, {
                  toolTipContent: i
                    ? void 0
                    : v.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                  children: (0, r.jsx)(f.R, {
                    bInputDisabled: !i,
                    packageid: a.packageid,
                    label: v.F5.Localize("#Reservation_JoinPool"),
                  }),
                });
          case h.G.k_EPurchaseReservationState_Reserved:
          case h.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, r.jsx)(L.p, {
              packageid: a.packageid,
              strAction: v.F5.Localize("#Reservation_Cancel_Pool"),
              strDesc: v.F5.Localize("#Reservation_Cancel_Pool_Desc"),
              onCancelSucceeded: s,
            });
          case h.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, r.jsx)(g.b, {});
        }
      }
    },
  },
]);
