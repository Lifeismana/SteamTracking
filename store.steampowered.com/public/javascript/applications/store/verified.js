/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [86991],
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
    17041: (e, r, s) => {
      "use strict";
      s.d(r, { u: () => n });
      var t = s(7850),
        i = s(17267),
        a = s(3088);
      function n(e) {
        const { strImageToken: r, language: s, strAltText: n } = e,
          l = (0, i.z5)(r, s);
        return l
          ? "string" == typeof l
            ? (0, t.jsx)("img", { src: l, alt: n })
            : (0, t.jsx)(a.c, { rgSources: l, strAltText: n })
          : null;
      }
    },
    20433: (e, r, s) => {
      "use strict";
      s.d(r, { j: () => m, u: () => p });
      var t = s(7850),
        i = s(90626),
        a = s(45699),
        n = s(55963),
        l = s(60014),
        o = s(49411),
        d = s(61336),
        c = s(52541),
        u = s(66418);
      s(78327);
      function h(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: r,
            hoverClassName: s,
            fnGetIDOverride: a,
            fnHoverState: n,
            disableScreenshots: l,
            children: o,
          } = e,
          d = i.useRef(null),
          u = i.useCallback(
            (e) => {
              const s = h(r);
              s &&
                (n && n(!0),
                window.GameHover &&
                  (d.current &&
                    l &&
                    (d.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(a ? a() : d.current, e, "global_hover", {
                    type: s,
                    id: (0, c.G$)(r).id,
                    v6: 1,
                  })));
            },
            [n, a, l, r],
          ),
          m = i.useCallback(
            (e) => {
              h(r) &&
                (n && e.relatedTarget && n(!1),
                window.HideGameHover &&
                  window.HideGameHover(a ? a() : d.current, e, "global_hover"));
            },
            [r, n, a],
          );
        return (0, t.jsx)("div", {
          ref: d,
          className: s,
          onMouseEnter: u,
          onMouseLeave: m,
          onFocus: u,
          onBlur: m,
          children: o,
        });
      }
      function p(e) {
        const {
            id: r,
            strExtraParams: s,
            fnOnClickOverride: i,
            strOverrideURL: p,
          } = e,
          f = (0, l.n9)(),
          x = (0, o.w)(),
          S = (0, d.NT)(
            p ||
              (r && "creatorid" in r
                ? (0, n.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, c.G$))(r).id}${s ? `?${s}` : ""}`,
                    f,
                    x,
                  )
                : (0, n.It)(
                    `${u.TS.STORE_BASE_URL}${h(r)}/${((0, c.G$))(r).id}${s ? `?${s}` : ""}`,
                    f,
                    x,
                  )),
          );
        return (0, t.jsx)(m, {
          ...e,
          children: (0, t.jsx)(a.Ii, {
            className: e.className,
            href: i ? void 0 : S,
            target: u.TS.IN_CLIENT || i ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: i,
            children: e.children,
          }),
        });
      }
    },
    25698: (e, r, s) => {
      "use strict";
      s.d(r, { S: () => c });
      var t = s(7850),
        i = s(3946),
        a = s(90626),
        n = s(91933);
      const l = {
          name: "trailerPrefs",
          options: { path: "/", secure: !0, maxAge: 2592e6 },
          preferenceControls: { isTechnicallyNecessary: !0 },
        },
        o = { flVolume: 0.8, bMuted: !0 };
      function d(e) {
        !(function (e) {
          return e.flVolume === o.flVolume && e.bMuted === o.bMuted;
        })(e) && 0 != Object.keys(e).length
          ? (0, n.eV)(l, JSON.stringify(e))
          : (0, n.Y1)(l);
      }
      function c(e) {
        let { children: r } = e;
        const [s, c] = (0, a.useState)(() =>
          (function () {
            try {
              const e = (0, n.j_)(l);
              if (!e) return o;
              const r = JSON.parse(e);
              return {
                flVolume:
                  "number" == typeof r.flVolume ? r.flVolume : o.flVolume,
                bMuted: "boolean" == typeof r.bMuted ? r.bMuted : o.bMuted,
              };
            } catch (e) {
              return o;
            }
          })(),
        );
        return (
          (0, a.useEffect)(() => {
            d(s);
          }, [s]),
          (0, t.jsx)(i.v, {
            playerVolume: s.flVolume,
            setPlayerVolume: (e) => c((r) => ({ ...r, flVolume: e })),
            audioMuted: s.bMuted,
            setAudioMuted: (e) => c((r) => ({ ...r, bMuted: e })),
            children: r,
          })
        );
      }
    },
    24704: (e, r, s) => {
      "use strict";
      s.d(r, { T: () => I });
      var t = s(7850),
        i = s(95578),
        a = s(71381),
        n = s(20433),
        l = s(94191),
        o = s(78588),
        d = s(94636),
        c = s(90421),
        u = s(24267),
        h = s(12424),
        m = s(96006),
        p = s(8893),
        f = s(78686),
        x = s(5309),
        S = s(39777),
        g = s(14987),
        j = s(60014),
        b = s(75844),
        v = s(90626),
        _ = s(76682),
        A = s(55963),
        N = s(2921),
        C = s(18654),
        T = s.n(C),
        D = s(52541),
        L = s(90740),
        E = s(41399);
      function B(e) {
        const {
            id: r,
            bPurchaseOptionsExpanded: s,
            fnCollapseOptions: i,
            bPreferAssetWithoutOverride: a,
          } = e,
          { data: n } = (0, S.is)(r),
          l = (0, v.useRef)(null);
        if (!n) return null;
        const o = n.purchase_options;
        return o
          ? (0, t.jsx)(L.A, {
              nodeRef: l,
              in: s,
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
                            children: (0, t.jsx)(E.p, {
                              id: e.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: a,
                            }),
                          },
                          "purchaseitem_" + (0, D.ER)(r) + "_" + e.packageid,
                        ),
                      ),
                  }),
                  (0, t.jsx)("div", {
                    onClick: i,
                    className: T().BundleShowButton,
                    children: (0, t.jsx)("button", {
                      className: T().ShowContentsButton,
                      children: f.Z.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var y = s(94095),
        k = s(70300),
        O = s(73371),
        w = s.n(O),
        P = s(54492),
        R = s(52038);
      const I = (0, b.PA)((e) => {
        const { id: r, type: s } = e,
          b = (0, _.zl)(r, s),
          {
            bHidePrice: C,
            bShowDemoButton: D,
            bPreferDemoStorePage: L,
            bShowPurchaseOptionsButton: E,
            bUseSubscriptionLayout: O,
            bPreferAssetWithoutOverride: I,
          } = e,
          [W, V] = v.useState(!1),
          M = () => V(!W),
          { data: H } = (0, S.U2)(b),
          { data: $ } = (0, S.wl)(b),
          { data: F } = (0, S.by)(b),
          { data: G } = (0, S.xz)(b),
          J = (0, g._Z)(b),
          z = (0, j.n9)();
        if (!H || !$)
          return (0, t.jsx)(a.h, {
            capsules_per_row: [1],
            is_expanded_display: !0,
          });
        const U = (0, A.L3)(z),
          Q = H.item_type == i.c6.qI;
        return (0, t.jsx)("div", {
          className: (0, R.A)(
            T().StoreSaleWidgetContainer,
            T().LibraryAssetExpandedDisplay,
            "LibraryAssetExpandedDisplay",
          ),
          children: (0, t.jsxs)(k.oj, {
            appid: Q ? H.appid : void 0,
            children: [
              (0, t.jsxs)("div", {
                className: T().StoreSaleWidgetLibraryAssetExtendedTop,
                children: [
                  (0, t.jsx)("div", {
                    className: (0, R.A)(T().StoreSaleWidgetLeft),
                    children: (0, t.jsx)(n.u, {
                      id: b,
                      bPreferDemoStorePage: L,
                      children: (0, t.jsxs)("div", {
                        className: T().StoreSaleWidgetImage,
                        children: [
                          (0, t.jsx)(l.V, { appids: J }),
                          (0, t.jsx)(o.a, {
                            id: b,
                            imageType: "library",
                            bPreferAssetWithoutOverride: I,
                          }),
                          (0, t.jsx)(P.J, { id: b }),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: T().StoreSaleWidgetCrossCenterRight,
                    children: [
                      Q &&
                        (0, t.jsx)(d.E, {
                          id: b,
                          classOverride: (0, R.A)(
                            w().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: U,
                        }),
                      (0, t.jsxs)("div", {
                        className: T().StoreSaleWidgetContents,
                        children: [
                          (0, t.jsxs)("div", {
                            className: T().StoreSaleWidgetCenter,
                            children: [
                              $.short_description &&
                                $.short_description.length > 0 &&
                                (0, t.jsx)("div", {
                                  className: (0, R.A)(
                                    T().StoreSaleWidgetShortDesc,
                                    "StoreSaleWidgetShortDesc",
                                  ),
                                  children: $.short_description,
                                }),
                              (0, t.jsx)(c.n, {
                                rgTagIDs: G
                                  ? G.slice(0, 10).map((e) => e.tagid || 0)
                                  : [],
                                instanceNum: 0,
                                bNoStoreLinks: !1,
                              }),
                              (0, t.jsxs)("div", {
                                className: T().StoreMetaDataCtn,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: T().StoreSaleItemRelease,
                                    children: f.Z.LocalizeReact(
                                      "#Sale_ReleaseDate",
                                      (0, t.jsx)("span", {
                                        children: (0, x.CC)(F),
                                      }),
                                    ),
                                  }),
                                  $.developers &&
                                    $.developers.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: T().StoreSaleItemDev,
                                      children: [
                                        f.Z.Localize(
                                          "#CreatorHome_DevelopedBy",
                                        ),
                                        (0, t.jsx)("span", {
                                          children: $.developers[0].name,
                                        }),
                                      ],
                                    }),
                                  $.publishers &&
                                    $.publishers.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: T().StoreSaleItemDev,
                                      children: [
                                        f.Z.Localize(
                                          "#CreatorHome_PublishedBy",
                                        ),
                                        (0, t.jsx)("span", {
                                          children: $.publishers[0].name,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: T().StoreSaleLibraryAssetWidgetRight,
                            children: (0, t.jsx)(N.Yg, {
                              id: b,
                              bPopOutTrailerPlayback: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: T().StoreSaleItemReview,
                        children: (0, t.jsx)(u.J, { id: b }),
                      }),
                      (0, t.jsx)("div", {
                        className: T().CapsuleBottomBar,
                        children:
                          O && Q
                            ? (0, t.jsx)(h.E, { appid: H.appid, bIsMuted: !1 })
                            : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(m.Q, { id: b }),
                                  (0, t.jsx)(y.w, {
                                    id: b,
                                    bShowDemoButton: D,
                                    bHidePrice: C,
                                    bShowPurchaseOptionsButton: E,
                                    fnOnPurchaseOptionsClick: M,
                                    bHideWishlistButton: H.is_coming_soon,
                                  }),
                                ],
                              }),
                      }),
                      (0, t.jsxs)("div", {
                        className: T().StoreSaleWidgetBgTint,
                        children: [
                          (0, t.jsx)(p.G, {
                            id: b,
                            bPreferAssetWithoutOverride: I,
                          }),
                          (0, t.jsx)(P.J, { id: b }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(B, {
                id: b,
                bPurchaseOptionsExpanded: W,
                fnCollapseOptions: M,
                bPreferAssetWithoutOverride: I,
              }),
            ],
          }),
        });
      });
    },
    3088: (e, r, s) => {
      "use strict";
      s.d(r, { c: () => a });
      var t = s(7850),
        i = s(90626);
      function a(e) {
        const {
            rgSources: r,
            onIncrementalError: s,
            onError: a,
            strAltText: n,
            ref: l,
            ...o
          } = e,
          d = i.useRef(null),
          [c, u] = i.useState(0),
          [h, m] = i.useState(0);
        i.useImperativeHandle(
          l,
          () => ({ imgRef: d, nSourceIndex: c, nSourceLength: r.length }),
          [d, c, r],
        );
        const p = i.useMemo(() => JSON.stringify(r), [r]);
        i.useEffect(() => {
          u(0), m((e) => e + 1);
        }, [p]);
        const f = i.useMemo(() => {
            let s = "";
            return (
              r && r.length > c && (s = r[c]),
              s ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  c,
                ),
                (s =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              s
            );
          }, [r, c, e]),
          x = i.useCallback(
            (e) => {
              s?.(e, r[c], c);
              const t = c + 1;
              t >= r.length && a && a(e), t < r.length && u(t);
            },
            [c, a, s, r],
          );
        return (0, t.jsx)(
          "img",
          { ref: d, ...o, src: f, onError: x, alt: n },
          h,
        );
      }
    },
    108: (e, r, s) => {
      "use strict";
      s.r(r), s.d(r, { default: () => P });
      var t = s(7850),
        i = s(17041),
        a = s(22837),
        n = s(45699),
        l = s(66418),
        o = s(67936),
        d = s(41399),
        c = s(10224),
        u = s(78327),
        h = s(24704);
      function m(e) {
        return (0, u.Qn)()
          ? (0, t.jsx)(d.p, { ...e })
          : (0, c.c5)()
            ? (0, t.jsx)(d.p, { ...e, bShowReviewSummary: !0 })
            : (0, t.jsx)(h.T, { ...e });
      }
      var p = s(25698),
        f = s(42834),
        x = s(52471),
        S = s(14987),
        g = s(39777),
        j = s(60014),
        b = s(44433),
        v = s(90626),
        _ = s(84811),
        A = s(32630),
        N = s(52038),
        C = s(37882),
        T = s.n(C);
      function D(e) {
        const { appid: r, strUrlOverride: s } = e,
          i = (0, S.$5)(r),
          { data: a } = (0, g.J$)(i);
        return (
          (0, v.useEffect)(() => {
            if (a) {
              const e = `${l.TS.STORE_BASE_URL}${a.store_url_path}`.replace(
                "/app/",
                s ?? "/verified/",
              );
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [a, s]),
          a && i
            ? (0, t.jsx)(A.Ay, {
                method: "verifiedprogram",
                children: (0, t.jsx)(_.tH, {
                  children: (0, t.jsx)(E, { id: i }),
                }),
              })
            : null
        );
      }
      function L(e) {
        const { id: r } = e,
          { data: s } = (0, g.J$)(r),
          i = `${l.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: T().Headline,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckTitle",
                s?.name,
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
      function E(e) {
        const { id: r } = e;
        return (0, t.jsxs)("div", {
          className: T().Ctn,
          children: [
            (0, t.jsx)(B, { id: r }),
            (0, t.jsxs)("div", {
              className: (0, N.A)("page_content"),
              children: [
                (0, t.jsx)(L, { id: r }),
                (0, t.jsx)(O, { id: r }),
                (0, t.jsx)(y, { id: r }),
                (0, t.jsx)(k, {}),
              ],
            }),
          ],
        });
      }
      function B(e) {
        const { id: r } = e,
          { data: s } = (0, g.lv)(r);
        if (!s) return null;
        const i =
          (0, f.b0)(s, "library_hero_2x") ?? (0, f.b0)(s, "library_hero");
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
      function y(e) {
        const { id: r } = e;
        return (0, t.jsx)("div", {
          className: T().CapsuleWrapper,
          children: (0, t.jsx)(m, {
            id: "appid" in r ? r.appid : 0,
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function k(e) {
        const r = (0, j.aL)(
          `${l.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
          "banner",
        );
        return (0, t.jsx)(n.Ii, {
          href: r,
          className: (0, N.A)(T().HardwareBannerCtn),
          children: (0, t.jsx)(w, {}),
        });
      }
      function O(e) {
        const { id: r } = e,
          { data: s } = (0, g.J$)(r),
          i = (0, x.TH)(r);
        if (!i) return null;
        const a = `${l.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
          { rgDashTrailers: n, rgHlsTrailers: d } = (0, x.hg)(i);
        return (0, t.jsxs)("div", {
          className: T().DeviceFullWidthShadow,
          children: [
            (0, t.jsxs)("div", {
              className: (0, N.A)(T().DeviceWrapper),
              children: [
                (0, t.jsx)(p.S, {
                  children: (0, t.jsx)("div", {
                    className: T().TrailerCtn,
                    children: (0, t.jsx)(b.P, {
                      dashManifests: n,
                      hlsManifest: d[0],
                      screenshot:
                        i.screenshot_full ?? i.screenshot_medium ?? "",
                      altText: s?.name ?? "",
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
      function w(e) {
        const r = (0, c.zI)(),
          s = (0, a.sfN)(l.TS.LANGUAGE);
        return (0, t.jsx)(i.u, {
          language: s,
          strAltText: o.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
          strImageToken: r
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
      function P(e) {
        const {
          match: {
            params: { appid: r },
          },
        } = e;
        return (0, t.jsx)(D, { appid: Number.parseInt(r) });
      }
    },
  },
]);
