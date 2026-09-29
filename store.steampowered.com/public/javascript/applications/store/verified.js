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
    48963: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
        MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
        ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
        HilightGrid: "afMTFv3mQcpX11KsRQBFe",
        MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
        VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
        ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
        MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
        MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
        AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
        GameName: "_2aMRa54ScYF_qLXc6-dsRN",
        ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
        ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
        ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
        ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
        videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
        VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
        VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
        CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
        VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
        VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
        BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
        "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
        "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
        "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
        "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
        "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
        "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
        "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
        "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
        "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
        focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
        hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
      };
    },
    17041: (e, r, t) => {
      "use strict";
      t.d(r, { u: () => n });
      var s = t(7850),
        a = t(17267),
        i = t(3088);
      function n(e) {
        const { strImageToken: r, language: t, strAltText: n } = e,
          l = (0, a.z5)(r, t);
        return l
          ? "string" == typeof l
            ? (0, s.jsx)("img", { src: l, alt: n })
            : (0, s.jsx)(i.c, { rgSources: l, strAltText: n })
          : null;
      }
    },
    20433: (e, r, t) => {
      "use strict";
      t.d(r, { j: () => m, u: () => p });
      var s = t(7850),
        a = t(90626),
        i = t(45699),
        n = t(55963),
        l = t(60014),
        o = t(49411),
        d = t(61336),
        c = t(52541),
        u = t(66418);
      t(78327);
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
            hoverClassName: t,
            fnGetIDOverride: i,
            fnHoverState: n,
            disableScreenshots: l,
            children: o,
          } = e,
          d = a.useRef(null),
          u = a.useCallback(
            (e) => {
              const t = h(r);
              t &&
                (n && n(!0),
                window.GameHover &&
                  (d.current &&
                    l &&
                    (d.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(i ? i() : d.current, e, "global_hover", {
                    type: t,
                    id: (0, c.G$)(r).id,
                    v6: 1,
                  })));
            },
            [n, i, l, r],
          ),
          m = a.useCallback(
            (e) => {
              h(r) &&
                (n && e.relatedTarget && n(!1),
                window.HideGameHover &&
                  window.HideGameHover(i ? i() : d.current, e, "global_hover"));
            },
            [r, n, i],
          );
        return (0, s.jsx)("div", {
          ref: d,
          className: t,
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
            strExtraParams: t,
            fnOnClickOverride: a,
            strOverrideURL: p,
          } = e,
          f = (0, l.n9)(),
          g = (0, o.w)(),
          x = (0, d.NT)(
            p ||
              (r && "creatorid" in r
                ? (0, n.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, c.G$))(r).id}${t ? `?${t}` : ""}`,
                    f,
                    g,
                  )
                : (0, n.It)(
                    `${u.TS.STORE_BASE_URL}${h(r)}/${((0, c.G$))(r).id}${t ? `?${t}` : ""}`,
                    f,
                    g,
                  )),
          );
        return (0, s.jsx)(m, {
          ...e,
          children: (0, s.jsx)(i.Ii, {
            className: e.className,
            href: a ? void 0 : x,
            target: u.TS.IN_CLIENT || a ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: a,
            children: e.children,
          }),
        });
      }
    },
    25698: (e, r, t) => {
      "use strict";
      t.d(r, { S: () => c });
      var s = t(7850),
        a = t(3946),
        i = t(90626),
        n = t(91933);
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
        const [t, c] = (0, i.useState)(() =>
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
          (0, i.useEffect)(() => {
            d(t);
          }, [t]),
          (0, s.jsx)(a.v, {
            playerVolume: t.flVolume,
            setPlayerVolume: (e) => c((r) => ({ ...r, flVolume: e })),
            audioMuted: t.bMuted,
            setAudioMuted: (e) => c((r) => ({ ...r, bMuted: e })),
            children: r,
          })
        );
      }
    },
    73944: (e, r, t) => {
      "use strict";
      t.d(r, { PE: () => y, Yg: () => S, _t: () => C, gO: () => T });
      var s = t(7850),
        a = t(42834),
        i = t(52471),
        n = t(39777),
        l = t(52541),
        o = t(38535),
        d = t(90626),
        c = t(92834),
        u = t(1679),
        h = t(12155),
        m = t(52038),
        p = t(61859),
        f = t(66418),
        g = t(74568),
        x = t(22797),
        b = t(44433),
        j = t(48963),
        _ = t.n(j),
        v = t(54054);
      function S(e) {
        const { id: r, bPopOutTrailerPlayback: t } = e,
          { data: a } = (0, n.Yo)(r),
          { data: i } = (0, n.j4)(r),
          { data: l } = (0, n.J$)(r),
          [c, u] = (0, d.useState)(!1),
          [h, p] = (0, d.useState)(!1),
          f = (0, o.dy)(),
          g = a?.highlights?.filter((e) => !f || e.all_ages),
          b = g && g?.length > 0 ? g[0] : void 0,
          j = d.useCallback(() => {
            b && (t ? p(!0) : u((e) => !e));
          }, [b, t]);
        if (!l)
          return (0, s.jsx)("div", {
            className: (0, m.A)(_().HilightGrid, _().MediaContainer),
            children: (0, s.jsx)(x.t, { size: "medium" }),
          });
        const v = b
          ? (0, s.jsx)(N, { trailer: b, bPlayVideo: c, fnTogglePlayTrailer: j })
          : null;
        return b ||
          (i && i.all_ages_screenshots && i.all_ages_screenshots.length > 0)
          ? (0, s.jsxs)("div", {
              className: (0, m.A)(_().HilightGrid, _().MediaContainer),
              children: [
                (0, s.jsx)(C, {
                  elFeaturedInCenter: v,
                  storeItemScreenshots: i,
                  trailer: b,
                  id: r,
                  name: l.name || "",
                }),
                Boolean(t)
                  ? (0, s.jsx)(y, {
                      id: r,
                      bShowModal: h,
                      hideModal: () => p(!1),
                    })
                  : (0, s.jsx)(A, {
                      name: l.name || "",
                      trailer: b,
                      bPlayVideo: c,
                      fnTogglePlayTrailer: j,
                      bControls: !0,
                    }),
              ],
            })
          : null;
      }
      function C(e) {
        const {
            elFeaturedInCenter: r,
            id: t,
            name: i,
            trailer: n,
            storeItemScreenshots: c,
            featureElementclassName: h,
            bUseTrailerAsFirstThumb: p,
            bNoScreenShotModals: f,
          } = e,
          [g, x] = d.useState(void 0),
          [b, j] = (0, u.XC)(),
          v = (0, o.dy)(),
          S = (0, d.useRef)(null),
          [C, y] = (0, d.useState)(0);
        if (!t) return null;
        const T = r || (void 0 !== g && -1 !== g) ? g : 0,
          M = new Array(),
          B = new Array();
        p &&
          n &&
          (M.push(
            (0, s.jsx)(
              N,
              {
                trailer: n,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => x(0),
                onMouseLeave: () => {
                  const e = S.current;
                  e && y(e.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          B.push(
            (0, s.jsx)(
              A,
              {
                ref: S,
                name: i,
                trailer: n,
                bControls: !1,
                bPlayVideo: !0,
                startTime: C,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const k = (
          v ? c?.all_ages_screenshots : c?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (k?.forEach((e, t) => {
            if ((r || t > 0) && M.length < 3) {
              const r = (0, a.bu)(e, "thumb"),
                n = (0, a.bu)(e, "600x338"),
                l = M.length;
              M.push(
                (0, s.jsx)(
                  "div",
                  {
                    className: (0, m.A)({
                      [_().ThumbnailCtn]: !0,
                      [_().ThumbnialClickable]: !f,
                    }),
                    onMouseEnter: () => x(l),
                    children: f
                      ? (0, s.jsx)("img", { src: r, alt: i })
                      : (0, s.jsx)("button", {
                          type: "button",
                          className: _().ThumbnailButton,
                          onClick: () => {
                            const e = [...(k || [])];
                            if (e.length > 0) {
                              for (let r = 0; r < t; ++r) {
                                const r = e.shift();
                                r && e.push(r);
                              }
                              b(e.map((e) => (0, a.bu)(e, "full")));
                            }
                          },
                          children: (0, s.jsx)("img", { src: r, alt: i }),
                        }),
                  },
                  t + "_small_" + r,
                ),
              ),
                B.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: _().ScreenshotDisplayCtn,
                      children: (0, s.jsx)("img", { src: n, alt: i }),
                    },
                    t + "_big_" + r,
                  ),
                );
            }
          }),
          !(r || (B && 0 != B.length)))
        )
          return null;
        const P = M.slice(0, 3),
          L = Array.from({ length: Math.max(0, 3 - P.length) });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            j,
            (0, s.jsx)("div", {
              className: h || _().MainMediaCtn,
              children: Boolean(r && (-1 === T || void 0 === T))
                ? (0, s.jsx)(s.Fragment, { children: r })
                : (0, s.jsx)(s.Fragment, { children: void 0 !== T && B[T] }),
            }),
            Boolean(P.length > 0) &&
              (0, s.jsxs)("div", {
                className: _().ScreenshotThumbnailRow,
                onMouseLeave: () => x(-1),
                children: [
                  P,
                  L.map((e, r) =>
                    (0, s.jsx)(
                      "div",
                      { className: _().ThumbnailCtn },
                      `app_${(0, l.ER)(t)}_${r}`,
                    ),
                  ),
                ],
              }),
          ],
        });
      }
      function A(e) {
        const {
          ref: r,
          name: t,
          trailer: a,
          bControls: n,
          bPlayVideo: l,
          fnTogglePlayTrailer: o,
          startTime: c,
        } = e;
        if (
          ((0, d.useEffect)(() => {
            const e = r?.current;
            if (null != c && c > 0 && e) {
              const r = () => {
                e.currentTime = c || 0;
              };
              return (
                e.addEventListener("loadedmetadata", r),
                () => {
                  e.removeEventListener("loadedmetadata", r);
                }
              );
            }
          }, [r, c]),
          !a)
        )
          return null;
        let u = (0, m.A)(_().VideoLargeContainer, l && _().videoPlaying);
        return (0, s.jsxs)("div", {
          className: u,
          onClick: o,
          role: "presentation",
          children: [
            (0, s.jsx)(v.hj, {
              name: t,
              trailerCategory: a.trailer_category,
              trailerDisplay: v.g,
              mouseOver: !1,
            }),
            Boolean(l && a.microtrailer) &&
              (0, s.jsx)("video", {
                className: _().VideoLarge,
                ref: r,
                controls: n,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != c && c > 0 ? void 0 : a.screenshot_full,
                children: a.microtrailer?.map((e) =>
                  f.TS.IN_CLIENT && "video/mp4" == e.type
                    ? null
                    : (0, s.jsx)(
                        "source",
                        { src: (0, i.M4)(a, e.filename || ""), type: e.type },
                        e.filename,
                      ),
                ),
              }),
            n &&
              (0, s.jsx)("button", {
                type: "button",
                className: _().CloseButton,
                "aria-label": (0, p.we)("#Button_Close"),
                children: (0, s.jsx)(h.sED, {}),
              }),
          ],
        });
      }
      function y(e) {
        const { id: r, bShowModal: t, trailerBaseID: a, hideModal: l } = e,
          { data: o } = (0, n.J$)(r),
          u = (0, i.kB)(r),
          h = (0, d.useMemo)(() => {
            if (u && 0 != u.length) {
              if (a) {
                const e = u.find((e) => e.trailer_base_id == a);
                if (e) return e;
              }
              return u[0];
            }
          }, [u, a]),
          m = d.useId(),
          p = d.useId(),
          {
            rgDashTrailers: f,
            rgHlsTrailers: x,
            strCaptionManufest: j,
            strScreenshot: v,
          } = (0, d.useMemo)(() => {
            if (!h)
              return {
                rgDashTrailers: [],
                rgHlsTrailers: [],
                strCaptionManufest: "",
                strScreenshot: "",
              };
            const { rgDashTrailers: e, rgHlsTrailers: r } = (0, i.hg)(h);
            return {
              rgDashTrailers: e,
              rgHlsTrailers: r,
              strCaptionManufest: (0, i.Wv)(h),
              strScreenshot: (0, i.hl)(h),
            };
          }, [h]);
        return h && h.adaptive_trailers
          ? 0 == f.length
            ? null
            : (0, s.jsx)(g.EN, {
                active: t,
                children: (0, s.jsxs)(g.eV, {
                  "aria-labelledby": (0, c.q)(m, p),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: l,
                  children: [
                    (0, s.jsx)("div", {
                      className: _().VideoPopupContainers,
                      children: (0, s.jsx)(b.P, {
                        dashManifests: f,
                        hlsManifest: x[0] || "",
                        screenshot: v,
                        altText: h.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: j,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      id: m,
                      style: { display: "none" },
                      children: o?.name || "",
                    }),
                    (0, s.jsx)("div", {
                      id: p,
                      style: { display: "none" },
                      children: h.trailer_name,
                    }),
                  ],
                }),
              })
          : null;
      }
      function T(e) {
        const { appid: r, trailerBaseID: t, bShowModal: a, hideModal: i } = e,
          n = (0, d.useMemo)(() => ({ appid: r }), [r]);
        return (0, s.jsx)(y, {
          id: n,
          trailerBaseID: t,
          bShowModal: a,
          hideModal: i,
        });
      }
      function N(e) {
        const {
          trailer: r,
          fnTogglePlayTrailer: t,
          bPlayVideo: a,
          onMouseEnter: n,
          onMouseLeave: l,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, m.A)({
            [_().VideoThumbnail]: !a,
            [_().videoPlaying]: a,
            [_().ThumbnailCtn]: !0,
          }),
          onClick: t,
          onMouseEnter: n,
          onMouseLeave: l,
          role: "presentation",
          children: [
            (0, s.jsx)("img", { src: (0, i.hl)(r), alt: r.trailer_name }),
            (0, s.jsx)("button", {
              type: "button",
              className: _().VideoPlayButton,
              "aria-label": (0, p.we)("#Playback_Play_Tooltip"),
              children: (0, s.jsx)(h.jGG, {}),
            }),
          ],
        });
      }
    },
    31352: (e, r, t) => {
      "use strict";
      t.d(r, { T: () => V });
      var s = t(7850),
        a = t(8747),
        i = t(71381),
        n = t(20433),
        l = t(94191),
        o = t(78588),
        d = t(94636),
        c = t(90421),
        u = t(24267),
        h = t(12424),
        m = t(96006),
        p = t(8893),
        f = t(78686),
        g = t(5309),
        x = t(39777),
        b = t(14987),
        j = t(60014),
        _ = t(75844),
        v = t(90626),
        S = t(76682),
        C = t(55963),
        A = t(73944),
        y = t(76532),
        T = t.n(y),
        N = t(52541),
        M = t(90740),
        B = t(22623);
      function k(e) {
        const {
            id: r,
            bPurchaseOptionsExpanded: t,
            fnCollapseOptions: a,
            bPreferAssetWithoutOverride: i,
          } = e,
          { data: n } = (0, x.is)(r),
          l = (0, v.useRef)(null);
        if (!n) return null;
        const o = n.purchase_options;
        return o
          ? (0, s.jsx)(M.A, {
              nodeRef: l,
              in: t,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 2e3,
              classNames: {
                enterActive: T().Expanding,
                enterDone: T().Expanded,
                exit: T().Expanded,
                exitActive: T().Collapsing,
              },
              children: (0, s.jsxs)("div", {
                ref: l,
                className: T().BundleContentsCtnTransition,
                children: [
                  (0, s.jsx)("div", {
                    className: T().BundleContentsCtn,
                    children: o
                      .filter((e) => Boolean(e.packageid))
                      .map((e) =>
                        (0, s.jsx)(
                          "div",
                          {
                            className: T().BundleContentItem,
                            children: (0, s.jsx)(B.p, {
                              id: e.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: i,
                            }),
                          },
                          "purchaseitem_" + (0, N.ER)(r) + "_" + e.packageid,
                        ),
                      ),
                  }),
                  (0, s.jsx)("div", {
                    onClick: a,
                    className: T().BundleShowButton,
                    children: (0, s.jsx)("button", {
                      className: T().ShowContentsButton,
                      children: f.Z.Localize("#Button_Close"),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var P = t(85862),
        L = t(48123),
        I = t(38081),
        D = t.n(I),
        E = t(54492),
        w = t(52038);
      const V = (0, _.PA)((e) => {
        const { id: r, type: t } = e,
          _ = (0, S.zl)(r, t),
          {
            bHidePrice: y,
            bShowDemoButton: N,
            bPreferDemoStorePage: M,
            bShowPurchaseOptionsButton: B,
            bUseSubscriptionLayout: I,
            bPreferAssetWithoutOverride: V,
          } = e,
          [O, R] = v.useState(!1),
          F = () => R(!O),
          { data: W } = (0, x.U2)(_),
          { data: G } = (0, x.wl)(_),
          { data: H } = (0, x.by)(_),
          { data: J } = (0, x.xz)(_),
          z = (0, b._Z)(_),
          U = (0, j.n9)();
        if (!W || !G)
          return (0, s.jsx)(i.h, {
            capsules_per_row: [1],
            is_expanded_display: !0,
          });
        const $ = (0, C.L3)(U),
          q = W.item_type == a.c6.qI;
        return (0, s.jsx)("div", {
          className: (0, w.A)(
            T().StoreSaleWidgetContainer,
            T().LibraryAssetExpandedDisplay,
            "LibraryAssetExpandedDisplay",
          ),
          children: (0, s.jsxs)(L.oj, {
            appid: q ? W.appid : void 0,
            children: [
              (0, s.jsxs)("div", {
                className: T().StoreSaleWidgetLibraryAssetExtendedTop,
                children: [
                  (0, s.jsx)("div", {
                    className: (0, w.A)(T().StoreSaleWidgetLeft),
                    children: (0, s.jsx)(n.u, {
                      id: _,
                      bPreferDemoStorePage: M,
                      children: (0, s.jsxs)("div", {
                        className: T().StoreSaleWidgetImage,
                        children: [
                          (0, s.jsx)(l.V, { appids: z }),
                          (0, s.jsx)(o.a, {
                            id: _,
                            imageType: "library",
                            bPreferAssetWithoutOverride: V,
                          }),
                          (0, s.jsx)(E.J, { id: _ }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: T().StoreSaleWidgetCrossCenterRight,
                    children: [
                      q &&
                        (0, s.jsx)(d.E, {
                          id: _,
                          classOverride: (0, w.A)(
                            D().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: $,
                        }),
                      (0, s.jsxs)("div", {
                        className: T().StoreSaleWidgetContents,
                        children: [
                          (0, s.jsxs)("div", {
                            className: T().StoreSaleWidgetCenter,
                            children: [
                              G.short_description &&
                                G.short_description.length > 0 &&
                                (0, s.jsx)("div", {
                                  className: (0, w.A)(
                                    T().StoreSaleWidgetShortDesc,
                                    "StoreSaleWidgetShortDesc",
                                  ),
                                  children: G.short_description,
                                }),
                              (0, s.jsx)(c.n, {
                                rgTagIDs: J
                                  ? J.slice(0, 10).map((e) => e.tagid || 0)
                                  : [],
                                instanceNum: 0,
                                bNoStoreLinks: !1,
                              }),
                              (0, s.jsxs)("div", {
                                className: T().StoreMetaDataCtn,
                                children: [
                                  (0, s.jsx)("div", {
                                    className: T().StoreSaleItemRelease,
                                    children: f.Z.LocalizeReact(
                                      "#Sale_ReleaseDate",
                                      (0, s.jsx)("span", {
                                        children: (0, g.CC)(H),
                                      }),
                                    ),
                                  }),
                                  G.developers &&
                                    G.developers.length > 0 &&
                                    (0, s.jsxs)("div", {
                                      className: T().StoreSaleItemDev,
                                      children: [
                                        f.Z.Localize(
                                          "#CreatorHome_DevelopedBy",
                                        ),
                                        (0, s.jsx)("span", {
                                          children: G.developers[0].name,
                                        }),
                                      ],
                                    }),
                                  G.publishers &&
                                    G.publishers.length > 0 &&
                                    (0, s.jsxs)("div", {
                                      className: T().StoreSaleItemDev,
                                      children: [
                                        f.Z.Localize(
                                          "#CreatorHome_PublishedBy",
                                        ),
                                        (0, s.jsx)("span", {
                                          children: G.publishers[0].name,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: T().StoreSaleLibraryAssetWidgetRight,
                            children: (0, s.jsx)(A.Yg, {
                              id: _,
                              bPopOutTrailerPlayback: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: T().StoreSaleItemReview,
                        children: (0, s.jsx)(u.J, { id: _ }),
                      }),
                      (0, s.jsx)("div", {
                        className: T().CapsuleBottomBar,
                        children:
                          I && q
                            ? (0, s.jsx)(h.E, { appid: W.appid, bIsMuted: !1 })
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(m.Q, { id: _ }),
                                  (0, s.jsx)(P.w, {
                                    id: _,
                                    bShowDemoButton: N,
                                    bHidePrice: y,
                                    bShowPurchaseOptionsButton: B,
                                    fnOnPurchaseOptionsClick: F,
                                    bHideWishlistButton: W.is_coming_soon,
                                  }),
                                ],
                              }),
                      }),
                      (0, s.jsxs)("div", {
                        className: T().StoreSaleWidgetBgTint,
                        children: [
                          (0, s.jsx)(p.G, {
                            id: _,
                            bPreferAssetWithoutOverride: V,
                          }),
                          (0, s.jsx)(E.J, { id: _ }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(k, {
                id: _,
                bPurchaseOptionsExpanded: O,
                fnCollapseOptions: F,
                bPreferAssetWithoutOverride: V,
              }),
            ],
          }),
        });
      });
    },
    3088: (e, r, t) => {
      "use strict";
      t.d(r, { c: () => i });
      var s = t(7850),
        a = t(90626);
      function i(e) {
        const {
            rgSources: r,
            onIncrementalError: t,
            onError: i,
            strAltText: n,
            ref: l,
            ...o
          } = e,
          [d, c] = a.useState(0),
          u = a.useMemo(() => JSON.stringify(r), [r]),
          [h, m] = a.useState(u);
        h != u && (m(u), c(0));
        const p = a.useMemo(() => {
            let t = "";
            return (
              r && r.length > d && (t = r[d]),
              t ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  d,
                ),
                (t =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              t
            );
          }, [r, d, e]),
          f = a.useCallback(
            (e) => {
              t?.(e, r[d], d);
              const s = d + 1;
              s >= r.length && i && i(e), s < r.length && c(s);
            },
            [d, i, t, r],
          ),
          g = a.useRef(null);
        return (
          a.useImperativeHandle(
            l,
            () => ({ imgRef: g, nSourceIndex: d, nSourceLength: r.length }),
            [g, d, r],
          ),
          a.useEffect(() => {
            const e = g.current;
            e?.complete && 0 == e.naturalWidth && (e.src = e.src);
          }, []),
          (0, s.jsx)("img", { ref: g, ...o, src: p, onError: f, alt: n }, h)
        );
      }
    },
    108: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => E });
      var s = t(7850),
        a = t(17041),
        i = t(22837),
        n = t(45699),
        l = t(66418),
        o = t(67936),
        d = t(22623),
        c = t(10224),
        u = t(78327),
        h = t(31352);
      function m(e) {
        return (0, u.Qn)()
          ? (0, s.jsx)(d.p, { ...e })
          : (0, c.c5)()
            ? (0, s.jsx)(d.p, { ...e, bShowReviewSummary: !0 })
            : (0, s.jsx)(h.T, { ...e });
      }
      var p = t(25698),
        f = t(42834),
        g = t(52471),
        x = t(14987),
        b = t(39777),
        j = t(60014),
        _ = t(44433),
        v = t(90626),
        S = t(84811),
        C = t(32630),
        A = t(52038),
        y = t(37882),
        T = t.n(y);
      function N(e) {
        const { appid: r, strUrlOverride: t } = e,
          a = (0, x.$5)(r),
          { data: i } = (0, b.J$)(a);
        return (
          (0, v.useEffect)(() => {
            if (i) {
              const e = `${l.TS.STORE_BASE_URL}${i.store_url_path}`.replace(
                "/app/",
                t ?? "/verified/",
              );
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [i, t]),
          i && a
            ? (0, s.jsx)(C.Ay, {
                method: "verifiedprogram",
                children: (0, s.jsx)(S.tH, {
                  children: (0, s.jsx)(B, { id: a }),
                }),
              })
            : null
        );
      }
      function M(e) {
        const { id: r } = e,
          { data: t } = (0, b.J$)(r),
          a = `${l.TS.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: T().Headline,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckTitle",
                t?.name,
                (0, s.jsxs)("span", {
                  className: T().Verified,
                  children: [
                    (0, s.jsx)("img", {
                      src: a,
                      alt: o.F5.Localize("#VerifiedProgram_DeckAlt"),
                    }),
                    o.F5.Localize("#VerifiedProgram_DeckTitle_Verified"),
                  ],
                }),
              ),
            }),
            (0, s.jsx)("div", {
              className: T().Subtitle,
              children: o.F5.LocalizeReact(
                "#VerifiedProgram_DeckSubTitle",
                (0, s.jsx)(n.Ii, {
                  className: T().Link,
                  href: `${l.TS.STORE_BASE_URL}greatondeck`,
                  children: o.F5.Localize("#VerifiedProgram_GreatOnDeck"),
                }),
              ),
            }),
          ],
        });
      }
      function B(e) {
        const { id: r } = e;
        return (0, s.jsxs)("div", {
          className: T().Ctn,
          children: [
            (0, s.jsx)(k, { id: r }),
            (0, s.jsxs)("div", {
              className: (0, A.A)("page_content"),
              children: [
                (0, s.jsx)(M, { id: r }),
                (0, s.jsx)(I, { id: r }),
                (0, s.jsx)(P, { id: r }),
                (0, s.jsx)(L, {}),
              ],
            }),
          ],
        });
      }
      function k(e) {
        const { id: r } = e,
          { data: t } = (0, b.lv)(r);
        if (!t) return null;
        const a =
          (0, f.b0)(t, "library_hero_2x") ?? (0, f.b0)(t, "library_hero");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: T().BackgroundImageCtn,
              children: (0, s.jsx)("img", { src: a, alt: "" }),
            }),
            (0, s.jsx)("div", {
              className: T().BackgroundImageBlurCtn,
              children: (0, s.jsx)("img", { src: a, alt: "" }),
            }),
          ],
        });
      }
      function P(e) {
        const { id: r } = e;
        return (0, s.jsx)("div", {
          className: T().CapsuleWrapper,
          children: (0, s.jsx)(m, {
            id: "appid" in r ? r.appid : 0,
            type: "game",
            bShowDeckCompatibilityDialog: !1,
            bShowDemoButton: !0,
            bAutoFocus: !0,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function L(e) {
        const r = (0, j.aL)(
          `${l.TS.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
          "banner",
        );
        return (0, s.jsx)(n.Ii, {
          href: r,
          className: (0, A.A)(T().HardwareBannerCtn),
          children: (0, s.jsx)(D, {}),
        });
      }
      function I(e) {
        const { id: r } = e,
          { data: t } = (0, b.J$)(r),
          a = (0, g.TH)(r);
        if (!a) return null;
        const i = `${l.TS.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
          { rgDashTrailers: n, rgHlsTrailers: d } = (0, g.hg)(a);
        return (0, s.jsxs)("div", {
          className: T().DeviceFullWidthShadow,
          children: [
            (0, s.jsxs)("div", {
              className: (0, A.A)(T().DeviceWrapper),
              children: [
                (0, s.jsx)(p.S, {
                  children: (0, s.jsx)("div", {
                    className: T().TrailerCtn,
                    children: (0, s.jsx)(_.P, {
                      dashManifests: n,
                      hlsManifest: d[0],
                      screenshot:
                        a.screenshot_full ?? a.screenshot_medium ?? "",
                      altText: t?.name ?? "",
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                }),
                (0, s.jsx)("img", {
                  src: i,
                  alt: o.F5.Localize("#VerifiedProgram_DeckDeviceAlt"),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: T().VideoDisclaimer,
              children: o.F5.Localize("#VerifiedProgram_DeckDisclaimer"),
            }),
          ],
        });
      }
      function D(e) {
        const r = (0, c.zI)(),
          t = (0, i.sfN)(l.TS.LANGUAGE);
        return (0, s.jsx)(a.u, {
          language: t,
          strAltText: o.F5.Localize("#VerifiedProgram_DeckShopBannerAlt"),
          strImageToken: r
            ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
            : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
        });
      }
      function E(e) {
        const {
          match: {
            params: { appid: r },
          },
        } = e;
        return (0, s.jsx)(N, { appid: Number.parseInt(r) });
      }
    },
  },
]);
