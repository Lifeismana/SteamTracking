/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [38843],
    {
      90114: (i, l, n) => {
        "use strict";
        n.r(l),
          n.d(l, {
            OpenInDesktopClient: () => _,
            default: () => E,
            useOpenWebInSteamClient: () => O,
          });
        var e = n(7850),
          c = n(90626),
          d = n(25792),
          s = n(97824),
          I = n.n(s),
          B = n(3166),
          C = n(97996),
          r = n(18210);
        const _ = (0, d.Nr)(function (t) {
          const { fnOpenInSteamClient: a } = O();
          return (0, e.jsx)("div", {
            className: s.OpenInBannerContainer,
            children: (0, e.jsxs)("div", {
              className: s.OpenInBannerContent,
              children: [
                (0, e.jsx)("div", {
                  className: s.BannerButtonContainer,
                  children: (0, e.jsx)("div", {
                    onClick: a,
                    className: s.BannerButton,
                    children: (0, r.we)(
                      "#OpenInDesktopAppBanner_OpenAppButton",
                    ),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: s.BannerMessage,
                  children: (0, e.jsxs)("div", {
                    className: s.BannerTitle,
                    children: [
                      (0, e.jsx)("b", {
                        children: (0, r.we)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, r.we)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function O() {
          return {
            fnOpenInSteamClient: c.useCallback(() => {
              let t = `${(0, B.yl)()}//openurl/`;
              const a = (0, C.VY)("browserid");
              if (a) {
                const o = new URL(window.location.href),
                  p = new URLSearchParams(o.search);
                p.set("utm_bid", a),
                  (t += o.origin + o.pathname + "?" + p.toString() + o.hash);
              } else t += window.location.href;
              window.location.href = t;
            }, []),
          };
        }
        const E = _;
      },
      97824: (i) => {
        i.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
    },
  ]);
})();
