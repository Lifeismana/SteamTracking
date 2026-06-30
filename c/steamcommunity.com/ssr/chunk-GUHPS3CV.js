function _(_) {
  return (
    !!_.bSearchDescriptions ||
    (!!_.accessoryFilters && Object.keys(_.accessoryFilters).length > 0)
  );
}
function _(_, _) {
  let _ = {};
  for (let _ of _) {
    let _ = _.category,
      _ = _.internal_name;
    !_ || !_ || (_[_] || (_[_] = []), _[_].push(_));
  }
  return _;
}
function _(_, _, _ = !0) {
  return _(_(_, _, _));
}
function _(_, _, _ = !0) {
  return {
    queryKey: ["market_search", _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(_);
      if (_ === null) throw new Error("Failed to load next page");
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_) return null;
      let _ = _ + (_.results || []).length;
      return (_.total_count && _ >= _.total_count) || _.results?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _, _ = !0) {
  return _(_(_, _, _));
}
function _(_, _, _ = !0) {
  return {
    queryKey: ["market_search_descriptions", _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(_);
      if (_ === null) throw new Error("Failed to load next page");
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  return (
    _.appid && _.set("appid", _.appid.toString()),
    _.strQuery && _.set("q", _.strQuery),
    _.strQuery && _.bSearchDescriptions && _.set("descriptions", "1"),
    typeof _.count == "number" &&
      _.count >= 0 &&
      _.set("count", _.count.toString()),
    typeof _.sort == "number" && _.set("sort", _.sort.toString()),
    typeof _.direction == "number" && _.set("dir", _.direction.toString()),
    typeof _.start == "number" && _.set("start", _.start.toString()),
    _.searchDescriptionSort &&
      (_.set("descsort", _.searchDescriptionSort.field.toString()),
      typeof _.searchDescriptionSort.direction == "number" &&
        _.set("descdir", _.searchDescriptionSort.direction.toString()),
      typeof _.searchDescriptionSort.assetpropertyid == "number" &&
        _.set(
          "descpropid",
          _.searchDescriptionSort.assetpropertyid.toString(),
        )),
    _
  );
}
function _(_, _) {
  let _ = new URLSearchParams();
  if (_.price) {
    let _ = _.price.unMin ?? 0;
    _ > 0 &&
      (_.set("price_min", _.toString()),
      _.set("price_currency", _.price.eCurrency.toString()));
    let _ = _.price.unMax ?? 0;
    _ > _ &&
      _ < _ &&
      (_.set("price_max", _.toString()),
      _.set("price_currency", _.price.eCurrency.toString()));
  }
  if (_.accessoryFilters)
    for (let [_, _] of Object.entries(_.accessoryFilters))
      for (let _ of _) _.append(_, _);
  if (_.filters)
    for (let [_, _] of Object.entries(_.filters))
      for (let _ of _) _.append(`category_${_}`, _);
  return _;
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: ["market_item_search", _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(_);
      if (_ === null) throw new Error("Failed to load next page");
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  if (
    (_.appid && _.set("appid", _.appid.toString()),
    _.strQuery && _.set("q", _.strQuery),
    _.sort &&
      (_.set("sort", _.sort.field.toString()),
      _.sort.direction !== void 0 && _.set("dir", _.sort.direction.toString()),
      _.sort.field === _.k_EMarketListingSortField_AssetProperty &&
        (_(
          typeof _.sort.assetpropertyid == "number",
          "Property sort must include property id",
        ),
        _.set("propertyid", _.sort.assetpropertyid.toString()))),
    _.propertyFilters)
  )
    for (let _ of Object.values(_.propertyFilters || {}))
      _.append("assetproperty", _.fromObject(_).serializeBase64String());
  return _;
}
function _(_, _, _ = !0) {
  return _(_(_, _, _));
}
function _(_, _, _ = !0) {
  return {
    queryKey: ["market", "orderbook", _, _],
    queryFn: async () => {
      let _ = await _("/market/orderbook", "Load", _, _);
      if (!_.success || !_.data) throw new Error("Bad book response");
      return _.data;
    },
    refetchInterval: _ ? 5e3 : void 0,
    enabled: !!_,
  };
}
function _(_, _, _, _ = {}) {
  return _(_(_, _, _, _));
}
function _(_, _, _, _ = {}) {
  return {
    queryKey: ["market", "description", _, _],
    queryFn: () => _(_, _),
    enabled: !!_,
    ..._,
  };
}
function _(_, _, _, _ = {}) {
  return _(_(_, _, _, _));
}
function _(_, _, _, _ = {}) {
  return {
    queryKey: ["market", "pricehistory", _, _],
    queryFn: () => _(_, _),
    ..._,
  };
}
var _ = _(_(), 1);
var _ = "EenTdIivSzk-";
var _ = "dfEHdQNpbms-";
var _ = "E7DmGyr2sLM-";
var _ = "KVKrKl4epl8-";
var _ = "eg39j-No1z4-";
var _ = "egHHd5lyfx0-";
var _ = "-MIUHAQqIyA-";
var _ = "mvnvx0OEpHc-";
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = "U6rVW4Xk3lU-";
var _ = "J-FphXHudp4-";
var _ = _(_(), 1),
  _ = {
    BillingInfoSection: _,
    Heading: _,
    Loading: _,
    ConfirmationPoller: _,
    FatalError: _,
    NonFatalError: _,
    SSAAgreement: _,
    EUSSAAgreement: _,
  },
  _ = Object.assign(_, _);
function _(_) {
  let { onClose: _, children: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    onClose: _,
    className: _,
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsx)(_, {
          size: "5",
          onClick: _,
        }),
      }),
      (0, _.jsx)("form", {
        onSubmit: (_) => _.preventDefault(),
        children: (0, _.jsx)(_, {
          direction: "column",
          gap: "4",
          padding: {
            initial: "3",
            _: "5",
          },
          ..._,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { walletBalance: _, accountName: _, hasFunds: _, ..._ } = _;
  return (0, _.jsx)(_, {
    background: "dull-5",
    padding: {
      initial: "3",
      _: "5",
    },
    children: (0, _.jsxs)(_, {
      columns: {
        initial: "1fr",
        _: "max-content 1fr",
      },
      gap: "2",
      children: [
        (0, _.jsx)(_, {
          children: _.Localize("#PurchaseDialog_PaymentMethod_Label"),
        }),
        (0, _.jsxs)(_, {
          size: "4",
          color: "green-8",
          children: [
            _.Localize("#PurchaseDialog_PaymentMethod_Wallet"),
            _ ? ` (${_})` : "",
          ],
        }),
        (0, _.jsx)(_, {
          children: _.Localize("#PurchaseDialog_SteamAccount_Label"),
        }),
        (0, _.jsx)(_, {
          size: "4",
          contrast: "title",
          children: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            ..._,
          }),
      ],
    }),
  });
}
function _(_) {
  let { billingStates: _, billingCountry: _, ..._ } = _,
    _ = (0, _.useMemo)(() => Object.keys(_).length > 0, [_]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _.Localize("#PurchaseDialog_BillingInfo_Label"),
      }),
      (0, _.jsxs)(_, {
        columns: "1fr 1fr",
        gap: "2",
        children: [
          (0, _.jsx)(_, {
            property: "firstName",
            label: _.Localize("#PurchaseDialog_BillingInfo_FirstName"),
            ..._,
            maxLength: 100,
          }),
          (0, _.jsx)(_, {
            property: "lastName",
            label: _.Localize("#PurchaseDialog_BillingInfo_LastName"),
            ..._,
            maxLength: 100,
          }),
          (0, _.jsx)(_, {
            property: "address",
            label: _.Localize("#PurchaseDialog_BillingInfo_Address"),
            ..._,
            maxLength: 128,
            wide: !0,
          }),
          (0, _.jsx)(_, {
            property: "addressTwo",
            label: _.Localize("#PurchaseDialog_BillingInfo_AddressLine2"),
            ..._,
            maxLength: 128,
            wide: !0,
          }),
          (0, _.jsx)(_, {
            property: "city",
            label: _.Localize("#PurchaseDialog_BillingInfo_City"),
            ..._,
            maxLength: 50,
            wide: !_,
          }),
          _ &&
            (0, _.jsx)(_, {
              ..._,
              billingStates: _,
            }),
          (0, _.jsx)(_, {
            property: "postalCode",
            label: _.Localize("#PurchaseDialog_BillingInfo_ZipPostal"),
            ..._,
            maxLength: 16,
          }),
          (0, _.jsx)(_, {
            label: _.Localize("#PurchaseDialog_BillingInfo_Country"),
            children: (0, _.jsx)(_, {
              size: "3",
              contrast: "title",
              _: "div",
              marginTop: "2",
              children: _,
            }),
          }),
          (0, _.jsx)(_, {
            gridColumn: "span 2",
            children: (0, _.jsx)(_, {
              marginTop: "2",
              checked: !!_.state.bSaveAddress,
              onChange: (_) =>
                _.onChange({
                  ..._.state,
                  bSaveAddress: _,
                }),
              children: (0, _.jsx)(_, {
                size: "3",
                children: _.Localize("#PurhcaseDialog_SaveMyAddress"),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { state: _, onChange: _, property: _, maxLength: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      variant: "default",
      value: _[_] || "",
      onTextChange: (_) =>
        _({
          ..._,
          [_]: _,
        }),
      maxLength: _,
    }),
  });
}
function _(_) {
  let { state: _, onChange: _, billingStates: _ } = _,
    _ = _.state || null,
    { rgStates: _, stateCodeToName: _ } = (0, _.useMemo)(() => {
      let _ = Object.values(_),
        _ = _.map(({ state_code: _ }) => _),
        _ = _.reduce((_, _) => ((_[_.state_code] = _.state_name), _), {});
      return {
        rgStates: _,
        stateCodeToName: _,
      };
    }, [_]),
    _ = (_) =>
      _({
        ..._,
        state: _,
      });
  return (0, _.jsx)(_, {
    label: _.Localize("#PurchaseDialog_BillingInfo_StateProvince"),
    children: (0, _.jsx)(_, {
      options: _,
      selectedValue: _,
      onSelectionChange: _,
      getOptionLabel: (_) => _[_],
    }),
  });
}
function _(_) {
  let { label: _, children: _, wide: _ } = _;
  return (0, _.jsxs)(_, {
    gridColumn: {
      initial: "span 2",
      _: _ ? "span 2" : void 0,
    },
    children: [
      (0, _.jsx)(_, {
        size: "2",
        contrast: "description",
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: "4",
    contrast: {
      initial: "subtitle",
      _: "description",
    },
    weight: {
      initial: "medium",
      _: void 0,
    },
    children: _.children,
  });
}
function _() {
  return (0, _.jsx)(_, {
    align: "center",
    justify: "center",
    marginBottom: "6",
    marginTop: "3",
    minHeight: "300px",
    children: (0, _.jsx)(_, {
      size: "5",
    }),
  });
}
var _ = 1,
  _ = 2;
function _() {
  return _({
    queryKey: ["market", "userbillinginfo"],
    queryFn: async () =>
      (
        await fetch("/market/userbillinginfo", {
          credentials: "include",
        })
      ).json(),
  });
}
function _(_ = "buy") {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      _(_.logged_in && new URLSearchParams(location.search).get(_) === "1");
    }, [_]),
    (0, _.useEffect)(
      () => () => {
        let _ = new URLSearchParams(location.search);
        _.get(_) && (_.delete(_), _(`?${_.toString()}`));
      },
      [_],
    ),
    [
      _,
      (_) => {
        _(_);
        let _ = new URLSearchParams(location.search);
        _ ? _.set(_, "1") : _.delete(_), _(`?${_.toString()}`);
      },
    ]
  );
}
function _(_) {
  let { confirmation: _, onRetry: _, serverInfo: _ } = _,
    _ = (0, _.useRef)(_);
  (_.current = _),
    (0, _.useEffect)(() => {
      let _ = setTimeout(() => _.current(), 1500);
      return () => clearTimeout(_);
    }, [_]);
  let _ = _(_.confirmation_type);
  return (0, _.jsxs)(_, {
    background: "dull-5",
    padding: {
      initial: "3",
      _: "5",
    },
    direction: "column",
    gap: "2",
    align: "center",
    children: [
      (0, _.jsx)(_, {
        align: "center",
        children: _.Localize("#PurchaseDialog_Confirmation_Title"),
      }),
      (0, _.jsx)(_, {
        contrast: "subtitle",
        align: "center",
        children: _.body,
      }),
      (0, _.jsx)(_, {
        size: "4",
      }),
      (0, _.jsx)(_, {
        size: "2",
        align: "center",
        children: _.description,
      }),
    ],
  });
}
function _(_) {
  switch (_) {
    case _:
      return {
        body: _.Localize("#PurchaseDialog_Confirmation_Body_Email"),
        description: _.Localize(
          "#PurchaseDialog_Confirmation_Description_Email",
        ),
      };
    case _:
      return {
        body: _.Localize("#PurchaseDialog_Confirmation_Body_Mobile"),
        description: _.Localize(
          "#PurchaseDialog_Confirmation_Description_Mobile",
        ),
      };
    default:
      return {
        body: _.Localize("#PurchaseDialog_Confirmation_Body_Unknown"),
        description: _.Localize(
          "#PurchaseDialog_Confirmation_Description_Unknown",
        ),
      };
  }
}
function _(_, _) {
  let _ = [],
    _ = [];
  if (
    ((_.firstName?.length || 0) < 1 &&
      _.push(_.Localize("#PurchaseDialog_BillingInfo_FirstName")),
    (_.lastName?.length || 0) < 1 &&
      _.push(_.Localize("#PurchaseDialog_BillingInfo_LastName")),
    (_.address?.length || 0) < 1 &&
      _.push(_.Localize("#PurchaseDialog_BillingInfo_Address")),
    (_.city?.length || 0) < 1 &&
      _.push(_.Localize("#PurchaseDialog_BillingInfo_City")),
    (_.postalCode?.length || 0) < 1 &&
      _.push(_.Localize("#PurchaseDialog_BillingInfo_ZipPostal")),
    Object.keys(_.billing_states).length > 0)
  ) {
    if ((_.state?.length || 0) < 1)
      _.push(_.Localize("#PurchaseDialog_BillingInfo_StateProvince"));
    else if (_.country_code === "US" && _.city?.length) {
      let _ = ["AE", "AP", "AA"].includes(_.state || ""),
        _ = ["APO", "FPO", "DPO"].includes(_.city || "");
      _ &&
        !_ &&
        _.push(_.Localize("#PurchaseDialog_Error_InvalidMilitaryCity"));
    }
  }
  return (
    _.country_code === "US" &&
      (_.postalCode?.length || 0) < 5 &&
      _.push(_.Localize("#PurchaseDialog_Error_InvalidPostal")),
    _.length
      ? [_.Localize("#PurchaseDialog_Error_MissingRequired"), ..._].join(`
	`)
      : _.length
        ? _.join(`
`)
        : null
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    background: "dull-5",
    padding: {
      initial: "3",
      _: "5",
    },
    children: (0, _.jsx)(_, {
      align: "center",
      size: "4",
      color: "red-9",
      _: "div",
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    align: "center",
    size: "4",
    color: "red-9",
    _: "div",
    whiteSpace: "pre-wrap",
    children: _.children,
  });
}
function _(_) {
  let { lastUpdate: _, agreed: _, onAgreeChange: _ } = _,
    _ = new Date(_ * 1e3).toDateString(),
    _ = `${_.STORE_BASE_URL}subscriber_agreement`;
  return (0, _.jsx)(_, {
    checked: _,
    onChange: _,
    children: (0, _.jsx)(_, {
      size: "3",
      children: _.LocalizeReact(
        "#PurchaseDialog_SSA_Link",
        (0, _.jsx)(_, {
          href: _,
          target: "_blank",
          children: _.Localize("#PurchaseDialog_SSA_Link_Title"),
        }),
        _,
      ),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: "3",
    children: _.Localize("#PurchaseDialog_EU_SSA"),
  });
}
function _(_, _) {
  return !!_ && parseInt(_.wallet_balance) >= _;
}
var _ = _(_(), 1);
function _(_) {
  switch (_) {
    case -1:
      return _.Localize(
        "#Economy_Market_Purchase_TradableRestriction_Permanent",
      );
    case 1:
      return _.Localize("#Economy_Market_Purchase_TradableRestriction_1Day");
    case 7:
      return _.Localize("#Economy_Market_Purchase_TradableRestriction_7Days");
    default:
      return _.Localize(
        "#Economy_Market_Purchase_TradableRestriction_NDays",
        _,
      );
  }
}
function _(_) {
  switch (_) {
    case 0:
      return _.Localize("#Economy_Market_Purchase_MarketableRestriction_None");
    case 1:
      return _.Localize("#Economy_Market_Purchase_MarketableRestriction_1Day");
    case 7:
      return _.Localize("#Economy_Market_Purchase_MarketableRestriction_7Days");
    default:
      return _.Localize(
        "#Economy_Market_Purchase_MarketableRestriction_NDays",
        _,
      );
  }
}
function _(_) {
  let { trade: _, market: _ } = _,
    _ = [];
  return (
    _ !== void 0 && _.push(_(_)),
    _ !== void 0 && _.push(_(_)),
    _.length === 0
      ? null
      : (0, _.jsxs)(_, {
          size: "3",
          _: "div",
          contrast: "body",
          children: [
            _.Localize("#Economy_Market_Purchase_Restrictions"),
            (0, _.jsx)("ul", {
              style: {
                margin: 0,
              },
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
        })
  );
}
function _(_) {
  let { market_tradable_restriction: _, market_marketable_restriction: _ } = _;
  return {
    bRestricted: _ !== void 0 || _ !== void 0,
    trade: _,
    market: _,
  };
}
var _ = _(_(), 1);
function _(_) {
  let { onClose: _, listing: _ } = _,
    _ = _(),
    _ = !!_.data;
  return (0, _.jsxs)(_, {
    onClose: _,
    children: [
      (0, _.jsx)(_.Heading, {
        children: _.Localize("#PurchaseDialog_Header"),
      }),
      !_ && (0, _.jsx)(_.Loading, {}),
      _ &&
        (0, _.jsx)(_, {
          serverInfo: _.data,
          listing: _,
        }),
    ],
  });
}
function _(_) {
  let { serverInfo: _, listing: _ } = _,
    [_, _] = (0, _.useState)({});
  (0, _.useEffect)(() => {
    let {
      billing_address: {
        firstname: _,
        lastname: _,
        address1: _,
        address2: _,
        city: _,
        state: _,
        postcode: _,
      } = {},
    } = _;
    _({
      address: _,
      addressTwo: _,
      firstName: _,
      lastName: _,
      city: _,
      state: _,
      postalCode: _,
      bSaveAddress: !0,
    });
  }, [_]);
  let _ = _.wallet_info
      ? _(parseInt(_.wallet_info.wallet_balance), _.wallet_info.wallet_currency)
      : "",
    _ = _(_, _.tax_info),
    { mutation: _, confirmation: _ } = _(_.listingid, _, _, _),
    _ = _.isIdle || (_.isError && _.error.bFatal === !1),
    _ = _.require_billing_info && _,
    { bRestricted: _, ..._ } = _(_.description),
    _;
  return (
    _.asset?.amount === 0
      ? (_ = {
          bFatal: !0,
          message: _.Localize("#Listing_NotAvailable_Long"),
        })
      : _.error?.bFatal === !0 && (_ = _.error),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          listing: _,
        }),
        !_ &&
          (0, _.jsx)(_, {
            listing: _,
            serverInfo: _,
            pricing: _,
          }),
        !_ &&
          _ &&
          (0, _.jsx)(_, {
            alignSelf: "end",
            paddingX: "2",
            children: (0, _.jsx)(_, {
              ..._,
            }),
          }),
        _ &&
          (0, _.jsx)(_.FatalError, {
            children:
              _.message || _.Localize("#PurchaseDialog_Error_ServerGeneric"),
          }),
        !_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              _.isSuccess && !_ && (0, _.jsx)(_, {}),
              _ &&
                (0, _.jsx)(_.ConfirmationPoller, {
                  confirmation: _,
                  onRetry: _.mutate,
                  serverInfo: _,
                }),
              _ &&
                (0, _.jsx)(_.BillingInfoSection, {
                  state: _,
                  onChange: _,
                  accountName: _.account_name,
                  walletBalance: _,
                  billingCountry: _.localized_country,
                  billingStates: _.billing_states,
                  hasFunds: _(_.wallet_info, _.unTotal),
                }),
              !_.isSuccess &&
                !_ &&
                (0, _.jsx)(_, {
                  hideSSA: !_,
                  serverInfo: _,
                  listing: _,
                  pricing: _,
                  onPurchase: _.mutate,
                  disabled: !_,
                }),
              _.error?.bFatal === !1 &&
                (0, _.jsx)(_.NonFatalError, {
                  children:
                    _.error.message ||
                    _.Localize("#PurchaseDialog_Error_ServerGeneric"),
                }),
            ],
          }),
      ],
    })
  );
}
function _(_) {
  let _ = new URLSearchParams(location.search);
  _.delete("detail"), _.delete("buy");
  let _ = `?${_.toString()}`;
  return (0, _.jsxs)(_, {
    direction: "column",
    gap: "2",
    children: [
      (0, _.jsx)(_, {
        background: "dull-5",
        padding: "5",
        children: (0, _.jsx)(_, {
          align: "center",
          size: "4",
          _: "div",
          contrast: "title",
          children: _.Localize("#PurchaseDialog_Purchase_Successful"),
        }),
      }),
      (0, _.jsxs)(_, {
        marginTop: "2",
        justify: "end",
        gap: "2",
        children: [
          (0, _.jsx)(_, {
            color: "dull",
            href: _,
            children: _.Localize("#PurchaseDialog_Close"),
          }),
          (0, _.jsx)(_, {
            color: "dull",
            href: `${_.COMMUNITY_BASE_URL}my/inventory`,
            children: _.Localize("#PurchaseDialog_ViewInventory"),
          }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  let [_, _] = (0, _.useState)(null);
  return {
    mutation: _({
      mutationFn: async () => {
        if (_.require_billing_info) {
          let _ = _(_, _);
          if (_)
            throw {
              bFatal: !1,
              message: _,
            };
        }
        let _ = {
            sessionid: _(),
            currency: _.wallet_info ? _.wallet_info.wallet_currency : "0",
            subtotal: _.unSubtotal,
            fee: _.unFeeAmount,
            total: _.unTotal,
            tradefee_tax: _.unTaxAmount,
            quantity: 1,
            first_name: _.firstName ?? "",
            last_name: _.lastName ?? "",
            billing_address: _.address ?? "",
            billing_address_two: _.addressTwo ?? "",
            billing_country: _.country_code ?? "",
            billing_city: _.city ?? "",
            billing_state: _.state ?? "",
            billing_postal_code: _.postalCode ?? "",
            confirmation: _ ? _._ : "0",
            save_my_address: _.bSaveAddress ? "1" : "0",
          },
          _ = new FormData();
        for (let [_, _] of Object.entries(_))
          _.set(_, typeof _ == "string" ? _ : _.toString());
        let _ = await fetch(`/market/buylisting/${_}`, {
          method: "POST",
          credentials: "include",
          body: _,
        });
        try {
          let _ = await _.json();
          if (_._) return _ && _(null), _;
          if (_?.need_confirmation)
            _({
              _: _.confirmation.confirmation_id,
              cAttempts: _ ? _.cAttempts + 1 : 0,
            });
          else
            throw _
              ? (_(null),
                {
                  bFatal: !0,
                  message: _.Localize("#PurchaseDialog_Error_NoConfirmation"),
                })
              : _?.message
                ? {
                    bFatal: !0,
                    message: _.message,
                  }
                : {
                    bFatal: !0,
                    message: _.Localize("#PurchaseDialog_Error_ServerGeneric"),
                  };
          return _;
        } catch (_) {
          throw _?.bFatal
            ? _
            : {
                bFatal: !0,
                message: _.Localize("#PurchaseDialog_Error_ServerGeneric"),
              };
        }
      },
    }),
    confirmation: _,
  };
}
function _(_) {
  let { listing: _ } = _,
    _ = _(_),
    _ = (_.asset?.amount || 0) > 0,
    _ = _() === "initial" ? "3" : "4";
  return (0, _.jsxs)(_, {
    gridColumn: "span 2",
    background: "dull-5",
    padding: "2",
    align: "center",
    gap: "2",
    style: {
      justifySelf: "stretch",
    },
    children: [
      (0, _.jsx)(_, {
        background: "dull-6",
        padding: {
          initial: "1",
          _: "2",
        },
        children: (0, _.jsx)(_, {
          width: {
            initial: "48px",
            _: "64px",
          },
          height: {
            initial: "48px",
            _: "64px",
          },
          objectFit: "contain",
          src: _,
          alt: "",
        }),
      }),
      (0, _.jsx)(_, {
        flexGrow: "1",
        minWidth: "0",
        children: (0, _.jsx)(_, {
          contrast: "title",
          size: _,
          lineClamp: 3,
          children: _.description.market_name,
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          size: _,
          align: "end",
          contrast: "subtitle",
          marginRight: "2",
          children: _.strSubtotal,
        }),
    ],
  });
}
function _(_) {
  let {
      listing: _,
      serverInfo: _,
      pricing: {
        strSubtotal: _,
        strPublisherFee: _,
        strSteamFee: _,
        strTotal: _,
        strTaxAmount: _,
      },
    } = _,
    { data: _ } = _({
      appid: _.description.appid,
    }),
    _ = _?.name,
    _ = (_.publisherFeePct * 100).toFixed(1),
    _ = (
      (_.wallet_info ? _.wallet_info.wallet_fee_percent : 0.05) * 100
    ).toFixed(1);
  return (0, _.jsxs)(_, {
    columns: "2fr 1fr",
    gap: "2",
    margin: "4",
    justifyContent: "end",
    justifyItems: "end",
    children: [
      (0, _.jsx)(_, {
        children: _.Localize("#PurchaseDialog_Subtotal_Label"),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize("#PurchaseDialog_PublisherFee_Label_Generic", _),
        }),
      _ &&
        (0, _.jsx)(_, {
          children: _.Localize("#PurchaseDialog_PublisherFee_Label", _, _),
        }),
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(_, {
        children: _.Localize("#PurchaseDialog_SteamFee_Label", _),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(
                "#PurchaseDialog_LocalTax_Label",
                _.billing_address?.state ?? "",
              ),
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
          ],
        }),
      (0, _.jsx)(_, {
        gridColumn: "span 2",
        width: "100%",
        children: (0, _.jsx)(_, {
          size: "4",
          color: "dull-8",
        }),
      }),
      (0, _.jsx)(_, {
        children: _.Localize("#PurchaseDialog_Total_Label"),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: "2",
    align: "end",
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: "2",
    contrast: "title",
    children: _.children,
  });
}
function _(_, _) {
  if (_.unFeePerUnit) {
    let _ = _.unPricePerUnit,
      _ = _.unFeePerUnit,
      _ = 0;
    _ > 2 &&
      _?.tradefee_addtax &&
      _?.tradefee_taxrate > 0 &&
      (_ = Math.floor((_ * _.tradefee_taxrate) / 100 + 0.5));
    let _ = _ + _ + _,
      _ = _.unPublisherFeePerUnit,
      _ = _.unSteamFeePerUnit;
    return {
      unSubtotal: _,
      unFeeAmount: _,
      unTaxAmount: _,
      unTotal: _,
      strSubtotal: _(_, _.eCurrency),
      strPublisherFee: _ ? _(_, _.eCurrency) : void 0,
      strSteamFee: _ ? _(_, _.eCurrency) : void 0,
      strTaxAmount: _ ? _(_, _.eCurrency) : void 0,
      strTotal: _(_, _.eCurrency),
    };
  }
  let _ = _(_.unPricePerUnit, _.eCurrency);
  return {
    strSubtotal: _,
    strTotal: _,
    unTotal: _.unPricePerUnit,
    unSubtotal: _.unPricePerUnit,
    unFeeAmount: 0,
    unTaxAmount: 0,
  };
}
function _(_) {
  let {
      onPurchase: _,
      listing: _,
      disabled: _,
      hideSSA: _,
      serverInfo: {
        wallet_info: _,
        ssa: { last_update: _, eu_ssa: _ },
      },
      pricing: { unTotal: _ },
    } = _,
    _ = _(_, _),
    _ = "";
  if (!_) {
    let _ = new URL(location.href);
    _.searchParams.set("detail", _.listingid), _.searchParams.set("buy", "1");
    let _ = _.toString();
    _ = `${_.STORE_BASE_URL}steamaccount/addfunds?marketlisting=${_.listingid}&returnurl=${encodeURIComponent(_)}`;
  }
  let _ = () => {
      _ && _();
    },
    [_, _] = (0, _.useState)(!1),
    _ = {
      variant: "vibrant",
      color: "green",
      width: {
        initial: "100%",
        _: void 0,
      },
    };
  return (0, _.jsxs)(_, {
    columns: {
      initial: "1fr",
      _: "1fr max-content",
    },
    gap: {
      initial: "2",
      _: void 0,
    },
    alignContent: "end",
    justifyContent: "end",
    children: [
      (0, _.jsxs)(_, {
        direction: "column",
        gap: "2",
        children: [
          _ &&
            !_ &&
            (0, _.jsx)(_.SSAAgreement, {
              lastUpdate: _,
              agreed: _,
              onAgreeChange: _,
            }),
          _ && !_ && _ && (0, _.jsx)(_.EUSSAAgreement, {}),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          type: "submit",
          ..._,
          disabled: !_ || _,
          onClick: _,
          children: _.Localize("#PurchaseDialog_Action_Purchase"),
        }),
      !_ &&
        (0, _.jsx)(_, {
          ..._,
          href: _,
          disabled: _,
          children: _.Localize("#PurchaseDialog_Action_AddFunds"),
        }),
    ],
  });
}
var _ = _(_(), 1);
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    justify: "center",
    align: "center",
    radius: "sm",
    background: "yellow-6",
    border: "2px solid var(--color-yellow-8)",
    padding: "3",
    ..._,
    children: (0, _.jsx)(_, {
      size: "4",
      align: "center",
      contrast: "title",
      children: _.children,
    }),
  });
}
var _ = _(_(), 1);
var _ = "Exterior",
  _ = "WearCategoryNA",
  _ = "Quality";
var _ = ["normal", "strange", "tournament"],
  _ = [
    "WearCategory0",
    "WearCategory1",
    "WearCategory2",
    "WearCategory3",
    "WearCategory4",
  ];
var _ = _.reduce(
    (_, _, _) => ({
      ..._,
      [_]: _,
    }),
    {},
  ),
  _ = _.reduce(
    (_, _, _) => ({
      ..._,
      [_]: _,
    }),
    {},
  );
function _(_) {
  return _ ? _(_) : !1;
}
function _(_) {
  return _(_.appid)
    ? !_.commodity && !!(_.tags || []).find((_) => _.category === _)
    : !1;
}
function _(_) {
  let _ = {};
  for (let _ of _) {
    let _ = {
      bucket: _,
      rgTypes: [],
      wear: null,
    };
    for (let [_, _] of _.filters || [])
      _ === _ ? _.rgTypes.push(_) : _ === _ && (_.wear = _);
    _.wear || (_.wear = _);
    for (let _ of _.rgTypes) _[_] || (_[_] = {}), (_[_][_.wear] = _);
  }
  return _;
}
function _(_) {
  if (!_.length) return null;
  let _ = _[0];
  for (let _ = 1; _ < _.length; _++) _(_, _[_]) > 0 && (_ = _[_]);
  return _;
}
function _(_, _) {
  if (!_.filters && !_.filters) return 0;
  if (_.filters && !_.filters) return -1;
  if (_.filters && !_.filters) return 1;
  let _ = (_) => {
      let _ = _.find(([_]) => _ === _),
        _ = _.find(([_]) => _ === _);
      return {
        wear: _ ? _[1] : "",
        type: _ ? _[1] : "",
      };
    },
    _ = _(_.filters),
    _ = _(_.filters),
    _ = (_[_.type] ?? 1 / 0) - (_[_.type] ?? 1 / 0);
  return _ !== 0 ? _ : (_[_.wear] ?? 1 / 0) - (_[_.wear] ?? 1 / 0);
}
var _ = {
  WearCategory0: "#4A7D12",
  WearCategory1: "#82B461",
  WearCategory2: "#DCB259",
  WearCategory3: "#BB6454",
  WearCategory4: "#84453B",
  WearCategoryNA: "#999999",
};
function _(_, _) {
  let _ = _(_);
  return (0, _.useMemo)(() => {
    if (!_.data) return null;
    let _ = _(_),
      _ = _.data[_],
      _ = _.data[_];
    if (
      (_(!!_ && !!_, "Could not find expected CS facets"), !_?.tags || !_?.tags)
    )
      return null;
    let _ = (_, _) => {
        let _ = _[_] && _[_][_];
        if (!_) return;
        let _ = "";
        return (
          _?.tags && _.tags[_] && (_ = _.tags[_].localized_name),
          {
            _: _.bucket_id,
            price: _.strPrice,
            label: _,
          }
        );
      },
      _ =
        Object.values(_)
          .map((_) => Object.keys(_))
          .flat()
          ._(0) == _,
      _ = [];
    for (let _ of Object.keys(_.tags))
      if ((_ == _) == _) {
        let _ = _.tags[_];
        _.push({
          category: _.name,
          tag: _,
          label: _.localized_name,
          color: _[_],
          normal: _("normal", _),
          strange: _("strange", _),
          tournament: _("tournament", _),
        });
      }
    let _ = new Intl.Collator(_(), {
      numeric: !0,
    });
    _.sort((_, _) => _.compare(_.tag, _.tag));
    let _ = _.strange && Object.keys(_.strange).length > 0,
      _ = _.tournament && Object.keys(_.tournament).length > 0;
    return {
      rgWears: _,
      qualityFacet: _,
      bHasStatTrak: _,
      bHasSouvenir: _,
    };
  }, [_, _.data, _]);
}
function _(_) {
  let _ = "normal";
  return (
    _ &&
      _.facets[_] &&
      (_.facets[_].strange
        ? (_ = "strange")
        : _.facets[_].tournament && (_ = "tournament")),
    _
  );
}
function _(_) {
  if (!_ || !_.tags || !_(_.appid)) return;
  let _ = _.tags,
    _ = _.filter((_) => _.category == "Weapon")[0];
  if (_) return _.internal_name;
  let _ = _.filter((_) => _.category == "Type")[0];
  if (!_) return;
  let _ = _.internal_name;
  if (
    _ &&
    ["Type_CustomPlayer", "Type_Hands", "CSGO_Tool_Keychain"].includes(_)
  )
    return _;
}
var _ = _(_(), 1);
var _ = "qD3K4Br2I4U-";
var _ = "A4mF5ndNQ-M-";
var _ = "kA3lBEUUGIE-";
var _ = "BdEoRMn7Puo-";
var _ = "bf2dUeAriR4-";
var _ = "-lL6bEDyZcg-";
var _ = "_0XgKUlm0Ujg-";
var _ = "Ng2i-kQ2z9Q-";
var _ = "FT0sOERuu-Q-";
var _ = "B6Dz4zS9VEQ-";
var _ = "aO3nf4x06Ts-";
var _ = "uWk-zbQ8Nbs-";
var _ = "Z2RkGeCUYr4-";
var _ = "nhn4V9xc4A4-";
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { index: _, listings: _, onIndexChange: _, onClose: _, ..._ } = _,
    [_, _] = (0, _.useState)(!0),
    [_, _] = (0, _.useState)(0);
  _("ArrowLeft", () => _(!1), !0, !0),
    _("Left", () => _(!1), !0, !0),
    _("ArrowRight", () => _(!0), !0, !0),
    _("Right", () => _(!0), !0, !0),
    _("Escape", () => _(), !0, !0),
    _("Esc", () => _(), !0, !0);
  let _ = (0, _.useCallback)(
      (_) => {
        _(_), _(_ > _);
      },
      [_, _],
    ),
    _ = (_) => {
      let _ = _.Clamp(_ + (_ ? 1 : -1), 0, _.length - 1);
      _ != _ && _(_);
    };
  (0, _.useEffect)(() => {
    _.length != _ && _(_.length);
  }, [_, _, _]);
  let {
      refContainer: _,
      bIsDragging: _,
      nDragOffset: _,
      nDragSelectedOffsetIndex: _,
      handleTouchStart: _,
      handleTouchMove: _,
      handleTouchEnd: _,
    } = _(_, _, _.length),
    _ = (_) => {
      _.target == _.currentTarget && (_?.(), _.stopPropagation());
    },
    _ = (_) => _.InRangeArray(_ + _, _) && (_.InRangeInclusive(_, -1, 1) || _);
  return (0, _.jsx)("div", {
    className: _,
    children: (0, _.jsx)("div", {
      className: _,
      onClick: _,
      children: (0, _.jsx)("div", {
        ref: _,
        className: _,
        onTouchStart: _,
        onTouchMove: _,
        onTouchEnd: _,
        children: [-2, -1, 0, 1, 2].map((_) =>
          (0, _.jsx)(
            "div",
            {
              className: (0, _.default)({
                [_]: !0,
                [_]: _,
                [_]: _(_),
                [_]: _ == -2,
                [_]: _ == -1,
                [_]: _ == 0,
                [_]: _ == 0 && !_,
                [_]: _ == 0 && _,
                [_]: _ == 1,
                [_]: _ == 2,
                [_]: _ + _ == 0,
              }),
              style: {
                "--dragOffsetX": `${_}px`,
              },
              children:
                _(_) &&
                (0, _.jsx)(_, {
                  index: _ + _,
                  selectedIndex: _,
                  listing: _[_ + _],
                  fnAdvance: _,
                  onClose: _,
                  ..._,
                }),
            },
            _ + _,
          ),
        ),
      }),
    }),
  });
}
function _(_, _, _) {
  let _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = (0, _.useRef)({
      _: 0,
      _: 0,
    }),
    _ = 50;
  return {
    refContainer: _,
    bIsDragging: _,
    nDragOffset: _,
    nDragSelectedOffsetIndex: _,
    handleTouchStart: (_) => {
      _(!0),
        (_.current = {
          _: _.touches[0].clientX,
          _: _.touches[0].clientY,
        }),
        _(0),
        _(0);
    },
    handleTouchMove: (_) => {
      if (!_) return;
      let _ = _.touches[0].clientX - _.current._,
        _ = _.touches[0].clientY - _.current._;
      Math.abs(_) > Math.abs(_) && (_(_), _(_ > _ ? 1 : _ < -_ ? -1 : 0));
    },
    handleTouchEnd: () => {
      _ &&
        (_(!1),
        _ > _ ? _(Math.max(_ - 1, 0)) : _ < -_ && _(Math.min(_ + 1, _ - 1)),
        _(0),
        _(0));
    },
  };
}
function _(_) {
  let { index: _, selectedIndex: _, fnAdvance: _, ..._ } = _,
    _ = () => {
      _ != _ && _(_ > _);
    },
    _ = _ === _;
  return (0, _.jsx)("div", {
    onClick: _ ? void 0 : _,
    children: (0, _.jsx)("div", {
      inert: !_,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_, _, _, _) {
  _.default.useEffect(() => {
    let _ = (_) => {
      _.key === _ &&
        !_.defaultPrevented &&
        (_.preventDefault(), _.stopPropagation(), _(_));
    };
    return (
      document.addEventListener("keydown", _),
      () => document.removeEventListener("keydown", _)
    );
  }, [_, _, _, _]);
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _() {
  return _({
    mutationFn: async (_) =>
      _(
        "/market/actions",
        "DeleteEnhancedAppearance",
        _.appid,
        _.listingid,
        _.full_delete,
      ),
    onSuccess: (_, _) => {
      let _ = _.full_delete ? "deletion" : "regeneration";
      _ == 1
        ? (alert(`Enhanced appearance ${_} succeeded. Page will refresh.`),
          location.reload())
        : alert(`Enhanced appearance ${_} failed with eresult ${_}.`);
    },
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    elevation: "3",
    background: "dull-4",
    height: "min( 95vh, 720px )",
    width: "min( 95vw, 1200px )",
    justify: "center",
    align: "center",
    children: (0, _.jsx)(_, {
      size: "5",
    }),
  });
}
function _(_) {
  let [_, _] = _(),
    [_, _] = (0, _.useState)(-1),
    _ = _(),
    _ = !_().bEligible,
    _ = _() === "initial",
    {
      onClose: _,
      listing: _,
      expectEnhancedAppearance: _,
      pinnedImageIndex: _,
      onPinnedImageIndexChange: _,
      activeBucketDescription: _,
    } = _;
  if (!_) return (0, _.jsx)(_, {});
  let { description: _, asset: _, listingid: _, enhanced_appearances: _ } = _,
    { asset_properties: _ = [], appid: _ } = _ || {},
    { bRestricted: _, ..._ } = _(_),
    _ = _(_),
    _ = _ || _,
    _ = [],
    _ = _.length > 0,
    _ = _(_ || _);
  return (
    _
      ? _.push(
          ..._.map(({ url: _ }, _) => {
            let _ =
              _ !== void 0 && _ !== void 0 && _ !== void 0 && _(_, _)
                ? _(_, _, _)
                : void 0;
            return {
              strForegroundURL: _,
              strBackgroundURL: _,
            };
          }),
        )
      : _.push({
          strForegroundURL: _(_),
        }),
    (0, _.jsx)(_.Root, {
      description: _,
      listingID: _,
      asset: _,
      children: (0, _.jsxs)(_, {
        RenderErrorComponent: () =>
          (0, _.jsx)(_, {
            onClose: _,
          }),
        children: [
          (0, _.jsxs)(_, {
            direction: _ ? "column" : "row",
            elevation: "3",
            background: "dull-6",
            height: "min( 95vh, 684px )",
            width: "min( 80vw, 1600px )",
            position: "relative",
            overflow: _ ? "auto" : void 0,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(_, _ && _),
                  onClick: _,
                  children: (0, _.jsx)(_, {}),
                }),
              (0, _.jsx)(_, {
                images: _,
                expectEnhancedAppearance: _,
                enhancedAppearance: _,
                onImageSelected: _,
                pinnedImageIndex: _,
                onPinnedImageIndexChange: _,
              }),
              (0, _.jsxs)(_, {
                direction: "column",
                gap: _ ? "2" : "3",
                flexGrow: "1",
                padding: _ ? "4" : "5",
                overflow: _ ? void 0 : "auto",
                children: [
                  (0, _.jsx)(_.Name, {
                    size: {
                      initial: "4",
                      _: "5",
                      _: "7",
                    },
                  }),
                  _ ? (0, _.jsx)(_.GameName, {}) : (0, _.jsx)(_.GameInfo, {}),
                  (0, _.jsx)(_, {
                    appid: _,
                    properties: _,
                  }),
                  !1,
                  (0, _.jsx)(_, {
                    size: "4",
                    color: "dull-7",
                  }),
                  (0, _.jsxs)(_, {
                    justify: "between",
                    align: "center",
                    wrap: "wrap",
                    children: [
                      (0, _.jsx)(_.MarketActions, {}),
                      (0, _.jsx)(_, {
                        align: "center",
                        gap: "2",
                        children: (0, _.jsx)(_, {
                          disabled: _,
                          listing: _,
                          onBuy: () => _(!0),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    size: "4",
                    color: "dull-7",
                  }),
                  (0, _.jsx)(_.AssetAccessories, {}),
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      ..._,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      children: _.Localize("#Item_CountryBuyRestricted"),
                    }),
                  (0, _.jsx)(_, {
                    size: "4",
                    color: "dull-7",
                  }),
                  (0, _.jsx)(_.Descriptions, {}),
                  (0, _.jsx)(_.Tags, {}),
                  _ &&
                    (0, _.jsx)(_, {
                      appid: _,
                      listingid: _,
                      expectEnhancedAppearance: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  listing: _,
                  onClose: () => _(!1),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            images: _,
            activeIndex: _,
            onIndexChange: _,
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let {
      images: _,
      enhancedAppearance: _,
      expectEnhancedAppearance: _,
      onImageSelected: _,
      pinnedImageIndex: _,
      onPinnedImageIndexChange: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? _,
    _ = _ < _.length ? _ : _.length - 1;
  return (0, _.jsxs)(_, {
    direction: "column",
    gap: "3",
    flexGrow: "1",
    flexBasis: {
      initial: void 0,
      _: "60%",
    },
    flexShrink: "0",
    background: "dull-3",
    align: "center",
    justify: "center",
    children: [
      _.length > 0 &&
        (0, _.jsx)(_, {
          justify: "center",
          align: "center",
          flexGrow: "1",
          position: "relative",
          className: _,
          children: (0, _.jsx)(_, {
            src: _[_],
            index: _,
            onClick: () => _(_),
            children: (0, _.jsx)(_, {
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          }),
        }),
      _.length > 1 &&
        (0, _.jsx)(_, {
          justifyContent: "center",
          alignItems: "center",
          minHeight: "0",
          autoColumns: "1fr",
          autoFlow: "column",
          paddingX: "3",
          paddingBottom: "3",
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                outline: _ === _ ? "accent-7" : void 0,
                overflow: "hidden",
                width: "100%",
                height: {
                  initial: "48px",
                  _: "120px",
                },
                maxWidth: "200px",
                paddingX: "1",
                cursor: "pointer",
                onClick: () => _(_),
                onMouseEnter: () => _(_),
                onMouseLeave: () => _(null),
                className: _,
                children: (0, _.jsx)(_, {
                  src: _,
                  index: _,
                }),
              },
              _,
            ),
          ),
        }),
      !_ &&
        _ &&
        (0, _.jsxs)(_, {
          align: "center",
          gap: "3",
          paddingY: "3",
          paddingX: {
            initial: "3",
            _: "5",
          },
          margin: {
            initial: "3",
            _: "5",
          },
          radius: "lg",
          background: "dull-2",
          children: [
            (0, _.jsx)(_, {
              size: {
                initial: "2",
                _: "4",
              },
              align: "center",
              weight: "medium",
              contrast: "description",
              children: _.Localize("#Listing_EnhancedAppearance_Missing"),
            }),
            (0, _.jsx)(_, {
              width: "32px",
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { appid: _, listingid: _, expectEnhancedAppearance: _ } = _,
    _ = _();
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        accentColor: "valveonly",
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              color: "accent-10",
              children: "Valve only enhanced image options:",
            }),
            (0, _.jsxs)(_, {
              gap: "2",
              children: [
                (0, _.jsx)(
                  _,
                  {
                    onClick: () => {
                      _.mutate({
                        appid: _,
                        listingid: _,
                        full_delete: !1,
                      });
                    },
                    children: "Regenerate",
                  },
                  "regenerate",
                ),
                (0, _.jsx)(
                  _,
                  {
                    onClick: () => {
                      _.mutate({
                        appid: _,
                        listingid: _,
                        full_delete: !0,
                      });
                    },
                    children: "Delete",
                  },
                  "delete",
                ),
              ],
            }),
          ],
        }),
      });
}
function _(_) {
  let { appid: _, properties: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        direction: "column",
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _,
              property: _,
              contrast: "title",
              size: "3",
              weight: "regular",
            },
            _.propertyid,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, properties: _ } = _;
  if (!_(_)) return null;
  let _ = _.find(({ propertyid: _ }) => _ === _);
  return _
    ? (0, _.jsx)(_, {
        property: _,
      })
    : null;
}
function _(_) {
  let {
    onBuy: _,
    listing: { asset: _, strSubtotal: _, bMine: _ },
    disabled: _,
  } = _;
  if (_?.amount === 0)
    return (0, _.jsx)(_, {
      weight: "medium",
      size: "3",
      title: _.Localize("#Listing_NotAvailable"),
      children: _.Localize("#Listing_NotAvailable_Short"),
    });
  let _ = (0, _.jsx)(_, {
    size: "3",
    contrast: "title",
    children: _,
  });
  if (!_.logged_in) {
    let _ = new URL(location.href);
    _.searchParams.set("buy", "1");
    let _ = `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(_, {
          disabled: _,
          color: "green",
          href: _,
          children: _.Localize("#Button_Buy"),
        }),
      ],
    });
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      !_ &&
        (0, _.jsx)(_, {
          color: "green",
          disabled: _,
          onClick: _,
          children: _.Localize("#Button_Buy"),
        }),
      _ &&
        (0, _.jsx)(_, {
          color: "accent-9",
          children: _.Localize("#Listing_MyListing"),
        }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(0);
  return "listing" in _
    ? (0, _.jsx)(_, {
        ..._,
        pinnedImageIndex: _,
        onPinnedImageIndexChange: _,
      })
    : (0, _.jsx)(_, {
        ..._,
        pinnedImageIndex: _,
        onPinnedImageIndexChange: _,
      });
}
function _(_) {
  let {
      query: _,
      pageIndex: _,
      itemIndex: _,
      onIndexChange: _,
      onClose: _,
      ..._
    } = _,
    _ = (0, _.useMemo)(
      () => (_.data ? _.data.pages.flatMap((_) => (_ ? _.listings : [])) : []),
      [_.data],
    ),
    _ = (0, _.useMemo)(() => {
      if (!_.data) return 0;
      let _ = 0;
      for (let _ = 0; _ < _; _++) _ += _.data.pages[_]?.listings.length ?? 0;
      return (_ += _), _;
    }, [_.data, _, _]),
    { data: _, fetchNextPage: _, isFetchingNextPage: _ } = _,
    _ = (0, _.useCallback)(
      (_) => {
        if (_)
          for (let _ = 0; _ < _.pages.length; _++) {
            let _ = _.pages[_];
            if (_)
              if (_ < _.listings.length) {
                if (
                  (_({
                    pageIndex: _,
                    itemIndex: _,
                  }),
                  _ === _.pages.length - 1)
                ) {
                  let _ = Math.min(_.listings.length, 3);
                  _.more && !_ && _.listings.length - _ - 1 < _ && _();
                }
                return;
              } else _ -= _.listings.length;
          }
      },
      [_, _, _, _],
    );
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(_, {
      listings: _,
      index: _,
      onIndexChange: _,
      onClose: _,
      ..._,
    }),
  });
}
function _(_) {
  let { onClose: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { onClose: _, children: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    onClose: _,
    ..._,
    children: (0, _.jsx)(_, {
      RenderErrorComponent: () =>
        (0, _.jsx)(_, {
          onClose: _,
        }),
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    direction: "column",
    gap: "3",
    align: "center",
    justify: "center",
    padding: "5",
    radius: "sm",
    background: "dull-6",
    minWidth: "30ch",
    children: [
      (0, _.jsx)(_, {
        contrast: "title",
        size: "4",
        children: _.Localize("#Listing_SomethingWentWrong"),
      }),
      _.onClose &&
        (0, _.jsx)(_, {
          color: "dull",
          onClick: _.onClose,
          children: _.Localize("#Button_Close"),
        }),
    ],
  });
}
function _(_, _, _) {
  return `${_.MEDIA_CDN_COMMUNITY_URL}assets/market/${_}/v1/${_}/${_}.avif`;
}
function _(_, _) {
  return !!(_(_) && _ == 0);
}
function _(_) {
  let { src: _, onClick: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    onClick: _,
    maxWidth: "100%",
    children: [
      _.strBackgroundURL &&
        (0, _.jsx)(_, {
          objectFit: "contain",
          src: _.strBackgroundURL,
          alt: "",
          maxWidth: "100%",
        }),
      (0, _.jsx)(_, {
        objectFit: "contain",
        src: _.strForegroundURL,
        alt: "",
        maxWidth: "100%",
      }),
      _,
    ],
  });
}
function _(_) {
  let [_, _] = _("lightboxBackground");
  function _(_) {
    _(_);
  }
  return (0, _.jsx)(_, {
    onChange: _,
    checked: _ !== !1,
    children: (0, _.jsx)(_, {
      size: "3",
      children: _.Localize("#Listing_EnhancedAppearance_ShowBackground"),
    }),
  });
}
function _(_) {
  let { src: _ } = _,
    [_] = _("lightboxBackground");
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _ !== !1 &&
        _.strBackgroundURL &&
        (0, _.jsx)(_, {
          objectFit: "contain",
          src: _.strBackgroundURL,
          alt: "",
          maxWidth: "100%",
        }),
      (0, _.jsx)(_, {
        objectFit: "contain",
        src: _.strForegroundURL,
        alt: "",
        maxWidth: "100%",
      }),
      (0, _.jsx)(_, {
        style: {
          userSelect: "none",
        },
        onClick: (_) => _.stopPropagation(),
        padding: "2",
        justify: {
          initial: "center",
          _: "start",
        },
        width: "100%",
        children: _.strBackgroundURL && (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { images: _, activeIndex: _, onIndexChange: _ } = _;
  if (_ < 0) return null;
  let _ = (_ + 1) % _.length,
    _ = (_ + _.length - 1) % _.length,
    _ = (_) => {
      _.stopPropagation(), _.preventDefault(), _(-1);
    },
    _ = (_) => {
      _.stopPropagation(), _.preventDefault(), _(_);
    },
    _ = (_) => {
      _.stopPropagation(), _.preventDefault(), _(_);
    };
  return (0, _.jsx)(_, {
    backgroundClassName: _,
    imageTitle: "",
    prevSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    mainSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    nextSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    onMoveNextRequest: _,
    onMovePrevRequest: _,
    onCloseRequest: _,
    toolbarButtons: [],
  });
}
var _ = _(_(), 1);
function _(_) {
  let { watchlist: _ } = _,
    _ = _?.items ?? [];
  return (0, _.jsx)(_, {
    direction: "column",
    gap: "3",
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          item: _,
        },
        _._,
      ),
    ),
  });
}
function _(_) {
  let { item: _ } = _,
    _ = _(),
    _ = {
      deleteMutation: _({
        mutationFn: () =>
          _("/market/actions", "RemoveMarketWatchlistItem", _._),
        onSuccess: _,
      }),
    };
  switch (_.type) {
    case "listing":
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case "bucket":
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case "search":
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case "search_descriptions":
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
  }
  return null;
}
function _(_) {
  let { listing: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        listing: _,
        onClick: () => _(!0),
      }),
      _ &&
        (0, _.jsx)(_, {
          listing: _,
          onClose: () => _(!1),
          expectEnhancedAppearance: !1,
        }),
    ],
  });
}
function _(_) {
  let { _: _, name: _, query: _, deleteMutation: _ } = _,
    _ = _(),
    _ = _.Search({
      search: _(_, _.maxPrice),
    }),
    _ = _(_.appid);
  return (0, _.jsxs)(_, {
    href: _,
    deleteMutation: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          children: _,
        }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize("#Watchlist_SearchResultsFor"),
        }),
      (0, _.jsxs)(_, {
        children: [
          _.appid &&
            (0, _.jsx)(_, {
              appid: _.appid,
            }),
          _.strQuery &&
            (0, _.jsxs)(_, {
              children: ['"', _.strQuery, '"'],
            }),
          _.filters &&
            (0, _.jsx)(_, {
              filters: _.filters,
              getLabel: _,
            }),
          _.accessoryFilters &&
            (0, _.jsx)(_, {
              filters: _.accessoryFilters,
              getLabel: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { _: _, name: _, query: _, deleteMutation: _ } = _,
    _ = _(),
    _ = _.Search({
      search: _(_, _.maxPrice),
    });
  return (0, _.jsxs)(_, {
    href: _,
    deleteMutation: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          children: _,
        }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize("#Watchlist_SearchResultsFor"),
        }),
      (0, _.jsxs)(_, {
        children: [
          _.appid &&
            (0, _.jsx)(_, {
              appid: _.appid,
            }),
          (0, _.jsx)(_, {
            children: "TODO",
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { bucket: _, deleteMutation: _, query: _ } = _,
    _ = _(_.appid);
  if (!_) return null;
  let _ = _.Item(_.appid, _.strItemName),
    _ = _.parent_bucket_info ?? (_.child_bucket_infos ?? [])[0];
  return (0, _.jsxs)(_, {
    href: _,
    deleteMutation: _,
    children: [
      (0, _.jsx)(_, {
        children: _?.localized_name,
      }),
      (0, _.jsx)(_, {
        children:
          _.filters &&
          (0, _.jsx)(_, {
            filters: _.filters,
            getLabel: _,
          }),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    gap: "2",
    align: "center",
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    background: "dull-8",
    radius: "sm",
    padding: "2",
    ..._,
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = _({
      appid: _,
    }),
    _ = _.data && _(_.data, "community_icon");
  return (0, _.jsxs)(_, {
    children: [
      !_ && (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          src: _,
          alt: "",
        }),
    ],
  });
}
function _(_) {
  let { filters: _, getLabel: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: Object.entries(_).flatMap(([_, _]) =>
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            children: _(_, _),
          },
          `${_}_${_}`,
        ),
      ),
    ),
  });
}
var _ = _;
function _(_) {
  let { href: _, children: _, deleteMutation: _ } = _,
    _ = (_) => {
      _.stopPropagation(), _.preventDefault(), _.isPending || _.mutate();
    };
  return (0, _.jsx)("a", {
    className: _(),
    href: _,
    children: (0, _.jsxs)(_, {
      gap: "3",
      justify: "between",
      align: "center",
      radius: "sm",
      background: "dull-5",
      padding: "3",
      cursor: "pointer",
      children: [
        (0, _.jsx)(_, {
          flexGrow: "1",
          children: _,
        }),
        (0, _.jsx)(_, {
          onClick: _,
          underline: "always",
          color: "text-body",
          children: "Remove",
        }),
        (0, _.jsx)(_, {
          direction: "right",
          size: "7",
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "2 11 32 14",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M27 21.3332V23.0002H21.7822L23.5195 21.3332H27Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M30.5 17.1672V18.8332H26.126L27 17.9953L26.1367 17.1672H30.5Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M34 14.6672H23.5303L21.793 13.0002H34V14.6672Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M9.42583 24.0155C11.113 24.5862 12.927 24.6761 14.6629 24.2752C16.3988 23.8743 17.9874 22.9985 19.2492 21.7468L23 18.016L19.2492 14.2851C18.3333 13.3742 17.4583 12.794 15.965 12.1789C14.2409 11.5047 12.3566 11.3448 10.5425 11.7189C8.72852 12.0929 7.0634 12.9847 5.75083 14.2851L2 18.016L5.75083 21.7468C6.72745 22.7182 7.98479 23.5281 9.42583 24.0155ZM12.5 22.0776C14.7552 22.0776 16.5833 20.2591 16.5833 18.016C16.5833 15.7728 14.7552 13.9544 12.5 13.9544C10.2448 13.9544 8.41667 15.7728 8.41667 18.016C8.41667 20.2591 10.2448 22.0776 12.5 22.0776Z",
      }),
    ],
  });
}
function _(_) {
  let _ = _(_);
  return (_, _) => _(_.data, _, _);
}
function _(_, _, _) {
  if (!_) return _;
  let _ = _[_];
  if (!_ || !_.tags) return _;
  let _ = _.tags[_];
  return _ ? _.localized_name : _;
}
export {
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
  _,
  _,
  _,
};
