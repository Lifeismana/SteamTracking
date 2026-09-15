/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [46366],
  {
    57876: (e, t, n) => {
      n.d(t, { Xh: () => u, cU: () => d, tf: () => p, wl: () => _ });
      var r = n(22837),
        i = n(71150),
        s = n(95578),
        a = n(30894),
        o = n(16021),
        l = n(62792),
        c = n(78327);
      const u = {
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
      class d {
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
      const _ = 4;
      function p(e, t, n, r, i, s) {
        const a = new Array(),
          c = new Array(),
          u = new Array(),
          d = new Array();
        if (!e || 0 == e.length) return a;
        const p = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let s of e) {
          let e = s.id,
            _ = l.by.k_NotRejected;
          switch (s.item_type) {
            case "sub":
              const i = o.A.Get().GetPackage(e);
              if (1 !== i?.GetIncludedAppIDs()?.length) {
                _ = I(e, t, r, !0);
                break;
              }
              e = i.GetIncludedAppIDs()[0];
            case "app":
              _ = y(e, t, n, r, !0);
              break;
            case "bundle":
              _ = h(e, t, r, !0);
          }
          if (
            (_ == l.by.k_NotRejected
              ? ((s.rejected = l.by.k_NotRejected),
                a.push({ ...s, priority: 1 }))
              : p.includes(_)
                ? ((s.rejected = l.by.k_NotRejected), c.push(s))
                : ((s.rejected = _),
                  _ == l.by.k_RejectIgnoredGame ? u.push(s) : d.push(s)),
            a.length > i)
          )
            break;
        }
        return (
          a.length < i &&
            (m(a, c, s, 2),
            a.length < s &&
              t.enforce_minimum &&
              (m(a, u, s, 3), m(a, d, s, _))),
          a
        );
      }
      function m(e, t, n, r) {
        for (let i = 0; e.length < n && i < t.length; ++i)
          e.push({ ...t[i], priority: r });
      }
      function f(e, t) {
        const n = a.Fm.Get();
        if (t.only_current_platform && n.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && n.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && n.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                n.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const r = e.GetPlatforms();
        return !t.virtual_reality &&
          r &&
          r.vr_support &&
          r.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function g(e, t) {
        if (t.localized) {
          const t = (0, r.sfN)(c.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function y(e, t, n, r, c) {
        const u = o.A.Get().GetApp(e);
        if (!u) return l.by.k_RejectNotLoaded;
        const d = f(u, t);
        if (d != l.by.k_NotRejected) return d;
        const _ = a.Fm.Get();
        if (_.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (_.BExcludeTagIDs(u.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (_.BExcludesContentDescriptor(u.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && u.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const p = u.GetAppType();
        if (!t.software && p == s.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && _.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !_.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [s.uE.Wz, s.uE.gQ, s.uE.ID].includes(p))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = u.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != n &&
          t.no_ao_content &&
          (u.HasContentDescriptorID(i.u7) || u.HasContentDescriptorID(i.T4))
          ? l.by.k_RejectAO
          : p == s.uE.ue &&
              t.games_already_in_library &&
              _.BIsGameOwned(u.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : c
              ? (p == s.uE.ue && r.BHasAppID(u.GetParentAppID() || 0)) ||
                r.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !u.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : g(u, t)
              : l.by.k_NotRejected;
      }
      function G(e, t) {
        const n = a.Fm.Get();
        let r = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (r = !0);
        }
        return t.games_not_in_library && r
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !r
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function I(e, t, n, r) {
        const i = o.A.Get().GetPackage(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const s = f(i, t);
        if (s != l.by.k_NotRejected) return s;
        const c = G(i.GetIncludedAppIDs(), t);
        if (c != l.by.k_NotRejected) return c;
        const u = a.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : r
              ? n.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : g(i, t)
              : l.by.k_NotRejected;
      }
      function h(e, t, n, r) {
        const i = o.A.Get().GetBundle(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const s = f(i, t);
        if (s != l.by.k_NotRejected) return s;
        const a = G(i.GetIncludedAppIDs(), t);
        return a != l.by.k_NotRejected
          ? a
          : r
            ? n.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : g(i, t)
            : l.by.k_NotRejected;
      }
    },
    62734: (e, t, n) => {
      n.d(t, { f: () => s });
      var r = n(81393);
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
              (0, r.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (s.s_globalSingletonStore = new s())),
            s.s_globalSingletonStore
          );
        }
        constructor() {
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
      n.d(t, {
        F6: () => b,
        ME: () => D,
        QV: () => h,
        RA: () => k,
        cc: () => L,
        fq: () => B,
        m1: () => w,
      });
      var r = n(34629),
        i = n(41735),
        s = n.n(i),
        a = n(14947),
        o = n(90626),
        l = n(22837),
        c = n(37085),
        u = n(17720),
        d = n(4796),
        _ = n(30894),
        p = n(91254),
        m = n(99032),
        f = n(62490),
        g = n(81393),
        y = n(68797),
        G = n(84933),
        I = n(78327);
      const h = 1;
      function A(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, g.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const b = "0";
      function S(e, t) {
        (t.localized_flat_title = (0, f.$Y)([], l.bP9, null)),
          (t.localized_flat_blurb = (0, f.$Y)([], l.bP9, null)),
          (t.localized_flat_link = (0, f.$Y)([], l.bP9, null)),
          t.title !== b && (t.localized_flat_title[e] = t.title),
          t.blurb !== b && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== b && (t.localized_flat_link[e] = t.link),
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
      class k {
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
          const r =
              I.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            i = { listid: t };
          try {
            const a = await s().get(r, { params: i, cancelToken: n?.token });
            if (a?.data?.success == c.R) {
              const n = { ...a.data.list_details };
              return (
                (0, g.wT)(t == n?.listid, "Wanted" + t + "but got" + n?.listid),
                A(n),
                S(a.data.curation_language, n),
                this.m_mapList.set(t, n),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                n
              );
            }
          } catch (e) {
            const t = (0, y.H)(e);
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
            (_.Fm.Get().BIsLoaded() &&
              0 == _.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const r = I.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            i = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: _.Fm.Get().BIsLoaded()
                ? _.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            r,
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
          const r = I.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            i = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            r,
            i,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, n, r, i, o) {
          try {
            const n = await s().get(e, { params: t, cancelToken: o?.token });
            if (n?.data?.success == c.R) {
              const e = new Array();
              return (
                (0, a.h5)(() => {
                  n.data.matches &&
                    n.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((n) => {
                        this.m_mapListIDToClanAccount.set(
                          n.listid,
                          t.clan_account_id,
                        ),
                          A(n),
                          S(t.curation_language, n),
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
            const t = (0, y.H)(e);
            console.error(n + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return k.s_Singleton || (k.s_Singleton = new k()), k.s_Singleton;
        }
        constructor() {
          (0, a.Gn)(this);
          let e = (0, I.Tc)("curatorlistdata", "application_config");
          this.ValidateStoreDefault(e) &&
            (0, a.h5)(() => {
              e.forEach((e) => {
                e.multi_detail_lists.forEach((t) => {
                  A(t),
                    S(e.curation_language, t),
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
      function D(e, t) {
        const n = (0, G.CH)();
        return (
          (0, o.useEffect)(() => {
            if (k.Get().GetListDetails(t) || !e) return;
            const r = s().CancelToken.source();
            return (
              (async () => {
                const i = await k.Get().LoadListDetails(e, t);
                if (!r.token.reason)
                  if (i?.apps?.length) {
                    const e = [];
                    for (const t of i.apps) {
                      const n = t?.recommended_app?.appid;
                      n && e.push({ id: n, type: "game" });
                    }
                    (0, m.H2)(e, {
                      ...m.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      n();
                  } else console.error("Found no list data");
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, t, n]),
          k.Get().GetListDetails(t)
        );
      }
      function w(e) {
        const t = e && d.ac.GetClanInfoByClanAccountID(e),
          [n, r] = (0, o.useState)(!!t);
        return (
          (0, o.useEffect)(() => {
            if (n && e) {
              const t = u.b.InitFromClanID(e);
              d.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                r(!0);
              });
            }
          }, [n, e]),
          t
        );
      }
      function L(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function B(e) {
        const t = (0, G.CH)(),
          n = L(e) ? e.sale_clan_event_gid : null,
          r = n && p.O3.GetClanEventModel(n);
        return (
          (0, o.useEffect)(() => {
            if (r || !L(e)) return;
            const i = s().CancelToken.source();
            return (
              (async () => {
                p.O3.Init(),
                  await p.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new u.b(e.sale_clan_steamid),
                    n,
                    0,
                  ),
                  i.token.reason || t();
              })(),
              () => i.cancel("unmounting CuratorList")
            );
          }, [e, n, r, t]),
          r
        );
      }
      (0, r.Cg)([a.sH], k.prototype, "m_mapList", void 0);
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => p,
        Gg: () => g,
        Ow: () => f,
        Sq: () => u,
        YM: () => h,
        eR: () => d,
        ik: () => _,
        mZ: () => y,
        t7: () => m,
        zX: () => I,
      });
      var r = n(41735),
        i = n.n(r),
        s = n(90626),
        a = n(37085),
        o = n(95578),
        l = n(84933),
        c = n(16021);
      const u = 1,
        d = 2,
        _ = 3;
      function p(e, t, n, r) {
        const o = (0, s.useRef)(void 0),
          p = (0, s.useRef)(void 0),
          m = (0, l.CH)();
        o.current = e;
        const [f, g] = (0, s.useState)(void 0),
          {
            include_assets: y,
            include_release: G,
            include_platforms: I,
            include_all_purchase_options: h,
            include_screenshots: A,
            include_trailers: b,
            include_ratings: S,
            include_tag_count: k,
            include_reviews: D,
            include_basic_info: w,
            include_supported_languages: L,
            include_full_description: B,
            include_included_items: R,
            include_assets_without_overrides: C,
            apply_user_filters: j,
            include_links: v,
            include_extra_details: E,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: y,
              include_release: G,
              include_platforms: I,
              include_all_purchase_options: h,
              include_screenshots: A,
              include_trailers: b,
              include_ratings: S,
              include_tag_count: k,
              include_reviews: D,
              include_basic_info: w,
              include_supported_languages: L,
              include_full_description: B,
              include_included_items: R,
              include_assets_without_overrides: C,
              apply_user_filters: j,
              include_links: v,
              include_extra_details: E,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== f && r && r == p.current) ||
                (r !== p.current && (g(void 0), (p.current = r)),
                (s = i().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || o.current !== e || g(t == a.R), m();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            r,
            f,
            y,
            G,
            I,
            h,
            A,
            b,
            S,
            k,
            D,
            w,
            L,
            B,
            R,
            C,
            j,
            v,
            E,
            m,
          ]),
          !e)
        )
          return [null, d];
        if (!1 === f) return [void 0, d];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, d];
        if (!c.A.Get().BHasStoreItem(e, t, n)) return [void 0, u];
        const H = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return H ? [H, _] : [null, d];
      }
      function m(e, t, n) {
        return p(e, o.c6.qI, t, n);
      }
      function f(e, t, n) {
        return p(e, o.c6.xO, t, n);
      }
      function g(e, t, n) {
        return p(e, o.c6.RD, t, n);
      }
      function y(e, t, n) {
        const [r, i] = p(e, t, n);
        let s;
        r?.GetStoreItemType() != o.c6.RD ||
          r.GetAssets()?.GetHeaderURL() ||
          1 != r?.GetIncludedAppIDs().length ||
          (s = r.GetIncludedAppIDs()[0]);
        const [a, l] = m(s, n);
        return s && a?.BIsVisible() ? [a, l] : [r, i];
      }
      function G(e, t, n, r) {
        const a = (0, l.CH)(),
          {
            include_assets: o,
            include_release: p,
            include_platforms: m,
            include_all_purchase_options: f,
            include_screenshots: g,
            include_trailers: y,
            include_ratings: G,
            include_tag_count: I,
            include_reviews: h,
            include_basic_info: A,
            include_supported_languages: b,
            include_full_description: S,
            include_included_items: k,
            include_assets_without_overrides: D,
            apply_user_filters: w,
            include_links: L,
            include_extra_details: B,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: o,
                include_release: p,
                include_platforms: m,
                include_all_purchase_options: f,
                include_screenshots: g,
                include_trailers: y,
                include_ratings: G,
                include_tag_count: I,
                include_reviews: h,
                include_basic_info: A,
                include_supported_languages: b,
                include_full_description: S,
                include_included_items: k,
                include_assets_without_overrides: D,
                apply_user_filters: w,
                include_links: L,
                include_extra_details: B,
              },
              r = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, n) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const s = i().CancelToken.source(),
              l = r.map((e) => c.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(l).then(() => {
                s.token.reason || a();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, a, o, p, m, f, g, y, G, I, h, A, b, S, k, D, w, L, B]),
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
          ? _
          : d;
      }
      function I(e, t, n) {
        return G(e, o.c6.qI, t, n);
      }
      function h() {
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
      n.d(t, {
        AX: () => I,
        H2: () => g,
        Li: () => G,
        S7: () => p,
        a9: () => h,
        jy: () => y,
        nt: () => f,
        sd: () => _,
        tJ: () => m,
      });
      var r = n(57876),
        i = n(62792),
        s = n(81886),
        a = n(22837),
        o = n(95578),
        l = n(30894),
        c = n(16021),
        u = n(62734),
        d = n(81393);
      function _(e) {
        return c.A.Get().BIsStoreItemMissing(e.id, (0, i.SW)(e.type));
      }
      function p(e, t, n) {
        const r = new Array();
        return (
          e?.forEach((e) => r.push({ id: e, type: "game" })),
          t?.forEach((e) => r.push({ id: e, type: "sub" })),
          n?.forEach((e) => r.push({ id: e, type: "bundle" })),
          r
        );
      }
      function m(e) {
        const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return (t?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0;
      }
      function f(e) {
        if (!u.f.Get().GetHomeView()?.localized) return !0;
        const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return (
          !t ||
          l.Fm.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
        );
      }
      async function g(e, t, n) {
        if (!e || 0 == e.length) return [];
        const r = e.filter((e) => (0, s.fp)(e.type)).map((e) => e.id),
          i = e.filter((e) => "sub" === e.type).map((e) => e.id),
          a = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = r.filter((e) => !c.A.Get().BHasApp(e, t)),
            n = i.filter((e) => !c.A.Get().BHasApp(e, t)),
            s = a.filter((e) => !c.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || s.length > 0) &&
            (await Promise.all([
              c.A.Get().QueueMultipleAppRequests(e, t),
              c.A.Get().QueueMultiplePackageRequests(n, t),
              c.A.Get().QueueMultipleBundleRequests(s, t),
            ]));
        }
        const o = new Set();
        a?.forEach((e) => {
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
          r.forEach((e) => o.add(e)),
          n)
        ) {
          const e = Array.from(o)
            .map((e) => {
              const t = c.A.Get().GetApp(e),
                n = t?.GetParentAppID();
              return n ? (o.add(n), n) : null;
            })
            .filter((e) => null !== e)
            .filter((e) => !c.A.Get().BHasApp(e, t));
          e.length > 0 && (await c.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(o).filter((e) => {
          const t = c.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const y = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function G(e) {
        if (!e) return !0;
        const t = l.Fm.Get();
        if (
          ((0, d.wT)(t.BIsLoaded(), "Dynamic Store not loaded"),
          e.GetStoreItemType() == o.c6.qI)
        ) {
          const n = e.GetParentAppID();
          if (
            t.BIsGameIgnored(e.GetAppID()) ||
            (void 0 !== n && t.BIsGameIgnored(n))
          )
            return !0;
        }
        if (t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()))
          return !0;
        if (t.BExcludeTagIDs(e.GetTagIDs())) return !0;
        if (e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)))
          return !0;
        const n = u.f.Get().GetHomeView()?.localized;
        if (n) {
          const n = e.GetAllLanguagesWithSomeSupport();
          if (
            n.length > 0 &&
            !e.BHasSomeLanguageSupport(a.Bhc) &&
            !t.BIsAnyLanguageEnabled(n)
          )
            return !0;
        }
        return !1;
      }
      async function I(e, t, n, s) {
        const a = [];
        await g(e, r.Xh, t);
        for (const r of e) {
          const e = c.A.Get().GetStoreItem(r.id, (0, i.SW)(r.type));
          if (!e) {
            0;
            continue;
          }
          const o = e
            .GetIncludedAppIDs()
            .map((e) => c.A.Get().GetApp(e))
            .filter((e) => Boolean(e));
          if ((o.push(e), t)) {
            const e = new Set(
                o.map((e) => e.GetParentAppID()).filter((e) => Boolean(e)),
              ),
              t = Array.from(e)
                .map((e) => c.A.Get().GetApp(e))
                .filter((e) => Boolean(e));
            t && o.push(...t);
          }
          o.some(s || G)
            ? n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(r))
            : a.push(r);
        }
        return a;
      }
      async function h(e, t, n, r, s, a, o) {
        let u = await I(
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
            : G,
        );
        const d = [];
        for (const e of u) {
          const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
          if (!t) continue;
          const s = t?.GetIncludedAppIDsOrSelf();
          let u = !1;
          n && (u = u || s.every((e) => l.Fm.Get().BIsGameOwned(e))),
            r && (u = u || s.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            a && (u = u || s.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            u ? o && o.push(e) : d.push(e);
        }
        return d;
      }
    },
  },
]);
