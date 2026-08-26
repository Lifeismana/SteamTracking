/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [15068],
  {
    20978: (e) => {
      e.exports = {
        LoadingWrapper: "_2wAKy-0ZkO_vhbiQCP9MgE",
        Static: "_1QfwpLmLTSuiIRLDzdY_7l",
        none: "_1F0lzP-Krz_y5P9ewZEvBD",
        bottomCircle: "_2qjZm0dB7I6lcRkZhNTqvD",
        noString: "_1Sy0pXVZOdWbgouFyD2zJj",
        Throbber: "lYUEjD8Qh3GM_ZrZeLwpI",
        throbber_small: "_2zbyh5jEDlV5HVD3iUve-k",
        throbber_medium: "_2CphUsHNDgIWItNIzeIldY",
        throbber_large: "_1x18vR7Qop8v8_G8qSR6CL",
        throbber_center_wrapper: "_3IYPzqtvB2ZE7x710d5x2C",
        ThrobberText: "_21nVi2jNuF_prxLY1mAaKK",
        blur: "_1ctjA2yjeB21eCDj_r1mVz",
        ThrobberRoundLoop: "_1O-cWE6nuIVO3x6-Onw0IU",
        roundOuterOutline: "_1Vv--mA6PueyEKXXMTwljt",
        roundOuter: "_2K0LzwjOXDopMHoqY_v_CO",
        roundFill: "_3sQFkavAEPhliH6DiFmHRH",
        ThrobberFillLoop: "ofdi9VLSRZ5W98WsXVHiq",
        topCircle: "_1LZffuoDq-N25wNHckxsf",
        circlePulse: "_1XN6ZJ1l8nVoUxp1WnOBqw",
        ThrobberTopCircleLoop: "_1jALk36CiS_T9Pg7vBjpIQ",
        ThrobberBottomCircleLoop: "_1KvOgdKiNE9XuSYUau3hKW",
        roundThrobber15: "_2LGHpu_-ihfOhQwdfR3Kiy",
        roundThrobber14: "_2FGCneH2AemMrIrZnZskw_",
        roundThrobber13: "_1X-5j16jaQntVrZfadibyc",
        roundThrobber12: "_1pj1Q3Ef4FdHDdl9QEtpxp",
        roundThrobber11: "xFmZaMe5nZpoTc5PQBKn3",
        roundThrobber10: "_3MGYowzMQ6TwbH3fu9SVjt",
        roundThrobber09: "ktVJ42jiVhWEVV9O6z2FK",
        roundThrobber08: "_3s_7my869lIOj-1vnqJ39y",
        roundThrobber07: "_11MVp53Me_frOuaJfsQ4FE",
        roundThrobber06: "_2cl-maglen-RF0YQjShgqG",
        roundThrobber05: "_3-JE0FpIzECzeqtd5cyjGI",
        roundThrobber04: "_1xNIKvHdzLhBldONo6yIZs",
        roundThrobber03: "_1S17yicfcrPc11m83ydGp3",
        roundThrobber02: "_1-oUJqmCLOoGqVJz5dgj6J",
        roundThrobber01: "_2tXgejjqNKy6cSX1Lv7PrG",
        ThrobberRoundLoopThickness: "_1fs4RGcMBRzbQQirDBiFoM",
        throbber_xlarge: "_1gYeZMYKBDqNpVuw58_LCl",
        throbber_xxlarge: "_3j-p4JOqdpaF4obGtIeAB",
        ThrobberDelayAppear: "I3aEq3lbK7Pm8ujENvtri",
        Visible: "_2SwSJd-DlX2dRiDGxZWHI5",
        NewThrobber: "_1m8iQOSVziKDHiInrfskv_",
      };
    },
    9054: (e) => {
      e.exports = {
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
    42248: (e, t, s) => {
      "use strict";
      s.d(t, { q: () => n });
      var r = s(78327),
        i = s(22837);
      function n() {
        return r.TS.IN_CLIENT && (0, i.DOG)(r.TS.LAUNCHER_TYPE);
      }
    },
    82477: (e, t, s) => {
      "use strict";
      s.d(t, { Cg: () => p, pZ: () => b, vg: () => m });
      var r = s(7850),
        i = s(90626),
        n = s(738),
        o = s(61859),
        c = s(78327),
        l = s(92120),
        a = s(51883),
        d = s(72034),
        h = s(28240),
        f = s(74568);
      function u(e) {
        return (0, r.jsx)(n.x_, {
          onEscKeypress: e.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, r.jsx)(x, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        });
      }
      function p(e) {
        const { redirectURL: t = window.location.href } = e;
        return (0, r.jsx)(f.EN, {
          active: !0,
          children: (0, r.jsx)(u, { redirectURL: t }),
        });
      }
      function m() {
        (0, n.pg)(
          (0, r.jsx)(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function b(e, t) {
        (0, n.pg)(
          (0, r.jsx)(u, { ownerWin: window, redirectURL: e, guestOption: t }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function x(e) {
        const { redirectURL: t, guestOption: s } = e,
          [n] = (0, i.useState)(
            new d.D(c.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, f] = (0, i.useState)(!1);
        return (0, r.jsx)("div", {
          children: o
            ? (0, r.jsx)(l.Fn, {})
            : (0, r.jsx)(l.YN, {
                autoFocus: !0,
                transport: n,
                platform: a.SS.tS,
                onComplete: (e) => {
                  e == h.wI.k_PrimaryDomainFail
                    ? f(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
                theme: "modal",
                children: s && (0, r.jsx)(l.Mk, { redirectURL: t }),
              }),
        });
      }
    },
    74568: (e, t, s) => {
      "use strict";
      s.d(t, {
        mt: () => a,
        o0: () => h.o0,
        eV: () => f.eV,
        KG: () => h.KG,
        Ee: () => h.Ee,
        x_: () => c.x_,
        of: () => d,
        pY: () => h.pY,
        EN: () => o.E,
      });
      var r = s(7850),
        i = s(90626),
        n = s(56283),
        o = s(21869),
        c = s(2654);
      s(37049);
      function l(e) {
        const { labelledBy: t } = e || {},
          [s, r] = i.useState(void 0);
        return {
          headerId: t || s,
          context: i.useMemo(() => ({ setHeaderId: r }), []),
        };
      }
      function a(e) {
        const {
            active: t,
            onDismiss: s,
            className: i,
            modalClassName: a,
            bGamepadUIScrollWithin: d,
            children: h,
            ...f
          } = e,
          { headerId: u, context: p } = l({ labelledBy: e["aria-labelledby"] });
        return (0, r.jsx)(n.t6.Provider, {
          value: p,
          children: (0, r.jsx)(o.E, {
            active: t,
            children: (0, r.jsx)(c.x_, {
              onEscKeypress: s,
              className: a,
              bGamepadUIScrollWithin: d,
              children: (0, r.jsx)(n.UC, {
                role: "dialog",
                "aria-labelledby": u,
                className: i,
                ...f,
                children: h,
              }),
            }),
          }),
        });
      }
      function d(e) {
        const { className: t, children: s } = e;
        return (0, r.jsx)(o.E, {
          active: !0,
          children: (0, r.jsx)("div", { className: t, children: s }),
        });
      }
      s(6230);
      var h = s(78395),
        f = s(10411);
      s(76222);
    },
    37049: (e, t, s) => {
      "use strict";
      s.d(t, { wA: () => _ });
      var r = s(7850),
        i = s(40236),
        n = s(90626),
        o = s(72739),
        c = s(13871),
        l = s(48902),
        a = s(60155),
        d = s(52745),
        h = s(21869),
        f = s(25118),
        u = s(66703),
        p = s(52038),
        m = s(28460);
      function b(e) {
        const { popup: t, className: s, ...i } = e,
          o = (0, m.GD)(t),
          c = n.useRef(null);
        return (
          n.useEffect(() => {
            const e = c.current;
            if (e && (0, u.Fj)(t, "Window.SetResizeGrip")) {
              let s = 0,
                r = 0;
              const i = e.getBoundingClientRect(),
                n = e.ownerDocument.defaultView;
              i &&
                n &&
                !o &&
                ((s = Math.ceil(n.innerWidth - i.left)),
                (r = Math.ceil(n.innerHeight - i.top))),
                t.SteamClient.Window.SetResizeGrip(s, r);
            }
            return () => {
              (0, u.Fj)(t, "Window.SetResizeGrip") &&
                t.SteamClient.Window.SetResizeGrip(0, 0);
            };
          }, [t, o]),
          o
            ? null
            : (0, r.jsx)("div", {
                className: (0, p.A)("window_resize_grip", s),
                ref: c,
                ...i,
              })
        );
      }
      var x = s(84933),
        j = s(78327);
      const _ = (e) =>
        (function (e) {
          const t = (0, c.R7)().ownerWindow,
            s = (0, j.Qn)(),
            [i, o] = n.useState(() =>
              s ||
              (!0 === e.onlyPopoutIfNeeded &&
                e.popupHeight < 0.9 * t.innerHeight &&
                e.popupWidth < 0.9 * t.innerWidth &&
                "visible" == t.document.visibilityState)
                ? "inline"
                : "popout",
            );
          return "inline" === i
            ? (0, r.jsx)(h.E, { active: !0, children: e.children })
            : "popout" === i
              ? (0, r.jsx)(N, { ...e })
              : null;
        })({ modal: !0, ...e });
      function k(e) {
        const {
            popup: t,
            children: s,
            bFitToContent: o,
            className: c,
            ...l
          } = e,
          a = n.useCallback(
            (e) => {
              const s = Math.ceil(e.borderBoxSize[0].inlineSize),
                r = Math.ceil(e.borderBoxSize[0].blockSize);
              t?.SteamClient.Window.ResizeTo(s, r, !0);
            },
            [t],
          ),
          d = (0, i.wY)(a);
        return (0, r.jsx)("div", {
          className: (0, p.A)("PopupFullWindow", o && "FitToContent", c),
          ref: o ? d : void 0,
          ...l,
          children: s,
        });
      }
      function N(e) {
        const {
            strName: t,
            strTitle: s,
            popupWidth: i,
            popupHeight: h,
            browserType: u,
            onDismiss: p,
            bFitToContent: m,
            refPopup: j,
            children: _,
            titleBarClassName: N,
            saveDimensionsKey: g,
          } = e,
          w = (0, c.R7)(),
          T = w?.ownerWindow,
          v = (0, d.yk)(),
          L = { ...(0, l.h3)(g), onClose: p };
        let M = 0;
        e.resizable && (M |= c.Wf.Resizable),
          (e.minWidth || e.minHeight) &&
            (M |= c.Wf.ApplyBrowserScaleToDimensions),
          e.fullscreen && (M |= c.Wf.FullScreen);
        const W = "PopupWindow_" + (t ? `${t}_` : "") + n.useId(),
          { popup: C, element: y } = (0, l.OJ)(
            W,
            {
              title: s,
              dimensions: { width: i, height: h },
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              popup_class: "fullheight",
              browserType: u,
              minWidth: e.minWidth,
              minHeight: e.minHeight,
              replace_existing_popup: !0,
              center_on_window: v?.BCenterPopupsOnWindow() ? T : void 0,
              eCreationFlags: M,
              target_browser: v?.GetBrowserInfo(),
            },
            L,
          );
        if (
          (n.useEffect(
            () => ((0, x.cZ)(j, C), () => (0, x.cZ)(j, void 0)),
            [j, C],
          ),
          n.useEffect(() => {
            C && (C.document.title = s ?? t);
          }, [C, s, t]),
          !y)
        )
          return null;
        const I = e.modal ?? e.onlyPopoutIfNeeded,
          E = !e.resizable;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            I && (0, r.jsx)(S, { popup: C }),
            o.createPortal(
              (0, r.jsxs)(c.kc, {
                ownerWindow: C,
                children: [
                  (0, r.jsxs)(k, {
                    popup: C,
                    bFitToContent: m,
                    onContextMenu: a.aE,
                    children: [
                      (0, r.jsx)(f.c, {
                        className: N,
                        hideMin: E,
                        hideMax: E,
                        popup: C,
                        hideActions: !p,
                      }),
                      (0, r.jsx)(d.EO, {
                        bCenterPopupsOnWindow: v?.BCenterPopupsOnWindow(),
                        browserInfo: v?.GetBrowserInfo(),
                        children: _,
                      }),
                    ],
                  }),
                  e.resizable && !m && (0, r.jsx)(b, { popup: C }),
                ],
              }),
              y,
            ),
          ],
        });
      }
      function S(e) {
        const { popup: t } = e,
          s = n.useCallback(() => {
            t?.SteamClient.Window.BringToFront();
          }, [t]);
        return (
          n.useEffect(s, [s]),
          (0, r.jsx)(h.E, {
            active: !0,
            children: (0, r.jsx)("div", {
              style: {
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              },
              onClick: s,
            }),
          })
        );
      }
    },
    22797: (e, t, s) => {
      "use strict";
      s.d(t, { t: () => h });
      var r = s(7850),
        i = s(90626),
        n = s(52038),
        o = s(20978),
        c = s.n(o);
      const l =
        s.p +
        "images/applications/store/steam_spinner.png?v=valveisgoodatcaching";
      var a = s(42248),
        d = s(66418);
      const h = i.memo(function (e) {
        const {
          className: t,
          size: s,
          string: o,
          position: h,
          static: u,
          msDelayAppear: p,
        } = e;
        let m = [c().LoadingWrapper, "SteamLogoThrobber", f(s)];
        const [b, x] = i.useState(!p),
          j = !(0, a.q)();
        return (
          (0, i.useEffect)(() => {
            if (b) return;
            const e = setTimeout(() => x(!0), p);
            return () => clearTimeout(e);
          }, [p, b]),
          void 0 === o && m.push(c().noString),
          t && m.push(t),
          u && m.push(c().Static),
          (0, r.jsxs)("div", {
            className: (0, n.A)(
              "center" == h && c().throbber_center_wrapper,
              !!p && c().ThrobberDelayAppear,
              b && c().Visible,
            ),
            children: [
              b &&
                j &&
                (0, r.jsx)("div", {
                  className: m.join(" "),
                  children: (0, r.jsx)("div", {
                    className: c().NewThrobber,
                    children: (0, r.jsx)("img", { src: (0, d.YJ)(l) }),
                  }),
                }),
              Boolean(o) &&
                (0, r.jsx)("div", { className: c().ThrobberText, children: o }),
            ],
          })
        );
      });
      i.memo(function (e) {
        const {
          className: t,
          size: s,
          string: o,
          position: l,
          static: a,
          msDelayAppear: d,
        } = e;
        let h = [c().LoadingWrapper, "SteamLogoThrobber", f(s)];
        const [p, m] = i.useState(!d);
        return (
          (0, i.useEffect)(() => {
            if (p) return;
            const e = setTimeout(() => m(!0), d);
            return () => clearTimeout(e);
          }, [d, p]),
          void 0 === o && h.push(c().noString),
          t && h.push(t),
          a && h.push(c().Static),
          (0, r.jsxs)("div", {
            className: (0, n.A)(
              "center" == l && c().throbber_center_wrapper,
              !!d && c().ThrobberDelayAppear,
              p && c().Visible,
            ),
            children: [
              p &&
                (0, r.jsx)("div", {
                  className: h.join(" "),
                  children: (0, r.jsxs)("div", {
                    className: c().Throbber,
                    children: [
                      (0, r.jsx)(u, { className: c().base }),
                      (0, r.jsx)(u, { className: c().blur }),
                    ],
                  }),
                }),
              Boolean(o) &&
                (0, r.jsx)("div", { className: c().ThrobberText, children: o }),
            ],
          })
        );
      });
      function f(e) {
        switch (e) {
          case "small":
            return c().throbber_small;
          case "medium":
            return c().throbber_medium;
          case "xlarge":
            return c().throbber_xlarge;
          case "xxlarge":
            return c().throbber_xxlarge;
          default:
            return c().throbber_large;
        }
      }
      function u(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          (0, r.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, r.jsxs)("g", {
                className: c().partCircle,
                children: [
                  (0, r.jsx)("path", {
                    className: c().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                className: c().mainOutline,
                children: [
                  (0, r.jsx)("path", {
                    className: c().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, r.jsx)("path", {
                    className: c().roundThrobber15,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                ],
              }),
              (0, r.jsx)("g", {
                className: c().bottomCircle,
                children: (0, r.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, r.jsx)("g", {
                className: c().topCircle,
                children: (0, r.jsx)("circle", {
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "6",
                  strokeMiterlimit: "10",
                  cx: "161.731",
                  cy: "101.274",
                  r: "23.019",
                }),
              }),
            ],
          })
        );
      }
    },
    40917: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => I });
      var r = s(7850),
        i = s(9054),
        n = s.n(i),
        o = s(92757),
        c = s(23809),
        l = s(41762),
        a = s(58632),
        d = s.n(a),
        h = s(80902),
        f = s(37085),
        u = s(56545),
        p = s(34214),
        m = s(30470),
        b = s(22837);
      let x;
      const j = 864e5;
      function _(e) {
        return `appinfo_${e}_${m.TS.LANGUAGE}`;
      }
      function k(e) {
        return Boolean(e && Date.now() - e.timeCached < j);
      }
      function N(e) {
        const t = (0, c.KV)(),
          s = (0, c.rX)();
        return (0, h.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                x ||
                  (x = new (d())(
                    async (s) => {
                      const r = new Map();
                      (await Promise.all(s.map((e) => t.GetObject(_(e)))))
                        .filter(k)
                        .forEach(({ value: e }) => r.set(e.appid, e));
                      const i = s.slice().filter((e) => !r.has(e));
                      if (i.length) {
                        const s = u.w.Init(p._z);
                        s.Body().set_language((0, b.sfN)(m.TS.LANGUAGE)),
                          s.Body().set_appids(i);
                        const n = await p.BE.GetApps(e, s);
                        if (n.GetEResult() != f.R) throw n.GetErrorMessage();
                        n.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(_(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              r.set(e.appid, e);
                          });
                      }
                      return s.map((e) => r.get(e));
                    },
                    { cache: !1 },
                  )),
                x
              );
            })(t, s).load(e),
          staleTime: j,
          enabled: !!e,
        }).data;
      }
      var S = s(96873),
        g = s(61859),
        w = s(82477),
        T = s(56283),
        v = s(22797),
        L = s(78327);
      function M(e) {
        return `?joinsessionid=${e}`;
      }
      function W(e) {
        return (0, r.jsx)(T.$n, {
          className: n().JoinSessionButton,
          onClick: () =>
            (window.location.href =
              `steam://launch/${e.steamAppId}` + M(e.sessionID)),
          children: e.children,
        });
      }
      function C(e) {
        const t = (0, S.Vc)(),
          s = (0, c.KV)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(T.JU, {
                    className: n().AvailableSessionsText,
                    children: "Available Steam Sessions:",
                  }),
                  (0, r.jsx)("div", {
                    className: n().SessionList,
                    children: t.data?.sessions.map((t) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className: n().Session,
                          children: [
                            (0, r.jsx)("div", {
                              className: n().MachineName,
                              children: t.machine_name,
                            }),
                            (0, r.jsx)("div", {
                              className: n().OsName,
                              children: t.os_name,
                            }),
                            (0, r.jsx)(T.$n, {
                              className: n().JoinSessionButton,
                              onClick: () =>
                                (0, S.o6)(
                                  s,
                                  t.client_instanceid,
                                  e.steamAppId,
                                  M(e.sessionID),
                                ),
                              children: "Launch Game",
                            }),
                          ],
                        },
                        t.client_instanceid,
                      ),
                    ),
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className: n().Error,
                children: "No logged in sessions",
              })
          : t.isFetching || t.isRefetching
            ? (0, r.jsx)(v.t, {})
            : (0, r.jsxs)("div", {
                className: n().Error,
                children: ["Error ", t.error.message],
              });
      }
      function y(e) {
        const t = N(e.steamAppId);
        return t
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: n().Header,
                  children: "Join Game Session",
                }),
                (0, r.jsxs)("div", {
                  className: n().Explanation,
                  children: [
                    "You've been invited to join a game! Click below to launch ",
                    t.friendly_name || t.name,
                    " on Steam and start playing.",
                  ],
                }),
                (0, r.jsx)("div", {
                  className: n().SessionInfoCtr,
                  children: (0, r.jsx)("iframe", { src: e.sessionLiveDataUrl }),
                }),
                L.TS.IN_CLIENT
                  ? (0, r.jsx)("div", {
                      className: n().SectionCtr,
                      children: (0, r.jsx)(W, {
                        ...e,
                        children: "Launch Game",
                      }),
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("div", {
                          className: n().SectionCtr,
                          children: L.iA.logged_in
                            ? (0, r.jsx)(C, { ...e })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(T.JU, {
                                    children: "Login to join on another device",
                                  }),
                                  (0, r.jsx)(T.$n, {
                                    onClick: w.vg,
                                    children: (0, g.we)("#Login_SignIn"),
                                  }),
                                ],
                              }),
                        }),
                        !L.TS.IN_MOBILE_WEBVIEW &&
                          (0, r.jsxs)("div", {
                            className: n().SectionCtr,
                            children: [
                              (0, r.jsx)(T.JU, {
                                children: "Or launch on this PC",
                              }),
                              (0, r.jsx)(W, {
                                ...e,
                                children: "Launch Game Here",
                              }),
                            ],
                          }),
                      ],
                    }),
              ],
            })
          : (0, r.jsx)(v.t, {});
      }
      function I() {
        const e = (0, L.Tc)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, o.zy)().search).get("jws"),
          { header: s, body: i } = (0, l.I3)(t) || { header: {}, body: {} };
        let { steamAppId: c } = i;
        const a = i[e.jws_sessionid_key],
          d = i[e.jws_livedata_url_key];
        return (
          "string" == typeof c && (c = parseInt(c)),
          (0, r.jsxs)("div", {
            className: n().JoinApp,
            children: [
              c && d && d
                ? (0, r.jsx)(y, {
                    steamAppId: c,
                    sessionLiveDataUrl: d,
                    sessionID: a,
                  })
                : (0, r.jsx)("div", { children: "Invalid session link" }),
              " ",
            ],
          })
        );
      }
    },
  },
]);
