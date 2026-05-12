"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4829],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      function _() {
        let _, _;
        return {
          promise: new Promise((_, _) => {
            (_ = _), (_ = _);
          }),
          resolve: _,
          reject: _,
        };
      }
      function _(_) {
        return new Promise((_) => setTimeout(_, _));
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_eCurLang = (0, _.sfN)(_._.LANGUAGE);
        m_rgHasData = (0, _._)([], _.bP9, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new _._();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(_) {
          return (
            this.m_eCurLang != _ &&
            ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
          );
        }
        SetHasLanguage(_) {
          _.forEach((_, _) => {
            this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
          });
        }
        BHasLanguageData(_) {
          return this.m_rgHasData[_];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(_) {
          _ != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = _);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.DUS = _.s_globalSingletonStore)),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          (0, _._)(this);
        }
      }
      function _() {
        return (0, _._)(() => _.Get().GetCurEditLanguage());
      }
      (0, _._)([_._], _.prototype, "m_eCurLang", void 0),
        (0, _._)([_._], _.prototype, "m_rgHasData", void 0),
        (0, _._)([_._], _.prototype, "m_bHasLocalizationContext", void 0),
        (0, _._)([_._], _.prototype, "GetCurEditLanguage", null),
        (0, _._)([_._], _.prototype, "SetCurEditLanguage", null),
        (0, _._)([_._.bound], _.prototype, "SetHasLanguage", null),
        (0, _._)([_._], _.prototype, "BHasLanguageData", null);
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
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = _.toLowerCase();
        return _.endsWith(".jpg") || _.endsWith(".jpeg")
          ? "image/jpeg"
          : _.endsWith(".png")
            ? "image/png"
            : _.endsWith(".gif")
              ? "image/gif"
              : _.endsWith(".mp4")
                ? "video/mp4"
                : _.endsWith(".webm")
                  ? "video/webm"
                  : _.endsWith(".srt")
                    ? "text/srt"
                    : _.endsWith(".vtt")
                      ? "text/vtt"
                      : _.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function _(_) {
        switch (_) {
          case "image/jpeg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "video/mp4":
            return ".mp4";
          case "video/webm":
            return ".webm";
          case "text/vtt":
            return ".vtt";
          case "text/srt":
            return ".srt";
          case "image/webp":
            return ".webp";
        }
        return (
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", _),
          ".jpg"
        );
      }
      function _(_) {
        switch (_) {
          case _._._:
            return ".jpg";
          case _._._:
            return ".gif";
          case _._._:
            return ".png";
          case _._._:
            return ".webm";
          case _._._:
            return ".mp4";
          case _._._:
            return ".srt";
          case _._._:
            return ".vtt";
          case _._._:
            return ".webp";
        }
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = new Image();
        return (
          (_.onload = () => _.resolve(_)),
          (_.onerror = (_) => {
            console.error("LoadImage failed to load the image, details", _),
              _.resolve(void 0);
          }),
          (_.src = _),
          _.promise
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = document.createElement("video");
        return (
          (_.preload = "metadata"),
          __webpack_require__.addEventListener("loadedmetadata", () =>
            _.resolve(_),
          ),
          (_.onerror = (_) => {
            console.error("LoadVideo failed to load the video, details", _),
              _.resolve(void 0);
          }),
          (_.src = _),
          _.promise
        );
      }
      function _(_) {
        return _.startsWith("image/");
      }
      function _(_) {
        return _.startsWith("video/");
      }
      function _(_, _) {
        return _ ? _(_) : _(_);
      }
      async function _(_, _) {
        if (_) return _(URL.createObjectURL(_));
        {
          const _ = (0, _._)(),
            _ = new FileReader();
          (_.onload = () => _.resolve(_.result ?? void 0)),
            (_.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                _.error,
              ),
                _.resolve(void 0);
            }),
            __webpack_require__.readAsDataURL(_);
          const _ = await _.promise;
          if (!_) return;
          return _(_.toString());
        }
      }
      function _(_) {
        return _
          ? _ instanceof HTMLVideoElement
            ? {
                width: _.videoWidth,
                height: _.videoHeight,
              }
            : {
                width: _.width,
                height: _.height,
              }
          : {
              width: 0,
              height: 0,
            };
      }
      function _(_, _) {
        if (!_) return _;
        const _ = new Set([
          "content-length",
          "host",
          "origin",
          "referer",
          "user-agent",
          "cookie",
          "set-cookie",
          "connection",
          "upgrade",
        ]);
        for (const _ of _)
          __webpack_require__.has(_.name.toLowerCase()) ||
            (_[_.name] = _.value);
        return _;
      }
    },
  },
]);
