"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5659],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { data: _ } = (0, _._)(_),
          _ = (0, _._)();
        if (!_) return;
        const _ = [...(_.highlights || []), ...(_.other_trailers || [])];
        return _ ? _.filter((_) => !!_.all_ages) : _;
      }
      function _(_) {
        let _ = _(_);
        if (_ && 0 != _.length) return _[0];
      }
      function _(_) {
        return `${_._.STORE_ITEM_BASE_URL}${_.trailer_url_format.replace("${FILENAME}", _.screenshot_full ?? _.screenshot_medium ?? "")}`;
      }
      function _(_, _) {
        return `${_._.VIDEO_CDN_URL}store_trailers/${_.trailer_url_format.replace("${FILENAME}", _)}`;
      }
      function _(_, _) {
        return `${_._.VIDEO_CDN_URL}store_trailers/${_}`;
      }
      function _(_) {
        let _ =
          "function" == typeof _.captions_manifest
            ? _.captions_manifest()
            : _.captions_manifest;
        if (!_) return;
        let _,
          _ = _._;
        return (
          _.MEDIA_CDN_URL
            ? (_ = _.MEDIA_CDN_URL)
            : _.CDN_HOST_MEDIA && (_ = _.CDN_HOST_MEDIA),
          _ ? `${_}/${_}` : void 0
        );
      }
      function _(_) {
        let _ = [];
        _.adaptive_trailers &&
          (_ = _.adaptive_trailers
            .filter(
              (_) =>
                ("dash_h264" == _.encoding || "dash_av1" == _.encoding) &&
                _.cdn_path,
            )
            .map((_) => _(0, _.cdn_path || "")));
        let _ = [];
        return (
          _.adaptive_trailers &&
            (_ = _.adaptive_trailers
              .filter((_) => "hls_h264" == _.encoding && _.cdn_path)
              .map((_) => _(0, _.cdn_path || ""))),
          {
            rgDashTrailers: _,
            rgHlsTrailers: _,
          }
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        eAdultOnlyMediaBehavior: "masked",
      });
      function _() {
        const { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
          _ = (function () {
            const { data: _ } = (0, _._)({
              queryKey: ["AOWarningCookie"],
              queryFn: () => _(),
              placeholderData: () => _(),
              staleTime: 0,
            });
            return _ && _ > Date.now() / 1e3;
          })();
        return _.useMemo(() => {
          const _ = (0, _._)("forceallages");
          return (
            !(!_ || "0" === _) ||
            !(!_._.IN_MOBILE_WEBVIEW || !navigator.userAgent.match(/Android/))
          );
        }, []) ||
          ("masked" == _ &&
            (_._.excluded_content_descriptors.includes(4) ||
              _._.excluded_content_descriptors.includes(3)))
          ? "blocked"
          : "masked" == _ && _
            ? "allowed"
            : _;
      }
      function _() {
        return "allowed" != _();
      }
      const _ = "bDisableAOWarning";
      _._.PerDay;
      function _() {
        const _ = (0, _._)(_),
          _ = _ ? parseInt(_) : 0;
        return 0 != _ ? _ : null;
      }
      function _(_) {
        const _ = "blocked" == _() && !!_,
          { data: _ } = (0, _._)(
            _
              ? {
                  appid: _,
                }
              : void 0,
          );
        return (
          !!_ &&
          (!_ ||
            _.content_descriptorids.includes(3) ||
            _.content_descriptorids.includes(4))
        );
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
        _ = __webpack_require__("chunkid");
      class _ {
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
            (1 != this.m_eItemType && 2 != this.m_eItemType) ||
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
          return Boolean(
            (!_.include_assets || _.include_assets) &&
              (!_.include_assets_without_overrides ||
                _.include_assets_without_overrides) &&
              (!_.include_release || _.include_release) &&
              (!_.include_platforms || _.include_platforms) &&
              (!_.include_all_purchase_options ||
                _.include_all_purchase_options) &&
              (!_.include_screenshots || _.include_screenshots) &&
              (!_.include_trailers || _.include_trailers) &&
              (!_.include_ratings || _.include_ratings) &&
              (!_.include_tag_count ||
                (_.include_tag_count || 0) >= _.include_tag_count) &&
              (!_.include_reviews || _.include_reviews) &&
              (!_.include_basic_info || _.include_basic_info) &&
              (!_.include_supported_languages ||
                _.include_supported_languages) &&
              (!_.include_full_description || _.include_full_description) &&
              (!_.include_links || _.include_links),
          );
        }
        BContainDataRequest(_) {
          return _.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            _,
          );
        }
        BCheckDataRequestIncluded(_) {
          ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
            (0, _._)(
              this.BContainDataRequest(_),
              `Requested data without for ${(0, _._)(this.m_eItemType)} @ ${this.m_unID}`,
              _,
              this.m_DataRequested,
            );
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL(_ = !1) {
          return _ && this.HasDemoStandaloneStorePage()
            ? _._.STORE_BASE_URL +
                "app/" +
                this.GetDemoStandaloneStorePageAppIDs()[0]
            : _._.STORE_BASE_URL + this.m_strStoreURLPath;
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
            ? _._.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? _._.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 6 == this.GetAppType() || 13 == this.GetAppType();
        }
        k_regexSalePage =
          /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
        BIsSalePage() {
          return (
            0 === this.GetStoreItemType() &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let _ = this.GetStorePageURLWithOverride();
          return (
            0 === this.GetStoreItemType() &&
              ((_ = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                "",
              )),
              _.endsWith("/") && (_ = _.replace("/", ""))),
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
          return 0 == this.GetStoreItemType()
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
          const _ = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
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
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((_) => _ === _) ||
              this.GetStoreCategories_Features().find((_) => _ === _) ||
              this.GetStoreCategories_Controller().find((_) => _ === _),
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
            this.m_BasicInfo?.short_description ?? ""
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
          const _ =
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
          return _ || (_ = this.GetReleaseDateRTime()), _;
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
          return _ || (_ = this.m_ReleaseInfo?.original_release_date), _;
        }
        GetFormattedSteamReleaseDate() {
          if (
            (this.BCheckDataRequestIncluded({
              include_release: !0,
            }),
            this.m_ReleaseInfo?.is_coming_soon)
          ) {
            if (this.m_ReleaseInfo?.coming_soon_display)
              return (0, _._)(this.m_ReleaseInfo);
            if (this.m_ReleaseInfo?.custom_release_date_message)
              return this.m_ReleaseInfo.custom_release_date_message;
            const _ = this.m_ReleaseInfo?.steam_release_date;
            return _
              ? this.m_ReleaseInfo?.is_abridged_release_date
                ? (0, _._)(new Date(1e3 * _))
                : (0, _._)(_)
              : "";
          }
          const _ = this.GetReleaseDateRTime();
          return _ ? (0, _._)(_) : "";
        }
        BIsComingSoon() {
          return this.m_bIsComingSoon;
        }
        BIsCustomComingSoonDisplay() {
          return (
            this.BCheckDataRequestIncluded({
              include_release: !0,
            }),
            !!this.BIsComingSoon() &&
              (this.m_ReleaseInfo?.coming_soon_display
                ? ["text_tba", "text_comingsoon"].includes(
                    this.m_ReleaseInfo.coming_soon_display,
                  )
                : !!this.m_ReleaseInfo?.custom_release_date_message)
          );
        }
        BLimitedLaunchActive() {
          return this.m_ReleaseInfo?.limited_launch_active;
        }
        BIsPrePurchase() {
          return (
            this.BIsComingSoon() &&
            Boolean(this.GetBestPurchaseOption()?.packageid)
          );
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
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents,
            );
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
              (_) =>
                _.elanguage == _ &&
                (_.supported || _.subtitles || _.full_audio),
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
            const _ = this.m_Trailers
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
      }
      function _(_) {
        if (!_?.length) return [];
        const _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
        return Array.from(new Set(_));
      }
      class _ {
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
          const _ = _.asset_url_format();
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
              ((this.m_strCommunityIcon = `${_._.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}.jpg`),
              (this.m_strCommunityIcon_Full = `${_._.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}_full.jpg`)),
            _.page_background_path() &&
              (this.m_strPageBackgroundURL = `${_._.STORE_CDN_URL}images/storepagebackground/${_.page_background_path()}`);
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
            _._.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            _.replace("${FILENAME}", _)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
        GetCommunityIconURL_Full() {
          return this.m_strCommunityIcon_Full;
        }
      }
      class _ {
        m_mapTrailer;
        m_highlightTrailers;
        m_highlightTrailersAllAges;
        m_otherTrailers;
        m_otherTrailersAllAges;
        constructor(_) {
          (this.m_highlightTrailers =
            _.highlights()?.map((_) => new _(_)) ?? []),
            (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
              (_) => _.BIsAllAges(),
            )),
            (this.m_otherTrailers =
              _.other_trailers()?.map((_) => new _(_)) ?? []),
            (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((_) =>
              _.BIsAllAges(),
            )),
            (this.m_mapTrailer = new Map(
              [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                (_) => [_.GetTrailerID(), _],
              ),
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
      }
      class _ {
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
          const _ = _.trailer_url_format();
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
              "dash",
            );
            let _ = this.ExtractAdaptiveTrailers(_.adaptive_trailers(), "hls");
            _.length > 0 && (this.m_rgHlsTrailer = _[0]);
          }
          (this.m_bIsAllAges = _.all_ages() ?? !0),
            (this.m_strCaptionManifest = (0, _._)(_));
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
              "video/mp4" == _.type()
                ? (_.strMP4URL = this.ConstructAssetURL(_, _.filename()))
                : "video/webm" == _.type() &&
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
            _ = _.findIndex((_) => _.encoding().endsWith("_av1"));
          return (
            _ > 0 && _._(_, _, 0),
            _.map((_) => this.ConstructAssetURL(_.cdn_path(), ""))
          );
        }
        ConstructScreenshotURL(_, _) {
          return (
            _._.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            _.replace("${FILENAME}", _)
          );
        }
        ConstructAssetURL(_, _) {
          return (
            _._.VIDEO_CDN_URL + "/store_trailers/" + _.replace("${FILENAME}", _)
          );
        }
      }
      class _ {
        m_rgAllScreenshots;
        m_rgOnlyAllAgesScreenshots;
        constructor(_) {
          const _ = _.all_ages_screenshots() || [],
            _ = _.mature_content_screenshots() || [],
            _ = (_) =>
              _._.BASE_URL_SHARED_CDN + "/store_item_assets/" + _.filename();
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
      }
      function _(_) {
        if (_)
          switch (_.GetStoreItemType()) {
            case 0:
              return {
                appid: _.GetAppID(),
              };
            case 1:
              return {
                packageid: _.GetID(),
              };
            case 2:
              return {
                bundleid: _.GetID(),
              };
            case 4:
              return {
                tagid: _.GetID(),
              };
            case 5:
              return {
                creatorid: _.GetID(),
              };
            case 6:
              return {
                hubcategoryid: _.GetID(),
              };
            case 3:
            case -1:
              return;
            default:
              return void (0, _._)(
                _.GetStoreItemType(),
                `Unknown EStoreItemType ${_.GetStoreItemType()} ${(0, _._)(_.GetStoreItemType())} `,
              );
          }
      }
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
            case 3:
            case -1:
              return;
            default:
              return void (0, _._)(
                _.item_type,
                `Unknown EStoreItemType ${_.item_type} ${(0, _._)(_.item_type)} `,
              );
          }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _;
      function _(_) {
        return "app" == _ ? 0 : "sub" == _ ? 1 : 2;
      }
      function _(_, _ = -1) {
        return _?.appid
          ? 0
          : _?.packageid
            ? 1
            : _?.bundleid
              ? 2
              : _?.creatorid
                ? 5
                : _?.hubcategoryid
                  ? 6
                  : _?.tagid
                    ? 4
                    : _;
      }
      function _(_) {
        switch (_) {
          case 0:
            return "app";
          case 2:
            return "bundle";
          case 1:
            return "package";
          case 3:
            return "mtx";
        }
        return "invalid";
      }
      function _(_) {
        switch (_) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function _(_) {
        switch (_) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      function _(_, _, _) {
        return _
          ? {
              _: _,
              item_type: "app",
            }
          : _
            ? {
                _: _,
                item_type: "sub",
              }
            : {
                _: _,
                item_type: "bundle",
              };
      }
      function _(_) {
        return "app" == _?.item_type
          ? {
              appid: _._,
            }
          : "sub" == _?.item_type
            ? {
                packageid: _._,
              }
            : "bundle" == _?.item_type
              ? {
                  bundleid: _._,
                }
              : null;
      }
      function _(_) {
        return _?.appid
          ? {
              item_type: "app",
              _: _.appid,
            }
          : _?.packageid
            ? {
                item_type: "sub",
                _: _.packageid,
              }
            : _?.bundleid
              ? {
                  item_type: "bundle",
                  _: _.bundleid,
                }
              : null;
      }
      function _(_, _) {
        return 0 == _
          ? {
              _: _,
              item_type: "app",
            }
          : 1 == _
            ? {
                _: _,
                item_type: "sub",
              }
            : 2 == _
              ? {
                  _: _,
                  item_type: "bundle",
                }
              : (console.error(
                  "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                  _,
                ),
                {
                  _: 0,
                  item_type: "app",
                });
      }
      function _(_, _) {
        return 0 == _
          ? {
              appid: _,
            }
          : 1 == _
            ? {
                packageid: _,
              }
            : 2 == _
              ? {
                  bundleid: _,
                }
              : 4 == _
                ? {
                    tagid: _,
                  }
                : 5 == _
                  ? {
                      creatorid: _,
                    }
                  : 6 == _
                    ? {
                        hubcategoryid: _,
                      }
                    : null;
      }
      function _(_) {
        return _?.appid
          ? "a" + _.appid
          : _?.packageid
            ? "p" + _.packageid
            : _?.bundleid
              ? "b" + _.bundleid
              : _?.creatorid
                ? "c" + _.creatorid
                : _?.hubcategoryid
                  ? "h" + _.hubcategoryid
                  : _?.tagid
                    ? "t" + _.tagid
                    : "unknown0";
      }
      function _(_, _) {
        switch (_) {
          case 0:
            return "a" + _;
          case 1:
            return "p" + _;
          case 2:
            return "b" + _;
        }
        return "unknown0";
      }
      function _(_) {
        return _?.appid
          ? _.appid
          : _?.packageid
            ? _.packageid
            : _?.bundleid
              ? _.bundleid
              : _?.hubcategoryid
                ? _.hubcategoryid
                : _?.creatorid
                  ? _.creatorid
                  : _?.tagid
                    ? _.tagid
                    : 0;
      }
      function _(_) {
        return _?.appid
          ? 0
          : _?.packageid
            ? 1
            : _?.bundleid
              ? 2
              : _?.hubcategoryid
                ? 6
                : _?.creatorid
                  ? 5
                  : _?.tagid
                    ? 4
                    : 0;
      }
      function _(_) {
        return "app" == _?.item_type
          ? 0
          : "sub" == _?.item_type
            ? 1
            : "bundle" == _?.item_type
              ? 2
              : -1;
      }
      function _(_) {
        const _ = Number.parseInt(_.substring(1));
        switch (_.charAt(0)) {
          case "a":
            return {
              appid: _,
            };
          case "p":
            return {
              packageid: _,
            };
          default:
            return {
              bundleid: _,
            };
        }
      }
      function _(_) {
        return "application" == _
          ? 0
          : "bundle" == _
            ? 2
            : "package" == _
              ? 1
              : -1;
      }
      function _(_) {
        return 0 == _
          ? "application"
          : 1 == _
            ? "package"
            : 2 == _
              ? "bundle"
              : null;
      }
      function _(_) {
        return 1 == _ ? 0 : 5 == _ ? 2 : 2 == _ ? 1 : -1;
      }
      function _(_) {
        return 0 == _ ? 1 : 1 == _ ? 2 : 2 == _ ? 5 : null;
      }
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
      }),
        (function (_) {
          (_[(_.k_NotRejected = -1)] = "k_NotRejected"),
            (_[(_.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (_[(_.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (_[(_.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (_[(_.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (_[(_.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (_[(_.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (_[(_.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
            (_[(_.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
            (_[(_.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
            (_[(_.k_RejectIgnoreContentDescriptors = 9)] =
              "k_RejectIgnoreContentDescriptors"),
            (_[(_.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
            (_[(_.k_RejectSoftware = 11)] = "k_RejectSoftware"),
            (_[(_.k_RejectDLC = 12)] = "k_RejectDLC"),
            (_[(_.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
            (_[(_.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
            (_[(_.k_RejectVideo = 15)] = "k_RejectVideo"),
            (_[(_.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
            (_[(_.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
            (_[(_.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
            (_[(_.k_RejectAO = 19)] = "k_RejectAO");
        })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _(
          _.coming_soon_display,
          _.steam_release_date,
          _.custom_release_date_message,
        );
      }
      function _(_, _, _, _) {
        switch (_) {
          case "date_full":
            return (0, _._)(_);
          case "date_month":
            return (0, _._)(new Date(1e3 * _));
          case "date_quarter":
            return (0, _._)(new Date(1e3 * _), _);
          case "date_year":
            return (0, _._)(new Date(1e3 * _));
          case "text_comingsoon":
            return _ || (0, _._)("#Store_ComingSoon_ComingSoon");
          case "text_tba":
            return _ || (0, _._)("#Store_ComingSoon_TBA");
          default:
            return "";
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        if (_().isCancel(_))
          return {
            strErrorMsg: "Action Cancelled:" + _,
            errorCode: 52,
          };
        if (
          void 0 !== _.response &&
          _.response.data &&
          "object" == typeof _.response.data
        ) {
          if ("msg" in _.response.data)
            return {
              strErrorMsg: _.response.data.msg,
              errorCode: _.response.data.success,
            };
          if ("err_msg" in _.response.data)
            return {
              strErrorMsg: _.response.data.err_msg,
              errorCode: _.response.data.success,
            };
          if ("message" in _.response.data)
            return {
              strErrorMsg: _.response.data.message,
              errorCode: _.response.data.success,
            };
          if ("success" in _.response.data)
            return {
              strErrorMsg: "error code: " + _.response.data.success,
              errorCode: _.response.data.success,
            };
        } else if ("object" == typeof _.data) {
          if ("msg" in _.data)
            return {
              strErrorMsg: _.data.msg,
              errorCode: _.data.success,
            };
          if ("err_msg" in _.data)
            return {
              strErrorMsg: _.data.err_msg,
              errorCode: _.data.success,
            };
          if ("message" in _.data)
            return {
              strErrorMsg: _.data.message,
              errorCode: _.data.success,
            };
          if ("success" in _.data)
            return {
              strErrorMsg: "error code: " + _.data.success,
              errorCode: _.data.success,
            };
        } else {
          if (void 0 !== _.success && void 0 !== _.msg)
            return {
              strErrorMsg: _.msg,
              errorCode: _.success,
            };
          if (void 0 !== _.success && void 0 !== _.message)
            return {
              strErrorMsg: _.message,
              errorCode: _.success,
            };
          if (void 0 !== _.success && void 0 !== _.err_msg)
            return {
              strErrorMsg: _.err_msg,
              errorCode: _.success,
            };
          if ("string" == typeof _ && _.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(_),
              console.groupEnd();
          else {
            if ("object" == typeof _ && _ instanceof _._)
              return {
                strErrorMsg: "" + _.GetErrorMessage(),
                errorCode: _.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", _);
          }
        }
        return "object" == typeof _ && "status" in _
          ? {
              strErrorMsg: "Unknown Error: " + _ + "\nStatus Code:" + _.status,
              errorCode: 2,
            }
          : {
              strErrorMsg: "Unknown Error: " + _,
              errorCode: 2,
            };
      }
    },
  },
]);
