/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [62965],
  {
    69041: (e) => {
      e.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-default": "RttCMpsTJp47IkzXpZYvA",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    73406: (e) => {
      e.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    68875: (e) => {
      e.exports = {
        Flex: "_3nHL7awgK1Qei1XivGvHMK",
        Direction: "_3JCkAyd9cnB90tRcDLPp4W",
        Justify: "_12ampOcrpRamy1y301kEaK",
        Align: "_1SxQuUnaM-MXeF5UfssWve",
        Gap: "ja5o2GZTopxfGJArsZgFh",
        GapX: "_3KiTPfFvdkPH6ixij56nVM",
        GapY: "_38cfDT7owcq-7PHlx-Bx2j",
        Wrap: "dB7ipW28YN-_GytLR4EuE",
        Inline: "LOeaKjPDMbdcAB54IFgyX",
      };
    },
    53965: (e, t, i) => {
      "use strict";
      i.d(t, { $: () => j, v: () => C });
      var n = i(7850),
        a = i(64238),
        s = i.n(a),
        r = i(69041),
        o = i(75659),
        c = i(11526),
        l = i(11820),
        d = i(73406),
        p = i(90534),
        u = i(83392);
      function m(e) {
        const {
          size: t = "3",
          loading: i = !0,
          children: a,
          color: s,
          variant: r,
          ...o
        } = e;
        return a || !i
          ? (0, n.jsxs)(p.az, {
              position: "relative",
              ...o,
              width: "fit-content",
              children: [
                (0, n.jsx)("div", {
                  "data-visibility": !i,
                  className: d.ChildContainer,
                  children: a,
                }),
                i &&
                  (0, n.jsx)(u.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, n.jsx)(f, { size: t, color: s, variant: r }),
                  }),
              ],
            })
          : (0, n.jsx)(f, { size: t, color: s, variant: r, ...o });
      }
      function f(e) {
        const { className: t, color: i, ...a } = (0, c.mz)(e, h);
        return (0, n.jsx)("div", {
          "data-accent-color": i,
          className: s()(t, d.Spinner),
          ...a,
        });
      }
      const h = [
        ...o.L,
        { prop: "size", responsive: !0, className: (e) => d[`Size-${e}`] },
        { prop: "variant", className: (e) => d[`Variant-${e}`] },
      ];
      var _ = i(45699),
        v = i(8527);
      function g(e) {
        e.preventDefault();
      }
      const x = [
          ...o.L,
          { prop: "size", responsive: !0, className: (e) => r[`Size-${e}`] },
          { prop: "variant", className: (e) => r[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: r.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: r.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        j = function (e) {
          const {
              variant: t = "default",
              size: i = "2",
              minWidth: a = "fit-content",
              color: o,
              loading: l,
              children: d,
              onClick: p,
              icon: u,
              focusable: f,
              navProps: h,
              ...g
            } = e,
            j = l
              ? (0, n.jsx)(m, {
                  size: i,
                  color: o,
                  variant: "bright",
                  children: d,
                })
              : d,
            C = l ? void 0 : p,
            y = f ?? h?.focusable ?? !!C,
            N = {
              type: "button",
              ...(0, c.mz)(
                {
                  ...g,
                  variant: t,
                  size: i,
                  minWidth: a,
                  color: o,
                  className: s()(r.Button, u && r.Icon),
                  onClick: C,
                },
                x,
              ),
              children: j,
            };
          return v.TS.IN_GAMEPADUI && (y || h)
            ? (0, n.jsx)(_.fu, { ...N, ...(h || {}), focusable: y })
            : (0, n.jsx)("button", { ...N });
        },
        C = function (e) {
          const {
              variant: t = "default",
              size: i = "2",
              minWidth: a = "fit-content",
              disabled: o,
              icon: d,
              focusable: p,
              navProps: u,
              ...m
            } = e,
            f = o ? g : void 0,
            h = (0, c.mz)(
              {
                onClick: f,
                ...m,
                variant: t,
                size: i,
                minWidth: a,
                className: s()(r.Button, d && r.Icon, (0, l.T)()),
              },
              x,
            );
          return v.TS.IN_GAMEPADUI && (p || u)
            ? (0, n.jsx)(_.Ii, { ...h, ...(u || {}), focusable: p })
            : (0, n.jsx)("a", { ...h });
        };
    },
    83392: (e, t, i) => {
      "use strict";
      i.d(t, { s: () => u });
      var n = i(7850),
        a = i(39479),
        s = i(64238),
        r = i.n(s),
        o = i(11526),
        c = i(55348),
        l = i(75659),
        d = i(68875),
        p = i(8527);
      function u(e) {
        const { as: t = "div", focusable: i, navProps: s, ref: l, ...u } = e,
          f = (0, o.mz)({ ...u, className: r()(e.className, d.Flex) }, m),
          h = i ?? s?.focusable ?? !!u.onClick,
          _ = (0, n.jsx)(t, { ref: l, ...f }),
          v = (0, c.n)(u.direction ?? "row");
        return p.TS.IN_GAMEPADUI
          ? (0, n.jsx)(a.J, {
              ...(s || {}),
              focusable: h,
              "flow-children": v,
              children: _,
            })
          : _;
      }
      const m = [
        ...l.h,
        {
          prop: "direction",
          responsive: !0,
          className: d.Direction,
          cssProperty: "--direction",
        },
        {
          prop: "justify",
          responsive: !0,
          className: d.Justify,
          cssProperty: (e) => ["--justify", f(e)],
        },
        {
          prop: "align",
          responsive: !0,
          className: d.Align,
          cssProperty: "--align",
        },
        {
          prop: "gap",
          responsive: !0,
          className: d.Gap,
          cssProperty: (e) => ["--gap", `var(--spacing-${e})`],
        },
        {
          prop: "gapX",
          responsive: !0,
          className: d.GapX,
          cssProperty: (e) => ["--gap-x", `var(--spacing-${e})`],
        },
        {
          prop: "gapY",
          responsive: !0,
          className: d.GapY,
          cssProperty: (e) => ["--gap-y", `var(--spacing-${e})`],
        },
        {
          prop: "wrap",
          responsive: !0,
          className: d.Wrap,
          cssProperty: "--wrap",
        },
        { prop: "inline", responsive: !0, className: d.Inline },
      ];
      function f(e) {
        return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
      }
    },
    64908: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { ShoppingCartErrorModal: () => A, default: () => M });
      var n = i(7850),
        a = i(83392),
        s = i(20187),
        r = i(53965),
        o = i(13904),
        c = i(79443),
        l = i(76217),
        d = i(2551),
        p = i(23809),
        u = i(80902),
        m = i(75233),
        f = i(51614);
      const h = "giftee-hint",
        _ = 600;
      var v = i(60014),
        g = i(41515),
        x = i(90626),
        j = i(1035),
        C = i(31292),
        y = i(14336),
        N = i(56283),
        w = i(74568),
        S = i(61859),
        I = i(30470),
        b = i(48980),
        z = i(11543),
        G = i.n(z),
        P = i(53534),
        D = i(8527);
      function M(e) {
        const { closeCart: t, lineItemIDs: i, replacedPackageIDs: a } = e,
          s = (0, g.UI)(),
          { data: r } = (0, g.g7)(),
          o = x.useMemo(
            () =>
              s.data && i && 0 !== i.length
                ? s.data.line_items.filter((e) => i.includes(e.line_item_id))
                : null,
            [i, s.data],
          ),
          c = (0, v.aL)(I.TS.STORE_BASE_URL + "cart");
        if (
          (x.useEffect(() => {
            s.isSuccess && o && 0 === o.length && t();
          }, [s, o, t]),
          !o)
        )
          return null;
        const d = a?.length > 0;
        return (0, n.jsx)(P.wW, {
          validateCart: r,
          eDisplayType: P.WA.k_ECartDisplayType_Modal,
          children: (0, n.jsxs)(w.mt, {
            active: !0,
            className: G().ShoppingCartModal,
            onDismiss: t,
            children: [
              (0, n.jsx)("div", {
                className: G().ShoppingCartHeader,
                children: (0, S.we)(
                  d ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
                ),
              }),
              (0, n.jsx)(b.pf, { lineItems: o, cartValidation: r }),
              (0, n.jsx)(E, { lineItems: o, cartValidation: r }),
              (0, n.jsxs)(l.Z, {
                className: G().ShoppingCartModalBtns,
                children: [
                  (0, n.jsx)(N.$n, {
                    onClick: t,
                    children: (0, S.we)("#Cart_ContinueShopping"),
                  }),
                  (0, n.jsx)(N.jn, {
                    className: G().OpenCartBtn,
                    onClick: () => (window.location.href = c),
                    children: (0, S.we)(
                      "#Cart_ViewMyCart",
                      s.data?.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function A(e) {
        const { active: t, result: i, onDismiss: a } = e;
        return (0, n.jsxs)(w.mt, {
          active: t,
          onDismiss: a,
          children: [
            (0, n.jsx)(N.Y9, { children: (0, S.we)("#Error_Generic") }),
            (0, n.jsxs)("div", {
              className: G().ErrorModalContent,
              children: [
                (0, n.jsx)("div", {
                  className: G().ErrorModalMessage,
                  children: (0, S.we)("#Cart_ErrorUpdating"),
                }),
                (0, n.jsx)("div", {
                  className: G().ErrorModalCode,
                  children: i ? (0, S.we)("#Cart_ErrorCode", i) : "",
                }),
                (0, n.jsx)("div", {
                  className: G().ErrorModalBottom,
                  children: (0, n.jsx)(N.$n, {
                    onClick: a,
                    children: (0, S.we)("#Button_Close"),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        const { cartValidation: t, lineItems: i } = e,
          l = x.useRef(!1),
          [v, g] = x.useState(!1),
          { data: N } = (function () {
            const e = (0, p.rX)();
            return (0, u.I)({
              queryKey: [h],
              queryFn: async () => {
                const t = await e.GetObject(h);
                return t
                  ? t.rtCreated < Date.now() / 1e3 - _
                    ? (await e.RemoveObject(h), null)
                    : t.nGifteeAccountID
                  : null;
              },
            });
          })(),
          { data: w } = (0, y.js)(N),
          I = (0, c.EJ)(),
          b = (function () {
            const e = (0, m.jE)(),
              t = (0, p.rX)();
            return (0, f.n)({
              mutationFn: async (e) => {
                e
                  ? await t.StoreObject(h, {
                      nGifteeAccountID: e,
                      rtCreated: Date.now() / 1e3,
                    })
                  : await t.RemoveObject(h);
              },
              onMutate: async (t) => {
                await e.cancelQueries({ queryKey: [h] });
                let i = null;
                t && (i = { nGifteeAccountID: t, rtCreated: Date.now() / 1e3 }),
                  e.setQueryData([h], i);
              },
            });
          })(),
          z = (0, o.C)();
        let P = D.iA.logged_in && !v && !!N && !!w && !I && !!t?.cart_items;
        if (P) {
          const e = new Map(t.cart_items.map((e) => [e.line_item_id, e]));
          P = !!i.find(
            (t) =>
              !t.gift_info?.accountid_giftee &&
              !!e.get(t.line_item_id)?.can_purchase_as_gift,
          );
        }
        if (
          (x.useEffect(() => {
            P &&
              !l.current &&
              ((0, C.D)()?.AddEvent(d.Xm.K4), (l.current = !0));
          }, [P]),
          !P)
        )
          return null;
        const M = (0, n.jsxs)("a", {
          href: w.GetCommunityProfileURL(),
          target: "_blank",
          children: [
            (0, n.jsx)(j.i8, {
              size: "X-Small",
              statusPosition: "right",
              persona: w,
            }),
            (0, n.jsx)("div", {
              className: G().PersonaName,
              children: w.m_strPlayerName,
            }),
          ],
        });
        return (0, n.jsxs)(a.s, {
          className: G().GifteeHintCtn,
          align: "center",
          gap: "3",
          direction: "row",
          children: [
            (0, n.jsx)(s.EY, {
              as: "div",
              align: "center",
              className: G().GifteeHint,
              children: (0, S.PP)("#Cart_GifteeHint_Wishlist", M),
            }),
            (0, n.jsxs)(a.s, {
              gap: "2",
              direction: "row",
              align: "center",
              children: [
                (0, n.jsx)(r.$, {
                  size: "1",
                  color: "dull",
                  onClick: () => {
                    (0, C.D)()?.AddEvent(d.Xm.En), b.mutate(null);
                  },
                  children: (0, S.we)("#Button_No"),
                }),
                (0, n.jsx)(r.$, {
                  size: "1",
                  onClick: () => {
                    for (const e of i)
                      z.mutate({
                        lineItemID: e.line_item_id,
                        lineItemFlags: { is_gift: !0 },
                        giftInfo: { ...e.gift_info, accountid_giftee: N },
                        gidCoupon: e.gidcoupon_applied,
                      });
                    b.mutate(N), g(!0), (0, C.D)()?.AddEvent(d.Xm.xh);
                  },
                  children: (0, S.we)("#Button_Yes"),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
