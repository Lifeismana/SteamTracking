/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5068],
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
    42248: (e, s, t) => {
      "use strict";
      t.d(s, { q: () => n });
      var r = t(78327),
        i = t(22837);
      function n() {
        return r.TS.IN_CLIENT && (0, i.DOG)(r.TS.LAUNCHER_TYPE);
      }
    },
    82477: (e, s, t) => {
      "use strict";
      t.d(s, { Cg: () => p, pZ: () => b, vg: () => m });
      var r = t(7850),
        i = t(90626),
        n = t(738),
        o = t(61859),
        c = t(78327),
        l = t(92120),
        a = t(51883),
        d = t(72034),
        f = t(28240),
        h = t(74568);
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
        const { redirectURL: s = window.location.href } = e;
        return (0, r.jsx)(h.EN, {
          active: !0,
          children: (0, r.jsx)(u, { redirectURL: s }),
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
      function b(e, s) {
        (0, n.pg)(
          (0, r.jsx)(u, { ownerWin: window, redirectURL: e, guestOption: s }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function x(e) {
        const { redirectURL: s, guestOption: t } = e,
          [n] = (0, i.useState)(
            new d.D(c.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, h] = (0, i.useState)(!1);
        return (0, r.jsx)("div", {
          children: o
            ? (0, r.jsx)(l.Fn, {})
            : (0, r.jsx)(l.YN, {
                autoFocus: !0,
                transport: n,
                platform: a.SS.tS,
                onComplete: (e) => {
                  e == f.wI.k_PrimaryDomainFail
                    ? h(!0)
                    : window.location.assign(s);
                },
                redirectUrl: s,
                theme: "modal",
                children: t && (0, r.jsx)(l.Mk, { redirectURL: s }),
              }),
        });
      }
    },
    74568: (e, s, t) => {
      "use strict";
      t.d(s, {
        mt: () => a,
        o0: () => f.o0,
        eV: () => h.eV,
        KG: () => f.KG,
        Ee: () => f.Ee,
        x_: () => c.x_,
        of: () => d,
        pY: () => f.pY,
        EN: () => o.E,
      });
      var r = t(7850),
        i = t(90626),
        n = t(56283),
        o = t(21869),
        c = t(2654);
      t(37049);
      function l(e) {
        const { labelledBy: s } = e || {},
          [t, r] = i.useState(void 0);
        return {
          headerId: s || t,
          context: i.useMemo(() => ({ setHeaderId: r }), []),
        };
      }
      function a(e) {
        const {
            active: s,
            onDismiss: t,
            className: i,
            modalClassName: a,
            children: d,
            ...f
          } = e,
          { headerId: h, context: u } = l({ labelledBy: e["aria-labelledby"] });
        return (0, r.jsx)(n.t6.Provider, {
          value: u,
          children: (0, r.jsx)(o.E, {
            active: s,
            children: (0, r.jsx)(c.x_, {
              onEscKeypress: t,
              className: a,
              children: (0, r.jsx)(n.UC, {
                role: "dialog",
                "aria-labelledby": h,
                className: i,
                ...f,
                children: d,
              }),
            }),
          }),
        });
      }
      function d(e) {
        const { className: s, children: t } = e;
        return (0, r.jsx)(o.E, {
          active: !0,
          children: (0, r.jsx)("div", { className: s, children: t }),
        });
      }
      t(81194);
      var f = t(78395),
        h = t(10411);
      t(76222);
    },
    37049: (e, s, t) => {
      "use strict";
      t.d(s, { w: () => j });
      var r = t(7850),
        i = t(90626),
        n = t(72739),
        o = t(48902),
        c = t(60155),
        l = t(25118),
        a = t(84933),
        d = t(52745),
        f = t(13871),
        h = t(21869),
        u = t(78327),
        p = t(66703),
        m = t(52038),
        b = t(28460);
      function x(e) {
        const { popup: s, className: t, ...n } = e,
          o = (0, b.GD)(s),
          c = i.useRef(null);
        return (
          i.useEffect(() => {
            const e = c.current;
            if (e && (0, p.Fj)(s, "Window.SetResizeGrip")) {
              let t = 0,
                r = 0;
              const i = e.getBoundingClientRect(),
                n = e.ownerDocument.defaultView;
              i &&
                n &&
                !o &&
                ((t = Math.ceil(n.innerWidth - i.left)),
                (r = Math.ceil(n.innerHeight - i.top))),
                s.SteamClient.Window.SetResizeGrip(t, r);
            }
            return () => {
              (0, p.Fj)(s, "Window.SetResizeGrip") &&
                s.SteamClient.Window.SetResizeGrip(0, 0);
            };
          }, [s, o]),
          o
            ? null
            : (0, r.jsx)("div", {
                className: (0, m.A)("window_resize_grip", t),
                ref: c,
                ...n,
              })
        );
      }
      const j = (e) =>
        (function (e) {
          const s = (0, f.R7)().ownerWindow,
            t = (0, u.Qn)(),
            [n, o] = i.useState(() =>
              t ||
              (!0 === e.onlyPopoutIfNeeded &&
                e.popupHeight < 0.9 * s.innerHeight &&
                e.popupWidth < 0.9 * s.innerWidth &&
                "visible" == s.document.visibilityState)
                ? "inline"
                : "popout",
            );
          return "inline" === n
            ? (0, r.jsx)(h.E, { active: !0, children: e.children })
            : "popout" === n
              ? (0, r.jsx)(_, { ...e })
              : null;
        })({ modal: !0, ...e });
      function _(e) {
        const {
            strName: s,
            strTitle: t,
            popupWidth: h,
            popupHeight: u,
            browserType: p,
            onDismiss: m,
            refPopup: b,
            children: j,
            titleBarClassName: _,
            saveDimensionsKey: N,
          } = e,
          g = (0, f.R7)(),
          S = g?.ownerWindow,
          w = (0, d.yk)(),
          L = { ...(0, o.h3)(N), onClose: m };
        let v = 0;
        e.resizable && (v |= f.Wf.Resizable),
          (e.minWidth || e.minHeight) &&
            (v |= f.Wf.ApplyBrowserScaleToDimensions),
          e.fullscreen && (v |= f.Wf.FullScreen);
        const T = "PopupWindow_" + (s ? `${s}_` : "") + i.useId(),
          { popup: M, element: W } = (0, o.OJ)(
            T,
            {
              title: t,
              dimensions: { width: h, height: u },
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              popup_class: "fullheight",
              browserType: p,
              minWidth: e.minWidth,
              minHeight: e.minHeight,
              replace_existing_popup: !0,
              center_on_window: w?.BCenterPopupsOnWindow() ? S : void 0,
              eCreationFlags: v,
              target_browser: w?.GetBrowserInfo(),
            },
            L,
          );
        if (
          (i.useEffect(
            () => ((0, a.cZ)(b, M), () => (0, a.cZ)(b, void 0)),
            [b, M],
          ),
          i.useEffect(() => {
            M && (M.document.title = t ?? s);
          }, [M, t, s]),
          !W)
        )
          return null;
        const y = e.modal ?? e.onlyPopoutIfNeeded,
          I = !e.resizable;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            y && (0, r.jsx)(k, { popup: M }),
            n.createPortal(
              (0, r.jsxs)(f.kc, {
                ownerWindow: M,
                children: [
                  (0, r.jsxs)("div", {
                    className: "PopupFullWindow",
                    onContextMenu: c.aE,
                    children: [
                      (0, r.jsx)(l.c, {
                        className: _,
                        hideMin: I,
                        hideMax: I,
                        popup: M,
                        hideActions: !m,
                      }),
                      (0, r.jsx)(d.EO, {
                        bCenterPopupsOnWindow: w?.BCenterPopupsOnWindow(),
                        browserInfo: w?.GetBrowserInfo(),
                        children: j,
                      }),
                    ],
                  }),
                  e.resizable && (0, r.jsx)(x, { popup: M }),
                ],
              }),
              W,
            ),
          ],
        });
      }
      function k(e) {
        const { popup: s } = e,
          t = i.useCallback(() => {
            s?.SteamClient.Window.BringToFront();
          }, [s]);
        return (
          i.useEffect(t, [t]),
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
              onClick: t,
            }),
          })
        );
      }
    },
    22797: (e, s, t) => {
      "use strict";
      t.d(s, { t: () => f });
      var r = t(7850),
        i = t(90626),
        n = t(52038),
        o = t(20978),
        c = t.n(o);
      const l =
        t.p +
        "images/applications/store/steam_spinner.png?v=valveisgoodatcaching";
      var a = t(42248),
        d = t(8527);
      const f = i.memo(function (e) {
        const {
          className: s,
          size: t,
          string: o,
          position: f,
          static: u,
          msDelayAppear: p,
        } = e;
        let m = [c().LoadingWrapper, "SteamLogoThrobber", h(t)];
        const [b, x] = i.useState(!p),
          j = !(0, a.q)();
        return (
          (0, i.useEffect)(() => {
            if (b) return;
            const e = setTimeout(() => x(!0), p);
            return () => clearTimeout(e);
          }, [p, b]),
          void 0 === o && m.push(c().noString),
          s && m.push(s),
          u && m.push(c().Static),
          (0, r.jsxs)("div", {
            className: (0, n.A)(
              "center" == f && c().throbber_center_wrapper,
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
          className: s,
          size: t,
          string: o,
          position: l,
          static: a,
          msDelayAppear: d,
        } = e;
        let f = [c().LoadingWrapper, "SteamLogoThrobber", h(t)];
        const [p, m] = i.useState(!d);
        return (
          (0, i.useEffect)(() => {
            if (p) return;
            const e = setTimeout(() => m(!0), d);
            return () => clearTimeout(e);
          }, [d, p]),
          void 0 === o && f.push(c().noString),
          s && f.push(s),
          a && f.push(c().Static),
          (0, r.jsxs)("div", {
            className: (0, n.A)(
              "center" == l && c().throbber_center_wrapper,
              !!d && c().ThrobberDelayAppear,
              p && c().Visible,
            ),
            children: [
              p &&
                (0, r.jsx)("div", {
                  className: f.join(" "),
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
      function h(e) {
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
        let s = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (s += e.className),
          (0, r.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: s,
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
    40917: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => E });
      var r = t(7850),
        i = t(9054),
        n = t.n(i),
        o = t(92757),
        c = t(23809),
        l = t(41762),
        a = t(58632),
        d = t.n(a),
        f = t(80902),
        h = t(37085),
        u = t(56545),
        p = t(34214),
        m = t(30470),
        b = t(22837);
      let x;
      const j = 864e5;
      function _(e) {
        return `appinfo_${e}_${m.TS.LANGUAGE}`;
      }
      function k(e) {
        return Boolean(e && Date.now() - e.timeCached < j);
      }
      function N(e) {
        const s = (0, c.KV)(),
          t = (0, c.rX)();
        return (0, f.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, s) {
              return (
                x ||
                  (x = new (d())(
                    async (t) => {
                      const r = new Map();
                      (await Promise.all(t.map((e) => s.GetObject(_(e)))))
                        .filter(k)
                        .forEach(({ value: e }) => r.set(e.appid, e));
                      const i = t.slice().filter((e) => !r.has(e));
                      if (i.length) {
                        const t = u.w.Init(p._z);
                        t.Body().set_language((0, b.sfN)(m.TS.LANGUAGE)),
                          t.Body().set_appids(i);
                        const n = await p.BE.GetApps(e, t);
                        if (n.GetEResult() != h.R) throw n.GetErrorMessage();
                        n.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            s.StoreObject(_(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              r.set(e.appid, e);
                          });
                      }
                      return t.map((e) => r.get(e));
                    },
                    { cache: !1 },
                  )),
                x
              );
            })(s, t).load(e),
          staleTime: j,
          enabled: !!e,
        }).data;
      }
      var g = t(96873),
        S = t(61859),
        w = t(82477),
        L = t(56283),
        v = t(22797),
        T = t(78327);
      function M(e) {
        return `?joinsessionid=${e}`;
      }
      function W(e) {
        return (0, r.jsx)(L.$n, {
          className: n().JoinSessionButton,
          onClick: () =>
            (window.location.href =
              `steam://launch/${e.steamAppId}` + M(e.sessionID)),
          children: e.children,
        });
      }
      function y(e) {
        const s = (0, g.Vc)(),
          t = (0, c.KV)();
        return s.isSuccess
          ? s.data?.sessions?.length > 0
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(L.JU, {
                    className: n().AvailableSessionsText,
                    children: "Available Steam Sessions:",
                  }),
                  (0, r.jsx)("div", {
                    className: n().SessionList,
                    children: s.data?.sessions.map((s) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className: n().Session,
                          children: [
                            (0, r.jsx)("div", {
                              className: n().MachineName,
                              children: s.machine_name,
                            }),
                            (0, r.jsx)("div", {
                              className: n().OsName,
                              children: s.os_name,
                            }),
                            (0, r.jsx)(L.$n, {
                              className: n().JoinSessionButton,
                              onClick: () =>
                                (0, g.o6)(
                                  t,
                                  s.client_instanceid,
                                  e.steamAppId,
                                  M(e.sessionID),
                                ),
                              children: "Launch Game",
                            }),
                          ],
                        },
                        s.client_instanceid,
                      ),
                    ),
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className: n().Error,
                children: "No logged in sessions",
              })
          : s.isFetching || s.isRefetching
            ? (0, r.jsx)(v.t, {})
            : (0, r.jsxs)("div", {
                className: n().Error,
                children: ["Error ", s.error.message],
              });
      }
      function I(e) {
        const s = N(e.steamAppId);
        return s
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
                    s.friendly_name || s.name,
                    " on Steam and start playing.",
                  ],
                }),
                (0, r.jsx)("div", {
                  className: n().SessionInfoCtr,
                  children: (0, r.jsx)("iframe", { src: e.sessionLiveDataUrl }),
                }),
                T.TS.IN_CLIENT
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
                          children: T.iA.logged_in
                            ? (0, r.jsx)(y, { ...e })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(L.JU, {
                                    children: "Login to join on another device",
                                  }),
                                  (0, r.jsx)(L.$n, {
                                    onClick: w.vg,
                                    children: (0, S.we)("#Login_SignIn"),
                                  }),
                                ],
                              }),
                        }),
                        !T.TS.IN_MOBILE_WEBVIEW &&
                          (0, r.jsxs)("div", {
                            className: n().SectionCtr,
                            children: [
                              (0, r.jsx)(L.JU, {
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
      function E() {
        const e = (0, T.Tc)("multiplayersession_join", "application_config"),
          s = new URLSearchParams((0, o.zy)().search).get("jws"),
          { header: t, body: i } = (0, l.I3)(s) || { header: {}, body: {} };
        let { steamAppId: c } = i;
        const a = i[e.jws_sessionid_key],
          d = i[e.jws_livedata_url_key];
        return (
          "string" == typeof c && (c = parseInt(c)),
          (0, r.jsxs)("div", {
            className: n().JoinApp,
            children: [
              c && d && d
                ? (0, r.jsx)(I, {
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
