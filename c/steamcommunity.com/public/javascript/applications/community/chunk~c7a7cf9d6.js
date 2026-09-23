(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3584],
  {
    chunkid: (module) => {
      module.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      const _ = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_optin_registration_tags: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      class _ {
        constructor() {
          this.m_setAlreadyAdded = new Set();
        }
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(_) {
          return this.m_setAlreadyAdded.has("a" + _);
        }
        BHasPackageID(_) {
          return this.m_setAlreadyAdded.has("s" + _);
        }
        BHasBundleID(_) {
          return this.m_setAlreadyAdded.has("b" + _);
        }
        BHasStoreItemKey(_) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(_),
          );
        }
        AddStoreItemKey(_) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(_));
        }
        ConvertStoreItemKeyToUniqueKey(_) {
          switch (_.item_type) {
            default:
            case "app":
              return "a" + _._;
            case "sub":
              return "s" + _._;
            case "bundle":
              return "b" + _._;
          }
        }
      }
      const _ = 4;
      function _(_, _, _, _, _, _) {
        var _;
        const _ = new Array(),
          _ = new Array(),
          _ = new Array(),
          _ = new Array();
        if (!_ || 0 == _.length) return _;
        const _ = [
          _._.k_RejectSupportedLanguage,
          _._.k_RejectAlreadyDisplayed,
          _._.k_RejectNoTrailer,
        ];
        for (let _ of _) {
          let _ = _._,
            _ = _._.k_NotRejected;
          switch (_.item_type) {
            case "sub":
              const _ = _._.Get().GetPackage(_);
              if (
                1 !==
                (null === (_ = null == _ ? void 0 : _.GetIncludedAppIDs()) ||
                void 0 === _
                  ? void 0
                  : _.length)
              ) {
                _ = _(_, _, _, !0);
                break;
              }
              _ = _.GetIncludedAppIDs()[0];
            case "app":
              _ = _(_, _, _, _, !0);
              break;
            case "bundle":
              _ = _(_, _, _, !0);
          }
          if (
            (_ == _._.k_NotRejected
              ? ((_.rejected = _._.k_NotRejected),
                _.push({
                  ..._,
                  priority: 1,
                }))
              : _.includes(_)
                ? ((_.rejected = _._.k_NotRejected), _.push(_))
                : ((_.rejected = _),
                  _ == _._.k_RejectIgnoredGame ? _.push(_) : _.push(_)),
            _.length > _)
          )
            break;
        }
        return (
          _.length < _ &&
            (_(_, _, _, 2),
            _.length < _ &&
              _.enforce_minimum &&
              (_(_, _, _, 3), _(_, _, _, _))),
          _
        );
      }
      function _(_, _, _, _) {
        for (let _ = 0; _.length < _ && _ < _.length; ++_)
          _.push({
            ..._[_],
            priority: _,
          });
      }
      function _(_, _) {
        var _, _, _, _;
        const _ = _._.Get();
        if (_.only_current_platform && _.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (_ = _.GetPlatforms()) || void 0 === _
                ? void 0
                : _.windows) &&
                _.BIsPreferredPlatform("win")) ||
              ((null === (_ = _.GetPlatforms()) || void 0 === _
                ? void 0
                : _.mac) &&
                _.BIsPreferredPlatform("mac")) ||
              ((null === (_ = _.GetPlatforms()) || void 0 === _
                ? void 0
                : _.steamos_linux) &&
                _.BIsPreferredPlatform("linux"))
            )
          )
            return _._.k_RejectWrongPlatform;
        }
        if (!_.prepurchase && _.BIsComingSoon())
          return _._.k_RejectNoComingSoon;
        const _ = _.GetPlatforms();
        return !_.virtual_reality &&
          _ &&
          _.vr_support &&
          _.vr_support.vrhmd_only
          ? _._.k_RejectNoVR
          : (
                null === (_ = _.GetAllCreatorClanIDs()) || void 0 === _
                  ? void 0
                  : _.some((_) => _.BIsIgnoringCurator(_))
              )
            ? _._.k_RejectCreatorClan
            : _._.k_NotRejected;
      }
      function _(_, _) {
        var _;
        if (_.localized) {
          const _ = (0, _.sfN)(_._.LANGUAGE);
          if (
            !(null === (_ = _.GetAllLanguagesWithSomeSupport()) || void 0 === _
              ? void 0
              : __webpack_require__.includes(_))
          )
            return _._.k_RejectSupportedLanguage;
        }
        return _._.k_NotRejected;
      }
      function _(_, _, _, _, _) {
        const _ = _._.Get().GetApp(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _._.Get();
        if (_.BIsGameIgnored(_)) return _._.k_RejectIgnoredGame;
        if (_.BExcludeTagIDs(_.GetTagIDs())) return _._.k_RejectIgnoreGameTags;
        if (_.BExcludesContentDescriptor(_.GetContentDescriptorIDs()))
          return _._.k_RejectIgnoreContentDescriptors;
        if (!_.early_access && _.BIsEarlyAccess())
          return _._.k_RejectEarlyAccess;
        const _ = _.GetAppType();
        if (!_.software && _ == _._._) return _._.k_RejectSoftware;
        if (_.games_already_in_library && _.BIsGameOwned(_))
          return _._.k_RejectInLibrary;
        if (_.games_not_in_library && !_.BIsGameOwned(_))
          return _._.k_RejectNotInLibrary;
        if (!_.video && [_._._, _._._, _._._].includes(_))
          return _._.k_RejectVideo;
        if (_.has_discount) {
          const _ = _.GetBestPurchaseOption();
          if (!_ || !_.discount_pct) return _._.k_RejectNoDiscount;
        }
        return "adultonly" != _ &&
          _.no_ao_content &&
          (_.HasContentDescriptorID(_._) || _.HasContentDescriptorID(_._))
          ? _._.k_RejectAO
          : _ == _._._ &&
              _.games_already_in_library &&
              _.BIsGameOwned(_.GetParentAppID() || 0)
            ? _._.k_RejectInLibrary
            : _
              ? (_ == _._._ && _.BHasAppID(_.GetParentAppID() || 0)) ||
                _.BHasAppID(_)
                ? _._.k_RejectAlreadyDisplayed
                : _.has_trailer && !_.BHasTrailers(!1)
                  ? _._.k_RejectNoTrailer
                  : _(_, _)
              : _._.k_NotRejected;
      }
      function _(_, _) {
        const _ = _._.Get();
        let _ = !1;
        for (let _ of _) {
          if (__webpack_require__.BIsGameIgnored(_))
            return _._.k_RejectIgnoredGame;
          __webpack_require__.BIsGameOwned(_) && (_ = !0);
        }
        return _.games_not_in_library && _
          ? _._.k_RejectInLibrary
          : _.games_not_in_library && !_
            ? _._.k_RejectNotInLibrary
            : _._.k_NotRejected;
      }
      function _(_, _, _, _) {
        const _ = _._.Get().GetPackage(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _(_.GetIncludedAppIDs(), _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _._.Get();
        return _.games_already_in_library && _.BOwnsPackage(_)
          ? _._.k_RejectInLibrary
          : _.BIsPackageIgnored(_)
            ? _._.k_RejectIgnoredGame
            : _
              ? __webpack_require__.BHasPackageID(_)
                ? _._.k_RejectAlreadyDisplayed
                : _(_, _)
              : _._.k_NotRejected;
      }
      function _(_, _, _, _) {
        const _ = _._.Get().GetBundle(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _(_.GetIncludedAppIDs(), _);
        return _ != _._.k_NotRejected
          ? _
          : _
            ? __webpack_require__.BHasBundleID(_)
              ? _._.k_RejectAlreadyDisplayed
              : _(_, _)
            : _._.k_NotRejected;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      class _ {
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          var _;
          return null === (_ = this.m_HomeView) || void 0 === _
            ? void 0
            : _.home;
        }
        static Get() {
          var _;
          return (
            _.s_globalSingletonStore ||
              ((_ = "CHomeViewStore.s_globalSingletonStore"),
              (0, _._)(!0, "Unexpected code running in SSR Server: " + _),
              (_.s_globalSingletonStore = new _())),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          this.m_HomeView = void 0;
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
                ...(null == _ ? void 0 : _.all),
                ...(null == _ ? void 0 : _.maincap),
              })
            : (this.m_HomeView = {
                home: {
                  ...(null == _ ? void 0 : _.all),
                  ...(null == _ ? void 0 : _.maincap),
                },
              });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        async DeleteOldAnnouncement(_, _) {
          let _ = new URLSearchParams();
          __webpack_require__.append("sessionid", (0, _._)());
          let _ =
              _._.COMMUNITY_BASE_URL +
              "/gid/" +
              _.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              _,
            _ = await _().post(_, _);
          if (_.data.success != _._) throw _.data;
          return this.RemoveGIDFromList(_, _._ + _), _.data;
        }
        static Get() {
          return (
            _.sm_Instance || ((_.sm_Instance = new _()), _.sm_Instance.Init()),
            _.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            _.sm_SummaryInstance ||
              ((_.sm_SummaryInstance = new _(!0)), _.sm_SummaryInstance.Init()),
            _.sm_SummaryInstance
          );
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
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
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _.jsx)(_._, {
          children: (0, _.jsx)(_, {
            ..._,
            bShowOnlyInitialEvent: _ || _,
            tracker: _,
          }),
        });
      };
      let _ = class extends _.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoading: !1,
              eventModel: this.props.eventModel,
            }),
            (this.m_refParent = _.createRef()),
            (this.m_cancelSignal = _().CancelToken.source());
        }
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
            { trackingLocation: _, tracker: _ } = this.props;
          _ &&
            _.BIsPartnerEvent() &&
            (__webpack_require__.RecordEventRead(_, _),
            __webpack_require__.Flush());
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
            (null == _ ? void 0 : _.appid) &&
            (_._.Get().HintLoad(),
            _._.Get().BOwnsApp(_.appid) &&
              (_ = (_) => (0, _._)(_, "steam://nav/games/details/" + _.appid)));
          const _ = (0, _.jsx)(_._, {
            children: (_) =>
              (0, _.jsx)(_._, {
                initialEvent: _,
                appid: _,
                clanSteamID: _,
                partnerEventStore: _,
                emoticonStore: _,
                closeModal: !_ && _,
                showAppHeader: _,
                bShowOnlyInitialEvent: _,
                additionalParams: _,
                eventClassName: _,
                onAppIconClick: _,
              }),
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
      "use strict";
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _._.Get().BIsStoreItemMissing(_._, (0, _._)(_.type));
      }
      function _(_, _, _) {
        const _ = new Array();
        return (
          null == _ ||
            _.forEach((_) =>
              _.push({
                _: _,
                type: "game",
              }),
            ),
          null == _ ||
            _.forEach((_) =>
              _.push({
                _: _,
                type: "sub",
              }),
            ),
          null == _ ||
            __webpack_require__.forEach((_) =>
              _.push({
                _: _,
                type: "bundle",
              }),
            ),
          _
        );
      }
      function _(_) {
        var _, _;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return (
          (null !==
            (_ =
              null === (_ = null == _ ? void 0 : _.GetBestPurchaseOption()) ||
              void 0 === _
                ? void 0
                : _.discount_pct) && void 0 !== _
            ? _
            : 0) > 0
        );
      }
      function _(_) {
        var _;
        if (
          !(null === (_ = _._.Get().GetHomeView()) || void 0 === _
            ? void 0
            : _.localized)
        )
          return !0;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return (
          !_ ||
          _._.Get().BIsAnyLanguageEnabled(
            __webpack_require__.GetAllLanguagesWithSomeSupport(),
          )
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
        null == _ ||
          _.forEach((_) => {
            const _ = _._.Get().GetBundle(_);
            null == _ || _.GetIncludedAppIDs().forEach((_) => _.add(_));
          }),
          null == _ ||
            _.forEach((_) => {
              const _ = _._.Get().GetPackage(_);
              null == _ || _.GetIncludedAppIDs().forEach((_) => _.add(_));
            });
        const _ = Array.from(_).filter((_) => !_._.Get().BHasApp(_, _));
        if (
          (_.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _)),
          _.forEach((_) => _.add(_)),
          _)
        ) {
          const _ = Array.from(_)
            .map((_) => {
              const _ = _._.Get().GetApp(_),
                _ = null == _ ? void 0 : _.GetParentAppID();
              return _ ? (_.add(_), _) : null;
            })
            .filter((_) => null !== _)
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
        var _;
        if (!_) return !0;
        const _ = _._.Get();
        if (
          ((0, _._)(
            __webpack_require__.BIsLoaded(),
            "Dynamic Store not loaded",
          ),
          _.GetStoreItemType() == _._._)
        ) {
          const _ = _.GetParentAppID();
          if (
            __webpack_require__.BIsGameIgnored(_.GetAppID()) ||
            (void 0 !== _ && __webpack_require__.BIsGameIgnored(_))
          )
            return !0;
        }
        if (
          __webpack_require__.BExcludesContentDescriptor(
            _.GetContentDescriptorIDs(),
          )
        )
          return !0;
        if (__webpack_require__.BExcludeTagIDs(_.GetTagIDs())) return !0;
        if (
          _.GetAllCreatorClanIDs().some((_) =>
            __webpack_require__.BIsIgnoringCurator(_),
          )
        )
          return !0;
        if (
          null === (_ = _._.Get().GetHomeView()) || void 0 === _
            ? void 0
            : _.localized
        ) {
          const _ = _.GetAllLanguagesWithSomeSupport();
          if (
            _.length > 0 &&
            !_.BHasSomeLanguageSupport(_.Bhc) &&
            !__webpack_require__.BIsAnyLanguageEnabled(_)
          )
            return !0;
        }
        return !1;
      }
      async function _(_, _, _, _) {
        const _ = [];
        await _(_, _._, _);
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) {
            0;
            continue;
          }
          const _ = _.GetIncludedAppIDs()
            .map((_) => _._.Get().GetApp(_))
            .filter((_) => Boolean(_));
          if ((_.push(_), _)) {
            const _ = new Set(
                _.map((_) => _.GetParentAppID()).filter((_) => Boolean(_)),
              ),
              _ = Array.from(_)
                .map((_) => _._.Get().GetApp(_))
                .filter((_) => Boolean(_));
            _ && _.push(..._);
          }
          _.some(_ || _)
            ? _ &&
              (_._.Get().BIsStoreItemOwned(_) || __webpack_require__.push(_))
            : _.push(_);
        }
        return _;
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
          const _ = null == _ ? void 0 : _.GetIncludedAppIDsOrSelf();
          let _ = !1;
          _ && (_ = _ || _.every((_) => _._.Get().BIsGameOwned(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameWishlisted(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameIgnored(_))),
            _ ? _ && _.push(_) : _.push(_);
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            title: _,
            tooltip: _,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [
                    _,
                    Boolean(_) &&
                      (0, _.jsx)(_._, {
                        tooltip: _,
                      }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.SectionTitleButtons,
                  children: [
                    _,
                    (0, _.jsx)(_, {
                      bIsMinimized: _,
                      fnToggleMinimize: _,
                    }),
                  ],
                }),
              ],
            }),
            !_ &&
              (0, _.jsx)(_._, {
                children: _,
              }),
          ],
        });
      }
      function _(_) {
        const [_, _] = _.useState(Boolean(_.bStartMinimized));
        return (0, _.jsx)(_, {
          ..._,
          getMinimized: () => _,
          toggleMinimized: () => __webpack_require__(!_),
          children: _.children,
        });
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: _ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, _.jsx)(_._, {
          "data-tooltip-text": (0, _._)(_),
          onClick: _,
          children: _.bIsMinimized
            ? (0, _.jsx)(_.hz4, {})
            : (0, _.jsx)(_.Xjb, {}),
        });
      }
    },
  },
]);
