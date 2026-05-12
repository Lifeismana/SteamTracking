/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7262],
  {
    83164: (e) => {
      e.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
    },
    35050: (e) => {
      e.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
    },
    58855: (e) => {
      e.exports = { CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA" };
    },
    78588: (e, a, t) => {
      "use strict";
      t.d(a, { a: () => d });
      var r = t(7850),
        s = t(74812),
        i = t(8893),
        n = t(90717),
        c = t(26296),
        l = t(52038),
        o = t(18654),
        u = t.n(o);
      function d(e) {
        const { id: a, imageType: t, bPreferAssetWithoutOverride: o } = e,
          { storeItemAsset: d, storeItemDefaultInfo: p } = (0, s.q)(a, t, o);
        if ("library" === t || "vertical" == t)
          return (0, r.jsx)(i.G, { id: a, bPreferAssetWithoutOverride: o });
        let m,
          _,
          h = "";
        if ("main" === t)
          (m = u().mainCapsuleImgWidth),
            (_ = u().mainCapsuleImgHeight),
            (h = u().MainCapsuleImageContainer);
        else
          (m = u().headerCapsuleImgWidth),
            (_ = u().headerCapsuleImgHeight),
            (h = u().HeaderCapsuleImageContainer);
        if (void 0 === d || !p)
          return (0, r.jsx)("div", {
            className: (0, l.A)(h, "CapsuleImageCtn"),
          });
        if (null == d) return null;
        let A = (0, n.N)(d, "header" === t);
        return (0, r.jsx)("div", {
          className: (0, l.A)(h, "CapsuleImageCtn"),
          children: (0, r.jsx)(c.o, {
            lazyLoad: !0,
            srcs: A,
            className: (0, l.A)(u().CapsuleImage),
            width: m,
            height: _,
            alt: p.name,
          }),
        });
      }
    },
    90717: (e, a, t) => {
      "use strict";
      t.d(a, { M: () => i, N: () => s });
      var r = t(42834);
      function s(e, a) {
        let t = [];
        return (
          e &&
            (function (e, a, t) {
              const s = (0, r.b0)(a, "header_2x") ?? (0, r.b0)(a, "header"),
                i =
                  (0, r.b0)(a, "main_capsule_2x") ??
                  (0, r.b0)(a, "main_capsule");
              t ? e.push(s, i) : e.push(i, s);
            })(t, e, a),
          t.filter((e) => !!e)
        );
      }
      function i(e, a) {
        return {
          strStoreVerticalURL: (0, r.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, r.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, a, t) => {
      "use strict";
      t.d(a, { G: () => h });
      var r = t(7850),
        s = t(96171),
        i = t(74812),
        n = t(90626),
        c = t(18654),
        l = t.n(c),
        o = t(26296),
        u = t(52038),
        d = t(78327),
        p = t(90717),
        m = t(83164),
        _ = t.n(m);
      function h(e) {
        const { id: a, bPreferLibrary: t, bPreferAssetWithoutOverride: c } = e,
          { storeItemDefaultInfo: m, storeItemAsset: h } = (0, i.q)(
            a,
            "vertical",
            c,
          ),
          [A, b] = n.useState(0);
        if (!m || !h)
          return (0, r.jsx)("div", {
            className: l().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: g, strLibraryVerticalURL: y } = (0, p.M)(
          h,
          m,
        );
        if (g && (!t || !y))
          return (0, r.jsxs)("div", {
            className: (0, u.A)(
              l().HeroCapsuleImageContainer,
              "HeroCapsuleImageContainer",
            ),
            children: [
              (0, r.jsx)("img", {
                src: g,
                className: l().CapsuleImage,
                alt: m.name,
              }),
              Boolean(m.type == s.uE._i) &&
                (0, r.jsx)("img", {
                  className: _().CornerSash,
                  src: `${d.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                  alt: "DLC",
                }),
            ],
          });
        if (y)
          return (0, r.jsxs)("div", {
            className: (0, u.A)(
              l().LibraryFallbackAssetImageContainer,
              l().VerticalCapsule,
              t ? l().ForceLibrarySizing : "",
            ),
            children: [
              (0, r.jsx)("div", {
                className: l().FallbackBackground,
                style: { backgroundImage: `url(${y})` },
              }),
              (0, r.jsx)("img", {
                src: y,
                className: l().CapsuleImage,
                alt: m.name,
              }),
            ],
          });
        const f = (0, p.N)(h, !0),
          v = f.length - 1,
          I = (e) => {
            const a = f.indexOf(e);
            a >= v && a < f.length - 1 && b(a + 1);
          };
        if (A < f.length) {
          const e = f[A];
          return (0, r.jsxs)("div", {
            className: l().LibraryFallbackAssetImageContainer,
            children: [
              (0, r.jsx)("div", {
                className: l().FallbackBackground,
                style: { backgroundImage: `url(${e})` },
              }),
              (0, r.jsx)(o.o, {
                lazyLoad: !0,
                srcs: f,
                className: l().CapsuleImage,
                alt: m.name,
                onImageError: I,
              }),
            ],
          });
        }
        return (0, r.jsx)("div", { className: l().HeroCapsuleImageContainer });
      }
    },
    94191: (e, a, t) => {
      "use strict";
      t.d(a, { V: () => I });
      var r = t(7850),
        s = t(8527),
        i = t(55672),
        n = t(80902),
        c = t(75233),
        l = t(24484),
        o = t(75515);
      var u = t(7338),
        d = t(39777),
        p = (t(35380), t(90626));
      function m() {
        return (0, n.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, l.Tc)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, o.h7)(e)) {
                const a = new Set();
                return (
                  e.filtered.forEach((e) => {
                    e.appid && a.add(e.appid);
                  }),
                  Array.from(a)
                );
              }
              return [];
            })();
            return new Set(e);
          },
        });
      }
      var _ = t(58918),
        h = t(17376);
      const A =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var b = t(18654),
        g = t.n(b),
        y = t(12155),
        f = t(52038),
        v = t(94011);
      function I(e) {
        const { appids: a, hide_status_banners: t, show_early_access: n } = e,
          { data: l } = (0, _.$Y)(),
          { data: o } = (0, h.F0)(),
          b = a.length > 0 && a.every((e) => l && l.has(e)),
          I = a.length > 0 && a.every((e) => o && o.has(e)),
          j = (function (e) {
            const { data: a } = m(),
              [t, r] = (0, p.useState)(!1),
              s = (0, c.jE)(),
              i = (0, u.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length || !a) return r(!1);
                (async () => {
                  const t = await Promise.all(
                    e
                      .filter((e) => !!e)
                      .map((e) => s.fetchQuery((0, d.us)(i, { appid: e }))),
                  );
                  r(
                    t.some(
                      (e) =>
                        (e && e.appid && a.has(e.appid)) ||
                        (e?.related_items?.parent_appid &&
                          a.has(e.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [e, i, s, a]),
              t
            );
          })(a),
          k = b && !t,
          C = I && !t,
          D = !t && n;
        return (0, r.jsxs)("div", {
          className: (0, f.A)(g().CapsuleDecorators, "CapsuleDecorators"),
          children: [
            k &&
              (0, r.jsxs)("span", {
                className: (0, f.A)(g().Banner, g().Blue),
                children: [
                  (0, r.jsx)("img", {
                    src: (0, s.YJ)(A),
                    className: g().LinesImg,
                    alt: i.Z.Localize("#Sale_InLibrary"),
                  }),
                  i.Z.Localize("#Sale_InLibrary"),
                ],
              }),
            C &&
              (0, r.jsxs)("span", {
                className: g().Banner,
                children: [
                  (0, r.jsx)(y.qnF, { className: g().LinesImg }),
                  i.Z.Localize("#Sale_OnWishlist"),
                ],
              }),
            D && !k && !C && (0, r.jsx)(N, { appids: a }),
            j && (0, r.jsx)(v.K, {}),
          ],
        });
      }
      function N(e) {
        const { appids: a } = e,
          t = (function (e) {
            const [a, t] = (0, p.useState)(!1),
              r = (0, c.jE)(),
              s = (0, u.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length) return t(!1);
                (async () => {
                  const a = await Promise.all(
                    e.map((e) => r.fetchQuery((0, d.us)(s, { appid: e }))),
                  );
                  t(a.some((e) => e && e.is_early_access));
                })();
              }, [e, s, r]),
              a
            );
          })(a);
        return t
          ? (0, r.jsx)("span", {
              className: (0, f.A)(g().Banner, g().EarlyAccessGradient),
              children: i.Z.Localize("#Sale_EarlyAccess"),
            })
          : null;
      }
    },
    74812: (e, a, t) => {
      "use strict";
      t.d(a, { q: () => n });
      var r = t(81393),
        s = t(96171),
        i = t(39777);
      function n(e, a, t = !1) {
        const { data: n } = (0, i.J$)(e),
          { data: c } = (0, i.lv)(e, t);
        let l;
        n &&
          1 == n.included_appids?.length &&
          !(function (e, a) {
            if (!e) return !1;
            switch (a) {
              case "header":
                return !!e.header;
              case "main":
                return !!e.main_capsule;
              case "vertical":
              case "library":
                return !!e.hero_capsule || !!e.library_capsule;
              default:
                return (0, r.z_)(a, `Unhandled imageType: ${a}`), !1;
            }
          })(c, a) &&
          n.item_type &&
          [s.c6.RD, s.c6.xO].includes(n.item_type) &&
          (l = { appid: n.included_appids[0] });
        const { data: o } = (0, i.J$)(l),
          { data: u } = (0, i.lv)(l, t),
          d = o?.visible ? o : n;
        return { storeItemAsset: o?.visible ? u : c, storeItemDefaultInfo: d };
      }
    },
    75515: (e, a, t) => {
      "use strict";
      t.d(a, { PH: () => u, TT: () => i, h7: () => d, mY: () => o });
      var r = t(34629),
        s = t(14947);
      class i {
        constructor() {
          (0, s.Gn)(this);
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
        default_selection_priority = o.k_eGeneral;
        current_selection_priority = o.k_eGeneral;
      }
      (0, r.Cg)([s.sH], i.prototype, "title", void 0),
        (0, r.Cg)([s.sH], i.prototype, "viewer_count", void 0),
        (0, r.Cg)([s.sH], i.prototype, "gamedata_subtitle", void 0),
        (0, r.Cg)([s.sH], i.prototype, "current_selection_priority", void 0);
      const n = "primary",
        c = "featured",
        l = "default_featured";
      var o;
      function u(e) {
        switch (e) {
          case n:
            return o.k_ePrimary;
          case c:
            return o.k_eFeatured;
          case l:
            return o.k_eDefaultFeatured;
          default:
            return o.k_eGeneral;
        }
      }
      function d(e) {
        const a = e;
        return (
          !!(
            a &&
            "number" == typeof a.success &&
            a.filtered &&
            Array.isArray(a.filtered) &&
            a.broadcast_chat_visibility
          ) &&
          (0 == a.filtered.length || "string" == typeof a.filtered[0].accountid)
        );
      }
      !(function (e) {
        (e[(e.k_ePrimary = 3)] = "k_ePrimary"),
          (e[(e.k_eFeatured = 2)] = "k_eFeatured"),
          (e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (e[(e.k_eGeneral = 0)] = "k_eGeneral");
      })(o || (o = {}));
    },
    94011: (e, a, t) => {
      "use strict";
      t.d(a, { K: () => n });
      var r = t(7850),
        s = t(61859),
        i = t(35050);
      function n() {
        return (0, r.jsx)("div", {
          className: i.bordered_live_stream_icon,
          children: (0, s.we)("#home_page_live_broadcast"),
        });
      }
    },
    72860: (e, a, t) => {
      "use strict";
      t.d(a, { S: () => u });
      var r = t(55672),
        s = t(71420),
        i = t(55963),
        n = t(70300),
        c = t(81393),
        l = t(56011),
        o = t(61336);
      function u(e, a, t, u, d, p) {
        if (!t) return;
        if (!(0, n.nz)(e.item_type))
          return void (0, c.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const m = (0, i.wJ)(`${(0, s._)(e, u)}${d ? `?${d}` : ""}`, a);
        return {
          onClick: (e) => {
            let a = (0, l.uX)(e) || window;
            p
              ? p(e)
              : m.startsWith("steam://") || (a.location.href = (0, o.NT)(m));
          },
          onOKActionDescription: r.Z.Localize("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, a, t) => {
      "use strict";
      t.d(a, { nz: () => n, oj: () => c });
      var r = t(7850),
        s = t(96171),
        i = t(84518);
      function n(e) {
        return e == s.c6.xO
          ? "bundle"
          : e == s.c6.RD
            ? "sub"
            : (s.c6.qI, "app");
      }
      const c = (e) => {
        const { appid: a } = e,
          t = (0, r.jsx)("div", {
            className: "ImpressionTrackedElement",
            children: e.children,
          });
        return a ? (0, r.jsx)(i.A, { appID: a, children: t }) : t;
      };
    },
    54492: (e, a, t) => {
      "use strict";
      t.d(a, { J: () => d });
      var r = t(7850),
        s = t(72737),
        i = t(34104),
        n = t(39777),
        c = t(91822),
        l = t(52038),
        o = t(78327),
        u = t(58855);
      function d(e) {
        const { bAllowOutsideOfDeck: a } = e;
        return (0, o.Qn)() || a ? (0, r.jsx)(p, { ...e }) : null;
      }
      function p(e) {
        const { className: a, id: t } = e,
          o = (0, n.qI)(t),
          [d, p] = (0, c.FD)();
        let m = "unknown";
        if (p == c.H1)
          switch (o.data?.steam_os_compat_category) {
            case s.Hi:
              m = "steamoscompatible";
              break;
            case s.u_:
              m = "steamosunsupported";
              break;
            case s.xs:
              m = "steamosunknown";
          }
        else
          switch (o.data?.steam_deck_compat_category) {
            case i.I2:
              m = "verified";
              break;
            case i.sd:
              m = "playable";
              break;
            case i.V8:
              m = "unsupported";
          }
        return (0, r.jsx)("div", {
          className: (0, l.A)(u.CompatIcon, "ds_steam_deck_compat", m, a),
        });
      }
    },
  },
]);
