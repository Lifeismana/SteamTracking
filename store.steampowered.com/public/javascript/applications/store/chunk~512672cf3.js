/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [10385],
  {
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
    2921: (e, a, t) => {
      "use strict";
      t.d(a, { PE: () => D, qP: () => B, Yg: () => I });
      var r = t(7850),
        s = t(76217),
        n = t(86927),
        i = t(42834),
        l = t(52471),
        o = t(39777),
        c = t(52541),
        d = t(38535),
        u = t(90626),
        h = t(92834),
        m = t(1078),
        g = t(12155),
        p = t(52038),
        f = t(78327),
        _ = t(74568),
        x = t(22797),
        v = t(44433),
        j = t(91970),
        C = t.n(j),
        T = t(18654),
        b = t.n(T),
        y = t(32754),
        M = t(61859),
        A = t(30470),
        N = t(24484);
      function S(e) {
        const { id: a } = e,
          { data: t } = (0, o.J$)(a),
          s = (0, u.useMemo)(() => {
            if (!t) return [];
            const e =
              t.categories?.supported_player_categoryids?.slice(0, 1) || [];
            return (
              t.categories?.feature_categoryids?.forEach((a) => e.push(a)),
              t.categories?.controller_categoryids?.forEach((a) => e.push(a)),
              t.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((a) => e.push(a)),
              e
            );
          }, [t]);
        return s && 0 != s.length
          ? (0, r.jsx)("div", {
              className: (0, p.A)(b().SaleTagBlockCtn, "SaleTagBlockCtn"),
              children: Boolean(s?.length > 0)
                ? (0, r.jsx)("div", {
                    className: (0, p.A)(b().TagBox, b().Categories),
                    children: s.map((e) =>
                      (0, r.jsx)(P, { categoryID: e }, "cat_" + e),
                    ),
                  })
                : (0, r.jsx)("div", { children: (0, M.we)("#Broadcast_None") }),
            })
          : null;
      }
      class k {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, N.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return k.g_Self || (k.g_Self = new k()), k.g_Self;
        }
      }
      function P(e) {
        const { categoryID: a } = e,
          t = k.Get().m_rgCategories.find((e) => e.categoryid == a);
        return t
          ? (0, r.jsx)("div", {
              className: b().Category,
              children: (0, r.jsx)(y.he, {
                toolTipContent: t.name,
                children: (0, r.jsx)("div", {
                  className: b().CategoryIcon,
                  style: {
                    background: `url(${A.TS.STORE_CDN_URL}/public/images/${t.image_path}) no-repeat center center/cover`,
                  },
                }),
              }),
            })
          : null;
      }
      var V = t(90421),
        F = t(54054);
      function I(e) {
        const { id: a, bPopOutTrailerPlayback: t } = e,
          { data: s } = (0, o.Yo)(a),
          { data: n } = (0, o.j4)(a),
          { data: i } = (0, o.J$)(a),
          [l, c] = (0, u.useState)(!1),
          [h, m] = (0, u.useState)(!1),
          g = (0, d.dy)(),
          f = s?.highlights?.filter((e) => !g || e.all_ages),
          _ = f && f?.length > 0 ? f[0] : void 0,
          v = u.useCallback(() => {
            _ && (t ? m(!0) : c((e) => !e));
          }, [_, t]);
        if (!i)
          return (0, r.jsx)("div", {
            className: (0, p.A)(C().HilightGrid, C().MediaContainer),
            children: (0, r.jsx)(x.t, { size: "medium" }),
          });
        const j = _
          ? (0, r.jsx)(G, { trailer: _, bPlayVideo: l, fnTogglePlayTrailer: v })
          : null;
        return _ ||
          (n && n.all_ages_screenshots && n.all_ages_screenshots.length > 0)
          ? (0, r.jsxs)("div", {
              className: (0, p.A)(C().HilightGrid, C().MediaContainer),
              children: [
                (0, r.jsx)(E, {
                  elFeaturedInCenter: j,
                  storeItemScreenshots: n,
                  trailer: _,
                  id: a,
                  name: i.name || "",
                }),
                Boolean(t)
                  ? (0, r.jsx)(D, {
                      id: a,
                      bShowModal: h,
                      hideModal: () => m(!1),
                    })
                  : (0, r.jsx)(L, {
                      name: i.name || "",
                      trailer: _,
                      bPlayVideo: l,
                      fnTogglePlayTrailer: v,
                      bControls: !0,
                    }),
              ],
            })
          : null;
      }
      function B(e) {
        const {
            id: a,
            fnOnClickButton: t,
            bLowBandwidthMode: s,
            bUseAssetWithoutOverride: n,
          } = e,
          { data: i } = (0, o.j4)(a),
          { data: c } = (0, o.J$)(a),
          { data: d } = (0, o.Yo)(a),
          u = (0, l.kB)(a);
        return void 0 !== !d && i && c
          ? (0, r.jsx)("div", {
              className: (0, p.A)(C().HilightGrid, C().MediaContainerMM),
              children: (0, r.jsx)(E, {
                id: a,
                elFeaturedInCenter: (0, r.jsx)(O, {
                  id: a,
                  bUseAssetWithoutOverride: Boolean(n),
                  fnOnClickButton: t,
                }),
                trailer: u && u.length > 0 ? u[0] : void 0,
                storeItemScreenshots: i,
                featureElementclassName: C().MainImage,
                bUseTrailerAsFirstThumb: !s,
                bNoScreenShotModals: !0,
                name: c.name || "",
              }),
            })
          : (0, r.jsx)("div", {
              className: (0, p.A)(C().HilightGrid, C().MediaContainerMM),
              children: (0, r.jsx)(x.t, { size: "medium" }),
            });
      }
      function E(e) {
        const {
            elFeaturedInCenter: a,
            id: t,
            name: s,
            trailer: n,
            storeItemScreenshots: l,
            featureElementclassName: o,
            bUseTrailerAsFirstThumb: h,
            bNoScreenShotModals: g,
          } = e,
          [f, _] = u.useState(void 0),
          [x, v] = (0, m.XC)(),
          j = (0, d.dy)(),
          T = (0, u.useRef)(null),
          [b, y] = (0, u.useState)(0);
        if (!t) return null;
        const M = a || (void 0 !== f && -1 !== f) ? f : 0,
          A = new Array(),
          N = new Array();
        h &&
          n &&
          (A.push(
            (0, r.jsx)(
              G,
              {
                trailer: n,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => _(0),
                onMouseLeave: () => {
                  const e = T.current;
                  e && y(e.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          N.push(
            (0, r.jsx)(
              L,
              {
                ref: T,
                name: s,
                trailer: n,
                bControls: !1,
                bPlayVideo: !0,
                startTime: b,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const S = (
          j ? l?.all_ages_screenshots : l?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (S?.forEach((e, t) => {
            if ((a || t > 0) && A.length < 3) {
              const a = (0, i.bu)(e, "thumb"),
                s = (0, i.bu)(e, "600x338"),
                n = A.length;
              A.push(
                (0, r.jsx)(
                  "div",
                  {
                    className: (0, p.A)({
                      [C().ThumbnailCtn]: !0,
                      [C().ThumbnialClickable]: !g,
                    }),
                    children: (0, r.jsx)("img", {
                      src: a,
                      onClick: g
                        ? void 0
                        : () => {
                            const e = [...(S || [])];
                            if (e.length > 0) {
                              for (let a = 0; a < t; ++a) {
                                const a = e.shift();
                                a && e.push(a);
                              }
                              x(e.map((e) => (0, i.bu)(e, "full")));
                            }
                          },
                      onMouseEnter: () => _(n),
                    }),
                  },
                  t + "_small_" + a,
                ),
              ),
                N.push(
                  (0, r.jsx)(
                    "div",
                    {
                      className: C().ScreenshotDisplayCtn,
                      children: (0, r.jsx)("img", { src: s }),
                    },
                    t + "_big_" + a,
                  ),
                );
            }
          }),
          !(a || (N && 0 != N.length)))
        )
          return null;
        const k = A.slice(0, 3),
          P = Array.from({ length: Math.max(0, 3 - k.length) });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            v,
            (0, r.jsx)("div", {
              className: o || C().MainMediaCtn,
              children: Boolean(a && (-1 === M || void 0 === M))
                ? (0, r.jsx)(r.Fragment, { children: a })
                : (0, r.jsx)(r.Fragment, { children: void 0 !== M && N[M] }),
            }),
            Boolean(k.length > 0) &&
              (0, r.jsxs)("div", {
                className: C().ScreenshotThumbnailRow,
                onMouseLeave: () => _(-1),
                children: [
                  k,
                  P.map((e, a) =>
                    (0, r.jsx)(
                      "div",
                      { className: C().ThumbnailCtn },
                      `app_${(0, c.ER)(t)}_${a}`,
                    ),
                  ),
                ],
              }),
          ],
        });
      }
      function L(e) {
        const {
          ref: a,
          name: t,
          trailer: s,
          bControls: n,
          bPlayVideo: i,
          fnTogglePlayTrailer: o,
          startTime: c,
        } = e;
        if (
          ((0, u.useEffect)(() => {
            const e = a?.current;
            if (null != c && c > 0 && e) {
              const a = () => {
                e.currentTime = c || 0;
              };
              return (
                e.addEventListener("loadedmetadata", a),
                () => {
                  e.removeEventListener("loadedmetadata", a);
                }
              );
            }
          }, [a, c]),
          !s)
        )
          return null;
        let d = (0, p.A)(C().VideoLargeContainer, i && C().videoPlaying);
        return (0, r.jsxs)("div", {
          className: d,
          onClick: o,
          children: [
            (0, r.jsx)(F.hj, {
              name: t,
              trailerCategory: s.trailer_category,
              trailerDisplay: F.g,
              mouseOver: !1,
            }),
            Boolean(i && s.microtrailer) &&
              (0, r.jsx)("video", {
                className: C().VideoLarge,
                ref: a,
                controls: n,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != c && c > 0 ? void 0 : s.screenshot_full,
                children: s.microtrailer?.map((e) =>
                  f.TS.IN_CLIENT && "video/mp4" == e.type
                    ? null
                    : (0, r.jsx)(
                        "source",
                        { src: (0, l.M4)(s, e.filename || ""), type: e.type },
                        e.filename,
                      ),
                ),
              }),
            n &&
              (0, r.jsx)("div", {
                onClick: o,
                children: (0, r.jsx)(g.sED, {}),
              }),
          ],
        });
      }
      function D(e) {
        const { id: a, bShowModal: t, trailerBaseID: s, hideModal: n } = e,
          { data: i } = (0, o.J$)(a),
          c = (0, l.kB)(a),
          d = (0, u.useMemo)(() => {
            if (c && 0 != c.length) {
              if (s) {
                const e = c.find((e) => e.trailer_base_id == s);
                if (e) return e;
              }
              return c[0];
            }
          }, [c, s]),
          m = u.useId(),
          g = u.useId(),
          {
            rgDashTrailers: p,
            rgHlsTrailers: f,
            strCaptionManufest: x,
            strScreenshot: j,
          } = (0, u.useMemo)(() => {
            if (!d)
              return {
                rgDashTrailers: [],
                rgHlsTrailers: [],
                strCaptionManufest: "",
                strScreenshot: "",
              };
            const { rgDashTrailers: e, rgHlsTrailers: a } = (0, l.hg)(d);
            return {
              rgDashTrailers: e,
              rgHlsTrailers: a,
              strCaptionManufest: (0, l.Wv)(d),
              strScreenshot: (0, l.hl)(d),
            };
          }, [d]);
        return d && d.adaptive_trailers
          ? 0 == p.length
            ? null
            : (0, r.jsx)(_.EN, {
                active: t,
                children: (0, r.jsxs)(_.eV, {
                  "aria-labelledby": (0, h.q)(m, g),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  children: [
                    (0, r.jsx)("div", {
                      className: C().VideoPopupContainers,
                      children: (0, r.jsx)(v.P, {
                        dashManifests: p,
                        hlsManifest: f[0] || "",
                        screenshot: j,
                        altText: d.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: x,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      id: m,
                      style: { display: "none" },
                      children: i?.name || "",
                    }),
                    (0, r.jsx)("div", {
                      id: g,
                      style: { display: "none" },
                      children: d.trailer_name,
                    }),
                  ],
                }),
              })
          : null;
      }
      function G(e) {
        const {
          trailer: a,
          fnTogglePlayTrailer: t,
          bPlayVideo: s,
          onMouseEnter: n,
          onMouseLeave: i,
        } = e;
        return (0, r.jsxs)("div", {
          className: (0, p.A)({
            [C().VideoThumbnail]: !s,
            [C().videoPlaying]: s,
            [C().ThumbnailCtn]: !0,
          }),
          onClick: t,
          onMouseEnter: n,
          onMouseLeave: i,
          children: [
            (0, r.jsx)("img", { src: (0, l.hl)(a) }),
            (0, r.jsx)("div", {
              className: C().VideoPlayButton,
              children: (0, r.jsx)(g.jGG, {}),
            }),
          ],
        });
      }
      function O(e) {
        const { id: a, fnOnClickButton: t, bUseAssetWithoutOverride: l } = e,
          [c, d] = (0, n.OP)(),
          { data: u } = (0, o.lv)(a, l),
          { data: h } = (0, o.J$)(a),
          { data: m } = (0, o.wl)(a),
          { data: g } = (0, o.xz)(a);
        if (!u || !m || !h) return null;
        const f = (0, i.b0)(u, "main_capsule");
        return (0, r.jsxs)(s.Z, {
          focusable: !0,
          noFocusRing: !0,
          className: C().MainCapsuleWithHover,
          ...d,
          onActivate: t,
          children: [
            (0, r.jsx)("img", { className: C().MainCapsule, src: f }),
            (0, r.jsxs)("div", {
              className: C().AppDetails,
              children: [
                (0, r.jsx)("div", {
                  className: (0, p.A)(C().GameName),
                  children: h.name || "",
                }),
                (0, r.jsxs)("div", {
                  className: C().ShortDesc,
                  children: [m.short_description, " "],
                }),
                (0, r.jsx)(V.n, {
                  rgTagIDs: g ? g.slice(0, 10).map((e) => e.tagid || 0) : [],
                  instanceNum: 0,
                  bLargeText: !0,
                  bHideTitle: !0,
                  bNoStoreLinks: !0,
                }),
                (0, r.jsx)(S, { id: a }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
