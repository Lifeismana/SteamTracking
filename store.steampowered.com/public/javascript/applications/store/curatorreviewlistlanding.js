/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [20716],
    {
      92025: (Q, Z, e) => {
        "use strict";
        e.d(Z, { fp: () => M, vm: () => a });
        var t = e(56062);
        const T = null;
        function _(m) {
          return T.includes(m);
        }
        function S(m) {
          return _(m) ? m : void 0;
        }
        function M(m) {
          return m
            ? m === "game" ||
                m === "dlc" ||
                m === "software" ||
                m === "music" ||
                m === "application" ||
                m === "demo" ||
                m === "hardware" ||
                m === "mod" ||
                m == "video" ||
                m === "beta" ||
                m === "advertising"
            : !1;
        }
        function a(m) {
          return m == null
            ? !1
            : m == t.uE.HT ||
                m == t.uE._i ||
                m == t.uE.Sv ||
                m == t.uE.Ov ||
                m == t.uE.ue ||
                m == t.uE.Hk ||
                m == t.uE.RA ||
                m == t.uE.Wz ||
                m == t.uE.Vi ||
                m == t.uE.pl;
        }
        function d(m) {
          return m === "music" || m === "dlc";
        }
      },
      97442: (Q, Z, e) => {
        "use strict";
        e.d(Z, { r: () => m });
        var t = e(7850),
          T = e(24660),
          _ = e(19298),
          S = e(17083),
          M = e(36707),
          a = e(2108),
          d = e.n(a);
        function m(X) {
          const { crumbs: Y, className: $, bHideLastArrow: R } = X;
          return !Y || Y.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: (0, M.A)(a.BreadContainer, $),
                children: [
                  (0, t.jsx)(_.Z, {
                    className: "blockbg",
                    "flow-children": "row",
                    children: Y.map((u, F) => {
                      const W = new Array();
                      return (
                        u.url.startsWith("http")
                          ? W.push(
                              (0, t.jsx)(
                                T.Ii,
                                { href: u.url, children: u.name },
                                "anchor_" + u.name,
                              ),
                            )
                          : W.push(
                              (0, t.jsx)(
                                S.N_,
                                { to: u.url, children: u.name },
                                "link_" + u.name,
                              ),
                            ),
                        (!R || F < Y.length - 1) &&
                          W.push(
                            (0, t.jsx)(
                              "span",
                              { children: "\xA0> " },
                              u.name + "span",
                            ),
                          ),
                        W
                      );
                    }),
                  }),
                  (0, t.jsx)("div", { style: { clear: "left" } }),
                ],
              });
        }
      },
      24805: (Q, Z, e) => {
        "use strict";
        e.d(Z, { Xh: () => m, cU: () => X, tf: () => $, wl: () => Y });
        var t = e(99412),
          T = e(18735),
          _ = e(56062),
          S = e(6469),
          M = e(10142),
          a = e(10349),
          d = e(3166);
        const m = {
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
        class X {
          m_setAlreadyAdded = new Set();
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(s) {
            return this.m_setAlreadyAdded.has("a" + s);
          }
          BHasPackageID(s) {
            return this.m_setAlreadyAdded.has("s" + s);
          }
          BHasBundleID(s) {
            return this.m_setAlreadyAdded.has("b" + s);
          }
          BHasStoreItemKey(s) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(s),
            );
          }
          AddStoreItemKey(s) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(s));
          }
          ConvertStoreItemKeyToUniqueKey(s) {
            switch (s.item_type) {
              default:
              case "app":
                return "a" + s.id;
              case "sub":
                return "s" + s.id;
              case "bundle":
                return "b" + s.id;
            }
          }
        }
        const Y = 4;
        function $(n, s, D, y, h, r) {
          const i = new Array(),
            f = new Array(),
            l = new Array(),
            I = new Array();
          if (!n || n.length == 0) return i;
          const A = [
            a.by.k_RejectSupportedLanguage,
            a.by.k_RejectAlreadyDisplayed,
            a.by.k_RejectNoTrailer,
          ];
          for (let g of n) {
            let j = g.id,
              B = a.by.k_NotRejected;
            switch (g.item_type) {
              case "sub":
                const G = M.A.Get().GetPackage(j);
                if (G?.GetIncludedAppIDs()?.length !== 1) {
                  B = ae(j, s, y, !0);
                  break;
                }
                j = G.GetIncludedAppIDs()[0];
              case "app":
                B = W(j, s, D, y, !0);
                break;
              case "bundle":
                B = N(j, s, y, !0);
                break;
            }
            if (
              (B == a.by.k_NotRejected
                ? ((g.rejected = a.by.k_NotRejected),
                  i.push({ ...g, priority: 1 }))
                : A.includes(B)
                  ? ((g.rejected = a.by.k_NotRejected), f.push(g))
                  : ((g.rejected = B),
                    B == a.by.k_RejectIgnoredGame ? l.push(g) : I.push(g)),
              i.length > h)
            )
              break;
          }
          return (
            i.length < h &&
              (R(i, f, r, 2),
              i.length < r &&
                s.enforce_minimum &&
                (R(i, l, r, 3), R(i, I, r, Y))),
            i
          );
        }
        function R(n, s, D, y) {
          for (let h = 0; n.length < D && h < s.length; ++h)
            n.push({ ...s[h], priority: y });
        }
        function u(n, s) {
          const D = S.Fm.Get();
          if (
            s.only_current_platform &&
            D.BHasPlatformPreferenceSet() &&
            !(
              (n.GetPlatforms()?.windows && D.BIsPreferredPlatform("win")) ||
              (n.GetPlatforms()?.mac && D.BIsPreferredPlatform("mac")) ||
              (n.GetPlatforms()?.steamos_linux &&
                D.BIsPreferredPlatform("linux"))
            )
          )
            return a.by.k_RejectWrongPlatform;
          if (!s.prepurchase && n.BIsComingSoon())
            return a.by.k_RejectNoComingSoon;
          const y = n.GetPlatforms();
          return !s.virtual_reality &&
            y &&
            y.vr_support &&
            y.vr_support.vrhmd_only
            ? a.by.k_RejectNoVR
            : n.GetAllCreatorClanIDs()?.some((h) => D.BIsIgnoringCurator(h))
              ? a.by.k_RejectCreatorClan
              : a.by.k_NotRejected;
        }
        function F(n, s) {
          if (s.localized) {
            const D = (0, t.sfN)(d.TS.LANGUAGE);
            if (!n.GetAllLanguagesWithSomeSupport()?.includes(D))
              return a.by.k_RejectSupportedLanguage;
          }
          return a.by.k_NotRejected;
        }
        function W(n, s, D, y, h) {
          const r = M.A.Get().GetApp(n);
          if (!r) return a.by.k_RejectNotLoaded;
          const i = u(r, s);
          if (i != a.by.k_NotRejected) return i;
          const f = S.Fm.Get();
          if (f.BIsGameIgnored(n)) return a.by.k_RejectIgnoredGame;
          if (f.BExcludeTagIDs(r.GetTagIDs()))
            return a.by.k_RejectIgnoreGameTags;
          if (f.BExcludesContentDescriptor(r.GetContentDescriptorIDs()))
            return a.by.k_RejectIgnoreContentDescriptors;
          if (!s.early_access && r.BIsEarlyAccess())
            return a.by.k_RejectEarlyAccess;
          const l = r.GetAppType();
          if (!s.software && l == _.uE.Sv) return a.by.k_RejectSoftware;
          if (s.games_already_in_library && f.BIsGameOwned(n))
            return a.by.k_RejectInLibrary;
          if (s.games_not_in_library && !f.BIsGameOwned(n))
            return a.by.k_RejectNotInLibrary;
          if (!s.video && [_.uE.Wz, _.uE.gQ, _.uE.ID].includes(l))
            return a.by.k_RejectVideo;
          if (s.has_discount) {
            const I = r.GetBestPurchaseOption();
            if (!I || !I.discount_pct) return a.by.k_RejectNoDiscount;
          }
          return D != "adultonly" &&
            s.no_ao_content &&
            (r.HasContentDescriptorID(T.u7) || r.HasContentDescriptorID(T.T4))
            ? a.by.k_RejectAO
            : l == _.uE.ue &&
                s.games_already_in_library &&
                f.BIsGameOwned(r.GetParentAppID() || 0)
              ? a.by.k_RejectInLibrary
              : h
                ? (l == _.uE.ue && y.BHasAppID(r.GetParentAppID() || 0)) ||
                  y.BHasAppID(n)
                  ? a.by.k_RejectAlreadyDisplayed
                  : s.has_trailer && !r.BHasTrailers(!1)
                    ? a.by.k_RejectNoTrailer
                    : F(r, s)
                : a.by.k_NotRejected;
        }
        function H(n, s) {
          const D = S.Fm.Get();
          let y = !1;
          for (let h of n) {
            if (D.BIsGameIgnored(h)) return a.by.k_RejectIgnoredGame;
            D.BIsGameOwned(h) && (y = !0);
          }
          return s.games_not_in_library && y
            ? a.by.k_RejectInLibrary
            : s.games_not_in_library && !y
              ? a.by.k_RejectNotInLibrary
              : a.by.k_NotRejected;
        }
        function ae(n, s, D, y) {
          const h = M.A.Get().GetPackage(n);
          if (!h) return a.by.k_RejectNotLoaded;
          const r = u(h, s);
          if (r != a.by.k_NotRejected) return r;
          const i = H(h.GetIncludedAppIDs(), s);
          if (i != a.by.k_NotRejected) return i;
          const f = S.Fm.Get();
          return s.games_already_in_library && f.BOwnsPackage(n)
            ? a.by.k_RejectInLibrary
            : f.BIsPackageIgnored(n)
              ? a.by.k_RejectIgnoredGame
              : y
                ? D.BHasPackageID(n)
                  ? a.by.k_RejectAlreadyDisplayed
                  : F(h, s)
                : a.by.k_NotRejected;
        }
        function N(n, s, D, y) {
          const h = M.A.Get().GetBundle(n);
          if (!h) return a.by.k_RejectNotLoaded;
          const r = u(h, s);
          if (r != a.by.k_NotRejected) return r;
          const i = H(h.GetIncludedAppIDs(), s);
          return i != a.by.k_NotRejected
            ? i
            : y
              ? D.BHasBundleID(n)
                ? a.by.k_RejectAlreadyDisplayed
                : F(h, s)
              : a.by.k_NotRejected;
        }
      },
      43458: (Q, Z, e) => {
        "use strict";
        e.d(Z, { Lg: () => d, XU: () => $ });
        const t = 20,
          T = /^.*youtube[^v]+v=(.{11}).*/,
          _ = /^.*youtu\.be\/(.{11}).*/,
          S = /^.*youtube.*\/embed\/(.{11}).*/,
          M = /^.*[?&]t=([^&]+)(?:&|$)/,
          a = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function d(R) {
          return !!m(R);
        }
        function m(R) {
          return (
            R?.length < t ? void 0 : T.exec(R) || _.exec(R) || S.exec(R)
          )?.[1];
        }
        function X(R) {
          return M.exec(R)?.[1];
        }
        function Y(R) {
          const u = a.exec(R);
          if (!(u?.[1] || u?.[2] || u?.[3] || u?.[4])) return;
          if (u?.[4]) return parseInt(u?.[4]);
          let F = 0;
          return (
            u?.[1] && (F += 3600 * parseInt(u[1])),
            u?.[2] && (F += 60 * parseInt(u[2])),
            u?.[3] && (F += parseInt(u[3])),
            F
          );
        }
        function $(R) {
          const u = m(R);
          if (!u) return;
          const F = X(R),
            W = F ? Y(F) : void 0;
          return { strVideoID: u, nStartSeconds: W };
        }
      },
      24110: (Q, Z, e) => {
        "use strict";
        e.d(Z, { f: () => S });
        var t = e(71742);
        function T(M) {
          (0, t.wT)(!0, "Unexpected code running in SSR Server: " + M);
        }
        var _ = e(3166);
        class S {
          m_HomeView = void 0;
          BHasHomeView() {
            return !!this.m_HomeView;
          }
          GetHomeView() {
            return this.m_HomeView?.home;
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              S.s_globalSingletonStore ||
                (T("CHomeViewStore.s_globalSingletonStore"),
                (S.s_globalSingletonStore = new S())),
              S.s_globalSingletonStore
            );
          }
          constructor() {
            const a = (0, _.Tc)("home_view_setting", "application_config");
            this.ValidateHomeViewData(a) && this.SetHomeViewSetting(a);
            const d = (0, _.Tc)(
              "home_view_setting_override",
              "application_config",
            );
            this.ValidateHomeViewDataOverride(d) &&
              this.SetHomeViewSettingOverride(d);
          }
          ValidateHomeViewData(a) {
            const d = a;
            return (
              d &&
              typeof d.home == "object" &&
              typeof d.main_cluster == "object"
            );
          }
          SetHomeViewSetting(a) {
            this.m_HomeView = a;
          }
          ValidateHomeViewDataOverride(a) {
            const d = a;
            return (
              d &&
              (!d.all || typeof d.all == "object") &&
              (!d.maincap || typeof d.maincap == "object")
            );
          }
          SetHomeViewSettingOverride(a) {
            this.m_HomeView
              ? (this.m_HomeView.home = {
                  ...this.m_HomeView.home,
                  ...a?.all,
                  ...a?.maincap,
                })
              : (this.m_HomeView = { home: { ...a?.all, ...a?.maincap } });
          }
        }
      },
      8303: (Q, Z, e) => {
        "use strict";
        e.d(Z, {
          F6: () => f,
          ME: () => g,
          QV: () => D,
          RA: () => A,
          cc: () => B,
          fq: () => G,
          m1: () => j,
        });
        var t = e(41735),
          T = e.n(t),
          _ = e(14947),
          S = e(90626),
          M = e(99412),
          a = e(72604),
          d = e(76559),
          m = e(813),
          X = e(6469),
          Y = e(79118),
          $ = e(15901),
          R = e(41635),
          u = e(71742),
          F = e(34592),
          W = e(30096),
          H = e(3166),
          ae = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          n = (E, c, o, L) => {
            for (
              var w = L > 1 ? void 0 : L ? N(c, o) : c, k = E.length - 1, J;
              k >= 0;
              k--
            )
              (J = E[k]) && (w = (L ? J(c, o, w) : J(w)) || w);
            return L && w && ae(c, o, w), w;
          };
        const s = 0,
          D = 1,
          y = 2,
          h = 3,
          r = 4;
        function i(E) {
          E.list_jsondata && typeof E.list_jsondata == "string"
            ? (E.list_jsondata = JSON.parse(E.list_jsondata))
            : ((0, u.wT)(
                !E.list_jsondata,
                "Found unexpected ListDetails_t.list_jsondata type: " +
                  typeof E.list_jsondata,
              ),
              (E.list_jsondata = {}));
        }
        const f = "0";
        function l(E, c) {
          (c.localized_flat_title = (0, R.$Y)([], M.bP9, null)),
            (c.localized_flat_blurb = (0, R.$Y)([], M.bP9, null)),
            (c.localized_flat_link = (0, R.$Y)([], M.bP9, null)),
            c.title !== f && (c.localized_flat_title[E] = c.title),
            c.blurb !== f && (c.localized_flat_blurb[E] = c.blurb),
            c.link !== f && (c.localized_flat_link[E] = c.link),
            c.title_localization.forEach((o) => {
              o.localized_string?.length > 0 &&
                (c.localized_flat_title[o.language] = o.localized_string);
            }),
            c.blurb_localization.forEach((o) => {
              o.localized_string?.length > 0 &&
                (c.localized_flat_blurb[o.language] = o.localized_string);
            }),
            c.link_localization.forEach((o) => {
              o.localized_string?.length > 0 &&
                (c.localized_flat_link[o.language] = o.localized_string);
            });
        }
        const I = class me {
          m_mapList = new Map();
          m_mapEventGIDToLists = new Map();
          m_mapListIDToClanAccount = new Map();
          GetListDetails(c) {
            return this.m_mapList.get(c);
          }
          GetAllSaleCurationLists(c) {
            return this.m_mapEventGIDToLists.get(c) || [];
          }
          GetClanAccountFromListID(c) {
            return this.m_mapListIDToClanAccount.get(c);
          }
          async LoadListDetails(c, o, L) {
            if (this.m_mapList.has(o)) return this.m_mapList.get(o);
            const w =
                H.TS.STORE_BASE_URL +
                "curator/" +
                c.GetAccountID() +
                "/admin/ajaxgetlistdetails",
              k = { listid: o };
            try {
              const J = await T().get(w, { params: k, cancelToken: L?.token });
              if (J?.data?.success == a.R) {
                const K = { ...J.data.list_details };
                return (
                  (0, u.wT)(
                    o == K?.listid,
                    "Wanted" + o + "but got" + K?.listid,
                  ),
                  i(K),
                  l(J.data.curation_language, K),
                  this.m_mapList.set(o, K),
                  this.m_mapListIDToClanAccount.set(o, c.GetAccountID()),
                  K
                );
              }
            } catch (J) {
              const K = (0, F.H)(J);
              console.error(
                "CCuratorListStore.LoadListDetails: error on load: " +
                  K.strErrorMsg,
                K,
              );
            }
            return null;
          }
          async LoadMyFollowedSaleCurationLists(c, o, L) {
            if (
              !H.iA.logged_in ||
              (X.Fm.Get().BIsLoaded() &&
                X.Fm.Get().GetFollowedCuratorCount() == 0)
            )
              return [];
            const w =
                H.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
              k = {
                clan_account_id: c.GetAccountID(),
                clan_event_gid: o,
                origin: self.origin,
                curator_clan_account_followed: X.Fm.Get().BIsLoaded()
                  ? X.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                  : void 0,
              };
            return this.InternalLoadSaleCuratorLists(
              w,
              k,
              "CCuratorListStore.LoadMyFollowedSaleCurationLists",
              c,
              o,
              L,
            );
          }
          async LoadAllSaleCurationLists(c, o, L) {
            if (this.m_mapEventGIDToLists.has(o))
              return this.m_mapEventGIDToLists.get(o);
            const w = H.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
              k = {
                clan_account_id: c.GetAccountID(),
                clan_event_gid: o,
                origin: self.origin,
              };
            return this.InternalLoadSaleCuratorLists(
              w,
              k,
              "CCuratorListStore.LoadAllSaleCurationLists",
              c,
              o,
              L,
            );
          }
          async InternalLoadSaleCuratorLists(c, o, L, w, k, J) {
            try {
              const K = await T().get(c, { params: o, cancelToken: J?.token });
              if (K?.data?.success == a.R) {
                const se = new Array();
                return (
                  (0, _.h5)(() => {
                    K.data.matches &&
                      K.data.matches.forEach((ne) => {
                        ne.multi_detail_lists.forEach((U) => {
                          this.m_mapListIDToClanAccount.set(
                            U.listid,
                            ne.clan_account_id,
                          ),
                            i(U),
                            l(ne.curation_language, U),
                            this.m_mapList.set(U.listid, U),
                            se.push(U);
                        });
                      }),
                      this.m_mapEventGIDToLists.set(k, se);
                  }),
                  se
                );
              }
            } catch (K) {
              const se = (0, F.H)(K);
              console.error(L + ": error on load: " + se.strErrorMsg, se);
            }
            return [];
          }
          static s_Singleton;
          static Get() {
            return (
              me.s_Singleton || (me.s_Singleton = new me()), me.s_Singleton
            );
          }
          constructor() {
            (0, _.Gn)(this);
            let c = (0, H.Tc)("curatorlistdata", "application_config");
            this.ValidateStoreDefault(c) &&
              (0, _.h5)(() => {
                c.forEach((o) => {
                  o.multi_detail_lists.forEach((L) => {
                    i(L),
                      l(o.curation_language, L),
                      this.m_mapList.set(L.listid, L);
                  });
                });
              });
          }
          ValidateStoreDefault(c) {
            const o = c;
            return o &&
              Array.isArray(o) &&
              o.length > 0 &&
              typeof o[0] == "object"
              ? typeof o[0].curation_language == "number" &&
                  o[0].multi_detail_lists &&
                  Array.isArray(o[0].multi_detail_lists) &&
                  typeof o[0].multi_detail_lists[0].listid == "string" &&
                  typeof o[0].multi_detail_lists[0].list_type == "number" &&
                  typeof o[0].multi_detail_lists[0].list_state == "number"
              : o && Array.isArray(o) && o.length == 0;
          }
        };
        n([_.sH], I.prototype, "m_mapList", 2);
        let A = I;
        function g(E, c) {
          const o = (0, W.CH)();
          return (
            (0, S.useEffect)(() => {
              if (A.Get().GetListDetails(c) || !E) return;
              const L = T().CancelToken.source();
              return (
                (async () => {
                  const k = await A.Get().LoadListDetails(E, c);
                  if (!L.token.reason)
                    if (k?.apps?.length) {
                      const J = [];
                      for (const K of k.apps) {
                        const se = K?.recommended_app?.appid;
                        se && J.push({ id: se, type: "game" });
                      }
                      (0, $.H2)(J, {
                        ...$.jy,
                        include_assets: !0,
                        include_release: !0,
                      }),
                        o();
                    } else console.error("Found no list data");
                })(),
                () => L.cancel("unmounting CuratorList")
              );
            }, [E, c, o]),
            A.Get().GetListDetails(c)
          );
        }
        function j(E) {
          const c = E && m.ac.GetClanInfoByClanAccountID(E),
            [o, L] = (0, S.useState)(!!c);
          return (
            (0, S.useEffect)(() => {
              if (o && E) {
                const w = d.b.InitFromClanID(E);
                m.ac.LoadClanInfoForClanSteamID(w).finally(() => {
                  L(!0);
                });
              }
            }, [o, E]),
            c
          );
        }
        function B(E) {
          return !!E?.sale_clan_event_gid && !!E?.sale_clan_steamid;
        }
        function G(E) {
          const c = (0, W.CH)(),
            o = B(E) ? E.sale_clan_event_gid : null,
            L = o && Y.O3.GetClanEventModel(o);
          return (
            (0, S.useEffect)(() => {
              if (L || !B(E)) return;
              const w = T().CancelToken.source();
              return (
                (async () => (
                  Y.O3.Init(),
                  await Y.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new d.b(E.sale_clan_steamid),
                    o,
                    0,
                  ),
                  !w.token.reason && c()
                ))(),
                () => w.cancel("unmounting CuratorList")
              );
            }, [E, o, L, c]),
            L
          );
        }
        function re(E) {
          const [c, o] = useState(null),
            L = G(E);
          return useEffect(() => o(L?.GetSaleFeaturedApps()), [L]), c;
        }
      },
      15901: (Q, Z, e) => {
        "use strict";
        e.d(Z, {
          AX: () => ae,
          H2: () => F,
          Li: () => H,
          S7: () => $,
          a9: () => N,
          jy: () => W,
          nt: () => u,
          sd: () => Y,
          tJ: () => R,
        });
        var t = e(24805),
          T = e(10349),
          _ = e(92025),
          S = e(99412),
          M = e(56062),
          a = e(6469),
          d = e(10142),
          m = e(24110),
          X = e(71742);
        function Y(n) {
          return d.A.Get().BIsStoreItemMissing(n.id, (0, T.SW)(n.type));
        }
        function $(n, s, D) {
          const y = new Array();
          return (
            n?.forEach((h) => y.push({ id: h, type: "game" })),
            s?.forEach((h) => y.push({ id: h, type: "sub" })),
            D?.forEach((h) => y.push({ id: h, type: "bundle" })),
            y
          );
        }
        function R(n) {
          return (
            (d.A.Get()
              .GetStoreItem(n.id, (0, T.SW)(n.type))
              ?.GetBestPurchaseOption()?.discount_pct ?? 0) > 0
          );
        }
        function u(n) {
          if (!m.f.Get().GetHomeView()?.localized) return !0;
          const s = d.A.Get().GetStoreItem(n.id, (0, T.SW)(n.type));
          return s
            ? a.Fm.Get().BIsAnyLanguageEnabled(
                s.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function F(n, s, D) {
          if (!n || n.length == 0) return [];
          const y = n.filter((l) => (0, _.fp)(l.type)).map((l) => l.id),
            h = n.filter((l) => l.type === "sub").map((l) => l.id),
            r = n.filter((l) => l.type === "bundle").map((l) => l.id);
          {
            const l = y.filter((g) => !d.A.Get().BHasApp(g, s)),
              I = h.filter((g) => !d.A.Get().BHasApp(g, s)),
              A = r.filter((g) => !d.A.Get().BHasApp(g, s));
            (l.length > 0 || I.length > 0 || A.length > 0) &&
              (await Promise.all([
                d.A.Get().QueueMultipleAppRequests(l, s),
                d.A.Get().QueueMultiplePackageRequests(I, s),
                d.A.Get().QueueMultipleBundleRequests(A, s),
              ]));
          }
          const i = new Set();
          r?.forEach((l) => {
            d.A.Get()
              .GetBundle(l)
              ?.GetIncludedAppIDs()
              .forEach((A) => i.add(A));
          }),
            h?.forEach((l) => {
              d.A.Get()
                .GetPackage(l)
                ?.GetIncludedAppIDs()
                .forEach((A) => i.add(A));
            });
          const f = Array.from(i).filter((l) => !d.A.Get().BHasApp(l, s));
          if (
            (f.length > 0 && (await d.A.Get().QueueMultipleAppRequests(f, s)),
            y.forEach((l) => i.add(l)),
            D)
          ) {
            const l = Array.from(i)
              .map((I) => {
                const g = d.A.Get().GetApp(I)?.GetParentAppID();
                return g ? (i.add(g), g) : null;
              })
              .filter((I) => I !== null)
              .filter((I) => !d.A.Get().BHasApp(I, s));
            l.length > 0 && (await d.A.Get().QueueMultipleAppRequests(l, s));
          }
          return Array.from(i).filter((l) => {
            const I = d.A.Get().GetApp(l);
            return I && !I.GetParentAppID();
          });
        }
        const W = {
          include_tag_count: 20,
          include_basic_info: !0,
          include_supported_languages: !0,
        };
        function H(n) {
          if (!n) return !0;
          const s = a.Fm.Get();
          if (
            ((0, X.wT)(s.BIsLoaded(), "Dynamic Store not loaded"),
            n.GetStoreItemType() == M.c6.qI)
          ) {
            const y = n.GetParentAppID();
            if (
              s.BIsGameIgnored(n.GetAppID()) ||
              (y !== void 0 && s.BIsGameIgnored(y))
            )
              return !0;
          }
          if (
            s.BExcludesContentDescriptor(n.GetContentDescriptorIDs()) ||
            s.BExcludeTagIDs(n.GetTagIDs()) ||
            n.GetAllCreatorClanIDs().some((y) => s.BIsIgnoringCurator(y))
          )
            return !0;
          if (m.f.Get().GetHomeView()?.localized) {
            const y = n.GetAllLanguagesWithSomeSupport();
            if (
              y.length > 0 &&
              !n.BHasSomeLanguageSupport(S.Bhc) &&
              !s.BIsAnyLanguageEnabled(y)
            )
              return !0;
          }
          return !1;
        }
        async function ae(n, s, D, y) {
          let h = 0,
            r = 0;
          const i = [];
          await F(n, t.Xh, s);
          for (const f of n) {
            const l = d.A.Get().GetStoreItem(f.id, (0, T.SW)(f.type));
            if (!l) {
              h++;
              continue;
            }
            const I = l
              .GetIncludedAppIDs()
              .map((A) => d.A.Get().GetApp(A))
              .filter((A) => !!A);
            if ((I.push(l), s)) {
              const A = new Set(
                  I.map((j) => j.GetParentAppID()).filter((j) => !!j),
                ),
                g = Array.from(A)
                  .map((j) => d.A.Get().GetApp(j))
                  .filter((j) => !!j);
              g && I.push(...g);
            }
            I.some(y || H)
              ? (r++, D && (a.Fm.Get().BIsStoreItemOwned(l) || D.push(f)))
              : i.push(f);
          }
          return i;
        }
        async function N(n, s, D, y, h, r, i) {
          let l = await ae(
            n,
            s,
            i,
            h
              ? (A) =>
                  !A ||
                  a.Fm.Get().BExcludesContentDescriptor(
                    A.GetContentDescriptorIDs(),
                  ) ||
                  a.Fm.Get().BExcludeTagIDs(A.GetTagIDs())
              : H,
          );
          const I = [];
          for (const A of l) {
            const g = d.A.Get().GetStoreItem(A.id, (0, T.SW)(A.type));
            if (!g) continue;
            const j = g?.GetIncludedAppIDsOrSelf();
            let B = !1;
            D && (B = B || j.every((G) => a.Fm.Get().BIsGameOwned(G))),
              y && (B = B || j.every((G) => a.Fm.Get().BIsGameWishlisted(G))),
              r && (B = B || j.every((G) => a.Fm.Get().BIsGameIgnored(G))),
              B ? i && i.push(A) : I.push(A);
          }
          return I;
        }
      },
      13532: (Q, Z, e) => {
        "use strict";
        e.d(Z, { l: () => R, r: () => $ });
        var t = e(7850),
          T = e(90626),
          _ = e(39239),
          S = e(36118),
          M = e(32608),
          a = e(36707),
          d = e(18210),
          m = e(70758),
          X = e.n(m),
          Y = e(1123);
        const $ = (u) => {
            const F = ["maxresdefault", "mqdefault", "default"],
              [W, H] = T.useState(0);
            T.useEffect(() => H(0), [u.video]);
            const ae = T.useRef(void 0);
            if (u.altImgWithFallback && u.altImgWithFallback.length > 0)
              return (0, t.jsx)(_.o, {
                className: u.className,
                srcs: u.altImgWithFallback,
              });
            if (u.altImg)
              return (0, t.jsx)("img", {
                src: u.altImg,
                className: u.className,
              });
            {
              const N =
                  "https://img.youtube.com/vi/" + u.video + "/" + F[W] + ".jpg",
                n = () => {
                  W + 1 < F.length && H(W + 1);
                },
                s = () => {
                  ae.current && ae.current.naturalHeight < 91 && n();
                };
              return (0, t.jsx)("img", {
                ref: ae,
                onLoad: s,
                onError: n,
                src: N,
                className: (0, a.A)(X().YoutubePreviewImage, u.className),
              });
            }
          },
          R = (u) => {
            const [F, W] = T.useState(!1);
            (0, M.VC)(!!u.preloadYoutubeScripts);
            const H = (0, Y.Rp)("youtube");
            if (!F || !H) {
              const ae = (N) => {
                u.onPlayerActivated && u.onPlayerActivated(),
                  W(!0),
                  N.stopPropagation(),
                  N.preventDefault();
              };
              return (0, t.jsxs)("div", {
                className: (0, a.A)(
                  "YoutubePreviewContainer",
                  X().YoutubePreviewImage,
                  u.imageClassnames,
                ),
                onClick: H ? ae : void 0,
                children: [
                  (0, t.jsx)($, {
                    className: "YoutubePreviewImage",
                    altImgWithFallback: u.altImgWithFallback,
                    altImg: u.altImg,
                    video: u.video,
                  }),
                  H &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", {
                          className: "YoutubePreviewPlay",
                          children: (0, t.jsx)(S.IOc, {}),
                        }),
                        (0, t.jsx)("div", {
                          className: "VideoHintText",
                          children: (0, d.we)(
                            "#EventCalendar_WatchYouTubeVideo",
                          ),
                        }),
                      ],
                    }),
                ],
              });
            } else
              return (0, t.jsx)(M.N1, {
                ...u,
                classnames: (0, a.A)(X().YoutubePlayer, u.classnames),
              });
          };
      },
      77243: (Q, Z, e) => {
        "use strict";
        e.r(Z),
          e.d(Z, { CuratorReviewListContainer: () => Ie, default: () => be });
        var t = e(7850),
          T = e(75844),
          _ = e(90626),
          S = e(43434),
          M = e(99412),
          a = e(24660),
          d = e(19298),
          m = e(43458),
          X = e(88743),
          Y = e(80702),
          $ = e(63063),
          R = e(48421),
          u = e(76559),
          F = e(83482),
          W = e(47689),
          H = e(41735),
          ae = e.n(H),
          N = e(3166),
          n = e(34592),
          s = e(72604);
        async function D(v, p) {
          const C =
              N.TS.STORE_BASE_URL + "contenthub/ajaxfilterappsbycontenthub",
            O = {
              hubtype: v.GetContentHubType(),
              category: v.GetContentHubCategory(),
              tagid: v.GetContentHubTag(),
              prune_list_optin_name: v.jsondata.prune_list_optin_name,
              optin_tagid: v.jsondata.optin_tagid,
              optin_prune_tagid: v.jsondata.optin_prune_tagid,
              optin_only: v.jsondata.optin_only,
              applist: p.sort().join(","),
            };
          let V = null;
          const b = new Set();
          try {
            const x = await ae().get(C, { params: O });
            if (x?.data?.success == s.R)
              return x.data.appids.forEach((z) => b.add(z)), b;
            V = (0, n.H)(x);
          } catch (x) {
            V = (0, n.H)(x);
          }
          return (
            console.error(
              "LoadContentHubFilteredApps failed: " + V?.strErrorMsg,
              V,
            ),
            b
          );
        }
        function y(v, p) {
          const [C, O] = (0, _.useState)(
              v?.BUsesContentHubForItemSource() ? new Set() : null,
            ),
            V = (0, W.m)("useFilteredAppViaContentHub");
          return (
            (0, _.useEffect)(() => {
              v?.BUsesContentHubForItemSource() &&
                !C &&
                D(v, p).then((b) => {
                  V.token.reason || O(b);
                });
            }, [C, V.token.reason, v, p]),
            C
          );
        }
        var h = e(8303),
          r = e(6469),
          i = e(10142),
          f = e(10349),
          l = e(84676),
          I = e(39567),
          A = e(40358),
          g = e(10999),
          j = e.n(g),
          B = e(36118),
          G = e(36707),
          re = e(70758);
        const E = "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
          c = new RegExp(E);
        function o(v) {
          const p = c.exec(v);
          return p && p.length > 1 ? p[1] : null;
        }
        function L(v) {
          const {
              posterURL: p,
              videoid: C,
              muted: O,
              autoplay: V,
              bIsClipID: b,
              time: x,
              width: z,
              height: te,
            } = v,
            [q, ee] = _.useState(!!p),
            oe = V == null || V == null ? !1 : V;
          if (q)
            return (0, t.jsxs)("div", {
              className: (0, G.A)(
                "YoutubePreviewContainer",
                re.YoutubePreviewImage,
                v.imageClassnames,
              ),
              onClick: () => ee(!1),
              children: [
                (0, t.jsx)("img", {
                  className: (0, G.A)(
                    "YoutubePreviewImage",
                    re.YoutubePreviewImage,
                  ),
                  src:
                    p ||
                    N.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, t.jsx)("div", {
                  className: "YoutubePreviewPlay",
                  children: (0, t.jsx)(B.IOc, {}),
                }),
              ],
            });
          let ie = (0, N.xv)().replace("https://", "");
          const pe = ie.indexOf("/");
          pe >= 0 && (ie = ie.substring(0, pe));
          let de = b
            ? `https://clips.twitch.tv/embed?clip=${C}`
            : `https://player.twitch.tv/?video=${C}`;
          return (
            (de += `&parent=${ie}&autoplay=${oe}&muted=${!!O}`),
            x && (de += `&time=${w(x)}`),
            (0, t.jsxs)("div", {
              className: (0, G.A)("YoutubePlayer", j().TwitchPlayer),
              children: [
                (0, t.jsx)("img", {
                  className: (0, G.A)(
                    "YoutubePreviewContainer",
                    re.YoutubePreviewImage,
                    v.imageClassnames,
                  ),
                  src:
                    N.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                }),
                (0, t.jsx)("iframe", {
                  src: de,
                  allowFullScreen: !0,
                  frameBorder: 0,
                  width: z || 460,
                  height: te || 300,
                }),
              ],
            })
          );
        }
        function w(v) {
          const p = Math.floor(v / 3600);
          v -= p * 60 * 60;
          const C = Math.floor(v / 60);
          return (v -= C * v), `${p}h${C}m${v}s`;
        }
        var k = e(15901),
          J = e(96117),
          K = e(85599),
          se = e(21659),
          ne = e(13532),
          U = e(18210),
          fe = e(53113),
          le = e(62014),
          P = e.n(le),
          ue = e(97442),
          ce = e(22584);
        function Le(v) {
          const { clanInfo: p } = v,
            { curator_link: C, curator_medium_avatar: O } = (0, N.Tc)(
              "curator_header",
              "application_config",
            );
          return (0, t.jsx)(d.Z, {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
            children: (0, t.jsxs)("div", {
              className: "page_content " + ce.HeaderContent,
              children: [
                (0, t.jsx)(ue.r, {
                  className: ce.BreadContainer,
                  crumbs: (0, N.Tc)("breadcrumbs", "application_config"),
                }),
                (0, t.jsxs)(d.Z, {
                  className: "list_header_area",
                  "flow-children": "row",
                  children: [
                    (0, t.jsx)("div", {
                      className: "curator_avatar_image",
                      children: (0, t.jsx)(a.Ii, {
                        href: C,
                        children: (0, t.jsx)("img", {
                          className: "curator_avatar",
                          src: O,
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "curator_details",
                      children: (0, t.jsx)(a.Ii, {
                        className: "pageheader curator_name",
                        href: C,
                        children: (0, U.we)(
                          "#SteamCurator_List_Header_List",
                          p.group_name,
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var Pe = e(51079),
          ve = e(21721),
          _e = e(60001),
          Se = e(60480);
        function Re(v) {
          return (0, t.jsx)(Ie, { listid: v.listid });
        }
        const be = Re;
        function Ie(v) {
          const p = parseInt(
              (0, N.Tc)("curator_account_id", "application_config"),
            ),
            C = (0, h.m1)(p),
            O = (0, h.ME)(C?.clanSteamID, v.listid);
          if (((0, I.vb)(N.TS.LANGUAGE), !O)) return null;
          const V = C.is_ogg,
            b = C.is_creator_home && !C.is_ogg,
            x = V
              ? "#SteamCurator_MoreDLC"
              : b
                ? "#SteamCurator_MoreProducts"
                : "#SteamCurator_MoreReviews";
          return (0, t.jsxs)(Pe.Ay, {
            feature: "curatorlistcapsule",
            children: [
              (0, t.jsx)(Le, { clanInfo: C }),
              (0, t.jsx)("div", {
                className: "page_content_ctn grayscale",
                children: (0, t.jsx)("div", {
                  className: "page_content",
                  children: (0, t.jsxs)("div", {
                    className: P().CuratorListCtn,
                    children: [
                      (0, t.jsx)(je, { listDetails: O }),
                      (0, h.cc)(O)
                        ? (0, t.jsx)(Te, { listDetails: O })
                        : (0, t.jsx)(ye, {
                            listDetails: O,
                            rgListItems: O.apps,
                          }),
                      (0, t.jsxs)("div", {
                        className: P().CuratorMoreCtn,
                        children: [
                          (0, t.jsx)("h2", {
                            children: (0, U.we)(
                              "#SteamCurator_ExploreMoreTitle",
                            ),
                          }),
                          (0, t.jsx)(a.Ii, {
                            href: C.vanity_url,
                            children: (0, U.PP)(x, C.group_name),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Te(v) {
          const { listDetails: p } = v,
            [C, O] = (0, _.useState)(null),
            V = new u.b(p.sale_clan_steamid),
            { eventModel: b } = (0, R.B9)(
              V.GetAccountID(),
              p.sale_clan_event_gid,
            ),
            x = (0, _.useMemo)(
              () => (p.apps || []).map((te) => te.recommended_app.appid),
              [p],
            ),
            z = y(b, x);
          return (
            (0, _.useEffect)(() => {
              if (b)
                if (b.BUsesContentHubForItemSource())
                  z &&
                    O(p.apps?.filter((te) => z.has(te.recommended_app?.appid)));
                else {
                  const te = b.GetSaleFeaturedApps();
                  O(p.apps?.filter((q) => te.has(q.recommended_app?.appid)));
                }
            }, [p, b, z]),
            (0, t.jsx)(ye, { listDetails: p, rgListItems: C })
          );
        }
        function ye(v) {
          const { listDetails: p, rgListItems: C } = v,
            [O, V] = (0, _.useState)(0),
            [b, x] = (0, _.useState)(null),
            z = (0, W.m)("CuratorAppListDisplay");
          if (
            (_.useEffect(() => {
              C &&
                (V(C?.length || 0),
                r.Fm.Get()
                  .HintLoad()
                  .then(() => {
                    const q = C.map((ee) => ee.recommended_app.appid);
                    i.A.Get()
                      .QueueMultipleAppRequests(q, k.jy)
                      .then(() => {
                        z.token.reason ||
                          x(
                            C.filter(
                              (ee) =>
                                !(0, k.Li)(
                                  i.A.Get().GetApp(ee.recommended_app.appid),
                                ),
                            ),
                          );
                      })
                      .catch(() => {
                        z.token.reason || x([]);
                      });
                  }));
            }, [C, z]),
            b == null)
          )
            return (0, t.jsx)(K.t, {
              string: (0, U.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const te = p.list_type == h.QV;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(d.Z, {
                className: (0, G.A)(P().CuratorList, te && P().CuratorListGrid),
                "flow-children": "grid",
                children: b.map((q, ee) =>
                  (0, t.jsx)(
                    Be,
                    { item: q, listDetails: p, bAutoFocus: ee == 0 },
                    "rec_" + q.recommended_app.appid,
                  ),
                ),
              }),
              100 > b.length &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("span", {
                      children: [
                        (0, U.Yp)("#SteamCurator_Hidden", O - b.length),
                        " ",
                      ],
                    }),
                    (0, t.jsx)(a.Ii, {
                      href: N.TS.STORE_BASE_URL + "account/preferences/",
                      children: (0, U.we)("#SteamCurator_Setting"),
                    }),
                  ],
                }),
            ],
          });
        }
        function je(v) {
          const { listDetails: p } = v,
            C = (0, h.fq)(p),
            O = (0, N.Tc)("showlisttitle", "application_config"),
            V = (0, N.Tc)("titleareaheight", "application_config"),
            b =
              p.list_jsondata.youtube_link &&
              (0, m.XU)(p.list_jsondata.youtube_link),
            x = p.list_jsondata.youtube_link && o(p.list_jsondata.youtube_link),
            z = (0, M.sfN)(N.TS.LANGUAGE),
            te = U.NT.GetWithFallback(p.localized_flat_title, z),
            q = U.NT.GetWithFallback(p.localized_flat_blurb, z),
            ee = U.NT.GetWithFallback(p.localized_flat_link, z),
            oe =
              C &&
              C.GetImageURL(
                (0, se.c5)() ? "product_mobile_banner" : "product_banner",
                z,
              );
          return (0, t.jsxs)("div", {
            className: P().TopReviewInfo,
            children: [
              !!oe &&
                (0, t.jsx)(a.Ii, {
                  href: (0, Se.n4)(C),
                  children: (0, t.jsx)("img", {
                    className: P().SaleBanner,
                    src: oe,
                  }),
                }),
              O &&
                te &&
                (0, t.jsx)("div", { className: P().Title, children: te }),
              O &&
                q &&
                (0, t.jsx)("div", { className: P().Blurb, children: q }),
              V > 0 && (0, t.jsx)("div", { style: { height: V } }),
              b &&
                (0, t.jsx)("div", {
                  className: P().VideoReviewCtn,
                  children: (0, t.jsx)(ne.l, {
                    video: b.strVideoID,
                    startSeconds: b.nStartSeconds,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: P().YouTubePreviewImage,
                  }),
                }),
              !!x &&
                (0, t.jsx)("div", {
                  className: P().VideoReviewCtn,
                  children: (0, t.jsx)(L, {
                    videoid: x,
                    posterURL: "",
                    imageClassnames: P().YouTubePreviewImage,
                  }),
                }),
              ee && (0, t.jsx)(Ae, { url: ee }),
            ],
          });
        }
        const Be = (0, T.PA)((v) => {
          const { item: p, listDetails: C, bAutoFocus: O } = v,
            V = parseInt((0, N.Tc)("curator_account_id", "application_config")),
            b = (0, h.m1)(V),
            [x] = (0, l.t7)(p?.recommended_app?.appid, {
              include_assets: !0,
              include_release: !0,
            }),
            z = (0, _.useMemo)(
              () => ({
                id: x?.GetID(),
                type: (0, f._4)(x?.GetStoreItemType(), x?.GetAppType()),
              }),
              [x],
            ),
            te = (0, X.rt)(z);
          if (!b || !x) return null;
          const {
              appid: q,
              link_url: ee,
              blurb: oe,
              time_recommended: ie,
              recommendation_state: pe,
            } = p.recommended_app,
            de = b.is_creator_home && !b.is_ogg,
            xe = C.list_jsondata.app_data?.[q],
            he = ee && (0, m.XU)(ee),
            ge = ee && o(ee),
            Ee = oe != h.F6 && oe,
            Ce = x.BHasDemo(),
            Me = xe?.img_url,
            De = `curator_clanid=${b.clanAccountID}&curator_listid=${C.listid}`,
            Fe = x.GetStorePageURL() + "/?curator_clanid=" + b.clanAccountID;
          return (0, t.jsxs)(d.Z, {
            className: P().CuratorReview,
            autoFocus: O,
            children: [
              (0, t.jsx)("div", {
                className: P().CapsuleCtn,
                children:
                  he || ge
                    ? (0, t.jsx)(Ge, {
                        strVideoID: he?.strVideoID || ge,
                        nStartSeconds: he?.nStartSeconds,
                        id: te,
                        strImgOverrideUrl: Me,
                        bShowDemoButton: Ce,
                        strExtraParams: De,
                        bTwitchVideo: !!ge,
                      })
                    : (0, t.jsx)(J.W, {
                        imageType: "header",
                        capsule: z,
                        bShowDemoButton: Ce,
                        strExtraParams: De,
                        bPreferAssetWithoutOverride: !1,
                      }),
              }),
              (0, t.jsxs)("div", {
                className: P().ReviewTextSection,
                children: [
                  (0, t.jsx)("a", {
                    className: P().GameTitle,
                    href: Fe,
                    children: x.GetName(),
                  }),
                  (0, t.jsxs)("div", {
                    className: P().RecommendationTypeAndDate,
                    children: [
                      (0, t.jsx)(Oe, { type: pe }),
                      (0, t.jsx)("div", {
                        className: P().ReviewDate,
                        children:
                          de || !ie
                            ? (0, U.we)(
                                "#EventModTile_ReleaseDate",
                                x.GetFormattedSteamReleaseDate(),
                              )
                            : (0, U.$z)(ie),
                      }),
                    ],
                  }),
                  !!Ee &&
                    (0, t.jsx)("div", {
                      className: P().ReviewBlurb,
                      children: (0, U.we)("#SteamCurator_ReviewTextQuoted", Ee),
                    }),
                  !!ee && (0, t.jsx)(Ae, { url: ee }),
                ],
              }),
            ],
          });
        });
        function Ge(v) {
          const {
              strVideoID: p,
              nStartSeconds: C,
              id: O,
              strImgOverrideUrl: V,
              bShowDemoButton: b,
              strExtraParams: x,
              bTwitchVideo: z,
            } = v,
            te = 300,
            { data: q } = (0, A.lv)(O);
          return (0, t.jsxs)("div", {
            className: P().YouTubeCapsule,
            children: [
              (0, t.jsx)("div", {
                className: P().YouTubeCtn,
                children: z
                  ? (0, t.jsx)(L, {
                      videoid: p,
                      posterURL: q ? (0, ve.b0)(q, "header") : void 0,
                      imageClassnames: P().YouTubePreviewImage,
                      autoplay: !0,
                    })
                  : (0, t.jsx)(ne.l, {
                      video: p,
                      startSeconds: C,
                      autoplay: !0,
                      autopause: !0,
                      showFullscreenBtn: !0,
                      controls: !0,
                      preloadYoutubeScripts: !0,
                      playsInline: !0,
                      imageClassnames: P().YouTubePreviewImage,
                      altImg: V,
                    }),
              }),
              (0, t.jsxs)("div", {
                className: P().YouTubeCapsuleBottomBar,
                children: [
                  (0, t.jsx)("div", {
                    className: P().GameImageCtn,
                    children: (0, t.jsx)(Y.Q, {
                      id: O,
                      bShowDemoButton: b,
                      nDelayShowMs: te,
                      strExtraParams: x,
                      hoverProps: {
                        direction: "overlay-center",
                        style: { minWidth: "300px" },
                      },
                      children: (0, t.jsx)("img", {
                        className: P().GameImage,
                        src: q ? (0, ve.b0)(q, "library_capsule") : void 0,
                      }),
                    }),
                  }),
                  (0, t.jsx)($.q, { id: O, strClassName: P().FullWidth }),
                ],
              }),
            ],
          });
        }
        function Oe(v) {
          switch (v.type) {
            case _e.tV.$D:
              return (0, t.jsx)("div", {
                className: P().Recommended,
                children: (0, U.we)("#SteamCurator_Recommended"),
              });
            case _e.tV.qP:
              return (0, t.jsx)("div", {
                className: P().NotRecommended,
                children: (0, U.we)("#SteamCurator_NotRecommended"),
              });
            case _e.tV.y8:
              return (0, t.jsx)("div", {
                className: P().Informational,
                children: (0, U.we)("#SteamCurator_Informational"),
              });
            default:
              return null;
          }
        }
        function Ae(v) {
          let p = (0, F.OZ)(v.url);
          (0, S.p)(p) &&
            (p =
              (N.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
              N.TS.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              p);
          const C = (0, fe.wm)(v.url),
            O = (0, m.Lg)(v.url);
          return (0, t.jsxs)("div", {
            className: P().FullReviewLink,
            children: [
              (0, t.jsx)(a.Ii, {
                className: P().FullReviewAnchor,
                href: p,
                rel: "noopener nofollow",
                preferredFocus: !1,
                autoFocus: !1,
                children: (0, U.we)(
                  O
                    ? "#SteamCurator_WatchFullReview"
                    : "#SteamCurator_ReadFullReview",
                ),
              }),
              (0, t.jsx)("div", {
                className: P().FullReviewDomain,
                children: (0, U.we)(
                  "#SteamCurator_ReviewLinkHostnameBracketed",
                  C,
                ),
              }),
            ],
          });
        }
      },
      2108: (Q) => {
        Q.exports = { BreadContainer: "YaL4BAoqywnKnb5jbU_il" };
      },
      10999: (Q) => {
        Q.exports = {
          VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
          YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
          TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
        };
      },
      70758: (Q) => {
        Q.exports = {
          YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
          YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
        };
      },
      62014: (Q) => {
        Q.exports = {
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
      22584: (Q) => {
        Q.exports = {
          BreadContainer: "GkVFIKIAijTGzfSc4BEQl",
          HeaderContent: "_2nPcyDvQVywsCXSLbgnUQp",
        };
      },
      17083: (Q, Z, e) => {
        "use strict";
        e.d(Z, { N_: () => H, k2: () => y });
        var t = e(92757),
          T = e(42891),
          _ = e(90626),
          S = e(29248),
          M = e(58584),
          a = e(81115),
          d = e(68841),
          m = (function (r) {
            (0, T.A)(i, r);
            function i() {
              for (
                var l, I = arguments.length, A = new Array(I), g = 0;
                g < I;
                g++
              )
                A[g] = arguments[g];
              return (
                (l = r.call.apply(r, [this].concat(A)) || this),
                (l.history = (0, S.zR)(l.props)),
                l
              );
            }
            var f = i.prototype;
            return (
              (f.render = function () {
                return _.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              i
            );
          })(_.Component),
          X = (function (r) {
            (0, T.A)(i, r);
            function i() {
              for (
                var l, I = arguments.length, A = new Array(I), g = 0;
                g < I;
                g++
              )
                A[g] = arguments[g];
              return (
                (l = r.call.apply(r, [this].concat(A)) || this),
                (l.history = (0, S.TM)(l.props)),
                l
              );
            }
            var f = i.prototype;
            return (
              (f.render = function () {
                return _.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              i
            );
          })(_.Component),
          Y = function (i, f) {
            return typeof i == "function" ? i(f) : i;
          },
          $ = function (i, f) {
            return typeof i == "string" ? (0, S.yJ)(i, null, null, f) : i;
          },
          R = function (i) {
            return i;
          },
          u = _.forwardRef;
        typeof u > "u" && (u = R);
        function F(r) {
          return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
        }
        var W = u(function (r, i) {
            var f = r.innerRef,
              l = r.navigate,
              I = r.onClick,
              A = (0, a.A)(r, ["innerRef", "navigate", "onClick"]),
              g = A.target,
              j = (0, M.A)({}, A, {
                onClick: function (G) {
                  try {
                    I && I(G);
                  } catch (re) {
                    throw (G.preventDefault(), re);
                  }
                  !G.defaultPrevented &&
                    G.button === 0 &&
                    (!g || g === "_self") &&
                    !F(G) &&
                    (G.preventDefault(), l());
                },
              });
            return (
              R !== u ? (j.ref = i || f) : (j.ref = f), _.createElement("a", j)
            );
          }),
          H = u(function (r, i) {
            var f = r.component,
              l = f === void 0 ? W : f,
              I = r.replace,
              A = r.to,
              g = r.innerRef,
              j = (0, a.A)(r, ["component", "replace", "to", "innerRef"]);
            return _.createElement(t.XZ.Consumer, null, function (B) {
              B || (0, d.A)(!1);
              var G = B.history,
                re = $(Y(A, B.location), B.location),
                E = re ? G.createHref(re) : "",
                c = (0, M.A)({}, j, {
                  href: E,
                  navigate: function () {
                    var L = Y(A, B.location),
                      w = (0, S.AO)(B.location) === (0, S.AO)($(L)),
                      k = I || w ? G.replace : G.push;
                    k(L);
                  },
                });
              return (
                R !== u ? (c.ref = i || g) : (c.innerRef = g),
                _.createElement(l, c)
              );
            });
          });
        if (0) var ae, N;
        var n = function (i) {
            return i;
          },
          s = _.forwardRef;
        typeof s > "u" && (s = n);
        function D() {
          for (var r = arguments.length, i = new Array(r), f = 0; f < r; f++)
            i[f] = arguments[f];
          return i
            .filter(function (l) {
              return l;
            })
            .join(" ");
        }
        var y = s(function (r, i) {
          var f = r["aria-current"],
            l = f === void 0 ? "page" : f,
            I = r.activeClassName,
            A = I === void 0 ? "active" : I,
            g = r.activeStyle,
            j = r.className,
            B = r.exact,
            G = r.isActive,
            re = r.location,
            E = r.sensitive,
            c = r.strict,
            o = r.style,
            L = r.to,
            w = r.innerRef,
            k = (0, a.A)(r, [
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
          return _.createElement(t.XZ.Consumer, null, function (J) {
            J || (0, d.A)(!1);
            var K = re || J.location,
              se = $(Y(L, K), K),
              ne = se.pathname,
              U = ne && ne.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              fe = U
                ? (0, t.B6)(K.pathname, {
                    path: U,
                    exact: B,
                    sensitive: E,
                    strict: c,
                  })
                : null,
              le = !!(G ? G(fe, K) : fe),
              P = typeof j == "function" ? j(le) : j,
              ue = typeof o == "function" ? o(le) : o;
            le && ((P = D(P, A)), (ue = (0, M.A)({}, ue, g)));
            var ce = (0, M.A)(
              {
                "aria-current": (le && l) || null,
                className: P,
                style: ue,
                to: se,
              },
              k,
            );
            return (
              n !== s ? (ce.ref = i || w) : (ce.innerRef = w),
              _.createElement(H, ce)
            );
          });
        });
        if (0) var h;
      },
    },
  ]);
})();
