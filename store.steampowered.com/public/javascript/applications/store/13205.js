/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [13205],
  {
    52169: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1HYjtPJd8D-AHSlOebB4f-",
        ShoppingCartModalContent: "_1859zsZbgy1ECsQDqMGedi",
        ShoppingCartModalBtns: "md6XqKKeYLOQhwbHaayWp",
        GifteeHintCtn: "_3aFtAPVADDqnrvZKg8_sNL",
        GifteeHint: "_3BT_cAM78V_Zp-BQSJ5VIs",
        PersonaName: "_2heOUrUMUce3PVqrccBfAS",
        ErrorModalContent: "_1lKR42gC3dveUEc7REcDQU",
        ErrorModalMessage: "AqeEBZKe681APQ3j1fRXB",
        ErrorModalBottom: "_3dX7MBqqR019JJaCTLX3ig",
        ErrorModalCode: "_290RyArlGp7DySTEwdIPmV",
      };
    },
    10039: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { CartErrorModal: () => R, default: () => G });
      var n = a(7850),
        r = a(98682),
        i = a(83392),
        o = a(20187),
        s = a(53965),
        l = a(82861),
        c = a(76217),
        d = a(1270),
        u = a(66418),
        f = a(55388),
        _ = a(34847),
        C = a(78686),
        g = a(18519),
        m = a(23809),
        h = a(29233),
        p = a(80902),
        D = a(75233),
        E = a(51614);
      const j = "giftee-hint-2",
        x = 600;
      function v() {
        const { data: e } = (function () {
            const e = (0, m.rX)();
            return (0, p.I)({
              queryKey: [j],
              queryFn: async () => {
                const t = await e.GetObject(j);
                return t
                  ? !t.rtCreated || t.rtCreated < Date.now() / 1e3 - x
                    ? (await e.RemoveObject(j), null)
                    : t
                  : null;
              },
            });
          })(),
          t = (0, g.jn)(e?.nGifteeAccountID);
        if (t.isLoading || !e?.nGifteeAccountID)
          return { gifteeHint: e, gifteePlayerDetails: void 0 };
        if (t.data) return { gifteeHint: e, gifteePlayerDetails: t.data };
        return {
          gifteeHint: e,
          gifteePlayerDetails: {
            public_data: {
              steamid: h.b2
                .InitFromAccountID(e.nGifteeAccountID, u.TS.EUNIVERSE)
                .ConvertTo64BitString(),
              persona_name: e.strPersonaName,
              sha_digest_avatar: e.rgAvatarDigest
                ? new Uint8Array(e.rgAvatarDigest)
                : void 0,
            },
          },
        };
      }
      var M = a(60014),
        y = a(90626),
        A = a(31292),
        I = a(13904),
        S = a(79443),
        w = a(38858),
        L = a(85906),
        B = a(65244),
        b = a(8364),
        N = a(42798),
        P = a(52169),
        z = a(46988);
      function G(e) {
        const { closeCart: t, lineItemIDs: a, bPackagesReplaced: r } = e,
          i = (0, L.S5)(),
          { data: o } = (0, B.UI)(),
          { data: s } = (0, b.g7)(),
          l = (0, w.Yj)(a),
          d = (0, M.aL)(`${u.TS.STORE_BASE_URL}cart/`);
        if (
          (y.useEffect(() => {
            l && 0 == l?.length && t();
          }, [l, t]),
          !l || !i)
        )
          return null;
        const C = L.Q8.Localize(
          r ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
        );
        return (0, n.jsx)(N.wW, {
          validateCart: s,
          eDisplayType: N.WA.k_ECartDisplayType_Modal,
          children: (0, n.jsx)(_.s, {
            onClose: t,
            navID: "CartModal",
            strTitle: C,
            children: (0, n.jsxs)("div", {
              className: P.ShoppingCartModalContent,
              children: [
                (0, n.jsx)(z.p, {
                  lineItems: l,
                  cartValidation: s,
                  scrollable: !0,
                }),
                (0, n.jsx)(Q, { lineItems: l, cartValidation: s }),
                (0, n.jsxs)(c.Z, {
                  className: P.ShoppingCartModalBtns,
                  children: [
                    (0, n.jsx)(f.Oh, {
                      onClick: t,
                      children: L.Q8.Localize("#Cart_ContinueShopping"),
                    }),
                    (0, n.jsx)(f.x0, {
                      autoFocus: !0,
                      href: d,
                      children: L.Q8.Localize(
                        "#Cart_ViewMyCart",
                        o?.line_items?.length ?? l.length,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function R(e) {
        const { result: t, onDismiss: a } = e;
        return (0, L.S5)()
          ? (0, n.jsx)(_.s, {
              onClose: a,
              navID: "CartErrorModal",
              strTitle: C.Z.Localize("#Error_Generic"),
              children: (0, n.jsxs)("div", {
                className: P.ErrorModalContent,
                children: [
                  (0, n.jsx)("div", {
                    className: P.ErrorModalMessage,
                    children: L.Q8.Localize("#Cart_ErrorUpdating"),
                  }),
                  (0, n.jsx)("div", {
                    className: P.ErrorModalCode,
                    children: t ? L.Q8.Localize("#Cart_ErrorCode", t) : "",
                  }),
                  (0, n.jsx)("div", {
                    className: P.ErrorModalBottom,
                    children: (0, n.jsx)(f.Oh, {
                      autoFocus: !0,
                      onClick: a,
                      children: C.Z.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function Q(e) {
        const { cartValidation: t, lineItems: a } = e,
          c = y.useRef(!1),
          [u, f] = y.useState(!1),
          { gifteeHint: _, gifteePlayerDetails: g } = v(),
          h = (0, S.EJ)(),
          p = (function () {
            const e = (0, D.jE)(),
              t = (0, m.rX)();
            return (0, E.n)({
              mutationFn: async (e) => {
                e
                  ? await t.StoreObject(j, {
                      ...e,
                      rtCreated: Date.now() / 1e3,
                    })
                  : await t.RemoveObject(j);
              },
              onMutate: async (t) => {
                await e.cancelQueries({ queryKey: [j] }),
                  t && (t = { ...t, rtCreated: Date.now() / 1e3 }),
                  e.setQueryData([j], t);
              },
            });
          })(),
          x = (0, I.C)(),
          M = g?.public_data,
          w = t?.cart_items;
        let B = !(u || !_?.nGifteeAccountID || !M || h || !t?.cart_items);
        if (B) {
          const e = new Map(w.map((e) => [e.line_item_id, e]));
          B = !!a.find(
            (t) =>
              !t.gift_info?.accountid_giftee &&
              !!e.get(t.line_item_id)?.can_purchase_as_gift,
          );
        }
        if (
          (y.useEffect(() => {
            B &&
              !c.current &&
              ((0, A.D)()?.AddEvent(d.Xm.K4), (c.current = !0));
          }, [B]),
          !B)
        )
          return null;
        const b = (0, n.jsxs)("a", {
          href: (0, l.n)(g),
          target: "_blank",
          rel: "noreferrer",
          children: [
            (0, n.jsx)(r.wm, {
              size: "X-Small",
              statusPosition: "right",
              playerLinkDetails: g,
              alt: M.persona_name ?? "",
            }),
            (0, n.jsx)("div", {
              className: P.PersonaName,
              children: M.persona_name,
            }),
          ],
        });
        return (0, n.jsxs)(i.s, {
          className: P.GifteeHintCtn,
          align: "center",
          gap: "3",
          direction: "row",
          children: [
            (0, n.jsx)(o.EY, {
              as: "div",
              align: "center",
              className: P.GifteeHint,
              children: L.Q8.LocalizeReact("#Cart_GifteeHint_Wishlist", b),
            }),
            (0, n.jsxs)(i.s, {
              gap: "2",
              direction: "row",
              align: "center",
              children: [
                (0, n.jsx)(s.$, {
                  size: "1",
                  color: "dull",
                  onClick: () => {
                    (0, A.D)()?.AddEvent(d.Xm.En), p.mutate(null);
                  },
                  children: C.Z.Localize("#Button_No"),
                }),
                (0, n.jsx)(s.$, {
                  size: "1",
                  onClick: () => {
                    for (const e of a)
                      x.mutate({
                        lineItemID: e.line_item_id,
                        lineItemFlags: { is_gift: !0 },
                        giftInfo: {
                          ...e.gift_info,
                          accountid_giftee: _.nGifteeAccountID,
                        },
                        gidCoupon: e.gidcoupon_applied,
                      });
                    p.mutate(_), f(!0), (0, A.D)()?.AddEvent(d.Xm.xh);
                  },
                  children: C.Z.Localize("#Button_Yes"),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
