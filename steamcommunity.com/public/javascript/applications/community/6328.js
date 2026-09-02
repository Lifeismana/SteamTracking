/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6328],
    {
      56328: (P, m, n) => {
        n.r(m), n.d(m, { default: () => p });
        var t = n(7850),
          v = n(90626),
          u = n(15252),
          _ = n(68031),
          U = n(85367),
          g = n(65946),
          R = n(30241),
          d = n(99631),
          s = n(11243),
          f = n(74107);
        function h(a) {
          const { value: e, onValueChange: c, label: j, tooltip: S } = a,
            [r, E] = (0, v.useState)(void 0);
          let C;
          return (
            ((e && e.length > 0) || r) &&
              (C =
                r === void 0
                  ? (0, t.jsx)("span", {
                      children: f.F5.LocalizeReact(
                        "#SteamURLAccepted",
                        (0, t.jsx)(R.i, { color: "green-8" }),
                      ),
                    })
                  : (0, t.jsx)("span", {
                      children: f.F5.Localize("#SteamURLInvalid"),
                    })),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(u.EY, {
                  children: [j, S && (0, t.jsx)(s.o, { tooltip: S })],
                }),
                (0, t.jsx)(d.I, {
                  value: r != null ? r : e,
                  valueToString: (l) => l,
                  valueFromString: (l) => l,
                  clearable: !1,
                  checkValidText: () => r === void 0,
                  onValueChange: (l) => {
                    !!(
                      ((l == null ? void 0 : l.length) > 8 &&
                        l != null &&
                        l.startsWith("https://store.steampowered.com/")) ||
                      (l != null &&
                        l.startsWith("https://steamcommunity.com/")) ||
                      (l != null &&
                        l.startsWith("https://help.steampowered.com/"))
                    )
                      ? (c(l), E(void 0))
                      : E(l);
                  },
                  afterContent: C,
                }),
              ],
            })
          );
        }
        var x = n(52917);
        function p(a) {
          const { settings: e, fnOnUpdate: c } = a,
            [j, S] = (0, v.useState)(!!e),
            [r, E, C, l] = (0, g.q3)(() => {
              var i, o, A, T;
              return [
                (i =
                  e == null
                    ? void 0
                    : e.collection_time_term_and_conditions_url) != null
                  ? i
                  : "",
                (o = e == null ? void 0 : e.collection_rtime_end) != null
                  ? o
                  : 0,
                (A = e == null ? void 0 : e.collection_time_learn_more_url) !=
                null
                  ? A
                  : "",
                (T = e == null ? void 0 : e.waiting_learn_more_url) != null
                  ? T
                  : "",
              ];
            });
          return j
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(u.EY, { children: "Shuffle Settings" }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)(h, {
                    label: "Shuffle Pool Terms and Conditions URLs",
                    tooltip:
                      "Host this on the store, community or help wiki. If provided, then joining the pool requires accepting these terms.",
                    value: r,
                    onValueChange: (i) => {
                      const o = e ? { ...e } : {};
                      (o.collection_time_term_and_conditions_url = i), c(o);
                    },
                  }),
                  (0, t.jsx)(h, {
                    label: "Shuffle Pool Learn More URL",
                    tooltip:
                      "Host this on the hardware blog or help site FAQ. Help regular people understand whats going on.",
                    value: C,
                    onValueChange: (i) => {
                      const o = e ? { ...e } : {};
                      (o.collection_time_learn_more_url = i), c(o);
                    },
                  }),
                  (0, t.jsx)(x.R, {
                    label: "Unix Epoch Time Shuffle Closes",
                    tooltip:
                      "This will be displayed to the user, they can enter the shuffle upto this point. Purely for display purpose. Switching out of shuffle is control by server; if not provided we use release date of the hardware item instead",
                    rtime: E,
                    onValueChange: (i) => {
                      const o = e ? { ...e } : {};
                      (o.collection_rtime_end = i), c(o);
                    },
                  }),
                  (0, t.jsx)(u.EY, { children: "Waitlist Settings" }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)(h, {
                    label: "Waitlist 'Learn More' Url",
                    tooltip:
                      "Details about the waiting list for the Steam user to read.",
                    value: l,
                    onValueChange: (i) => {
                      const o = e ? { ...e } : {};
                      (o.waiting_learn_more_url = i), c(o);
                    },
                  }),
                ],
              })
            : (0, t.jsxs)(_.s, {
                gap: "1",
                direction: "column",
                children: [
                  (0, t.jsx)(u.EY, {
                    size: "4",
                    children: "Enable Advanced Settings",
                  }),
                  (0, t.jsx)(U.S, { checked: j, onChange: (i) => S(!0) }),
                ],
              });
        }
      },
      52917: (P, m, n) => {
        n.d(m, { R: () => R, m: () => g });
        var t = n(7850),
          v = n(15252),
          u = n(99631),
          _ = n(72429),
          U = n(11243);
        function g(d) {
          const { rtime: s } = d;
          return s
            ? (0, t.jsx)(_.K4, { dateAndTime: s, bSingleLine: !0 })
            : null;
        }
        function R(d) {
          const { rtime: s, onValueChange: f, label: h, tooltip: x } = d;
          let p;
          return (
            s > 0 && (p = (0, t.jsx)(g, { rtime: s })),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(v.EY, {
                  children: [h, x && (0, t.jsx)(U.o, { tooltip: x })],
                }),
                (0, t.jsx)(u.I, {
                  value: s,
                  valueToString: (a) => a.toString(),
                  valueFromString: (a) => Number.parseInt(a),
                  clearable: !1,
                  onValueChange: (a) => {
                    f(Number(a));
                  },
                  afterContent: p,
                }),
              ],
            })
          );
        }
      },
    },
  ]);
})();
