/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [85139],
  {
    1431: (e) => {
      e.exports = {
        StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
        StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
        StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
      };
    },
    4852: (e) => {
      e.exports = {
        StoreImage: "_1XiTdhCGWl9dUCWd6Eg89o",
        StoreVideo: "_1Nwn2Vf2AjZ4McbxZX9P8V",
      };
    },
    29298: (e) => {
      e.exports = {
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
    51899: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => O });
      var n = t(7850),
        a = t(34214),
        o = t(66418),
        i = t(90626),
        r = t(38390),
        l = t(6379),
        c = t(55263),
        p = t(63369),
        d = t(8107),
        m = t(60014),
        _ = t(55963),
        u = t(1431),
        h = t.n(u);
      const x = { include_assets: !0, include_basic_info: !0 };
      function S(e) {
        const { appid: s } = e,
          [t] = (0, c.t7)(s, x),
          a = (0, m.n9)();
        return t && s
          ? (0, n.jsx)("div", {
              className: h().StoreItemCtn,
              children: (0, n.jsx)("div", {
                className: h().StoreItemRow,
                children: (0, n.jsxs)("a", {
                  href: (0, _.wJ)(t.GetStorePageURL(), a),
                  children: [
                    (0, n.jsx)("img", {
                      src: t.GetAssets().GetSmallCapsuleURL(),
                    }),
                    (0, n.jsxs)("div", {
                      className: h().StoreItemDescription,
                      children: [t.GetShortDescription(), " "],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var g = t(32630),
        f = t(99376),
        j = t(42780),
        v = t(22837),
        R = t(59952),
        w = t(12611),
        P = t(30470);
      function b() {
        const e = new URL(window.location.href),
          s = e.pathname.split("/"),
          t = s?.[2];
        e.searchParams.get("beta");
        return `${P.TS.STORE_ICON_BASE_URL}${t}/`;
      }
      var I = t(61859),
        A = t(26296),
        D = t(4852),
        N = t.n(D),
        T = t(24484),
        G = t(78327),
        E = t(79613);
      function B(e) {
        return new j.OJ(new j.R8(), 0);
      }
      function C(e) {
        const { text: s, languageOverride: t } = e,
          [a] = (0, i.useState)(
            new f.B(
              new Map([
                ...Array.from(R.W4.entries()),
                ["img", { Constructor: L, autocloses: !1 }],
              ]),
              B,
              t || v.Bhc,
            ),
          );
        return (0, n.jsx)(n.Fragment, { children: a.ParseBBCode(s, {}, !0) });
      }
      function L(e) {
        const { showErrorInfo: s } = e.context;
        let t = e?.children?.toString();
        if (
          (null == t || null == t || 0 == t.length) &&
          ((t = e?.args?.[""] || e?.args?.src),
          null == t || null == t || 0 == t.length)
        )
          return "";
        const a = (0, T.Fd)("store_page_asset_url", "application_config"),
          o = (0, T.Fd)("store_page_extra_assets_url", "application_config"),
          i = (0, T.Fd)("store_page_extra_assets_map", "application_config");
        if (a && t.startsWith(w.qR + "/")) {
          const e = t.replace(w.qR + "/", ""),
            s = i[e];
          if (s) {
            const e = [];
            let t = !1;
            for (const n of s) {
              const s = n.urlPart;
              e.push({
                url: o.replace("%s", s),
                extension: n.extension,
                alt_text: n.alt_text ?? null,
              }),
                (t = t || ["mp4", "webm"].includes(n.extension));
            }
            if (t) {
              const s = e.find((e) => "webm" === e.extension)?.url,
                t = e.find((e) => "mp4" === e.extension)?.url,
                a = e.find(
                  (e) =>
                    ".poster.webp" === e.extension ||
                    ".poster.avif" === e.extension,
                )?.url,
                o = e.find(
                  (e) =>
                    e.alt_text?.length > 0 &&
                    ("webm" === e.extension || "webm" === e.extension),
                )?.alt_text,
                i = (0, E.Wr)() || (0, E.Ae)(),
                r = (e) => {
                  const s = e.currentTarget;
                  s.paused ? s.play() : s.pause();
                };
              return (0, n.jsxs)("video", {
                className: N().StoreVideo,
                poster: a,
                "aria-label": o,
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                onClick: r,
                children: [
                  s &&
                    !i &&
                    (0, n.jsx)("source", { src: s, type: "video/webm" }),
                  t &&
                    !G.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: t, type: "video/mp4" }),
                ],
              });
            }
            {
              const s = e[0]?.alt_text,
                t = e[0]?.url;
              return (0, n.jsx)("img", {
                className: N().StoreImage,
                src: t,
                alt: s,
              });
            }
          }
          t = a.replace("%s", e);
        } else t = t.replace(w.qR, b()).replace("http://", "https://");
        return s
          ? (0, n.jsx)(A.i, { className: N().StoreImage, src: t })
          : (0, n.jsx)("img", {
              className: N().StoreImage,
              src: t,
              alt: (0, I.we)("#EventEditor_InsertImage_URL"),
            });
      }
      var k = t(52038),
        y = t(29298),
        U = t.n(y),
        W = t(39777),
        $ = t(35380);
      function O(e) {
        const { season_pass: s } = e;
        return s && s.milestones && 0 != s.milestones.length
          ? (0, n.jsx)(g.Ay, {
              feature: "seasonpassproductpage",
              children: (0, n.jsxs)("div", {
                className:
                  "game_area_description overflow_allowed season_pass_area",
                children: [
                  (0, n.jsx)("h2", {
                    children: (0, I.we)("#SeasonPass_Header"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, I.oW)("#SeasonPass_Incomplete_Desc"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, I.oW)(
                      "#SeasonPass_Incomplete_Desc2",
                      (0, n.jsx)("a", {
                        href: `${o.TS.STORE_BASE_URL}account/notificationsettings`,
                      }),
                    ),
                  }),
                  s.milestones
                    .sort((e, s) =>
                      e.shipped && s.shipped
                        ? e.rtime_complete - s.rtime_complete
                        : e.shipped
                          ? -1
                          : s.shipped
                            ? 1
                            : e.dates[e.dates.length - 1].rtime -
                              s.dates[s.dates.length - 1].rtime,
                    )
                    .map((e) =>
                      (0, n.jsx)(
                        Z,
                        { baseGameAppID: s.appid, milestone: e },
                        "ms_" + e.milestone_id,
                      ),
                    ),
                ],
              }),
            })
          : null;
      }
      function Z(e) {
        const { milestone: s, baseGameAppID: t } = e,
          a = s.milestone_desc?.length > 0;
        return (0, n.jsxs)("div", {
          className: U().SeasonPass,
          children: [
            (0, n.jsxs)("div", {
              className: (0, k.A)(U().Title, Boolean(s.shipped) && U().Shipped),
              children: [
                (0, n.jsxs)("span", {
                  children: [
                    Boolean(s.shipped) && "✓",
                    " ",
                    I.A0.GetTokenWithFallback(s.title),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: U().DateAndControl,
                  children: (0, n.jsx)(X, { milestone: s }),
                }),
              ],
            }),
            a && (0, n.jsx)(F, { milestone: s, baseGameAppID: t }),
          ],
        });
      }
      function F(e) {
        const { milestone: s, baseGameAppID: t } = e,
          a = I.A0.GetTokenWithFallback(s.milestone_desc),
          o = s.appid || s.coming_soon_appid;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            Boolean(o) && (0, n.jsx)(S, { appid: o }),
            (0, n.jsxs)("div", {
              className: U().Description,
              children: [
                (0, n.jsx)(C, { text: a }),
                Boolean(s.shipped) &&
                  (0, n.jsx)(Y, { milestone: s, baseGameAppID: t }),
              ],
            }),
          ],
        });
      }
      function X(e) {
        const { milestone: s } = e;
        if (s.shipped) return (0, n.jsx)(q, { milestone: s });
        const t = s.dates[0].rtime,
          a = s.dates.filter((e, s) => 0 == s || e.rtime < t);
        return (0, n.jsx)("div", {
          className: U().Upcoming,
          children: (0, I.PP)(
            "#SeasonPass_Release_Date",
            (0, n.jsx)("br", {}),
            [...a].reverse().map((e, s) => {
              const t = (0, p.M)(e.coming_soon_display_type, e.rtime, null, !0);
              return (0, n.jsx)(
                "div",
                {
                  className: s + 1 < a.length ? U().Strike : void 0,
                  children: t,
                },
                "dd" + e.rtime + e.coming_soon_display_type,
              );
            }),
          ),
        });
      }
      function q(e) {
        const { milestone: s } = e,
          t = (0, $.$5)(s.appid),
          { data: a } = (0, W.by)(t),
          o = a?.steam_release_date || s.rtime_complete;
        return (0, n.jsx)("div", {
          className: U().Shipped,
          children: (0, I.PP)(
            "#SeasonPass_Released_Date",
            (0, n.jsx)("br", {}),
            (0, I.TW)(o),
          ),
        });
      }
      const V = {};
      function Y(e) {
        const { milestone: s, baseGameAppID: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: U().Status,
              children: (0, I.PP)(
                s.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
              ),
            }),
            s.appid && (0, n.jsx)(H, { milestone: s }),
            Boolean(s.appid && s.event_gid) &&
              (0, n.jsx)("span", { className: U().Padding }),
            Boolean(s.event_gid) &&
              (0, n.jsx)(M, { milestone: s, baseGameAppID: t }),
          ],
        });
      }
      function H(e) {
        const { milestone: s } = e,
          [t] = (0, c.t7)(s.appid, V);
        return (0, n.jsx)("a", {
          href: t?.GetStorePageURL() || `${o.TS.STORE_BASE_URL}app/${s.appid}`,
          children: (0, I.we)("#SeasonPass_ShowStore"),
        });
      }
      function M(e) {
        const { milestone: s, baseGameAppID: t } = e,
          [c, p] = (0, i.useState)(!1),
          m = (0, r.RR)(s.event_gid);
        return m
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("a", {
                  href: `${o.TS.STORE_BASE_URL}news/app/${t}/view/${s.event_gid}`,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), p(!0);
                  },
                  children: (0, I.we)("#SeasonPass_ReadEvent"),
                }),
                Boolean(c) &&
                  (0, n.jsx)(d.N, {
                    appid: t,
                    eventModel: m,
                    announcementGID: m.AnnouncementGID,
                    closeModal: () => p(!1),
                    partnerEventStore: l.O3,
                    bShowOnlyInitialEvent: !0,
                    showAppHeader: !0,
                    trackingLocation: a.Tc.j$,
                  }),
              ],
            })
          : (0, n.jsx)("a", {
              href: `${o.TS.STORE_BASE_URL}news/app/${t}/view/${s.event_gid}`,
              children: (0, I.we)("#SeasonPass_ReadEvent"),
            });
      }
    },
  },
]);
