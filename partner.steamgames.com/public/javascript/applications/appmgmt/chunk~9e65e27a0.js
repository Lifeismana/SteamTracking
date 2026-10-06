/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [67352],
    {
      1077: (I, H, u) => {
        "use strict";
        u.d(H, { Q: () => v });
        var r = u(41735),
          M = u.n(r),
          f = u(34592),
          G = u(8323),
          T = u(98609),
          P = u(3166);
        const x = 5e3;
        class v {
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
          GetAppSaleSummary(d) {
            return this.m_mapAppSaleSummary.get(d);
          }
          GetAppSaleSummaryChangeCallback(d) {
            return (
              this.m_mapAppSaleSummaryChange.has(d) ||
                this.m_mapAppSaleSummaryChange.set(d, new G.lu()),
              this.m_mapAppSaleSummaryChange.get(d)
            );
          }
          BHasAppSaleSummaryChangeCallback(d) {
            return this.m_mapAppSaleSummaryChange.has(d);
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
                this.m_mapAppSaleSummary.forEach((d) => {
                  (this.m_totalSummary.net_sales_usd += d.net_sales_usd),
                    (this.m_totalSummary.net_units_sold += d.net_units_sold),
                    (this.m_totalSummary.gross_sales_usd += d.gross_sales_usd),
                    (this.m_totalSummary.gross_units_sold +=
                      d.gross_units_sold);
                })),
              this.m_totalSummary
            );
          }
          SetAppSaleSummary(d) {
            this.m_mapAppSaleSummary.set(d.appid, d),
              this.m_mapAppSaleSummaryChange.has(d.appid) &&
                this.m_mapAppSaleSummaryChange.get(d.appid).Dispatch(d);
          }
          GetTopNApps(d) {
            const A = Array.from(this.m_mapAppSaleSummary.values());
            return (
              A.sort((g, E) => (E.gross_sales_usd || 0) - g.gross_sales_usd),
              A.slice(0, d)
            );
          }
          async LoadApps(d) {
            let A = [...d];
            const g = new Array();
            let E = new Array();
            for (; A.length > 0; ) {
              A = A.filter((j) =>
                this.m_mapAppToLoadPromises.has(j)
                  ? (g.push(this.m_mapAppToLoadPromises.get(j)), !1)
                  : !0,
              );
              const b = A.splice(0, x),
                _ = this.InternalLoadAppBatch(b);
              g.push(_),
                E.push(_),
                E.length > 0 && (await Promise.all(E), (E = new Array()));
            }
            await Promise.all(g);
          }
          async InternalLoadAppBatch(d) {
            let A;
            try {
              const g = new FormData();
              g.append("sessionid", (0, P.KC)()),
                g.append("rgAppIDs", d.join(",")),
                g.append("rtimeStart", "" + this.m_rtStartTime),
                g.append("rtimeEnd", "" + this.m_rtEndTime);
              const E = `${T.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
                b = await M().post(E, g, { withCredentials: !0 });
              if (b.status == 200 && b.data?.apps_to_packages?.length > 0)
                return (
                  b.data.package_summaries.forEach((_) => {
                    this.m_mapPackageSummary.set(_.packageid, _);
                  }),
                  b.data.apps_to_packages.forEach((_) => {
                    const j = _.subs || [];
                    this.m_mapAppPackageList.set(_.appid, j);
                    const C = {
                      appid: _.appid,
                      gross_sales_usd: 0,
                      gross_units_sold: 0,
                      net_sales_usd: 0,
                      net_units_sold: 0,
                    };
                    j.forEach((K) => {
                      const R = this.m_mapPackageSummary.get(K);
                      R &&
                        ((C.gross_sales_usd += R.gross_sales_usd),
                        (C.gross_units_sold += R.gross_units_sold),
                        (C.net_sales_usd += R.net_sales_usd),
                        (C.net_units_sold += R.net_units_sold));
                    }),
                      this.m_mapAppSaleSummary.set(_.appid, C),
                      this.BHasAppSaleSummaryChangeCallback(_.appid) &&
                        this.GetAppSaleSummaryChangeCallback(_.appid).Dispatch(
                          C,
                        );
                  }),
                  !0
                );
              A = (0, f.H)(b);
            } catch (g) {
              A = (0, f.H)(g);
            }
            return (
              console.error(
                "CSaleRankStore::InternalLoadAppBatch failed with " +
                  A.strErrorMsg,
                A,
              ),
              !1
            );
          }
          constructor(d, A) {
            if (A) (this.m_rtStartTime = d), (this.m_rtEndTime = A);
            else {
              const g = new Date();
              g.setUTCHours(0),
                g.setUTCMinutes(0),
                g.setUTCSeconds(0),
                g.setUTCMilliseconds(0);
              const E = Math.floor(g.getTime() / 1e3);
              (this.m_rtEndTime = E - 1440 * 60),
                (this.m_rtStartTime = E - (d + 1) * 24 * 60 * 60);
            }
          }
        }
      },
      85873: (I, H, u) => {
        "use strict";
        u.d(H, {
          DT: () => w,
          GX: () => b,
          LD: () => K,
          fT: () => C,
          k: () => N,
          lY: () => j,
          tV: () => U,
        });
        var r = u(41735),
          M = u.n(r),
          f = u(90626),
          G = u(72604),
          T = u(34592),
          P = u(3166),
          x = u(14947),
          v = u(27066),
          O = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          A = (y, h, c, s) => {
            for (
              var e = s > 1 ? void 0 : s ? d(h, c) : h, t = y.length - 1, n;
              t >= 0;
              t--
            )
              (n = y[t]) && (e = (s ? n(h, c, e) : n(e)) || e);
            return s && e && O(h, c, e), e;
          };
        class g {
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
            const h =
                Config.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetcontenthubcategories",
              c = { origin: self.origin, sessionid: GetSessionID() };
            let s = null;
            try {
              const e = await axios.get(h, { params: c });
              if (e.status === 200 && e.data?.success === k_EResultOK) {
                this.m_mapCategories = this.ParseResponse(e.data);
                return;
              }
              (this.m_promise = null), (s = GetMsgAndErrorCodeFromResponse(e));
            } catch (e) {
              (this.m_promise = null), (s = GetMsgAndErrorCodeFromResponse(e));
            }
            console.error(
              "CContentHubCategoriesStore.Load failed: " + s.strErrorMsg,
              s,
            );
          }
          ParseResponse(h) {
            const c = new Map(),
              s = h.categories;
            for (const e of Object.keys(s)) {
              const t = s[e],
                n = {
                  handle: t.handle,
                  loc_token: t.loc_token,
                  description_loc_token: t.description_loc_token,
                  type: t.type,
                  heading: t.heading,
                  id: t.id || void 0,
                  exclude_from_search: t.exclude_from_search,
                  search_alias: t.search_alias,
                },
                {
                  must: l,
                  any: p,
                  mustnot: o,
                  replaces_tags: a,
                  content_descriptors: m,
                } = t;
              l &&
                (Array.isArray(l)
                  ? (n.must = l.map((i) => ({ id: i })))
                  : (n.must = [{ id: l }])),
                p &&
                  (Array.isArray(p)
                    ? (n.any = p.map((i) => ({ id: i })))
                    : (n.any = [{ id: p }])),
                o &&
                  (Array.isArray(o)
                    ? (n.mustnot = o.map((i) => ({ id: i })))
                    : (n.mustnot = [{ id: o }])),
                a &&
                  (Array.isArray(a)
                    ? (n.replaces_tags = a.map((i) => ({ id: i })))
                    : (n.replaces_tags = [{ id: a }])),
                m &&
                  typeof m == "string" &&
                  (n.content_descriptors = m
                    .split(",")
                    .map((i) => parseInt(i))),
                c.set(e, n);
            }
            return c;
          }
          static Get() {
            return g.s_singleton || (g.s_singleton = new g()), g.s_singleton;
          }
        }
        function E() {
          const [y, h] = React.useState();
          return (
            React.useEffect(() => {
              h(void 0),
                g
                  .Get()
                  .HintLoad()
                  .then(() => {
                    h(g.Get().GetCategories());
                  });
            }, []),
            y
          );
        }
        async function b() {
          const y =
              P.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
            h = { origin: self.origin, sessionid: (0, P.KC)() };
          let c = null;
          try {
            const s = await M().get(y, { params: h, withCredentials: !0 });
            if (s.status === 200 && s.data?.success === G.R) {
              const e = { rgCategories: [], bHasUnpublishedChanges: !1 };
              return (
                s.data.in_progress
                  ? ((e.rgCategories = _(
                      JSON.parse(s.data.in_progress).categories,
                    )),
                    (e.bHasUnpublishedChanges = !0))
                  : s.data.active &&
                    (e.rgCategories = _(JSON.parse(s.data.active).categories)),
                e
              );
            }
            c = (0, T.H)(s);
          } catch (s) {
            c = (0, T.H)(s);
          }
          return (
            console.error("GetCategoriesKV failed: " + c.strErrorMsg, c),
            { rgCategories: [] }
          );
        }
        function _(y) {
          const h = [];
          for (const c of Object.keys(y)) {
            const s = y[c],
              e = {
                handle: s.handle,
                type: s.type,
                loc_token: s.loc_token,
                description_loc_token: s.description_loc_token,
                heading: s.heading,
                id: s.id || void 0,
                exclude_from_search: !!s.exclude_from_search,
                search_alias: s.search_alias,
              },
              {
                must: t,
                any: n,
                mustnot: l,
                replaces_tags: p,
                content_descriptors: o,
              } = s;
            t &&
              (Array.isArray(t)
                ? (e.must = t.map((a) => ({ id: Number(a) })))
                : (e.must = [{ id: Number(t) }])),
              n &&
                (Array.isArray(n)
                  ? (e.any = n.map((a) => ({ id: Number(a) })))
                  : (e.any = [{ id: Number(n) }])),
              l &&
                (Array.isArray(l)
                  ? (e.mustnot = l.map((a) => ({ id: Number(a) })))
                  : (e.mustnot = [{ id: Number(l) }])),
              p &&
                (Array.isArray(p)
                  ? (e.replaces_tags = p.map((a) => ({ id: Number(a) })))
                  : (e.replaces_tags = [{ id: Number(p) }])),
              o &&
                typeof o == "string" &&
                (e.content_descriptors = o.split(",").map((a) => parseInt(a))),
              h.push(e);
          }
          return h;
        }
        function j() {
          const [y, h] = (0, f.useState)(null);
          return (
            (0, f.useEffect)(() => {
              b().then((c) => {
                h(c.rgCategories);
              });
            }, []),
            y
          );
        }
        async function C(y) {
          const h = {};
          for (const t of y)
            (h[t.handle] = {
              handle: t.handle,
              type: t.type,
              loc_token: t.loc_token,
              description_loc_token: t.description_loc_token,
              must: t.must?.map((n) => n.id) || void 0,
              any: t.any?.map((n) => n.id) || void 0,
              mustnot: t.mustnot?.map((n) => n.id) || void 0,
              replaces_tags: t.replaces_tags?.map((n) => n.id) || void 0,
              heading: t.heading || void 0,
              id: t.id,
              exclude_from_search: t.exclude_from_search,
              search_alias: t.search_alias,
              content_descriptors: t.content_descriptors?.length
                ? t.content_descriptors.join(",")
                : void 0,
            }),
              h[t.handle].must?.length === 1 &&
                (h[t.handle].must = h[t.handle].must[0]),
              h[t.handle].mustnot?.length === 1 &&
                (h[t.handle].mustnot = h[t.handle].mustnot[0]),
              h[t.handle].replaces_tags?.length === 1 &&
                (h[t.handle].replaces_tags = h[t.handle].replaces_tags[0]);
          const c =
              P.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
            s = new FormData();
          s.append("sessionid", (0, P.KC)()),
            s.append("origin", self.origin),
            s.append("json", JSON.stringify(h));
          let e = null;
          try {
            const t = await M().post(c, s, { withCredentials: !0 });
            if (t.status === 200 && t.data?.success === G.R)
              return D.Get().ClearDirty(), null;
            e = (0, T.H)(t);
          } catch (t) {
            e = (0, T.H)(t);
          }
          return (
            console.error("SaveCategoriesKV failed: " + e.strErrorMsg, e), e
          );
        }
        async function K() {
          const y =
              P.TS.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
            h = { origin: self.origin, sessionid: (0, P.KC)() };
          let c = null;
          try {
            const s = await M().get(y, { params: h, withCredentials: !0 });
            if (s.status !== 200 || s.data?.success !== G.R) return (0, T.H)(s);
          } catch (s) {
            return (0, T.H)(s);
          }
          return null;
        }
        const R = class W {
          constructor() {
            (0, x.Gn)(this);
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
            const h =
                P.TS.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetstoretagsandcategories",
              c = {
                origin: self.origin,
                sessionid: (0, P.KC)(),
                l: P.TS.LANGUAGE,
              };
            let s = null;
            try {
              const e = await M().get(h, { params: c });
              if (e.status === 200 && e.data?.success === G.R) {
                (this.m_rgTags = e.data.tags),
                  (this.m_rgCategories = e.data.categories),
                  (this.m_mapStoreTags = new Map()),
                  this.m_rgTags.forEach((t) =>
                    this.m_mapStoreTags.set(t.tagid, t),
                  ),
                  (this.m_mapStoreCategories = new Map()),
                  this.m_rgCategories.forEach((t) =>
                    this.m_mapStoreCategories.set(t.categoryid, t),
                  );
                return;
              }
              (this.m_promise = null), (s = (0, T.H)(e));
            } catch (e) {
              (this.m_promise = null), (s = (0, T.H)(e));
            }
            console.error(
              "CStoreTagsAndCategoriesStore.Load failed: " + s.strErrorMsg,
              s,
            );
          }
          static Get() {
            return W.s_singleton || (W.s_singleton = new W()), W.s_singleton;
          }
        };
        A([x.sH], R.prototype, "m_bDirty", 2),
          A([v.o], R.prototype, "SetDirty", 1);
        let D = R;
        function F() {
          return useObserver(() => D.Get().BIsDirty());
        }
        function B() {
          return { fnSetDirty: D.Get().SetDirty };
        }
        function U() {
          return D.Get().BIsDirty();
        }
        function w() {
          const [y, h] = f.useState(D.Get().GetTags()),
            [c, s] = f.useState(D.Get().GetCategories());
          return (
            f.useEffect(() => {
              (y === void 0 || c === void 0) &&
                D.Get()
                  .HintLoad()
                  .then(() => {
                    h(D.Get().GetTags()), s(D.Get().GetCategories());
                  });
            }, [c, y]),
            { rgTags: y, rgCategories: c }
          );
        }
        function N() {
          const [y, h] = f.useState(D.Get().GetStoreTagMap()),
            [c, s] = f.useState(D.Get().GetStoreCategoryMap());
          return (
            f.useEffect(() => {
              (y === void 0 || c === void 0) &&
                D.Get()
                  .HintLoad()
                  .then(() => {
                    h(D.Get().GetStoreTagMap()),
                      s(D.Get().GetStoreCategoryMap());
                  });
            }, [c, y]),
            { mapStoreTags: y, mapStoreCategories: c }
          );
        }
      },
      31553: (I, H, u) => {
        "use strict";
        u.d(H, {
          AY: () => c,
          CU: () => K,
          Iw: () => y,
          Th: () => N,
          _E: () => _,
          eX: () => U,
          hl: () => h,
          mg: () => w,
          p$: () => B,
          tt: () => b,
        });
        var r = u(41735),
          M = u.n(r),
          f = u(1077),
          G = u(14947),
          T = u(90626),
          P = u(20194),
          x = u(8323),
          v = u(54963),
          O = u(98609),
          d = u(3166),
          A = Object.defineProperty,
          g = Object.getOwnPropertyDescriptor,
          E = (s, e, t, n) => {
            for (
              var l = n > 1 ? void 0 : n ? g(e, t) : e, p = s.length - 1, o;
              p >= 0;
              p--
            )
              (o = s[p]) && (l = (n ? o(e, t, l) : o(l)) || l);
            return n && l && A(e, t, l), l;
          };
        const b = 120,
          _ = 10,
          j = class k {
            m_appAndPackagesSummuries = new f.Q(b);
            m_mapContentHubSummary = new Map();
            m_mapContentHubToAppCount = new Map();
            m_mapContentHubSummaryPromises = new Map();
            m_mapContentHubSummaryChange = new Map();
            m_mapContentHubTopAppSaleSummaryChange = new Map();
            m_mapContentHubTopAppSaleSummary = new Map();
            m_rgSummaries = null;
            m_summaryAnalysisChange = new x.lu();
            m_loadSummaryCache;
            GetSummaryAnalysis() {
              return this.m_rgSummaries;
            }
            GetSummaryAnalysisChange() {
              return this.m_summaryAnalysisChange;
            }
            GetKey(e) {
              return "" + e.type + "_" + e.handle;
            }
            GetContentHubTopAppSaleSummaryChangeCallback(e) {
              const t = this.GetKey(e);
              return (
                this.m_mapContentHubTopAppSaleSummaryChange.has(t) ||
                  this.m_mapContentHubTopAppSaleSummaryChange.set(
                    t,
                    new x.lu(),
                  ),
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
                  this.m_mapContentHubSummaryChange.set(t, new x.lu()),
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
              const n = this.GetKey(e);
              return (
                this.m_mapContentHubSummaryPromises.has(n) ||
                  this.m_mapContentHubSummaryPromises.set(
                    n,
                    this.InternalLoadContentHubSaleSummary(e, t),
                  ),
                this.m_mapContentHubSummaryPromises.get(n)
              );
            }
            async InternalLoadContentHubSaleSummary(e, t) {
              const n = this.GetKey(e);
              await this.m_appAndPackagesSummuries.LoadApps(t);
              const l = {
                  gross_sales_usd: 0,
                  gross_units_sold: 0,
                  net_sales_usd: 0,
                  net_units_sold: 0,
                },
                p = new Array();
              t.forEach((a) => {
                const m = this.m_appAndPackagesSummuries.GetAppSaleSummary(a);
                m &&
                  ((l.gross_sales_usd += m.gross_sales_usd),
                  (l.gross_units_sold += m.gross_units_sold),
                  (l.net_sales_usd += m.net_sales_usd),
                  (l.net_units_sold += m.net_units_sold)),
                  p.push(m);
              }),
                p.sort((a, m) => m.gross_sales_usd - a.gross_sales_usd);
              const o = {
                gross_sales_usd: 0,
                gross_units_sold: 0,
                net_sales_usd: 0,
                net_units_sold: 0,
              };
              return (
                p.slice(0, _).forEach((a) => {
                  (o.gross_sales_usd += a.gross_sales_usd),
                    (o.gross_units_sold += a.gross_units_sold),
                    (o.net_sales_usd += a.net_sales_usd),
                    (o.net_units_sold += a.net_units_sold);
                }),
                this.m_mapContentHubTopAppSaleSummary.set(n, o),
                this.m_mapContentHubSummary.set(n, l),
                this.m_mapContentHubToAppCount.set(n, p.length),
                this.GetContentHubTopAppSaleSummaryChangeCallback(e).Dispatch(
                  o,
                ),
                this.GetContentHubSummaryChangeCallback(e).Dispatch(l),
                (this.m_rgSummaries = [
                  ...(this.m_rgSummaries ?? []),
                  this.BuildAnalysis(e),
                ]),
                this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
                this.SaveToCacheSaleSummary(e, l, o, p.slice(0, _), p.length),
                l
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
                t = `${O.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
                n = await M().get(t, { params: e });
              if (n.status == 200 && n.data?.cache?.length > 0) {
                const l = new Array();
                n.data.cache.forEach((p) => {
                  const o = JSON.parse(p),
                    a = { handle: o.handle, type: o.type },
                    m = this.GetKey(a);
                  this.m_mapContentHubTopAppSaleSummary.set(m, o.topAppSummary),
                    this.m_mapContentHubSummary.set(m, o.hubSummary),
                    this.m_mapContentHubToAppCount.set(m, o.appCount),
                    o.topApps.forEach((i) =>
                      this.m_appAndPackagesSummuries.SetAppSaleSummary(i),
                    ),
                    this.m_mapContentHubSummaryChange.has(m) &&
                      this.m_mapContentHubSummaryChange
                        .get(m)
                        .Dispatch(o.hubSummary),
                    this.m_mapContentHubTopAppSaleSummaryChange.has(m) &&
                      this.m_mapContentHubTopAppSaleSummaryChange
                        .get(m)
                        .Dispatch(o.topAppSummary),
                    l.push(this.BuildAnalysis(a));
                }),
                  (this.m_rgSummaries = l),
                  this.m_summaryAnalysisChange.Dispatch(l);
              }
              return null;
            }
            BuildAnalysis(e) {
              const t = this.GetKey(e),
                n = this.m_mapContentHubSummary.get(t),
                l = this.m_mapContentHubTopAppSaleSummary.get(t),
                p = this.m_mapContentHubToAppCount.get(t);
              return {
                handle: e.handle,
                total_games: p,
                hub_gross_units_sold: n.gross_units_sold,
                hub_gross_sales_usd: Math.floor(n.gross_sales_usd / 100),
                hub_units_per_day: Math.floor(n.gross_units_sold / b),
                hub_sales_usd_per_day: Math.floor(
                  n.gross_sales_usd / (100 * b),
                ),
                top_apps_percent:
                  n.gross_sales_usd > 0
                    ? ((l.gross_sales_usd / n.gross_sales_usd) * 100).toFixed(2)
                    : "NA",
              };
            }
            async SaveToCacheSaleSummary(e, t, n, l, p) {
              if (e.type === "category_editor") return;
              const o = {
                  type: e.type,
                  handle: e.handle,
                  topAppSummary: n,
                  hubSummary: t,
                  topApps: l,
                  appCount: p,
                },
                a = new FormData();
              a.append("sessionid", (0, d.KC)()),
                a.append(
                  "rtStartTime",
                  "" + this.m_appAndPackagesSummuries.GetRTStartTime(),
                ),
                a.append(
                  "rtEndTime",
                  "" + this.m_appAndPackagesSummuries.GetRTEndTime(),
                ),
                a.append("bClear", "false"),
                a.append("key", this.GetKey(e)),
                a.append("rgStats", JSON.stringify(o));
              const m = `${O.TS.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
                i = await M().post(m, a, { withCredentials: !0 });
              i.status != 200 &&
                console.error(
                  "SaveToCacheSaleSummary failed to save " + G.HP,
                  i,
                );
            }
            static s_Singleton;
            static Get() {
              return k.s_Singleton || (k.s_Singleton = new k()), k.s_Singleton;
            }
          };
        E([v.oI], j.prototype, "LoadCachedSaleSummaries", 1);
        let C = j;
        function K(s) {
          const {
            data: e,
            isLoading: t,
            isError: n,
          } = (0, P.I)({
            queryKey: ["contenthubsummary", s.type, s.handle],
            queryFn: async () => {
              const l = {
                  contenthubcategorytype: s.type,
                  handle: s.handle,
                  sessionid: (0, d.KC)(),
                },
                p = `${O.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
                o = await M().get(p, { params: l });
              return o.status == 200 && o.data?.top_apps?.length > 0
                ? o.data
                : null;
            },
          });
          return {
            rgTopApps: t || n || !e ? null : e?.top_apps,
            nTotalGames: t || n || !e ? null : e?.total_games,
            isError: n,
          };
        }
        function R(s) {
          const {
            data: e,
            isLoading: t,
            isError: n,
          } = (0, P.I)({
            queryKey: ["contenthubapplist", s.type, s.handle],
            queryFn: async () => {
              const l = {
                  contenthubcategorytype: s.type,
                  handle: s.handle,
                  sessionid: (0, d.KC)(),
                },
                p = `${O.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
                o = await M().get(p, { params: l });
              return o.status == 200 && o.data?.apps?.length > 0
                ? o.data
                : null;
            },
          });
          return e?.apps || null;
        }
        function D(s, e, t) {
          return {
            musthaveall: (s || [])
              .filter(Boolean)
              .map((n) => n.id)
              .sort()
              .join(","),
            musthaveany: (e || [])
              .filter(Boolean)
              .map((n) => n.id)
              .sort()
              .join(","),
            mustnothaveany: (t || [])
              .filter(Boolean)
              .map((n) => n.id)
              .sort()
              .join(","),
          };
        }
        const F = { total_games: 0, all_appid: [], top_games: [] };
        function B(s, e, t) {
          const {
              musthaveall: n,
              musthaveany: l,
              mustnothaveany: p,
            } = D(s, e, t),
            {
              data: o,
              isLoading: a,
              isError: m,
            } = (0, P.I)({
              queryKey: ["useContentHubCategoryEditorFullAppList", n, l, p],
              queryFn: async () => {
                const i = {
                    musthaveall: n,
                    musthaveany: l,
                    mustnothaveany: p,
                    sessionid: (0, d.KC)(),
                  },
                  S = `${O.TS.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
                  L = await M().get(S, { params: i });
                return L.status == 200 && L.data?.top_games?.length > 0
                  ? L.data
                  : null;
              },
              enabled: n.length != 0 || l.length != 0 || p.length != 0,
            });
          return n.length == 0 && l.length == 0 && p.length == 0
            ? F
            : o || null;
        }
        function U(s, e, t) {
          const n = B(s, e, t),
            l = (0, T.useMemo)(() => {
              const {
                musthaveall: a,
                musthaveany: m,
                mustnothaveany: i,
              } = D(s, e, t);
              return { type: "category_editor", handle: a + "_" + m + "_" + i };
            }, [s, e, t]),
            [p, o] = (0, T.useState)(C.Get().GetContentHubSaleSummary(l));
          return (
            (0, T.useEffect)(() => {
              n?.all_appid?.length &&
                !p &&
                C.Get().LoadContentHubSaleSummary(l, n.all_appid);
            }, [l, n, p]),
            (0, v.hL)(C.Get().GetContentHubSummaryChangeCallback(l), o),
            p
          );
        }
        function w(s, e, t) {
          const n = (0, T.useMemo)(() => {
              const {
                musthaveall: o,
                musthaveany: a,
                mustnothaveany: m,
              } = D(s, e, t);
              return { type: "category_editor", handle: o + "_" + a + "_" + m };
            }, [s, e, t]),
            [l, p] = (0, T.useState)(C.Get().GetTopAppSummary(n));
          return (
            (0, v.hL)(
              C.Get().GetContentHubTopAppSaleSummaryChangeCallback(n),
              p,
            ),
            l
          );
        }
        function N(s) {
          const e = R(s),
            [t, n] = (0, T.useState)(C.Get().GetContentHubSaleSummary(s));
          return (
            (0, T.useEffect)(() => {
              e?.length && !t && C.Get().LoadContentHubSaleSummary(s, e);
            }, [s, s.type, s.handle, e, t]),
            (0, v.hL)(C.Get().GetContentHubSummaryChangeCallback(s), n),
            t
          );
        }
        function y(s) {
          const [e, t] = (0, T.useState)(
            C.Get().GetAppSummaryObject().GetAppSaleSummary(s),
          );
          return (
            (0, v.hL)(
              C.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(s),
              t,
            ),
            e
          );
        }
        function h(s) {
          const [e, t] = (0, T.useState)(C.Get().GetTopAppSummary(s));
          return (
            (0, v.hL)(
              C.Get().GetContentHubTopAppSaleSummaryChangeCallback(s),
              t,
            ),
            e
          );
        }
        function c() {
          const [s, e] = (0, T.useState)(C.Get().GetSummaryAnalysis());
          return (
            (0, T.useEffect)(() => {
              C.Get().LoadCachedSaleSummaries();
            }, []),
            (0, v.hL)(C.Get().GetSummaryAnalysisChange(), e),
            s
          );
        }
      },
      39077: (I, H, u) => {
        "use strict";
        u.d(H, {
          KU: () => y,
          Ke: () => w,
          W7: () => c,
          hp: () => B,
          iT: () => U,
          ny: () => n,
        });
        var r = u(7850),
          M = u(85873),
          f = u(31553),
          G = u(40323),
          T = u.n(G),
          P = u(90626),
          x = u(58534),
          v = u(24237),
          O = u(90405),
          d = u(85599),
          A = u(36707),
          g = u(18210),
          E = u(19730),
          b = u(98609),
          _ = u(92237),
          j = u.n(_),
          C = u(29522),
          K = u(40358),
          R = u(47875),
          D = u(21721);
        const F = "0px 0px 100% 0px",
          B = 5e3,
          U = 500;
        function w(o) {
          const [a, m] = (0, P.useState)(!0),
            i = (0, M.lY)(),
            S = (0, P.useMemo)(
              () => (i?.length > 0 ? i.filter((L) => !!L.type) : null),
              [i],
            );
          return !S || S.length == 0
            ? (0, r.jsx)(d.t, { string: (0, g.we)("#Loading") })
            : (0, r.jsxs)("div", {
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsxs)("div", {
                        className: _.DashTitleBar,
                        children: [
                          (0, r.jsx)("h1", {
                            children: "Theme Sale Planning Dashboard",
                          }),
                          (0, r.jsxs)("div", {
                            className: _.ButtonGroup,
                            children: [
                              !a &&
                                (0, r.jsxs)(x.$n, {
                                  onClick: () => m(!0),
                                  children: [
                                    "Load ",
                                    f.tt,
                                    " Days of Sale Summaries",
                                  ],
                                }),
                              (0, r.jsx)(p, {}),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: _.DashDescription,
                        children: (0, r.jsxs)("ul", {
                          children: [
                            (0, r.jsxs)("li", {
                              children: [
                                "Themes are currently make from all of the categories that are defined on this",
                                " ",
                                (0, r.jsx)("a", {
                                  href: `${b.TS.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                                  children: "categories editor page.",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("li", {
                              children: [
                                "Hubs with more than ",
                                B,
                                " games are called out as 'too big'.",
                              ],
                            }),
                            (0, r.jsx)("li", {
                              children:
                                "Sales rank shown for individual games is long-term and includes all sources of revenue.",
                            }),
                            (0, r.jsx)("li", {
                              children:
                                "Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) ",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  S.map((L, z) =>
                    (0, r.jsx)(N, { category: L, bSaleSummary: a }, z),
                  ),
                ],
              });
        }
        function N(o) {
          const { category: a, bSaleSummary: m } = o;
          return (0, r.jsx)(O.K, {
            placeholderHeight: 250,
            rootMargin: F,
            children: (0, r.jsx)(h, { category: a, bSaleSummary: m }),
          });
        }
        function y(o) {
          const { nTotalGames: a } = o;
          let m, i;
          return (
            a > U && a <= B
              ? ((m = _.SizeColorSweet), (i = "Good size!"))
              : a > B
                ? ((m = _.SizeColorBig), (i = "Too big"))
                : ((m = _.SizeColorSmall), (i = "Too small")),
            (0, r.jsxs)("div", {
              className: (0, A.A)(_.ThemeSize, m),
              children: [(0, E.Dq)(a), " games ( ", i, ")"],
            })
          );
        }
        function h(o) {
          const { category: a, bSaleSummary: m } = o,
            { rgTopApps: i, nTotalGames: S } = (0, f.CU)(a),
            L = S > 500 && S <= B;
          return (0, r.jsxs)("div", {
            className: _.ThemeRow,
            children: [
              (0, r.jsxs)("div", {
                className: _.ThemeDefinitionCtn,
                children: [
                  (0, r.jsx)("a", {
                    href: `${b.TS.STORE_BASE_URL}category/${a.handle}`,
                    className: _.ThemeTitle,
                    children: a.loc_token ? (0, g.we)(a.loc_token) : a.handle,
                  }),
                  (0, r.jsx)(y, { nTotalGames: S }),
                  (0, r.jsx)("div", {
                    className: _.SaleStats,
                    children: !!(m && L) && (0, r.jsx)(l, { category: a }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: _.TopGamesCtn,
                children: [
                  (0, r.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                  (0, r.jsx)("div", {
                    className: _.GamesRow,
                    children: i
                      ?.slice(0, 10)
                      .map((z) =>
                        (0, r.jsx)(
                          c,
                          { info: z, category: a, bSaleSummary: m && L },
                          z.appid,
                        ),
                      ),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: _.ThemeDetails,
                children: [
                  "handle: ",
                  a.handle,
                  (0, r.jsx)(e, { category: a }),
                ],
              }),
            ],
          });
        }
        function c(o) {
          const { info: a, bSaleSummary: m } = o,
            i = (0, C.$5)(a.appid),
            { data: S } = (0, K.lv)(i),
            { data: L } = (0, K.J$)(i);
          return L && S
            ? (0, r.jsxs)("div", {
                className: _.GameItem,
                children: [
                  (0, r.jsx)(v.Q, {
                    id: i,
                    hoverProps: {
                      direction: "overlay",
                      style: { minWidth: "320px", maxWidth: "320px" },
                    },
                    className: _.GameImage,
                    children: (0, r.jsx)("a", {
                      href: (0, R._)(L),
                      children: (0, r.jsx)("img", {
                        src: (0, D.b0)(S, "header"),
                        alt: L.name,
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    children: ["\xA0Rank: ", a.long_term_sale_rank],
                  }),
                  !!m && (0, r.jsx)(s, { ...o }),
                ],
              })
            : (0, r.jsxs)("div", {
                children: [
                  "Loading appid: ",
                  a.appid,
                  " with rank: ",
                  a.long_term_sale_rank,
                ],
              });
        }
        function s(o) {
          const { info: a, category: m } = o,
            i = (0, f.Iw)(a.appid),
            S = (0, f.Th)(m);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !!i &&
                (0, r.jsxs)("div", {
                  children: [
                    " ",
                    "$",
                    (0, E.Dq)(Math.floor(i.gross_sales_usd / 100)),
                  ],
                }),
              !!(i && S?.gross_sales_usd) &&
                (0, r.jsxs)("div", {
                  children: [
                    "( ",
                    ((i.gross_sales_usd / S.gross_sales_usd) * 100).toFixed(2),
                    "% of hub )",
                  ],
                }),
            ],
          });
        }
        function e(o) {
          const { mapStoreTags: a, mapStoreCategories: m } = (0, M.k)(),
            { category: i } = o;
          return !a || !m || (!i.any && !i.must && !i.mustnot)
            ? null
            : (0, r.jsxs)("div", {
                className: _.ThemeTags,
                children: [
                  !!i.must &&
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("span", {
                          className: _.TagsMustTitle,
                          children: "Must:",
                        }),
                        " ",
                        i.must?.map((S) =>
                          (0, r.jsx)(
                            t,
                            { type: i.type, id: S.id },
                            i.type + "_" + S.id + "_" + i.handle,
                          ),
                        ),
                      ],
                    }),
                  !!i.any &&
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("span", {
                          className: _.TagsOrTitle,
                          children: "Any:",
                        }),
                        " ",
                        i.any?.map((S) =>
                          (0, r.jsx)(
                            t,
                            { type: i.type, id: S.id },
                            i.type + "_" + S.id + "_" + i.handle,
                          ),
                        ),
                      ],
                    }),
                  !!i.mustnot &&
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("span", {
                          className: _.TagsNotTitle,
                          children: "Must Not:",
                        }),
                        " ",
                        i.mustnot?.map((S) =>
                          (0, r.jsx)(
                            t,
                            { type: i.type, id: S.id },
                            i.type + "_" + S.id + "_" + i.handle,
                          ),
                        ),
                      ],
                    }),
                ],
              });
        }
        function t(o) {
          const { mapStoreTags: a, mapStoreCategories: m } = (0, M.k)(),
            { type: i, id: S } = o;
          return i == "tagids"
            ? (0, r.jsxs)("span", {
                children: [a.has(S) ? a.get(S).name : "tagid: " + S, ", "],
              })
            : (0, r.jsxs)("span", {
                children: [
                  m.has(S) ? m.get(S).name : "category id: " + S,
                  ", ",
                ],
              });
        }
        function n(o) {
          const { saleSummary: a, topAppSummary: m } = o;
          return a
            ? (0, r.jsx)("div", {
                className: _.ThemeRevenueCtn,
                children: (0, r.jsx)("table", {
                  children: (0, r.jsx)("tbody", {
                    children: (0, r.jsxs)("tr", {
                      children: [
                        (0, r.jsxs)("td", {
                          children: [
                            "Total: ",
                            (0, r.jsx)("br", {}),
                            "$",
                            (0, E.Dq)(Math.floor(a.gross_sales_usd / 100)),
                          ],
                        }),
                        (0, r.jsxs)("td", {
                          children: [
                            "Per Day: ",
                            (0, r.jsx)("br", {}),
                            "$",
                            (0, E.Dq)(
                              Math.floor(a.gross_sales_usd / (100 * f.tt)),
                            ),
                          ],
                        }),
                        (0, r.jsxs)("td", {
                          children: [
                            "Total Units: ",
                            (0, r.jsx)("br", {}),
                            (0, E.Dq)(a.gross_units_sold),
                          ],
                        }),
                        (0, r.jsxs)("td", {
                          children: [
                            "Units Per Day: ",
                            (0, r.jsx)("br", {}),
                            (0, E.Dq)(Math.floor(a.gross_units_sold / f.tt)),
                          ],
                        }),
                        a.gross_sales_usd > 0 &&
                          (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("td", {
                              children: [
                                "Top ",
                                f._E,
                                " Apps: ",
                                (0, r.jsx)("br", {}),
                                (0, r.jsxs)("span", {
                                  className:
                                    (m.gross_sales_usd / a.gross_sales_usd) *
                                      100 >
                                    90
                                      ? _.SizeColorBig
                                      : _.SizeColorSweet,
                                  children: [
                                    (
                                      (m.gross_sales_usd / a.gross_sales_usd) *
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
            : (0, r.jsx)(d.t, {
                position: "center",
                string: "Loading Sale Info",
              });
        }
        function l(o) {
          const { category: a } = o,
            m = (0, f.Th)(a),
            i = (0, f.hl)(a);
          return (0, r.jsx)(n, { saleSummary: m, topAppSummary: i });
        }
        function p(o) {
          const a = (0, f.AY)();
          return (0, r.jsx)("a", {
            href: `data:application/octet-stream,${encodeURIComponent(T().unparse({ data: a, fields: Object.keys(a ? a[0] : {}) }))}`,
            download: "theme_sale_stats.csv",
            children: "Export CSV",
          });
        }
      },
      92237: (I) => {
        I.exports = {
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
    },
  ]);
})();
