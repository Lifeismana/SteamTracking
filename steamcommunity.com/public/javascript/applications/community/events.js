/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    34418: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
        StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
        SectionButtonCtn: "_1HP0yfVUrZ-TPBYhiQkye2",
        SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
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
    52425: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => J });
      var a = n(90626),
        o = n(7850),
        s = n(34214),
        i = n(43527),
        r = n(6503);
      const c = (e) =>
        (0, a.createElement)(r.Io, {
          ...e,
          key: e.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var l = n(92757),
        d = n(96059),
        u = n(51006),
        p = n(82429),
        m = n(91254),
        h = n(16180),
        v = (n(64641), n(97058)),
        w = n(78327),
        _ = n(34629),
        f = n(75844),
        S = n(73745),
        E = n(8107),
        I = n(22797),
        g = n(4796),
        D = n(61859),
        L = n(14947);
      let k = class extends a.Component {
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
            : (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
                this.setState({ bShowModal: !0, appid: e, announcementGID: t });
              });
        }
        async LoadAppAndFirstEvent() {
          var e;
          const t = (0, w.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          t && "string" == typeof t && (n = t);
          const a = window.location.href.startsWith(
              w.TS.COMMUNITY_BASE_URL + "groups",
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
              const t = await m.O3.LoadAdjacentPartnerEventsByAnnouncement(
                n,
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
                  null === (e = null == t ? void 0 : t[0]) || void 0 === e
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
      (0, _.Cg)([S.oI], k.prototype, "HideModal", null),
        (k = (0, _.Cg)([f.PA], k));
      var A = n(8527),
        b = n(25888);
      function x(e, t) {
        const n = (function () {
            const [e, t] = (0, a.useState)(location.search);
            return (
              (0, a.useEffect)(() => {
                function e(e) {
                  "urlchange" === e.data && t(location.search);
                }
                return (
                  window.addEventListener("message", e),
                  () => {
                    window.removeEventListener("message", e);
                  }
                );
              }, []),
              e
            );
          })(),
          o = (0, a.useMemo)(() => {
            const a = new URLSearchParams(n.substring(1)).get(e);
            return null != a
              ? null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== a)
                  : t.constructor(a)
                : a
              : t;
          }, [e, t, n]),
          [s, i] = (0, a.useState)(o),
          r = a.useCallback(
            (t, o = !1) => {
              const s = new URLSearchParams(n.substring(1));
              if (null != t) {
                if (s.get(e) == t) return;
                s.set(e, String(t));
              } else {
                if (!s.has(e)) return;
                s.delete(e);
              }
              o
                ? history.replaceState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${s}`),
                  )
                : history.pushState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${s}`),
                  ),
                (0, a.startTransition)(() => {
                  i(t), window.postMessage("urlchange");
                });
            },
            [e, n],
          );
        return [s, r];
      }
      var C = n(87652),
        P = n(45699),
        j = n(76217),
        G = n(23310),
        y = n(50433),
        M = n(16261),
        B = n(34418),
        U = n(12155);
      function N(e) {
        return (0, o.jsxs)("div", {
          className: B.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: B.LatestUpdateIcon,
              children: (0, o.jsx)(U.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(P.ml, {
              className: B.LatestUpdateButton,
              onClick: e.onClick,
              children: M.Z.Localize(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, D._l)(e.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function F(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          s = n ? m.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = window.screen.width > 500 ? y.kH : y.uY;
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("h2", {
              children: (0, D.we)("#EventBrowse_LastUpdateDate", (0, D._l)(t)),
            }),
            (0, o.jsx)("div", {
              className: B.SectionButtonCtn,
              children: (0, o.jsx)(P.ml, {
                className: B.SectionButton,
                onClick: (e) => {
                  null == a || a(), e.stopPropagation(), e.preventDefault();
                },
                children: (0, D.we)("#EventBrowse_ViewLatestUpdate"),
              }),
            }),
            !!s &&
              (0, o.jsx)(j.Z, {
                className: B.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: G.iU.PREFERRED_CHILD,
                children: (0, o.jsx)(i, {
                  event: s,
                  onClick: (e) => {
                    null == a || a(), e.stopPropagation(), e.preventDefault();
                  },
                }),
              }),
          ],
        });
      }
      var T = n(32803),
        R = n(13871);
      const H = 500;
      function O(e) {
        const {
            strClassName: t,
            rgEvents: n,
            fnEventShowModal: a,
            elPostRowElement: s,
            bViewAllShowInfiniteScroll: i,
          } = e,
          r = (0, R.R7)().ownerWindow.window.innerWidth <= H ? 1 : 2;
        return (0, o.jsxs)(j.Z, {
          className: t,
          "flow-children": "row",
          children: [
            !!n &&
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", {
                    children: M.Z.Localize("#EventBrowse_RecentEvents"),
                  }),
                  !A.TS.IN_GAMEPADUI &&
                    !!n &&
                    (0, o.jsx)("div", {
                      className: B.SectionButtonCtn,
                      children:
                        i && a
                          ? (0, o.jsx)(P.ml, {
                              className: B.SectionButton,
                              onClick: () => a(n[0]),
                              children: M.Z.Localize(
                                "#EventBrowse_MoreEventsBtn",
                              ),
                            })
                          : (0, o.jsx)(T.tj, {
                              eventModel: n[0],
                              route: T.PH.k_eViewWebSiteHub,
                              className: B.SectionButton,
                              children: M.Z.Localize(
                                "#EventBrowse_MoreEventsBtn",
                              ),
                            }),
                    }),
                  (0, o.jsx)("div", {
                    className: B.EventsSummariesCtn,
                    children: n.slice(0, r).map((e) => {
                      const t = a
                          ? (t) => {
                              a(e), t.stopPropagation(), t.preventDefault();
                            }
                          : void 0,
                        s =
                          1 === n.length && window.screen.width > 500
                            ? y.kH
                            : y.uY;
                      return (0, o.jsx)(s, { event: e, onClick: t }, e.GID);
                    }),
                  }),
                ],
              }),
            s,
          ],
        });
      }
      var q = n(55563),
        Z = n(9154);
      function V(e) {
        const {
            trackingLocation: t,
            strClassName: n,
            bViewAllShowInfiniteScroll: s,
          } = e,
          [i, r, c] = (0, S.uD)(),
          [l, d] = (0, a.useState)(null),
          [u, p] = (0, a.useState)(void 0),
          h = (0, C.YN)(),
          v = (0, a.useCallback)(() => {
            d(null), c();
          }, [c]),
          _ = (0, a.useCallback)(
            (e) => {
              t &&
                e &&
                e.BIsPartnerEvent() &&
                h.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                h.Flush(),
                d(e),
                p(void 0),
                r();
            },
            [t, h, r],
          ),
          { last_update_event: f, rgEvents: E } = (function (e) {
            const {
                appid: t,
                event_customization: n,
                partnerEventStore: o,
                trackingLocation: s,
                fnEventShowModal: i,
              } = e,
              [r, c] = (0, a.useState)(null),
              [l, d] = (0, a.useState)(null),
              u = (0, C.YN)(),
              [p] = x("emgid", void 0),
              [h] = x("announce_gid", void 0);
            return (
              (0, a.useEffect)(() => {
                const e = (0, q.v)("EventWebRowEmbed");
                let a = !1;
                if (
                  (function (e) {
                    const t = e;
                    if (t && "object" == typeof t)
                      return (
                        void 0 !== t.bPreLoaded &&
                        "boolean" == typeof t.bPreLoaded &&
                        Array.isArray(t.announcementGIDList)
                      );
                    return !1;
                  })(e)
                ) {
                  (a = e.bPreLoaded), c(e.last_update_event);
                  const t = [];
                  e.announcementGIDList.forEach((e) => {
                    const n = m.O3.GetClanEventFromAnnouncementGID(e);
                    n && t.push(n);
                  }),
                    d(t);
                }
                if (!a) {
                  (async () => {
                    const e = await o.LoadAdjacentPartnerEvents(
                      void 0,
                      void 0,
                      t,
                      0,
                      2,
                      n,
                    );
                    d(e),
                      s &&
                        e &&
                        e.length > 0 &&
                        (e
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((e) =>
                            u.MarkEventShown(
                              e.GID,
                              e.clanSteamID.GetAccountID(),
                              s,
                            ),
                          ),
                        u.Flush());
                  })();
                }
              }, [t, n, i, o, u, s]),
              (0, a.useEffect)(() => {
                if (null != l && (p || h)) {
                  const e = l.find(
                    (e) => e.GID === p || e.AnnouncementGID == h,
                  );
                  if (e) i(e);
                  else {
                    (async () => {
                      const e = p
                        ? await o.LoadPartnerEventFromClanEventGID(t, p, 0)
                        : await o.LoadPartnerEventFromAnnoucementGID(t, h, 0);
                      e && d([...l, e]);
                    })();
                  }
                }
              }, [p, h, l, i, d, o, t]),
              { last_update_event: r, rgEvents: l }
            );
          })({ ...e, fnEventShowModal: _ }),
          I = (0, a.useCallback)(() => {
            const { event_gid: e, announcement_gid: n, clan_account_id: a } = f;
            t && e && h.MarkEventRead(e, a, t) && h.Flush(), p(n), d(null), r();
          }, [f, r, h, t]);
        (0, a.useEffect)(
          () => (
            (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              p(t), d(null), p(t), r();
            }),
            () => {
              window.fnPartnerEvent_ShowInfiniteScroll &&
                delete window.fnPartnerEvent_ShowInfiniteScroll;
            }
          ),
          [r],
        );
        const g = !!f && !!f.rtime,
          D =
            g && !!f.announcement_gid && (!E || 0 == E.length)
              ? f.announcement_gid
              : void 0;
        let L;
        return (
          g && D
            ? (L = (0, o.jsx)(F, {
                nUpdateTime: f.rtime,
                announcementGID: D,
                onClick: I,
              }))
            : !g ||
              D ||
              w.TS.IN_GAMEPADUI ||
              (L = (0, o.jsx)(N, { nUpdateTime: f.rtime, onClick: I })),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(Z.EN, {
                active: i,
                children: (0, o.jsx)(W, {
                  ...e,
                  announcementGID:
                    u || (null == l ? void 0 : l.AnnouncementGID),
                  eventModel: l,
                  closeModal: v,
                }),
              }),
              (0, o.jsx)(O, {
                elPostRowElement: L,
                rgEvents: E,
                fnEventShowModal: _,
                bViewAllShowInfiniteScroll: s,
                strClassName: n,
              }),
            ],
          })
        );
      }
      function W(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = e,
          c = (0, w.Qn)();
        return null === i
          ? null
          : (0, o.jsx)(E.N, {
              className: c ? void 0 : B.StoreHeaderAdjust,
              eventClassName: c ? B.GamePadUIWidthAdjust : void 0,
              appid: t,
              trackingLocation: a,
              announcementGID: s,
              partnerEventStore: n,
              eventModel: i,
              closeModal: r,
            });
      }
      function Y(e) {
        const { appid: t } = e;
        let n = new Date(1e3 * A.TS.NOW),
          a = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6),
          i = Math.floor(a.getTime() / 1e3);
        return (0, o.jsx)("div", {
          className:
            "detailBox altFooter greenlight_home_box section announcements_row",
          children: (0, o.jsx)(V, {
            appid: t,
            partnerEventStore: b.mh,
            event_customization: {
              require_tags: ["workshop"],
              rtime_oldestevent: i,
            },
            strClassName: B.Container,
            trackingLocation: s.Tc.My,
            bViewAllShowInfiniteScroll: !0,
          }),
        });
      }
      function J(e) {
        const [t, n] = a.useState(!0);
        return (
          a.useEffect(() => {
            u.Vw.Init(new d.D(w.TS.WEBAPI_BASE_URL)),
              m.O3.Init(),
              Promise.all([p.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : (0, o.jsx)(h.I.Provider, {
                value: { bCanUseLink: !0 },
                children: (0, o.jsxs)(l.dO, {
                  children: [
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: i.g5.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (e) => (0, o.jsx)(c, { ...e }),
                    }),
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: i.g5.Listing(":appid_or_vanity_str"),
                      render: (e) =>
                        (0, o.jsx)(
                          k,
                          {
                            ...e,
                            bPreventDismiss: !0,
                            trackingLocation: s.Tc.My,
                          },
                          "InfScroll_NoDismissApp_" + e.match.params.appid,
                        ),
                    }),
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: i.g5.WorkshopHub(":appid(\\d+)"),
                      render: (e) =>
                        (0, a.createElement)(Y, {
                          ...e,
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: i.g5.AppHub(":appid"),
                      render: (e) =>
                        (0, a.createElement)(k, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: s.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: i.g5.GroupHub(":group_vanity"),
                      render: (e) =>
                        (0, a.createElement)(k, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: s.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(l.qh, { component: v.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
