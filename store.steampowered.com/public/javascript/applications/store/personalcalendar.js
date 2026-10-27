/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [27701],
    {
      79014: (L, p, e) => {
        "use strict";
        e.d(p, { A: () => v, i: () => P });
        var t = e(90626);
        function P(c, ...h) {
          const d = [],
            M = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let O = 0,
            r;
          for (; (r = M.exec(c)); ) {
            (O += r[0].length), d.push(r[1]);
            const s = parseInt(r[2]),
              a = r[3] || "",
              l = P(a, ...h),
              n = (s >= 1 && s <= h.length ? h[s - 1] : null)
                ? t.cloneElement(h[s - 1], {}, a ? l : null)
                : a;
            d.push(n);
          }
          return d.push(c.substr(O)), t.createElement(t.Fragment, null, ...d);
        }
        function v(c, h = ["b", "i", "br"]) {
          const d = h.join("|"),
            M = [],
            O = new RegExp(
              `(?<before>.*?)<(?<tagname>${d})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let r = 0,
            s;
          for (; (s = O.exec(c)); ) {
            if (!s.groups) continue;
            if (!s.groups?.endtag) {
              const i = s.groups.before.length + s.groups.tagname.length + 2;
              (r += i), (O.lastIndex = s.index + i), M.push(s.groups.before);
              const m = s[2],
                D = t.createElement(m);
              M.push(D);
              continue;
            }
            (r += s[0].length), M.push(s.groups.before);
            const a = s.groups.tagname,
              l = s.groups.contents || "";
            let o = null;
            l && (o = v(l, h));
            const n = t.createElement(a, {}, o);
            M.push(n);
          }
          return M.push(c.slice(r)), t.createElement(t.Fragment, null, ...M);
        }
      },
      95414: (L, p, e) => {
        "use strict";
        e.d(p, { j: () => l, u: () => o });
        var t = e(7850),
          P = e(90626),
          v = e(24660),
          c = e(83482),
          h = e(72865),
          d = e(77200),
          M = e(53113),
          O = e(68094),
          r = e(72609),
          s = e(3166);
        function a(n) {
          if (n) {
            if ("appid" in n) return "app";
            if ("bundleid" in n) return "bundle";
            if ("packageid" in n) return "sub";
          }
        }
        function l(n) {
          const {
              id: i,
              hoverClassName: m,
              fnGetIDOverride: D,
              fnHoverState: I,
              disableScreenshots: C,
              children: f,
            } = n,
            E = P.useRef(null),
            T = P.useCallback(
              (b) => {
                const g = a(i);
                g &&
                  (I && I(!0),
                  window.GameHover &&
                    (E.current &&
                      C &&
                      (E.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(D ? D() : E.current, b, "global_hover", {
                      type: g,
                      id: (0, O.G$)(i).id,
                      v6: 1,
                    })));
              },
              [I, D, C, i],
            ),
            K = P.useCallback(
              (b) => {
                a(i) &&
                  (I && b.relatedTarget && I(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      D ? D() : E.current,
                      b,
                      "global_hover",
                    ));
              },
              [i, I, D],
            );
          return (0, t.jsx)("div", {
            ref: E,
            className: m,
            onMouseEnter: T,
            onMouseLeave: K,
            onFocus: T,
            onBlur: K,
            children: f,
          });
        }
        function o(n) {
          const {
              id: i,
              strExtraParams: m,
              fnOnClickOverride: D,
              strOverrideURL: I,
            } = n,
            C = (0, h.n9)(),
            f = (0, d.w)(),
            E = (0, M.NT)(
              I ||
                (i && "creatorid" in i
                  ? (0, c.It)(
                      `${r.TS.STORE_BASE_URL}curator/${((0, O.G$))(i).id}${m ? `?${m}` : ""}`,
                      C,
                      f,
                    )
                  : (0, c.It)(
                      `${r.TS.STORE_BASE_URL}${a(i)}/${((0, O.G$))(i).id}${m ? `?${m}` : ""}`,
                      C,
                      f,
                    )),
            );
          return (0, t.jsx)(l, {
            ...n,
            children: (0, t.jsx)(v.Ii, {
              className: n.className,
              href: D ? void 0 : E,
              target: r.TS.IN_CLIENT || D ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: D,
              children: n.children,
            }),
          });
        }
      },
      81944: (L, p, e) => {
        "use strict";
        e.d(p, { J: () => M });
        var t = e(7850),
          P = e(19298),
          v = e(90626),
          c = e(79089),
          h = e(18938),
          d = e(2259);
        class M extends v.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = v.createRef();
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
          componentDidUpdate(r) {
            this.UpdateObserver(r);
          }
          UpdateObserver(r) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              r &&
              (r.rootMargin != this.m_observer.rootMargin ||
                r.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let s = this.m_refElement.current;
            if (
              (this.m_observer &&
                s != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && s)
            ) {
              let l = { root: this.FindScrollableAncestor(s) };
              this.props.rootMargin && (l.rootMargin = this.props.rootMargin),
                this.props.thresholds && (l.threshold = this.props.thresholds),
                (this.m_observer = (0, d.md)(s, this.OnIntersection, l));
            }
            this.m_observer &&
              s &&
              s != this.m_elTracked &&
              (this.m_observer.observe(s), (this.m_elTracked = s));
          }
          FindScrollableAncestor(r) {
            return (0, c.Kf)(r, (s) => {
              const a = this.props.horizontal
                ? window.getComputedStyle(s).overflowX
                : window.getComputedStyle(s).overflowY;
              return !!(
                a == "scroll" ||
                a == "auto" ||
                s.classList.contains(M.GetScrollableClassname())
              );
            });
          }
          HandleRef = (r) => {
            (0, h.cZ)(this.m_refElement, r),
              this.props.containerRef && (0, h.cZ)(this.props.containerRef, r);
          };
          OnIntersection = (r) => {
            let s = !1;
            for (const a of r)
              if (a.isIntersecting) {
                s = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != s &&
              ((this.m_bPreviouslyIntersecting = s),
              this.props.onVisibilityChange && this.props.onVisibilityChange(s),
              s && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: r,
              rootMargin: s,
              trigger: a,
              horizontal: l,
              containerRef: o,
              ...n
            } = this.props;
            return (0, t.jsx)(P.Z, {
              ref: this.HandleRef,
              ...n,
              children: this.props.children,
            });
          }
        }
      },
      97525: (L, p, e) => {
        "use strict";
        e.d(p, { i: () => O, o: () => r });
        var t = e(7850),
          P = e(64238),
          v = e.n(P),
          c = e(90626),
          h = e(3166),
          d = e(2213),
          M = e.n(d);
        function O(s) {
          const [a, l] = c.useState(!1),
            o = c.useCallback((i) => l(i && !!s), [s]),
            n = c.useCallback(() => {
              !s || s.length === 0 || (window.location.href = s);
            }, [s]);
          return {
            bShowSeeMoreHint: a,
            panelProps: { onFocusWithin: o, onOptionsButton: n },
          };
        }
        function r(s) {
          const { label: a, shown: l } = s;
          return (0, t.jsxs)("div", {
            className: v()(d.SeeMoreButtonGamepad, l && d.Focused),
            children: [
              (0, t.jsx)("img", {
                src: `${h.TS.IMG_URL}ico_gamepad/shared_button_y.svg`,
                alt: "Y",
              }),
              (0, t.jsx)("div", { children: a }),
            ],
          });
        }
      },
      87249: (L, p, e) => {
        "use strict";
        e.d(p, { C0: () => m, Ck: () => C, mj: () => D });
        var t = e(7850),
          P = e(48156),
          v = e(72609),
          c = e(64868),
          h = e(40358),
          d = e(41032),
          M = e(64238),
          O = e.n(M),
          r = e(90626),
          s = e(21721),
          a = e(25046),
          l = e(73187),
          o = e.n(l);
        const n = 6,
          i = 1e3;
        var m = ((f) => (
          (f[(f.k_ETrailerGrowAmount_None = 0)] = "k_ETrailerGrowAmount_None"),
          (f[(f.k_ETrailerGrowAmount_Implicit = 1)] =
            "k_ETrailerGrowAmount_Implicit"),
          (f[(f.k_ETrailerGrowAmount_Medium = 2)] =
            "k_ETrailerGrowAmount_Medium"),
          f
        ))(m || {});
        function D(f) {
          const { id: E, active: T, bIsHoverMode: K, eGrowOnActivate: b } = f,
            { data: g } = (0, h.J$)(E),
            B = r.useRef(0),
            F = r.useRef(null);
          r.useLayoutEffect(() => {
            T && F.current && (F.current.currentTime = B.current);
          }, [T]);
          const q = (V) => {
              B.current = V.currentTarget.currentTime;
            },
            _ = (0, d.nD)(E),
            oe = (0, a.kB)(T && !_ ? E : void 0);
          if ((K && v.TS.IN_MOBILE) || !T || !g || !g.visible) return null;
          if (_) return (0, t.jsx)(I, { id: E });
          if (!oe) return null;
          const U = oe.filter(
            (V) => V.microtrailer && V.microtrailer.length > 0,
          );
          if (U.length === 0)
            return g &&
              g.related_items?.parent_appid &&
              (g.type == P.uE.ue || g.type == P.uE.Vi)
              ? (0, t.jsx)(D, {
                  ...f,
                  id: { appid: g.related_items.parent_appid },
                })
              : null;
          let ee;
          switch (b) {
            case 1:
              ee = o().GrowOnHoverImplicit;
              break;
            case 2:
              ee = o().GrowOnHoverMedium;
              break;
          }
          const le = U[0];
          return (0, t.jsx)("video", {
            className: O()(o().CapsuleMicroTrailer, ee),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: F,
            playsInline: !0,
            onTimeUpdate: q,
            children: (0, t.jsx)(C, { trailer: le }),
          });
        }
        function I(f) {
          const { id: E } = f,
            { data: T } = (0, h.j4)(E),
            [K, b] = r.useState(0),
            g = r.useMemo(
              () =>
                [...(T?.all_ages_screenshots || [])]
                  .sort((F, q) => F.ordinal - q.ordinal)
                  .slice(0, n),
              [T],
            );
          return (
            (0, c.$$)(() => {
              g.length > 0 && b((B) => (B + 1) % g.length);
            }, i),
            g.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: o().CapsuleMicroTrailer,
                  children: g.map((B, F) =>
                    (0, t.jsx)(
                      "img",
                      {
                        className: O()(
                          o().StandInScreenshot,
                          F == K && o().Active,
                        ),
                        src: (0, s.bu)(B, "600x338"),
                        alt: "",
                      },
                      B.filename,
                    ),
                  ),
                })
          );
        }
        function C(f) {
          const { trailer: E } = f;
          return !E || !E.microtrailer
            ? null
            : (0, t.jsx)(t.Fragment, {
                children: E.microtrailer?.map((T) =>
                  v.TS.IN_CLIENT && T.type == "video/mp4"
                    ? null
                    : (0, t.jsx)(
                        "source",
                        { src: (0, a.M4)(E, T.filename || ""), type: T.type },
                        T.filename,
                      ),
                ),
              });
        }
      },
      22959: (L, p, e) => {
        "use strict";
        e.r(p), e.d(p, { default: () => Ee });
        var t = e(7850),
          P = e(52438),
          v = e(24660),
          c = e(19298),
          h = e(20169),
          d = e(84346),
          M = e(79014),
          O = e(72609),
          r = e(95414),
          s = e(40358),
          a = e(72865),
          l = e(32994),
          o = e(90626),
          n = e(18994),
          i = e(83482),
          m = e(87523),
          D = e(19681),
          I = e(68538),
          C = e(90405),
          f = e(77200),
          E = e(36707),
          T = e(30096),
          K = e(3166),
          b = e(98609),
          g = e(21721),
          B = e(97525),
          F = e(87249),
          q = e(95995),
          _ = e(66139),
          oe = e.n(_),
          U = e(45931);
        const ee = {
          name: "personalcalendarPrefs",
          options: {
            path: "/personalcalendar",
            secure: !0,
            maxAge: 365 * 24 * 60 * 60 * 1e3,
          },
          preferenceControls: { isTechnicallyNecessary: !0 },
        };
        var le = ((u) => (
          (u[(u.Show = 0)] = "Show"),
          (u[(u.Only = 1)] = "Only"),
          (u[(u.Hide = 2)] = "Hide"),
          u
        ))(le || {});
        function V(u) {
          const {
              bShowNewBadge: A,
              bHasFooterActionLegend: x,
              onSeeMore: W,
            } = u,
            N = (0, P.j_)(ee),
            y = N ? JSON.parse(N) : void 0,
            te = (0, n.a4)(940),
            J = (0, a.n9)(),
            H = (0, f.w)(),
            w = (0, K.Qn)(),
            j = new Date().getDay(),
            Z = 10,
            G = 13 + j,
            X = 22 - j,
            Y = (0, m.GZ)(0, G, X),
            se = (0, m.Gd)(G, X, !0, !0).flat(),
            $ = (0, i.It)(`${O.TS.STORE_BASE_URL}personalcalendar`, J, H),
            { bShowSeeMoreHint: ie, panelProps: ne } = (0, B.i)($),
            re = U.d.Localize("#PersonalCalendar_Explore"),
            _e = o.useCallback(() => W?.($), [W, $]);
          if (!Y.data)
            return (0, t.jsx)(c.Z, { className: _.PersonalCalendarWidget });
          let z = Y.data.arrAppInfos;
          return (
            y &&
              ((z = z.filter((R) => !y.bHideOwned || !R.bIsOwned)),
              (z = z.filter((R) => !y.bHideEarlyAccess || !R.bIsEarlyAccess)),
              (z = z.filter((R) => {
                switch (y.eWishlistDisplay) {
                  case 0:
                    return !0;
                  case 1:
                    return R.bIsWishlisted;
                  case 2:
                    return !R.bIsWishlisted;
                  default:
                    return !0;
                }
              }))),
            (0, t.jsxs)(c.Z, {
              className: _.PersonalCalendarWidget,
              navEntryPreferPosition: h.iU.PREFERRED_CHILD,
              ...ne,
              onOptionsButton: W ? _e : ne.onOptionsButton,
              onOptionsActionDescription: re,
              children: [
                (0, t.jsxs)("div", {
                  className: _.TitleSection,
                  children: [
                    (0, t.jsxs)("div", {
                      className: _.TitleSectionLeft,
                      children: [
                        (0, t.jsxs)("div", {
                          className: _.Title,
                          children: [
                            A &&
                              (0, t.jsx)("span", {
                                className: _.NewBadge,
                                children: U.d.Localize("#NewBadge"),
                              }),
                            U.d.Localize("#PersonalCalendar_Title"),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: _.Subtitle,
                          children: U.d.Localize("#PersonalCalendar_Subtitle"),
                        }),
                      ],
                    }),
                    !w &&
                      (0, t.jsx)(ce, { calendarURL: $, location: "desktop" }),
                    w && !x && (0, t.jsx)(B.o, { label: re, shown: ie }),
                  ],
                }),
                (0, t.jsx)(I.F, {
                  visibleElements: 5,
                  hideArrows: !1,
                  disableEdgeWrap: !0,
                  hidePips: w,
                  screenIsWide: te,
                  startingSlide: Z,
                  className: w ? void 0 : "fiveElementEightGap",
                  children: se.map((R, Q) =>
                    (0, t.jsx)(
                      de,
                      {
                        bInitialFocus: Q === Z,
                        nTimestamp: R,
                        nNextTimestamp:
                          Q < se.length - 1 ? se[Q + 1] : R + 1440 * 60,
                        arrAppInfos: z,
                        nRankThreshold: y?.nResultsToShow ?? 100,
                      },
                      R,
                    ),
                  ),
                }),
                !w && (0, t.jsx)(ce, { calendarURL: $, location: "mobile" }),
              ],
            })
          );
        }
        function ce(u) {
          const { calendarURL: A, location: x } = u,
            W = x == "mobile" ? "see_more_mobile" : "see_more_desktop";
          return (0, t.jsx)("div", {
            className: `see_more_link ${W} home_section_button`,
            children: (0, t.jsx)("a", {
              href: A,
              className: "btn_small btn_medium btnv6_white_transparent",
              children: (0, t.jsx)("span", {
                children: U.d.Localize("#PersonalCalendar_Explore"),
              }),
            }),
          });
        }
        function de(u) {
          const {
              nTimestamp: A,
              nNextTimestamp: x,
              bInitialFocus: W,
              arrAppInfos: N,
              nRankThreshold: y,
            } = u,
            te = (0, a.n9)(),
            J = (0, f.w)(),
            H = (0, i.It)(`${O.TS.STORE_BASE_URL}personalcalendar`, te, J),
            w = { weekday: "short" },
            ae = { day: "numeric", month: "numeric" },
            j = new Date(A * 1e3),
            Z = new Date(),
            G =
              j.getDate() === Z.getDate() &&
              j.getMonth() === Z.getMonth() &&
              j.getFullYear() === Z.getFullYear(),
            X = j > Z,
            Y = j.toLocaleDateString((0, d.J)(), w),
            se = j.toLocaleString((0, d.J)(), ae),
            $ = N.filter((S) => S.nReleaseDate > A && S.nReleaseDate < x).sort(
              (S, k) =>
                S.bIsWishlisted && !k.bIsWishlisted
                  ? -1
                  : k.bIsWishlisted && !S.bIsWishlisted
                    ? 1
                    : S.nRank - k.nRank,
            ),
            ie = y ?? 100,
            ne = $.filter((S) => S.nRank <= ie).length - 2,
            re = $.length == 0,
            [_e, z] = o.useState(!1),
            R = (0, K.Qn)(),
            Q = o.useRef(null);
          return (
            o.useEffect(() => {
              if (W && R && Q.current) {
                const S = Q.current.closest(".carousel__slide"),
                  k = Q.current.closest(".carousel__slider-tray-wrapper");
                k && S && (k.scrollLeft = S.offsetLeft);
              }
            }, [W, R]),
            (0, t.jsxs)(c.Z, {
              className: (0, E.A)(
                _.PersonalCalendarWidgetDay,
                G && _.TodayCtn,
                X && _.FutureCtn,
                re && _.EmptyDayCtn,
              ),
              "flow-children": "column",
              children: [
                (0, t.jsxs)("div", {
                  className: _.DayTitle,
                  children: [
                    !G &&
                      (0, t.jsx)("div", {
                        className: _.DayOfWeek,
                        children: Y,
                      }),
                    !G &&
                      (0, t.jsx)("div", { className: _.Date, children: se }),
                    G &&
                      (0, t.jsx)("div", {
                        className: _.Today,
                        children: U.d.Localize("#Time_Today"),
                      }),
                  ],
                }),
                (0, t.jsx)(c.Z, {
                  className: _.DayAppContainer,
                  "flow-children": "column",
                  navEntryPreferPosition: h.iU.MAINTAIN_Y,
                  preferredFocus: W && !_e,
                  ref: Q,
                  onFocusWithin: () => z(!0),
                  children: (0, t.jsxs)(t.Fragment, {
                    children: [
                      $.slice(0, 2).map((S) =>
                        (0, t.jsx)(ue, { nAppID: S.nAppID }, S.nAppID),
                      ),
                      re &&
                        (0, t.jsx)("div", {
                          className: _.EmptyDay,
                          children: (0, M.i)(
                            U.d.Localize("#PersonalCalendar_EmptyDay"),
                            (0, t.jsx)("a", { href: H }),
                          ),
                        }),
                    ],
                  }),
                }),
                !R &&
                  ne > 0 &&
                  (0, t.jsx)(v.Ii, {
                    href: H,
                    className: _.MoreGames,
                    children: U.d.Localize("#PersonalCalendar_More", ne),
                  }),
              ],
            })
          );
        }
        function ue(u) {
          const A = (0, s.lv)({ appid: u.nAppID }),
            x = (0, n.a4)(940),
            W = (0, K.Qn)(),
            [N, y] = o.useState(!1),
            [te, J] = o.useState(!1),
            H = o.useRef(null),
            w = A.data === null ? void 0 : A.data,
            ae = x || W,
            j = (0, D.l)(w, ae ? "main_capsule" : "hero_capsule"),
            { data: Z } = (0, l.lI)(),
            G = Z?.preferences?.disable_microtrailers,
            X = N || te;
          return (
            o.useEffect(() => {
              if (
                (H.current &&
                  H.current.setAttribute(
                    "data-ds-appid",
                    u.nAppID.toString() ?? "",
                  ),
                window.GDynamicStore && window.$J)
              ) {
                const Y = window.$J(H.current);
                window.GDynamicStore.DecorateDynamicItems(Y);
              }
            }, [u.nAppID, H]),
            (0, t.jsx)(a.nn, {
              feature: "personalcalendar-homepage",
              children: (0, t.jsx)(c.Z, {
                onGamepadFocus: () => J(!0),
                onGamepadBlur: () => J(!1),
                children: (0, t.jsx)(r.u, {
                  id: { appid: u.nAppID },
                  hoverClassName: _.StoreAppHover,
                  disableScreenshots: !0,
                  children: (0, t.jsx)(q.A, {
                    appID: u.nAppID,
                    children: (0, t.jsxs)(c.Z, {
                      ref: H,
                      className: (0, E.A)(_.StoreAppCapsule, N && _.Hovered),
                      onMouseOver: () => y(!0),
                      onMouseOut: () => y(!1),
                      children: [
                        (0, t.jsx)("img", {
                          className: _.Image,
                          src: j,
                          alt: "",
                        }),
                        G &&
                          X &&
                          (0, t.jsx)(me, {
                            id: { appid: u.nAppID },
                            nIntervalMS: 1e3,
                          }),
                        !G &&
                          (0, t.jsx)(F.mj, {
                            id: { appid: u.nAppID },
                            active: X,
                            bIsHoverMode: !0,
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }
        function me(u) {
          const A = (0, g.DT)(u.id) ?? [],
            [x, W] = o.useState(0);
          return (
            (0, T.$$)(() => {
              A.length > 0 && W((x + 1) % A.length);
            }, u.nIntervalMS),
            !A?.length || x == -1
              ? null
              : (0, t.jsx)("div", {
                  className: _.ScreenshotCycler,
                  children: A.map((N, y) =>
                    (0, t.jsx)(
                      "img",
                      {
                        className: (0, E.A)(_.Screenshot, y == x && _.Active),
                        src:
                          b.TS.BASE_URL_SHARED_CDN +
                          "/store_item_assets/" +
                          N.filename,
                        alt: "",
                      },
                      N.filename,
                    ),
                  ),
                })
          );
        }
        function Ee(u) {
          return O.iA.logged_in
            ? (0, t.jsx)(C.K, {
                placeholderHeight: 390,
                rootMargin: "100% 0px 100% 0px",
                children: (0, t.jsx)(V, { ...u }),
              })
            : null;
        }
      },
      87523: (L, p, e) => {
        "use strict";
        e.d(p, { Ay: () => d, GZ: () => M, Gd: () => r });
        var t = e(41735),
          P = e.n(t),
          v = e(3166),
          c = e(80902),
          h = e(40497);
        class d {
          static s_PersonalCalendarStore;
          static Get() {
            return (
              d.s_PersonalCalendarStore ||
                ((d.s_PersonalCalendarStore = new d()),
                d.s_PersonalCalendarStore.Init(),
                (window.g_SubscriptionStore = d.s_PersonalCalendarStore)),
              d.s_PersonalCalendarStore
            );
          }
          async GetCalendarRecommendations(a, l, o) {
            const n = new Date();
            n.setDate(n.getDate() + o), n.setHours(0, 0, 0, 0);
            const i = new Date();
            i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0);
            const m = await h.L.fetchQuery(O(a, l, o));
            return (
              (m.arrAppInfos = m.arrAppInfos.filter(
                (D) =>
                  D.nReleaseDate >= i.getTime() / 1e3 &&
                  D.nReleaseDate < n.getTime() / 1e3,
              )),
              m
            );
          }
          Init() {}
        }
        function M(s, a, l) {
          return (0, c.I)(O(s, a, l));
        }
        function O(s, a, l) {
          return {
            queryKey: ["personalcalendar", s, a, l],
            queryFn: async () => {
              const o = { tag: s, days_backward: a, days_forward: l },
                n = await P().get(
                  `${v.TS.STORE_BASE_URL}personalcalendardata`,
                  { params: o, timeout: 2e4, withCredentials: !0 },
                );
              return {
                arrAppInfos: n.data.arrAppInfos,
                strResultMessage: n.data.strResultMessage,
                bUsesWishlistedGames: n.data.bUsesWishlistedGames,
              };
            },
            placeholderData: (o) => o,
          };
        }
        function r(s, a, l, o) {
          const n = new Date();
          if ((n.setDate(n.getDate() - s), l)) {
            const C = n.getDay() % 7;
            n.setDate(n.getDate() - C), n.setHours(0, 0, 0, 0);
          } else n.setHours(0, 0, 0, 0);
          const i = [],
            m = new Date(n),
            D = Math.ceil((s + a) / 7);
          for (let I = 0; I < D; I++) {
            i.push([]);
            for (let C = 0; C < 7; C++)
              (!o || (m.getDay() != 0 && m.getDay() != 6)) &&
                i[I].push(Math.floor(m.getTime() / 1e3)),
                m.setDate(m.getDate() + 1),
                m.setHours(0, 0, 0, 0);
          }
          return i;
        }
      },
      19681: (L, p, e) => {
        "use strict";
        e.d(p, { l: () => P });
        var t = e(98609);
        function P(v, c) {
          if (!(!v?.asset_url_format || typeof v[c] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              v.asset_url_format.replace("${FILENAME}", v[c])
            );
        }
      },
      2213: (L) => {
        L.exports = {
          SeeMoreButtonGamepad: "_3LB60XV--dXt2yYQ6dF5aT",
          Focused: "_3NISN-t8MP65UYQ4p5bNgh",
        };
      },
      73187: (L) => {
        L.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
          StandInScreenshot: "_2-XHjZrAl5QU5FbD89pHx7",
          Active: "_3QeNGSw_792_gylsGKjVM3",
        };
      },
      66139: (L) => {
        L.exports = {
          "duration-app-launch": "800ms",
          PersonalCalendarWidget: "_326_uhqq2I-hJwNRSqIZK4",
          TitleSection: "_2su8lGbBoTlZdVmMWOxDR3",
          TitleSectionLeft: "_10kzxYP01BOeSD8R135uWX",
          Title: "_3RqS6vEZhqX3_4AIeJFajW",
          Subtitle: "_1qbTrTsvR9qbMi-Navsk-D",
          PersonalCalendarWidgetDay: "tqaXEuWN2wV5_8lmSkMng",
          TodayCtn: "_8UPO4fZBxxerbhcRBpAcc",
          FutureCtn: "_1beaDtCHZ3Kn9oAHWEKXMe",
          DayTitle: "VSMflzbqITft0dYgbLNq1",
          DayOfWeek: "_3cnfRW-1ajM2MW96f4sTXj",
          Date: "_1pMe55FBPBDyaWssCZrawa",
          Today: "_1iXgQQI5ZT9D1DgDCwVW_T",
          DayAppContainer: "_2nBfmktG8nbBOFnhjq6OS5",
          EmptyDay: "_1Vtz51wGyJHD9wpoDFNZ8M",
          MoreGames: "_1wt5Ne6MrJfPVdFz5fGlop",
          StoreAppHover: "_3JFqZ4-_gZl_CQKdNJFdg2",
          StoreAppCapsule: "_2A83UfRXWSLbHFYfDcch9W",
          Hovered: "_2z7ihwH3mo730-p6kXROXX",
          Image: "_3GS5DCQb2y5KKnOB8rHEw5",
          "microtrailer-fade-in": "_3qUTo-Eq8k8fA3-Ajqh5Dy",
          NewBadge: "lX3GvxrkYaEqKJRpIhPsk",
          ScreenshotCycler: "_1lFAPltm4lZIZGtvNVBvpt",
          Screenshot: "_1MSXc0v0S-mTDz8I9uJTni",
          Active: "_3t54Nkge_M_VTM00eQZGbG",
        };
      },
    },
  ]);
})();
