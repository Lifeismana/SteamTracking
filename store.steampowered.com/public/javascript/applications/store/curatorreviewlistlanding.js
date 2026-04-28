/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [716],
  {
    2108: (e) => {
      e.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
    },
    33380: (e) => {
      e.exports = {
        VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
        YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
        TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
      };
    },
    70758: (e) => {
      e.exports = {
        YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
        YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
      };
    },
    62014: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CuratorListCtn: "_2gWFdH7drZgtMXI_JjbaEe",
        CuratorMoreCtn: "_16t3PcvDZGiwAgEfjIWfND",
        TopReviewInfo: "_3SZBzK03VjBtPI7wx3Z1Pt",
        SaleBanner: "_1wbf-cPcI2i7efNOekBbhu",
        Title: "_1MhFdjaeyR9X7HgdfjSXqG",
        Blurb: "rrcHStOnbRfOfaohgKQ55",
        VideoReviewCtn: "RojwrkrnYMOZ6Ab8k-v1r",
        YouTubePreviewImage: "eObSf_yyzMWHlRgVTfVWa",
        CuratorList: "_1VI6Grz2uioikkf0a6Tw0k",
        CuratorListGrid: "qJM6j2qrVRIXCMuuxmhQA",
        CuratorReview: "_31hoQDSYDcWbwweAx-nymb",
        CapsuleCtn: "MY9Lke1NKqCw4L796pl4u",
        YouTubeCapsule: "_1siEspisMPcFe74Nhb8Y1h",
        YouTubeCtn: "_1uz1Wrv0OB4A4PzZFy-7ze",
        YouTubeCapsuleBottomBar: "_1d9MpJzvsoRCYuymkRgyB7",
        GameImageCtn: "_220F7CEs1Z6JO8qX1VpEin",
        GameImage: "_7gTF4ahFWgDDx5lj6B81t",
        FullWidth: "_3ditFur3nylrloT3tIcfyH",
        ReviewTextSection: "_1597WAIOnVRCDEZFRnmiOg",
        GameTitle: "nl2T_2iAiLU-LBJ0Vlt1g",
        RecommendationTypeAndDate: "_2lz6uYceCiIZbZ9gceZI-p",
        Recommended: "_3v9QioBsRmE5yW7CqZmejk",
        NotRecommended: "_3iOGokAKIIBxl8O2K4ReUO",
        Informational: "_261FhJXj3ppl0_SvJBDLeL",
        ReviewDate: "HCiYl0KEiRyfIc-3K7r51",
        ReviewBlurb: "_1y_bxMLn9yOlKneJzFSPkc",
        FullReviewLink: "_3_8G-9J9Ck495Bbx1AtzXb",
        FullReviewAnchor: "_3pWCNXNZaWp_KqFU6n38sy",
        FullReviewDomain: "_2R37NZqjmxkImiPnoElHtm",
        BackgroundAnimation: "_3mJ9erLLVEMyDp_3pY3KTp",
        "ItemFocusAnim-darkerGrey-nocolor": "_1ulNFI0sHkRk8TBa3fDFoS",
        "ItemFocusAnim-darkerGrey": "OAwSuqlAeZPXQNLFz_zLx",
        "ItemFocusAnim-darkGreySettings": "_1vwA5-HGmaz4WDUPfeIMXw",
        "ItemFocusAnim-darkGrey": "_16cDR36DBbspxGZ8MxxB4Z",
        "ItemFocusAnim-grey": "oS4oWYqe5S8U6CukOBsBi",
        "ItemFocusAnim-translucent-white-10": "_1jj4yrDY55YFShmQZ8VANk",
        "ItemFocusAnim-translucent-white-20": "TqUMJDChgbfs4XXKTa2UZ",
        "ItemFocusAnimBorder-darkGrey": "_35LQt0hozt0Fu6IHh1i9gW",
        "ItemFocusAnim-green": "_2cU5wBvJhWpmq45gjPgBx_",
        focusAnimation: "XfHabgjmzuwMo5SRyzbkv",
        hoverAnimation: "_2qskIW3iRVBxrrqQ3Sel07",
      };
    },
    22584: (e) => {
      e.exports = { BreadContainer: "GkVFIKIAijTGzfSc4BEQl" };
    },
    17083: (e, t, a) => {
      "use strict";
      a.d(t, { N_: () => f, k2: () => y });
      var n = a(92757),
        r = a(42891),
        s = a(90626),
        o = a(29248),
        i = a(58584),
        l = a(81115),
        c = a(68841);
      s.Component;
      s.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, o.yJ)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        p = s.forwardRef;
      void 0 === p && (p = m);
      var _ = p(function (e, t) {
        var a = e.innerRef,
          n = e.navigate,
          r = e.onClick,
          o = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = o.target,
          u = (0, i.A)({}, o, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), n());
            },
          });
        return (u.ref = (m !== p && t) || a), s.createElement("a", u);
      });
      var f = p(function (e, t) {
          var a = e.component,
            r = void 0 === a ? _ : a,
            f = e.replace,
            h = e.to,
            g = e.innerRef,
            y = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return s.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var a = e.history,
              n = d(u(h, e.location), e.location),
              l = n ? a.createHref(n) : "",
              _ = (0, i.A)({}, y, {
                href: l,
                navigate: function () {
                  var t = u(h, e.location),
                    n = (0, o.AO)(e.location) === (0, o.AO)(d(t));
                  (f || n ? a.replace : a.push)(t);
                },
              });
            return (
              m !== p ? (_.ref = t || g) : (_.innerRef = g),
              s.createElement(r, _)
            );
          });
        }),
        h = function (e) {
          return e;
        },
        g = s.forwardRef;
      void 0 === g && (g = h);
      var y = g(function (e, t) {
        var a = e["aria-current"],
          r = void 0 === a ? "page" : a,
          o = e.activeClassName,
          m = void 0 === o ? "active" : o,
          p = e.activeStyle,
          _ = e.className,
          y = e.exact,
          I = e.isActive,
          b = e.location,
          v = e.sensitive,
          A = e.strict,
          S = e.style,
          w = e.to,
          j = e.innerRef,
          G = (0, l.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return s.createElement(n.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var a = b || e.location,
            o = d(u(w, a), a),
            l = o.pathname,
            C = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            x = C
              ? (0, n.B6)(a.pathname, {
                  path: C,
                  exact: y,
                  sensitive: v,
                  strict: A,
                })
              : null,
            R = !!(I ? I(x, a) : x),
            D = "function" == typeof _ ? _(R) : _,
            B = "function" == typeof S ? S(R) : S;
          R &&
            ((D = (function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(D, m)),
            (B = (0, i.A)({}, B, p)));
          var k = (0, i.A)(
            { "aria-current": (R && r) || null, className: D, style: B, to: o },
            G,
          );
          return (
            h !== g ? (k.ref = t || j) : (k.innerRef = j), s.createElement(f, k)
          );
        });
      });
    },
    81886: (e, t, a) => {
      "use strict";
      function n(e) {
        return (
          !!e &&
          ("game" === e ||
            "dlc" === e ||
            "software" === e ||
            "music" === e ||
            "application" === e ||
            "demo" === e ||
            "hardware" === e ||
            "mod" === e ||
            "video" == e ||
            "beta" === e ||
            "advertising" === e)
        );
      }
      function r(e) {
        return (
          null != e &&
          (0 == e ||
            4 == e ||
            6 == e ||
            11 == e ||
            1 == e ||
            10 == e ||
            2 == e ||
            7 == e ||
            12 == e ||
            14 == e)
        );
      }
      a.d(t, { fp: () => n, vm: () => r });
    },
    85693: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(7850),
        r = a(45699),
        s = a(76217),
        o = a(17083),
        i = a(52038),
        l = a(2108);
      function c(e) {
        const { crumbs: t, className: a, bHideLastArrow: c } = e;
        return t && 0 != t.length
          ? (0, n.jsxs)("div", {
              className: (0, i.A)(l.BreadContainer, a),
              children: [
                (0, n.jsx)(s.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e, a) => {
                    const s = new Array();
                    return (
                      e.url.startsWith("http")
                        ? s.push(
                            (0, n.jsx)(
                              r.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : s.push(
                            (0, n.jsx)(
                              o.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      (!c || a < t.length - 1) &&
                        s.push(
                          (0, n.jsx)(
                            "span",
                            { children: " > " },
                            e.name + "span",
                          ),
                        ),
                      s
                    );
                  }),
                }),
                (0, n.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    57876: (e, t, a) => {
      "use strict";
      a.d(t, { Xh: () => l, cU: () => c, tf: () => d, wl: () => u });
      var n = a(22837),
        r = a(30894),
        s = a(16021),
        o = a(62792),
        i = a(78327);
      const l = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      class c {
        m_setAlreadyAdded = new Set();
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(e) {
          return this.m_setAlreadyAdded.has("a" + e);
        }
        BHasPackageID(e) {
          return this.m_setAlreadyAdded.has("s" + e);
        }
        BHasBundleID(e) {
          return this.m_setAlreadyAdded.has("b" + e);
        }
        BHasStoreItemKey(e) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(e),
          );
        }
        AddStoreItemKey(e) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
        }
        ConvertStoreItemKeyToUniqueKey(e) {
          switch (e.item_type) {
            default:
            case "app":
              return "a" + e.id;
            case "sub":
              return "s" + e.id;
            case "bundle":
              return "b" + e.id;
          }
        }
      }
      const u = 4;
      function d(e, t, a, n, r, i) {
        const l = new Array(),
          c = new Array(),
          d = new Array(),
          p = new Array();
        if (!e || 0 == e.length) return l;
        const _ = [
          o.by.k_RejectSupportedLanguage,
          o.by.k_RejectAlreadyDisplayed,
          o.by.k_RejectNoTrailer,
        ];
        for (let i of e) {
          let e = i.id,
            u = o.by.k_NotRejected;
          switch (i.item_type) {
            case "sub":
              const r = s.A.Get().GetPackage(e);
              if (1 !== r?.GetIncludedAppIDs()?.length) {
                u = g(e, t, n, !0);
                break;
              }
              e = r.GetIncludedAppIDs()[0];
            case "app":
              u = f(e, t, a, n, !0);
              break;
            case "bundle":
              u = y(e, t, n, !0);
          }
          if (
            (u == o.by.k_NotRejected
              ? ((i.rejected = o.by.k_NotRejected),
                l.push({ ...i, priority: 1 }))
              : _.includes(u)
                ? ((i.rejected = o.by.k_NotRejected), c.push(i))
                : ((i.rejected = u),
                  u == o.by.k_RejectIgnoredGame ? d.push(i) : p.push(i)),
            l.length > r)
          )
            break;
        }
        return (
          l.length < r &&
            (m(l, c, i, 2),
            l.length < i &&
              t.enforce_minimum &&
              (m(l, d, i, 3), m(l, p, i, u))),
          l
        );
      }
      function m(e, t, a, n) {
        for (let r = 0; e.length < a && r < t.length; ++r)
          e.push({ ...t[r], priority: n });
      }
      function p(e, t) {
        const a = r.Fm.Get();
        if (t.only_current_platform && a.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && a.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && a.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                a.BIsPreferredPlatform("linux"))
            )
          )
            return o.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return o.by.k_RejectNoComingSoon;
        const n = e.GetPlatforms();
        return !t.virtual_reality &&
          n &&
          n.vr_support &&
          n.vr_support.vrhmd_only
          ? o.by.k_RejectNoVR
          : e.GetAllCreatorClanIDs()?.some((e) => a.BIsIgnoringCurator(e))
            ? o.by.k_RejectCreatorClan
            : o.by.k_NotRejected;
      }
      function _(e, t) {
        if (t.localized) {
          const t = (0, n.sf)(i.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return o.by.k_RejectSupportedLanguage;
        }
        return o.by.k_NotRejected;
      }
      function f(e, t, a, n, i) {
        const l = s.A.Get().GetApp(e);
        if (!l) return o.by.k_RejectNotLoaded;
        const c = p(l, t);
        if (c != o.by.k_NotRejected) return c;
        const u = r.Fm.Get();
        if (u.BIsGameIgnored(e)) return o.by.k_RejectIgnoredGame;
        if (u.BExcludeTagIDs(l.GetTagIDs())) return o.by.k_RejectIgnoreGameTags;
        if (u.BExcludesContentDescriptor(l.GetContentDescriptorIDs()))
          return o.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && l.BIsEarlyAccess())
          return o.by.k_RejectEarlyAccess;
        const d = l.GetAppType();
        if (!t.software && 6 == d) return o.by.k_RejectSoftware;
        if (t.games_already_in_library && u.BIsGameOwned(e))
          return o.by.k_RejectInLibrary;
        if (t.games_not_in_library && !u.BIsGameOwned(e))
          return o.by.k_RejectNotInLibrary;
        if (!t.video && [7, 8, 9].includes(d)) return o.by.k_RejectVideo;
        if (t.has_discount) {
          const e = l.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return o.by.k_RejectNoDiscount;
        }
        return "adultonly" != a &&
          t.no_ao_content &&
          (l.HasContentDescriptorID(3) || l.HasContentDescriptorID(4))
          ? o.by.k_RejectAO
          : 1 == d &&
              t.games_already_in_library &&
              u.BIsGameOwned(l.GetParentAppID() || 0)
            ? o.by.k_RejectInLibrary
            : i
              ? (1 == d && n.BHasAppID(l.GetParentAppID() || 0)) ||
                n.BHasAppID(e)
                ? o.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !l.BHasTrailers(!1)
                  ? o.by.k_RejectNoTrailer
                  : _(l, t)
              : o.by.k_NotRejected;
      }
      function h(e, t) {
        const a = r.Fm.Get();
        let n = !1;
        for (let t of e) {
          if (a.BIsGameIgnored(t)) return o.by.k_RejectIgnoredGame;
          a.BIsGameOwned(t) && (n = !0);
        }
        return t.games_not_in_library && n
          ? o.by.k_RejectInLibrary
          : t.games_not_in_library && !n
            ? o.by.k_RejectNotInLibrary
            : o.by.k_NotRejected;
      }
      function g(e, t, a, n) {
        const i = s.A.Get().GetPackage(e);
        if (!i) return o.by.k_RejectNotLoaded;
        const l = p(i, t);
        if (l != o.by.k_NotRejected) return l;
        const c = h(i.GetIncludedAppIDs(), t);
        if (c != o.by.k_NotRejected) return c;
        const u = r.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? o.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? o.by.k_RejectIgnoredGame
            : n
              ? a.BHasPackageID(e)
                ? o.by.k_RejectAlreadyDisplayed
                : _(i, t)
              : o.by.k_NotRejected;
      }
      function y(e, t, a, n) {
        const r = s.A.Get().GetBundle(e);
        if (!r) return o.by.k_RejectNotLoaded;
        const i = p(r, t);
        if (i != o.by.k_NotRejected) return i;
        const l = h(r.GetIncludedAppIDs(), t);
        return l != o.by.k_NotRejected
          ? l
          : n
            ? a.BHasBundleID(e)
              ? o.by.k_RejectAlreadyDisplayed
              : _(r, t)
            : o.by.k_NotRejected;
      }
    },
    70995: (e, t, a) => {
      "use strict";
      a.d(t, { Lg: () => c, XU: () => d });
      const n = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        s = /^.*youtu\.be\/(.{11}).*/,
        o = /^.*youtube.*\/embed\/(.{11}).*/,
        i = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < n ? void 0 : r.exec(e) || s.exec(e) || o.exec(e);
        return t?.[1];
      }
      function d(e) {
        const t = u(e);
        if (!t) return;
        const a = (function (e) {
            const t = i.exec(e);
            return t?.[1];
          })(e),
          n = a
            ? (function (e) {
                const t = l.exec(e);
                if (!(t?.[1] || t?.[2] || t?.[3] || t?.[4])) return;
                if (t?.[4]) return parseInt(t?.[4]);
                let a = 0;
                return (
                  t?.[1] && (a += 3600 * parseInt(t[1])),
                  t?.[2] && (a += 60 * parseInt(t[2])),
                  t?.[3] && (a += parseInt(t[3])),
                  a
                );
              })(a)
            : void 0;
        return { strVideoID: t, nStartSeconds: n };
      }
    },
    62734: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => s });
      var n = a(81393);
      var r = a(78327);
      class s {
        m_HomeView = void 0;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
        static Get() {
          var e;
          return (
            s.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, n.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (s.s_globalSingletonStore = new s()),
              "dev" == r.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = s.s_globalSingletonStore)),
            s.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === r.TS.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = (0, r.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, r.Tc)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView
            ? (this.m_HomeView.home = {
                ...this.m_HomeView.home,
                ...e?.all,
                ...e?.maincap,
              })
            : (this.m_HomeView = { home: { ...e?.all, ...e?.maincap } });
        }
      }
    },
    6626: (e, t, a) => {
      "use strict";
      a.d(t, {
        F6: () => I,
        ME: () => A,
        RA: () => v,
        cc: () => w,
        fq: () => j,
        m1: () => S,
      });
      var n = a(34629),
        r = a(41735),
        s = a.n(r),
        o = a(14947),
        i = a(90626),
        l = a(17720),
        c = a(4796),
        u = a(30894),
        d = a(6379),
        m = a(99032),
        p = a(62490),
        _ = a(81393),
        f = a(68797),
        h = a(84933),
        g = a(78327);
      function y(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, _.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const I = "0";
      function b(e, t) {
        (t.localized_flat_title = (0, p.$Y)([], 31, null)),
          (t.localized_flat_blurb = (0, p.$Y)([], 31, null)),
          (t.localized_flat_link = (0, p.$Y)([], 31, null)),
          t.title !== I && (t.localized_flat_title[e] = t.title),
          t.blurb !== I && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== I && (t.localized_flat_link[e] = t.link),
          t.title_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_title[e.language] = e.localized_string);
          }),
          t.blurb_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_blurb[e.language] = e.localized_string);
          }),
          t.link_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_link[e.language] = e.localized_string);
          });
      }
      class v {
        m_mapList = new Map();
        m_mapEventGIDToLists = new Map();
        m_mapListIDToClanAccount = new Map();
        GetListDetails(e) {
          return this.m_mapList.get(e);
        }
        GetAllSaleCurationLists(e) {
          return this.m_mapEventGIDToLists.get(e) || [];
        }
        GetClanAccountFromListID(e) {
          return this.m_mapListIDToClanAccount.get(e);
        }
        async LoadListDetails(e, t, a) {
          if (this.m_mapList.has(t)) return this.m_mapList.get(t);
          const n =
              g.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const o = await s().get(n, { params: r, cancelToken: a?.token });
            if (1 == o?.data?.success) {
              const a = { ...o.data.list_details };
              return (
                (0, _.wT)(t == a?.listid, "Wanted" + t + "but got" + a?.listid),
                y(a),
                b(o.data.curation_language, a),
                this.m_mapList.set(t, a),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                a
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(e, t, a) {
          if (
            !g.iA.logged_in ||
            (u.Fm.Get().BIsLoaded() &&
              0 == u.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const n = g.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: u.Fm.Get().BIsLoaded()
                ? u.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            n,
            r,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            e,
            t,
            a,
          );
        }
        async LoadAllSaleCurationLists(e, t, a) {
          if (this.m_mapEventGIDToLists.has(t))
            return this.m_mapEventGIDToLists.get(t);
          const n = g.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            n,
            r,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            a,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, a, n, r, i) {
          try {
            const a = await s().get(e, { params: t, cancelToken: i?.token });
            if (1 == a?.data?.success) {
              const e = new Array();
              return (
                (0, o.h5)(() => {
                  a.data.matches &&
                    a.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((a) => {
                        this.m_mapListIDToClanAccount.set(
                          a.listid,
                          t.clan_account_id,
                        ),
                          y(a),
                          b(t.curation_language, a),
                          this.m_mapList.set(a.listid, a),
                          e.push(a);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(r, e);
                }),
                e
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(a + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return v.s_Singleton || (v.s_Singleton = new v()), v.s_Singleton;
        }
        constructor() {
          (0, o.Gn)(this),
            "dev" == g.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, g.Tc)("curatorlistdata", "application_config");
          ("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, o.h5)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    y(t),
                      b(e.curation_language, t),
                      this.m_mapList.set(t.listid, t);
                  });
                });
              });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
            ? "number" == typeof t[0].curation_language &&
                t[0].multi_detail_lists &&
                Array.isArray(t[0].multi_detail_lists) &&
                "string" == typeof t[0].multi_detail_lists[0].listid &&
                "number" == typeof t[0].multi_detail_lists[0].list_type &&
                "number" == typeof t[0].multi_detail_lists[0].list_state
            : t && Array.isArray(t) && 0 == t.length;
        }
      }
      function A(e, t) {
        const a = (0, h.CH)();
        return (
          (0, i.useEffect)(() => {
            if (v.Get().GetListDetails(t) || !e) return;
            const n = s().CancelToken.source();
            return (
              (async () => {
                const r = await v.Get().LoadListDetails(e, t);
                if (!n.token.reason)
                  if (r?.apps?.length) {
                    const e = [];
                    for (const t of r.apps) {
                      const a = t?.recommended_app?.appid;
                      a && e.push({ id: a, type: "game" });
                    }
                    (0, m.H2)(e, {
                      ...m.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      a();
                  } else console.error("Found no list data");
              })(),
              () => n.cancel("unmounting CuratorList")
            );
          }, [e, t, a]),
          v.Get().GetListDetails(t)
        );
      }
      function S(e) {
        const t = e && c.ac.GetClanInfoByClanAccountID(e),
          [a, n] = (0, i.useState)(!!t);
        return (
          (0, i.useEffect)(() => {
            if (a && e) {
              const t = l.b.InitFromClanID(e);
              c.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                n(!0);
              });
            }
          }, [a, e]),
          t
        );
      }
      function w(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function j(e) {
        const t = (0, h.CH)(),
          a = w(e) ? e.sale_clan_event_gid : null,
          n = a && d.O3.GetClanEventModel(a);
        return (
          (0, i.useEffect)(() => {
            if (n || !w(e)) return;
            const r = s().CancelToken.source();
            return (
              (async () => {
                d.O3.Init(),
                  await d.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new l.b(e.sale_clan_steamid),
                    a,
                    0,
                  ),
                  r.token.reason || t();
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, a, n, t]),
          n
        );
      }
      (0, n.Cg)([o.sH], v.prototype, "m_mapList", void 0);
    },
    99032: (e, t, a) => {
      "use strict";
      a.d(t, {
        AX: () => y,
        H2: () => f,
        Li: () => g,
        S7: () => m,
        a9: () => I,
        jy: () => h,
        nt: () => _,
        sd: () => d,
        tJ: () => p,
      });
      var n = a(57876),
        r = a(62792),
        s = a(81886),
        o = a(30894),
        i = a(16021),
        l = a(78327),
        c = a(62734),
        u = a(81393);
      function d(e) {
        return i.A.Get().BIsStoreItemMissing(e.id, (0, r.SW)(e.type));
      }
      function m(e, t, a) {
        const n = new Array();
        return (
          e?.forEach((e) => n.push({ id: e, type: "game" })),
          t?.forEach((e) => n.push({ id: e, type: "sub" })),
          a?.forEach((e) => n.push({ id: e, type: "bundle" })),
          n
        );
      }
      function p(e) {
        const t = i.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function _(e) {
        if (!c.f.Get().GetHomeView()?.localized) return !0;
        const t = i.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return o.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function f(e, t, a) {
        if (!e || 0 == e.length) return [];
        const n = e.filter((e) => (0, s.fp)(e.type)).map((e) => e.id),
          r = e.filter((e) => "sub" === e.type).map((e) => e.id),
          o = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = n.filter((e) => !i.A.Get().BHasApp(e, t)),
            a = r.filter((e) => !i.A.Get().BHasApp(e, t)),
            s = o.filter((e) => !i.A.Get().BHasApp(e, t));
          (e.length > 0 || a.length > 0 || s.length > 0) &&
            (await Promise.all([
              i.A.Get().QueueMultipleAppRequests(e, t),
              i.A.Get().QueueMultiplePackageRequests(a, t),
              i.A.Get().QueueMultipleBundleRequests(s, t),
            ]));
        }
        const l = new Set();
        o?.forEach((e) => {
          const t = i.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => l.add(e));
        }),
          r?.forEach((e) => {
            const t = i.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => l.add(e));
          });
        const c = Array.from(l).filter((e) => !i.A.Get().BHasApp(e, t));
        if (
          (c.length > 0 && (await i.A.Get().QueueMultipleAppRequests(c, t)),
          n.forEach((e) => l.add(e)),
          a)
        ) {
          const e = Array.from(l)
            .map((e) => {
              const t = i.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (l.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !i.A.Get().BHasApp(e, t));
          e.length > 0 && (await i.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(l).filter((e) => {
          const t = i.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const h = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function g(e) {
        const t = o.Fm.Get();
        (0, u.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const a = e?.GetAllLanguagesWithSomeSupport() || [],
          n = c.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (0 == e.GetStoreItemType() &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (n &&
            !(
              0 == a.length ||
              e.BHasSomeLanguageSupport(0) ||
              t.BIsAnyLanguageEnabled(a)
            ))
        );
      }
      async function y(e, t, a, s) {
        let c = 0,
          u = 0;
        const d = [];
        await f(e, n.Xh, t);
        for (const n of e) {
          const e = i.A.Get().GetStoreItem(n.id, (0, r.SW)(n.type));
          if (!e) {
            c++;
            continue;
          }
          const l = e
            .GetIncludedAppIDs()
            .map((e) => i.A.Get().GetApp(e))
            .filter(Boolean);
          if ((l.push(e), t)) {
            const e = new Set(l.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => i.A.Get().GetApp(e))
                .filter(Boolean);
            t && l.push(...t);
          }
          l.some(s || g)
            ? (u++, a && (o.Fm.Get().BIsStoreItemOwned(e) || a.push(n)))
            : d.push(n);
        }
        return (
          "dev" === l.TS.WEB_UNIVERSE &&
            0 === d.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                c +
                " failed to load, " +
                u +
                " hidden by user filter.",
            ),
          d
        );
      }
      async function I(e, t, a, n, s, l, c) {
        let u = await y(
          e,
          t,
          c,
          s
            ? (e) =>
                !e ||
                o.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                o.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : g,
        );
        const d = [];
        for (const e of u) {
          const t = i.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
          if (!t) continue;
          const s = t?.GetIncludedAppIDsOrSelf();
          let u = !1;
          a && (u = u || s.every((e) => o.Fm.Get().BIsGameOwned(e))),
            n && (u = u || s.every((e) => o.Fm.Get().BIsGameWishlisted(e))),
            l && (u = u || s.every((e) => o.Fm.Get().BIsGameIgnored(e))),
            u ? c && c.push(e) : d.push(e);
        }
        return d;
      }
    },
    94743: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => _, r: () => p });
      var n = a(7850),
        r = a(90626),
        s = a(26296),
        o = a(12155),
        i = a(48211),
        l = a(52038),
        c = a(61859),
        u = a(70758),
        d = a.n(u),
        m = a(61949);
      const p = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [a, o] = r.useState(0);
          r.useEffect(() => o(0), [e.video]);
          const i = r.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, n.jsx)(s.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, n.jsx)("img", { src: e.altImg, className: e.className });
          {
            const r =
                "https://img.youtube.com/vi/" + e.video + "/" + t[a] + ".jpg",
              s = () => {
                a + 1 < t.length && o(a + 1);
              },
              c = () => {
                i.current && i.current.naturalHeight < 91 && s();
              };
            return (0, n.jsx)("img", {
              ref: i,
              onLoad: c,
              onError: s,
              src: r,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        _ = (e) => {
          const [t, a] = r.useState(!1);
          (0, i.VC)(!!e.preloadYoutubeScripts);
          const s = (0, m.Rp)("youtube");
          if (t && s)
            return (0, n.jsx)(i.N1, {
              ...e,
              classnames: (0, l.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                a(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return (0, n.jsxs)("div", {
              className: (0, l.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: s ? t : void 0,
              children: [
                (0, n.jsx)(p, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                s &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, n.jsx)(o.IOc, {}),
                      }),
                      (0, n.jsx)("div", {
                        className: "VideoHintText",
                        children: (0, c.we)("#EventCalendar_WatchYouTubeVideo"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
    },
    49271: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { CuratorReviewListContainer: () => ee, default: () => J });
      var n = a(7850),
        r = a(75844),
        s = a(90626),
        o = a(15759),
        i = a(22837),
        l = a(45699),
        c = a(12447),
        u = a(76217),
        d = a(70995),
        m = a(38390),
        p = a(17720),
        _ = a(55963),
        f = a(4434),
        h = a(41735),
        g = a.n(h),
        y = a(78327),
        I = a(68797);
      function b(e, t) {
        const [a, n] = (0, s.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          r = (0, f.m)("useFilteredAppViaContentHub");
        return (
          (0, s.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !a &&
              (async function (e, t) {
                const a =
                    y.TS.STORE_BASE_URL +
                    "contenthub/ajaxfilterappsbycontenthub",
                  n = {
                    hubtype: e.GetContentHubType(),
                    category: e.GetContentHubCategory(),
                    tagid: e.GetContentHubTag(),
                    prune_list_optin_name: e.jsondata.prune_list_optin_name,
                    optin_tagid: e.jsondata.optin_tagid,
                    optin_prune_tagid: e.jsondata.optin_prune_tagid,
                    optin_only: e.jsondata.optin_only,
                    applist: t.sort().join(","),
                  };
                let r = null;
                const s = new Set();
                try {
                  const e = await g().get(a, { params: n });
                  if (1 == e?.data?.success)
                    return e.data.appids.forEach((e) => s.add(e)), s;
                  r = (0, I.H)(e);
                } catch (e) {
                  r = (0, I.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  s
                );
              })(e, t).then((e) => {
                r.token.reason || n(e);
              });
          }, [a, r.token.reason, e, t]),
          a
        );
      }
      var v = a(6626),
        A = a(30894),
        S = a(16021),
        w = a(62792),
        j = a(55263),
        G = a(39020),
        C = a(39777),
        x = a(33380),
        R = a.n(x),
        D = a(12155),
        B = a(52038),
        k = a(70758);
      const L = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function N(e) {
        const t = L.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function T(e) {
        const {
            posterURL: t,
            videoid: a,
            muted: r,
            autoplay: o,
            bIsClipID: i,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, m] = s.useState(Boolean(t)),
          p = null != o && null != o && o;
        if (d)
          return (0, n.jsxs)("div", {
            className: (0, B.A)(
              "YoutubePreviewContainer",
              k.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => m(!1),
            children: [
              (0, n.jsx)("img", {
                className: (0, B.A)(
                  "YoutubePreviewImage",
                  k.YoutubePreviewImage,
                ),
                src:
                  t ||
                  y.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, n.jsx)(D.IOc, {}),
              }),
            ],
          });
        let _ = (0, y.xv)().replace("https://", "");
        const f = _.indexOf("/");
        f >= 0 && (_ = _.substring(0, f));
        let h = i
          ? `https://clips.twitch.tv/embed?clip=${a}`
          : `https://player.twitch.tv/?video=${a}`;
        return (
          (h += `&parent=${_}&autoplay=${p}&muted=${Boolean(r)}`),
          l &&
            (h += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const a = Math.floor(e / 60);
              return `${t}h${a}m${(e -= a * e)}s`;
            })(l)}`),
          (0, n.jsxs)("div", {
            className: (0, B.A)("YoutubePlayer", R().TwitchPlayer),
            children: [
              (0, n.jsx)("img", {
                className: (0, B.A)(
                  "YoutubePreviewContainer",
                  k.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  y.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, n.jsx)("iframe", {
                src: h,
                allowFullScreen: !0,
                frameBorder: 0,
                width: c || 460,
                height: u || 300,
              }),
            ],
          })
        );
      }
      var E = a(706),
        F = a(99032),
        P = a(75152),
        H = a(22687),
        V = a(22797),
        O = a(10224),
        Y = a(94743),
        M = a(61859),
        U = a(61336),
        W = a(62014),
        z = a.n(W),
        q = a(85693),
        Z = a(22584);
      function K(e) {
        const { clanInfo: t } = e,
          { curator_link: a, curator_medium_avatar: r } = (0, y.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, n.jsx)(u.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, n.jsx)("div", {
            className: "page_content",
            children: (0, n.jsxs)(u.Z, {
              className: "list_header_area",
              "flow-children": "row",
              children: [
                (0, n.jsx)("div", {
                  className: "curator_avatar_image",
                  children: (0, n.jsx)(l.Ii, {
                    href: a,
                    children: (0, n.jsx)("img", {
                      className: "curator_avatar",
                      src: r,
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "curator_details",
                  children: [
                    (0, n.jsx)(q.r, {
                      className: Z.BreadContainer,
                      crumbs: (0, y.Tc)("breadcrumbs", "application_config"),
                    }),
                    (0, n.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: a,
                      children: (0, M.we)(
                        "#SteamCurator_List_Header_List",
                        t.group_name,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var X = a(32630),
        Q = a(35380),
        $ = a(42834);
      const J = function (e) {
        return (0, n.jsx)(c.u, {
          navID: "StoreCuratorPageRoot",
          children: (0, n.jsx)(ee, { listid: e.listid }),
        });
      };
      function ee(e) {
        const t = parseInt(
            (0, y.Tc)("curator_account_id", "application_config"),
          ),
          a = (0, v.m1)(t),
          r = (0, v.ME)(a?.clanSteamID, e.listid);
        return (
          (0, G.vb)(y.TS.LANGUAGE),
          r
            ? (0, n.jsxs)(X.Ay, {
                feature: "curatorlistcapsule",
                children: [
                  (0, n.jsx)(K, { clanInfo: a }),
                  (0, n.jsx)("div", {
                    className: "page_content_ctn grayscale",
                    children: (0, n.jsx)("div", {
                      className: "page_content",
                      children: (0, n.jsxs)("div", {
                        className: z().CuratorListCtn,
                        children: [
                          (0, n.jsx)(ne, { listDetails: r }),
                          (0, v.cc)(r)
                            ? (0, n.jsx)(te, { listDetails: r })
                            : (0, n.jsx)(ae, {
                                listDetails: r,
                                rgListItems: r.apps,
                              }),
                          (0, n.jsxs)("div", {
                            className: z().CuratorMoreCtn,
                            children: [
                              (0, n.jsx)("h2", {
                                children: (0, M.we)(
                                  "#SteamCurator_ExploreMoreTitle",
                                ),
                              }),
                              (0, n.jsx)(l.Ii, {
                                href: a.vanity_url,
                                children: (0, M.PP)(
                                  "#SteamCurator_MoreReviews",
                                  a.group_name,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : null
        );
      }
      function te(e) {
        const { listDetails: t } = e,
          [a, r] = (0, s.useState)(null),
          o = new p.b(t.sale_clan_steamid),
          { eventModel: i } = (0, m.B9)(
            o.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, s.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = b(i, l);
        return (
          (0, s.useEffect)(() => {
            if (i)
              if (i.BUsesContentHubForItemSource())
                c && r(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = i.GetSaleFeaturedApps();
                r(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, i, c]),
          (0, n.jsx)(ae, { listDetails: t, rgListItems: a })
        );
      }
      function ae(e) {
        const { listDetails: t, rgListItems: a } = e,
          [r, o] = (0, s.useState)(0),
          [i, c] = (0, s.useState)(null),
          d = (0, f.m)("CuratorAppListDisplay");
        if (
          (s.useEffect(() => {
            a &&
              (o(a?.length || 0),
              A.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = a.map((e) => e.recommended_app.appid);
                  S.A.Get()
                    .QueueMultipleAppRequests(e, F.jy)
                    .then(() => {
                      d.token.reason ||
                        c(
                          a.filter(
                            (e) =>
                              !(0, F.Li)(
                                S.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || c([]);
                    });
                }));
          }, [a, d]),
          null == i)
        )
          return (0, n.jsx)(V.t, {
            string: (0, M.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = 1 == t.list_type;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.Z, {
              className: (0, B.A)(z().CuratorList, m && z().CuratorListGrid),
              "flow-children": "grid",
              children: i.map((e, a) =>
                (0, n.jsx)(
                  re,
                  { item: e, listDetails: t, bAutoFocus: 0 == a },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > i.length) &&
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("span", {
                    children: [
                      (0, M.Yp)("#SteamCurator_Hidden", r - i.length),
                      " ",
                    ],
                  }),
                  (0, n.jsx)(l.Ii, {
                    href: y.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, M.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function ne(e) {
        const { listDetails: t } = e,
          a = (0, v.fq)(t),
          r = (0, y.Tc)("showlisttitle", "application_config"),
          s = (0, y.Tc)("titleareaheight", "application_config"),
          o =
            t.list_jsondata.youtube_link &&
            (0, d.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && N(t.list_jsondata.youtube_link),
          u = (0, i.sf)(y.TS.LANGUAGE),
          m = M.NT.GetWithFallback(t.localized_flat_title, u),
          p = M.NT.GetWithFallback(t.localized_flat_blurb, u),
          _ = M.NT.GetWithFallback(t.localized_flat_link, u),
          f =
            a &&
            a.GetImageURL(
              (0, O.c5)() ? "product_mobile_banner" : "product_banner",
              u,
            );
        return (0, n.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(f) &&
              (0, n.jsx)(l.Ii, {
                href: a.GetSaleURL(),
                children: (0, n.jsx)("img", {
                  className: z().SaleBanner,
                  src: f,
                }),
              }),
            r && m && (0, n.jsx)("div", { className: z().Title, children: m }),
            r && p && (0, n.jsx)("div", { className: z().Blurb, children: p }),
            Boolean(s > 0) && (0, n.jsx)("div", { style: { height: s } }),
            o &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(Y.l, {
                  video: o.strVideoID,
                  startSeconds: o.nStartSeconds,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            Boolean(c) &&
              (0, n.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, n.jsx)(T, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            _ && (0, n.jsx)(ie, { url: _ }),
          ],
        });
      }
      const re = (0, r.PA)((e) => {
        const { item: t, listDetails: a, bAutoFocus: r } = e,
          o = parseInt((0, y.Tc)("curator_account_id", "application_config")),
          i = (0, v.m1)(o),
          [l] = (0, j.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          c = (0, s.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, w._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          m = (0, Q.rt)(c);
        if (!i || !l) return null;
        const {
            appid: p,
            link_url: _,
            blurb: f,
            time_recommended: h,
            recommendation_state: g,
          } = t.recommended_app,
          I = i.is_creator_home && !i.is_ogg,
          b = a.list_jsondata.app_data?.[p],
          A = _ && (0, d.XU)(_),
          S = _ && N(_),
          G = f != v.F6 && f,
          C = l.BHasDemo(),
          x = b?.img_url,
          R = `curator_clanid=${i.clanAccountID}&curator_listid=${a.listid}`,
          D = l.GetStorePageURL() + "/?curator_clanid=" + i.clanAccountID;
        return (0, n.jsxs)(u.Z, {
          className: z().CuratorReview,
          autoFocus: r,
          children: [
            (0, n.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(A || S)
                ? (0, n.jsx)(se, {
                    strVideoID: A?.strVideoID || S,
                    nStartSeconds: A?.nStartSeconds,
                    id: m,
                    strImgOverrideUrl: x,
                    bShowDemoButton: C,
                    strExtraParams: R,
                    bTwitchVideo: Boolean(S),
                  })
                : (0, n.jsx)(H.W, {
                    imageType: "header",
                    capsule: c,
                    bShowDemoButton: C,
                    strExtraParams: R,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, n.jsx)("a", {
                  className: z().GameTitle,
                  href: D,
                  children: l.GetName(),
                }),
                (0, n.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, n.jsx)(oe, { type: g }),
                    (0, n.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        I || !Boolean(h)
                          ? (0, M.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, M.$z)(h),
                    }),
                  ],
                }),
                Boolean(G) &&
                  (0, n.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, M.we)("#SteamCurator_ReviewTextQuoted", G),
                  }),
                Boolean(_) && (0, n.jsx)(ie, { url: _ }),
              ],
            }),
          ],
        });
      });
      function se(e) {
        const {
            strVideoID: t,
            nStartSeconds: a,
            id: r,
            strImgOverrideUrl: s,
            bShowDemoButton: o,
            strExtraParams: i,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, C.lv)(r);
        return (0, n.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, n.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, n.jsx)(T, {
                    videoid: t,
                    posterURL: c ? (0, $.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, n.jsx)(Y.l, {
                    video: t,
                    startSeconds: a,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: z().YouTubePreviewImage,
                    altImg: s,
                  }),
            }),
            (0, n.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, n.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, n.jsx)(E.Q, {
                    id: r,
                    bShowDemoButton: o,
                    nDelayShowMs: 300,
                    strExtraParams: i,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, n.jsx)("img", {
                      className: z().GameImage,
                      src: c ? (0, $.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, n.jsx)(P.q, { id: r, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function oe(e) {
        switch (e.type) {
          case 0:
            return (0, n.jsx)("div", {
              className: z().Recommended,
              children: (0, M.we)("#SteamCurator_Recommended"),
            });
          case 1:
            return (0, n.jsx)("div", {
              className: z().NotRecommended,
              children: (0, M.we)("#SteamCurator_NotRecommended"),
            });
          case 2:
            return (0, n.jsx)("div", {
              className: z().Informational,
              children: (0, M.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function ie(e) {
        let t = (0, _.OZ)(e.url);
        (0, o.p)(t) &&
          (t =
            (y.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            y.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const a = (0, U.wm)(e.url),
          r = (0, d.Lg)(e.url);
        return (0, n.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, n.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, M.we)(
                r
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, n.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, M.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                a,
              ),
            }),
          ],
        });
      }
    },
  },
]);
