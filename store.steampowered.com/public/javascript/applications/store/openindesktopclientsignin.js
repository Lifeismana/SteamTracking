/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [21349, 38843],
  {
    65274: (e) => {
      e.exports = {
        Text: "f6hU22EA7Z8peFWZVBJU",
        Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
        "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
        "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
        "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
        "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
        "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
        "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
        "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
        "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
        "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
        TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
        TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
        LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
        WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
      };
    },
    50122: (e) => {
      e.exports = {
        TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
        TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
        Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
        "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
        "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
        "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
        "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
      };
    },
    97824: (e) => {
      e.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    11131: (e) => {
      e.exports = { WishlistModalOverride: "_3zojRjiXppBm0x5n5HgAZ1" };
    },
    20187: (e, n, t) => {
      "use strict";
      t.d(n, { Ae: () => h, EY: () => d, U6: () => p });
      var i = t(7850),
        o = t(55348),
        s = t(11526),
        r = t(75659),
        a = t(64238),
        l = t.n(a),
        c = t(65274);
      function d(e) {
        const { as: n = "span", ref: t, className: o, ...r } = e,
          a = n;
        return (0, i.jsx)(a, {
          ref: t,
          ...(0, s.mz)({ ...r, className: l()(c.Text, o) }, h),
        });
      }
      const p = [
          {
            prop: "weight",
            responsive: !0,
            className: c.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: c.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, n, t) => [
              "--text-color",
              (0, s.To)(e, (0, o.I)(n.contrast, t) ?? "body"),
            ],
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, n, t) => [
              "--text-color",
              (0, s.To)((0, o.I)(n.color, t) ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: c.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: c.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: c.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        h = [
          ...p,
          ...r.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => c[`TextSize-${e}`],
          },
        ];
    },
    28491: (e, n, t) => {
      "use strict";
      t.d(n, { W: () => h, Y: () => d });
      var i = t(7850),
        o = t(50122),
        s = t(20187),
        r = t(11526),
        a = t(45699),
        l = t(39479),
        c = t(78327);
      function d(e) {
        const { underline: n = "auto", focusable: t, navProps: s, ...l } = e,
          d = (0, c.Qn)(),
          h = t ?? s?.focusable ?? !!l.href,
          u = (0, r.mz)({ ...l, underline: n, className: o.TextLink }, p);
        return d && (h || s)
          ? (0, i.jsx)(a.Ii, { ...u, ...(s || {}), focusable: h })
          : (0, i.jsx)("a", { ...u });
      }
      const p = [
        ...s.Ae,
        { prop: "underline", className: (e) => o[`Underline-${e}`] },
      ];
      function h(e) {
        const { underline: n = "auto", focusable: t, navProps: s, ...a } = e,
          d = (0, c.Qn)(),
          h = t ?? s?.focusable ?? !!a.onClick,
          u = (0, i.jsx)("span", {
            role: "button",
            ...(0, r.mz)(
              { ...a, underline: n, className: o.TextLinkButton },
              p,
            ),
          });
        return d && (h || s)
          ? (0, i.jsx)(l.J, { ...(s || {}), focusable: h, children: u })
          : u;
      }
    },
    84547: (e, n, t) => {
      "use strict";
      t.d(n, { lS: () => h, lh: () => u, vU: () => m });
      var i = t(7850),
        o = t(64753),
        s = t(66418),
        r = t(78686),
        a = t(78395),
        l = t(21869),
        c = t(67936),
        d = t(53965);
      function p(e) {
        const { closeModal: n, strDescOverride: t } = e;
        return (0, i.jsx)(a.o0, {
          strTitle: c.F5.Localize("#LoginRedirect_Dialog_Title"),
          strDescription:
            t || c.F5.Localize("#LoginRedirect_Dialog_Description"),
          onCancel: n,
          strOKButtonText: r.Z.Localize("#Button_OK"),
          onOK: () => {
            u(), n();
          },
        });
      }
      function h(e) {
        const [n, t, s] = (0, o.uD)();
        return {
          elDialogElement: (0, i.jsx)(l.E, {
            active: n,
            children: (0, i.jsx)(p, { closeModal: s, strDescOverride: e }),
          }),
          fnShowLogonDialog: t,
        };
      }
      function u() {
        const e = `${s.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        window.location.href = e;
      }
      function m(e) {
        const { label: n, strDialogDesc: t } = e,
          { elDialogElement: o, fnShowLogonDialog: s } = h(t);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.$, {
              onClick: s,
              children: n || r.Z.Localize("#Login_SignIn"),
            }),
            o,
          ],
        });
      }
    },
    67936: (e, n, t) => {
      "use strict";
      t.d(n, { F5: () => s });
      var i = t(13843);
      const o = {};
      (o.arabic = () => t.e(22940).then(t.t.bind(t, 22940, 19))),
        (o.brazilian = () => t.e(59990).then(t.t.bind(t, 59990, 19))),
        (o.bulgarian = () => t.e(38573).then(t.t.bind(t, 38573, 19))),
        (o.czech = () => t.e(40975).then(t.t.bind(t, 40975, 19))),
        (o.danish = () => t.e(38721).then(t.t.bind(t, 38721, 19))),
        (o.dutch = () => t.e(354).then(t.t.bind(t, 354, 19))),
        (o.english = () => t.e(49768).then(t.t.bind(t, 49768, 19))),
        (o.finnish = () => t.e(12931).then(t.t.bind(t, 12931, 19))),
        (o.french = () => t.e(6064).then(t.t.bind(t, 6064, 19))),
        (o.german = () => t.e(62942).then(t.t.bind(t, 62942, 19))),
        (o.greek = () => t.e(13924).then(t.t.bind(t, 13924, 19))),
        (o.hungarian = () => t.e(99441).then(t.t.bind(t, 99441, 19))),
        (o.indonesian = () => t.e(42584).then(t.t.bind(t, 42584, 19))),
        (o.italian = () => t.e(97688).then(t.t.bind(t, 97688, 19))),
        (o.japanese = () => t.e(5407).then(t.t.bind(t, 5407, 19))),
        (o.koreana = () => t.e(65815).then(t.t.bind(t, 65815, 19))),
        (o.latam = () => t.e(44287).then(t.t.bind(t, 44287, 19))),
        (o.malay = () => t.e(58160).then(t.t.bind(t, 35779, 19))),
        (o.norwegian = () => t.e(33648).then(t.t.bind(t, 33648, 19))),
        (o.polish = () => t.e(22649).then(t.t.bind(t, 22649, 19))),
        (o.portuguese = () => t.e(23629).then(t.t.bind(t, 23629, 19))),
        (o.romanian = () => t.e(81555).then(t.t.bind(t, 81555, 19))),
        (o.russian = () => t.e(11809).then(t.t.bind(t, 11809, 19))),
        (o.schinese = () => t.e(79004).then(t.t.bind(t, 79004, 19))),
        (o.spanish = () => t.e(97760).then(t.t.bind(t, 97760, 19))),
        (o.swedish = () => t.e(86881).then(t.t.bind(t, 86881, 19))),
        (o.tchinese = () => t.e(28183).then(t.t.bind(t, 28183, 19))),
        (o.thai = () => t.e(10950).then(t.t.bind(t, 10950, 19))),
        (o.turkish = () => t.e(22568).then(t.t.bind(t, 22568, 19))),
        (o.ukrainian = () => t.e(17038).then(t.t.bind(t, 17038, 19))),
        (o.vietnamese = () => t.e(62327).then(t.t.bind(t, 62327, 19)));
      const s = (0, i.l)(async function (e) {
        if (o[e]) return o[e]();
      });
    },
    74568: (e, n, t) => {
      "use strict";
      t.d(n, {
        mt: () => c,
        o0: () => p.o0,
        eV: () => h.eV,
        KG: () => p.KG,
        Ee: () => p.Ee,
        x_: () => a.x_,
        of: () => d,
        pY: () => p.pY,
        EN: () => r.E,
      });
      var i = t(7850),
        o = t(90626),
        s = t(56283),
        r = t(21869),
        a = t(2654);
      t(37049);
      function l(e) {
        const { labelledBy: n } = e || {},
          [t, i] = o.useState(void 0);
        return {
          headerId: n || t,
          context: o.useMemo(() => ({ setHeaderId: i }), []),
        };
      }
      function c(e) {
        const {
            active: n,
            onDismiss: t,
            className: o,
            modalClassName: c,
            bGamepadUIScrollWithin: d,
            children: p,
            ...h
          } = e,
          { headerId: u, context: m } = l({ labelledBy: e["aria-labelledby"] });
        return (0, i.jsx)(s.t6.Provider, {
          value: m,
          children: (0, i.jsx)(r.E, {
            active: n,
            children: (0, i.jsx)(a.x_, {
              onEscKeypress: t,
              className: c,
              bGamepadUIScrollWithin: d,
              children: (0, i.jsx)(s.UC, {
                role: "dialog",
                "aria-labelledby": u,
                className: o,
                ...h,
                children: p,
              }),
            }),
          }),
        });
      }
      function d(e) {
        const { className: n, children: t } = e;
        return (0, i.jsx)(r.E, {
          active: !0,
          children: (0, i.jsx)("div", { className: n, children: t }),
        });
      }
      t(6230);
      var p = t(78395),
        h = t(10411);
      t(76222);
    },
    37049: (e, n, t) => {
      "use strict";
      t.d(n, { wA: () => g });
      var i = t(7850),
        o = t(40236),
        s = t(90626),
        r = t(72739),
        a = t(13871),
        l = t(48902),
        c = t(60155),
        d = t(52745),
        p = t(21869),
        h = t(25118),
        u = t(66703),
        m = t(52038),
        x = t(28460);
      function b(e) {
        const { popup: n, className: t, ...o } = e,
          r = (0, x.GD)(n),
          a = s.useRef(null);
        return (
          s.useEffect(() => {
            const e = a.current;
            if (e && (0, u.Fj)(n, "Window.SetResizeGrip")) {
              let t = 0,
                i = 0;
              const o = e.getBoundingClientRect(),
                s = e.ownerDocument.defaultView;
              o &&
                s &&
                !r &&
                ((t = Math.ceil(s.innerWidth - o.left)),
                (i = Math.ceil(s.innerHeight - o.top))),
                n.SteamClient.Window.SetResizeGrip(t, i);
            }
            return () => {
              (0, u.Fj)(n, "Window.SetResizeGrip") &&
                n.SteamClient.Window.SetResizeGrip(0, 0);
            };
          }, [n, r]),
          r
            ? null
            : (0, i.jsx)("div", {
                className: (0, m.A)("window_resize_grip", t),
                ref: a,
                ...o,
              })
        );
      }
      var f = t(84933),
        _ = t(78327);
      const g = (e) =>
        (function (e) {
          const n = (0, a.R7)().ownerWindow,
            t = (0, _.Qn)(),
            [o, r] = s.useState(() =>
              t ||
              (!0 === e.onlyPopoutIfNeeded &&
                e.popupHeight < 0.9 * n.innerHeight &&
                e.popupWidth < 0.9 * n.innerWidth &&
                "visible" == n.document.visibilityState)
                ? "inline"
                : "popout",
            );
          return "inline" === o
            ? (0, i.jsx)(p.E, { active: !0, children: e.children })
            : "popout" === o
              ? (0, i.jsx)(S, { ...e })
              : null;
        })({ modal: !0, ...e });
      function w(e) {
        const {
            popup: n,
            children: t,
            bFitToContent: r,
            className: a,
            ...l
          } = e,
          c = s.useCallback(
            (e) => {
              const t = Math.ceil(e.borderBoxSize[0].inlineSize),
                i = Math.ceil(e.borderBoxSize[0].blockSize);
              n?.SteamClient.Window.ResizeTo(t, i, !0);
            },
            [n],
          ),
          d = (0, o.wY)(c);
        return (0, i.jsx)("div", {
          className: (0, m.A)("PopupFullWindow", r && "FitToContent", a),
          ref: r ? d : void 0,
          ...l,
          children: t,
        });
      }
      function S(e) {
        const {
            strName: n,
            strTitle: t,
            popupWidth: o,
            popupHeight: p,
            browserType: u,
            onDismiss: m,
            bFitToContent: x,
            refPopup: _,
            children: g,
            titleBarClassName: S,
            saveDimensionsKey: v,
          } = e,
          T = (0, a.R7)(),
          C = T?.ownerWindow,
          z = (0, d.yk)(),
          B = { ...(0, l.h3)(v), onClose: m };
        let W = 0;
        e.resizable && (W |= a.Wf.Resizable),
          (e.minWidth || e.minHeight) &&
            (W |= a.Wf.ApplyBrowserScaleToDimensions),
          e.fullscreen && (W |= a.Wf.FullScreen);
        const O = "PopupWindow_" + (n ? `${n}_` : "") + s.useId(),
          { popup: N, element: k } = (0, l.OJ)(
            O,
            {
              title: t,
              dimensions: { width: o, height: p },
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              popup_class: "fullheight",
              browserType: u,
              minWidth: e.minWidth,
              minHeight: e.minHeight,
              replace_existing_popup: !0,
              center_on_window: z?.BCenterPopupsOnWindow() ? C : void 0,
              eCreationFlags: W,
              target_browser: z?.GetBrowserInfo(),
            },
            B,
          );
        if (
          (s.useEffect(
            () => ((0, f.cZ)(_, N), () => (0, f.cZ)(_, void 0)),
            [_, N],
          ),
          s.useEffect(() => {
            N && (N.document.title = t ?? n);
          }, [N, t, n]),
          !k)
        )
          return null;
        const I = e.modal ?? e.onlyPopoutIfNeeded,
          D = !e.resizable;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            I && (0, i.jsx)(j, { popup: N }),
            r.createPortal(
              (0, i.jsxs)(a.kc, {
                ownerWindow: N,
                children: [
                  (0, i.jsxs)(w, {
                    popup: N,
                    bFitToContent: x,
                    onContextMenu: c.aE,
                    children: [
                      (0, i.jsx)(h.c, {
                        className: S,
                        hideMin: D,
                        hideMax: D,
                        popup: N,
                        hideActions: !m,
                      }),
                      (0, i.jsx)(d.EO, {
                        bCenterPopupsOnWindow: z?.BCenterPopupsOnWindow(),
                        browserInfo: z?.GetBrowserInfo(),
                        children: g,
                      }),
                    ],
                  }),
                  e.resizable && !x && (0, i.jsx)(b, { popup: N }),
                ],
              }),
              k,
            ),
          ],
        });
      }
      function j(e) {
        const { popup: n } = e,
          t = s.useCallback(() => {
            n?.SteamClient.Window.BringToFront();
          }, [n]);
        return (
          s.useEffect(t, [t]),
          (0, i.jsx)(p.E, {
            active: !0,
            children: (0, i.jsx)("div", {
              style: {
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              },
              onClick: t,
            }),
          })
        );
      }
    },
    71009: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          OpenInDesktopClient: () => d,
          default: () => h,
          useOpenWebInSteamClient: () => p,
        });
      var i = t(7850),
        o = t(90626),
        s = t(84811),
        r = t(97824),
        a = t(78327),
        l = t(2627),
        c = t(61859);
      const d = (0, s.Nr)(function (e) {
        const { fnOpenInSteamClient: n } = p();
        return (0, i.jsx)("div", {
          className: r.OpenInBannerContainer,
          children: (0, i.jsxs)("div", {
            className: r.OpenInBannerContent,
            children: [
              (0, i.jsx)("div", {
                className: r.BannerButtonContainer,
                children: (0, i.jsx)("div", {
                  onClick: n,
                  className: r.BannerButton,
                  children: (0, c.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, i.jsx)("div", {
                className: r.BannerMessage,
                children: (0, i.jsxs)("div", {
                  className: r.BannerTitle,
                  children: [
                    (0, i.jsx)("b", {
                      children: (0, c.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, c.we)("#OpenInDesktopAppBanner_Body"),
                  ],
                }),
              }),
            ],
          }),
        });
      });
      function p() {
        return {
          fnOpenInSteamClient: o.useCallback(() => {
            let e = `${(0, a.yl)()}//openurl/`;
            const n = (0, l.VY)("browserid");
            if (n) {
              const t = new URL(window.location.href),
                i = new URLSearchParams(t.search);
              i.set("utm_bid", n),
                (e += t.origin + t.pathname + "?" + i.toString() + t.hash);
            } else e += window.location.href;
            window.location.href = e;
          }, []),
        };
      }
      const h = d;
    },
    26240: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { OpenInDesktopOrSignIn: () => j, default: () => v });
      var i = t(7850),
        o = t(53965),
        s = t(83392),
        r = t(20187),
        a = t(28491),
        l = t(67936),
        c = t(84547),
        d = t(78686),
        p = t(84811),
        h = t(74568),
        u = t(71009),
        m = t(32754),
        x = t(61859),
        b = t(84933),
        f = t(30470),
        _ = t(11131),
        g = t.n(_),
        w = t(90626),
        S = t(92724);
      const j = (0, p.Nr)(function (e) {
          const { fnOpenInSteamClient: n } = (0, u.useOpenWebInSteamClient)(),
            [t, p, _] = (0, b.uD)();
          return (
            (0, w.use)((0, S.u)()),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(m.Gq, {
                  toolTipContent: d.Z.Localize("#AddToWishlist_ttip"),
                  children: (0, i.jsx)(o.$, {
                    onClick: p,
                    children: (0, x.we)("#AddToYourWishlist"),
                  }),
                }),
                (0, i.jsx)(h.EN, {
                  active: t,
                  children: (0, i.jsxs)(h.o0, {
                    strTitle: (0, x.we)("#OpenInDesktopAppBanner_NotSignedIn"),
                    className: g().WishlistModalOverride,
                    strDescription: l.F5.Localize("#Wishlist_NotSignedIn"),
                    closeModal: _,
                    bAlertDialog: !0,
                    children: [
                      (0, i.jsxs)(s.s, {
                        direction: "row",
                        gap: "4",
                        paddingTop: "4",
                        paddingBottom: "4",
                        children: [
                          (0, i.jsx)(o.$, {
                            onClick: n,
                            children: (0, x.we)(
                              "#OpenInDesktopAppBanner_OpenAppButton",
                            ),
                          }),
                          (0, i.jsx)(o.$, {
                            color: "dull",
                            onClick: c.lh,
                            children: d.Z.Localize("#Login_SignIn"),
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.EY, {
                        children: (0, x.oW)(
                          "#GotSteam_NeedSteam",
                          (0, i.jsx)(a.Y, {
                            href: `${f.TS.STORE_BASE_URL}about`,
                          }),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        }),
        v = j;
    },
  },
]);
