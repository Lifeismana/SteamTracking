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
    39449: (e) => {
      e.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    58855: (e) => {
      e.exports = { CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA" };
    },
    67523: (e) => {
      e.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
    },
    21038: (e) => {
      e.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
    },
    78588: (e, a, t) => {
      "use strict";
      t.d(a, { a: () => d });
      var s = t(7850),
        r = t(74812),
        i = t(8893),
        n = t(90717),
        l = t(26296),
        c = t(52038),
        o = t(18654),
        u = t.n(o);
      function d(e) {
        const {
            id: a,
            imageType: t,
            bPreferAssetWithoutOverride: o,
            strAdditionalClassName: d,
          } = e,
          { storeItemAsset: p, storeItemDefaultInfo: m } = (0, r.q)(a, t, o);
        if ("library" === t || "vertical" == t)
          return (0, s.jsx)(i.G, { id: a, bPreferAssetWithoutOverride: o });
        let h = "";
        if ("main" === t) h = u().MainCapsuleImageContainer;
        else h = u().HeaderCapsuleImageContainer;
        if (void 0 === p || !m)
          return (0, s.jsx)("div", {
            className: (0, c.A)(h, "CapsuleImageCtn", d),
          });
        if (null == p) return null;
        let g = (0, n.N)(p, "header" === t);
        return (0, s.jsx)("div", {
          className: (0, c.A)(h, "CapsuleImageCtn", d),
          children: (0, s.jsx)(l.o, {
            lazyLoad: !0,
            srcs: g,
            className: (0, c.A)(u().CapsuleImage),
            alt: m.name,
          }),
        });
      }
    },
    90717: (e, a, t) => {
      "use strict";
      t.d(a, { M: () => i, N: () => r });
      var s = t(42834);
      function r(e, a) {
        let t = [];
        return (
          e &&
            (function (e, a, t) {
              const r = (0, s.b0)(a, "header_2x") ?? (0, s.b0)(a, "header"),
                i =
                  (0, s.b0)(a, "main_capsule_2x") ??
                  (0, s.b0)(a, "main_capsule");
              t ? e.push(r, i) : e.push(i, r);
            })(t, e, a),
          t.filter((e) => !!e)
        );
      }
      function i(e, a) {
        return {
          strStoreVerticalURL: (0, s.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, s.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, a, t) => {
      "use strict";
      t.d(a, { G: () => g });
      var s = t(7850),
        r = t(48210),
        i = t(74812),
        n = t(90626),
        l = t(18654),
        c = t.n(l),
        o = t(26296),
        u = t(52038),
        d = t(78327),
        p = t(90717),
        m = t(83164),
        h = t.n(m);
      function g(e) {
        const { id: a, bPreferLibrary: t, bPreferAssetWithoutOverride: l } = e,
          { storeItemDefaultInfo: m, storeItemAsset: g } = (0, i.q)(
            a,
            "vertical",
            l,
          ),
          [_, f] = n.useState(0);
        if (!m || !g)
          return (0, s.jsx)("div", {
            className: c().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: v, strLibraryVerticalURL: b } = (0, p.M)(
          g,
          m,
        );
        if (v && (!t || !b))
          return (0, s.jsxs)("div", {
            className: (0, u.A)(
              c().HeroCapsuleImageContainer,
              "HeroCapsuleImageContainer",
            ),
            children: [
              (0, s.jsx)("img", {
                src: v,
                className: c().CapsuleImage,
                alt: m.name,
              }),
              Boolean(m.type == r.uE._i) &&
                (0, s.jsx)("img", {
                  className: h().CornerSash,
                  src: `${d.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                  alt: "DLC",
                }),
            ],
          });
        if (b)
          return (0, s.jsxs)("div", {
            className: (0, u.A)(
              c().LibraryFallbackAssetImageContainer,
              c().VerticalCapsule,
              t ? c().ForceLibrarySizing : "",
            ),
            children: [
              (0, s.jsx)("div", {
                className: c().FallbackBackground,
                style: { backgroundImage: `url(${b})` },
              }),
              (0, s.jsx)("img", {
                src: b,
                className: c().CapsuleImage,
                alt: m.name,
              }),
            ],
          });
        const A = (0, p.N)(g, !0),
          y = A.length - 1,
          I = (e) => {
            const a = A.indexOf(e);
            a >= y && a < A.length - 1 && f(a + 1);
          };
        if (_ < A.length) {
          const e = A[_];
          return (0, s.jsxs)("div", {
            className: c().LibraryFallbackAssetImageContainer,
            children: [
              (0, s.jsx)("div", {
                className: c().FallbackBackground,
                style: { backgroundImage: `url(${e})` },
              }),
              (0, s.jsx)(o.o, {
                lazyLoad: !0,
                srcs: A,
                className: c().CapsuleImage,
                alt: m.name,
                onImageError: I,
              }),
            ],
          });
        }
        return (0, s.jsx)("div", { className: c().HeroCapsuleImageContainer });
      }
    },
    94191: (e, a, t) => {
      "use strict";
      t.d(a, { V: () => I });
      var s = t(7850),
        r = t(8527),
        i = t(55672),
        n = t(80902),
        l = t(75233),
        c = t(24484),
        o = t(75515);
      var u = t(7338),
        d = t(39777),
        p = (t(35380), t(90626));
      function m() {
        return (0, n.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, c.Tc)(
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
      var h = t(58918),
        g = t(17376);
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var f = t(18654),
        v = t.n(f),
        b = t(12155),
        A = t(52038),
        y = t(94011);
      function I(e) {
        const { appids: a, hide_status_banners: t, show_early_access: n } = e,
          { data: c } = (0, h.$Y)(),
          { data: o } = (0, g.F0)(),
          f = a.length > 0 && a.every((e) => c && c.has(e)),
          I = a.length > 0 && a.every((e) => o && o.has(e)),
          x = (function (e) {
            const { data: a } = m(),
              [t, s] = (0, p.useState)(!1),
              r = (0, l.jE)(),
              i = (0, u.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length || !a) return s(!1);
                (async () => {
                  const t = await Promise.all(
                    e
                      .filter((e) => !!e)
                      .map((e) => r.fetchQuery((0, d.us)(i, { appid: e }))),
                  );
                  s(
                    t.some(
                      (e) =>
                        (e && e.appid && a.has(e.appid)) ||
                        (e?.related_items?.parent_appid &&
                          a.has(e.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [e, i, r, a]),
              t
            );
          })(a),
          N = f && !t,
          C = I && !t,
          w = !t && n;
        return (0, s.jsxs)("div", {
          className: (0, A.A)(v().CapsuleDecorators, "CapsuleDecorators"),
          children: [
            N &&
              (0, s.jsxs)("span", {
                className: (0, A.A)(v().Banner, v().Blue),
                children: [
                  (0, s.jsx)("img", {
                    src: (0, r.YJ)(_),
                    className: v().LinesImg,
                    alt: i.Z.Localize("#Sale_InLibrary"),
                  }),
                  i.Z.Localize("#Sale_InLibrary"),
                ],
              }),
            C &&
              (0, s.jsxs)("span", {
                className: v().Banner,
                children: [
                  (0, s.jsx)(b.qnF, { className: v().LinesImg }),
                  i.Z.Localize("#Sale_OnWishlist"),
                ],
              }),
            w && !N && !C && (0, s.jsx)(j, { appids: a }),
            x && (0, s.jsx)(y.K, {}),
          ],
        });
      }
      function j(e) {
        const { appids: a } = e,
          t = (function (e) {
            const [a, t] = (0, p.useState)(!1),
              s = (0, l.jE)(),
              r = (0, u.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length) return t(!1);
                (async () => {
                  const a = await Promise.all(
                    e.map((e) => s.fetchQuery((0, d.us)(r, { appid: e }))),
                  );
                  t(a.some((e) => e && e.is_early_access));
                })();
              }, [e, r, s]),
              a
            );
          })(a);
        return t
          ? (0, s.jsx)("span", {
              className: (0, A.A)(v().Banner, v().EarlyAccessGradient),
              children: i.Z.Localize("#Sale_EarlyAccess"),
            })
          : null;
      }
    },
    74812: (e, a, t) => {
      "use strict";
      t.d(a, { q: () => n });
      var s = t(81393),
        r = t(48210),
        i = t(39777);
      function n(e, a, t = !1) {
        const { data: n } = (0, i.J$)(e),
          { data: l } = (0, i.lv)(e, t);
        let c;
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
                return (0, s.z_)(a, `Unhandled imageType: ${a}`), !1;
            }
          })(l, a) &&
          n.item_type &&
          [r.c6.RD, r.c6.xO].includes(n.item_type) &&
          (c = { appid: n.included_appids[0] });
        const { data: o } = (0, i.J$)(c),
          { data: u } = (0, i.lv)(c, t),
          d = o?.visible ? o : n;
        return { storeItemAsset: o?.visible ? u : l, storeItemDefaultInfo: d };
      }
    },
    75515: (e, a, t) => {
      "use strict";
      t.d(a, { PH: () => u, TT: () => i, h7: () => d, mY: () => o });
      var s = t(34629),
        r = t(14947);
      class i {
        constructor() {
          (0, r.Gn)(this);
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
      (0, s.Cg)([r.sH], i.prototype, "title", void 0),
        (0, s.Cg)([r.sH], i.prototype, "viewer_count", void 0),
        (0, s.Cg)([r.sH], i.prototype, "gamedata_subtitle", void 0),
        (0, s.Cg)([r.sH], i.prototype, "current_selection_priority", void 0);
      const n = "primary",
        l = "featured",
        c = "default_featured";
      var o;
      function u(e) {
        switch (e) {
          case n:
            return o.k_ePrimary;
          case l:
            return o.k_eFeatured;
          case c:
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
      var s = t(7850),
        r = t(61859),
        i = t(35050);
      function n() {
        return (0, s.jsx)("div", {
          className: i.bordered_live_stream_icon,
          children: (0, r.we)("#home_page_live_broadcast"),
        });
      }
    },
    72860: (e, a, t) => {
      "use strict";
      t.d(a, { S: () => u });
      var s = t(55672),
        r = t(71420),
        i = t(55963),
        n = t(70300),
        l = t(81393),
        c = t(56011),
        o = t(61336);
      function u(e, a, t, u, d, p) {
        if (!t) return;
        if (!(0, n.nz)(e.item_type))
          return void (0, l.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const m = (0, i.wJ)(`${(0, r._)(e, u)}${d ? `?${d}` : ""}`, a);
        return {
          onClick: (e) => {
            let a = (0, c.uX)(e) || window;
            p
              ? p(e)
              : m.startsWith("steam://") || (a.location.href = (0, o.NT)(m));
          },
          onOKActionDescription: s.Z.Localize("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, a, t) => {
      "use strict";
      t.d(a, { nz: () => n, oj: () => l });
      var s = t(7850),
        r = t(48210),
        i = t(84518);
      function n(e) {
        return e == r.c6.xO
          ? "bundle"
          : e == r.c6.RD
            ? "sub"
            : (r.c6.qI, "app");
      }
      const l = (e) => {
        const { appid: a } = e,
          t = (0, s.jsx)("div", {
            className: "ImpressionTrackedElement",
            children: e.children,
          });
        return a ? (0, s.jsx)(i.A, { appID: a, children: t }) : t;
      };
    },
    1078: (e, a, t) => {
      "use strict";
      t.d(a, { XC: () => p, _G: () => h });
      var s = t(7850),
        r = t(90626),
        i = t(12155),
        n = t(52038),
        l = t(44691),
        c = t(51706),
        o = t(39449),
        u = t.n(o),
        d = t(61859);
      function p() {
        const [e, a] = r.useState(void 0),
          t = r.useCallback(() => a(void 0), []),
          i = (0, s.jsx)(c.EN, {
            active: void 0 !== e,
            children: (0, s.jsx)(m, { closeModal: t, rgImageURL: e }),
          });
        return [a, i];
      }
      function m(e) {
        const { closeModal: a, rgImageURL: t } = e,
          [i, n] = r.useState(0),
          l = t?.length ?? 0,
          o = r.useCallback(() => {
            n(0 == i ? l - 1 : i - 1);
          }, [i, l]),
          p = r.useCallback(() => {
            n(t && i + 1 >= l ? 0 : i + 1);
          }, [i, t, l]);
        return (0, s.jsxs)(c.eV, {
          title: (0, d.we)("#SaleTech_Screenshot_Viewer"),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: a,
          bHideCloseIcon: !0,
          modalClassName: u().PopupScreenshotModal,
          children: [
            (0, s.jsx)(h, {
              index: i,
              numElements: t?.length || 0,
              fnForward: p,
              fnBackwards: o,
              fnClose: a,
              bCircular: !0,
            }),
            (0, s.jsx)("div", {
              className: u().PopupScreenshotContainer,
              children: (0, s.jsx)("img", {
                className: u().PopupScreenshot,
                src: t?.[i],
              }),
            }),
          ],
        });
      }
      function h(e) {
        const {
          index: a,
          numElements: t,
          fnForward: r,
          fnBackwards: c,
          fnClose: o,
          bCircular: d,
        } = e;
        (0, l.E)("ArrowLeft", () => c?.(), !0, !0),
          (0, l.E)("Left", () => c?.(), !0, !0),
          (0, l.E)("ArrowRight", () => r?.(), !0, !0),
          (0, l.E)("Right", () => r?.(), !0, !0),
          (0, l.E)("Escape", () => o && o(), !0, !0),
          (0, l.E)("Esc", () => o && o(), !0, !0);
        let p = t > 1;
        return (0, s.jsxs)("div", {
          className: u().ButtonCtn,
          children: [
            p &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: (0, n.A)(
                      u().ButtonIcon,
                      0 !== a || d ? null : u().Disabled,
                    ),
                    onClick: c,
                    children: (0, s.jsx)(i.V5W, { angle: 270 }),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, n.A)(
                      u().ButtonIcon,
                      a !== t - 1 || d ? null : u().Disabled,
                    ),
                    onClick: r,
                    children: (0, s.jsx)(i.V5W, { angle: 90 }),
                  }),
                ],
              }),
            (0, s.jsx)("div", {
              className: u().ButtonIcon,
              onClick: o,
              children: (0, s.jsx)(i.X, {}),
            }),
          ],
        });
      }
    },
    54492: (e, a, t) => {
      "use strict";
      t.d(a, { J: () => p });
      var s = t(7850),
        r = t(72737),
        i = t(34104),
        n = t(39777),
        l = t(93341),
        c = t(52038),
        o = t(78327),
        u = t(58855),
        d = t(53305);
      function p(e) {
        const { bAllowOutsideOfDeck: a } = e;
        return (0, o.Qn)() || a ? (0, s.jsx)(m, { ...e }) : null;
      }
      function m(e) {
        const { className: a, id: t } = e,
          o = (0, n.qI)(t),
          [p, m] = (0, l.FD)();
        let h = "unknown";
        if (m == d.c9)
          switch (o.data?.steam_os_compat_category) {
            case r.Hi:
              h = "steamoscompatible";
              break;
            case r.u_:
              h = "steamosunsupported";
              break;
            case r.xs:
              h = "steamosunknown";
          }
        else
          switch (o.data?.steam_deck_compat_category) {
            case i.I2:
              h = "verified";
              break;
            case i.sd:
              h = "playable";
              break;
            case i.V8:
              h = "unsupported";
          }
        return (0, s.jsx)("div", {
          className: (0, c.A)(u.CompatIcon, "ds_steam_deck_compat", h, a),
        });
      }
    },
    26296: (e, a, t) => {
      "use strict";
      t.d(a, { i: () => o, o: () => c });
      var s = t(7850),
        r = t(90626),
        i = t(61859),
        n = t(67523),
        l = t(41951);
      function c(e) {
        const {
            className: a,
            srcs: t,
            lazyLoad: i,
            width: n,
            height: l,
            alt: c,
            crossOrigin: o,
          } = e,
          [u, d] = r.useState(t.length),
          [p, m] = r.useState(0);
        r.useEffect(() => {
          u != t.length && (d(t.length), m(0));
        }, [u, t.length]);
        const h = r.useCallback(() => {
          e.onImageError && e.onImageError(e.srcs[p]),
            p + 1 < e.srcs.length && m(p + 1);
        }, [p, e]);
        return 0 == t.length
          ? null
          : (0, s.jsx)("img", {
              className: a,
              src: t[p],
              crossOrigin: o,
              onError: h,
              loading: i ? "lazy" : void 0,
              width: n,
              height: l,
              alt: c,
            });
      }
      function o(e) {
        const [a, t] = r.useState(!1),
          {
            className: c,
            src: o,
            lazyLoad: u,
            width: d,
            height: p,
            alt: m,
            crossOrigin: h,
          } = e;
        return a
          ? (0, s.jsxs)("div", {
              className: n.ErrorDiv,
              children: [
                (0, s.jsx)("p", {
                  children: (0, i.we)("#Image_ErrorTitle", o),
                }),
                (0, s.jsx)("ul", {
                  children: (0, s.jsx)("li", {
                    children: (0, i.we)("#Image_Error_msg1"),
                  }),
                }),
                (0, s.jsx)("p", {
                  children: (0, i.we)("#Image_Error_suggestion"),
                }),
              ],
            })
          : (0, s.jsx)(l.o, {
              className: c,
              src: o,
              onError: () => t(!0),
              crossOrigin: h,
              loading: u ? "lazy" : void 0,
              width: d,
              height: p,
              alt: m,
            });
      }
    },
    41951: (e, a, t) => {
      "use strict";
      t.d(a, { o: () => m });
      var s = t(7850),
        r = t(90626),
        i = t(12155),
        n = t(52038),
        l = t(1078),
        c = t(10224),
        o = t(21038);
      const u = 1.3,
        d = 3,
        p = 256;
      function m(e) {
        const [a, t] = (0, r.useState)(!1),
          [m, h] = (0, r.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          g = (0, r.useRef)(null),
          [_, f] = (0, l.XC)();
        return (
          (0, r.useEffect)(() => {
            if (
              m.naturalWidth > m.displayWidth * u &&
              m.naturalHeight > m.displayHeight * u &&
              m.naturalWidth > p
            ) {
              m.naturalWidth / m.naturalHeight < d && t(!0);
            }
          }, [m]),
          a
            ? (0, s.jsxs)("span", {
                className: o.PreviewCtn,
                children: [
                  f,
                  (0, s.jsx)("span", {
                    className: o.SVG,
                    children: (0, s.jsx)(i.YNO, {}),
                  }),
                  (0, s.jsx)("img", {
                    ...e,
                    className: (0, n.A)({
                      ...(e.className && { [e.className]: !0 }),
                    }),
                    onClick: (a) => {
                      e.src && _([e.src]);
                    },
                  }),
                ],
              })
            : (0, s.jsx)("img", {
                ...e,
                ref: g,
                onLoad: (e) => {
                  if (!e.currentTarget.closest("a") && !(0, c.c5)()) {
                    const {
                      naturalWidth: a,
                      naturalHeight: t,
                      width: s,
                      height: r,
                    } = e.currentTarget;
                    h({
                      naturalWidth: a,
                      naturalHeight: t,
                      displayWidth: s,
                      displayHeight: r,
                    });
                  }
                },
              })
        );
      }
    },
  },
]);
