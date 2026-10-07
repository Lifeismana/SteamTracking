/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [36786],
    {
      84607: (v, g, t) => {
        "use strict";
        t.d(g, { a: () => c });
        var e = t(7850),
          l = t(89667),
          C = t(72838),
          f = t(42240),
          n = t(39239),
          u = t(36707),
          i = t(76532),
          s = t.n(i);
        function c(a) {
          const {
              id: r,
              imageType: d,
              bPreferAssetWithoutOverride: o,
              strAdditionalClassName: m,
              bNoShadow: p,
            } = a,
            { storeItemAsset: _, storeItemDefaultInfo: E } = (0, l.q)(r, d, o);
          if (d === "library" || d == "vertical")
            return (0, e.jsx)(C.G, {
              id: r,
              bPreferAssetWithoutOverride: o,
              bNoShadow: p,
            });
          let h = "";
          if (
            (d === "main"
              ? (h = s().MainCapsuleImageContainer)
              : (h = s().HeaderCapsuleImageContainer),
            _ === void 0 || !E)
          )
            return (0, e.jsx)("div", {
              className: (0, u.A)(h, "CapsuleImageCtn", m),
            });
          if (_ == null) return null;
          let M = (0, f.N)(_, d === "header");
          return (0, e.jsx)("div", {
            className: (0, u.A)(h, "CapsuleImageCtn", m),
            children: (0, e.jsx)(n.o, {
              lazyLoad: !0,
              srcs: M,
              className: (0, u.A)(s().CapsuleImage),
              alt: E.name,
            }),
          });
        }
      },
      42240: (v, g, t) => {
        "use strict";
        t.d(g, { M: () => C, N: () => l });
        var e = t(21721);
        function l(n, u) {
          let i = [];
          return n && f(i, n, u), i.filter((s) => !!s);
        }
        function C(n, u) {
          let i = (0, e.b0)(n, "hero_capsule"),
            s = (0, e.b0)(n, "library_capsule");
          return { strStoreVerticalURL: i, strLibraryVerticalURL: s };
        }
        function f(n, u, i) {
          const s = (0, e.b0)(u, "header_2x") ?? (0, e.b0)(u, "header"),
            c = (0, e.b0)(u, "main_capsule_2x") ?? (0, e.b0)(u, "main_capsule");
          i ? n.push(s, c) : n.push(c, s);
        }
      },
      86298: (v, g, t) => {
        "use strict";
        t.d(g, { S: () => s });
        var e = t(39905),
          l = t(47875),
          C = t(83482),
          f = t(71742),
          n = t(82734),
          u = t(53113),
          i = t(6698);
        function s(c, a, r, d, o, m) {
          if (!r) return;
          if (!(0, i.nz)(c.item_type)) {
            (0, f.wT)(
              !1,
              "StoreItemWidgetSalePageAction: unexpected type: " + c.item_type,
            );
            return;
          }
          const _ = (0, C.wJ)(`${(0, l._)(c, d)}${o ? `?${o}` : ""}`, a);
          return {
            onClick: (h) => {
              let M = (0, n.uX)(h) || window;
              m
                ? m(h)
                : _.startsWith("steam://") || (M.location.href = (0, u.NT)(_));
            },
            onOKActionDescription: e.Z.Localize("#Sale_Gamepad_Action_Select"),
          };
        }
      },
      72838: (v, g, t) => {
        "use strict";
        t.d(g, { G: () => o });
        var e = t(7850),
          l = t(72609),
          C = t(78192),
          f = t(89667),
          n = t(90626),
          u = t(76532),
          i = t.n(u),
          s = t(39239),
          c = t(36707),
          a = t(42240),
          r = t(83164),
          d = t.n(r);
        function o(m) {
          const {
              id: p,
              bPreferLibrary: _,
              bPreferAssetWithoutOverride: E,
              bNoShadow: h,
            } = m,
            M = h ? i().NoShadow : "",
            { storeItemDefaultInfo: x, storeItemAsset: A } = (0, f.q)(
              p,
              "vertical",
              E,
            ),
            [b, w] = n.useState(0);
          if (!x || !A)
            return (0, e.jsx)("div", {
              className: i().HeroCapsuleImageContainer,
            });
          const { strStoreVerticalURL: N, strLibraryVerticalURL: U } = (0, a.M)(
            A,
            x,
          );
          if (N && (!_ || !U))
            return (0, e.jsxs)("div", {
              className: (0, c.A)(
                i().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
              children: [
                (0, e.jsx)("img", {
                  src: N,
                  className: i().CapsuleImage,
                  alt: x.name,
                }),
                x.type == C.uE._i &&
                  (0, e.jsx)("img", {
                    className: d().CornerSash,
                    src: `${l.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                    alt: "DLC",
                  }),
              ],
            });
          if (U)
            return (0, e.jsxs)("div", {
              className: (0, c.A)(
                i().LibraryFallbackAssetImageContainer,
                i().VerticalCapsule,
                _ ? i().ForceLibrarySizing : "",
                M,
              ),
              children: [
                (0, e.jsx)("div", {
                  className: i().FallbackBackground,
                  style: { backgroundImage: `url(${U})` },
                }),
                (0, e.jsx)("img", {
                  src: U,
                  className: i().CapsuleImage,
                  alt: x.name,
                }),
              ],
            });
          const W = (0, a.N)(A, !0),
            Z = W.length - 1,
            I = (D) => {
              const L = W.indexOf(D);
              L >= Z && L < W.length - 1 && w(L + 1);
            };
          if (b < W.length) {
            const D = W[b];
            return (0, e.jsxs)("div", {
              className: (0, c.A)(i().LibraryFallbackAssetImageContainer, M),
              children: [
                (0, e.jsx)("div", {
                  className: i().FallbackBackground,
                  style: { backgroundImage: `url(${D})` },
                }),
                (0, e.jsx)(s.o, {
                  lazyLoad: !0,
                  srcs: W,
                  className: i().CapsuleImage,
                  alt: x.name,
                  onImageError: I,
                }),
              ],
            });
          }
          return (0, e.jsx)("div", {
            className: i().HeroCapsuleImageContainer,
          });
        }
      },
      88743: (v, g, t) => {
        "use strict";
        t.d(g, { Sh: () => i, dE: () => n, rt: () => C, zl: () => f });
        var e = t(90626),
          l = t(78192);
        function C(a) {
          return (0, e.useMemo)(() => i(a), [a?.id, a?.type]);
        }
        function f(a, r) {
          return (0, e.useMemo)(() => c(a, r), [a, r]);
        }
        function n(a, r) {
          return (0, e.useMemo)(() => s(a, r), [a, r]);
        }
        function u(a, r) {
          let d = "app";
          return (
            r == EStoreItemType.k_EStoreItemType_Bundle
              ? (d = "bundle")
              : r == EStoreItemType.k_EStoreItemType_Package && (d = "sub"),
            useMemo(() => s(a, d), [a, d])
          );
        }
        function i(a) {
          if (!(!a || !a.id)) {
            if (!a.type) return { appid: a.id };
            switch (a.type) {
              case "sub":
                return { packageid: a.id };
              case "bundle":
                return { bundleid: a.id };
              default:
                return { appid: a.id };
            }
          }
        }
        function s(a, r) {
          switch (r) {
            case "sub":
              return { packageid: a };
            case "bundle":
              return { bundleid: a };
            default:
              return { appid: a };
          }
        }
        function c(a, r) {
          switch (r) {
            case "sub":
              return { packageid: a };
            case "bundle":
              return { bundleid: a };
            default:
              return { appid: a };
          }
        }
      },
      23627: (v, g, t) => {
        "use strict";
        t.d(g, { K: () => n });
        var e = t(7850),
          l = t(18210),
          C = t(66901),
          f = t.n(C);
        function n() {
          return (0, e.jsx)("div", {
            className: C.bordered_live_stream_icon,
            children: (0, l.we)("#home_page_live_broadcast"),
          });
        }
      },
      46727: (v, g, t) => {
        "use strict";
        t.d(g, { V: () => U });
        var e = t(7850),
          l = t(72609),
          C = t(39905),
          f = t(80902),
          n = t(75233),
          u = t(67705),
          i = t(34032);
        async function s() {
          let I = (0, u.Fd)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, i.h7)(I)) {
            const D = new Set();
            return (
              I.filtered.forEach((L) => {
                L.appid && D.add(L.appid);
              }),
              Array.from(D)
            );
          }
          return [];
        }
        var c = t(5827),
          a = t(40358),
          r = t(90626);
        function d() {
          return (0, f.I)(p());
        }
        function o(I) {
          const { data: D } = d(),
            L = useStoreItemKeyFromAppID(I),
            { data: y } = useStoreItemDefaultInfo(L);
          return !!(
            D &&
            (D.has(I) ||
              (y?.related_items?.parent_appid &&
                D.has(y.related_items.parent_appid)))
          );
        }
        function m(I) {
          const { data: D } = d(),
            [L, y] = (0, r.useState)(!1),
            T = (0, n.jE)(),
            R = (0, c.eG)();
          return (
            (0, r.useEffect)(() => {
              if (!I || I.length == 0 || !D) return y(!1);
              (async () => {
                const O = await Promise.all(
                  I.filter((P) => !!P).map((P) =>
                    T.fetchQuery((0, a.us)(R, { appid: P })),
                  ),
                );
                y(
                  O.some(
                    (P) =>
                      (P && P.appid && D.has(P.appid)) ||
                      (P?.related_items?.parent_appid &&
                        D.has(P.related_items.parent_appid)),
                  ),
                );
              })();
            }, [I, R, T, D]),
            L
          );
        }
        function p() {
          return {
            queryKey: _(),
            queryFn: async () => {
              const I = await s();
              return new Set(I);
            },
          };
        }
        function _() {
          return ["BroadcastApps"];
        }
        var E = t(24179),
          h = t(54528);
        const M =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
        var x = t(76532),
          A = t.n(x),
          b = t(36118),
          w = t(36707),
          N = t(23627);
        function U(I) {
          const { appids: D, hide_status_banners: L, show_early_access: y } = I,
            { data: T } = (0, E.$Y)(),
            { data: R } = (0, h.F0)(),
            B = D.length > 0 && D.every((V) => T && T.has(V)),
            O = D.length > 0 && D.every((V) => R && R.has(V)),
            P = m(D),
            K = B && !L,
            j = O && !L,
            S = !L && y;
          return (0, e.jsxs)("div", {
            className: (0, w.A)(A().CapsuleDecorators, "CapsuleDecorators"),
            children: [
              K &&
                (0, e.jsxs)("span", {
                  className: (0, w.A)(A().Banner, A().Blue),
                  children: [
                    (0, e.jsx)("img", {
                      src: (0, l.YJ)(M),
                      className: A().LinesImg,
                      alt: C.Z.Localize("#Sale_InLibrary"),
                    }),
                    C.Z.Localize("#Sale_InLibrary"),
                  ],
                }),
              j &&
                (0, e.jsxs)("span", {
                  className: A().Banner,
                  children: [
                    (0, e.jsx)(b.qnF, { className: A().LinesImg }),
                    C.Z.Localize("#Sale_OnWishlist"),
                  ],
                }),
              S && !K && !j && (0, e.jsx)(W, { appids: D }),
              P && (0, e.jsx)(N.K, {}),
            ],
          });
        }
        function W(I) {
          const { appids: D } = I;
          return Z(D)
            ? (0, e.jsx)("span", {
                className: (0, w.A)(A().Banner, A().EarlyAccessGradient),
                children: C.Z.Localize("#Sale_EarlyAccess"),
              })
            : null;
        }
        function Z(I) {
          const [D, L] = (0, r.useState)(!1),
            y = (0, n.jE)(),
            T = (0, c.eG)();
          return (
            (0, r.useEffect)(() => {
              if (!I || I.length == 0) return L(!1);
              (async () => {
                const B = await Promise.all(
                  I.map((O) => y.fetchQuery((0, a.us)(T, { appid: O }))),
                );
                L(B.some((O) => O && O.is_early_access));
              })();
            }, [I, T, y]),
            D
          );
        }
      },
      89667: (v, g, t) => {
        "use strict";
        t.d(g, { q: () => f });
        var e = t(71742),
          l = t(78192),
          C = t(40358);
        function f(u, i, s = !1) {
          const { data: c } = (0, C.J$)(u),
            { data: a } = (0, C.lv)(u, s);
          let r;
          c &&
            c.included_appids?.length == 1 &&
            !n(a, i) &&
            c.item_type &&
            [l.c6.RD, l.c6.xO].includes(c.item_type) &&
            (r = { appid: c.included_appids[0] });
          const { data: d } = (0, C.J$)(r),
            { data: o } = (0, C.lv)(r, s),
            m = d?.visible ? d : c;
          return {
            storeItemAsset: d?.visible ? o : a,
            storeItemDefaultInfo: m,
          };
        }
        function n(u, i) {
          if (!u) return !1;
          switch (i) {
            case "header":
              return !!u.header;
            case "main":
              return !!u.main_capsule;
            case "vertical":
            case "library":
              return !!u.hero_capsule || !!u.library_capsule;
            default:
              return (0, e.z_)(i, `Unhandled imageType: ${i}`), !1;
          }
        }
      },
      40426: (v, g, t) => {
        "use strict";
        t.d(g, { XC: () => a, _G: () => d });
        var e = t(7850),
          l = t(90626),
          C = t(36118),
          f = t(36707),
          n = t(41672),
          u = t(96538),
          i = t(75358),
          s = t.n(i),
          c = t(18210);
        function a() {
          const [o, m] = l.useState(void 0),
            p = l.useCallback(() => m(void 0), []),
            _ = (0, e.jsx)(u.EN, {
              active: o !== void 0,
              children: (0, e.jsx)(r, { closeModal: p, rgImageURL: o }),
            });
          return [m, _];
        }
        function r(o) {
          const { closeModal: m, rgImageURL: p } = o,
            [_, E] = l.useState(0),
            h = p?.length ?? 0,
            M = l.useCallback(() => {
              _ == 0 ? E(h - 1) : E(_ - 1);
            }, [_, h]),
            x = l.useCallback(() => {
              p && _ + 1 >= h ? E(0) : E(_ + 1);
            }, [_, p, h]);
          return (0, e.jsxs)(u.eV, {
            title: (0, c.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: m,
            bHideCloseIcon: !0,
            modalClassName: s().PopupScreenshotModal,
            children: [
              (0, e.jsx)(d, {
                index: _,
                numElements: p?.length || 0,
                fnForward: x,
                fnBackwards: M,
                fnClose: m,
                bCircular: !0,
              }),
              (0, e.jsx)("div", {
                className: s().PopupScreenshotContainer,
                children: (0, e.jsx)("img", {
                  className: s().PopupScreenshot,
                  src: p?.[_],
                  alt: "",
                }),
              }),
            ],
          });
        }
        function d(o) {
          const {
            index: m,
            numElements: p,
            fnForward: _,
            fnBackwards: E,
            fnClose: h,
            bCircular: M,
          } = o;
          (0, n.E)("ArrowLeft", () => E?.(), !0, !0),
            (0, n.E)("Left", () => E?.(), !0, !0),
            (0, n.E)("ArrowRight", () => _?.(), !0, !0),
            (0, n.E)("Right", () => _?.(), !0, !0),
            (0, n.E)("Escape", () => h && h(), !0, !0),
            (0, n.E)("Esc", () => h && h(), !0, !0);
          let x = p > 1;
          return (0, e.jsxs)("div", {
            className: s().ButtonCtn,
            children: [
              x &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("button", {
                      type: "button",
                      className: (0, f.A)(
                        s().ButtonIcon,
                        m === 0 && !M ? s().Disabled : null,
                      ),
                      onClick: E,
                      "aria-label": (0, c.we)("#Carousel_Prev"),
                      children: (0, e.jsx)(C.V5W, { angle: 270 }),
                    }),
                    (0, e.jsx)("button", {
                      type: "button",
                      className: (0, f.A)(
                        s().ButtonIcon,
                        m === p - 1 && !M ? s().Disabled : null,
                      ),
                      onClick: _,
                      "aria-label": (0, c.we)("#Carousel_Next"),
                      children: (0, e.jsx)(C.V5W, { angle: 90 }),
                    }),
                  ],
                }),
              (0, e.jsx)("button", {
                type: "button",
                className: s().ButtonIcon,
                onClick: h,
                "aria-label": (0, c.we)("#Button_Close"),
                children: (0, e.jsx)(C.X, {}),
              }),
            ],
          });
        }
      },
      34032: (v, g, t) => {
        "use strict";
        t.d(g, { PH: () => r, TT: () => n, h7: () => d, mY: () => a });
        var e = t(14947),
          l = Object.defineProperty,
          C = Object.getOwnPropertyDescriptor,
          f = (o, m, p, _) => {
            for (
              var E = _ > 1 ? void 0 : _ ? C(m, p) : m, h = o.length - 1, M;
              h >= 0;
              h--
            )
              (M = o[h]) && (E = (_ ? M(m, p, E) : M(E)) || E);
            return _ && E && l(m, p, E), E;
          };
        class n {
          constructor() {
            (0, e.Gn)(this);
          }
          accountid;
          steamid;
          appid;
          hub_popular;
          popular;
          relay_broadcast_id;
          rowversion;
          thumbnail_http_address;
          nAppIDVOD;
          title = void 0;
          viewer_count = void 0;
          whitelist_rank;
          gamedata_subtitle = void 0;
          store_title;
          left_panel;
          right_panel;
          snr;
          broadcast_chat_visibility;
          default_selection_priority = 0;
          current_selection_priority = 0;
        }
        f([e.sH], n.prototype, "title", 2),
          f([e.sH], n.prototype, "viewer_count", 2),
          f([e.sH], n.prototype, "gamedata_subtitle", 2),
          f([e.sH], n.prototype, "current_selection_priority", 2);
        const u = "primary",
          i = "featured",
          s = "default_featured",
          c = "general";
        var a = ((o) => (
          (o[(o.k_ePrimary = 3)] = "k_ePrimary"),
          (o[(o.k_eFeatured = 2)] = "k_eFeatured"),
          (o[(o.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (o[(o.k_eGeneral = 0)] = "k_eGeneral"),
          o
        ))(a || {});
        function r(o) {
          switch (o) {
            case u:
              return 3;
            case i:
              return 2;
            case s:
              return 1;
            case c:
            default:
              return 0;
          }
        }
        function d(o) {
          const m = o;
          return m &&
            typeof m.success == "number" &&
            m.filtered &&
            Array.isArray(m.filtered) &&
            m.broadcast_chat_visibility
            ? m.filtered.length == 0
              ? !0
              : typeof m.filtered[0].accountid == "string"
            : !1;
        }
      },
      24873: (v, g, t) => {
        "use strict";
        t.d(g, { Dm: () => o, SC: () => m });
        var e = t(7850),
          l = t(39905),
          C = t(40358),
          f = t(64238),
          n = t.n(f),
          u = t(90626),
          i = t(34713),
          s = t.n(i),
          c = t(55546),
          a = t(75779),
          r = t(71742),
          d = t(26356);
        function o(R) {
          const { data: B } = (0, C.qI)(R.id);
          return (0, e.jsx)(p, { platforms: B });
        }
        function m(R) {
          const { id: B, ...O } = R,
            { data: P } = (0, C.qI)(B);
          return (0, e.jsx)(_, { ...O, platforms: P });
        }
        const p = u.memo(function (B) {
            const { platforms: O } = B;
            if (!O) return null;
            const { windows: P, mac: K, steamos_linux: j, vr_support: S } = O;
            return (0, e.jsxs)("span", {
              className: s().SupportedPlatforms,
              children: [
                P && (0, e.jsx)(E, {}),
                K && (0, e.jsx)(h, {}),
                j && (0, e.jsx)(M, {}),
                S?.vrhmd && (0, e.jsx)(x, {}),
              ],
            });
          }),
          _ = u.memo(function (B) {
            const { platforms: O, eHWCompat: P, size: K = "small" } = B;
            let j;
            if (P == d.iA)
              return (
                (0, r.wT)(
                  !1,
                  "SteamHWCompatIndicator called for k_ESteamHWCompatibility_None",
                ),
                null
              );
            if (P == d.c9) {
              const S = O?.steam_os_compat_category;
              if (S === void 0) return null;
              switch (S) {
                case c.Hi:
                  j = T;
                  break;
                case c.u_:
                  j = L;
                  break;
                case c.xs:
                  j = y;
                  break;
                default:
                  return (
                    (0, r.z_)(S, `Unhandled steam os category: ${S}`), null
                  );
              }
            } else {
              let S;
              if (
                (P == d.JR
                  ? (S = O?.steam_machine_compat_category)
                  : P == d.bY
                    ? (S = O?.steam_frame_compat_category)
                    : (S = O?.steam_deck_compat_category),
                S === void 0)
              )
                return null;
              switch (S) {
                case a.I2:
                  j = I;
                  break;
                case a.sd:
                  j = D;
                  break;
                case a.V8:
                  j = L;
                  break;
                case a.YX:
                  j = y;
                  break;
                default:
                  return (
                    (0, r.z_)(S, `Unhandled deck compat category: ${S}`), null
                  );
              }
            }
            return (0, e.jsxs)("span", {
              className: n()(
                s().DeckCompat,
                K == "small" && s().Small,
                K == "fill" && s().Fill,
              ),
              children: [
                P == d.ZJ && (0, e.jsx)(U, {}),
                P == d.JR && (0, e.jsx)(W, {}),
                P == d.bY && (0, e.jsx)(Z, {}),
                (0, e.jsx)(j, {}),
              ],
            });
          });
        function E() {
          return (0, e.jsx)("span", {
            className: n()(s().PlatformIndicator, s().Windows),
            title: l.Z.Localize("#Platform_Windows"),
            children: (0, e.jsx)(A, {}),
          });
        }
        function h() {
          return (0, e.jsx)("span", {
            className: n()(s().PlatformIndicator, s().Mac),
            title: l.Z.Localize("#Platform_Mac"),
            children: (0, e.jsx)(b, {}),
          });
        }
        function M() {
          return (0, e.jsx)("span", {
            className: n()(s().PlatformIndicator, s().SteamOS),
            title: l.Z.Localize("#Platform_Linux"),
            children: (0, e.jsx)(w, {}),
          });
        }
        function x() {
          return (0, e.jsx)("span", {
            className: s().PlatformIndicator,
            title: l.Z.Localize("#Platform_VR"),
            children: (0, e.jsx)(N, {}),
          });
        }
        function A() {
          return (0, e.jsxs)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
            children: [
              (0, e.jsx)("rect", {
                fill: "currentColor",
                width: "60.834",
                height: "60.835",
              }),
              (0, e.jsx)("rect", {
                x: "67.165",
                fill: "currentColor",
                width: "60.835",
                height: "60.835",
              }),
              (0, e.jsx)("rect", {
                y: "67.164",
                fill: "currentColor",
                width: "60.834",
                height: "60.836",
              }),
              (0, e.jsx)("rect", {
                x: "67.165",
                y: "67.164",
                fill: "currentColor",
                width: "60.835",
                height: "60.836",
              }),
            ],
          });
        }
        function b() {
          return (0, e.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, e.jsx)("path", {
                d: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
              }),
              (0, e.jsx)("path", {
                d: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
              }),
            ],
          });
        }
        function w() {
          return (0, e.jsxs)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#FFFFFF",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
              }),
            ],
          });
        }
        function N() {
          return (0, e.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                d: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                d: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function U() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
            ),
            className: n()(s().SteamDeckCompatLogo),
            children: (0, e.jsx)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
                fill: "white",
              }),
            }),
          });
        }
        function W() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: n()(s().SteamDeckCompatLogo),
            children: (0, e.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, e.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z",
                  fill: "white",
                }),
                (0, e.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function Z() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: n()(s().SteamDeckCompatLogo),
            children: (0, e.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, e.jsx)("path", {
                  opacity: "0.84",
                  d: "M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z",
                  fill: "white",
                }),
                (0, e.jsx)("path", {
                  opacity: "0.84",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function I() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize("#SteamDeckVerified_Category_Verified"),
            className: s().SteamDeckCompatIcon,
            children: (0, e.jsx)("svg", {
              className: n()(s().SteamDeckCompatVerified),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function D() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize("#SteamDeckVerified_Category_Playable"),
            className: s().SteamDeckCompatIcon,
            children: (0, e.jsx)("svg", {
              className: n()(s().SteamDeckCompatPlayable),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function L() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize("#SteamDeckVerified_Category_Unsupported"),
            className: s().SteamDeckCompatIcon,
            children: (0, e.jsx)("svg", {
              className: n()(s().SteamDeckCompatUnsupported),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function y() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize("#SteamDeckVerified_Category_Unknown"),
            className: s().SteamDeckCompatIcon,
            children: (0, e.jsx)("svg", {
              className: n()(s().SteamDeckCompatUnknown),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function T() {
          return (0, e.jsx)("span", {
            title: l.Z.Localize("#SteamOSCompatibility_Category_Compatible"),
            className: s().SteamDeckCompatIcon,
            children: (0, e.jsx)("svg", {
              className: n()(s().SteamOSCompatCompatible),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
      },
      96155: (v, g, t) => {
        "use strict";
        t.d(g, { J: () => c });
        var e = t(7850),
          l = t(21690),
          C = t(36707),
          f = t(3166),
          n = t(58855),
          u = t.n(n),
          i = t(24873),
          s = t(26356);
        function c(r) {
          const { bAllowOutsideOfDeck: d } = r;
          return !(0, f.Qn)() && !d ? null : (0, e.jsx)(a, { ...r });
        }
        function a(r) {
          const { className: d, id: o } = r,
            [m, p] = (0, l.FD)();
          let _ = p;
          if ((p == s.iA && (_ = s.ZJ), !o)) return null;
          let E;
          return (
            p == s.bY && (E = n.CompatIconFrame),
            (0, e.jsx)("div", {
              className: (0, C.A)(n.CompatIcon, E, d),
              children: (0, e.jsx)(i.SC, { id: o, eHWCompat: _ }),
            })
          );
        }
      },
      39239: (v, g, t) => {
        "use strict";
        t.d(g, { i: () => s, o: () => i });
        var e = t(7850),
          l = t(90626),
          C = t(18210),
          f = t(67523),
          n = t.n(f),
          u = t(80150);
        function i(c) {
          const {
              className: a,
              srcs: r,
              lazyLoad: d,
              width: o,
              height: m,
              alt: p,
              crossOrigin: _,
            } = c,
            [E, h] = l.useState(r.length),
            [M, x] = l.useState(0);
          l.useEffect(() => {
            E != r.length && (h(r.length), x(0));
          }, [E, r.length]);
          const A = l.useCallback(() => {
            c.onImageError && c.onImageError(c.srcs[M]),
              M + 1 < c.srcs.length && x(M + 1);
          }, [M, c]);
          return r.length == 0
            ? null
            : (0, e.jsx)("img", {
                className: a,
                src: r[M],
                crossOrigin: _,
                onError: A,
                loading: d ? "lazy" : void 0,
                width: o,
                height: m,
                alt: p,
              });
        }
        function s(c) {
          const [a, r] = l.useState(!1),
            {
              className: d,
              src: o,
              lazyLoad: m,
              width: p,
              height: _,
              alt: E,
              crossOrigin: h,
            } = c;
          return a
            ? (0, e.jsxs)("div", {
                className: f.ErrorDiv,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, C.we)("#Image_ErrorTitle", o),
                  }),
                  (0, e.jsx)("ul", {
                    children: (0, e.jsx)("li", {
                      children: (0, C.we)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, C.we)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, e.jsx)(u.o, {
                className: d,
                src: o,
                onError: () => r(!0),
                crossOrigin: h,
                loading: m ? "lazy" : void 0,
                width: p,
                height: _,
                alt: E,
              });
        }
      },
      80150: (v, g, t) => {
        "use strict";
        t.d(g, { o: () => d });
        var e = t(7850),
          l = t(90626),
          C = t(36118),
          f = t(36707),
          n = t(40426),
          u = t(21659),
          i = t(21038),
          s = t.n(i);
        const c = 1.3,
          a = 3,
          r = 256;
        function d(o) {
          const [m, p] = (0, l.useState)(!1),
            [_, E] = (0, l.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            h = (0, l.useRef)(null),
            [M, x] = (0, n.XC)();
          return (
            (0, l.useEffect)(() => {
              _.naturalWidth > _.displayWidth * c &&
                _.naturalHeight > _.displayHeight * c &&
                _.naturalWidth > r &&
                _.naturalWidth / _.naturalHeight < a &&
                p(!0);
            }, [_]),
            m
              ? (0, e.jsxs)("span", {
                  className: i.PreviewCtn,
                  children: [
                    x,
                    (0, e.jsx)("span", {
                      className: i.SVG,
                      children: (0, e.jsx)(C.YNO, {}),
                    }),
                    (0, e.jsx)("img", {
                      ...o,
                      className: (0, f.A)({
                        ...(o.className && { [o.className]: !0 }),
                      }),
                      onClick: (A) => {
                        o.src && M([o.src]);
                      },
                    }),
                  ],
                })
              : (0, e.jsx)("img", {
                  ...o,
                  ref: h,
                  onLoad: (A) => {
                    if (!A.currentTarget.closest("a") && !(0, u.c5)()) {
                      const {
                        naturalWidth: b,
                        naturalHeight: w,
                        width: N,
                        height: U,
                      } = A.currentTarget;
                      E({
                        naturalWidth: b,
                        naturalHeight: w,
                        displayWidth: N,
                        displayHeight: U,
                      });
                    }
                  },
                })
          );
        }
      },
      83164: (v) => {
        v.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
      },
      66901: (v) => {
        v.exports = { bordered_live_stream_icon: "NSb2xMcNnPEMjPi1dr8KB" };
      },
      75358: (v) => {
        v.exports = {
          PopupScreenshotModal: "_39-iZ5ATgVu0Ji6MD3vGTs",
          PopupScreenshotContainer: "_1yPgn1HBK5eQLrfrG38h1X",
          PopupScreenshot: "_173h7V5UqdDhN-J2O-AKVt",
          ButtonCtn: "_3-4JG-Z1QyDXZaEByxvMvS",
          ButtonIcon: "_15gRxd1hdAQxSunAfg1PZ8",
          Disabled: "_3Mh6I7hT8HViCO91Q5Iech",
        };
      },
      34713: (v) => {
        v.exports = {
          SupportedPlatforms: "_33rQKLUJRiKbr34oQgUJSd",
          PlatformIndicator: "_1POD5IsW1vYfv9B_TuSiBd",
          Windows: "_3xTrz2wDDtzNFR58CQfSNa",
          SteamOS: "_1z6ASwnrVeCtYcPfPjiZZd",
          Mac: "_1FiaJi5I3_8ky2ppYqGqfr",
          DeckCompat: "GFz2Vhq20J9x6lqpaKy2G",
          Fill: "_39zOL0i8BdQ_RV-xE0zXDz",
          SteamDeckCompatLogo: "_2xju2qqP5744ItNt2uvbdT",
          SteamDeckCompatIcon: "_28xj3TU4bHvjyeVhlzCmRV",
          SteamDeckCompatVerified: "_3-OPVQMD-qkvAyt3Jntn9t",
          SteamDeckCompatPlayable: "_1EMxxDePjZh_-E7AH0yDym",
          SteamDeckCompatUnsupported: "_2qziiy9xhD4mLc1OgxQAAy",
          SteamDeckCompatUnknown: "I6YFAbL_5IYOTtedVwwPV",
          SteamOSCompatCompatible: "_2fVV0WviM21gsBt1Iz-Htx",
        };
      },
      58855: (v) => {
        v.exports = {
          CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
          CompatIconFrame: "_3E70dZ6hSfFCmskaIzbgJp",
        };
      },
      67523: (v) => {
        v.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
      },
      21038: (v) => {
        v.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
    },
  ]);
})();
