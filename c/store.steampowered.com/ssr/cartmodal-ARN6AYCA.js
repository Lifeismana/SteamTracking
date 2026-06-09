var _ = _(_(), 1);
var _ = "./shoppingcart_arabic-XXXXXXXX.json";
var _ = "./shoppingcart_brazilian-XXXXXXXX.json";
var _ = "./shoppingcart_bulgarian-XXXXXXXX.json";
var _ = "./shoppingcart_czech-XXXXXXXX.json";
var _ = "./shoppingcart_danish-XXXXXXXX.json";
var _ = "./shoppingcart_dutch-XXXXXXXX.json";
var _ = "./shoppingcart_english-XXXXXXXX.json";
var _ = "./shoppingcart_finnish-XXXXXXXX.json";
var _ = "./shoppingcart_french-XXXXXXXX.json";
var _ = "./shoppingcart_german-XXXXXXXX.json";
var _ = "./shoppingcart_greek-XXXXXXXX.json";
var _ = "./shoppingcart_hungarian-XXXXXXXX.json";
var _ = "./shoppingcart_indonesian-XXXXXXXX.json";
var _ = "./shoppingcart_italian-XXXXXXXX.json";
var _ = "./shoppingcart_japanese-XXXXXXXX.json";
var _ = "./shoppingcart_koreana-XXXXXXXX.json";
var _ = "./shoppingcart_latam-XXXXXXXX.json";
var _ = "./shoppingcart_malay-XXXXXXXX.json";
var _ = "./shoppingcart_norwegian-XXXXXXXX.json";
var _ = "./shoppingcart_polish-XXXXXXXX.json";
var _ = "./shoppingcart_portuguese-XXXXXXXX.json";
var _ = "./shoppingcart_romanian-XXXXXXXX.json";
var _ = "./shoppingcart_russian-XXXXXXXX.json";
var _ = "./shoppingcart_sc_schinese-XXXXXXXX.json";
var _ = "./shoppingcart_schinese-XXXXXXXX.json";
var _ = "./shoppingcart_spanish-XXXXXXXX.json";
var _ = "./shoppingcart_swedish-XXXXXXXX.json";
var _ = "./shoppingcart_tchinese-XXXXXXXX.json";
var _ = "./shoppingcart_thai-XXXXXXXX.json";
var _ = "./shoppingcart_turkish-XXXXXXXX.json";
var _ = "./shoppingcart_ukrainian-XXXXXXXX.json";
var _ = "./shoppingcart_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.malay = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.sc_schinese = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
function _() {
  return _(_);
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    { storeBrowseContext: _, cacheStoreItemData: _ } = _();
  return _({
    queryKey: _(_, _),
    queryFn: async () => _(_, _, _, _, _, _),
    staleTime: 1 / 0,
    enabled: _.logged_in || !_(_),
  });
}
async function _(_, _, _, _, _, _) {
  let _ = _.Init(_);
  _(_) || _(_)
    ? (_.Body().set_gidshoppingcart(_.gid),
      _ && _.Body().set_gift_info(_.fromObject(_)))
    : _(_) && _.Body().set_gidreplayoftransid(_.gid),
    _(_, _),
    _ && _(_, _);
  let _ = await _.ValidateCart(_, _);
  if (
    (_.BSuccess() ||
      console.warn(`Failed to validate shopping cart: ${_.GetEResult()}`),
    _ && _)
  )
    for (let _ of _.Body().cart_items()) _(_.store_item(), _);
  return _.Body().toObject();
}
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              appids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivateAppList";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              appids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              private: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivateApps_ToggleAppPrivacy_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivateApps_ToggleAppPrivacy_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivateApps_GetPrivateAppList_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.private_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              private_apps: {
                _: 1,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivateApps_GetPrivateAppList_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.private_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              private_apps: {
                _: 1,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("AccountPrivateApps.ToggleAppPrivacy#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ToggleAppPrivacy = _;
  function _(_, _) {
    return _.SendMsg("AccountPrivateApps.GetPrivateAppList#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetPrivateAppList = _;
})((_ ||= {}));
var _;
((_) =>
  (_.NotifyPrivateAppListChangedHandler = {
    name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
    request: _,
  }))((_ ||= {}));
function _() {
  return "PrivateApps_" + _.accountid;
}
function _() {
  return _.IN_STEAMUI;
}
async function _(_, _) {
  try {
    let _ = _();
    await _.StoreObject(_, _);
  } catch (_) {
    let _ = new Error(
      `WritePrivateAppsToLocalCache failed with result ${_?.result}, ${_?.message}`,
    );
    _().ReportError(_, {
      bIncludeMessageInIdentifier: !0,
    }),
      console.warn(_);
  }
}
var _ = ["AccountPrivateApps"];
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let { rgAppIDs: _, bPrivate: _ } = _;
      return _(_, _, _);
    },
    onSuccess: (_, _) => {
      let { rgAppIDs: _, bPrivate: _ } = _;
      _(_, _, _, _ ? _ : null);
    },
  });
}
async function _(_, _, _) {
  let _ = _.Init(_);
  _.Body().set_appids(_.slice()), _.Body().set_private(_);
  let _ = await _.ToggleAppPrivacy(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
}
function _(_, _, _, _) {
  _.setQueryData(_, (_) => {
    if (!_) return;
    let _ = new Set(_);
    return (
      _.forEach((_) => {
        _ ? _.add(_) : _.delete(_);
      }),
      _ && _(_, Array.from(_.values())),
      _
    );
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
async function _(_, _, _) {
  if (_(_)) {
    let _ = _.Init(_);
    _.Body().set_line_item_id(_);
    let _ = await _.RemoveItemFromCart(_, _);
    return _(), _.Body().toObject();
  } else {
    let _ = _.Init(_);
    _.Body().set_gidlineitems([_]), _.Body().set_gidshoppingcart(_.gid);
    let _ = await _.RemoveLineItems(_, _);
    return _(), _.Body().toObject();
  }
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => await _(_, _, _),
    onSuccess: (_) => {
      "cart" in _ ? _(_, _, _.cart) : _(_, _);
    },
  });
}
async function _(_, _, _, _, _) {
  let _ = _.Init(_);
  _.Body().set_line_item_id(_),
    _.Body().set_user_country(_.country_code),
    _ && _.Body().set_gift_info(_.fromObject(_)),
    _ && _.Body().set_flags(_.fromObject(_)),
    _ && _.Body().set_apply_gidcoupon(_);
  let _ = await _.ModifyLineItem(_, _);
  return (
    _.BSuccess() ||
      console.warn(`Failed to update gift info: ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject()]
  );
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_);
  return _({
    mutationFn: (_) =>
      _(_, _.lineItemID, _.lineItemFlags, _.giftInfo, _.gidCoupon),
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: _,
      });
      let _ = _.getQueryData(_);
      return (
        _.setQueryData(_, (_) => ({
          ...(_ ?? {}),
          line_items:
            _?.line_items?.map((_) =>
              _.line_item_id !== _.lineItemID
                ? _
                : {
                    ..._,
                    flags: _.lineItemFlags || _.flags,
                    gift_info: _.giftInfo || _.gift_info,
                  },
            ) ?? [],
        })),
        {
          previousCart: _,
        }
      );
    },
    onSuccess: ([_, _], _, { previousCart: _ }) => {
      _ == 1 ? (_(_, _, _.cart), _ && _()) : _.setQueryData(_, _);
    },
    onError: (_, _, _) => {
      _?.previousCart && _.setQueryData(_, _.previousCart);
    },
  });
}
var _ = {
  strMaxCartPartResponsiveWidth: "840px",
  CartCard: "VrgkC3o-37o-",
  LineItemsCtn: "-UEubYvNbjs-",
  StoreSalePriceBox: "VqfPgzKbKo8-",
  StoreSaleDiscountedPriceCtn: "NjVV279yLPo-",
  LineItemWrapper: "YXP1N1r8Yuk-",
  LineItemCapsule: "Ibu28lnlXMg-",
  HeaderImg: "qtoywphCEcY-",
  HeaderImgBlurred: "S-RumYYV5RI-",
  LineItemPlaceholder: "_2T5opY0yZ4k-",
  AddRemoveLinks: "vAYxA3qzCNI-",
  RemoveLineItem: "hnK4UxcT4b4-",
  AddLineItem: "jdUT7FhX-Gc-",
  VerifyLineItem: "_1Bv98GGsXO4-",
  LineItemRightCol: "jZ2p41OF6gw-",
  InnerLineItemCtn: "EZOUfdY7phY-",
  LineItemDetailsCtn: "_91QY-wpj0-M-",
  LineItemCol: "F0BHC6-tZX8-",
  LineItemDetailsRow: "_0v52-qZWRZU-",
  Text: "d0qItWvO3cc-",
  LineItemDetailsRowTop: "RIiPxPHZe1c-",
  LineItemSpaceBetween: "jOE56KfWWqY-",
  LineItemTitle: "teMQBj-kyzo-",
  LineItemPricingOptions: "_4-rzwtAgYQE-",
  LineItemDropDown: "-synzJ1Zd2Q-",
  PlatformIcons: "phhNgR2v2Sg-",
  AddLineItemCtn: "PA5STGmwHNM-",
  AddLineItemIcon: "jcz28sPr-jc-",
  PendingLineItem: "PWKZV94Ispo-",
  FlexRow: "H-TCQ8KHyGQ-",
  PriceWidget: "Fay8SiV2bKc-",
  Warning: "P3o2VBbZ-m4-",
  LineItemNoticeAppsCtn: "hIOxCRxNMJ4-",
  LoadingThrobber: "XogolNjZckk-",
  DropDownThin: "z7-qnWICSkI-",
  DropDownOptionsCtnThin: "HS2sVdtSGFk-",
  DropDownOptionItem: "aDMnq8Z6asE-",
  WhiteText: "_6HmnRMrwy-k-",
  ErrorLineItem: "_2WF60OAsaoI-",
  Left: "ufLHW9-dmbs-",
  Error: "XeISZPK9LTA-",
  Muted: "_7XXRjlk2Ftg-",
  GiftForNotice: "_4XNRvhrlaoA-",
  Name: "_8CUOKybGlWw-",
  RemoveButton: "qH7XB3O5uRI-",
  LineItemStoreHover: "NA8MEzGnXNE-",
};
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { text: _, children: _, className: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": "row",
    className: (0, _.default)(_.LineItemDetailsRow, _ && _.Text, _),
    children: _,
  });
}
function _(_) {
  let { placeholder: _, className: _, children: _ } = _;
  return (0, _.jsx)(_, {
    className: (0, _.default)(_.LineItemWrapper, _ && _.LineItemPlaceholder, _),
    children: _,
  });
}
function _() {
  return (0, _.jsx)(_, {
    placeholder: !0,
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)("div", {
    className: _.LoadingThrobber,
    children: (0, _.jsx)(_, {
      size: "medium",
      position: "center",
      msDelayAppear: 250,
    }),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    text: !0,
    children: (0, _.jsx)("div", {
      className: _.Warning,
      children: _,
    }),
  });
}
function _(_) {
  if (_.coupon_applied) return _.coupon_applied.discount_pct;
  let _ = parseInt(_.original_price.amount_in_cents),
    _ = parseInt(_.subtotal.amount_in_cents);
  return Math.min(99, Math.floor(((_ - _) / _) * 100 + 0.5));
}
var _ = _(_(), 1);
function _(_) {
  let { lineItems: _, cartValidation: _ } = _;
  if (!_.length)
    return (0, _.jsx)("div", {
      children: _.Localize("#Cart_Empty"),
    });
  let _ = _?.cart_items
    ? _.cart_items.reduce((_, _) => ((_[_.line_item_id] = _), _), {})
    : {};
  return (0, _.jsx)("div", {
    className: _.LineItemsCtn,
    children:
      _ &&
      _.map((_, _) =>
        _
          ? (0, _.jsx)(
              _,
              {
                fallback: (_) =>
                  (0, _.jsx)(_, {
                    item: _,
                    error: _,
                  }),
                children: (0, _.jsx)(
                  _,
                  {
                    item: _,
                    validatedItem: _[_.line_item_id],
                  },
                  _.line_item_id,
                ),
              },
              _?.line_item_id || _,
            )
          : (0, _.jsx)(_, {}, _),
      ),
  });
}
function _(_) {
  let { item: _, validatedItem: _ } = _,
    _ = _(_);
  if (!_) throw `Unknown line item type (${_.type})`;
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _ ? _(_) : _;
  return (
    _(_),
    _(_),
    _ && (!_.visible || _ === null)
      ? (0, _.jsx)(_, {
          lineItemID: _.line_item_id,
          validatedItem: _,
          storeItem: _,
        })
      : !_ || !_ || !_
        ? (0, _.jsx)(_, {})
        : (0, _.jsx)(_, {
            lineItem: _,
            validatedItem: _,
            storeItem: _,
            displayItem: _,
            purchaseOption: _,
          })
  );
}
function _(_) {
  let { item: _, error: _ } = _,
    _ = _(_.line_item_id);
  return (0, _.jsxs)(_, {
    className: _.ErrorLineItem,
    children: [
      (0, _.jsxs)("div", {
        className: _.Left,
        children: [
          (0, _.jsx)("div", {
            className: _.Error,
            children: _.Localize("#Cart_LineItem_ErrorBoundary"),
          }),
          (0, _.jsx)("div", {
            className: _.Muted,
            children: _.message,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        onActivate: () => _.mutate(),
        className: _.RemoveButton,
        children: _.Localize("#Cart_Remove"),
      }),
    ],
  });
}
function _(_) {
  let _ = _.type;
  switch (_) {
    case _.k_EAccountCartLineItem_Package:
      return {
        packageid: _.packageid,
      };
    case _.k_EAccountCartLineItem_Bundle:
      return {
        bundleid: _.bundleid,
      };
    case _.k_EAccountCartLineItem_Unknown:
      return;
    default:
      _(_, `Unhandled type: ${_}`);
  }
}
function _(_) {
  let {
      storeItem: _,
      displayItem: _,
      lineItem: _,
      purchaseOption: _,
      validatedItem: _,
    } = _,
    _ = _.line_item_id,
    _ = _(_),
    _ = _.isPending || _.isSuccess,
    _ = _.flags?.is_gift ? "gift" : "myself";
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      children: [
        _ && (0, _.jsx)(_, {}),
        (0, _.jsxs)("div", {
          className: (0, _.default)(_.InnerLineItemCtn, _ && _.PendingLineItem),
          children: [
            (0, _.jsx)("div", {
              className: (0, _.default)(_.LineItemColumn, _.LineItemCapsule),
              children: (0, _.jsx)(_, {
                storeItem: _,
                feature: "cart-items",
                noImpressionTracking: !0,
                children: (0, _.jsx)(_, {
                  storeItem: _,
                }),
              }),
            }),
            (0, _.jsxs)("div", {
              className: _.LineItemDetailsCtn,
              children: [
                (0, _.jsx)(_, {
                  className: _.LineItemDetailsRowTop,
                  children: (0, _.jsx)("div", {
                    className: _.LineItemTitle,
                    children: _.name,
                  }),
                }),
                _?.is_coming_soon &&
                  (0, _.jsx)(_, {
                    storeItem: _,
                  }),
                (0, _.jsx)(_, {
                  storeItem: _,
                }),
                (0, _.jsxs)(_, {
                  className: _.LineItemSpaceBetween,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _.default)(_.LineItemCol, _.PlatformIcons),
                      children: (0, _.jsx)(_, {
                        _: _(_),
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
                  initialPurchaseOption: _,
                  fnRemoveLineItem: _.mutate,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { lineItemID: _, validatedItem: _, storeItem: _ } = _,
    _ = _(_),
    _ = _.isPending;
  return (0, _.jsxs)(_, {
    placeholder: !0,
    children: [
      _ && (0, _.jsx)(_, {}),
      (0, _.jsxs)("div", {
        className: (0, _.default)(_.InnerLineItemCtn, _ && _.PendingLineItem),
        children: [
          (0, _.jsx)("div", {
            className: (0, _.default)(_.LineItemColumn, _.LineItemCapsule),
            children: (0, _.jsx)(_, {
              storeItem: _,
              noImpressionTracking: !0,
              children: (0, _.jsx)(_, {
                storeItem: _,
              }),
            }),
          }),
          (0, _.jsxs)("div", {
            className: _.LineItemDetailsCtn,
            children: [
              (0, _.jsx)(_, {
                className: _.LineItemDetailsRowTop,
                children: (0, _.jsx)("div", {
                  className: _.LineItemTitle,
                  children: _?.name,
                }),
              }),
              (0, _.jsx)(_, {
                validatedItem: _,
              }),
              (0, _.jsx)(_, {
                className: _.LineItemSpaceBetween,
                children: (0, _.jsx)(_, {
                  onActivate: () => _.mutate(),
                  className: _.RemoveLineItem,
                  children: _.Localize("#Cart_Remove"),
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
  let { storeItem: _ } = _,
    { data: _ } = _(_(_)),
    _ = `${_.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
  return (
    _?.header
      ? (_ =
          _.STORE_ITEM_BASE_URL +
          _.asset_url_format.replace("${FILENAME}", _.header))
      : _?.small_capsule &&
        (_ =
          _.STORE_ITEM_BASE_URL +
          _.asset_url_format.replace("${FILENAME}", _.small_capsule)),
    (0, _.jsx)("img", {
      alt: _.name,
      className: _.HeaderImg,
      src: _,
    })
  );
}
function _(_) {
  return null;
}
function _(_) {
  let { storeItem: _ } = _,
    { data: _ } = _(_(_)),
    _ = _(_);
  if (!_) return null;
  let _ = _.Localize("#Cart_ComingSoon", _);
  return (
    ["text_tba", "text_comingsoon"].includes(_.coming_soon_display) && (_ = _),
    (0, _.jsx)(_, {
      children: _,
    })
  );
}
function _(_) {
  return null;
}
function _(_) {
  let { purchaseOption: _, validatedItem: _ } = _,
    _ = _?.formatted_original_price,
    _ = _?.formatted_final_price,
    _ = _?.discount_pct;
  return (
    _ &&
      _.original_price &&
      _.subtotal &&
      ((_ = _.original_price.formatted_amount),
      (_ = _.subtotal.formatted_amount),
      (_ = _(_))),
    (0, _.jsx)("div", {
      className: _.LineItemRightCol,
      children: (0, _.jsx)(_, {
        transparentBackground: !0,
        purchaseOption: {
          ..._,
          formatted_original_price: _,
          formatted_final_price: _,
          discount_pct: _,
        },
      }),
    })
  );
}
function _(_) {
  let {
      lineItem: _,
      storeItem: _,
      purchaseOption: _,
      validatedItem: _,
      initialPurchaseOption: _,
      fnRemoveLineItem: _,
    } = _,
    _ = !_?.restrict_add_additional_to_cart,
    _ = _(_.packageid, _.bundleid, _.user_can_purchase_as_gift);
  return (0, _.jsxs)(_, {
    className: _.LineItemSpaceBetween,
    children: [
      (0, _.jsx)("div", {
        className: _.LineItemCol,
        children: (0, _.jsx)(_, {
          lineItem: _,
          storeItem: _,
          initialValue: _,
          purchaseOption: _,
        }),
      }),
      (0, _.jsxs)("div", {
        className: (0, _.default)(_.LineItemRightCol, _.AddRemoveLinks),
        children: [
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  onActivate: () => !_.isPending && _.mutate(),
                  className: _.AddLineItem,
                  title: _.Localize("#Cart_LineItem_Add_Tooltip"),
                  children: _.Localize("#Cart_Add"),
                }),
                "|",
              ],
            }),
          (0, _.jsx)(_, {
            onActivate: () => _(),
            className: _.RemoveLineItem,
            children: _.Localize("#Cart_Remove"),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return _.user_can_purchase_as_gift;
}
function _(_) {
  return !_.is_commercial_license && !_.requires_shipping;
}
function _(_) {
  let { lineItem: _, storeItem: _, initialValue: _, purchaseOption: _ } = _,
    [_, _] = _.useState(_),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = !_(_) || _,
    _ = !_(_),
    _ = [
      {
        data: "myself",
        label: _.Localize("#Cart_LineItemOptions_Myself"),
      },
      !_ && {
        data: "private",
        label: _.Localize("#Cart_LineItemOptions_Privately"),
      },
      !_ && {
        data: "gift",
        label: _.Localize("#Cart_LineItemOptions_Gift"),
      },
    ].filter((_) => !!_);
  return _.length === 1
    ? null
    : (0, _.jsx)(_, {
        onSelectionChange: (_) => {
          if (_ === _.data) return;
          let _ = (_) =>
              _.mutate({
                rgAppIDs:
                  (_.item_type === _.k_EStoreItemType_App
                    ? [_.appid]
                    : _.included_appids) ?? [],
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
            _.data === "private" ? _(!0) : _.data === "gift" && _(!0),
            _(_.data);
        },
        selectedValue: _.find((_) => _.data === _),
        options: _,
        getOptionLabel: (_) => _.label,
        size: "1",
      });
}
var _ = "MAkyj55Q6Lk-";
var _ = "-roEJ2cHLRY-";
var _ = _(_(), 1);
function _(_) {
  let { closeCart: _, lineItemIDs: _ } = _,
    _ = _(),
    { data: _ } = _(),
    { data: _ } = _(),
    _ = _.useMemo(
      () =>
        _
          ? _
            ? _.line_items.filter((_) => _.includes(_.line_item_id))
            : _.line_items
          : null,
      [_, _],
    );
  return (
    _.useEffect(() => {
      _ !== null && _?.length == 0 && _();
    }, [_, _]),
    _ == null || !_
      ? null
      : (0, _.jsx)(_, {
          onClose: _,
          navID: "CartModal",
          strTitle: _.Localize("#Cart_AddedToYourCart"),
          children: (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)(_, {
                lineItems: _,
                cartValidation: _,
              }),
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize("#Cart_ContinueShopping"),
                  }),
                  (0, _.jsx)(_, {
                    autoFocus: !0,
                    href: `${_.STORE_BASE_URL}cart/`,
                    children: _.Localize(
                      "#Cart_ViewMyCart",
                      _.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        })
  );
}
export { _ as default };
