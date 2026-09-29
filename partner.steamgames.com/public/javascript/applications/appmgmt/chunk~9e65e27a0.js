/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7352],
  {
    92237: (e) => {
      e.exports = {
        Dummy: "wW1AV4_YscO4bfrtkjtze",
        ThemeRow: "_1iI4q9Lh3S4b7MvHV8-9FH",
        ThemeSize: "w1hcRNJLqJaIKpJvsg7Ry",
        SizeColorSweet: "_1hc3z1Nc69lLtW0CcBDuKw",
        SizeColorBig: "_2wjO9uz2L07SVsQytkYTK4",
        SizeColorSmall: "_2if7kNiDu3IhmR0s4wtbL",
        ThemeDefinitionCtn: "NH6z72lFUwnDiY97gSiGV",
        ThemeRevenueCtn: "isMdaGLB3GPUYQ3vT6NhF",
        TopGamesCtn: "_1Ta3Hfqsq1RBzrU1mcMgML",
        ThemeDetails: "_2KbZZ6bPBB-Bk4MTv5bxF2",
        GamesRow: "_1uO2EvuPAL3GIaEHpPWmOA",
        GamesColumn: "_1Pdhl5fZ9jbDwMpDg_IxT4",
        GameItem: "_3Kk39B7jUhr6BVRn9v4WNF",
        GameImage: "_1KDJ1W0K9UA9kAgQCL5jfP",
        ThemeTitle: "_2iHxOX8wNwHbuhDCSU2Sfd",
        ThemeTags: "_2PNltetEpoiiz7epQREfdS",
        TagsMustTitle: "_3TtwdJ1FSNAJ0zZMo6okKJ",
        TagsOrTitle: "_2QGX0lv5drCYBScHjSBfhm",
        TagsNotTitle: "_18G4mH1Yb9Sjc8DbqBwTjj",
        ShowStatsBtn: "_3Ep6vWtYwtiBwQ3kOcZR1a",
        DashTitleBar: "_11xa2NywK-XoPRPzAprmhr",
        ButtonGroup: "_31Lp_UMwj_nvMZg4wGKeqr",
        DashDescription: "_16bPPRfJgTdFDNoMeEHx96",
      };
    },
    1814: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => l });
      var s = a(41735),
        n = a.n(s),
        r = a(68797),
        o = a(6144),
        i = a(30470),
        m = a(78327);
      class l {
        m_rtStartTime;
        m_rtEndTime;
        m_totalSummary;
        m_mapPackageSummary = new Map();
        m_mapAppPackageList = new Map();
        m_mapAppSaleSummary = new Map();
        m_mapAppSaleSummaryChange = new Map();
        m_mapAppToLoadPromises = new Map();
        GetRTStartTime() {
          return this.m_rtStartTime;
        }
        GetRTEndTime() {
          return this.m_rtEndTime;
        }
        GetAppSaleSummary(e) {
          return this.m_mapAppSaleSummary.get(e);
        }
        GetAppSaleSummaryChangeCallback(e) {
          return (
            this.m_mapAppSaleSummaryChange.has(e) ||
              this.m_mapAppSaleSummaryChange.set(e, new o.lu()),
            this.m_mapAppSaleSummaryChange.get(e)
          );
        }
        BHasAppSaleSummaryChangeCallback(e) {
          return this.m_mapAppSaleSummaryChange.has(e);
        }
        GetTotalSummary() {
          return (
            this.m_totalSummary ||
              ((this.m_totalSummary = {
                net_sales_usd: 0,
                net_units_sold: 0,
                gross_sales_usd: 0,
                gross_units_sold: 0,
              }),
              this.m_mapAppSaleSummary.forEach((e) => {
                (this.m_totalSummary.net_sales_usd += e.net_sales_usd),
                  (this.m_totalSummary.net_units_sold += e.net_units_sold),
                  (this.m_totalSummary.gross_sales_usd += e.gross_sales_usd),
                  (this.m_totalSummary.gross_units_sold += e.gross_units_sold);
              })),
            this.m_totalSummary
          );
        }
        SetAppSaleSummary(e) {
          this.m_mapAppSaleSummary.set(e.appid, e),
            this.m_mapAppSaleSummaryChange.has(e.appid) &&
              this.m_mapAppSaleSummaryChange.get(e.appid).Dispatch(e);
        }
        GetTopNApps(e) {
          const t = Array.from(this.m_mapAppSaleSummary.values());
          return (
            t.sort((e, t) => (t.gross_sales_usd || 0) - e.gross_sales_usd),
            t.slice(0, e)
          );
        }
        async LoadApps(e) {
          let t = [...e];
          const a = new Array();
          let s = new Array();
          for (; t.length > 0; ) {
            t = t.filter(
              (e) =>
                !this.m_mapAppToLoadPromises.has(e) ||
                (a.push(this.m_mapAppToLoadPromises.get(e)), !1),
            );
            const e = t.splice(0, 5e3),
              n = this.InternalLoadAppBatch(e);
            a.push(n),
              s.push(n),
              s.length > 0 && (await Promise.all(s), (s = new Array()));
          }
          await Promise.all(a);
        }
        async InternalLoadAppBatch(e) {
          let t;
          try {
            const a = new FormData();
            a.append("sessionid", (0, m.KC)()),
              a.append("rgAppIDs", e.join(",")),
              a.append("rtimeStart", "" + this.m_rtStartTime),
              a.append("rtimeEnd", "" + this.m_rtEndTime);
            const s = `${i.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
              o = await n().post(s, a, { withCredentials: !0 });
            if (200 == o.status && o.data?.apps_to_packages?.length > 0)
              return (
                o.data.package_summaries.forEach((e) => {
                  this.m_mapPackageSummary.set(e.packageid, e);
                }),
                o.data.apps_to_packages.forEach((e) => {
                  const t = e.subs || [];
                  this.m_mapAppPackageList.set(e.appid, t);
                  const a = {
                    appid: e.appid,
                    gross_sales_usd: 0,
                    gross_units_sold: 0,
                    net_sales_usd: 0,
                    net_units_sold: 0,
                  };
                  t.forEach((e) => {
                    const t = this.m_mapPackageSummary.get(e);
                    t &&
                      ((a.gross_sales_usd += t.gross_sales_usd),
                      (a.gross_units_sold += t.gross_units_sold),
                      (a.net_sales_usd += t.net_sales_usd),
                      (a.net_units_sold += t.net_units_sold));
                  }),
                    this.m_mapAppSaleSummary.set(e.appid, a),
                    this.BHasAppSaleSummaryChangeCallback(e.appid) &&
                      this.GetAppSaleSummaryChangeCallback(e.appid).Dispatch(a);
                }),
                !0
              );
            t = (0, r.H)(o);
          } catch (e) {
            t = (0, r.H)(e);
          }
          return (
            console.error(
              "CSaleRankStore::InternalLoadAppBatch failed with " +
                t.strErrorMsg,
              t,
            ),
            !1
          );
        }
        constructor(e, t) {
          if (t) (this.m_rtStartTime = e), (this.m_rtEndTime = t);
          else {
            const t = new Date();
            t.setUTCHours(0),
              t.setUTCMinutes(0),
              t.setUTCSeconds(0),
              t.setUTCMilliseconds(0);
            const a = Math.floor(t.getTime() / 1e3);
            (this.m_rtEndTime = a - 86400),
              (this.m_rtStartTime = a - 24 * (e + 1) * 60 * 60);
          }
        }
      }
    },
    562: (e, t, a) => {
      "use strict";
      a.d(t, {
        DT: () => C,
        GX: () => h,
        LD: () => g,
        fT: () => _,
        k: () => T,
        lY: () => c,
        tV: () => y,
      });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(90626),
        i = a(37085),
        m = a(68797),
        l = a(78327),
        u = a(14947),
        p = a(6419);
      async function h() {
        const e =
            l.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: (0, l.KC)() };
        let a = null;
        try {
          const s = await r().get(e, { params: t, withCredentials: !0 });
          if (200 === s.status && s.data?.success === i.R) {
            const e = { rgCategories: [], bHasUnpublishedChanges: !1 };
            return (
              s.data.in_progress
                ? ((e.rgCategories = d(
                    JSON.parse(s.data.in_progress).categories,
                  )),
                  (e.bHasUnpublishedChanges = !0))
                : s.data.active &&
                  (e.rgCategories = d(JSON.parse(s.data.active).categories)),
              e
            );
          }
          a = (0, m.H)(s);
        } catch (e) {
          a = (0, m.H)(e);
        }
        return (
          console.error("GetCategoriesKV failed: " + a.strErrorMsg, a),
          { rgCategories: [] }
        );
      }
      function d(e) {
        const t = [];
        for (const a of Object.keys(e)) {
          const s = e[a],
            n = {
              handle: s.handle,
              type: s.type,
              loc_token: s.loc_token,
              description_loc_token: s.description_loc_token,
              heading: s.heading,
              id: s.id || void 0,
              exclude_from_search: Boolean(s.exclude_from_search),
              search_alias: s.search_alias,
            },
            {
              must: r,
              any: o,
              mustnot: i,
              replaces_tags: m,
              content_descriptors: l,
            } = s;
          r &&
            (Array.isArray(r)
              ? (n.must = r.map((e) => ({ id: Number(e) })))
              : (n.must = [{ id: Number(r) }])),
            o &&
              (Array.isArray(o)
                ? (n.any = o.map((e) => ({ id: Number(e) })))
                : (n.any = [{ id: Number(o) }])),
            i &&
              (Array.isArray(i)
                ? (n.mustnot = i.map((e) => ({ id: Number(e) })))
                : (n.mustnot = [{ id: Number(i) }])),
            m &&
              (Array.isArray(m)
                ? (n.replaces_tags = m.map((e) => ({ id: Number(e) })))
                : (n.replaces_tags = [{ id: Number(m) }])),
            l &&
              "string" == typeof l &&
              (n.content_descriptors = l.split(",").map((e) => parseInt(e))),
            t.push(n);
        }
        return t;
      }
      function c() {
        const [e, t] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            h().then((e) => {
              t(e.rgCategories);
            });
          }, []),
          e
        );
      }
      async function _(e) {
        const t = {};
        for (const a of e)
          (t[a.handle] = {
            handle: a.handle,
            type: a.type,
            loc_token: a.loc_token,
            description_loc_token: a.description_loc_token,
            must: a.must?.map((e) => e.id) || void 0,
            any: a.any?.map((e) => e.id) || void 0,
            mustnot: a.mustnot?.map((e) => e.id) || void 0,
            replaces_tags: a.replaces_tags?.map((e) => e.id) || void 0,
            heading: a.heading || void 0,
            id: a.id,
            exclude_from_search: a.exclude_from_search,
            search_alias: a.search_alias,
            content_descriptors: a.content_descriptors?.length
              ? a.content_descriptors.join(",")
              : void 0,
          }),
            1 === t[a.handle].must?.length &&
              (t[a.handle].must = t[a.handle].must[0]),
            1 === t[a.handle].mustnot?.length &&
              (t[a.handle].mustnot = t[a.handle].mustnot[0]),
            1 === t[a.handle].replaces_tags?.length &&
              (t[a.handle].replaces_tags = t[a.handle].replaces_tags[0]);
        const a =
            l.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
          s = new FormData();
        s.append("sessionid", (0, l.KC)()),
          s.append("origin", self.origin),
          s.append("json", JSON.stringify(t));
        let n = null;
        try {
          const e = await r().post(a, s, { withCredentials: !0 });
          if (200 === e.status && e.data?.success === i.R)
            return S.Get().ClearDirty(), null;
          n = (0, m.H)(e);
        } catch (e) {
          n = (0, m.H)(e);
        }
        return console.error("SaveCategoriesKV failed: " + n.strErrorMsg, n), n;
      }
      async function g() {
        const e =
            l.TS.PARTNER_BASE_URL +
            "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
          t = { origin: self.origin, sessionid: (0, l.KC)() };
        try {
          const a = await r().get(e, { params: t, withCredentials: !0 });
          if (200 !== a.status || a.data?.success !== i.R) return (0, m.H)(a);
        } catch (e) {
          return (0, m.H)(e);
        }
        return null;
      }
      class S {
        constructor() {
          (0, u.Gn)(this);
        }
        m_rgTags;
        m_rgCategories;
        m_mapStoreTags;
        m_mapStoreCategories;
        m_promise;
        m_bDirty = !1;
        static s_singleton;
        BIsLoaded() {
          return Boolean(this.m_rgTags) && Boolean(this.m_rgCategories);
        }
        BIsDirty() {
          return this.m_bDirty;
        }
        ClearDirty() {
          this.m_bDirty = !1;
        }
        SetDirty() {
          this.m_bDirty = !0;
        }
        GetTags() {
          return this.m_rgTags;
        }
        GetCategories() {
          return this.m_rgCategories;
        }
        GetStoreTagMap() {
          return this.m_mapStoreTags;
        }
        GetStoreCategoryMap() {
          return this.m_mapStoreCategories;
        }
        async HintLoad() {
          return (
            this.m_promise || (this.m_promise = this.Load()), this.m_promise
          );
        }
        async Load() {
          const e =
              l.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetstoretagsandcategories",
            t = {
              origin: self.origin,
              sessionid: (0, l.KC)(),
              l: l.TS.LANGUAGE,
            };
          let a = null;
          try {
            const s = await r().get(e, { params: t });
            if (200 === s.status && s.data?.success === i.R)
              return (
                (this.m_rgTags = s.data.tags),
                (this.m_rgCategories = s.data.categories),
                (this.m_mapStoreTags = new Map()),
                this.m_rgTags.forEach((e) =>
                  this.m_mapStoreTags.set(e.tagid, e),
                ),
                (this.m_mapStoreCategories = new Map()),
                void this.m_rgCategories.forEach((e) =>
                  this.m_mapStoreCategories.set(e.categoryid, e),
                )
              );
            (this.m_promise = null), (a = (0, m.H)(s));
          } catch (e) {
            (this.m_promise = null), (a = (0, m.H)(e));
          }
          console.error(
            "CStoreTagsAndCategoriesStore.Load failed: " + a.strErrorMsg,
            a,
          );
        }
        static Get() {
          return S.s_singleton || (S.s_singleton = new S()), S.s_singleton;
        }
      }
      function y() {
        return S.Get().BIsDirty();
      }
      function C() {
        const [e, t] = o.useState(S.Get().GetTags()),
          [a, s] = o.useState(S.Get().GetCategories());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== a) ||
              S.Get()
                .HintLoad()
                .then(() => {
                  t(S.Get().GetTags()), s(S.Get().GetCategories());
                });
          }, [a, e]),
          { rgTags: e, rgCategories: a }
        );
      }
      function T() {
        const [e, t] = o.useState(S.Get().GetStoreTagMap()),
          [a, s] = o.useState(S.Get().GetStoreCategoryMap());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== a) ||
              S.Get()
                .HintLoad()
                .then(() => {
                  t(S.Get().GetStoreTagMap()), s(S.Get().GetStoreCategoryMap());
                });
          }, [a, e]),
          { mapStoreTags: e, mapStoreCategories: a }
        );
      }
      (0, s.Cg)([u.sH], S.prototype, "m_bDirty", void 0),
        (0, s.Cg)([p.o], S.prototype, "SetDirty", null);
    },
    31376: (e, t, a) => {
      "use strict";
      a.d(t, {
        AY: () => x,
        CU: () => S,
        Iw: () => G,
        Th: () => f,
        _E: () => _,
        eX: () => A,
        hl: () => j,
        mg: () => b,
        p$: () => T,
        tt: () => c,
      });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(1814),
        i = a(14947),
        m = a(90626),
        l = a(20194),
        u = a(6144),
        p = a(73745),
        h = a(30470),
        d = a(78327);
      const c = 120,
        _ = 10;
      class g {
        m_appAndPackagesSummuries = new o.Q(c);
        m_mapContentHubSummary = new Map();
        m_mapContentHubToAppCount = new Map();
        m_mapContentHubSummaryPromises = new Map();
        m_mapContentHubSummaryChange = new Map();
        m_mapContentHubTopAppSaleSummaryChange = new Map();
        m_mapContentHubTopAppSaleSummary = new Map();
        m_rgSummaries = null;
        m_summaryAnalysisChange = new u.lu();
        m_loadSummaryCache;
        GetSummaryAnalysis() {
          return this.m_rgSummaries;
        }
        GetSummaryAnalysisChange() {
          return this.m_summaryAnalysisChange;
        }
        GetKey(e) {
          return e.type + "_" + e.handle;
        }
        GetContentHubTopAppSaleSummaryChangeCallback(e) {
          const t = this.GetKey(e);
          return (
            this.m_mapContentHubTopAppSaleSummaryChange.has(t) ||
              this.m_mapContentHubTopAppSaleSummaryChange.set(t, new u.lu()),
            this.m_mapContentHubTopAppSaleSummaryChange.get(t)
          );
        }
        GetContentHubSaleSummary(e) {
          const t = this.GetKey(e);
          return this.m_mapContentHubSummary.get(t);
        }
        GetContentHubSummaryChangeCallback(e) {
          const t = this.GetKey(e);
          return (
            this.m_mapContentHubSummaryChange.has(t) ||
              this.m_mapContentHubSummaryChange.set(t, new u.lu()),
            this.m_mapContentHubSummaryChange.get(t)
          );
        }
        GetTopAppSummary(e) {
          const t = this.GetKey(e);
          return this.m_mapContentHubTopAppSaleSummary.get(t);
        }
        GetAppSummaryObject() {
          return this.m_appAndPackagesSummuries;
        }
        async LoadContentHubSaleSummary(e, t) {
          if (!t) return null;
          const a = this.GetKey(e);
          return (
            this.m_mapContentHubSummaryPromises.has(a) ||
              this.m_mapContentHubSummaryPromises.set(
                a,
                this.InternalLoadContentHubSaleSummary(e, t),
              ),
            this.m_mapContentHubSummaryPromises.get(a)
          );
        }
        async InternalLoadContentHubSaleSummary(e, t) {
          const a = this.GetKey(e);
          await this.m_appAndPackagesSummuries.LoadApps(t);
          const s = {
              gross_sales_usd: 0,
              gross_units_sold: 0,
              net_sales_usd: 0,
              net_units_sold: 0,
            },
            n = new Array();
          t.forEach((e) => {
            const t = this.m_appAndPackagesSummuries.GetAppSaleSummary(e);
            t &&
              ((s.gross_sales_usd += t.gross_sales_usd),
              (s.gross_units_sold += t.gross_units_sold),
              (s.net_sales_usd += t.net_sales_usd),
              (s.net_units_sold += t.net_units_sold)),
              n.push(t);
          }),
            n.sort((e, t) => t.gross_sales_usd - e.gross_sales_usd);
          const r = {
            gross_sales_usd: 0,
            gross_units_sold: 0,
            net_sales_usd: 0,
            net_units_sold: 0,
          };
          return (
            n.slice(0, _).forEach((e) => {
              (r.gross_sales_usd += e.gross_sales_usd),
                (r.gross_units_sold += e.gross_units_sold),
                (r.net_sales_usd += e.net_sales_usd),
                (r.net_units_sold += e.net_units_sold);
            }),
            this.m_mapContentHubTopAppSaleSummary.set(a, r),
            this.m_mapContentHubSummary.set(a, s),
            this.m_mapContentHubToAppCount.set(a, n.length),
            this.GetContentHubTopAppSaleSummaryChangeCallback(e).Dispatch(r),
            this.GetContentHubSummaryChangeCallback(e).Dispatch(s),
            (this.m_rgSummaries = [
              ...(this.m_rgSummaries ?? []),
              this.BuildAnalysis(e),
            ]),
            this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
            this.SaveToCacheSaleSummary(e, s, r, n.slice(0, _), n.length),
            s
          );
        }
        async LoadCachedSaleSummaries() {
          return (
            this.m_loadSummaryCache ||
              (this.m_loadSummaryCache =
                this.InternalLoadCachedSaleSummaries()),
            this.m_loadSummaryCache
          );
        }
        async InternalLoadCachedSaleSummaries() {
          const e = {
              rtStartTime: this.m_appAndPackagesSummuries.GetRTStartTime(),
              rtEndTime: this.m_appAndPackagesSummuries.GetRTEndTime(),
              sessionid: (0, d.KC)(),
            },
            t = `${h.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
            a = await r().get(t, { params: e });
          if (200 == a.status && a.data?.cache?.length > 0) {
            const e = new Array();
            a.data.cache.forEach((t) => {
              const a = JSON.parse(t),
                s = { handle: a.handle, type: a.type },
                n = this.GetKey(s);
              this.m_mapContentHubTopAppSaleSummary.set(n, a.topAppSummary),
                this.m_mapContentHubSummary.set(n, a.hubSummary),
                this.m_mapContentHubToAppCount.set(n, a.appCount),
                a.topApps.forEach((e) =>
                  this.m_appAndPackagesSummuries.SetAppSaleSummary(e),
                ),
                this.m_mapContentHubSummaryChange.has(n) &&
                  this.m_mapContentHubSummaryChange
                    .get(n)
                    .Dispatch(a.hubSummary),
                this.m_mapContentHubTopAppSaleSummaryChange.has(n) &&
                  this.m_mapContentHubTopAppSaleSummaryChange
                    .get(n)
                    .Dispatch(a.topAppSummary),
                e.push(this.BuildAnalysis(s));
            }),
              (this.m_rgSummaries = e),
              this.m_summaryAnalysisChange.Dispatch(e);
          }
          return null;
        }
        BuildAnalysis(e) {
          const t = this.GetKey(e),
            a = this.m_mapContentHubSummary.get(t),
            s = this.m_mapContentHubTopAppSaleSummary.get(t),
            n = this.m_mapContentHubToAppCount.get(t);
          return {
            handle: e.handle,
            total_games: n,
            hub_gross_units_sold: a.gross_units_sold,
            hub_gross_sales_usd: Math.floor(a.gross_sales_usd / 100),
            hub_units_per_day: Math.floor(a.gross_units_sold / c),
            hub_sales_usd_per_day: Math.floor(a.gross_sales_usd / (100 * c)),
            top_apps_percent:
              a.gross_sales_usd > 0
                ? ((s.gross_sales_usd / a.gross_sales_usd) * 100).toFixed(2)
                : "NA",
          };
        }
        async SaveToCacheSaleSummary(e, t, a, s, n) {
          if ("category_editor" === e.type) return;
          const o = {
              type: e.type,
              handle: e.handle,
              topAppSummary: a,
              hubSummary: t,
              topApps: s,
              appCount: n,
            },
            m = new FormData();
          m.append("sessionid", (0, d.KC)()),
            m.append(
              "rtStartTime",
              "" + this.m_appAndPackagesSummuries.GetRTStartTime(),
            ),
            m.append(
              "rtEndTime",
              "" + this.m_appAndPackagesSummuries.GetRTEndTime(),
            ),
            m.append("bClear", "false"),
            m.append("key", this.GetKey(e)),
            m.append("rgStats", JSON.stringify(o));
          const l = `${h.TS.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
            u = await r().post(l, m, { withCredentials: !0 });
          200 != u.status &&
            console.error("SaveToCacheSaleSummary failed to save " + i.HP, u);
        }
        static s_Singleton;
        static Get() {
          return g.s_Singleton || (g.s_Singleton = new g()), g.s_Singleton;
        }
      }
      function S(e) {
        const {
          data: t,
          isLoading: a,
          isError: s,
        } = (0, l.I)({
          queryKey: ["contenthubsummary", e.type, e.handle],
          queryFn: async () => {
            const t = {
                contenthubcategorytype: e.type,
                handle: e.handle,
                sessionid: (0, d.KC)(),
              },
              a = `${h.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
              s = await r().get(a, { params: t });
            return 200 == s.status && s.data?.top_apps?.length > 0
              ? s.data
              : null;
          },
        });
        return {
          rgTopApps: a || s || !t ? null : t?.top_apps,
          nTotalGames: a || s || !t ? null : t?.total_games,
          isError: s,
        };
      }
      function y(e, t, a) {
        return {
          musthaveall: (e || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
          musthaveany: (t || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
          mustnothaveany: (a || [])
            .filter(Boolean)
            .map((e) => e.id)
            .sort()
            .join(","),
        };
      }
      (0, s.Cg)([p.oI], g.prototype, "LoadCachedSaleSummaries", null);
      const C = { total_games: 0, all_appid: [], top_games: [] };
      function T(e, t, a) {
        const {
            musthaveall: s,
            musthaveany: n,
            mustnothaveany: o,
          } = y(e, t, a),
          {
            data: i,
            isLoading: m,
            isError: u,
          } = (0, l.I)({
            queryKey: ["useContentHubCategoryEditorFullAppList", s, n, o],
            queryFn: async () => {
              const e = {
                  musthaveall: s,
                  musthaveany: n,
                  mustnothaveany: o,
                  sessionid: (0, d.KC)(),
                },
                t = `${h.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                a = await r().get(t, { params: e });
              return 200 == a.status && a.data?.top_games?.length > 0
                ? a.data
                : null;
            },
            enabled: 0 != s.length || 0 != n.length || 0 != o.length,
          });
        return 0 == s.length && 0 == n.length && 0 == o.length ? C : i || null;
      }
      function A(e, t, a) {
        const s = T(e, t, a),
          n = (0, m.useMemo)(() => {
            const {
              musthaveall: s,
              musthaveany: n,
              mustnothaveany: r,
            } = y(e, t, a);
            return { type: "category_editor", handle: s + "_" + n + "_" + r };
          }, [e, t, a]),
          [r, o] = (0, m.useState)(g.Get().GetContentHubSaleSummary(n));
        return (
          (0, m.useEffect)(() => {
            s?.all_appid?.length &&
              !r &&
              g.Get().LoadContentHubSaleSummary(n, s.all_appid);
          }, [n, s, r]),
          (0, p.hL)(g.Get().GetContentHubSummaryChangeCallback(n), o),
          r
        );
      }
      function b(e, t, a) {
        const s = (0, m.useMemo)(() => {
            const {
              musthaveall: s,
              musthaveany: n,
              mustnothaveany: r,
            } = y(e, t, a);
            return { type: "category_editor", handle: s + "_" + n + "_" + r };
          }, [e, t, a]),
          [n, r] = (0, m.useState)(g.Get().GetTopAppSummary(s));
        return (
          (0, p.hL)(g.Get().GetContentHubTopAppSaleSummaryChangeCallback(s), r),
          n
        );
      }
      function f(e) {
        const t = (function (e) {
            const {
              data: t,
              isLoading: a,
              isError: s,
            } = (0, l.I)({
              queryKey: ["contenthubapplist", e.type, e.handle],
              queryFn: async () => {
                const t = {
                    contenthubcategorytype: e.type,
                    handle: e.handle,
                    sessionid: (0, d.KC)(),
                  },
                  a = `${h.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                  s = await r().get(a, { params: t });
                return 200 == s.status && s.data?.apps?.length > 0
                  ? s.data
                  : null;
              },
            });
            return t?.apps || null;
          })(e),
          [a, s] = (0, m.useState)(g.Get().GetContentHubSaleSummary(e));
        return (
          (0, m.useEffect)(() => {
            t?.length && !a && g.Get().LoadContentHubSaleSummary(e, t);
          }, [e, e.type, e.handle, t, a]),
          (0, p.hL)(g.Get().GetContentHubSummaryChangeCallback(e), s),
          a
        );
      }
      function G(e) {
        const [t, a] = (0, m.useState)(
          g.Get().GetAppSummaryObject().GetAppSaleSummary(e),
        );
        return (
          (0, p.hL)(
            g.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(e),
            a,
          ),
          t
        );
      }
      function j(e) {
        const [t, a] = (0, m.useState)(g.Get().GetTopAppSummary(e));
        return (
          (0, p.hL)(g.Get().GetContentHubTopAppSaleSummaryChangeCallback(e), a),
          t
        );
      }
      function x() {
        const [e, t] = (0, m.useState)(g.Get().GetSummaryAnalysis());
        return (
          (0, m.useEffect)(() => {
            g.Get().LoadCachedSaleSummaries();
          }, []),
          (0, p.hL)(g.Get().GetSummaryAnalysisChange(), t),
          e
        );
      }
    },
    74810: (e, t, a) => {
      "use strict";
      a.d(t, {
        KU: () => v,
        Ke: () => j,
        W7: () => H,
        hp: () => f,
        iT: () => G,
        ny: () => R,
      });
      var s = a(7850),
        n = a(562),
        r = a(31376),
        o = a(40323),
        i = a.n(o),
        m = a(90626),
        l = a(16676),
        u = a(26186),
        p = a(43474),
        h = a(22797),
        d = a(52038),
        c = a(61859),
        _ = a(82227),
        g = a(30470),
        S = a(92237),
        y = a(14987),
        C = a(39777),
        T = a(71420),
        A = a(42834);
      const b = "0px 0px 100% 0px",
        f = 5e3,
        G = 500;
      function j(e) {
        const [t, a] = (0, m.useState)(!0),
          o = (0, n.lY)(),
          i = (0, m.useMemo)(
            () => (o?.length > 0 ? o.filter((e) => Boolean(e.type)) : null),
            [o],
          );
        return i && 0 != i.length
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsxs)("div", {
                      className: S.DashTitleBar,
                      children: [
                        (0, s.jsx)("h1", {
                          children: "Theme Sale Planning Dashboard",
                        }),
                        (0, s.jsxs)("div", {
                          className: S.ButtonGroup,
                          children: [
                            Boolean(!t) &&
                              (0, s.jsxs)(l.$n, {
                                onClick: () => a(!0),
                                children: [
                                  "Load ",
                                  r.tt,
                                  " Days of Sale Summaries",
                                ],
                              }),
                            (0, s.jsx)(B, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: S.DashDescription,
                      children: (0, s.jsxs)("ul", {
                        children: [
                          (0, s.jsxs)("li", {
                            children: [
                              "Themes are currently make from all of the categories that are defined on this",
                              " ",
                              (0, s.jsx)("a", {
                                href: `${g.TS.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                                children: "categories editor page.",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("li", {
                            children: [
                              "Hubs with more than ",
                              f,
                              " games are called out as 'too big'.",
                            ],
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                i.map((e, a) =>
                  (0, s.jsx)(x, { category: e, bSaleSummary: t }, a),
                ),
              ],
            })
          : (0, s.jsx)(h.t, { string: (0, c.we)("#Loading") });
      }
      function x(e) {
        const { category: t, bSaleSummary: a } = e;
        return (0, s.jsx)(p.K, {
          placeholderHeight: 250,
          rootMargin: b,
          children: (0, s.jsx)(w, { category: t, bSaleSummary: a }),
        });
      }
      function v(e) {
        const { nTotalGames: t } = e;
        let a, n;
        return (
          t > G && t <= f
            ? ((a = S.SizeColorSweet), (n = "Good size!"))
            : t > f
              ? ((a = S.SizeColorBig), (n = "Too big"))
              : ((a = S.SizeColorSmall), (n = "Too small")),
          (0, s.jsxs)("div", {
            className: (0, d.A)(S.ThemeSize, a),
            children: [(0, _.Dq)(t), " games ( ", n, ")"],
          })
        );
      }
      function w(e) {
        const { category: t, bSaleSummary: a } = e,
          { rgTopApps: n, nTotalGames: o } = (0, r.CU)(t),
          i = o > 500 && o <= f;
        return (0, s.jsxs)("div", {
          className: S.ThemeRow,
          children: [
            (0, s.jsxs)("div", {
              className: S.ThemeDefinitionCtn,
              children: [
                (0, s.jsx)("a", {
                  href: `${g.TS.STORE_BASE_URL}category/${t.handle}`,
                  className: S.ThemeTitle,
                  children: t.loc_token ? (0, c.we)(t.loc_token) : t.handle,
                }),
                (0, s.jsx)(v, { nTotalGames: o }),
                (0, s.jsx)("div", {
                  className: S.SaleStats,
                  children: Boolean(a && i) && (0, s.jsx)(N, { category: t }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: S.TopGamesCtn,
              children: [
                (0, s.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                (0, s.jsx)("div", {
                  className: S.GamesRow,
                  children: n
                    ?.slice(0, 10)
                    .map((e) =>
                      (0, s.jsx)(
                        H,
                        { info: e, category: t, bSaleSummary: a && i },
                        e.appid,
                      ),
                    ),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: S.ThemeDetails,
              children: ["handle: ", t.handle, (0, s.jsx)(E, { category: t })],
            }),
          ],
        });
      }
      function H(e) {
        const { info: t, bSaleSummary: a } = e,
          n = (0, y.$5)(t.appid),
          { data: r } = (0, C.lv)(n),
          { data: o } = (0, C.J$)(n);
        return o && r
          ? (0, s.jsxs)("div", {
              className: S.GameItem,
              children: [
                (0, s.jsx)(u.Q, {
                  id: n,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px", maxWidth: "320px" },
                  },
                  className: S.GameImage,
                  children: (0, s.jsx)("a", {
                    href: (0, T._)(o),
                    children: (0, s.jsx)("img", {
                      src: (0, A.b0)(r, "header"),
                      alt: o.name,
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  children: [" Rank: ", t.long_term_sale_rank],
                }),
                Boolean(a) && (0, s.jsx)(k, { ...e }),
              ],
            })
          : (0, s.jsxs)("div", {
              children: [
                "Loading appid: ",
                t.appid,
                " with rank: ",
                t.long_term_sale_rank,
              ],
            });
      }
      function k(e) {
        const { info: t, category: a } = e,
          n = (0, r.Iw)(t.appid),
          o = (0, r.Th)(a);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            Boolean(n) &&
              (0, s.jsxs)("div", {
                children: [
                  " ",
                  "$",
                  (0, _.Dq)(Math.floor(n.gross_sales_usd / 100)),
                ],
              }),
            Boolean(n && o?.gross_sales_usd) &&
              (0, s.jsxs)("div", {
                children: [
                  "( ",
                  ((n.gross_sales_usd / o.gross_sales_usd) * 100).toFixed(2),
                  "% of hub )",
                ],
              }),
          ],
        });
      }
      function E(e) {
        const { mapStoreTags: t, mapStoreCategories: a } = (0, n.k)(),
          { category: r } = e;
        return t && a && (r.any || r.must || r.mustnot)
          ? (0, s.jsxs)("div", {
              className: S.ThemeTags,
              children: [
                Boolean(r.must) &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: S.TagsMustTitle,
                        children: "Must:",
                      }),
                      " ",
                      r.must?.map((e) =>
                        (0, s.jsx)(
                          L,
                          { type: r.type, id: e.id },
                          r.type + "_" + e.id + "_" + r.handle,
                        ),
                      ),
                    ],
                  }),
                Boolean(r.any) &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: S.TagsOrTitle,
                        children: "Any:",
                      }),
                      " ",
                      r.any?.map((e) =>
                        (0, s.jsx)(
                          L,
                          { type: r.type, id: e.id },
                          r.type + "_" + e.id + "_" + r.handle,
                        ),
                      ),
                    ],
                  }),
                Boolean(r.mustnot) &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: S.TagsNotTitle,
                        children: "Must Not:",
                      }),
                      " ",
                      r.mustnot?.map((e) =>
                        (0, s.jsx)(
                          L,
                          { type: r.type, id: e.id },
                          r.type + "_" + e.id + "_" + r.handle,
                        ),
                      ),
                    ],
                  }),
              ],
            })
          : null;
      }
      function L(e) {
        const { mapStoreTags: t, mapStoreCategories: a } = (0, n.k)(),
          { type: r, id: o } = e;
        return "tagids" == r
          ? (0, s.jsxs)("span", {
              children: [t.has(o) ? t.get(o).name : "tagid: " + o, ", "],
            })
          : (0, s.jsxs)("span", {
              children: [a.has(o) ? a.get(o).name : "category id: " + o, ", "],
            });
      }
      function R(e) {
        const { saleSummary: t, topAppSummary: a } = e;
        return t
          ? (0, s.jsx)("div", {
              className: S.ThemeRevenueCtn,
              children: (0, s.jsx)("table", {
                children: (0, s.jsx)("tbody", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsxs)("td", {
                        children: [
                          "Total: ",
                          (0, s.jsx)("br", {}),
                          "$",
                          (0, _.Dq)(Math.floor(t.gross_sales_usd / 100)),
                        ],
                      }),
                      (0, s.jsxs)("td", {
                        children: [
                          "Per Day: ",
                          (0, s.jsx)("br", {}),
                          "$",
                          (0, _.Dq)(
                            Math.floor(t.gross_sales_usd / (100 * r.tt)),
                          ),
                        ],
                      }),
                      (0, s.jsxs)("td", {
                        children: [
                          "Total Units: ",
                          (0, s.jsx)("br", {}),
                          (0, _.Dq)(t.gross_units_sold),
                        ],
                      }),
                      (0, s.jsxs)("td", {
                        children: [
                          "Units Per Day: ",
                          (0, s.jsx)("br", {}),
                          (0, _.Dq)(Math.floor(t.gross_units_sold / r.tt)),
                        ],
                      }),
                      Boolean(t.gross_sales_usd > 0) &&
                        (0, s.jsx)(s.Fragment, {
                          children: (0, s.jsxs)("td", {
                            children: [
                              "Top ",
                              r._E,
                              " Apps: ",
                              (0, s.jsx)("br", {}),
                              (0, s.jsxs)("span", {
                                className:
                                  (a.gross_sales_usd / t.gross_sales_usd) *
                                    100 >
                                  90
                                    ? S.SizeColorBig
                                    : S.SizeColorSweet,
                                children: [
                                  (
                                    (a.gross_sales_usd / t.gross_sales_usd) *
                                    100
                                  ).toFixed(2),
                                  "%",
                                ],
                              }),
                              " of revenue",
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            })
          : (0, s.jsx)(h.t, {
              position: "center",
              string: "Loading Sale Info",
            });
      }
      function N(e) {
        const { category: t } = e,
          a = (0, r.Th)(t),
          n = (0, r.hl)(t);
        return (0, s.jsx)(R, { saleSummary: a, topAppSummary: n });
      }
      function B(e) {
        const t = (0, r.AY)();
        return (0, s.jsx)("a", {
          href: `data:application/octet-stream,${encodeURIComponent(i().unparse({ data: t, fields: Object.keys(t ? t[0] : {}) }))}`,
          download: "theme_sale_stats.csv",
          children: "Export CSV",
        });
      }
    },
  },
]);
