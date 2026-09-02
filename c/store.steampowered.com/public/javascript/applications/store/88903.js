(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [88903],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              children: _,
              beforeContent: _,
              afterContent: _,
              hasValue: _,
              ..._
            } = _,
            _ = _(_);
          return (0, _.jsxs)(_._, {
            ..._,
            align: "center",
            "data-has-value": !!_,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  paddingRight: "2",
                  children: _,
                }),
              (0, _.jsx)(_._, {
                flexGrow: "1",
                minWidth: "0",
                children: _,
              }),
              _ &&
                (0, _.jsx)(_._, {
                  paddingLeft: "2",
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const {
              variant: _ = "basic",
              size: _ = "2",
              radius: _,
              focusable: _ = !0,
              hoverable: _ = !0,
              clickable: _ = !0,
              disabled: _,
              className: _,
              status: _,
              ..._
            } = _,
            _ = _ === "underline" ? "none" : _;
          return (0, _._)(
            {
              ..._,
              radius: _,
              "data-status": _,
              className: _()(
                _.ControlBox,
                _ && !_ && _.Focusable,
                _ && !_ && _.Hoverable,
                _ && !_ && _.Clickable,
                _ && _.Disabled,
                _[`Variant-${_}`],
                _[`Size-${_}`],
                _,
              ),
            },
            _._,
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
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(null);
        function _(_) {
          const { children: _, ..._ } = _,
            _ = _(_);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = _.Children.only(_),
            _ = (0, _.useContext)(_);
          return _
            ? _
              ? (0, _.cloneElement)(_, {
                  ..._.getReferenceProps(_.props),
                  ref: (0, _._)(_.props.ref, _.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function _(_) {
          const { children: _, className: _, ref: _ } = _,
            _ = (0, _.useContext)(_),
            _ = (0, _._)([
              _,
              _?.floating.refs.setFloating,
              (_) => _?.showPopover?.(),
            ]);
          if (!_)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!_.open) return null;
          let _ = _.Children.only(_),
            _ = _.Fragment;
          _.type == _.FocusManager &&
            ((_ = _.Children.only(_.props.children)), (_ = _));
          const _ = (0, _.cloneElement)(_, {
            ref: _,
            style: {
              ..._.floating.floatingStyles,
            },
            className: _()((0, _._)(), _),
            popover: "manual",
            ..._.getFloatingProps(),
          });
          return (0, _.jsx)(_, {
            children: _,
          });
        }
        function _(_) {
          return (0, _._)()
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _.useContext)(_);
          (0, _._)(
            !!_,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const _ = () => _.floating.context.onOpenChange(!1),
            _ = _.useRef(void 0);
          return (
            (0, _._)(_, !!_.current, !1),
            (0, _.jsx)(_._, {
              navID: "Popover",
              onCancelButton: _,
              modal: !0,
              navTreeRef: _,
              children: (0, _.jsx)("div", {
                style: {
                  display: "contents",
                },
                children: (0, _.jsx)(_._, {
                  children: _,
                }),
              }),
            })
          );
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _.useContext)(_);
          return (
            (0, _._)(
              !!_,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, _.jsx)(_._, {
              context: _.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: _,
            })
          );
        }
        function _(_) {
          const {
            open: _,
            onOpenChange: _,
            placement: _,
            interactions: _ = {},
          } = _;
          let _ = _;
          const _ = (0, _._)({
              open: _,
              onOpenChange: _,
              middleware: _(_),
              whileElementsMounted: _._,
              placement: _ && typeof _ == "object" ? _.initial : _,
              strategy: "fixed",
              platform: {
                ..._._,
                getOffsetParent: (_) => _?.ownerDocument?.defaultView ?? window,
              },
            }),
            _ = {
              enabled: !!_.click,
            },
            _ = typeof _.click == "function" ? _.click(_) : _,
            _ = (0, _._)(_.context, _),
            _ = {
              enabled: !!_.focus,
            },
            _ = typeof _.focus == "function" ? _.focus(_) : _,
            _ = (0, _._)(_.context, _),
            _ = {
              handleClose: (0, _._)(),
            },
            _ = typeof _.hover == "function" ? _.hover(_) : _,
            _ = (0, _._)(_.context, {
              enabled: !!_.hover,
              ..._,
            }),
            _ = (0, _._)(_.context),
            { getFloatingProps: _, getReferenceProps: _ } = (0, _._)([
              _,
              _,
              _,
              _,
            ]);
          return {
            floating: _,
            getFloatingProps: _,
            getReferenceProps: _,
            open: _,
          };
        }
        function _(_) {
          const { gutter: _ = 0, placement: _ } = _,
            _ = [],
            _ = _ && typeof _ == "object";
          return (
            _ && _.offset
              ? _.push((0, _._)(_.offset))
              : (!_ || _.offset === void 0) && _.push((0, _._)(2)),
            _ && _.flip
              ? _.push((0, _._)(_.flip))
              : (!_ || _.flip === void 0) && _.push((0, _._)()),
            _ && _.shift
              ? _.push((0, _._)(_.shift))
              : (!_ || _.shift === void 0) && _.push((0, _._)()),
            _.push(
              (0, _._)({
                apply: (_) => {
                  const { rects: _, elements: _, availableHeight: _ } = _,
                    _ = {
                      boxSizing: "border-box",
                      zIndex: "1",
                    };
                  switch ((_.scroll && (_.overflowY = "auto"), _.width)) {
                    case "target": {
                      _.width = `${_.reference.width}px`;
                      break;
                    }
                    case "content": {
                      _.width = `${_.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let _ = _.reference.width;
                      _.floating.width > _ && _ < 200 && (_ = _.floating.width),
                        (_.width = `${_}px`);
                    }
                  }
                  typeof _.width == "function" &&
                    (_.width = _.width({
                      unContentWidth: _.floating.width,
                      unTargetWidth: _.reference.width,
                    }));
                  const _ =
                    typeof _ == "number" ? `${_}px` : `var(--spacing-${_})`;
                  typeof _.maxHeight == "function"
                    ? (_.maxHeight = _.maxHeight({
                        unAvailableHeight: _,
                        gutter: _,
                      }))
                    : typeof _.maxHeight == "number"
                      ? (_.maxHeight = `min( calc( ${_}px - ${_} ), ${_.maxHeight}px )`)
                      : typeof _ == "number"
                        ? (_.maxHeight = `${_ - _}px`)
                        : (_.maxHeight = `calc( ${_}px - var(--spacing-${_}) )`),
                    Object.assign(_.floating.style, _),
                    _.floating.style.setProperty(
                      "--popover-max-height",
                      _.maxHeight,
                    );
                },
              }),
            ),
            _
          );
        }
        const _ = {
          Root: _,
          Anchor: _,
          Positioner: _,
          FocusManager: _,
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return typeof _ == "function" ? _(_, _) : _.cloneElement(_, _);
        }
        function _(_, _, _, _) {
          return _(_ || _, _, _);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _ = "span", ref: _, className: _, ..._ } = _,
            _ = _;
          return (0, _.jsx)(_, {
            ref: _,
            ...(0, _._)(
              {
                ..._,
                className: _()(_.Text, _),
              },
              _,
            ),
          });
        }
        const _ = [
            {
              prop: "weight",
              responsive: !0,
              className: _.TextWeight,
              cssProperty: (_) => ["--text-weight", `var(--font-weight-${_})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: _.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (_, _, _) => [
                "--text-color",
                (0, _._)(_, (0, _._)(_.contrast, _) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (_, _, _) => [
                "--text-color",
                (0, _._)((0, _._)(_.color, _) ?? "text-body", _),
              ],
            },
            {
              prop: "truncate",
              className: _.Truncate,
            },
            {
              prop: "lineClamp",
              responsive: !0,
              className: _.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: _.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          _ = [
            ..._,
            ..._._,
            {
              prop: "size",
              responsive: !0,
              className: (_) => _[`TextSize-${_}`],
            },
          ];
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { underline: _ = "auto", focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ = _ ?? _?.focusable ?? !!_.href,
            _ = (0, _._)(
              {
                ..._,
                underline: _,
                className: _.TextLink,
              },
              _,
            );
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ..._,
                ...(_ || {}),
                focusable: _,
              })
            : (0, _.jsx)("a", {
                ..._,
              });
        }
        const _ = [
          ..._._,
          {
            prop: "underline",
            className: (_) => _[`Underline-${_}`],
          },
        ];
        function _(_) {
          const { underline: _ = "auto", focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ = _ ?? _?.focusable ?? !!_.onClick,
            _ = (0, _.jsx)("span", {
              role: "button",
              ...(0, _._)(
                {
                  ..._,
                  underline: _,
                  className: _.TextLinkButton,
                },
                _,
              ),
            });
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ...(_ || {}),
                focusable: _,
                children: _,
              })
            : _;
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_.k_ECutArrowStyle = "single"),
            (_.k_EDoubleArrowStyle = "double"),
            (_.k_EThickChevron = "chevron"),
            (_.k_EFilledArrow = "filled"),
            (_.k_EPointyArrow = "pointy"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.k_EPillCrumb = "pill"),
            (_.k_ECircularCrumb = "circle"),
            (_.k_ESquareCrumb = "square"),
            _
          ))(_ || {});
        function _(_) {
          const { arrowFill: _, arrowStyle: _, direction: _ } = _;
          switch (_) {
            default:
            case _.k_ECutArrowStyle: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.uMb, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EDoubleArrowStyle: {
              const _ = _ == "right" ? 180 : 0;
              return (0, _.jsx)(_.F2T, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EThickChevron: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.l8x, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EFilledArrow: {
              const _ = _ == "right" ? 90 : 270;
              return (0, _.jsx)(_.V5W, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EPointyArrow:
              return (0, _.jsx)(_.L0X, {
                fill: _ || "white",
                role: "presentation",
                direction: _ || "left",
              });
          }
        }
        function _(_) {
          const {
              bIsActive: _,
              breadcrumbActiveColor: _,
              breadcrumbColor: _,
              breadcrumbStyle: _,
            } = _,
            _ = _ ? _ || "#FFFFFF" : _ || "#606974";
          switch (_) {
            default:
            case _.k_EPillCrumb:
              return (0, _.jsx)(_.IGf, {
                fill: _,
                role: "presentation",
              });
            case _.k_ECircularCrumb:
              return (0, _.jsx)(_.az8, {
                fill: _,
                role: "presentation",
              });
            case _.k_ESquareCrumb:
              return (0, _.jsx)(_.koA, {
                fill: _,
                role: "presentation",
              });
          }
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
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_.k_eBlock = "block"),
            (_.k_eFinal = "final"),
            (_.k_eOriginal = "original"),
            (_.k_eReservation = "reservation"),
            _
          ))(_ || {});
        const _ = Object.values(_);
        function _(_) {
          return _.find((_) => _ === _);
        }
        function _(_) {
          switch (_.display_style) {
            case "final":
              return _.formatted_final_price
                ? (0, _.jsx)("span", {
                    children: _.formatted_final_price,
                  })
                : null;
            case "original": {
              const _ = _.formatted_orig_price || _.formatted_final_price;
              return _
                ? (0, _.jsx)("span", {
                    children: _,
                  })
                : null;
            }
            default:
          }
          const _ = _.display_style == "reservation",
            _ = _.bHideDiscountPercentForCompliance,
            _ = _.className == "bbcode_price";
          return (0, _.jsxs)("span", {
            className: (0, _._)({
              [_().StoreSalePriceWidget]: !0,
              [_.className ?? ""]: !!_.className,
              [_().StoreSaleReservationPrice]: _,
            }),
            children: [
              !!(_.discount_percent && !_) &&
                (0, _.jsx)("span", {
                  className: (0, _._)(
                    _().StoreSaleDiscountBox,
                    "StoreSaleDiscountBox",
                    _.bDiscountFromCoupon && _().FromCoupon,
                  ),
                  children: `-${_.discount_percent}%`,
                }),
              !!(_.discount_percent && _) &&
                (0, _.jsx)("div", {
                  className: (0, _._)({
                    [_().DiscountIconCtn]: !0,
                    bbcode_price_discount: _,
                  }),
                  children: (0, _.jsx)(_.XH_, {}),
                }),
              !!_.formatted_final_price &&
                (_.discount_percent && _.formatted_orig_price
                  ? (0, _.jsxs)("div", {
                      className: (0, _._)({
                        [_().StoreSaleDiscountedPriceCtn]: !0,
                        bbcode_price_ctn: _,
                      }),
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)({
                            [_().StoreOriginalPrice]: !0,
                            StoreOriginalPrice: !0,
                            bbcode_price_orig: _,
                          }),
                          children: _.formatted_orig_price,
                        }),
                        (0, _.jsx)("div", {
                          className: (0, _._)({
                            [_().StoreSalePriceBox]: !0,
                            bbcode_price_box: _,
                            [_().StoreSaleReservationPriceBox]: _,
                            bbcode_price_final: _,
                          }),
                          children: _.formatted_final_price,
                        }),
                      ],
                    })
                  : (0, _.jsx)("div", {
                      className: (0, _._)({
                        [_().StoreSalePriceBox]: !0,
                        bbcode_price_box: _,
                        [_().StoreSaleReservationPriceBox]: _,
                        bbcode_price_final: _,
                      }),
                      children: _.formatted_final_price,
                    })),
            ],
          });
        }
        function _(_) {
          const { data: _ } = (0, _._)({
            packageid: _.packageID,
          });
          return _
            ? (0, _.jsx)(_, {
                formatted_final_price: _.formatted_final_price,
                formatted_orig_price: _.formatted_original_price,
                discount_percent: _.discount_pct,
                bHideDiscountPercentForCompliance:
                  _.hide_discount_pct_for_compliance,
                display_style: _.display_style,
                className: "bbcode_price",
              })
            : null;
        }
        function _(_, _) {
          return !_?.final_price_in_cents || !_?.final_price_in_cents
            ? void 0
            : (
                100 *
                (1 -
                  Number.parseInt(_.final_price_in_cents) /
                    Number.parseInt(_.final_price_in_cents))
              ).toFixed(0) + "%";
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              packageid: _.packageID,
            }),
            { data: _ } = (0, _._)({
              packageid: _.compareID,
            }),
            _ = _(_, _);
          return _ === void 0
            ? null
            : (0, _.jsx)("span", {
                className: _().StorePriceSavings,
                children: _,
              });
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
        });
        var _ = __webpack_require__("chunkid");
        const _ = _._.box(void 0);
        function _() {
          return _.get();
        }
        function _(_) {
          (0, _._)(() => _.set(_));
        }
        function _() {
          const _ = _.get();
          return _ || Math.floor(Date.now() / 1e3);
        }
        function _() {
          const _ = _.get();
          return _ ? new Date(_ * 1e3) : new Date();
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
          static get hoverClass() {
            return _().hoverParent;
          }
          render() {
            const {
              persona: _,
              animating: _,
              className: _,
              size: _,
              dim: _,
              ..._
            } = this.props;
            let _ = "";
            return (
              _ == "medium"
                ? (_ = _().Medium)
                : _ == "large" && (_ = _().Large),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().SnoozeContainer,
                  _.online_state,
                  _,
                  _ && _().animating,
                  _,
                  _ && _().Dim,
                ),
                ..._,
                children: [
                  (0, _.jsx)("div", {
                    "data-text": "Z",
                    className: (0, _._)(_().SnoozeZ, _()._),
                    children: "Z",
                  }),
                  (0, _.jsx)("div", {
                    "data-text": "Z",
                    className: (0, _._)(_().SnoozeZ, _()._),
                    children: "Z",
                  }),
                  (0, _.jsx)("div", {
                    "data-text": "Z",
                    className: (0, _._)(_().SnoozeZ, _()._),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        _ = _([_._], _);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { persona: _, className: _, ..._ } = _;
          if (!_ || !_.is_online) return null;
          const _ = _.HasStateFlag(_._),
            _ = _.HasStateFlag(_._),
            _ = _.m_eGamingDeviceType == _.LS$,
            _ = _.m_eGamingDeviceType == _.ppM,
            _ = !_ && !_ && !_ && _.HasStateFlag(_._);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().MobilePhoneIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_Mobile"),
                  ..._,
                  children: (0, _.jsx)(_._, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().VRIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_VR"),
                  ..._,
                  children: (0, _.jsx)(_.MUh, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().BigPictureIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_BigPicture"),
                  ..._,
                  children: (0, _.jsx)(_.bPr, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().SteamDeckIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_SteamDeck"),
                  ..._,
                  children: (0, _.jsx)(_.DQe, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().SteamDeckIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_LegionGoS"),
                  ..._,
                  children: (0, _.jsx)(_.DQe, {}),
                }),
            ],
          });
        });
        var _ = __webpack_require__("chunkid"),
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
        function _(_) {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                className: _().partyBeaconJoin,
                children: (0, _._)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              _.persona.GetCurrentGameName(),
            ],
          });
        }
        let _ = class extends _.Component {
          render() {
            const {
              className: _,
              onContextMenu: _,
              persona: _,
              eFriendRelationship: _,
              bIsSelf: _,
              bParenthesizeNicknames: _,
              strNickname: _,
              bCompactView: _,
              bHideGameName: _,
              bHideEnhancedRichPresenceLabel: _,
              bHideSnooze: _,
              bHideStatus: _,
              renderStatus: _,
              renderRichPresence: _,
              bHidePersona: _,
              bDNDSet: _,
              bHasPartyBeacon: _,
              bHasGamePrivacy: _,
              bNoMask: _,
              bEllipsisName: _,
              bDropPadding: _,
              ..._
            } = this.props;
            let _ = null,
              _ = null,
              _ = null,
              _ = [
                _,
                _().personaNameAndStatusLabel,
                (0, _._)(_),
                _ ? _().compactView : void 0,
                _ ? _().NoMask : void 0,
              ];
            _ || _.has_public_party_beacon
              ? (_ = (0, _.jsx)(_, {
                  persona: _,
                }))
              : (0, _.aPS)(_)
                ? ((_ = (0, _._)("#PersonaStateBlocked")), _.push(_().blocked))
                : _.is_ingame
                  ? (!_.is_in_nonsteam_game || _ || (0, _.S$u)(_)
                      ? (_ = _.GetCurrentGameName())
                      : (_ = (0, _._)("#PersonaStateInNonSteamGame")),
                    !_ && !_
                      ? (_ = _.GetCurrentGameRichPresence())
                      : _ &&
                        _.is_awayOrSnooze &&
                        (_ = (0, _._)("#PersonaStateAway")))
                  : _.m_broadcastAccountId &&
                    (_ = (0, _._)("#PersonaStateWatchingBroadcast")),
              _ || (_ = _.GetLocalizedOnlineStatus()),
              _ && (_ = _());
            let _ = !_ && !_;
            _ === !1 && (_ = !0),
              _.is_awayOrSnooze &&
                _ &&
                (_ = (0, _.jsx)(_, {
                  persona: _,
                }));
            let _ = (0, _.jsx)(_.Fragment, {});
            _
              ? (_ = (0, _.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: _,
                  children: (0, _.jsx)(_.GB9, {}),
                }))
              : _.push(_().noContextMenu),
              _ && _.push(_().hidePersona),
              _ && (_ = _()),
              (_ || !_) && _.push(_().twoLine);
            const _ = !_.is_ingame && !_,
              _ = !_ && _,
              _ = _ && (!_ || !_),
              _ = (0, _.IDH)(_._.LAUNCHER_TYPE);
            let _ = _ && !_,
              _ = _ ? _ : _.m_strPlayerName,
              _ = !_ && (_ || _) && _;
            return (0, _.jsxs)("div", {
              ..._,
              className: (0, _._)(..._),
              onContextMenu: _,
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().statusAndName,
                    _ ? _().threeLines : void 0,
                  ),
                  children: [
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().playerName,
                        _ ? _().EllipsisName : void 0,
                      ),
                      children: [
                        _ || "\xA0",
                        _ &&
                          _ &&
                          (0, _.jsxs)("span", {
                            className: _().playerNickname,
                            children: ["(", _, ")"],
                          }),
                      ],
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().DNDContainer,
                        title: (0, _._)("#User_ToggleDoNotDisturb"),
                        children: (0, _.jsx)(_.Aj0, {}),
                      }),
                    _ &&
                      (0, _.jsx)("span", {
                        className: _().playerNicknameBracket,
                        title: (0, _._)("#isNickname"),
                        children: " *",
                      }),
                    (0, _.jsx)(_, {
                      persona: _,
                    }),
                    _,
                    (_.m_bPlayerNamePending || _.m_bAvatarPending) &&
                      _ &&
                      (0, _.jsx)("div", {
                        className: _().PendingPersona,
                        title: (0, _._)("#SteamChina_PendingPersonaName"),
                        children: (0, _.jsx)(_.zD7, {}),
                      }),
                    _,
                  ],
                }),
                !_ &&
                  (0, _.jsxs)("div", {
                    className: _().richPresenceContainer,
                    children: [
                      (_ || _) &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().gameName,
                            _ ? _().threeLines : void 0,
                            _().richPresenceLabel,
                            _ && _().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            _ &&
                              (0, _.jsx)("div", {
                                className: _().gameIsPrivateIcon,
                                title: (0, _._)("#User_GameInfoHidden"),
                                children: (0, _.jsx)(_.jZl, {}),
                              }),
                            _,
                          ],
                        }),
                      _ &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().richPresenceLabel,
                            _ && _().dropPadding,
                            "no-drag",
                          ),
                          children: [_, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const {
            persona: _,
            bParenthesizeNicknames: _,
            strNickname: _,
            bIgnorePersonaStatus: _,
            bDisableColoring: _,
            className: _,
            ..._
          } = _;
          let _ = _ && !_ ? _ : _.m_strPlayerName;
          return (0, _.jsx)("span", {
            ..._,
            className: (0, _._)(_, _ && _().DisableColoring, !_ && (0, _._)(_)),
            children: (0, _.jsxs)("span", {
              className: _().playerName,
              children: [
                _ || "\xA0",
                _ &&
                  _ &&
                  (0, _.jsxs)("span", {
                    className: _().playerNickname,
                    children: ["(", _, ")"],
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
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          _ =
            __webpack_require__._ +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var _ = __webpack_require__("chunkid"),
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
        function _(_) {
          switch (_) {
            case "X-Small":
            case "Small":
              return _;
            case "Medium":
            case "MediumLarge":
              return _;
            case "Large":
            case "X-Large":
            case "FillArea":
              return _;
            default:
              return (0, _._)(_, `Unhandled size ${_}`), _;
          }
        }
        const _ = _.memo(function (_) {
          const {
              strAvatarURL: _,
              size: _ = "Medium",
              className: _,
              statusStyle: _,
              statusPosition: _,
              children: _,
              ..._
            } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return _ && _.push(_), _.push(_(_)), _;
            }, [_, _]);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().avatarHolder,
              "avatarHolder",
              "no-drag",
              _,
              _,
            ),
            ..._,
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().avatarStatus, "avatarStatus", _),
                style: _,
              }),
              (0, _.jsx)(_._, {
                className: (0, _._)(_().avatar, "avatar"),
                rgSources: _,
                draggable: !1,
              }),
              _,
            ],
          });
        });
        let _ = class extends _.Component {
          render() {
            const {
              persona: _,
              size: _ = "Medium",
              animatedAvatar: _,
              className: _,
              strBackupAvatarURL: _,
              ..._
            } = this.props;
            let _ = "";
            return (
              _ && _.image_small && _.image_small.length != 0
                ? (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small)
                : _
                  ? ((_ = _.avatar_url_medium),
                    _ == "Small" || _ == "X-Small"
                      ? (_ = _.avatar_url)
                      : (_ == "Large" || _ == "X-Large" || _ == "FillArea") &&
                        (_ = _.avatar_url_full))
                  : _ && (_ = _),
              (0, _.jsx)(_, {
                strAvatarURL: _,
                size: _,
                className: (0, _._)((0, _._)(_), _),
                ..._,
              })
            );
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const {
            profileItem: _,
            className: _,
            bDisableAnimation: _,
            ..._
          } = _;
          if (!_ || !_.image_small || _.image_small.length == 0) return null;
          let _ = _ ? _.image_large : _.image_small;
          return (
            _ || (_ = _.image_small),
            _.startsWith("https://") ||
              (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
            (0, _.jsx)("div", {
              className: (0, _._)(_().avatarFrame, _, "avatarFrame"),
              ..._,
              children: (0, _.jsx)("img", {
                className: _().avatarFrameImg,
                src: _,
              }),
            })
          );
        });
        let _ = class extends _.Component {
          m_timer;
          constructor(_) {
            super(_),
              (this.state = {
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let _ = 0;
            switch (this.props.loopDuration) {
              case "Short":
                _ = 2500;
                break;
              case "Medium":
                _ = 5e3;
                break;
              case "Long":
                _ = 1e4;
                break;
            }
            _ != 0 &&
              (this.setState({
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = window.setTimeout(
                () =>
                  this.setState({
                    bAnimate: !1,
                  }),
                _,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(_) {
            this.props.loopDuration != _.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({
                    bAnimate: !1,
                  }),
                  this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : (this.setState({
                      bAnimate: !0,
                    }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != _.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: _,
              animatedAvatar: _,
              avatarFrame: _,
              children: _,
              style: _,
              bLimitProfileFrameAnimationTime: _,
              bParentHovered: _,
              ..._
            } = this.props;
            _.onClick &&
              (_ = {
                ..._,
                cursor: "pointer",
              });
            const _ = this.state.bAnimate ? (_ ?? void 0) : void 0;
            return (0, _.jsx)("div", {
              onMouseEnter: () =>
                this.setState({
                  bAnimate: this.props.loopDuration != "None",
                }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, _.jsxs)(_, {
                animatedAvatar: _,
                ..._,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    profileItem: _ ?? null,
                    bDisableAnimation: _ && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        _ = _([_._], _);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, _._)();
          }
          set nOverrideDateNow(_) {
            (0, _._)(_);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, _._)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, _._)();
          }
          BHasTimeOverride() {
            return !!(0, _._)();
          }
          ParseDevOverrides(_) {
            if (!_ || _.length == 0) return;
            new URLSearchParams(_[0] == "?" ? _.substring(1) : _).has("t");
          }
        }
        const _ = new _();
        (0, _._)("g_EventCalendarDevFeatures", _);
        function _(_ = 1) {
          const [_, _] = React.useState(() => _()),
            _ = useCancelTokenSource("useTimeNowWithOverride"),
            _ = React.useCallback(() => {
              _.token.reason || _(_());
            }, []);
          return (
            React.useEffect(() => {
              const _ = 1e3 * _,
                _ = Date.now() % _,
                _ = _ - _,
                _ = window.setTimeout(_, _);
              return () => {
                window.clearTimeout(_);
              };
            }, [_, _, _]),
            _
          );
        }
        const _ = Math.floor(new Date().getTime() / 1e3);
        function _() {
          const _ = Math.floor(Date.now() / 1e3);
          return _.nOverrideDateNow ? _.nOverrideDateNow + (_ - _) : _;
        }
        function _() {
          return _.nOverrideDateNow ?? _;
        }
        function _() {
          return _.useMemo(() => _(), []);
        }
        function _() {
          return _.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = ((_) => (
          (_[(_.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (_[(_.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (_[(_.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
          _
        ))(_ || {});
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
          clanid = void 0;
          appid = 0;
          can_edit = !1;
          owns_app = !1;
          follows_app = !1;
          support_user = !1;
          valve_admin = !1;
          limited_user = !1;
          event_ignored = new Array();
          event_followed = new Array();
          event_followed_flags = new Array();
          constructor(_) {
            (0, _._)(this), (this.clanid = _);
          }
        }
        _([_._], _.prototype, "clanid", 2),
          _([_._], _.prototype, "appid", 2),
          _([_._], _.prototype, "can_edit", 2),
          _([_._], _.prototype, "owns_app", 2),
          _([_._], _.prototype, "follows_app", 2),
          _([_._], _.prototype, "support_user", 2),
          _([_._], _.prototype, "valve_admin", 2),
          _([_._], _.prototype, "limited_user", 2),
          _([_._], _.prototype, "event_ignored", 2),
          _([_._], _.prototype, "event_followed", 2),
          _([_._], _.prototype, "event_followed_flags", 2);
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapClanToUserPermissions = new Map();
          m_mapAnnounceGIDToVote = new Map();
          m_cm = void 0;
          static s_EventUserStore;
          m_bIsPresentationMode = (0, _._)();
          static Get() {
            return (
              (0, _._)(
                !!_.s_EventUserStore,
                "Have not yet initialized global EventUserStore",
              ),
              _.s_EventUserStore
            );
          }
          static IsInitialized() {
            return !!_.s_EventUserStore;
          }
          static async InitGlobal(_) {
            if (!_.s_EventUserStore) {
              const _ = new _();
              await _.Init(_), (_.s_EventUserStore = _);
            }
          }
          static BIsInited() {
            return !!_.s_EventUserStore;
          }
          async Init(_) {
            this.m_cm = _;
            const _ = (0, _._)("partnereventpermissions", "application_config");
            this.ValidateStoreDefault(_) &&
              (0, _._)(() => {
                _.forEach((_) => {
                  let _ = new _(_.clanid),
                    _ = {
                      result: _,
                      promise: _.RemapToPromise(_),
                      bLoaded: !0,
                    };
                  this.CopyFromResponseToTrack(_, _),
                    this.m_mapClanToUserPermissions.set(_.clanid, _);
                });
              });
            let _ = (0, _._)("uservotes", "application_config");
            _ &&
              (0, _._)(() => {
                _.forEach((_) => {
                  let _ = _.voted_up ? !0 : _.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(_.clanAnnouncementGID, _);
                });
              });
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].clanid == "number" && typeof _[0].appid == "number"
              : !1;
          }
          static async RemapToPromise(_) {
            return _;
          }
          BIsUserLoggedIn() {
            return _._.logged_in;
          }
          BIsPartnerEventPermissionsLoaded(_) {
            return (
              this.m_mapClanToUserPermissions.has(_) &&
              this.m_mapClanToUserPermissions.get(_).bLoaded
            );
          }
          GetPartnerEventPermissions(_) {
            if (!_ || !_.BIsValid()) return new _(0);
            const _ = _.GetAccountID();
            return (
              this.m_mapClanToUserPermissions.has(_) ||
                this.LoadSingleAppEventPermissions(_),
              this.m_mapClanToUserPermissions.get(_).result
            );
          }
          async LoadSingleAppEventPermissions(_) {
            let _ = _.GetAccountID(),
              _ = this.m_mapClanToUserPermissions.get(_);
            return (
              _ ||
                ((_ = {
                  promise: this.InternalLoadSingleAppEventPermissions(_),
                  result: new _(_),
                  bLoaded: !1,
                }),
                this.m_mapClanToUserPermissions.set(_, _)),
              _.promise
            );
          }
          CopyFromResponseToTrack(_, _) {
            (_.result.appid = _.appid ?? 0),
              (_.result.can_edit = !!_.can_edit),
              (_.result.clanid = _.appid),
              (_.result.event_followed = _.event_followed ?? []),
              (_.result.event_ignored = _.event_ignored ?? []),
              (_.result.event_followed_flags = _.event_followed_flags ?? []),
              (_.result.follows_app = !!_.follows_app),
              (_.result.owns_app = !!_.owns_app),
              (_.result.limited_user = !!_.limited_user),
              (_.support_user || _.valve_admin) && this.m_bIsPresentationMode
                ? ((_.result.can_edit = !0),
                  (_.result.support_user = !1),
                  (_.result.valve_admin = !1))
                : ((_.result.support_user = !!_.support_user),
                  (_.result.valve_admin = !!_.valve_admin)),
              (_.bLoaded = !0);
          }
          async InternalLoadSingleAppEventPermissions(_) {
            let _ = null,
              _ = _.GetAccountID(),
              _ = !_._.logged_in;
            if (!this.m_mapClanToUserPermissions.has(_)) {
              let _ = new _(_.GetAccountID());
              this.m_mapClanToUserPermissions.set(_, {
                result: _,
                promise: _.RemapToPromise(_),
                bLoaded: !1,
              });
            }
            try {
              if (_._.logged_in) {
                let _ =
                    _._.COMMUNITY_BASE_URL +
                    "gid/" +
                    _.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  _ = {};
                if (
                  ((0, _._)() == "partnerweb"
                    ? ((_ =
                        _._.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (_ = {
                        clanaccountid: _.GetAccountID(),
                      }))
                    : (0, _._)() == "store" &&
                      ((_ =
                        _._.STORE_BASE_URL +
                        "events/ajaxgetpartnereventpermissions"),
                      (_ = {
                        clanaccountid: _.GetAccountID(),
                      })),
                  (_ = await _().get(_, {
                    params: _,
                    withCredentials: !0,
                  })),
                  !_ || _.data.success != _._)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, _._)(_?.data).strErrorMsg,
                  ),
                    (_ = !0);
                else {
                  let _ = this.m_mapClanToUserPermissions.get(_);
                  _ && this.CopyFromResponseToTrack(_, _.data);
                }
              }
            } catch (_) {
              if (
                ((_ = _.response),
                (_ = !0),
                !(
                  _ &&
                  typeof _.response < "u" &&
                  typeof _.response.data < "u" &&
                  typeof _.response.data.success < "u" &&
                  _.response.data.success == _._
                ))
              ) {
                const _ = (0, _._)(_);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    _ +
                    ": " +
                    _.strErrorMsg,
                  _,
                );
              }
            } finally {
              _ &&
                (0, _._)(() => {
                  let _ = this.m_mapClanToUserPermissions.get(_);
                  (_.result.appid = _?.data.appid ?? 0),
                    (_.result.can_edit = !1),
                    (_.result.clanid = _ && _.data ? _.data.clanid : 0),
                    (_.result.event_followed = new Array()),
                    (_.result.event_ignored = new Array()),
                    (_.result.event_followed_flags = new Array()),
                    (_.result.follows_app = !1),
                    (_.result.owns_app = !1),
                    (_.result.support_user = !1),
                    (_.result.valve_admin = !1),
                    (_.result.limited_user = !1),
                    (_.bLoaded = !0);
                });
            }
            return this.m_mapClanToUserPermissions.get(_).result;
          }
          async Vote(_, _, _) {
            if (!_ || !_.AnnouncementGID) return !1;
            const _ = this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
            if (_ === _) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _),
              (0, _._)(() => {
                _ === !0 && _.UpdateVoteCount("up", -1),
                  _ === !1 && _.UpdateVoteCount("down", -1),
                  _ === !0 && _.UpdateVoteCount("up", 1),
                  _ === !1 && _.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let _ = _._.Init(_._);
              return (
                _.Body().set_announcementid(_.AnnouncementGID),
                _.Body().set_vote_up(!!_),
                _.Body().set_clan_accountid(_.clanSteamID.GetAccountID()),
                (
                  await _._.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    _,
                  )
                ).GetEResult() == _._
              );
            } else {
              const _ = (0, _._)(),
                _ =
                  _ == "community" || _ == "steamtv"
                    ? _._.COMMUNITY_BASE_URL +
                      "gid/" +
                      _.clanSteamID.ConvertTo64BitString() +
                      "/announcements/rate/" +
                      _.AnnouncementGID
                    : _._.STORE_BASE_URL +
                      "updated/ajaxrateupdate/" +
                      _.AnnouncementGID,
                _ = new URLSearchParams();
              _.append("sessionid", (0, _._)()),
                _.append("voteup", _ ? "1" : "0"),
                _.append("clanid", "" + _.clanSteamID.GetAccountID()),
                _.append("ajax", "1");
              const _ = {
                withCredentials: !0,
                cancelToken: _.token,
              };
              return (await _().post(_, _, _)).data.success == _._;
            }
          }
          async LoadMyVote(_, _) {
            if (_?.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID))
                return !!this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
              let _;
              if (this.m_cm) {
                let _ = _._.Init(_._);
                _.Body().set_announcementid(_.AnnouncementGID);
                let _ = await _._.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  _,
                );
                _.GetEResult() == _._ &&
                  (_ = _.Body().voted_up()
                    ? !0
                    : _.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const _ = (0, _._)() == "store",
                  _ = _
                    ? _._.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                    : _._.COMMUNITY_BASE_URL +
                      "gid/" +
                      _.clanSteamID.ConvertTo64BitString() +
                      "/announcements/ajaxgetmyvote/" +
                      _.AnnouncementGID,
                  _ = {
                    gid: _ ? _.AnnouncementGID : void 0,
                  },
                  _ = await _().get(_, {
                    withCredentials: !0,
                    cancelToken: _.token,
                    params: _,
                  });
                _ = _.data.voted_up ? !0 : _.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _), _;
            }
          }
          SetVote(_, _) {
            this.m_mapAnnounceGIDToVote.set(_, _);
          }
          BHasMyVote(_) {
            return _.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(_) {
            return _.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(_) {
            if (
              _.BHasEmailEnabled() ||
              _.clanSteamID.GetAccountID() == (0, _._)()
            )
              return !0;
            let _ = this.GetPartnerEventPermissions(_.clanSteamID);
            return (_._.IS_OGG || _._.IS_VALVE_GROUP) && _.valve_admin;
          }
        };
        _([_._], _.prototype, "m_mapClanToUserPermissions", 2),
          _([_._], _.prototype, "m_mapAnnounceGIDToVote", 2),
          _([_._], _.prototype, "CopyFromResponseToTrack", 1);
        let _ = _;
        function _() {
          const [_, _] = (0, _.useState)(() => _.BIsInited());
          return (
            (0, _.useEffect)(() => {
              _ || (async () => (await Promise.all([_.InitGlobal()]), _(!0)))();
            }, [_]),
            _
          );
        }
        function _(_) {
          const [_, _] = (0, _.useState)(
              _.Get().BIsPartnerEventPermissionsLoaded(_),
            ),
            _ = _._.InitFromClanID(_),
            [_, _] = (0, _.useState)(_.Get().GetPartnerEventPermissions(_));
          return (
            (0, _.useEffect)(() => {
              if (!_) {
                const _ = _._.InitFromClanID(_);
                _.Get()
                  .LoadSingleAppEventPermissions(_)
                  .then((_) => {
                    _(_), _(!0);
                  });
              }
            }, [_, _]),
            _
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
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            _?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(_.GetParentAppID());
          }, [_]);
          let _ = _?.GetShortDescription()
            ? StripBBCodeTags(_.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ = _?.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
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
              include_extra_details: _,
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
                include_extra_details: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !_?.token.reason && _.current === _ && _(_ == _._), _();
                    })),
                () => _?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
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
          _?.GetStoreItemType() == _._._ &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
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
              include_extra_details: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
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
                  include_extra_details: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Package, _, _);
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          if (!(!_?.asset_url_format || typeof _[_] != "string"))
            return (
              _._.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              _.asset_url_format.replace("${FILENAME}", _[_])
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { spotlight: _ } = _,
            _ = (0, _._)(_.url, "spotlight");
          return (0, _.jsx)(_._, {
            appID: _.item?.type == "app" ? _.item._ : void 0,
            feature: "spotlight",
            children: (0, _.jsxs)(_._, {
              className: _.SpotlightCtn,
              onOKButton: () => {
                window.location.href = _;
              },
              children: [
                (0, _.jsxs)("div", {
                  className: _.SpotlightImageCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.CapsuleDecorators,
                        _.CapsuleDecorators,
                      ),
                      children: _.has_live_broadcast && (0, _.jsx)(_._, {}),
                    }),
                    _.open_in_new_window
                      ? (0, _.jsx)(_._, {
                          href: _,
                          children: (0, _.jsx)("img", {
                            src: _.image_url,
                            alt: _.title,
                          }),
                        })
                      : (0, _.jsx)("a", {
                          href: _,
                          children: (0, _.jsx)("img", {
                            src: _.image_url,
                            alt: _.title,
                          }),
                        }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.SpotlightTextCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.SpotlightTitle,
                      children: _.title,
                    }),
                    (0, _.jsx)("div", {
                      className: _.SpotlightBody,
                      children: _.body,
                    }),
                    (0, _.jsx)("div", {
                      className: _.BottomBarPriceInfo,
                      children: (0, _.jsx)(_, {
                        discountBlock: _.discount_block,
                        bIsSalePage: _.is_sale_page,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { spotlight: _ } = _,
            _ = _.associated_item,
            _ = {
              is_weeklong_deals: _.spotlight_template == "weeklong_deals",
              url: _.spotlight_link_url,
              image_url: Config.MEDIA_CDN_URL + _.asset_url,
              title: _.spotlight_title,
              body: _.spotlight_body,
              ..._(_),
            };
          if (
            (!_.url && _ && (_.url = Config.STORE_BASE_URL + _.store_url_path),
            _.spotlight_body?.indexOf("%1$s") !== -1)
          ) {
            let _;
            _?.best_purchase_option?.active_discounts?.length
              ? (_ = new Date(
                  _.best_purchase_option.active_discounts[0].discount_end_date *
                    1e3,
                ))
              : _.end_date && (_ = new Date(_.end_date * 1e3)),
              _ &&
                (_.body = _.spotlight_body?.replace(
                  "%1$s",
                  _.toLocaleTimeString(
                    LocalizationManager.GetPreferredLocales(),
                    {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "short",
                      day: "numeric",
                    },
                  ),
                ));
          }
          return jsx(_, {
            spotlight: _,
          });
        }
        function _(_) {
          const { dailyDeal: _ } = _,
            _ = (0, _._)(_.target, "daily-deal"),
            _ = (0, _._)(_.item?.type ?? "application"),
            _ = (0, _._)(
              (0, _._)({
                item_type: _,
                _: _.item?._,
              }),
            );
          return (0, _.jsx)(_._, {
            appID: _.item?.type == "app" ? _.item._ : void 0,
            feature: "daily-deal",
            children: (0, _.jsxs)(_._, {
              className: _.DailyDealCtn,
              onOKButton: () => {
                window.location.href = _;
              },
              children: [
                (0, _.jsx)("div", {
                  className: _.DailyDealImageCtn,
                  children: (0, _.jsx)("a", {
                    href: _,
                    children: (0, _.jsx)("img", {
                      src: _.image,
                      alt: _.data?.name,
                    }),
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _.DailyDealTextCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.DailyDealDesc,
                      children: _.desc,
                    }),
                    (0, _.jsx)(_, {
                      discountBlock: _.discount_block,
                      bIsSalePage: _.is_sale_page,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const {
              dailyDeal: { item: _ },
            } = _,
            _ = {
              end_date:
                _?.best_purchase_option?.active_discounts?.[0]
                  ?.discount_end_date,
              target: Config.STORE_BASE_URL + _?.store_url_path,
              image: BuildStoreAssetURL(_?.assets, "header"),
              ..._(_),
            };
          return jsx(_, {
            dailyDeal: _,
          });
        }
        const _ = (_) => {
          const { discountBlock: _, bIsSalePage: _ } = _;
          if (!_) return null;
          const _ = _.hide_discount_percent_for_compliance;
          return _
            ? _.discount_max == null || _.discount_max <= 0
              ? null
              : _.discount_min == null || _.discount_min <= 0
                ? (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().StoreSalePriceWidgetContainer,
                      _().Discounted,
                    ),
                    children: (0, _.jsxs)("div", {
                      className: _().StoreSaleDiscountBox,
                      children: ["Up to -", _.discount_max, "%"],
                    }),
                  })
                : _
                  ? (0, _.jsx)("div", {
                      className: _().DiscountIconCtn,
                      children: (0, _.jsx)(_.XH_, {}),
                    })
                  : (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().StoreSalePriceWidgetContainer,
                        _().Discounted,
                      ),
                      children:
                        _.discount_min === _.discount_max
                          ? (0, _.jsxs)("div", {
                              className: _().StoreSaleDiscountBox,
                              children: [_.discount_min, "%"],
                            })
                          : (0, _.jsxs)("div", {
                              className: _().StoreSaleDiscountBox,
                              children: [
                                _.discount_min,
                                " - ",
                                _.discount_max,
                                "%",
                              ],
                            }),
                    })
            : _.final_price == null || _.final_price === ""
              ? null
              : _.bundle_discount != null && _.bundle_discount > 0 && !_
                ? (0, _.jsx)("div", {
                    className: _.DiscountBlock,
                    children: (0, _.jsxs)("div", {
                      className: _.DiscountPercent,
                      children: ["-", _.bundle_discount, "%"],
                    }),
                  })
                : _.discount_percent != null && _.discount_percent > 0
                  ? _
                    ? (0, _.jsxs)("div", {
                        className: (0, _._)(
                          _().StoreSalePriceWidgetContainer,
                          _().Discounted,
                        ),
                        children: [
                          (0, _.jsx)("div", {
                            className: _().DiscountIconCtn,
                            children: (0, _.jsx)(_.XH_, {}),
                          }),
                          (0, _.jsx)("div", {
                            className: _().StoreSaleDiscountedPriceCtn,
                            children: (0, _.jsx)("div", {
                              className: _().StoreSalePriceBox,
                              children: _.final_price,
                            }),
                          }),
                        ],
                      })
                    : (0, _.jsxs)("div", {
                        className: (0, _._)(
                          _().StoreSalePriceWidgetContainer,
                          _().Discounted,
                        ),
                        children: [
                          (0, _.jsxs)("div", {
                            className: _().StoreSaleDiscountBox,
                            children: [_.discount_percent, "%"],
                          }),
                          (0, _.jsxs)("div", {
                            className: _().StoreSaleDiscountedPriceCtn,
                            children: [
                              (0, _.jsx)("div", {
                                className: _().StoreOriginalPrice,
                                children: _.orig_price,
                              }),
                              (0, _.jsx)("div", {
                                className: _().StoreSalePriceBox,
                                children: _.final_price,
                              }),
                            ],
                          }),
                        ],
                      })
                  : (0, _.jsx)("div", {
                      className: (0, _._)(_().StoreSalePriceWidgetContainer),
                      children: (0, _.jsx)("div", {
                        className: _().StoreSaleDiscountedPriceCtn,
                        children: (0, _.jsx)("div", {
                          className: _().StoreSalePriceBox,
                          children: _.final_price,
                        }),
                      }),
                    });
        };
        function _(_) {
          return _
            ? {
                item: {
                  type: ConvertEStoreItemTypeToString(_.item_type),
                  _: _._,
                },
                discount_block: {
                  orig_price: _.best_purchase_option?.formatted_original_price,
                  final_price: _.best_purchase_option?.formatted_final_price,
                  discount_percent: _.best_purchase_option?.discount_pct,
                  hide_discount_percent_for_compliance:
                    _.best_purchase_option?.hide_discount_pct_for_compliance,
                },
              }
            : {};
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = () => (_._.EUNIVERSE === _._ ? 2581 : 45267781);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            strURL: _,
            strName: _,
            strAvatarURL: _,
            nFollowers: _,
            strCreatorType: _,
            strTagLine: _,
            strMemberListURL: _,
            followButton: _,
            bSmallFormat: _,
            bMinimalDisplay: _,
          } = _;
          return (0, _.jsx)(_._, {
            feature: "salecreatorhome",
            children: (0, _.jsxs)(_._, {
              className: (0, _._)(
                _().DevSummaryCtn,
                _ ? _().SmallFormat : _().LargeFormat,
                _ ? _().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!_ &&
                  (0, _.jsx)("span", {
                    className: _().Title,
                    children: _,
                  }),
                (0, _.jsxs)("div", {
                  className: _().DevSummaryWidgetCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().DevSummaryBackground,
                      style: {
                        backgroundImage: `url(${_} )`,
                      },
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(_().DevSummaryContent),
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().FlexRowContainer,
                          children: [
                            (0, _.jsx)(_._, {
                              href: (0, _._)(_),
                              className: _().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, _.jsx)("img", {
                                className: (0, _._)(_().Avatar, "Avatar_Trgt"),
                                src: _,
                              }),
                            }),
                            (0, _.jsxs)("div", {
                              className: (0, _._)(
                                _().FlexColumnContainer,
                                _().CreatorDescCtn,
                              ),
                              children: [
                                (0, _.jsxs)("div", {
                                  className: (0, _._)(
                                    _().CreatorTitleCtn,
                                    _().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, _.jsx)(_._, {
                                      href: (0, _._)(_),
                                      className: _().CreatorNameName,
                                      children: _,
                                    }),
                                    !!_ &&
                                      (0, _.jsx)("div", {
                                        className: (0, _._)(
                                          _().FlexColumnContainer,
                                          _().CreatorTagline,
                                        ),
                                        children: _,
                                      }),
                                  ],
                                }),
                                (0, _.jsx)("div", {
                                  className: (0, _._)({
                                    [_().FlexColumnContainer]: _,
                                    [_().FlexRowContainer]: !_,
                                    [_().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, _.jsxs)("div", {
                                    className: (0, _._)(_().FollowBtnCtn),
                                    children: [
                                      _,
                                      (0, _.jsxs)("div", {
                                        className: (0, _._)({
                                          [_().Followers]: !0,
                                        }),
                                        children: [
                                          (0, _.jsx)("span", {
                                            children: (0, _._)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, _.jsx)("span", {
                                            className: _().FollowerCount,
                                            children: (0, _._)(_),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!_ &&
                          (0, _.jsx)("a", {
                            href: _,
                            target: "_blank",
                            className: _().MembersListLink,
                            children: (0, _._)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { data: _ } = (0, _._)(
            _
              ? {
                  appid: _,
                }
              : void 0,
          );
          return _.useMemo(() => {
            if (!_) return [];
            if (!_) return;
            const _ = [],
              _ = new Set(),
              _ = [
                ["developer", (0, _._)(_.developers)],
                ["publisher", (0, _._)(_.publishers)],
                ["franchise", (0, _._)(_.franchises)],
              ];
            for (const [_, _] of _)
              for (const _ of _)
                _.has(_) ||
                  (_.add(_),
                  _.push({
                    appid: _,
                    name: "",
                    clan_account_id: _,
                    type: _,
                  }));
            return _;
          }, [_, _]);
        }
        function _(_) {
          const { rgCreators: _, renderCreator: _ } = _,
            [_, _] = _.useState(0);
          if (!_.length) return null;
          if (_.length == 1)
            return (0, _.jsx)(_.Fragment, {
              children: _(_[0]),
            });
          const _ = _ % _.length;
          return (0, _.jsxs)("div", {
            className: _().CreatorCarouselCtn,
            children: [
              _(_[_]),
              (0, _.jsx)("div", {
                className: _().CreatorCarouselCrumbs,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _._,
                    {
                      className: _().CreatorCarouselCrumb,
                      onClick: () => _(_),
                      "aria-label": _(_.type),
                      children: (0, _.jsx)(_._, {
                        bIsActive: _ == _,
                      }),
                    },
                    _.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { creatorID: _, bSmallFormat: _ } = _,
            { data: _ } = useCreatorHomeByClanAccountID(_.clan_account_id);
          return _
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(_, _.type),
                strName: _.name ?? "",
                strAvatarURL: _.avatar_url_full_size ?? "",
                nFollowers: _.followers ?? 0,
                strCreatorType: _(_.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: _.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: _,
              })
            : null;
        }
        function _(_) {
          const { appid: _, bSmallFormat: _ } = _,
            _ = _(_);
          return _
            ? jsx(_, {
                rgCreators: _,
                renderCreator: (_) =>
                  jsx(_, {
                    creatorID: _,
                    bSmallFormat: _,
                  }),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function _(_) {
          switch (_) {
            case "publisher":
              return (0, _._)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, _._)("#CreatorHome_InFranchise");
          }
          return (0, _._)("#CreatorHome_DevelopedBy");
        }
        function _(_) {
          const {
              creatorID: _,
              bShowTagline: _,
              bHideCreatorType: _,
              bSmallFormat: _,
              bHideFollowButton: _,
              bAddLinkToMemberList: _,
              bMinimalDisplay: _,
            } = _,
            { creatorHome: _ } = (0, _._)(_.clan_account_id),
            [_] = (0, _._)();
          return _ || !_
            ? (0, _.jsx)("div", {
                className: _.DevSummaryWidgetCtn,
                children: (0, _.jsx)(_._, {
                  string: (0, _._)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  strURL: _.GetCreatorHomeURL(_.type),
                  strName: _.GetName(),
                  strAvatarURL: _.GetAvatarURLFullSize(),
                  nFollowers: _.GetNumFollowers(),
                  strCreatorType: _ ? void 0 : _(_.type),
                  strTagLine: _ ? _.GetTagLine() : void 0,
                  strMemberListURL: _
                    ? _._.COMMUNITY_BASE_URL +
                      "gid/" +
                      _.GetClanSteamID().ConvertTo64BitString() +
                      "/members/"
                    : void 0,
                  followButton: _
                    ? void 0
                    : (0, _.jsx)(_._, {
                        clanAccountID: _.clan_account_id,
                        creatorID: _,
                      }),
                  bSmallFormat: _,
                  bMinimalDisplay: _,
                }),
              });
        }
        function _(_) {
          const { appid: _, bSmallFormat: _ } = _,
            _ = _(_);
          return _
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  rgCreators: _,
                  renderCreator: (_) =>
                    (0, _.jsx)(_, {
                      creatorID: _,
                      bSmallFormat: _,
                    }),
                }),
              })
            : (0, _.jsx)("div", {
                className: _.DevSummaryWidgetCtn,
                children: (0, _.jsx)(_._, {}),
              });
        }
        function _(_) {
          const { clanInfo: _, bAddLinkToMemberList: _ } = _;
          if (
            (AssertMsg(
              _ && _.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !_)
          )
            return null;
          const _ = {
            clan_account_id: _.clanAccountID,
            name: _.group_name,
            type: "developer",
          };
          return jsx("div", {
            className: creatorstyle.CuratorHoverCtn,
            children: jsx(_, {
              creatorID: _,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: _,
            }),
          });
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            onEscKeypress: _.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _.redirectURL,
              guestOption: _.guestOption,
            }),
          });
        }
        function _(_) {
          const { redirectURL: _ = window.location.href } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _,
            }),
          });
        }
        function _() {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_, _) {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: _,
              guestOption: _,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_) {
          const { redirectURL: _, guestOption: _ } = _,
            [_] = (0, _.useState)(
              new _._(_._.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
                  redirectUrl: _,
                  theme: "modal",
                  children:
                    _ &&
                    (0, _.jsx)(_._, {
                      redirectURL: _,
                    }),
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
                _?.(_, _[_], _);
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
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { item: _ } = _,
            { data: _ } = _(_.GetStoreItemType() == _._._ ? _.GetID() : void 0);
          return _
            ? (0, _._)("#Cart_ShippingEstimate_DeliveryDate", _(_))
            : null;
        }
        function _(_) {
          return (0, _._)(
            "#Hardware_ShippingEstimate_Range",
            _.estimated_delivery_soonest_business_days ?? 0,
            _.estimated_delivery_latest_business_days ?? 0,
          );
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["GetHardwareItems", _],
            queryFn: async () => _(_).load(_),
            enabled: !!_,
          });
        }
        let _;
        function _(_) {
          return _ || (_ = _(_)), _;
        }
        function _(_) {
          return new (_())(
            async (_) => {
              const _ = _._.Init(_._);
              (0, _._)(_), _.Body().set_packageid([..._]);
              const _ = await _._.GetHardwareItems(_, _);
              return _.BSuccess()
                ? (_.Body().toObject().details ??
                    _.map(() => new Error("No hardware details returned")))
                : (console.warn(`Failed to load hardware: ${_.GetEResult()}`),
                  _.map(() => new Error(_.GetErrorMessage())));
            },
            {
              cache: !1,
            },
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { component: _ = "a" } = _,
            _ = _(_);
          return (0, _.jsx)(_, {
            ..._,
          });
        }
        function _(_) {
          const {
              item: _,
              feature: _,
              depth: _,
              noImpressionTracking: _,
              ..._
            } = _,
            _ = _.useRef(0),
            _ = _ && _.GetStoreItemType() == _._._ ? _.GetAppID() : null,
            _ = (0, _._)(),
            _ = _.useMemo(
              () =>
                _._.GetLinkParam(
                  {
                    ..._,
                    feature: _ || _.feature,
                  },
                  _,
                ),
              [_, _, _],
            ),
            _ = _.useMemo(() => _._.GetCuratorClanIDParam(_), [_]),
            _ = _.useMemo(
              () => _._.AddNavParamToURL(_ ? _.GetStorePageURL() : "", _, _),
              [_, _, _],
            ),
            _ = (0, _._)(),
            _ = _.useCallback(() => {
              _ && _.current != _ && (_.AddImpression(_, _), (_.current = _));
            }, [_, _, _, _]),
            _ = (0, _._)({
              onEnter: _,
            });
          return {
            ..._,
            href: _,
            ref: _ && !_ ? _ : void 0,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { href: _, children: _, bAllowFocuseableAnchor: _, ..._ } = _;
          return _._.EREALM === _._.k_ESteamRealmChina
            ? (0, _.jsx)("div", {
                ..._,
                children: _,
              })
            : _
              ? (0, _.jsx)(_._, {
                  href: _,
                  ..._,
                  children: _,
                })
              : (0, _.jsx)("a", {
                  href: _,
                  ..._,
                  children: _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _(_),
            _ = (0, _._)({
              loadFavorites: !0,
              loadNicknames: !0,
            }),
            _ = _?.data?.ownership_info[0]?.friend_ownership,
            _ = _.useMemo(
              () => new Map(_ && _.map((_) => [_.accountid, _])),
              [_],
            ),
            _ = _.useMemo(() => new Set(_), [_]);
          if (_.isLoading || _.isLoading)
            return {
              isLoading: !0,
            };
          if (_.isError || _.isError)
            return {
              isError: !0,
            };
          const _ = _.data.map((_, _) => {
            const _ = _.get(_.accountid) || {
              already_owns: !1,
              wishes_for: !1,
            };
            return {
              ..._,
              ownership: _,
            };
          });
          return (
            _.sort((_, _) => {
              const _ = _.has(_.accountid),
                _ = _.has(_.accountid);
              if (_ != _) return _ ? -1 : 1;
              if (_.is_favorite != _.is_favorite) return _.is_favorite ? -1 : 1;
              if (_.ownership.wishes_for) {
                if (!_.ownership.wishes_for) return -1;
              } else if (_.ownership.wishes_for) return 1;
              const _ = _.ownership.partial_wishes_for?.length ?? 0,
                _ = _.ownership.partial_wishes_for?.length ?? 0;
              if (_ != _) return _ - _;
              if (_.ownership.already_owns) {
                if (!_.ownership.already_owns) return 1;
              } else if (_.ownership.already_owns) return -1;
              const _ = _.ownership.partial_owns_appids?.length ?? 0,
                _ = _.ownership.partial_owns_appids?.length ?? 0;
              if (_ != _) return _ - _;
              if (_ > 0) {
                const _ = _.ownership.partial_wishes_for.reduce(
                    (_, _) => _ ^ _,
                    0,
                  ),
                  _ = _.ownership.partial_wishes_for.reduce((_, _) => _ ^ _, 0);
                if (_ != _) return _ - _;
              }
              if (_ > 0) {
                const _ = _.ownership.partial_owns_appids.reduce(
                    (_, _) => _ ^ _,
                    0,
                  ),
                  _ = _.ownership.partial_owns_appids.reduce(
                    (_, _) => _ ^ _,
                    0,
                  );
                if (_ != _) return _ - _;
              }
              return _.persona.m_strPlayerName.localeCompare(
                _.persona.m_strPlayerName,
              );
            }),
            {
              rgFriendsForGifting: _,
            }
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_.GetID(), _.GetStoreItemType());
          return (0, _._)({
            queryKey: ["FriendOwnershipForGifting", _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_item_ids([_._.fromObject(_)]);
              const _ = await _._.GetFriendOwnershipForGifting(_, _);
              if (!_.BSuccess()) throw _.GetEResult();
              return _.Body().toObject();
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_.gift_info?.accountid_giftee),
            _ = _.useMemo(
              () =>
                (0, _._)("giftee_player_summaries", "application_config") ?? [],
              [],
            );
          if (!_.gift_info?.accountid_giftee || _.isLoading) return null;
          if (_.data?.m_bInitialized || _) return _.data;
          const _ = _.find((_) => _.accountid === _.gift_info.accountid_giftee);
          if (!_) return null;
          let _ = new _._(_._.InitFromAccountID(_.accountid));
          return (
            (_.m_strAvatarHash = _.avatarHash),
            (_.m_strPlayerName = _.playerName),
            (_.m_bInitialized = !0),
            _
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
          _: () => _._,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _._)("cart_config", "application_config");
        }
        function _() {
          return ["shopping_cart", "relevant_coupons"];
        }
        function _() {
          return ["shopping_cart", "sale_drop_progress"];
        }
        async function _(_, _, _, _, _, _) {
          if (BIsAccountCart(_)) {
            const _ = CProtoBufMsg.Init(CAccountCart_AddItemsToCart_Request);
            _.Body().set_user_country(UserConfig.country_code);
            for (let _ = 0; _ < _; _++) {
              const _ = _.Body().add_items();
              _ == EStoreItemType.k_EStoreItemType_Package
                ? _.set_packageid(_)
                : _ == EStoreItemType.k_EStoreItemType_Bundle
                  ? _.set_bundleid(_)
                  : console.error(
                      `Unrecognized store item type for quantity update: ${_}`,
                    );
            }
            const _ = await AccountCartService.AddItemsToCart(_, _);
            _.BSuccess() ||
              console.warn(
                `Failed to update account cart item quantity: ${_.GetEResult()}`,
              );
          } else {
            const _ = CProtoBufMsg.Init(
              CShoppingCart_UpdatePackageQuantity_Request,
            );
            _.Body().set_gidlineitem(_),
              _.Body().set_gidshoppingcart(_.gid),
              _.Body().set_quantity(_);
            const _ = await ShoppingCartService.UpdatePackageQuantity(_, _);
            _.BSuccess() ||
              console.warn(`Failed to update shopping cart: ${_.GetEResult()}`);
          }
        }
        function _(_, _, _, _) {
          const _ = useShoppingCartID(),
            _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useShoppingCartID();
          return useMutation({
            mutationFn: async () => await _(_, _, _, _, _, _),
            onSuccess: () => InvalidateShoppingCart(_, _),
          });
        }
        const _ = {
            include_basic_info: !0,
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          },
          _ = {
            ..._,
            include_included_items: !0,
            include_all_purchase_options: !0,
            included_item_data_request: _,
          };
        function _() {
          const [_] = (0, _._)();
          return (0, _._)(_, _);
        }
        function _(_) {
          return (
            _?.cart_items.length &&
            _.cart_items.every(
              ({ store_item: _ }) =>
                _.item_type == _._._ &&
                (_.self_purchase_option || _.best_purchase_option)
                  ?.requires_shipping,
            )
          );
        }
        function _(_) {
          return (
            _?.cart_items.length &&
            _.cart_items.every(
              ({ store_item: _, gift_info: _ }) =>
                _.item_type == _._._ &&
                _ !== void 0 &&
                (!!_.accountid_giftee || !!_.email_giftee),
            )
          );
        }
        async function _(_) {
          const _ = _._.Init(_._);
          _.Body().set_language((0, _.sfN)(_._.LANGUAGE));
          const _ = await _._.GetRelevantCoupons(_, _);
          return _.BIsValid()
            ? _.Body().toObject()
            : (console.error("Failed to load relevant coupons"), {});
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(),
            queryFn: async () =>
              (await _(_)).line_items.reduce(
                (_, _) => ((_[_.line_item_id] = _.coupons), _),
                {},
              ),
            enabled: _._.logged_in,
            placeholderData: () => ({}),
          });
        }
        function _() {
          return (0, _._)({
            queryKey: _(),
            queryFn: async () => {
              const _ = await (
                await fetch(`${_._.STORE_BASE_URL}cart/ajaxsaledropprogress`)
              ).json();
              return (
                _.eresult !== _._ &&
                  console.error("Failed to load sale drop progress"),
                _
              );
            },
            enabled: _._.logged_in,
          });
        }
        function _() {
          const _ = (0, _._)(),
            [_] = (0, _._)(),
            _ = `${_._.STORE_CHECKOUT_BASE_URL}checkout/`;
          if ((0, _._)(_)) return `${_}?accountcart=1`;
          if ((0, _._)(_)) return `${_}?gidreplay=${_.gid}`;
          {
            const _ = new URLSearchParams();
            return (
              _.append("cart", _.gid),
              _ &&
                _.accountid_giftee &&
                (_.append("purchasetype", "gift"),
                _.append("bIsGift", "1"),
                _.append("giftInfo", encodeURIComponent(JSON.stringify(_)))),
              `${_}?${_.toString()}`
            );
          }
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)(_) ? _.requestID : null;
        }
        function _(_) {
          return (0, _._)(_) || (0, _._)(_);
        }
        var _ = ((_) => (
          (_[(_.k_ECanRequest = 0)] = "k_ECanRequest"),
          (_[(_.k_EIsNotChild = 1)] = "k_EIsNotChild"),
          (_[(_.k_EInvalidCartType = 2)] = "k_EInvalidCartType"),
          (_[(_.k_ENonGiftableItemPresent = 3)] = "k_ENonGiftableItemPresent"),
          _
        ))(_ || {});
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _(),
            _ = _.isSuccess && _.data.role() == _._._,
            _ = _.data?.cart_items.some((_) => !_.can_purchase_as_gift);
          let _ = 0;
          return _ ? (_(_) ? _ && (_ = 3) : (_ = 2)) : (_ = 1), [_ === 0, _];
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return _.isSuccess && _.data.role() == _._._ && (0, _._)(_);
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
            lineItems: _ = [],
            cartValidation: _,
            LineItemContainer: _ = _,
            scrollable: _ = !1,
          } = _;
          if (!_.length) return (0, _.jsx)(_, {});
          const _ = _?.cart_items
            ? _.cart_items.reduce((_, _) => ((_[_.line_item_id] = _), _), {})
            : {};
          return (0, _.jsx)(_._, {
            scrollable: _,
            children:
              _ &&
              _.map((_, _) =>
                _
                  ? (0, _.jsx)(
                      _,
                      {
                        item: _,
                        loading: _ === void 0,
                        validatedItem: _[_.line_item_id],
                        LineItemContainer: _,
                      },
                      _.line_item_id,
                    )
                  : (0, _.jsx)(_._, {}, _),
              ),
          });
        }
        const _ = {
          [_._._]: _,
          [_._._]: _,
        };
        function _(_) {
          const { item: _, loading: _, ..._ } = _,
            _ = _ ? _._ : _[_.type];
          return _
            ? (0, _.jsx)(_._, {
                fallback: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                    error: _,
                  }),
                children: (0, _.jsx)(_, {
                  item: _,
                  ..._,
                }),
              })
            : (console.error(`Unknown line item type (${_.type})`), null);
        }
        function _(_) {
          const { item: _, error: _ } = _,
            _ = (0, _._)(_.line_item_id);
          return (0, _.jsxs)(_._, {
            className: _().ErrorLineItem,
            children: [
              (0, _.jsxs)("div", {
                className: _().Left,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Error,
                    children: (0, _._)("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().Muted,
                    children: _.message,
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                onActivate: () => _.mutate(),
                className: _().RemoveButton,
                children: (0, _._)("#Cart_Remove"),
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)(_._, {
            className: _().ErrorLineItem,
            children: (0, _.jsx)("div", {
              className: _().Left,
              children: (0, _.jsx)("div", {
                className: _().LineItemTitle,
                children: (0, _._)("#Cart_Empty"),
              }),
            }),
          });
        }
        function _(_) {
          const { item: _, validatedItem: _ } = _,
            [_, _] = (0, _._)(_.bundleid, _._._, _._);
          if ((_ && !_.BIsVisible()) || _ === _._)
            return (0, _.jsx)(_, {
              lineItemID: _.line_item_id,
              validatedItem: _,
              storeItem: _,
            });
          if (!_) return (0, _.jsx)(_._, {});
          const _ = _.GetSelfPurchaseOption();
          return (0, _.jsx)(_, {
            ..._,
            storeItem: _,
            displayItem: _,
            lineItem: _,
            validatedItem: _,
            purchaseOption: _,
          });
        }
        function _(_) {
          const { item: _, validatedItem: _ } = _,
            [_, _] = (0, _._)(_.packageid, {}),
            [_, _] = (0, _._)(_.packageid, _._._, _._),
            _ = (_ && !_.BIsVisible()) || _ === _._ || _ === _._,
            _ = _?.GetSelfPurchaseOption();
          return _ || (_ && !_)
            ? (0, _.jsx)(_, {
                lineItemID: _.line_item_id,
                validatedItem: _,
                storeItem: _,
              })
            : !_ || !_
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_, {
                  ..._,
                  storeItem: _,
                  displayItem: _,
                  lineItem: _,
                  purchaseOption: _,
                });
        }
        function _(_) {
          const { lineItemID: _, validatedItem: _, storeItem: _ } = _,
            _ = _(_),
            _ = (0, _._)(_),
            _ = _.isPending;
          return (0, _.jsxs)(_._, {
            placeholder: !0,
            children: [
              _ && (0, _.jsx)(_._, {}),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().InnerLineItemCtn,
                  _ && _().PendingLineItem,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().LineItemColumn,
                      _().LineItemCapsule,
                    ),
                    children: (0, _.jsx)(_._, {
                      item: _,
                      noImpressionTracking: !0,
                      children: (0, _.jsx)("img", {
                        className: _().HeaderImg,
                        src: _,
                      }),
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().LineItemDetailsCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().LineItemDetailsRowTop,
                        children: (0, _.jsx)("div", {
                          className: _().LineItemTitle,
                          children:
                            _?.GetName() ||
                            (0, _._)("#SteamCharts_UnknownGameTitle"),
                        }),
                      }),
                      (0, _.jsx)(_, {
                        validatedItem: _,
                      }),
                      (0, _.jsx)(_._, {
                        className: _().LineItemSpaceBetween,
                        children: (0, _.jsx)(_._, {
                          onActivate: () => _.mutate(),
                          className: _().RemoveLineItem,
                          children: (0, _._)("#Cart_Remove"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              storeItem: _,
              displayItem: _,
              lineItem: _,
              purchaseOption: _,
              validatedItem: _,
              LineItemContainer: _,
            } = _,
            _ = _.line_item_id,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.isPending || _.isSuccess,
            _ = _.GetIncludedAppIDsOrSelf(),
            { data: _, isLoading: _ } = (0, _._)(),
            _ = _.filter((_) => _?.has(_)),
            _ = _.useId();
          if (_ || !_) return (0, _.jsx)(_._, {});
          const _ = _.flags?.is_gift,
            _ = _.length === _.length,
            _ = !_ && _.length > 0 && !_;
          return (0, _.jsxs)(_, {
            lineItem: _,
            storeItem: _,
            validatedItem: _,
            children: [
              _ && (0, _.jsx)(_._, {}),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().InnerLineItemCtn,
                  _ && _().PendingLineItem,
                ),
                children: [
                  (0, _.jsx)(_, {
                    storeItem: _,
                    displayItem: _,
                    validatedItem: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().LineItemDetailsCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().LineItemDetailsRowTop,
                        children: (0, _.jsx)("div", {
                          className: _().LineItemTitle,
                          _: _,
                          children: _.GetName(),
                        }),
                      }),
                      _.BIsComingSoon() &&
                        (0, _.jsx)(_, {
                          storeItem: _,
                        }),
                      (0, _.jsxs)(_, {
                        validatedItem: _,
                        children: [
                          (0, _.jsx)(_, {
                            item: _,
                          }),
                          (0, _.jsx)(_, {
                            item: _,
                          }),
                          (0, _.jsx)(_, {
                            item: _,
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        validatedItem: _,
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          appids: _,
                        }),
                      (0, _.jsxs)(_._, {
                        className: _().LineItemSpaceBetween,
                        children: [
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _().LineItemCol,
                              _().PlatformIcons,
                            ),
                            children: (0, _.jsx)(_._, {
                              _: _,
                              strClassName: _().LineItemPlatforms,
                            }),
                          }),
                          (0, _.jsx)(_, {
                            purchaseOption: _,
                            validatedItem: _,
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        lineItem: _,
                        storeItem: _,
                        purchaseOption: _,
                        validatedItem: _,
                        bAllAppsPrivate: _,
                        fnRemoveLineItem: _.mutate,
                        accessibilityId: _,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { storeItem: _, displayItem: _, validatedItem: _ } = _,
            _ = _(_),
            _ = _?.errors?.adult_content_restricted;
          return (0, _.jsx)("div", {
            className: (0, _._)(_().LineItemColumn, _().LineItemCapsule),
            children: (0, _.jsx)(_._, {
              item: _,
              feature: "cart-items",
              noImpressionTracking: !0,
              children: (0, _.jsx)("img", {
                className: _ ? _().HeaderImgBlurred : _().HeaderImg,
                src: _,
                alt: _.GetName(),
              }),
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              children: _.children,
            }),
          });
        }
        function _(_) {
          const { purchaseOption: _, validatedItem: _ } = _;
          let _ = _?.formatted_original_price,
            _ = _?.formatted_final_price,
            _ = _?.discount_pct,
            _ = _?.final_price_in_cents;
          return (
            _ &&
              _.original_price &&
              _.subtotal.amount_in_cents != _ &&
              ((_ = _.original_price.formatted_amount),
              (_ = _.subtotal.formatted_amount),
              (_ = (0, _._)(_))),
            (0, _.jsx)("div", {
              className: _().LineItemRightCol,
              children: (0, _.jsx)(_._, {
                className: _().PriceWidget,
                formatted_orig_price: _,
                formatted_final_price: _,
                discount_percent: _,
                bHideDiscountPercentForCompliance:
                  _.hide_discount_pct_for_compliance,
                bDiscountFromCoupon: !!_?.coupon_discount?.amount_in_cents,
              }),
            })
          );
        }
        function _(_) {
          const {
              lineItem: _,
              storeItem: _,
              purchaseOption: _,
              validatedItem: _,
              bAllAppsPrivate: _,
              fnRemoveLineItem: _,
              accessibilityId: _,
            } = _,
            _ = (0, _._)(),
            [_] = (0, _._)(),
            _ =
              _?.accountid_giftee ||
              (_ ? _.gift_info?.accountid_giftee : void 0),
            _ = (0, _._)(),
            _ =
              (0, _._)() && !_?.restrict_add_additional_to_cart && !(0, _._)(_),
            _ = _.errors?.adult_content_restricted,
            _ = (0, _._)(
              _.packageid,
              _.bundleid,
              _(_),
              void 0,
              "cart-add-additional",
            ),
            _ = _.useId(),
            _ = _.useId();
          return (0, _.jsxs)(_._, {
            className: _().LineItemSpaceBetween,
            children: [
              (0, _.jsx)("div", {
                className: _().LineItemCol,
                children: _
                  ? (0, _.jsx)(_, {
                      recipient: _,
                    })
                  : (0, _.jsx)(_, {
                      lineItem: _,
                      storeItem: _,
                      bAllAppsPrivate: _,
                      purchaseOption: _,
                    }),
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().LineItemRightCol, _().AddRemoveLinks),
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_._, {
                          onActivate: () => !_.isPending && _.mutate(),
                          className: _().AddLineItem,
                          title: (0, _._)("#Cart_LineItem_Add_Tooltip"),
                          _: _,
                          "aria-labelledby": `${_} ${_}`,
                          children: (0, _._)("#Cart_Add"),
                        }),
                        "|",
                      ],
                    }),
                  !_ &&
                    (0, _.jsx)(_._, {
                      onActivate: () => _(),
                      className: _().RemoveLineItem,
                      _: _,
                      "aria-labelledby": `${_} ${_}`,
                      children: (0, _._)("#Cart_Remove"),
                    }),
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        "| ",
                        (0, _.jsx)("a", {
                          href: `${_._.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                          className: _().VerifyLineItem,
                          children: (0, _._)("#Cart_Verify"),
                        }),
                        " ",
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)(_.recipient);
          return (0, _.jsx)("div", {
            className: _().GiftForNotice,
            children: (0, _._)(
              "#Cart_GiftForNotice",
              _.data
                ? (0, _.jsx)("span", {
                    className: _().Name,
                    children: _.data.m_strPlayerName,
                  })
                : "",
            ),
          });
        }
        function _(_) {
          const _ = `${_._.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          if (!_) return _;
          const _ = _.GetAssets();
          if (!_) return _;
          const _ = _.GetHeaderURL(),
            _ = _.GetSmallCapsuleURL();
          return _ || _ || _;
        }
        function _(_) {
          const { storeItem: _ } = _;
          let _ = (0, _._)(
            "#Cart_ComingSoon",
            _.GetFormattedSteamReleaseDate(),
          );
          return (
            _.BIsCustomComingSoonDisplay() &&
              (_ = _.GetFormattedSteamReleaseDate()),
            (0, _.jsx)(_._, {
              children: _,
            })
          );
        }
        function _(_) {
          const { validatedItem: _, children: _ } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().LineItemSpaceBetween),
            children: [
              (0, _.jsx)(_._, {
                lineItem: _,
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { item: _ } = _;
          return _.GetSelfPurchaseOption()?.requires_shipping
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  item: _,
                }),
              })
            : null;
        }
        function _(_) {
          const { item: _ } = _;
          if (!_.GetSelfPurchaseOption()?.requires_shipping) return null;
          const _ = _._.country_code;
          return ["GB"].includes(_)
            ? (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)("a", {
                    className: (0, _._)(_().ComplianceLink),
                    target: "_blank",
                    href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                    children: (0, _._)(
                      "#Cart_LineItem_Hardware_Compliance_Label",
                    ),
                  }),
                }),
              })
            : null;
        }
        var _ = ((_) => (
            (_[(_.k_EBillingAgreementTypeInvalid = 0)] =
              "k_EBillingAgreementTypeInvalid"),
            (_[(_.k_EBillingAgreementTypeSteam = 1)] =
              "k_EBillingAgreementTypeSteam"),
            (_[(_.k_EBillingAgreementTypeGame = 2)] =
              "k_EBillingAgreementTypeGame"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_ETimeUnitNone = 0)] = "k_ETimeUnitNone"),
            (_[(_.k_ETimeUnitSecond = 1)] = "k_ETimeUnitSecond"),
            (_[(_.k_ETimeUnitMinute = 2)] = "k_ETimeUnitMinute"),
            (_[(_.k_ETimeUnitHour = 3)] = "k_ETimeUnitHour"),
            (_[(_.k_ETimeUnitDay = 4)] = "k_ETimeUnitDay"),
            (_[(_.k_ETimeUnitWeek = 5)] = "k_ETimeUnitWeek"),
            (_[(_.k_ETimeUnitMonth = 6)] = "k_ETimeUnitMonth"),
            (_[(_.k_ETimeUnitYear = 7)] = "k_ETimeUnitYear"),
            _
          ))(_ || {});
        function _(_) {
          const { item: _ } = _;
          if (!_ || _.GetStoreItemType() != _._._) return null;
          const _ = _.GetSelfPurchaseOption()?.recurrence_info;
          if (!_) return null;
          let _ = "#Package";
          _.billing_agreement_type === 2 && (_ = "#GameBillingPackage");
          const _ = _.GetSelfPurchaseOption();
          _.formatted_final_price && _.discount_pct && (_ += "WithDiscount");
          const _ = {
              1: "Second",
              2: "Minute",
              3: "Hour",
              4: "Day",
              5: "Week",
              6: "Month",
              7: "Year",
            }[_.renewal_time_unit],
            _ = _ + "CostIncludesSubscriptionBy" + _;
          return (0, _.jsx)(_._, {
            children: (0, _._)(
              _,
              _.formatted_final_price,
              _.formatted_renewal_price,
              _.renewal_time_period,
              _.discount_pct,
            ),
          });
        }
        function _(_) {
          const {
              lineItem: _,
              storeItem: _,
              bAllAppsPrivate: _,
              purchaseOption: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = !_(_) || _,
            _ = !_(_);
          let _ = [
            {
              data: "myself",
              label: (0, _._)("#Cart_LineItemOptions_Myself"),
            },
            !_ && {
              data: "private",
              label: (0, _._)("#Cart_LineItemOptions_Privately"),
              tooltip: (0, _._)("#Cart_LineItemOptions_PrivateTooltip"),
            },
          ].filter(Boolean);
          _ ||
            (_.gift_info?.accountid_giftee && _?.m_strPlayerName
              ? _.push({
                  data: "gift",
                  label: (0, _._)(
                    "#Cart_LineItemOptions_GiftForPersona",
                    _.m_strPlayerName,
                  ),
                })
              : _.push({
                  data: "gift",
                  label: (0, _._)("#Cart_LineItemOptions_Gift"),
                }));
          let _ = _.flags?.is_gift ? "gift" : "myself";
          if ((_ === "myself" && _ && (_ = "private"), _.length === 1))
            return null;
          const _ = (_) => {
            if (_ === _.data) return;
            const _ = (_) =>
                _.mutate({
                  rgAppIDs: _.GetIncludedAppIDsOrSelf(),
                  bPrivate: _,
                }),
              _ = (_) =>
                _.mutate({
                  lineItemID: _.line_item_id,
                  lineItemFlags: {
                    ..._.flags,
                    is_gift: _,
                  },
                  giftInfo: _ ? _.gift_info : void 0,
                });
            _ === "private" ? _(!1) : _ === "gift" && _(!1),
              _.data === "private" ? _(!0) : _.data === "gift" && _(!0);
          };
          return (0, _.jsx)(_, {
            onChange: _,
            selectedOption: _,
            rgOptions: _,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            strClassName: _().LineItemDropDown,
            strDropDownItemClassName: _().DropDownOptionItem,
            strDropDownClassName: _().DropDownOptionsCtnThin,
            strDropDownButtonClassName: _().DropDownThin,
            ..._,
          });
        }
        const _ = _.memo(function (_) {
          const { validatedItem: _ } = _,
            _ = _.included_packageids,
            _ = (0, _._)(),
            _ = (0, _._)({
              queries: _.map((_) =>
                (0, _._)(_, {
                  packageid: _,
                }),
              ),
            }),
            _ = [
              ...new Set(
                _.map((_) => _.data)
                  .filter(Boolean)
                  .flat(),
              ),
            ];
          return !_.length || (_.length == 1 && !_.item_id.bundleid)
            ? null
            : (0, _.jsxs)(_._, {
                text: !0,
                children: [
                  (0, _.jsxs)("span", {
                    children: [
                      (0, _._)("#Cart_IncludesItems", _.length),
                      ":",
                      " ",
                    ],
                  }),
                  _.map((_, _) =>
                    (0, _.jsxs)(
                      _.Fragment,
                      {
                        children: [
                          _ > 0 && ", ",
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        ],
                      },
                      _,
                    ),
                  ),
                ],
              });
        });
        function _(_) {
          const { appids: _ } = _,
            _ = _.map((_, _) =>
              (0, _.jsxs)(
                _.Fragment,
                {
                  children: [
                    _ > 0 && ", ",
                    (0, _.jsx)(_, {
                      appid: _,
                    }),
                  ],
                },
                _,
              ),
            );
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)("span", {
                children: [(0, _._)("#Cart_Notice_SomeAppsPrivate"), "\xA0"],
              }),
              _,
            ],
          });
        }
        function _(_) {
          return _.user_can_purchase_as_gift;
        }
        function _(_) {
          return !_.is_commercial_license && !_.requires_shipping;
        }
        const _ = {
          direction: "right",
          style: {
            width: "320px",
            height: `${320 * (125 / 184)}px`,
          },
        };
        function _(_) {
          const { name_override: _, ..._ } = _,
            { data: _ } = (0, _._)(_ ? void 0 : _),
            _ = _ ?? _?.name;
          return (0, _.jsx)(_, {
            ..._,
            name: _,
            children: _,
          });
        }
        function _(_) {
          const { name: _, children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            _: _,
            hoverProps: _,
            name: _,
            className: _().LineItemStoreHover,
            bShowWishlistButton: !1,
            children: _,
          });
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext(null);
        function _(_) {
          const { validateCart: _, children: _, eDisplayType: _ } = _,
            _ = _(_, _);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          const { rgCartLevelNotices: _ } = _.useContext(_);
          return !_ || !_.length
            ? null
            : _.length == 1
              ? (0, _.jsx)("div", {
                  className: _().HeaderNotices,
                  children: (0, _._)("#Cart_CartLevelErrorFormat", _[0]),
                })
              : (0, _.jsxs)("div", {
                  className: _().HeaderNotices,
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)("#Cart_CartLevelErrorMultiple"),
                    }),
                    (0, _.jsx)("ul", {
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          "li",
                          {
                            children: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                });
        }
        function _(_) {
          const { validateCart: _ } = _,
            { mapValidateNoticesToFootnote: _ } = _.useContext(_);
          if (!_ || !_.size) return null;
          const _ = (_?.cart_items || []).every((_) => !_.errors),
            _ = _
              ? (0, _._)("#Cart_FooterNoticeHeader_Warning")
              : (0, _._)("#Cart_FooterNoticeHeader_MustFix"),
            _ = (0, _._)(_().FooterNoticesHeader, !_ && _().MustFix);
          return (0, _.jsxs)("div", {
            className: _().FooterNoticesCtn,
            children: [
              (0, _.jsx)("div", {
                className: _,
                children: _,
              }),
              Array.from(_).map(([_, _]) =>
                (0, _.jsx)(
                  _,
                  {
                    notice: _,
                  },
                  _.index,
                ),
              ),
            ],
          });
        }
        function _(_) {
          const { notice: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().FooterNotice,
            children: [
              (0, _.jsx)("div", {
                className: _().NoticeIndex,
                children: (0, _.jsx)("sup", {
                  children: _.index,
                }),
              }),
              (0, _.jsx)("div", {
                className: _().NoticeText,
                children: _.footnote_text,
              }),
            ],
          });
        }
        function _(_) {
          return _.useContext(_)?.mapValidateNoticesToFootnote.get(_)?.index;
        }
        var _ = ((_) => (
          (_[(_.k_ECartDisplayType_Unknown = 0)] =
            "k_ECartDisplayType_Unknown"),
          (_[(_.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
          (_[(_.k_ECartDisplayType_FullPage = 2)] =
            "k_ECartDisplayType_FullPage"),
          _
        ))(_ || {});
        function _() {
          return _.useContext(_)?.eDisplayType ?? 0;
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _();
          let _ = [],
            _ = !!_.gift_info?.accountid_giftee;
          return (
            _.errors?.duplicate_appids_in_cart?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Error_DuplicateApps_LineItem"),
                    appids: _.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  lineItem: _,
                },
                "owned_apps",
              ),
            ),
            _.errors?.unavailable_in_country &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            _.errors?.adult_content_restricted &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            _.errors?.commercial_license_restricted &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            _.errors?.gift_not_valid_for_recipient_region &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Error_GiftRecipientInvalid"),
                  },
                  "gift_recipient_invalid",
                ),
              ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  lineItem: _,
                },
                "coupon_notices",
              ),
            ),
            _.errors?.too_many_in_cart &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            _.errors?.missing_must_own_appids?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: _
                      ? (0, _._)("#Cart_Error_MissingMustOwnApps_GiftLineItem")
                      : (0, _._)("#Cart_Error_MissingMustOwnApps_LineItem"),
                    appids: _.errors.missing_must_own_appids,
                  },
                  "missing_must_own_appids",
                ),
              ),
            _.warnings?.appids_in_mastersub?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: _.warnings.appids_in_mastersub.map(
                      (_) => _.cart_appid,
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            _.warnings?.owned_appids?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: _.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            _.warnings?.owned_appids_extra_copy?.length &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Warning_ExtraCopies_LineItem"),
                    appids: _.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            _.warnings?.price_has_changed &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Warning_PriceChange_LineItem"),
                  },
                  "price_has_changed",
                ),
              ),
            _.warnings?.non_refundable &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Warning_NoRefund_LineItem"),
                  },
                  "non_refundable",
                ),
              ),
            _.warnings?.gift_recipient_higher_price &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    purchase_state: _._._,
                    notice_text: (0, _._)("#Cart_Warning_RecipientHigherPrice"),
                  },
                  "non_refundable",
                ),
              ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  lineItem: _,
                },
                "available_cheaper",
              ),
            ),
            _ &&
              _ === 1 &&
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    nGifteeAccountID: _.gift_info.accountid_giftee,
                  },
                  "non_friend_gift",
                ),
              ),
            _
          );
        }
        function _(_) {
          const { purchase_state: _, notice_text: _, appids: _ } = _,
            _ = _(_);
          return (0, _.jsxs)(_._, {
            children: [
              _,
              _ &&
                (0, _.jsx)("sup", {
                  children: _,
                }),
              " ",
              (0, _.jsx)(_, {
                rgAppIDs: _,
              }),
            ],
          });
        }
        function _(_) {
          const { rgAppIDs: _ } = _;
          return !_ || _.length == 0
            ? null
            : _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    last: _ >= _.length - 1,
                  },
                  `${_}_${_}`,
                ),
              );
        }
        function _(_) {
          const { appid: _, last: _ } = _,
            [_] = (0, _._)(_, {
              include_basic_info: !0,
            });
          return _
            ? (0, _.jsxs)(_._, {
                appid: _,
                children: [
                  (0, _.jsx)(_._, {
                    item: _,
                    noImpressionTracking: !0,
                    children: _.GetName(),
                  }),
                  !_ &&
                    (0, _.jsx)(_.Fragment, {
                      children: ", ",
                    }),
                ],
              })
            : null;
        }
        function _(_) {
          const { lineItem: _ } = _;
          if (!_.errors?.owned_appids?.length) return null;
          let _ = !!_.gift_info?.accountid_giftee;
          if (_.errors?.has_existing_billing_agreement)
            return (0, _.jsx)(_, {
              purchase_state: _._._,
              notice_text: (0, _._)("#Cart_Error_ExistingBillingAgreement"),
            });
          {
            const _ = (_.store_item?.included_appids.length ?? 0) > 1;
            let _ = (0, _._)(
              _
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              _ &&
                (_ = (0, _._)(
                  _
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, _.jsx)(_, {
                purchase_state: _._._,
                notice_text: _,
                appids: _ ? _.errors.owned_appids : null,
              })
            );
          }
        }
        function _(_) {
          const { lineItem: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _.errors?.coupon_exclusive_promo &&
                (0, _.jsx)(_, {
                  purchase_state: _._._,
                  notice_text: (0, _._)("#Cart_Error_CouponIsExclusivePromo"),
                }),
              _.errors?.invalid_coupon &&
                (0, _.jsx)(_, {
                  purchase_state: _._._,
                  notice_text: (0, _._)("#Cart_Error_CouponIsInvalid"),
                }),
              _.errors?.invalid_coupon_for_item &&
                (0, _.jsx)(_, {
                  purchase_state: _._._,
                  notice_text: (0, _._)("#Cart_Error_CouponIsInvalidForItem"),
                }),
            ],
          });
        }
        function _(_) {
          const { lineItem: _ } = _,
            { data: _ } = (0, _._)(_.item_id),
            { data: _ } = (0, _._)(_.item_id);
          if (!!_.gift_info?.accountid_giftee || !_ || !_ || (0, _._)(_, _))
            return null;
          const { purchase_option_name: _, packageid: _, bundleid: _ } = _,
            _ = _
              ? {
                  packageid: _,
                }
              : {
                  bundleid: _,
                };
          return (0, _.jsx)(_._, {
            children: (0, _._)(
              "#Cart_Warning_AvailableAtALowerPrice",
              (0, _.jsx)(_._, {
                name_override: _,
                ..._,
              }),
            ),
          });
        }
        function _(_, _) {
          return _.useMemo(() => {
            let _ = new Map(),
              _ = new Map(),
              _ = 1;
            const _ = (_, _) => {
              _.has(_) ||
                _.set(_, {
                  index: _++,
                  footnote_text: _,
                });
            };
            let _ = !1;
            _?.cart_items?.forEach((_) => {
              let _ = !!_.gift_info?.accountid_giftee;
              _.errors && (_ = !0),
                _.errors?.duplicate_appids_in_cart?.length &&
                  _(_._._, (0, _._)("#Cart_Error_DuplicateApps_FootNote")),
                _.errors?.owned_appids?.length &&
                  (_.errors?.has_existing_billing_agreement
                    ? _(
                        _._._,
                        (0, _._)(
                          "#Cart_Error_ExistingBillingAgreement_FootNote",
                        ),
                      )
                    : _(
                        _._._,
                        (0, _._)(
                          _
                            ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                            : "#Cart_Error_AlreadyOwned_FootNote",
                        ),
                      )),
                _.errors?.unavailable_in_country &&
                  _(_._._, (0, _._)("#Cart_Error_UnavailableCountry_FootNote")),
                _.errors?.adult_content_restricted &&
                  _(
                    _._._,
                    (0, _._)("#Cart_Error_AdultContentRestricted_FootNote"),
                  ),
                _.errors?.commercial_license_restricted &&
                  _(
                    _._._,
                    (0, _._)(
                      "#Cart_Error_CommercialLicenseRestricted_FootNote",
                    ),
                  ),
                _.errors?.missing_must_own_appids &&
                  _(
                    _._._,
                    _
                      ? (0, _._)("#Cart_Error_MissingMustOwnApps_FootNoteGift")
                      : (0, _._)("#Cart_Error_MissingMustOwnApps_FootNote"),
                  ),
                _.warnings?.appids_in_mastersub?.length &&
                  _(_._._, (0, _._)("#Cart_Error_MasterSubscription_FootNote")),
                _.warnings?.price_has_changed &&
                  _.set(_._._, (0, _._)("#Cart_Warning_PriceChange_FootNote"));
            });
            let _ = Array.from(_.values());
            return (
              _ && _.unshift((0, _._)("#Cart_CartLevelErrorNotice")),
              {
                rgCartLevelNotices: _,
                mapValidateNoticesToFootnote: _,
                eDisplayType: _,
              }
            );
          }, [_, _]);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            BaseCartPage: () => _,
            default: () => _,
            useInitCartLocalization: () => _,
          });
        var _ = __webpack_require__("chunkid"),
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
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(_.CartCard, _.className),
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { cart: _ } = _,
            _ = _(_);
          if (
            !_ ||
            !_._.logged_in ||
            !_ ||
            (0, _._)(_._.EREALM) ||
            !_.strSaleName
          )
            return null;
          const {
              cEarned: _,
              pctProgress: _,
              rgPrepurchaseApps: _,
              strFormattedSpendPerDrop: _,
              strSaleName: _,
            } = _,
            _ = _ > 0,
            _ = (0, _.jsx)("div", {
              className: _.Explanation,
              children: (0, _._)("#Cart_SaleCardDrops_Explanation", _),
            });
          return (0, _.jsxs)(_, {
            className: _.TradingCardContainer,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _.EarnedMessage,
                  children: (0, _._)("#Cart_SaleCardDrops_EarnedMessage", _, _),
                }),
              !_ && _,
              (0, _.jsxs)("div", {
                className: _.ProgressSection,
                children: [
                  (0, _.jsx)("div", {
                    children: (0, _._)("#Cart_SaleCardDrops_ProgressLabel"),
                  }),
                  (0, _.jsx)(_, {
                    value: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _.Right,
                    children: [
                      "(",
                      (0, _._)("#Cart_SaleCardDrops_CardCost", _),
                      ")",
                    ],
                  }),
                ],
              }),
              _ && _,
              _.length > 0 &&
                (0, _.jsxs)("div", {
                  className: _.IneligbleList,
                  children: [
                    (0, _.jsx)("p", {
                      children: (0, _._)(
                        "#Cart_SaleCardDrops_PrepurchaseIneligible",
                        _,
                      ),
                    }),
                    (0, _.jsx)("ul", {
                      children: _.map((_) =>
                        (0, _.jsx)(
                          "li",
                          {
                            children: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)();
          if (!_ || !_.isSuccess || !_.data?.sale_name) return null;
          const _ = new Set();
          let _ = 0;
          for (const _ of _.cart_items)
            _.subtotal && (_ += parseInt(_.subtotal.amount_in_cents));
          const {
              sale_name: _,
              spend_earned_for_next_drop: _,
              spend_needed_for_next_drop: _,
              formatted_spend_per_drop: _,
            } = _.data,
            _ = _ + _,
            _ = Math.floor(_ / _),
            _ = Math.floor((100 * (_ % _)) / _);
          return {
            cEarned: _,
            pctProgress: _,
            strFormattedSpendPerDrop: _,
            rgPrepurchaseApps: Array.from(_),
            strSaleName: _,
          };
        }
        function _(_) {
          const { value: _ } = _,
            _ = Math.min(100, Math.max(0, _));
          return (0, _.jsx)("div", {
            className: _.ProgressRail,
            children: (0, _.jsx)("div", {
              className: _.Progress,
              style: {
                width: `${_}%`,
              },
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = !0) {
          return (0, _._)(
            {
              bIncludeDailyDeals: !0,
              nIncludeTopNSpecials: 8,
              spotlightLocation: {
                location: "cart",
              },
              rgAdditionalRecommendationIDs: _,
            },
            {
              include_assets: !0,
              include_release: !0,
            },
            _,
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)();
          return (
            _.useEffect(
              () => (
                window.addEventListener("resize", _),
                () => window.removeEventListener("resize", _)
              ),
              [_],
            ),
            window.innerWidth < parseInt(_.strMaxCartPartResponsiveWidth)
          );
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { bMinimalDisplay: _ } = _,
            _ = _();
          return (_ && _) || (!_ && !_)
            ? null
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { cart: _, bMinimalDisplay: _ } = _,
            _ = _(_),
            _ = (0, _._)(),
            _ = (0, _.useMemo)(() => {
              const _ = new Set(
                [
                  ...(_?.developers || []),
                  ...(_?.publishers || []),
                  ...(_?.franchises || []),
                ]
                  .filter((_) => !!_ && !!_.creator_clan_account_id)
                  .map((_) => _.creator_clan_account_id),
              );
              return Array.from(_);
            }, [_]);
          return _.length == 0 || !_
            ? null
            : (0, _.jsxs)("div", {
                className: _().CartCreatorCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Title,
                    children: (0, _._)("#Cart_FollowCreator_title"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().Description,
                    children: (0, _._)("#Cart_FollowCreator_desc"),
                  }),
                  (0, _.jsx)("br", {}),
                  _.map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        creatorID: {
                          name: "",
                          clan_account_id: _,
                          type: "developer",
                        },
                        bHideCreatorType: !0,
                        bSmallFormat: !0,
                        bMinimalDisplay: _,
                      },
                      "creat" + _,
                    ),
                  ),
                ],
              });
        }
        function _(_) {
          const [_, _] = (0, _.useState)(null),
            _ = (0, _.useMemo)(
              () =>
                _?.line_items?.length == 1 && _.line_items[0].packageid
                  ? {
                      packageid: _.line_items[0].packageid,
                    }
                  : void 0,
              [_],
            ),
            { data: _ } = (0, _._)(_);
          (0, _.useEffect)(() => {
            const _ = _?.type;
            _ == _._._
              ? _(_._)
              : (_ == _._._ || _ == _._._) && _(_.related_items?.parent_appid);
          }, [_?._, _?.related_items?.parent_appid, _?.type]);
          const _ = (0, _.useMemo)(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : void 0,
              [_],
            ),
            { data: _ } = (0, _._)(_);
          return _;
        }
        function _(_, _ = []) {
          return _.filter(({ item_id: _, item: _ }) =>
            _
              ? _[_.appid]
                ? !1
                : _?.appid
                  ? !_[_?.appid]
                  : _?.included_appids
                    ? _.included_appids.every((_) => !_[_])
                    : !0
              : !0,
          );
        }
        function _(_) {
          const { cart: _, validatedCart: _ } = _,
            [_, _] = _.useState(void 0),
            _ = (_?.cart_items || []).reduce(
              (_, _) => _.concat(_.store_item.included_appids),
              [],
            );
          _.useEffect(() => {
            _ === void 0 &&
              _ &&
              _(
                _?.line_items.map((_) =>
                  _.packageid
                    ? {
                        packageid: _.packageid,
                      }
                    : {
                        bundleid: _.bundleid,
                      },
                ),
              );
          }, [_, _]);
          const _ = _(_, _ !== void 0);
          if (_.isError) return null;
          const _ = _.reduce((_, _) => ((_[_] = !0), _), {}),
            _ = _(_, _.data?.purchase_recommendations),
            _ = _(_, _.data?.specials),
            _ = _(_, _.data?.daily_deals),
            _ = _(_, _.data?.spotlights);
          return (0, _.jsxs)("div", {
            className: _.CartUpsellArea,
            children: [
              (0, _.jsx)("div", {
                className: _.CartUpsellTitle,
                children: (0, _._)("#Recommendations_Header"),
              }),
              _?.length > 3
                ? (0, _.jsx)(_, {
                    type: "recommended",
                    data: _,
                    isLoaded: !_.isLoading,
                  })
                : (0, _.jsx)(_, {
                    type: "specials",
                    data: _,
                    isLoaded: !_.isLoading,
                  }),
              (0, _.jsx)(_, {
                cart: _,
                bMinimalDisplay: !1,
              }),
            ],
          });
        }
        function _(_) {
          const { data: _, isLoaded: _, type: _ } = _;
          return !_ && _
            ? null
            : (0, _.jsx)(_._, {
                feature: `upsell-${_}`,
                children: (0, _.jsx)(_, {
                  className: (0, _._)(_.Specials),
                  children: _?.slice(0, 3).map(({ item_id: _, item: _ }) =>
                    (0, _.jsx)(
                      _,
                      {
                        item_id: _,
                        item: _,
                      },
                      (0, _._)(_),
                    ),
                  ),
                }),
              });
        }
        function _(_) {
          const { item: _ } = _;
          return (0, _.jsx)(_._, {
            capsule: {
              _: _._,
              type: (0, _._)(_.item_type, _.type),
            },
            imageType: "header",
            onlyOneDiscountPct: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function _(_) {
          const { data: _, isLoaded: _ } = _;
          return !_ && _
            ? null
            : jsx(_, {
                className: classnames(styles.DailyDeals, !_ && styles.Loading),
                children: _?.slice(0, 2).map((_) =>
                  jsx(
                    FeaturedItemDailyDeal,
                    {
                      dailyDeal: _,
                    },
                    StoreItemIDToString(_.item_id),
                  ),
                ),
              });
        }
        function _(_) {
          const { data: _, isLoaded: _ } = _,
            _ = React.useMemo(
              () =>
                _?.filter(
                  (_) => _.spotlight_template != "weeklong_deals",
                ).slice(0, 2),
              [_],
            );
          return !_ && _
            ? null
            : jsx(_, {
                className: classnames(styles.Spotlights, !_ && styles.Loading),
                children: _.map((_) =>
                  jsx(
                    FeaturedItemSpotlight,
                    {
                      spotlight: _,
                    },
                    _.item_id
                      ? StoreItemIDToString(_.item_id)
                      : _.spotlight_title,
                  ),
                ),
              });
        }
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            "flow-children": "row",
            navEntryPreferPosition: _._.MAINTAIN_X,
            className: (0, _._)(_.UpsellRow, _),
            children: _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = "hh:mm a",
          _ = "HH:mm";
        function _(_) {
          const {
            nLatestTime: _,
            nEarliestTime: _,
            fnGetTimeToUpdate: _,
            onError: _,
            strAlsoShowTimeZone: _,
            disabled: _,
            bNoDefaultDate: _,
            className: _,
            strDescToolTip: _,
            strDescription: _,
            bShowTimeZone: _,
            strInvalidDateTimeLocalizedMsg: _,
            fnIsValidDateTime: _,
            bWeekdaysOnly: _,
            fnSetTimeToUpdate: _,
            bForce24HourFormat: _,
            bAllowClear: _,
          } = _;
          let _ = _() || _ ? _ : _;
          const _ = _(),
            [_, _] = _.useState(_ > 0 ? _()(_ * 1e3) : null),
            [_, _] = _.useState(0),
            [_, _] = _.useState(),
            [_, _] = _.useState(),
            _ = _(_, _, _, _, _),
            _ = !_ && _;
          let _;
          if (_ && _ && _ == _ && _ > _._.GetTimeNowWithOverride()) {
            const _ = _().unix(_);
            (_ = {
              hours: {
                max: _.hour(),
                min: _.hour(),
                step: 0,
              },
              minutes: {
                max: _.minute(),
                min: _.minute(),
                step: 0,
              },
              seconds: {
                max: _.seconds(),
                min: _.seconds(),
                step: 0,
              },
              milliseconds: {
                max: 0,
                min: 0,
                step: 0,
              },
            }),
              (_ = _);
          }
          let _;
          !_ && _ && !_ && (_ = _().unix(_));
          const _ = _()._.guess(),
            _ = _().unix(_)._(_),
            _ = !!_ && _ != _ && _().unix(_)._(_),
            _ = (_) => {
              if (_) return;
              _(null);
              const _ = _(),
                _ = _().unix(_ || _._.GetTimeNowWithOverride());
              (_ = _.clone()),
                _.hour(_.hour()),
                _.minute(_.minute()),
                _.second(0),
                _(_.unix()),
                _(_);
            },
            { fnOnInput: _, fnOnInputBlur: _, fnOnChange: _ } = _(_, _, _),
            _ = (_) => {
              if (_) return;
              _(null);
              let _ = _(),
                _ = 0;
              if (!_)
                _ =
                  _().unix(_).hour(0).second(0).minutes(0).unix() +
                  3600 * _.hour() +
                  60 * _.minutes();
              else {
                const _ = _().unix(_);
                (_ = _.clone()),
                  _.year(_.year()),
                  _.month(_.month()),
                  _.date(_.date()),
                  (_ = _.unix());
              }
              _(_), _(_().unix(_));
            },
            { fnOnInput: _, fnOnInputBlur: _, fnOnChange: _ } = _(_, _, _),
            _ = () => {
              _ || (_(0), _(null), _(null), _(null), _((_) => _ + 1));
            },
            _ = _ && !_ && _ > 0;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().EventTimeSection, _),
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, _.jsx)(_._, {
                    toolTipContent: _,
                    direction: "top",
                    children:
                      !!_ &&
                      (0, _.jsx)("span", {
                        children: _,
                      }),
                  }),
                  _ &&
                    (0, _.jsxs)("span", {
                      className: _().DateErrorCtn,
                      children: [
                        (0, _.jsx)("img", {
                          src: _._,
                        }),
                        _,
                      ],
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().FlexRowContainer,
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().InputBorder, _().TimeBlock),
                    children: [
                      (0, _.jsx)(
                        _(),
                        {
                          onChange: _,
                          timeFormat: !1,
                          value: _ ?? _,
                          isValidDate: (_) => !_ && _(_, _, _, _),
                          initialValue: _,
                          inputProps: {
                            placeholder: (0, _._)("#DateTimePicker_Enter_Date"),
                            className: (0, _._)(
                              _().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: _,
                            onChange: (_) => _(_.currentTarget.value),
                            onBlur: (_) => _(_.currentTarget.value),
                          },
                        },
                        "date" + _,
                      ),
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().PacificTimeHint,
                          children: _.format("L"),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().InputBorder, _().TimeBlock),
                    children: [
                      (0, _.jsx)(
                        _(),
                        {
                          onChange: _,
                          dateFormat: !1,
                          timeFormat: _,
                          timeConstraints: _,
                          value: _ ?? _,
                          inputProps: {
                            placeholder: (0, _._)("#DateTimePicker_Enter_Time"),
                            className: (0, _._)(
                              _().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: _,
                            onChange: (_) => _(_.currentTarget.value),
                            onBlur: (_) => _(_.currentTarget.value),
                          },
                        },
                        "time" + _,
                      ),
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().PacificTimeHint,
                          children: _.format("LT"),
                        }),
                    ],
                  }),
                  _ &&
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("div", {
                          className: _().TimeZone,
                          children: _.zoneAbbr(),
                        }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: _().TimeZone,
                            children: _.zoneAbbr(),
                          }),
                      ],
                    }),
                  _ &&
                    (0, _.jsx)("button", {
                      type: "button",
                      className: _().ClearButton,
                      onClick: _,
                      children: (0, _._)("#Button_Clear"),
                    }),
                ],
              }),
              !!_ &&
                (0, _.jsx)("div", {
                  children: (0, _._)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _(_, _, _) {
          const [_, _] = _.useState(!1);
          return {
            fnOnInput: (_) => {
              _(_), _(!0);
            },
            fnOnInputBlur: (_) => {
              if (_) {
                const _ = _(_);
                _.isValid() && _(_);
              }
              _(!1);
            },
            fnOnChange: (_) => {
              if (!_)
                if (typeof _ == "string") {
                  const _ = _(_);
                  _.isValid() && _(_);
                } else _(_);
            },
          };
        }
        function _() {
          const _ = _()("2025-01-14").format("L").split(/[-/.]/),
            _ = _.indexOf("14");
          return _.indexOf("01") < _;
        }
        function _() {
          return _()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function _(_) {
          return _()(_, _() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function _(_) {
          return _()(_, [_, _], !1);
        }
        function _(_, _, _, _) {
          const _ = _().unix(_).hour(0).seconds(0).minute(0);
          let _ = _.unix() >= _.unix();
          if (_ && _ && _ >= _) {
            const _ = _().unix(_).hour(23).minute(59).seconds(59);
            _ = _.unix() <= _.unix();
          }
          return (
            _ && _ && (_.weekday() == 0 || _.weekday() == 6) && (_ = !1), _
          );
        }
        function _(_, _, _, _, _) {
          const _ = _ && _(),
            _ = _ && !_(_).isValid(),
            _ = _ && !_(_).isValid(),
            _ = _ || _ || typeof _ == "string" || _ === !1;
          let _ = null;
          return (
            _ &&
              ((_ = (0, _._)(_ || "#DateTimePicker_Fallback_Invalid_DateTime")),
              _
                ? (_ = (0, _._)("#DateTimePicker_Time_CannotParse"))
                : _
                  ? (_ = (0, _._)("#DateTimePicker_Date_CannotParse"))
                  : typeof _ == "string" && (_ = _)),
            _.useEffect(() => {
              _ && _(_);
            }, [_, _]),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = _.memo(function (_) {
          const { scheduledTime: _, onScheduledTimeChange: _ } = _,
            [_, _] = _.useState(null),
            _ = _ > 0,
            _ = () => {
              _(0);
            },
            _ = () => {
              _ || _(Date.now() / 1e3);
            };
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _._)("#Cart_GiftDelivery_Label"),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_._, {
                  controlled: !0,
                  checked: !_,
                  onChange: (_) => _ && _(),
                  label: (0, _._)("#Cart_GiftDelivery_Now"),
                }),
              }),
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_._, {
                    controlled: !0,
                    checked: _,
                    onChange: (_) => _ && _(),
                    label: (0, _._)("#Cart_GiftDelivery_ScheduleDelivery"),
                  }),
                  (0, _.jsx)("div", {
                    style: {
                      clear: "both",
                    },
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().ScheduleError,
                      children: _,
                    }),
                  _ &&
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {
                        scheduledTime: _,
                        onScheduledTimeChange: _,
                        setScheduledError: _,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const {
            scheduledTime: _,
            onScheduledTimeChange: _,
            setScheduledError: _,
          } = _;
          if ((0, _._)())
            return (0, _.jsx)(_, {
              scheduledTime: _,
              onScheduledTimeChange: _,
              setScheduledError: _,
            });
          {
            const _ = () => _(_);
            return (0, _.jsx)(_, {
              bShowTimeZone: !0,
              className: _().GiftDatePicker,
              nEarliestTime: Date.now() / 1e3,
              fnGetTimeToUpdate: () => _,
              fnSetTimeToUpdate: _,
              fnIsValidDateTime: _,
              onError: _,
            });
          }
        }
        function _(_) {
          const _ = Date.now() / 1e3 + _._.PerYear,
            _ = new Date(null, null, null, 0, 0, 0, 0).getTime() / 1e3;
          return _ > _
            ? (0, _._)("#Cart_GiftScheduleError_TooFar")
            : _ < _
              ? (0, _._)("#Cart_GiftScheduleError_InvalidDate")
              : !0;
        }
        function _(_, _) {
          let _ = _.getHours(),
            _ = _.getMinutes();
          return (
            _ && (_ > 12 ? (_ -= 12) : _ == 0 && (_ = 12)),
            `${_}:${_ < 10 ? "0" : ""}${_}`
          );
        }
        function _(_) {
          const {
              scheduledTime: _,
              onScheduledTimeChange: _,
              setScheduledError: _,
            } = _,
            _ = _.useMemo(() => {
              const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                hour: "numeric",
              });
              return (
                _.resolvedOptions().hour12 ||
                _.resolvedOptions().hourCycle == "h12"
              );
            }, []),
            _ = new Date(_ * 1e3),
            [_, _] = (0, _.useState)(_.getMonth()),
            [_, _] = (0, _.useState)(_.getDate()),
            [_, _] = (0, _.useState)(_.getFullYear()),
            [_, _] = (0, _.useState)(() => _(_, _)),
            [_, _] = (0, _.useState)(_.getHours() >= 12 ? "PM" : "AM");
          _.useEffect(() => {
            let _ = _.match(/^\s*([012]?[0-9]):([0-9]{2})\s*/);
            if (!_) return;
            let _ = parseInt(_[1]);
            const _ = parseInt(_[2]);
            _ &&
              (_ == "PM" && _ < 12
                ? (_ += 12)
                : _ == "AM" && _ == 12 && (_ = 0));
            const _ = new Date(_, _, _, _, _, 0, 0).getTime() / 1e3,
              _ = _(_);
            _ === !0 ? (_(null), _(_)) : _(_);
          }, [_, _, _, _, _, _, _, _]);
          const _ = _._.COUNTRY == "US" && _._.LANGUAGE == "english";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                className: _().GamepadTimePickerRow,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      month: _,
                      setMonth: _,
                    }),
                  (0, _.jsx)(_, {
                    year: _,
                    month: _,
                    day: _,
                    setDay: _,
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      month: _,
                      setMonth: _,
                    }),
                  (0, _.jsx)(_, {
                    year: _,
                    setYear: _,
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                className: _().GamepadTimePickerRow,
                children: [
                  (0, _.jsx)(_._, {
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      strAMPM: _,
                      setAMPM: _,
                    }),
                  (0, _.jsx)(_._, {
                    className: _().TimezoneDisplay,
                    children: (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
                  !_ &&
                    (0, _.jsx)(_._, {
                      children: "\xA0",
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { year: _, setYear: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Date(),
                _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                  year: "numeric",
                });
              return [_.getFullYear(), _.getFullYear() + 1].map((_) => ({
                label: _.format(new Date(_, 0, 1)),
                data: _,
              }));
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _(_) {
          const { month: _, setMonth: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                month: "short",
              });
              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_) => ({
                label: _.format(new Date(null, _)),
                data: _,
              }));
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _(_) {
          const { year: _, month: _, day: _, setDay: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Date(_, _ + 1, 0).getDate(),
                _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                  day: "numeric",
                });
              let _ = [];
              for (let _ = 1; _ <= _; _++)
                _.push({
                  label: _.format(new Date(null, null, _)),
                  data: _,
                });
              return _;
            }, [_, _]);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _(_) {
          const { strAMPM: _, setAMPM: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                  hour: "numeric",
                  hour12: !0,
                }),
                _ =
                  _.formatToParts(new Date(null, null, null, 5)).find(
                    (_) => _.type == "dayPeriod",
                  )?.value || "AM",
                _ =
                  _.formatToParts(new Date(null, null, null, 17)).find(
                    (_) => _.type == "dayPeriod",
                  )?.value || "PM";
              return [
                {
                  label: _,
                  data: "AM",
                },
                {
                  label: _,
                  data: "PM",
                },
              ];
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _() {
          const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
            timeZoneName: "short",
          })
            .formatToParts()
            .find((_) => _.type == "timeZoneName");
          return (0, _.jsx)(_.Fragment, {
            children: _ ? _.value : "",
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { lineItem: _ } = _,
            { data: _ } = (0, _._)(),
            _ = _.useMemo(() => {
              let _ = [];
              for (const _ of _?.line_items ?? [])
                _.line_item_id === _.line_item_id ||
                  !_.flags?.is_gift ||
                  !_.gift_info ||
                  _.push(_);
              return _;
            }, [_?.line_items, _.line_item_id]),
            { mutate: _ } = (0, _._)(),
            _ = (_) => {
              _({
                lineItemID: _.line_item_id,
                lineItemFlags: _.flags,
                giftInfo: {
                  ...(_.gift_info ?? {}),
                },
              });
            },
            _ = (0, _._)({
              rgOptions: _,
              selectedValue: null,
              onSelectionChange: _,
            });
          return _.length < 1
            ? null
            : (0, _.jsx)(_._, {
                flexGrow: "0",
                children: (0, _.jsxs)(_._.Root, {
                  state: _,
                  children: [
                    (0, _.jsx)(_._.Trigger, {
                      children: (0, _.jsx)(_._, {
                        children: (0, _._)("#Cart_Gifting_CopyGiftOptionsFrom"),
                      }),
                    }),
                    (0, _.jsx)(_._.Options, {
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          _._.Option,
                          {
                            value: _,
                            children: (0, _.jsx)(_, {
                              lineItem: _,
                            }),
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _.bundleid ? _._._ : _._._,
            [_] = (0, _._)(_.bundleid ? _.bundleid : _.packageid, _, {
              include_basic_info: !0,
            }),
            _ = (0, _._)(_),
            _ = _?.m_strPlayerName ?? _.gift_info?.email_giftee;
          if (!_ || !_) return null;
          const _ = _
            ? (0, _.jsx)(_._, {
                size: "X-Small",
                statusPosition: "none",
                persona: _,
              })
            : (0, _.jsx)(_.Fragment, {});
          return (0, _.jsxs)(_._, {
            minWidth: "0",
            align: "center",
            justify: "between",
            gap: "4",
            maxWidth: "600px",
            children: [
              (0, _.jsx)("div", {
                children: _.GetName(),
              }),
              (0, _.jsxs)(_._, {
                gap: "1",
                align: "center",
                children: [_, _],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            storeItem: _,
            lineItem: _,
            bShowGiftRecipientModal: _,
            fnOnDismiss: _,
            highlightedAccountIDs: _,
          } = _;
          return (0, _.jsx)(_._, {
            className: _().GiftRecipientPickerModal,
            active: _,
            onDismiss: _,
            children: (0, _.jsx)(_, {
              onDismiss: _,
              lineItem: _,
              storeItem: _,
              highlightedAccountIDs: _ ?? [],
            }),
          });
        }
        const _ = _.memo(function (_) {
          const { storeItem: _, highlightedAccountIDs: _, ..._ } = _,
            {
              rgFriendsForGifting: _,
              isLoading: _,
              isError: _,
            } = (0, _._)(_, _),
            _ = (0, _._)(_),
            _ = _.useMemo(() => {
              const _ = new Map(
                _.filter((_) => !!_.data).map((_) => [
                  _.data.GetAccountID(),
                  _.data,
                ]),
              );
              for (const _ of _ ?? []) _.delete(_.accountid);
              let _ = [];
              for (const _ of _.values())
                _.push({
                  accountid: _.GetAccountID(),
                  persona: _,
                  ownership: {
                    already_owns: !1,
                    wishes_for: !1,
                  },
                });
              return _ && _.push(..._), _;
            }, [_, _]);
          return (0, _.jsx)(_, {
            ..._,
            rgAccountsForGifting: _,
            isLoading: _,
            isError: _,
          });
        });
        function _(_) {
          const {
              lineItem: _,
              onDismiss: _,
              rgAccountsForGifting: _,
              isLoading: _,
              isError: _,
            } = _,
            _ = (0, _._)(),
            [_, _] = _.useState(""),
            _ = _.useMemo(() => {
              if (!_) return [];
              const _ = _.toLocaleLowerCase();
              return _.length < 1
                ? _
                : _.filter(
                    (_) =>
                      !!(
                        _.persona.m_strPlayerName
                          .toLocaleLowerCase()
                          .indexOf(_) > -1 ||
                        (_.nickname &&
                          _.nickname.toLocaleLowerCase().indexOf(_) > -1)
                      ),
                  );
            }, [_, _]),
            _ = _.gift_info?.accountid_giftee,
            _ = (_) => {
              if (_) {
                const _ = new _._(_);
                _.BIsValid() &&
                  _.mutate({
                    lineItemID: _.line_item_id,
                    lineItemFlags: _.flags,
                    giftInfo: {
                      ...(_.gift_info ?? {}),
                      accountid_giftee: _ && _.GetAccountID(),
                    },
                  });
              }
              _();
            };
          return _
            ? (0, _.jsx)(_, {
                children: (0, _.jsx)("div", {
                  className: _().LoadingError,
                  children: (0, _._)("#Cart_GiftRecipientModal_IssueLoading"),
                }),
              })
            : (0, _.jsxs)(_, {
                loading: _,
                children: [
                  (0, _.jsx)(_, {
                    value: _,
                    onChange: _,
                  }),
                  (0, _.jsx)(_, {
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          selected: _.accountid === _,
                          onSelect: _,
                          ownership: _.ownership,
                          persona: _.persona,
                          nickname: _.nickname,
                        },
                        _.accountid,
                      ),
                    ),
                  }),
                ],
              });
        }
        function _(_) {
          const { loading: _, children: _ } = _;
          return (0, _.jsxs)(_._, {
            className: _().GiftRecipientPickerFormCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().FormTitle,
                children: (0, _._)("#Cart_GiftRecipientModal_Title"),
              }),
              _ &&
                (0, _.jsx)(_._, {
                  position: "center",
                  size: "large",
                }),
              !_ && _,
            ],
          });
        }
        function _(_) {
          const { value: _, onChange: _ } = _;
          return (0, _.jsx)(_._, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: _().GiftFriendsInput,
            placeholder: (0, _._)("#Cart_GiftRecipientModal_Placeholder"),
            value: _,
            onChange: (_) => _(_.currentTarget.value),
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            className: _().GiftFriendsListCtn,
            ..._,
          });
        }
        function _(_) {
          const {
              selected: _,
              onSelect: _,
              nickname: _,
              persona: _,
              ownership: _,
            } = _,
            _ = _.already_owns,
            _ = _.useCallback(() => {
              _ || _(_.m_steamid.ConvertTo64BitString());
            }, [_, _, _]);
          return (0, _.jsxs)(_._, {
            className: (0, _._)(
              _().GiftPickerFriendBlock,
              _ && _().Selected,
              _ && _().Disabled,
            ),
            focusClassName: _().Focused,
            noFocusRing: !0,
            onActivate: _,
            children: [
              (0, _.jsx)(_._, {
                className: _().FriendAvatar,
                statusPosition: "right",
                persona: _,
              }),
              (0, _.jsx)(_._, {
                bParenthesizeNicknames: !0,
                strNickname: _,
                persona: _,
                className: _().PersonaName,
              }),
              (0, _.jsxs)("div", {
                className: _().FriendsGiftLabel,
                children: [
                  (0, _.jsx)(_, {
                    ownership: _,
                  }),
                  (0, _.jsx)(_, {
                    ownership: _,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { ownership: _ } = _,
            { already_owns: _, partial_owns_appids: _ } = _;
          return _
            ? (0, _.jsx)("div", {
                className: (0, _._)(_().OwnsGame),
                children: (0, _._)("#Cart_GiftRecipientModal_OwnsGameLabel"),
              })
            : _ && _.length > 0
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_().OwnsGame),
                  children: (0, _._)(
                    "#Cart_GiftRecipientModal_PartialOwnsLabel",
                    (0, _.jsx)(_, {
                      rgAppList: _,
                    }),
                  ),
                })
              : null;
        }
        function _(_) {
          const { ownership: _ } = _,
            { already_owns: _, wishes_for: _, partial_wishes_for: _ } = _;
          return _
            ? null
            : _
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_().OnWishlist),
                  children: (0, _._)("#Cart_GiftRecipientModal_OnWishlist"),
                })
              : _ && _.length > 0
                ? (0, _.jsx)("div", {
                    className: (0, _._)(_().OnWishlist),
                    children: (0, _._)(
                      "#Cart_GiftRecipientModal_PartialWishlistLabel",
                      (0, _.jsx)(_, {
                        rgAppList: _,
                      }),
                    ),
                  })
                : null;
        }
        function _(_) {
          const { rgAppList: _ } = _,
            _ = (0, _._)(),
            _ = _.useMemo(
              () =>
                Array.from(new Set(_))
                  .slice(0, 6)
                  .map((_) =>
                    (0, _._)(_, {
                      appid: _,
                    }),
                  ),
              [_, _],
            ),
            _ = (0, _._)({
              queries: _,
            }),
            _ = [];
          for (const _ of _)
            if (!(!_.data || !_.data.name)) {
              if (_.length >= 3) break;
              _.push(
                (0, _.jsxs)(_.Fragment, {
                  children: [_.length ? ", " : "", _.data.name],
                }),
              );
            }
          return _;
        }
        function _(_) {
          const { giftInfo: _, onChange: _ } = _,
            _ = (0, _._)(_.accountid_giftee);
          return _.data
            ? (0, _.jsxs)(_, {
                children: [
                  (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        children: (0, _._)("#Cart_PurchaseFor_Label"),
                      }),
                      (0, _.jsx)("a", {
                        href: _.data.GetCommunityProfileURL(),
                        target: "_blank",
                        children: (0, _.jsx)(_._, {
                          className: _().FriendAvatar,
                          statusPosition: "right",
                          persona: _.data,
                        }),
                      }),
                      _.data.m_strPlayerName,
                    ],
                  }),
                  (0, _.jsx)(_, {
                    giftInfo: _,
                    onChange: _,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { lineItem: _ } = _;
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                lineItem: _,
              }),
              (0, _.jsx)(_, {
                gifteeAccountID: _.gift_info?.accountid_giftee,
              }),
            ],
          });
        }
        function _(_) {
          return _._.logged_in
            ? null
            : (0, _.jsx)("div", {
                className: _().SignInLink,
                children: (0, _.jsx)(_._, {
                  onClick: () => (0, _._)(),
                  children: (0, _._)("#Cart_Gifting_SignInForFriends"),
                }),
              });
        }
        function _(_) {
          const { lineItem: _, storeItem: _ } = _,
            [_, _] = _.useState(!1),
            { data: _ } = (0, _._)(),
            _ = _.useMemo(() => {
              if (!_?.line_items) return [];
              let _ = new Set();
              for (const _ of _.line_items)
                _.line_item_id !== _.line_item_id &&
                  _.gift_info?.accountid_giftee &&
                  _.add(_.gift_info.accountid_giftee);
              return [..._];
            }, [_?.line_items, _.line_item_id]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _._.logged_in &&
                (0, _.jsx)(_._, {
                  onClick: () => _(!0),
                  children: (0, _._)("#Cart_SelectRecipient"),
                }),
              _ &&
                (0, _.jsx)(_, {
                  bShowGiftRecipientModal: _,
                  fnOnDismiss: () => _(!1),
                  lineItem: _,
                  storeItem: _,
                  highlightedAccountIDs: _,
                }),
            ],
          });
        }
        function _(_) {
          const { lineItem: _, onClick: _ } = _,
            { mutate: _ } = (0, _._)(),
            _ = _.useCallback(() => {
              _({
                lineItemID: _.line_item_id,
                lineItemFlags: _.flags,
                giftInfo: {
                  ..._.gift_info,
                  email_giftee: "",
                },
              }),
                _();
            }, [_, _, _]);
          return (0, _.jsx)(_._, {
            color: "dull",
            onClick: _,
            children: (0, _._)("#Cart_EnterRecipientEmail"),
          });
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = (0, _._)(_);
          return _
            ? (0, _.jsxs)(_._, {
                align: "center",
                children: [
                  (0, _.jsx)("a", {
                    href: _.GetCommunityProfileURL(),
                    target: "_blank",
                    children: (0, _.jsx)(_._, {
                      className: _().FriendAvatar,
                      statusPosition: "right",
                      persona: _,
                    }),
                  }),
                  _.m_strPlayerName,
                ],
              })
            : null;
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _.gift_info?.email_giftee,
            { mutate: _ } = (0, _._)(),
            [_, _, _] = (0, _._)(_, 1e3);
          return (
            (0, _.useEffect)(() => {
              if (!_ || _ == _.gift_info?.email_giftee) return;
              let _ = _.gift_info
                ? {
                    ..._.gift_info,
                  }
                : {};
              (_.email_giftee = _),
                (_.time_scheduled_send = 0),
                _({
                  lineItemID: _.line_item_id,
                  lineItemFlags: _.flags,
                  giftInfo: _,
                });
            }, [_, _, _]),
            (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("div", {
                  className: _().GiftEmailInput,
                  children: (0, _.jsx)(_._, {
                    label: " ",
                    mustBeEmail: !0,
                    value: _,
                    onChange: (_) => _(_.target.value),
                    maxChars: _,
                  }),
                }),
                (0, _.jsxs)("ul", {
                  className: _().GiftEmailWarnings,
                  children: [
                    (0, _.jsx)("li", {
                      children: (0, _._)("#Cart_GiftDeliveryEmail_Warning1"),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#Cart_GiftDeliveryEmail_Warning2",
                        _._.country_code,
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var _ = ((_) => (
          (_[(_.NoRecipientSelected = 0)] = "NoRecipientSelected"),
          (_[(_.AccountSelected = 1)] = "AccountSelected"),
          (_[(_.EmailSelected = 2)] = "EmailSelected"),
          _
        ))(_ || {});
        function _(_) {
          const { lineItem: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useMemo(
              () =>
                _.gift_info?.accountid_giftee
                  ? 1
                  : _ || _.gift_info?.email_giftee
                    ? 2
                    : 0,
              [_, _],
            ),
            { mutate: _ } = (0, _._)(),
            _ = _.useCallback(() => {
              let _ = _.gift_info
                ? {
                    ..._.gift_info,
                  }
                : {};
              (_.accountid_giftee = null),
                (_.email_giftee = null),
                _(!1),
                _({
                  lineItemID: _.line_item_id,
                  lineItemFlags: _.flags,
                  giftInfo: _,
                });
            }, [_, _]);
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)("div", {
                className: _().GiftFormDivider,
              }),
              (0, _.jsxs)(_._, {
                justify: "between",
                gap: "3",
                direction: {
                  initial: "column-reverse",
                  _: "row",
                },
                marginBottom: "2",
                children: [
                  (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        fullWidth: _ === 2,
                        children:
                          _ == 2
                            ? (0, _._)("#Cart_GiftRecipientEmail_Label")
                            : (0, _._)("#Cart_GiftRecipient_Label"),
                      }),
                      _ == 1 &&
                        (0, _.jsx)(_, {
                          lineItem: _,
                        }),
                      _ == 0 &&
                        (0, _.jsx)(_, {
                          onEmailRecipient: () => _(!0),
                          ..._,
                        }),
                      _ != 0 &&
                        (0, _.jsxs)(_, {
                          onClick: _,
                          children: [
                            "(",
                            _ == 2
                              ? (0, _._)("#Cart_EditGiftDelivery")
                              : (0, _._)("#Cart_Edit"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    lineItem: _,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                children:
                  _ == 2 &&
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              _ == 1 &&
                (0, _.jsx)(_, {
                  lineItem: _,
                }),
            ],
          });
        }
        function _(_) {
          const { onEmailRecipient: _, ..._ } = _;
          return (0, _.jsxs)(_._, {
            align: "center",
            gap: "2",
            marginStart: "2",
            wrap: "wrap",
            children: [
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                onClick: _,
                ..._,
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(),
            _ = _.useMemo(
              () => !_ || _.includes(_?.GetSteamIDAsString()),
              [_, _],
            );
          return !_ || _
            ? null
            : (0, _.jsx)(_._, {
                marginTop: "3",
                className: _().GiftNonFriendWarning,
                children: (0, _.jsxs)(_._, {
                  size: "3",
                  color: "amber-9",
                  children: [
                    _._.logged_in &&
                      (0, _._)(
                        "#Cart_Warning_GiftToNonFriend_Named",
                        (0, _.jsx)(_._, {
                          target: "_blank",
                          href: _.GetCommunityProfileURL(),
                          children: _.m_strPlayerName,
                        }),
                      ),
                    !_._.logged_in &&
                      (0, _._)(
                        "#Cart_Warning_GiftToAccount_LoggedOut_Actionable",
                        (0, _.jsx)(_._, {
                          color: "text-light",
                          contrast: "title",
                          onClick: () => (0, _._)(),
                        }),
                      ),
                  ],
                }),
              });
        }
        function _(_) {
          const { lineItem: _ } = _,
            [_, _] = _.useState(_.gift_info?.gift_message?.message || ""),
            _ = _.useRef(_),
            [_, _] = _.useState(_.gift_info?.gift_message?.signature || ""),
            _ = _.useRef(_),
            [_, _] = _.useState(_.gift_info?.time_scheduled_send),
            _ = _.useRef(_),
            _ = _.useCallback((_) => {
              (_.current = !0), _(Math.floor(_));
            }, []),
            _ = _.useRef(!1);
          _.useEffect(() => {
            _.current ||
              ((_.current = _.gift_info?.time_scheduled_send),
              (_.current = _.gift_info?.gift_message?.message || ""),
              (_.current = _.gift_info?.gift_message?.signature || ""),
              _(_.current),
              _(_.current),
              _(_.current));
          }, [_.gift_info]);
          const _ = (0, _._)(3e3),
            { mutate: _ } = (0, _._)(),
            _ = _.useCallback(
              (_) => {
                _(() => {
                  _.current &&
                    (_({
                      lineItemID: _.line_item_id,
                      lineItemFlags: _.flags,
                      giftInfo: _,
                    }),
                    (_.current = !1));
                });
              },
              [_, _.line_item_id, _.flags, _],
            );
          return (
            (0, _.useEffect)(() => {
              (_.current != _ || _.current != _ || _.current != _) &&
                (_({
                  accountid_giftee: _.gift_info?.accountid_giftee,
                  email_giftee: _.gift_info?.email_giftee,
                  gift_message: {
                    message: _,
                    signature: _,
                  },
                  time_scheduled_send: _,
                }),
                (_.current = _),
                (_.current = _),
                (_.current = _));
            }, [_, _, _, _, _.gift_info]),
            (0, _.jsx)(_, {
              _: _.line_item_id,
              message: _,
              onMessageChange: (_) => {
                (_.current = !0), _(_);
              },
              signature: _,
              onSignatureChange: (_) => {
                (_.current = !0), _(_);
              },
              scheduledTime: _,
              onScheduledTimeChange: _,
              bShowScheduledTime:
                !_.gift_info?.email_giftee || _.gift_info?.email_giftee == "",
            })
          );
        }
        function _(_) {
          const { giftInfo: _, onChange: _ } = _;
          return (0, _.jsx)(_, {
            _: "cart",
            message: _.gift_message?.message || "",
            onMessageChange: (_) =>
              _({
                ..._,
                gift_message: {
                  ..._.gift_message,
                  message: _,
                },
              }),
            signature: _.gift_message?.signature || "",
            onSignatureChange: (_) =>
              _({
                ..._,
                gift_message: {
                  ..._.gift_message,
                  signature: _,
                },
              }),
            scheduledTime: _.time_scheduled_send,
            onScheduledTimeChange: (_) =>
              _({
                ..._,
                time_scheduled_send: _,
              }),
            bShowScheduledTime: !_?.email_giftee || _?.email_giftee == "",
          });
        }
        const _ = 160,
          _ = 330;
        function _(_) {
          const {
              _: _,
              message: _,
              onMessageChange: _,
              signature: _,
              onSignatureChange: _,
              bShowScheduledTime: _,
              scheduledTime: _,
              onScheduledTimeChange: _,
              onBlur: _,
            } = _,
            _ = (0, _._)(),
            _ = _ - _.length,
            [_, _] = _.useState(!1),
            _ = _ || _?.length > 0 || !_,
            { data: _ } = (0, _._)(_._.accountid);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    fullWidth: !0,
                    children: (0, _._)(
                      "#Cart_GiftDelivery_Body",
                      (0, _.jsx)("span", {
                        className: _ <= 0 ? _().RedText : null,
                        children: _,
                      }),
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    nMinHeight: 50,
                    className: _().GiftNoteInput,
                    value: _,
                    onBlur: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  children: (0, _.jsxs)("div", {
                    className: _().GiftFormRecipient,
                    children: [
                      (0, _.jsx)(_, {
                        children: (0, _._)("#Cart_GiftDelivery_From"),
                      }),
                      (0, _.jsx)(_._, {
                        className: _().FriendAvatar,
                        statusPosition: "right",
                        persona: _,
                      }),
                      " ",
                      _?.m_strPlayerName || "",
                      !_ &&
                        (0, _.jsxs)(_, {
                          onClick: () => _(!0),
                          children: [
                            "(",
                            (0, _._)("#Cart_GiftDelivery_AddSignature"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                }),
              _ &&
                (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      fullWidth: !0,
                      children: (0, _._)("#Cart_GiftDelivery_Signature"),
                    }),
                    (0, _.jsx)(_._, {
                      value: _,
                      className: _().GiftSignatureInput,
                      onChange: (_) => _(_.target.value),
                      onBlur: _,
                      maxChars: _,
                    }),
                  ],
                }),
              _ &&
                (0, _.jsx)(_, {
                  scheduledTime: _,
                  onScheduledTimeChange: _,
                }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftFormCtn,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftFormSection,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftFormRecipient,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftRadioRow,
            children: _.children,
          });
        }
        function _(_) {
          const { fullWidth: _ } = _;
          return (0, _.jsx)("div", {
            className: _()(_().FormTextLabel, _ && _().FullWidth),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            onActivate: _.onClick,
            children: _.children,
            className: _().LinkButton,
          });
        }
        function _(_) {
          const { gifteeAccountID: _ } = _,
            { isLoading: _, data: _ } = (0, _._)(!0);
          if (_ || _.is_not_member_of_any_group() || _.role() === _._._)
            return null;
          const _ = _._.InitFromAccountID(
            _,
            _._.EUNIVERSE,
          ).ConvertTo64BitString();
          return _.family_group()
            .members()
            .some((_) => _.steamid() === _ && _.role() === _._._)
            ? (0, _.jsxs)("div", {
                className: _().FamilyGiftNotice,
                children: [" ", (0, _._)("#Cart_FamilyGift_Notice")],
              })
            : null;
        }
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
          const {
              lineItem: _,
              storeItem: _,
              couponApplied: _,
              availableCoupons: _,
            } = _,
            [{ bDialogActive: _, strDialogTitle: _ }, _] = _.useState({
              bDialogActive: !1,
            }),
            _ = () =>
              _({
                bDialogActive: !0,
                strDialogTitle: (0, _._)(
                  _ ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
                ),
              }),
            _ = (0, _._)(),
            _ = (_) => {
              _.mutate({
                lineItemID: _.line_item_id,
                giftInfo: _.gift_info,
                lineItemFlags: {
                  ..._.flags,
                },
                gidCoupon: _,
              });
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                couponApplied: _,
                numAvailable: _.length,
                onModifyClick: _,
              }),
              (0, _.jsx)(_, {
                active: _,
                title: _ || (0, _._)("#Cart_CouponModify_Add"),
                packageName: _.GetName(),
                onRequestClose: () =>
                  _({
                    bDialogActive: !1,
                  }),
                couponApplied: _,
                availableCoupons: _,
                onCouponChange: _,
              }),
            ],
          });
        }
        function _(_) {
          const { couponApplied: _, numAvailable: _, onModifyClick: _ } = _,
            _ = (0, _._)(
              _ ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
            );
          return (0, _.jsx)("div", {
            className: _.CouponPickerRowGlow,
            children: (0, _.jsxs)("div", {
              className: _.CouponPickerRow,
              children: [
                _
                  ? (0, _.jsx)(_, {
                      ..._,
                    })
                  : null,
                (0, _.jsx)(_, {
                  children: (0, _._)("#Cart_CouponAvailability", _),
                }),
                (0, _.jsx)("div", {
                  className: _.ModifyLink,
                  children: (0, _.jsx)(_, {
                    onClick: _,
                    children: _,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { large_icon_url: _, title: _ } = _;
          return (0, _.jsx)("img", {
            className: _.CouponRepresentation,
            src: _,
            title: _,
          });
        }
        function _(_) {
          const {
              active: _,
              onRequestClose: _,
              packageName: _,
              title: _,
              couponApplied: _,
              availableCoupons: _,
              onCouponChange: _,
            } = _,
            [_, _] = _.useState(_?.gidcoupon || ""),
            _ = () => {
              _(), _(_ || _.kFb);
            };
          return (0, _.jsxs)(_._, {
            active: _,
            onDismiss: _,
            children: [
              (0, _.jsx)(_._, {
                children: _,
              }),
              (0, _.jsx)(_._, {
                children: (0, _._)(
                  "#Cart_SelectCouponToApply",
                  (0, _.jsx)("span", {
                    className: _.PackageName,
                    children: _,
                  }),
                ),
              }),
              (0, _.jsx)(_, {
                availableCoupons: _,
                couponApplied: _?.gidcoupon,
                couponSelected: _,
                onSelectedChange: _,
              }),
              (0, _.jsx)(_._, {
                onCancel: _,
                onOK: _,
                strOKText: (0, _._)("#Button_Done"),
              }),
            ],
          });
        }
        function _(_) {
          const {
              availableCoupons: _,
              couponApplied: _,
              couponSelected: _,
              onSelectedChange: _,
            } = _,
            { data: _ } = (0, _._)(),
            _ = (_?.cart_items || []).map((_) => _.coupon_applied?.gidcoupon);
          return (0, _.jsx)("div", {
            className: _.CouponListContainer,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  ..._,
                  applied: _ === _.gidcoupon,
                  selected: _ === _.gidcoupon,
                  inUse: _.includes(_.gidcoupon),
                  onSelected: (_) => _(_ ? _.gidcoupon : ""),
                },
                _.gidcoupon,
              ),
            ),
          });
        }
        function _(_) {
          const {
              applied: _,
              inUse: _,
              selected: _,
              large_icon_url: _,
              title: _,
              discount_pct: _,
              onSelected: _,
            } = _,
            _ = !_ && _,
            _ = _ ? void 0 : () => _(!_);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.CouponListItem, _ && _.Disabled),
            onClick: _,
            children: [
              (0, _.jsx)(_, {
                checked: _,
                hidden: _,
              }),
              (0, _.jsx)("img", {
                src: _,
                title: _,
                className: _.Image,
              }),
              (0, _.jsxs)("div", {
                className: _.Info,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      children: (0, _._)("#Cart_Coupons_Applied"),
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      children: (0, _._)("#Cart_Coupons_InUse"),
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.Discount,
                children: ["-", _, "%"],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.CouponInfoText,
            children: _.children,
          });
        }
        function _(_) {
          const { checked: _, hidden: _ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_.Checkbox, _ && _.Hidden),
            children: _ && (0, _.jsx)(_._, {}),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _() {
          const [_, _] = _.useState(null);
          return (
            _.useEffect(() => {
              _((0, _._)()?.rgUserCountryOptions);
            }, []),
            _
              ? (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().EstimatedTotalFlex,
                    _().UserCountrySelector,
                  ),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().CartLabelText,
                      children: (0, _._)("#Cart_UserCountrySelector"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().CartValueText,
                      children: (0, _.jsx)(_, {
                        rgCountryOptions: _,
                      }),
                    }),
                  ],
                })
              : null
          );
        }
        function _(_) {
          const { rgCountryOptions: _ } = _,
            [_, _] = _.useState(_._.COUNTRY),
            _ = _.useMemo(
              () =>
                Object.keys(_).map((_) => ({
                  label: _[_],
                  data: _,
                })),
              [_],
            ),
            _ = _.useCallback((_) => {
              _.data != _._.COUNTRY &&
                PresentCountryCurrencyChangeDialog(_.data == "help"),
                _(_.data);
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: _,
            rgOptions: _,
            contextMenuPositionOptions: {
              bMatchWidth: !1,
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_, {
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _._)(),
            { data: _ } = (0, _._)(),
            _ = _.isLoading || !_.data,
            _ = (0, _._)(),
            [_, _] = (0, _._)(),
            { sortedLineItems: _, bCartIncludesGifts: _ } = _.useMemo(() => {
              const _ = _?.data?.line_items || [],
                _ = _.some((_) => _.flags?.is_gift);
              return {
                sortedLineItems: _.sort((_, _) => {
                  const _ = _.bundleid ?? _.packageid,
                    _ = _.bundleid ?? _.packageid;
                  return _.time_added == _.time_added
                    ? _ < _
                      ? 1
                      : -1
                    : _.time_added < _.time_added
                      ? 1
                      : -1;
                }),
                bCartIncludesGifts: _,
              };
            }, [_?.data?.line_items]),
            _ = _.useCallback(
              (_) =>
                (0, _.jsx)(_, {
                  ..._,
                  availableCoupons: (_ && _[_.lineItem.line_item_id]) || [],
                }),
              [_],
            ),
            { data: _ } = (0, _._)();
          return (0, _.jsxs)(_._, {
            validateCart: _,
            eDisplayType: _._.k_ECartDisplayType_FullPage,
            children: [
              (0, _.jsx)(_._, {}),
              (0, _.jsxs)(_._, {
                className: _().ShoppingCartCtn,
                children: [
                  (0, _.jsxs)(_._, {
                    className: _().ShoppingCartLeftCol,
                    children: [
                      _ && (0, _.jsx)(_._, {}),
                      !!_ &&
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)(_, {
                            children: (0, _.jsx)(_, {
                              giftInfo: _,
                              onChange: _,
                            }),
                          }),
                        }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_._, {
                          lineItems: _,
                          cartValidation: _,
                          LineItemContainer: _,
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        validateCart: _,
                      }),
                      !_ &&
                        (0, _.jsxs)("div", {
                          className: _().ResponsiveShoppingCartSummary,
                          children: [
                            (0, _.jsx)(_, {
                              bCartIncludesGifts: _,
                              strEstimatedTotal:
                                _?.estimated_totals?.subtotal.formatted_amount,
                            }),
                            (0, _.jsx)(_, {}),
                          ],
                        }),
                      _ &&
                        _({
                          cart: _.data,
                          validatedCart: _,
                          bCartIncludesGifts: _,
                        }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _().ShoppingCartRightCol,
                      _?.length <= 2 && _().SmallCart,
                    ),
                    children: (0, _.jsxs)("div", {
                      className: _().CartRightColStickyCtn,
                      children: [
                        (0, _.jsx)(_, {
                          bCartIncludesGifts: _,
                          strEstimatedTotal:
                            _?.estimated_totals?.subtotal.formatted_amount,
                        }),
                        (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {
                          cart: _.data,
                          bMinimalDisplay: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              lineItem: _,
              storeItem: _,
              validatedItem: _,
              availableCoupons: _,
              children: _,
            } = _,
            [_] = (0, _._)(),
            _ = _ === "gifts" && !!_.flags.is_gift,
            _ = !!_.length;
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)(_._, {
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      storeItem: _,
                      lineItem: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  storeItem: _,
                  lineItem: _,
                  couponApplied: _?.coupon_applied,
                  availableCoupons: _,
                }),
            ],
          });
        }
        const _ = (0, _._)(function (_) {
          const { strEstimatedTotal: _, bCartIncludesGifts: _ } = _,
            { bButtonDisabled: _, nextStep: _, bGuestAvailable: _ } = _(_);
          return (0, _.jsxs)("div", {
            className: _().CartSummaryCtn,
            children: [
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().EstimatedTotalFlex,
                  _().SummaryMarginBottom,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().CartLabelText,
                    children: (0, _._)("#Cart_EstimatedTotal"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().CartValueText,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().CartNoteText, _().SummaryMarginBottom),
                children: (0, _._)("#Cart_Note_SalesTax"),
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_, {
                    bDisabled: _,
                    nextStep: _,
                    bGuestOption: _,
                  }),
                  (0, _.jsx)(_, {
                    disabled: _ || _,
                  }),
                  (0, _.jsx)(_, {
                    bDisabled: _,
                  }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _.isSuccess && _.data.cart_items.every((_) => !_.errors),
            [_, _] = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.data),
            _ = (0, _._)(_.data) || _,
            _ =
              _.isSuccess &&
              _.data.line_items.some(
                (_) =>
                  _.flags?.is_gift &&
                  !_.gift_info?.accountid_giftee &&
                  (!_.gift_info?.email_giftee ||
                    !_._.validateEmail(_.gift_info?.email_giftee)),
              );
          let _ =
            _._.logged_in &&
            ((_ === "initial" && !_ && !_) ||
              (_.isSuccess && _.data.line_items.length == 0));
          _ = _ || (_ === "gifts" && (!_ || _));
          let _;
          return (
            _ && _ == "initial" && !_
              ? (_ = "gifts")
              : _._.logged_in
                ? (_ = "checkout")
                : (_ = "login"),
            {
              bButtonDisabled: _,
              nextStep: _,
              bGuestAvailable: _,
            }
          );
        }
        function _(_) {
          const {
            bButtonDisabled: _,
            nextStep: _,
            bGuestAvailable: _,
          } = _(_.bCartIncludesGifts);
          return (0, _.jsx)(_, {
            bDisabled: _,
            nextStep: _,
            bGuestOption: _,
          });
        }
        function _(_) {
          const { bDisabled: _, nextStep: _, bGuestOption: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            [_, _] = (0, _._)(),
            _ = (0, _._)();
          let _ = _.kFb;
          (0, _._)(_) && (_ = _.gid);
          const _ = () => {
              switch (_) {
                case "login":
                  if (_ != _.kFb && _) {
                    const _ =
                      _._.STORE_CHECKOUT_BASE_URL +
                      "checkout?purchasetype=self&cart=" +
                      _;
                    (0, _._)(_, _);
                  } else (0, _._)();
                  break;
                case "gifts":
                  _("gifts"), _.push(_._.ShoppingCartGifts());
                  break;
                case "checkout":
                  location.href = _;
                  break;
                default:
                  (0, _._)(_, "unhandled step");
              }
            },
            _ = _(_),
            _ = (0, _._)(
              _().CartSummaryBtn,
              _().SummaryMarginBottom,
              _().Button,
            );
          return (0, _.jsx)(_._, {
            disabled: _,
            className: _,
            onClick: _,
            children: _,
          });
        }
        function _() {
          const _ = `${_._.STORE_BASE_URL}subscriber_agreement/`;
          return (0, _.jsxs)(_._, {
            className: _().LicenseContextCtn,
            children: [
              (0, _.jsx)("img", {
                src: `${_._.IMG_URL}/checkout/computer.png`,
                alt: "",
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("div", {
                    className: _().LicenseTitle,
                    children: (0, _._)("#Cart_LicenseContextTitle"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().LicenseLink,
                    children: (0, _._)(
                      "#Cart_LicenseContextLink",
                      (0, _.jsx)("a", {
                        href: _,
                        children: (0, _._)("#Cart_LicenseContextSSA"),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { bDisabled: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.data?.family_groupid(), _, _._._),
            _ = () => {
              _.mutate(void 0, {
                onSuccess: () => {
                  location.href = `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`;
                },
              });
            };
          return _
            ? (0, _.jsx)(_._, {
                disabled: _,
                className: (0, _._)(
                  _().CartSummaryBtn,
                  _().SummaryMarginBottom,
                ),
                onClick: _,
                children: (0, _._)("#Cart_DeclinePurchaseRequest"),
              })
            : null;
        }
        function _(_) {
          return _ == "login"
            ? (0, _._)("#Cart_ContinueButton_Payment")
            : _ == "gifts"
              ? (0, _._)("#Cart_ContinueButton_Gifts")
              : _ == "checkout"
                ? (0, _._)("#Cart_ContinueButton_Payment")
                : ((0, _._)(_, "unhandled step"), "");
        }
        function _(_) {
          const { disabled: _ } = _,
            _ = (0, _._)().data?.family_groupid(),
            _ = (0, _._)(_, _._.country_code),
            [_, _] = (0, _._)(),
            [_, _] = _.useState(!1),
            _ = () => {
              !_ &&
                !_ &&
                (_(!0),
                _.mutate(void 0, {
                  onSuccess: () => {
                    window.location.assign((0, _._)(_));
                  },
                }));
            };
          return !_ && _ != _._.k_ENonGiftableItemPresent
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().RequestPurchaseCtn,
                  _().SummaryMarginBottom,
                ),
                children: [
                  (0, _.jsx)(_._, {
                    disabled: _ || _ || !_,
                    className: (0, _._)(_().CartSummaryBtn),
                    onClick: _,
                    children: (0, _._)("#Cart_RequestPurchase"),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      children: (0, _._)("#Cart_RequestPurchaseExplanation"),
                    }),
                  _ === _._.k_ENonGiftableItemPresent &&
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#Cart_RequestPurchaseNonGiftableItems",
                      ),
                    }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(),
            _ = _();
          (0, _._)();
          let _ = null;
          return (
            _
              ? _.type == "replay"
                ? (_ = (0, _.jsx)(_, {
                    cartID: _,
                  }))
                : (_ = (0, _.jsx)(_, {
                    cartID: _,
                    ..._,
                  }))
              : (_ = (0, _.jsx)("div", {
                  className: _()(_().ShoppingCartPage, _().CartPagePlaceholder),
                  children: (0, _.jsx)(_._, {
                    position: "center",
                    msDelayAppear: 250,
                  }),
                })),
            (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(_, {}), _],
            })
          );
        }
        function _() {
          return (0, _._)(), (0, _._)(), null;
        }
        function _(_) {
          const { cartID: _, initialStep: _ = "initial" } = _,
            [_, _] = _.useState(_),
            _ = (0, _._)()?.data?.line_items.length || 0,
            _ = _(_, _);
          return (0, _.jsx)(_, {
            cartID: _,
            title: _,
            step: _,
            onStepChange: _,
            children: ({ cart: _, validatedCart: _, bCartIncludesGifts: _ }) =>
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      isCartEmpty: !_ || _.line_items.length === 0,
                      cart: _,
                      bCartIncludesGifts: _,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      cart: _,
                      validatedCart: _,
                    }),
                  }),
                ],
              }),
          });
        }
        function _(_) {
          const { cartID: _ } = _;
          return _._.logged_in
            ? (0, _.jsx)(_, {
                cartID: _,
                title: (0, _._)("#Cart_Replay_SavedCart"),
                step: "initial",
                onStepChange: () => {},
                children: () =>
                  (0, _.jsx)(_, {
                    children: (0, _._)("#Cart_Replay_Instructions", 72),
                  }),
              })
            : (0, _.jsx)(_._, {});
        }
        function _(_) {
          const {
              children: _,
              cartID: _,
              title: _,
              step: _,
              onStepChange: _,
              ..._
            } = _,
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              _.current && _.current.NavTree()?.Activate(!0);
            }, []),
            (0, _.jsx)(_._, {
              controller: "cart",
              method: "display",
              submethod: _,
              children: (0, _.jsxs)(_._, {
                cartID: _,
                step: _,
                setStep: _,
                ..._,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsxs)(_._, {
                    className: _().ShoppingCartPage,
                    navRef: _,
                    children: [
                      (0, _.jsx)(_, {
                        step: _,
                        title: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _().ShoppingCartHeader,
                        children: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { step: _, title: _ } = _,
            _ = _(_);
          return (0, _._)()
            ? null
            : (0, _.jsxs)("div", {
                className: _().ShoppingCartBreadcrumbs,
                children: [
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL,
                    children: (0, _._)("#Cart_Bradcrumb_Home"),
                  }),
                  " ",
                  _,
                  " ",
                  (0, _.jsxs)("span", {
                    className: _().CurrentBreadcrumb,
                    children: ["> ", _],
                  }),
                ],
              });
        }
        function _() {
          const [_, _] = _.useState(!1);
          return (
            _.useEffect(() => {
              _ || (0, _._)().then(() => _(!0));
            }, [_]),
            _
          );
        }
        function _(_, _) {
          return _ === "gifts"
            ? (0, _._)("#Cart_GiftOptions")
            : _ > 0
              ? (0, _._)("#Cart_YourShoppingCartLineItems", _)
              : (0, _._)("#Cart_YourShoppingCart");
        }
        function _(_) {
          return _ === "gifts"
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  "> ",
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "cart",
                    children: (0, _._)("#Cart_YourShoppingCart"),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const _ = _();
          return (0, _.jsx)("div", {
            className: _().BackgroundImage,
            style: _
              ? {
                  backgroundImage: `url("${_}")`,
                }
              : null,
          });
        }
        function _() {
          const _ = _.useRef(""),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(),
            _ = !_.current;
          let _ = _._,
            _ = _._._;
          if (_ && _ !== void 0) {
            const _ = _.data?.line_items || [],
              _ = _.length
                ? _.reduce((_, _) => (_.time_added > _.time_added ? _ : _))
                : null;
            (_ = _?.bundleid || _?.packageid || _._),
              (_ = _ === _?.bundleid ? _._._ : _._._);
          }
          const [_] = (0, _._)(_, _, _._);
          if (_ && _) {
            const _ = _._.Get(),
              _ = _.GetIncludedAppIDs();
            for (const _ of _) {
              const _ = _.GetApp(_);
              if (!_) continue;
              const _ = _.GetAssets().GetPageBackgroundURL();
              if (_) {
                _.current = _;
                break;
              }
            }
          }
          return _.current;
        }
        function _() {
          const _ = (0, _._)();
          return (0, _.useMemo)(() => {
            let _ = new URLSearchParams(_.search);
            return _.get("gidreplay")
              ? {
                  type: "replay",
                  gid: _.get("gidreplay"),
                }
              : _._.logged_in
                ? {
                    type: "account",
                    global: !0,
                  }
                : {
                    type: "anonymous",
                    gid: (0, _._)("shoppingCartGID"),
                    global: !0,
                  };
          }, [_.search]);
        }
        function _(_) {
          const { isCartEmpty: _, cart: _, bCartIncludesGifts: _ } = _,
            _ = () => (window.location.href = _._.STORE_BASE_URL);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  cart: _,
                }),
              (0, _.jsxs)(_._, {
                "flow-children": "row",
                className: _().CartFooter,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().NavButtons,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: _,
                        className: _().Button,
                        children: (0, _._)("#Cart_ContinueShopping"),
                      }),
                      (0, _.jsx)(_, {
                        bCartIncludesGifts: _,
                      }),
                    ],
                  }),
                  !_ && (0, _.jsx)(_, {}),
                ],
              }),
            ],
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = () => _.mutate();
          return (0, _.jsx)(_, {
            onClick: _,
            children: (0, _._)("#Cart_RemoveAll"),
          });
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
          step: "initial",
          setStep: () => {},
        });
        function _() {
          return (0, _.useContext)(_);
        }
        function _() {
          const _ = _();
          return [_.step, _.setStep];
        }
        function _() {
          const _ = _();
          return [_.cartWideGiftInfo, _.onCartWideGiftInfoChange];
        }
        function _(_) {
          const {
              step: _,
              setStep: _,
              cartID: _,
              cartWideGiftInfo: _,
              onCartWideGiftInfoChange: _,
              children: _,
            } = _,
            _ = _.useMemo(
              () => ({
                step: _,
                setStep: _,
                cartWideGiftInfo: _,
                onCartWideGiftInfoChange: _,
              }),
              [_, _, _, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              cartID: _,
              children: _,
            }),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "tVR7nCVynuzImpvF9viMI",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StoreSalePriceWidget: "_2-McVXIMf_N62bUl92jzfB",
          StoreSaleDiscountedPriceCtn: "_1_P7Dmzd6trtJ9KdCsm-Nk",
          StoreSalePriceBox: "_2Ddt9rJYO847UxQG9pUQiI",
          StoreSaleReservationPriceBox: "_2EisNLmBrsT1g7ArYp9HU6",
          StoreSaleDiscountBox: "_1W5KL6SFFSmWCA-_9poz6t",
          FromCoupon: "_2GpdhLpPsPUodknhaYhTa3",
          StoreOriginalPrice: "_2z2Ba4q2zi5jWk2QF17G2c",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          _: "_2hnF3M_l4xdIdQ4CkN7LYB",
          _: "VmQTOrz5MPOWte5C9K7YS",
          _: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
          BackgroundAnimation: "_2hlRK2hm0pHy1YSxwknFCj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Ye-Lgym31_-ibnmbFywrn",
          "ItemFocusAnim-darkerGrey": "_1klcEk0V0JFATe7imIRZ1C",
          "ItemFocusAnim-darkGreySettings": "_1o29CI_yDNVtgTV1cxDqGZ",
          "ItemFocusAnim-darkGrey": "_2BtPOA0wSbFULgc-Zh-0_x",
          "ItemFocusAnim-grey": "_24LF-yODOtVFSuejuQ_xu2",
          "ItemFocusAnim-translucent-white-10": "uTNXVgYo8JPxZgJyTl9LQ",
          "ItemFocusAnim-translucent-white-20": "ItJlj151fY2eNJEBeWVOA",
          "ItemFocusAnimBorder-darkGrey": "_2blFzc6unV1uJG63OhTkyP",
          "ItemFocusAnim-green": "_3CaU0PXdB2ThLG-Q0foVrK",
          focusAnimation: "_1EZdMwnQzoxjAOoFpXHuZ_",
          hoverAnimation: "kfeP_UGfxsZwzWvFD4ytm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
          BackgroundAnimation: "_3EMAF_7GAyPW8G7OSt8s0z",
          "ItemFocusAnim-darkerGrey-nocolor": "_3fWOpZpfDmwOCKEdw8xcqf",
          "ItemFocusAnim-darkerGrey": "_2Tvf1f8cUg1eYlQg027B3W",
          "ItemFocusAnim-darkGreySettings": "_1tKhhjTYPWAz5_eQe91O1A",
          "ItemFocusAnim-darkGrey": "_1l7IyrCH5ez4PBO7R4h8RT",
          "ItemFocusAnim-grey": "_3X7_M9NEYzjKEgQRMQevkQ",
          "ItemFocusAnim-translucent-white-10": "_3YCxpOEfjLuLbB1hut87fZ",
          "ItemFocusAnim-translucent-white-20": "_2kvhksXgWA4vxGz5Oy1tV1",
          "ItemFocusAnimBorder-darkGrey": "_3N1wGZIJ5QySTBWgyBavuM",
          "ItemFocusAnim-green": "Vgab6fHUHvZ-iWKRJwy8h",
          focusAnimation: "GvE_FaPqTf1D0HASx1C_0",
          hoverAnimation: "_88lGefJsUDJUpRFJ3pUq7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          MainCarousel: "_3SWsMT4_EVVsmPbanjlEy4",
          FeatureCtn: "_10K5p_DOyGW-WttCA1UwuC",
          StoreSection: "OyJ48UmHDKl9fN7ue4oPF",
          SectionTitle: "_2RnIwgy025bixjWk2UTw40",
          SectionDescription: "nVpbhpPkgrAwu1ZjFf7-B",
          SectionTitleCtn: "_3LagaO9m29xPGnO2YwpQnq",
          SpotlightsColumn: "_2Y2C1oQ7JEMkq2AoDp_S0A",
          SpecialsItem: "_1txjwTLoJcqr0tBIHfKXTG",
          SpotlightCtn: "_10ZMM-6TwuIxLIDYNo11cI",
          SpotlightImageCtn: "_1bl_5_eovS3fDHK3GbmixH",
          CapsuleDecorators: "_2kI35iD_oF1-ul1amEDSsK",
          SpotlightTextCtn: "_1clRj5v7vU3Cuj7x9c3ZNZ",
          SpotlightTitle: "_2egM2GG5RaDSQYVNWlMHat",
          SpotlightBody: "_1ls2pcPp4wzuE2mXhMudcd",
          SpotlightWeeklongTextCtn: "_3oM7Hgank9qu0ZtiIqT4Ti",
          SpotlightItemCount: "MsDhVPTMNn95Jd3XWTPQR",
          BottomBarPriceInfo: "w6OMUI_I9oVaxDOwRzRrh",
          BroadcastPage: "_2wLdHFCsbh4BfZ6kvvpRyL",
          BroadcastCtn: "_1D6ilQYGn-cYI2fhTAjSzD",
          BroadcastImageCtn: "cIETZLGVM0l5WCskcyNy2",
          BroadcastVideoThumbnail: "_39GHoC1PY5ctRSLAksxgN2",
          BroadcastPlayIcon: "_39krE1gLBTakOzuK41yZBD",
          BroadcastTextCtn: "_14UDZIeZXOLeUPaEDmYrfn",
          BroadcastName: "_3mq3Uyxqjh000D4-OJ9PiI",
          BroadcastDesc: "_3jIzvnoNk4DzmB7w3vl3dz",
          DailyDealCtn: "_3pSANczPET1GBWiNfM8ZEZ",
          DailyDealImageCtn: "pNmm6ej3gbZJbTFnF34Bb",
          DailyDealTextCtn: "_1tG1_bqddtY0lm02Wf4X9T",
          DailyDealDesc: "_21_xVixMh0-rRqUGdGxbEg",
          ContentHubTakeoverCtn: "_2NgkNEEvdNAueuTkHH4V0S",
          TweaksMenu: "_3N0H151KuH7D3iNrbRNL3D",
          MenuTitle: "_1qcGKxEKb2AANDw4iXQ0kF",
          MenuOptions: "_2BNKaMvGCPl8BE2y48Zyu2",
          BackgroundAnimation: "_26VKCvvlOekXO3gQ4lt52K",
          "ItemFocusAnim-darkerGrey-nocolor": "_3wTkpIb4XE7F7ZZDUXHgm_",
          "ItemFocusAnim-darkerGrey": "_2JTxWE9ODcqL4KEwAQsSC5",
          "ItemFocusAnim-darkGreySettings": "_1t6voKc6Z9o4Tv6RxMOxKZ",
          "ItemFocusAnim-darkGrey": "_3hNDwFLzATB9Rlsqzdi0SL",
          "ItemFocusAnim-grey": "DO3pGo-5_dzvOUiQSw2fW",
          "ItemFocusAnim-translucent-white-10": "_1yAke0XKqQ2OeiVkyNRJPm",
          "ItemFocusAnim-translucent-white-20": "_3HsFu62m74Ss4hGpugGIY",
          "ItemFocusAnimBorder-darkGrey": "_2rbzbmBTlYOt4Kd3V_AurK",
          "ItemFocusAnim-green": "_2ha4PsCJYLF62a1zUQzOkG",
          focusAnimation: "yX4eIfH38xAjJpSzr9zFe",
          hoverAnimation: "ib5aU4OmCxpvW7mx1Gkl7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CartCreatorCtn: "_2HG7VOroS8aHSg-W3fPyTt",
          Title: "_307GrwtjhKkXh5dUC5KjUv",
          Description: "_3YGQuryhG_j0UPSIaC_7ul",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_3s8SimT1ZQwPeXXdDFPQLK",
          TradingCardContainer: "_2haWAmlu7TDqdL95bf4G8g",
          EarnedMessage: "_2p5xYmfnLWerjNkmBDfZXp",
          Right: "_18eO4-XadW5jmTpgdATkSz",
          ProgressSection: "_2M_5i3fmNkCv4pCoMmk1Os",
          Progress: "lf5WnbH_ohSVbUnvd3Nf2",
          ProgressRail: "_3TjWhPYAqbU3Hrzm6Iq6il",
          IneligbleList: "_1r6njhPeny9XyTQKt2-__7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "qp08vFwlN2mRCsja6T_-g",
          CartUpsellArea: "_2rkDlHZ2yi-tFtDk4-CC4U",
          CartUpsellTitle: "_2dxsG5kVzdAeX8R0mGOiV8",
          UpsellRow: "_24yiwSg4qoT0NRBSlWoUXw",
          Specials: "_2-sCaPlOkBP6wsNVrDNHvZ",
          Loading: "pUmkjugwizSD0CopYMP1P",
          DailyDeals: "rpifv8i-Dj8KDO5qKGvWG",
          Spotlights: "udcFpqnwSDcMv_byU2oQc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CouponPickerRowGlow: "_2ETXQ6ojtTNSbACqQ2o0Yv",
          CouponPickerRow: "_3wfeHGptWCHP2ctMNwtAr8",
          ModifyLink: "_3JmdOP-Eoam3irQDjytJ9V",
          CouponRepresentation: "_1_LYYN59DADLVYtqwZYjSm",
          PackageName: "_3L1DF5dTgbrn6BlQIgv8c-",
          CouponListContainer: "ir0tpMmQQazulD77PH8DZ",
          CouponListItem: "_3pw4q_MAfhjbHBkGJVrYyz",
          Disabled: "_1GFD8zuMK_JuYQUQhOo4zz",
          Image: "_2gY_V_NV2khWDAjW5A9Nmd",
          Info: "_1Je1cc8-t1TZpSr6VwGwbN",
          Discount: "_3KPbt6pUHnz1M3cEORSHvV",
          CouponInfoText: "FicMnlG4nr7BEujcPpbGp",
          Checkbox: "_265qJZDbyz2JxqvT15KpRr",
          Hidden: "_21w270Ne6__P31083H0FFV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GiftFormDivider: "_1mAU7zkVivAPGFPI3maedz",
          GiftFormSection: "_1tguxhk732P4gi865oLjSE",
          SignInLink: "_3PPF6YhUS0OHDhePQ8H8GV",
          FormTextLabel: "_1TulC_KnETCU3Ks4Y1hQ70",
          FullWidth: "_1NKGWg4uzU98wSFcgJ4tz1",
          FormTitle: "NYKHMrCLjXgs0HgP8G8ei",
          RedText: "_1Ja8Ra-vrBec1_MVpbvrL",
          GiftNoteInput: "_3wPcWGmcqJzbUXHRTPYsXa",
          GiftRecipientPickerModal: "_3R_gixvbcQCJxxRTmCvpJw",
          GiftFriendsListCtn: "_321Woxp4ONn3k90_NLayE0",
          GiftRecipientPickerFormCtn: "_2SDa5ofHp4X7qHQE540cIS",
          GiftFriendsInput: "_1OuNJQWR-7lSdtgyJf69uF",
          GiftRecipientSaveBtn: "_18bhpboMEhi47IMCRQt-2s",
          GiftPickerFriendBlock: "_3qPIR-iXdtj8oUzr8cH1Ey",
          FriendAvatar: "_1AeyMd0eAcDoRyiR0KkOwC",
          Focused: "_11n414df5ioq8YLpNJuHpM",
          Disabled: "_3jwhGaqW0tVwkzg9eXjJWZ",
          Selected: "_1Wx7OLK94f5EXTrnc8MqUs",
          PersonaName: "_1ki9msaNQoGECm27Yz5YGX",
          FriendsGiftLabel: "_3FPeG6FVHnapQP5UKhrMvC",
          OwnsGame: "YK5pj3LG0Q81ZMKdO9Mcc",
          OnWishlist: "_28yZdTwE0gz4jOV6olyg7F",
          GiftFormRecipient: "_2bnjZDtqxcOZI3eITR0MuL",
          LinkButton: "_12zYFuKO2U-1QfeVxlGfwF",
          GiftDatePicker: "VZsqgN_QGXQcRsD6OgscT",
          ScheduleGiftBtn: "_3gADDjjeuuq4YHM8O1IeiQ",
          GiftScheduleIcon: "_742UkQg_TM_Sdf4w5Ye2a",
          GiftRadioLabel: "_3IlfjNwkM2GwzkZyD0llva",
          GiftRadioRow: "RMDo0KSLaIgeffA12m9Ln",
          GiftSignatureInput: "_3tP7DCVH8b-Vyu5ig2fTAk",
          ScheduleError: "_3y4BqvBTwDLWUl1TCNqWp9",
          LoadingError: "_35a12Zg31sBh2Lj4ClSTRz",
          GamepadTimePickerRow: "_2EZzsNeqqWMVcuzawVZc56",
          TimezoneDisplay: "_1zgxnwJ3wM_SzElTI5DOyw",
          FamilyGiftNotice: "_1B5Eew-T7ehFeKRYrle_-l",
          GiftNonFriendWarning: "_2RHycas9bwPdkNJ4QSaMnr",
          GiftEmailInput: "vsYKgPb-InpQZyJ4AoP2m",
          GiftEmailWarnings: "_37q9WvJ0H38LXVjg2BQI1w",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_2w0ZEap3hR1c0K0_DxJDdN",
          ShoppingCartPage: "_22xtsolKcQit92o-LBeRWD",
          CartCheckboxNoMargin: "_1S9a0tZYJv0d4x3-DrxbuS",
          CartPagePlaceholder: "_3Hr6r9HTC7jT51-4vf_X8B",
          ShoppingCartHeader: "bCGAC51za6R_thjPd7_vw",
          ShoppingCartCtn: "_1jqUY_WcPgZnIOE-d9x7wc",
          ShoppingCartLeftCol: "_17GFdSD2pc0BquZk5cejg8",
          ShoppingCartRightCol: "_3HIve50RR17shqpJqmrUps",
          GifteeHintCtn: "_3UNuK95bMDWBfxlG-FNrLd",
          GifteeHint: "zhqWr27UI7EOAAv_zxuY",
          PersonaName: "_370ZzVVcpzmF7GBPgOL9hc",
          LoadingThrobber: "eDdFpOTz0O9U7xBshZJUx",
          CartRightColStickyCtn: "_1bCdGv5zX6cYDovFfcBfdg",
          CartSummaryCtn: "_2bIzQo07mxubFvscA8RIA8",
          EstimatedTotalFlex: "_2DjadWLFH3keW9rGWZKxSk",
          SummaryMarginBottom: "qV80oahDZsbXiS6lIDLND",
          LicenseContextCtn: "jY9l4aHTdQLHeTWfPonTr",
          LicenseTitle: "p8XFGmprI4snkQjm11Pf2",
          LicenseLink: "_2Wg3oyIvxKKM_o6q7rXdc5",
          ResponsiveShoppingCartSummary: "dpVdC9qAMjdzrN7VWFria",
          RequestPurchaseCtn: "_2jup-7OkSAzTBG-K9r9OCX",
          CartNoteText: "_31DQWsrdb_9oV-vMOaaPqI",
          CartLabelText: "_3ayrhzEm-T_IRhWeQ4HFxr",
          CartValueText: "_2WLaY5TxjBGVyuWe_6KS3N",
          ShoppingCartBreadcrumbs: "_2FKdJT3nRLNX_ue4Zj-qdK",
          CurrentBreadcrumb: "_3TtUDn-J9j6rkwHqjT-i4Y",
          ShoppingCartModal: "_28yxHQw3ZhIBbVa9EZ27Vo",
          ShoppingCartModalBtns: "_1qRagOpQN0EH1x4-13UjR5",
          FooterNoticesHeader: "_8oyM41lAqEbIWSdjhPxzd",
          MustFix: "_3h66W1co-LupmeBf9p-avb",
          FooterNotice: "LXZhw7nTAlKyny-hrKcX9",
          NoticeIndex: "_3GJopp-lG4ZnUYB5mqk2q0",
          CartFooter: "_1Sdz1qnoKoD9eEPpC340Yj",
          NavButtons: "pp99Du2IR2EJ9UsjKcrRQ",
          Button: "_1rk1xUIAHMcMMDm4jz3MOM",
          CartSummaryBtn: "_1OKOHubCISYxpyNw0_nSgh",
          BetaNotice: "_1DTyDw3G0f4gmhjAvr_MGb",
          Text: "I4Bz94kh1lGOH1KrPzxzk",
          BackgroundImage: "FaiD8bJRAZ-HoNo0VvLOO",
          HeaderNotices: "_3SXN1YgsAs-4iju4Oo7cx5",
          ErrorModalContent: "_1Fli53rt96SoYErpk1TqAg",
          ErrorModalMessage: "vNpgPsE5lRrVJ55wTdc1i",
          ErrorModalBottom: "_5g0iBBKqtjiGHu5VHzz1h",
          ErrorModalCode: "_34Q7Jyhi9BetqDtEOzt-26",
        };
      },
      chunkid: (module) => {
        module.exports = {
          UserCountrySelector: "_1G8JdfmCwhonn-pZk-tfwP",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function _(_) {
          var _ = _(_);
          return __webpack_require__(_);
        }
        function _(_) {
          if (!__webpack_require__._(_, _)) {
            var _ = new Error("Cannot find module '" + _ + "'");
            throw ((_.code = "MODULE_NOT_FOUND"), _);
          }
          return _[_];
        }
        (_.keys = function () {
          return Object.keys(_);
        }),
          (_.resolve = _),
          (module.exports = _),
          (_._ = 61738);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
