/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [13524],
    {
      92025: (R, B, a) => {
        "use strict";
        a.d(B, { fp: () => s, vm: () => I });
        var e = a(56062);
        const E = null;
        function o(t) {
          return E.includes(t);
        }
        function T(t) {
          return o(t) ? t : void 0;
        }
        function s(t) {
          return t
            ? t === "game" ||
                t === "dlc" ||
                t === "software" ||
                t === "music" ||
                t === "application" ||
                t === "demo" ||
                t === "hardware" ||
                t === "mod" ||
                t == "video" ||
                t === "beta" ||
                t === "advertising"
            : !1;
        }
        function I(t) {
          return t == null
            ? !1
            : t == e.uE.HT ||
                t == e.uE._i ||
                t == e.uE.Sv ||
                t == e.uE.Ov ||
                t == e.uE.ue ||
                t == e.uE.Hk ||
                t == e.uE.RA ||
                t == e.uE.Wz ||
                t == e.uE.Vi ||
                t == e.uE.pl;
        }
        function p(t) {
          return t === "music" || t === "dlc";
        }
      },
      96378: (R, B, a) => {
        "use strict";
        a.d(B, { h: () => I });
        var e = a(7850),
          E = a(19298),
          o = a(36707),
          T = a(66532),
          s = a.n(T);
        function I(t) {
          const {
            capsules_per_row: P,
            is_generic: M,
            is_generic_trailer: S,
            is_event_dash_row: v,
            is_trailer_carousel: H,
            is_spotlights: A,
            is_item_browser: j,
            is_maincap: K,
            is_expanded_maincap: l,
            is_expanded_display: O,
            show_auto_advance_bar: C,
          } = t;
          if (!P) return null;
          if (M)
            return (0, e.jsx)(p, {
              children: (0, e.jsx)("div", {
                className: s().PlaceholderBox,
                children: (0, e.jsx)("div", { className: s().ShineCtn }),
              }),
            });
          if (S)
            return (0, e.jsx)(p, {
              children: (0, e.jsx)("div", {
                className: s().PlaceholderVideo,
                children: (0, e.jsx)("div", { className: s().ShineCtn }),
              }),
            });
          if (H)
            return (0, e.jsxs)(p, {
              children: [
                (0, e.jsxs)("div", {
                  className: s().TrailerCarouselRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().VideoPlaceholder,
                      children: (0, e.jsx)("div", { className: s().ShineCtn }),
                    }),
                    (0, e.jsx)("div", {
                      className: s().ItemDescPlaceholer,
                      children: (0, e.jsx)("div", { className: s().ShineCtn }),
                    }),
                  ],
                }),
                C &&
                  (0, e.jsx)("div", {
                    className: s().AutoAdvanceBar,
                    children: (0, e.jsx)("div", { className: s().ShineCtn }),
                  }),
              ],
            });
          if (v)
            return (0, e.jsx)(p, {
              children: (0, e.jsxs)("div", {
                className: s().EventRow,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      s().PlaceholderGroupImage,
                      s().PlaceholderCap,
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, o.A)(s().DetailsPlaceholder),
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderTitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderSubtitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderButtons,
                          s().PlaceholderCap,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            });
          if (A)
            return (0, e.jsx)(p, {
              children: (0, e.jsxs)("div", {
                className: s().SpotlightsRow,
                children: [
                  (0, e.jsx)("div", { className: s().PlaceholderCap }),
                  (0, e.jsx)("div", { className: s().PlaceholderCap }),
                  (0, e.jsxs)("div", {
                    className: s().DailyDealsColumn,
                    children: [
                      (0, e.jsx)("div", { className: s().PlaceholderCap }),
                      (0, e.jsx)("div", { className: s().PlaceholderCap }),
                    ],
                  }),
                ],
              }),
            });
          if (K)
            return (0, e.jsx)(p, {
              children: (0, e.jsxs)("div", {
                className: (0, o.A)({
                  [s().MainCapRow]: !0,
                  [s().MainCapRowExpanded]: l,
                }),
                children: [
                  (0, e.jsx)("div", { className: s().PlaceholderCap }),
                  (0, e.jsxs)("div", {
                    className: (0, o.A)(s().DetailsPlaceholder),
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderTitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderSubtitle,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderRelease,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderReviews,
                          s().PlaceholderCap,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(
                          s().PlaceholderTags,
                          s().PlaceholderCap,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            });
          if (O)
            return (0, e.jsx)(p, {
              children: (0, e.jsxs)("div", {
                className: s().ExpandedItemRow,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      s().CapsulePlaceholder,
                      s().PlaceholderCap,
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      s().ItemDefPlaceholder,
                      s().PlaceholderCap,
                    ),
                  }),
                ],
              }),
            });
          if (j) {
            const w = [];
            for (let _ = 0; _ < P[0]; _++)
              w.push(
                (0, e.jsx)(
                  E.Z,
                  {
                    className: s().ItemBrowserCapsule,
                    focusable: !0,
                    children: (0, e.jsx)("div", {
                      className: s().PlaceholderCap,
                    }),
                  },
                  "item_browse_ghost_" + _,
                ),
              );
            return (0, e.jsx)(p, { children: w });
          }
          return P?.length == 1
            ? P[0] == 1
              ? (0, e.jsx)(p, {
                  children: (0, e.jsx)("div", {
                    className: s().CapsuleRowSuperCapsule,
                    children: (0, e.jsx)("div", {
                      className: s().PlaceholderCap,
                    }),
                  }),
                })
              : P[0] == 4
                ? (0, e.jsx)(p, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow4,
                      children: [
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                      ],
                    }),
                  })
                : (0, e.jsx)(p, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow3,
                      children: [
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        (0, e.jsx)("div", { className: s().PlaceholderCap }),
                      ],
                    }),
                  })
            : P?.length == 2
              ? P[0] == 3 && P[1] == 3
                ? (0, e.jsx)(p, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow23,
                      children: [
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps3),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps3),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, e.jsx)(p, {
                    children: (0, e.jsxs)("div", {
                      className: s().CapsuleRow23,
                      children: [
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps2),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, o.A)(s().CapRow, s().Caps3),
                          children: [
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                            (0, e.jsx)("div", {
                              className: s().PlaceholderCap,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
              : (0, e.jsx)(p, {
                  children: (0, e.jsxs)("div", {
                    className: s().CapsuleRow234,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().CapRow, s().Caps2),
                        children: [
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().CapRow, s().Caps3),
                        children: [
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, o.A)(s().CapRow, s().Caps4),
                        children: [
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                          (0, e.jsx)("div", { className: s().PlaceholderCap }),
                        ],
                      }),
                    ],
                  }),
                });
        }
        function p(t) {
          return (0, e.jsx)(E.Z, {
            className: s().GhostCtn,
            focusableIfEmpty: !0,
            children: t.children,
          });
        }
      },
      40232: (R, B, a) => {
        "use strict";
        a.d(B, { p: () => Re });
        var e = a(7850),
          E = a(24660),
          o = a(19298),
          T = a(20169),
          s = a(56062),
          I = a(88743),
          p = a(16179),
          t = a(96378),
          P = a(46727),
          M = a(84607),
          S = a(44267),
          v = a(40358),
          H = a(5827),
          A = a(75233),
          j = a(90626),
          K = a(18654),
          l = a.n(K),
          O = a(41188);
        function C(m) {
          const [d, r] = (0, j.useState)(void 0),
            { data: i } = (0, v.J$)(m),
            { data: h } = (0, v.xz)(m),
            N = (0, A.jE)(),
            g = (0, H.eG)();
          return (
            (0, j.useEffect)(() => {
              if (i) {
                if (h && h.length > 0) r(h);
                else if (i.related_items?.parent_appid) {
                  const x = { appid: i.related_items?.parent_appid };
                  (async () => {
                    const c = await N.fetchQuery((0, v.Ec)(g, x));
                    c && c.length > 0 && r(c);
                  })();
                }
              }
            }, [g, N, i, h]),
            d
          );
        }
        function w(m) {
          const { id: d } = m;
          return d ? (0, e.jsx)(_, { id: d }) : null;
        }
        function _(m) {
          const { id: d } = m,
            r = C(d);
          return r
            ? (0, e.jsx)("div", {
                className: l().StoreSaleWidgetTags,
                children: r
                  .slice(0, 10)
                  .map((i) =>
                    (0, e.jsx)(
                      O.p,
                      { tagid: i.tagid, className: l().AppTag },
                      "tag_" + i.tagid,
                    ),
                  ),
              })
            : null;
        }
        var $ = a(29245),
          Q = a(80104),
          U = a(39905),
          k = a(21721),
          X = a(68094),
          f = a(24179),
          Z = a(80702);
        const b = 6;
        function q(m) {
          const { id: d, bHideInLibraryApps: r } = m,
            { data: i } = (0, v.J$)(d),
            h = i?.item_type == s.c6.xO,
            { data: N } = (0, f.$Y)(),
            g = j.useMemo(() => {
              if (i)
                return i.item_type === s.c6.RD || i.item_type === s.c6.xO
                  ? (i.included_appids || [])
                      .filter((c) => !h || !r || !N?.has(c))
                      .map((c) => ({ appid: c }))
                  : (console.error(
                      "ContentsPreviewList unexpected store item type:",
                      i.item_type,
                    ),
                    null);
            }, [i, r, h, N]);
          if (!g || g.length == 0) return null;
          const x = g.length;
          let D = U.Z.LocalizePlural("#Sale_ContentPreview", x);
          if (h && i) {
            const c = i.included_appids?.length || 0;
            c != x &&
              (D = U.Z.Localize("#Sale_Bundle_CompletePartialSet", c - x, c));
          }
          return (0, e.jsxs)("div", {
            className: l().BundleContentPreview,
            children: [
              (0, e.jsxs)("div", {
                className: l().ContentsCount,
                children: [
                  h &&
                    (0, e.jsx)("span", {
                      className: l().BundleTag,
                      children: U.Z.Localize("#AppType_bundle"),
                    }),
                  D,
                ],
              }),
              (0, e.jsx)("div", {
                className: l().PreviewCtn,
                children: g
                  .slice(0, b)
                  .map((c) =>
                    (0, e.jsx)(ee, { id: c }, `preview${(0, X.ER)(c)}`),
                  ),
              }),
            ],
          });
        }
        function ee(m) {
          const { id: d } = m,
            { data: r } = (0, v.f2)(d),
            { data: i } = (0, v.U2)(d);
          if (!r || !i) return null;
          const h = (0, k.b0)(r, "small_capsule");
          return (0, e.jsx)(Z.Q, {
            id: d,
            className: l().PreviewItem,
            hoverProps: { direction: "right", style: { minWidth: "350px" } },
            children: (0, e.jsx)("img", {
              src: h,
              className: l().PreviewImg,
              loading: "lazy",
              alt: i.name || "",
            }),
          });
        }
        var se = a(77459),
          ae = a(48357),
          F = a(87249),
          z = a(83784),
          te = a(3348),
          je = a(81055),
          Ce = a(29522),
          fe = a(72865),
          ge = a(21690),
          Ne = a(13004),
          Ie = a(78069),
          Se = a(81029),
          De = a(73371),
          Ee = a.n(De),
          Ae = a(96155),
          y = a(36707),
          V = a(18210),
          ne = a(3166);
        function Re(m) {
          const {
              id: d,
              type: r,
              bShowDemoButton: i,
              bPreferDemoStorePage: h,
              bHidePrice: N,
              bUseSubscriptionLayout: g,
              bHidePlatforms: x,
              bHideContainedApps: D,
              bAllowTwoLinesForHeader: c,
              bShowReviewSummary: le,
              bShowDeckCompatibilityDialog: Y,
              bAutoFocus: oe,
              fnOnClickOverride: W,
              bIsMarketingMessage: re,
              bPreferAssetWithoutOverride: de,
            } = m,
            n = (0, I.zl)(d, r),
            [ce, Qe] = (0, j.useState)(!1),
            ye = (0, fe.n9)(),
            { data: u, isPending: Te } = (0, v.U2)(n),
            { data: me } = (0, v.Q_)(n),
            { data: he } = (0, v.by)(n),
            { data: Me } = (0, f.$Y)(),
            we = (0, Ce._Z)(n),
            J = (0, j.useRef)(null),
            [pe, We] = (0, j.useState)(!1),
            ve = (0, ne.Qn)();
          (0, j.useEffect)(() => {
            J.current && We(J.current.offsetWidth < 370);
          }, [J]);
          const Le = (0, j.useMemo)(
              () => (h && u && (0, z.J)(u) ? { appid: (0, z.S)(u)[0] } : n),
              [h, n, u],
            ),
            { strStoreURL: ue, snr: He } = (0, p.x)(u, h);
          if (!u)
            return Te
              ? (0, e.jsx)(t.h, { capsules_per_row: [1], is_item_browser: !0 })
              : null;
          const ie = u.included_appids?.length || 0,
            Ke = u.included_appids?.filter((Ge) => Me?.has(Ge))?.length || 0,
            Ue = u.item_type == s.c6.xO && !!me?.must_purchase_as_set,
            L = !D && ie > 1,
            xe = u.item_type == s.c6.RD && ie == 1,
            G = u.item_type == s.c6.qI || xe,
            Pe = xe && u.appid,
            be = u.name || "",
            Fe = (0, je.Nq)(he, me),
            ze = ve || !he?.is_coming_soon || Fe;
          return (0, e.jsxs)(o.Z, {
            className: (0, y.A)({
              [l().StoreSaleWidgetOuterContainer]: !0,
              [l().AllowTwoLineHeader]: c,
              StoreSaleWidgetOuterContainer: !0,
            }),
            "flow-children": "grid",
            navEntryPreferPosition: T.iU.PREFERRED_CHILD,
            autoFocus: oe,
            navKey: "preview_widget_" + (0, X.ER)(n),
            children: [
              (0, e.jsx)(Se.oj, {
                appid: G && "appid" in n ? n.appid : void 0,
                children: (0, e.jsxs)(E.ml, {
                  onClick: re ? W : void 0,
                  className: (0, y.A)({
                    [l().StoreSaleWidgetContainer]: !0,
                    [l().SaleItemDefaultCapsuleDisplay]: !0,
                    [l().MarketingMessage]: re,
                  }),
                  ...(0, Ie.S)(u, ye, ve, !!h, void 0, W),
                  preferredFocus: L,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, y.A)(l().StoreSaleWidgetHalfLeft),
                      children: (0, e.jsx)(Be, {
                        id: Le,
                        strURL: ue,
                        children: (0, e.jsxs)("div", {
                          className: l().StoreSaleWidgetImage,
                          children: [
                            (0, e.jsx)(P.V, { appids: we }),
                            (0, e.jsx)(M.a, {
                              id: n,
                              imageType: "header",
                              bPreferAssetWithoutOverride: de,
                            }),
                            (0, e.jsx)(Ae.J, { id: n }),
                            (0, e.jsx)(F.mj, {
                              id: n,
                              active: n && ce,
                              bIsHoverMode: !0,
                              eGrowOnActivate: F.C0.k_ETrailerGrowAmount_Medium,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, y.A)({
                        [l().StoreSaleWidgetRight]: !0,
                        [l().Bundle]: L,
                      }),
                      children: [
                        !!(G && !W) &&
                          (0, e.jsx)(S.E, {
                            id: n,
                            classOverride: (0, y.A)(
                              Ee().WishlistButtonNotTop,
                              "WishlistButton",
                            ),
                            snr: He,
                          }),
                        (0, e.jsx)("div", {
                          className: l().TitleCtn,
                          children: (0, e.jsx)("a", {
                            href: W ? void 0 : ue,
                            target: ne.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: W,
                            children: (0, e.jsx)("div", {
                              className: (0, y.A)(
                                l().StoreSaleWidgetTitle,
                                "StoreSaleWidgetTitle",
                              ),
                              children: be,
                            }),
                          }),
                        }),
                        !L && (0, e.jsx)(w, { id: n }),
                        (0, e.jsxs)("div", {
                          className: l().WidgetReleaseDateAndPlatformCtn,
                          ref: J,
                          children: [
                            G && (0, e.jsx)(Oe, { id: n }),
                            !L &&
                              !x &&
                              n &&
                              (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)($.Q, {
                                    id: n,
                                    bMinimizePlatforms: pe,
                                    bHideWindows: pe,
                                  }),
                                  !!(Y && u.item_type == s.c6.qI) &&
                                    (0, e.jsx)(ge.kk, {
                                      className: l().DeckCompatIcon,
                                      id: n,
                                    }),
                                ],
                              }),
                          ],
                        }),
                        !L &&
                          le &&
                          n &&
                          (0, e.jsx)("div", {
                            className: l().ReviewScores,
                            children: (0, e.jsx)(Q.J, { id: n }),
                          }),
                        L &&
                          n &&
                          (0, e.jsx)(q, {
                            id: n,
                            bHideInLibraryApps:
                              !Ue && u.item_type == s.c6.xO && Ke < ie,
                          }),
                        !!G && (0, e.jsx)(_e, { id: n }),
                        W
                          ? (0, e.jsx)("div", {
                              className: l().StoreActionWidgetContainer,
                              children: (0, e.jsx)("div", {
                                className:
                                  l().StoreSalePriceActionWidgetContainer,
                                children: (0, e.jsx)(ae.NF, { id: n }),
                              }),
                            })
                          : (0, e.jsx)(e.Fragment, {
                              children:
                                g && G && Pe
                                  ? (0, e.jsx)(se.E, {
                                      appid: Pe,
                                      bIsMuted: !!ce,
                                    })
                                  : (0, e.jsx)(Ne.w, {
                                      id: n,
                                      bShowDemoButton: i,
                                      bHidePrice: N,
                                      bHideWishlistButton: ze,
                                      bShowDeckCompatibilityDialog: Y,
                                    }),
                            }),
                        (0, e.jsx)("div", {
                          className: l().StoreSaleWidgetBgTint,
                          children: (0, e.jsx)(M.a, {
                            id: n,
                            bPreferAssetWithoutOverride: de,
                            imageType: "header",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              !!(m.strReason && m.strReason.length > 0) &&
                (0, e.jsx)("div", {
                  className: l().RecommendationReason,
                  children: m.strReason,
                }),
            ],
          });
        }
        function Be(m) {
          const { id: d, strURL: r, children: i } = m;
          return "appid" in d
            ? (0, e.jsxs)(Z.Q, { id: d, children: [i, " "] })
            : (0, e.jsx)("a", { href: r, children: i });
        }
        function Oe(m) {
          const { id: d } = m,
            { data: r } = (0, v.by)(d);
          return r
            ? (0, e.jsx)("div", {
                className: l().StoreSaleWidgetRelease,
                children: (0, te.CC)(r),
              })
            : null;
        }
        function _e(m) {
          const { id: d } = m,
            { data: r } = (0, v.U2)(d),
            { data: i } = (0, v.Q_)(d),
            { data: h } = (0, v.wl)(d),
            { data: N } = (0, f.$Y)();
          if (!r || !h || !h.short_description || !N) return null;
          const g = i?.discount_pct || 0,
            x = r.included_appids?.length || 0,
            D = r.included_appids?.filter((oe) => N?.has(oe))?.length || 0;
          let c = h.short_description;
          const le = r.item_type == s.c6.RD && x == 1,
            Y = r.item_type == s.c6.xO && !!i?.must_purchase_as_set;
          return (
            (r.item_type == s.c6.xO || (r.item_type == s.c6.RD && !le)) &&
              (!Y && D > 0 && D < x
                ? (c = (0, V.we)("#Sale_Bundle_CompletePartialSet", D, x))
                : (c =
                    g > 0
                      ? (0, V.we)("#Sale_BundleSave_WithDiscount", g, x)
                      : (0, V.we)("#Sale_BundleSave", x))),
            (0, e.jsx)("div", {
              className: (0, y.A)(
                l().StoreSaleWidgetShortDesc,
                "StoreSaleWidgetShortDesc",
              ),
              children:
                c.startsWith("#") && c.indexOf(" ") == -1
                  ? (0, e.jsx)("span", {
                      className: l().LocalizationSpan,
                      children: (0, V.oW)(
                        c,
                        (0, e.jsx)("i", {}),
                        (0, e.jsx)("i", {}),
                        (0, e.jsx)("i", {}),
                        (0, e.jsx)("i", {}),
                      ),
                    })
                  : c,
            })
          );
        }
      },
      13004: (R, B, a) => {
        "use strict";
        a.d(B, { w: () => K });
        var e = a(7850),
          E = a(92025),
          o = a(56062),
          T = a(27284),
          s = a(48357),
          I = a(40358),
          p = a(24179),
          t = a(41944),
          P = a(9975),
          M = a(18654),
          S = a.n(M),
          v = a(11243),
          H = a(36707),
          A = a(18210),
          j = a(92264);
        function K(O) {
          const {
              id: C,
              bShowDemoButton: w,
              bShowPurchaseOptionsButton: _,
              fnOnPurchaseOptionsClick: $,
              bHidePrice: Q,
              bShowDeckCompatibilityDialog: U,
              className: k,
              bShowCartButton: X,
            } = O,
            { data: f } = (0, I.J$)(C),
            { data: Z } = (0, I.by)(C),
            { data: b } = (0, I.Q_)(C),
            { bIsOwned: q } = (0, p.ZJ)(C);
          if (!f) return null;
          const ee =
              (f.type === o.uE.ue && !Z?.is_coming_soon) ||
              (f.related_items?.demo_appid &&
                f.related_items?.demo_appid.length > 0),
            se = (0, E.vm)(f.type),
            ae = w && se && ee;
          let F = null;
          if (!q && b?.is_free_to_keep && b?.free_to_keep_ends) {
            const z = b.free_to_keep_ends,
              te = (0, A.we)(
                "#Sale_default_label_Free_Promo_Description_Short",
                (0, A.$z)(z) + " @ " + (0, j.KC)(z, { bForce24HourClock: !1 }),
              );
            F = (0, e.jsxs)("div", {
              className: S().PurchaseOptionDetails,
              children: [
                te,
                (0, e.jsx)(v.o, {
                  tooltip: (0, A.we)(
                    "#Sale_default_Tooltip_Free_Promo_Limitation",
                  ),
                }),
              ],
            });
          }
          return (0, e.jsxs)("div", {
            className: (0, H.A)(S().StoreActionWidgetContainer, k),
            children: [
              F,
              (0, e.jsxs)("div", {
                className: S().StoreSalePriceActionWidgetContainer,
                children: [
                  !!ae && (0, e.jsx)(T.j, { id: C, className: S().Action }),
                  !Q &&
                    f.type !== o.uE.ue &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!(_ && !f.is_free) &&
                          (0, e.jsx)(l, { fnOnPurchaseOptionsClick: $ }),
                        !!(X && !f.is_free) &&
                          (0, e.jsx)(P.h, { id: C, className: "CartBtn" }),
                      ],
                    }),
                  !Q && (0, e.jsx)(s.NF, { id: C }),
                  !!U && (0, e.jsx)(t.Q8, { id: C }),
                ],
              }),
            ],
          });
        }
        function l(O) {
          return (0, e.jsx)("div", {
            className: S().Action,
            onClick: O.fnOnPurchaseOptionsClick,
            children: (0, e.jsx)("span", {
              children: (0, A.we)(
                "#EventDisplay_CallToAction_ShowPurchaseOptions_Button",
              ),
            }),
          });
        }
      },
      66532: (R) => {
        R.exports = {
          GhostCtn: "_1ubg0tXv_umwQZUB_0jDRE",
          PlaceholderCap: "_27gySE3vmqZlMXfuF632TP",
          GhostShine: "_2l86dzSdcXulUY9WKa1Tbu",
          PlaceholderBox: "_1XmpFdzcYugE4Z9e7kEWU0",
          ShineCtn: "_2u3dr06IR8IZdxdklGi4vo",
          PlaceholderVideo: "R5EqV-ifmaPOB3fyPBfhh",
          CapsuleRow3: "_3kupXecbdHHKoQG8YCt4dL",
          CapsuleRow4: "_33YZ_jDH_m_qIiXgOfMT76",
          CapsuleRowSuperCapsule: "_3TP7KmXA-L05uPNVUFbGFa",
          ItemBrowserCapsule: "_2RfEi9dkz-umKdhACj0xcl",
          CapsuleRow23: "_3OEHujsE68pdk2YnrZVRMp",
          CapRow: "_1R1HR9bMl_hU40P6h6Y51n",
          Caps2: "_3NP9CpCeX-sy6hyPmlh2M5",
          Caps3: "ch0xp_kjApA24ePv-4mUf",
          CapsuleRow234: "_30kicHKjKoSXe0rh5mMDIU",
          Caps4: "_3F43q6uNP6clXtkdnaOhn4",
          SpotlightsRow: "_2qbLh__etckJ_mcn5XLyzG",
          DailyDealsColumn: "_6o5HjMAgOX8KNp4cVQ33l",
          EventRow: "_1_ztuzDN3PaSMNH4DQqoFS",
          PlaceholderGroupImage: "ntVbFRmkoOazIFG2xnLEL",
          DetailsPlaceholder: "lvNWfRKbNHxMhmhmkTxSa",
          PlaceholderTitle: "_2KAn_rPFaW6MLKtxBBFrgi",
          PlaceholderSubtitle: "_2PqXIU5kSbk1S4OHMrtpEG",
          PlaceholderButtons: "_2Svpv7NgQYtnnih1Al0nKv",
          TrailerCarouselRow: "_3aEDS0V4oHI2X845GlY4AQ",
          VideoPlaceholder: "_1J4w1c1LMOidazCqHBu9c2",
          ItemDescPlaceholer: "_1chbn_ZYr2_kVufM3llMqe",
          AutoAdvanceBar: "XWmc4IL9WuoHRfkxKtkwf",
          ExpandedItemRow: "_3QSW80jNmiGxWlCRe8GPvp",
          CapsulePlaceholder: "woZ8x3k0HeLNHeEH2wYmd",
          ItemDefPlaceholder: "_25qfK6y2ESK-sTYHvmIyiC",
          MainCapRow: "_3uwmHkHfnqzkO3kjD2dsfX",
          PlaceholderRelease: "lZpOQjeL8nSaqqVQSej0d",
          PlaceholderReviews: "_1wTzeBKjOcMG6cUtzXqF3D",
          PlaceholderTags: "_3pJA7V23G6n6uIbJSzFLFO",
        };
      },
      73371: (R) => {
        R.exports = {
          WishlistButtonNotTop: "NLpQmAPIbG71U6eWdaOa1",
          FollowGameButtonNotTop: "T3A9t1mjAR00ljJGlBapl",
        };
      },
    },
  ]);
})();
