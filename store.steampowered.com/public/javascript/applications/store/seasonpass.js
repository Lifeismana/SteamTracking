/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [85139],
    {
      64193: (c, h, a) => {
        "use strict";
        a.r(h),
          a.d(h, {
            SeasonPassDisplayFromStoreBrowse: () => F,
            default: () => D,
          });
        var s = a(7850),
          j = a(72849),
          m = a(72609),
          g = a(90626),
          P = a(48421),
          y = a(77495),
          S = a(84676),
          I = a(11512),
          R = a(19188),
          A = a(72865),
          E = a(83482),
          L = a(1431),
          v = a.n(L);
        const B = { include_assets: !0, include_basic_info: !0 };
        function N(o) {
          const { appid: e } = o,
            [t] = (0, S.t7)(e, B),
            n = (0, A.n9)();
          return !t || !e
            ? null
            : (0, s.jsx)("div", {
                className: v().StoreItemCtn,
                children: (0, s.jsx)("div", {
                  className: v().StoreItemRow,
                  children: (0, s.jsxs)("a", {
                    href: (0, E.wJ)(t.GetStorePageURL(), n),
                    children: [
                      (0, s.jsx)("img", {
                        src: t.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, s.jsxs)("div", {
                        className: v().StoreItemDescription,
                        children: [t.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        var T = a(51079),
          C = a(45497),
          G = a(36707),
          l = a(18210),
          U = a(53411),
          r = a.n(U),
          u = a(29522),
          x = a(40358);
        function F(o) {
          const { appid: e } = o,
            t = (0, u.$5)(e),
            { data: n } = (0, x._F)(t);
          return n?.season_pass
            ? (0, s.jsx)(D, { season_pass: n.season_pass })
            : null;
        }
        function D(o) {
          const { season_pass: e } = o;
          if (!e || !e.milestones || e.milestones.length == 0) return null;
          const t = e.milestones.every((n) => !!n.shipped);
          return (0, s.jsx)(T.Ay, {
            feature: "seasonpassproductpage",
            children: (0, s.jsxs)("div", {
              className:
                "game_area_description overflow_allowed season_pass_area",
              children: [
                (0, s.jsx)("h2", { children: (0, l.we)("#SeasonPass_Header") }),
                !t &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("p", {
                        children: (0, l.oW)("#SeasonPass_Incomplete_Desc"),
                      }),
                      (0, s.jsx)("p", {
                        children: (0, l.oW)(
                          "#SeasonPass_Incomplete_Desc2",
                          (0, s.jsx)("a", {
                            href: `${m.TS.STORE_BASE_URL}account/notificationsettings`,
                          }),
                        ),
                      }),
                    ],
                  }),
                e.milestones
                  .sort((n, i) =>
                    n.shipped && i.shipped
                      ? (n.rtime_complete ?? 0) - (i.rtime_complete ?? 0)
                      : n.shipped
                        ? -1
                        : i.shipped
                          ? 1
                          : f(n) - f(i),
                  )
                  .map((n) =>
                    (0, s.jsx)(
                      O,
                      { baseGameAppID: e.appid, milestone: n },
                      "ms_" + n.milestone_id,
                    ),
                  ),
              ],
            }),
          });
        }
        function f(o) {
          const e = o.dates ?? [];
          return e[e.length - 1]?.rtime ?? 0;
        }
        function O(o) {
          const { milestone: e, baseGameAppID: t } = o,
            n = (e.milestone_desc?.length ?? 0) > 0;
          return (0, s.jsxs)("div", {
            className: r().SeasonPass,
            children: [
              (0, s.jsxs)("div", {
                className: (0, G.A)(r().Title, !!e.shipped && r().Shipped),
                children: [
                  (0, s.jsxs)("span", {
                    children: [
                      !!e.shipped && "\u2713",
                      "\xA0",
                      l.A0.GetTokenWithFallback(e.title ?? []),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: r().DateAndControl,
                    children: (0, s.jsx)(M, { milestone: e }),
                  }),
                ],
              }),
              n && (0, s.jsx)($, { milestone: e, baseGameAppID: t }),
            ],
          });
        }
        function $(o) {
          const { milestone: e, baseGameAppID: t } = o,
            n = l.A0.GetTokenWithFallback(e.milestone_desc ?? []),
            i = e.appid || e.coming_soon_appid;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              i ? (0, s.jsx)(N, { appid: i }) : null,
              (0, s.jsxs)("div", {
                className: r().Description,
                children: [
                  (0, s.jsx)(C.n, { text: n }),
                  !!e.shipped &&
                    (0, s.jsx)(z, { milestone: e, baseGameAppID: t }),
                ],
              }),
            ],
          });
        }
        function M(o) {
          const { milestone: e } = o;
          if (e.shipped) return (0, s.jsx)(W, { milestone: e });
          const t = e.dates ?? [],
            n = t[0]?.rtime ?? 0,
            i = t.filter((p, d) => d == 0 || (p.rtime ?? 0) < n);
          return (0, s.jsx)("div", {
            className: r().Upcoming,
            children: (0, l.PP)(
              "#SeasonPass_Release_Date",
              (0, s.jsx)("br", {}),
              [...i].reverse().map((p, d) => {
                const J = (0, I.M)(
                  p.coming_soon_display_type,
                  p.rtime ?? 0,
                  void 0,
                  !0,
                );
                return (0, s.jsx)(
                  "div",
                  {
                    className: d + 1 < i.length ? r().Strike : void 0,
                    children: J,
                  },
                  "dd" + p.rtime + p.coming_soon_display_type,
                );
              }),
            ),
          });
        }
        function W(o) {
          const { milestone: e } = o,
            t = (0, u.$5)(e.appid),
            { data: n } = (0, x.by)(t),
            i = n?.steam_release_date || e.rtime_complete || 0;
          return (0, s.jsx)("div", {
            className: r().Shipped,
            children: (0, l.PP)(
              "#SeasonPass_Released_Date",
              (0, s.jsx)("br", {}),
              (0, l.TW)(i),
            ),
          });
        }
        const H = {};
        function z(o) {
          const { milestone: e, baseGameAppID: t } = o;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: r().Status,
                children: (0, l.PP)(
                  e.appid
                    ? "#SeasonPass_DLC_Status"
                    : "#SeasonPass_Event_Status",
                ),
              }),
              e.appid && (0, s.jsx)(Z, { milestone: e }),
              !!(e.appid && e.event_gid) &&
                (0, s.jsx)("span", { className: r().Padding }),
              !!e.event_gid &&
                (0, s.jsx)(X, { milestone: e, baseGameAppID: t }),
            ],
          });
        }
        function Z(o) {
          const { milestone: e } = o,
            [t] = (0, S.t7)(e.appid, H);
          return (0, s.jsx)("a", {
            href:
              t?.GetStorePageURL() || `${m.TS.STORE_BASE_URL}app/${e.appid}`,
            children: (0, l.we)("#SeasonPass_ShowStore"),
          });
        }
        function X(o) {
          const { milestone: e, baseGameAppID: t } = o,
            [n, i] = (0, g.useState)(!1),
            p = (0, P.RR)(e.event_gid ?? "");
          return p
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("a", {
                    href: `${m.TS.STORE_BASE_URL}news/app/${t}/view/${e.event_gid}`,
                    onClick: (d) => {
                      d.preventDefault(), d.stopPropagation(), i(!0);
                    },
                    children: (0, l.we)("#SeasonPass_ReadEvent"),
                  }),
                  !!n &&
                    (0, s.jsx)(R.N, {
                      appid: t,
                      eventModel: p,
                      announcementGID: p.AnnouncementGID,
                      closeModal: () => i(!1),
                      partnerEventStore: y.O3,
                      bShowOnlyInitialEvent: !0,
                      showAppHeader: !0,
                      trackingLocation: j.Tc.j$,
                    }),
                ],
              })
            : (0, s.jsx)("a", {
                href: `${m.TS.STORE_BASE_URL}news/app/${t}/view/${e.event_gid}`,
                children: (0, l.we)("#SeasonPass_ReadEvent"),
              });
        }
      },
      53411: (c) => {
        c.exports = {
          SeasonPass: "_3gfJe6nIkr6ZriDDPYp-z7",
          Description: "_3sdNbLRZYrhEi9HWS1XAdu",
          Title: "_3u0Ar8iq66LfqUbdXK2Scn",
          Shipped: "_14Z4vFKjBcbizLEXIFSvWg",
          DateAndControl: "_1bjdoxghswkEhrMsa43lpE",
          Upcoming: "_2P0yy2pWYDXAg02ywBc6xc",
          Status: "_2_JVEcPrnkP9U8YnlcUaV7",
          Content: "FL3zV7J5DHOjOZzklSfsu",
          Text: "_2bVkdku0nL6ga2QxSvR0Np",
          Padding: "_3ENBi7dhQgbnK6NpZ-ut67",
          Strike: "_33nXsC2--p10FL6D9ICf9W",
          Chevron: "z1O0vP7Inz1H3vHuEjrUl",
        };
      },
      1431: (c) => {
        c.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
    },
  ]);
})();
