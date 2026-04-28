/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9246],
  {
    69041: (e) => {
      e.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-default": "RttCMpsTJp47IkzXpZYvA",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    73406: (e) => {
      e.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    91239: (e) => {
      e.exports = { Reset: "_3A_c3YHYd4YIjA8Y-olnPl" };
    },
    96745: (e, r, t) => {
      "use strict";
      t.d(r, {
        OM: () => l,
        Sm: () => g,
        Yr: () => m,
        pV: () => P,
        uw: () => u,
        vs: () => h,
        ww: () => p,
        xi: () => c,
        zt: () => d,
      });
      var i = t(90626),
        a = t(6144),
        n = t(73745),
        s = t(78327);
      const c = "pn";
      class o {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new a.lu();
        static s_Singleton;
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
          );
        }
        constructor() {
          "dev" == s.TS.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, s.Tc)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, s.Tc)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != s.TS.WEB_UNIVERSE && "beta" != s.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != s.TS.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const r = e
              .getState()
              .columnFilters.find((e) => "packageName" === e.id)?.value,
            t = new URL(window.location.href);
          r != decodeURIComponent(t.searchParams.get(c)) &&
            (r
              ? t.searchParams.set(c, encodeURIComponent(r))
              : t.searchParams.delete(c),
            window.history.replaceState({}, "", t.toString()));
        }
        UpdateVisiblePackageList(e) {
          const r = e.getVisibleRows().filter((e) => !e.getCanExpand());
          (this.m_rgVisiblePackageIDs = []),
            r.forEach((e) =>
              this.m_rgVisiblePackageIDs.push(e.original.packageID),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(e);
        }
        SetVisiblePackageList(e) {
          (this.m_rgVisiblePackageIDs = [...e]),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            );
        }
      }
      function l() {
        return o.Get().m_rgPackageIDs;
      }
      function d() {
        return o.Get().m_rgPackageIDs;
      }
      function u() {
        return o.Get().m_rgPackageData;
      }
      function p(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function P() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function g(e) {
        o.Get().SetVisiblePackageList(e);
      }
      function m() {
        const [e, r] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, n.hL)(o.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function h() {
        return i.useMemo(
          () => (0, s.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    17084: (e, r, t) => {
      "use strict";
      t.d(r, {
        iy: () => re,
        Y5: () => V,
        $i: () => se,
        Wx: () => I,
        Gs: () => b,
        ww: () => le,
        RO: () => F,
        XK: () => q,
        FR: () => R,
        oj: () => K,
        Dl: () => M,
        tn: () => x,
        Oc: () => A,
        Y2: () => L,
        mv: () => w,
        oL: () => O,
        Ci: () => te,
        v4: () => z,
        _A: () => T,
        nT: () => N,
        fr: () => X,
        T_: () => Z,
        mP: () => J,
        T7: () => Q,
        Zz: () => ae,
        NC: () => ne,
        h4: () => oe,
        Bt: () => ce,
        hm: () => W,
        fZ: () => U,
        XB: () => ee,
        U3: () => H,
        YB: () => ie,
        d$: () => j,
        FX: () => Y,
        xQ: () => B,
      });
      var i = t(34629),
        a = t(41735),
        n = t.n(a),
        s = t(90626),
        c = t(14947),
        o = t(68797),
        l = t(6144),
        d = t(73745),
        u = t(41338),
        p = t(78327),
        P = t(96745),
        g = t(65946),
        m = t(81393),
        h = t(29848),
        _ = t(88267);
      function f(e, r, t, i, a) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let n = null;
        for (let r of e.GetUSDPricePointsInCents())
          if (r >= t) {
            n = r;
            break;
          }
        const s = a && a < h.R.k_ERegionCodeMax;
        if ((i == _.AI.k_ECurrencyCodeUSD && !s) || !n)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const c = e.GetRecommendPrice(n, i, a, r),
          o = e.GetRecommendPrice(n, _.AI.k_ECurrencyCodeUSD, void 0, r);
        if (
          ((0, m.wT)(
            c,
            `Missing requested currency guide for  ${n}/${i}/${a}/${r}`,
          ),
          (0, m.wT)(o, `Missing usd guide for  ${n}/${a}/${r}`),
          !c || !o)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let l = c.price;
        const d = o.price;
        if (d != t) {
          const e = t / d;
          (n *= e), (l = Math.ceil(l * e));
        }
        return { nSuggestedPriceInCents: l, nGuidelinesLevel: n };
      }
      var k = t(48174),
        C = t(87700),
        S = t(72255),
        v = t(87718);
      class y {
        m_mapPackagePrice = new Map();
        m_mapPackageCountryOverridePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new l.lu();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new l.lu();
        static s_Singleton;
        static Get() {
          return (
            y.s_Singleton || ((y.s_Singleton = new y()), y.s_Singleton.Init()),
            y.s_Singleton
          );
        }
        constructor() {
          (0, c.Gn)(this),
            "dev" == p.TS.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = (0, p.Tc)("base_prices", "application_config");
          if (
            (("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                e,
              ),
            e)
          )
            if (this.BIsPricePayloadValid(e))
              for (let r in e) {
                const t = e[r],
                  i = parseInt(r),
                  a = new Map();
                this.m_mapPackagePrice.set(i, a);
                for (let e in t)
                  (0, S.IG)(e)
                    ? (this.m_mapPackageCountryOverridePrice.has(i) ||
                        this.m_mapPackageCountryOverridePrice.set(i, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(i)
                        .set(e.toUpperCase(), t[e]))
                    : a.set(e, t[e]);
              }
            else
              "dev" == p.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, p.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == p.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const t = (0, p.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                t,
              ),
            t)
          )
            if (this.BIsPendingPricePayloadValid(t))
              for (let e in t) {
                const r = t[e],
                  i = parseInt(e);
                this.m_mapPriceProposals.set(i, r);
              }
            else
              "dev" == p.TS.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const i = (0, p.Tc)("valid_price_keys", "application_config");
          ("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackagePricingStore loading valid price keys: ",
              i,
            ),
            i &&
              (this.BIsPriceKeyValid(i)
                ? (this.m_rgKnownPriceKeys = i.sort((e, r) =>
                    (0, u.kd)(D(e), D(r)),
                  ))
                : "dev" == p.TS.WEB_UNIVERSE &&
                  console.error("Invalid price keys"));
          const a = (0, p.Tc)("currency_data", "application_config");
          if (
            (("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                a,
              ),
            a)
          )
            if (this.BIsCurrencyPayloadValid(a))
              for (let e in a) {
                const r = a[e];
                this.m_mapCurrencyData.set(e, r);
              }
            else
              "dev" == p.TS.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const n = (0, p.Tc)("currency_descriptions", "application_config");
          if (
            (("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                n,
              ),
            n)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(n))
              for (let e in n) {
                const r = n[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else
              "dev" == p.TS.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            if (isNaN(parseInt(e))) return !1;
            const t = r[e];
            if (!t || "object" != typeof t) return !1;
            for (let e in t)
              if ("string" != typeof e || "number" != typeof t[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            if (isNaN(parseInt(e))) return !1;
            const t = r[e];
            if (
              !t ||
              "object" != typeof t ||
              t.packageID !== parseInt(e) ||
              "object" != typeof t.prices
            )
              return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const t = r[e];
            if (!t || "object" != typeof t || t.strCode != e) return !1;
          }
          return !0;
        }
        BIsPriceKeyValid(e) {
          const r = e;
          if (!r || !Array.isArray(r)) return !1;
          for (let e in r) if ("string" != typeof e) return !1;
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const t = r[e];
            if (
              !t ||
              "object" != typeof t ||
              void 0 === t.bRequired ||
              void 0 === t.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.bRequired ?? !1;
        }
        GetMinimumBasePrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestBase || 0;
        }
        GetMinimumDiscountPrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestDiscount || 0;
        }
        GetPublishedCountryOverrides(e) {
          return this.m_mapPackageCountryOverridePrice.has(e)
            ? Array.from(this.m_mapPackageCountryOverridePrice.get(e).keys())
            : [];
        }
        GetPublishedPriceCountryOverride(e, r) {
          return this.m_mapPackageCountryOverridePrice.get(e).get(r);
        }
        GetPublishedPrice(e, r) {
          return (0, S.IG)(r)
            ? this.m_mapPackageCountryOverridePrice.get(e)?.get(r)
            : this.m_mapPackagePrice.get(e)?.get(r);
        }
        GetProposedPrice(e, r) {
          return this.m_mapPriceProposals.get(e)?.prices[r];
        }
        GetSavedPrice(e, r) {
          return this.GetProposedPrice(e, r) ?? this.GetPublishedPrice(e, r);
        }
        GetPrice(e, r) {
          return this.GetLocalOverridePrice(e, r) ?? this.GetSavedPrice(e, r);
        }
        GetLocalOverridePrice(e, r) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.get(r);
        }
        GetPriceGridCellCallbackList(e, r) {
          if (!e || !r) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const t = this.m_mapPriceGridCellCallbackList.get(e);
          return t.has(r) || t.set(r, new l.lu()), t.get(r);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let r = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            r ||
              ((r = new l.lu()),
              this.m_mapPackageOverridesCallbackList.set(e, r)),
            r
          );
        }
        OverridePrice(e, r, t) {
          t != this.GetPrice(e, r) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            t == this.GetSavedPrice(e, r)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(r)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(r, t),
            this.GetPriceGridCellCallbackList(e, r).Dispatch(t),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, r, t, i) {
          (0, m.wT)(
            r.length == t.length,
            `price list size doesn't match ${r.length} != ${t.length}`,
          );
          for (let i = 0; i < r.length; ++i) {
            const a = r[i],
              n = t[i];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              n == this.GetSavedPrice(e, a)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(a)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(a, n),
              this.GetPriceGridCellCallbackList(e, a).Dispatch(n);
          }
          this.GetPackageOverridesCallbackList(e).Dispatch(),
            i && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.size > 0;
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((r, t) =>
              r.forEach((r, i) => {
                const a = this.GetSavedPrice(t, i);
                e.push({
                  packageID: t,
                  strPriceKey: i,
                  nPriceInCents: r,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(G),
            e
          );
        }
        BHasLocalPriceOverride(e, r) {
          let t = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!t && t.has(r);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, r) => {
              e.forEach((e, r) => {
                let t = this.m_mapOverridesPerPriceKey.get(r);
                t || (t = 0), t++, this.m_mapOverridesPerPriceKey.set(r, t);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let r = new Set();
          for (const t of e) {
            const { packageID: e, strPriceKey: i } = t;
            this.GetPriceGridCellCallbackList(e, i).Dispatch(
              this.GetPrice(e, i),
            ),
              r.add(e);
          }
          for (const e of r) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let r = !1,
            t = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((i, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((r = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              t.add(a));
          });
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          r && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((r, t) => {
            this.GetPriceGridCellCallbackList(e, t).Dispatch(
              this.GetSavedPrice(e, t),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, r) {
          const t = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: p.iA.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: r,
          };
          for (const r of this.m_rgKnownPriceKeys)
            t.prices[r] = this.GetPrice(e, r);
          const i = this.m_mapPackageCountryOverridePrice.get(e);
          if (i) for (const r of i.keys()) t.prices[r] = this.GetPrice(e, r);
          return t;
        }
        async SubmitProposalToServer(e, r, t) {
          const i = this.BuildNewPricingProposal(e, r),
            a = JSON.stringify(i.prices),
            s = (0, p.Tc)("publisherid", "application_config"),
            c =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              s +
              "/" +
              e,
            l = new FormData();
          l.append("sessionid", p.TS.SESSIONID),
            l.append("partner_will_publish", r ? "1" : "0"),
            l.append("prices", a);
          let d = null;
          try {
            const r = await n().post(c, l, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (
              200 == r?.status &&
              1 == r.data?.success &&
              0 != r.data.eState
            ) {
              if (3 == r.data.eState) {
                this.m_mapPriceProposals.delete(e);
                for (const r of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.has(e) ||
                    this.m_mapPackagePrice.set(e, new Map()),
                    this.m_mapPackagePrice.get(e).set(r, i.prices[r]);
              } else
                (i.eState = r.data.eState),
                  (i.proposalKey = r.data.proposalKey),
                  this.m_mapPriceProposals.set(e, i);
              return this.DiscardLocalPriceOverridesForPackage(e), r.data;
            }
          } catch (e) {
            d = e;
          }
          const u = (0, o.H)(d);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              u.strErrorMsg,
              u,
            ),
            d?.response?.data ?? { success: 2 }
          );
        }
        async PublishApprovedProposal(e, r, t = 0) {
          const i = this.m_mapPriceProposals.get(e);
          if (4 != i?.eState || !i?.proposalKey) return { success: 8 };
          const a = (0, p.Tc)("publisherid", "application_config"),
            s =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              a +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", p.TS.SESSIONID),
            c.append("proposal_key", i.proposalKey);
          let l = null;
          try {
            const a = await n().post(s, c, {
              withCredentials: !0,
              cancelToken: r?.token,
              timeout: t,
            });
            if (200 == a?.status && 1 == a.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(r, i.prices[r]),
                  this.GetPriceGridCellCallbackList(e, r).Dispatch(
                    this.GetSavedPrice(e, r),
                  );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                a.data
              );
            }
          } catch (e) {
            l = e;
          }
          const d = (0, o.H)(l);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              d.strErrorMsg,
              d,
            ),
            l?.response?.data ?? { success: 2 }
          );
        }
        async CancelProposal(e, r) {
          const t = this.m_mapPriceProposals.get(e);
          if (!t?.proposalKey) return { success: 8 };
          const i = (0, p.Tc)("publisherid", "application_config"),
            a =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            s = new FormData();
          s.append("sessionid", p.TS.SESSIONID),
            s.append("proposal_key", t.proposalKey);
          let c = null;
          try {
            const t = await n().post(a, s, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (200 == t?.status && 1 == t.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(e, r).Dispatch(
                  this.GetSavedPrice(e, r),
                );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                t.data
              );
            }
          } catch (e) {
            c = e;
          }
          const l = (0, o.H)(c);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              l.strErrorMsg,
              l,
            ),
            c?.response?.data ?? { success: 2 }
          );
        }
        GetLocalOverrideCountForPriceKey(e) {
          return this.m_mapOverridesPerPriceKey.get(e) ?? 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let r of this.m_rgKnownPriceKeys) {
            let t = this.GetPrice(e, r);
            if (void 0 === t) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = x(e, r);
            if (t < i) return !0;
          }
          return !1;
        }
      }
      function G(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const t = (0, P.ww)(e.packageID),
            i = (0, P.ww)(r.packageID);
          return (0, u.kd)(t, i);
        }
        return (0, u.kd)(D(e.strPriceKey), D(r.strPriceKey));
      }
      function b(e) {
        const r = e.split("_")[0];
        return y.Get().m_mapCurrencyData.get(r);
      }
      function I(e, r) {
        if (void 0 === r) return ["", "", ""];
        const t = b(r) ?? b("USD");
        let i = "";
        if ("number" == typeof e) {
          let r = e.toString();
          r.length < 3 && (r = (1 == r.length ? "0" : "") + "0" + r);
          const a = r.length - 2;
          for (let e = 0; e < a; e++) {
            const n = r.charAt(e);
            (i += n),
              e < a - 1 &&
                (a - e - 1) % 3 == 0 &&
                "-" != n &&
                (i += t.strThousandsSeparator);
          }
          t.bWholeUnitsOnly ||
            ((i += t.strDecimalSymbol), (i += r.substr(r.length - 2)));
        }
        return t.bSymbolIsPrefix
          ? [t.strSymbol + t.strSymbolAndNumberSeparator, i, ""]
          : ["", i, t.strSymbolAndNumberSeparator + t.strSymbol];
      }
      (0, i.Cg)([c.sH], y.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.Cg)([d.oI], y.prototype, "OverridePrice", null),
        (0, i.Cg)([c.XI], y.prototype, "UpdateOverridesPerPriceKey", null);
      const E = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function D(e) {
        return E.has(e) ? E.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function R(e, r) {
        return y.Get().GetPrice(e, r);
      }
      function L(e) {
        return y.Get().GetPublishedCountryOverrides(e);
      }
      function O(e, r) {
        return y.Get().GetPublishedPriceCountryOverride(e, r);
      }
      function w(e, r) {
        return y.Get().GetPublishedPrice(e, r);
      }
      function A(e, r) {
        return y.Get().GetProposedPrice(e, r);
      }
      function M(e, r) {
        return y.Get().GetLocalOverridePrice(e, r);
      }
      function K(e) {
        const r = y.Get().m_strDisplayPriceKey;
        return I(y.Get().GetPrice(e, r), r).join("");
      }
      function U(e) {
        const [r, t] = s.useState(y.Get().m_strDisplayPriceKey);
        return (
          (0, d.hL)(y.Get().m_displayPriceKeyCallbackList, t),
          (function (e, r) {
            const [t, i] = s.useState(y.Get().GetPrice(e, r));
            return (
              (0, d.hL)(y.Get().GetPriceGridCellCallbackList(e, r), i),
              s.useEffect(() => i(y.Get().GetPrice(e, r)), [e, r]),
              I(t, r).join("")
            );
          })(e, r)
        );
      }
      function T() {
        const e = (0, P.Yr)(),
          r = (0, k.cT)(),
          t = (0, C.Bb)();
        return s.useCallback(
          () =>
            (function (e, r, t) {
              let i = 0;
              for (const a of e) {
                const e = new Array(),
                  n = new Array(),
                  s = y.Get().GetPrice(a, "USD");
                if (s && !(s <= 0)) {
                  for (const i of y.Get().m_rgKnownPriceKeys) {
                    if ("USD" == i) continue;
                    const s = y.Get().GetPrice(a, "USD"),
                      { nSuggestedPriceInCents: c, nGuidelinesLevel: o } = f(
                        r,
                        t,
                        s,
                        (0, S.ei)(i),
                        (0, v.vS)(i),
                      );
                    null !== o &&
                      y.Get().GetPrice(a, i) != c &&
                      (e.push(i), n.push(c));
                  }
                  e.length > 0 &&
                    (y.Get().OverridePricesForPackage(a, e, n), (i += 1));
                }
              }
              i > 0 && y.Get().DispatchPriceOverridesCallbacks();
            })(e, r, t),
          [e, r, t],
        );
      }
      function B(e, r) {
        const t = (0, d.CH)();
        (0, d.hL)(y.Get().GetPriceGridCellCallbackList(e, r), t);
        const i = y.Get().GetPrice(e, r),
          a = (0, k.cT)(),
          n = (0, C.Bb)();
        (0, d.hL)(y.Get().GetPriceGridCellCallbackList(e, "USD"), t);
        const c = y.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: o, nGuidelinesLevel: l } = f(
            a,
            n,
            c,
            (0, S.ei)(r),
            (0, v.vS)(r),
          ),
          u = s.useCallback((t) => y.Get().OverridePrice(e, r, t), [e, r]),
          p = y.Get().GetPublishedPrice(e, r),
          P = y.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: g, nMaxPriceInCents: m } = x(e, r),
          h = y.Get().GetMinimumDiscountPrice(r),
          _ = i ? Math.floor((100 * (i - h)) / i) : 90,
          G = _ < Math.min(90, Math.floor((100 * (l - 50)) / l)) ? _ : null;
        return s.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: P,
            nPublishedPriceInCents: p,
            nMinPriceInCents: g,
            nMaxPriceInCents: m,
            nMaxDiscountPercentage: G,
            nSuggestedPriceInCents: o,
            fnSetPrice: u,
          }),
          [i, P, p, g, m, G, o, u],
        );
      }
      function N(e) {
        let [r, t] = s.useState(() => y.Get().BAnyPackagePriceBelowMin(e)),
          i = s.useCallback(() => {
            let r = y.Get().BAnyPackagePriceBelowMin(e);
            t(r);
          }, [e, t]);
        return (0, d.hL)(y.Get().GetPackageOverridesCallbackList(e), i), r;
      }
      function V(e) {
        return y.Get().BAnyPackagePriceBelowMin(e);
      }
      function x(e, r) {
        let t = y.Get();
        return {
          nMinPriceInCents: t.GetMinimumBasePrice(r),
          nMaxPriceInCents: t.m_setRecurringSubscriptions.has(e)
            ? t.GetPublishedPrice(e, r)
            : null,
        };
      }
      function W() {
        return s.useCallback((e, r, t) => {
          const i = y.Get().GetPrice(e, r);
          return (
            y.Get().OverridePrice(e, r, t),
            i == t
              ? null
              : {
                  packageID: e,
                  strPriceKey: r,
                  nPriceInCents: t,
                  nOldPriceInCents: i,
                }
          );
        }, []);
      }
      function j(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(y.Get().GetPriceGridCellCallbackList(e, "USD"), r),
          y.Get().m_mapPriceProposals.get(e)
        );
      }
      function z() {
        return Array.from(y.Get().m_mapPriceProposals.values());
      }
      function F(e) {
        return y.Get().m_mapPriceProposals.get(e);
      }
      function $(e) {
        let r = !1;
        for (const t of y.Get().m_rgKnownPriceKeys) {
          let i = y.Get().GetPublishedPrice(e, t);
          r = r || (0 != i && void 0 !== i);
        }
        return r;
      }
      function Y(e) {
        const r = j(e),
          t = [];
        for (const i of y.Get().m_rgKnownPriceKeys) {
          const a = r.prices[i],
            n = y.Get().GetPublishedPrice(e, i);
          a != n &&
            t.push({
              packageID: e,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: n,
            });
        }
        return t;
      }
      function H() {
        return y.Get().m_rgKnownPriceKeys;
      }
      function q(e) {
        let r = y.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function J(e) {
        return s.useCallback(() => {
          y.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function Z(e) {
        return s.useCallback(() => {
          y.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function X(e) {
        return s.useCallback(() => {
          y.Get().CancelProposal(e);
        }, [e]);
      }
      function Q() {
        const [e, r] = s.useState(y.Get().m_strDisplayPriceKey),
          t = y.Get().m_rgKnownPriceKeys,
          i = s.useCallback((e) => {
            r(e),
              (y.Get().m_strDisplayPriceKey = e),
              y.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: t, fnSetPriceKey: i };
      }
      function ee(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(y.Get().m_allPriceOverridesCallbackList, r),
          y.Get().BHasLocalPriceOverrides(e)
        );
      }
      function re(e) {
        return y.Get().BHasLocalPriceOverrides(e);
      }
      function te() {
        const [e, r] = s.useState(() => y.Get().GetAllLocalPriceOverrides());
        return (0, d.hL)(y.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function ie(e) {
        return (0, g.q3)(() => y.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function ae() {
        return s.useCallback(
          () => y.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function ne() {
        return s.useCallback(() => y.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function se() {
        return y.Get().OverridePrice;
      }
      function ce() {
        return s.useCallback(
          (e, r, t) => y.Get().SubmitProposalToServer(e, r, t),
          [],
        );
      }
      function oe() {
        return s.useCallback(
          (e, r) => y.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function le(e) {
        let r = [];
        const t = y.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if ($(i)) continue;
          let e = !1;
          for (const r of t) {
            if (!y.Get().BPriceKeyRequired(r)) continue;
            if (!y.Get().GetPrice(i, r)) {
              e = !0;
              break;
            }
          }
          e && r.push(i);
        }
        return r;
      }
    },
    9554: (e, r, t) => {
      "use strict";
      t.d(r, { es: () => n, nm: () => u });
      var i = t(56011),
        a = t(61859);
      function n(e, r) {
        const t = (0, a.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, a.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          n = e.original.appName,
          s = r.original.appName,
          c = n == t,
          o = n == i,
          l = !c && !o,
          d = s == t,
          u = s == i,
          p = !d && !u;
        if (l && p) return n.localeCompare(s);
        if (l || p) return l ? -1 : 1;
        if (c == d && o == u) {
          const t = e.original.packageName,
            i = r.original.packageName;
          return t && i
            ? t.localeCompare(i)
            : t || i
              ? t
                ? -1
                : 1
              : e.original.packageID - r.original.packageID;
        }
        return c ? -1 : 1;
      }
      const s = (e) => e.nextElementSibling,
        c = (e) => e.previousElementSibling,
        o = (e, r) => {
          const t = e.getAttribute("data-table-column-id"),
            i = e.parentElement;
          let a = i && r(i);
          for (; t && a; ) {
            for (const e of Array.from(a.children))
              if (t == e.getAttribute("data-table-column-id")) return e;
            a = r(a);
          }
          return null;
        },
        l = new Map([
          [38, (e) => o(e, c)],
          [39, s],
          [40, (e) => o(e, s)],
          [37, c],
          [9, (e) => o(e, s)],
          [13, (e) => o(e, s)],
        ]);
      function d(e) {
        const r = Array.prototype.slice.call(e.children).reverse();
        for (; r.length > 0; ) {
          const e = r.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          r.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function u(e) {
        let r = l.get(e.keyCode);
        if ((9 === e.keyCode && e.shiftKey && (r = (e) => o(e, c)), !r)) return;
        var t;
        let a = r(
          ((t = e.currentTarget),
          (0, i.Kf)(t, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; a; ) {
          const t = d(a);
          if (t) return t.focus(), void e.preventDefault();
          a = r(a);
        }
      }
    },
    70986: (e, r, t) => {
      "use strict";
      t.d(r, { M: () => a, o: () => i });
      const i = "America/Los_Angeles";
      function a(e) {
        const r = t(87937).unix(e).tz(i);
        return (
          r.seconds(0),
          r.minutes(0),
          r.hours(10),
          r.unix() < e && r.hours(34),
          r.unix()
        );
      }
    },
    53965: (e, r, t) => {
      "use strict";
      t.d(r, { $: () => C, v: () => S });
      var i = t(7850),
        a = t(64238),
        n = t.n(a),
        s = t(69041),
        c = t(75659),
        o = t(41324),
        l = t(11820),
        d = t(73406),
        u = t(90534),
        p = t(83392);
      function P(e) {
        const {
          size: r = "3",
          loading: t = !0,
          children: a,
          color: n,
          variant: s,
          ...c
        } = e;
        return a || !t
          ? (0, i.jsxs)(u.az, {
              position: "relative",
              ...c,
              width: "fit-content",
              children: [
                (0, i.jsx)("div", {
                  "data-visibility": !t,
                  className: d.ChildContainer,
                  children: a,
                }),
                t &&
                  (0, i.jsx)(p.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)(g, { size: r, color: n, variant: s }),
                  }),
              ],
            })
          : (0, i.jsx)(g, { size: r, color: n, variant: s, ...c });
      }
      function g(e) {
        const { className: r, color: t, ...a } = (0, o.mz)(e, m);
        return (0, i.jsx)("div", {
          "data-accent-color": t,
          className: n()(r, d.Spinner),
          ...a,
        });
      }
      const m = [
        ...c.L,
        { prop: "size", responsive: !0, className: (e) => d[`Size-${e}`] },
        { prop: "variant", className: (e) => d[`Variant-${e}`] },
      ];
      var h = t(45699),
        _ = t(8527);
      function f(e) {
        e.preventDefault();
      }
      const k = [
          ...c.L,
          { prop: "size", responsive: !0, className: (e) => s[`Size-${e}`] },
          { prop: "variant", className: (e) => s[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: s.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: s.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        C = function (e) {
          const {
              variant: r = "default",
              size: t = "2",
              minWidth: a = "fit-content",
              color: c,
              loading: l,
              children: d,
              onClick: u,
              icon: p,
              gamepadFocusable: g = !0,
              ...m
            } = e,
            f = l
              ? (0, i.jsx)(P, {
                  size: t,
                  color: c,
                  variant: "bright",
                  children: d,
                })
              : d,
            C = l ? void 0 : u,
            S = g && _.TS.IN_GAMEPADUI ? h.fu : "button";
          return (0, i.jsx)(S, {
            type: "button",
            ...(0, o.mz)(
              {
                ...m,
                variant: r,
                size: t,
                minWidth: a,
                color: c,
                className: n()(s.Button, p && s.Icon),
                onClick: C,
              },
              k,
            ),
            children: f,
          });
        },
        S = function (e) {
          const {
              variant: r = "default",
              size: t = "2",
              minWidth: a = "fit-content",
              disabled: c,
              icon: d,
              gamepadFocusable: u = !0,
              ...p
            } = e,
            P = c ? f : void 0,
            g = u && _.TS.IN_GAMEPADUI ? h.Ii : "a";
          return (0, i.jsx)(g, {
            ...(0, o.mz)(
              {
                onClick: P,
                ...p,
                variant: r,
                size: t,
                minWidth: a,
                className: n()(s.Button, d && s.Icon, (0, l.T)()),
              },
              k,
            ),
          });
        };
    },
    11820: (e, r, t) => {
      "use strict";
      t.d(r, { T: () => a });
      var i = t(91239);
      function a() {
        return i.Reset;
      }
    },
    87718: (e, r, t) => {
      "use strict";
      t.d(r, {
        bS: () => n,
        de: () => c,
        j4: () => l,
        k8: () => s,
        uF: () => o,
        vS: () => d,
      });
      var i = t(88267),
        a = t(29848);
      function n(e) {
        return i.AI.k_ECurrencyCodeUSD;
      }
      function s(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "usd_cis";
          case a.R.k_ERegionCodeSAsia:
            return "usd_sasia";
          case a.R.k_ERegionCodeLATAM:
            return "usd_latam";
          case a.R.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function c(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "CIS";
          case a.R.k_ERegionCodeSAsia:
            return "SASIA";
          case a.R.k_ERegionCodeLATAM:
            return "LATAM";
          case a.R.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function o(e) {
        switch (e) {
          case "CIS":
            return a.R.k_ERegionCodeCIS;
          case "SASIA":
            return a.R.k_ERegionCodeSAsia;
          case "LATAM":
            return a.R.k_ERegionCodeLATAM;
          case "MENA":
            return a.R.k_ERegionCodeMENA;
          default:
            return a.R.k_ERegionCodeInvalid;
        }
      }
      function l(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case a.R.k_ERegionCodeSAsia:
            return "South Asia";
          case a.R.k_ERegionCodeLATAM:
            return "Latin America";
          case a.R.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function d(e) {
        switch (e?.toLowerCase()) {
          case "usd_cis":
            return a.R.k_ERegionCodeCIS;
          case "usd_sasia":
            return a.R.k_ERegionCodeSAsia;
          case "usd_latam":
            return a.R.k_ERegionCodeLATAM;
          case "usd_mena":
            return a.R.k_ERegionCodeMENA;
          default:
            return a.R.k_ERegionCodeInvalid;
        }
      }
    },
    87700: (e, r, t) => {
      "use strict";
      t.d(r, { Bb: () => l, MA: () => o, jY: () => c });
      var i = t(7850),
        a = t(90626),
        n = t(48174);
      const s = a.createContext({
        eConversionMethod: 1,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function c(e) {
        const { eInitialConversionMethod: r } = e,
          t = (0, n.cT)(),
          [c, o] = a.useState(r || 1),
          l = a.useMemo(() => {
            const e = t ? t.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: c,
              setConversionMethod: o,
              rgAvailableConversionMethods: e,
            };
          }, [c, o, t]);
        return (0, i.jsx)(s.Provider, { value: l, children: e.children });
      }
      function o() {
        return a.useContext(s);
      }
      function l() {
        return a.useContext(s).eConversionMethod;
      }
    },
    48174: (e, r, t) => {
      "use strict";
      t.d(r, { mj: () => m, gC: () => h, cT: () => g });
      var i = t(90626),
        a = t(76501);
      class n {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(e, r, t, i = 1) {
          return `${e}_${r}_${t || a.Rm.k_ERegionCodeInvalid}_${i}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, r) {
          return r
            ? e == a.AI.k_ECurrencyCodeUSD && this.m_setSupportedRegions.has(r)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, r, t, i = 1) {
          const a = this.GetKey(e, r, t, i);
          return this.m_mapKeyToGuidePrice.get(a);
        }
        GetScaledRecommendedPrice(e, r, t, i = 1) {
          let a = -1,
            n = -1;
          for (const r of this.m_mapUSDPrice.get(i).keys()) {
            const t = Math.abs(r - e);
            (-1 == a || t < n) && ((a = r), (n = t));
          }
          const s = this.m_mapUSDPrice.get(i).get(a),
            c = t
              ? s.region_prices.find((e) => e.region_code == t)
              : s.currency_prices.find((e) => e.currency_code == r),
            o = e / a;
          return {
            currency_code: c?.currency_code,
            region_code: c?.region_code,
            price: Math.ceil((c?.price || 0) * o),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(e) {
          let r = new Set();
          e.forEach((e) => {
            const t = e.convert_method ?? 1;
            this.m_setConversionMethod.add(t),
              this.m_mapUSDPrice.has(t) || this.m_mapUSDPrice.set(t, new Map());
            this.m_mapUSDPrice.get(t).set(e.usd_price, e),
              r.add(e.usd_price),
              e.currency_prices.forEach((r) => {
                const t = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  a.Rm.k_ERegionCodeInvalid,
                  e.convert_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(t, r),
                  this.m_setSupportedCurrencies.add(r.currency_code);
              }),
              e.region_prices.forEach((r) => {
                const t = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  r.region_code,
                  e.convert_method || 1,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(t, r),
                  this.m_setSupportedRegions.add(r.region_code),
                  this.m_setConversionMethod.has(3))
                ) {
                  const t = {
                      currency_code: a.AI.k_ECurrencyCodeUSD,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    i = this.GetKey(
                      e.usd_price,
                      a.AI.k_ECurrencyCodeUSD,
                      r.region_code,
                      3,
                    );
                  this.m_mapKeyToGuidePrice.set(i, t);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(r.keys()));
        }
      }
      var s = t(7860),
        c = t(24484);
      var o = t(87700),
        l = t(20194),
        d = t(81393),
        u = t(88267),
        p = t(72255),
        P = t(29848);
      function g() {
        const e = (0, l.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, c.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = s.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return (0, i.useMemo)(() => (e.data ? new n(e.data) : null), [e.data]);
      }
      function m() {
        return ["PricingGuideline"];
      }
      function h(e) {
        const r = g(),
          t = (0, o.Bb)();
        return {
          fnApplyGuidelines: (0, i.useCallback)(
            (i, a, n) => {
              if (
                ((0, d.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (
                  let s = u.AI.k_ECurrencyCodeUSD;
                  s < u.AI.k_ECurrencyCodeMax;
                  ++s
                ) {
                  const c = r.GetRecommendPrice(a, s, void 0, n ?? t)?.price;
                  if (c && c > 0) {
                    const r = (0, p.M1)(s);
                    e(i, r, c);
                  }
                }
                for (
                  let s = P.R.k_ERegionCodeCIS;
                  s < P.R.k_ERegionCodeMax;
                  ++s
                ) {
                  const c = u.AI.k_ECurrencyCodeUSD,
                    o = r.GetRecommendPrice(a, c, s, n ?? t)?.price;
                  if (o && o > 0) {
                    const r = (0, p.pd)(c, s).toUpperCase();
                    e(i, r, o);
                  }
                }
              }
            },
            [t, e, r],
          ),
        };
      }
    },
    76501: (e, r, t) => {
      "use strict";
      t.d(r, {
        AI: () => i.AI,
        JA: () => c,
        M1: () => a.M1,
        Rm: () => n.R,
        Ug: () => a.Ug,
        bS: () => s.bS,
        de: () => s.de,
        iy: () => o,
        j4: () => s.j4,
        k8: () => s.k8,
        pd: () => a.pd,
        t_: () => a.t_,
        uF: () => s.uF,
      });
      var i = t(88267),
        a = t(72255),
        n = t(29848),
        s = t(87718);
      const c = (0, i.yv)(),
        o = ((0, i.X5)(), (0, n.i)());
    },
  },
]);
