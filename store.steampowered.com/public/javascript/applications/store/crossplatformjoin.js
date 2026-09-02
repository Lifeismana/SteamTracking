/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [15068],
    {
      86390: (J, T, n) => {
        "use strict";
        n.d(T, { Cg: () => z, pZ: () => F, vg: () => G });
        var e = n(7850),
          P = n(90626),
          o = n(88003),
          M = n(18210),
          v = n(3166),
          y = n(34004),
          B = n(6740),
          A = n(3685),
          U = n(8059),
          K = n(96538);
        function N(u) {
          return (0, e.jsx)(o.x_, {
            onEscKeypress: u.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(x, {
              redirectURL: u.redirectURL,
              guestOption: u.guestOption,
            }),
          });
        }
        function z(u) {
          const { redirectURL: j = window.location.href } = u;
          return (0, e.jsx)(K.EN, {
            active: !0,
            children: (0, e.jsx)(N, { redirectURL: j }),
          });
        }
        function G() {
          (0, o.pg)(
            (0, e.jsx)(N, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, M.we)("#Login_SignInTitle") },
          );
        }
        function F(u, j) {
          (0, o.pg)(
            (0, e.jsx)(N, { ownerWin: window, redirectURL: u, guestOption: j }),
            window,
            { strTitle: (0, M.we)("#Login_SignInTitle") },
          );
        }
        function x(u) {
          const { redirectURL: j, guestOption: l } = u,
            [r] = (0, P.useState)(
              new A.D(v.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [f, g] = (0, P.useState)(!1),
            t = (i) => {
              i == U.wI.k_PrimaryDomainFail ? g(!0) : window.location.assign(j);
            };
          return (0, e.jsx)("div", {
            children: f
              ? (0, e.jsx)(y.Fn, {})
              : (0, e.jsx)(y.YN, {
                  autoFocus: !0,
                  transport: r,
                  platform: B.SS.tS,
                  onComplete: t,
                  redirectUrl: j,
                  theme: "modal",
                  children: l && (0, e.jsx)(y.Mk, { redirectURL: j }),
                }),
          });
        }
      },
      96538: (J, T, n) => {
        "use strict";
        n.d(T, {
          mt: () => A,
          o0: () => x.o0,
          eV: () => u.eV,
          KG: () => x.KG,
          Ee: () => x.Ee,
          x_: () => v.x_,
          of: () => N,
          pY: () => x.pY,
          EN: () => M.E,
        });
        var e = n(7850),
          P = n(90626),
          o = n(16412),
          M = n(69168),
          v = n(50731),
          y = n(15568);
        function B(l) {
          const { labelledBy: r } = l || {},
            [f, g] = P.useState(void 0),
            t = P.useMemo(() => ({ setHeaderId: g }), []);
          return { headerId: r || f, context: t };
        }
        function A(l) {
          const {
              active: r,
              onDismiss: f,
              className: g,
              modalClassName: t,
              bGamepadUIScrollWithin: i,
              children: a,
              ...m
            } = l,
            { headerId: c, context: S } = B({
              labelledBy: l["aria-labelledby"],
            });
          return (0, e.jsx)(o.t6.Provider, {
            value: S,
            children: (0, e.jsx)(M.E, {
              active: r,
              children: (0, e.jsx)(v.x_, {
                onEscKeypress: f,
                className: t,
                bGamepadUIScrollWithin: i,
                children: (0, e.jsx)(o.UC, {
                  role: "dialog",
                  "aria-labelledby": c,
                  className: g,
                  ...m,
                  children: a,
                }),
              }),
            }),
          });
        }
        function U(l) {
          const {
              onDismiss: r,
              className: f,
              modalClassName: g,
              bGamepadUIScrollWithin: t,
              children: i,
              ...a
            } = l,
            { headerId: m, context: c } = B();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: c,
            children: jsx(PopupWindow, {
              ...a,
              onDismiss: r,
              children: jsx(ModalPosition, {
                onEscKeypress: r,
                className: g,
                bGamepadUIScrollWithin: t,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": m,
                  "aria-label": a.strTitle,
                  className: f,
                  children: i,
                }),
              }),
            }),
          });
        }
        const K = (l) => U({ modal: !0, ...l });
        function N(l) {
          const { className: r, children: f } = l;
          return (0, e.jsx)(M.E, {
            active: !0,
            children: (0, e.jsx)("div", { className: r, children: f }),
          });
        }
        var z = n(74817);
        function G(l) {
          const r = React.useMemo(() => F(), []);
          return jsx(DialogOverlay, { ...l, DialogWrapper: r });
        }
        function F() {
          return function (r) {
            const { className: f, active: g, children: t, modalKey: i } = r,
              a = React.useRef(void 0);
            return (
              useActivateNavTree(a, g, !0),
              jsx(FocusNavigationRoot, {
                className: f,
                navTreeRef: a,
                modal: !0,
                enabled: g,
                navID: `ModalDialogOverlay_${i}`,
                children: t,
              })
            );
          };
        }
        var x = n(1880),
          u = n(90506),
          j = n(47515);
      },
      15568: (J, T, n) => {
        "use strict";
        n.d(T, { wA: () => j });
        var e = n(7850),
          P = n(2259),
          o = n(90626),
          M = n(72739),
          v = n(71568),
          y = n(9705),
          B = n(34360),
          A = n(31032),
          U = n(69168),
          K = n(83203),
          N = n(44930),
          z = n(36707),
          G = n(25091);
        function F(t) {
          const { popup: i, className: a, ...m } = t,
            c = (0, G.GD)(i),
            S = o.useRef(null);
          return (
            o.useEffect(() => {
              const C = S.current;
              if (C && (0, N.Fj)(i, "Window.SetResizeGrip")) {
                let O = 0,
                  D = 0;
                const w = C.getBoundingClientRect(),
                  s = C.ownerDocument.defaultView;
                w &&
                  s &&
                  !c &&
                  ((O = Math.ceil(s.innerWidth - w.left)),
                  (D = Math.ceil(s.innerHeight - w.top))),
                  i.SteamClient.Window.SetResizeGrip(O, D);
              }
              return () => {
                (0, N.Fj)(i, "Window.SetResizeGrip") &&
                  i.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [i, c]),
            c
              ? null
              : (0, e.jsx)("div", {
                  className: (0, z.A)("window_resize_grip", a),
                  ref: S,
                  ...m,
                })
          );
        }
        var x = n(30096),
          u = n(3166);
        const j = (t) => l({ modal: !0, ...t });
        function l(t) {
          const i = (0, v.R7)().ownerWindow,
            a = (0, u.Qn)(),
            [m, c] = o.useState(() =>
              a ||
              (t.onlyPopoutIfNeeded === !0 &&
                t.popupHeight < i.innerHeight * 0.9 &&
                t.popupWidth < i.innerWidth * 0.9 &&
                i.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return m === "inline"
            ? (0, e.jsx)(U.E, { active: !0, children: t.children })
            : m === "popout"
              ? (0, e.jsx)(f, { ...t })
              : null;
        }
        function r(t) {
          const {
              popup: i,
              children: a,
              bFitToContent: m,
              className: c,
              ...S
            } = t,
            C = o.useCallback(
              (D) => {
                const w = Math.ceil(D.borderBoxSize[0].inlineSize),
                  s = Math.ceil(D.borderBoxSize[0].blockSize);
                i?.SteamClient.Window.ResizeTo(w, s, !0);
              },
              [i],
            ),
            O = (0, P.wY)(C);
          return (0, e.jsx)("div", {
            className: (0, z.A)("PopupFullWindow", m && "FitToContent", c),
            ref: m ? O : void 0,
            ...S,
            children: a,
          });
        }
        function f(t) {
          const {
              strName: i,
              strTitle: a,
              popupWidth: m,
              popupHeight: c,
              browserType: S,
              onDismiss: C,
              bFitToContent: O,
              refPopup: D,
              children: w,
              titleBarClassName: s,
              saveDimensionsKey: d,
            } = t,
            p = (0, v.R7)()?.ownerWindow,
            L = (0, A.yk)(),
            h = { ...(0, y.h3)(d), onClose: C };
          let E = 0;
          t.resizable && (E |= v.Wf.Resizable),
            (t.minWidth || t.minHeight) &&
              (E |= v.Wf.ApplyBrowserScaleToDimensions),
            t.fullscreen && (E |= v.Wf.FullScreen);
          const b = "PopupWindow_" + (i ? `${i}_` : "") + o.useId(),
            { popup: W, element: H } = (0, y.OJ)(
              b,
              {
                title: a,
                dimensions: { width: m, height: c },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: S,
                minWidth: t.minWidth,
                minHeight: t.minHeight,
                replace_existing_popup: !0,
                center_on_window: L?.BCenterPopupsOnWindow() ? p : void 0,
                eCreationFlags: E,
                target_browser: L?.GetBrowserInfo(),
              },
              h,
            );
          if (
            (o.useEffect(
              () => ((0, x.cZ)(D, W), () => (0, x.cZ)(D, void 0)),
              [D, W],
            ),
            o.useEffect(() => {
              W && (W.document.title = a ?? i);
            }, [W, a, i]),
            !H)
          )
            return null;
          const $ = t.modal ?? t.onlyPopoutIfNeeded,
            V = !t.resizable;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              $ && (0, e.jsx)(g, { popup: W }),
              M.createPortal(
                (0, e.jsxs)(v.kc, {
                  ownerWindow: W,
                  children: [
                    (0, e.jsxs)(r, {
                      popup: W,
                      bFitToContent: O,
                      onContextMenu: B.aE,
                      children: [
                        (0, e.jsx)(K.c, {
                          className: s,
                          hideMin: V,
                          hideMax: V,
                          popup: W,
                          hideActions: !C,
                        }),
                        (0, e.jsx)(A.EO, {
                          bCenterPopupsOnWindow: L?.BCenterPopupsOnWindow(),
                          browserInfo: L?.GetBrowserInfo(),
                          children: w,
                        }),
                      ],
                    }),
                    t.resizable && !O && (0, e.jsx)(F, { popup: W }),
                  ],
                }),
                H,
              ),
            ],
          });
        }
        function g(t) {
          const { popup: i } = t,
            a = o.useCallback(() => {
              i?.SteamClient.Window.BringToFront();
            }, [i]);
          return (
            o.useEffect(a, [a]),
            (0, e.jsx)(U.E, {
              active: !0,
              children: (0, e.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: a,
              }),
            })
          );
        }
      },
      67628: (J, T, n) => {
        "use strict";
        n.r(T), n.d(T, { default: () => w });
        var e = n(7850),
          P = n(9054),
          o = n.n(P),
          M = n(92757),
          v = n(68312),
          y = n(50855),
          B = n(58632),
          A = n.n(B),
          U = n(80902),
          K = n(72604),
          N = n(35038),
          z = n(72849),
          G = n(98609),
          F = n(99412);
        let x;
        const u = 1440 * 60 * 1e3;
        function j(s) {
          return `appinfo_${s}_${G.TS.LANGUAGE}`;
        }
        function l(s) {
          return !!(s && Date.now() - s.timeCached < u);
        }
        function r(s, d) {
          return (
            x ||
              (x = new (A())(
                async (I) => {
                  const p = new Map();
                  (await Promise.all(I.map((h) => d.GetObject(j(h)))))
                    .filter(l)
                    .forEach(({ value: h }) => p.set(h.appid, h));
                  const R = I.slice().filter((h) => !p.has(h));
                  if (R.length) {
                    const h = N.w.Init(z._z);
                    h.Body().set_language((0, F.sfN)(G.TS.LANGUAGE)),
                      h.Body().set_appids(R);
                    const E = await z.BE.GetApps(s, h);
                    if (E.GetEResult() != K.R) throw E.GetErrorMessage();
                    E.Body()
                      .toObject()
                      .apps.forEach((b) => {
                        d.StoreObject(j(b.appid), {
                          timeCached: Date.now(),
                          value: b,
                        }),
                          p.set(b.appid, b);
                      });
                  }
                  return I.map((h) => p.get(h));
                },
                { cache: !1 },
              )),
            x
          );
        }
        function f(s) {
          const d = (0, v.KV)(),
            I = (0, v.rX)();
          return (0, U.I)({
            queryKey: ["appinfo", s],
            queryFn: async () => r(d, I).load(s),
            staleTime: u,
            enabled: !!s,
          }).data;
        }
        var g = n(23761),
          t = n(18210),
          i = n(86390),
          a = n(16412),
          m = n(85599),
          c = n(3166);
        function S(s) {
          return `?joinsessionid=${s}`;
        }
        function C(s) {
          return (0, e.jsx)(a.$n, {
            className: o().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${s.steamAppId}` + S(s.sessionID)),
            children: s.children,
          });
        }
        function O(s) {
          const d = (0, g.Vc)(),
            I = (0, v.KV)();
          return d.isSuccess
            ? d.data?.sessions?.length > 0
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(a.JU, {
                      className: o().AvailableSessionsText,
                      children: "Available Steam Sessions:",
                    }),
                    (0, e.jsx)("div", {
                      className: o().SessionList,
                      children: d.data?.sessions.map((p) =>
                        (0, e.jsxs)(
                          "div",
                          {
                            className: o().Session,
                            children: [
                              (0, e.jsx)("div", {
                                className: o().MachineName,
                                children: p.machine_name,
                              }),
                              (0, e.jsx)("div", {
                                className: o().OsName,
                                children: p.os_name,
                              }),
                              (0, e.jsx)(a.$n, {
                                className: o().JoinSessionButton,
                                onClick: () =>
                                  (0, g.o6)(
                                    I,
                                    p.client_instanceid,
                                    s.steamAppId,
                                    S(s.sessionID),
                                  ),
                                children: "Launch Game",
                              }),
                            ],
                          },
                          p.client_instanceid,
                        ),
                      ),
                    }),
                  ],
                })
              : (0, e.jsx)("div", {
                  className: o().Error,
                  children: "No logged in sessions",
                })
            : d.isFetching || d.isRefetching
              ? (0, e.jsx)(m.t, {})
              : (0, e.jsxs)("div", {
                  className: o().Error,
                  children: ["Error ", d.error.message],
                });
        }
        function D(s) {
          const d = f(s.steamAppId);
          return d
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: o().Header,
                    children: "Join Game Session",
                  }),
                  (0, e.jsxs)("div", {
                    className: o().Explanation,
                    children: [
                      "You've been invited to join a game! Click below to launch ",
                      d.friendly_name || d.name,
                      " on Steam and start playing.",
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: o().SessionInfoCtr,
                    children: (0, e.jsx)("iframe", {
                      src: s.sessionLiveDataUrl,
                    }),
                  }),
                  c.TS.IN_CLIENT
                    ? (0, e.jsx)("div", {
                        className: o().SectionCtr,
                        children: (0, e.jsx)(C, {
                          ...s,
                          children: "Launch Game",
                        }),
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: o().SectionCtr,
                            children: c.iA.logged_in
                              ? (0, e.jsx)(O, { ...s })
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)(a.JU, {
                                      children:
                                        "Login to join on another device",
                                    }),
                                    (0, e.jsx)(a.$n, {
                                      onClick: i.vg,
                                      children: (0, t.we)("#Login_SignIn"),
                                    }),
                                  ],
                                }),
                          }),
                          !c.TS.IN_MOBILE_WEBVIEW &&
                            (0, e.jsxs)("div", {
                              className: o().SectionCtr,
                              children: [
                                (0, e.jsx)(a.JU, {
                                  children: "Or launch on this PC",
                                }),
                                (0, e.jsx)(C, {
                                  ...s,
                                  children: "Launch Game Here",
                                }),
                              ],
                            }),
                        ],
                      }),
                ],
              })
            : (0, e.jsx)(m.t, {});
        }
        function w() {
          const s = (0, c.Tc)("multiplayersession_join", "application_config"),
            I = new URLSearchParams((0, M.zy)().search).get("jws"),
            { header: p, body: L } = (0, y.I3)(I) || { header: {}, body: {} };
          let { steamAppId: R } = L;
          const h = L[s.jws_sessionid_key],
            E = L[s.jws_livedata_url_key];
          return (
            typeof R == "string" && (R = parseInt(R)),
            (0, e.jsxs)("div", {
              className: o().JoinApp,
              children: [
                !R || !E || !E
                  ? (0, e.jsx)("div", { children: "Invalid session link" })
                  : (0, e.jsx)(D, {
                      steamAppId: R,
                      sessionLiveDataUrl: E,
                      sessionID: h,
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
