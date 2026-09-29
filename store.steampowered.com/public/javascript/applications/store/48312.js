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
    57757: (e, o, a) => {
      "use strict";
      a.d(o, { S: () => _ });
      var r = a(7850),
        n = a(61011),
        i = a(40704);
      function t(e) {
        return (0, r.jsx)(i.I, {
          ...e,
          viewBox: 16,
          children: (0, r.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var s = a(21895),
        c = a(64238),
        l = a.n(c),
        d = a(66922);
      function _(e) {
        const {
            checked: o,
            onChange: a,
            disabled: i,
            children: c,
            ref: _,
            variant: v,
            color: p,
            align: k = "center",
            icon: f,
            ...m
          } = e,
          x = "indeterminate" === o,
          g = f ?? (x ? h : t),
          L = () => {
            i || (a && a(!!x || !o));
          },
          S = (0, d.f)("Checkbox", v);
        return (0, r.jsxs)(n.s, {
          align: k,
          ref: _,
          role: "checkbox",
          "aria-checked": x ? "mixed" : o,
          "data-state": u(o),
          className: l()(s.Root, s[`Variant-${S}`], i && s.Disabled),
          onClick: L,
          tabIndex: 0,
          onKeyDown: (e) => {
            i ||
              (" " === e.key && (L(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": i,
          "data-accent-color": p,
          ...m,
          children: [
            (0, r.jsx)("div", {
              className: s.Checkbox,
              children: o && (0, r.jsx)(g, { className: s.Icon }),
            }),
            c,
          ],
        });
      }
      function u(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function h(e) {
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
    40704: (e, o, a) => {
      "use strict";
      a.d(o, { I: () => s });
      var r = a(7850),
        n = a(11526),
        i = a(75659),
        t = a(16619);
      function s(e) {
        return (0, r.jsx)("svg", { ...d(e) });
      }
      const c = [
        ...i.L,
        { prop: "size", responsive: !0, className: (e) => t[`IconSize-${e}`] },
        {
          prop: "color",
          className: t.Color,
          cssProperty: (e) => ["--icon-color", l(e)],
        },
        {
          prop: "hitSlop",
          className: t.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        i.h.find(({ prop: e }) => "cursor" === e),
      ];
      function l(e) {
        return e && "#" !== e[0] ? (0, n.w7)(e) : e;
      }
      function d(e) {
        const { viewBox: o, ...a } = e,
          r = { className: a.size ? void 0 : t.IconSizeDefault, ...a };
        return (
          o &&
            (r.viewBox = (function (e) {
              return e
                ? "number" == typeof e
                  ? `0 0 ${e} ${e}`
                  : "string" == typeof e
                    ? e
                    : `0 0 ${e.width} ${e.height}`
                : void 0;
            })(o)),
          (0, n.mz)(r, c)
        );
      }
    },
    48312: (e, o, a) => {
      "use strict";
      a.r(o), a.d(o, { ShuffleActions: () => I, default: () => z });
      var r = a(7850),
        n = a(57757),
        i = a(66418),
        t = a(78686),
        s = a(65946),
        c = a(90626),
        l = a(78603),
        d = a(32754),
        _ = a(52038),
        u = a(61859),
        h = a(67936),
        v = a(53807),
        p = a(76684);
      a(26408);
      function k(e) {
        const { rtime: o } = e;
        return o ? (0, r.jsx)(p.K4, { dateAndTime: o, bSingleLine: !0 }) : null;
      }
      var f = a(84547),
        m = a(75821),
        x = a(23601),
        g = a(18899),
        L = a(52865),
        S = a(15843),
        b = a.n(S);
      function z(e) {
        const {
            hardwareDetail: o,
            reservationAdvancedSettings: a,
            bShuffleInProgress: d,
            bHasSomeReservation: p,
            reservedHardwareDetail: m,
          } = e,
          [x, g, L] = (0, s.q3)(() => [
            a?.collection_rtime_end,
            a?.collection_time_learn_more_url,
            !!a?.collection_time_allow_multiple_models,
          ]),
          [S, z] = (0, c.useState)({}),
          j = (0, c.useCallback)(
            (e) => {
              z((a) => ({ ...a, [o.packageid]: e }));
            },
            [o],
          );
        if (d)
          return (0, r.jsxs)("div", {
            className: (0, _.A)(l.expecteddate_str),
            children: [
              h.F5.Localize(
                p
                  ? "#Reservation_Pool_InProgress_Joined"
                  : "#Reservation_Pool_InProgress_NotJoined",
              ),
              g &&
                (0, r.jsx)("a", {
                  className: b().LearnMoreLink,
                  href: g,
                  children: t.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        const P = (0, v.k)(o.reservation_state),
          w = !!a && !!a.collection_time_term_and_conditions_url,
          D = S[o.packageid] ?? !w;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: (0, _.A)(l.expecteddate_str),
              children: [
                (0, r.jsx)("div", {
                  className: b().PoolMessage,
                  children: h.F5.LocalizeReact(
                    "#Reservation_InPool_Message_Date",
                    (0, r.jsx)(k, { rtime: x || o.collection_time_active }),
                  ),
                }),
                g &&
                  (0, r.jsx)("a", {
                    className: b().LearnMoreLink,
                    href: g,
                    children: t.Z.Localize("#Button_Learn"),
                  }),
              ],
            }),
            w &&
              (0, r.jsx)(
                n.S,
                {
                  checked: D || P,
                  onChange: j,
                  "data-checkbox": "",
                  disabled: P,
                  children: (0, r.jsxs)("div", {
                    className: b().Terms,
                    children: [
                      " ",
                      (0, u.oW)(
                        h.F5.Localize("#Reservation_JoinPool_Terms"),
                        (0, r.jsx)("a", {
                          href: a.collection_time_term_and_conditions_url,
                          className: b().TOCLink,
                          onClick: (e) => e.stopPropagation(),
                        }),
                      ),
                    ],
                  }),
                },
                o.packageid,
              ),
            i.iA.logged_in
              ? (0, r.jsx)(I, {
                  hardwareDetail: o,
                  reservedHardwareDetail: L ? void 0 : m,
                  bUserAcceptedTerms: !w || D,
                  onLeaveShuffleList: () => j(!1),
                })
              : (0, r.jsx)("div", {
                  className: (0, _.A)(l.reserverow),
                  children: (0, r.jsx)(f.v, {
                    label: h.F5.Localize("#Reservation_Pool_NotSignedIn"),
                    strDialogDesc: h.F5.Localize(
                      "#Reservation_Pool_NotSignedIn_Desc",
                    ),
                  }),
                }),
          ],
        });
      }
      function I(e) {
        const {
          hardwareDetail: o,
          reservedHardwareDetail: a,
          bUserAcceptedTerms: n,
          onLeaveShuffleList: i,
        } = e;
        switch (o.reservation_state) {
          case v.G.k_EPurchaseReservationState_NotReserved:
          case v.G.k_EPurchaseReservationState_Consumed:
          case v.G.k_EPurchaseReservationState_Cancelled:
            return a && a.packageid !== o.packageid
              ? (0, r.jsx)(d.Gq, {
                  toolTipContent: n
                    ? void 0
                    : h.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                  children: (0, r.jsx)(m.$, {
                    hardwareDetail: o,
                    reservedHardwareDetail: a,
                    bInputDisabled: !n,
                    bShufflePool: !0,
                  }),
                })
              : (0, r.jsx)(d.Gq, {
                  toolTipContent: n
                    ? void 0
                    : h.F5.Localize("#Reservation_JoinPool_ClickTerms"),
                  children: (0, r.jsx)(x.R, {
                    bInputDisabled: !n,
                    packageid: o.packageid,
                    label: h.F5.Localize("#Reservation_JoinPool"),
                  }),
                });
          case v.G.k_EPurchaseReservationState_Reserved:
          case v.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, r.jsx)(g.p, {
              packageid: o.packageid,
              strAction: h.F5.Localize("#Reservation_Cancel_Pool"),
              strDesc: h.F5.Localize("#Reservation_Cancel_Pool_Desc"),
              onCancelSucceeded: i,
            });
          case v.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, r.jsx)(L.b, {});
        }
      }
    },
  },
]);
