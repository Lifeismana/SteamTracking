/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [53318],
    {
      97442: (X, k, s) => {
        "use strict";
        s.d(k, { r: () => Q });
        var t = s(7850),
          U = s(24660),
          x = s(19298),
          H = s(17083),
          D = s(36707),
          F = s(2108),
          K = s.n(F);
        function Q(q) {
          const { crumbs: w, className: M, bHideLastArrow: P } = q;
          return !w || w.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: (0, D.A)(F.BreadContainer, M),
                children: [
                  (0, t.jsx)(x.Z, {
                    className: "blockbg",
                    "flow-children": "row",
                    children: w.map((A, Z) => {
                      const V = new Array();
                      return (
                        A.url.startsWith("http")
                          ? V.push(
                              (0, t.jsx)(
                                U.Ii,
                                { href: A.url, children: A.name },
                                "anchor_" + A.name,
                              ),
                            )
                          : V.push(
                              (0, t.jsx)(
                                H.N_,
                                { to: A.url, children: A.name },
                                "link_" + A.name,
                              ),
                            ),
                        (!P || Z < w.length - 1) &&
                          V.push(
                            (0, t.jsx)(
                              "span",
                              { children: "\xA0> " },
                              A.name + "span",
                            ),
                          ),
                        V
                      );
                    }),
                  }),
                  (0, t.jsx)("div", { style: { clear: "left" } }),
                ],
              });
        }
      },
      65647: (X, k, s) => {
        "use strict";
        s.d(k, { K8: () => It, P2: () => Tt, jA: () => qt });
        var t = s(7850),
          U = s(99412),
          x = s(55483),
          H = s(26589),
          D = s(40358),
          F = s(41735),
          K = s.n(F),
          Q = s(75844),
          q = s(65946),
          w = s(90626),
          M = s(3166),
          P = s(14947),
          A = s(34592),
          Z = s(76559),
          V = Object.defineProperty,
          tt = Object.getOwnPropertyDescriptor,
          Y = (c, e, n, i) => {
            for (
              var m = i > 1 ? void 0 : i ? tt(e, n) : e, h = c.length - 1, T;
              h >= 0;
              h--
            )
              (T = c[h]) && (m = (i ? T(e, n, m) : T(m)) || m);
            return i && m && V(e, n, m), m;
          };
        class W {
          constructor(e) {
            (0, P.Gn)(this),
              (this.m_stats = {
                event_gid: "0",
                library_overview_shown: 0,
                library_overview_read: 0,
                app_details_spotlight_shown: 0,
                app_details_spotlight_read: 0,
                app_details_activity_shown: 0,
                app_details_activity_read: 0,
                store_app_page_shown: 0,
                store_app_page_read: 0,
                store_front_page_shown: 0,
                store_front_page_read: 0,
                community_hub_shown: 0,
                community_hub_read: 0,
                news_hub_shown: 0,
                news_hub_read: 0,
                event_scroller_read: 0,
                ...e,
              }),
              (this.m_stats.total_showm =
                this.m_stats.library_overview_shown +
                this.m_stats.app_details_activity_shown +
                this.m_stats.app_details_spotlight_shown +
                this.m_stats.store_app_page_shown +
                this.m_stats.store_front_page_shown +
                this.m_stats.community_hub_shown +
                this.m_stats.news_hub_shown),
              (this.m_stats.total_read =
                this.m_stats.library_overview_read +
                this.m_stats.app_details_activity_read +
                this.m_stats.app_details_spotlight_read +
                this.m_stats.store_app_page_read +
                this.m_stats.store_front_page_read +
                this.m_stats.community_hub_read +
                this.m_stats.news_hub_read +
                this.m_stats.event_scroller_read),
              (this.m_lastUpdateTime = e ? Math.floor(Date.now() / 1e3) : 0);
          }
          reset(e) {
            (this.m_stats.library_overview_shown = e.library_overview_shown),
              (this.m_stats.library_overview_read = e.library_overview_read),
              (this.m_stats.app_details_spotlight_shown =
                e.app_details_spotlight_shown),
              (this.m_stats.app_details_spotlight_read =
                e.app_details_spotlight_read),
              (this.m_stats.app_details_activity_shown =
                e.app_details_activity_shown),
              (this.m_stats.app_details_activity_read =
                e.app_details_activity_read),
              (this.m_stats.store_app_page_shown = e.store_app_page_shown),
              (this.m_stats.store_app_page_read = e.store_app_page_read),
              (this.m_stats.store_front_page_shown = e.store_front_page_shown),
              (this.m_stats.store_front_page_read = e.store_front_page_read),
              (this.m_stats.community_hub_shown = e.community_hub_shown),
              (this.m_stats.community_hub_read = e.community_hub_read),
              (this.m_stats.news_hub_shown = e.news_hub_shown),
              (this.m_stats.news_hub_read = e.news_hub_read),
              (this.m_stats.event_scroller_read = e.event_scroller_read),
              (this.m_stats.total_showm =
                e.library_overview_shown +
                e.app_details_activity_shown +
                e.app_details_spotlight_shown +
                e.store_app_page_shown +
                e.store_front_page_shown +
                e.community_hub_shown +
                e.news_hub_shown),
              (this.m_stats.total_read =
                e.library_overview_read +
                e.app_details_activity_read +
                e.app_details_spotlight_read +
                e.store_app_page_read +
                e.store_front_page_read +
                e.community_hub_read +
                e.news_hub_read +
                e.event_scroller_read),
              (this.m_lastUpdateTime = Date.now() / 1e3);
          }
          m_stats = void 0;
          m_lastUpdateTime = void 0;
        }
        Y([P.sH], W.prototype, "m_stats", 2),
          Y([P.sH], W.prototype, "m_lastUpdateTime", 2);
        const $ = 3600;
        class O {
          m_mapPerEventStats = new Map();
          m_mapSummaryStats = new Map();
          m_bLoadedFromConfig = !1;
          constructor() {
            (0, P.Gn)(this);
          }
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              let e = (0, M.Tc)("trackingdatasummary", "application_config");
              this.ValidateStoreDefault(e) &&
                this.m_mapSummaryStats.set(e.clan_account_id, new W(e));
              let n = (0, M.Tc)("trackingdataevents", "application_config");
              this.ValidateStoreDefaultList(n) &&
                n.forEach((i) => {
                  let m = Z.b.InitFromClanID(i.clan_account_id),
                    h = this.GetKey(m, i.event_gid);
                  this.m_mapPerEventStats.set(h, new W(i));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(e) {
            const n = e;
            return n && typeof n == "object" && n.clan_account_id
              ? typeof n.clan_account_id == "number" && n.clan_account_id > 0
              : !1;
          }
          ValidateStoreDefaultList(e) {
            const n = e;
            return n &&
              Array.isArray(n) &&
              n.length > 0 &&
              typeof n[0] == "object"
              ? typeof n[0].clan_account_id == "number" &&
                  n[0].clan_account_id > 0
              : !1;
          }
          GetStatsFor(e, n) {
            this.LazyInit();
            let i = this.GetKey(e, n);
            return (
              this.m_mapPerEventStats.has(i) ||
                this.m_mapPerEventStats.set(i, new W(null)),
              this.m_mapPerEventStats.get(i)
            );
          }
          GetTotalStats(e) {
            return (
              this.LazyInit(),
              this.m_mapSummaryStats.has(e.GetAccountID()) ||
                this.m_mapSummaryStats.set(e.GetAccountID(), new W(null)),
              this.m_mapSummaryStats.get(e.GetAccountID())
            );
          }
          GetKey(e, n) {
            return e.GetAccountID() + "_" + n;
          }
          async LoadStatsForEvents(e, n, i) {
            this.LazyInit();
            let m = Date.now() / 1e3,
              h = n.filter((p) => {
                let E = this.GetKey(e, p),
                  g = this.m_mapPerEventStats.get(E);
                return !g || g.m_stats == null || g.m_lastUpdateTime < m - $;
              });
            if (!h || h.length == 0) return !0;
            let T = (0, M.xv)() + "actions/ajaxgetpartnereventsreport",
              _ = {
                sessionid: (0, M.KC)(),
                clan_account_id: e.GetAccountID(),
                gidlist: h.join(","),
              };
            try {
              let p = await K().get(T, {
                params: _,
                withCredentials: !0,
                cancelToken: i?.token,
              });
              return (
                (0, P.h5)(() => {
                  this.m_mapSummaryStats.set(
                    e.GetAccountID(),
                    new W(p.data.summary),
                  ),
                    p.data.events_detail.forEach((E) => {
                      let g = this.GetKey(e, E.event_gid);
                      this.m_mapPerEventStats.has(g)
                        ? this.m_mapPerEventStats.get(g).reset(E)
                        : this.m_mapPerEventStats.set(g, new W(E));
                    });
                }),
                !0
              );
            } catch (p) {
              let E = (0, A.H)(p);
              console.error("CPartnerEventReportingStore " + E.strErrorMsg, E);
            }
            return !1;
          }
          BHasEventStats(e, n) {
            let i = Z.b.InitFromClanID(e),
              m = this.GetKey(i, n),
              h = this.m_mapPerEventStats.get(m);
            return !!(h && h.m_stats);
          }
        }
        Y([P.sH], O.prototype, "m_mapPerEventStats", 2),
          Y([P.sH], O.prototype, "m_mapSummaryStats", 2),
          Y([P.XI], O.prototype, "LazyInit", 1);
        const J = new O();
        function it(c, e) {
          const [n, i] = useState(void 0);
          return (
            useEffect(() => {
              c &&
                e &&
                n == null &&
                J.LoadStatsForEvents(c, [e]).then((m) => {
                  i(m ? J.GetStatsFor(c, e).m_stats : null);
                });
            }, [c, e, n]),
            n
          );
        }
        var L = s(25792),
          o = s(60655),
          v = s(40976),
          u = s(82206),
          y = s(75654),
          B = s(56062),
          S = s(90316),
          a = s.n(S),
          f = s(40232),
          d = s(36707),
          r = s(18210);
        function C(c) {
          const { appid: e, creatorHome: n } = c;
          return (0, t.jsx)("div", {
            className: a().AppSummaryCtn,
            children: (0, t.jsxs)("div", {
              className: a().EventBodyPosition,
              children: [e ? (0, t.jsx)(R, { appid: e }) : null, n],
            }),
          });
        }
        function R(c) {
          const { appid: e } = c,
            { data: n } = (0, D.J$)({ appid: e });
          if (!n) return null;
          const i = (0, y.U)(n.type ?? B.uE.HT);
          return (0, t.jsxs)("div", {
            className: a().AppSummaryWidgetTitleCtn,
            children: [
              (0, t.jsx)("span", {
                className: a().Title,
                children: (0, r.we)("#CreatorHome_ThisGame"),
              }),
              (0, t.jsx)("div", {
                className: (0, d.A)(
                  a().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, t.jsx)(f.p, {
                  id: e,
                  type: i,
                  bPreferAssetWithoutOverride: !1,
                }),
              }),
            ],
          });
        }
        var G = s(73259),
          I = s(86866),
          j = s(19730),
          l = s(5065);
        function ot(c) {
          const {
              summary: e,
              bEventIsInModerationQueue: n,
              bIsAllowedInLibrary: i,
              bCompact: m,
              bExpanded: h,
              header: T,
            } = c,
            {
              total_showm: _ = 0,
              total_read: p = 0,
              library_overview_shown: E = 0,
              library_overview_read: g = 0,
              app_details_spotlight_shown: N = 0,
              app_details_spotlight_read: b = 0,
              app_details_activity_shown: z = 0,
              app_details_activity_read: St = 0,
              store_app_page_shown: Et = 0,
              store_app_page_read: dt = 0,
              community_hub_shown: jt = 0,
              community_hub_read: yt = 0,
              news_hub_shown: ft = 0,
              news_hub_read: ee = 0,
            } = e;
          return p + _ == 0
            ? null
            : (0, t.jsxs)("div", {
                className: (0, d.A)(m ? l.EventDetailView : l.DashboardView),
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, d.A)(l.HeaderCtn),
                    children: [
                      T,
                      (0, t.jsxs)("div", {
                        className: l.TotalsCtn,
                        children: [
                          (0, t.jsxs)("div", {
                            className: l.HeaderStat,
                            children: [
                              (0, t.jsx)("span", {
                                className: l.StatDescription,
                                children: (0, r.we)(
                                  "#EventDashBoard_SummaryStats_TotalImpressions",
                                ),
                              }),
                              (0, t.jsx)("span", {
                                className: l.StatFigure,
                                children: (0, j.Dq)(_),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: l.HeaderStat,
                            children: [
                              (0, t.jsx)("span", {
                                className: l.StatDescription,
                                children: (0, r.we)(
                                  "#EventDashBoard_SummaryStats_TotalViews",
                                ),
                              }),
                              (0, t.jsx)("span", {
                                className: l.StatFigure,
                                children: (0, j.Dq)(p),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !!(i && n) &&
                    (0, t.jsxs)("div", {
                      className: l.ModerationWarningCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: l.ModerationWarning,
                          children: (0, r.we)(
                            "#EventDashBoard_ModerationQueueWarning",
                          ),
                        }),
                        (0, t.jsx)("a", {
                          href:
                            M.TS.PARTNER_BASE_URL +
                            "doc/marketing/event_tools/moderation",
                          children: (0, r.we)(
                            "#EventDashBoard_Location_ModerationTitle",
                          ),
                        }),
                      ],
                    }),
                  h &&
                    (0, t.jsxs)("div", {
                      className: (0, d.A)(l.StatsCtn),
                      children: [
                        i &&
                          (0, t.jsxs)("div", {
                            className: (0, d.A)(
                              l.StatsLeftSection,
                              n && l.DisabledStats,
                            ),
                            children: [
                              (0, t.jsxs)("div", {
                                className: l.StatsTitle_ctn,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, r.we)(
                                      "#EventDashBoard_Location_LibraryHome",
                                    ),
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: l.ModerationNote,
                                    children: [
                                      "( ",
                                      (0, r.we)(
                                        "#EventDashBoard_Location_WaitingModeraion",
                                      ),
                                      " )",
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: l.StatsTitle,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, r.we)(
                                      "#EventDashBoard_Summary_LibraryHome_Shown",
                                    ),
                                  }),
                                  (0, t.jsx)("span", {
                                    children: (0, j.Dq)(E),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: l.StatsTitle,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, r.we)(
                                      "#EventDashBoard_Summary_LibraryHome_Read",
                                    ),
                                  }),
                                  (0, t.jsx)("span", {
                                    children: (0, j.Dq)(g),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: l.StatsTitle_ctn,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, r.we)(
                                      "#EventDashBoard_Location_LibraryDetail",
                                    ),
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: l.ModerationNote,
                                    children: [
                                      "( ",
                                      (0, r.we)(
                                        "#EventDashBoard_Location_WaitingModeraion",
                                      ),
                                      " )",
                                    ],
                                  }),
                                ],
                              }),
                              N > 0 &&
                                (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: l.StatsTitle,
                                      children: [
                                        (0, t.jsx)("span", {
                                          children: (0, r.we)(
                                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                                          ),
                                        }),
                                        (0, t.jsx)("span", {
                                          children: (0, j.Dq)(N),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: l.StatsTitle,
                                      children: [
                                        (0, t.jsx)("span", {
                                          children: (0, r.we)(
                                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                                          ),
                                        }),
                                        (0, t.jsx)("span", {
                                          children: (0, j.Dq)(b),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, t.jsxs)("div", {
                                className: l.StatsTitle,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, r.we)(
                                      "#EventDashBoard_Summary_AppDetailActivity_Shown",
                                    ),
                                  }),
                                  (0, t.jsx)("span", {
                                    children: (0, j.Dq)(z),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: l.StatsTitle,
                                children: [
                                  (0, t.jsx)("span", {
                                    children: (0, r.we)(
                                      "#EventDashBoard_Summary_AppDetailActivity_Read",
                                    ),
                                  }),
                                  (0, t.jsx)("span", {
                                    children: (0, j.Dq)(St),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, t.jsxs)("div", {
                          className: l.StatsRightSection,
                          children: [
                            (0, t.jsx)("div", {
                              className: l.StatsTitle_ctn,
                              children: (0, t.jsx)("span", {
                                children: (0, r.we)(
                                  "#EventDashBoard_Location_StoreDetail",
                                ),
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: l.StatsTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  children: (0, r.we)(
                                    "#EventDashBoard_Summary_StoreAppPage_Shown",
                                  ),
                                }),
                                (0, t.jsx)("span", { children: (0, j.Dq)(Et) }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: l.StatsTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  children: (0, r.we)(
                                    "#EventDashBoard_Summary_StoreAppPage_Read",
                                  ),
                                }),
                                (0, t.jsx)("span", { children: (0, j.Dq)(dt) }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: l.StatsTitle_ctn,
                              children: (0, t.jsx)("span", {
                                children: (0, r.we)(
                                  "#EventDashBoard_Location_CommunityDetail",
                                ),
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: l.StatsTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  children: (0, r.we)(
                                    "#EventDashBoard_Summary_Community_Shown",
                                  ),
                                }),
                                (0, t.jsx)("span", { children: (0, j.Dq)(jt) }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: l.StatsTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  children: (0, r.we)(
                                    "#EventDashBoard_Summary_Community_Read",
                                  ),
                                }),
                                (0, t.jsx)("span", { children: (0, j.Dq)(yt) }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: l.StatsTitle_ctn,
                              children: (0, t.jsx)("span", {
                                children: (0, r.we)(
                                  "#EventDashBoard_Location_NewsHubDetail",
                                ),
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: l.StatsTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  children: (0, r.we)(
                                    "#EventDashBoard_Summary_NewsHub_Shown",
                                  ),
                                }),
                                (0, t.jsx)("span", { children: (0, j.Dq)(ft) }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: l.StatsTitle,
                              children: [
                                (0, t.jsx)("span", {
                                  children: (0, r.we)(
                                    "#EventDashBoard_Summary_NewsHub_Read",
                                  ),
                                }),
                                (0, t.jsx)("span", { children: (0, j.Dq)(ee) }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
        }
        const mt = (0, Q.PA)(function (e) {
          const { event: n, bIsOGG: i, summary: m } = e,
            h = (0, I.n)();
          return (0, t.jsxs)(L.tH, {
            children: [
              (0, t.jsxs)("div", {
                className: a().EditorStatsCtn,
                children: [
                  (0, t.jsxs)("div", {
                    className: a().EditorStatsRow,
                    children: [
                      (0, t.jsx)("span", {
                        children: (0, r.we)("#EventEditor_Comments"),
                      }),
                      (0, t.jsx)("span", {
                        children: (0, j.Dq)(n.nCommentCount),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: a().EditorStatsRow,
                    children: [
                      (0, t.jsx)("span", {
                        children: (0, r.we)("#EventEditor_UpVotes"),
                      }),
                      (0, t.jsx)("span", {
                        children: n.nVotesUp ? (0, j.Dq)(n.nVotesUp) : 0,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: a().EditorStatsRow,
                    children: [
                      (0, t.jsx)("span", {
                        children: (0, r.we)("#EventEditor_DownVotes"),
                      }),
                      (0, t.jsx)("span", {
                        children: n.nVotesDown ? (0, j.Dq)(n.nVotesDown) : 0,
                      }),
                    ],
                  }),
                ],
              }),
              m &&
                (0, t.jsxs)("div", {
                  className: a().EditorStatsCtn,
                  children: [
                    (0, r.we)("#EventDashBoard_SummaryStats_Admin_Title"),
                    (0, t.jsx)(ot, {
                      summary: m,
                      bIsAllowedInLibrary: i,
                      bEventIsInModerationQueue: (0, G.Dn)(n, h),
                      bCompact: !0,
                      bExpanded: !0,
                    }),
                  ],
                }),
            ],
          });
        });
        var et = s(29696),
          vt = s(72609),
          ht = s(91376),
          pt = s(96117),
          ut = s(81081),
          st = s(85599),
          lt = s(13484),
          at = s(71742),
          nt = s(53113);
        const Bt = (0, Q.PA)((c) => {
          const {
              event: e,
              lang: n,
              nOverrideStartTime: i,
              nOverrideEndTime: m,
              reminder: h,
              editorInfo: T,
              meetSteamInfo: _,
            } = c,
            p = (0, I.n)(),
            E = e.appid,
            g = e.clanSteamID,
            N = i || e.GetStartTimeAndDateUnixSeconds(),
            { data: b } = (0, D.J$)(E ? { appid: E } : void 0),
            { data: z } = (0, x.TB)(g.GetAccountID());
          return z
            ? E && !b
              ? null
              : (0, t.jsx)("div", {
                  className: a().EventDetailTitleDesc,
                  children: (0, t.jsxs)("div", {
                    className: a().EventDetailsSticky,
                    children: [
                      z.is_ogg
                        ? (0, t.jsx)(Nt, { appid: z.appid })
                        : (0, t.jsx)(Pt, { clanSteamID: g }),
                      (0, t.jsx)(ht.j, {
                        event: e,
                        nOverrideEndTime: m,
                        nOverrideStartTime: i,
                      }),
                      h &&
                        e.type !== U.uYK &&
                        p < N &&
                        (0, t.jsx)("div", {
                          className: a().EventDetailTimeInfo,
                          children: h,
                        }),
                      (0, t.jsxs)("div", {
                        className: a().EventDetailUserType,
                        children: [
                          (0, t.jsx)("div", {
                            className: a().RightSideTitles,
                            children: (0, r.we)(
                              "#EventDisplay_RightColumnTitle_EventType",
                            ),
                          }),
                          (0, t.jsxs)("div", {
                            className: a().EventDetailsType,
                            children: [e.GetCategoryAsString(), " "],
                          }),
                        ],
                      }),
                      T,
                      !!e.jsondata.meet_steam_groups && _,
                    ],
                  }),
                })
            : ((0, at.wT)(
                z,
                "EventDetailsRightColumn - clan info (" +
                  g.GetAccountID() +
                  ") is missing",
              ),
              null);
        });
        function Nt(c) {
          const { appid: e } = c;
          (0, at.wT)(e && e != 0, "Expected Appid In Game Info Section");
          const { data: n } = (0, D.J$)(e ? { appid: e } : void 0);
          return (0, t.jsxs)("div", {
            className: a().EventDetailGameCallToAction,
            children: [
              (0, t.jsx)("div", {
                className: a().RightSideTitles,
                children: G.zK.some((i) => e === i)
                  ? (0, r.we)("#EventDisplay_RightColumnTitle_Blog")
                  : (0, r.we)("#EventDisplay_RightColumnTitle_Game"),
              }),
              (0, t.jsx)(pt.W, {
                imageType: "header",
                capsule: { id: e, type: "game" },
                bHidePriceIfOwned: !0,
                bHideStatusBanners: !0,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, t.jsx)("div", {
                className: (0, d.A)(a().GameActions),
                children: n
                  ? (0, t.jsx)(ut._, {
                      appid: e,
                      bIsFree: !!n.is_free,
                      bIsComingSoon: !!n.is_coming_soon,
                      className: a().ActionButton,
                    })
                  : (0, t.jsx)(st.t, { size: "small", position: "center" }),
              }),
            ],
          });
        }
        function Pt(c) {
          const { clanSteamID: e } = c,
            n = e.GetAccountID(),
            { data: i } = (0, x.TB)(n),
            { data: m } = (0, et.A5)(n);
          if (!i)
            return (
              (0, at.wT)(
                i,
                "EventDetailsRightCreatorInfo - clan info (" +
                  n +
                  ") is missing",
              ),
              null
            );
          const h = m
            ? (0, et.LO)(m, "developer")
            : vt.TS.COMMUNITY_BASE_URL +
              (i.vanity_url
                ? "groups/" + i.vanity_url
                : "gid/" + e.ConvertTo64BitString());
          return (0, t.jsxs)("div", {
            className: a().EventDetailGameCallToAction,
            children: [
              (0, t.jsx)("div", {
                className: a().RightSideTitles,
                children: i.group_name,
              }),
              (0, t.jsx)(lt.m, {
                href: (0, nt.k2)(h),
                children: (0, t.jsx)("div", {
                  className: a().EventDetailsAvatar,
                  style: { backgroundImage: `url(${i.avatar_full_url})` },
                }),
              }),
            ],
          });
        }
        var _t = s(42184),
          rt = s(56492),
          wt = s(43193),
          xt = s(67598),
          Rt = s(36631),
          bt = s(87897),
          Lt = s(95695),
          gt = s.n(Lt),
          Mt = s(16085),
          Gt = s(64641),
          Ht = s.n(Gt),
          Ot = s(53107),
          Ut = s(77356),
          Dt = s(90046),
          At = s(98609),
          Ft = s(16412),
          Kt = s(7638),
          Vt = s(45737),
          Ct = s.n(Vt);
        function Wt(c) {
          const { event: e, lang: n } = c,
            i = (0, q.q3)(() => e.jsondata.meet_steam_groups),
            m = (0, Kt.Ec)(e.clanSteamID.GetAccountID()),
            [h, T, _] = (0, w.useMemo)(() => {
              const p = new Map(),
                E = new Map();
              let g = !1;
              return (
                i.forEach((N) => {
                  N.group_visibility_tokens?.length > 0
                    ? (N.group_visibility_tokens.forEach((b) => {
                        p.has(b)
                          ? p.get(b).push(N.group_id)
                          : p.set(b, [N.group_id]);
                      }),
                      E.set(N.group_id, N.localized_session_title[U.Bhc]))
                    : (g = !0);
                }),
                [p, E, g]
              );
            }, [i]);
          return h.size == 0 || !m.can_edit
            ? null
            : (0, t.jsxs)("div", {
                className: (0, d.A)(
                  Ct().DefaultSectionCtn,
                  Ct().ValveOnlyBackground,
                ),
                children: [
                  (0, t.jsx)(Ft.JU, { children: "(VO) Meet Steam URLs" }),
                  Array.from(h.keys()).map((p) => {
                    const E = h.get(p);
                    return (0, t.jsx)(
                      "div",
                      {
                        children: (0, t.jsxs)("a", {
                          href: `${At.TS.STORE_BASE_URL}meetsteam/${e.GID}/${p}`,
                          target: "_blank",
                          children: [
                            "Shows Sessions: ",
                            E.map((g) =>
                              (0, t.jsxs)(
                                "span",
                                { children: [T.get(g), ","] },
                                "name" + p + "_" + g,
                              ),
                            ),
                          ],
                        }),
                      },
                      `tokenurl_${p}`,
                    );
                  }),
                  !!_ &&
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("a", {
                        href: `${At.TS.STORE_BASE_URL}meetsteam/${e.GID}`,
                        target: "_blank",
                        children: "Show all public sessions",
                      }),
                    }),
                ],
              });
        }
        var zt = s(97442),
          Jt = s(24660),
          Xt = s(60480),
          Qt = s(19298),
          Yt = s(20169),
          Zt = s(68266);
        const $t = (0, Q.PA)((c) => {
            const {
                event: e,
                lang: n,
                banner: i,
                titleBar: m,
                body: h,
                postbody: T,
                footer: _,
              } = c,
              p = (0, Zt.m0)(e, "background", n),
              { data: E } = (0, D.j4)(e.appid ? { appid: e.appid } : void 0),
              { data: g } = (0, x.TB)(e.clanSteamID.GetAccountID()),
              N = e.BIsImageSafeForAllAges("background", n, {
                bAppHasAgeSafeScreenshots:
                  (E?.all_ages_screenshots?.length ?? 0) > 0,
                clanInfo: g ?? void 0,
              }),
              b = "lang_" + (0, U.wwZ)(n),
              z = !!p && e.BImageNeedScreenshotFallback("background", n);
            return (0, t.jsxs)(Qt.Z, {
              scrollIntoViewType: Yt.Yo.NoTransformSparseContent,
              className: (0, d.A)(
                a().EventDetailsPageContainer,
                b,
                gt().PartnerEventFont,
                N
                  ? a().DetailArtworkAgeAppropriate
                  : a().DetailArtworkAgeNotAppropriate,
                !p && a().NoTitleArtwork,
                z && a().ScreenshotInsteadOfCover,
              ),
              children: [
                i,
                m,
                (0, t.jsx)(It, { strImageURL: p }),
                (0, t.jsx)(Tt, { strImageURL: p, body: h, postbody: T }),
                !!_ && (0, t.jsx)(L.tH, { children: _ }),
              ],
            });
          }),
          It = (c) => {
            const { strImageURL: e } = c;
            return (0, t.jsxs)("div", {
              className: a().EventCoverImageCtn,
              children: [
                (0, t.jsx)("div", {
                  className: a().EventCoverImageBlr,
                  children:
                    e &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: a().EventCoverImageFuzz,
                          style: {
                            backgroundColor: "rgb(37, 41, 46)",
                            backgroundImage: `url(${e})`,
                          },
                        }),
                        (0, t.jsx)("div", {
                          className: a().EventCoverImage,
                          style: {
                            backgroundColor: "rgb(37, 41, 46)",
                            backgroundImage: `url(${e})`,
                          },
                        }),
                      ],
                    }),
                }),
                e && (0, t.jsx)("div", { className: a().CoverImageGradient }),
              ],
            });
          },
          Tt = (c) => {
            const { body: e, postbody: n, strImageURL: i } = c;
            return (0, t.jsxs)("div", {
              className: a().EventBodyCtn,
              children: [
                (0, t.jsx)("div", { className: a().EventBackgroundBlurCtn }),
                (0, t.jsxs)("div", {
                  className: a().EventBodyPosition,
                  children: [
                    (0, t.jsxs)("div", {
                      className: a().EventBody,
                      children: [
                        !!i &&
                          (0, t.jsx)("div", {
                            className: a().EventBackgroundBlur,
                            style: { backgroundImage: `url(${i})` },
                          }),
                        (0, t.jsx)(L.tH, { children: e }),
                      ],
                    }),
                    !!n && (0, t.jsx)(L.tH, { children: n }),
                  ],
                }),
              ],
            });
          },
          kt = w.lazy(() =>
            Promise.all([
              s.e(36597),
              s.e(56589),
              s.e(85599),
              s.e(33512),
              s.e(18307),
              s.e(79611),
              s.e(94781),
              s.e(80702),
              s.e(48355),
              s.e(60480),
              s.e(97169),
              s.e(63089),
              s.e(1703),
              s.e(33884),
              s.e(13524),
              s.e(94932),
              s.e(73810),
              s.e(79139),
              s.e(34004),
              s.e(10177),
              s.e(68396),
            ]).then(s.bind(s, 2422)),
          ),
          qt = (0, Q.PA)((c) => {
            const {
                event: e,
                lang: n,
                partnerEventStore: i,
                emoticonStore: m,
                nOverrideStartTime: h,
                nOverrideEndTime: T,
                adminPanel: _,
                otherEventRow: p,
                titleBar: E,
              } = c,
              g = e.appid,
              N = e.clanSteamID.GetAccountID(),
              b = (0, Rt.MU)(),
              z = (0, I.n)(),
              { data: St, isPending: Et } = (0, D.J$)(
                g ? { appid: g } : void 0,
              ),
              { data: dt } = (0, x.TB)(N);
            if (
              (w.useEffect(() => {
                window.scrollTo(0, 0);
              }, [g, N]),
              !b && e.GetEventType() == U.ajI)
            )
              return (0, t.jsx)(rt.OG, {
                eventModel: e,
                route: rt.PH.k_eStoreSalePage,
                bPopup: !1,
              });
            const jt = (0, rt.Bw)(e, rt.PH.k_eStoreNewsHub, "allowRelative"),
              yt = (0, rt.Bw)(e, rt.PH.k_eStoreUsersNewsHub, "allowRelative");
            if (!e.bLoaded || !dt || (g && Et))
              return (0, t.jsx)("div", {
                className: Ht().FlexCenter,
                style: { height: "400px" },
                children: (0, t.jsx)(st.t, {
                  size: "medium",
                  string: (0, r.we)("#Loading"),
                }),
              });
            let ft = e.GetDescriptionWithFallback(n);
            return (0, t.jsx)($t, {
              event: e,
              lang: n,
              titleBar: E,
              banner: (0, t.jsx)(_t.v, { appId: e.appid, clanId: N }),
              body: (0, t.jsxs)(L.tH, {
                children: [
                  (0, t.jsxs)("div", {
                    className: a().EventDetailTitleContainer,
                    children: [
                      (0, t.jsx)(zt.r, {
                        crumbs: [
                          {
                            name: (0, r.we)("#BreadCrumbs_AllEvents"),
                            url: yt,
                          },
                          {
                            name: (0, r.we)(
                              "#BreadCrumbs_GameEvents",
                              St?.name || dt.group_name,
                            ),
                            url: jt,
                          },
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: a().EventDetailTitle,
                        children: e.GetNameWithFallback(n),
                      }),
                      e.BHasSubTitle(n) &&
                        (0, t.jsx)("div", {
                          className: a().EventDetailsSubTitle,
                          children: e.GetSubTitle(n),
                        }),
                    ],
                  }),
                  !!e.BEventCanShowBroadcastWidget(b, z) &&
                    (0, t.jsx)("div", {
                      className: a().EventBroadcastCtn,
                      children: (0, t.jsx)(w.Suspense, {
                        fallback: null,
                        children: (0, t.jsx)(kt, {
                          event: e,
                          bIsPreview: b,
                          accountIDs: b
                            ? e.jsondata.broadcast_whitelist
                            : void 0,
                        }),
                      }),
                    }),
                  (0, t.jsxs)("div", {
                    className: (0, d.A)(a().EventColumns, "EventDetail"),
                    children: [
                      (0, t.jsxs)("div", {
                        className: a().EventDetailsDescription,
                        children: [
                          (0, t.jsxs)(L.tH, {
                            children: [
                              e.BHasTag("steam_award_nomination_request") &&
                                (0, t.jsx)(
                                  xt.EventDisplaySteamAwardNomination,
                                  { event: e, lang: n, previewMode: b },
                                ),
                              e.BHasTag("steam_award_vote_request") &&
                                (0, t.jsx)(xt.WinterSaleSteamAwardVoteWrapper, {
                                  appID: e.appid,
                                  bIsEventActionEnabled:
                                    e.BIsEventActionEnabled(z),
                                  voteCategories:
                                    e.GetSteamAwardNomineeCategories(),
                                }),
                            ],
                          }),
                          (0, t.jsx)(L.tH, {
                            children: (0, t.jsxs)("div", {
                              className: (0, d.A)(
                                "EventDetailsBody",
                                a().EventDetailsBody,
                              ),
                              children: [
                                (0, t.jsx)(u.fh, {
                                  text: ft || "",
                                  partnerEventStore: i,
                                  showErrorInfo: b,
                                  event: e,
                                  languageOverride: n,
                                }),
                                !!(
                                  e.jsondata.bSaleEnabled &&
                                  e.jsondata.sale_vanity_id
                                ) &&
                                  (0, t.jsxs)("div", {
                                    className: (0, d.A)(a().ReadMoreCnt),
                                    children: [
                                      (0, t.jsx)(Mt.m, { gidEvent: e.GID }),
                                      (0, t.jsx)(Jt.Ii, {
                                        className: (0, d.A)(
                                          gt().Button,
                                          "LinkButton",
                                        ),
                                        href: (0, nt.k2)((0, Xt.n4)(e)),
                                        children: (0, r.we)(
                                          "#Event_Button_VisitSalePage",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!e.jsondata.associated_appid &&
                                  (0, t.jsx)(Ut.e, {
                                    id: e.jsondata.associated_appid,
                                    inputType: "game",
                                    bApplyUserContentPref: !1,
                                  }),
                              ],
                            }),
                          }),
                          (0, t.jsx)(L.tH, {
                            children: (0, t.jsx)(bt._, { event: e }),
                          }),
                          !!e.jsondata.read_more_link &&
                            (0, t.jsx)("div", {
                              className: (0, d.A)(a().ReadMoreCnt),
                              children: (0, t.jsx)(Ot.uU, {
                                className: (0, d.A)(gt().Button),
                                href: e.jsondata.read_more_link,
                                children: (0, r.we)(
                                  "#EventEmail_Button_ClickForMoreDetails",
                                ),
                              }),
                            }),
                          (0, t.jsx)("span", { className: gt().Clear }),
                          (0, t.jsxs)(L.tH, {
                            children: [
                              !!e.appid &&
                                (0, t.jsx)(Dt.lS, { appid: e.appid }),
                              !!e.jsondata.sale_social_media_items &&
                                (0, t.jsx)(Dt.lz, {
                                  gidClanEvent: e.GID,
                                  rgSocial: e.jsondata.sale_social_media_items,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(L.tH, {
                        children: (0, t.jsx)(Bt, {
                          event: e,
                          lang: n,
                          nOverrideStartTime: h,
                          nOverrideEndTime: T,
                          reminder: (0, t.jsx)(wt.j, {
                            eventModel: e,
                            lang: n,
                          }),
                          editorInfo: (0, t.jsx)(te, {
                            event: e,
                            bIsOGG: dt.is_ogg,
                          }),
                          meetSteamInfo: (0, t.jsx)(Wt, { event: e, lang: n }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(v.F, {
                    eventModel: e,
                    emoticonStore: m,
                    partnerEventStore: i,
                  }),
                ],
              }),
              postbody: (0, t.jsxs)(L.tH, { children: [_, p] }),
              footer: (0, t.jsx)(C, {
                appid: e.appid,
                creatorHome: (0, t.jsx)(o.LG, {
                  appid: e.appid,
                  bSmallFormat: !0,
                }),
              }),
            });
          });
        function te(c) {
          const { event: e, bIsOGG: n } = c,
            i = (0, I.n)(),
            { data: m } = (0, H.h)(e.clanSteamID.GetAccountID()),
            h = !!m?.can_edit,
            T = e.clanSteamID,
            _ = e.GID,
            p = h && e.BIsPartnerEvent() && e.BIsVisibleEvent(i);
          w.useEffect(() => {
            if (!p) return;
            const g = K().CancelToken.source();
            return (
              J.LoadStatsForEvents(T, [_], g),
              () => g.cancel("EventDisplayEditorInfo cancelled")
            );
          }, [p, T, _]);
          const E = (0, q.q3)(() => p && J.GetStatsFor(T, _));
          return h
            ? (0, t.jsx)(mt, {
                event: e,
                bIsOGG: n,
                summary: E ? E.m_stats : void 0,
              })
            : null;
        }
      },
      54071: (X, k, s) => {
        "use strict";
        s.d(k, { P: () => y });
        var t = s(7850),
          U = s(41735),
          x = s.n(U),
          H = s(14947),
          D = s(3166),
          F = s(34592),
          K = s(72604),
          Q = s(32093),
          q = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          M = (S, a, f, d) => {
            for (
              var r = d > 1 ? void 0 : d ? w(a, f) : a, C = S.length - 1, R;
              C >= 0;
              C--
            )
              (R = S[C]) && (r = (d ? R(a, f, r) : R(r)) || r);
            return d && r && q(a, f, r), r;
          };
        const P = class ct {
          m_objApprovalPriviledge = null;
          m_LoadingPriviledgePromise = null;
          BHasSteamChinaAppApprovalPriviledge() {
            return this.m_objApprovalPriviledge?.bHasAccess;
          }
          async HintLoadAppApprovalPriviledge() {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise =
                    this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          }
          async InternalLoadAppApprovalPriviledge() {
            const a =
              D.TS.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const f = await x().get(a, { withCredentials: !0 });
              if (f?.data?.success == K.R)
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: f.data.bHasAccess,
                  }),
                  this.m_objApprovalPriviledge
                );
            } catch (f) {
              const d = (0, F.H)(f);
              console.error(
                "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                  d.strErrorMsg,
                d,
              );
            }
            return { bHasAccess: !1 };
          }
          static s_Singleton;
          static Get() {
            return (
              ct.s_Singleton || (ct.s_Singleton = new ct()), ct.s_Singleton
            );
          }
          constructor() {
            (0, H.Gn)(this);
            let a = (0, D.Tc)("sc_app_privildge", "application_config");
            this.ValidateStoreDefault(a)
              ? ((this.m_objApprovalPriviledge = a),
                (this.m_LoadingPriviledgePromise = null))
              : (!D.iA.logged_in || D.TS.EREALM !== Q.TU.k_ESteamRealmChina) &&
                (this.m_objApprovalPriviledge = { bHasAccess: !1 });
          }
          ValidateStoreDefault(a) {
            const f = a;
            return (
              f && typeof f == "object" && typeof f.bHasAccess == "boolean"
            );
          }
        };
        M([H.sH], P.prototype, "m_objApprovalPriviledge", 2);
        let A = P;
        var Z = s(75844),
          V = s(90626),
          tt = s(76559),
          Y = s(7638),
          W = s(24808),
          $ = s(90316),
          O = s(95695),
          J = s(96538),
          it = s(88003),
          L = s(85599),
          o = s(36707),
          v = s(82734),
          u = s(18210);
        const y = (0, Z.PA)((S) => {
            const [a, f] = V.useState(null),
              { eventModel: d } = S;
            let r = d.clanSteamID.GetAccountID();
            V.useEffect(() => {
              const R = x().CancelToken.source();
              return (
                (async () => {
                  const I = tt.b.InitFromClanID(r),
                    j = await Y.KN.Get().LoadSingleAppEventPermissions(I),
                    l = await A.Get().HintLoadAppApprovalPriviledge();
                  R.token.reason ||
                    f(D.iA.is_support || j.can_edit || l.bHasAccess);
                })(),
                () => R.cancel("SteamChinaAdminPanel is unmounting")
              );
            }, [r]);
            const C = tt.b.InitFromClanID(r);
            return D.iA.is_support ||
              Y.KN.Get().GetPartnerEventPermissions(C).can_edit
              ? (0, t.jsx)(W.g, {
                  eventModel: d,
                  partnerEventStore: S.partnerEventStore,
                  addtionalAdminButtons: a
                    ? [(0, t.jsx)(B, { eventModel: d }, "removesteamchina")]
                    : void 0,
                })
              : A.Get().BHasSteamChinaAppApprovalPriviledge()
                ? (0, t.jsxs)("div", {
                    className: $.DisplayAdminPanel,
                    children: [
                      (0, t.jsx)("span", {
                        className: $.DisplayAdminPanel_Title,
                        children: (0, u.we)("#EventDisplay_Admin_Title"),
                      }),
                      (0, t.jsx)(B, { eventModel: d }, "removesteamchina"),
                    ],
                  })
                : null;
          }),
          B = (S) => {
            const { eventModel: a } = S,
              f = async () => {
                let r = new URLSearchParams();
                r.append("sessionid", (0, D.KC)()),
                  r.append("clan_accountid", "" + a.clanSteamID.GetAccountID()),
                  r.append("gid_clan_event", "" + a.GID);
                let C = !1,
                  R = 0;
                try {
                  const G = `${D.TS.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                    I = await x().post(G, r, { withCredentials: !0 });
                  (C = I?.data?.success == K.R || I?.data?.success == K.Ze),
                    I?.data?.success == K.Ze &&
                      console.warn(
                        `RemoveEventFromSteamChinaButton: we receive duplicate request ${a.clanSteamID.GetAccountID()} : ${a.GID}; event is still removed from SC`,
                      ),
                    (R = I?.data?.success);
                } catch (G) {
                  const I = (0, F.H)(G);
                  (R = I.errorCode),
                    console.error(
                      "RemoveEventFromSteamChinaButton: error " + I.strErrorMsg,
                      I,
                    );
                }
                S.closeModal && S.closeModal(),
                  (0, it.pg)(
                    C
                      ? (0, t.jsx)(J.o0, {
                          bAlertDialog: !0,
                          children: (0, u.we)("#EventDisplay_Share_Success"),
                        })
                      : (0, t.jsx)(J.KG, {
                          children:
                            (0, u.we)("#EventDisplay_Share_Failure") + " " + R,
                        }),
                    window,
                  );
              },
              d = (r) => {
                let C = !1;
                (0, it.pg)(
                  (0, t.jsx)(J.o0, {
                    strTitle: (0, u.we)("#EventAdmin_Moderation_HideEventInSC"),
                    strDescription: (0, u.we)(
                      "#EventAdmin_Moderation_HideEventInSC_Desc",
                    ),
                    bDestructiveWarning: !0,
                    closeModal: S.closeModal,
                    onOK: () => {
                      (C = !0), f();
                    },
                    children:
                      C &&
                      (0, t.jsx)(L.t, { size: "medium", position: "center" }),
                  }),
                  (0, v.uX)(r),
                );
              };
            return (0, t.jsx)("div", {
              className: (0, o.A)(
                O.Button,
                $.AdminButton,
                O.ValveOnlyBackground,
              ),
              onClick: d,
              children: (0, u.we)("#EventAdmin_Moderation_HideEventInSC"),
            });
          };
      },
      2108: (X) => {
        X.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
      },
      45737: (X) => {
        X.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      5065: (X) => {
        X.exports = {
          DashboardView: "_1QwMyGKe9F8g1QnNoMz1JP",
          HeaderCtn: "_3KXER7qT57ii-dLNJO926C",
          TotalsCtn: "FQKvUJASJ1JVJ28HSbIt-",
          EventDetailView: "_2xYo3SIDAveAIlOqU6Tolu",
          HeaderStat: "_3VEmudDnkNmWv6uoQEicRy",
          StatFigure: "_30CaMtSkoYlQf82iQSskB6",
          StatsTitle_ctn: "_1QGGF04ktVe1bIIhdEtXaD",
          StatsTitle: "_3YLaBiVHp_mPV3f8YD9MrK",
          StatsCtnTitle: "_1LlRFhVuQF26o2UG7Vg5s3",
          StatTitle: "_1SPyq_BoQrA60DbjY_Eoke",
          VisibilityNote: "_1G-k1HX2M60Sx-vP4SEe5k",
          StatsActionRow: "_23Ra5sX6-aVU2ayKSkIzE5",
          StatsCtn: "hWCs41T0tFwuGLTHxvthv",
          StatsLeftSection: "_3L-uhfyc1hVkz4mrHwVm9x",
          StatsRightSection: "_1yibDM6eeZtYQXEdjO_Scg",
          ModerationWarningCtn: "_3Jwi3DKhGEzxba2BP4X8wo",
          ModerationWarning: "_1aIU0L2u2GWHUvc2oV1zyd",
          ModerationNote: "_11Z9Iz4InEbE8AVPdJ6iFY",
          DisabledStats: "_2Zp-jzTV09Qjj3uTxcFLN3",
        };
      },
      17083: (X, k, s) => {
        "use strict";
        s.d(k, { N_: () => tt, k2: () => it });
        var t = s(92757),
          U = s(42891),
          x = s(90626),
          H = s(29248),
          D = s(58584),
          F = s(81115),
          K = s(68841),
          Q = (function (o) {
            (0, U.A)(v, o);
            function v() {
              for (
                var y, B = arguments.length, S = new Array(B), a = 0;
                a < B;
                a++
              )
                S[a] = arguments[a];
              return (
                (y = o.call.apply(o, [this].concat(S)) || this),
                (y.history = (0, H.zR)(y.props)),
                y
              );
            }
            var u = v.prototype;
            return (
              (u.render = function () {
                return x.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              v
            );
          })(x.Component),
          q = (function (o) {
            (0, U.A)(v, o);
            function v() {
              for (
                var y, B = arguments.length, S = new Array(B), a = 0;
                a < B;
                a++
              )
                S[a] = arguments[a];
              return (
                (y = o.call.apply(o, [this].concat(S)) || this),
                (y.history = (0, H.TM)(y.props)),
                y
              );
            }
            var u = v.prototype;
            return (
              (u.render = function () {
                return x.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              v
            );
          })(x.Component),
          w = function (v, u) {
            return typeof v == "function" ? v(u) : v;
          },
          M = function (v, u) {
            return typeof v == "string" ? (0, H.yJ)(v, null, null, u) : v;
          },
          P = function (v) {
            return v;
          },
          A = x.forwardRef;
        typeof A > "u" && (A = P);
        function Z(o) {
          return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
        }
        var V = A(function (o, v) {
            var u = o.innerRef,
              y = o.navigate,
              B = o.onClick,
              S = (0, F.A)(o, ["innerRef", "navigate", "onClick"]),
              a = S.target,
              f = (0, D.A)({}, S, {
                onClick: function (r) {
                  try {
                    B && B(r);
                  } catch (C) {
                    throw (r.preventDefault(), C);
                  }
                  !r.defaultPrevented &&
                    r.button === 0 &&
                    (!a || a === "_self") &&
                    !Z(r) &&
                    (r.preventDefault(), y());
                },
              });
            return (
              P !== A ? (f.ref = v || u) : (f.ref = u), x.createElement("a", f)
            );
          }),
          tt = A(function (o, v) {
            var u = o.component,
              y = u === void 0 ? V : u,
              B = o.replace,
              S = o.to,
              a = o.innerRef,
              f = (0, F.A)(o, ["component", "replace", "to", "innerRef"]);
            return x.createElement(t.XZ.Consumer, null, function (d) {
              d || (0, K.A)(!1);
              var r = d.history,
                C = M(w(S, d.location), d.location),
                R = C ? r.createHref(C) : "",
                G = (0, D.A)({}, f, {
                  href: R,
                  navigate: function () {
                    var j = w(S, d.location),
                      l = (0, H.AO)(d.location) === (0, H.AO)(M(j)),
                      ot = B || l ? r.replace : r.push;
                    ot(j);
                  },
                });
              return (
                P !== A ? (G.ref = v || a) : (G.innerRef = a),
                x.createElement(y, G)
              );
            });
          });
        if (0) var Y, W;
        var $ = function (v) {
            return v;
          },
          O = x.forwardRef;
        typeof O > "u" && (O = $);
        function J() {
          for (var o = arguments.length, v = new Array(o), u = 0; u < o; u++)
            v[u] = arguments[u];
          return v
            .filter(function (y) {
              return y;
            })
            .join(" ");
        }
        var it = O(function (o, v) {
          var u = o["aria-current"],
            y = u === void 0 ? "page" : u,
            B = o.activeClassName,
            S = B === void 0 ? "active" : B,
            a = o.activeStyle,
            f = o.className,
            d = o.exact,
            r = o.isActive,
            C = o.location,
            R = o.sensitive,
            G = o.strict,
            I = o.style,
            j = o.to,
            l = o.innerRef,
            ot = (0, F.A)(o, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return x.createElement(t.XZ.Consumer, null, function (mt) {
            mt || (0, K.A)(!1);
            var et = C || mt.location,
              vt = M(w(j, et), et),
              ht = vt.pathname,
              pt = ht && ht.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              ut = pt
                ? (0, t.B6)(et.pathname, {
                    path: pt,
                    exact: d,
                    sensitive: R,
                    strict: G,
                  })
                : null,
              st = !!(r ? r(ut, et) : ut),
              lt = typeof f == "function" ? f(st) : f,
              at = typeof I == "function" ? I(st) : I;
            st && ((lt = J(lt, S)), (at = (0, D.A)({}, at, a)));
            var nt = (0, D.A)(
              {
                "aria-current": (st && y) || null,
                className: lt,
                style: at,
                to: vt,
              },
              ot,
            );
            return (
              $ !== O ? (nt.ref = v || l) : (nt.innerRef = l),
              x.createElement(tt, nt)
            );
          });
        });
        if (0) var L;
      },
    },
  ]);
})();
