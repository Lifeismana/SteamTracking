/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2959],
  {
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    47822: (e, t, n) => {
      "use strict";
      n.d(t, { NK: () => o, bK: () => s, dF: () => l, w2: () => d });
      var s,
        i = n(16021),
        a = n(4796),
        r = n(61859);
      !(function (e) {
        (e[(e.k_eLibrary = 1)] = "k_eLibrary"),
          (e[(e.k_eWishlist = 2)] = "k_eWishlist"),
          (e[(e.k_eFollowing = 4)] = "k_eFollowing"),
          (e[(e.k_eRecommended = 8)] = "k_eRecommended"),
          (e[(e.k_eSteam = 16)] = "k_eSteam"),
          (e[(e.k_eRequired = 32)] = "k_eRequired"),
          (e[(e.k_eFeatured = 64)] = "k_eFeatured"),
          (e[(e.k_eCurator = 128)] = "k_eCurator"),
          (e[(e.k_eReposted = 256)] = "k_eReposted");
      })(s || (s = {}));
      class o {
        GetSource() {
          var e, t;
          return this.appInfo
            ? this.appInfo.source
            : null !==
                  (t =
                    null === (e = this.clanInfo) || void 0 === e
                      ? void 0
                      : e.source) && void 0 !== t
              ? t
              : 0;
        }
        static GetEntityNameForID(e, t) {
          var n, s;
          if (e)
            return null !==
              (s =
                null === (n = i.A.Get().GetApp(e)) || void 0 === n
                  ? void 0
                  : n.GetName()) && void 0 !== s
              ? s
              : (0, r.we)("#EventCalendar_MuteApp_Unknown");
          if (t) {
            const e = a.ac.GetClanInfoByClanAccountID(t);
            if (null == e ? void 0 : e.group_name) return e.group_name;
          }
          return (0, r.we)("#EventCalendar_MuteApp_Unknown");
        }
        static BHasEntityNameForID(e, t) {
          var n, s;
          return e
            ? Boolean(
                null === (n = i.A.Get().GetApp(e)) || void 0 === n
                  ? void 0
                  : n.GetName(),
              )
            : !!t &&
                !!(null === (s = a.ac.GetClanInfoByClanAccountID(t)) ||
                void 0 === s
                  ? void 0
                  : s.group_name);
        }
        GetEntityName() {
          return o.GetEntityNameForID(this.appid, this.clanid);
        }
        GetGameCapsule() {
          var e, t;
          if (this.appInfo)
            return null ===
              (t =
                null === (e = i.A.Get().GetApp(this.appInfo.appid)) ||
                void 0 === e
                  ? void 0
                  : e.GetAssets()) || void 0 === t
              ? void 0
              : t.GetMainCapsuleURL();
          if (this.clanInfo) {
            let e = a.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return (0, r.we)("#EventCalendar_MuteApp_Unknown");
        }
        GetGameIcon() {
          var e, t;
          if (this.appInfo)
            return null ===
              (t =
                null === (e = i.A.Get().GetApp(this.appInfo.appid)) ||
                void 0 === e
                  ? void 0
                  : e.GetAssets()) || void 0 === t
              ? void 0
              : t.GetCommunityIconURL();
          if (this.clanInfo) {
            let e = a.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return (0, r.we)("#EventCalendar_MuteApp_Unknown");
        }
      }
      class l {}
      class d {}
    },
    46067: (e, t, n) => {
      "use strict";
      n.d(t, { dP: () => N, v0: () => F, Zr: () => L });
      var s,
        i = n(34629),
        a = n(41735),
        r = n.n(a),
        o = n(14947),
        l = n(19367),
        d = n.n(l),
        c = n(37085),
        m = n(47822),
        u = n(91397),
        p = n(41838),
        h = n(49783),
        g = n(17720),
        _ = n(91254),
        C = n(16021),
        A = n(99032),
        I = n(81393),
        E = n(68797),
        v = n(6419),
        w = n(61859),
        y = n(78327),
        S = n(30894),
        k = n(46910);
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
      })(s || (s = {}));
      new Map();
      var D = n(44165),
        f = n(1059);
      function B(e, t, n, s) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: s,
          bIsFutureSection: n >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class M {
        constructor(e, t) {
          (this.m_nForwardStuckCount = 0),
            (this.m_nBackwardStuckCount = 0),
            (this.m_mapCalendarAppsByID = new Map()),
            (this.m_mapCalendarClansByID = new Map()),
            (this.m_mapCalendarEventsByGid = new Map()),
            (this.m_rgSortedCalendarEvents = new Array()),
            (this.m_currentView = o.sH.box(void 0)),
            (this.m_bFinishedSearchingForward = !1),
            (this.m_bFinishedSearchingBackward = !1),
            (this.m_rgCalendarSections = []),
            (this.m_rgFutureSections = []),
            (this.m_forwardRequestInFlight = null),
            (this.m_backwardRequestInFlight = null),
            (this.m_collectionMetaData = void 0),
            (0, o.Gn)(this),
            (this.m_key = e),
            (this.m_visibilityStore = new k.vJ(t)),
            S.Fm.Get().HintLoad();
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
            this.GetCollectionID() === s.Featured ||
              (this.BIsGlobalCalendar() && !y.iA.accountid),
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
          var t, n;
          return (
            (this.BIsSingleAppCalendar() &&
              (null === (t = this.m_key.appids) || void 0 === t
                ? void 0
                : t[0]) == e.appid) ||
            (this.BIsSingleGroupCalendar() &&
              (null === (n = this.m_key.clanaccountids) || void 0 === n
                ? void 0
                : n[0]) == e.clanid)
          );
        }
        BIsSingleSourceMuted() {
          if (!this.BIsSingleSourceCalendar()) return !1;
          if (this.BIsSingleAppCalendar()) {
            const e = this.GetSingleAppID();
            return void 0 !== e && f.S.Get().BIsMutedAppID(e);
          }
          const e = this.GetSingleGroupID();
          return void 0 !== e && f.S.Get().BIsMutedClanID(e);
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length,
          );
        }
        GetSingleGroupID() {
          var e;
          return null === (e = this.m_key.clanaccountids) || void 0 === e
            ? void 0
            : e[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          var e;
          return null === (e = this.m_key.appids) || void 0 === e
            ? void 0
            : e[0];
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
          return Boolean(
            t &&
              "object" == typeof t &&
              t.clanid &&
              "number" == typeof t.clanid &&
              t.clan_event_gid &&
              "string" == typeof t.clan_event_gid,
          );
        }
        SetFilteredView(e, t) {
          const n = this.m_currentView.get();
          n && n.dispose();
          const s = this.BIsSingleSourceMuted(),
            i = new G(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              Boolean(t),
              s,
            );
          this.m_currentView.set(i);
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
          var n, s;
          return null !==
            (s =
              null === (n = this.m_currentView.get()) || void 0 === n
                ? void 0
                : n.GetCurrentlyLoadedEventCount(e, t)) && void 0 !== s
            ? s
            : { nCount: 0, bIsComplete: !1 };
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
              (this.m_dtInitTime = D.HD.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            n = e.getTime() / 1e3;
          t.push(B(n, (0, w.we)("#EventCalendar_FutureEventsHeader"), n));
          const s = new Date(e);
          s.setHours(0, 0, 0, 1);
          let i = s.getTime() / 1e3;
          t.push(B(n, (0, w.we)("#Time_Today"), i, n)),
            s.setDate(s.getDate() - 1);
          let a = i;
          (i = s.getTime() / 1e3),
            t.push(B(n, (0, w.we)("#Time_Yesterday"), i, a));
          const r =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = r ? r.start_time : n;
          let l = o > i;
          for (let e = 0; e < 5 && !l; e++)
            s.setDate(s.getDate() - 1),
              (a = i),
              (i = s.getTime() / 1e3),
              t.push(B(n, (0, w.cc)(s), i, a)),
              (l = o > i);
          const d = new Date(s);
          let c = i;
          for (; d.getMonth() == e.getMonth() && 1 != d.getDate() && !l; ) {
            d.setDate(d.getDate() - 7);
            const e = d.getTime() / 1e3;
            t.push(B(n, (0, w.lQ)(c - 1), e, c)), (l = o > e), (c = e);
          }
          const m = new Date(e);
          m.setHours(0, 0, 0, 1), m.setDate(1);
          let u = c;
          for (let s = 1; !l; s++) {
            const i = new Date(m);
            i.setMonth(e.getMonth() - s, 1);
            const a = i.getTime() / 1e3;
            t.push(B(n, (0, w.lQ)(a), a, u)), (l = o > a), (u = a);
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
          const s = this.m_rgSortedCalendarEvents[0];
          s && (n = s.start_time), n || (n = e.getTime() / 1e3);
          const i = e.getTime() / 1e3,
            a = new Date(e);
          a.setHours(24, 0, 0, 0);
          let r = a.getTime() / 1e3;
          t.push(
            B(
              i,
              (0, w.we)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              i,
              r,
            ),
          );
          let o = n <= r,
            l = r;
          a.setDate(a.getDate() + 1),
            (r = a.getTime() / 1e3),
            o || t.push(B(i, (0, w.we)("#Time_Tomorrow"), l, r)),
            (o = n <= r);
          const c = 6 - d()(e).weekday();
          for (let e = 2; e <= c && !o; e++) {
            l = r;
            const e = (0, w.cc)(a);
            a.setDate(a.getDate() + 1),
              (r = a.getTime() / 1e3),
              t.push(B(i, e, l, r)),
              (o = n <= r);
          }
          if (this.m_key.bSectionByDay)
            for (; !o; ) {
              l = r;
              const e = (0, w.$w)(a);
              a.setDate(a.getDate() + 1),
                (r = a.getTime() / 1e3),
                t.push(B(i, e, l, r)),
                (o = n <= r);
            }
          else {
            const s = new Date(a);
            let l = r;
            const c = d()(e).daysInMonth();
            if (s.getMonth() == e.getMonth() && s.getDate() != c && !o) {
              s.setDate(s.getDate() + 7);
              const e = s.getTime() / 1e3;
              t.push(B(i, (0, w.we)("#EventCalendar_NextWeek"), l, e)),
                (o = n <= e),
                (l = e);
            }
            const m = new Date(e);
            let u;
            if (
              (m.setMonth(m.getMonth() + 1),
              m.setDate(1),
              m.setHours(0, 0, 0, 0),
              s < m && !o)
            ) {
              const e = m.getTime() / 1e3;
              t.push(B(i, (0, w.we)("#EventCalendar_LaterThisMonth"), l, e)),
                (o = n <= e),
                (u = e);
            } else u = l;
            for (let s = 2; !o; s++) {
              const a = new Date(m);
              a.setMonth(e.getMonth() + s);
              const r = a.getTime() / 1e3;
              t.push(B(i, (0, w.lQ)(u), u, r)), (o = n <= r), (u = r);
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
          await S.Fm.Get().HintLoad(),
            (0, o.h5)(() => {
              var t, n, s, i, a, r;
              this.RegisterCalendarApps(
                null !== (t = e.apps) && void 0 !== t ? t : [],
              ),
                this.RegisterCalendarClans(
                  null !== (n = e.clans) && void 0 !== n ? n : [],
                ),
                this.RegisterCalendarEvents(
                  null !== (s = e.documents) && void 0 !== s ? s : [],
                ),
                _.O3.RegisterClanEvents(
                  null !== (i = e.events) && void 0 !== i ? i : [],
                ),
                this.RegisterReadEvents(
                  null !== (a = e.events_read) && void 0 !== a ? a : [],
                ),
                this.RegisterEventVotes(
                  null !== (r = e.event_votes) && void 0 !== r ? r : [],
                ),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                this.InitFutureCalendarSections(),
                this.SetCollectionMetaData(
                  this.ValidateCollectionMetadata(e.metadatainfo)
                    ? e.metadatainfo
                    : void 0,
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
          e && (0, u.No)(e);
        }
        RegisterEventVotes(e) {
          e &&
            (0, p.mc)(
              e.map((e) => ({
                gidAnnouncement: e.id,
                vote: void 0 === e.vote ? null : e.vote ? "up" : "down",
              })),
            );
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
            s = this.GetTimeEdgeForDirection(e, void 0);
          return n || s !== t
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
          (0, I.wT)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e,
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        async LoadAdditionalEvents(e, t) {
          var n, s, i;
          if (this.BHitEventHorizon(e)) return c.R;
          let a = this.GetRequestInFlight(e);
          if (a) return a;
          const o =
              y.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            l =
              "forward" === e
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            d = l >= 3 ? 1 : 0,
            m = 250 + 50 * (l < 3 ? l : 0),
            u = D.HD.GetTimeNowWithOverride(),
            p =
              null !== (n = this.GetTimeEdgeForDirection(e, u)) && void 0 !== n
                ? n
                : u,
            h = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: m,
              populateEvents: 15,
              appTypes: this.m_visibilityStore.GetGameSources().join(","),
              eventTypes: Array.from(
                this.m_visibilityStore.enabledEventTypeSet,
              ).join(","),
              appIdFilter: (
                null === (s = this.m_key.appids) || void 0 === s
                  ? void 0
                  : s.length
              )
                ? this.m_key.appids.sort().join(",")
                : void 0,
              clanIdFilter: (
                null === (i = this.m_key.clanaccountids) || void 0 === i
                  ? void 0
                  : i.length
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
            ? ((h.minTime = Math.floor(p + d)), (h.ascending = !0))
            : ((h.maxTime = Math.floor(p - d)), (h.ascending = !1));
          return (
            (a = r()
              .get(o, {
                params: h,
                cancelToken: t ? t.token : void 0,
                withCredentials: !0,
              })
              .then(async (n) => {
                if ((this.SetRequestInFlight(e, null), n.data.success == c.R)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(n.data),
                    this.UpdateStuckCounters(e, p))
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
                let n = (0, E.H)(t);
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
            this.SetRequestInFlight(e, a),
            a
          );
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              (0, I.wT)(
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
          const s = new m.NK();
          return (
            (s.clanid = e.clanid),
            (s.unique_id = e.unique_id),
            (s.event_type = e.event_type),
            (s.appid = e.appid),
            (s.start_time = e.start_time),
            (s.score = e.score),
            (s.appInfo = t),
            (s.clanInfo = n),
            this.m_rgSortedCalendarEvents.push(s),
            this.m_mapCalendarEventsByGid.set(s.unique_id, s),
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
          const n = e.appInfo ? e.appid : void 0,
            s = e.clanInfo ? e.clanInfo.clanid : void 0;
          null != n || null != s
            ? (await f.S.Get().UpdateCommunicationSetting(t, n, s),
              (0, h.EG)(h.Eg.k_eMuted))
            : (0, I.wT)(
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
      (0, i.Cg)([o.sH], M.prototype, "m_mapCalendarAppsByID", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_mapCalendarClansByID", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_bFinishedSearchingForward", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_rgCalendarSections", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_rgFutureSections", void 0),
        (0, i.Cg)([o.sH], M.prototype, "m_collectionMetaData", void 0),
        (0, i.Cg)([o.XI], M.prototype, "InitCalendarSections", null),
        (0, i.Cg)([o.XI], M.prototype, "InitFutureCalendarSections", null),
        (0, i.Cg)([o.XI], M.prototype, "RegisterCalendarEventsAndModels", null),
        (0, i.Cg)([o.XI], M.prototype, "RegisterCalendarApps", null),
        (0, i.Cg)([o.XI], M.prototype, "RegisterCalendarClans", null),
        (0, i.Cg)([o.XI], M.prototype, "RegisterCalendarEvents", null),
        (0, i.Cg)([v.o], M.prototype, "BHitEventHorizon", null),
        (0, i.Cg)([o.XI.bound], M.prototype, "LoadAdditionalEvents", null),
        (0, i.Cg)(
          [o.XI],
          M.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null,
        );
      class G {
        constructor(e, t, n, s, i, a) {
          (this.m_rgLoadedEventsBox = o.sH.box([])),
            (this.m_lastLoadLatch = null),
            (0, o.Gn)(this),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = n),
            (this.m_fnBIsEventInView = s),
            (this.m_bSkipStorePreferenceCheck = i),
            (this.m_bAllowMutedAndIgnoredSources = a),
            (this.m_rgAutorunDisposer = (0, o.fm)(async () => {
              const e = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const t = Array.from(
                  new Set(e.map((e) => e.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = e),
                  await C.A.Get().QueueMultipleAppRequests(t, {
                    ...A.jy,
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
                (f.S.Get().BIsMutedAppID(e.appid) ||
                  S.Fm.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, A.Li)(C.A.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (f.S.Get().BIsMutedClanID(e.clanid) ||
                S.Fm.Get().BIsIgnoringCurator(g.b.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const n = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? !!t && n.length > 0 && n[0].start_time > t
            : void 0 !== t && n.length > 0 && n[n.length - 1].start_time < t;
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
            s = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: n, bIsComplete: s && i };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let n = 0;
          this.filteredAndCheckedEvents.forEach((s) => {
            s.start_time >= e && (!t || s.start_time < t) && n++;
          });
          const s = this.BIsCompleteThroughTime("forward", t),
            i = this.BIsCompleteThroughTime("backward", e);
          return { nCount: n, bIsComplete: s && i };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => _.O3.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (!t || void 0 === t.startTime) return !1;
              const n = t.endTime || t.startTime + 3600;
              return e >= t.startTime && e < n;
            });
        }
      }
      (0, i.Cg)([o.EW.struct], G.prototype, "viewFilteredEvents", null),
        (0, i.Cg)([o.EW.struct], G.prototype, "filteredAndCheckedEvents", null);
      const T = o.sH.box(null),
        b = new Map();
      function L(e, t) {
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
          T.get() !== n && (T.set(n), b.has(n) || b.set(n, new M(e, t))),
          n
        );
      }
      function F() {
        let e = T.get();
        return null == e && (e = L({})), b.get(e);
      }
      function N() {
        return null !== T.get();
      }
      window.g_EventCalendarMap = b;
    },
    46910: (e, t, n) => {
      "use strict";
      n.d(t, { FD: () => s, vJ: () => v });
      var s,
        i = n(34629),
        a = n(14947),
        r = n(22837),
        o = n(47822),
        l = n(81393),
        d = n(78327),
        c = n(49783),
        m = n(7860),
        u = n(44165),
        p = n(50140);
      !(function (e) {
        (e.k_ERecent = "recent"),
          (e.k_ELibrary = "library"),
          (e.k_EWishlist = "wishlist"),
          (e.k_EFollowing = "following"),
          (e.k_ERecommended = "recommended"),
          (e.k_ESteam = "steam"),
          (e.k_EFeatured = "featured"),
          (e.k_ECurator = "curator");
      })(s || (s = {}));
      const h = [
          s.k_ELibrary,
          s.k_EWishlist,
          s.k_EFollowing,
          s.k_ERecommended,
          s.k_ESteam,
          s.k_ECurator,
        ],
        g = [...h, s.k_EFeatured],
        _ = [s.k_EFeatured];
      var C;
      !(function (e) {
        (e.k_ENews = "news"),
          (e.k_EEvents = "events"),
          (e.k_EStreaming = "streaming"),
          (e.k_EUpdates = "updates"),
          (e.k_EReleases = "releases"),
          (e.k_ESales = "sales");
      })(C || (C = {}));
      const A = [
          C.k_ENews,
          C.k_EEvents,
          C.k_EStreaming,
          C.k_EUpdates,
          C.k_EReleases,
          C.k_ESales,
        ],
        I = new Map([
          [C.k_ENews, [r.uYK]],
          [C.k_EEvents, [r.L0X, r.I5b, r.zA, r.y6, r.hGl, r.WNR, r.pIh, r.izQ]],
          [C.k_EStreaming, [r.KDJ]],
          [C.k_EUpdates, [r.Fwr, r.u0, r.zeJ]],
          [C.k_EReleases, [r.yhO, r.Aqr, r.DEQ, r.f4X, r.zcX]],
          [C.k_ESales, [r.HRy, r.C$4, r.LOv, r.HFK]],
        ]);
      function E(e) {
        return new Map(e.map((e) => [e, !0]));
      }
      class v {
        constructor(e) {
          (this.m_mapEventTypeGroupsAllowed = new Map()),
            (this.m_mapGameSources = new Map()),
            (this.m_bCuratorUnhideOnFollowDialogDismissed = !1),
            (this.m_mapHiddenApps = new Map()),
            (this.m_mapHiddenClans = new Map()),
            (this.m_bInitializedForUpdatesOnly = !1),
            (this.m_eStorageType = "session"),
            (0, a.Gn)(this),
            (0, a.h5)(() => {
              (null == e ? void 0 : e.rgHiddenApps) &&
                e.rgHiddenApps.forEach((e) => this.m_mapHiddenApps.set(e, !0)),
                (null == e ? void 0 : e.rgHiddenClans) &&
                  e.rgHiddenClans.forEach((e) =>
                    this.m_mapHiddenClans.set(e, !0),
                  );
            });
        }
        GetGameSources() {
          return Array.from(this.m_mapGameSources.keys());
        }
        GetStorageObject() {
          return this.m_strStorageKey
            ? "session" === this.m_eStorageType
              ? window.sessionStorage
              : window.localStorage
            : null;
        }
        GetPreferencesStorageKey() {
          return `${this.m_strStorageKey}-event-calendar-prefs`;
        }
        get enabledEventTypeSet() {
          var e;
          const t = new Set();
          for (const n of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
            null === (e = I.get(n)) ||
              void 0 === e ||
              e.forEach((e) => t.add(e));
          return t;
        }
        MapClanEventTypeToGroup(e) {
          let t;
          return (
            I.forEach((n, s) => {
              -1 !== n.indexOf(e) && (t = s);
            }),
            t || C.k_EEvents
          );
        }
        InitDefaultCheckboxes(e, t, n) {
          (this.m_bInitializedForUpdatesOnly = t),
            (this.m_mapEventTypeGroupsAllowed = E(t ? [C.k_EUpdates] : A));
          const i = (0, d.Y2)() ? g : h;
          (this.m_mapGameSources = E(e ? i : _)),
            n && this.m_mapGameSources.set(s.k_EFeatured, !0);
        }
        Init(e, t, n, s, i) {
          (this.m_eStorageType = i), (this.m_strStorageKey = s);
          const a = this.GetStorageObject(),
            r = a ? a.getItem(this.GetPreferencesStorageKey()) : null;
          if (r) {
            const e = JSON.parse(r);
            if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
              const { rgEventTypeGroupsAllowed: t, rgGameSources: n } = e;
              return (
                (this.m_mapEventTypeGroupsAllowed = E(t)),
                (this.m_mapGameSources = E(n)),
                void (
                  void 0 !== e.bCuratorUnhideOnFollowDismissed &&
                  (this.m_bCuratorUnhideOnFollowDialogDismissed =
                    e.bCuratorUnhideOnFollowDismissed)
                )
              );
            }
          }
          this.InitDefaultCheckboxes(e, t, n);
        }
        SaveFilterPreferences() {
          const e = this.GetStorageObject();
          if (!e) return;
          const t = {
            rgEventTypeGroupsAllowed: Array.from(
              this.m_mapEventTypeGroupsAllowed.keys(),
            ),
            rgGameSources: Array.from(this.m_mapGameSources.keys()),
            bCuratorUnhideOnFollowDismissed:
              this.m_bCuratorUnhideOnFollowDialogDismissed,
          };
          e.setItem(this.GetPreferencesStorageKey(), JSON.stringify(t));
        }
        RecordFilterChange() {
          let e = 0;
          this.BIsGameSourceAllowed(s.k_ELibrary) && (e |= 1),
            this.BIsGameSourceAllowed(s.k_EWishlist) && (e |= 2),
            this.BIsGameSourceAllowed(s.k_EFollowing) && (e |= 4),
            this.BIsGameSourceAllowed(s.k_ERecommended) && (e |= 8),
            this.BIsGameSourceAllowed(s.k_ESteam) && (e |= 16),
            this.BIsGameSourceAllowed(s.k_EFeatured) && (e |= 32),
            this.BIsGameSourceAllowed(s.k_ERecent) && (e |= 64),
            this.BIsEventTypeGroupAllowed(C.k_ENews) && (e |= 1024),
            this.BIsEventTypeGroupAllowed(C.k_EEvents) && (e |= 2048),
            this.BIsEventTypeGroupAllowed(C.k_EStreaming) && (e |= 4096),
            this.BIsEventTypeGroupAllowed(C.k_EUpdates) && (e |= 8192),
            this.BIsEventTypeGroupAllowed(C.k_EReleases) && (e |= 16384),
            this.BIsEventTypeGroupAllowed(C.k_ESales) && (e |= 32768),
            (0, c.m4)(m.L, e);
        }
        BCuratorUnhideOnFollowDialogDismissed() {
          return this.m_bCuratorUnhideOnFollowDialogDismissed;
        }
        SetCuratorUnhideOnFollowDialogDismissed(e) {
          (this.m_bCuratorUnhideOnFollowDialogDismissed = e),
            this.SaveFilterPreferences();
        }
        BIsEventTypeGroupAllowed(e) {
          return this.m_mapEventTypeGroupsAllowed.has(e);
        }
        BIsGameSourceAllowed(e) {
          return (
            !(e === s.k_EFollowing && !(0, p.xU)()) &&
            !(e === s.k_ECurator && !(0, p.Us)()) &&
            this.m_mapGameSources.has(e)
          );
        }
        SetEventTypeGroupAllowed(e, t) {
          t
            ? this.m_mapEventTypeGroupsAllowed.set(e, !0)
            : this.m_mapEventTypeGroupsAllowed.delete(e),
            this.SaveFilterPreferences(),
            this.RecordFilterChange();
        }
        SetGameSourceAllowed(e, t) {
          t
            ? (this.m_mapGameSources.set(e, !0),
              e == s.k_ERecent
                ? this.m_mapGameSources.delete(s.k_ELibrary)
                : e == s.k_ELibrary &&
                  ((0, l.wT)(
                    !this.m_mapGameSources.has(s.k_ERecent),
                    "Setting Library although Recent already set - illusion was broken",
                  ),
                  this.m_mapGameSources.delete(s.k_ERecent)))
            : (this.m_mapGameSources.delete(e),
              e == s.k_ERecent
                ? this.m_mapGameSources.set(s.k_ELibrary, !0)
                : e == s.k_ELibrary &&
                  this.m_mapGameSources.delete(s.k_ERecent)),
            this.SaveFilterPreferences(),
            this.RecordFilterChange();
        }
        BShouldDisplayEvent(e) {
          const t = e.GetSource(),
            n = Boolean(
              e.appInfo &&
                e.appInfo.last_played &&
                e.appInfo.last_played + 15552e3 >=
                  u.HD.GetTimeNowWithOverride(),
            );
          return (
            !!(
              this.enabledEventTypeSet.has(e.event_type) ||
              (this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed(C.k_EUpdates) &&
                e.event_type == r.uYK &&
                e.start_time < 1599202800)
            ) &&
            !this.m_mapHiddenApps.has(e.appid) &&
              !this.m_mapHiddenClans.has(e.clanid) &&
            (!!(t & o.bK.k_eRequired || t & o.bK.k_eReposted) ||
              Boolean(
                (this.BIsGameSourceAllowed(s.k_ERecent) && n) ||
                  (this.BIsGameSourceAllowed(s.k_ELibrary) &&
                    t & o.bK.k_eLibrary) ||
                  (this.BIsGameSourceAllowed(s.k_EWishlist) &&
                    t & o.bK.k_eWishlist) ||
                  (this.BIsGameSourceAllowed(s.k_EFollowing) &&
                    t & o.bK.k_eFollowing) ||
                  (this.BIsGameSourceAllowed(s.k_ERecommended) &&
                    t & o.bK.k_eRecommended) ||
                  (this.BIsGameSourceAllowed(s.k_ESteam) &&
                    t & o.bK.k_eSteam) ||
                  (this.BIsGameSourceAllowed(s.k_EFeatured) &&
                    t & o.bK.k_eFeatured) ||
                  (this.BIsGameSourceAllowed(s.k_ECurator) &&
                    t & o.bK.k_eCurator),
              ))
          );
        }
        BAreAllEventsHidden() {
          return (
            0 == this.m_mapEventTypeGroupsAllowed.size ||
            0 == this.m_mapGameSources.size
          );
        }
        BAreAnyEventsFiltered(e) {
          const t = (0, d.Y2)() ? g : h;
          return (
            (e ? t : _).some((e) => !this.BIsGameSourceAllowed(e)) ||
            A.some((e) => !this.BIsEventTypeGroupAllowed(e))
          );
        }
        BIsClanVisible(e) {
          return !this.m_mapHiddenClans.has(e);
        }
        SetClanVisibility(e, t) {
          t
            ? this.m_mapHiddenClans.has(e) && this.m_mapHiddenClans.delete(e)
            : this.m_mapHiddenClans.has(e) || this.m_mapHiddenClans.set(e, !0);
        }
        BIsAppVisible(e) {
          return !this.m_mapHiddenApps.has(e);
        }
        SetAppVisibility(e, t) {
          t
            ? this.m_mapHiddenApps.has(e) && this.m_mapHiddenApps.delete(e)
            : this.m_mapHiddenApps.has(e) || this.m_mapHiddenApps.set(e, !0);
        }
      }
      (0, i.Cg)([a.sH], v.prototype, "m_mapEventTypeGroupsAllowed", void 0),
        (0, i.Cg)([a.sH], v.prototype, "m_mapGameSources", void 0),
        (0, i.Cg)(
          [a.sH],
          v.prototype,
          "m_bCuratorUnhideOnFollowDialogDismissed",
          void 0,
        ),
        (0, i.Cg)([a.sH], v.prototype, "m_mapHiddenApps", void 0),
        (0, i.Cg)([a.sH], v.prototype, "m_mapHiddenClans", void 0),
        (0, i.Cg)(
          [(0, a.EW)({ keepAlive: !0, equals: a.m3.structural })],
          v.prototype,
          "enabledEventTypeSet",
          null,
        ),
        (0, i.Cg)([a.XI], v.prototype, "SetEventTypeGroupAllowed", null),
        (0, i.Cg)([a.XI], v.prototype, "SetGameSourceAllowed", null);
    },
    1059: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => m });
      var s = n(34629),
        i = n(41735),
        a = n.n(i),
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
            (e.appids &&
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
          const s = c.TS.STORE_BASE_URL + "account/optoutappcommunication/",
            i = new FormData();
          if (
            (i.append("sessionid", (0, c.KC)()),
            i.append("allowCommunication", e ? "1" : "0"),
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
              i.append("appId", t.toString());
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
              i.append("clanId", n.toString());
          }
          try {
            return (await a().post(s, i)).data.success == o.R;
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
      (0, s.Cg)([r.sH], m.prototype, "m_mapBlockedAppIds", void 0),
        (0, s.Cg)([r.sH], m.prototype, "m_mapBlockedClanIds", void 0);
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => g });
      var s = n(34629),
        i = n(7850),
        a = n(75844),
        r = n(90626),
        o = n(73964),
        l = n(91254),
        d = n(65606),
        c = n(55294),
        m = n(738),
        u = n(73745),
        p = n(19332);
      function h(e) {
        const { event: t, closeModal: n } = e,
          s = (0, d.LJ)();
        return (0, i.jsx)(c.AD, {
          initialEvent: t,
          bShowOnlyInitialEvent: !0,
          partnerEventStore: l.O3,
          emoticonStore: s,
          showAppHeader: !0,
          closeModal: n,
        });
      }
      function g(e, t) {
        (0, m.pg)((0, i.jsx)(h, { event: e }), t);
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
          return (0, i.jsx)("div", {
            ref: this.m_refFocus,
            className: p.Main,
            onClick: this.OnBackgroundClick,
            children: (0, i.jsx)(d.sU, {
              children: (s) =>
                (0, i.jsx)(
                  c.He,
                  {
                    event: e,
                    emoticonStore: s,
                    partnerEventStore: o.$.Get(),
                    langOverride: t,
                    isPreview: n,
                    bDisableBroadcastPlayer: !1,
                  },
                  e.GID,
                ),
            }),
          });
        }
      };
      (0, s.Cg)([u.oI], _.prototype, "escFunction", null),
        (0, s.Cg)([u.oI], _.prototype, "OnBackgroundClick", null),
        (_ = (0, s.Cg)([a.PA], _));
    },
    74976: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => u });
      var s = n(7850),
        i = n(6144),
        a = n(87652),
        r = n(49783),
        o = n(43261),
        l = n(46067),
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
          StartTracking(e, t, n) {
            if (e.bOldAnnouncement) return;
            let s = this.m_mapEvents.get(e.GID);
            s || ((s = new c()), this.m_mapEvents.set(e.GID, s)),
              s.m_bHasBeenTracked ||
                s.m_fnSubmit ||
                ((s.m_fnSubmit = new i.LU()),
                s.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, e, t, n),
                ));
          }
          StopTracking(e) {
            const t = this.m_mapEvents.get(e.GID);
            t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
          }
          ReportImpression(e, t, n) {
            if ((n.RecordEventShown(e, o.Tc.qC), t)) {
              const n = (0, l.v0)();
              t.RecordEventViewed(
                e.GID,
                n.GetCurrentlyLoadedItemsForStats(),
                n.GetStoreInitializationTimestamp().getTime() / 1e3,
              );
            }
            const s = this.m_mapEvents.get(e.GID);
            s &&
              ((s.m_bHasBeenTracked = !0),
              s.m_fnSubmit.Cancel(),
              (s.m_fnSubmit = null));
          }
        })(),
        u = (e) => {
          const { event: t } = e,
            n = (0, a.Y)(),
            i = (0, r.fm)();
          if (m.ShouldTrack(t)) {
            const a = () =>
                m.StartTracking(t, e.recordNewsHubStats ? i : void 0, n),
              r = () => m.StopTracking(t);
            return (0, s.jsx)(d.Y, { onEnter: a, onLeave: r });
          }
          return null;
        };
    },
    96715: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      const s =
        n.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
