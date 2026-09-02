/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [27701],
    {
      79014: (x, p, t) => {
        "use strict";
        t.d(p, { A: () => C, i: () => E });
        var e = t(90626);
        function E(c, ...d) {
          const m = [],
            h = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let v = 0,
            r;
          for (; (r = h.exec(c)); ) {
            (v += r[0].length), m.push(r[1]);
            const a = parseInt(r[2]),
              u = r[3] || "",
              o = E(u, ...d),
              n = (a >= 1 && a <= d.length ? d[a - 1] : null)
                ? e.cloneElement(d[a - 1], {}, u ? o : null)
                : u;
            m.push(n);
          }
          return m.push(c.substr(v)), e.createElement(e.Fragment, null, ...m);
        }
        function C(c, d = ["b", "i", "br"]) {
          const m = d.join("|"),
            h = [],
            v = new RegExp(
              `(?<before>.*?)<(?<tagname>${m})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let r = 0,
            a;
          for (; (a = v.exec(c)); ) {
            if (!a.groups) continue;
            if (!a.groups?.endtag) {
              const l = a.groups.before.length + a.groups.tagname.length + 2;
              (r += l), (v.lastIndex = a.index + l), h.push(a.groups.before);
              const f = a[2],
                D = e.createElement(f);
              h.push(D);
              continue;
            }
            (r += a[0].length), h.push(a.groups.before);
            const u = a.groups.tagname,
              o = a.groups.contents || "";
            let i = null;
            o && (i = C(o, d));
            const n = e.createElement(u, {}, i);
            h.push(n);
          }
          return h.push(c.slice(r)), e.createElement(e.Fragment, null, ...h);
        }
      },
      95414: (x, p, t) => {
        "use strict";
        t.d(p, { j: () => o, u: () => i });
        var e = t(7850),
          E = t(90626),
          C = t(24660),
          c = t(83482),
          d = t(72865),
          m = t(77200),
          h = t(53113),
          v = t(68094),
          r = t(72609),
          a = t(3166);
        function u(n) {
          if (n) {
            if ("appid" in n) return "app";
            if ("bundleid" in n) return "bundle";
            if ("packageid" in n) return "sub";
          }
        }
        function o(n) {
          const {
              id: l,
              hoverClassName: f,
              fnGetIDOverride: D,
              fnHoverState: O,
              disableScreenshots: A,
              children: U,
            } = n,
            R = E.useRef(null),
            Y = E.useCallback(
              (w) => {
                const s = u(l);
                s &&
                  (O && O(!0),
                  window.GameHover &&
                    (R.current &&
                      A &&
                      (R.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(D ? D() : R.current, w, "global_hover", {
                      type: s,
                      id: (0, v.G$)(l).id,
                      v6: 1,
                    })));
              },
              [O, D, A, l],
            ),
            B = E.useCallback(
              (w) => {
                u(l) &&
                  (O && w.relatedTarget && O(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      D ? D() : R.current,
                      w,
                      "global_hover",
                    ));
              },
              [l, O, D],
            );
          return (0, e.jsx)("div", {
            ref: R,
            className: f,
            onMouseEnter: Y,
            onMouseLeave: B,
            onFocus: Y,
            onBlur: B,
            children: U,
          });
        }
        function i(n) {
          const {
              id: l,
              strExtraParams: f,
              fnOnClickOverride: D,
              strOverrideURL: O,
            } = n,
            A = (0, d.n9)(),
            U = (0, m.w)(),
            R = (0, h.NT)(
              O ||
                (l && "creatorid" in l
                  ? (0, c.It)(
                      `${r.TS.STORE_BASE_URL}curator/${((0, v.G$))(l).id}${f ? `?${f}` : ""}`,
                      A,
                      U,
                    )
                  : (0, c.It)(
                      `${r.TS.STORE_BASE_URL}${u(l)}/${((0, v.G$))(l).id}${f ? `?${f}` : ""}`,
                      A,
                      U,
                    )),
            );
          return (0, e.jsx)(o, {
            ...n,
            children: (0, e.jsx)(C.Ii, {
              className: n.className,
              href: D ? void 0 : R,
              target: r.TS.IN_CLIENT || D ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: D,
              children: n.children,
            }),
          });
        }
      },
      79083: (x, p, t) => {
        "use strict";
        t.d(p, { m: () => d, U: () => m });
        var e = t(7850),
          E = t(36118),
          C = ((h) => (
            (h.k_ECutArrowStyle = "single"),
            (h.k_EDoubleArrowStyle = "double"),
            (h.k_EThickChevron = "chevron"),
            (h.k_EFilledArrow = "filled"),
            (h.k_EPointyArrow = "pointy"),
            h
          ))(C || {}),
          c = ((h) => (
            (h.k_EPillCrumb = "pill"),
            (h.k_ECircularCrumb = "circle"),
            (h.k_ESquareCrumb = "square"),
            h
          ))(c || {});
        function d(h) {
          const { arrowFill: v, arrowStyle: r, direction: a } = h;
          switch (r) {
            default:
            case C.k_ECutArrowStyle: {
              const u = a == "right" ? 0 : 180;
              return (0, e.jsx)(E.uMb, {
                fill: v || "white",
                role: "presentation",
                angle: u,
              });
            }
            case C.k_EDoubleArrowStyle: {
              const u = a == "right" ? 180 : 0;
              return (0, e.jsx)(E.F2T, {
                fill: v || "white",
                role: "presentation",
                angle: u,
              });
            }
            case C.k_EThickChevron: {
              const u = a == "right" ? 0 : 180;
              return (0, e.jsx)(E.l8x, {
                fill: v || "white",
                role: "presentation",
                angle: u,
              });
            }
            case C.k_EFilledArrow: {
              const u = a == "right" ? 90 : 270;
              return (0, e.jsx)(E.V5W, {
                fill: v || "white",
                role: "presentation",
                angle: u,
              });
            }
            case C.k_EPointyArrow:
              return (0, e.jsx)(E.L0X, {
                fill: v || "white",
                role: "presentation",
                direction: a || "left",
              });
          }
        }
        function m(h) {
          const {
              bIsActive: v,
              breadcrumbActiveColor: r,
              breadcrumbColor: a,
              breadcrumbStyle: u,
            } = h,
            o = v ? r || "#FFFFFF" : a || "#606974";
          switch (u) {
            default:
            case c.k_EPillCrumb:
              return (0, e.jsx)(E.IGf, { fill: o, role: "presentation" });
            case c.k_ECircularCrumb:
              return (0, e.jsx)(E.az8, { fill: o, role: "presentation" });
            case c.k_ESquareCrumb:
              return (0, e.jsx)(E.koA, { fill: o, role: "presentation" });
          }
        }
      },
      97525: (x, p, t) => {
        "use strict";
        t.d(p, { i: () => v, o: () => r });
        var e = t(7850),
          E = t(64238),
          C = t.n(E),
          c = t(90626),
          d = t(3166),
          m = t(2213),
          h = t.n(m);
        function v(a) {
          const [u, o] = c.useState(!1),
            i = c.useCallback((l) => o(l && !!a), [a]),
            n = c.useCallback(() => {
              !a || a.length === 0 || (window.location.href = a);
            }, [a]);
          return {
            bShowSeeMoreHint: u,
            panelProps: { onFocusWithin: i, onOptionsButton: n },
          };
        }
        function r(a) {
          const { label: u, shown: o } = a;
          return (0, e.jsxs)("div", {
            className: C()(m.SeeMoreButtonGamepad, o && m.Focused),
            children: [
              (0, e.jsx)("img", {
                src: `${d.TS.IMG_URL}ico_gamepad/shared_button_y.svg`,
                alt: "Y",
              }),
              (0, e.jsx)("div", { children: u }),
            ],
          });
        }
      },
      87249: (x, p, t) => {
        "use strict";
        t.d(p, { C0: () => u, Ck: () => i, mj: () => o });
        var e = t(7850),
          E = t(56062),
          C = t(72609),
          c = t(40358),
          d = t(64238),
          m = t.n(d),
          h = t(90626),
          v = t(25046),
          r = t(73187),
          a = t.n(r),
          u = ((n) => (
            (n[(n.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (n[(n.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (n[(n.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            n
          ))(u || {});
        function o(n) {
          const { id: l, active: f, bIsHoverMode: D, eGrowOnActivate: O } = n,
            { data: A } = (0, c.J$)(l),
            U = h.useRef(0),
            R = h.useRef(null);
          h.useLayoutEffect(() => {
            f && R.current && (R.current.currentTime = U.current);
          }, [f]);
          const Y = (g) => {
              U.current = g.currentTarget.currentTime;
            },
            B = (0, v.kB)(f ? l : void 0);
          if ((D && C.TS.IN_MOBILE) || !f || !A || !A.visible || !B)
            return null;
          const w = B.filter(
            (g) => g.microtrailer && g.microtrailer.length > 0,
          );
          if (w.length === 0)
            return A &&
              A.related_items?.parent_appid &&
              (A.type == E.uE.ue || A.type == E.uE.Vi)
              ? (0, e.jsx)(o, {
                  ...n,
                  id: { appid: A.related_items.parent_appid },
                })
              : null;
          let s;
          switch (O) {
            case 1:
              s = a().GrowOnHoverImplicit;
              break;
            case 2:
              s = a().GrowOnHoverMedium;
              break;
          }
          const S = w[0];
          return (0, e.jsx)("video", {
            className: m()(a().CapsuleMicroTrailer, s),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: R,
            playsInline: !0,
            onTimeUpdate: Y,
            children: (0, e.jsx)(i, { trailer: S }),
          });
        }
        function i(n) {
          const { trailer: l } = n;
          return !l || !l.microtrailer
            ? null
            : (0, e.jsx)(e.Fragment, {
                children: l.microtrailer?.map((f) =>
                  C.TS.IN_CLIENT && f.type == "video/mp4"
                    ? null
                    : (0, e.jsx)(
                        "source",
                        { src: (0, v.M4)(l, f.filename || ""), type: f.type },
                        f.filename,
                      ),
                ),
              });
        }
      },
      22959: (x, p, t) => {
        "use strict";
        t.r(p), t.d(p, { default: () => X });
        var e = t(7850),
          E = t(52438),
          C = t(24660),
          c = t(19298),
          d = t(20169),
          m = t(84346),
          h = t(79014),
          v = t(72609),
          r = t(95414),
          a = t(40358),
          u = t(72865),
          o = t(32994),
          i = t(90626),
          n = t(18994),
          l = t(83482),
          f = t(87523),
          D = t(19681),
          O = t(68538),
          A = t(64377),
          U = t(77200),
          R = t(36707),
          Y = t(30096),
          B = t(3166),
          w = t(98609),
          s = t(21721),
          S = t(97525),
          g = t(87249),
          T = t(95995),
          _ = t(66139),
          y = t.n(_),
          I = t(45931);
        const P = {
          name: "personalcalendarPrefs",
          options: {
            path: "/personalcalendar",
            secure: !0,
            maxAge: 365 * 24 * 60 * 60 * 1e3,
          },
          preferenceControls: { isTechnicallyNecessary: !0 },
        };
        var N = ((M) => (
          (M[(M.Show = 0)] = "Show"),
          (M[(M.Only = 1)] = "Only"),
          (M[(M.Hide = 2)] = "Hide"),
          M
        ))(N || {});
        function z(M) {
          const {
              bShowNewBadge: W,
              bHasFooterActionLegend: H,
              onSeeMore: b,
            } = M,
            j = (0, E.j_)(P),
            L = j ? JSON.parse(j) : void 0,
            ae = (0, n.a4)(940),
            oe = (0, u.n9)(),
            re = (0, U.w)(),
            Q = (0, B.Qn)(),
            J = new Date().getDay(),
            te = 10,
            ne = 13 + J,
            ue = 22 - J,
            _e = (0, f.GZ)(0, ne, ue),
            le = (0, f.Gd)(ne, ue, !0, !0).flat(),
            V = (0, l.It)(`${v.TS.STORE_BASE_URL}personalcalendar`, oe, re),
            { bShowSeeMoreHint: me, panelProps: ie } = (0, S.i)(V),
            ce = I.d.Localize("#PersonalCalendar_Full"),
            he = i.useCallback(() => b?.(V), [b, V]);
          if (!_e.data)
            return (0, e.jsx)(c.Z, { className: _.PersonalCalendarWidget });
          let $ = _e.data.arrAppInfos;
          return (
            L &&
              (($ = $.filter((G) => !L.bHideOwned || !G.bIsOwned)),
              ($ = $.filter((G) => !L.bHideEarlyAccess || !G.bIsEarlyAccess)),
              ($ = $.filter((G) => {
                switch (L.eWishlistDisplay) {
                  case 0:
                    return !0;
                  case 1:
                    return G.bIsWishlisted;
                  case 2:
                    return !G.bIsWishlisted;
                  default:
                    return !0;
                }
              }))),
            (0, e.jsxs)(c.Z, {
              className: _.PersonalCalendarWidget,
              navEntryPreferPosition: d.iU.PREFERRED_CHILD,
              ...ie,
              onOptionsButton: b ? he : ie.onOptionsButton,
              onOptionsActionDescription: ce,
              children: [
                (0, e.jsxs)("div", {
                  className: _.TitleSection,
                  children: [
                    (0, e.jsxs)("div", {
                      className: _.TitleSectionLeft,
                      children: [
                        (0, e.jsxs)("div", {
                          className: _.Title,
                          children: [
                            W &&
                              (0, e.jsx)("span", {
                                className: _.NewBadge,
                                children: I.d.Localize("#NewBadge"),
                              }),
                            I.d.Localize("#PersonalCalendar_Title"),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: _.Subtitle,
                          children: I.d.Localize("#PersonalCalendar_Subtitle"),
                        }),
                      ],
                    }),
                    !Q &&
                      (0, e.jsx)(Z, { calendarURL: V, location: "desktop" }),
                    Q && !H && (0, e.jsx)(S.o, { label: ce, shown: me }),
                  ],
                }),
                (0, e.jsx)(O.F, {
                  visibleElements: 5,
                  hideArrows: !1,
                  disableEdgeWrap: !0,
                  hidePips: Q,
                  screenIsWide: ae,
                  startingSlide: te,
                  className: Q ? void 0 : "fiveElementEightGap",
                  children: le.map((G, ee) =>
                    (0, e.jsx)(
                      k,
                      {
                        bInitialFocus: ee === te,
                        nTimestamp: G,
                        nNextTimestamp:
                          ee < le.length - 1 ? le[ee + 1] : G + 1440 * 60,
                        arrAppInfos: $,
                        nRankThreshold: L?.nResultsToShow ?? 100,
                      },
                      G,
                    ),
                  ),
                }),
                !Q && (0, e.jsx)(Z, { calendarURL: V, location: "mobile" }),
              ],
            })
          );
        }
        function Z(M) {
          const { calendarURL: W, location: H } = M,
            b = H == "mobile" ? "see_more_mobile" : "see_more_desktop";
          return (0, e.jsx)("div", {
            className: `see_more_link ${b} home_section_button`,
            children: (0, e.jsx)("a", {
              href: W,
              className: "btn_small btn_medium btnv6_white_transparent",
              children: (0, e.jsx)("span", {
                children: I.d.Localize("#PersonalCalendar_Explore"),
              }),
            }),
          });
        }
        function k(M) {
          const {
              nTimestamp: W,
              nNextTimestamp: H,
              bInitialFocus: b,
              arrAppInfos: j,
              nRankThreshold: L,
            } = M,
            ae = (0, u.n9)(),
            oe = (0, U.w)(),
            re = (0, l.It)(`${v.TS.STORE_BASE_URL}personalcalendar`, ae, oe),
            Q = { weekday: "short" },
            de = { day: "numeric", month: "numeric" },
            J = new Date(W * 1e3),
            te = new Date(),
            ne =
              J.getDate() === te.getDate() &&
              J.getMonth() === te.getMonth() &&
              J.getFullYear() === te.getFullYear(),
            ue = J > te,
            _e = J.toLocaleDateString((0, m.J)(), Q),
            le = J.toLocaleString((0, m.J)(), de),
            V = j
              .filter((F) => F.nReleaseDate > W && F.nReleaseDate < H)
              .sort((F, se) =>
                F.bIsWishlisted && !se.bIsWishlisted
                  ? -1
                  : se.bIsWishlisted && !F.bIsWishlisted
                    ? 1
                    : F.nRank - se.nRank,
              ),
            me = L ?? 100,
            ie = V.filter((F) => F.nRank <= me).length - 2,
            ce = V.length == 0,
            [he, $] = i.useState(!1),
            G = (0, B.Qn)(),
            ee = i.useRef(null);
          return (
            i.useEffect(() => {
              if (b && G && ee.current) {
                const F = ee.current.closest(".carousel__slide"),
                  se = ee.current.closest(".carousel__slider-tray-wrapper");
                se && F && (se.scrollLeft = F.offsetLeft);
              }
            }, [b, G]),
            (0, e.jsxs)(c.Z, {
              className: (0, R.A)(
                _.PersonalCalendarWidgetDay,
                ne && _.TodayCtn,
                ue && _.FutureCtn,
                ce && _.EmptyDayCtn,
              ),
              "flow-children": "column",
              children: [
                (0, e.jsxs)("div", {
                  className: _.DayTitle,
                  children: [
                    !ne &&
                      (0, e.jsx)("div", {
                        className: _.DayOfWeek,
                        children: _e,
                      }),
                    !ne &&
                      (0, e.jsx)("div", { className: _.Date, children: le }),
                    ne &&
                      (0, e.jsx)("div", {
                        className: _.Today,
                        children: I.d.Localize("#Time_Today"),
                      }),
                  ],
                }),
                (0, e.jsx)(c.Z, {
                  className: _.DayAppContainer,
                  "flow-children": "column",
                  navEntryPreferPosition: d.iU.MAINTAIN_Y,
                  preferredFocus: b && !he,
                  ref: ee,
                  onFocusWithin: () => $(!0),
                  children: (0, e.jsxs)(e.Fragment, {
                    children: [
                      V.slice(0, 2).map((F) =>
                        (0, e.jsx)(q, { nAppID: F.nAppID }, F.nAppID),
                      ),
                      ce &&
                        (0, e.jsx)("div", {
                          className: _.EmptyDay,
                          children: (0, h.i)(
                            I.d.Localize("#PersonalCalendar_EmptyDay"),
                            (0, e.jsx)("a", { href: re }),
                          ),
                        }),
                    ],
                  }),
                }),
                !G &&
                  ie > 0 &&
                  (0, e.jsx)(C.Ii, {
                    href: re,
                    className: _.MoreGames,
                    children: I.d.Localize("#PersonalCalendar_More", ie),
                  }),
              ],
            })
          );
        }
        function q(M) {
          const W = (0, a.lv)({ appid: M.nAppID }),
            H = (0, n.a4)(940),
            [b, j] = i.useState(!1),
            L = i.useRef(null),
            ae = W.data === null ? void 0 : W.data,
            oe = (0, D.l)(ae, H ? "main_capsule" : "hero_capsule"),
            { data: re } = (0, o.lI)(),
            Q = re?.preferences?.disable_microtrailers;
          return (
            i.useEffect(() => {
              if (
                (L.current &&
                  L.current.setAttribute(
                    "data-ds-appid",
                    M.nAppID.toString() ?? "",
                  ),
                window.GDynamicStore && window.$J)
              ) {
                const de = window.$J(L.current);
                window.GDynamicStore.DecorateDynamicItems(de);
              }
            }, [M.nAppID, L]),
            (0, e.jsx)(u.nn, {
              feature: "personalcalendar-homepage",
              children: (0, e.jsx)(r.u, {
                id: { appid: M.nAppID },
                hoverClassName: _.StoreAppHover,
                disableScreenshots: !0,
                children: (0, e.jsx)(T.A, {
                  appID: M.nAppID,
                  children: (0, e.jsxs)(c.Z, {
                    ref: L,
                    className: (0, R.A)(_.StoreAppCapsule, b && _.Hovered),
                    onMouseOver: () => j(!0),
                    onMouseOut: () => j(!1),
                    children: [
                      (0, e.jsx)("img", {
                        className: _.Image,
                        src: oe,
                        alt: "",
                      }),
                      Q &&
                        b &&
                        (0, e.jsx)(K, {
                          id: { appid: M.nAppID },
                          nIntervalMS: 1e3,
                        }),
                      !Q &&
                        (0, e.jsx)(g.mj, {
                          id: { appid: M.nAppID },
                          active: b,
                          bIsHoverMode: !0,
                        }),
                    ],
                  }),
                }),
              }),
            })
          );
        }
        function K(M) {
          const W = (0, s.DT)(M.id) ?? [],
            [H, b] = i.useState(0);
          return (
            (0, Y.$$)(() => {
              W.length > 0 && b((H + 1) % W.length);
            }, M.nIntervalMS),
            !W?.length || H == -1
              ? null
              : (0, e.jsx)("div", {
                  className: _.ScreenshotCycler,
                  children: W.map((j, L) =>
                    (0, e.jsx)(
                      "img",
                      {
                        className: (0, R.A)(_.Screenshot, L == H && _.Active),
                        src:
                          w.TS.BASE_URL_SHARED_CDN +
                          "/store_item_assets/" +
                          j.filename,
                        alt: "",
                      },
                      j.filename,
                    ),
                  ),
                })
          );
        }
        function X(M) {
          return v.iA.logged_in
            ? (0, e.jsx)(A.K, {
                placeholderHeight: 390,
                rootMargin: "100% 0px 100% 0px",
                children: (0, e.jsx)(z, { ...M }),
              })
            : null;
        }
      },
      87523: (x, p, t) => {
        "use strict";
        t.d(p, { Ay: () => m, GZ: () => h, Gd: () => r });
        var e = t(41735),
          E = t.n(e),
          C = t(3166),
          c = t(80902),
          d = t(40497);
        class m {
          static s_PersonalCalendarStore;
          static Get() {
            return (
              m.s_PersonalCalendarStore ||
                ((m.s_PersonalCalendarStore = new m()),
                m.s_PersonalCalendarStore.Init(),
                (window.g_SubscriptionStore = m.s_PersonalCalendarStore)),
              m.s_PersonalCalendarStore
            );
          }
          async GetCalendarRecommendations(u, o, i) {
            const n = new Date();
            n.setDate(n.getDate() + i), n.setHours(0, 0, 0, 0);
            const l = new Date();
            l.setDate(l.getDate() - o), l.setHours(0, 0, 0, 0);
            const f = await d.L.fetchQuery(v(u, o, i));
            return (
              (f.arrAppInfos = f.arrAppInfos.filter(
                (D) =>
                  D.nReleaseDate >= l.getTime() / 1e3 &&
                  D.nReleaseDate < n.getTime() / 1e3,
              )),
              f
            );
          }
          Init() {}
        }
        function h(a, u, o) {
          return (0, c.I)(v(a, u, o));
        }
        function v(a, u, o) {
          return {
            queryKey: ["personalcalendar", a, u, o],
            queryFn: async () => {
              const i = { tag: a, days_backward: u, days_forward: o },
                n = await E().get(
                  `${C.TS.STORE_BASE_URL}personalcalendardata`,
                  { params: i, timeout: 2e4, withCredentials: !0 },
                );
              return {
                arrAppInfos: n.data.arrAppInfos,
                strResultMessage: n.data.strResultMessage,
                bUsesWishlistedGames: n.data.bUsesWishlistedGames,
              };
            },
            placeholderData: (i) => i,
          };
        }
        function r(a, u, o, i) {
          const n = new Date();
          if ((n.setDate(n.getDate() - a), o)) {
            const A = n.getDay() % 7;
            n.setDate(n.getDate() - A), n.setHours(0, 0, 0, 0);
          } else n.setHours(0, 0, 0, 0);
          const l = [],
            f = new Date(n),
            D = Math.ceil((a + u) / 7);
          for (let O = 0; O < D; O++) {
            l.push([]);
            for (let A = 0; A < 7; A++)
              (!i || (f.getDay() != 0 && f.getDay() != 6)) &&
                l[O].push(Math.floor(f.getTime() / 1e3)),
                f.setDate(f.getDate() + 1),
                f.setHours(0, 0, 0, 0);
          }
          return l;
        }
      },
      19681: (x, p, t) => {
        "use strict";
        t.d(p, { l: () => E });
        var e = t(98609);
        function E(C, c) {
          if (!(!C?.asset_url_format || typeof C[c] != "string"))
            return (
              e.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              C.asset_url_format.replace("${FILENAME}", C[c])
            );
        }
      },
      68538: (x, p, t) => {
        "use strict";
        t.d(p, { F: () => U });
        var e = t(7850),
          E = t(54130),
          C = t(19298),
          c = t(65731),
          d = t(90626),
          m = t(36707),
          h = t(18210),
          v = t(3166),
          r = t(47444),
          a = t(64377),
          u = t(11279);
        function o(s) {
          const {
            nSlideIndex: S,
            nStartingSlideIndex: g,
            ref: T,
            children: _,
          } = s;
          return g === void 0
            ? _
            : (0, e.jsx)("div", { ref: S === g ? T : void 0, children: _ });
        }
        function i(s) {
          const {
              padded: S,
              gap: g,
              children: T,
              bLazyRenderChildren: _,
              lazyRenderPlaceholderWidth: y,
              lazyRenderPlaceholderHeight: I,
              startingSlide: P,
            } = s,
            N = d.useRef(null),
            z = d.useRef(null),
            Z = (0, v.Qn)();
          d.useLayoutEffect(() => {
            !N.current ||
              !z.current ||
              (N.current.scrollLeft +=
                z.current.getBoundingClientRect().left -
                N.current.getBoundingClientRect().left);
          }, [P]);
          const k = d.Children.map(T, (K, X) =>
              _
                ? (0, e.jsx)(a.K, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: y ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: Z,
                    children: (0, e.jsx)(o, {
                      nSlideIndex: X,
                      nStartingSlideIndex: P,
                      ref: z,
                      children: K,
                    }),
                  })
                : (0, e.jsx)(o, {
                    nSlideIndex: X,
                    nStartingSlideIndex: P,
                    ref: z,
                    children: K,
                  }),
            ),
            q = (0, e.jsx)(C.Z, {
              "flow-children": "row",
              style: { gap: g ? g + "px" : void 0 },
              className: (0, m.A)(
                { SaleSectionCarouselPadding: S },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                u.ScrollSnapCarousel,
                s.className,
              ),
              ref: N,
              children: k,
            });
          return _
            ? (0, e.jsx)(a.K, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: I ?? 1,
                children: q,
              })
            : q;
        }
        var n = t(95892),
          l = t(64238),
          f = t.n(l),
          D = t(79083);
        class O extends d.Component {
          render() {
            const { showArrows: S, arrowFill: g, arrowStyle: T } = this.props,
              _ = this.props.visibleSlides,
              y = this.props.totalSlides,
              I = this.props.currentSlide;
            if (_ >= y) return null;
            const P = (100 * I) / y,
              N = 100 * (1 - Math.min(I + _, y) / y),
              z = (50 * _) / y,
              Z = P + z,
              k = 100 - Z;
            return (0, e.jsxs)("div", {
              className: r.pipScrollerContainer,
              children: [
                S &&
                  (0, e.jsx)(c._X, {
                    className: (0, m.A)(
                      r.pipScrollButton,
                      r.left,
                      r.carouselNavButton,
                    ),
                    children: (0, e.jsx)(D.m, {
                      arrowFill: g,
                      arrowStyle: T,
                      direction: "left",
                    }),
                  }),
                (0, e.jsxs)("div", {
                  className: r.pipScroller,
                  children: [
                    (0, e.jsx)("div", { className: r.scrollBackground }),
                    (0, e.jsx)("div", {
                      className: r.scrollForeground,
                      style: { left: P + "%", right: N + "%" },
                    }),
                    (0, e.jsx)("div", {
                      className: r.scrollNavDiv,
                      style: { left: "0%", width: Z + "%" },
                      children: (0, e.jsx)(c._X, {
                        className: (0, m.A)(
                          r.carouselNavButton,
                          r.scrollNavButton,
                        ),
                        style: { color: "red" },
                        children: (0, e.jsx)("div", {}),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: r.scrollNavDiv,
                      style: { right: "0%", width: k + "%" },
                      children: (0, e.jsx)(c.CC, {
                        className: (0, m.A)(
                          r.carouselNavButton,
                          r.scrollNavButton,
                        ),
                        children: (0, e.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                S &&
                  (0, e.jsx)(c.CC, {
                    className: (0, m.A)(
                      r.pipScrollButton,
                      r.right,
                      r.carouselNavButton,
                    ),
                    children: (0, e.jsx)(D.m, {
                      arrowFill: g,
                      arrowStyle: T,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const A = (0, c.Yw)(O, (s) => ({
          currentSlide: s.currentSlide,
          totalSlides: s.totalSlides,
          visibleSlides: s.visibleSlides,
        }));
        function U(s) {
          const { bForceSimpleCarousel: S, screenIsWide: g, children: T } = s,
            _ = (0, v.Qn)();
          return (g || _) && !S
            ? (0, e.jsx)(R, { ...s, children: T })
            : (0, e.jsx)(i, { ...s, children: T });
        }
        function R(s) {
          const S = (0, v.Qn)(),
            g = () => d.Children.count(s.children),
            T = () => Math.min(g(), s.visibleElements),
            _ = () =>
              d.Children.map(s.children, (K, X) => {
                const M = s.bLazyRenderChildren
                  ? (0, e.jsx)(a.K, {
                      rootMargin: "0px -5px 0px 100%",
                      horizontal: !0,
                      placeholderWidth: s.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: s.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: S,
                      children: K,
                    })
                  : K;
                return (0, e.jsx)(
                  c.q7,
                  {
                    className: r.innerSlide,
                    index: X,
                    role: "listitem",
                    "aria-label": void 0,
                    children: M,
                  },
                  "slide_" + X,
                );
              }),
            y = g(),
            I = T();
          if (!y || !I) return null;
          const P = I < y,
            N = s.hideArrows || !P,
            z = !P || s.hidePips;
          let Z = 4 / 3,
            k = !0;
          s.slideAspectRatio && ((Z = s.slideAspectRatio), (k = !1));
          const q = `items_in_row_${s.visibleElements}`;
          return (0, e.jsx)(C.Z, {
            "flow-children": "row",
            className: (0, m.A)(r.carouselBody, s.className, q),
            navKey: s.navKey,
            children: (0, e.jsxs)(c.gi, {
              visibleSlides: s.visibleElements,
              totalSlides: g(),
              naturalSlideWidth: 100 * Z,
              naturalSlideHeight: 100,
              step: s.visibleElements,
              infinite: !s.disableEdgeWrap,
              isIntrinsicHeight: k,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: s.startingSlide,
              children: [
                (0, e.jsx)(w, {
                  bHideArrows: N,
                  bAutoAdvance: s.bAutoAdvance && !S,
                  onSlide: s.onSlide,
                  arrowFill: s.arrowFill,
                  arrowStyle: s.arrowStyle,
                  children: _(),
                }),
                !z &&
                  (s.useTestScrollbar
                    ? (0, e.jsx)(A, { showArrows: N, carouselStore: null })
                    : (0, e.jsx)("div", {
                        className: f()({
                          [r.breadcrumbContainer]: !0,
                          [r.breadcrumbContainerTemplate]:
                            s.className?.includes("template-carousel"),
                        }),
                        children: (0, e.jsx)(Y, {
                          ...s,
                          nPageSize: I,
                          children: s.children,
                        }),
                      })),
              ],
            }),
          });
        }
        function Y(s) {
          const { nPageSize: S } = s,
            g = d.useContext(c.Yc),
            [T, _] = d.useState(g.state.currentSlide);
          return (
            d.useEffect(
              () =>
                g.subscribe(() => {
                  _(g.state.currentSlide);
                }),
              [g],
            ),
            (0, e.jsx)(e.Fragment, {
              children: d.Children.map(s.children, (y, I) => {
                if (I % S !== 0) return null;
                const P = T >= I && T < I + S;
                return (0, e.jsx)(
                  c.cL,
                  {
                    slide: I,
                    className: r.pip,
                    children: (0, e.jsx)(D.U, { ...s, bIsActive: P }),
                  },
                  I,
                );
              }),
            })
          );
        }
        function B(s) {
          s.current && (window.clearTimeout(s.current), (s.current = null));
        }
        function w(s) {
          const {
              bHideArrows: S,
              bAutoAdvance: g,
              children: T,
              onSlide: _,
              arrowFill: y,
              arrowStyle: I,
            } = s,
            P = d.useContext(c.Yc),
            N = d.useRef(P.state.currentSlide),
            [z, Z] = d.useState(null),
            [k, q] = d.useState(!!g),
            K = d.useRef(null),
            X = d.useRef(null);
          d.useEffect(() => {
            const W = () => {
              K.current = window.setTimeout(() => {
                if (K.current) {
                  B(K);
                  let j = 0;
                  P.state.currentSlide + P.state.visibleSlides <
                    P.state.totalSlides &&
                    (j = Math.min(
                      P.state.currentSlide + P.state.visibleSlides,
                      P.state.totalSlides - P.state.visibleSlides,
                    )),
                    P.setStoreState({ currentSlide: j });
                }
              }, 8e3);
            };
            k && W();
            const H = () => {
              const b = N.current,
                j = P.state.currentSlide;
              _ && _(j), Z(j > b ? "Right" : j < b ? "Left" : null), B(X);
              const L = 1e3;
              (X.current = window.setTimeout(() => {
                X.current && (Z(null), B(X));
              }, L)),
                (N.current = j),
                K.current ? (B(K), q(!1)) : k && W();
            };
            return (
              P.subscribe(H),
              () => {
                P.unsubscribe(H), B(K), B(X);
              }
            );
          }, [P, k]);
          const M = !!z && "CarouselSliding" + z;
          return (0, e.jsxs)("div", {
            className: (0, m.A)(r.sliderBody, "SliderBody", M),
            children: [
              !S &&
                (0, e.jsx)(c._X, {
                  className: (0, m.A)(
                    r.carouselBtnCtn,
                    r.left,
                    r.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, h.we)("#Carousel_Prev"),
                  children: (0, e.jsx)(D.m, {
                    arrowFill: y,
                    arrowStyle: I,
                    direction: "left",
                  }),
                }),
              (0, e.jsx)(c.Ap, {
                className: n.J.GetScrollableClassname(),
                classNameTray: r.slideTrayCustomize,
                classNameAnimation: r.DisableSliderMotion,
                role: "list",
                children: (0, e.jsx)(E.q, { children: T }),
              }),
              !S &&
                (0, e.jsx)(c.CC, {
                  className: (0, m.A)(
                    r.carouselBtnCtn,
                    r.right,
                    r.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, h.we)("#Carousel_Next"),
                  children: (0, e.jsx)(D.m, {
                    arrowFill: y,
                    arrowStyle: I,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      },
      64377: (x, p, t) => {
        "use strict";
        t.d(p, { K: () => h, _: () => m });
        var e = t(7850),
          E = t(90626),
          C = t(95892),
          c = t(19298);
        const d = E.createContext({ enabled: !0 });
        function m(v) {
          const { enabled: r, children: a } = v,
            u = E.useMemo(() => ({ enabled: r }), [r]);
          return (0, e.jsx)(d.Provider, { value: u, children: a });
        }
        function h(v) {
          const {
              placeholderWidth: r,
              placeholderHeight: a,
              holdGamepadFocus: u = !1,
              onRender: o,
              style: i,
              mode: n = "JustLoad",
              children: l,
              ...f
            } = v,
            D = E.useContext(d),
            [O, A] = E.useState(() => ({
              bRenderChildren: !D.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            U = E.useRef(null),
            R = n === "LoadAndUnload" && D.enabled,
            Y = E.useCallback(
              (S) => {
                A((g) => {
                  if (g.bRenderChildren === S || (g.bRenderChildren && !R))
                    return g;
                  let T = 0,
                    _ = 0;
                  if (U.current) {
                    const y = U.current.getBoundingClientRect();
                    y && ((T = y.width), (_ = y.height));
                  }
                  return (
                    S && o && o(),
                    {
                      bRenderChildren: S,
                      nPrevRenderWidth: T,
                      nPrevRenderHeight: _,
                    }
                  );
                });
              },
              [R, o],
            );
          E.useEffect(() => {
            D.enabled || Y(!0);
          }, [D.enabled, Y]);
          let B = i;
          if (!O.bRenderChildren) {
            const S = O.nPrevRenderWidth || r,
              g = O.nPrevRenderHeight || a;
            (g !== void 0 || S !== void 0) &&
              (B = { ...i, minHeight: g, minWidth: S });
          }
          const w = R ? "repeated" : "once";
          let s = (0, e.jsx)(C.J, {
            containerRef: U,
            style: B,
            ...f,
            onVisibilityChange: Y,
            trigger: w,
            children: O.bRenderChildren && l,
          });
          return (
            u &&
              (s = (0, e.jsx)(c.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: s,
              })),
            s
          );
        }
      },
      95892: (x, p, t) => {
        "use strict";
        t.d(p, { J: () => a });
        var e = t(7850),
          E = t(19298),
          C = t(90626),
          c = t(82734),
          d = t(30096),
          m = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          v = (u, o, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? h(o, i) : o, f = u.length - 1, D;
              f >= 0;
              f--
            )
              (D = u[f]) && (l = (n ? D(o, i, l) : D(l)) || l);
            return n && l && m(o, i, l), l;
          };
        const r = class fe extends C.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = C.createRef();
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
          componentDidUpdate(o) {
            this.UpdateObserver(o);
          }
          UpdateObserver(o) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              o &&
              (o.rootMargin != this.m_observer.rootMargin ||
                o.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let i = this.m_refElement.current;
            if (
              (this.m_observer &&
                i != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && i)
            ) {
              let l = { root: this.FindScrollableAncestor(i) };
              this.props.rootMargin && (l.rootMargin = this.props.rootMargin),
                this.props.thresholds && (l.threshold = this.props.thresholds),
                (this.m_observer = (0, d.md)(i, this.OnIntersection, l));
            }
            this.m_observer &&
              i &&
              i != this.m_elTracked &&
              (this.m_observer.observe(i), (this.m_elTracked = i));
          }
          FindScrollableAncestor(o) {
            return c.Kf(o, (i) => {
              const n = this.props.horizontal
                ? window.getComputedStyle(i).overflowX
                : window.getComputedStyle(i).overflowY;
              return !!(
                n == "scroll" ||
                n == "auto" ||
                i.classList.contains(fe.GetScrollableClassname())
              );
            });
          }
          HandleRef(o) {
            (0, d.cZ)(this.m_refElement, o),
              this.props.containerRef && (0, d.cZ)(this.props.containerRef, o);
          }
          OnIntersection(o, i) {
            let n = !1;
            for (const l of o)
              if (l.isIntersecting) {
                n = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != n &&
              ((this.m_bPreviouslyIntersecting = n),
              this.props.onVisibilityChange && this.props.onVisibilityChange(n),
              n && this.BTriggerOnce() && this.DestroyObserver());
          }
          render() {
            let {
              onVisibilityChange: o,
              rootMargin: i,
              trigger: n,
              horizontal: l,
              containerRef: f,
              ...D
            } = this.props;
            return (0, e.jsx)(E.Z, {
              ref: this.HandleRef,
              ...D,
              children: this.props.children,
            });
          }
        };
        v([d.oI], r.prototype, "HandleRef", 1),
          v([d.oI], r.prototype, "OnIntersection", 1);
        let a = r;
      },
      2213: (x) => {
        x.exports = {
          SeeMoreButtonGamepad: "_3LB60XV--dXt2yYQ6dF5aT",
          Focused: "_3NISN-t8MP65UYQ4p5bNgh",
        };
      },
      73187: (x) => {
        x.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      66139: (x) => {
        x.exports = {
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
          NewBadge: "lX3GvxrkYaEqKJRpIhPsk",
          ScreenshotCycler: "_1lFAPltm4lZIZGtvNVBvpt",
          Screenshot: "_1MSXc0v0S-mTDz8I9uJTni",
          Active: "_3t54Nkge_M_VTM00eQZGbG",
        };
      },
      47444: (x) => {
        x.exports = {
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
      11279: (x) => {
        x.exports = { ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7" };
      },
    },
  ]);
})();
