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
      n.r(t), n.d(t, { default: () => R });
      var a = n(90626),
        o = n(7850),
        s = n(43527),
        i = n(6503);
      const r = (e) =>
        (0, a.createElement)(i.Io, {
          ...e,
          key: e.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var c = n(92757),
        l = n(96059),
        d = n(51006),
        u = n(60746),
        p = n(91254),
        m = n(3919),
        h = (n(64641), n(97058)),
        v = n(78327),
        w = n(34629),
        _ = n(75844),
        f = n(73745),
        S = n(8107),
        I = n(22797),
        E = n(4796),
        g = n(61859),
        D = n(14947);
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
          const t = (0, v.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          t && "string" == typeof t && (n = t);
          const a = window.location.href.startsWith(
              v.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await E.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await E.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, D.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const t = await p.O3.LoadAdjacentPartnerEventsByAnnouncement(
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
            ? (0, o.jsx)(S.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: p.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? (0, o.jsx)(I.t, { string: (0, g.we)("#Loading") })
              : (0, o.jsx)("div", {});
        }
      };
      (0, w.Cg)([f.oI], k.prototype, "HideModal", null),
        (k = (0, w.Cg)([_.PA], k));
      var L = n(45699),
        G = n(76217),
        A = n(23310);
      function b(e, t) {
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
      var x = n(55563),
        C = n(35685),
        P = n(12155),
        j = n(9154),
        y = n(34418);
      function M(e) {
        const {
            trackingLocation: t,
            strClassName: n,
            bViewAllShowInfiniteScroll: s,
          } = e,
          [i, r, c] = (0, f.uD)(),
          [l, d] = (0, a.useState)(null),
          [h, w] = (0, a.useState)(void 0),
          _ = (0, a.useCallback)(() => {
            d(null), c();
          }, [c]),
          S = (0, a.useCallback)(
            (e) => {
              if (t && e && e.BIsPartnerEvent()) {
                const n = u.KN.Get().GetTracker();
                n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                  n.Flush();
              }
              d(e), w(void 0), r();
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
              [m] = b("emgid", void 0),
              [h] = b("announce_gid", void 0);
            return (
              (0, a.useEffect)(() => {
                const e = (0, x.v)("EventWebRowEmbed");
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
                    const n = p.O3.GetClanEventFromAnnouncementGID(e);
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
                      const t = u.KN.Get().GetTracker();
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
                if (null != l && (m || h)) {
                  const e = l.find(
                    (e) => e.GID === m || e.AnnouncementGID == h,
                  );
                  if (e) i(e);
                  else {
                    (async () => {
                      const e = m
                        ? await o.LoadPartnerEventFromClanEventGID(t, m, 0)
                        : await o.LoadPartnerEventFromAnnoucementGID(t, h, 0);
                      e && d([...l, e]);
                    })();
                  }
                }
              }, [m, h, l, i, d, o, t]),
              { last_update_event: r, rgEvents: l }
            );
          })({ ...e, fnEventShowModal: S }),
          D = (0, a.useCallback)(() => {
            const { event_gid: e, announcement_gid: n, clan_account_id: a } = I,
              o = u.KN.Get().GetTracker();
            t && e && o.MarkEventRead(e, a, t) && o.Flush(), w(n), d(null), r();
          }, [I, r, t]);
        (0, a.useEffect)(
          () => (
            (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              w(t), d(null), w(t), r();
            }),
            () => {
              window.fnPartnerEvent_ShowInfiniteScroll &&
                delete window.fnPartnerEvent_ShowInfiniteScroll;
            }
          ),
          [r],
        );
        const k = !!I && !!I.rtime,
          A =
            k && !!I.announcement_gid && (!E || 0 == E.length)
              ? I.announcement_gid
              : void 0,
          P = window.screen.width <= 500 ? 1 : 2;
        return (0, o.jsxs)(G.Z, {
          className: n,
          "flow-children": "row",
          children: [
            (0, o.jsx)(j.EN, {
              active: i,
              children: (0, o.jsx)(B, {
                ...e,
                announcementGID: h || (null == l ? void 0 : l.AnnouncementGID),
                eventModel: l,
                closeModal: _,
              }),
            }),
            !!E &&
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", {
                    children: (0, g.we)("#EventBrowse_RecentEvents"),
                  }),
                  !v.TS.IN_GAMEPADUI &&
                    !!E &&
                    (0, o.jsx)("div", {
                      className: y.SectionButtonCtn,
                      children: s
                        ? (0, o.jsx)(L.ml, {
                            className: y.SectionButton,
                            onClick: () => S(E[0]),
                            children: (0, g.we)("#EventBrowse_MoreEventsBtn"),
                          })
                        : (0, o.jsx)(m.tj, {
                            eventModel: E[0],
                            route: m.PH.k_eViewWebSiteHub,
                            className: y.SectionButton,
                            children: (0, g.we)("#EventBrowse_MoreEventsBtn"),
                          }),
                    }),
                  (0, o.jsx)("div", {
                    className: y.EventsSummariesCtn,
                    children: E.slice(0, P).map((e) => {
                      const t =
                        1 === E.length && window.screen.width > 500
                          ? C.kH
                          : C.uY;
                      return (0, o.jsx)(
                        t,
                        {
                          event: e,
                          onClick: (t) => {
                            S(e), t.stopPropagation(), t.preventDefault();
                          },
                        },
                        e.GID,
                      );
                    }),
                  }),
                ],
              }),
            k &&
              !!A &&
              (0, o.jsx)(N, {
                nUpdateTime: I.rtime,
                announcementGID: A,
                onClick: D,
              }),
            k &&
              !A &&
              !v.TS.IN_GAMEPADUI &&
              (0, o.jsx)(U, { nUpdateTime: I.rtime, onClick: D }),
          ],
        });
      }
      function B(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = e,
          c = (0, v.Qn)();
        return (0, o.jsx)(S.N, {
          className: c ? void 0 : y.StoreHeaderAdjust,
          eventClassName: c ? y.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: s,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function U(e) {
        return (0, o.jsxs)("div", {
          className: y.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: y.LatestUpdateIcon,
              children: (0, o.jsx)(P.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(L.ml, {
              className: y.LatestUpdateButton,
              onClick: e.onClick,
              children: (0, g.we)(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, g._l)(e.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function N(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          s = n ? p.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = window.screen.width > 500 ? C.kH : C.uY;
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("h2", {
              children: (0, g.we)("#EventBrowse_LastUpdateDate", (0, g._l)(t)),
            }),
            (0, o.jsx)("div", {
              className: y.SectionButtonCtn,
              children: (0, o.jsx)("div", {
                className: y.SectionButton,
                onClick: (e) => {
                  null == a || a(), e.stopPropagation(), e.preventDefault();
                },
                children: (0, g.we)("#EventBrowse_ViewLatestUpdate"),
              }),
            }),
            !!s &&
              (0, o.jsx)(G.Z, {
                className: y.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: A.iU.PREFERRED_CHILD,
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
      var F = n(25888),
        T = n(44165);
      class H extends a.Component {
        render() {
          const { appid: e } = this.props;
          let t = T.HD.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return (0, o.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, o.jsx)(M, {
              appid: e,
              partnerEventStore: F.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: y.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
      }
      function R(e) {
        const [t, n] = a.useState(!0);
        return (
          a.useEffect(() => {
            d.Vw.Init(new l.D(v.TS.WEBAPI_BASE_URL)),
              p.O3.Init(),
              Promise.all([u.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : (0, o.jsx)(m.IQ.Provider, {
                value: { bCanUseLink: !0 },
                children: (0, o.jsxs)(c.dO, {
                  children: [
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (e) => (0, o.jsx)(r, { ...e }),
                    }),
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.Listing(":appid_or_vanity_str"),
                      render: (e) =>
                        (0, o.jsx)(
                          k,
                          { ...e, bPreventDismiss: !0, trackingLocation: 6 },
                          "InfScroll_NoDismissApp_" + e.match.params.appid,
                        ),
                    }),
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.WorkshopHub(":appid(\\d+)"),
                      render: (e) =>
                        (0, a.createElement)(H, {
                          ...e,
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(c.qh, {
                      path: s.g5.AppHub(":appid"),
                      render: (e) =>
                        (0, a.createElement)(k, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        }),
                    }),
                    (0, o.jsx)(c.qh, {
                      path: s.g5.GroupHub(":group_vanity"),
                      render: (e) =>
                        (0, a.createElement)(k, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
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
