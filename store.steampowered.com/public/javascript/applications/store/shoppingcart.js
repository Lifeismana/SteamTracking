/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [62965],
  {
    64908: (e, t, n) => {
      n.r(t), n.d(t, { ShoppingCartErrorModal: () => B, default: () => b });
      var i = n(7850),
        a = n(83392),
        r = n(20187),
        s = n(53965),
        c = n(13904),
        l = n(79443),
        o = n(38858),
        d = n(76217),
        u = n(2551),
        m = n(8527),
        f = n(23809),
        h = n(80902),
        C = n(75233),
        _ = n(51614);
      const g = "giftee-hint",
        p = 600;
      var j = n(60014),
        w = n(41515),
        x = n(90626),
        E = n(1035),
        v = n(31292),
        D = n(14336),
        y = n(56283),
        I = n(74568),
        N = n(61859),
        k = n(30470),
        M = n(48980),
        S = n(11543),
        A = n.n(S),
        G = n(53534);
      function b(e) {
        const { closeCart: t, lineItemIDs: n, replacedPackageIDs: a } = e,
          r = (0, w.UI)(),
          { data: s } = (0, w.g7)(),
          c = (0, o.Yj)(n),
          l = (0, j.aL)(k.TS.STORE_BASE_URL + "cart");
        if (
          (x.useEffect(() => {
            r.isSuccess && c && 0 === c.length && t();
          }, [r, c, t]),
          !c)
        )
          return null;
        const u = a?.length > 0;
        return (0, i.jsx)(G.wW, {
          validateCart: s,
          eDisplayType: G.WA.k_ECartDisplayType_Modal,
          children: (0, i.jsxs)(I.mt, {
            active: !0,
            className: A().ShoppingCartModal,
            onDismiss: t,
            children: [
              (0, i.jsx)("div", {
                className: A().ShoppingCartHeader,
                children: (0, N.we)(
                  u ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
                ),
              }),
              (0, i.jsx)(M.pf, {
                lineItems: c,
                cartValidation: s,
                scrollable: !0,
              }),
              (0, i.jsx)(P, { lineItems: c, cartValidation: s }),
              (0, i.jsxs)(d.Z, {
                className: A().ShoppingCartModalBtns,
                children: [
                  (0, i.jsx)(y.$n, {
                    onClick: t,
                    children: (0, N.we)("#Cart_ContinueShopping"),
                  }),
                  (0, i.jsx)(y.jn, {
                    className: A().OpenCartBtn,
                    onClick: () => (window.location.href = l),
                    children: (0, N.we)(
                      "#Cart_ViewMyCart",
                      r.data?.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function B(e) {
        const { active: t, result: n, onDismiss: a } = e;
        return (0, i.jsxs)(I.mt, {
          active: t,
          onDismiss: a,
          children: [
            (0, i.jsx)(y.Y9, { children: (0, N.we)("#Error_Generic") }),
            (0, i.jsxs)("div", {
              className: A().ErrorModalContent,
              children: [
                (0, i.jsx)("div", {
                  className: A().ErrorModalMessage,
                  children: (0, N.we)("#Cart_ErrorUpdating"),
                }),
                (0, i.jsx)("div", {
                  className: A().ErrorModalCode,
                  children: n ? (0, N.we)("#Cart_ErrorCode", n) : "",
                }),
                (0, i.jsx)("div", {
                  className: A().ErrorModalBottom,
                  children: (0, i.jsx)(y.$n, {
                    onClick: a,
                    children: (0, N.we)("#Button_Close"),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        const { cartValidation: t, lineItems: n } = e,
          o = x.useRef(!1),
          [d, j] = x.useState(!1),
          { data: w } = (function () {
            const e = (0, f.rX)();
            return (0, h.I)({
              queryKey: [g],
              queryFn: async () => {
                const t = await e.GetObject(g);
                return t
                  ? t.rtCreated < Date.now() / 1e3 - p
                    ? (await e.RemoveObject(g), null)
                    : t.nGifteeAccountID
                  : null;
              },
            });
          })(),
          { data: y } = (0, D.js)(w),
          I = (0, l.EJ)(),
          k = (function () {
            const e = (0, C.jE)(),
              t = (0, f.rX)();
            return (0, _.n)({
              mutationFn: async (e) => {
                e
                  ? await t.StoreObject(g, {
                      nGifteeAccountID: e,
                      rtCreated: Date.now() / 1e3,
                    })
                  : await t.RemoveObject(g);
              },
              onMutate: async (t) => {
                await e.cancelQueries({ queryKey: [g] });
                let n = null;
                t && (n = { nGifteeAccountID: t, rtCreated: Date.now() / 1e3 }),
                  e.setQueryData([g], n);
              },
            });
          })(),
          M = (0, c.C)();
        let S = m.iA.logged_in && !d && !!w && !!y && !I && !!t?.cart_items;
        if (S) {
          const e = new Map(t.cart_items.map((e) => [e.line_item_id, e]));
          S = !!n.find(
            (t) =>
              !t.gift_info?.accountid_giftee &&
              !!e.get(t.line_item_id)?.can_purchase_as_gift,
          );
        }
        if (
          (x.useEffect(() => {
            S &&
              !o.current &&
              ((0, v.D)()?.AddEvent(u.Xm.K4), (o.current = !0));
          }, [S]),
          !S)
        )
          return null;
        const G = (0, i.jsxs)("a", {
          href: y.GetCommunityProfileURL(),
          target: "_blank",
          children: [
            (0, i.jsx)(E.i8, {
              size: "X-Small",
              statusPosition: "right",
              persona: y,
            }),
            (0, i.jsx)("div", {
              className: A().PersonaName,
              children: y.m_strPlayerName,
            }),
          ],
        });
        return (0, i.jsxs)(a.s, {
          className: A().GifteeHintCtn,
          align: "center",
          gap: "3",
          direction: "row",
          children: [
            (0, i.jsx)(r.EY, {
              as: "div",
              align: "center",
              className: A().GifteeHint,
              children: (0, N.PP)("#Cart_GifteeHint_Wishlist", G),
            }),
            (0, i.jsxs)(a.s, {
              gap: "2",
              direction: "row",
              align: "center",
              children: [
                (0, i.jsx)(s.$, {
                  size: "1",
                  color: "dull",
                  onClick: () => {
                    (0, v.D)()?.AddEvent(u.Xm.En), k.mutate(null);
                  },
                  children: (0, N.we)("#Button_No"),
                }),
                (0, i.jsx)(s.$, {
                  size: "1",
                  onClick: () => {
                    for (const e of n)
                      M.mutate({
                        lineItemID: e.line_item_id,
                        lineItemFlags: { is_gift: !0 },
                        giftInfo: { ...e.gift_info, accountid_giftee: w },
                        gidCoupon: e.gidcoupon_applied,
                      });
                    k.mutate(w), j(!0), (0, v.D)()?.AddEvent(u.Xm.xh);
                  },
                  children: (0, N.we)("#Button_Yes"),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
