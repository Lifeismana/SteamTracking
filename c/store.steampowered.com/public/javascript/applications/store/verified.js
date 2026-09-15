(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [86991],
  {
    chunkid: (module) => {
      module.exports = {
        Ctn: "_3sPRGG8vL4sM6N-8FZo5fT",
        Link: "-YNVdnBAoV2HQCkuR8C1h",
        BackgroundImageCtn: "_31Bm2h6tK_J4K2yYHTtttM",
        BackgroundImageBlurCtn: "_1LzeWsFv8n7BMFyJ1c0bF",
        Headline: "qQs0819GK5nJMJhEfDfqO",
        Verified: "_1DN1jmbJKCQol4bLgow8xK",
        Subtitle: "_2Tf8QYNJrsywiXvKyV2Sm6",
        DeviceFullWidthShadow: "_33ittd22VgVN6fUvIAgkqu",
        VideoDisclaimer: "_2FW4jsZDS7ltbcDrOQStiW",
        DeviceWrapper: "_3DCMQY1PEeYS2E7r8NJXKQ",
        CapsuleWrapper: "_1JhQMb3X6rKYyPqZWOZG5w",
        HardwareBannerCtn: "_2L4eqs1UZ1QEjRC1S8qiJA",
        TrailerCtn: "_3LbKJsBRhn7hEnOSlKZd64",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { strImageToken: _, language: _, strAltText: _ } = _,
          _ = (0, _._)(_, _);
        return _
          ? "string" == typeof _
            ? (0, _.jsx)("img", {
                src: _,
                alt: _,
              })
            : (0, _.jsx)(_._, {
                rgSources: _,
                strAltText: _,
              })
          : null;
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
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      function _(_) {
        if (_) {
          if ("appid" in _) return "app";
          if ("bundleid" in _) return "bundle";
          if ("packageid" in _) return "sub";
        }
      }
      function _(_) {
        const {
            _: _,
            hoverClassName: _,
            fnGetIDOverride: _,
            fnHoverState: _,
            disableScreenshots: _,
            children: _,
          } = _,
          _ = _.useRef(null),
          _ = _.useCallback(
            (_) => {
              const _ = _(_);
              _ &&
                (_ && _(!0),
                window.GameHover &&
                  (_.current &&
                    _ &&
                    (_.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(_ ? _() : _.current, _, "global_hover", {
                    type: _,
                    _: (0, _._)(_)._,
                    _: 1,
                  })));
            },
            [_, _, _, _],
          ),
          _ = _.useCallback(
            (_) => {
              _(_) &&
                (_ && _.relatedTarget && _(!1),
                window.HideGameHover &&
                  window.HideGameHover(_ ? _() : _.current, _, "global_hover"));
            },
            [_, _, _],
          );
        return (0, _.jsx)("div", {
          ref: _,
          className: _,
          onMouseEnter: _,
          onMouseLeave: _,
          onFocus: _,
          onBlur: _,
          children: _,
        });
      }
      function _(_) {
        const {
            _: _,
            strExtraParams: _,
            fnOnClickOverride: _,
            strOverrideURL: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)(
            _ ||
              (_ && "creatorid" in _
                ? (0, _._)(
                    `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                    _,
                    _,
                  )
                : (0, _._)(
                    `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                    _,
                    _,
                  )),
          );
        return (0, _.jsx)(_, {
          ..._,
          children: (0, _.jsx)(_._, {
            className: _.className,
            href: _ ? void 0 : _,
            target: _._.IN_CLIENT || _ ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: _,
            children: _.children,
          }),
        });
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
        _ = __webpack_require__("chunkid");
      const _ = {
          name: "trailerPrefs",
          options: {
            path: "/",
            secure: !0,
            maxAge: 2592e6,
          },
          preferenceControls: {
            isTechnicallyNecessary: !0,
          },
        },
        _ = {
          flVolume: 0.8,
          bMuted: !0,
        };
      function _(_) {
        !(function (_) {
          return _.flVolume === _.flVolume && _.bMuted === _.bMuted;
        })(_) && 0 != Object.keys(_).length
          ? (0, _._)(_, JSON.stringify(_))
          : (0, _._)(_);
      }
      function _(_) {
        let { children: _ } = _;
        const [_, _] = (0, _.useState)(() =>
          (function () {
            try {
              const _ = (0, _._)(_);
              if (!_) return _;
              const _ = JSON.parse(_);
              return {
                flVolume:
                  "number" == typeof _.flVolume ? _.flVolume : _.flVolume,
                bMuted: "boolean" == typeof _.bMuted ? _.bMuted : _.bMuted,
              };
            } catch (_) {
              return _;
            }
          })(),
        );
        return (
          (0, _.useEffect)(() => {
            _(_);
          }, [_]),
          (0, _.jsx)(_._, {
            playerVolume: _.flVolume,
            setPlayerVolume: (_) =>
              _((_) => ({
                ..._,
                flVolume: _,
              })),
            audioMuted: _.bMuted,
            setAudioMuted: (_) =>
              _((_) => ({
                ..._,
                bMuted: _,
              })),
            children: _,
          })
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            bPurchaseOptionsExpanded: _,
            fnCollapseOptions: _,
            bPreferAssetWithoutOverride: _,
          } = _,
          { data: _ } = (0, _._)(_),
          _ = (0, _.useRef)(null);
        if (!_) return null;
        const _ = _.purchase_options;
        return _
          ? (0, _.jsx)(_._, {
              nodeRef: _,
              _: _,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 2e3,
              classNames: {
                enterActive: _().Expanding,
                enterDone: _().Expanded,
                exit: _().Expanded,
                exitActive: _().Collapsing,
              },
              children: (0, _.jsxs)("div", {
                ref: _,
                className: _().BundleContentsCtnTransition,
                children: [
                  (0, _.jsx)("div", {
                    className: _().BundleContentsCtn,
                    children: _.filter((_) => Boolean(_.packageid)).map((_) =>
                      (0, _.jsx)(
                        "div",
                        {
                          className: _().BundleContentItem,
                          children: (0, _.jsx)(_._, {
                            _: _.packageid || 0,
                            type: "sub",
                            bForceSmallCapsuleArt: !0,
                            bPreferAssetWithoutOverride: _,
                          }),
                        },
                        "purchaseitem_" + (0, _._)(_) + "_" + _.packageid,
                      ),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    onClick: _,
                    className: _().BundleShowButton,
                    children: (0, _.jsx)("button", {
                      className: _().ShowContentsButton,
                      children: _._.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const { _: _, type: _ } = _,
          _ = (0, _._)(_, _),
          {
            bHidePrice: _,
            bShowDemoButton: _,
            bPreferDemoStorePage: _,
            bShowPurchaseOptionsButton: _,
            bUseSubscriptionLayout: _,
            bPreferAssetWithoutOverride: _,
          } = _,
          [_, _] = _.useState(!1),
          _ = () => _(!_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(_),
          _ = (0, _._)();
        if (!_ || !_)
          return (0, _.jsx)(_._, {
            capsules_per_row: [1],
            is_expanded_display: !0,
          });
        const _ = (0, _._)(_),
          _ = _.item_type == _._._;
        return (0, _.jsx)("div", {
          className: (0, _._)(
            _().StoreSaleWidgetContainer,
            _().LibraryAssetExpandedDisplay,
            "LibraryAssetExpandedDisplay",
          ),
          children: (0, _.jsxs)(_._, {
            appid: _ ? _.appid : void 0,
            children: [
              (0, _.jsxs)("div", {
                className: _().StoreSaleWidgetLibraryAssetExtendedTop,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().StoreSaleWidgetLeft),
                    children: (0, _.jsx)(_._, {
                      _: _,
                      bPreferDemoStorePage: _,
                      children: (0, _.jsxs)("div", {
                        className: _().StoreSaleWidgetImage,
                        children: [
                          (0, _.jsx)(_._, {
                            appids: _,
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                            imageType: "library",
                            bPreferAssetWithoutOverride: _,
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().StoreSaleWidgetCrossCenterRight,
                    children: [
                      _ &&
                        (0, _.jsx)(_._, {
                          _: _,
                          classOverride: (0, _._)(
                            _().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: _,
                        }),
                      (0, _.jsxs)("div", {
                        className: _().StoreSaleWidgetContents,
                        children: [
                          (0, _.jsxs)("div", {
                            className: _().StoreSaleWidgetCenter,
                            children: [
                              _.short_description &&
                                _.short_description.length > 0 &&
                                (0, _.jsx)("div", {
                                  className: (0, _._)(
                                    _().StoreSaleWidgetShortDesc,
                                    "StoreSaleWidgetShortDesc",
                                  ),
                                  children: _.short_description,
                                }),
                              (0, _.jsx)(_._, {
                                rgTagIDs: _
                                  ? _.slice(0, 10).map((_) => _.tagid || 0)
                                  : [],
                                instanceNum: 0,
                                bNoStoreLinks: !1,
                              }),
                              (0, _.jsxs)("div", {
                                className: _().StoreMetaDataCtn,
                                children: [
                                  (0, _.jsx)("div", {
                                    className: _().StoreSaleItemRelease,
                                    children: _._.LocalizeReact(
                                      "#Sale_ReleaseDate",
                                      (0, _.jsx)("span", {
                                        children: (0, _._)(_),
                                      }),
                                    ),
                                  }),
                                  _.developers &&
                                    _.developers.length > 0 &&
                                    (0, _.jsxs)("div", {
                                      className: _().StoreSaleItemDev,
                                      children: [
                                        _._.Localize(
                                          "#CreatorHome_DevelopedBy",
                                        ),
                                        (0, _.jsx)("span", {
                                          children: _.developers[0].name,
                                        }),
                                      ],
                                    }),
                                  _.publishers &&
                                    _.publishers.length > 0 &&
                                    (0, _.jsxs)("div", {
                                      className: _().StoreSaleItemDev,
                                      children: [
                                        _._.Localize(
                                          "#CreatorHome_PublishedBy",
                                        ),
                                        (0, _.jsx)("span", {
                                          children: _.publishers[0].name,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: _().StoreSaleLibraryAssetWidgetRight,
                            children: (0, _.jsx)(_._, {
                              _: _,
                              bPopOutTrailerPlayback: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().StoreSaleItemReview,
                        children: (0, _.jsx)(_._, {
                          _: _,
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: _().CapsuleBottomBar,
                        children:
                          _ && _
                            ? (0, _.jsx)(_._, {
                                appid: _.appid,
                                bIsMuted: !1,
                              })
                            : (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)(_._, {
                                    _: _,
                                  }),
                                  (0, _.jsx)(_._, {
                                    _: _,
                                    bShowDemoButton: _,
                                    bHidePrice: _,
                                    bShowPurchaseOptionsButton: _,
                                    fnOnPurchaseOptionsClick: _,
                                    bHideWishlistButton: _.is_coming_soon,
                                  }),
                                ],
                              }),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().StoreSaleWidgetBgTint,
                        children: [
                          (0, _.jsx)(_._, {
                            _: _,
                            bPreferAssetWithoutOverride: _,
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                _: _,
                bPurchaseOptionsExpanded: _,
                fnCollapseOptions: _,
                bPreferAssetWithoutOverride: _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            rgSources: _,
            onIncrementalError: _,
            onError: _,
            strAltText: _,
            ref: _,
            ..._
          } = _,
          _ = _.useRef(null),
          [_, _] = _.useState(0),
          [_, _] = _.useState(0);
        _.useImperativeHandle(
          _,
          () => ({
            imgRef: _,
            nSourceIndex: _,
            nSourceLength: _.length,
          }),
          [_, _, _],
        );
        const _ = _.useMemo(() => JSON.stringify(_), [_]);
        _.useEffect(() => {
          _(0), _((_) => _ + 1);
        }, [_]);
        const _ = _.useMemo(() => {
            let _ = "";
            return (
              _ && _.length > _ && (_ = _[_]),
              _ ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  _,
                  _,
                ),
                (_ =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              _
            );
          }, [_, _, _]),
          _ = _.useCallback(
            (_) => {
              __webpack_require__?.(_, _[_], _);
              const _ = _ + 1;
              _ >= _.length && _ && _(_), _ < _.length && _(_);
            },
            [_, _, _, _],
          );
        return (0, _.jsx)(
          "img",
          {
            ref: _,
            ..._,
            src: _,
            onError: _,
            alt: _,
          },
          _,
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        return (0, _._)()
          ? (0, _.jsx)(_._, {
              ..._,
            })
          : (0, _._)()
            ? (0, _.jsx)(_._, {
                ..._,
                bShowReviewSummary: !0,
              })
            : (0, _.jsx)(_._, {
                ..._,
              });
      }
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
        _ = __webpack_require__._(_);
      function _(_) {
        const { appid: _, strUrlOverride: _ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return (
          (0, _.useEffect)(() => {
            if (_) {
              const _ = `${_._.STORE_BASE_URL}${_.store_url_path}`.replace(
                "/app/",
                _ ?? "/verified/",
              );
              _ != window.location.href &&
                window.history.replaceState({}, "", _);
            }
          }, [_, _]),
          _ && _
            ? (0, _.jsx)(_._, {
                method: "verifiedprogram",
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    _: _,
                  }),
                }),
              })
            : null
        );
      }
      function _(_) {
        const { _: _ } = _,
          { data: _ } = (0, _._)(_),
          _ = `${_._.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)("div", {
              className: _().Headline,
              children: _._.LocalizeReact(
                "#VerifiedProgram_DeckTitle",
                _?.name,
                (0, _.jsxs)("span", {
                  className: _().Verified,
                  children: [
                    (0, _.jsx)("img", {
                      src: _,
                      alt: _._.Localize("#VerifiedProgram_DeckAlt"),
                    }),
                    _._.Localize("#VerifiedProgram_DeckTitle_Verified"),
                  ],
                }),
              ),
            }),
            (0, _.jsx)("div", {
              className: _().Subtitle,
              children: _._.LocalizeReact(
                "#VerifiedProgram_DeckSubTitle",
                (0, _.jsx)(_._, {
                  className: _().Link,
                  href: `${_._.STORE_BASE_URL}greatondeck`,
                  children: _._.Localize("#VerifiedProgram_GreatOnDeck"),
                }),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const { _: _ } = _;
        return (0, _.jsxs)("div", {
          className: _().Ctn,
          children: [
            (0, _.jsx)(_, {
              _: _,
            }),
            (0, _.jsxs)("div", {
              className: (0, _._)("page_content"),
              children: [
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const { _: _ } = _,
          { data: _ } = (0, _._)(_);
        if (!_) return null;
        const _ = (0, _._)(_, "library_hero_2x") ?? (0, _._)(_, "library_hero");
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)("div", {
              className: _().BackgroundImageCtn,
              children: (0, _.jsx)("img", {
                src: _,
                alt: "",
              }),
            }),
            (0, _.jsx)("div", {
              className: _().BackgroundImageBlurCtn,
              children: (0, _.jsx)("img", {
                src: _,
                alt: "",
              }),
            }),
          ],
        });
      }
      function _(_) {
        const { _: _ } = _;
        return (0, _.jsx)("div", {
          className: _().CapsuleWrapper,
          children: (0, _.jsx)(_, {
            _: "appid" in _ ? _.appid : 0,
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function _(_) {
        const _ = (0, _._)(
          `${_._.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
          "banner",
        );
        return (0, _.jsx)(_._, {
          href: _,
          className: (0, _._)(_().HardwareBannerCtn),
          children: (0, _.jsx)(_, {}),
        });
      }
      function _(_) {
        const { _: _ } = _,
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(_);
        if (!_) return null;
        const _ = `${_._.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
          { rgDashTrailers: _, rgHlsTrailers: _ } = (0, _._)(_);
        return (0, _.jsxs)("div", {
          className: _().DeviceFullWidthShadow,
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(_().DeviceWrapper),
              children: [
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)("div", {
                    className: _().TrailerCtn,
                    children: (0, _.jsx)(_._, {
                      dashManifests: _,
                      hlsManifest: _[0],
                      screenshot:
                        _.screenshot_full ?? _.screenshot_medium ?? "",
                      altText: _?.name ?? "",
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                }),
                (0, _.jsx)("img", {
                  src: _,
                  alt: _._.Localize("#VerifiedProgram_DeckDeviceAlt"),
                }),
              ],
            }),
            (0, _.jsx)("div", {
              className: _().VideoDisclaimer,
              children: _._.Localize("#VerifiedProgram_DeckDisclaimer"),
            }),
          ],
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _.sfN)(_._.LANGUAGE);
        return (0, _.jsx)(_._, {
          language: _,
          strAltText: _._.Localize("#VerifiedProgram_DeckShopBannerAlt"),
          strImageToken: _
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
      function _(_) {
        const {
          match: {
            params: { appid: _ },
          },
        } = _;
        return (0, _.jsx)(_, {
          appid: Number.parseInt(_),
        });
      }
    },
  },
]);
