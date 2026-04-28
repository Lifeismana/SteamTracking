(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [385],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "-ap7mXqcxyhrxn5-5EaM8",
        MediaContainerMM: "_1XVJzaNLt0tgl6Pq5QI2tK",
        ScreenshotThumbnailRow: "COp9MkmgXCc5Y3ytJM70W",
        HilightGrid: "_28DkEkOjvTWfq0sU8m_i32",
        MainMediaCtn: "FATLceF4ncP8L8QnrQTXV",
        VideoThumbnail: "h0pphNa_Fdu4JUevL5V9y",
        ScreenshotDisplayCtn: "_20YpaGv3V_QArQyy15zAJc",
        MainCapsuleWithHover: "_30BxsjSFrUWCBKntWK9hPg",
        MainCapsule: "_2UuNsdHxhT9la27J_j3BFs",
        AppDetails: "ETHkFxrlPF1znTFXFtjtK",
        GameName: "udhKC-bUdlotRKphK3Fn2",
        ShortDesc: "_2e5PhNJqb68XISttHxdVF2",
        ThumbnialClickable: "_3B8X2c5pBF96hapgz03tC4",
        ThumbnailCtn: "rE40TQ86G7cjVETvUYZm3",
        videoPlaying: "_3D99vg3-OLr6XsvxrtzhZa",
        VideoPlayButton: "_2sJlIVAVWZ2I2iA6IO4pOv",
        VideoLargeContainer: "_3mzKCP4FLx7fUVeKrhZ1nn",
        VideoPopupContainers: "_2LqAoKcZgpOtpoj5_URVNJ",
        VideoLarge: "_3zPl6O67BYIiFOlq7FxlJP",
        BackgroundAnimation: "TqTKL7i3GSFlH_ZgPVf1z",
        "ItemFocusAnim-darkerGrey-nocolor": "cm_5koVmrBLuCZgPBCMie",
        "ItemFocusAnim-darkerGrey": "PnVMlqvX5SCAvSN6U3hb9",
        "ItemFocusAnim-darkGreySettings": "_3WN-nRn7q-FIwR4QBoVI_u",
        "ItemFocusAnim-darkGrey": "_3y6HrP9DK-Ttsri2UnKeJ4",
        "ItemFocusAnim-grey": "_3adXp5-v5skt9f-KA1WB_8",
        "ItemFocusAnim-translucent-white-10": "_1981I-jlGsaAi65IqAxEdm",
        "ItemFocusAnim-translucent-white-20": "_1ukTwVbofcJj1v0AVkiuc3",
        "ItemFocusAnimBorder-darkGrey": "_2LVjWAaAuOqf5tKQMJ99XC",
        "ItemFocusAnim-green": "_1VtcP5LWUyNvo0_5bYQYEx",
        focusAnimation: "n40ksCk7VHLZG8f1e517V",
        hoverAnimation: "YiXS6irpqMezE03xkO2Un",
      };
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ } = _,
          { data: _ } = (0, _._)(_),
          _ = (0, _.useMemo)(() => {
            if (!_) return [];
            const _ =
              _.categories?.supported_player_categoryids?.slice(0, 1) || [];
            return (
              _.categories?.feature_categoryids?.forEach((_) => _.push(_)),
              _.categories?.controller_categoryids?.forEach((_) => _.push(_)),
              _.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((_) => _.push(_)),
              _
            );
          }, [_]);
        return _ && 0 != _.length
          ? (0, _.jsx)("div", {
              className: (0, _._)(_().SaleTagBlockCtn, "SaleTagBlockCtn"),
              children: Boolean(_?.length > 0)
                ? (0, _.jsx)("div", {
                    className: (0, _._)(_().TagBox, _().Categories),
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          categoryID: _,
                        },
                        "cat_" + _,
                      ),
                    ),
                  })
                : (0, _.jsx)("div", {
                    children: (0, _._)("#Broadcast_None"),
                  }),
            })
          : null;
      }
      class _ {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, _._)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return _.g_Self || (_.g_Self = new _()), _.g_Self;
        }
      }
      function _(_) {
        const { categoryID: _ } = _,
          _ = _.Get().m_rgCategories.find((_) => _.categoryid == _);
        return _
          ? (0, _.jsx)("div", {
              className: _().Category,
              children: (0, _.jsx)(_._, {
                toolTipContent: _.name,
                children: (0, _.jsx)("div", {
                  className: _().CategoryIcon,
                  style: {
                    background: `url(${_._.STORE_CDN_URL}/public/images/${_.image_path}) no-repeat center center/cover`,
                  },
                }),
              }),
            })
          : null;
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _, bPopOutTrailerPlayback: _ } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(),
          _ = _?.highlights?.filter((_) => !_ || _.all_ages),
          _ = _ && _?.length > 0 ? _[0] : void 0,
          _ = _.useCallback(() => {
            _ && (_ ? _(!0) : _((_) => !_));
          }, [_, _]);
        if (!_)
          return (0, _.jsx)("div", {
            className: (0, _._)(_().HilightGrid, _().MediaContainer),
            children: (0, _.jsx)(_._, {
              size: "medium",
            }),
          });
        const _ = _
          ? (0, _.jsx)(_, {
              trailer: _,
              bPlayVideo: _,
              fnTogglePlayTrailer: _,
            })
          : null;
        return _ ||
          (_ && _.all_ages_screenshots && _.all_ages_screenshots.length > 0)
          ? (0, _.jsxs)("div", {
              className: (0, _._)(_().HilightGrid, _().MediaContainer),
              children: [
                (0, _.jsx)(_, {
                  elFeaturedInCenter: _,
                  storeItemScreenshots: _,
                  trailer: _,
                  _: _,
                  name: _.name || "",
                }),
                Boolean(_)
                  ? (0, _.jsx)(_, {
                      _: _,
                      bShowModal: _,
                      hideModal: () => _(!1),
                    })
                  : (0, _.jsx)(_, {
                      name: _.name || "",
                      trailer: _,
                      bPlayVideo: _,
                      fnTogglePlayTrailer: _,
                      bControls: !0,
                    }),
              ],
            })
          : null;
      }
      function _(_) {
        const {
            _: _,
            fnOnClickButton: _,
            bLowBandwidthMode: _,
            bUseAssetWithoutOverride: _,
          } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(_);
        return void 0 !== !_ && _ && _
          ? (0, _.jsx)("div", {
              className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
              children: (0, _.jsx)(_, {
                _: _,
                elFeaturedInCenter: (0, _.jsx)(_, {
                  _: _,
                  bUseAssetWithoutOverride: Boolean(_),
                  fnOnClickButton: _,
                }),
                trailer: _ && _.length > 0 ? _[0] : void 0,
                storeItemScreenshots: _,
                featureElementclassName: _().MainImage,
                bUseTrailerAsFirstThumb: !_,
                bNoScreenShotModals: !0,
                name: _.name || "",
              }),
            })
          : (0, _.jsx)("div", {
              className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
              children: (0, _.jsx)(_._, {
                size: "medium",
              }),
            });
      }
      function _(_) {
        const {
            elFeaturedInCenter: _,
            _: _,
            name: _,
            trailer: _,
            storeItemScreenshots: _,
            featureElementclassName: _,
            bUseTrailerAsFirstThumb: _,
            bNoScreenShotModals: _,
          } = _,
          [_, _] = _.useState(void 0),
          [_, _] = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(0);
        if (!_) return null;
        const _ = _ || (void 0 !== _ && -1 !== _) ? _ : 0,
          _ = new Array(),
          _ = new Array();
        _ &&
          _ &&
          (_.push(
            (0, _.jsx)(
              _,
              {
                trailer: _,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => _(0),
                onMouseLeave: () => {
                  const _ = _.current;
                  _ && _(_.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          _.push(
            (0, _.jsx)(
              _,
              {
                ref: _,
                name: _,
                trailer: _,
                bControls: !1,
                bPlayVideo: !0,
                startTime: _,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const _ = (
          _ ? _?.all_ages_screenshots : _?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (_?.forEach((_, _) => {
            if ((_ || _ > 0) && _.length < 3) {
              const _ = (0, _._)(_, "thumb"),
                _ = (0, _._)(_, "600x338"),
                _ = _.length;
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    className: (0, _._)({
                      [_().ThumbnailCtn]: !0,
                      [_().ThumbnialClickable]: !_,
                    }),
                    children: (0, _.jsx)("img", {
                      src: _,
                      onClick: _
                        ? void 0
                        : () => {
                            const _ = [...(_ || [])];
                            if (_.length > 0) {
                              for (let _ = 0; _ < _; ++_) {
                                const _ = _.shift();
                                _ && _.push(_);
                              }
                              _(_.map((_) => (0, _._)(_, "full")));
                            }
                          },
                      onMouseEnter: () => _(_),
                    }),
                  },
                  _ + "_small_" + _,
                ),
              ),
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      className: _().ScreenshotDisplayCtn,
                      children: (0, _.jsx)("img", {
                        src: _,
                      }),
                    },
                    _ + "_big_" + _,
                  ),
                );
            }
          }),
          !(_ || (_ && 0 != _.length)))
        )
          return null;
        const _ = _.slice(0, 3),
          _ = Array.from({
            length: Math.max(0, 3 - _.length),
          });
        return (0, _.jsxs)(_.Fragment, {
          children: [
            _,
            (0, _.jsx)("div", {
              className: _ || _().MainMediaCtn,
              children: Boolean(_ && (-1 === _ || void 0 === _))
                ? (0, _.jsx)(_.Fragment, {
                    children: _,
                  })
                : (0, _.jsx)(_.Fragment, {
                    children: void 0 !== _ && _[_],
                  }),
            }),
            Boolean(_.length > 0) &&
              (0, _.jsxs)("div", {
                className: _().ScreenshotThumbnailRow,
                onMouseLeave: () => _(-1),
                children: [
                  _,
                  _.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().ThumbnailCtn,
                      },
                      `app_${(0, _._)(_)}_${_}`,
                    ),
                  ),
                ],
              }),
          ],
        });
      }
      function _(_) {
        const {
          ref: _,
          name: _,
          trailer: _,
          bControls: _,
          bPlayVideo: _,
          fnTogglePlayTrailer: _,
          startTime: _,
        } = _;
        if (
          ((0, _.useEffect)(() => {
            const _ = _?.current;
            if (null != _ && _ > 0 && _) {
              const _ = () => {
                _.currentTime = _ || 0;
              };
              return (
                _.addEventListener("loadedmetadata", _),
                () => {
                  _.removeEventListener("loadedmetadata", _);
                }
              );
            }
          }, [_, _]),
          !_)
        )
          return null;
        let _ = (0, _._)(_().VideoLargeContainer, _ && _().videoPlaying);
        return (0, _.jsxs)("div", {
          className: _,
          onClick: _,
          children: [
            (0, _.jsx)(_._, {
              name: _,
              trailerCategory: _.trailer_category,
              trailerDisplay: 1,
              mouseOver: !1,
            }),
            Boolean(_ && _.microtrailer) &&
              (0, _.jsx)("video", {
                className: _().VideoLarge,
                ref: _,
                controls: _,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != _ && _ > 0 ? void 0 : _.screenshot_full,
                children: _.microtrailer?.map((_) =>
                  _._.IN_CLIENT && "video/mp4" == _.type
                    ? null
                    : (0, _.jsx)(
                        "source",
                        {
                          src: (0, _._)(_, _.filename || ""),
                          type: _.type,
                        },
                        _.filename,
                      ),
                ),
              }),
            _ &&
              (0, _.jsx)("div", {
                onClick: _,
                children: (0, _.jsx)(_.sED, {}),
              }),
          ],
        });
      }
      function _(_) {
        const { _: _, bShowModal: _, trailerBaseID: _, hideModal: _ } = _,
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(_),
          _ = (0, _.useMemo)(() => {
            if (_ && 0 != _.length) {
              if (_) {
                const _ = _.find((_) => _.trailer_base_id == _);
                if (_) return _;
              }
              return _[0];
            }
          }, [_, _]),
          _ = _.useId(),
          _ = _.useId();
        if (!_ || !_.adaptive_trailers) return null;
        const { rgDashTrailers: _, rgHlsTrailers: _ } = (0, _._)(_);
        return 0 == _?.length
          ? null
          : (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsxs)(_._, {
                "aria-labelledby": (0, _._)(_, _),
                bAllowFullSize: !0,
                bOKDisabled: !0,
                closeModal: _,
                children: [
                  (0, _.jsx)("div", {
                    className: _().VideoPopupContainers,
                    children: (0, _.jsx)(_._, {
                      dashManifests: _ || [],
                      hlsManifest: (_.length > 0 && _?.[0]) || "",
                      screenshot: (0, _._)(_),
                      altText: _.trailer_name,
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                  (0, _.jsx)("div", {
                    _: _,
                    style: {
                      display: "none",
                    },
                    children: _?.name || "",
                  }),
                  (0, _.jsx)("div", {
                    _: _,
                    style: {
                      display: "none",
                    },
                    children: _.trailer_name,
                  }),
                ],
              }),
            });
      }
      function _(_) {
        const {
          trailer: _,
          fnTogglePlayTrailer: _,
          bPlayVideo: _,
          onMouseEnter: _,
          onMouseLeave: _,
        } = _;
        return (0, _.jsxs)("div", {
          className: (0, _._)({
            [_().VideoThumbnail]: !_,
            [_().videoPlaying]: _,
            [_().ThumbnailCtn]: !0,
          }),
          onClick: _,
          onMouseEnter: _,
          onMouseLeave: _,
          children: [
            (0, _.jsx)("img", {
              src: (0, _._)(_),
            }),
            (0, _.jsx)("div", {
              className: _().VideoPlayButton,
              children: (0, _.jsx)(_.jGG, {}),
            }),
          ],
        });
      }
      function _(_) {
        const { _: _, fnOnClickButton: _, bUseAssetWithoutOverride: _ } = _,
          [_, _] = (0, _._)(),
          { data: _ } = (0, _._)(_, _),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!_ || !_ || !_) return null;
        const _ = (0, _._)(_, "main_capsule");
        return (0, _.jsxs)(_._, {
          focusable: !0,
          noFocusRing: !0,
          className: _().MainCapsuleWithHover,
          ..._,
          onActivate: _,
          children: [
            (0, _.jsx)("img", {
              className: _().MainCapsule,
              src: _,
            }),
            (0, _.jsxs)("div", {
              className: _().AppDetails,
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_().GameName),
                  children: _.name || "",
                }),
                (0, _.jsxs)("div", {
                  className: _().ShortDesc,
                  children: [_.short_description, " "],
                }),
                (0, _.jsx)(_._, {
                  rgTagIDs: _ ? _.slice(0, 10).map((_) => _.tagid || 0) : [],
                  instanceNum: 0,
                  bLargeText: !0,
                  bHideTitle: !0,
                  bNoStoreLinks: !0,
                }),
                (0, _.jsx)(_, {
                  _: _,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
