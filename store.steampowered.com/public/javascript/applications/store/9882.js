/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9882],
  {
    51006: (e, t, n) => {
      n.d(t, { Vw: () => I });
      var i = n(34629),
        s = n(14947),
        o = n(22837),
        a = n(37085),
        r = n(56545),
        c = n(17690),
        l = n(78327);
      class p {
        m_nLastUpdated = 0;
        m_mapLanguages = s.sH.map();
        m_appid;
        m_fetching = null;
        constructor(e) {
          this.m_appid = e;
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let n = l.TS.LANGUAGE;
          return u(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = l.TS.LANGUAGE;
          return d(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function u(e, t, n, i, s) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              i,
              "tokens",
              t,
            ),
            ""
          );
        let a = e;
        e = e.toLowerCase();
        let r = "";
        if (
          (t && t.has(e) && (r = t.get(e)),
          !r && n && n.has(e) && (r = n.get(e)),
          r)
        )
          r = d(r, t, n, i, s);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              i,
              a,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && l.TS.EUNIVERSE != o.wLO)
        )
          return e;
        return r;
      }
      function d(e, t, n, i, s) {
        let o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (let a of o) {
            let o = u(_(a.slice(1, -1), s), t, n, i, s);
            if (!o) return "";
            e = e.replace(a, o);
          }
        return (e = _(e, s));
      }
      function _(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let i of n) {
            let n = i.slice(1, -1).toLowerCase(),
              s = t.get(n);
            null == s
              ? console.log("No rich presence found for", n)
              : (e = e.replace(i, s));
          }
        return e;
      }
      var h = n(34214),
        f = n(81393),
        m = n(6144);
      class g {
        m_CMInterface;
        m_mapAppInfo = s.sH.map();
        m_mapRichPresenceLoc = s.sH.map();
        m_cAppInfoRequestsInFlight = 0;
        m_setPendingAppInfo = new Set();
        m_PendingAppInfoPromise;
        m_PendingAppInfoResolve;
        m_CacheStorage = null;
        m_fnCallbackOnAppInfoLoaded = new m.lu();
        constructor() {
          (0, s.Gn)(this);
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, f.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, f.wT)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new c.by(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e),
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        async FlushPendingAppInfo() {
          const e = this.m_PendingAppInfoResolve,
            t = Array.from(this.m_setPendingAppInfo);
          (this.m_PendingAppInfoPromise = void 0),
            (this.m_PendingAppInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            await this.LoadAppInfoBatch(t),
            e?.();
        }
        async LoadAppInfoBatch(e) {
          this.m_cAppInfoRequestsInFlight++;
          let t = await this.LoadAppInfoBatchFromLocalCache(e);
          if (t.length) {
            console.log("Loading batch of App Info from Steam: ", t),
              await this.m_CMInterface?.WaitUntilLoggedOn();
            let e = r.w.Init(h._z);
            e.Body().set_language((0, o.sfN)(l.TS.LANGUAGE));
            const n = 50;
            for (; t.length > 0; ) {
              const i = Math.min(n, t.length),
                s = t.slice(0, i);
              (t = t.slice(i)), e.Body().set_appids(s);
              const o = await h.BE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              o.GetEResult() == a.R
                ? this.OnGetAppsResponse(o)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${o.GetEResult()}, AppIDs:`,
                    s,
                  );
            }
          }
          0 == --this.m_cAppInfoRequestsInFlight &&
            0 == this.m_setPendingAppInfo.size &&
            (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
            this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let n of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(n.appid());
            (0, f.wT)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new c.by(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new c.by(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        async EnsureAppInfoForAppIDs(e) {
          let t = !1;
          return (
            e.forEach((e) => {
              let n = this.m_mapAppInfo.get(e);
              n
                ? n.is_valid || (t = !0)
                : ((n = new c.by(e)),
                  this.m_mapAppInfo.set(e, n),
                  this.QueueAppInfoRequest(e),
                  (t = !0));
            }),
            t && void 0 !== this.m_PendingAppInfoPromise
              ? this.m_PendingAppInfoPromise
              : Promise.resolve()
          );
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        async LoadAppInfoBatchFromLocalCache(e) {
          if (!this.m_CacheStorage) return e;
          console.log("Loading batch of App Info from Local Cache: ", e);
          const t = new Date(new Date().getTime() - 12096e5),
            n = async (e) => {
              const n = await this.m_CacheStorage?.GetObject(
                this.GetCacheKeyForAppID(e),
              );
              if (!n) return e;
              let i = this.m_mapAppInfo.get(e);
              return (
                (0, f.wT)(
                  i,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                i
                  ? ((i = new c.by(e)),
                    i.DeserializeFromCacheObject(n),
                    i.is_initialized
                      ? (this.m_mapAppInfo.set(e, i),
                        i.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          n,
                        ),
                        e))
                  : e
              );
            };
          let i = e.map((e) => n(e));
          return (await Promise.all(i)).filter((e) => null !== e);
        }
        async SaveAppInfoBatchToLocalCache(e) {
          if (this.m_CacheStorage) {
            console.log(
              "Saving batch of App Info to Local Cache: ",
              e.map((e) => e.appid),
            );
            for (const t of e) {
              const e = t.SerializeToCacheObject();
              e &&
                this.m_CacheStorage.StoreObject(
                  this.GetCacheKeyForAppID(t.appid),
                  e,
                );
            }
          }
        }
        Localize(e, t, n) {
          const i = this.GetRichPresenceLoc(e);
          return i
            ? i.Localize(t, n)
            : l.TS.EUNIVERSE != o.wLO
              ? (console.log(
                  `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
                ),
                t)
              : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * c.IU < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new p(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let n of t) {
            let t = n.language(),
              i = e.m_mapLanguages.get(t);
            i
              ? i.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (i = e.m_mapLanguages.get(t)));
            for (let e of n.tokens()) i?.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = r.w.Init(h.zQ);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(l.TS.LANGUAGE),
                    h.BE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    t.GetEResult() != a.R
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists(),
                        ),
                        Promise.resolve(e))
                  ),
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, i.Cg)([s.XI], g.prototype, "OnGetAppsResponse", null),
        (0, i.Cg)([s.XI], g.prototype, "OnRichPresenceLocUpdate", null);
      const I = new g();
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => _,
        Gg: () => m,
        Ow: () => f,
        Sq: () => p,
        YM: () => L,
        eR: () => u,
        ik: () => d,
        mZ: () => g,
        t7: () => h,
        zX: () => A,
      });
      var i = n(41735),
        s = n.n(i),
        o = n(90626),
        a = n(37085),
        r = n(96171),
        c = n(84933),
        l = n(16021);
      const p = 1,
        u = 2,
        d = 3;
      function _(e, t, n, i) {
        const r = (0, o.useRef)(void 0),
          _ = (0, o.useRef)(void 0),
          h = (0, c.CH)();
        r.current = e;
        const [f, m] = (0, o.useState)(void 0),
          {
            include_assets: g,
            include_release: I,
            include_platforms: A,
            include_all_purchase_options: L,
            include_screenshots: G,
            include_trailers: R,
            include_ratings: P,
            include_tag_count: v,
            include_reviews: w,
            include_basic_info: C,
            include_supported_languages: S,
            include_full_description: y,
            include_included_items: b,
            include_assets_without_overrides: k,
            apply_user_filters: T,
            include_links: O,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            const n = {
              include_assets: g,
              include_release: I,
              include_platforms: A,
              include_all_purchase_options: L,
              include_screenshots: G,
              include_trailers: R,
              include_ratings: P,
              include_tag_count: v,
              include_reviews: w,
              include_basic_info: C,
              include_supported_languages: S,
              include_full_description: y,
              include_included_items: b,
              include_assets_without_overrides: k,
              apply_user_filters: T,
              include_links: O,
            };
            let o = null;
            return (
              !e ||
                e < 0 ||
                l.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== f && i && i == _.current) ||
                (i !== _.current && (m(void 0), (_.current = i)),
                (o = s().CancelToken.source()),
                l.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    o?.token.reason || r.current !== e || m(t == a.R), h();
                  })),
              () => o?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, f, g, I, A, L, G, R, P, v, w, C, S, y, b, k, T, O, h]),
          !e)
        )
          return [null, u];
        if (!1 === f) return [void 0, u];
        if (l.A.Get().BIsStoreItemMissing(e, t)) return [void 0, u];
        if (!l.A.Get().BHasStoreItem(e, t, n)) return [void 0, p];
        const B = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return B ? [B, d] : [null, u];
      }
      function h(e, t, n) {
        return _(e, r.c6.qI, t, n);
      }
      function f(e, t, n) {
        return _(e, r.c6.xO, t, n);
      }
      function m(e, t, n) {
        return _(e, r.c6.RD, t, n);
      }
      function g(e, t, n) {
        const [i, s] = _(e, t, n);
        let o;
        i?.GetStoreItemType() != r.c6.RD ||
          i.GetAssets()?.GetHeaderURL() ||
          1 != i?.GetIncludedAppIDs().length ||
          (o = i.GetIncludedAppIDs()[0]);
        const [a, c] = h(o, n);
        return o && a?.BIsVisible() ? [a, c] : [i, s];
      }
      function I(e, t, n, i) {
        const a = (0, c.CH)(),
          {
            include_assets: r,
            include_release: _,
            include_platforms: h,
            include_all_purchase_options: f,
            include_screenshots: m,
            include_trailers: g,
            include_ratings: I,
            include_tag_count: A,
            include_reviews: L,
            include_basic_info: G,
            include_supported_languages: R,
            include_full_description: P,
            include_included_items: v,
            include_assets_without_overrides: w,
            apply_user_filters: C,
            include_links: S,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: r,
                include_release: _,
                include_platforms: h,
                include_all_purchase_options: f,
                include_screenshots: m,
                include_trailers: g,
                include_ratings: I,
                include_tag_count: A,
                include_reviews: L,
                include_basic_info: G,
                include_supported_languages: R,
                include_full_description: P,
                include_included_items: v,
                include_assets_without_overrides: w,
                apply_user_filters: C,
                include_links: S,
              },
              i = e.filter(
                (e) =>
                  !(
                    l.A.Get().BHasStoreItem(e, t, n) ||
                    l.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const o = s().CancelToken.source(),
              c = i.map((e) => l.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(c).then(() => {
                o.token.reason || a();
              }),
              () => o.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, a, r, _, h, f, m, g, I, A, L, G, R, P, v, w, C, S]),
          !e)
        )
          return u;
        if (
          !e.every(
            (e) =>
              l.A.Get().BHasStoreItem(e, t, n) ||
              l.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return p;
        return e.every((e) =>
          l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? d
          : u;
      }
      function A(e, t, n) {
        return I(e, r.c6.qI, t, n);
      }
      function L() {
        o.useEffect(
          () => (
            l.A.Get().SetReturnUnavailableItems(!0),
            () => l.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);
