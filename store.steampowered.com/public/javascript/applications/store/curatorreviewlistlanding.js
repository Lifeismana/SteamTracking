/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [20716],
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
    17083: (e, t, n) => {
      "use strict";
      n.d(t, { N_: () => f, k2: () => v });
      var a = n(92757),
        i = n(42891),
        s = n(90626),
        r = n(29248),
        o = n(58584),
        l = n(81115),
        c = n(68841);
      s.Component;
      s.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, r.yJ)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        _ = s.forwardRef;
      void 0 === _ && (_ = m);
      var p = _(function (e, t) {
        var n = e.innerRef,
          a = e.navigate,
          i = e.onClick,
          r = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = r.target,
          u = (0, o.A)({}, r, {
            onClick: function (e) {
              try {
                i && i(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), a());
            },
          });
        return (u.ref = (m !== _ && t) || n), s.createElement("a", u);
      });
      var f = _(function (e, t) {
          var n = e.component,
            i = void 0 === n ? p : n,
            f = e.replace,
            h = e.to,
            g = e.innerRef,
            v = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return s.createElement(a.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var n = e.history,
              a = d(u(h, e.location), e.location),
              l = a ? n.createHref(a) : "",
              p = (0, o.A)({}, v, {
                href: l,
                navigate: function () {
                  var t = u(h, e.location),
                    a = (0, r.AO)(e.location) === (0, r.AO)(d(t));
                  (f || a ? n.replace : n.push)(t);
                },
              });
            return (
              m !== _ ? (p.ref = t || g) : (p.innerRef = g),
              s.createElement(i, p)
            );
          });
        }),
        h = function (e) {
          return e;
        },
        g = s.forwardRef;
      void 0 === g && (g = h);
      var v = g(function (e, t) {
        var n = e["aria-current"],
          i = void 0 === n ? "page" : n,
          r = e.activeClassName,
          m = void 0 === r ? "active" : r,
          _ = e.activeStyle,
          p = e.className,
          v = e.exact,
          I = e.isActive,
          S = e.location,
          w = e.sensitive,
          A = e.strict,
          y = e.style,
          b = e.to,
          G = e.innerRef,
          C = (0, l.A)(e, [
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
        return s.createElement(a.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var n = S || e.location,
            r = d(u(b, n), n),
            l = r.pathname,
            j = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            x = j
              ? (0, a.B6)(n.pathname, {
                  path: j,
                  exact: v,
                  sensitive: w,
                  strict: A,
                })
              : null,
            L = !!(I ? I(x, n) : x),
            B = "function" == typeof p ? p(L) : p,
            D = "function" == typeof y ? y(L) : y;
          L &&
            ((B = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(B, m)),
            (D = (0, o.A)({}, D, _)));
          var R = (0, o.A)(
            { "aria-current": (L && i) || null, className: B, style: D, to: r },
            C,
          );
          return (
            h !== g ? (R.ref = t || G) : (R.innerRef = G), s.createElement(f, R)
          );
        });
      });
    },
    85693: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var a = n(7850),
        i = n(45699),
        s = n(76217),
        r = n(17083),
        o = n(52038),
        l = n(2108);
      function c(e) {
        const { crumbs: t, className: n, bHideLastArrow: c } = e;
        return t && 0 != t.length
          ? (0, a.jsxs)("div", {
              className: (0, o.A)(l.BreadContainer, n),
              children: [
                (0, a.jsx)(s.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e, n) => {
                    const s = new Array();
                    return (
                      e.url.startsWith("http")
                        ? s.push(
                            (0, a.jsx)(
                              i.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : s.push(
                            (0, a.jsx)(
                              r.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      (!c || n < t.length - 1) &&
                        s.push(
                          (0, a.jsx)(
                            "span",
                            { children: " > " },
                            e.name + "span",
                          ),
                        ),
                      s
                    );
                  }),
                }),
                (0, a.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    62734: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => s });
      var a = n(81393);
      var i = n(78327);
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
              (0, a.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (s.s_globalSingletonStore = new s()),
              "dev" == i.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = s.s_globalSingletonStore)),
            s.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === i.TS.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = (0, i.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, i.Tc)(
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
    6626: (e, t, n) => {
      "use strict";
      n.d(t, {
        F6: () => A,
        ME: () => G,
        QV: () => S,
        RA: () => b,
        cc: () => j,
        fq: () => x,
        m1: () => C,
      });
      var a = n(34629),
        i = n(41735),
        s = n.n(i),
        r = n(14947),
        o = n(90626),
        l = n(22837),
        c = n(37085),
        u = n(17720),
        d = n(4796),
        m = n(30894),
        _ = n(6379),
        p = n(99032),
        f = n(62490),
        h = n(81393),
        g = n(68797),
        v = n(84933),
        I = n(78327);
      const S = 1;
      function w(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, h.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const A = "0";
      function y(e, t) {
        (t.localized_flat_title = (0, f.$Y)([], l.bP9, null)),
          (t.localized_flat_blurb = (0, f.$Y)([], l.bP9, null)),
          (t.localized_flat_link = (0, f.$Y)([], l.bP9, null)),
          t.title !== A && (t.localized_flat_title[e] = t.title),
          t.blurb !== A && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== A && (t.localized_flat_link[e] = t.link),
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
      class b {
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
        async LoadListDetails(e, t, n) {
          if (this.m_mapList.has(t)) return this.m_mapList.get(t);
          const a =
              I.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            i = { listid: t };
          try {
            const r = await s().get(a, { params: i, cancelToken: n?.token });
            if (r?.data?.success == c.R) {
              const n = { ...r.data.list_details };
              return (
                (0, h.wT)(t == n?.listid, "Wanted" + t + "but got" + n?.listid),
                w(n),
                y(r.data.curation_language, n),
                this.m_mapList.set(t, n),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                n
              );
            }
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(e, t, n) {
          if (
            !I.iA.logged_in ||
            (m.Fm.Get().BIsLoaded() &&
              0 == m.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const a = I.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            i = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: m.Fm.Get().BIsLoaded()
                ? m.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            a,
            i,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async LoadAllSaleCurationLists(e, t, n) {
          if (this.m_mapEventGIDToLists.has(t))
            return this.m_mapEventGIDToLists.get(t);
          const a = I.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            i = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            a,
            i,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, n, a, i, o) {
          try {
            const n = await s().get(e, { params: t, cancelToken: o?.token });
            if (n?.data?.success == c.R) {
              const e = new Array();
              return (
                (0, r.h5)(() => {
                  n.data.matches &&
                    n.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((n) => {
                        this.m_mapListIDToClanAccount.set(
                          n.listid,
                          t.clan_account_id,
                        ),
                          w(n),
                          y(t.curation_language, n),
                          this.m_mapList.set(n.listid, n),
                          e.push(n);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(i, e);
                }),
                e
              );
            }
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(n + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return b.s_Singleton || (b.s_Singleton = new b()), b.s_Singleton;
        }
        constructor() {
          (0, r.Gn)(this),
            "dev" == I.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, I.Tc)("curatorlistdata", "application_config");
          ("dev" != I.TS.WEB_UNIVERSE && "beta" != I.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, r.h5)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    w(t),
                      y(e.curation_language, t),
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
      function G(e, t) {
        const n = (0, v.CH)();
        return (
          (0, o.useEffect)(() => {
            if (b.Get().GetListDetails(t) || !e) return;
            const a = s().CancelToken.source();
            return (
              (async () => {
                const i = await b.Get().LoadListDetails(e, t);
                if (!a.token.reason)
                  if (i?.apps?.length) {
                    const e = [];
                    for (const t of i.apps) {
                      const n = t?.recommended_app?.appid;
                      n && e.push({ id: n, type: "game" });
                    }
                    (0, p.H2)(e, {
                      ...p.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      n();
                  } else console.error("Found no list data");
              })(),
              () => a.cancel("unmounting CuratorList")
            );
          }, [e, t, n]),
          b.Get().GetListDetails(t)
        );
      }
      function C(e) {
        const t = e && d.ac.GetClanInfoByClanAccountID(e),
          [n, a] = (0, o.useState)(!!t);
        return (
          (0, o.useEffect)(() => {
            if (n && e) {
              const t = u.b.InitFromClanID(e);
              d.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                a(!0);
              });
            }
          }, [n, e]),
          t
        );
      }
      function j(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function x(e) {
        const t = (0, v.CH)(),
          n = j(e) ? e.sale_clan_event_gid : null,
          a = n && _.O3.GetClanEventModel(n);
        return (
          (0, o.useEffect)(() => {
            if (a || !j(e)) return;
            const i = s().CancelToken.source();
            return (
              (async () => {
                _.O3.Init(),
                  await _.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new u.b(e.sale_clan_steamid),
                    n,
                    0,
                  ),
                  i.token.reason || t();
              })(),
              () => i.cancel("unmounting CuratorList")
            );
          }, [e, n, a, t]),
          a
        );
      }
      (0, a.Cg)([r.sH], b.prototype, "m_mapList", void 0);
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => _,
        Gg: () => h,
        Ow: () => f,
        Sq: () => u,
        YM: () => S,
        eR: () => d,
        ik: () => m,
        mZ: () => g,
        t7: () => p,
        zX: () => I,
      });
      var a = n(41735),
        i = n.n(a),
        s = n(90626),
        r = n(37085),
        o = n(48210),
        l = n(84933),
        c = n(16021);
      const u = 1,
        d = 2,
        m = 3;
      function _(e, t, n, a) {
        const o = (0, s.useRef)(void 0),
          _ = (0, s.useRef)(void 0),
          p = (0, l.CH)();
        o.current = e;
        const [f, h] = (0, s.useState)(void 0),
          {
            include_assets: g,
            include_release: v,
            include_platforms: I,
            include_all_purchase_options: S,
            include_screenshots: w,
            include_trailers: A,
            include_ratings: y,
            include_tag_count: b,
            include_reviews: G,
            include_basic_info: C,
            include_supported_languages: j,
            include_full_description: x,
            include_included_items: L,
            include_assets_without_overrides: B,
            apply_user_filters: D,
            include_links: R,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: g,
              include_release: v,
              include_platforms: I,
              include_all_purchase_options: S,
              include_screenshots: w,
              include_trailers: A,
              include_ratings: y,
              include_tag_count: b,
              include_reviews: G,
              include_basic_info: C,
              include_supported_languages: j,
              include_full_description: x,
              include_included_items: L,
              include_assets_without_overrides: B,
              apply_user_filters: D,
              include_links: R,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== f && a && a == _.current) ||
                (a !== _.current && (h(void 0), (_.current = a)),
                (s = i().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || o.current !== e || h(t == r.R), p();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, a, f, g, v, I, S, w, A, y, b, G, C, j, x, L, B, D, R, p]),
          !e)
        )
          return [null, d];
        if (!1 === f) return [void 0, d];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!c.A.Get().BHasStoreItem(e, t, n)) return [void 0, u];
        const T = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return T ? [T, m] : [null, d];
      }
      function p(e, t, n) {
        return _(e, o.c6.qI, t, n);
      }
      function f(e, t, n) {
        return _(e, o.c6.xO, t, n);
      }
      function h(e, t, n) {
        return _(e, o.c6.RD, t, n);
      }
      function g(e, t, n) {
        const [a, i] = _(e, t, n);
        let s;
        a?.GetStoreItemType() != o.c6.RD ||
          a.GetAssets()?.GetHeaderURL() ||
          1 != a?.GetIncludedAppIDs().length ||
          (s = a.GetIncludedAppIDs()[0]);
        const [r, l] = p(s, n);
        return s && r?.BIsVisible() ? [r, l] : [a, i];
      }
      function v(e, t, n, a) {
        const r = (0, l.CH)(),
          {
            include_assets: o,
            include_release: _,
            include_platforms: p,
            include_all_purchase_options: f,
            include_screenshots: h,
            include_trailers: g,
            include_ratings: v,
            include_tag_count: I,
            include_reviews: S,
            include_basic_info: w,
            include_supported_languages: A,
            include_full_description: y,
            include_included_items: b,
            include_assets_without_overrides: G,
            apply_user_filters: C,
            include_links: j,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: o,
                include_release: _,
                include_platforms: p,
                include_all_purchase_options: f,
                include_screenshots: h,
                include_trailers: g,
                include_ratings: v,
                include_tag_count: I,
                include_reviews: S,
                include_basic_info: w,
                include_supported_languages: A,
                include_full_description: y,
                include_included_items: b,
                include_assets_without_overrides: G,
                apply_user_filters: C,
                include_links: j,
              },
              a = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, n) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == a.length) return;
            const s = i().CancelToken.source(),
              l = a.map((e) => c.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(l).then(() => {
                s.token.reason || r();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, a, r, o, _, p, f, h, g, v, I, S, w, A, y, b, G, C, j]),
          !e)
        )
          return d;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, n) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? m
          : d;
      }
      function I(e, t, n) {
        return v(e, o.c6.qI, t, n);
      }
      function S() {
        s.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => S,
        H2: () => g,
        Li: () => I,
        S7: () => p,
        a9: () => w,
        jy: () => v,
        nt: () => h,
        sd: () => _,
        tJ: () => f,
      });
      var a = n(57876),
        i = n(62792),
        s = n(81886),
        r = n(22837),
        o = n(48210),
        l = n(30894),
        c = n(16021),
        u = n(78327),
        d = n(62734),
        m = n(81393);
      function _(e) {
        return c.A.Get().BIsStoreItemMissing(e.id, (0, i.SW)(e.type));
      }
      function p(e, t, n) {
        const a = new Array();
        return (
          e?.forEach((e) => a.push({ id: e, type: "game" })),
          t?.forEach((e) => a.push({ id: e, type: "sub" })),
          n?.forEach((e) => a.push({ id: e, type: "bundle" })),
          a
        );
      }
      function f(e) {
        const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function h(e) {
        if (!d.f.Get().GetHomeView()?.localized) return !0;
        const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return l.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function g(e, t, n) {
        if (!e || 0 == e.length) return [];
        const a = e.filter((e) => (0, s.fp)(e.type)).map((e) => e.id),
          i = e.filter((e) => "sub" === e.type).map((e) => e.id),
          r = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = a.filter((e) => !c.A.Get().BHasApp(e, t)),
            n = i.filter((e) => !c.A.Get().BHasApp(e, t)),
            s = r.filter((e) => !c.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || s.length > 0) &&
            (await Promise.all([
              c.A.Get().QueueMultipleAppRequests(e, t),
              c.A.Get().QueueMultiplePackageRequests(n, t),
              c.A.Get().QueueMultipleBundleRequests(s, t),
            ]));
        }
        const o = new Set();
        r?.forEach((e) => {
          const t = c.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => o.add(e));
        }),
          i?.forEach((e) => {
            const t = c.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => o.add(e));
          });
        const l = Array.from(o).filter((e) => !c.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await c.A.Get().QueueMultipleAppRequests(l, t)),
          a.forEach((e) => o.add(e)),
          n)
        ) {
          const e = Array.from(o)
            .map((e) => {
              const t = c.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (o.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !c.A.Get().BHasApp(e, t));
          e.length > 0 && (await c.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(o).filter((e) => {
          const t = c.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const v = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function I(e) {
        const t = l.Fm.Get();
        (0, m.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const n = e?.GetAllLanguagesWithSomeSupport() || [],
          a = d.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (e.GetStoreItemType() == o.c6.qI &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (a &&
            !(
              0 == n.length ||
              e.BHasSomeLanguageSupport(r.Bhc) ||
              t.BIsAnyLanguageEnabled(n)
            ))
        );
      }
      async function S(e, t, n, s) {
        let r = 0,
          o = 0;
        const d = [];
        await g(e, a.Xh, t);
        for (const a of e) {
          const e = c.A.Get().GetStoreItem(a.id, (0, i.SW)(a.type));
          if (!e) {
            r++;
            continue;
          }
          const u = e
            .GetIncludedAppIDs()
            .map((e) => c.A.Get().GetApp(e))
            .filter(Boolean);
          if ((u.push(e), t)) {
            const e = new Set(u.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => c.A.Get().GetApp(e))
                .filter(Boolean);
            t && u.push(...t);
          }
          u.some(s || I)
            ? (o++, n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(a)))
            : d.push(a);
        }
        return (
          "dev" === u.TS.WEB_UNIVERSE &&
            0 === d.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                r +
                " failed to load, " +
                o +
                " hidden by user filter.",
            ),
          d
        );
      }
      async function w(e, t, n, a, s, r, o) {
        let u = await S(
          e,
          t,
          o,
          s
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : I,
        );
        const d = [];
        for (const e of u) {
          const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
          if (!t) continue;
          const s = t?.GetIncludedAppIDsOrSelf();
          let u = !1;
          n && (u = u || s.every((e) => l.Fm.Get().BIsGameOwned(e))),
            a && (u = u || s.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            r && (u = u || s.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            u ? o && o.push(e) : d.push(e);
        }
        return d;
      }
    },
    94743: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => p, r: () => _ });
      var a = n(7850),
        i = n(90626),
        s = n(26296),
        r = n(12155),
        o = n(48211),
        l = n(52038),
        c = n(61859),
        u = n(70758),
        d = n.n(u),
        m = n(52505);
      const _ = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [n, r] = i.useState(0);
          i.useEffect(() => r(0), [e.video]);
          const o = i.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, a.jsx)(s.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, a.jsx)("img", { src: e.altImg, className: e.className });
          {
            const i =
                "https://img.youtube.com/vi/" + e.video + "/" + t[n] + ".jpg",
              s = () => {
                n + 1 < t.length && r(n + 1);
              },
              c = () => {
                o.current && o.current.naturalHeight < 91 && s();
              };
            return (0, a.jsx)("img", {
              ref: o,
              onLoad: c,
              onError: s,
              src: i,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        p = (e) => {
          const [t, n] = i.useState(!1);
          (0, o.VC)(!!e.preloadYoutubeScripts);
          const s = (0, m.Rp)("youtube");
          if (t && s)
            return (0, a.jsx)(o.N1, {
              ...e,
              classnames: (0, l.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                n(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return (0, a.jsxs)("div", {
              className: (0, l.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: s ? t : void 0,
              children: [
                (0, a.jsx)(_, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                s &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, a.jsx)(r.IOc, {}),
                      }),
                      (0, a.jsx)("div", {
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
    49271: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, { CuratorReviewListContainer: () => te, default: () => ee });
      var a = n(7850),
        i = n(75844),
        s = n(90626),
        r = n(15759),
        o = n(22837),
        l = n(45699),
        c = n(76217),
        u = n(70995),
        d = n(38390),
        m = n(17720),
        _ = n(55963),
        p = n(4434),
        f = n(41735),
        h = n.n(f),
        g = n(78327),
        v = n(68797),
        I = n(37085);
      function S(e, t) {
        const [n, a] = (0, s.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          i = (0, p.m)("useFilteredAppViaContentHub");
        return (
          (0, s.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !n &&
              (async function (e, t) {
                const n =
                    g.TS.STORE_BASE_URL +
                    "contenthub/ajaxfilterappsbycontenthub",
                  a = {
                    hubtype: e.GetContentHubType(),
                    category: e.GetContentHubCategory(),
                    tagid: e.GetContentHubTag(),
                    prune_list_optin_name: e.jsondata.prune_list_optin_name,
                    optin_tagid: e.jsondata.optin_tagid,
                    optin_prune_tagid: e.jsondata.optin_prune_tagid,
                    optin_only: e.jsondata.optin_only,
                    applist: t.sort().join(","),
                  };
                let i = null;
                const s = new Set();
                try {
                  const e = await h().get(n, { params: a });
                  if (e?.data?.success == I.R)
                    return e.data.appids.forEach((e) => s.add(e)), s;
                  i = (0, v.H)(e);
                } catch (e) {
                  i = (0, v.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + i?.strErrorMsg,
                    i,
                  ),
                  s
                );
              })(e, t).then((e) => {
                i.token.reason || a(e);
              });
          }, [n, i.token.reason, e, t]),
          n
        );
      }
      var w = n(6626),
        A = n(30894),
        y = n(16021),
        b = n(62792),
        G = n(55263),
        C = n(39020),
        j = n(39777),
        x = n(33380),
        L = n.n(x),
        B = n(12155),
        D = n(52038),
        R = n(70758);
      const T = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function E(e) {
        const t = T.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function N(e) {
        const {
            posterURL: t,
            videoid: n,
            muted: i,
            autoplay: r,
            bIsClipID: o,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, m] = s.useState(Boolean(t)),
          _ = null != r && null != r && r;
        if (d)
          return (0, a.jsxs)("div", {
            className: (0, D.A)(
              "YoutubePreviewContainer",
              R.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => m(!1),
            children: [
              (0, a.jsx)("img", {
                className: (0, D.A)(
                  "YoutubePreviewImage",
                  R.YoutubePreviewImage,
                ),
                src:
                  t ||
                  g.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, a.jsx)(B.IOc, {}),
              }),
            ],
          });
        let p = (0, g.xv)().replace("https://", "");
        const f = p.indexOf("/");
        f >= 0 && (p = p.substring(0, f));
        let h = o
          ? `https://clips.twitch.tv/embed?clip=${n}`
          : `https://player.twitch.tv/?video=${n}`;
        return (
          (h += `&parent=${p}&autoplay=${_}&muted=${Boolean(i)}`),
          l &&
            (h += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const n = Math.floor(e / 60);
              return `${t}h${n}m${(e -= n * e)}s`;
            })(l)}`),
          (0, a.jsxs)("div", {
            className: (0, D.A)("YoutubePlayer", L().TwitchPlayer),
            children: [
              (0, a.jsx)("img", {
                className: (0, D.A)(
                  "YoutubePreviewContainer",
                  R.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  g.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("iframe", {
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
      var k = n(29008),
        F = n(99032),
        H = n(75152),
        V = n(22687),
        P = n(22797),
        M = n(10224),
        Y = n(94743),
        W = n(61859),
        O = n(61336),
        U = n(62014),
        z = n.n(U),
        q = n(85693),
        Z = n(22584);
      function Q(e) {
        const { clanInfo: t } = e,
          { curator_link: n, curator_medium_avatar: i } = (0, g.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, a.jsx)(c.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, a.jsx)("div", {
            className: "page_content",
            children: (0, a.jsxs)(c.Z, {
              className: "list_header_area",
              "flow-children": "row",
              children: [
                (0, a.jsx)("div", {
                  className: "curator_avatar_image",
                  children: (0, a.jsx)(l.Ii, {
                    href: n,
                    children: (0, a.jsx)("img", {
                      className: "curator_avatar",
                      src: i,
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "curator_details",
                  children: [
                    (0, a.jsx)(q.r, {
                      className: Z.BreadContainer,
                      crumbs: (0, g.Tc)("breadcrumbs", "application_config"),
                    }),
                    (0, a.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: n,
                      children: (0, W.we)(
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
      var X = n(32630),
        K = n(35380),
        $ = n(42834),
        J = n(64087);
      const ee = function (e) {
        return (0, a.jsx)(te, { listid: e.listid });
      };
      function te(e) {
        const t = parseInt(
            (0, g.Tc)("curator_account_id", "application_config"),
          ),
          n = (0, w.m1)(t),
          i = (0, w.ME)(n?.clanSteamID, e.listid);
        return (
          (0, C.vb)(g.TS.LANGUAGE),
          i
            ? (0, a.jsxs)(X.Ay, {
                feature: "curatorlistcapsule",
                children: [
                  (0, a.jsx)(Q, { clanInfo: n }),
                  (0, a.jsx)("div", {
                    className: "page_content_ctn grayscale",
                    children: (0, a.jsx)("div", {
                      className: "page_content",
                      children: (0, a.jsxs)("div", {
                        className: z().CuratorListCtn,
                        children: [
                          (0, a.jsx)(ie, { listDetails: i }),
                          (0, w.cc)(i)
                            ? (0, a.jsx)(ne, { listDetails: i })
                            : (0, a.jsx)(ae, {
                                listDetails: i,
                                rgListItems: i.apps,
                              }),
                          (0, a.jsxs)("div", {
                            className: z().CuratorMoreCtn,
                            children: [
                              (0, a.jsx)("h2", {
                                children: (0, W.we)(
                                  "#SteamCurator_ExploreMoreTitle",
                                ),
                              }),
                              (0, a.jsx)(l.Ii, {
                                href: n.vanity_url,
                                children: (0, W.PP)(
                                  "#SteamCurator_MoreReviews",
                                  n.group_name,
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
      function ne(e) {
        const { listDetails: t } = e,
          [n, i] = (0, s.useState)(null),
          r = new m.b(t.sale_clan_steamid),
          { eventModel: o } = (0, d.B9)(
            r.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, s.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = S(o, l);
        return (
          (0, s.useEffect)(() => {
            if (o)
              if (o.BUsesContentHubForItemSource())
                c && i(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = o.GetSaleFeaturedApps();
                i(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, o, c]),
          (0, a.jsx)(ae, { listDetails: t, rgListItems: n })
        );
      }
      function ae(e) {
        const { listDetails: t, rgListItems: n } = e,
          [i, r] = (0, s.useState)(0),
          [o, u] = (0, s.useState)(null),
          d = (0, p.m)("CuratorAppListDisplay");
        if (
          (s.useEffect(() => {
            n &&
              (r(n?.length || 0),
              A.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = n.map((e) => e.recommended_app.appid);
                  y.A.Get()
                    .QueueMultipleAppRequests(e, F.jy)
                    .then(() => {
                      d.token.reason ||
                        u(
                          n.filter(
                            (e) =>
                              !(0, F.Li)(
                                y.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || u([]);
                    });
                }));
          }, [n, d]),
          null == o)
        )
          return (0, a.jsx)(P.t, {
            string: (0, W.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const m = t.list_type == w.QV;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Z, {
              className: (0, D.A)(z().CuratorList, m && z().CuratorListGrid),
              "flow-children": "grid",
              children: o.map((e, n) =>
                (0, a.jsx)(
                  se,
                  { item: e, listDetails: t, bAutoFocus: 0 == n },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > o.length) &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("span", {
                    children: [
                      (0, W.Yp)("#SteamCurator_Hidden", i - o.length),
                      " ",
                    ],
                  }),
                  (0, a.jsx)(l.Ii, {
                    href: g.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, W.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function ie(e) {
        const { listDetails: t } = e,
          n = (0, w.fq)(t),
          i = (0, g.Tc)("showlisttitle", "application_config"),
          s = (0, g.Tc)("titleareaheight", "application_config"),
          r =
            t.list_jsondata.youtube_link &&
            (0, u.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && E(t.list_jsondata.youtube_link),
          d = (0, o.sfN)(g.TS.LANGUAGE),
          m = W.NT.GetWithFallback(t.localized_flat_title, d),
          _ = W.NT.GetWithFallback(t.localized_flat_blurb, d),
          p = W.NT.GetWithFallback(t.localized_flat_link, d),
          f =
            n &&
            n.GetImageURL(
              (0, M.c5)() ? "product_mobile_banner" : "product_banner",
              d,
            );
        return (0, a.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(f) &&
              (0, a.jsx)(l.Ii, {
                href: n.GetSaleURL(),
                children: (0, a.jsx)("img", {
                  className: z().SaleBanner,
                  src: f,
                }),
              }),
            i && m && (0, a.jsx)("div", { className: z().Title, children: m }),
            i && _ && (0, a.jsx)("div", { className: z().Blurb, children: _ }),
            Boolean(s > 0) && (0, a.jsx)("div", { style: { height: s } }),
            r &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(Y.l, {
                  video: r.strVideoID,
                  startSeconds: r.nStartSeconds,
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
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(N, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            p && (0, a.jsx)(le, { url: p }),
          ],
        });
      }
      const se = (0, i.PA)((e) => {
        const { item: t, listDetails: n, bAutoFocus: i } = e,
          r = parseInt((0, g.Tc)("curator_account_id", "application_config")),
          o = (0, w.m1)(r),
          [l] = (0, G.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          d = (0, s.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, b._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          m = (0, K.rt)(d);
        if (!o || !l) return null;
        const {
            appid: _,
            link_url: p,
            blurb: f,
            time_recommended: h,
            recommendation_state: v,
          } = t.recommended_app,
          I = o.is_creator_home && !o.is_ogg,
          S = n.list_jsondata.app_data?.[_],
          A = p && (0, u.XU)(p),
          y = p && E(p),
          C = f != w.F6 && f,
          j = l.BHasDemo(),
          x = S?.img_url,
          L = `curator_clanid=${o.clanAccountID}&curator_listid=${n.listid}`,
          B = l.GetStorePageURL() + "/?curator_clanid=" + o.clanAccountID;
        return (0, a.jsxs)(c.Z, {
          className: z().CuratorReview,
          autoFocus: i,
          children: [
            (0, a.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(A || y)
                ? (0, a.jsx)(re, {
                    strVideoID: A?.strVideoID || y,
                    nStartSeconds: A?.nStartSeconds,
                    id: m,
                    strImgOverrideUrl: x,
                    bShowDemoButton: j,
                    strExtraParams: L,
                    bTwitchVideo: Boolean(y),
                  })
                : (0, a.jsx)(V.W, {
                    imageType: "header",
                    capsule: d,
                    bShowDemoButton: j,
                    strExtraParams: L,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, a.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, a.jsx)("a", {
                  className: z().GameTitle,
                  href: B,
                  children: l.GetName(),
                }),
                (0, a.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, a.jsx)(oe, { type: v }),
                    (0, a.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        I || !Boolean(h)
                          ? (0, W.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, W.$z)(h),
                    }),
                  ],
                }),
                Boolean(C) &&
                  (0, a.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, W.we)("#SteamCurator_ReviewTextQuoted", C),
                  }),
                Boolean(p) && (0, a.jsx)(le, { url: p }),
              ],
            }),
          ],
        });
      });
      function re(e) {
        const {
            strVideoID: t,
            nStartSeconds: n,
            id: i,
            strImgOverrideUrl: s,
            bShowDemoButton: r,
            strExtraParams: o,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, j.lv)(i);
        return (0, a.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, a.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, a.jsx)(N, {
                    videoid: t,
                    posterURL: c ? (0, $.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, a.jsx)(Y.l, {
                    video: t,
                    startSeconds: n,
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
            (0, a.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, a.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, a.jsx)(k.Q, {
                    id: i,
                    bShowDemoButton: r,
                    nDelayShowMs: 300,
                    strExtraParams: o,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, a.jsx)("img", {
                      className: z().GameImage,
                      src: c ? (0, $.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, a.jsx)(H.q, { id: i, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function oe(e) {
        switch (e.type) {
          case J.tV.$D:
            return (0, a.jsx)("div", {
              className: z().Recommended,
              children: (0, W.we)("#SteamCurator_Recommended"),
            });
          case J.tV.qP:
            return (0, a.jsx)("div", {
              className: z().NotRecommended,
              children: (0, W.we)("#SteamCurator_NotRecommended"),
            });
          case J.tV.y8:
            return (0, a.jsx)("div", {
              className: z().Informational,
              children: (0, W.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function le(e) {
        let t = (0, _.OZ)(e.url);
        (0, r.p)(t) &&
          (t =
            (g.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            g.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const n = (0, O.wm)(e.url),
          i = (0, u.Lg)(e.url);
        return (0, a.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, a.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, W.we)(
                i
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, a.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, W.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                n,
              ),
            }),
          ],
        });
      }
    },
  },
]);
