/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [583],
  {
    87100: (e) => {
      e.exports = {
        CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
        CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
      };
    },
    58317: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => u });
      var n = o(7850),
        c = o(90626),
        i = o(6336),
        r = o(87100),
        s = o(4869);
      function u(e) {
        const [t, o] = (0, c.useState)(!1),
          u = (0, c.useRef)(null);
        return (0, n.jsx)("span", {
          children: (0, n.jsxs)("button", {
            onClick: (t) => (
              o(!0),
              t.stopPropagation(),
              navigator.clipboard.writeText(e.text),
              setTimeout(() => o(!1), 1e3),
              !1
            ),
            className: r.CopyButton,
            ref: u,
            children: [
              t &&
                u.current &&
                (0, n.jsx)(i.g, {
                  target: u.current,
                  direction: "bottom",
                  children: (0, n.jsx)("div", {
                    className: r.CopiedNotice,
                    children: "Copied.",
                  }),
                }),
              (0, n.jsx)(s.cKB, {}),
            ],
          }),
        });
      }
    },
  },
]);
