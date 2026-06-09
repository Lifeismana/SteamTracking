/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3524],
  {
    66532: (e) => {
      e.exports = {
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
    73371: (e) => {
      e.exports = {
        WishlistButtonNotTop: "NLpQmAPIbG71U6eWdaOa1",
        FollowGameButtonNotTop: "T3A9t1mjAR00ljJGlBapl",
      };
    },
    81886: (e, a, s) => {
      "use strict";
      s.d(a, { fp: () => i, vm: () => d });
      var l = s(48210);
      function i(e) {
        return (
          !!e &&
          ("game" === e ||
            "dlc" === e ||
            "software" === e ||
            "music" === e ||
            "application" === e ||
            "demo" === e ||
            "hardware" === e ||
            "mod" === e ||
            "video" == e ||
            "beta" === e ||
            "advertising" === e)
        );
      }
      function d(e) {
        return (
          null != e &&
          (e == l.uE.HT ||
            e == l.uE._i ||
            e == l.uE.Sv ||
            e == l.uE.Ov ||
            e == l.uE.ue ||
            e == l.uE.Hk ||
            e == l.uE.RA ||
            e == l.uE.Wz ||
            e == l.uE.Vi ||
            e == l.uE.pl)
        );
      }
    },
    71381: (e, a, s) => {
      "use strict";
      s.d(a, { h: () => c });
      var l = s(7850),
        i = s(76217),
        d = s(52038),
        t = s(66532),
        r = s.n(t);
      function c(e) {
        const {
          capsules_per_row: a,
          is_generic: s,
          is_generic_trailer: t,
          is_event_dash_row: c,
          is_trailer_carousel: n,
          is_spotlights: h,
          is_item_browser: p,
          is_maincap: m,
          is_expanded_maincap: u,
          is_expanded_display: x,
          show_auto_advance_bar: j,
        } = e;
        if (!a) return null;
        if (s)
          return (0, l.jsx)(o, {
            children: (0, l.jsx)("div", {
              className: r().PlaceholderBox,
              children: (0, l.jsx)("div", { className: r().ShineCtn }),
            }),
          });
        if (t)
          return (0, l.jsx)(o, {
            children: (0, l.jsx)("div", {
              className: r().PlaceholderVideo,
              children: (0, l.jsx)("div", { className: r().ShineCtn }),
            }),
          });
        if (n)
          return (0, l.jsxs)(o, {
            children: [
              (0, l.jsxs)("div", {
                className: r().TrailerCarouselRow,
                children: [
                  (0, l.jsx)("div", {
                    className: r().VideoPlaceholder,
                    children: (0, l.jsx)("div", { className: r().ShineCtn }),
                  }),
                  (0, l.jsx)("div", {
                    className: r().ItemDescPlaceholer,
                    children: (0, l.jsx)("div", { className: r().ShineCtn }),
                  }),
                ],
              }),
              j &&
                (0, l.jsx)("div", {
                  className: r().AutoAdvanceBar,
                  children: (0, l.jsx)("div", { className: r().ShineCtn }),
                }),
            ],
          });
        if (c)
          return (0, l.jsx)(o, {
            children: (0, l.jsxs)("div", {
              className: r().EventRow,
              children: [
                (0, l.jsx)("div", {
                  className: (0, d.A)(
                    r().PlaceholderGroupImage,
                    r().PlaceholderCap,
                  ),
                }),
                (0, l.jsxs)("div", {
                  className: (0, d.A)(r().DetailsPlaceholder),
                  children: [
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderTitle,
                        r().PlaceholderCap,
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderSubtitle,
                        r().PlaceholderCap,
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderButtons,
                        r().PlaceholderCap,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        if (h)
          return (0, l.jsx)(o, {
            children: (0, l.jsxs)("div", {
              className: r().SpotlightsRow,
              children: [
                (0, l.jsx)("div", { className: r().PlaceholderCap }),
                (0, l.jsx)("div", { className: r().PlaceholderCap }),
                (0, l.jsxs)("div", {
                  className: r().DailyDealsColumn,
                  children: [
                    (0, l.jsx)("div", { className: r().PlaceholderCap }),
                    (0, l.jsx)("div", { className: r().PlaceholderCap }),
                  ],
                }),
              ],
            }),
          });
        if (m)
          return (0, l.jsx)(o, {
            children: (0, l.jsxs)("div", {
              className: (0, d.A)({
                [r().MainCapRow]: !0,
                [r().MainCapRowExpanded]: u,
              }),
              children: [
                (0, l.jsx)("div", { className: r().PlaceholderCap }),
                (0, l.jsxs)("div", {
                  className: (0, d.A)(r().DetailsPlaceholder),
                  children: [
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderTitle,
                        r().PlaceholderCap,
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderSubtitle,
                        r().PlaceholderCap,
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderRelease,
                        r().PlaceholderCap,
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderReviews,
                        r().PlaceholderCap,
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, d.A)(
                        r().PlaceholderTags,
                        r().PlaceholderCap,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        if (x)
          return (0, l.jsx)(o, {
            children: (0, l.jsxs)("div", {
              className: r().ExpandedItemRow,
              children: [
                (0, l.jsx)("div", {
                  className: (0, d.A)(
                    r().CapsulePlaceholder,
                    r().PlaceholderCap,
                  ),
                }),
                (0, l.jsx)("div", {
                  className: (0, d.A)(
                    r().ItemDefPlaceholder,
                    r().PlaceholderCap,
                  ),
                }),
              ],
            }),
          });
        if (p) {
          const e = [];
          for (let s = 0; s < a[0]; s++)
            e.push(
              (0, l.jsx)(
                i.Z,
                {
                  className: r().ItemBrowserCapsule,
                  focusable: !0,
                  children: (0, l.jsx)("div", {
                    className: r().PlaceholderCap,
                  }),
                },
                "item_browse_ghost_" + s,
              ),
            );
          return (0, l.jsx)(o, { children: e });
        }
        return 1 == a?.length
          ? 1 == a[0]
            ? (0, l.jsx)(o, {
                children: (0, l.jsx)("div", {
                  className: r().CapsuleRowSuperCapsule,
                  children: (0, l.jsx)("div", {
                    className: r().PlaceholderCap,
                  }),
                }),
              })
            : 4 == a[0]
              ? (0, l.jsx)(o, {
                  children: (0, l.jsxs)("div", {
                    className: r().CapsuleRow4,
                    children: [
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                    ],
                  }),
                })
              : (0, l.jsx)(o, {
                  children: (0, l.jsxs)("div", {
                    className: r().CapsuleRow3,
                    children: [
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      (0, l.jsx)("div", { className: r().PlaceholderCap }),
                    ],
                  }),
                })
          : 2 == a?.length
            ? 3 == a[0] && 3 == a[1]
              ? (0, l.jsx)(o, {
                  children: (0, l.jsxs)("div", {
                    className: r().CapsuleRow23,
                    children: [
                      (0, l.jsxs)("div", {
                        className: (0, d.A)(r().CapRow, r().Caps3),
                        children: [
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: (0, d.A)(r().CapRow, r().Caps3),
                        children: [
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, l.jsx)(o, {
                  children: (0, l.jsxs)("div", {
                    className: r().CapsuleRow23,
                    children: [
                      (0, l.jsxs)("div", {
                        className: (0, d.A)(r().CapRow, r().Caps2),
                        children: [
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: (0, d.A)(r().CapRow, r().Caps3),
                        children: [
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                          (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        ],
                      }),
                    ],
                  }),
                })
            : (0, l.jsx)(o, {
                children: (0, l.jsxs)("div", {
                  className: r().CapsuleRow234,
                  children: [
                    (0, l.jsxs)("div", {
                      className: (0, d.A)(r().CapRow, r().Caps2),
                      children: [
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: (0, d.A)(r().CapRow, r().Caps3),
                      children: [
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: (0, d.A)(r().CapRow, r().Caps4),
                      children: [
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                        (0, l.jsx)("div", { className: r().PlaceholderCap }),
                      ],
                    }),
                  ],
                }),
              });
      }
      function o(e) {
        return (0, l.jsx)(i.Z, {
          className: r().GhostCtn,
          focusableIfEmpty: !0,
          children: e.children,
        });
      }
    },
    41399: (e, a, s) => {
      "use strict";
      s.d(a, { p: () => Y });
      var l = s(7850),
        i = s(45699),
        d = s(76217),
        t = s(23310),
        r = s(48210),
        c = s(51078),
        o = s(71381),
        n = s(78588),
        h = s(94636),
        p = s(39777),
        m = s(7338),
        u = s(75233),
        x = s(90626),
        j = s(18654),
        _ = s.n(j),
        v = s(90421);
      function C(e) {
        const { id: a } = e;
        return a ? (0, l.jsx)(N, { id: a }) : null;
      }
      function N(e) {
        const { id: a } = e,
          s = (function (e) {
            const [a, s] = (0, x.useState)(void 0),
              { data: l } = (0, p.J$)(e),
              { data: i } = (0, p.xz)(e),
              d = (0, u.jE)(),
              t = (0, m.eG)();
            return (
              (0, x.useEffect)(() => {
                if (l)
                  if (i && i.length > 0) s(i);
                  else if (l.related_items?.parent_appid) {
                    const e = { appid: l.related_items?.parent_appid };
                    (async () => {
                      const a = await d.fetchQuery((0, p.Ec)(t, e));
                      a && a.length > 0 && s(a);
                    })();
                  }
              }, [t, d, l, i]),
              a
            );
          })(a);
        return s
          ? (0, l.jsx)("div", {
              className: _().StoreSaleWidgetTags,
              children: s
                .slice(0, 10)
                .map((e) =>
                  (0, l.jsx)(
                    v.p,
                    { tagid: e.tagid, className: _().AppTag },
                    "tag_" + e.tagid,
                  ),
                ),
            })
          : null;
      }
      var P = s(24267),
        f = s(55672),
        S = s(42834),
        w = s(52541),
        g = s(58918),
        R = s(29008);
      const b = 6;
      function A(e) {
        const { id: a, bHideInLibraryApps: s } = e,
          { data: i } = (0, p.J$)(a),
          d = i?.item_type == r.c6.xO,
          { data: t } = (0, g.$Y)(),
          c = x.useMemo(() => {
            if (i)
              return i.item_type === r.c6.RD || i.item_type === r.c6.xO
                ? (i.included_appids || [])
                    .filter((e) => !d || !s || !t?.has(e))
                    .map((e) => ({ appid: e }))
                : (console.error(
                    "ContentsPreviewList unexpected store item type:",
                    i.item_type,
                  ),
                  null);
          }, [i, s, d, t]);
        if (!c || 0 == c.length) return null;
        const o = c.length;
        let n = f.Z.LocalizePlural("#Sale_ContentPreview", o);
        if (d && i) {
          const e = i.included_appids?.length || 0;
          e != o &&
            (n = f.Z.Localize("#Sale_Bundle_CompletePartialSet", e - o, e));
        }
        return (0, l.jsxs)("div", {
          className: _().BundleContentPreview,
          children: [
            (0, l.jsxs)("div", {
              className: _().ContentsCount,
              children: [
                d &&
                  (0, l.jsx)("span", {
                    className: _().BundleTag,
                    children: f.Z.Localize("#AppType_bundle"),
                  }),
                n,
              ],
            }),
            (0, l.jsx)("div", {
              className: _().PreviewCtn,
              children: c
                .slice(0, b)
                .map((e) => (0, l.jsx)(B, { id: e }, `preview${(0, w.ER)(e)}`)),
            }),
          ],
        });
      }
      function B(e) {
        const { id: a } = e,
          { data: s } = (0, p.f2)(a),
          { data: i } = (0, p.U2)(a);
        if (!s || !i) return null;
        const d = (0, S.b0)(s, "small_capsule");
        return (0, l.jsx)(R.Q, {
          id: a,
          className: _().PreviewItem,
          hoverProps: { direction: "right", style: { minWidth: "350px" } },
          children: (0, l.jsx)("img", {
            src: d,
            className: _().PreviewImg,
            loading: "lazy",
            alt: i.name || "",
          }),
        });
      }
      var y = s(12424),
        k = s(3740),
        E = s(80696),
        D = s(62349),
        W = s(5309),
        O = s(30020),
        I = s(14987),
        H = s(60014),
        T = s(35380),
        L = s(93341),
        M = s(96006),
        F = s(94191),
        z = s(94095),
        G = s(72860),
        Q = s(70300),
        U = s(73371),
        q = s.n(U),
        K = s(54492),
        X = s(52038),
        Z = s(61859),
        V = s(78327);
      function Y(e) {
        const {
            id: a,
            type: s,
            bShowDemoButton: m,
            bPreferDemoStorePage: u,
            bHidePrice: j,
            bUseSubscriptionLayout: v,
            bHidePlatforms: N,
            bHideContainedApps: f,
            bAllowTwoLinesForHeader: S,
            bShowReviewSummary: R,
            bShowDeckCompatibilityDialog: b,
            bAutoFocus: B,
            fnOnClickOverride: W,
            bIsMarketingMessage: U,
            bPreferAssetWithoutOverride: Z,
          } = e,
          Y = (0, T.zl)(a, s),
          [ae, se] = (0, x.useState)(!1),
          le = (0, H.n9)(),
          { data: ie, isPending: de } = (0, p.U2)(Y),
          { data: te } = (0, p.Q_)(Y),
          { data: re } = (0, p.by)(Y),
          { data: ce } = (0, g.$Y)(),
          oe = (0, I._)(Y),
          ne = (0, x.useRef)(null),
          [he, pe] = (0, x.useState)(!1),
          me = (0, V.Qn)();
        (0, x.useEffect)(() => {
          ne.current && pe(ne.current.offsetWidth < 370);
        }, [ne]);
        const ue = (0, x.useMemo)(
            () => (u && ie && (0, D.J)(ie) ? { appid: (0, D.S)(ie)[0] } : Y),
            [u, Y, ie],
          ),
          { strStoreURL: xe, snr: je } = (0, c.x)(ie, u);
        if (!ie)
          return de
            ? (0, l.jsx)(o.h, { capsules_per_row: [1], is_item_browser: !0 })
            : null;
        const _e = ie.included_appids?.length || 0,
          ve = ie.included_appids?.filter((e) => ce?.has(e))?.length || 0,
          Ce = ie.item_type == r.c6.xO && Boolean(te?.must_purchase_as_set),
          Ne = Boolean(!f && _e > 1),
          Pe = ie.item_type == r.c6.RD && 1 == _e,
          fe = ie.item_type == r.c6.qI || Pe,
          Se = Pe && ie.appid,
          we = ie.name || "",
          ge = (0, O.Nq)(re, te),
          Re = me || !re?.is_coming_soon || ge;
        return (0, l.jsxs)(d.Z, {
          className: (0, X.A)({
            [_().StoreSaleWidgetOuterContainer]: !0,
            [_().AllowTwoLineHeader]: S,
            StoreSaleWidgetOuterContainer: !0,
          }),
          "flow-children": "grid",
          navEntryPreferPosition: t.iU.PREFERRED_CHILD,
          autoFocus: B,
          navKey: "preview_widget_" + (0, w.ER)(Y),
          children: [
            (0, l.jsx)(Q.oj, {
              appid: fe && "appid" in Y ? Y.appid : void 0,
              children: (0, l.jsxs)(i.ml, {
                onClick: U ? W : void 0,
                className: (0, X.A)({
                  [_().StoreSaleWidgetContainer]: !0,
                  [_().SaleItemDefaultCapsuleDisplay]: !0,
                  [_().MarketingMessage]: U,
                }),
                ...(0, G.S)(ie, le, me, Boolean(u), void 0, W),
                preferredFocus: Ne,
                children: [
                  (0, l.jsx)("div", {
                    className: (0, X.A)(_().StoreSaleWidgetHalfLeft),
                    children: (0, l.jsx)(J, {
                      id: ue,
                      strURL: xe,
                      children: (0, l.jsxs)("div", {
                        className: _().StoreSaleWidgetImage,
                        children: [
                          (0, l.jsx)(F.V, { appids: oe }),
                          (0, l.jsx)(n.a, {
                            id: Y,
                            imageType: "header",
                            bPreferAssetWithoutOverride: Z,
                          }),
                          (0, l.jsx)(K.J, { id: Y }),
                          (0, l.jsx)(E.mj, {
                            id: Y,
                            active: Y && ae,
                            bIsHoverMode: !0,
                            eGrowOnActivate: E.C0.k_ETrailerGrowAmount_Medium,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: (0, X.A)({
                      [_().StoreSaleWidgetRight]: !0,
                      [_().Bundle]: Ne,
                    }),
                    children: [
                      Boolean(fe && !W) &&
                        (0, l.jsx)(h.E, {
                          id: Y,
                          classOverride: (0, X.A)(
                            q().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: je,
                        }),
                      (0, l.jsx)("div", {
                        className: _().TitleCtn,
                        children: (0, l.jsx)("a", {
                          href: W ? void 0 : xe,
                          target: V.TS.IN_CLIENT ? void 0 : "_blank",
                          onClick: W,
                          children: (0, l.jsx)("div", {
                            className: (0, X.A)(
                              _().StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle",
                            ),
                            children: we,
                          }),
                        }),
                      }),
                      !Ne && (0, l.jsx)(C, { id: Y }),
                      (0, l.jsxs)("div", {
                        className: _().WidgetReleaseDateAndPlatformCtn,
                        ref: ne,
                        children: [
                          fe && (0, l.jsx)($, { id: Y }),
                          !Ne &&
                            !N &&
                            Y &&
                            (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(M.Q, {
                                  id: Y,
                                  bMinimizePlatforms: he,
                                  bHideWindows: he,
                                }),
                                Boolean(b && ie.item_type == r.c6.qI) &&
                                  (0, l.jsx)(L.kk, {
                                    className: _().DeckCompatIcon,
                                    id: Y,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      !Ne &&
                        R &&
                        Y &&
                        (0, l.jsx)("div", {
                          className: _().ReviewScores,
                          children: (0, l.jsx)(P.J, { id: Y }),
                        }),
                      Ne &&
                        Y &&
                        (0, l.jsx)(A, {
                          id: Y,
                          bHideInLibraryApps:
                            !Ce && ie.item_type == r.c6.xO && ve < _e,
                        }),
                      Boolean(fe) && (0, l.jsx)(ee, { id: Y }),
                      Boolean(!W)
                        ? (0, l.jsx)(l.Fragment, {
                            children:
                              v && fe && Se
                                ? (0, l.jsx)(y.E, {
                                    appid: Se,
                                    bIsMuted: Boolean(ae),
                                  })
                                : (0, l.jsx)(z.w, {
                                    id: Y,
                                    bShowDemoButton: m,
                                    bHidePrice: j,
                                    bHideWishlistButton: Re,
                                    bShowDeckCompatibilityDialog: b,
                                  }),
                          })
                        : (0, l.jsx)("div", {
                            className: _().StoreActionWidgetContainer,
                            children: (0, l.jsx)("div", {
                              className:
                                _().StoreSalePriceActionWidgetContainer,
                              children: (0, l.jsx)(k.NF, { id: Y }),
                            }),
                          }),
                      (0, l.jsx)("div", {
                        className: _().StoreSaleWidgetBgTint,
                        children: (0, l.jsx)(n.a, {
                          id: Y,
                          bPreferAssetWithoutOverride: Z,
                          imageType: "header",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Boolean(e.strReason && e.strReason.length > 0) &&
              (0, l.jsx)("div", {
                className: _().RecommendationReason,
                children: e.strReason,
              }),
          ],
        });
      }
      function J(e) {
        const { id: a, strURL: s, children: i } = e;
        return "appid" in a
          ? (0, l.jsxs)(R.Q, { id: a, children: [i, " "] })
          : (0, l.jsx)("a", { href: s, children: i });
      }
      function $(e) {
        const { id: a } = e,
          { data: s } = (0, p.by)(a);
        return s
          ? (0, l.jsx)("div", {
              className: _().StoreSaleWidgetRelease,
              children: (0, W.CC)(s),
            })
          : null;
      }
      function ee(e) {
        const { id: a } = e,
          { data: s } = (0, p.U2)(a),
          { data: i } = (0, p.Q_)(a),
          { data: d } = (0, p.wl)(a),
          { data: t } = (0, g.$Y)();
        if (!(s && d && d.short_description && t)) return null;
        const c = i?.discount_pct || 0,
          o = s.included_appids?.length || 0,
          n = s.included_appids?.filter((e) => t?.has(e))?.length || 0;
        let h = d.short_description;
        const m = s.item_type == r.c6.RD && 1 == o,
          u = s.item_type == r.c6.xO && Boolean(i?.must_purchase_as_set);
        return (
          (s.item_type == r.c6.xO || (s.item_type == r.c6.RD && !m)) &&
            (h =
              !u && n > 0 && n < o
                ? (0, Z.we)("#Sale_Bundle_CompletePartialSet", n, o)
                : c > 0
                  ? (0, Z.we)("#Sale_BundleSave_WithDiscount", c, o)
                  : (0, Z.we)("#Sale_BundleSave", o)),
          (0, l.jsx)("div", {
            className: (0, X.A)(
              _().StoreSaleWidgetShortDesc,
              "StoreSaleWidgetShortDesc",
            ),
            children: Boolean(h.startsWith("#") && -1 == h.indexOf(" "))
              ? (0, l.jsx)("span", {
                  className: _().LocalizationSpan,
                  children: (0, Z.oW)(
                    h,
                    (0, l.jsx)("i", {}),
                    (0, l.jsx)("i", {}),
                    (0, l.jsx)("i", {}),
                    (0, l.jsx)("i", {}),
                  ),
                })
              : h,
          })
        );
      }
    },
    94095: (e, a, s) => {
      "use strict";
      s.d(a, { w: () => v });
      var l = s(7850),
        i = s(81886),
        d = s(48210),
        t = s(55509),
        r = s(3740),
        c = s(39777),
        o = s(58918),
        n = s(54906),
        h = s(43976),
        p = s(18654),
        m = s.n(p),
        u = s(26408),
        x = s(52038),
        j = s(61859),
        _ = s(91675);
      function v(e) {
        const {
            id: a,
            bShowDemoButton: s,
            bShowPurchaseOptionsButton: p,
            fnOnPurchaseOptionsClick: v,
            bHidePrice: N,
            bShowDeckCompatibilityDialog: P,
            className: f,
            bShowCartButton: S,
          } = e,
          { data: w } = (0, c.J$)(a),
          { data: g } = (0, c.by)(a),
          { data: R } = (0, c.Q_)(a),
          { bIsOwned: b } = (0, o.ZJ)(a);
        if (!w) return null;
        const A =
            (w.type === d.uE.ue && !g?.is_coming_soon) ||
            (w.related_items?.demo_appid &&
              w.related_items?.demo_appid.length > 0),
          B = (0, i.vm)(w.type),
          y = s && B && A;
        let k = null;
        if (!b && R?.is_free_to_keep && R?.free_to_keep_ends) {
          const e = R.free_to_keep_ends,
            a = (0, j.we)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, j.$z)(e) + " @ " + (0, _.KC)(e, { bForce24HourClock: !1 }),
            );
          k = (0, l.jsxs)("div", {
            className: m().PurchaseOptionDetails,
            children: [
              a,
              (0, l.jsx)(u.o, {
                tooltip: (0, j.we)(
                  "#Sale_default_Tooltip_Free_Promo_Limitation",
                ),
              }),
            ],
          });
        }
        return (0, l.jsxs)("div", {
          className: (0, x.A)(m().StoreActionWidgetContainer, f),
          children: [
            k,
            (0, l.jsxs)("div", {
              className: m().StoreSalePriceActionWidgetContainer,
              children: [
                Boolean(y) && (0, l.jsx)(t.j, { id: a, className: m().Action }),
                Boolean(!N) &&
                  w.type !== d.uE.ue &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      Boolean(p && !w.is_free) &&
                        (0, l.jsx)(C, { fnOnPurchaseOptionsClick: v }),
                      Boolean(S && !w.is_free) &&
                        (0, l.jsx)(h.h, { id: a, className: "CartBtn" }),
                    ],
                  }),
                Boolean(!N) && (0, l.jsx)(r.NF, { id: a }),
                Boolean(P) && (0, l.jsx)(n.Q8, { id: a }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        return (0, l.jsx)("div", {
          className: m().Action,
          onClick: e.fnOnPurchaseOptionsClick,
          children: (0, l.jsx)("span", {
            children: (0, j.we)(
              "#EventDisplay_CallToAction_ShowPurchaseOptions_Button",
            ),
          }),
        });
      }
    },
  },
]);
