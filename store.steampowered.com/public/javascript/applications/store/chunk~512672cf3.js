/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [10385],
    {
      10452: (D, Y, s) => {
        "use strict";
        s.d(Y, { PE: () => z, qP: () => ue, Yg: () => de });
        var e = s(7850),
          Q = s(19298),
          Z = s(86048),
          P = s(21721),
          T = s(25046),
          g = s(40358),
          $ = s(68094),
          H = s(41032),
          v = s(90626),
          w = s(62571),
          q = s(54929),
          O = s(36118),
          x = s(36707),
          _ = s(3166),
          U = s(96538),
          G = s(85599),
          ee = s(64271),
          te = s(91970),
          a = s.n(te),
          se = s(18654),
          I = s.n(se),
          ae = s(71421),
          re = s(18210),
          ne = s(98609),
          ie = s(67705);
        function le(u) {
          const { id: t } = u,
            { data: n } = (0, g.J$)(t),
            r = (0, v.useMemo)(() => {
              if (!n) return [];
              const i =
                n.categories?.supported_player_categoryids?.slice(0, 1) || [];
              return (
                n.categories?.feature_categoryids?.forEach((l) => i.push(l)),
                n.categories?.controller_categoryids?.forEach((l) => i.push(l)),
                n.categories?.supported_player_categoryids
                  ?.slice(1)
                  .forEach((l) => i.push(l)),
                i
              );
            }, [n]);
          return !r || r.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: (0, x.A)(I().SaleTagBlockCtn, "SaleTagBlockCtn"),
                children:
                  r?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, x.A)(I().TagBox, I().Categories),
                        children: r.map((i) =>
                          (0, e.jsx)(oe, { categoryID: i }, "cat_" + i),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: (0, re.we)("#Broadcast_None"),
                      }),
              });
        }
        class j {
          m_rgCategories;
          constructor() {
            this.m_rgCategories = (0, ie.Tc)(
              "feature_categories",
              "application_config",
            );
          }
          static g_Self = null;
          static Get() {
            return j.g_Self || (j.g_Self = new j()), j.g_Self;
          }
        }
        function oe(u) {
          const { categoryID: t } = u,
            n = j.Get().m_rgCategories.find((r) => r.categoryid == t);
          return n
            ? (0, e.jsx)("div", {
                className: I().Category,
                children: (0, e.jsx)(ae.he, {
                  toolTipContent: n.name,
                  children: (0, e.jsx)("div", {
                    className: I().CategoryIcon,
                    style: {
                      background: `url(${ne.TS.STORE_CDN_URL}/public/images/${n.image_path}) no-repeat center center/cover`,
                    },
                  }),
                }),
              })
            : null;
        }
        var ce = s(41188),
          W = s(50573);
        function de(u) {
          const { id: t, bPopOutTrailerPlayback: n } = u,
            { data: r } = (0, g.Yo)(t),
            { data: i } = (0, g.j4)(t),
            { data: l } = (0, g.J$)(t),
            [d, o] = (0, v.useState)(!1),
            [h, c] = (0, v.useState)(!1),
            m = (0, H.dy)(),
            y = r?.highlights?.filter((A) => !m || A.all_ages),
            f = y && y?.length > 0 ? y[0] : void 0,
            p = v.useCallback(() => {
              f && (n ? c(!0) : o((A) => !A));
            }, [f, n]);
          if (!l)
            return (0, e.jsx)("div", {
              className: (0, x.A)(a().HilightGrid, a().MediaContainer),
              children: (0, e.jsx)(G.t, { size: "medium" }),
            });
          const C = f
            ? (0, e.jsx)(R, {
                trailer: f,
                bPlayVideo: d,
                fnTogglePlayTrailer: p,
              })
            : null;
          return !f &&
            !(i && i.all_ages_screenshots && i.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, x.A)(a().HilightGrid, a().MediaContainer),
                children: [
                  (0, e.jsx)(J, {
                    elFeaturedInCenter: C,
                    storeItemScreenshots: i,
                    trailer: f,
                    id: t,
                    name: l.name || "",
                  }),
                  n
                    ? (0, e.jsx)(z, {
                        id: t,
                        bShowModal: h,
                        hideModal: () => c(!1),
                      })
                    : (0, e.jsx)(K, {
                        name: l.name || "",
                        trailer: f,
                        bPlayVideo: d,
                        fnTogglePlayTrailer: p,
                        bControls: !0,
                      }),
                ],
              });
        }
        function ue(u) {
          const {
              id: t,
              fnOnClickButton: n,
              bLowBandwidthMode: r,
              bUseAssetWithoutOverride: i,
            } = u,
            { data: l } = (0, g.j4)(t),
            { data: d } = (0, g.J$)(t),
            { data: o } = (0, g.Yo)(t),
            h = (0, T.kB)(t);
          return !o === void 0 || !l || !d
            ? (0, e.jsx)("div", {
                className: (0, x.A)(a().HilightGrid, a().MediaContainerMM),
                children: (0, e.jsx)(G.t, { size: "medium" }),
              })
            : (0, e.jsx)("div", {
                className: (0, x.A)(a().HilightGrid, a().MediaContainerMM),
                children: (0, e.jsx)(J, {
                  id: t,
                  elFeaturedInCenter: (0, e.jsx)(he, {
                    id: t,
                    bUseAssetWithoutOverride: !!i,
                    fnOnClickButton: n,
                  }),
                  trailer: h && h.length > 0 ? h[0] : void 0,
                  storeItemScreenshots: l,
                  featureElementclassName: a().MainImage,
                  bUseTrailerAsFirstThumb: !r,
                  bNoScreenShotModals: !0,
                  name: d.name || "",
                }),
              });
        }
        function J(u) {
          const {
              elFeaturedInCenter: t,
              id: n,
              name: r,
              trailer: i,
              storeItemScreenshots: l,
              featureElementclassName: d,
              bUseTrailerAsFirstThumb: o,
              bNoScreenShotModals: h,
            } = u,
            [c, m] = v.useState(void 0),
            [y, f] = (0, q.XC)(),
            p = (0, H.dy)(),
            C = (0, v.useRef)(null),
            [A, me] = (0, v.useState)(0);
          if (!n) return null;
          const V = t || (c !== void 0 && c !== -1) ? c : 0,
            N = new Array(),
            S = new Array();
          o &&
            i &&
            (N.push(
              (0, e.jsx)(
                R,
                {
                  trailer: i,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => m(0),
                  onMouseLeave: () => {
                    const M = C.current;
                    M && me(M.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            S.push(
              (0, e.jsx)(
                K,
                {
                  ref: C,
                  name: r,
                  trailer: i,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: A,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const k = (
            p ? l?.all_ages_screenshots : l?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (k?.forEach((M, b) => {
              if ((t || b > 0) && N.length < 3) {
                const E = (0, P.bu)(M, "thumb"),
                  ve = (0, P.bu)(M, "600x338"),
                  fe = N.length;
                N.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, x.A)({
                        [a().ThumbnailCtn]: !0,
                        [a().ThumbnialClickable]: !h,
                      }),
                      children: (0, e.jsx)("img", {
                        src: E,
                        onClick: h
                          ? void 0
                          : () => {
                              const F = [...(k || [])];
                              if (F.length > 0) {
                                for (let B = 0; B < b; ++B) {
                                  const X = F.shift();
                                  X && F.push(X);
                                }
                                y(F.map((B) => (0, P.bu)(B, "full")));
                              }
                            },
                        onMouseEnter: () => m(fe),
                      }),
                    },
                    b + "_small_" + E,
                  ),
                ),
                  S.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: a().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: ve }),
                      },
                      b + "_big_" + E,
                    ),
                  );
              }
            }),
            !t && (!S || S.length == 0))
          )
            return null;
          const L = N.slice(0, 3),
            ge = Array.from({ length: Math.max(0, 3 - L.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              f,
              (0, e.jsx)("div", {
                className: d || a().MainMediaCtn,
                children:
                  t && (V === -1 || V === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: t })
                    : (0, e.jsx)(e.Fragment, {
                        children: V !== void 0 && S[V],
                      }),
              }),
              L.length > 0 &&
                (0, e.jsxs)("div", {
                  className: a().ScreenshotThumbnailRow,
                  onMouseLeave: () => m(-1),
                  children: [
                    L,
                    ge.map((M, b) =>
                      (0, e.jsx)(
                        "div",
                        { className: a().ThumbnailCtn },
                        `app_${(0, $.ER)(n)}_${b}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function K(u) {
          const {
            ref: t,
            name: n,
            trailer: r,
            bControls: i,
            bPlayVideo: l,
            fnTogglePlayTrailer: d,
            startTime: o,
          } = u;
          if (
            ((0, v.useEffect)(() => {
              const c = t?.current;
              if (o != null && o > 0 && c) {
                const m = () => {
                  c.currentTime = o || 0;
                };
                return (
                  c.addEventListener("loadedmetadata", m),
                  () => {
                    c.removeEventListener("loadedmetadata", m);
                  }
                );
              }
            }, [t, o]),
            !r)
          )
            return null;
          let h = (0, x.A)(a().VideoLargeContainer, l && a().videoPlaying);
          return (0, e.jsxs)("div", {
            className: h,
            onClick: d,
            children: [
              (0, e.jsx)(W.hj, {
                name: n,
                trailerCategory: r.trailer_category,
                trailerDisplay: W.g,
                mouseOver: !1,
              }),
              !!(l && r.microtrailer) &&
                (0, e.jsx)("video", {
                  className: a().VideoLarge,
                  ref: t,
                  controls: i,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: o != null && o > 0 ? void 0 : r.screenshot_full,
                  children: r.microtrailer?.map((c) =>
                    _.TS.IN_CLIENT && c.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, T.M4)(r, c.filename || ""), type: c.type },
                          c.filename,
                        ),
                  ),
                }),
              i &&
                (0, e.jsx)("div", {
                  onClick: d,
                  children: (0, e.jsx)(O.sED, {}),
                }),
            ],
          });
        }
        function z(u) {
          const { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = u,
            { data: l } = (0, g.J$)(t),
            d = (0, T.kB)(t),
            o = (0, v.useMemo)(() => {
              if (!(!d || d.length == 0)) {
                if (r) {
                  const p = d.find((C) => C.trailer_base_id == r);
                  if (p) return p;
                }
                return d[0];
              }
            }, [d, r]),
            h = v.useId(),
            c = v.useId();
          if (!o || !o.adaptive_trailers) return null;
          const { rgDashTrailers: m, rgHlsTrailers: y } = (0, T.hg)(o);
          if (m?.length == 0) return null;
          let f = (0, T.Wv)(o);
          return (0, e.jsx)(U.EN, {
            active: n,
            children: (0, e.jsxs)(U.eV, {
              "aria-labelledby": (0, w.q)(h, c),
              bAllowFullSize: !0,
              bOKDisabled: !0,
              closeModal: i,
              children: [
                (0, e.jsx)("div", {
                  className: a().VideoPopupContainers,
                  children: (0, e.jsx)(ee.P, {
                    dashManifests: m || [],
                    hlsManifest: (y.length > 0 && y?.[0]) || "",
                    screenshot: (0, T.hl)(o),
                    altText: o.trailer_name,
                    muteWhenAutoplayBlocked: !0,
                    captionManifest: f,
                  }),
                }),
                (0, e.jsx)("div", {
                  id: h,
                  style: { display: "none" },
                  children: l?.name || "",
                }),
                (0, e.jsx)("div", {
                  id: c,
                  style: { display: "none" },
                  children: o.trailer_name,
                }),
              ],
            }),
          });
        }
        function R(u) {
          const {
            trailer: t,
            fnTogglePlayTrailer: n,
            bPlayVideo: r,
            onMouseEnter: i,
            onMouseLeave: l,
          } = u;
          return (0, e.jsxs)("div", {
            className: (0, x.A)({
              [a().VideoThumbnail]: !r,
              [a().videoPlaying]: r,
              [a().ThumbnailCtn]: !0,
            }),
            onClick: n,
            onMouseEnter: i,
            onMouseLeave: l,
            children: [
              (0, e.jsx)("img", { src: (0, T.hl)(t) }),
              (0, e.jsx)("div", {
                className: a().VideoPlayButton,
                children: (0, e.jsx)(O.jGG, {}),
              }),
            ],
          });
        }
        function he(u) {
          const { id: t, fnOnClickButton: n, bUseAssetWithoutOverride: r } = u,
            [i, l] = (0, Z.OP)(),
            { data: d } = (0, g.lv)(t, r),
            { data: o } = (0, g.J$)(t),
            { data: h } = (0, g.wl)(t),
            { data: c } = (0, g.xz)(t);
          if (!d || !h || !o) return null;
          const m = (0, P.b0)(d, "main_capsule");
          return (0, e.jsxs)(Q.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: a().MainCapsuleWithHover,
            ...l,
            onActivate: n,
            children: [
              (0, e.jsx)("img", { className: a().MainCapsule, src: m }),
              (0, e.jsxs)("div", {
                className: a().AppDetails,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, x.A)(a().GameName),
                    children: o.name || "",
                  }),
                  (0, e.jsxs)("div", {
                    className: a().ShortDesc,
                    children: [h.short_description, " "],
                  }),
                  (0, e.jsx)(ce.n, {
                    rgTagIDs: c ? c.slice(0, 10).map((y) => y.tagid || 0) : [],
                    instanceNum: 0,
                    bLargeText: !0,
                    bHideTitle: !0,
                    bNoStoreLinks: !0,
                  }),
                  (0, e.jsx)(le, { id: t }),
                ],
              }),
            ],
          });
        }
      },
      91970: (D) => {
        D.exports = {
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
    },
  ]);
})();
