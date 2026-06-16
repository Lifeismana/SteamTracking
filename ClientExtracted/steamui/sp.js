"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    58616: (e, o, n) => {
      n.r(o), n.d(o, { default: () => k });
      var s = n(89748),
        t = n(62540),
        u = n(35560),
        c = n(61236),
        i = n(47999),
        r = n(63696),
        d = n(98606),
        a = n(91435),
        l = n(50341),
        w = n(22542),
        m = n(83857),
        f = n(42318);
      const v = r.memo(function (e) {
        return (0, t.jsxs)(f.wC, {
          children: [
            (0, t.jsx)(m.L, {}),
            (0, t.jsx)(l.BV, {}),
            (0, t.jsx)(w.Gm, {}),
          ],
        });
      });
      var p = n(29971),
        j = n(87913),
        x = n(59578),
        h = n(7528),
        b = n(11131);
      const g = new (n(83599).wd)("ReactQuery").Debug;
      function F() {
        const [e] = r.useState(() => ({
          focusedPopup: void 0,
          timeoutFocusTransfer: void 0,
        }));
        r.useEffect(
          () => (
            g(`focusManager isVisible: ${h.m.isFocused()}`),
            h.m.subscribe((e) => g(`focusManager isVisible: ${e}`))
          ),
          [],
        );
        const o = r.useCallback(
          (o) => {
            const n = o.window.document,
              s = () => {
                e.timeoutFocusTransfer &&
                  (window.clearTimeout(e.timeoutFocusTransfer),
                  (e.timeoutFocusTransfer = void 0)),
                  (e.focusedPopup = o),
                  h.m.setFocused(!0);
              },
              t = () => {
                e.focusedPopup == o &&
                  ((e.focusedPopup = void 0),
                  (e.timeoutFocusTransfer = window.setTimeout(() => {
                    console.assert(!e.focusedPopup),
                      e.focusedPopup || h.m.setFocused(!1);
                  }, 50)));
              };
            return (
              o.window.addEventListener("focus", s),
              o.window.addEventListener("blur", t),
              n.hasFocus() && s(),
              () => {
                o.window.removeEventListener("focus", s),
                  o.window.removeEventListener("blur", t),
                  h.m.setFocused(!1);
              }
            );
          },
          [e],
        );
        (0, b.VR)(o);
      }
      const T = r.memo(function () {
        return (0, j.u$)()
          ? (0, t.jsx)(f.tH, { children: (0, t.jsx)(p._V, {}) })
          : null;
      });
      (0, n(89193).jK)({ enforceActions: "never" }),
        (async function () {
          !(function () {
            let e = window;
            (e.ClearBackgroundInterval = window.clearInterval),
              (e.ClearBackgroundTimeout = window.clearTimeout),
              (e.SetBackgroundInterval = window.setInterval),
              (e.SetBackgroundTimeout = window.setTimeout);
          })();
          let e = (0, s.KC)();
          await e.Init(window.cm);
        })();
      const k = function (e) {
        const o = (0, s.gK)();
        return (
          F(),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(a.EO, {
              bOnlyPopups: !0,
              children: [
                (0, t.jsx)(v, {}),
                o &&
                  (0, t.jsx)(u.VQ, {
                    controller: c.oy.NavigationManager,
                    children: (0, t.jsx)(d.p, {
                      children: (0, t.jsxs)(x.QA, {
                        eAdultOnlyMediaBehavior: "allowed",
                        children: [
                          (0, t.jsx)(i.u, { cm: e.cm }),
                          (0, t.jsx)(T, {}),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
          })
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-deckard-hotfix/build/client/steamui/sourcemaps/sp.js.map
