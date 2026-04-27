"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [261],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      class _ {
        m_HomeView = void 0;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
        static Get() {
          var _;
          return (
            _.s_globalSingletonStore ||
              ((_ = "CHomeViewStore.s_globalSingletonStore"),
              (0, _._)(!0, "Unexpected code running in SSR Server: " + _),
              (_.s_globalSingletonStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = _.s_globalSingletonStore)),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === _._.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const _ = (0, _._)("home_view_setting", "application_config");
          this.ValidateHomeViewData(_) && this.SetHomeViewSetting(_);
          const _ = (0, _._)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(_) &&
            this.SetHomeViewSettingOverride(_);
        }
        ValidateHomeViewData(_) {
          const _ = _;
          return (
            _ && "object" == typeof _.home && "object" == typeof _.main_cluster
          );
        }
        SetHomeViewSetting(_) {
          this.m_HomeView = _;
        }
        ValidateHomeViewDataOverride(_) {
          const _ = _;
          return (
            _ &&
            (!_.all || "object" == typeof _.all) &&
            (!_.maincap || "object" == typeof _.maincap)
          );
        }
        SetHomeViewSettingOverride(_) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ..._?.all,
                ..._?.maincap,
              })
            : (this.m_HomeView = {
                home: {
                  ..._?.all,
                  ..._?.maincap,
                },
              });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _) {
        return {
          strId: "section-" + _,
          strSectionLabel: _,
          rtSectionStart: _,
          rtSectionEnd: _,
          bIsFutureSection: _ >= _,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class _ {
        m_nForwardStuckCount = 0;
        m_nBackwardStuckCount = 0;
        m_mapCalendarAppsByID = new Map();
        m_mapCalendarClansByID = new Map();
        m_mapCalendarEventsByGid = new Map();
        m_rgSortedCalendarEvents = new Array();
        m_visibilityStore;
        m_currentView = _._.box(null);
        m_bFinishedSearchingForward = !1;
        m_bFinishedSearchingBackward = !1;
        m_rgCalendarSections = [];
        m_rgFutureSections = [];
        m_dtInitTime;
        m_forwardRequestInFlight;
        m_backwardRequestInFlight;
        m_key;
        m_collectionMetaData = void 0;
        constructor(_, _) {
          (0, _._)(this),
            (this.m_key = _),
            (this.m_visibilityStore = new _._(_)),
            _._.Get().HintLoad();
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
            this.GetCollectionID() === _._.Featured ||
              (this.BIsGlobalCalendar() && !_._.accountid),
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
        BEventMatchCalendarSingleSource(_) {
          return (
            (this.BIsSingleAppCalendar() && this.m_key.appids[0] == _.appid) ||
            (this.BIsSingleGroupCalendar() &&
              this.m_key.clanaccountids[0] == _.clanid)
          );
        }
        BIsSingleSourceMuted() {
          return (
            !!this.BIsSingleSourceCalendar() &&
            (this.BIsSingleAppCalendar()
              ? _._.Get().BIsMutedAppID(this.GetSingleAppID())
              : _._.Get().BIsMutedClanID(this.GetSingleGroupID()))
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
        SetCollectionMetaData(_) {
          this.m_collectionMetaData = _;
        }
        GetCollectionMetaData() {
          return this.m_collectionMetaData;
        }
        BHasCollectionMetaData() {
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(_) {
          const _ = _;
          return (
            _ &&
            "object" == typeof _ &&
            _.clanid &&
            "number" == typeof _.clanid &&
            _.clan_event_gid &&
            "string" == typeof _.clan_event_gid
          );
        }
        SetFilteredView(_, _) {
          const _ = this.m_currentView.get();
          _ && __webpack_require__.dispose();
          const _ = this.BIsSingleSourceMuted(),
            _ = new _(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              _,
              _,
              _,
            );
          this.m_currentView.set(_);
        }
        BIsFilteredViewEmpty() {
          return !!this.m_currentView.get()?.BIsViewEmpty();
        }
        GetCalendarItemsInTimeRange(_, _) {
          const _ = this.m_currentView.get();
          return _
            ? __webpack_require__.GetCalendarItemsInTimeRange(_, _)
            : (console.error("calendar view not yet initialized"),
              {
                rgCalendarItems: [],
                bIsComplete: !1,
              });
        }
        GetActiveEventsAt(_) {
          const _ = this.m_currentView.get();
          return _
            ? _.GetActiveEventsAt(_)
            : (console.error("calendar view not yet initialized"), []);
        }
        GetCurrentlyLoadedEventCount(_, _) {
          return this.m_currentView.get()?.GetCurrentlyLoadedEventCount(_, _);
        }
        GetCurrentlyLoadedItemsForStats() {
          return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
        }
        GetCalendarSections(_) {
          return _ ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = _._.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const _ = this.GetStoreInitializationTimestamp(),
            _ = [],
            _ = _.getTime() / 1e3;
          _.push(_(_, (0, _._)("#EventCalendar_FutureEventsHeader"), _));
          const _ = new Date(_);
          _.setHours(0, 0, 0, 1);
          let _ = _.getTime() / 1e3;
          _.push(_(_, (0, _._)("#Time_Today"), _, _)),
            _.setDate(_.getDate() - 1);
          let _ = _;
          (_ = _.getTime() / 1e3),
            _.push(_(_, (0, _._)("#Time_Yesterday"), _, _));
          const _ =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            _ = _ ? _.start_time : _;
          let _ = _ > _;
          for (let _ = 0; _ < 5 && !_; _++)
            _.setDate(_.getDate() - 1),
              (_ = _),
              (_ = _.getTime() / 1e3),
              _.push(_(_, (0, _._)(_), _, _)),
              (_ = _ > _);
          const _ = new Date(_);
          let _ = _;
          for (; _.getMonth() == _.getMonth() && 1 != _.getDate() && !_; ) {
            _.setDate(_.getDate() - 7);
            const _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)(_ - 1), _, _)), (_ = _ > _), (_ = _);
          }
          const _ = new Date(_);
          _.setHours(0, 0, 0, 1), _.setDate(1);
          let _ = _;
          for (let _ = 1; !_; _++) {
            const _ = new Date(_);
            _.setMonth(_.getMonth() - _, 1);
            const _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)(_), _, _)), (_ = _ > _), (_ = _);
          }
          this.m_rgCalendarSections.length > _.length
            ? this.m_rgCalendarSections.splice(
                _.length,
                this.m_rgCalendarSections.length,
              )
            : _.splice(this.m_rgCalendarSections.length, _.length).forEach(
                (_) => this.m_rgCalendarSections.push(_),
              );
        }
        InitFutureCalendarSections() {
          const _ = this.GetStoreInitializationTimestamp(),
            _ = [];
          let _;
          this.m_key.rtCalendarEnd && (_ = this.m_key.rtCalendarEnd);
          const _ =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          _ && (_ = _.start_time), _ || (_ = _.getTime() / 1e3);
          const _ = _.getTime() / 1e3,
            _ = new Date(_);
          _.setHours(24, 0, 0, 0);
          let _ = _.getTime() / 1e3;
          _.push(
            _(
              _,
              (0, _._)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              _,
              _,
            ),
          );
          let _ = _ <= _,
            _ = _;
          _.setDate(_.getDate() + 1),
            (_ = _.getTime() / 1e3),
            _ || _.push(_(_, (0, _._)("#Time_Tomorrow"), _, _)),
            (_ = _ <= _);
          const _ = 6 - _()(_).weekday();
          for (let _ = 2; _ <= _ && !_; _++) {
            _ = _;
            const _ = (0, _._)(_);
            _.setDate(_.getDate() + 1),
              (_ = _.getTime() / 1e3),
              _.push(_(_, _, _, _)),
              (_ = _ <= _);
          }
          if (this.m_key.bSectionByDay)
            for (; !_; ) {
              _ = _;
              const _ = (0, _._)(_);
              _.setDate(_.getDate() + 1),
                (_ = _.getTime() / 1e3),
                _.push(_(_, _, _, _)),
                (_ = _ <= _);
            }
          else {
            const _ = new Date(_);
            let _ = _;
            const _ = _()(_).daysInMonth();
            if (_.getMonth() == _.getMonth() && _.getDate() != _ && !_) {
              _.setDate(_.getDate() + 7);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)("#EventCalendar_NextWeek"), _, _)),
                (_ = _ <= _),
                (_ = _);
            }
            const _ = new Date(_);
            let _;
            if (
              (_.setMonth(_.getMonth() + 1),
              _.setDate(1),
              _.setHours(0, 0, 0, 0),
              _ < _ && !_)
            ) {
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)("#EventCalendar_LaterThisMonth"), _, _)),
                (_ = _ <= _),
                (_ = _);
            } else _ = _;
            for (let _ = 2; !_; _++) {
              const _ = new Date(_);
              _.setMonth(_.getMonth() + _);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)(_), _, _)), (_ = _ <= _), (_ = _);
            }
          }
          this.m_rgFutureSections.length > _.length
            ? this.m_rgFutureSections.splice(
                _.length,
                this.m_rgFutureSections.length,
              )
            : _.splice(this.m_rgFutureSections.length, _.length).forEach((_) =>
                this.m_rgFutureSections.push(_),
              );
        }
        async RegisterCalendarEventsAndModels(_) {
          await _._.Get().HintLoad(),
            (0, _._)(() => {
              this.RegisterCalendarApps(_.apps),
                this.RegisterCalendarClans(_.clans),
                this.RegisterCalendarEvents(_.documents),
                _._.RegisterClanEvents(_.events),
                this.RegisterReadEvents(_.events_read),
                this.RegisterEventVotes(_.event_votes),
                _.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                _.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                this.InitFutureCalendarSections(),
                this.SetCollectionMetaData(
                  this.ValidateCollectionMetadata(_.metadatainfo)
                    ? _.metadatainfo
                    : null,
                );
            });
        }
        RegisterCalendarApps(_) {
          if (_)
            for (const _ of _) {
              if (this.m_mapCalendarAppsByID.has(_.appid)) continue;
              const _ = new _._();
              (_.appid = _.appid),
                (_.source = _.source),
                (_.playtime = _.playtime),
                (_.last_played = _.last_played),
                (_.wishlist_added = _.wishlist_added),
                this.m_mapCalendarAppsByID.set(_.appid, _),
                _.hidden &&
                  this.m_visibilityStore.SetAppVisibility(_.appid, !1);
            }
        }
        RegisterCalendarClans(_) {
          if (_)
            for (const _ of _)
              if (!this.m_mapCalendarClansByID.has(_.clanid)) {
                const _ = new _._();
                (_.clanid = _.clanid),
                  (_.source = _.source),
                  this.m_mapCalendarClansByID.set(_.clanid, _),
                  _.hidden &&
                    this.m_visibilityStore.SetClanVisibility(_.clanid, !1);
              }
        }
        RegisterReadEvents(_) {
          if (!_) return;
          const _ = _._.Get();
          for (const _ of _) _.SetEventAsRead(_);
        }
        RegisterEventVotes(_) {
          if (!_) return;
          const _ = _._.Get();
          for (const _ of _) {
            const _ = void 0 === _.vote ? void 0 : Boolean(_.vote);
            _.SetVote(_._, _);
          }
        }
        RegisterCalendarEvents(_) {
          if (_) {
            let _ = !1;
            for (const _ of _)
              this.BInternalInsertCalendarEventItem(_) && (_ = !0);
            _ && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(_) {
          return "forward" == _
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(_, _ = void 0) {
          return "forward" === _
            ? this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[0].start_time
              : _
            : this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ].start_time
              : _;
        }
        UpdateStuckCounters(_, _) {
          const _ =
              "forward" === _
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            _ = this.GetTimeEdgeForDirection(_, void 0);
          return _ || _ !== _
            ? ("forward" == _
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == _
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(_) {
          return "forward" === _
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(_, _) {
          (0, _._)(
            !_ || !this.GetRequestInFlight(_),
            "Already have a request in flight for",
            _,
          ),
            "forward" === _
              ? (this.m_forwardRequestInFlight = _)
              : (this.m_backwardRequestInFlight = _);
        }
        async LoadAdditionalEvents(_, _) {
          if (this.BHitEventHorizon(_)) return 1;
          let _ = this.GetRequestInFlight(_);
          if (_) return _;
          const _ =
              _._.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            _ =
              "forward" === _
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            _ = _ < 3 ? _ : 0,
            _ = _ >= 3 ? 1 : 0,
            _ = ("dev" === _._.WEB_UNIVERSE ? 50 : 250) + 50 * _,
            _ = this.GetTimeEdgeForDirection(_, _._.GetTimeNowWithOverride()),
            _ = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: _,
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
          "forward" === _
            ? ((_.minTime = Math.floor(_ + _)), (_.ascending = !0))
            : ((_.maxTime = Math.floor(_ - _)), (_.ascending = !1));
          return (
            (_ = _()
              .get(_, {
                params: _,
                cancelToken: _ ? _.token : void 0,
                withCredentials: !0,
              })
              .then(async (_) => {
                if ((this.SetRequestInFlight(_, null), 1 == _.data.success)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(_.data),
                    this.UpdateStuckCounters(_, _))
                  )
                    return this.LoadAdditionalEvents(_, _);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + _.data.msg,
                  );
                return _.data.success;
              })
              .catch((_) => {
                this.SetRequestInFlight(_, null);
                let _ = (0, _._)(_);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + _.strErrorMsg,
                    _,
                  ),
                  "forward" == _
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  2
                );
              })),
            this.SetRequestInFlight(_, _),
            _
          );
        }
        BInternalInsertCalendarEventItem(_) {
          if (!_.unique_id)
            return (
              (0, _._)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!",
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(_.unique_id)) return !1;
          const _ = this.m_mapCalendarAppsByID.get(_.appid),
            _ = this.m_mapCalendarClansByID.get(_.clanid);
          if (!_ && !_)
            return console.log("No AppInfo or ClanInfo For: ", _), !1;
          const _ = new _._();
          return (
            (_.clanid = _.clanid),
            (_.unique_id = _.unique_id),
            (_.event_type = _.event_type),
            (_.appid = _.appid),
            (_.start_time = _.start_time),
            (_.score = _.score),
            (_.appInfo = _),
            (_.clanInfo = _),
            this.m_rgSortedCalendarEvents.push(_),
            this.m_mapCalendarEventsByGid.set(_.unique_id, _),
            !0
          );
        }
        GetCalendarAppInfoForAppID(_) {
          return this.m_mapCalendarAppsByID.get(_);
        }
        RebuildSortedCalendarEventList() {
          const _ = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = _.sort(
            (_, _) => _.start_time - _.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(_, _) {
          let _ = _.appInfo ? _.appid : void 0,
            _ = _.clanInfo ? _.clanInfo.clanid : void 0;
          null != _ || null != _
            ? (await _._.Get().UpdateCommunitionSetting(_, _, _),
              _._.RecordAppInteractionEvent(_, _._.k_eMuted))
            : (0, _._)(
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
      (0, _._)([_._], _.prototype, "m_mapCalendarAppsByID", void 0),
        (0, _._)([_._], _.prototype, "m_mapCalendarClansByID", void 0),
        (0, _._)([_._], _.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, _._)([_._], _.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, _._)([_._], _.prototype, "m_bFinishedSearchingForward", void 0),
        (0, _._)([_._], _.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, _._)([_._], _.prototype, "m_rgCalendarSections", void 0),
        (0, _._)([_._], _.prototype, "m_rgFutureSections", void 0),
        (0, _._)([_._], _.prototype, "m_collectionMetaData", void 0),
        (0, _._)([_._], _.prototype, "InitCalendarSections", null),
        (0, _._)([_._], _.prototype, "InitFutureCalendarSections", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarEventsAndModels", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarApps", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarClans", null),
        (0, _._)([_._], _.prototype, "RegisterReadEvents", null),
        (0, _._)([_._], _.prototype, "RegisterEventVotes", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarEvents", null),
        (0, _._)([_._], _.prototype, "BHitEventHorizon", null),
        (0, _._)([_._.bound], _.prototype, "LoadAdditionalEvents", null),
        (0, _._)([_._], _.prototype, "UpdateEventBlockFromCalendarEvent", null);
      class _ {
        m_rgLoadedEventsBox = _._.box([]);
        m_lastLoadLatch = null;
        m_fnGetUnfilteredEvents;
        m_fnLoadAdditionalEvents;
        m_fnBHitEventHorizon;
        m_fnBIsEventInView;
        m_bSkipStorePreferenceCheck;
        m_bAllowMutedAndIgnoredSources;
        m_rgAutorunDisposer;
        constructor(_, _, _, _, _, _) {
          (0, _._)(this),
            (this.m_fnGetUnfilteredEvents = _),
            (this.m_fnLoadAdditionalEvents = _),
            (this.m_fnBHitEventHorizon = _),
            (this.m_fnBIsEventInView = _),
            (this.m_bSkipStorePreferenceCheck = _),
            (this.m_bAllowMutedAndIgnoredSources = _),
            (this.m_rgAutorunDisposer = (0, _._)(async () => {
              const _ = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const _ = Array.from(
                  new Set(_.map((_) => _.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = _),
                  await _._.Get().QueueMultipleAppRequests(_, {
                    ..._._,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != _)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(_);
            }));
        }
        dispose() {
          this.m_rgAutorunDisposer();
        }
        get viewFilteredEvents() {
          return this.m_fnGetUnfilteredEvents().filter((_) =>
            this.m_fnBIsEventInView(_),
          );
        }
        get filteredAndCheckedEvents() {
          return this.m_rgLoadedEventsBox.get().filter((_) => {
            if (_.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (_._.Get().BIsMutedAppID(_.appid) ||
                  _._.Get().BIsGameIgnored(_.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, _._)(_._.Get().GetApp(_.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (_._.Get().BIsMutedClanID(_.clanid) ||
                _._.Get().BIsIgnoringCurator(_._.InitFromClanID(_.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(_, _) {
          if (this.m_fnBHitEventHorizon(_)) return !0;
          const _ = this.m_fnGetUnfilteredEvents();
          return "forward" === _
            ? _ && _.length > 0 && _[0].start_time > _
            : _.length > 0 && _[_.length - 1].start_time < _;
        }
        async EnsureRangeIsLoaded(_, _) {
          for (
            let _ = 0;
            _ < 100 && !this.BIsCompleteThroughTime("forward", _);
            _++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let _ = 0;
            _ < 100 && !this.BIsCompleteThroughTime("backward", _);
            _++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(_, _) {
          this.EnsureRangeIsLoaded(_, _);
          const _ = this.filteredAndCheckedEvents.filter(
              (_) => _.start_time >= _ && (!_ || _.start_time < _),
            ),
            _ = this.BIsCompleteThroughTime("forward", _),
            _ = this.BIsCompleteThroughTime("backward", _);
          return {
            rgCalendarItems: _,
            bIsComplete: _ && _,
          };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(_, _) {
          let _ = 0;
          this.filteredAndCheckedEvents.forEach((_) => {
            _.start_time >= _ && (!_ || _.start_time < _) && _++;
          });
          const _ = this.BIsCompleteThroughTime("forward", _),
            _ = this.BIsCompleteThroughTime("backward", _);
          return {
            nCount: _,
            bIsComplete: _ && _,
          };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(_) {
          return this.filteredAndCheckedEvents
            .map((_) => _._.GetClanEventModel(_.unique_id))
            .filter((_) => {
              if (_) {
                const _ = _.endTime || _.startTime + 3600;
                return _ >= _.startTime && _ < _;
              }
              return !1;
            });
        }
      }
      (0, _._)([_._.struct], _.prototype, "viewFilteredEvents", null),
        (0, _._)([_._.struct], _.prototype, "filteredAndCheckedEvents", null);
      const _ = _._.box(null),
        _ = new Map();
      function _(_, _) {
        let _ = "";
        return (
          _.appids &&
            _.appids.length > 0 &&
            (_ += "appids:" + _.appids.sort().join(",")),
          _.clanaccountids &&
            _.clanaccountids.length > 0 &&
            (_ += "clanids:" + _.clanaccountids.sort().join(",")),
          _.collectionid && (_ += "collection:" + _.collectionid),
          _.saleid && (_ += "sale:" + _.saleid),
          _.bSectionByDay && (_ += "_sectionbyday"),
          _.rtCalendarEnd && (_ += "_end:" + _.rtCalendarEnd),
          _.rgTags &&
            _.rgTags.length > 0 &&
            (_ += "_tags:" + _.rgTags.slice().sort().join(",")),
          _.hubtype &&
            (_ +=
              "_hubtype:" +
              _.hubtype +
              "_" +
              _.category_or_language +
              "_" +
              _.tag_name),
          _.get() !== _ && (_.set(_), _.has(_) || _.set(_, new _(_, _))),
          _
        );
      }
      function _() {
        return null == _.get() && _({}), _.get(_.get());
      }
      function _() {
        return null !== _.get();
      }
      window.g_EventCalendarMap = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.Default = "default"),
          (_.Upcoming = "upcoming"),
          (_.Featured = "featured"),
          (_.Press = "press"),
          (_.Steam = "steam"),
          (_.Halloween = "halloween"),
          (_.Dev_Sales = "sales"),
          (_.Dev_All = "all"),
          (_.Dev_AssociatedPress = "associated_press");
      })(_ || (_ = {}));
      const _ = new Map();
      function _(_) {
        return (
          0 == _.size &&
            (function () {
              const _ = (0, _._)();
              _.set(_.Default, {
                _: _.Default,
                strUrl: `${_}/`,
                strName: (0, _._)("#EventCalendar_NewsChannel_YourNews"),
                strSubtitle: (0, _._)(
                  "#EventCalendar_NewsChannel_Personalized",
                ),
                strHeaderTitle: (0, _._)(
                  "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
                ),
              }),
                _.set(_.Upcoming, {
                  _: _.Upcoming,
                  strUrl: `${_}/?upcoming=1`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Upcoming"),
                  strShortName: (0, _._)(
                    "#EventCalendar_NewsChannel_UpcomingShort",
                  ),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_Personalized",
                  ),
                }),
                _.set(_.Featured, {
                  _: _.Featured,
                  strUrl: `${_}/collection/featured/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Featured"),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_TopSellers",
                  ),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_NewsChannel_Featured_HeaderTitle",
                  ),
                }),
                _.set(_.Press, {
                  _: _.Press,
                  strUrl: `${_}/collection/press/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Press"),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_Collection_News_Title",
                  ),
                  strHeaderSubtitle: (0, _._)(
                    "#EventCalendar_Collection_News_Subtitle",
                  ),
                }),
                _.set(_.Steam, {
                  _: _.Steam,
                  strUrl: `${_}/collection/steam/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Steam"),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_SteamSubtitle",
                  ),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_NewsChannel_Steam_HeaderTitle",
                  ),
                }),
                _.set(_.Halloween, {
                  _: _.Halloween,
                  strUrl: `${_}/collection/halloween/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Halloween"),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_HalloweenSubtitle",
                  ),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_Collection_Halloween_Title",
                  ),
                  strHeaderSubtitle: (0, _._)(
                    "#EventCalendar_Collection_Halloween_Subtitle",
                  ),
                }),
                _.set(_.Dev_Sales, {
                  _: _.Dev_Sales,
                  strUrl: `${_}/collection/sales/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_AllSales"),
                }),
                _._.is_support &&
                  (_.set(_.Dev_All, {
                    _: _.Dev_All,
                    strUrl: `${_}/collection/all/`,
                    strName: (0, _._)("#EventCalendar_NewsChannel_All"),
                    bIsValveOnly: !0,
                  }),
                  _.set(_.Dev_AssociatedPress, {
                    _: _.Dev_AssociatedPress,
                    strUrl: `${_}/collection/associated_press/`,
                    strName: (0, _._)(
                      "#EventCalendar_NewsChannel_AssociatedPress",
                    ),
                    bIsValveOnly: !0,
                  }));
            })(),
          _.get(_)
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapBlockedAppIds = new Map();
        m_mapBlockedClanIds = new Map();
        static s_globalSingletonStore;
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore.Init()),
            _.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const _ = (0, _._)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(_) &&
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
                  JSON.stringify(_),
              ),
            _.appids &&
              _.appids.forEach((_) => this.m_mapBlockedAppIds.set(_, !0)),
            _.clanids &&
              _.clanids.forEach((_) => this.m_mapBlockedClanIds.set(_, !0)));
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !(!_ || "object" != typeof _) &&
            ((Array.isArray(_.appids) && _.appids.length > 0) ||
              (Array.isArray(_.clanids) && _.clanids.length > 0))
          );
        }
        BIsEventBlocked(_) {
          return _.appid
            ? this.m_mapBlockedAppIds.has(_.appid)
            : !!_.clanInfo && this.m_mapBlockedClanIds.has(_.clanInfo.clanid);
        }
        BIsMutedAppID(_) {
          return this.m_mapBlockedAppIds.has(_);
        }
        BIsMutedClanID(_) {
          return this.m_mapBlockedClanIds.has(_);
        }
        async UpdateCommunitionSetting(_, _, _) {
          const _ = _._.STORE_BASE_URL + "account/optoutappcommunication/",
            _ = new FormData();
          if (
            (_.append("sessionid", _._.SESSIONID),
            _.append("allowCommunication", _ ? "1" : "0"),
            _)
          ) {
            if (
              (!_ && this.m_mapBlockedAppIds.has(_)) ||
              (_ && !this.m_mapBlockedAppIds.has(_))
            )
              return !0;
            _
              ? this.m_mapBlockedAppIds.delete(_)
              : this.m_mapBlockedAppIds.set(_, !0),
              _.append("appId", _.toString());
          } else {
            if (!_)
              return (
                (0, _._)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!_ && this.m_mapBlockedClanIds.has(_)) ||
              (_ && !this.m_mapBlockedClanIds.has(_))
            )
              return !0;
            _
              ? this.m_mapBlockedClanIds.delete(_)
              : this.m_mapBlockedClanIds.set(_, !0),
              _.append("clanId", __webpack_require__.toString());
          }
          try {
            return 1 == (await _().post(_, _)).data.success;
          } catch (_) {
            return (
              console.error(
                "Blocking app id hit error " + (0, _._)(_).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, _._)([_._], _.prototype, "m_mapBlockedAppIds", void 0),
        (0, _._)([_._], _.prototype, "m_mapBlockedClanIds", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      class _ extends _._ {
        constructor() {
          super();
        }
        BTransportReady() {
          return !0;
        }
        GetServerTime() {
          return _._.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
        }
        async RequestEmoticonListInternal() {
          let _ = [];
          try {
            let _ = await _().get(_._.CHAT_BASE_URL + "actions/EmoticonData", {
              withCredentials: !0,
            });
            if (_.data.emoticons)
              for (let _ of _.data.emoticons) {
                let _ = _.name;
                if (_.startsWith("^"))
                  _.push({
                    name: _,
                  });
                else {
                  let _ = {
                      name: _.substr(1, _.length - 2),
                    },
                    _ = _.name.toLowerCase();
                  _ != _.name && (_.name_normalized = _),
                    _.time_last_used && (_.last_used = _.time_last_used),
                    _.use_count && (_.use_count = _.use_count),
                    _.time_received && (_.time_received = _.time_received),
                    _.appid && (_.appid = _.appid),
                    _.push(_);
                }
              }
          } catch (_) {
            console.error("error loading emoticon list", _);
          }
          this.OnEmoticonListReceived(_);
        }
      }
      const _ = new _();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        let { bShowOnlyInitialEvent: _ } = _;
        const _ = (0, _._)();
        return (0, _.jsx)(_._, {
          children: (0, _.jsx)(_, {
            ..._,
            bShowOnlyInitialEvent: _ || _,
          }),
        });
      };
      let _ = class extends _.Component {
        state = {
          bLoading: !1,
          eventModel: this.props.eventModel,
        };
        m_refParent = _.createRef();
        m_cancelSignal = _().CancelToken.source();
        componentDidMount() {
          this.state.eventModel ||
            this.setState(
              {
                bLoading: !0,
              },
              this.LoadEvent,
            );
          let _ = this.GetBodyElement();
          _ &&
            this.props.bPrimaryPageFeature &&
            _.classList.add(_.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let _ = this.GetBodyElement();
          _ &&
            this.props.bPrimaryPageFeature &&
            _.classList.remove(_.BodyNoScroll);
        }
        GetBodyElement() {
          return this.m_refParent.current
            ? this.m_refParent.current.closest("body")
            : null;
        }
        async LoadEvent() {
          const {
            appid: _,
            clanSteamID: _,
            announcementGID: _,
            partnerEventStore: _,
            additionalParams: _,
          } = this.props;
          _.LoadAdjacentPartnerEventsByAnnouncement(
            _,
            _,
            _,
            0,
            3,
            _,
            this.m_cancelSignal,
          )
            .then((_) => {
              _.length > 0
                ? this.setState(
                    {
                      bLoading: !1,
                      eventModel: _[0],
                    },
                    this.HandleReadEvent,
                  )
                : (this.props.onEventNotFound && this.props.onEventNotFound(),
                  this.setState({
                    bLoading: !1,
                  }));
            })
            .catch((_) => {
              let _ = (0, _._)(_);
              console.error(
                "EventInfiniteScrollModal failed " + _.strErrorMsg,
                _,
              ),
                this.setState({
                  bLoading: !1,
                });
            });
        }
        async HandleReadEvent() {
          const { eventModel: _ } = this.state,
            { trackingLocation: _ } = this.props;
          _ &&
            _.BIsPartnerEvent() &&
            _._.Get()
              .GetTracker()
              .MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _) &&
            _._.Get().GetTracker().Flush();
        }
        render() {
          const { bShowOnlyInitialEvent: _ } = this.props,
            { bLoading: _, eventModel: _ } = this.state;
          if (_)
            return (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)("div", {
                className: _().FlexCenter,
                style: {
                  height: "400px",
                },
                children: (0, _.jsx)(_._, {}),
              }),
            });
          const {
            closeModal: _,
            appid: _,
            clanSteamID: _,
            className: _,
            partnerEventStore: _,
            showAppHeader: _,
            bPrimaryPageFeature: _,
            additionalParams: _,
            eventClassName: _,
          } = this.props;
          let _;
          _._.IN_CLIENT &&
            _?.appid &&
            (_._.Get().HintLoad(),
            _._.Get().BOwnsApp(_.appid) &&
              (_ = (_) => (0, _._)(_, "steam://nav/games/details/" + _.appid)));
          const _ = (0, _.jsx)(_._, {
            initialEvent: _,
            appid: _,
            clanSteamID: _,
            partnerEventStore: _,
            emoticonStore: _._,
            closeModal: !_ && _,
            showAppHeader: _,
            bShowOnlyInitialEvent: _,
            additionalParams: _,
            eventClassName: _,
            onAppIconClick: _,
          });
          return _
            ? _
            : (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)("div", {
                  className: _,
                  children: _,
                }),
              });
        }
      };
      _ = (0, _._)([_._], _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
          const {
              clanAccountID: _,
              gidAnnouncement: _,
              partnerEventStore: _,
              trackingLocation: _,
              bViewAllShowInfiniteScroll: _,
            } = _,
            _ = _._.InitFromClanID(_),
            _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(!0),
            [_, _] = (0, _.useState)(!1);
          if (
            ((0, _.useEffect)(
              () => (
                (async () => {
                  _.current &&
                    _.current("PartnerEventRow Initializng new mount");
                  const _ = _().CancelToken.source();
                  _.current = _.cancel;
                  const _ = _._.InitFromClanID(_);
                  await _._.LoadClanInfoForClanSteamID(_);
                  let _ = await _.LoadAdjacentPartnerEventsByAnnouncement(
                    _,
                    _,
                    null,
                    4,
                    4,
                    {
                      only_summaries: !0,
                    },
                    _,
                  );
                  if (!_.token.reason) {
                    _ = _ || [];
                    let _ = _.filter((_) => _.GetAnnouncementGID() != _).map(
                      (_) => _.AnnouncementGID,
                    );
                    _._(_);
                    const _ = _.slice(0, 3)
                      .map((_) => _.GetClanEventFromAnnouncementGID(_))
                      .filter((_) => !!_);
                    if ((_(_), _(!1), _)) {
                      let _ = _._.Get().GetTracker(),
                        _ = !1;
                      if (_.BHasClanAnnouncementGID(_)) {
                        let _ = _.GetClanEventFromAnnouncementGID(_);
                        _ &&
                          _.BIsPartnerEvent() &&
                          _.BIsVisibleEvent() &&
                          (_.MarkEventRead(
                            _.GID,
                            _.clanSteamID.GetAccountID(),
                            _,
                          ),
                          (_ = !0));
                      }
                      _.length > 0 &&
                        (_.filter((_) => _.BIsPartnerEvent()).forEach((_) =>
                          _.MarkEventShown(
                            _.GID,
                            _.clanSteamID.GetAccountID(),
                            _,
                          ),
                        ),
                        (_ = !0)),
                        _ && _.Flush();
                    }
                  }
                })(),
                () => {
                  _.current && _.current("PartnerEventRow: unmounting");
                }
              ),
              [_, _, _, _],
            ),
            _)
          )
            return (0, _.jsx)(_._, {
              position: "center",
              size: "medium",
            });
          if (0 == _.length) return (0, _.jsx)("div", {});
          const _ = _._.GetClanInfoByClanAccountID(_);
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().OtherEventsCtn, "OtherEventsCtn"),
              children: [
                (0, _.jsxs)("div", {
                  className: _().EventSectionTitleCtn,
                  children: [
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().EventSectionTitle,
                        "EventSectionTitle",
                      ),
                      children: [
                        (0, _._)("#EventBrowse_MoreEventsTitle", _.group_name),
                        " ",
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _().EventSectionSpacer,
                      children: " ",
                    }),
                    _
                      ? (0, _.jsx)("div", {
                          className: _().EventSectionMoreBtn,
                          onClick: () => _(!0),
                          children: (0, _._)("#EventBrowse_MoreEventsBtn"),
                        })
                      : (0, _.jsx)(_._, {
                          eventModel: _[0],
                          route: _._.k_eViewWebSiteHub,
                          className: _().EventSectionMoreBtn,
                          children: (0, _._)("#EventBrowse_MoreEventsBtn"),
                        }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  className: _().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: _._.PREFERRED_CHILD,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        event: _,
                      },
                      _.AnnouncementGID,
                    ),
                  ),
                }),
                Boolean(_) &&
                  (0, _.jsx)(_._, {
                    appid: _[0].appid,
                    clanSteamID: _,
                    announcementGID: _[0].AnnouncementGID,
                    closeModal: () => _(!1),
                    partnerEventStore: _,
                  }),
              ],
            }),
          });
        }),
        _ = 30;
      function _(_) {
        const {
            event: _,
            imageURLOverride: _,
            bShowAssociatedApp: _,
            langOverride: _,
            onClick: _,
            eEventRount: _,
            bHidePrices: _,
          } = _,
          _ = (0, _._)(_.appid),
          [_, _, _, _, _, _] = (0, _._)(() => {
            const _ = _ || (0, _._)(_._.LANGUAGE),
              _ = Boolean(void 0 !== _)
                ? _
                : _.GetImageURLWithFallback("capsule", _, _._.capsule_main),
              _ = Boolean(void 0 !== _)
                ? _
                : _.GetImageURLWithFallback("capsule", _, _._.full);
            return [
              _,
              _.GetNameWithFallback(_) || "",
              _.GetCategoryAsString(),
              _.GetSummaryWithFallback(_),
              _,
              _.GetSubTitleWithLanguageFallback(_) || "",
            ];
          }),
          _ = (0, _._)(_.appid),
          { data: _ } = (0, _._)(_),
          _ = [
            _,
            _ !== _ ? _ : void 0,
            _ && (0, _._)(_, "main_capsule"),
          ].filter(Boolean),
          [_, _] = (0, _.useState)(_);
        if (!_)
          return (0, _.jsx)("div", {
            className: _().OtherEvents_EventCtn,
          });
        const _ = (0, _._)().GetStoreInitializationTimestamp().getTime() / 1e3,
          _ = _ ? _.GetStartTimeAndDateUnixSeconds() : 0;
        let _ = _;
        return (
          _ && (_.length > _ || _.length > _) && (_ = void 0),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                className: (0, _._)(
                  _().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  _().HoversEnabled,
                ),
                eventModel: _,
                route: _ || _._.k_eView,
                onClick: _,
                preferredFocus: !0,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().EventSummaryContainer,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().EventSummaryType,
                        children: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _().EventSummaryText,
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().OtherEvents_BGImage,
                    style: {
                      backgroundColor: "#ffffff",
                      backgroundImage: _ ? `url(${(0, _._)(_)})` : "none",
                    },
                  }),
                  (0, _.jsxs)("div", {
                    className: _().OtherEvents_ContentCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().OtherEvents_MainImageCtn,
                          _ && _().MaskImages,
                        ),
                        children: (0, _.jsx)(_._, {
                          rgSources: _,
                          onIncrementalError: (_, _, _) => {
                            _ >= _.length && _(void 0), _(_[_ + 1]);
                          },
                          className: _().OtherEvents_MainImage,
                          alt: "",
                        }),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().OtherEvents_TextCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().OtherEvents_TextTitle,
                            children: _,
                          }),
                          Boolean(_) &&
                            (0, _.jsx)("div", {
                              className: _().OtherEvents_SubTitle,
                              children: _,
                            }),
                          Boolean(_ > _)
                            ? (0, _.jsx)("div", {
                                className: (0, _._)(
                                  _().UpcomingCtn,
                                  "UpcomingCtn",
                                ),
                                children: (0, _.jsx)(_._, {
                                  bSingleLine: !0,
                                  dateAndTime:
                                    _.GetStartTimeAndDateUnixSeconds(),
                                }),
                              })
                            : (0, _.jsx)(_._, {
                                bSingleLine: !0,
                                bOnlyDate: !0,
                                dateAndTime: _.GetStartTimeAndDateUnixSeconds(),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Boolean(_ && _.appid) &&
                (0, _.jsx)(_, {
                  appid: _.appid,
                  bHidePrice: _,
                }),
            ],
          })
        );
      }
      function _(_) {
        const { appid: _, bHidePrice: _ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)();
        if (!_ || !_) return null;
        const _ = _ && _.hide_discount_pct_for_compliance;
        return (0, _.jsx)(_._, {
          appID: _,
          children: (0, _.jsxs)(_._, {
            className: (0, _._)(_().AppCapsuleCtn, "AppCapsuleCtn"),
            ...(0, _._)(_, _, _, !1),
            children: [
              (0, _.jsx)(_._, {
                _: _,
                hoverProps: {
                  direction: "overlay",
                  style: {
                    minWidth: "320px",
                  },
                },
                children: (0, _.jsx)("img", {
                  className: (0, _._)(_().AppCapsuleImage, _().CapsuleShadow),
                  src: (0, _._)(_, "small_capsule"),
                  alt: _.name,
                }),
              }),
              Boolean(!_ && !_.is_free) &&
                (0, _.jsxs)("span", {
                  className: (0, _._)(
                    _().AppCapsulePrice,
                    Boolean(_?.discount_pct) ? _().Discounted : "",
                  ),
                  children: [
                    Boolean(_?.discount_pct && _) &&
                      (0, _.jsx)("div", {
                        className: _().DiscountIconCtn,
                        children: (0, _.jsx)(_.XH_, {}),
                      }),
                    Boolean(_?.discount_pct && !_) &&
                      (0, _.jsx)("span", {
                        className: _().StoreSaleDiscountBox,
                        children: `-${_?.discount_pct}%`,
                      }),
                    _ &&
                      _.final_price_in_cents &&
                      (0, _.jsx)("span", {
                        className: _().StoreSalePriceBox,
                        children: _.formatted_final_price,
                      }),
                  ],
                }),
            ],
          }),
        });
      }
      function _(_) {
        const { event: _, imageURLOverride: _, onClick: _ } = _,
          _ = (0, _._)(_.appid),
          _ = (0, _._)(_.appid),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(_._.LANGUAGE),
          [_, _, _, _, _] = (0, _._)(() =>
            _
              ? [
                  void 0 !== _
                    ? _
                    : _.GetImageURLWithFallback("capsule", _, _._.capsule_main),
                  _.GetNameWithFallback(_),
                  _.GetCategoryAsString(),
                  _.GetSubTitleWithLanguageFallback(_),
                  _.GetSummaryWithFallback(_),
                ]
              : [void 0, void 0, void 0, void 0, void 0],
          );
        if (!_)
          return (0, _.jsx)("div", {
            className: _().OtherEvents_EventCtn,
          });
        const _ = [_, _ && (0, _._)(_, "main_capsule")].filter(Boolean);
        return (0, _.jsxs)(_._, {
          className: _().OtherEvents_EventCtn + " " + _().HorizontalEvent,
          eventModel: _,
          route: _._.k_eView,
          onClick: _,
          children: [
            (0, _.jsx)("div", {
              className: _().OtherEvents_ContentCtn,
              children: (0, _.jsx)("div", {
                className: (0, _._)(
                  _().OtherEvents_MainImageCtn,
                  _ && _().MaskImages,
                ),
                children: (0, _.jsx)(_._, {
                  rgSources: _,
                  className: _().OtherEvents_MainImage,
                  alt: "",
                }),
              }),
            }),
            (0, _.jsxs)("div", {
              className: _().OtherEvents_TextCtn,
              children: [
                (0, _.jsxs)("div", {
                  className: _().HorizontalDescriptionCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().HorizontalDescription,
                      children: _,
                    }),
                    (0, _.jsx)(_._, {
                      bSingleLine: !0,
                      dateAndTime: _.GetStartTimeAndDateUnixSeconds(),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().HorizontalTitle,
                  children: _,
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().HorizontalSubTitle,
                    children: _,
                  }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().HorizontalSummary,
                    children: _,
                  }),
              ],
            }),
          ],
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _._.Get().BIsStoreItemMissing(_._, (0, _._)(_.type));
      }
      function _(_, _, _) {
        const _ = new Array();
        return (
          _?.forEach((_) =>
            _.push({
              _: _,
              type: "game",
            }),
          ),
          _?.forEach((_) =>
            _.push({
              _: _,
              type: "sub",
            }),
          ),
          __webpack_require__?.forEach((_) =>
            _.push({
              _: _,
              type: "bundle",
            }),
          ),
          _
        );
      }
      function _(_) {
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return _?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function _(_) {
        if (!_._.Get().GetHomeView()?.localized) return !0;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return _._.Get().BIsAnyLanguageEnabled(
          _.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function _(_, _, _) {
        if (!_ || 0 == _.length) return [];
        const _ = _.filter((_) => (0, _._)(_.type)).map((_) => _._),
          _ = _.filter((_) => "sub" === _.type).map((_) => _._),
          _ = _.filter((_) => "bundle" === _.type).map((_) => _._);
        {
          const _ = _.filter((_) => !_._.Get().BHasApp(_, _)),
            _ = _.filter((_) => !_._.Get().BHasApp(_, _)),
            _ = _.filter((_) => !_._.Get().BHasApp(_, _));
          (_.length > 0 || _.length > 0 || _.length > 0) &&
            (await Promise.all([
              _._.Get().QueueMultipleAppRequests(_, _),
              _._.Get().QueueMultiplePackageRequests(_, _),
              _._.Get().QueueMultipleBundleRequests(_, _),
            ]));
        }
        const _ = new Set();
        _?.forEach((_) => {
          const _ = _._.Get().GetBundle(_);
          _?.GetIncludedAppIDs().forEach((_) => _.add(_));
        }),
          _?.forEach((_) => {
            const _ = _._.Get().GetPackage(_);
            _?.GetIncludedAppIDs().forEach((_) => _.add(_));
          });
        const _ = Array.from(_).filter((_) => !_._.Get().BHasApp(_, _));
        if (
          (_.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _)),
          _.forEach((_) => _.add(_)),
          _)
        ) {
          const _ = Array.from(_)
            .map((_) => {
              const _ = _._.Get().GetApp(_);
              return _?.GetParentAppID()
                ? (_.add(_.GetParentAppID()), _.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((_) => !_._.Get().BHasApp(_, _));
          _.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _));
        }
        return Array.from(_).filter((_) => {
          const _ = _._.Get().GetApp(_);
          return _ && !_.GetParentAppID();
        });
      }
      const _ = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function _(_) {
        const _ = _._.Get();
        (0, _._)(_.BIsLoaded(), "Dynamic Store not loaded");
        const _ = _?.GetAllLanguagesWithSomeSupport() || [],
          _ = _._.Get().GetHomeView()?.localized;
        return (
          !_ ||
          (0 == _.GetStoreItemType() &&
            (_.BIsGameIgnored(_.GetAppID()) ||
              _.BIsGameIgnored(_.GetParentAppID()))) ||
          _.BExcludesContentDescriptor(_.GetContentDescriptorIDs()) ||
          _.BExcludeTagIDs(_.GetTagIDs()) ||
          _.GetAllCreatorClanIDs().some((_) => _.BIsIgnoringCurator(_)) ||
          (_ &&
            !(
              0 == _.length ||
              _.BHasSomeLanguageSupport(0) ||
              _.BIsAnyLanguageEnabled(_)
            ))
        );
      }
      async function _(_, _, _, _) {
        let _ = 0,
          _ = 0;
        const _ = [];
        await _(_, _._, _);
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) {
            _++;
            continue;
          }
          const _ = _.GetIncludedAppIDs()
            .map((_) => _._.Get().GetApp(_))
            .filter(Boolean);
          if ((_.push(_), _)) {
            const _ = new Set(_.map((_) => _.GetParentAppID()).filter(Boolean)),
              _ = Array.from(_)
                .map((_) => _._.Get().GetApp(_))
                .filter(Boolean);
            _ && _.push(..._);
          }
          _.some(_ || _)
            ? (_++,
              _ &&
                (_._.Get().BIsStoreItemOwned(_) || __webpack_require__.push(_)))
            : _.push(_);
        }
        return (
          "dev" === _._.WEB_UNIVERSE &&
            0 === _.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                _ +
                " failed to load, " +
                _ +
                " hidden by user filter.",
            ),
          _
        );
      }
      async function _(_, _, _, _, _, _, _) {
        let _ = await _(
          _,
          _,
          _,
          _
            ? (_) =>
                !_ ||
                _._.Get().BExcludesContentDescriptor(
                  _.GetContentDescriptorIDs(),
                ) ||
                _._.Get().BExcludeTagIDs(_.GetTagIDs())
            : _,
        );
        const _ = [];
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) continue;
          const _ = _?.GetIncludedAppIDsOrSelf();
          let _ = !1;
          _ && (_ = _ || _.every((_) => _._.Get().BIsGameOwned(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameWishlisted(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameIgnored(_))),
            _ ? _ && _.push(_) : _.push(_);
        }
        return _;
      }
    },
  },
]);
