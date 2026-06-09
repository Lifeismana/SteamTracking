/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6991],
  {
    37882: (e) => {
      e.exports = {
        Ctn: "_3sPRGG8vL4sM6N-8FZo5fT",
        Link: "-YNVdnBAoV2HQCkuR8C1h",
        BackgroundImageCtn: "_31Bm2h6tK_J4K2yYHTtttM",
        BackgroundImageBlurCtn: "_1LzeWsFv8n7BMFyJ1c0bF",
        Headline: "qQs0819GK5nJMJhEfDfqO",
        Verified: "_1DN1jmbJKCQol4bLgow8xK",
        Subtitle: "_2Tf8QYNJrsywiXvKyV2Sm6",
        DeviceFullWidthShadow: "_33ittd22VgVN6fUvIAgkqu",
        VideoDisclaimer: "_2FW4jsZDS7ltbcDrOQStiW",
        DeviceWrapper: "_3DCMQY1PEeYS2E7r8NJXKQ",
        CapsuleWrapper: "_1JhQMb3X6rKYyPqZWOZG5w",
        HardwareBannerCtn: "_2L4eqs1UZ1QEjRC1S8qiJA",
        TrailerCtn: "_3LbKJsBRhn7hEnOSlKZd64",
      };
    },
    91970: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "-ap7mXqcxyhrxn5-5EaM8",
        MediaContainerMM: "_1XVJzaNLt0tgl6Pq5QI2tK",
        ScreenshotThumbnailRow: "COp9MkmgXCc5Y3ytJM70W",
        HilightGrid: "_28DkEkOjvTWfq0sU8m_i32",
        MainMediaCtn: "FATLceF4ncP8L8QnrQTXV",
        VideoThumbnail: "h0pphNa_Fdu4JUevL5V9y",
        ScreenshotDisplayCtn: "_20YpaGv3V_QArQyy15zAJc",
        MainCapsuleWithHover: "_30BxsjSFrUWCBKntWK9hPg",
        MainCapsule: "_2UuNsdHxhT9la27J_j3BFs",
        AppDetails: "ETHkFxrlPF1znTFXFtjtK",
        GameName: "udhKC-bUdlotRKphK3Fn2",
        ShortDesc: "_2e5PhNJqb68XISttHxdVF2",
        ThumbnialClickable: "_3B8X2c5pBF96hapgz03tC4",
        ThumbnailCtn: "rE40TQ86G7cjVETvUYZm3",
        videoPlaying: "_3D99vg3-OLr6XsvxrtzhZa",
        VideoPlayButton: "_2sJlIVAVWZ2I2iA6IO4pOv",
        VideoLargeContainer: "_3mzKCP4FLx7fUVeKrhZ1nn",
        VideoPopupContainers: "_2LqAoKcZgpOtpoj5_URVNJ",
        VideoLarge: "_3zPl6O67BYIiFOlq7FxlJP",
        BackgroundAnimation: "TqTKL7i3GSFlH_ZgPVf1z",
        "ItemFocusAnim-darkerGrey-nocolor": "cm_5koVmrBLuCZgPBCMie",
        "ItemFocusAnim-darkerGrey": "PnVMlqvX5SCAvSN6U3hb9",
        "ItemFocusAnim-darkGreySettings": "_3WN-nRn7q-FIwR4QBoVI_u",
        "ItemFocusAnim-darkGrey": "_3y6HrP9DK-Ttsri2UnKeJ4",
        "ItemFocusAnim-grey": "_3adXp5-v5skt9f-KA1WB_8",
        "ItemFocusAnim-translucent-white-10": "_1981I-jlGsaAi65IqAxEdm",
        "ItemFocusAnim-translucent-white-20": "_1ukTwVbofcJj1v0AVkiuc3",
        "ItemFocusAnimBorder-darkGrey": "_2LVjWAaAuOqf5tKQMJ99XC",
        "ItemFocusAnim-green": "_1VtcP5LWUyNvo0_5bYQYEx",
        focusAnimation: "n40ksCk7VHLZG8f1e517V",
        hoverAnimation: "YiXS6irpqMezE03xkO2Un",
      };
    },
    17041: (e, s, r) => {
      "use strict";
      r.d(s, { u: () => n });
      var t = r(7850),
        i = r(40414),
        a = r(3088);
      function n(e) {
        const { strImageToken: s, language: r, strAltText: n } = e,
          l = (0, i.z5)(s, r);
        return l
          ? "string" == typeof l
            ? (0, t.jsx)("img", { src: l, alt: n })
            : (0, t.jsx)(a.c, { rgSources: l, strAltText: n })
          : null;
      }
    },
    20433: (e, s, r) => {
      "use strict";
      r.d(s, { j: () => m, u: () => g });
      var t = r(7850),
        i = r(90626),
        a = r(45699),
        n = r(55963),
        l = r(60014),
        o = r(49411),
        c = r(61336),
        d = r(52541),
        u = r(8527);
      r(78327);
      function h(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: s,
            hoverClassName: r,
            fnGetIDOverride: a,
            fnHoverState: n,
            disableScreenshots: l,
            children: o,
          } = e,
          c = i.useRef(null),
          u = i.useCallback(
            (e) => {
              const r = h(s);
              r &&
                (n && n(!0),
                window.GameHover &&
                  (c.current &&
                    l &&
                    (c.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(a ? a() : c.current, e, "global_hover", {
                    type: r,
                    id: (0, d.G$)(s).id,
                    v6: 1,
                  })));
            },
            [n, a, l, s],
          ),
          m = i.useCallback(
            (e) => {
              h(s) &&
                (n && e.relatedTarget && n(!1),
                window.HideGameHover &&
                  window.HideGameHover(a ? a() : c.current, e, "global_hover"));
            },
            [s, n, a],
          );
        return (0, t.jsx)("div", {
          ref: c,
          className: r,
          onMouseEnter: u,
          onMouseLeave: m,
          onFocus: u,
          onBlur: m,
          children: o,
        });
      }
      function g(e) {
        const {
            id: s,
            strExtraParams: r,
            fnOnClickOverride: i,
            strOverrideURL: g,
          } = e,
          p = (0, l.n9)(),
          x = (0, o.w)(),
          f = (0, c.NT)(
            g ||
              (s && "creatorid" in s
                ? (0, n.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(s).id}${r ? `?${r}` : ""}`,
                    p,
                    x,
                  )
                : (0, n.It)(
                    `${u.TS.STORE_BASE_URL}${h(s)}/${((0, d.G$))(s).id}${r ? `?${r}` : ""}`,
                    p,
                    x,
                  )),
          );
        return (0, t.jsx)(m, {
          ...e,
          children: (0, t.jsx)(a.Ii, {
            className: e.className,
            href: i ? void 0 : f,
            target: u.TS.IN_CLIENT || i ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: i,
            children: e.children,
          }),
        });
      }
    },
    25698: (e, s, r) => {
      "use strict";
      r.d(s, { S: () => n });
      var t = r(7850),
        i = r(3946),
        a = r(90626);
      function n(e) {
        let { children: s } = e;
        const [r, n] = (0, a.useState)(0.8),
          [l, o] = (0, a.useState)(!0);
        return (0, t.jsx)(i.v, {
          playerVolume: r,
          setPlayerVolume: n,
          audioMuted: l,
          setAudioMuted: o,
          children: s,
        });
      }
    },
    24704: (e, s, r) => {
      "use strict";
      r.d(s, { T: () => V });
      var t = r(7850),
        i = r(48210),
        a = r(71381),
        n = r(20433),
        l = r(94191),
        o = r(78588),
        c = r(94636),
        d = r(90421),
        u = r(24267),
        h = r(12424),
        m = r(96006),
        g = r(8893),
        p = r(55672),
        x = r(5309),
        f = r(39777),
        v = r(14987),
        j = r(60014),
        _ = r(75844),
        b = r(90626),
        S = r(35380),
        C = r(55963),
        A = r(2921),
        N = r(18654),
        T = r.n(N),
        y = r(52541),
        B = r(90740),
        k = r(41399);
      function M(e) {
        const {
            id: s,
            bPurchaseOptionsExpanded: r,
            fnCollapseOptions: i,
            bPreferAssetWithoutOverride: a,
          } = e,
          { data: n } = (0, f.is)(s),
          l = (0, b.useRef)(null);
        if (!n) return null;
        const o = n.purchase_options;
        return o
          ? (0, t.jsx)(B.A, {
              nodeRef: l,
              in: r,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 2e3,
              classNames: {
                enterActive: T().Expanding,
                enterDone: T().Expanded,
                exit: T().Expanded,
                exitActive: T().Collapsing,
              },
              children: (0, t.jsxs)("div", {
                ref: l,
                className: T().BundleContentsCtnTransition,
                children: [
                  (0, t.jsx)("div", {
                    className: T().BundleContentsCtn,
                    children: o
                      .filter((e) => Boolean(e.packageid))
                      .map((e) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: T().BundleContentItem,
                            children: (0, t.jsx)(k.p, {
                              id: e.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: a,
                            }),
                          },
                          "purchaseitem_" + (0, y.ER)(s) + "_" + e.packageid,
                        ),
                      ),
                  }),
                  (0, t.jsx)("div", {
                    onClick: i,
                    className: T().BundleShowButton,
                    children: (0, t.jsx)("button", {
                      className: T().ShowContentsButton,
                      children: p.Z.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var P = r(94095),
        L = r(70300),
        E = r(73371),
        I = r.n(E),
        D = r(54492),
        O = r(52038);
      const V = (0, _.PA)((e) => {
        const { id: s, type: r } = e,
          _ = (0, S.zl)(s, r),
          {
            bHidePrice: N,
            bShowDemoButton: y,
            bPreferDemoStorePage: B,
            bShowPurchaseOptionsButton: k,
            bUseSubscriptionLayout: E,
            bPreferAssetWithoutOverride: V,
          } = e,
          [F, w] = b.useState(!1),
          W = () => w(!F),
          { data: R } = (0, f.U2)(_),
          { data: G } = (0, f.wl)(_),
          { data: H } = (0, f.by)(_),
          { data: J } = (0, f.xz)(_),
          U = (0, v._)(_),
          $ = (0, j.n9)();
        if (!R || !G)
          return (0, t.jsx)(a.h, {
            capsules_per_row: [1],
            is_expanded_display: !0,
          });
        const z = (0, C.L3)($),
          K = R.item_type == i.c6.qI;
        return (0, t.jsx)("div", {
          className: (0, O.A)(
            T().StoreSaleWidgetContainer,
            T().LibraryAssetExpandedDisplay,
            "LibraryAssetExpandedDisplay",
          ),
          children: (0, t.jsxs)(L.oj, {
            appid: K ? R.appid : void 0,
            children: [
              (0, t.jsxs)("div", {
                className: T().StoreSaleWidgetLibraryAssetExtendedTop,
                children: [
                  (0, t.jsx)("div", {
                    className: (0, O.A)(T().StoreSaleWidgetLeft),
                    children: (0, t.jsx)(n.u, {
                      id: _,
                      bPreferDemoStorePage: B,
                      children: (0, t.jsxs)("div", {
                        className: T().StoreSaleWidgetImage,
                        children: [
                          (0, t.jsx)(l.V, { appids: U }),
                          (0, t.jsx)(o.a, {
                            id: _,
                            imageType: "library",
                            bPreferAssetWithoutOverride: V,
                          }),
                          (0, t.jsx)(D.J, { id: _ }),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: T().StoreSaleWidgetCrossCenterRight,
                    children: [
                      K &&
                        (0, t.jsx)(c.E, {
                          id: _,
                          classOverride: (0, O.A)(
                            I().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: z,
                        }),
                      (0, t.jsxs)("div", {
                        className: T().StoreSaleWidgetContents,
                        children: [
                          (0, t.jsxs)("div", {
                            className: T().StoreSaleWidgetCenter,
                            children: [
                              G.short_description &&
                                G.short_description.length > 0 &&
                                (0, t.jsx)("div", {
                                  className: (0, O.A)(
                                    T().StoreSaleWidgetShortDesc,
                                    "StoreSaleWidgetShortDesc",
                                  ),
                                  children: G.short_description,
                                }),
                              (0, t.jsx)(d.n, {
                                rgTagIDs: J
                                  ? J.slice(0, 10).map((e) => e.tagid || 0)
                                  : [],
                                instanceNum: 0,
                                bNoStoreLinks: !1,
                              }),
                              (0, t.jsxs)("div", {
                                className: T().StoreMetaDataCtn,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: T().StoreSaleItemRelease,
                                    children: p.Z.LocalizeReact(
                                      "#Sale_ReleaseDate",
                                      (0, t.jsx)("span", {
                                        children: (0, x.CC)(H),
                                      }),
                                    ),
                                  }),
                                  G.developers &&
                                    G.developers.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: T().StoreSaleItemDev,
                                      children: [
                                        p.Z.Localize(
                                          "#CreatorHome_DevelopedBy",
                                        ),
                                        (0, t.jsx)("span", {
                                          children: G.developers[0].name,
                                        }),
                                      ],
                                    }),
                                  G.publishers &&
                                    G.publishers.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: T().StoreSaleItemDev,
                                      children: [
                                        p.Z.Localize(
                                          "#CreatorHome_PublishedBy",
                                        ),
                                        (0, t.jsx)("span", {
                                          children: G.publishers[0].name,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: T().StoreSaleLibraryAssetWidgetRight,
                            children: (0, t.jsx)(A.Yg, {
                              id: _,
                              bPopOutTrailerPlayback: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: T().StoreSaleItemReview,
                        children: (0, t.jsx)(u.J, { id: _ }),
                      }),
                      (0, t.jsx)("div", {
                        className: T().CapsuleBottomBar,
                        children:
                          E && K
                            ? (0, t.jsx)(h.E, { appid: R.appid, bIsMuted: !1 })
                            : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(m.Q, { id: _ }),
                                  (0, t.jsx)(P.w, {
                                    id: _,
                                    bShowDemoButton: y,
                                    bHidePrice: N,
                                    bShowPurchaseOptionsButton: k,
                                    fnOnPurchaseOptionsClick: W,
                                    bHideWishlistButton: R.is_coming_soon,
                                  }),
                                ],
                              }),
                      }),
                      (0, t.jsxs)("div", {
                        className: T().StoreSaleWidgetBgTint,
                        children: [
                          (0, t.jsx)(g.G, {
                            id: _,
                            bPreferAssetWithoutOverride: V,
                          }),
                          (0, t.jsx)(D.J, { id: _ }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(M, {
                id: _,
                bPurchaseOptionsExpanded: F,
                fnCollapseOptions: W,
                bPreferAssetWithoutOverride: V,
              }),
            ],
          }),
        });
      });
    },
    2921: (e, s, r) => {
      "use strict";
      r.d(s, { PE: () => V, qP: () => I, Yg: () => E });
      var t = r(7850),
        i = r(76217),
        a = r(86927),
        n = r(42834),
        l = r(52471),
        o = r(39777),
        c = r(52541),
        d = r(38535),
        u = r(90626),
        h = r(92834),
        m = r(1078),
        g = r(12155),
        p = r(52038),
        x = r(78327),
        f = r(51706),
        v = r(22797),
        j = r(44433),
        _ = r(91970),
        b = r.n(_),
        S = r(18654),
        C = r.n(S),
        A = r(32754),
        N = r(61859),
        T = r(30470),
        y = r(24484);
      function B(e) {
        const { id: s } = e,
          { data: r } = (0, o.J$)(s),
          i = (0, u.useMemo)(() => {
            if (!r) return [];
            const e =
              r.categories?.supported_player_categoryids?.slice(0, 1) || [];
            return (
              r.categories?.feature_categoryids?.forEach((s) => e.push(s)),
              r.categories?.controller_categoryids?.forEach((s) => e.push(s)),
              r.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((s) => e.push(s)),
              e
            );
          }, [r]);
        return i && 0 != i.length
          ? (0, t.jsx)("div", {
              className: (0, p.A)(C().SaleTagBlockCtn, "SaleTagBlockCtn"),
              children: Boolean(i?.length > 0)
                ? (0, t.jsx)("div", {
                    className: (0, p.A)(C().TagBox, C().Categories),
                    children: i.map((e) =>
                      (0, t.jsx)(M, { categoryID: e }, "cat_" + e),
                    ),
                  })
                : (0, t.jsx)("div", { children: (0, N.we)("#Broadcast_None") }),
            })
          : null;
      }
      class k {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, y.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return k.g_Self || (k.g_Self = new k()), k.g_Self;
        }
      }
      function M(e) {
        const { categoryID: s } = e,
          r = k.Get().m_rgCategories.find((e) => e.categoryid == s);
        return r
          ? (0, t.jsx)("div", {
              className: C().Category,
              children: (0, t.jsx)(A.he, {
                toolTipContent: r.name,
                children: (0, t.jsx)("div", {
                  className: C().CategoryIcon,
                  style: {
                    background: `url(${T.TS.STORE_CDN_URL}/public/images/${r.image_path}) no-repeat center center/cover`,
                  },
                }),
              }),
            })
          : null;
      }
      var P = r(90421),
        L = r(54054);
      function E(e) {
        const { id: s, bPopOutTrailerPlayback: r } = e,
          { data: i } = (0, o.Yo)(s),
          { data: a } = (0, o.j4)(s),
          { data: n } = (0, o.J$)(s),
          [l, c] = (0, u.useState)(!1),
          [h, m] = (0, u.useState)(!1),
          g = (0, d.dy)(),
          x = i?.highlights?.filter((e) => !g || e.all_ages),
          f = x && x?.length > 0 ? x[0] : void 0,
          j = u.useCallback(() => {
            f && (r ? m(!0) : c((e) => !e));
          }, [f, r]);
        if (!n)
          return (0, t.jsx)("div", {
            className: (0, p.A)(b().HilightGrid, b().MediaContainer),
            children: (0, t.jsx)(v.t, { size: "medium" }),
          });
        const _ = f
          ? (0, t.jsx)(F, { trailer: f, bPlayVideo: l, fnTogglePlayTrailer: j })
          : null;
        return f ||
          (a && a.all_ages_screenshots && a.all_ages_screenshots.length > 0)
          ? (0, t.jsxs)("div", {
              className: (0, p.A)(b().HilightGrid, b().MediaContainer),
              children: [
                (0, t.jsx)(D, {
                  elFeaturedInCenter: _,
                  storeItemScreenshots: a,
                  trailer: f,
                  id: s,
                  name: n.name || "",
                }),
                Boolean(r)
                  ? (0, t.jsx)(V, {
                      id: s,
                      bShowModal: h,
                      hideModal: () => m(!1),
                    })
                  : (0, t.jsx)(O, {
                      name: n.name || "",
                      trailer: f,
                      bPlayVideo: l,
                      fnTogglePlayTrailer: j,
                      bControls: !0,
                    }),
              ],
            })
          : null;
      }
      function I(e) {
        const {
            id: s,
            fnOnClickButton: r,
            bLowBandwidthMode: i,
            bUseAssetWithoutOverride: a,
          } = e,
          { data: n } = (0, o.j4)(s),
          { data: c } = (0, o.J$)(s),
          { data: d } = (0, o.Yo)(s),
          u = (0, l.kB)(s);
        return void 0 !== !d && n && c
          ? (0, t.jsx)("div", {
              className: (0, p.A)(b().HilightGrid, b().MediaContainerMM),
              children: (0, t.jsx)(D, {
                id: s,
                elFeaturedInCenter: (0, t.jsx)(w, {
                  id: s,
                  bUseAssetWithoutOverride: Boolean(a),
                  fnOnClickButton: r,
                }),
                trailer: u && u.length > 0 ? u[0] : void 0,
                storeItemScreenshots: n,
                featureElementclassName: b().MainImage,
                bUseTrailerAsFirstThumb: !i,
                bNoScreenShotModals: !0,
                name: c.name || "",
              }),
            })
          : (0, t.jsx)("div", {
              className: (0, p.A)(b().HilightGrid, b().MediaContainerMM),
              children: (0, t.jsx)(v.t, { size: "medium" }),
            });
      }
      function D(e) {
        const {
            elFeaturedInCenter: s,
            id: r,
            name: i,
            trailer: a,
            storeItemScreenshots: l,
            featureElementclassName: o,
            bUseTrailerAsFirstThumb: h,
            bNoScreenShotModals: g,
          } = e,
          [x, f] = u.useState(void 0),
          [v, j] = (0, m.XC)(),
          _ = (0, d.dy)(),
          S = (0, u.useRef)(null),
          [C, A] = (0, u.useState)(0);
        if (!r) return null;
        const N = s || (void 0 !== x && -1 !== x) ? x : 0,
          T = new Array(),
          y = new Array();
        h &&
          a &&
          (T.push(
            (0, t.jsx)(
              F,
              {
                trailer: a,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => f(0),
                onMouseLeave: () => {
                  const e = S.current;
                  e && A(e.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          y.push(
            (0, t.jsx)(
              O,
              {
                ref: S,
                name: i,
                trailer: a,
                bControls: !1,
                bPlayVideo: !0,
                startTime: C,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const B = (
          _ ? l?.all_ages_screenshots : l?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (B?.forEach((e, r) => {
            if ((s || r > 0) && T.length < 3) {
              const s = (0, n.bu)(e, "thumb"),
                i = (0, n.bu)(e, "600x338"),
                a = T.length;
              T.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: (0, p.A)({
                      [b().ThumbnailCtn]: !0,
                      [b().ThumbnialClickable]: !g,
                    }),
                    children: (0, t.jsx)("img", {
                      src: s,
                      onClick: g
                        ? void 0
                        : () => {
                            const e = [...(B || [])];
                            if (e.length > 0) {
                              for (let s = 0; s < r; ++s) {
                                const s = e.shift();
                                s && e.push(s);
                              }
                              v(e.map((e) => (0, n.bu)(e, "full")));
                            }
                          },
                      onMouseEnter: () => f(a),
                    }),
                  },
                  r + "_small_" + s,
                ),
              ),
                y.push(
                  (0, t.jsx)(
                    "div",
                    {
                      className: b().ScreenshotDisplayCtn,
                      children: (0, t.jsx)("img", { src: i }),
                    },
                    r + "_big_" + s,
                  ),
                );
            }
          }),
          !(s || (y && 0 != y.length)))
        )
          return null;
        const k = T.slice(0, 3),
          M = Array.from({ length: Math.max(0, 3 - k.length) });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            j,
            (0, t.jsx)("div", {
              className: o || b().MainMediaCtn,
              children: Boolean(s && (-1 === N || void 0 === N))
                ? (0, t.jsx)(t.Fragment, { children: s })
                : (0, t.jsx)(t.Fragment, { children: void 0 !== N && y[N] }),
            }),
            Boolean(k.length > 0) &&
              (0, t.jsxs)("div", {
                className: b().ScreenshotThumbnailRow,
                onMouseLeave: () => f(-1),
                children: [
                  k,
                  M.map((e, s) =>
                    (0, t.jsx)(
                      "div",
                      { className: b().ThumbnailCtn },
                      `app_${(0, c.ER)(r)}_${s}`,
                    ),
                  ),
                ],
              }),
          ],
        });
      }
      function O(e) {
        const {
          ref: s,
          name: r,
          trailer: i,
          bControls: a,
          bPlayVideo: n,
          fnTogglePlayTrailer: o,
          startTime: c,
        } = e;
        if (
          ((0, u.useEffect)(() => {
            const e = s?.current;
            if (null != c && c > 0 && e) {
              const s = () => {
                e.currentTime = c || 0;
              };
              return (
                e.addEventListener("loadedmetadata", s),
                () => {
                  e.removeEventListener("loadedmetadata", s);
                }
              );
            }
          }, [s, c]),
          !i)
        )
          return null;
        let d = (0, p.A)(b().VideoLargeContainer, n && b().videoPlaying);
        return (0, t.jsxs)("div", {
          className: d,
          onClick: o,
          children: [
            (0, t.jsx)(L.hj, {
              name: r,
              trailerCategory: i.trailer_category,
              trailerDisplay: L.g,
              mouseOver: !1,
            }),
            Boolean(n && i.microtrailer) &&
              (0, t.jsx)("video", {
                className: b().VideoLarge,
                ref: s,
                controls: a,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != c && c > 0 ? void 0 : i.screenshot_full,
                children: i.microtrailer?.map((e) =>
                  x.TS.IN_CLIENT && "video/mp4" == e.type
                    ? null
                    : (0, t.jsx)(
                        "source",
                        { src: (0, l.M4)(i, e.filename || ""), type: e.type },
                        e.filename,
                      ),
                ),
              }),
            a &&
              (0, t.jsx)("div", {
                onClick: o,
                children: (0, t.jsx)(g.sED, {}),
              }),
          ],
        });
      }
      function V(e) {
        const { id: s, bShowModal: r, trailerBaseID: i, hideModal: a } = e,
          { data: n } = (0, o.J$)(s),
          c = (0, l.kB)(s),
          d = (0, u.useMemo)(() => {
            if (c && 0 != c.length) {
              if (i) {
                const e = c.find((e) => e.trailer_base_id == i);
                if (e) return e;
              }
              return c[0];
            }
          }, [c, i]),
          m = u.useId(),
          g = u.useId();
        if (!d || !d.adaptive_trailers) return null;
        const { rgDashTrailers: p, rgHlsTrailers: x } = (0, l.hg)(d);
        if (0 == p?.length) return null;
        let v = (0, l.Wv)(d);
        return (0, t.jsx)(f.EN, {
          active: r,
          children: (0, t.jsxs)(f.eV, {
            "aria-labelledby": (0, h.q)(m, g),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: a,
            children: [
              (0, t.jsx)("div", {
                className: b().VideoPopupContainers,
                children: (0, t.jsx)(j.P, {
                  dashManifests: p || [],
                  hlsManifest: (x.length > 0 && x?.[0]) || "",
                  screenshot: (0, l.hl)(d),
                  altText: d.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: v,
                }),
              }),
              (0, t.jsx)("div", {
                id: m,
                style: { display: "none" },
                children: n?.name || "",
              }),
              (0, t.jsx)("div", {
                id: g,
                style: { display: "none" },
                children: d.trailer_name,
              }),
            ],
          }),
        });
      }
      function F(e) {
        const {
          trailer: s,
          fnTogglePlayTrailer: r,
          bPlayVideo: i,
          onMouseEnter: a,
          onMouseLeave: n,
        } = e;
        return (0, t.jsxs)("div", {
          className: (0, p.A)({
            [b().VideoThumbnail]: !i,
            [b().videoPlaying]: i,
            [b().ThumbnailCtn]: !0,
          }),
          onClick: r,
          onMouseEnter: a,
          onMouseLeave: n,
          children: [
            (0, t.jsx)("img", { src: (0, l.hl)(s) }),
            (0, t.jsx)("div", {
              className: b().VideoPlayButton,
              children: (0, t.jsx)(g.jGG, {}),
            }),
          ],
        });
      }
      function w(e) {
        const { id: s, fnOnClickButton: r, bUseAssetWithoutOverride: l } = e,
          [c, d] = (0, a.OP)(),
          { data: u } = (0, o.lv)(s, l),
          { data: h } = (0, o.J$)(s),
          { data: m } = (0, o.wl)(s),
          { data: g } = (0, o.xz)(s);
        if (!u || !m || !h) return null;
        const x = (0, n.b0)(u, "main_capsule");
        return (0, t.jsxs)(i.Z, {
          focusable: !0,
          noFocusRing: !0,
          className: b().MainCapsuleWithHover,
          ...d,
          onActivate: r,
          children: [
            (0, t.jsx)("img", { className: b().MainCapsule, src: x }),
            (0, t.jsxs)("div", {
              className: b().AppDetails,
              children: [
                (0, t.jsx)("div", {
                  className: (0, p.A)(b().GameName),
                  children: h.name || "",
                }),
                (0, t.jsxs)("div", {
                  className: b().ShortDesc,
                  children: [m.short_description, " "],
                }),
                (0, t.jsx)(P.n, {
                  rgTagIDs: g ? g.slice(0, 10).map((e) => e.tagid || 0) : [],
                  instanceNum: 0,
                  bLargeText: !0,
                  bHideTitle: !0,
                  bNoStoreLinks: !0,
                }),
                (0, t.jsx)(B, { id: s }),
              ],
            }),
          ],
        });
      }
    },
    3088: (e, s, r) => {
      "use strict";
      r.d(s, { c: () => a });
      var t = r(7850),
        i = r(90626);
      function a(e) {
        const {
            rgSources: s,
            onIncrementalError: r,
            onError: a,
            strAltText: n,
            ref: l,
            ...o
          } = e,
          c = i.useRef(null),
          [d, u] = i.useState(0),
          [h, m] = i.useState(0);
        i.useImperativeHandle(
          l,
          () => ({ imgRef: c, nSourceIndex: d, nSourceLength: s.length }),
          [c, d, s],
        );
        const g = i.useMemo(() => JSON.stringify(s), [s]);
        i.useEffect(() => {
          u(0), m((e) => e + 1);
        }, [g]);
        const p = i.useMemo(() => {
            let r = "";
            return (
              s && s.length > d && (r = s[d]),
              r ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  d,
                ),
                (r =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              r
            );
          }, [s, d, e]),
          x = i.useCallback(
            (e) => {
              r?.(e, s[d], d);
              const t = d + 1;
              t >= s.length && a && a(e), t < s.length && u(t);
            },
            [d, a, r, s],
          );
        return (0, t.jsx)(
          "img",
          { ref: c, ...o, src: p, onError: x, alt: n },
          h,
        );
      }
    },
    108: (e, s, r) => {
      "use strict";
      r.r(s), r.d(s, { default: () => D });
      var t = r(7850),
        i = r(17041),
        a = r(22837),
        n = r(45699),
        l = r(8527),
        o = r(62151),
        c = r(41399),
        d = r(10224),
        u = r(78327),
        h = r(24704);
      function m(e) {
        return (0, u.Qn)()
          ? (0, t.jsx)(c.p, { ...e })
          : (0, d.c5)()
            ? (0, t.jsx)(c.p, { ...e, bShowReviewSummary: !0 })
            : (0, t.jsx)(h.T, { ...e });
      }
      var g = r(42834),
        p = r(52471),
        x = r(39777),
        f = r(60014),
        v = r(44433),
        j = r(90626),
        _ = r(35380),
        b = r(84811),
        S = r(25698),
        C = r(32630),
        A = r(52038),
        N = r(37882),
        T = r.n(N);
      function y(e) {
        const { appid: s, strUrlOverride: r } = e,
          i = (0, _.$5)(s),
          { data: a } = (0, x.J$)(i);
        return (
          (0, j.useEffect)(() => {
            if (a) {
              const e = `${l.TS.STORE_BASE_URL}${a.store_url_path}`.replace(
                "/app/",
                r ?? "/verified/",
              );
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [a, r]),
          a && i
            ? (0, t.jsx)(C.Ay, {
                method: "verifiedprogram",
                children: (0, t.jsx)(b.tH, {
                  children: (0, t.jsx)(k, { id: i }),
                }),
              })
            : null
        );
      }
      function B(e) {
        const { id: s } = e,
          { data: r } = (0, x.J$)(s),
          i = `${l.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: T().Headline,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckTitle",
                r?.name,
                (0, t.jsxs)("span", {
                  className: T().Verified,
                  children: [
                    (0, t.jsx)("img", {
                      src: i,
                      alt: o.F5.Localize("#VerifiedProgram_DeckAlt"),
                    }),
                    o.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                  ],
                }),
              ),
            }),
            (0, t.jsx)("div", {
              className: T().Subtitle,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckSubTitle",
                (0, t.jsx)(n.Ii, {
                  className: T().Link,
                  href: `${l.TS.STORE_BASE_URL}greatondeck`,
                  children: o.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                }),
              ),
            }),
          ],
        });
      }
      function k(e) {
        const { id: s } = e;
        return (0, t.jsxs)("div", {
          className: T().Ctn,
          children: [
            (0, t.jsx)(M, { id: s }),
            (0, t.jsxs)("div", {
              className: (0, A.A)("page_content"),
              children: [
                (0, t.jsx)(B, { id: s }),
                (0, t.jsx)(E, { id: s }),
                (0, t.jsx)(P, { id: s }),
                (0, t.jsx)(L, {}),
              ],
            }),
          ],
        });
      }
      function M(e) {
        const { id: s } = e,
          { data: r } = (0, x.lv)(s);
        if (!r) return null;
        const i =
          (0, g.b0)(r, "library_hero_2x") ?? (0, g.b0)(r, "library_hero");
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: T().BackgroundImageCtn,
              children: (0, t.jsx)("img", { src: i, alt: "" }),
            }),
            (0, t.jsx)("div", {
              className: T().BackgroundImageBlurCtn,
              children: (0, t.jsx)("img", { src: i, alt: "" }),
            }),
          ],
        });
      }
      function P(e) {
        const { id: s } = e;
        return (0, t.jsx)("div", {
          className: T().CapsuleWrapper,
          children: (0, t.jsx)(m, {
            id: "appid" in s ? s.appid : 0,
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function L(e) {
        const s = (0, f.aL)(
          `${l.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
          "banner",
        );
        return (0, t.jsx)(n.Ii, {
          href: s,
          className: (0, A.A)(T().HardwareBannerCtn),
          children: (0, t.jsx)(I, {}),
        });
      }
      function E(e) {
        const { id: s } = e,
          { data: r } = (0, x.J$)(s),
          i = (0, p.TH)(s);
        if (!i) return null;
        const a = `${l.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
          { rgDashTrailers: n, rgHlsTrailers: c } = (0, p.hg)(i);
        return (0, t.jsxs)("div", {
          className: T().DeviceFullWidthShadow,
          children: [
            (0, t.jsxs)("div", {
              className: (0, A.A)(T().DeviceWrapper),
              children: [
                (0, t.jsx)(S.S, {
                  children: (0, t.jsx)("div", {
                    className: T().TrailerCtn,
                    children: (0, t.jsx)(v.P, {
                      dashManifests: n,
                      hlsManifest: c[0],
                      screenshot:
                        i.screenshot_full ?? i.screenshot_medium ?? "",
                      altText: r?.name ?? "",
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                }),
                (0, t.jsx)("img", {
                  src: a,
                  alt: o.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: T().VideoDisclaimer,
              children: o.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
            }),
          ],
        });
      }
      function I(e) {
        const s = (0, d.zI)(),
          r = (0, a.sfN)(l.TS.LANGUAGE);
        return (0, t.jsx)(i.u, {
          language: r,
          strAltText: o.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
          strImageToken: s
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
      function D(e) {
        const {
          match: {
            params: { appid: s },
          },
        } = e;
        return (0, t.jsx)(y, { appid: Number.parseInt(s) });
      }
    },
  },
]);
