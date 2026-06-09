(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7262],
  {
    chunkid: (module) => {
      module.exports = {
        CornerSash: "_1tKrXofY3mdVjHya13I1Ks",
      };
    },
    chunkid: (module) => {
      module.exports = {
        bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    chunkid: (module) => {
      module.exports = {
        CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ErrorDiv: "_2FXMECiK-1oag3HieTiKJW",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
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
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            _: _,
            imageType: _,
            bPreferAssetWithoutOverride: _,
            strAdditionalClassName: _,
          } = _,
          { storeItemAsset: _, storeItemDefaultInfo: _ } = (0, _._)(_, _, _);
        if ("library" === _ || "vertical" == _)
          return (0, _.jsx)(_._, {
            _: _,
            bPreferAssetWithoutOverride: _,
          });
        let _ = "";
        if ("main" === _) _ = _().MainCapsuleImageContainer;
        else _ = _().HeaderCapsuleImageContainer;
        if (void 0 === _ || !_)
          return (0, _.jsx)("div", {
            className: (0, _._)(_, "CapsuleImageCtn", _),
          });
        if (null == _) return null;
        let _ = (0, _._)(_, "header" === _);
        return (0, _.jsx)("div", {
          className: (0, _._)(_, "CapsuleImageCtn", _),
          children: (0, _.jsx)(_._, {
            lazyLoad: !0,
            srcs: _,
            className: (0, _._)(_().CapsuleImage),
            alt: _.name,
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
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _ = [];
        return (
          _ &&
            (function (_, _, _) {
              const _ = (0, _._)(_, "header_2x") ?? (0, _._)(_, "header"),
                _ =
                  (0, _._)(_, "main_capsule_2x") ?? (0, _._)(_, "main_capsule");
              _ ? _.push(_, _) : _.push(_, _);
            })(_, _, _),
          __webpack_require__.filter((_) => !!_)
        );
      }
      function _(_, _) {
        return {
          strStoreVerticalURL: (0, _._)(_, "hero_capsule"),
          strLibraryVerticalURL: (0, _._)(_, "library_capsule"),
        };
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { _: _, bPreferLibrary: _, bPreferAssetWithoutOverride: _ } = _,
          { storeItemDefaultInfo: _, storeItemAsset: _ } = (0, _._)(
            _,
            "vertical",
            _,
          ),
          [_, _] = _.useState(0);
        if (!_ || !_)
          return (0, _.jsx)("div", {
            className: _().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = (0, _._)(
          _,
          _,
        );
        if (_ && (!_ || !_))
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().HeroCapsuleImageContainer,
              "HeroCapsuleImageContainer",
            ),
            children: [
              (0, _.jsx)("img", {
                src: _,
                className: _().CapsuleImage,
                alt: _.name,
              }),
              Boolean(_.type == _._._) &&
                (0, _.jsx)("img", {
                  className: _().CornerSash,
                  src: `${_._.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                  alt: "DLC",
                }),
            ],
          });
        if (_)
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().LibraryFallbackAssetImageContainer,
              _().VerticalCapsule,
              _ ? _().ForceLibrarySizing : "",
            ),
            children: [
              (0, _.jsx)("div", {
                className: _().FallbackBackground,
                style: {
                  backgroundImage: `url(${_})`,
                },
              }),
              (0, _.jsx)("img", {
                src: _,
                className: _().CapsuleImage,
                alt: _.name,
              }),
            ],
          });
        const _ = (0, _._)(_, !0),
          _ = _.length - 1,
          _ = (_) => {
            const _ = _.indexOf(_);
            _ >= _ && _ < _.length - 1 && _(_ + 1);
          };
        if (_ < _.length) {
          const _ = _[_];
          return (0, _.jsxs)("div", {
            className: _().LibraryFallbackAssetImageContainer,
            children: [
              (0, _.jsx)("div", {
                className: _().FallbackBackground,
                style: {
                  backgroundImage: `url(${_})`,
                },
              }),
              (0, _.jsx)(_._, {
                lazyLoad: !0,
                srcs: _,
                className: _().CapsuleImage,
                alt: _.name,
                onImageError: _,
              }),
            ],
          });
        }
        return (0, _.jsx)("div", {
          className: _().HeroCapsuleImageContainer,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid"));
      function _() {
        return (0, _._)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const _ = await (async function () {
              let _ = (0, _._)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, _._)(_)) {
                const _ = new Set();
                return (
                  _.filtered.forEach((_) => {
                    _.appid && _.add(_.appid);
                  }),
                  Array.from(_)
                );
              }
              return [];
            })();
            return new Set(_);
          },
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appids: _, hide_status_banners: _, show_early_access: _ } = _,
          { data: _ } = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = _.length > 0 && _.every((_) => _ && _.has(_)),
          _ = _.length > 0 && _.every((_) => _ && _.has(_)),
          _ = (function (_) {
            const { data: _ } = _(),
              [_, _] = (0, _.useState)(!1),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (!_ || 0 == _.length || !_) return _(!1);
                (async () => {
                  const _ = await Promise.all(
                    _.filter((_) => !!_).map((_) =>
                      _.fetchQuery(
                        (0, _._)(_, {
                          appid: _,
                        }),
                      ),
                    ),
                  );
                  _(
                    __webpack_require__.some(
                      (_) =>
                        (_ && _.appid && _.has(_.appid)) ||
                        (_?.related_items?.parent_appid &&
                          _.has(_.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [_, _, _, _]),
              _
            );
          })(_),
          _ = _ && !_,
          _ = _ && !_,
          _ = !_ && _;
        return (0, _.jsxs)("div", {
          className: (0, _._)(_().CapsuleDecorators, "CapsuleDecorators"),
          children: [
            _ &&
              (0, _.jsxs)("span", {
                className: (0, _._)(_().Banner, _().Blue),
                children: [
                  (0, _.jsx)("img", {
                    src: (0, _._)(_),
                    className: _().LinesImg,
                    alt: _._.Localize("#Sale_InLibrary"),
                  }),
                  _._.Localize("#Sale_InLibrary"),
                ],
              }),
            _ &&
              (0, _.jsxs)("span", {
                className: _().Banner,
                children: [
                  (0, _.jsx)(_.qnF, {
                    className: _().LinesImg,
                  }),
                  _._.Localize("#Sale_OnWishlist"),
                ],
              }),
            _ &&
              !_ &&
              !_ &&
              (0, _.jsx)(_, {
                appids: _,
              }),
            _ && (0, _.jsx)(_._, {}),
          ],
        });
      }
      function _(_) {
        const { appids: _ } = _,
          _ = (function (_) {
            const [_, _] = (0, _.useState)(!1),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (!_ || 0 == _.length) return __webpack_require__(!1);
                (async () => {
                  const _ = await Promise.all(
                    _.map((_) =>
                      _.fetchQuery(
                        (0, _._)(_, {
                          appid: _,
                        }),
                      ),
                    ),
                  );
                  __webpack_require__(_.some((_) => _ && _.is_early_access));
                })();
              }, [_, _, _]),
              _
            );
          })(_);
        return _
          ? (0, _.jsx)("span", {
              className: (0, _._)(_().Banner, _().EarlyAccessGradient),
              children: _._.Localize("#Sale_EarlyAccess"),
            })
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _ = !1) {
        const { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_, _);
        let _;
        _ &&
          1 == _.included_appids?.length &&
          !(function (_, _) {
            if (!_) return !1;
            switch (_) {
              case "header":
                return !!_.header;
              case "main":
                return !!_.main_capsule;
              case "vertical":
              case "library":
                return !!_.hero_capsule || !!_.library_capsule;
              default:
                return (0, _._)(_, `Unhandled imageType: ${_}`), !1;
            }
          })(_, _) &&
          _.item_type &&
          [_._._, _._._].includes(_.item_type) &&
          (_ = {
            appid: _.included_appids[0],
          });
        const { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_, _),
          _ = _?.visible ? _ : _;
        return {
          storeItemAsset: _?.visible ? _ : _,
          storeItemDefaultInfo: _,
        };
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        accountid;
        steamid;
        appid;
        hub_popular;
        popular;
        relay_broadcast_id;
        rowversion;
        thumbnail_http_address;
        nAppIDVOD;
        title = void 0;
        viewer_count = void 0;
        whitelist_rank;
        gamedata_subtitle = void 0;
        store_title;
        left_panel;
        right_panel;
        snr;
        broadcast_chat_visibility;
        default_selection_priority = _.k_eGeneral;
        current_selection_priority = _.k_eGeneral;
      }
      (0, _._)([_._], _.prototype, "title", void 0),
        (0, _._)([_._], _.prototype, "viewer_count", void 0),
        (0, _._)([_._], _.prototype, "gamedata_subtitle", void 0),
        (0, _._)([_._], _.prototype, "current_selection_priority", void 0);
      const _ = "primary",
        _ = "featured",
        _ = "default_featured";
      var _;
      function _(_) {
        switch (_) {
          case _:
            return _.k_ePrimary;
          case _:
            return _.k_eFeatured;
          case _:
            return _.k_eDefaultFeatured;
          default:
            return _.k_eGeneral;
        }
      }
      function _(_) {
        const _ = _;
        return (
          !!(
            _ &&
            "number" == typeof _.success &&
            _.filtered &&
            Array.isArray(_.filtered) &&
            _.broadcast_chat_visibility
          ) &&
          (0 == _.filtered.length || "string" == typeof _.filtered[0].accountid)
        );
      }
      !(function (_) {
        (_[(_.k_ePrimary = 3)] = "k_ePrimary"),
          (_[(_.k_eFeatured = 2)] = "k_eFeatured"),
          (_[(_.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (_[(_.k_eGeneral = 0)] = "k_eGeneral");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return (0, _.jsx)("div", {
          className: _.bordered_live_stream_icon,
          children: (0, _._)("#home_page_live_broadcast"),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _, _, _) {
        if (!_) return;
        if (!(0, _._)(_.item_type))
          return void (0, _._)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + _.item_type,
          );
        const _ = (0, _._)(`${(0, _._)(_, _)}${_ ? `?${_}` : ""}`, _);
        return {
          onClick: (_) => {
            let _ = (0, _._)(_) || window;
            _
              ? _(_)
              : _.startsWith("steam://") || (_.location.href = (0, _._)(_));
          },
          onOKActionDescription: _._.Localize("#Sale_Gamepad_Action_Select"),
        };
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _ == _._._ ? "bundle" : _ == _._._ ? "sub" : (_._._, "app");
      }
      const _ = (_) => {
        const { appid: _ } = _,
          _ = (0, _.jsx)("div", {
            className: "ImpressionTrackedElement",
            children: _.children,
          });
        return _
          ? (0, _.jsx)(_._, {
              appID: _,
              children: _,
            })
          : _;
      };
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _() {
        const [_, _] = _.useState(void 0),
          _ = _.useCallback(() => _(void 0), []),
          _ = (0, _.jsx)(_._, {
            active: void 0 !== _,
            children: (0, _.jsx)(_, {
              closeModal: _,
              rgImageURL: _,
            }),
          });
        return [_, _];
      }
      function _(_) {
        const { closeModal: _, rgImageURL: _ } = _,
          [_, _] = _.useState(0),
          _ = _?.length ?? 0,
          _ = _.useCallback(() => {
            _(0 == _ ? _ - 1 : _ - 1);
          }, [_, _]),
          _ = _.useCallback(() => {
            _(_ && _ + 1 >= _ ? 0 : _ + 1);
          }, [_, _, _]);
        return (0, _.jsxs)(_._, {
          title: (0, _._)("#SaleTech_Screenshot_Viewer"),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: _,
          bHideCloseIcon: !0,
          modalClassName: _().PopupScreenshotModal,
          children: [
            (0, _.jsx)(_, {
              index: _,
              numElements: _?.length || 0,
              fnForward: _,
              fnBackwards: _,
              fnClose: _,
              bCircular: !0,
            }),
            (0, _.jsx)("div", {
              className: _().PopupScreenshotContainer,
              children: (0, _.jsx)("img", {
                className: _().PopupScreenshot,
                src: _?.[_],
              }),
            }),
          ],
        });
      }
      function _(_) {
        const {
          index: _,
          numElements: _,
          fnForward: _,
          fnBackwards: _,
          fnClose: _,
          bCircular: _,
        } = _;
        (0, _._)("ArrowLeft", () => _?.(), !0, !0),
          (0, _._)("Left", () => _?.(), !0, !0),
          (0, _._)("ArrowRight", () => _?.(), !0, !0),
          (0, _._)("Right", () => _?.(), !0, !0),
          (0, _._)("Escape", () => _ && _(), !0, !0),
          (0, _._)("Esc", () => _ && _(), !0, !0);
        let _ = _ > 1;
        return (0, _.jsxs)("div", {
          className: _().ButtonCtn,
          children: [
            _ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().ButtonIcon,
                      0 !== _ || _ ? null : _().Disabled,
                    ),
                    onClick: _,
                    children: (0, _.jsx)(_.V5W, {
                      angle: 270,
                    }),
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().ButtonIcon,
                      _ !== _ - 1 || _ ? null : _().Disabled,
                    ),
                    onClick: _,
                    children: (0, _.jsx)(_.V5W, {
                      angle: 90,
                    }),
                  }),
                ],
              }),
            (0, _.jsx)("div", {
              className: _().ButtonIcon,
              onClick: _,
              children: (0, _.jsx)(_._, {}),
            }),
          ],
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { bAllowOutsideOfDeck: _ } = _;
        return (0, _._)() || _
          ? (0, _.jsx)(_, {
              ..._,
            })
          : null;
      }
      function _(_) {
        const { className: _, _: _ } = _,
          _ = (0, _._)(_),
          [_, _] = (0, _._)();
        let _ = "unknown";
        if (_ == _._)
          switch (_.data?.steam_os_compat_category) {
            case _._:
              _ = "steamoscompatible";
              break;
            case _._:
              _ = "steamosunsupported";
              break;
            case _._:
              _ = "steamosunknown";
          }
        else
          switch (_.data?.steam_deck_compat_category) {
            case _._:
              _ = "verified";
              break;
            case _._:
              _ = "playable";
              break;
            case _._:
              _ = "unsupported";
          }
        return (0, _.jsx)("div", {
          className: (0, _._)(_.CompatIcon, "ds_steam_deck_compat", _, _),
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            className: _,
            srcs: _,
            lazyLoad: _,
            width: _,
            height: _,
            alt: _,
            crossOrigin: _,
          } = _,
          [_, _] = _.useState(_.length),
          [_, _] = _.useState(0);
        _.useEffect(() => {
          _ != _.length && (_(_.length), _(0));
        }, [_, _.length]);
        const _ = _.useCallback(() => {
          _.onImageError && _.onImageError(_.srcs[_]),
            _ + 1 < _.srcs.length && _(_ + 1);
        }, [_, _]);
        return 0 == _.length
          ? null
          : (0, _.jsx)("img", {
              className: _,
              src: _[_],
              crossOrigin: _,
              onError: _,
              loading: _ ? "lazy" : void 0,
              width: _,
              height: _,
              alt: _,
            });
      }
      function _(_) {
        const [_, _] = _.useState(!1),
          {
            className: _,
            src: _,
            lazyLoad: _,
            width: _,
            height: _,
            alt: _,
            crossOrigin: _,
          } = _;
        return _
          ? (0, _.jsxs)("div", {
              className: _.ErrorDiv,
              children: [
                (0, _.jsx)("p", {
                  children: (0, _._)("#Image_ErrorTitle", _),
                }),
                (0, _.jsx)("ul", {
                  children: (0, _.jsx)("li", {
                    children: (0, _._)("#Image_Error_msg1"),
                  }),
                }),
                (0, _.jsx)("p", {
                  children: (0, _._)("#Image_Error_suggestion"),
                }),
              ],
            })
          : (0, _.jsx)(_._, {
              className: _,
              src: _,
              onError: () => __webpack_require__(!0),
              crossOrigin: _,
              loading: _ ? "lazy" : void 0,
              width: _,
              height: _,
              alt: _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 1.3,
        _ = 3,
        _ = 256;
      function _(_) {
        const [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _._)();
        return (
          (0, _.useEffect)(() => {
            if (
              _.naturalWidth > _.displayWidth * _ &&
              _.naturalHeight > _.displayHeight * _ &&
              _.naturalWidth > _
            ) {
              _.naturalWidth / _.naturalHeight < _ && __webpack_require__(!0);
            }
          }, [_]),
          _
            ? (0, _.jsxs)("span", {
                className: _.PreviewCtn,
                children: [
                  _,
                  (0, _.jsx)("span", {
                    className: _.SVG,
                    children: (0, _.jsx)(_.YNO, {}),
                  }),
                  (0, _.jsx)("img", {
                    ..._,
                    className: (0, _._)({
                      ...(_.className && {
                        [_.className]: !0,
                      }),
                    }),
                    onClick: (_) => {
                      _.src && _([_.src]);
                    },
                  }),
                ],
              })
            : (0, _.jsx)("img", {
                ..._,
                ref: _,
                onLoad: (_) => {
                  if (!_.currentTarget.closest("a") && !(0, _._)()) {
                    const {
                      naturalWidth: _,
                      naturalHeight: _,
                      width: _,
                      height: _,
                    } = _.currentTarget;
                    _({
                      naturalWidth: _,
                      naturalHeight: _,
                      displayWidth: _,
                      displayHeight: _,
                    });
                  }
                },
              })
        );
      }
    },
  },
]);
