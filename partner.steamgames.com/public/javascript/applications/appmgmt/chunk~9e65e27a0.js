/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7352],
    {
      1077: (F, W, i) => {
        "use strict";
        i.d(W, { Q: () => f });
        var s = i(41735),
          g = i.n(s),
          v = i(34592),
          x = i(8323),
          D = i(98609),
          M = i(3166);
        const I = 5e3;
        class f {
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
          GetAppSaleSummary(h) {
            return this.m_mapAppSaleSummary.get(h);
          }
          GetAppSaleSummaryChangeCallback(h) {
            return (
              this.m_mapAppSaleSummaryChange.has(h) ||
                this.m_mapAppSaleSummaryChange.set(h, new x.lu()),
              this.m_mapAppSaleSummaryChange.get(h)
            );
          }
          BHasAppSaleSummaryChangeCallback(h) {
            return this.m_mapAppSaleSummaryChange.has(h);
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
                this.m_mapAppSaleSummary.forEach((h) => {
                  (this.m_totalSummary.net_sales_usd += h.net_sales_usd),
                    (this.m_totalSummary.net_units_sold += h.net_units_sold),
                    (this.m_totalSummary.gross_sales_usd += h.gross_sales_usd),
                    (this.m_totalSummary.gross_units_sold +=
                      h.gross_units_sold);
                })),
              this.m_totalSummary
            );
          }
          SetAppSaleSummary(h) {
            this.m_mapAppSaleSummary.set(h.appid, h),
              this.m_mapAppSaleSummaryChange.has(h.appid) &&
                this.m_mapAppSaleSummaryChange.get(h.appid).Dispatch(h);
          }
          GetTopNApps(h) {
            const R = Array.from(this.m_mapAppSaleSummary.values());
            return (
              R.sort((A, j) => (j.gross_sales_usd || 0) - A.gross_sales_usd),
              R.slice(0, h)
            );
          }
          async LoadApps(h) {
            let R = [...h];
            const A = new Array();
            let j = new Array();
            for (; R.length > 0; ) {
              R = R.filter((O) =>
                this.m_mapAppToLoadPromises.has(O)
                  ? (A.push(this.m_mapAppToLoadPromises.get(O)), !1)
                  : !0,
              );
              const B = R.splice(0, I),
                c = this.InternalLoadAppBatch(B);
              A.push(c),
                j.push(c),
                j.length > 0 && (await Promise.all(j), (j = new Array()));
            }
            await Promise.all(A);
          }
          async InternalLoadAppBatch(h) {
            let R;
            try {
              const A = new FormData();
              A.append("sessionid", (0, M.KC)()),
                A.append("rgAppIDs", h.join(",")),
                A.append("rtimeStart", "" + this.m_rtStartTime),
                A.append("rtimeEnd", "" + this.m_rtEndTime);
              const j = `${D.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
                B = await g().post(j, A, { withCredentials: !0 });
              if (B.status == 200 && B.data?.apps_to_packages?.length > 0)
                return (
                  B.data.package_summaries.forEach((c) => {
                    this.m_mapPackageSummary.set(c.packageid, c);
                  }),
                  B.data.apps_to_packages.forEach((c) => {
                    const O = c.subs || [];
                    this.m_mapAppPackageList.set(c.appid, O);
                    const b = {
                      appid: c.appid,
                      gross_sales_usd: 0,
                      gross_units_sold: 0,
                      net_sales_usd: 0,
                      net_units_sold: 0,
                    };
                    O.forEach((U) => {
                      const P = this.m_mapPackageSummary.get(U);
                      P &&
                        ((b.gross_sales_usd += P.gross_sales_usd),
                        (b.gross_units_sold += P.gross_units_sold),
                        (b.net_sales_usd += P.net_sales_usd),
                        (b.net_units_sold += P.net_units_sold));
                    }),
                      this.m_mapAppSaleSummary.set(c.appid, b),
                      this.BHasAppSaleSummaryChangeCallback(c.appid) &&
                        this.GetAppSaleSummaryChangeCallback(c.appid).Dispatch(
                          b,
                        );
                  }),
                  !0
                );
              R = (0, v.H)(B);
            } catch (A) {
              R = (0, v.H)(A);
            }
            return (
              console.error(
                "CSaleRankStore::InternalLoadAppBatch failed with " +
                  R.strErrorMsg,
                R,
              ),
              !1
            );
          }
          constructor(h, R) {
            if (R) (this.m_rtStartTime = h), (this.m_rtEndTime = R);
            else {
              const A = new Date();
              A.setUTCHours(0),
                A.setUTCMinutes(0),
                A.setUTCSeconds(0),
                A.setUTCMilliseconds(0);
              const j = Math.floor(A.getTime() / 1e3);
              (this.m_rtEndTime = j - 1440 * 60),
                (this.m_rtStartTime = j - (h + 1) * 24 * 60 * 60);
            }
          }
        }
      },
      85873: (F, W, i) => {
        "use strict";
        i.d(W, {
          DT: () => z,
          GX: () => B,
          LD: () => U,
          fT: () => b,
          k: () => N,
          lY: () => O,
          tV: () => k,
        });
        var s = i(41735),
          g = i.n(s),
          v = i(90626),
          x = i(72604),
          D = i(34592),
          M = i(3166),
          I = i(14947),
          f = i(27066),
          K = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          R = (T, p, S, a) => {
            for (
              var t = a > 1 ? void 0 : a ? h(p, S) : p, e = T.length - 1, r;
              e >= 0;
              e--
            )
              (r = T[e]) && (t = (a ? r(p, S, t) : r(t)) || t);
            return a && t && K(p, S, t), t;
          };
        class A {
          m_mapCategories;
          m_promise;
          static s_singleton;
          constructor() {}
          BIsLoaded() {
            return !!this.m_mapCategories;
          }
          GetCategories() {
            return this.m_mapCategories;
          }
          async HintLoad() {
            return (
              this.m_promise || (this.m_promise = this.Load()), this.m_promise
            );
          }
          async Load() {
            const p =
                Config.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetcontenthubcategories",
              S = { origin: self.origin, sessionid: GetSessionID() };
            let a = null;
            try {
              const t = await axios.get(p, { params: S });
              if (t.status === 200 && t.data?.success === k_EResultOK) {
                this.m_mapCategories = this.ParseResponse(t.data);
                return;
              }
              (this.m_promise = null), (a = GetMsgAndErrorCodeFromResponse(t));
            } catch (t) {
              (this.m_promise = null), (a = GetMsgAndErrorCodeFromResponse(t));
            }
            console.error(
              "CContentHubCategoriesStore.Load failed: " + a.strErrorMsg,
              a,
            );
          }
          ParseResponse(p) {
            const S = new Map(),
              a = p.categories;
            for (const t of Object.keys(a)) {
              const e = a[t],
                r = {
                  handle: e.handle,
                  loc_token: e.loc_token,
                  description_loc_token: e.description_loc_token,
                  type: e.type,
                  heading: e.heading,
                  id: e.id || void 0,
                  exclude_from_search: e.exclude_from_search,
                  search_alias: e.search_alias,
                },
                {
                  must: m,
                  any: d,
                  mustnot: o,
                  replaces_tags: n,
                  content_descriptors: u,
                } = e;
              m &&
                (Array.isArray(m)
                  ? (r.must = m.map((l) => ({ id: l })))
                  : (r.must = [{ id: m }])),
                d &&
                  (Array.isArray(d)
                    ? (r.any = d.map((l) => ({ id: l })))
                    : (r.any = [{ id: d }])),
                o &&
                  (Array.isArray(o)
                    ? (r.mustnot = o.map((l) => ({ id: l })))
                    : (r.mustnot = [{ id: o }])),
                n &&
                  (Array.isArray(n)
                    ? (r.replaces_tags = n.map((l) => ({ id: l })))
                    : (r.replaces_tags = [{ id: n }])),
                u &&
                  typeof u == "string" &&
                  (r.content_descriptors = u
                    .split(",")
                    .map((l) => parseInt(l))),
                S.set(t, r);
            }
            return S;
          }
          static Get() {
            return A.s_singleton || (A.s_singleton = new A()), A.s_singleton;
          }
        }
        function j() {
          const [T, p] = React.useState();
          return (
            React.useEffect(() => {
              p(void 0),
                A.Get()
                  .HintLoad()
                  .then(() => {
                    p(A.Get().GetCategories());
                  });
            }, []),
            T
          );
        }
        async function B() {
          const T =
              M.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
            p = { origin: self.origin, sessionid: (0, M.KC)() };
          let S = null;
          try {
            const a = await g().get(T, { params: p, withCredentials: !0 });
            if (a.status === 200 && a.data?.success === x.R) {
              const t = { rgCategories: [], bHasUnpublishedChanges: !1 };
              return (
                a.data.in_progress
                  ? ((t.rgCategories = c(
                      JSON.parse(a.data.in_progress).categories,
                    )),
                    (t.bHasUnpublishedChanges = !0))
                  : a.data.active &&
                    (t.rgCategories = c(JSON.parse(a.data.active).categories)),
                t
              );
            }
            S = (0, D.H)(a);
          } catch (a) {
            S = (0, D.H)(a);
          }
          return (
            console.error("GetCategoriesKV failed: " + S.strErrorMsg, S),
            { rgCategories: [] }
          );
        }
        function c(T) {
          const p = [];
          for (const S of Object.keys(T)) {
            const a = T[S],
              t = {
                handle: a.handle,
                type: a.type,
                loc_token: a.loc_token,
                description_loc_token: a.description_loc_token,
                heading: a.heading,
                id: a.id || void 0,
                exclude_from_search: !!a.exclude_from_search,
                search_alias: a.search_alias,
              },
              {
                must: e,
                any: r,
                mustnot: m,
                replaces_tags: d,
                content_descriptors: o,
              } = a;
            e &&
              (Array.isArray(e)
                ? (t.must = e.map((n) => ({ id: Number(n) })))
                : (t.must = [{ id: Number(e) }])),
              r &&
                (Array.isArray(r)
                  ? (t.any = r.map((n) => ({ id: Number(n) })))
                  : (t.any = [{ id: Number(r) }])),
              m &&
                (Array.isArray(m)
                  ? (t.mustnot = m.map((n) => ({ id: Number(n) })))
                  : (t.mustnot = [{ id: Number(m) }])),
              d &&
                (Array.isArray(d)
                  ? (t.replaces_tags = d.map((n) => ({ id: Number(n) })))
                  : (t.replaces_tags = [{ id: Number(d) }])),
              o &&
                typeof o == "string" &&
                (t.content_descriptors = o.split(",").map((n) => parseInt(n))),
              p.push(t);
          }
          return p;
        }
        function O() {
          const [T, p] = (0, v.useState)(null);
          return (
            (0, v.useEffect)(() => {
              B().then((S) => {
                p(S.rgCategories);
              });
            }, []),
            T
          );
        }
        async function b(T) {
          const p = {};
          for (const e of T)
            (p[e.handle] = {
              handle: e.handle,
              type: e.type,
              loc_token: e.loc_token,
              description_loc_token: e.description_loc_token,
              must: e.must?.map((r) => r.id) || void 0,
              any: e.any?.map((r) => r.id) || void 0,
              mustnot: e.mustnot?.map((r) => r.id) || void 0,
              replaces_tags: e.replaces_tags?.map((r) => r.id) || void 0,
              heading: e.heading || void 0,
              id: e.id,
              exclude_from_search: e.exclude_from_search,
              search_alias: e.search_alias,
              content_descriptors: e.content_descriptors?.length
                ? e.content_descriptors.join(",")
                : void 0,
            }),
              p[e.handle].must?.length === 1 &&
                (p[e.handle].must = p[e.handle].must[0]),
              p[e.handle].mustnot?.length === 1 &&
                (p[e.handle].mustnot = p[e.handle].mustnot[0]),
              p[e.handle].replaces_tags?.length === 1 &&
                (p[e.handle].replaces_tags = p[e.handle].replaces_tags[0]);
          const S =
              M.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
            a = new FormData();
          a.append("sessionid", (0, M.KC)()),
            a.append("origin", self.origin),
            a.append("json", JSON.stringify(p));
          let t = null;
          try {
            const e = await g().post(S, a, { withCredentials: !0 });
            if (e.status === 200 && e.data?.success === x.R)
              return G.Get().ClearDirty(), null;
            t = (0, D.H)(e);
          } catch (e) {
            t = (0, D.H)(e);
          }
          return (
            console.error("SaveCategoriesKV failed: " + t.strErrorMsg, t), t
          );
        }
        async function U() {
          const T =
              M.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
            p = { origin: self.origin, sessionid: (0, M.KC)() };
          let S = null;
          try {
            const a = await g().get(T, { params: p, withCredentials: !0 });
            if (a.status !== 200 || a.data?.success !== x.R) return (0, D.H)(a);
          } catch (a) {
            return (0, D.H)(a);
          }
          return null;
        }
        const P = class Z {
          constructor() {
            (0, I.Gn)(this);
          }
          m_rgTags;
          m_rgCategories;
          m_mapStoreTags;
          m_mapStoreCategories;
          m_promise;
          m_bDirty = !1;
          static s_singleton;
          BIsLoaded() {
            return !!this.m_rgTags && !!this.m_rgCategories;
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
            const p =
                M.TS.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetstoretagsandcategories",
              S = {
                origin: self.origin,
                sessionid: (0, M.KC)(),
                l: M.TS.LANGUAGE,
              };
            let a = null;
            try {
              const t = await g().get(p, { params: S });
              if (t.status === 200 && t.data?.success === x.R) {
                (this.m_rgTags = t.data.tags),
                  (this.m_rgCategories = t.data.categories),
                  (this.m_mapStoreTags = new Map()),
                  this.m_rgTags.forEach((e) =>
                    this.m_mapStoreTags.set(e.tagid, e),
                  ),
                  (this.m_mapStoreCategories = new Map()),
                  this.m_rgCategories.forEach((e) =>
                    this.m_mapStoreCategories.set(e.categoryid, e),
                  );
                return;
              }
              (this.m_promise = null), (a = (0, D.H)(t));
            } catch (t) {
              (this.m_promise = null), (a = (0, D.H)(t));
            }
            console.error(
              "CStoreTagsAndCategoriesStore.Load failed: " + a.strErrorMsg,
              a,
            );
          }
          static Get() {
            return Z.s_singleton || (Z.s_singleton = new Z()), Z.s_singleton;
          }
        };
        R([I.sH], P.prototype, "m_bDirty", 2),
          R([f.o], P.prototype, "SetDirty", 1);
        let G = P;
        function Y() {
          return useObserver(() => G.Get().BIsDirty());
        }
        function H() {
          return { fnSetDirty: G.Get().SetDirty };
        }
        function k() {
          return G.Get().BIsDirty();
        }
        function z() {
          const [T, p] = v.useState(G.Get().GetTags()),
            [S, a] = v.useState(G.Get().GetCategories());
          return (
            v.useEffect(() => {
              (T === void 0 || S === void 0) &&
                G.Get()
                  .HintLoad()
                  .then(() => {
                    p(G.Get().GetTags()), a(G.Get().GetCategories());
                  });
            }, [S, T]),
            { rgTags: T, rgCategories: S }
          );
        }
        function N() {
          const [T, p] = v.useState(G.Get().GetStoreTagMap()),
            [S, a] = v.useState(G.Get().GetStoreCategoryMap());
          return (
            v.useEffect(() => {
              (T === void 0 || S === void 0) &&
                G.Get()
                  .HintLoad()
                  .then(() => {
                    p(G.Get().GetStoreTagMap()),
                      a(G.Get().GetStoreCategoryMap());
                  });
            }, [S, T]),
            { mapStoreTags: T, mapStoreCategories: S }
          );
        }
      },
      31553: (F, W, i) => {
        "use strict";
        i.d(W, {
          AY: () => S,
          CU: () => U,
          Iw: () => T,
          Th: () => N,
          _E: () => c,
          eX: () => k,
          hl: () => p,
          mg: () => z,
          p$: () => H,
          tt: () => B,
        });
        var s = i(41735),
          g = i.n(s),
          v = i(1077),
          x = i(14947),
          D = i(90626),
          M = i(20194),
          I = i(8323),
          f = i(54963),
          K = i(98609),
          h = i(3166),
          R = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          j = (a, t, e, r) => {
            for (
              var m = r > 1 ? void 0 : r ? A(t, e) : t, d = a.length - 1, o;
              d >= 0;
              d--
            )
              (o = a[d]) && (m = (r ? o(t, e, m) : o(m)) || m);
            return r && m && R(t, e, m), m;
          };
        const B = 120,
          c = 10,
          O = class q {
            m_appAndPackagesSummuries = new v.Q(B);
            m_mapContentHubSummary = new Map();
            m_mapContentHubToAppCount = new Map();
            m_mapContentHubSummaryPromises = new Map();
            m_mapContentHubSummaryChange = new Map();
            m_mapContentHubTopAppSaleSummaryChange = new Map();
            m_mapContentHubTopAppSaleSummary = new Map();
            m_rgSummaries = null;
            m_summaryAnalysisChange = new I.lu();
            m_loadSummaryCache;
            GetSummaryAnalysis() {
              return this.m_rgSummaries;
            }
            GetSummaryAnalysisChange() {
              return this.m_summaryAnalysisChange;
            }
            GetKey(t) {
              return "" + t.type + "_" + t.handle;
            }
            GetContentHubTopAppSaleSummaryChangeCallback(t) {
              const e = this.GetKey(t);
              return (
                this.m_mapContentHubTopAppSaleSummaryChange.has(e) ||
                  this.m_mapContentHubTopAppSaleSummaryChange.set(
                    e,
                    new I.lu(),
                  ),
                this.m_mapContentHubTopAppSaleSummaryChange.get(e)
              );
            }
            GetContentHubSaleSummary(t) {
              const e = this.GetKey(t);
              return this.m_mapContentHubSummary.get(e);
            }
            GetContentHubSummaryChangeCallback(t) {
              const e = this.GetKey(t);
              return (
                this.m_mapContentHubSummaryChange.has(e) ||
                  this.m_mapContentHubSummaryChange.set(e, new I.lu()),
                this.m_mapContentHubSummaryChange.get(e)
              );
            }
            GetTopAppSummary(t) {
              const e = this.GetKey(t);
              return this.m_mapContentHubTopAppSaleSummary.get(e);
            }
            GetAppSummaryObject() {
              return this.m_appAndPackagesSummuries;
            }
            async LoadContentHubSaleSummary(t, e) {
              if (!e) return null;
              const r = this.GetKey(t);
              return (
                this.m_mapContentHubSummaryPromises.has(r) ||
                  this.m_mapContentHubSummaryPromises.set(
                    r,
                    this.InternalLoadContentHubSaleSummary(t, e),
                  ),
                this.m_mapContentHubSummaryPromises.get(r)
              );
            }
            async InternalLoadContentHubSaleSummary(t, e) {
              const r = this.GetKey(t);
              await this.m_appAndPackagesSummuries.LoadApps(e);
              const m = {
                  gross_sales_usd: 0,
                  gross_units_sold: 0,
                  net_sales_usd: 0,
                  net_units_sold: 0,
                },
                d = new Array();
              e.forEach((n) => {
                const u = this.m_appAndPackagesSummuries.GetAppSaleSummary(n);
                u &&
                  ((m.gross_sales_usd += u.gross_sales_usd),
                  (m.gross_units_sold += u.gross_units_sold),
                  (m.net_sales_usd += u.net_sales_usd),
                  (m.net_units_sold += u.net_units_sold)),
                  d.push(u);
              }),
                d.sort((n, u) => u.gross_sales_usd - n.gross_sales_usd);
              const o = {
                gross_sales_usd: 0,
                gross_units_sold: 0,
                net_sales_usd: 0,
                net_units_sold: 0,
              };
              return (
                d.slice(0, c).forEach((n) => {
                  (o.gross_sales_usd += n.gross_sales_usd),
                    (o.gross_units_sold += n.gross_units_sold),
                    (o.net_sales_usd += n.net_sales_usd),
                    (o.net_units_sold += n.net_units_sold);
                }),
                this.m_mapContentHubTopAppSaleSummary.set(r, o),
                this.m_mapContentHubSummary.set(r, m),
                this.m_mapContentHubToAppCount.set(r, d.length),
                this.GetContentHubTopAppSaleSummaryChangeCallback(t).Dispatch(
                  o,
                ),
                this.GetContentHubSummaryChangeCallback(t).Dispatch(m),
                (this.m_rgSummaries = [
                  ...(this.m_rgSummaries ?? []),
                  this.BuildAnalysis(t),
                ]),
                this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
                this.SaveToCacheSaleSummary(t, m, o, d.slice(0, c), d.length),
                m
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
              const t = {
                  rtStartTime: this.m_appAndPackagesSummuries.GetRTStartTime(),
                  rtEndTime: this.m_appAndPackagesSummuries.GetRTEndTime(),
                  sessionid: (0, h.KC)(),
                },
                e = `${K.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
                r = await g().get(e, { params: t });
              if (r.status == 200 && r.data?.cache?.length > 0) {
                const m = new Array();
                r.data.cache.forEach((d) => {
                  const o = JSON.parse(d),
                    n = { handle: o.handle, type: o.type },
                    u = this.GetKey(n);
                  this.m_mapContentHubTopAppSaleSummary.set(u, o.topAppSummary),
                    this.m_mapContentHubSummary.set(u, o.hubSummary),
                    this.m_mapContentHubToAppCount.set(u, o.appCount),
                    o.topApps.forEach((l) =>
                      this.m_appAndPackagesSummuries.SetAppSaleSummary(l),
                    ),
                    this.m_mapContentHubSummaryChange.has(u) &&
                      this.m_mapContentHubSummaryChange
                        .get(u)
                        .Dispatch(o.hubSummary),
                    this.m_mapContentHubTopAppSaleSummaryChange.has(u) &&
                      this.m_mapContentHubTopAppSaleSummaryChange
                        .get(u)
                        .Dispatch(o.topAppSummary),
                    m.push(this.BuildAnalysis(n));
                }),
                  (this.m_rgSummaries = m),
                  this.m_summaryAnalysisChange.Dispatch(m);
              }
              return null;
            }
            BuildAnalysis(t) {
              const e = this.GetKey(t),
                r = this.m_mapContentHubSummary.get(e),
                m = this.m_mapContentHubTopAppSaleSummary.get(e),
                d = this.m_mapContentHubToAppCount.get(e);
              return {
                handle: t.handle,
                total_games: d,
                hub_gross_units_sold: r.gross_units_sold,
                hub_gross_sales_usd: Math.floor(r.gross_sales_usd / 100),
                hub_units_per_day: Math.floor(r.gross_units_sold / B),
                hub_sales_usd_per_day: Math.floor(
                  r.gross_sales_usd / (100 * B),
                ),
                top_apps_percent:
                  r.gross_sales_usd > 0
                    ? ((m.gross_sales_usd / r.gross_sales_usd) * 100).toFixed(2)
                    : "NA",
              };
            }
            async SaveToCacheSaleSummary(t, e, r, m, d) {
              if (t.type === "category_editor") return;
              const o = {
                  type: t.type,
                  handle: t.handle,
                  topAppSummary: r,
                  hubSummary: e,
                  topApps: m,
                  appCount: d,
                },
                n = new FormData();
              n.append("sessionid", (0, h.KC)()),
                n.append(
                  "rtStartTime",
                  "" + this.m_appAndPackagesSummuries.GetRTStartTime(),
                ),
                n.append(
                  "rtEndTime",
                  "" + this.m_appAndPackagesSummuries.GetRTEndTime(),
                ),
                n.append("bClear", "false"),
                n.append("key", this.GetKey(t)),
                n.append("rgStats", JSON.stringify(o));
              const u = `${K.TS.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
                l = await g().post(u, n, { withCredentials: !0 });
              l.status != 200 &&
                console.error(
                  "SaveToCacheSaleSummary failed to save " + x.HP,
                  l,
                );
            }
            static s_Singleton;
            static Get() {
              return q.s_Singleton || (q.s_Singleton = new q()), q.s_Singleton;
            }
          };
        j([f.oI], O.prototype, "LoadCachedSaleSummaries", 1);
        let b = O;
        function U(a) {
          const {
            data: t,
            isLoading: e,
            isError: r,
          } = (0, M.I)({
            queryKey: ["contenthubsummary", a.type, a.handle],
            queryFn: async () => {
              const m = {
                  contenthubcategorytype: a.type,
                  handle: a.handle,
                  sessionid: (0, h.KC)(),
                },
                d = `${K.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
                o = await g().get(d, { params: m });
              return o.status == 200 && o.data?.top_apps?.length > 0
                ? o.data
                : null;
            },
          });
          return {
            rgTopApps: e || r || !t ? null : t?.top_apps,
            nTotalGames: e || r || !t ? null : t?.total_games,
            isError: r,
          };
        }
        function P(a) {
          const {
            data: t,
            isLoading: e,
            isError: r,
          } = (0, M.I)({
            queryKey: ["contenthubapplist", a.type, a.handle],
            queryFn: async () => {
              const m = {
                  contenthubcategorytype: a.type,
                  handle: a.handle,
                  sessionid: (0, h.KC)(),
                },
                d = `${K.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                o = await g().get(d, { params: m });
              return o.status == 200 && o.data?.apps?.length > 0
                ? o.data
                : null;
            },
          });
          return t?.apps || null;
        }
        function G(a, t, e) {
          return {
            musthaveall: (a || [])
              .filter(Boolean)
              .map((r) => r.id)
              .sort()
              .join(","),
            musthaveany: (t || [])
              .filter(Boolean)
              .map((r) => r.id)
              .sort()
              .join(","),
            mustnothaveany: (e || [])
              .filter(Boolean)
              .map((r) => r.id)
              .sort()
              .join(","),
          };
        }
        const Y = { total_games: 0, all_appid: [], top_games: [] };
        function H(a, t, e) {
          const {
              musthaveall: r,
              musthaveany: m,
              mustnothaveany: d,
            } = G(a, t, e),
            {
              data: o,
              isLoading: n,
              isError: u,
            } = (0, M.I)({
              queryKey: ["useContentHubCategoryEditorFullAppList", r, m, d],
              queryFn: async () => {
                const l = {
                    musthaveall: r,
                    musthaveany: m,
                    mustnothaveany: d,
                    sessionid: (0, h.KC)(),
                  },
                  y = `${K.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                  L = await g().get(y, { params: l });
                return L.status == 200 && L.data?.top_games?.length > 0
                  ? L.data
                  : null;
              },
              enabled: r.length != 0 || m.length != 0 || d.length != 0,
            });
          return r.length == 0 && m.length == 0 && d.length == 0
            ? Y
            : o || null;
        }
        function k(a, t, e) {
          const r = H(a, t, e),
            m = (0, D.useMemo)(() => {
              const {
                musthaveall: n,
                musthaveany: u,
                mustnothaveany: l,
              } = G(a, t, e);
              return { type: "category_editor", handle: n + "_" + u + "_" + l };
            }, [a, t, e]),
            [d, o] = (0, D.useState)(b.Get().GetContentHubSaleSummary(m));
          return (
            (0, D.useEffect)(() => {
              r?.all_appid?.length &&
                !d &&
                b.Get().LoadContentHubSaleSummary(m, r.all_appid);
            }, [m, r, d]),
            (0, f.hL)(b.Get().GetContentHubSummaryChangeCallback(m), o),
            d
          );
        }
        function z(a, t, e) {
          const r = (0, D.useMemo)(() => {
              const {
                musthaveall: o,
                musthaveany: n,
                mustnothaveany: u,
              } = G(a, t, e);
              return { type: "category_editor", handle: o + "_" + n + "_" + u };
            }, [a, t, e]),
            [m, d] = (0, D.useState)(b.Get().GetTopAppSummary(r));
          return (
            (0, f.hL)(
              b.Get().GetContentHubTopAppSaleSummaryChangeCallback(r),
              d,
            ),
            m
          );
        }
        function N(a) {
          const t = P(a),
            [e, r] = (0, D.useState)(b.Get().GetContentHubSaleSummary(a));
          return (
            (0, D.useEffect)(() => {
              t?.length && !e && b.Get().LoadContentHubSaleSummary(a, t);
            }, [a, a.type, a.handle, t, e]),
            (0, f.hL)(b.Get().GetContentHubSummaryChangeCallback(a), r),
            e
          );
        }
        function T(a) {
          const [t, e] = (0, D.useState)(
            b.Get().GetAppSummaryObject().GetAppSaleSummary(a),
          );
          return (
            (0, f.hL)(
              b.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(a),
              e,
            ),
            t
          );
        }
        function p(a) {
          const [t, e] = (0, D.useState)(b.Get().GetTopAppSummary(a));
          return (
            (0, f.hL)(
              b.Get().GetContentHubTopAppSaleSummaryChangeCallback(a),
              e,
            ),
            t
          );
        }
        function S() {
          const [a, t] = (0, D.useState)(b.Get().GetSummaryAnalysis());
          return (
            (0, D.useEffect)(() => {
              b.Get().LoadCachedSaleSummaries();
            }, []),
            (0, f.hL)(b.Get().GetSummaryAnalysisChange(), t),
            a
          );
        }
      },
      39077: (F, W, i) => {
        "use strict";
        i.d(W, {
          KU: () => T,
          Ke: () => z,
          W7: () => S,
          hp: () => H,
          iT: () => k,
          ny: () => r,
        });
        var s = i(7850),
          g = i(85873),
          v = i(31553),
          x = i(40323),
          D = i.n(x),
          M = i(90626),
          I = i(58534),
          f = i(94352),
          K = i(64377),
          h = i(85599),
          R = i(36707),
          A = i(18210),
          j = i(19730),
          B = i(98609),
          c = i(92237),
          O = i.n(c),
          b = i(29522),
          U = i(40358),
          P = i(47875),
          G = i(21721);
        const Y = "0px 0px 100% 0px",
          H = 5e3,
          k = 500;
        function z(o) {
          const [n, u] = (0, M.useState)(!0),
            l = (0, g.lY)(),
            y = (0, M.useMemo)(
              () => (l?.length > 0 ? l.filter((L) => !!L.type) : null),
              [l],
            );
          return !y || y.length == 0
            ? (0, s.jsx)(h.t, { string: (0, A.we)("#Loading") })
            : (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsxs)("div", {
                        className: c.DashTitleBar,
                        children: [
                          (0, s.jsx)("h1", {
                            children: "Theme Sale Planning Dashboard",
                          }),
                          (0, s.jsxs)("div", {
                            className: c.ButtonGroup,
                            children: [
                              !n &&
                                (0, s.jsxs)(I.$n, {
                                  onClick: () => u(!0),
                                  children: [
                                    "Load ",
                                    v.tt,
                                    " Days of Sale Summaries",
                                  ],
                                }),
                              (0, s.jsx)(d, {}),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: c.DashDescription,
                        children: (0, s.jsxs)("ul", {
                          children: [
                            (0, s.jsxs)("li", {
                              children: [
                                "Themes are currently make from all of the categories that are defined on this",
                                " ",
                                (0, s.jsx)("a", {
                                  href: `${B.TS.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                                  children: "categories editor page.",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "Hubs with more than ",
                                H,
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
                  y.map((L, V) =>
                    (0, s.jsx)(N, { category: L, bSaleSummary: n }, V),
                  ),
                ],
              });
        }
        function N(o) {
          const { category: n, bSaleSummary: u } = o;
          return (0, s.jsx)(K.K, {
            placeholderHeight: 250,
            rootMargin: Y,
            children: (0, s.jsx)(p, { category: n, bSaleSummary: u }),
          });
        }
        function T(o) {
          const { nTotalGames: n } = o;
          let u, l;
          return (
            n > k && n <= H
              ? ((u = c.SizeColorSweet), (l = "Good size!"))
              : n > H
                ? ((u = c.SizeColorBig), (l = "Too big"))
                : ((u = c.SizeColorSmall), (l = "Too small")),
            (0, s.jsxs)("div", {
              className: (0, R.A)(c.ThemeSize, u),
              children: [(0, j.Dq)(n), " games ( ", l, ")"],
            })
          );
        }
        function p(o) {
          const { category: n, bSaleSummary: u } = o,
            { rgTopApps: l, nTotalGames: y } = (0, v.CU)(n),
            L = y > 500 && y <= H;
          return (0, s.jsxs)("div", {
            className: c.ThemeRow,
            children: [
              (0, s.jsxs)("div", {
                className: c.ThemeDefinitionCtn,
                children: [
                  (0, s.jsx)("a", {
                    href: `${B.TS.STORE_BASE_URL}category/${n.handle}`,
                    className: c.ThemeTitle,
                    children: n.loc_token ? (0, A.we)(n.loc_token) : n.handle,
                  }),
                  (0, s.jsx)(T, { nTotalGames: y }),
                  (0, s.jsx)("div", {
                    className: c.SaleStats,
                    children: !!(u && L) && (0, s.jsx)(m, { category: n }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: c.TopGamesCtn,
                children: [
                  (0, s.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                  (0, s.jsx)("div", {
                    className: c.GamesRow,
                    children: l
                      ?.slice(0, 10)
                      .map((V) =>
                        (0, s.jsx)(
                          S,
                          { info: V, category: n, bSaleSummary: u && L },
                          V.appid,
                        ),
                      ),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: c.ThemeDetails,
                children: [
                  "handle: ",
                  n.handle,
                  (0, s.jsx)(t, { category: n }),
                ],
              }),
            ],
          });
        }
        function S(o) {
          const { info: n, bSaleSummary: u } = o,
            l = (0, b.$5)(n.appid),
            { data: y } = (0, U.lv)(l),
            { data: L } = (0, U.J$)(l);
          return L && y
            ? (0, s.jsxs)("div", {
                className: c.GameItem,
                children: [
                  (0, s.jsx)(f.Q, {
                    id: l,
                    hoverProps: {
                      direction: "overlay",
                      style: { minWidth: "320px", maxWidth: "320px" },
                    },
                    className: c.GameImage,
                    children: (0, s.jsx)("a", {
                      href: (0, P._)(L),
                      children: (0, s.jsx)("img", {
                        src: (0, G.b0)(y, "header"),
                        alt: L.name,
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    children: ["\xA0Rank: ", n.long_term_sale_rank],
                  }),
                  !!u && (0, s.jsx)(a, { ...o }),
                ],
              })
            : (0, s.jsxs)("div", {
                children: [
                  "Loading appid: ",
                  n.appid,
                  " with rank: ",
                  n.long_term_sale_rank,
                ],
              });
        }
        function a(o) {
          const { info: n, category: u } = o,
            l = (0, v.Iw)(n.appid),
            y = (0, v.Th)(u);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              !!l &&
                (0, s.jsxs)("div", {
                  children: [
                    " ",
                    "$",
                    (0, j.Dq)(Math.floor(l.gross_sales_usd / 100)),
                  ],
                }),
              !!(l && y?.gross_sales_usd) &&
                (0, s.jsxs)("div", {
                  children: [
                    "( ",
                    ((l.gross_sales_usd / y.gross_sales_usd) * 100).toFixed(2),
                    "% of hub )",
                  ],
                }),
            ],
          });
        }
        function t(o) {
          const { mapStoreTags: n, mapStoreCategories: u } = (0, g.k)(),
            { category: l } = o;
          return !n || !u || (!l.any && !l.must && !l.mustnot)
            ? null
            : (0, s.jsxs)("div", {
                className: c.ThemeTags,
                children: [
                  !!l.must &&
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("span", {
                          className: c.TagsMustTitle,
                          children: "Must:",
                        }),
                        " ",
                        l.must?.map((y) =>
                          (0, s.jsx)(
                            e,
                            { type: l.type, id: y.id },
                            l.type + "_" + y.id + "_" + l.handle,
                          ),
                        ),
                      ],
                    }),
                  !!l.any &&
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("span", {
                          className: c.TagsOrTitle,
                          children: "Any:",
                        }),
                        " ",
                        l.any?.map((y) =>
                          (0, s.jsx)(
                            e,
                            { type: l.type, id: y.id },
                            l.type + "_" + y.id + "_" + l.handle,
                          ),
                        ),
                      ],
                    }),
                  !!l.mustnot &&
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("span", {
                          className: c.TagsNotTitle,
                          children: "Must Not:",
                        }),
                        " ",
                        l.mustnot?.map((y) =>
                          (0, s.jsx)(
                            e,
                            { type: l.type, id: y.id },
                            l.type + "_" + y.id + "_" + l.handle,
                          ),
                        ),
                      ],
                    }),
                ],
              });
        }
        function e(o) {
          const { mapStoreTags: n, mapStoreCategories: u } = (0, g.k)(),
            { type: l, id: y } = o;
          return l == "tagids"
            ? (0, s.jsxs)("span", {
                children: [n.has(y) ? n.get(y).name : "tagid: " + y, ", "],
              })
            : (0, s.jsxs)("span", {
                children: [
                  u.has(y) ? u.get(y).name : "category id: " + y,
                  ", ",
                ],
              });
        }
        function r(o) {
          const { saleSummary: n, topAppSummary: u } = o;
          return n
            ? (0, s.jsx)("div", {
                className: c.ThemeRevenueCtn,
                children: (0, s.jsx)("table", {
                  children: (0, s.jsx)("tbody", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsxs)("td", {
                          children: [
                            "Total: ",
                            (0, s.jsx)("br", {}),
                            "$",
                            (0, j.Dq)(Math.floor(n.gross_sales_usd / 100)),
                          ],
                        }),
                        (0, s.jsxs)("td", {
                          children: [
                            "Per Day: ",
                            (0, s.jsx)("br", {}),
                            "$",
                            (0, j.Dq)(
                              Math.floor(n.gross_sales_usd / (100 * v.tt)),
                            ),
                          ],
                        }),
                        (0, s.jsxs)("td", {
                          children: [
                            "Total Units: ",
                            (0, s.jsx)("br", {}),
                            (0, j.Dq)(n.gross_units_sold),
                          ],
                        }),
                        (0, s.jsxs)("td", {
                          children: [
                            "Units Per Day: ",
                            (0, s.jsx)("br", {}),
                            (0, j.Dq)(Math.floor(n.gross_units_sold / v.tt)),
                          ],
                        }),
                        n.gross_sales_usd > 0 &&
                          (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsxs)("td", {
                              children: [
                                "Top ",
                                v._E,
                                " Apps: ",
                                (0, s.jsx)("br", {}),
                                (0, s.jsxs)("span", {
                                  className:
                                    (u.gross_sales_usd / n.gross_sales_usd) *
                                      100 >
                                    90
                                      ? c.SizeColorBig
                                      : c.SizeColorSweet,
                                  children: [
                                    (
                                      (u.gross_sales_usd / n.gross_sales_usd) *
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
        function m(o) {
          const { category: n } = o,
            u = (0, v.Th)(n),
            l = (0, v.hl)(n);
          return (0, s.jsx)(r, { saleSummary: u, topAppSummary: l });
        }
        function d(o) {
          const n = (0, v.AY)();
          return (0, s.jsx)("a", {
            href: `data:application/octet-stream,${encodeURIComponent(D().unparse({ data: n, fields: Object.keys(n ? n[0] : {}) }))}`,
            download: "theme_sale_stats.csv",
            children: "Export CSV",
          });
        }
      },
      91512: (F, W, i) => {
        "use strict";
        i.d(W, { A: () => O });
        var s = i(7850),
          g = i(90626),
          v = i(54963);
        const x =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var D = i(44894),
          M = i(41635),
          I = i(41609),
          f = i.n(I),
          K = i(64641),
          h = i.n(K),
          R = i(36118),
          A = i(41735),
          j = i.n(A),
          B = i(13854),
          c = i(36707);
        function O(U) {
          const {
              items: P,
              render: G,
              onDelete: Y,
              onEdit: H,
              onReorder: k,
              onMove: z,
              bDisabled: N,
              rowClassName: T,
            } = U,
            [p, S] = g.useState(!1),
            [a, t] = g.useState(void 0),
            [e, r] = g.useState(void 0),
            [m, d] = g.useState(-1),
            [o, n] = g.useState(void 0),
            [u, l] = g.useState(0),
            [y, L] = g.useState(0),
            [V, ee] = g.useState(void 0),
            [se, ae] = g.useState(""),
            X = g.useRef(void 0),
            Q = g.useRef([]),
            J = g.useRef([]),
            $ = g.useMemo(() => j().CancelToken.source(), []),
            ne = () => {
              X.current?.firstElementChild &&
                (l(X.current.firstElementChild.getBoundingClientRect().height),
                L(X.current.firstElementChild.getBoundingClientRect().width));
            };
          g.useEffect(() => {
            ne();
          }, []),
            g.useEffect(
              () => () => $.cancel("ReorderableList unmounting"),
              [$],
            );
          const me = (C, _) => {
              const E = Q.current[C]?.current;
              if (!E) {
                console.error(
                  "start element grab missing element at index " + C,
                );
                return;
              }
              S(!0), d(C), ee(void 0), n(C);
              const w = _.clientX - E.getBoundingClientRect().left;
              t(w);
              const te = _.clientY - E.getBoundingClientRect().top;
              r(te),
                (E.style.position = "fixed"),
                (E.style.left = _.clientX - w + "px"),
                (E.style.top = _.clientY - te + "px"),
                (E.style.zIndex = "1");
            },
            re = g.useCallback(
              (C) => {
                const _ = Q.current[m]?.current;
                if (!_) {
                  console.error("update grab element missing element");
                  return;
                }
                (_.style.left = C.clientX - a + "px"),
                  (_.style.top = C.clientY - e + "px");
              },
              [m, a, e],
            ),
            ue = g.useCallback(() => {
              const C = Q.current[m]?.current;
              C
                ? ((C.style.position = ""), (C.style.zIndex = ""))
                : console.error("end element drag missing element"),
                S(!1),
                d(-1),
                ee(void 0),
                n(void 0);
            }, [m]),
            ce = (C, _) => {
              $.token.reason ||
                (X.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  u !=
                    X.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  ne(),
                me(_, C),
                C.preventDefault());
            },
            oe = (C, _) => {
              const E = B.OQ(_ > C ? _ - 1 : _, 0, P.length - 1);
              C != E && (z ? z(C, E) : (0, M.yY)(P, C, E), le(E), k && k(P));
            },
            pe = (C) => {
              !p || $.token.reason || (ue(), oe(m, o));
            },
            de = g.useCallback(
              (C) => {
                if (!p || $.token.reason) return;
                const _ = C.clientY;
                let E;
                for (let w = 0; w < J.current.length; w++) {
                  const te = J.current[w].current.getBoundingClientRect().top,
                    ge = J.current[w].current.getBoundingClientRect().bottom,
                    Se = (te + ge * 2) / 3;
                  if (_ < Se) {
                    E = w;
                    break;
                  }
                }
                n(E ?? J.current.length), re(C);
              },
              [p, $, re],
            );
          (0, v.l6)(window, "mousemove", p ? de : void 0),
            (0, v.l6)(window, "mouseup", p ? pe : void 0),
            g.useEffect(() => {
              for (let C = Q.current.length; C < P.length; C++)
                Q.current.push(g.createRef()), J.current.push(g.createRef());
            }, [P.length]);
          const ie = (C) => {
              ee(void 0);
              const _ = se?.trim(),
                E = Number.parseInt(_);
              if (_.length == 0 || isNaN(E)) return;
              const w = E - 1;
              C != w && oe(C, w);
            },
            _e = (C, _) => {
              C.key === "Enter" && (ie(_), C.currentTarget.blur());
            },
            [he, le] = g.useState(void 0);
          return (0, s.jsx)("div", {
            className: f().WhitelistCtn,
            ref: X,
            children: P.map((C, _) =>
              (0, s.jsxs)(
                "div",
                {
                  ref: J.current[_],
                  children: [
                    _ == o && (0, s.jsx)(b, { width: y }),
                    (0, s.jsx)("div", {
                      ref: Q.current[_],
                      className: f().DragGhost,
                      children:
                        _ == m &&
                        (0, s.jsxs)("div", {
                          className: (0, c.A)(f().WhitelistRow, T),
                          children: [
                            (0, s.jsx)("img", {
                              className: (0, c.A)(
                                f().WhitelistAvatar,
                                f().Grabbing,
                              ),
                              src: x,
                            }),
                            (0, s.jsx)("input", {
                              className: (0, c.A)(
                                f().WhitelistNumber,
                                f().Disabled,
                                f().Grabbing,
                              ),
                              type: "text",
                              value: (o > _ ? o - 1 : o) + 1,
                              disabled: !0,
                            }),
                            G(C, _),
                          ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, c.A)(
                        f().WhitelistRow,
                        T,
                        p && f().DragActive,
                        _ == m && f().BeingDragged,
                        he == _ && f().Dropped,
                      ),
                      onAnimationEnd: () => le(void 0),
                      children: [
                        (0, s.jsx)("img", {
                          className: (0, c.A)(
                            f().WhitelistAvatar,
                            f().Grabbable,
                            N && f().DisabledGrab,
                          ),
                          src: x,
                          onMouseDown: N ? void 0 : (E) => ce(E, _),
                        }),
                        (0, s.jsx)("input", {
                          className: (0, c.A)(
                            f().WhitelistNumber,
                            N && f().Disabled,
                          ),
                          type: "text",
                          value: V == _ ? se : _ + 1,
                          disabled: N || _ == m,
                          onChange: (E) => ae(E.target.value),
                          onKeyDown: (E) => _e(E, _),
                          onFocus: (E) => {
                            ee(_), ae(E.target.value);
                          },
                          onBlur: () => ie(_),
                        }),
                        G(C, _),
                        _ != m &&
                          !!(H || Y) &&
                          (0, s.jsxs)("div", {
                            className: f().ButtonCtn,
                            children: [
                              !!H &&
                                (0, s.jsx)("div", {
                                  className: h().RemoveIcon,
                                  onClick: (E) => H(_, E),
                                  children: (0, s.jsx)(R.ffu, {}),
                                }),
                              !!Y &&
                                (0, s.jsx)("img", {
                                  className: h().RemoveIcon,
                                  src: D.A,
                                  onClick: (E) => Y(_, E),
                                }),
                            ],
                          }),
                      ],
                    }),
                    o == P.length &&
                      _ == P.length - 1 &&
                      (0, s.jsx)(b, { width: y }),
                  ],
                },
                _,
              ),
            ),
          });
        }
        function b(U) {
          const { width: P } = U;
          return (0, s.jsx)("div", {
            className: f().DragHighlightContainer,
            children: (0, s.jsx)("div", {
              className: f().DragHighlight,
              style: { width: P },
            }),
          });
        }
      },
      92237: (F) => {
        F.exports = {
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
      41609: (F) => {
        F.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
    },
  ]);
})();
