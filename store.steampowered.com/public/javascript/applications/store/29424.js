/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [29424],
    {
      63088: (v, D, t) => {
        "use strict";
        t.d(D, { Z: () => l, t: () => c });
        var s = t(35038),
          f = t(29392),
          m = t(36053),
          O = t(68312),
          M = t(75233),
          g = t(51614),
          I = t(48366),
          C = t(9843),
          u = t(78280),
          r = t(83665),
          L = t(20125);
        async function P(d, n, i) {
          if ((0, I.c2)(n)) {
            const o = s.w.Init(f.tj);
            o.Body().set_line_item_id(i);
            const _ = await f.t8.RemoveItemFromCart(d, o);
            return (0, L.WZ)(), _.Body().toObject();
          } else {
            const o = s.w.Init(m.VJ);
            o.Body().set_gidlineitems([i]), o.Body().set_gidshoppingcart(n.gid);
            const _ = await m.Q2.RemoveLineItems(d, o);
            return (0, L.WZ)(), _.Body().toObject();
          }
        }
        function c(d) {
          const n = (0, O.KV)(),
            i = (0, M.jE)(),
            o = (0, u.j4)();
          return (0, g.n)({
            mutationFn: async () => await P(n, o, d),
            onSuccess: (_) => {
              "cart" in _ ? (0, r.LN)(i, o, _.cart) : (0, r.Cd)(i, o);
            },
          });
        }
        async function p(d, n) {
          if ((0, I.c2)(n)) {
            const i = s.w.Init(f.HK);
            return (await f.t8.DeleteCart(d, i)).BSuccess();
          } else {
            const i = await (0, C.d0)(d, n);
            if (i && i.line_items && i.line_items.length) {
              const o = s.w.Init(m.VJ);
              return (
                o
                  .Body()
                  .set_gidlineitems(
                    i.line_items.map(({ line_item_id: e }) => e),
                  ),
                o.Body().set_gidshoppingcart(n.gid),
                (await m.Q2.RemoveLineItems(d, o)).BSuccess()
              );
            }
            return !1;
          }
        }
        function l() {
          const d = (0, O.KV)(),
            n = (0, M.jE)(),
            i = (0, u.j4)();
          return (0, g.n)({
            mutationFn: async () => await p(d, i),
            onSuccess: () => (0, r.Cd)(n, i),
          });
        }
      },
      79485: (v, D, t) => {
        "use strict";
        t.d(D, { C: () => c });
        var s = t(35038),
          f = t(29392),
          m = t(8173),
          O = t(72609),
          M = t(68312),
          g = t(75233),
          I = t(51614),
          C = t(78280),
          u = t(83665),
          r = t(48366),
          L = t(36053);
        async function P(p, l, d, n, i, o) {
          if ((0, r.c2)(l)) {
            const _ = s.w.Init(f.Bk);
            _.Body().set_line_item_id(d),
              _.Body().set_user_country(O.iA.country_code),
              i && _.Body().set_gift_info(m.$z.fromObject(i)),
              n && _.Body().set_flags(f.Eo.fromObject(n)),
              o && _.Body().set_apply_gidcoupon(o);
            const e = await f.t8.ModifyLineItem(p, _);
            return (
              e.BSuccess() ||
                console.warn(`Failed to update gift info: ${e.GetEResult()}`),
              [e.GetEResult(), e.Body().toObject()]
            );
          } else {
            const _ = s.w.Init(L.ic);
            _.Body().set_gidlineitem(d),
              _.Body().set_gidshoppingcart(l.gid),
              i
                ? _.Body().set_gift_info(m.$z.fromObject(i))
                : n?.is_gift &&
                  _.Body().set_gift_info(
                    m.$z.fromObject({ accountid_giftee: 0, email_giftee: "" }),
                  );
            const e = await L.Q2.ModifyLineItem(p, _);
            return (
              e.BSuccess() ||
                console.warn(
                  `Failed to update gift info in anonymous cart: ${e.GetEResult()}`,
                ),
              e.Body().toObject()
            );
          }
        }
        function c(p) {
          const l = (0, C.j4)(),
            d = (0, M.KV)(),
            n = (0, g.jE)(),
            i = (0, u.GO)(l);
          return (0, I.n)({
            mutationFn: (o) =>
              P(d, l, o.lineItemID, o.lineItemFlags, o.giftInfo, o.gidCoupon),
            onMutate: async (o) => {
              await n.cancelQueries({ queryKey: i });
              const _ = n.getQueryData(i);
              return (
                n.setQueryData(i, (e) => ({
                  ...(e ?? {}),
                  line_items:
                    e?.line_items?.map((a) =>
                      a.line_item_id !== o.lineItemID
                        ? a
                        : {
                            ...a,
                            flags: o.lineItemFlags || a.flags,
                            gift_info: o.giftInfo || a.gift_info,
                          },
                    ) ?? [],
                })),
                { previousCart: _ }
              );
            },
            onSuccess: (o) => {
              "cart" in o ? (0, u.LN)(n, l, o.cart) : (0, u.Cd)(n, l);
            },
            onError: (o, _, e) => {
              e?.previousCart && n.setQueryData(i, e.previousCart);
            },
          });
        }
      },
      2165: (v, D, t) => {
        "use strict";
        t.d(D, { Y: () => P, h: () => n });
        var s = t(7850),
          f = t(38580),
          m = t(8173),
          O = t(72609),
          M = t(20117),
          g = t(27894),
          I = t(40358),
          C = t(68094),
          u = t(90626),
          r = t(36798),
          L = t(58162);
        function P(_) {
          const { lineItem: e } = _;
          let a = [],
            E = !!e.gift_info?.accountid_giftee;
          return (
            e.errors?.duplicate_appids_in_cart?.length &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.ZK,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_DuplicateApps_LineItem",
                    ),
                    appids: e.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            a.push((0, s.jsx)(i, { lineItem: e }, "owned_apps")),
            e.errors?.unavailable_in_country &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.Hp,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            e.errors?.adult_content_restricted &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.C4,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            e.errors?.commercial_license_restricted &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.yQ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            a.push((0, s.jsx)(o, { lineItem: e }, "coupon_notices")),
            e.errors?.too_many_in_cart &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.YF,
                    notice_text: r.Q8.Localize("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            e.errors?.missing_must_own_appids?.length &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.VL,
                    notice_text: E
                      ? r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                        )
                      : r.Q8.Localize(
                          "#Cart_Error_MissingMustOwnApps_LineItem",
                        ),
                    appids: e.errors.missing_must_own_appids,
                  },
                  "missing_must_own_appids",
                ),
              ),
            e.warnings?.appids_in_mastersub?.length &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.Q7,
                    notice_text: r.Q8.Localize(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: e.warnings.appids_in_mastersub.flatMap((h) =>
                      h.cart_appid ? [h.cart_appid] : [],
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            e.warnings?.owned_appids?.length &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.fZ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: e.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            e.warnings?.owned_appids_extra_copy?.length &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.Vx,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_ExtraCopies_LineItem",
                    ),
                    appids: e.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            e.warnings?.price_has_changed &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.vY,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_PriceChange_LineItem",
                    ),
                  },
                  "price_has_changed",
                ),
              ),
            e.warnings?.non_refundable &&
              a.push(
                (0, s.jsx)(
                  c,
                  {
                    purchase_state: m.WN.YQ,
                    notice_text: r.Q8.Localize(
                      "#Cart_Warning_NoRefund_LineItem",
                    ),
                  },
                  "non_refundable",
                ),
              ),
            a.push((0, s.jsx)(d, { lineItem: e }, "available_cheaper")),
            E &&
              a.push(
                (0, s.jsx)(
                  n,
                  { nGifteeAccountID: e.gift_info.accountid_giftee },
                  "non_friend_gift",
                ),
              ),
            a
          );
        }
        function c(_) {
          const { notice_text: e, appids: a } = _;
          return (0, s.jsxs)(L.dp, {
            children: [e, " ", (0, s.jsx)(p, { rgAppIDs: a ?? [] })],
          });
        }
        function p(_) {
          const { rgAppIDs: e } = _;
          return !e || e.length == 0
            ? null
            : e.map((a, E) =>
                (0, s.jsx)(
                  l,
                  { appid: a, last: E >= e.length - 1 },
                  `${a}_${E}`,
                ),
              );
        }
        function l(_) {
          const { appid: e, last: a } = _,
            { data: E } = (0, I.J$)({ appid: e });
          return E
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(g.p, {
                    storeItem: E,
                    noImpressionTracking: !0,
                    children: E.name,
                  }),
                  !a && (0, s.jsx)(s.Fragment, { children: ", " }),
                ],
              })
            : null;
        }
        function d(_) {
          const { lineItem: e } = _,
            { data: a } = (0, I.mr)(e.item_id),
            { data: E } = (0, I.EO)(e.item_id),
            R =
              !!!e.gift_info?.accountid_giftee &&
              !!a &&
              !!E &&
              !(0, C.vk)(a, E);
          let A;
          R &&
            (A = E.packageid
              ? { packageid: E.packageid }
              : { bundleid: E.bundleid });
          const { data: B } = (0, I.J$)(A);
          return R
            ? (0, s.jsx)(L.dp, {
                children: r.Q8.LocalizeReact(
                  "#Cart_Warning_AvailableAtALowerPrice",
                  (0, s.jsx)(g.p, {
                    storeItem: B,
                    noImpressionTracking: !0,
                    children: E.purchase_option_name,
                  }),
                ),
              })
            : null;
        }
        function n(_) {
          const { nGifteeAccountID: e } = _,
            a = M.b2
              .InitFromAccountID(e, O.TS.EUNIVERSE)
              .ConvertTo64BitString(),
            { data: E } = (0, f.Dv)();
          return u.useMemo(() => !E || E.includes(a), [E, a]) || !O.iA.logged_in
            ? null
            : (0, s.jsx)(L.dp, {
                children: r.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
              });
        }
        function i(_) {
          const { lineItem: e } = _;
          if (!e.errors?.owned_appids?.length) return null;
          let a = !!e.gift_info?.accountid_giftee;
          if (e.errors?.has_existing_billing_agreement)
            return (0, s.jsx)(c, {
              purchase_state: m.WN.Gy,
              notice_text: r.Q8.Localize(
                "#Cart_Error_ExistingBillingAgreement",
              ),
            });
          {
            const E = (e.store_item?.included_appids?.length ?? 0) > 1;
            let h = r.Q8.Localize(
              a
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              E &&
                (h = r.Q8.Localize(
                  a
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, s.jsx)(c, {
                purchase_state: m.WN.kj,
                notice_text: h,
                appids: E ? e.errors.owned_appids : void 0,
              })
            );
          }
        }
        function o(_) {
          const { lineItem: e } = _;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              e.errors?.coupon_exclusive_promo &&
                (0, s.jsx)(c, {
                  purchase_state: m.WN.rp,
                  notice_text: r.Q8.Localize(
                    "#Cart_Error_CouponIsExclusivePromo",
                  ),
                }),
              e.errors?.invalid_coupon &&
                (0, s.jsx)(c, {
                  purchase_state: m.WN.p_,
                  notice_text: r.Q8.Localize("#Cart_Error_CouponIsInvalid"),
                }),
              e.errors?.invalid_coupon_for_item &&
                (0, s.jsx)(c, {
                  purchase_state: m.WN.VJ,
                  notice_text: r.Q8.Localize(
                    "#Cart_Error_CouponIsInvalidForItem",
                  ),
                }),
            ],
          });
        }
      },
      58162: (v, D, t) => {
        "use strict";
        t.d(D, {
          Rz: () => P,
          UD: () => p,
          UW: () => L,
          dR: () => d,
          dp: () => l,
          uO: () => r,
          vF: () => c,
        });
        var s = t(7850),
          f = t(19298),
          m = t(78365),
          O = t(7967),
          M = t(64238),
          g = t.n(M),
          I = t(85599),
          C = t(86711),
          u = t.n(C);
        function r(n) {
          const { scrollable: i = !1, children: o } = n,
            _ = i ? O.MS : f.Z;
          return (0, s.jsx)(_, {
            className: g()(u().LineItemsCtn, i && u().Scrollable),
            focusableIfEmpty: !0,
            children: o,
          });
        }
        function L(n) {
          const { text: i, children: o, className: _, noWrap: e } = n;
          return (0, s.jsx)(f.Z, {
            "flow-children": "row",
            className: g()(
              u().LineItemDetailsRow,
              i && u().Text,
              e && u().NoWrap,
              _,
            ),
            children: o,
          });
        }
        function P(n) {
          const { placeholder: i, className: o, children: _ } = n;
          return (0, s.jsx)(m.YZ, {
            className: g()(
              u().LineItemWrapper,
              i && u().LineItemPlaceholder,
              o,
            ),
            children: _,
          });
        }
        function c() {
          return (0, s.jsx)(P, {
            placeholder: !0,
            children: (0, s.jsx)(p, {}),
          });
        }
        function p() {
          return (0, s.jsx)("div", {
            className: u().LoadingThrobber,
            children: (0, s.jsx)(I.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 250,
            }),
          });
        }
        function l(n) {
          const { children: i } = n;
          return (0, s.jsx)(L, {
            text: !0,
            children: (0, s.jsx)("div", {
              className: u().Warning,
              children: i,
            }),
          });
        }
        function d(n) {
          if (n.coupon_applied) return n.coupon_applied.discount_pct;
          const i = parseInt(n.original_price.amount_in_cents),
            o = parseInt(n.subtotal.amount_in_cents);
          return Math.min(99, Math.floor(((i - o) / i) * 100 + 0.5));
        }
      },
      87913: (v, D, t) => {
        "use strict";
        t.d(D, { g: () => P });
        var s = t(35038),
          f = t(19563),
          m = t(8173),
          O = t(68312),
          M = t(5827),
          g = t(63667),
          I = t(80902),
          C = t(98609),
          u = t(48366),
          r = t(78280),
          L = t(83665);
        function P(p, l) {
          const d = (0, O.KV)(),
            n = (0, r.j4)(),
            { storeBrowseContext: i, cacheStoreItemData: o } = (0, M.yn)();
          return (0, I.I)({
            queryKey: (0, L.m4)(n, p),
            queryFn: async () => c(d, n, i, p, l, o),
            staleTime: 1 / 0,
            enabled: C.iA.logged_in || !(0, u.c2)(n),
          });
        }
        async function c(p, l, d, n, i, o) {
          const _ = s.w.Init(f.vL);
          (0, u.kx)(l) || (0, u.uU)(l)
            ? (_.Body().set_gidshoppingcart(l.gid),
              n && _.Body().set_gift_info(m.$z.fromObject(n)))
            : (0, u.sb)(l) && _.Body().set_gidreplayoftransid(l.gid),
            (0, g.rV)(d, _),
            i && (0, g.Bn)(_, i);
          const e = await f._o.ValidateCart(p, _);
          if (
            (e.BSuccess() ||
              console.warn(
                `Failed to validate shopping cart: ${e.GetEResult()}`,
              ),
            i && o)
          )
            for (const a of e.Body().cart_items()) o(a.store_item(), i);
          return e.Body().toObject();
        }
      },
      38580: (v, D, t) => {
        "use strict";
        t.d(D, { Dv: () => u });
        var s = t(20117),
          f = t(99412),
          m = t(35038),
          O = t(10335),
          M = t(27386),
          g = t(42993),
          I = t(68312),
          C = t(80902);
        function u() {
          const c = (0, I.KV)(),
            p = (0, g.LH)();
          return (0, C.I)(r(c, p));
        }
        function r(c, p) {
          return {
            queryKey: ["GetFriendsList", p],
            queryFn: async () => {
              const l = m.w.Init(O.pH);
              return (await O.DF.GetFriendsList(c, l))
                .Body()
                .friendslist()
                ?.friends()
                ?.filter((n) => {
                  if (!n.ulfriendid()) return !1;
                  const i = new s.b2(n.ulfriendid());
                  return (
                    (n.efriendrelationship() == f._UC ||
                      n.efriendrelationship() == f.Ec7) &&
                    i.BIsIndividualAccount()
                  );
                })
                .map((n) => n.ulfriendid());
            },
          };
        }
        function L() {
          const c = useActiveServiceTransport(),
            p = useActiveAccount();
          return useQuery(P(c, p));
        }
        function P(c, p) {
          return {
            queryKey: ["GetFriendNicknameMap", p],
            queryFn: async () => {
              const l = CProtoBufMsg.Init(CPlayer_GetNicknameList_Request),
                d = await PlayerService.GetNicknameList(c, l);
              return new Map(
                d
                  .Body()
                  .toObject()
                  ?.nicknames?.map((n) => [n.accountid, n.nickname]),
              );
            },
          };
        }
      },
      86711: (v) => {
        v.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1MfAwU630QwDv6FuV9c_Dr",
          LineItemsCtn: "_3ypRUtQoOfOrCsyHlzfGm4",
          StoreSalePriceBox: "_5m_q0MLlnLkt_KBd7iMbO",
          StoreSaleDiscountedPriceCtn: "_1ZzX6NkuELfMhPL0SJCQSK",
          Scrollable: "_2A58_XmT-KCSwE_kh-xntF",
          LineItemWrapper: "XjPmFc2t_i1DAuEXEbIX",
          fadeIn: "xtUORpc8Xy9Hs_tdAIitT",
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
          LineItemDropDown: "QL-7d2s_ZGbceWxP5eoY4",
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
          DropDownThin: "_2GLDG_XIMaVS7hU2xEFzBo",
          DropDownOptionsCtnThin: "_1Vsr8vtFZd-ID4w4nvUjbe",
          DropDownOptionItem: "_3RfIktrc1KzaKTWmWS3JLC",
          WhiteText: "_1CYn6Bwc5kuZ25-Gyb9btE",
          ErrorLineItem: "_2Qnb-DOaU8BbFWOUBG3hs1",
          Left: "Twv2unKjIVTB3vmgieygi",
          Error: "_2LPurUnl-MyMX6q6B0uNX",
          Muted: "_3efIWtJm5nAuQLmq9N3nJd",
          GiftForNotice: "tKoWmz4HQdpU6S-Fq6IEh",
          Name: "_2BZrRaucjIMeqixZMVlakn",
          RemoveButton: "_1j8t9ZjX3tyKrSBnkY6IeG",
          LineItemStoreHover: "MaJOGQvA8cOPjY5-v5S-c",
        };
      },
    },
  ]);
})();
