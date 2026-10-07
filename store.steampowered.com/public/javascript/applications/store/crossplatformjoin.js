/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [15068],
    {
      86390: (J, B, n) => {
        "use strict";
        n.d(B, { Cg: () => U, pZ: () => K, vg: () => z });
        var e = n(7850),
          P = n(90626),
          i = n(88003),
          d = n(18210),
          N = n(3166),
          g = n(34004),
          y = n(6740),
          G = n(3685),
          A = n(8059),
          F = n(96538);
        function O(m) {
          return (0, e.jsx)(i.x_, {
            onEscKeypress: m.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(S, {
              redirectURL: m.redirectURL,
              guestOption: m.guestOption,
            }),
          });
        }
        function U(m) {
          const { redirectURL: x = window.location.href } = m;
          return (0, e.jsx)(F.EN, {
            active: !0,
            children: (0, e.jsx)(O, { redirectURL: x }),
          });
        }
        function z() {
          (0, i.pg)(
            (0, e.jsx)(O, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function K(m, x) {
          (0, i.pg)(
            (0, e.jsx)(O, { ownerWin: window, redirectURL: m, guestOption: x }),
            window,
            { strTitle: (0, d.we)("#Login_SignInTitle") },
          );
        }
        function S(m) {
          const { redirectURL: x, guestOption: r } = m,
            [c] = (0, P.useState)(
              new G.D(N.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [h, v] = (0, P.useState)(!1),
            j = (o) => {
              o == A.wI.k_PrimaryDomainFail ? v(!0) : window.location.assign(x);
            };
          return (0, e.jsx)("div", {
            children: h
              ? (0, e.jsx)(g.Fn, {})
              : (0, e.jsx)(g.YN, {
                  autoFocus: !0,
                  transport: c,
                  platform: y.SS.tS,
                  onComplete: j,
                  redirectUrl: x,
                  theme: "modal",
                  children: r && (0, e.jsx)(g.Mk, { redirectURL: x }),
                }),
          });
        }
      },
      96538: (J, B, n) => {
        "use strict";
        n.d(B, {
          mt: () => G,
          o0: () => S.o0,
          eV: () => m.eV,
          KG: () => S.KG,
          Ee: () => S.Ee,
          x_: () => N.x_,
          of: () => O,
          pY: () => S.pY,
          EN: () => d.E,
        });
        var e = n(7850),
          P = n(90626),
          i = n(16412),
          d = n(69168),
          N = n(50731),
          g = n(15568);
        function y(r) {
          const { labelledBy: c } = r || {},
            [h, v] = P.useState(void 0),
            j = P.useMemo(() => ({ setHeaderId: v }), []);
          return { headerId: c || h, context: j };
        }
        function G(r) {
          const {
              active: c,
              onDismiss: h,
              className: v,
              modalClassName: j,
              bGamepadUIScrollWithin: o,
              children: t,
              ...l
            } = r,
            { headerId: u, context: p } = y({
              labelledBy: r["aria-labelledby"],
            });
          return (0, e.jsx)(i.t6.Provider, {
            value: p,
            children: (0, e.jsx)(d.E, {
              active: c,
              children: (0, e.jsx)(N.x_, {
                onEscKeypress: h,
                className: j,
                bGamepadUIScrollWithin: o,
                children: (0, e.jsx)(i.UC, {
                  role: "dialog",
                  "aria-labelledby": u,
                  className: v,
                  ...l,
                  children: t,
                }),
              }),
            }),
          });
        }
        function A(r) {
          const {
              onDismiss: c,
              className: h,
              modalClassName: v,
              bGamepadUIScrollWithin: j,
              children: o,
              ...t
            } = r,
            { headerId: l, context: u } = y();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: u,
            children: jsx(PopupWindow, {
              ...t,
              onDismiss: c,
              children: jsx(ModalPosition, {
                onEscKeypress: c,
                className: v,
                bGamepadUIScrollWithin: j,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": l,
                  "aria-label": t.strTitle,
                  className: h,
                  children: o,
                }),
              }),
            }),
          });
        }
        const F = (r) => A({ modal: !0, ...r });
        function O(r) {
          const { className: c, children: h } = r;
          return (0, e.jsx)(d.E, {
            active: !0,
            children: (0, e.jsx)("div", { className: c, children: h }),
          });
        }
        var U = n(30343);
        function z(r) {
          const c = React.useMemo(() => K(), []);
          return jsx(DialogOverlay, { ...r, DialogWrapper: c });
        }
        function K() {
          return function (c) {
            const { className: h, active: v, children: j, modalKey: o } = c,
              t = React.useRef(void 0);
            return (
              useActivateNavTree(t, v, !0),
              jsx(FocusNavigationRoot, {
                className: h,
                navTreeRef: t,
                modal: !0,
                enabled: v,
                navID: `ModalDialogOverlay_${o}`,
                children: j,
              })
            );
          };
        }
        var S = n(1880),
          m = n(90506),
          x = n(47515);
      },
      15568: (J, B, n) => {
        "use strict";
        n.d(B, { wA: () => r });
        var e = n(7850),
          P = n(1418),
          i = n(2259),
          d = n(90626),
          N = n(72739),
          g = n(71568),
          y = n(9705),
          G = n(34360),
          A = n(31032),
          F = n(69168),
          O = n(83203),
          U = n(44930),
          z = n(36707),
          K = n(25091);
        function S(o) {
          const { popup: t, className: l, ...u } = o,
            p = (0, K.GD)(t),
            L = d.useRef(null);
          return (
            d.useEffect(() => {
              const I = L.current;
              if (I && (0, U.Fj)(t, "Window.SetResizeGrip")) {
                let w = 0,
                  C = 0;
                const s = I.getBoundingClientRect(),
                  a = I.ownerDocument.defaultView;
                s &&
                  a &&
                  !p &&
                  ((w = Math.ceil(a.innerWidth - s.left)),
                  (C = Math.ceil(a.innerHeight - s.top))),
                  t.SteamClient.Window.SetResizeGrip(w, C);
              }
              return () => {
                (0, U.Fj)(t, "Window.SetResizeGrip") &&
                  t.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [t, p]),
            p
              ? null
              : (0, e.jsx)("div", {
                  className: (0, z.A)("window_resize_grip", l),
                  ref: L,
                  ...u,
                })
          );
        }
        var m = n(30096),
          x = n(3166);
        const r = (o) => c({ modal: !0, ...o });
        function c(o) {
          const t = (0, g.R7)().ownerWindow,
            l = (0, x.Qn)(),
            [u, p] = d.useState(() =>
              l ||
              (o.onlyPopoutIfNeeded === !0 &&
                o.popupHeight < t.innerHeight * 0.9 &&
                o.popupWidth < t.innerWidth * 0.9 &&
                t.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return u === "inline"
            ? (0, e.jsx)(F.E, { active: !0, children: o.children })
            : u === "popout"
              ? (0, e.jsx)(v, { ...o })
              : null;
        }
        function h(o) {
          const {
              popup: t,
              children: l,
              bFitToContent: u,
              className: p,
              ...L
            } = o,
            I = d.useCallback(
              (C) => {
                const s = Math.ceil(C.borderBoxSize[0].inlineSize),
                  a = Math.ceil(C.borderBoxSize[0].blockSize);
                t?.SteamClient.Window.ResizeTo(s, a, !0);
              },
              [t],
            ),
            w = (0, i.wY)(I);
          return (0, e.jsx)("div", {
            className: (0, z.A)("PopupFullWindow", u && "FitToContent", p),
            ref: u ? w : void 0,
            ...L,
            children: l,
          });
        }
        function v(o) {
          const {
              strName: t,
              strTitle: l,
              popupWidth: u,
              popupHeight: p,
              browserType: L,
              onDismiss: I,
              bFitToContent: w,
              refPopup: C,
              children: s,
              titleBarClassName: a,
              saveDimensionsKey: D,
            } = o,
            b = (0, g.R7)()?.ownerWindow,
            E = (0, A.yk)(),
            R = { ...(0, y.h3)(D), onClose: I };
          let T = 0;
          o.resizable && (T |= g.Wf.Resizable),
            (o.minWidth || o.minHeight) &&
              (T |= g.Wf.ApplyBrowserScaleToDimensions),
            o.fullscreen && (T |= g.Wf.FullScreen);
          const Y = "PopupWindow_" + (t ? `${t}_` : "") + d.useId(),
            { popup: W, element: H } = (0, y.OJ)(
              Y,
              {
                title: l,
                dimensions: { width: u, height: p },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: L,
                minWidth: o.minWidth,
                minHeight: o.minHeight,
                replace_existing_popup: !0,
                center_on_window: E?.BCenterPopupsOnWindow() ? b : void 0,
                eCreationFlags: T,
                target_browser: E?.GetBrowserInfo(),
              },
              R,
            );
          if (
            (d.useEffect(
              () => ((0, m.cZ)(C, W), () => (0, m.cZ)(C, void 0)),
              [C, W],
            ),
            d.useEffect(() => {
              W && (W.document.title = l ?? t);
            }, [W, l, t]),
            !H)
          )
            return null;
          const $ = o.modal ?? o.onlyPopoutIfNeeded,
            V = !o.resizable;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              $ && (0, e.jsx)(j, { popup: W }),
              N.createPortal(
                (0, e.jsx)(g.kc, {
                  ownerWindow: W,
                  children: (0, e.jsxs)(P.Y, {
                    children: [
                      (0, e.jsxs)(h, {
                        popup: W,
                        bFitToContent: w,
                        onContextMenu: G.aE,
                        children: [
                          (0, e.jsx)(O.c, {
                            className: a,
                            hideMin: V,
                            hideMax: V,
                            popup: W,
                            hideActions: !I,
                          }),
                          (0, e.jsx)(A.EO, {
                            bCenterPopupsOnWindow: E?.BCenterPopupsOnWindow(),
                            browserInfo: E?.GetBrowserInfo(),
                            children: s,
                          }),
                        ],
                      }),
                      o.resizable && !w && (0, e.jsx)(S, { popup: W }),
                    ],
                  }),
                }),
                H,
              ),
            ],
          });
        }
        function j(o) {
          const { popup: t } = o,
            l = d.useCallback(() => {
              t?.SteamClient.Window.BringToFront();
            }, [t]);
          return (
            d.useEffect(l, [l]),
            (0, e.jsx)(F.E, {
              active: !0,
              children: (0, e.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: l,
              }),
            })
          );
        }
      },
      67628: (J, B, n) => {
        "use strict";
        n.r(B), n.d(B, { default: () => C });
        var e = n(7850),
          P = n(9054),
          i = n.n(P),
          d = n(92757),
          N = n(68312),
          g = n(50855),
          y = n(58632),
          G = n.n(y),
          A = n(80902),
          F = n(72604),
          O = n(35038),
          U = n(72849),
          z = n(98609),
          K = n(99412);
        let S;
        const m = 1440 * 60 * 1e3;
        function x(s) {
          return `appinfo_${s}_${z.TS.LANGUAGE}`;
        }
        function r(s) {
          return !!(s && Date.now() - s.timeCached < m);
        }
        function c(s, a) {
          return (
            S ||
              (S = new (G())(
                async (D) => {
                  const M = new Map();
                  (await Promise.all(D.map((f) => a.GetObject(x(f)))))
                    .filter(r)
                    .forEach(({ value: f }) => M.set(f.appid, f));
                  const E = D.slice().filter((f) => !M.has(f));
                  if (E.length) {
                    const f = O.w.Init(U._z);
                    f.Body().set_language((0, K.sfN)(z.TS.LANGUAGE)),
                      f.Body().set_appids(E);
                    const R = await U.BE.GetApps(s, f);
                    if (R.GetEResult() != F.R) throw R.GetErrorMessage();
                    R.Body()
                      .toObject()
                      .apps.forEach((T) => {
                        a.StoreObject(x(T.appid), {
                          timeCached: Date.now(),
                          value: T,
                        }),
                          M.set(T.appid, T);
                      });
                  }
                  return D.map((f) => M.get(f));
                },
                { cache: !1 },
              )),
            S
          );
        }
        function h(s) {
          const a = (0, N.KV)(),
            D = (0, N.rX)();
          return (0, A.I)({
            queryKey: ["appinfo", s],
            queryFn: async () => c(a, D).load(s),
            staleTime: m,
            enabled: !!s,
          }).data;
        }
        var v = n(23761),
          j = n(18210),
          o = n(86390),
          t = n(16412),
          l = n(85599),
          u = n(3166);
        function p(s) {
          return `?joinsessionid=${s}`;
        }
        function L(s) {
          return (0, e.jsx)(t.$n, {
            className: i().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${s.steamAppId}` + p(s.sessionID)),
            children: s.children,
          });
        }
        function I(s) {
          const a = (0, v.Vc)(),
            D = (0, N.KV)();
          return a.isSuccess
            ? a.data?.sessions?.length > 0
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(t.JU, {
                      className: i().AvailableSessionsText,
                      children: "Available Steam Sessions:",
                    }),
                    (0, e.jsx)("div", {
                      className: i().SessionList,
                      children: a.data?.sessions.map((M) =>
                        (0, e.jsxs)(
                          "div",
                          {
                            className: i().Session,
                            children: [
                              (0, e.jsx)("div", {
                                className: i().MachineName,
                                children: M.machine_name,
                              }),
                              (0, e.jsx)("div", {
                                className: i().OsName,
                                children: M.os_name,
                              }),
                              (0, e.jsx)(t.$n, {
                                className: i().JoinSessionButton,
                                onClick: () =>
                                  (0, v.o6)(
                                    D,
                                    M.client_instanceid,
                                    s.steamAppId,
                                    p(s.sessionID),
                                  ),
                                children: "Launch Game",
                              }),
                            ],
                          },
                          M.client_instanceid,
                        ),
                      ),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  className: i().Error,
                  children: "No logged in sessions",
                })
            : a.isFetching || a.isRefetching
              ? (0, e.jsx)(l.t, {})
              : (0, e.jsxs)("div", {
                  className: i().Error,
                  children: ["Error ", a.error.message],
                });
        }
        function w(s) {
          const a = h(s.steamAppId);
          return a
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: i().Header,
                    children: "Join Game Session",
                  }),
                  (0, e.jsxs)("div", {
                    className: i().Explanation,
                    children: [
                      "You've been invited to join a game! Click below to launch ",
                      a.friendly_name || a.name,
                      " on Steam and start playing.",
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: i().SessionInfoCtr,
                    children: (0, e.jsx)("iframe", {
                      src: s.sessionLiveDataUrl,
                    }),
                  }),
                  u.TS.IN_CLIENT
                    ? (0, e.jsx)("div", {
                        className: i().SectionCtr,
                        children: (0, e.jsx)(L, {
                          ...s,
                          children: "Launch Game",
                        }),
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: i().SectionCtr,
                            children: u.iA.logged_in
                              ? (0, e.jsx)(I, { ...s })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(t.JU, {
                                      children:
                                        "Login to join on another device",
                                    }),
                                    (0, e.jsx)(t.$n, {
                                      onClick: o.vg,
                                      children: (0, j.we)("#Login_SignIn"),
                                    }),
                                  ],
                                }),
                          }),
                          !u.TS.IN_MOBILE_WEBVIEW &&
                            (0, e.jsxs)("div", {
                              className: i().SectionCtr,
                              children: [
                                (0, e.jsx)(t.JU, {
                                  children: "Or launch on this PC",
                                }),
                                (0, e.jsx)(L, {
                                  ...s,
                                  children: "Launch Game Here",
                                }),
                              ],
                            }),
                        ],
                      }),
                ],
              })
            : (0, e.jsx)(l.t, {});
        }
        function C() {
          const s = (0, u.Tc)("multiplayersession_join", "application_config"),
            D = new URLSearchParams((0, d.zy)().search).get("jws"),
            { header: M, body: b } = (0, g.I3)(D) || { header: {}, body: {} };
          let { steamAppId: E } = b;
          const f = b[s.jws_sessionid_key],
            R = b[s.jws_livedata_url_key];
          return (
            typeof E == "string" && (E = parseInt(E)),
            (0, e.jsxs)("div", {
              className: i().JoinApp,
              children: [
                !E || !R || !R
                  ? (0, e.jsx)("div", { children: "Invalid session link" })
                  : (0, e.jsx)(w, {
                      steamAppId: E,
                      sessionLiveDataUrl: R,
                      sessionID: f,
                    }),
                " ",
              ],
            })
          );
        }
      },
      9054: (J) => {
        J.exports = {
          narrowWidth: "500px",
          JoinApp: "_27LPt-4kZ0Y0j9DNG19rsN",
          SessionInfoCtr: "z4yEIu1D7pKZ9BNib5lIq",
          SectionCtr: "_3pJz3d4_3A43Jh7D44SUlm",
          JoinSessionButton: "oFMSJB00CTFnfT-758yts",
          SessionList: "_25Du_Z4_ooVhqUEkiYSqxt",
          Session: "zNbRzxK68u4bzfA0OyV0I",
          MachineName: "EOLg7Cdie5CHJUEGL6-CB",
          OsName: "S5bNzjo6KMcWWn6Ms9QuY",
          AvailableSessionsText: "_1NtbtSr3XzLpXPC3ugtzr9",
          Header: "_239fSrbkMDKdFJQsaOV8MW",
          Explanation: "_1isyHy9nKabM8wUFKUu-lm",
        };
      },
    },
  ]);
})();
