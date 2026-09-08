"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    58616: (e, o, s) => {
      s.r(o), s.d(o, { default: () => k });
      var n = s(89748),
        t = s(62540),
        u = s(35560),
        c = s(61236),
        i = s(11972),
        r = s(63696),
        d = s(98606),
        a = s(91435),
        l = s(50341),
        w = s(22542),
        m = s(83857),
        f = s(42318);
      const v = r.memo(function (e) {
        return (0, t.jsxs)(f.wC, {
          children: [
            (0, t.jsx)(m.L, {}),
            (0, t.jsx)(l.BV, {}),
            (0, t.jsx)(w.Gm, {}),
            (0, t.jsx)(w.Gk, {}),
          ],
        });
      });
      var p = s(29971),
        j = s(87913),
        x = s(59578),
        h = s(7528),
        b = s(11131);
      const g = new (s(83599).wd)("ReactQuery").Debug;
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
            const s = o.window.document,
              n = () => {
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
              o.window.addEventListener("focus", n),
              o.window.addEventListener("blur", t),
              s.hasFocus() && n(),
              () => {
                o.window.removeEventListener("focus", n),
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
      (0, s(89193).jK)({ enforceActions: "never" }),
        (async function () {
          !(function () {
            let e = window;
            (e.ClearBackgroundInterval = window.clearInterval),
              (e.ClearBackgroundTimeout = window.clearTimeout),
              (e.SetBackgroundInterval = window.setInterval),
              (e.SetBackgroundTimeout = window.setTimeout);
          })();
          let e = (0, n.KC)();
          await e.Init(window.cm);
        })();
      const k = function (e) {
        const o = (0, n.gK)();
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
                          (0, t.jsx)(i.us, { cm: e.cm }),
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
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-hotfix-steamui/build/client/steamui/sourcemaps/sp.js.map
