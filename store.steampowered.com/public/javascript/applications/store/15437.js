/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [15437],
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
        FadeIn: "_1xh0S-u1cc7_ADm8OLsN-i",
        fadeIn: "cEYXuP-T4izqJqayIpH0D",
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
        i = a(55963),
        o = a(60014),
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
            fnHoverState: i,
            disableScreenshots: o,
            children: l,
          } = e,
          c = s.useRef(null),
          u = s.useCallback(
            (e) => {
              const a = p(t);
              a &&
                (i && i(!0),
                window.GameHover &&
                  (c.current &&
                    o &&
                    (c.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(r ? r() : c.current, e, "global_hover", {
                    type: a,
                    id: (0, d.G$)(t).id,
                    v6: 1,
                  })));
            },
            [i, r, o, t],
          ),
          m = s.useCallback(
            (e) => {
              p(t) &&
                (i && e.relatedTarget && i(!1),
                window.HideGameHover &&
                  window.HideGameHover(r ? r() : c.current, e, "global_hover"));
            },
            [t, i, r],
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
          h = (0, o.n9)(),
          _ = (0, l.w)(),
          I = (0, c.NT)(
            b ||
              (t && "creatorid" in t
                ? (0, i.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(t).id}${a ? `?${a}` : ""}`,
                    h,
                    _,
                  )
                : (0, i.It)(
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
        r = a(8747),
        i = a(39777),
        o = a(90626),
        l = a(6181),
        c = a(76532),
        d = a.n(c),
        u = a(96006),
        p = a(3740),
        m = a(88323),
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
            bShowAddToCart: w,
            bShowWishlistButton: S,
          } = e,
          A = (0, o.useRef)(null),
          [j, g] = (0, o.useState)(!1),
          { data: C } = (0, i.J$)(t);
        if (
          ((0, o.useEffect)(() => {
            A.current && g(A.current.offsetWidth < 370);
          }, [A]),
          !t || !("appid" in t || "bundleid" in t || "packageid" in t))
        )
          return null;
        const D = Boolean(S && C?.item_type == r.c6.qI),
          P = Boolean(!v && !w && !D && c && a);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            !P &&
              (0, n.jsxs)("div", {
                ref: A,
                className: (0, b.A)(
                  d().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  h,
                ),
                children: [
                  v && (0, n.jsx)(I, { creatorAccountID: v, ...e }),
                  w &&
                    (0, n.jsx)(l.h, {
                      id: t,
                      className: (0, b.A)(
                        d().MaxActionButtonWidth,
                        d().AddToCartButton,
                      ),
                    }),
                  D &&
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
                      bMinimizePlatforms: j,
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
          { data: a } = (0, i.J$)(t);
        return a?.name
          ? (0, n.jsx)("div", { className: d().CapsuleName, children: a.name })
          : null;
      }
      function I(e) {
        const { creatorAccountID: t, strClassName: a } = e,
          r = (0, o.useMemo)(() => ({ creatorid: t }), [t]),
          { data: l } = (0, i.J$)(r),
          { data: c } = (0, i.lv)(r);
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
    88323: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => A, r: () => S });
      var n = a(7850),
        s = a(8747),
        r = a(14987),
        i = a(39777),
        o = a(60014),
        l = a(58918),
        c = a(17376),
        d = a(79969),
        u = a(90626),
        p = a(55963),
        m = a(76532),
        b = a.n(m),
        h = a(39700),
        _ = a(12155),
        I = a(32754),
        v = a(52038),
        f = a(61859),
        x = a(78327),
        w = a(84547);
      function S(e) {
        const { appid: t, className: a, bTextMode: s } = e,
          o = (0, r.$5)(t),
          { data: l } = (0, i.J$)(o),
          { data: c } = (0, i.by)(o);
        return (0, n.jsx)(A, {
          appid: t,
          bIsFree: Boolean(l?.is_free),
          bIsComingSoon: Boolean(c?.is_coming_soon),
          bTextMode: s,
          className: a,
        });
      }
      function A(e) {
        const [t, a] = u.useState(!1),
          s = (0, o.n9)(),
          {
            appid: i,
            bIsFree: m,
            bIsComingSoon: S,
            className: A,
            bTextMode: g,
          } = e,
          C = (0, r.$5)(i),
          { bIsOwned: D } = (0, l.ZJ)(C),
          P = (0, c.bB)(i),
          { mutateAsync: y } = (0, d.s)(i, !P, (0, p.L3)(s)),
          { elDialogElement: E, fnShowLogonDialog: T } = (0, w.l)();
        if (D || (!S && m))
          return m ? (0, n.jsx)(j, { possibleDemoAppID: i }) : null;
        let N = null;
        return (
          t && !g
            ? (N = (0, n.jsx)(h.k, { size: 18 }))
            : P
              ? P && (N = g ? (0, f.we)("#OnWishlist") : (0, n.jsx)(_.qnF, {}))
              : (N = g
                  ? (0, f.we)("#wishlist_add_to_wishlist")
                  : (0, n.jsx)(_.T4m, {})),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(I.he, {
                toolTipContent: (0, f.we)("#AddToWishlist_ttip"),
                children: (0, n.jsx)("div", {
                  className: (0, v.A)(b().WishList, A),
                  onClick: async () => {
                    x.iA.logged_in ? t || (a(!0), await y(), a(!1)) : T();
                  },
                  children: N,
                }),
              }),
              E,
            ],
          })
        );
      }
      function j(e) {
        const { possibleDemoAppID: t, className: a } = e,
          o = (0, r.$5)(t),
          { data: l } = (0, i.J$)(o);
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
          { data: o } = (0, i.J$)(s),
          { data: l } = (0, i.by)(s);
        return o && l
          ? (0, n.jsx)(A, {
              appid: t,
              bIsComingSoon: Boolean(l.is_coming_soon),
              bIsFree: Boolean(o.is_free),
              className: a,
            })
          : null;
      }
    },
    22687: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => R, J: () => L });
      var n = a(7850),
        s = a(45699),
        r = a(76217),
        i = a(23310),
        o = a(8747),
        l = a(76682),
        c = a(48123),
        d = a(29008),
        u = a(79619),
        p = a(20433);
      var m = a(94191),
        b = a(78588),
        h = a(90421),
        _ = a(12424),
        I = a(75152),
        v = a(42834),
        f = a(80696),
        x = a(39777),
        w = a(14987),
        S = a(60014),
        A = a(58918),
        j = a(2589),
        g = a(90626),
        C = a(55963),
        D = a(33924),
        P = a(76532),
        y = a.n(P),
        E = a(54492),
        T = a(49411),
        N = a(52038),
        H = a(61859),
        B = a(61336),
        k = a(78327),
        O = a(91291),
        M = a.n(O),
        W = a(5309),
        F = a(71420);
      const L = "capsule_index_";
      function R(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: s,
            index: o,
            navKey: u,
            bHideStoreHover: p,
            onlyOneDiscountPct: m,
            bPreferDemoStorePage: b,
            bShowEarlyAccessBanner: h,
          } = e,
          _ = (0, k.Qn)(),
          [I, v] = g.useState(!1),
          [f, S] = g.useState(!1),
          [A, C] = g.useState(!1),
          D = g.useRef(!1);
        g.useEffect(() => {
          if (f && !D.current) {
            const e = window.setTimeout(() => {
              (D.current = !0), C(!0);
            }, 500);
            return () => window.clearTimeout(e);
          }
          return C(f || I), () => {};
        }, [f, I]);
        const { data: P } = (0, j.lI)(),
          E = Boolean(P?.preferences?.disable_microtrailers),
          T = (0, l.rt)(t),
          { data: H } = (0, x.J$)(T),
          B = (0, w.$5)(a ? H?.related_items?.parent_appid : void 0),
          { data: O } = (0, x.J$)(B);
        if (!H || !T) return null;
        const M = !!O && !!B,
          W = (0, n.jsx)(G, {
            ...e,
            strExtraParams: e.strExtraParams,
            id: T,
            bIsHovered: A && !E,
            bHasParentAppToDisplay: M,
            onlyOneDiscountPct: m,
            bShowEarlyAccessBanner: h,
            bUsePanel: !p && !_,
          });
        return (0, n.jsxs)(r.Z, {
          className: (0, N.A)({
            [y().OuterCapsuleContainer]: !0,
            [y().TrailerActive]: A && !E && _,
            [L + o]: 0 == o,
          }),
          navEntryPreferPosition: i.iU.PREFERRED_CHILD,
          navKey: u,
          onFocusWithin: "library" != e.imageType ? S : void 0,
          children: [
            (0, n.jsxs)(c.oj, {
              appid: H.appid,
              children: [
                Boolean(p)
                  ? (0, n.jsx)("div", {
                      onMouseEnter: () => v(!0),
                      onMouseLeave: () => v(!1),
                      children: W,
                    })
                  : (0, n.jsx)(d.Q, {
                      className: y().CapsuleContainer,
                      id: T,
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
                      children: W,
                    }),
                Boolean(s) && (0, n.jsx)(n.Fragment, { children: s }),
              ],
            }),
            M &&
              (0, n.jsx)($, {
                strExtraParams: e.strExtraParams,
                parentID: B,
                parentStoreItemDefaultInfo: O,
                childAppType: H.type,
                bPreferDemoStorePage: Boolean(b),
              }),
          ],
        });
      }
      function $(e) {
        const {
            strExtraParams: t,
            parentID: a,
            parentStoreItemDefaultInfo: r,
            childAppType: i,
            bPreferDemoStorePage: l,
          } = e,
          d = (0, S.n9)(),
          m = (0, k.Qn)(),
          { data: b } = (0, x.lv)(a);
        return b
          ? (0, n.jsx)(s.ml, {
              className: y().CapsuleParentInfo,
              ...(0, u.S)(r, d, m, l, t),
              children: (0, n.jsxs)(c.oj, {
                appid: r.appid,
                children: [
                  (0, n.jsx)("div", {
                    className: y().ParentType,
                    children: (0, H.we)(
                      i == o.uE.Ov
                        ? "#SalePage_ParentApp_SoundTrack"
                        : "#SalePage_ParentApp_DLC",
                    ),
                  }),
                  (0, n.jsx)(p.u, {
                    id: a,
                    strExtraParams: t,
                    children: (0, n.jsx)("img", {
                      loading: "lazy",
                      className: D.AppCapsuleImage,
                      alt: r.name || "",
                      src: (0, v.b0)(b, "small_capsule"),
                      width: 231,
                      height: 87,
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function G(e) {
        const {
            id: t,
            bHideStatusBanners: a,
            bUsePanel: i,
            strExtraParams: o,
            index: l,
            imageType: c,
            bHasParentAppToDisplay: d,
            bIsHovered: u,
            strDoubleCapsuleMessage: p,
            bPreferDemoStorePage: h,
            bShowEarlyAccessBanner: _,
            bPreferAssetWithoutOverride: I,
          } = e,
          v = (0, S.n9)(),
          A = (0, T.w)(),
          j = (0, k.Qn)(),
          g = (0, w._Z)(t),
          { data: D } = (0, x.J$)(t);
        if (!D) return null;
        const P = i
            ? void 0
            : (0, B.NT)(
                (0, C.It)(`${(0, F._)(D, h)}${o ? `?${o}` : ""}`, v, A),
              ),
          y = i ? r.Z : s.Ii,
          H = u && j,
          O = !!p;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, N.A)({ [M().TwoWidthCtn]: O }),
              children: [
                (0, n.jsxs)(y, {
                  href: P,
                  style: {
                    display: "block",
                    cursor: "pointer",
                    position: j ? "relative" : void 0,
                    zIndex: H ? 4 : void 0,
                  },
                  className: (0, N.A)({ [M().TwoWidthCapsule]: O }),
                  preferredFocus: d,
                  focusable: !0,
                  noFocusRing: H,
                  children: [
                    (0, n.jsx)(m.V, {
                      appids: g,
                      hide_status_banners: a,
                      show_early_access: _,
                    }),
                    "none" != c &&
                      (0, n.jsx)(b.a, {
                        imageType: c,
                        id: t,
                        bPreferAssetWithoutOverride: I,
                      }),
                    (0, n.jsx)(E.J, { id: t }),
                    (0, n.jsx)("div", {
                      className: (0, N.A)({ [M().FadeIn]: H }),
                      children: (0, n.jsx)(f.mj, {
                        id: t,
                        active: u,
                        bIsHoverMode: !0,
                        eGrowOnActivate: H
                          ? f.C0.k_ETrailerGrowAmount_Implicit
                          : void 0,
                      }),
                    }),
                  ],
                }),
                O &&
                  (0, n.jsx)(J, {
                    id: t,
                    strDoubleCapsuleMessage: p,
                    index: l,
                  }),
              ],
            }),
            (0, n.jsx)(q, { ...e }),
          ],
        });
      }
      function J(e) {
        const { id: t, strDoubleCapsuleMessage: a, index: s } = e,
          { data: r } = (0, x.by)(t),
          { data: i } = (0, x.xz)(t);
        return (0, n.jsxs)("div", {
          className: (0, N.A)(M().TwoWidthSideInfo, "TwoWidthSideInfo"),
          children: [
            (0, n.jsx)("div", { className: M().Reason, children: a }),
            (0, n.jsx)("div", {
              className: M().StoreSaleItemRelease,
              children: (0, n.jsx)("span", { children: r ? (0, W.CC)(r) : "" }),
            }),
            (0, n.jsx)(h.n, {
              bHideTitle: !0,
              rgTagIDs: i?.map((e) => e.tagid) || [],
              instanceNum: s,
            }),
          ],
        });
      }
      function q(e) {
        const {
            id: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: s,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: i,
            bHidePrice: l,
            bHidePlatforms: c,
            creatorAccountID: d,
            bIsHovered: u,
            onlyOneDiscountPct: p,
            strDoubleCapsuleMessage: m,
          } = e,
          { data: b } = (0, x.J$)(t),
          { bIsOwned: h } = (0, A.ZJ)(t);
        if (r && b && b.item_type == o.c6.qI && b.appid)
          return (0, n.jsx)(_.E, { appid: b.appid, bIsMuted: u });
        if (i) return null;
        const v = Boolean(h && a);
        return (0, n.jsx)(I.q, {
          id: t,
          bHidePrice: l,
          bShowInLibraryInsteadOfPrice: v,
          bHidePlatforms: c,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: p,
          bShowWishlistButton: Boolean(m),
        });
      }
    },
  },
]);
