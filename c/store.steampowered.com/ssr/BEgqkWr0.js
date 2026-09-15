var _ = _(_());
function _(_) {
  if (_.default.isCancel(_))
    return {
      strErrorMsg: `Action Cancelled:` + _,
      errorCode: 52,
    };
  if (
    _.response !== void 0 &&
    _.response.data &&
    typeof _.response.data == `object`
  ) {
    if (`msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.msg,
        errorCode: _.response.data.success,
      };
    if (`err_msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.err_msg,
        errorCode: _.response.data.success,
      };
    if (`message` in _.response.data)
      return {
        strErrorMsg: _.response.data.message,
        errorCode: _.response.data.success,
      };
    if (`success` in _.response.data)
      return {
        strErrorMsg: `error code: ` + _.response.data.success,
        errorCode: _.response.data.success,
      };
  } else if (typeof _.data == `object`) {
    if (`msg` in _.data)
      return {
        strErrorMsg: _.data.msg,
        errorCode: _.data.success,
      };
    if (`err_msg` in _.data)
      return {
        strErrorMsg: _.data.err_msg,
        errorCode: _.data.success,
      };
    if (`message` in _.data)
      return {
        strErrorMsg: _.data.message,
        errorCode: _.data.success,
      };
    if (`success` in _.data)
      return {
        strErrorMsg: `error code: ` + _.data.success,
        errorCode: _.data.success,
      };
  } else if (_.success !== void 0 && _.msg !== void 0)
    return {
      strErrorMsg: _.msg,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.message !== void 0)
    return {
      strErrorMsg: _.message,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.err_msg !== void 0)
    return {
      strErrorMsg: _.err_msg,
      errorCode: _.success,
    };
  else if (typeof _ == `string` && _.length > 1024)
    console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(_),
      console.groupEnd();
  else if (typeof _ == `object` && _ instanceof _)
    return {
      strErrorMsg: `` + _.GetErrorMessage(),
      errorCode: _.GetEResult(),
    };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, _);
  return typeof _ == `object` && `status` in _
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          _ +
          `
Status Code:` +
          _.status,
        errorCode: 2,
      }
    : {
        strErrorMsg: `Unknown Error: ` + _,
        errorCode: 2,
      };
}
var _ = {
  any_controller: 0,
  xbox_controller: 1,
  ps3_controller: 2,
  ps4_controller: 3,
  ps5_controller: 4,
  switch_controller: 5,
  steam_controller: 6,
  steam_deck_neptune: 7,
  steam_deck_galileo: 8,
  switch2_controller: 9,
  steam_controller_triton: 10,
};
function _() {
  let _ = [..._.excluded_content_descriptors];
  return {
    bLoaded: !1,
    setWishlist: new Set(),
    rgWishlistInOrder: [],
    setOwnedApps: new Set(),
    setOwnedPackages: new Set(),
    setExcludedTagIDs: new Set(),
    rgExcludedTagIDsSorted: [],
    setExcludedContentDescriptors: new Set(_),
    rgExcludedContentDescriptors: _,
    setRecommendedApps: new Set(),
    rgRecommendedAppsInOrder: [],
    mapIgnoredApps: new Map(),
    mapIgnoredPackages: new Map(),
    setCuratorsFollowed: new Set(),
    rgCuratorsFollowed: [],
    setCuratorsIgnored: new Set(),
    mapRecommendingCuratorsForApp: new Map(),
    setPreferredPlatforms: new Set(),
    setHardwareUsed: new Set(),
    rgRecommendedTags: [],
    ePrimaryLanguage: -1,
    setSecondaryLanguages: new Set(),
    bShowFilteredUserReviewScores: !0,
    bAllowAppImpressions: !1,
  };
}
var _;
function _() {
  return (_ ??= _());
}
function _() {
  return !!_(`wants_mature_content`);
}
function _(_) {
  let _ = _();
  if (
    ((_.bLoaded = !0),
    _.rgCurators &&
      ((_.rgCuratorsFollowed = Object.keys(_.rgCurators).map(Number)),
      (_.setCuratorsFollowed = new Set(_.rgCuratorsFollowed))),
    _.rgCuratorsIgnored &&
      (_.setCuratorsIgnored = new Set(_.rgCuratorsIgnored.map(Number))),
    _.rgWishlist &&
      ((_.rgWishlistInOrder = _.rgWishlist.map(Number)),
      (_.setWishlist = new Set(_.rgWishlistInOrder))),
    _.rgOwnedApps && (_.setOwnedApps = new Set(_.rgOwnedApps.map(Number))),
    _.rgOwnedPackages &&
      (_.setOwnedPackages = new Set(_.rgOwnedPackages.map(Number))),
    _.rgIgnoredApps && (_.mapIgnoredApps = _(_.rgIgnoredApps)),
    _.rgIgnoredPackages && (_.mapIgnoredPackages = _(_.rgIgnoredPackages)),
    _.rgExcludedTags &&
      ((_.setExcludedTagIDs = new Set(
        _.rgExcludedTags.map((_) => Number(_.tagid)),
      )),
      (_.rgExcludedTagIDsSorted = Array.from(_.setExcludedTagIDs).sort())),
    _()
      ? ((_.setExcludedContentDescriptors = new Set()),
        (_.rgExcludedContentDescriptors = []))
      : _.rgExcludedContentDescriptorIDs &&
        ((_.rgExcludedContentDescriptors = _.rgExcludedContentDescriptorIDs.map(
          (_) => Number(_),
        )),
        (_.setExcludedContentDescriptors = new Set(
          _.rgExcludedContentDescriptors,
        ))),
    _.rgRecommendedApps &&
      ((_.rgRecommendedAppsInOrder = _.rgRecommendedApps.map(Number)),
      (_.setRecommendedApps = new Set(_.rgRecommendedAppsInOrder))),
    _.rgPreferredPlatforms &&
      (_.setPreferredPlatforms = new Set(_.rgPreferredPlatforms)),
    _.bAllowAppImpressions && (_.bAllowAppImpressions = _.bAllowAppImpressions),
    (_.bShowFilteredUserReviewScores = !!_.bShowFilteredUserReviewScores),
    _.rgPrimaryLanguage !== void 0 &&
      (_.ePrimaryLanguage = _.rgPrimaryLanguage),
    _.rgSecondaryLanguages &&
      (_.setSecondaryLanguages = new Set(_.rgSecondaryLanguages)),
    _.rgRecommendedTags &&
      (_.rgRecommendedTags = _.rgRecommendedTags.map((_) => _.tagid)),
    _.rgCurations)
  )
    for (let _ of Object.keys(_.rgCurations)) {
      let _ = [];
      for (let _ of Object.keys(_.rgCurations[_]))
        _.rgCurations[_][_] === 0 && _.push(Number(_));
      _.mapRecommendingCuratorsForApp.set(Number(_), _);
    }
  if (_.rgHardwareUsed)
    for (let _ of _.rgHardwareUsed) {
      let _ = _[_];
      _ !== void 0 && _.setHardwareUsed.add(_);
    }
  return _;
}
function _(_) {
  let _ = new Map();
  for (let [_, _] of Object.entries(_)) {
    let _ = Number(_);
    _ && _.set(_, Number(_));
  }
  return _;
}
var _ = `dynamicuserdata`;
function _(_) {
  return [_, _];
}
function _(_) {
  return _?.[0] == _;
}
async function _(_) {
  try {
    let _ = await fetch(_(_.STORE_BASE_URL, _, _.country_code), {
      credentials: `include`,
    });
    if (!_._) throw Error(`Server returned ${_.status}`);
    return _(await _.json());
  } catch (_) {
    return (
      console.warn(`LoadDynamicUserData`, _),
      _().ReportError(Error(`LoadDynamicUserData ${_}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      _()
    );
  }
}
function _() {
  let _ = _.accountid;
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    staleTime: 1 / 0,
    gcTime: 1 / 0,
    retry: !1,
    enabled: !0,
  };
}
function _() {
  return _(_());
}
function _(_) {
  return _.getQueryData(_(_.accountid)) ?? _();
}
async function _(_) {
  return _.fetchQuery(_());
}
function _(_, _) {
  _.setQueryData(_(_.accountid), (_) => {
    if (!_) return;
    let _ = _(_);
    return _
      ? {
          ..._,
          ..._,
        }
      : _;
  });
}
var _ = `Y3je7h79nqo-`,
  _ = `EvA-A6anc-Y-`,
  _ = `si2rwaMlEF8-`,
  _ = `z6gX8J4oNLA-`,
  _ = `Y-e7ZAPjgPc-`,
  _ = `_17YPQd9sieQ-`,
  _ = `umiKWdQWSxU-`,
  _ = `kPoLTbyRGw4-`,
  _ = `Z7XFXVHAVIc-`,
  _ = `UQJnTans494-`,
  _ = `VFZT3kq3hWo-`,
  _ = `JSmXuJHr9F8-`,
  _ = `m-U1DKR49wc-`,
  _ = `RdFiHSeRsZo-`,
  _ = `oJgyyjdtQOI-`,
  _ = `ipmOsEvg-BE-`,
  _ = `P5x7tT5izXY-`,
  _ = `QJpMUh4ZGAo-`,
  _ = `TGMCv4-SGxA-`,
  _ = `_3lI9vmwAhBg-`,
  _ = `EsIKXVgpTBE-`,
  _ = `dt8iCLdODIo-`,
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ignore_list || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ignore_list: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reason: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StorePreferences.GetIgnoreList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetIgnoreList = _;
})((_ ||= {}));
var _ = class _ {
  m_queryClient = _;
  m_boxCacheVersion = _.box(0);
  m_bInitialized = !1;
  m_boxAjaxInFlight = _.box(!1);
  LazyInit() {
    this.m_bInitialized ||
      ((this.m_bInitialized = !0),
      this.m_queryClient.getQueryCache().subscribe((_) => {
        (_?.type != `added` && _?.type != `updated` && _?.type != `removed`) ||
          (_(_.query?.queryKey) &&
            _(() =>
              this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
            ));
      }));
  }
  ReadData() {
    return this.LazyInit(), this.m_boxCacheVersion.get(), _(this.m_queryClient);
  }
  BIsLoaded() {
    return this.ReadData().bLoaded;
  }
  GetWishlistGamesInUserOrder() {
    return this.ReadData().rgWishlistInOrder;
  }
  GetRecommendedGamesInIRPriorityOrder() {
    return this.ReadData().rgRecommendedAppsInOrder;
  }
  GetFollowedCuratorCount() {
    return this.ReadData().setCuratorsFollowed.size;
  }
  GetFollowedCuratorsAccountID() {
    return this.ReadData().rgCuratorsFollowed;
  }
  BIsFollowingCurator(_) {
    return this.ReadData().setCuratorsFollowed.has(_(_));
  }
  BIsIgnoringCurator(_) {
    return this.ReadData().setCuratorsIgnored.has(_(_));
  }
  get ExcludedContentDescriptor() {
    return this.ReadData().rgExcludedContentDescriptors;
  }
  BExcludeTagIDs(_) {
    let _ = this.ReadData().setExcludedTagIDs;
    return _.some((_) => _.has(_));
  }
  GetExcludedTagsSortedByID() {
    return this.ReadData().rgExcludedTagIDsSorted;
  }
  BExcludesContentDescriptor(_) {
    let _ = this.ReadData().setExcludedContentDescriptors;
    return _.some((_) => _.has(_));
  }
  BIncludesContentDescriptor(_) {
    return !this.ReadData().setExcludedContentDescriptors.has(_);
  }
  BIsGameWishlisted(_) {
    return this.ReadData().setWishlist.has(Number(_));
  }
  BIsGameRecommended(_) {
    return this.ReadData().setRecommendedApps.has(Number(_));
  }
  BIsGameIgnored(_) {
    return !!_ && this.ReadData().mapIgnoredApps.has(Number(_));
  }
  BIsPackageIgnored(_) {
    return !!_ && this.ReadData().mapIgnoredPackages.has(Number(_));
  }
  BIsGameOwned(_) {
    return !!_ && this.ReadData().setOwnedApps.has(Number(_));
  }
  BIsStoreItemOwned(_) {
    switch (_.GetStoreItemType()) {
      case 0:
        if (this.BIsGameOwned(_.GetAppID())) return !0;
        break;
      case 1:
      case 2:
        if (_.GetIncludedAppIDs().every((_) => this.BIsGameOwned(_))) return !0;
        break;
    }
    return !1;
  }
  BOwnsApp(_) {
    return !!_ && this.ReadData().setOwnedApps.has(Number(_));
  }
  BOwnsPackage(_) {
    return this.ReadData().setOwnedPackages.has(Number(_));
  }
  BHasUsedHardware(_) {
    return this.ReadData().setHardwareUsed.has(_);
  }
  BShowFilteredUserReviewScores() {
    return this.ReadData().bShowFilteredUserReviewScores;
  }
  BAppImpressionsAllowed() {
    return this.ReadData().bAllowAppImpressions;
  }
  GetPrimaryLanguage() {
    return this.ReadData().ePrimaryLanguage;
  }
  GetSecondaryLanguages() {
    return this.ReadData().setSecondaryLanguages;
  }
  BIsAnyLanguageEnabled(_) {
    let { ePrimaryLanguage: _, setSecondaryLanguages: _ } = this.ReadData();
    return (
      _ == null || _ <= -1 || 32 <= _ || _.some((_) => _ === _ || _.has(_))
    );
  }
  GetRecommendedTags() {
    return this.ReadData().rgRecommendedTags;
  }
  BIsAjaxInFlight() {
    return this.m_boxAjaxInFlight.get();
  }
  BIsAppRecommendedBySomeCurator(_) {
    return this.ReadData().mapRecommendingCuratorsForApp.has(Number(_));
  }
  GetRecommendingCuratorsForApp(_) {
    return this.ReadData().mapRecommendingCuratorsForApp.get(Number(_));
  }
  BHasPlatformPreferenceSet() {
    let _ = this.ReadData().setPreferredPlatforms.size;
    return _ > 0 && _ < 3;
  }
  BIsPreferredPlatform(_) {
    return this.ReadData().setPreferredPlatforms.has(_);
  }
  async HintLoad() {
    return this.LazyInit(), await _(this.m_queryClient), this;
  }
  async UpdateFollowOrIgnoreCurator(_, _, _) {
    this.LazyInit();
    let _ =
        _.STORE_BASE_URL + `curators/` + (_ ? `ajaxfollow/` : `ajaxignore/`),
      _ = _.GetAccountID(),
      _ = new FormData();
    _.append(`clanid`, `` + _),
      _.append(`sessionid`, _()),
      _.append(_ ? `follow` : `ignore`, _ ? `1` : `0`);
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
    return (
      _ &&
        _.status == 200 &&
        (this.InvalidateCache(),
        _(this.m_queryClient, (_) => {
          let _ = new Set(_ ? _.setCuratorsFollowed : _.setCuratorsIgnored);
          return (
            _ ? _.add(_) : _.delete(_),
            _
              ? {
                  setCuratorsFollowed: _,
                  rgCuratorsFollowed: Array.from(_),
                }
              : {
                  setCuratorsIgnored: _,
                }
          );
        })),
      _.data
    );
  }
  async UpdateAppIgnore(_, _, _, _ = 0) {
    this.LazyInit();
    let _ = _.STORE_BASE_URL + `recommended/ignorerecommendation`,
      _ = new FormData();
    _.append(`sessionid`, _()),
      _.append(`appid`, `` + _),
      _.append(`remove`, _ ? `0` : `1`),
      _.append(`snr`, _),
      _.append(`ignore_reason`, `` + _);
    try {
      _(() => this.m_boxAjaxInFlight.set(!0));
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
      });
      return (
        _ &&
          _.status == 200 &&
          (this.InvalidateCache(),
          _(this.m_queryClient, (_) => {
            let _ = new Map(_.mapIgnoredApps);
            return (
              _ ? _.set(Number(_), _) : _.delete(Number(_)),
              {
                mapIgnoredApps: _,
              }
            );
          })),
        _.data
      );
    } catch (_) {
      let _ = _(_);
      console.error(`UpdateAppIgnore`, _.strErrorMsg, _);
    } finally {
      _(() => this.m_boxAjaxInFlight.set(!1));
    }
    return {
      success: 2,
    };
  }
  async AddToCart(_, _, _, _, _, _, _) {
    if (
      window.g_bUseNewCartAPI !== void 0 &&
      window.g_bUseNewCartAPI &&
      typeof window.AddItemToCart == `function`
    ) {
      let _;
      return _ && (_ = _.ParseSNR(_)), window.AddItemToCart(_, _, _), !0;
    }
    let _ = new FormData();
    _.append(`action`, `add_to_cart`),
      _ ? _.append(`bundleid`, _.toString()) : _.append(`subid`, `` + _),
      _ && _.append(`snr`, _),
      _.append(`sessionid`, _()),
      _.append(`quantity`, `1`);
    let _ = _(_);
    _.preventDefault();
    try {
      await _.default.post(_, _, {
        withCredentials: !0,
      }),
        this.InvalidateCache(),
        _?.fnSetURL ? _.fnSetURL(_) : (_.location.href = _);
    } catch (_) {
      return console.log(`HandleOnAddToCart`, _), !1;
    }
    return !0;
  }
  InvalidateCache() {
    _();
  }
  static s_globalSingletonStore;
  static Get() {
    return (_.s_globalSingletonStore ||= new _()), _.s_globalSingletonStore;
  }
  static BConfirmedAdultContentAgeGate() {
    return _();
  }
  constructor() {}
};
function _(_) {
  return typeof _ == `object` && `GetAccountID` in _
    ? _.GetAccountID()
    : Number(_);
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            visibility: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            priority: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            association_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_id: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            associated_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            start_date: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_allow: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            country_deny: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            ownership_restrictions_overridden: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            must_own_appid: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_appid: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_own_packageid: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_packageid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_have_launched_appid: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            additional_restrictions: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            template_vars: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            flags: {
              _: 22,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creator_name: {
              _: 23,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 24,
              _: _.readString,
              _: _.writeString,
            },
            additional_restrictions_json: {
              _: 25,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessageProto`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_item_id: {
              _: 4,
              _: _,
            },
            associated_item: {
              _: 5,
              _: _,
            },
            associated_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            recommended_items: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CDisplayMarketingMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            anonymous_user: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetActiveMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            time_next_message_age: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetActiveMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.start_past_days || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_past_days: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upto_past_days: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPastMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPastMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_seen_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_seen_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            context: {
              _: 6,
              _: _,
            },
            data_request: {
              _: 7,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.already_seen || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            already_seen: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            message: {
              _: 2,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.has_pending_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_pending_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            pending_message_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetDisplayMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetDisplayMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_MarkMessageSeen_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 4,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_MarkMessageClicked_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.lookup_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            lookup_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidlist: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            associated_id: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_FindMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_FindMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
            from_json: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_CreateMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_CreateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message: {
              _: 2,
              _: _,
            },
            from_json: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_UpdateMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_UpdateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DeleteMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DeleteMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageViewerStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            seen_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            display_index: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessageHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageViewerStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_start_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_start_time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rt_end_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clicked_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            display_index: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessageClickedHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            clicked_stats: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageClickedStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageClickedStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            partnerid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_PartnerPublishMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_PartnerPublishMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            partnerid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerMessagePreview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerMessagePreview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForPartner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForPartner_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetActiveMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActiveMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPastMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetPastMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetMarketingMessagesForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DoesUserHavePendingMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.DoesUserHavePendingMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetDisplayMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDisplayMarketingMessageForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageAdmin#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetDisplayMarketingMessageAdmin = _;
  function _(_, _) {
    return _.SendNotification(`MarketingMessages.MarkMessageSeen#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.MarkMessageSeen = _;
  function _(_, _) {
    return _.SendNotification(
      `MarketingMessages.MarkMessageClicked#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.MarkMessageClicked = _;
  function _(_, _, _) {
    return _.SendMsg(`MarketingMessages.GetMarketingMessage#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.CreateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.CreateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.UpdateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.UpdateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DeleteMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.DeleteMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.FindMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.FindMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageViewerStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessageViewerStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesViewerRangeStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesViewerRangeStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageClickedStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessageClickedStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerReadyToPublishMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerReadyToPublishMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.PublishPartnerMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.PublishPartnerMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerMessagePreview#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerMessagePreview = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForPartner#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetMarketingMessagesForPartner = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForApps#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesForApps = _;
})((_ ||= {}));
var _ = [`app`, `sub`, `bundle`];
function _(_) {
  return _.includes(_);
}
var _ = class _ {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = {
    include_tag_count: 0,
  };
  m_strInternalName;
  m_rgLinks;
  m_userFilterFailure;
  m_strFullDescriptionBBCode;
  constructor(_, _) {
    (this.m_eItemType = _.item_type()),
      (this.m_unID = _._()),
      (this.m_bVisible = !!_.visible()),
      (this.m_strName = _.name()),
      (this.m_strStoreURLPath = _.store_url_path()),
      (this.m_unAppID = _.appid()),
      (this.m_eAppType = _.type()),
      (this.m_rgIncludedAppTypes = _.included_types()),
      (this.m_rgIncludedAppIDs = _.included_appids()),
      (this.m_bIsFree = !!_.is_free()),
      (this.m_bIsFreeTemporary = !!_.is_free_temporarily()),
      (this.m_bIsComingSoon =
        !!_.is_coming_soon() || !!_.release()?.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!_.is_early_access()),
      (this.m_RelatedItems = _.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = _.content_descriptorids()),
      (this.m_StoreCategories = _.categories().toObject()),
      (this.m_BestPurchaseOption = _.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = _.store_url_path_override()),
      (this.m_freeWeekend = _.free_weekend()?.toObject()),
      (this.m_strInternalName = _.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = _.self_purchase_option(!1)
          ? _.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(_, _);
  }
  MergeData(_, _) {
    _.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new _(_.assets(), _._())),
      (this.m_DataRequested.include_assets = !0)),
      _.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new _(
          _.assets_without_overrides(),
          _._(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      _.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = _.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      _.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = _.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      _.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = _.purchase_options().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      _.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new _(_.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      _.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new _(_.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      _.include_tag_count &&
        _.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < _.include_tag_count &&
        ((this.m_rgStoreTags = _.tags().map((_) => _.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((_) => _.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          _.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      _.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = _.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      _.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = _.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      _.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = _.supported_languages().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_supported_languages = !0)),
      _.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = _.links().map((_) => _.toObject())),
        (this.m_DataRequested.include_links = !0)),
      _.apply_user_filters &&
        !this.m_userFilterFailure &&
        ((this.m_userFilterFailure = _.user_filter_failure()?.toObject()),
        (this.m_DataRequested.apply_user_filters = !0)),
      _.include_full_description &&
        !this.m_strFullDescriptionBBCode &&
        ((this.m_strFullDescriptionBBCode = _.full_description_bbcode()),
        (this.m_DataRequested.include_full_description = !0));
  }
  static BDataRequestContainsOtherDataRequest(_, _) {
    return !!(
      (!_.include_assets || _.include_assets) &&
      (!_.include_assets_without_overrides ||
        _.include_assets_without_overrides) &&
      (!_.include_release || _.include_release) &&
      (!_.include_platforms || _.include_platforms) &&
      (!_.include_all_purchase_options || _.include_all_purchase_options) &&
      (!_.include_screenshots || _.include_screenshots) &&
      (!_.include_trailers || _.include_trailers) &&
      (!_.include_ratings || _.include_ratings) &&
      (!_.include_tag_count ||
        (_.include_tag_count || 0) >= _.include_tag_count) &&
      (!_.include_reviews || _.include_reviews) &&
      (!_.include_basic_info || _.include_basic_info) &&
      (!_.include_supported_languages || _.include_supported_languages) &&
      (!_.include_full_description || _.include_full_description) &&
      (!_.include_links || _.include_links)
    );
  }
  BContainDataRequest(_) {
    return _.BDataRequestContainsOtherDataRequest(this.m_DataRequested, _);
  }
  BCheckDataRequestIncluded(_) {}
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + `_` + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(_ = !1) {
    return _ && this.HasDemoStandaloneStorePage()
      ? _.STORE_BASE_URL + `app/` + this.GetDemoStandaloneStorePageAppIDs()[0]
      : _.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + `app/` + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + `app/` + this.GetAppID() + `/discussions/`
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return (
      this.GetStoreItemType() === 0 &&
      this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
    );
  }
  GetSalePageVanityURL() {
    let _ = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((_ = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          ``,
        )),
        _.endsWith(`/`) && (_ = _.replace(`/`, ``))),
      _
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let _ = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= _ &&
      _ <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(_) {
    return this.m_ContentDescriptorIDs?.includes(_);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(_) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((_) => _ === _) ||
      this.GetStoreCategories_Features().find((_) => _ === _) ||
      this.GetStoreCategories_Controller().find((_) => _ === _)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetFilteredReviewSummaryLanguage() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_language_specific
    );
  }
  GetFullDescriptionBBCode() {
    return (
      this.BCheckDataRequestIncluded({
        include_full_description: !0,
      }),
      this.m_strFullDescriptionBBCode
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.short_description ?? ``
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.developers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.franchises
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({
      include_basic_info: !0,
    });
    let _ =
      this.m_BasicInfo?.publishers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? [];
    return _?.length > 0 ? _ : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo
        ? _([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets: !0,
      }),
      this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets_without_overrides: !0,
      }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({
      include_release: !0,
    });
    let _ = this.m_ReleaseInfo?.original_steam_release_date;
    return (_ ||= this.GetReleaseDateRTime()), _;
  }
  GetReleaseDateRTime(_ = !1) {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon && !_)
    )
      return 0;
    let _ = this.m_ReleaseInfo?.steam_release_date;
    return (_ ||= this.m_ReleaseInfo?.original_release_date), _;
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display) return _(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let _ = this.m_ReleaseInfo?.steam_release_date;
      return _
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? _(new Date(_ * 1e3))
          : _(_)
        : ``;
    }
    let _ = this.GetReleaseDateRTime();
    return _ ? _(_) : ``;
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? [`text_tba`, `text_comingsoon`].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BLimitedLaunchActive() {
    return this.m_ReleaseInfo?.limited_launch_active;
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({
        include_platforms: !0,
      }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({
        include_all_purchase_options: !0,
      }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetScreenshots(!0).length > 0;
  }
  GetScreenshots(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_screenshots: !0,
      }),
      this.m_Screenshots
        ? _
          ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
          : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
        : []
    );
  }
  BIsAgeSafeScreenshot(_) {
    return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(_);
  }
  BHasTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers?.BHasTrailers(_)
    );
  }
  BHasHighlightTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      (this.m_Trailers?.GetHighlightTrailers(_)?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages?.some(
        (_) => _.elanguage == _ && (_.supported || _.subtitles || _.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages
        ?.filter((_) => _.supported || _.subtitles || _.full_audio)
        .map((_) => _.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer(_) {
    if (
      (this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers)
    ) {
      let _ = this.m_Trailers
        .GetAllTrailers(_)
        .find((_) => !!_.GetMicroTrailer());
      if (_) return _.GetMicroTrailer();
    }
    return null;
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({
        include_links: !0,
      }),
      this.m_rgLinks
    );
  }
  GetUserFilterFailure() {
    return (
      this.BCheckDataRequestIncluded({
        apply_user_filters: !0,
      }),
      this.m_userFilterFailure
    );
  }
  ReplaceBestPurchaseOption(_) {
    this.m_BestPurchaseOption = _;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
var _ = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strRawPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(_, _) {
      let _ = _.asset_url_format();
      _ &&
        (_.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            _,
            _.main_capsule(),
          )),
        _.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            _,
            _.small_capsule(),
          )),
        _.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(_, _.header())),
        _.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            _,
            _.package_header(),
          )),
        _.raw_page_background() &&
          (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
            _,
            _.raw_page_background(),
          )),
        _.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            _,
            _.hero_capsule(),
          )),
        _.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.hero_capsule_2x(),
          )),
        _.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            _,
            _.library_capsule(),
          )),
        _.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.library_capsule_2x(),
          )),
        _.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            _,
            _.library_hero(),
          )),
        _.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            _,
            _.library_hero_2x(),
          ))),
        _.community_icon() &&
          ((this.m_strCommunityIcon = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}_full.jpg`)),
        _.page_background_path() &&
          (this.m_strPageBackgroundURL = `${_.STORE_CDN_URL}images/storepagebackground/${_.page_background_path()}`);
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetRawPageBackgroundURL() {
      return this.m_strRawPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        _.replace("${FILENAME}", _)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  _ = class {
    m_mapTrailer;
    m_highlightTrailers;
    m_highlightTrailersAllAges;
    m_otherTrailers;
    m_otherTrailersAllAges;
    constructor(_) {
      (this.m_highlightTrailers = _.highlights()?.map((_) => new _(_)) ?? []),
        (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
          (_) => _.BIsAllAges(),
        )),
        (this.m_otherTrailers = _.other_trailers()?.map((_) => new _(_)) ?? []),
        (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((_) =>
          _.BIsAllAges(),
        )),
        (this.m_mapTrailer = new Map(
          [...this.m_highlightTrailers, ...this.m_otherTrailers].map((_) => [
            _.GetTrailerID(),
            _,
          ]),
        ));
    }
    BHasTrailers(_) {
      return _
        ? this.m_highlightTrailersAllAges.length > 0 ||
            this.m_otherTrailersAllAges.length > 0
        : this.m_highlightTrailers.length > 0 ||
            this.m_otherTrailers.length > 0;
    }
    GetHighlightTrailers(_) {
      return _ ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
    }
    GetOtherTrailers(_) {
      return _ ? this.m_otherTrailersAllAges : this.m_otherTrailers;
    }
    GetAllTrailers(_) {
      return [...this.GetHighlightTrailers(_), ...this.GetOtherTrailers(_)];
    }
    GetTrailerByID(_) {
      return this.m_mapTrailer.get(_);
    }
  },
  _ = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_MicroTrailer;
    m_rgDashTrailers;
    m_rgHlsTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    m_bIsAllAges;
    m_strCaptionManifest;
    constructor(_) {
      (this.m_strTrailerName = _.trailer_name()),
        (this.m_nBaseID = _.trailer_base_id()),
        (this.m_eTrailerCategory = _.trailer_category());
      let _ = _.trailer_url_format();
      if (
        (_ &&
          (_.microtrailer() &&
            (this.m_MicroTrailer = this.ExtractTrailerFormats(
              _,
              _.microtrailer(),
            )),
          _.screenshot_medium() &&
            (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
              _,
              _.screenshot_medium(),
            )),
          _.screenshot_full() &&
            (this.m_strScreenshotFull = this.ConstructScreenshotURL(
              _,
              _.screenshot_full(),
            ))),
        _.adaptive_trailers())
      ) {
        this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
          _.adaptive_trailers(),
          `dash`,
        );
        let _ = this.ExtractAdaptiveTrailers(_.adaptive_trailers(), `hls`);
        _.length > 0 && (this.m_rgHlsTrailer = _[0]);
      }
      (this.m_bIsAllAges = _.all_ages() ?? !0),
        (this.m_strCaptionManifest = _(_));
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailersDash() {
      return this.m_rgDashTrailers;
    }
    GetTrailerHls() {
      return this.m_rgHlsTrailer;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    BIsAllAges() {
      return this.m_bIsAllAges;
    }
    GetCaptionManifest() {
      return this.m_strCaptionManifest;
    }
    ExtractTrailerFormats(_, _) {
      let _ = {};
      return (
        _.forEach((_) => {
          _.type() == `video/mp4`
            ? (_.strMP4URL = this.ConstructAssetURL(_, _.filename()))
            : _.type() == `video/webm` &&
              (_.strWebMURL = this.ConstructAssetURL(_, _.filename()));
        }),
        _
      );
    }
    ExtractAdaptiveTrailers(_, _) {
      let _ = `${_}_`,
        _ = _.filter(
          (_) => _.encoding() && _.cdn_path() && _.encoding().startsWith(_),
        ),
        _ = _.findIndex((_) => _.encoding().endsWith(`_av1`));
      return (
        _ > 0 && _(_, _, 0),
        _.map((_) => this.ConstructAssetURL(_.cdn_path(), ``))
      );
    }
    ConstructScreenshotURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        _.replace("${FILENAME}", _)
      );
    }
    ConstructAssetURL(_, _) {
      return _.VIDEO_CDN_URL + `/store_trailers/` + _.replace("${FILENAME}", _);
    }
  },
  _ = class {
    m_rgAllScreenshots;
    m_rgOnlyAllAgesScreenshots;
    constructor(_) {
      let _ = _.all_ages_screenshots() || [],
        _ = _.mature_content_screenshots() || [],
        _ = (_) => _.BASE_URL_SHARED_CDN + `/store_item_assets/` + _.filename();
      (this.m_rgOnlyAllAgesScreenshots = _.map(_)),
        (this.m_rgAllScreenshots = [..._, ..._]
          .sort((_, _) => _.ordinal() - _.ordinal())
          .map(_));
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function _(_) {
  if (_)
    switch (_.item_type) {
      case 0:
        return {
          appid: _.appid,
        };
      case 1:
        return {
          packageid: _._,
        };
      case 2:
        return {
          bundleid: _._,
        };
      case 4:
        return {
          tagid: _._,
        };
      case 5:
        return {
          creatorid: _._,
        };
      case 6:
        return {
          hubcategoryid: _._,
        };
      case 7:
        return _.gid
          ? {
              salepagegid: _.gid,
            }
          : void 0;
      case 3:
      case -1:
        return;
      default:
        _(
          _.item_type,
          `Unknown EStoreItemType ${_.item_type} ${_(_.item_type)} `,
        );
        return;
    }
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
