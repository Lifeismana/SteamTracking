var _ = _(_(), 1);
var _ = "XcepvoS0yX0-";
function _(_, _, _ = NaN) {
  let _ = _(_),
    { strSymbol: _, strDecimalSymbol: _, strThousandsSeparator: _ } = _;
  (_ = _.replace(_, "")
    .replace(".--", ".00")
    .replace(/ /g, "")
    .replace(_(_), "")),
    _ !== "." && (_ = _.replace(_(_), "."));
  let _ = _.indexOf("."),
    _ = _.lastIndexOf(".");
  if (_ !== -1 && _ !== _) {
    let _ = _.split(".");
    _[_.length - 1].length > 0 &&
      (_ = `${_.slice(0, -1).join("")}.${_[_.length - 1]}`);
  }
  let _ = parseFloat(_) * 100;
  return isNaN(_) ? _ : Math.floor(_ + 1e-6);
}
function _(_) {
  return _ === "." ? /\./g : new RegExp(_, "g");
}
var _ = _(_(), 1);
function _() {
  return (0, _.jsx)(_, {
    position: "relative",
    inset: "0",
    radius: "sm",
    direction: "column",
    align: "center",
    justify: "center",
    marginTop: "2",
    className: _,
    style: {
      pointerEvents: "none",
    },
    children: (0, _.jsx)(_, {
      align: "center",
      _: "div",
      size: "7",
      weight: "heavy",
      children: _.Localize("#Listings_NoneFound"),
    }),
  });
}
function _(_) {
  let {
      view: _ = "grid",
      onViewChange: _,
      children: _,
      breadcrumbs: _ = (0, _.jsx)("div", {}),
      sort: _,
      onLoadMore: _,
      loadingMore: _,
      loadingNew: _ = !0,
      loadingError: _,
      empty: _,
      resetScrollIdentity: _,
    } = _,
    _ = _() === "initial",
    _ = !_,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!0);
  return (
    (0, _.useEffect)(() => {
      _.current &&
        !_.current &&
        _.current.getBoundingClientRect().top < 0 &&
        _.current.scrollIntoView(!0),
        (_.current = !1);
    }, [_]),
    (0, _.jsxs)(_, {
      ref: _,
      children: [
        (0, _.jsxs)(_, {
          justify: "between",
          align: "center",
          gap: "2",
          marginBottom: "2",
          wrap: "wrap",
          children: [
            _,
            (0, _.jsxs)(_, {
              gap: "2",
              align: "center",
              children: [
                !_ &&
                  (0, _.jsxs)(_, {
                    align: "center",
                    gap: "1",
                    children: [
                      (0, _.jsx)(_, {
                        type: "list",
                        activeView: _,
                        onViewChange: _,
                      }),
                      (0, _.jsx)(_, {
                        type: "grid",
                        activeView: _,
                        onViewChange: _,
                      }),
                    ],
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    children: _.Localize("#SortBy_Label"),
                  }),
                _,
              ],
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          position: "relative",
          children: [
            _ === "grid" &&
              (0, _.jsxs)(_, {
                columns: {
                  initial: "repeat(auto-fill, minmax(136px, 1fr))",
                  _: "repeat(auto-fill, minmax(260px, 1fr))",
                },
                gap: {
                  initial: "2",
                  _: "4",
                },
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      onTrigger: _,
                    }),
                ],
              }),
            _ === "list" &&
              (0, _.jsxs)(_, {
                direction: "column",
                gap: "4",
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      onTrigger: _,
                    }),
                ],
              }),
            _ && (0, _.jsx)(_, {}),
            _ &&
              (0, _.jsx)(_, {
                justify: "center",
                margin: "5",
                children: (0, _.jsx)(_, {
                  size: "4",
                }),
              }),
            _ &&
              (0, _.jsx)(_, {
                position: "absolute",
                inset: "0",
                background: "dull-4 80%",
                radius: "sm",
                paddingX: "4",
                paddingTop: "9",
                children: (0, _.jsx)(_, {
                  justify: "center",
                  align: "center",
                  children: (0, _.jsx)(_, {
                    size: "5",
                  }),
                }),
              }),
            _ && (0, _.jsx)(_, {}),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { type: _, activeView: _, onViewChange: _ } = _,
    _ = _ === "grid" ? _ : _,
    _ = _.Localize(
      _ === "grid" ? "#Results_GridView_Tooltip" : "#Results_ListView_Tooltip",
    );
  return (0, _.jsx)(_, {
    title: _,
    children: (0, _.jsx)(_, {
      size: "6",
      cursor: "pointer",
      onClick: () => _(_),
      color: _ === _ ? "dull-12" : "dull-9",
    }),
  });
}
var _ = 400;
function _(_) {
  let { onTrigger: _ } = _,
    [_] = (0, _.useState)({
      threshold: 1,
      rootMargin: `0px 0px ${_}px 0px`,
    }),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          _.isIntersecting && _();
        },
        [_],
      ),
      _,
    );
  return (0, _.jsx)("div", {
    ref: _,
  });
}
function _() {
  return (0, _.jsx)(_, {
    justify: "center",
    align: "center",
    radius: "sm",
    background: "red-3",
    outline: "red-5",
    padding: "4",
    marginTop: "4",
    children: (0, _.jsx)(_, {
      size: "5",
      contrast: "subtitle",
      children: _.Localize("#Results_PageLoadError"),
    }),
  });
}
var _ = _(_(), 1);
var _ = "IA-Ms99W7m8-";
var _ = "w3BzqTzDQX0-";
var _ = _(_(), 1);
function _() {
  return _("sm");
}
function _(_) {
  let { children: _ } = _;
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        gap: "2",
        direction: "column",
        width: "300px",
        maxWidth: "300px",
        position: "sticky",
        inset: "var(--spacing-2) auto auto auto",
        children: _,
      });
}
function _(_) {
  let { children: _, onClose: _, open: _ } = _;
  return _
    ? (0, _.jsx)(_.Root, {
        onClose: _,
        children: (0, _.jsxs)(_, {
          gap: "2",
          direction: "column",
          width: "min( 300px, 95vw )",
          maxWidth: "min( 300px, 95vw )",
          elevation: "2",
          background: "dull-3",
          position: "relative",
          maxHeight: "95vh",
          overflow: "auto",
          onClick: (_) => _.stopPropagation(),
          children: [
            (0, _.jsxs)(_, {
              direction: "column",
              gap: "2",
              padding: "3",
              children: [
                (0, _.jsx)(_, {
                  inset: "12px 12px auto auto",
                  position: "absolute",
                  children: (0, _.jsx)(_, {
                    onClick: _,
                    hitSlop: !0,
                  }),
                }),
                _,
              ],
            }),
            (0, _.jsx)(_, {
              padding: "3",
              paddingTop: "4",
              position: "sticky",
              marginTop: "2",
              inset: "auto auto 0 auto",
              className: _,
              children: (0, _.jsx)(_, {
                variant: "inverted",
                width: "100%",
                color: "green",
                onClick: _,
                children: _.Localize("#Filter_ViewResults"),
              }),
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    weight: "heavy",
    size: "4",
    className: _,
    children: _,
  });
}
function _(_) {
  let { onReset: _ } = _;
  return (0, _.jsx)(_, {
    alignSelf: "center",
    children: (0, _.jsx)(_, {
      color: "dull",
      variant: "ghost",
      onClick: _,
      children: _.Localize("#MarketSearch_Reset"),
    }),
  });
}
var _ = Object.assign(_, {
  Title: _,
  ResetButton: _,
});
function _(_, _) {
  let _ = _(_),
    [_, _] = (0, _.useState)(null),
    _ = _(_, {
      nTimeoutMS: 300,
      nTimeoutExtensionMS: 300,
      nMaxTimeoutExtensions: 1 / 0,
    }),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      _ !== null && _ !== null && _ !== _ && (_(_), _(null));
    }, [_, _, _, _]),
    (0, _.useEffect)(() => {
      _ !== _ && _ !== null && _ !== null && _(null);
    }, [_, _, _]),
    [_ === null ? _ : _, _]
  );
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let {
      appid: _,
      onClose: _,
      buckets: _,
      activeBucketID: _,
      loadDescription: _,
    } = _,
    [_, _] = (0, _.useState)(() =>
      _ ? _.find(({ bucket_id: _ }) => _ === _) : void 0,
    ),
    _ = _(),
    _ = _(_, _?.bucket_id, _),
    _ = _(_, _?.bucket_id, !1),
    _ = !!_.data && !!_.data && !_.isPending;
  return (0, _.jsxs)(_, {
    onClose: _,
    children: [
      (0, _.jsx)(_.Heading, {
        size: "6",
        children: _.Localize("#BuyOrderDialog_Header_NoItem"),
      }),
      _.length > 1 &&
        (0, _.jsxs)(_, {
          justify: "start",
          gap: "3",
          align: "center",
          direction: {
            initial: "column",
            _: "row",
          },
          children: [
            (0, _.jsx)(_, {
              contrast: "title",
              children: _.Localize("#BuyOrderDialog_BucketPicker_Label"),
            }),
            (0, _.jsx)(_, {
              onSelectionChange: _,
              options: _,
              selectedValue: _ || null,
              placeholder: _.Localize(
                "#BuyOrderDialog_BucketPicker_Placeholder",
              ),
              getOptionLabel: (_) =>
                _.localized_name_inside_group || _.localized_name,
            }),
          ],
        }),
      !_ && _ && (0, _.jsx)(_.Loading, {}),
      _ &&
        (0, _.jsx)(_, {
          description: _.data,
          serverInfo: _.data,
          initialPrice: _.data?.amtMinSellOrder || void 0,
        }),
    ],
  });
}
function _(_) {
  let { description: _, serverInfo: _, initialPrice: _ } = _,
    [_, _] = (0, _.useState)({
      price: _ || 0,
      quantity: 1,
    }),
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
  let _ = _(_.country_code),
    _ = _.wallet_info ? _(parseInt(_.wallet_info.wallet_balance), _) : "",
    { mutation: _, confirmation: _ } = _(_, _, _, _),
    _ = _.isIdle || (_.isError && _.error.bFatal === !1),
    _ = _.require_billing_info && _,
    _ = _.error?.bFatal ? _.error : void 0,
    _ = _(_, _.wallet_info),
    _ = _(_, _.tax_info),
    _ = _.price * _.quantity + _,
    _ = _(_.wallet_info, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        wrap: "wrap",
        justify: "between",
        align: "start",
        gap: "2",
        children: [
          (0, _.jsx)(_, {
            description: _,
          }),
          (0, _.jsx)(_, {
            info: _,
            onChange: _,
            serverInfo: _,
            currency: _,
            disabled: !_,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_.FatalError, {
          children:
            _.message || _.Localize("#PurchaseDialog_Error_ServerGeneric"),
        }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _.isSuccess &&
              _.data?.buy_orderid &&
              (0, _.jsx)(_, {
                _: _.data.buy_orderid,
              }),
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
                hasFunds: _,
              }),
            !_.isSuccess &&
              !_ &&
              (0, _.jsx)(_, {
                hideSSA: !_,
                serverInfo: _,
                order: _,
                onPurchase: _.mutate,
                disabled: !_ || !_,
                hasFunds: _,
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
        let _ = _.price * _.quantity,
          _ = _(_, _.tax_info),
          _ = {
            sessionid: _(),
            currency: _(_.country_code),
            appid: _.appid || 0,
            market_hash_name: _.market_hash_name || "",
            price_total: _,
            tradefee_tax: _,
            quantity: _.quantity,
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
        let _ = await fetch("/market/createbuyorder/", {
          method: "POST",
          credentials: "include",
          body: _,
        });
        try {
          let _ = await _.json();
          if (_._ && _.success == 1) {
            if ((_ && _(null), _.message))
              throw {
                bFatal: !0,
                message: _.message,
              };
            return _;
          } else if (_?.need_confirmation)
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
                    message: _.Localize("#BuyOrderDialog_Status_GenericError"),
                  };
          return _;
        } catch (_) {
          throw _?.bFatal
            ? _
            : {
                bFatal: !0,
                message: _.Localize("#BuyOrderDialog_Status_GenericError"),
              };
        }
      },
    }),
    confirmation: _,
  };
}
function _(_) {
  let { description: _ } = _,
    { name: _, appid: _ } = _,
    _ = _(_),
    { data: _ } = _({
      appid: _,
    });
  return (0, _.jsxs)(_, {
    gap: "2",
    align: "center",
    children: [
      (0, _.jsx)(_, {
        width: "64px",
        height: "64px",
        objectFit: "contain",
        src: _,
        alt: "",
      }),
      (0, _.jsxs)(_, {
        direction: "column",
        children: [
          (0, _.jsx)(_, {
            size: "4",
            contrast: "subtitle",
            truncate: !0,
            children: _,
          }),
          (0, _.jsx)(_, {
            size: "3",
            truncate: !0,
            children: _?.name,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = 1;
  return (
    _ && _.wallet_market_minimum && (_ = parseInt(_.wallet_market_minimum)),
    3 * _
  );
}
function _(_, _) {
  let _ = _(_);
  return _.price >= _;
}
function _(_) {
  let {
      info: _,
      onChange: _,
      serverInfo: { tax_info: _, wallet_info: _ },
      currency: _,
      disabled: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = (_) => {
      let _ = _(_, _);
      _(_),
        isNaN(_) ||
          _({
            ..._,
            price: _,
          });
    },
    _ = () => _(null),
    _ = (_) => {
      _({
        ..._,
        quantity: _,
      });
    },
    _ = _(_, _),
    _ = _.price * _.quantity + _,
    _ = _(_, _);
  return (0, _.jsxs)(_, {
    columns: "1fr 100px max-content",
    justifyItems: "end",
    alignItems: "center",
    gap: "2",
    children: [
      (0, _.jsx)(_, {
        label: _.Localize("#BuyOrderDialog_PriceField"),
        suffix: _.Localize("#BuyOrderDialog_PriceField_Suffix"),
        error: !_,
        children: (0, _.jsx)(_, {
          value: typeof _ == "string" ? _ : _(_.price, _),
          onTextChange: _,
          size: "1",
          onBlur: _,
          disabled: _,
        }),
      }),
      (0, _.jsx)(_, {
        label: _.Localize("#BuyOrderDialog_QuantityField"),
        children: (0, _.jsx)(_, {
          value: _.quantity,
          onValueChange: _,
          valueToString: (_) => _.toString(),
          valueFromString: (_) => (isNaN(parseInt(_)) ? _ : parseInt(_)),
          size: "1",
          disabled: _,
        }),
      }),
      _ > 0 &&
        (0, _.jsx)(_, {
          label: _.Localize("#PurchaseDialog_LocalTax_Label", _.tax_region),
          children: (0, _.jsx)(_, {
            contrast: "subtitle",
            size: "3",
            children: _(_, _),
          }),
        }),
      (0, _.jsx)(_, {
        label: _.LocalizeReact("#BuyOrderDialog_MaxPrice", (0, _.jsx)(_, {})),
        children: (0, _.jsx)(_, {
          contrast: "title",
          size: "3",
          children: _(_, _),
        }),
      }),
      (0, _.jsx)(_, {
        size: "3",
        color: "text-red",
        align: "center",
        children: _
          ? " "
          : _.Localize("#BuyOrderDialog_MinPriceError", _(_(_), _)),
      }),
    ],
  });
}
function _(_, _) {
  if (!_?.tradefee_addtax || (_?.tradefee_taxrate || 0) <= 0) return 0;
  let _ = _.tradefee_taxrate,
    _ = _.price * _.quantity;
  if (_ < 3) return 0;
  let _ = 10,
    _ = 5,
    _ = 0;
  if (_ - 2 <= 200 / Math.max(_, _)) _ = 2;
  else {
    let _ = Math.floor((_ * 100) / (100 + _ + _));
    for (let _ = 0; _ < 3; _++)
      if (
        ((_ =
          Math.max(1, Math.floor((_ * _) / 100)) +
          Math.max(1, Math.floor((_ * _) / 100))),
        _ + _ < _)
      )
        _++;
      else {
        _ + _ > _ && _--;
        break;
      }
  }
  return Math.floor((_.quantity * _ * _) / 100 + 0.5);
}
function _(_) {
  let { label: _, children: _, suffix: _, error: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: "3",
        color: _ ? "text-red" : void 0,
        children: _,
      }),
      _,
      (0, _.jsx)(_, {
        size: "3",
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    color: "accent-9",
    title: _.Localize("#BuyOrderDialog_MaxPrice_Tip"),
    children: "(?)",
  });
}
function _(_) {
  let { _: _ } = _,
    _ = _(_);
  if (_.isError)
    return (0, _.jsx)(_.FatalError, {
      children:
        _.error?.message || _.Localize("#BuyOrderDialog_Status_GenericError"),
    });
  let _ = new URLSearchParams(location.search);
  _.delete("buy");
  let _ = `?${_.toString()}`;
  switch (_.data?.status || "pending") {
    case "pending":
      return (0, _.jsxs)(_, {
        align: "center",
        children: [
          (0, _.jsx)(_, {
            size: "5",
          }),
          (0, _.jsx)(_, {
            align: "center",
            contrast: "subtitle",
            size: "4",
            children: _.Localize("#BuyOrderDialog_Status_Pending"),
          }),
        ],
      });
    case "filled": {
      let { strAmountText: _, hrefInventory: _ } = _.data;
      return (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            contrast: "subtitle",
            size: "4",
            children: _.Localize("#BuyOrderDialog_Status_Filled"),
          }),
          !!_ &&
            (0, _.jsx)(_, {
              size: "3",
              children: _,
            }),
          !!_ &&
            (0, _.jsxs)(_, {
              justify: "end",
              gap: "2",
              children: [
                (0, _.jsx)(_, {
                  color: "dull",
                  href: _,
                  children: _.Localize("#PurchaseDialog_Close"),
                }),
                (0, _.jsx)(_, {
                  variant: "vibrant",
                  color: "green",
                  href: _,
                  children: _.Localize("#PurchaseDialog_ViewInventory"),
                }),
              ],
            }),
        ],
      });
    }
    default:
      return (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            contrast: "title",
            size: "4",
            children: _.Localize("#BuyOrderDialog_Status_Settled"),
          }),
          (0, _.jsx)(_, {
            contrast: "subtitle",
            size: "3",
            children: _.Localize("#BuyOrderDialog_Status_Settled_Note"),
          }),
          (0, _.jsx)(_, {
            justify: "end",
            children: (0, _.jsx)(_, {
              color: "dull",
              href: _,
              children: _.Localize("#PurchaseDialog_Close"),
            }),
          }),
        ],
      });
  }
}
function _(_) {
  return (0, _.jsx)(_, {
    background: "dull-5",
    padding: "5",
    gap: "2",
    direction: "column",
    ..._,
  });
}
var _ = 5e3;
function _(_) {
  let [_, _] = (0, _.useState)(Date.now());
  return (
    (0, _.useEffect)(() => _(Date.now()), [_]),
    _({
      queryKey: ["market", "buyorderstatus", _],
      queryFn: async () => {
        let _ = new URLSearchParams();
        _.set("sessionid", _()), _.set("buy_orderid", _);
        let _ = await fetch(`/market/getbuyorderstatus/?${_.toString()}`);
        if (!_._) throw _.Localize("#BuyOrderDialog_Status_GenericError");
        let _ = await _.json();
        if (_?.success && _.purchased) {
          let _ = (_.purchases || []).find((_) => _.assetid && _.contextid);
          return {
            status: "filled",
            strAmountText: _.purchase_amount_text,
            hrefInventory: _
              ? `/my/inventory/#${_.appid}_${_.contextid}_${_.assetid}`
              : void 0,
          };
        }
        return Date.now() - _ > _
          ? {
              status: "settled",
            }
          : {
              status: "pending",
            };
      },
      refetchInterval: (_) => {
        if (_.state.status === "error") return !1;
        if (_.state.data) {
          let _ = _.state.data;
          if (_.status === "filled" || _.status === "settled") return !1;
        }
        return 1e3;
      },
    })
  );
}
function _(_) {
  let {
      onPurchase: _,
      disabled: _,
      hideSSA: _,
      hasFunds: _,
      serverInfo: {
        ssa: { last_update: _, eu_ssa: _ },
      },
    } = _,
    _ = "";
  if (!_) {
    let _ = new URL(location.href);
    _.searchParams.set("buy", "1");
    let _ = _.toString();
    _ = `${_.STORE_BASE_URL}steamaccount/addfunds?marketlisting=1&returnurl=${encodeURIComponent(_)}`;
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
  let {
      appid: _,
      activeBucketID: _,
      buckets: _,
      loadDescription: _,
      loading: _,
      ..._
    } = _,
    [_, _] = _();
  if (!_.logged_in) {
    let _ = new URL(location.href);
    _.searchParams.set("buy", "1");
    let _ = `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`;
    return (0, _.jsx)(_, {
      href: _,
      ..._,
    });
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: () => _(!0),
        loading: _,
        ..._,
      }),
      _ &&
        (0, _.jsx)(_, {
          appid: _,
          onClose: () => _(!1),
          activeBucketID: _,
          buckets: _,
          loadDescription: _,
        }),
    ],
  });
}
var _ = _(_(), 1);
function _(_) {
  let { description: _ } = _,
    _ = _() === "initial";
  if (!_) return null;
  let _ = _.descriptions ?? [];
  if (_(_.appid)) {
    let _ = !1,
      _ = !1,
      _ = !1;
    _ = _.filter((_) => {
      if (_.name === "exterior_wear" || _.name === "sticker_info") return !1;
      if (_.name === "attribute" && !_.commodity)
        if (!_) _ = !0;
        else return !1;
      return _.name === "blank" && (!_ || _)
        ? !1
        : ((_ = _.name === "blank"), (_ = _ || !_), !0);
    });
  }
  return (0, _.jsx)(_, {
    direction: "column",
    justify: "center",
    minWidth: "0",
    gap: "2",
    paddingTop: "4",
    paddingRight: "4",
    children: (0, _.jsxs)(_.Root, {
      description: {
        ..._,
        descriptions: _,
      },
      children: [
        !_ && (0, _.jsx)(_.Name, {}),
        !_ &&
          (0, _.jsx)(_.GameInfo, {
            hrefGame: _.AppHome(_.appid),
          }),
        (0, _.jsx)(_.Descriptions, {}),
      ],
    }),
  });
}
var _ = _(_(), 1);
function _(_ = {}) {
  return _({
    mutationKey: ["market", "cancelbuyorder"],
    mutationFn: async (_) => {
      let _ = new FormData();
      _.set("sessionid", _()), _.set("buy_orderid", _._);
      let _ = await fetch("/market/cancelbuyorder/", {
        method: "POST",
        credentials: "include",
        body: _,
      });
      if (!_._) throw new Error(_.Localize("#CancelBuyOrder_GenericError"));
      let _ = await _.json();
      if (!_.success)
        throw typeof _.error == "string"
          ? new Error(_.error)
          : new Error(_.Localize("#CancelBuyOrder_GenericError"));
    },
    ..._,
  });
}
function _(_ = {}) {
  return _({
    mutationKey: ["market", "cancellisting"],
    mutationFn: async (_) => {
      let _ = new FormData();
      if (
        (_.set("sessionid", _()),
        !(
          await fetch(`/market/removelisting/${_._}`, {
            method: "POST",
            credentials: "include",
            body: _,
          })
        )._)
      )
        throw new Error(_.Localize("#CancelListing_GenericError"));
    },
    ..._,
  });
}
var _ = _(_(), 1);
function _(_) {
  let { onClose: _, children: _, listingID: _, description: _, ..._ } = _,
    _ = _(),
    _ = _({
      onSuccess: () => _(),
    }),
    _ = () =>
      _.mutate({
        _: _,
      }),
    _ = _.isPending,
    _ = _.isError || _.isSuccess;
  return (0, _.jsxs)(_, {
    onClose: _,
    ..._,
    children: [
      (0, _.jsx)(_.Heading, {
        children: _.Localize("#CancelListing_Dialog_Header"),
      }),
      _ &&
        (0, _.jsx)(_, {
          children: _.LocalizeReact(
            "#CancelListing_Dialog_Prompt",
            (0, _.jsx)(_, {
              weight: "heavy",
              children: _.market_name,
            }),
          ),
        }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize("#CancelListing_Dialog_Prompt_Generic"),
        }),
      (0, _.jsxs)(_, {
        justify: "end",
        align: "center",
        gap: "2",
        marginTop: "2",
        children: [
          _.isSuccess &&
            (0, _.jsx)(_, {
              type: "success",
              children: _.Localize("#CancelListing_Dialog_Success"),
            }),
          _.isError &&
            (0, _.jsx)(_, {
              type: "error",
              children: _.error.message,
            }),
          !_ &&
            (0, _.jsx)(_, {
              onClick: _,
              loading: _,
              children: _.Localize("#CancelListing_Dialog_Yes"),
            }),
          !_ &&
            (0, _.jsx)(_, {
              onClick: _,
              color: "dull",
              disabled: _,
              children: _.Localize("#CancelListing_Dialog_No"),
            }),
          _ &&
            (0, _.jsx)(_, {
              onClick: _,
              color: "dull",
              children: _.Localize("#Button_Close"),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { children: _, type: _ } = _;
  return (0, _.jsx)(_, {
    flexGrow: "1",
    children: (0, _.jsx)(_, {
      size: "2",
      color: _ === "error" ? "text-red" : "text-green",
      children: _,
    }),
  });
}
var _ = _(_(), 1);
function _(_) {
  let { orders: _, ..._ } = _;
  return _
    ? (0, _.jsx)(_, {
        buy: _.rgBuyOrders,
        sell: _.rgSellOrders,
        ..._,
      })
    : (0, _.jsx)(_, {
        error: !0,
        children: (0, _.jsx)(_, {
          color: "text-red",
          children: _.Localize("#MyOrders_FailedToLoad"),
        }),
      });
}
function _(_) {
  let { buy: _, sell: _, ..._ } = _,
    _ = _.length + _.length > 0,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1);
  if (!_) return (0, _.jsx)(_, {});
  let _ = {
      initial: "max-content max-content 1fr",
      _: "2fr max-content max-content 1fr",
    },
    _ = 5,
    _ = _.length > _,
    _ = _.slice(0, _),
    _ = _.length > _,
    _ = _.slice(0, _);
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      columns: _,
      gap: "1",
      alignContent: "center",
      children: [
        _.length > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: _.Localize("#MyOrders_Heading_MyPurchaseOffers"),
              }),
              (0, _.jsx)(_, {
                orders: _,
                ..._,
              }),
            ],
          }),
        _ &&
          !_ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _.Localize("#MyOrders_SeeAllN", _.length),
          }),
        _.length > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: _.Localize("#MyOrders_Heading_MyListings"),
              }),
              (0, _.jsx)(_, {
                orders: _,
                ..._,
              }),
            ],
          }),
        _ &&
          !_ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _.Localize("#MyOrders_SeeAllN", _.length),
          }),
      ],
    }),
  });
}
function _(_) {
  let { children: _, onClick: _ } = _;
  return (0, _.jsx)(_, {
    gridColumn: "1 / -1",
    children: (0, _.jsx)(_, {
      color: "text-body",
      underline: "always",
      onClick: _,
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    gridColumn: "1 / -1",
    children: (0, _.jsx)(_, {
      size: {
        initial: "4",
        _: "5",
      },
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: _.Localize("#MyOrders_NoActiveOrders_Item"),
    }),
  });
}
function _(_) {
  let { children: _, error: _ } = _;
  return (0, _.jsx)(_, {
    radius: "md",
    direction: "column",
    gap: "2",
    background: "dull-5",
    padding: "2",
    borderColor: _ ? "red-8" : "accent-8",
    border: "2px solid",
    children: _,
  });
}
function _(_) {
  let { orders: _, ..._ } = _,
    _ = _() === "initial";
  if (_.length === 0)
    return (0, _.jsx)(_, {
      gridColumn: "1 / -1",
      background: "dull-9 20%",
      children: (0, _.jsx)(_, {
        contrast: "note",
        children: _.Localize("#MyOrders_NoBuyOrders_Item"),
      }),
    });
  let _ = (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        textAlign: "start",
        children: _.Localize("#MyOrders_GridHeader_Name"),
      }),
      (0, _.jsx)(_, {
        children: _.Localize("#MyOrders_GridHeader_Quantity"),
      }),
      (0, _.jsx)(_, {
        children: _.Localize("#MyOrders_GridHeader_Price"),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ && _,
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            order: _,
            ..._,
          },
          _.buy_orderid,
        ),
      ),
    ],
  });
}
function _(_) {
  let {
      order: {
        appid: _,
        hash_name: _,
        price: _,
        quantity: _,
        quantity_remaining: _,
        wallet_currency: _,
        buy_orderid: _,
      },
      loadDescription: _,
    } = _,
    _ = _(),
    _ = _({
      onSuccess: () => _(),
    }),
    _ = _(_, _, _),
    _ = _() === "initial";
  if (_.isSuccess) return null;
  let _ = {
    price: _(_, _),
    appid: _,
    quantity: _ ?? _,
    description: _.data,
    cancelMutation: _,
    _: _,
  };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let {
    _: _,
    appid: _,
    quantity: _,
    description: _,
    cancelMutation: _,
    price: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: "subgrid",
    background: "dull-9 20%",
    gridColumn: "1 / -1",
    alignItems: "center",
    justifyItems: "center",
    children: [
      (0, _.jsx)(_, {
        justifySelf: "start",
        children: (0, _.jsx)(_, {
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: "center",
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: "center",
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          variant: "ghost",
          color: "dull",
          loading: _.isPending,
          onClick: () =>
            _.mutate({
              _: _,
            }),
          children: _.Localize("#MyOrders_Cancel"),
        }),
      }),
      _.isError &&
        (0, _.jsx)(_, {
          gridColumn: "1 / -1",
          marginBottom: "2",
          children: (0, _.jsx)(_, {
            _: "div",
            color: "text-red",
            size: "2",
            children: _.Localize("#CancelBuyOrder_GenericError"),
          }),
        }),
    ],
  });
}
function _(_) {
  let {
    _: _,
    description: _,
    appid: _,
    price: _,
    quantity: _,
    cancelMutation: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: "subgrid",
    background: "dull-9 20%",
    gridColumn: "1 / -1",
    alignItems: "center",
    justifyItems: "center",
    children: [
      (0, _.jsx)(_, {
        justifySelf: "start",
        gridColumn: "1 / -1",
        children: (0, _.jsx)(_, {
          compact: !0,
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: "center",
        children: (0, _.jsx)(_, {
          children: _ ? _.Localize("#MyOrders_QuantityWithValue", _) : "",
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: "center",
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)(_, {
        justifySelf: "end",
        children: (0, _.jsx)(_, {
          variant: "ghost",
          color: "dull",
          loading: _.isPending,
          onClick: () =>
            _.mutate({
              _: _,
            }),
          children: _.Localize("#MyOrders_Cancel"),
        }),
      }),
      _.isError &&
        (0, _.jsx)(_, {
          gridColumn: "1 / -1",
          marginBottom: "2",
          children: (0, _.jsx)(_, {
            _: "div",
            color: "text-red",
            size: "2",
            children: _.Localize("#CancelBuyOrder_GenericError"),
          }),
        }),
    ],
  });
}
function _(_) {
  let { orders: _, ..._ } = _,
    [_, _] = (0, _.useState)(null),
    _ = _() === "initial";
  if (_.length === 0)
    return (0, _.jsx)(_, {
      gridColumn: "1 / -1",
      background: "dull-9 20%",
      children: (0, _.jsx)(_, {
        contrast: "note",
        children: _.Localize("#MyOrders_NoSellOrders_Item"),
      }),
    });
  let _ = (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        textAlign: "start",
        children: _.Localize("#MyOrders_GridHeader_Name"),
      }),
      (0, _.jsx)(_, {
        children: _.Localize("#MyOrders_GridHeader_DateListed"),
      }),
      (0, _.jsx)(_, {
        children: _.Localize("#MyOrders_GridHeader_Price"),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ && _,
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            order: _,
            onRemove: _,
            ..._,
          },
          _.listingid,
        ),
      ),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(null),
          ..._,
        }),
    ],
  });
}
function _(_) {
  let {
      order: {
        listingid: _,
        rtListed: _,
        strBuyerPrice: _,
        strSellerPrice: _,
        appid: _,
        classid: _,
        assetid: _,
      },
      onRemove: _,
      loadDescriptionByClassID: _,
      focusedSellOrderAssetID: _,
    } = _,
    _ = !!_ && _ === _,
    _ = _(_, _, _),
    _ = () =>
      _({
        listingID: _,
        description: _.data || void 0,
      }),
    _ = _() === "initial",
    _ = {
      highlight: _,
      description: _.data,
      appid: _,
      onRemove: _,
      buyerPrice: _,
      sellerPrice: _,
      timeListed: _,
    };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let {
    highlight: _,
    appid: _,
    description: _,
    buyerPrice: _,
    sellerPrice: _,
    onRemove: _,
    timeListed: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: "subgrid",
    background: _ ? "accent-9 20%" : "dull-9 20%",
    gridColumn: "1 / -1",
    alignItems: "center",
    justifyItems: "center",
    children: [
      (0, _.jsx)(_, {
        justifySelf: "start",
        children: (0, _.jsx)(_, {
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: "center",
        children: (0, _.jsx)(_, {
          children: new Intl.DateTimeFormat().format(_ * 1e3),
        }),
      }),
      (0, _.jsxs)(_, {
        textAlign: "center",
        children: [
          (0, _.jsx)(_, {
            _: "div",
            children: _,
          }),
          (0, _.jsxs)(_, {
            contrast: "note",
            children: ["(", _, ")"],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          variant: "ghost",
          color: "dull",
          onClick: _,
          children: _.Localize("#MyOrders_Cancel"),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    highlight: _,
    appid: _,
    description: _,
    buyerPrice: _,
    sellerPrice: _,
    onRemove: _,
    timeListed: _,
  } = _;
  return (0, _.jsxs)(_, {
    columns: "subgrid",
    background: _ ? "accent-9 20%" : "dull-9 20%",
    gridColumn: "1 / -1",
    alignItems: "center",
    justifyItems: "center",
    children: [
      (0, _.jsx)(_, {
        justifySelf: "start",
        gridColumn: "1 / -1",
        children: (0, _.jsx)(_, {
          compact: !0,
          appid: _,
          description: _,
        }),
      }),
      (0, _.jsx)(_, {
        textAlign: "center",
        children: (0, _.jsx)(_, {
          children: new Intl.DateTimeFormat().format(_ * 1e3),
        }),
      }),
      (0, _.jsxs)(_, {
        textAlign: "center",
        children: [
          (0, _.jsx)(_, {
            _: "div",
            children: _,
          }),
          (0, _.jsxs)(_, {
            contrast: "note",
            children: ["(", _, ")"],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        justifySelf: "end",
        children: (0, _.jsx)(_, {
          variant: "ghost",
          color: "dull",
          onClick: _,
          children: _.Localize("#MyOrders_Cancel"),
        }),
      }),
    ],
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    background: "dull-9 20%",
    textAlign: "center",
    ..._,
    children: (0, _.jsx)(_, {
      contrast: "subtitle",
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    paddingY: "1",
    paddingX: "2",
    ..._,
  });
}
function _(_) {
  let { appid: _, description: _, compact: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return (0, _.jsxs)(_, {
    gap: "2",
    align: "center",
    children: [
      !_ &&
        _ &&
        (0, _.jsx)(_, {
          width: "48px",
          height: "48px",
          objectFit: "contain",
          src: _(_),
          alt: "",
        }),
      !_ &&
        !_ &&
        (0, _.jsx)(_, {
          width: "48px",
          height: "48px",
          radius: "md",
        }),
      (0, _.jsxs)(_, {
        direction: "column",
        children: [
          !_ &&
            (0, _.jsx)(_, {
              width: "18ch",
              height: "20px",
              radius: "md",
            }),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  size: "4",
                  contrast: "title",
                  truncate: !0,
                  weight: "medium",
                  children: _.market_name,
                }),
                (0, _.jsx)(_, {
                  size: "3",
                  truncate: !0,
                  children: _?.name,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1);
var _ = "BdbYXccVa-c-";
var _ = "LL0I8Yv1KjM-";
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let { currency: _, orders: _ } = _,
    _ = _.slice(0, 6),
    _ = _.length < _.length;
  return (
    _ && _.pop(),
    (0, _.jsxs)("table", {
      className: _,
      children: [
        (0, _.jsx)("thead", {
          children: (0, _.jsxs)("tr", {
            children: [
              (0, _.jsx)("th", {
                children: (0, _.jsx)(_, {
                  size: "4",
                  children: _.Localize("#OrderBook_Table_Price"),
                }),
              }),
              (0, _.jsx)("th", {
                children: (0, _.jsx)(_, {
                  size: "4",
                  children: _.Localize("#OrderBook_Table_Quantity"),
                }),
              }),
            ],
          }),
        }),
        (0, _.jsxs)("tbody", {
          children: [
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  quantity: _.quantity,
                  price: _(_.price, _),
                },
                _.price,
              ),
            ),
            _ &&
              (0, _.jsx)(_, {
                featuredOrders: _,
                ..._,
              }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { price: _, quantity: _ } = _,
    _ = new Intl.NumberFormat();
  return (0, _.jsxs)("tr", {
    children: [
      (0, _.jsx)("td", {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      (0, _.jsx)("td", {
        children: (0, _.jsx)(_, {
          children: _.format(_),
        }),
      }),
    ],
  });
}
function _(_) {
  let { featuredOrders: _, totalOrders: _, orders: _, currency: _ } = _,
    _ =
      _[0].price < _[1].price
        ? "#OrderBook_Table_PriceOrMore"
        : "#OrderBook_Table_PriceOrLess",
    _ = _[_.length].price,
    _ = _.reduce((_, _) => _ + _.quantity, 0),
    _ = _ - _,
    _ = new Intl.NumberFormat();
  return (0, _.jsxs)("tr", {
    children: [
      (0, _.jsx)("td", {
        children: (0, _.jsx)(_, {
          children: _.Localize(_, _(_, _)),
        }),
      }),
      (0, _.jsx)("td", {
        children: (0, _.jsx)(_, {
          children: _.format(_),
        }),
      }),
    ],
  });
}
function _() {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)();
  return (
    (0, _.useEffect)(() => {
      _(!1), _(_);
    }, [_]),
    {
      flash: (0, _.useCallback)(() => {
        _(!0), _(void 0);
      }, []),
      strClassName: _,
    }
  );
}
function _(_) {
  let { className: _, ..._ } = _,
    { flash: _, strClassName: _ } = _(),
    _ = (0, _.useRef)(!1);
  return (
    (0, _.useEffect)(() => {
      _.current ? _() : (_.current = !0);
    }, [_, _.children]),
    (0, _.jsx)(_, {
      ..._,
      className: (0, _.default)(_, _),
    })
  );
}
var _ = _(_(), 1);
var _ = "dD-wLaRJrJg-";
var _ = "_7oo35OlT0IA-";
var _ = _(_(), 1);
function _(_) {
  let { description: _, ..._ } = _,
    _ = _.appid,
    _ = _.market_name || _.name,
    _ = _.market_hash_name;
  if (!_ || !_ || !_) return null;
  let _ = "Cancel all listings",
    _ = "Delete item bucket";
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      options: [_, _],
      selectedValue: "Admin",
      onSelectionChange: (_) => {
        switch (_) {
          case _:
            confirm(
              `Are you sure you want to cancel all listings for "${_}"?`,
            ) && _(_, _);
            break;
          case _:
            confirm(
              `Are you sure you want to remove "${_}" from the market index? If there are listings for this item, please cancel them first or the bucket will come back.`,
            ) && _(_, _);
            break;
        }
      },
      size: "1",
    }),
  });
}
async function _(_, _) {
  try {
    let _ = new FormData();
    _.set("appid", _.toString()),
      _.set("market_hash_name", _),
      _.set("sessionid", _());
    let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/cancelalllistings/`, {
      method: "POST",
      body: _,
    });
    if (!_._) throw _.status;
    alert(
      "The cancel request was received. The Market servers have begun working on canceling all listings.",
    );
  } catch {
    alert("Failed to cancel");
  }
}
async function _(_, _) {
  try {
    let _ = new FormData();
    _.set("appid", _.toString()),
      _.set("market_hash_name", _),
      _.set("sessionid", _());
    let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/deleteitembucket`, {
      method: "POST",
      body: _,
    });
    if (!_._) throw _.status;
    alert(
      "The request was received. It should be removed from the search index shortly.",
    );
  } catch {
    alert("Failed to delete");
  }
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_, _) {
  let _ = [
      {
        href: _.Home(),
        label: _.Localize("#Breadcrumbs_Home"),
      },
    ],
    _ = _.appid,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    );
  _ &&
    _.push({
      href: _.AppHome(_),
      label: _?.name ?? _.toString(),
    });
  let _;
  _ === 753 && _?.market_fee_app && (_ = _.market_fee_app);
  let { data: _ } = _(
    _
      ? {
          appid: _,
        }
      : void 0,
  );
  if (
    (_ &&
      _ &&
      _.push({
        href: _.Search({
          search: `appid=${_}&category_Game=app_${_}`,
        }),
        label: _?.name ?? _.toString(),
      }),
    _(_) && _?.tags)
  ) {
    let _ = _.tags.find(({ category: _ }) => _ === "Weapon"),
      _ = _.tags.find(({ category: _ }) => _ === "Type");
    _ &&
      _ &&
      (_.push({
        href: _.Search({
          search: `appid=${_}&category_${_.category}=${_.internal_name}`,
        }),
        label: _.localized_tag_name,
        key: `${_.category}_${_.internal_name}`,
      }),
      _.push({
        href: _.Search({
          search: `appid=${_}&category_${_.category}=${_.internal_name}`,
        }),
        label: _.localized_tag_name,
        key: `${_.category}_${_.internal_name}`,
      }));
  }
  return (
    _ &&
      _.push({
        href: _.Item(_.appid, _.market_bucket_group_id || _.market_hash_name),
        label: _.market_bucket_group_name || _.market_name || _.name,
      }),
    _
  );
}
function _(_) {
  let { query: _, item: _ } = _,
    _ = _(_, _),
    _ = {
      color: "text-body",
      contrast: "body",
    },
    _ = {
      color: "text-body",
      contrast: "note",
    };
  return (0, _.jsx)(_, {
    ..._,
    ..._,
    children: _.map((_, _) =>
      (0, _.jsxs)(
        _.default.Fragment,
        {
          children: [
            (0, _.jsx)(_, {
              ..._,
              children:
                _ > 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: " > ",
                }),
            }),
            (0, _.jsx)(_, {
              ..._,
              href: _.href,
              children: _.label,
            }),
          ],
        },
        _.key || _.label,
      ),
    ),
  });
}
var _ = _(_(), 1);
var _ = "PUN3cA5Szi8-";
var _ = "BVGGLiRTZmU-";
var _ = "Hpj6UFb1mVI-";
var _ = "gPFt7CPQkDM-";
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { buckets: _, description: _ } = _;
  return _.length
    ? _(_)
      ? (0, _.jsx)(_, {
          ..._,
        })
      : _.length === 1
        ? null
        : (0, _.jsx)(_, {
            ..._,
          })
    : null;
}
function _(_) {
  let { value: _, onChange: _, buckets: _ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = new Intl.Collator(_(), {
        numeric: !0,
      });
      return [..._].sort((_, _) =>
        _.compare(_.localized_name || "", _.localized_name || ""),
      );
    }, [_]),
    _ = {
      initial: 0,
      _: 2,
      _: 5,
      _: 5,
    },
    _ = _(),
    _ = _.length > _[_],
    _ = (_) =>
      _.localized_name_inside_group
        ? _.localized_name_inside_group
        : _.localized_name;
  if (_ && _.length > 0) {
    let _ = _.length > 8 ? _ : _;
    return (0, _.jsx)(_, {
      justify: "center",
      marginBottom: "1",
      children: (0, _.jsx)(_, {
        selectedValue: _.find(({ bucket_id: _ }) => _ === _) || null,
        onSelectionChange: (_) => _(_ ? _.bucket_id : null),
        options: _,
        placeholder: _.Localize("#ItemBucketPicker_Overflow_Placeholder"),
        filterPlaceholder: _.Localize(
          "#ItemBucketPicker_Overflow_FilterPlaceholder",
        ),
        getOptionLabel: _,
      }),
    });
  }
  return (0, _.jsx)(_, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          selected: _ === _.bucket_id,
          onSelect: () => _(_ === _.bucket_id ? null : _.bucket_id || ""),
          title: _(_),
        },
        _.bucket_id,
      ),
    ),
  });
}
function _(_) {
  let {
      buckets: _,
      filter: _,
      onFilterChange: _,
      onChange: _,
      description: _,
      onPreviewBucketChange: _,
      onFallbackBucketChange: _,
    } = _,
    _ = _(_.appid, _),
    _ = _() === "initial";
  if (!_ || !_ || !_) return null;
  let _ = _(_),
    { rgWears: _, qualityFacet: _, bHasSouvenir: _, bHasStatTrak: _ } = _,
    _ = _.facets[_[0].category] && Object.keys(_.facets[_[0].category]),
    _ = _ && _.length === 1 ? _[0] : null,
    _ = (_) => {
      let _ = {
        ..._,
        facets: {
          ..._.facets,
        },
      };
      _ === _.tag
        ? (delete _.facets[_.category], _(null))
        : ((_.facets[_.category] = {
            [_.tag]: !0,
          }),
          _[_] && _(_[_]._)),
        _(_);
    },
    _ = (_, _) => {
      let _ = {
        ..._,
        facets: {
          ..._.facets,
        },
      };
      if (
        (_
          ? (_.facets[_.name] = {
              [_]: !0,
            })
          : delete _.facets[_.name],
        _(_),
        _ && _(void 0),
        _)
      ) {
        let _ = _ ? _ : "normal",
          _ = _.filter(
            (_) =>
              _.filters &&
              _.filters.some(([_, _]) => _ === "Quality" && _ === _),
          ),
          _ = _(_);
        _?.bucket_id && _(_.bucket_id);
      }
    },
    _;
  _ ? (_ = "strange") : _ && (_ = "tournament");
  let _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(_, {
            quality: "strange",
            facet: _,
            filter: _,
            onToggle: _,
          }),
        _ &&
          (0, _.jsx)(_, {
            quality: "tournament",
            facet: _,
            filter: _,
            onToggle: _,
          }),
      ],
    }),
    _ = _ === "normal" || _ === _,
    _ = (_) => {
      if (_[_]) return () => _(_);
    },
    _ = (0, _.jsxs)(_, {
      onMouseLeave: _ ? () => _(void 0) : void 0,
      paddingX: {
        initial: "2",
        _: void 0,
      },
      children: [
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.appid,
              wear: _,
              selected: _.tag === _,
              onSelect: _(_),
              onMouseEnter: !_ || !_[_] ? void 0 : () => _(_[_]._),
              activeType: _,
              qualityFacet: _,
              specialType: _,
            },
            _.tag,
          ),
        ),
        !_ && _,
      ],
    });
  return _
    ? (0, _.jsxs)(_, {
        direction: "column",
        gap: {
          initial: "1",
          _: "3",
        },
        children: [
          (0, _.jsx)(_, {
            overflow: "auto",
            maxWidth: "100vw",
            children: _,
          }),
          !_ &&
            (0, _.jsx)(_, {
              alignSelf: "center",
              children: _,
            }),
        ],
      })
    : _;
}
function _(_) {
  let {
      appid: _,
      wear: _,
      activeType: _,
      qualityFacet: _,
      specialType: _,
      ..._
    } = _,
    { tag: _, label: _, color: _ } = _;
  return (0, _.jsx)(
    _,
    {
      title: _,
      subtitle: (0, _.jsx)(_, {
        wear: _,
        activeType: _,
        qualityFacet: _,
        specialType: _,
      }),
      color: _,
      ..._,
    },
    _,
  );
}
function _(_) {
  let {
      wear: { normal: _, strange: _, tournament: _ },
      activeType: _,
      qualityFacet: _,
      specialType: _,
    } = _,
    _ = _ && _.tags && _.tags[_],
    _ = _ && `#${_.color}`,
    _ = _ || _,
    _ = "3",
    _ = "1",
    [_, _] = _ === "normal" ? [_, _] : [_, _];
  return (0, _.jsxs)(_, {
    direction: "column",
    align: "center",
    children: [
      (0, _.jsx)(_, {
        align: "center",
        size: _,
        title: _?.label,
        children: _?.price ? _.price : "--",
      }),
      !!_ &&
        (0, _.jsx)(_, {
          align: "center",
          size: _,
          style: {
            color: _,
          },
          title: _?.label,
          children: _?.price ? _.price : "--",
        }),
    ],
  });
}
function _(_) {
  let { style: _, ..._ } = _;
  return (0, _.jsx)(_, {
    align: "center",
    style: {
      ..._,
      transition: "font-size 100ms ease-in-out",
    },
    ..._,
  });
}
function _(_) {
  let { quality: _, facet: _, filter: _, onToggle: _ } = _,
    _ = _.tags[_],
    _ = _.facets[_.name] && _.facets[_.name][_];
  return (0, _.jsxs)(_, {
    align: "center",
    gap: "2",
    children: [
      (0, _.jsx)(_, {
        style: {
          color: _.color ? `#${_.color}` : void 0,
        },
        children: _.localized_name,
      }),
      (0, _.jsx)(_, {
        value: _,
        onChange: (_) => _(_, _),
      }),
    ],
  });
}
function _(_) {
  let { title: _, subtitle: _, selected: _, onSelect: _, color: _, ..._ } = _,
    _ = !_,
    _ = _() === "initial",
    _ = "subtitle";
  return (
    _ && (_ = "title"),
    _ && (_ = "note"),
    (0, _.jsxs)(_, {
      position: "relative",
      className: (0, _.default)(_, _ && _),
      style: _
        ? {
            "--tab-tag-color": _,
          }
        : void 0,
      cursor: _ ? void 0 : "pointer",
      "data-selected": !!_,
      paddingY: "3",
      paddingX: "4",
      onClick: _,
      ..._,
      children: [
        !_ &&
          _ &&
          !!_ &&
          (0, _.jsx)(_, {
            className: _,
          }),
        (0, _.jsxs)(_, {
          direction: "column",
          align: "center",
          justify: "center",
          zIndex: "0",
          gap: "1",
          children: [
            (0, _.jsx)(_, {
              weight: _ ? "medium" : void 0,
              contrast: _,
              align: "center",
              whiteSpace: "nowrap",
              children: _,
            }),
            (0, _.jsx)(_, {
              size: "2",
              contrast: _,
              children: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    gap: "3",
    justify: {
      initial: "start",
      _: "center",
    },
    align: "center",
    ..._,
  });
}
var _ = _(_(), 1);
function _(_) {
  let {
      buckets: _,
      myOrders: _,
      listingQuery: _,
      loadDescription: _,
      loadDescriptionByClassID: _,
      loadPriceHistory: _,
      initialFallbackBucketID: _,
      focusedSellOrderAssetID: _,
    } = _,
    _ = _ && _.rgBuyOrders.length + _.rgSellOrders.length > 0,
    [_, _] = (0, _.useState)(_),
    _ = _(_.appid, _),
    _ = (0, _.useMemo)(() => (_.data ? _(_.data) : null), [_.data]),
    _ = _(_.appid, _, _, {
      placeholderData: (_) => _,
    }),
    _ = _(_.appid, _, _, {
      placeholderData: (_) => _,
    }),
    _ = _(),
    _ = _() === "initial";
  if (!_.data) return null;
  let _ = _.data,
    _ = _ && _.rgBuyOrders.length + _.rgSellOrders.length > 0,
    _ = _.container_properties?.contained_items || [],
    _ = _.length > 0,
    _ = (_) => {
      _ && _(_);
    };
  return (0, _.jsxs)(_, {
    marginLeft: {
      initial: "0",
      _: "2",
    },
    marginRight: {
      initial: "0",
      _: "2",
    },
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          direction: "column",
          children: [
            (0, _.jsxs)(_, {
              direction: "column",
              gap: "1",
              marginX: {
                initial: "2",
                _: "1",
                _: "0",
              },
              marginTop: "1",
              marginBottom: "3",
              children: [
                (0, _.jsx)(_, {
                  query: _,
                  item: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    description: _,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    orders: _,
                    loadDescription: _,
                    loadDescriptionByClassID: _,
                    focusedSellOrderAssetID: _,
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              description: _,
              children:
                _ &&
                (0, _.jsx)(_, {
                  description: _,
                  marginTop: "3",
                }),
            }),
          ],
        }),
      }),
      (0, _.jsxs)(_, {
        flexGrow: "1",
        marginTop: {
          initial: "0",
          _: "3",
        },
        children: [
          (0, _.jsx)(_, {
            buckets: _,
            description: _,
            value: _.market_hash_name,
            onChange: _,
          }),
          (0, _.jsx)(_, {
            background: "dull-3",
            paddingY: {
              initial: "2",
              _: "5",
            },
            className: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                direction: "column",
                gap: "6",
                marginLeft: "2",
                marginRight: "2",
                children: [
                  (0, _.jsx)(_, {
                    appid: _.appid,
                    buckets: _,
                    loadDescription: _,
                    activeBucketID: _,
                    description: _,
                    orderBook: _,
                  }),
                  (0, _.jsxs)(_, {
                    direction: "column",
                    gap: "6",
                    children: [
                      _.data &&
                        (0, _.jsx)(_, {
                          priceHistory: _.data,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(_, {
                          book: _,
                        }),
                      _ &&
                        (0, _.jsx)(_, {
                          appid: _.appid || 0,
                          contents: _,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { description: _, children: _ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => _((_) => Math.max(_.contentRect.height, _)),
        [],
      ),
    );
  if (!_) return null;
  let _ = _(_);
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsxs)(_, {
      direction: "column",
      gap: {
        initial: "0",
        _: "3",
      },
      ref: _,
      minHeight: `${_}px`,
      children: [
        (0, _.jsxs)(_, {
          background: "dull-5",
          padding: "3",
          radius: "sm",
          direction: {
            initial: "column",
            _: "row",
          },
          overflow: "hidden",
          children: [
            (0, _.jsxs)(_, {
              radius: "sm",
              padding: "3",
              justify: "center",
              align: "center",
              flexGrow: "1",
              flexBasis: "50%",
              maxHeight: "330px",
              position: "relative",
              children: [
                (0, _.jsx)(_, {
                  src: _,
                }),
                (0, _.jsx)(_, {
                  src: _,
                  alt: "",
                  height: "auto",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  zIndex: "1",
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              flexGrow: "1",
              children: [
                (0, _.jsx)(_, {
                  description: _,
                }),
                (0, _.jsx)(_.MarketActions, {}),
                _,
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          justify: "center",
          padding: "4",
          radius: "sm",
          background: "dull-3 50%",
          children: (0, _.jsx)(_, {
            contrast: "description",
            align: "center",
            children: _.Localize("#CommodityExplanation"),
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { description: _ } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsxs)(_, {
      direction: "column",
      justify: "center",
      minWidth: "0",
      gap: "2",
      paddingX: {
        initial: "1",
        _: "3",
      },
      paddingY: "3",
      children: [
        (0, _.jsx)(_.Name, {}),
        (0, _.jsx)(_.GameInfo, {
          hrefGame: _.AppHome(_.appid),
        }),
      ],
    }),
  });
}
function _(_) {
  let { src: _ } = _;
  return (0, _.jsx)(_, {
    style: {
      "--img-url": `url("${_}")`,
    },
    className: _,
  });
}
function _(_) {
  let {
      description: _,
      orderBook: _,
      appid: _,
      buckets: _,
      loadDescription: _,
      activeBucketID: _,
    } = _,
    _ = !_().bEligible;
  if (!_ || !_) return null;
  let _ = _(_),
    _ = _(_),
    _ = _ || _,
    _ = _ || _,
    _ = new Intl.NumberFormat(),
    _ = _.Localize("#OrderBook_SellOrder_Description_None"),
    _ = _.cSellOrders > 0;
  _ &&
    (_ = _.LocalizeReact(
      "#OrderBook_SellOrder_Description",
      (0, _.jsx)(_, {
        contrast: "title",
        children: _.format(_.cSellOrders),
      }),
      (0, _.jsx)(_, {
        contrast: "title",
        children: _(_.amtMinSellOrder || 0, _.eCurrency),
      }),
    ));
  let _ = _.Localize("#OrderBook_BuyOrder_Description_None"),
    _ = _.cBuyOrders > 0;
  return (
    _ &&
      (_ = _.LocalizeReact(
        "#OrderBook_BuyOrder_Description",
        (0, _.jsx)(_, {
          contrast: "title",
          children: _.format(_.cBuyOrders),
        }),
        (0, _.jsx)(_, {
          contrast: "title",
          children: _(_.amtMaxBuyOrder || 0, _.eCurrency),
        }),
      )),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (_ || _) &&
          (0, _.jsx)(_, {
            buy: _,
            sell: _,
          }),
        (0, _.jsxs)(_, {
          gap: "3",
          wrap: "wrap",
          children: [
            (0, _.jsxs)(_, {
              background: "dull-6",
              padding: "5",
              direction: "column",
              gap: "3",
              flexGrow: "1",
              align: "center",
              children: [
                (0, _.jsxs)(_, {
                  direction: "column",
                  gap: "2",
                  justify: "start",
                  children: [
                    (0, _.jsx)(_, {
                      size: "4",
                      contrast: "body",
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        orders: _.rgSellOrders,
                        currency: _.eCurrency,
                        totalOrders: _.cSellOrders,
                      }),
                  ],
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    appid: _,
                    buckets: _,
                    activeBucketID: _,
                    loadDescription: _,
                    color: "green",
                    variant: "vibrant",
                    size: {
                      initial: "2",
                      _: "3",
                    },
                    minWidth: {
                      initial: "90%",
                      _: "150px",
                    },
                    children: _.Localize("#Button_Buy"),
                  }),
              ],
            }),
            (0, _.jsxs)(_, {
              background: "dull-6",
              padding: "5",
              direction: "column",
              gap: "3",
              flexGrow: "1",
              align: "center",
              children: [
                (0, _.jsxs)(_, {
                  direction: "column",
                  justify: "start",
                  gap: "2",
                  children: [
                    (0, _.jsx)(_, {
                      size: "4",
                      contrast: "body",
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        orders: _.rgBuyOrders,
                        currency: _.eCurrency,
                        totalOrders: _.cBuyOrders,
                      }),
                  ],
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    description: _,
                  }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { description: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _() === "initial",
    _ = {
      color: "blue",
      variant: "vibrant",
      size: {
        initial: "2",
        _: "3",
      },
      minWidth: {
        initial: "90%",
        _: "150px",
      },
      children: _.Localize("#Button_Sell"),
    };
  if (!_.logged_in) {
    let _ = new URL(location.href);
    _.searchParams.set("buy", "1");
    let _ = `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`;
    return (0, _.jsx)(_, {
      ..._,
      href: _,
    });
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        href: _(_, !1),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            ..._,
            onClick: () => _(!0),
            children: _.Localize("#Button_Sell"),
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
              description: _,
            }),
        ],
      });
}
function _(_) {
  let { description: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(!0);
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsxs)(_, {
      direction: "column",
      padding: "2",
      width: {
        initial: void 0,
        _: "min(90vw, 1200px)",
      },
      children: [
        (0, _.jsxs)(_, {
          justify: "between",
          align: "center",
          marginBottom: "2",
          children: [
            (0, _.jsx)(_, {
              _: "div",
              contrast: "title",
              size: "3",
              truncate: !0,
              children: _.Localize("#SellDialog_Frame_Title"),
            }),
            (0, _.jsx)(_, {
              cursor: "pointer",
              onClick: _,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          flexGrow: "1",
          children: [
            _ &&
              (0, _.jsx)(_, {
                minHeight: "20vh",
                align: "center",
                justify: "center",
                children: (0, _.jsx)(_, {
                  size: "5",
                }),
              }),
            (0, _.jsx)("iframe", {
              style: {
                width: "min(100%, 1200px)",
                height: _ ? "0" : "90vh",
                visibility: _ ? "hidden" : "visible",
                border: "none",
              },
              src: _(_, !0),
              title: _.Localize("#SellDialog_Frame_Title"),
              onLoad: () => _(!1),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_, _) {
  let { appid: _, name: _ } = _;
  return `${_.COMMUNITY_BASE_URL}my/inventory/?${_ ? "modal=1&" : ""}market=1#${_}___${encodeURIComponent(_ ?? "")}`;
}
function _(_) {
  let { contents: _, appid: _ } = _;
  return (0, _.jsxs)(_, {
    marginTop: "2",
    children: [
      (0, _.jsx)(_, {
        size: "4",
        children: _.Localize("#Container_ContentsLabel"),
      }),
      (0, _.jsx)(_, {
        gap: "2",
        columns: "repeat(auto-fill, minmax(250px, 1fr))",
        autoRows: "1fr",
        marginTop: "1",
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _,
              _: _,
            },
            _.instanceid || _.classid,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, _: _ } = _,
    _ = _(_, _);
  if (!_.data) return null;
  let {
      name: _,
      market_name: _,
      market_hash_name: _,
      market_bucket_group_id: _,
      type: _,
    } = _.data,
    _ = _(_.data),
    _ = _.Item(_, _ || _);
  return (0, _.jsx)(_, {
    _: _,
    external: !1,
    className: _(),
    children: (0, _.jsxs)(_, {
      background: "dull-8",
      radius: "sm",
      padding: "3",
      align: "center",
      gap: "2",
      cursor: "pointer",
      children: [
        (0, _.jsx)(_, {
          width: "64px",
          height: "64px",
          objectFit: "contain",
          src: _,
          alt: "",
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              _: "div",
              size: "4",
              contrast: "title",
              weight: "medium",
              children: _ || _,
            }),
            _ &&
              (0, _.jsx)(_, {
                _: "div",
                size: "2",
                children: _,
              }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { buy: _, sell: _ } = _,
    _ = _.Localize(
      _ && _ ? "#Item_CountryBuySellRestricted" : "#Item_CountryBuyRestricted",
    );
  return (0, _.jsx)(_, {
    children: _,
  });
}
var _ = _(_(), 1);
var _ = "-gFtgR4yh-0-";
var _ = "_1JeNczj8DKA-";
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.default.memo(function (_) {
    let {
        filter: _,
        onFilterChange: _,
        facetingInfo: _,
        description: _,
        relevantAssetProperties: _,
        open: _,
        onShowFilters: _,
      } = _,
      _ = _(),
      [_, _] = (0, _.useState)(),
      _ = (_, _) => {
        _ ? (_(_), _(void 0)) : _(_);
      },
      _ = _ || _,
      _ =
        _.price[0] !== 0 ||
        _.price[1] !== _.maxPrice ||
        Object.keys(_.facets).length > 0 ||
        Object.keys(_.accessories).length > 0,
      _ = () => {
        _(
          {
            ..._,
            facets: {},
            accessories: {},
            price: [0, _.maxPrice],
          },
          !0,
        );
      };
    return (0, _.jsxs)(_, {
      open: _,
      onClose: () => _(!1),
      children: [
        (0, _.jsx)(_.Title, {
          children: _.Localize("#ListingFilter_Title"),
        }),
        (0, _.jsx)(_, {
          ..._,
        }),
        (0, _.jsx)(_, {
          filter: _,
          onFilterChange: _,
          facetingInfo: _,
          description: _,
          relevantAssetProperties: _,
        }),
        _ &&
          (0, _.jsx)(_.ResetButton, {
            onReset: _,
          }),
      ],
    });
  });
function _(_) {
  let {
    filter: _,
    onFilterChange: _,
    facetingInfo: _,
    description: _,
    relevantAssetProperties: _ = {},
  } = _;
  _(_.app, "Attempted to render app filters without an app!");
  let _ = _(_.app.appid),
    _ = (0, _.useMemo)(() => _(_.trigger), [])(_?.tags),
    _ = _(_ ? _.app.appid : 0),
    _ = _(_.app.appid);
  if (!_.isSuccess || _.isError || !_.isSuccess) return null;
  let _ = (_.data?.property_schemas || []).filter((_) =>
      _.hide_from_description ? !1 : !!_[_._],
    ),
    _ = [];
  return (
    _ && _.isSuccess && (_ = _.data),
    (0, _.jsx)(_, {
      appid: _.app.appid,
      facets: _.data,
      facetingInfo: _,
      accessories: _,
      assetProperties: _,
      state: _,
      onStateChange: _,
    })
  );
}
function _(_) {
  let { textFilter: _, onTextFilterChange: _ } = _,
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.useCallback)(() => {
      _ !== void 0 && (_(_), _(void 0));
    }, [_, _]);
  return (
    (0, _.useEffect)(() => {
      if (_) {
        let _ = window.setTimeout(() => _(), 500);
        return () => window.clearTimeout(_);
      } else return () => {};
    }, [_, _]),
    (0, _.jsx)(_, {
      dullColor: {
        8: "var(--color-dull-6)",
        9: "var(--color-dull-7)",
      },
      children: (0, _.jsx)(_, {
        value: _ ?? _ ?? "",
        onTextChange: _,
        onBlur: _,
        placeholder: _.Localize("#Listings_TextFilter_Placeholder"),
        variant: "inset-focus",
        maxLength: 90,
      }),
    })
  );
}
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let { title: _, children: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_, {
    marginX: "3",
    marginTop: "2",
    ..._,
    children: [
      (0, _.jsxs)(_, {
        background: "dull-7",
        radius: "md",
        padding: "2",
        align: "center",
        justify: "between",
        minWidth: "0",
        onClick: () => _((_) => !_),
        children: [
          (0, _.jsx)(_, {
            contrast: "title",
            children: _,
          }),
          (0, _.jsx)(_, {
            direction: _ ? "up" : "down",
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          background: "dull-7",
          padding: "2",
          marginTop: "1",
          radius: "md",
          children: _,
        }),
    ],
  });
}
var _ = _(_(), 1);
function _(_) {
  let {
      listingQuery: _,
      buckets: _,
      initialSelectedBucketID: _,
      initialFallbackBucketID: _,
      loadListings: _,
      initialSelectedListing: _,
      relevantAssetProperties: _,
      loadDescription: _,
      loadDescriptionByClassID: _,
      loadPriceHistory: _,
      myOrders: _,
      focusedSellOrderAssetID: _,
    } = _,
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(_ || void 0),
    [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)(window.history?.state?.marketQuery || _),
    _ = _(_.appid, _ || _ || _, _, {
      placeholderData: (_) => _,
    }),
    _ = _ && _.rgBuyOrders.length + _.rgSellOrders.length > 0,
    _ = _(),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = new URL(window.location.href);
        (_.search = _(_, _.maxPrice).toString()),
          _(
            (_) => ({
              ..._,
              marketQuery: _,
            }),
            _,
          ),
          _(_);
      },
      [_],
    ),
    [_, _] = _(),
    _ = (0, _.useCallback)(
      (_) => {
        _({
          ..._,
          sort: _ || void 0,
        });
      },
      [_, _],
    ),
    _ = (0, _.useRef)(!1);
  (0, _.useEffect)(() => {
    if (!_.current) {
      _.current = !0;
      return;
    }
    let _ = new URL(window.location.href);
    _.sort
      ? (_.searchParams.set("sort", _.sort.field.toString()),
        _.sort.direction === void 0
          ? _.searchParams.delete("dir")
          : _.searchParams.set("dir", _.sort.direction.toString()),
        _.sort.field === _.k_EMarketListingSortField_AssetProperty
          ? (_(
              typeof _.sort.assetpropertyid == "number",
              "Property sort must include property id",
            ),
            _.searchParams.set("propertyid", _.sort.assetpropertyid.toString()))
          : _.searchParams.delete("propertyid"),
        _((_) => ({
          ..._,
          itemSort: _.sort?.field,
          itemSortDir: _.sort?.direction,
          itemSortProperty: _.sort?.assetpropertyid,
        })))
      : (_.searchParams.delete("sort"),
        _.searchParams.delete("dir"),
        _((_) => ({
          ..._,
          itemSort: void 0,
          itemSortDir: void 0,
          itemSortProperty: void 0,
        }))),
      _(_);
  }, [_.sort, _]);
  let [_, _] = (0, _.useState)(() => _(_, _)),
    _ = (0, _.useCallback)(
      (_) => {
        _({
          ..._,
          ..._(_.strItemName, _, _),
        }),
          _(_);
      },
      [_, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _ !== _ &&
          (_({
            ..._,
            strItemName: _ || _.strItemName,
            disableGrouping: !!_,
          }),
          _(_ || void 0));
      },
      [_, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) =>
        _({
          ..._,
          strQuery: _,
        }),
      [_, _],
    ),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _() === "initial",
    _ = _(_, _),
    _ = _(_.data),
    _ = !_().bEligible;
  if (!_.data) return null;
  let _ = _.data,
    _ = _(_),
    _ = _ || _;
  return (0, _.jsx)(_, {
    filter: _,
    children: (0, _.jsxs)(_, {
      direction: "column",
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(_, {
              gap: "1",
              direction: "column",
              marginX: {
                initial: "2",
                _: "1",
                _: "0",
              },
              marginTop: "1",
              marginBottom: "3",
              children: [
                (0, _.jsx)(_, {
                  query: _,
                  item: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    description: _,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    direction: "column",
                    gap: "2",
                    background: "dull-4",
                    children: (0, _.jsx)(_, {
                      orders: _,
                      loadDescription: _,
                      loadDescriptionByClassID: _,
                      focusedSellOrderAssetID: _,
                    }),
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              description: _,
              children:
                _ &&
                (0, _.jsx)(_, {
                  description: _,
                  marginTop: "3",
                }),
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          marginTop: {
            initial: "0",
            _: "3",
          },
          flexGrow: "1",
          background: {
            initial: "dull-3",
            _: void 0,
          },
          children: [
            (0, _.jsx)(_, {
              filter: _,
              onFilterChange: _,
              buckets: _,
              description: _,
              value: _ || null,
              onChange: _,
              onPreviewBucketChange: _,
              onFallbackBucketChange: _,
            }),
            (0, _.jsxs)(_, {
              background: "dull-3",
              paddingY: {
                initial: void 0,
                _: "5",
              },
              children: [
                (0, _.jsxs)(_, {
                  marginX: {
                    initial: "0",
                    _: "2",
                  },
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        description: _,
                      }),
                    (0, _.jsx)(_, {
                      appid: _.appid,
                      bucketID: _ || _,
                      buckets: _,
                      filter: _,
                      description: _,
                      loadPriceHistory: _,
                      activeBucketID: _,
                      previewBucketID: _,
                    }),
                    !_ &&
                      (0, _.jsx)(_, {
                        appid: _.appid,
                        activeBucketID: _,
                        buckets: _,
                        loadDescription: _,
                      }),
                    _ && (0, _.jsx)(_, {}),
                  ],
                }),
                (0, _.jsxs)(_, {
                  total: _.data?.pages[0]?.total_count,
                  children: [
                    (0, _.jsx)(_, {
                      filter: _,
                      onFilterChange: _,
                      facetingInfo: _,
                      description: _,
                      relevantAssetProperties: _,
                      textFilter: _.strQuery,
                      onTextFilterChange: _,
                      open: _,
                      onShowFilters: _,
                    }),
                    (0, _.jsxs)(_, {
                      flexGrow: "1",
                      children: [
                        !1,
                        (0, _.jsx)(_, {
                          appid: _.appid,
                          query: _,
                          activeSort: _.sort,
                          onActiveSortChanged: _,
                          initialSelectedListing: _,
                          relevantAssetProperties: _,
                          onShowFilters: _,
                          activeBucketDescription: _,
                          filter: _,
                          onFilterChange: _,
                          textFilter: _.strQuery,
                          onTextFilterChange: _,
                          facetingInfo: _,
                        }),
                      ],
                    }),
                  ],
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
  if (!_ || !_.pages || !_.pages[0] || !_.pages[0].facets) return;
  let _ = _.pages[0],
    _ = _.facets,
    _ = {};
  for (let _ of _)
    typeof _.listings == "number" &&
      _.tag &&
      _.tag.category &&
      _.tag.internal_name &&
      (_[_.tag.category]
        ? (_[_.tag.category][_.tag.internal_name] = _.listings)
        : (_[_.tag.category] = {
            [_.tag.internal_name]: _.listings,
          }));
  return {
    counts: _,
    total: _.total_count,
  };
}
function _(_) {
  let { children: _, total: _ } = _,
    _ = (0, _.useRef)(!1);
  return (
    _ && _ > 3 && (_.current = !0),
    _.current
      ? (0, _.jsx)(_, {
          gap: "5",
          paddingTop: {
            initial: void 0,
            _: "5",
            _: "7",
          },
          padding: {
            initial: "3",
            _: "7",
          },
          align: "start",
          position: "relative",
          children: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            gap: "5",
            paddingTop: {
              initial: void 0,
              _: "6",
            },
            position: "relative",
            children: _,
          }),
        })
  );
}
function _(_) {
  let { filter: _, children: _ } = _;
  if (!_.app || !_(_.app.appid))
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _ = _.facets.Exterior ? Object.keys(_.facets.Exterior) : [],
    _ = _.length === 1 ? _.find(({ tag: _ }) => _ === _[0]) : void 0;
  return (0, _.jsx)(_, {
    focusedWear: _,
    children: _,
  });
}
function _(_, _) {
  if (!_) return "";
  let { field: _, direction: _, assetpropertyid: _ } = _,
    _ = _ === _.k_EMarketListingSortDirection_Ascending;
  switch (_) {
    case _.k_EMarketListingSortField_Price:
      return _.Localize(_ ? "#SortBy_Price_Asc" : "#SortBy_Price_Desc");
    case _.k_EMarketListingSortField_AssetProperty: {
      _(_, "Missing asset property id from sort!");
      let _ = _?.get(_);
      return _
        ? _.Localize(
            _ ? "#SortBy_AssetProperty_Asc" : "#SortBy_AssetProperty_Desc",
            _.localized_label,
          )
        : (console.error(
            `Could not find property for asset property id "${_}"`,
          ),
          "");
    }
    default:
      return "";
  }
}
var _ = _.default.memo(function (_) {
  let {
      appid: _,
      query: _,
      activeSort: _,
      onActiveSortChanged: _,
      initialSelectedListing: _,
      relevantAssetProperties: _,
      onShowFilters: _,
      activeBucketDescription: _,
      filter: _,
      onFilterChange: _,
      textFilter: _,
      onTextFilterChange: _,
      facetingInfo: _,
    } = _,
    { isFetchingNextPage: _, fetchNextPage: _, isFetchNextPageError: _ } = _,
    _ = (0, _.useCallback)(() => {
      !_ && !_ && _();
    }, [_, _, _]),
    [_, _] = _("resultsView"),
    _ = _() === "initial",
    [_, _] = _(
      _
        ? {
            listing: _,
          }
        : null,
      _,
    ),
    _ = _.data?.pages[0],
    { data: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      let _ = [
        {
          field: _.k_EMarketListingSortField_Price,
          direction: _.k_EMarketListingSortDirection_Ascending,
        },
        {
          field: _.k_EMarketListingSortField_Price,
          direction: _.k_EMarketListingSortDirection_Descending,
        },
      ];
      if (!_ || !_.listings) return _;
      let _ = new Set();
      for (let _ of _.listings)
        for (let _ of _.asset?.asset_properties || [])
          _.propertyid && _.add(_.propertyid);
      for (let _ of _) {
        let _ = _?.get(_);
        !_ ||
          _.hide_from_description ||
          _.type === _.k_EAssetPropertyType_String ||
          (_ && !_[_._]) ||
          _.push(
            {
              field: _.k_EMarketListingSortField_AssetProperty,
              direction: _.k_EMarketListingSortDirection_Ascending,
              assetpropertyid: _._,
            },
            {
              field: _.k_EMarketListingSortField_AssetProperty,
              direction: _.k_EMarketListingSortDirection_Descending,
              assetpropertyid: _._,
            },
          );
      }
      return _;
    }, [_, _, _]),
    [_, _] = (0, _.useState)(() => _(_.data?.pages));
  (0, _.useEffect)(() => {
    _ || (_(_.data?.pages) && _(!0));
  }, [_.data?.pages, _]);
  let _ = _(),
    _ = _(_);
  if (!_.data?.pages?.length) return null;
  let _ = _.data.pages[0]?.total_count || 0,
    _ = _ === "list" ? _ : _,
    _ = (0, _.jsxs)(_, {
      gap: "2",
      align: "center",
      children: [
        _ &&
          (0, _.jsx)(_, {
            color: "dull",
            onClick: () => _(!0),
            children: _.Localize("#Mobile_FiltersButton"),
          }),
        !_ &&
          (0, _.jsx)(_, {
            total: _,
            state: _,
            onStateChange: _,
            textFilter: _,
            onClearText: () => _(""),
            facetingInfo: _,
            facets: _.data,
          }),
      ],
    }),
    _ = (0, _.jsx)(_, {
      radius: "sm",
      options: _,
      selectedValue: _ ?? {
        field: _.k_EMarketListingSortField_Price,
        direction: _.k_EMarketListingSortDirection_Ascending,
      },
      onSelectionChange: _,
      getOptionLabel: (_) => _(_, _),
    }),
    _ = {};
  return (0, _.jsxs)(_, {
    view: _,
    onViewChange: _,
    onLoadMore: _,
    loadingMore: _,
    loadingNew: _.isFetching && _.isPlaceholderData,
    loadingError: _,
    breadcrumbs: _,
    sort: _,
    empty: _ === 0,
    resetScrollIdentity: _.data.pages[0],
    children: [
      _.data.pages.flatMap((_, _) =>
        !_ || !_.listings
          ? null
          : _.listings.map((_, _) =>
              _[_.listingid]
                ? null
                : ((_[_.listingid] = !0),
                  (0, _.jsx)(
                    _,
                    {
                      listing: _,
                      onClick: () =>
                        _({
                          pageIndex: _,
                          itemIndex: _,
                        }),
                      expectEnhancedAppearance: _,
                    },
                    _.listingid,
                  )),
            ),
      ),
      _ &&
        "listing" in _ &&
        (0, _.jsx)(_, {
          activeBucketDescription: _,
          listing: _.listing,
          onClose: () => _(null),
          expectEnhancedAppearance: _,
        }),
      _ &&
        "pageIndex" in _ &&
        (0, _.jsx)(_, {
          activeBucketDescription: _,
          ..._,
          query: _,
          onClose: () => _(null),
          onIndexChange: _,
          expectEnhancedAppearance: _,
        }),
    ],
  });
});
function _(_ = []) {
  return _.some((_) =>
    !_ || !_.listings
      ? !1
      : _.listings.some(
          (_) => _.enhanced_appearances && _.enhanced_appearances.length > 0,
        ),
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(_),
    _ = _.data?.pages,
    _ = (0, _.useCallback)(
      (_) => {
        let _ = new URLSearchParams(window.location.search);
        if (_ && "listing" in _) _.set("detail", _.listing.listingid);
        else if (_) {
          if (!_) return;
          let _ = _[_.pageIndex];
          if (!_) return;
          let _ = _.listings[_.itemIndex];
          _ && _.set("detail", _.listingid);
        } else _.delete("detail");
        let _ = _.toString();
        _(`?${_}`), _(_);
      },
      [_],
    );
  return [_, _];
}
function _(_) {
  let { description: _, children: _ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => _((_) => Math.max(_.contentRect.height, _)),
        [],
      ),
    ),
    _ = !_("sm");
  if (!_) return null;
  let _ = _(_);
  return (0, _.jsxs)(_, {
    marginBottom: _ ? void 0 : "6",
    ref: _,
    minHeight: _ ? void 0 : `${_}px`,
    children: [
      (0, _.jsxs)(_, {
        align: "center",
        background: "dull-4",
        padding: "2",
        marginBottom: _ ? void 0 : "3",
        children: [
          (0, _.jsxs)(_, {
            flexGrow: "2",
            align: "center",
            justify: "center",
            padding: "2",
            position: "relative",
            children: [
              (0, _.jsx)(_, {
                src: _,
              }),
              (0, _.jsx)(_, {
                src: _,
                alt: "",
                width: "min( 360px, 95vw )",
                zIndex: "1",
              }),
            ],
          }),
          !_ &&
            (0, _.jsxs)(_, {
              flexGrow: "1",
              flexBasis: "33%",
              direction: "column",
              children: [
                (0, _.jsx)(_, {
                  description: _,
                }),
                _,
              ],
            }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_, {
          description: _,
        }),
    ],
  });
}
function _(_) {
  let {
      description: { tags: _ = [], appid: _ },
    } = _,
    _ = _.reduce(
      (_, _) => (
        !_.category ||
          !_.localized_category_name ||
          !_.localized_tag_name ||
          (_[_.category] || (_[_.category] = []), _[_.category].push(_)),
        _
      ),
      {},
    ),
    _ = Object.values(_);
  return (0, _.jsx)(_, {
    gap: "4",
    justify: "center",
    wrap: "wrap",
    children:
      _.length > 1 &&
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            appid: _,
            tags: _,
            itemTags: _,
          },
          _[0].category,
        ),
      ),
  });
}
function _(_) {
  let { appid: _, tags: _, itemTags: _ } = _;
  _(_.length > 0, "Attempted to render tag info without any tags!");
  let _ = _[0].localized_category_name,
    _ = _.map(({ localized_tag_name: _ }) => _),
    _ = _(_, _, _);
  return (0, _.jsx)(_, {
    className: (0, _.default)(_(), _),
    _: _,
    external: !1,
    children: (0, _.jsxs)(_, {
      truncate: !0,
      className: _,
      children: [
        (0, _.jsxs)(_, {
          contrast: "note",
          children: [_, ":"],
        }),
        " ",
        _.join(", "),
      ],
    }),
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _.slice();
  if (_ === 730) {
    let _ = _(),
      _ = _.some(({ category: _ }) => _.some((_) => _ === _)),
      _ = _.some(({ category: _ }) => _ === "Type");
    _ && !_ && _.Type && _.Type.length > 0 && _.push(_.Type[0]);
  }
  let _ = _(
    {
      appid: _,
      filters: _(_, _),
    },
    _.maxPrice,
  );
  return _.Search({
    search: _,
  });
}
function _(_) {
  let { description: _ } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsxs)(_, {
      direction: "column",
      justify: "center",
      minWidth: "0",
      gap: "2",
      paddingX: {
        initial: "1",
        _: "3",
      },
      paddingY: "3",
      children: [
        (0, _.jsx)(_.Name, {}),
        (0, _.jsx)(_.GameInfo, {
          hrefGame: _.AppHome(_.appid),
        }),
      ],
    }),
  });
}
function _(_) {
  let { description: _ } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    children: (0, _.jsx)(_, {
      title: _.Localize("#Mobile_InfoSection"),
      children: (0, _.jsx)(_.Descriptions, {}),
    }),
  });
}
function _(_) {
  let _ = _() === "initial",
    _ = (0, _.jsx)(_, {
      ..._,
    });
  return _
    ? (0, _.jsx)(_, {
        title: _.Localize("#Mobile_GraphSection"),
        children: _,
      })
    : _;
}
function _(_) {
  let { description: _, ..._ } = _;
  return _(_)
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = _.default.memo(function (_) {
    let { appid: _, bucketID: _, loadPriceHistory: _ } = _,
      _ = _(_, _, _, {
        placeholderData: (_) => _,
      });
    return _.data
      ? (0, _.jsx)(_, {
          priceHistory: _.data,
        })
      : null;
  }),
  _ = _.default.memo(function (_) {
    let {
        appid: _,
        buckets: _,
        filter: _,
        loadPriceHistory: _,
        activeBucketID: _,
        previewBucketID: _,
      } = _,
      _ = _(_, _),
      _ = _(_),
      { rgWears: _ = [] } = _ || {},
      _ = _.filter((_) => !!_[_]).map((_) =>
        _(_, _[_]._, _, {
          placeholderData: (_) => _,
        }),
      ),
      _ = _({
        queries: _,
        combine: (_) => _.filter((_) => _.isSuccess).map((_) => _.data),
      }),
      { rgGraphGroups: _, rgColors: _ } = (0, _.useMemo)(() => {
        let _ = _.filter((_) => !!_[_]),
          _ = [],
          _ = [];
        for (let _ = 0; _ < _.length; _++)
          if (_[_]) {
            let _ = _[_][_]._,
              { color: _, label: _ } = _[_],
              _ = `--graphcolor-${_}`;
            _.push([_, _, _]),
              _.push({
                _: _,
                color: `var(${_})`,
                label: _,
                priceHistory: _[_],
              });
          }
        return {
          rgGraphGroups: _,
          rgColors: _,
        };
      }, [_, _, _]),
      _ = !_ && !!_,
      _ = {
        display: "contents",
      };
    for (let [_, _, _] of _)
      _ && _ !== _ ? (_[_] = `rgb( from ${_} r g b / 30% )`) : (_[_] = _);
    return (0, _.jsx)("div", {
      style: _,
      children: (0, _.jsx)(_, {
        groups: _,
        activeGroupID: _,
      }),
    });
  });
function _(_) {
  let { appid: _, activeBucketID: _, buckets: _, loadDescription: _ } = _,
    _ = _(_, _, !1),
    [_, _] = (0, _.useState)(!1),
    _ = _.data ? _(_.data) : null,
    _ = _.isSuccess,
    _ = _ && _.cBuyOrders > 0;
  return _() === "initial"
    ? (0, _.jsx)(_, {
        title: _.Localize("#Mobile_BuyOrderSection"),
        children: (0, _.jsxs)(_, {
          direction: "column",
          gap: "1",
          children: [
            _ &&
              (0, _.jsx)(_, {
                orders: _.rgBuyOrders,
                currency: _.eCurrency,
                totalOrders: _.cBuyOrders,
              }),
            (0, _.jsxs)(_, {
              background: "dull-6",
              padding: "3",
              radius: "sm",
              flexGrow: "1",
              children: [
                (0, _.jsx)(_, {
                  size: "4",
                  children: _.Localize("#UniqueBuyOrder_Explanation_Header"),
                }),
                (0, _.jsx)(_, {
                  _: "p",
                  children: _.Localize("#UniqueBuyOrder_Explanation_1"),
                }),
                (0, _.jsx)(_, {
                  _: "p",
                  children: _.Localize("#UniqueBuyOrder_Explanation_2"),
                }),
                (0, _.jsx)(_, {
                  _: "p",
                  children: _.Localize("#UniqueBuyOrder_Explanation_3"),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              appid: _,
              loading: _.isLoading,
              color: "dull",
              buckets: _,
              activeBucketID: _,
              loadDescription: _,
              minWidth: "100%",
              children: _.Localize("#Button_BuyOrder"),
            }),
          ],
        }),
      })
    : (0, _.jsxs)(_, {
        direction: "column",
        gap: "2",
        marginTop: "4",
        children: [
          (0, _.jsx)(_, {
            size: "5",
            children: _.Localize("#BuyOrder_PlaceOrderHeader"),
          }),
          (0, _.jsxs)(_, {
            radius: "sm",
            background: "dull-6",
            direction: "column",
            gap: "3",
            padding: "3",
            children: [
              (0, _.jsxs)(_, {
                gap: "2",
                justify: "between",
                align: "center",
                children: [
                  (0, _.jsxs)(_, {
                    align: "center",
                    gap: "2",
                    onClick: () => _(!_),
                    cursor: "pointer",
                    children: [
                      (0, _.jsx)(_, {}),
                      _ &&
                        (0, _.jsxs)(_, {
                          children: [
                            (0, _.jsxs)(_, {
                              weight: "medium",
                              color: "text-body",
                              contrast: "body",
                              children: [
                                _ &&
                                  _(
                                    _.LocalizePlural(
                                      "#OrderBook_PlaceOrder_BuyRequests",
                                      _.cBuyOrders,
                                      _(_.amtMaxBuyOrder || 0, _.eCurrency),
                                      Intl.NumberFormat(_()).format(
                                        _.cBuyOrders,
                                      ),
                                    ),
                                  ),
                                !_ &&
                                  _.Localize(
                                    "#OrderBook_BuyOrder_Description_None",
                                  ),
                                " ",
                              ],
                            }),
                            (0, _.jsx)(_, {
                              direction: _ ? "up" : "down",
                            }),
                          ],
                        }),
                      !_ &&
                        !_ &&
                        (0, _.jsxs)(_, {
                          children: [
                            _.Localize("#OrderBook_BuyOrder_NeedBucket"),
                            " ",
                            (0, _.jsx)(_, {
                              direction: _ ? "up" : "down",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, _.jsxs)(_, {
                    direction: "row",
                    gap: "2",
                    align: "center",
                    children: [
                      (0, _.jsx)(_, {
                        children: _.Localize(
                          "#OrderBook_BuyOrder_Explanation_Unique",
                        ),
                      }),
                      (0, _.jsx)(_, {
                        appid: _,
                        loading: _.isLoading,
                        color: "dull",
                        buckets: _,
                        activeBucketID: _,
                        loadDescription: _,
                        children: _.Localize("#Button_BuyOrder"),
                      }),
                    ],
                  }),
                ],
              }),
              _ &&
                (0, _.jsxs)(_, {
                  gap: "3",
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        orders: _.rgBuyOrders,
                        currency: _.eCurrency,
                        totalOrders: _.cBuyOrders,
                      }),
                    (0, _.jsxs)(_, {
                      background: "dull-6",
                      padding: "3",
                      radius: "sm",
                      flexGrow: "1",
                      children: [
                        (0, _.jsx)(_, {
                          size: "4",
                          children: _.Localize(
                            "#UniqueBuyOrder_Explanation_Header",
                          ),
                        }),
                        (0, _.jsx)(_, {
                          _: "p",
                          children: _.Localize("#UniqueBuyOrder_Explanation_1"),
                        }),
                        (0, _.jsx)(_, {
                          _: "p",
                          children: _.Localize("#UniqueBuyOrder_Explanation_2"),
                        }),
                        (0, _.jsx)(_, {
                          _: "p",
                          children: _.Localize("#UniqueBuyOrder_Explanation_3"),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
}
function _() {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 30 30",
    fill: "none",
    children: (0, _.jsx)("path", {
      _: "M8.33203 9.16602H10.832V5.83301H28.333V24.166H10.832V20.833H8.33203V24.166H1.66602V17.5C3.04662 17.5 4.16584 16.3806 4.16602 15C4.16602 13.6193 3.04673 12.5 1.66602 12.5V5.83301H8.33203V9.16602ZM19.1602 13.125C18.9205 13.562 18.561 13.9215 18.124 14.1611L15.832 15.416L18.124 16.6719C18.5611 16.9115 18.9206 17.2709 19.1602 17.708L20.4229 20L21.6709 17.708H21.6914C21.9263 17.2744 22.2784 16.9156 22.707 16.6719L24.999 15.416L22.707 14.1611C22.268 13.9216 21.9056 13.5624 21.6631 13.125L20.415 10.833L19.1602 13.125ZM8.33203 19.166H10.832V15.833H8.33203V19.166ZM8.33203 14.166H10.832V10.833H8.33203V14.166Z",
      fill: "currentColor",
    }),
  });
}
function _(_, _) {
  let _ = {};
  for (let [_, _] of Object.entries(_.accessoryFilters || {})) {
    let _ = "accessory_";
    if (_.startsWith(_)) {
      let _ = _.slice(_.length);
      if (!_.length) continue;
      for (let _ of _) _ in _ || (_[_] = {}), (_[_][_] = !0);
    }
  }
  let _ = {};
  for (let [_, _] of Object.entries(_.filters || {}))
    if (_.length)
      for (let _ of _) _.length && (_[_] || (_[_] = {}), (_[_][_] = !0));
  return {
    app: {
      appid: _.appid,
      icon: "",
      name: "",
    },
    accessories: _,
    facets: _,
    properties: _.propertyFilters || {},
    price: [_.price?.unMin ?? 0, _.price?.unMax ?? _.maxPrice],
  };
}
function _(_, _, _) {
  let _ = {},
    _ = {},
    _ = _.app.appid;
  if (typeof _ == "number") {
    for (let _ of Object.keys(_.facets)) {
      let _ = _.facets[_];
      if (_) for (let _ of Object.keys(_)) _[_] ? _[_].push(_) : (_[_] = [_]);
    }
    for (let _ of Object.keys(_.accessories)) {
      let _ = `accessory_${_}`;
      for (let _ of Object.keys(_.accessories[_]))
        _[_] ? _[_].push(_) : (_[_] = [_]);
    }
  }
  let _ = {
      appid: _,
      strItemName: _,
      filters: _,
      accessoryFilters: _,
      propertyFilters: _.properties,
    },
    _ = _.price[0] ?? 0,
    _ = _.price[1] ?? _.maxPrice,
    _;
  return (
    (_ || (_ && _ < _.maxPrice)) &&
      (_ = {
        eCurrency: _.currency.eCurrency,
        unMin: _ > 0 ? _ : void 0,
        unMax: _ > _ && _ < _.maxPrice ? _ : void 0,
      }),
    (_.price = _),
    _
  );
}
function _() {
  return (0, _.jsx)(_, {
    marginTop: "4",
    children: _.Localize("#Item_CountryBuyRestricted"),
  });
}
export { _, _, _, _, _, _, _ };
