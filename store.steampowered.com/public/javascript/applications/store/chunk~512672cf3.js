/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [385],
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
      t.d(a, { PE: () => G, qP: () => B, Yg: () => I });
      var n = t(7850),
        i = t(76217),
        s = t(86927),
        r = t(42834),
        l = t(52471),
        o = t(39777),
        c = t(52541),
        d = t(38535),
        u = t(90626),
        h = t(92834),
        m = t(1078),
        g = t(12155),
        _ = t(52038),
        p = t(78327),
        x = t(51706),
        f = t(46253),
        v = t(22797),
        j = t(44433),
        C = t(91970),
        b = t.n(C),
        y = t(18654),
        T = t.n(y),
        M = t(32754),
        A = t(61859),
        N = t(30470),
        k = t(24484);
      function P(e) {
        const { id: a } = e,
          { data: t } = (0, o.J$)(a),
          i = (0, u.useMemo)(() => {
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
        return i && 0 != i.length
          ? (0, n.jsx)("div", {
              className: (0, _.A)(T().SaleTagBlockCtn, "SaleTagBlockCtn"),
              children: Boolean(i?.length > 0)
                ? (0, n.jsx)("div", {
                    className: (0, _.A)(T().TagBox, T().Categories),
                    children: i.map((e) =>
                      (0, n.jsx)(V, { categoryID: e }, "cat_" + e),
                    ),
                  })
                : (0, n.jsx)("div", { children: (0, A.we)("#Broadcast_None") }),
            })
          : null;
      }
      class S {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, k.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return S.g_Self || (S.g_Self = new S()), S.g_Self;
        }
      }
      function V(e) {
        const { categoryID: a } = e,
          t = S.Get().m_rgCategories.find((e) => e.categoryid == a);
        return t
          ? (0, n.jsx)("div", {
              className: T().Category,
              children: (0, n.jsx)(M.he, {
                toolTipContent: t.name,
                children: (0, n.jsx)("div", {
                  className: T().CategoryIcon,
                  style: {
                    background: `url(${N.TS.STORE_CDN_URL}/public/images/${t.image_path}) no-repeat center center/cover`,
                  },
                }),
              }),
            })
          : null;
      }
      var F = t(90421);
      function I(e) {
        const { id: a, bPopOutTrailerPlayback: t } = e,
          { data: i } = (0, o.Yo)(a),
          { data: s } = (0, o.j4)(a),
          { data: r } = (0, o.J$)(a),
          [l, c] = (0, u.useState)(!1),
          [h, m] = (0, u.useState)(!1),
          g = (0, d.dy)(),
          p = i?.highlights?.filter((e) => !g || e.all_ages),
          x = p && p?.length > 0 ? p[0] : void 0,
          f = u.useCallback(() => {
            x && (t ? m(!0) : c((e) => !e));
          }, [x, t]);
        if (!r)
          return (0, n.jsx)("div", {
            className: (0, _.A)(b().HilightGrid, b().MediaContainer),
            children: (0, n.jsx)(v.t, { size: "medium" }),
          });
        const j = x
          ? (0, n.jsx)(O, { trailer: x, bPlayVideo: l, fnTogglePlayTrailer: f })
          : null;
        return x ||
          (s && s.all_ages_screenshots && s.all_ages_screenshots.length > 0)
          ? (0, n.jsxs)("div", {
              className: (0, _.A)(b().HilightGrid, b().MediaContainer),
              children: [
                (0, n.jsx)(E, {
                  elFeaturedInCenter: j,
                  storeItemScreenshots: s,
                  trailer: x,
                  id: a,
                  name: r.name || "",
                }),
                Boolean(t)
                  ? (0, n.jsx)(G, {
                      id: a,
                      bShowModal: h,
                      hideModal: () => m(!1),
                    })
                  : (0, n.jsx)(L, {
                      name: r.name || "",
                      trailer: x,
                      bPlayVideo: l,
                      fnTogglePlayTrailer: f,
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
            bLowBandwidthMode: i,
            bUseAssetWithoutOverride: s,
          } = e,
          { data: r } = (0, o.j4)(a),
          { data: c } = (0, o.J$)(a),
          { data: d } = (0, o.Yo)(a),
          u = (0, l.kB)(a);
        return void 0 !== !d && r && c
          ? (0, n.jsx)("div", {
              className: (0, _.A)(b().HilightGrid, b().MediaContainerMM),
              children: (0, n.jsx)(E, {
                id: a,
                elFeaturedInCenter: (0, n.jsx)(w, {
                  id: a,
                  bUseAssetWithoutOverride: Boolean(s),
                  fnOnClickButton: t,
                }),
                trailer: u && u.length > 0 ? u[0] : void 0,
                storeItemScreenshots: r,
                featureElementclassName: b().MainImage,
                bUseTrailerAsFirstThumb: !i,
                bNoScreenShotModals: !0,
                name: c.name || "",
              }),
            })
          : (0, n.jsx)("div", {
              className: (0, _.A)(b().HilightGrid, b().MediaContainerMM),
              children: (0, n.jsx)(v.t, { size: "medium" }),
            });
      }
      function E(e) {
        const {
            elFeaturedInCenter: a,
            id: t,
            name: i,
            trailer: s,
            storeItemScreenshots: l,
            featureElementclassName: o,
            bUseTrailerAsFirstThumb: h,
            bNoScreenShotModals: g,
          } = e,
          [p, x] = u.useState(void 0),
          [f, v] = (0, m.XC)(),
          j = (0, d.dy)(),
          C = (0, u.useRef)(null),
          [y, T] = (0, u.useState)(0);
        if (!t) return null;
        const M = a || (void 0 !== p && -1 !== p) ? p : 0,
          A = new Array(),
          N = new Array();
        h &&
          s &&
          (A.push(
            (0, n.jsx)(
              O,
              {
                trailer: s,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => x(0),
                onMouseLeave: () => {
                  const e = C.current;
                  e && T(e.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          N.push(
            (0, n.jsx)(
              L,
              {
                ref: C,
                name: i,
                trailer: s,
                bControls: !1,
                bPlayVideo: !0,
                startTime: y,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const k = (
          j ? l?.all_ages_screenshots : l?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (k?.forEach((e, t) => {
            if ((a || t > 0) && A.length < 3) {
              const a = (0, r.bu)(e, "thumb"),
                i = (0, r.bu)(e, "600x338"),
                s = A.length;
              A.push(
                (0, n.jsx)(
                  "div",
                  {
                    className: (0, _.A)({
                      [b().ThumbnailCtn]: !0,
                      [b().ThumbnialClickable]: !g,
                    }),
                    children: (0, n.jsx)("img", {
                      src: a,
                      onClick: g
                        ? void 0
                        : () => {
                            const e = [...(k || [])];
                            if (e.length > 0) {
                              for (let a = 0; a < t; ++a) {
                                const a = e.shift();
                                a && e.push(a);
                              }
                              f(e.map((e) => (0, r.bu)(e, "full")));
                            }
                          },
                      onMouseEnter: () => x(s),
                    }),
                  },
                  t + "_small_" + a,
                ),
              ),
                N.push(
                  (0, n.jsx)(
                    "div",
                    {
                      className: b().ScreenshotDisplayCtn,
                      children: (0, n.jsx)("img", { src: i }),
                    },
                    t + "_big_" + a,
                  ),
                );
            }
          }),
          !(a || (N && 0 != N.length)))
        )
          return null;
        const P = A.slice(0, 3),
          S = Array.from({ length: Math.max(0, 3 - P.length) });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            v,
            (0, n.jsx)("div", {
              className: o || b().MainMediaCtn,
              children: Boolean(a && (-1 === M || void 0 === M))
                ? (0, n.jsx)(n.Fragment, { children: a })
                : (0, n.jsx)(n.Fragment, { children: void 0 !== M && N[M] }),
            }),
            Boolean(P.length > 0) &&
              (0, n.jsxs)("div", {
                className: b().ScreenshotThumbnailRow,
                onMouseLeave: () => x(-1),
                children: [
                  P,
                  S.map((e, a) =>
                    (0, n.jsx)(
                      "div",
                      { className: b().ThumbnailCtn },
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
          trailer: i,
          bControls: s,
          bPlayVideo: r,
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
          !i)
        )
          return null;
        let d = (0, _.A)(b().VideoLargeContainer, r && b().videoPlaying);
        return (0, n.jsxs)("div", {
          className: d,
          onClick: o,
          children: [
            (0, n.jsx)(f.h, {
              name: t,
              trailerCategory: i.trailer_category,
              trailerDisplay: 1,
              mouseOver: !1,
            }),
            Boolean(r && i.microtrailer) &&
              (0, n.jsx)("video", {
                className: b().VideoLarge,
                ref: a,
                controls: s,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != c && c > 0 ? void 0 : i.screenshot_full,
                children: i.microtrailer?.map((e) =>
                  p.TS.IN_CLIENT && "video/mp4" == e.type
                    ? null
                    : (0, n.jsx)(
                        "source",
                        { src: (0, l.M4)(i, e.filename || ""), type: e.type },
                        e.filename,
                      ),
                ),
              }),
            s &&
              (0, n.jsx)("div", {
                onClick: o,
                children: (0, n.jsx)(g.sED, {}),
              }),
          ],
        });
      }
      function G(e) {
        const { id: a, bShowModal: t, trailerBaseID: i, hideModal: s } = e,
          { data: r } = (0, o.J$)(a),
          c = (0, l.kB)(a),
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
        const { rgDashTrailers: _, rgHlsTrailers: p } = (0, l.hg)(d);
        return 0 == _?.length
          ? null
          : (0, n.jsx)(x.EN, {
              active: t,
              children: (0, n.jsxs)(x.eV, {
                "aria-labelledby": (0, h.q)(m, g),
                bAllowFullSize: !0,
                bOKDisabled: !0,
                closeModal: s,
                children: [
                  (0, n.jsx)("div", {
                    className: b().VideoPopupContainers,
                    children: (0, n.jsx)(j.P, {
                      dashManifests: _ || [],
                      hlsManifest: (p.length > 0 && p?.[0]) || "",
                      screenshot: (0, l.hl)(d),
                      altText: d.trailer_name,
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    id: m,
                    style: { display: "none" },
                    children: r?.name || "",
                  }),
                  (0, n.jsx)("div", {
                    id: g,
                    style: { display: "none" },
                    children: d.trailer_name,
                  }),
                ],
              }),
            });
      }
      function O(e) {
        const {
          trailer: a,
          fnTogglePlayTrailer: t,
          bPlayVideo: i,
          onMouseEnter: s,
          onMouseLeave: r,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, _.A)({
            [b().VideoThumbnail]: !i,
            [b().videoPlaying]: i,
            [b().ThumbnailCtn]: !0,
          }),
          onClick: t,
          onMouseEnter: s,
          onMouseLeave: r,
          children: [
            (0, n.jsx)("img", { src: (0, l.hl)(a) }),
            (0, n.jsx)("div", {
              className: b().VideoPlayButton,
              children: (0, n.jsx)(g.jGG, {}),
            }),
          ],
        });
      }
      function w(e) {
        const { id: a, fnOnClickButton: t, bUseAssetWithoutOverride: l } = e,
          [c, d] = (0, s.OP)(),
          { data: u } = (0, o.lv)(a, l),
          { data: h } = (0, o.J$)(a),
          { data: m } = (0, o.wl)(a),
          { data: g } = (0, o.xz)(a);
        if (!u || !m || !h) return null;
        const p = (0, r.b0)(u, "main_capsule");
        return (0, n.jsxs)(i.Z, {
          focusable: !0,
          noFocusRing: !0,
          className: b().MainCapsuleWithHover,
          ...d,
          onActivate: t,
          children: [
            (0, n.jsx)("img", { className: b().MainCapsule, src: p }),
            (0, n.jsxs)("div", {
              className: b().AppDetails,
              children: [
                (0, n.jsx)("div", {
                  className: (0, _.A)(b().GameName),
                  children: h.name || "",
                }),
                (0, n.jsxs)("div", {
                  className: b().ShortDesc,
                  children: [m.short_description, " "],
                }),
                (0, n.jsx)(F.n, {
                  rgTagIDs: g ? g.slice(0, 10).map((e) => e.tagid || 0) : [],
                  instanceNum: 0,
                  bLargeText: !0,
                  bHideTitle: !0,
                  bNoStoreLinks: !0,
                }),
                (0, n.jsx)(P, { id: a }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
