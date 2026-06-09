/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2965],
  {
    16546: (e, r, s) => {
      s.r(r), s.d(r, { ShoppingCartErrorModal: () => j, default: () => p });
      var a = s(7850),
        t = s(60014),
        n = s(41515),
        i = s(90626),
        l = s(76217),
        o = s(56283),
        c = s(51706),
        d = s(61859),
        h = s(30470),
        C = s(48980),
        u = s(11543),
        m = s.n(u);
      function p(e) {
        const { closeCart: r, lineItemIDs: s, replacedPackageIDs: u } = e,
          p = (0, n.UI)(),
          { data: j } = (0, n.g7)(),
          _ = i.useMemo(
            () =>
              p.data && s && 0 !== s.length
                ? p.data.line_items.filter((e) => s.includes(e.line_item_id))
                : null,
            [s, p.data],
          ),
          g = (0, t.aL)(h.TS.STORE_BASE_URL + "cart");
        if (
          (i.useEffect(() => {
            p.isSuccess && _ && 0 === _.length && r();
          }, [p, _, r]),
          !_)
        )
          return null;
        const x = u?.length > 0;
        return (0, a.jsxs)(c.mt, {
          active: !0,
          className: m().ShoppingCartModal,
          onDismiss: r,
          children: [
            (0, a.jsx)("div", {
              className: m().ShoppingCartHeader,
              children: (0, d.we)(
                x ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
              ),
            }),
            (0, a.jsx)(C.pf, { lineItems: _, cartValidation: j }),
            (0, a.jsxs)(l.Z, {
              className: m().ShoppingCartModalBtns,
              children: [
                (0, a.jsx)(o.$n, {
                  onClick: r,
                  children: (0, d.we)("#Cart_ContinueShopping"),
                }),
                (0, a.jsx)(o.jn, {
                  className: m().OpenCartBtn,
                  onClick: () => (window.location.href = g),
                  children: (0, d.we)(
                    "#Cart_ViewMyCart",
                    p.data?.line_items.length,
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function j(e) {
        const { active: r, result: s, onDismiss: t } = e;
        return (0, a.jsxs)(c.mt, {
          active: r,
          onDismiss: t,
          children: [
            (0, a.jsx)(o.Y9, { children: (0, d.we)("#Error_Generic") }),
            (0, a.jsxs)("div", {
              className: m().ErrorModalContent,
              children: [
                (0, a.jsx)("div", {
                  className: m().ErrorModalMessage,
                  children: (0, d.we)("#Cart_ErrorUpdating"),
                }),
                (0, a.jsx)("div", {
                  className: m().ErrorModalCode,
                  children: s ? (0, d.we)("#Cart_ErrorCode", s) : "",
                }),
                (0, a.jsx)("div", {
                  className: m().ErrorModalBottom,
                  children: (0, a.jsx)(o.$n, {
                    onClick: t,
                    children: (0, d.we)("#Button_Close"),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
