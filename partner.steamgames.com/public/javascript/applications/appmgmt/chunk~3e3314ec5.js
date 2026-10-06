/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [79246],
    {
      31886: (se, V, c) => {
        "use strict";
        c.d(V, {
          E1: () => re,
          OM: () => F,
          Sm: () => g,
          Yr: () => w,
          pV: () => f,
          uw: () => p,
          vs: () => j,
          ww: () => m,
          xi: () => h,
          zt: () => G,
        });
        var B = c(90626),
          d = c(8323),
          l = c(54963),
          r = c(3166);
        const h = "pn";
        class E {
          m_rgPackageIDs;
          m_rgPackageData;
          m_mapPackageData;
          m_rgVisiblePackageIDs = [];
          m_visiblePackageIDsCallbackList = new d.lu();
          static s_Singleton;
          static Get() {
            return (
              E.s_Singleton ||
                ((E.s_Singleton = new E()), E.s_Singleton.Init()),
              E.s_Singleton
            );
          }
          constructor() {}
          Init() {
            let O = (0, r.Tc)("package_data", "application_config");
            O
              ? ((this.m_rgPackageIDs = O.map((b) => b.packageid)),
                (this.m_rgPackageData = O),
                (this.m_mapPackageData = new Map(
                  O.map((b) => [b.packageid, b]),
                )))
              : ((this.m_rgPackageIDs = (0, r.Tc)(
                  "package_ids",
                  "application_config",
                )),
                (this.m_mapPackageData = new Map()));
          }
          UpdatePackageNameSearchState(O) {
            const b = O.getState().columnFilters.find(
                (_) => _.id === "packageName",
              )?.value,
              y = new URL(window.location.href);
            b != decodeURIComponent(y.searchParams.get(h)) &&
              (b
                ? y.searchParams.set(h, encodeURIComponent(b))
                : y.searchParams.delete(h),
              window.history.replaceState({}, "", y.toString()));
          }
          UpdateVisiblePackageList(O) {
            const b = O.getVisibleRows().filter((y) => !y.getCanExpand());
            (this.m_rgVisiblePackageIDs = []),
              b.forEach((y) =>
                this.m_rgVisiblePackageIDs.push(y.original.packageID),
              ),
              this.m_visiblePackageIDsCallbackList.Dispatch(
                this.m_rgVisiblePackageIDs,
              ),
              this.UpdatePackageNameSearchState(O);
          }
          SetVisiblePackageList(O) {
            (this.m_rgVisiblePackageIDs = [...O]),
              this.m_visiblePackageIDsCallbackList.Dispatch(
                this.m_rgVisiblePackageIDs,
              );
          }
        }
        function F() {
          return E.Get().m_rgPackageIDs;
        }
        function G() {
          return E.Get().m_rgPackageIDs;
        }
        function p() {
          return E.Get().m_rgPackageData;
        }
        function m(M) {
          let O = E.Get().m_mapPackageData.get(M);
          return O ? O.package_name : M.toString();
        }
        function re(M) {
          let O = E.Get().m_mapPackageData.get(M);
          return O ? !!O.released : !0;
        }
        function f() {
          return B.useCallback((M) => E.Get().UpdateVisiblePackageList(M), []);
        }
        function g(M) {
          E.Get().SetVisiblePackageList(M);
        }
        function w() {
          const [M, O] = B.useState(E.Get().m_rgVisiblePackageIDs);
          return (0, l.hL)(E.Get().m_visiblePackageIDsCallbackList, O), M;
        }
        function j() {
          return B.useMemo(
            () => (0, r.Tc)("publisherid", "application_config"),
            [],
          );
        }
      },
      37424: (se, V, c) => {
        "use strict";
        c.d(V, {
          $i: () => Ue,
          Ao: () => T,
          Bt: () => Ke,
          Ci: () => ve,
          Dl: () => D,
          FR: () => ne,
          FX: () => be,
          Gs: () => Y,
          NC: () => ze,
          Oc: () => R,
          RO: () => he,
          T7: () => Ee,
          T_: () => Oe,
          U3: () => Be,
          Wx: () => te,
          XB: () => _e,
          XK: () => pe,
          Y2: () => ce,
          Y5: () => s,
          YB: () => Te,
          Zz: () => Le,
          _A: () => X,
          d$: () => oe,
          fZ: () => Z,
          fr: () => we,
          h4: () => ke,
          hm: () => de,
          iy: () => Se,
          mP: () => ye,
          mv: () => v,
          nT: () => e,
          oL: () => I,
          oj: () => N,
          tn: () => L,
          v4: () => ge,
          ww: () => je,
          xQ: () => q,
        });
        var B = c(41735),
          d = c.n(B),
          l = c(90626),
          r = c(14947),
          h = c(72604),
          E = c(34592),
          F = c(8323),
          G = c(54963),
          p = c(48473),
          m = c(3166),
          re = c(31886),
          f = c(65946),
          g = c(71742),
          w = c(61075),
          j = c(7608),
          M = c(93357),
          O = c(13401),
          b = c(33220),
          y = c(3301),
          _ = Object.defineProperty,
          S = Object.getOwnPropertyDescriptor,
          U = (a, t, i, n) => {
            for (
              var u = n > 1 ? void 0 : n ? S(t, i) : t, P = a.length - 1, k;
              P >= 0;
              P--
            )
              (k = a[P]) && (u = (n ? k(t, i, u) : k(u)) || u);
            return n && u && _(t, i, u), u;
          };
        const W = class ue {
          m_mapPackagePrice = new Map();
          m_mapPackageCountryOverridePrice = new Map();
          m_setRecurringSubscriptions = new Set();
          m_mapPriceProposals = new Map();
          m_mapLocalPackagePriceOverrides = new Map();
          m_mapPriceGridCellCallbackList = new Map();
          m_mapPackageOverridesCallbackList = new Map();
          m_allPriceOverridesCallbackList = new F.lu();
          m_mapOverridesPerPriceKey = new Map();
          m_mapCurrencyData = new Map();
          m_mapPriceKeyDescriptions = new Map();
          m_rgKnownPriceKeys;
          m_strDisplayPriceKey = "USD";
          m_displayPriceKeyCallbackList = new F.lu();
          static s_Singleton;
          static Get() {
            return (
              ue.s_Singleton ||
                ((ue.s_Singleton = new ue()), ue.s_Singleton.Init()),
              ue.s_Singleton
            );
          }
          constructor() {
            (0, r.Gn)(this);
          }
          Init() {
            const t = (0, m.Tc)("base_prices", "application_config");
            if (t && this.BIsPricePayloadValid(t))
              for (let z in t) {
                const C = t[z],
                  ee = parseInt(z),
                  ie = new Map();
                this.m_mapPackagePrice.set(ee, ie);
                for (let $ in C)
                  (0, b.IG)($)
                    ? (this.m_mapPackageCountryOverridePrice.has(ee) ||
                        this.m_mapPackageCountryOverridePrice.set(
                          ee,
                          new Map(),
                        ),
                      this.m_mapPackageCountryOverridePrice
                        .get(ee)
                        .set($.toUpperCase(), C[$]))
                    : ie.set($, C[$]);
              }
            const i = (0, m.Tc)("recurring_subs", "application_config");
            if (i && Array.isArray(i))
              for (const z of i) this.m_setRecurringSubscriptions.add(z);
            const n = (0, m.Tc)("pending_proposals", "application_config");
            if (n && this.BIsPendingPricePayloadValid(n))
              for (let z in n) {
                const C = n[z],
                  ee = parseInt(z);
                this.m_mapPriceProposals.set(ee, C);
              }
            const u = (0, m.Tc)("valid_price_keys", "application_config");
            u &&
              this.BIsPriceKeyValid(u) &&
              (this.m_rgKnownPriceKeys = u.sort((z, C) =>
                (0, p.kd)(ae(z), ae(C)),
              ));
            const P = (0, m.Tc)("currency_data", "application_config");
            if (P && this.BIsCurrencyPayloadValid(P))
              for (let z in P) {
                const C = P[z];
                this.m_mapCurrencyData.set(z, C);
              }
            const k = (0, m.Tc)("currency_descriptions", "application_config");
            if (k && this.BIsCurrencyDescriptionPayloadValid(k))
              for (let z in k) {
                const C = k[z];
                this.m_mapPriceKeyDescriptions.set(z, C);
              }
          }
          BIsPricePayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let n in i) {
              if (isNaN(parseInt(n))) return !1;
              const u = i[n];
              if (!u || typeof u != "object") return !1;
              for (let P in u)
                if (typeof P != "string" || typeof u[P] != "number") return !1;
            }
            return !0;
          }
          BIsPendingPricePayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let n in i) {
              if (isNaN(parseInt(n))) return !1;
              const u = i[n];
              if (
                !u ||
                typeof u != "object" ||
                u.packageID !== parseInt(n) ||
                typeof u.prices != "object"
              )
                return !1;
            }
            return !0;
          }
          BIsCurrencyPayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let n in i) {
              const u = i[n];
              if (!u || typeof u != "object" || u.strCode != n) return !1;
            }
            return !0;
          }
          BIsPriceKeyValid(t) {
            const i = t;
            if (!i || !Array.isArray(i)) return !1;
            for (let n in i) if (typeof n != "string") return !1;
            return !0;
          }
          BIsCurrencyDescriptionPayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let n in i) {
              const u = i[n];
              if (
                !u ||
                typeof u != "object" ||
                u.bRequired === void 0 ||
                u.strDescription === void 0
              )
                return !1;
            }
            return !0;
          }
          BPriceKeyRequired(t) {
            return this.m_mapPriceKeyDescriptions.get(t)?.bRequired ?? !1;
          }
          GetMinimumBasePrice(t) {
            return this.m_mapPriceKeyDescriptions.get(t)?.nLowestBase || 0;
          }
          GetMinimumDiscountPrice(t) {
            return this.m_mapPriceKeyDescriptions.get(t)?.nLowestDiscount || 0;
          }
          GetPublishedCountryOverrides(t) {
            return this.m_mapPackageCountryOverridePrice.has(t)
              ? Array.from(this.m_mapPackageCountryOverridePrice.get(t).keys())
              : [];
          }
          GetPublishedPriceCountryOverride(t, i) {
            return this.m_mapPackageCountryOverridePrice.get(t).get(i);
          }
          GetPublishedPrice(t, i) {
            return (0, b.IG)(i)
              ? this.m_mapPackageCountryOverridePrice.get(t)?.get(i)
              : this.m_mapPackagePrice.get(t)?.get(i);
          }
          GetProposedPrice(t, i) {
            return this.m_mapPriceProposals.get(t)?.prices[i];
          }
          GetSavedPrice(t, i) {
            return this.GetProposedPrice(t, i) ?? this.GetPublishedPrice(t, i);
          }
          GetPrice(t, i) {
            return this.GetLocalOverridePrice(t, i) ?? this.GetSavedPrice(t, i);
          }
          GetLocalOverridePrice(t, i) {
            return this.m_mapLocalPackagePriceOverrides.get(t)?.get(i);
          }
          GetPriceGridCellCallbackList(t, i) {
            if (!t || !i) return null;
            this.m_mapPriceGridCellCallbackList.has(t) ||
              this.m_mapPriceGridCellCallbackList.set(t, new Map());
            const n = this.m_mapPriceGridCellCallbackList.get(t);
            return n.has(i) || n.set(i, new F.lu()), n.get(i);
          }
          GetPackageOverridesCallbackList(t) {
            if (!t) return null;
            let i = this.m_mapPackageOverridesCallbackList.get(t);
            return (
              i ||
                ((i = new F.lu()),
                this.m_mapPackageOverridesCallbackList.set(t, i)),
              i
            );
          }
          OverridePrice(t, i, n) {
            const u = this.GetPrice(t, i);
            n != u &&
              (this.m_mapLocalPackagePriceOverrides.has(t) ||
                this.m_mapLocalPackagePriceOverrides.set(t, new Map()),
              n == this.GetSavedPrice(t, i)
                ? this.m_mapLocalPackagePriceOverrides.get(t).delete(i)
                : this.m_mapLocalPackagePriceOverrides.get(t).set(i, n),
              this.GetPriceGridCellCallbackList(t, i).Dispatch(n),
              this.GetPackageOverridesCallbackList(t).Dispatch(),
              this.DispatchPriceOverridesCallbacks());
          }
          OverridePricesForPackage(t, i, n, u) {
            (0, g.wT)(
              i.length == n.length,
              `price list size doesn't match ${i.length} != ${n.length}`,
            );
            for (let P = 0; P < i.length; ++P) {
              const k = i[P],
                z = n[P];
              this.m_mapLocalPackagePriceOverrides.has(t) ||
                this.m_mapLocalPackagePriceOverrides.set(t, new Map()),
                z == this.GetSavedPrice(t, k)
                  ? this.m_mapLocalPackagePriceOverrides.get(t).delete(k)
                  : this.m_mapLocalPackagePriceOverrides.get(t).set(k, z),
                this.GetPriceGridCellCallbackList(t, k).Dispatch(z);
            }
            this.GetPackageOverridesCallbackList(t).Dispatch(),
              u && this.DispatchPriceOverridesCallbacks();
          }
          DispatchPriceOverridesCallbacks() {
            this.m_allPriceOverridesCallbackList.Dispatch(
              this.GetAllLocalPriceOverrides(),
            ),
              this.UpdateOverridesPerPriceKey();
          }
          BHasLocalPriceOverrides(t) {
            return this.m_mapLocalPackagePriceOverrides.get(t)?.size > 0;
          }
          GetAllLocalPriceOverrides() {
            const t = [];
            return (
              this.m_mapLocalPackagePriceOverrides.forEach((i, n) =>
                i.forEach((u, P) => {
                  const k = this.GetSavedPrice(n, P);
                  t.push({
                    packageID: n,
                    strPriceKey: P,
                    nPriceInCents: u,
                    nOldPriceInCents: k,
                  });
                }),
              ),
              t.sort(K),
              t
            );
          }
          BHasLocalPriceOverride(t, i) {
            let n = this.m_mapLocalPackagePriceOverrides.get(t);
            return n ? n.has(i) : !1;
          }
          UpdateOverridesPerPriceKey() {
            this.m_mapOverridesPerPriceKey.clear(),
              this.m_mapLocalPackagePriceOverrides.forEach((t, i) => {
                t.forEach((n, u) => {
                  let P = this.m_mapOverridesPerPriceKey.get(u);
                  P || (P = 0), P++, this.m_mapOverridesPerPriceKey.set(u, P);
                });
              });
          }
          DiscardAllLocalPriceOverrides() {
            const t = this.GetAllLocalPriceOverrides();
            this.m_mapLocalPackagePriceOverrides.clear();
            let i = new Set();
            for (const n of t) {
              const { packageID: u, strPriceKey: P } = n;
              this.GetPriceGridCellCallbackList(u, P).Dispatch(
                this.GetPrice(u, P),
              ),
                i.add(u);
            }
            for (const n of i)
              this.GetPackageOverridesCallbackList(n).Dispatch();
            this.DispatchPriceOverridesCallbacks();
          }
          DiscardAllLocalPriceOverridesForKey(t) {
            let i = !1,
              n = new Set();
            this.m_mapLocalPackagePriceOverrides.forEach((u, P) => {
              this.m_mapPriceKeyDescriptions.has(t) &&
                ((i = !0),
                this.m_mapLocalPackagePriceOverrides.get(P).delete(t),
                this.GetPriceGridCellCallbackList(P, t).Dispatch(
                  this.GetPrice(P, t),
                ),
                n.add(P));
            });
            for (const u of n)
              this.GetPackageOverridesCallbackList(u).Dispatch();
            i && this.DispatchPriceOverridesCallbacks();
          }
          DiscardLocalPriceOverridesForPackage(t) {
            this.m_mapLocalPackagePriceOverrides.get(t)?.forEach((i, n) => {
              this.GetPriceGridCellCallbackList(t, n).Dispatch(
                this.GetSavedPrice(t, n),
              );
            }),
              this.m_mapLocalPackagePriceOverrides.delete(t),
              this.GetPackageOverridesCallbackList(t).Dispatch(),
              this.DispatchPriceOverridesCallbacks();
          }
          BuildNewPricingProposal(t, i) {
            const n = {
              packageID: t,
              rtSubmitted: Math.floor(Date.now() / 1e3),
              submitterID: m.iA.accountid,
              prices: {},
              eState: w.Al,
              bPartnerWillPublish: i,
            };
            for (const P of this.m_rgKnownPriceKeys)
              n.prices[P] = this.GetPrice(t, P);
            const u = this.m_mapPackageCountryOverridePrice.get(t);
            if (u) for (const P of u.keys()) n.prices[P] = this.GetPrice(t, P);
            return n;
          }
          async SubmitProposalToServer(t, i, n) {
            const u = this.BuildNewPricingProposal(t, i),
              P = JSON.stringify(u.prices),
              k = (0, m.Tc)("publisherid", "application_config"),
              z =
                m.TS.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                k +
                "/" +
                t,
              C = new FormData();
            C.append("sessionid", (0, m.KC)()),
              C.append("partner_will_publish", i ? "1" : "0"),
              C.append("prices", P);
            let ee = null;
            try {
              const $ = await d().post(z, C, {
                withCredentials: !0,
                cancelToken: n?.token,
              });
              if (
                $?.status == 200 &&
                $.data?.success == h.R &&
                $.data.eState != w.nD
              ) {
                if ($.data.eState == w.pJ) {
                  this.m_mapPriceProposals.delete(t);
                  for (const le of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.has(t) ||
                      this.m_mapPackagePrice.set(t, new Map()),
                      this.m_mapPackagePrice.get(t).set(le, u.prices[le]);
                } else
                  (u.eState = $.data.eState),
                    (u.proposalKey = $.data.proposalKey),
                    this.m_mapPriceProposals.set(t, u);
                return this.DiscardLocalPriceOverridesForPackage(t), $.data;
              }
            } catch ($) {
              ee = $;
            }
            const ie = (0, E.H)(ee);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                ie.strErrorMsg,
                ie,
              ),
              ee?.response?.data ?? { success: h.zi }
            );
          }
          async PublishApprovedProposal(t, i, n = 0) {
            const u = this.m_mapPriceProposals.get(t);
            if (u?.eState != w.Zo || !u?.proposalKey) return { success: h.nO };
            const P = (0, m.Tc)("publisherid", "application_config"),
              k =
                m.TS.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                P +
                "/" +
                t,
              z = new FormData();
            z.append("sessionid", (0, m.KC)()),
              z.append("proposal_key", u.proposalKey);
            let C = null;
            try {
              const ie = await d().post(k, z, {
                withCredentials: !0,
                cancelToken: i?.token,
                timeout: n,
              });
              if (ie?.status == 200 && ie.data?.success == h.R) {
                this.m_mapPriceProposals.delete(t);
                for (const $ of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(t).set($, u.prices[$]),
                    this.GetPriceGridCellCallbackList(t, $).Dispatch(
                      this.GetSavedPrice(t, $),
                    );
                return (
                  this.GetPackageOverridesCallbackList(t).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  ie.data
                );
              }
            } catch (ie) {
              C = ie;
            }
            const ee = (0, E.H)(C);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                ee.strErrorMsg,
                ee,
              ),
              C?.response?.data ?? { success: h.zi }
            );
          }
          async CancelProposal(t, i) {
            const n = this.m_mapPriceProposals.get(t);
            if (!n?.proposalKey) return { success: h.nO };
            const u = (0, m.Tc)("publisherid", "application_config"),
              P =
                m.TS.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                u +
                "/" +
                t,
              k = new FormData();
            k.append("sessionid", (0, m.KC)()),
              k.append("proposal_key", n.proposalKey);
            let z = null;
            try {
              const ee = await d().post(P, k, {
                withCredentials: !0,
                cancelToken: i?.token,
              });
              if (ee?.status == 200 && ee.data?.success == h.R) {
                this.m_mapPriceProposals.delete(t);
                for (const ie of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(t, ie).Dispatch(
                    this.GetSavedPrice(t, ie),
                  );
                return (
                  this.GetPackageOverridesCallbackList(t).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  ee.data
                );
              }
            } catch (ee) {
              z = ee;
            }
            const C = (0, E.H)(z);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                C.strErrorMsg,
                C,
              ),
              z?.response?.data ?? { success: h.zi }
            );
          }
          GetLocalOverrideCountForPriceKey(t) {
            return this.m_mapOverridesPerPriceKey.get(t) ?? 0;
          }
          BAnyPackagePriceBelowMin(t) {
            if (!t) return !1;
            for (let i of this.m_rgKnownPriceKeys) {
              let n = this.GetPrice(t, i);
              if (n === void 0) continue;
              let { nMinPriceInCents: u, nMaxPriceInCents: P } = L(t, i);
              if (n < u) return !0;
            }
            return !1;
          }
        };
        U([r.sH], W.prototype, "m_mapOverridesPerPriceKey", 2),
          U([G.oI], W.prototype, "OverridePrice", 1),
          U([r.XI], W.prototype, "UpdateOverridesPerPriceKey", 1);
        let o = W;
        function K(a, t) {
          if (a.strPriceKey == t.strPriceKey) {
            const i = (0, re.ww)(a.packageID),
              n = (0, re.ww)(t.packageID);
            return (0, p.kd)(i, n);
          } else return (0, p.kd)(ae(a.strPriceKey), ae(t.strPriceKey));
        }
        function Y(a) {
          const t = a.split("_")[0];
          return o.Get().m_mapCurrencyData.get(t);
        }
        function te(a, t) {
          if (t === void 0) return ["", "", ""];
          const i = Y(t) ?? Y("USD");
          let n = "";
          if (typeof a == "number") {
            let u = a.toString();
            u.length < 3 && (u = (u.length == 1 ? "0" : "") + "0" + u);
            const P = u.length - 2;
            for (let k = 0; k < P; k++) {
              const z = u.charAt(k);
              (n += z),
                k < P - 1 &&
                  (P - k - 1) % 3 == 0 &&
                  z != "-" &&
                  (n += i.strThousandsSeparator);
            }
            i.bWholeUnitsOnly ||
              ((n += i.strDecimalSymbol), (n += u.substr(u.length - 2)));
          }
          return i.bSymbolIsPrefix
            ? [i.strSymbol + i.strSymbolAndNumberSeparator, n, ""]
            : ["", n, i.strSymbolAndNumberSeparator + i.strSymbol];
        }
        const A = new Map([
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
        function ae(a) {
          return A.has(a) ? A.get(a) : a.indexOf("_") > 0 ? "ZZZ" + a : a;
        }
        function ne(a, t) {
          return o.Get().GetPrice(a, t);
        }
        function ce(a) {
          return o.Get().GetPublishedCountryOverrides(a);
        }
        function I(a, t) {
          return o.Get().GetPublishedPriceCountryOverride(a, t);
        }
        function v(a, t) {
          return o.Get().GetPublishedPrice(a, t);
        }
        function R(a, t) {
          return o.Get().GetProposedPrice(a, t);
        }
        function D(a, t) {
          return o.Get().GetLocalOverridePrice(a, t);
        }
        function H(a) {
          return o.Get().GetMinimumDiscountPrice(a);
        }
        function N(a) {
          const t = o.Get().m_strDisplayPriceKey,
            i = o.Get().GetPrice(a, t);
          return te(i, t).join("");
        }
        function Z(a) {
          const [t, i] = l.useState(o.Get().m_strDisplayPriceKey);
          return (0, G.hL)(o.Get().m_displayPriceKeyCallbackList, i), Q(a, t);
        }
        function Q(a, t) {
          const [i, n] = l.useState(o.Get().GetPrice(a, t));
          return (
            (0, G.hL)(o.Get().GetPriceGridCellCallbackList(a, t), n),
            l.useEffect(() => n(o.Get().GetPrice(a, t)), [a, t]),
            te(i, t).join("")
          );
        }
        function J(a, t, i) {
          let n = 0;
          for (const u of a) {
            const P = new Array(),
              k = new Array(),
              z = o.Get().GetPrice(u, "USD");
            if (!(!z || z <= 0)) {
              for (const C of o.Get().m_rgKnownPriceKeys) {
                if (C == "USD") continue;
                const ee = o.Get().GetPrice(u, "USD"),
                  { nSuggestedPriceInCents: ie, nGuidelinesLevel: $ } = (0,
                  j.$)(t, i, ee, (0, b.ei)(C), (0, y.vS)(C));
                if ($ === null) continue;
                o.Get().GetPrice(u, C) != ie && (P.push(C), k.push(ie));
              }
              P.length > 0 &&
                (o.Get().OverridePricesForPackage(u, P, k), (n += 1));
            }
          }
          n > 0 && o.Get().DispatchPriceOverridesCallbacks();
        }
        function X() {
          const a = (0, re.Yr)(),
            t = (0, M.cT)(),
            i = (0, O.Bb)();
          return l.useCallback(() => J(a, t, i), [a, t, i]);
        }
        function q(a, t) {
          const i = (0, G.CH)();
          (0, G.hL)(o.Get().GetPriceGridCellCallbackList(a, t), i);
          const n = o.Get().GetPrice(a, t),
            u = (0, M.cT)(),
            P = (0, O.Bb)();
          (0, G.hL)(o.Get().GetPriceGridCellCallbackList(a, "USD"), i);
          const k = o.Get().GetPrice(a, "USD"),
            { nSuggestedPriceInCents: z, nGuidelinesLevel: C } = (0, j.$)(
              u,
              P,
              k,
              (0, b.ei)(t),
              (0, y.vS)(t),
            ),
            ee = l.useCallback((We) => o.Get().OverridePrice(a, t, We), [a, t]),
            ie = o.Get().GetPublishedPrice(a, t),
            $ = o.Get().GetProposedPrice(a, t),
            { nMinPriceInCents: le, nMaxPriceInCents: fe } = L(a, t),
            Pe = T(t, n, C);
          return l.useMemo(
            () => ({
              nPriceInCents: n,
              nProposedPriceInCents: $,
              nPublishedPriceInCents: ie,
              nMinPriceInCents: le,
              nMaxPriceInCents: fe,
              nMaxDiscountPercentage: Pe,
              nSuggestedPriceInCents: z,
              fnSetPrice: ee,
            }),
            [n, $, ie, le, fe, Pe, z, ee],
          );
        }
        const x = 90,
          me = 10;
        function T(a, t, i, n) {
          const u = o.Get().GetMinimumDiscountPrice(a),
            P = t ? Math.floor((100 * (t - u)) / t) : x,
            k = Math.min(x, Math.floor((100 * (i - 50)) / i));
          return n
            ? t < u || P < me
              ? null
              : Math.max(Math.min(P, x), 0)
            : P < k
              ? P
              : null;
        }
        function e(a) {
          let t = () => o.Get().BAnyPackagePriceBelowMin(a),
            [i, n] = l.useState(t),
            u = l.useCallback(() => {
              let P = o.Get().BAnyPackagePriceBelowMin(a);
              n(P);
            }, [a, n]);
          return (0, G.hL)(o.Get().GetPackageOverridesCallbackList(a), u), i;
        }
        function s(a) {
          return o.Get().BAnyPackagePriceBelowMin(a);
        }
        function L(a, t) {
          let i = o.Get();
          const n = i.GetMinimumBasePrice(t),
            u = i.m_setRecurringSubscriptions.has(a)
              ? i.GetPublishedPrice(a, t)
              : null;
          return { nMinPriceInCents: n, nMaxPriceInCents: u };
        }
        function de() {
          return l.useCallback((a, t, i) => {
            const n = o.Get().GetPrice(a, t);
            return (
              o.Get().OverridePrice(a, t, i),
              n == i
                ? null
                : {
                    packageID: a,
                    strPriceKey: t,
                    nPriceInCents: i,
                    nOldPriceInCents: n,
                  }
            );
          }, []);
        }
        function oe(a) {
          const t = (0, G.CH)();
          return (
            (0, G.hL)(o.Get().GetPriceGridCellCallbackList(a, "USD"), t),
            o.Get().m_mapPriceProposals.get(a)
          );
        }
        function ge() {
          return Array.from(o.Get().m_mapPriceProposals.values());
        }
        function he(a) {
          return o.Get().m_mapPriceProposals.get(a);
        }
        function Me(a) {
          let t = !1;
          for (const i of o.Get().m_rgKnownPriceKeys) {
            let n = o.Get().GetPublishedPrice(a, i);
            t = t || (n != 0 && n !== void 0);
          }
          return t;
        }
        function be(a) {
          const t = oe(a),
            i = [];
          for (const n of o.Get().m_rgKnownPriceKeys) {
            const u = t.prices[n],
              P = o.Get().GetPublishedPrice(a, n);
            u != P &&
              i.push({
                packageID: a,
                strPriceKey: n,
                nPriceInCents: u,
                nOldPriceInCents: P,
              });
          }
          return i;
        }
        function Be() {
          return o.Get().m_rgKnownPriceKeys;
        }
        function pe(a) {
          let t = o.Get().m_mapPriceKeyDescriptions.get(a);
          return t ? t.strDescription : "";
        }
        function Ie(a) {
          let t = o.Get().m_mapPriceKeyDescriptions.get(a);
          return t ? t.bRequired : !1;
        }
        function ye(a) {
          return l.useCallback(() => {
            o.Get().DiscardAllLocalPriceOverridesForKey(a);
          }, [a]);
        }
        function Oe(a) {
          return l.useCallback(() => {
            o.Get().DiscardLocalPriceOverridesForPackage(a);
          }, [a]);
        }
        function we(a) {
          return l.useCallback(() => {
            o.Get().CancelProposal(a);
          }, [a]);
        }
        function Ee() {
          const [a, t] = l.useState(o.Get().m_strDisplayPriceKey),
            i = o.Get().m_rgKnownPriceKeys,
            n = l.useCallback((u) => {
              t(u),
                (o.Get().m_strDisplayPriceKey = u),
                o.Get().m_displayPriceKeyCallbackList.Dispatch(u);
            }, []);
          return { strPriceKey: a, rgSupportedPriceKeys: i, fnSetPriceKey: n };
        }
        function _e(a) {
          const t = (0, G.CH)();
          return (
            (0, G.hL)(o.Get().m_allPriceOverridesCallbackList, t),
            o.Get().BHasLocalPriceOverrides(a)
          );
        }
        function Se(a) {
          return o.Get().BHasLocalPriceOverrides(a);
        }
        function ve() {
          const [a, t] = l.useState(() => o.Get().GetAllLocalPriceOverrides());
          return (0, G.hL)(o.Get().m_allPriceOverridesCallbackList, t), a;
        }
        function Te(a) {
          return (0, f.q3)(() => o.Get().GetLocalOverrideCountForPriceKey(a));
        }
        function Le() {
          return l.useCallback(
            () => o.Get().GetAllLocalPriceOverrides()?.length > 0,
            [],
          );
        }
        function ze() {
          return l.useCallback(
            () => o.Get().DiscardAllLocalPriceOverrides(),
            [],
          );
        }
        function Ue() {
          return o.Get().OverridePrice;
        }
        function Ke() {
          return l.useCallback(
            (a, t, i) => o.Get().SubmitProposalToServer(a, t, i),
            [],
          );
        }
        function ke() {
          return l.useCallback(
            (a, t) => o.Get().PublishApprovedProposal(a, t, 60 * 1e3),
            [],
          );
        }
        function je(a) {
          let t = [];
          const i = o.Get().m_rgKnownPriceKeys;
          for (let n of a) {
            if (Me(n)) continue;
            let u = !1;
            for (const P of i) {
              if (!o.Get().BPriceKeyRequired(P)) continue;
              if (!o.Get().GetPrice(n, P)) {
                u = !0;
                break;
              }
            }
            u && t.push(n);
          }
          return t;
        }
      },
      601: (se, V, c) => {
        "use strict";
        c.d(V, { es: () => r, nm: () => re });
        var B = c(41301),
          d = c(82734),
          l = c(18210);
        function r(f, g) {
          const w = (0, l.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
            j = (0, l.we)("#PackageGrid_NoBaseGameFoundForPackage"),
            M = f.original.appName,
            O = g.original.appName,
            b = M == w,
            y = M == j,
            _ = !b && !y,
            S = O == w,
            U = O == j,
            W = !S && !U;
          if (_ && W) return M.localeCompare(O);
          if (!_ && !W)
            if (b == S && y == U) {
              const o = f.original.packageName,
                K = g.original.packageName;
              return o && K
                ? o.localeCompare(K)
                : !o && !K
                  ? f.original.packageID - g.original.packageID
                  : o
                    ? -1
                    : 1;
            } else return b ? -1 : 1;
          else return _ ? -1 : 1;
        }
        const h = (f) => f.nextElementSibling,
          E = (f) => f.previousElementSibling,
          F = (f, g) => {
            const w = f.getAttribute("data-table-column-id"),
              j = f.parentElement;
            let M = j && g(j);
            for (; w && M; ) {
              for (const O of Array.from(M.children))
                if (w == O.getAttribute("data-table-column-id")) return O;
              M = g(M);
            }
            return null;
          },
          G = new Map([
            [B.Oy, (f) => F(f, E)],
            [B.JI, h],
            [B.BH, (f) => F(f, h)],
            [B.ek, E],
            [B.$R, (f) => F(f, h)],
            [B.wd, (f) => F(f, h)],
          ]);
        function p(f) {
          return (0, d.Kf)(
            f,
            (g) => g.getAttribute("data-table-column-id") != null,
          );
        }
        function m(f) {
          const g = Array.prototype.slice.call(f.children).reverse();
          for (; g.length > 0; ) {
            const w = g.pop();
            if (w.tagName.toLowerCase() === "input") return w;
            g.push(...Array.prototype.slice.call(w.children).reverse());
          }
          return null;
        }
        function re(f) {
          let g = G.get(f.keyCode);
          if ((f.keyCode === B.$R && f.shiftKey && (g = (M) => F(M, E)), !g))
            return;
          const w = p(f.currentTarget);
          let j = g(w);
          for (; j; ) {
            const M = m(j);
            if (M) {
              M.focus(), f.preventDefault();
              return;
            }
            j = g(j);
          }
        }
      },
      28763: (se, V, c) => {
        "use strict";
        c.d(V, { M: () => d, o: () => B });
        const B = "America/Los_Angeles";
        function d(l) {
          const h = c(87937).unix(l).tz(B);
          return (
            h.seconds(0),
            h.minutes(0),
            h.hours(10),
            h.unix() < l && h.hours(34),
            h.unix()
          );
        }
      },
      75083: (se, V, c) => {
        "use strict";
        c.d(V, { $: () => M, v: () => O });
        var B = c(7850),
          d = c(64238),
          l = c.n(d),
          r = c(69041),
          h = c(8928),
          E = c(69289),
          F = c(3877),
          G = c(86668),
          p = c(24660),
          m = c(80549),
          re = c(3166);
        function f(b) {
          const {
              variant: y,
              size: _ = "2",
              minWidth: S = "fit-content",
              color: U,
              loading: W,
              children: o,
              onClick: K,
              icon: Y,
              focusable: te,
              navProps: A,
              ...ae
            } = b,
            ne = (0, re.Qn)(),
            ce = W
              ? (0, B.jsx)(G.k, {
                  size: _,
                  color: U,
                  variant: "bright",
                  children: o,
                })
              : o,
            I = W ? void 0 : K,
            v = te ?? A?.focusable ?? !!I,
            R = (0, m.f)("Button", y),
            D = {
              type: "button",
              ...(0, E.mz)(
                {
                  ...ae,
                  variant: R,
                  size: _,
                  minWidth: S,
                  color: U,
                  className: l()(r.Button, Y && r.Icon),
                  onClick: I,
                },
                j,
              ),
              children: ce,
            };
          return ne && (v || A)
            ? (0, B.jsx)(p.fu, { ...D, ...(A || {}), focusable: v })
            : (0, B.jsx)("button", { ...D });
        }
        function g(b) {
          const {
              variant: y,
              size: _ = "2",
              minWidth: S = "fit-content",
              disabled: U,
              icon: W,
              focusable: o,
              navProps: K,
              ...Y
            } = b,
            te = (0, re.Qn)(),
            A = (0, m.f)("Button", y),
            ae = U ? w : void 0,
            ne = (0, E.mz)(
              {
                onClick: ae,
                "aria-disabled": U,
                ...Y,
                variant: A,
                size: _,
                minWidth: S,
                className: l()(r.Button, W && r.Icon, (0, F.T)()),
              },
              j,
            );
          return te && (o || K)
            ? (0, B.jsx)(p.Ii, { ...ne, ...(K || {}), focusable: o })
            : (0, B.jsx)("a", { ...ne });
        }
        function w(b) {
          b.preventDefault();
        }
        const j = [
            ...h.L,
            { prop: "size", responsive: !0, className: (b) => r[`Size-${b}`] },
            { prop: "variant", className: (b) => r[`Variant-${b}`] },
            { prop: "color", dataProperty: (b) => ["accent-color", `${b}`] },
            {
              prop: "width",
              className: r.Width,
              cssProperty: "--width",
              responsive: !0,
            },
            {
              prop: "minWidth",
              className: r.MinWidth,
              cssProperty: "--min-width",
              responsive: !0,
            },
          ],
          M = f,
          O = g;
      },
      86668: (se, V, c) => {
        "use strict";
        c.d(V, { k: () => re });
        var B = c(7850),
          d = c(73406),
          l = c.n(d),
          r = c(69289),
          h = c(60351),
          E = c(64238),
          F = c.n(E),
          G = c(68031),
          p = c(8928),
          m = c(80549);
        function re(w) {
          const {
              size: j = "3",
              loading: M = !0,
              children: O,
              color: b,
              variant: y,
              ..._
            } = w,
            S = (0, m.f)("LoadingSpinner", y);
          return O || !M
            ? (0, B.jsxs)(h.az, {
                position: "relative",
                ..._,
                width: "fit-content",
                children: [
                  (0, B.jsx)("div", {
                    "data-visibility": !M,
                    className: d.ChildContainer,
                    children: O,
                  }),
                  M &&
                    (0, B.jsx)(G.s, {
                      position: "absolute",
                      inset: "0",
                      justify: "center",
                      align: "center",
                      children: (0, B.jsx)(f, {
                        size: j,
                        color: b,
                        variant: S,
                      }),
                    }),
                ],
              })
            : (0, B.jsx)(f, { size: j, color: b, variant: S, ..._ });
        }
        function f(w) {
          const { className: j, color: M, ...O } = (0, r.mz)(w, g);
          return (0, B.jsx)("div", {
            "data-accent-color": M,
            className: F()(j, d.Spinner),
            ...O,
          });
        }
        const g = [
          ...p.L,
          { prop: "size", responsive: !0, className: (w) => d[`Size-${w}`] },
          { prop: "variant", className: (w) => d[`Variant-${w}`] },
        ];
      },
      98254: (se, V, c) => {
        "use strict";
        c.d(V, { z: () => w });
        var B = c(7850),
          d = c(90626),
          l = c(64238),
          r = c.n(l),
          h = c(16180),
          E = c.n(h),
          F = c(68031),
          G = c(15252),
          p = c(76854);
        function m(M) {
          const {
            value: O,
            onValueChange: b,
            options: y,
            getOptionLabel: _,
            disabled: S,
            ...U
          } = M;
          return (0, B.jsx)(w.Root, {
            value: O,
            onValueChange: b,
            disabled: S,
            ...U,
            children: y.map((W) => {
              const o = _ ? _(W) : W;
              return (0, B.jsx)(w.Option, { value: W, children: o }, o);
            }),
          });
        }
        function re(M) {
          const {
              value: O,
              onValueChange: b,
              disabled: y,
              render: _,
              ...S
            } = M,
            U = (0, d.useRef)(null),
            W = (0, d.useCallback)((ne, ce) => {
              if (!U.current) return;
              const I = [...U.current.querySelectorAll("[data-radio-id]")];
              if (I.length !== 0)
                for (let v = 0; v < I.length; v++) {
                  const R = I[v];
                  if (!R.dataset.radioId) continue;
                  if (R.dataset.radioId === ne) {
                    const H = (v + ce + I.length) % I.length,
                      N = I[H];
                    N.click(), N.focus();
                  }
                }
            }, []),
            o = (0, d.useCallback)((ne) => W(ne, 1), [W]),
            K = (0, d.useCallback)((ne) => W(ne, -1), [W]),
            Y = (0, d.useMemo)(
              () => ({
                value: O,
                onValueChange: b,
                bDisabled: y,
                onSelectNext: o,
                onSelectPrev: K,
              }),
              [O, b, y, o, K],
            ),
            te = { role: "radiogroup", "aria-disabled": y, ref: U, ...S },
            A = (0, B.jsx)(F.s, {
              direction: "column",
              gap: "2",
              role: "radiogroup",
              "aria-disabled": y,
              ...S,
            }),
            ae = (0, p.Q)(_, A, te);
          return (0, B.jsx)(j, { value: Y, children: ae });
        }
        function f(M) {
          const { value: O, ref: b, children: y, render: _ } = M,
            S = (0, d.useContext)(j),
            U = (0, d.useId)();
          if (!S)
            return (
              console.error(
                "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
              ),
              null
            );
          const {
              value: W,
              onValueChange: o,
              bDisabled: K,
              onSelectNext: Y,
              onSelectPrev: te,
            } = S,
            A = W === O,
            ae = () => {
              K || A || o(O);
            },
            ce = {
              role: "radio",
              "aria-checked": A,
              "aria-disabled": K,
              "data-radio-id": U,
              onClick: ae,
              onKeyDown: (v) => {
                if (!K)
                  switch (v.key) {
                    case " ": {
                      ae(), v.preventDefault(), v.stopPropagation();
                      break;
                    }
                    case "ArrowRight":
                    case "ArrowDown": {
                      Y(U), v.preventDefault(), v.stopPropagation();
                      break;
                    }
                    case "ArrowLeft":
                    case "ArrowUp": {
                      te(U), v.preventDefault(), v.stopPropagation();
                      break;
                    }
                  }
              },
              tabIndex: A ? 0 : -1,
              ref: b,
              children: y,
            },
            I = (0, B.jsx)(g, { bDisabled: K });
          return (0, p.Q)(_, I, ce, { bSelected: A, bDisabled: K });
        }
        function g(M) {
          const { children: O, className: b, bDisabled: y, ..._ } = M;
          return (0, B.jsxs)(F.s, {
            cursor: "default",
            gap: "2",
            className: r()(h.Option, y && h.Disabled),
            ..._,
            children: [
              (0, B.jsx)("div", { className: h.RadioCircle }),
              (0, B.jsx)(G.EY, { children: O }),
            ],
          });
        }
        const w = Object.assign(m, { Root: re, Option: f }),
          j = (0, d.createContext)(null);
      },
      3301: (se, V, c) => {
        "use strict";
        c.d(V, {
          bS: () => l,
          de: () => E,
          j4: () => G,
          k8: () => r,
          uF: () => F,
          vS: () => p,
        });
        var B = c(34104),
          d = c(90247);
        function l(m) {
          return B.CS;
        }
        function r(m) {
          switch (m) {
            case d._S:
              return "usd_cis";
            case d.aL:
              return "usd_sasia";
            case d.M_:
              return "usd_latam";
            case d.aY:
              return "usd_mena";
            default:
              return "usd_invalid";
          }
        }
        function h(m) {
          switch (m) {
            case k_ERegionCodeCIS:
              return "CIS";
            case k_ERegionCodeSAsia:
              return "South Asia";
            case k_ERegionCodeLATAM:
              return "LATAM";
            case k_ERegionCodeMENA:
              return "MENA";
            default:
              return "Invalid Region";
          }
        }
        function E(m) {
          switch (m) {
            case d._S:
              return "CIS";
            case d.aL:
              return "SASIA";
            case d.M_:
              return "LATAM";
            case d.aY:
              return "MENA";
            default:
              return "Invalid Region";
          }
        }
        function F(m) {
          switch (m) {
            case "CIS":
              return d._S;
            case "SASIA":
              return d.aL;
            case "LATAM":
              return d.M_;
            case "MENA":
              return d.aY;
            default:
              return d.YS;
          }
        }
        function G(m) {
          switch (m) {
            case d._S:
              return "The Commonwealth of Independent States";
            case d.aL:
              return "South Asia";
            case d.M_:
              return "Latin America";
            case d.aY:
              return "Middle East and North Africa";
            default:
              return "Invalid Region";
          }
        }
        function p(m) {
          switch (m?.toLowerCase()) {
            case "usd_cis":
              return d._S;
            case "usd_sasia":
              return d.aL;
            case "usd_latam":
              return d.M_;
            case "usd_mena":
              return d.aY;
            default:
              return d.YS;
          }
        }
      },
      13401: (se, V, c) => {
        "use strict";
        c.d(V, { Bb: () => G, MA: () => F, jY: () => E });
        var B = c(7850),
          d = c(55409),
          l = c(90626),
          r = c(93357);
        const h = l.createContext({
          eConversionMethod: d.Y5.lZ,
          setConversionMethod: (p) => {},
          rgAvailableConversionMethods: [],
        });
        function E(p) {
          const { eInitialConversionMethod: m } = p,
            re = (0, r.cT)(),
            [f, g] = l.useState(m || d.Y5.lZ),
            w = l.useMemo(() => {
              const j = re ? re.GetAvailableConversionMethods() : [];
              return {
                eConversionMethod: f,
                setConversionMethod: g,
                rgAvailableConversionMethods: j,
              };
            }, [f, g, re]);
          return (0, B.jsx)(h.Provider, { value: w, children: p.children });
        }
        function F() {
          return l.useContext(h);
        }
        function G() {
          return l.useContext(h).eConversionMethod;
        }
      },
      7608: (se, V, c) => {
        "use strict";
        c.d(V, { $: () => r });
        var B = c(90247),
          d = c(34104),
          l = c(71742);
        function r(h, E, F, G, p) {
          if (!h)
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          let m = null;
          for (let M of h.GetUSDPricePointsInCents())
            if (M >= F) {
              m = M;
              break;
            }
          const re = p && p < B.Hc;
          if ((G == d.CS && !re) || !m)
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          const f = h.GetRecommendPrice(m, G, p, E),
            g = h.GetRecommendPrice(m, d.CS, void 0, E);
          if (
            ((0, l.wT)(
              f,
              `Missing requested currency guide for  ${m}/${G}/${p}/${E}`,
            ),
            (0, l.wT)(g, `Missing usd guide for  ${m}/${p}/${E}`),
            !f || !g)
          )
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          let w = f.price;
          const j = g.price;
          if (j != F) {
            const M = F / j;
            (m *= M), (w = Math.ceil(w * M));
          }
          return { nSuggestedPriceInCents: w, nGuidelinesLevel: m };
        }
      },
      93357: (se, V, c) => {
        "use strict";
        c.d(V, { mj: () => M, gC: () => O, cT: () => w });
        var B = c(90626),
          d = c(90247),
          l = c(34104),
          r = c(55409);
        const h = r.Y5.lZ;
        class E {
          m_mapUSDPrice = new Map();
          m_mapKeyToGuidePrice = new Map();
          m_rgUSDPricePointInCents = [];
          m_setConversionMethod = new Set();
          m_setSupportedCurrencies = new Set();
          m_setSupportedRegions = new Set();
          GetKey(y, _, S, U = h) {
            return `${y}_${_}_${S || d.YS}_${U}`;
          }
          GetAvailableConversionMethods() {
            return Array.from(this.m_setConversionMethod).sort();
          }
          GetAnyPricePoint() {
            return Array.from(
              this.m_mapUSDPrice.get(r.Y5.lZ)?.values() || [],
            )[0];
          }
          BIsSupportCurrencyAndOrRegion(y, _) {
            return _
              ? y == l.CS && this.m_setSupportedRegions.has(_)
              : this.m_setSupportedCurrencies.has(y);
          }
          GetRecommendPrice(y, _, S, U = h) {
            const W = this.GetKey(y, _, S, U);
            return this.m_mapKeyToGuidePrice.get(W);
          }
          GetScaledRecommendedPrice(y, _, S, U = h) {
            let W = -1,
              o = -1;
            for (const A of this.m_mapUSDPrice.get(U).keys()) {
              const ae = Math.abs(A - y);
              (W == -1 || ae < o) && ((W = A), (o = ae));
            }
            const K = this.m_mapUSDPrice.get(U).get(W),
              Y = S
                ? K.region_prices.find((A) => A.region_code == S)
                : K.currency_prices.find((A) => A.currency_code == _),
              te = y / W;
            return {
              currency_code: Y?.currency_code,
              region_code: Y?.region_code,
              price: Math.ceil((Y?.price || 0) * te),
            };
          }
          GetUSDPricePointsInCents() {
            return this.m_rgUSDPricePointInCents;
          }
          constructor(y) {
            let _ = new Set();
            y.forEach((S) => {
              const U = S.convert_method ?? h;
              this.m_setConversionMethod.add(U),
                this.m_mapUSDPrice.has(U) ||
                  this.m_mapUSDPrice.set(U, new Map()),
                this.m_mapUSDPrice.get(U).set(S.usd_price, S),
                _.add(S.usd_price),
                S.currency_prices.forEach((o) => {
                  const K = this.GetKey(
                    S.usd_price,
                    o.currency_code,
                    d.YS,
                    S.convert_method || h,
                  );
                  this.m_mapKeyToGuidePrice.set(K, o),
                    this.m_setSupportedCurrencies.add(o.currency_code);
                }),
                S.region_prices.forEach((o) => {
                  const K = this.GetKey(
                    S.usd_price,
                    o.currency_code,
                    o.region_code,
                    S.convert_method || h,
                  );
                  if (
                    (this.m_mapKeyToGuidePrice.set(K, o),
                    this.m_setSupportedRegions.add(o.region_code),
                    this.m_setConversionMethod.has(r.Y5.bA))
                  ) {
                    const Y = {
                        currency_code: l.CS,
                        price: S.usd_price,
                        region_code: o.region_code,
                      },
                      te = this.GetKey(
                        S.usd_price,
                        l.CS,
                        o.region_code,
                        r.Y5.bA,
                      );
                    this.m_mapKeyToGuidePrice.set(te, Y);
                  }
                });
            }),
              (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
          }
        }
        var F = c(40497),
          G = c(67705);
        function p() {
          let b = (0, G.Fd)("pricing_guideline", "application_config");
          if (b) return Promise.resolve(b);
          {
            const y = F.L.getQueryData(M());
            return Promise.resolve(y ?? null);
          }
        }
        var m = c(13401),
          re = c(20194),
          f = c(71742),
          g = c(33220);
        function w() {
          const b = (0, re.I)(j());
          return (0, B.useMemo)(
            () => (b.data ? new E(b.data) : null),
            [b.data],
          );
        }
        function j() {
          return { queryKey: M(), queryFn: async () => await p() };
        }
        function M() {
          return ["PricingGuideline"];
        }
        function O(b) {
          const y = w(),
            _ = (0, m.Bb)();
          return {
            fnApplyGuidelines: (0, B.useCallback)(
              (U, W, o) => {
                if (
                  ((0, f.wT)(
                    y,
                    "Pricing Guideline Not Initialized by time conversion being triggered",
                  ),
                  y)
                ) {
                  for (let K = l.CS; K < l.mh; ++K) {
                    const Y = y.GetRecommendPrice(W, K, void 0, o ?? _)?.price;
                    if (Y && Y > 0) {
                      const te = (0, g.M1)(K);
                      b(U, te, Y);
                    }
                  }
                  for (let K = d._S; K < d.Hc; ++K) {
                    const Y = l.CS,
                      te = y.GetRecommendPrice(W, Y, K, o ?? _)?.price;
                    if (te && te > 0) {
                      const A = (0, g.pd)(Y, K).toUpperCase();
                      b(U, A, te);
                    }
                  }
                }
              },
              [_, b, y],
            ),
          };
        }
      },
      61075: (se, V, c) => {
        "use strict";
        c.d(V, { Al: () => d, Zo: () => h, nD: () => B, pJ: () => r });
        const B = 0,
          d = 1,
          l = 2,
          r = 3,
          h = 4;
      },
      55409: (se, V, c) => {
        "use strict";
        c.d(V, { Y5: () => B });
        var B = {};
        c.r(B), c.d(B, { bA: () => O, lZ: () => j, KC: () => M });
        var d = c(80613),
          l = c.n(d),
          r = c(75245),
          h = c(35038);
        function E(T) {
          return "unknown ERatingAgency ( " + T + " )";
        }
        function F(T) {
          return "unknown EAppRatingSource ( " + T + " )";
        }
        function G(T) {
          return "unknown ERatingDescriptorImage ( " + T + " )";
        }
        class p extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.descriptors || r.Sg(p.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    descriptors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    official_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    esrb_online_music_not_rated: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    descriptor_images: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(p.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new p();
            return p.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(p.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(p.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class m extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.rating_agency || r.Sg(m.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    rating: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    source: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    banned: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    required_age: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    use_age_gate: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    aux_data: { n: 7, c: p },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(e = !1) {
            return m.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(m.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(m.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new m();
            return m.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(m.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(m.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        function re(T) {
          return "unknown EContentSurveyMatureTag ( " + T + " )";
        }
        class f extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              f.prototype.elanguage || r.Sg(f.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    text: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(e = !1) {
            return f.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(f.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(f.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new f();
            return f.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(f.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(f.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class g extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.customer_notes || r.Sg(g.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    customer_notes: { n: 1, c: f, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: f, r: !0, q: !0 },
                    mature_tags: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    ai_external_service_name: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    ai_external_service_url: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(e = !1) {
            return g.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(g.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(g.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new g();
            return g.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(g.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(g.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const w = 0,
          j = 1,
          M = 2,
          O = 3,
          b = 4;
        function y(T) {
          return "unknown EPriceConversionMethod ( " + T + " )";
        }
        function _(T) {
          return "unknown EProtoBillingType ( " + T + " )";
        }
        function S(T) {
          return "unknown EProtoActivationCode ( " + T + " )";
        }
        function U(T) {
          return "unknown EProtoProposalState ( " + T + " )";
        }
        function W(T) {
          return "unknown EContentDescriptorSurveyState ( " + T + " )";
        }
        function o(T) {
          return "unknown ERatingQuestionaireCategory ( " + T + " )";
        }
        function K(T) {
          return "unknown EGeneratedGameRatingVersion ( " + T + " )";
        }
        function Y(T) {
          return "unknown EGameContentCategory ( " + T + " )";
        }
        function te(T) {
          return "unknown EContentSurveySection ( " + T + " )";
        }
        function A(T) {
          return "unknown EContentSurveySource ( " + T + " )";
        }
        function ae(T) {
          return "unknown EContentSurveyChildAppType ( " + T + " )";
        }
        function ne(T) {
          return "unknown EContentSurveyInheritAction ( " + T + " )";
        }
        function ce(T) {
          return "unknown EGeneratedAIContentType ( " + T + " )";
        }
        class I extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.method || r.Sg(I.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    method: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(I.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new I();
            return I.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(I.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(I.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class v extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.survey_section || r.Sg(v.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    survey_section: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    time_reviewed: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid_reviewer: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(v.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new v();
            return v.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(v.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(v.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class R extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.content_category || r.Sg(R.M()),
              d.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    content_category: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    questionaire_categories: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(R.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new R();
            return R.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(R.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(R.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class D extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.rating_agency || r.Sg(D.M()),
              d.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rating: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    required_age: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    descriptors: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    banned: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(D.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new D();
            return D.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(D.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(D.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class H extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.timestamp_generated || r.Sg(H.M()),
              d.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    timestamp_generated: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    generated_version: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    ratings: { n: 3, c: D, r: !0, q: !0 },
                    content_categories: { n: 4, c: R, r: !0, q: !0 },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = r.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(H.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new H();
            return H.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(H.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(H.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class N extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.desc_code_generated || r.Sg(N.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    desc_code_generated: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_content_moderation_strategy: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    external_service_name: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    external_service_url: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    desc_external_service_monetization: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(N.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new N();
            return N.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(N.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(N.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class Z extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.disclosure || r.Sg(Z.M()),
              d.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    disclosure: { n: 1, c: g },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Z.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new Z();
            return Z.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Z.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Z.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class Q extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.id || r.Sg(Q.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(Q.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new Q();
            return Q.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Q.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Q.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptor";
          }
        }
        class J extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.surveyid || r.Sg(J.M()),
              d.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    state: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    descriptors: { n: 3, c: Q, r: !0, q: !0 },
                    timestamp_started: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_finished: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    developer_notes: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    keyvalues: {
                      n: 9,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    ratings: { n: 10, c: H },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: N },
                    internal_notes: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    all_ratings: { n: 14, c: m, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: v, r: !0, q: !0 },
                    disclosure: { n: 16, c: g },
                    inherited_surveyid: {
                      n: 17,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    started_from_scratch: {
                      n: 18,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    survey_aux_data: { n: 19, c: Z },
                    source: { n: 20, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    flags: {
                      n: 21,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(J.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new J();
            return J.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(J.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(J.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class X extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.appid || r.Sg(X.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(X.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new X();
            return X.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(X.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(X.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class q extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.appid || r.Sg(q.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(q.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new q();
            return q.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(q.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(q.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class x extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.surveyid || r.Sg(x.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    survey: { n: 2, c: J },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = r.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(x.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              L = new x();
            return x.deserializeBinaryFromReader(L, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(x.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(x.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var me;
        ((T) => {
          function e(L, de, oe) {
            return L.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, h.I8)(X, de, oe),
              x,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          T.GetActiveSurvey = e;
          function s(L, de, oe) {
            return L.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, h.I8)(q, de, oe),
              x,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          T.GetWorkingSurvey = s;
        })(me || (me = {}));
      },
      69041: (se) => {
        se.exports = {
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
      73406: (se) => {
        se.exports = {
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
      16180: (se) => {
        se.exports = {
          Option: "_3a3fNdwhCItYEc1SsUNP",
          Disabled: "_21NiFCkZFlTZ8WrrrxX0BX",
          RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
        };
      },
    },
  ]);
})();
