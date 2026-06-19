(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [62965],
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
        Flex: "_3nHL7awgK1Qei1XivGvHMK",
        Direction: "_3JCkAyd9cnB90tRcDLPp4W",
        Justify: "_12ampOcrpRamy1y301kEaK",
        Align: "_1SxQuUnaM-MXeF5UfssWve",
        Gap: "ja5o2GZTopxfGJArsZgFh",
        GapX: "_3KiTPfFvdkPH6ixij56nVM",
        GapY: "_38cfDT7owcq-7PHlx-Bx2j",
        Wrap: "dB7ipW28YN-_GytLR4EuE",
        Inline: "LOeaKjPDMbdcAB54IFgyX",
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
              focusable: _,
              navProps: _,
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
            _ = _ ?? _?.focusable ?? !!_,
            _ = {
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
            };
          return _._.IN_GAMEPADUI && (_ || _)
            ? (0, _.jsx)(_._, {
                ..._,
                ...(_ || {}),
                focusable: _,
              })
            : (0, _.jsx)("button", {
                ..._,
              });
        },
        _ = function (_) {
          const {
              variant: _ = "default",
              size: _ = "2",
              minWidth: _ = "fit-content",
              disabled: _,
              icon: _,
              focusable: _,
              navProps: _,
              ..._
            } = _,
            _ = _ ? _ : void 0,
            _ = (0, _._)(
              {
                onClick: _,
                ..._,
                variant: _,
                size: _,
                minWidth: _,
                className: _()(_.Button, _ && _.Icon, (0, _._)()),
              },
              _,
            );
          return _._.IN_GAMEPADUI && (_ || _)
            ? (0, _.jsx)(_._, {
                ..._,
                ...(_ || {}),
                focusable: _,
              })
            : (0, _.jsx)("a", {
                ..._,
              });
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ = "div", focusable: _, navProps: _, ref: _, ..._ } = _,
          _ = (0, _._)(
            {
              ..._,
              className: _()(_.className, _.Flex),
            },
            _,
          ),
          _ = _ ?? _?.focusable ?? !!_.onClick,
          _ = (0, _.jsx)(_, {
            ref: _,
            ..._,
          }),
          _ = (0, _._)(_.direction ?? "row");
        return _._.IN_GAMEPADUI
          ? (0, _.jsx)(_._, {
              ...(_ || {}),
              focusable: _,
              "flow-children": _,
              children: _,
            })
          : _;
      }
      const _ = [
        ..._._,
        {
          prop: "direction",
          responsive: !0,
          className: _.Direction,
          cssProperty: "--direction",
        },
        {
          prop: "justify",
          responsive: !0,
          className: _.Justify,
          cssProperty: (_) => ["--justify", _(_)],
        },
        {
          prop: "align",
          responsive: !0,
          className: _.Align,
          cssProperty: "--align",
        },
        {
          prop: "gap",
          responsive: !0,
          className: _.Gap,
          cssProperty: (_) => ["--gap", `var(--spacing-${_})`],
        },
        {
          prop: "gapX",
          responsive: !0,
          className: _.GapX,
          cssProperty: (_) => ["--gap-x", `var(--spacing-${_})`],
        },
        {
          prop: "gapY",
          responsive: !0,
          className: _.GapY,
          cssProperty: (_) => ["--gap-y", `var(--spacing-${_})`],
        },
        {
          prop: "wrap",
          responsive: !0,
          className: _.Wrap,
          cssProperty: "--wrap",
        },
        {
          prop: "inline",
          responsive: !0,
          className: _.Inline,
        },
      ];
      function _(_) {
        return /^(between|around|evenly)$/.test(_) ? `space-${_}` : _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ShoppingCartErrorModal: () => _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "giftee-hint",
        _ = 600;
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { closeCart: _, lineItemIDs: _, replacedPackageIDs: _ } = _,
          _ = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = _.useMemo(
            () =>
              _.data && _ && 0 !== _.length
                ? _.data.line_items.filter((_) =>
                    __webpack_require__.includes(_.line_item_id),
                  )
                : null,
            [_, _.data],
          ),
          _ = (0, _._)(_._.STORE_BASE_URL + "cart");
        if (
          (_.useEffect(() => {
            _.isSuccess && _ && 0 === _.length && _();
          }, [_, _, _]),
          !_)
        )
          return null;
        const _ = _?.length > 0;
        return (0, _.jsx)(_._, {
          validateCart: _,
          eDisplayType: _._.k_ECartDisplayType_Modal,
          children: (0, _.jsxs)(_._, {
            active: !0,
            className: _().ShoppingCartModal,
            onDismiss: _,
            children: [
              (0, _.jsx)("div", {
                className: _().ShoppingCartHeader,
                children: (0, _._)(
                  _ ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
                ),
              }),
              (0, _.jsx)(_._, {
                lineItems: _,
                cartValidation: _,
              }),
              (0, _.jsx)(_, {
                lineItems: _,
                cartValidation: _,
              }),
              (0, _.jsxs)(_._, {
                className: _().ShoppingCartModalBtns,
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: (0, _._)("#Cart_ContinueShopping"),
                  }),
                  (0, _.jsx)(_._, {
                    className: _().OpenCartBtn,
                    onClick: () => (window.location.href = _),
                    children: (0, _._)(
                      "#Cart_ViewMyCart",
                      _.data?.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function _(_) {
        const { active: _, result: _, onDismiss: _ } = _;
        return (0, _.jsxs)(_._, {
          active: _,
          onDismiss: _,
          children: [
            (0, _.jsx)(_._, {
              children: (0, _._)("#Error_Generic"),
            }),
            (0, _.jsxs)("div", {
              className: _().ErrorModalContent,
              children: [
                (0, _.jsx)("div", {
                  className: _().ErrorModalMessage,
                  children: (0, _._)("#Cart_ErrorUpdating"),
                }),
                (0, _.jsx)("div", {
                  className: _().ErrorModalCode,
                  children: _ ? (0, _._)("#Cart_ErrorCode", _) : "",
                }),
                (0, _.jsx)("div", {
                  className: _().ErrorModalBottom,
                  children: (0, _.jsx)(_._, {
                    onClick: _,
                    children: (0, _._)("#Button_Close"),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const { cartValidation: _, lineItems: _ } = _,
          _ = _.useRef(!1),
          [_, _] = _.useState(!1),
          { data: _ } = (function () {
            const _ = (0, _._)();
            return (0, _._)({
              queryKey: [_],
              queryFn: async () => {
                const _ = await _.GetObject(_);
                return _
                  ? _.rtCreated < Date.now() / 1e3 - _
                    ? (await _.RemoveObject(_), null)
                    : _.nGifteeAccountID
                  : null;
              },
            });
          })(),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(),
          _ = (function () {
            const _ = (0, _._)(),
              _ = (0, _._)();
            return (0, _._)({
              mutationFn: async (_) => {
                _
                  ? await _.StoreObject(_, {
                      nGifteeAccountID: _,
                      rtCreated: Date.now() / 1e3,
                    })
                  : await _.RemoveObject(_);
              },
              onMutate: async (_) => {
                await _.cancelQueries({
                  queryKey: [_],
                });
                let _ = null;
                _ &&
                  (_ = {
                    nGifteeAccountID: _,
                    rtCreated: Date.now() / 1e3,
                  }),
                  _.setQueryData([_], _);
              },
            });
          })(),
          _ = (0, _._)();
        let _ = _._.logged_in && !_ && !!_ && !!_ && !_ && !!_?.cart_items;
        if (_) {
          const _ = new Map(_.cart_items.map((_) => [_.line_item_id, _]));
          _ = !!__webpack_require__.find(
            (_) =>
              !_.gift_info?.accountid_giftee &&
              !!_.get(_.line_item_id)?.can_purchase_as_gift,
          );
        }
        if (
          (_.useEffect(() => {
            _ && !_.current && ((0, _._)()?.AddEvent(_._._), (_.current = !0));
          }, [_]),
          !_)
        )
          return null;
        const _ = (0, _.jsxs)("a", {
          href: _.GetCommunityProfileURL(),
          target: "_blank",
          children: [
            (0, _.jsx)(_._, {
              size: "X-Small",
              statusPosition: "right",
              persona: _,
            }),
            (0, _.jsx)("div", {
              className: _().PersonaName,
              children: _.m_strPlayerName,
            }),
          ],
        });
        return (0, _.jsxs)(_._, {
          className: _().GifteeHintCtn,
          align: "center",
          gap: "3",
          direction: "row",
          children: [
            (0, _.jsx)(_._, {
              _: "div",
              align: "center",
              className: _().GifteeHint,
              children: (0, _._)("#Cart_GifteeHint_Wishlist", _),
            }),
            (0, _.jsxs)(_._, {
              gap: "2",
              direction: "row",
              align: "center",
              children: [
                (0, _.jsx)(_._, {
                  size: "1",
                  color: "dull",
                  onClick: () => {
                    (0, _._)()?.AddEvent(_._._), _.mutate(null);
                  },
                  children: (0, _._)("#Button_No"),
                }),
                (0, _.jsx)(_._, {
                  size: "1",
                  onClick: () => {
                    for (const _ of _)
                      _.mutate({
                        lineItemID: _.line_item_id,
                        lineItemFlags: {
                          is_gift: !0,
                        },
                        giftInfo: {
                          ..._.gift_info,
                          accountid_giftee: _,
                        },
                        gidCoupon: _.gidcoupon_applied,
                      });
                    _.mutate(_), _(!0), (0, _._)()?.AddEvent(_._._);
                  },
                  children: (0, _._)("#Button_Yes"),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
