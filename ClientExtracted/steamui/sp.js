"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    61855: (e, o, n) => {
      n.r(o), n.d(o, { default: () => E });
      var s = n(89748),
        t = n(62540),
        u = n(35560),
        r = n(58257),
        c = n(47999),
        i = n(63696),
        a = n(98606),
        d = n(91435),
        l = n(50341),
        m = n(45967),
        w = n(35194),
        f = n(90095);
      const p = i.memo(function () {
        const e = (0, w.Eb)(),
          o = (0, f.q3)(() => m.qL.IsSteamVRRunning);
        return (
          i.useEffect(() => {
            o &&
              SteamClient?.OpenVR?.PathProperties?.SetBoolPathProperty(
                "/steam/oobe",
                e,
              );
          }, [e, o]),
          null
        );
      });
      var v = n(83857),
        j = n(42318);
      const h = i.memo(function (e) {
        return (0, t.jsxs)(j.wC, {
          children: [
            (0, t.jsx)(v.L, {}),
            (0, t.jsx)(l.BV, {}),
            (0, t.jsx)(p, {}),
          ],
        });
      });
      var x = n(29971),
        b = n(87913),
        g = n(59578),
        F = n(7528),
        P = n(11131);
      const T = new (n(83599).wd)("ReactQuery").Debug;
      function k() {
        const [e] = i.useState(() => ({
          focusedPopup: void 0,
          timeoutFocusTransfer: void 0,
        }));
        i.useEffect(
          () => (
            T(`focusManager isVisible: ${F.m.isFocused()}`),
            F.m.subscribe((e) => T(`focusManager isVisible: ${e}`))
          ),
          [],
        );
        const o = i.useCallback(
          (o) => {
            const n = o.window.document,
              s = () => {
                e.timeoutFocusTransfer &&
                  (window.clearTimeout(e.timeoutFocusTransfer),
                  (e.timeoutFocusTransfer = void 0)),
                  (e.focusedPopup = o),
                  F.m.setFocused(!0);
              },
              t = () => {
                e.focusedPopup == o &&
                  ((e.focusedPopup = void 0),
                  (e.timeoutFocusTransfer = window.setTimeout(() => {
                    console.assert(!e.focusedPopup),
                      e.focusedPopup || F.m.setFocused(!1);
                  }, 50)));
              };
            return (
              o.window.addEventListener("focus", s),
              o.window.addEventListener("blur", t),
              n.hasFocus() && s(),
              () => {
                o.window.removeEventListener("focus", s),
                  o.window.removeEventListener("blur", t),
                  F.m.setFocused(!1);
              }
            );
          },
          [e],
        );
        (0, P.VR)(o);
      }
      const C = i.memo(function () {
        return (0, b.u$)()
          ? (0, t.jsx)(j.tH, { children: (0, t.jsx)(x._V, {}) })
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
      const E = function (e) {
        const o = (0, s.gK)();
        return (
          k(),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(d.EO, {
              bOnlyPopups: !0,
              children: [
                (0, t.jsx)(h, {}),
                o &&
                  (0, t.jsx)(u.VQ, {
                    controller: r.oy.NavigationManager,
                    children: (0, t.jsx)(a.p, {
                      children: (0, t.jsxs)(g.QA, {
                        eAdultOnlyMediaBehavior: "allowed",
                        children: [
                          (0, t.jsx)(c.u, { cm: e.cm }),
                          (0, t.jsx)(C, {}),
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
