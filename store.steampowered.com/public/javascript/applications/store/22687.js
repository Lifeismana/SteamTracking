/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [22687],
  {
    33924: (e) => {
      e.exports = {
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
        ShowInWideMode: "RLbLb742gN095uDUITtIB",
        EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
        HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
        EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        EventType: "_2BWwVF5N-3fDuJRblB6gHb",
        AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
        CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
        AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
        AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
        AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
      };
    },
    91291: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
        BackgroundAnimation: "_2_vb1-Pr1-2Gblfyxj023k",
        "ItemFocusAnim-darkerGrey-nocolor": "op3gqmHyESfHpHgPheRVq",
        "ItemFocusAnim-darkerGrey": "_12l58v9-cJk-169Qesl-e5",
        "ItemFocusAnim-darkGreySettings": "_2cAK7l3w0qC8uv5uzKjusc",
        "ItemFocusAnim-darkGrey": "_2uLjKVdzQQCodi_XH5ZPfi",
        "ItemFocusAnim-grey": "_3Za5duiaOuAcNrQJeEpjxD",
        "ItemFocusAnim-translucent-white-10": "_3wyVPtc4dD1Msi7wqRvJq3",
        "ItemFocusAnim-translucent-white-20": "_2v6guEab39IMo3I1kfiwXc",
        "ItemFocusAnimBorder-darkGrey": "_3SS0MMDROpRbR_hYLVjAcl",
        "ItemFocusAnim-green": "_3qjU-9ZS6bDpjjMAOYUhGm",
        focusAnimation: "_3-bYSIZZNIWgiOR__mB2jd",
        hoverAnimation: "_39oPHCcA4NgTm53rnykAtP",
      };
    },
    20433: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => m, u: () => b });
      var n = a(7850),
        s = a(90626),
        r = a(45699),
        o = a(55963),
        i = a(60014),
        l = a(49411),
        c = a(61336),
        d = a(52541),
        u = a(66418);
      a(78327);
      function p(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: t,
            hoverClassName: a,
            fnGetIDOverride: r,
            fnHoverState: o,
            disableScreenshots: i,
            children: l,
          } = e,
          c = s.useRef(null),
          u = s.useCallback(
            (e) => {
              const a = p(t);
              a &&
                (o && o(!0),
                window.GameHover &&
                  (c.current &&
                    i &&
                    (c.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(r ? r() : c.current, e, "global_hover", {
                    type: a,
                    id: (0, d.G$)(t).id,
                    v6: 1,
                  })));
            },
            [o, r, i, t],
          ),
          m = s.useCallback(
            (e) => {
              p(t) &&
                (o && e.relatedTarget && o(!1),
                window.HideGameHover &&
                  window.HideGameHover(r ? r() : c.current, e, "global_hover"));
            },
            [t, o, r],
          );
        return (0, n.jsx)("div", {
          ref: c,
          className: a,
          onMouseEnter: u,
          onMouseLeave: m,
          onFocus: u,
          onBlur: m,
          children: l,
        });
      }
      function b(e) {
        const {
            id: t,
            strExtraParams: a,
            fnOnClickOverride: s,
            strOverrideURL: b,
          } = e,
          h = (0, i.n9)(),
          _ = (0, l.w)(),
          I = (0, c.NT)(
            b ||
              (t && "creatorid" in t
                ? (0, o.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(t).id}${a ? `?${a}` : ""}`,
                    h,
                    _,
                  )
                : (0, o.It)(
                    `${u.TS.STORE_BASE_URL}${p(t)}/${((0, d.G$))(t).id}${a ? `?${a}` : ""}`,
                    h,
                    _,
                  )),
          );
        return (0, n.jsx)(m, {
          ...e,
          children: (0, n.jsx)(r.Ii, {
            className: e.className,
            href: s ? void 0 : I,
            target: u.TS.IN_CLIENT || s ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: s,
            children: e.children,
          }),
        });
      }
    },
    75152: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => h });
      var n = a(7850),
        s = a(99171),
        r = a(95578),
        o = a(39777),
        i = a(90626),
        l = a(43976),
        c = a(18654),
        d = a.n(c),
        u = a(96006),
        p = a(3740),
        m = a(14326),
        b = a(52038);
      function h(e) {
        const {
            id: t,
            bHidePrice: a,
            bShowInLibraryInsteadOfPrice: s,
            bHidePlatforms: c,
            strClassName: h,
            creatorAccountID: v,
            bShowName: f,
            onlyOneDiscountPct: x,
            bShowAddToCart: S,
            bShowWishlistButton: w,
          } = e,
          j = (0, i.useRef)(null),
          [A, g] = (0, i.useState)(!1),
          { data: C } = (0, o.J$)(t);
        if (
          ((0, i.useEffect)(() => {
            j.current && g(j.current.offsetWidth < 370);
          }, [j]),
          !t || !("appid" in t || "bundleid" in t || "packageid" in t))
        )
          return null;
        const P = Boolean(w && C?.item_type == r.c6.qI),
          D = Boolean(!v && !S && !P && c && a);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            !D &&
              (0, n.jsxs)("div", {
                ref: j,
                className: (0, b.A)(
                  d().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  h,
                ),
                children: [
                  v && (0, n.jsx)(I, { creatorAccountID: v, ...e }),
                  S &&
                    (0, n.jsx)(l.h, {
                      id: t,
                      className: (0, b.A)(
                        d().MaxActionButtonWidth,
                        d().AddToCartButton,
                      ),
                    }),
                  P &&
                    "appid" in t &&
                    (0, n.jsx)(m.r, {
                      appid: t.appid,
                      className: (0, b.A)(
                        d().MaxActionButtonWidth,
                        d().AddToWishlistButton,
                      ),
                    }),
                  !c &&
                    (0, n.jsx)(u.Q, {
                      id: t,
                      bMinimizePlatforms: A,
                      bHideWindows: !0,
                    }),
                  !a &&
                    (0, n.jsx)("span", {
                      className: d().BottomBarPriceInfo,
                      children: (0, n.jsx)(p.NF, {
                        id: t,
                        bShowInLibrary: s,
                        onlyOneDiscountPct: x,
                      }),
                    }),
                ],
              }),
            f && (0, n.jsx)(_, { id: t }),
          ],
        });
      }
      function _(e) {
        const { id: t } = e,
          { data: a } = (0, o.J$)(t);
        return a?.name
          ? (0, n.jsx)("div", { className: d().CapsuleName, children: a.name })
          : null;
      }
      function I(e) {
        const { creatorAccountID: t, strClassName: a } = e,
          r = (0, i.useMemo)(() => ({ creatorid: t }), [t]),
          { data: l } = (0, o.J$)(r),
          { data: c } = (0, o.lv)(r);
        if (!l) return null;
        const u = (0, s.t)(c?.clan_avatar, "Medium"),
          p = l.name || "";
        return (0, n.jsxs)("div", {
          className: (0, b.A)(d().BottomCreatorRow, a),
          children: [
            (0, n.jsx)("img", {
              className: (0, b.A)(d().CreatorLogo),
              src: u,
              alt: p,
            }),
            (0, n.jsx)("span", { className: d().CreatorName, children: p }),
          ],
        });
      }
    },
    22687: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => L, J: () => F });
      var n = a(7850),
        s = a(45699),
        r = a(76217),
        o = a(23310),
        i = a(95578),
        l = a(76682),
        c = a(29008),
        d = a(20433);
      var u = a(94191),
        p = a(78588),
        m = a(90421),
        b = a(12424),
        h = a(75152),
        _ = a(42834),
        I = a(80696),
        v = a(39777),
        f = a(14987),
        x = a(60014),
        S = a(58918),
        w = a(90626),
        j = a(55963),
        A = a(33924),
        g = a(18654),
        C = a.n(g),
        P = a(72860),
        D = a(70300),
        y = a(54492),
        E = a(49411),
        N = a(52038),
        T = a(61859),
        H = a(61336),
        B = a(78327),
        k = a(91291),
        O = a.n(k),
        M = a(5309),
        W = a(71420);
      const F = "capsule_index_";
      function L(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: s,
            index: i,
            navKey: d,
            bHideStoreHover: u,
            onlyOneDiscountPct: p,
            bPreferDemoStorePage: m,
            bShowEarlyAccessBanner: b,
          } = e,
          h = (0, B.Qn)(),
          [_, I] = w.useState(!1),
          x = (0, l.rt)(t),
          { data: S } = (0, v.J$)(x),
          j = (0, f.$5)(a ? S?.related_items?.parent_appid : void 0),
          { data: A } = (0, v.J$)(j);
        if (!S || !x) return null;
        const g = !!A && !!j,
          P = (0, n.jsx)($, {
            ...e,
            strExtraParams: e.strExtraParams,
            id: x,
            bIsHovered: _,
            bHasParentAppToDisplay: g,
            onlyOneDiscountPct: p,
            bShowEarlyAccessBanner: b,
            bUsePanel: !u && !h,
          });
        return (0, n.jsxs)(r.Z, {
          className: (0, N.A)({
            [C().OuterCapsuleContainer]: !0,
            [F + i]: 0 == i,
          }),
          navEntryPreferPosition: o.iU.PREFERRED_CHILD,
          navKey: d,
          children: [
            (0, n.jsxs)(D.oj, {
              appid: S.appid,
              children: [
                Boolean(u)
                  ? (0, n.jsx)("div", {
                      onMouseEnter: () => I(!0),
                      onMouseLeave: () => I(!1),
                      children: P,
                    })
                  : (0, n.jsx)(c.Q, {
                      className: C().CapsuleContainer,
                      id: x,
                      elElementToAppend: e.elElementToAppendToHover,
                      bShowDemoButton: e.bShowDemoButton,
                      bPreferDemoStorePage: e.bPreferDemoStorePage,
                      bShowDeckCompatibilityDialog:
                        e.bShowDeckCompatibilityDialog,
                      eHardwareCompatibilityDisplay:
                        e.eHardwareCompatibilityDisplay,
                      bHidePrice: e.bHidePrice,
                      bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                      strExtraParams: e.strExtraParams,
                      nCreatorAccountID: e.creatorAccountID,
                      nWidthMultiplier: e.nWidthMultiplier,
                      bShowIgnoreButton: e.bShowIgnoreButton,
                      bShowDescription: e.bShowDescriptionInHover,
                      children: P,
                    }),
                Boolean(s) && (0, n.jsx)(n.Fragment, { children: s }),
              ],
            }),
            g &&
              (0, n.jsx)(R, {
                strExtraParams: e.strExtraParams,
                parentID: j,
                parentStoreItemDefaultInfo: A,
                childAppType: S.type,
                bPreferDemoStorePage: Boolean(m),
              }),
          ],
        });
      }
      function R(e) {
        const {
            strExtraParams: t,
            parentID: a,
            parentStoreItemDefaultInfo: r,
            childAppType: o,
            bPreferDemoStorePage: l,
          } = e,
          c = (0, x.n9)(),
          u = (0, B.Qn)(),
          { data: p } = (0, v.lv)(a);
        return p
          ? (0, n.jsx)(s.ml, {
              className: C().CapsuleParentInfo,
              ...(0, P.S)(r, c, u, l, t),
              children: (0, n.jsxs)(D.oj, {
                appid: r.appid,
                children: [
                  (0, n.jsx)("div", {
                    className: C().ParentType,
                    children: (0, T.we)(
                      o == i.uE.Ov
                        ? "#SalePage_ParentApp_SoundTrack"
                        : "#SalePage_ParentApp_DLC",
                    ),
                  }),
                  (0, n.jsx)(d.u, {
                    id: a,
                    strExtraParams: t,
                    children: (0, n.jsx)("img", {
                      loading: "lazy",
                      className: A.AppCapsuleImage,
                      alt: r.name || "",
                      src: (0, _.b0)(p, "small_capsule"),
                      width: 231,
                      height: 87,
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function $(e) {
        const {
            id: t,
            bHideStatusBanners: a,
            bUsePanel: o,
            strExtraParams: i,
            index: l,
            imageType: c,
            bHasParentAppToDisplay: d,
            bIsHovered: m,
            strDoubleCapsuleMessage: b,
            bPreferDemoStorePage: h,
            bShowEarlyAccessBanner: _,
            bPreferAssetWithoutOverride: S,
          } = e,
          w = (0, x.n9)(),
          A = (0, E.w)(),
          g = (0, f._Z)(t),
          { data: C } = (0, v.J$)(t);
        if (!C) return null;
        const P = o
            ? void 0
            : (0, H.NT)(
                (0, j.It)(`${(0, W._)(C, h)}${i ? `?${i}` : ""}`, w, A),
              ),
          D = o ? r.Z : s.Ii,
          T = !!b;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, N.A)({ [O().TwoWidthCtn]: T }),
              children: [
                (0, n.jsxs)(D, {
                  href: P,
                  style: { display: "block", cursor: "pointer" },
                  className: (0, N.A)({ [O().TwoWidthCapsule]: T }),
                  preferredFocus: d,
                  focusable: !0,
                  children: [
                    (0, n.jsx)(u.V, {
                      appids: g,
                      hide_status_banners: a,
                      show_early_access: _,
                    }),
                    "none" != c &&
                      (0, n.jsx)(p.a, {
                        imageType: c,
                        id: t,
                        bPreferAssetWithoutOverride: S,
                      }),
                    (0, n.jsx)(y.J, { id: t }),
                    (0, n.jsx)(I.mj, { id: t, active: m, bIsHoverMode: !0 }),
                  ],
                }),
                T &&
                  (0, n.jsx)(G, {
                    id: t,
                    strDoubleCapsuleMessage: b,
                    index: l,
                  }),
              ],
            }),
            (0, n.jsx)(J, { ...e }),
          ],
        });
      }
      function G(e) {
        const { id: t, strDoubleCapsuleMessage: a, index: s } = e,
          { data: r } = (0, v.by)(t),
          { data: o } = (0, v.xz)(t);
        return (0, n.jsxs)("div", {
          className: (0, N.A)(O().TwoWidthSideInfo, "TwoWidthSideInfo"),
          children: [
            (0, n.jsx)("div", { className: O().Reason, children: a }),
            (0, n.jsx)("div", {
              className: O().StoreSaleItemRelease,
              children: (0, n.jsx)("span", { children: r ? (0, M.CC)(r) : "" }),
            }),
            (0, n.jsx)(m.n, {
              bHideTitle: !0,
              rgTagIDs: o?.map((e) => e.tagid) || [],
              instanceNum: s,
            }),
          ],
        });
      }
      function J(e) {
        const {
            id: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: s,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: o,
            bHidePrice: l,
            bHidePlatforms: c,
            creatorAccountID: d,
            bIsHovered: u,
            onlyOneDiscountPct: p,
            strDoubleCapsuleMessage: m,
          } = e,
          { data: _ } = (0, v.J$)(t),
          { bIsOwned: I } = (0, S.ZJ)(t);
        if (r && _ && _.item_type == i.c6.qI && _.appid)
          return (0, n.jsx)(b.E, { appid: _.appid, bIsMuted: u });
        if (o) return null;
        const f = Boolean(I && a);
        return (0, n.jsx)(h.q, {
          id: t,
          bHidePrice: l,
          bShowInLibraryInsteadOfPrice: f,
          bHidePlatforms: c,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: p,
          bShowWishlistButton: Boolean(m),
        });
      }
    },
    14326: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => j, r: () => w });
      var n = a(7850),
        s = a(95578),
        r = a(14987),
        o = a(39777),
        i = a(60014),
        l = a(58918),
        c = a(17376),
        d = a(79969),
        u = a(90626),
        p = a(55963),
        m = a(18654),
        b = a.n(m),
        h = a(39700),
        _ = a(12155),
        I = a(32754),
        v = a(52038),
        f = a(61859),
        x = a(78327),
        S = a(84547);
      function w(e) {
        const { appid: t, className: a, bTextMode: s } = e,
          i = (0, r.$5)(t),
          { data: l } = (0, o.J$)(i),
          { data: c } = (0, o.by)(i);
        return (0, n.jsx)(j, {
          appid: t,
          bIsFree: Boolean(l?.is_free),
          bIsComingSoon: Boolean(c?.is_coming_soon),
          bTextMode: s,
          className: a,
        });
      }
      function j(e) {
        const [t, a] = u.useState(!1),
          s = (0, i.n9)(),
          {
            appid: o,
            bIsFree: m,
            bIsComingSoon: w,
            className: j,
            bTextMode: g,
          } = e,
          C = (0, r.$5)(o),
          { bIsOwned: P } = (0, l.ZJ)(C),
          D = (0, c.bB)(o),
          { mutateAsync: y } = (0, d.s)(o, !D, (0, p.L3)(s)),
          { elDialogElement: E, fnShowLogonDialog: N } = (0, S.l)();
        if (P || (!w && m))
          return m ? (0, n.jsx)(A, { possibleDemoAppID: o }) : null;
        let T = null;
        return (
          t && !g
            ? (T = (0, n.jsx)(h.k, { size: 18 }))
            : D
              ? D && (T = g ? (0, f.we)("#OnWishlist") : (0, n.jsx)(_.qnF, {}))
              : (T = g
                  ? (0, f.we)("#wishlist_add_to_wishlist")
                  : (0, n.jsx)(_.T4m, {})),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(I.he, {
                toolTipContent: (0, f.we)("#AddToWishlist_ttip"),
                children: (0, n.jsx)("div", {
                  className: (0, v.A)(b().WishList, j),
                  onClick: async () => {
                    x.iA.logged_in ? t || (a(!0), await y(), a(!1)) : N();
                  },
                  children: T,
                }),
              }),
              E,
            ],
          })
        );
      }
      function A(e) {
        const { possibleDemoAppID: t, className: a } = e,
          i = (0, r.$5)(t),
          { data: l } = (0, o.J$)(i);
        return l
          ? (l.type != s.uE.ue && l.type != s.uE.Vi) ||
            !l.related_items?.parent_appid
            ? null
            : (0, n.jsx)(g, {
                parentAppID: l.related_items?.parent_appid,
                className: a,
              })
          : null;
      }
      function g(e) {
        const { parentAppID: t, className: a } = e,
          s = (0, r.$5)(t),
          { data: i } = (0, o.J$)(s),
          { data: l } = (0, o.by)(s);
        return i && l
          ? (0, n.jsx)(j, {
              appid: t,
              bIsComingSoon: Boolean(l.is_coming_soon),
              bIsFree: Boolean(i.is_free),
              className: a,
            })
          : null;
      }
    },
  },
]);
