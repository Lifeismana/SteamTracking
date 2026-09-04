/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [9246],
    {
      31886: (ae, te, l) => {
        "use strict";
        l.d(te, {
          E1: () => w,
          OM: () => Y,
          Sm: () => z,
          Yr: () => G,
          pV: () => m,
          uw: () => p,
          vs: () => R,
          ww: () => b,
          xi: () => P,
          zt: () => g,
        });
        var h = l(90626),
          d = l(8323),
          o = l(54963),
          r = l(3166);
        const P = "pn";
        class T {
          m_rgPackageIDs;
          m_rgPackageData;
          m_mapPackageData;
          m_rgVisiblePackageIDs = [];
          m_visiblePackageIDsCallbackList = new d.lu();
          static s_Singleton;
          static Get() {
            return (
              T.s_Singleton ||
                ((T.s_Singleton = new T()), T.s_Singleton.Init()),
              T.s_Singleton
            );
          }
          constructor() {}
          Init() {
            let O = (0, r.Tc)("package_data", "application_config");
            O
              ? ((this.m_rgPackageIDs = O.map((v) => v.packageid)),
                (this.m_rgPackageData = O),
                (this.m_mapPackageData = new Map(
                  O.map((v) => [v.packageid, v]),
                )))
              : ((this.m_rgPackageIDs = (0, r.Tc)(
                  "package_ids",
                  "application_config",
                )),
                (this.m_mapPackageData = new Map()));
          }
          UpdatePackageNameSearchState(O) {
            const v = O.getState().columnFilters.find(
                (j) => j.id === "packageName",
              )?.value,
              y = new URL(window.location.href);
            v != decodeURIComponent(y.searchParams.get(P)) &&
              (v
                ? y.searchParams.set(P, encodeURIComponent(v))
                : y.searchParams.delete(P),
              window.history.replaceState({}, "", y.toString()));
          }
          UpdateVisiblePackageList(O) {
            const v = O.getVisibleRows().filter((y) => !y.getCanExpand());
            (this.m_rgVisiblePackageIDs = []),
              v.forEach((y) =>
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
        function Y() {
          return T.Get().m_rgPackageIDs;
        }
        function g() {
          return T.Get().m_rgPackageIDs;
        }
        function p() {
          return T.Get().m_rgPackageData;
        }
        function b(M) {
          let O = T.Get().m_mapPackageData.get(M);
          return O ? O.package_name : M.toString();
        }
        function w(M) {
          let O = T.Get().m_mapPackageData.get(M);
          return O ? !!O.released : !0;
        }
        function m() {
          return h.useCallback((M) => T.Get().UpdateVisiblePackageList(M), []);
        }
        function z(M) {
          T.Get().SetVisiblePackageList(M);
        }
        function G() {
          const [M, O] = h.useState(T.Get().m_rgVisiblePackageIDs);
          return (0, o.hL)(T.Get().m_visiblePackageIDsCallbackList, O), M;
        }
        function R() {
          return h.useMemo(
            () => (0, r.Tc)("publisherid", "application_config"),
            [],
          );
        }
      },
      37424: (ae, te, l) => {
        "use strict";
        l.d(te, {
          $i: () => Ue,
          Ao: () => e,
          Bt: () => ke,
          Ci: () => Te,
          Dl: () => x,
          FR: () => ne,
          FX: () => Me,
          Gs: () => D,
          NC: () => Le,
          Oc: () => C,
          RO: () => he,
          T7: () => Ee,
          T_: () => we,
          U3: () => Be,
          Wx: () => H,
          XB: () => Se,
          XK: () => pe,
          Y2: () => F,
          Y5: () => U,
          YB: () => _e,
          Zz: () => ze,
          _A: () => ee,
          d$: () => me,
          fZ: () => A,
          fr: () => Oe,
          h4: () => je,
          hm: () => de,
          iy: () => ve,
          mP: () => ye,
          mv: () => S,
          nT: () => s,
          oL: () => L,
          oj: () => V,
          tn: () => ce,
          v4: () => Pe,
          ww: () => Ke,
          xQ: () => X,
        });
        var h = l(41735),
          d = l.n(h),
          o = l(90626),
          r = l(14947),
          P = l(72604),
          T = l(34592),
          Y = l(8323),
          g = l(54963),
          p = l(48473),
          b = l(3166),
          w = l(31886),
          m = l(65946),
          z = l(71742),
          G = l(61075),
          R = l(7608),
          M = l(93357),
          O = l(13401),
          v = l(33220),
          y = l(3301),
          j = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          I = (a, t, i, n) => {
            for (
              var u = n > 1 ? void 0 : n ? K(t, i) : t, f = a.length - 1, k;
              f >= 0;
              f--
            )
              (k = a[f]) && (u = (n ? k(t, i, u) : k(u)) || u);
            return n && u && j(t, i, u), u;
          };
        const B = class ue {
          m_mapPackagePrice = new Map();
          m_mapPackageCountryOverridePrice = new Map();
          m_setRecurringSubscriptions = new Set();
          m_mapPriceProposals = new Map();
          m_mapLocalPackagePriceOverrides = new Map();
          m_mapPriceGridCellCallbackList = new Map();
          m_mapPackageOverridesCallbackList = new Map();
          m_allPriceOverridesCallbackList = new Y.lu();
          m_mapOverridesPerPriceKey = new Map();
          m_mapCurrencyData = new Map();
          m_mapPriceKeyDescriptions = new Map();
          m_rgKnownPriceKeys;
          m_strDisplayPriceKey = "USD";
          m_displayPriceKeyCallbackList = new Y.lu();
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
            const t = (0, b.Tc)("base_prices", "application_config");
            if (t && this.BIsPricePayloadValid(t))
              for (let _ in t) {
                const N = t[_],
                  re = parseInt(_),
                  se = new Map();
                this.m_mapPackagePrice.set(re, se);
                for (let q in N)
                  (0, v.IG)(q)
                    ? (this.m_mapPackageCountryOverridePrice.has(re) ||
                        this.m_mapPackageCountryOverridePrice.set(
                          re,
                          new Map(),
                        ),
                      this.m_mapPackageCountryOverridePrice
                        .get(re)
                        .set(q.toUpperCase(), N[q]))
                    : se.set(q, N[q]);
              }
            const i = (0, b.Tc)("recurring_subs", "application_config");
            if (i && Array.isArray(i))
              for (const _ of i) this.m_setRecurringSubscriptions.add(_);
            const n = (0, b.Tc)("pending_proposals", "application_config");
            if (n && this.BIsPendingPricePayloadValid(n))
              for (let _ in n) {
                const N = n[_],
                  re = parseInt(_);
                this.m_mapPriceProposals.set(re, N);
              }
            const u = (0, b.Tc)("valid_price_keys", "application_config");
            u &&
              this.BIsPriceKeyValid(u) &&
              (this.m_rgKnownPriceKeys = u.sort((_, N) =>
                (0, p.kd)(ie(_), ie(N)),
              ));
            const f = (0, b.Tc)("currency_data", "application_config");
            if (f && this.BIsCurrencyPayloadValid(f))
              for (let _ in f) {
                const N = f[_];
                this.m_mapCurrencyData.set(_, N);
              }
            const k = (0, b.Tc)("currency_descriptions", "application_config");
            if (k && this.BIsCurrencyDescriptionPayloadValid(k))
              for (let _ in k) {
                const N = k[_];
                this.m_mapPriceKeyDescriptions.set(_, N);
              }
          }
          BIsPricePayloadValid(t) {
            const i = t;
            if (!i || typeof i != "object") return !1;
            for (let n in i) {
              if (isNaN(parseInt(n))) return !1;
              const u = i[n];
              if (!u || typeof u != "object") return !1;
              for (let f in u)
                if (typeof f != "string" || typeof u[f] != "number") return !1;
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
            return (0, v.IG)(i)
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
            return n.has(i) || n.set(i, new Y.lu()), n.get(i);
          }
          GetPackageOverridesCallbackList(t) {
            if (!t) return null;
            let i = this.m_mapPackageOverridesCallbackList.get(t);
            return (
              i ||
                ((i = new Y.lu()),
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
            (0, z.wT)(
              i.length == n.length,
              `price list size doesn't match ${i.length} != ${n.length}`,
            );
            for (let f = 0; f < i.length; ++f) {
              const k = i[f],
                _ = n[f];
              this.m_mapLocalPackagePriceOverrides.has(t) ||
                this.m_mapLocalPackagePriceOverrides.set(t, new Map()),
                _ == this.GetSavedPrice(t, k)
                  ? this.m_mapLocalPackagePriceOverrides.get(t).delete(k)
                  : this.m_mapLocalPackagePriceOverrides.get(t).set(k, _),
                this.GetPriceGridCellCallbackList(t, k).Dispatch(_);
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
                i.forEach((u, f) => {
                  const k = this.GetSavedPrice(n, f);
                  t.push({
                    packageID: n,
                    strPriceKey: f,
                    nPriceInCents: u,
                    nOldPriceInCents: k,
                  });
                }),
              ),
              t.sort(E),
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
                  let f = this.m_mapOverridesPerPriceKey.get(u);
                  f || (f = 0), f++, this.m_mapOverridesPerPriceKey.set(u, f);
                });
              });
          }
          DiscardAllLocalPriceOverrides() {
            const t = this.GetAllLocalPriceOverrides();
            this.m_mapLocalPackagePriceOverrides.clear();
            let i = new Set();
            for (const n of t) {
              const { packageID: u, strPriceKey: f } = n;
              this.GetPriceGridCellCallbackList(u, f).Dispatch(
                this.GetPrice(u, f),
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
            this.m_mapLocalPackagePriceOverrides.forEach((u, f) => {
              this.m_mapPriceKeyDescriptions.has(t) &&
                ((i = !0),
                this.m_mapLocalPackagePriceOverrides.get(f).delete(t),
                this.GetPriceGridCellCallbackList(f, t).Dispatch(
                  this.GetPrice(f, t),
                ),
                n.add(f));
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
              submitterID: b.iA.accountid,
              prices: {},
              eState: G.Al,
              bPartnerWillPublish: i,
            };
            for (const f of this.m_rgKnownPriceKeys)
              n.prices[f] = this.GetPrice(t, f);
            const u = this.m_mapPackageCountryOverridePrice.get(t);
            if (u) for (const f of u.keys()) n.prices[f] = this.GetPrice(t, f);
            return n;
          }
          async SubmitProposalToServer(t, i, n) {
            const u = this.BuildNewPricingProposal(t, i),
              f = JSON.stringify(u.prices),
              k = (0, b.Tc)("publisherid", "application_config"),
              _ =
                b.TS.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                k +
                "/" +
                t,
              N = new FormData();
            N.append("sessionid", (0, b.KC)()),
              N.append("partner_will_publish", i ? "1" : "0"),
              N.append("prices", f);
            let re = null;
            try {
              const q = await d().post(_, N, {
                withCredentials: !0,
                cancelToken: n?.token,
              });
              if (
                q?.status == 200 &&
                q.data?.success == P.R &&
                q.data.eState != G.nD
              ) {
                if (q.data.eState == G.pJ) {
                  this.m_mapPriceProposals.delete(t);
                  for (const le of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.has(t) ||
                      this.m_mapPackagePrice.set(t, new Map()),
                      this.m_mapPackagePrice.get(t).set(le, u.prices[le]);
                } else
                  (u.eState = q.data.eState),
                    (u.proposalKey = q.data.proposalKey),
                    this.m_mapPriceProposals.set(t, u);
                return this.DiscardLocalPriceOverridesForPackage(t), q.data;
              }
            } catch (q) {
              re = q;
            }
            const se = (0, T.H)(re);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                se.strErrorMsg,
                se,
              ),
              re?.response?.data ?? { success: P.zi }
            );
          }
          async PublishApprovedProposal(t, i, n = 0) {
            const u = this.m_mapPriceProposals.get(t);
            if (u?.eState != G.Zo || !u?.proposalKey) return { success: P.nO };
            const f = (0, b.Tc)("publisherid", "application_config"),
              k =
                b.TS.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                f +
                "/" +
                t,
              _ = new FormData();
            _.append("sessionid", (0, b.KC)()),
              _.append("proposal_key", u.proposalKey);
            let N = null;
            try {
              const se = await d().post(k, _, {
                withCredentials: !0,
                cancelToken: i?.token,
                timeout: n,
              });
              if (se?.status == 200 && se.data?.success == P.R) {
                this.m_mapPriceProposals.delete(t);
                for (const q of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(t).set(q, u.prices[q]),
                    this.GetPriceGridCellCallbackList(t, q).Dispatch(
                      this.GetSavedPrice(t, q),
                    );
                return (
                  this.GetPackageOverridesCallbackList(t).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  se.data
                );
              }
            } catch (se) {
              N = se;
            }
            const re = (0, T.H)(N);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                re.strErrorMsg,
                re,
              ),
              N?.response?.data ?? { success: P.zi }
            );
          }
          async CancelProposal(t, i) {
            const n = this.m_mapPriceProposals.get(t);
            if (!n?.proposalKey) return { success: P.nO };
            const u = (0, b.Tc)("publisherid", "application_config"),
              f =
                b.TS.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                u +
                "/" +
                t,
              k = new FormData();
            k.append("sessionid", (0, b.KC)()),
              k.append("proposal_key", n.proposalKey);
            let _ = null;
            try {
              const re = await d().post(f, k, {
                withCredentials: !0,
                cancelToken: i?.token,
              });
              if (re?.status == 200 && re.data?.success == P.R) {
                this.m_mapPriceProposals.delete(t);
                for (const se of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(t, se).Dispatch(
                    this.GetSavedPrice(t, se),
                  );
                return (
                  this.GetPackageOverridesCallbackList(t).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  re.data
                );
              }
            } catch (re) {
              _ = re;
            }
            const N = (0, T.H)(_);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                N.strErrorMsg,
                N,
              ),
              _?.response?.data ?? { success: P.zi }
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
              let { nMinPriceInCents: u, nMaxPriceInCents: f } = ce(t, i);
              if (n < u) return !0;
            }
            return !1;
          }
        };
        I([r.sH], B.prototype, "m_mapOverridesPerPriceKey", 2),
          I([g.oI], B.prototype, "OverridePrice", 1),
          I([r.XI], B.prototype, "UpdateOverridesPerPriceKey", 1);
        let c = B;
        function E(a, t) {
          if (a.strPriceKey == t.strPriceKey) {
            const i = (0, w.ww)(a.packageID),
              n = (0, w.ww)(t.packageID);
            return (0, p.kd)(i, n);
          } else return (0, p.kd)(ie(a.strPriceKey), ie(t.strPriceKey));
        }
        function D(a) {
          const t = a.split("_")[0];
          return c.Get().m_mapCurrencyData.get(t);
        }
        function H(a, t) {
          if (t === void 0) return ["", "", ""];
          const i = D(t) ?? D("USD");
          let n = "";
          if (typeof a == "number") {
            let u = a.toString();
            u.length < 3 && (u = (u.length == 1 ? "0" : "") + "0" + u);
            const f = u.length - 2;
            for (let k = 0; k < f; k++) {
              const _ = u.charAt(k);
              (n += _),
                k < f - 1 &&
                  (f - k - 1) % 3 == 0 &&
                  _ != "-" &&
                  (n += i.strThousandsSeparator);
            }
            i.bWholeUnitsOnly ||
              ((n += i.strDecimalSymbol), (n += u.substr(u.length - 2)));
          }
          return i.bSymbolIsPrefix
            ? [i.strSymbol + i.strSymbolAndNumberSeparator, n, ""]
            : ["", n, i.strSymbolAndNumberSeparator + i.strSymbol];
        }
        const Q = new Map([
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
        function ie(a) {
          return Q.has(a) ? Q.get(a) : a.indexOf("_") > 0 ? "ZZZ" + a : a;
        }
        function ne(a, t) {
          return c.Get().GetPrice(a, t);
        }
        function F(a) {
          return c.Get().GetPublishedCountryOverrides(a);
        }
        function L(a, t) {
          return c.Get().GetPublishedPriceCountryOverride(a, t);
        }
        function S(a, t) {
          return c.Get().GetPublishedPrice(a, t);
        }
        function C(a, t) {
          return c.Get().GetProposedPrice(a, t);
        }
        function x(a, t) {
          return c.Get().GetLocalOverridePrice(a, t);
        }
        function $(a) {
          return c.Get().GetMinimumDiscountPrice(a);
        }
        function V(a) {
          const t = c.Get().m_strDisplayPriceKey,
            i = c.Get().GetPrice(a, t);
          return H(i, t).join("");
        }
        function A(a) {
          const [t, i] = o.useState(c.Get().m_strDisplayPriceKey);
          return (0, g.hL)(c.Get().m_displayPriceKeyCallbackList, i), J(a, t);
        }
        function J(a, t) {
          const [i, n] = o.useState(c.Get().GetPrice(a, t));
          return (
            (0, g.hL)(c.Get().GetPriceGridCellCallbackList(a, t), n),
            o.useEffect(() => n(c.Get().GetPrice(a, t)), [a, t]),
            H(i, t).join("")
          );
        }
        function Z(a, t, i) {
          let n = 0;
          for (const u of a) {
            const f = new Array(),
              k = new Array(),
              _ = c.Get().GetPrice(u, "USD");
            if (!(!_ || _ <= 0)) {
              for (const N of c.Get().m_rgKnownPriceKeys) {
                if (N == "USD") continue;
                const re = c.Get().GetPrice(u, "USD"),
                  { nSuggestedPriceInCents: se, nGuidelinesLevel: q } = (0,
                  R.$)(t, i, re, (0, v.ei)(N), (0, y.vS)(N));
                if (q === null) continue;
                c.Get().GetPrice(u, N) != se && (f.push(N), k.push(se));
              }
              f.length > 0 &&
                (c.Get().OverridePricesForPackage(u, f, k), (n += 1));
            }
          }
          n > 0 && c.Get().DispatchPriceOverridesCallbacks();
        }
        function ee() {
          const a = (0, w.Yr)(),
            t = (0, M.cT)(),
            i = (0, O.Bb)();
          return o.useCallback(() => Z(a, t, i), [a, t, i]);
        }
        function X(a, t) {
          const i = (0, g.CH)();
          (0, g.hL)(c.Get().GetPriceGridCellCallbackList(a, t), i);
          const n = c.Get().GetPrice(a, t),
            u = (0, M.cT)(),
            f = (0, O.Bb)();
          (0, g.hL)(c.Get().GetPriceGridCellCallbackList(a, "USD"), i);
          const k = c.Get().GetPrice(a, "USD"),
            { nSuggestedPriceInCents: _, nGuidelinesLevel: N } = (0, R.$)(
              u,
              f,
              k,
              (0, v.ei)(t),
              (0, y.vS)(t),
            ),
            re = o.useCallback((We) => c.Get().OverridePrice(a, t, We), [a, t]),
            se = c.Get().GetPublishedPrice(a, t),
            q = c.Get().GetProposedPrice(a, t),
            { nMinPriceInCents: le, nMaxPriceInCents: fe } = ce(a, t),
            ge = e(t, n, N);
          return o.useMemo(
            () => ({
              nPriceInCents: n,
              nProposedPriceInCents: q,
              nPublishedPriceInCents: se,
              nMinPriceInCents: le,
              nMaxPriceInCents: fe,
              nMaxDiscountPercentage: ge,
              nSuggestedPriceInCents: _,
              fnSetPrice: re,
            }),
            [n, q, se, le, fe, ge, _, re],
          );
        }
        const oe = 90,
          W = 10;
        function e(a, t, i, n) {
          const u = c.Get().GetMinimumDiscountPrice(a),
            f = t ? Math.floor((100 * (t - u)) / t) : oe,
            k = Math.min(oe, Math.floor((100 * (i - 50)) / i));
          return n
            ? t < u || f < W
              ? null
              : Math.max(Math.min(f, oe), 0)
            : f < k
              ? f
              : null;
        }
        function s(a) {
          let t = () => c.Get().BAnyPackagePriceBelowMin(a),
            [i, n] = o.useState(t),
            u = o.useCallback(() => {
              let f = c.Get().BAnyPackagePriceBelowMin(a);
              n(f);
            }, [a, n]);
          return (0, g.hL)(c.Get().GetPackageOverridesCallbackList(a), u), i;
        }
        function U(a) {
          return c.Get().BAnyPackagePriceBelowMin(a);
        }
        function ce(a, t) {
          let i = c.Get();
          const n = i.GetMinimumBasePrice(t),
            u = i.m_setRecurringSubscriptions.has(a)
              ? i.GetPublishedPrice(a, t)
              : null;
          return { nMinPriceInCents: n, nMaxPriceInCents: u };
        }
        function de() {
          return o.useCallback((a, t, i) => {
            const n = c.Get().GetPrice(a, t);
            return (
              c.Get().OverridePrice(a, t, i),
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
        function me(a) {
          const t = (0, g.CH)();
          return (
            (0, g.hL)(c.Get().GetPriceGridCellCallbackList(a, "USD"), t),
            c.Get().m_mapPriceProposals.get(a)
          );
        }
        function Pe() {
          return Array.from(c.Get().m_mapPriceProposals.values());
        }
        function he(a) {
          return c.Get().m_mapPriceProposals.get(a);
        }
        function be(a) {
          let t = !1;
          for (const i of c.Get().m_rgKnownPriceKeys) {
            let n = c.Get().GetPublishedPrice(a, i);
            t = t || (n != 0 && n !== void 0);
          }
          return t;
        }
        function Me(a) {
          const t = me(a),
            i = [];
          for (const n of c.Get().m_rgKnownPriceKeys) {
            const u = t.prices[n],
              f = c.Get().GetPublishedPrice(a, n);
            u != f &&
              i.push({
                packageID: a,
                strPriceKey: n,
                nPriceInCents: u,
                nOldPriceInCents: f,
              });
          }
          return i;
        }
        function Be() {
          return c.Get().m_rgKnownPriceKeys;
        }
        function pe(a) {
          let t = c.Get().m_mapPriceKeyDescriptions.get(a);
          return t ? t.strDescription : "";
        }
        function Ge(a) {
          let t = c.Get().m_mapPriceKeyDescriptions.get(a);
          return t ? t.bRequired : !1;
        }
        function ye(a) {
          return o.useCallback(() => {
            c.Get().DiscardAllLocalPriceOverridesForKey(a);
          }, [a]);
        }
        function we(a) {
          return o.useCallback(() => {
            c.Get().DiscardLocalPriceOverridesForPackage(a);
          }, [a]);
        }
        function Oe(a) {
          return o.useCallback(() => {
            c.Get().CancelProposal(a);
          }, [a]);
        }
        function Ee() {
          const [a, t] = o.useState(c.Get().m_strDisplayPriceKey),
            i = c.Get().m_rgKnownPriceKeys,
            n = o.useCallback((u) => {
              t(u),
                (c.Get().m_strDisplayPriceKey = u),
                c.Get().m_displayPriceKeyCallbackList.Dispatch(u);
            }, []);
          return { strPriceKey: a, rgSupportedPriceKeys: i, fnSetPriceKey: n };
        }
        function Se(a) {
          const t = (0, g.CH)();
          return (
            (0, g.hL)(c.Get().m_allPriceOverridesCallbackList, t),
            c.Get().BHasLocalPriceOverrides(a)
          );
        }
        function ve(a) {
          return c.Get().BHasLocalPriceOverrides(a);
        }
        function Te() {
          const [a, t] = o.useState(() => c.Get().GetAllLocalPriceOverrides());
          return (0, g.hL)(c.Get().m_allPriceOverridesCallbackList, t), a;
        }
        function _e(a) {
          return (0, m.q3)(() => c.Get().GetLocalOverrideCountForPriceKey(a));
        }
        function ze() {
          return o.useCallback(
            () => c.Get().GetAllLocalPriceOverrides()?.length > 0,
            [],
          );
        }
        function Le() {
          return o.useCallback(
            () => c.Get().DiscardAllLocalPriceOverrides(),
            [],
          );
        }
        function Ue() {
          return c.Get().OverridePrice;
        }
        function ke() {
          return o.useCallback(
            (a, t, i) => c.Get().SubmitProposalToServer(a, t, i),
            [],
          );
        }
        function je() {
          return o.useCallback(
            (a, t) => c.Get().PublishApprovedProposal(a, t, 60 * 1e3),
            [],
          );
        }
        function Ke(a) {
          let t = [];
          const i = c.Get().m_rgKnownPriceKeys;
          for (let n of a) {
            if (be(n)) continue;
            let u = !1;
            for (const f of i) {
              if (!c.Get().BPriceKeyRequired(f)) continue;
              if (!c.Get().GetPrice(n, f)) {
                u = !0;
                break;
              }
            }
            u && t.push(n);
          }
          return t;
        }
      },
      601: (ae, te, l) => {
        "use strict";
        l.d(te, { es: () => r, nm: () => w });
        var h = l(41301),
          d = l(82734),
          o = l(18210);
        function r(m, z) {
          const G = (0, o.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
            R = (0, o.we)("#PackageGrid_NoBaseGameFoundForPackage"),
            M = m.original.appName,
            O = z.original.appName,
            v = M == G,
            y = M == R,
            j = !v && !y,
            K = O == G,
            I = O == R,
            B = !K && !I;
          if (j && B) return M.localeCompare(O);
          if (!j && !B)
            if (v == K && y == I) {
              const c = m.original.packageName,
                E = z.original.packageName;
              return c && E
                ? c.localeCompare(E)
                : !c && !E
                  ? m.original.packageID - z.original.packageID
                  : c
                    ? -1
                    : 1;
            } else return v ? -1 : 1;
          else return j ? -1 : 1;
        }
        const P = (m) => m.nextElementSibling,
          T = (m) => m.previousElementSibling,
          Y = (m, z) => {
            const G = m.getAttribute("data-table-column-id"),
              R = m.parentElement;
            let M = R && z(R);
            for (; G && M; ) {
              for (const O of Array.from(M.children))
                if (G == O.getAttribute("data-table-column-id")) return O;
              M = z(M);
            }
            return null;
          },
          g = new Map([
            [h.Oy, (m) => Y(m, T)],
            [h.JI, P],
            [h.BH, (m) => Y(m, P)],
            [h.ek, T],
            [h.$R, (m) => Y(m, P)],
            [h.wd, (m) => Y(m, P)],
          ]);
        function p(m) {
          return (0, d.Kf)(
            m,
            (z) => z.getAttribute("data-table-column-id") != null,
          );
        }
        function b(m) {
          const z = Array.prototype.slice.call(m.children).reverse();
          for (; z.length > 0; ) {
            const G = z.pop();
            if (G.tagName.toLowerCase() === "input") return G;
            z.push(...Array.prototype.slice.call(G.children).reverse());
          }
          return null;
        }
        function w(m) {
          let z = g.get(m.keyCode);
          if ((m.keyCode === h.$R && m.shiftKey && (z = (M) => Y(M, T)), !z))
            return;
          const G = p(m.currentTarget);
          let R = z(G);
          for (; R; ) {
            const M = b(R);
            if (M) {
              M.focus(), m.preventDefault();
              return;
            }
            R = z(R);
          }
        }
      },
      28763: (ae, te, l) => {
        "use strict";
        l.d(te, { M: () => d, o: () => h });
        const h = "America/Los_Angeles";
        function d(o) {
          const P = l(87937).unix(o).tz(h);
          return (
            P.seconds(0),
            P.minutes(0),
            P.hours(10),
            P.unix() < o && P.hours(34),
            P.unix()
          );
        }
      },
      79611: (ae, te, l) => {
        "use strict";
        l.d(te, { $: () => K, v: () => I });
        var h = l(7850),
          d = l(64238),
          o = l.n(d),
          r = l(69041),
          P = l(8928),
          T = l(69289),
          Y = l(3877),
          g = l(73406),
          p = l(60351),
          b = l(68031),
          w = l(80549);
        function m(B) {
          const {
              size: c = "3",
              loading: E = !0,
              children: D,
              color: H,
              variant: Q,
              ...ie
            } = B,
            ne = (0, w.f)("LoadingSpinner", Q);
          return D || !E
            ? (0, h.jsxs)(p.az, {
                position: "relative",
                ...ie,
                width: "fit-content",
                children: [
                  (0, h.jsx)("div", {
                    "data-visibility": !E,
                    className: g.ChildContainer,
                    children: D,
                  }),
                  E &&
                    (0, h.jsx)(b.s, {
                      position: "absolute",
                      inset: "0",
                      justify: "center",
                      align: "center",
                      children: (0, h.jsx)(z, {
                        size: c,
                        color: H,
                        variant: ne,
                      }),
                    }),
                ],
              })
            : (0, h.jsx)(z, { size: c, color: H, variant: ne, ...ie });
        }
        function z(B) {
          const { className: c, color: E, ...D } = (0, T.mz)(B, G);
          return (0, h.jsx)("div", {
            "data-accent-color": E,
            className: o()(c, g.Spinner),
            ...D,
          });
        }
        const G = [
          ...P.L,
          { prop: "size", responsive: !0, className: (B) => g[`Size-${B}`] },
          { prop: "variant", className: (B) => g[`Variant-${B}`] },
        ];
        var R = l(24660),
          M = l(3166);
        function O(B) {
          const {
              variant: c,
              size: E = "2",
              minWidth: D = "fit-content",
              color: H,
              loading: Q,
              children: ie,
              onClick: ne,
              icon: F,
              focusable: L,
              navProps: S,
              ...C
            } = B,
            x = (0, M.Qn)(),
            $ = Q
              ? (0, h.jsx)(m, {
                  size: E,
                  color: H,
                  variant: "bright",
                  children: ie,
                })
              : ie,
            V = Q ? void 0 : ne,
            A = L ?? S?.focusable ?? !!V,
            J = (0, w.f)("Button", c),
            Z = {
              type: "button",
              ...(0, T.mz)(
                {
                  ...C,
                  variant: J,
                  size: E,
                  minWidth: D,
                  color: H,
                  className: o()(r.Button, F && r.Icon),
                  onClick: V,
                },
                j,
              ),
              children: $,
            };
          return x && (A || S)
            ? (0, h.jsx)(R.fu, { ...Z, ...(S || {}), focusable: A })
            : (0, h.jsx)("button", { ...Z });
        }
        function v(B) {
          const {
              variant: c,
              size: E = "2",
              minWidth: D = "fit-content",
              disabled: H,
              icon: Q,
              focusable: ie,
              navProps: ne,
              ...F
            } = B,
            L = (0, M.Qn)(),
            S = (0, w.f)("Button", c),
            C = H ? y : void 0,
            x = (0, T.mz)(
              {
                onClick: C,
                "aria-disabled": H,
                ...F,
                variant: S,
                size: E,
                minWidth: D,
                className: o()(r.Button, Q && r.Icon, (0, Y.T)()),
              },
              j,
            );
          return L && (ie || ne)
            ? (0, h.jsx)(R.Ii, { ...x, ...(ne || {}), focusable: ie })
            : (0, h.jsx)("a", { ...x });
        }
        function y(B) {
          B.preventDefault();
        }
        const j = [
            ...P.L,
            { prop: "size", responsive: !0, className: (B) => r[`Size-${B}`] },
            { prop: "variant", className: (B) => r[`Variant-${B}`] },
            { prop: "color", dataProperty: (B) => ["accent-color", `${B}`] },
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
          K = O,
          I = v;
      },
      98254: (ae, te, l) => {
        "use strict";
        l.d(te, { z: () => G });
        var h = l(7850),
          d = l(90626),
          o = l(64238),
          r = l.n(o),
          P = l(16180),
          T = l.n(P),
          Y = l(68031),
          g = l(15252),
          p = l(76854);
        function b(M) {
          const {
            value: O,
            onValueChange: v,
            options: y,
            getOptionLabel: j,
            disabled: K,
            ...I
          } = M;
          return (0, h.jsx)(G.Root, {
            value: O,
            onValueChange: v,
            disabled: K,
            ...I,
            children: y.map((B) => {
              const c = j ? j(B) : B;
              return (0, h.jsx)(G.Option, { value: B, children: c }, c);
            }),
          });
        }
        function w(M) {
          const {
              value: O,
              onValueChange: v,
              disabled: y,
              render: j,
              ...K
            } = M,
            I = (0, d.useRef)(null),
            B = (0, d.useCallback)((ne, F) => {
              if (!I.current) return;
              const L = [...I.current.querySelectorAll("[data-radio-id]")];
              if (L.length !== 0)
                for (let S = 0; S < L.length; S++) {
                  const C = L[S];
                  if (!C.dataset.radioId) continue;
                  if (C.dataset.radioId === ne) {
                    const $ = (S + F + L.length) % L.length,
                      V = L[$];
                    V.click(), V.focus();
                  }
                }
            }, []),
            c = (0, d.useCallback)((ne) => B(ne, 1), [B]),
            E = (0, d.useCallback)((ne) => B(ne, -1), [B]),
            D = (0, d.useMemo)(
              () => ({
                value: O,
                onValueChange: v,
                bDisabled: y,
                onSelectNext: c,
                onSelectPrev: E,
              }),
              [O, v, y, c, E],
            ),
            H = { role: "radiogroup", "aria-disabled": y, ref: I, ...K },
            Q = (0, h.jsx)(Y.s, {
              direction: "column",
              gap: "2",
              role: "radiogroup",
              "aria-disabled": y,
              ...K,
            }),
            ie = (0, p.Q)(j, Q, H);
          return (0, h.jsx)(R, { value: D, children: ie });
        }
        function m(M) {
          const { value: O, ref: v, children: y, render: j } = M,
            K = (0, d.useContext)(R),
            I = (0, d.useId)();
          if (!K)
            return (
              console.error(
                "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
              ),
              null
            );
          const {
              value: B,
              onValueChange: c,
              bDisabled: E,
              onSelectNext: D,
              onSelectPrev: H,
            } = K,
            Q = B === O,
            ie = () => {
              E || Q || c(O);
            },
            F = {
              role: "radio",
              "aria-checked": Q,
              "aria-disabled": E,
              "data-radio-id": I,
              onClick: ie,
              onKeyDown: (S) => {
                if (!E)
                  switch (S.key) {
                    case " ": {
                      ie(), S.preventDefault(), S.stopPropagation();
                      break;
                    }
                    case "ArrowRight":
                    case "ArrowDown": {
                      D(I), S.preventDefault(), S.stopPropagation();
                      break;
                    }
                    case "ArrowLeft":
                    case "ArrowUp": {
                      H(I), S.preventDefault(), S.stopPropagation();
                      break;
                    }
                  }
              },
              tabIndex: Q ? 0 : -1,
              ref: v,
              children: y,
            },
            L = (0, h.jsx)(z, { bDisabled: E });
          return (0, p.Q)(j, L, F, { bSelected: Q, bDisabled: E });
        }
        function z(M) {
          const { children: O, className: v, bDisabled: y, ...j } = M;
          return (0, h.jsxs)(Y.s, {
            cursor: "default",
            gap: "2",
            className: r()(P.Option, y && P.Disabled),
            ...j,
            children: [
              (0, h.jsx)("div", { className: P.RadioCircle }),
              (0, h.jsx)(g.EY, { children: O }),
            ],
          });
        }
        const G = Object.assign(b, { Root: w, Option: m }),
          R = (0, d.createContext)(null);
      },
      3301: (ae, te, l) => {
        "use strict";
        l.d(te, {
          bS: () => o,
          de: () => T,
          j4: () => g,
          k8: () => r,
          uF: () => Y,
          vS: () => p,
        });
        var h = l(34104),
          d = l(90247);
        function o(b) {
          return h.CS;
        }
        function r(b) {
          switch (b) {
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
        function P(b) {
          switch (b) {
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
        function T(b) {
          switch (b) {
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
        function Y(b) {
          switch (b) {
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
        function g(b) {
          switch (b) {
            case d._S:
              return "The Commonwealth of Independent Stats";
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
        function p(b) {
          switch (b?.toLowerCase()) {
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
      13401: (ae, te, l) => {
        "use strict";
        l.d(te, { Bb: () => g, MA: () => Y, jY: () => T });
        var h = l(7850),
          d = l(55409),
          o = l(90626),
          r = l(93357);
        const P = o.createContext({
          eConversionMethod: d.Y5.lZ,
          setConversionMethod: (p) => {},
          rgAvailableConversionMethods: [],
        });
        function T(p) {
          const { eInitialConversionMethod: b } = p,
            w = (0, r.cT)(),
            [m, z] = o.useState(b || d.Y5.lZ),
            G = o.useMemo(() => {
              const R = w ? w.GetAvailableConversionMethods() : [];
              return {
                eConversionMethod: m,
                setConversionMethod: z,
                rgAvailableConversionMethods: R,
              };
            }, [m, z, w]);
          return (0, h.jsx)(P.Provider, { value: G, children: p.children });
        }
        function Y() {
          return o.useContext(P);
        }
        function g() {
          return o.useContext(P).eConversionMethod;
        }
      },
      7608: (ae, te, l) => {
        "use strict";
        l.d(te, { $: () => r });
        var h = l(90247),
          d = l(34104),
          o = l(71742);
        function r(P, T, Y, g, p) {
          if (!P)
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          let b = null;
          for (let M of P.GetUSDPricePointsInCents())
            if (M >= Y) {
              b = M;
              break;
            }
          const w = p && p < h.Hc;
          if ((g == d.CS && !w) || !b)
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          const m = P.GetRecommendPrice(b, g, p, T),
            z = P.GetRecommendPrice(b, d.CS, void 0, T);
          if (
            ((0, o.wT)(
              m,
              `Missing requested currency guide for  ${b}/${g}/${p}/${T}`,
            ),
            (0, o.wT)(z, `Missing usd guide for  ${b}/${p}/${T}`),
            !m || !z)
          )
            return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
          let G = m.price;
          const R = z.price;
          if (R != Y) {
            const M = Y / R;
            (b *= M), (G = Math.ceil(G * M));
          }
          return { nSuggestedPriceInCents: G, nGuidelinesLevel: b };
        }
      },
      93357: (ae, te, l) => {
        "use strict";
        l.d(te, { mj: () => M, gC: () => O, cT: () => G });
        var h = l(90626),
          d = l(90247),
          o = l(34104),
          r = l(55409);
        const P = r.Y5.lZ;
        class T {
          m_mapUSDPrice = new Map();
          m_mapKeyToGuidePrice = new Map();
          m_rgUSDPricePointInCents = [];
          m_setConversionMethod = new Set();
          m_setSupportedCurrencies = new Set();
          m_setSupportedRegions = new Set();
          GetKey(y, j, K, I = P) {
            return `${y}_${j}_${K || d.YS}_${I}`;
          }
          GetAvailableConversionMethods() {
            return Array.from(this.m_setConversionMethod).sort();
          }
          GetAnyPricePoint() {
            return Array.from(
              this.m_mapUSDPrice.get(r.Y5.lZ)?.values() || [],
            )[0];
          }
          BIsSupportCurrencyAndOrRegion(y, j) {
            return j
              ? y == o.CS && this.m_setSupportedRegions.has(j)
              : this.m_setSupportedCurrencies.has(y);
          }
          GetRecommendPrice(y, j, K, I = P) {
            const B = this.GetKey(y, j, K, I);
            return this.m_mapKeyToGuidePrice.get(B);
          }
          GetScaledRecommendedPrice(y, j, K, I = P) {
            let B = -1,
              c = -1;
            for (const Q of this.m_mapUSDPrice.get(I).keys()) {
              const ie = Math.abs(Q - y);
              (B == -1 || ie < c) && ((B = Q), (c = ie));
            }
            const E = this.m_mapUSDPrice.get(I).get(B),
              D = K
                ? E.region_prices.find((Q) => Q.region_code == K)
                : E.currency_prices.find((Q) => Q.currency_code == j),
              H = y / B;
            return {
              currency_code: D?.currency_code,
              region_code: D?.region_code,
              price: Math.ceil((D?.price || 0) * H),
            };
          }
          GetUSDPricePointsInCents() {
            return this.m_rgUSDPricePointInCents;
          }
          constructor(y) {
            let j = new Set();
            y.forEach((K) => {
              const I = K.convert_method ?? P;
              this.m_setConversionMethod.add(I),
                this.m_mapUSDPrice.has(I) ||
                  this.m_mapUSDPrice.set(I, new Map()),
                this.m_mapUSDPrice.get(I).set(K.usd_price, K),
                j.add(K.usd_price),
                K.currency_prices.forEach((c) => {
                  const E = this.GetKey(
                    K.usd_price,
                    c.currency_code,
                    d.YS,
                    K.convert_method || P,
                  );
                  this.m_mapKeyToGuidePrice.set(E, c),
                    this.m_setSupportedCurrencies.add(c.currency_code);
                }),
                K.region_prices.forEach((c) => {
                  const E = this.GetKey(
                    K.usd_price,
                    c.currency_code,
                    c.region_code,
                    K.convert_method || P,
                  );
                  if (
                    (this.m_mapKeyToGuidePrice.set(E, c),
                    this.m_setSupportedRegions.add(c.region_code),
                    this.m_setConversionMethod.has(r.Y5.bA))
                  ) {
                    const D = {
                        currency_code: o.CS,
                        price: K.usd_price,
                        region_code: c.region_code,
                      },
                      H = this.GetKey(
                        K.usd_price,
                        o.CS,
                        c.region_code,
                        r.Y5.bA,
                      );
                    this.m_mapKeyToGuidePrice.set(H, D);
                  }
                });
            }),
              (this.m_rgUSDPricePointInCents = Array.from(j.keys()));
          }
        }
        var Y = l(40497),
          g = l(67705);
        function p() {
          let v = (0, g.Fd)("pricing_guideline", "application_config");
          if (v) return Promise.resolve(v);
          {
            const y = Y.L.getQueryData(M());
            return Promise.resolve(y ?? null);
          }
        }
        var b = l(13401),
          w = l(20194),
          m = l(71742),
          z = l(33220);
        function G() {
          const v = (0, w.I)(R());
          return (0, h.useMemo)(
            () => (v.data ? new T(v.data) : null),
            [v.data],
          );
        }
        function R() {
          return { queryKey: M(), queryFn: async () => await p() };
        }
        function M() {
          return ["PricingGuideline"];
        }
        function O(v) {
          const y = G(),
            j = (0, b.Bb)();
          return {
            fnApplyGuidelines: (0, h.useCallback)(
              (I, B, c) => {
                if (
                  ((0, m.wT)(
                    y,
                    "Pricing Guideline Not Initialized by time conversion being triggered",
                  ),
                  y)
                ) {
                  for (let E = o.CS; E < o.mh; ++E) {
                    const D = y.GetRecommendPrice(B, E, void 0, c ?? j)?.price;
                    if (D && D > 0) {
                      const H = (0, z.M1)(E);
                      v(I, H, D);
                    }
                  }
                  for (let E = d._S; E < d.Hc; ++E) {
                    const D = o.CS,
                      H = y.GetRecommendPrice(B, D, E, c ?? j)?.price;
                    if (H && H > 0) {
                      const Q = (0, z.pd)(D, E).toUpperCase();
                      v(I, Q, H);
                    }
                  }
                }
              },
              [j, v, y],
            ),
          };
        }
      },
      61075: (ae, te, l) => {
        "use strict";
        l.d(te, { Al: () => d, Zo: () => P, nD: () => h, pJ: () => r });
        const h = 0,
          d = 1,
          o = 2,
          r = 3,
          P = 4;
      },
      55409: (ae, te, l) => {
        "use strict";
        l.d(te, { Y5: () => h });
        var h = {};
        l.r(h), l.d(h, { bA: () => M, lZ: () => G, KC: () => R });
        var d = l(80613),
          o = l.n(d),
          r = l(75245),
          P = l(35038);
        function T(W) {
          return "unknown ERatingAgency ( " + W + " )";
        }
        function Y(W) {
          return "unknown EAppRatingSource ( " + W + " )";
        }
        class g extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.descriptors || r.Sg(g.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
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
            let s = new (o().BinaryReader)(e),
              U = new g();
            return g.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(g.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(g.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class p extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.rating_agency || r.Sg(p.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
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
                    aux_data: { n: 7, c: g },
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
            let s = new (o().BinaryReader)(e),
              U = new p();
            return p.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(p.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(p.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        function b(W) {
          return "unknown EContentSurveyMatureTag ( " + W + " )";
        }
        class w extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.elanguage || r.Sg(w.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    text: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(w.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new w();
            return w.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(w.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(w.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class m extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.customer_notes || r.Sg(m.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    customer_notes: { n: 1, c: w, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: w, r: !0, q: !0 },
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
            let s = new (o().BinaryReader)(e),
              U = new m();
            return m.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(m.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(m.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const z = 0,
          G = 1,
          R = 2,
          M = 3,
          O = 4;
        function v(W) {
          return "unknown EPriceConversionMethod ( " + W + " )";
        }
        function y(W) {
          return "unknown EProtoBillingType ( " + W + " )";
        }
        function j(W) {
          return "unknown EProtoActivationCode ( " + W + " )";
        }
        function K(W) {
          return "unknown EProtoProposalState ( " + W + " )";
        }
        function I(W) {
          return "unknown EContentDescriptorSurveyState ( " + W + " )";
        }
        function B(W) {
          return "unknown ERatingQuestionaireCategory ( " + W + " )";
        }
        function c(W) {
          return "unknown EGeneratedGameRatingVersion ( " + W + " )";
        }
        function E(W) {
          return "unknown EGameContentCategory ( " + W + " )";
        }
        function D(W) {
          return "unknown EContentSurveySection ( " + W + " )";
        }
        function H(W) {
          return "unknown EContentSurveySource ( " + W + " )";
        }
        function Q(W) {
          return "unknown EContentSurveyChildAppType ( " + W + " )";
        }
        function ie(W) {
          return "unknown EContentSurveyInheritAction ( " + W + " )";
        }
        function ne(W) {
          return "unknown EGeneratedAIContentType ( " + W + " )";
        }
        class F extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.method || r.Sg(F.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    method: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(F.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new F();
            return F.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(F.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(F.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class L extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.survey_section || r.Sg(L.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
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
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(L.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new L();
            return L.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(L.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(L.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class S extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.content_category || r.Sg(S.M()),
              d.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
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
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(S.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new S();
            return S.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(S.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(S.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class C extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.rating_agency || r.Sg(C.M()),
              d.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
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
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(C.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new C();
            return C.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(C.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(C.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class x extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.timestamp_generated || r.Sg(x.M()),
              d.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
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
                    ratings: { n: 3, c: C, r: !0, q: !0 },
                    content_categories: { n: 4, c: S, r: !0, q: !0 },
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
            let s = new (o().BinaryReader)(e),
              U = new x();
            return x.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(x.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(x.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class $ extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.desc_code_generated || r.Sg($.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT($.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new $();
            return $.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj($.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0($.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class V extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.disclosure || r.Sg(V.M()),
              d.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    disclosure: { n: 1, c: m },
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
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(V.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new V();
            return V.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(V.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(V.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class A extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.id || r.Sg(A.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = r.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(A.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new A();
            return A.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(A.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(A.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
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
                    descriptors: { n: 3, c: A, r: !0, q: !0 },
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
                    ratings: { n: 10, c: x },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: $ },
                    internal_notes: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    all_ratings: { n: 14, c: p, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: L, r: !0, q: !0 },
                    disclosure: { n: 16, c: m },
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
                    survey_aux_data: { n: 19, c: V },
                    source: { n: 20, br: r.qM.readEnum, bw: r.gp.writeEnum },
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
            let s = new (o().BinaryReader)(e),
              U = new J();
            return J.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(J.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(J.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class Z extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.appid || r.Sg(Z.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
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
            let s = new (o().BinaryReader)(e),
              U = new Z();
            return Z.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(Z.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(Z.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class ee extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.appid || r.Sg(ee.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
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
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, s) {
            return r.BT(ee.M(), e, s);
          }
          static fromObject(e) {
            return r.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (o().BinaryReader)(e),
              U = new ee();
            return ee.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(ee.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(ee.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class X extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.surveyid || r.Sg(X.M()),
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
                    surveyid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    survey: { n: 2, c: J },
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
            let s = new (o().BinaryReader)(e),
              U = new X();
            return X.deserializeBinaryFromReader(U, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return r.zj(X.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            r.i0(X.M(), e, s);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var oe;
        ((W) => {
          function e(U, ce, de) {
            return U.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, P.I8)(Z, ce, de),
              X,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          W.GetActiveSurvey = e;
          function s(U, ce, de) {
            return U.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, P.I8)(ee, ce, de),
              X,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          W.GetWorkingSurvey = s;
        })(oe || (oe = {}));
      },
      69041: (ae) => {
        ae.exports = {
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
      73406: (ae) => {
        ae.exports = {
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
      16180: (ae) => {
        ae.exports = {
          Option: "_3a3fNdwhCItYEc1SsUNP",
          Disabled: "_21NiFCkZFlTZ8WrrrxX0BX",
          RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
        };
      },
    },
  ]);
})();
