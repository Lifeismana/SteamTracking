/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [24102],
    {
      75850: (p, I, t) => {
        "use strict";
        t.r(I), t.d(I, { CartErrorModal: () => _, default: () => q });
        var e = t(7850),
          B = t(30986),
          S = t(68031),
          H = t(15252),
          A = t(8892),
          Q = t(93191),
          z = t(19298),
          h = t(55051),
          G = t(72609),
          y = t(66243),
          L = t(47604),
          v = t(39905),
          N = t(85978),
          R = t(68312),
          T = t(20117),
          U = t(80902),
          V = t(75233),
          O = t(51614);
        const l = "giftee-hint-2",
          X = 600;
        function K() {
          const { data: n } = Z(),
            a = (0, N.jn)(n?.nGifteeAccountID);
          if (a.isLoading || !n?.nGifteeAccountID)
            return { gifteeHint: n, gifteePlayerDetails: void 0 };
          if (a.data) return { gifteeHint: n, gifteePlayerDetails: a.data };
          const r = {
            public_data: {
              steamid: T.b2
                .InitFromAccountID(n.nGifteeAccountID, G.TS.EUNIVERSE)
                .ConvertTo64BitString(),
              persona_name: n.strPersonaName,
              sha_digest_avatar: n.rgAvatarDigest
                ? new Uint8Array(n.rgAvatarDigest)
                : void 0,
            },
          };
          return { gifteeHint: n, gifteePlayerDetails: r };
        }
        function Z() {
          const n = (0, R.rX)();
          return (0, U.I)({
            queryKey: [l],
            queryFn: async () => {
              const a = await n.GetObject(l);
              return a
                ? !a.rtCreated || a.rtCreated < Date.now() / 1e3 - X
                  ? (await n.RemoveObject(l), null)
                  : a
                : null;
            },
          });
        }
        function F() {
          const n = (0, V.jE)(),
            a = (0, R.rX)();
          return (0, O.n)({
            mutationFn: async (r) => {
              r
                ? await a.StoreObject(l, { ...r, rtCreated: Date.now() / 1e3 })
                : await a.RemoveObject(l);
            },
            onMutate: async (r) => {
              await n.cancelQueries({ queryKey: [l] }),
                r && (r = { ...r, rtCreated: Date.now() / 1e3 }),
                n.setQueryData([l], r);
            },
          });
        }
        var Y = t(72865),
          g = t(90626),
          D = t(46477),
          W = t(79485),
          J = t(48366),
          $ = t(30815),
          o = t(36798),
          b = t(9843),
          w = t(87913),
          P = t(2165),
          s = t(52169),
          k = t(48201);
        function q(n) {
          const { closeCart: a, lineItemIDs: r, bPackagesReplaced: d } = n,
            E = (0, o.S5)(),
            { data: j } = (0, b.UI)(),
            { data: c } = (0, w.g7)(),
            i = (0, $.Yj)(r),
            M = (0, Y.aL)(`${G.TS.STORE_BASE_URL}cart/`);
          if (
            (g.useEffect(() => {
              i && i?.length == 0 && a();
            }, [i, a]),
            !i || !E)
          )
            return null;
          const C = o.Q8.Localize(
            d ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
          );
          return (0, e.jsx)(P.wW, {
            validateCart: c,
            eDisplayType: P.WA.k_ECartDisplayType_Modal,
            children: (0, e.jsx)(L.s, {
              onClose: a,
              navID: "CartModal",
              strTitle: C,
              children: (0, e.jsxs)("div", {
                className: s.ShoppingCartModalContent,
                children: [
                  (0, e.jsx)(k.p, {
                    lineItems: i,
                    cartValidation: c,
                    scrollable: !0,
                  }),
                  (0, e.jsx)(tt, { lineItems: i, cartValidation: c }),
                  (0, e.jsxs)(z.Z, {
                    className: s.ShoppingCartModalBtns,
                    children: [
                      (0, e.jsx)(y.Oh, {
                        onClick: a,
                        children: o.Q8.Localize("#Cart_ContinueShopping"),
                      }),
                      (0, e.jsx)(y.x0, {
                        autoFocus: !0,
                        href: M,
                        children: o.Q8.Localize(
                          "#Cart_ViewMyCart",
                          j?.line_items?.length ?? i.length,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function _(n) {
          const { result: a, onDismiss: r } = n;
          return (0, o.S5)()
            ? (0, e.jsx)(L.s, {
                onClose: r,
                navID: "CartErrorModal",
                strTitle: v.Z.Localize("#Error_Generic"),
                children: (0, e.jsxs)("div", {
                  className: s.ErrorModalContent,
                  children: [
                    (0, e.jsx)("div", {
                      className: s.ErrorModalMessage,
                      children: o.Q8.Localize("#Cart_ErrorUpdating"),
                    }),
                    (0, e.jsx)("div", {
                      className: s.ErrorModalCode,
                      children: a ? o.Q8.Localize("#Cart_ErrorCode", a) : "",
                    }),
                    (0, e.jsx)("div", {
                      className: s.ErrorModalBottom,
                      children: (0, e.jsx)(y.Oh, {
                        autoFocus: !0,
                        onClick: r,
                        children: v.Z.Localize("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function tt(n) {
          const { cartValidation: a, lineItems: r } = n,
            d = g.useRef(!1),
            [E, j] = g.useState(!1),
            { gifteeHint: c, gifteePlayerDetails: i } = K(),
            M = (0, J.EJ)(),
            C = F(),
            et = (0, W.C)(),
            x = i?.public_data,
            at = a?.cart_items;
          let f = !E && !!c?.nGifteeAccountID && !!x && !M && !!a?.cart_items;
          if (f) {
            const u = new Map(at.map((m) => [m.line_item_id, m]));
            f = !!r.find(
              (m) =>
                !m.gift_info?.accountid_giftee &&
                !!u.get(m.line_item_id)?.can_purchase_as_gift,
            );
          }
          if (
            (g.useEffect(() => {
              f &&
                !d.current &&
                ((0, D.D)()?.AddEvent(h.Xm.K4), (d.current = !0));
            }, [f]),
            !f)
          )
            return null;
          const nt = () => {
              (0, D.D)()?.AddEvent(h.Xm.En), C.mutate(null);
            },
            rt = () => {
              for (const u of r)
                et.mutate({
                  lineItemID: u.line_item_id,
                  lineItemFlags: { is_gift: !0 },
                  giftInfo: {
                    ...u.gift_info,
                    accountid_giftee: c.nGifteeAccountID,
                  },
                  gidCoupon: u.gidcoupon_applied,
                });
              C.mutate(c), j(!0), (0, D.D)()?.AddEvent(h.Xm.xh);
            },
            it = (0, e.jsxs)("a", {
              href: (0, Q.n)(i),
              target: "_blank",
              rel: "noreferrer",
              children: [
                (0, e.jsx)(B.wm, {
                  size: "X-Small",
                  statusPosition: "right",
                  playerLinkDetails: i,
                  alt: x.persona_name ?? "",
                }),
                (0, e.jsx)("div", {
                  className: s.PersonaName,
                  children: x.persona_name,
                }),
              ],
            });
          return (0, e.jsxs)(S.s, {
            className: s.GifteeHintCtn,
            align: "center",
            gap: "3",
            direction: "row",
            children: [
              (0, e.jsx)(H.EY, {
                as: "div",
                align: "center",
                className: s.GifteeHint,
                children: o.Q8.LocalizeReact("#Cart_GifteeHint_Wishlist", it),
              }),
              (0, e.jsxs)(S.s, {
                gap: "2",
                direction: "row",
                align: "center",
                children: [
                  (0, e.jsx)(A.$, {
                    size: "1",
                    color: "dull",
                    onClick: nt,
                    children: v.Z.Localize("#Button_No"),
                  }),
                  (0, e.jsx)(A.$, {
                    size: "1",
                    onClick: rt,
                    children: v.Z.Localize("#Button_Yes"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      52169: (p) => {
        p.exports = {
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
    },
  ]);
})();
