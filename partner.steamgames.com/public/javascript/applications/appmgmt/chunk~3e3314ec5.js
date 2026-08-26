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
        "Variant-basic": "AjHMNGqS56A5oRpfyYhEz",
        "Variant-dark": "_29OIX_G3reF-rRPFaaV2mW",
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
    16180: (e) => {
      e.exports = {
        Option: "_3a3fNdwhCItYEc1SsUNP",
        Disabled: "_21NiFCkZFlTZ8WrrrxX0BX",
        RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
      };
    },
    96745: (e, r, t) => {
      "use strict";
      t.d(r, {
        E1: () => p,
        OM: () => l,
        Sm: () => _,
        Yr: () => b,
        pV: () => g,
        uw: () => d,
        vs: () => P,
        ww: () => m,
        xi: () => c,
        zt: () => u,
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
      function u() {
        return o.Get().m_rgPackageIDs;
      }
      function d() {
        return o.Get().m_rgPackageData;
      }
      function m(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function p(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return !r || !!r.released;
      }
      function g() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function _(e) {
        o.Get().SetVisiblePackageList(e);
      }
      function b() {
        const [e, r] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, n.hL)(o.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function P() {
        return i.useMemo(
          () => (0, s.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    69423: (e, r, t) => {
      "use strict";
      t.d(r, {
        $i: () => le,
        Ao: () => K,
        Bt: () => ue,
        Ci: () => ne,
        Dl: () => E,
        FR: () => z,
        FX: () => Z,
        Gs: () => M,
        NC: () => oe,
        Oc: () => D,
        RO: () => $,
        T7: () => te,
        T_: () => ee,
        U3: () => J,
        Wx: () => C,
        XB: () => ie,
        XK: () => Q,
        Y2: () => O,
        Y5: () => F,
        YB: () => se,
        Zz: () => ce,
        _A: () => L,
        d$: () => V,
        fZ: () => U,
        fr: () => re,
        h4: () => de,
        hm: () => x,
        iy: () => ae,
        mP: () => X,
        mv: () => R,
        nT: () => A,
        oL: () => I,
        oj: () => T,
        tn: () => N,
        v4: () => Y,
        ww: () => me,
        xQ: () => W,
      });
      var i = t(34629),
        a = t(41735),
        n = t.n(a),
        s = t(90626),
        c = t(14947),
        o = t(37085),
        l = t(68797),
        u = t(6144),
        d = t(73745),
        m = t(41338),
        p = t(78327),
        g = t(96745),
        _ = t(65946),
        b = t(81393),
        P = t(4160),
        f = t(31031),
        h = t(48174),
        y = t(87700),
        B = t(72255),
        S = t(87718);
      class v {
        m_mapPackagePrice = new Map();
        m_mapPackageCountryOverridePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new u.lu();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new u.lu();
        static s_Singleton;
        static Get() {
          return (
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
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
                  (0, B.IG)(e)
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
                    (0, m.kd)(k(e), k(r)),
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
          return (0, B.IG)(r)
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
          return t.has(r) || t.set(r, new u.lu()), t.get(r);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let r = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            r ||
              ((r = new u.lu()),
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
          (0, b.wT)(
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
            e.sort(w),
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
            eState: P.Al,
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
            u = new FormData();
          u.append("sessionid", (0, p.KC)()),
            u.append("partner_will_publish", r ? "1" : "0"),
            u.append("prices", a);
          let d = null;
          try {
            const r = await n().post(c, u, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (
              200 == r?.status &&
              r.data?.success == o.R &&
              r.data.eState != P.nD
            ) {
              if (r.data.eState == P.pJ) {
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
          const m = (0, l.H)(d);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              m.strErrorMsg,
              m,
            ),
            d?.response?.data ?? { success: o.zi }
          );
        }
        async PublishApprovedProposal(e, r, t = 0) {
          const i = this.m_mapPriceProposals.get(e);
          if (i?.eState != P.Zo || !i?.proposalKey) return { success: o.nO };
          const a = (0, p.Tc)("publisherid", "application_config"),
            s =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              a +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", (0, p.KC)()),
            c.append("proposal_key", i.proposalKey);
          let u = null;
          try {
            const a = await n().post(s, c, {
              withCredentials: !0,
              cancelToken: r?.token,
              timeout: t,
            });
            if (200 == a?.status && a.data?.success == o.R) {
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
            u = e;
          }
          const d = (0, l.H)(u);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              d.strErrorMsg,
              d,
            ),
            u?.response?.data ?? { success: o.zi }
          );
        }
        async CancelProposal(e, r) {
          const t = this.m_mapPriceProposals.get(e);
          if (!t?.proposalKey) return { success: o.nO };
          const i = (0, p.Tc)("publisherid", "application_config"),
            a =
              p.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            s = new FormData();
          s.append("sessionid", (0, p.KC)()),
            s.append("proposal_key", t.proposalKey);
          let c = null;
          try {
            const t = await n().post(a, s, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (200 == t?.status && t.data?.success == o.R) {
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
          const u = (0, l.H)(c);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              u.strErrorMsg,
              u,
            ),
            c?.response?.data ?? { success: o.zi }
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
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = N(e, r);
            if (t < i) return !0;
          }
          return !1;
        }
      }
      function w(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const t = (0, g.ww)(e.packageID),
            i = (0, g.ww)(r.packageID);
          return (0, m.kd)(t, i);
        }
        return (0, m.kd)(k(e.strPriceKey), k(r.strPriceKey));
      }
      function M(e) {
        const r = e.split("_")[0];
        return v.Get().m_mapCurrencyData.get(r);
      }
      function C(e, r) {
        if (void 0 === r) return ["", "", ""];
        const t = M(r) ?? M("USD");
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
      (0, i.Cg)([c.sH], v.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.Cg)([d.oI], v.prototype, "OverridePrice", null),
        (0, i.Cg)([c.XI], v.prototype, "UpdateOverridesPerPriceKey", null);
      const G = new Map([
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
      function k(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function z(e, r) {
        return v.Get().GetPrice(e, r);
      }
      function O(e) {
        return v.Get().GetPublishedCountryOverrides(e);
      }
      function I(e, r) {
        return v.Get().GetPublishedPriceCountryOverride(e, r);
      }
      function R(e, r) {
        return v.Get().GetPublishedPrice(e, r);
      }
      function D(e, r) {
        return v.Get().GetProposedPrice(e, r);
      }
      function E(e, r) {
        return v.Get().GetLocalOverridePrice(e, r);
      }
      function T(e) {
        const r = v.Get().m_strDisplayPriceKey;
        return C(v.Get().GetPrice(e, r), r).join("");
      }
      function U(e) {
        const [r, t] = s.useState(v.Get().m_strDisplayPriceKey);
        return (
          (0, d.hL)(v.Get().m_displayPriceKeyCallbackList, t),
          (function (e, r) {
            const [t, i] = s.useState(v.Get().GetPrice(e, r));
            return (
              (0, d.hL)(v.Get().GetPriceGridCellCallbackList(e, r), i),
              s.useEffect(() => i(v.Get().GetPrice(e, r)), [e, r]),
              C(t, r).join("")
            );
          })(e, r)
        );
      }
      function L() {
        const e = (0, g.Yr)(),
          r = (0, h.cT)(),
          t = (0, y.Bb)();
        return s.useCallback(
          () =>
            (function (e, r, t) {
              let i = 0;
              for (const a of e) {
                const e = new Array(),
                  n = new Array(),
                  s = v.Get().GetPrice(a, "USD");
                if (s && !(s <= 0)) {
                  for (const i of v.Get().m_rgKnownPriceKeys) {
                    if ("USD" == i) continue;
                    const s = v.Get().GetPrice(a, "USD"),
                      { nSuggestedPriceInCents: c, nGuidelinesLevel: o } = (0,
                      f.$)(r, t, s, (0, B.ei)(i), (0, S.vS)(i));
                    null !== o &&
                      v.Get().GetPrice(a, i) != c &&
                      (e.push(i), n.push(c));
                  }
                  e.length > 0 &&
                    (v.Get().OverridePricesForPackage(a, e, n), (i += 1));
                }
              }
              i > 0 && v.Get().DispatchPriceOverridesCallbacks();
            })(e, r, t),
          [e, r, t],
        );
      }
      function W(e, r) {
        const t = (0, d.CH)();
        (0, d.hL)(v.Get().GetPriceGridCellCallbackList(e, r), t);
        const i = v.Get().GetPrice(e, r),
          a = (0, h.cT)(),
          n = (0, y.Bb)();
        (0, d.hL)(v.Get().GetPriceGridCellCallbackList(e, "USD"), t);
        const c = v.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: o, nGuidelinesLevel: l } = (0, f.$)(
            a,
            n,
            c,
            (0, B.ei)(r),
            (0, S.vS)(r),
          ),
          u = s.useCallback((t) => v.Get().OverridePrice(e, r, t), [e, r]),
          m = v.Get().GetPublishedPrice(e, r),
          p = v.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: g, nMaxPriceInCents: _ } = N(e, r),
          b = K(r, i, l);
        return s.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: p,
            nPublishedPriceInCents: m,
            nMinPriceInCents: g,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: b,
            nSuggestedPriceInCents: o,
            fnSetPrice: u,
          }),
          [i, p, m, g, _, b, o, u],
        );
      }
      const j = 90,
        q = 10;
      function K(e, r, t, i) {
        const a = v.Get().GetMinimumDiscountPrice(e),
          n = r ? Math.floor((100 * (r - a)) / r) : j,
          s = Math.min(j, Math.floor((100 * (t - 50)) / t));
        if (i) return r < a || n < q ? null : Math.max(Math.min(n, j), 0);
        return n < s ? n : null;
      }
      function A(e) {
        let [r, t] = s.useState(() => v.Get().BAnyPackagePriceBelowMin(e)),
          i = s.useCallback(() => {
            let r = v.Get().BAnyPackagePriceBelowMin(e);
            t(r);
          }, [e, t]);
        return (0, d.hL)(v.Get().GetPackageOverridesCallbackList(e), i), r;
      }
      function F(e) {
        return v.Get().BAnyPackagePriceBelowMin(e);
      }
      function N(e, r) {
        let t = v.Get();
        return {
          nMinPriceInCents: t.GetMinimumBasePrice(r),
          nMaxPriceInCents: t.m_setRecurringSubscriptions.has(e)
            ? t.GetPublishedPrice(e, r)
            : null,
        };
      }
      function x() {
        return s.useCallback((e, r, t) => {
          const i = v.Get().GetPrice(e, r);
          return (
            v.Get().OverridePrice(e, r, t),
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
      function V(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(v.Get().GetPriceGridCellCallbackList(e, "USD"), r),
          v.Get().m_mapPriceProposals.get(e)
        );
      }
      function Y() {
        return Array.from(v.Get().m_mapPriceProposals.values());
      }
      function $(e) {
        return v.Get().m_mapPriceProposals.get(e);
      }
      function H(e) {
        let r = !1;
        for (const t of v.Get().m_rgKnownPriceKeys) {
          let i = v.Get().GetPublishedPrice(e, t);
          r = r || (0 != i && void 0 !== i);
        }
        return r;
      }
      function Z(e) {
        const r = V(e),
          t = [];
        for (const i of v.Get().m_rgKnownPriceKeys) {
          const a = r.prices[i],
            n = v.Get().GetPublishedPrice(e, i);
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
      function J() {
        return v.Get().m_rgKnownPriceKeys;
      }
      function Q(e) {
        let r = v.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function X(e) {
        return s.useCallback(() => {
          v.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function ee(e) {
        return s.useCallback(() => {
          v.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function re(e) {
        return s.useCallback(() => {
          v.Get().CancelProposal(e);
        }, [e]);
      }
      function te() {
        const [e, r] = s.useState(v.Get().m_strDisplayPriceKey),
          t = v.Get().m_rgKnownPriceKeys,
          i = s.useCallback((e) => {
            r(e),
              (v.Get().m_strDisplayPriceKey = e),
              v.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: t, fnSetPriceKey: i };
      }
      function ie(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(v.Get().m_allPriceOverridesCallbackList, r),
          v.Get().BHasLocalPriceOverrides(e)
        );
      }
      function ae(e) {
        return v.Get().BHasLocalPriceOverrides(e);
      }
      function ne() {
        const [e, r] = s.useState(() => v.Get().GetAllLocalPriceOverrides());
        return (0, d.hL)(v.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function se(e) {
        return (0, _.q3)(() => v.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function ce() {
        return s.useCallback(
          () => v.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function oe() {
        return s.useCallback(() => v.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function le() {
        return v.Get().OverridePrice;
      }
      function ue() {
        return s.useCallback(
          (e, r, t) => v.Get().SubmitProposalToServer(e, r, t),
          [],
        );
      }
      function de() {
        return s.useCallback(
          (e, r) => v.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function me(e) {
        let r = [];
        const t = v.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (H(i)) continue;
          let e = !1;
          for (const r of t) {
            if (!v.Get().BPriceKeyRequired(r)) continue;
            if (!v.Get().GetPrice(i, r)) {
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
      t.d(r, { es: () => s, nm: () => m });
      var i = t(86328),
        a = t(56011),
        n = t(61859);
      function s(e, r) {
        const t = (0, n.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, n.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          a = e.original.appName,
          s = r.original.appName,
          c = a == t,
          o = a == i,
          l = !c && !o,
          u = s == t,
          d = s == i,
          m = !u && !d;
        if (l && m) return a.localeCompare(s);
        if (l || m) return l ? -1 : 1;
        if (c == u && o == d) {
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
      const c = (e) => e.nextElementSibling,
        o = (e) => e.previousElementSibling,
        l = (e, r) => {
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
        u = new Map([
          [i.Oy, (e) => l(e, o)],
          [i.JI, c],
          [i.BH, (e) => l(e, c)],
          [i.ek, o],
          [i.$R, (e) => l(e, c)],
          [i.wd, (e) => l(e, c)],
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
      function m(e) {
        let r = u.get(e.keyCode);
        if ((e.keyCode === i.$R && e.shiftKey && (r = (e) => l(e, o)), !r))
          return;
        var t;
        let n = r(
          ((t = e.currentTarget),
          (0, a.Kf)(t, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; n; ) {
          const t = d(n);
          if (t) return t.focus(), void e.preventDefault();
          n = r(n);
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
      t.d(r, { $: () => B, v: () => S });
      var i = t(7850),
        a = t(64238),
        n = t.n(a),
        s = t(69041),
        c = t(75659),
        o = t(11526),
        l = t(11820),
        u = t(73406),
        d = t(90534),
        m = t(83392),
        p = t(66922);
      function g(e) {
        const {
            size: r = "3",
            loading: t = !0,
            children: a,
            color: n,
            variant: s,
            ...c
          } = e,
          o = (0, p.f)("LoadingSpinner", s);
        return a || !t
          ? (0, i.jsxs)(d.az, {
              position: "relative",
              ...c,
              width: "fit-content",
              children: [
                (0, i.jsx)("div", {
                  "data-visibility": !t,
                  className: u.ChildContainer,
                  children: a,
                }),
                t &&
                  (0, i.jsx)(m.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)(_, { size: r, color: n, variant: o }),
                  }),
              ],
            })
          : (0, i.jsx)(_, { size: r, color: n, variant: o, ...c });
      }
      function _(e) {
        const { className: r, color: t, ...a } = (0, o.mz)(e, b);
        return (0, i.jsx)("div", {
          "data-accent-color": t,
          className: n()(r, u.Spinner),
          ...a,
        });
      }
      const b = [
        ...c.L,
        { prop: "size", responsive: !0, className: (e) => u[`Size-${e}`] },
        { prop: "variant", className: (e) => u[`Variant-${e}`] },
      ];
      var P = t(45699),
        f = t(78327);
      function h(e) {
        e.preventDefault();
      }
      const y = [
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
        B = function (e) {
          const {
              variant: r,
              size: t = "2",
              minWidth: a = "fit-content",
              color: c,
              loading: l,
              children: u,
              onClick: d,
              icon: m,
              focusable: _,
              navProps: b,
              ...h
            } = e,
            B = (0, f.Qn)(),
            S = l
              ? (0, i.jsx)(g, {
                  size: t,
                  color: c,
                  variant: "bright",
                  children: u,
                })
              : u,
            v = l ? void 0 : d,
            w = _ ?? b?.focusable ?? !!v,
            M = (0, p.f)("Button", r),
            C = {
              type: "button",
              ...(0, o.mz)(
                {
                  ...h,
                  variant: M,
                  size: t,
                  minWidth: a,
                  color: c,
                  className: n()(s.Button, m && s.Icon),
                  onClick: v,
                },
                y,
              ),
              children: S,
            };
          return B && (w || b)
            ? (0, i.jsx)(P.fu, { ...C, ...(b || {}), focusable: w })
            : (0, i.jsx)("button", { ...C });
        },
        S = function (e) {
          const {
              variant: r,
              size: t = "2",
              minWidth: a = "fit-content",
              disabled: c,
              icon: u,
              focusable: d,
              navProps: m,
              ...g
            } = e,
            _ = (0, f.Qn)(),
            b = (0, p.f)("Button", r),
            B = c ? h : void 0,
            S = (0, o.mz)(
              {
                onClick: B,
                "aria-disabled": c,
                ...g,
                variant: b,
                size: t,
                minWidth: a,
                className: n()(s.Button, u && s.Icon, (0, l.T)()),
              },
              y,
            );
          return _ && (d || m)
            ? (0, i.jsx)(P.Ii, { ...S, ...(m || {}), focusable: d })
            : (0, i.jsx)("a", { ...S });
        };
    },
    51877: (e, r, t) => {
      "use strict";
      t.d(r, { z: () => m });
      var i = t(7850),
        a = t(90626),
        n = t(64238),
        s = t.n(n),
        c = t(16180),
        o = t(83392),
        l = t(20187),
        u = t(80797);
      function d(e) {
        const { children: r, className: t, bDisabled: a, ...n } = e;
        return (0, i.jsxs)(o.s, {
          cursor: "default",
          gap: "2",
          className: s()(c.Option, a && c.Disabled),
          ...n,
          children: [
            (0, i.jsx)("div", { className: c.RadioCircle }),
            (0, i.jsx)(l.EY, { children: r }),
          ],
        });
      }
      const m = Object.assign(
          function (e) {
            const {
              value: r,
              onValueChange: t,
              options: a,
              getOptionLabel: n,
              disabled: s,
              ...c
            } = e;
            return (0, i.jsx)(m.Root, {
              value: r,
              onValueChange: t,
              disabled: s,
              ...c,
              children: a.map((e) => {
                const r = n ? n(e) : e;
                return (0, i.jsx)(m.Option, { value: e, children: r }, r);
              }),
            });
          },
          {
            Root: function (e) {
              const {
                  value: r,
                  onValueChange: t,
                  disabled: n,
                  render: s,
                  ...c
                } = e,
                l = (0, a.useRef)(null),
                d = (0, a.useCallback)((e, r) => {
                  if (!l.current) return;
                  const t = [...l.current.querySelectorAll("[data-radio-id]")];
                  if (0 !== t.length)
                    for (let i = 0; i < t.length; i++) {
                      const a = t[i];
                      if (!a.dataset.radioId) continue;
                      if (a.dataset.radioId === e) {
                        const e = t[(i + r + t.length) % t.length];
                        e.click(), e.focus();
                      }
                    }
                }, []),
                m = (0, a.useCallback)((e) => d(e, 1), [d]),
                g = (0, a.useCallback)((e) => d(e, -1), [d]),
                _ = (0, a.useMemo)(
                  () => ({
                    value: r,
                    onValueChange: t,
                    bDisabled: n,
                    onSelectNext: m,
                    onSelectPrev: g,
                  }),
                  [r, t, n, m, g],
                ),
                b = { role: "radiogroup", "aria-disabled": n, ref: l, ...c },
                P = (0, i.jsx)(o.s, {
                  direction: "column",
                  gap: "2",
                  role: "radiogroup",
                  "aria-disabled": n,
                  ...c,
                }),
                f = (0, u.Q)(s, P, b);
              return (0, i.jsx)(p, { value: _, children: f });
            },
            Option: function (e) {
              const { value: r, ref: t, children: n, render: s } = e,
                c = (0, a.useContext)(p),
                o = (0, a.useId)();
              if (!c)
                return (
                  console.error(
                    "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
                  ),
                  null
                );
              const {
                  value: l,
                  onValueChange: m,
                  bDisabled: g,
                  onSelectNext: _,
                  onSelectPrev: b,
                } = c,
                P = l === r,
                f = () => {
                  g || P || m(r);
                },
                h = {
                  role: "radio",
                  "aria-checked": P,
                  "aria-disabled": g,
                  "data-radio-id": o,
                  onClick: f,
                  onKeyDown: (e) => {
                    if (!g)
                      switch (e.key) {
                        case " ":
                          f(), e.preventDefault(), e.stopPropagation();
                          break;
                        case "ArrowRight":
                        case "ArrowDown":
                          _(o), e.preventDefault(), e.stopPropagation();
                          break;
                        case "ArrowLeft":
                        case "ArrowUp":
                          b(o), e.preventDefault(), e.stopPropagation();
                      }
                  },
                  tabIndex: P ? 0 : -1,
                  ref: t,
                  children: n,
                },
                y = (0, i.jsx)(d, { bDisabled: g });
              return (0, u.Q)(s, y, h, { bSelected: P, bDisabled: g });
            },
          },
        ),
        p = (0, a.createContext)(null);
    },
    87718: (e, r, t) => {
      "use strict";
      t.d(r, {
        bS: () => n,
        de: () => c,
        j4: () => l,
        k8: () => s,
        uF: () => o,
        vS: () => u,
      });
      var i = t(88267),
        a = t(29848);
      function n(e) {
        return i.CS;
      }
      function s(e) {
        switch (e) {
          case a._S:
            return "usd_cis";
          case a.aL:
            return "usd_sasia";
          case a.M_:
            return "usd_latam";
          case a.aY:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function c(e) {
        switch (e) {
          case a._S:
            return "CIS";
          case a.aL:
            return "SASIA";
          case a.M_:
            return "LATAM";
          case a.aY:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function o(e) {
        switch (e) {
          case "CIS":
            return a._S;
          case "SASIA":
            return a.aL;
          case "LATAM":
            return a.M_;
          case "MENA":
            return a.aY;
          default:
            return a.YS;
        }
      }
      function l(e) {
        switch (e) {
          case a._S:
            return "The Commonwealth of Independent Stats";
          case a.aL:
            return "South Asia";
          case a.M_:
            return "Latin America";
          case a.aY:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function u(e) {
        switch (e?.toLowerCase()) {
          case "usd_cis":
            return a._S;
          case "usd_sasia":
            return a.aL;
          case "usd_latam":
            return a.M_;
          case "usd_mena":
            return a.aY;
          default:
            return a.YS;
        }
      }
    },
    87700: (e, r, t) => {
      "use strict";
      t.d(r, { Bb: () => u, MA: () => l, jY: () => o });
      var i = t(7850),
        a = t(69413),
        n = t(90626),
        s = t(48174);
      const c = n.createContext({
        eConversionMethod: a.Y5.lZ,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function o(e) {
        const { eInitialConversionMethod: r } = e,
          t = (0, s.cT)(),
          [o, l] = n.useState(r || a.Y5.lZ),
          u = n.useMemo(() => {
            const e = t ? t.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: o,
              setConversionMethod: l,
              rgAvailableConversionMethods: e,
            };
          }, [o, l, t]);
        return (0, i.jsx)(c.Provider, { value: u, children: e.children });
      }
      function l() {
        return n.useContext(c);
      }
      function u() {
        return n.useContext(c).eConversionMethod;
      }
    },
    31031: (e, r, t) => {
      "use strict";
      t.d(r, { $: () => s });
      var i = t(29848),
        a = t(88267),
        n = t(81393);
      function s(e, r, t, s, c) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let o = null;
        for (let r of e.GetUSDPricePointsInCents())
          if (r >= t) {
            o = r;
            break;
          }
        const l = c && c < i.Hc;
        if ((s == a.CS && !l) || !o)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const u = e.GetRecommendPrice(o, s, c, r),
          d = e.GetRecommendPrice(o, a.CS, void 0, r);
        if (
          ((0, n.wT)(
            u,
            `Missing requested currency guide for  ${o}/${s}/${c}/${r}`,
          ),
          (0, n.wT)(d, `Missing usd guide for  ${o}/${c}/${r}`),
          !u || !d)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let m = u.price;
        const p = d.price;
        if (p != t) {
          const e = t / p;
          (o *= e), (m = Math.ceil(m * e));
        }
        return { nSuggestedPriceInCents: m, nGuidelinesLevel: o };
      }
    },
    48174: (e, r, t) => {
      "use strict";
      t.d(r, { mj: () => b, gC: () => P, cT: () => _ });
      var i = t(90626),
        a = t(29848),
        n = t(88267),
        s = t(69413);
      const c = s.Y5.lZ;
      class o {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(e, r, t, i = c) {
          return `${e}_${r}_${t || a.YS}_${i}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(s.Y5.lZ)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, r) {
          return r
            ? e == n.CS && this.m_setSupportedRegions.has(r)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, r, t, i = c) {
          const a = this.GetKey(e, r, t, i);
          return this.m_mapKeyToGuidePrice.get(a);
        }
        GetScaledRecommendedPrice(e, r, t, i = c) {
          let a = -1,
            n = -1;
          for (const r of this.m_mapUSDPrice.get(i).keys()) {
            const t = Math.abs(r - e);
            (-1 == a || t < n) && ((a = r), (n = t));
          }
          const s = this.m_mapUSDPrice.get(i).get(a),
            o = t
              ? s.region_prices.find((e) => e.region_code == t)
              : s.currency_prices.find((e) => e.currency_code == r),
            l = e / a;
          return {
            currency_code: o?.currency_code,
            region_code: o?.region_code,
            price: Math.ceil((o?.price || 0) * l),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(e) {
          let r = new Set();
          e.forEach((e) => {
            const t = e.convert_method ?? c;
            this.m_setConversionMethod.add(t),
              this.m_mapUSDPrice.has(t) || this.m_mapUSDPrice.set(t, new Map());
            this.m_mapUSDPrice.get(t).set(e.usd_price, e),
              r.add(e.usd_price),
              e.currency_prices.forEach((r) => {
                const t = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  a.YS,
                  e.convert_method || c,
                );
                this.m_mapKeyToGuidePrice.set(t, r),
                  this.m_setSupportedCurrencies.add(r.currency_code);
              }),
              e.region_prices.forEach((r) => {
                const t = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  r.region_code,
                  e.convert_method || c,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(t, r),
                  this.m_setSupportedRegions.add(r.region_code),
                  this.m_setConversionMethod.has(s.Y5.bA))
                ) {
                  const t = {
                      currency_code: n.CS,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    i = this.GetKey(e.usd_price, n.CS, r.region_code, s.Y5.bA);
                  this.m_mapKeyToGuidePrice.set(i, t);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(r.keys()));
        }
      }
      var l = t(7860),
        u = t(24484);
      var d = t(87700),
        m = t(20194),
        p = t(81393),
        g = t(72255);
      function _() {
        const e = (0, m.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, u.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = l.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return (0, i.useMemo)(() => (e.data ? new o(e.data) : null), [e.data]);
      }
      function b() {
        return ["PricingGuideline"];
      }
      function P(e) {
        const r = _(),
          t = (0, d.Bb)();
        return {
          fnApplyGuidelines: (0, i.useCallback)(
            (i, s, c) => {
              if (
                ((0, p.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (let a = n.CS; a < n.mh; ++a) {
                  const n = r.GetRecommendPrice(s, a, void 0, c ?? t)?.price;
                  if (n && n > 0) {
                    const r = (0, g.M1)(a);
                    e(i, r, n);
                  }
                }
                for (let o = a._S; o < a.Hc; ++o) {
                  const a = n.CS,
                    l = r.GetRecommendPrice(s, a, o, c ?? t)?.price;
                  if (l && l > 0) {
                    const r = (0, g.pd)(a, o).toUpperCase();
                    e(i, r, l);
                  }
                }
              }
            },
            [t, e, r],
          ),
        };
      }
    },
    4160: (e, r, t) => {
      "use strict";
      t.d(r, { Al: () => a, Zo: () => s, nD: () => i, pJ: () => n });
      const i = 0,
        a = 1,
        n = 3,
        s = 4;
    },
    69413: (e, r, t) => {
      "use strict";
      t.d(r, { Y5: () => i });
      var i = {};
      t.r(i), t.d(i, { bA: () => g, lZ: () => m, KC: () => p });
      var a = t(80613),
        n = t.n(a),
        s = t(89068),
        c = t(56545);
      class o extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.descriptors || s.Sg(o.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  descriptors: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readString,
                    bw: s.gp.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readString,
                    bw: s.gp.writeRepeatedString,
                  },
                  official_id: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  esrb_online_music_not_rated: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  esrb_online_interactions_not_rated: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AppRatingAuxData";
        }
      }
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.rating_agency || s.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  rating_agency: {
                    n: 1,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  rating: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  source: { n: 3, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  banned: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  required_age: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  use_age_gate: { n: 6, br: s.qM.readBool, bw: s.gp.writeBool },
                  aux_data: { n: 7, c: o },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AppRating";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.elanguage || s.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  elanguage: { n: 1, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  text: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyLocalizedText";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.customer_notes || s.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  customer_notes: { n: 1, c: u, r: !0, q: !0 },
                  customer_notes_ai: { n: 2, c: u, r: !0, q: !0 },
                  mature_tags: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  has_mature_content: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  ai_external_service_name: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  ai_external_service_url: {
                    n: 6,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyDisclosure";
        }
      }
      const m = 1,
        p = 2,
        g = 3;
      a.Message;
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.survey_section || s.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  survey_section: {
                    n: 1,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  time_reviewed: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  accountid_reviewer: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SurveySectionReviewed";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.content_category || s.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  content_category: {
                    n: 1,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  questionaire_categories: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameContent";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.rating_agency || s.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  rating_agency: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  rating: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  required_age: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  descriptors: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: s.qM.readString,
                    bw: s.gp.writeRepeatedString,
                  },
                  banned: { n: 5, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = s.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameRating";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.timestamp_generated || s.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  timestamp_generated: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  generated_version: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  ratings: { n: 3, c: P, r: !0, q: !0 },
                  content_categories: { n: 4, c: b, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GeneratedGameRatings";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.desc_code_generated || s.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  desc_code_generated: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  desc_copyright_infringement_guarantee: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  desc_content_moderation_strategy: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  external_service_name: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  external_service_url: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  desc_external_service_how_content_available_to_players: {
                    n: 6,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  desc_external_service_monetization: {
                    n: 7,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AIContentSurvey";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.disclosure || s.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  disclosure: { n: 1, c: d },
                  interactive_elements: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentSurveyAuxData";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.id || s.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  id: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentDescriptor";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.surveyid || s.Sg(S.M()),
            a.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  surveyid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  state: { n: 2, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  descriptors: { n: 3, c: B, r: !0, q: !0 },
                  timestamp_started: {
                    n: 4,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  timestamp_finished: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  accountid: {
                    n: 7,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  developer_notes: {
                    n: 8,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  keyvalues: {
                    n: 9,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  ratings: { n: 10, c: f },
                  categories: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  ai_survey: { n: 12, c: h },
                  internal_notes: {
                    n: 13,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  all_ratings: { n: 14, c: l, r: !0, q: !0 },
                  sections_reviewed: { n: 15, c: _, r: !0, q: !0 },
                  disclosure: { n: 16, c: d },
                  inherited_surveyid: {
                    n: 17,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  started_from_scratch: {
                    n: 18,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  survey_aux_data: { n: 19, c: y },
                  source: { n: 20, br: s.qM.readEnum, bw: s.gp.writeEnum },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentDescriptorSurvey";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || s.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  include_descriptors: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_keyvalues: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_categories: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_ai_survey: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_all_ratings: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetActiveSurvey_Request";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || s.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  include_descriptors: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_keyvalues: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_categories: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_ai_survey: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_all_ratings: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetWorkingSurvey_Request";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.surveyid || s.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  surveyid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  survey: { n: 2, c: S },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppContentDescriptors_GetSurvey_Response";
        }
      }
      var C;
      !(function (e) {
        (e.GetActiveSurvey = function (e, r, t) {
          return e.SendMsg(
            "AppContentDescriptor.GetActiveSurvey#1",
            (0, c.I8)(v, r, t),
            M,
            { bConstMethod: !0, ePrivilege: 7 },
          );
        }),
          (e.GetWorkingSurvey = function (e, r, t) {
            return e.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, c.I8)(w, r, t),
              M,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          });
      })(C || (C = {}));
    },
  },
]);
