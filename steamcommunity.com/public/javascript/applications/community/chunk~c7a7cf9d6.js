/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3584],
  {
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    62734: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => a });
      var i = n(81393);
      var s = n(78327);
      class a {
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          var e;
          return null === (e = this.m_HomeView) || void 0 === e
            ? void 0
            : e.home;
        }
        static Get() {
          var e;
          return (
            a.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, i.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (a.s_globalSingletonStore = new a()),
              "dev" == s.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = a.s_globalSingletonStore)),
            a.s_globalSingletonStore
          );
        }
        constructor() {
          (this.m_HomeView = void 0),
            "dev" === s.TS.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = (0, s.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, s.Tc)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ...(null == e ? void 0 : e.all),
                ...(null == e ? void 0 : e.maincap),
              })
            : (this.m_HomeView = {
                home: {
                  ...(null == e ? void 0 : e.all),
                  ...(null == e ? void 0 : e.maincap),
                },
              });
        }
      }
    },
    46067: (e, t, n) => {
      "use strict";
      n.d(t, { dP: () => H, v0: () => M, Zr: () => F });
      var i,
        s = n(34629),
        a = n(41735),
        r = n.n(a),
        o = n(14947),
        l = n(19367),
        d = n.n(l),
        c = n(37085),
        m = n(47822),
        p = n(17720),
        u = n(82429),
        h = n(91254),
        g = n(16021),
        _ = n(99032),
        S = n(81393),
        v = n(68797),
        I = n(6419),
        C = n(61859),
        f = n(78327),
        y = n(30894),
        E = n(81477),
        w = n(46910);
      !(function (e) {
        (e.Default = "default"),
          (e.Upcoming = "upcoming"),
          (e.Featured = "featured"),
          (e.Press = "press"),
          (e.Steam = "steam"),
          (e.Halloween = "halloween"),
          (e.Dev_Sales = "sales"),
          (e.Dev_All = "all"),
          (e.Dev_AssociatedPress = "associated_press");
      })(i || (i = {}));
      new Map();
      var B = n(44165),
        A = n(1059);
      function G(e, t, n, i) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: i,
          bIsFutureSection: n >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class k {
        constructor(e, t) {
          (this.m_nForwardStuckCount = 0),
            (this.m_nBackwardStuckCount = 0),
            (this.m_mapCalendarAppsByID = new Map()),
            (this.m_mapCalendarClansByID = new Map()),
            (this.m_mapCalendarEventsByGid = new Map()),
            (this.m_rgSortedCalendarEvents = new Array()),
            (this.m_currentView = o.sH.box(null)),
            (this.m_bFinishedSearchingForward = !1),
            (this.m_bFinishedSearchingBackward = !1),
            (this.m_rgCalendarSections = []),
            (this.m_rgFutureSections = []),
            (this.m_collectionMetaData = void 0),
            (0, o.Gn)(this),
            (this.m_key = e),
            (this.m_visibilityStore = new w.vJ(t)),
            y.Fm.Get().HintLoad();
        }
        GetNumEventsLoaded() {
          return this.m_mapCalendarEventsByGid.size;
        }
        BIsGlobalCalendar() {
          return !(
            this.m_key.appids ||
            this.m_key.clanaccountids ||
            this.m_key.collectionid ||
            this.m_key.saleid
          );
        }
        BIsShowingFeaturedFeed() {
          return Boolean(
            this.GetCollectionID() === i.Featured ||
              (this.BIsGlobalCalendar() && !f.iA.accountid),
          );
        }
        BIsSingleSourceCalendar() {
          return Boolean(
            this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar(),
          );
        }
        GetKey() {
          return this.m_key;
        }
        BEventMatchCalendarSingleSource(e) {
          return (
            (this.BIsSingleAppCalendar() && this.m_key.appids[0] == e.appid) ||
            (this.BIsSingleGroupCalendar() &&
              this.m_key.clanaccountids[0] == e.clanid)
          );
        }
        BIsSingleSourceMuted() {
          return (
            !!this.BIsSingleSourceCalendar() &&
            (this.BIsSingleAppCalendar()
              ? A.S.Get().BIsMutedAppID(this.GetSingleAppID())
              : A.S.Get().BIsMutedClanID(this.GetSingleGroupID()))
          );
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length,
          );
        }
        GetSingleGroupID() {
          return this.m_key.clanaccountids[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          return this.m_key.appids[0];
        }
        BIsCollectionCalendar() {
          return !!this.m_key.collectionid;
        }
        GetCollectionID() {
          return this.m_key.collectionid;
        }
        BIsSaleCalendar() {
          return !!this.m_key.saleid;
        }
        GetSaleID() {
          return this.m_key.saleid;
        }
        BIsCalendarEndTimeSet() {
          return !!this.m_key.rtCalendarEnd;
        }
        GetCalendarEndTime() {
          return this.m_key.rtCalendarEnd;
        }
        SetCollectionMetaData(e) {
          this.m_collectionMetaData = e;
        }
        GetCollectionMetaData() {
          return this.m_collectionMetaData;
        }
        BHasCollectionMetaData() {
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(e) {
          const t = e;
          return (
            t &&
            "object" == typeof t &&
            t.clanid &&
            "number" == typeof t.clanid &&
            t.clan_event_gid &&
            "string" == typeof t.clan_event_gid
          );
        }
        SetFilteredView(e, t) {
          const n = this.m_currentView.get();
          n && n.dispose();
          const i = this.BIsSingleSourceMuted(),
            s = new D(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              t,
              i,
            );
          this.m_currentView.set(s);
        }
        BIsFilteredViewEmpty() {
          var e;
          return !!(null === (e = this.m_currentView.get()) || void 0 === e
            ? void 0
            : e.BIsViewEmpty());
        }
        GetCalendarItemsInTimeRange(e, t) {
          const n = this.m_currentView.get();
          return n
            ? n.GetCalendarItemsInTimeRange(e, t)
            : (console.error("calendar view not yet initialized"),
              { rgCalendarItems: [], bIsComplete: !1 });
        }
        GetActiveEventsAt(e) {
          const t = this.m_currentView.get();
          return t
            ? t.GetActiveEventsAt(e)
            : (console.error("calendar view not yet initialized"), []);
        }
        GetCurrentlyLoadedEventCount(e, t) {
          var n;
          return null === (n = this.m_currentView.get()) || void 0 === n
            ? void 0
            : n.GetCurrentlyLoadedEventCount(e, t);
        }
        GetCurrentlyLoadedItemsForStats() {
          var e;
          return (
            (null === (e = this.m_currentView.get()) || void 0 === e
              ? void 0
              : e.GetCurrentlyLoadedEvents()) || []
          );
        }
        GetCalendarSections(e) {
          return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = B.HD.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            n = e.getTime() / 1e3;
          t.push(G(n, (0, C.we)("#EventCalendar_FutureEventsHeader"), n));
          const i = new Date(e);
          i.setHours(0, 0, 0, 1);
          let s = i.getTime() / 1e3;
          t.push(G(n, (0, C.we)("#Time_Today"), s, n)),
            i.setDate(i.getDate() - 1);
          let a = s;
          (s = i.getTime() / 1e3),
            t.push(G(n, (0, C.we)("#Time_Yesterday"), s, a));
          const r =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = r ? r.start_time : n;
          let l = o > s;
          for (let e = 0; e < 5 && !l; e++)
            i.setDate(i.getDate() - 1),
              (a = s),
              (s = i.getTime() / 1e3),
              t.push(G(n, (0, C.cc)(i), s, a)),
              (l = o > s);
          const d = new Date(i);
          let c = s;
          for (; d.getMonth() == e.getMonth() && 1 != d.getDate() && !l; ) {
            d.setDate(d.getDate() - 7);
            const e = d.getTime() / 1e3;
            t.push(G(n, (0, C.lQ)(c - 1), e, c)), (l = o > e), (c = e);
          }
          const m = new Date(e);
          m.setHours(0, 0, 0, 1), m.setDate(1);
          let p = c;
          for (let i = 1; !l; i++) {
            const s = new Date(m);
            s.setMonth(e.getMonth() - i, 1);
            const a = s.getTime() / 1e3;
            t.push(G(n, (0, C.lQ)(a), a, p)), (l = o > a), (p = a);
          }
          this.m_rgCalendarSections.length > t.length
            ? this.m_rgCalendarSections.splice(
                t.length,
                this.m_rgCalendarSections.length,
              )
            : t
                .splice(this.m_rgCalendarSections.length, t.length)
                .forEach((e) => this.m_rgCalendarSections.push(e));
        }
        InitFutureCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [];
          let n;
          this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
          const i =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          i && (n = i.start_time), n || (n = e.getTime() / 1e3);
          const s = e.getTime() / 1e3,
            a = new Date(e);
          a.setHours(24, 0, 0, 0);
          let r = a.getTime() / 1e3;
          t.push(
            G(
              s,
              (0, C.we)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              s,
              r,
            ),
          );
          let o = n <= r,
            l = r;
          a.setDate(a.getDate() + 1),
            (r = a.getTime() / 1e3),
            o || t.push(G(s, (0, C.we)("#Time_Tomorrow"), l, r)),
            (o = n <= r);
          const c = 6 - d()(e).weekday();
          for (let e = 2; e <= c && !o; e++) {
            l = r;
            const e = (0, C.cc)(a);
            a.setDate(a.getDate() + 1),
              (r = a.getTime() / 1e3),
              t.push(G(s, e, l, r)),
              (o = n <= r);
          }
          if (this.m_key.bSectionByDay)
            for (; !o; ) {
              l = r;
              const e = (0, C.$w)(a);
              a.setDate(a.getDate() + 1),
                (r = a.getTime() / 1e3),
                t.push(G(s, e, l, r)),
                (o = n <= r);
            }
          else {
            const i = new Date(a);
            let l = r;
            const c = d()(e).daysInMonth();
            if (i.getMonth() == e.getMonth() && i.getDate() != c && !o) {
              i.setDate(i.getDate() + 7);
              const e = i.getTime() / 1e3;
              t.push(G(s, (0, C.we)("#EventCalendar_NextWeek"), l, e)),
                (o = n <= e),
                (l = e);
            }
            const m = new Date(e);
            let p;
            if (
              (m.setMonth(m.getMonth() + 1),
              m.setDate(1),
              m.setHours(0, 0, 0, 0),
              i < m && !o)
            ) {
              const e = m.getTime() / 1e3;
              t.push(G(s, (0, C.we)("#EventCalendar_LaterThisMonth"), l, e)),
                (o = n <= e),
                (p = e);
            } else p = l;
            for (let i = 2; !o; i++) {
              const a = new Date(m);
              a.setMonth(e.getMonth() + i);
              const r = a.getTime() / 1e3;
              t.push(G(s, (0, C.lQ)(p), p, r)), (o = n <= r), (p = r);
            }
          }
          this.m_rgFutureSections.length > t.length
            ? this.m_rgFutureSections.splice(
                t.length,
                this.m_rgFutureSections.length,
              )
            : t
                .splice(this.m_rgFutureSections.length, t.length)
                .forEach((e) => this.m_rgFutureSections.push(e));
        }
        async RegisterCalendarEventsAndModels(e) {
          await y.Fm.Get().HintLoad(),
            (0, o.h5)(() => {
              this.RegisterCalendarApps(e.apps),
                this.RegisterCalendarClans(e.clans),
                this.RegisterCalendarEvents(e.documents),
                h.O3.RegisterClanEvents(e.events),
                this.RegisterReadEvents(e.events_read),
                this.RegisterEventVotes(e.event_votes),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                this.InitFutureCalendarSections(),
                this.SetCollectionMetaData(
                  this.ValidateCollectionMetadata(e.metadatainfo)
                    ? e.metadatainfo
                    : null,
                );
            });
        }
        RegisterCalendarApps(e) {
          if (e)
            for (const t of e) {
              if (this.m_mapCalendarAppsByID.has(t.appid)) continue;
              const e = new m.dF();
              (e.appid = t.appid),
                (e.source = t.source),
                (e.playtime = t.playtime),
                (e.last_played = t.last_played),
                (e.wishlist_added = t.wishlist_added),
                this.m_mapCalendarAppsByID.set(t.appid, e),
                t.hidden &&
                  this.m_visibilityStore.SetAppVisibility(t.appid, !1);
            }
        }
        RegisterCalendarClans(e) {
          if (e)
            for (const t of e)
              if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                const e = new m.w2();
                (e.clanid = t.clanid),
                  (e.source = t.source),
                  this.m_mapCalendarClansByID.set(t.clanid, e),
                  t.hidden &&
                    this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
              }
        }
        RegisterReadEvents(e) {
          if (!e) return;
          const t = u.KN.Get();
          for (const n of e) t.SetEventAsRead(n);
        }
        RegisterEventVotes(e) {
          if (!e) return;
          const t = u.KN.Get();
          for (const n of e) {
            const e = void 0 === n.vote ? void 0 : Boolean(n.vote);
            t.SetVote(n.id, e);
          }
        }
        RegisterCalendarEvents(e) {
          if (e) {
            let t = !1;
            for (const n of e)
              this.BInternalInsertCalendarEventItem(n) && (t = !0);
            t && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(e) {
          return "forward" == e
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(e, t = void 0) {
          return "forward" === e
            ? this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[0].start_time
              : t
            : this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ].start_time
              : t;
        }
        UpdateStuckCounters(e, t) {
          const n =
              "forward" === e
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            i = this.GetTimeEdgeForDirection(e, void 0);
          return n || i !== t
            ? ("forward" == e
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == e
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(e) {
          return "forward" === e
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(e, t) {
          (0, S.wT)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e,
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        async LoadAdditionalEvents(e, t) {
          if (this.BHitEventHorizon(e)) return c.R;
          let n = this.GetRequestInFlight(e);
          if (n) return n;
          const i =
              f.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            s =
              "forward" === e
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            a = s < 3 ? s : 0,
            o = s >= 3 ? 1 : 0,
            l = ("dev" === f.TS.WEB_UNIVERSE ? 50 : 250) + 50 * a,
            d = this.GetTimeEdgeForDirection(e, B.HD.GetTimeNowWithOverride()),
            m = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: l,
              populateEvents: 15,
              appTypes: this.m_visibilityStore.GetGameSources().join(","),
              eventTypes: Array.from(
                this.m_visibilityStore.enabledEventTypeSet,
              ).join(","),
              appIdFilter: Boolean(
                this.m_key.appids && this.m_key.appids.length > 0,
              )
                ? this.m_key.appids.sort().join(",")
                : void 0,
              clanIdFilter: Boolean(
                this.m_key.clanaccountids &&
                  this.m_key.clanaccountids.length > 0,
              )
                ? this.m_key.clanaccountids.sort().join(",")
                : void 0,
              collectionID: this.m_key.collectionid,
              saleID: this.m_key.saleid,
              hubtype: this.m_key.hubtype,
              category_or_language: this.m_key.category_or_language,
              tag_name: this.m_key.tag_name,
              tags: this.m_key.rgTags
                ? this.m_key.rgTags.slice().sort().join(",")
                : void 0,
            };
          "forward" === e
            ? ((m.minTime = Math.floor(d + o)), (m.ascending = !0))
            : ((m.maxTime = Math.floor(d - o)), (m.ascending = !1));
          return (
            (n = r()
              .get(i, {
                params: m,
                cancelToken: t ? t.token : void 0,
                withCredentials: !0,
              })
              .then(async (n) => {
                if ((this.SetRequestInFlight(e, null), n.data.success == c.R)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(n.data),
                    this.UpdateStuckCounters(e, d))
                  )
                    return this.LoadAdditionalEvents(e, t);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + n.data.msg,
                  );
                return n.data.success;
              })
              .catch((t) => {
                this.SetRequestInFlight(e, null);
                let n = (0, v.H)(t);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + n.strErrorMsg,
                    n,
                  ),
                  "forward" == e
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  c.zi
                );
              })),
            this.SetRequestInFlight(e, n),
            n
          );
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              (0, S.wT)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!",
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
          const t = this.m_mapCalendarAppsByID.get(e.appid),
            n = this.m_mapCalendarClansByID.get(e.clanid);
          if (!t && !n)
            return console.log("No AppInfo or ClanInfo For: ", e), !1;
          const i = new m.NK();
          return (
            (i.clanid = e.clanid),
            (i.unique_id = e.unique_id),
            (i.event_type = e.event_type),
            (i.appid = e.appid),
            (i.start_time = e.start_time),
            (i.score = e.score),
            (i.appInfo = t),
            (i.clanInfo = n),
            this.m_rgSortedCalendarEvents.push(i),
            this.m_mapCalendarEventsByGid.set(i.unique_id, i),
            !0
          );
        }
        GetCalendarAppInfoForAppID(e) {
          return this.m_mapCalendarAppsByID.get(e);
        }
        RebuildSortedCalendarEventList() {
          const e = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = e.sort(
            (e, t) => t.start_time - e.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(e, t) {
          let n = e.appInfo ? e.appid : void 0,
            i = e.clanInfo ? e.clanInfo.clanid : void 0;
          null != n || null != i
            ? (await A.S.Get().UpdateCommunicationSetting(t, n, i),
              E.V.RecordAppInteractionEvent(n, E.E.k_eMuted))
            : (0, S.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
        }
        GetAllClans() {
          return Array.from(this.m_mapCalendarClansByID.keys());
        }
        GetAllApps() {
          return Array.from(this.m_mapCalendarAppsByID.keys());
        }
      }
      (0, s.Cg)([o.sH], k.prototype, "m_mapCalendarAppsByID", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_mapCalendarClansByID", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_bFinishedSearchingForward", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_rgCalendarSections", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_rgFutureSections", void 0),
        (0, s.Cg)([o.sH], k.prototype, "m_collectionMetaData", void 0),
        (0, s.Cg)([o.XI], k.prototype, "InitCalendarSections", null),
        (0, s.Cg)([o.XI], k.prototype, "InitFutureCalendarSections", null),
        (0, s.Cg)([o.XI], k.prototype, "RegisterCalendarEventsAndModels", null),
        (0, s.Cg)([o.XI], k.prototype, "RegisterCalendarApps", null),
        (0, s.Cg)([o.XI], k.prototype, "RegisterCalendarClans", null),
        (0, s.Cg)([o.XI], k.prototype, "RegisterReadEvents", null),
        (0, s.Cg)([o.XI], k.prototype, "RegisterEventVotes", null),
        (0, s.Cg)([o.XI], k.prototype, "RegisterCalendarEvents", null),
        (0, s.Cg)([I.o], k.prototype, "BHitEventHorizon", null),
        (0, s.Cg)([o.XI.bound], k.prototype, "LoadAdditionalEvents", null),
        (0, s.Cg)(
          [o.XI],
          k.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null,
        );
      class D {
        constructor(e, t, n, i, s, a) {
          (this.m_rgLoadedEventsBox = o.sH.box([])),
            (this.m_lastLoadLatch = null),
            (0, o.Gn)(this),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = n),
            (this.m_fnBIsEventInView = i),
            (this.m_bSkipStorePreferenceCheck = s),
            (this.m_bAllowMutedAndIgnoredSources = a),
            (this.m_rgAutorunDisposer = (0, o.fm)(async () => {
              const e = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const t = Array.from(
                  new Set(e.map((e) => e.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = e),
                  await g.A.Get().QueueMultipleAppRequests(t, {
                    ..._.jy,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != e)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(e);
            }));
        }
        dispose() {
          this.m_rgAutorunDisposer();
        }
        get viewFilteredEvents() {
          return this.m_fnGetUnfilteredEvents().filter((e) =>
            this.m_fnBIsEventInView(e),
          );
        }
        get filteredAndCheckedEvents() {
          return this.m_rgLoadedEventsBox.get().filter((e) => {
            if (e.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (A.S.Get().BIsMutedAppID(e.appid) ||
                  y.Fm.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, _.Li)(g.A.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (A.S.Get().BIsMutedClanID(e.clanid) ||
                y.Fm.Get().BIsIgnoringCurator(p.b.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const n = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? t && n.length > 0 && n[0].start_time > t
            : n.length > 0 && n[n.length - 1].start_time < t;
        }
        async EnsureRangeIsLoaded(e, t) {
          for (
            let e = 0;
            e < 100 && !this.BIsCompleteThroughTime("forward", t);
            e++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let t = 0;
            t < 100 && !this.BIsCompleteThroughTime("backward", e);
            t++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(e, t) {
          this.EnsureRangeIsLoaded(e, t);
          const n = this.filteredAndCheckedEvents.filter(
              (n) => n.start_time >= e && (!t || n.start_time < t),
            ),
            i = this.BIsCompleteThroughTime("forward", t),
            s = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: n, bIsComplete: i && s };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let n = 0;
          this.filteredAndCheckedEvents.forEach((i) => {
            i.start_time >= e && (!t || i.start_time < t) && n++;
          });
          const i = this.BIsCompleteThroughTime("forward", t),
            s = this.BIsCompleteThroughTime("backward", e);
          return { nCount: n, bIsComplete: i && s };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => h.O3.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (t) {
                const n = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < n;
              }
              return !1;
            });
        }
      }
      (0, s.Cg)([o.EW.struct], D.prototype, "viewFilteredEvents", null),
        (0, s.Cg)([o.EW.struct], D.prototype, "filteredAndCheckedEvents", null);
      const T = o.sH.box(null),
        b = new Map();
      function F(e, t) {
        let n = "";
        return (
          e.appids &&
            e.appids.length > 0 &&
            (n += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            e.clanaccountids.length > 0 &&
            (n += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (n += "collection:" + e.collectionid),
          e.saleid && (n += "sale:" + e.saleid),
          e.bSectionByDay && (n += "_sectionbyday"),
          e.rtCalendarEnd && (n += "_end:" + e.rtCalendarEnd),
          e.rgTags &&
            e.rgTags.length > 0 &&
            (n += "_tags:" + e.rgTags.slice().sort().join(",")),
          e.hubtype &&
            (n +=
              "_hubtype:" +
              e.hubtype +
              "_" +
              e.category_or_language +
              "_" +
              e.tag_name),
          T.get() !== n && (T.set(n), b.has(n) || b.set(n, new k(e, t))),
          n
        );
      }
      function M() {
        return null == T.get() && F({}), b.get(T.get());
      }
      function H() {
        return null !== T.get();
      }
      window.g_EventCalendarMap = b;
    },
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => d });
      var i = n(41735),
        s = n.n(i),
        a = n(78327),
        r = n(91254),
        o = n(70078),
        l = n(37085);
      class d extends r.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", a.TS.SESSIONID);
          let i =
              a.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            r = await s().post(i, n);
          if (r.data.success != l.R) throw r.data;
          return this.RemoveGIDFromList(e, o.cB + t), r.data;
        }
        static Get() {
          return (
            d.sm_Instance || ((d.sm_Instance = new d()), d.sm_Instance.Init()),
            d.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            d.sm_SummaryInstance ||
              ((d.sm_SummaryInstance = new d(!0)), d.sm_SummaryInstance.Init()),
            d.sm_SummaryInstance
          );
        }
      }
    },
    1059: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => m });
      var i = n(34629),
        s = n(41735),
        a = n.n(s),
        r = n(14947),
        o = n(37085),
        l = n(81393),
        d = n(68797),
        c = n(78327);
      class m {
        constructor() {
          (this.m_mapBlockedAppIds = new Map()),
            (this.m_mapBlockedClanIds = new Map()),
            (0, r.Gn)(this);
        }
        static Get() {
          return (
            m.s_globalSingletonStore ||
              ((m.s_globalSingletonStore = new m()),
              m.s_globalSingletonStore.Init()),
            m.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const e = (0, c.Tc)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(e) &&
            (("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
                  JSON.stringify(e),
              ),
            e.appids &&
              e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, !0)),
            e.clanids &&
              e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, !0)));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            ((Array.isArray(t.appids) && t.appids.length > 0) ||
              (Array.isArray(t.clanids) && t.clanids.length > 0))
          );
        }
        BIsEventBlocked(e) {
          return e.appid
            ? this.m_mapBlockedAppIds.has(e.appid)
            : !!e.clanInfo && this.m_mapBlockedClanIds.has(e.clanInfo.clanid);
        }
        BIsMutedAppID(e) {
          return this.m_mapBlockedAppIds.has(e);
        }
        BIsMutedClanID(e) {
          return this.m_mapBlockedClanIds.has(e);
        }
        async UpdateCommunicationSetting(e, t, n) {
          const i = c.TS.STORE_BASE_URL + "account/optoutappcommunication/",
            s = new FormData();
          if (
            (s.append("sessionid", c.TS.SESSIONID),
            s.append("allowCommunication", e ? "1" : "0"),
            t)
          ) {
            if (
              (!e && this.m_mapBlockedAppIds.has(t)) ||
              (e && !this.m_mapBlockedAppIds.has(t))
            )
              return !0;
            e
              ? this.m_mapBlockedAppIds.delete(t)
              : this.m_mapBlockedAppIds.set(t, !0),
              s.append("appId", t.toString());
          } else {
            if (!n)
              return (
                (0, l.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!e && this.m_mapBlockedClanIds.has(n)) ||
              (e && !this.m_mapBlockedClanIds.has(n))
            )
              return !0;
            e
              ? this.m_mapBlockedClanIds.delete(n)
              : this.m_mapBlockedClanIds.set(n, !0),
              s.append("clanId", n.toString());
          }
          try {
            return (await a().post(i, s)).data.success == o.R;
          } catch (e) {
            return (
              console.error(
                "Blocking app id hit error " + (0, d.H)(e).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, i.Cg)([r.sH], m.prototype, "m_mapBlockedAppIds", void 0),
        (0, i.Cg)([r.sH], m.prototype, "m_mapBlockedClanIds", void 0);
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => g });
      var i = n(34629),
        s = n(7850),
        a = n(75844),
        r = n(90626),
        o = n(73964),
        l = n(91254),
        d = n(68033),
        c = n(27658),
        m = n(738),
        p = n(73745),
        u = n(19332);
      function h(e) {
        const { event: t, closeModal: n } = e;
        return (0, s.jsx)(c.AD, {
          initialEvent: t,
          bShowOnlyInitialEvent: !0,
          partnerEventStore: l.O3,
          emoticonStore: d.A,
          showAppHeader: !0,
          closeModal: n,
        });
      }
      function g(e, t) {
        (0, m.pg)((0, s.jsx)(h, { event: e }), t);
      }
      let _ = class extends r.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = r.createRef());
        }
        componentDidMount() {
          this.props.fnClose &&
            (document.addEventListener("keydown", this.escFunction, !1),
            this.m_refFocus.current && this.m_refFocus.current.focus());
        }
        componentWillUnmount() {
          this.props.fnClose &&
            document.removeEventListener("keydown", this.escFunction, !1);
        }
        escFunction(e) {
          const { fnClose: t } = this.props;
          27 === e.keyCode && t && t();
        }
        OnBackgroundClick(e) {
          e.currentTarget == e.target && this.props.fnClose();
        }
        render() {
          const { event: e, langOverride: t, isPreview: n } = this.props;
          return (0, s.jsx)("div", {
            ref: this.m_refFocus,
            className: u.Main,
            onClick: this.OnBackgroundClick,
            children: (0, s.jsx)(
              c.He,
              {
                event: e,
                emoticonStore: d.A,
                partnerEventStore: o.$.Get(),
                langOverride: t,
                isPreview: n,
                bDisableBroadcastPlayer: !1,
              },
              e.GID,
            ),
          });
        }
      };
      (0, i.Cg)([p.oI], _.prototype, "escFunction", null),
        (0, i.Cg)([p.oI], _.prototype, "OnBackgroundClick", null),
        (_ = (0, i.Cg)([a.PA], _));
    },
    74976: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => p });
      var i = n(7850),
        s = n(6144),
        a = n(82429),
        r = n(34214),
        o = n(46067),
        l = n(81477),
        d = n(23338);
      class c {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const m = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(e) {
            if (e.bOldAnnouncement) return !1;
            const t = this.m_mapEvents.get(e.GID);
            return !t || !t.m_bHasBeenTracked;
          }
          StartTracking(e, t) {
            if (e.bOldAnnouncement) return;
            let n = this.m_mapEvents.get(e.GID);
            n || ((n = new c()), this.m_mapEvents.set(e.GID, n)),
              n.m_bHasBeenTracked ||
                n.m_fnSubmit ||
                ((n.m_fnSubmit = new s.LU()),
                n.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, e, t),
                ));
          }
          StopTracking(e) {
            const t = this.m_mapEvents.get(e.GID);
            t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
          }
          ReportImpression(e, t) {
            a.KN.Get().RecordEventShown(e, r.Tc.qC),
              t && l.V.RecordViewedEvent((0, o.v0)(), e.GID);
            const n = this.m_mapEvents.get(e.GID);
            n &&
              ((n.m_bHasBeenTracked = !0),
              n.m_fnSubmit.Cancel(),
              (n.m_fnSubmit = null));
          }
        })(),
        p = (e) => {
          const { event: t } = e;
          if (m.ShouldTrack(t)) {
            const n = () => m.StartTracking(t, e.recordNewsHubStats || !1),
              s = () => m.StopTracking(t);
            return (0, i.jsx)(d.Y, { onEnter: n, onLeave: s });
          }
          return null;
        };
    },
    8107: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => E });
      var i = n(34629),
        s = n(7850),
        a = n(41735),
        r = n.n(a),
        o = n(75844),
        l = n(90626),
        d = n(82429),
        c = n(68033),
        m = n(27658),
        p = n(9154),
        u = n(88843),
        h = n(64641),
        g = n.n(h),
        _ = n(22797),
        S = n(68797),
        v = n(78327),
        I = n(8527),
        C = n(30894),
        f = n(51272),
        y = n(84811);
      const E = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, v.Qn)();
        return (0, s.jsx)(y.tH, {
          children: (0, s.jsx)(w, { ...e, bShowOnlyInitialEvent: t || n }),
        });
      };
      let w = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { bLoading: !1, eventModel: this.props.eventModel }),
            (this.m_refParent = l.createRef()),
            (this.m_cancelSignal = r().CancelToken.source());
        }
        componentDidMount() {
          this.state.eventModel ||
            this.setState({ bLoading: !0 }, this.LoadEvent);
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.add(u.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.remove(u.BodyNoScroll);
        }
        GetBodyElement() {
          return this.m_refParent.current
            ? this.m_refParent.current.closest("body")
            : null;
        }
        async LoadEvent() {
          const {
            appid: e,
            clanSteamID: t,
            announcementGID: n,
            partnerEventStore: i,
            additionalParams: s,
          } = this.props;
          i.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            s,
            this.m_cancelSignal,
          )
            .then((e) => {
              e.length > 0
                ? this.setState(
                    { bLoading: !1, eventModel: e[0] },
                    this.HandleReadEvent,
                  )
                : (this.props.onEventNotFound && this.props.onEventNotFound(),
                  this.setState({ bLoading: !1 }));
            })
            .catch((e) => {
              let t = (0, S.H)(e);
              console.error(
                "EventInfiniteScrollModal failed " + t.strErrorMsg,
                t,
              ),
                this.setState({ bLoading: !1 });
            });
        }
        async HandleReadEvent() {
          const { eventModel: e } = this.state,
            { trackingLocation: t } = this.props;
          e &&
            e.BIsPartnerEvent() &&
            d.KN.Get()
              .GetTracker()
              .MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            d.KN.Get().GetTracker().Flush();
        }
        render() {
          const { bShowOnlyInitialEvent: e } = this.props,
            { bLoading: t, eventModel: n } = this.state;
          if (t)
            return (0, s.jsx)(p.EN, {
              active: !0,
              children: (0, s.jsx)("div", {
                className: g().FlexCenter,
                style: { height: "400px" },
                children: (0, s.jsx)(_.t, {}),
              }),
            });
          const {
            closeModal: i,
            appid: a,
            clanSteamID: r,
            className: o,
            partnerEventStore: l,
            showAppHeader: d,
            bPrimaryPageFeature: u,
            additionalParams: h,
            eventClassName: S,
          } = this.props;
          let v;
          I.TS.IN_CLIENT &&
            (null == n ? void 0 : n.appid) &&
            (C.Fm.Get().HintLoad(),
            C.Fm.Get().BOwnsApp(n.appid) &&
              (v = (e) =>
                (0, f.EP)(e, "steam://nav/games/details/" + n.appid)));
          const y = (0, s.jsx)(m.AD, {
            initialEvent: n,
            appid: a,
            clanSteamID: r,
            partnerEventStore: l,
            emoticonStore: c.A,
            closeModal: !u && i,
            showAppHeader: d,
            bShowOnlyInitialEvent: e,
            additionalParams: h,
            eventClassName: S,
            onAppIconClick: v,
          });
          return u
            ? y
            : (0, s.jsx)(p.EN, {
                active: !0,
                children: (0, s.jsx)("div", { className: o, children: y }),
              });
        }
      };
      w = (0, i.Cg)([o.PA], w);
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => C,
        H2: () => S,
        Li: () => I,
        S7: () => h,
        a9: () => f,
        jy: () => v,
        nt: () => _,
        sd: () => u,
        tJ: () => g,
      });
      var i = n(57876),
        s = n(97471),
        a = n(81886),
        r = n(22837),
        o = n(96171),
        l = n(30894),
        d = n(16021),
        c = n(78327),
        m = n(62734),
        p = n(81393);
      function u(e) {
        return d.A.Get().BIsStoreItemMissing(e.id, (0, s.SW)(e.type));
      }
      function h(e, t, n) {
        const i = new Array();
        return (
          null == e || e.forEach((e) => i.push({ id: e, type: "game" })),
          null == t || t.forEach((e) => i.push({ id: e, type: "sub" })),
          null == n || n.forEach((e) => i.push({ id: e, type: "bundle" })),
          i
        );
      }
      function g(e) {
        var t;
        const n = d.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
        return (
          (null === (t = null == n ? void 0 : n.GetBestPurchaseOption()) ||
          void 0 === t
            ? void 0
            : t.discount_pct) > 0
        );
      }
      function _(e) {
        var t;
        if (
          !(null === (t = m.f.Get().GetHomeView()) || void 0 === t
            ? void 0
            : t.localized)
        )
          return !0;
        const n = d.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
        return l.Fm.Get().BIsAnyLanguageEnabled(
          n.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function S(e, t, n) {
        if (!e || 0 == e.length) return [];
        const i = e.filter((e) => (0, a.fp)(e.type)).map((e) => e.id),
          s = e.filter((e) => "sub" === e.type).map((e) => e.id),
          r = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = i.filter((e) => !d.A.Get().BHasApp(e, t)),
            n = s.filter((e) => !d.A.Get().BHasApp(e, t)),
            a = r.filter((e) => !d.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || a.length > 0) &&
            (await Promise.all([
              d.A.Get().QueueMultipleAppRequests(e, t),
              d.A.Get().QueueMultiplePackageRequests(n, t),
              d.A.Get().QueueMultipleBundleRequests(a, t),
            ]));
        }
        const o = new Set();
        null == r ||
          r.forEach((e) => {
            const t = d.A.Get().GetBundle(e);
            null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
          }),
          null == s ||
            s.forEach((e) => {
              const t = d.A.Get().GetPackage(e);
              null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
            });
        const l = Array.from(o).filter((e) => !d.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await d.A.Get().QueueMultipleAppRequests(l, t)),
          i.forEach((e) => o.add(e)),
          n)
        ) {
          const e = Array.from(o)
            .map((e) => {
              const t = d.A.Get().GetApp(e);
              return (null == t ? void 0 : t.GetParentAppID())
                ? (o.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !d.A.Get().BHasApp(e, t));
          e.length > 0 && (await d.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(o).filter((e) => {
          const t = d.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const v = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function I(e) {
        var t;
        const n = l.Fm.Get();
        (0, p.wT)(n.BIsLoaded(), "Dynamic Store not loaded");
        const i =
            (null == e ? void 0 : e.GetAllLanguagesWithSomeSupport()) || [],
          s =
            null === (t = m.f.Get().GetHomeView()) || void 0 === t
              ? void 0
              : t.localized;
        return (
          !e ||
          (e.GetStoreItemType() == o.c6.qI &&
            (n.BIsGameIgnored(e.GetAppID()) ||
              n.BIsGameIgnored(e.GetParentAppID()))) ||
          n.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          n.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => n.BIsIgnoringCurator(e)) ||
          (s &&
            !(
              0 == i.length ||
              e.BHasSomeLanguageSupport(r.Bhc) ||
              n.BIsAnyLanguageEnabled(i)
            ))
        );
      }
      async function C(e, t, n, a) {
        let r = 0,
          o = 0;
        const m = [];
        await S(e, i.Xh, t);
        for (const i of e) {
          const e = d.A.Get().GetStoreItem(i.id, (0, s.SW)(i.type));
          if (!e) {
            r++;
            continue;
          }
          const c = e
            .GetIncludedAppIDs()
            .map((e) => d.A.Get().GetApp(e))
            .filter(Boolean);
          if ((c.push(e), t)) {
            const e = new Set(c.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => d.A.Get().GetApp(e))
                .filter(Boolean);
            t && c.push(...t);
          }
          c.some(a || I)
            ? (o++, n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(i)))
            : m.push(i);
        }
        return (
          "dev" === c.TS.WEB_UNIVERSE &&
            0 === m.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                r +
                " failed to load, " +
                o +
                " hidden by user filter.",
            ),
          m
        );
      }
      async function f(e, t, n, i, a, r, o) {
        let c = await C(
          e,
          t,
          o,
          a
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : I,
        );
        const m = [];
        for (const e of c) {
          const t = d.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
          if (!t) continue;
          const a = null == t ? void 0 : t.GetIncludedAppIDsOrSelf();
          let c = !1;
          n && (c = c || a.every((e) => l.Fm.Get().BIsGameOwned(e))),
            i && (c = c || a.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            r && (c = c || a.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            c ? o && o.push(e) : m.push(e);
        }
        return m;
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => h, pn: () => _, qx: () => g });
      var i = n(7850),
        s = n(68255),
        a = n(61859),
        r = n(12155),
        o = n(90626),
        l = n(52038),
        d = n(95695),
        c = n(84811),
        m = n(64734),
        p = n(65946),
        u = n(26408);
      function h(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: s,
            toggleMinimized: a,
            className: r,
            children: o,
            elAdditionalButtons: h,
          } = e,
          g = (0, p.q3)(() => s());
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: (0, l.A)(
                r,
                m.SectionTitleHeader,
                m.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, i.jsxs)("div", {
                  className: (0, l.A)(
                    d.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, i.jsx)(u.o, { tooltip: n })],
                }),
                (0, i.jsxs)("div", {
                  className: m.SectionTitleButtons,
                  children: [
                    h,
                    (0, i.jsx)(_, { bIsMinimized: g, fnToggleMinimize: a }),
                  ],
                }),
              ],
            }),
            !g && (0, i.jsx)(c.tH, { children: o }),
          ],
        });
      }
      function g(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return (0, i.jsx)(h, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, i.jsx)(s.$n, {
          "data-tooltip-text": (0, a.we)(o),
          onClick: n,
          children: e.bIsMinimized
            ? (0, i.jsx)(r.hz4, {})
            : (0, i.jsx)(r.Xjb, {}),
        });
      }
    },
  },
]);
