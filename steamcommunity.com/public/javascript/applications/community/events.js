/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    34418: (e) => {
      e.exports = {
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
    59561: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => K });
      var a = t(90626),
        o = t(7850),
        i = t(34214),
        s = t(43527),
        r = t(6503);
      const l = (e) =>
        (0, a.createElement)(r.Io, {
          ...e,
          key: e.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var c = t(92757),
        d = t(96059),
        p = t(51006),
        u = t(82429),
        m = t(91254),
        v = t(16180),
        h = (t(64641), t(97058)),
        _ = t(78327),
        w = t(34629),
        S = t(75844),
        f = t(73745),
        E = t(8107),
        I = t(22797),
        g = t(4796),
        D = t(61859),
        L = t(14947);
      let A = class extends a.Component {
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
            : (window.fnPartnerEvent_ShowInfiniteScroll = (e, n) => {
                this.setState({ bShowModal: !0, appid: e, announcementGID: n });
              });
        }
        async LoadAppAndFirstEvent() {
          var e;
          const n = (0, _.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let t;
          n && "string" == typeof n && (t = n);
          const a = window.location.href.startsWith(
              _.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await g.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await g.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, L.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const n = await m.O3.LoadAdjacentPartnerEventsByAnnouncement(
                t,
                o.clanSteamID,
                o.appid,
                3,
                3,
              );
              this.setState({
                bLoadedLandingState: !1,
                bShowModal: !0,
                appid: o.appid,
                clanSteamID: o.clanSteamID,
                announcementGID:
                  null === (e = null == n ? void 0 : n[0]) || void 0 === e
                    ? void 0
                    : e.AnnouncementGID,
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
          const { bPreventDismiss: e } = this.props;
          return this.state.bShowModal
            ? (0, o.jsx)(E.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: m.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? (0, o.jsx)(I.t, { string: (0, D.we)("#Loading") })
              : (0, o.jsx)("div", {});
        }
      };
      (0, w.Cg)([f.oI], A.prototype, "HideModal", null),
        (A = (0, w.Cg)([S.PA], A));
      var x = t(8527),
        k = t(25888),
        b = t(88386),
        j = t(87652),
        G = t(45699),
        C = t(76217),
        P = t(84143),
        M = t(50433),
        y = t(16261),
        B = t(34418),
        F = t(12155);
      function N(e) {
        return (0, o.jsxs)("div", {
          className: B.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: B.LatestUpdateIcon,
              children: (0, o.jsx)(F.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(G.ml, {
              className: B.LatestUpdateButton,
              onClick: e.onClick,
              children: y.Z.Localize(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, D._l)(e.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function U(e) {
        const { nUpdateTime: n, announcementGID: t, onClick: a } = e,
          i = t ? m.O3.GetClanEventFromAnnouncementGID(t) : null,
          s = M.u;
        return (0, o.jsxs)("div", {
          className: B.Container,
          children: [
            (0, o.jsxs)("h2", {
              children: [
                (0, D.we)("#EventBrowse_LastUpdateDate", (0, D._l)(n)),
                (0, o.jsx)(G.ml, {
                  className: B.SectionButton,
                  onClick: (e) => {
                    null == a || a(), e.stopPropagation(), e.preventDefault();
                  },
                  children: (0, D.we)("#EventBrowse_MoreEventsBtn"),
                }),
              ],
            }),
            !!i &&
              (0, o.jsx)(C.Z, {
                className: B.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: P.iU.PREFERRED_CHILD,
                children: (0, o.jsx)(s, {
                  event: i,
                  onClick: (e) => {
                    null == a || a(), e.stopPropagation(), e.preventDefault();
                  },
                }),
              }),
          ],
        });
      }
      var T = t(7445),
        H = t(32803),
        R = t(9646),
        O = t(13871);
      const q = 500;
      function W(e) {
        const {
            strClassName: n,
            rgEvents: t,
            fnEventShowModal: a,
            elPostRowElement: i,
            bViewAllShowInfiniteScroll: s,
            nSummaryMaxLength: r,
          } = e,
          l = (0, R.d)(),
          c = (0, O.R7)();
        let d = 2,
          p = q + 1;
        return (
          c.ownerWindow.window
            ? (p = c.ownerWindow.window.innerWidth)
            : l.viewportWidth && (p = l.viewportWidth.value),
          (d = p <= q ? 1 : 2),
          t && 0 == t.length && !i
            ? null
            : (0, o.jsxs)(C.Z, {
                className: n,
                "flow-children": "row",
                children: [
                  !!t &&
                    t.length > 0 &&
                    (0, o.jsx)("div", {
                      className: B.Container,
                      children: (0, o.jsxs)(T.q, {
                        children: [
                          (0, o.jsxs)("h2", {
                            children: [
                              y.Z.Localize("#EventBrowse_RecentEvents"),
                              !x.TS.IN_GAMEPADUI &&
                                !!t &&
                                (0, o.jsx)(o.Fragment, {
                                  children:
                                    s && a
                                      ? (0, o.jsx)(G.ml, {
                                          className: B.SectionButton,
                                          onClick: () => a(t[0]),
                                          children: y.Z.Localize(
                                            "#EventBrowse_MoreEventsBtn",
                                          ),
                                        })
                                      : (0, o.jsx)(H.tj, {
                                          eventModel: t[0],
                                          route: H.PH.k_eViewWebSiteHub,
                                          className: B.SectionButton,
                                          children: y.Z.Localize(
                                            "#EventBrowse_MoreEventsBtn",
                                          ),
                                        }),
                                }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: B.EventsSummariesCtn,
                            children: t.slice(0, d).map((e) => {
                              const n = a
                                  ? (n) => {
                                      a(e),
                                        n.stopPropagation(),
                                        n.preventDefault();
                                    }
                                  : void 0,
                                t = M.u;
                              return (0, o.jsx)(
                                t,
                                { event: e, onClick: n, nSummaryMaxLength: r },
                                e.GID,
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  i,
                ],
              })
        );
      }
      var Z = t(55563),
        V = t(9154);
      function J(e) {
        const {
            trackingLocation: n,
            strClassName: t,
            bViewAllShowInfiniteScroll: i,
          } = e,
          [s, r, l] = (0, f.uD)(),
          [c, d] = (0, a.useState)(null),
          [p, u] = (0, a.useState)(void 0),
          v = (0, j.YN)(),
          h = (0, a.useCallback)(() => {
            d(null), l();
          }, [l]),
          w = (0, a.useCallback)(
            (e) => {
              n &&
                e &&
                e.BIsPartnerEvent() &&
                v.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), n) &&
                v.Flush(),
                d(e),
                u(void 0),
                r();
            },
            [n, v, r],
          ),
          { last_update_event: S, rgEvents: E } = (function (e) {
            const {
                appid: n,
                event_customization: t,
                partnerEventStore: o,
                trackingLocation: i,
                fnEventShowModal: s,
              } = e,
              [r, l] = (0, a.useState)(null),
              [c, d] = (0, a.useState)(null),
              p = (0, j.YN)(),
              [u] = (0, b.Q)("emgid", void 0),
              [v] = (0, b.Q)("announce_gid", void 0);
            return (
              (0, a.useEffect)(() => {
                const e = (0, Z.v)("EventWebRowEmbed");
                let a = !1;
                if (
                  (function (e) {
                    const n = e;
                    if (n && "object" == typeof n)
                      return (
                        void 0 !== n.bPreLoaded &&
                        "boolean" == typeof n.bPreLoaded &&
                        Array.isArray(n.announcementGIDList)
                      );
                    return !1;
                  })(e)
                ) {
                  (a = e.bPreLoaded), l(e.last_update_event);
                  const n = [];
                  e.announcementGIDList.forEach((e) => {
                    const t = m.O3.GetClanEventFromAnnouncementGID(e);
                    t && n.push(t);
                  }),
                    d(n);
                }
                if (!a) {
                  (async () => {
                    const e = await o.LoadAdjacentPartnerEvents(
                      void 0,
                      void 0,
                      n,
                      0,
                      2,
                      t,
                    );
                    d(e),
                      i &&
                        e &&
                        e.length > 0 &&
                        (e
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((e) =>
                            p.MarkEventShown(
                              e.GID,
                              e.clanSteamID.GetAccountID(),
                              i,
                            ),
                          ),
                        p.Flush());
                  })();
                }
              }, [n, t, s, o, p, i]),
              (0, a.useEffect)(() => {
                if (null != c && (u || v)) {
                  const e = c.find(
                    (e) => e.GID === u || e.AnnouncementGID == v,
                  );
                  if (e) s(e);
                  else {
                    (async () => {
                      const e = u
                        ? await o.LoadPartnerEventFromClanEventGID(n, u, 0)
                        : await o.LoadPartnerEventFromAnnoucementGID(n, v, 0);
                      e && d([...c, e]);
                    })();
                  }
                }
              }, [u, v, c, s, d, o, n]),
              { last_update_event: r, rgEvents: c }
            );
          })({ ...e, fnEventShowModal: w }),
          I = (0, a.useCallback)(() => {
            const { event_gid: e, announcement_gid: t, clan_account_id: a } = S;
            n && e && v.MarkEventRead(e, a, n) && v.Flush(), u(t), d(null), r();
          }, [S, r, v, n]);
        (0, a.useEffect)(
          () => (
            (window.fnPartnerEvent_ShowInfiniteScroll = (e, n) => {
              u(n), d(null), u(n), r();
            }),
            () => {
              window.fnPartnerEvent_ShowInfiniteScroll &&
                delete window.fnPartnerEvent_ShowInfiniteScroll;
            }
          ),
          [r],
        );
        const g = !!S && !!S.rtime,
          D =
            g && !!S.announcement_gid && (!E || 0 == E.length)
              ? S.announcement_gid
              : void 0;
        let L;
        return (
          g && D
            ? (L = (0, o.jsx)(U, {
                nUpdateTime: S.rtime,
                announcementGID: D,
                onClick: I,
              }))
            : !g ||
              D ||
              _.TS.IN_GAMEPADUI ||
              (L = (0, o.jsx)(N, { nUpdateTime: S.rtime, onClick: I })),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(V.EN, {
                active: s,
                children: (0, o.jsx)(z, {
                  ...e,
                  announcementGID:
                    p || (null == c ? void 0 : c.AnnouncementGID),
                  eventModel: c,
                  closeModal: h,
                }),
              }),
              (0, o.jsx)(W, {
                elPostRowElement: L,
                rgEvents: E,
                fnEventShowModal: w,
                bViewAllShowInfiniteScroll: i,
                strClassName: t,
              }),
            ],
          })
        );
      }
      function z(e) {
        const {
            appid: n,
            partnerEventStore: t,
            trackingLocation: a,
            announcementGID: i,
            eventModel: s,
            closeModal: r,
          } = e,
          l = (0, _.Qn)();
        return (0, o.jsx)(E.N, {
          className: l ? void 0 : B.StoreHeaderAdjust,
          eventClassName: l ? B.GamePadUIWidthAdjust : void 0,
          appid: n,
          trackingLocation: a,
          announcementGID: i,
          partnerEventStore: t,
          eventModel: null != s ? s : void 0,
          closeModal: r,
        });
      }
      function X(e) {
        const { appid: n } = e;
        let t = new Date(1e3 * x.TS.NOW),
          a = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
          s = Math.floor(a.getTime() / 1e3);
        return (0, o.jsx)("div", {
          className:
            "detailBox altFooter greenlight_home_box section announcements_row",
          children: (0, o.jsx)(J, {
            appid: n,
            partnerEventStore: k.mh,
            event_customization: {
              require_tags: ["workshop"],
              rtime_oldestevent: s,
            },
            strClassName: B.Container,
            trackingLocation: i.Tc.My,
            bViewAllShowInfiniteScroll: !0,
          }),
        });
      }
      function K(e) {
        const [n, t] = a.useState(!0);
        return (
          a.useEffect(() => {
            p.Vw.Init(new d.D(_.TS.WEBAPI_BASE_URL)),
              m.O3.Init(),
              Promise.all([u.KN.InitGlobal()]).then(() => t(!1));
          }, []),
          n
            ? null
            : (0, o.jsx)(v.I.Provider, {
                value: { bCanUseLink: !0 },
                children: (0, o.jsxs)(c.dO, {
                  children: [
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (e) => (0, o.jsx)(l, { ...e }),
                    }),
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.Listing(":appid_or_vanity_str"),
                      render: (e) =>
                        (0, o.jsx)(
                          A,
                          {
                            ...e,
                            bPreventDismiss: !0,
                            trackingLocation: i.Tc.My,
                          },
                          "InfScroll_NoDismissApp_" + e.match.params.appid,
                        ),
                    }),
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.WorkshopHub(":appid(\\d+)"),
                      render: (e) =>
                        (0, a.createElement)(X, {
                          ...e,
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(c.qh, {
                      path: s.g5.AppHub(":appid"),
                      render: (e) =>
                        (0, a.createElement)(A, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: i.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(c.qh, {
                      path: s.g5.GroupHub(":group_vanity"),
                      render: (e) =>
                        (0, a.createElement)(A, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: i.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(c.qh, { component: h.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
