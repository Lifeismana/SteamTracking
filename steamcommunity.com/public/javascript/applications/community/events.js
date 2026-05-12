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
    5901: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => O });
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
        p = n(60746),
        m = n(91254),
        h = n(3919),
        v = (n(64641), n(97058)),
        w = n(78327),
        _ = n(34629),
        f = n(75844),
        S = n(73745),
        I = n(8107),
        E = n(22797),
        g = n(4796),
        D = n(61859),
        k = n(14947);
      let L = class extends a.Component {
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
          if ((console.log("output: ", (0, k.HO)(o), a), o))
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
            ? (0, o.jsx)(I.N, {
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
              ? (0, o.jsx)(E.t, { string: (0, D.we)("#Loading") })
              : (0, o.jsx)("div", {});
        }
      };
      (0, _.Cg)([S.oI], L.prototype, "HideModal", null),
        (L = (0, _.Cg)([f.PA], L));
      var G = n(45699),
        A = n(76217),
        b = n(23310);
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
      var C = n(55563),
        P = n(35685),
        j = n(12155),
        y = n(9154),
        M = n(34418);
      function B(e) {
        const {
            trackingLocation: t,
            strClassName: n,
            bViewAllShowInfiniteScroll: s,
          } = e,
          [i, r, c] = (0, S.uD)(),
          [l, d] = (0, a.useState)(null),
          [u, v] = (0, a.useState)(void 0),
          _ = (0, a.useCallback)(() => {
            d(null), c();
          }, [c]),
          f = (0, a.useCallback)(
            (e) => {
              if (t && e && e.BIsPartnerEvent()) {
                const n = p.KN.Get().GetTracker();
                n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                  n.Flush();
              }
              d(e), v(void 0), r();
            },
            [t, r],
          ),
          { last_update_event: I, rgEvents: E } = (function (e) {
            const {
                appid: t,
                event_customization: n,
                partnerEventStore: o,
                trackingLocation: s,
                fnEventShowModal: i,
              } = e,
              [r, c] = (0, a.useState)(null),
              [l, d] = (0, a.useState)(null),
              [u] = x("emgid", void 0),
              [h] = x("announce_gid", void 0);
            return (
              (0, a.useEffect)(() => {
                const e = (0, C.v)("EventWebRowEmbed");
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
                    if ((d(e), s && e && e.length > 0)) {
                      const t = p.KN.Get().GetTracker();
                      e
                        .filter((e) => e.BIsPartnerEvent())
                        .forEach((e) =>
                          t.MarkEventShown(
                            e.GID,
                            e.clanSteamID.GetAccountID(),
                            s,
                          ),
                        ),
                        t.Flush();
                    }
                  })();
                }
              }, [t, n, i, o, s]),
              (0, a.useEffect)(() => {
                if (null != l && (u || h)) {
                  const e = l.find(
                    (e) => e.GID === u || e.AnnouncementGID == h,
                  );
                  if (e) i(e);
                  else {
                    (async () => {
                      const e = u
                        ? await o.LoadPartnerEventFromClanEventGID(t, u, 0)
                        : await o.LoadPartnerEventFromAnnoucementGID(t, h, 0);
                      e && d([...l, e]);
                    })();
                  }
                }
              }, [u, h, l, i, d, o, t]),
              { last_update_event: r, rgEvents: l }
            );
          })({ ...e, fnEventShowModal: f }),
          g = (0, a.useCallback)(() => {
            const { event_gid: e, announcement_gid: n, clan_account_id: a } = I,
              o = p.KN.Get().GetTracker();
            t && e && o.MarkEventRead(e, a, t) && o.Flush(), v(n), d(null), r();
          }, [I, r, t]);
        (0, a.useEffect)(
          () => (
            (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              v(t), d(null), v(t), r();
            }),
            () => {
              window.fnPartnerEvent_ShowInfiniteScroll &&
                delete window.fnPartnerEvent_ShowInfiniteScroll;
            }
          ),
          [r],
        );
        const k = !!I && !!I.rtime,
          L =
            k && !!I.announcement_gid && (!E || 0 == E.length)
              ? I.announcement_gid
              : void 0,
          b = window.screen.width <= 500 ? 1 : 2;
        return (0, o.jsxs)(A.Z, {
          className: n,
          "flow-children": "row",
          children: [
            (0, o.jsx)(y.EN, {
              active: i,
              children: (0, o.jsx)(U, {
                ...e,
                announcementGID: u || (null == l ? void 0 : l.AnnouncementGID),
                eventModel: l,
                closeModal: _,
              }),
            }),
            !!E &&
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", {
                    children: (0, D.we)("#EventBrowse_RecentEvents"),
                  }),
                  !w.TS.IN_GAMEPADUI &&
                    !!E &&
                    (0, o.jsx)("div", {
                      className: M.SectionButtonCtn,
                      children: s
                        ? (0, o.jsx)(G.ml, {
                            className: M.SectionButton,
                            onClick: () => f(E[0]),
                            children: (0, D.we)("#EventBrowse_MoreEventsBtn"),
                          })
                        : (0, o.jsx)(h.tj, {
                            eventModel: E[0],
                            route: h.PH.k_eViewWebSiteHub,
                            className: M.SectionButton,
                            children: (0, D.we)("#EventBrowse_MoreEventsBtn"),
                          }),
                    }),
                  (0, o.jsx)("div", {
                    className: M.EventsSummariesCtn,
                    children: E.slice(0, b).map((e) => {
                      const t =
                        1 === E.length && window.screen.width > 500
                          ? P.kH
                          : P.uY;
                      return (0, o.jsx)(
                        t,
                        {
                          event: e,
                          onClick: (t) => {
                            f(e), t.stopPropagation(), t.preventDefault();
                          },
                        },
                        e.GID,
                      );
                    }),
                  }),
                ],
              }),
            k &&
              !!L &&
              (0, o.jsx)(F, {
                nUpdateTime: I.rtime,
                announcementGID: L,
                onClick: g,
              }),
            k &&
              !L &&
              !w.TS.IN_GAMEPADUI &&
              (0, o.jsx)(N, { nUpdateTime: I.rtime, onClick: g }),
          ],
        });
      }
      function U(e) {
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
          : (0, o.jsx)(I.N, {
              className: c ? void 0 : M.StoreHeaderAdjust,
              eventClassName: c ? M.GamePadUIWidthAdjust : void 0,
              appid: t,
              trackingLocation: a,
              announcementGID: s,
              partnerEventStore: n,
              eventModel: i,
              closeModal: r,
            });
      }
      function N(e) {
        return (0, o.jsxs)("div", {
          className: M.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: M.LatestUpdateIcon,
              children: (0, o.jsx)(j.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(G.ml, {
              className: M.LatestUpdateButton,
              onClick: e.onClick,
              children: (0, D.we)(
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
          i = window.screen.width > 500 ? P.kH : P.uY;
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("h2", {
              children: (0, D.we)("#EventBrowse_LastUpdateDate", (0, D._l)(t)),
            }),
            (0, o.jsx)("div", {
              className: M.SectionButtonCtn,
              children: (0, o.jsx)("div", {
                className: M.SectionButton,
                onClick: (e) => {
                  null == a || a(), e.stopPropagation(), e.preventDefault();
                },
                children: (0, D.we)("#EventBrowse_ViewLatestUpdate"),
              }),
            }),
            !!s &&
              (0, o.jsx)(A.Z, {
                className: M.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: b.iU.PREFERRED_CHILD,
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
      var T = n(25888),
        H = n(44165);
      class R extends a.Component {
        render() {
          const { appid: e } = this.props;
          let t = H.HD.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return (0, o.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, o.jsx)(B, {
              appid: e,
              partnerEventStore: T.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: M.Container,
              trackingLocation: s.Tc.My,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
      }
      function O(e) {
        const [t, n] = a.useState(!0);
        return (
          a.useEffect(() => {
            u.Vw.Init(new d.D(w.TS.WEBAPI_BASE_URL)),
              m.O3.Init(),
              Promise.all([p.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : (0, o.jsx)(h.IQ.Provider, {
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
                          L,
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
                        (0, a.createElement)(R, {
                          ...e,
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: i.g5.AppHub(":appid"),
                      render: (e) =>
                        (0, a.createElement)(L, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: s.Tc.My,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: i.g5.GroupHub(":group_vanity"),
                      render: (e) =>
                        (0, a.createElement)(L, {
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
