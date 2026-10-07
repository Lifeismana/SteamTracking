/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [10034],
    {
      84192: (A, B, g) => {
        g.d(B, { Bn: () => D, hS: () => T, rV: () => w });
        var S = g(3367),
          l = g(3166),
          y = g(59422);
        function w(s, R) {
          s.Body().set_context(T(R));
        }
        function T(s) {
          let R = new S.TS();
          return (
            s || R.set_country_code(l.TS.COUNTRY),
            R.set_language(l.TS.LANGUAGE),
            R
          );
        }
        function D(s, R) {
          s.Body().set_data_request(S.gn.fromObject(R));
        }
        function M(s, R) {
          s.Body().set_filters(CStoreQueryFilters.fromObject(R));
        }
      },
      10142: (A, B, g) => {
        g.d(B, { A: () => Q });
        var S = g(14947),
          l = g(72604),
          y = g(99412),
          w = g(35038),
          T = g(13018),
          D = g(60298),
          M = g(37400),
          s = g(3367),
          R = g(71742),
          H = g(34592),
          U = g(3166),
          E = g(84192),
          k = g(14874),
          F = g(27066),
          G = g(77291),
          L = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          x = (h, e, t, a) => {
            for (
              var i = a > 1 ? void 0 : a ? j(e, t) : e, r = h.length - 1, d;
              r >= 0;
              r--
            )
              (d = h[r]) && (i = (a ? d(e, t, i) : d(i)) || i);
            return a && i && L(e, t, i), i;
          };
        function P(h, e) {
          if (h) {
            if (!e) return h;
          } else return e;
          return {
            include_assets: h.include_assets || e.include_assets,
            include_release: h.include_release || e.include_release,
            include_platforms: h.include_platforms || e.include_platforms,
            include_all_purchase_options:
              h.include_all_purchase_options || e.include_all_purchase_options,
            include_screenshots: h.include_screenshots || e.include_screenshots,
            include_trailers: h.include_trailers || e.include_trailers,
            include_ratings: h.include_ratings || e.include_ratings,
            include_tag_count:
              Math.max(h.include_tag_count || 0, e.include_tag_count || 0) ||
              void 0,
            include_reviews: h.include_reviews || e.include_reviews,
            include_basic_info: h.include_basic_info || e.include_basic_info,
            include_supported_languages:
              h.include_supported_languages || e.include_supported_languages,
            include_full_description:
              h.include_full_description || e.include_full_description,
            include_included_items:
              h.include_included_items || e.include_included_items,
            include_assets_without_overrides:
              h.include_assets_without_overrides ||
              e.include_assets_without_overrides,
            apply_user_filters: h.apply_user_filters || e.apply_user_filters,
            include_links: h.include_links || e.include_links,
            include_extra_details:
              h.include_extra_details || e.include_extra_details,
            include_optin_registration_tags:
              h.include_optin_registration_tags ||
              e.include_optin_registration_tags,
          };
        }
        async function C(h, e) {
          const t = await h,
            a = await e;
          return t != l.R ? t : a;
        }
        const O = class v {
          k_QueueWaitUntilRequestMS = 5;
          k_nMaxBatchSize = 250;
          m_bReturnUnavailableItems = !1;
          m_mapApps = new Map();
          m_mapPackages = new Map();
          m_mapBundles = new Map();
          m_mapTags = new Map();
          m_mapCreators = new Map();
          m_mapHubCategories = new Map();
          m_setUnavailableApps = new Set();
          m_setUnavailablePackages = new Set();
          m_setUnavailableBundles = new Set();
          m_setUnavailableTags = new Set();
          m_setUnavailableCreators = new Set();
          m_setUnavailableHubCategories = new Set();
          m_setUnavailableDueToCountryRestrictionApps = new Set();
          m_setUnavailableDueToCountryRestrictionPackages = new Set();
          m_setUnavailableDueToCountryRestrictionBundles = new Set();
          m_mapAppsInFlight = new Map();
          m_mapPackageInFlight = new Map();
          m_mapBundleInFlight = new Map();
          m_mapTagsInFlight = new Map();
          m_mapCreatorsInFlight = new Map();
          m_mapHubCategoriesInFlight = new Map();
          m_serviceTransport;
          m_bUsePartnerAPI = !1;
          m_bInitialized = !1;
          m_bActivelyResettingCache = !1;
          m_setPendingAppInfo = new Set();
          m_setPendingBundleInfo = new Set();
          m_setPendingPackageInfo = new Set();
          m_setPendingTagInfo = new Set();
          m_setPendingCreatorInfo = new Set();
          m_setPendingHubCategoryInfo = new Set();
          m_setPendingDataRequest = {};
          m_PendingInfoPromise;
          m_PendingInfoResolve = void 0;
          m_PendingTimer = void 0;
          k_AlreadyResolvedOK = Promise.resolve(l.R);
          k_AlreadyResolvedInvalid = Promise.resolve(l.nO);
          k_AlreadyResolvedBusy = Promise.resolve(l.S7);
          static sm_instance;
          static Get() {
            return (
              v.sm_instance ||
                ((v.sm_instance = new v()),
                (0, G.V)("StoreItemCache", v.sm_instance)),
              v.sm_instance
            );
          }
          static Initialize(e, t) {
            const a = v.Get();
            return (
              (0, R.wT)(
                !a.m_bInitialized,
                "CStoreItemCache was already initialized; initialize it only once.",
              ),
              (a.m_serviceTransport = e),
              (a.m_bUsePartnerAPI = !!t),
              (a.m_bInitialized = !0),
              () => {
                (a.m_serviceTransport = void 0),
                  (a.m_bUsePartnerAPI = !1),
                  (a.m_bInitialized = !1);
              }
            );
          }
          SetSteamInterface(e) {
            this.SetServiceTransport(e.GetServiceTransport());
          }
          SetServiceTransport(e) {
            this.m_serviceTransport = e;
          }
          SetReturnUnavailableItems(e) {
            this.m_bReturnUnavailableItems = e;
          }
          GetReturnUnavailableItems() {
            return this.m_bReturnUnavailableItems;
          }
          async ResetCache() {
            (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
            let e = [];
            this.m_mapAppsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
              this.m_mapBundleInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapPackageInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapTagsInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapCreatorsInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapHubCategoriesInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              await Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              this.m_mapTagsInFlight.clear(),
              this.m_mapCreatorsInFlight.clear(),
              this.m_mapHubCategoriesInFlight.clear(),
              (this.m_bActivelyResettingCache = !1);
          }
          static BIsInitialized() {
            return v.Get().m_bInitialized;
          }
          static k_DataRequest_CommonOnly = {};
          static k_DataRequest_BasicInfo = { include_basic_info: !0 };
          static k_DataRequest_Assets = { include_assets: !0 };
          static k_DataRequest_IncludeAll = {
            include_assets: !0,
            include_release: !0,
            include_platforms: !0,
            include_all_purchase_options: !0,
            include_screenshots: !0,
            include_trailers: !0,
            include_ratings: !0,
            include_tag_count: 20,
            include_reviews: !0,
            include_basic_info: !0,
            include_supported_languages: !0,
            include_full_description: !0,
            include_links: !0,
          };
          async QueueAppRequest(e, t) {
            return this.QueueStoreItemRequest(e, s.c6.qI, t);
          }
          async QueuePackageRequest(e, t) {
            return this.QueueStoreItemRequest(e, s.c6.RD, t);
          }
          async QueueBundleRequest(e, t) {
            return this.QueueStoreItemRequest(e, s.c6.xO, t);
          }
          async QueueTagRequest(e, t) {
            return this.QueueStoreItemRequest(e, s.c6.je, t);
          }
          async QueueCreatorRequest(e, t) {
            return this.QueueStoreItemRequest(e, s.c6.tp, t);
          }
          async QueueHubCategoryRequest(e, t) {
            return this.QueueStoreItemRequest(e, s.c6.wn, t);
          }
          static ValidateDataRequest(e) {
            const t = [
              e.include_assets,
              e.include_release,
              e.include_platforms,
              e.include_all_purchase_options,
              e.include_screenshots,
              e.include_trailers,
              e.include_ratings,
              e.include_reviews,
              e.include_basic_info,
              e.include_supported_languages,
              e.include_full_description,
              e.include_links,
            ];
            for (const a of t) if (a !== !0 && a !== void 0) return !1;
            return !0;
          }
          async QueueMultipleAppRequests(e, t) {
            if (!e || e.length == 0) return l.R;
            const i = (
              await Promise.all(
                e.map((r) => this.QueueStoreItemRequest(r, s.c6.qI, t)),
              )
            ).filter((r) => r != l.R);
            return i.length > 0 ? i[0] : l.R;
          }
          async QueueMultiplePackageRequests(e, t) {
            if (!e || e.length == 0) return l.R;
            const i = (
              await Promise.all(
                e.map((r) => this.QueueStoreItemRequest(r, s.c6.RD, t)),
              )
            ).filter((r) => r != l.R);
            return i.length > 0 ? i[0] : l.R;
          }
          async QueueMultipleBundleRequests(e, t) {
            if (!e || e.length == 0) return l.R;
            const i = (
              await Promise.all(
                e.map((r) => this.QueueStoreItemRequest(r, s.c6.xO, t)),
              )
            ).filter((r) => r != l.R);
            return i.length > 0 ? i[0] : l.R;
          }
          async QueueMultipleTagRequests(e, t) {
            if (!e || e.length == 0) return l.R;
            const i = (
              await Promise.all(
                e.map((r) => this.QueueStoreItemRequest(r, s.c6.je, t)),
              )
            ).filter((r) => r != l.R);
            return i.length > 0 ? i[0] : l.R;
          }
          async QueueMultipleCreatorRequests(e, t) {
            if (!e || e.length == 0) return l.R;
            const i = (
              await Promise.all(
                e.map((r) => this.QueueStoreItemRequest(r, s.c6.tp, t)),
              )
            ).filter((r) => r != l.R);
            return i.length > 0 ? i[0] : l.R;
          }
          async QueueMultipleHubCategoryRequests(e, t) {
            if (!e || e.length == 0) return l.R;
            const i = (
              await Promise.all(
                e.map((r) => this.QueueStoreItemRequest(r, s.c6.wn, t)),
              )
            ).filter((r) => r != l.R);
            return i.length > 0 ? i[0] : l.R;
          }
          async QueueMultipleStoreItemRequests(e, t, a) {
            if (!e || e.length == 0) return l.R;
            const r = (
              await Promise.all(
                e.map((d, o) => this.QueueStoreItemRequest(d, t[o], a)),
              )
            ).filter((d) => d != l.R);
            return r.length > 0 ? r[0] : l.R;
          }
          async QueueStoreItemRequest(e, t, a) {
            if (
              ((0, R.wT)(
                v.ValidateDataRequest(a),
                "Invalid Data Request: " + JSON.stringify(a),
              ),
              typeof e == "string" && (e = parseInt(e)),
              this.m_bActivelyResettingCache)
            )
              return (
                console.log(
                  "Rejecting store item request due to currently clearing the cache",
                ),
                this.k_AlreadyResolvedBusy
              );
            if (!e)
              return (
                (0, R.wT)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${t}`,
                ),
                this.k_AlreadyResolvedInvalid
              );
            const i = this.GetPreviousSupersetLoadPromise(e, t, a);
            if (i) return i;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (d) => (this.m_PendingInfoResolve = d),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                ))),
              (this.m_setPendingDataRequest = P(
                this.m_setPendingDataRequest,
                a,
              )),
              t)
            ) {
              case s.c6.qI:
                this.m_setPendingAppInfo.add(e);
                break;
              case s.c6.xO:
                this.m_setPendingBundleInfo.add(e);
                break;
              case s.c6.RD:
                this.m_setPendingPackageInfo.add(e);
                break;
              case s.c6.je:
                this.m_setPendingTagInfo.add(e);
                break;
              case s.c6.tp:
                this.m_setPendingCreatorInfo.add(e);
                break;
              case s.c6.wn:
                this.m_setPendingHubCategoryInfo.add(e);
                break;
              default:
                (0, R.wT)(!1, `Unexpected Type ${t}`);
            }
            const r = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              r
            );
          }
          async FlushPendingInfo() {
            if (typeof this.m_PendingInfoResolve > "u") return;
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              a = Array.from(this.m_setPendingPackageInfo),
              i = Array.from(this.m_setPendingBundleInfo),
              r = Array.from(this.m_setPendingTagInfo),
              d = Array.from(this.m_setPendingCreatorInfo),
              o = Array.from(this.m_setPendingHubCategoryInfo),
              I = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              this.m_setPendingTagInfo.clear(),
              this.m_setPendingCreatorInfo.clear(),
              this.m_setPendingHubCategoryInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(t, a, i, r, d, o, I).then((m) => e(m));
          }
          async HintLoadStoreApps(e, t) {
            return this.HintLoadStoreItems(e, null, null, null, null, null, t);
          }
          async HintLoadStorePackages(e, t) {
            return this.HintLoadStoreItems(null, e, null, null, null, null, t);
          }
          async HintLoadStoreBundles(e, t) {
            return this.HintLoadStoreItems(null, null, e, null, null, null, t);
          }
          GetPreviousSupersetLoadPromise(e, t, a) {
            if (this.BHasStoreItem(e, t, a) || this.BIsStoreItemMissing(e, t))
              return this.k_AlreadyResolvedOK;
            let i = null;
            switch (t) {
              case s.c6.qI:
                i = this.m_mapAppsInFlight.get(e);
                break;
              case s.c6.RD:
                i = this.m_mapPackageInFlight.get(e);
                break;
              case s.c6.xO:
                i = this.m_mapBundleInFlight.get(e);
                break;
              case s.c6.je:
                i = this.m_mapTagsInFlight.get(e);
                break;
              case s.c6.tp:
                i = this.m_mapCreatorsInFlight.get(e);
                break;
              case s.c6.wn:
                i = this.m_mapHubCategoriesInFlight.get(e);
                break;
            }
            return i &&
              k.Ay.BDataRequestContainsOtherDataRequest(i.dataRequest, a)
              ? i.promise
              : null;
          }
          async HintLoadStoreItems(e, t, a, i, r, d, o) {
            let I = null;
            const m = new Promise((n) => (I = n));
            let c = [],
              f = [];
            (e || []).forEach((n) => {
              const p = this.GetPreviousSupersetLoadPromise(n, s.c6.qI, o);
              if (p) f.push(p);
              else {
                c.push(s.O4.fromObject({ appid: n }));
                let _ = P(this.GetStoreItemDataRequest(n, s.c6.qI), o);
                const u = this.m_mapAppsInFlight.get(n);
                (_ = P(u?.dataRequest, _)),
                  u && f.push(u.promise),
                  this.m_mapAppsInFlight.set(n, {
                    promise: u ? C(u.promise, m) : m,
                    dataRequest: _,
                  });
              }
            }),
              (t || []).forEach((n) => {
                const p = this.GetPreviousSupersetLoadPromise(n, s.c6.RD, o);
                if (p) f.push(p);
                else {
                  c.push(s.O4.fromObject({ packageid: n }));
                  let _ = P(this.GetStoreItemDataRequest(n, s.c6.RD), o);
                  const u = this.m_mapPackageInFlight.get(n);
                  (_ = P(u?.dataRequest, _)),
                    u && f.push(u.promise),
                    this.m_mapPackageInFlight.set(n, {
                      promise: u ? C(u.promise, m) : m,
                      dataRequest: _,
                    });
                }
              }),
              (a || []).forEach((n) => {
                const p = this.GetPreviousSupersetLoadPromise(n, s.c6.xO, o);
                if (p) f.push(p);
                else {
                  c.push(s.O4.fromObject({ bundleid: n }));
                  let _ = P(this.GetStoreItemDataRequest(n, s.c6.xO), o);
                  const u = this.m_mapBundleInFlight.get(n);
                  (_ = P(u?.dataRequest, _)),
                    u && f.push(u.promise),
                    this.m_mapBundleInFlight.set(n, {
                      promise: u ? C(u.promise, m) : m,
                      dataRequest: _,
                    });
                }
              }),
              (i || []).forEach((n) => {
                const p = this.GetPreviousSupersetLoadPromise(n, s.c6.je, o);
                if (p) f.push(p);
                else {
                  c.push(s.O4.fromObject({ tagid: n }));
                  let _ = P(this.GetStoreItemDataRequest(n, s.c6.je), o);
                  const u = this.m_mapTagsInFlight.get(n);
                  (_ = P(u?.dataRequest, _)),
                    u && f.push(u.promise),
                    this.m_mapTagsInFlight.set(n, {
                      promise: u ? C(u.promise, m) : m,
                      dataRequest: _,
                    });
                }
              }),
              (r || []).forEach((n) => {
                const p = this.GetPreviousSupersetLoadPromise(n, s.c6.tp, o);
                if (p) f.push(p);
                else {
                  c.push(s.O4.fromObject({ creatorid: n }));
                  let _ = P(this.GetStoreItemDataRequest(n, s.c6.tp), o);
                  const u = this.m_mapCreatorsInFlight.get(n);
                  (_ = P(u?.dataRequest, _)),
                    u && f.push(u.promise),
                    this.m_mapCreatorsInFlight.set(n, {
                      promise: u ? C(u.promise, m) : m,
                      dataRequest: _,
                    });
                }
              }),
              (d || []).forEach((n) => {
                const p = this.GetPreviousSupersetLoadPromise(n, s.c6.wn, o);
                if (p) f.push(p);
                else {
                  c.push(s.O4.fromObject({ hubcategoryid: n }));
                  let _ = P(this.GetStoreItemDataRequest(n, s.c6.wn), o);
                  const u = this.m_mapHubCategoriesInFlight.get(n);
                  (_ = P(u?.dataRequest, _)),
                    u && f.push(u.promise),
                    this.m_mapHubCategoriesInFlight.set(n, {
                      promise: u ? C(u.promise, m) : m,
                      dataRequest: _,
                    });
                }
              });
            let b = l.R;
            if (
              (c.length > 0 &&
                (b = await this.InternalHandleLoadStoreItems(c, o)),
              I(b),
              f.length > 0)
            ) {
              const n = await Promise.all(f);
              for (const p of n) p != l.R && b == l.R && (b = p);
            }
            return (
              (e || []).forEach((n) => this.m_mapAppsInFlight.delete(n)),
              (t || []).forEach((n) => this.m_mapPackageInFlight.delete(n)),
              (a || []).forEach((n) => this.m_mapBundleInFlight.delete(n)),
              (i || []).forEach((n) => this.m_mapTagsInFlight.delete(n)),
              (r || []).forEach((n) => this.m_mapCreatorsInFlight.delete(n)),
              (d || []).forEach((n) =>
                this.m_mapHubCategoriesInFlight.delete(n),
              ),
              b
            );
          }
          MarkStoreItemIDUnavailable(e) {
            (e || []).forEach((t) => {
              t.appid()
                ? (this.m_setUnavailableApps.add(t.appid()),
                  this.m_mapApps.delete(t.appid()))
                : t.packageid()
                  ? (this.m_setUnavailablePackages.add(t.packageid()),
                    this.m_mapPackages.delete(t.packageid()))
                  : t.bundleid()
                    ? (this.m_setUnavailableBundles.add(t.bundleid()),
                      this.m_mapBundles.delete(t.bundleid()))
                    : t.tagid()
                      ? (this.m_setUnavailableTags.add(t.tagid()),
                        this.m_mapTags.delete(t.tagid()))
                      : t.creatorid()
                        ? (this.m_setUnavailableCreators.add(t.creatorid()),
                          this.m_mapCreators.delete(t.creatorid()))
                        : t.hubcategoryid() &&
                          (this.m_setUnavailableHubCategories.add(
                            t.hubcategoryid(),
                          ),
                          this.m_mapHubCategories.delete(t.hubcategoryid()));
            });
          }
          SortStoreItems(e) {
            let t = e.slice();
            return (
              t.sort((a, i) => {
                let r = a.appid() ?? 0,
                  d = i.appid() ?? 0;
                if (r != d) return r - d;
                let o = a.packageid() ?? 0,
                  I = i.packageid() ?? 0;
                if (o != I) return o - I;
                let m = a.bundleid() ?? 0,
                  c = i.bundleid() ?? 0;
                if (m != c) return m - c;
                let f = a.tagid() ?? 0,
                  b = i.tagid() ?? 0;
                if (f != b) return f - b;
                let n = a.creatorid() ?? 0,
                  p = i.creatorid() ?? 0;
                if (n != p) return n - p;
                let _ = a.hubcategoryid() ?? 0,
                  u = i.hubcategoryid() ?? 0;
                return _ != u ? _ - u : 0;
              }),
              t
            );
          }
          GetServiceTransport() {
            return (
              this.m_serviceTransport ||
                (console.warn(
                  "Service transport not initialized for StoreItemCache",
                ),
                (this.m_serviceTransport = (0, D.p)(
                  new T.D(U.TS.WEBAPI_BASE_URL),
                ).GetAnonymousServiceTransport())),
              this.m_serviceTransport
            );
          }
          async InternalHandleLoadStoreItems(e, t) {
            let a = l.R;
            (e = this.SortStoreItems(e)),
              t.include_included_items &&
                (t = {
                  ...t,
                  included_item_data_request: {
                    ...t,
                    include_included_items: !1,
                  },
                });
            const i = new Array();
            try {
              const r = [];
              for (; e.length > 0; ) {
                const o = e.splice(0, this.k_nMaxBatchSize);
                if ((i.push(o), this.m_bUsePartnerAPI)) {
                  const I = w.w.Init(M.St);
                  I.Body().set_include_unpublished(!1);
                  const m = I.Body().getitems_request(!0);
                  m.set_context((0, E.hS)(this.m_bUsePartnerAPI)),
                    m.set_data_request(s.gn.fromObject(t)),
                    m.set_ids(o),
                    r.push(M.BT.GetItems(this.GetServiceTransport(), I));
                } else {
                  const I = w.w.Init(s.eE);
                  (0, E.rV)(I, this.m_bUsePartnerAPI),
                    (0, E.Bn)(I, t),
                    I.Body().set_ids(o),
                    r.push(s.$4.GetItems(this.GetServiceTransport(), I));
                }
              }
              (await Promise.all(r)).forEach((o, I) => {
                o.GetEResult() == l.R
                  ? o
                      .Body()
                      .store_items()
                      .forEach((m) => {
                        const c = m.id(),
                          f = m.item_type();
                        let b =
                            this.m_bReturnUnavailableItems &&
                            m.success() == l.sW,
                          n =
                            m.success() == l.R &&
                            !this.BIsStoreItemMissing(c, f);
                        if (b || n) this.ReadItem(m, t);
                        else {
                          switch (f) {
                            case s.c6.qI:
                              this.m_setUnavailableApps.add(c),
                                this.m_mapApps.delete(c);
                              break;
                            case s.c6.RD:
                              this.m_setUnavailablePackages.add(c),
                                this.m_mapPackages.delete(c);
                              break;
                            case s.c6.xO:
                              this.m_setUnavailableBundles.add(c),
                                this.m_mapBundles.delete(c);
                              break;
                            case s.c6.je:
                              this.m_setUnavailableTags.add(c),
                                this.m_mapTags.delete(c);
                              break;
                            case s.c6.tp:
                              this.m_setUnavailableCreators.add(c),
                                this.m_mapCreators.delete(c);
                              break;
                            case s.c6.wn:
                              this.m_setUnavailableHubCategories.add(c),
                                this.m_mapHubCategories.delete(c);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  f +
                                  " " +
                                  c,
                              );
                          }
                          if (m.unvailable_for_country_restriction())
                            switch (f) {
                              case s.c6.qI:
                                this.m_setUnavailableDueToCountryRestrictionApps.add(
                                  c,
                                );
                                break;
                              case s.c6.RD:
                                this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                  c,
                                );
                                break;
                              case s.c6.xO:
                                this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                  c,
                                );
                                break;
                              case s.c6.je:
                              case s.c6.tp:
                              case s.c6.wn:
                                console.error(
                                  "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                    o.GetEResult() +
                                    " message: " +
                                    o.Hdr().error_message(),
                                  (0, S.HO)(e),
                                );
                                break;
                            }
                        }
                      })
                  : (console.warn(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        o.GetEResult() +
                        " message: " +
                        o.Hdr().error_message(),
                      (0, S.HO)(e),
                    ),
                    (o.Hdr().transport_error() == y.sC || U.TS.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(i[I]),
                    a == l.R && (a = o.GetEResult()));
              });
            } catch (r) {
              const d = (0, H.H)(r);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    d.strErrorMsg,
                  d,
                ),
                i.forEach((o) => this.MarkStoreItemIDUnavailable(o)),
                l.eH
              );
            }
            return a;
          }
          GetMapForType(e) {
            let t;
            switch (e) {
              case s.c6.qI:
                t = this.m_mapApps;
                break;
              case s.c6.xO:
                t = this.m_mapBundles;
                break;
              case s.c6.RD:
                t = this.m_mapPackages;
                break;
              case s.c6.je:
                t = this.m_mapTags;
                break;
              case s.c6.tp:
                t = this.m_mapCreators;
                break;
              case s.c6.wn:
                t = this.m_mapHubCategories;
                break;
              default:
                console.error("Invalid map type requested", e);
            }
            return t;
          }
          BHasStoreItem(e, t, a) {
            let i = this.GetMapForType(t);
            return !!(i && i.has(e) && (!a || i.get(e).BContainDataRequest(a)));
          }
          GetStoreItem(e, t) {
            return t == s.c6.Ep || t == s.c6.Eb
              ? void 0
              : this.GetMapForType(t)?.get(e);
          }
          GetStoreItemWithLegacyVisibilityCheck(e, t) {
            const a = this.GetStoreItem(e, t);
            return a && (this.m_bReturnUnavailableItems || a.BIsVisible())
              ? a
              : void 0;
          }
          GetStoreItemDataRequest(e, t) {
            return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
          }
          BHasApp(e, t) {
            return this.BHasStoreItem(e, s.c6.qI, t);
          }
          GetApp(e) {
            return this.GetStoreItem(e, s.c6.qI);
          }
          BHasPackage(e, t) {
            return this.BHasStoreItem(e, s.c6.RD, t);
          }
          GetPackage(e) {
            return this.GetStoreItem(e, s.c6.RD);
          }
          BHasBundle(e, t) {
            return this.BHasStoreItem(e, s.c6.xO, t);
          }
          GetBundle(e) {
            return this.GetStoreItem(e, s.c6.xO);
          }
          BHasTag(e, t) {
            return this.BHasStoreItem(e, s.c6.je, t);
          }
          GetTag(e) {
            return this.GetStoreItem(e, s.c6.je);
          }
          BHasCreator(e, t) {
            return this.BHasStoreItem(e, s.c6.tp, t);
          }
          GetCreator(e) {
            return this.GetStoreItem(e, s.c6.tp);
          }
          BHasHubCategory(e, t) {
            return this.BHasStoreItem(e, s.c6.wn, t);
          }
          GetHubCategory(e) {
            return this.GetStoreItem(e, s.c6.wn);
          }
          BIsStoreItemMissing(e, t) {
            switch (t) {
              case s.c6.qI:
                return this.BIsAppMissing(e);
              case s.c6.RD:
                return this.BIsPackageMissing(e);
              case s.c6.xO:
                return this.BIsBundleMissing(e);
              case s.c6.je:
                return this.BIsTagMissing(e);
              case s.c6.tp:
                return this.BIsCreatorMissing(e);
              case s.c6.wn:
                return this.BIsHubCategoryMissing(e);
              default:
                return console.error("BStoreItemMissing invalid type", t), !0;
            }
          }
          BIsAppMissing(e) {
            return this.m_setUnavailableApps.has(e);
          }
          BIsPackageMissing(e) {
            return this.m_setUnavailablePackages.has(e);
          }
          BIsBundleMissing(e) {
            return this.m_setUnavailableBundles.has(e);
          }
          BIsTagMissing(e) {
            return this.m_setUnavailableTags.has(e);
          }
          BIsCreatorMissing(e) {
            return this.m_setUnavailableCreators.has(e);
          }
          BIsHubCategoryMissing(e) {
            return this.m_setUnavailableHubCategories.has(e);
          }
          BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
            switch (t) {
              case s.c6.qI:
                return this.BIsAppUnavailableDueToCountryRestriction(e);
              case s.c6.RD:
                return this.BIsPackageUnavailableDueToCountryRestriction(e);
              case s.c6.xO:
                return this.BIsBundleUnavailableDueToCountryRestriction(e);
              case s.c6.je:
              case s.c6.tp:
              case s.c6.wn:
                return (
                  console.error(
                    "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                    t,
                  ),
                  !0
                );
              default:
                return console.error("BStoreItemMissing invalid type", t), !0;
            }
          }
          BIsAppUnavailableDueToCountryRestriction(e) {
            return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
          }
          BIsPackageUnavailableDueToCountryRestriction(e) {
            return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
          }
          BIsBundleUnavailableDueToCountryRestriction(e) {
            return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
          }
          ReadResults(e, t) {
            let a = [];
            for (const i of e) a.push(this.ReadItem(i, t));
            return a;
          }
          ReadItem(e, t) {
            const a = e.item_type();
            let i = null;
            if (a === void 0)
              return (
                console.warn(`Failed to load item data: ${e.success()}`), null
              );
            switch (a) {
              case s.c6.qI:
                i = this.m_mapApps;
                break;
              case s.c6.RD:
                i = this.m_mapPackages;
                break;
              case s.c6.xO:
                i = this.m_mapBundles;
                break;
              case s.c6.je:
                i = this.m_mapTags;
                break;
              case s.c6.tp:
                i = this.m_mapCreators;
                break;
              case s.c6.wn:
                i = this.m_mapHubCategories;
                break;
              default:
                return console.error(`Invalid item type: ${a}`), null;
            }
            let r = i.get(e.id());
            if (
              (r ? r.MergeData(e, t) : ((r = new k.Ay(e, t)), i.set(e.id(), r)),
              t.include_included_items && e.included_items(!1))
            ) {
              const d = t.included_item_data_request ?? {
                ...t,
                include_included_items: !1,
              };
              for (const o of e.included_items().included_apps())
                this.ReadItem(o, d);
              for (const o of e.included_items().included_packages())
                this.ReadItem(o, d);
            }
            return r;
          }
        };
        x([F.o], O.prototype, "ReadItem", 1);
        let Q = O;
      },
      77291: (A, B, g) => {
        g.d(B, { V: () => S });
        function S(l, y) {
          typeof window > "u" || (window[l] = y);
        }
      },
    },
  ]);
})();
