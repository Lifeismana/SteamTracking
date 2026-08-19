"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
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
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      async function _(_) {
        const _ = await fetch(_, {
          method: "GET",
        });
        if (404 == _.status) return null;
        if (!_._) throw new Error(`Server returned ${_.status}`);
        const _ = await _.json();
        return _.success != _._ ? null : _;
      }
      function _() {
        return "undefined" != typeof window && "undefined" != typeof self
          ? self.origin
          : "ssr_server";
      }
      function _(_) {
        return ["clantoclaninfo", _];
      }
      function _(_) {
        return ["apptoclanid", _];
      }
      function _(_, _ = "group") {
        return ["vanitytoclanid", _, _?.toLocaleLowerCase()];
      }
      function _(_) {
        const _ = _?.[0];
        return (
          "clantoclaninfo" == _ || "apptoclanid" == _ || "vanitytoclanid" == _
        );
      }
      const _ = new WeakSet();
      function _(_) {
        if (!_.has(_)) {
          _.add(_);
          for (const _ of [
            ["clantoclaninfo"],
            ["apptoclanid"],
            ["vanitytoclanid"],
          ])
            _.setQueryDefaults(_, {
              staleTime: 1 / 0,
              gcTime: 1 / 0,
              retry: !1,
            });
        }
      }
      const _ = new WeakMap();
      function _(_) {
        if (!_) return null;
        let _ = _.get(_);
        return (
          _ ||
            ((_ = {
              ..._,
              clanSteamID: _.clanSteamIDString
                ? new _._(_.clanSteamIDString)
                : _._.InitFromClanID(_.clanAccountID),
            }),
            _.set(_, _)),
          _
        );
      }
      function _(_, _) {
        if (!_) return null;
        _(_);
        const _ = (function (_) {
          const { msg: _, success: _, ..._ } = _;
          return {
            ..._,
            rss_language: _.rss_language ? _.rss_language : _.Bhc,
          };
        })(_);
        return (
          _.setQueryData(_(_.clanAccountID), _),
          _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
          _.vanity_url &&
            _.setQueryData(_(_.vanity_url, "group"), _.clanAccountID),
          _
        );
      }
      function _(_, _) {
        for (const _ of _) _(_, _);
      }
      function _(_) {
        const _ = (0, _._)();
        return (0, _._)(_(_, _));
      }
      function _(_, _) {
        return (
          _(_),
          {
            queryKey: _(_ ?? null),
            queryFn: async () =>
              _
                ? _(
                    _,
                    await (async function (_) {
                      const _ = _._.InitFromClanID(_);
                      return _(
                        `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${_()}`,
                      );
                    })(_),
                  )
                : null,
            enabled: void 0 !== _,
            select: _,
          }
        );
      }
      function _(_, _) {
        return (
          _(_),
          {
            queryKey: _(_),
            queryFn: async () =>
              _(
                _,
                await (async function (_) {
                  return _(
                    `${_._.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${_()}`,
                  );
                })(_),
              )?.clanAccountID ?? null,
            enabled: !!_,
          }
        );
      }
      function _(_, _, _ = "group") {
        return (
          _(_),
          {
            queryKey: _(_, _),
            queryFn: async () => {
              if ("store" == _) {
                const _ = _.getQueryData(_(_, "group"));
                if (_) return _;
              }
              const _ =
                "store" == _
                  ? await (async function (_) {
                      return _(
                        `${_._.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${_()}`,
                      );
                    })(_)
                  : await (async function (_) {
                      return _(
                        `${_._.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${_()}`,
                      );
                    })(_);
              return _(_, _)?.clanAccountID ?? null;
            },
            enabled: !!_,
          }
        );
      }
      function _(_, _) {
        if (_) return _(_.getQueryData(_(_))) ?? void 0;
      }
      function _(_, _) {
        if (_) return _(_.getQueryData(_(_)), _);
      }
      function _(_, _, _) {
        if (!_) return;
        const _ = _ ? [_] : ["store", "group"];
        for (const _ of _) {
          const _ = _(_.getQueryData(_(_, _)), _);
          if (_) return _;
        }
      }
      async function _(_, _) {
        return _ ? _(await _.fetchQuery(_(_, _))) : null;
      }
      async function _(_, _) {
        return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
      }
      async function _(_, _, _ = "group") {
        return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ =
          (__webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid");
      const _ = new WeakSet();
      function _(_ = _._) {
        if ("undefined" == typeof window) return;
        if (_.has(_)) return;
        const _ = (0, _._)("groupvanityinfo", "application_config");
        (void 0 === _ && "complete" != document.readyState) ||
          (_.add(_), _(_) && (0, _._)(_, _));
      }
      function _(_) {
        const _ = _;
        return (
          !!(
            _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            "object" == typeof _[0]
          ) &&
          "number" == typeof _[0].clanAccountID &&
          ("number" == typeof _[0].appid || "string" == typeof _[0].vanity_url)
        );
      }
      function _(_) {
        return "string" == typeof _ ? parseInt(_) : _;
      }
      function _(_) {
        return "string" == typeof _ ? Number.parseInt(_) : _;
      }
      const _ = new (class {
        m_queryClient = _._;
        m_boxCacheVersion = _._.box(0);
        m_bWatchingCache = !1;
        m_bBumpScheduled = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          _(this.m_queryClient),
            this.m_bWatchingCache ||
              ((this.m_bWatchingCache = !0),
              this.m_queryClient.getQueryCache().subscribe((_) => {
                ("added" != _?.type &&
                  "updated" != _?.type &&
                  "removed" != _?.type) ||
                  ((0, _._)(_.query?.queryKey) &&
                    this.ScheduleCacheVersionBump());
              }));
        }
        ScheduleCacheVersionBump() {
          this.m_bBumpScheduled ||
            ((this.m_bBumpScheduled = !0),
            queueMicrotask(() => {
              (this.m_bBumpScheduled = !1),
                (0, _._)(() =>
                  this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
                );
            }));
        }
        ReadCache() {
          return (
            this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
          );
        }
        AddGroupVanities(_) {
          this.LazyInit(), _(_) && (0, _._)(this.m_queryClient, _);
        }
        BHasClanInfoLoaded(_) {
          return (
            (0, _._)(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, _._)(
              _.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(_) {
          return Boolean((0, _._)(_(_), this.ReadCache()));
        }
        RegisterClanData(_) {
          this.LazyInit(), (0, _._)(this.m_queryClient, _);
        }
        async LoadOGGClanInfoForAppID(_) {
          return (
            this.LazyInit(),
            (_ = _(_)),
            (0, _._)(
              0 != _,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == _ ? null : (0, _._)(_, this.m_queryClient).catch(() => null)
          );
        }
        async LoadOGGClanInfoForIdentifier(_) {
          return this.LazyInit(), (0, _._)(_, this.m_queryClient, "store");
        }
        async LoadOGGClanInfoForGroupVanity(_) {
          return this.LazyInit(), (0, _._)(_, this.m_queryClient, "group");
        }
        async LoadClanInfoForClanSteamID(_) {
          return this.LoadClanInfoForClanAccountID(_.GetAccountID());
        }
        async LoadClanInfoForClanAccountID(_) {
          return this.LazyInit(), (0, _._)(_(_), this.m_queryClient);
        }
        GetOGGClanInfo(_) {
          const _ = this.ReadCache();
          return "string" == typeof _ ? (0, _._)(_, _) : (0, _._)(_, _);
        }
        GetClanSteamIDForAppID(_) {
          const _ = (0, _._)(_(_), this.ReadCache());
          return _ ? _._.InitFromClanID(_.clanAccountID) : void 0;
        }
        GetClanVanityForAppID(_) {
          return (0, _._)(_(_), this.ReadCache())?.vanity_url;
        }
        GetClanVanityForClanSteamID(_) {
          return (0, _._)(_.GetAccountID(), this.ReadCache())?.vanity_url;
        }
        HasLoadedClanAccountID(_) {
          return this.BHasClanInfoLoadedByAccountID(_);
        }
        GetClanMemberCount(_) {
          return (0, _._)(_(_), this.ReadCache())?.member_count ?? 0;
        }
        GetClanInfoByClanAccountID(_) {
          return (
            (0, _._)(
              !!_,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            (0, _._)(_(_), this.ReadCache())
          );
        }
        GetCreatorStoreURL(_) {
          let _ = _._.GetCreatorHome(_);
          if (_) return _.GetCreatorHomeURL("developer");
          let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
          return (
            _._.COMMUNITY_BASE_URL +
            (_.vanity_url
              ? "groups/" + _.vanity_url
              : "gid/" + _.ConvertTo64BitString())
          );
        }
      })();
      function _() {
        const _ = (0, _._)();
        return _(_), _;
      }
      function _(_) {
        _();
        const { data: _, isPending: _ } = (0, _._)(_ ? _(_) : void 0);
        return [Boolean(_) && _, _ ?? void 0];
      }
      function _(_) {
        const _ = _();
        (0, _.useEffect)(() => {
          _ &&
            (0, _._)(_(_), _).catch((_) =>
              console.error(`Failed to hint load clan info ${_}`, _),
            );
        }, [_, _]);
      }
      (0, _._)("g_ClanStore", _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
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
      class _ {
        clanid = void 0;
        appid = 0;
        can_edit = !1;
        owns_app = !1;
        follows_app = !1;
        support_user = !1;
        valve_admin = !1;
        limited_user = !1;
        event_ignored = new Array();
        event_followed = new Array();
        event_followed_flags = new Array();
        constructor(_) {
          (0, _._)(this), (this.clanid = _);
        }
      }
      (0, _._)([_._], _.prototype, "clanid", void 0),
        (0, _._)([_._], _.prototype, "appid", void 0),
        (0, _._)([_._], _.prototype, "can_edit", void 0),
        (0, _._)([_._], _.prototype, "owns_app", void 0),
        (0, _._)([_._], _.prototype, "follows_app", void 0),
        (0, _._)([_._], _.prototype, "support_user", void 0),
        (0, _._)([_._], _.prototype, "valve_admin", void 0),
        (0, _._)([_._], _.prototype, "limited_user", void 0),
        (0, _._)([_._], _.prototype, "event_ignored", void 0),
        (0, _._)([_._], _.prototype, "event_followed", void 0),
        (0, _._)([_._], _.prototype, "event_followed_flags", void 0),
        (function (_) {
          (_[(_.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (_[(_.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (_[(_.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, _._)();
        static Get() {
          return (
            (0, _._)(
              !!_.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            _.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!_.s_EventUserStore;
        }
        static async InitGlobal(_) {
          if (!_.s_EventUserStore) {
            const _ = new _();
            await _.Init(_),
              (_.s_EventUserStore = _),
              "dev" == _._.WEB_UNIVERSE && (window.g_EventUserStore = _);
          }
        }
        static BIsInited() {
          return Boolean(_.s_EventUserStore);
        }
        async Init(_) {
          (this.m_cm = _), (this.m_tracker = new _._(_));
          const _ = (0, _._)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(_) &&
            ((0, _._)(() => {
              _.forEach((_) => {
                let _ = new _(_.clanid),
                  _ = {
                    result: _,
                    promise: _.RemapToPromise(_),
                    bLoaded: !0,
                  };
                this.CopyFromResponseToTrack(_, _),
                  this.m_mapClanToUserPermissions.set(_.clanid, _);
              });
            }),
            ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let _ = (0, _._)("uservotes", "application_config");
          _ &&
            (0, _._)(() => {
              __webpack_require__.forEach((_) => {
                let _ = !!_.voted_up || (!_.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(_.clanAnnouncementGID, _);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !!(
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              "object" == typeof _[0]
            ) &&
            "number" == typeof _[0].clanid &&
            "number" == typeof _[0].appid
          );
        }
        RecordEventShown(_, _) {
          _ &&
            !_.bOldAnnouncement &&
            _.GID &&
            this.m_tracker.MarkEventShown(
              _.GID,
              _.clanSteamID.GetAccountID(),
              _,
            );
        }
        RecordEventRead(_, _) {
          _ &&
            !_.bOldAnnouncement &&
            _.GID &&
            (this.HasEventBeenRead(_.GID) ||
              (this.SetEventAsRead(_.GID),
              this.m_tracker.MarkEventRead(
                _.GID,
                _.clanSteamID.GetAccountID(),
                _,
              )));
        }
        SetEventAsRead(_) {
          this.m_setReadEventGIDs.add(_);
        }
        HasEventBeenRead(_) {
          return this.m_setReadEventGIDs.has(_);
        }
        static async RemapToPromise(_) {
          return _;
        }
        BIsUserLoggedIn() {
          return _._.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(_) {
          return (
            this.m_mapClanToUserPermissions.has(_) &&
            this.m_mapClanToUserPermissions.get(_).bLoaded
          );
        }
        GetPartnerEventPermissions(_) {
          if (!_ || !_.BIsValid()) return new _(0);
          const _ = _.GetAccountID();
          this.m_mapClanToUserPermissions.has(_) ||
            this.LoadSingleAppEventPermissions(_);
          return this.m_mapClanToUserPermissions.get(_).result;
        }
        BFollowsEvent(_, _) {
          return (
            -1 != this.GetPartnerEventPermissions(_).event_followed.indexOf(_)
          );
        }
        BFollowsEventAndNotifiedBy(_, _, _) {
          let _ = this.GetPartnerEventPermissions(_),
            _ = _.event_followed.indexOf(_);
          return -1 !== _ && (_.event_followed_flags[_] & _) == _;
        }
        BIgnoresEvent(_, _) {
          return (
            -1 != this.GetPartnerEventPermissions(_).event_ignored.indexOf(_)
          );
        }
        async LoadSingleAppEventPermissions(_) {
          let _ = _.GetAccountID(),
            _ = this.m_mapClanToUserPermissions.get(_);
          return (
            _ ||
              ((_ = {
                promise: this.InternalLoadSingleAppEventPermissions(_),
                result: new _(_),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(_, _)),
            _.promise
          );
        }
        CopyFromResponseToTrack(_, _) {
          (_.result.appid = _.appid ?? 0),
            (_.result.can_edit = !!_.can_edit),
            (_.result.clanid = _.appid),
            (_.result.event_followed = _.event_followed ?? []),
            (_.result.event_ignored = _.event_ignored ?? []),
            (_.result.event_followed_flags = _.event_followed_flags ?? []),
            (_.result.follows_app = !!_.follows_app),
            (_.result.owns_app = !!_.owns_app),
            (_.result.limited_user = !!_.limited_user),
            (_.support_user || _.valve_admin) && this.m_bIsPresentationMode
              ? ((_.result.can_edit = !0),
                (_.result.support_user = !1),
                (_.result.valve_admin = !1))
              : ((_.result.support_user = !!_.support_user),
                (_.result.valve_admin = !!_.valve_admin)),
            (_.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(_) {
          let _ = null,
            _ = _.GetAccountID(),
            _ = !Boolean(_._.logged_in);
          if (!this.m_mapClanToUserPermissions.has(_)) {
            let _ = new _(_.GetAccountID());
            this.m_mapClanToUserPermissions.set(_, {
              result: _,
              promise: _.RemapToPromise(_),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(_._.logged_in)) {
              let _ =
                  _._.COMMUNITY_BASE_URL +
                  "gid/" +
                  _.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                _ = {};
              if (
                ("partnerweb" == (0, _._)()
                  ? ((_ =
                      _._.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (_ = {
                      clanaccountid: _.GetAccountID(),
                    }))
                  : "store" == (0, _._)() &&
                    ((_ =
                      _._.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (_ = {
                      clanaccountid: _.GetAccountID(),
                    })),
                (_ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                })),
                _ && _.data.success == _._)
              ) {
                let _ = this.m_mapClanToUserPermissions.get(_);
                _ && this.CopyFromResponseToTrack(_, _.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, _._)(_?.data).strErrorMsg,
                ),
                  (_ = !0);
            }
          } catch (_) {
            if (
              ((_ = _.response),
              (_ = !0),
              _ &&
                void 0 !== _.response &&
                void 0 !== _.response.data &&
                void 0 !== _.response.data.success &&
                _.response.data.success == _._)
            );
            else {
              const _ = (0, _._)(_);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  _ +
                  ": " +
                  _.strErrorMsg,
                _,
              );
            }
          } finally {
            _ &&
              (0, _._)(() => {
                let _ = this.m_mapClanToUserPermissions.get(_);
                (_.result.appid = _?.data.appid ?? 0),
                  (_.result.can_edit = !1),
                  (_.result.clanid = _ && _.data ? _.data.clanid : 0),
                  (_.result.event_followed = new Array()),
                  (_.result.event_ignored = new Array()),
                  (_.result.event_followed_flags = new Array()),
                  (_.result.follows_app = !1),
                  (_.result.owns_app = !1),
                  (_.result.support_user = !1),
                  (_.result.valve_admin = !1),
                  (_.result.limited_user = !1),
                  (_.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(_).result;
        }
        async SetFollowOrUnfollowEvent(_, _, _, _, _) {
          let _ = this.GetPartnerEventPermissions(_),
            _ = _.event_followed.indexOf(_),
            _ = 0;
          -1 !== _ &&
            ((_ = _.event_followed_flags[_]), _ ? (_ = _ & ~_) : (_ |= _));
          let _ = 0 == _,
            _ =
              ("store" === (0, _._)()
                ? _._.STORE_BASE_URL + "events"
                : _._.COMMUNITY_BASE_URL +
                  "/gid/" +
                  __webpack_require__.ConvertTo64BitString()) +
              (_ ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            _ = new URLSearchParams();
          _.append("sessionid", (0, _._)()),
            _.append("ignore", "" + _),
            _.append("gid", _),
            _.append("notification_flag", "" + _),
            _.append("clan_accountid", "" + __webpack_require__.GetAccountID());
          await _().post(_, _, {
            withCredentials: !0,
          });
          (0, _._)(() => {
            let _ = this.m_mapClanToUserPermissions.get(
                __webpack_require__.GetAccountID(),
              ),
              _ = null,
              _ = null,
              _ = null,
              _ = null;
            _
              ? ((_ = _ ? _.result.event_ignored : _.result.event_followed),
                (_ = _ ? null : _.result.event_followed_flags))
              : _
                ? ((_ = _.result.event_followed),
                  (_ = _.result.event_followed_flags),
                  (_ = _.result.event_ignored))
                : ((_ = _.result.event_ignored),
                  (_ = _.result.event_followed),
                  (_ = _.result.event_followed_flags));
            let _ = _.indexOf(_);
            if ((_ > -1 && (_.splice(_, 1), _ && _.splice(_, 1)), _)) {
              let _ = _.indexOf(_);
              -1 == _ ? (_.push(_), _ && _.push(_)) : _ && (_[_] = _);
            }
          });
        }
        async Vote(_, _, _) {
          if (!_ || !_.AnnouncementGID) return !1;
          const _ = this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
          if (_ === _) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _),
            (0, _._)(() => {
              !0 === _ && _.UpdateVoteCount("up", -1),
                !1 === _ && _.UpdateVoteCount("down", -1),
                !0 === _ && _.UpdateVoteCount("up", 1),
                !1 === _ && _.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let _ = _._.Init(_._);
            return (
              __webpack_require__.Body().set_announcementid(_.AnnouncementGID),
              __webpack_require__.Body().set_vote_up(!!_),
              __webpack_require__
                .Body()
                .set_clan_accountid(_.clanSteamID.GetAccountID()),
              (
                await _._.RateClanAnnouncement(
                  this.m_cm.GetServiceTransport(),
                  _,
                )
              ).GetEResult() == _._
            );
          }
          {
            const _ = (0, _._)(),
              _ =
                "community" == _ || "steamtv" == _
                  ? _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    _.AnnouncementGID
                  : _._.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    _.AnnouncementGID,
              _ = new URLSearchParams();
            _.append("sessionid", (0, _._)()),
              _.append("voteup", _ ? "1" : "0"),
              _.append("clanid", "" + _.clanSteamID.GetAccountID()),
              _.append("ajax", "1");
            const _ = {
              withCredentials: !0,
              cancelToken: _.token,
            };
            return (await _().post(_, _, _)).data.success == _._;
          }
        }
        async LoadMyVote(_, _) {
          if (_?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
            let _;
            if (this.m_cm) {
              let _ = _._.Init(_._);
              _.Body().set_announcementid(_.AnnouncementGID);
              let _ = await _._.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                _,
              );
              _.GetEResult() == _._ &&
                (_ =
                  !!_.Body().voted_up() || (!_.Body().voted_down() && void 0));
            } else {
              const _ = "store" == (0, _._)(),
                _ = _
                  ? _._.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    _.AnnouncementGID,
                _ = {
                  gid: _ ? _.AnnouncementGID : void 0,
                },
                _ = await _().get(_, {
                  withCredentials: !0,
                  cancelToken: _.token,
                  params: _,
                });
              _ = !!_.data.voted_up || (!_.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _), _;
          }
        }
        SetVote(_, _) {
          this.m_mapAnnounceGIDToVote.set(_, _);
        }
        BHasMyVote(_) {
          return (
            !!_.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(_) {
          return _.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(_) {
          if (_.BHasEmailEnabled()) return !0;
          if (_.clanSteamID.GetAccountID() == (0, _._)()) return !0;
          let _ = this.GetPartnerEventPermissions(_.clanSteamID);
          return (_._.IS_OGG || _._.IS_VALVE_GROUP) && _.valve_admin;
        }
      }
      function _() {
        const [_, _] = (0, _.useState)(() => _.BIsInited());
        return (
          (0, _.useEffect)(() => {
            if (!_) {
              (async () => {
                await Promise.all([_.InitGlobal()]), _(!0);
              })();
            }
          }, [_]),
          _
        );
      }
      function _(_) {
        const [_, _] = (0, _.useState)(
            _.Get().BIsPartnerEventPermissionsLoaded(_),
          ),
          _ = _._.InitFromClanID(_),
          [_, _] = (0, _.useState)(_.Get().GetPartnerEventPermissions(_));
        return (
          (0, _.useEffect)(() => {
            if (!_) {
              const _ = _._.InitFromClanID(_);
              _.Get()
                .LoadSingleAppEventPermissions(_)
                .then((_) => {
                  _(_), __webpack_require__(!0);
                });
            }
          }, [_, _]),
          _
        );
      }
      (0, _._)([_._], _.prototype, "m_mapClanToUserPermissions", void 0),
        (0, _._)([_._], _.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, _._)([_._], _.prototype, "m_setReadEventGIDs", void 0),
        (0, _._)([_._], _.prototype, "CopyFromResponseToTrack", null);
    },
  },
]);
