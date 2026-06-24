/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9033],
  {
    79033: (e, t, l) => {
      l.r(t), l.d(t, { default: () => g });
      var n = l(7850),
        o = l(90626),
        i = l(20187),
        r = l(83392),
        a = l(52908),
        s = l(65946),
        u = l(20422),
        c = l(48906),
        d = l(26408),
        h = l(67936);
      function m(e) {
        const { value: t, onValueChange: l, label: r, tooltip: a } = e,
          [s, m] = (0, o.useState)(void 0);
        let p;
        return (
          ((t && t.length > 0) || s) &&
            (p =
              void 0 === s
                ? (0, n.jsx)("span", {
                    children: h.F5.LocalizeReact(
                      "#SteamURLAccepted",
                      (0, n.jsx)(u.i, { color: "green-8" }),
                    ),
                  })
                : (0, n.jsx)("span", {
                    children: h.F5.Localize("#SteamURLInvalid"),
                  })),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(i.EY, {
                children: [r, a && (0, n.jsx)(d.o, { tooltip: a })],
              }),
              (0, n.jsx)(c.I, {
                value: null != s ? s : t,
                valueToString: (e) => e,
                valueFromString: (e) => e,
                clearable: !1,
                checkValidText: () => void 0 === s,
                onValueChange: (e) => {
                  Boolean(
                    ((null == e ? void 0 : e.length) > 8 &&
                      (null == e
                        ? void 0
                        : e.startsWith("https://store.steampowered.com/"))) ||
                      (null == e
                        ? void 0
                        : e.startsWith("https://steamcommunity.com/")) ||
                      (null == e
                        ? void 0
                        : e.startsWith("https://help.steampowered.com/")),
                  )
                    ? (l(e), m(void 0))
                    : m(e);
                },
                afterContent: p,
              }),
            ],
          })
        );
      }
      var p = l(73694);
      function g(e) {
        const { settings: t, fnOnUpdate: l } = e,
          [u, c] = (0, o.useState)(!!t),
          [d, h, g, v] = (0, s.q3)(() => {
            var e, l, n, o;
            return [
              null !==
                (e =
                  null == t
                    ? void 0
                    : t.collection_time_term_and_conditions_url) && void 0 !== e
                ? e
                : "",
              null !== (l = null == t ? void 0 : t.collection_rtime_end) &&
              void 0 !== l
                ? l
                : 0,
              null !==
                (n = null == t ? void 0 : t.collection_time_learn_more_url) &&
              void 0 !== n
                ? n
                : "",
              null !== (o = null == t ? void 0 : t.waiting_learn_more_url) &&
              void 0 !== o
                ? o
                : "",
            ];
          });
        return u
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(i.EY, { children: "Shuffle Settings" }),
                (0, n.jsx)("hr", {}),
                (0, n.jsx)(m, {
                  label: "Shuffle Pool Terms and Conditions URLs",
                  tooltip:
                    "Host this on the store, community or help wiki. If provided, then joining the pool requires accepting these terms.",
                  value: d,
                  onValueChange: (e) => {
                    const n = t ? { ...t } : {};
                    (n.collection_time_term_and_conditions_url = e), l(n);
                  },
                }),
                (0, n.jsx)(m, {
                  label: "Shuffle Pool Learn More URL",
                  tooltip:
                    "Host this on the hardware blog or help site FAQ. Help regular people understand whats going on.",
                  value: g,
                  onValueChange: (e) => {
                    const n = t ? { ...t } : {};
                    (n.collection_time_learn_more_url = e), l(n);
                  },
                }),
                (0, n.jsx)(p.R, {
                  label: "Unix Epoch Time Shuffle Closes",
                  tooltip:
                    "This will be displayed to the user, they can enter the shuffle upto this point. Purely for display purpose. Switching out of shuffle is control by server; if not provided we use release date of the hardware item instead",
                  rtime: h,
                  onValueChange: (e) => {
                    const n = t ? { ...t } : {};
                    (n.collection_rtime_end = e), l(n);
                  },
                }),
                (0, n.jsx)(i.EY, { children: "Waitlist Settings" }),
                (0, n.jsx)("hr", {}),
                (0, n.jsx)(m, {
                  label: "Waitlist 'Learn More' Url",
                  tooltip:
                    "Details about the waiting list for the Steam user to read.",
                  value: v,
                  onValueChange: (e) => {
                    const n = t ? { ...t } : {};
                    (n.waiting_learn_more_url = e), l(n);
                  },
                }),
              ],
            })
          : (0, n.jsxs)(r.s, {
              gap: "1",
              direction: "column",
              children: [
                (0, n.jsx)(i.EY, {
                  size: "4",
                  children: "Enable Advanced Settings",
                }),
                (0, n.jsx)(a.S, { checked: u, onChange: (e) => c(!0) }),
              ],
            });
      }
    },
    73694: (e, t, l) => {
      l.d(t, { R: () => u, m: () => s });
      var n = l(7850),
        o = l(20187),
        i = l(48906),
        r = l(76684),
        a = l(26408);
      function s(e) {
        const { rtime: t } = e;
        return t ? (0, n.jsx)(r.K4, { dateAndTime: t, bSingleLine: !0 }) : null;
      }
      function u(e) {
        const { rtime: t, onValueChange: l, label: r, tooltip: u } = e;
        let c;
        return (
          t > 0 && (c = (0, n.jsx)(s, { rtime: t })),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(o.EY, {
                children: [r, u && (0, n.jsx)(a.o, { tooltip: u })],
              }),
              (0, n.jsx)(i.I, {
                value: t,
                valueToString: (e) => e.toString(),
                valueFromString: (e) => Number.parseInt(e),
                clearable: !1,
                onValueChange: (e) => {
                  l(Number(e));
                },
                afterContent: c,
              }),
            ],
          })
        );
      }
    },
  },
]);
