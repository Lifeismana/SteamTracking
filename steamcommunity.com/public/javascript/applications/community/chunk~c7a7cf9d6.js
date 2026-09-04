/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3584],
  {
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    57876: (e, t, n) => {
      "use strict";
      n.d(t, { Xh: () => c, cU: () => u, tf: () => p, wl: () => m });
      var i = n(22837),
        s = n(71150),
        r = n(6824),
        a = n(30894),
        o = n(16021),
        l = n(97471),
        d = n(78327);
      const c = {
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
      class u {
        constructor() {
          this.m_setAlreadyAdded = new Set();
        }
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
      const m = 4;
      function p(e, t, n, i, s, r) {
        var a;
        const d = new Array(),
          c = new Array(),
          u = new Array(),
          p = new Array();
        if (!e || 0 == e.length) return d;
        const g = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let r of e) {
          let e = r.id,
            m = l.by.k_NotRejected;
          switch (r.item_type) {
            case "sub":
              const s = o.A.Get().GetPackage(e);
              if (
                1 !==
                (null === (a = null == s ? void 0 : s.GetIncludedAppIDs()) ||
                void 0 === a
                  ? void 0
                  : a.length)
              ) {
                m = y(e, t, i, !0);
                break;
              }
              e = s.GetIncludedAppIDs()[0];
            case "app":
              m = v(e, t, n, i, !0);
              break;
            case "bundle":
              m = f(e, t, i, !0);
          }
          if (
            (m == l.by.k_NotRejected
              ? ((r.rejected = l.by.k_NotRejected),
                d.push({ ...r, priority: 1 }))
              : g.includes(m)
                ? ((r.rejected = l.by.k_NotRejected), c.push(r))
                : ((r.rejected = m),
                  m == l.by.k_RejectIgnoredGame ? u.push(r) : p.push(r)),
            d.length > s)
          )
            break;
        }
        return (
          d.length < s &&
            (h(d, c, r, 2),
            d.length < r &&
              t.enforce_minimum &&
              (h(d, u, r, 3), h(d, p, r, m))),
          d
        );
      }
      function h(e, t, n, i) {
        for (let s = 0; e.length < n && s < t.length; ++s)
          e.push({ ...t[s], priority: i });
      }
      function g(e, t) {
        var n, i, s, r;
        const o = a.Fm.Get();
        if (t.only_current_platform && o.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (n = e.GetPlatforms()) || void 0 === n
                ? void 0
                : n.windows) &&
                o.BIsPreferredPlatform("win")) ||
              ((null === (i = e.GetPlatforms()) || void 0 === i
                ? void 0
                : i.mac) &&
                o.BIsPreferredPlatform("mac")) ||
              ((null === (s = e.GetPlatforms()) || void 0 === s
                ? void 0
                : s.steamos_linux) &&
                o.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const d = e.GetPlatforms();
        return !t.virtual_reality &&
          d &&
          d.vr_support &&
          d.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : (
                null === (r = e.GetAllCreatorClanIDs()) || void 0 === r
                  ? void 0
                  : r.some((e) => o.BIsIgnoringCurator(e))
              )
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function _(e, t) {
        var n;
        if (t.localized) {
          const t = (0, i.sfN)(d.TS.LANGUAGE);
          if (
            !(null === (n = e.GetAllLanguagesWithSomeSupport()) || void 0 === n
              ? void 0
              : n.includes(t))
          )
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function v(e, t, n, i, d) {
        const c = o.A.Get().GetApp(e);
        if (!c) return l.by.k_RejectNotLoaded;
        const u = g(c, t);
        if (u != l.by.k_NotRejected) return u;
        const m = a.Fm.Get();
        if (m.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (m.BExcludeTagIDs(c.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (m.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && c.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const p = c.GetAppType();
        if (!t.software && p == r.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && m.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !m.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [r.uE.Wz, r.uE.gQ, r.uE.ID].includes(p))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = c.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != n &&
          t.no_ao_content &&
          (c.HasContentDescriptorID(s.u7) || c.HasContentDescriptorID(s.T4))
          ? l.by.k_RejectAO
          : p == r.uE.ue &&
              t.games_already_in_library &&
              m.BIsGameOwned(c.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : d
              ? (p == r.uE.ue && i.BHasAppID(c.GetParentAppID() || 0)) ||
                i.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !c.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : _(c, t)
              : l.by.k_NotRejected;
      }
      function I(e, t) {
        const n = a.Fm.Get();
        let i = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (i = !0);
        }
        return t.games_not_in_library && i
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !i
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function y(e, t, n, i) {
        const s = o.A.Get().GetPackage(e);
        if (!s) return l.by.k_RejectNotLoaded;
        const r = g(s, t);
        if (r != l.by.k_NotRejected) return r;
        const d = I(s.GetIncludedAppIDs(), t);
        if (d != l.by.k_NotRejected) return d;
        const c = a.Fm.Get();
        return t.games_already_in_library && c.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : c.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : i
              ? n.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : _(s, t)
              : l.by.k_NotRejected;
      }
      function f(e, t, n, i) {
        const s = o.A.Get().GetBundle(e);
        if (!s) return l.by.k_RejectNotLoaded;
        const r = g(s, t);
        if (r != l.by.k_NotRejected) return r;
        const a = I(s.GetIncludedAppIDs(), t);
        return a != l.by.k_NotRejected
          ? a
          : i
            ? n.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : _(s, t)
            : l.by.k_NotRejected;
      }
    },
    62734: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => r });
      var i = n(81393);
      var s = n(78327);
      class r {
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          var e;
          return null === (e = this.m_HomeView) || void 0 === e
            ? void 0
            : e.home;
        }
        static Get() {
          var e;
          return (
            r.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, i.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (r.s_globalSingletonStore = new r())),
            r.s_globalSingletonStore
          );
        }
        constructor() {
          this.m_HomeView = void 0;
          const e = (0, s.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, s.Tc)(
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
                ...(null == e ? void 0 : e.all),
                ...(null == e ? void 0 : e.maincap),
              })
            : (this.m_HomeView = {
                home: {
                  ...(null == e ? void 0 : e.all),
                  ...(null == e ? void 0 : e.maincap),
                },
              });
        }
      }
    },
    46067: (e, t, n) => {
      "use strict";
      n.d(t, { dP: () => j, v0: () => H, Zr: () => F });
      var i,
        s = n(34629),
        r = n(41735),
        a = n.n(r),
        o = n(14947),
        l = n(19367),
        d = n.n(l),
        c = n(37085),
        u = n(47822),
        m = n(67718),
        p = n(17720),
        h = n(82429),
        g = n(91254),
        _ = n(16021),
        v = n(99032),
        I = n(81393),
        y = n(68797),
        f = n(6419),
        S = n(61859),
        C = n(78327),
        w = n(30894),
        A = n(81477),
        B = n(46910);
      !(function (e) {
        (e.Default = "default"),
          (e.Upcoming = "upcoming"),
          (e.Featured = "featured"),
          (e.Press = "press"),
          (e.Steam = "steam"),
          (e.Halloween = "halloween"),
          (e.Dev_Sales = "sales"),
          (e.Dev_All = "all"),
          (e.Dev_AssociatedPress = "associated_press");
      })(i || (i = {}));
      new Map();
      var G = n(44165),
        k = n(1059);
      function E(e, t, n, i) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: i,
          bIsFutureSection: n >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class b {
        constructor(e, t) {
          (this.m_nForwardStuckCount = 0),
            (this.m_nBackwardStuckCount = 0),
            (this.m_mapCalendarAppsByID = new Map()),
            (this.m_mapCalendarClansByID = new Map()),
            (this.m_mapCalendarEventsByGid = new Map()),
            (this.m_rgSortedCalendarEvents = new Array()),
            (this.m_currentView = o.sH.box(void 0)),
            (this.m_bFinishedSearchingForward = !1),
            (this.m_bFinishedSearchingBackward = !1),
            (this.m_rgCalendarSections = []),
            (this.m_rgFutureSections = []),
            (this.m_forwardRequestInFlight = null),
            (this.m_backwardRequestInFlight = null),
            (this.m_collectionMetaData = void 0),
            (0, o.Gn)(this),
            (this.m_key = e),
            (this.m_visibilityStore = new B.vJ(t)),
            w.Fm.Get().HintLoad();
        }
        GetNumEventsLoaded() {
          return this.m_mapCalendarEventsByGid.size;
        }
        BIsGlobalCalendar() {
          return !(
            this.m_key.appids ||
            this.m_key.clanaccountids ||
            this.m_key.collectionid ||
            this.m_key.saleid
          );
        }
        BIsShowingFeaturedFeed() {
          return Boolean(
            this.GetCollectionID() === i.Featured ||
              (this.BIsGlobalCalendar() && !C.iA.accountid),
          );
        }
        BIsSingleSourceCalendar() {
          return Boolean(
            this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar(),
          );
        }
        GetKey() {
          return this.m_key;
        }
        BEventMatchCalendarSingleSource(e) {
          var t, n;
          return (
            (this.BIsSingleAppCalendar() &&
              (null === (t = this.m_key.appids) || void 0 === t
                ? void 0
                : t[0]) == e.appid) ||
            (this.BIsSingleGroupCalendar() &&
              (null === (n = this.m_key.clanaccountids) || void 0 === n
                ? void 0
                : n[0]) == e.clanid)
          );
        }
        BIsSingleSourceMuted() {
          if (!this.BIsSingleSourceCalendar()) return !1;
          if (this.BIsSingleAppCalendar()) {
            const e = this.GetSingleAppID();
            return void 0 !== e && k.S.Get().BIsMutedAppID(e);
          }
          const e = this.GetSingleGroupID();
          return void 0 !== e && k.S.Get().BIsMutedClanID(e);
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length,
          );
        }
        GetSingleGroupID() {
          var e;
          return null === (e = this.m_key.clanaccountids) || void 0 === e
            ? void 0
            : e[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          var e;
          return null === (e = this.m_key.appids) || void 0 === e
            ? void 0
            : e[0];
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
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(e) {
          const t = e;
          return Boolean(
            t &&
              "object" == typeof t &&
              t.clanid &&
              "number" == typeof t.clanid &&
              t.clan_event_gid &&
              "string" == typeof t.clan_event_gid,
          );
        }
        SetFilteredView(e, t) {
          const n = this.m_currentView.get();
          n && n.dispose();
          const i = this.BIsSingleSourceMuted(),
            s = new D(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              Boolean(t),
              i,
            );
          this.m_currentView.set(s);
        }
        BIsFilteredViewEmpty() {
          var e;
          return !!(null === (e = this.m_currentView.get()) || void 0 === e
            ? void 0
            : e.BIsViewEmpty());
        }
        GetCalendarItemsInTimeRange(e, t) {
          const n = this.m_currentView.get();
          return n
            ? n.GetCalendarItemsInTimeRange(e, t)
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
          var n, i;
          return null !==
            (i =
              null === (n = this.m_currentView.get()) || void 0 === n
                ? void 0
                : n.GetCurrentlyLoadedEventCount(e, t)) && void 0 !== i
            ? i
            : { nCount: 0, bIsComplete: !1 };
        }
        GetCurrentlyLoadedItemsForStats() {
          var e;
          return (
            (null === (e = this.m_currentView.get()) || void 0 === e
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
              (this.m_dtInitTime = G.HD.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            n = e.getTime() / 1e3;
          t.push(E(n, (0, S.we)("#EventCalendar_FutureEventsHeader"), n));
          const i = new Date(e);
          i.setHours(0, 0, 0, 1);
          let s = i.getTime() / 1e3;
          t.push(E(n, (0, S.we)("#Time_Today"), s, n)),
            i.setDate(i.getDate() - 1);
          let r = s;
          (s = i.getTime() / 1e3),
            t.push(E(n, (0, S.we)("#Time_Yesterday"), s, r));
          const a =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            o = a ? a.start_time : n;
          let l = o > s;
          for (let e = 0; e < 5 && !l; e++)
            i.setDate(i.getDate() - 1),
              (r = s),
              (s = i.getTime() / 1e3),
              t.push(E(n, (0, S.cc)(i), s, r)),
              (l = o > s);
          const d = new Date(i);
          let c = s;
          for (; d.getMonth() == e.getMonth() && 1 != d.getDate() && !l; ) {
            d.setDate(d.getDate() - 7);
            const e = d.getTime() / 1e3;
            t.push(E(n, (0, S.lQ)(c - 1), e, c)), (l = o > e), (c = e);
          }
          const u = new Date(e);
          u.setHours(0, 0, 0, 1), u.setDate(1);
          let m = c;
          for (let i = 1; !l; i++) {
            const s = new Date(u);
            s.setMonth(e.getMonth() - i, 1);
            const r = s.getTime() / 1e3;
            t.push(E(n, (0, S.lQ)(r), r, m)), (l = o > r), (m = r);
          }
          this.m_rgCalendarSections.length > t.length
            ? this.m_rgCalendarSections.splice(
                t.length,
                this.m_rgCalendarSections.length,
              )
            : t
                .splice(this.m_rgCalendarSections.length, t.length)
                .forEach((e) => this.m_rgCalendarSections.push(e));
        }
        InitFutureCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [];
          let n;
          this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
          const i = this.m_rgSortedCalendarEvents[0];
          i && (n = i.start_time), n || (n = e.getTime() / 1e3);
          const s = e.getTime() / 1e3,
            r = new Date(e);
          r.setHours(24, 0, 0, 0);
          let a = r.getTime() / 1e3;
          t.push(
            E(
              s,
              (0, S.we)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              s,
              a,
            ),
          );
          let o = n <= a,
            l = a;
          r.setDate(r.getDate() + 1),
            (a = r.getTime() / 1e3),
            o || t.push(E(s, (0, S.we)("#Time_Tomorrow"), l, a)),
            (o = n <= a);
          const c = 6 - d()(e).weekday();
          for (let e = 2; e <= c && !o; e++) {
            l = a;
            const e = (0, S.cc)(r);
            r.setDate(r.getDate() + 1),
              (a = r.getTime() / 1e3),
              t.push(E(s, e, l, a)),
              (o = n <= a);
          }
          if (this.m_key.bSectionByDay)
            for (; !o; ) {
              l = a;
              const e = (0, S.$w)(r);
              r.setDate(r.getDate() + 1),
                (a = r.getTime() / 1e3),
                t.push(E(s, e, l, a)),
                (o = n <= a);
            }
          else {
            const i = new Date(r);
            let l = a;
            const c = d()(e).daysInMonth();
            if (i.getMonth() == e.getMonth() && i.getDate() != c && !o) {
              i.setDate(i.getDate() + 7);
              const e = i.getTime() / 1e3;
              t.push(E(s, (0, S.we)("#EventCalendar_NextWeek"), l, e)),
                (o = n <= e),
                (l = e);
            }
            const u = new Date(e);
            let m;
            if (
              (u.setMonth(u.getMonth() + 1),
              u.setDate(1),
              u.setHours(0, 0, 0, 0),
              i < u && !o)
            ) {
              const e = u.getTime() / 1e3;
              t.push(E(s, (0, S.we)("#EventCalendar_LaterThisMonth"), l, e)),
                (o = n <= e),
                (m = e);
            } else m = l;
            for (let i = 2; !o; i++) {
              const r = new Date(u);
              r.setMonth(e.getMonth() + i);
              const a = r.getTime() / 1e3;
              t.push(E(s, (0, S.lQ)(m), m, a)), (o = n <= a), (m = a);
            }
          }
          this.m_rgFutureSections.length > t.length
            ? this.m_rgFutureSections.splice(
                t.length,
                this.m_rgFutureSections.length,
              )
            : t
                .splice(this.m_rgFutureSections.length, t.length)
                .forEach((e) => this.m_rgFutureSections.push(e));
        }
        async RegisterCalendarEventsAndModels(e) {
          await w.Fm.Get().HintLoad(),
            (0, o.h5)(() => {
              var t, n, i, s, r, a;
              this.RegisterCalendarApps(
                null !== (t = e.apps) && void 0 !== t ? t : [],
              ),
                this.RegisterCalendarClans(
                  null !== (n = e.clans) && void 0 !== n ? n : [],
                ),
                this.RegisterCalendarEvents(
                  null !== (i = e.documents) && void 0 !== i ? i : [],
                ),
                g.O3.RegisterClanEvents(
                  null !== (s = e.events) && void 0 !== s ? s : [],
                ),
                this.RegisterReadEvents(
                  null !== (r = e.events_read) && void 0 !== r ? r : [],
                ),
                this.RegisterEventVotes(
                  null !== (a = e.event_votes) && void 0 !== a ? a : [],
                ),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
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
              const e = new u.dF();
              (e.appid = t.appid),
                (e.source = t.source),
                (e.playtime = t.playtime),
                (e.last_played = t.last_played),
                (e.wishlist_added = t.wishlist_added),
                this.m_mapCalendarAppsByID.set(t.appid, e),
                t.hidden &&
                  this.m_visibilityStore.SetAppVisibility(t.appid, !1);
            }
        }
        RegisterCalendarClans(e) {
          if (e)
            for (const t of e)
              if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                const e = new u.w2();
                (e.clanid = t.clanid),
                  (e.source = t.source),
                  this.m_mapCalendarClansByID.set(t.clanid, e),
                  t.hidden &&
                    this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
              }
        }
        RegisterReadEvents(e) {
          e && (0, m.No)(e);
        }
        RegisterEventVotes(e) {
          if (!e) return;
          const t = h.KN.Get();
          for (const n of e) {
            const e = void 0 === n.vote ? void 0 : Boolean(n.vote);
            t.SetVote(n.id, e);
          }
        }
        RegisterCalendarEvents(e) {
          if (e) {
            let t = !1;
            for (const n of e)
              this.BInternalInsertCalendarEventItem(n) && (t = !0);
            t && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(e) {
          return "forward" == e
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(e, t = void 0) {
          return "forward" === e
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
          const n =
              "forward" === e
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            i = this.GetTimeEdgeForDirection(e, void 0);
          return n || i !== t
            ? ("forward" == e
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == e
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(e) {
          return "forward" === e
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(e, t) {
          (0, I.wT)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e,
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        async LoadAdditionalEvents(e, t) {
          var n, i, s;
          if (this.BHitEventHorizon(e)) return c.R;
          let r = this.GetRequestInFlight(e);
          if (r) return r;
          const o =
              C.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            l =
              "forward" === e
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            d = l >= 3 ? 1 : 0,
            u = 250 + 50 * (l < 3 ? l : 0),
            m = G.HD.GetTimeNowWithOverride(),
            p =
              null !== (n = this.GetTimeEdgeForDirection(e, m)) && void 0 !== n
                ? n
                : m,
            h = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: u,
              populateEvents: 15,
              appTypes: this.m_visibilityStore.GetGameSources().join(","),
              eventTypes: Array.from(
                this.m_visibilityStore.enabledEventTypeSet,
              ).join(","),
              appIdFilter: (
                null === (i = this.m_key.appids) || void 0 === i
                  ? void 0
                  : i.length
              )
                ? this.m_key.appids.sort().join(",")
                : void 0,
              clanIdFilter: (
                null === (s = this.m_key.clanaccountids) || void 0 === s
                  ? void 0
                  : s.length
              )
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
          "forward" === e
            ? ((h.minTime = Math.floor(p + d)), (h.ascending = !0))
            : ((h.maxTime = Math.floor(p - d)), (h.ascending = !1));
          return (
            (r = a()
              .get(o, {
                params: h,
                cancelToken: t ? t.token : void 0,
                withCredentials: !0,
              })
              .then(async (n) => {
                if ((this.SetRequestInFlight(e, null), n.data.success == c.R)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(n.data),
                    this.UpdateStuckCounters(e, p))
                  )
                    return this.LoadAdditionalEvents(e, t);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + n.data.msg,
                  );
                return n.data.success;
              })
              .catch((t) => {
                this.SetRequestInFlight(e, null);
                let n = (0, y.H)(t);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + n.strErrorMsg,
                    n,
                  ),
                  "forward" == e
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  c.zi
                );
              })),
            this.SetRequestInFlight(e, r),
            r
          );
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              (0, I.wT)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!",
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
          const t = this.m_mapCalendarAppsByID.get(e.appid),
            n = this.m_mapCalendarClansByID.get(e.clanid);
          if (!t && !n)
            return console.log("No AppInfo or ClanInfo For: ", e), !1;
          const i = new u.NK();
          return (
            (i.clanid = e.clanid),
            (i.unique_id = e.unique_id),
            (i.event_type = e.event_type),
            (i.appid = e.appid),
            (i.start_time = e.start_time),
            (i.score = e.score),
            (i.appInfo = t),
            (i.clanInfo = n),
            this.m_rgSortedCalendarEvents.push(i),
            this.m_mapCalendarEventsByGid.set(i.unique_id, i),
            !0
          );
        }
        GetCalendarAppInfoForAppID(e) {
          return this.m_mapCalendarAppsByID.get(e);
        }
        RebuildSortedCalendarEventList() {
          const e = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = e.sort(
            (e, t) => t.start_time - e.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(e, t) {
          const n = e.appInfo ? e.appid : void 0,
            i = e.clanInfo ? e.clanInfo.clanid : void 0;
          null != n || null != i
            ? (await k.S.Get().UpdateCommunicationSetting(t, n, i),
              A.V.RecordAppInteractionEvent(n, A.E.k_eMuted))
            : (0, I.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
        }
        GetAllClans() {
          return Array.from(this.m_mapCalendarClansByID.keys());
        }
        GetAllApps() {
          return Array.from(this.m_mapCalendarAppsByID.keys());
        }
      }
      (0, s.Cg)([o.sH], b.prototype, "m_mapCalendarAppsByID", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_mapCalendarClansByID", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_bFinishedSearchingForward", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_rgCalendarSections", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_rgFutureSections", void 0),
        (0, s.Cg)([o.sH], b.prototype, "m_collectionMetaData", void 0),
        (0, s.Cg)([o.XI], b.prototype, "InitCalendarSections", null),
        (0, s.Cg)([o.XI], b.prototype, "InitFutureCalendarSections", null),
        (0, s.Cg)([o.XI], b.prototype, "RegisterCalendarEventsAndModels", null),
        (0, s.Cg)([o.XI], b.prototype, "RegisterCalendarApps", null),
        (0, s.Cg)([o.XI], b.prototype, "RegisterCalendarClans", null),
        (0, s.Cg)([o.XI], b.prototype, "RegisterEventVotes", null),
        (0, s.Cg)([o.XI], b.prototype, "RegisterCalendarEvents", null),
        (0, s.Cg)([f.o], b.prototype, "BHitEventHorizon", null),
        (0, s.Cg)([o.XI.bound], b.prototype, "LoadAdditionalEvents", null),
        (0, s.Cg)(
          [o.XI],
          b.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null,
        );
      class D {
        constructor(e, t, n, i, s, r) {
          (this.m_rgLoadedEventsBox = o.sH.box([])),
            (this.m_lastLoadLatch = null),
            (0, o.Gn)(this),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = n),
            (this.m_fnBIsEventInView = i),
            (this.m_bSkipStorePreferenceCheck = s),
            (this.m_bAllowMutedAndIgnoredSources = r),
            (this.m_rgAutorunDisposer = (0, o.fm)(async () => {
              const e = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const t = Array.from(
                  new Set(e.map((e) => e.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = e),
                  await _.A.Get().QueueMultipleAppRequests(t, {
                    ...v.jy,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != e)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(e);
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
          return this.m_rgLoadedEventsBox.get().filter((e) => {
            if (e.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (k.S.Get().BIsMutedAppID(e.appid) ||
                  w.Fm.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, v.Li)(_.A.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (k.S.Get().BIsMutedClanID(e.clanid) ||
                w.Fm.Get().BIsIgnoringCurator(p.b.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const n = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? !!t && n.length > 0 && n[0].start_time > t
            : void 0 !== t && n.length > 0 && n[n.length - 1].start_time < t;
        }
        async EnsureRangeIsLoaded(e, t) {
          for (
            let e = 0;
            e < 100 && !this.BIsCompleteThroughTime("forward", t);
            e++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let t = 0;
            t < 100 && !this.BIsCompleteThroughTime("backward", e);
            t++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(e, t) {
          this.EnsureRangeIsLoaded(e, t);
          const n = this.filteredAndCheckedEvents.filter(
              (n) => n.start_time >= e && (!t || n.start_time < t),
            ),
            i = this.BIsCompleteThroughTime("forward", t),
            s = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: n, bIsComplete: i && s };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let n = 0;
          this.filteredAndCheckedEvents.forEach((i) => {
            i.start_time >= e && (!t || i.start_time < t) && n++;
          });
          const i = this.BIsCompleteThroughTime("forward", t),
            s = this.BIsCompleteThroughTime("backward", e);
          return { nCount: n, bIsComplete: i && s };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => g.O3.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (!t || void 0 === t.startTime) return !1;
              const n = t.endTime || t.startTime + 3600;
              return e >= t.startTime && e < n;
            });
        }
      }
      (0, s.Cg)([o.EW.struct], D.prototype, "viewFilteredEvents", null),
        (0, s.Cg)([o.EW.struct], D.prototype, "filteredAndCheckedEvents", null);
      const T = o.sH.box(null),
        R = new Map();
      function F(e, t) {
        let n = "";
        return (
          e.appids &&
            e.appids.length > 0 &&
            (n += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            e.clanaccountids.length > 0 &&
            (n += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (n += "collection:" + e.collectionid),
          e.saleid && (n += "sale:" + e.saleid),
          e.bSectionByDay && (n += "_sectionbyday"),
          e.rtCalendarEnd && (n += "_end:" + e.rtCalendarEnd),
          e.rgTags &&
            e.rgTags.length > 0 &&
            (n += "_tags:" + e.rgTags.slice().sort().join(",")),
          e.hubtype &&
            (n +=
              "_hubtype:" +
              e.hubtype +
              "_" +
              e.category_or_language +
              "_" +
              e.tag_name),
          T.get() !== n && (T.set(n), R.has(n) || R.set(n, new b(e, t))),
          n
        );
      }
      function H() {
        let e = T.get();
        return null == e && (e = F({})), R.get(e);
      }
      function j() {
        return null !== T.get();
      }
      window.g_EventCalendarMap = R;
    },
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => d });
      var i = n(41735),
        s = n.n(i),
        r = n(78327),
        a = n(91254),
        o = n(70078),
        l = n(37085);
      class d extends a.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", (0, r.KC)());
          let i =
              r.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            a = await s().post(i, n);
          if (a.data.success != l.R) throw a.data;
          return this.RemoveGIDFromList(e, o.cB + t), a.data;
        }
        static Get() {
          return (
            d.sm_Instance || ((d.sm_Instance = new d()), d.sm_Instance.Init()),
            d.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            d.sm_SummaryInstance ||
              ((d.sm_SummaryInstance = new d(!0)), d.sm_SummaryInstance.Init()),
            d.sm_SummaryInstance
          );
        }
      }
    },
    1059: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var i = n(34629),
        s = n(41735),
        r = n.n(s),
        a = n(14947),
        o = n(37085),
        l = n(81393),
        d = n(68797),
        c = n(78327);
      class u {
        constructor() {
          (this.m_mapBlockedAppIds = new Map()),
            (this.m_mapBlockedClanIds = new Map()),
            (0, a.Gn)(this);
        }
        static Get() {
          return (
            u.s_globalSingletonStore ||
              ((u.s_globalSingletonStore = new u()),
              u.s_globalSingletonStore.Init()),
            u.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const e = (0, c.Tc)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(e) &&
            (e.appids &&
              e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, !0)),
            e.clanids &&
              e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, !0)));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            ((Array.isArray(t.appids) && t.appids.length > 0) ||
              (Array.isArray(t.clanids) && t.clanids.length > 0))
          );
        }
        BIsEventBlocked(e) {
          return e.appid
            ? this.m_mapBlockedAppIds.has(e.appid)
            : !!e.clanInfo && this.m_mapBlockedClanIds.has(e.clanInfo.clanid);
        }
        BIsMutedAppID(e) {
          return this.m_mapBlockedAppIds.has(e);
        }
        BIsMutedClanID(e) {
          return this.m_mapBlockedClanIds.has(e);
        }
        async UpdateCommunicationSetting(e, t, n) {
          const i = c.TS.STORE_BASE_URL + "account/optoutappcommunication/",
            s = new FormData();
          if (
            (s.append("sessionid", (0, c.KC)()),
            s.append("allowCommunication", e ? "1" : "0"),
            t)
          ) {
            if (
              (!e && this.m_mapBlockedAppIds.has(t)) ||
              (e && !this.m_mapBlockedAppIds.has(t))
            )
              return !0;
            e
              ? this.m_mapBlockedAppIds.delete(t)
              : this.m_mapBlockedAppIds.set(t, !0),
              s.append("appId", t.toString());
          } else {
            if (!n)
              return (
                (0, l.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!e && this.m_mapBlockedClanIds.has(n)) ||
              (e && !this.m_mapBlockedClanIds.has(n))
            )
              return !0;
            e
              ? this.m_mapBlockedClanIds.delete(n)
              : this.m_mapBlockedClanIds.set(n, !0),
              s.append("clanId", n.toString());
          }
          try {
            return (await r().post(i, s)).data.success == o.R;
          } catch (e) {
            return (
              console.error(
                "Blocking app id hit error " + (0, d.H)(e).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, i.Cg)([a.sH], u.prototype, "m_mapBlockedAppIds", void 0),
        (0, i.Cg)([a.sH], u.prototype, "m_mapBlockedClanIds", void 0);
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => g });
      var i = n(34629),
        s = n(7850),
        r = n(75844),
        a = n(90626),
        o = n(73964),
        l = n(91254),
        d = n(65606),
        c = n(55294),
        u = n(738),
        m = n(73745),
        p = n(19332);
      function h(e) {
        const { event: t, closeModal: n } = e,
          i = (0, d.LJ)();
        return (0, s.jsx)(c.AD, {
          initialEvent: t,
          bShowOnlyInitialEvent: !0,
          partnerEventStore: l.O3,
          emoticonStore: i,
          showAppHeader: !0,
          closeModal: n,
        });
      }
      function g(e, t) {
        (0, u.pg)((0, s.jsx)(h, { event: e }), t);
      }
      let _ = class extends a.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = a.createRef());
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
        escFunction(e) {
          const { fnClose: t } = this.props;
          27 === e.keyCode && t && t();
        }
        OnBackgroundClick(e) {
          e.currentTarget == e.target && this.props.fnClose();
        }
        render() {
          const { event: e, langOverride: t, isPreview: n } = this.props;
          return (0, s.jsx)("div", {
            ref: this.m_refFocus,
            className: p.Main,
            onClick: this.OnBackgroundClick,
            children: (0, s.jsx)(d.sU, {
              children: (i) =>
                (0, s.jsx)(
                  c.He,
                  {
                    event: e,
                    emoticonStore: i,
                    partnerEventStore: o.$.Get(),
                    langOverride: t,
                    isPreview: n,
                    bDisableBroadcastPlayer: !1,
                  },
                  e.GID,
                ),
            }),
          });
        }
      };
      (0, i.Cg)([m.oI], _.prototype, "escFunction", null),
        (0, i.Cg)([m.oI], _.prototype, "OnBackgroundClick", null),
        (_ = (0, i.Cg)([r.PA], _));
    },
    74976: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => m });
      var i = n(7850),
        s = n(6144),
        r = n(87652),
        a = n(43261),
        o = n(46067),
        l = n(81477),
        d = n(23338);
      class c {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const u = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(e) {
            if (e.bOldAnnouncement) return !1;
            const t = this.m_mapEvents.get(e.GID);
            return !t || !t.m_bHasBeenTracked;
          }
          StartTracking(e, t, n) {
            if (e.bOldAnnouncement) return;
            let i = this.m_mapEvents.get(e.GID);
            i || ((i = new c()), this.m_mapEvents.set(e.GID, i)),
              i.m_bHasBeenTracked ||
                i.m_fnSubmit ||
                ((i.m_fnSubmit = new s.LU()),
                i.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, e, t, n),
                ));
          }
          StopTracking(e) {
            const t = this.m_mapEvents.get(e.GID);
            t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
          }
          ReportImpression(e, t, n) {
            n.RecordEventShown(e, a.Tc.qC),
              t && l.V.RecordViewedEvent((0, o.v0)(), e.GID);
            const i = this.m_mapEvents.get(e.GID);
            i &&
              ((i.m_bHasBeenTracked = !0),
              i.m_fnSubmit.Cancel(),
              (i.m_fnSubmit = null));
          }
        })(),
        m = (e) => {
          const { event: t } = e,
            n = (0, r.Y)();
          if (u.ShouldTrack(t)) {
            const s = () => u.StartTracking(t, e.recordNewsHubStats || !1, n),
              r = () => u.StopTracking(t);
            return (0, i.jsx)(d.Y, { onEnter: s, onLeave: r });
          }
          return null;
        };
    },
    8107: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => w });
      var i = n(34629),
        s = n(7850),
        r = n(41735),
        a = n.n(r),
        o = n(75844),
        l = n(90626),
        d = n(87652),
        c = n(65606),
        u = n(55294),
        m = n(9154),
        p = n(88843),
        h = n(64641),
        g = n.n(h),
        _ = n(22797),
        v = n(68797),
        I = n(78327),
        y = n(66418),
        f = n(30894),
        S = n(51272),
        C = n(84811);
      const w = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, I.Qn)(),
          i = (0, d.Y)();
        return (0, s.jsx)(C.tH, {
          children: (0, s.jsx)(A, {
            ...e,
            bShowOnlyInitialEvent: t || n,
            tracker: i,
          }),
        });
      };
      let A = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { bLoading: !1, eventModel: this.props.eventModel }),
            (this.m_refParent = l.createRef()),
            (this.m_cancelSignal = a().CancelToken.source());
        }
        componentDidMount() {
          this.state.eventModel ||
            this.setState({ bLoading: !0 }, this.LoadEvent);
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.add(p.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.remove(p.BodyNoScroll);
        }
        GetBodyElement() {
          return this.m_refParent.current
            ? this.m_refParent.current.closest("body")
            : null;
        }
        async LoadEvent() {
          const {
            appid: e,
            clanSteamID: t,
            announcementGID: n,
            partnerEventStore: i,
            additionalParams: s,
          } = this.props;
          i.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            s,
            this.m_cancelSignal,
          )
            .then((e) => {
              e.length > 0
                ? this.setState(
                    { bLoading: !1, eventModel: e[0] },
                    this.HandleReadEvent,
                  )
                : (this.props.onEventNotFound && this.props.onEventNotFound(),
                  this.setState({ bLoading: !1 }));
            })
            .catch((e) => {
              let t = (0, v.H)(e);
              console.error(
                "EventInfiniteScrollModal failed " + t.strErrorMsg,
                t,
              ),
                this.setState({ bLoading: !1 });
            });
        }
        async HandleReadEvent() {
          const { eventModel: e } = this.state,
            { trackingLocation: t, tracker: n } = this.props;
          e && e.BIsPartnerEvent() && (n.RecordEventRead(e, t), n.Flush());
        }
        render() {
          const { bShowOnlyInitialEvent: e } = this.props,
            { bLoading: t, eventModel: n } = this.state;
          if (t)
            return (0, s.jsx)(m.EN, {
              active: !0,
              children: (0, s.jsx)("div", {
                className: g().FlexCenter,
                style: { height: "400px" },
                children: (0, s.jsx)(_.t, {}),
              }),
            });
          const {
            closeModal: i,
            appid: r,
            clanSteamID: a,
            className: o,
            partnerEventStore: l,
            showAppHeader: d,
            bPrimaryPageFeature: p,
            additionalParams: h,
            eventClassName: v,
          } = this.props;
          let I;
          y.TS.IN_CLIENT &&
            (null == n ? void 0 : n.appid) &&
            (f.Fm.Get().HintLoad(),
            f.Fm.Get().BOwnsApp(n.appid) &&
              (I = (e) =>
                (0, S.EP)(e, "steam://nav/games/details/" + n.appid)));
          const C = (0, s.jsx)(c.sU, {
            children: (t) =>
              (0, s.jsx)(u.AD, {
                initialEvent: n,
                appid: r,
                clanSteamID: a,
                partnerEventStore: l,
                emoticonStore: t,
                closeModal: !p && i,
                showAppHeader: d,
                bShowOnlyInitialEvent: e,
                additionalParams: h,
                eventClassName: v,
                onAppIconClick: I,
              }),
          });
          return p
            ? C
            : (0, s.jsx)(m.EN, {
                active: !0,
                children: (0, s.jsx)("div", { className: o, children: C }),
              });
        }
      };
      A = (0, i.Cg)([o.PA], A);
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => y,
        H2: () => _,
        Li: () => I,
        S7: () => p,
        a9: () => f,
        jy: () => v,
        nt: () => g,
        sd: () => m,
        tJ: () => h,
      });
      var i = n(57876),
        s = n(97471),
        r = n(81886),
        a = n(22837),
        o = n(6824),
        l = n(30894),
        d = n(16021),
        c = n(62734),
        u = n(81393);
      function m(e) {
        return d.A.Get().BIsStoreItemMissing(e.id, (0, s.SW)(e.type));
      }
      function p(e, t, n) {
        const i = new Array();
        return (
          null == e || e.forEach((e) => i.push({ id: e, type: "game" })),
          null == t || t.forEach((e) => i.push({ id: e, type: "sub" })),
          null == n || n.forEach((e) => i.push({ id: e, type: "bundle" })),
          i
        );
      }
      function h(e) {
        var t, n;
        const i = d.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
        return (
          (null !==
            (n =
              null === (t = null == i ? void 0 : i.GetBestPurchaseOption()) ||
              void 0 === t
                ? void 0
                : t.discount_pct) && void 0 !== n
            ? n
            : 0) > 0
        );
      }
      function g(e) {
        var t;
        if (
          !(null === (t = c.f.Get().GetHomeView()) || void 0 === t
            ? void 0
            : t.localized)
        )
          return !0;
        const n = d.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
        return (
          !n ||
          l.Fm.Get().BIsAnyLanguageEnabled(n.GetAllLanguagesWithSomeSupport())
        );
      }
      async function _(e, t, n) {
        if (!e || 0 == e.length) return [];
        const i = e.filter((e) => (0, r.fp)(e.type)).map((e) => e.id),
          s = e.filter((e) => "sub" === e.type).map((e) => e.id),
          a = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = i.filter((e) => !d.A.Get().BHasApp(e, t)),
            n = s.filter((e) => !d.A.Get().BHasApp(e, t)),
            r = a.filter((e) => !d.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || r.length > 0) &&
            (await Promise.all([
              d.A.Get().QueueMultipleAppRequests(e, t),
              d.A.Get().QueueMultiplePackageRequests(n, t),
              d.A.Get().QueueMultipleBundleRequests(r, t),
            ]));
        }
        const o = new Set();
        null == a ||
          a.forEach((e) => {
            const t = d.A.Get().GetBundle(e);
            null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
          }),
          null == s ||
            s.forEach((e) => {
              const t = d.A.Get().GetPackage(e);
              null == t || t.GetIncludedAppIDs().forEach((e) => o.add(e));
            });
        const l = Array.from(o).filter((e) => !d.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await d.A.Get().QueueMultipleAppRequests(l, t)),
          i.forEach((e) => o.add(e)),
          n)
        ) {
          const e = Array.from(o)
            .map((e) => {
              const t = d.A.Get().GetApp(e),
                n = null == t ? void 0 : t.GetParentAppID();
              return n ? (o.add(n), n) : null;
            })
            .filter((e) => null !== e)
            .filter((e) => !d.A.Get().BHasApp(e, t));
          e.length > 0 && (await d.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(o).filter((e) => {
          const t = d.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const v = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function I(e) {
        var t;
        if (!e) return !0;
        const n = l.Fm.Get();
        if (
          ((0, u.wT)(n.BIsLoaded(), "Dynamic Store not loaded"),
          e.GetStoreItemType() == o.c6.qI)
        ) {
          const t = e.GetParentAppID();
          if (
            n.BIsGameIgnored(e.GetAppID()) ||
            (void 0 !== t && n.BIsGameIgnored(t))
          )
            return !0;
        }
        if (n.BExcludesContentDescriptor(e.GetContentDescriptorIDs()))
          return !0;
        if (n.BExcludeTagIDs(e.GetTagIDs())) return !0;
        if (e.GetAllCreatorClanIDs().some((e) => n.BIsIgnoringCurator(e)))
          return !0;
        if (
          null === (t = c.f.Get().GetHomeView()) || void 0 === t
            ? void 0
            : t.localized
        ) {
          const t = e.GetAllLanguagesWithSomeSupport();
          if (
            t.length > 0 &&
            !e.BHasSomeLanguageSupport(a.Bhc) &&
            !n.BIsAnyLanguageEnabled(t)
          )
            return !0;
        }
        return !1;
      }
      async function y(e, t, n, r) {
        const a = [];
        await _(e, i.Xh, t);
        for (const i of e) {
          const e = d.A.Get().GetStoreItem(i.id, (0, s.SW)(i.type));
          if (!e) {
            0;
            continue;
          }
          const o = e
            .GetIncludedAppIDs()
            .map((e) => d.A.Get().GetApp(e))
            .filter((e) => Boolean(e));
          if ((o.push(e), t)) {
            const e = new Set(
                o.map((e) => e.GetParentAppID()).filter((e) => Boolean(e)),
              ),
              t = Array.from(e)
                .map((e) => d.A.Get().GetApp(e))
                .filter((e) => Boolean(e));
            t && o.push(...t);
          }
          o.some(r || I)
            ? n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(i))
            : a.push(i);
        }
        return a;
      }
      async function f(e, t, n, i, r, a, o) {
        let c = await y(
          e,
          t,
          o,
          r
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : I,
        );
        const u = [];
        for (const e of c) {
          const t = d.A.Get().GetStoreItem(e.id, (0, s.SW)(e.type));
          if (!t) continue;
          const r = null == t ? void 0 : t.GetIncludedAppIDsOrSelf();
          let c = !1;
          n && (c = c || r.every((e) => l.Fm.Get().BIsGameOwned(e))),
            i && (c = c || r.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            a && (c = c || r.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            c ? o && o.push(e) : u.push(e);
        }
        return u;
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => h, pn: () => _, qx: () => g });
      var i = n(7850),
        s = n(68255),
        r = n(61859),
        a = n(12155),
        o = n(90626),
        l = n(52038),
        d = n(95695),
        c = n(84811),
        u = n(64734),
        m = n(65946),
        p = n(26408);
      function h(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: s,
            toggleMinimized: r,
            className: a,
            children: o,
            elAdditionalButtons: h,
          } = e,
          g = (0, m.q3)(() => s());
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: (0, l.A)(
                a,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, i.jsxs)("div", {
                  className: (0, l.A)(
                    d.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, i.jsx)(p.o, { tooltip: n })],
                }),
                (0, i.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    h,
                    (0, i.jsx)(_, { bIsMinimized: g, fnToggleMinimize: r }),
                  ],
                }),
              ],
            }),
            !g && (0, i.jsx)(c.tH, { children: o }),
          ],
        });
      }
      function g(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return (0, i.jsx)(h, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, i.jsx)(s.$n, {
          "data-tooltip-text": (0, r.we)(o),
          onClick: n,
          children: e.bIsMinimized
            ? (0, i.jsx)(a.hz4, {})
            : (0, i.jsx)(a.Xjb, {}),
        });
      }
    },
  },
]);
