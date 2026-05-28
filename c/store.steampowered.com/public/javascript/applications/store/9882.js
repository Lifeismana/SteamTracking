"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9882],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_nLastUpdated = 0;
        m_mapLanguages = _._.map();
        m_appid;
        m_fetching = null;
        constructor(_) {
          this.m_appid = _;
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(_) {
          return this.m_mapLanguages.has(_) ? this.m_mapLanguages.get(_) : null;
        }
        Localize(_, _) {
          let _ = _._.LANGUAGE;
          return _(
            _,
            this.GetTokenList(_),
            "english" != _ ? this.GetTokenList("english") : null,
            this.m_appid,
            _,
          );
        }
        SubstituteParams(_, _) {
          let _ = _._.LANGUAGE;
          return _(
            _,
            this.GetTokenList(_),
            "english" != _ ? this.GetTokenList("english") : null,
            this.m_appid,
            _,
          );
        }
      }
      function _(_, _, _, _, _) {
        if (!_.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              _,
              "appid",
              _,
              "tokens",
              _,
            ),
            ""
          );
        let _ = _;
        _ = _.toLowerCase();
        let _ = "";
        if (
          (_ && _.has(_) && (_ = _.get(_)),
          !_ &&
            _ &&
            __webpack_require__.has(_) &&
            (_ = __webpack_require__.get(_)),
          _)
        )
          _ = _(_, _, _, _, _);
        else if (
          ((_ || _) &&
            console.log(
              "No loc found for appid",
              _,
              _,
              "Tokens:",
              _,
              "Fallback:",
              _,
            ),
          _ && _._.EUNIVERSE != _.wLO)
        )
          return _;
        return _;
      }
      function _(_, _, _, _, _) {
        let _ = _.match(/{[A-za-z0-9_%#:]+}/g);
        if (_)
          for (let _ of _) {
            let _ = _(_(_.slice(1, -1), _), _, _, _, _);
            if (!_) return "";
            _ = _.replace(_, _);
          }
        return (_ = _(_, _));
      }
      function _(_, _) {
        let _ = _.match(/%[A-Za-z0-9_:]+%/g);
        if (_)
          for (let _ of _) {
            let _ = _.slice(1, -1).toLowerCase(),
              _ = _.get(_);
            null == _
              ? console.log("No rich presence found for", _)
              : (_ = _.replace(_, _));
          }
        return _;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_CMInterface;
        m_mapAppInfo = _._.map();
        m_mapRichPresenceLoc = _._.map();
        m_cAppInfoRequestsInFlight = 0;
        m_setPendingAppInfo = new Set();
        m_PendingAppInfoPromise;
        m_PendingAppInfoResolve;
        m_CacheStorage = null;
        m_fnCallbackOnAppInfoLoaded = new _._();
        constructor() {
          (0, _._)(this);
        }
        Init(_) {
          this.m_CMInterface = _;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(_) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, _._)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
              void _()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(_);
        }
        IsLoadingAppID(_) {
          return this.m_setPendingAppInfo.has(_);
        }
        GetAppInfo(_) {
          if (
            ((0, _._)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(_))
          ) {
            let _ = new _._(_);
            this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
          }
          return this.m_mapAppInfo.get(_);
        }
        QueueAppInfoRequest(_) {
          return _
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (_) => (this.m_PendingAppInfoResolve = _),
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(_),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        async FlushPendingAppInfo() {
          const _ = this.m_PendingAppInfoResolve,
            _ = Array.from(this.m_setPendingAppInfo);
          (this.m_PendingAppInfoPromise = void 0),
            (this.m_PendingAppInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            await this.LoadAppInfoBatch(_),
            _?.();
        }
        async LoadAppInfoBatch(_) {
          this.m_cAppInfoRequestsInFlight++;
          let _ = await this.LoadAppInfoBatchFromLocalCache(_);
          if (_.length) {
            console.log("Loading batch of App Info from Steam: ", _),
              await this.m_CMInterface?.WaitUntilLoggedOn();
            let _ = _._.Init(_._);
            _.Body().set_language((0, _.sfN)(_._.LANGUAGE));
            const _ = 50;
            for (; _.length > 0; ) {
              const _ = Math.min(_, _.length),
                _ = _.slice(0, _);
              (_ = _.slice(_)), _.Body().set_appids(_);
              const _ = await _._.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                _,
              );
              _.GetEResult() == _._
                ? this.OnGetAppsResponse(_)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                    _,
                  );
            }
          }
          0 == --this.m_cAppInfoRequestsInFlight &&
            0 == this.m_setPendingAppInfo.size &&
            (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
            this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
        }
        OnGetAppsResponse(_) {
          let _ = [];
          for (let _ of _.Body().apps()) {
            let _ = this.m_mapAppInfo.get(__webpack_require__.appid());
            (0, _._)(
              _,
              `Got AppInfo response for unrequested AppID: ${__webpack_require__.appid()}`,
            ),
              _ &&
                ((_ = new _._(__webpack_require__.appid())),
                _.DeserializeFromMessage(_),
                this.m_mapAppInfo.set(__webpack_require__.appid(), _),
                _.push(_));
          }
          this.SaveAppInfoBatchToLocalCache(_);
        }
        OnAppOverviewChange(_) {
          for (let _ of _) {
            const _ = new _._(_.appid());
            _.DeserializeFromAppOverview(_),
              _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
          }
        }
        async EnsureAppInfoForAppIDs(_) {
          let _ = !1;
          return (
            _.forEach((_) => {
              let _ = this.m_mapAppInfo.get(_);
              _
                ? _.is_valid || (_ = !0)
                : ((_ = new _._(_)),
                  this.m_mapAppInfo.set(_, _),
                  this.QueueAppInfoRequest(_),
                  (_ = !0));
            }),
            _ && void 0 !== this.m_PendingAppInfoPromise
              ? this.m_PendingAppInfoPromise
              : Promise.resolve()
          );
        }
        SetCacheStorage(_) {
          this.m_CacheStorage = _;
        }
        GetCacheKeyForAppID(_) {
          return "APPINFO_" + _;
        }
        async LoadAppInfoBatchFromLocalCache(_) {
          if (!this.m_CacheStorage) return _;
          console.log("Loading batch of App Info from Local Cache: ", _);
          const _ = new Date(new Date().getTime() - 12096e5),
            _ = async (_) => {
              const _ = await this.m_CacheStorage?.GetObject(
                this.GetCacheKeyForAppID(_),
              );
              if (!_) return _;
              let _ = this.m_mapAppInfo.get(_);
              return (
                (0, _._)(
                  _,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                _
                  ? ((_ = new _._(_)),
                    _.DeserializeFromCacheObject(_),
                    _.is_initialized
                      ? (this.m_mapAppInfo.set(_, _),
                        _.time_updated_from_server < _ ? _ : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          _,
                          _,
                        ),
                        _))
                  : _
              );
            };
          let _ = _.map((_) => __webpack_require__(_));
          return (await Promise.all(_)).filter((_) => null !== _);
        }
        async SaveAppInfoBatchToLocalCache(_) {
          if (this.m_CacheStorage) {
            console.log(
              "Saving batch of App Info to Local Cache: ",
              _.map((_) => _.appid),
            );
            for (const _ of _) {
              const _ = _.SerializeToCacheObject();
              _ &&
                this.m_CacheStorage.StoreObject(
                  this.GetCacheKeyForAppID(_.appid),
                  _,
                );
            }
          }
        }
        Localize(_, _, _) {
          const _ = this.GetRichPresenceLoc(_);
          return _
            ? _.Localize(_, _)
            : _._.EUNIVERSE != _.wLO
              ? (console.log(
                  `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
                ),
                _)
              : "";
        }
        GetRichPresenceLoc(_) {
          if (this.m_mapRichPresenceLoc.has(_.toString())) {
            let _ = this.m_mapRichPresenceLoc.get(_.toString());
            return (
              _.m_nLastUpdated + 6e4 * _._ < Date.now() &&
                this.QueueRichPresenceLocRequest(_),
              _
            );
          }
          let _ = new _(_);
          return (
            this.m_mapRichPresenceLoc.set(_.toString(), _),
            this.QueueRichPresenceLocRequest(_),
            _
          );
        }
        GetRichPresenceLocAsync(_) {
          let _ = this.GetRichPresenceLoc(_);
          return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
        }
        OnRichPresenceLocUpdate(_, _) {
          _.m_nLastUpdated = Date.now();
          for (let _ of _) {
            let _ = __webpack_require__.language(),
              _ = _.m_mapLanguages.get(_);
            _
              ? _.clear()
              : (_.m_mapLanguages.set(_, new Map()),
                (_ = _.m_mapLanguages.get(_)));
            for (let _ of __webpack_require__.tokens())
              _?.set(_.name().toLowerCase(), _.value());
          }
        }
        QueueRichPresenceLocRequest(_) {
          return (
            _.m_fetching ||
              ((_.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let _ = _._.Init(_._);
                  return (
                    _.Body().set_appid(_.GetAppID()),
                    _.Body().set_language(_._.LANGUAGE),
                    _._.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      _,
                    )
                  );
                })
                .then(
                  (_) => (
                    (_.m_fetching = null),
                    _.GetEResult() != _._
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          _,
                          _.Body().token_lists(),
                        ),
                        Promise.resolve(_))
                  ),
                )),
              _.m_fetching.catch(() => {
                _.m_fetching = null;
              })),
            _.m_fetching
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnGetAppsResponse", null),
        (0, _._)([_._], _.prototype, "OnRichPresenceLocUpdate", null);
      const _ = new _();
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
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 1,
        _ = 2,
        _ = 3;
      function _(_, _, _, _) {
        const _ = (0, _.useRef)(void 0),
          _ = (0, _.useRef)(void 0),
          _ = (0, _._)();
        _.current = _;
        const [_, _] = (0, _.useState)(void 0),
          {
            include_assets: _,
            include_release: _,
            include_platforms: _,
            include_all_purchase_options: _,
            include_screenshots: _,
            include_trailers: _,
            include_ratings: _,
            include_tag_count: _,
            include_reviews: _,
            include_basic_info: _,
            include_supported_languages: _,
            include_full_description: _,
            include_included_items: _,
            include_assets_without_overrides: _,
            apply_user_filters: _,
            include_links: _,
          } = _;
        if (
          ((0, _.useEffect)(() => {
            const _ = {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
            };
            let _ = null;
            return (
              !_ ||
                _ < 0 ||
                _._.Get().BHasStoreItem(_, _, _) ||
                (void 0 !== _ && _ && _ == _.current) ||
                (_ !== _.current && (_(void 0), (_.current = _)),
                (_ = _().CancelToken.source()),
                _._.Get()
                  .QueueStoreItemRequest(_, _, _)
                  .then((_) => {
                    _?.token.reason || _.current !== _ || _(_ == _._), _();
                  })),
              () => _?.cancel("useStoreItemCache: unmounting")
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
          !_)
        )
          return [null, _];
        if (!1 === _) return [void 0, _];
        if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
        if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
        const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
        return _ ? [_, _] : [null, _];
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _(_, _, _) {
        const [_, _] = _(_, _, _);
        let _;
        _?.GetStoreItemType() != _._._ ||
          _.GetAssets()?.GetHeaderURL() ||
          1 != _?.GetIncludedAppIDs().length ||
          (_ = _.GetIncludedAppIDs()[0]);
        const [_, _] = _(_, _);
        return _ && _?.BIsVisible() ? [_, _] : [_, _];
      }
      function _(_, _, _, _) {
        const _ = (0, _._)(),
          {
            include_assets: _,
            include_release: _,
            include_platforms: _,
            include_all_purchase_options: _,
            include_screenshots: _,
            include_trailers: _,
            include_ratings: _,
            include_tag_count: _,
            include_reviews: _,
            include_basic_info: _,
            include_supported_languages: _,
            include_full_description: _,
            include_included_items: _,
            include_assets_without_overrides: _,
            apply_user_filters: _,
            include_links: _,
          } = _;
        if (
          ((0, _.useEffect)(() => {
            if (!_ || 0 == _.length) return;
            const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
              },
              _ = _.filter(
                (_) =>
                  !(
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _)
                  ),
              );
            if (0 == _.length) return;
            const _ = _().CancelToken.source(),
              _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
            return (
              Promise.all(_).then(() => {
                _.token.reason || _();
              }),
              () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
          !_)
        )
          return _;
        if (
          !_.every(
            (_) =>
              _._.Get().BHasStoreItem(_, _, _) ||
              _._.Get().BIsStoreItemMissing(_, _),
          )
        )
          return _;
        return _.every((_) =>
          _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
        )
          ? _
          : _;
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _() {
        _.useEffect(
          () => (
            _._.Get().SetReturnUnavailableItems(!0),
            () => _._.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);
