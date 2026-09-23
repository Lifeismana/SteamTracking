/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9033],
  {
    79033: (e, l, t) => {
      t.r(l), t.d(l, { default: () => g });
      var o = t(7850),
        n = t(90626),
        i = t(20187),
        s = t(52908),
        r = t(83392),
        a = t(26408),
        u = t(65946),
        c = t(20422),
        h = t(48906),
        d = t(67936);
      function m(e) {
        const { value: l, onValueChange: t, label: s, tooltip: r } = e,
          [u, m] = (0, n.useState)(void 0);
        let p;
        return (
          ((l && l.length > 0) || u) &&
            (p =
              void 0 === u
                ? (0, o.jsx)("span", {
                    children: d.F5.LocalizeReact(
                      "#SteamURLAccepted",
                      (0, o.jsx)(c.i, { color: "green-8" }),
                    ),
                  })
                : (0, o.jsx)("span", {
                    children: d.F5.Localize("#SteamURLInvalid"),
                  })),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(i.EY, {
                children: [s, r && (0, o.jsx)(a.o, { tooltip: r })],
              }),
              (0, o.jsx)(h.I, {
                value: null != u ? u : l,
                valueToString: (e) => e,
                valueFromString: (e) => e,
                clearable: !1,
                checkValidText: () => void 0 === u,
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
                    ? (t(e), m(void 0))
                    : m(e);
                },
                afterContent: p,
              }),
            ],
          })
        );
      }
      var p = t(73694);
      function g(e) {
        const { settings: l, fnOnUpdate: t } = e,
          [c, h] = (0, n.useState)(!!l),
          [d, g, v, _, f] = (0, u.q3)(() => {
            var e, t, o, n;
            return [
              null !==
                (e =
                  null == l
                    ? void 0
                    : l.collection_time_term_and_conditions_url) && void 0 !== e
                ? e
                : "",
              null !== (t = null == l ? void 0 : l.collection_rtime_end) &&
              void 0 !== t
                ? t
                : 0,
              null !==
                (o = null == l ? void 0 : l.collection_time_learn_more_url) &&
              void 0 !== o
                ? o
                : "",
              !!(null == l ? void 0 : l.collection_time_allow_multiple_models),
              null !== (n = null == l ? void 0 : l.waiting_learn_more_url) &&
              void 0 !== n
                ? n
                : "",
            ];
          });
        return c
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(i.EY, { children: "Shuffle Settings" }),
                (0, o.jsx)("hr", {}),
                (0, o.jsx)(m, {
                  label: "Shuffle Pool Terms and Conditions URLs",
                  tooltip:
                    "Host this on the store, community or help wiki. If provided, then joining the pool requires accepting these terms.",
                  value: d,
                  onValueChange: (e) => {
                    const o = l ? { ...l } : {};
                    (o.collection_time_term_and_conditions_url = e), t(o);
                  },
                }),
                (0, o.jsx)(m, {
                  label: "Shuffle Pool Learn More URL",
                  tooltip:
                    "Host this on the hardware blog or help site FAQ. Help regular people understand whats going on.",
                  value: v,
                  onValueChange: (e) => {
                    const o = l ? { ...l } : {};
                    (o.collection_time_learn_more_url = e), t(o);
                  },
                }),
                (0, o.jsx)(p.R, {
                  label: "Unix Epoch Time Shuffle Closes",
                  tooltip:
                    "Optional. Purely for display purpose: we show the time the server closes the list unless you announce a different one here. Switching out of shuffle is control by server",
                  rtime: g,
                  onValueChange: (e) => {
                    const o = l ? { ...l } : {};
                    (o.collection_rtime_end = e), t(o);
                  },
                }),
                (0, o.jsxs)(s.S, {
                  checked: _,
                  onChange: (e) => {
                    const o = l ? { ...l } : {};
                    (o.collection_time_allow_multiple_models = e), t(o);
                  },
                  children: [
                    "Allow Signing Up For Multiple Models",
                    (0, o.jsx)(a.o, {
                      tooltip:
                        "Off (default): the customer signs up for one model and can switch models for free while the shuffle list is open.",
                    }),
                  ],
                }),
                (0, o.jsx)(i.EY, { children: "Waitlist Settings" }),
                (0, o.jsx)("hr", {}),
                (0, o.jsx)(m, {
                  label: "Waitlist 'Learn More' Url",
                  tooltip:
                    "Details about the waiting list for the Steam user to read.",
                  value: f,
                  onValueChange: (e) => {
                    const o = l ? { ...l } : {};
                    (o.waiting_learn_more_url = e), t(o);
                  },
                }),
              ],
            })
          : (0, o.jsxs)(r.s, {
              gap: "1",
              direction: "column",
              children: [
                (0, o.jsx)(i.EY, {
                  size: "4",
                  children: "Enable Advanced Settings",
                }),
                (0, o.jsx)(s.S, { checked: c, onChange: (e) => h(!0) }),
              ],
            });
      }
    },
    73694: (e, l, t) => {
      t.d(l, { R: () => u, m: () => a });
      var o = t(7850),
        n = t(20187),
        i = t(48906),
        s = t(76684),
        r = t(26408);
      function a(e) {
        const { rtime: l } = e;
        return l ? (0, o.jsx)(s.K4, { dateAndTime: l, bSingleLine: !0 }) : null;
      }
      function u(e) {
        const { rtime: l, onValueChange: t, label: s, tooltip: u } = e;
        let c;
        return (
          l > 0 && (c = (0, o.jsx)(a, { rtime: l })),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(n.EY, {
                children: [s, u && (0, o.jsx)(r.o, { tooltip: u })],
              }),
              (0, o.jsx)(i.I, {
                value: l,
                valueToString: (e) => e.toString(),
                valueFromString: (e) => Number.parseInt(e),
                clearable: !1,
                onValueChange: (e) => {
                  t(Number(e));
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
