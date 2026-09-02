/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9246],
    {
      95936: (N, R, n) => {
        "use strict";
        n.r(R), n.d(R, { default: () => he });
        var e = n(7850),
          p = n(19298),
          P = n(66243),
          M = n(47604),
          z = n(90626),
          b = n(98609),
          F = n(30815),
          d = n(36798),
          W = n(9843),
          G = n(87913),
          V = n(68388),
          $ = n(85978),
          J = n(71742),
          j = n(29392),
          Z = n(56062),
          C = n(72609),
          O = n(27894),
          K = n(24873),
          Y = n(95242),
          H = n(3348),
          f = n(40358),
          L = n(68094),
          X = n(56925),
          k = n(64238),
          v = n.n(k),
          w = n(25792),
          q = n(91405),
          y = n(63088),
          _ = n(79485),
          ee = n(48366),
          te = n(2165),
          ae = n(86711),
          i = n.n(ae),
          m = n(58162);
        function ne(s) {
          const { lineItems: t, cartValidation: a, scrollable: o = !1 } = s;
          if (!t.length)
            return (0, e.jsx)("div", {
              children: d.Q8.Localize("#Cart_Empty"),
            });
          const r = a?.cart_items
            ? a.cart_items.reduce((l, c) => ((l[c.line_item_id] = c), l), {})
            : {};
          return (0, e.jsx)(m.uO, {
            scrollable: o,
            children:
              t &&
              t.map((l, c) =>
                l
                  ? (0, e.jsx)(
                      w.tH,
                      {
                        fallback: (u) => (0, e.jsx)(se, { item: l, error: u }),
                        children: (0, e.jsx)(
                          ie,
                          { item: l, validatedItem: r[l.line_item_id] },
                          l.line_item_id,
                        ),
                      },
                      l?.line_item_id || c,
                    )
                  : (0, e.jsx)(m.vF, {}, c),
              ),
          });
        }
        function ie(s) {
          const { item: t, validatedItem: a } = s,
            o = le(t);
          if (!o) throw `Unknown line item type (${t.type})`;
          const { data: r } = (0, f.J$)(o),
            { data: l } = (0, f.U2)(o),
            { data: c } = (0, f.mr)(o),
            u = l ? (0, L.Jz)(l) : o;
          return (
            (0, f.lv)(u),
            (0, f.qI)(u),
            r && (!r.visible || c === null)
              ? (0, e.jsx)(re, {
                  lineItemID: t.line_item_id,
                  validatedItem: a,
                  storeItem: r,
                })
              : !r || !l || !c || !a
                ? (0, e.jsx)(m.vF, {})
                : (0, e.jsx)(oe, {
                    lineItem: t,
                    validatedItem: a,
                    storeItem: r,
                    displayItem: l,
                    purchaseOption: c,
                  })
          );
        }
        function se(s) {
          const { item: t, error: a } = s,
            o = (0, y.t)(t.line_item_id);
          return (0, e.jsxs)(m.Rz, {
            className: i().ErrorLineItem,
            children: [
              (0, e.jsxs)("div", {
                className: i().Left,
                children: [
                  (0, e.jsx)("div", {
                    className: i().Error,
                    children: d.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, e.jsx)("div", {
                    className: i().Muted,
                    children: a.message,
                  }),
                ],
              }),
              (0, e.jsx)(p.Z, {
                onActivate: () => o.mutate(),
                className: i().RemoveButton,
                children: d.Q8.Localize("#Cart_Remove"),
              }),
            ],
          });
        }
        function le(s) {
          const t = s.type;
          switch (t) {
            case j.KW.$B:
              return { packageid: s.packageid };
            case j.KW.XY:
              return { bundleid: s.bundleid };
            case j.KW.vC:
              return;
            default:
              (0, J.z_)(t, `Unhandled type: ${t}`);
          }
        }
        function oe(s) {
          const {
              storeItem: t,
              displayItem: a,
              lineItem: o,
              purchaseOption: r,
              validatedItem: l,
            } = s,
            c = o.line_item_id,
            u = (0, y.t)(c),
            h = u.isPending || u.isSuccess;
          let S = o.flags?.is_gift ? "gift" : "myself";
          return (0, e.jsx)(p.Z, {
            children: (0, e.jsxs)(m.Rz, {
              children: [
                h && (0, e.jsx)(m.UD, {}),
                (0, e.jsxs)("div", {
                  className: v()(
                    i().InnerLineItemCtn,
                    h && i().PendingLineItem,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: v()(i().LineItemColumn, i().LineItemCapsule),
                      children: (0, e.jsx)(O.p, {
                        storeItem: a,
                        feature: "cart-items",
                        noImpressionTracking: !0,
                        children: (0, e.jsx)(D, { storeItem: a }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: i().LineItemDetailsCtn,
                      children: [
                        (0, e.jsx)(m.UW, {
                          className: i().LineItemDetailsRowTop,
                          children: (0, e.jsx)("div", {
                            className: i().LineItemTitle,
                            children: t.name,
                          }),
                        }),
                        t?.is_coming_soon && (0, e.jsx)(ce, { storeItem: t }),
                        (0, e.jsx)(T, { validatedItem: l }),
                        (0, e.jsx)(de, { storeItem: t }),
                        (0, e.jsxs)(m.UW, {
                          className: i().LineItemSpaceBetween,
                          children: [
                            (0, e.jsx)("div", {
                              className: v()(
                                i().LineItemCol,
                                i().PlatformIcons,
                              ),
                              children: (0, e.jsx)(K.Dm, { id: (0, L.Jz)(a) }),
                            }),
                            (0, e.jsx)(me, {
                              purchaseOption: r,
                              validatedItem: l,
                            }),
                          ],
                        }),
                        (0, e.jsx)(ue, {
                          lineItem: o,
                          storeItem: t,
                          purchaseOption: r,
                          validatedItem: l,
                          initialPurchaseOption: S,
                          fnRemoveLineItem: u.mutate,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function re(s) {
          const { lineItemID: t, validatedItem: a, storeItem: o } = s,
            r = (0, y.t)(t),
            l = r.isPending;
          return (0, e.jsxs)(m.Rz, {
            placeholder: !0,
            children: [
              l && (0, e.jsx)(m.UD, {}),
              (0, e.jsxs)("div", {
                className: v()(i().InnerLineItemCtn, l && i().PendingLineItem),
                children: [
                  (0, e.jsx)("div", {
                    className: v()(i().LineItemColumn, i().LineItemCapsule),
                    children: (0, e.jsx)(O.p, {
                      storeItem: o,
                      noImpressionTracking: !0,
                      children: (0, e.jsx)(D, { storeItem: o }),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: i().LineItemDetailsCtn,
                    children: [
                      (0, e.jsx)(m.UW, {
                        className: i().LineItemDetailsRowTop,
                        children: (0, e.jsx)("div", {
                          className: i().LineItemTitle,
                          children: o?.name,
                        }),
                      }),
                      !!a && (0, e.jsx)(T, { validatedItem: a }),
                      (0, e.jsx)(m.UW, {
                        className: i().LineItemSpaceBetween,
                        children: (0, e.jsx)(p.Z, {
                          onActivate: () => r.mutate(),
                          className: i().RemoveLineItem,
                          children: d.Q8.Localize("#Cart_Remove"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function D(s) {
          const { storeItem: t } = s,
            { data: a } = (0, f.lv)((0, L.Jz)(t));
          let r = `${C.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          return (
            a?.header
              ? (r =
                  C.TS.STORE_ITEM_BASE_URL +
                  a.asset_url_format.replace("${FILENAME}", a.header))
              : a?.small_capsule &&
                (r =
                  C.TS.STORE_ITEM_BASE_URL +
                  a.asset_url_format.replace("${FILENAME}", a.small_capsule)),
            (0, e.jsx)("img", { alt: t.name, className: i().HeaderImg, src: r })
          );
        }
        function T(s) {
          const { validatedItem: t, children: a } = s;
          return (0, e.jsxs)("div", {
            className: i().LineItemSpaceBetween,
            children: [(0, e.jsx)(te.Y, { lineItem: t }), a],
          });
        }
        function ce(s) {
          const { storeItem: t } = s,
            { data: a } = (0, f.by)((0, L.Jz)(t)),
            o = (0, H.VM)(a);
          if (!a) return null;
          let r = d.Q8.Localize("#Cart_ComingSoon", o);
          return (
            ["text_tba", "text_comingsoon"].includes(a.coming_soon_display) &&
              (r = o),
            (0, e.jsx)(m.dp, { children: r })
          );
        }
        function de(s) {
          return null;
        }
        function me(s) {
          const { purchaseOption: t, validatedItem: a } = s;
          let o = t?.formatted_original_price,
            r = t?.formatted_final_price,
            l = t?.discount_pct;
          return (
            a &&
              a.original_price &&
              a.subtotal &&
              ((o = a.original_price.formatted_amount),
              (r = a.subtotal.formatted_amount),
              (l = (0, m.dR)(a))),
            (0, e.jsx)("div", {
              className: i().LineItemRightCol,
              children: (0, e.jsx)(Y.z, {
                transparentBackground: !0,
                purchaseOption: {
                  ...t,
                  formatted_original_price: o,
                  formatted_final_price: r,
                  discount_pct: l,
                },
              }),
            })
          );
        }
        function ue(s) {
          const {
              lineItem: t,
              storeItem: a,
              purchaseOption: o,
              validatedItem: r,
              initialPurchaseOption: l,
              fnRemoveLineItem: c,
            } = s,
            u = !r?.restrict_add_additional_to_cart,
            h = (0, q.A)(t.packageid, t.bundleid, o.user_can_purchase_as_gift);
          return (0, e.jsxs)(m.UW, {
            className: i().LineItemSpaceBetween,
            noWrap: !0,
            children: [
              (0, e.jsx)("div", {
                className: v()(i().LineItemCol, i().PurchaseOptionPickerCtn),
                children: (0, e.jsx)(ve, {
                  lineItem: t,
                  storeItem: a,
                  initialValue: l,
                  purchaseOption: o,
                }),
              }),
              (0, e.jsxs)("div", {
                className: v()(i().LineItemRightCol, i().AddRemoveLinks),
                children: [
                  u &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(p.Z, {
                          onActivate: () => !h.isPending && h.mutate(),
                          className: i().AddLineItem,
                          title: d.Q8.Localize("#Cart_LineItem_Add_Tooltip"),
                          children: d.Q8.Localize("#Cart_Add"),
                        }),
                        "|",
                      ],
                    }),
                  (0, e.jsx)(p.Z, {
                    onActivate: () => c(),
                    className: i().RemoveLineItem,
                    children: d.Q8.Localize("#Cart_Remove"),
                  }),
                ],
              }),
            ],
          });
        }
        function Ie(s) {
          return s.user_can_purchase_as_gift;
        }
        function fe(s) {
          return !s.is_commercial_license && !s.requires_shipping;
        }
        function ve(s) {
          const {
              lineItem: t,
              storeItem: a,
              initialValue: o,
              purchaseOption: r,
            } = s,
            [l, c] = z.useState(o),
            u = (0, _.C)(),
            h = (0, X.DT)(),
            E = (0, ee.EJ)(),
            S = !Ie(r) || E,
            pe = !fe(r),
            { data: B } = (0, $.jn)(t.gift_info?.accountid_giftee);
          let g = [
            {
              data: "myself",
              label: d.Q8.Localize("#Cart_LineItemOptions_Myself"),
            },
            !pe && {
              data: "private",
              label: d.Q8.Localize("#Cart_LineItemOptions_Privately"),
            },
          ].filter((I) => !!I);
          if (
            (S ||
              (t.gift_info?.accountid_giftee && B?.public_data?.persona_name
                ? g.push({
                    data: "gift",
                    label: d.Q8.Localize(
                      "#Cart_LineItemOptions_GiftForPersona",
                      B?.public_data?.persona_name,
                    ),
                  })
                : g.push({
                    data: "gift",
                    label: d.Q8.Localize("#Cart_LineItemOptions_Gift"),
                  })),
            g.length === 1)
          )
            return null;
          const ge = (I) => {
            if (l === I.data) return;
            const U = (x) =>
                h.mutate({
                  rgAppIDs:
                    (a.item_type === Z.c6.qI ? [a.appid] : a.included_appids) ??
                    [],
                  bPrivate: x,
                }),
              Q = (x) =>
                u.mutate({
                  lineItemID: t.line_item_id,
                  lineItemFlags: { ...t.flags, is_gift: x },
                  giftInfo: x ? t.gift_info : void 0,
                });
            l === "private" ? U(!1) : l === "gift" && Q(!1),
              I.data === "private" ? U(!0) : I.data === "gift" && Q(!0),
              c(I.data);
          };
          return (0, e.jsx)(V.l6, {
            onSelectionChange: ge,
            selectedValue: g.find((I) => I.data === l),
            options: g,
            getOptionLabel: (I) => I.label,
            size: "1",
          });
        }
        var A = n(52169);
        function he(s) {
          const { closeCart: t, lineItemIDs: a } = s,
            o = (0, d.S5)(),
            { data: r } = (0, W.UI)(),
            { data: l } = (0, G.g)(),
            c = (0, F.Yj)(a);
          return (
            z.useEffect(() => {
              c && c?.length == 0 && t();
            }, [c, t]),
            !c || !o
              ? null
              : (0, e.jsx)(M.s, {
                  onClose: t,
                  navID: "CartModal",
                  strTitle: d.Q8.Localize("#Cart_AddedToYourCart"),
                  children: (0, e.jsxs)("div", {
                    className: A.ShoppingCartModalContent,
                    children: [
                      (0, e.jsx)(ne, {
                        lineItems: c,
                        cartValidation: l,
                        scrollable: !0,
                      }),
                      (0, e.jsxs)(p.Z, {
                        className: A.ShoppingCartModalBtns,
                        children: [
                          (0, e.jsx)(P.Oh, {
                            onClick: t,
                            children: d.Q8.Localize("#Cart_ContinueShopping"),
                          }),
                          (0, e.jsx)(P.x0, {
                            autoFocus: !0,
                            href: `${b.TS.STORE_BASE_URL}cart/`,
                            children: d.Q8.Localize(
                              "#Cart_ViewMyCart",
                              r.line_items.length,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
          );
        }
      },
      52169: (N) => {
        N.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1HYjtPJd8D-AHSlOebB4f-",
          ShoppingCartModalContent: "_1859zsZbgy1ECsQDqMGedi",
          ShoppingCartModalBtns: "md6XqKKeYLOQhwbHaayWp",
        };
      },
    },
  ]);
})();
