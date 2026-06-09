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
        uw: () => d,
        vs: () => h,
        ww: () => p,
        xi: () => c,
        zt: () => u,
      });
      var i = t(90626),
        a = t(6144),
        s = t(73745),
        n = t(78327);
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
          "dev" == n.TS.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, n.Tc)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, n.Tc)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != n.TS.WEB_UNIVERSE && "beta" != n.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != n.TS.WEB_UNIVERSE ||
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
        return (0, s.hL)(o.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function h() {
        return i.useMemo(
          () => (0, n.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    69423: (e, r, t) => {
      "use strict";
      t.d(r, {
        $i: () => le,
        Ao: () => x,
        Bt: () => ue,
        Ci: () => se,
        Dl: () => A,
        FR: () => O,
        FX: () => q,
        Gs: () => b,
        NC: () => oe,
        Oc: () => K,
        RO: () => H,
        T7: () => te,
        T_: () => ee,
        U3: () => J,
        Wx: () => D,
        XB: () => ie,
        XK: () => Q,
        Y2: () => w,
        Y5: () => z,
        YB: () => ne,
        Zz: () => ce,
        _A: () => T,
        d$: () => F,
        fZ: () => B,
        fr: () => re,
        h4: () => de,
        hm: () => Y,
        iy: () => ae,
        mP: () => X,
        mv: () => M,
        nT: () => W,
        oL: () => E,
        oj: () => U,
        tn: () => j,
        v4: () => $,
        ww: () => pe,
        xQ: () => R,
      });
      var i = t(34629),
        a = t(41735),
        s = t.n(a),
        n = t(90626),
        c = t(14947),
        o = t(37085),
        l = t(68797),
        u = t(6144),
        d = t(73745),
        p = t(41338),
        P = t(78327),
        g = t(96745),
        m = t(65946),
        h = t(81393),
        _ = t(4160),
        f = t(31031),
        S = t(48174),
        v = t(87700),
        G = t(72255),
        y = t(87718);
      class k {
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
            k.s_Singleton || ((k.s_Singleton = new k()), k.s_Singleton.Init()),
            k.s_Singleton
          );
        }
        constructor() {
          (0, c.Gn)(this),
            "dev" == P.TS.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = (0, P.Tc)("base_prices", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
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
                  (0, G.IG)(e)
                    ? (this.m_mapPackageCountryOverridePrice.has(i) ||
                        this.m_mapPackageCountryOverridePrice.set(i, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(i)
                        .set(e.toUpperCase(), t[e]))
                    : a.set(e, t[e]);
              }
            else
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, P.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const t = (0, P.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
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
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const i = (0, P.Tc)("valid_price_keys", "application_config");
          ("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackagePricingStore loading valid price keys: ",
              i,
            ),
            i &&
              (this.BIsPriceKeyValid(i)
                ? (this.m_rgKnownPriceKeys = i.sort((e, r) =>
                    (0, p.kd)(L(e), L(r)),
                  ))
                : "dev" == P.TS.WEB_UNIVERSE &&
                  console.error("Invalid price keys"));
          const a = (0, P.Tc)("currency_data", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
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
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const s = (0, P.Tc)("currency_descriptions", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                s,
              ),
            s)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(s))
              for (let e in s) {
                const r = s[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else
              "dev" == P.TS.WEB_UNIVERSE &&
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
          return (0, G.IG)(r)
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
          (0, h.wT)(
            r.length == t.length,
            `price list size doesn't match ${r.length} != ${t.length}`,
          );
          for (let i = 0; i < r.length; ++i) {
            const a = r[i],
              s = t[i];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              s == this.GetSavedPrice(e, a)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(a)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(a, s),
              this.GetPriceGridCellCallbackList(e, a).Dispatch(s);
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
            e.sort(C),
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
            submitterID: P.iA.accountid,
            prices: {},
            eState: _.Al,
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
            n = (0, P.Tc)("publisherid", "application_config"),
            c =
              P.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              n +
              "/" +
              e,
            u = new FormData();
          u.append("sessionid", P.TS.SESSIONID),
            u.append("partner_will_publish", r ? "1" : "0"),
            u.append("prices", a);
          let d = null;
          try {
            const r = await s().post(c, u, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (
              200 == r?.status &&
              r.data?.success == o.R &&
              r.data.eState != _.nD
            ) {
              if (r.data.eState == _.pJ) {
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
          const p = (0, l.H)(d);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              p.strErrorMsg,
              p,
            ),
            d?.response?.data ?? { success: o.zi }
          );
        }
        async PublishApprovedProposal(e, r, t = 0) {
          const i = this.m_mapPriceProposals.get(e);
          if (i?.eState != _.Zo || !i?.proposalKey) return { success: o.nO };
          const a = (0, P.Tc)("publisherid", "application_config"),
            n =
              P.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              a +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", P.TS.SESSIONID),
            c.append("proposal_key", i.proposalKey);
          let u = null;
          try {
            const a = await s().post(n, c, {
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
          const i = (0, P.Tc)("publisherid", "application_config"),
            a =
              P.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            n = new FormData();
          n.append("sessionid", P.TS.SESSIONID),
            n.append("proposal_key", t.proposalKey);
          let c = null;
          try {
            const t = await s().post(a, n, {
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
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = j(e, r);
            if (t < i) return !0;
          }
          return !1;
        }
      }
      function C(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const t = (0, g.ww)(e.packageID),
            i = (0, g.ww)(r.packageID);
          return (0, p.kd)(t, i);
        }
        return (0, p.kd)(L(e.strPriceKey), L(r.strPriceKey));
      }
      function b(e) {
        const r = e.split("_")[0];
        return k.Get().m_mapCurrencyData.get(r);
      }
      function D(e, r) {
        if (void 0 === r) return ["", "", ""];
        const t = b(r) ?? b("USD");
        let i = "";
        if ("number" == typeof e) {
          let r = e.toString();
          r.length < 3 && (r = (1 == r.length ? "0" : "") + "0" + r);
          const a = r.length - 2;
          for (let e = 0; e < a; e++) {
            const s = r.charAt(e);
            (i += s),
              e < a - 1 &&
                (a - e - 1) % 3 == 0 &&
                "-" != s &&
                (i += t.strThousandsSeparator);
          }
          t.bWholeUnitsOnly ||
            ((i += t.strDecimalSymbol), (i += r.substr(r.length - 2)));
        }
        return t.bSymbolIsPrefix
          ? [t.strSymbol + t.strSymbolAndNumberSeparator, i, ""]
          : ["", i, t.strSymbolAndNumberSeparator + t.strSymbol];
      }
      (0, i.Cg)([c.sH], k.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.Cg)([d.oI], k.prototype, "OverridePrice", null),
        (0, i.Cg)([c.XI], k.prototype, "UpdateOverridesPerPriceKey", null);
      const I = new Map([
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
      function L(e) {
        return I.has(e) ? I.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function O(e, r) {
        return k.Get().GetPrice(e, r);
      }
      function w(e) {
        return k.Get().GetPublishedCountryOverrides(e);
      }
      function E(e, r) {
        return k.Get().GetPublishedPriceCountryOverride(e, r);
      }
      function M(e, r) {
        return k.Get().GetPublishedPrice(e, r);
      }
      function K(e, r) {
        return k.Get().GetProposedPrice(e, r);
      }
      function A(e, r) {
        return k.Get().GetLocalOverridePrice(e, r);
      }
      function U(e) {
        const r = k.Get().m_strDisplayPriceKey;
        return D(k.Get().GetPrice(e, r), r).join("");
      }
      function B(e) {
        const [r, t] = n.useState(k.Get().m_strDisplayPriceKey);
        return (
          (0, d.hL)(k.Get().m_displayPriceKeyCallbackList, t),
          (function (e, r) {
            const [t, i] = n.useState(k.Get().GetPrice(e, r));
            return (
              (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, r), i),
              n.useEffect(() => i(k.Get().GetPrice(e, r)), [e, r]),
              D(t, r).join("")
            );
          })(e, r)
        );
      }
      function T() {
        const e = (0, g.Yr)(),
          r = (0, S.cT)(),
          t = (0, v.Bb)();
        return n.useCallback(
          () =>
            (function (e, r, t) {
              let i = 0;
              for (const a of e) {
                const e = new Array(),
                  s = new Array(),
                  n = k.Get().GetPrice(a, "USD");
                if (n && !(n <= 0)) {
                  for (const i of k.Get().m_rgKnownPriceKeys) {
                    if ("USD" == i) continue;
                    const n = k.Get().GetPrice(a, "USD"),
                      { nSuggestedPriceInCents: c, nGuidelinesLevel: o } = (0,
                      f.$)(r, t, n, (0, G.ei)(i), (0, y.vS)(i));
                    null !== o &&
                      k.Get().GetPrice(a, i) != c &&
                      (e.push(i), s.push(c));
                  }
                  e.length > 0 &&
                    (k.Get().OverridePricesForPackage(a, e, s), (i += 1));
                }
              }
              i > 0 && k.Get().DispatchPriceOverridesCallbacks();
            })(e, r, t),
          [e, r, t],
        );
      }
      function R(e, r) {
        const t = (0, d.CH)();
        (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, r), t);
        const i = k.Get().GetPrice(e, r),
          a = (0, S.cT)(),
          s = (0, v.Bb)();
        (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, "USD"), t);
        const c = k.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: o, nGuidelinesLevel: l } = (0, f.$)(
            a,
            s,
            c,
            (0, G.ei)(r),
            (0, y.vS)(r),
          ),
          u = n.useCallback((t) => k.Get().OverridePrice(e, r, t), [e, r]),
          p = k.Get().GetPublishedPrice(e, r),
          P = k.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: g, nMaxPriceInCents: m } = j(e, r),
          h = x(r, i, l);
        return n.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: P,
            nPublishedPriceInCents: p,
            nMinPriceInCents: g,
            nMaxPriceInCents: m,
            nMaxDiscountPercentage: h,
            nSuggestedPriceInCents: o,
            fnSetPrice: u,
          }),
          [i, P, p, g, m, h, o, u],
        );
      }
      const N = 90,
        V = 10;
      function x(e, r, t, i) {
        const a = k.Get().GetMinimumDiscountPrice(e),
          s = r ? Math.floor((100 * (r - a)) / r) : N,
          n = Math.min(N, Math.floor((100 * (t - 50)) / t));
        if (i) return r < a || s < V ? null : Math.max(Math.min(s, N), 0);
        return s < n ? s : null;
      }
      function W(e) {
        let [r, t] = n.useState(() => k.Get().BAnyPackagePriceBelowMin(e)),
          i = n.useCallback(() => {
            let r = k.Get().BAnyPackagePriceBelowMin(e);
            t(r);
          }, [e, t]);
        return (0, d.hL)(k.Get().GetPackageOverridesCallbackList(e), i), r;
      }
      function z(e) {
        return k.Get().BAnyPackagePriceBelowMin(e);
      }
      function j(e, r) {
        let t = k.Get();
        return {
          nMinPriceInCents: t.GetMinimumBasePrice(r),
          nMaxPriceInCents: t.m_setRecurringSubscriptions.has(e)
            ? t.GetPublishedPrice(e, r)
            : null,
        };
      }
      function Y() {
        return n.useCallback((e, r, t) => {
          const i = k.Get().GetPrice(e, r);
          return (
            k.Get().OverridePrice(e, r, t),
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
      function F(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, "USD"), r),
          k.Get().m_mapPriceProposals.get(e)
        );
      }
      function $() {
        return Array.from(k.Get().m_mapPriceProposals.values());
      }
      function H(e) {
        return k.Get().m_mapPriceProposals.get(e);
      }
      function Z(e) {
        let r = !1;
        for (const t of k.Get().m_rgKnownPriceKeys) {
          let i = k.Get().GetPublishedPrice(e, t);
          r = r || (0 != i && void 0 !== i);
        }
        return r;
      }
      function q(e) {
        const r = F(e),
          t = [];
        for (const i of k.Get().m_rgKnownPriceKeys) {
          const a = r.prices[i],
            s = k.Get().GetPublishedPrice(e, i);
          a != s &&
            t.push({
              packageID: e,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: s,
            });
        }
        return t;
      }
      function J() {
        return k.Get().m_rgKnownPriceKeys;
      }
      function Q(e) {
        let r = k.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function X(e) {
        return n.useCallback(() => {
          k.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function ee(e) {
        return n.useCallback(() => {
          k.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function re(e) {
        return n.useCallback(() => {
          k.Get().CancelProposal(e);
        }, [e]);
      }
      function te() {
        const [e, r] = n.useState(k.Get().m_strDisplayPriceKey),
          t = k.Get().m_rgKnownPriceKeys,
          i = n.useCallback((e) => {
            r(e),
              (k.Get().m_strDisplayPriceKey = e),
              k.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: t, fnSetPriceKey: i };
      }
      function ie(e) {
        const r = (0, d.CH)();
        return (
          (0, d.hL)(k.Get().m_allPriceOverridesCallbackList, r),
          k.Get().BHasLocalPriceOverrides(e)
        );
      }
      function ae(e) {
        return k.Get().BHasLocalPriceOverrides(e);
      }
      function se() {
        const [e, r] = n.useState(() => k.Get().GetAllLocalPriceOverrides());
        return (0, d.hL)(k.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function ne(e) {
        return (0, m.q3)(() => k.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function ce() {
        return n.useCallback(
          () => k.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function oe() {
        return n.useCallback(() => k.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function le() {
        return k.Get().OverridePrice;
      }
      function ue() {
        return n.useCallback(
          (e, r, t) => k.Get().SubmitProposalToServer(e, r, t),
          [],
        );
      }
      function de() {
        return n.useCallback(
          (e, r) => k.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function pe(e) {
        let r = [];
        const t = k.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (Z(i)) continue;
          let e = !1;
          for (const r of t) {
            if (!k.Get().BPriceKeyRequired(r)) continue;
            if (!k.Get().GetPrice(i, r)) {
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
      t.d(r, { es: () => n, nm: () => p });
      var i = t(86328),
        a = t(56011),
        s = t(61859);
      function n(e, r) {
        const t = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          a = e.original.appName,
          n = r.original.appName,
          c = a == t,
          o = a == i,
          l = !c && !o,
          u = n == t,
          d = n == i,
          p = !u && !d;
        if (l && p) return a.localeCompare(n);
        if (l || p) return l ? -1 : 1;
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
      function p(e) {
        let r = u.get(e.keyCode);
        if ((e.keyCode === i.$R && e.shiftKey && (r = (e) => l(e, o)), !r))
          return;
        var t;
        let s = r(
          ((t = e.currentTarget),
          (0, a.Kf)(t, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; s; ) {
          const t = d(s);
          if (t) return t.focus(), void e.preventDefault();
          s = r(s);
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
      t.d(r, { $: () => v, v: () => G });
      var i = t(7850),
        a = t(64238),
        s = t.n(a),
        n = t(69041),
        c = t(75659),
        o = t(11526),
        l = t(11820),
        u = t(73406),
        d = t(90534),
        p = t(83392);
      function P(e) {
        const {
          size: r = "3",
          loading: t = !0,
          children: a,
          color: s,
          variant: n,
          ...c
        } = e;
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
                  (0, i.jsx)(p.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)(g, { size: r, color: s, variant: n }),
                  }),
              ],
            })
          : (0, i.jsx)(g, { size: r, color: s, variant: n, ...c });
      }
      function g(e) {
        const { className: r, color: t, ...a } = (0, o.mz)(e, m);
        return (0, i.jsx)("div", {
          "data-accent-color": t,
          className: s()(r, u.Spinner),
          ...a,
        });
      }
      const m = [
        ...c.L,
        { prop: "size", responsive: !0, className: (e) => u[`Size-${e}`] },
        { prop: "variant", className: (e) => u[`Variant-${e}`] },
      ];
      var h = t(45699),
        _ = t(8527);
      function f(e) {
        e.preventDefault();
      }
      const S = [
          ...c.L,
          { prop: "size", responsive: !0, className: (e) => n[`Size-${e}`] },
          { prop: "variant", className: (e) => n[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: n.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: n.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        v = function (e) {
          const {
              variant: r = "default",
              size: t = "2",
              minWidth: a = "fit-content",
              color: c,
              loading: l,
              children: u,
              onClick: d,
              icon: p,
              focusable: g,
              navProps: m,
              ...f
            } = e,
            v = l
              ? (0, i.jsx)(P, {
                  size: t,
                  color: c,
                  variant: "bright",
                  children: u,
                })
              : u,
            G = l ? void 0 : d,
            y = g ?? m?.focusable ?? !!G,
            k = {
              type: "button",
              ...(0, o.mz)(
                {
                  ...f,
                  variant: r,
                  size: t,
                  minWidth: a,
                  color: c,
                  className: s()(n.Button, p && n.Icon),
                  onClick: G,
                },
                S,
              ),
              children: v,
            };
          return _.TS.IN_GAMEPADUI && (y || m)
            ? (0, i.jsx)(h.fu, { ...k, ...(m || {}), focusable: y })
            : (0, i.jsx)("button", { ...k });
        },
        G = function (e) {
          const {
              variant: r = "default",
              size: t = "2",
              minWidth: a = "fit-content",
              disabled: c,
              icon: u,
              focusable: d,
              navProps: p,
              ...P
            } = e,
            g = c ? f : void 0,
            m = (0, o.mz)(
              {
                onClick: g,
                ...P,
                variant: r,
                size: t,
                minWidth: a,
                className: s()(n.Button, u && n.Icon, (0, l.T)()),
              },
              S,
            );
          return _.TS.IN_GAMEPADUI && (d || p)
            ? (0, i.jsx)(h.Ii, { ...m, ...(p || {}), focusable: d })
            : (0, i.jsx)("a", { ...m });
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
        bS: () => s,
        de: () => c,
        j4: () => l,
        k8: () => n,
        uF: () => o,
        vS: () => u,
      });
      var i = t(88267),
        a = t(29848);
      function s(e) {
        return i.CS;
      }
      function n(e) {
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
        a = t(62113),
        s = t(90626),
        n = t(48174);
      const c = s.createContext({
        eConversionMethod: a.Y5.lZ,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function o(e) {
        const { eInitialConversionMethod: r } = e,
          t = (0, n.cT)(),
          [o, l] = s.useState(r || a.Y5.lZ),
          u = s.useMemo(() => {
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
        return s.useContext(c);
      }
      function u() {
        return s.useContext(c).eConversionMethod;
      }
    },
    31031: (e, r, t) => {
      "use strict";
      t.d(r, { $: () => n });
      var i = t(29848),
        a = t(88267),
        s = t(81393);
      function n(e, r, t, n, c) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let o = null;
        for (let r of e.GetUSDPricePointsInCents())
          if (r >= t) {
            o = r;
            break;
          }
        const l = c && c < i.Hc;
        if ((n == a.CS && !l) || !o)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const u = e.GetRecommendPrice(o, n, c, r),
          d = e.GetRecommendPrice(o, a.CS, void 0, r);
        if (
          ((0, s.wT)(
            u,
            `Missing requested currency guide for  ${o}/${n}/${c}/${r}`,
          ),
          (0, s.wT)(d, `Missing usd guide for  ${o}/${c}/${r}`),
          !u || !d)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let p = u.price;
        const P = d.price;
        if (P != t) {
          const e = t / P;
          (o *= e), (p = Math.ceil(p * e));
        }
        return { nSuggestedPriceInCents: p, nGuidelinesLevel: o };
      }
    },
    48174: (e, r, t) => {
      "use strict";
      t.d(r, { mj: () => h, gC: () => _, cT: () => m });
      var i = t(90626),
        a = t(29848),
        s = t(88267),
        n = t(62113);
      const c = n.Y5.lZ;
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
          return Array.from(this.m_mapUSDPrice.get(n.Y5.lZ)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, r) {
          return r
            ? e == s.CS && this.m_setSupportedRegions.has(r)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, r, t, i = c) {
          const a = this.GetKey(e, r, t, i);
          return this.m_mapKeyToGuidePrice.get(a);
        }
        GetScaledRecommendedPrice(e, r, t, i = c) {
          let a = -1,
            s = -1;
          for (const r of this.m_mapUSDPrice.get(i).keys()) {
            const t = Math.abs(r - e);
            (-1 == a || t < s) && ((a = r), (s = t));
          }
          const n = this.m_mapUSDPrice.get(i).get(a),
            o = t
              ? n.region_prices.find((e) => e.region_code == t)
              : n.currency_prices.find((e) => e.currency_code == r),
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
                  this.m_setConversionMethod.has(n.Y5.bA))
                ) {
                  const t = {
                      currency_code: s.CS,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    i = this.GetKey(e.usd_price, s.CS, r.region_code, n.Y5.bA);
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
        p = t(20194),
        P = t(81393),
        g = t(72255);
      function m() {
        const e = (0, p.I)({
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
      function h() {
        return ["PricingGuideline"];
      }
      function _(e) {
        const r = m(),
          t = (0, d.Bb)();
        return {
          fnApplyGuidelines: (0, i.useCallback)(
            (i, n, c) => {
              if (
                ((0, P.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (let a = s.CS; a < s.mh; ++a) {
                  const s = r.GetRecommendPrice(n, a, void 0, c ?? t)?.price;
                  if (s && s > 0) {
                    const r = (0, g.M1)(a);
                    e(i, r, s);
                  }
                }
                for (let o = a._S; o < a.Hc; ++o) {
                  const a = s.CS,
                    l = r.GetRecommendPrice(n, a, o, c ?? t)?.price;
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
      t.d(r, { Al: () => a, Zo: () => n, nD: () => i, pJ: () => s });
      const i = 0,
        a = 1,
        s = 3,
        n = 4;
    },
    62113: (e, r, t) => {
      "use strict";
      t.d(r, { Y5: () => i });
      var i = {};
      t.r(i), t.d(i, { bA: () => c, lZ: () => s, KC: () => n });
      var a = t(80613);
      t(89068);
      const s = 1,
        n = 2,
        c = 3;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
    },
  },
]);
