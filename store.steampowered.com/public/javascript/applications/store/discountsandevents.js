/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [44419],
    {
      95414: (j, x, e) => {
        "use strict";
        e.d(x, { j: () => D, u: () => P });
        var t = e(7850),
          A = e(90626),
          u = e(24660),
          M = e(83482),
          B = e(72865),
          S = e(77200),
          H = e(53113),
          b = e(68094),
          i = e(72609),
          r = e(3166);
        function m(_) {
          if (_) {
            if ("appid" in _) return "app";
            if ("bundleid" in _) return "bundle";
            if ("packageid" in _) return "sub";
          }
        }
        function D(_) {
          const {
              id: v,
              hoverClassName: f,
              fnGetIDOverride: p,
              fnHoverState: T,
              disableScreenshots: U,
              children: c,
            } = _,
            a = A.useRef(null),
            E = A.useCallback(
              (W) => {
                const s = m(v);
                s &&
                  (T && T(!0),
                  window.GameHover &&
                    (a.current &&
                      U &&
                      (a.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(p ? p() : a.current, W, "global_hover", {
                      type: s,
                      id: (0, b.G$)(v).id,
                      v6: 1,
                    })));
              },
              [T, p, U, v],
            ),
            V = A.useCallback(
              (W) => {
                m(v) &&
                  (T && W.relatedTarget && T(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      p ? p() : a.current,
                      W,
                      "global_hover",
                    ));
              },
              [v, T, p],
            );
          return (0, t.jsx)("div", {
            ref: a,
            className: f,
            onMouseEnter: E,
            onMouseLeave: V,
            onFocus: E,
            onBlur: V,
            children: c,
          });
        }
        function P(_) {
          const {
              id: v,
              strExtraParams: f,
              fnOnClickOverride: p,
              strOverrideURL: T,
            } = _,
            U = (0, B.n9)(),
            c = (0, S.w)(),
            a = (0, H.NT)(
              T ||
                (v && "creatorid" in v
                  ? (0, M.It)(
                      `${i.TS.STORE_BASE_URL}curator/${((0, b.G$))(v).id}${f ? `?${f}` : ""}`,
                      U,
                      c,
                    )
                  : (0, M.It)(
                      `${i.TS.STORE_BASE_URL}${m(v)}/${((0, b.G$))(v).id}${f ? `?${f}` : ""}`,
                      U,
                      c,
                    )),
            );
          return (0, t.jsx)(D, {
            ..._,
            children: (0, t.jsx)(u.Ii, {
              className: _.className,
              href: p ? void 0 : a,
              target: i.TS.IN_CLIENT || p ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: p,
              children: _.children,
            }),
          });
        }
      },
      81944: (j, x, e) => {
        "use strict";
        e.d(x, { J: () => H });
        var t = e(7850),
          A = e(19298),
          u = e(90626),
          M = e(79089),
          B = e(18938),
          S = e(2259);
        class H extends u.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = u.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
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
          componentDidUpdate(i) {
            this.UpdateObserver(i);
          }
          UpdateObserver(i) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              i &&
              (i.rootMargin != this.m_observer.rootMargin ||
                i.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let r = this.m_refElement.current;
            if (
              (this.m_observer &&
                r != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && r)
            ) {
              let D = { root: this.FindScrollableAncestor(r) };
              this.props.rootMargin && (D.rootMargin = this.props.rootMargin),
                this.props.thresholds && (D.threshold = this.props.thresholds),
                (this.m_observer = (0, S.md)(r, this.OnIntersection, D));
            }
            this.m_observer &&
              r &&
              r != this.m_elTracked &&
              (this.m_observer.observe(r), (this.m_elTracked = r));
          }
          FindScrollableAncestor(i) {
            return (0, M.Kf)(i, (r) => {
              const m = this.props.horizontal
                ? window.getComputedStyle(r).overflowX
                : window.getComputedStyle(r).overflowY;
              return !!(
                m == "scroll" ||
                m == "auto" ||
                r.classList.contains(H.GetScrollableClassname())
              );
            });
          }
          HandleRef = (i) => {
            (0, B.cZ)(this.m_refElement, i),
              this.props.containerRef && (0, B.cZ)(this.props.containerRef, i);
          };
          OnIntersection = (i) => {
            let r = !1;
            for (const m of i)
              if (m.isIntersecting) {
                r = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != r &&
              ((this.m_bPreviouslyIntersecting = r),
              this.props.onVisibilityChange && this.props.onVisibilityChange(r),
              r && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: i,
              rootMargin: r,
              trigger: m,
              horizontal: D,
              containerRef: P,
              ..._
            } = this.props;
            return (0, t.jsx)(A.Z, {
              ref: this.HandleRef,
              ..._,
              children: this.props.children,
            });
          }
        }
      },
      97525: (j, x, e) => {
        "use strict";
        e.d(x, { i: () => b, o: () => i });
        var t = e(7850),
          A = e(64238),
          u = e.n(A),
          M = e(90626),
          B = e(3166),
          S = e(2213),
          H = e.n(S);
        function b(r) {
          const [m, D] = M.useState(!1),
            P = M.useCallback((v) => D(v && !!r), [r]),
            _ = M.useCallback(() => {
              !r || r.length === 0 || (window.location.href = r);
            }, [r]);
          return {
            bShowSeeMoreHint: m,
            panelProps: { onFocusWithin: P, onOptionsButton: _ },
          };
        }
        function i(r) {
          const { label: m, shown: D } = r;
          return (0, t.jsxs)("div", {
            className: u()(S.SeeMoreButtonGamepad, D && S.Focused),
            children: [
              (0, t.jsx)("img", {
                src: `${B.TS.IMG_URL}ico_gamepad/shared_button_y.svg`,
                alt: "Y",
              }),
              (0, t.jsx)("div", { children: m }),
            ],
          });
        }
      },
      87249: (j, x, e) => {
        "use strict";
        e.d(x, { C0: () => f, Ck: () => U, mj: () => p });
        var t = e(7850),
          A = e(48156),
          u = e(72609),
          M = e(64868),
          B = e(40358),
          S = e(41032),
          H = e(64238),
          b = e.n(H),
          i = e(90626),
          r = e(21721),
          m = e(25046),
          D = e(73187),
          P = e.n(D);
        const _ = 6,
          v = 1e3;
        var f = ((c) => (
          (c[(c.k_ETrailerGrowAmount_None = 0)] = "k_ETrailerGrowAmount_None"),
          (c[(c.k_ETrailerGrowAmount_Implicit = 1)] =
            "k_ETrailerGrowAmount_Implicit"),
          (c[(c.k_ETrailerGrowAmount_Medium = 2)] =
            "k_ETrailerGrowAmount_Medium"),
          c
        ))(f || {});
        function p(c) {
          const { id: a, active: E, bIsHoverMode: V, eGrowOnActivate: W } = c,
            { data: s } = (0, B.J$)(a),
            N = i.useRef(0),
            z = i.useRef(null);
          i.useLayoutEffect(() => {
            E && z.current && (z.current.currentTime = N.current);
          }, [E]);
          const J = (Y) => {
              N.current = Y.currentTarget.currentTime;
            },
            te = (0, S.nD)(a),
            se = (0, m.kB)(E && !te ? a : void 0);
          if ((V && u.TS.IN_MOBILE) || !E || !s || !s.visible) return null;
          if (te) return (0, t.jsx)(T, { id: a });
          if (!se) return null;
          const w = se.filter(
            (Y) => Y.microtrailer && Y.microtrailer.length > 0,
          );
          if (w.length === 0)
            return s &&
              s.related_items?.parent_appid &&
              (s.type == A.uE.ue || s.type == A.uE.Vi)
              ? (0, t.jsx)(p, {
                  ...c,
                  id: { appid: s.related_items.parent_appid },
                })
              : null;
          let q;
          switch (W) {
            case 1:
              q = P().GrowOnHoverImplicit;
              break;
            case 2:
              q = P().GrowOnHoverMedium;
              break;
          }
          const oe = w[0];
          return (0, t.jsx)("video", {
            className: b()(P().CapsuleMicroTrailer, q),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: z,
            playsInline: !0,
            onTimeUpdate: J,
            children: (0, t.jsx)(U, { trailer: oe }),
          });
        }
        function T(c) {
          const { id: a } = c,
            { data: E } = (0, B.j4)(a),
            [V, W] = i.useState(0),
            s = i.useMemo(
              () =>
                [...(E?.all_ages_screenshots || [])]
                  .sort((z, J) => z.ordinal - J.ordinal)
                  .slice(0, _),
              [E],
            );
          return (
            (0, M.$$)(() => {
              s.length > 0 && W((N) => (N + 1) % s.length);
            }, v),
            s.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: P().CapsuleMicroTrailer,
                  children: s.map((N, z) =>
                    (0, t.jsx)(
                      "img",
                      {
                        className: b()(
                          P().StandInScreenshot,
                          z == V && P().Active,
                        ),
                        src: (0, r.bu)(N, "600x338"),
                        alt: "",
                      },
                      N.filename,
                    ),
                  ),
                })
          );
        }
        function U(c) {
          const { trailer: a } = c;
          return !a || !a.microtrailer
            ? null
            : (0, t.jsx)(t.Fragment, {
                children: a.microtrailer?.map((E) =>
                  u.TS.IN_CLIENT && E.type == "video/mp4"
                    ? null
                    : (0, t.jsx)(
                        "source",
                        { src: (0, m.M4)(a, E.filename || ""), type: E.type },
                        E.filename,
                      ),
                ),
              });
        }
      },
      19908: (j, x, e) => {
        "use strict";
        e.r(x),
          e.d(x, { BuildDiscountsAndEventsPages: () => de, default: () => Le });
        var t = e(7850),
          A = e(24660),
          u = e(19298),
          M = e(20169),
          B = e(95414),
          S = e(40358),
          H = e(72865),
          b = e(72609),
          i = e(32994),
          r = e(90626),
          m = e(18994),
          D = e(6469),
          P = e(19681),
          _ = e(68538),
          v = e(90405),
          f = e(36707),
          p = e(3166),
          T = e(97525),
          U = e(87249),
          c = e(43135),
          a = e(45931),
          E = e(95995),
          V = e(27894),
          W = e(95242),
          s = e(38939),
          N = e(80902);
        const z = 2e4,
          J = 300 * 1e3;
        function te(o, n, h, O = {}) {
          return (0, N.I)(se(o, n, h, O));
        }
        function se(o, n, h, O = {}) {
          let l = `${b.TS.STORE_BASE_URL}default/discounts_and_events_data/`;
          return (
            h && (l += `?t=${encodeURIComponent(h)}`),
            {
              queryKey: ["discountsandevents", h ?? null],
              initialData: o,
              initialDataUpdatedAt: n,
              queryFn: async () => {
                const g = await fetch(l, {
                  credentials: "include",
                  signal: AbortSignal.timeout(z),
                });
                if (!g.ok)
                  throw new Error(
                    `discounts_and_events_data failed: ${g.status}`,
                  );
                const L = await g.json();
                return { items: Array.isArray(L.items) ? L.items : [] };
              },
              staleTime: J,
              ...O,
            }
          );
        }
        const w = parseInt(s.strColumnsPerPage),
          q = 4,
          oe = 2,
          Y = 2,
          Pe = parseInt(s.strWideScreenMinWidth),
          pe = parseInt(s.strPlaceholderHeight),
          Oe = parseInt(s.strScrollColumnGap),
          ae = "DiscountsAndEventsReady";
        function ie(o) {
          return o.appid ? `app_${o.appid}` : `url_${o.url ?? ""}`;
        }
        function de(o, n, h, O, l) {
          const g = o.filter((d) => d.style === "full"),
            L = o.filter(
              (d) => d.style !== "full" && d.banner === "daily_deal",
            ),
            C = o.filter(
              (d) => d.style !== "full" && d.banner !== "daily_deal",
            ),
            K = [];
          let Z = 0,
            F = 0,
            G = 0;
          for (
            ;
            K.length < l && (Z < g.length || F < L.length || G < C.length);
          ) {
            const d = [],
              k = F < L.length || G < C.length,
              ee = Math.min(k ? h : n, g.length - Z);
            for (let $ = 0; $ < ee; $++) {
              const X = g[Z++];
              d.push({ key: `full_${ie(X)}`, items: [X] });
            }
            const Q = (n - d.length) * 2,
              I = Math.min(O, Q, L.length - F),
              y = L.slice(F, F + I);
            F += I;
            const R = Math.min(Q - I, C.length - G);
            y.push(...C.slice(G, G + R)), (G += R);
            for (let $ = 0; $ < y.length; $ += 2) {
              const X = y.slice($, $ + 2);
              d.push({ key: `half_${ie(X[0])}`, items: X });
            }
            K.push(d);
          }
          return K;
        }
        function Ie(o) {
          switch (o.banner) {
            case "weekend_deal":
              return a.d.Localize("#DiscountsAndEvents_Banner_WeekendDeal");
            case "midweek_deal":
              return a.d.Localize("#DiscountsAndEvents_Banner_MidweekDeal");
            case "daily_deal":
              return a.d.Localize("#DiscountsAndEvents_Banner_DailyDeal");
            case "largest_discount":
              return a.d.Localize("#DiscountsAndEvents_Banner_LargestDiscount");
            case "custom":
              return o.title || void 0;
            default:
              return;
          }
        }
        function Ae(o) {
          return o.style === "full"
            ? "spotlight"
            : o.banner === "daily_deal"
              ? "daily-deal"
              : "spotlight-specials";
        }
        function Te(o) {
          const { initialData: n, initialDataUpdatedAt: h, previewTime: O } = o,
            l = (0, m.a4)(Pe),
            g = (0, p.Qn)(),
            L = l && !g,
            C = te(n, h, O),
            K = (0, H.aL)(`${b.TS.STORE_BASE_URL}specials`),
            Z = a.d.Localize("#DiscountsAndEvents_SeeMore"),
            { bShowSeeMoreHint: F, panelProps: G } = (0, T.i)(K),
            [d, k] = (0, D.L2)(),
            { rgPages: ee, rgColumns: Q } = r.useMemo(() => {
              let I = C.data?.items ?? [];
              d ||
                (I = I.filter(
                  (R) =>
                    !R.appid ||
                    R.sale_page ||
                    (!k.BIsGameOwned(R.appid) && !k.BIsGameIgnored(R.appid)),
                ));
              const y = de(I, w, oe, Y, q);
              return { rgPages: y, rgColumns: y.flat() };
            }, [C.data, d, k]);
          return !C.data && C.isError
            ? (0, t.jsx)(Se, {})
            : C.data
              ? Q.length
                ? (0, t.jsxs)(u.Z, {
                    className: (0, f.A)(s.DiscountsAndEvents, ae),
                    navEntryPreferPosition: M.iU.PREFERRED_CHILD,
                    ...G,
                    onOptionsActionDescription: Z,
                    children: [
                      (0, t.jsxs)(ue, {
                        children: [
                          !g && (0, t.jsx)(me, { url: K, location: "desktop" }),
                          g && (0, t.jsx)(T.o, { label: Z, shown: F }),
                        ],
                      }),
                      (0, t.jsx)(_.F, {
                        visibleElements: 1,
                        disableEdgeWrap: !1,
                        hideArrows: !1,
                        hidePips: g,
                        screenIsWide: l,
                        bForceSimpleCarousel: g,
                        gap: Oe,
                        className: (0, f.A)(s.Carousel, !L && s.Scrolling),
                        children: L
                          ? ee.map((I, y) =>
                              (0, t.jsx)(
                                u.Z,
                                {
                                  className: s.Page,
                                  "flow-children": "row",
                                  role: "list",
                                  "aria-labelledby":
                                    "discounts_and_events_title",
                                  children: I.map((R) =>
                                    (0, t.jsx)(
                                      _e,
                                      { column: R, depth: y + 1 },
                                      R.key,
                                    ),
                                  ),
                                },
                                I[0].key,
                              ),
                            )
                          : Q.map((I, y) =>
                              (0, t.jsx)(
                                _e,
                                { column: I, depth: Math.floor(y / w) + 1 },
                                I.key,
                              ),
                            ),
                      }),
                      !g && (0, t.jsx)(me, { url: K, location: "mobile" }),
                    ],
                  })
                : null
              : (0, t.jsx)("div", {
                  className: (0, f.A)(s.DiscountsAndEvents, s.Placeholder, ae),
                });
        }
        function Se() {
          return (0, t.jsxs)("div", {
            className: (0, f.A)(s.DiscountsAndEvents, ae),
            children: [
              (0, t.jsx)(ue, {}),
              (0, t.jsx)("div", {
                className: s.LoadError,
                children: a.d.Localize("#DiscountsAndEvents_LoadError"),
              }),
            ],
          });
        }
        function ue(o) {
          return (0, t.jsxs)("div", {
            className: s.Header,
            children: [
              (0, t.jsx)("div", {
                className: s.Title,
                id: "discounts_and_events_title",
                role: "heading",
                "aria-level": 2,
                children: a.d.Localize("#DiscountsAndEvents_Title"),
              }),
              o.children,
            ],
          });
        }
        function me(o) {
          const { url: n, location: h } = o;
          return (0, t.jsx)("div", {
            className: (0, f.A)(
              s.SeeMore,
              h == "mobile" ? s.Mobile : s.Desktop,
            ),
            children: (0, t.jsx)("a", {
              href: n,
              className: s.SeeMoreButton,
              children: a.d.Localize("#DiscountsAndEvents_SeeMore"),
            }),
          });
        }
        function _e(o) {
          const { column: n, depth: h } = o,
            O = n.items[0]?.style === "full";
          return (0, t.jsx)(u.Z, {
            className: (0, f.A)(s.Column, O && s.FullColumn),
            "flow-children": "column",
            navEntryPreferPosition: M.iU.MAINTAIN_Y,
            children: n.items.map((l) =>
              (0, t.jsx)(Ce, { item: l, depth: h }, ie(l)),
            ),
          });
        }
        function Ce(o) {
          const { item: n, depth: h } = o,
            O = n.style === "full",
            l = r.useMemo(
              () => (n.appid ? { appid: n.appid } : void 0),
              [n.appid],
            ),
            g = !!n.url,
            L = n.alt !== void 0,
            C = !!n.image,
            K = !!n.price || !!n.is_free || !!n.discount_text,
            Z = !g || !L || !K,
            F = !C,
            G = !K,
            { data: d } = (0, S.J$)(Z ? l : void 0),
            { data: k } = (0, S.lv)(F ? l : void 0),
            { data: ee } = (0, S.Q_)(G ? l : void 0),
            { data: Q } = (0, i.lI)(),
            I = Q?.preferences?.disable_microtrailers,
            [y, R] = r.useState(!1),
            [$, X] = r.useState(!1),
            he = !!l && !O && !n.sale_page && !I,
            ve = he && (y || $),
            le = Ae(n),
            fe = (0, H.aL)(n.url, le, h),
            ce = k ?? void 0;
          let ne = n.image;
          ne ||
            (ne = O
              ? ((0, P.l)(ce, "hero_capsule") ?? (0, P.l)(ce, "header"))
              : (0, P.l)(ce, "header"));
          const Ee = Ie(n),
            ye = n.alt ?? d?.name ?? "";
          if (l && ((!g && d === null) || (!C && k === null))) return null;
          const ge = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: s.ImageCtn,
                children: [
                  ne &&
                    (0, t.jsx)("img", { className: s.Image, src: ne, alt: ye }),
                  he &&
                    (0, t.jsx)(U.mj, { id: l, active: ve, bIsHoverMode: !0 }),
                  Ee &&
                    (0, t.jsx)("div", { className: s.Banner, children: Ee }),
                ],
              }),
              (0, t.jsx)("div", {
                className: s.PriceRow,
                children: (0, t.jsx)(xe, {
                  item: n,
                  storeItem: d,
                  purchaseOption: ee,
                }),
              }),
            ],
          });
          let re;
          if (fe) {
            const De = (0, t.jsx)(A.Ii, {
              href: fe,
              className: s.Link,
              children: ge,
            });
            re = l
              ? (0, t.jsx)(E.A, {
                  appID: l.appid,
                  feature: le,
                  depth: h,
                  children: De,
                })
              : De;
          } else
            re = (0, t.jsx)(V.p, {
              storeItem: d,
              feature: le,
              depth: h,
              className: s.Link,
              children: ge,
            });
          const Me = (0, t.jsx)(u.Z, {
            className: (0, f.A)(
              s.Capsule,
              O ? s.Full : s.Half,
              n.banner === "daily_deal" && s.DailyDeal,
              ve && s.Hovered,
            ),
            onGamepadFocus: () => X(!0),
            onGamepadBlur: () => X(!1),
            children: l
              ? (0, t.jsx)(B.j, {
                  id: l,
                  hoverClassName: s.HoverSource,
                  fnHoverState: R,
                  disableScreenshots: !0,
                  children: re,
                })
              : (0, t.jsx)("div", { className: s.HoverSource, children: re }),
          });
          return l ? (0, t.jsx)(c.y0, { itemid: l, children: Me }) : Me;
        }
        function xe(o) {
          const { item: n, storeItem: h, purchaseOption: O } = o;
          if (n.discount_text)
            return (0, t.jsx)("div", {
              className: s.DiscountText,
              children: n.discount_text,
            });
          const l = n.price ?? O;
          return l
            ? (0, t.jsx)(W.z, {
                purchaseOption: l,
                size: "inline",
                legacyStyle: !0,
              })
            : n.is_free || h?.is_free
              ? (0, t.jsx)("div", {
                  className: s.FreePrice,
                  children: a.d.Localize("#Price_Free"),
                })
              : null;
        }
        function Le(o) {
          return (0, t.jsx)(v.K, {
            placeholderHeight: pe,
            rootMargin: "100% 0px 100% 0px",
            children: (0, t.jsx)(Te, { ...o }),
          });
        }
      },
      19681: (j, x, e) => {
        "use strict";
        e.d(x, { l: () => A });
        var t = e(98609);
        function A(u, M) {
          if (!(!u?.asset_url_format || typeof u[M] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              u.asset_url_format.replace("${FILENAME}", u[M])
            );
        }
      },
      2213: (j) => {
        j.exports = {
          SeeMoreButtonGamepad: "_3LB60XV--dXt2yYQ6dF5aT",
          Focused: "_3NISN-t8MP65UYQ4p5bNgh",
        };
      },
      73187: (j) => {
        j.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
          StandInScreenshot: "_2-XHjZrAl5QU5FbD89pHx7",
          Active: "_3QeNGSw_792_gylsGKjVM3",
        };
      },
      38939: (j) => {
        j.exports = {
          strColumnsPerPage: "3",
          strWideScreenMinWidth: "911px",
          strPlaceholderHeight: "700px",
          strScrollColumnGap: "12px",
          DiscountsAndEvents: "lFDjxBzZuxTU3aIPVDTK5",
          Placeholder: "_1bvBq34Qcinx24SzYe-cEH",
          Header: "_3iF8zfmD6ZVhOc4gCHV7eD",
          Title: "PMgHw7SIUZWM8LLZTz-9k",
          SeeMore: "_2X_maIcXL1e31--7CCCsRO",
          Desktop: "_2lv_iQqi0RKAjaIjB0AWtT",
          Mobile: "hVyZPMMVUPDYy7m3l_xqD",
          SeeMoreButton: "_2f_EIAuOVG5ZIzYb1sXJlw",
          LoadError: "_3G4EMTjmvFRdxddZE0RnU_",
          Carousel: "h3XQjMcbeK9lnR6q53EsI",
          Scrolling: "WY4yR7C4Ba-5pFJSNEdUk",
          Column: "_14LO-skSyf__YkJybhT_cx",
          Page: "_3gVAXLzTzt5xCjFA1_c9rn",
          FullColumn: "G3-gajXyBqVPe_dLxcra1",
          Capsule: "_1gsW0WuP7ZclL1_ScZlsvo",
          Full: "_1rLVMySkVo7KY7BspVQpxm",
          ImageCtn: "euMu4YQ01S0SrXGZD3sSh",
          PriceRow: "_1-29ksrfQaORRCqN2AVf06",
          Half: "_2Krn_hSFPsQV65KD-NO15-",
          DailyDeal: "_2j75F6fqx57q6RLx94e7KU",
          Banner: "znNVIhFP6KdJlUS2p2B7q",
          Hovered: "_32cspHTgNb5rYPZCHPVTXR",
          Image: "_25rFony2doWngaEeNrbITF",
          HoverSource: "_229f53fK_tl7R6wqc-g2bq",
          Link: "_2V8zu-797jsZm1qtHNFXhS",
          DiscountText: "_2wlqkq-0fkggDE-Kll8Rwd",
          FreePrice: "_3KFNh7n6I49ARX6I0oXdel",
        };
      },
    },
  ]);
})();
