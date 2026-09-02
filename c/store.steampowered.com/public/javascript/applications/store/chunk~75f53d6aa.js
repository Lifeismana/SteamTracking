"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [51706],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new WeakSet();
        function _(_ = _._) {
          if (typeof window > "u" || _.has(_)) return;
          const _ = (0, _._)("groupvanityinfo", "application_config");
          (_ === void 0 && document.readyState != "complete") ||
            (_.add(_), _(_) && (0, _._)(_, _));
        }
        function _(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            typeof _[0] == "object"
            ? typeof _[0].clanAccountID == "number" &&
                (typeof _[0].appid == "number" ||
                  typeof _[0].vanity_url == "string")
            : !1;
        }
        function _(_) {
          return typeof _ == "string" ? parseInt(_) : _;
        }
        function _(_) {
          return typeof _ == "string" ? Number.parseInt(_) : _;
        }
        class _ {
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
                  (_?.type != "added" &&
                    _?.type != "updated" &&
                    _?.type != "removed") ||
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
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
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
            return !!(0, _._)(_(_), this.ReadCache());
          }
          RegisterClanData(_) {
            this.LazyInit(), (0, _._)(this.m_queryClient, _);
          }
          async LoadOGGClanInfoForAppID(_) {
            return (
              this.LazyInit(),
              (_ = _(_)),
              (0, _._)(
                _ != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              _ == 0 ? null : (0, _._)(_, this.m_queryClient).catch(() => null)
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
            return typeof _ == "string" ? (0, _._)(_, _) : (0, _._)(_, _);
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
        }
        const _ = new _();
        (0, _._)("g_ClanStore", _);
        function _() {
          const _ = (0, _._)();
          return _(_), _;
        }
        function _(_) {
          _();
          const { data: _, isPending: _ } = (0, _._)(_ ? _(_) : void 0);
          return [!!_ && _, _ ?? void 0];
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
        function _(_) {
          return _(), useClanInfoByVanityQuery(_).data ?? null;
        }
        function _(_) {
          _();
          const _ = _ ? _(_) : void 0,
            { data: _, isPending: _ } = useClanInfoByAppIDQuery(_);
          return {
            bLoadingClanInfo: !!_ && _,
            clanInfo: _ ?? null,
          };
        }
        function _(_) {
          const _ = _.BIsOGGEvent(),
            _ = CEventUserStore.Get().GetPartnerEventPermissions(
              _.clanSteamID,
            ).valve_admin;
          if (_)
            return {
              bVisible: !1,
            };
          if (_.GetEventType() == k_EClanEventType_CreatorHome)
            return {
              bVisible: !1,
            };
          if (_.BHasSaleEnabled())
            return {
              bVisible: !0,
            };
          if (
            _.jsondata.clone_from_event_gid &&
            _.jsondata.clone_from_sale_enabled
          )
            return {
              bVisible: !0,
            };
          if (_.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return {
              bVisible: !1,
            };
          const _ = g_CreatorHomeStore.GetCreatorHome(_.clanSteamID);
          return _ &&
            _.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? {
                bVisible: !0,
              }
            : _
              ? {
                  bVisible: !0,
                  bValveOnly: !0,
                }
              : {
                  bVisible: !1,
                };
        }
        function _(_) {
          const _ = _.BIsOGGEvent(),
            _ = CEventUserStore.Get().GetPartnerEventPermissions(
              _.clanSteamID,
            ).valve_admin;
          return _
            ? _.BHasSaleEnabled()
              ? {
                  bVisible: !0,
                }
              : Config.EUNIVERSE == k_EUniversePublic
                ? {
                    bVisible: !1,
                  }
                : _
                  ? _.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? {
                        bVisible: !0,
                        bValveOnly: !0,
                      }
                    : {
                        bVisible: !1,
                      }
                  : {
                      bVisible: !1,
                    }
            : {
                bVisible: !1,
              };
        }
        function _(_) {
          const _ = _.BIsOGGEvent(),
            _ = CEventUserStore.Get().GetPartnerEventPermissions(
              _.clanSteamID,
            ).valve_admin;
          return _
            ? {
                bVisible: !1,
              }
            : _.GetEventType() != k_EClanEventType_CreatorHome
              ? {
                  bVisible: !1,
                }
              : _.BHasSaleEnabled()
                ? {
                    bVisible: !0,
                  }
                : _.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? {
                      bVisible: !1,
                    }
                  : {
                      bVisible: !1,
                    };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = ((_) => (
          (_[(_.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (_[(_.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (_[(_.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
          _
        ))(_ || {});
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
        _([_._], _.prototype, "clanid", 2),
          _([_._], _.prototype, "appid", 2),
          _([_._], _.prototype, "can_edit", 2),
          _([_._], _.prototype, "owns_app", 2),
          _([_._], _.prototype, "follows_app", 2),
          _([_._], _.prototype, "support_user", 2),
          _([_._], _.prototype, "valve_admin", 2),
          _([_._], _.prototype, "limited_user", 2),
          _([_._], _.prototype, "event_ignored", 2),
          _([_._], _.prototype, "event_followed", 2),
          _([_._], _.prototype, "event_followed_flags", 2);
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapClanToUserPermissions = new Map();
          m_mapAnnounceGIDToVote = new Map();
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
              await _.Init(_), (_.s_EventUserStore = _);
            }
          }
          static BIsInited() {
            return !!_.s_EventUserStore;
          }
          async Init(_) {
            this.m_cm = _;
            const _ = (0, _._)("partnereventpermissions", "application_config");
            this.ValidateStoreDefault(_) &&
              (0, _._)(() => {
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
              });
            let _ = (0, _._)("uservotes", "application_config");
            _ &&
              (0, _._)(() => {
                _.forEach((_) => {
                  let _ = _.voted_up ? !0 : _.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(_.clanAnnouncementGID, _);
                });
              });
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].clanid == "number" && typeof _[0].appid == "number"
              : !1;
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
            return (
              this.m_mapClanToUserPermissions.has(_) ||
                this.LoadSingleAppEventPermissions(_),
              this.m_mapClanToUserPermissions.get(_).result
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
              _ = !_._.logged_in;
            if (!this.m_mapClanToUserPermissions.has(_)) {
              let _ = new _(_.GetAccountID());
              this.m_mapClanToUserPermissions.set(_, {
                result: _,
                promise: _.RemapToPromise(_),
                bLoaded: !1,
              });
            }
            try {
              if (_._.logged_in) {
                let _ =
                    _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  _ = {};
                if (
                  ((0, _._)() == "partnerweb"
                    ? ((_ =
                        _._.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (_ = {
                        clanaccountid: _.GetAccountID(),
                      }))
                    : (0, _._)() == "store" &&
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
                  !_ || _.data.success != _._)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, _._)(_?.data).strErrorMsg,
                  ),
                    (_ = !0);
                else {
                  let _ = this.m_mapClanToUserPermissions.get(_);
                  _ && this.CopyFromResponseToTrack(_, _.data);
                }
              }
            } catch (_) {
              if (
                ((_ = _.response),
                (_ = !0),
                !(
                  _ &&
                  typeof _.response < "u" &&
                  typeof _.response.data < "u" &&
                  typeof _.response.data.success < "u" &&
                  _.response.data.success == _._
                ))
              ) {
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
          async Vote(_, _, _) {
            if (!_ || !_.AnnouncementGID) return !1;
            const _ = this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
            if (_ === _) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _),
              (0, _._)(() => {
                _ === !0 && _.UpdateVoteCount("up", -1),
                  _ === !1 && _.UpdateVoteCount("down", -1),
                  _ === !0 && _.UpdateVoteCount("up", 1),
                  _ === !1 && _.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let _ = _._.Init(_._);
              return (
                _.Body().set_announcementid(_.AnnouncementGID),
                _.Body().set_vote_up(!!_),
                _.Body().set_clan_accountid(_.clanSteamID.GetAccountID()),
                (
                  await _._.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    _,
                  )
                ).GetEResult() == _._
              );
            } else {
              const _ = (0, _._)(),
                _ =
                  _ == "community" || _ == "steamtv"
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
                  (_ = _.Body().voted_up()
                    ? !0
                    : _.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const _ = (0, _._)() == "store",
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
                _ = _.data.voted_up ? !0 : _.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _), _;
            }
          }
          SetVote(_, _) {
            this.m_mapAnnounceGIDToVote.set(_, _);
          }
          BHasMyVote(_) {
            return _.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(_) {
            return _.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(_) {
            if (
              _.BHasEmailEnabled() ||
              _.clanSteamID.GetAccountID() == (0, _._)()
            )
              return !0;
            let _ = this.GetPartnerEventPermissions(_.clanSteamID);
            return (_._.IS_OGG || _._.IS_VALVE_GROUP) && _.valve_admin;
          }
        };
        _([_._], _.prototype, "m_mapClanToUserPermissions", 2),
          _([_._], _.prototype, "m_mapAnnounceGIDToVote", 2),
          _([_._], _.prototype, "CopyFromResponseToTrack", 1);
        let _ = _;
        function _() {
          const [_, _] = (0, _.useState)(() => _.BIsInited());
          return (
            (0, _.useEffect)(() => {
              _ || (async () => (await Promise.all([_.InitGlobal()]), _(!0)))();
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
                    _(_), _(!0);
                  });
              }
            }, [_, _]),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = () => (_._.EUNIVERSE === _._ ? 2581 : 45267781);
      },
    },
  ]);
})();
