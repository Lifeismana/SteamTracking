/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [56328],
    {
      56328: (P, g, l) => {
        l.r(g), l.d(g, { default: () => S });
        var e = l(7850),
          v = l(90626),
          u = l(15252),
          f = l(85367),
          U = l(68031),
          d = l(11243),
          R = l(65946),
          h = l(30241),
          a = l(99631),
          p = l(74107);
        function m(s) {
          const { value: t, onValueChange: r, label: _, tooltip: j } = s,
            [c, E] = (0, v.useState)(void 0);
          let C;
          return (
            ((t && t.length > 0) || c) &&
              (C =
                c === void 0
                  ? (0, e.jsx)("span", {
                      children: p.F5.LocalizeReact(
                        "#SteamURLAccepted",
                        (0, e.jsx)(h.i, { color: "green-8" }),
                      ),
                    })
                  : (0, e.jsx)("span", {
                      children: p.F5.Localize("#SteamURLInvalid"),
                    })),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)(u.EY, {
                  children: [_, j && (0, e.jsx)(d.o, { tooltip: j })],
                }),
                (0, e.jsx)(a.I, {
                  value: c != null ? c : t,
                  valueToString: (o) => o,
                  valueFromString: (o) => o,
                  clearable: !1,
                  checkValidText: () => c === void 0,
                  onValueChange: (o) => {
                    !!(
                      ((o == null ? void 0 : o.length) > 8 &&
                        o != null &&
                        o.startsWith("https://store.steampowered.com/")) ||
                      (o != null &&
                        o.startsWith("https://steamcommunity.com/")) ||
                      (o != null &&
                        o.startsWith("https://help.steampowered.com/"))
                    )
                      ? (r(o), E(void 0))
                      : E(o);
                  },
                  afterContent: C,
                }),
              ],
            })
          );
        }
        var x = l(52917);
        function S(s) {
          const { settings: t, fnOnUpdate: r } = s,
            [_, j] = (0, v.useState)(!!t),
            [c, E, C, o, A] = (0, R.q3)(() => {
              var i, n, M, O;
              return [
                (i =
                  t == null
                    ? void 0
                    : t.collection_time_term_and_conditions_url) != null
                  ? i
                  : "",
                (n = t == null ? void 0 : t.collection_rtime_end) != null
                  ? n
                  : 0,
                (M = t == null ? void 0 : t.collection_time_learn_more_url) !=
                null
                  ? M
                  : "",
                !!(t != null && t.collection_time_allow_multiple_models),
                (O = t == null ? void 0 : t.waiting_learn_more_url) != null
                  ? O
                  : "",
              ];
            });
          return _
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(u.EY, { children: "Shuffle Settings" }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(m, {
                    label: "Shuffle Pool Terms and Conditions URLs",
                    tooltip:
                      "Host this on the store, community or help wiki. If provided, then joining the pool requires accepting these terms.",
                    value: c,
                    onValueChange: (i) => {
                      const n = t ? { ...t } : {};
                      (n.collection_time_term_and_conditions_url = i), r(n);
                    },
                  }),
                  (0, e.jsx)(m, {
                    label: "Shuffle Pool Learn More URL",
                    tooltip:
                      "Host this on the hardware blog or help site FAQ. Help regular people understand whats going on.",
                    value: C,
                    onValueChange: (i) => {
                      const n = t ? { ...t } : {};
                      (n.collection_time_learn_more_url = i), r(n);
                    },
                  }),
                  (0, e.jsx)(x.R, {
                    label: "Unix Epoch Time Shuffle Closes",
                    tooltip:
                      "Optional. Purely for display purpose: we show the time the server closes the list unless you announce a different one here. Switching out of shuffle is control by server",
                    rtime: E,
                    onValueChange: (i) => {
                      const n = t ? { ...t } : {};
                      (n.collection_rtime_end = i), r(n);
                    },
                  }),
                  (0, e.jsxs)(f.S, {
                    checked: o,
                    onChange: (i) => {
                      const n = t ? { ...t } : {};
                      (n.collection_time_allow_multiple_models = i), r(n);
                    },
                    children: [
                      "Allow Signing Up For Multiple Models",
                      (0, e.jsx)(d.o, {
                        tooltip:
                          "Off (default): the customer signs up for one model and can switch models for free while the shuffle list is open.",
                      }),
                    ],
                  }),
                  (0, e.jsx)(u.EY, { children: "Waitlist Settings" }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(m, {
                    label: "Waitlist 'Learn More' Url",
                    tooltip:
                      "Details about the waiting list for the Steam user to read.",
                    value: A,
                    onValueChange: (i) => {
                      const n = t ? { ...t } : {};
                      (n.waiting_learn_more_url = i), r(n);
                    },
                  }),
                ],
              })
            : (0, e.jsxs)(U.s, {
                gap: "1",
                direction: "column",
                children: [
                  (0, e.jsx)(u.EY, {
                    size: "4",
                    children: "Enable Advanced Settings",
                  }),
                  (0, e.jsx)(f.S, { checked: _, onChange: (i) => j(!0) }),
                ],
              });
        }
      },
      52917: (P, g, l) => {
        l.d(g, { R: () => R, m: () => d });
        var e = l(7850),
          v = l(15252),
          u = l(99631),
          f = l(18057),
          U = l(11243);
        function d(h) {
          const { rtime: a } = h;
          return a
            ? (0, e.jsx)(f.K4, { dateAndTime: a, bSingleLine: !0 })
            : null;
        }
        function R(h) {
          const { rtime: a, onValueChange: p, label: m, tooltip: x } = h;
          let S;
          return (
            a > 0 && (S = (0, e.jsx)(d, { rtime: a })),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)(v.EY, {
                  children: [m, x && (0, e.jsx)(U.o, { tooltip: x })],
                }),
                (0, e.jsx)(u.I, {
                  value: a,
                  valueToString: (s) => s.toString(),
                  valueFromString: (s) => Number.parseInt(s),
                  clearable: !1,
                  onValueChange: (s) => {
                    p(Number(s));
                  },
                  afterContent: S,
                }),
              ],
            })
          );
        }
      },
    },
  ]);
})();
