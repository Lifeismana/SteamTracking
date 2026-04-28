(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9246],
  {
    chunkid: (module) => {
      module.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-default": "RttCMpsTJp47IkzXpZYvA",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Reset: "_3A_c3YHYd4YIjA8Y-olnPl",
      };
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
        _ = __webpack_require__("chunkid");
      const _ = "pn";
      class _ {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new _._();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          "dev" == _._.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let _ = (0, _._)("package_data", "application_config");
          _
            ? ((this.m_rgPackageIDs = _.map((_) => _.packageid)),
              (this.m_rgPackageData = _),
              (this.m_mapPackageData = new Map(_.map((_) => [_.packageid, _]))))
            : ((this.m_rgPackageIDs = (0, _._)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != _._.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(_) {
          const _ = _.getState().columnFilters.find(
              (_) => "packageName" === _._,
            )?.value,
            _ = new URL(window.location.href);
          _ != decodeURIComponent(_.searchParams.get(_)) &&
            (_
              ? _.searchParams.set(_, encodeURIComponent(_))
              : _.searchParams.delete(_),
            window.history.replaceState(
              {},
              "",
              __webpack_require__.toString(),
            ));
        }
        UpdateVisiblePackageList(_) {
          const _ = _.getVisibleRows().filter((_) => !_.getCanExpand());
          (this.m_rgVisiblePackageIDs = []),
            _.forEach((_) =>
              this.m_rgVisiblePackageIDs.push(_.original.packageID),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(_);
        }
        SetVisiblePackageList(_) {
          (this.m_rgVisiblePackageIDs = [..._]),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            );
        }
      }
      function _() {
        return _.Get().m_rgPackageIDs;
      }
      function _() {
        return _.Get().m_rgPackageIDs;
      }
      function _() {
        return _.Get().m_rgPackageData;
      }
      function _(_) {
        let _ = _.Get().m_mapPackageData.get(_);
        return _ ? _.package_name : _.toString();
      }
      function _() {
        return _.useCallback((_) => _.Get().UpdateVisiblePackageList(_), []);
      }
      function _(_) {
        _.Get().SetVisiblePackageList(_);
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_rgVisiblePackageIDs);
        return (0, _._)(_.Get().m_visiblePackageIDsCallbackList, _), _;
      }
      function _() {
        return _.useMemo(
          () => (0, _._)("publisherid", "application_config"),
          [],
        );
      }
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
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _, _) {
        if (!_)
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        let _ = null;
        for (let _ of _.GetUSDPricePointsInCents())
          if (_ >= _) {
            _ = _;
            break;
          }
        const _ = _ && _ < _._.k_ERegionCodeMax;
        if ((_ == _._.k_ECurrencyCodeUSD && !_) || !_)
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        const _ = _.GetRecommendPrice(_, _, _, _),
          _ = _.GetRecommendPrice(_, _._.k_ECurrencyCodeUSD, void 0, _);
        if (
          ((0, _._)(
            _,
            `Missing requested currency guide for  ${_}/${_}/${_}/${_}`,
          ),
          (0, _._)(_, `Missing usd guide for  ${_}/${_}/${_}`),
          !_ || !_)
        )
          return {
            nSuggestedPriceInCents: null,
            nGuidelinesLevel: null,
          };
        let _ = _.price;
        const _ = _.price;
        if (_ != _) {
          const _ = _ / _;
          (_ *= _), (_ = Math.ceil(_ * _));
        }
        return {
          nSuggestedPriceInCents: _,
          nGuidelinesLevel: _,
        };
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapPackagePrice = new Map();
        m_mapPackageCountryOverridePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new _._();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new _._();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          (0, _._)(this),
            "dev" == _._.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const _ = (0, _._)("base_prices", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                _,
              ),
            _)
          )
            if (this.BIsPricePayloadValid(_))
              for (let _ in _) {
                const _ = _[_],
                  _ = parseInt(_),
                  _ = new Map();
                this.m_mapPackagePrice.set(_, _);
                for (let _ in _)
                  (0, _._)(_)
                    ? (this.m_mapPackageCountryOverridePrice.has(_) ||
                        this.m_mapPackageCountryOverridePrice.set(_, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(_)
                        .set(_.toUpperCase(), _[_]))
                    : _.set(_, _[_]);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const _ = (0, _._)("recurring_subs", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                _,
              ),
            _)
          )
            if (Array.isArray(_))
              for (const _ of _) this.m_setRecurringSubscriptions.add(_);
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const _ = (0, _._)("pending_proposals", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                _,
              ),
            _)
          )
            if (this.BIsPendingPricePayloadValid(_))
              for (let _ in _) {
                const _ = _[_],
                  _ = parseInt(_);
                this.m_mapPriceProposals.set(_, _);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const _ = (0, _._)("valid_price_keys", "application_config");
          ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackagePricingStore loading valid price keys: ",
              _,
            ),
            _ &&
              (this.BIsPriceKeyValid(_)
                ? (this.m_rgKnownPriceKeys = _.sort((_, _) =>
                    (0, _._)(_(_), _(_)),
                  ))
                : "dev" == _._.WEB_UNIVERSE &&
                  console.error("Invalid price keys"));
          const _ = (0, _._)("currency_data", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                _,
              ),
            _)
          )
            if (this.BIsCurrencyPayloadValid(_))
              for (let _ in _) {
                const _ = _[_];
                this.m_mapCurrencyData.set(_, _);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const _ = (0, _._)("currency_descriptions", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                _,
              ),
            _)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(_))
              for (let _ in _) {
                const _ = _[_];
                this.m_mapPriceKeyDescriptions.set(_, _);
              }
            else
              "dev" == _._.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            if (isNaN(parseInt(_))) return !1;
            const _ = _[_];
            if (!_ || "object" != typeof _) return !1;
            for (let _ in _)
              if ("string" != typeof _ || "number" != typeof _[_]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            if (isNaN(parseInt(_))) return !1;
            const _ = _[_];
            if (
              !_ ||
              "object" != typeof _ ||
              _.packageID !== parseInt(_) ||
              "object" != typeof _.prices
            )
              return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            const _ = _[_];
            if (!_ || "object" != typeof _ || _.strCode != _) return !1;
          }
          return !0;
        }
        BIsPriceKeyValid(_) {
          const _ = _;
          if (!_ || !Array.isArray(_)) return !1;
          for (let _ in _) if ("string" != typeof _) return !1;
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(_) {
          const _ = _;
          if (!_ || "object" != typeof _) return !1;
          for (let _ in _) {
            const _ = _[_];
            if (
              !_ ||
              "object" != typeof _ ||
              void 0 === _.bRequired ||
              void 0 === _.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(_) {
          return this.m_mapPriceKeyDescriptions.get(_)?.bRequired ?? !1;
        }
        GetMinimumBasePrice(_) {
          return this.m_mapPriceKeyDescriptions.get(_)?.nLowestBase || 0;
        }
        GetMinimumDiscountPrice(_) {
          return this.m_mapPriceKeyDescriptions.get(_)?.nLowestDiscount || 0;
        }
        GetPublishedCountryOverrides(_) {
          return this.m_mapPackageCountryOverridePrice.has(_)
            ? Array.from(this.m_mapPackageCountryOverridePrice.get(_).keys())
            : [];
        }
        GetPublishedPriceCountryOverride(_, _) {
          return this.m_mapPackageCountryOverridePrice.get(_).get(_);
        }
        GetPublishedPrice(_, _) {
          return (0, _._)(_)
            ? this.m_mapPackageCountryOverridePrice.get(_)?.get(_)
            : this.m_mapPackagePrice.get(_)?.get(_);
        }
        GetProposedPrice(_, _) {
          return this.m_mapPriceProposals.get(_)?.prices[_];
        }
        GetSavedPrice(_, _) {
          return this.GetProposedPrice(_, _) ?? this.GetPublishedPrice(_, _);
        }
        GetPrice(_, _) {
          return this.GetLocalOverridePrice(_, _) ?? this.GetSavedPrice(_, _);
        }
        GetLocalOverridePrice(_, _) {
          return this.m_mapLocalPackagePriceOverrides.get(_)?.get(_);
        }
        GetPriceGridCellCallbackList(_, _) {
          if (!_ || !_) return null;
          this.m_mapPriceGridCellCallbackList.has(_) ||
            this.m_mapPriceGridCellCallbackList.set(_, new Map());
          const _ = this.m_mapPriceGridCellCallbackList.get(_);
          return (
            __webpack_require__.has(_) || __webpack_require__.set(_, new _._()),
            __webpack_require__.get(_)
          );
        }
        GetPackageOverridesCallbackList(_) {
          if (!_) return null;
          let _ = this.m_mapPackageOverridesCallbackList.get(_);
          return (
            _ ||
              ((_ = new _._()),
              this.m_mapPackageOverridesCallbackList.set(_, _)),
            _
          );
        }
        OverridePrice(_, _, _) {
          _ != this.GetPrice(_, _) &&
            (this.m_mapLocalPackagePriceOverrides.has(_) ||
              this.m_mapLocalPackagePriceOverrides.set(_, new Map()),
            _ == this.GetSavedPrice(_, _)
              ? this.m_mapLocalPackagePriceOverrides.get(_).delete(_)
              : this.m_mapLocalPackagePriceOverrides.get(_).set(_, _),
            this.GetPriceGridCellCallbackList(_, _).Dispatch(_),
            this.GetPackageOverridesCallbackList(_).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(_, _, _, _) {
          (0, _._)(
            _.length == _.length,
            `price list size doesn't match ${_.length} != ${_.length}`,
          );
          for (let _ = 0; _ < _.length; ++_) {
            const _ = _[_],
              _ = _[_];
            this.m_mapLocalPackagePriceOverrides.has(_) ||
              this.m_mapLocalPackagePriceOverrides.set(_, new Map()),
              _ == this.GetSavedPrice(_, _)
                ? this.m_mapLocalPackagePriceOverrides.get(_).delete(_)
                : this.m_mapLocalPackagePriceOverrides.get(_).set(_, _),
              this.GetPriceGridCellCallbackList(_, _).Dispatch(_);
          }
          this.GetPackageOverridesCallbackList(_).Dispatch(),
            _ && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(_) {
          return this.m_mapLocalPackagePriceOverrides.get(_)?.size > 0;
        }
        GetAllLocalPriceOverrides() {
          const _ = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((_, _) =>
              _.forEach((_, _) => {
                const _ = this.GetSavedPrice(_, _);
                _.push({
                  packageID: _,
                  strPriceKey: _,
                  nPriceInCents: _,
                  nOldPriceInCents: _,
                });
              }),
            ),
            _.sort(_),
            _
          );
        }
        BHasLocalPriceOverride(_, _) {
          let _ = this.m_mapLocalPackagePriceOverrides.get(_);
          return !!_ && __webpack_require__.has(_);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((_, _) => {
              _.forEach((_, _) => {
                let _ = this.m_mapOverridesPerPriceKey.get(_);
                _ || (_ = 0), _++, this.m_mapOverridesPerPriceKey.set(_, _);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const _ = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let _ = new Set();
          for (const _ of _) {
            const { packageID: _, strPriceKey: _ } = _;
            this.GetPriceGridCellCallbackList(_, _).Dispatch(
              this.GetPrice(_, _),
            ),
              _.add(_);
          }
          for (const _ of _) this.GetPackageOverridesCallbackList(_).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(_) {
          let _ = !1,
            _ = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((_, _) => {
            this.m_mapPriceKeyDescriptions.has(_) &&
              ((_ = !0),
              this.m_mapLocalPackagePriceOverrides.get(_).delete(_),
              this.GetPriceGridCellCallbackList(_, _).Dispatch(
                this.GetPrice(_, _),
              ),
              __webpack_require__.add(_));
          });
          for (const _ of _) this.GetPackageOverridesCallbackList(_).Dispatch();
          _ && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(_) {
          this.m_mapLocalPackagePriceOverrides.get(_)?.forEach((_, _) => {
            this.GetPriceGridCellCallbackList(_, _).Dispatch(
              this.GetSavedPrice(_, _),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(_),
            this.GetPackageOverridesCallbackList(_).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(_, _) {
          const _ = {
            packageID: _,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: _._.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: _,
          };
          for (const _ of this.m_rgKnownPriceKeys)
            _.prices[_] = this.GetPrice(_, _);
          const _ = this.m_mapPackageCountryOverridePrice.get(_);
          if (_) for (const _ of _.keys()) _.prices[_] = this.GetPrice(_, _);
          return _;
        }
        async SubmitProposalToServer(_, _, _) {
          const _ = this.BuildNewPricingProposal(_, _),
            _ = JSON.stringify(_.prices),
            _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("partner_will_publish", _ ? "1" : "0"),
            _.append("prices", _);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (
              200 == _?.status &&
              1 == _.data?.success &&
              0 != _.data.eState
            ) {
              if (3 == _.data.eState) {
                this.m_mapPriceProposals.delete(_);
                for (const _ of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.has(_) ||
                    this.m_mapPackagePrice.set(_, new Map()),
                    this.m_mapPackagePrice.get(_).set(_, _.prices[_]);
              } else
                (_.eState = _.data.eState),
                  (_.proposalKey = _.data.proposalKey),
                  this.m_mapPriceProposals.set(_, _);
              return this.DiscardLocalPriceOverridesForPackage(_), _.data;
            }
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: 2,
            }
          );
        }
        async PublishApprovedProposal(_, _, _ = 0) {
          const _ = this.m_mapPriceProposals.get(_);
          if (4 != _?.eState || !_?.proposalKey)
            return {
              success: 8,
            };
          const _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("proposal_key", _.proposalKey);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
              timeout: _,
            });
            if (200 == _?.status && 1 == _.data?.success) {
              this.m_mapPriceProposals.delete(_);
              for (const _ of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(_).set(_, _.prices[_]),
                  this.GetPriceGridCellCallbackList(_, _).Dispatch(
                    this.GetSavedPrice(_, _),
                  );
              return (
                this.GetPackageOverridesCallbackList(_).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                _.data
              );
            }
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: 2,
            }
          );
        }
        async CancelProposal(_, _) {
          const _ = this.m_mapPriceProposals.get(_);
          if (!_?.proposalKey)
            return {
              success: 8,
            };
          const _ = (0, _._)("publisherid", "application_config"),
            _ =
              _._.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              _ +
              "/" +
              _,
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("proposal_key", _.proposalKey);
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: _?.token,
            });
            if (200 == _?.status && 1 == _.data?.success) {
              this.m_mapPriceProposals.delete(_);
              for (const _ of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(_, _).Dispatch(
                  this.GetSavedPrice(_, _),
                );
              return (
                this.GetPackageOverridesCallbackList(_).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                _.data
              );
            }
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              _.strErrorMsg,
              _,
            ),
            _?.response?.data ?? {
              success: 2,
            }
          );
        }
        GetLocalOverrideCountForPriceKey(_) {
          return this.m_mapOverridesPerPriceKey.get(_) ?? 0;
        }
        BAnyPackagePriceBelowMin(_) {
          if (!_) return !1;
          for (let _ of this.m_rgKnownPriceKeys) {
            let _ = this.GetPrice(_, _);
            if (void 0 === _) continue;
            let { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _);
            if (_ < _) return !0;
          }
          return !1;
        }
      }
      function _(_, _) {
        if (_.strPriceKey == _.strPriceKey) {
          const _ = (0, _._)(_.packageID),
            _ = (0, _._)(_.packageID);
          return (0, _._)(_, _);
        }
        return (0, _._)(_(_.strPriceKey), _(_.strPriceKey));
      }
      function _(_) {
        const _ = _.split("_")[0];
        return _.Get().m_mapCurrencyData.get(_);
      }
      function _(_, _) {
        if (void 0 === _) return ["", "", ""];
        const _ = _(_) ?? _("USD");
        let _ = "";
        if ("number" == typeof _) {
          let _ = _.toString();
          _.length < 3 && (_ = (1 == _.length ? "0" : "") + "0" + _);
          const _ = _.length - 2;
          for (let _ = 0; _ < _; _++) {
            const _ = _.charAt(_);
            (_ += _),
              _ < _ - 1 &&
                (_ - _ - 1) % 3 == 0 &&
                "-" != _ &&
                (_ += _.strThousandsSeparator);
          }
          _.bWholeUnitsOnly ||
            ((_ += _.strDecimalSymbol), (_ += _.substr(_.length - 2)));
        }
        return _.bSymbolIsPrefix
          ? [_.strSymbol + _.strSymbolAndNumberSeparator, _, ""]
          : ["", _, _.strSymbolAndNumberSeparator + _.strSymbol];
      }
      (0, _._)([_._], _.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, _._)([_._], _.prototype, "OverridePrice", null),
        (0, _._)([_._], _.prototype, "UpdateOverridesPerPriceKey", null);
      const _ = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function _(_) {
        return _.has(_) ? _.get(_) : _.indexOf("_") > 0 ? "ZZZ" + _ : _;
      }
      function _(_, _) {
        return _.Get().GetPrice(_, _);
      }
      function _(_) {
        return _.Get().GetPublishedCountryOverrides(_);
      }
      function _(_, _) {
        return _.Get().GetPublishedPriceCountryOverride(_, _);
      }
      function _(_, _) {
        return _.Get().GetPublishedPrice(_, _);
      }
      function _(_, _) {
        return _.Get().GetProposedPrice(_, _);
      }
      function _(_, _) {
        return _.Get().GetLocalOverridePrice(_, _);
      }
      function _(_) {
        const _ = _.Get().m_strDisplayPriceKey;
        return _(_.Get().GetPrice(_, _), _).join("");
      }
      function _(_) {
        const [_, _] = _.useState(_.Get().m_strDisplayPriceKey);
        return (
          (0, _._)(_.Get().m_displayPriceKeyCallbackList, _),
          (function (_, _) {
            const [_, _] = _.useState(_.Get().GetPrice(_, _));
            return (
              (0, _._)(_.Get().GetPriceGridCellCallbackList(_, _), _),
              _.useEffect(() => _(_.Get().GetPrice(_, _)), [_, _]),
              _(_, _).join("")
            );
          })(_, _)
        );
      }
      function _() {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        return _.useCallback(
          () =>
            (function (_, _, _) {
              let _ = 0;
              for (const _ of _) {
                const _ = new Array(),
                  _ = new Array(),
                  _ = _.Get().GetPrice(_, "USD");
                if (_ && !(_ <= 0)) {
                  for (const _ of _.Get().m_rgKnownPriceKeys) {
                    if ("USD" == _) continue;
                    const _ = _.Get().GetPrice(_, "USD"),
                      { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = _(
                        _,
                        _,
                        _,
                        (0, _._)(_),
                        (0, _._)(_),
                      );
                    null !== _ &&
                      _.Get().GetPrice(_, _) != _ &&
                      (_.push(_), _.push(_));
                  }
                  _.length > 0 &&
                    (_.Get().OverridePricesForPackage(_, _, _), (_ += 1));
                }
              }
              _ > 0 && _.Get().DispatchPriceOverridesCallbacks();
            })(_, _, _),
          [_, _, _],
        );
      }
      function _(_, _) {
        const _ = (0, _._)();
        (0, _._)(_.Get().GetPriceGridCellCallbackList(_, _), _);
        const _ = _.Get().GetPrice(_, _),
          _ = (0, _._)(),
          _ = (0, _._)();
        (0, _._)(_.Get().GetPriceGridCellCallbackList(_, "USD"), _);
        const _ = _.Get().GetPrice(_, "USD"),
          { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = _(
            _,
            _,
            _,
            (0, _._)(_),
            (0, _._)(_),
          ),
          _ = _.useCallback((_) => _.Get().OverridePrice(_, _, _), [_, _]),
          _ = _.Get().GetPublishedPrice(_, _),
          _ = _.Get().GetProposedPrice(_, _),
          { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _),
          _ = _.Get().GetMinimumDiscountPrice(_),
          _ = _ ? Math.floor((100 * (_ - _)) / _) : 90,
          _ = _ < Math.min(90, Math.floor((100 * (_ - 50)) / _)) ? _ : null;
        return _.useMemo(
          () => ({
            nPriceInCents: _,
            nProposedPriceInCents: _,
            nPublishedPriceInCents: _,
            nMinPriceInCents: _,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: _,
            fnSetPrice: _,
          }),
          [_, _, _, _, _, _, _, _],
        );
      }
      function _(_) {
        let [_, _] = _.useState(() => _.Get().BAnyPackagePriceBelowMin(_)),
          _ = _.useCallback(() => {
            let _ = _.Get().BAnyPackagePriceBelowMin(_);
            __webpack_require__(_);
          }, [_, _]);
        return (0, _._)(_.Get().GetPackageOverridesCallbackList(_), _), _;
      }
      function _(_) {
        return _.Get().BAnyPackagePriceBelowMin(_);
      }
      function _(_, _) {
        let _ = _.Get();
        return {
          nMinPriceInCents: __webpack_require__.GetMinimumBasePrice(_),
          nMaxPriceInCents: _.m_setRecurringSubscriptions.has(_)
            ? __webpack_require__.GetPublishedPrice(_, _)
            : null,
        };
      }
      function _() {
        return _.useCallback((_, _, _) => {
          const _ = _.Get().GetPrice(_, _);
          return (
            _.Get().OverridePrice(_, _, _),
            _ == _
              ? null
              : {
                  packageID: _,
                  strPriceKey: _,
                  nPriceInCents: _,
                  nOldPriceInCents: _,
                }
          );
        }, []);
      }
      function _(_) {
        const _ = (0, _._)();
        return (
          (0, _._)(_.Get().GetPriceGridCellCallbackList(_, "USD"), _),
          _.Get().m_mapPriceProposals.get(_)
        );
      }
      function _() {
        return Array.from(_.Get().m_mapPriceProposals.values());
      }
      function _(_) {
        return _.Get().m_mapPriceProposals.get(_);
      }
      function _(_) {
        let _ = !1;
        for (const _ of _.Get().m_rgKnownPriceKeys) {
          let _ = _.Get().GetPublishedPrice(_, _);
          _ = _ || (0 != _ && void 0 !== _);
        }
        return _;
      }
      function _(_) {
        const _ = _(_),
          _ = [];
        for (const _ of _.Get().m_rgKnownPriceKeys) {
          const _ = _.prices[_],
            _ = _.Get().GetPublishedPrice(_, _);
          _ != _ &&
            __webpack_require__.push({
              packageID: _,
              strPriceKey: _,
              nPriceInCents: _,
              nOldPriceInCents: _,
            });
        }
        return _;
      }
      function _() {
        return _.Get().m_rgKnownPriceKeys;
      }
      function _(_) {
        let _ = _.Get().m_mapPriceKeyDescriptions.get(_);
        return _ ? _.strDescription : "";
      }
      function _(_) {
        return _.useCallback(() => {
          _.Get().DiscardAllLocalPriceOverridesForKey(_);
        }, [_]);
      }
      function _(_) {
        return _.useCallback(() => {
          _.Get().DiscardLocalPriceOverridesForPackage(_);
        }, [_]);
      }
      function _(_) {
        return _.useCallback(() => {
          _.Get().CancelProposal(_);
        }, [_]);
      }
      function _() {
        const [_, _] = _.useState(_.Get().m_strDisplayPriceKey),
          _ = _.Get().m_rgKnownPriceKeys,
          _ = _.useCallback((_) => {
            _(_),
              (_.Get().m_strDisplayPriceKey = _),
              _.Get().m_displayPriceKeyCallbackList.Dispatch(_);
          }, []);
        return {
          strPriceKey: _,
          rgSupportedPriceKeys: _,
          fnSetPriceKey: _,
        };
      }
      function _(_) {
        const _ = (0, _._)();
        return (
          (0, _._)(_.Get().m_allPriceOverridesCallbackList, _),
          _.Get().BHasLocalPriceOverrides(_)
        );
      }
      function _(_) {
        return _.Get().BHasLocalPriceOverrides(_);
      }
      function _() {
        const [_, _] = _.useState(() => _.Get().GetAllLocalPriceOverrides());
        return (0, _._)(_.Get().m_allPriceOverridesCallbackList, _), _;
      }
      function _(_) {
        return (0, _._)(() => _.Get().GetLocalOverrideCountForPriceKey(_));
      }
      function _() {
        return _.useCallback(
          () => _.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function _() {
        return _.useCallback(() => _.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function _() {
        return _.Get().OverridePrice;
      }
      function _() {
        return _.useCallback(
          (_, _, _) => _.Get().SubmitProposalToServer(_, _, _),
          [],
        );
      }
      function _() {
        return _.useCallback(
          (_, _) => _.Get().PublishApprovedProposal(_, _, 6e4),
          [],
        );
      }
      function _(_) {
        let _ = [];
        const _ = _.Get().m_rgKnownPriceKeys;
        for (let _ of _) {
          if (_(_)) continue;
          let _ = !1;
          for (const _ of _) {
            if (!_.Get().BPriceKeyRequired(_)) continue;
            if (!_.Get().GetPrice(_, _)) {
              _ = !0;
              break;
            }
          }
          _ && _.push(_);
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const _ = (0, _._)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          _ = (0, _._)("#PackageGrid_NoBaseGameFoundForPackage"),
          _ = _.original.appName,
          _ = _.original.appName,
          _ = _ == _,
          _ = _ == _,
          _ = !_ && !_,
          _ = _ == _,
          _ = _ == _,
          _ = !_ && !_;
        if (_ && _) return _.localeCompare(_);
        if (_ || _) return _ ? -1 : 1;
        if (_ == _ && _ == _) {
          const _ = _.original.packageName,
            _ = _.original.packageName;
          return _ && _
            ? __webpack_require__.localeCompare(_)
            : _ || _
              ? _
                ? -1
                : 1
              : _.original.packageID - _.original.packageID;
        }
        return _ ? -1 : 1;
      }
      const _ = (_) => _.nextElementSibling,
        _ = (_) => _.previousElementSibling,
        _ = (_, _) => {
          const _ = _.getAttribute("data-table-column-id"),
            _ = _.parentElement;
          let _ = _ && _(_);
          for (; _ && _; ) {
            for (const _ of Array.from(_.children))
              if (_ == _.getAttribute("data-table-column-id")) return _;
            _ = _(_);
          }
          return null;
        },
        _ = new Map([
          [38, (_) => _(_, _)],
          [39, _],
          [40, (_) => _(_, _)],
          [37, _],
          [9, (_) => _(_, _)],
          [13, (_) => _(_, _)],
        ]);
      function _(_) {
        const _ = Array.prototype.slice.call(_.children).reverse();
        for (; _.length > 0; ) {
          const _ = _.pop();
          if ("input" === _.tagName.toLowerCase()) return _;
          _.push(...Array.prototype.slice.call(_.children).reverse());
        }
        return null;
      }
      function _(_) {
        let _ = _.get(_.keyCode);
        if ((9 === _.keyCode && _.shiftKey && (_ = (_) => _(_, _)), !_)) return;
        var _;
        let _ = _(
          ((_ = _.currentTarget),
          (0, _._)(_, (_) => null != _.getAttribute("data-table-column-id"))),
        );
        for (; _; ) {
          const _ = _(_);
          if (_) return __webpack_require__.focus(), void _.preventDefault();
          _ = _(_);
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = "America/Los_Angeles";
      function _(_) {
        const _ = __webpack_require__("chunkid").unix(_)._(_);
        return (
          _.seconds(0),
          _.minutes(0),
          _.hours(10),
          _.unix() < _ && _.hours(34),
          _.unix()
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
          size: _ = "3",
          loading: _ = !0,
          children: _,
          color: _,
          variant: _,
          ..._
        } = _;
        return _ || !_
          ? (0, _.jsxs)(_._, {
              position: "relative",
              ..._,
              width: "fit-content",
              children: [
                (0, _.jsx)("div", {
                  "data-visibility": !_,
                  className: _.ChildContainer,
                  children: _,
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, _.jsx)(_, {
                      size: _,
                      color: _,
                      variant: _,
                    }),
                  }),
              ],
            })
          : (0, _.jsx)(_, {
              size: _,
              color: _,
              variant: _,
              ..._,
            });
      }
      function _(_) {
        const { className: _, color: _, ..._ } = (0, _._)(_, _);
        return (0, _.jsx)("div", {
          "data-accent-color": _,
          className: _()(_, _.Spinner),
          ..._,
        });
      }
      const _ = [
        ..._._,
        {
          prop: "size",
          responsive: !0,
          className: (_) => _[`Size-${_}`],
        },
        {
          prop: "variant",
          className: (_) => _[`Variant-${_}`],
        },
      ];
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        _.preventDefault();
      }
      const _ = [
          ..._._,
          {
            prop: "size",
            responsive: !0,
            className: (_) => _[`Size-${_}`],
          },
          {
            prop: "variant",
            className: (_) => _[`Variant-${_}`],
          },
          {
            prop: "color",
            dataProperty: (_) => ["accent-color", `${_}`],
          },
          {
            prop: "width",
            className: _.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: _.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        _ = function (_) {
          const {
              variant: _ = "default",
              size: _ = "2",
              minWidth: _ = "fit-content",
              color: _,
              loading: _,
              children: _,
              onClick: _,
              icon: _,
              gamepadFocusable: _ = !0,
              ..._
            } = _,
            _ = _
              ? (0, _.jsx)(_, {
                  size: _,
                  color: _,
                  variant: "bright",
                  children: _,
                })
              : _,
            _ = _ ? void 0 : _,
            _ = _ && _._.IN_GAMEPADUI ? _._ : "button";
          return (0, _.jsx)(_, {
            type: "button",
            ...(0, _._)(
              {
                ..._,
                variant: _,
                size: _,
                minWidth: _,
                color: _,
                className: _()(_.Button, _ && _.Icon),
                onClick: _,
              },
              _,
            ),
            children: _,
          });
        },
        _ = function (_) {
          const {
              variant: _ = "default",
              size: _ = "2",
              minWidth: _ = "fit-content",
              disabled: _,
              icon: _,
              gamepadFocusable: _ = !0,
              ..._
            } = _,
            _ = _ ? _ : void 0,
            _ = _ && _._.IN_GAMEPADUI ? _._ : "a";
          return (0, _.jsx)(_, {
            ...(0, _._)(
              {
                onClick: _,
                ..._,
                variant: _,
                size: _,
                minWidth: _,
                className: _()(_.Button, _ && _.Icon, (0, _._)()),
              },
              _,
            ),
          });
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _() {
        return _.Reset;
      }
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _._.k_ECurrencyCodeUSD;
      }
      function _(_) {
        switch (_) {
          case _._.k_ERegionCodeCIS:
            return "usd_cis";
          case _._.k_ERegionCodeSAsia:
            return "usd_sasia";
          case _._.k_ERegionCodeLATAM:
            return "usd_latam";
          case _._.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function _(_) {
        switch (_) {
          case _._.k_ERegionCodeCIS:
            return "CIS";
          case _._.k_ERegionCodeSAsia:
            return "SASIA";
          case _._.k_ERegionCodeLATAM:
            return "LATAM";
          case _._.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function _(_) {
        switch (_) {
          case "CIS":
            return _._.k_ERegionCodeCIS;
          case "SASIA":
            return _._.k_ERegionCodeSAsia;
          case "LATAM":
            return _._.k_ERegionCodeLATAM;
          case "MENA":
            return _._.k_ERegionCodeMENA;
          default:
            return _._.k_ERegionCodeInvalid;
        }
      }
      function _(_) {
        switch (_) {
          case _._.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case _._.k_ERegionCodeSAsia:
            return "South Asia";
          case _._.k_ERegionCodeLATAM:
            return "Latin America";
          case _._.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function _(_) {
        switch (_?.toLowerCase()) {
          case "usd_cis":
            return _._.k_ERegionCodeCIS;
          case "usd_sasia":
            return _._.k_ERegionCodeSAsia;
          case "usd_latam":
            return _._.k_ERegionCodeLATAM;
          case "usd_mena":
            return _._.k_ERegionCodeMENA;
          default:
            return _._.k_ERegionCodeInvalid;
        }
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
        _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        eConversionMethod: 1,
        setConversionMethod: (_) => {},
        rgAvailableConversionMethods: [],
      });
      function _(_) {
        const { eInitialConversionMethod: _ } = _,
          _ = (0, _._)(),
          [_, _] = _.useState(_ || 1),
          _ = _.useMemo(() => {
            const _ = _
              ? __webpack_require__.GetAvailableConversionMethods()
              : [];
            return {
              eConversionMethod: _,
              setConversionMethod: _,
              rgAvailableConversionMethods: _,
            };
          }, [_, _, _]);
        return (0, _.jsx)(_.Provider, {
          value: _,
          children: _.children,
        });
      }
      function _() {
        return _.useContext(_);
      }
      function _() {
        return _.useContext(_).eConversionMethod;
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
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(_, _, _, _ = 1) {
          return `${_}_${_}_${_ || _._.k_ERegionCodeInvalid}_${_}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(_, _) {
          return _
            ? _ == _._.k_ECurrencyCodeUSD && this.m_setSupportedRegions.has(_)
            : this.m_setSupportedCurrencies.has(_);
        }
        GetRecommendPrice(_, _, _, _ = 1) {
          const _ = this.GetKey(_, _, _, _);
          return this.m_mapKeyToGuidePrice.get(_);
        }
        GetScaledRecommendedPrice(_, _, _, _ = 1) {
          let _ = -1,
            _ = -1;
          for (const _ of this.m_mapUSDPrice.get(_).keys()) {
            const _ = Math.abs(_ - _);
            (-1 == _ || _ < _) && ((_ = _), (_ = _));
          }
          const _ = this.m_mapUSDPrice.get(_).get(_),
            _ = _
              ? _.region_prices.find((_) => _.region_code == _)
              : _.currency_prices.find((_) => _.currency_code == _),
            _ = _ / _;
          return {
            currency_code: _?.currency_code,
            region_code: _?.region_code,
            price: Math.ceil((_?.price || 0) * _),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(_) {
          let _ = new Set();
          _.forEach((_) => {
            const _ = _.convert_method ?? 1;
            this.m_setConversionMethod.add(_),
              this.m_mapUSDPrice.has(_) || this.m_mapUSDPrice.set(_, new Map());
            this.m_mapUSDPrice.get(_).set(_.usd_price, _),
              _.add(_.usd_price),
              _.currency_prices.forEach((_) => {
                const _ = this.GetKey(
                  _.usd_price,
                  _.currency_code,
                  _._.k_ERegionCodeInvalid,
                  _.convert_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(_, _),
                  this.m_setSupportedCurrencies.add(_.currency_code);
              }),
              _.region_prices.forEach((_) => {
                const _ = this.GetKey(
                  _.usd_price,
                  _.currency_code,
                  _.region_code,
                  _.convert_method || 1,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(_, _),
                  this.m_setSupportedRegions.add(_.region_code),
                  this.m_setConversionMethod.has(3))
                ) {
                  const _ = {
                      currency_code: _._.k_ECurrencyCodeUSD,
                      price: _.usd_price,
                      region_code: _.region_code,
                    },
                    _ = this.GetKey(
                      _.usd_price,
                      _._.k_ECurrencyCodeUSD,
                      _.region_code,
                      3,
                    );
                  this.m_mapKeyToGuidePrice.set(_, _);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _._)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let _ = (0, _._)("pricing_guideline", "application_config");
              if (_) return Promise.resolve(_);
              {
                const _ = _._.getQueryData(["PricingGuideline"]);
                return Promise.resolve(_ ?? null);
              }
            })(),
        });
        return (0, _.useMemo)(() => (_.data ? new _(_.data) : null), [_.data]);
      }
      function _() {
        return ["PricingGuideline"];
      }
      function _(_) {
        const _ = _(),
          _ = (0, _._)();
        return {
          fnApplyGuidelines: (0, _.useCallback)(
            (_, _, _) => {
              if (
                ((0, _._)(
                  _,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                _)
              ) {
                for (
                  let _ = _._.k_ECurrencyCodeUSD;
                  _ < _._.k_ECurrencyCodeMax;
                  ++_
                ) {
                  const _ = _.GetRecommendPrice(_, _, void 0, _ ?? _)?.price;
                  if (_ && _ > 0) {
                    const _ = (0, _._)(_);
                    _(_, _, _);
                  }
                }
                for (
                  let _ = _._.k_ERegionCodeCIS;
                  _ < _._.k_ERegionCodeMax;
                  ++_
                ) {
                  const _ = _._.k_ECurrencyCodeUSD,
                    _ = _.GetRecommendPrice(_, _, _, _ ?? _)?.price;
                  if (_ && _ > 0) {
                    const _ = (0, _._)(_, _).toUpperCase();
                    _(_, _, _);
                  }
                }
              }
            },
            [_, _, _],
          ),
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _._,
        _: () => _,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _._,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)(),
        _ = ((0, _._)(), (0, _._)());
    },
  },
]);
