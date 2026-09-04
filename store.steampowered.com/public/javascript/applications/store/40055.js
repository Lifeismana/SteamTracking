/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [40055],
    {
      95414: (U, N, t) => {
        "use strict";
        t.d(N, { j: () => f, u: () => w });
        var e = t(7850),
          M = t(90626),
          A = t(24660),
          I = t(83482),
          T = t(72865),
          H = t(77200),
          K = t(53113),
          l = t(68094),
          L = t(72609),
          Y = t(3166);
        function S(d) {
          if (d) {
            if ("appid" in d) return "app";
            if ("bundleid" in d) return "bundle";
            if ("packageid" in d) return "sub";
          }
        }
        function f(d) {
          const {
              id: v,
              hoverClassName: E,
              fnGetIDOverride: s,
              fnHoverState: n,
              disableScreenshots: o,
              children: D,
            } = d,
            c = M.useRef(null),
            P = M.useCallback(
              (h) => {
                const i = S(v);
                i &&
                  (n && n(!0),
                  window.GameHover &&
                    (c.current &&
                      o &&
                      (c.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(s ? s() : c.current, h, "global_hover", {
                      type: i,
                      id: (0, l.G$)(v).id,
                      v6: 1,
                    })));
              },
              [n, s, o, v],
            ),
            g = M.useCallback(
              (h) => {
                S(v) &&
                  (n && h.relatedTarget && n(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      s ? s() : c.current,
                      h,
                      "global_hover",
                    ));
              },
              [v, n, s],
            );
          return (0, e.jsx)("div", {
            ref: c,
            className: E,
            onMouseEnter: P,
            onMouseLeave: g,
            onFocus: P,
            onBlur: g,
            children: D,
          });
        }
        function w(d) {
          const {
              id: v,
              strExtraParams: E,
              fnOnClickOverride: s,
              strOverrideURL: n,
            } = d,
            o = (0, T.n9)(),
            D = (0, H.w)(),
            c = (0, K.NT)(
              n ||
                (v && "creatorid" in v
                  ? (0, I.It)(
                      `${L.TS.STORE_BASE_URL}curator/${((0, l.G$))(v).id}${E ? `?${E}` : ""}`,
                      o,
                      D,
                    )
                  : (0, I.It)(
                      `${L.TS.STORE_BASE_URL}${S(v)}/${((0, l.G$))(v).id}${E ? `?${E}` : ""}`,
                      o,
                      D,
                    )),
            );
          return (0, e.jsx)(f, {
            ...d,
            children: (0, e.jsx)(A.Ii, {
              className: d.className,
              href: s ? void 0 : c,
              target: L.TS.IN_CLIENT || s ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: s,
              children: d.children,
            }),
          });
        }
      },
      63063: (U, N, t) => {
        "use strict";
        t.d(N, { q: () => w });
        var e = t(7850),
          M = t(76105),
          A = t(56062),
          I = t(40358),
          T = t(90626),
          H = t(9975),
          K = t(18654),
          l = t.n(K),
          L = t(29245),
          Y = t(48357),
          S = t(81081),
          f = t(36707);
        function w(E) {
          const {
              id: s,
              bHidePrice: n,
              bShowInLibraryInsteadOfPrice: o,
              bHidePlatforms: D,
              strClassName: c,
              creatorAccountID: P,
              bShowName: g,
              onlyOneDiscountPct: h,
              bShowAddToCart: i,
              bShowWishlistButton: C,
            } = E,
            m = (0, T.useRef)(null),
            [r, O] = (0, T.useState)(!1),
            { data: G } = (0, I.J$)(s);
          if (
            ((0, T.useEffect)(() => {
              m.current && O(m.current.offsetWidth < 370);
            }, [m]),
            !s || !("appid" in s || "bundleid" in s || "packageid" in s))
          )
            return null;
          const X = !!(C && G?.item_type == A.c6.qI),
            j = !!(!P && !i && !X && D && n);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !j &&
                (0, e.jsxs)("div", {
                  ref: m,
                  className: (0, f.A)(
                    l().CapsuleBottomBar,
                    "CapsuleBottomBar",
                    c,
                  ),
                  children: [
                    P && (0, e.jsx)(v, { creatorAccountID: P, ...E }),
                    i &&
                      (0, e.jsx)(H.h, {
                        id: s,
                        className: (0, f.A)(
                          l().MaxActionButtonWidth,
                          l().AddToCartButton,
                        ),
                      }),
                    X &&
                      "appid" in s &&
                      (0, e.jsx)(S.r, {
                        appid: s.appid,
                        className: (0, f.A)(
                          l().MaxActionButtonWidth,
                          l().AddToWishlistButton,
                        ),
                      }),
                    !D &&
                      (0, e.jsx)(L.Q, {
                        id: s,
                        bMinimizePlatforms: r,
                        bHideWindows: !0,
                      }),
                    !n &&
                      (0, e.jsx)("span", {
                        className: l().BottomBarPriceInfo,
                        children: (0, e.jsx)(Y.NF, {
                          id: s,
                          bShowInLibrary: o,
                          onlyOneDiscountPct: h,
                        }),
                      }),
                  ],
                }),
              g && (0, e.jsx)(d, { id: s }),
            ],
          });
        }
        function d(E) {
          const { id: s } = E,
            { data: n } = (0, I.J$)(s);
          return n?.name
            ? (0, e.jsx)("div", {
                className: l().CapsuleName,
                children: n.name,
              })
            : null;
        }
        function v(E) {
          const { creatorAccountID: s, strClassName: n } = E,
            o = (0, T.useMemo)(() => ({ creatorid: s }), [s]),
            { data: D } = (0, I.J$)(o),
            { data: c } = (0, I.lv)(o);
          if (!D) return null;
          const P = (0, M.t)(c?.clan_avatar, "Medium"),
            g = D.name || "";
          return (0, e.jsxs)("div", {
            className: (0, f.A)(l().BottomCreatorRow, n),
            children: [
              (0, e.jsx)("img", {
                className: (0, f.A)(l().CreatorLogo),
                src: P,
                alt: g,
              }),
              (0, e.jsx)("span", { className: l().CreatorName, children: g }),
            ],
          });
        }
      },
      96117: (U, N, t) => {
        "use strict";
        t.d(N, { W: () => dt, J: () => $ });
        var e = t(7850),
          M = t(24660),
          A = t(19298),
          I = t(20169),
          T = t(56062),
          H = t(88743),
          K = t(80702),
          l = t(95414);
        function L() {
          return { width: 460, height: 215 };
        }
        function Y() {
          return { width: 616, height: 353 };
        }
        function S() {
          return { width: 231, height: 87 };
        }
        var f = t(46727),
          w = t(84607),
          d = t(41188),
          v = t(77459),
          E = t(63063),
          s = t(21721),
          n = t(87249),
          o = t(40358),
          D = t(29522),
          c = t(72865),
          P = t(24179),
          g = t(90626),
          h = t(83482),
          i = t(33924),
          C = t(18654),
          m = t.n(C),
          r = t(78069),
          O = t(81029),
          G = t(96155),
          X = t(77200),
          j = t(36707),
          at = t(18210),
          nt = t(53113),
          Q = t(3166),
          ot = t(91291),
          F = t.n(ot),
          rt = t(3348),
          it = t(47875);
        const $ = "capsule_index_";
        function dt(a) {
          const {
              capsule: u,
              bShowParentApp: B,
              elElementToAppendToHover: _,
              index: p,
              navKey: W,
              bHideStoreHover: x,
              onlyOneDiscountPct: J,
              bPreferDemoStorePage: y,
              bShowEarlyAccessBanner: V,
            } = a,
            k = (0, Q.Qn)(),
            [q, R] = g.useState(!1),
            b = (0, H.rt)(u),
            { data: z } = (0, o.J$)(b),
            Z = (0, D.$5)(B ? z?.related_items?.parent_appid : void 0),
            { data: tt } = (0, o.J$)(Z);
          if (!z || !b) return null;
          const et = !!tt && !!Z,
            st = (0, e.jsx)(mt, {
              ...a,
              strExtraParams: a.strExtraParams,
              id: b,
              bIsHovered: q,
              bHasParentAppToDisplay: et,
              onlyOneDiscountPct: J,
              bShowEarlyAccessBanner: V,
              bUsePanel: !x && !k,
            });
          return (0, e.jsxs)(A.Z, {
            className: (0, j.A)({
              [m().OuterCapsuleContainer]: !0,
              [$ + p]: p == 0,
            }),
            navEntryPreferPosition: I.iU.PREFERRED_CHILD,
            navKey: W,
            children: [
              (0, e.jsxs)(O.oj, {
                appid: z.appid,
                children: [
                  x
                    ? (0, e.jsx)("div", {
                        onMouseEnter: () => R(!0),
                        onMouseLeave: () => R(!1),
                        children: st,
                      })
                    : (0, e.jsx)(K.Q, {
                        className: m().CapsuleContainer,
                        id: b,
                        elElementToAppend: a.elElementToAppendToHover,
                        bShowDemoButton: a.bShowDemoButton,
                        bPreferDemoStorePage: a.bPreferDemoStorePage,
                        bShowDeckCompatibilityDialog:
                          a.bShowDeckCompatibilityDialog,
                        bHidePrice: a.bHidePrice,
                        bUseSubscriptionLayout: a.bUseSubscriptionLayout,
                        strExtraParams: a.strExtraParams,
                        nCreatorAccountID: a.creatorAccountID,
                        nWidthMultiplier: a.nWidthMultiplier,
                        bShowIgnoreButton: a.bShowIgnoreButton,
                        bShowDescription: a.bShowDescriptionInHover,
                        children: st,
                      }),
                  !!_ && (0, e.jsx)(e.Fragment, { children: _ }),
                ],
              }),
              et &&
                (0, e.jsx)(ct, {
                  strExtraParams: a.strExtraParams,
                  parentID: Z,
                  parentStoreItemDefaultInfo: tt,
                  childAppType: z.type,
                  bPreferDemoStorePage: !!y,
                }),
            ],
          });
        }
        function ct(a) {
          const {
              strExtraParams: u,
              parentID: B,
              parentStoreItemDefaultInfo: _,
              childAppType: p,
              bPreferDemoStorePage: W,
            } = a,
            x = (0, c.n9)(),
            J = (0, Q.Qn)(),
            { data: y } = (0, o.lv)(B);
          return y
            ? (0, e.jsx)(M.ml, {
                className: m().CapsuleParentInfo,
                ...(0, r.S)(_, x, J, W, u),
                children: (0, e.jsxs)(O.oj, {
                  appid: _.appid,
                  children: [
                    (0, e.jsx)("div", {
                      className: m().ParentType,
                      children: (0, at.we)(
                        p == T.uE.Ov
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC",
                      ),
                    }),
                    (0, e.jsx)(l.u, {
                      id: B,
                      strExtraParams: u,
                      children: (0, e.jsx)("img", {
                        loading: "lazy",
                        className: i.AppCapsuleImage,
                        alt: _.name || "",
                        src: (0, s.b0)(y, "small_capsule"),
                        ...S(),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function mt(a) {
          const {
              id: u,
              bHideStatusBanners: B,
              bUsePanel: _,
              strExtraParams: p,
              index: W,
              imageType: x,
              bHasParentAppToDisplay: J,
              bIsHovered: y,
              strDoubleCapsuleMessage: V,
              bPreferDemoStorePage: k,
              bShowEarlyAccessBanner: q,
              bPreferAssetWithoutOverride: R,
            } = a,
            b = (0, c.n9)(),
            z = (0, X.w)(),
            Z = (0, D._Z)(u),
            { data: tt } = (0, o.J$)(u);
          if (!tt) return null;
          const et = _
              ? void 0
              : (0, nt.NT)(
                  (0, h.It)(`${(0, it._)(tt, k)}${p ? `?${p}` : ""}`, b, z),
                ),
            st = _ ? A.Z : M.Ii,
            lt = !!V;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, j.A)({ [F().TwoWidthCtn]: lt }),
                children: [
                  (0, e.jsxs)(st, {
                    href: et,
                    style: { display: "block", cursor: "pointer" },
                    className: (0, j.A)({ [F().TwoWidthCapsule]: lt }),
                    preferredFocus: J,
                    focusable: !0,
                    children: [
                      (0, e.jsx)(f.V, {
                        appids: Z,
                        hide_status_banners: B,
                        show_early_access: q,
                      }),
                      x != "none" &&
                        (0, e.jsx)(w.a, {
                          imageType: x,
                          id: u,
                          bPreferAssetWithoutOverride: R,
                        }),
                      (0, e.jsx)(G.J, { id: u }),
                      (0, e.jsx)(n.mj, { id: u, active: y, bIsHoverMode: !0 }),
                    ],
                  }),
                  lt &&
                    (0, e.jsx)(ut, {
                      id: u,
                      strDoubleCapsuleMessage: V,
                      index: W,
                    }),
                ],
              }),
              (0, e.jsx)(vt, { ...a }),
            ],
          });
        }
        function ut(a) {
          const { id: u, strDoubleCapsuleMessage: B, index: _ } = a,
            { data: p } = (0, o.by)(u),
            { data: W } = (0, o.xz)(u);
          return (0, e.jsxs)("div", {
            className: (0, j.A)(F().TwoWidthSideInfo, "TwoWidthSideInfo"),
            children: [
              (0, e.jsx)("div", { className: F().Reason, children: B }),
              (0, e.jsx)("div", {
                className: F().StoreSaleItemRelease,
                children: (0, e.jsx)("span", {
                  children: p ? (0, rt.CC)(p) : "",
                }),
              }),
              (0, e.jsx)(d.n, {
                bHideTitle: !0,
                rgTagIDs: W?.map((x) => x.tagid) || [],
                instanceNum: _,
              }),
            ],
          });
        }
        function vt(a) {
          const {
              id: u,
              bHidePriceIfOwned: B,
              bHideStatusBanners: _,
              bUseSubscriptionLayout: p,
              elElementToAppendToHover: W,
              bHidePrice: x,
              bHidePlatforms: J,
              creatorAccountID: y,
              bIsHovered: V,
              onlyOneDiscountPct: k,
              strDoubleCapsuleMessage: q,
            } = a,
            { data: R } = (0, o.J$)(u),
            { bIsOwned: b } = (0, P.ZJ)(u),
            z = b && !_;
          if (p && R && R.item_type == T.c6.qI && R.appid)
            return (0, e.jsx)(v.E, { appid: R.appid, bIsMuted: V });
          if (W) return null;
          const Z = !!(b && B);
          return (0, e.jsx)(E.q, {
            id: u,
            bHidePrice: x,
            bShowInLibraryInsteadOfPrice: Z,
            bHidePlatforms: J,
            creatorAccountID: y,
            bShowName: a.bShowName,
            onlyOneDiscountPct: k,
            bShowWishlistButton: !!q,
          });
        }
      },
      81081: (U, N, t) => {
        "use strict";
        t.d(N, { _: () => c, r: () => D });
        var e = t(7850),
          M = t(56062),
          A = t(29522),
          I = t(40358),
          T = t(72865),
          H = t(24179),
          K = t(54528),
          l = t(96362),
          L = t(90626),
          Y = t(83482),
          S = t(18654),
          f = t.n(S),
          w = t(85705),
          d = t(36118),
          v = t(71421),
          E = t(36707),
          s = t(18210),
          n = t(3166),
          o = t(89926);
        function D(h) {
          const { appid: i, className: C, bTextMode: m } = h,
            r = (0, A.$5)(i),
            { data: O } = (0, I.J$)(r),
            { data: G } = (0, I.by)(r);
          return (0, e.jsx)(c, {
            appid: i,
            bIsFree: !!O?.is_free,
            bIsComingSoon: !!G?.is_coming_soon,
            bTextMode: m,
            className: C,
          });
        }
        function c(h) {
          const [i, C] = L.useState(!1),
            m = (0, T.n9)(),
            {
              appid: r,
              bIsFree: O,
              bIsComingSoon: G,
              className: X,
              bTextMode: j,
            } = h,
            at = (0, A.$5)(r),
            { bIsOwned: nt } = (0, H.ZJ)(at),
            Q = (0, K.bB)(r),
            { mutateAsync: ot } = (0, l.s)(r, !Q, (0, Y.L3)(m)),
            { elDialogElement: F, fnShowLogonDialog: rt } = (0, o.l)(),
            it = async () => {
              if (!n.iA.logged_in) {
                rt();
                return;
              }
              i || (C(!0), await ot(), C(!1));
            };
          if (nt || (!G && O))
            return O ? (0, e.jsx)(P, { possibleDemoAppID: r }) : null;
          let $ = null;
          return (
            i && !j
              ? ($ = (0, e.jsx)(w.k, { size: 18 }))
              : Q
                ? Q &&
                  ($ = j ? (0, s.we)("#OnWishlist") : (0, e.jsx)(d.qnF, {}))
                : ($ = j
                    ? (0, s.we)("#wishlist_add_to_wishlist")
                    : (0, e.jsx)(d.T4m, {})),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(v.he, {
                  toolTipContent: (0, s.we)("#AddToWishlist_ttip"),
                  children: (0, e.jsx)("div", {
                    className: (0, E.A)(f().WishList, X),
                    onClick: it,
                    children: $,
                  }),
                }),
                F,
              ],
            })
          );
        }
        function P(h) {
          const { possibleDemoAppID: i, className: C } = h,
            m = (0, A.$5)(i),
            { data: r } = (0, I.J$)(m);
          return r &&
            (r.type == M.uE.ue || r.type == M.uE.Vi) &&
            r.related_items?.parent_appid
            ? (0, e.jsx)(g, {
                parentAppID: r.related_items?.parent_appid,
                className: C,
              })
            : null;
        }
        function g(h) {
          const { parentAppID: i, className: C } = h,
            m = (0, A.$5)(i),
            { data: r } = (0, I.J$)(m),
            { data: O } = (0, I.by)(m);
          return !r || !O
            ? null
            : (0, e.jsx)(c, {
                appid: i,
                bIsComingSoon: !!O.is_coming_soon,
                bIsFree: !!r.is_free,
                className: C,
              });
        }
      },
      33924: (U) => {
        U.exports = {
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
      91291: (U) => {
        U.exports = {
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
    },
  ]);
})();
