"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [33884],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return useObserver(() => [_.m_nBuildID, _.m_strBuildBranch]);
        }
        function _(_, _ = 0, _) {
          const [_, _] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(_),
            ),
            _ = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (_?.AnnouncementGID != _) {
                g_PartnerEventStore.Init();
                const _ = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _)
                  .then((_) => {
                    _ && !_.token.reason && _(_);
                  });
              }
            }, [_, _, _, _, _]),
            _
          );
        }
        function _(_) {
          const [_, _] = (0, _.useState)(() => _._.GetClanEventModel(_)),
            _ = (0, _._)("usePartnerEventByEventGID");
          return (
            (0, _.useEffect)(() => {
              _ &&
                _?.GID != _ &&
                (_._.Init(),
                _._.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [_],
                  [],
                  _,
                ).then((_) => {
                  _?.length == 1 && _[0].GID == _ && !_.token.reason && _(_[0]);
                }));
            }, [_, _, _]),
            _
          );
        }
        function _(_) {
          const _ = useCancelTokenSource("usePreloadPartnerEventsByEventGID"),
            _ = useQuery({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                g_PartnerEventStore.Init(),
                g_PartnerEventStore.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  _,
                  [],
                  _,
                )
              ),
            });
          return {
            bIsLoading: _.isLoading,
            events: _.data,
          };
        }
        function _(_, _, _) {
          const [_, _] = (0, _.useState)(_ ? _._.GetClanEventModel(_) : void 0),
            [_, _] = (0, _.useState)(!!_ && !!_),
            [_, _] = (0, _.useState)(),
            [_, _] = (0, _.useState)(_._),
            _ = (0, _._)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, _.useEffect)(() => {
              (async () => {
                try {
                  if (_?.GID != _ && _ && _) {
                    _._.Init();
                    const _ = _._.InitFromClanID(_);
                    let _;
                    try {
                      _ =
                        await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          _,
                          _,
                          0,
                          _,
                        );
                    } catch (_) {
                      _(_?.response?.data?.err_msg),
                        _(_?.response?.data?.success || _._);
                    }
                    _.token.reason || _(_);
                  }
                } finally {
                  _(!1);
                }
              })();
            }, [_, _, _, _, _]),
            {
              eventModel: _,
              bLoading: _,
              sErrorMessage: _,
              eResult: _,
            }
          );
        }
        function _(_, _ = []) {
          const [_, _] = useState(void 0),
            _ = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              _ &&
                (!_ || _?.appid != _) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    _,
                    0,
                    1,
                    {
                      require_tags: ["patchnotes", ..._],
                    },
                    _,
                  )
                  .then((_) => {
                    _?.length && !_.token.reason && _(_[0]);
                  }));
            }, [_, _, _, _]),
            _
          );
        }
        function _(_, _ = []) {
          const _ = useCancelTokenSource("useLatestPatchNoteForSource"),
            _ = typeof _ == "number" ? _ : k_nAppIdInvalid,
            _ = typeof _ == "object" ? _ : void 0,
            _ = useCallback(async () => {
              if (!_?.length) return null;
              g_PartnerEventStore.Init();
              const _ = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                _,
                _,
                0,
                1,
                {
                  require_tags: ["patchnotes", ..._],
                },
                _,
              );
              return _?.length ? _[0] : null;
            }, [_, _, _, _]),
            _ = ["LatestPatchNote2", _, _, _, _];
          return useQuery({
            queryKey: _,
            queryFn: _,
          });
        }
        function _(_) {
          let _ = "" + _;
          const _ = _._.GetELanguageFallback(_);
          return _ != _ && (_ += "_" + _), _;
        }
        async function _(_, _, _, _) {
          const _ = new Array(),
            _ = {
              clan_accountid: _ ? _.GetAccountID() : void 0,
              gidevent: _,
              count_before: 0,
              count_after: _,
              lang_list: _(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            _ = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            _ = await axios.get(_, {
              params: _,
              cancelToken: _?.token,
            });
          if (_?.data?.success == k_EResultOK) {
            const _ = _ == null ? _.data.events : _.data.events.slice(1);
            for (let _ of _)
              !_.gid || !((_.jsondata?.length ?? 0) > 0) || _.push(_);
          } else {
            const _ = GetMsgAndErrorCodeFromResponse(_?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (_ ? _.GetAccountID() : 0) +
                  " " +
                  _.strErrorMsg,
                _,
              ),
              _?.data)
            );
          }
          return _;
        }
        function _(_, _, _) {
          const {
            data: _,
            error: _,
            fetchNextPage: _,
            hasNextPage: _,
            isFetching: _,
            isFetchingNextPage: _,
            status: _,
            refetch: _,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", _, _],
            queryFn: ({ pageParam: _ }) => _(_, _, _, _),
            initialPageParam: void 0,
            getNextPageParam: (_) =>
              _.length > 0 ? _[_.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: _,
            bHasNextPage: _,
            fnFetchNextPage: _,
            bIsFetching: _,
            bIsFetchingNextPage: _,
            clanEventSummaryStatus: _,
            clanEventSummaryLoadError: _,
            fnRefetch: _,
          };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (
            (_.gid == null || _.gid == null || _.gid == "0") &&
            !!_.announcement_body &&
            _.announcement_body.gid != "0"
          );
        }
        function _(_) {
          return _(_) ? _._ + _.announcement_body?.gid : _.gid;
        }
        function _(_, _) {
          let _ = new _._();
          if (
            ((_.clanSteamID = _),
            (0, _._)(
              _.clanSteamID && _.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                _.clanSteamID.ConvertTo64BitString() +
                " " +
                _._.EUNIVERSE,
            ),
            (_.GID = _(_)),
            (_.bOldAnnouncement = _(_)),
            (_.appid = _.appid ?? 0),
            (_.createTime = _.rtime_created),
            (_.startTime = _.rtime32_start_time),
            (_.endTime = _.rtime32_end_time),
            (_.visibilityStartTime = _.rtime32_visibility_start),
            (_.visibilityEndTime = _.rtime32_visibility_end),
            (_.loadedAllLanguages = !1),
            (_.type = _.event_type ?? _.DRF),
            (_.nVotesUp = _.votes_up ?? 0),
            (_.nVotesDown = _.votes_down ?? 0),
            (_.comment_type = _.comment_type),
            (_.gidfeature = _.gidfeature),
            (_.gidfeature2 = _.gidfeature2),
            (_.featured_app_tagid = _.featured_app_tagid),
            (_.vecTags = new Array()),
            (_.creator_steamid = _.creator_steamid),
            (_.last_update_steamid = _.last_update_steamid),
            (_.rtime32_last_modified = _.rtime32_last_modified),
            (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
            (_.video_preview_type = _.video_preview_type),
            (_.video_preview_id = _.video_preview_id),
            (_.has_live_stream = _.has_live_stream),
            (_.live_stream_viewer_count = _.live_stream_viewer_count),
            (_.m_nBuildID = _.build_id),
            (_.m_strBuildBranch = _.build_branch),
            _.announcement_body)
          ) {
            let _ = _.announcement_body;
            (_.AnnouncementGID = _.gid),
              _.name.set(_.language, _.headline),
              _.description.set(_.language, _.body),
              _.timestamp_loc_updated.clear(),
              (_.forumTopicGID = _.forum_topic_id),
              (_.nCommentCount = _.commentcount),
              (_.postTime = _.posttime),
              _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
              (_.announcementClanSteamID = new _._(_.clanid)),
              _.tags &&
                _.tags.length > 0 &&
                _.tags.forEach((_) => _.vecTags.push(_)),
              !_.rtime32_last_solr_search_col_updated &&
                _.rtime32_last_modified &&
                ((_.rtime32_last_solr_search_col_updated =
                  _.rtime32_last_modified),
                (_.rtime32_last_modified = _.updatetime));
          } else
            (_.AnnouncementGID = "0"),
              (_.forumTopicGID = _.forum_topic_id),
              _.name.clear(),
              _.description.clear(),
              _.timestamp_loc_updated.clear(),
              (_.postTime = _.rtime32_start_time),
              (_.nCommentCount = _.comment_count ?? 0),
              _.name.set(_.Bhc, _.event_name ?? ""),
              _.description.set(_.Bhc, _.event_notes ?? "");
          _.broadcaster_accountid &&
            (_.broadcaster = new _._(_.broadcaster_accountid));
          const _ = _._;
          try {
            _.jsondata = {
              ..._,
              ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
            };
          } catch (_) {
            const _ = (0, _._)(_);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  _.strErrorMsg,
                _,
              ),
              _)
            );
          }
          if (
            ((_.jsondata.localized_capsule_image = (0, _._)(
              _.jsondata.localized_capsule_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_title_image = (0, _._)(
              _.jsondata.localized_title_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_subtitle = (0, _._)(
              _.jsondata.localized_subtitle || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_summary = (0, _._)(
              _.jsondata.localized_summary || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_title = (0, _._)(
              _.jsondata.localized_broadcast_title || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_left_image = (0, _._)(
              _.jsondata.localized_broadcast_left_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_right_image = (0, _._)(
              _.jsondata.localized_broadcast_right_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_header = (0, _._)(
              _.jsondata.localized_sale_header || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_overlay = (0, _._)(
              _.jsondata.localized_sale_overlay || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_product_banner = (0, _._)(
              _.jsondata.localized_sale_product_banner || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_product_mobile_banner = (0, _._)(
              _.jsondata.localized_sale_product_mobile_banner || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_logo = (0, _._)(
              _.jsondata.localized_sale_logo || [],
              _.bP9,
              null,
            )),
            _.jsondata.sale_num_headers !== void 0 &&
              _.jsondata.localized_per_day_sales_header)
          )
            for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
              _.jsondata.localized_per_day_sales_header[_] = (0, _._)(
                _.jsondata.localized_per_day_sales_header[_],
                _.bP9,
                null,
              );
          return (
            _.jsondata.sale_sections &&
              _.jsondata.sale_sections.forEach((_, _) => {
                _.localized_label &&
                  (_.localized_label = (0, _._)(
                    _.localized_label,
                    _.bP9,
                    null,
                  )),
                  _.section_type === "trailercarousel" &&
                    (_.show_as_carousel = !1),
                  (_.jsondata.sale_sections[_] = {
                    ..._._,
                    ..._,
                  });
              }),
            _.jsondata.email_setting &&
              _.jsondata.email_setting.sections &&
              _.jsondata.email_setting.sections.forEach((_) => {
                _.localized_headline !== void 0 &&
                  _.localized_headline !== null &&
                  (_.localized_headline = (0, _._)(
                    _.localized_headline,
                    _.bP9,
                    null,
                  )),
                  _.localized_body !== void 0 &&
                    _.localized_body !== null &&
                    (_.localized_body = (0, _._)(
                      _.localized_body,
                      _.bP9,
                      null,
                    )),
                  _.localized_image !== void 0 &&
                    _.localized_image !== null &&
                    (_.localized_image = (0, _._)(
                      _.localized_image,
                      _.bP9,
                      null,
                    ));
              }),
            _.jsondata.localized_title_image.forEach((_, _) => {
              if (_ != null && _.substr(0, 4) == "http") {
                let _ = _.lastIndexOf("/"),
                  _ = _.substr(_ + 1);
                _.jsondata.localized_title_image[_] = _;
              }
            }),
            (_.bLoaded = !0),
            _.published
              ? _.unlisted
                ? (_.visibility_state = _._.k_EEventStateUnlisted)
                : _.hidden
                  ? (_.visibility_state = _._.k_EEventStateStaged)
                  : (_.visibility_state = _._.k_EEventStateVisible)
              : (_.visibility_state = _._.k_EEventStateUnpublished),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = null;
        class _ {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(_) {
            (0, _._)(
              typeof _.appid == "number",
              "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
            ),
              (this.appid = _.appid),
              (this.date = _.date),
              (this.can_play = _.can_play),
              (this.playtime = _.playtime),
              (this.announcementid = _.announcementid);
          }
        }
        const _ = null,
          _ = null;
        class _ {
          constructor(_ = !1) {
            (0, _._)(this), (this.m_bOnlySummary = _);
          }
          m_bOnlySummary = !1;
          m_mapExistingEvents = new Map();
          m_mapEventUpdateCallback = new Map();
          m_mapAnnouncementBodyToEvent = new Map();
          m_mapClanToGIDs = new Map();
          m_mapAppIDToGIDs = new Map();
          m_mapAdjacentAnnouncementGIDs = new Map();
          m_mapUpdatedApps = new Map();
          m_tsUpdatedAppsQueryTime = 0;
          m_rgQueuedEventsClanIDs = new Array();
          m_rgQueuedEventsUniqueIDs = new Array();
          m_rgQueuedEventsForEditFlags = new Array();
          m_QueuedEventTimeout = new _._();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let _ = (0, _._)("PartnerEventStore");
              this.ValidateStoreDefault(_) &&
                _.forEach((_) => {
                  if (_) {
                    let _ = new _._(_.clan_steamid);
                    const _ = this.InsertEventModelFromClanEventData(_, _);
                    _.announcement_body &&
                      this.m_mapExistingEvents.set(
                        _._ + _.announcement_body.gid,
                        _,
                      );
                  }
                });
              let _ = (0, _._)("partnereventstore", "application_config");
              this.ValidateStoreDefault(_) &&
                _.forEach((_) => {
                  if (_) {
                    let _ = new _._(_.clan_steamid);
                    const _ = this.InsertEventModelFromClanEventData(_, _);
                    _.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        _._ + _.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        _._ + _.announcement_body.gid,
                        _,
                      );
                  }
                });
              let _ = (0, _._)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(_) &&
                _.forEach((_) => {
                  _ &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      _.announcementGID,
                      _.adjacents,
                    );
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              _[0] &&
              typeof _[0] == "object"
              ? typeof _[0].gid == "string" ||
                  (typeof _[0].announcement_body == "object" &&
                    typeof _[0].announcement_body.gid == "string")
              : !1;
          }
          ValidateAdjacentEvent(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].announcementGID == "string" &&
                  Array.isArray(_[0].adjacents) &&
                  (_[0].adjacents.length == 0 ||
                    typeof _[0].adjacents[0] == "string")
              : !1;
          }
          GetPartnerEventChangeCallback(_) {
            let _ = this.m_mapEventUpdateCallback.get(_);
            return (
              _ ||
                (this.m_mapEventUpdateCallback.set(_, new _._()),
                (_ = this.m_mapEventUpdateCallback.get(_))),
              _
            );
          }
          GetClanEventGIDs(_) {
            let _ = this.m_mapClanToGIDs.get(_.GetAccountID());
            return _ || [];
          }
          GetClanEventGIDsForApp(_) {
            let _ = this.m_mapAppIDToGIDs.get(_);
            return _ || [];
          }
          GetClanEventModel(_) {
            return this.m_mapExistingEvents.get(_);
          }
          BHasClanEventModel(_) {
            return this.m_mapExistingEvents.has(_);
          }
          BHasClanAnnouncementGID(_) {
            if (this.m_mapAnnouncementBodyToEvent.has(_)) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(_);
              return !!_ && this.BHasClanEventModel(_);
            }
            return !1;
          }
          GetClanEventGIDFromAnnouncementGID(_) {
            return this.m_mapAnnouncementBodyToEvent.get(_);
          }
          GetClanEventFromAnnouncementGID(_) {
            const _ = this.m_mapAnnouncementBodyToEvent.get(_);
            return _ ? this.m_mapExistingEvents.get(_) : void 0;
          }
          DefaultEventSortFunction(_, _) {
            return _.startTime == _.startTime
              ? (0, _._)(_.GID ?? "", _.GID ?? "")
              : (_.startTime ?? 0) - (_.startTime ?? 0);
          }
          RegisterClanEvents(_) {
            if (_)
              for (const _ of _) {
                const _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  const _ = new _._(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
              }
          }
          GetRankedClanEvents(_, _) {
            let _ = [],
              _ = _
                ? this.GetClanEventGIDs(_)
                : _
                  ? this.GetClanEventGIDsForApp(_)
                  : void 0;
            if (!_ || _.length == 0) return _;
            for (let _ of _) {
              let _ = this.GetClanEventModel(_);
              _ && _.push(_);
            }
            return _.sort(this.DefaultEventSortFunction), _;
          }
          InsertEventModelFromClanEventData(_, _) {
            const _ = _(_, _);
            return (
              this.InsertUniqueEventGID(_.GetAccountID(), _.appid, _.GID),
              this.m_mapExistingEvents.set(_.GID, _),
              _.AnnouncementGID &&
                _.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
              _
            );
          }
          HelperInitializeNumSalesHeaderArray(_) {
            if ((_.jsondata.sale_num_headers ?? 0) > 1) {
              _.jsondata.localized_per_day_sales_header = [];
              for (let _ = 0; _ < (_.jsondata.sale_num_headers ?? 0); ++_)
                _.jsondata.localized_per_day_sales_header.push(
                  (0, _._)([], _.bP9, null),
                );
              _.m_overrideCurrentDay = 0;
            } else _.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(_) {
            let _ = new Array();
            return (
              this.m_mapClanToGIDs.has(_.GetAccountID()) &&
                this.m_mapClanToGIDs.get(_.GetAccountID()).forEach((_) => {
                  let _ = this.m_mapExistingEvents.get(_);
                  _ && _.push(_);
                }),
              _
            );
          }
          async QueueLoadPartnerEvent(_, _, _) {
            if (this.m_mapExistingEvents.has(_)) return;
            this.m_rgQueuedEventsClanIDs.push(_),
              this.m_rgQueuedEventsUniqueIDs.push(_),
              this.m_rgQueuedEventsForEditFlags.push(!!_),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (_) => (this.m_PendingInfoResolve = _),
                ));
            const _ = this.m_PendingInfoPromise,
              _ = () => {
                const _ = this.m_PendingInfoResolve,
                  _ = this.m_rgQueuedEventsClanIDs,
                  _ = this.m_rgQueuedEventsUniqueIDs,
                  _ = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(_, _, _).then(() => _?.());
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), _())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, _),
              _
            );
          }
          async InternalLoadPartnerEventList(_, _, _) {
            let _ = _.some((_) => _);
            const _ =
                _._.STORE_BASE_URL +
                (_
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              _ = (0, _._)((0, _.sfN)(_._.LANGUAGE)),
              _ = {
                clanid_list: _.join(","),
                uniqueid_list: _.join(","),
                lang_list: _,
                origin: self.origin,
              };
            try {
              const _ = await _().get(_, {
                params: _,
                withCredentials: _,
              });
              this.RegisterClanEvents(_.data.events);
            } catch (_) {
              let _ = (0, _._)(_);
              console.error("GetEventDetails hit error " + _.strErrorMsg, _);
            }
          }
          async LoadAdjacentPartnerEvents(_, _, _, _, _, _, _) {
            return this.InternalLoadAdjacentPartnerEvents(
              _,
              void 0,
              _,
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(_, _, _, _, _, _, _) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(_, _, _, _, _, _, _) {
            const _ = _ || _.clanSteamID;
            return _.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  _.AnnouncementGID,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  _.GID,
                  _.AnnouncementGID,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                );
          }
          async InternalLoadAdjacentPartnerEvents(_, _, _, _, _, _, _, _) {
            let _ = new Array();
            if (!_ || !this.m_mapAdjacentAnnouncementGIDs.has(_)) {
              let _ =
                _._.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const _ = (0, _._)((0, _.sfN)(_._.LANGUAGE));
              _?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, _._)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (_.only_summaries = void 0));
              let _ = {
                clan_accountid: _ ? _.GetAccountID() : void 0,
                appid: _,
                count_before: _,
                count_after: _,
                gidevent: _,
                gidannouncement: _,
                lang_list: _,
                rtime_oldestevent: _ ? _.rtime_oldestevent : void 0,
                require_tags:
                  _ && _.require_tags ? _.require_tags.join(",") : void 0,
                exclude_tags:
                  _ && _.exclude_tags ? _.exclude_tags.join(",") : void 0,
                require_no_tags: _ ? _.require_no_tags : void 0,
                event_type_filter:
                  _ && _.event_type_filter
                    ? _.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  _ && _.exclude_event_types
                    ? _.exclude_event_types.join(",")
                    : void 0,
                only_summaries: _ && !!_.only_summaries,
                origin: self.origin,
              };
              try {
                let _ = await _().get(_, {
                  params: _,
                  cancelToken: _?.token,
                });
                if (_?.data?.success == _._)
                  (0, _._)(() => {
                    for (let _ of _.data.events) {
                      let _ = _(_);
                      if (!this.m_mapExistingEvents.has(_)) {
                        let _ = new _._(_.clan_steamid);
                        this.InsertEventModelFromClanEventData(_ || _, _);
                      }
                      _.push(this.m_mapExistingEvents.get(_));
                    }
                    if (_.length == 0) {
                      if (_ && this.BHasClanEventModel(_))
                        this.m_mapExistingEvents.get(_) &&
                          _.push(this.m_mapExistingEvents.get(_));
                      else if (_ && this.BHasClanAnnouncementGID(_)) {
                        const _ = this.GetClanEventFromAnnouncementGID(_);
                        _ && _.push(_);
                      }
                    }
                  });
                else {
                  let _ = (0, _._)(_?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      _ +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      _.strErrorMsg,
                    _,
                  );
                }
              } catch (_) {
                let _ = (0, _._)(_);
                _.errorCode != _._ &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      _ +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      _.strErrorMsg,
                    _,
                  );
              }
            } else {
              let _ = this.m_mapAdjacentAnnouncementGIDs.get(_),
                _ = new Array();
              _?.forEach((_) => {
                if (this.m_mapAnnouncementBodyToEvent.has(_)) {
                  let _ = this.m_mapAnnouncementBodyToEvent.get(_);
                  _ &&
                    this.m_mapExistingEvents.get(_) &&
                    _.push(this.m_mapExistingEvents.get(_));
                } else _.push(_);
              }),
                _.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      _,
                      _,
                    )
                  ).forEach((_) => _.push(_));
            }
            return _;
          }
          async LoadPartnerEventsPageable(_, _, _ = 0, _ = 0, _) {
            let _ = new Array(),
              _ = _._.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              _ = {
                clan_accountid: _ ? _.GetAccountID() : void 0,
                appid: _,
                offset: _,
                count: _,
                _: _._.LANGUAGE,
                origin: self.origin,
                exclude_tags: _ && _.length > 0 ? _?.join(",") : void 0,
              };
            try {
              let _ = await _().get(_, {
                params: _,
              });
              (0, _._)(() => {
                for (let _ of _.data.events) {
                  let _ = _(_);
                  if (!this.m_mapExistingEvents.has(_)) {
                    let _ = new _._(_.clan_steamid);
                    this.InsertEventModelFromClanEventData(_, _);
                  }
                  _.push(this.m_mapExistingEvents.get(_));
                }
              });
            } catch (_) {
              console.error(
                "LoadClanEventInDateRange hit error " + (0, _._)(_).strErrorMsg,
              );
            }
            return _;
          }
          async GetBestEventsForCurrentUser(_, _, _) {
            let _ = new Array(),
              _ = {
                _: _._.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: _,
                include_only_game_updates: _,
              },
              _ = _._.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
            if (!_.data?.events) {
              let _ = _.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${_})`,
              );
            }
            return (
              (0, _._)(() => {
                for (let _ of _.data.events) {
                  let _ = _(_);
                  if (!this.m_mapExistingEvents.has(_)) {
                    let _ = new _._(_.clan_steamid);
                    this.InsertEventModelFromClanEventData(_, _);
                  }
                  let _ = {
                    nAppPriority: _.nAppPriority,
                    bPossibleTakeOver: _.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(_),
                  };
                  _.push(_);
                }
              }),
              _
            );
          }
          async LoadImportantEventsAroundToday(_, _, _, _, _, _) {
            let _ = new Array(),
              _ = new Array();
            _.push({
              priority: 0,
              appids: _,
            }),
              _ &&
                _.push({
                  priority: 1,
                  appids: _,
                }),
              _ &&
                _.push({
                  priority: 2,
                  appids: _,
                });
            let _ = {
                count: _,
                strAppIDPriority: JSON.stringify({
                  prioritized_apps: _,
                }),
                filterToEventTypes: _ ? _.toString() : "",
                _: _._.LANGUAGE,
              },
              _ = _._.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _.token,
              });
            return (
              (0, _._)(() => {
                for (let _ of _.data.events) {
                  let _ = _(_);
                  if (!this.m_mapExistingEvents.has(_)) {
                    let _ = new _._(_.clan_steamid);
                    this.InsertEventModelFromClanEventData(_, _);
                  }
                  _.push(this.m_mapExistingEvents.get(_));
                }
              }),
              _
            );
          }
          InsertUniqueEventGID(_, _, _) {
            let _ = this.m_mapClanToGIDs.get(_);
            _ ||
              (this.m_mapClanToGIDs.set(_, new Array()),
              (_ = this.m_mapClanToGIDs.get(_)));
            let _ = this.m_mapAppIDToGIDs.get(_);
            _ ||
              (this.m_mapAppIDToGIDs.set(_, new Array()),
              (_ = this.m_mapAppIDToGIDs.get(_))),
              _.indexOf(_) == -1 && (_.push(_), _.push(_));
          }
          ResetModel() {}
          async DeleteClanEvent(_, _) {
            this.m_mapExistingEvents.has(_) &&
              (this.m_mapExistingEvents.get(_).deleteInProgress = !0);
            let _ = new URLSearchParams();
            _.append("sessionid", (0, _._)()),
              _.append("bDelete", "1"),
              _.append("gid", _);
            const _ = await _().post(
              _._.COMMUNITY_BASE_URL +
                "/gid/" +
                _.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              _,
            );
            return this.RemoveGIDFromList(_, _), _.data;
          }
          RemoveGIDFromList(_, _) {
            if (
              (this.m_mapExistingEvents.delete(_),
              this.m_mapClanToGIDs.has(_.GetAccountID()))
            ) {
              let _ = this.m_mapClanToGIDs.get(_.GetAccountID()),
                _ = _.indexOf(_);
              _ >= 0 && _.splice(_, 1);
            }
          }
          FlushEventFromCache(_, _) {
            if (
              (_ &&
                this.m_mapExistingEvents.has(_) &&
                (_ || (_ = this.m_mapExistingEvents.get(_).AnnouncementGID),
                this.m_mapExistingEvents.delete(_)),
              _ &&
                (this.m_mapExistingEvents.has(_._ + _) &&
                  this.m_mapExistingEvents.delete(_._ + _),
                this.m_mapAnnouncementBodyToEvent.has(_)))
            ) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(_);
              _ &&
                this.m_mapExistingEvents.has(_) &&
                this.m_mapExistingEvents.delete(_),
                this.m_mapAnnouncementBodyToEvent.delete(_);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            _,
            _,
            _,
            _,
            _,
            _ = !1,
          ) {
            let _ = (0, _._)(_ ? _.Bhc : (0, _.sfN)(_._.LANGUAGE)),
              _ = {
                appid: _,
                clan_accountid: _ ? _.GetAccountID() : void 0,
                announcement_gid: _,
                event_gid: _,
                lang_list: _,
                last_modified_time: _ || 0,
                origin: self.origin,
                for_edit: _,
                only_summary: this.m_bOnlySummary,
              },
              _ = null,
              _ = null;
            if (_) {
              const _ = (0, _._)();
              _ === "community"
                ? ((_ = _._.COMMUNITY_BASE_URL),
                  (_ += _ ? "gid/" + _.ConvertTo64BitString() : "ogg/" + _),
                  (_ += "/"))
                : _ === "partnerweb"
                  ? (_ = _._.PARTNER_BASE_URL + "sales/")
                  : (_ = _._.STORE_BASE_URL + "events/"),
                (_ += "ajaxgetpartnereventforedit"),
                (_ = {
                  params: _,
                  withCredentials: !0,
                });
            } else
              (_ = _._.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (_ = {
                  params: _,
                  withCredentials: !1,
                });
            try {
              let _ = await _().get(_, _);
              if (_.data.success !== _._) return;
              let _ = _.data.event,
                _ = _(_);
              if (
                !this.m_mapExistingEvents.has(_) ||
                (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
                  (_.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ??
                  0) < (_.rtime_mod_reviewed ?? 0)
              ) {
                (0, _._)(
                  _.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let _ = new _._(_.clan_steamid);
                this.InsertEventModelFromClanEventData(_, _);
              }
              return this.m_mapExistingEvents.get(_);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            _,
            _,
            _,
            _,
            _,
            _,
          ) {
            if (_ && this.m_mapExistingEvents.has(_))
              return this.m_mapExistingEvents.get(_);
            if (_) {
              if (this.m_mapExistingEvents.has(_._ + _))
                return this.m_mapExistingEvents.get(_._ + _);
              if (this.m_mapAnnouncementBodyToEvent.has(_)) {
                const _ = this.m_mapAnnouncementBodyToEvent.get(_);
                if (_ && this.m_mapExistingEvents.has(_))
                  return this.m_mapExistingEvents.get(_);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              _,
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              _,
              void 0,
              _,
              _,
              _,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              _,
              void 0,
              void 0,
              _,
              _,
              _,
            );
          }
          async LoadPartnerEventFromClanEventGID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              _,
              _,
              void 0,
              _,
              _,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              _,
              void 0,
              _,
              void 0,
              _,
              _,
            );
          }
          async LoadPartnerEventGeneric(_, _, _, _, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              _,
              _,
              _,
              _,
              _,
            );
          }
          async LoadHiddenPartnerEvent(_, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              _,
              void 0,
              _,
              void 0,
              0,
              !0,
            );
          }
          async LoadHiddenPartnerEventByAnnouncementGID(_, _) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              _,
              void 0,
              void 0,
              _,
              0,
              !0,
            );
          }
          async HintLoadImportantUpdates() {
            const _ = (0, _._)(36e5);
            if (_ != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = _;
              const _ = {
                  page: 1,
                  numPerPage: 500,
                  includeAnnouncements: !1,
                },
                _ = _._.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                _ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                });
              _.data.apps &&
                _.data.apps.length > 0 &&
                (0, _._)(() => {
                  const _ = new Map(
                    _.data.apps?.map((_) => [_.appid, new _(_)]),
                  );
                  this.m_mapUpdatedApps = _;
                });
            }
            return this.m_mapUpdatedApps;
          }
          GetAppImportantUpdate(_) {
            return (
              this.HintLoadImportantUpdates().catch((_) => {
                console.log("UpdatedApps failed to load: ", _.response?.data);
              }),
              this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(_)
            );
          }
          async LoadClanEventLocalizationFromAnnouncementGID(_, _) {
            let _ =
              _._.COMMUNITY_BASE_URL +
              "gid/" +
              _.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              _;
            return (await _().get(_)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, _, _) {
            const _ = new Array(),
              _ = _._.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              _ = (0, _._)((0, _.sfN)(_._.LANGUAGE));
            let _ = null,
              _ = null;
            if (_) {
              let _ = new Array();
              _.forEach((_) => {
                this.m_mapExistingEvents.has(_)
                  ? _.push(this.m_mapExistingEvents.get(_))
                  : _.push(_);
              }),
                _.sort(),
                (_ = _);
            }
            if (_) {
              let _ = new Array();
              _.forEach((_) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(_) &&
                  this.m_mapAnnouncementBodyToEvent.get(_) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(_),
                  )
                ) {
                  let _ = this.m_mapAnnouncementBodyToEvent.get(_);
                  if (_) {
                    const _ = this.m_mapExistingEvents.get(_);
                    _ && _.push(_);
                  }
                } else _.push(_);
              }),
                _.sort(),
                (_ = _);
            }
            if (!_ && !_) return _;
            const _ = new Array(),
              _ = 100;
            for (; (_?.length ?? 0) > 0 || (_?.length ?? 0) > 0; ) {
              let _ = {
                event_gids:
                  (_?.length ?? 0) > 0 ? _?.splice(0, _).join(",") : void 0,
                announcement_gids:
                  (_?.length ?? 0) > 0 ? _?.splice(0, _).join(",") : void 0,
                lang_list: _,
                origin: self.origin,
              };
              _.push(
                _().get(_, {
                  params: _,
                  cancelToken: _ ? _.token : void 0,
                }),
              );
            }
            try {
              const _ = await Promise.all([..._]);
              let _ = 0;
              (0, _._)(() =>
                _.forEach((_) => {
                  if (_ && _.data && _.data.events)
                    for (let _ of _.data.events) {
                      let _ = _(_);
                      if (!this.m_mapExistingEvents.has(_)) {
                        let _ = new _._(_.clan_steamid);
                        this.InsertEventModelFromClanEventData(_, _);
                      }
                      _.push(this.m_mapExistingEvents.get(_));
                    }
                  else {
                    const _ = (0, _._)(_);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        _.strErrorMsg,
                      _,
                    );
                  }
                  _ += 1;
                }),
              );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  _.strErrorMsg,
                _,
              );
            }
            return _;
          }
          async SavePartnerEventSaleAssets(_, _, _, _) {
            let _ = null;
            if (!this.m_mapExistingEvents.has(_)) return !1;
            try {
              const _ = `${_._.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${_}`,
                _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gidclanevent", _),
                _.append("json", JSON.stringify(_)),
                _.append("pageStyles", JSON.stringify(_));
              const _ = await _().post(_, _, {
                withCredentials: !0,
              });
              if (_?.data?.success == _._) {
                const _ = this.m_mapExistingEvents.get(_);
                if (_ && _.jsondata) {
                  for (const _ in _)
                    if (_.hasOwnProperty(_) && _[_]) {
                      const _ = _,
                        _ = _[_];
                      _ !== void 0 && _ !== void 0 && (_.jsondata[_] = _);
                    }
                }
                return this.GetPartnerEventChangeCallback(_).Dispatch(_), !0;
              }
              _ = (0, _._)(_);
            } catch (_) {
              _ = (0, _._)(_);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  _?.strErrorMsg,
                _,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        _([_._], _.prototype, "m_mapExistingEvents", 2),
          _([_._], _.prototype, "m_mapAnnouncementBodyToEvent", 2),
          _([_._], _.prototype, "m_mapClanToGIDs", 2),
          _([_._], _.prototype, "m_mapAppIDToGIDs", 2),
          _([_._], _.prototype, "m_mapUpdatedApps", 2),
          _([_._], _.prototype, "Init", 1),
          _([_._], _.prototype, "GetPartnerEventChangeCallback", 1),
          _([_._], _.prototype, "RegisterClanEvents", 1),
          _([_._], _.prototype, "InsertEventModelFromClanEventData", 1),
          _([_._], _.prototype, "DeleteClanEvent", 1),
          _([_._], _.prototype, "RemoveGIDFromList", 1),
          _([_._], _.prototype, "FlushEventFromCache", 1),
          _([_._], _.prototype, "SavePartnerEventSaleAssets", 1);
        const _ = new _();
        (0, _._)("g_PartnerEventStore", _);
        const _ = new _(!0);
        (0, _._)("g_PartnerEventSummaryStore", _);
        function _(_, _, _ = !1) {
          const [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
            [_, _] = (0, _.useState)(!0),
            _ = (0, _.useMemo)(() => _._.InitFromClanID(_), [_]);
          return (
            (0, _.useEffect)(() => {
              !_ &&
                _ > 0 &&
                (_.Init(),
                _.LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, 0, _)
                  .then(_)
                  .finally(() => _(!1)));
            }, [_, _, _, _, _]),
            (0, _._)(_ ? _.GetPartnerEventChangeCallback(_) : void 0, _),
            {
              eventModel: _,
              bLoading: _,
            }
          );
        }
        function _() {
          return {
            fnSaveSaleAssets: _.SavePartnerEventSaleAssets,
          };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return window.StoreDefaults ? window.StoreDefaults[_] : void 0;
        }
      },
    },
  ]);
})();
