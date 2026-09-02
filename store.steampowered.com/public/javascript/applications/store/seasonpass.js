/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [85139],
    {
      74824: (d, v, n) => {
        "use strict";
        n.r(v), n.d(v, { default: () => C });
        var s = n(7850),
          u = n(72849),
          c = n(72609),
          x = n(90626),
          f = n(48421),
          j = n(79118),
          S = n(84676),
          D = n(11512),
          g = n(19188),
          P = n(72865),
          R = n(83482),
          y = n(1431),
          h = n.n(y);
        const A = { include_assets: !0, include_basic_info: !0 };
        function I(o) {
          const { appid: e } = o,
            [t] = (0, S.t7)(e, A),
            a = (0, P.n9)();
          return !t || !e
            ? null
            : (0, s.jsx)("div", {
                className: h().StoreItemCtn,
                children: (0, s.jsx)("div", {
                  className: h().StoreItemRow,
                  children: (0, s.jsxs)("a", {
                    href: (0, R.wJ)(t.GetStorePageURL(), a),
                    children: [
                      (0, s.jsx)("img", {
                        src: t.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, s.jsxs)("div", {
                        className: h().StoreItemDescription,
                        children: [t.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        var T = n(51079),
          G = n(42555),
          N = n(36707),
          l = n(18210),
          B = n(29298),
          r = n.n(B),
          E = n(29522),
          L = n(40358);
        function C(o) {
          const { season_pass: e } = o;
          return !e || !e.milestones || e.milestones.length == 0
            ? null
            : (0, s.jsx)(T.Ay, {
                feature: "seasonpassproductpage",
                children: (0, s.jsxs)("div", {
                  className:
                    "game_area_description overflow_allowed season_pass_area",
                  children: [
                    (0, s.jsx)("h2", {
                      children: (0, l.we)("#SeasonPass_Header"),
                    }),
                    (0, s.jsx)("p", {
                      children: (0, l.oW)("#SeasonPass_Incomplete_Desc"),
                    }),
                    (0, s.jsx)("p", {
                      children: (0, l.oW)(
                        "#SeasonPass_Incomplete_Desc2",
                        (0, s.jsx)("a", {
                          href: `${c.TS.STORE_BASE_URL}account/notificationsettings`,
                        }),
                      ),
                    }),
                    e.milestones
                      .sort((t, a) =>
                        t.shipped && a.shipped
                          ? t.rtime_complete - a.rtime_complete
                          : t.shipped
                            ? -1
                            : a.shipped
                              ? 1
                              : t.dates[t.dates.length - 1].rtime -
                                a.dates[a.dates.length - 1].rtime,
                      )
                      .map((t) =>
                        (0, s.jsx)(
                          U,
                          { baseGameAppID: e.appid, milestone: t },
                          "ms_" + t.milestone_id,
                        ),
                      ),
                  ],
                }),
              });
        }
        function U(o) {
          const { milestone: e, baseGameAppID: t } = o,
            a = e.milestone_desc?.length > 0;
          return (0, s.jsxs)("div", {
            className: r().SeasonPass,
            children: [
              (0, s.jsxs)("div", {
                className: (0, N.A)(r().Title, !!e.shipped && r().Shipped),
                children: [
                  (0, s.jsxs)("span", {
                    children: [
                      !!e.shipped && "\u2713",
                      "\xA0",
                      l.A0.GetTokenWithFallback(e.title),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: r().DateAndControl,
                    children: (0, s.jsx)(M, { milestone: e }),
                  }),
                ],
              }),
              a && (0, s.jsx)($, { milestone: e, baseGameAppID: t }),
            ],
          });
        }
        function $(o) {
          const { milestone: e, baseGameAppID: t } = o,
            a = l.A0.GetTokenWithFallback(e.milestone_desc),
            i = e.appid || e.coming_soon_appid;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              !!i && (0, s.jsx)(I, { appid: i }),
              (0, s.jsxs)("div", {
                className: r().Description,
                children: [
                  (0, s.jsx)(G.n, { text: a }),
                  !!e.shipped &&
                    (0, s.jsx)(Z, { milestone: e, baseGameAppID: t }),
                ],
              }),
            ],
          });
        }
        function M(o) {
          const { milestone: e } = o;
          if (e.shipped) return (0, s.jsx)(O, { milestone: e });
          const t = e.dates[0].rtime,
            a = e.dates.filter((i, p) => p == 0 || i.rtime < t);
          return (0, s.jsx)("div", {
            className: r().Upcoming,
            children: (0, l.PP)(
              "#SeasonPass_Release_Date",
              (0, s.jsx)("br", {}),
              [...a].reverse().map((i, p) => {
                const m = (0, D.M)(
                  i.coming_soon_display_type,
                  i.rtime,
                  null,
                  !0,
                );
                return (0, s.jsx)(
                  "div",
                  {
                    className: p + 1 < a.length ? r().Strike : void 0,
                    children: m,
                  },
                  "dd" + i.rtime + i.coming_soon_display_type,
                );
              }),
            ),
          });
        }
        function O(o) {
          const { milestone: e } = o,
            t = (0, E.$5)(e.appid),
            { data: a } = (0, L.by)(t),
            i = a?.steam_release_date || e.rtime_complete;
          return (0, s.jsx)("div", {
            className: r().Shipped,
            children: (0, l.PP)(
              "#SeasonPass_Released_Date",
              (0, s.jsx)("br", {}),
              (0, l.TW)(i),
            ),
          });
        }
        const W = {};
        function Z(o) {
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
              e.appid && (0, s.jsx)(H, { milestone: e }),
              !!(e.appid && e.event_gid) &&
                (0, s.jsx)("span", { className: r().Padding }),
              !!e.event_gid &&
                (0, s.jsx)(Y, { milestone: e, baseGameAppID: t }),
            ],
          });
        }
        function H(o) {
          const { milestone: e } = o,
            [t] = (0, S.t7)(e.appid, W);
          return (0, s.jsx)("a", {
            href:
              t?.GetStorePageURL() || `${c.TS.STORE_BASE_URL}app/${e.appid}`,
            children: (0, l.we)("#SeasonPass_ShowStore"),
          });
        }
        function Y(o) {
          const { milestone: e, baseGameAppID: t } = o,
            [a, i] = (0, x.useState)(!1),
            p = (0, f.RR)(e.event_gid);
          return p
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("a", {
                    href: `${c.TS.STORE_BASE_URL}news/app/${t}/view/${e.event_gid}`,
                    onClick: (m) => {
                      m.preventDefault(), m.stopPropagation(), i(!0);
                    },
                    children: (0, l.we)("#SeasonPass_ReadEvent"),
                  }),
                  !!a &&
                    (0, s.jsx)(g.N, {
                      appid: t,
                      eventModel: p,
                      announcementGID: p.AnnouncementGID,
                      closeModal: () => i(!1),
                      partnerEventStore: j.O3,
                      bShowOnlyInitialEvent: !0,
                      showAppHeader: !0,
                      trackingLocation: u.Tc.j$,
                    }),
                ],
              })
            : (0, s.jsx)("a", {
                href: `${c.TS.STORE_BASE_URL}news/app/${t}/view/${e.event_gid}`,
                children: (0, l.we)("#SeasonPass_ReadEvent"),
              });
        }
      },
      1431: (d) => {
        d.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
      29298: (d) => {
        d.exports = {
          SeasonPass: "oa0Mg649faNiGrRBlXZ7b",
          Description: "_3ZmgNZ5nbBbDojlnZLRkgc",
          Title: "_1PoePgbQRAy0Sbtz2Po_R7",
          Shipped: "Y4pxifDaDKS1sYR7j-35X",
          DateAndControl: "_3-5TufllBcRHGRpNEAuY5u",
          Upcoming: "lZmBeL-zQf8GORGTr4uX-",
          Status: "_2uj7WLmhl5-zIS1NE_Ig-9",
          Content: "_1Axq2b2LqJszxamtTvrnTV",
          Text: "_3zXxPvXsjZinhyyYuHArVW",
          Padding: "_26DsxbVP4TJh-d5NBcU6Qc",
          Strike: "CoE7R_RffGU0rYbU4eHwa",
          Chevron: "_1qoDole_3YKojGNDyp72EY",
        };
      },
    },
  ]);
})();
