/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [83276],
    {
      94381: (G, ce, a) => {
        "use strict";
        a.d(ce, { S: () => W });
        var e = a(7850),
          U = a(68031),
          A = a(31857);
        function ae(F) {
          return (0, e.jsx)(A.I, {
            ...F,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var te = a(21895),
          V = a(64238),
          X = a.n(V),
          $ = a(80549);
        function W(F) {
          const {
              checked: oe,
              onChange: y,
              disabled: B,
              children: K,
              ref: w,
              variant: b,
              color: re,
              align: N = "center",
              icon: Z,
              ...D
            } = F,
            l = oe === "indeterminate",
            g = Z ?? (l ? M : ae),
            _ = () => {
              B || (y && y(l ? !0 : !oe));
            },
            S = (L) => {
              B ||
                (L.key === " " &&
                  (_(), L.preventDefault(), L.stopPropagation()));
            },
            Q = (0, $.f)("Checkbox", b);
          return (0, e.jsxs)(U.s, {
            align: N,
            ref: w,
            role: "checkbox",
            "aria-checked": l ? "mixed" : oe,
            "data-state": m(oe),
            className: X()(te.Root, te[`Variant-${Q}`], B && te.Disabled),
            onClick: _,
            tabIndex: 0,
            onKeyDown: S,
            cursor: "default",
            "aria-disabled": B,
            "data-accent-color": re,
            ...D,
            children: [
              (0, e.jsx)("div", {
                className: te.Checkbox,
                children: oe && (0, e.jsx)(g, { className: te.Icon }),
              }),
              K,
            ],
          });
        }
        function m(F) {
          return F === "indeterminate" ? F : F ? "checked" : "unchecked";
        }
        function M(F) {
          return (0, e.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      31857: (G, ce, a) => {
        "use strict";
        a.d(ce, { I: () => V });
        var e = a(7850),
          U = a(69289),
          A = a(8928),
          ae = a(16619),
          te = a.n(ae);
        function V(M) {
          return (0, e.jsx)("svg", { ...W(M) });
        }
        const X = [
          ...A.L,
          {
            prop: "size",
            responsive: !0,
            className: (M) => ae[`IconSize-${M}`],
          },
          {
            prop: "color",
            className: ae.Color,
            cssProperty: (M) => ["--icon-color", $(M)],
          },
          {
            prop: "hitSlop",
            className: ae.HitSlop,
            cssProperty: (M) => [
              "--hit-slop-custom",
              typeof M == "string" ? M : "",
            ],
          },
          A.h.find(({ prop: M }) => M === "cursor"),
        ];
        function $(M) {
          return !M || M[0] === "#" ? M : (0, U.w7)(M);
        }
        function W(M) {
          const { viewBox: F, ...oe } = M,
            B = { className: oe.size ? void 0 : ae.IconSizeDefault, ...oe };
          return F && (B.viewBox = m(F)), (0, U.mz)(B, X);
        }
        function m(M) {
          if (M)
            return typeof M == "number"
              ? `0 0 ${M} ${M}`
              : typeof M == "string"
                ? M
                : `0 0 ${M.width} ${M.height}`;
        }
      },
      71698: (G, ce, a) => {
        "use strict";
        a.d(ce, { H: () => ae, s: () => te });
        var e = a(90626),
          U = a(41623);
        let A = 0;
        function ae(V, X) {
          (0, e.useEffect)(() => {
            if (!(V || X))
              return (
                A++,
                () => {
                  --A == 0 && (0, U.s)();
                }
              );
          }, [V, X]);
        }
        function te(V) {
          const [X, $] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const W = window.setTimeout(() => $(!0), V);
            return () => window.clearTimeout(W);
          }, [V]),
            ae(X);
        }
      },
      85528: (G, ce, a) => {
        "use strict";
        a.d(ce, { Vw: () => Z });
        var e = a(14947),
          U = a(99412),
          A = a(72604),
          ae = a(35038),
          te = a(67529),
          V = a(3166);
        class X {
          m_nLastUpdated = 0;
          m_mapLanguages = e.sH.map();
          m_appid;
          m_fetching = null;
          constructor(l) {
            this.m_appid = l;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(l) {
            return this.m_mapLanguages.has(l)
              ? this.m_mapLanguages.get(l)
              : null;
          }
          Localize(l, g) {
            let _ = V.TS.LANGUAGE,
              S = this.GetTokenList(_),
              Q = _ != "english" ? this.GetTokenList("english") : null;
            return $(l, S, Q, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let _ = V.TS.LANGUAGE,
              S = this.GetTokenList(_),
              Q = _ != "english" ? this.GetTokenList("english") : null;
            return W(l, S, Q, this.m_appid, g);
          }
        }
        function $(D, l, g, _, S) {
          if (!D.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                D,
                "appid",
                _,
                "tokens",
                l,
              ),
              ""
            );
          let Q = D;
          D = D.toLowerCase();
          let L = "";
          if (
            (l && l.has(D) && (L = l.get(D)),
            !L && g && g.has(D) && (L = g.get(D)),
            L)
          )
            L = W(L, l, g, _, S);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                _,
                Q,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && V.TS.EUNIVERSE != U.wLO)
          )
            return D;
          return L;
        }
        function W(D, l, g, _, S) {
          let Q = /{[A-za-z0-9_%#:]+}/g,
            L = D.match(Q);
          if (L)
            for (let q of L) {
              let c = q.slice(1, -1),
                Ie = m(c, S),
                Qe = $(Ie, l, g, _, S);
              if (!Qe) return "";
              D = D.replace(q, Qe);
            }
          return (D = m(D, S)), D;
        }
        function m(D, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            _ = D.match(g);
          if (_)
            for (let S of _) {
              let Q = S.slice(1, -1).toLowerCase(),
                L = l.get(Q);
              L == null
                ? console.log("No rich presence found for", Q)
                : (D = D.replace(S, L));
            }
          return D;
        }
        var M = a(72849),
          F = a(71742),
          oe = a(8323),
          y = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          K = (D, l, g, _) => {
            for (
              var S = _ > 1 ? void 0 : _ ? B(l, g) : l, Q = D.length - 1, L;
              Q >= 0;
              Q--
            )
              (L = D[Q]) && (S = (_ ? L(l, g, S) : L(S)) || S);
            return _ && S && y(l, g, S), S;
          };
        function w(D) {
          return useObserver(() => Z.GetAppInfo(D));
        }
        function b(D) {
          return useObserver(() => D.map((l) => Z.GetAppInfo(l)));
        }
        const re = 3600 * 24 * 7 * 2;
        class N {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new oe.lu();
          constructor() {
            (0, e.Gn)(this);
          }
          Init(l) {
            this.m_CMInterface = l;
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
          RegisterCallbackOnLoad(l) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, F.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                l();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(l);
          }
          IsLoadingAppID(l) {
            return this.m_setPendingAppInfo.has(l);
          }
          GetAppInfo(l) {
            if (
              ((0, F.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(l))
            ) {
              let g = new te.by(l);
              this.m_mapAppInfo.set(l, g), this.QueueAppInfoRequest(l);
            }
            return this.m_mapAppInfo.get(l);
          }
          QueueAppInfoRequest(l) {
            return l
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (g) => (this.m_PendingAppInfoResolve = g),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(l),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const l = this.m_PendingAppInfoResolve,
              g = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(g),
              l?.();
          }
          async LoadAppInfoBatch(l) {
            this.m_cAppInfoRequestsInFlight++;
            let g = await this.LoadAppInfoBatchFromLocalCache(l);
            if (g.length) {
              console.log("Loading batch of App Info from Steam: ", g),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let _ = ae.w.Init(M._z);
              _.Body().set_language((0, U.sfN)(V.TS.LANGUAGE));
              const S = 50;
              for (; g.length > 0; ) {
                const Q = Math.min(S, g.length),
                  L = g.slice(0, Q);
                (g = g.slice(Q)), _.Body().set_appids(L);
                const q = await M.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                );
                q.GetEResult() == A.R
                  ? this.OnGetAppsResponse(q)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${q.GetEResult()}, AppIDs:`,
                      L,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(l) {
            let g = [];
            for (let _ of l.Body().apps()) {
              let S = this.m_mapAppInfo.get(_.appid());
              (0, F.wT)(
                S,
                `Got AppInfo response for unrequested AppID: ${_.appid()}`,
              ),
                S &&
                  ((S = new te.by(_.appid())),
                  S.DeserializeFromMessage(_),
                  this.m_mapAppInfo.set(_.appid(), S),
                  g.push(S));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const _ = new te.by(g.appid());
              _.DeserializeFromAppOverview(g),
                _.is_initialized && this.m_mapAppInfo.set(g.appid(), _);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((_) => {
                let S = this.m_mapAppInfo.get(_);
                if (S) {
                  S.is_valid || (g = !0);
                  return;
                }
                (S = new te.by(_)),
                  this.m_mapAppInfo.set(_, S),
                  this.QueueAppInfoRequest(_),
                  (g = !0);
              }),
              g && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(l) {
            this.m_CacheStorage = l;
          }
          GetCacheKeyForAppID(l) {
            return "APPINFO_" + l;
          }
          async LoadAppInfoBatchFromLocalCache(l) {
            if (!this.m_CacheStorage) return l;
            console.log("Loading batch of App Info from Local Cache: ", l);
            const g = new Date(new Date().getTime() - re * 1e3),
              _ = async (q) => {
                const c = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(q),
                );
                if (!c) return q;
                let Ie = this.m_mapAppInfo.get(q);
                return (
                  (0, F.wT)(
                    Ie,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  Ie
                    ? ((Ie = new te.by(q)),
                      Ie.DeserializeFromCacheObject(c),
                      Ie.is_initialized
                        ? (this.m_mapAppInfo.set(q, Ie),
                          Ie.time_updated_from_server < g ? q : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            q,
                            c,
                          ),
                          q))
                    : q
                );
              };
            let S = l.map((q) => _(q));
            return (await Promise.all(S)).filter((q) => q !== null);
          }
          async SaveAppInfoBatchToLocalCache(l) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                l.map((g) => g.appid),
              );
              for (const g of l) {
                const _ = g.SerializeToCacheObject();
                _ &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    _,
                  );
              }
            }
          }
          Localize(l, g, _) {
            const S = this.GetRichPresenceLoc(l);
            return S
              ? S.Localize(g, _)
              : V.TS.EUNIVERSE != U.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${l} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(l) {
            if (this.m_mapRichPresenceLoc.has(l.toString())) {
              let _ = this.m_mapRichPresenceLoc.get(l.toString());
              return (
                _.m_nLastUpdated + 1e3 * 60 * te.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(_),
                _
              );
            }
            let g = new X(l);
            return (
              this.m_mapRichPresenceLoc.set(l.toString(), g),
              this.QueueRichPresenceLocRequest(g),
              g
            );
          }
          GetRichPresenceLocAsync(l) {
            let g = this.GetRichPresenceLoc(l);
            return g.m_nLastUpdated ? Promise.resolve(g) : g.m_fetching;
          }
          OnRichPresenceLocUpdate(l, g) {
            l.m_nLastUpdated = Date.now();
            for (let _ of g) {
              let S = _.language(),
                Q = l.m_mapLanguages.get(S);
              Q
                ? Q.clear()
                : (l.m_mapLanguages.set(S, new Map()),
                  (Q = l.m_mapLanguages.get(S)));
              for (let L of _.tokens())
                Q?.set(L.name().toLowerCase(), L.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = ae.w.Init(M.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(V.TS.LANGUAGE),
                      M.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (l.m_fetching = null),
                      g.GetEResult() != A.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            l,
                            g.Body().token_lists(),
                          ),
                          Promise.resolve(l))
                    ),
                  )),
                l.m_fetching.catch(() => {
                  l.m_fetching = null;
                })),
              l.m_fetching
            );
          }
        }
        K([e.XI], N.prototype, "OnGetAppsResponse", 1),
          K([e.XI], N.prototype, "OnRichPresenceLocUpdate", 1);
        const Z = new N();
      },
      50109: (G, ce, a) => {
        "use strict";
        a.d(ce, { E: () => oe, O: () => F });
        var e = a(14947),
          U = a(65946),
          A = a(99412),
          ae = a(41635),
          te = a(27066),
          V = a(3166),
          X = a(38585),
          $ = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          m = (y, B, K, w) => {
            for (
              var b = w > 1 ? void 0 : w ? W(B, K) : B, re = y.length - 1, N;
              re >= 0;
              re--
            )
              (N = y[re]) && (b = (w ? N(B, K, b) : N(b)) || b);
            return w && b && $(B, K, b), b;
          };
        const M = class _t {
          m_eCurLang = (0, A.sfN)(V.TS.LANGUAGE);
          m_rgHasData = (0, ae.$Y)([], A.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new X.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(B) {
            return this.m_eCurLang != B
              ? ((this.m_eCurLang = B), this.GetCallback().Dispatch(B), !0)
              : !1;
          }
          SetHasLanguage(B) {
            B.forEach((K, w) => {
              this.m_rgHasData[w] != K && (this.m_rgHasData[w] = K);
            });
          }
          BHasLanguageData(B) {
            return this.m_rgHasData[B];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(B) {
            B != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = B);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              _t.s_globalSingletonStore ||
                (_t.s_globalSingletonStore = new _t()),
              _t.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], M.prototype, "m_eCurLang", 2),
          m([e.sH], M.prototype, "m_rgHasData", 2),
          m([e.sH], M.prototype, "m_bHasLocalizationContext", 2),
          m([te.o], M.prototype, "GetCurEditLanguage", 1),
          m([te.o], M.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], M.prototype, "SetHasLanguage", 1),
          m([te.o], M.prototype, "BHasLanguageData", 1);
        let F = M;
        function oe() {
          return (0, U.q3)(() => F.Get().GetCurEditLanguage());
        }
      },
      37656: (G, ce, a) => {
        "use strict";
        a.d(ce, { w: () => Z });
        var e = a(41735),
          U = a.n(e),
          A = a(14947),
          ae = a(65946),
          te = a(90626),
          V = a(27066),
          X = a(8323),
          $ = a(30096),
          W = a(3166),
          m = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          F = (D, l, g, _) => {
            for (
              var S = _ > 1 ? void 0 : _ ? M(l, g) : l, Q = D.length - 1, L;
              Q >= 0;
              Q--
            )
              (L = D[Q]) && (S = (_ ? L(l, g, S) : L(S)) || S);
            return _ && S && m(l, g, S), S;
          };
        const oe = class Mn {
          constructor() {
            (0, A.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const l = new Mn();
            return (
              (l.giveaway_id = this.giveaway_id),
              (l.seconds_until_drawing = this.seconds_until_drawing),
              (l.rtime_start = this.rtime_start),
              (l.rtime_end = this.rtime_end),
              (l.closed = this.closed),
              (l.winner_count = this.winner_count),
              l
            );
          }
        };
        F([A.sH], oe.prototype, "giveaway_id", 2),
          F([A.sH], oe.prototype, "seconds_until_drawing", 2),
          F([A.sH], oe.prototype, "rtime_start", 2),
          F([A.sH], oe.prototype, "rtime_end", 2),
          F([A.sH], oe.prototype, "closed", 2),
          F([A.sH], oe.prototype, "winner_count", 2);
        let y = oe;
        const B = class nt {
          constructor() {
            (0, A.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(l, g) {
            return l + "_" + g;
          }
          GetInfoByInstance(l, g) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(l, g),
            );
          }
          GetNextDrawChangeCallback(l) {
            return (
              this.m_mapNextDrawChangeCallback.has(l) ||
                this.m_mapNextDrawChangeCallback.set(l, new X.lu()),
              this.m_mapNextDrawChangeCallback.get(l)
            );
          }
          CopyToGiveaway(l, g) {
            g.closed != l.closed && (g.closed = l.closed),
              g.giveaway_id != l.giveaway_id && (g.giveaway_id = l.giveaway_id),
              g.rtime_start != l.rtime_start && (g.rtime_start = l.rtime_start),
              g.rtime_end != l.rtime_end && (g.rtime_end = l.rtime_end),
              g.winner_count != l.winner_count &&
                (g.winner_count = l.winner_count),
              g.seconds_until_drawing != l.seconds_until_drawing &&
                (g.seconds_until_drawing = l.seconds_until_drawing);
          }
          async ReloadGiveaway(l, g) {
            if (!l) return null;
            let _ = W.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              S = null,
              Q = { origin: self.origin };
            return (
              (S = await U().get(_, { params: Q })),
              (0, A.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(l) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, new y()),
                  this.CopyToGiveaway(
                    S.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(l),
                  ),
                  g !== void 0)
                ) {
                  const L = this.GetKey(l, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(L) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      L,
                      new y(),
                    ),
                    this.CopyToGiveaway(
                      S.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(L),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(l).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(l),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(l)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              nt.s_Singleton ||
                ((nt.s_Singleton = new nt()), nt.s_Singleton.Init()),
              nt.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let l = (0, W.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new y();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        F([A.sH], B.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          F([A.XI], B.prototype, "CopyToGiveaway", 1);
        let K = B;
        const w = class _n {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = _n.s_GlobalInstance),
              (_n.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(l, g) {
            if ((this.ClearRefreshInterval(), !l.closed)) {
              let _ =
                l.seconds_until_drawing <= 0 && l.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, _);
            }
          }
          SetupCountDown(l, g) {
            l > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        F([V.o], w.prototype, "ClearRefreshInterval", 1),
          F([V.o], w.prototype, "ClearCountDown", 1),
          F([V.o], w.prototype, "SetupRefreshDataInterval", 1),
          F([V.o], w.prototype, "SetupCountDown", 1);
        let b = w;
        function re(D, l) {
          const g = K.Get().GetInfoByInstance(D, l.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown();
        }
        function N(D, l) {
          const g = K.Get().GetInfoByInstance(D, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            K.Get()
              .ReloadGiveaway(D, l.m_myInstanceNumber)
              .then((_) => {
                l.SetupCountDown(_.seconds_until_drawing, () => re(D, l));
              }));
        }
        function Z(D) {
          const [l] = (0, te.useState)(new b()),
            g = (0, $.CH)();
          (0, te.useEffect)(
            () => (
              K.Get()
                .ReloadGiveaway(D, l.m_myInstanceNumber)
                .then((q) => {
                  l.SetupRefreshDataInterval(q, () => N(D, l)),
                    l.SetupCountDown(q.seconds_until_drawing, () => re(D, l)),
                    g();
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, D, g],
          );
          const _ = K.Get().GetInfoByInstance(D, l.m_myInstanceNumber),
            [S, Q, L] = (0, ae.q3)(() => [
              _?.winner_count,
              _?.closed,
              _?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_ || _.giveaway_id == null || !_.BStarted() || S === void 0,
            winner_count: S,
            closed: Q,
            seconds_until_drawing: L,
          };
        }
      },
      21042: (G, ce, a) => {
        "use strict";
        a.d(ce, { Sm: () => X, U: () => te, r3: () => W });
        var e = a(99412),
          U = a(72609),
          A = a(73259),
          ae = a(76559);
        function te(m, M, F, oe) {
          const y = new A.lh();
          return (
            (y.type = M),
            (y.clanSteamID = new ae.b(m, U.TS.EUNIVERSE, e.P3F, 0)),
            (y.GID = "fakeevent_" + V++),
            (y.visibility_state = A.zv.k_EEventStateUnlisted),
            (y.visibilityStartTime = oe - 1),
            (y.jsondata.bSaleEnabled = !0),
            (y.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (y.jsondata.sale_vanity_id = F),
            (y.jsondata.sale_header_offset = 0),
            (y.jsondata.sale_header_disable_top_margin = !1),
            y
          );
        }
        let V = 1234;
        function X(m, M) {
          return {
            unique_id: V++,
            capsules: [],
            events: [],
            links: [],
            section_type: m,
            localized_label: [],
            default_label: M,
          };
        }
        const $ = "socialcontent_";
        function W() {
          return {
            platforms: [
              { label: A.Zf.Steam, checked: !0 },
              { label: A.Zf.Facebook, checked: !0 },
              { label: A.Zf.Twitter, checked: !0 },
              { label: A.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: $ + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: A.jR.SummaryLargeImage,
                localized_option_fields: {
                  localized_header: [],
                  title: [],
                  description: [],
                  image: [],
                },
              },
            ],
          };
        }
      },
      55436: (G, ce, a) => {
        "use strict";
        a.d(ce, { r: () => oe, z: () => M });
        var e = a(7850),
          U = a(90626),
          A = a(16412),
          ae = a(25792),
          te = a(96538),
          V = a(18210),
          X = a(85599),
          $ = a(17618),
          W = a.n($),
          m = a(53424);
        const M = (y) => {
            const { clanSteamID: B, fnImageSelectCallBack: K } = y,
              [w, b] = (0, U.useState)(""),
              re = (0, m.mr)(y.clanSteamID.GetAccountID()),
              N = () => y.closeModal && y.closeModal(),
              Z = m.pU.GetFilteredClanImages(B, w),
              D = (l) => {
                K(l), N();
              };
            return (0, e.jsx)(ae.tH, {
              children: (0, e.jsx)(te.x_, {
                onEscKeypress: N,
                children: (0, e.jsxs)(A.UC, {
                  children: [
                    (0, e.jsx)(A.Y9, {
                      children: (0, V.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(A.nB, {
                      children: (0, e.jsxs)(A.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, V.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(A.pd, {
                            placeholder: (0, V.we)("#ClanImageChooser_Search"),
                            value: w,
                            onChange: (l) => b(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: $.ImagesOuterContainer,
                            children: re
                              ? (0, e.jsx)(X.t, {
                                  size: "medium",
                                  string: (0, V.we)("#Loading"),
                                })
                              : Z.length > 0
                                ? Z.map((l) =>
                                    (0, e.jsx)(
                                      F,
                                      {
                                        clanImage: l,
                                        searchStringHilight: w,
                                        fnImageClick: D,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : w.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, V.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, V.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(A.wi, {
                      children: (0, e.jsx)(A.$n, {
                        onClick: N,
                        children: (0, V.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          F = (y) => {
            const { clanImage: B, searchStringHilight: K, fnImageClick: w } = y;
            let b = B.file_name ? B.file_name : "",
              re = oe(K, b, String(B.imageid), $.Hilight);
            return (0, e.jsxs)("div", {
              className: $.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: $.Image,
                  style: { backgroundImage: `url( '${B.thumb_url}' )` },
                  onDoubleClick: () => w(B),
                }),
                (0, e.jsx)("div", {
                  className: $.ImageFilename,
                  title: b,
                  children: re,
                }),
              ],
            });
          };
        function oe(y, B, K, w) {
          let b = [];
          if (y.length > 0) {
            let re = B.toLocaleLowerCase();
            for (let N = 0; N < B.length; ) {
              let Z = re.indexOf(y, N);
              if (Z < 0) {
                b.push(
                  (0, e.jsx)(
                    "span",
                    { children: B.substring(N) },
                    K + "_" + String(N),
                  ),
                );
                break;
              } else
                N < Z &&
                  b.push(
                    (0, e.jsx)(
                      "span",
                      { children: B.substring(N, Z) },
                      K + "_" + String(N),
                    ),
                  ),
                  b.push(
                    (0, e.jsx)(
                      "span",
                      { className: w, children: B.substr(Z, y.length) },
                      K + "_" + String(N),
                    ),
                  ),
                  (N = Z + y.length);
            }
          } else b.push((0, e.jsx)("span", { children: B }, K + "_null"));
          return b;
        }
      },
      24806: (G, ce, a) => {
        "use strict";
        a.d(ce, { Ng: () => w });
        var e = a(7850),
          U = a(75844),
          A = a(90626),
          ae = a(99412),
          te = a(32093),
          V = a(50109),
          X = a(95695),
          $ = a.n(X),
          W = a(36707),
          m = a(18210),
          M = a(92264),
          F = a(30096),
          oe = a(71421),
          y = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          K = (N, Z, D, l) => {
            for (
              var g = l > 1 ? void 0 : l ? B(Z, D) : Z, _ = N.length - 1, S;
              _ >= 0;
              _--
            )
              (S = N[_]) && (g = (l ? S(Z, D, g) : S(g)) || g);
            return l && g && y(Z, D, g), g;
          };
        let w = class extends A.Component {
          GenerateLanguageOptions() {
            let N = [];
            const {
              fnFilterLanguage: Z,
              fnLangHasData: D,
              fnLastUpdateRTime: l,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              N.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: ae.xPp,
                    children: (0, m.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let _ = new Array();
            const S = this.props.realms || [te.TU.k_ESteamRealmGlobal];
            for (const L of m.A0.GetLanguageListForRealms(S)) {
              if (Z && !Z(L)) continue;
              const q = (0, ae.LgB)(L),
                c = (0, m.we)("#Language_" + q),
                Ie = !!(g && g(L));
              _.push({ eLang: L, sLocName: c, bSupported: Ie });
            }
            _.sort((L, q) =>
              L.bSupported != q.bSupported
                ? L.bSupported
                  ? -1
                  : 1
                : L.sLocName.localeCompare(q.sLocName),
            );
            let Q = !1;
            for (const L of _) {
              L.bSupported != Q &&
                (N.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: $().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        L.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    L.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Q = L.bSupported));
              const q = D && D(L.eLang),
                c = l && l(L.eLang);
              let Ie = L.sLocName;
              c &&
                c !== 0 &&
                ((Ie += " "),
                (Ie += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(c) +
                    " @ " +
                    (0, M.KC)(c, { bForce24HourClock: !1 }),
                ))),
                N.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: L.eLang,
                      className: (0, W.A)(
                        { [$().LanguageWithContent]: q },
                        L.bSupported
                          ? $().SupportedLanguage
                          : $().UnsupportedLanguage,
                      ),
                      children: Ie,
                    },
                    "langpicker" + L.eLang + (q ? "_hasdata" : ""),
                  ),
                );
            }
            return N;
          }
          OnLanguageChange(N) {
            const { fnOnLanguageChanged: Z, selectedLang: D } = this.props;
            let l = Number.parseInt(N.currentTarget.value);
            l != D && Z && Z(l);
          }
          render() {
            const { selectedLang: N, bDisabled: Z, strTooltip: D } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(oe.he, {
              toolTipContent: D,
              children: (0, e.jsx)("select", {
                value: N,
                onChange: this.OnLanguageChange,
                disabled: Z,
                children: l,
              }),
            });
          }
        };
        K([F.oI], w.prototype, "OnLanguageChange", 1), (w = K([U.PA], w));
        function b(N) {
          const [Z, D] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(w, {
            selectedLang: D,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !Z,
            strTooltip: Z ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function re(N) {
          const { fnLangHasData: Z } = N;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const D = useObserver(() => {
            const l = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              l[g] = !!(Z && Z(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(D), [D]),
            jsx(Fragment, {})
          );
        }
      },
      25679: (G, ce, a) => {
        "use strict";
        a.d(ce, { _: () => to });
        var e = a(7850),
          U = a(99412),
          A = a(19298),
          ae = a(20169),
          te = a(28604),
          V = a(36631),
          X = a(64387);
        function $(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: X.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var W = a(65946),
          m = a(90626),
          M = a(73259),
          F = a(25792),
          oe = a(52393),
          y = a.n(oe),
          B = a(95695),
          K = a.n(B),
          w = a(36707),
          b = a(3166),
          re = a(82054),
          N = a(68266);
        function Z(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(F.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, w.A)(
                    y().SaleBackground,
                    y()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    y().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !b.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function D(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, N.m0)(t, "sale_header", n),
            [h] = (0, W.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!d) return;
            const x = new Image();
            (x.onload = () => {
              const C = (100 * x.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", C);
            }),
              (x.src = d);
          }, [d]);
          const u = t.jsondata.sale_sections?.some(
              (x) => x.section_type === "contenthubmaincarousel",
            ),
            p =
              t.jsondata.item_source_type === M.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                u),
            f = d ? `url(${d})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              h
                ? (0, e.jsx)(re.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: h,
                    styleVariation: re.g.k_SubMenu,
                  })
                : (0, e.jsx)($, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, w.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, w.A)(
                    y()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    y().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: i,
                  children: [
                    d && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, w.A)(
                            K().SalePageBackground,
                            K().BackgroundImage,
                            K().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, w.A)(
                            K().SalePageBackground,
                            K().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: f,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(Z, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var l = a(26589),
          g = a(39905),
          _ = a(50909),
          S = a.n(_);
        function Q(o) {
          const { eventModel: t } = o,
            { data: n } = (0, l.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, b.yK)() == "community"
          )
            return;
          const s = t.GetAllTags(),
            r = [];
          if (
            (s.includes("hide_store") &&
              r.push(
                g.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            s.includes("mod_hide_store") &&
              n.support_user &&
              r.push(g.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              s.includes("contenthub") &&
              r.push(
                g.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && r.length == 0))
          )
            return (0, e.jsx)("div", {
              className: S().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: S().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: S().WarningText,
                      children: [
                        g.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          r.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: r.map((i) =>
                            (0, e.jsx)("li", { children: i }, i),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var L = a(76789),
          q = a.n(L),
          c = a(18210);
        function Ie(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, W.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: q().SalePageLogoCtn,
                  href: b.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(Qe, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, w.A)(q().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(Qe, { ...o }),
                })
            : null;
        }
        function Qe(o) {
          const { eventModel: t, language: n } = o,
            s = (0, N.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Ft = a(72865),
          xt = a(71347),
          at = a.n(xt),
          ot = a(53107);
        function He(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, U.sfN)(b.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, w.A)(
                  at().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(Te, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, w.A)(
                  at().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, r) =>
                      (0, e.jsxs)(
                        m.Fragment,
                        {
                          children: [
                            (0, e.jsx)(Te, { presentor: s, lang: n }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(Te, { presentor: t[t.length - 1], lang: n }),
                ),
              });
        }
        function Te(o) {
          const { presentor: t, lang: n } = o,
            s = (0, Ft.aL)(t.url);
          return (0, e.jsx)(ot.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: at().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var zt = a(60480),
          Ct = a(92757),
          We = a(18994),
          Dt = a(86515),
          Ht = a(39153),
          st = a(61478);
        function Wt(o) {
          const { event: t, broadcastEmbedContext: n } = o,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            r = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(st.B, {
                event: t,
                broadcastEmbedContext: n,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: r,
              }),
          });
        }
        var Et = a(85671);
        function Kt(o) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = o;
          return (0, e.jsx)(Et.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: n,
            addtionalAdminButtons: s,
            bSupportsSticky: !0,
          });
        }
        var Ke = a(179),
          Ue = a(50109),
          Re = a(30096),
          St = a(98609),
          Je = a(57673);
        const rt = new Map();
        function jt(o, t) {
          const n = o.findIndex((s) => s.section_type === "tabs");
          if (n >= 0 && t !== void 0) {
            const s = o[n],
              r = s.tabs?.findIndex((i) => i.unique_id === t);
            if (r !== void 0 && r >= 0 && s.tabs)
              return {
                selectedTabBackgroundDef: s.tabs[r].tab_background_img_groups,
                nTabSaleSectionIndex: n,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function Vt(o, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let d,
            h,
            u = 0;
          const { selectedTabBackgroundDef: p, nTabSaleSectionIndex: f } = jt(
            t,
            n,
          );
          if (o?.enabled) {
            const x = o.groups?.length;
            if (
              (o.groups?.forEach((j, C) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const R = new Array();
                for (
                  let P = 0;
                  P < (j?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++P, ++u
                ) {
                  const H = t[u].unique_id;
                  R.push(H),
                    r.set(H, j.background_id),
                    P === 0 && i.set(H, j.background_id);
                }
                if (
                  (s.set(j.background_id, {
                    nBackgroundGroupID: j.background_id,
                    sectionUniqueIDs: R,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (f === void 0 || u < f)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  C + 1 == x && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let P = u;
                    P < t.length &&
                    (!p || !p.enabled || P < f) &&
                    !(t[P].section_type == "tabs" && p?.enabled);
                    ++P
                  ) {
                    const H = t[P].unique_id;
                    r.set(H, j.background_id);
                  }
              }),
              u < t.length && (f === void 0 || u < f) && (d = t[u].unique_id),
              p?.enabled && f !== void 0)
            ) {
              let j = f;
              const C = p.groups.length;
              for (
                p.groups.forEach((R, k) => {
                  if (j >= t.length) return;
                  const P = new Array();
                  for (
                    let O = 0;
                    O < R.num_sections && j < t.length;
                    ++O, ++j
                  ) {
                    const J = t[j],
                      de = J.unique_id;
                    (0, Je.bF)(n, J)
                      ? (P.push(de),
                        r.set(de, R.background_id),
                        O === 0 && i.set(de, R.background_id))
                      : --O;
                  }
                  let E = j;
                  for (; E < t.length && !(0, Je.bF)(n, t[E]); ) E += 1;
                  if (
                    (s.set(R.background_id, {
                      nBackgroundGroupID: R.background_id,
                      sectionUniqueIDs: P,
                      nSaleSectionLastIndex: j - 1,
                      nUniqueIDNextSaleSection:
                        E < t.length ? t[E].unique_id : void 0,
                    }),
                    k + 1 == C && p.last_group_until_cover_section_until_end)
                  )
                    for (let O = j; O < t.length; ++O) {
                      const J = t[O];
                      if (J.section_type == "tabs" && p?.enabled) break;
                      (0, Je.bF)(n, J) && r.set(J.unique_id, R.background_id);
                    }
                });
                j < t.length && !(0, Je.bF)(n, t[j]);
              )
                j++;
              j < t.length && (h = t[j].unique_id);
            }
          } else t?.length > 0 && (d = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: d,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: p,
            nTabSaleSectionIndex: f,
            nFirstTabSectionIDWithoutGroup: h,
          };
        }
        var he = a(29630),
          Yt = a(68434),
          bt = a(15181),
          it = a(41635),
          Me = a(81416);
        function lt(o, t, n, s) {
          let i = o.jsondata.sale_background_img_groups.groups.find(
            (d) => d.background_id === t.groupID,
          );
          return (
            !i &&
              s >= 0 &&
              (i = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((u) => u.unique_id == s)
                ?.tab_background_img_groups?.groups?.find(
                  (u) => u.background_id == t.groupID,
                )),
            (0, e.jsx)(
              Qt,
              {
                eventModel: o,
                displayDef: i,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  i &&
                  i.randomize_section_order &&
                  n !== Me.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Zt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Zt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, Yt.M)(`sale_section_seed_${t}`, (0, bt.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, bt.A)(s);
            return (0, e.jsx)(e.Fragment, { children: it.fW(n, 0, i) });
          }
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Qt(o) {
          const {
              displayDef: t,
              children: n,
              eventModel: s,
              derivedGroupInfo: r,
            } = o,
            i = (0, Ue.E)(),
            d = m.useCallback(
              (C, R) => {
                rt.set(r.nBackgroundGroupID, R);
              },
              [r],
            ),
            h = (0, Re.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const C = (0, U.LgB)(i),
              R =
                C in t.localized_background_art
                  ? C
                  : c.A0.GetLanguageFallback(St.TS.LANGUAGE),
              k = t.localized_background_art[R];
            k && (u = he.zU.GenerateURLFromHashAndExt(s.clanSteamID, k));
          }
          let p = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              p += "to bottom,";
              break;
            case "left-to-right":
              p += "to right,";
              break;
            case "top-left-to-bottom-right":
              p += "to bottom right,";
              break;
            case "single-color":
              p = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((p += " " + t.background_color1),
              (p += ", " + t.background_color2),
              (p += ")"))
            : (p = null);
          const f =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            x = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            j = {
              backgroundImage: p ? `url(${u}), ${p}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: x ? t.position_setting : void 0,
              backgroundColor: f ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: h,
            style: j,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var wt = a(9807),
          Ve = a(4720),
          Jt = a(64641),
          At = a.n(Jt),
          Ce = a(85599);
        function Ne(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class yt {
          Keyify = (t) => Ne(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, n) {
            const s = this.m_mapVisible.get(this.Keyify(t)) || 0,
              r = this.m_mapVisible.get(this.Keyify(n)) || 0;
            return s - r;
          }
          BMarkAppVisibile(t, n) {
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return (
              s.add(r),
              this.IsAlreadyVisible(n)
                ? (this.m_mapVisible.set(
                    r,
                    (this.m_mapVisible.get(r) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(r, 1), !0)
            );
          }
          BMarkAppNotVisible(t, n) {
            if (!this.IsAlreadyVisible(n)) return !1;
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return s.has(r) ? (this.DecrementAppVisibility(r), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let n = this.m_mapOwners.get(t);
            return (
              n ||
                (this.m_mapOwners.set(t, new Set()),
                (n = this.m_mapOwners.get(t))),
              n
            );
          }
          DecrementAppVisibility(t) {
            const n = (this.m_mapVisible.get(t) ?? 0) - 1;
            n > 0 ? this.m_mapVisible.set(t, n) : this.m_mapVisible.delete(t);
          }
        }
        var Ye = a(71742),
          ct = a(53113),
          Lt = a(90405);
        function Xt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function Pt(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, l.hM)(n ? o.GetAccountID() : 0);
          return n && Xt(s, t);
        }
        function $t(o) {
          const { clanSteamID: t, id: n } = o;
          return Pt(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, w.A)(
                  o.className,
                  o.requireAdmin
                    ? B.ValveOnlyAdminBackground
                    : B.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var ee = a(16412),
          me = a(96538),
          je = a(88003),
          qt = a(12932),
          dt = a(46777),
          en = a(77495),
          gt = a(16346),
          tn = a(61257),
          Bt = a(56718),
          Fe = a(71421),
          nn = a(27828),
          Xe = a.n(nn);
        function an(o) {
          return `rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`;
        }
        function on(o) {
          const t = parseInt(o.slice(1), 16),
            n = (t >> 16) & 255,
            s = (t >> 8) & 255,
            r = t & 255;
          return `rgba(${n}, ${s}, ${r}, 1)`;
        }
        function sn(o) {
          const { color: t, onChange: n, strTitle: s, disableAlpha: r } = o,
            [i, d] = (0, m.useState)(() => t || "rgba(255, 255, 255, 1)"),
            h = (0, m.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(g.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const f = (await new window.EyeDropper().open()).sRGBHex,
                  x = on(f);
                d(x), n(x);
              } catch (u) {
                console.warn(g.Z.Localize("#Sale_EyeDropperFailed"), u);
              }
            }, [n]);
          return (0, e.jsxs)("div", {
            className: Xe().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)(ee.JU, { children: s }),
              (0, e.jsx)(tn.xk, {
                onChange: (u) => {
                  const p = an(u);
                  d(p), n(p);
                },
                color: i,
                disableAlpha: r,
                className: Xe().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: Xe().EyeDropperCtn,
                children: (0, e.jsx)(Fe.Gq, {
                  toolTipContent: g.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(ee.$n, {
                    className: Xe().EyeDropperBtn,
                    onClick: h,
                    children: (0, e.jsx)(Bt.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function rn(o) {
          const {
              color: t,
              onChange: n,
              onRequestClose: s,
              disableAlpha: r,
              strTitle: i,
            } = o,
            d = (0, m.useRef)(null);
          return (
            (0, m.useEffect)(() => {
              const h = d.current?.ownerDocument ?? document,
                u = (f) => {
                  d.current && !d.current.contains(f.target) && s();
                },
                p = (f) => {
                  f.key === "Escape" && s();
                };
              return (
                h.addEventListener("pointerdown", u, !0),
                h.addEventListener("keydown", p, !0),
                () => {
                  h.removeEventListener("pointerdown", u, !0),
                    h.removeEventListener("keydown", p, !0);
                }
              );
            }, [s]),
            (0, e.jsx)("div", {
              ref: d,
              children: (0, e.jsx)(sn, {
                color: t,
                disableAlpha: r,
                strTitle: i ?? g.Z.Localize("#Button_Color"),
                onChange: n,
              }),
            })
          );
        }
        function ut() {
          return {
            openColorPicker: (0, m.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, gt.lX)(
                (0, e.jsx)(rn, {
                  color: n.color,
                  disableAlpha: n.disableAlpha,
                  strTitle: n.strTitle,
                  onChange: n.onChange,
                  onRequestClose: r,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var ln = a(13447),
          Be = a.n(ln),
          cn = a(32190),
          Gt = a.n(cn),
          Ge = a(76559),
          Tt = a(75909),
          be = a(53424),
          Mt = a(72604),
          dn = a(41735),
          gn = a.n(dn),
          $e = a(14947),
          Oe = a(9046),
          un = Object.defineProperty,
          mn = Object.getOwnPropertyDescriptor,
          v = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? mn(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && un(t, n, r), r;
          };
        const I = class On {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, $e.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                b.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await gn().get(i, { params: d, cancelToken: t && t.token })).data
                .success == Mt.R
            );
          }
          SetPrimaryImageForImageGroup(t, n) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              n != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = n),
              (this.m_curLocImageGroup.localized_images = (0, it.$Y)(
                this.m_curLocImageGroup.localized_images,
                U.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(t, n) {
            if (this.m_curLocImageGroup) {
              let s = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[n]
                ? this.m_curLocImageGroup.localized_images[n]
                : he.zU.GenerateURLFromHashAndExt(
                    t,
                    he.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const n = this.m_curLocImageGroup.primaryImage,
              s = Ge.b.InitFromClanID(n.clanAccountID),
              r = he.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let h = U.Bhc; h < U.bP9; ++h)
              i.push(On.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, $e.h5)(() => {
              for (let h = U.Bhc; h < U.bP9; ++h)
                d[h] &&
                  (this.m_curLocImageGroup.localized_images[h] =
                    he.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Oe.wI.full,
                      h,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, n, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? he.zU.GenerateURLFromHashAndExtAndLang(
                    n,
                    s,
                    Oe.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, n) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const r = Ge.b.InitFromClanID(s.clanAccountID),
                i = he.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  he.zU.GenerateURLFromHashAndExtAndLang(
                    r,
                    i,
                    Oe.wI.full,
                    n,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((s) => he.zU.GetHashAndExtFromURL(s));
          }
        };
        v([$e.sH], I.prototype, "m_curLocImageGroup", 2);
        let T = I;
        const z = new T();
        var Y = a(38410),
          ne = a(34592),
          ge = a(75844),
          xe = a(32093),
          we = a(72849),
          ve = a(64),
          ye = a(72739),
          Ae = a(82734);
        function ze(o, t) {
          const n = m.useRef(void 0),
            s = m.useCallback(
              (d) => {
                d.currentTarget.files.length > 0 &&
                  (o(d.currentTarget.files), (d.currentTarget.value = ""));
              },
              [o],
            ),
            r = m.useCallback(() => n.current.click(), []);
          return [
            ye.createPortal(
              (0, e.jsx)("form", {
                onSubmit: xn,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: n,
                  onChange: s,
                }),
              }),
              window.document.body,
            ),
            r,
          ];
        }
        function Ot(o) {
          const [t, n] = m.useState(!1),
            s = m.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = m.useCallback((u) => {
              Ae.NO(u) && n(!1);
            }, []),
            i = m.useCallback(() => n(!1), []),
            d = t ? xn : void 0,
            h = m.useCallback(
              (u) => {
                u.dataTransfer.files?.length &&
                  (o(u.dataTransfer.files, u),
                  u.preventDefault(),
                  u.stopPropagation()),
                  n(!1);
              },
              [o],
            );
          return [
            {
              onDragEnter: s,
              onDragLeave: r,
              onDragEnd: i,
              onDragOver: d,
              onDrop: h,
            },
            t,
          ];
        }
        async function Un(o, t = 1e3) {
          return await new Promise((n, s) => {
            const r = new Image();
            (r.src = o),
              (r.onload = () => n("success")),
              (r.onerror = () => n("error")),
              t > 0 && window.setTimeout(() => n("timeout"), t);
          });
        }
        function xn(o) {
          o.preventDefault();
        }
        function lo(o) {
          switch (o.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = o.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var Rn = a(71647),
          qe = a.n(Rn);
        function kn(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Ot(t),
            [h, u] = ze(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, w.A)(
              d ? qe().DragAndDropContainerDragging : qe().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: qe().ImageUploadBar,
                children: [
                  h,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: qe().SelectImageButton,
                        children: (0, c.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              s,
              o.children,
            ],
          });
        }
        var mt = a(36118),
          Nn = a(21254),
          Fn = a(27344),
          De = a.n(Fn),
          zn = a(9472);
        function Hn(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [h, u] = (0, W.q3)(() => [
              t.GetUploadImages(),
              Ue.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (j) => {
                let C = Array.from(j),
                  R = !0;
                for (let k = 0; k < C.length; k++) {
                  const P = C[k],
                    { language: E } = (0, Y.jj)(P?.name, u);
                  try {
                    const H = (0, Y.PD)(E, u, d);
                    (R = await t.AddImageForLanguage(P, H)),
                      R ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            k +
                            " file=" +
                            P.name,
                        ),
                        (0, je.pg)(
                          (0, e.jsx)(me.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              P.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (H) {
                    let O = (0, ne.H)(H);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + O.strErrorMsg,
                      O,
                    ),
                      (0, je.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            O.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return R;
              },
              [u, t, d],
            ),
            f = m.useMemo(
              () =>
                i instanceof Array
                  ? i
                  : [
                      (0, e.jsx)(
                        m.Fragment,
                        { children: i },
                        "elAdditonalButtons",
                      ),
                    ],
              [i],
            );
          (0, W.q3)(() =>
            h.map((j) => ({ a: j.GetCurrentImageOption(), b: j.language })),
          );
          const x = async () => {
            const j = await t.UploadAllImages(r);
            n?.(j);
          };
          return (0, e.jsxs)(kn, {
            onDropFiles: p,
            elAdditonalButtons: f,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: De().UploadPreviewCtn,
                  children: h.map((j) =>
                    (0, e.jsx)(
                      Cn,
                      {
                        asset: j,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(j),
                        languageRealms: d,
                      },
                      "arttabupload_" + j.filename + "_" + j.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Wn, { imageUploader: t, fnOnUploadImageRequested: x }),
            ],
          });
        }
        function Wn(o) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = o,
            [s] = (0, W.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: De().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(ee.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(ee.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function co(o, t, n, s, r) {
          let i = new Array();
          return (
            o.GetUploadImages().forEach((d) => {
              i.push(
                jsx(
                  Cn,
                  {
                    asset: d,
                    forceResolution: n,
                    forceFileType: s,
                    fnOnRemove: () => o.DeleteUploadImage(d),
                    languageRealms: r,
                  },
                  t + d.file + "_" + d.uploadTime,
                ),
              );
            }),
            i
          );
        }
        const Cn = (0, ge.PA)(Kn);
        function Kn(o) {
          const t = (C) => {
              if (C instanceof ve.M7) {
                C.ResetImage();
                const R = window,
                  k = (0, e.jsx)(Nn.q, {
                    ownerWin: R,
                    uploadFile: C,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || we.bg.dU,
                  });
                (0, je.HT)(k, R, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  C.fileType,
                  JSON.stringify(C.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((C) => {
              let R = C?.fnGetLabelText(),
                k;
              C.bEnforceDimensions && (R += ` - ${C.width}x${C.height}`),
                C.bDeprecated &&
                  ((R += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (k = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let P;
              return (
                (n.BIsOriginalMinimumDimensions(C) &&
                  n.FileTypeMatchesImageTypes(C)) ||
                  (P = De().ImageDimensionTooSmall),
                { label: R, data: C, strOptionClass: P, tooltip: k }
              );
            }).filter((C) => !C.data.bHiddenFromDropdown),
            d = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            h = n.BSupportsLanguages()
              ? Zn(
                  c.A0.GetLanguageListForRealms(
                    r ?? [xe.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            p = n.status == "pending";
          let f = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (f = (0, c.we)("#ImageUpload_NeedsCrop"))
              : u.error && (f = (0, c.we)("#ImageUpload_Invalid")));
          let x;
          const j = n.GetCurrentImageOption();
          return (
            j && (x = i?.find((C) => C.data.sKey == j.sKey)?.data),
            x || (x = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: De().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: De().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(mt.sED, {}),
                }),
                (0, e.jsx)(Vn, { asset: n }),
                h &&
                  (0, e.jsx)(ee.m, {
                    strDropDownClassName: K().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (C) => (n.language = C.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(ee.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: x,
                    onChange: (C) => n.SetCurrentImageOption(C.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((C, R) =>
                    (0, e.jsx)(
                      "div",
                      { className: De().UploadPreviewWarning, children: C },
                      `warning${R}`,
                    ),
                  ),
                p &&
                  u.messages?.map((C, R) =>
                    (0, e.jsx)(
                      "div",
                      { className: De().UploadPreviewMessage, children: C },
                      `message${R}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, w.A)({
                    [K().FlexColumnContainer]: !0,
                    [De().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    f,
                    (0, zn.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: At().FlexCenter,
                        children: (0, e.jsx)(Ce.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: De().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: De().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)(ee.jn, {
                    onClick: () => t(n),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Vn(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: De().PreviewImgCtn,
                onClick: (n) =>
                  (0, je.pg)((0, e.jsx)(Yn, { asset: t }), (0, Ae.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: De().PreviewImgInfo,
                    children: [t.width, " x ", t.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: t.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: De().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: De().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Yn(o) {
          const { asset: t, closeModal: n } = o;
          return (0, e.jsx)(me.o0, {
            bAlertDialog: !0,
            closeModal: n,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: t.dataUrl }),
            }),
          });
        }
        function Zn(o) {
          const t = [],
            n = new Array();
          for (const s of o) {
            if (s == U.X51) continue;
            const r = (0, c.we)("#Language_" + (0, U.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Ut = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Ut || {});
        function Dn(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function go(o, t, n) {
          let s = "";
          const r = Dn(t);
          if (n == 4)
            (s = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (s += r),
              (s += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (s += r),
              (s += " autoplay=true controls=false][/video]");
          else if (n == 2) s = "[img]" + r + "[/img]";
          else {
            const i = Dn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var Qn = a(55436),
          Jn = a(53732),
          Ee = a.n(Jn),
          En = a(49460);
        function Xn(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, m.useRef)(null);
          return (0, e.jsx)("div", {
            className: En.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: En.SearchInput,
              type: "text",
              placeholder: (0, c.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), n.current && (n.current.value = ""));
              },
            }),
          });
        }
        const $n = m.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: h,
          } = t;
          return (0, e.jsx)(Sn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (u, p) =>
              u.map((f) =>
                (0, e.jsx)(
                  qn,
                  {
                    clanImage: f,
                    searchStringHilight: p,
                    imageInsertCallBack: r,
                    showImageActions: d,
                    fnOnOpenLocalizedImageGroup: h,
                    OnImageClick: i,
                  },
                  f.imageid,
                ),
              ),
          });
        });
        function Sn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, be.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = be.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = Ge.b.InitFromClanID(t);
            let u = be.pU.GetLoadState(h);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Ee().ResultNotification,
                    children:
                      i.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : u && u.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: Ee().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: Ee().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(d, i);
        }
        function uo(o) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = o;
          return jsx(Sn, {
            clanAccountID: t,
            fileNameSearch: n,
            children: (i) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: i.map((d) =>
                  jsx(
                    ta,
                    { clanImage: d, selected: d == r, onImageSelected: s },
                    d.imageid,
                  ),
                ),
              }),
          });
        }
        function qn(o) {
          const {
              clanImage: t,
              searchStringHilight: n,
              imageInsertCallBack: s,
              OnImageClick: r,
              showImageActions: i,
              fnOnOpenLocalizedImageGroup: d,
            } = o,
            [h, u] = m.useState(!1),
            p = () => s(t, Ut.k_eInsertFullImage),
            f = () => s(t, Ut.k_eInsertVideo),
            x = () => s(t, Ut.k_eInsertThumbnail),
            j = (ie) => {
              t.url &&
                (ie.dataTransfer.setData("text", t.url),
                be.pU.GetClanImageDragListener().forEach((fe) => {
                  let Pe = Ge.b.InitFromClanID(t.clanAccountID);
                  fe(Pe, !0);
                }));
            },
            C = (ie) => {
              t.url &&
                be.pU.GetClanImageDragListener().forEach((fe) => {
                  let Pe = Ge.b.InitFromClanID(t.clanAccountID);
                  fe(Pe, !1);
                });
            },
            R = (ie) => {
              (0, je.pg)(
                (0, e.jsx)(me.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: P,
                  onCancel: E,
                  closeModal: E,
                  children: (0, e.jsxs)(m.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, Ae.uX)(ie) ?? window,
              );
            },
            k = (ie) => {
              console.log("ClanImageWrapper on delete error: " + ie),
                (0, je.pg)(
                  (0, e.jsx)(me.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ie }),
                  }),
                  window,
                );
            },
            P = () => {
              u(!0);
              let ie = Ge.b.InitFromClanID(t.clanAccountID);
              be.pU
                .DeleteClanImage(ie, t)
                .then((fe) => {
                  fe.success != Mt.R && k((0, ne.H)(fe).strErrorMsg), u(!1);
                })
                .catch((fe) => {
                  k((0, ne.H)(fe).strErrorMsg), u(!1);
                }),
                E();
            },
            E = () => {},
            H = () => {
              r && r(t);
            },
            O = t.file_name ? t.file_name : "",
            J = (0, Qn.r)(n, O, String(t.imageid), Ee().Hilight),
            de = he.zU.BIsClanImageVideo(t),
            se = i && !h && !de,
            ue = i && !h && !de,
            Le = i && !h && de,
            le = i && !h && !de;
          return (0, e.jsx)(Lt.K, {
            placeholderHeight: "100vh",
            className: Ee().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: Ee().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: Ee().ImageWrapper,
                  style: {
                    backgroundImage: de ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: j,
                  onDragEnd: C,
                  onDoubleClick: p,
                  onClick: H,
                  children: (0, e.jsx)(jn, {
                    clanImage: t,
                    className: Ee().VideoBackground,
                  }),
                }),
                se &&
                  (0, e.jsx)("span", {
                    className: Ee().Full,
                    onClick: p,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(Ce.t, {
                    size: "medium",
                    className: Ee().FloatingThrobber,
                  }),
                ue &&
                  (0, e.jsx)("span", {
                    className: Ee().Thumb,
                    onClick: x,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                le &&
                  d &&
                  (0, e.jsx)(ea, {
                    bDeleting: h,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Le &&
                  (0, e.jsx)("span", {
                    className: Ee().Full,
                    onClick: f,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: Ee().Delete,
                    onClick: R,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: Ee().ImageWrapperFilename,
                  title: O,
                  children: J,
                }),
              ],
            }),
          });
        }
        function ea(o) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: n,
              bDeleting: s,
            } = o,
            { data: r } = (0, l.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, w.A)(Ee().Localized, K().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function jn(o) {
          const { clanImage: t, className: n } = o;
          return he.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == we.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function ta(o) {
          const { clanImage: t, onImageSelected: n, selected: s } = o;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              s && styles.Selected,
            ),
            onClick: () => n(t, !1),
            onDoubleClick: () => n(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(jn, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function na(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = m.useCallback(
              (h, u) => {
                s?.(h, u), n?.();
              },
              [s, n],
            ),
            [i, d] = m.useState("");
          return (0, e.jsxs)(me.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: n,
            onCancel: n,
            children: [
              (0, e.jsx)(Xn, { fnSetImageSearch: d }),
              (0, e.jsx)($n, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: i,
                imageInsertCallBack: r,
                showImageActions: !1,
              }),
            ],
          });
        }
        function aa(o) {
          const { clanSteamID: t, OnClanImageSelected: n } = o;
          return (0, e.jsxs)("div", {
            className: qe().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: qe().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, je.pg)(
                    (0, e.jsx)(na, { clanSteamID: t, OnClanImageSelected: n }),
                    (0, Ae.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function oa(o) {
          const {
              clanSteamID: t,
              rgSupportArtwork: n,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: r,
              fnSetImageURL: i,
              rgRealmList: d,
            } = o,
            [h] = (0, W.q3)(() => [Ue.O.Get().GetCurEditLanguage()]),
            u = (0, Tt.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [f, x] = m.useState(!1),
            j = m.useCallback(
              async (k, P) => {
                if (!f) {
                  x(!0);
                  try {
                    const { language: E } = (0, Y.jj)(k.file_name ?? "", h),
                      H = (0, Y.PD)(E, h, d);
                    await p.AddExistingClanImage(k, H);
                  } catch (E) {
                    let H = (0, ne.H)(E);
                    console.error("AddExistingClanImage: " + H.strErrorMsg, H),
                      (0, je.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            H.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  x(!1);
                }
              },
              [f, p, h, d],
            ),
            C = m.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          aa,
                          { clanSteamID: t, OnClanImageSelected: j },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [j, r, t],
            ),
            R = (k) => {
              for (const P of k) {
                const E = P.uploadResult;
                if (E?.origimagehash) {
                  const H = (0, Y.PD)(E.language, h, d);
                  z.AddLocalizeImageUploaded(E.origimagehash, H);
                } else {
                  const H = be.pU.GetClanImageByImageHash(
                      t,
                      E?.image_hash ?? "",
                    ),
                    O = P.image.GetCurrentImageOption();
                  if (H && O) {
                    const J = (0, Y.PD)(P.image.language, h, d);
                    i(O.artworkType, H, J);
                  }
                }
              }
            };
          return (0, e.jsx)(Hn, {
            ...o,
            imageUploader: p,
            rgRealmList: d,
            elAdditonalButtons: f
              ? [
                  (0, e.jsx)(
                    Ce.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : C,
            fnUploadComplete: R,
          });
        }
        var ht = a(25279),
          bn = a(84676),
          sa = a(25359),
          pe = a.n(sa),
          ra = a(24806);
        function wn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [h, u] = (0, m.useState)(s),
            p = Ge.b.InitFromClanID(t.clanAccountID),
            f = (0, W.q3)(() =>
              he.zU.GenerateURLFromHashAndExt(p, he.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(me.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, w.A)(K().FlexColumnContainer, pe().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: pe().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: pe().ArtworkPreview,
                    src: f,
                  }),
                }),
                (0, e.jsx)(ra.Ng, {
                  selectedLang: h,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Rt = a(56330);
        function hn(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var ia = a(58483),
          la = a(82385),
          ca = a(94520),
          da = a(95174),
          ga = a(9709),
          pn = a(64868),
          ua = a(44894);
        const ma =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var ha = a(11243);
        function pa(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, be.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const f = c.A0.GetLanguageListForRealms([
                xe.TU.k_ESteamRealmGlobal,
                xe.TU.k_ESteamRealmChina,
              ]);
              for (const x of f) {
                const j = n(x);
                if (j) {
                  const C = (0, U.LgB)(x),
                    R = (0, c.we)("#Language_" + C);
                  p.push({ lang: x, strLang: C, locLang: R, imgHash: j });
                }
              }
              return (
                (p = p.sort((x, j) =>
                  x.locLang > j.locLang ? 1 : x.locLang < j.locLang ? -1 : 0,
                )),
                p
              );
            }, [n]),
            [d, h, u] = (0, pn.uD)();
          return (0, e.jsxs)("div", {
            className: pe().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: pe().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: pe().LanguageListContainer,
                children: i.map((p) =>
                  (0, e.jsx)(
                    va,
                    { langData: p, ...o },
                    "lang_select_" + t.GetAccountID() + " " + p.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)(ee.$n, {
                  onClick: h,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(ha.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(me.EN, {
                active: d,
                children: (0, e.jsx)(me.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < U.bP9; p++) s && r && s(p) && r(p);
                  },
                }),
              }),
            ],
          });
        }
        function va(o) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: d,
            } = o,
            [h, u] = (0, W.q3)(() => {
              const p = be.pU.GetClanImageByImageHash(t, n.imgHash);
              let f = "";
              p &&
                (f = he.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  he.zU.GetHashAndExt(p),
                  Oe.wI.full,
                  n.lang,
                ));
              let x = pe().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (x = n.imgHash
                    ? pe().LanguageSelector
                    : pe().LanguageSelectorNoData),
                [f, x]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: pe().LanguageContainer,
            onClick: (p) => {
              let f = (0, U.sfN)(p.currentTarget.id);
              r(f);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: pe().LanguageOptions,
                children: [
                  !!h &&
                    (0, e.jsx)("a", {
                      href: h,
                      target: "_blank",
                      children: (0, e.jsx)(Fe.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: mt.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(fa, { ...o }),
                  !!d && (0, e.jsx)(Ia, { fnOnRemoveImage: d, langData: n }),
                ],
              }),
            ],
          });
        }
        function fa(o) {
          const {
              clanSteamID: t,
              langData: n,
              fnOnArtworkLangChange: s,
              fnGetImageHash: r,
              fnLangHasData: i,
              realms: d,
            } = o,
            [h, u, p] = (0, pn.uD)(),
            f = (0, W.q3)(() => {
              const x = r(n.lang);
              return (
                (0, Ye.wT)(
                  !x || !x.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + x,
                ),
                be.pU.GetClanImageByImageHash(t, x)
              );
            });
          if (!f) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Fe.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ma,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(F.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: h,
                  children: (0, e.jsx)(wn, {
                    clanImage: f,
                    lang: n.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: i,
                    realms: d,
                    closeModal: p,
                  }),
                }),
              }),
            ],
          });
        }
        function Ia(o) {
          const { fnOnRemoveImage: t, langData: n } = o,
            [s, r, i] = (0, pn.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Fe.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ua.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(F.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: s,
                  children: (0, e.jsx)(me.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, U.LgB)(n.lang)),
                    ),
                    onOK: () => {
                      t(n.lang);
                    },
                    closeModal: i,
                  }),
                }),
              }),
            ],
          });
        }
        var vn = a(13465),
          _a = a(21659),
          xa = a(15496),
          Se = a.n(xa),
          Ca = a(88812);
        function Da(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            h = (0, _a.c5)(),
            u = m.useCallback(
              (E) => {
                E.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, U.sfN)(b.TS.LANGUAGE),
            [f, x, j] = (0, W.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let C = "spotlight",
            R = Oe.wI.spotlight_main;
          (t.appid == 2434320 || b.TS.EUNIVERSE == U.Rv) &&
            ((C = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (R = Oe.wI.full));
          let k =
            (0, Ca.WC)(n !== void 0 ? void 0 : t, C, p, R) ??
            (n !== void 0 ? [n] : []);
          i && k && (k = i(k));
          const P = f.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: Se().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(A.Z, {
                className: (0, w.A)(
                  Se().AppDetailsSpotlightContainer,
                  Se().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Se().MajorEventBackground,
                    children: (0, e.jsx)(vn.c, {
                      className: Se().MajorEventImageBackgroundBlur,
                      rgSources: k,
                      onIncrementalError: (E, H, O) => r && r(H),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Se().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(vn.c, {
                        className: Se().MajorEventImage,
                        rgSources: k,
                        onIncrementalError: (E, H, O) => r && r(H),
                      }),
                      (0, e.jsx)("div", {
                        className: Se().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Se().MajoreEventImageContentContainer,
                        children:
                          j &&
                          (0, e.jsxs)("div", {
                            className: Se().MajorEventContent,
                            children: [
                              (0, e.jsx)(vn.c, {
                                className: Se().MajorEventSpotlightBackground,
                                rgSources: k,
                                onIncrementalError: (E, H, O) => r && r(H),
                              }),
                              (0, e.jsxs)("div", {
                                className: Se().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Se().MajorEventTitle,
                                    children: x,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Se().MajorEventSummary,
                                    children: P,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: Se().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Ea = a(79949),
          _e = a.n(Ea);
        function Sa(o) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: d,
              fnOnRemoveImage: h,
              fnOnArtworkLangChange: u,
              realms: p,
              fnLangHasData: f,
              fnGetImageHashAndExt: x,
            } = o,
            j = x(n, t),
            C = j
              ? he.zU.GenerateURLFromHashAndExtAndLang(r, j, Oe.wI.full, t)
              : "",
            [R] = (0, W.q3)(() => [La(n, x)]);
          return R == 0
            ? (0, e.jsxs)("div", {
                className: pe().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(An, {
                      imgURL:
                        b.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(yn, {
                      imgURL:
                        b.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(ja, {
                      langOverride: t,
                      artworkType: n,
                      eventModel: i,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: pe().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(An, {
                      imgURL: C,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(yn, {
                      imgURL: C,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(kt, { imgURL: C, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(kt, { imgURL: C, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(kt, { imgURL: C, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(wa, {
                      imgURL: C,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(Aa, { imgURL: C }),
                  n === "sale_overlay" && (0, e.jsx)(ya, { imgURL: C }),
                  Oe.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: ga.PreviewImg,
                      src: z.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(pt, { imgURL: C }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(pt, { imgURL: C }),
                  n === "sale_logo" && (0, e.jsx)(pt, { imgURL: C }),
                  n === "bestofyear_banner" && (0, e.jsx)(pt, { imgURL: C }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(pt, { imgURL: C }),
                  (0, e.jsx)(pa, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: f,
                    fnGetImageHash: (k) => hn(x(n, k) ?? ""),
                  }),
                ],
              });
        }
        function mo(o) {
          const { artworkType: t } = o,
            n = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [n.width, " X ", n.height],
              }),
            ],
          });
        }
        function ja(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = ht.Fj[t],
            i = m.useMemo(
              () =>
                ba(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(kt, { lang: n, imgURL: i, event: s });
        }
        function ba(o, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            d = 20;
          for (let p = 0; p < 200; p += d)
            for (let f = 0; f < 780; f += d)
              (i.fillStyle =
                (f / d + p / d) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(f, p, d, d);
          const h = i.createLinearGradient(0, 0, 780, 0);
          h.addColorStop(0, "rgba(32,32,32,0.8)"),
            h.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = h),
            i.fillRect(0, 0, 780, 200);
          const u = i.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            u.addColorStop(0, "rgba(0,0,0,0)"),
            u.addColorStop(1, "rgba(0,0,0,0.6)"),
            (i.fillStyle = u),
            i.fillRect(0, 0, 780, 200),
            (i.fillStyle = "#fff"),
            (i.font = "32px Arial"),
            (i.textAlign = "center"),
            (i.textBaseline = "middle"),
            i.fillText(o, 780 / 2, 200 / 2 - 20),
            t &&
              ((i.font = "18px Arial"), i.fillText(t, 780 / 2, 200 / 2 + 25)),
            r.toDataURL("image/png")
          );
        }
        function An(o) {
          const { imgURL: t, eventModel: n, langOverride: s } = o,
            r = (0, Ue.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(da.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function yn(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, ia.LJ)(),
            [i, d, h, u, p] = (0, W.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let f = d
            ? (0, e.jsx)(ca.fh, {
                text: d || "",
                showErrorInfo: !1,
                event: n,
                languageOverride: Ue.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: _e().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: _e().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, w.A)(
                  _e().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: _e().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: _e().MainImageCtn,
                      children: (0, e.jsx)("img", { src: o.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: _e().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: _e().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: _e().TextTitle,
                            children:
                              i ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: _e().TextSubTitle,
                            children:
                              h ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: _e().TextBody,
                            children: f,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              u != U.Fwr &&
                (0, e.jsxs)(m.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: _e().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: _e().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, w.A)(
                        _e().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: _e().DetailExample2,
                        children: (0, e.jsx)(
                          la.He,
                          {
                            event: n,
                            emoticonStore: r,
                            partnerEventStore: s,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          p,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const kt = (o) => {
            const [t] = (0, bn.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: _e().SpotlightExample,
              children: (0, e.jsx)(Da, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          wa = (o) => {
            const t = [
              (0, e.jsx)("img", { src: o.imgURL }, "img"),
              (0, e.jsx)("div", { className: pe().BroadcastPreview }, "video"),
            ];
            return (
              o.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: _e().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Aa = (o) =>
            (0, e.jsx)("div", {
              className: _e().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          ya = (o) =>
            (0, e.jsx)("div", {
              className: _e().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          pt = (o) =>
            (0, e.jsx)("div", {
              className: _e().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function La(o, t) {
          let n = 0;
          for (let s = U.Bhc; s < U.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var Pa = Object.defineProperty,
          Ba = Object.getOwnPropertyDescriptor,
          Ln = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Ba(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && Pa(t, n, r), r;
          };
        const Ga =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ta = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Ta || {});
        function Ma(o) {
          const {
              artworkType: t,
              headerHint: n,
              appid: s,
              fnToggleMinimize: r,
              realms: i,
              eventModel: d,
              fnLangHasData: h,
              fnGetImageHashAndExt: u,
              fnSetImageURL: p,
              partnerEventStore: f,
            } = o,
            [x] = (0, bn.t7)(s, { include_assets: !0 }),
            [j, C] = (0, W.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            R = j == U.ajI;
          let k = null;
          n === 2
            ? (k = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (k = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (k = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let P = null;
          t === "capsule"
            ? R
              ? (P = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (P = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!C &&
                      (0, e.jsxs)("div", {
                        className: pe().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${b.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, c.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (P = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, c.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, c.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (P = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (P = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, c.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, c.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (P = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (P = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: K().EventElementRequired,
                              children: (0, c.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, c.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, c.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? x &&
                          (P = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !x.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Rt.ErrorStylesBackground,
                                  children: (0, c.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : t === "localized_image_group" ||
                            t === "link_capsule" ||
                            t === "sale_section_title" ||
                            t === "schedule_track_art" ||
                            t === "localized_background_art"
                          ? (P = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ga,
                                      target: b.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, c.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (P = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: K().EventElementOptional,
                                    children: (0, c.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, c.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, c.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (P = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: K().EventElementOptional,
                                      children: (0, c.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, c.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, c.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, c.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (P = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (P = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: K().EventElementOptional,
                                          children: (0, c.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (P = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: K().EventElementRequired,
                                          children: (0, c.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const E = ht.Fj[o.artworkType].width,
            H = ht.Fj[o.artworkType].height;
          return (0, e.jsxs)("div", {
            id: o.id,
            className: pe().ArtworkSelectorContainer,
            children: [
              !!o.title &&
                (0, e.jsxs)("div", {
                  className: pe().Title,
                  onDoubleClick: r,
                  children: [
                    o.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    k,
                    r &&
                      (0, e.jsx)(ee.$n, {
                        onClick: r,
                        children: (0, e.jsx)(Fe.he, {
                          toolTipContent: (0, c.we)(
                            o.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: o.bIsMinimized
                            ? (0, e.jsx)(mt.hz4, {})
                            : (0, e.jsx)(mt.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, w.A)(pe().SelectImageBlock, pe().Tips),
                  children: [
                    P,
                    !!(E && H) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, c.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, c.PP)(
                            "#selectimage_tip1",
                            (0, ht.qj)(E),
                            (0, ht.qj)(H),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Rt.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)(ee.$n, {
                        onClick: (O) => {
                          (0, je.pg)(
                            (0, e.jsx)(Oa, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, Ae.uX)(O) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsx)(Ua, {
                  clanSteamID: o.clanSteamID,
                  title: o.title ?? "",
                  eventModel: d,
                  artworkType: o.artworkType,
                  realms: i,
                  appid: s,
                  fnGetImageHashAndExt: u,
                  fnSetImageURL: p,
                  fnLangHasData: h,
                  partnerEventStore: f,
                }),
            ],
          });
        }
        function Oa(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(me.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), n?.();
            },
            onCancel: n,
          });
        }
        function Ua(o) {
          const {
              artworkType: t,
              realms: n,
              clanSteamID: s,
              fnLangHasData: r,
              fnGetImageHashAndExt: i,
              fnSetImageURL: d,
              eventModel: h,
              appid: u,
              partnerEventStore: p,
            } = o,
            f = t === "localized_image_group",
            [x, j] = m.useState((0, Ue.E)()),
            [C, R] = m.useState(new Array()),
            k = m.useCallback(
              (E, H, O) => {
                let J = [];
                C.find((se) => se.clanImage.imageid == E.imageid)
                  ? (J = C.map((se) =>
                      se.clanImage.imageid == E.imageid
                        ? { clanImage: E, lang: H }
                        : se,
                    ))
                  : O && (J = C.concat({ clanImage: E, lang: H })),
                  R(J);
              },
              [C],
            ),
            P = m.useCallback(
              (E, H, O) => {
                (0, $e.h5)(() => {
                  hn(i(t, H) ?? "") == E.image_hash && d(t, null, H),
                    d(t, E, O),
                    k(E, O, !1);
                });
              },
              [i, t, d, k],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(ee.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${b.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Nt, {
                    list: C,
                    fnOnArtworkLanguageChange: P,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, w.A)(
                        pe().SelectImageBlock,
                        pe().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Sa, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (E) => {
                          E != x && j(E);
                        },
                        langOverride: x,
                        fnOnArtworkLangChange: f ? null : P,
                        artworkType: t,
                        fnOnRemoveImage: f ? null : (E) => d(t, null, E),
                        realms: n,
                        fnLangHasData: r,
                        fnGetImageHashAndExt: i,
                        partnerEventStore: p,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Nt = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, je.pg)(
              (0, e.jsx)(wn, {
                clanImage: o,
                lang: t,
                fnOnArtworkLangChange: n,
                fnLangHasData: r,
                realms: s,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let o = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((n) => {
                const { clanImage: s, lang: r } = n;
                let i = (0, c.we)("#Language_" + (0, U.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: K().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            i,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, r),
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + n.clanImage.imageid + "_" + r,
                  ),
                );
              }),
              o
            );
          }
          render() {
            const { list: o } = this.props;
            if (!o || o.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: pe().UploadSuccess,
              children: t,
            });
          }
        };
        Ln([Re.oI], Nt.prototype, "ShowLangChangeDialog", 1),
          (Nt = Ln([ge.PA], Nt));
        var Ra = a(6658);
        function ka(o) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: d,
              fnLangHasData: h,
              closeModal: u,
              fnSetImageURL: p,
              partnerEventStore: f,
            } = o,
            [x, j] = (0, m.useState)(!1),
            C = (0, Tt.zO)(t, d),
            R = t.GetAccountID(),
            [k] = (0, W.q3)(() => [
              C.GetFilesToUpload().length - C.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            j(!1),
              z.ClearImageGroup(),
              i?.forEach((O, J) => {
                const de = Ge.b.InitFromClanID(R);
                if (z.GetAllLocalizedGroupImages().length == 0) {
                  const se = O && he.zU.GetHashFromHashAndExt(O),
                    ue = se && be.pU.GetClanImageByImageHash(de, se);
                  ue && z.SetPrimaryImageForImageGroup(ue, d);
                }
                z.SetLocalizedImageGroupAtLang(J, de, O ?? null);
              }),
              j(!0);
          }, [i, R, d]);
          const P = (0, m.useCallback)(
              (O, J, de = U.Bhc) => {
                const se = Ge.b.InitFromClanID(R),
                  ue = he.zU.GetHashAndExt(J ?? null);
                if (z.GetAllLocalizedGroupImages().length == 0) {
                  const Le = ue && he.zU.GetHashFromHashAndExt(ue),
                    le = Le && be.pU.GetClanImageByImageHash(se, Le);
                  le && z.SetPrimaryImageForImageGroup(le, O);
                }
                z.SetLocalizedImageGroupAtLang(de, se, ue);
              },
              [R],
            ),
            E = (0, m.useCallback)((O, J) => {
              const se = z.GetLocalizedImageGroupForEdit()?.localized_images[J];
              return se && se.split("/").pop();
            }, []),
            H = () => {
              const O = z.GetLocalizedImageGroupForEdit();
              for (let J = U.Bhc; J < U.bP9; ++J) {
                const de = O?.localized_images[J];
                if (de) {
                  const se = de.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: hn(se),
                      clanAccountID: R,
                      file_type: (0, Ra.yh)(se) ?? we.bg.w3,
                      imageid: 0,
                    },
                    J,
                  );
                } else p(d, null, J);
              }
              z.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(me.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, w.A)(Rt.NotTooWideModal, Rt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: k > 0,
            onOK: H,
            strOKButtonText:
              k > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              x
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(oa, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: P,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: C,
                      }),
                      (0, e.jsx)(Ma, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => z.ClearImageGroup(),
                        fnSetImageURL: P,
                        fnGetImageHashAndExt: E,
                        fnLangHasData: h,
                        partnerEventStore: f,
                      }),
                    ],
                  })
                : (0, e.jsx)(Ce.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function Na(o) {
          const { setting: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(ee.m, {
                strDropDownClassName: B.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "no-repeat",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Fa = a(94381);
        function za(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = ut(),
            [d, h] = (0, m.useState)(() => n),
            [u, p, f, x, j, C, R, k] = (0, W.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [P] = (0, m.useState)(() => Ha(d.localized_background_art ?? {}));
          return (0, e.jsxs)(ka, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: en.O3,
            artworkType: "localized_background_art",
            realms: R,
            loc_images: P,
            fnLangHasData: (E) => !!P[E],
            fnGetImageHash: (E, H) => P[H],
            fnSetImageURL: async (E, H, O) => {
              h((J) => {
                const de = { ...J.localized_background_art },
                  se = he.zU.GetHashAndExt(H);
                return (
                  se ? (de[(0, U.LgB)(O)] = se) : delete de[(0, U.LgB)(O)],
                  { ...J, localized_background_art: de }
                );
              });
            },
            onOK: () => {
              h((E) => (s(E), t && setTimeout(t, 1), { ...E }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Be().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Be().ImageOptions,
                    children: [
                      (0, e.jsx)(Na, {
                        setting: u,
                        fnUpdateSetting: (E) => {
                          h(
                            E !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: E,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: E },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(Wa, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (E) => h({ ...d, scaling_setting: E }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(Va, {
                          position_settings: C,
                          fnUpdateSetting: (E) =>
                            h({ ...d, position_setting: E }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Be().ColorOptions,
                    children: [
                      (0, e.jsx)(ee.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Gt().ColorCtn,
                        children: [
                          (0, e.jsx)(ee.$n, {
                            style: { backgroundColor: f },
                            onClick: (E) =>
                              i(E, {
                                color: f ?? "",
                                onChange: (H) =>
                                  h({ ...d, background_color1: H }),
                              }),
                            children: (0, c.we)(
                              f === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(ee.$n, {
                            onClick: () =>
                              h({ ...d, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Be().SwapColorsCtn,
                        children: (0, e.jsx)(ee.$n, {
                          onClick: () =>
                            h({
                              ...d,
                              background_color1: x,
                              background_color2: f,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      j !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Gt().ColorCtn,
                          children: [
                            (0, e.jsx)(ee.$n, {
                              style: { backgroundColor: x },
                              onClick: (E) =>
                                i(E, {
                                  color: x ?? "",
                                  onChange: (H) =>
                                    h({ ...d, background_color2: H }),
                                }),
                              children: (0, c.we)(
                                x === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(ee.$n, {
                              onClick: () =>
                                h({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Ka, {
                        gradient: j ?? "top-to-bottom",
                        fnUpdateSetting: (E) =>
                          h({ ...d, gradient_setting: E }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)($t, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Fa.S, {
                  checked: !!k,
                  onChange: (E) => {
                    d.randomize_section_order = E;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Ha(o) {
          const t = it.$Y([], U.bP9, null);
          for (const n in o) {
            const s = (0, U.sfN)(n);
            s != U.xPp && (t[s] = o[n]);
          }
          return t;
        }
        function Wa(o) {
          const {
              scaling_setting: t,
              fnUpdateSetting: n,
              label: s,
              disable: r,
            } = o,
            i = m.useMemo(() => {
              const d = [];
              return (
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                d
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(ee.m, {
                strDropDownClassName: B.DropDownScroll,
                disabled: r,
                rgOptions: i,
                selectedOption: t || "cover",
                onChange: (d) => n(d.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Ka(o) {
          const { gradient: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(ee.m, {
                strDropDownClassName: B.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "top-to-bottom",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Va(o) {
          const { position_settings: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(ee.m, {
                strDropDownClassName: B.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "unset",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Ya(o) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = o,
            [i, d] = (0, m.useState)(t.BIsBackgroundImageEnabled()),
            [h, u, p] = (0, Re.uD)(),
            f = (0, W.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, w.A)(Be().Ctn, r && B.ValveOnlyBackground),
            children: (0, e.jsxs)(F.tH, {
              children: [
                (0, e.jsx)(ee.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (x) => {
                    d(x), t.SetBackgroundImageEnabled(x);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(ee.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)(ee.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: f,
                          onChange: (x) =>
                            t.SetSalePageLastCoverSectionUntilEnd(x),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(ee.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(me.EN, {
                          active: h,
                          children: (0, e.jsx)(me.o0, {
                            strTitle: (0, c.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, c.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), d(!1);
                            },
                            closeModal: p,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${St.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const fn = m.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: h,
              nTabIndex: u,
            } = t,
            p = (0, Ue.E)(),
            [f, x, j, C] = (0, W.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            R = j && i + 1 === C,
            [k, P, E] = (0, Re.uD)(),
            [H, O, J] = (0, Re.uD)();
          let de;
          f?.nUniqueIDNextSaleSection &&
            (de = (0, dt.h_)(
              V.HY,
              r.GetSaleSectionByID(f?.nUniqueIDNextSaleSection),
              p,
              h,
              f.nSaleSectionLastIndex + 1,
            ));
          let se;
          if (f && x?.length > 1) {
            const ue = x[x.length - 1];
            se = (0, dt.h_)(
              V.HY,
              r?.GetSaleSectionByID(ue),
              p,
              h,
              f.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(qt.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              u != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              i + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: n,
              children: [
                (0, e.jsx)(ee.$n, {
                  onClick: P,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(me.EN, {
                  active: k,
                  children: (0, e.jsx)(za, {
                    imgGroup: d,
                    closeModal: E,
                    eventModel: h,
                    fnUpdateImageGroup: (ue) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, ue)
                        : r.SetSalePageBackgroundGroup(i, ue),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Be().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    x.map((ue) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, dt.h_)(
                            V.W3,
                            r.GetSaleSectionByID(ue),
                            p,
                            h,
                            r.GetSaleSectionIndexByID(ue, !0),
                          ),
                        },
                        "li_" + ue,
                      ),
                    ),
                    !!R &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!se &&
                  (0, e.jsx)(ee.$n, {
                    onClick: () =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, {
                            ...d,
                            num_sections: d.num_sections - 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...d,
                            num_sections: d.num_sections - 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Reduce", se),
                  }),
                !!de &&
                  (0, e.jsx)(ee.$n, {
                    onClick: () =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, {
                            ...d,
                            num_sections: d.num_sections + 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...d,
                            num_sections: d.num_sections + 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Extend", de),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(ee.$n, {
                        onClick: O,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(me.EN, {
                        active: H,
                        children: (0, e.jsx)(me.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            u != null
                              ? r.RemoveTabBackgroundGroup(u, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: J,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Za(o) {
          const { backgroundImageEditModel: t, nTabID: n } = o;
          return (0, e.jsx)("div", {
            className: Be().CtnEditor,
            children: (0, e.jsx)(ee.$n, {
              onClick: (s) =>
                n !== void 0 && n >= 0
                  ? t?.AddTabBackgroundGroup(n)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, c.we)(
                n !== void 0 && n >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Qa(o) {
          const {
              nTabID: t,
              nSectionUniqueID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i = s.mapFirstSectionToGroup.get(n);
          return n == s.nFirstSaleSectionIDWithoutGroup ||
            n == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Za, { backgroundImageEditModel: r, nTabID: t })
            : i
              ? (0, e.jsx)(Ja, { ...o, groupID: i })
              : null;
        }
        function Ja(o) {
          const {
              groupID: t,
              nTabID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i =
              n && n >= 0
                ? s.selectedTabBackgroundDef.groups
                : r.GetSalePageGroupDefinition().groups,
            d = i.findIndex((k) => k.background_id === t),
            h = i[d],
            [u, p] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const k = (0, je.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(fn, {
                  backgroundImageEditModel: r,
                  groupIndex: d,
                  imgGroup: h,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              k.then((P) => P.Close());
            };
          }, [u, r, h, d, n, s]);
          const f = (0, W.q3)(() => rt.get(t)),
            [x, j] = (0, m.useState)(null),
            C = m.useCallback((k, P) => {
              j(P);
            }, []),
            R = (0, Re.w6)(C);
          return (0, e.jsxs)("div", {
            className: Be().CtnEditor,
            ref: R,
            children: [
              !!(f && x && x > f) &&
                (0, e.jsx)(ee.$n, {
                  onClick: (k) => p(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(fn, {
                backgroundImageEditModel: r,
                groupIndex: d,
                imgGroup: h,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var Xa = a(81557),
          Pn = a.n(Xa);
        function $a(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const f = (0, je.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Bn, { ...o }),
              }),
              window,
            );
            return () => {
              f.then((x) => x.Close());
            };
          }, [n, o]);
          const r = (0, W.q3)(() => {
              const f = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (f) {
                const x = t.mapGroupToSections.get(f);
                if (x) return rt.get(x?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, m.useState)(null),
            h = m.useCallback((f, x) => {
              d(x);
            }, []),
            u = (0, Re.w6)(h),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, w.A)(Be().CtnEditor, Pn().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)(ee.$n, {
                  onClick: (f) => s(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Bn, { ...o }),
            ],
          });
        }
        function Bn(o) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = o,
            [r, i] = (0, m.useState)(null),
            [d, h, u, p] = (0, W.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(F.tH, {
            children: [
              (0, e.jsx)(ee.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: h,
                onChange: (f) => {
                  if (
                    ((0, Ye.wT)(t, "edit model mising"),
                    (0, Ye.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const x = t.SetTabEnabled(s, f);
                    (0, Ye.wT)(
                      !!x,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(x);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!h &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ee.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (f) => t.SetTabLastCoverSectionUntilEnd(s, f),
                    }),
                    (0, e.jsx)(fn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (u || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: p,
                      nTabIndex: s,
                      classNameHeader: Pn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var vt = a(85692);
        function qa(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = m.useState(!1),
            [i, d] = m.useState(!1);
          m.useEffect(() => {
            vt.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const h = (0, W.q3)(() => vt.TU.Get().GetMouseOverSectionID()),
            u = t && t == h,
            p = () => vt.TU.Get().JumpToSection(t),
            f = m.useRef(null);
          return (
            (0, vt.lM)((x) =>
              t != x ? !1 : (f.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: f,
              className: (0, w.A)({
                [y().SaleSectionLivePreview]: !0,
                [y().Hover]: !!u,
                [y().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => d(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(Fe.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: y().JumpToButton,
                      onClick: p,
                      children: (0, e.jsx)(mt.ffu, {}),
                    }),
                  }),
                n,
              ],
            })
          );
        }
        var eo = a(33691);
        function to(o) {
          const {
              promotionName: t,
              eventModel: n,
              bIsPreview: s,
              language: r,
              backgroundImageEditModel: i,
              addtionalAdminButtons: d,
              bDynamicallyCreatedSale: h,
            } = o,
            [u, p] = m.useState(n?.GetDayIndexFromEventStart()),
            [f, x] = m.useState(null),
            j = (0, W.q3)(() => n.jsondata.sale_header_disable_top_margin),
            [C, R] = m.useState(void 0),
            k = no(n, u, C),
            [P, E] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !f &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, b.yK)() == "community"
            ) {
              const ue = document.getElementsByTagName("HEAD")[0],
                Le = document.createElement("style");
              (Le.innerText = (0, ct.L$)(n.jsondata.sale_custom_css)),
                x(Le),
                ue.appendChild(Le);
            }
            const se = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Ye.wT)(
                se.length <= 1,
                "Must have at most one react_landing_background",
              ),
              se.length >= 1 && (se[0].style.backgroundImage = ""),
              () => {
                f && (f.remove(), x(null));
              }
            );
          }, [n, f, s]);
          const H = n?.jsondata,
            O = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(b.UF.CLANACCOUNTID),
                nAppIDVOD: Number(H?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? H?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  H?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, H, r, t],
            ),
            J = (0, W.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            de = Pt(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: At().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Ce.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const se =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              ue = n.BUsesContentHubForItemSource(),
              Le = n
                .GetSaleSections()
                .some((Ze) => Ze.section_type === "contenthubtitle"),
              le = ue && Le;
            let ie,
              fe = !0;
            se
              ? (ie = 0)
              : n.BUsesContentHubForItemSource()
                ? (ie = 20)
                : n.GetEventType() == U.ajI
                  ? ((ie = 0), (fe = !1))
                  : (ie = n.jsondata.sale_header_offset || 0);
            const Pe = fe && n.jsondata.sale_header_offset === 530,
              ke = !Dt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              ft = s
                ? !P && i?.BIsBackgroundImageEnabled()
                  ? Me.S.EPreviewMode_EditBackground
                  : Me.S.EPreviewMode_Enabled
                : Me.S.EPreviewMode_Disabled,
              It = J || n.GetEventType() != U.ajI,
              tt = ue ? ae.Yo.NoTransform : ae.Yo.NoTransformSparseContent,
              In = (0, w.A)(
                y().SaleOuterContainer,
                j && y().SaleOuterTopMargin,
                Pe && y().SaleNewSizing,
                y()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                se && y().SalePageLogoSet,
                le && y().ContentHub,
              );
            return (0, e.jsx)(F.tH, {
              children: (0, e.jsx)(te.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(V.Cs, {
                  location: s ? V.HY : V.bs,
                  children: (0, e.jsxs)(D, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      ke && (0, e.jsx)(te.Sn, {}),
                      (0, e.jsx)(Q, { eventModel: n }),
                      !!i &&
                        (It || de) &&
                        (0, e.jsx)(Ya, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: P,
                          fnSetBackgroundImgGroupEditMode: E,
                          bShowAsValveOnly: !It,
                        }),
                      (0, e.jsxs)(A.Z, {
                        style: le ? void 0 : { marginTop: `${ie || 0}px` },
                        className: In,
                        scrollIntoViewType: tt,
                        children: [
                          (0, e.jsx)(Ie, { eventModel: n, language: r }),
                          (0, e.jsx)(He, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Wt, {
                            event: n,
                            broadcastEmbedContext: O,
                          }),
                          (0, e.jsx)(oo, {
                            ePreviewMode: ft,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: O,
                            selectedTab: k,
                            tagSelection: C,
                            setTagSelection: R,
                          }),
                          !h &&
                            (0, e.jsx)(Kt, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Ze) => {
                                Ze != u &&
                                  ((n.m_overrideCurrentDay = Ze), p(Ze));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function no(o, t, n) {
          const [s] = (0, Ke.QD)(We.jD, void 0);
          return m.useMemo(() => {
            const i = o
              .GetSaleSectionFirstMatchByType("tabs")
              ?.tabs?.filter((d) => !d.hide);
            if (i && i.length > 0) {
              let d = s > 0 ? i.find((p) => p.unique_id == s) : void 0;
              d || (d = i[0]);
              const h = d === i[0],
                u =
                  o.jsondata.sale_opt_in_page_name ||
                  o.jsondata.prune_list_optin_name;
              return new Ve.y(d, t, h, d.tab_tag_filter ? n : void 0, u);
            }
          }, [o, t, s, n]);
        }
        function Gn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function ao(o) {
          const {
              event: t,
              language: n,
              nSaleDayIndex: s,
              ePreviewMode: r,
              selectedTab: i,
              backgroundImageEditModel: d,
            } = o,
            [h, u] = m.useState((0, We.rp)()),
            p = m.useMemo(() => new yt(), []),
            f = m.useCallback(() => u((0, We.rp)()), []);
          m.useEffect(
            () => (
              window.addEventListener("resize", f),
              () => window.removeEventListener("resize", f)
            ),
            [f],
          ),
            m.useEffect(() => {
              let le = "";
              const ie = () => {
                  const Pe = Gn();
                  if (Pe && Pe != le) {
                    const et = document.getElementById(Pe);
                    et && ((le = Pe), et.scrollIntoView({ block: "start" }));
                  }
                },
                fe = setTimeout(() => ie(), 150);
              return (
                window.addEventListener("hashchange", ie),
                () => {
                  clearTimeout(fe),
                    window.removeEventListener("hashchange", ie);
                }
              );
            }, []);
          const x = (0, Ct.W6)(),
            j = (le, ie) => {
              (0, Ke.ip)(x, { ...(ie || {}), [We.jD]: le.toString() });
            },
            [C, R] = (0, Ke.QD)("controller"),
            [k, P] = (0, W.q3)(() => {
              const le =
                  zt.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ie = t.GetSaleSectionIncludingFooterSections(le);
              return [
                Vt(
                  t.jsondata.sale_background_img_groups,
                  ie,
                  i && i.GetActiveTabUniqueID(),
                ),
                ie,
              ];
            });
          let E = !1;
          const H = new Ve.y(void 0, s),
            O = [{ elements: [], activeTab: H }];
          let J = null;
          const de = (0, b.Qn)(),
            se = (0, vt.ty)(),
            ue = m.useMemo(() => {
              const le = Gn();
              if (!le) return;
              const ie = P.findIndex((fe) => fe.section_anchor === le);
              return ie > -1 ? ie : void 0;
            }, [P]);
          P.forEach((le, ie) => {
            const fe = O[O.length - 1].activeTab;
            if (fe && !fe.ShouldShowSection(le)) return;
            const Pe = Dt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              et = h && !Pe && !t.jsondata.content_hub_restricted_width;
            let ke = (0, Me.I)(le, r, t, n, de);
            if (ke === void 0) return;
            if (!ke)
              if ((0, wt.su)(le) && !b.iA.logged_in)
                E ||
                  ((ke = (0, e.jsx)(wt.CC, {
                    section: le,
                    event: t,
                    language: n,
                  })),
                  (E = !0));
              else {
                const In = le.diable_tab_id_filtering
                  ? new Ve.y(void 0, fe && fe.GetSaleDay())
                  : fe;
                le.section_type == "tabs" &&
                  le.tabs?.some(
                    (Ze) => Ze.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  O.push({ activeTab: i, elements: [] }),
                  (ke = (0, e.jsx)(eo.H, {
                    ...o,
                    section: le,
                    activeTab: In,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: j,
                    expanded: et,
                    controllerCategory: C,
                    setControllerCategory: R,
                  }));
              }
            se &&
              (ke = (0, e.jsx)(qa, { nSectionID: le.unique_id, children: ke }));
            const ft = O && O.length && O[O.length - 1];
            let It = (0, e.jsx)(
              io,
              {
                section: le,
                nActiveTabID:
                  ft && ft.activeTab && ft.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ie,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: k,
                backgroundImageEditModel: d,
                bExpanded: et,
                children: (0, e.jsx)(Lt._, {
                  enabled: !ue || ie > ue,
                  children: ke,
                }),
              },
              "SaleSectionIndex_" + le.unique_id + "_" + ie,
            );
            const tt = k.mapSectionToGroup.get(le.unique_id);
            J &&
              J.groupID != tt &&
              (O[O.length - 1].elements.push(
                lt(t, J, r, i && i?.GetActiveTabUniqueID()),
              ),
              (J = null)),
              tt
                ? (J ||
                    (J = {
                      groupID: tt,
                      elSaleSections: [],
                      derivedGroupInfo: k.mapGroupToSections.get(tt),
                    }),
                  J.elSaleSections.push(It))
                : O[O.length - 1].elements.push(It);
          }),
            J &&
              (O[O.length - 1].elements.push(
                lt(t, J, r, i && i?.GetActiveTabUniqueID()),
              ),
              (J = null));
          const Le = O.map((le, ie) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, w.A)(
                  y().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: le.elements,
              },
              "TabSection_" + ie,
            ),
          );
          return (0, e.jsx)(A.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Le,
          });
        }
        const oo = (0, Ct.y)(ao);
        function so(o) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = o;
          return t && n != null
            ? (0, e.jsx)(ro, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function ro(o) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: n,
              children: s,
            } = o,
            r = (0, Ht.OM)(n);
          return (t == "hide_when_open_door_index" && r) ||
            (t == "show_when_open_door_index" && !r)
            ? null
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function Tn({ children: o, onChange: t }) {
          const n = m.useRef(null);
          return (
            (0, m.useEffect)(() => {
              t(!!m.Children.toArray(o).filter(Boolean).length);
            }, [o, t]),
            o
          );
        }
        function io(o) {
          const {
              section: t,
              saleSectionIndex: n,
              nActiveTabID: s,
              ePreviewMode: r,
              salePageBackgroundDerivedConfig: i,
              backgroundImageEditModel: d,
              bExpanded: h,
              children: u,
            } = o,
            p = t.section_anchor
              ? t.section_anchor
              : We.mj + (t.unique_id || n),
            f = t.section_type != "tabs",
            [x, j] = (0, m.useState)(!0);
          return x
            ? (0, e.jsx)(F.tH, {
                children: (0, e.jsx)(so, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: f
                    ? (0, e.jsx)(A.Z, {
                        navKey: p,
                        id: p,
                        className: (0, w.A)({
                          [y().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [y().SaleSectionBackgroundImageGroupEdit]:
                            r == Me.S.EPreviewMode_EditBackground,
                          [y().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Me.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  u,
                                  (0, e.jsx)(Qa, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: d,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Tn, { onChange: j, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Me.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, w.A)({
                                  [y().SaleSectionCtn]: !0,
                                  [y().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [y().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  u,
                                  (0, e.jsx)($a, {
                                    backgroundImageEditModel: d,
                                    nTabID: s,
                                    imgGroupDerivedMapping: i,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Tn, { onChange: j, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (G, ce, a) => {
        "use strict";
        a.d(ce, { qx: () => B });
        var e = a(7850),
          U = a(16412),
          A = a(18210),
          ae = a(36118),
          te = a(90626),
          V = a(36707),
          X = a(95695),
          $ = a.n(X),
          W = a(25792),
          m = a(64734),
          M = a.n(m),
          F = a(65946),
          oe = a(11243);
        function y(w) {
          const {
              title: b,
              tooltip: re,
              getMinimized: N,
              toggleMinimized: Z,
              className: D,
              children: l,
              elAdditionalButtons: g,
            } = w,
            _ = (0, F.q3)(() => N());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, V.A)(
                  D,
                  m.SectionTitleHeader,
                  m.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, V.A)(
                      X.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [b, !!re && (0, e.jsx)(oe.o, { tooltip: re })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(K, { bIsMinimized: _, fnToggleMinimize: Z }),
                    ],
                  }),
                ],
              }),
              !_ && (0, e.jsx)(W.tH, { children: l }),
            ],
          });
        }
        function B(w) {
          const [b, re] = te.useState(!!w.bStartMinimized);
          return (0, e.jsx)(y, {
            ...w,
            getMinimized: () => b,
            toggleMinimized: () => re(!b),
            children: w.children,
          });
        }
        function K(w) {
          const { bIsMinimized: b, fnToggleMinimize: re } = w,
            N = b ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(U.$n, {
            "data-tooltip-text": (0, A.we)(N),
            onClick: re,
            children: w.bIsMinimized
              ? (0, e.jsx)(ae.hz4, {})
              : (0, e.jsx)(ae.Xjb, {}),
          });
        }
      },
      29462: (G, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => M });
        var e = a(7850),
          U = a(90626),
          A = a(3166),
          ae = a(99412),
          te = a(77495),
          V = a(85599),
          X = a(11811),
          $ = a(179),
          W = a(7582),
          m = a(21042);
        function M(F) {
          const { clanAccountID: oe, gidEvent: y } = F;
          let { eventModel: B, bLoading: K } = (0, te.dB)(oe, y);
          const w = (0, ae.sfN)(A.TS.LANGUAGE),
            [b] = (0, $.QD)("livepreview");
          return (
            b && (B = (0, m.U)(oe, ae.ajI, "creatorhome_fake", (0, W.sB)())),
            U.useEffect(() => {
              if (!K && !B) {
                const re = new URL(window.location.href);
                re.searchParams.set("v1", "1"),
                  window.location.replace(re.toString());
              }
            }, [K, B]),
            B
              ? (0, e.jsx)(X.default, {
                  eventModel: B,
                  promotionName: `creatorhome_${y}`,
                  language: w,
                })
              : (0, e.jsx)(V.t, {})
          );
        }
      },
      17809: (G, ce, a) => {
        "use strict";
        a.d(ce, { d: () => mn });
        var e = a(7850),
          U = a(19367),
          A = a(90626),
          ae = a(3685),
          te = a(85528),
          V = a(77495),
          X = a(18210),
          $ = a(3166),
          W = a(75779),
          m = a(80902),
          M = a(30454);
        async function F() {
          const v = await (0, M.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!v.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return v.counts;
        }
        const oe = 300 * 1e3;
        function y() {
          return ["DeckCompatCounts"];
        }
        function B() {
          return {
            queryKey: y(),
            queryFn: () => F(),
            staleTime: oe,
            retry: !1,
          };
        }
        function K() {
          const { data: v } = (0, m.I)(B());
          return v;
        }
        function w(v, I) {
          switch (I) {
            case W.sd:
              return v?.playable;
            case W.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var b = a(70187),
          re = a(45251),
          N = a(39153),
          Z = a(6878),
          D = a(99412),
          l = a(72609),
          g = a(47610),
          _ = a(18860),
          S = a(41635),
          Q = a(25792),
          L = a(85599),
          q = a(87805);
        const c = A.Fragment;
        function Ie(v) {
          const {
              reservationPackageID: I,
              depositPackageID: T,
              bIsPreview: z,
              psuLessPackageID: Y,
              strOutOfStockOverride: ne,
              strDeliveryOverride: ge,
              bDeliveryOverrideOnlyIfOutOfStock: xe,
              section: we,
            } = v,
            { data: ve } = (0, g.DR)(I),
            { data: ye } = (0, g.DR)(Y),
            Ae = (0, A.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + I,
                  reservation_package: I,
                  deposit_package: T,
                  localized_reservation_desc: (0, S.$Y)([], D.bP9, null),
                  localized_out_of_stock_override: (0, S.$Y)(
                    [ne || null],
                    D.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, S.$Y)(
                    [ge || null],
                    D.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!xe,
                  psu_less_package: Y,
                },
              ],
              [I, T, ne, ge, xe, Y],
            );
          if (!ve || (Y && !ye))
            return (0, e.jsx)(L.t, {
              string: (0, X.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const ze = !l.iA.logged_in || !ve.account_restricted_from_purchasing,
            Ot =
              ve.reservation_state == _.G.k_EPurchaseReservationState_Reserved
                ? ve
                : void 0;
          return (0, e.jsxs)(Q.tH, {
            children: [
              (0, e.jsx)(A.Suspense, {
                fallback: null,
                children: (0, e.jsx)(c, {
                  bIsPreview: !!z,
                  rgReservationDef: Ae,
                }),
              }),
              !!ve.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Ae[0].unique_id,
                  children: [
                    (0, e.jsx)(q.b, {
                      reservationDef: Ae[0],
                      hardwareDetail: ve,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Ot,
                    }),
                    ze &&
                      (0, e.jsx)(q.p, {
                        section: we,
                        reservationDef: Ae[0],
                        hardwareDetail: ve,
                        reservedHardwareDetail: Ot,
                      }),
                    ye &&
                      ye?.allow_purchase_in_country &&
                      (0, e.jsx)(q.b, {
                        reservationDef: Ae[0],
                        hardwareDetail: ye,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function Qe(v) {
          if (v?.bDepositRequired) {
            if (
              v.rgDepositPackageInfo &&
              v.rgDepositPackageInfo?.length > 0 &&
              v.rgDepositPackageInfo.filter((I) => I.bVisible).length == 0 &&
              v?.rgReservationPackageInfo &&
              v?.rgReservationPackageInfo?.length > 0 &&
              v?.rgReservationPackageInfo.filter((I) => I.bVisible).length == 0
            )
              return !1;
          } else if (
            v?.rgReservationPackageInfo &&
            v?.rgReservationPackageInfo?.length > 0 &&
            v?.rgReservationPackageInfo.filter((I) => I.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var Ft = a(21035),
          xt = a(72865),
          at = a(38081),
          ot = a.n(at),
          He = a(36707),
          Te = a(69596),
          zt = a(10026),
          Ct = a.n(zt),
          We = a(19298),
          Dt = a(11996),
          Ht = a(19047),
          st = a(36118),
          Wt = a(47689),
          Et = a(89926),
          Kt = a(32545),
          Ke = a.n(Kt);
        function Ue(v) {
          const { appID: I, classOverride: T, styleOverride: z } = v,
            [Y, ne] = (0, A.useState)(!1),
            ge = (0, Wt.m)("GameHoverFollowButton"),
            { elDialogElement: xe, fnShowLogonDialog: we } = (0, Et.l)(),
            ve = (0, Dt.Fh)(I),
            { mutateAsync: ye } = (0, Ht.L)(I, !ve, void 0),
            Ae = async (ze) => {
              ze.preventDefault(),
                ze.stopPropagation(),
                $.iA.logged_in
                  ? (ne(!0), await ye(), ge.token.reason || ne(!1))
                  : we();
            };
          return (0, e.jsxs)(We.Z, {
            className: (0, He.A)(Ke().FollowButton, T),
            onClick: Ae,
            style: z,
            children: [
              ve ? (0, e.jsx)(st.pPV, {}) : (0, e.jsx)(st.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, He.A)(
                  Ke().FollowButtonText,
                  Y && Ke().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, X.we)(
                  ve ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              xe,
            ],
          });
        }
        function Re(v) {
          const { appid: I, color: T, bgcolor: z } = v,
            Y = (0, xt.n9)();
          return (0, e.jsx)(Ue, {
            appID: I,
            classOverride: (0, He.A)(
              ot().FollowGameButtonNotTop,
              Ct().BBCodeFollowButton,
            ),
            styleOverride: { color: T, backgroundColor: z },
          });
        }
        function St(v) {
          const I = Number(v.args.appid);
          if (!I) return null;
          const T = (0, Te.O)(v.args.color, "black"),
            z = (0, Te.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Re, { appid: I, color: T, bgcolor: z });
        }
        var Je = a(20681),
          rt = a(18657),
          jt = a.n(rt),
          Vt = a(63026);
        function he(v) {
          const { clanAccountID: I, color: T, bgcolor: z } = v;
          (0, Je.mx)();
          const [Y, ne] = A.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, He.A)(jt().BBCodeFollowButton, Y && jt().isHovered),
            onMouseEnter: () => ne(!0),
            onMouseLeave: () => ne(!1),
            children: (0, e.jsx)(Vt.Q, {
              nCreatorAccountID: I,
              classOverride: ot().FollowGameButtonNotTop,
              styleOverride: { color: T, backgroundColor: z },
              followType: "group",
            }),
          });
        }
        function Yt(v) {
          const { event: I } = v.context,
            T = Number(v.args.groupid) || I?.clanSteamID.GetAccountID();
          if (!T) return null;
          const z = (0, Te.O)(v.args.color, "black"),
            Y = (0, Te.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(he, { clanAccountID: T, color: z, bgcolor: Y });
        }
        var bt = a(83482),
          it = a(44267),
          Me = a(9202),
          lt = a.n(Me),
          Zt = a(29522);
        function Qt(v) {
          const { appid: I, color: T, bgcolor: z } = v,
            Y = (0, xt.n9)(),
            ne = (0, Zt.$5)(I),
            ge = (0, bt.L3)(Y);
          return (0, e.jsx)("div", {
            className: lt().WishlistHoverCtn,
            children: (0, e.jsx)(it.E, {
              snr: ge,
              id: ne,
              classOverride: (0, He.A)(
                ot().WishlistButtonNotTop,
                lt().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: T, backgroundColor: z },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function wt(v) {
          const I = Number(v.args.appid);
          if (!I) return null;
          const T = (0, Te.O)(v.args.color, "black"),
            z = (0, Te.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Qt, { appid: I, color: T, bgcolor: z });
        }
        let Ve = null;
        function Jt() {
          return (
            Ve == null &&
              (Ve = new Map([
                ["wishlist", { Constructor: wt, autocloses: !1 }],
                ["followgroup", { Constructor: Yt, autocloses: !1 }],
              ])),
            Ve
          );
        }
        var At = a(37656),
          Ce = a(29868),
          Ne = a(24642);
        function yt(v) {
          return v < 10 ? "0" + v : v;
        }
        function Ye(v) {
          const { giveawayid: I } = v,
            T = (0, At.w)(I),
            {
              bLoadingGiveawayInfo: z,
              winner_count: Y,
              closed: ne,
              seconds_until_drawing: ge,
            } = T;
          return z
            ? null
            : (0, e.jsxs)("div", {
                className: Ce.countdownCtn,
                children: [
                  !!ne &&
                    (0, e.jsx)("div", {
                      className: Ce.Closed,
                      children:
                        Y > 0
                          ? (0, X.we)("#Giveaway_Closed", (0, Ne.D)(Y))
                          : (0, X.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !ne &&
                    (0, e.jsxs)(A.Fragment, {
                      children: [
                        ge <= 0
                          ? (0, e.jsxs)("div", {
                              className: Ce.Throbber,
                              children: [
                                (0, e.jsx)(L.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, X.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Ce.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Ce.CountDownTime,
                                  children:
                                    yt(Math.floor(ge / 60)) + ":" + yt(ge % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Ce.CountDownText,
                                  children: [
                                    (0, X.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, X.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        Y > 0 &&
                          (0, e.jsxs)("div", {
                            className: Ce.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Ce.WinnerCount,
                                children: (0, Ne.D)(Y),
                              }),
                              (0, e.jsx)("div", {
                                className: Ce.WinnerText,
                                children: (0, X.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var ct = a(57646);
        function Lt(v) {
          const I = Number(v.args.packageid);
          return I
            ? (0, e.jsx)(ct.eF, {
                packageID: I,
                display_style: (0, ct._w)(v.args.display),
              })
            : null;
        }
        function Xt(v) {
          const I = Number(v.args.packageid),
            T = Number(v.args.compareid);
          return !I || !T
            ? null
            : (0, e.jsx)(ct.hJ, { packageID: I, compareID: T });
        }
        var Pt = a(88245),
          $t = a(35702),
          ee = a(16412),
          me = a(92757),
          je = a(39256),
          qt = a(4720),
          dt = a(75110),
          en = a(57810),
          gt = a(36631),
          tn = a(33691),
          Bt = a(81416);
        function Fe(v) {
          const { eventModel: I, nEventBadgeID: T } = v,
            z = (0, $t.fy)(T);
          if (z?.level > 0) {
            let Y = z.level;
            if (I?.BHasSaleEnabled()) {
              const ne = I.GetSaleSectionsByType("badge_progress");
              if (ne?.length == 1) {
                const ge = ne[0].badge_progress;
                if (ge?.event_badgeid == T && ge?.granted_by_discovery_queue) {
                  const xe = ge.levels[ge.levels.length - 1].level;
                  return (0, e.jsx)(nn, {
                    eventModel: I,
                    nBadgeLevel: Y,
                    nMaxLevel: xe,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Ne.D)(Y),
            });
          }
          return null;
        }
        function nn(v) {
          const { eventModel: I, nBadgeLevel: T, nMaxLevel: z } = v,
            Y = A.useMemo(() => {
              const ve = I.GetSaleSections().filter(
                (ye) => ye.section_type == "discoveryqueue",
              );
              return ve?.length > 0 ? ve[0] : null;
            }, [I]),
            { storePageFilter: ne, eStoreDiscoveryQueueType: ge } = A.useMemo(
              () => (0, dt.lx)(I, Y),
              [I, Y],
            ),
            xe = (0, en.Uf)(ge, ne),
            we = Math.min(T + xe, z);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Ne.D)(we),
          });
        }
        function Xe(v) {
          const { event: I } = v.context,
            T = Number.parseInt((0, b.j$)(v.args, "eventid"));
          return $.iA.logged_in && T
            ? (0, e.jsx)(Fe, { nEventBadgeID: T, eventModel: I })
            : null;
        }
        function an(v) {
          const { nDoorIndex: I, children: T } = v,
            z = (0, N.OM)(I),
            Y = (0, N.gP)(),
            [ne, ge] = A.useState(!1),
            [xe, we] = A.useState(!1),
            { elDialogElement: ve, fnShowLogonDialog: ye } = (0, Et.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ee.$n, {
                disabled: z,
                onClick: (Ae) => {
                  ne ||
                    ($.iA.logged_in
                      ? (ge(!0),
                        Y({ iDoorIndex: I })
                          .then((ze) => {
                            ze || we(!0), ge(!1);
                          })
                          .catch(() => {
                            we(!0), ge(!1);
                          }))
                      : ye());
                },
                children: xe
                  ? (0, e.jsx)("div", {
                      children: (0, X.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!ne && (0, e.jsx)(L.t, { size: "small" }),
                        !!z && (0, e.jsx)(st.Jlk, {}),
                        T,
                      ],
                    }),
              }),
              ve,
            ],
          });
        }
        function on(v) {
          const I = Number.parseInt((0, b.j$)(v.args)) || 0;
          return I >= 0 && I < 32
            ? (0, e.jsx)(an, { nDoorIndex: I, children: v.children })
            : null;
        }
        const sn = (0, me.y)(tn.H);
        function rn(v) {
          const I = Number.parseInt((0, b.j$)(v.args)),
            { event: T, showErrorInfo: z } = v.context;
          if (I) {
            const Y = T?.jsondata?.sale_sections?.findIndex(
              (ne) => ne.unique_id == I,
            );
            if (Y >= 0) {
              const ne = T.GetDayIndexFromEventStart();
              return (0, e.jsx)(gt.Cs, {
                location: z ? gt.HY : gt.bs,
                children: (0, e.jsx)(sn, {
                  event: T,
                  section: T.jsondata.sale_sections[Y],
                  activeTab: new qt.y(null, ne),
                  language: v.language,
                  nSaleDayIndex: ne,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: z
                    ? Bt.S.EPreviewMode_Enabled
                    : Bt.S.EPreviewMode_Disabled,
                }),
              });
            } else if (z)
              return (0, e.jsxs)("div", {
                className: je.ErrorDiv,
                children: ["Error could not find sale section ", I],
              });
          }
          return null;
        }
        let ut = null;
        function ln() {
          return (
            ut == null &&
              (ut = new Map([
                ...Array.from(Jt().entries()),
                [
                  "itemdef",
                  {
                    Constructor: Be,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: St, autocloses: !1 }],
                ["deckcompatcount", { Constructor: cn, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Gt, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: gn, autocloses: !1 }],
                ["price", { Constructor: Lt, autocloses: !1 }],
                ["pricesavings", { Constructor: Xt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Ge, autocloses: !1 }],
                ["chooseaccount", { Constructor: be, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: Xe, autocloses: !1 }],
                ["optindoorquest", { Constructor: on, autocloses: !1 }],
                ["classname", { Constructor: Mt, autocloses: !1 }],
                ["localize", { Constructor: dn, autocloses: !1 }],
                ["salesection", { Constructor: rn, autocloses: !1 }],
                ["reservationbutton", { Constructor: $e, autocloses: !1 }],
              ])),
            ut
          );
        }
        function Be(v) {
          const { event: I } = v.context,
            T = Number.parseInt((0, b.j$)(v.args, "appid")),
            z = Number.parseInt((0, b.j$)(v.args, "itemdefid")),
            Y = Number.parseInt((0, b.j$)(v.args, "maxquantity")),
            ne = (0, b.j$)(v.args, "calltoaction");
          return !(0, Pt.gS)(T, z, !1) || !I
            ? (0, e.jsx)(L.t, {
                size: "small",
                position: "center",
                string: (0, X.we)("#Loading"),
              })
            : (0, e.jsx)(Ft.f, {
                language: v.language,
                clanAccountID: I.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: T, nItemDefID: z, max_quantity: Y },
                strCallToAction: ne,
              });
        }
        function cn(v) {
          const I = K();
          if (!I) return (0, e.jsx)(L.t, { size: "small" });
          const T = Number.parseInt((0, b.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Ne.D)(Number(w(I, T))) });
        }
        function Gt(v) {
          const I = (0, re.jR)($.iA.accountid, "library");
          if (!I) return (0, e.jsx)(L.t, { size: "small" });
          const T = Number.parseInt((0, b.j$)(v.args));
          let z = I.verifiedList?.length || 0;
          switch (T) {
            case W.sd:
              z = I.playableList?.length || 0;
              break;
            case W.V8:
              z = I.unsupportedList?.length || 0;
              break;
            case W.YX:
              z = I.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Ne.D)(Number(z)) });
        }
        function Ge(v) {
          const I = Number.parseInt((0, b.j$)(v.args)),
            T =
              "hide" in v.args && !!Number.parseInt((0, b.j$)(v.args, "hide"));
          return I >= 0
            ? (0, e.jsx)(Tt, { nDoorIndex: I, bHide: T, children: v.children })
            : null;
        }
        function Tt(v) {
          const { nDoorIndex: I, bHide: T, children: z } = v,
            Y = (0, N.OM)(I);
          return Y == null
            ? null
            : (Y && !T) || (!Y && T)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function be(v) {
          if ($.iA.logged_in) {
            const I = Number.parseInt((0, b.j$)(v.args)),
              T = Number.parseInt((0, b.j$)(v.args, "mod"));
            if (T > 0 && I < T && $.iA.accountid % T == I) return v.children;
          }
          return null;
        }
        function Mt(v) {
          const I = (0, b.j$)(v.args);
          return I?.trim().length > 0
            ? (0, e.jsx)("div", { className: I.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function dn(v) {
          return (0, e.jsx)("span", {
            className: Z.LocalizeBlock,
            children: (0, X.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function gn(v) {
          let I = (0, b.j$)(v.args);
          return I
            ? (0, e.jsx)(Ye, { giveawayid: I })
            : (0, e.jsx)(A.Fragment, {});
        }
        function $e(v) {
          const { showErrorInfo: I, event: T } = v.context,
            z = Number.parseInt((0, b.j$)(v.args)),
            Y = A.useMemo(() => {
              if (T)
                return T.jsondata.sale_sections?.find(
                  (ne) =>
                    ne.section_type == "vo_internal" &&
                    (ne.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      ne.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [T]);
          if (z && Y) {
            const ne = Number.parseInt((0, b.j$)(v.args, "depositpackageid")),
              ge = Number.parseInt((0, b.j$)(v.args, "psulesspackageid")),
              xe = (0, b.j$)(v.args, "out_of_stock_override"),
              we = (0, b.j$)(v.args, "delivery_override"),
              ve = (0, b.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(Ie, {
              section: Y,
              reservationPackageID: z,
              depositPackageID: ne,
              psuLessPackageID: ge,
              strOutOfStockOverride: xe,
              strDeliveryOverride: ve || we,
              bDeliveryOverrideOnlyIfOutOfStock: !!ve,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var Oe = a(71698),
          un = a(94520);
        function mn(v) {
          const { bSalePage: I } = v,
            [T, z] = A.useState(!1);
          return (
            (0, Oe.H)(T, I),
            A.useEffect(() => {
              te.Vw.Init(new ae.D($.TS.WEBAPI_BASE_URL)), V.O3.Init(), z(!0);
            }, []),
            A.useEffect(() => {
              const Y = (0, X.l4)();
              Y && U.locale(Y);
            }, []),
            T
              ? I
                ? (0, e.jsx)(un.d3, { dictionary: ln(), children: v.children })
                : v.children
              : null
          );
        }
      },
      11811: (G, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => w });
        var e = a(7850),
          U = a(71698),
          A = a(90626),
          ae = a(73259),
          te = a(76559),
          V = a(77495),
          X = a(25679),
          $ = a(64641),
          W = a.n($),
          m = a(85599),
          M = a(18210),
          F = a(3166),
          oe = a(17809),
          y = a(85692),
          B = a(41032),
          K = a(51079);
        function w(N) {
          const { eventModel: Z } = N;
          return (0, e.jsx)(oe.d, {
            bSalePage: !0,
            children: (0, e.jsx)(b, { ...N, overrideEventModel: Z }),
          });
        }
        function b(N) {
          const { promotionName: Z, language: D, overrideEventModel: l } = N,
            [g, _] = A.useState(
              l ?? V.O3.GetClanEventFromAnnouncementGID(F.P9.ANNOUNCEMENT_GID),
            );
          A.useEffect(() => {
            if (!l && g?.AnnouncementGID != F.P9.ANNOUNCEMENT_GID) {
              const c = new te.b(F.UF.CLANSTEAMID);
              V.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                c,
                F.P9.ANNOUNCEMENT_GID,
                null,
              ).then(_);
            }
          }, [g, l]);
          const Q = (0, y.D2)() ?? g,
            L = (0, y.ty)();
          if (((0, U.s)(1500), !Q))
            return (0, e.jsx)("div", {
              className: W().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, M.we)("#Loading"),
              }),
            });
          const q =
            (Q.visibility_state !== ae.zv.k_EEventStateVisible &&
              Q.visibility_state !== ae.zv.k_EEventStateUnlisted) ||
            L;
          return (0, e.jsx)(re, {
            eventModel: Q,
            children: (0, e.jsx)(K.oJ, {
              children: (0, e.jsx)(K.Ay, {
                curator_clanid: Q?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(X._, {
                  promotionName: Z,
                  language: D,
                  eventModel: Q,
                  bIsPreview: q,
                }),
              }),
            }),
          });
        }
        function re(N) {
          const { eventModel: Z, children: D } = N,
            l = Z.GetContentHubType() == "adultonly";
          return (0, e.jsx)(B.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: D,
          });
        }
      },
      21895: (G) => {
        G.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (G) => {
        G.exports = {
          Color: "_2Vc3a-PM4tOhJcD72NEq1U",
          IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
          "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
          "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
          "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
          "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
          "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
          "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
          "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
          "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
          "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
          HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
        };
      },
      32545: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      50909: (G) => {
        G.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
          BackgroundAnimation: "_1xc_h6g1jbrfqXQXHDA2eY",
          "ItemFocusAnim-darkerGrey-nocolor": "_32Qiunpe7Bq8tRMP7zANIV",
          "ItemFocusAnim-darkerGrey": "_1jLvKsCp-1NNukUKFcJBiF",
          "ItemFocusAnim-darkGreySettings": "_2oonpIg6GiNC1fFwAuTeY1",
          "ItemFocusAnim-darkGrey": "_25MzDFkbrWeDNWxcpYDDqL",
          "ItemFocusAnim-grey": "_24xCtEhvscRzLJyaNWLeUa",
          "ItemFocusAnim-translucent-white-10": "_191r_XeIDZJjVtYMrw4vZN",
          "ItemFocusAnim-translucent-white-20": "_3PT6d0B4zsV60BfrKuIA1r",
          "ItemFocusAnimBorder-darkGrey": "_1Z9KMCmIY9huHpqwfwRypj",
          "ItemFocusAnim-green": "_1WZWN5W96O7pMURRF2eleh",
          focusAnimation: "_2hRoGMM5UsM8oeV-txHPNu",
          hoverAnimation: "_1YMbPvrOkuzyOJDFmv_N8s",
        };
      },
      71347: (G) => {
        G.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (G) => {
        G.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (G) => {
        G.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (G) => {
        G.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (G) => {
        G.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (G) => {
        G.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (G) => {
        G.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      32190: (G) => {
        G.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (G) => {
        G.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (G) => {
        G.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (G) => {
        G.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (G) => {
        G.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (G) => {
        G.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (G) => {
        G.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (G) => {
        G.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      25359: (G) => {
        G.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (G) => {
        G.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      15496: (G) => {
        G.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      9202: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      64734: (G) => {
        G.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      44894: (G, ce, a) => {
        "use strict";
        a.d(ce, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
