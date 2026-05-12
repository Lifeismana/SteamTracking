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
    42248: (e, r, s) => {
      "use strict";
      s.d(r, { q: () => i });
      var t = s(78327),
        c = s(22837);
      function i() {
        return t.TS.IN_CLIENT && (0, c.DOG)(t.TS.LAUNCHER_TYPE);
      }
    },
    82477: (e, r, s) => {
      "use strict";
      s.d(r, { Cg: () => b, pZ: () => p, vg: () => m });
      var t = s(7850),
        c = s(90626),
        i = s(738),
        o = s(61859),
        n = s(78327),
        a = s(92120),
        l = s(51883),
        d = s(72034),
        f = s(28240),
        h = s(51706);
      function u(e) {
        return (0, t.jsx)(i.x_, {
          onEscKeypress: e.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, t.jsx)(x, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        });
      }
      function b(e) {
        const { redirectURL: r = window.location.href } = e;
        return (0, t.jsx)(h.EN, {
          active: !0,
          children: (0, t.jsx)(u, { redirectURL: r }),
        });
      }
      function m() {
        (0, i.pg)(
          (0, t.jsx)(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function p(e, r) {
        (0, i.pg)(
          (0, t.jsx)(u, { ownerWin: window, redirectURL: e, guestOption: r }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function x(e) {
        const { redirectURL: r, guestOption: s } = e,
          [i] = (0, c.useState)(
            new d.D(n.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, h] = (0, c.useState)(!1);
        return (0, t.jsx)("div", {
          children: o
            ? (0, t.jsx)(a.Fn, {})
            : (0, t.jsx)(a.YN, {
                autoFocus: !0,
                transport: i,
                platform: l.SS.tS,
                onComplete: (e) => {
                  e == f.wI.k_PrimaryDomainFail
                    ? h(!0)
                    : window.location.assign(r);
                },
                redirectUrl: r,
                theme: "modal",
                children: s && (0, t.jsx)(a.Mk, { redirectURL: r }),
              }),
        });
      }
    },
    51706: (e, r, s) => {
      "use strict";
      s.d(r, {
        mt: () => l,
        o0: () => f.o0,
        eV: () => h.eV,
        KG: () => f.KG,
        Ee: () => f.Ee,
        x_: () => n.x_,
        of: () => d,
        pY: () => f.pY,
        EN: () => o.E,
      });
      var t = s(7850),
        c = s(90626),
        i = s(56283),
        o = s(21869),
        n = s(2654);
      s(72739),
        s(48902),
        s(60155),
        s(25118),
        s(84933),
        s(52745),
        s(13871),
        s(78327),
        s(28460);
      function a(e) {
        const { labelledBy: r } = e || {},
          [s, t] = c.useState(void 0);
        return {
          headerId: r || s,
          context: c.useMemo(() => ({ setHeaderId: t }), []),
        };
      }
      function l(e) {
        const {
            active: r,
            onDismiss: s,
            className: c,
            modalClassName: l,
            children: d,
            ...f
          } = e,
          { headerId: h, context: u } = a({ labelledBy: e["aria-labelledby"] });
        return (0, t.jsx)(i.t6.Provider, {
          value: u,
          children: (0, t.jsx)(o.E, {
            active: r,
            children: (0, t.jsx)(n.x_, {
              onEscKeypress: s,
              className: l,
              children: (0, t.jsx)(i.UC, {
                role: "dialog",
                "aria-labelledby": h,
                className: c,
                ...f,
                children: d,
              }),
            }),
          }),
        });
      }
      function d(e) {
        const { className: r, children: s } = e;
        return (0, t.jsx)(o.E, {
          active: !0,
          children: (0, t.jsx)("div", { className: r, children: s }),
        });
      }
      s(81194);
      var f = s(78395),
        h = s(10411);
      s(76222);
    },
    22797: (e, r, s) => {
      "use strict";
      s.d(r, { t: () => f });
      var t = s(7850),
        c = s(90626),
        i = s(52038),
        o = s(20978),
        n = s.n(o);
      const a =
        s.p +
        "images/applications/store/steam_spinner.png?v=valveisgoodatcaching";
      var l = s(42248),
        d = s(8527);
      const f = c.memo(function (e) {
        const {
          className: r,
          size: s,
          string: o,
          position: f,
          static: u,
          msDelayAppear: b,
        } = e;
        let m = [n().LoadingWrapper, "SteamLogoThrobber", h(s)];
        const [p, x] = c.useState(!b),
          j = !(0, l.q)();
        return (
          (0, c.useEffect)(() => {
            if (p) return;
            const e = setTimeout(() => x(!0), b);
            return () => clearTimeout(e);
          }, [b, p]),
          void 0 === o && m.push(n().noString),
          r && m.push(r),
          u && m.push(n().Static),
          (0, t.jsxs)("div", {
            className: (0, i.A)(
              "center" == f && n().throbber_center_wrapper,
              !!b && n().ThrobberDelayAppear,
              p && n().Visible,
            ),
            children: [
              p &&
                j &&
                (0, t.jsx)("div", {
                  className: m.join(" "),
                  children: (0, t.jsx)("div", {
                    className: n().NewThrobber,
                    children: (0, t.jsx)("img", { src: (0, d.YJ)(a) }),
                  }),
                }),
              Boolean(o) &&
                (0, t.jsx)("div", { className: n().ThrobberText, children: o }),
            ],
          })
        );
      });
      c.memo(function (e) {
        const {
          className: r,
          size: s,
          string: o,
          position: a,
          static: l,
          msDelayAppear: d,
        } = e;
        let f = [n().LoadingWrapper, "SteamLogoThrobber", h(s)];
        const [b, m] = c.useState(!d);
        return (
          (0, c.useEffect)(() => {
            if (b) return;
            const e = setTimeout(() => m(!0), d);
            return () => clearTimeout(e);
          }, [d, b]),
          void 0 === o && f.push(n().noString),
          r && f.push(r),
          l && f.push(n().Static),
          (0, t.jsxs)("div", {
            className: (0, i.A)(
              "center" == a && n().throbber_center_wrapper,
              !!d && n().ThrobberDelayAppear,
              b && n().Visible,
            ),
            children: [
              b &&
                (0, t.jsx)("div", {
                  className: f.join(" "),
                  children: (0, t.jsxs)("div", {
                    className: n().Throbber,
                    children: [
                      (0, t.jsx)(u, { className: n().base }),
                      (0, t.jsx)(u, { className: n().blur }),
                    ],
                  }),
                }),
              Boolean(o) &&
                (0, t.jsx)("div", { className: n().ThrobberText, children: o }),
            ],
          })
        );
      });
      function h(e) {
        switch (e) {
          case "small":
            return n().throbber_small;
          case "medium":
            return n().throbber_medium;
          case "xlarge":
            return n().throbber_xlarge;
          case "xxlarge":
            return n().throbber_xxlarge;
          default:
            return n().throbber_large;
        }
      }
      function u(e) {
        let r = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (r += e.className),
          (0, t.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: r,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsxs)("g", {
                className: n().partCircle,
                children: [
                  (0, t.jsx)("path", {
                    className: n().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, t.jsxs)("g", {
                className: n().mainOutline,
                children: [
                  (0, t.jsx)("path", {
                    className: n().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, t.jsx)("path", {
                    className: n().roundThrobber15,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                ],
              }),
              (0, t.jsx)("g", {
                className: n().bottomCircle,
                children: (0, t.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, t.jsx)("g", {
                className: n().topCircle,
                children: (0, t.jsx)("circle", {
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
    40917: (e, r, s) => {
      "use strict";
      s.r(r), s.d(r, { default: () => z });
      var t = s(7850),
        c = s(9054),
        i = s.n(c),
        o = s(92757),
        n = s(23809),
        a = s(41762),
        l = s(58632),
        d = s.n(l),
        f = s(80902),
        h = s(37085),
        u = s(56545),
        b = s(34214),
        m = s(30470),
        p = s(22837);
      let x;
      const j = 864e5;
      function _(e) {
        return `appinfo_${e}_${m.TS.LANGUAGE}`;
      }
      function k(e) {
        return Boolean(e && Date.now() - e.timeCached < j);
      }
      function N(e) {
        const r = (0, n.KV)(),
          s = (0, n.rX)();
        return (0, f.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, r) {
              return (
                x ||
                  (x = new (d())(
                    async (s) => {
                      const t = new Map();
                      (await Promise.all(s.map((e) => r.GetObject(_(e)))))
                        .filter(k)
                        .forEach(({ value: e }) => t.set(e.appid, e));
                      const c = s.slice().filter((e) => !t.has(e));
                      if (c.length) {
                        const s = u.w.Init(b._z);
                        s.Body().set_language((0, p.sfN)(m.TS.LANGUAGE)),
                          s.Body().set_appids(c);
                        const i = await b.BE.GetApps(e, s);
                        if (i.GetEResult() != h.R) throw i.GetErrorMessage();
                        i.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            r.StoreObject(_(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              t.set(e.appid, e);
                          });
                      }
                      return s.map((e) => t.get(e));
                    },
                    { cache: !1 },
                  )),
                x
              );
            })(r, s).load(e),
          staleTime: j,
          enabled: !!e,
        }).data;
      }
      var L = s(96873),
        S = s(61859),
        T = s(82477),
        g = s(56283),
        v = s(22797),
        M = s(78327);
      function w(e) {
        return `?joinsessionid=${e}`;
      }
      function I(e) {
        return (0, t.jsx)(g.$n, {
          className: i().JoinSessionButton,
          onClick: () =>
            (window.location.href =
              `steam://launch/${e.steamAppId}` + w(e.sessionID)),
          children: e.children,
        });
      }
      function y(e) {
        const r = (0, L.Vc)(),
          s = (0, n.KV)();
        return r.isSuccess
          ? r.data?.sessions?.length > 0
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(g.JU, {
                    className: i().AvailableSessionsText,
                    children: "Available Steam Sessions:",
                  }),
                  (0, t.jsx)("div", {
                    className: i().SessionList,
                    children: r.data?.sessions.map((r) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: i().Session,
                          children: [
                            (0, t.jsx)("div", {
                              className: i().MachineName,
                              children: r.machine_name,
                            }),
                            (0, t.jsx)("div", {
                              className: i().OsName,
                              children: r.os_name,
                            }),
                            (0, t.jsx)(g.$n, {
                              className: i().JoinSessionButton,
                              onClick: () =>
                                (0, L.o6)(
                                  s,
                                  r.client_instanceid,
                                  e.steamAppId,
                                  w(e.sessionID),
                                ),
                              children: "Launch Game",
                            }),
                          ],
                        },
                        r.client_instanceid,
                      ),
                    ),
                  }),
                ],
              })
            : (0, t.jsx)("div", {
                className: i().Error,
                children: "No logged in sessions",
              })
          : r.isFetching || r.isRefetching
            ? (0, t.jsx)(v.t, {})
            : (0, t.jsxs)("div", {
                className: i().Error,
                children: ["Error ", r.error.message],
              });
      }
      function E(e) {
        const r = N(e.steamAppId);
        return r
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: i().Header,
                  children: "Join Game Session",
                }),
                (0, t.jsxs)("div", {
                  className: i().Explanation,
                  children: [
                    "You've been invited to join a game! Click below to launch ",
                    r.friendly_name || r.name,
                    " on Steam and start playing.",
                  ],
                }),
                (0, t.jsx)("div", {
                  className: i().SessionInfoCtr,
                  children: (0, t.jsx)("iframe", { src: e.sessionLiveDataUrl }),
                }),
                M.TS.IN_CLIENT
                  ? (0, t.jsx)("div", {
                      className: i().SectionCtr,
                      children: (0, t.jsx)(I, {
                        ...e,
                        children: "Launch Game",
                      }),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: i().SectionCtr,
                          children: M.iA.logged_in
                            ? (0, t.jsx)(y, { ...e })
                            : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(g.JU, {
                                    children: "Login to join on another device",
                                  }),
                                  (0, t.jsx)(g.$n, {
                                    onClick: T.vg,
                                    children: (0, S.we)("#Login_SignIn"),
                                  }),
                                ],
                              }),
                        }),
                        !M.TS.IN_MOBILE_WEBVIEW &&
                          (0, t.jsxs)("div", {
                            className: i().SectionCtr,
                            children: [
                              (0, t.jsx)(g.JU, {
                                children: "Or launch on this PC",
                              }),
                              (0, t.jsx)(I, {
                                ...e,
                                children: "Launch Game Here",
                              }),
                            ],
                          }),
                      ],
                    }),
              ],
            })
          : (0, t.jsx)(v.t, {});
      }
      function z() {
        const e = (0, M.Tc)("multiplayersession_join", "application_config"),
          r = new URLSearchParams((0, o.zy)().search).get("jws"),
          { header: s, body: c } = (0, a.I3)(r) || { header: {}, body: {} };
        let { steamAppId: n } = c;
        const l = c[e.jws_sessionid_key],
          d = c[e.jws_livedata_url_key];
        return (
          "string" == typeof n && (n = parseInt(n)),
          (0, t.jsxs)("div", {
            className: i().JoinApp,
            children: [
              n && d && d
                ? (0, t.jsx)(E, {
                    steamAppId: n,
                    sessionLiveDataUrl: d,
                    sessionID: l,
                  })
                : (0, t.jsx)("div", { children: "Invalid session link" }),
              " ",
            ],
          })
        );
      }
    },
  },
]);
