/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [4268],
    {
      11161: (T, N, e) => {
        "use strict";
        e.r(N), e.d(N, { default: () => wt });
        var n = e(7850),
          c = e(90626),
          A = e(98112),
          C = e(58732),
          X = e(9608);
        const Y = (a) =>
          (0, c.createElement)(X.Io, {
            ...a,
            key: a.match.params.oldAnnouncementGID,
            bClearDirty: !0,
            bPreview: !1,
            bPreventRedirect: !0,
          });
        var w = e(92757),
          K = e(13018),
          $ = e(85528),
          q = e(7638),
          P = e(77495),
          _ = e(35395),
          jt = e(64641),
          tt = e(90783),
          x = e(3166),
          nt = e(75844),
          O = e(54963),
          H = e(19188),
          et = e(85599),
          W = e(813),
          y = e(18210),
          ot = e(14947),
          at = Object.defineProperty,
          st = Object.getOwnPropertyDescriptor,
          k = (a, o, i, t) => {
            for (
              var s = t > 1 ? void 0 : t ? st(o, i) : o, r = a.length - 1, l;
              r >= 0;
              r--
            )
              (l = a[r]) && (s = (t ? l(o, i, s) : l(s)) || s);
            return t && s && at(o, i, s), s;
          };
        let j = class extends c.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                bShowModal: !1,
                bLoadedLandingState: this.props.bPreventDismiss,
              });
          }
          componentDidMount() {
            this.props.bPreventDismiss
              ? this.LoadAppAndFirstEvent()
              : (window.fnPartnerEvent_ShowInfiniteScroll = (a, o) => {
                  this.setState({
                    bShowModal: !0,
                    appid: a,
                    announcementGID: o,
                  });
                });
          }
          async LoadAppAndFirstEvent() {
            var a;
            const o = (0, x.Tc)(
              "eventinfinitescrolllanding",
              "application_config",
            );
            let i;
            o && typeof o == "string" && (i = o);
            const t = window.location.href.startsWith(
                x.TS.COMMUNITY_BASE_URL + "groups",
              ),
              s = t
                ? await W.ac.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str,
                  )
                : await W.ac.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str,
                  );
            if ((console.log("output: ", (0, ot.HO)(s), t), s))
              if (s.partner_events_enabled) {
                const r = await P.O3.LoadAdjacentPartnerEventsByAnnouncement(
                  i,
                  s.clanSteamID,
                  s.appid,
                  3,
                  3,
                );
                this.setState({
                  bLoadedLandingState: !1,
                  bShowModal: !0,
                  appid: s.appid,
                  clanSteamID: s.clanSteamID,
                  announcementGID:
                    (a = r == null ? void 0 : r[0]) == null
                      ? void 0
                      : a.AnnouncementGID,
                });
              } else this.setState({ bLoadedLandingState: !1 });
            else
              console.error(
                "EventInfiniteScrollLanding: failed to load clan info for " +
                  this.props.match.params.appid_or_vanity_str,
              ),
                this.setState({ bLoadedLandingState: !1 });
          }
          HideModal() {
            this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
          }
          render() {
            const { bPreventDismiss: a } = this.props;
            return this.state.bShowModal
              ? (0, n.jsx)(H.N, {
                  appid: this.state.appid,
                  announcementGID: this.state.announcementGID,
                  clanSteamID: this.state.clanSteamID,
                  closeModal: this.HideModal,
                  partnerEventStore: P.O3,
                  trackingLocation: this.props.trackingLocation,
                  showAppHeader: !0,
                  bPrimaryPageFeature: a,
                })
              : this.state.bLoadedLandingState
                ? (0, n.jsx)(et.t, { string: (0, y.we)("#Loading") })
                : (0, n.jsx)("div", {});
          }
        };
        k([O.oI], j.prototype, "HideModal", 1), (j = k([nt.PA], j));
        var it = e(72609),
          rt = e(75372),
          Z = e(71157),
          V = e(90537),
          U = e(24660),
          z = e(19298),
          lt = e(72976),
          J = e(95174),
          G = e(39905),
          m = e(12037),
          dt = e(36118);
        function ct(a) {
          return (0, n.jsxs)("div", {
            className: m.LatestUpdateButtonCtn,
            children: [
              (0, n.jsx)("div", {
                className: m.LatestUpdateIcon,
                children: (0, n.jsx)(dt.UTF, { role: "presentation" }),
              }),
              (0, n.jsx)(U.ml, {
                className: m.LatestUpdateButton,
                onClick: a.onClick,
                children: G.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, y._l)(a.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function vt(a) {
          const { nUpdateTime: o, announcementGID: i, onClick: t } = a,
            s = i ? P.O3.GetClanEventFromAnnouncementGID(i) : null,
            r = J.u;
          return (0, n.jsxs)("div", {
            className: m.Container,
            children: [
              (0, n.jsxs)("h2", {
                children: [
                  (0, y.we)("#EventBrowse_LastUpdateDate", (0, y._l)(o)),
                  (0, n.jsx)(U.ml, {
                    className: m.SectionButton,
                    onClick: (l) => {
                      t == null || t(), l.stopPropagation(), l.preventDefault();
                    },
                    children: (0, y.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!s &&
                (0, n.jsx)(z.Z, {
                  className: m.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: lt.iU.PREFERRED_CHILD,
                  children: (0, n.jsx)(r, {
                    event: s,
                    onClick: (l) => {
                      t == null || t(), l.stopPropagation(), l.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var mt = e(54130),
          b = e(56492),
          ut = e(33902),
          pt = e(71568);
        const Q = 500;
        function ht(a) {
          const {
              strClassName: o,
              rgEvents: i,
              fnEventShowModal: t,
              elPostRowElement: s,
              bViewAllShowInfiniteScroll: r,
              nSummaryMaxLength: l,
            } = a,
            h = (0, ut.d)(),
            u = (0, pt.R7)(),
            L = (0, x.Qn)();
          let f = 2,
            v = Q + 1;
          return (
            u.ownerWindow.window
              ? (v = u.ownerWindow.window.innerWidth)
              : h.viewportWidth && (v = h.viewportWidth.value),
            (f = v <= Q ? 1 : 2),
            i && i.length == 0 && !s
              ? null
              : (0, n.jsxs)(z.Z, {
                  className: o,
                  "flow-children": "row",
                  children: [
                    !!i &&
                      i.length > 0 &&
                      (0, n.jsx)("div", {
                        className: m.Container,
                        children: (0, n.jsxs)(mt.q, {
                          children: [
                            (0, n.jsxs)("h2", {
                              children: [
                                G.Z.Localize("#EventBrowse_RecentEvents"),
                                !L &&
                                  !!i &&
                                  (0, n.jsx)(n.Fragment, {
                                    children:
                                      r && t
                                        ? (0, n.jsx)(U.ml, {
                                            className: m.SectionButton,
                                            onClick: () => t(i[0]),
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, n.jsx)(b.tj, {
                                            eventModel: i[0],
                                            route: b.PH.k_eViewWebSiteHub,
                                            className: m.SectionButton,
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: m.EventsSummariesCtn,
                              children: i.slice(0, f).map((E) => {
                                const p =
                                  t && !(0, b.sY)()
                                    ? (d) => {
                                        t(E),
                                          d.stopPropagation(),
                                          d.preventDefault();
                                      }
                                    : void 0;
                                return (0, n.jsx)(
                                  J.u,
                                  {
                                    event: E,
                                    onClick: p,
                                    nSummaryMaxLength: l,
                                  },
                                  E.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    s,
                  ],
                })
          );
        }
        var ft = e(49984),
          Et = e(2801);
        function It(a) {
          const {
              trackingLocation: o,
              strClassName: i,
              bViewAllShowInfiniteScroll: t,
            } = a,
            [s, r, l] = (0, O.uD)(),
            [h, u] = (0, c.useState)(null),
            [L, f] = (0, c.useState)(void 0),
            v = (0, V.Y)(),
            E = (0, c.useCallback)(() => {
              u(null), l();
            }, [l]),
            p = (0, c.useCallback)(
              (D) => {
                o &&
                  D &&
                  D.BIsPartnerEvent() &&
                  v.MarkEventRead(D.GID, D.clanSteamID.GetAccountID(), o) &&
                  v.Flush(),
                  u(D),
                  f(void 0),
                  r();
              },
              [o, v, r],
            ),
            { last_update_event: d, rgEvents: I } = St({
              ...a,
              fnEventShowModal: p,
            }),
            S = (0, c.useCallback)(() => {
              const {
                event_gid: D,
                announcement_gid: M,
                clan_account_id: xt,
              } = d;
              o && D && v.MarkEventRead(D, xt, o) && v.Flush(),
                f(M),
                u(null),
                r();
            }, [d, r, v, o]);
          (0, c.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (D, M) => {
                f(M), u(null), f(M), r();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [r],
          );
          const g = (0, x.Qn)(),
            B = !!d && !!d.rtime,
            F =
              B && !!d.announcement_gid && (!I || I.length == 0)
                ? d.announcement_gid
                : void 0;
          let R;
          return (
            B && F
              ? (R = (0, n.jsx)(vt, {
                  nUpdateTime: d.rtime,
                  announcementGID: F,
                  onClick: S,
                }))
              : B &&
                !F &&
                !g &&
                (R = (0, n.jsx)(ct, { nUpdateTime: d.rtime, onClick: S })),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(Et.EN, {
                  active: s,
                  children: (0, n.jsx)(Dt, {
                    ...a,
                    announcementGID:
                      L || (h == null ? void 0 : h.AnnouncementGID),
                    eventModel: h,
                    closeModal: E,
                  }),
                }),
                (0, n.jsx)(ht, {
                  elPostRowElement: R,
                  rgEvents: I,
                  fnEventShowModal: p,
                  bViewAllShowInfiniteScroll: t,
                  strClassName: i,
                }),
              ],
            })
          );
        }
        function St(a) {
          const {
              appid: o,
              event_customization: i,
              partnerEventStore: t,
              trackingLocation: s,
              fnEventShowModal: r,
            } = a,
            [l, h] = (0, c.useState)(null),
            [u, L] = (0, c.useState)(null),
            f = (0, V.Y)(),
            [v] = (0, Z.Q)("emgid", void 0),
            [E] = (0, Z.Q)("announce_gid", void 0);
          return (
            (0, c.useEffect)(() => {
              const p = (0, ft.v)("EventWebRowEmbed");
              let d = !1;
              if (gt(p)) {
                (d = p.bPreLoaded), h(p.last_update_event);
                const I = [];
                p.announcementGIDList.forEach((S) => {
                  const g = P.O3.GetClanEventFromAnnouncementGID(S);
                  g && I.push(g);
                }),
                  L(I);
              }
              d ||
                (async () => {
                  const S = await t.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    o,
                    0,
                    2,
                    i,
                  );
                  L(S),
                    s &&
                      S &&
                      S.length > 0 &&
                      (S.filter((g) => g.BIsPartnerEvent()).forEach((g) =>
                        f.MarkEventShown(
                          g.GID,
                          g.clanSteamID.GetAccountID(),
                          s,
                        ),
                      ),
                      f.Flush());
                })();
            }, [o, i, r, t, f, s]),
            (0, c.useEffect)(() => {
              if (u != null && (v || E)) {
                const p = u.find((d) => d.GID === v || d.AnnouncementGID == E);
                p
                  ? r(p)
                  : (async () => {
                      const I = v
                        ? await t.LoadPartnerEventFromClanEventGID(o, v, 0)
                        : await t.LoadPartnerEventFromAnnoucementGID(o, E, 0);
                      I && L([...u, I]);
                    })();
              }
            }, [v, E, u, r, L, t, o]),
            { last_update_event: l, rgEvents: u }
          );
        }
        function gt(a) {
          const o = a;
          return o && typeof o == "object"
            ? o.bPreLoaded !== void 0 &&
                typeof o.bPreLoaded == "boolean" &&
                Array.isArray(o.announcementGIDList)
            : !1;
        }
        function Dt(a) {
          const {
              appid: o,
              partnerEventStore: i,
              trackingLocation: t,
              announcementGID: s,
              eventModel: r,
              closeModal: l,
            } = a,
            h = (0, x.Qn)();
          return (0, n.jsx)(H.N, {
            className: h ? void 0 : m.StoreHeaderAdjust,
            eventClassName: h ? m.GamePadUIWidthAdjust : void 0,
            appid: o,
            trackingLocation: t,
            announcementGID: s,
            partnerEventStore: i,
            eventModel: r != null ? r : void 0,
            closeModal: l,
          });
        }
        function Lt(a) {
          const { appid: o } = a;
          let i = new Date(it.TS.NOW * 1e3),
            t = new Date(i.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            s = Math.floor(t.getTime() / 1e3);
          return (0, n.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, n.jsx)(It, {
              appid: o,
              partnerEventStore: rt.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: s,
              },
              strClassName: m.Container,
              trackingLocation: A.Tc.My,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
        function wt(a) {
          const [o, i] = c.useState(!0);
          return (
            c.useEffect(() => {
              $.Vw.Init(new K.D(x.TS.WEBAPI_BASE_URL)),
                P.O3.Init(),
                Promise.all([q.KN.InitGlobal()]).then(() => i(!1));
            }, []),
            o
              ? null
              : (0, n.jsx)(_.I.Provider, {
                  value: { bCanUseLink: !0 },
                  children: (0, n.jsxs)(w.dO, {
                    children: [
                      (0, n.jsx)(w.qh, {
                        exact: !0,
                        path: C.g5.ViewEventDetails(
                          ":appid_or_vanity_str",
                          ":oldAnnouncementGID(\\d+)",
                        ),
                        render: (t) => (0, n.jsx)(Y, { ...t }),
                      }),
                      (0, n.jsx)(w.qh, {
                        exact: !0,
                        path: C.g5.Listing(":appid_or_vanity_str"),
                        render: (t) =>
                          (0, n.jsx)(
                            j,
                            {
                              ...t,
                              bPreventDismiss: !0,
                              trackingLocation: A.Tc.My,
                            },
                            "InfScroll_NoDismissApp_" + t.match.params.appid,
                          ),
                      }),
                      (0, n.jsx)(w.qh, {
                        exact: !0,
                        path: C.g5.WorkshopHub(":appid(\\d+)"),
                        render: (t) =>
                          (0, c.createElement)(Lt, {
                            ...t,
                            appid: +t.match.params.appid,
                            key: "Workshop" + t.match.params.appid,
                          }),
                      }),
                      (0, n.jsx)(w.qh, {
                        path: C.g5.AppHub(":appid"),
                        render: (t) =>
                          (0, c.createElement)(j, {
                            ...t,
                            key: "InfScroll_App_" + t.match.params.appid,
                            trackingLocation: A.Tc.My,
                          }),
                      }),
                      (0, n.jsx)(w.qh, {
                        path: C.g5.GroupHub(":group_vanity"),
                        render: (t) =>
                          (0, c.createElement)(j, {
                            ...t,
                            key: "InfScroll_App_" + t.match.params.group_vanity,
                            trackingLocation: A.Tc.My,
                          }),
                      }),
                      (0, n.jsx)(w.qh, { component: tt.a }),
                    ],
                  }),
                })
          );
        }
      },
      12037: (T) => {
        T.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
    },
  ]);
})();
