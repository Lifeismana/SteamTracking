/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [85139],
  {
    53411: (e) => {
      e.exports = {
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
    1431: (e) => {
      e.exports = {
        StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
        StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
        StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
      };
    },
    84929: (e, s, n) => {
      "use strict";
      n.r(s),
        n.d(s, { SeasonPassDisplayFromStoreBrowse: () => b, default: () => R });
      var t = n(7850),
        a = n(34214),
        i = n(66418),
        o = n(90626),
        r = n(38390),
        p = n(91254),
        l = n(55263),
        c = n(63369),
        d = n(8107),
        m = n(60014),
        _ = n(55963),
        h = n(1431),
        S = n.n(h);
      const u = { include_assets: !0, include_basic_info: !0 };
      function x(e) {
        const { appid: s } = e,
          [n] = (0, l.t7)(s, u),
          a = (0, m.n9)();
        return n && s
          ? (0, t.jsx)("div", {
              className: S().StoreItemCtn,
              children: (0, t.jsx)("div", {
                className: S().StoreItemRow,
                children: (0, t.jsxs)("a", {
                  href: (0, _.wJ)(n.GetStorePageURL(), a),
                  children: [
                    (0, t.jsx)("img", {
                      src: n.GetAssets().GetSmallCapsuleURL(),
                    }),
                    (0, t.jsxs)("div", {
                      className: S().StoreItemDescription,
                      children: [n.GetShortDescription(), " "],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var j = n(32630),
        v = n(5702),
        g = n(52038),
        f = n(61859),
        P = n(53411),
        D = n.n(P),
        A = n(14987),
        I = n(39777);
      function b(e) {
        const { appid: s } = e,
          n = (0, A.$5)(s),
          { data: a } = (0, I._F)(n);
        return a?.season_pass
          ? (0, t.jsx)(R, { season_pass: a.season_pass })
          : null;
      }
      function R(e) {
        const { season_pass: s } = e;
        return s && s.milestones && 0 != s.milestones.length
          ? (0, t.jsx)(j.Ay, {
              feature: "seasonpassproductpage",
              children: (0, t.jsxs)("div", {
                className:
                  "game_area_description overflow_allowed season_pass_area",
                children: [
                  (0, t.jsx)("h2", {
                    children: (0, f.we)("#SeasonPass_Header"),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, f.oW)("#SeasonPass_Incomplete_Desc"),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, f.oW)(
                      "#SeasonPass_Incomplete_Desc2",
                      (0, t.jsx)("a", {
                        href: `${i.TS.STORE_BASE_URL}account/notificationsettings`,
                      }),
                    ),
                  }),
                  s.milestones
                    .sort((e, s) =>
                      e.shipped && s.shipped
                        ? (e.rtime_complete ?? 0) - (s.rtime_complete ?? 0)
                        : e.shipped
                          ? -1
                          : s.shipped
                            ? 1
                            : k(e) - k(s),
                    )
                    .map((e) =>
                      (0, t.jsx)(
                        w,
                        { baseGameAppID: s.appid, milestone: e },
                        "ms_" + e.milestone_id,
                      ),
                    ),
                ],
              }),
            })
          : null;
      }
      function k(e) {
        const s = e.dates ?? [];
        return s[s.length - 1]?.rtime ?? 0;
      }
      function w(e) {
        const { milestone: s, baseGameAppID: n } = e,
          a = (s.milestone_desc?.length ?? 0) > 0;
        return (0, t.jsxs)("div", {
          className: D().SeasonPass,
          children: [
            (0, t.jsxs)("div", {
              className: (0, g.A)(D().Title, Boolean(s.shipped) && D().Shipped),
              children: [
                (0, t.jsxs)("span", {
                  children: [
                    Boolean(s.shipped) && "✓",
                    " ",
                    f.A0.GetTokenWithFallback(s.title ?? []),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: D().DateAndControl,
                  children: (0, t.jsx)(N, { milestone: s }),
                }),
              ],
            }),
            a && (0, t.jsx)(E, { milestone: s, baseGameAppID: n }),
          ],
        });
      }
      function E(e) {
        const { milestone: s, baseGameAppID: n } = e,
          a = f.A0.GetTokenWithFallback(s.milestone_desc ?? []),
          i = s.appid || s.coming_soon_appid;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            i ? (0, t.jsx)(x, { appid: i }) : null,
            (0, t.jsxs)("div", {
              className: D().Description,
              children: [
                (0, t.jsx)(v.n, { text: a }),
                Boolean(s.shipped) &&
                  (0, t.jsx)(B, { milestone: s, baseGameAppID: n }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        const { milestone: s } = e;
        if (s.shipped) return (0, t.jsx)(G, { milestone: s });
        const n = s.dates ?? [],
          a = n[0]?.rtime ?? 0,
          i = n.filter((e, s) => 0 == s || (e.rtime ?? 0) < a);
        return (0, t.jsx)("div", {
          className: D().Upcoming,
          children: (0, f.PP)(
            "#SeasonPass_Release_Date",
            (0, t.jsx)("br", {}),
            [...i].reverse().map((e, s) => {
              const n = (0, c.M)(
                e.coming_soon_display_type,
                e.rtime ?? 0,
                void 0,
                !0,
              );
              return (0, t.jsx)(
                "div",
                {
                  className: s + 1 < i.length ? D().Strike : void 0,
                  children: n,
                },
                "dd" + e.rtime + e.coming_soon_display_type,
              );
            }),
          ),
        });
      }
      function G(e) {
        const { milestone: s } = e,
          n = (0, A.$5)(s.appid),
          { data: a } = (0, I.by)(n),
          i = a?.steam_release_date || s.rtime_complete || 0;
        return (0, t.jsx)("div", {
          className: D().Shipped,
          children: (0, f.PP)(
            "#SeasonPass_Released_Date",
            (0, t.jsx)("br", {}),
            (0, f.TW)(i),
          ),
        });
      }
      const L = {};
      function B(e) {
        const { milestone: s, baseGameAppID: n } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: D().Status,
              children: (0, f.PP)(
                s.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
              ),
            }),
            s.appid && (0, t.jsx)(T, { milestone: s }),
            Boolean(s.appid && s.event_gid) &&
              (0, t.jsx)("span", { className: D().Padding }),
            Boolean(s.event_gid) &&
              (0, t.jsx)(C, { milestone: s, baseGameAppID: n }),
          ],
        });
      }
      function T(e) {
        const { milestone: s } = e,
          [n] = (0, l.t7)(s.appid, L);
        return (0, t.jsx)("a", {
          href: n?.GetStorePageURL() || `${i.TS.STORE_BASE_URL}app/${s.appid}`,
          children: (0, f.we)("#SeasonPass_ShowStore"),
        });
      }
      function C(e) {
        const { milestone: s, baseGameAppID: n } = e,
          [l, c] = (0, o.useState)(!1),
          m = (0, r.RR)(s.event_gid ?? "");
        return m
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("a", {
                  href: `${i.TS.STORE_BASE_URL}news/app/${n}/view/${s.event_gid}`,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), c(!0);
                  },
                  children: (0, f.we)("#SeasonPass_ReadEvent"),
                }),
                Boolean(l) &&
                  (0, t.jsx)(d.N, {
                    appid: n,
                    eventModel: m,
                    announcementGID: m.AnnouncementGID,
                    closeModal: () => c(!1),
                    partnerEventStore: p.O3,
                    bShowOnlyInitialEvent: !0,
                    showAppHeader: !0,
                    trackingLocation: a.Tc.j$,
                  }),
              ],
            })
          : (0, t.jsx)("a", {
              href: `${i.TS.STORE_BASE_URL}news/app/${n}/view/${s.event_gid}`,
              children: (0, f.we)("#SeasonPass_ReadEvent"),
            });
      }
    },
  },
]);
