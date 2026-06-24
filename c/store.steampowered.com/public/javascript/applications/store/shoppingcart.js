"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [62965],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { closeCart: _, lineItemIDs: _, replacedPackageIDs: _ } = _,
          _ = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = (0, _._)(_),
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
                scrollable: !0,
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
