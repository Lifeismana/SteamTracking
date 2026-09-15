/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7745],
  {
    60097: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_4SG2MjCMpIRt6W-Zj4Oxm",
        HeaderNotices: "_2BtczALVCY2zzCLnj8oga9",
        FooterNoticesHeader: "_2itvgQZbn40lY_jj5sG8it",
        MustFix: "_1SFErQFwOLmnLCBVlq9zxK",
        FooterNotice: "_1WMk6EdVNns2fKuDOCrBX3",
        NoticeIndex: "_3N9Ik0sMA90E7jGHJqycWH",
      };
    },
    64201: (e) => {
      e.exports = { LineItemStoreHover: "_3DfrtekI1PCxuXbfj85Zwp" };
    },
    86711: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1MfAwU630QwDv6FuV9c_Dr",
        LineItemsCtn: "_3ypRUtQoOfOrCsyHlzfGm4",
        StoreSalePriceBox: "_5m_q0MLlnLkt_KBd7iMbO",
        StoreSaleDiscountedPriceCtn: "_1ZzX6NkuELfMhPL0SJCQSK",
        Scrollable: "_2A58_XmT-KCSwE_kh-xntF",
        LineItemWrapper: "XjPmFc2t_i1DAuEXEbIX",
        fadeIn: "xtUORpc8Xy9Hs_tdAIitT",
        ImageLink: "fGORfr7ZEqjO3WrgO6A4t",
        LineItemCapsule: "_2Xz_WXO8PfREP4c9ZWAuNg",
        HeaderImg: "_37_1K2XQrVBwncWFXTcpMP",
        HeaderImgBlurred: "_3hT2r7Sb_Yx9PdYSB0rjpl",
        LineItemPlaceholder: "_1_mV-2sC0r25eLrKyufPRK",
        AddRemoveLinks: "_2Agry3evdkG3gKPyhNf7Hz",
        RemoveLineItem: "_3YCgcpoCojlbS6DvkNsG2J",
        AddLineItem: "_2qvlyUCwtTBUslo1Z7-RlG",
        VerifyLineItem: "_2HO_qGTXtEZz_EF60S6hfS",
        LineItemRightCol: "ysGS-IPPWEkwN-O5rr-0V",
        InnerLineItemCtn: "_3F0SnUeC_obtI4WyQtijAa",
        LineItemDetailsCtn: "_3GKl4T2MbvnGPvRzyXC5nQ",
        LineItemCol: "HhD4RK0A4phOlAwZQDckk",
        LineItemDetailsRow: "_1wLomHB2PWPNx7TsNYpdtm",
        Text: "_2aGDkEAUaGvF4KHHZRRkEj",
        NoWrap: "c0VFjXtN_fgP-PR6wQe66",
        ComplianceLink: "_1Gqg5Ajp0R5LqzbJ4Wtecz",
        LineItemDetailsRowTop: "_1aXXp4afkXP3Ez03MjTY3D",
        LineItemSpaceBetween: "_3L6hUlrzXOezye2BqWz-T7",
        LineItemTitle: "EflKs0JjldhDSxbUBaiOp",
        LineItemPricingOptions: "_2BTcfC4-tZENmEAXbVzKA7",
        PlatformIcons: "_2FgjpNRRiZkDXAB53vFFOh",
        PurchaseOptionPickerCtn: "_2iq-WR8SMiZcAwSnm-8-eE",
        AddLineItemCtn: "_3-GZz-m5p_fxd2pqPGK6u9",
        AddLineItemIcon: "_4Uz7u01J6OO_P0hhfb0Kc",
        PendingLineItem: "_3w61e3curroiu7lCOKvLN8",
        FlexRow: "_2Y0WvaYzp-79xegxjV_kQI",
        PriceWidget: "_3_q-F_MXXBH_JQPJvWznnc",
        Warning: "_1_vNtL4JTtFLtSgY25zz_5",
        LineItemNoticeAppsCtn: "_2bBPt2vaBRl7xTiWEkA-PR",
        LoadingThrobber: "_9ECtylscKVGNrQpLPlds0",
        WhiteText: "_1CYn6Bwc5kuZ25-Gyb9btE",
        ErrorLineItem: "_2Qnb-DOaU8BbFWOUBG3hs1",
        Left: "Twv2unKjIVTB3vmgieygi",
        Error: "_2LPurUnl-MyMX6q6B0uNX",
        Muted: "_3efIWtJm5nAuQLmq9N3nJd",
        GiftForNotice: "tKoWmz4HQdpU6S-Fq6IEh",
        Name: "_2BZrRaucjIMeqixZMVlakn",
        RemoveButton: "_1j8t9ZjX3tyKrSBnkY6IeG",
      };
    },
    90485: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => f, t: () => m });
      var n = i(56545),
        r = i(3108),
        a = i(71430),
        s = i(23809),
        o = i(75233),
        c = i(51614),
        l = i(79443),
        _ = i(65244),
        d = i(30709),
        p = i(93676),
        u = i(99838);
      function m(e) {
        const t = (0, s.KV)(),
          i = (0, o.jE)(),
          _ = (0, d.j4)();
        return (0, c.n)({
          mutationFn: async () =>
            await (async function (e, t, i) {
              if ((0, l.c2)(t)) {
                const t = n.w.Init(r.tj);
                t.Body().set_line_item_id(i);
                const a = await r.t8.RemoveItemFromCart(e, t);
                return (0, u.WZ)(), a.Body().toObject();
              }
              {
                const r = n.w.Init(a.VJ);
                r.Body().set_gidlineitems([i]),
                  r.Body().set_gidshoppingcart(t.gid);
                const s = await a.Q2.RemoveLineItems(e, r);
                return (0, u.WZ)(), s.Body().toObject();
              }
            })(t, _, e),
          onSuccess: (e) => {
            "cart" in e ? (0, p.LN)(i, _, e.cart) : (0, p.Cd)(i, _);
          },
        });
      }
      function f() {
        const e = (0, s.KV)(),
          t = (0, o.jE)(),
          i = (0, d.j4)();
        return (0, c.n)({
          mutationFn: async () =>
            await (async function (e, t) {
              if ((0, l.c2)(t)) {
                const t = n.w.Init(r.HK);
                return (await r.t8.DeleteCart(e, t)).BSuccess();
              }
              {
                const i = await (0, _.d0)(e, t);
                if (i && i.line_items && i.line_items.length) {
                  const r = n.w.Init(a.VJ);
                  return (
                    r
                      .Body()
                      .set_gidlineitems(
                        i.line_items.map(({ line_item_id: e }) => e),
                      ),
                    r.Body().set_gidshoppingcart(t.gid),
                    (await a.Q2.RemoveLineItems(e, r)).BSuccess()
                  );
                }
                return !1;
              }
            })(e, i),
          onSuccess: () => (0, p.Cd)(t, i),
        });
      }
    },
    13904: (e, t, i) => {
      "use strict";
      i.d(t, { C: () => m });
      var n = i(56545),
        r = i(3108),
        a = i(16909),
        s = i(66418),
        o = i(23809),
        c = i(75233),
        l = i(51614),
        _ = i(30709),
        d = i(93676),
        p = i(79443),
        u = i(71430);
      function m(e) {
        const t = (0, _.j4)(),
          i = (0, o.KV)(),
          m = (0, c.jE)(),
          f = (0, d.GO)(t);
        return (0, l.n)({
          mutationFn: (e) =>
            (async function (e, t, i, o, c, l) {
              if ((0, p.c2)(t)) {
                const t = n.w.Init(r.Bk);
                t.Body().set_line_item_id(i),
                  t.Body().set_user_country(s.iA.country_code),
                  c && t.Body().set_gift_info(a.$z.fromObject(c)),
                  o && t.Body().set_flags(r.Eo.fromObject(o)),
                  l && t.Body().set_apply_gidcoupon(l);
                const _ = await r.t8.ModifyLineItem(e, t);
                return (
                  _.BSuccess() ||
                    console.warn(
                      `Failed to update gift info: ${_.GetEResult()}`,
                    ),
                  [_.GetEResult(), _.Body().toObject()]
                );
              }
              {
                const r = n.w.Init(u.ic);
                r.Body().set_gidlineitem(i),
                  r.Body().set_gidshoppingcart(t.gid),
                  c
                    ? r.Body().set_gift_info(a.$z.fromObject(c))
                    : o?.is_gift &&
                      r
                        .Body()
                        .set_gift_info(
                          a.$z.fromObject({
                            accountid_giftee: 0,
                            email_giftee: "",
                          }),
                        );
                const s = await u.Q2.ModifyLineItem(e, r);
                return (
                  s.BSuccess() ||
                    console.warn(
                      `Failed to update gift info in anonymous cart: ${s.GetEResult()}`,
                    ),
                  s.Body().toObject()
                );
              }
            })(i, t, e.lineItemID, e.lineItemFlags, e.giftInfo, e.gidCoupon),
          onMutate: async (e) => {
            await m.cancelQueries({ queryKey: f });
            const t = m.getQueryData(f);
            return (
              m.setQueryData(f, (t) => ({
                ...(t ?? {}),
                line_items:
                  t?.line_items?.map((t) =>
                    t.line_item_id !== e.lineItemID
                      ? t
                      : {
                          ...t,
                          flags: e.lineItemFlags || t.flags,
                          gift_info: e.giftInfo || t.gift_info,
                        },
                  ) ?? [],
              })),
              { previousCart: t }
            );
          },
          onSuccess: (e) => {
            "cart" in e ? (0, d.LN)(m, t, e.cart) : (0, d.Cd)(m, t);
          },
          onError: (e, t, i) => {
            i?.previousCart && m.setQueryData(f, i.previousCart);
          },
        });
      }
    },
    27498: (e, t, i) => {
      "use strict";
      i.d(t, { Ez: () => c, fg: () => l, iZ: () => _ });
      var n = i(7850),
        r = i(30709),
        a = i(90626);
      const s = a.createContext({ step: "initial", setStep: () => {} });
      function o() {
        return (0, a.useContext)(s);
      }
      function c() {
        const e = o();
        return [e.step, e.setStep];
      }
      function l() {
        const e = o();
        return [e.cartWideGiftInfo, e.onCartWideGiftInfoChange];
      }
      function _(e) {
        const {
            step: t,
            setStep: i,
            cartID: o,
            cartWideGiftInfo: c,
            onCartWideGiftInfoChange: l,
            children: _,
          } = e,
          d = a.useMemo(
            () => ({
              step: t,
              setStep: i,
              cartWideGiftInfo: c,
              onCartWideGiftInfoChange: l,
            }),
            [t, i, c, l],
          );
        return (0, n.jsx)(s.Provider, {
          value: d,
          children: (0, n.jsx)(r.h3, { cartID: o, children: _ }),
        });
      }
    },
    42798: (e, t, i) => {
      "use strict";
      i.d(t, {
        LP: () => j,
        WA: () => n,
        Yz: () => y,
        ZZ: () => L,
        wW: () => x,
      });
      var n,
        r = i(7850),
        a = i(93332),
        s = i(16909),
        o = i(66418),
        c = i(29233),
        l = i(39777),
        _ = i(52541),
        d = i(64238),
        p = i.n(d),
        u = i(90626),
        m = i(21782),
        f = i(85906),
        h = i(60097),
        g = i(70343);
      !(function (e) {
        (e[(e.k_ECartDisplayType_Unknown = 0)] = "k_ECartDisplayType_Unknown"),
          (e[(e.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
          (e[(e.k_ECartDisplayType_FullPage = 2)] =
            "k_ECartDisplayType_FullPage");
      })(n || (n = {}));
      const I = u.createContext({
        rgCartLevelNotices: [],
        mapValidateNoticesToFootnote: new Map(),
        eDisplayType: n.k_ECartDisplayType_Unknown,
      });
      function x(e) {
        const { validateCart: t, eDisplayType: i, children: n } = e,
          a = (function (e, t) {
            return u.useMemo(() => {
              let i = new Map(),
                n = new Map(),
                r = 1;
              const a = (e, t) => {
                n.has(e) || n.set(e, { index: r++, footnote_text: t });
              };
              let o = !1;
              e?.cart_items?.forEach((e) => {
                let t = !!e.gift_info?.accountid_giftee;
                e.errors && (o = !0),
                  e.errors?.duplicate_appids_in_cart?.length &&
                    a(
                      s.WN.ZK,
                      f.Q8.Localize("#Cart_Error_DuplicateApps_FootNote"),
                    ),
                  e.errors?.owned_appids?.length &&
                    (e.errors?.has_existing_billing_agreement
                      ? a(
                          s.WN.Gy,
                          f.Q8.Localize(
                            "#Cart_Error_ExistingBillingAgreement_FootNote",
                          ),
                        )
                      : a(
                          s.WN.kj,
                          f.Q8.Localize(
                            t
                              ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                              : "#Cart_Error_AlreadyOwned_FootNote",
                          ),
                        )),
                  e.errors?.unavailable_in_country &&
                    a(
                      s.WN.Hp,
                      f.Q8.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                    ),
                  e.errors?.adult_content_restricted &&
                    a(
                      s.WN.C4,
                      f.Q8.Localize(
                        "#Cart_Error_AdultContentRestricted_FootNote",
                      ),
                    ),
                  e.errors?.commercial_license_restricted &&
                    a(
                      s.WN.yQ,
                      f.Q8.Localize(
                        "#Cart_Error_CommercialLicenseRestricted_FootNote",
                      ),
                    ),
                  e.errors?.missing_must_own_appids &&
                    a(
                      s.WN.VL,
                      t
                        ? f.Q8.Localize(
                            "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                          )
                        : f.Q8.Localize(
                            "#Cart_Error_MissingMustOwnApps_FootNote",
                          ),
                    ),
                  e.warnings?.appids_in_mastersub?.length &&
                    a(
                      s.WN.Q7,
                      f.Q8.Localize("#Cart_Error_MasterSubscription_FootNote"),
                    ),
                  e.warnings?.price_has_changed &&
                    i.set(
                      s.WN.vY,
                      f.Q8.Localize("#Cart_Warning_PriceChange_FootNote"),
                    );
              });
              let c = Array.from(i.values());
              return (
                o && c.unshift(f.Q8.Localize("#Cart_CartLevelErrorNotice")),
                {
                  rgCartLevelNotices: c,
                  mapValidateNoticesToFootnote: n,
                  eDisplayType: t,
                }
              );
            }, [e, t]);
          })(t, i);
        return (0, r.jsx)(I.Provider, { value: a, children: n });
      }
      function L() {
        const { rgCartLevelNotices: e } = u.useContext(I);
        return e && e.length
          ? 1 == e.length
            ? (0, r.jsx)("div", {
                className: h.HeaderNotices,
                children: f.Q8.Localize("#Cart_CartLevelErrorFormat", e[0]),
              })
            : (0, r.jsxs)("div", {
                className: h.HeaderNotices,
                children: [
                  (0, r.jsx)("div", {
                    children: f.Q8.Localize("#Cart_CartLevelErrorMultiple"),
                  }),
                  (0, r.jsx)("ul", {
                    children: e.map((e, t) =>
                      (0, r.jsx)("li", { children: e }, t),
                    ),
                  }),
                ],
              })
          : null;
      }
      function j(e) {
        const { validateCart: t } = e,
          { mapValidateNoticesToFootnote: i } = u.useContext(I);
        if (!i || !i.size) return null;
        const n = (t?.cart_items || []).every((e) => !e.errors),
          a = n
            ? f.Q8.Localize("#Cart_FooterNoticeHeader_Warning")
            : f.Q8.Localize("#Cart_FooterNoticeHeader_MustFix"),
          s = p()(h.FooterNoticesHeader, !n && h.MustFix);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", { className: s, children: a }),
            Array.from(i).map(([e, t]) =>
              (0, r.jsx)(C, { notice: t }, t.index),
            ),
          ],
        });
      }
      function C(e) {
        const { notice: t } = e;
        return (0, r.jsxs)("div", {
          className: h.FooterNotice,
          children: [
            (0, r.jsx)("div", {
              className: h.NoticeIndex,
              children: (0, r.jsx)("sup", { children: t.index }),
            }),
            (0, r.jsx)("div", { children: t.footnote_text }),
          ],
        });
      }
      function v() {
        const e = u.useContext(I);
        return e?.eDisplayType ?? n.k_ECartDisplayType_Unknown;
      }
      function y(e) {
        const { lineItem: t } = e,
          i = v();
        let a = [],
          o = !!t.gift_info?.accountid_giftee;
        return (
          t.errors?.duplicate_appids_in_cart?.length &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.ZK,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_DuplicateApps_LineItem",
                  ),
                  appids: t.errors.duplicate_appids_in_cart,
                },
                "duplicate_appids",
              ),
            ),
          a.push((0, r.jsx)(W, { lineItem: t }, "owned_apps")),
          t.errors?.unavailable_in_country &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.Hp,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_UnavailableCountry_LineItem",
                  ),
                },
                "unavailable_in_country",
              ),
            ),
          t.errors?.adult_content_restricted &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.C4,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_AdultContentRestricted_LineItem",
                  ),
                },
                "adult_content_restricted",
              ),
            ),
          t.errors?.commercial_license_restricted &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.yQ,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_CommercialLicenseRestricted_LineItem",
                  ),
                },
                "commercial_license_restricted",
              ),
            ),
          t.errors?.gift_not_valid_for_recipient_region &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN._o,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_GiftRecipientInvalid",
                  ),
                },
                "gift_recipient_invalid",
              ),
            ),
          a.push((0, r.jsx)(A, { lineItem: t }, "coupon_notices")),
          t.errors?.too_many_in_cart &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.YF,
                  notice_text: f.Q8.Localize("#Cart_Error_TooManyInCart"),
                },
                "too_many_in_cart",
              ),
            ),
          t.errors?.missing_must_own_appids?.length &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.VL,
                  notice_text: o
                    ? f.Q8.Localize(
                        "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                      )
                    : f.Q8.Localize("#Cart_Error_MissingMustOwnApps_LineItem"),
                  appids: t.errors.missing_must_own_appids,
                },
                "missing_must_own_appids",
              ),
            ),
          t.warnings?.appids_in_mastersub?.length &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.Q7,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_MasterSubscription_LineItem",
                  ),
                  appids: t.warnings.appids_in_mastersub.flatMap((e) =>
                    e.cart_appid ? [e.cart_appid] : [],
                  ),
                },
                "appids_in_mastersub",
              ),
            ),
          t.warnings?.owned_appids?.length &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.fZ,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_AlreadyOwned_LineItem",
                  ),
                  appids: t.warnings.owned_appids,
                },
                "owned_appids",
              ),
            ),
          t.warnings?.owned_appids_extra_copy?.length &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.Vx,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_ExtraCopies_LineItem",
                  ),
                  appids: t.warnings.owned_appids_extra_copy,
                },
                "owned_appids_extra_copy",
              ),
            ),
          t.warnings?.price_has_changed &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.vY,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_PriceChange_LineItem",
                  ),
                },
                "price_has_changed",
              ),
            ),
          t.warnings?.non_refundable &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.YQ,
                  notice_text: f.Q8.Localize("#Cart_Warning_NoRefund_LineItem"),
                },
                "non_refundable",
              ),
            ),
          t.warnings?.gift_recipient_higher_price &&
            a.push(
              (0, r.jsx)(
                N,
                {
                  purchase_state: s.WN.j6,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_RecipientHigherPrice",
                  ),
                },
                "gift_recipient_higher_price",
              ),
            ),
          a.push((0, r.jsx)(b, { lineItem: t }, "available_cheaper")),
          o &&
            i !== n.k_ECartDisplayType_FullPage &&
            a.push(
              (0, r.jsx)(
                z,
                { nGifteeAccountID: t.gift_info.accountid_giftee },
                "non_friend_gift",
              ),
            ),
          a
        );
      }
      function N(e) {
        const { purchase_state: t, notice_text: i, appids: a } = e,
          s = (function (e) {
            const t = u.useContext(I);
            return t?.mapValidateNoticesToFootnote.get(e)?.index;
          })(t),
          o = v() === n.k_ECartDisplayType_FullPage && !!s;
        return (0, r.jsxs)(g.dp, {
          children: [
            i,
            o && (0, r.jsx)("sup", { children: s }),
            " ",
            (0, r.jsx)(w, { rgAppIDs: a ?? [] }),
          ],
        });
      }
      function w(e) {
        const { rgAppIDs: t } = e;
        return t && 0 != t.length
          ? t.map((e, i) =>
              (0, r.jsx)(E, { appid: e, last: i >= t.length - 1 }, `${e}_${i}`),
            )
          : null;
      }
      function E(e) {
        const { appid: t, last: i } = e,
          { data: n } = (0, l.J$)({ appid: t });
        return n
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(m.y, { appid: t, name_override: n.name }),
                !i && (0, r.jsx)(r.Fragment, { children: ", " }),
              ],
            })
          : null;
      }
      function b(e) {
        const { lineItem: t } = e,
          { data: i } = (0, l.mr)(t.item_id),
          { data: n } = (0, l.EO)(t.item_id);
        if (!!(!!t.gift_info?.accountid_giftee || !i || !n || (0, _.vk)(i, n)))
          return null;
        const a = n.packageid
          ? { packageid: n.packageid }
          : { bundleid: n.bundleid };
        return (0, r.jsx)(g.dp, {
          children: f.Q8.LocalizeReact(
            "#Cart_Warning_AvailableAtALowerPrice",
            (0, r.jsx)(m.y, { ...a, name_override: n.purchase_option_name }),
          ),
        });
      }
      function z(e) {
        const { nGifteeAccountID: t } = e,
          i = c.b2.InitFromAccountID(t, o.TS.EUNIVERSE).ConvertTo64BitString(),
          { data: n } = (0, a.Dv)();
        return u.useMemo(() => !n || n.includes(i), [n, i]) || !o.iA.logged_in
          ? null
          : (0, r.jsx)(g.dp, {
              children: f.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
            });
      }
      function W(e) {
        const { lineItem: t } = e;
        if (!t.errors?.owned_appids?.length) return null;
        let i = !!t.gift_info?.accountid_giftee;
        if (t.errors?.has_existing_billing_agreement)
          return (0, r.jsx)(N, {
            purchase_state: s.WN.Gy,
            notice_text: f.Q8.Localize("#Cart_Error_ExistingBillingAgreement"),
          });
        {
          const e = (t.store_item?.included_appids?.length ?? 0) > 1;
          let n = f.Q8.Localize(
            i
              ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
              : "#Cart_Error_AlreadyOwned_LineItem_Game",
          );
          return (
            e &&
              (n = f.Q8.Localize(
                i
                  ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                  : "#Cart_Error_AlreadyOwned_LineItem",
              )),
            (0, r.jsx)(N, {
              purchase_state: s.WN.kj,
              notice_text: n,
              appids: e ? t.errors.owned_appids : void 0,
            })
          );
        }
      }
      function A(e) {
        const { lineItem: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            t.errors?.coupon_exclusive_promo &&
              (0, r.jsx)(N, {
                purchase_state: s.WN.rp,
                notice_text: f.Q8.Localize(
                  "#Cart_Error_CouponIsExclusivePromo",
                ),
              }),
            t.errors?.invalid_coupon &&
              (0, r.jsx)(N, {
                purchase_state: s.WN.p_,
                notice_text: f.Q8.Localize("#Cart_Error_CouponIsInvalid"),
              }),
            t.errors?.invalid_coupon_for_item &&
              (0, r.jsx)(N, {
                purchase_state: s.WN.VJ,
                notice_text: f.Q8.Localize(
                  "#Cart_Error_CouponIsInvalidForItem",
                ),
              }),
          ],
        });
      }
    },
    21782: (e, t, i) => {
      "use strict";
      i.d(t, { y: () => l });
      var n = i(7850),
        r = i(29008),
        a = i(39777),
        s = i(64201),
        o = i.n(s);
      const c = {
        direction: "right",
        style: { width: "320px", height: (125 / 184) * 320 + "px" },
      };
      function l(e) {
        const { name_override: t, ...i } = e,
          { data: s } = (0, a.J$)(t ? void 0 : i),
          l = t ?? s?.name;
        return (0, n.jsx)(r.Q, {
          id: i,
          hoverProps: c,
          name: l,
          className: o().LineItemStoreHover,
          bShowWishlistButton: !1,
          children: l,
        });
      }
    },
    46988: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => S });
      var n = i(7850),
        r = i(71232),
        a = i(18519),
        s = i(76217),
        o = i(81393),
        c = i(3108),
        l = i(95578),
        _ = i(66418),
        d = i(40895),
        p = i(1090),
        u = i(69345),
        m = i(51622),
        f = i(5309),
        h = i(39777),
        g = i(52541),
        I = i(14987),
        x = i(9006),
        L = i(13327),
        j = i(54806),
        C = i(64238),
        v = i.n(C),
        y = i(90626),
        N = i(84811),
        w = i(70809),
        E = i(26514),
        b = i(90485),
        z = i(13904),
        W = i(79443),
        A = i(27498),
        Q = i(85906),
        F = i(30709),
        D = i(42798),
        B = i(21782),
        R = i(86711),
        O = i.n(R),
        P = i(70343),
        k = i(32754);
      function S(e) {
        const {
          lineItems: t,
          cartValidation: i,
          LineItemContainer: r = H,
          scrollable: a = !1,
        } = e;
        if (!t.length) return (0, n.jsx)(G, {});
        const s = i?.cart_items
          ? i.cart_items.reduce((e, t) => ((e[t.line_item_id] = t), e), {})
          : {};
        return (0, n.jsx)(P.uO, {
          scrollable: a,
          children: t.map((e, t) =>
            e
              ? (0, n.jsx)(
                  N.tH,
                  {
                    fallback: (t) => (0, n.jsx)(M, { item: e, error: t }),
                    children: (0, n.jsx)(T, {
                      item: e,
                      validatedItem: s[e.line_item_id],
                      LineItemContainer: r,
                    }),
                  },
                  e.line_item_id || t,
                )
              : (0, n.jsx)(P.vF, {}, t),
          ),
        });
      }
      function T(e) {
        const { item: t, validatedItem: i, LineItemContainer: r } = e,
          a = (function (e) {
            const t = e.type;
            switch (t) {
              case c.KW.$B:
                return { packageid: e.packageid };
              case c.KW.XY:
                return { bundleid: e.bundleid };
              case c.KW.vC:
                return;
              default:
                (0, o.z_)(t, `Unhandled type: ${t}`);
            }
            return;
          })(t);
        if (!a) throw `Unknown line item type (${t.type})`;
        const { data: s } = (0, h.J$)(a),
          { data: l } = (0, h.U2)(a),
          { data: _ } = (0, h.mr)(a),
          d = l ? (0, g.Jz)(l) : a;
        return (
          (0, h.lv)(d),
          (0, h.qI)(d),
          !s || (s.visible && null !== _)
            ? s && l && _ && i
              ? (0, n.jsx)(U, {
                  lineItem: t,
                  validatedItem: i,
                  storeItem: s,
                  displayItem: l,
                  purchaseOption: _,
                  LineItemContainer: r,
                })
              : (0, n.jsx)(P.vF, {})
            : (0, n.jsx)(Z, {
                lineItemID: t.line_item_id,
                validatedItem: i,
                storeItem: s,
              })
        );
      }
      function M(e) {
        const { item: t, error: i } = e,
          r = (0, b.t)(t.line_item_id);
        return (0, n.jsxs)(P.Rz, {
          className: O().ErrorLineItem,
          children: [
            (0, n.jsxs)("div", {
              className: O().Left,
              children: [
                (0, n.jsx)("div", {
                  className: O().Error,
                  children: Q.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                }),
                (0, n.jsx)("div", {
                  className: O().Muted,
                  children: i.message,
                }),
              ],
            }),
            (0, n.jsx)(s.Z, {
              onActivate: () => r.mutate(),
              className: O().RemoveButton,
              children: Q.Q8.Localize("#Cart_Remove"),
            }),
          ],
        });
      }
      function G() {
        return (0, n.jsx)(P.Rz, {
          className: O().ErrorLineItem,
          children: (0, n.jsx)("div", {
            className: O().Left,
            children: (0, n.jsx)("div", {
              className: O().LineItemTitle,
              children: Q.Q8.Localize("#Cart_Empty"),
            }),
          }),
        });
      }
      function U(e) {
        const {
            storeItem: t,
            displayItem: i,
            lineItem: r,
            purchaseOption: a,
            validatedItem: o,
            LineItemContainer: c,
          } = e,
          l = r.line_item_id,
          _ = (0, g.Jz)(t),
          d = (0, b.t)(l),
          p = d.isPending || d.isSuccess,
          { data: f } = (0, h.by)(_),
          x = (0, I._Z)(_),
          { data: j, isLoading: C } = (0, L.Pt)(),
          N = y.useMemo(() => x.filter((e) => j?.has(e)), [x, j]),
          w = y.useId();
        if (C) return (0, n.jsx)(P.vF, {});
        const E = r.flags?.is_gift,
          z = x.length > 0 && N.length === x.length,
          W = !E && N.length > 0 && !z;
        return (0, n.jsxs)(c, {
          lineItem: r,
          storeItem: t,
          validatedItem: o,
          children: [
            p && (0, n.jsx)(P.UD, {}),
            (0, n.jsxs)(s.Z, {
              className: v()(O().InnerLineItemCtn, p && O().PendingLineItem),
              "flow-children": "row",
              children: [
                (0, n.jsx)("div", {
                  className: v()(O().LineItemColumn, O().LineItemCapsule),
                  children: (0, n.jsx)(u.p, {
                    storeItem: i,
                    feature: "cart-items",
                    noImpressionTracking: !0,
                    className: O().ImageLink,
                    children: (0, n.jsx)(V, {
                      storeItem: i,
                      alt: t.name,
                      blurred: !!o.errors?.adult_content_restricted,
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: O().LineItemDetailsCtn,
                  children: [
                    (0, n.jsx)(P.UW, {
                      className: O().LineItemDetailsRowTop,
                      children: (0, n.jsx)("div", {
                        className: O().LineItemTitle,
                        id: w,
                        children: t.name,
                      }),
                    }),
                    f?.is_coming_soon && (0, n.jsx)(q, { storeItem: t }),
                    (0, n.jsxs)(K, {
                      validatedItem: o,
                      children: [
                        (0, n.jsx)(Y, { storeItem: t, purchaseOption: a }),
                        (0, n.jsx)(ee, { purchaseOption: a }),
                        (0, n.jsx)(ie, { storeItem: t, purchaseOption: a }),
                      ],
                    }),
                    (0, n.jsx)(ae, { validatedItem: o }),
                    W && (0, n.jsx)(se, { appids: N }),
                    (0, n.jsxs)(P.UW, {
                      className: O().LineItemSpaceBetween,
                      children: [
                        (0, n.jsx)("div", {
                          className: v()(O().LineItemCol, O().PlatformIcons),
                          children: (0, n.jsx)(m.Dm, { id: (0, g.Jz)(i) }),
                        }),
                        (0, n.jsx)(X, { purchaseOption: a, validatedItem: o }),
                      ],
                    }),
                    (0, n.jsx)(J, {
                      lineItem: r,
                      purchaseOption: a,
                      validatedItem: o,
                      rgAppIDs: x,
                      bAllAppsPrivate: z,
                      fnRemoveLineItem: d.mutate,
                      accessibilityId: w,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        const { lineItemID: t, validatedItem: i, storeItem: r } = e,
          a = (0, b.t)(t),
          o = a.isPending;
        return (0, n.jsxs)(P.Rz, {
          placeholder: !0,
          children: [
            o && (0, n.jsx)(P.UD, {}),
            (0, n.jsxs)("div", {
              className: v()(O().InnerLineItemCtn, o && O().PendingLineItem),
              children: [
                (0, n.jsx)("div", {
                  className: v()(O().LineItemColumn, O().LineItemCapsule),
                  children: (0, n.jsx)(u.p, {
                    storeItem: r,
                    noImpressionTracking: !0,
                    children: (0, n.jsx)(V, { storeItem: r }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: O().LineItemDetailsCtn,
                  children: [
                    (0, n.jsx)(P.UW, {
                      className: O().LineItemDetailsRowTop,
                      children: (0, n.jsx)("div", {
                        className: O().LineItemTitle,
                        children: r?.name,
                      }),
                    }),
                    !!i && (0, n.jsx)(K, { validatedItem: i }),
                    (0, n.jsx)(P.UW, {
                      className: O().LineItemSpaceBetween,
                      children: (0, n.jsx)(s.Z, {
                        onActivate: () => a.mutate(),
                        className: O().RemoveLineItem,
                        children: Q.Q8.Localize("#Cart_Remove"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        const { storeItem: t, alt: i, blurred: r } = e,
          { data: a } = (0, h.lv)((0, g.Jz)(t));
        let s = `${_.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
        return (
          a?.header
            ? (s =
                _.TS.STORE_ITEM_BASE_URL +
                a.asset_url_format.replace("${FILENAME}", a.header))
            : a?.small_capsule &&
              (s =
                _.TS.STORE_ITEM_BASE_URL +
                a.asset_url_format.replace("${FILENAME}", a.small_capsule)),
          (0, n.jsx)("img", {
            alt: i ?? t.name,
            className: r ? O().HeaderImgBlurred : O().HeaderImg,
            src: s,
          })
        );
      }
      function H(e) {
        return (0, n.jsx)(s.Z, {
          children: (0, n.jsx)(P.Rz, { children: e.children }),
        });
      }
      function K(e) {
        const { validatedItem: t, children: i } = e;
        return (0, n.jsxs)("div", {
          className: O().LineItemSpaceBetween,
          children: [(0, n.jsx)(D.Yz, { lineItem: t }), i],
        });
      }
      function q(e) {
        const { storeItem: t } = e,
          { data: i } = (0, h.by)((0, g.Jz)(t)),
          r = (0, f.VM)(i);
        if (!i) return null;
        let a = Q.Q8.Localize("#Cart_ComingSoon", r);
        return (
          ["text_tba", "text_comingsoon"].includes(i.coming_soon_display) &&
            (a = r),
          (0, n.jsx)(P.dp, { children: a })
        );
      }
      function X(e) {
        const { purchaseOption: t, validatedItem: i } = e;
        let r = t?.formatted_original_price,
          a = t?.formatted_final_price,
          s = t?.discount_pct;
        const o = i.subtotal?.amount_in_cents !== t?.final_price_in_cents;
        return (
          i.original_price &&
            i.subtotal &&
            o &&
            ((r = i.original_price.formatted_amount),
            (a = i.subtotal.formatted_amount),
            (s = (0, P.dR)(i))),
          (0, n.jsx)("div", {
            className: O().LineItemRightCol,
            children: (0, n.jsx)(d.kb, {
              className: O().PriceWidget,
              formatted_orig_price: r,
              formatted_final_price: a,
              discount_percent: s,
              bHideDiscountPercentForCompliance:
                t.hide_discount_pct_for_compliance,
              bDiscountFromCoupon: !!i.coupon_discount?.amount_in_cents,
            }),
          })
        );
      }
      function J(e) {
        const {
            lineItem: t,
            purchaseOption: i,
            validatedItem: r,
            rgAppIDs: a,
            bAllAppsPrivate: o,
            fnRemoveLineItem: c,
            accessibilityId: l,
          } = e,
          d = (0, W.EJ)(),
          [p] = (0, A.fg)(),
          u =
            p?.accountid_giftee || (d ? t.gift_info?.accountid_giftee : void 0),
          m = (0, F.j4)(),
          f =
            (0, W.ZB)() && !r?.restrict_add_additional_to_cart && !(0, W.kx)(m),
          h = r.errors?.adult_content_restricted,
          g = (0, E.A)(
            t.packageid,
            t.bundleid,
            ne(i),
            void 0,
            "cart-add-additional",
          ),
          I = y.useId(),
          x = y.useId();
        return (0, n.jsxs)(P.UW, {
          className: O().LineItemSpaceBetween,
          children: [
            (0, n.jsx)("div", {
              className: v()(O().LineItemCol, O().PurchaseOptionPickerCtn),
              children: u
                ? (0, n.jsx)($, { recipient: u })
                : (0, n.jsx)(re, {
                    lineItem: t,
                    rgAppIDs: a,
                    bAllAppsPrivate: o,
                    purchaseOption: i,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: v()(O().LineItemRightCol, O().AddRemoveLinks),
              children: [
                f &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(k.Gq, {
                        toolTipContent: Q.Q8.Localize(
                          "#Cart_LineItem_Add_Tooltip",
                        ),
                        usePointerEvents: !0,
                        children: (0, n.jsx)(s.Z, {
                          onActivate: () => !g.isPending && g.mutate(),
                          className: O().AddLineItem,
                          id: I,
                          "aria-labelledby": `${I} ${l}`,
                          children: Q.Q8.Localize("#Cart_Add"),
                        }),
                      }),
                      "|",
                    ],
                  }),
                !d &&
                  (0, n.jsx)(s.Z, {
                    onActivate: () => c(),
                    className: O().RemoveLineItem,
                    id: x,
                    "aria-labelledby": `${x} ${l}`,
                    children: Q.Q8.Localize("#Cart_Remove"),
                  }),
                h &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      "| ",
                      (0, n.jsx)("a", {
                        href: `${_.TS.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                        className: O().VerifyLineItem,
                        children: Q.Q8.Localize("#Cart_Verify"),
                      }),
                      " ",
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function $(e) {
        const { data: t } = (0, a.jn)(e.recipient),
          i = t?.public_data?.persona_name;
        return (0, n.jsx)("div", {
          className: O().GiftForNotice,
          children: Q.Q8.LocalizeReact(
            "#Cart_GiftForNotice",
            i ? (0, n.jsx)("span", { className: O().Name, children: i }) : "",
          ),
        });
      }
      function Y(e) {
        const { storeItem: t, purchaseOption: i } = e,
          r = !!i.requires_shipping && t.item_type === l.c6.RD,
          { data: a } = (0, p.DR)(r ? t.id : void 0);
        return a
          ? (0, n.jsx)(P.dp, {
              children: Q.Q8.Localize(
                "#Cart_ShippingEstimate_DeliveryDate",
                (0, w.x)(a),
              ),
            })
          : null;
      }
      function ee(e) {
        const { purchaseOption: t } = e;
        if (!t.requires_shipping) return null;
        const i = _.iA.country_code;
        return ["GB"].includes(i)
          ? (0, n.jsx)(P.dp, {
              children: (0, n.jsx)(s.Z, {
                children: (0, n.jsx)("a", {
                  className: O().ComplianceLink,
                  target: "_blank",
                  href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                  rel: "noreferrer",
                  children: Q.Q8.Localize(
                    "#Cart_LineItem_Hardware_Compliance_Label",
                  ),
                }),
              }),
            })
          : null;
      }
      const te = {
        1: "Second",
        2: "Minute",
        3: "Hour",
        4: "Day",
        5: "Week",
        6: "Month",
        7: "Year",
      };
      function ie(e) {
        const { storeItem: t, purchaseOption: i } = e;
        if (t.item_type !== l.c6.RD) return null;
        const r = i.recurrence_info;
        if (!r) return null;
        let a = "#Package";
        2 === r.billing_agreement_type && (a = "#GameBillingPackage");
        !!i.formatted_final_price && !!i.discount_pct && (a += "WithDiscount");
        const s = a + "CostIncludesSubscriptionBy" + te[r.renewal_time_unit];
        return (0, n.jsx)(P.dp, {
          children: Q.Q8.Localize(
            s,
            i.formatted_final_price,
            r.formatted_renewal_price,
            r.renewal_time_period,
            i.discount_pct,
          ),
        });
      }
      function ne(e) {
        return e.user_can_purchase_as_gift;
      }
      function re(e) {
        const {
            lineItem: t,
            rgAppIDs: i,
            bAllAppsPrivate: s,
            purchaseOption: o,
          } = e,
          c = (0, z.C)(),
          l = (0, L.DT)(),
          _ = (0, W.EJ)(),
          { data: d } = (0, a.jn)(t.gift_info?.accountid_giftee),
          p = !ne(o) || _,
          u = !(!(m = o).is_commercial_license && !m.requires_shipping);
        var m;
        let f = [
          {
            data: "myself",
            label: Q.Q8.Localize("#Cart_LineItemOptions_Myself"),
          },
        ];
        if (
          (u ||
            f.push({
              data: "private",
              label: Q.Q8.Localize("#Cart_LineItemOptions_Privately"),
              tooltip: Q.Q8.Localize("#Cart_LineItemOptions_PrivateTooltip"),
            }),
          !p)
        ) {
          const e = d?.public_data?.persona_name;
          t.gift_info?.accountid_giftee && e
            ? f.push({
                data: "gift",
                label: Q.Q8.Localize("#Cart_LineItemOptions_GiftForPersona", e),
              })
            : f.push({
                data: "gift",
                label: Q.Q8.Localize("#Cart_LineItemOptions_Gift"),
              });
        }
        let h = t.flags?.is_gift ? "gift" : "myself";
        if (("myself" === h && s && (h = "private"), 1 === f.length))
          return null;
        return (0, n.jsx)(r.l6, {
          onSelectionChange: (e) => {
            if (h === e.data) return;
            const n = (e) => l.mutate({ rgAppIDs: i, bPrivate: e }),
              r = (e) =>
                c.mutate({
                  lineItemID: t.line_item_id,
                  lineItemFlags: { ...t.flags, is_gift: e },
                  giftInfo: e ? t.gift_info : void 0,
                });
            "private" === h ? n(!1) : "gift" === h && r(!1),
              "private" === e.data ? n(!0) : "gift" === e.data && r(!0);
          },
          selectedValue: f.find((e) => e.data === h) ?? null,
          options: f,
          getOptionLabel: (e) =>
            e.tooltip
              ? (0, n.jsx)(k.Gq, {
                  toolTipContent: e.tooltip,
                  usePointerEvents: !0,
                  children: (0, n.jsx)("span", { children: e.label }),
                })
              : e.label,
          size: "1",
          placement: "bottom-start",
        });
      }
      const ae = y.memo(function (e) {
        const { validatedItem: t } = e,
          i = t.included_packageids ?? [],
          r = (0, x.eG)(),
          a = (0, j.E)({
            queries: i.map((e) => (0, h.mt)(r, { packageid: e })),
          }),
          s = [
            ...new Set(
              a
                .map((e) => e.data)
                .filter((e) => !!e)
                .flat(),
            ),
          ];
        return !s.length || (1 == s.length && !t.item_id?.bundleid)
          ? null
          : (0, n.jsxs)(P.UW, {
              text: !0,
              children: [
                (0, n.jsxs)("span", {
                  children: [
                    Q.Q8.LocalizePlural("#Cart_IncludesItems", s.length),
                    ":",
                    " ",
                  ],
                }),
                s.map((e, t) =>
                  (0, n.jsxs)(
                    y.Fragment,
                    {
                      children: [t > 0 && ", ", (0, n.jsx)(B.y, { appid: e })],
                    },
                    e,
                  ),
                ),
              ],
            });
      });
      function se(e) {
        const { appids: t } = e,
          i = t.map((e, t) =>
            (0, n.jsxs)(
              y.Fragment,
              { children: [t > 0 && ", ", (0, n.jsx)(B.y, { appid: e })] },
              e,
            ),
          );
        return (0, n.jsxs)(P.UW, {
          children: [
            (0, n.jsxs)("span", {
              children: [Q.Q8.Localize("#Cart_Notice_SomeAppsPrivate"), " "],
            }),
            i,
          ],
        });
      }
    },
    70343: (e, t, i) => {
      "use strict";
      i.d(t, {
        Rz: () => m,
        UD: () => h,
        UW: () => u,
        dR: () => I,
        dp: () => g,
        uO: () => p,
        vF: () => f,
      });
      var n = i(7850),
        r = i(76217),
        a = i(37788),
        s = i(75204),
        o = i(64238),
        c = i.n(o),
        l = i(22797),
        _ = i(86711),
        d = i.n(_);
      function p(e) {
        const { scrollable: t = !1, children: i } = e,
          a = t ? s.MS : r.Z;
        return (0, n.jsx)(a, {
          className: c()(d().LineItemsCtn, t && d().Scrollable),
          focusableIfEmpty: !0,
          children: i,
        });
      }
      function u(e) {
        const { text: t, children: i, className: a, noWrap: s } = e;
        return (0, n.jsx)(r.Z, {
          "flow-children": "row",
          className: c()(
            d().LineItemDetailsRow,
            t && d().Text,
            s && d().NoWrap,
            a,
          ),
          children: i,
        });
      }
      function m(e) {
        const { placeholder: t, className: i, children: r } = e;
        return (0, n.jsx)(a.YZ, {
          className: c()(d().LineItemWrapper, t && d().LineItemPlaceholder, i),
          children: r,
        });
      }
      function f() {
        return (0, n.jsx)(m, { placeholder: !0, children: (0, n.jsx)(h, {}) });
      }
      function h() {
        return (0, n.jsx)("div", {
          className: d().LoadingThrobber,
          children: (0, n.jsx)(l.t, {
            size: "medium",
            position: "center",
            msDelayAppear: 250,
          }),
        });
      }
      function g(e) {
        const { children: t } = e;
        return (0, n.jsx)(u, {
          text: !0,
          children: (0, n.jsx)("div", { className: d().Warning, children: t }),
        });
      }
      function I(e) {
        if (e.coupon_applied) return e.coupon_applied.discount_pct;
        const t = parseInt(e.original_price.amount_in_cents),
          i = parseInt(e.subtotal.amount_in_cents);
        return Math.min(99, Math.floor(((t - i) / t) * 100 + 0.5));
      }
    },
    8364: (e, t, i) => {
      "use strict";
      i.d(t, { MT: () => L, g7: () => I, p2: () => x, xz: () => g });
      var n = i(56545),
        r = i(94076),
        a = i(16909),
        s = i(95578),
        o = i(23809),
        c = i(9006),
        l = i(58214),
        _ = i(66418),
        d = i(80902),
        p = i(79443),
        u = i(27498),
        m = i(30709),
        f = i(93676);
      const h = {
          include_basic_info: !0,
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        },
        g = {
          ...h,
          include_included_items: !0,
          include_all_purchase_options: !0,
          included_item_data_request: h,
        };
      function I() {
        const e = (0, o.KV)(),
          t = (0, m.j4)(),
          [i] = (0, u.fg)(),
          { storeBrowseContext: s, cacheStoreItemData: h } = (0, c.yn)();
        return (0, d.I)({
          queryKey: (0, f.m4)(t, i),
          queryFn: async () =>
            (async function (e, t, i, s, o, c) {
              const _ = n.w.Init(r.vL);
              (0, p.kx)(t) || (0, p.uU)(t)
                ? (_.Body().set_gidshoppingcart(t.gid),
                  s && _.Body().set_gift_info(a.$z.fromObject(s)))
                : (0, p.sb)(t) && _.Body().set_gidreplayoftransid(t.gid);
              (0, l.rV)(i, _), o && (0, l.Bn)(_, o);
              const d = await r._o.ValidateCart(e, _);
              d.BSuccess() ||
                console.warn(
                  `Failed to validate shopping cart: ${d.GetEResult()}`,
                );
              if (o && c)
                for (const e of d.Body().cart_items()) c(e.store_item(), o);
              return d.Body().toObject();
            })(e, t, s, i, g, h),
          staleTime: 1 / 0,
          enabled: _.iA.logged_in || !(0, p.c2)(t),
        });
      }
      function x(e) {
        return (
          !(!e?.cart_items?.length || 0 === e.cart_items.length) &&
          e.cart_items.every(
            ({ store_item: e }) =>
              e?.item_type == s.c6.RD &&
              !!(e.self_purchase_option || e.best_purchase_option)
                ?.requires_shipping,
          )
        );
      }
      function L(e) {
        return (
          !(!e?.cart_items?.length || 0 === e.cart_items.length) &&
          e.cart_items.every(
            ({ store_item: e, gift_info: t }) =>
              !(
                e?.item_type != s.c6.RD ||
                (!t?.accountid_giftee && !t?.email_giftee)
              ),
          )
        );
      }
    },
    93332: (e, t, i) => {
      "use strict";
      i.d(t, { Dv: () => _ });
      var n = i(29233),
        r = i(22837),
        a = i(56545),
        s = i(88544),
        o = (i(42457), i(68950)),
        c = i(23809),
        l = i(80902);
      function _() {
        const e = (0, c.KV)(),
          t = (0, o.LH)();
        return (0, l.I)(
          (function (e, t) {
            return {
              queryKey: ["GetFriendsList", t],
              queryFn: async () => {
                const t = a.w.Init(s.pH),
                  i = await s.DF.GetFriendsList(e, t);
                return i
                  .Body()
                  .friendslist()
                  ?.friends()
                  ?.filter((e) => {
                    if (!e.ulfriendid()) return !1;
                    const t = new n.b2(e.ulfriendid());
                    return (
                      (e.efriendrelationship() == r._UC ||
                        e.efriendrelationship() == r.Ec7) &&
                      t.BIsIndividualAccount()
                    );
                  })
                  .map((e) => e.ulfriendid());
              },
            };
          })(e, t),
        );
      }
    },
  },
]);
