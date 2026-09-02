/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [5836],
    {
      21521: (P, a, t) => {
        "use strict";
        t.r(a), t.d(a, { QAndARoutes: () => _, default: () => m });
        var n = t(7850),
          i = t(67628),
          s = t(92757),
          l = t(20076),
          o = t(90783);
        const _ = {
          Dashboard: (c) => `/questions/${c}/dashboard`,
          FullPageView: (c, d) => `/questions/${c}/view/${d}`,
        };
        function E(c) {
          return (0, n.jsxs)(s.dO, {
            children: [
              (0, n.jsx)(s.qh, {
                path: _.Dashboard(":vanity_str"),
                render: (d) =>
                  (0, n.jsx)(l.X, {
                    config: {
                      "qanda-root": () => {
                        const { vanity_str: D } = d.match.params;
                        return (0, n.jsx)(i.xh, { vanity_str: D });
                      },
                    },
                  }),
              }),
              (0, n.jsx)(s.qh, {
                path: _.FullPageView(":vanity_str", ":session_gid"),
                render: (d) =>
                  (0, n.jsx)(l.X, {
                    config: {
                      "qanda-root": () => {
                        const { vanity_str: D, session_gid: T } =
                          d.match.params;
                        return (0, n.jsx)(i.AC, { gidSession: T });
                      },
                    },
                  }),
              }),
              (0, n.jsx)(s.qh, { component: o.a }),
            ],
          });
        }
        const m = E;
      },
      24642: (P, a, t) => {
        "use strict";
        t.d(a, { D: () => i });
        var n = t(84346);
        function i(s) {
          return s.toLocaleString((0, n.J)());
        }
      },
      84346: (P, a, t) => {
        "use strict";
        t.d(a, { J: () => s });
        var n = t(72609),
          i = t(31275);
        function s() {
          return (0, i.A)().languages.map((o) => l(o.strISOCode));
        }
        function l(o) {
          return o.length == 2 && n.TS.COUNTRY ? `${o}-${n.TS.COUNTRY}` : o;
        }
      },
      86390: (P, a, t) => {
        "use strict";
        t.d(a, { vg: () => v });
        var n = t(7850),
          i = t(90626),
          s = t(88003),
          l = t(18210),
          o = t(3166),
          _ = t(1317),
          E = t(94276),
          m = t(13018),
          c = t(8059),
          d = t(2801);
        function D(r) {
          return (0, n.jsx)(s.x_, {
            onEscKeypress: r.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, n.jsx)(h, {
              redirectURL: r.redirectURL,
              guestOption: r.guestOption,
            }),
          });
        }
        function T(r) {
          const { redirectURL: e = window.location.href } = r;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(D, { redirectURL: e }),
          });
        }
        function v() {
          (0, s.pg)(
            (0, n.jsx)(D, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, l.we)("#Login_SignInTitle") },
          );
        }
        function g(r, e) {
          ShowModalDialog(
            jsx(D, { ownerWin: window, redirectURL: r, guestOption: e }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function h(r) {
          const { redirectURL: e, guestOption: u } = r,
            [M] = (0, i.useState)(
              new m.D(o.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [O, j] = (0, i.useState)(!1),
            L = (A) => {
              A == c.wI.k_PrimaryDomainFail ? j(!0) : window.location.assign(e);
            };
          return (0, n.jsx)("div", {
            children: O
              ? (0, n.jsx)(_.Fn, {})
              : (0, n.jsx)(_.YN, {
                  autoFocus: !0,
                  transport: M,
                  platform: E.SS.tS,
                  onComplete: L,
                  redirectUrl: e,
                  theme: "modal",
                  children: u && (0, n.jsx)(_.Mk, { redirectURL: e }),
                }),
          });
        }
      },
      12932: (P, a, t) => {
        "use strict";
        t.d(a, { AQ: () => g, pn: () => r, qx: () => h });
        var n = t(7850),
          i = t(19316),
          s = t(18210),
          l = t(36118),
          o = t(90626),
          _ = t(36707),
          E = t(95695),
          m = t.n(E),
          c = t(25792),
          d = t(64734),
          D = t.n(d),
          T = t(65946),
          v = t(11243);
        function g(e) {
          const {
              title: u,
              tooltip: M,
              getMinimized: O,
              toggleMinimized: j,
              className: L,
              children: A,
              elAdditionalButtons: R,
            } = e,
            C = (0, T.q3)(() => O());
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: (0, _.A)(
                  L,
                  d.SectionTitleHeader,
                  d.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, _.A)(
                      E.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [u, !!M && (0, n.jsx)(v.o, { tooltip: M })],
                  }),
                  (0, n.jsxs)("div", {
                    className: d.SectionTitleButtons,
                    children: [
                      R,
                      (0, n.jsx)(r, { bIsMinimized: C, fnToggleMinimize: j }),
                    ],
                  }),
                ],
              }),
              !C && (0, n.jsx)(c.tH, { children: A }),
            ],
          });
        }
        function h(e) {
          const [u, M] = o.useState(!!e.bStartMinimized);
          return (0, n.jsx)(g, {
            ...e,
            getMinimized: () => u,
            toggleMinimized: () => M(!u),
            children: e.children,
          });
        }
        function r(e) {
          const { bIsMinimized: u, fnToggleMinimize: M } = e,
            O = u ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, n.jsx)(i.$n, {
            "data-tooltip-text": (0, s.we)(O),
            onClick: M,
            children: e.bIsMinimized
              ? (0, n.jsx)(l.hz4, {})
              : (0, n.jsx)(l.Xjb, {}),
          });
        }
      },
      47689: (P, a, t) => {
        "use strict";
        t.d(a, { m: () => l });
        var n = t(41735),
          i = t.n(n),
          s = t(90626);
        function l(o) {
          const _ = s.useRef(i().CancelToken.source());
          return (
            s.useEffect(() => {
              const E = _.current;
              return () => E.cancel(o ? `${o}: unmounting` : "unmounting");
            }, [o]),
            _.current
          );
        }
      },
      64734: (P) => {
        P.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
