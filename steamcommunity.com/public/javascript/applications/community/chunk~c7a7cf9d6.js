/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [3584],
    {
      24805: (Y, V, n) => {
        "use strict";
        n.d(V, { Xh: () => G, cU: () => j, tf: () => U, wl: () => b });
        var A = n(99412),
          H = n(18735),
          g = n(44420),
          N = n(6469),
          W = n(10142),
          l = n(29543),
          D = n(3166),
          x = Object.defineProperty,
          w = (d, s, y) =>
            s in d
              ? x(d, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: y,
                })
              : (d[s] = y),
          v = (d, s, y) => w(d, typeof s != "symbol" ? s + "" : s, y);
        const G = {
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
        class j {
          constructor() {
            v(this, "m_setAlreadyAdded", new Set());
          }
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
        const b = 4;
        function U(d, s, y, C, B, c) {
          var _;
          const u = new Array(),
            E = new Array(),
            I = new Array(),
            S = new Array();
          if (!d || d.length == 0) return u;
          const z = [
            l.by.k_RejectSupportedLanguage,
            l.by.k_RejectAlreadyDisplayed,
            l.by.k_RejectNoTrailer,
          ];
          for (let L of d) {
            let F = L.id,
              J = l.by.k_NotRejected;
            switch (L.item_type) {
              case "sub":
                const Z = W.A.Get().GetPackage(F);
                if (
                  ((_ = Z == null ? void 0 : Z.GetIncludedAppIDs()) == null
                    ? void 0
                    : _.length) !== 1
                ) {
                  J = m(F, s, C, !0);
                  break;
                }
                F = Z.GetIncludedAppIDs()[0];
              case "app":
                J = O(F, s, y, C, !0);
                break;
              case "bundle":
                J = f(F, s, C, !0);
                break;
            }
            if (
              (J == l.by.k_NotRejected
                ? ((L.rejected = l.by.k_NotRejected),
                  u.push({ ...L, priority: 1 }))
                : z.includes(J)
                  ? ((L.rejected = l.by.k_NotRejected), E.push(L))
                  : ((L.rejected = J),
                    J == l.by.k_RejectIgnoredGame ? I.push(L) : S.push(L)),
              u.length > B)
            )
              break;
          }
          return (
            u.length < B &&
              (T(u, E, c, 2),
              u.length < c &&
                s.enforce_minimum &&
                (T(u, I, c, 3), T(u, S, c, b))),
            u
          );
        }
        function T(d, s, y, C) {
          for (let B = 0; d.length < y && B < s.length; ++B)
            d.push({ ...s[B], priority: C });
        }
        function i(d, s) {
          var y, C, B, c;
          const _ = N.Fm.Get();
          if (
            s.only_current_platform &&
            _.BHasPlatformPreferenceSet() &&
            !(
              (((y = d.GetPlatforms()) == null ? void 0 : y.windows) &&
                _.BIsPreferredPlatform("win")) ||
              (((C = d.GetPlatforms()) == null ? void 0 : C.mac) &&
                _.BIsPreferredPlatform("mac")) ||
              (((B = d.GetPlatforms()) == null ? void 0 : B.steamos_linux) &&
                _.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
          if (!s.prepurchase && d.BIsComingSoon())
            return l.by.k_RejectNoComingSoon;
          const u = d.GetPlatforms();
          return !s.virtual_reality &&
            u &&
            u.vr_support &&
            u.vr_support.vrhmd_only
            ? l.by.k_RejectNoVR
            : (c = d.GetAllCreatorClanIDs()) != null &&
                c.some((E) => _.BIsIgnoringCurator(E))
              ? l.by.k_RejectCreatorClan
              : l.by.k_NotRejected;
        }
        function a(d, s) {
          var y;
          if (s.localized) {
            const C = (0, A.sfN)(D.TS.LANGUAGE);
            if (
              !(
                (y = d.GetAllLanguagesWithSomeSupport()) != null &&
                y.includes(C)
              )
            )
              return l.by.k_RejectSupportedLanguage;
          }
          return l.by.k_NotRejected;
        }
        function O(d, s, y, C, B) {
          const c = W.A.Get().GetApp(d);
          if (!c) return l.by.k_RejectNotLoaded;
          const _ = i(c, s);
          if (_ != l.by.k_NotRejected) return _;
          const u = N.Fm.Get();
          if (u.BIsGameIgnored(d)) return l.by.k_RejectIgnoredGame;
          if (u.BExcludeTagIDs(c.GetTagIDs()))
            return l.by.k_RejectIgnoreGameTags;
          if (u.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
            return l.by.k_RejectIgnoreContentDescriptors;
          if (!s.early_access && c.BIsEarlyAccess())
            return l.by.k_RejectEarlyAccess;
          const E = c.GetAppType();
          if (!s.software && E == g.uE.Sv) return l.by.k_RejectSoftware;
          if (s.games_already_in_library && u.BIsGameOwned(d))
            return l.by.k_RejectInLibrary;
          if (s.games_not_in_library && !u.BIsGameOwned(d))
            return l.by.k_RejectNotInLibrary;
          if (!s.video && [g.uE.Wz, g.uE.gQ, g.uE.ID].includes(E))
            return l.by.k_RejectVideo;
          if (s.has_discount) {
            const I = c.GetBestPurchaseOption();
            if (!I || !I.discount_pct) return l.by.k_RejectNoDiscount;
          }
          return y != "adultonly" &&
            s.no_ao_content &&
            (c.HasContentDescriptorID(H.u7) || c.HasContentDescriptorID(H.T4))
            ? l.by.k_RejectAO
            : E == g.uE.ue &&
                s.games_already_in_library &&
                u.BIsGameOwned(c.GetParentAppID() || 0)
              ? l.by.k_RejectInLibrary
              : B
                ? (E == g.uE.ue && C.BHasAppID(c.GetParentAppID() || 0)) ||
                  C.BHasAppID(d)
                  ? l.by.k_RejectAlreadyDisplayed
                  : s.has_trailer && !c.BHasTrailers(!1)
                    ? l.by.k_RejectNoTrailer
                    : a(c, s)
                : l.by.k_NotRejected;
        }
        function o(d, s) {
          const y = N.Fm.Get();
          let C = !1;
          for (let B of d) {
            if (y.BIsGameIgnored(B)) return l.by.k_RejectIgnoredGame;
            y.BIsGameOwned(B) && (C = !0);
          }
          return s.games_not_in_library && C
            ? l.by.k_RejectInLibrary
            : s.games_not_in_library && !C
              ? l.by.k_RejectNotInLibrary
              : l.by.k_NotRejected;
        }
        function m(d, s, y, C) {
          const B = W.A.Get().GetPackage(d);
          if (!B) return l.by.k_RejectNotLoaded;
          const c = i(B, s);
          if (c != l.by.k_NotRejected) return c;
          const _ = o(B.GetIncludedAppIDs(), s);
          if (_ != l.by.k_NotRejected) return _;
          const u = N.Fm.Get();
          return s.games_already_in_library && u.BOwnsPackage(d)
            ? l.by.k_RejectInLibrary
            : u.BIsPackageIgnored(d)
              ? l.by.k_RejectIgnoredGame
              : C
                ? y.BHasPackageID(d)
                  ? l.by.k_RejectAlreadyDisplayed
                  : a(B, s)
                : l.by.k_NotRejected;
        }
        function f(d, s, y, C) {
          const B = W.A.Get().GetBundle(d);
          if (!B) return l.by.k_RejectNotLoaded;
          const c = i(B, s);
          if (c != l.by.k_NotRejected) return c;
          const _ = o(B.GetIncludedAppIDs(), s);
          return _ != l.by.k_NotRejected
            ? _
            : C
              ? y.BHasBundleID(d)
                ? l.by.k_RejectAlreadyDisplayed
                : a(B, s)
              : l.by.k_NotRejected;
        }
      },
      24110: (Y, V, n) => {
        "use strict";
        n.d(V, { f: () => x });
        var A = n(71742);
        function H(w) {
          (0, A.wT)(!0, "Unexpected code running in SSR Server: " + w);
        }
        var g = n(3166),
          N = Object.defineProperty,
          W = (w, v, G) =>
            v in w
              ? N(w, v, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: G,
                })
              : (w[v] = G),
          l = (w, v, G) => W(w, typeof v != "symbol" ? v + "" : v, G);
        const D = class le {
          constructor() {
            l(this, "m_HomeView");
            const v = (0, g.Tc)("home_view_setting", "application_config");
            this.ValidateHomeViewData(v) && this.SetHomeViewSetting(v);
            const G = (0, g.Tc)(
              "home_view_setting_override",
              "application_config",
            );
            this.ValidateHomeViewDataOverride(G) &&
              this.SetHomeViewSettingOverride(G);
          }
          BHasHomeView() {
            return !!this.m_HomeView;
          }
          GetHomeView() {
            var v;
            return (v = this.m_HomeView) == null ? void 0 : v.home;
          }
          static Get() {
            return (
              le.s_globalSingletonStore ||
                (H("CHomeViewStore.s_globalSingletonStore"),
                (le.s_globalSingletonStore = new le())),
              le.s_globalSingletonStore
            );
          }
          ValidateHomeViewData(v) {
            const G = v;
            return (
              G &&
              typeof G.home == "object" &&
              typeof G.main_cluster == "object"
            );
          }
          SetHomeViewSetting(v) {
            this.m_HomeView = v;
          }
          ValidateHomeViewDataOverride(v) {
            const G = v;
            return (
              G &&
              (!G.all || typeof G.all == "object") &&
              (!G.maincap || typeof G.maincap == "object")
            );
          }
          SetHomeViewSettingOverride(v) {
            this.m_HomeView
              ? (this.m_HomeView.home = {
                  ...this.m_HomeView.home,
                  ...(v == null ? void 0 : v.all),
                  ...(v == null ? void 0 : v.maincap),
                })
              : (this.m_HomeView = {
                  home: {
                    ...(v == null ? void 0 : v.all),
                    ...(v == null ? void 0 : v.maincap),
                  },
                });
          }
        };
        l(D, "s_globalSingletonStore");
        let x = D;
      },
      98241: (Y, V, n) => {
        "use strict";
        n.d(V, { dP: () => _e, v0: () => ce, Zr: () => de });
        var A = n(41735),
          H = n.n(A),
          g = n(14947),
          N = n(19367),
          W = n.n(N),
          l = n(72604),
          D = n(49789),
          x = n(42888),
          w = n(76559),
          v = n(7638),
          G = n(77495),
          j = n(10142),
          b = n(15901),
          U = n(71742),
          T = n(34592),
          i = n(27066),
          a = n(18210),
          O = n(3166),
          o = n(6469),
          m = n(63694),
          f = n(81673),
          d = ((h) => (
            (h.Default = "default"),
            (h.Upcoming = "upcoming"),
            (h.Featured = "featured"),
            (h.Press = "press"),
            (h.Steam = "steam"),
            (h.Halloween = "halloween"),
            (h.Dev_Sales = "sales"),
            (h.Dev_All = "all"),
            (h.Dev_AssociatedPress = "associated_press"),
            h
          ))(d || {});
        const s = new Map();
        function y(h) {
          return s.size == 0 && C(), s.get(h);
        }
        function C() {
          const h = GetNewsHubBasePath();
          s.set("default", {
            id: "default",
            strUrl: `${h}/`,
            strName: Localize("#EventCalendar_NewsChannel_YourNews"),
            strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            strHeaderTitle: Localize(
              "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
            ),
          }),
            s.set("upcoming", {
              id: "upcoming",
              strUrl: `${h}/?upcoming=1`,
              strName: Localize("#EventCalendar_NewsChannel_Upcoming"),
              strShortName: Localize(
                "#EventCalendar_NewsChannel_UpcomingShort",
              ),
              strSubtitle: Localize("#EventCalendar_NewsChannel_Personalized"),
            }),
            s.set("featured", {
              id: "featured",
              strUrl: `${h}/collection/featured/`,
              strName: Localize("#EventCalendar_NewsChannel_Featured"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_TopSellers"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Featured_HeaderTitle",
              ),
            }),
            s.set("press", {
              id: "press",
              strUrl: `${h}/collection/press/`,
              strName: Localize("#EventCalendar_NewsChannel_Press"),
              strHeaderTitle: Localize("#EventCalendar_Collection_News_Title"),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_News_Subtitle",
              ),
            }),
            s.set("steam", {
              id: "steam",
              strUrl: `${h}/collection/steam/`,
              strName: Localize("#EventCalendar_NewsChannel_Steam"),
              strSubtitle: Localize("#EventCalendar_NewsChannel_SteamSubtitle"),
              strHeaderTitle: Localize(
                "#EventCalendar_NewsChannel_Steam_HeaderTitle",
              ),
            }),
            s.set("halloween", {
              id: "halloween",
              strUrl: `${h}/collection/halloween/`,
              strName: Localize("#EventCalendar_NewsChannel_Halloween"),
              strSubtitle: Localize(
                "#EventCalendar_NewsChannel_HalloweenSubtitle",
              ),
              strHeaderTitle: Localize(
                "#EventCalendar_Collection_Halloween_Title",
              ),
              strHeaderSubtitle: Localize(
                "#EventCalendar_Collection_Halloween_Subtitle",
              ),
            }),
            s.set("sales", {
              id: "sales",
              strUrl: `${h}/collection/sales/`,
              strName: Localize("#EventCalendar_NewsChannel_AllSales"),
            }),
            UserConfig.is_support &&
              (s.set("all", {
                id: "all",
                strUrl: `${h}/collection/all/`,
                strName: Localize("#EventCalendar_NewsChannel_All"),
                bIsValveOnly: !0,
              }),
              s.set("associated_press", {
                id: "associated_press",
                strUrl: `${h}/collection/associated_press/`,
                strName: Localize("#EventCalendar_NewsChannel_AssociatedPress"),
                bIsValveOnly: !0,
              }));
        }
        var B = n(7582),
          c = n(74618),
          _ = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          E = (h, e, t) =>
            e in h
              ? _(h, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (h[e] = t),
          I = (h, e, t, r) => {
            for (
              var p = r > 1 ? void 0 : r ? u(e, t) : e, M = h.length - 1, P;
              M >= 0;
              M--
            )
              (P = h[M]) && (p = (r ? P(e, t, p) : P(p)) || p);
            return r && p && _(e, t, p), p;
          },
          S = (h, e, t) => E(h, typeof e != "symbol" ? e + "" : e, t);
        const z = 2500;
        function L(h, e, t, r) {
          const p = "section-" + e,
            M = t >= h;
          return {
            strId: p,
            strSectionLabel: e,
            rtSectionStart: t,
            rtSectionEnd: r,
            bIsFutureSection: M,
            nRenderedHeight: z,
            nTopOffset: 0,
          };
        }
        class F {
          constructor(e, t) {
            S(this, "m_nForwardStuckCount", 0),
              S(this, "m_nBackwardStuckCount", 0),
              S(this, "m_mapCalendarAppsByID", new Map()),
              S(this, "m_mapCalendarClansByID", new Map()),
              S(this, "m_mapCalendarEventsByGid", new Map()),
              S(this, "m_rgSortedCalendarEvents", new Array()),
              S(this, "m_visibilityStore"),
              S(this, "m_currentView", g.sH.box(void 0)),
              S(this, "m_bFinishedSearchingForward", !1),
              S(this, "m_bFinishedSearchingBackward", !1),
              S(this, "m_rgCalendarSections", []),
              S(this, "m_rgFutureSections", []),
              S(this, "m_dtInitTime"),
              S(this, "m_forwardRequestInFlight", null),
              S(this, "m_backwardRequestInFlight", null),
              S(this, "m_key"),
              S(this, "m_collectionMetaData"),
              (0, g.Gn)(this),
              (this.m_key = e),
              (this.m_visibilityStore = new f.vJ(t)),
              o.Fm.Get().HintLoad();
          }
          GetNumEventsLoaded() {
            return this.m_mapCalendarEventsByGid.size;
          }
          BIsGlobalCalendar() {
            return (
              !this.m_key.appids &&
              !this.m_key.clanaccountids &&
              !this.m_key.collectionid &&
              !this.m_key.saleid
            );
          }
          BIsShowingFeaturedFeed() {
            return !!(
              this.GetCollectionID() === d.Featured ||
              (this.BIsGlobalCalendar() && !O.iA.accountid)
            );
          }
          BIsSingleSourceCalendar() {
            return !!(this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar());
          }
          GetKey() {
            return this.m_key;
          }
          BEventMatchCalendarSingleSource(e) {
            var t, r;
            return (
              (this.BIsSingleAppCalendar() &&
                ((t = this.m_key.appids) == null ? void 0 : t[0]) == e.appid) ||
              (this.BIsSingleGroupCalendar() &&
                ((r = this.m_key.clanaccountids) == null ? void 0 : r[0]) ==
                  e.clanid)
            );
          }
          BIsSingleSourceMuted() {
            if (!this.BIsSingleSourceCalendar()) return !1;
            if (this.BIsSingleAppCalendar()) {
              const t = this.GetSingleAppID();
              return t !== void 0 && c.S.Get().BIsMutedAppID(t);
            }
            const e = this.GetSingleGroupID();
            return e !== void 0 && c.S.Get().BIsMutedClanID(e);
          }
          BIsSingleGroupCalendar() {
            return !!(
              this.m_key.clanaccountids && this.m_key.clanaccountids.length == 1
            );
          }
          GetSingleGroupID() {
            var e;
            return (e = this.m_key.clanaccountids) == null ? void 0 : e[0];
          }
          BIsSingleAppCalendar() {
            return !!(this.m_key.appids && this.m_key.appids.length == 1);
          }
          GetSingleAppID() {
            var e;
            return (e = this.m_key.appids) == null ? void 0 : e[0];
          }
          BIsCollectionCalendar() {
            return !!this.m_key.collectionid;
          }
          GetCollectionID() {
            return this.m_key.collectionid;
          }
          BIsSaleCalendar() {
            return !!this.m_key.saleid;
          }
          GetSaleID() {
            return this.m_key.saleid;
          }
          BIsCalendarEndTimeSet() {
            return !!this.m_key.rtCalendarEnd;
          }
          GetCalendarEndTime() {
            return this.m_key.rtCalendarEnd;
          }
          SetCollectionMetaData(e) {
            this.m_collectionMetaData = e;
          }
          GetCollectionMetaData() {
            return this.m_collectionMetaData;
          }
          BHasCollectionMetaData() {
            return !!this.m_collectionMetaData;
          }
          ValidateCollectionMetadata(e) {
            const t = e;
            return !!(
              t &&
              typeof t == "object" &&
              t.clanid &&
              typeof t.clanid == "number" &&
              t.clan_event_gid &&
              typeof t.clan_event_gid == "string"
            );
          }
          SetFilteredView(e, t) {
            const r = this.m_currentView.get();
            r && r.dispose();
            const p = () => this.m_rgSortedCalendarEvents,
              M = this.BIsSingleSourceMuted(),
              P = new J(
                p,
                this.LoadAdditionalEvents,
                this.BHitEventHorizon,
                e,
                !!t,
                M,
              );
            this.m_currentView.set(P);
          }
          BIsFilteredViewEmpty() {
            var e;
            return !!(
              (e = this.m_currentView.get()) != null && e.BIsViewEmpty()
            );
          }
          GetCalendarItemsInTimeRange(e, t) {
            const r = this.m_currentView.get();
            return r
              ? r.GetCalendarItemsInTimeRange(e, t)
              : (console.error("calendar view not yet initialized"),
                { rgCalendarItems: [], bIsComplete: !1 });
          }
          GetActiveEventsAt(e) {
            const t = this.m_currentView.get();
            return t
              ? t.GetActiveEventsAt(e)
              : (console.error("calendar view not yet initialized"), []);
          }
          GetCurrentlyLoadedEventCount(e, t) {
            var r, p;
            return (p =
              (r = this.m_currentView.get()) == null
                ? void 0
                : r.GetCurrentlyLoadedEventCount(e, t)) != null
              ? p
              : { nCount: 0, bIsComplete: !1 };
          }
          GetCurrentlyLoadedItemsForStats() {
            var e;
            return (
              ((e = this.m_currentView.get()) == null
                ? void 0
                : e.GetCurrentlyLoadedEvents()) || []
            );
          }
          GetCalendarSections(e) {
            return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
          }
          GetStoreInitializationTimestamp() {
            return (
              this.m_dtInitTime ||
                (this.m_dtInitTime = B.HD.GetTimeNowWithOverrideAsDate()),
              this.m_dtInitTime
            );
          }
          InitCalendarSections() {
            const e = this.GetStoreInitializationTimestamp(),
              t = [],
              r = e.getTime() / 1e3;
            t.push(L(r, (0, a.we)("#EventCalendar_FutureEventsHeader"), r));
            const p = new Date(e);
            p.setHours(0, 0, 0, 1);
            let M = p.getTime() / 1e3;
            t.push(L(r, (0, a.we)("#Time_Today"), M, r)),
              p.setDate(p.getDate() - 1);
            let P = M;
            (M = p.getTime() / 1e3),
              t.push(L(r, (0, a.we)("#Time_Yesterday"), M, P));
            const R =
                this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ],
              K = R ? R.start_time : r;
            let $ = K > M;
            for (let k = 0; k < 5 && !$; k++)
              p.setDate(p.getDate() - 1),
                (P = M),
                (M = p.getTime() / 1e3),
                t.push(L(r, (0, a.cc)(p), M, P)),
                ($ = K > M);
            const ne = new Date(p);
            let Q = M;
            for (; ne.getMonth() == e.getMonth() && ne.getDate() != 1 && !$; ) {
              ne.setDate(ne.getDate() - 7);
              const k = ne.getTime() / 1e3;
              t.push(L(r, (0, a.lQ)(Q - 1), k, Q)), ($ = K > k), (Q = k);
            }
            const q = new Date(e);
            q.setHours(0, 0, 0, 1), q.setDate(1);
            let ae = Q;
            for (let k = 1; !$; k++) {
              const ee = new Date(q);
              ee.setMonth(e.getMonth() - k, 1);
              const X = ee.getTime() / 1e3;
              t.push(L(r, (0, a.lQ)(X), X, ae)), ($ = K > X), (ae = X);
            }
            this.m_rgCalendarSections.length > t.length
              ? this.m_rgCalendarSections.splice(
                  t.length,
                  this.m_rgCalendarSections.length,
                )
              : t
                  .splice(this.m_rgCalendarSections.length, t.length)
                  .forEach((k) => this.m_rgCalendarSections.push(k));
          }
          InitFutureCalendarSections() {
            const e = this.GetStoreInitializationTimestamp(),
              t = [];
            let r;
            this.m_key.rtCalendarEnd && (r = this.m_key.rtCalendarEnd);
            const p = this.m_rgSortedCalendarEvents[0];
            p && (r = p.start_time), r || (r = e.getTime() / 1e3);
            const M = e.getTime() / 1e3,
              P = new Date(e);
            P.setHours(24, 0, 0, 0);
            let R = P.getTime() / 1e3;
            t.push(
              L(
                M,
                (0, a.we)(
                  this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
                ),
                M,
                R,
              ),
            );
            let K = r <= R,
              $ = R;
            P.setDate(P.getDate() + 1),
              (R = P.getTime() / 1e3),
              K || t.push(L(M, (0, a.we)("#Time_Tomorrow"), $, R)),
              (K = r <= R);
            const ne = 6 - W()(e).weekday();
            for (let Q = 2; Q <= ne && !K; Q++) {
              $ = R;
              const q = (0, a.cc)(P);
              P.setDate(P.getDate() + 1),
                (R = P.getTime() / 1e3),
                t.push(L(M, q, $, R)),
                (K = r <= R);
            }
            if (this.m_key.bSectionByDay)
              for (; !K; ) {
                $ = R;
                const Q = (0, a.$w)(P);
                P.setDate(P.getDate() + 1),
                  (R = P.getTime() / 1e3),
                  t.push(L(M, Q, $, R)),
                  (K = r <= R);
              }
            else {
              const Q = new Date(P);
              let q = R;
              const ae = W()(e).daysInMonth();
              if (Q.getMonth() == e.getMonth() && Q.getDate() != ae && !K) {
                Q.setDate(Q.getDate() + 7);
                const X = Q.getTime() / 1e3;
                t.push(L(M, (0, a.we)("#EventCalendar_NextWeek"), q, X)),
                  (K = r <= X),
                  (q = X);
              }
              const k = new Date(e);
              k.setMonth(k.getMonth() + 1),
                k.setDate(1),
                k.setHours(0, 0, 0, 0);
              let ee;
              if (Q < k && !K) {
                const X = k.getTime() / 1e3;
                t.push(L(M, (0, a.we)("#EventCalendar_LaterThisMonth"), q, X)),
                  (K = r <= X),
                  (ee = X);
              } else ee = q;
              for (let X = 2; !K; X++) {
                const se = new Date(k);
                se.setMonth(e.getMonth() + X);
                const ue = se.getTime() / 1e3;
                t.push(L(M, (0, a.lQ)(ee), ee, ue)), (K = r <= ue), (ee = ue);
              }
            }
            this.m_rgFutureSections.length > t.length
              ? this.m_rgFutureSections.splice(
                  t.length,
                  this.m_rgFutureSections.length,
                )
              : t
                  .splice(this.m_rgFutureSections.length, t.length)
                  .forEach((Q) => this.m_rgFutureSections.push(Q));
          }
          async RegisterCalendarEventsAndModels(e) {
            await o.Fm.Get().HintLoad(),
              (0, g.h5)(() => {
                var t, r, p, M, P, R;
                this.RegisterCalendarApps((t = e.apps) != null ? t : []),
                  this.RegisterCalendarClans((r = e.clans) != null ? r : []),
                  this.RegisterCalendarEvents(
                    (p = e.documents) != null ? p : [],
                  ),
                  G.O3.RegisterClanEvents((M = e.events) != null ? M : []),
                  this.RegisterReadEvents((P = e.events_read) != null ? P : []),
                  this.RegisterEventVotes((R = e.event_votes) != null ? R : []),
                  e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                  e.backwardComplete &&
                    (this.m_bFinishedSearchingBackward = !0),
                  this.InitCalendarSections(),
                  this.InitFutureCalendarSections(),
                  this.SetCollectionMetaData(
                    this.ValidateCollectionMetadata(e.metadatainfo)
                      ? e.metadatainfo
                      : void 0,
                  );
              });
          }
          RegisterCalendarApps(e) {
            if (e)
              for (const t of e) {
                if (this.m_mapCalendarAppsByID.has(t.appid)) continue;
                const r = new D.dF();
                (r.appid = t.appid),
                  (r.source = t.source),
                  (r.playtime = t.playtime),
                  (r.last_played = t.last_played),
                  (r.wishlist_added = t.wishlist_added),
                  this.m_mapCalendarAppsByID.set(t.appid, r),
                  t.hidden &&
                    this.m_visibilityStore.SetAppVisibility(t.appid, !1);
              }
          }
          RegisterCalendarClans(e) {
            if (e) {
              for (const t of e)
                if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                  const r = new D.w2();
                  (r.clanid = t.clanid),
                    (r.source = t.source),
                    this.m_mapCalendarClansByID.set(t.clanid, r),
                    t.hidden &&
                      this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
                }
            }
          }
          RegisterReadEvents(e) {
            e && (0, x.No)(e);
          }
          RegisterEventVotes(e) {
            if (!e) return;
            const t = v.KN.Get();
            for (const r of e) {
              const p = r.vote === void 0 ? void 0 : !!r.vote;
              t.SetVote(r.id, p);
            }
          }
          RegisterCalendarEvents(e) {
            if (e) {
              let t = !1;
              for (const r of e)
                this.BInternalInsertCalendarEventItem(r) && (t = !0);
              t && this.RebuildSortedCalendarEventList();
            }
          }
          BHitEventHorizon(e) {
            return e == "forward"
              ? this.m_bFinishedSearchingForward
              : this.m_bFinishedSearchingBackward;
          }
          GetTimeEdgeForDirection(e, t = void 0) {
            return e === "forward"
              ? this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[0].start_time
                : t
              : this.m_rgSortedCalendarEvents.length > 0
                ? this.m_rgSortedCalendarEvents[
                    this.m_rgSortedCalendarEvents.length - 1
                  ].start_time
                : t;
          }
          UpdateStuckCounters(e, t) {
            const r =
                e === "forward"
                  ? this.m_bFinishedSearchingForward
                  : this.m_bFinishedSearchingBackward,
              p = this.GetTimeEdgeForDirection(e, void 0);
            return !r && p === t
              ? (e == "forward"
                  ? this.m_nForwardStuckCount++
                  : this.m_nBackwardStuckCount++,
                !0)
              : (e == "forward"
                  ? (this.m_nForwardStuckCount = 0)
                  : (this.m_nBackwardStuckCount = 0),
                !1);
          }
          GetRequestInFlight(e) {
            return e === "forward"
              ? this.m_forwardRequestInFlight
              : this.m_backwardRequestInFlight;
          }
          SetRequestInFlight(e, t) {
            (0, U.wT)(
              !t || !this.GetRequestInFlight(e),
              "Already have a request in flight for",
              e,
            ),
              e === "forward"
                ? (this.m_forwardRequestInFlight = t)
                : (this.m_backwardRequestInFlight = t);
          }
          async LoadAdditionalEvents(e, t) {
            var r, p, M;
            if (this.BHitEventHorizon(e)) return l.R;
            let P = this.GetRequestInFlight(e);
            if (P) return P;
            const R =
                O.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
              K =
                e === "forward"
                  ? this.m_nForwardStuckCount
                  : this.m_nBackwardStuckCount,
              $ = K < 3 ? K : 0,
              ne = K >= 3 ? 1 : 0,
              ae = 250 + 50 * $,
              k = 15,
              ee = B.HD.GetTimeNowWithOverride(),
              X = (r = this.GetTimeEdgeForDirection(e, ee)) != null ? r : ee,
              se = {
                minTime: 0,
                maxTime: 0,
                ascending: !0,
                maxResults: ae,
                populateEvents: k,
                appTypes: this.m_visibilityStore.GetGameSources().join(","),
                eventTypes: Array.from(
                  this.m_visibilityStore.enabledEventTypeSet,
                ).join(","),
                appIdFilter:
                  (p = this.m_key.appids) != null && p.length
                    ? this.m_key.appids.sort().join(",")
                    : void 0,
                clanIdFilter:
                  (M = this.m_key.clanaccountids) != null && M.length
                    ? this.m_key.clanaccountids.sort().join(",")
                    : void 0,
                collectionID: this.m_key.collectionid,
                saleID: this.m_key.saleid,
                hubtype: this.m_key.hubtype,
                category_or_language: this.m_key.category_or_language,
                tag_name: this.m_key.tag_name,
                tags: this.m_key.rgTags
                  ? this.m_key.rgTags.slice().sort().join(",")
                  : void 0,
              };
            return (
              e === "forward"
                ? ((se.minTime = Math.floor(X + ne)), (se.ascending = !0))
                : ((se.maxTime = Math.floor(X - ne)), (se.ascending = !1)),
              (P = H()
                .get(R, {
                  params: se,
                  cancelToken: t ? t.token : void 0,
                  withCredentials: !0,
                })
                .then(async (ie) => {
                  if (
                    (this.SetRequestInFlight(e, null), ie.data.success == l.R)
                  ) {
                    if (
                      (await this.RegisterCalendarEventsAndModels(ie.data),
                      this.UpdateStuckCounters(e, X))
                    )
                      return this.LoadAdditionalEvents(e, t);
                  } else
                    console.error(
                      "LoadAdditionalEvents was not successful: Msg" +
                        ie.data.msg,
                    );
                  return ie.data.success;
                })
                .catch((ie) => {
                  this.SetRequestInFlight(e, null);
                  let me = (0, T.H)(ie);
                  return (
                    console.error(
                      "LoadAdditionalEvents hit error " + me.strErrorMsg,
                      me,
                    ),
                    e == "forward"
                      ? (this.m_bFinishedSearchingForward = !0)
                      : (this.m_bFinishedSearchingBackward = !0),
                    l.zi
                  );
                })),
              this.SetRequestInFlight(e, P),
              P
            );
          }
          BInternalInsertCalendarEventItem(e) {
            if (!e.unique_id)
              return (
                (0, U.wT)(
                  !1,
                  "Attmpted to register a calendar event item with an invalid unique id!",
                ),
                !1
              );
            if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
            const t = this.m_mapCalendarAppsByID.get(e.appid),
              r = this.m_mapCalendarClansByID.get(e.clanid);
            if (!t && !r)
              return console.log("No AppInfo or ClanInfo For: ", e), !1;
            const p = new D.NK();
            return (
              (p.clanid = e.clanid),
              (p.unique_id = e.unique_id),
              (p.event_type = e.event_type),
              (p.appid = e.appid),
              (p.start_time = e.start_time),
              (p.score = e.score),
              (p.appInfo = t),
              (p.clanInfo = r),
              this.m_rgSortedCalendarEvents.push(p),
              this.m_mapCalendarEventsByGid.set(p.unique_id, p),
              !0
            );
          }
          GetCalendarAppInfoForAppID(e) {
            return this.m_mapCalendarAppsByID.get(e);
          }
          RebuildSortedCalendarEventList() {
            const e = this.m_rgSortedCalendarEvents.slice();
            this.m_rgSortedCalendarEvents = e.sort(
              (t, r) => r.start_time - t.start_time,
            );
          }
          async UpdateEventBlockFromCalendarEvent(e, t) {
            const r = e.appInfo ? e.appid : void 0,
              p = e.clanInfo ? e.clanInfo.clanid : void 0;
            if (r == null && p == null) {
              (0, U.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
              return;
            }
            await c.S.Get().UpdateCommunicationSetting(t, r, p),
              m.V.RecordAppInteractionEvent(r, m.E.k_eMuted);
          }
          GetAllClans() {
            return Array.from(this.m_mapCalendarClansByID.keys());
          }
          GetAllApps() {
            return Array.from(this.m_mapCalendarAppsByID.keys());
          }
        }
        I([g.sH], F.prototype, "m_mapCalendarAppsByID", 2),
          I([g.sH], F.prototype, "m_mapCalendarClansByID", 2),
          I([g.sH], F.prototype, "m_mapCalendarEventsByGid", 2),
          I([g.sH], F.prototype, "m_rgSortedCalendarEvents", 2),
          I([g.sH], F.prototype, "m_bFinishedSearchingForward", 2),
          I([g.sH], F.prototype, "m_bFinishedSearchingBackward", 2),
          I([g.sH], F.prototype, "m_rgCalendarSections", 2),
          I([g.sH], F.prototype, "m_rgFutureSections", 2),
          I([g.sH], F.prototype, "m_collectionMetaData", 2),
          I([g.XI], F.prototype, "InitCalendarSections", 1),
          I([g.XI], F.prototype, "InitFutureCalendarSections", 1),
          I([g.XI], F.prototype, "RegisterCalendarEventsAndModels", 1),
          I([g.XI], F.prototype, "RegisterCalendarApps", 1),
          I([g.XI], F.prototype, "RegisterCalendarClans", 1),
          I([g.XI], F.prototype, "RegisterEventVotes", 1),
          I([g.XI], F.prototype, "RegisterCalendarEvents", 1),
          I([i.o], F.prototype, "BHitEventHorizon", 1),
          I([g.XI.bound], F.prototype, "LoadAdditionalEvents", 1),
          I([g.XI], F.prototype, "UpdateEventBlockFromCalendarEvent", 1);
        class J {
          constructor(e, t, r, p, M, P) {
            S(this, "m_rgLoadedEventsBox", g.sH.box([])),
              S(this, "m_lastLoadLatch", null),
              S(this, "m_fnGetUnfilteredEvents"),
              S(this, "m_fnLoadAdditionalEvents"),
              S(this, "m_fnBHitEventHorizon"),
              S(this, "m_fnBIsEventInView"),
              S(this, "m_bSkipStorePreferenceCheck"),
              S(this, "m_bAllowMutedAndIgnoredSources"),
              S(this, "m_rgAutorunDisposer"),
              (0, g.Gn)(this),
              (this.m_fnGetUnfilteredEvents = e),
              (this.m_fnLoadAdditionalEvents = t),
              (this.m_fnBHitEventHorizon = r),
              (this.m_fnBIsEventInView = p),
              (this.m_bSkipStorePreferenceCheck = M),
              (this.m_bAllowMutedAndIgnoredSources = P),
              (this.m_rgAutorunDisposer = (0, g.fm)(async () => {
                const R = this.viewFilteredEvents.slice();
                if (!this.m_bSkipStorePreferenceCheck) {
                  const K = Array.from(
                    new Set(R.map(($) => $.appid).filter(Boolean)),
                  ).sort();
                  if (
                    ((this.m_lastLoadLatch = R),
                    await j.A.Get().QueueMultipleAppRequests(K, {
                      ...b.jy,
                      include_assets: !0,
                    }),
                    this.m_lastLoadLatch != R)
                  )
                    return;
                  this.m_lastLoadLatch = null;
                }
                this.m_rgLoadedEventsBox.set(R);
              }));
          }
          dispose() {
            this.m_rgAutorunDisposer();
          }
          get viewFilteredEvents() {
            return this.m_fnGetUnfilteredEvents().filter((e) =>
              this.m_fnBIsEventInView(e),
            );
          }
          get filteredAndCheckedEvents() {
            return this.m_rgLoadedEventsBox.get().filter((t) => {
              if (t.appid) {
                if (
                  (!this.m_bAllowMutedAndIgnoredSources &&
                    (c.S.Get().BIsMutedAppID(t.appid) ||
                      o.Fm.Get().BIsGameIgnored(t.appid))) ||
                  (!this.m_bSkipStorePreferenceCheck &&
                    (0, b.Li)(j.A.Get().GetApp(t.appid)))
                )
                  return !1;
              } else if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (c.S.Get().BIsMutedClanID(t.clanid) ||
                  o.Fm.Get().BIsIgnoringCurator(w.b.InitFromClanID(t.clanid)))
              )
                return !1;
              return !0;
            });
          }
          BIsCompleteThroughTime(e, t) {
            if (this.m_fnBHitEventHorizon(e)) return !0;
            const r = this.m_fnGetUnfilteredEvents();
            return e === "forward"
              ? !!t && r.length > 0 && r[0].start_time > t
              : t !== void 0 && r.length > 0 && r[r.length - 1].start_time < t;
          }
          async EnsureRangeIsLoaded(e, t) {
            for (
              let p = 0;
              p < 100 && !this.BIsCompleteThroughTime("forward", t);
              p++
            )
              await this.m_fnLoadAdditionalEvents("forward");
            for (
              let p = 0;
              p < 100 && !this.BIsCompleteThroughTime("backward", e);
              p++
            )
              await this.m_fnLoadAdditionalEvents("backward");
          }
          GetCalendarItemsInTimeRange(e, t) {
            this.EnsureRangeIsLoaded(e, t);
            const r = this.filteredAndCheckedEvents.filter(
                (P) => P.start_time >= e && (!t || P.start_time < t),
              ),
              p = this.BIsCompleteThroughTime("forward", t),
              M = this.BIsCompleteThroughTime("backward", e);
            return { rgCalendarItems: r, bIsComplete: p && M };
          }
          GetCurrentlyLoadedEvents() {
            return this.filteredAndCheckedEvents;
          }
          GetCurrentlyLoadedEventCount(e, t) {
            let r = 0;
            this.filteredAndCheckedEvents.forEach((P) => {
              P.start_time >= e && (!t || P.start_time < t) && r++;
            });
            const p = this.BIsCompleteThroughTime("forward", t),
              M = this.BIsCompleteThroughTime("backward", e);
            return { nCount: r, bIsComplete: p && M };
          }
          BIsViewEmpty() {
            return this.filteredAndCheckedEvents.length > 0;
          }
          GetActiveEventsAt(e) {
            return this.filteredAndCheckedEvents
              .map((t) => G.O3.GetClanEventModel(t.unique_id))
              .filter((t) => {
                if (!t || t.startTime === void 0) return !1;
                const r = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < r;
              });
          }
        }
        I([g.EW.struct], J.prototype, "viewFilteredEvents", 1),
          I([g.EW.struct], J.prototype, "filteredAndCheckedEvents", 1);
        const Z = g.sH.box(null),
          re = new Map();
        window.g_EventCalendarMap = re;
        function de(h, e) {
          let t = "";
          return (
            h.appids &&
              h.appids.length > 0 &&
              (t += "appids:" + h.appids.sort().join(",")),
            h.clanaccountids &&
              h.clanaccountids.length > 0 &&
              (t += "clanids:" + h.clanaccountids.sort().join(",")),
            h.collectionid && (t += "collection:" + h.collectionid),
            h.saleid && (t += "sale:" + h.saleid),
            h.bSectionByDay && (t += "_sectionbyday"),
            h.rtCalendarEnd && (t += "_end:" + h.rtCalendarEnd),
            h.rgTags &&
              h.rgTags.length > 0 &&
              (t += "_tags:" + h.rgTags.slice().sort().join(",")),
            h.hubtype &&
              (t +=
                "_hubtype:" +
                h.hubtype +
                "_" +
                h.category_or_language +
                "_" +
                h.tag_name),
            Z.get() !== t && (Z.set(t), re.has(t) || re.set(t, new F(h, e))),
            t
          );
        }
        function ce() {
          let h = Z.get();
          return h == null && (h = de({})), re.get(h);
        }
        function _e() {
          return Z.get() !== null;
        }
      },
      53025: (Y, V, n) => {
        "use strict";
        n.d(V, { $: () => G });
        var A = n(41735),
          H = n.n(A),
          g = n(3166),
          N = n(77495),
          W = n(90825),
          l = n(72604),
          D = Object.defineProperty,
          x = (j, b, U) =>
            b in j
              ? D(j, b, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: U,
                })
              : (j[b] = U),
          w = (j, b, U) => x(j, typeof b != "symbol" ? b + "" : b, U);
        const v = class te extends N.ZQ {
          async DeleteOldAnnouncement(b, U) {
            let T = new URLSearchParams();
            T.append("sessionid", (0, g.KC)());
            let i =
                g.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                b.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                U,
              a = await H().post(i, T);
            if (a.data.success != l.R) throw a.data;
            return this.RemoveGIDFromList(b, W.cB + U), a.data;
          }
          static Get() {
            return (
              te.sm_Instance ||
                ((te.sm_Instance = new te()), te.sm_Instance.Init()),
              te.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              te.sm_SummaryInstance ||
                ((te.sm_SummaryInstance = new te(!0)),
                te.sm_SummaryInstance.Init()),
              te.sm_SummaryInstance
            );
          }
        };
        w(v, "sm_Instance"), w(v, "sm_SummaryInstance");
        let G = v;
      },
      74618: (Y, V, n) => {
        "use strict";
        n.d(V, { S: () => U });
        var A = n(41735),
          H = n.n(A),
          g = n(14947),
          N = n(72604),
          W = n(71742),
          l = n(34592),
          D = n(3166),
          x = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          v = (T, i, a) =>
            i in T
              ? x(T, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (T[i] = a),
          G = (T, i, a, O) => {
            for (
              var o = O > 1 ? void 0 : O ? w(i, a) : i, m = T.length - 1, f;
              m >= 0;
              m--
            )
              (f = T[m]) && (o = (O ? f(i, a, o) : f(o)) || o);
            return O && o && x(i, a, o), o;
          },
          j = (T, i, a) => v(T, typeof i != "symbol" ? i + "" : i, a);
        const b = class oe {
          constructor() {
            j(this, "m_mapBlockedAppIds", new Map()),
              j(this, "m_mapBlockedClanIds", new Map()),
              (0, g.Gn)(this);
          }
          static Get() {
            return (
              oe.s_globalSingletonStore ||
                ((oe.s_globalSingletonStore = new oe()),
                oe.s_globalSingletonStore.Init()),
              oe.s_globalSingletonStore
            );
          }
          GetMutedSourceCount() {
            return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
          }
          Init() {
            const i = (0, D.Tc)("mutedcomminfo", "application_config");
            this.ValidateStoreDefault(i) &&
              (i.appids &&
                i.appids.forEach((a) => this.m_mapBlockedAppIds.set(a, !0)),
              i.clanids &&
                i.clanids.forEach((a) => this.m_mapBlockedClanIds.set(a, !0)));
          }
          ValidateStoreDefault(i) {
            const a = i;
            return a && typeof a == "object"
              ? (Array.isArray(a.appids) && a.appids.length > 0) ||
                  (Array.isArray(a.clanids) && a.clanids.length > 0)
              : !1;
          }
          BIsEventBlocked(i) {
            return i.appid
              ? this.m_mapBlockedAppIds.has(i.appid)
              : i.clanInfo
                ? this.m_mapBlockedClanIds.has(i.clanInfo.clanid)
                : !1;
          }
          BIsMutedAppID(i) {
            return this.m_mapBlockedAppIds.has(i);
          }
          BIsMutedClanID(i) {
            return this.m_mapBlockedClanIds.has(i);
          }
          async UpdateCommunicationSetting(i, a, O) {
            const o = D.TS.STORE_BASE_URL + "account/optoutappcommunication/",
              m = new FormData();
            if (
              (m.append("sessionid", (0, D.KC)()),
              m.append("allowCommunication", i ? "1" : "0"),
              a)
            ) {
              if (
                (!i && this.m_mapBlockedAppIds.has(a)) ||
                (i && !this.m_mapBlockedAppIds.has(a))
              )
                return !0;
              i
                ? this.m_mapBlockedAppIds.delete(a)
                : this.m_mapBlockedAppIds.set(a, !0),
                m.append("appId", a.toString());
            } else if (O) {
              if (
                (!i && this.m_mapBlockedClanIds.has(O)) ||
                (i && !this.m_mapBlockedClanIds.has(O))
              )
                return !0;
              i
                ? this.m_mapBlockedClanIds.delete(O)
                : this.m_mapBlockedClanIds.set(O, !0),
                m.append("clanId", O.toString());
            } else
              return (
                (0, W.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            try {
              return (await H().post(o, m)).data.success == N.R;
            } catch (f) {
              return (
                console.error(
                  "Blocking app id hit error " + (0, l.H)(f).strErrorMsg,
                ),
                !1
              );
            }
          }
        };
        j(b, "s_globalSingletonStore"),
          G([g.sH], b.prototype, "m_mapBlockedAppIds", 2),
          G([g.sH], b.prototype, "m_mapBlockedClanIds", 2);
        let U = b;
      },
      91424: (Y, V, n) => {
        "use strict";
        n.d(V, { Y: () => O });
        var A = n(7850),
          H = n(75844),
          g = n(90626),
          N = n(53025),
          W = n(77495),
          l = n(58483),
          D = n(73085),
          x = n(88003),
          w = n(54963),
          v = n(19332),
          G = n.n(v),
          j = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          U = (m, f, d) =>
            f in m
              ? j(m, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: d,
                })
              : (m[f] = d),
          T = (m, f, d, s) => {
            for (
              var y = s > 1 ? void 0 : s ? b(f, d) : f, C = m.length - 1, B;
              C >= 0;
              C--
            )
              (B = m[C]) && (y = (s ? B(f, d, y) : B(y)) || y);
            return s && y && j(f, d, y), y;
          },
          i = (m, f, d) => U(m, typeof f != "symbol" ? f + "" : f, d);
        function a(m) {
          const { event: f, closeModal: d } = m,
            s = (0, l.LJ)();
          return (0, A.jsx)(D.AD, {
            initialEvent: f,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: W.O3,
            emoticonStore: s,
            showAppHeader: !0,
            closeModal: d,
          });
        }
        function O(m, f) {
          (0, x.pg)((0, A.jsx)(a, { event: m }), f);
        }
        let o = class extends g.Component {
          constructor() {
            super(...arguments), i(this, "m_refFocus", g.createRef());
          }
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(m) {
            const { fnClose: f } = this.props;
            m.keyCode === 27 && f && f();
          }
          OnBackgroundClick(m) {
            m.currentTarget == m.target && this.props.fnClose();
          }
          render() {
            const { event: m, langOverride: f, isPreview: d } = this.props;
            return (0, A.jsx)("div", {
              ref: this.m_refFocus,
              className: v.Main,
              onClick: this.OnBackgroundClick,
              children: (0, A.jsx)(l.sU, {
                children: (s) =>
                  (0, A.jsx)(
                    D.He,
                    {
                      event: m,
                      emoticonStore: s,
                      partnerEventStore: N.$.Get(),
                      langOverride: f,
                      isPreview: d,
                      bDisableBroadcastPlayer: !1,
                    },
                    m.GID,
                  ),
              }),
            });
          }
        };
        T([w.oI], o.prototype, "escFunction", 1),
          T([w.oI], o.prototype, "OnBackgroundClick", 1),
          (o = T([H.PA], o));
      },
      20035: (Y, V, n) => {
        "use strict";
        n.d(V, { C: () => U });
        var A = n(7850),
          H = n(8323),
          g = n(90537),
          N = n(98112),
          W = n(98241),
          l = n(63694),
          D = n(37589),
          x = Object.defineProperty,
          w = (T, i, a) =>
            i in T
              ? x(T, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (T[i] = a),
          v = (T, i, a) => w(T, typeof i != "symbol" ? i + "" : i, a);
        class G {
          constructor() {
            v(this, "m_bHasBeenTracked", !1), v(this, "m_fnSubmit", null);
          }
        }
        class j {
          constructor() {
            v(this, "m_nImpressionDelayMS", 500),
              v(this, "m_mapEvents", new Map());
          }
          ShouldTrack(i) {
            if (i.bOldAnnouncement) return !1;
            const a = this.m_mapEvents.get(i.GID);
            return !a || !a.m_bHasBeenTracked;
          }
          StartTracking(i, a, O) {
            if (i.bOldAnnouncement) return;
            let o = this.m_mapEvents.get(i.GID);
            o || ((o = new G()), this.m_mapEvents.set(i.GID, o)),
              !o.m_bHasBeenTracked &&
                (o.m_fnSubmit ||
                  ((o.m_fnSubmit = new H.LU()),
                  o.m_fnSubmit.Schedule(
                    this.m_nImpressionDelayMS,
                    this.ReportImpression.bind(this, i, a, O),
                  )));
          }
          StopTracking(i) {
            const a = this.m_mapEvents.get(i.GID);
            a && a.m_fnSubmit && (a.m_fnSubmit.Cancel(), (a.m_fnSubmit = null));
          }
          ReportImpression(i, a, O) {
            O.RecordEventShown(i, N.Tc.qC),
              a && l.V.RecordViewedEvent((0, W.v0)(), i.GID);
            const o = this.m_mapEvents.get(i.GID);
            o &&
              ((o.m_bHasBeenTracked = !0),
              o.m_fnSubmit.Cancel(),
              (o.m_fnSubmit = null));
          }
        }
        const b = new j(),
          U = (T) => {
            const { event: i } = T,
              a = (0, g.Y)();
            if (b.ShouldTrack(i)) {
              const O = () => b.StartTracking(i, T.recordNewsHubStats || !1, a),
                o = () => b.StopTracking(i);
              return (0, A.jsx)(D.Y, { onEnter: O, onLeave: o });
            } else return null;
          };
      },
      19188: (Y, V, n) => {
        "use strict";
        n.d(V, { N: () => B });
        var A = n(7850),
          H = n(41735),
          g = n.n(H),
          N = n(75844),
          W = n(90626),
          l = n(90537),
          D = n(58483),
          x = n(73085),
          w = n(2801),
          v = n(88843),
          G = n.n(v),
          j = n(64641),
          b = n.n(j),
          U = n(85599),
          T = n(34592),
          i = n(3166),
          a = n(72609),
          O = n(6469),
          o = n(53107),
          m = n(25792),
          f = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          s = (_, u, E) =>
            u in _
              ? f(_, u, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: E,
                })
              : (_[u] = E),
          y = (_, u, E, I) => {
            for (
              var S = I > 1 ? void 0 : I ? d(u, E) : u, z = _.length - 1, L;
              z >= 0;
              z--
            )
              (L = _[z]) && (S = (I ? L(u, E, S) : L(S)) || S);
            return I && S && f(u, E, S), S;
          },
          C = (_, u, E) => s(_, typeof u != "symbol" ? u + "" : u, E);
        const B = (_) => {
          let { bShowOnlyInitialEvent: u } = _;
          const E = (0, i.Qn)(),
            I = (0, l.Y)();
          return (0, A.jsx)(m.tH, {
            children: (0, A.jsx)(c, {
              ..._,
              bShowOnlyInitialEvent: u || E,
              tracker: I,
            }),
          });
        };
        let c = class extends W.Component {
          constructor() {
            super(...arguments),
              C(this, "state", {
                bLoading: !1,
                eventModel: this.props.eventModel,
              }),
              C(this, "m_refParent", W.createRef()),
              C(this, "m_cancelSignal", g().CancelToken.source());
          }
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let _ = this.GetBodyElement();
            _ &&
              this.props.bPrimaryPageFeature &&
              _.classList.add(v.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let _ = this.GetBodyElement();
            _ &&
              this.props.bPrimaryPageFeature &&
              _.classList.remove(v.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: _,
              clanSteamID: u,
              announcementGID: E,
              partnerEventStore: I,
              additionalParams: S,
            } = this.props;
            I.LoadAdjacentPartnerEventsByAnnouncement(
              E,
              u,
              _,
              0,
              3,
              S,
              this.m_cancelSignal,
            )
              .then((z) => {
                z.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: z[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((z) => {
                let L = (0, T.H)(z);
                console.error(
                  "EventInfiniteScrollModal failed " + L.strErrorMsg,
                  L,
                ),
                  this.setState({ bLoading: !1 });
              });
          }
          async HandleReadEvent() {
            const { eventModel: _ } = this.state,
              { trackingLocation: u, tracker: E } = this.props;
            _ && _.BIsPartnerEvent() && (E.RecordEventRead(_, u), E.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: _ } = this.props,
              { bLoading: u, eventModel: E } = this.state;
            if (u)
              return (0, A.jsx)(w.EN, {
                active: !0,
                children: (0, A.jsx)("div", {
                  className: b().FlexCenter,
                  style: { height: "400px" },
                  children: (0, A.jsx)(U.t, {}),
                }),
              });
            const {
              closeModal: I,
              appid: S,
              clanSteamID: z,
              className: L,
              partnerEventStore: F,
              showAppHeader: J,
              bPrimaryPageFeature: Z,
              additionalParams: re,
              eventClassName: de,
            } = this.props;
            let ce;
            a.TS.IN_CLIENT &&
              E != null &&
              E.appid &&
              (O.Fm.Get().HintLoad(),
              O.Fm.Get().BOwnsApp(E.appid) &&
                (ce = (h) =>
                  (0, o.EP)(h, "steam://nav/games/details/" + E.appid)));
            const _e = (0, A.jsx)(D.sU, {
              children: (h) =>
                (0, A.jsx)(x.AD, {
                  initialEvent: E,
                  appid: S,
                  clanSteamID: z,
                  partnerEventStore: F,
                  emoticonStore: h,
                  closeModal: !Z && I,
                  showAppHeader: J,
                  bShowOnlyInitialEvent: _,
                  additionalParams: re,
                  eventClassName: de,
                  onAppIconClick: ce,
                }),
            });
            return Z
              ? _e
              : (0, A.jsx)(w.EN, {
                  active: !0,
                  children: (0, A.jsx)("div", { className: L, children: _e }),
                });
          }
        };
        c = y([N.PA], c);
      },
      15901: (Y, V, n) => {
        "use strict";
        n.d(V, {
          AX: () => a,
          H2: () => U,
          Li: () => i,
          S7: () => G,
          a9: () => O,
          jy: () => T,
          nt: () => b,
          sd: () => v,
          tJ: () => j,
        });
        var A = n(24805),
          H = n(29543),
          g = n(92025),
          N = n(99412),
          W = n(44420),
          l = n(6469),
          D = n(10142),
          x = n(24110),
          w = n(71742);
        function v(o) {
          return D.A.Get().BIsStoreItemMissing(o.id, (0, H.SW)(o.type));
        }
        function G(o, m, f) {
          const d = new Array();
          return (
            o == null || o.forEach((s) => d.push({ id: s, type: "game" })),
            m == null || m.forEach((s) => d.push({ id: s, type: "sub" })),
            f == null || f.forEach((s) => d.push({ id: s, type: "bundle" })),
            d
          );
        }
        function j(o) {
          var m, f;
          const d = D.A.Get().GetStoreItem(o.id, (0, H.SW)(o.type));
          return (
            ((f =
              (m = d == null ? void 0 : d.GetBestPurchaseOption()) == null
                ? void 0
                : m.discount_pct) != null
              ? f
              : 0) > 0
          );
        }
        function b(o) {
          var m;
          if (!((m = x.f.Get().GetHomeView()) != null && m.localized))
            return !0;
          const f = D.A.Get().GetStoreItem(o.id, (0, H.SW)(o.type));
          return f
            ? l.Fm.Get().BIsAnyLanguageEnabled(
                f.GetAllLanguagesWithSomeSupport(),
              )
            : !0;
        }
        async function U(o, m, f) {
          if (!o || o.length == 0) return [];
          const d = o.filter((c) => (0, g.fp)(c.type)).map((c) => c.id),
            s = o.filter((c) => c.type === "sub").map((c) => c.id),
            y = o.filter((c) => c.type === "bundle").map((c) => c.id);
          {
            const c = d.filter((E) => !D.A.Get().BHasApp(E, m)),
              _ = s.filter((E) => !D.A.Get().BHasApp(E, m)),
              u = y.filter((E) => !D.A.Get().BHasApp(E, m));
            (c.length > 0 || _.length > 0 || u.length > 0) &&
              (await Promise.all([
                D.A.Get().QueueMultipleAppRequests(c, m),
                D.A.Get().QueueMultiplePackageRequests(_, m),
                D.A.Get().QueueMultipleBundleRequests(u, m),
              ]));
          }
          const C = new Set();
          y == null ||
            y.forEach((c) => {
              const _ = D.A.Get().GetBundle(c);
              _ == null || _.GetIncludedAppIDs().forEach((u) => C.add(u));
            }),
            s == null ||
              s.forEach((c) => {
                const _ = D.A.Get().GetPackage(c);
                _ == null || _.GetIncludedAppIDs().forEach((u) => C.add(u));
              });
          const B = Array.from(C).filter((c) => !D.A.Get().BHasApp(c, m));
          if (
            (B.length > 0 && (await D.A.Get().QueueMultipleAppRequests(B, m)),
            d.forEach((c) => C.add(c)),
            f)
          ) {
            const c = Array.from(C)
              .map((_) => {
                const u = D.A.Get().GetApp(_),
                  E = u == null ? void 0 : u.GetParentAppID();
                return E ? (C.add(E), E) : null;
              })
              .filter((_) => _ !== null)
              .filter((_) => !D.A.Get().BHasApp(_, m));
            c.length > 0 && (await D.A.Get().QueueMultipleAppRequests(c, m));
          }
          return Array.from(C).filter((c) => {
            const _ = D.A.Get().GetApp(c);
            return _ && !_.GetParentAppID();
          });
        }
        const T = {
          include_tag_count: 20,
          include_basic_info: !0,
          include_supported_languages: !0,
        };
        function i(o) {
          var m;
          if (!o) return !0;
          const f = l.Fm.Get();
          if (
            ((0, w.wT)(f.BIsLoaded(), "Dynamic Store not loaded"),
            o.GetStoreItemType() == W.c6.qI)
          ) {
            const s = o.GetParentAppID();
            if (
              f.BIsGameIgnored(o.GetAppID()) ||
              (s !== void 0 && f.BIsGameIgnored(s))
            )
              return !0;
          }
          if (
            f.BExcludesContentDescriptor(o.GetContentDescriptorIDs()) ||
            f.BExcludeTagIDs(o.GetTagIDs()) ||
            o.GetAllCreatorClanIDs().some((s) => f.BIsIgnoringCurator(s))
          )
            return !0;
          if ((m = x.f.Get().GetHomeView()) == null ? void 0 : m.localized) {
            const s = o.GetAllLanguagesWithSomeSupport();
            if (
              s.length > 0 &&
              !o.BHasSomeLanguageSupport(N.Bhc) &&
              !f.BIsAnyLanguageEnabled(s)
            )
              return !0;
          }
          return !1;
        }
        async function a(o, m, f, d) {
          let s = 0,
            y = 0;
          const C = [];
          await U(o, A.Xh, m);
          for (const B of o) {
            const c = D.A.Get().GetStoreItem(B.id, (0, H.SW)(B.type));
            if (!c) {
              s++;
              continue;
            }
            const _ = c
              .GetIncludedAppIDs()
              .map((u) => D.A.Get().GetApp(u))
              .filter((u) => !!u);
            if ((_.push(c), m)) {
              const u = new Set(
                  _.map((I) => I.GetParentAppID()).filter((I) => !!I),
                ),
                E = Array.from(u)
                  .map((I) => D.A.Get().GetApp(I))
                  .filter((I) => !!I);
              E && _.push(...E);
            }
            _.some(d || i)
              ? (y++, f && (l.Fm.Get().BIsStoreItemOwned(c) || f.push(B)))
              : C.push(B);
          }
          return C;
        }
        async function O(o, m, f, d, s, y, C) {
          let c = await a(
            o,
            m,
            C,
            s
              ? (u) =>
                  !u ||
                  l.Fm.Get().BExcludesContentDescriptor(
                    u.GetContentDescriptorIDs(),
                  ) ||
                  l.Fm.Get().BExcludeTagIDs(u.GetTagIDs())
              : i,
          );
          const _ = [];
          for (const u of c) {
            const E = D.A.Get().GetStoreItem(u.id, (0, H.SW)(u.type));
            if (!E) continue;
            const I = E == null ? void 0 : E.GetIncludedAppIDsOrSelf();
            let S = !1;
            f && (S = S || I.every((z) => l.Fm.Get().BIsGameOwned(z))),
              d && (S = S || I.every((z) => l.Fm.Get().BIsGameWishlisted(z))),
              y && (S = S || I.every((z) => l.Fm.Get().BIsGameIgnored(z))),
              S ? C && C.push(u) : _.push(u);
          }
          return _;
        }
      },
      12932: (Y, V, n) => {
        "use strict";
        n.d(V, { AQ: () => U, pn: () => i, qx: () => T });
        var A = n(7850),
          H = n(19316),
          g = n(18210),
          N = n(36118),
          W = n(90626),
          l = n(36707),
          D = n(95695),
          x = n.n(D),
          w = n(25792),
          v = n(64734),
          G = n.n(v),
          j = n(65946),
          b = n(11243);
        function U(a) {
          const {
              title: O,
              tooltip: o,
              getMinimized: m,
              toggleMinimized: f,
              className: d,
              children: s,
              elAdditionalButtons: y,
            } = a,
            C = (0, j.q3)(() => m());
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsxs)("div", {
                className: (0, l.A)(
                  d,
                  v.SectionTitleHeader,
                  v.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, A.jsxs)("div", {
                    className: (0, l.A)(
                      D.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [O, !!o && (0, A.jsx)(b.o, { tooltip: o })],
                  }),
                  (0, A.jsxs)("div", {
                    className: v.SectionTitleButtons,
                    children: [
                      y,
                      (0, A.jsx)(i, { bIsMinimized: C, fnToggleMinimize: f }),
                    ],
                  }),
                ],
              }),
              !C && (0, A.jsx)(w.tH, { children: s }),
            ],
          });
        }
        function T(a) {
          const [O, o] = W.useState(!!a.bStartMinimized);
          return (0, A.jsx)(U, {
            ...a,
            getMinimized: () => O,
            toggleMinimized: () => o(!O),
            children: a.children,
          });
        }
        function i(a) {
          const { bIsMinimized: O, fnToggleMinimize: o } = a,
            m = O ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, A.jsx)(H.$n, {
            "data-tooltip-text": (0, g.we)(m),
            onClick: o,
            children: a.bIsMinimized
              ? (0, A.jsx)(N.hz4, {})
              : (0, A.jsx)(N.Xjb, {}),
          });
        }
      },
      19332: (Y) => {
        Y.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      64734: (Y) => {
        Y.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
