/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9438],
    {
      79083: (I, F, r) => {
        "use strict";
        r.d(F, { m: () => l, U: () => E });
        var e = r(7850),
          a = r(36118),
          _ = ((d) => (
            (d.k_ECutArrowStyle = "single"),
            (d.k_EDoubleArrowStyle = "double"),
            (d.k_EThickChevron = "chevron"),
            (d.k_EFilledArrow = "filled"),
            (d.k_EPointyArrow = "pointy"),
            d
          ))(_ || {}),
          i = ((d) => (
            (d.k_EPillCrumb = "pill"),
            (d.k_ECircularCrumb = "circle"),
            (d.k_ESquareCrumb = "square"),
            d
          ))(i || {});
        function l(d) {
          const { arrowFill: b, arrowStyle: M, direction: C } = d;
          switch (M) {
            default:
            case _.k_ECutArrowStyle: {
              const n = C == "right" ? 0 : 180;
              return (0, e.jsx)(a.uMb, {
                fill: b || "white",
                role: "presentation",
                angle: n,
              });
            }
            case _.k_EDoubleArrowStyle: {
              const n = C == "right" ? 180 : 0;
              return (0, e.jsx)(a.F2T, {
                fill: b || "white",
                role: "presentation",
                angle: n,
              });
            }
            case _.k_EThickChevron: {
              const n = C == "right" ? 0 : 180;
              return (0, e.jsx)(a.l8x, {
                fill: b || "white",
                role: "presentation",
                angle: n,
              });
            }
            case _.k_EFilledArrow: {
              const n = C == "right" ? 90 : 270;
              return (0, e.jsx)(a.V5W, {
                fill: b || "white",
                role: "presentation",
                angle: n,
              });
            }
            case _.k_EPointyArrow:
              return (0, e.jsx)(a.L0X, {
                fill: b || "white",
                role: "presentation",
                direction: C || "left",
              });
          }
        }
        function E(d) {
          const {
              bIsActive: b,
              breadcrumbActiveColor: M,
              breadcrumbColor: C,
              breadcrumbStyle: n,
            } = d,
            P = b ? M || "#FFFFFF" : C || "#606974";
          switch (n) {
            default:
            case i.k_EPillCrumb:
              return (0, e.jsx)(a.IGf, { fill: P, role: "presentation" });
            case i.k_ECircularCrumb:
              return (0, e.jsx)(a.az8, { fill: P, role: "presentation" });
            case i.k_ESquareCrumb:
              return (0, e.jsx)(a.koA, { fill: P, role: "presentation" });
          }
        }
      },
      90405: (I, F, r) => {
        "use strict";
        r.d(F, { K: () => d, _: () => E });
        var e = r(7850),
          a = r(90626),
          _ = r(81944),
          i = r(19298);
        const l = a.createContext({ enabled: !0 });
        function E(b) {
          const { enabled: M, children: C } = b,
            n = a.useMemo(() => ({ enabled: M }), [M]);
          return (0, e.jsx)(l.Provider, { value: n, children: C });
        }
        function d(b) {
          const {
              placeholderWidth: M,
              placeholderHeight: C,
              holdGamepadFocus: n = !1,
              onRender: P,
              style: k,
              mode: H = "JustLoad",
              children: U,
              ...K
            } = b,
            O = a.useContext(l),
            [D, L] = a.useState(() => ({
              bRenderChildren: !O.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            w = a.useRef(null),
            p = H === "LoadAndUnload" && O.enabled,
            B = a.useCallback(
              (N) => {
                L((j) => {
                  if (j.bRenderChildren === N || (j.bRenderChildren && !p))
                    return j;
                  let t = 0,
                    o = 0;
                  if (w.current) {
                    const s = w.current.getBoundingClientRect();
                    s && ((t = s.width), (o = s.height));
                  }
                  return (
                    N && P && P(),
                    {
                      bRenderChildren: N,
                      nPrevRenderWidth: t,
                      nPrevRenderHeight: o,
                    }
                  );
                });
              },
              [p, P],
            );
          a.useEffect(() => {
            O.enabled || B(!0);
          }, [O.enabled, B]);
          let T = k;
          if (!D.bRenderChildren) {
            const N = D.nPrevRenderWidth || M,
              j = D.nPrevRenderHeight || C;
            (j !== void 0 || N !== void 0) &&
              (T = { ...k, minHeight: j, minWidth: N });
          }
          const z = p ? "repeated" : "once";
          let y = (0, e.jsx)(_.J, {
            containerRef: w,
            style: T,
            ...K,
            onVisibilityChange: B,
            trigger: z,
            children: D.bRenderChildren && U,
          });
          return (
            n &&
              (y = (0, e.jsx)(i.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: y,
              })),
            y
          );
        }
      },
      9941: (I, F, r) => {
        "use strict";
        r.d(F, {
          OE: () => k,
          T6: () => D,
          VU: () => U,
          WA: () => L,
          aL: () => K,
          af: () => O,
          h5: () => p,
          iD: () => H,
          sb: () => P,
        });
        var e = r(7850),
          a = r(90626),
          _ = r(69696),
          i = r.n(_),
          l = r(36707),
          E = r(16412),
          d = r(18210),
          b = r(30096),
          M = r(40365),
          C = r(97996);
        const n = "bTrailerCarouselAutoAdvance",
          P = 0,
          k = 1,
          H = 2,
          U = 3,
          K = 4,
          O = 5,
          D = 1e4;
        function L(B) {
          const {
              className: T,
              currentItemKey: z,
              autoAdvanceMsec: y,
              fnAdvance: N,
              enabled: j,
              pauseReason: t,
              countdownToken: o = "#SaleTrailerCarousel_NextGameInSeconds",
            } = B,
            s = a.useMemo(() => {
              const A = (0, C.VY)(n);
              return !A || A?.toLowerCase() === "true";
            }, []),
            [v, f] = a.useState(s),
            c = y !== void 0 ? y : D,
            [u, h] = a.useState(c),
            g = t !== void 0,
            x = w(t),
            m = j && v && !g && c > 0 && u > 0,
            S = 30;
          (0, b.$$)(
            () => {
              const A = u - S;
              A <= 0 ? (N(), h(c)) : h(Math.max(A, 0));
            },
            S,
            [c],
            m,
          );
          const R = a.useCallback(
            (A) => {
              (0, C.lc)(n, String(A), 365 * 10), f(A), h(c);
            },
            [c],
          );
          return (
            a.useEffect(() => {
              h(c);
            }, [z, c]),
            (0, e.jsxs)("div", {
              className: T,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, l.A)(
                    i().AutoAdvanceContent,
                    (!j || !v) && i().Disabled,
                    g && i().Paused,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: i().AutoAdvanceLabel,
                      children: !g || !x ? (0, d.Yp)(o, Math.ceil(u / 1e3)) : x,
                    }),
                    (0, e.jsx)("div", {
                      className: i().AutoAdvanceBar,
                      style: {
                        "--auto-advance-ratio": `${100 - (u / c) * 100}%`,
                      },
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().AutoAdvanceCheckboxCtn),
                  children: (0, e.jsx)(E.Yh, {
                    className: i().AutoAdvanceCheckbox,
                    controlled: !0,
                    checked: v,
                    label: (0, d.we)("#SaleTrailerCarousel_AutoAdvanceEnabled"),
                    onChange: R,
                  }),
                }),
              ],
            })
          );
        }
        function w(B) {
          switch (B) {
            case K:
              return (0, d.we)("#SaleTrailerCarousel_AutoAdvanceVideoPaused");
            case U:
            case O:
              return (0, d.we)("#SaleTrailerCarousel_AutoAdvanceHover");
          }
        }
        function p() {
          const [B, T] = a.useState(!1),
            [z, y] = a.useState(!1);
          a.useEffect(() => {
            const o = () => T(document.hidden);
            return (
              document.addEventListener("visibilitychange", o),
              () => document.removeEventListener("visibilitychange", o)
            );
          }, []);
          const N = a.useCallback((o) => y(!o.isIntersecting), []),
            j = a.useMemo(() => ({ threshold: 0.5 }), []),
            t = (0, M.BL)(N, j);
          return { bTabHidden: B, bOffscreen: z, refIntersection: t };
        }
      },
      68538: (I, F, r) => {
        "use strict";
        r.d(F, { F: () => B });
        var e = r(7850),
          a = r(54130),
          _ = r(19298),
          i = r(65731),
          l = r(90626),
          E = r(36707),
          d = r(18210),
          b = r(3166),
          M = r(94162),
          C = r(9941),
          n = r(47444),
          P = r(90405),
          k = r(11279);
        function H(t) {
          const {
            nSlideIndex: o,
            nStartingSlideIndex: s,
            ref: v,
            children: f,
          } = t;
          return s === void 0
            ? f
            : (0, e.jsx)("div", { ref: o === s ? v : void 0, children: f });
        }
        function U(t) {
          const {
              padded: o,
              gap: s,
              children: v,
              bLazyRenderChildren: f,
              lazyRenderPlaceholderWidth: c,
              lazyRenderPlaceholderHeight: u,
              startingSlide: h,
            } = t,
            g = l.useRef(null),
            x = l.useRef(null),
            m = (0, b.Qn)();
          l.useLayoutEffect(() => {
            !g.current ||
              !x.current ||
              (g.current.scrollLeft +=
                x.current.getBoundingClientRect().left -
                g.current.getBoundingClientRect().left);
          }, [h]);
          const S = l.Children.map(v, (A, W) =>
              f
                ? (0, e.jsx)(P.K, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: c ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: m,
                    children: (0, e.jsx)(H, {
                      nSlideIndex: W,
                      nStartingSlideIndex: h,
                      ref: x,
                      children: A,
                    }),
                  })
                : (0, e.jsx)(H, {
                    nSlideIndex: W,
                    nStartingSlideIndex: h,
                    ref: x,
                    children: A,
                  }),
            ),
            R = (0, e.jsx)(_.Z, {
              "flow-children": "row",
              style: { gap: s ? s + "px" : void 0 },
              className: (0, E.A)(
                { SaleSectionCarouselPadding: o },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                k.ScrollSnapCarousel,
                t.className,
              ),
              ref: g,
              children: S,
            });
          return f
            ? (0, e.jsx)(P.K, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: u ?? 1,
                children: R,
              })
            : R;
        }
        var K = r(81944),
          O = r(64238),
          D = r.n(O),
          L = r(79083);
        class w extends l.Component {
          render() {
            const { showArrows: o, arrowFill: s, arrowStyle: v } = this.props,
              f = this.props.visibleSlides,
              c = this.props.totalSlides,
              u = this.props.currentSlide;
            if (f >= c) return null;
            const h = (100 * u) / c,
              g = 100 * (1 - Math.min(u + f, c) / c),
              x = (50 * f) / c,
              m = h + x,
              S = 100 - m;
            return (0, e.jsxs)("div", {
              className: n.pipScrollerContainer,
              children: [
                o &&
                  (0, e.jsx)(i._X, {
                    className: (0, E.A)(
                      n.pipScrollButton,
                      n.left,
                      n.carouselNavButton,
                    ),
                    children: (0, e.jsx)(L.m, {
                      arrowFill: s,
                      arrowStyle: v,
                      direction: "left",
                    }),
                  }),
                (0, e.jsxs)("div", {
                  className: n.pipScroller,
                  children: [
                    (0, e.jsx)("div", { className: n.scrollBackground }),
                    (0, e.jsx)("div", {
                      className: n.scrollForeground,
                      style: { left: h + "%", right: g + "%" },
                    }),
                    (0, e.jsx)("div", {
                      className: n.scrollNavDiv,
                      style: { left: "0%", width: m + "%" },
                      children: (0, e.jsx)(i._X, {
                        className: (0, E.A)(
                          n.carouselNavButton,
                          n.scrollNavButton,
                        ),
                        style: { color: "red" },
                        children: (0, e.jsx)("div", {}),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: n.scrollNavDiv,
                      style: { right: "0%", width: S + "%" },
                      children: (0, e.jsx)(i.CC, {
                        className: (0, E.A)(
                          n.carouselNavButton,
                          n.scrollNavButton,
                        ),
                        children: (0, e.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                o &&
                  (0, e.jsx)(i.CC, {
                    className: (0, E.A)(
                      n.pipScrollButton,
                      n.right,
                      n.carouselNavButton,
                    ),
                    children: (0, e.jsx)(L.m, {
                      arrowFill: s,
                      arrowStyle: v,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const p = (0, i.Yw)(w, (t) => ({
          currentSlide: t.currentSlide,
          totalSlides: t.totalSlides,
          visibleSlides: t.visibleSlides,
        }));
        function B(t) {
          const { bForceSimpleCarousel: o, screenIsWide: s, children: v } = t,
            f = (0, b.Qn)();
          return (s || f) && !o
            ? (0, e.jsx)(T, { ...t, children: v })
            : (0, e.jsx)(U, { ...t, children: v });
        }
        function T(t) {
          const o = (0, b.Qn)(),
            [s, v] = l.useState(!1),
            { bTabHidden: f, bOffscreen: c, refIntersection: u } = (0, C.h5)(),
            h = () => l.Children.count(t.children),
            g = () => Math.min(h(), t.visibleElements),
            x = () =>
              l.Children.map(t.children, (V, Z) => {
                const $ = t.bLazyRenderChildren
                  ? (0, e.jsx)(P.K, {
                      rootMargin: "0px 100% 0px 100%",
                      horizontal: !0,
                      placeholderWidth: t.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: t.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: o,
                      children: V,
                    })
                  : V;
                return (0, e.jsx)(
                  i.q7,
                  {
                    className: n.innerSlide,
                    index: Z,
                    role: "listitem",
                    "aria-label": void 0,
                    children: $,
                  },
                  "slide_" + Z,
                );
              }),
            m = h(),
            S = g();
          if (!m || !S) return null;
          const R = S < m,
            A = t.hideArrows || !R,
            W = !R || t.hidePips,
            Y = !!t.bAutoAdvance && R && !o;
          let G;
          s && !(0, M.$W)() ? (G = C.af) : f ? (G = C.OE) : c && (G = C.iD);
          let X = 4 / 3,
            Q = !0;
          t.slideAspectRatio && ((X = t.slideAspectRatio), (Q = !1));
          const J = `items_in_row_${t.visibleElements}`;
          return (0, e.jsx)(_.Z, {
            "flow-children": "row",
            className: (0, E.A)(n.carouselBody, t.className, J),
            navKey: t.navKey,
            ref: u,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: (0, e.jsxs)(i.gi, {
              visibleSlides: t.visibleElements,
              totalSlides: h(),
              naturalSlideWidth: 100 * X,
              naturalSlideHeight: 100,
              step: t.visibleElements,
              infinite: !t.disableEdgeWrap,
              isIntrinsicHeight: Q,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: t.startingSlide,
              children: [
                (0, e.jsx)(j, {
                  bHideArrows: A,
                  onSlide: t.onSlide,
                  arrowFill: t.arrowFill,
                  arrowStyle: t.arrowStyle,
                  children: x(),
                }),
                !W &&
                  (t.useTestScrollbar
                    ? (0, e.jsx)(p, { showArrows: A, carouselStore: null })
                    : (0, e.jsx)("div", {
                        className: D()({
                          [n.breadcrumbContainer]: !0,
                          [n.breadcrumbContainerTemplate]:
                            t.className?.includes("template-carousel"),
                        }),
                        children: (0, e.jsx)(z, {
                          ...t,
                          nPageSize: S,
                          children: t.children,
                        }),
                      })),
                Y && (0, e.jsx)(N, { pauseReason: G }),
              ],
            }),
          });
        }
        function z(t) {
          const { nPageSize: o } = t,
            s = l.useContext(i.Yc),
            [v, f] = l.useState(s.state.currentSlide);
          return (
            l.useEffect(
              () =>
                s.subscribe(() => {
                  f(s.state.currentSlide);
                }),
              [s],
            ),
            (0, e.jsx)(e.Fragment, {
              children: l.Children.map(t.children, (c, u) => {
                if (u % o !== 0) return null;
                const h = v >= u && v < u + o;
                return (0, e.jsx)(
                  i.cL,
                  {
                    slide: u,
                    className: n.pip,
                    children: (0, e.jsx)(L.U, { ...t, bIsActive: h }),
                  },
                  u,
                );
              }),
            })
          );
        }
        function y(t) {
          t.current && (window.clearTimeout(t.current), (t.current = null));
        }
        function N(t) {
          const { pauseReason: o } = t,
            s = l.useContext(i.Yc),
            [v, f] = l.useState(s.state.currentSlide),
            [c, u] = l.useState(!0),
            h = l.useRef(null),
            g = l.useRef(s.state.currentSlide);
          l.useEffect(() => {
            const m = () => {
              const S = s.state.currentSlide;
              S !== g.current &&
                ((g.current = S),
                f(S),
                h.current === S
                  ? (h.current = null)
                  : h.current === null && u(!1));
            };
            return s.subscribe(m), () => s.unsubscribe(m);
          }, [s]);
          const x = l.useCallback(() => {
            const {
              currentSlide: m,
              visibleSlides: S,
              totalSlides: R,
            } = s.state;
            let A = 0;
            m + S < R && (A = Math.min(m + S, R - S)),
              A !== m &&
                ((h.current = A), s.setStoreState({ currentSlide: A }));
          }, [s]);
          return (0, e.jsx)(C.WA, {
            className: n.autoAdvanceRow,
            enabled: c,
            currentItemKey: v,
            autoAdvanceMsec: C.T6,
            fnAdvance: x,
            pauseReason: o,
            countdownToken: "#Carousel_AutoAdvanceNextInSeconds",
          });
        }
        function j(t) {
          const {
              bHideArrows: o,
              children: s,
              onSlide: v,
              arrowFill: f,
              arrowStyle: c,
            } = t,
            u = l.useContext(i.Yc),
            h = l.useRef(u.state.currentSlide),
            [g, x] = l.useState(null),
            m = l.useRef(null);
          l.useEffect(() => {
            const R = () => {
              const A = h.current,
                W = u.state.currentSlide;
              v && v(W), x(W > A ? "Right" : W < A ? "Left" : null), y(m);
              const Y = 1e3;
              (m.current = window.setTimeout(() => {
                m.current && (x(null), y(m));
              }, Y)),
                (h.current = W);
            };
            return (
              u.subscribe(R),
              () => {
                u.unsubscribe(R), y(m);
              }
            );
          }, [u]);
          const S = !!g && "CarouselSliding" + g;
          return (0, e.jsxs)("div", {
            className: (0, E.A)(n.sliderBody, "SliderBody", S),
            children: [
              !o &&
                (0, e.jsx)(i._X, {
                  className: (0, E.A)(
                    n.carouselBtnCtn,
                    n.left,
                    n.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, d.we)("#Carousel_Prev"),
                  children: (0, e.jsx)(L.m, {
                    arrowFill: f,
                    arrowStyle: c,
                    direction: "left",
                  }),
                }),
              (0, e.jsx)(i.Ap, {
                className: K.J.GetScrollableClassname(),
                classNameTray: n.slideTrayCustomize,
                classNameAnimation: n.DisableSliderMotion,
                role: "list",
                children: (0, e.jsx)(a.q, { children: s }),
              }),
              !o &&
                (0, e.jsx)(i.CC, {
                  className: (0, E.A)(
                    n.carouselBtnCtn,
                    n.right,
                    n.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, d.we)("#Carousel_Next"),
                  children: (0, e.jsx)(L.m, {
                    arrowFill: f,
                    arrowStyle: c,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      },
      69696: (I) => {
        I.exports = {
          AutoAdvanceContent: "_1ot7iONiZzKf4TAHgPi3qY",
          Paused: "XXYx3DB0gLYbEuuCX_8Q7",
          Disabled: "_13IEBrvx5g_lHE4QFLKYgW",
          AutoAdvanceLabel: "_2jjPGobp_uYqLu7LCVWXx8",
          AutoAdvanceBar: "_3ew7tsjPX6rYyFcWm_Ohz8",
          AutoAdvanceCheckbox: "_1YFnAY801Coag4pbippyH6",
          AutoAdvanceCheckboxCtn: "Fy_-Cbz1CV38fntOKZ5Qo",
        };
      },
      47444: (I) => {
        I.exports = {
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
          autoAdvanceRow: "_3M0zxbf96I8oQlbNsHboy4",
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
      11279: (I) => {
        I.exports = { ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7" };
      },
    },
  ]);
})();
