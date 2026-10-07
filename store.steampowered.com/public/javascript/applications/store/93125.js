/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [93125],
    {
      93125: (h, _, i) => {
        "use strict";
        i.d(_, { A: () => D, D: () => V });
        var e = i(7850),
          S = i(90626),
          j = i(75844),
          m = i(18210),
          P = i(99412),
          f = i(5858),
          d = i(36707),
          O = i(56420),
          u = i.n(O),
          T = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          w = (c, a, n, t) => {
            for (
              var r = t > 1 ? void 0 : t ? U(a, n) : a, l = c.length - 1, o;
              l >= 0;
              l--
            )
              (o = c[l]) && (r = (t ? o(a, n, r) : o(r)) || r);
            return t && r && T(a, n, r), r;
          };
        let b = class extends S.Component {
          static get hoverClass() {
            return u().hoverParent;
          }
          render() {
            const {
              persona: c,
              animating: a,
              className: n,
              size: t,
              dim: r,
              ...l
            } = this.props;
            let o = "";
            return (
              t == "medium"
                ? (o = u().Medium)
                : t == "large" && (o = u().Large),
              (0, e.jsxs)("div", {
                className: (0, d.A)(
                  u().SnoozeContainer,
                  c.online_state,
                  n,
                  a && u().animating,
                  o,
                  r && u().Dim,
                ),
                ...l,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, d.A)(u().SnoozeZ, u().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, d.A)(u().SnoozeZ, u().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, d.A)(u().SnoozeZ, u().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        b = w([j.PA], b);
        var y = i(88363),
          x = i(36118),
          L = i(70342),
          p = i.n(L),
          M = i(75975);
        const B = (0, j.PA)((c) => {
          const { persona: a, className: n, ...t } = c;
          if (!a || !a.is_online) return null;
          const r = a.HasStateFlag(y.R$),
            l = a.HasStateFlag(y.hs),
            o = a.m_eGamingDeviceType == P.LS$,
            I = a.m_eGamingDeviceType == P.ppM,
            N = !o && !I && !l && a.HasStateFlag(y.sr);
          return (0, e.jsxs)(S.Fragment, {
            children: [
              r &&
                (0, e.jsx)("div", {
                  className: (0, d.A)(
                    n,
                    p().PersonaStatusIcon,
                    p().MobilePhoneIcon,
                    (0, f.rO)(a),
                  ),
                  title: (0, m.we)("#Platform_Hint_Mobile"),
                  ...t,
                  children: (0, e.jsx)(M.rf, {}),
                }),
              l &&
                (0, e.jsx)("div", {
                  className: (0, d.A)(
                    n,
                    p().PersonaStatusIcon,
                    p().VRIcon,
                    (0, f.rO)(a),
                  ),
                  title: (0, m.we)("#Platform_Hint_VR"),
                  ...t,
                  children: (0, e.jsx)(x.MUh, {}),
                }),
              N &&
                (0, e.jsx)("div", {
                  className: (0, d.A)(
                    n,
                    p().PersonaStatusIcon,
                    p().BigPictureIcon,
                    (0, f.rO)(a),
                  ),
                  title: (0, m.we)("#Platform_Hint_BigPicture"),
                  ...t,
                  children: (0, e.jsx)(x.bPr, {}),
                }),
              o &&
                (0, e.jsx)("div", {
                  className: (0, d.A)(
                    n,
                    p().PersonaStatusIcon,
                    p().SteamDeckIcon,
                    (0, f.rO)(a),
                  ),
                  title: (0, m.we)("#Platform_Hint_SteamDeck"),
                  ...t,
                  children: (0, e.jsx)(x.DQe, {}),
                }),
              I &&
                (0, e.jsx)("div", {
                  className: (0, d.A)(
                    n,
                    p().PersonaStatusIcon,
                    p().SteamDeckIcon,
                    (0, f.rO)(a),
                  ),
                  title: (0, m.we)("#Platform_Hint_LegionGoS"),
                  ...t,
                  children: (0, e.jsx)(x.DQe, {}),
                }),
            ],
          });
        });
        var E = i(18828),
          s = i.n(E),
          Z = i(3166),
          k = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          R = (c, a, n, t) => {
            for (
              var r = t > 1 ? void 0 : t ? z(a, n) : a, l = c.length - 1, o;
              l >= 0;
              l--
            )
              (o = c[l]) && (r = (t ? o(a, n, r) : o(r)) || r);
            return t && r && k(a, n, r), r;
          };
        function H(c) {
          return (0, e.jsxs)(S.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: s().partyBeaconJoin,
                children: (0, m.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              c.persona.GetCurrentGameName(),
            ],
          });
        }
        let V = class extends S.Component {
          render() {
            const {
              className: c,
              onContextMenu: a,
              persona: n,
              eFriendRelationship: t,
              bIsSelf: r,
              bParenthesizeNicknames: l,
              strNickname: o,
              bCompactView: I,
              bHideGameName: N,
              bHideEnhancedRichPresenceLabel: C,
              bHideSnooze: W,
              bHideStatus: se,
              renderStatus: X,
              renderRichPresence: K,
              bHidePersona: v,
              bDNDSet: te,
              bHasPartyBeacon: re,
              bHasGamePrivacy: ie,
              bNoMask: oe,
              bEllipsisName: me,
              bDropPadding: Y,
              ...ce
            } = this.props;
            let J = null,
              G = null,
              g = null,
              A = [
                c,
                s().personaNameAndStatusLabel,
                (0, f.rO)(n),
                I ? s().compactView : void 0,
                oe ? s().NoMask : void 0,
              ];
            re || n.has_public_party_beacon
              ? (G = (0, e.jsx)(H, { persona: n }))
              : (0, P.aPS)(t)
                ? ((G = (0, m.we)("#PersonaStateBlocked")), A.push(s().blocked))
                : n.is_ingame
                  ? (!n.is_in_nonsteam_game || r || (0, P.S$u)(t)
                      ? (G = n.GetCurrentGameName())
                      : (G = (0, m.we)("#PersonaStateInNonSteamGame")),
                    !r && !v
                      ? (g = n.GetCurrentGameRichPresence())
                      : r &&
                        n.is_awayOrSnooze &&
                        (g = (0, m.we)("#PersonaStateAway")))
                  : n.m_broadcastAccountId &&
                    (G = (0, m.we)("#PersonaStateWatchingBroadcast")),
              G || (G = n.GetLocalizedOnlineStatus()),
              X && (G = X());
            let Q = !v && !W;
            W === !1 && (Q = !0),
              n.is_awayOrSnooze && Q && (J = (0, e.jsx)(b, { persona: n }));
            let $ = (0, e.jsx)(e.Fragment, {});
            a
              ? ($ = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: a,
                  children: (0, e.jsx)(x.GB9, {}),
                }))
              : A.push(s().noContextMenu),
              v && A.push(s().hidePersona),
              K && (g = K()),
              (N || !g) && A.push(s().twoLine);
            const q = !n.is_ingame && !se,
              F = !C && g,
              ee = G && (!N || !F),
              le = (0, P.IDH)(Z.TS.LAUNCHER_TYPE);
            let ae = o && !l,
              de = ae ? o : n.m_strPlayerName,
              ne = !v && (ee || q) && F;
            return (0, e.jsxs)("div", {
              ...ce,
              className: (0, d.A)(...A),
              onContextMenu: a,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, d.A)(
                    s().statusAndName,
                    ne ? s().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, d.A)(
                        s().playerName,
                        me ? s().EllipsisName : void 0,
                      ),
                      children: [
                        de || "\xA0",
                        l &&
                          o &&
                          (0, e.jsxs)("span", {
                            className: s().playerNickname,
                            children: ["(", o, ")"],
                          }),
                      ],
                    }),
                    te &&
                      (0, e.jsx)("div", {
                        className: s().DNDContainer,
                        title: (0, m.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(x.Aj0, {}),
                      }),
                    ae &&
                      (0, e.jsx)("span", {
                        className: s().playerNicknameBracket,
                        title: (0, m.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(B, { persona: n }),
                    J,
                    (n.m_bPlayerNamePending || n.m_bAvatarPending) &&
                      le &&
                      (0, e.jsx)("div", {
                        className: s().PendingPersona,
                        title: (0, m.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(x.zD7, {}),
                      }),
                    $,
                  ],
                }),
                !v &&
                  (0, e.jsxs)("div", {
                    className: s().richPresenceContainer,
                    children: [
                      (ee || q) &&
                        (0, e.jsxs)("div", {
                          className: (0, d.A)(
                            s().gameName,
                            ne ? s().threeLines : void 0,
                            s().richPresenceLabel,
                            Y && s().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            ie &&
                              (0, e.jsx)("div", {
                                className: s().gameIsPrivateIcon,
                                title: (0, m.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(x.jZl, {}),
                              }),
                            G,
                          ],
                        }),
                      F &&
                        (0, e.jsxs)("div", {
                          className: (0, d.A)(
                            s().richPresenceLabel,
                            Y && s().dropPadding,
                            "no-drag",
                          ),
                          children: [g, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        V = R([j.PA], V);
        const D = (0, j.PA)((c) => {
          const {
            persona: a,
            bParenthesizeNicknames: n,
            strNickname: t,
            bIgnorePersonaStatus: r,
            bDisableColoring: l,
            className: o,
            ...I
          } = c;
          let C = t && !n ? t : a.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...I,
            className: (0, d.A)(
              o,
              l && s().DisableColoring,
              !r && (0, f.rO)(a),
            ),
            children: (0, e.jsxs)("span", {
              className: s().playerName,
              children: [
                C || "\xA0",
                n &&
                  t &&
                  (0, e.jsxs)("span", {
                    className: s().playerNickname,
                    children: ["(", t, ")"],
                  }),
              ],
            }),
          });
        });
      },
      75975: (h, _, i) => {
        "use strict";
        i.d(_, { Jl: () => u, nl: () => c, rf: () => D });
        var e = i(7850),
          S = i(36118),
          j = i(56718),
          m = i(3166);
        function P() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function f(a) {
          const n = a.filled ?? !0;
          return useInGamepadUI()
            ? n
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function d(a) {
          const n = a.filled ?? !0;
          return useInGamepadUI()
            ? n
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function O() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function u(a) {
          return (0, m.Qn)()
            ? (0, e.jsx)(j.MGO, { ...a })
            : (0, e.jsx)(S.Jlk, { ...a });
        }
        function T() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function U() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function w(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function b() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function y() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function x(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function L(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: a.className });
        }
        function p(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: a.className });
        }
        function M(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: a.className })
            : jsx(SVG.CommentThread, { className: a.className });
        }
        function B() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function E() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function s() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function Z() {
          return jsx(GamepadSVG.Globe, {});
        }
        function k() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function z() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function R() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function H() {
          return jsx(GamepadSVG.Add, {});
        }
        function V() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function D() {
          return (0, e.jsx)(S.rfv, {});
        }
        function c() {
          return (0, m.Qn)() ? (0, e.jsx)(j.nl, {}) : (0, e.jsx)(S.jZW, {});
        }
      },
      56420: (h) => {
        h.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      18828: (h) => {
        h.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
          BackgroundAnimation: "_2hlRK2hm0pHy1YSxwknFCj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Ye-Lgym31_-ibnmbFywrn",
          "ItemFocusAnim-darkerGrey": "_1klcEk0V0JFATe7imIRZ1C",
          "ItemFocusAnim-darkGreySettings": "_1o29CI_yDNVtgTV1cxDqGZ",
          "ItemFocusAnim-darkGrey": "_2BtPOA0wSbFULgc-Zh-0_x",
          "ItemFocusAnim-grey": "_24LF-yODOtVFSuejuQ_xu2",
          "ItemFocusAnim-translucent-white-10": "uTNXVgYo8JPxZgJyTl9LQ",
          "ItemFocusAnim-translucent-white-20": "ItJlj151fY2eNJEBeWVOA",
          "ItemFocusAnimBorder-darkGrey": "_2blFzc6unV1uJG63OhTkyP",
          "ItemFocusAnim-green": "_3CaU0PXdB2ThLG-Q0foVrK",
          focusAnimation: "_1EZdMwnQzoxjAOoFpXHuZ_",
          hoverAnimation: "kfeP_UGfxsZwzWvFD4ytm",
        };
      },
      70342: (h) => {
        h.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
          BackgroundAnimation: "_3EMAF_7GAyPW8G7OSt8s0z",
          "ItemFocusAnim-darkerGrey-nocolor": "_3fWOpZpfDmwOCKEdw8xcqf",
          "ItemFocusAnim-darkerGrey": "_2Tvf1f8cUg1eYlQg027B3W",
          "ItemFocusAnim-darkGreySettings": "_1tKhhjTYPWAz5_eQe91O1A",
          "ItemFocusAnim-darkGrey": "_1l7IyrCH5ez4PBO7R4h8RT",
          "ItemFocusAnim-grey": "_3X7_M9NEYzjKEgQRMQevkQ",
          "ItemFocusAnim-translucent-white-10": "_3YCxpOEfjLuLbB1hut87fZ",
          "ItemFocusAnim-translucent-white-20": "_2kvhksXgWA4vxGz5Oy1tV1",
          "ItemFocusAnimBorder-darkGrey": "_3N1wGZIJ5QySTBWgyBavuM",
          "ItemFocusAnim-green": "Vgab6fHUHvZ-iWKRJwy8h",
          focusAnimation: "GvE_FaPqTf1D0HASx1C_0",
          hoverAnimation: "_88lGefJsUDJUpRFJ3pUq7",
        };
      },
    },
  ]);
})();
