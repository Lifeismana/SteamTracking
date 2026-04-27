/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [261],
  {
    62734: (e, t, n) => {
      n.d(t, { f: () => i });
      var a = n(81393);
      var s = n(78327);
      class i {
        m_HomeView = void 0;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
        static Get() {
          var e;
          return (
            i.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, a.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (i.s_globalSingletonStore = new i()),
              "dev" == s.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = i.s_globalSingletonStore)),
            i.s_globalSingletonStore
          );
        }
        constructor() {
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
                ...e?.all,
                ...e?.maincap,
              })
            : (this.m_HomeView = { home: { ...e?.all, ...e?.maincap } });
        }
      }
    },
    95886: (e, t, n) => {
      n.d(t, { Zr: () => T, dP: () => F, v0: () => H });
      var a = n(34629),
        s = n(41735),
        i = n.n(s),
        r = n(14947),
        o = n(19367),
        l = n.n(o),
        d = n(47822),
        c = n(17720),
        m = n(60746),
        p = n(6379),
        u = n(16021),
        h = n(99032),
        _ = n(81393),
        g = n(68797),
        v = n(6419),
        S = n(61859),
        C = n(78327),
        I = n(30894),
        E = n(81477),
        f = n(46910),
        w = n(67540),
        y = n(44165),
        A = n(1059);
      function G(e, t, n, a) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: a,
          bIsFutureSection: n >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class B {
        m_nForwardStuckCount = 0;
        m_nBackwardStuckCount = 0;
        m_mapCalendarAppsByID = new Map();
        m_mapCalendarClansByID = new Map();
        m_mapCalendarEventsByGid = new Map();
        m_rgSortedCalendarEvents = new Array();
        m_visibilityStore;
        m_currentView = r.sH.box(null);
        m_bFinishedSearchingForward = !1;
        m_bFinishedSearchingBackward = !1;
        m_rgCalendarSections = [];
        m_rgFutureSections = [];
        m_dtInitTime;
        m_forwardRequestInFlight;
        m_backwardRequestInFlight;
        m_key;
        m_collectionMetaData = void 0;
        constructor(e, t) {
          (0, r.Gn)(this),
            (this.m_key = e),
            (this.m_visibilityStore = new f.vJ(t)),
            I.Fm.Get().HintLoad();
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
            this.GetCollectionID() === w.g.Featured ||
              (this.BIsGlobalCalendar() && !C.iA.accountid),
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
          const a = this.BIsSingleSourceMuted(),
            s = new D(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              t,
              a,
            );
          this.m_currentView.set(s);
        }
        BIsFilteredViewEmpty() {
          return !!this.m_currentView.get()?.BIsViewEmpty();
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
          return this.m_currentView.get()?.GetCurrentlyLoadedEventCount(e, t);
        }
        GetCurrentlyLoadedItemsForStats() {
          return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
        }
        GetCalendarSections(e) {
          return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = y.HD.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            n = e.getTime() / 1e3;
          t.push(G(n, (0, S.we)("#EventCalendar_FutureEventsHeader"), n));
          const a = new Date(e);
          a.setHours(0, 0, 0, 1);
          let s = a.getTime() / 1e3;
          t.push(G(n, (0, S.we)("#Time_Today"), s, n)),
            a.setDate(a.getDate() - 1);
          let i = s;
          (s = a.getTime() / 1e3),
            t.push(G(n, (0, S.we)("#Time_Yesterday"), s, i));
          const r =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = r ? r.start_time : n;
          let l = o > s;
          for (let e = 0; e < 5 && !l; e++)
            a.setDate(a.getDate() - 1),
              (i = s),
              (s = a.getTime() / 1e3),
              t.push(G(n, (0, S.cc)(a), s, i)),
              (l = o > s);
          const d = new Date(a);
          let c = s;
          for (; d.getMonth() == e.getMonth() && 1 != d.getDate() && !l; ) {
            d.setDate(d.getDate() - 7);
            const e = d.getTime() / 1e3;
            t.push(G(n, (0, S.lQ)(c - 1), e, c)), (l = o > e), (c = e);
          }
          const m = new Date(e);
          m.setHours(0, 0, 0, 1), m.setDate(1);
          let p = c;
          for (let a = 1; !l; a++) {
            const s = new Date(m);
            s.setMonth(e.getMonth() - a, 1);
            const i = s.getTime() / 1e3;
            t.push(G(n, (0, S.lQ)(i), i, p)), (l = o > i), (p = i);
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
          const a =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          a && (n = a.start_time), n || (n = e.getTime() / 1e3);
          const s = e.getTime() / 1e3,
            i = new Date(e);
          i.setHours(24, 0, 0, 0);
          let r = i.getTime() / 1e3;
          t.push(
            G(
              s,
              (0, S.we)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              s,
              r,
            ),
          );
          let o = n <= r,
            d = r;
          i.setDate(i.getDate() + 1),
            (r = i.getTime() / 1e3),
            o || t.push(G(s, (0, S.we)("#Time_Tomorrow"), d, r)),
            (o = n <= r);
          const c = 6 - l()(e).weekday();
          for (let e = 2; e <= c && !o; e++) {
            d = r;
            const e = (0, S.cc)(i);
            i.setDate(i.getDate() + 1),
              (r = i.getTime() / 1e3),
              t.push(G(s, e, d, r)),
              (o = n <= r);
          }
          if (this.m_key.bSectionByDay)
            for (; !o; ) {
              d = r;
              const e = (0, S.$w)(i);
              i.setDate(i.getDate() + 1),
                (r = i.getTime() / 1e3),
                t.push(G(s, e, d, r)),
                (o = n <= r);
            }
          else {
            const a = new Date(i);
            let d = r;
            const c = l()(e).daysInMonth();
            if (a.getMonth() == e.getMonth() && a.getDate() != c && !o) {
              a.setDate(a.getDate() + 7);
              const e = a.getTime() / 1e3;
              t.push(G(s, (0, S.we)("#EventCalendar_NextWeek"), d, e)),
                (o = n <= e),
                (d = e);
            }
            const m = new Date(e);
            let p;
            if (
              (m.setMonth(m.getMonth() + 1),
              m.setDate(1),
              m.setHours(0, 0, 0, 0),
              a < m && !o)
            ) {
              const e = m.getTime() / 1e3;
              t.push(G(s, (0, S.we)("#EventCalendar_LaterThisMonth"), d, e)),
                (o = n <= e),
                (p = e);
            } else p = d;
            for (let a = 2; !o; a++) {
              const i = new Date(m);
              i.setMonth(e.getMonth() + a);
              const r = i.getTime() / 1e3;
              t.push(G(s, (0, S.lQ)(p), p, r)), (o = n <= r), (p = r);
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
          await I.Fm.Get().HintLoad(),
            (0, r.h5)(() => {
              this.RegisterCalendarApps(e.apps),
                this.RegisterCalendarClans(e.clans),
                this.RegisterCalendarEvents(e.documents),
                p.O3.RegisterClanEvents(e.events),
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
              const e = new d.dF();
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
                const e = new d.w2();
                (e.clanid = t.clanid),
                  (e.source = t.source),
                  this.m_mapCalendarClansByID.set(t.clanid, e),
                  t.hidden &&
                    this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
              }
        }
        RegisterReadEvents(e) {
          if (!e) return;
          const t = m.KN.Get();
          for (const n of e) t.SetEventAsRead(n);
        }
        RegisterEventVotes(e) {
          if (!e) return;
          const t = m.KN.Get();
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
            a = this.GetTimeEdgeForDirection(e, void 0);
          return n || a !== t
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
          (0, _.wT)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e,
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        async LoadAdditionalEvents(e, t) {
          if (this.BHitEventHorizon(e)) return 1;
          let n = this.GetRequestInFlight(e);
          if (n) return n;
          const a =
              C.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            s =
              "forward" === e
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            r = s < 3 ? s : 0,
            o = s >= 3 ? 1 : 0,
            l = ("dev" === C.TS.WEB_UNIVERSE ? 50 : 250) + 50 * r,
            d = this.GetTimeEdgeForDirection(e, y.HD.GetTimeNowWithOverride()),
            c = {
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
            ? ((c.minTime = Math.floor(d + o)), (c.ascending = !0))
            : ((c.maxTime = Math.floor(d - o)), (c.ascending = !1));
          return (
            (n = i()
              .get(a, {
                params: c,
                cancelToken: t ? t.token : void 0,
                withCredentials: !0,
              })
              .then(async (n) => {
                if ((this.SetRequestInFlight(e, null), 1 == n.data.success)) {
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
                let n = (0, g.H)(t);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + n.strErrorMsg,
                    n,
                  ),
                  "forward" == e
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  2
                );
              })),
            this.SetRequestInFlight(e, n),
            n
          );
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              (0, _.wT)(
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
          const a = new d.NK();
          return (
            (a.clanid = e.clanid),
            (a.unique_id = e.unique_id),
            (a.event_type = e.event_type),
            (a.appid = e.appid),
            (a.start_time = e.start_time),
            (a.score = e.score),
            (a.appInfo = t),
            (a.clanInfo = n),
            this.m_rgSortedCalendarEvents.push(a),
            this.m_mapCalendarEventsByGid.set(a.unique_id, a),
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
            a = e.clanInfo ? e.clanInfo.clanid : void 0;
          null != n || null != a
            ? (await A.S.Get().UpdateCommunitionSetting(t, n, a),
              E.V.RecordAppInteractionEvent(n, E.E.k_eMuted))
            : (0, _.wT)(
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
      (0, a.Cg)([r.sH], B.prototype, "m_mapCalendarAppsByID", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_mapCalendarClansByID", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_bFinishedSearchingForward", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_rgCalendarSections", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_rgFutureSections", void 0),
        (0, a.Cg)([r.sH], B.prototype, "m_collectionMetaData", void 0),
        (0, a.Cg)([r.XI], B.prototype, "InitCalendarSections", null),
        (0, a.Cg)([r.XI], B.prototype, "InitFutureCalendarSections", null),
        (0, a.Cg)([r.XI], B.prototype, "RegisterCalendarEventsAndModels", null),
        (0, a.Cg)([r.XI], B.prototype, "RegisterCalendarApps", null),
        (0, a.Cg)([r.XI], B.prototype, "RegisterCalendarClans", null),
        (0, a.Cg)([r.XI], B.prototype, "RegisterReadEvents", null),
        (0, a.Cg)([r.XI], B.prototype, "RegisterEventVotes", null),
        (0, a.Cg)([r.XI], B.prototype, "RegisterCalendarEvents", null),
        (0, a.Cg)([v.o], B.prototype, "BHitEventHorizon", null),
        (0, a.Cg)([r.XI.bound], B.prototype, "LoadAdditionalEvents", null),
        (0, a.Cg)(
          [r.XI],
          B.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null,
        );
      class D {
        m_rgLoadedEventsBox = r.sH.box([]);
        m_lastLoadLatch = null;
        m_fnGetUnfilteredEvents;
        m_fnLoadAdditionalEvents;
        m_fnBHitEventHorizon;
        m_fnBIsEventInView;
        m_bSkipStorePreferenceCheck;
        m_bAllowMutedAndIgnoredSources;
        m_rgAutorunDisposer;
        constructor(e, t, n, a, s, i) {
          (0, r.Gn)(this),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = n),
            (this.m_fnBIsEventInView = a),
            (this.m_bSkipStorePreferenceCheck = s),
            (this.m_bAllowMutedAndIgnoredSources = i),
            (this.m_rgAutorunDisposer = (0, r.fm)(async () => {
              const e = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const t = Array.from(
                  new Set(e.map((e) => e.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = e),
                  await u.A.Get().QueueMultipleAppRequests(t, {
                    ...h.jy,
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
                  I.Fm.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, h.Li)(u.A.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (A.S.Get().BIsMutedClanID(e.clanid) ||
                I.Fm.Get().BIsIgnoringCurator(c.b.InitFromClanID(e.clanid)))
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
            a = this.BIsCompleteThroughTime("forward", t),
            s = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: n, bIsComplete: a && s };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let n = 0;
          this.filteredAndCheckedEvents.forEach((a) => {
            a.start_time >= e && (!t || a.start_time < t) && n++;
          });
          const a = this.BIsCompleteThroughTime("forward", t),
            s = this.BIsCompleteThroughTime("backward", e);
          return { nCount: n, bIsComplete: a && s };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => p.O3.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (t) {
                const n = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < n;
              }
              return !1;
            });
        }
      }
      (0, a.Cg)([r.EW.struct], D.prototype, "viewFilteredEvents", null),
        (0, a.Cg)([r.EW.struct], D.prototype, "filteredAndCheckedEvents", null);
      const k = r.sH.box(null),
        b = new Map();
      function T(e, t) {
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
          k.get() !== n && (k.set(n), b.has(n) || b.set(n, new B(e, t))),
          n
        );
      }
      function H() {
        return null == k.get() && T({}), b.get(k.get());
      }
      function F() {
        return null !== k.get();
      }
      window.g_EventCalendarMap = b;
    },
    67540: (e, t, n) => {
      n.d(t, { d: () => l, g: () => a });
      var a,
        s = n(75113),
        i = n(61859),
        r = n(78327);
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
      })(a || (a = {}));
      const o = new Map();
      function l(e) {
        return (
          0 == o.size &&
            (function () {
              const e = (0, s.LJ)();
              o.set(a.Default, {
                id: a.Default,
                strUrl: `${e}/`,
                strName: (0, i.we)("#EventCalendar_NewsChannel_YourNews"),
                strSubtitle: (0, i.we)(
                  "#EventCalendar_NewsChannel_Personalized",
                ),
                strHeaderTitle: (0, i.we)(
                  "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
                ),
              }),
                o.set(a.Upcoming, {
                  id: a.Upcoming,
                  strUrl: `${e}/?upcoming=1`,
                  strName: (0, i.we)("#EventCalendar_NewsChannel_Upcoming"),
                  strShortName: (0, i.we)(
                    "#EventCalendar_NewsChannel_UpcomingShort",
                  ),
                  strSubtitle: (0, i.we)(
                    "#EventCalendar_NewsChannel_Personalized",
                  ),
                }),
                o.set(a.Featured, {
                  id: a.Featured,
                  strUrl: `${e}/collection/featured/`,
                  strName: (0, i.we)("#EventCalendar_NewsChannel_Featured"),
                  strSubtitle: (0, i.we)(
                    "#EventCalendar_NewsChannel_TopSellers",
                  ),
                  strHeaderTitle: (0, i.we)(
                    "#EventCalendar_NewsChannel_Featured_HeaderTitle",
                  ),
                }),
                o.set(a.Press, {
                  id: a.Press,
                  strUrl: `${e}/collection/press/`,
                  strName: (0, i.we)("#EventCalendar_NewsChannel_Press"),
                  strHeaderTitle: (0, i.we)(
                    "#EventCalendar_Collection_News_Title",
                  ),
                  strHeaderSubtitle: (0, i.we)(
                    "#EventCalendar_Collection_News_Subtitle",
                  ),
                }),
                o.set(a.Steam, {
                  id: a.Steam,
                  strUrl: `${e}/collection/steam/`,
                  strName: (0, i.we)("#EventCalendar_NewsChannel_Steam"),
                  strSubtitle: (0, i.we)(
                    "#EventCalendar_NewsChannel_SteamSubtitle",
                  ),
                  strHeaderTitle: (0, i.we)(
                    "#EventCalendar_NewsChannel_Steam_HeaderTitle",
                  ),
                }),
                o.set(a.Halloween, {
                  id: a.Halloween,
                  strUrl: `${e}/collection/halloween/`,
                  strName: (0, i.we)("#EventCalendar_NewsChannel_Halloween"),
                  strSubtitle: (0, i.we)(
                    "#EventCalendar_NewsChannel_HalloweenSubtitle",
                  ),
                  strHeaderTitle: (0, i.we)(
                    "#EventCalendar_Collection_Halloween_Title",
                  ),
                  strHeaderSubtitle: (0, i.we)(
                    "#EventCalendar_Collection_Halloween_Subtitle",
                  ),
                }),
                o.set(a.Dev_Sales, {
                  id: a.Dev_Sales,
                  strUrl: `${e}/collection/sales/`,
                  strName: (0, i.we)("#EventCalendar_NewsChannel_AllSales"),
                }),
                r.iA.is_support &&
                  (o.set(a.Dev_All, {
                    id: a.Dev_All,
                    strUrl: `${e}/collection/all/`,
                    strName: (0, i.we)("#EventCalendar_NewsChannel_All"),
                    bIsValveOnly: !0,
                  }),
                  o.set(a.Dev_AssociatedPress, {
                    id: a.Dev_AssociatedPress,
                    strUrl: `${e}/collection/associated_press/`,
                    strName: (0, i.we)(
                      "#EventCalendar_NewsChannel_AssociatedPress",
                    ),
                    bIsValveOnly: !0,
                  }));
            })(),
          o.get(e)
        );
      }
    },
    1059: (e, t, n) => {
      n.d(t, { S: () => c });
      var a = n(34629),
        s = n(41735),
        i = n.n(s),
        r = n(14947),
        o = n(81393),
        l = n(68797),
        d = n(78327);
      class c {
        constructor() {
          (0, r.Gn)(this);
        }
        m_mapBlockedAppIds = new Map();
        m_mapBlockedClanIds = new Map();
        static s_globalSingletonStore;
        static Get() {
          return (
            c.s_globalSingletonStore ||
              ((c.s_globalSingletonStore = new c()),
              c.s_globalSingletonStore.Init()),
            c.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const e = (0, d.Tc)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(e) &&
            (("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
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
        async UpdateCommunitionSetting(e, t, n) {
          const a = d.TS.STORE_BASE_URL + "account/optoutappcommunication/",
            s = new FormData();
          if (
            (s.append("sessionid", d.TS.SESSIONID),
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
                (0, o.wT)(
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
            return 1 == (await i().post(a, s)).data.success;
          } catch (e) {
            return (
              console.error(
                "Blocking app id hit error " + (0, l.H)(e).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, a.Cg)([r.sH], c.prototype, "m_mapBlockedAppIds", void 0),
        (0, a.Cg)([r.sH], c.prototype, "m_mapBlockedClanIds", void 0);
    },
    68033: (e, t, n) => {
      n.d(t, { A: () => l, T: () => o });
      var a = n(30193),
        s = n(78327),
        i = n(41735),
        r = n.n(i);
      class o extends a.pN {
        constructor() {
          super();
        }
        BTransportReady() {
          return !0;
        }
        GetServerTime() {
          return s.TS.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
        }
        async RequestEmoticonListInternal() {
          let e = [];
          try {
            let t = await r().get(s.TS.CHAT_BASE_URL + "actions/EmoticonData", {
              withCredentials: !0,
            });
            if (t.data.emoticons)
              for (let n of t.data.emoticons) {
                let t = n.name;
                if (t.startsWith("^")) e.push({ name: t });
                else {
                  let a = { name: t.substr(1, t.length - 2) },
                    s = a.name.toLowerCase();
                  s != a.name && (a.name_normalized = s),
                    n.time_last_used && (a.last_used = n.time_last_used),
                    n.use_count && (a.use_count = n.use_count),
                    n.time_received && (a.time_received = n.time_received),
                    n.appid && (a.appid = n.appid),
                    e.push(a);
                }
              }
          } catch (e) {
            console.error("error loading emoticon list", e);
          }
          this.OnEmoticonListReceived(e);
        }
      }
      const l = new o();
    },
    8107: (e, t, n) => {
      n.d(t, { N: () => w });
      var a = n(34629),
        s = n(7850),
        i = n(41735),
        r = n.n(i),
        o = n(75844),
        l = n(90626),
        d = n(60746),
        c = n(68033),
        m = n(41550),
        p = n(51706),
        u = n(88843),
        h = n(64641),
        _ = n.n(h),
        g = n(22797),
        v = n(68797),
        S = n(78327),
        C = n(8527),
        I = n(30894),
        E = n(51272),
        f = n(84811);
      const w = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, S.Qn)();
        return (0, s.jsx)(f.tH, {
          children: (0, s.jsx)(y, { ...e, bShowOnlyInitialEvent: t || n }),
        });
      };
      let y = class extends l.Component {
        state = { bLoading: !1, eventModel: this.props.eventModel };
        m_refParent = l.createRef();
        m_cancelSignal = r().CancelToken.source();
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
            partnerEventStore: a,
            additionalParams: s,
          } = this.props;
          a.LoadAdjacentPartnerEventsByAnnouncement(
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
              let t = (0, v.H)(e);
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
                className: _().FlexCenter,
                style: { height: "400px" },
                children: (0, s.jsx)(g.t, {}),
              }),
            });
          const {
            closeModal: a,
            appid: i,
            clanSteamID: r,
            className: o,
            partnerEventStore: l,
            showAppHeader: d,
            bPrimaryPageFeature: u,
            additionalParams: h,
            eventClassName: v,
          } = this.props;
          let S;
          C.TS.IN_CLIENT &&
            n?.appid &&
            (I.Fm.Get().HintLoad(),
            I.Fm.Get().BOwnsApp(n.appid) &&
              (S = (e) =>
                (0, E.EP)(e, "steam://nav/games/details/" + n.appid)));
          const f = (0, s.jsx)(m.AD, {
            initialEvent: n,
            appid: i,
            clanSteamID: r,
            partnerEventStore: l,
            emoticonStore: c.A,
            closeModal: !u && a,
            showAppHeader: d,
            bShowOnlyInitialEvent: e,
            additionalParams: h,
            eventClassName: v,
            onAppIconClick: S,
          });
          return u
            ? f
            : (0, s.jsx)(p.EN, {
                active: !0,
                children: (0, s.jsx)("div", { className: o, children: f }),
              });
        }
      };
      y = (0, a.Cg)([o.PA], y);
    },
    35685: (e, t, n) => {
      n.d(t, { kH: () => $, rN: () => O, uY: () => z, zA: () => q });
      var a = n(7850),
        s = n(22837),
        i = n(41735),
        r = n.n(i),
        o = n(75844),
        l = n(65946),
        d = n(90626),
        c = n(76217),
        m = n(23310),
        p = n(62641),
        u = n(17720),
        h = n(7221),
        _ = n(4796),
        g = n(95886),
        v = n(60746),
        S = n(8107),
        C = n(75113),
        I = n(95695),
        E = n.n(I),
        f = n(72860),
        w = n(76684),
        y = n(12155),
        A = n(60014),
        G = n(62490),
        B = n(52038),
        D = n(61859),
        k = n(78327),
        b = n(84811),
        T = n(3088),
        H = n(22797),
        F = n(33924),
        N = n.n(F),
        M = n(706),
        x = n(18654),
        R = n.n(x),
        j = n(84518),
        L = n(38535),
        V = n(39777),
        P = n(35380),
        U = n(42834);
      const O = (0, o.PA)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: n,
              partnerEventStore: s,
              trackingLocation: i,
              bViewAllShowInfiniteScroll: o,
            } = e,
            l = u.b.InitFromClanID(t),
            p = (0, d.useRef)(null),
            [h, g] = (0, d.useState)(null),
            [I, f] = (0, d.useState)(!0),
            [w, y] = (0, d.useState)(!1);
          if (
            ((0, d.useEffect)(
              () => (
                (async () => {
                  p.current &&
                    p.current("PartnerEventRow Initializng new mount");
                  const e = r().CancelToken.source();
                  p.current = e.cancel;
                  const a = u.b.InitFromClanID(t);
                  await _.ac.LoadClanInfoForClanSteamID(a);
                  let o = await s.LoadAdjacentPartnerEventsByAnnouncement(
                    n,
                    a,
                    null,
                    4,
                    4,
                    { only_summaries: !0 },
                    e,
                  );
                  if (!e.token.reason) {
                    o = o || [];
                    let e = o
                      .filter((e) => e.GetAnnouncementGID() != n)
                      .map((e) => e.AnnouncementGID);
                    G.fW(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => s.GetClanEventFromAnnouncementGID(e))
                      .filter((e) => !!e);
                    if ((g(t), f(!1), i)) {
                      let e = v.KN.Get().GetTracker(),
                        a = !1;
                      if (s.BHasClanAnnouncementGID(n)) {
                        let t = s.GetClanEventFromAnnouncementGID(n);
                        t &&
                          t.BIsPartnerEvent() &&
                          t.BIsVisibleEvent() &&
                          (e.MarkEventRead(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            i,
                          ),
                          (a = !0));
                      }
                      t.length > 0 &&
                        (o
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((t) =>
                            e.MarkEventShown(
                              t.GID,
                              t.clanSteamID.GetAccountID(),
                              i,
                            ),
                          ),
                        (a = !0)),
                        a && e.Flush();
                    }
                  }
                })(),
                () => {
                  p.current && p.current("PartnerEventRow: unmounting");
                }
              ),
              [t, n, s, i],
            ),
            I)
          )
            return (0, a.jsx)(H.t, { position: "center", size: "medium" });
          if (0 == h.length) return (0, a.jsx)("div", {});
          const A = _.ac.GetClanInfoByClanAccountID(t);
          return (0, a.jsx)(b.tH, {
            children: (0, a.jsxs)("div", {
              className: (0, B.A)(N().OtherEventsCtn, "OtherEventsCtn"),
              children: [
                (0, a.jsxs)("div", {
                  className: E().EventSectionTitleCtn,
                  children: [
                    (0, a.jsxs)("div", {
                      className: (0, B.A)(
                        E().EventSectionTitle,
                        "EventSectionTitle",
                      ),
                      children: [
                        (0, D.PP)("#EventBrowse_MoreEventsTitle", A.group_name),
                        " ",
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: E().EventSectionSpacer,
                      children: " ",
                    }),
                    o
                      ? (0, a.jsx)("div", {
                          className: E().EventSectionMoreBtn,
                          onClick: () => y(!0),
                          children: (0, D.we)("#EventBrowse_MoreEventsBtn"),
                        })
                      : (0, a.jsx)(C.tj, {
                          eventModel: h[0],
                          route: C.PH.k_eViewWebSiteHub,
                          className: E().EventSectionMoreBtn,
                          children: (0, D.we)("#EventBrowse_MoreEventsBtn"),
                        }),
                  ],
                }),
                (0, a.jsx)(c.Z, {
                  className: N().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: m.iU.PREFERRED_CHILD,
                  children: h.map((e) =>
                    (0, a.jsx)(z, { event: e }, e.AnnouncementGID),
                  ),
                }),
                Boolean(w) &&
                  (0, a.jsx)(S.N, {
                    appid: h[0].appid,
                    clanSteamID: l,
                    announcementGID: h[0].AnnouncementGID,
                    closeModal: () => y(!1),
                    partnerEventStore: s,
                  }),
              ],
            }),
          });
        }),
        W = 30;
      function z(e) {
        const {
            event: t,
            imageURLOverride: n,
            bShowAssociatedApp: i,
            langOverride: r,
            onClick: o,
            eEventRount: c,
            bHidePrices: m,
          } = e,
          u = (0, L.Zj)(t.appid),
          [_, v, S, I, E, f] = (0, l.q3)(() => {
            const e = r || (0, s.sf)(k.TS.LANGUAGE),
              a = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, h.wI.capsule_main),
              i = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, h.wI.full);
            return [
              a,
              t.GetNameWithFallback(e) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(e),
              i,
              t.GetSubTitleWithLanguageFallback(e) || "",
            ];
          }),
          y = (0, P.$5)(t.appid),
          { data: A } = (0, V.lv)(y),
          G = [
            _,
            E !== _ ? E : void 0,
            A && (0, U.b0)(A, "main_capsule"),
          ].filter(Boolean),
          [D, b] = (0, d.useState)(_);
        if (!t)
          return (0, a.jsx)("div", { className: N().OtherEvents_EventCtn });
        const H = (0, g.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
          F = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let M = f;
        return (
          f && (f.length > W || v.length > W) && (M = void 0),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(C.tj, {
                className: (0, B.A)(
                  N().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  N().HoversEnabled,
                ),
                eventModel: t,
                route: c || C.PH.k_eView,
                onClick: o,
                preferredFocus: !0,
                children: [
                  (0, a.jsxs)("div", {
                    className: N().EventSummaryContainer,
                    children: [
                      (0, a.jsx)("div", {
                        className: N().EventSummaryType,
                        children: S,
                      }),
                      (0, a.jsx)("div", {
                        className: N().EventSummaryText,
                        children: I,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: N().OtherEvents_BGImage,
                    style: {
                      backgroundColor: "#ffffff",
                      backgroundImage: D ? `url(${(0, p.j3)(D)})` : "none",
                    },
                  }),
                  (0, a.jsxs)("div", {
                    className: N().OtherEvents_ContentCtn,
                    children: [
                      (0, a.jsx)("div", {
                        className: (0, B.A)(
                          N().OtherEvents_MainImageCtn,
                          u && N().MaskImages,
                        ),
                        children: (0, a.jsx)(T.c, {
                          rgSources: G,
                          onIncrementalError: (e, t, n) => {
                            n >= G.length && b(void 0), b(G[n + 1]);
                          },
                          className: N().OtherEvents_MainImage,
                          alt: "",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: N().OtherEvents_TextCtn,
                        children: [
                          (0, a.jsx)("div", {
                            className: N().OtherEvents_TextTitle,
                            children: v,
                          }),
                          Boolean(M) &&
                            (0, a.jsx)("div", {
                              className: N().OtherEvents_SubTitle,
                              children: M,
                            }),
                          Boolean(F > H)
                            ? (0, a.jsx)("div", {
                                className: (0, B.A)(
                                  N().UpcomingCtn,
                                  "UpcomingCtn",
                                ),
                                children: (0, a.jsx)(w.K4, {
                                  bSingleLine: !0,
                                  dateAndTime:
                                    t.GetStartTimeAndDateUnixSeconds(),
                                }),
                              })
                            : (0, a.jsx)(w.K4, {
                                bSingleLine: !0,
                                bOnlyDate: !0,
                                dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Boolean(i && t.appid) &&
                (0, a.jsx)(q, { appid: t.appid, bHidePrice: m }),
            ],
          })
        );
      }
      function q(e) {
        const { appid: t, bHidePrice: n } = e,
          s = (0, P.$5)(t),
          { data: i } = (0, V.J$)(s),
          { data: r } = (0, V.lv)(s),
          { data: o } = (0, V.Q_)(s),
          l = (0, A.n9)(),
          d = (0, k.Qn)();
        if (!r || !i) return null;
        const m = o && o.hide_discount_pct_for_compliance;
        return (0, a.jsx)(j.A, {
          appID: t,
          children: (0, a.jsxs)(c.Z, {
            className: (0, B.A)(N().AppCapsuleCtn, "AppCapsuleCtn"),
            ...(0, f.S)(i, l, d, !1),
            children: [
              (0, a.jsx)(M.Q, {
                id: s,
                hoverProps: {
                  direction: "overlay",
                  style: { minWidth: "320px" },
                },
                children: (0, a.jsx)("img", {
                  className: (0, B.A)(N().AppCapsuleImage, N().CapsuleShadow),
                  src: (0, U.b0)(r, "small_capsule"),
                  alt: i.name,
                }),
              }),
              Boolean(!n && !i.is_free) &&
                (0, a.jsxs)("span", {
                  className: (0, B.A)(
                    N().AppCapsulePrice,
                    Boolean(o?.discount_pct) ? R().Discounted : "",
                  ),
                  children: [
                    Boolean(o?.discount_pct && m) &&
                      (0, a.jsx)("div", {
                        className: R().DiscountIconCtn,
                        children: (0, a.jsx)(y.XH_, {}),
                      }),
                    Boolean(o?.discount_pct && !m) &&
                      (0, a.jsx)("span", {
                        className: R().StoreSaleDiscountBox,
                        children: `-${o?.discount_pct}%`,
                      }),
                    o &&
                      o.final_price_in_cents &&
                      (0, a.jsx)("span", {
                        className: R().StoreSalePriceBox,
                        children: o.formatted_final_price,
                      }),
                  ],
                }),
            ],
          }),
        });
      }
      function $(e) {
        const { event: t, imageURLOverride: n, onClick: i } = e,
          r = (0, L.Zj)(t.appid),
          o = (0, P.$5)(t.appid),
          { data: d } = (0, V.lv)(o),
          c = (0, s.sf)(k.TS.LANGUAGE),
          [m, p, u, _, g] = (0, l.q3)(() =>
            t
              ? [
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        c,
                        h.wI.capsule_main,
                      ),
                  t.GetNameWithFallback(c),
                  t.GetCategoryAsString(),
                  t.GetSubTitleWithLanguageFallback(c),
                  t.GetSummaryWithFallback(c),
                ]
              : [void 0, void 0, void 0, void 0, void 0],
          );
        if (!t)
          return (0, a.jsx)("div", { className: N().OtherEvents_EventCtn });
        const v = [m, d && (0, U.b0)(d, "main_capsule")].filter(Boolean);
        return (0, a.jsxs)(C.tj, {
          className: N().OtherEvents_EventCtn + " " + N().HorizontalEvent,
          eventModel: t,
          route: C.PH.k_eView,
          onClick: i,
          children: [
            (0, a.jsx)("div", {
              className: N().OtherEvents_ContentCtn,
              children: (0, a.jsx)("div", {
                className: (0, B.A)(
                  N().OtherEvents_MainImageCtn,
                  r && N().MaskImages,
                ),
                children: (0, a.jsx)(T.c, {
                  rgSources: v,
                  className: N().OtherEvents_MainImage,
                  alt: "",
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: N().OtherEvents_TextCtn,
              children: [
                (0, a.jsxs)("div", {
                  className: N().HorizontalDescriptionCtn,
                  children: [
                    (0, a.jsx)("div", {
                      className: N().HorizontalDescription,
                      children: u,
                    }),
                    (0, a.jsx)(w.K4, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: N().HorizontalTitle,
                  children: p,
                }),
                _ &&
                  (0, a.jsx)("div", {
                    className: N().HorizontalSubTitle,
                    children: _,
                  }),
                g &&
                  (0, a.jsx)("div", {
                    className: N().HorizontalSummary,
                    children: g,
                  }),
              ],
            }),
          ],
        });
      }
    },
    99032: (e, t, n) => {
      n.d(t, {
        AX: () => S,
        H2: () => _,
        Li: () => v,
        S7: () => p,
        a9: () => C,
        jy: () => g,
        nt: () => h,
        sd: () => m,
        tJ: () => u,
      });
      var a = n(57876),
        s = n(62792),
        i = n(81886),
        r = n(30894),
        o = n(16021),
        l = n(78327),
        d = n(62734),
        c = n(81393);
      function m(e) {
        return o.A.Get().BIsStoreItemMissing(e.id, (0, s.SW)(e.type));
      }
      function p(e, t, n) {
        const a = new Array();
        return (
          e?.forEach((e) => a.push({ id: e, type: "game" })),
          t?.forEach((e) => a.push({ id: e, type: "sub" })),
          n?.forEach((e) => a.push({ id: e, type: "bundle" })),
          a
        );
      }
      function u(e) {
        const t = o.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function h(e) {
        if (!d.f.Get().GetHomeView()?.localized) return !0;
        const t = o.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
        return r.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function _(e, t, n) {
        if (!e || 0 == e.length) return [];
        const a = e.filter((e) => (0, i.fp)(e.type)).map((e) => e.id),
          s = e.filter((e) => "sub" === e.type).map((e) => e.id),
          r = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = a.filter((e) => !o.A.Get().BHasApp(e, t)),
            n = s.filter((e) => !o.A.Get().BHasApp(e, t)),
            i = r.filter((e) => !o.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || i.length > 0) &&
            (await Promise.all([
              o.A.Get().QueueMultipleAppRequests(e, t),
              o.A.Get().QueueMultiplePackageRequests(n, t),
              o.A.Get().QueueMultipleBundleRequests(i, t),
            ]));
        }
        const l = new Set();
        r?.forEach((e) => {
          const t = o.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => l.add(e));
        }),
          s?.forEach((e) => {
            const t = o.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => l.add(e));
          });
        const d = Array.from(l).filter((e) => !o.A.Get().BHasApp(e, t));
        if (
          (d.length > 0 && (await o.A.Get().QueueMultipleAppRequests(d, t)),
          a.forEach((e) => l.add(e)),
          n)
        ) {
          const e = Array.from(l)
            .map((e) => {
              const t = o.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (l.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !o.A.Get().BHasApp(e, t));
          e.length > 0 && (await o.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(l).filter((e) => {
          const t = o.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const g = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function v(e) {
        const t = r.Fm.Get();
        (0, c.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const n = e?.GetAllLanguagesWithSomeSupport() || [],
          a = d.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (0 == e.GetStoreItemType() &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (a &&
            !(
              0 == n.length ||
              e.BHasSomeLanguageSupport(0) ||
              t.BIsAnyLanguageEnabled(n)
            ))
        );
      }
      async function S(e, t, n, i) {
        let d = 0,
          c = 0;
        const m = [];
        await _(e, a.Xh, t);
        for (const a of e) {
          const e = o.A.Get().GetStoreItem(a.id, (0, s.SW)(a.type));
          if (!e) {
            d++;
            continue;
          }
          const l = e
            .GetIncludedAppIDs()
            .map((e) => o.A.Get().GetApp(e))
            .filter(Boolean);
          if ((l.push(e), t)) {
            const e = new Set(l.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => o.A.Get().GetApp(e))
                .filter(Boolean);
            t && l.push(...t);
          }
          l.some(i || v)
            ? (c++, n && (r.Fm.Get().BIsStoreItemOwned(e) || n.push(a)))
            : m.push(a);
        }
        return (
          "dev" === l.TS.WEB_UNIVERSE &&
            0 === m.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                d +
                " failed to load, " +
                c +
                " hidden by user filter.",
            ),
          m
        );
      }
      async function C(e, t, n, a, i, l, d) {
        let c = await S(
          e,
          t,
          d,
          i
            ? (e) =>
                !e ||
                r.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                r.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : v,
        );
        const m = [];
        for (const e of c) {
          const t = o.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
          if (!t) continue;
          const i = t?.GetIncludedAppIDsOrSelf();
          let c = !1;
          n && (c = c || i.every((e) => r.Fm.Get().BIsGameOwned(e))),
            a && (c = c || i.every((e) => r.Fm.Get().BIsGameWishlisted(e))),
            l && (c = c || i.every((e) => r.Fm.Get().BIsGameIgnored(e))),
            c ? d && d.push(e) : m.push(e);
        }
        return m;
      }
    },
  },
]);
