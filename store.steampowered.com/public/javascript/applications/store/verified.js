/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6991],
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
    17041: (e, s, a) => {
      "use strict";
      a.d(s, { u: () => l });
      var r = a(7850),
        t = a(40414),
        i = a(3088);
      function l(e) {
        const { strImageToken: s, language: a, strAltText: l } = e,
          n = (0, t.z)(s, a);
        return n
          ? "string" == typeof n
            ? (0, r.jsx)("img", { src: n, alt: l })
            : (0, r.jsx)(i.c, { rgSources: n, strAltText: l })
          : null;
      }
    },
    40414: (e, s, a) => {
      "use strict";
      a.d(s, { z: () => l });
      var r = a(22837),
        t = a(27666),
        i = a(12611);
      function l(e, s, a = 0) {
        return n(e, s, a);
      }
      function n(e, s, a = 0) {
        if (!e || 0 == e.length) return null;
        if (e?.startsWith(i.lw)) return t.z.ReplacementTokenToClanImageURL(e);
        if (e?.startsWith(i.eg)) {
          const l = new Array(),
            n = t.z.GetBaseURL(),
            d = e.substring(i.eg.length + 1),
            c = parseInt(d.substring(0, d.indexOf("/"))),
            o = d.substring(d.indexOf("/") + 1),
            h = t.z.GetHashFromHashAndExt(o),
            u = t.z.GetExtStringFromHashAndExt(o);
          if (null != s) {
            let e = (0, r.Lg)(s);
            l.push(n + c + "/" + h + "/" + e + u + "?t=" + a),
              4 == s &&
                ((e = (0, r.x6)((0, r.Lg)(s))),
                l.push(n + c + "/" + h + "/" + e + u + "?t=" + a));
          }
          return l.push(t.z.GenerateURLFromHashAndExt(c, o)), l;
        }
        return e;
      }
    },
    7221: (e, s, a) => {
      "use strict";
      a.d(s, { pb: () => t, wI: () => r });
      var r;
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(r || (r = {}));
      const t = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
    },
    3577: (e, s, a) => {
      "use strict";
      function r() {
        let e, s;
        return {
          promise: new Promise((a, r) => {
            (e = a), (s = r);
          }),
          resolve: e,
          reject: s,
        };
      }
      a.d(s, { x0: () => r });
    },
    20433: (e, s, a) => {
      "use strict";
      a.d(s, { j: () => m, u: () => p });
      var r = a(7850),
        t = a(90626),
        i = a(45699),
        l = a(55963),
        n = a(60014),
        d = a(49411),
        c = a(61336),
        o = a(52541),
        h = a(8527);
      a(78327);
      function u(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: s,
            hoverClassName: a,
            fnGetIDOverride: i,
            fnHoverState: l,
            children: n,
          } = e,
          d = t.useRef(null),
          c = t.useCallback(
            (e) => {
              const a = u(s);
              a &&
                (l && l(!0),
                window.GameHover &&
                  window.GameHover(i ? i() : d.current, e, "global_hover", {
                    type: a,
                    id: (0, o.G$)(s).id,
                    v6: 1,
                  }));
            },
            [l, i, s],
          ),
          h = t.useCallback(
            (e) => {
              u(s) &&
                (l && e.relatedTarget && l(!1),
                window.HideGameHover &&
                  window.HideGameHover(i ? i() : d.current, e, "global_hover"));
            },
            [s, l, i],
          );
        return (0, r.jsx)("div", {
          ref: d,
          className: a,
          onMouseEnter: c,
          onMouseLeave: h,
          onFocus: c,
          onBlur: h,
          children: n,
        });
      }
      function p(e) {
        const {
            id: s,
            strExtraParams: a,
            fnOnClickOverride: t,
            strOverrideURL: p,
          } = e,
          x = (0, n.n9)(),
          v = (0, d.w)(),
          g = (0, c.NT)(
            p ||
              (s && "creatorid" in s
                ? (0, l.It)(
                    `${h.TS.STORE_BASE_URL}curator/${((0, o.G$))(s).id}${a ? `?${a}` : ""}`,
                    x,
                    v,
                  )
                : (0, l.It)(
                    `${h.TS.STORE_BASE_URL}${u(s)}/${((0, o.G$))(s).id}${a ? `?${a}` : ""}`,
                    x,
                    v,
                  )),
          );
        return (0, r.jsx)(m, {
          ...e,
          children: (0, r.jsx)(i.Ii, {
            className: e.className,
            href: t ? void 0 : g,
            target: h.TS.IN_CLIENT || t ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: t,
            children: e.children,
          }),
        });
      }
    },
    71381: (e, s, a) => {
      "use strict";
      a.d(s, { h: () => n });
      var r = a(7850),
        t = a(52038),
        i = a(66532),
        l = a.n(i);
      function n(e) {
        const {
          capsules_per_row: s,
          is_generic: a,
          is_generic_trailer: i,
          is_event_dash_row: n,
          is_trailer_carousel: d,
          is_spotlights: c,
          is_item_browser: o,
          is_maincap: h,
          is_expanded_maincap: u,
          is_expanded_display: m,
          show_auto_advance_bar: p,
        } = e;
        if (!s) return null;
        if (a)
          return (0, r.jsx)("div", {
            className: l().GhostCtn,
            children: (0, r.jsx)("div", {
              className: l().PlaceholderBox,
              children: (0, r.jsx)("div", { className: l().ShineCtn }),
            }),
          });
        if (i)
          return (0, r.jsx)("div", {
            className: l().GhostCtn,
            children: (0, r.jsx)("div", {
              className: l().PlaceholderVideo,
              children: (0, r.jsx)("div", { className: l().ShineCtn }),
            }),
          });
        if (d)
          return (0, r.jsxs)("div", {
            className: l().GhostCtn,
            children: [
              (0, r.jsxs)("div", {
                className: l().TrailerCarouselRow,
                children: [
                  (0, r.jsx)("div", {
                    className: l().VideoPlaceholder,
                    children: (0, r.jsx)("div", { className: l().ShineCtn }),
                  }),
                  (0, r.jsx)("div", {
                    className: l().ItemDescPlaceholer,
                    children: (0, r.jsx)("div", { className: l().ShineCtn }),
                  }),
                ],
              }),
              p &&
                (0, r.jsx)("div", {
                  className: l().AutoAdvanceBar,
                  children: (0, r.jsx)("div", { className: l().ShineCtn }),
                }),
            ],
          });
        if (n)
          return (0, r.jsx)("div", {
            className: l().GhostCtn,
            children: (0, r.jsxs)("div", {
              className: l().EventRow,
              children: [
                (0, r.jsx)("div", {
                  className: (0, t.A)(
                    l().PlaceholderGroupImage,
                    l().PlaceholderCap,
                  ),
                }),
                (0, r.jsxs)("div", {
                  className: (0, t.A)(l().DetailsPlaceholder),
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderTitle,
                        l().PlaceholderCap,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderSubtitle,
                        l().PlaceholderCap,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderButtons,
                        l().PlaceholderCap,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        if (c)
          return (0, r.jsx)("div", {
            className: l().GhostCtn,
            children: (0, r.jsxs)("div", {
              className: l().SpotlightsRow,
              children: [
                (0, r.jsx)("div", { className: l().PlaceholderCap }),
                (0, r.jsx)("div", { className: l().PlaceholderCap }),
                (0, r.jsxs)("div", {
                  className: l().DailyDealsColumn,
                  children: [
                    (0, r.jsx)("div", { className: l().PlaceholderCap }),
                    (0, r.jsx)("div", { className: l().PlaceholderCap }),
                  ],
                }),
              ],
            }),
          });
        if (h)
          return (0, r.jsx)("div", {
            className: l().GhostCtn,
            children: (0, r.jsxs)("div", {
              className: (0, t.A)({
                [l().MainCapRow]: !0,
                [l().MainCapRowExpanded]: u,
              }),
              children: [
                (0, r.jsx)("div", { className: l().PlaceholderCap }),
                (0, r.jsxs)("div", {
                  className: (0, t.A)(l().DetailsPlaceholder),
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderTitle,
                        l().PlaceholderCap,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderSubtitle,
                        l().PlaceholderCap,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderRelease,
                        l().PlaceholderCap,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderReviews,
                        l().PlaceholderCap,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, t.A)(
                        l().PlaceholderTags,
                        l().PlaceholderCap,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        if (m)
          return (0, r.jsx)("div", {
            className: l().GhostCtn,
            children: (0, r.jsxs)("div", {
              className: l().ExpandedItemRow,
              children: [
                (0, r.jsx)("div", {
                  className: (0, t.A)(
                    l().CapsulePlaceholder,
                    l().PlaceholderCap,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: (0, t.A)(
                    l().ItemDefPlaceholder,
                    l().PlaceholderCap,
                  ),
                }),
              ],
            }),
          });
        if (o) {
          const e = [];
          for (let a = 0; a < s[0]; a++)
            e.push(
              (0, r.jsx)(
                "div",
                {
                  className: l().ItemBrowserCapsule,
                  children: (0, r.jsx)("div", {
                    className: l().PlaceholderCap,
                  }),
                },
                "item_browse_ghost_" + a,
              ),
            );
          return (0, r.jsx)("div", { className: l().GhostCtn, children: e });
        }
        return 1 == s?.length
          ? 1 == s[0]
            ? (0, r.jsx)("div", {
                className: l().GhostCtn,
                children: (0, r.jsx)("div", {
                  className: l().CapsuleRowSuperCapsule,
                  children: (0, r.jsx)("div", {
                    className: l().PlaceholderCap,
                  }),
                }),
              })
            : 4 == s[0]
              ? (0, r.jsx)("div", {
                  className: l().GhostCtn,
                  children: (0, r.jsxs)("div", {
                    className: l().CapsuleRow4,
                    children: [
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                    ],
                  }),
                })
              : (0, r.jsx)("div", {
                  className: l().GhostCtn,
                  children: (0, r.jsxs)("div", {
                    className: l().CapsuleRow3,
                    children: [
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      (0, r.jsx)("div", { className: l().PlaceholderCap }),
                    ],
                  }),
                })
          : 2 == s?.length
            ? 3 == s[0] && 3 == s[1]
              ? (0, r.jsx)("div", {
                  className: l().GhostCtn,
                  children: (0, r.jsxs)("div", {
                    className: l().CapsuleRow23,
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, t.A)(l().CapRow, l().Caps3),
                        children: [
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: (0, t.A)(l().CapRow, l().Caps3),
                        children: [
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, r.jsx)("div", {
                  className: l().GhostCtn,
                  children: (0, r.jsxs)("div", {
                    className: l().CapsuleRow23,
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, t.A)(l().CapRow, l().Caps2),
                        children: [
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: (0, t.A)(l().CapRow, l().Caps3),
                        children: [
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                          (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        ],
                      }),
                    ],
                  }),
                })
            : (0, r.jsx)("div", {
                className: l().GhostCtn,
                children: (0, r.jsxs)("div", {
                  className: l().CapsuleRow234,
                  children: [
                    (0, r.jsxs)("div", {
                      className: (0, t.A)(l().CapRow, l().Caps2),
                      children: [
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: (0, t.A)(l().CapRow, l().Caps3),
                      children: [
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: (0, t.A)(l().CapRow, l().Caps4),
                      children: [
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                        (0, r.jsx)("div", { className: l().PlaceholderCap }),
                      ],
                    }),
                  ],
                }),
              });
      }
    },
    25698: (e, s, a) => {
      "use strict";
      a.d(s, { S: () => l });
      var r = a(7850),
        t = a(3946),
        i = a(90626);
      function l(e) {
        let { children: s } = e;
        const [a, l] = (0, i.useState)(0.8),
          [n, d] = (0, i.useState)(!0);
        return (0, r.jsx)(t.v, {
          playerVolume: a,
          setPlayerVolume: l,
          audioMuted: n,
          setAudioMuted: d,
          children: s,
        });
      }
    },
    24704: (e, s, a) => {
      "use strict";
      a.d(s, { T: () => k });
      var r = a(7850),
        t = a(71381),
        i = a(20433),
        l = a(94191),
        n = a(78588),
        d = a(94636),
        c = a(90421),
        o = a(24267),
        h = a(12424),
        u = a(96006),
        m = a(8893),
        p = a(55672),
        x = a(5309),
        v = a(39777),
        g = a(14987),
        j = a(60014),
        _ = a(75844),
        C = a(90626),
        f = a(35380),
        N = a(55963),
        S = a(2921),
        A = a(18654),
        P = a.n(A),
        b = a(52541),
        w = a(90740),
        R = a(41399);
      function E(e) {
        const {
            id: s,
            bPurchaseOptionsExpanded: a,
            fnCollapseOptions: t,
            bPreferAssetWithoutOverride: i,
          } = e,
          { data: l } = (0, v.is)(s),
          n = (0, C.useRef)(null);
        if (!l) return null;
        const d = l.purchase_options;
        return d
          ? (0, r.jsx)(w.A, {
              nodeRef: n,
              in: a,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 2e3,
              classNames: {
                enterActive: P().Expanding,
                enterDone: P().Expanded,
                exit: P().Expanded,
                exitActive: P().Collapsing,
              },
              children: (0, r.jsxs)("div", {
                ref: n,
                className: P().BundleContentsCtnTransition,
                children: [
                  (0, r.jsx)("div", {
                    className: P().BundleContentsCtn,
                    children: d
                      .filter((e) => Boolean(e.packageid))
                      .map((e) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: P().BundleContentItem,
                            children: (0, r.jsx)(R.p, {
                              id: e.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: i,
                            }),
                          },
                          "purchaseitem_" + (0, b.ER)(s) + "_" + e.packageid,
                        ),
                      ),
                  }),
                  (0, r.jsx)("div", {
                    onClick: t,
                    className: P().BundleShowButton,
                    children: (0, r.jsx)("button", {
                      className: P().ShowContentsButton,
                      children: p.Z.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var L = a(94095),
        G = a(70300),
        T = a(73371),
        I = a.n(T),
        B = a(54492),
        D = a(52038);
      const k = (0, _.PA)((e) => {
        const { id: s, type: a } = e,
          _ = (0, f.zl)(s, a),
          {
            bHidePrice: A,
            bShowDemoButton: b,
            bPreferDemoStorePage: w,
            bShowPurchaseOptionsButton: R,
            bUseSubscriptionLayout: T,
            bPreferAssetWithoutOverride: k,
          } = e,
          [O, y] = C.useState(!1),
          H = () => y(!O),
          { data: W } = (0, v.U2)(_),
          { data: M } = (0, v.wl)(_),
          { data: F } = (0, v.by)(_),
          { data: U } = (0, v.xz)(_),
          z = (0, g._)(_),
          V = (0, j.n9)();
        if (!W || !M)
          return (0, r.jsx)(t.h, {
            capsules_per_row: [1],
            is_expanded_display: !0,
          });
        const K = (0, N.L3)(V),
          $ = 0 == W.item_type;
        return (0, r.jsx)("div", {
          className: (0, D.A)(
            P().StoreSaleWidgetContainer,
            P().LibraryAssetExpandedDisplay,
            "LibraryAssetExpandedDisplay",
          ),
          children: (0, r.jsxs)(G.oj, {
            appid: $ ? W.appid : void 0,
            children: [
              (0, r.jsxs)("div", {
                className: P().StoreSaleWidgetLibraryAssetExtendedTop,
                children: [
                  (0, r.jsx)("div", {
                    className: (0, D.A)(P().StoreSaleWidgetLeft),
                    children: (0, r.jsx)(i.u, {
                      id: _,
                      bPreferDemoStorePage: w,
                      children: (0, r.jsxs)("div", {
                        className: P().StoreSaleWidgetImage,
                        children: [
                          (0, r.jsx)(l.V, { appids: z }),
                          (0, r.jsx)(n.a, {
                            id: _,
                            imageType: "library",
                            bPreferAssetWithoutOverride: k,
                          }),
                          (0, r.jsx)(B.J, { id: _ }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: P().StoreSaleWidgetCrossCenterRight,
                    children: [
                      $ &&
                        (0, r.jsx)(d.E, {
                          id: _,
                          classOverride: (0, D.A)(
                            I().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: K,
                        }),
                      (0, r.jsxs)("div", {
                        className: P().StoreSaleWidgetContents,
                        children: [
                          (0, r.jsxs)("div", {
                            className: P().StoreSaleWidgetCenter,
                            children: [
                              M.short_description &&
                                M.short_description.length > 0 &&
                                (0, r.jsx)("div", {
                                  className: (0, D.A)(
                                    P().StoreSaleWidgetShortDesc,
                                    "StoreSaleWidgetShortDesc",
                                  ),
                                  children: M.short_description,
                                }),
                              (0, r.jsx)(c.n, {
                                rgTagIDs: U
                                  ? U.slice(0, 10).map((e) => e.tagid || 0)
                                  : [],
                                instanceNum: 0,
                                bNoStoreLinks: !1,
                              }),
                              (0, r.jsxs)("div", {
                                className: P().StoreMetaDataCtn,
                                children: [
                                  (0, r.jsx)("div", {
                                    className: P().StoreSaleItemRelease,
                                    children: p.Z.LocalizeReact(
                                      "#Sale_ReleaseDate",
                                      (0, r.jsx)("span", {
                                        children: (0, x.CC)(F),
                                      }),
                                    ),
                                  }),
                                  M.developers &&
                                    M.developers.length > 0 &&
                                    (0, r.jsxs)("div", {
                                      className: P().StoreSaleItemDev,
                                      children: [
                                        p.Z.Localize(
                                          "#CreatorHome_DevelopedBy",
                                        ),
                                        (0, r.jsx)("span", {
                                          children: M.developers[0].name,
                                        }),
                                      ],
                                    }),
                                  M.publishers &&
                                    M.publishers.length > 0 &&
                                    (0, r.jsxs)("div", {
                                      className: P().StoreSaleItemDev,
                                      children: [
                                        p.Z.Localize(
                                          "#CreatorHome_PublishedBy",
                                        ),
                                        (0, r.jsx)("span", {
                                          children: M.publishers[0].name,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: P().StoreSaleLibraryAssetWidgetRight,
                            children: (0, r.jsx)(S.Yg, {
                              id: _,
                              bPopOutTrailerPlayback: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: P().StoreSaleItemReview,
                        children: (0, r.jsx)(o.J, { id: _ }),
                      }),
                      (0, r.jsx)("div", {
                        className: P().CapsuleBottomBar,
                        children:
                          T && $
                            ? (0, r.jsx)(h.E, { appid: W.appid, bIsMuted: !1 })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(u.Q, { id: _ }),
                                  (0, r.jsx)(L.w, {
                                    id: _,
                                    bShowDemoButton: b,
                                    bHidePrice: A,
                                    bShowPurchaseOptionsButton: R,
                                    fnOnPurchaseOptionsClick: H,
                                    bHideWishlistButton: W.is_coming_soon,
                                  }),
                                ],
                              }),
                      }),
                      (0, r.jsxs)("div", {
                        className: P().StoreSaleWidgetBgTint,
                        children: [
                          (0, r.jsx)(m.G, {
                            id: _,
                            bPreferAssetWithoutOverride: k,
                          }),
                          (0, r.jsx)(B.J, { id: _ }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(E, {
                id: _,
                bPurchaseOptionsExpanded: O,
                fnCollapseOptions: H,
                bPreferAssetWithoutOverride: k,
              }),
            ],
          }),
        });
      });
    },
    12611: (e, s, a) => {
      "use strict";
      a.d(s, { eg: () => t, lw: () => r, qR: () => i });
      const r = "{STEAM_CLAN_IMAGE}",
        t = "{STEAM_CLAN_LOC_IMAGE}",
        i = "{STEAM_APP_IMAGE}";
    },
    27666: (e, s, a) => {
      "use strict";
      a.d(s, { z: () => u });
      var r = a(7221),
        t = a(22837),
        i = a(3577),
        l = a(12611),
        n = a(17720),
        d = a(81393),
        c = a(68797),
        o = a(82817),
        h = a(8527);
      const u = {
        GetBaseURL: () => `${h.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${h.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(l.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const s =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^\.]*)$/.exec(
              e,
            );
          return s?.groups
            ? [s.groups.filename, parseInt(s.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, o.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let s = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - s.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GenerateURLFromHashAndExt(e, s, a = r.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(e, s, a, -1, void 0);
        },
        GenerateURLFromHashAndExtAndLang(e, s, a = r.wI.full, i, l) {
          e instanceof n.b && (e = e.GetAccountID());
          let d = this.GetBaseURL();
          const c = null != i && -1 != i;
          if (a != r.wI.full || c) {
            let r = s.substring(s.lastIndexOf(".")),
              n = s.substring(0, s.length - r.length);
            return c && 0 != i && "localized_image_group" == l
              ? d + e + "/" + n + "/" + (0, t.x6)((0, t.Lg)(i)) + r
              : d + e + "/" + n + a + r;
          }
          return d + e + "/" + s;
        },
        GetHashAndExtFromURL(e) {
          let s = this.GetBaseURL();
          return e?.startsWith(s)
            ? -1 == (e = e.substring(s.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, s, a) {
          let r =
            h.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            s;
          return a && (r += "&lang=" + a), r;
        },
        GetMimeType: (e) => (0, o.ab)(e),
        async AsyncGetImageResolution(e, s, a, r, t) {
          const i = s + this.GetExtensionString({ file_type: a }),
            l = this.GenerateEditableURLFromHashAndExt(e, i);
          return await this.AsyncGetImageResolutionInternal(l, r, t);
        },
        async AsyncGetImageResolutionInternal(e, s, a) {
          const r = (0, i.x0)();
          let t = new Image();
          (t.crossOrigin = "anonymous"),
            (t.onerror = (s) => {
              const t = { success: 2 };
              a ||
                ((t.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, c.H)(s).strErrorMsg),
                console.error(t.err_msg)),
                (t.success = 2),
                r.resolve(t);
            }),
            (t.onload = () => {
              const s = { success: 2 };
              (s.width = t.width),
                (s.height = t.height),
                (0, d.wT)(
                  s.width > 0 && s.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (s.success = 1),
                r.resolve(s);
            }),
            (t.src = e),
            s.token.promise.catch(() => {
              const e = { success: 2 };
              return (t.onload = () => {}), (e.success = 52), e;
            });
          const l = new Promise((e, s) => setTimeout(() => s(), 1e4));
          let n;
          try {
            n = await Promise.race([l, r.promise]);
          } catch {
            n = { success: 16, err_msg: "We timed out processing images" };
          }
          return n;
        },
        BIsClanImageVideo: (e) => 4 == e.file_type || 5 == e.file_type,
      };
    },
    82817: (e, s, a) => {
      "use strict";
      a.d(s, {
        EG: () => i,
        II: () => h,
        Uz: () => c,
        aL: () => d,
        ab: () => t,
        zB: () => o,
      });
      var r = a(3577);
      function t(e) {
        const s = e.toLowerCase();
        return s.endsWith(".jpg") || s.endsWith(".jpeg")
          ? "image/jpeg"
          : s.endsWith(".png")
            ? "image/png"
            : s.endsWith(".gif")
              ? "image/gif"
              : s.endsWith(".mp4")
                ? "video/mp4"
                : s.endsWith(".webm")
                  ? "video/webm"
                  : s.endsWith(".srt")
                    ? "text/srt"
                    : s.endsWith(".vtt")
                      ? "text/vtt"
                      : s.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function i(e) {
        switch (e) {
          case 1:
            return ".jpg";
          case 2:
            return ".gif";
          case 3:
            return ".png";
          case 5:
            return ".webm";
          case 4:
            return ".mp4";
          case 7:
            return ".srt";
          case 6:
            return ".vtt";
          case 10:
            return ".webp";
        }
      }
      function l(e) {
        const s = (0, r.x0)(),
          a = new Image();
        return (
          (a.onload = () => s.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              s.resolve(void 0);
          }),
          (a.src = e),
          s.promise
        );
      }
      function n(e) {
        const s = (0, r.x0)(),
          a = document.createElement("video");
        return (
          (a.preload = "metadata"),
          a.addEventListener("loadedmetadata", () => s.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              s.resolve(void 0);
          }),
          (a.src = e),
          s.promise
        );
      }
      function d(e) {
        return e.startsWith("image/");
      }
      function c(e) {
        return e.startsWith("video/");
      }
      async function o(e, s) {
        if (s) return n(URL.createObjectURL(e));
        {
          const s = (0, r.x0)(),
            a = new FileReader();
          (a.onload = () => s.resolve(a.result ?? void 0)),
            (a.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                a.error,
              ),
                s.resolve(void 0);
            }),
            a.readAsDataURL(e);
          const t = await s.promise;
          if (!t) return;
          return l(t.toString());
        }
      }
      function h(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
    3088: (e, s, a) => {
      "use strict";
      a.d(s, { c: () => i });
      var r = a(7850),
        t = a(90626);
      function i(e) {
        const {
            rgSources: s,
            onIncrementalError: a,
            onError: i,
            strAltText: l,
            ref: n,
            ...d
          } = e,
          c = t.useRef(null),
          [o, h] = t.useState(0),
          [u, m] = t.useState(0);
        t.useImperativeHandle(
          n,
          () => ({ imgRef: c, nSourceIndex: o, nSourceLength: s.length }),
          [c, o, s],
        );
        const p = t.useMemo(() => JSON.stringify(s), [s]);
        t.useEffect(() => {
          h(0), m((e) => e + 1);
        }, [p]);
        const x = t.useMemo(() => {
            let a = "";
            return (
              s && s.length > o && (a = s[o]),
              a ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  o,
                ),
                (a =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              a
            );
          }, [s, o, e]),
          v = t.useCallback(
            (e) => {
              a?.(e, s[o], o);
              const r = o + 1;
              r >= s.length && i && i(e), r < s.length && h(r);
            },
            [o, i, a, s],
          );
        return (0, r.jsx)(
          "img",
          { ref: c, ...d, src: x, onError: v, alt: l },
          u,
        );
      }
    },
    108: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => D });
      var r = a(7850),
        t = a(17041),
        i = a(22837),
        l = a(45699),
        n = a(8527),
        d = a(62151),
        c = a(41399),
        o = a(10224),
        h = a(78327),
        u = a(24704);
      function m(e) {
        return (0, h.Qn)()
          ? (0, r.jsx)(c.p, { ...e })
          : (0, o.c5)()
            ? (0, r.jsx)(c.p, { ...e, bShowReviewSummary: !0 })
            : (0, r.jsx)(u.T, { ...e });
      }
      var p = a(42834),
        x = a(52471),
        v = a(39777),
        g = a(60014),
        j = a(44433),
        _ = a(90626),
        C = a(35380),
        f = a(84811),
        N = a(25698),
        S = a(32630),
        A = a(52038),
        P = a(37882),
        b = a.n(P);
      function w(e) {
        const { appid: s, strUrlOverride: a } = e,
          t = (0, C.$5)(s),
          { data: i } = (0, v.J$)(t);
        return (
          (0, _.useEffect)(() => {
            if (i) {
              const e = `${n.TS.STORE_BASE_URL}${i.store_url_path}`.replace(
                "/app/",
                a ?? "/verified/",
              );
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [i, a]),
          i && t
            ? (0, r.jsx)(S.Ay, {
                method: "verifiedprogram",
                children: (0, r.jsx)(f.tH, {
                  children: (0, r.jsx)(E, { id: t }),
                }),
              })
            : null
        );
      }
      function R(e) {
        const { id: s } = e,
          { data: a } = (0, v.J$)(s),
          t = `${n.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: b().Headline,
              children: d.F5.LocalizeReact(
                "#VerifiedProgram_DeckTitle",
                a?.name,
                (0, r.jsxs)("span", {
                  className: b().Verified,
                  children: [
                    (0, r.jsx)("img", {
                      src: t,
                      alt: d.F5.Localize("#VerifiedProgram_DeckAlt"),
                    }),
                    d.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                  ],
                }),
              ),
            }),
            (0, r.jsx)("div", {
              className: b().Subtitle,
              children: d.F5.LocalizeReact(
                "#VerifiedProgram_DeckSubTitle",
                (0, r.jsx)(l.Ii, {
                  className: b().Link,
                  href: `${n.TS.STORE_BASE_URL}greatondeck`,
                  children: d.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                }),
              ),
            }),
          ],
        });
      }
      function E(e) {
        const { id: s } = e;
        return (0, r.jsxs)("div", {
          className: b().Ctn,
          children: [
            (0, r.jsx)(L, { id: s }),
            (0, r.jsxs)("div", {
              className: (0, A.A)("page_content"),
              children: [
                (0, r.jsx)(R, { id: s }),
                (0, r.jsx)(I, { id: s }),
                (0, r.jsx)(G, { id: s }),
                (0, r.jsx)(T, {}),
              ],
            }),
          ],
        });
      }
      function L(e) {
        const { id: s } = e,
          { data: a } = (0, v.lv)(s);
        if (!a) return null;
        const t =
          (0, p.b0)(a, "library_hero_2x") ?? (0, p.b0)(a, "library_hero");
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: b().BackgroundImageCtn,
              children: (0, r.jsx)("img", { src: t, alt: "" }),
            }),
            (0, r.jsx)("div", {
              className: b().BackgroundImageBlurCtn,
              children: (0, r.jsx)("img", { src: t, alt: "" }),
            }),
          ],
        });
      }
      function G(e) {
        const { id: s } = e;
        return (0, r.jsx)("div", {
          className: b().CapsuleWrapper,
          children: (0, r.jsx)(m, {
            id: "appid" in s ? s.appid : 0,
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function T(e) {
        const s = (0, g.aL)(
          `${n.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
          "banner",
        );
        return (0, r.jsx)(l.Ii, {
          href: s,
          className: (0, A.A)(b().HardwareBannerCtn),
          children: (0, r.jsx)(B, {}),
        });
      }
      function I(e) {
        const { id: s } = e,
          { data: a } = (0, v.J$)(s),
          t = (0, x.TH)(s);
        if (!t) return null;
        const i = `${n.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
          { rgDashTrailers: l, rgHlsTrailers: c } = (0, x.hg)(t);
        return (0, r.jsxs)("div", {
          className: b().DeviceFullWidthShadow,
          children: [
            (0, r.jsxs)("div", {
              className: (0, A.A)(b().DeviceWrapper),
              children: [
                (0, r.jsx)(N.S, {
                  children: (0, r.jsx)("div", {
                    className: b().TrailerCtn,
                    children: (0, r.jsx)(j.P, {
                      dashManifests: l,
                      hlsManifest: c[0],
                      screenshot:
                        t.screenshot_full ?? t.screenshot_medium ?? "",
                      altText: a?.name ?? "",
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                }),
                (0, r.jsx)("img", {
                  src: i,
                  alt: d.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: b().VideoDisclaimer,
              children: d.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
            }),
          ],
        });
      }
      function B(e) {
        const s = (0, o.zI)(),
          a = (0, i.sf)(n.TS.LANGUAGE);
        return (0, r.jsx)(t.u, {
          language: a,
          strAltText: d.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
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
        return (0, r.jsx)(w, { appid: Number.parseInt(s) });
      }
    },
  },
]);
