(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [65920],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => _.get(_) ?? null)
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return (0, _._)("PlayerLinkDetails", () => _(_));
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ > "u") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
              const _ = {};
              return (
                Object.keys(_)
                  .sort()
                  .forEach((_) => {
                    _[_] = _[_];
                  }),
                _
              );
            }
            return _;
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (_?.factories[_] ?? _)();
          return ((_ ?? _).instances[_] = _), _;
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
        });
        var _ = __webpack_require__("chunkid");
        const _ = 622,
          _ = 1920,
          _ = 450,
          _ = 800,
          _ = 460,
          _ = 2108,
          _ = 300,
          _ = 800,
          _ = 300,
          _ = 644,
          _ = 337,
          _ = 155,
          _ = 433,
          _ = 199,
          _ = ["app_header_capsule", "app_main_capsule"],
          _ = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          _ = ["takeunder_art", "takeunder_mobile_art"],
          _ = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          _ = ["marketingmessage_art", "marketingmessage_art_2"],
          _ = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          _ = ["spotlight_art_hero"],
          _ = [
            "spotlight",
            "background",
            "hero",
            "email_full",
            "email_centered",
            "broadcast_left",
            "broadcast_right",
            "localized_image_group",
            "sale_section_background",
            "sale_section_title",
            "sale_overlay",
            "link_capsule",
            "product_banner_override",
            "product_mobile_banner_override",
            "schedule_track_art",
            "tab_bar_background",
            "bestofyear_banner",
            "bestofyear_banner_mobile",
            "localized_marketing_message",
            "localized_optin_banner",
            "old_spotlight_art",
            "user_poll_background",
            "localized_marketingmessage_webm",
            "localized_marketingmessage_mp4",
            "localized_subtitles",
            "localized_marketingmessage_poster",
            "localized_marketingmessage_background",
            "localized_store_app_spotlight",
            "localized_store_app_spotlight_mobile",
            "localized_email_image",
            "localized_background_art",
            "edition_comparison",
            "template_asset",
            "sale_store_capsule_header",
            "sale_store_capsule_small",
            "sale_store_capsule_main",
            "sale_store_capsule_vertical",
            ...[..._, ..._, ..._, ..._, ..._, ..._, ..._],
          ];
        function _(_) {
          return Array.isArray(_) ? _[0] : _;
        }
        function _(_) {
          const _ = Array.isArray(_) ? _ : [_];
          return Math.min(..._);
        }
        function _(_, _) {
          return _ === void 0 ? _(_) : Array.isArray(_) ? _[_] : _;
        }
        const _ = [_._._, _._._, _._._, _._._],
          _ = [_._._, _._._, _._._],
          _ = [_._._, _._._],
          _ = [_._._, _._._],
          _ = [_._._, _._._],
          _ = [_._._, _._._, _._._, _._._, _._._, _._._],
          _ = {
            capsule: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            marketingmessage_art_2_eventcapsule: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            marketingmessage_art_eventcapsule: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            spotlight: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: _,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            localized_title_image: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            background: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            email_full: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            email_centered: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            broadcast_left: {
              width: [_, _],
              height: [_, _],
              rgAcceptableTypes: _,
            },
            broadcast_right: {
              width: [_, _],
              height: [_, _],
              rgAcceptableTypes: _,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: _,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: _,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: _,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: _,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: _,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: _,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: _,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [_._._],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [_._._],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [_._._, _._._],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [_._._, _._._],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: _,
            },
            spotlight_art: {
              width: 306,
              height: 260,
              rgAcceptableTypes: _,
            },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: _,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: _,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            takeover_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: _,
            },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: _,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [_._._],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [_._._],
            },
            takeunder_art: {
              width: 1200,
              height: 190,
              rgAcceptableTypes: _,
            },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: _,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: _,
            },
          };
        function _(_, _, _, _) {
          let _ = null;
          if (Array.isArray(_)) {
            if (
              ((_ = _.map((_, _) => (_ === _ ? _ : void 0)).filter(
                (_) => _ !== void 0,
              )),
              _.length <= 0)
            )
              return !1;
          } else if (_ !== _) return !1;
          if (Array.isArray(_)) {
            const _ = _.map((_, _) => (_ === _ ? _ : void 0)).filter(
              (_) => _ !== void 0,
            );
            if (_.length <= 0 || (_?.length && !_.some((_) => _.includes(_))))
              return !1;
          } else if (_ !== _) return !1;
          return !0;
        }
        function _(_, _, _, _) {
          const _ = _[_];
          return _
            ? _.bDisableEnforceDimensions
              ? !!_
              : _(_, _, _.width, _.height)
            : !1;
        }
        function _(_, _, _) {
          const _ = _[_];
          if (!_) return !1;
          if (_.bDisableEnforceDimensions) return !0;
          if (Array.isArray(_.width)) {
            if (_.width.filter((_) => _ < _).length == _.width.length)
              return !1;
          } else if (_ < _.width) return !1;
          if (Array.isArray(_.height)) {
            if (_.height.filter((_) => _ < _).length == _.height.length)
              return !1;
          } else if (_ < _.height) return !1;
          return !0;
        }
        function _(_) {
          const _ = _[_];
          return (
            _.rgAcceptableTypes.includes(_._._) ||
            _.rgAcceptableTypes.includes(_._._)
          );
        }
        function _(_, _) {
          return _.filter((_) => _(_, _));
        }
        function _(_, _) {
          return _[_].rgAcceptableTypes.includes(_);
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
        function _(_) {
          return _ == "waiting" || _ == "uploading" || _ == "processing";
        }
        class _ {
          m_originalSize = {
            width: 0,
            height: 0,
          };
          m_originalDataUrl = "";
          dataUrl = void 0;
          width = 0;
          height = 0;
          status = "pending";
          message = "";
          language = void 0;
          file;
          filename;
          uploadTime;
          fileType;
          constructor(_, _, _, _, _) {
            (0, _._)(this),
              (this.file = _),
              (this.filename = _),
              (this.fileType = (0, _._)(_) ?? _._._),
              (this.language = _),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = _),
              (this.height = _.height),
              (this.width = _.width),
              (this.m_originalDataUrl = _),
              (this.dataUrl = _);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        _([_._], _.prototype, "dataUrl", 2),
          _([_._], _.prototype, "width", 2),
          _([_._], _.prototype, "height", 2),
          _([_._], _.prototype, "status", 2),
          _([_._.ref], _.prototype, "message", 2),
          _([_._], _.prototype, "language", 2);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
        function _(_, _, _) {
          const _ = (0, _._)(_.width, _),
            _ = (0, _._)(_.height, _);
          return {
            sKey: `${_}_${_}x${_}`,
            width: _,
            height: _,
            bEnforceDimensions: !_.bDisableEnforceDimensions,
            artworkType: _,
            bHiddenFromDropdown: _ === "hero",
            bDeprecated: (_ ?? 0) >= 1,
            fnGetLabelText() {
              return this.artworkType == "spotlight"
                ? (0, _._)("#EventEditor_ArtworkType_store_spotlight")
                : (0, _._)("#EventEditor_ArtworkType_" + this.artworkType);
            },
          };
        }
        function _(_) {
          return _?.flatMap((_) => {
            const _ = _._[_];
            if (
              ((0, _._)(!!_, `Artwork Type not in Map ${_}`),
              typeof _.width == "number" && typeof _.height == "number")
            )
              return [_(_, _)];
            {
              let _ = Math.max(
                Array.isArray(_.width) ? _.width.length : 1,
                Array.isArray(_.height) ? _.height.length : 1,
              );
              return Array.from(
                {
                  length: _,
                },
                (_, _) => _(_, _, _),
              );
            }
          });
        }
        class _ extends _._ {
          m_filesToUpload = _._.array();
          m_filesCompleted = _._.array();
          m_clanImagesV2;
          m_clanSteamID;
          m_rgImageOptions;
          m_localizedImageGroupPrimaryImage;
          m_lastError = void 0;
          constructor(_, _, _, _) {
            super(),
              (0, _._)(this),
              (this.m_clanSteamID = _),
              (this.m_rgImageOptions = _(_)),
              (this.m_localizedImageGroupPrimaryImage = _),
              (this.m_clanImagesV2 = _ ?? !1);
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          async AddImage(_, _ = _.Bhc) {
            const { language: _ } = (0, _._)(_.name, _);
            return this.AddImageForLanguage(_, _);
          }
          async AddImageForLanguage(_, _) {
            if (!(0, _._)(_.type) && !(_._.is_support && (0, _._)(_.type)))
              return !1;
            const _ = await (0, _._)(_, (0, _._)(_.type));
            if (!_) return !1;
            const _ = new _._(
              _,
              _.name,
              _,
              this.m_rgImageOptions,
              _.src,
              (0, _._)(_),
              _,
              this.m_localizedImageGroupPrimaryImage,
            );
            return (this.m_filesToUpload = [...this.m_filesToUpload, _]), !0;
          }
          async AddExistingClanImage(_, _ = _.Bhc) {
            const _ = _._.GetHashAndExt(_);
            if (!_) return !1;
            const _ = _._.GenerateEditableURLFromHashAndExt(
                this.m_clanSteamID,
                _,
              ),
              _ = await _()({
                url: _,
                method: "GET",
                responseType: "blob",
              }),
              _ = (0, _._)(_.data, _.file_name);
            return await this.AddImage(_, _);
          }
          DeleteUploadImageByIndex(_) {
            this.m_filesToUpload.splice(_, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]);
          }
          DeleteUploadImage(_) {
            let _ = this.m_filesToUpload.findIndex(
              (_) => _.file == _.file && _.uploadTime == _.uploadTime,
            );
            _ >= 0 && this.DeleteUploadImageByIndex(_);
          }
          ClearImages() {
            this.m_filesToUpload = _._.array();
          }
          GetFilesUploaded() {
            return this.m_filesCompleted;
          }
          GetLastErrorFile() {
            return this.m_lastError;
          }
          GetCompletedFiles() {
            return this.m_filesCompleted.length;
          }
          GetTotalFiles() {
            return this.m_filesToUpload.length;
          }
          GetFilesToUpload() {
            return this.m_filesToUpload.map((_) => _.file);
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          BHasError() {
            return this.m_lastError != null;
          }
          BAllDone() {
            return (
              this.m_filesCompleted.length > 0 &&
              this.m_filesCompleted.length == this.m_filesToUpload.length
            );
          }
          BIsFileCompleted(_) {
            return this.m_filesCompleted.indexOf(_) != -1;
          }
          RetryAllFailedUploads() {
            this.CancelAllUploads(), this.UploadAllImages();
          }
          async handleUploadRefresh(_) {
            await _._.LoadClanImages(this.m_clanSteamID, !0, _);
          }
          BGetUploadsAreInSerial() {
            return !1;
          }
          async UploadSingleImage(_, _, _, _) {
            const _ = _.file,
              _ = _.GetCurrentImageOption(),
              _ = _.GetResizeDimension(),
              _ = new FormData();
            _.append("clanimage", _, _),
              _.append("sessionid", (0, _._)()),
              this.m_clanImagesV2 && _.append("clan_images_v2", "1"),
              _?.artworkType && _.append("arttype", _.artworkType),
              _ &&
                _.length > 0 &&
                _.append(
                  "resize",
                  _.map((_) => _.width + "x" + _.height).join(","),
                );
            let _ = "/uploadimage/";
            const _ = this.m_localizedImageGroupPrimaryImage;
            _ &&
              ((_ = "/ajaxuploadlocalizedimage/"),
              _.append("origimagehash", _.image_hash),
              _.thumbnail_hash && _.append("thumbhash", _.thumbnail_hash),
              _.append("extension", "" + _.file_type),
              _.append("language", "" + _));
            const _ = _.split(".").pop()?.toLocaleLowerCase();
            (_ == "webm" || _ == "mp4") &&
              (_.append("video_width", "" + _.width),
              _.append("video_height", "" + _.height));
            let _ =
                _._.COMMUNITY_BASE_URL +
                "/gid/" +
                this.m_clanSteamID.ConvertTo64BitString() +
                _,
              _ = {
                cancelToken: _,
                withCredentials: !0,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              },
              _,
              _ = !0;
            try {
              (_ = await _().post(_, _, _)), this.m_filesCompleted.push(_);
            } catch (_) {
              (_ = !1),
                (this.m_lastError = {
                  file: _,
                  status: _.response ? _.response.status : 500,
                  message: (0, _._)(_).strErrorMsg,
                }),
                (_ = _.response);
            }
            return (
              _ || (await this.handleUploadRefresh(_)),
              {
                bSuccess: _,
                result: _.data,
              }
            );
          }
        }
        _([_._], _.prototype, "m_filesToUpload", 2),
          _([_._], _.prototype, "m_filesCompleted", 2),
          _([_._], _.prototype, "m_lastError", 2),
          _([_._], _.prototype, "AddImage", 1),
          _([_._], _.prototype, "AddExistingClanImage", 1),
          _([_._], _.prototype, "DeleteUploadImageByIndex", 1),
          _([_._], _.prototype, "DeleteUploadImage", 1),
          _([_._], _.prototype, "ClearImages", 1);
        class _ extends _ {
          constructor(_, _, _) {
            super(_, _, _, !1);
          }
        }
        class _ extends _ {
          constructor(_, _, _) {
            super(_, _, _, !0);
          }
        }
        async function _(_, _, _, _, _) {
          let _ =
              _._.COMMUNITY_BASE_URL +
              "/gid/" +
              _.ConvertTo64BitString() +
              "/resizeimage/",
            _ = new FormData();
          return (
            _.append("imagehash", _),
            _.append("extension", _),
            _.append(
              "resize",
              _.map((_) => _.width + "x" + _.height).join(","),
            ),
            _.append("sessionid", (0, _._)()),
            (
              await _().post(_, _, {
                cancelToken: _,
              })
            ).data.count
          );
        }
        function _(_, _, _) {
          const _ = (0, _._)(_ instanceof Array ? _ : [_]),
            _ = _.ConvertTo64BitString();
          return _.useMemo(() => new _(_, _, _), [_, _]);
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
        const _ = 960,
          _ = 311,
          _ = 480,
          _ = 156;
        class _ extends _._ {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(_, _, _, _, _, _) {
            super(_, _, _, _, _), (0, _._)(this), (this.m_rgImageOptions = _);
          }
          IsValidAssetType(_, _) {
            let _ = 0,
              _ = 0,
              _ = !1,
              _ =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (_) => _.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (_) (_ = _.width), (_ = _.height), (_ = !0);
            else if (this.GetCurrentImageOption()) {
              const _ = _._[this.GetCurrentImageOption().artworkType];
              _ &&
                ((_ = _.width),
                (_ = _.height),
                (_ = !_.bDisableEnforceDimensions));
            }
            const _ = this.width >= (0, _._)(_) && this.height >= (0, _._)(_),
              _ = _ ? (0, _._)(this.width, this.height, _, _) : _,
              _ = _ && _ != this.fileType,
              _ =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, _._)(
                      this.fileType,
                      this.m_rgImageOptions?.map((_) => _.artworkType) || [],
                    ).length == 0
                  : !1,
              _ = !!(0, _._)(this.fileType);
            let _ = "",
              _ = !1,
              _;
            return (
              _
                ? _
                  ? (_ = (0, _._)("#ImageUpload_InvalidFileType"))
                  : _
                    ? (_ = (0, _._)(
                        "#ImageUpload_InvalidFormat",
                        (0, _._)(_) ?? "",
                      ))
                    : !_ && !_
                      ? (_ = (0, _._)(
                          "#ImageUpload_InvalidResolution",
                          (0, _._)(_),
                          (0, _._)(_),
                        ))
                      : _
                        ? !_ && _
                          ? ((_ = (0, _._)(
                              "#ImageUpload_InvalidDimensions",
                              (0, _._)(_),
                              (0, _._)(_),
                            )),
                            (_ = !0))
                          : ((Array.isArray(_) && this.width != (0, _._)(_)) ||
                              (Array.isArray(_) &&
                                this.height != (0, _._)(_))) &&
                            ((_ = _ ?? []),
                            _.push(
                              (0, _._)(
                                "#ImageUpload_PreferredDimension",
                                (0, _._)(_),
                                (0, _._)(_),
                              ),
                            ))
                        : (_ = (0, _._)(
                            "#ImageUpload_TooSmall",
                            (0, _._)(_),
                            (0, _._)(_),
                          ))
                : (_ = (0, _._)("#ImageUpload_InvalidFormatSelected")),
              {
                error: _,
                warnings: _,
                needsCrop: _,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const _ = (0, _._)(
              this.fileType,
              this.m_rgImageOptions?.map((_) => _.artworkType),
            );
            let _ = _(this.width, this.height, _, !1);
            if ((_ === void 0 && (_ = _(this.width, this.height, _, !0)), _)) {
              const _ = this.m_rgImageOptions.find(
                (_) =>
                  _.artworkType == _ &&
                  (!_.bEnforceDimensions ||
                    (_.width == this.width && _.height == this.height)),
              );
              if (_) return _;
            }
            return this.m_rgImageOptions[0];
          }
          get ImageOptions() {
            return this.m_rgImageOptions;
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            return (
              this.m_currentImageOption ?? this.ComputeDefaultImageOption()
            );
          }
          SetCurrentImageOption(_) {
            (this.m_currentImageOption = _),
              (this.m_currentImageOptionKey = _?.sKey);
          }
        }
        _([_._], _.prototype, "m_currentImageOption", 2),
          _([_._], _.prototype, "m_currentImageOptionKey", 2);
        class _ extends _ {
          video;
          constructor(_, _, _, _, _, _, _) {
            super(_, _, _, _, _, _), (this.video = _);
          }
          BIsOriginalMinimumDimensions(_) {
            return (0, _._)(
              this.video.videoWidth,
              this.video.videoHeight,
              _.artworkType,
            );
          }
          FileTypeMatchesImageTypes(_) {
            return (0, _._)(this.fileType, _.artworkType);
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class _ extends _ {
          constructor(_, _, _, _) {
            super(_, _, _, _, URL.createObjectURL(_), {
              width: 0,
              height: 0,
            });
          }
          BIsOriginalMinimumDimensions(_) {
            return (0, _._)(_.artworkType);
          }
          FileTypeMatchesImageTypes(_) {
            return (0, _._)(this.fileType, _.artworkType);
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function _(_) {
          const _ = _.split(".").pop()?.toLocaleLowerCase();
          return _ == "webm" || _ == "mp4";
        }
        class _ extends _ {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(_, _, _, _, _, _, _, _) {
            super(_, _, _, _, _, _),
              (0, _._)(this),
              (this.media = _),
              (this.localizedImageGroupPrimaryImage = _);
          }
          IsValidAssetType(_, _) {
            return (
              (_ = _ ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(_, _)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(_) {
            return (0, _._)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              _.artworkType,
            );
          }
          FileTypeMatchesImageTypes(_) {
            return (0, _._)(this.fileType, _.artworkType);
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          GetResizeDimension() {
            return _(this.GetCurrentImageOption()?.artworkType);
          }
        }
        _([_._], _.prototype, "bCropped", 2);
        function _(_) {
          if (_ === "background")
            return [
              {
                width: _,
                height: _,
              },
              {
                width: _,
                height: _,
              },
            ];
          if (_ === "capsule")
            return [
              {
                width: (0, _._)(_._[_].width) / 2,
                height: (0, _._)(_._[_].height) / 2,
              },
            ];
          if (_ === "spotlight")
            return [
              {
                width: (0, _._)(_._[_].width) / 2,
                height: (0, _._)(_._[_].height) / 2,
              },
            ];
        }
        function _(_, _, _, _ = !1) {
          if (_) {
            for (let _ of _)
              if (_ ? (0, _._)(_, _, _) : (0, _._)(_, _, _)) return _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        class _ {}
        function _(_, _, _) {
          const _ = _.filter((_) => {
            const _ = _.IsValidAssetType(_, _);
            return _.status === "pending" && !_.error && !_.needsCrop;
          });
          return (
            _.forEach((_) => {
              (_.status = "waiting"), (_.message = "");
            }),
            _
          );
        }
        async function _(_, _, _, _, _) {
          const _ = _(_, _, _),
            _ = [];
          for (const _ of _) {
            _.status = "uploading";
            const _ = await _(_, _.filename, _.language ?? _.xPp, _);
            (_.status = _.bSuccess ? "success" : "failed"),
              (_.message =
                !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ""),
              _.push({
                bSuccess: _.bSuccess,
                image: _,
                uploadResult: _.result,
              });
          }
          return _;
        }
        async function _(_, _, _, _, _, _) {
          const _ = _(_, _, _),
            _ = [];
          let _ = 0;
          const _ = async () => {
              for (; _ < _.length; ) {
                const _ = _++,
                  _ = _[_];
                _.status = "uploading";
                const _ = await _(_, _.filename, _.language ?? _.xPp, _);
                (_.status = _.bSuccess ? "success" : "failed"),
                  (_.message =
                    !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ""),
                  (_[_] = {
                    image: _,
                    uploadResult: _,
                  });
              }
            },
            _ = Array.from(
              {
                length: Math.floor(_),
              },
              () => _(),
            );
          return (
            await Promise.all(_),
            _.map((_) => ({
              bSuccess: _.uploadResult.bSuccess,
              image: _.image,
              uploadResult: _.uploadResult.result,
            }))
          );
        }
        class _ extends _ {
          m_cancel = void 0;
          async UploadAllImages(_, _) {
            this.m_cancel = _().CancelToken.source();
            const _ = this.BGetUploadsAreInSerial() ? 1 : 4;
            let _;
            const _ = this.UploadSingleImage.bind(this);
            return (
              _ > 1
                ? (_ = await _(
                    this.GetUploadImages(),
                    _,
                    _,
                    _,
                    _,
                    this.m_cancel.token,
                  ))
                : (_ = await _(
                    this.GetUploadImages(),
                    _,
                    _,
                    _,
                    this.m_cancel.token,
                  )),
              _
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, _._)("#ImageUpload_CancelRequest"));
          }
        }
        function _(_, _, _) {
          if (((_ == null || _ == null) && (_ = _), !_ || _.length === 0))
            return _;
          for (const _ of _) if (_._.IsELanguageValidInRealm(_, _)) return _;
          for (const _ of _) if (_._.IsELanguageValidInRealm(_, _)) return _;
          return _.includes(_._.k_ESteamRealmGlobal) ? _.Bhc : _.ZLm;
        }
        function _(_, _ = _.Bhc) {
          let _ = _.lastIndexOf(".");
          _ != -1 && (_ = _.slice(0, _).toLowerCase());
          let _ = null,
            _ = 0;
          _.endsWith("korean") && ((_ = _.Pn1), (_ = 6));
          for (let _ = _.Bhc; _ < _.bP9; ++_) {
            const _ = (0, _.wwZ)(_);
            if (_.length <= _) continue;
            if (_.endsWith(_) && _.length > _.length + 2) {
              const _ = _[_.length - _.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(_) || ((_ = _), (_ = _.length));
            }
            const _ = (0, _.LgB)(_);
            _.length <= _ || (_.endsWith(_) && ((_ = _), (_ = _.length)));
          }
          const _ = (_) => _.replace(/[\s_-]+$/g, "");
          return {
            language: _ ?? _,
            baseFilename: _ > 0 ? _(_.substring(0, _.length - _)) : _,
          };
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
          success;
          images;
        }
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapClanToImages = new Map();
          m_mapClanImageLoadPromises = new Map();
          m_imageListChangeCallback = new Map();
          m_mapClanImageLoadState = new Map();
          m_mapImageIDToResolution = new Map();
          BHasImageResolution(_) {
            return this.m_mapImageIDToResolution.has(_.imageid);
          }
          GetImageResolution(_) {
            return this.m_mapImageIDToResolution.get(_.imageid);
          }
          SetImageResolution(_, _) {
            this.m_mapImageIDToResolution.set(_.imageid, _);
          }
          GetImageListCallbackForClanAccountIDInternal(_) {
            return (
              this.m_imageListChangeCallback.has(_) ||
                this.m_imageListChangeCallback.set(_, new _._()),
              this.m_imageListChangeCallback.get(_)
            );
          }
          GetImageListCallbackForClanAccountID(_) {
            return this.GetImageListCallbackForClanAccountIDInternal(_);
          }
          m_vecClanImageDragListener = new Array();
          AddClanImageDragListener(_) {
            this.m_vecClanImageDragListener.indexOf(_) == -1 &&
              this.m_vecClanImageDragListener.push(_);
          }
          RemoveClanImageDragListener(_) {
            let _ = this.m_vecClanImageDragListener.indexOf(_);
            _ != -1 && this.m_vecClanImageDragListener.splice(_, 1);
          }
          GetClanImageDragListener() {
            return this.m_vecClanImageDragListener;
          }
          BHasLoadedClanImages(_) {
            return this.m_mapClanToImages.has(_.GetAccountID());
          }
          async LoadClanImages(_, _, _) {
            const _ = _.GetAccountID();
            if (_ || !this.m_mapClanImageLoadPromises.has(_)) {
              const _ = this.InternalLoadClanImages(_, _, _);
              this.m_mapClanImageLoadPromises.set(_, _);
            }
            return this.m_mapClanImageLoadPromises.get(_);
          }
          async InternalLoadClanImages(_, _, _) {
            let _ = _.GetAccountID();
            if (
              ((0, _._)(_ && _ != 0, "ClanSteamID missing:" + _),
              _ && (!this.m_mapClanToImages.has(_) || _))
            ) {
              let _ = {},
                _;
              const _ =
                _._.COMMUNITY_BASE_URL +
                "/gid/" +
                _.ConvertTo64BitString() +
                "/getimages/";
              if (
                ((_ = await _().get(_, {
                  params: _,
                  withCredentials: !0,
                  cancelToken: _,
                })),
                _)
              ) {
                for (let _ of _.data.images) _.clanAccountID = _;
                (0, _._)(() => {
                  this.m_mapClanImageLoadState.set(_, {
                    loaded: !0,
                  }),
                    this.m_mapClanToImages.set(_, _.data.images),
                    this.GetImageListCallbackForClanAccountIDInternal(
                      _,
                    ).Dispatch(_.data.images);
                });
              }
            }
            return this.m_mapClanToImages.get(_);
          }
          GetLoadState(_) {
            return this.m_mapClanImageLoadState.get(_.GetAccountID());
          }
          GetClanImages(_) {
            return this.GetClanImagesByAccount(_.GetAccountID());
          }
          GetClanImagesByAccount(_) {
            let _ = this.m_mapClanToImages.get(_);
            return _ || new Array();
          }
          GetFilteredClanImages(_, _) {
            let _ = _.GetClanImages(_);
            return this.GetFilteredClanImagesList(_, _);
          }
          GetFilteredClanImagesList(_, _) {
            if (_ && _.trim().length > 0) {
              _ = _.trim().toLowerCase();
              let _ = new Array();
              for (let _ of _)
                _.file_name &&
                  _.file_name.toLowerCase().indexOf(_) >= 0 &&
                  _.push(_);
              return _;
            }
            return _;
          }
          GetClanImageByID(_, _) {
            let _ = _.GetAccountID(),
              _ = this.m_mapClanToImages.get(_);
            return _ ? _.find((_) => _.imageid == _) : void 0;
          }
          GetClanImageByURL(_, _) {
            let _ = _.GetAccountID(),
              _ = this.m_mapClanToImages.get(_);
            return _ ? _.find((_) => _.thumb_url == _ || _.url == _) : void 0;
          }
          GetClanImageByFile(_, _) {
            let _ = _.GetAccountID(),
              _ = this.m_mapClanToImages.get(_);
            return _ ? _.find((_) => _.file_name == _.name) : void 0;
          }
          GetClanImageByImageHash(_, _) {
            let _ = _.GetAccountID(),
              _ = this.m_mapClanToImages.get(_);
            return _ ? _.find((_) => _.image_hash == _) : void 0;
          }
          async DeleteClanImageByID(_, _) {
            let _ = {
                sessionid: (0, _._)(),
                imageid: _,
              },
              _ = _.GetAccountID(),
              _ = await _().get(
                _._.COMMUNITY_BASE_URL +
                  "/gid/" +
                  _.ConvertTo64BitString() +
                  "/deleteimage/",
                {
                  params: _,
                },
              );
            if (!_ || _.status != 200 || _.data.success != _._) return _.data;
            let _ = this.m_mapClanToImages.get(_);
            if (_) {
              let _ = _.findIndex((_, _, _) => _.imageid == _);
              _ >= 0 &&
                (_.splice(_, 1),
                this.GetImageListCallbackForClanAccountIDInternal(_).Dispatch([
                  ..._,
                ]));
            }
            return _.data;
          }
          async DeleteClanImage(_, _) {
            return this.DeleteClanImageByID(_, _.imageid);
          }
        }
        _([_._], _.prototype, "m_mapClanToImages", 2),
          _([_._], _.prototype, "m_mapClanImageLoadState", 2);
        const _ = new _();
        function _(_) {
          const [_, _] = (0, _.useState)(_.GetClanImagesByAccount(_));
          return (0, _._)(_.GetImageListCallbackForClanAccountID(_), _), _;
        }
        function _(_) {
          const _ = _._.InitFromClanID(_),
            _ = (0, _._)("useLoadClanImages"),
            [_, _] = (0, _.useState)(() => _.BHasLoadedClanImages(_));
          return (
            (0, _.useEffect)(() => {
              const _ = _._.InitFromClanID(_);
              return (
                _.BHasLoadedClanImages(_) ||
                  _.LoadClanImages(_, !1, _.token).then(() => _(!0)),
                () => _.cancel()
              );
            }, [_, _]),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            _ && _.set("imw", Math.round(_).toString()),
            _ && _.set("imh", Math.round(_).toString()),
            !_ || !_ || !_
              ? _.set("letterbox", "false")
              : _.set("letterbox", "true"),
            "?" + _.toString()
          );
        }
        const _ = null;
        function _(_, _) {
          let _;
          for (let _ of _)
            if (
              (_ ? (_ += ", ") : (_ = ""),
              (_ += `${_}${_(_, 0)} ${_}w`),
              _ >= _)
            )
              break;
          return _;
        }
        function _(_) {
          let {
            src: _,
            orig_width: _,
            orig_height: _,
            sizes: _,
            default_width: _,
            ..._
          } = _;
          _ || (_ = "95vw"), _ || (_ = 1024);
          let _ = `${_}${_(_, void 0)}`,
            _ = _(_, _);
          return React.createElement("img", {
            src: _,
            srcSet: _,
            sizes: _,
            ..._,
          });
        }
        function _(_) {
          const {
            width: _,
            height: _,
            orig_width: _,
            orig_height: _,
            src: _,
            ..._
          } = _;
          let _ = _ + _(_, _),
            _,
            _ = 6;
          if (
            (_ && _ && (_ = Math.min(_, Math.ceil(_ / _))),
            _ && _ && (_ = Math.min(_, Math.ceil(_ / _))),
            _)
          )
            for (let _ of [2, 4, 6]) {
              if (_ > _) break;
              _ ? (_ += ", ") : (_ = ""),
                (_ += `${_}${_(_ && _ * _, _ && _ * _)} ${_}x`);
            }
          return React.createElement("img", {
            ..._,
            src: _,
            srcSet: _,
          });
        }
        function _(_) {
          if (
            (_.indexOf("?") > 0 && (_ = _.split("?")[0]),
            _.endsWith(".jpg") || _.endsWith(".jpeg"))
          )
            return _._._;
          if (_.endsWith(".png")) return _._._;
          if (_.endsWith(".gif")) return _._._;
          if (_.endsWith(".mp4")) return _._._;
          if (_.endsWith(".webm")) return _._._;
          if (_.endsWith(".vtt")) return _._._;
          if (_.endsWith(".srt")) return _._._;
          if (_.endsWith(".webp")) return _._._;
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
        const _ = class _ {
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
            return this.m_eCurLang != _
              ? ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
              : !1;
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
              _.s_globalSingletonStore || (_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
        };
        _([_._], _.prototype, "m_eCurLang", 2),
          _([_._], _.prototype, "m_rgHasData", 2),
          _([_._], _.prototype, "m_bHasLocalizationContext", 2),
          _([_._], _.prototype, "GetCurEditLanguage", 1),
          _([_._], _.prototype, "SetCurEditLanguage", 1),
          _([_._.bound], _.prototype, "SetHasLanguage", 1),
          _([_._], _.prototype, "BHasLanguageData", 1);
        let _ = _;
        function _() {
          return (0, _._)(() => _.Get().GetCurEditLanguage());
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)(_(_, _, _));
        }
        function _(_) {
          const _ = React.useRef(void 0),
            _ = _(_);
          return _.data
            ? _
            : (_.current ||
                (_.current = new CPersonaStateImpl(
                  typeof _ == "string"
                    ? new CSteamID(_)
                    : CSteamID.InitFromAccountID(_),
                )),
              {
                ..._,
                data: _.current,
              });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)({
            queries: _.map((_) => _(_, _, _)),
          });
        }
        function _(_) {
          return ReactQueryClient.getQueryData(["PlayerSummary", _]);
        }
        function _(_) {
          const { loadPersonaState: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadPersonaState: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadPersonaState: async (_, _) => {
            if (_ == null) return null;
            const _ = await _(_).load(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
            return _(_._.InitFromAccountID(_), _);
          },
        });
        function _() {
          return _.useContext(_);
        }
        function _(_, _, _) {
          const _ = typeof _ == "string" ? new _._(_).GetAccountID() : _;
          return {
            queryKey: ["PlayerSummary", _],
            queryFn: () => _.loadPersonaState(_, _),
            enabled: !!_,
          };
        }
        let _;
        function _(_) {
          return (_ ??= (0, _._)(_));
        }
        function _(_, _) {
          let _ = new _._(_);
          const _ = _?.public_data,
            _ = _?.private_data;
          return (
            (_.m_bInitialized = !!_),
            (_.m_ePersonaState = _?.persona_state ?? _.cU3),
            (_.m_strAvatarHash = _?.sha_digest_avatar
              ? (0, _._)(_.sha_digest_avatar)
              : _._),
            (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
            (_.m_strAccountName = _?.account_name),
            _?.persona_state_flags &&
              (_.m_unPersonaStateFlags = _?.persona_state_flags),
            _?.game_id && (_.m_gameid = _?.game_id),
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address),
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
            _?.profile_url && (_.m_strProfileURL = _.profile_url),
            _
          );
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
        const _ = 1576780700;
        let _ = class extends _.Component {
          OnEmoticonClick(_) {
            const {
                emoticonStore: _,
                strFlairGroupID: _,
                SetUIDisplayPref: _,
                contextOptions: _,
                bShowChatAddons: _,
              } = this.props,
              {
                roomEffectSettings: _,
                onRoomEffectSelected: _,
                onStickerSelected: _,
              } = this.props;
            let _ = null;
            if (
              (_ && _ && _ && _
                ? (_ = (0, _.jsx)(_._, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (_) =>
                      this.props.OnEmoticonSelected(_, !1),
                    roomEffectSettings: _,
                    onRoomEffectSelected: _,
                    onStickerSelected: _,
                  }))
                : _ && _.flair_list && _.GetFlairListByGroupID(_)?.length > 0
                  ? (_ = (0, _.jsx)(_._, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (_ = (0, _.jsx)(_._, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, _._)(
                _,
                _,
                _ || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && _)
            ) {
              let _ = this.GetNewestIndicatorTime();
              (!_ || _ < _) && (_ = _), _("rtLastAckedNewEmoticons", _);
            }
          }
          GetNewestIndicatorTime() {
            let _ = this.props.emoticonStore,
              _ = Number.MIN_SAFE_INTEGER,
              _ = _.GetTimeReceivedNewestEmoticon();
            _ && (_ = _);
            let _ = _.GetTimeReceivedForStickerOrEffect();
            return (
              (_ = Math.max(_, _)), _ > Number.MIN_SAFE_INTEGER ? _ : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: _ } = this.props;
            let _ = this.GetNewestIndicatorTime();
            return !_ || _ < _ ? !0 : _ && (!_ || _ < _);
          }
          render() {
            const {
              disabled: _,
              className: _,
              ttip: _,
              useImg: _,
            } = this.props;
            let _ = [_],
              _ = !1;
            return (
              _ ? _.push("disabled") : this.BHaveUnseenEmoticons() && (_ = !0),
              _ && _.push("ttip"),
              _
                ? (0, _.jsx)(_._, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, _._)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, _.jsx)(_._, {
                      toolTipContent: _,
                      children: (0, _.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, _._)(..._),
                        title:
                          this.props.title ||
                          (0, _._)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (_.push(_().chatSubmitButton, _().EmoticonPickerButton),
                  (0, _.jsx)(_._, {
                    className: (0, _._)(..._),
                    onOKActionDescription: (0, _._)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title || (0, _._)("#ChatEntryButton_Emoticon"),
                    disabled: _,
                    children: (0, _.jsxs)(_._, {
                      toolTipContent: _,
                      children: [
                        this.props.buttonIcon || (0, _.jsx)(_._, {}),
                        _ && (0, _.jsx)(_._, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        _([_._], _.prototype, "OnEmoticonClick", 1), (_ = _([_._], _));
        const _ = _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !1) {
          return `${_}economy/sticker${_ ? "static" : ""}/${encodeURIComponent(_)}`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                activeIndex: _.initialActiveIndex || 0,
              });
          }
          render() {
            const { config: _ } = this.props,
              { activeIndex: _ } = this.state,
              _ = _[_],
              _ = _ ? _.renderContent() : null,
              _ = _.length > 1,
              _ = _
                ? ({ detail: { button: _ } }) => {
                    _ === _._.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : _ === _._.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            _.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, _.jsxs)(_._, {
              className: _.Picker,
              onButtonDown: _,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    children: this.RenderTabs(),
                  }),
                _,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: _ }, _) => {
              const _ = this.state.activeIndex === _;
              return (0, _.jsx)(
                _,
                {
                  active: _,
                  onClick: () =>
                    this.setState({
                      activeIndex: _,
                    }),
                  children: _(_),
                },
                _,
              );
            });
          }
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            className: _.Tabs,
            "flow-children": "row",
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Content,
            children: _.children,
          });
        }
        function _(_) {
          const { active: _, children: _, onClick: _ } = _;
          return (0, _.jsx)(_._, {
            className: (0, _._)(_.Tab, _ && _.Active),
            focusClassName: _.Focus,
            onActivate: _,
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.TabContent, _ && _.Active),
              children: _,
            }),
          });
        }
        function _(_) {
          const {
            items: _,
            renderItem: _,
            onItemSelect: _,
            keyExtractor: _,
            renderEmpty: _,
          } = _;
          let _ = _.map((_, _) =>
            (0, _.jsx)(
              _._,
              {
                className: _.Item,
                onActivate: () => _(_[_]),
                autoFocus: _ === 0,
                focusClassName: _.Focus,
                children: _(_[_]),
              },
              _(_),
            ),
          );
          return (
            _.length === 0 && _ && (_ = _()),
            (0, _.jsx)(_._, {
              "flow-children": "grid",
              className: _.ItemList,
              children: _,
            })
          );
        }
        function _(_) {
          const {
            title: _,
            onFilterChange: _,
            filter: _,
            onSubmit: _,
            ..._
          } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  title: _,
                  children: (0, _.jsx)(_, {
                    ..._,
                  }),
                }),
              }),
              (0, _.jsx)(_, {
                value: _,
                onChange: _,
                onSubmit: _,
              }),
            ],
          });
        }
        function _(_) {
          const { onFilterChange: _, filter: _, sections: _, title: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_, {
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.SectionedPageTitle,
                      children: _,
                    }),
                  _.map(({ title: _, ..._ }) =>
                    (0, _.jsx)(
                      _,
                      {
                        title: _,
                        children: (0, _.jsx)(_, {
                          ..._,
                        }),
                      },
                      _,
                    ),
                  ),
                ],
              }),
              (0, _.jsx)(_, {
                value: _,
                onChange: _,
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _.Section,
            children: [
              (0, _.jsx)("div", {
                className: _.SectionTitle,
                children: _.title,
              }),
              (0, _.jsx)("div", {
                className: _.SectionContent,
                children: _.children,
              }),
            ],
          });
        }
        function _(_) {
          const { value: _, onChange: _, onSubmit: _ } = _;
          return (0, _.jsx)("div", {
            className: _.FilterInputContainer,
            children: (0, _.jsx)(_._, {
              type: "text",
              placeholder: (0, _._)("#AddonPicker_Search"),
              className: _.FilterInput,
              value: _,
              onChange: (_) => _(_.target.value),
              onSubmit: _,
            }),
          });
        }
        function _(_) {
          const { className: _, ..._ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_, _.AddonPickerMessage),
            ..._,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        const _ = 1e3;
        function _(_) {
          return _.recent_emoticons;
        }
        function _(_) {
          return _.recent_stickers;
        }
        function _(_) {
          return _(_).length + _(_).length > 0;
        }
        function _(_) {
          const [_, _] = (0, _.useState)(_.is_initialized);
          return (
            (0, _.useEffect)(() => {
              if (!_.is_initialized) {
                _.UpdateEmoticonList();
                const _ = (0, _._)(
                  () => _.is_initialized,
                  () => _(_.is_initialized),
                );
                return () => _();
              }
              return () => {};
            }, [_]),
            _
          );
        }
        const _ = (0, _._)((_) => {
          const {
            emoticonStore: _,
            roomEffectSettings: _,
            strFlairGroupID: _,
            onEmoticonSelected: _,
            onRoomEffectSelected: _,
            onStickerSelected: _,
          } = _;
          _(_);
          const _ = [];
          return (
            _(_) &&
              _.push({
                renderTab: (_) =>
                  (0, _.jsx)("span", {
                    title: (0, _._)("#AddonPicker_RecentlyUsed"),
                    className: (0, _._)(
                      _().PickerTab,
                      _().Clock,
                      _ && _().ActiveTab,
                    ),
                    children: (0, _.jsx)(_, {}),
                  }),
                renderContent: () =>
                  (0, _.jsx)(_, {
                    store: _,
                    onEmoticonSelect: (_) => _(_.name),
                    onStickerSelect: (_) => _(_.name),
                    flairGroupID: _,
                  }),
              }),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                config: [
                  ..._,
                  {
                    renderTab: (_) =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: _,
                        onItemSelect: (_) => _(_.name),
                        flairGroupID: _,
                      }),
                  },
                  {
                    renderTab: (_) =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Stickers"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: _,
                        onItemSelect: (_) => _(_.name),
                      }),
                  },
                  {
                    renderTab: (_) =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_RoomEffects"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: _,
                        effectSettings: _,
                        onItemSelect: (_) => _(_.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let _ = class extends _.Component {
          m_disposeEmoticonStore;
          constructor(_) {
            super(_),
              (this.state = {
                strSearchText: "",
              });
            let _ = this.props.emoticonStore;
            _.is_initialized ||
              (_.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, _._)(
                () => _.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: _,
                onEmoticonSelected: _,
                onStickerSelected: _,
                strFlairGroupID: _,
              } = this.props,
              _ = [];
            return (
              _(_) &&
                _.push({
                  renderTab: (_) =>
                    (0, _.jsx)("span", {
                      title: (0, _._)("#AddonPicker_RecentlyUsed"),
                      className: (0, _._)(
                        _().PickerTab,
                        _().Clock,
                        _ && _().ActiveTab,
                      ),
                      children: (0, _.jsx)(_, {}),
                    }),
                  renderContent: () =>
                    (0, _.jsx)(_, {
                      store: _,
                      onEmoticonSelect: (_) => _(_.name),
                      onStickerSelect: (_) => _(_.name),
                      flairGroupID: _,
                    }),
                }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  config: [
                    ..._,
                    {
                      renderTab: (_) =>
                        (0, _.jsx)("span", {
                          title: (0, _._)("#AddonPicker_Emoticons"),
                          className: (0, _._)(
                            _().PickerTab,
                            _ && _().ActiveTab,
                          ),
                          children: (0, _.jsx)(_, {}),
                        }),
                      renderContent: () =>
                        (0, _.jsx)(_, {
                          store: _,
                          onItemSelect: (_) => _(_.name),
                          flairGroupID: _,
                        }),
                    },
                    {
                      renderTab: (_) =>
                        (0, _.jsx)("span", {
                          title: (0, _._)("#AddonPicker_Stickers"),
                          className: (0, _._)(
                            _().PickerTab,
                            _ && _().ActiveTab,
                          ),
                          children: (0, _.jsx)(_, {}),
                        }),
                      renderContent: () =>
                        (0, _.jsx)(_, {
                          store: _,
                          onItemSelect: (_) => _(_.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        _ = _([_._], _);
        class _ extends _.Component {
          m_disposeEmoticonStore;
          constructor(_) {
            super(_),
              (this.state = {
                strSearchText: "",
              });
            let _ = this.props.emoticonStore;
            _.is_initialized ||
              (_.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, _._)(
                () => _.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                config: [
                  {
                    renderTab: () =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: _().PickerTab,
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: this.props.emoticonStore,
                        onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class _ extends _.Component {
          m_disposeEmoticonStore;
          constructor(_) {
            super(_),
              (this.state = {
                strSearchText: "",
              });
            let _ = this.props.emoticonStore;
            _.is_initialized ||
              (_.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, _._)(
                () => _.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                config: [
                  {
                    renderTab: () =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: _().PickerTab,
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: this.props.emoticonStore,
                        onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class _ extends _.Component {
          state = {
            filter: "",
          };
          render() {
            const {
                store: _,
                onEmoticonSelect: _,
                onStickerSelect: _,
              } = this.props,
              { filter: _ } = this.state,
              _ = [];
            return (
              _(_) &&
                _.push({
                  title: (0, _._)("#AddonPicker_RecentEmoticons"),
                  items: _._.FilterEmoticons(_(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    (0, _.jsx)(_, {
                      children: _
                        ? (0, _._)("#AddonPicker_NoResults")
                        : (0, _._)(
                            "#AddonPicker_NoRecent",
                            (0, _._)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              _(_).length &&
                _.push({
                  title: (0, _._)("#AddonPicker_RecentStickers"),
                  items: _._.FilterStickers(_(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      sticker: _,
                    }),
                  keyExtractor: ({ name: _ }) => _,
                  renderEmpty: () =>
                    (0, _.jsx)(_, {
                      children: _
                        ? (0, _._)("#AddonPicker_NoResults")
                        : (0, _._)(
                            "#AddonPicker_NoRecent",
                            (0, _._)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, _.jsx)(_, {
                onFilterChange: (_) =>
                  this.setState({
                    filter: _,
                  }),
                filter: _,
                sections: _,
              })
            );
          }
        }
        class _ extends _.Component {
          state = {
            filter: "",
          };
          render() {
            const { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
              { filter: _ } = this.state,
              _ = !_ && _ ? _.GetFlairListByGroupID(_) : _.emoticon_list,
              _ = _._.FilterEmoticons(_, _).slice(0, _);
            return (0, _.jsx)(_, {
              title: (0, _._)("#AddonPicker_Emoticons"),
              items: _,
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  emoticon: _,
                }),
              keyExtractor: (_) => _.name,
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              onSubmit: () => _(_[0]),
              renderEmpty: () =>
                _
                  ? (0, _.jsx)(_, {
                      children: (0, _._)("#AddonPicker_NoResults"),
                    })
                  : (0, _.jsx)(_, {}),
            });
          }
        }
        function _() {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _._)(
                  "#AddonPicker_NoneOwned",
                  (0, _._)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, _.jsx)(_, {
                children: (0, _._)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, _.jsx)(_._, {
                    href: `${_._.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, _._)("#AddonPicker_AcquireAtPointsShop_Link"),
                  }),
                  (0, _.jsx)(_._, {
                    href: `${_._.COMMUNITY_BASE_URL}market`,
                    children: (0, _._)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class _ extends _.Component {
          state = {
            filter: "",
          };
          render() {
            const { store: _, onItemSelect: _ } = this.props,
              { filter: _ } = this.state,
              _ = _._.FilterStickers(_.GetStickerList(), _),
              _ = () =>
                _
                  ? (0, _.jsx)(_, {
                      children: (0, _._)("#AddonPicker_NoResults"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_NoneOwned",
                            (0, _._)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, _.jsx)(_._, {
                              href: `${_._.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, _._)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, _.jsx)(_, {
              title: (0, _._)("#EmoticonPicker_StickerHeading"),
              items: _,
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  sticker: _,
                }),
              keyExtractor: ({ name: _ }) => _,
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              onSubmit: () => _(_[0]),
              renderEmpty: _,
            });
          }
        }
        class _ extends _.Component {
          state = {
            filter: "",
          };
          render() {
            const { store: _, effectSettings: _, onItemSelect: _ } = this.props,
              { filter: _ } = this.state,
              _ = _.GetEffectList().filter(({ name: _ }) => _.indexOf(_) > -1),
              _ = () =>
                _
                  ? (0, _.jsx)(_, {
                      children: (0, _._)("#AddonPicker_NoResults"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_NoneOwned",
                            (0, _._)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, _.jsx)(_._, {
                              href: `${_._.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, _._)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, _.jsx)(_, {
              title: (0, _._)("#EmoticonPicker_EffectHeading"),
              items: _,
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  effect: _,
                  roomEffectSettings: _,
                }),
              keyExtractor: ({ name: _ }) => _,
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              onSubmit: () => _(_[0]),
              renderEmpty: _,
            });
          }
        }
        let _ = class extends _.Component {
          state = {
            filter: "",
          };
          render() {
            const { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
              { filter: _ } = this.state,
              _ = [];
            return (
              _(_).length &&
                _.push({
                  title: (0, _._)("#AddonPicker_RecentEmoticons"),
                  items: _._.FilterEmoticons(_(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    (0, _.jsx)(_, {
                      children: _
                        ? (0, _._)("#AddonPicker_NoResults")
                        : (0, _._)(
                            "#AddonPicker_NoRecent",
                            (0, _._)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, _.jsx)(_, {
                onFilterChange: (_) =>
                  this.setState({
                    filter: _,
                  }),
                filter: _,
                sections: [
                  ..._,
                  {
                    title: (0, _._)("#AddonPicker_AllEmoticons"),
                    items: _._.FilterStickers(_.emoticon_list, _).slice(0, _),
                    onItemSelect: _,
                    renderItem: (_) =>
                      (0, _.jsx)(_, {
                        emoticon: _,
                      }),
                    keyExtractor: (_) => _.name,
                    renderEmpty: () =>
                      _
                        ? (0, _.jsx)(_, {
                            children: (0, _._)("#AddonPicker_NoResults"),
                          })
                        : (0, _.jsx)(_, {}),
                  },
                ],
              })
            );
          }
        };
        _ = _([_._], _);
        let _ = class extends _.Component {
          state = {
            filter: "",
          };
          render() {
            const { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
              { filter: _ } = this.state;
            return (0, _.jsx)(_, {
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              sections: [
                {
                  title: (0, _._)("#ChatEntryButton_Flair"),
                  items: _._.FilterStickers(_.GetFlairListByGroupID(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    _
                      ? (0, _.jsx)(_, {
                          children: (0, _._)("#AddonPicker_NoResults"),
                        })
                      : (0, _.jsx)(_, {}),
                },
              ],
            });
          }
        };
        _ = _([_._], _);
        const _ = (_) => {
          const { emoticon: _, large: _ } = _,
            _ = !_.last_used && _.time_received;
          return (0, _.jsxs)("div", {
            className: _().EmoticonItem,
            children: [
              (0, _.jsx)(_._, {
                emoticon: _.name,
                large: _,
              }),
              _ && (0, _.jsx)(_, {}),
            ],
          });
        };
        class _ extends _.Component {
          state = {
            showHover: !1,
          };
          m_ref = _.createRef();
          render() {
            const { sticker: _, className: _, ..._ } = this.props,
              _ = _(_._.COMMUNITY_CDN_URL, _.name);
            return (0, _.jsxs)("div", {
              ref: this.m_ref,
              className: (0, _._)(_, _().StickerButton),
              onMouseOver: () =>
                this.setState({
                  showHover: !0,
                }),
              onFocus: () =>
                this.setState({
                  showHover: !0,
                }),
              onMouseLeave: () =>
                this.setState({
                  showHover: !1,
                }),
              onBlur: () =>
                this.setState({
                  showHover: !1,
                }),
              ..._,
              children: [
                (0, _.jsx)("img", {
                  style: {
                    width: "100%",
                  },
                  src: _,
                }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, _.jsx)(_, {
                    target: this.m_ref.current,
                    sticker: _,
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)((_) => {
          const {
              target: _,
              sticker: { name: _, appid: _ },
            } = _,
            [_] = (0, _._)(_, {});
          return (0, _.jsx)(_._, {
            target: _,
            title: _,
            subtitle: _?.GetName(),
            children: (0, _.jsx)("img", {
              src: _(_._.COMMUNITY_CDN_URL, _),
              className: _().StickerHoverSticker,
            }),
          });
        });
        class _ extends _.Component {
          state = {
            showHover: !1,
          };
          m_ref = _.createRef();
          render() {
            const {
                effect: _,
                roomEffectSettings: _,
                className: _,
                ..._
              } = this.props,
              _ = _[_.name];
            return (0, _.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () =>
                this.setState({
                  showHover: !0,
                }),
              onFocus: () =>
                this.setState({
                  showHover: !0,
                }),
              onMouseLeave: () =>
                this.setState({
                  showHover: !1,
                }),
              onBlur: () =>
                this.setState({
                  showHover: !1,
                }),
              className: (0, _._)(_, _().EffectButton),
              ..._,
              children: [
                _.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, _.jsx)(_, {
                    target: this.m_ref.current,
                    effect: _,
                    roomEffectSettings: _,
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)((_) => {
          const {
              target: _,
              effect: { name: _, appid: _ },
              roomEffectSettings: _,
            } = _,
            _ = _[_],
            [_] = (0, _._)(_, {});
          return (0, _.jsx)(_._, {
            target: _,
            title: _,
            subtitle: _?.GetName(),
            children: (0, _.jsx)("div", {
              className: _().EffectHoverEffect,
              children: _.renderEffectIcon(),
            }),
          });
        });
        function _() {
          return (0, _.jsx)("div", {
            className: _().NewEmoticonIndicator,
            children: (0, _.jsx)("div", {
              className: _().NewEmoticonCircle,
            }),
          });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ..._,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    _: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ..._,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      _: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ..._,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ..._,
                children: jsx("path", {
                  _: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function _(_) {
          return (0, _.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
            children: (0, _.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ..._,
                children: [
                  jsx("path", {
                    _: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ..._,
                children: jsx("path", {
                  _: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function _(_) {
          const { className: _, ..._ } = _;
          return (0, _.jsx)("svg", {
            className: (0, _._)("SVGIcon_Button SVGIcon_Clock", _),
            version: "1.1",
            _: "0px",
            _: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ..._,
            children: (0, _.jsx)("path", {
              _: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (_) => {
            const { clanSteamID: _, fnImageSelectCallBack: _ } = _,
              [_, _] = (0, _.useState)(""),
              _ = (0, _._)(_.clanSteamID.GetAccountID()),
              _ = () => _.closeModal && _.closeModal(),
              _ = _._.GetFilteredClanImages(_, _),
              _ = (_) => {
                _(_), _();
              };
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#ClanImageChooser_Title"),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsxs)(_._, {
                        children: [
                          (0, _.jsx)("p", {
                            children: (0, _._)("#ClanImageChooser_Desc"),
                          }),
                          (0, _.jsx)(_._, {
                            placeholder: (0, _._)("#ClanImageChooser_Search"),
                            value: _,
                            onChange: (_) => _(_.currentTarget.value),
                          }),
                          (0, _.jsx)("div", {
                            className: _.ImagesOuterContainer,
                            children: _
                              ? (0, _.jsx)(_._, {
                                  size: "medium",
                                  string: (0, _._)("#Loading"),
                                })
                              : _.length > 0
                                ? _.map((_) =>
                                    (0, _.jsx)(
                                      _,
                                      {
                                        clanImage: _,
                                        searchStringHilight: _,
                                        fnImageClick: _,
                                      },
                                      "ci" + _.image_hash,
                                    ),
                                  )
                                : _.trim().length == 0
                                  ? (0, _.jsx)("div", {
                                      children: (0, _._)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, _.jsx)("div", {
                                      children: (0, _._)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          _ = (_) => {
            const { clanImage: _, searchStringHilight: _, fnImageClick: _ } = _;
            let _ = _.file_name ? _.file_name : "",
              _ = _(_, _, String(_.imageid), _.Hilight);
            return (0, _.jsxs)("div", {
              className: _.ImageContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _.Image,
                  style: {
                    backgroundImage: `url( '${_.thumb_url}' )`,
                  },
                  onDoubleClick: () => _(_),
                }),
                (0, _.jsx)("div", {
                  className: _.ImageFilename,
                  title: _,
                  children: _,
                }),
              ],
            });
          };
        function _(_, _, _, _) {
          let _ = [];
          if (_.length > 0) {
            let _ = _.toLocaleLowerCase();
            for (let _ = 0; _ < _.length; ) {
              let _ = _.indexOf(_, _);
              if (_ < 0) {
                _.push(
                  (0, _.jsx)(
                    "span",
                    {
                      children: _.substring(_),
                    },
                    _ + "_" + String(_),
                  ),
                );
                break;
              } else
                _ < _ &&
                  _.push(
                    (0, _.jsx)(
                      "span",
                      {
                        children: _.substring(_, _),
                      },
                      _ + "_" + String(_),
                    ),
                  ),
                  _.push(
                    (0, _.jsx)(
                      "span",
                      {
                        className: _,
                        children: _.substr(_, _.length),
                      },
                      _ + "_" + String(_),
                    ),
                  ),
                  (_ = _ + _.length);
            }
          } else
            _.push(
              (0, _.jsx)(
                "span",
                {
                  children: _,
                },
                _ + "_null",
              ),
            );
          return _;
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
        let _ = class extends _.Component {
          GenerateLanguageOptions() {
            let _ = [];
            const {
              fnFilterLanguage: _,
              fnLangHasData: _,
              fnLastUpdateRTime: _,
              fnIsLangSupported: _,
            } = this.props;
            this.props.bAllowUnsetOption &&
              _.push(
                (0, _.jsx)(
                  "option",
                  {
                    value: _.xPp,
                    children: (0, _._)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let _ = new Array();
            const _ = this.props.realms || [_._.k_ESteamRealmGlobal];
            for (const _ of _._.GetLanguageListForRealms(_)) {
              if (_ && !_(_)) continue;
              const _ = (0, _.LgB)(_),
                _ = (0, _._)("#Language_" + _),
                _ = !!(_ && _(_));
              _.push({
                eLang: _,
                sLocName: _,
                bSupported: _,
              });
            }
            _.sort((_, _) =>
              _.bSupported != _.bSupported
                ? _.bSupported
                  ? -1
                  : 1
                : _.sLocName.localeCompare(_.sLocName),
            );
            let _ = !1;
            for (const _ of _) {
              _.bSupported != _ &&
                (_.push(
                  (0, _.jsx)(
                    "option",
                    {
                      className: _().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, _._)(
                        _.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    _.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (_ = _.bSupported));
              const _ = _ && _(_.eLang),
                _ = _ && _(_.eLang);
              let _ = _.sLocName;
              _ &&
                _ !== 0 &&
                ((_ += " "),
                (_ += (0, _._)(
                  "#Language_Last_Update",
                  (0, _._)(_) +
                    " @ " +
                    (0, _._)(_, {
                      bForce24HourClock: !1,
                    }),
                ))),
                _.push(
                  (0, _.jsx)(
                    "option",
                    {
                      value: _.eLang,
                      className: (0, _._)(
                        {
                          [_().LanguageWithContent]: _,
                        },
                        _.bSupported
                          ? _().SupportedLanguage
                          : _().UnsupportedLanguage,
                      ),
                      children: _,
                    },
                    "langpicker" + _.eLang + (_ ? "_hasdata" : ""),
                  ),
                );
            }
            return _;
          }
          OnLanguageChange(_) {
            const { fnOnLanguageChanged: _, selectedLang: _ } = this.props;
            let _ = Number.parseInt(_.currentTarget.value);
            _ != _ && _ && _(_);
          }
          render() {
            const { selectedLang: _, bDisabled: _, strTooltip: _ } = this.props;
            let _ = this.GenerateLanguageOptions();
            return (0, _.jsx)(_._, {
              toolTipContent: _,
              children: (0, _.jsx)("select", {
                value: _,
                onChange: this.OnLanguageChange,
                disabled: _,
                children: _,
              }),
            });
          }
        };
        _([_._], _.prototype, "OnLanguageChange", 1), (_ = _([_._], _));
        function _(_) {
          const [_, _] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(_, {
            selectedLang: _,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !_,
            strTooltip: _ ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function _(_) {
          const { fnLangHasData: _ } = _;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const _ = useObserver(() => {
            const _ = [];
            for (let _ = k_ELanguage_English; _ < k_ELanguage_MAX; ++_)
              _[_] = !!(_ && _(_));
            return _;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(_), [_]),
            jsx(Fragment, {})
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        class _ extends _.Component {
          m_strLastSearch;
          m_rgCurrentMatches = [];
          m_mapMatchByKey = new Map();
          containerRef = _.createRef();
          constructor(_) {
            super(_),
              (this.m_hMobxSearchDisposer = (0, _._)(async () => {
                await this.UpdateSearchResults(this.props.strSearch),
                  this.forceUpdate();
              })),
              (this.state = {
                selectedIndex: void 0,
              });
          }
          OnKeyDown(_) {
            if (this.BHandleKeyPress(_.keyCode)) {
              _.preventDefault();
              return;
            }
          }
          BHandleKeyPress(_) {
            switch (_) {
              case _._:
                this.SetSelectedIndexDelta(-1);
                break;
              case _._:
                this.SetSelectedIndexDelta(1);
                break;
              case _._:
                this.SetSelectedIndex(0);
                break;
              case _._:
                this.SetSelectedIndexDelta(-this.GetPageSize());
                break;
              case _._:
                this.SetSelectedIndex(-1);
                break;
              case _._:
                this.SetSelectedIndexDelta(this.GetPageSize());
                break;
              case _._:
              case _._:
                if (this.state.selectedIndex !== void 0)
                  this.ChooseSuggestion(
                    this.m_rgCurrentMatches[this.state.selectedIndex],
                  );
                else
                  return (
                    this.props.onSuggestionSelected(this.props.strSearch), !1
                  );
                break;
              case _._:
                this.props.onSuggestionSelected(this.props.strSearch);
                break;
              default:
                return !1;
            }
            return !0;
          }
          GetPageSize() {
            let _ = this.containerRef.current,
              _ = _ && _.firstElementChild,
              _ = this.m_rgCurrentMatches.length;
            if (
              (_ > this.getMaxMatches() && (_ = this.getMaxMatches()), _ && _)
            ) {
              let _ = _.scrollHeight / _,
                _ = _.clientHeight / _;
              return Math.max(1, Math.floor(_));
            }
            return 5;
          }
          ChooseSuggestion(_) {
            this.props.onSuggestionSelected(
              this.props.strSearch,
              _ ? this.getSelection(_) : void 0,
            );
          }
          SetSelectedIndexDelta(_) {
            this.state.selectedIndex !== void 0
              ? this.SetSelectedIndex(this.state.selectedIndex + _)
              : this.SetSelectedIndex(_ === 1 ? 0 : _);
          }
          SetSelectedIndex(_) {
            if (!this.m_rgCurrentMatches.length) return;
            let _ = this.m_rgCurrentMatches.length;
            _ > this.getMaxMatches() && (_ = this.getMaxMatches()),
              (_ = _ % _),
              _ < 0 && (_ += _),
              this.setState({
                selectedIndex: _,
              });
          }
          FindKeyIndex(_) {
            if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
              for (let _ = 0; _ < this.m_rgCurrentMatches.length; _++)
                this.m_mapMatchByKey.set(
                  this.getKey(this.m_rgCurrentMatches[_]),
                  _,
                );
            return this.m_mapMatchByKey.get(_);
          }
          OnClickSuggestion(_) {
            let _ = this.FindKeyIndex(_);
            _ !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[_]);
          }
          OnMouseOverSuggestion(_) {
            let _ = this.FindKeyIndex(_);
            _ !== void 0 && this.SetSelectedIndex(_);
          }
          BindSelectedElement(_) {
            if (!_) return;
            let _ = this.containerRef.current,
              _ = _.containerRef.current,
              _ = _ && _.firstElementChild;
            !_ ||
              !_ ||
              ((_.scrollTop + _.clientHeight < _.offsetTop ||
                _.offsetTop < _.scrollTop) &&
                _.scrollIntoView());
          }
          async UpdateSearchResults(_) {
            (this.m_rgCurrentMatches = await this.performSearch(_)),
              (this.m_strLastSearch = _),
              this.m_mapMatchByKey.clear(),
              this.m_rgCurrentMatches.length
                ? !this.state || this.state.selectedIndex === void 0
                  ? (this.props.nMinimumSearchLengthBeforeAutoSelection ===
                      void 0 ||
                      _.length >=
                        this.props.nMinimumSearchLengthBeforeAutoSelection) &&
                    this.setState({
                      selectedIndex: 0,
                    })
                  : this.state.selectedIndex >=
                      this.m_rgCurrentMatches.length &&
                    this.setState({
                      selectedIndex: 0,
                    })
                : this.state &&
                  this.state.selectedIndex !== void 0 &&
                  this.setState({
                    selectedIndex: void 0,
                  });
          }
          m_hMobxSearchDisposer;
          componentWillUnmount() {
            this.m_hMobxSearchDisposer &&
              (this.m_hMobxSearchDisposer(),
              (this.m_hMobxSearchDisposer = void 0));
          }
          async componentDidUpdate(_) {
            this.m_strLastSearch != this.props.strSearch &&
              (await this.UpdateSearchResults(this.props.strSearch),
              this.forceUpdate());
          }
          render() {
            let _ = [];
            if (this.m_rgCurrentMatches.length) {
              let _ = this.getMaxMatches();
              for (
                let _ = 0;
                _ < Math.min(_, this.m_rgCurrentMatches.length);
                _++
              ) {
                let _ = this.m_rgCurrentMatches[_],
                  _ = this.getKey(_),
                  _ = _ === this.state.selectedIndex;
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      matchKey: _,
                      fnOnClick: this.OnClickSuggestion,
                      fnOnMouseOver: this.OnMouseOverSuggestion,
                      bIsSelected: _,
                      ref: _ ? this.BindSelectedElement : void 0,
                      children: this.renderMatch(_),
                    },
                    _,
                  ),
                );
              }
              this.m_rgCurrentMatches.length > _ &&
                _.push(
                  this.renderTooManyMatchesMessage(
                    this.m_rgCurrentMatches.length - _,
                  ),
                );
            } else {
              let _ = this.renderNoMatchMessage();
              if (!_) return null;
              _.push(_);
            }
            return (0, _.jsx)("div", {
              className: _().mentionDialogPosition,
              ref: this.containerRef,
              children: (0, _.jsxs)("div", {
                className: _().mentionDialog,
                tabIndex: 0,
                onKeyDown: this.OnKeyDown,
                children: [this.renderHeader(), _],
              }),
            });
          }
        }
        _([_._], _.prototype, "OnKeyDown", 1),
          _([_._], _.prototype, "OnClickSuggestion", 1),
          _([_._], _.prototype, "OnMouseOverSuggestion", 1),
          _([_._], _.prototype, "BindSelectedElement", 1);
        class _ extends _.PureComponent {
          containerRef = _.createRef();
          OnMouseOver(_) {
            this.props.fnOnMouseOver(this.props.matchKey);
          }
          OnClick(_) {
            this.props.fnOnClick(this.props.matchKey);
          }
          render() {
            return (0, _.jsx)("div", {
              className: (0, _._)(
                _().suggestOption,
                _().mentionSearchOption,
                this.props.bIsSelected ? _().selected : "",
              ),
              onMouseEnter: this.OnMouseOver,
              onClick: this.OnClick,
              ref: this.containerRef,
              children: this.props.children,
            });
          }
        }
        _([_._], _.prototype, "OnMouseOver", 1),
          _([_._], _.prototype, "OnClick", 1);
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        class _ extends _ {
          performSearch(_) {
            return this.props.emoticonStore.SearchEmoticons(_, 10, !1);
          }
          getSelection(_) {
            return _.name;
          }
          getKey(_) {
            return _.name;
          }
          renderMatch(_) {
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().EmoticonSuggestion,
                _.recent ? "Recent" : "",
              ),
              children: [
                (0, _.jsxs)("div", {
                  className: _().Emoticon,
                  children: [
                    (0, _.jsx)(_._, {
                      emoticon: _.name,
                    }),
                    _.new && (0, _.jsx)(_._, {}),
                  ],
                }),
                ":",
                _.name,
                ":",
              ],
            });
          }
          renderNoMatchMessage() {
            return null;
          }
          renderTooManyMatchesMessage(_) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ extends _ {
          performSearch(_) {
            let _ = Array();
            return (
              this.props.supportBBCodes.forEach((_) => {
                _.indexOf(_) >= 0 &&
                  _.push({
                    name: _,
                  });
              }),
              _
            );
          }
          getSelection(_) {
            return "[" + _.name + "][/" + _.name + "]";
          }
          getKey(_) {
            return _.name;
          }
          renderMatch(_) {
            return (0, _.jsxs)(
              "div",
              {
                className: (0, _._)(_().BBCodeSuggestion),
                children: [
                  (0, _.jsx)("div", {
                    className: _().BBCode,
                    children: _.name,
                  }),
                  "[",
                  _.name,
                  "]...[/",
                  _.name,
                  "]",
                ],
              },
              _.name,
            );
          }
          renderNoMatchMessage() {
            return (0, _.jsx)(
              "div",
              {
                className: (0, _._)(_().mentionSearchOption, _().noMatches),
                children: (0, _._)("#Bbcode_No_Match"),
              },
              "nomatches",
            );
          }
          renderTooManyMatchesMessage(_) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        var _ = Object.defineProperty,
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
        class _ extends _.Component {
          descTextAreaRef = _.createRef();
          m_MentionDialog;
          m_bDisabled = !0;
          m_iMentionSearchStartOffset;
          m_iMentionSearchCancelledOffset;
          constructor(_) {
            super(_),
              (this.state = {
                mentionSearch: void 0,
                activeSuggestSearchType: void 0,
              });
          }
          BindMentionDialog(_) {
            this.m_MentionDialog = _ ?? void 0;
          }
          OnKeyDown(_) {
            if (
              this.state.activeSuggestSearchType &&
              this.m_MentionDialog &&
              !_.shiftKey &&
              !_.ctrlKey &&
              this.m_MentionDialog.BHandleKeyPress(_.keyCode)
            ) {
              _.preventDefault();
              return;
            }
            (_.keyCode == _._ || _.keyCode == _._) &&
              (this.m_iMentionSearchCancelledOffset = void 0);
          }
          FindMatchOpener(_, _, _) {
            for (let _ = _ - 1; _ >= 0; _--) {
              if (_[_] == _) return _;
              if (
                _[_] == " " ||
                _[_] ==
                  `
`
              )
                break;
            }
          }
          ReplaceSuggestedText(_, _) {
            const _ = this.descTextAreaRef.current;
            if (!_) return;
            let _ = _.selectionStart,
              _ = _.value,
              _ = this.FindMatchOpener(_, _, _);
            if (
              (_ === void 0 &&
                _ == "@" &&
                (_ = this.FindMatchOpener("\uFF20", _, _)),
              _ !== void 0)
            ) {
              let _ = _.substr(0, _);
              (_ += _), (_ >= _.length || _[_] != " ") && (_ += " ");
              let _ = _.length;
              (_ += _.substr(_)),
                (_.value = _),
                (_.selectionStart = _.selectionEnd = _),
                this.props.fnSetText(_),
                this.FocusTextInput();
            }
          }
          OnFocus(_) {
            this.UpdateAutoSearchState();
          }
          OnKeyPress(_) {
            this.UpdateAutoSearchState();
          }
          OnClick(_) {
            this.UpdateAutoSearchState();
          }
          ClearMentionSearchState() {
            (this.m_iMentionSearchStartOffset = void 0),
              this.state.activeSuggestSearchType &&
                this.setState({
                  activeSuggestSearchType: void 0,
                  mentionSearch: void 0,
                });
          }
          OnEmoticonSuggestionSelected(_, _) {
            if (!_) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText(":", ":" + _ + ":"),
              this.ClearMentionSearchState();
          }
          OnBBCodeSuggestionSelected(_, _) {
            if (!_) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText("[", _), this.ClearMentionSearchState();
          }
          FocusTextInput() {
            this.descTextAreaRef.current &&
              this.descTextAreaRef.current.focus();
          }
          UpdateAutoSearchState() {
            let _ = this.descTextAreaRef.current;
            if (!_ || this.m_bDisabled) return;
            if (_.selectionStart != _.selectionEnd || !_.selectionStart) {
              this.ClearMentionSearchState();
              return;
            }
            let _ = _.selectionStart,
              _ = _.value,
              _,
              _;
            for (let _ = _ - 1; _ >= 0; _--) {
              let _ = _ > 0 ? _[_ - 1] : void 0;
              if (this.props.emoticonStore && _[_] == ":" && _.length > 2) {
                (!_ ||
                  _ == " " ||
                  _ ==
                    `
` ||
                  _ == ":") &&
                  ((_ = _), (_ = "Emoticon"));
                break;
              } else if (_[_] == "[" && (_ + 1 > _.length || _[_ + 1] != "/")) {
                (!_ ||
                  _ == " " ||
                  _ ==
                    `
` ||
                  _ == "]") &&
                  ((_ = _), (_ = "BBCode"));
                break;
              } else if (
                _[_] == " " ||
                _[_] ==
                  `
`
              )
                break;
            }
            if (_ === void 0 || _ === this.m_iMentionSearchCancelledOffset) {
              this.ClearMentionSearchState();
              return;
            }
            let _ = _.substr(_ + 1, _ - _ - 1);
            (this.m_iMentionSearchStartOffset = _),
              this.setState({
                activeSuggestSearchType: _,
                mentionSearch: _,
              });
          }
          GetTextAreaRef() {
            return this.descTextAreaRef;
          }
          GetTextAreaCurrent() {
            return this.descTextAreaRef.current;
          }
          render() {
            let {
                emoticonStore: _,
                supportBBCodes: _,
                fnSetText: _,
                ..._
              } = this.props,
              _;
            switch (this.state.activeSuggestSearchType) {
              case "Emoticon":
                _ &&
                  (_ = (0, _.jsx)(_, {
                    emoticonStore: _,
                    strSearch: this.state.mentionSearch,
                    nMinimumSearchLengthBeforeAutoSelection: 2,
                    onSuggestionSelected: this.OnEmoticonSuggestionSelected,
                    ref: this.BindMentionDialog,
                  }));
                break;
              case "BBCode":
                _ = (0, _.jsx)(_, {
                  supportBBCodes: _,
                  strSearch: this.state.mentionSearch,
                  nMinimumSearchLengthBeforeAutoSelection: 2,
                  onSuggestionSelected: this.OnBBCodeSuggestionSelected,
                  ref: this.BindMentionDialog,
                });
                break;
            }
            return (0, _.jsxs)(_.Fragment, {
              children: [
                _,
                (0, _.jsx)("textarea", {
                  ..._,
                  ref: this.descTextAreaRef,
                  onKeyDown: this.OnKeyDown,
                  onKeyUp: this.OnKeyPress,
                  onFocus: this.OnFocus,
                  onClick: this.OnClick,
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "BindMentionDialog", 1),
          _([_._], _.prototype, "OnKeyDown", 1),
          _([_._], _.prototype, "OnFocus", 1),
          _([_._], _.prototype, "OnKeyPress", 1),
          _([_._], _.prototype, "OnClick", 1),
          _([_._], _.prototype, "OnEmoticonSuggestionSelected", 1),
          _([_._], _.prototype, "OnBBCodeSuggestionSelected", 1),
          _([_._], _.prototype, "FocusTextInput", 1),
          _([_._], _.prototype, "GetTextAreaRef", 1),
          _([_._], _.prototype, "GetTextAreaCurrent", 1);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==";
        var _ = __webpack_require__("chunkid"),
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
        const _ = (0, _._)((_) => {
          const {
              clanSteamID: _,
              inputClanImage: _,
              nWidth: _,
              nHeight: _,
              setImage: _,
            } = _,
            _ = _.useMemo(
              () => ({
                width: _,
                height: _,
              }),
              [_, _],
            ),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(!!_),
            [_, _] = _.useState(!1),
            _ = (0, _._)(_, "dummy"),
            _ = _.useCallback(
              async (_) => {
                if (
                  (_.ClearImages(),
                  _ && (_(!0), await _.AddExistingClanImage(_, _.Bhc)))
                ) {
                  _(_);
                  const _ = _.GetUploadImages()[0].IsValidAssetType(_);
                  _.error.length == 0 &&
                    !_.needsCrop &&
                    (!_ || _.image_hash != _.image_hash) &&
                    _(_);
                }
                _(!1);
              },
              [_, _, _, _],
            );
          _.useEffect(() => {
            _(_);
          }, [_, _]);
          const _ = (_) => {
              const _ = new _._(_._.CLANSTEAMID);
              (0, _._)(
                (0, _.jsx)(_._, {
                  clanSteamID: _,
                  fnImageSelectCallBack: (_) => _(_),
                }),
                (0, _._)(_) ?? window,
              );
            },
            _ = (_) => {
              const _ = (0, _._)(_) ?? window;
              let _ = _.GetUploadImages()[0];
              (0, _._)(
                (0, _.jsx)(_._, {
                  ownerWin: _,
                  uploadFile: _,
                  forceResolution: {
                    width: _,
                    height: _,
                  },
                  fileType: _._._,
                }),
                _,
              );
            },
            _ = async () => {
              _(!0);
              try {
                const _ = await _.UploadAllImages(_),
                  _ = Object.values(_);
                if (_ && _.length > 0) {
                  (0, _._)(
                    _.length == 1,
                    "ClanImagePickForCertainSize expected size 1, got " +
                      _.length,
                  );
                  const _ = _[0].bSuccess ? _[0].uploadResult : void 0,
                    _ = _._.GetHashAndExt(_ ?? null),
                    _ = _._.GetThumbHashAndExt(_ ?? null);
                  if (_?.image_hash && _.file_type !== void 0 && _ && _) {
                    const _ = _._.GenerateURLFromHashAndExt(_, _),
                      _ = _._.GenerateURLFromHashAndExt(_, _),
                      _ = {
                        imageid: -11231412,
                        image_hash: _.image_hash,
                        thumbnail_hash: _.thumbnail_hash,
                        file_type: _.file_type,
                        file_name: _.file_name,
                        clanAccountID: _.GetAccountID(),
                        url: _,
                        thumb_url: _,
                        uploaded_time: Date.now() / 1e3,
                      };
                    _(_), _(_);
                  }
                }
              } finally {
                _(!1);
              }
            };
          let _ = "",
            _ = !1,
            _;
          if (_ && _.GetFilesToUpload().length > 0) {
            _ = _.GetUploadImages()[0];
            const _ = _.IsValidAssetType(_);
            (_ = _.error), (_ = _.needsCrop);
          }
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _
                ? (0, _.jsx)(_._, {
                    size: "medium",
                    string: (0, _._)("#Loading"),
                  })
                : _ &&
                  (0, _.jsx)("div", {
                    className: _.Image,
                    style: {
                      backgroundImage: `url( '${_ ? _.dataUrl : _.url}' )`,
                      height: `${_}px`,
                      width: `${_}px`,
                    },
                  }),
              !!_ &&
                (0, _.jsx)("p", {
                  children: _,
                }),
              _ &&
                (0, _.jsx)(_._, {
                  onClick: _,
                  children: (0, _._)("#BBCode_ResizeImage"),
                }),
              _ &&
                _.bCropped &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#ClanImagePickAndResize_UploadStatus",
                        _.status,
                      ),
                    }),
                    _
                      ? (0, _.jsx)(_._, {
                          string: (0, _._)("#Uploading"),
                          size: "small",
                        })
                      : (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)(
                            "#ClanImagePickAndResize_UploadImage",
                          ),
                        }),
                  ],
                }),
              (0, _.jsx)(_._, {
                onClick: _,
                children: (0, _._)("#BBCode_ChooseImage", _, _),
              }),
            ],
          });
        });
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        let _ = class extends _.Component {
          m_cancelSignal = _().CancelToken.source();
          constructor(_) {
            super(_),
              (this.state = {
                formattingHelp: {
                  __html: _.s_formattingHelp.get(_.formatType) ?? "",
                },
              });
          }
          componentDidMount() {
            this.AjaxGetFormattingHelp().catch((_) => {
              this.setState((0, _._)(_));
            });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "FormattingHelpWidget component unmounted",
            );
          }
          static GetHelpURL(_, _) {
            return (
              _._.COMMUNITY_BASE_URL +
              "comment/" +
              _ +
              "/formattinghelp" +
              (_ ? "?ajax=1" : "")
            );
          }
          async AjaxGetFormattingHelp() {
            if (this.state.formattingHelp.__html == "") {
              let _ = {
                  sessionid: (0, _._)(),
                },
                _;
              (_ = await _().get(_.GetHelpURL(this.props.formatType, !0), {
                params: _,
                cancelToken: this.m_cancelSignal.token,
              })),
                _.s_formattingHelp.set(this.props.formatType, _.data),
                this.setState({
                  formattingHelp: {
                    __html: _.data,
                  },
                });
            }
          }
          render() {
            return this.state.strErrorMsg
              ? (0, _.jsxs)("div", {
                  children: [
                    this.state.strErrorMsg,
                    (0, _.jsx)("br", {}),
                    this.state.errorCode,
                  ],
                })
              : this.state.formattingHelp.__html == ""
                ? (0, _.jsx)(_._, {})
                : (0, _.jsx)(_._, {
                    strTitle: (0, _._)(
                      "#EventEditor_FormattingHelp_GetHelpLink",
                    ),
                    strDescription: "",
                    closeModal: this.props.closeModal,
                    onOK: this.props.closeModal,
                    onCancel: this.props.closeModal,
                    bAlertDialog: !0,
                    className: "ModernBBStyles",
                    children: (0, _.jsx)("div", {
                      dangerouslySetInnerHTML: this.state.formattingHelp,
                    }),
                  });
          }
        };
        _(_, "s_formattingHelp", new Map()), (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        let _ = class extends _.Component {
          descAutoTextAreaRef = _.createRef();
          constructor(_) {
            super(_),
              (this.state = {
                bShowDragTarget: !1,
              });
          }
          componentDidMount() {
            _._.AddClanImageDragListener(this.ClanImageDragListener);
          }
          componentWillUnmount() {
            _._.RemoveClanImageDragListener(this.ClanImageDragListener);
          }
          ClanImageDragListener(_, _) {
            this.state.bShowDragTarget != _ &&
              this.setState({
                bShowDragTarget: _,
              });
          }
          onFocus(_) {
            _ && _.target.select();
          }
          InsertText(_) {
            _.replaceSelection(this.GetTextAreaRef()?.current, _);
          }
          OnTextAreaDropListener(_) {
            if (
              (_.preventDefault(),
              _.stopPropagation(),
              _.dataTransfer.items && _.dataTransfer.items[0])
            ) {
              let _ = _.dataTransfer.getData("text");
              if (_ && _.length > 0) {
                for (let _ of [_._.GetBaseURL(), _._.GetBaseURLV2()])
                  if (_.startsWith(_)) {
                    let _ = "[img]" + _._ + "/" + _.substr(_.length) + "[/img]";
                    _.replaceSelection(this.GetTextAreaRef()?.current, _);
                    break;
                  }
              }
            }
          }
          GetTextAreaRef() {
            return this.descAutoTextAreaRef.current?.GetTextAreaRef();
          }
          render() {
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  pathToImages:
                    _._.COMMUNITY_CDN_URL + "public/images/sharedfiles/guides/",
                  fnTextareaRef: this.GetTextAreaRef,
                  emoticonStore: this.props.emoticonStore,
                  supportBBCodes: this.props.limitBBCode
                    ? this.props.limitBBCode
                    : _._,
                  bSupportHTMLImport: this.props.bSupportHTMLImport,
                  showFormatHelp: this.props.showFormatHelp,
                  bEmbeddedInDialog: this.props.bEmbeddedInDialog,
                  clanSteamID: this.props.clanSteamID,
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().DescriptionCtn,
                    _().BBCodeEditorInputStyles,
                    this.state.bShowDragTarget ? _().DragTarget : "",
                    this.props.className ? this.props.className : "",
                  ),
                  children: (0, _.jsx)(_, {
                    cols: 90,
                    rows: this.props.nOverridesRows || 22,
                    maxLength: 64e3,
                    className: (0, _._)(
                      _().DefaultEditor,
                      this.props.classNameForTextArea
                        ? this.props.classNameForTextArea
                        : "",
                    ),
                    placeholder: this.props.strPlaceholder,
                    ref: this.descAutoTextAreaRef,
                    value: this.props.fnGetCurText(),
                    onChange: this.props.fnOnTextChange,
                    onDrop: this.OnTextAreaDropListener,
                    emoticonStore: this.props.emoticonStore,
                    fnSetText: this.props.fnSetText,
                    supportBBCodes: this.props.limitBBCode
                      ? this.props.limitBBCode
                      : _._,
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "ClanImageDragListener", 1),
          _([_._], _.prototype, "onFocus", 1),
          _([_._], _.prototype, "OnTextAreaDropListener", 1),
          _([_._], _.prototype, "GetTextAreaRef", 1),
          (_ = _([_._], _));
        class _ {
          static BIsFireFox() {
            return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
              navigator.userAgent,
            );
          }
          static replaceSelection(_, _) {
            if (!_) return;
            let _ = _.selectionStart;
            _.focus(),
              _.InsertTextAtSelect(_, _),
              _.setSelectionRange(_, _ + _.length);
          }
          static getSelectedString(_) {
            return _
              ? _.value.substr(
                  _.selectionStart,
                  _.selectionEnd - _.selectionStart,
                )
              : "";
          }
          static wrapBBCode(_, _, _) {
            if (!_) return;
            let _ = _.getSelectedString(_),
              _ = "";
            _.indexOf(_) == 0 && _.lastIndexOf(_) == _.length - _.length
              ? (_ = _.substr(_.length, _.length - _.length - _.length))
              : (_ = _ + _ + _),
              _.replaceSelection(_, _);
          }
          static append(_, _) {
            _ &&
              (_.focus(),
              _.setSelectionRange(_.value.length, _.value.length),
              _.InsertTextAtSelect(_, _));
          }
          static ClearTextArea(_) {
            if (_) {
              _.focus();
              const _ = 0,
                _ = _.value.length;
              if (_ !== _) {
                _.setRangeText
                  ? _.setRangeText("", _, _, "preserve")
                  : (_.value = "");
                const _ = new Event("input", {
                  bubbles: !0,
                });
                _.dispatchEvent(_);
              }
              _.focus();
            }
          }
          static overwrite(_, _) {
            _ && (_.ClearTextArea(_), _.InsertTextAtSelect(_, _));
          }
          static InsertTextAtSelect(_, _) {
            const _ = _.selectionStart,
              _ = _.selectionEnd;
            if (_ !== null && _ !== null) {
              _.setRangeText
                ? _.setRangeText(_, _, _, "preserve")
                : (_.value = _.value.slice(0, _) + _ + _.value.slice(_));
              const _ = new Event("input", {
                bubbles: !0,
              });
              _.dispatchEvent(_),
                (_.selectionStart = _.selectionEnd = _ + _.length);
            }
            _.focus();
          }
        }
        let _ = class extends _.Component {
          m_linkPopupRef = _.createRef();
          onBold() {
            _.wrapBBCode("[b]", "[/b]", this.props.fnTextareaRef()?.current);
          }
          onItalics() {
            _.wrapBBCode("[i]", "[/i]", this.props.fnTextareaRef()?.current);
          }
          onUnderline() {
            _.wrapBBCode("[u]", "[/u]", this.props.fnTextareaRef()?.current);
          }
          onStrikeThrough() {
            _.wrapBBCode(
              "[strike]",
              "[/strike]",
              this.props.fnTextareaRef()?.current,
            );
          }
          onHeader() {
            _.wrapBBCode("[h1]", "[/h1]", this.props.fnTextareaRef()?.current);
          }
          onHeader2() {
            _.wrapBBCode("[h2]", "[/h2]", this.props.fnTextareaRef()?.current);
          }
          onHeader3() {
            _.wrapBBCode("[h3]", "[/h3]", this.props.fnTextareaRef()?.current);
          }
          onUnorderedList() {
            this.handleList("list");
          }
          onOrderedList() {
            this.handleList("olist");
          }
          handleList(_) {
            let _ = this.props.fnTextareaRef()?.current;
            if (!_) return;
            let _ =
                "[" +
                _ +
                `]
`,
              _ = "[/" + _ + "]";
            if (_.selectionStart == _.selectionEnd)
              _.wrapBBCode(
                _ + "[*]",
                `
` + _,
                _,
              );
            else {
              let _ = _.getSelectedString(_),
                _ =
                  _ +
                  _.split(`
`)
                    .map((_) => (_.match(/\*+\s/) ? "[*]" : "[*] ") + _)
                    .join(`
`) +
                  `
` +
                  _;
              _.replaceSelection(_, _);
            }
          }
          OnAddLink(_) {
            const _ = this.props.fnTextareaRef();
            _ &&
              (0, _._)(
                (0, _.jsx)(_, {
                  textareaRef: _,
                }),
                (0, _._)(_) ?? window,
              );
          }
          ShowHelpDialog(_) {
            this.props.showFormatHelp &&
              (0, _._)(
                (0, _.jsx)(_, {
                  formatType: this.props.showFormatHelp,
                }),
                (0, _._)(_) ?? window,
              );
          }
          OnConvertHTMLToBBCodeDialog(_) {
            const _ = this.props.fnTextareaRef();
            if (!_) return;
            const _ = (0, _._)(_) ?? window;
            (0, _._)(
              (0, _.jsx)(_, {
                ownerWindow: _,
                textareaRef: _,
              }),
              _,
            );
          }
          OnOpenYoutubeDialog(_) {
            const _ = this.props.fnTextareaRef();
            if (!_) return;
            let _ = _._.IMG_URL + "applications/community/";
            (0, _._)(
              (0, _.jsx)(_, {
                textareaRef: _,
                pathToImages: _,
              }),
              (0, _._)(_) ?? window,
            );
          }
          OnOpenImageDialog(_) {
            const _ = this.props.fnTextareaRef();
            _ &&
              (0, _._)(
                (0, _.jsx)(_, {
                  textareaRef: _,
                }),
                (0, _._)(_) ?? window,
              );
          }
          OnOpenSpeakerDialog(_) {
            const _ = this.props.fnTextareaRef(),
              _ = this.props.clanSteamID;
            !_ ||
              !_ ||
              (0, _._)(
                (0, _.jsx)(_, {
                  clanSteamID: _,
                  textareaRef: _,
                }),
                (0, _._)(_) ?? window,
              );
          }
          OnEmoticonSelected(_, _ = !1) {
            let _ = `\u02D0${_}\u02D0`;
            _.replaceSelection(this.props.fnTextareaRef()?.current, _),
              this.props.fnTextareaRef()?.current?.focus();
          }
          BSupports(_) {
            return this.props.supportBBCodes.findIndex((_) => _ == _) >= 0;
          }
          render() {
            const {
              showFormatHelp: _,
              bEmbeddedInDialog: _,
              bSupportHTMLImport: _,
              pathToImages: _,
            } = this.props;
            let _;
            return (
              _ &&
                (_
                  ? (_ = (0, _.jsx)("span", {
                      className: (0, _._)("ttip", _().ActionGetHelp),
                      children: (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: (0, _.jsxs)("a", {
                          href: _.GetHelpURL(_, !1),
                          target: _._.IN_CLIENT ? void 0 : "_blank",
                          children: [
                            (0, _.jsx)("img", {
                              src: _ + "/action_help.png",
                            }),
                            " ",
                            (0, _._)("#EventEditor_FormattingHelp_GetHelpLink"),
                          ],
                        }),
                      }),
                    }))
                  : (_ = (0, _.jsx)("span", {
                      onClick: this.ShowHelpDialog,
                      className: (0, _._)("ttip", _().ActionGetHelp),
                      children: (0, _.jsxs)(_._, {
                        toolTipContent: (0, _._)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: [
                          (0, _.jsx)("img", {
                            src: _ + "/action_help.png",
                          }),
                          " ",
                          (0, _._)("#EventEditor_FormattingHelp_GetHelpLink"),
                        ],
                      }),
                    }))),
              (0, _.jsxs)("div", {
                className: _().TextEditorToolBarContainer,
                children: [
                  this.BSupports("b") &&
                    (0, _.jsx)(_, {
                      onClick: this.onBold,
                      tooltip: (0, _._)("#Editor_Bold"),
                      imgURL: this.props.pathToImages + "/format_bold.png",
                    }),
                  this.BSupports("u") &&
                    (0, _.jsx)(_, {
                      onClick: this.onUnderline,
                      tooltip: (0, _._)("#Editor_Underline"),
                      imgURL: this.props.pathToImages + "/format_underline.png",
                    }),
                  this.BSupports("i") &&
                    (0, _.jsx)(_, {
                      onClick: this.onItalics,
                      tooltip: (0, _._)("#Editor_Italics"),
                      imgURL: this.props.pathToImages + "/format_italic.png",
                    }),
                  this.BSupports("strike") &&
                    (0, _.jsx)(_, {
                      onClick: this.onStrikeThrough,
                      tooltip: (0, _._)("#Editor_StrikeThrough"),
                      imgURL: this.props.pathToImages + "/format_strike.png",
                    }),
                  !!(this.BSupports("url") && !_) &&
                    (0, _.jsx)(_, {
                      onClick: this.OnAddLink,
                      tooltip: (0, _._)("#Editor_Link"),
                      imgURL: this.props.pathToImages + "/format_link.png",
                    }),
                  this.BSupports("list") &&
                    (0, _.jsx)(_, {
                      onClick: this.onUnorderedList,
                      tooltip: (0, _._)("#Editor_Unordered"),
                      imgURL: this.props.pathToImages + "/format_bullet.png",
                    }),
                  this.BSupports("olist") &&
                    (0, _.jsx)(_, {
                      onClick: this.onOrderedList,
                      tooltip: (0, _._)("#Editor_Ordered"),
                      imgURL: this.props.pathToImages + "/format_numbered.png",
                    }),
                  this.BSupports("h1") &&
                    (0, _.jsx)(_, {
                      onClick: this.onHeader,
                      tooltip: (0, _._)("#Editor_Header"),
                      imgURL: this.props.pathToImages + "/format_header1.png",
                    }),
                  this.BSupports("h2") &&
                    (0, _.jsx)(_, {
                      onClick: this.onHeader2,
                      tooltip: (0, _._)("#Editor_Header2"),
                      imgURL: this.props.pathToImages + "/format_header2.png",
                    }),
                  this.BSupports("h3") &&
                    (0, _.jsx)(_, {
                      onClick: this.onHeader3,
                      tooltip: (0, _._)("#Editor_Header3"),
                      imgURL: this.props.pathToImages + "/format_header3.png",
                    }),
                  this.BSupports("previewyoutube") &&
                    (0, _.jsx)(_, {
                      onClick: this.OnOpenYoutubeDialog,
                      tooltip: (0, _._)("#EventEditor_InsertYouTube"),
                      imgURL: _,
                    }),
                  (0, _.jsx)("span", {
                    className: "ttip",
                    children:
                      this.props.emoticonStore &&
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)("#Editor_Emoticon"),
                        children: (0, _.jsx)(_._, {
                          title: " ",
                          className: (0, _._)(_().EmoteOuter),
                          disabled: !1,
                          OnEmoticonSelected: this.OnEmoticonSelected,
                          rtLastAckedNewEmoticons: Number.MAX_VALUE,
                          emoticonStore: this.props.emoticonStore,
                          useImg: this.props.pathToImages + "/format_emote.png",
                          contextOptions: {
                            bOverlapHorizontal: !0,
                            bDisablePopTop: !0,
                          },
                        }),
                      }),
                  }),
                  !!(this.BSupports("img") && !_) &&
                    (0, _.jsx)(_, {
                      onClick: this.OnOpenImageDialog,
                      tooltip: (0, _._)("#EventEditor_InsertImage"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(
                    _._.is_support &&
                    this.props.clanSteamID &&
                    this.BSupports("speaker")
                  ) &&
                    (0, _.jsx)(_, {
                      onClick: this.OnOpenSpeakerDialog,
                      tooltip: (0, _._)("#EventEditor_AddSpeaker"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(_ && !_) &&
                    (0, _.jsx)(_, {
                      onClick: this.OnConvertHTMLToBBCodeDialog,
                      className: _().ActionImportHTML,
                      tooltip: (0, _._)("#EventEditor_ImportFromHTML_ttip"),
                      children: (0, _._)("#EventEditor_ImportHTML"),
                    }),
                  _,
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "onBold", 1),
          _([_._], _.prototype, "onItalics", 1),
          _([_._], _.prototype, "onUnderline", 1),
          _([_._], _.prototype, "onStrikeThrough", 1),
          _([_._], _.prototype, "onHeader", 1),
          _([_._], _.prototype, "onHeader2", 1),
          _([_._], _.prototype, "onHeader3", 1),
          _([_._], _.prototype, "onUnorderedList", 1),
          _([_._], _.prototype, "onOrderedList", 1),
          _([_._], _.prototype, "OnAddLink", 1),
          _([_._], _.prototype, "ShowHelpDialog", 1),
          _([_._], _.prototype, "OnConvertHTMLToBBCodeDialog", 1),
          _([_._], _.prototype, "OnOpenYoutubeDialog", 1),
          _([_._], _.prototype, "OnOpenImageDialog", 1),
          _([_._], _.prototype, "OnOpenSpeakerDialog", 1),
          _([_._], _.prototype, "OnEmoticonSelected", 1),
          (_ = _([_._], _));
        function _(_) {
          return (0, _.jsx)("span", {
            onClick: _.onClick,
            className: _.className,
            children: (0, _.jsxs)(_._, {
              toolTipContent: _.tooltip,
              className: "ttip",
              children: [
                !!_.imgURL &&
                  (0, _.jsx)("img", {
                    src: _.imgURL,
                  }),
                _.children,
              ],
            }),
          });
        }
        let _ = class extends _.Component {
          state = {
            youtubeInput: "",
            alignment: _._.left,
          };
          OnYoutubeInsertLink() {
            const _ =
              this.state.youtubeInput && (0, _._)(this.state.youtubeInput);
            if (!_) {
              alert((0, _._)("#EventEditor_InsertYouTube_NoURL"));
              return;
            }
            if (this.state.alignment == _._.summary) {
              const _ =
                "https://www.youtube.com/watch?v=" +
                _.strVideoID +
                (_.nStartSeconds ? "&t=" + _.nStartSeconds : "");
              _.wrapBBCode(_, "", this.props.textareaRef.current);
            } else {
              let _ =
                "[previewyoutube=" +
                _.strVideoID +
                ";" +
                this.state.alignment +
                "]";
              _.wrapBBCode(
                _,
                "[/previewyoutube]",
                this.props.textareaRef.current,
              );
            }
            this.setState({
              youtubeInput: "",
              alignment: _._.left,
            });
          }
          OnUrlChange(_) {
            this.state.youtubeInput != _.target.value &&
              this.setState({
                youtubeInput: _.target.value,
              });
          }
          OnLeftSelected() {
            this.setState({
              alignment: _._.left,
            });
          }
          OnRightSelected() {
            this.setState({
              alignment: _._.right,
            });
          }
          OnFullSelected() {
            this.setState({
              alignment: _._.full,
            });
          }
          OnSummarySelected() {
            this.setState({
              alignment: _._.summary,
            });
          }
          OnOuterDivClickPassDown(_) {}
          render() {
            return (0, _.jsx)(_._, {
              strTitle: (0, _._)("#EventEditor_InsertYouTube"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnYoutubeInsertLink,
              strOKButtonText: (0, _._)("#EventEditor_InsertYouTube"),
              className: _().BBCodeEditorInputStyles,
              children: (0, _.jsxs)("div", {
                className: _().YouTubeInput,
                children: [
                  (0, _.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, _.jsxs)("label", {
                      children: [
                        (0, _.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, _._)("#EventEditor_InsertYouTube_URL"),
                        }),
                        (0, _.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, _.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            ref: (_) => {
                              _?.focus();
                            },
                            type: "text",
                            value: this.state.youtubeInput,
                            onChange: this.OnUrlChange,
                            placeholder: (0, _._)(
                              "#EventEditor_InsertYouTube_Placholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: "DialogInputLabelGroup",
                    children: [
                      (0, _.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, _._)(
                          "#EventEditor_InsertYouTube_Position",
                        ),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, _.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            _: _._.left,
                            value: _._.left,
                            checked: this.state.alignment == _._.left,
                            onChange: this.OnLeftSelected,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: _._.left,
                            children: (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#EventEditor_InsertYouTube_Left",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, _.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            _: _._.right,
                            value: _._.right,
                            checked: this.state.alignment == _._.right,
                            onChange: this.OnRightSelected,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: _._.right,
                            children: (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#EventEditor_InsertYouTube_Right",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, _.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            _: _._.full,
                            value: _._.full,
                            checked: this.state.alignment == _._.full,
                            onChange: this.OnFullSelected,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: _._.full,
                            children: (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#EventEditor_InsertYouTube_Full",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, _.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            _: _._.summary,
                            value: _._.summary,
                            checked: this.state.alignment == _._.summary,
                            onChange: this.OnSummarySelected,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: _._.summary,
                            children: (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#EventEditor_InsertYouTube_Summary",
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        _([_._], _.prototype, "OnYoutubeInsertLink", 1),
          _([_._], _.prototype, "OnUrlChange", 1),
          _([_._], _.prototype, "OnLeftSelected", 1),
          _([_._], _.prototype, "OnRightSelected", 1),
          _([_._], _.prototype, "OnFullSelected", 1),
          _([_._], _.prototype, "OnSummarySelected", 1),
          _([_._], _.prototype, "OnOuterDivClickPassDown", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          state = {
            textToDisplay: "",
            strURL: "",
          };
          LoadFromTextArea() {
            const { textareaRef: _ } = this.props;
            if (_ && _.current) {
              let _ = _.getSelectedString(_.current),
                _ = _.m_regExp.exec(_);
              _
                ? this.setState({
                    strURL: _[1],
                    textToDisplay: _[2],
                  })
                : this.setState({
                    textToDisplay: _,
                  });
            }
          }
          componentDidMount() {
            this.LoadFromTextArea();
          }
          onLinkTitleUpdate(_) {
            this.setState({
              textToDisplay: _.target.value,
            });
          }
          onLinkURLUpdate(_) {
            this.setState({
              strURL: _.target.value,
            });
          }
          onInsertLink() {
            const { strURL: _, textToDisplay: _ } = this.state;
            let _ = "[url=" + _ + "]" + _ + "[/url]";
            _.replaceSelection(this.props.textareaRef.current, _);
          }
          render() {
            return (0, _.jsx)(_._, {
              strTitle: (0, _._)("#Editor_Link"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onOK: this.onInsertLink,
              onCancel: this.props.closeModal,
              strOKButtonText: (0, _._)("#EventEditor_InsertLinkURL"),
              className: _().BBCodeEditorInputStyles,
              children: (0, _.jsxs)("div", {
                className: _().EventEditorLinkInput,
                children: [
                  (0, _.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, _.jsxs)("label", {
                      children: [
                        (0, _.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, _._)("#EventEditor_LinkDescription"),
                        }),
                        (0, _.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, _.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkTitleUpdate,
                            value: this.state.textToDisplay,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, _.jsxs)("label", {
                      children: [
                        (0, _.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, _._)("#EventEditor_LinkURL"),
                        }),
                        (0, _.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, _.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkURLUpdate,
                            value: this.state.strURL,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        _(_, "m_regExp", new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i)),
          _([_._], _.prototype, "onLinkTitleUpdate", 1),
          _([_._], _.prototype, "onLinkURLUpdate", 1),
          _([_._], _.prototype, "onInsertLink", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          refFirstInput = _.createRef();
          state = {
            imgURL: "",
            anchorURL: "",
          };
          componentDidMount() {
            this.refFirstInput.current?.focus();
          }
          OnImageInsert() {
            const { anchorURL: _, imgURL: _ } = this.state;
            let _ = "",
              _ = "";
            _ && _.length > 0 && ((_ += "[url=" + _ + "]"), (_ = "[/url]" + _)),
              (_ += "[img]" + _),
              (_ = "[/img]" + _),
              _.wrapBBCode(_, _, this.props.textareaRef.current);
          }
          OnImageURLChange(_) {
            this.state.imgURL != _.target.value &&
              this.setState({
                imgURL: _.target.value,
              });
          }
          OnAnchorURLChange(_) {
            this.state.anchorURL != _.target.value &&
              this.setState({
                anchorURL: _.target.value,
              });
          }
          render() {
            const { imgURL: _, anchorURL: _ } = this.state;
            return (0, _.jsx)(_._, {
              strTitle: (0, _._)("#EventEditor_InsertImage_Title"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnImageInsert,
              strOKButtonText: (0, _._)("#EventEditor_InsertImage_Title"),
              className: _().BBCodeEditorInputStyles,
              children: (0, _.jsxs)("div", {
                className: _().EventEditorLinkInput,
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _._)("#EventEditor_InsertImage_Desc"),
                  }),
                  (0, _.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, _.jsxs)("label", {
                      children: [
                        (0, _.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, _._)("#EventEditor_InsertImage_URL"),
                        }),
                        (0, _.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, _.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: _,
                            onChange: this.OnImageURLChange,
                            placeholder: (0, _._)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                            ref: this.refFirstInput,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, _.jsxs)("label", {
                      children: [
                        (0, _.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, _._)("#EventEditor_InsertImage_Anchor"),
                        }),
                        (0, _.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, _.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: _,
                            onChange: this.OnAnchorURLChange,
                            placeholder: (0, _._)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        _([_._], _.prototype, "OnImageInsert", 1),
          _([_._], _.prototype, "OnImageURLChange", 1),
          _([_._], _.prototype, "OnAnchorURLChange", 1),
          (_ = _([_._], _));
        const _ = (_) => {
          const [_, _] = _.useState(""),
            [_, _] = _.useState(""),
            [_, _] = _.useState(""),
            [_, _] = _.useState(""),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(void 0),
            { data: _ } = (0, _._)(),
            { isLoading: _, data: _ } = (0, _._)(_?.GetAccountID()),
            _ = () => {
              let _ = `[speaker name="${_.trim()}"`;
              if (
                (_.trim().length > 0 && (_ += ` title="${_}"`),
                _.trim().length > 0 && (_ += ` company="${_}"`),
                _)
              ) {
                const _ =
                  _._ + "/" + _.clanAccountID + "/" + _._.GetHashAndExt(_);
                _ += ` photo="${_}"`;
              }
              _ && (_ += ` steamid="${_.ConvertTo64BitString()}"`),
                (_ += `]${_}[/speaker]`),
                _.replaceSelection(_.textareaRef.current, _);
            },
            _ = _.trim().length != 0 && _.trim().length != 0,
            _ = 184;
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)("#EventEditor_AddSpeaker"),
            strDescription: (0, _._)("#EventEditor_AddSpeaker_Desc"),
            closeModal: _.closeModal,
            onCancel: _.closeModal,
            bOKDisabled: !_,
            onOK: _,
            className: _().BBCodeEditorInputStyles,
            children: (0, _.jsxs)("div", {
              className: _().InsertSpeakerCtn,
              children: [
                (0, _.jsx)(_._, {
                  type: "text",
                  label: (0, _._)("#EventEditor_AddSpeaker_Name"),
                  value: _,
                  onChange: (_) => _(_.target.value),
                  focusOnMount: !0,
                }),
                (0, _.jsxs)("div", {
                  className: _().TitleGroup,
                  children: [
                    (0, _.jsx)(_._, {
                      type: "text",
                      label: (0, _._)("#EventEditor_AddSpeaker_Title"),
                      value: _,
                      onChange: (_) => _(_.target.value),
                    }),
                    (0, _.jsx)(_._, {
                      type: "text",
                      label: (0, _._)("#EventEditor_AddSpeaker_Company"),
                      value: _,
                      onChange: (_) => _(_.target.value),
                    }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#EventEditor_AssociateSteamAccount_ttip",
                  ),
                  children: (0, _.jsxs)("div", {
                    className: "DialogLabel",
                    children: [
                      (0, _._)("#EventEditor_AssociateSteamAccount"),
                      " (?)",
                    ],
                  }),
                }),
                (0, _.jsxs)("div", {
                  children: [
                    _ &&
                      (0, _.jsx)(_._, {
                        string: (0, _._)("#Loading"),
                        size: "small",
                      }),
                    _ &&
                      _ &&
                      (0, _.jsxs)("a", {
                        href:
                          _._.COMMUNITY_BASE_URL +
                          "profiles/" +
                          _.ConvertTo64BitString(),
                        target: "_blank",
                        children: [
                          _
                            ? (0, _.jsx)("img", {
                                style: {
                                  marginRight: "8px",
                                },
                                src: _.avatar_url,
                              })
                            : null,
                          _ ? _.m_strPlayerName : null,
                        ],
                      }),
                    (0, _.jsxs)("div", {
                      className: _().AssociateRowCtn,
                      children: [
                        (0, _.jsx)(_._, {
                          onClick: () => _(new _._(_._.steamid)),
                          children: (0, _._)("#EventEditor_SteamAccount_addme"),
                        }),
                        (0, _.jsx)(_._, {
                          onClick: (_) =>
                            (0, _._)(
                              (0, _.jsx)(_, {
                                friends: _ ?? [],
                                setSteamID: _,
                              }),
                              _,
                            ),
                          children: (0, _._)(
                            "#EventEditor_SteamAccount_addfriend",
                          ),
                        }),
                        (0, _.jsx)(_._, {
                          onClick: () => _(void 0),
                          children: (0, _._)("#EventEditor_SteamAccount_clear"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().PhotoCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, _._)("#EventEditor_ChoosePhoto"),
                    }),
                    (0, _.jsx)(_, {
                      clanSteamID: _.clanSteamID,
                      inputClanImage: _,
                      setImage: _,
                      nWidth: _,
                      nHeight: _,
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().AboutCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, _._)("#EventEditor_AddSpeaker_About"),
                    }),
                    (0, _.jsx)(_._, {
                      value: _,
                      onChange: (_) => _(_.target.value),
                      rows: 8,
                      cols: 80,
                      nMinHeight: 40,
                      placeholder: (0, _._)(
                        "#EventEditor_AddSpeaker_About_Placeholder",
                      ),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().PreviewCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, _._)("#Button_Preview"),
                    }),
                    (0, _.jsx)(_._, {
                      company: _,
                      name: _,
                      title: _,
                      bioString: _,
                      photo: _ ? _.url : void 0,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
        function _(_) {
          const { friends: _, setSteamID: _ } = _;
          return (0, _.jsx)("div", {
            className: _().DropDownScroll,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  steamid: _,
                  setSteamID: _,
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          const { steamid: _, setSteamID: _ } = _,
            { data: _ } = (0, _._)(_);
          return (0, _.jsx)(_._, {
            onSelected: () => _(new _._(_)),
            children: (0, _.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
              },
              children: [
                _ &&
                  (0, _.jsx)("img", {
                    className: _().WhitelistAvatar,
                    src: _.avatar_url,
                  }),
                _?.m_strPlayerName,
              ],
            }),
          });
        }
        let _ = class extends _.Component {
          m_isMounted = !1;
          m_bAppend = !1;
          constructor(_) {
            super(_),
              (this.state = {
                bPreserveNewLines: !1,
                strHTMLData: "",
              });
          }
          componentDidMount() {
            this.m_isMounted = !0;
          }
          componentWillUnmount() {
            this.m_isMounted = !1;
          }
          OnConvertAndOverriteHTML() {
            (this.m_bAppend = !1), this.ConvertBBCode();
          }
          OnConvertAndAppendHTML() {
            (this.m_bAppend = !0), this.ConvertBBCode();
          }
          async ConvertHtmlToBBCode(_, _) {
            let _ = new URLSearchParams();
            return (
              _.append("content", _),
              _.append("preserve_newlines", _ ? "1" : "0"),
              (
                await _().post(
                  _._.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
                  _,
                )
              ).data.content
            );
          }
          ConvertBBCode() {
            this.setState({
              bConverting: !0,
            }),
              this.ConvertHtmlToBBCode(
                this.state.strHTMLData,
                this.state.bPreserveNewLines,
              )
                .then((_) => {
                  this.m_isMounted &&
                    (this.m_bAppend
                      ? _.append(_, this.props.textareaRef.current)
                      : _.overwrite(_, this.props.textareaRef.current),
                    this.setState({
                      bConverting: !1,
                      bFinishedConverting: !0,
                    }));
                })
                .catch((_) => {
                  (0, _._)(
                    (0, _.jsx)(_._, {
                      strTitle: (0, _._)("#EventEditor_ConvertHTML_Error"),
                      strDescription: (0, _._)(
                        "#EventEditor_ConvertHTML_Error_Desc",
                        _.response && _.response.data ? _.response.data.msg : _,
                      ),
                      bAlertDialog: !0,
                      bDestructiveWarning: !0,
                    }),
                    this.props.ownerWindow,
                    {
                      strTitle: (0, _._)("#EventEditor_ConvertHTML_Error"),
                    },
                  );
                });
          }
          OnCheckboxChange(_) {
            let _ = _.target.checked;
            _ != this.state.bPreserveNewLines &&
              this.setState({
                bPreserveNewLines: _,
              });
          }
          OnTextAreaChange(_) {
            this.setState({
              strHTMLData: _.currentTarget.value,
            });
          }
          render() {
            const { closeModal: _ } = this.props;
            return this.state.bConverting
              ? (0, _.jsx)(_._, {
                  strTitle: (0, _._)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, _._)(
                    "#EventEditor_ImportFromHTML_ConversionInProgress",
                  ),
                  closeModal: _,
                  bAlertDialog: !0,
                  onOK: _,
                  onCancel: _,
                  children: (0, _.jsx)(_._, {}),
                })
              : this.state.bFinishedConverting
                ? (0, _.jsx)(_._, {
                    strTitle: (0, _._)("#EventEditor_ImportFromHTML"),
                    strDescription: (0, _._)(
                      "#EventEditor_ImportFromHTML_ConvertFinished",
                    ),
                    closeModal: _,
                    bAlertDialog: !0,
                    onOK: _,
                    onCancel: _,
                  })
                : (0, _.jsx)(_._, {
                    title: (0, _._)("#EventEditor_ImportFromHTML"),
                    onOK: this.OnConvertAndOverriteHTML,
                    onCancel: _,
                    className: _().BBCodeEditorInputStyles,
                    children: (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)(_._, {
                          children: (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _().FlexColumnContainer,
                              _().ImportHTMLCtn,
                            ),
                            children: [
                              (0, _.jsx)("div", {
                                className: _().FlexColumnContainer,
                                children: (0, _._)(
                                  "#EventEditor_ImportFromHTML_ConvertDescription",
                                  (0, _.jsx)("a", {
                                    target: _._.IN_CLIENT ? void 0 : "_blank",
                                    href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
                                    children: (0, _._)(
                                      "#EventEditor_ImportFromHTML_ConvertLearn",
                                    ),
                                  }),
                                ),
                              }),
                              (0, _.jsx)("textarea", {
                                value: this.state.strHTMLData,
                                placeholder: (0, _._)(
                                  "#EventEditor_ImportFromHTML_Instruction",
                                ),
                                className: _().ImportHTMLTextArea,
                                onChange: this.OnTextAreaChange,
                                ref: (_) => {
                                  _?.focus();
                                },
                              }),
                              (0, _.jsxs)("div", {
                                className: _().ImportHTMLCheckBoxLine,
                                children: [
                                  (0, _.jsx)("input", {
                                    _: "ImportFromHTMLNewLines",
                                    type: "checkbox",
                                    checked: this.state.bPreserveNewLines,
                                    onChange: this.OnCheckboxChange,
                                  }),
                                  (0, _.jsxs)("label", {
                                    htmlFor: "ImportFromHTMLNewLines",
                                    children: [
                                      (0, _._)(
                                        "#EventEditor_ImportFromHTML_PreserveNewlines",
                                      ),
                                      (0, _.jsx)(_._, {
                                        tooltip: (0, _._)(
                                          "#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsx)("div", {
                                children: (0, _._)(
                                  "#EventEditor_ImportFromHTML_ConvertToBBCode",
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)(_._, {
                            onCancel: () => _?.(),
                            strOKText: (0, _._)("#Button_Overwrite"),
                            onUpdate: this.OnConvertAndAppendHTML,
                            strUpdateText: (0, _._)("#Button_Append"),
                          }),
                        }),
                      ],
                    }),
                  });
          }
        };
        _([_._], _.prototype, "OnConvertAndOverriteHTML", 1),
          _([_._], _.prototype, "OnConvertAndAppendHTML", 1),
          _([_._], _.prototype, "OnCheckboxChange", 1),
          _([_._], _.prototype, "OnTextAreaChange", 1),
          (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (0, _._)((_) => {
          const { appid: _, eventLink: _ } = _,
            _ = _.useRef(null),
            { data: _ } = (0, _._)(_._.steamid),
            [_, _] = _.useState(""),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(""),
            [_, _] = _.useState(!1);
          _.useEffect(
            () => () => {
              _.current?.("ShareEventOnFriendsActivityFeed: unmounting");
            },
            [],
          );
          const _ = _?.avatar_url,
            _ = _._.InitFromAccountID(_._.accountid),
            _ = async () => {
              _.current &&
                _.current(
                  "ShareEventOnFriendsActivityFeed: cancel previous...",
                );
              const _ = _().CancelToken.source();
              (_.current = _.cancel), _(!0);
              let _ = _;
              _.trim().length != 0 &&
                (_ += `

`),
                (_ += _);
              const _ =
                _._.COMMUNITY_BASE_URL +
                "profiles/" +
                _.ConvertTo64BitString() +
                "/ajaxpostuserstatus";
              try {
                if (_._.IN_STEAMUI) {
                  let _ = _._.Init(_.kVt);
                  _.Body().set_appid(_), _.Body().set_status_text(_);
                  let _ = await _.xtC.PostStatusToFriends(
                    _._.CMInterface.GetServiceTransport(),
                    _,
                  );
                  if (_.GetEResult() != _._) {
                    const _ =
                      (0, _._)("#EventDisplay_Share_Failure") +
                      `

` +
                      _.GetEResult();
                    console.error(_, !_.token.reason), _.token.reason || _(_);
                    return;
                  }
                } else {
                  const _ = new FormData();
                  _.append("appid", "" + _),
                    _.append("status_text", _),
                    _.append("sessionid", (0, _._)());
                  const _ = await _().post(_, _, {
                    withCredentials: !0,
                  });
                  if (_.status != 200 || _?.data?.success != _._) {
                    const _ =
                      (0, _._)("#EventDisplay_Share_Failure") +
                      `

` +
                      _?.data?.message;
                    console.error(_), _.token.reason || _(_);
                    return;
                  }
                }
                _.token.reason ||
                  (_(!0), _((0, _._)("#EventDisplay_Share_Success")));
              } catch (_) {
                const _ = (0, _._)(_),
                  _ =
                    (0, _._)("#EventDisplay_Share_Failure") +
                    `

` +
                    _.strErrorMsg;
                _.token.reason || _(_), console.error(_);
              }
            };
          return _
            ? (0, _.jsx)(_._, {
                strDescription: "",
                strTitle: (0, _._)("#Button_Share"),
                onCancel: _.closeModal,
                onOK: _.closeModal,
                bAlertDialog: !0,
                children: (0, _.jsxs)("div", {
                  className: _().FlexColumnContainer,
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().Container,
                      children: [
                        _?.length == 0
                          ? (0, _.jsx)(_._, {
                              position: "center",
                            })
                          : (0, _.jsx)("div", {
                              children: _,
                            }),
                        !!_ &&
                          (0, _.jsx)("a", {
                            href:
                              _._.COMMUNITY_BASE_URL +
                              "profiles/" +
                              _.ConvertTo64BitString() +
                              "/home",
                            target: _._.IN_CLIENT ? void 0 : "_blank",
                            children: (0, _._)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, _.jsx)(_._, {
                strDescription: "",
                strTitle: (0, _._)("#Button_Share"),
                onCancel: _.closeModal,
                onOK: _,
                strOKButtonText: (0, _._)("#Button_Post"),
                children: (0, _.jsxs)("div", {
                  className: _().FlexColumnContainer,
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().Container,
                        _().FlexColumnContainer,
                      ),
                      children: [
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("img", {
                              className: _().SmallAvatar,
                              src: _,
                              "data-miniprofile": "s" + _._.steamid,
                            }),
                            (0, _.jsx)("div", {
                              className: (0, _._)(_().FlexColumnContainer),
                              children: (0, _.jsx)(_, {
                                strPlaceholder: (0, _._)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => _,
                                fnOnTextChange: (_) => _(_.currentTarget.value),
                                fnSetText: _,
                                emoticonStore: _.emoticonStore,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: _._,
                                classNameForTextArea: _().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          className: _().ShareLink,
                          children: (0, _.jsx)(_._, {
                            linkWidgets: (0, _._)(),
                            children: (0, _.jsx)(_._, {
                              text: _,
                              partnerEventStore: _.partnerEventStore,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          },
          _ = ((_) => (
            (_.topleft = "topleft"),
            (_.top = "top"),
            (_.topright = "topright"),
            (_.left = "left"),
            (_.middle = "middle"),
            (_.right = "right"),
            (_.bottomleft = "bottomleft"),
            (_.bottom = "bottom"),
            (_.bottomright = "bottomright"),
            _
          ))(_ || {});
        let _ = class extends _.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new _._();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(_) {
            super(_),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(_) {
            this.m_elLinkRegionBox = _;
          }
          OnMouseDown(_, _) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, _);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, _);
              }),
              this.setState({
                EdgeDown: _,
              }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((_.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((_.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              _.preventDefault(),
              _.stopPropagation();
          }
          OnMouseMove(_, _) {
            if (this.state.EdgeDown !== void 0) {
              switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(_.clientY),
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "middle": {
                  const _ = (0, _._)(
                      this.CalcLeftEdge(_.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    _ = 100 - (_ + this.state.curWidthPct),
                    _ = (0, _._)(
                      this.CalcTopEdge(_.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    _ = 100 - (_ + this.state.curHeightPct),
                    _ = {
                      curLeftPosPct: _,
                      curRightPosPct: _,
                      curTopPosPct: _,
                      curBottomPosPct: _,
                    };
                  this.setState(_);
                  break;
                }
                default:
                  break;
              }
              _.preventDefault(), _.stopPropagation();
            }
          }
          IsValidPct(_) {
            return _ >= 0 && _ <= 100;
          }
          UpdateState(_) {
            let _ =
                _.curTopPosPct !== void 0
                  ? _.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                _.curBottomPosPct !== void 0
                  ? _.curBottomPosPct
                  : this.state.curBottomPosPct,
              _ =
                _.curLeftPosPct !== void 0
                  ? _.curLeftPosPct
                  : this.state.curLeftPosPct,
              _ =
                _.curRightPosPct !== void 0
                  ? _.curRightPosPct
                  : this.state.curRightPosPct,
              _ = (0, _._)(
                100 - _ - _,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              _ = (0, _._)(
                100 - _ - _,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (_.curLeftPosPct !== void 0 || _.curRightPosPct !== void 0
                ? (_ = _ / this.m_aspectRatio)
                : (_ = _ * this.m_aspectRatio)),
              _.curLeftPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _)),
              _.curTopPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _));
            const _ = 100 - _ - _,
              _ = 100 - _ - _;
            this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.setState({
                curLeftPosPct: _,
                curRightPosPct: _,
                curTopPosPct: _,
                curBottomPosPct: _,
              });
          }
          GetXPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(_) {
            return (0, _._)(this.GetXPercent(_), 0, 100);
          }
          CalcRightEdge(_) {
            return (0, _._)(
              100 - (this.GetXPercent(_) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(_) {
            return (0, _._)(this.GetYPercent(_), 0, 100);
          }
          CalcBottomEdge(_) {
            return (0, _._)(
              100 - (this.GetYPercent(_) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(_, _) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({
                EdgeDown: void 0,
              }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(_) {
            this.setState({
              text_link_url: _.target.value,
              valid_link: this.validateUrl(_.target.value),
            });
          }
          OnSetLinkDescriptionChange(_) {
            this.setState({
              text_link_description: _.target.value,
            });
          }
          validateUrl(_) {
            return _ != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  _,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({
                bEditingLink: !this.state.bEditingLink,
              }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({
              bEditingLink: !this.state.bEditingLink,
            });
          }
          render() {
            let _ = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              _ = _().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (_ += ` ${_().EdgeDown} ` + _()[this.state.EdgeDown]),
              (0, _.jsxs)("div", {
                className: _,
                style: _,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().LinkRegionGridBox,
                    children: [
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsxs)("div", {
                        className: `${_().LinkRegionEdge} ${_().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, _.jsx)(_.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, _.jsx)(_.xv8, {}),
                            }),
                          (0, _.jsxs)("div", {
                            className: _().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, _.jsxs)("div", {
                      className: _().LinkRegionInfo,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, _._)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, _._)("#SteamTV_LinkDescription"),
                          placeholder: (0, _._)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, _.jsxs)("div", {
                          className: _().LinkRegionButtonContainer,
                          children: [
                            (0, _.jsxs)(_._, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, _._)("#Button_OK"), " "],
                            }),
                            (0, _.jsxs)(_._, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, _._)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "LinkRegionBoxRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "HandleDelete", 1),
          _([_._], _.prototype, "OnSetLinkURLChange", 1),
          _([_._], _.prototype, "OnSetLinkDescriptionChange", 1),
          _([_._], _.prototype, "OnSaveLink", 1),
          _([_._], _.prototype, "OnEditLink", 1),
          (_ = _([_._], _));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        class _ extends _.Component {
          state = {
            region: {
              xPosPct: 0,
              yPosPct: 0,
              widthPct:
                (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              heightPct:
                (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            },
          };
          async OnCrop() {
            const _ = this.props.uploadFile.GetCanvasImageSource();
            _ &&
              (await _(
                this.props.uploadFile,
                _,
                (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
                (this.state.region.yPosPct / 100) *
                  this.props.uploadFile.height,
                (this.state.region.widthPct / 100) *
                  this.props.uploadFile.width,
                (this.state.region.heightPct / 100) *
                  this.props.uploadFile.height,
                this.GetDestWidth(),
                this.GetDestHeight(),
                this.props.fileType,
              )),
              this.props.closeModal?.();
          }
          UpdateCrop(_, _) {
            this.setState({
              region: _,
            });
          }
          GetDestWidth() {
            const { uploadFile: _, forceResolution: _ } = this.props;
            if (_) return _.width;
            const _ = _.GetCurrentImageOption();
            if (!_) return 0;
            const _ = _._[_.artworkType].width;
            return _ ? (0, _._)(_) : 0;
          }
          GetDestHeight() {
            const { uploadFile: _, forceResolution: _ } = this.props;
            if (_) return _.width;
            const _ = _.GetCurrentImageOption();
            if (!_) return 0;
            const _ = _._[_.artworkType].height;
            return _ ? (0, _._)(_) : 0;
          }
          GetLargestBoxThatFits(_, _, _, _) {
            let _ = _,
              _ = (_ * _) / Math.max(_, 1);
            return (
              _ > _ && ((_ = _), (_ = (_ * _) / Math.max(_, 1))),
              {
                width: _,
                height: _,
              }
            );
          }
          GetPreviewWindowStyle() {
            const { region: _ } = this.state,
              _ = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              _ = _.width,
              _ = _.height,
              _ = 1 / Math.max(_.widthPct / 100, 1e-4),
              _ = 1 / Math.max(_.heightPct / 100, 1e-4),
              _ = (this.props.uploadFile.width * _.xPosPct) / 100,
              _ = (this.props.uploadFile.height * _.yPosPct) / 100,
              _ = (_ * _) / this.props.uploadFile.width,
              _ = (_ * _) / this.props.uploadFile.height,
              _ = -_ * _,
              _ = -_ * _;
            return {
              width: _,
              height: _,
              backgroundPosition: `${_}px ${_}px`,
              backgroundSize: `${100 * _}% ${100 * _}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const _ = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              _ = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              _ = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, _.jsx)(_._, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, _.jsxs)("div", {
                className: (0, _._)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _._)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)("DialogBodyText"),
                    children: (0, _._)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.CropImage,
                    style: {
                      width: _.width,
                      height: _.height,
                    },
                    children: [
                      (0, _.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, _.jsx)(_._, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: _,
                        heightMinPct: _,
                        widthPct: _,
                        heightPct: _,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.CropPreviewGroup,
                    children: [
                      (0, _.jsx)("div", {
                        className: _.CropPreviewLabel,
                        children: (0, _._)("#ImageUpload_CropPreview"),
                      }),
                      (0, _.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    onClick: this.OnCrop,
                    children: (0, _._)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        _([_._], _.prototype, "OnCrop", 1),
          _([_._], _.prototype, "UpdateCrop", 1);
        async function _(_, _, _, _, _, _, _, _, _) {
          return new Promise((_, _) => {
            const _ = _(_);
            if (!_) {
              _("Invalid format provided");
              return;
            }
            const _ = document.createElement("canvas");
            (_.width = _),
              (_.height = _),
              _.getContext("2d")?.drawImage(_, _, _, _, _, 0, 0, _, _),
              _.toBlob((_) => {
                const _ = _.toDataURL(_);
                if (_ !== _._._ && _.startsWith("data:image/png")) {
                  _("Unable to encode into the requested file format");
                  return;
                }
                if (!_) {
                  _("Unable to apply crop into image");
                  return;
                }
                (_.file = (0, _._)(_, _.filename)),
                  (_.width = _),
                  (_.height = _),
                  (_.dataUrl = _),
                  (_.uploadTime = Date.now()),
                  (_.bCropped = !0),
                  _();
              });
          });
        }
        function _(_) {
          switch (_) {
            case _._._:
              return "image/png";
            case _._._:
              return "image/jpeg";
          }
        }
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DragTarget: "_2sUvh2ZpsDAw1xNqgRBELg",
          DragOnTopOfMe: "_1mvpIyLL0-Pd4QMIoRXHtu",
          DescriptionCtn: "_3DQEBNkYGY3hyLFAjhtq7V",
          EventEditorLinkInput: "_25nbuIEmk-BBWxsSvWGG1n",
          DefaultEditor: "NENu2K19GJmLf1Asga-WF",
          ImportHTMLCtn: "_3sVZHF23hli8ijIwtMs8oU",
          ImportHTMLTextArea: "DHbRFUDVAeXGluFH-smoE",
          ImportHTMLConvertButtons: "lnyZaHhcGtBzDU0SMlFd1",
          ImportHTMLCheckBoxLine: "_3R3FNRLSeiOwBgELGjSPbz",
          OptionRow: "_2Y3MLEmGvWMI8BoNZgCllJ",
          TextEditorToolBarContainer: "_2bOpQtX5QAuQxfGhEJ_iYg",
          EmoteOuter: "_1x3UOXJkizqKhkssRfFjSS",
          YouTubeInput: "_3WXTC22teDkm8BMc01ZTLA",
          YouTubePreviewInsertOption: "_6ocliVvrdQxHPu-upv6-s",
          DropDownScroll: "P0-tbY3743fHY8SAzfF6b",
          InsertSpeakerCtn: "_2f-6Yv5h7xjUcZCrepnQhg",
          TitleGroup: "_1ddLhT39tQNuR4ljq6Nfg5",
          AssociateRowCtn: "_2HeY5m9J-kxRVzGn8dAwv5",
          PhotoCtn: "_2-f4CX_EyXfhRUmPdIey4w",
          AboutCtn: "_3hF9cNUOsfV0BkzEaWn7FM",
          PreviewCtn: "_VCRyh7nyN-2xDV6yH6Sg",
          BBCodeEditorInputStyles: "F506h2OVFDcZeXFtyqthY",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BBCode_Toggle: "_3dX8-PpYvSNsGv4k5lvP-R",
          Active: "_2vTzhbuJFb9_vHvquo2L-L",
          BBCode: "_1pH9CKzm5VpicOgzyWpsy_",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Image: "_1po_jxHTSix3Li3w5ZnMBB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Emoticon_Toggle: "Y5J3nttqNZsLax6MbnH-L",
          Active: "YCbwLzK9cJ7QissjKq11n",
          Emoticon: "_2o57_fRPxv5_x6BkjL_cgc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Container: "_2vGr9KsApU0s59_ZsZVxXY",
          SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
          ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
          ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          mentionDialogPosition: "_3isL0ZmZcmPqrXDdNiNSsm",
          mentionDialog: "_1QU3cLCGXCmYTUvjYiqqz6",
          mentionSearchText: "_1xVcZo7UqD1Idiz3hcGoHg",
          suggestOption: "vquL9mspYzz2tBtxrzqw9",
          mentionSearchOption: "_3O0sMruBIaruOmKJLJre-J",
          manyMatches: "_1cweL4uxVeoeKoymO9IuaT",
          selected: "boNOGnexLhWO9Nd0e6-0A",
          nickname: "_2dKJqMZUnKQIInZReBkcRI",
          mentionSearchMatch: "_2_0t_pDYqkDefMC0gDZV8G",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
    },
  ]);
})();
