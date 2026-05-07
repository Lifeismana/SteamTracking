/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5659],
  {
    52471: (e, t, r) => {
      r.d(t, {
        M4: () => _,
        TH: () => o,
        Wv: () => c,
        hg: () => d,
        hl: () => u,
        kB: () => n,
      });
      r(7850);
      var s = r(8527),
        i = r(39777),
        a = r(38535);
      function n(e) {
        const { data: t } = (0, i.Yo)(e),
          r = (0, a.dy)();
        if (!t) return;
        const s = [...(t.highlights || []), ...(t.other_trailers || [])];
        return r ? s.filter((e) => !!e.all_ages) : s;
      }
      function o(e) {
        let t = n(e);
        if (t && 0 != t.length) return t[0];
      }
      function u(e) {
        return `${s.TS.STORE_ITEM_BASE_URL}${e.trailer_url_format.replace("${FILENAME}", e.screenshot_full ?? e.screenshot_medium ?? "")}`;
      }
      function _(e, t) {
        return `${s.TS.VIDEO_CDN_URL}store_trailers/${e.trailer_url_format.replace("${FILENAME}", t)}`;
      }
      function l(e, t) {
        return `${s.TS.VIDEO_CDN_URL}store_trailers/${t}`;
      }
      function c(e) {
        let t =
          "function" == typeof e.captions_manifest
            ? e.captions_manifest()
            : e.captions_manifest;
        if (!t) return;
        let r,
          i = s.TS;
        return (
          i.MEDIA_CDN_URL
            ? (r = i.MEDIA_CDN_URL)
            : i.CDN_HOST_MEDIA && (r = i.CDN_HOST_MEDIA),
          r ? `${r}/${t}` : void 0
        );
      }
      function d(e) {
        let t = [];
        e.adaptive_trailers &&
          (t = e.adaptive_trailers
            .filter(
              (e) =>
                ("dash_h264" == e.encoding || "dash_av1" == e.encoding) &&
                e.cdn_path,
            )
            .map((e) => l(0, e.cdn_path || "")));
        let r = [];
        return (
          e.adaptive_trailers &&
            (r = e.adaptive_trailers
              .filter((e) => "hls_h264" == e.encoding && e.cdn_path)
              .map((e) => l(0, e.cdn_path || ""))),
          { rgDashTrailers: t, rgHlsTrailers: r }
        );
      }
    },
    38535: (e, t, r) => {
      r.d(t, { Zj: () => m, dy: () => c });
      var s = r(90626),
        i = r(30470),
        a = r(14771),
        n = r(2627),
        o = r(20194),
        u = r(39777);
      const _ = s.createContext({ eAdultOnlyMediaBehavior: "masked" });
      function l() {
        const { eAdultOnlyMediaBehavior: e } = s.useContext(_),
          t = (function () {
            const { data: e } = (0, o.I)({
              queryKey: ["AOWarningCookie"],
              queryFn: () => h(),
              placeholderData: () => h(),
              staleTime: 0,
            });
            return e && e > Date.now() / 1e3;
          })();
        return s.useMemo(() => {
          const e = (0, n.VY)("forceallages");
          return (
            !(!e || "0" === e) ||
            !(!i.TS.IN_MOBILE_WEBVIEW || !navigator.userAgent.match(/Android/))
          );
        }, []) ||
          ("masked" == e &&
            (i.iA.excluded_content_descriptors.includes(4) ||
              i.iA.excluded_content_descriptors.includes(3)))
          ? "blocked"
          : "masked" == e && t
            ? "allowed"
            : e;
      }
      function c() {
        return "allowed" != l();
      }
      const d = "bDisableAOWarning";
      a.Kp.PerDay;
      function h() {
        const e = (0, n.VY)(d),
          t = e ? parseInt(e) : 0;
        return 0 != t ? t : null;
      }
      function m(e) {
        const t = "blocked" == l() && !!e,
          { data: r } = (0, u.J$)(t ? { appid: e } : void 0);
        return (
          !!t &&
          (!r ||
            r.content_descriptorids.includes(3) ||
            r.content_descriptorids.includes(4))
        );
      }
    },
    75279: (e, t, r) => {
      r.d(t, { Ay: () => d, DJ: () => I, QO: () => f });
      var s = r(15161),
        i = r(62792),
        a = r(81393),
        n = r(61859),
        o = r(91675),
        u = r(78327),
        _ = r(63369),
        l = r(62490),
        c = r(52471);
      class d {
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
        m_DataRequested = { include_tag_count: 0 };
        m_strInternalName;
        m_rgLinks;
        m_userFilterFailure;
        m_strFullDescriptionBBCode;
        constructor(e, t) {
          (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = !!e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = !!e.is_free()),
            (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
            (this.m_bIsComingSoon =
              !!e.is_coming_soon() || !!e.release()?.is_coming_soon()),
            (this.m_bIsEarlyAccess = !!e.is_early_access()),
            (this.m_RelatedItems = e.related_items()?.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend = e.free_weekend()?.toObject()),
            (this.m_strInternalName = e.internal_name()),
            (1 != this.m_eItemType && 2 != this.m_eItemType) ||
              (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
                ? e.self_purchase_option().toObject()
                : this.m_BestPurchaseOption),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new m(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new m(
                e.assets_without_overrides(),
                e.id(),
              )),
              (this.m_DataRequested.include_assets_without_overrides = !0)),
            t.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            t.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            t.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            t.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new R(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new p(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count &&
              t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0,
              ))),
            t.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            t.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            t.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0)),
            t.include_links &&
              !this.m_rgLinks &&
              ((this.m_rgLinks = e.links().map((e) => e.toObject())),
              (this.m_DataRequested.include_links = !0)),
            t.apply_user_filters &&
              !this.m_userFilterFailure &&
              ((this.m_userFilterFailure = e.user_filter_failure()?.toObject()),
              (this.m_DataRequested.apply_user_filters = !0)),
            t.include_full_description &&
              !this.m_strFullDescriptionBBCode &&
              ((this.m_strFullDescriptionBBCode = e.full_description_bbcode()),
              (this.m_DataRequested.include_full_description = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_assets_without_overrides ||
                e.include_assets_without_overrides) &&
              (!t.include_release || e.include_release) &&
              (!t.include_platforms || e.include_platforms) &&
              (!t.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!t.include_screenshots || e.include_screenshots) &&
              (!t.include_trailers || e.include_trailers) &&
              (!t.include_ratings || e.include_ratings) &&
              (!t.include_tag_count ||
                (e.include_tag_count || 0) >= t.include_tag_count) &&
              (!t.include_reviews || e.include_reviews) &&
              (!t.include_basic_info || e.include_basic_info) &&
              (!t.include_supported_languages ||
                e.include_supported_languages) &&
              (!t.include_full_description || e.include_full_description) &&
              (!t.include_links || e.include_links),
          );
        }
        BContainDataRequest(e) {
          return d.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
            (0, a.wT)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, i.Rz)(this.m_eItemType)} @ ${this.m_unID}`,
              e,
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
        GetStorePageURL(e = !1) {
          return e && this.HasDemoStandaloneStorePage()
            ? u.TS.STORE_BASE_URL +
                "app/" +
                this.GetDemoStandaloneStorePageAppIDs()[0]
            : u.TS.STORE_BASE_URL + this.m_strStoreURLPath;
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
            ? u.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? u.TS.COMMUNITY_BASE_URL +
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
          let e = this.GetStorePageURLWithOverride();
          return (
            0 === this.GetStoreItemType() &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                "",
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
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
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
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
        HasContentDescriptorID(e) {
          return this.m_ContentDescriptorIDs?.includes(e);
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
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t),
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_unfiltered ||
              this.m_ReviewInfo?.summary_filtered
          );
        }
        GetFilteredReviewSummaryLanguage() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_language_specific
          );
        }
        GetFullDescriptionBBCode() {
          return (
            this.BCheckDataRequestIncluded({ include_full_description: !0 }),
            this.m_strFullDescriptionBBCode
          );
        }
        GetShortDescription() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.short_description ?? ""
          );
        }
        GetDeveloperNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.developers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetFranchiseNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.franchises
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetPublisherNames() {
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const e =
            this.m_BasicInfo?.publishers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? [];
          return e?.length > 0 ? e : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? h([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? h(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? h(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? h(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs?.length > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
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
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let e = this.m_ReleaseInfo?.original_steam_release_date;
          return e || (e = this.GetReleaseDateRTime()), e;
        }
        GetReleaseDateRTime(e = !1) {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon && !e)
          )
            return 0;
          let t = this.m_ReleaseInfo?.steam_release_date;
          return t || (t = this.m_ReleaseInfo?.original_release_date), t;
        }
        GetFormattedSteamReleaseDate() {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon)
          ) {
            if (this.m_ReleaseInfo?.coming_soon_display)
              return (0, _.d)(this.m_ReleaseInfo);
            if (this.m_ReleaseInfo?.custom_release_date_message)
              return this.m_ReleaseInfo.custom_release_date_message;
            const e = this.m_ReleaseInfo?.steam_release_date;
            return e
              ? this.m_ReleaseInfo?.is_abridged_release_date
                ? (0, o.sq)(new Date(1e3 * e))
                : (0, n.$z)(e)
              : "";
          }
          const e = this.GetReleaseDateRTime();
          return e ? (0, n.$z)(e) : "";
        }
        BIsComingSoon() {
          return this.m_bIsComingSoon;
        }
        BIsCustomComingSoonDisplay() {
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
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
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
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
        GetScreenshots(e) {
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            this.m_Screenshots
              ? e
                ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
                : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
              : []
          );
        }
        BIsAgeSafeScreenshot(e) {
          return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(e);
        }
        BHasTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers?.BHasTrailers(e)
          );
        }
        BHasHighlightTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (this.m_Trailers?.GetHighlightTrailers(e)?.length ?? 0) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages?.some(
              (t) =>
                t.elanguage == e &&
                (t.supported || t.subtitles || t.full_audio),
            ) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              ?.filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer(e) {
          if (
            (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers)
          ) {
            const t = this.m_Trailers
              .GetAllTrailers(e)
              .find((e) => !!e.GetMicroTrailer());
            if (t) return t.GetMicroTrailer();
          }
          return null;
        }
        GetLinks() {
          return (
            this.BCheckDataRequestIncluded({ include_links: !0 }),
            this.m_rgLinks
          );
        }
        GetUserFilterFailure() {
          return (
            this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
            this.m_userFilterFailure
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function h(e) {
        if (!e?.length) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class m {
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
        constructor(e, t) {
          const r = e.asset_url_format();
          r &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                r,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                r,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(r, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                r,
                e.package_header(),
              )),
            e.raw_page_background() &&
              (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
                r,
                e.raw_page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                r,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                r,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                r,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                r,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              ((this.m_strCommunityIcon = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`),
              (this.m_strCommunityIcon_Full = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`)),
            e.page_background_path() &&
              (this.m_strPageBackgroundURL = `${u.TS.STORE_CDN_URL}images/storepagebackground/${e.page_background_path()}`);
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
        ConstructAssetURL(e, t) {
          return (
            u.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
        GetCommunityIconURL_Full() {
          return this.m_strCommunityIcon_Full;
        }
      }
      class p {
        m_mapTrailer;
        m_highlightTrailers;
        m_highlightTrailersAllAges;
        m_otherTrailers;
        m_otherTrailersAllAges;
        constructor(e) {
          (this.m_highlightTrailers =
            e.highlights()?.map((e) => new g(e)) ?? []),
            (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
              (e) => e.BIsAllAges(),
            )),
            (this.m_otherTrailers =
              e.other_trailers()?.map((e) => new g(e)) ?? []),
            (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((e) =>
              e.BIsAllAges(),
            )),
            (this.m_mapTrailer = new Map(
              [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                (e) => [e.GetTrailerID(), e],
              ),
            ));
        }
        BHasTrailers(e) {
          return e
            ? this.m_highlightTrailersAllAges.length > 0 ||
                this.m_otherTrailersAllAges.length > 0
            : this.m_highlightTrailers.length > 0 ||
                this.m_otherTrailers.length > 0;
        }
        GetHighlightTrailers(e) {
          return e ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
        }
        GetOtherTrailers(e) {
          return e ? this.m_otherTrailersAllAges : this.m_otherTrailers;
        }
        GetAllTrailers(e) {
          return [...this.GetHighlightTrailers(e), ...this.GetOtherTrailers(e)];
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class g {
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
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id()),
            (this.m_eTrailerCategory = e.trailer_category());
          const t = e.trailer_url_format();
          if (
            (t &&
              (e.microtrailer() &&
                (this.m_MicroTrailer = this.ExtractTrailerFormats(
                  t,
                  e.microtrailer(),
                )),
              e.screenshot_medium() &&
                (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_medium(),
                )),
              e.screenshot_full() &&
                (this.m_strScreenshotFull = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_full(),
                ))),
            e.adaptive_trailers())
          ) {
            this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
              e.adaptive_trailers(),
              "dash",
            );
            let t = this.ExtractAdaptiveTrailers(e.adaptive_trailers(), "hls");
            t.length > 0 && (this.m_rgHlsTrailer = t[0]);
          }
          (this.m_bIsAllAges = e.all_ages() ?? !0),
            (this.m_strCaptionManifest = (0, c.Wv)(e));
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
        ExtractTrailerFormats(e, t) {
          let r = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (r.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (r.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            r
          );
        }
        ExtractAdaptiveTrailers(e, t) {
          let r = `${t}_`,
            s = e.filter(
              (e) => e.encoding() && e.cdn_path() && e.encoding().startsWith(r),
            ),
            i = s.findIndex((e) => e.encoding().endsWith("_av1"));
          return (
            i > 0 && l.yY(s, i, 0),
            s.map((e) => this.ConstructAssetURL(e.cdn_path(), ""))
          );
        }
        ConstructScreenshotURL(e, t) {
          return (
            u.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        ConstructAssetURL(e, t) {
          return (
            u.TS.VIDEO_CDN_URL +
            "/store_trailers/" +
            e.replace("${FILENAME}", t)
          );
        }
      }
      class R {
        m_rgAllScreenshots;
        m_rgOnlyAllAgesScreenshots;
        constructor(e) {
          const t = e.all_ages_screenshots() || [],
            r = e.mature_content_screenshots() || [],
            s = (e) =>
              u.TS.BASE_URL_SHARED_CDN + "/store_item_assets/" + e.filename();
          (this.m_rgOnlyAllAgesScreenshots = t.map(s)),
            (this.m_rgAllScreenshots = [...t, ...r]
              .sort((e, t) => e.ordinal() - t.ordinal())
              .map(s));
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
      function I(e) {
        if (e)
          switch (e.GetStoreItemType()) {
            case 0:
              return { appid: e.GetAppID() };
            case 1:
              return { packageid: e.GetID() };
            case 2:
              return { bundleid: e.GetID() };
            case 4:
              return { tagid: e.GetID() };
            case 5:
              return { creatorid: e.GetID() };
            case 6:
              return { hubcategoryid: e.GetID() };
            case 3:
            case -1:
              return;
            default:
              return void (0, a.z_)(
                e.GetStoreItemType(),
                `Unknown EStoreItemType ${e.GetStoreItemType()} ${(0, s.md)(e.GetStoreItemType())} `,
              );
          }
      }
      function f(e) {
        if (e)
          switch (e.item_type) {
            case 0:
              return { appid: e.appid };
            case 1:
              return { packageid: e.id };
            case 2:
              return { bundleid: e.id };
            case 4:
              return { tagid: e.id };
            case 5:
              return { creatorid: e.id };
            case 6:
              return { hubcategoryid: e.id };
            case 3:
            case -1:
              return;
            default:
              return void (0, a.z_)(
                e.item_type,
                `Unknown EStoreItemType ${e.item_type} ${(0, s.md)(e.item_type)} `,
              );
          }
      }
    },
    62792: (e, t, r) => {
      var s;
      function i(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function a(e, t = -1) {
        return e?.appid
          ? 0
          : e?.packageid
            ? 1
            : e?.bundleid
              ? 2
              : e?.creatorid
                ? 5
                : e?.hubcategoryid
                  ? 6
                  : e?.tagid
                    ? 4
                    : t;
      }
      function n(e) {
        switch (e) {
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
      function o(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function u(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      function _(e, t, r) {
        return e
          ? { id: e, item_type: "app" }
          : t
            ? { id: t, item_type: "sub" }
            : { id: r, item_type: "bundle" };
      }
      function l(e) {
        return "app" == e?.item_type
          ? { appid: e.id }
          : "sub" == e?.item_type
            ? { packageid: e.id }
            : "bundle" == e?.item_type
              ? { bundleid: e.id }
              : null;
      }
      function c(e) {
        return e?.appid
          ? { item_type: "app", id: e.appid }
          : e?.packageid
            ? { item_type: "sub", id: e.packageid }
            : e?.bundleid
              ? { item_type: "bundle", id: e.bundleid }
              : null;
      }
      function d(e, t) {
        return 0 == t
          ? { id: e, item_type: "app" }
          : 1 == t
            ? { id: e, item_type: "sub" }
            : 2 == t
              ? { id: e, item_type: "bundle" }
              : (console.error(
                  "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                  t,
                ),
                { id: 0, item_type: "app" });
      }
      function h(e, t) {
        return 0 == t
          ? { appid: e }
          : 1 == t
            ? { packageid: e }
            : 2 == t
              ? { bundleid: e }
              : 4 == t
                ? { tagid: e }
                : 5 == t
                  ? { creatorid: e }
                  : 6 == t
                    ? { hubcategoryid: e }
                    : null;
      }
      function m(e) {
        return e?.appid
          ? "a" + e.appid
          : e?.packageid
            ? "p" + e.packageid
            : e?.bundleid
              ? "b" + e.bundleid
              : e?.creatorid
                ? "c" + e.creatorid
                : e?.hubcategoryid
                  ? "h" + e.hubcategoryid
                  : e?.tagid
                    ? "t" + e.tagid
                    : "unknown0";
      }
      function p(e, t) {
        switch (t) {
          case 0:
            return "a" + e;
          case 1:
            return "p" + e;
          case 2:
            return "b" + e;
        }
        return "unknown0";
      }
      function g(e) {
        return e?.appid
          ? e.appid
          : e?.packageid
            ? e.packageid
            : e?.bundleid
              ? e.bundleid
              : e?.hubcategoryid
                ? e.hubcategoryid
                : e?.creatorid
                  ? e.creatorid
                  : e?.tagid
                    ? e.tagid
                    : 0;
      }
      function R(e) {
        return e?.appid
          ? 0
          : e?.packageid
            ? 1
            : e?.bundleid
              ? 2
              : e?.hubcategoryid
                ? 6
                : e?.creatorid
                  ? 5
                  : e?.tagid
                    ? 4
                    : 0;
      }
      function I(e) {
        return "app" == e?.item_type
          ? 0
          : "sub" == e?.item_type
            ? 1
            : "bundle" == e?.item_type
              ? 2
              : -1;
      }
      function f(e) {
        const t = Number.parseInt(e.substring(1));
        switch (e.charAt(0)) {
          case "a":
            return { appid: t };
          case "p":
            return { packageid: t };
          default:
            return { bundleid: t };
        }
      }
      function C(e) {
        return "application" == e
          ? 0
          : "bundle" == e
            ? 2
            : "package" == e
              ? 1
              : -1;
      }
      function D(e) {
        return 0 == e
          ? "application"
          : 1 == e
            ? "package"
            : 2 == e
              ? "bundle"
              : null;
      }
      function S(e) {
        return 1 == e ? 0 : 5 == e ? 2 : 2 == e ? 1 : -1;
      }
      function y(e) {
        return 0 == e ? 1 : 1 == e ? 2 : 2 == e ? 5 : null;
      }
      r.d(t, {
        Di: () => l,
        FT: () => p,
        JK: () => i,
        Je: () => h,
        M9: () => g,
        Rz: () => n,
        SW: () => o,
        Si: () => y,
        TM: () => u,
        TV: () => C,
        _P: () => R,
        cW: () => f,
        gy: () => I,
        hh: () => c,
        lY: () => D,
        pk: () => a,
        s9: () => S,
        vo: () => d,
        wD: () => m,
        wR: () => _,
      }),
        (function (e) {
          (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
            (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (e[(e.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
            (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
            (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
            (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
              "k_RejectIgnoreContentDescriptors"),
            (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
            (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
            (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
            (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
            (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
            (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
            (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
            (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
            (e[(e.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
            (e[(e.k_RejectAO = 19)] = "k_RejectAO");
        })(s || (s = {}));
    },
    63369: (e, t, r) => {
      r.d(t, { M: () => n, d: () => a });
      var s = r(61859),
        i = r(91675);
      function a(e) {
        return n(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      function n(e, t, r, a) {
        switch (e) {
          case "date_full":
            return (0, s.$z)(t);
          case "date_month":
            return (0, i.sq)(new Date(1e3 * t));
          case "date_quarter":
            return (0, i.u6)(new Date(1e3 * t), a);
          case "date_year":
            return (0, i.vl)(new Date(1e3 * t));
          case "text_comingsoon":
            return r || (0, s.we)("#Store_ComingSoon_ComingSoon");
          case "text_tba":
            return r || (0, s.we)("#Store_ComingSoon_TBA");
          default:
            return "";
        }
      }
    },
    68797: (e, t, r) => {
      r.d(t, { H: () => n });
      var s = r(41735),
        i = r.n(s),
        a = r(56545);
      function n(e) {
        if (i().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);
