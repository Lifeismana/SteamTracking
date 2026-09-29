/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [54409],
  {
    38081: (e) => {
      e.exports = {
        WishlistButtonNotTop: "_1l9DUAcf-usX0U1ouPwOjD",
        FollowGameButtonNotTop: "_2b03GmrQ6fQLOqbsKO2GA7",
      };
    },
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
    81886: (e, a, s) => {
      "use strict";
      s.d(a, { fp: () => i, vm: () => d });
      var l = s(8747);
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
    85862: (e, a, s) => {
      "use strict";
      s.d(a, { w: () => C });
      var l = s(7850),
        i = s(81886),
        d = s(8747),
        t = s(39777),
        r = s(58918),
        c = s(54906),
        o = s(6181),
        n = s(76532),
        h = s.n(n),
        p = s(26408),
        m = s(52038),
        u = s(61859),
        x = s(91675),
        j = s(55509),
        _ = s(3740),
        v = s(48123);
      function C(e) {
        const {
            id: a,
            bShowDemoButton: s,
            bShowPurchaseOptionsButton: n,
            fnOnPurchaseOptionsClick: C,
            bHidePrice: P,
            bShowDeckCompatibilityDialog: f,
            eHardwareCompatibilityDisplay: S,
            className: w,
            bShowCartButton: g,
          } = e,
          { data: b } = (0, t.J$)(a),
          { data: R } = (0, t.by)(a),
          { data: A } = (0, t.Q_)(a),
          { bIsOwned: y } = (0, r.ZJ)(a),
          [B, D] = (0, v.zG)(f, S);
        if (!b) return null;
        const E =
            (b.type === d.uE.ue && !R?.is_coming_soon) ||
            (b.related_items?.demo_appid &&
              b.related_items?.demo_appid.length > 0),
          k = (0, i.vm)(b.type),
          O = s && k && E;
        let W = null;
        if (!y && A?.is_free_to_keep && A?.free_to_keep_ends) {
          const e = A.free_to_keep_ends,
            a = (0, u.we)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, u.$z)(e) + " @ " + (0, x.KC)(e, { bForce24HourClock: !1 }),
            );
          W = (0, l.jsxs)("div", {
            className: h().PurchaseOptionDetails,
            children: [
              a,
              (0, l.jsx)(p.o, {
                tooltip: (0, u.we)(
                  "#Sale_default_Tooltip_Free_Promo_Limitation",
                ),
              }),
            ],
          });
        }
        return (0, l.jsxs)("div", {
          className: (0, m.A)(h().StoreActionWidgetContainer, w),
          children: [
            W,
            (0, l.jsxs)("div", {
              className: h().StoreSalePriceActionWidgetContainer,
              children: [
                Boolean(O) && (0, l.jsx)(j.j, { id: a, className: h().Action }),
                Boolean(!P) &&
                  b.type !== d.uE.ue &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      Boolean(n && !b.is_free) &&
                        (0, l.jsx)(N, { fnOnPurchaseOptionsClick: C }),
                      Boolean(g && !b.is_free) &&
                        (0, l.jsx)(o.h, { id: a, className: "CartBtn" }),
                    ],
                  }),
                Boolean(!P) && (0, l.jsx)(_.NF, { id: a }),
                B && (0, l.jsx)(c.Pj, { id: a, compatibility: D }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        return (0, l.jsx)("div", {
          className: h().Action,
          onClick: e.fnOnPurchaseOptionsClick,
          children: (0, l.jsx)("span", {
            children: (0, u.we)(
              "#EventDisplay_CallToAction_ShowPurchaseOptions_Button",
            ),
          }),
        });
      }
    },
    22623: (e, a, s) => {
      "use strict";
      s.d(a, { p: () => Y });
      var l = s(7850),
        i = s(45699),
        d = s(76217),
        t = s(23310),
        r = s(8747),
        c = s(80696),
        o = s(62349),
        n = s(5309),
        h = s(30020),
        p = s(39777),
        m = s(14987),
        u = s(52541),
        x = s(60014),
        j = s(58918),
        _ = s(90626),
        v = s(93341),
        C = s(76532),
        N = s.n(C),
        P = s(38081),
        f = s.n(P),
        S = s(54492),
        w = s(52038),
        g = s(61859),
        b = s(78327),
        R = s(24267),
        A = s(94636),
        y = s(29008),
        B = s(76682),
        D = s(78686),
        E = s(42834);
      const k = 6;
      function O(e) {
        const { id: a, bHideInLibraryApps: s } = e,
          { data: i } = (0, p.J$)(a),
          d = i?.item_type == r.c6.xO,
          { data: t } = (0, j.$Y)(),
          c = _.useMemo(() => {
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
        let n = D.Z.LocalizePlural("#Sale_ContentPreview", o);
        if (d && i) {
          const e = i.included_appids?.length || 0;
          e != o &&
            (n = D.Z.Localize("#Sale_Bundle_CompletePartialSet", e - o, e));
        }
        return (0, l.jsxs)("div", {
          className: N().BundleContentPreview,
          children: [
            (0, l.jsxs)("div", {
              className: N().ContentsCount,
              children: [
                d &&
                  (0, l.jsx)("span", {
                    className: N().BundleTag,
                    children: D.Z.Localize("#AppType_bundle"),
                  }),
                n,
              ],
            }),
            (0, l.jsx)("div", {
              className: N().PreviewCtn,
              children: c
                .slice(0, k)
                .map((e) => (0, l.jsx)(W, { id: e }, `preview${(0, u.ER)(e)}`)),
            }),
          ],
        });
      }
      function W(e) {
        const { id: a } = e,
          { data: s } = (0, p.f2)(a),
          { data: i } = (0, p.U2)(a);
        if (!s || !i) return null;
        const d = (0, E.b0)(s, "small_capsule");
        return (0, l.jsx)(y.Q, {
          id: a,
          className: N().PreviewItem,
          hoverProps: { direction: "right", style: { minWidth: "350px" } },
          children: (0, l.jsx)("img", {
            src: d,
            className: N().PreviewImg,
            loading: "lazy",
            alt: i.name || "",
          }),
        });
      }
      var H = s(96006),
        I = s(3740),
        T = s(94191),
        L = s(71381),
        M = s(9006),
        F = s(75233),
        z = s(90421);
      function G(e) {
        const { id: a } = e;
        return a ? (0, l.jsx)(Q, { id: a }) : null;
      }
      function Q(e) {
        const { id: a } = e,
          s = (function (e) {
            const [a, s] = (0, _.useState)(void 0),
              { data: l } = (0, p.J$)(e),
              { data: i } = (0, p.xz)(e),
              d = (0, F.jE)(),
              t = (0, M.eG)();
            return (
              (0, _.useEffect)(() => {
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
              className: N().StoreSaleWidgetTags,
              children: s
                .slice(0, 10)
                .map((e) =>
                  (0, l.jsx)(
                    z.p,
                    { tagid: e.tagid, className: N().AppTag },
                    "tag_" + e.tagid,
                  ),
                ),
            })
          : null;
      }
      var U = s(12424),
        q = s(51078),
        K = s(78588),
        X = s(85862),
        Z = s(79619),
        V = s(48123);
      function Y(e) {
        const {
            id: a,
            type: s,
            bShowDemoButton: n,
            bPreferDemoStorePage: C,
            bHidePrice: P,
            bUseSubscriptionLayout: g,
            bHidePlatforms: y,
            bHideContainedApps: D,
            bAllowTwoLinesForHeader: E,
            bShowReviewSummary: k,
            bShowDeckCompatibilityDialog: W,
            eHardwareCompatibilityDisplay: M,
            bAutoFocus: F,
            fnOnClickOverride: z,
            bIsMarketingMessage: Q,
            bPreferAssetWithoutOverride: Y,
          } = e,
          ae = (0, B.zl)(a, s),
          [se, le] = (0, _.useState)(!1),
          ie = (0, x.n9)(),
          { data: de, isPending: te } = (0, p.U2)(ae),
          { data: re } = (0, p.Q_)(ae),
          { data: ce } = (0, p.by)(ae),
          { data: oe } = (0, j.$Y)(),
          ne = (0, m._Z)(ae),
          he = (0, _.useRef)(null),
          [pe, me] = (0, _.useState)(!1),
          ue = (0, b.Qn)();
        (0, _.useEffect)(() => {
          he.current && me(he.current.offsetWidth < 370);
        }, [he]);
        const xe = (0, _.useMemo)(
            () => (C && de && (0, o.J)(de) ? { appid: (0, o.S)(de)[0] } : ae),
            [C, ae, de],
          ),
          { strStoreURL: je, snr: _e } = (0, q.x)(de, C);
        if (!de)
          return te
            ? (0, l.jsx)(L.h, { capsules_per_row: [1], is_item_browser: !0 })
            : null;
        const ve = de.included_appids?.length || 0,
          Ce = de.included_appids?.filter((e) => oe?.has(e))?.length || 0,
          Ne = de.item_type == r.c6.xO && Boolean(re?.must_purchase_as_set),
          Pe = Boolean(!D && ve > 1),
          fe = de.item_type == r.c6.RD && 1 == ve,
          Se = de.item_type == r.c6.qI || fe,
          we = fe && de.appid,
          ge = de.name || "",
          be = (0, h.Nq)(ce, re),
          Re = ue || !ce?.is_coming_soon || be,
          [Ae, ye] = (0, V.zG)(W, M);
        return (0, l.jsxs)(d.Z, {
          className: (0, w.A)({
            [N().StoreSaleWidgetOuterContainer]: !0,
            [N().AllowTwoLineHeader]: E,
            StoreSaleWidgetOuterContainer: !0,
          }),
          "flow-children": "grid",
          navEntryPreferPosition: t.iU.PREFERRED_CHILD,
          autoFocus: F,
          navKey: "preview_widget_" + (0, u.ER)(ae),
          children: [
            (0, l.jsx)(V.oj, {
              appid: Se && "appid" in ae ? ae.appid : void 0,
              children: (0, l.jsxs)(i.ml, {
                onClick: Q ? z : void 0,
                className: (0, w.A)({
                  [N().StoreSaleWidgetContainer]: !0,
                  [N().SaleItemDefaultCapsuleDisplay]: !0,
                  [N().MarketingMessage]: Q,
                }),
                ...(0, Z.S)(de, ie, ue, Boolean(C), void 0, z),
                preferredFocus: Pe,
                children: [
                  (0, l.jsx)("div", {
                    className: (0, w.A)(N().StoreSaleWidgetHalfLeft),
                    children: (0, l.jsx)(J, {
                      id: xe,
                      strURL: je,
                      children: (0, l.jsxs)("div", {
                        className: N().StoreSaleWidgetImage,
                        children: [
                          (0, l.jsx)(T.V, { appids: ne }),
                          (0, l.jsx)(K.a, {
                            id: ae,
                            imageType: "header",
                            bPreferAssetWithoutOverride: Y,
                          }),
                          (0, l.jsx)(S.J, { id: ae }),
                          (0, l.jsx)(c.mj, {
                            id: ae,
                            active: ae && se,
                            bIsHoverMode: !0,
                            eGrowOnActivate: c.C0.k_ETrailerGrowAmount_Medium,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: (0, w.A)({
                      [N().StoreSaleWidgetRight]: !0,
                      [N().Bundle]: Pe,
                    }),
                    children: [
                      Boolean(Se && !z) &&
                        (0, l.jsx)(A.E, {
                          id: ae,
                          classOverride: (0, w.A)(
                            f().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: _e,
                        }),
                      (0, l.jsx)("div", {
                        className: N().TitleCtn,
                        children: (0, l.jsx)("a", {
                          href: z ? void 0 : je,
                          target: b.TS.IN_CLIENT ? void 0 : "_blank",
                          onClick: z,
                          children: (0, l.jsx)("div", {
                            className: (0, w.A)(
                              N().StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle",
                            ),
                            children: ge,
                          }),
                        }),
                      }),
                      !Pe && (0, l.jsx)(G, { id: ae }),
                      (0, l.jsxs)("div", {
                        className: N().WidgetReleaseDateAndPlatformCtn,
                        ref: he,
                        children: [
                          Se && (0, l.jsx)($, { id: ae }),
                          !Pe &&
                            !y &&
                            ae &&
                            (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(H.Q, {
                                  id: ae,
                                  bMinimizePlatforms: pe,
                                  bHideWindows: pe,
                                }),
                                Boolean(Ae && de.item_type == r.c6.qI) &&
                                  (0, l.jsx)(v.oc, {
                                    eHWCompat: ye,
                                    className: N().DeckCompatIcon,
                                    id: ae,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      !Pe &&
                        k &&
                        ae &&
                        (0, l.jsx)("div", {
                          className: N().ReviewScores,
                          children: (0, l.jsx)(R.J, { id: ae }),
                        }),
                      Pe &&
                        ae &&
                        (0, l.jsx)(O, {
                          id: ae,
                          bHideInLibraryApps:
                            !Ne && de.item_type == r.c6.xO && Ce < ve,
                        }),
                      Boolean(Se) && (0, l.jsx)(ee, { id: ae }),
                      Boolean(!z)
                        ? (0, l.jsx)(l.Fragment, {
                            children:
                              g && Se && we
                                ? (0, l.jsx)(U.E, {
                                    appid: we,
                                    bIsMuted: Boolean(se),
                                  })
                                : (0, l.jsx)(X.w, {
                                    id: ae,
                                    bShowDemoButton: n,
                                    bHidePrice: P,
                                    bHideWishlistButton: Re,
                                    eHardwareCompatibilityDisplay: ye,
                                  }),
                          })
                        : (0, l.jsx)("div", {
                            className: N().StoreActionWidgetContainer,
                            children: (0, l.jsx)("div", {
                              className:
                                N().StoreSalePriceActionWidgetContainer,
                              children: (0, l.jsx)(I.NF, { id: ae }),
                            }),
                          }),
                      (0, l.jsx)("div", {
                        className: N().StoreSaleWidgetBgTint,
                        children: (0, l.jsx)(K.a, {
                          id: ae,
                          bPreferAssetWithoutOverride: Y,
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
                className: N().RecommendationReason,
                children: e.strReason,
              }),
          ],
        });
      }
      function J(e) {
        const { id: a, strURL: s, children: i } = e;
        return "appid" in a
          ? (0, l.jsxs)(y.Q, { id: a, children: [i, " "] })
          : (0, l.jsx)("a", { href: s, children: i });
      }
      function $(e) {
        const { id: a } = e,
          { data: s } = (0, p.by)(a);
        return s
          ? (0, l.jsx)("div", {
              className: N().StoreSaleWidgetRelease,
              children: (0, n.CC)(s),
            })
          : null;
      }
      function ee(e) {
        const { id: a } = e,
          { data: s } = (0, p.U2)(a),
          { data: i } = (0, p.Q_)(a),
          { data: d } = (0, p.wl)(a),
          { data: t } = (0, j.$Y)();
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
                ? (0, g.we)("#Sale_Bundle_CompletePartialSet", n, o)
                : c > 0
                  ? (0, g.we)("#Sale_BundleSave_WithDiscount", c, o)
                  : (0, g.we)("#Sale_BundleSave", o)),
          (0, l.jsx)("div", {
            className: (0, w.A)(
              N().StoreSaleWidgetShortDesc,
              "StoreSaleWidgetShortDesc",
            ),
            children: Boolean(h.startsWith("#") && -1 == h.indexOf(" "))
              ? (0, l.jsx)("span", {
                  className: N().LocalizationSpan,
                  children: (0, g.oW)(
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
  },
]);
