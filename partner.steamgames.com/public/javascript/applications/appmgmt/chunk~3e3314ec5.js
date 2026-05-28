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
    96745: (e, t, r) => {
      "use strict";
      r.d(t, {
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
      var i = r(90626),
        a = r(6144),
        s = r(73745),
        n = r(78327);
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
          const t = e
              .getState()
              .columnFilters.find((e) => "packageName" === e.id)?.value,
            r = new URL(window.location.href);
          t != decodeURIComponent(r.searchParams.get(c)) &&
            (t
              ? r.searchParams.set(c, encodeURIComponent(t))
              : r.searchParams.delete(c),
            window.history.replaceState({}, "", r.toString()));
        }
        UpdateVisiblePackageList(e) {
          const t = e.getVisibleRows().filter((e) => !e.getCanExpand());
          (this.m_rgVisiblePackageIDs = []),
            t.forEach((e) =>
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
        let t = o.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function P() {
        return i.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function g(e) {
        o.Get().SetVisiblePackageList(e);
      }
      function m() {
        const [e, t] = i.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, s.hL)(o.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function h() {
        return i.useMemo(
          () => (0, n.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    69423: (e, t, r) => {
      "use strict";
      r.d(t, {
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
        T7: () => re,
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
        fr: () => te,
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
      var i = r(34629),
        a = r(41735),
        s = r.n(a),
        n = r(90626),
        c = r(14947),
        o = r(37085),
        l = r(68797),
        u = r(6144),
        d = r(73745),
        p = r(41338),
        P = r(78327),
        g = r(96745),
        m = r(65946),
        h = r(81393),
        _ = r(4160),
        f = r(31031),
        S = r(48174),
        v = r(87700),
        G = r(72255),
        y = r(87718);
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
              for (let t in e) {
                const r = e[t],
                  i = parseInt(t),
                  a = new Map();
                this.m_mapPackagePrice.set(i, a);
                for (let e in r)
                  (0, G.IG)(e)
                    ? (this.m_mapPackageCountryOverridePrice.has(i) ||
                        this.m_mapPackageCountryOverridePrice.set(i, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(i)
                        .set(e.toUpperCase(), r[e]))
                    : a.set(e, r[e]);
              }
            else
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const t = (0, P.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                t,
              ),
            t)
          )
            if (Array.isArray(t))
              for (const e of t) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const r = (0, P.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != P.TS.WEB_UNIVERSE && "beta" != P.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                r,
              ),
            r)
          )
            if (this.BIsPendingPricePayloadValid(r))
              for (let e in r) {
                const t = r[e],
                  i = parseInt(e);
                this.m_mapPriceProposals.set(i, t);
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
                ? (this.m_rgKnownPriceKeys = i.sort((e, t) =>
                    (0, p.kd)(L(e), L(t)),
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
                const t = a[e];
                this.m_mapCurrencyData.set(e, t);
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
                const t = s[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == P.TS.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const r = t[e];
            if (!r || "object" != typeof r) return !1;
            for (let e in r)
              if ("string" != typeof e || "number" != typeof r[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const r = t[e];
            if (
              !r ||
              "object" != typeof r ||
              r.packageID !== parseInt(e) ||
              "object" != typeof r.prices
            )
              return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (!r || "object" != typeof r || r.strCode != e) return !1;
          }
          return !0;
        }
        BIsPriceKeyValid(e) {
          const t = e;
          if (!t || !Array.isArray(t)) return !1;
          for (let e in t) if ("string" != typeof e) return !1;
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (
              !r ||
              "object" != typeof r ||
              void 0 === r.bRequired ||
              void 0 === r.strDescription
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
        GetPublishedPriceCountryOverride(e, t) {
          return this.m_mapPackageCountryOverridePrice.get(e).get(t);
        }
        GetPublishedPrice(e, t) {
          return (0, G.IG)(t)
            ? this.m_mapPackageCountryOverridePrice.get(e)?.get(t)
            : this.m_mapPackagePrice.get(e)?.get(t);
        }
        GetProposedPrice(e, t) {
          return this.m_mapPriceProposals.get(e)?.prices[t];
        }
        GetSavedPrice(e, t) {
          return this.GetProposedPrice(e, t) ?? this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          return this.GetLocalOverridePrice(e, t) ?? this.GetSavedPrice(e, t);
        }
        GetLocalOverridePrice(e, t) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.get(t);
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const r = this.m_mapPriceGridCellCallbackList.get(e);
          return r.has(t) || r.set(t, new u.lu()), r.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new u.lu()),
              this.m_mapPackageOverridesCallbackList.set(e, t)),
            t
          );
        }
        OverridePrice(e, t, r) {
          r != this.GetPrice(e, t) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            r == this.GetSavedPrice(e, t)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(t, r),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(r),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, t, r, i) {
          (0, h.wT)(
            t.length == r.length,
            `price list size doesn't match ${t.length} != ${r.length}`,
          );
          for (let i = 0; i < t.length; ++i) {
            const a = t[i],
              s = r[i];
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
            this.m_mapLocalPackagePriceOverrides.forEach((t, r) =>
              t.forEach((t, i) => {
                const a = this.GetSavedPrice(r, i);
                e.push({
                  packageID: r,
                  strPriceKey: i,
                  nPriceInCents: t,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(C),
            e
          );
        }
        BHasLocalPriceOverride(e, t) {
          let r = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!r && r.has(t);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
              e.forEach((e, t) => {
                let r = this.m_mapOverridesPerPriceKey.get(t);
                r || (r = 0), r++, this.m_mapOverridesPerPriceKey.set(t, r);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let t = new Set();
          for (const r of e) {
            const { packageID: e, strPriceKey: i } = r;
            this.GetPriceGridCellCallbackList(e, i).Dispatch(
              this.GetPrice(e, i),
            ),
              t.add(e);
          }
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let t = !1,
            r = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((i, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((t = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              r.add(a));
          });
          for (const e of r) this.GetPackageOverridesCallbackList(e).Dispatch();
          t && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((t, r) => {
            this.GetPriceGridCellCallbackList(e, r).Dispatch(
              this.GetSavedPrice(e, r),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, t) {
          const r = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: P.iA.accountid,
            prices: {},
            eState: _.Al,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            r.prices[t] = this.GetPrice(e, t);
          const i = this.m_mapPackageCountryOverridePrice.get(e);
          if (i) for (const t of i.keys()) r.prices[t] = this.GetPrice(e, t);
          return r;
        }
        async SubmitProposalToServer(e, t, r) {
          const i = this.BuildNewPricingProposal(e, t),
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
            u.append("partner_will_publish", t ? "1" : "0"),
            u.append("prices", a);
          let d = null;
          try {
            const t = await s().post(c, u, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (
              200 == t?.status &&
              t.data?.success == o.R &&
              t.data.eState != _.nD
            ) {
              if (t.data.eState == _.pJ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.has(e) ||
                    this.m_mapPackagePrice.set(e, new Map()),
                    this.m_mapPackagePrice.get(e).set(t, i.prices[t]);
              } else
                (i.eState = t.data.eState),
                  (i.proposalKey = t.data.proposalKey),
                  this.m_mapPriceProposals.set(e, i);
              return this.DiscardLocalPriceOverridesForPackage(e), t.data;
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
        async PublishApprovedProposal(e, t, r = 0) {
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
              cancelToken: t?.token,
              timeout: r,
            });
            if (200 == a?.status && a.data?.success == o.R) {
              this.m_mapPriceProposals.delete(e);
              for (const t of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(t, i.prices[t]),
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t),
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
        async CancelProposal(e, t) {
          const r = this.m_mapPriceProposals.get(e);
          if (!r?.proposalKey) return { success: o.nO };
          const i = (0, P.Tc)("publisherid", "application_config"),
            a =
              P.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              i +
              "/" +
              e,
            n = new FormData();
          n.append("sessionid", P.TS.SESSIONID),
            n.append("proposal_key", r.proposalKey);
          let c = null;
          try {
            const r = await s().post(a, n, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (200 == r?.status && r.data?.success == o.R) {
              this.m_mapPriceProposals.delete(e);
              for (const t of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(e, t).Dispatch(
                  this.GetSavedPrice(e, t),
                );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                r.data
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
          for (let t of this.m_rgKnownPriceKeys) {
            let r = this.GetPrice(e, t);
            if (void 0 === r) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = j(e, t);
            if (r < i) return !0;
          }
          return !1;
        }
      }
      function C(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const r = (0, g.ww)(e.packageID),
            i = (0, g.ww)(t.packageID);
          return (0, p.kd)(r, i);
        }
        return (0, p.kd)(L(e.strPriceKey), L(t.strPriceKey));
      }
      function b(e) {
        const t = e.split("_")[0];
        return k.Get().m_mapCurrencyData.get(t);
      }
      function D(e, t) {
        if (void 0 === t) return ["", "", ""];
        const r = b(t) ?? b("USD");
        let i = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const a = t.length - 2;
          for (let e = 0; e < a; e++) {
            const s = t.charAt(e);
            (i += s),
              e < a - 1 &&
                (a - e - 1) % 3 == 0 &&
                "-" != s &&
                (i += r.strThousandsSeparator);
          }
          r.bWholeUnitsOnly ||
            ((i += r.strDecimalSymbol), (i += t.substr(t.length - 2)));
        }
        return r.bSymbolIsPrefix
          ? [r.strSymbol + r.strSymbolAndNumberSeparator, i, ""]
          : ["", i, r.strSymbolAndNumberSeparator + r.strSymbol];
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
      function O(e, t) {
        return k.Get().GetPrice(e, t);
      }
      function w(e) {
        return k.Get().GetPublishedCountryOverrides(e);
      }
      function E(e, t) {
        return k.Get().GetPublishedPriceCountryOverride(e, t);
      }
      function M(e, t) {
        return k.Get().GetPublishedPrice(e, t);
      }
      function K(e, t) {
        return k.Get().GetProposedPrice(e, t);
      }
      function A(e, t) {
        return k.Get().GetLocalOverridePrice(e, t);
      }
      function U(e) {
        const t = k.Get().m_strDisplayPriceKey;
        return D(k.Get().GetPrice(e, t), t).join("");
      }
      function B(e) {
        const [t, r] = n.useState(k.Get().m_strDisplayPriceKey);
        return (
          (0, d.hL)(k.Get().m_displayPriceKeyCallbackList, r),
          (function (e, t) {
            const [r, i] = n.useState(k.Get().GetPrice(e, t));
            return (
              (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, t), i),
              n.useEffect(() => i(k.Get().GetPrice(e, t)), [e, t]),
              D(r, t).join("")
            );
          })(e, t)
        );
      }
      function T() {
        const e = (0, g.Yr)(),
          t = (0, S.cT)(),
          r = (0, v.Bb)();
        return n.useCallback(
          () =>
            (function (e, t, r) {
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
                      f.$)(t, r, n, (0, G.ei)(i), (0, y.vS)(i));
                    null !== o &&
                      k.Get().GetPrice(a, i) != c &&
                      (e.push(i), s.push(c));
                  }
                  e.length > 0 &&
                    (k.Get().OverridePricesForPackage(a, e, s), (i += 1));
                }
              }
              i > 0 && k.Get().DispatchPriceOverridesCallbacks();
            })(e, t, r),
          [e, t, r],
        );
      }
      function R(e, t) {
        const r = (0, d.CH)();
        (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, t), r);
        const i = k.Get().GetPrice(e, t),
          a = (0, S.cT)(),
          s = (0, v.Bb)();
        (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, "USD"), r);
        const c = k.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: o, nGuidelinesLevel: l } = (0, f.$)(
            a,
            s,
            c,
            (0, G.ei)(t),
            (0, y.vS)(t),
          ),
          u = n.useCallback((r) => k.Get().OverridePrice(e, t, r), [e, t]),
          p = k.Get().GetPublishedPrice(e, t),
          P = k.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: g, nMaxPriceInCents: m } = j(e, t),
          h = x(t, i, l);
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
      function x(e, t, r, i) {
        const a = k.Get().GetMinimumDiscountPrice(e),
          s = t ? Math.floor((100 * (t - a)) / t) : N,
          n = Math.min(N, Math.floor((100 * (r - 50)) / r));
        if (i) return t < a || s < V ? null : Math.max(Math.min(s, N), 0);
        return s < n ? s : null;
      }
      function W(e) {
        let [t, r] = n.useState(() => k.Get().BAnyPackagePriceBelowMin(e)),
          i = n.useCallback(() => {
            let t = k.Get().BAnyPackagePriceBelowMin(e);
            r(t);
          }, [e, r]);
        return (0, d.hL)(k.Get().GetPackageOverridesCallbackList(e), i), t;
      }
      function z(e) {
        return k.Get().BAnyPackagePriceBelowMin(e);
      }
      function j(e, t) {
        let r = k.Get();
        return {
          nMinPriceInCents: r.GetMinimumBasePrice(t),
          nMaxPriceInCents: r.m_setRecurringSubscriptions.has(e)
            ? r.GetPublishedPrice(e, t)
            : null,
        };
      }
      function Y() {
        return n.useCallback((e, t, r) => {
          const i = k.Get().GetPrice(e, t);
          return (
            k.Get().OverridePrice(e, t, r),
            i == r
              ? null
              : {
                  packageID: e,
                  strPriceKey: t,
                  nPriceInCents: r,
                  nOldPriceInCents: i,
                }
          );
        }, []);
      }
      function F(e) {
        const t = (0, d.CH)();
        return (
          (0, d.hL)(k.Get().GetPriceGridCellCallbackList(e, "USD"), t),
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
        let t = !1;
        for (const r of k.Get().m_rgKnownPriceKeys) {
          let i = k.Get().GetPublishedPrice(e, r);
          t = t || (0 != i && void 0 !== i);
        }
        return t;
      }
      function q(e) {
        const t = F(e),
          r = [];
        for (const i of k.Get().m_rgKnownPriceKeys) {
          const a = t.prices[i],
            s = k.Get().GetPublishedPrice(e, i);
          a != s &&
            r.push({
              packageID: e,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: s,
            });
        }
        return r;
      }
      function J() {
        return k.Get().m_rgKnownPriceKeys;
      }
      function Q(e) {
        let t = k.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
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
      function te(e) {
        return n.useCallback(() => {
          k.Get().CancelProposal(e);
        }, [e]);
      }
      function re() {
        const [e, t] = n.useState(k.Get().m_strDisplayPriceKey),
          r = k.Get().m_rgKnownPriceKeys,
          i = n.useCallback((e) => {
            t(e),
              (k.Get().m_strDisplayPriceKey = e),
              k.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: r, fnSetPriceKey: i };
      }
      function ie(e) {
        const t = (0, d.CH)();
        return (
          (0, d.hL)(k.Get().m_allPriceOverridesCallbackList, t),
          k.Get().BHasLocalPriceOverrides(e)
        );
      }
      function ae(e) {
        return k.Get().BHasLocalPriceOverrides(e);
      }
      function se() {
        const [e, t] = n.useState(() => k.Get().GetAllLocalPriceOverrides());
        return (0, d.hL)(k.Get().m_allPriceOverridesCallbackList, t), e;
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
          (e, t, r) => k.Get().SubmitProposalToServer(e, t, r),
          [],
        );
      }
      function de() {
        return n.useCallback(
          (e, t) => k.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function pe(e) {
        let t = [];
        const r = k.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (Z(i)) continue;
          let e = !1;
          for (const t of r) {
            if (!k.Get().BPriceKeyRequired(t)) continue;
            if (!k.Get().GetPrice(i, t)) {
              e = !0;
              break;
            }
          }
          e && t.push(i);
        }
        return t;
      }
    },
    9554: (e, t, r) => {
      "use strict";
      r.d(t, { es: () => n, nm: () => p });
      var i = r(86328),
        a = r(56011),
        s = r(61859);
      function n(e, t) {
        const r = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          i = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          a = e.original.appName,
          n = t.original.appName,
          c = a == r,
          o = a == i,
          l = !c && !o,
          u = n == r,
          d = n == i,
          p = !u && !d;
        if (l && p) return a.localeCompare(n);
        if (l || p) return l ? -1 : 1;
        if (c == u && o == d) {
          const r = e.original.packageName,
            i = t.original.packageName;
          return r && i
            ? r.localeCompare(i)
            : r || i
              ? r
                ? -1
                : 1
              : e.original.packageID - t.original.packageID;
        }
        return c ? -1 : 1;
      }
      const c = (e) => e.nextElementSibling,
        o = (e) => e.previousElementSibling,
        l = (e, t) => {
          const r = e.getAttribute("data-table-column-id"),
            i = e.parentElement;
          let a = i && t(i);
          for (; r && a; ) {
            for (const e of Array.from(a.children))
              if (r == e.getAttribute("data-table-column-id")) return e;
            a = t(a);
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
        const t = Array.prototype.slice.call(e.children).reverse();
        for (; t.length > 0; ) {
          const e = t.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          t.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function p(e) {
        let t = u.get(e.keyCode);
        if ((e.keyCode === i.$R && e.shiftKey && (t = (e) => l(e, o)), !t))
          return;
        var r;
        let s = t(
          ((r = e.currentTarget),
          (0, a.Kf)(r, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; s; ) {
          const r = d(s);
          if (r) return r.focus(), void e.preventDefault();
          s = t(s);
        }
      }
    },
    70986: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => a, o: () => i });
      const i = "America/Los_Angeles";
      function a(e) {
        const t = r(87937).unix(e).tz(i);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
    53965: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => v, v: () => G });
      var i = r(7850),
        a = r(64238),
        s = r.n(a),
        n = r(69041),
        c = r(75659),
        o = r(11526),
        l = r(11820),
        u = r(73406),
        d = r(90534),
        p = r(83392);
      function P(e) {
        const {
          size: t = "3",
          loading: r = !0,
          children: a,
          color: s,
          variant: n,
          ...c
        } = e;
        return a || !r
          ? (0, i.jsxs)(d.az, {
              position: "relative",
              ...c,
              width: "fit-content",
              children: [
                (0, i.jsx)("div", {
                  "data-visibility": !r,
                  className: u.ChildContainer,
                  children: a,
                }),
                r &&
                  (0, i.jsx)(p.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)(g, { size: t, color: s, variant: n }),
                  }),
              ],
            })
          : (0, i.jsx)(g, { size: t, color: s, variant: n, ...c });
      }
      function g(e) {
        const { className: t, color: r, ...a } = (0, o.mz)(e, m);
        return (0, i.jsx)("div", {
          "data-accent-color": r,
          className: s()(t, u.Spinner),
          ...a,
        });
      }
      const m = [
        ...c.L,
        { prop: "size", responsive: !0, className: (e) => u[`Size-${e}`] },
        { prop: "variant", className: (e) => u[`Variant-${e}`] },
      ];
      var h = r(45699),
        _ = r(8527);
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
              variant: t = "default",
              size: r = "2",
              minWidth: a = "fit-content",
              color: c,
              loading: l,
              children: u,
              onClick: d,
              icon: p,
              gamepadFocusable: g = !0,
              ...m
            } = e,
            f = l
              ? (0, i.jsx)(P, {
                  size: r,
                  color: c,
                  variant: "bright",
                  children: u,
                })
              : u,
            v = l ? void 0 : d,
            G = g && _.TS.IN_GAMEPADUI ? h.fu : "button";
          return (0, i.jsx)(G, {
            type: "button",
            ...(0, o.mz)(
              {
                ...m,
                variant: t,
                size: r,
                minWidth: a,
                color: c,
                className: s()(n.Button, p && n.Icon),
                onClick: v,
              },
              S,
            ),
            children: f,
          });
        },
        G = function (e) {
          const {
              variant: t = "default",
              size: r = "2",
              minWidth: a = "fit-content",
              disabled: c,
              icon: u,
              gamepadFocusable: d = !0,
              ...p
            } = e,
            P = c ? f : void 0,
            g = d && _.TS.IN_GAMEPADUI ? h.Ii : "a";
          return (0, i.jsx)(g, {
            ...(0, o.mz)(
              {
                onClick: P,
                ...p,
                variant: t,
                size: r,
                minWidth: a,
                className: s()(n.Button, u && n.Icon, (0, l.T)()),
              },
              S,
            ),
          });
        };
    },
    11820: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => a });
      var i = r(91239);
      function a() {
        return i.Reset;
      }
    },
    87718: (e, t, r) => {
      "use strict";
      r.d(t, {
        bS: () => s,
        de: () => c,
        j4: () => l,
        k8: () => n,
        uF: () => o,
        vS: () => u,
      });
      var i = r(88267),
        a = r(29848);
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
    87700: (e, t, r) => {
      "use strict";
      r.d(t, { Bb: () => u, MA: () => l, jY: () => o });
      var i = r(7850),
        a = r(62113),
        s = r(90626),
        n = r(48174);
      const c = s.createContext({
        eConversionMethod: a.Y5.lZ,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function o(e) {
        const { eInitialConversionMethod: t } = e,
          r = (0, n.cT)(),
          [o, l] = s.useState(t || a.Y5.lZ),
          u = s.useMemo(() => {
            const e = r ? r.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: o,
              setConversionMethod: l,
              rgAvailableConversionMethods: e,
            };
          }, [o, l, r]);
        return (0, i.jsx)(c.Provider, { value: u, children: e.children });
      }
      function l() {
        return s.useContext(c);
      }
      function u() {
        return s.useContext(c).eConversionMethod;
      }
    },
    31031: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => n });
      var i = r(29848),
        a = r(88267),
        s = r(81393);
      function n(e, t, r, n, c) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let o = null;
        for (let t of e.GetUSDPricePointsInCents())
          if (t >= r) {
            o = t;
            break;
          }
        const l = c && c < i.Hc;
        if ((n == a.CS && !l) || !o)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const u = e.GetRecommendPrice(o, n, c, t),
          d = e.GetRecommendPrice(o, a.CS, void 0, t);
        if (
          ((0, s.wT)(
            u,
            `Missing requested currency guide for  ${o}/${n}/${c}/${t}`,
          ),
          (0, s.wT)(d, `Missing usd guide for  ${o}/${c}/${t}`),
          !u || !d)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let p = u.price;
        const P = d.price;
        if (P != r) {
          const e = r / P;
          (o *= e), (p = Math.ceil(p * e));
        }
        return { nSuggestedPriceInCents: p, nGuidelinesLevel: o };
      }
    },
    48174: (e, t, r) => {
      "use strict";
      r.d(t, { mj: () => h, gC: () => _, cT: () => m });
      var i = r(90626),
        a = r(29848),
        s = r(88267),
        n = r(62113);
      const c = n.Y5.lZ;
      class o {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(e, t, r, i = c) {
          return `${e}_${t}_${r || a.YS}_${i}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(n.Y5.lZ)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, t) {
          return t
            ? e == s.CS && this.m_setSupportedRegions.has(t)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, t, r, i = c) {
          const a = this.GetKey(e, t, r, i);
          return this.m_mapKeyToGuidePrice.get(a);
        }
        GetScaledRecommendedPrice(e, t, r, i = c) {
          let a = -1,
            s = -1;
          for (const t of this.m_mapUSDPrice.get(i).keys()) {
            const r = Math.abs(t - e);
            (-1 == a || r < s) && ((a = t), (s = r));
          }
          const n = this.m_mapUSDPrice.get(i).get(a),
            o = r
              ? n.region_prices.find((e) => e.region_code == r)
              : n.currency_prices.find((e) => e.currency_code == t),
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
          let t = new Set();
          e.forEach((e) => {
            const r = e.convert_method ?? c;
            this.m_setConversionMethod.add(r),
              this.m_mapUSDPrice.has(r) || this.m_mapUSDPrice.set(r, new Map());
            this.m_mapUSDPrice.get(r).set(e.usd_price, e),
              t.add(e.usd_price),
              e.currency_prices.forEach((t) => {
                const r = this.GetKey(
                  e.usd_price,
                  t.currency_code,
                  a.YS,
                  e.convert_method || c,
                );
                this.m_mapKeyToGuidePrice.set(r, t),
                  this.m_setSupportedCurrencies.add(t.currency_code);
              }),
              e.region_prices.forEach((t) => {
                const r = this.GetKey(
                  e.usd_price,
                  t.currency_code,
                  t.region_code,
                  e.convert_method || c,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(r, t),
                  this.m_setSupportedRegions.add(t.region_code),
                  this.m_setConversionMethod.has(n.Y5.bA))
                ) {
                  const r = {
                      currency_code: s.CS,
                      price: e.usd_price,
                      region_code: t.region_code,
                    },
                    i = this.GetKey(e.usd_price, s.CS, t.region_code, n.Y5.bA);
                  this.m_mapKeyToGuidePrice.set(i, r);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(t.keys()));
        }
      }
      var l = r(7860),
        u = r(24484);
      var d = r(87700),
        p = r(20194),
        P = r(81393),
        g = r(72255);
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
        const t = m(),
          r = (0, d.Bb)();
        return {
          fnApplyGuidelines: (0, i.useCallback)(
            (i, n, c) => {
              if (
                ((0, P.wT)(
                  t,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                t)
              ) {
                for (let a = s.CS; a < s.mh; ++a) {
                  const s = t.GetRecommendPrice(n, a, void 0, c ?? r)?.price;
                  if (s && s > 0) {
                    const t = (0, g.M1)(a);
                    e(i, t, s);
                  }
                }
                for (let o = a._S; o < a.Hc; ++o) {
                  const a = s.CS,
                    l = t.GetRecommendPrice(n, a, o, c ?? r)?.price;
                  if (l && l > 0) {
                    const t = (0, g.pd)(a, o).toUpperCase();
                    e(i, t, l);
                  }
                }
              }
            },
            [r, e, t],
          ),
        };
      }
    },
    4160: (e, t, r) => {
      "use strict";
      r.d(t, { Al: () => a, Zo: () => n, nD: () => i, pJ: () => s });
      const i = 0,
        a = 1,
        s = 3,
        n = 4;
    },
    62113: (e, t, r) => {
      "use strict";
      r.d(t, { Y5: () => i });
      var i = {};
      r.r(i), r.d(i, { bA: () => c, lZ: () => s, KC: () => n });
      var a = r(80613);
      r(89068);
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
