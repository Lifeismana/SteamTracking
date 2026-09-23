/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3584],
  {
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    57876: (e, t, n) => {
      "use strict";
      n.d(t, { Xh: () => d, cU: () => u, tf: () => m, wl: () => p });
      var r = n(22837),
        i = n(71150),
        o = n(30570),
        a = n(30894),
        s = n(16021),
        l = n(97471),
        c = n(78327);
      const d = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_optin_registration_tags: !0,
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
      const p = 4;
      function m(e, t, n, r, i, o) {
        var a;
        const c = new Array(),
          d = new Array(),
          u = new Array(),
          m = new Array();
        if (!e || 0 == e.length) return c;
        const _ = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let o of e) {
          let e = o.id,
            p = l.by.k_NotRejected;
          switch (o.item_type) {
            case "sub":
              const i = s.A.Get().GetPackage(e);
              if (
                1 !==
                (null === (a = null == i ? void 0 : i.GetIncludedAppIDs()) ||
                void 0 === a
                  ? void 0
                  : a.length)
              ) {
                p = I(e, t, r, !0);
                break;
              }
              e = i.GetIncludedAppIDs()[0];
            case "app":
              p = f(e, t, n, r, !0);
              break;
            case "bundle":
              p = G(e, t, r, !0);
          }
          if (
            (p == l.by.k_NotRejected
              ? ((o.rejected = l.by.k_NotRejected),
                c.push({ ...o, priority: 1 }))
              : _.includes(p)
                ? ((o.rejected = l.by.k_NotRejected), d.push(o))
                : ((o.rejected = p),
                  p == l.by.k_RejectIgnoredGame ? u.push(o) : m.push(o)),
            c.length > i)
          )
            break;
        }
        return (
          c.length < i &&
            (y(c, d, o, 2),
            c.length < o &&
              t.enforce_minimum &&
              (y(c, u, o, 3), y(c, m, o, p))),
          c
        );
      }
      function y(e, t, n, r) {
        for (let i = 0; e.length < n && i < t.length; ++i)
          e.push({ ...t[i], priority: r });
      }
      function _(e, t) {
        var n, r, i, o;
        const s = a.Fm.Get();
        if (t.only_current_platform && s.BHasPlatformPreferenceSet()) {
          if (
            !(
              ((null === (n = e.GetPlatforms()) || void 0 === n
                ? void 0
                : n.windows) &&
                s.BIsPreferredPlatform("win")) ||
              ((null === (r = e.GetPlatforms()) || void 0 === r
                ? void 0
                : r.mac) &&
                s.BIsPreferredPlatform("mac")) ||
              ((null === (i = e.GetPlatforms()) || void 0 === i
                ? void 0
                : i.steamos_linux) &&
                s.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        if (!t.prepurchase && e.BIsComingSoon())
          return l.by.k_RejectNoComingSoon;
        const c = e.GetPlatforms();
        return !t.virtual_reality &&
          c &&
          c.vr_support &&
          c.vr_support.vrhmd_only
          ? l.by.k_RejectNoVR
          : (
                null === (o = e.GetAllCreatorClanIDs()) || void 0 === o
                  ? void 0
                  : o.some((e) => s.BIsIgnoringCurator(e))
              )
            ? l.by.k_RejectCreatorClan
            : l.by.k_NotRejected;
      }
      function h(e, t) {
        var n;
        if (t.localized) {
          const t = (0, r.sfN)(c.TS.LANGUAGE);
          if (
            !(null === (n = e.GetAllLanguagesWithSomeSupport()) || void 0 === n
              ? void 0
              : n.includes(t))
          )
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function f(e, t, n, r, c) {
        const d = s.A.Get().GetApp(e);
        if (!d) return l.by.k_RejectNotLoaded;
        const u = _(d, t);
        if (u != l.by.k_NotRejected) return u;
        const p = a.Fm.Get();
        if (p.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (p.BExcludeTagIDs(d.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (p.BExcludesContentDescriptor(d.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && d.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const m = d.GetAppType();
        if (!t.software && m == o.uE.Sv) return l.by.k_RejectSoftware;
        if (t.games_already_in_library && p.BIsGameOwned(e))
          return l.by.k_RejectInLibrary;
        if (t.games_not_in_library && !p.BIsGameOwned(e))
          return l.by.k_RejectNotInLibrary;
        if (!t.video && [o.uE.Wz, o.uE.gQ, o.uE.ID].includes(m))
          return l.by.k_RejectVideo;
        if (t.has_discount) {
          const e = d.GetBestPurchaseOption();
          if (!e || !e.discount_pct) return l.by.k_RejectNoDiscount;
        }
        return "adultonly" != n &&
          t.no_ao_content &&
          (d.HasContentDescriptorID(i.u7) || d.HasContentDescriptorID(i.T4))
          ? l.by.k_RejectAO
          : m == o.uE.ue &&
              t.games_already_in_library &&
              p.BIsGameOwned(d.GetParentAppID() || 0)
            ? l.by.k_RejectInLibrary
            : c
              ? (m == o.uE.ue && r.BHasAppID(d.GetParentAppID() || 0)) ||
                r.BHasAppID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : t.has_trailer && !d.BHasTrailers(!1)
                  ? l.by.k_RejectNoTrailer
                  : h(d, t)
              : l.by.k_NotRejected;
      }
      function g(e, t) {
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
        const i = s.A.Get().GetPackage(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const o = _(i, t);
        if (o != l.by.k_NotRejected) return o;
        const c = g(i.GetIncludedAppIDs(), t);
        if (c != l.by.k_NotRejected) return c;
        const d = a.Fm.Get();
        return t.games_already_in_library && d.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : d.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : r
              ? n.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : h(i, t)
              : l.by.k_NotRejected;
      }
      function G(e, t, n, r) {
        const i = s.A.Get().GetBundle(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const o = _(i, t);
        if (o != l.by.k_NotRejected) return o;
        const a = g(i.GetIncludedAppIDs(), t);
        return a != l.by.k_NotRejected
          ? a
          : r
            ? n.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : h(i, t)
            : l.by.k_NotRejected;
      }
    },
    62734: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => o });
      var r = n(81393);
      var i = n(78327);
      class o {
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
            o.s_globalSingletonStore ||
              ((e = "CHomeViewStore.s_globalSingletonStore"),
              (0, r.wT)(!0, "Unexpected code running in SSR Server: " + e),
              (o.s_globalSingletonStore = new o())),
            o.s_globalSingletonStore
          );
        }
        constructor() {
          this.m_HomeView = void 0;
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
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => c });
      var r = n(41735),
        i = n.n(r),
        o = n(78327),
        a = n(91254),
        s = n(70078),
        l = n(37085);
      class c extends a.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", (0, o.KC)());
          let r =
              o.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            a = await i().post(r, n);
          if (a.data.success != l.R) throw a.data;
          return this.RemoveGIDFromList(e, s.cB + t), a.data;
        }
        static Get() {
          return (
            c.sm_Instance || ((c.sm_Instance = new c()), c.sm_Instance.Init()),
            c.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            c.sm_SummaryInstance ||
              ((c.sm_SummaryInstance = new c(!0)), c.sm_SummaryInstance.Init()),
            c.sm_SummaryInstance
          );
        }
      }
    },
    8107: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => b });
      var r = n(34629),
        i = n(7850),
        o = n(41735),
        a = n.n(o),
        s = n(75844),
        l = n(90626),
        c = n(87652),
        d = n(65606),
        u = n(55294),
        p = n(9154),
        m = n(88843),
        y = n(64641),
        _ = n.n(y),
        h = n(22797),
        f = n(68797),
        g = n(78327),
        I = n(66418),
        G = n(30894),
        A = n(51272),
        v = n(84811);
      const b = (e) => {
        let { bShowOnlyInitialEvent: t } = e;
        const n = (0, g.Qn)(),
          r = (0, c.Y)();
        return (0, i.jsx)(v.tH, {
          children: (0, i.jsx)(S, {
            ...e,
            bShowOnlyInitialEvent: t || n,
            tracker: r,
          }),
        });
      };
      let S = class extends l.Component {
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
            e.classList.add(m.BodyNoScroll);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
          let e = this.GetBodyElement();
          e &&
            this.props.bPrimaryPageFeature &&
            e.classList.remove(m.BodyNoScroll);
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
            partnerEventStore: r,
            additionalParams: i,
          } = this.props;
          r.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            t,
            e,
            0,
            3,
            i,
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
              let t = (0, f.H)(e);
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
            return (0, i.jsx)(p.EN, {
              active: !0,
              children: (0, i.jsx)("div", {
                className: _().FlexCenter,
                style: { height: "400px" },
                children: (0, i.jsx)(h.t, {}),
              }),
            });
          const {
            closeModal: r,
            appid: o,
            clanSteamID: a,
            className: s,
            partnerEventStore: l,
            showAppHeader: c,
            bPrimaryPageFeature: m,
            additionalParams: y,
            eventClassName: f,
          } = this.props;
          let g;
          I.TS.IN_CLIENT &&
            (null == n ? void 0 : n.appid) &&
            (G.Fm.Get().HintLoad(),
            G.Fm.Get().BOwnsApp(n.appid) &&
              (g = (e) =>
                (0, A.EP)(e, "steam://nav/games/details/" + n.appid)));
          const v = (0, i.jsx)(d.sU, {
            children: (t) =>
              (0, i.jsx)(u.AD, {
                initialEvent: n,
                appid: o,
                clanSteamID: a,
                partnerEventStore: l,
                emoticonStore: t,
                closeModal: !m && r,
                showAppHeader: c,
                bShowOnlyInitialEvent: e,
                additionalParams: y,
                eventClassName: f,
                onAppIconClick: g,
              }),
          });
          return m
            ? v
            : (0, i.jsx)(p.EN, {
                active: !0,
                children: (0, i.jsx)("div", { className: s, children: v }),
              });
        }
      };
      S = (0, r.Cg)([s.PA], S);
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => I,
        H2: () => h,
        Li: () => g,
        S7: () => m,
        a9: () => G,
        jy: () => f,
        nt: () => _,
        sd: () => p,
        tJ: () => y,
      });
      var r = n(57876),
        i = n(97471),
        o = n(81886),
        a = n(22837),
        s = n(30570),
        l = n(30894),
        c = n(16021),
        d = n(62734),
        u = n(81393);
      function p(e) {
        return c.A.Get().BIsStoreItemMissing(e.id, (0, i.SW)(e.type));
      }
      function m(e, t, n) {
        const r = new Array();
        return (
          null == e || e.forEach((e) => r.push({ id: e, type: "game" })),
          null == t || t.forEach((e) => r.push({ id: e, type: "sub" })),
          null == n || n.forEach((e) => r.push({ id: e, type: "bundle" })),
          r
        );
      }
      function y(e) {
        var t, n;
        const r = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return (
          (null !==
            (n =
              null === (t = null == r ? void 0 : r.GetBestPurchaseOption()) ||
              void 0 === t
                ? void 0
                : t.discount_pct) && void 0 !== n
            ? n
            : 0) > 0
        );
      }
      function _(e) {
        var t;
        if (
          !(null === (t = d.f.Get().GetHomeView()) || void 0 === t
            ? void 0
            : t.localized)
        )
          return !0;
        const n = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
        return (
          !n ||
          l.Fm.Get().BIsAnyLanguageEnabled(n.GetAllLanguagesWithSomeSupport())
        );
      }
      async function h(e, t, n) {
        if (!e || 0 == e.length) return [];
        const r = e.filter((e) => (0, o.fp)(e.type)).map((e) => e.id),
          i = e.filter((e) => "sub" === e.type).map((e) => e.id),
          a = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = r.filter((e) => !c.A.Get().BHasApp(e, t)),
            n = i.filter((e) => !c.A.Get().BHasApp(e, t)),
            o = a.filter((e) => !c.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || o.length > 0) &&
            (await Promise.all([
              c.A.Get().QueueMultipleAppRequests(e, t),
              c.A.Get().QueueMultiplePackageRequests(n, t),
              c.A.Get().QueueMultipleBundleRequests(o, t),
            ]));
        }
        const s = new Set();
        null == a ||
          a.forEach((e) => {
            const t = c.A.Get().GetBundle(e);
            null == t || t.GetIncludedAppIDs().forEach((e) => s.add(e));
          }),
          null == i ||
            i.forEach((e) => {
              const t = c.A.Get().GetPackage(e);
              null == t || t.GetIncludedAppIDs().forEach((e) => s.add(e));
            });
        const l = Array.from(s).filter((e) => !c.A.Get().BHasApp(e, t));
        if (
          (l.length > 0 && (await c.A.Get().QueueMultipleAppRequests(l, t)),
          r.forEach((e) => s.add(e)),
          n)
        ) {
          const e = Array.from(s)
            .map((e) => {
              const t = c.A.Get().GetApp(e),
                n = null == t ? void 0 : t.GetParentAppID();
              return n ? (s.add(n), n) : null;
            })
            .filter((e) => null !== e)
            .filter((e) => !c.A.Get().BHasApp(e, t));
          e.length > 0 && (await c.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(s).filter((e) => {
          const t = c.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const f = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function g(e) {
        var t;
        if (!e) return !0;
        const n = l.Fm.Get();
        if (
          ((0, u.wT)(n.BIsLoaded(), "Dynamic Store not loaded"),
          e.GetStoreItemType() == s.c6.qI)
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
          null === (t = d.f.Get().GetHomeView()) || void 0 === t
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
      async function I(e, t, n, o) {
        const a = [];
        await h(e, r.Xh, t);
        for (const r of e) {
          const e = c.A.Get().GetStoreItem(r.id, (0, i.SW)(r.type));
          if (!e) {
            0;
            continue;
          }
          const s = e
            .GetIncludedAppIDs()
            .map((e) => c.A.Get().GetApp(e))
            .filter((e) => Boolean(e));
          if ((s.push(e), t)) {
            const e = new Set(
                s.map((e) => e.GetParentAppID()).filter((e) => Boolean(e)),
              ),
              t = Array.from(e)
                .map((e) => c.A.Get().GetApp(e))
                .filter((e) => Boolean(e));
            t && s.push(...t);
          }
          s.some(o || g)
            ? n && (l.Fm.Get().BIsStoreItemOwned(e) || n.push(r))
            : a.push(r);
        }
        return a;
      }
      async function G(e, t, n, r, o, a, s) {
        let d = await I(
          e,
          t,
          s,
          o
            ? (e) =>
                !e ||
                l.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                l.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : g,
        );
        const u = [];
        for (const e of d) {
          const t = c.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
          if (!t) continue;
          const o = null == t ? void 0 : t.GetIncludedAppIDsOrSelf();
          let d = !1;
          n && (d = d || o.every((e) => l.Fm.Get().BIsGameOwned(e))),
            r && (d = d || o.every((e) => l.Fm.Get().BIsGameWishlisted(e))),
            a && (d = d || o.every((e) => l.Fm.Get().BIsGameIgnored(e))),
            d ? s && s.push(e) : u.push(e);
        }
        return u;
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => y, pn: () => h, qx: () => _ });
      var r = n(7850),
        i = n(68255),
        o = n(61859),
        a = n(12155),
        s = n(90626),
        l = n(52038),
        c = n(95695),
        d = n(84811),
        u = n(64734),
        p = n(65946),
        m = n(26408);
      function y(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: i,
            toggleMinimized: o,
            className: a,
            children: s,
            elAdditionalButtons: y,
          } = e,
          _ = (0, p.q3)(() => i());
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: (0, l.A)(
                a,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, r.jsxs)("div", {
                  className: (0, l.A)(
                    c.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, r.jsx)(m.o, { tooltip: n })],
                }),
                (0, r.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    y,
                    (0, r.jsx)(h, { bIsMinimized: _, fnToggleMinimize: o }),
                  ],
                }),
              ],
            }),
            !_ && (0, r.jsx)(d.tH, { children: s }),
          ],
        });
      }
      function _(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return (0, r.jsx)(y, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          s = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, r.jsx)(i.$n, {
          "data-tooltip-text": (0, o.we)(s),
          onClick: n,
          children: e.bIsMinimized
            ? (0, r.jsx)(a.hz4, {})
            : (0, r.jsx)(a.Xjb, {}),
        });
      }
    },
  },
]);
