/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7701],
  {
    73187: (e) => {
      e.exports = {
        CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
        GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
        GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
      };
    },
    47444: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        carouselNavButton: "_13rGo4vexAbY9-CP7FsLOg",
        carouselBtnCtn: "_3zfZ9tkIrSDZdSTv8mvZ3-",
        left: "S8IHdovT5T2iEVg_97xve",
        right: "Cq59o5WQ49zTvvFY56QYS",
        carouselBody: "_3a31O8XB_8lD-yov8FB9-9",
        sliderBody: "_2M3SnYGvMvplWUC8yGhowo",
        slideTrayCustomize: "_2VUpHDtxN8lR1LDahY_cI2",
        breadcrumbContainer: "_3HjnEmKg66o82ah74EIvmq",
        breadcrumbContainerTemplate: "_3dMffY_iRZXHjZmXN9aLej",
        pip: "_3Byg6Wc4TX36gkUptUIk72",
        pipList: "LY1m24ODS7AFRuzclt0Sl",
        pipScrollerContainer: "_3SyN-YtXsML6ado0q-Gdve",
        pipScrollButton: "qE43Jfzl0qJX_a6XrMgSr",
        scrollNavDiv: "_95I5gwXXMBghRg-4uNQLr",
        scrollNavButton: "_1cpdoEGU0uiIWbGIU_qMbZ",
        pipScroller: "EMd4F6A8qdMk-l6os415A",
        scrollBackground: "WUHeTNYGQDQQg_jQe-78W",
        scrollForeground: "PQzkJfi8IxzjcFEDG-yv-",
        pipContainer: "_3TKX37FakYHikXh3Wtg2BU",
        pipNumber: "_1u4YJiW1cdufpC_wssM8Us",
        innerSlide: "_3Cc2bMRML2lEkSyi2IAZ9G",
        DisableSliderMotion: "_3J8-bW87K3pb8EpRNYq0JG",
        BackgroundAnimation: "_25VCY5c_WxOmDf5rM9ytzl",
        "ItemFocusAnim-darkerGrey-nocolor": "_3Wd6R5ArXmgfz1dMwANtD7",
        "ItemFocusAnim-darkerGrey": "_2mepLvzcUGS8PS7_cO5A4C",
        "ItemFocusAnim-darkGreySettings": "KiXqOP4sNGGqLzPFjAa3D",
        "ItemFocusAnim-darkGrey": "_3NRkgxBrOQc_fQX1HvTkk3",
        "ItemFocusAnim-grey": "SAxIC6YdDjzPzIqw_aS4s",
        "ItemFocusAnim-translucent-white-10": "_-1Vlo_3w2uf9fF1-AU1F4",
        "ItemFocusAnim-translucent-white-20": "_7B6-9HPzoer1QOmgjEAWS",
        "ItemFocusAnimBorder-darkGrey": "GRKCpstf6SP8ly-oMKYX3",
        "ItemFocusAnim-green": "_2cBvKmN3c2ILRdjHTpBZUQ",
        focusAnimation: "_3eJJYrpdNOdlU26_C9wlMp",
        hoverAnimation: "BiWwdgbiMRC3pAc-R3rqS",
      };
    },
    11279: (e) => {
      e.exports = { ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7" };
    },
    48335: (e) => {
      e.exports = {
        PersonalCalendarWidget: "_1rLdYDrWbYRcVNpPlFd225",
        PersonalCalendarWidgetDay: "uUNiI-Woa-IKlMTl8sNz4",
        TodayCtn: "zxpXN3eSl7IE7Y_HFaDsf",
        DayTitle: "_1UXC23q3yEmSJ2eQNdi-0W",
        DayOfWeek: "_8gOpVF6uAFG2cGwiwvREf",
        Date: "_2ZLaa9X1KqHlMCSw96mYaW",
        Today: "_3mRf-suj1kS8DGKgfnHAql",
        DayAppContainer: "_3LhmtdtkRlqwQbEcHrCJGs",
        MoreGames: "_2T5aAmTJF2RJhrBpoIOfqW",
        StoreAppHover: "_2Tqn7YAJcleffVrwKeeky6",
        StoreAppCapsule: "_1V0RCs8QeHLs8oLOr0MdyK",
        Hovered: "_1StchN24Q1CulpMocY_T5a",
        Image: "_15wSFuv0rJYhA009HlKKE1",
        NewBadge: "uh7LG17VS8cMtDP9jCt1f",
        ScreenshotCycler: "_2icO_OA6Rqt6nLSts5ow4E",
        Screenshot: "_3aD2ult5gmmxWA_7oCdUPO",
        Active: "kPZWPvJo2jw2t3b47viEo",
      };
    },
    20433: (e, r, t) => {
      "use strict";
      t.d(r, { j: () => m, u: () => p });
      var n = t(7850),
        s = t(90626),
        i = t(45699),
        l = t(55963),
        a = t(60014),
        o = t(49411),
        c = t(61336),
        d = t(52541),
        u = t(8527);
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
            fnHoverState: l,
            disableScreenshots: a,
            children: o,
          } = e,
          c = s.useRef(null),
          u = s.useCallback(
            (e) => {
              const t = h(r);
              t &&
                (l && l(!0),
                window.GameHover &&
                  (c.current &&
                    a &&
                    (c.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(i ? i() : c.current, e, "global_hover", {
                    type: t,
                    id: (0, d.G$)(r).id,
                    v6: 1,
                  })));
            },
            [l, i, a, r],
          ),
          m = s.useCallback(
            (e) => {
              h(r) &&
                (l && e.relatedTarget && l(!1),
                window.HideGameHover &&
                  window.HideGameHover(i ? i() : c.current, e, "global_hover"));
            },
            [r, l, i],
          );
        return (0, n.jsx)("div", {
          ref: c,
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
            fnOnClickOverride: s,
            strOverrideURL: p,
          } = e,
          _ = (0, a.n9)(),
          f = (0, o.w)(),
          v = (0, c.NT)(
            p ||
              (r && "creatorid" in r
                ? (0, l.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(r).id}${t ? `?${t}` : ""}`,
                    _,
                    f,
                  )
                : (0, l.It)(
                    `${u.TS.STORE_BASE_URL}${h(r)}/${((0, d.G$))(r).id}${t ? `?${t}` : ""}`,
                    _,
                    f,
                  )),
          );
        return (0, n.jsx)(m, {
          ...e,
          children: (0, n.jsx)(i.Ii, {
            className: e.className,
            href: s ? void 0 : v,
            target: u.TS.IN_CLIENT || s ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: s,
            children: e.children,
          }),
        });
      }
    },
    80696: (e, r, t) => {
      "use strict";
      t.d(r, { C: () => n, m: () => p });
      var n,
        s = t(7850),
        i = t(96171),
        l = t(8527),
        a = t(39777),
        o = t(64238),
        c = t.n(o),
        d = t(90626),
        u = t(52471),
        h = t(73187),
        m = t.n(h);
      function p(e) {
        const { id: r, active: t, bIsHoverMode: o, eGrowOnActivate: h } = e,
          { data: _ } = (0, a.J$)(r),
          f = d.useRef(0),
          v = d.useRef(null);
        d.useLayoutEffect(() => {
          t && v.current && (v.current.currentTime = f.current);
        }, [t]);
        const S = (0, u.kB)(t ? r : void 0);
        if ((o && l.TS.IN_MOBILE) || !t) return null;
        if (!_ || !_.visible || !S) return null;
        const g = S.filter((e) => e.microtrailer && e.microtrailer.length > 0);
        if (0 === g.length)
          return _ &&
            _.related_items?.parent_appid &&
            (_.type == i.uE.ue || _.type == i.uE.Vi)
            ? (0, s.jsx)(p, {
                ...e,
                id: { appid: _.related_items.parent_appid },
              })
            : null;
        let b;
        switch (h) {
          case n.k_ETrailerGrowAmount_Implicit:
            b = m().GrowOnHoverImplicit;
            break;
          case n.k_ETrailerGrowAmount_Medium:
            b = m().GrowOnHoverMedium;
        }
        const w = g[0];
        return (0, s.jsx)("video", {
          className: c()(m().CapsuleMicroTrailer, b),
          loop: !0,
          muted: !0,
          controls: !1,
          autoPlay: !0,
          ref: v,
          onTimeUpdate: (e) => {
            f.current = e.currentTarget.currentTime;
          },
          children: w.microtrailer?.map((e) =>
            l.TS.IN_CLIENT && "video/mp4" == e.type
              ? null
              : (0, s.jsx)(
                  "source",
                  { src: (0, u.M4)(w, e.filename || ""), type: e.type },
                  e.filename,
                ),
          ),
        });
      }
      !(function (e) {
        (e[(e.k_ETrailerGrowAmount_None = 0)] = "k_ETrailerGrowAmount_None"),
          (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
            "k_ETrailerGrowAmount_Implicit"),
          (e[(e.k_ETrailerGrowAmount_Medium = 2)] =
            "k_ETrailerGrowAmount_Medium");
      })(n || (n = {}));
    },
    70310: (e, r, t) => {
      "use strict";
      t.d(r, { Ay: () => o, GZ: () => c, Gd: () => u });
      var n = t(41735),
        s = t.n(n),
        i = t(78327),
        l = t(80902),
        a = t(7860);
      class o {
        static s_PersonalCalendarStore;
        static Get() {
          return (
            o.s_PersonalCalendarStore ||
              ((o.s_PersonalCalendarStore = new o()),
              o.s_PersonalCalendarStore.Init(),
              (window.g_SubscriptionStore = o.s_PersonalCalendarStore)),
            o.s_PersonalCalendarStore
          );
        }
        async GetCalendarRecommendations(e, r, t) {
          const n = new Date();
          n.setDate(n.getDate() + t), n.setHours(0, 0, 0, 0);
          const s = new Date();
          s.setDate(s.getDate() - r), s.setHours(0, 0, 0, 0);
          const i = await a.L.fetchQuery(d(e, r, t));
          return (
            (i.arrAppInfos = i.arrAppInfos.filter(
              (e) =>
                e.nReleaseDate >= s.getTime() / 1e3 &&
                e.nReleaseDate < n.getTime() / 1e3,
            )),
            i
          );
        }
        Init() {}
      }
      function c(e, r, t) {
        return (0, l.I)(d(e, r, t));
      }
      function d(e, r, t) {
        return {
          queryKey: ["personalcalendar", e, r, t],
          queryFn: async () => {
            const r = { tag: e },
              t = await s().get(`${i.TS.STORE_BASE_URL}personalcalendardata`, {
                params: r,
                timeout: 2e4,
              });
            return {
              arrAppInfos: t.data.arrAppInfos,
              strResultMessage: t.data.strResultMessage,
              bUsesWishlistedGames: t.data.bUsesWishlistedGames,
            };
          },
          placeholderData: (e) => e,
        };
      }
      function u(e, r, t, n) {
        const s = new Date();
        if ((s.setDate(s.getDate() - e), t)) {
          const e = s.getDay() % 7;
          s.setDate(s.getDate() - e), s.setHours(0, 0, 0, 0);
        } else s.setHours(0, 0, 0, 0);
        const i = [],
          l = new Date(s),
          a = Math.ceil((e + r) / 7);
        for (let e = 0; e < a; e++) {
          i.push([]);
          for (let r = 0; r < 7; r++)
            (!n || (0 != l.getDay() && 6 != l.getDay())) &&
              i[e].push(Math.floor(l.getTime() / 1e3)),
              l.setDate(l.getDate() + 1),
              l.setHours(0, 0, 0, 0);
        }
        return i;
      }
    },
    64466: (e, r, t) => {
      "use strict";
      t.d(r, { l: () => s });
      var n = t(30470);
      function s(e, r) {
        if (e?.asset_url_format && e[r])
          return (
            n.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.asset_url_format.replace("${FILENAME}", e[r])
          );
      }
    },
    43568: (e, r, t) => {
      "use strict";
      t.d(r, { F: () => w });
      var n = t(7850),
        s = t(7445),
        i = t(76217),
        l = t(65731),
        a = t(90626),
        o = t(52038),
        c = t(61859),
        d = t(78327),
        u = t(47444),
        h = t(96236),
        m = t(11279);
      function p(e) {
        const {
            padded: r,
            gap: t,
            children: s,
            bLazyRenderChildren: l,
            startingSlide: c,
          } = e,
          d = a.useRef(null);
        a.useLayoutEffect(() => {
          d.current?.scrollIntoView({
            inline: "start",
            block: "nearest",
            behavior: "auto",
          });
        }, [c]);
        const u = (0, n.jsxs)(i.Z, {
          "flow-children": "row",
          style: { gap: t ? t + "px" : void 0 },
          className: (0, o.A)(
            { SaleSectionCarouselPadding: r },
            "ScrollSnapCarousel",
            "SaleSectionCarousel",
            m.ScrollSnapCarousel,
            e.className,
          ),
          children: [
            c &&
              a.Children.map(s, (e, r) =>
                (0, n.jsx)("div", { ref: r == c ? d : void 0, children: e }),
              ),
            !c && s,
          ],
        });
        return l
          ? (0, n.jsx)(h.K, {
              horizontal: !1,
              placeholderWidth: 1,
              placeholderHeight: 1,
              children: u,
            })
          : u;
      }
      var _ = t(60383),
        f = t(64238),
        v = t.n(f),
        S = t(27269);
      class g extends a.Component {
        render() {
          const { showArrows: e, arrowFill: r, arrowStyle: t } = this.props,
            s = this.props.visibleSlides,
            i = this.props.totalSlides,
            a = this.props.currentSlide;
          if (s >= i) return null;
          const c = (100 * a) / i,
            d = 100 * (1 - Math.min(a + s, i) / i),
            h = c + (50 * s) / i,
            m = 100 - h;
          return (0, n.jsxs)("div", {
            className: u.pipScrollerContainer,
            children: [
              e &&
                (0, n.jsx)(l._X, {
                  className: (0, o.A)(
                    u.pipScrollButton,
                    u.left,
                    u.carouselNavButton,
                  ),
                  children: (0, n.jsx)(S.m, {
                    arrowFill: r,
                    arrowStyle: t,
                    direction: "left",
                  }),
                }),
              (0, n.jsxs)("div", {
                className: u.pipScroller,
                children: [
                  (0, n.jsx)("div", { className: u.scrollBackground }),
                  (0, n.jsx)("div", {
                    className: u.scrollForeground,
                    style: { left: c + "%", right: d + "%" },
                  }),
                  (0, n.jsx)("div", {
                    className: u.scrollNavDiv,
                    style: { left: "0%", width: h + "%" },
                    children: (0, n.jsx)(l._X, {
                      className: (0, o.A)(
                        u.carouselNavButton,
                        u.scrollNavButton,
                      ),
                      style: { color: "red" },
                      children: (0, n.jsx)("div", {}),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: u.scrollNavDiv,
                    style: { right: "0%", width: m + "%" },
                    children: (0, n.jsx)(l.CC, {
                      className: (0, o.A)(
                        u.carouselNavButton,
                        u.scrollNavButton,
                      ),
                      children: (0, n.jsx)("div", {}),
                    }),
                  }),
                ],
              }),
              e &&
                (0, n.jsx)(l.CC, {
                  className: (0, o.A)(
                    u.pipScrollButton,
                    u.right,
                    u.carouselNavButton,
                  ),
                  children: (0, n.jsx)(S.m, {
                    arrowFill: r,
                    arrowStyle: t,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      }
      const b = (0, l.Yw)(g, (e) => ({
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      }));
      function w(e) {
        const { bPreventSnapCarousel: r } = e,
          t = (0, d.Qn)();
        return r || ((e.screenIsWide || t) && !e.bForceSimpleCarousel)
          ? (0, n.jsx)(C, { ...e, children: e.children })
          : (0, n.jsx)(p, { ...e, children: e.children });
      }
      function C(e) {
        const r = (0, d.Qn)(),
          t = () => a.Children.count(e.children),
          s = t(),
          c = Math.min(t(), e.visibleElements);
        if (!s || !c) return null;
        const m = c < s,
          p = e.hideArrows || !m,
          _ = !m || e.hidePips;
        let f = 4 / 3,
          S = !0;
        e.slideAspectRatio && ((f = e.slideAspectRatio), (S = !1));
        const g = `items_in_row_${e.visibleElements}`;
        return (0, n.jsx)(i.Z, {
          "flow-children": "row",
          className: (0, o.A)(u.carouselBody, e.className, g),
          navKey: e.navKey,
          children: (0, n.jsxs)(l.gi, {
            visibleSlides: e.visibleElements,
            totalSlides: t(),
            naturalSlideWidth: 100 * f,
            naturalSlideHeight: 100,
            step: e.visibleElements,
            infinite: !e.disableEdgeWrap,
            isIntrinsicHeight: S,
            dragEnabled: !1,
            touchEnabled: !1,
            lockOnWindowScroll: !0,
            orientation: "horizontal",
            disableKeyboard: !0,
            currentSlide: e.startingSlide,
            children: [
              (0, n.jsx)(x, {
                bHideArrows: p,
                bAutoAdvance: e.bAutoAdvance && !r,
                onSlide: e.onSlide,
                arrowFill: e.arrowFill,
                arrowStyle: e.arrowStyle,
                children: a.Children.map(e.children, (t, s) => {
                  const i = e.bLazyRenderChildren
                    ? (0, n.jsx)(h.K, {
                        rootMargin: "0px -5px 0px 100%",
                        horizontal: !0,
                        placeholderWidth: 1,
                        placeholderHeight: 1,
                        holdGamepadFocus: r,
                        children: t,
                      })
                    : t;
                  return (0, n.jsx)(
                    l.q7,
                    {
                      className: u.innerSlide,
                      index: s,
                      role: "listitem",
                      "aria-label": void 0,
                      children: i,
                    },
                    "slide_" + s,
                  );
                }),
              }),
              !_ &&
                (e.useTestScrollbar
                  ? (0, n.jsx)(b, { showArrows: p, carouselStore: null })
                  : (0, n.jsx)("div", {
                      className: v()({
                        [u.breadcrumbContainer]: !0,
                        [u.breadcrumbContainerTemplate]:
                          e.className?.includes("template-carousel"),
                      }),
                      children: (0, n.jsx)(A, {
                        ...e,
                        nPageSize: c,
                        children: e.children,
                      }),
                    })),
            ],
          }),
        });
      }
      function A(e) {
        const { nPageSize: r } = e,
          t = a.useContext(l.Yc),
          [s, i] = a.useState(t.state.currentSlide);
        return (
          a.useEffect(
            () =>
              t.subscribe(() => {
                i(t.state.currentSlide);
              }),
            [t],
          ),
          (0, n.jsx)(n.Fragment, {
            children: a.Children.map(e.children, (t, i) => {
              if (i % r !== 0) return null;
              const a = s >= i && s < i + r;
              return (0, n.jsx)(
                l.cL,
                {
                  slide: i,
                  className: u.pip,
                  children: (0, n.jsx)(S.U, { ...e, bIsActive: a }),
                },
                i,
              );
            }),
          })
        );
      }
      function y(e) {
        e && (window.clearTimeout(e.current), (e.current = null));
      }
      function x(e) {
        const {
            bHideArrows: r,
            bAutoAdvance: t,
            children: i,
            onSlide: d,
            arrowFill: h,
            arrowStyle: m,
          } = e,
          p = a.useContext(l.Yc),
          f = a.useRef(p.state.currentSlide),
          [v, g] = a.useState(null),
          [b, w] = a.useState(!!t),
          C = a.useRef(null),
          A = a.useRef(null);
        a.useEffect(() => {
          const e = () => {
            C.current = window.setTimeout(() => {
              if (C.current) {
                y(C);
                let e = 0;
                p.state.currentSlide + p.state.visibleSlides <
                  p.state.totalSlides &&
                  (e = Math.min(
                    p.state.currentSlide + p.state.visibleSlides,
                    p.state.totalSlides - p.state.visibleSlides,
                  )),
                  p.setStoreState({ currentSlide: e });
              }
            }, 8e3);
          };
          b && e();
          const r = () => {
            const r = f.current,
              t = p.state.currentSlide;
            d && d(t), g(t > r ? "Right" : t < r ? "Left" : null), y(A);
            (A.current = window.setTimeout(() => {
              A.current && (g(null), y(A));
            }, 1e3)),
              (f.current = t),
              C.current ? (y(C), w(!1)) : b && e();
          };
          return (
            p.subscribe(r),
            () => {
              p.unsubscribe(r), y(C), y(A);
            }
          );
        }, [p, b]);
        const x = !!v && "CarouselSliding" + v;
        return (0, n.jsxs)("div", {
          className: (0, o.A)(u.sliderBody, "SliderBody", x),
          children: [
            !r &&
              (0, n.jsx)(l._X, {
                className: (0, o.A)(
                  u.carouselBtnCtn,
                  u.left,
                  u.carouselNavButton,
                  "CarouselBtnLeft",
                ),
                "aria-label": (0, c.we)("#Carousel_Prev"),
                children: (0, n.jsx)(S.m, {
                  arrowFill: h,
                  arrowStyle: m,
                  direction: "left",
                }),
              }),
            (0, n.jsx)(l.Ap, {
              className: _.J.GetScrollableClassname(),
              classNameTray: u.slideTrayCustomize,
              classNameAnimation: u.DisableSliderMotion,
              role: "list",
              children: (0, n.jsx)(s.q, { children: i }),
            }),
            !r &&
              (0, n.jsx)(l.CC, {
                className: (0, o.A)(
                  u.carouselBtnCtn,
                  u.right,
                  u.carouselNavButton,
                  "CarouselBtnRight",
                ),
                "aria-label": (0, c.we)("#Carousel_Next"),
                children: (0, n.jsx)(S.m, {
                  arrowFill: h,
                  arrowStyle: m,
                  direction: "right",
                }),
              }),
          ],
        });
      }
    },
    96236: (e, r, t) => {
      "use strict";
      t.d(r, { K: () => c });
      var n = t(34629),
        s = t(7850),
        i = t(90626),
        l = t(84933),
        a = t(60383),
        o = t(76217);
      class c extends i.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = i.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let r = this.state.bRenderChildren;
          if (r == e) return;
          if (r && !this.BLoadAndUnload()) return;
          let t = 0,
            n = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((t = e.width), (n = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: t,
            nPrevRenderHeight: n,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: r,
              holdGamepadFocus: t,
              onRender: n,
              style: i,
              mode: l,
              ...c
            } = this.props,
            d = this.state.bRenderChildren;
          let u = i;
          if (!d) {
            const t = this.state.nPrevRenderWidth || e,
              n = this.state.nPrevRenderHeight || r;
            (void 0 === n && void 0 === t) ||
              (u = { ...i, minHeight: n, minWidth: t });
          }
          const h = this.BLoadAndUnload() ? "repeated" : "once";
          let m = (0, s.jsx)(a.J, {
            ref: this.m_refContainer,
            style: u,
            ...c,
            onVisibilityChange: this.OnVisibilityChange,
            trigger: h,
            children: d && this.props.children,
          });
          return (
            t &&
              (m = (0, s.jsx)(o.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: m,
              })),
            m
          );
        }
      }
      (0, n.Cg)([l.oI], c.prototype, "OnVisibilityChange", null);
    },
    27269: (e, r, t) => {
      "use strict";
      t.d(r, { m: () => a, U: () => o });
      var n,
        s,
        i = t(7850);
      !(function (e) {
        (e.k_ECutArrowStyle = "single"),
          (e.k_EDoubleArrowStyle = "double"),
          (e.k_EThickChevron = "chevron"),
          (e.k_EFilledArrow = "filled"),
          (e.k_EPointyArrow = "pointy");
      })(n || (n = {})),
        (function (e) {
          (e.k_EPillCrumb = "pill"),
            (e.k_ECircularCrumb = "circle"),
            (e.k_ESquareCrumb = "square");
        })(s || (s = {}));
      var l = t(12155);
      function a(e) {
        const { arrowFill: r, arrowStyle: t, direction: s } = e;
        switch (t) {
          default:
          case n.k_ECutArrowStyle: {
            const e = "right" == s ? 0 : 180;
            return (0, i.jsx)(l.uMb, {
              fill: r || "white",
              role: "presentation",
              angle: e,
            });
          }
          case n.k_EDoubleArrowStyle: {
            const e = "right" == s ? 180 : 0;
            return (0, i.jsx)(l.F2T, {
              fill: r || "white",
              role: "presentation",
              angle: e,
            });
          }
          case n.k_EThickChevron: {
            const e = "right" == s ? 0 : 180;
            return (0, i.jsx)(l.l8x, {
              fill: r || "white",
              role: "presentation",
              angle: e,
            });
          }
          case n.k_EFilledArrow: {
            const e = "right" == s ? 90 : 270;
            return (0, i.jsx)(l.V5W, {
              fill: r || "white",
              role: "presentation",
              angle: e,
            });
          }
          case n.k_EPointyArrow:
            return (0, i.jsx)(l.L0X, {
              fill: r || "white",
              role: "presentation",
              direction: s || "left",
            });
        }
      }
      function o(e) {
        const {
            bIsActive: r,
            breadcrumbActiveColor: t,
            breadcrumbColor: n,
            breadcrumbStyle: a,
          } = e,
          o = r ? t || "#FFFFFF" : n || "#606974";
        switch (a) {
          default:
          case s.k_EPillCrumb:
            return (0, i.jsx)(l.IGf, { fill: o, role: "presentation" });
          case s.k_ECircularCrumb:
            return (0, i.jsx)(l.az8, { fill: o, role: "presentation" });
          case s.k_ESquareCrumb:
            return (0, i.jsx)(l.koA, { fill: o, role: "presentation" });
        }
      }
    },
    60383: (e, r, t) => {
      "use strict";
      t.d(r, { J: () => o });
      var n = t(34629),
        s = t(7850),
        i = t(90626),
        l = t(56011),
        a = t(84933);
      class o extends i.Component {
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        m_observer = null;
        m_refElement = i.createRef();
        m_elTracked = null;
        m_bPreviouslyIntersecting = !1;
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            (e.rootMargin != this.m_observer.rootMargin ||
              e.thresholds != this.m_observer.thresholds) &&
            this.DestroyObserver();
          let r = this.m_refElement.current;
          if (
            (this.m_observer &&
              r != this.m_elTracked &&
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && r)
          ) {
            let e = { root: this.FindScrollableAncestor(r) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, a.md)(r, this.OnIntersection, e));
          }
          this.m_observer &&
            r &&
            r != this.m_elTracked &&
            (this.m_observer.observe(r), (this.m_elTracked = r));
        }
        FindScrollableAncestor(e) {
          return l.Kf(e, (e) => {
            const r = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == r ||
              "auto" == r ||
              !!e.classList.contains(o.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, r) {
          let t = !1;
          for (const r of e)
            if (r.isIntersecting) {
              t = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != t &&
            ((this.m_bPreviouslyIntersecting = t),
            this.props.onVisibilityChange && this.props.onVisibilityChange(t),
            t && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: r,
            trigger: t,
            horizontal: n,
            ...i
          } = this.props;
          return (0, s.jsx)("div", {
            ref: this.m_refElement,
            ...i,
            children: this.props.children,
          });
        }
      }
      (0, n.Cg)([a.oI], o.prototype, "OnIntersection", null);
    },
    4434: (e, r, t) => {
      "use strict";
      t.d(r, { m: () => l });
      var n = t(41735),
        s = t.n(n),
        i = t(90626);
      function l(e) {
        const r = i.useRef(s().CancelToken.source());
        return (
          i.useEffect(() => {
            const t = r.current;
            return () => t.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          r.current
        );
      }
    },
    88916: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => H });
      var n = t(7850),
        s = t(91933),
        i = t(45699),
        l = t(76217),
        a = t(23310),
        o = t(3049),
        c = t(8527),
        d = t(30470),
        u = t(20433),
        h = t(80696),
        m = t(39777),
        p = t(60014),
        _ = t(90626),
        f = t(55963),
        v = t(70310),
        S = t(64466),
        g = t(43568),
        b = t(96236),
        w = t(49411),
        C = t(52038),
        A = t(61859),
        y = t(78327),
        x = t(48335),
        j = t(2589),
        N = t(42834),
        I = t(84933),
        E = t(75933);
      const T = {
        name: "personalcalendarPrefs",
        options: { path: "/personalcalendar", secure: !0, maxAge: 31536e6 },
        preferenceControls: { isTechnicallyNecessary: !0 },
      };
      var D;
      function R() {
        const e = (0, s.j_)(T),
          r = e ? JSON.parse(e) : void 0,
          t = (0, E.a4)(940),
          i = (0, p.n9)(),
          o = (0, w.w)(),
          d = (0, y.Qn)(),
          [u, h] = (0, _.useState)(!1),
          m = (0, _.useCallback)((e) => h(e), []),
          S = (0, v.GZ)(0, 14, 21),
          b = (0, v.Gd)(14, 21, !0, !0).flat(),
          C = (0, f.It)(`${c.TS.STORE_BASE_URL}personalcalendar`, i, o),
          j = (0, _.useCallback)(() => {
            window.location.href = C;
          }, [C]);
        if (!S.data)
          return (0, n.jsx)(l.Z, { className: x.PersonalCalendarWidget });
        let N = S.data.arrAppInfos;
        return (
          r &&
            ((N = N.filter((e) => !r.bHideOwned || !e.bIsOwned)),
            (N = N.filter((e) => !r.bHideEarlyAccess || !e.bIsEarlyAccess)),
            (N = N.filter((e) => {
              switch (r.eWishlistDisplay) {
                case D.Show:
                  return !0;
                case D.Only:
                  return e.bIsWishlisted;
                case D.Hide:
                  return !e.bIsWishlisted;
              }
            }))),
          (0, n.jsxs)(l.Z, {
            className: x.PersonalCalendarWidget,
            navEntryPreferPosition: a.iU.PREFERRED_CHILD,
            onFocusWithin: m,
            onOptionsButton: j,
            children: [
              (0, n.jsxs)("div", {
                className: "title_grid",
                children: [
                  (0, n.jsxs)("div", {
                    className: "home_section_title",
                    children: [
                      (0, n.jsx)("span", {
                        className: x.NewBadge,
                        children: (0, A.we)("#NewBadge"),
                      }),
                      (0, A.we)("#PersonalCalendar_Title"),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "home_section_subtitle",
                    children: (0, A.we)("#PersonalCalendar_Subtitle"),
                  }),
                  !d && (0, n.jsx)(k, { calendarURL: C, location: "desktop" }),
                ],
              }),
              (0, n.jsx)(g.F, {
                visibleElements: 5,
                hideArrows: !1,
                disableEdgeWrap: !0,
                hidePips: d,
                screenIsWide: t,
                startingSlide: 10,
                className: d ? void 0 : "fiveElementEightGap",
                children: b.map((e, t) =>
                  (0, n.jsx)(
                    M,
                    {
                      bInitialFocus: 10 === t,
                      nTimestamp: e,
                      nNextTimestamp: t < b.length - 1 ? b[t + 1] : e + 86400,
                      arrAppInfos: N,
                      nRankThreshold: r?.nResultsToShow,
                    },
                    e,
                  ),
                ),
              }),
              !d && (0, n.jsx)(k, { calendarURL: C, location: "mobile" }),
              d && (0, n.jsx)(G, { focusWithin: u }),
            ],
          })
        );
      }
      function k(e) {
        const { calendarURL: r, location: t } = e,
          s = "mobile" == t ? "see_more_mobile" : "see_more_desktop";
        return (0, n.jsx)("div", {
          className: `see_more_link ${s} home_section_button`,
          children: (0, n.jsx)("a", {
            href: r,
            className: "btn_small btn_medium btnv6_white_transparent",
            children: (0, n.jsx)("span", {
              children: (0, A.we)("#PersonalCalendar_Full"),
            }),
          }),
        });
      }
      function G(e) {
        const { focusWithin: r } = e;
        return (0, n.jsxs)("div", {
          className: (0, C.A)("see_more_gamepad_hint", r && "hover_active"),
          children: [
            (0, n.jsx)("img", {
              src: `${d.TS.IMG_URL}ico_gamepad/shared_button_y.svg`,
            }),
            (0, n.jsx)("div", {
              children: (0, A.we)("#PersonalCalendar_Full"),
            }),
          ],
        });
      }
      function M(e) {
        const {
            nTimestamp: r,
            nNextTimestamp: t,
            bInitialFocus: s,
            arrAppInfos: d,
            nRankThreshold: u,
          } = e,
          h = (0, p.n9)(),
          m = (0, w.w)(),
          v = (0, f.It)(`${c.TS.STORE_BASE_URL}personalcalendar`, h, m),
          S = new Date(1e3 * r),
          g = new Date(),
          b =
            S.getDate() === g.getDate() &&
            S.getMonth() === g.getMonth() &&
            S.getFullYear() === g.getFullYear(),
          j = S.toLocaleDateString((0, o.J)(), { weekday: "short" }),
          N = S.toLocaleString((0, o.J)(), {
            day: "numeric",
            month: "numeric",
          }),
          I = d.filter((e) => e.nReleaseDate > r && e.nReleaseDate < t),
          E = u ?? 100,
          T = I.filter((e) => e.nRank <= E).length - 2,
          [D, R] = _.useState(!1),
          k = (0, y.Qn)(),
          G = _.useRef(null);
        return (
          _.useEffect(() => {
            if (s && k && G.current) {
              const e = G.current.closest(".carousel__slide"),
                r = G.current.closest(".carousel__slider-tray-wrapper");
              r && e && (r.scrollLeft = e.offsetLeft);
            }
          }, [s, k]),
          (0, n.jsxs)(l.Z, {
            className: (0, C.A)(x.PersonalCalendarWidgetDay, b && x.TodayCtn),
            "flow-children": "column",
            children: [
              (0, n.jsxs)("div", {
                className: x.DayTitle,
                children: [
                  !b &&
                    (0, n.jsx)("div", { className: x.DayOfWeek, children: j }),
                  !b && (0, n.jsx)("div", { className: x.Date, children: N }),
                  b &&
                    (0, n.jsx)("div", {
                      className: x.Today,
                      children: (0, A.we)("#Time_Today"),
                    }),
                ],
              }),
              (0, n.jsx)(l.Z, {
                className: x.DayAppContainer,
                "flow-children": "column",
                navEntryPreferPosition: a.iU.MAINTAIN_Y,
                preferredFocus: s && !D,
                ref: G,
                onFocusWithin: () => R(!0),
                children: I.slice(0, 2).map((e) =>
                  (0, n.jsx)(F, { nAppID: e.nAppID }, e.nAppID),
                ),
              }),
              !k &&
                T > 0 &&
                (0, n.jsx)(i.Ii, {
                  href: v,
                  className: x.MoreGames,
                  children: (0, A.we)("#PersonalCalendar_More", T),
                }),
            ],
          })
        );
      }
      function F(e) {
        const r = (0, m.lv)({ appid: e.nAppID }),
          t = (0, E.a4)(940),
          [s, i] = _.useState(!1),
          a = _.useRef(null),
          o = (0, S.l)(r.data, t ? "main_capsule" : "hero_capsule"),
          { data: c } = (0, j.lI)(),
          d = c?.preferences?.disable_microtrailers;
        return (
          _.useEffect(() => {
            if (
              (a.current.setAttribute(
                "data-ds-appid",
                e.nAppID.toString() ?? "",
              ),
              window.GDynamicStore && window.$J)
            ) {
              const e = window.$J(a.current);
              window.GDynamicStore.DecorateDynamicItems(e);
            }
          }, [e.nAppID, a]),
          (0, n.jsx)(p.nn, {
            controller: "personalcalendar",
            feature: "personalcalendar-homepage",
            children: (0, n.jsx)(u.u, {
              id: { appid: e.nAppID },
              hoverClassName: x.StoreAppHover,
              disableScreenshots: !0,
              children: (0, n.jsxs)(l.Z, {
                ref: a,
                className: (0, C.A)(x.StoreAppCapsule, s && x.Hovered),
                onMouseOver: () => i(!0),
                onMouseOut: () => i(!1),
                children: [
                  (0, n.jsx)("img", { className: x.Image, src: o }),
                  d &&
                    s &&
                    (0, n.jsx)(B, {
                      id: { appid: e.nAppID },
                      nIntervalMS: 1e3,
                    }),
                  !d &&
                    (0, n.jsx)(h.m, {
                      id: { appid: e.nAppID },
                      active: s,
                      bIsHoverMode: !0,
                    }),
                ],
              }),
            }),
          })
        );
      }
      function B(e) {
        const r = (0, N.DT)(e.id),
          [t, s] = _.useState(0);
        return (
          (0, I.$$)(() => {
            r.length > 0 && s((t + 1) % r.length);
          }, e.nIntervalMS),
          r?.length && -1 != t
            ? (0, n.jsx)("div", {
                className: x.ScreenshotCycler,
                children: r.map((e, r) =>
                  (0, n.jsx)(
                    "img",
                    {
                      className: (0, C.A)(x.Screenshot, r == t && x.Active),
                      src:
                        d.TS.BASE_URL_SHARED_CDN +
                        "/store_item_assets/" +
                        e.filename,
                    },
                    e.filename,
                  ),
                ),
              })
            : null
        );
      }
      function H() {
        return c.iA.logged_in
          ? (0, n.jsx)(b.K, {
              placeholderHeight: 408,
              rootMargin: "0px 0px 100% 0px",
              children: (0, n.jsx)(R, {}),
            })
          : null;
      }
      !(function (e) {
        (e[(e.Show = 0)] = "Show"),
          (e[(e.Only = 1)] = "Only"),
          (e[(e.Hide = 2)] = "Hide");
      })(D || (D = {}));
    },
  },
]);
