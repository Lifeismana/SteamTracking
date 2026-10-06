/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      94381: (G, de, a) => {
        "use strict";
        a.d(de, { S: () => H });
        var e = a(7850),
          N = a(68031),
          B = a(31857);
        function oe(W) {
          return (0, e.jsx)(B.I, {
            ...W,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var ae = a(21895),
          Y = a(64238),
          $ = a.n(Y),
          te = a(80549);
        function H(W) {
          const {
              checked: se,
              onChange: R,
              disabled: P,
              children: V,
              ref: y,
              variant: S,
              color: Z,
              align: L = "center",
              icon: K,
              ...D
            } = W,
            l = se === "indeterminate",
            g = K ?? (l ? T : oe),
            x = () => {
              P || (R && R(l ? !0 : !se));
            },
            E = (A) => {
              P ||
                (A.key === " " &&
                  (x(), A.preventDefault(), A.stopPropagation()));
            },
            J = (0, te.f)("Checkbox", S);
          return (0, e.jsxs)(N.s, {
            align: L,
            ref: y,
            role: "checkbox",
            "aria-checked": l ? "mixed" : se,
            "data-state": m(se),
            className: $()(ae.Root, ae[`Variant-${J}`], P && ae.Disabled),
            onClick: x,
            tabIndex: 0,
            onKeyDown: E,
            cursor: "default",
            "aria-disabled": P,
            "data-accent-color": Z,
            ...D,
            children: [
              (0, e.jsx)("div", {
                className: ae.Checkbox,
                children: se && (0, e.jsx)(g, { className: ae.Icon }),
              }),
              V,
            ],
          });
        }
        function m(W) {
          return W === "indeterminate" ? W : W ? "checked" : "unchecked";
        }
        function T(W) {
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
      31857: (G, de, a) => {
        "use strict";
        a.d(de, { I: () => Y });
        var e = a(7850),
          N = a(69289),
          B = a(8928),
          oe = a(16619),
          ae = a.n(oe);
        function Y(T) {
          return (0, e.jsx)("svg", { ...H(T) });
        }
        const $ = [
          ...B.L,
          {
            prop: "size",
            responsive: !0,
            className: (T) => oe[`IconSize-${T}`],
          },
          {
            prop: "color",
            className: oe.Color,
            cssProperty: (T) => ["--icon-color", te(T)],
          },
          {
            prop: "hitSlop",
            className: oe.HitSlop,
            cssProperty: (T) => [
              "--hit-slop-custom",
              typeof T == "string" ? T : "",
            ],
          },
          B.h.find(({ prop: T }) => T === "cursor"),
        ];
        function te(T) {
          return !T || T[0] === "#" ? T : (0, N.w7)(T);
        }
        function H(T) {
          const { viewBox: W, ...se } = T,
            P = { className: se.size ? void 0 : oe.IconSizeDefault, ...se };
          return W && (P.viewBox = m(W)), (0, N.mz)(P, $);
        }
        function m(T) {
          if (T)
            return typeof T == "number"
              ? `0 0 ${T} ${T}`
              : typeof T == "string"
                ? T
                : `0 0 ${T.width} ${T.height}`;
        }
      },
      71698: (G, de, a) => {
        "use strict";
        a.d(de, { H: () => oe, s: () => ae });
        var e = a(90626),
          N = a(41623);
        let B = 0;
        function oe(Y, $) {
          (0, e.useEffect)(() => {
            if (!(Y || $))
              return (
                B++,
                () => {
                  --B == 0 && (0, N.s)();
                }
              );
          }, [Y, $]);
        }
        function ae(Y) {
          const [$, te] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const H = window.setTimeout(() => te(!0), Y);
            return () => window.clearTimeout(H);
          }, [Y]),
            oe($);
        }
      },
      85528: (G, de, a) => {
        "use strict";
        a.d(de, { Vw: () => K });
        var e = a(14947),
          N = a(99412),
          B = a(72604),
          oe = a(35038),
          ae = a(67529),
          Y = a(3166);
        class $ {
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
            let x = Y.TS.LANGUAGE,
              E = this.GetTokenList(x),
              J = x != "english" ? this.GetTokenList("english") : null;
            return te(l, E, J, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let x = Y.TS.LANGUAGE,
              E = this.GetTokenList(x),
              J = x != "english" ? this.GetTokenList("english") : null;
            return H(l, E, J, this.m_appid, g);
          }
        }
        function te(D, l, g, x, E) {
          if (!D.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                D,
                "appid",
                x,
                "tokens",
                l,
              ),
              ""
            );
          let J = D;
          D = D.toLowerCase();
          let A = "";
          if (
            (l && l.has(D) && (A = l.get(D)),
            !A && g && g.has(D) && (A = g.get(D)),
            A)
          )
            A = H(A, l, g, x, E);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                x,
                J,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && Y.TS.EUNIVERSE != N.wLO)
          )
            return D;
          return A;
        }
        function H(D, l, g, x, E) {
          let J = /{[A-za-z0-9_%#:]+}/g,
            A = D.match(J);
          if (A)
            for (let q of A) {
              let c = q.slice(1, -1),
                Ie = m(c, E),
                Qe = te(Ie, l, g, x, E);
              if (!Qe) return "";
              D = D.replace(q, Qe);
            }
          return (D = m(D, E)), D;
        }
        function m(D, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            x = D.match(g);
          if (x)
            for (let E of x) {
              let J = E.slice(1, -1).toLowerCase(),
                A = l.get(J);
              A == null
                ? console.log("No rich presence found for", J)
                : (D = D.replace(E, A));
            }
          return D;
        }
        var T = a(72849),
          W = a(71742),
          se = a(8323),
          R = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          V = (D, l, g, x) => {
            for (
              var E = x > 1 ? void 0 : x ? P(l, g) : l, J = D.length - 1, A;
              J >= 0;
              J--
            )
              (A = D[J]) && (E = (x ? A(l, g, E) : A(E)) || E);
            return x && E && R(l, g, E), E;
          };
        function y(D) {
          return useObserver(() => K.GetAppInfo(D));
        }
        function S(D) {
          return useObserver(() => D.map((l) => K.GetAppInfo(l)));
        }
        const Z = 3600 * 24 * 7 * 2;
        class L {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new se.lu();
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
              (0, W.wT)(
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
              ((0, W.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(l))
            ) {
              let g = new ae.by(l);
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
              let x = oe.w.Init(T._z);
              x.Body().set_language((0, N.sfN)(Y.TS.LANGUAGE));
              const E = 50;
              for (; g.length > 0; ) {
                const J = Math.min(E, g.length),
                  A = g.slice(0, J);
                (g = g.slice(J)), x.Body().set_appids(A);
                const q = await T.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  x,
                );
                q.GetEResult() == B.R
                  ? this.OnGetAppsResponse(q)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${q.GetEResult()}, AppIDs:`,
                      A,
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
            for (let x of l.Body().apps()) {
              let E = this.m_mapAppInfo.get(x.appid());
              (0, W.wT)(
                E,
                `Got AppInfo response for unrequested AppID: ${x.appid()}`,
              ),
                E &&
                  ((E = new ae.by(x.appid())),
                  E.DeserializeFromMessage(x),
                  this.m_mapAppInfo.set(x.appid(), E),
                  g.push(E));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const x = new ae.by(g.appid());
              x.DeserializeFromAppOverview(g),
                x.is_initialized && this.m_mapAppInfo.set(g.appid(), x);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((x) => {
                let E = this.m_mapAppInfo.get(x);
                if (E) {
                  E.is_valid || (g = !0);
                  return;
                }
                (E = new ae.by(x)),
                  this.m_mapAppInfo.set(x, E),
                  this.QueueAppInfoRequest(x),
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
            const g = new Date(new Date().getTime() - Z * 1e3),
              x = async (q) => {
                const c = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(q),
                );
                if (!c) return q;
                let Ie = this.m_mapAppInfo.get(q);
                return (
                  (0, W.wT)(
                    Ie,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  Ie
                    ? ((Ie = new ae.by(q)),
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
            let E = l.map((q) => x(q));
            return (await Promise.all(E)).filter((q) => q !== null);
          }
          async SaveAppInfoBatchToLocalCache(l) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                l.map((g) => g.appid),
              );
              for (const g of l) {
                const x = g.SerializeToCacheObject();
                x &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    x,
                  );
              }
            }
          }
          Localize(l, g, x) {
            const E = this.GetRichPresenceLoc(l);
            return E
              ? E.Localize(g, x)
              : Y.TS.EUNIVERSE != N.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${l} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(l) {
            if (this.m_mapRichPresenceLoc.has(l.toString())) {
              let x = this.m_mapRichPresenceLoc.get(l.toString());
              return (
                x.m_nLastUpdated + 1e3 * 60 * ae.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(x),
                x
              );
            }
            let g = new $(l);
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
            for (let x of g) {
              let E = x.language(),
                J = l.m_mapLanguages.get(E);
              J
                ? J.clear()
                : (l.m_mapLanguages.set(E, new Map()),
                  (J = l.m_mapLanguages.get(E)));
              for (let A of x.tokens())
                J?.set(A.name().toLowerCase(), A.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = oe.w.Init(T.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(Y.TS.LANGUAGE),
                      T.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (l.m_fetching = null),
                      g.GetEResult() != B.R
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
        V([e.XI], L.prototype, "OnGetAppsResponse", 1),
          V([e.XI], L.prototype, "OnRichPresenceLocUpdate", 1);
        const K = new L();
      },
      50109: (G, de, a) => {
        "use strict";
        a.d(de, { E: () => se, O: () => W });
        var e = a(14947),
          N = a(65946),
          B = a(99412),
          oe = a(41635),
          ae = a(27066),
          Y = a(3166),
          $ = a(38585),
          te = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          m = (R, P, V, y) => {
            for (
              var S = y > 1 ? void 0 : y ? H(P, V) : P, Z = R.length - 1, L;
              Z >= 0;
              Z--
            )
              (L = R[Z]) && (S = (y ? L(P, V, S) : L(S)) || S);
            return y && S && te(P, V, S), S;
          };
        const T = class xt {
          m_eCurLang = (0, B.sfN)(Y.TS.LANGUAGE);
          m_rgHasData = (0, oe.$Y)([], B.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new $.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(P) {
            return this.m_eCurLang != P
              ? ((this.m_eCurLang = P), this.GetCallback().Dispatch(P), !0)
              : !1;
          }
          SetHasLanguage(P) {
            P.forEach((V, y) => {
              this.m_rgHasData[y] != V && (this.m_rgHasData[y] = V);
            });
          }
          BHasLanguageData(P) {
            return this.m_rgHasData[P];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(P) {
            P != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = P);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              xt.s_globalSingletonStore ||
                (xt.s_globalSingletonStore = new xt()),
              xt.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], T.prototype, "m_eCurLang", 2),
          m([e.sH], T.prototype, "m_rgHasData", 2),
          m([e.sH], T.prototype, "m_bHasLocalizationContext", 2),
          m([ae.o], T.prototype, "GetCurEditLanguage", 1),
          m([ae.o], T.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], T.prototype, "SetHasLanguage", 1),
          m([ae.o], T.prototype, "BHasLanguageData", 1);
        let W = T;
        function se() {
          return (0, N.q3)(() => W.Get().GetCurEditLanguage());
        }
      },
      37656: (G, de, a) => {
        "use strict";
        a.d(de, { w: () => K });
        var e = a(41735),
          N = a.n(e),
          B = a(14947),
          oe = a(65946),
          ae = a(90626),
          Y = a(27066),
          $ = a(8323),
          te = a(30096),
          H = a(3166),
          m = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          W = (D, l, g, x) => {
            for (
              var E = x > 1 ? void 0 : x ? T(l, g) : l, J = D.length - 1, A;
              J >= 0;
              J--
            )
              (A = D[J]) && (E = (x ? A(l, g, E) : A(E)) || E);
            return x && E && m(l, g, E), E;
          };
        const se = class Mn {
          constructor() {
            (0, B.Gn)(this);
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
        W([B.sH], se.prototype, "giveaway_id", 2),
          W([B.sH], se.prototype, "seconds_until_drawing", 2),
          W([B.sH], se.prototype, "rtime_start", 2),
          W([B.sH], se.prototype, "rtime_end", 2),
          W([B.sH], se.prototype, "closed", 2),
          W([B.sH], se.prototype, "winner_count", 2);
        let R = se;
        const P = class nt {
          constructor() {
            (0, B.Gn)(this);
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
                this.m_mapNextDrawChangeCallback.set(l, new $.lu()),
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
            let x = H.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              E = null,
              J = { origin: self.origin };
            return (
              (E = await N().get(x, { params: J })),
              (0, B.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(l) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, new R()),
                  this.CopyToGiveaway(
                    E.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(l),
                  ),
                  g !== void 0)
                ) {
                  const A = this.GetKey(l, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(A) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      A,
                      new R(),
                    ),
                    this.CopyToGiveaway(
                      E.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(A),
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
              let l = (0, H.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new R();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        W([B.sH], P.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          W([B.XI], P.prototype, "CopyToGiveaway", 1);
        let V = P;
        const y = class xn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = xn.s_GlobalInstance),
              (xn.s_GlobalInstance += 1);
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
              let x =
                l.seconds_until_drawing <= 0 && l.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, x);
            }
          }
          SetupCountDown(l, g) {
            l > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        W([Y.o], y.prototype, "ClearRefreshInterval", 1),
          W([Y.o], y.prototype, "ClearCountDown", 1),
          W([Y.o], y.prototype, "SetupRefreshDataInterval", 1),
          W([Y.o], y.prototype, "SetupCountDown", 1);
        let S = y;
        function Z(D, l) {
          const g = V.Get().GetInfoByInstance(D, l.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown();
        }
        function L(D, l) {
          const g = V.Get().GetInfoByInstance(D, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            V.Get()
              .ReloadGiveaway(D, l.m_myInstanceNumber)
              .then((x) => {
                l.SetupCountDown(x.seconds_until_drawing, () => Z(D, l));
              }));
        }
        function K(D) {
          const [l] = (0, ae.useState)(new S()),
            g = (0, te.CH)();
          (0, ae.useEffect)(
            () => (
              V.Get()
                .ReloadGiveaway(D, l.m_myInstanceNumber)
                .then((q) => {
                  l.SetupRefreshDataInterval(q, () => L(D, l)),
                    l.SetupCountDown(q.seconds_until_drawing, () => Z(D, l)),
                    g();
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, D, g],
          );
          const x = V.Get().GetInfoByInstance(D, l.m_myInstanceNumber),
            [E, J, A] = (0, oe.q3)(() => [
              x?.winner_count,
              x?.closed,
              x?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !x || x.giveaway_id == null || !x.BStarted() || E === void 0,
            winner_count: E,
            closed: J,
            seconds_until_drawing: A,
          };
        }
      },
      55436: (G, de, a) => {
        "use strict";
        a.d(de, { r: () => se, z: () => T });
        var e = a(7850),
          N = a(90626),
          B = a(16412),
          oe = a(25792),
          ae = a(96538),
          Y = a(18210),
          $ = a(85599),
          te = a(17618),
          H = a.n(te),
          m = a(53424);
        const T = (R) => {
            const { clanSteamID: P, fnImageSelectCallBack: V } = R,
              [y, S] = (0, N.useState)(""),
              Z = (0, m.mr)(R.clanSteamID.GetAccountID()),
              L = () => R.closeModal && R.closeModal(),
              K = m.pU.GetFilteredClanImages(P, y),
              D = (l) => {
                V(l), L();
              };
            return (0, e.jsx)(oe.tH, {
              children: (0, e.jsx)(ae.x_, {
                onEscKeypress: L,
                children: (0, e.jsxs)(B.UC, {
                  children: [
                    (0, e.jsx)(B.Y9, {
                      children: (0, Y.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(B.nB, {
                      children: (0, e.jsxs)(B.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, Y.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(B.pd, {
                            placeholder: (0, Y.we)("#ClanImageChooser_Search"),
                            value: y,
                            onChange: (l) => S(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: te.ImagesOuterContainer,
                            children: Z
                              ? (0, e.jsx)($.t, {
                                  size: "medium",
                                  string: (0, Y.we)("#Loading"),
                                })
                              : K.length > 0
                                ? K.map((l) =>
                                    (0, e.jsx)(
                                      W,
                                      {
                                        clanImage: l,
                                        searchStringHilight: y,
                                        fnImageClick: D,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : y.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, Y.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, Y.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(B.wi, {
                      children: (0, e.jsx)(B.$n, {
                        onClick: L,
                        children: (0, Y.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          W = (R) => {
            const { clanImage: P, searchStringHilight: V, fnImageClick: y } = R;
            let S = P.file_name ? P.file_name : "",
              Z = se(V, S, String(P.imageid), te.Hilight);
            return (0, e.jsxs)("div", {
              className: te.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: te.Image,
                  style: { backgroundImage: `url( '${P.thumb_url}' )` },
                  onDoubleClick: () => y(P),
                }),
                (0, e.jsx)("div", {
                  className: te.ImageFilename,
                  title: S,
                  children: Z,
                }),
              ],
            });
          };
        function se(R, P, V, y) {
          let S = [];
          if (R.length > 0) {
            let Z = P.toLocaleLowerCase();
            for (let L = 0; L < P.length; ) {
              let K = Z.indexOf(R, L);
              if (K < 0) {
                S.push(
                  (0, e.jsx)(
                    "span",
                    { children: P.substring(L) },
                    V + "_" + String(L),
                  ),
                );
                break;
              } else
                L < K &&
                  S.push(
                    (0, e.jsx)(
                      "span",
                      { children: P.substring(L, K) },
                      V + "_" + String(L),
                    ),
                  ),
                  S.push(
                    (0, e.jsx)(
                      "span",
                      { className: y, children: P.substr(K, R.length) },
                      V + "_" + String(L),
                    ),
                  ),
                  (L = K + R.length);
            }
          } else S.push((0, e.jsx)("span", { children: P }, V + "_null"));
          return S;
        }
      },
      24806: (G, de, a) => {
        "use strict";
        a.d(de, { Ng: () => y });
        var e = a(7850),
          N = a(75844),
          B = a(90626),
          oe = a(99412),
          ae = a(32093),
          Y = a(50109),
          $ = a(95695),
          te = a.n($),
          H = a(36707),
          m = a(18210),
          T = a(92264),
          W = a(30096),
          se = a(71421),
          R = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          V = (L, K, D, l) => {
            for (
              var g = l > 1 ? void 0 : l ? P(K, D) : K, x = L.length - 1, E;
              x >= 0;
              x--
            )
              (E = L[x]) && (g = (l ? E(K, D, g) : E(g)) || g);
            return l && g && R(K, D, g), g;
          };
        let y = class extends B.Component {
          GenerateLanguageOptions() {
            let L = [];
            const {
              fnFilterLanguage: K,
              fnLangHasData: D,
              fnLastUpdateRTime: l,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              L.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: oe.xPp,
                    children: (0, m.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let x = new Array();
            const E = this.props.realms || [ae.TU.k_ESteamRealmGlobal];
            for (const A of m.A0.GetLanguageListForRealms(E)) {
              if (K && !K(A)) continue;
              const q = (0, oe.LgB)(A),
                c = (0, m.we)("#Language_" + q),
                Ie = !!(g && g(A));
              x.push({ eLang: A, sLocName: c, bSupported: Ie });
            }
            x.sort((A, q) =>
              A.bSupported != q.bSupported
                ? A.bSupported
                  ? -1
                  : 1
                : A.sLocName.localeCompare(q.sLocName),
            );
            let J = !1;
            for (const A of x) {
              A.bSupported != J &&
                (L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: te().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        A.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    A.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (J = A.bSupported));
              const q = D && D(A.eLang),
                c = l && l(A.eLang);
              let Ie = A.sLocName;
              c &&
                c !== 0 &&
                ((Ie += " "),
                (Ie += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(c) +
                    " @ " +
                    (0, T.KC)(c, { bForce24HourClock: !1 }),
                ))),
                L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: A.eLang,
                      className: (0, H.A)(
                        { [te().LanguageWithContent]: q },
                        A.bSupported
                          ? te().SupportedLanguage
                          : te().UnsupportedLanguage,
                      ),
                      children: Ie,
                    },
                    "langpicker" + A.eLang + (q ? "_hasdata" : ""),
                  ),
                );
            }
            return L;
          }
          OnLanguageChange(L) {
            const { fnOnLanguageChanged: K, selectedLang: D } = this.props;
            let l = Number.parseInt(L.currentTarget.value);
            l != D && K && K(l);
          }
          render() {
            const { selectedLang: L, bDisabled: K, strTooltip: D } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(se.he, {
              toolTipContent: D,
              children: (0, e.jsx)("select", {
                value: L,
                onChange: this.OnLanguageChange,
                disabled: K,
                children: l,
              }),
            });
          }
        };
        V([W.oI], y.prototype, "OnLanguageChange", 1), (y = V([N.PA], y));
        function S(L) {
          const [K, D] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(y, {
            selectedLang: D,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !K,
            strTooltip: K ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function Z(L) {
          const { fnLangHasData: K } = L;
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
              l[g] = !!(K && K(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(D), [D]),
            jsx(Fragment, {})
          );
        }
      },
      25679: (G, de, a) => {
        "use strict";
        a.d(de, { _: () => to });
        var e = a(7850),
          N = a(99412),
          B = a(19298),
          oe = a(20169),
          ae = a(28604),
          Y = a(36631),
          $ = a(64387);
        function te(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: $.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var H = a(65946),
          m = a(90626),
          T = a(73259),
          W = a(25792),
          se = a(52393),
          R = a.n(se),
          P = a(95695),
          V = a.n(P),
          y = a(36707),
          S = a(3166),
          Z = a(82054),
          L = a(68266);
        function K(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(W.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, y.A)(
                    R().SaleBackground,
                    R()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    R().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !S.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function D(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, L.m0)(t, "sale_header", n),
            [p] = (0, H.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!d) return;
            const C = new Image();
            (C.onload = () => {
              const _ = (100 * C.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", _);
            }),
              (C.src = d);
          }, [d]);
          const u = t.jsondata.sale_sections?.some(
              (C) => C.section_type === "contenthubmaincarousel",
            ),
            h =
              t.jsondata.item_source_type === T.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                u),
            f = d ? `url(${d})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              p
                ? (0, e.jsx)(Z.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: p,
                    styleVariation: Z.g.k_SubMenu,
                  })
                : (0, e.jsx)(te, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, y.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: h,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, y.A)(
                    R()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    R().SaleBackground,
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
                          className: (0, y.A)(
                            V().SalePageBackground,
                            V().BackgroundImage,
                            V().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, y.A)(
                            V().SalePageBackground,
                            V().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: f,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(K, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var l = a(26589),
          g = a(39905),
          x = a(50909),
          E = a.n(x);
        function J(o) {
          const { eventModel: t } = o,
            { data: n } = (0, l.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, S.yK)() == "community"
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
              className: E().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: E().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: E().WarningText,
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
        var A = a(76789),
          q = a.n(A),
          c = a(18210);
        function Ie(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, H.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: q().SalePageLogoCtn,
                  href: S.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(Qe, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, y.A)(q().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(Qe, { ...o }),
                })
            : null;
        }
        function Qe(o) {
          const { eventModel: t, language: n } = o,
            s = (0, L.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Ft = a(72865),
          Ct = a(71347),
          at = a.n(Ct),
          ot = a(53107);
        function He(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, N.sfN)(S.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, y.A)(
                  at().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(Te, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, y.A)(
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
          _t = a(92757),
          We = a(18994),
          St = a(86515),
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
        var Dt = a(85671);
        function Vt(o) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = o;
          return (0, e.jsx)(Dt.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: n,
            addtionalAdminButtons: s,
            bSupportsSticky: !0,
          });
        }
        var Ve = a(179),
          Ne = a(50109),
          ke = a(30096),
          jt = a(98609),
          Je = a(57673);
        const rt = new Map();
        function Et(o, t) {
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
        function Kt(o, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let d,
            p,
            u = 0;
          const { selectedTabBackgroundDef: h, nTabSaleSectionIndex: f } = Et(
            t,
            n,
          );
          if (o?.enabled) {
            const C = o.groups?.length;
            if (
              (o.groups?.forEach((b, _) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const k = new Array();
                for (
                  let w = 0;
                  w < (b?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++w, ++u
                ) {
                  const z = t[u].unique_id;
                  k.push(z),
                    r.set(z, b.background_id),
                    w === 0 && i.set(z, b.background_id);
                }
                if (
                  (s.set(b.background_id, {
                    nBackgroundGroupID: b.background_id,
                    sectionUniqueIDs: k,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (f === void 0 || u < f)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  _ + 1 == C && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let w = u;
                    w < t.length &&
                    (!h || !h.enabled || w < f) &&
                    !(t[w].section_type == "tabs" && h?.enabled);
                    ++w
                  ) {
                    const z = t[w].unique_id;
                    r.set(z, b.background_id);
                  }
              }),
              u < t.length && (f === void 0 || u < f) && (d = t[u].unique_id),
              h?.enabled && f !== void 0)
            ) {
              let b = f;
              const _ = h.groups.length;
              for (
                h.groups.forEach((k, U) => {
                  if (b >= t.length) return;
                  const w = new Array();
                  for (
                    let O = 0;
                    O < k.num_sections && b < t.length;
                    ++O, ++b
                  ) {
                    const X = t[b],
                      ce = X.unique_id;
                    (0, Je.bF)(n, X)
                      ? (w.push(ce),
                        r.set(ce, k.background_id),
                        O === 0 && i.set(ce, k.background_id))
                      : --O;
                  }
                  let j = b;
                  for (; j < t.length && !(0, Je.bF)(n, t[j]); ) j += 1;
                  if (
                    (s.set(k.background_id, {
                      nBackgroundGroupID: k.background_id,
                      sectionUniqueIDs: w,
                      nSaleSectionLastIndex: b - 1,
                      nUniqueIDNextSaleSection:
                        j < t.length ? t[j].unique_id : void 0,
                    }),
                    U + 1 == _ && h.last_group_until_cover_section_until_end)
                  )
                    for (let O = b; O < t.length; ++O) {
                      const X = t[O];
                      if (X.section_type == "tabs" && h?.enabled) break;
                      (0, Je.bF)(n, X) && r.set(X.unique_id, k.background_id);
                    }
                });
                b < t.length && !(0, Je.bF)(n, t[b]);
              )
                b++;
              b < t.length && (p = t[b].unique_id);
            }
          } else t?.length > 0 && (d = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: d,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: h,
            nTabSaleSectionIndex: f,
            nFirstTabSectionIDWithoutGroup: p,
          };
        }
        var pe = a(29630),
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
            i = (0, Ne.E)(),
            d = m.useCallback(
              (_, k) => {
                rt.set(r.nBackgroundGroupID, k);
              },
              [r],
            ),
            p = (0, ke.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const _ = (0, N.LgB)(i),
              k =
                _ in t.localized_background_art
                  ? _
                  : c.A0.GetLanguageFallback(jt.TS.LANGUAGE),
              U = t.localized_background_art[k];
            U && (u = pe.zU.GenerateURLFromHashAndExt(s.clanSteamID, U));
          }
          let h = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              h += "to bottom,";
              break;
            case "left-to-right":
              h += "to right,";
              break;
            case "top-left-to-bottom-right":
              h += "to bottom right,";
              break;
            case "single-color":
              h = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((h += " " + t.background_color1),
              (h += ", " + t.background_color2),
              (h += ")"))
            : (h = null);
          const f =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            C = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            b = {
              backgroundImage: h ? `url(${u}), ${h}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: C ? t.position_setting : void 0,
              backgroundColor: f ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: p,
            style: b,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var yt = a(9807),
          Ke = a(4720),
          Jt = a(64641),
          At = a.n(Jt),
          _e = a(85599);
        function Re(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class wt {
          Keyify = (t) => Re(t);
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
        function Gt(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, l.hM)(n ? o.GetAccountID() : 0);
          return n && Xt(s, t);
        }
        function $t(o) {
          const { clanSteamID: t, id: n } = o;
          return Gt(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, y.A)(
                  o.className,
                  o.requireAdmin
                    ? P.ValveOnlyAdminBackground
                    : P.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var ee = a(16412),
          me = a(96538),
          Ee = a(88003),
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
            p = (0, m.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(g.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const f = (await new window.EyeDropper().open()).sRGBHex,
                  C = on(f);
                d(C), n(C);
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
                  const h = an(u);
                  d(h), n(h);
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
                    onClick: p,
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
              const p = d.current?.ownerDocument ?? document,
                u = (f) => {
                  d.current && !d.current.contains(f.target) && s();
                },
                h = (f) => {
                  f.key === "Escape" && s();
                };
              return (
                p.addEventListener("pointerdown", u, !0),
                p.addEventListener("keydown", h, !0),
                () => {
                  p.removeEventListener("pointerdown", u, !0),
                    p.removeEventListener("keydown", h, !0);
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
          Pt = a.n(cn),
          Pe = a(76559),
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
                S.TS.COMMUNITY_BASE_URL +
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
                N.bP9,
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
                : pe.zU.GenerateURLFromHashAndExt(
                    t,
                    pe.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const n = this.m_curLocImageGroup.primaryImage,
              s = Pe.b.InitFromClanID(n.clanAccountID),
              r = pe.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let p = N.Bhc; p < N.bP9; ++p)
              i.push(On.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, p));
            const d = await Promise.all(i);
            (0, $e.h5)(() => {
              for (let p = N.Bhc; p < N.bP9; ++p)
                d[p] &&
                  (this.m_curLocImageGroup.localized_images[p] =
                    pe.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Oe.wI.full,
                      p,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, n, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? pe.zU.GenerateURLFromHashAndExtAndLang(
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
              const r = Pe.b.InitFromClanID(s.clanAccountID),
                i = pe.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  pe.zU.GenerateURLFromHashAndExtAndLang(
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
              .map((s) => pe.zU.GetHashAndExtFromURL(s));
          }
        };
        v([$e.sH], I.prototype, "m_curLocImageGroup", 2);
        let M = I;
        const F = new M();
        var Q = a(38410),
          ne = a(34592),
          ge = a(75844),
          Ce = a(32093),
          ye = a(72849),
          ve = a(64),
          we = a(72739),
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
            we.createPortal(
              (0, e.jsx)("form", {
                onSubmit: Cn,
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
            d = t ? Cn : void 0,
            p = m.useCallback(
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
              onDrop: p,
            },
            t,
          ];
        }
        async function Nn(o, t = 1e3) {
          return await new Promise((n, s) => {
            const r = new Image();
            (r.src = o),
              (r.onload = () => n("success")),
              (r.onerror = () => n("error")),
              t > 0 && window.setTimeout(() => n("timeout"), t);
          });
        }
        function Cn(o) {
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
        var kn = a(71647),
          qe = a.n(kn);
        function Un(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Ot(t),
            [p, u] = ze(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, y.A)(
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
                  p,
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
          Rn = a(21254),
          Fn = a(27344),
          Se = a.n(Fn),
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
            [p, u] = (0, H.q3)(() => [
              t.GetUploadImages(),
              Ne.O.Get().GetCurEditLanguage(),
            ]),
            h = m.useCallback(
              async (b) => {
                let _ = Array.from(b),
                  k = !0;
                for (let U = 0; U < _.length; U++) {
                  const w = _[U],
                    { language: j } = (0, Q.jj)(w?.name, u);
                  try {
                    const z = (0, Q.PD)(j, u, d);
                    (k = await t.AddImageForLanguage(w, z)),
                      k ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            U +
                            " file=" +
                            w.name,
                        ),
                        (0, Ee.pg)(
                          (0, e.jsx)(me.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              w.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (z) {
                    let O = (0, ne.H)(z);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + O.strErrorMsg,
                      O,
                    ),
                      (0, Ee.pg)(
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
                return k;
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
          (0, H.q3)(() =>
            p.map((b) => ({ a: b.GetCurrentImageOption(), b: b.language })),
          );
          const C = async () => {
            const b = await t.UploadAllImages(r);
            n?.(b);
          };
          return (0, e.jsxs)(Un, {
            onDropFiles: h,
            elAdditonalButtons: f,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Se().UploadPreviewCtn,
                  children: p.map((b) =>
                    (0, e.jsx)(
                      _n,
                      {
                        asset: b,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(b),
                        languageRealms: d,
                      },
                      "arttabupload_" + b.filename + "_" + b.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Wn, { imageUploader: t, fnOnUploadImageRequested: C }),
            ],
          });
        }
        function Wn(o) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = o,
            [s] = (0, H.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Se().UploadPreviewButtonsCtn,
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
                  _n,
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
        const _n = (0, ge.PA)(Vn);
        function Vn(o) {
          const t = (_) => {
              if (_ instanceof ve.M7) {
                _.ResetImage();
                const k = window,
                  U = (0, e.jsx)(Rn.q, {
                    ownerWin: k,
                    uploadFile: _,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || ye.bg.dU,
                  });
                (0, Ee.HT)(U, k, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  _.fileType,
                  JSON.stringify(_.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((_) => {
              let k = _?.fnGetLabelText(),
                U;
              _.bEnforceDimensions && (k += ` - ${_.width}x${_.height}`),
                _.bDeprecated &&
                  ((k += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (U = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let w;
              return (
                (n.BIsOriginalMinimumDimensions(_) &&
                  n.FileTypeMatchesImageTypes(_)) ||
                  (w = Se().ImageDimensionTooSmall),
                { label: k, data: _, strOptionClass: w, tooltip: U }
              );
            }).filter((_) => !_.data.bHiddenFromDropdown),
            d = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            p = n.BSupportsLanguages()
              ? Zn(
                  c.A0.GetLanguageListForRealms(
                    r ?? [Ce.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            h = n.status == "pending";
          let f = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (f = (0, c.we)("#ImageUpload_NeedsCrop"))
              : u.error && (f = (0, c.we)("#ImageUpload_Invalid")));
          let C;
          const b = n.GetCurrentImageOption();
          return (
            b && (C = i?.find((_) => _.data.sKey == b.sKey)?.data),
            C || (C = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Se().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Se().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(mt.sED, {}),
                }),
                (0, e.jsx)(Kn, { asset: n }),
                p &&
                  (0, e.jsx)(ee.m, {
                    strDropDownClassName: V().DropDownScroll,
                    rgOptions: p,
                    selectedOption: n.language,
                    onChange: (_) => (n.language = _.data),
                    disabled: !h,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(ee.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: C,
                    onChange: (_) => n.SetCurrentImageOption(_.data),
                    disabled: !h,
                  }),
                h &&
                  u.warnings?.map((_, k) =>
                    (0, e.jsx)(
                      "div",
                      { className: Se().UploadPreviewWarning, children: _ },
                      `warning${k}`,
                    ),
                  ),
                h &&
                  u.messages?.map((_, k) =>
                    (0, e.jsx)(
                      "div",
                      { className: Se().UploadPreviewMessage, children: _ },
                      `message${k}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, y.A)({
                    [V().FlexColumnContainer]: !0,
                    [Se().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    f,
                    (0, zn.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: At().FlexCenter,
                        children: (0, e.jsx)(_e.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Se().UploadPreviewError,
                  children: n.message,
                }),
                h &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: Se().UploadPreviewError,
                    children: u.error,
                  }),
                h &&
                  u.needsCrop &&
                  (0, e.jsx)(ee.jn, {
                    onClick: () => t(n),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Kn(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Se().PreviewImgCtn,
                onClick: (n) =>
                  (0, Ee.pg)((0, e.jsx)(Yn, { asset: t }), (0, Ae.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Se().PreviewImgInfo,
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
                className: Se().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Se().PreviewImgInfo,
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
            if (s == N.X51) continue;
            const r = (0, c.we)("#Language_" + (0, N.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Nt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Nt || {});
        function Sn(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function go(o, t, n) {
          let s = "";
          const r = Sn(t);
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
            const i = Sn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var Qn = a(55436),
          Jn = a(53732),
          De = a.n(Jn),
          Dn = a(49460);
        function Xn(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, m.useRef)(null);
          return (0, e.jsx)("div", {
            className: Dn.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: Dn.SearchInput,
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
            InternalOpenLocalizeImageGroup: p,
          } = t;
          return (0, e.jsx)(jn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (u, h) =>
              u.map((f) =>
                (0, e.jsx)(
                  qn,
                  {
                    clanImage: f,
                    searchStringHilight: h,
                    imageInsertCallBack: r,
                    showImageActions: d,
                    fnOnOpenLocalizedImageGroup: p,
                    OnImageClick: i,
                  },
                  f.imageid,
                ),
              ),
          });
        });
        function jn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, be.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = be.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const p = Pe.b.InitFromClanID(t);
            let u = be.pU.GetLoadState(p);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: De().ResultNotification,
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
                      className: De().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: De().ResultNotification,
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
          return jsx(jn, {
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
            [p, u] = m.useState(!1),
            h = () => s(t, Nt.k_eInsertFullImage),
            f = () => s(t, Nt.k_eInsertVideo),
            C = () => s(t, Nt.k_eInsertThumbnail),
            b = (ie) => {
              t.url &&
                (ie.dataTransfer.setData("text", t.url),
                be.pU.GetClanImageDragListener().forEach((fe) => {
                  let Ge = Pe.b.InitFromClanID(t.clanAccountID);
                  fe(Ge, !0);
                }));
            },
            _ = (ie) => {
              t.url &&
                be.pU.GetClanImageDragListener().forEach((fe) => {
                  let Ge = Pe.b.InitFromClanID(t.clanAccountID);
                  fe(Ge, !1);
                });
            },
            k = (ie) => {
              (0, Ee.pg)(
                (0, e.jsx)(me.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: w,
                  onCancel: j,
                  closeModal: j,
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
            U = (ie) => {
              console.log("ClanImageWrapper on delete error: " + ie),
                (0, Ee.pg)(
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
            w = () => {
              u(!0);
              let ie = Pe.b.InitFromClanID(t.clanAccountID);
              be.pU
                .DeleteClanImage(ie, t)
                .then((fe) => {
                  fe.success != Mt.R && U((0, ne.H)(fe).strErrorMsg), u(!1);
                })
                .catch((fe) => {
                  U((0, ne.H)(fe).strErrorMsg), u(!1);
                }),
                j();
            },
            j = () => {},
            z = () => {
              r && r(t);
            },
            O = t.file_name ? t.file_name : "",
            X = (0, Qn.r)(n, O, String(t.imageid), De().Hilight),
            ce = pe.zU.BIsClanImageVideo(t),
            re = i && !p && !ce,
            ue = i && !p && !ce,
            Le = i && !p && ce,
            le = i && !p && !ce;
          return (0, e.jsx)(Lt.K, {
            placeholderHeight: "100vh",
            className: De().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: De().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: De().ImageWrapper,
                  style: {
                    backgroundImage: ce ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: b,
                  onDragEnd: _,
                  onDoubleClick: h,
                  onClick: z,
                  children: (0, e.jsx)(En, {
                    clanImage: t,
                    className: De().VideoBackground,
                  }),
                }),
                re &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: h,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                p &&
                  (0, e.jsx)(_e.t, {
                    size: "medium",
                    className: De().FloatingThrobber,
                  }),
                ue &&
                  (0, e.jsx)("span", {
                    className: De().Thumb,
                    onClick: C,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                le &&
                  d &&
                  (0, e.jsx)(ea, {
                    bDeleting: p,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Le &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: f,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !p &&
                  (0, e.jsx)("span", {
                    className: De().Delete,
                    onClick: k,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: De().ImageWrapperFilename,
                  title: O,
                  children: X,
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
                className: (0, y.A)(De().Localized, V().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function En(o) {
          const { clanImage: t, className: n } = o;
          return pe.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == ye.bg.nn ? "mp4" : "webm"),
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
                  ? jsx(En, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function na(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = m.useCallback(
              (p, u) => {
                s?.(p, u), n?.();
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
                  (0, Ee.pg)(
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
            [p] = (0, H.q3)(() => [Ne.O.Get().GetCurEditLanguage()]),
            u = (0, Tt.zO)(t, n, s),
            h = o.uploaderOverride || u,
            [f, C] = m.useState(!1),
            b = m.useCallback(
              async (U, w) => {
                if (!f) {
                  C(!0);
                  try {
                    const { language: j } = (0, Q.jj)(U.file_name ?? "", p),
                      z = (0, Q.PD)(j, p, d);
                    await h.AddExistingClanImage(U, z);
                  } catch (j) {
                    let z = (0, ne.H)(j);
                    console.error("AddExistingClanImage: " + z.strErrorMsg, z),
                      (0, Ee.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            z.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  C(!1);
                }
              },
              [f, h, p, d],
            ),
            _ = m.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          aa,
                          { clanSteamID: t, OnClanImageSelected: b },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [b, r, t],
            ),
            k = (U) => {
              for (const w of U) {
                const j = w.uploadResult;
                if (j?.origimagehash) {
                  const z = (0, Q.PD)(j.language, p, d);
                  F.AddLocalizeImageUploaded(j.origimagehash, z);
                } else {
                  const z = be.pU.GetClanImageByImageHash(
                      t,
                      j?.image_hash ?? "",
                    ),
                    O = w.image.GetCurrentImageOption();
                  if (z && O) {
                    const X = (0, Q.PD)(w.image.language, p, d);
                    i(O.artworkType, z, X);
                  }
                }
              }
            };
          return (0, e.jsx)(Hn, {
            ...o,
            imageUploader: h,
            rgRealmList: d,
            elAdditonalButtons: f
              ? [
                  (0, e.jsx)(
                    _e.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : _,
            fnUploadComplete: k,
          });
        }
        var pt = a(25279),
          bn = a(84676),
          sa = a(25359),
          he = a.n(sa),
          ra = a(24806);
        function yn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [p, u] = (0, m.useState)(s),
            h = Pe.b.InitFromClanID(t.clanAccountID),
            f = (0, H.q3)(() =>
              pe.zU.GenerateURLFromHashAndExt(h, pe.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(me.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, p),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, y.A)(V().FlexColumnContainer, he().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: he().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: he().ArtworkPreview,
                    src: f,
                  }),
                }),
                (0, e.jsx)(ra.Ng, {
                  selectedLang: p,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var kt = a(56330);
        function pn(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var ia = a(58483),
          la = a(82385),
          ca = a(94520),
          da = a(95174),
          ga = a(9709),
          hn = a(64868),
          ua = a(44894);
        const ma =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var pa = a(11243);
        function ha(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, be.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let h = new Array();
              const f = c.A0.GetLanguageListForRealms([
                Ce.TU.k_ESteamRealmGlobal,
                Ce.TU.k_ESteamRealmChina,
              ]);
              for (const C of f) {
                const b = n(C);
                if (b) {
                  const _ = (0, N.LgB)(C),
                    k = (0, c.we)("#Language_" + _);
                  h.push({ lang: C, strLang: _, locLang: k, imgHash: b });
                }
              }
              return (
                (h = h.sort((C, b) =>
                  C.locLang > b.locLang ? 1 : C.locLang < b.locLang ? -1 : 0,
                )),
                h
              );
            }, [n]),
            [d, p, u] = (0, hn.uD)();
          return (0, e.jsxs)("div", {
            className: he().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: he().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: he().LanguageListContainer,
                children: i.map((h) =>
                  (0, e.jsx)(
                    va,
                    { langData: h, ...o },
                    "lang_select_" + t.GetAccountID() + " " + h.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)(ee.$n, {
                  onClick: p,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(pa.o, {
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
                    for (let h = 0; h < N.bP9; h++) s && r && s(h) && r(h);
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
            [p, u] = (0, H.q3)(() => {
              const h = be.pU.GetClanImageByImageHash(t, n.imgHash);
              let f = "";
              h &&
                (f = pe.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  pe.zU.GetHashAndExt(h),
                  Oe.wI.full,
                  n.lang,
                ));
              let C = he().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (C = n.imgHash
                    ? he().LanguageSelector
                    : he().LanguageSelectorNoData),
                [f, C]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: he().LanguageContainer,
            onClick: (h) => {
              let f = (0, N.sfN)(h.currentTarget.id);
              r(f);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: he().LanguageOptions,
                children: [
                  !!p &&
                    (0, e.jsx)("a", {
                      href: p,
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
            [p, u, h] = (0, hn.uD)(),
            f = (0, H.q3)(() => {
              const C = r(n.lang);
              return (
                (0, Ye.wT)(
                  !C || !C.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + C,
                ),
                be.pU.GetClanImageByImageHash(t, C)
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
              (0, e.jsx)(W.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: p,
                  children: (0, e.jsx)(yn, {
                    clanImage: f,
                    lang: n.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: i,
                    realms: d,
                    closeModal: h,
                  }),
                }),
              }),
            ],
          });
        }
        function Ia(o) {
          const { fnOnRemoveImage: t, langData: n } = o,
            [s, r, i] = (0, hn.uD)();
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
              (0, e.jsx)(W.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: s,
                  children: (0, e.jsx)(me.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, N.LgB)(n.lang)),
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
          xa = a(21659),
          Ca = a(15496),
          je = a.n(Ca),
          _a = a(88812);
        function Sa(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            p = (0, xa.c5)(),
            u = m.useCallback(
              (j) => {
                j.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            h = d || (0, N.sfN)(S.TS.LANGUAGE),
            [f, C, b] = (0, H.q3)(() => [
              t.GetSummaryWithFallback(h),
              t.GetNameWithFallback(h),
              t.BShowLibrarySpotlightText(),
            ]);
          let _ = "spotlight",
            k = Oe.wI.spotlight_main;
          (t.appid == 2434320 || S.TS.EUNIVERSE == N.Rv) &&
            ((_ = p
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (k = Oe.wI.full));
          let U =
            (0, _a.WC)(n !== void 0 ? void 0 : t, _, h, k) ??
            (n !== void 0 ? [n] : []);
          i && U && (U = i(U));
          const w = f.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: je().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(B.Z, {
                className: (0, y.A)(
                  je().AppDetailsSpotlightContainer,
                  je().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: je().MajorEventBackground,
                    children: (0, e.jsx)(vn.c, {
                      className: je().MajorEventImageBackgroundBlur,
                      rgSources: U,
                      onIncrementalError: (j, z, O) => r && r(z),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: je().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(vn.c, {
                        className: je().MajorEventImage,
                        rgSources: U,
                        onIncrementalError: (j, z, O) => r && r(z),
                      }),
                      (0, e.jsx)("div", {
                        className: je().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: je().MajoreEventImageContentContainer,
                        children:
                          b &&
                          (0, e.jsxs)("div", {
                            className: je().MajorEventContent,
                            children: [
                              (0, e.jsx)(vn.c, {
                                className: je().MajorEventSpotlightBackground,
                                rgSources: U,
                                onIncrementalError: (j, z, O) => r && r(z),
                              }),
                              (0, e.jsxs)("div", {
                                className: je().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: je().MajorEventTitle,
                                    children: C,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: je().MajorEventSummary,
                                    children: w,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: je().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Da = a(79949),
          xe = a.n(Da);
        function ja(o) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: d,
              fnOnRemoveImage: p,
              fnOnArtworkLangChange: u,
              realms: h,
              fnLangHasData: f,
              fnGetImageHashAndExt: C,
            } = o,
            b = C(n, t),
            _ = b
              ? pe.zU.GenerateURLFromHashAndExtAndLang(r, b, Oe.wI.full, t)
              : "",
            [k] = (0, H.q3)(() => [La(n, C)]);
          return k == 0
            ? (0, e.jsxs)("div", {
                className: he().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(An, {
                      imgURL:
                        S.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(wn, {
                      imgURL:
                        S.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Ea, {
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
                className: he().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(An, {
                      imgURL: _,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(wn, {
                      imgURL: _,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Ut, { imgURL: _, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ut, { imgURL: _, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ut, { imgURL: _, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(ya, {
                      imgURL: _,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(Aa, { imgURL: _ }),
                  n === "sale_overlay" && (0, e.jsx)(wa, { imgURL: _ }),
                  Oe.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: ga.PreviewImg,
                      src: F.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(ht, { imgURL: _ }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(ht, { imgURL: _ }),
                  n === "sale_logo" && (0, e.jsx)(ht, { imgURL: _ }),
                  n === "bestofyear_banner" && (0, e.jsx)(ht, { imgURL: _ }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(ht, { imgURL: _ }),
                  (0, e.jsx)(ha, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: p,
                    fnOnArtworkLangChange: u,
                    realms: h,
                    fnLangHasData: f,
                    fnGetImageHash: (U) => pn(C(n, U) ?? ""),
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
        function Ea(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = pt.Fj[t],
            i = m.useMemo(
              () =>
                ba(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Ut, { lang: n, imgURL: i, event: s });
        }
        function ba(o, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            d = 20;
          for (let h = 0; h < 200; h += d)
            for (let f = 0; f < 780; f += d)
              (i.fillStyle =
                (f / d + h / d) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(f, h, d, d);
          const p = i.createLinearGradient(0, 0, 780, 0);
          p.addColorStop(0, "rgba(32,32,32,0.8)"),
            p.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = p),
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
            r = (0, Ne.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(da.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function wn(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, ia.LJ)(),
            [i, d, p, u, h] = (0, H.q3)(() => [
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
                languageOverride: Ne.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: xe().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: xe().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, y.A)(
                  xe().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: xe().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: xe().MainImageCtn,
                      children: (0, e.jsx)("img", { src: o.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: xe().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: xe().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: xe().TextTitle,
                            children:
                              i ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: xe().TextSubTitle,
                            children:
                              p ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: xe().TextBody,
                            children: f,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              u != N.Fwr &&
                (0, e.jsxs)(m.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: xe().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: xe().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, y.A)(
                        xe().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: xe().DetailExample2,
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
                          h,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Ut = (o) => {
            const [t] = (0, bn.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: xe().SpotlightExample,
              children: (0, e.jsx)(Sa, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          ya = (o) => {
            const t = [
              (0, e.jsx)("img", { src: o.imgURL }, "img"),
              (0, e.jsx)("div", { className: he().BroadcastPreview }, "video"),
            ];
            return (
              o.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: xe().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Aa = (o) =>
            (0, e.jsx)("div", {
              className: xe().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          wa = (o) =>
            (0, e.jsx)("div", {
              className: xe().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          ht = (o) =>
            (0, e.jsx)("div", {
              className: xe().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function La(o, t) {
          let n = 0;
          for (let s = N.Bhc; s < N.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var Ga = Object.defineProperty,
          Ba = Object.getOwnPropertyDescriptor,
          Ln = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Ba(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && Ga(t, n, r), r;
          };
        const Pa =
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
              fnLangHasData: p,
              fnGetImageHashAndExt: u,
              fnSetImageURL: h,
              partnerEventStore: f,
            } = o,
            [C] = (0, bn.t7)(s, { include_assets: !0 }),
            [b, _] = (0, H.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            k = b == N.ajI;
          let U = null;
          n === 2
            ? (U = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (U = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (U = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let w = null;
          t === "capsule"
            ? k
              ? (w = (0, e.jsxs)(e.Fragment, {
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
              : (w = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!_ &&
                      (0, e.jsxs)("div", {
                        className: he().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${S.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
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
              ? (w = (0, e.jsx)(e.Fragment, {
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
                ? (w = (0, e.jsx)(e.Fragment, {
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
                  ? (w = (0, e.jsx)(e.Fragment, {
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
                    ? (w = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (w = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: V().EventElementRequired,
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
                        ? C &&
                          (w = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !C.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: kt.ErrorStylesBackground,
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
                          ? (w = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Pa,
                                      target: S.TS.IN_CLIENT
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
                            ? (w = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: V().EventElementOptional,
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
                              ? (w = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: V().EventElementOptional,
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
                                ? (w = (0, e.jsxs)(e.Fragment, {
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
                                  ? (w = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: V().EventElementOptional,
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
                                  : (w = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: V().EventElementRequired,
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
          const j = pt.Fj[o.artworkType].width,
            z = pt.Fj[o.artworkType].height;
          return (0, e.jsxs)("div", {
            id: o.id,
            className: he().ArtworkSelectorContainer,
            children: [
              !!o.title &&
                (0, e.jsxs)("div", {
                  className: he().Title,
                  onDoubleClick: r,
                  children: [
                    o.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    U,
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
                  className: (0, y.A)(he().SelectImageBlock, he().Tips),
                  children: [
                    w,
                    !!(j && z) &&
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
                            (0, pt.qj)(j),
                            (0, pt.qj)(z),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: kt.WarningStylesWithIcon,
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
                          (0, Ee.pg)(
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
                (0, e.jsx)(Na, {
                  clanSteamID: o.clanSteamID,
                  title: o.title ?? "",
                  eventModel: d,
                  artworkType: o.artworkType,
                  realms: i,
                  appid: s,
                  fnGetImageHashAndExt: u,
                  fnSetImageURL: h,
                  fnLangHasData: p,
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
        function Na(o) {
          const {
              artworkType: t,
              realms: n,
              clanSteamID: s,
              fnLangHasData: r,
              fnGetImageHashAndExt: i,
              fnSetImageURL: d,
              eventModel: p,
              appid: u,
              partnerEventStore: h,
            } = o,
            f = t === "localized_image_group",
            [C, b] = m.useState((0, Ne.E)()),
            [_, k] = m.useState(new Array()),
            U = m.useCallback(
              (j, z, O) => {
                let X = [];
                _.find((re) => re.clanImage.imageid == j.imageid)
                  ? (X = _.map((re) =>
                      re.clanImage.imageid == j.imageid
                        ? { clanImage: j, lang: z }
                        : re,
                    ))
                  : O && (X = _.concat({ clanImage: j, lang: z })),
                  k(X);
              },
              [_],
            ),
            w = m.useCallback(
              (j, z, O) => {
                (0, $e.h5)(() => {
                  pn(i(t, z) ?? "") == j.image_hash && d(t, null, z),
                    d(t, j, O),
                    U(j, O, !1);
                });
              },
              [i, t, d, U],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(ee.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${S.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Rt, {
                    list: _,
                    fnOnArtworkLanguageChange: w,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, y.A)(
                        he().SelectImageBlock,
                        he().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(ja, {
                        eventModel: p,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (j) => {
                          j != C && b(j);
                        },
                        langOverride: C,
                        fnOnArtworkLangChange: f ? null : w,
                        artworkType: t,
                        fnOnRemoveImage: f ? null : (j) => d(t, null, j),
                        realms: n,
                        fnLangHasData: r,
                        fnGetImageHashAndExt: i,
                        partnerEventStore: h,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Rt = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, Ee.pg)(
              (0, e.jsx)(yn, {
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
                let i = (0, c.we)("#Language_" + (0, N.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: V().FlexRowContainer,
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
              className: he().UploadSuccess,
              children: t,
            });
          }
        };
        Ln([ke.oI], Rt.prototype, "ShowLangChangeDialog", 1),
          (Rt = Ln([ge.PA], Rt));
        var ka = a(6658);
        function Ua(o) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: d,
              fnLangHasData: p,
              closeModal: u,
              fnSetImageURL: h,
              partnerEventStore: f,
            } = o,
            [C, b] = (0, m.useState)(!1),
            _ = (0, Tt.zO)(t, d),
            k = t.GetAccountID(),
            [U] = (0, H.q3)(() => [
              _.GetFilesToUpload().length - _.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            b(!1),
              F.ClearImageGroup(),
              i?.forEach((O, X) => {
                const ce = Pe.b.InitFromClanID(k);
                if (F.GetAllLocalizedGroupImages().length == 0) {
                  const re = O && pe.zU.GetHashFromHashAndExt(O),
                    ue = re && be.pU.GetClanImageByImageHash(ce, re);
                  ue && F.SetPrimaryImageForImageGroup(ue, d);
                }
                F.SetLocalizedImageGroupAtLang(X, ce, O ?? null);
              }),
              b(!0);
          }, [i, k, d]);
          const w = (0, m.useCallback)(
              (O, X, ce = N.Bhc) => {
                const re = Pe.b.InitFromClanID(k),
                  ue = pe.zU.GetHashAndExt(X ?? null);
                if (F.GetAllLocalizedGroupImages().length == 0) {
                  const Le = ue && pe.zU.GetHashFromHashAndExt(ue),
                    le = Le && be.pU.GetClanImageByImageHash(re, Le);
                  le && F.SetPrimaryImageForImageGroup(le, O);
                }
                F.SetLocalizedImageGroupAtLang(ce, re, ue);
              },
              [k],
            ),
            j = (0, m.useCallback)((O, X) => {
              const re = F.GetLocalizedImageGroupForEdit()?.localized_images[X];
              return re && re.split("/").pop();
            }, []),
            z = () => {
              const O = F.GetLocalizedImageGroupForEdit();
              for (let X = N.Bhc; X < N.bP9; ++X) {
                const ce = O?.localized_images[X];
                if (ce) {
                  const re = ce.split("/").pop() || "";
                  h(
                    d,
                    {
                      image_hash: pn(re),
                      clanAccountID: k,
                      file_type: (0, ka.yh)(re) ?? ye.bg.w3,
                      imageid: 0,
                    },
                    X,
                  );
                } else h(d, null, X);
              }
              F.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(me.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, y.A)(kt.NotTooWideModal, kt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: U > 0,
            onOK: z,
            strOKButtonText:
              U > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              C
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(oa, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: w,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: _,
                      }),
                      (0, e.jsx)(Ma, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => F.ClearImageGroup(),
                        fnSetImageURL: w,
                        fnGetImageHashAndExt: j,
                        fnLangHasData: p,
                        partnerEventStore: f,
                      }),
                    ],
                  })
                : (0, e.jsx)(_e.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function Ra(o) {
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
                strDropDownClassName: P.DropDownScroll,
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
            [d, p] = (0, m.useState)(() => n),
            [u, h, f, C, b, _, k, U] = (0, H.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [w] = (0, m.useState)(() => Ha(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Ua, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: en.O3,
            artworkType: "localized_background_art",
            realms: k,
            loc_images: w,
            fnLangHasData: (j) => !!w[j],
            fnGetImageHash: (j, z) => w[z],
            fnSetImageURL: async (j, z, O) => {
              p((X) => {
                const ce = { ...X.localized_background_art },
                  re = pe.zU.GetHashAndExt(z);
                return (
                  re ? (ce[(0, N.LgB)(O)] = re) : delete ce[(0, N.LgB)(O)],
                  { ...X, localized_background_art: ce }
                );
              });
            },
            onOK: () => {
              p((j) => (s(j), t && setTimeout(t, 1), { ...j }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Be().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Be().ImageOptions,
                    children: [
                      (0, e.jsx)(Ra, {
                        setting: u,
                        fnUpdateSetting: (j) => {
                          p(
                            j !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: j,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: j },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(Wa, {
                        scaling_setting: h ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (j) => p({ ...d, scaling_setting: j }),
                      }),
                      h != "cover" &&
                        (0, e.jsx)(Ka, {
                          position_settings: _,
                          fnUpdateSetting: (j) =>
                            p({ ...d, position_setting: j }),
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
                        className: Pt().ColorCtn,
                        children: [
                          (0, e.jsx)(ee.$n, {
                            style: { backgroundColor: f },
                            onClick: (j) =>
                              i(j, {
                                color: f ?? "",
                                onChange: (z) =>
                                  p({ ...d, background_color1: z }),
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
                              p({ ...d, background_color1: void 0 }),
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
                            p({
                              ...d,
                              background_color1: C,
                              background_color2: f,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      b !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Pt().ColorCtn,
                          children: [
                            (0, e.jsx)(ee.$n, {
                              style: { backgroundColor: C },
                              onClick: (j) =>
                                i(j, {
                                  color: C ?? "",
                                  onChange: (z) =>
                                    p({ ...d, background_color2: z }),
                                }),
                              children: (0, c.we)(
                                C === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(ee.$n, {
                              onClick: () =>
                                p({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Va, {
                        gradient: b ?? "top-to-bottom",
                        fnUpdateSetting: (j) =>
                          p({ ...d, gradient_setting: j }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)($t, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Fa.S, {
                  checked: !!U,
                  onChange: (j) => {
                    d.randomize_section_order = j;
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
          const t = it.$Y([], N.bP9, null);
          for (const n in o) {
            const s = (0, N.sfN)(n);
            s != N.xPp && (t[s] = o[n]);
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
                strDropDownClassName: P.DropDownScroll,
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
        function Va(o) {
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
                strDropDownClassName: P.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "top-to-bottom",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Ka(o) {
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
                strDropDownClassName: P.DropDownScroll,
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
            [p, u, h] = (0, ke.uD)(),
            f = (0, H.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, y.A)(Be().Ctn, r && P.ValveOnlyBackground),
            children: (0, e.jsxs)(W.tH, {
              children: [
                (0, e.jsx)(ee.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (C) => {
                    d(C), t.SetBackgroundImageEnabled(C);
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
                          onChange: (C) =>
                            t.SetSalePageLastCoverSectionUntilEnd(C),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(ee.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(me.EN, {
                          active: p,
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
                            closeModal: h,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${jt.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
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
              eventModel: p,
              nTabIndex: u,
            } = t,
            h = (0, Ne.E)(),
            [f, C, b, _] = (0, H.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            k = b && i + 1 === _,
            [U, w, j] = (0, ke.uD)(),
            [z, O, X] = (0, ke.uD)();
          let ce;
          f?.nUniqueIDNextSaleSection &&
            (ce = (0, dt.h_)(
              Y.HY,
              r.GetSaleSectionByID(f?.nUniqueIDNextSaleSection),
              h,
              p,
              f.nSaleSectionLastIndex + 1,
            ));
          let re;
          if (f && C?.length > 1) {
            const ue = C[C.length - 1];
            re = (0, dt.h_)(
              Y.HY,
              r?.GetSaleSectionByID(ue),
              h,
              p,
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
                  onClick: w,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(me.EN, {
                  active: U,
                  children: (0, e.jsx)(za, {
                    imgGroup: d,
                    closeModal: j,
                    eventModel: p,
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
                    C.map((ue) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, dt.h_)(
                            Y.W3,
                            r.GetSaleSectionByID(ue),
                            h,
                            p,
                            r.GetSaleSectionIndexByID(ue, !0),
                          ),
                        },
                        "li_" + ue,
                      ),
                    ),
                    !!k &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!re &&
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
                    children: (0, c.we)("#BackgroundGroups_Reduce", re),
                  }),
                !!ce &&
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
                    children: (0, c.we)("#BackgroundGroups_Extend", ce),
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
                        active: z,
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
                          closeModal: X,
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
            d = i.findIndex((U) => U.background_id === t),
            p = i[d],
            [u, h] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const U = (0, Ee.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => h(!1),
                children: (0, e.jsx)(fn, {
                  backgroundImageEditModel: r,
                  groupIndex: d,
                  imgGroup: p,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              U.then((w) => w.Close());
            };
          }, [u, r, p, d, n, s]);
          const f = (0, H.q3)(() => rt.get(t)),
            [C, b] = (0, m.useState)(null),
            _ = m.useCallback((U, w) => {
              b(w);
            }, []),
            k = (0, ke.w6)(_);
          return (0, e.jsxs)("div", {
            className: Be().CtnEditor,
            ref: k,
            children: [
              !!(f && C && C > f) &&
                (0, e.jsx)(ee.$n, {
                  onClick: (U) => h(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(fn, {
                backgroundImageEditModel: r,
                groupIndex: d,
                imgGroup: p,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var Xa = a(81557),
          Gn = a.n(Xa);
        function $a(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const f = (0, Ee.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Bn, { ...o }),
              }),
              window,
            );
            return () => {
              f.then((C) => C.Close());
            };
          }, [n, o]);
          const r = (0, H.q3)(() => {
              const f = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (f) {
                const C = t.mapGroupToSections.get(f);
                if (C) return rt.get(C?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, m.useState)(null),
            p = m.useCallback((f, C) => {
              d(C);
            }, []),
            u = (0, ke.w6)(p),
            h = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, y.A)(Be().CtnEditor, Gn().TabCtn),
            ref: u,
            children: [
              h &&
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
            [d, p, u, h] = (0, H.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(W.tH, {
            children: [
              (0, e.jsx)(ee.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: p,
                onChange: (f) => {
                  if (
                    ((0, Ye.wT)(t, "edit model mising"),
                    (0, Ye.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const C = t.SetTabEnabled(s, f);
                    (0, Ye.wT)(
                      !!C,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(C);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!p &&
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
                      eventModel: h,
                      nTabIndex: s,
                      classNameHeader: Gn().TabHeader,
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
          const p = (0, H.q3)(() => vt.TU.Get().GetMouseOverSectionID()),
            u = t && t == p,
            h = () => vt.TU.Get().JumpToSection(t),
            f = m.useRef(null);
          return (
            (0, vt.lM)((C) =>
              t != C ? !1 : (f.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: f,
              className: (0, y.A)({
                [R().SaleSectionLivePreview]: !0,
                [R().Hover]: !!u,
                [R().JumpedTo]: !!i,
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
                      className: R().JumpToButton,
                      onClick: h,
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
              bDynamicallyCreatedSale: p,
            } = o,
            [u, h] = m.useState(n?.GetDayIndexFromEventStart()),
            [f, C] = m.useState(null),
            b = (0, H.q3)(() => n.jsondata.sale_header_disable_top_margin),
            [_, k] = m.useState(void 0),
            U = no(n, u, _),
            [w, j] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !f &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, S.yK)() == "community"
            ) {
              const ue = document.getElementsByTagName("HEAD")[0],
                Le = document.createElement("style");
              (Le.innerText = (0, ct.L$)(n.jsondata.sale_custom_css)),
                C(Le),
                ue.appendChild(Le);
            }
            const re = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Ye.wT)(
                re.length <= 1,
                "Must have at most one react_landing_background",
              ),
              re.length >= 1 && (re[0].style.backgroundImage = ""),
              () => {
                f && (f.remove(), C(null));
              }
            );
          }, [n, f, s]);
          const z = n?.jsondata,
            O = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(S.UF.CLANACCOUNTID),
                nAppIDVOD: Number(z?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? z?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  z?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, z, r, t],
            ),
            X = (0, H.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            ce = Gt(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: At().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(_e.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const re =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              ue = n.BUsesContentHubForItemSource(),
              Le = n
                .GetSaleSections()
                .some((Ze) => Ze.section_type === "contenthubtitle"),
              le = ue && Le;
            let ie,
              fe = !0;
            re
              ? (ie = 0)
              : n.BUsesContentHubForItemSource()
                ? (ie = 20)
                : n.GetEventType() == N.ajI
                  ? ((ie = 0), (fe = !1))
                  : (ie = n.jsondata.sale_header_offset || 0);
            const Ge = fe && n.jsondata.sale_header_offset === 530,
              Ue = !St.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              ft = s
                ? !w && i?.BIsBackgroundImageEnabled()
                  ? Me.S.EPreviewMode_EditBackground
                  : Me.S.EPreviewMode_Enabled
                : Me.S.EPreviewMode_Disabled,
              It = X || n.GetEventType() != N.ajI,
              tt = ue ? oe.Yo.NoTransform : oe.Yo.NoTransformSparseContent,
              In = (0, y.A)(
                R().SaleOuterContainer,
                b && R().SaleOuterTopMargin,
                Ge && R().SaleNewSizing,
                R()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                re && R().SalePageLogoSet,
                le && R().ContentHub,
              );
            return (0, e.jsx)(W.tH, {
              children: (0, e.jsx)(ae.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(Y.Cs, {
                  location: s ? Y.HY : Y.bs,
                  children: (0, e.jsxs)(D, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      Ue && (0, e.jsx)(ae.Sn, {}),
                      (0, e.jsx)(J, { eventModel: n }),
                      !!i &&
                        (It || ce) &&
                        (0, e.jsx)(Ya, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: w,
                          fnSetBackgroundImgGroupEditMode: j,
                          bShowAsValveOnly: !It,
                        }),
                      (0, e.jsxs)(B.Z, {
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
                            selectedTab: U,
                            tagSelection: _,
                            setTagSelection: k,
                          }),
                          !p &&
                            (0, e.jsx)(Vt, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Ze) => {
                                Ze != u &&
                                  ((n.m_overrideCurrentDay = Ze), h(Ze));
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
          const [s] = (0, Ve.QD)(We.jD, void 0);
          return m.useMemo(() => {
            const i = o
              .GetSaleSectionFirstMatchByType("tabs")
              ?.tabs?.filter((d) => !d.hide);
            if (i && i.length > 0) {
              let d = s > 0 ? i.find((h) => h.unique_id == s) : void 0;
              d || (d = i[0]);
              const p = d === i[0],
                u =
                  o.jsondata.sale_opt_in_page_name ||
                  o.jsondata.prune_list_optin_name;
              return new Ke.y(d, t, p, d.tab_tag_filter ? n : void 0, u);
            }
          }, [o, t, s, n]);
        }
        function Pn() {
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
            [p, u] = m.useState((0, We.rp)()),
            h = m.useMemo(() => new wt(), []),
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
                  const Ge = Pn();
                  if (Ge && Ge != le) {
                    const et = document.getElementById(Ge);
                    et && ((le = Ge), et.scrollIntoView({ block: "start" }));
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
          const C = (0, _t.W6)(),
            b = (le, ie) => {
              (0, Ve.ip)(C, { ...(ie || {}), [We.jD]: le.toString() });
            },
            [_, k] = (0, Ve.QD)("controller"),
            [U, w] = (0, H.q3)(() => {
              const le =
                  zt.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ie = t.GetSaleSectionIncludingFooterSections(le);
              return [
                Kt(
                  t.jsondata.sale_background_img_groups,
                  ie,
                  i && i.GetActiveTabUniqueID(),
                ),
                ie,
              ];
            });
          let j = !1;
          const z = new Ke.y(void 0, s),
            O = [{ elements: [], activeTab: z }];
          let X = null;
          const ce = (0, S.Qn)(),
            re = (0, vt.ty)(),
            ue = m.useMemo(() => {
              const le = Pn();
              if (!le) return;
              const ie = w.findIndex((fe) => fe.section_anchor === le);
              return ie > -1 ? ie : void 0;
            }, [w]);
          w.forEach((le, ie) => {
            const fe = O[O.length - 1].activeTab;
            if (fe && !fe.ShouldShowSection(le)) return;
            const Ge = St.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              et = p && !Ge && !t.jsondata.content_hub_restricted_width;
            let Ue = (0, Me.I)(le, r, t, n, ce);
            if (Ue === void 0) return;
            if (!Ue)
              if ((0, yt.su)(le) && !S.iA.logged_in)
                j ||
                  ((Ue = (0, e.jsx)(yt.CC, {
                    section: le,
                    event: t,
                    language: n,
                  })),
                  (j = !0));
              else {
                const In = le.diable_tab_id_filtering
                  ? new Ke.y(void 0, fe && fe.GetSaleDay())
                  : fe;
                le.section_type == "tabs" &&
                  le.tabs?.some(
                    (Ze) => Ze.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  O.push({ activeTab: i, elements: [] }),
                  (Ue = (0, e.jsx)(eo.H, {
                    ...o,
                    section: le,
                    activeTab: In,
                    appVisibilityTracker: h,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: b,
                    expanded: et,
                    controllerCategory: _,
                    setControllerCategory: k,
                  }));
              }
            re &&
              (Ue = (0, e.jsx)(qa, { nSectionID: le.unique_id, children: Ue }));
            const ft = O && O.length && O[O.length - 1];
            let It = (0, e.jsx)(
              io,
              {
                section: le,
                nActiveTabID:
                  ft && ft.activeTab && ft.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ie,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: U,
                backgroundImageEditModel: d,
                bExpanded: et,
                children: (0, e.jsx)(Lt._, {
                  enabled: !ue || ie > ue,
                  children: Ue,
                }),
              },
              "SaleSectionIndex_" + le.unique_id + "_" + ie,
            );
            const tt = U.mapSectionToGroup.get(le.unique_id);
            X &&
              X.groupID != tt &&
              (O[O.length - 1].elements.push(
                lt(t, X, r, i && i?.GetActiveTabUniqueID()),
              ),
              (X = null)),
              tt
                ? (X ||
                    (X = {
                      groupID: tt,
                      elSaleSections: [],
                      derivedGroupInfo: U.mapGroupToSections.get(tt),
                    }),
                  X.elSaleSections.push(It))
                : O[O.length - 1].elements.push(It);
          }),
            X &&
              (O[O.length - 1].elements.push(
                lt(t, X, r, i && i?.GetActiveTabUniqueID()),
              ),
              (X = null));
          const Le = O.map((le, ie) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, y.A)(
                  R().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: le.elements,
              },
              "TabSection_" + ie,
            ),
          );
          return (0, e.jsx)(B.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Le,
          });
        }
        const oo = (0, _t.y)(ao);
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
              bExpanded: p,
              children: u,
            } = o,
            h = t.section_anchor
              ? t.section_anchor
              : We.mj + (t.unique_id || n),
            f = t.section_type != "tabs",
            [C, b] = (0, m.useState)(!0);
          return C
            ? (0, e.jsx)(W.tH, {
                children: (0, e.jsx)(so, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: f
                    ? (0, e.jsx)(B.Z, {
                        navKey: h,
                        id: h,
                        className: (0, y.A)({
                          [R().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: p,
                          [t.single_item_style || ""]: !0,
                          [R().SaleSectionBackgroundImageGroupEdit]:
                            r == Me.S.EPreviewMode_EditBackground,
                          [R().NoTopPadding]: t.collapse_header_space,
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
                            : (0, e.jsx)(Tn, { onChange: b, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Me.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: h,
                                className: (0, y.A)({
                                  [R().SaleSectionCtn]: !0,
                                  [R().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [R().NoTopPadding]: t.collapse_header_space,
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
                            : (0, e.jsx)(Tn, { onChange: b, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (G, de, a) => {
        "use strict";
        a.d(de, { qx: () => P });
        var e = a(7850),
          N = a(16412),
          B = a(18210),
          oe = a(36118),
          ae = a(90626),
          Y = a(36707),
          $ = a(95695),
          te = a.n($),
          H = a(25792),
          m = a(64734),
          T = a.n(m),
          W = a(65946),
          se = a(11243);
        function R(y) {
          const {
              title: S,
              tooltip: Z,
              getMinimized: L,
              toggleMinimized: K,
              className: D,
              children: l,
              elAdditionalButtons: g,
            } = y,
            x = (0, W.q3)(() => L());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, Y.A)(
                  D,
                  m.SectionTitleHeader,
                  m.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, Y.A)(
                      $.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [S, !!Z && (0, e.jsx)(se.o, { tooltip: Z })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(V, { bIsMinimized: x, fnToggleMinimize: K }),
                    ],
                  }),
                ],
              }),
              !x && (0, e.jsx)(H.tH, { children: l }),
            ],
          });
        }
        function P(y) {
          const [S, Z] = ae.useState(!!y.bStartMinimized);
          return (0, e.jsx)(R, {
            ...y,
            getMinimized: () => S,
            toggleMinimized: () => Z(!S),
            children: y.children,
          });
        }
        function V(y) {
          const { bIsMinimized: S, fnToggleMinimize: Z } = y,
            L = S ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(N.$n, {
            "data-tooltip-text": (0, B.we)(L),
            onClick: Z,
            children: y.bIsMinimized
              ? (0, e.jsx)(oe.hz4, {})
              : (0, e.jsx)(oe.Xjb, {}),
          });
        }
      },
      46636: (G, de, a) => {
        "use strict";
        a.r(de), a.d(de, { default: () => y });
        var e = a(7850),
          N = a(90626),
          B = a(24660),
          oe = a(19298),
          ae = a(7967),
          Y = a(20169),
          $ = a(90405),
          te = a(36707),
          H = a(3166),
          m = a(51239);
        class T {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return T.s_singleton || (T.s_singleton = new T()), T.s_singleton;
          }
          constructor() {
            this.m_rgSections = (0, H.Tc)("categories", "application_config");
          }
        }
        function W() {
          const S = T.Get(),
            [Z, L] = (0, N.useState)(S.GetSections());
          return { sections: Z };
        }
        function se() {
          const { sections: S } = W(),
            Z = N.useRef(null);
          return (
            N.useEffect(() => {
              Z.current && Z.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(oe.Z, {
              className: m.CategorySectionsCtn,
              navRef: Z,
              children: S.map((L, K) =>
                (0, e.jsx)(
                  R,
                  { section: L, autoFocus: K == 0 },
                  "section" + L.name,
                ),
              ),
            })
          );
        }
        function R(S) {
          const { section: Z, autoFocus: L } = S,
            K = (0, H.Qn)(),
            D = (0, e.jsxs)("div", {
              className: m.CategorySection,
              children: [
                (0, e.jsx)("span", {
                  className: m.CategorySectionName,
                  children: Z.name,
                }),
                (0, e.jsx)(ae.MS, {
                  className: m.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: Y.iU.MAINTAIN_X,
                  navKey: "cat_section" + Z.name,
                  children: Z.categories.map((l, g) =>
                    (0, e.jsx)(
                      P,
                      { category: l, autoFocus: L && g === 0 },
                      "category" + l.name,
                    ),
                  ),
                }),
              ],
            });
          return K
            ? D
            : (0, e.jsx)($.K, { placeholderHeight: "150px", children: D });
        }
        function P(S) {
          const { category: Z, autoFocus: L } = S;
          return (0, e.jsx)(oe.Z, {
            focusableIfEmpty: !0,
            autoFocus: L,
            navKey: "cat_panel" + Z.name,
            children: (0, e.jsxs)(B.Ii, {
              href: H.TS.STORE_BASE_URL + Z.url,
              className: (0, te.A)({
                [m.Category]: !0,
                [m.TopLevelCategory]: Z.is_toplevel_genre,
              }),
              children: [
                (0, e.jsx)(V, { ...S }),
                (0, e.jsx)("div", { className: m.CategoryGradient }),
                (0, e.jsx)("span", {
                  className: m.CategoryName,
                  children: (0, e.jsx)("span", { children: Z.name }),
                }),
              ],
            }),
          });
        }
        function V(S) {
          let { category: Z } = S;
          return (0, e.jsx)("div", {
            className: m.GridOuter,
            children: (0, e.jsx)("div", {
              className: m.Grid,
              children: (0, e.jsx)("img", {
                src: H.TS.STORE_BASE_URL + Z.image_url,
              }),
            }),
          });
        }
        const y = se;
      },
      17809: (G, de, a) => {
        "use strict";
        a.d(de, { d: () => mn });
        var e = a(7850),
          N = a(19367),
          B = a(90626),
          oe = a(3685),
          ae = a(85528),
          Y = a(77495),
          $ = a(18210),
          te = a(3166),
          H = a(75779),
          m = a(80902),
          T = a(30454);
        async function W() {
          const v = await (0, T.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!v.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return v.counts;
        }
        const se = 300 * 1e3;
        function R() {
          return ["DeckCompatCounts"];
        }
        function P() {
          return {
            queryKey: R(),
            queryFn: () => W(),
            staleTime: se,
            retry: !1,
          };
        }
        function V() {
          const { data: v } = (0, m.I)(P());
          return v;
        }
        function y(v, I) {
          switch (I) {
            case H.sd:
              return v?.playable;
            case H.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var S = a(70187),
          Z = a(45251),
          L = a(39153),
          K = a(6878),
          D = a(99412),
          l = a(72609),
          g = a(47610),
          x = a(18860),
          E = a(41635),
          J = a(25792),
          A = a(85599),
          q = a(87805);
        const c = B.Fragment;
        function Ie(v) {
          const {
              reservationPackageID: I,
              depositPackageID: M,
              bIsPreview: F,
              psuLessPackageID: Q,
              strOutOfStockOverride: ne,
              strDeliveryOverride: ge,
              bDeliveryOverrideOnlyIfOutOfStock: Ce,
              section: ye,
            } = v,
            { data: ve } = (0, g.DR)(I),
            { data: we } = (0, g.DR)(Q),
            Ae = (0, B.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + I,
                  reservation_package: I,
                  deposit_package: M,
                  localized_reservation_desc: (0, E.$Y)([], D.bP9, null),
                  localized_out_of_stock_override: (0, E.$Y)(
                    [ne || null],
                    D.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, E.$Y)(
                    [ge || null],
                    D.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!Ce,
                  psu_less_package: Q,
                },
              ],
              [I, M, ne, ge, Ce, Q],
            );
          if (!ve || (Q && !we))
            return (0, e.jsx)(A.t, {
              string: (0, $.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const ze = !l.iA.logged_in || !ve.account_restricted_from_purchasing,
            Ot =
              ve.reservation_state == x.G.k_EPurchaseReservationState_Reserved
                ? ve
                : void 0;
          return (0, e.jsxs)(J.tH, {
            children: [
              (0, e.jsx)(B.Suspense, {
                fallback: null,
                children: (0, e.jsx)(c, {
                  bIsPreview: !!F,
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
                        section: ye,
                        reservationDef: Ae[0],
                        hardwareDetail: ve,
                        reservedHardwareDetail: Ot,
                      }),
                    we &&
                      we?.allow_purchase_in_country &&
                      (0, e.jsx)(q.b, {
                        reservationDef: Ae[0],
                        hardwareDetail: we,
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
          Ct = a(72865),
          at = a(38081),
          ot = a.n(at),
          He = a(36707),
          Te = a(69596),
          zt = a(10026),
          _t = a.n(zt),
          We = a(19298),
          St = a(11996),
          Ht = a(19047),
          st = a(36118),
          Wt = a(47689),
          Dt = a(89926),
          Vt = a(32545),
          Ve = a.n(Vt);
        function Ne(v) {
          const { appID: I, classOverride: M, styleOverride: F } = v,
            [Q, ne] = (0, B.useState)(!1),
            ge = (0, Wt.m)("GameHoverFollowButton"),
            { elDialogElement: Ce, fnShowLogonDialog: ye } = (0, Dt.l)(),
            ve = (0, St.Fh)(I),
            { mutateAsync: we } = (0, Ht.L)(I, !ve, void 0),
            Ae = async (ze) => {
              ze.preventDefault(),
                ze.stopPropagation(),
                te.iA.logged_in
                  ? (ne(!0), await we(), ge.token.reason || ne(!1))
                  : ye();
            };
          return (0, e.jsxs)(We.Z, {
            className: (0, He.A)(Ve().FollowButton, M),
            onClick: Ae,
            style: F,
            children: [
              ve ? (0, e.jsx)(st.pPV, {}) : (0, e.jsx)(st.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, He.A)(
                  Ve().FollowButtonText,
                  Q && Ve().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, $.we)(
                  ve ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              Ce,
            ],
          });
        }
        function ke(v) {
          const { appid: I, color: M, bgcolor: F } = v,
            Q = (0, Ct.n9)();
          return (0, e.jsx)(Ne, {
            appID: I,
            classOverride: (0, He.A)(
              ot().FollowGameButtonNotTop,
              _t().BBCodeFollowButton,
            ),
            styleOverride: { color: M, backgroundColor: F },
          });
        }
        function jt(v) {
          const I = Number(v.args.appid);
          if (!I) return null;
          const M = (0, Te.O)(v.args.color, "black"),
            F = (0, Te.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(ke, { appid: I, color: M, bgcolor: F });
        }
        var Je = a(20681),
          rt = a(18657),
          Et = a.n(rt),
          Kt = a(63026);
        function pe(v) {
          const { clanAccountID: I, color: M, bgcolor: F } = v;
          (0, Je.mx)();
          const [Q, ne] = B.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, He.A)(Et().BBCodeFollowButton, Q && Et().isHovered),
            onMouseEnter: () => ne(!0),
            onMouseLeave: () => ne(!1),
            children: (0, e.jsx)(Kt.Q, {
              nCreatorAccountID: I,
              classOverride: ot().FollowGameButtonNotTop,
              styleOverride: { color: M, backgroundColor: F },
              followType: "group",
            }),
          });
        }
        function Yt(v) {
          const { event: I } = v.context,
            M = Number(v.args.groupid) || I?.clanSteamID.GetAccountID();
          if (!M) return null;
          const F = (0, Te.O)(v.args.color, "black"),
            Q = (0, Te.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(pe, { clanAccountID: M, color: F, bgcolor: Q });
        }
        var bt = a(83482),
          it = a(44267),
          Me = a(9202),
          lt = a.n(Me),
          Zt = a(29522);
        function Qt(v) {
          const { appid: I, color: M, bgcolor: F } = v,
            Q = (0, Ct.n9)(),
            ne = (0, Zt.$5)(I),
            ge = (0, bt.L3)(Q);
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
              styleOverride: { color: M, backgroundColor: F },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function yt(v) {
          const I = Number(v.args.appid);
          if (!I) return null;
          const M = (0, Te.O)(v.args.color, "black"),
            F = (0, Te.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Qt, { appid: I, color: M, bgcolor: F });
        }
        let Ke = null;
        function Jt() {
          return (
            Ke == null &&
              (Ke = new Map([
                ["wishlist", { Constructor: yt, autocloses: !1 }],
                ["followgroup", { Constructor: Yt, autocloses: !1 }],
              ])),
            Ke
          );
        }
        var At = a(37656),
          _e = a(29868),
          Re = a(24642);
        function wt(v) {
          return v < 10 ? "0" + v : v;
        }
        function Ye(v) {
          const { giveawayid: I } = v,
            M = (0, At.w)(I),
            {
              bLoadingGiveawayInfo: F,
              winner_count: Q,
              closed: ne,
              seconds_until_drawing: ge,
            } = M;
          return F
            ? null
            : (0, e.jsxs)("div", {
                className: _e.countdownCtn,
                children: [
                  !!ne &&
                    (0, e.jsx)("div", {
                      className: _e.Closed,
                      children:
                        Q > 0
                          ? (0, $.we)("#Giveaway_Closed", (0, Re.D)(Q))
                          : (0, $.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !ne &&
                    (0, e.jsxs)(B.Fragment, {
                      children: [
                        ge <= 0
                          ? (0, e.jsxs)("div", {
                              className: _e.Throbber,
                              children: [
                                (0, e.jsx)(A.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, $.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: _e.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: _e.CountDownTime,
                                  children:
                                    wt(Math.floor(ge / 60)) + ":" + wt(ge % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: _e.CountDownText,
                                  children: [
                                    (0, $.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, $.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        Q > 0 &&
                          (0, e.jsxs)("div", {
                            className: _e.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: _e.WinnerCount,
                                children: (0, Re.D)(Q),
                              }),
                              (0, e.jsx)("div", {
                                className: _e.WinnerText,
                                children: (0, $.we)("#Giveaway_Congratulation"),
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
            M = Number(v.args.compareid);
          return !I || !M
            ? null
            : (0, e.jsx)(ct.hJ, { packageID: I, compareID: M });
        }
        var Gt = a(88245),
          $t = a(35702),
          ee = a(16412),
          me = a(92757),
          Ee = a(39256),
          qt = a(4720),
          dt = a(75110),
          en = a(57810),
          gt = a(36631),
          tn = a(33691),
          Bt = a(81416);
        function Fe(v) {
          const { eventModel: I, nEventBadgeID: M } = v,
            F = (0, $t.fy)(M);
          if (F?.level > 0) {
            let Q = F.level;
            if (I?.BHasSaleEnabled()) {
              const ne = I.GetSaleSectionsByType("badge_progress");
              if (ne?.length == 1) {
                const ge = ne[0].badge_progress;
                if (ge?.event_badgeid == M && ge?.granted_by_discovery_queue) {
                  const Ce = ge.levels[ge.levels.length - 1].level;
                  return (0, e.jsx)(nn, {
                    eventModel: I,
                    nBadgeLevel: Q,
                    nMaxLevel: Ce,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Re.D)(Q),
            });
          }
          return null;
        }
        function nn(v) {
          const { eventModel: I, nBadgeLevel: M, nMaxLevel: F } = v,
            Q = B.useMemo(() => {
              const ve = I.GetSaleSections().filter(
                (we) => we.section_type == "discoveryqueue",
              );
              return ve?.length > 0 ? ve[0] : null;
            }, [I]),
            { storePageFilter: ne, eStoreDiscoveryQueueType: ge } = B.useMemo(
              () => (0, dt.lx)(I, Q),
              [I, Q],
            ),
            Ce = (0, en.Uf)(ge, ne),
            ye = Math.min(M + Ce, F);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Re.D)(ye),
          });
        }
        function Xe(v) {
          const { event: I } = v.context,
            M = Number.parseInt((0, S.j$)(v.args, "eventid"));
          return te.iA.logged_in && M
            ? (0, e.jsx)(Fe, { nEventBadgeID: M, eventModel: I })
            : null;
        }
        function an(v) {
          const { nDoorIndex: I, children: M } = v,
            F = (0, L.OM)(I),
            Q = (0, L.gP)(),
            [ne, ge] = B.useState(!1),
            [Ce, ye] = B.useState(!1),
            { elDialogElement: ve, fnShowLogonDialog: we } = (0, Dt.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ee.$n, {
                disabled: F,
                onClick: (Ae) => {
                  ne ||
                    (te.iA.logged_in
                      ? (ge(!0),
                        Q({ iDoorIndex: I })
                          .then((ze) => {
                            ze || ye(!0), ge(!1);
                          })
                          .catch(() => {
                            ye(!0), ge(!1);
                          }))
                      : we());
                },
                children: Ce
                  ? (0, e.jsx)("div", {
                      children: (0, $.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!ne && (0, e.jsx)(A.t, { size: "small" }),
                        !!F && (0, e.jsx)(st.Jlk, {}),
                        M,
                      ],
                    }),
              }),
              ve,
            ],
          });
        }
        function on(v) {
          const I = Number.parseInt((0, S.j$)(v.args)) || 0;
          return I >= 0 && I < 32
            ? (0, e.jsx)(an, { nDoorIndex: I, children: v.children })
            : null;
        }
        const sn = (0, me.y)(tn.H);
        function rn(v) {
          const I = Number.parseInt((0, S.j$)(v.args)),
            { event: M, showErrorInfo: F } = v.context;
          if (I) {
            const Q = M?.jsondata?.sale_sections?.findIndex(
              (ne) => ne.unique_id == I,
            );
            if (Q >= 0) {
              const ne = M.GetDayIndexFromEventStart();
              return (0, e.jsx)(gt.Cs, {
                location: F ? gt.HY : gt.bs,
                children: (0, e.jsx)(sn, {
                  event: M,
                  section: M.jsondata.sale_sections[Q],
                  activeTab: new qt.y(null, ne),
                  language: v.language,
                  nSaleDayIndex: ne,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: F
                    ? Bt.S.EPreviewMode_Enabled
                    : Bt.S.EPreviewMode_Disabled,
                }),
              });
            } else if (F)
              return (0, e.jsxs)("div", {
                className: Ee.ErrorDiv,
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
                ["followgame", { Constructor: jt, autocloses: !1 }],
                ["deckcompatcount", { Constructor: cn, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Pt, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: gn, autocloses: !1 }],
                ["price", { Constructor: Lt, autocloses: !1 }],
                ["pricesavings", { Constructor: Xt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Pe, autocloses: !1 }],
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
            M = Number.parseInt((0, S.j$)(v.args, "appid")),
            F = Number.parseInt((0, S.j$)(v.args, "itemdefid")),
            Q = Number.parseInt((0, S.j$)(v.args, "maxquantity")),
            ne = (0, S.j$)(v.args, "calltoaction");
          return !(0, Gt.gS)(M, F, !1) || !I
            ? (0, e.jsx)(A.t, {
                size: "small",
                position: "center",
                string: (0, $.we)("#Loading"),
              })
            : (0, e.jsx)(Ft.f, {
                language: v.language,
                clanAccountID: I.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: M, nItemDefID: F, max_quantity: Q },
                strCallToAction: ne,
              });
        }
        function cn(v) {
          const I = V();
          if (!I) return (0, e.jsx)(A.t, { size: "small" });
          const M = Number.parseInt((0, S.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Re.D)(Number(y(I, M))) });
        }
        function Pt(v) {
          const I = (0, Z.jR)(te.iA.accountid, "library");
          if (!I) return (0, e.jsx)(A.t, { size: "small" });
          const M = Number.parseInt((0, S.j$)(v.args));
          let F = I.verifiedList?.length || 0;
          switch (M) {
            case H.sd:
              F = I.playableList?.length || 0;
              break;
            case H.V8:
              F = I.unsupportedList?.length || 0;
              break;
            case H.YX:
              F = I.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Re.D)(Number(F)) });
        }
        function Pe(v) {
          const I = Number.parseInt((0, S.j$)(v.args)),
            M =
              "hide" in v.args && !!Number.parseInt((0, S.j$)(v.args, "hide"));
          return I >= 0
            ? (0, e.jsx)(Tt, { nDoorIndex: I, bHide: M, children: v.children })
            : null;
        }
        function Tt(v) {
          const { nDoorIndex: I, bHide: M, children: F } = v,
            Q = (0, L.OM)(I);
          return Q == null
            ? null
            : (Q && !M) || (!Q && M)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function be(v) {
          if (te.iA.logged_in) {
            const I = Number.parseInt((0, S.j$)(v.args)),
              M = Number.parseInt((0, S.j$)(v.args, "mod"));
            if (M > 0 && I < M && te.iA.accountid % M == I) return v.children;
          }
          return null;
        }
        function Mt(v) {
          const I = (0, S.j$)(v.args);
          return I?.trim().length > 0
            ? (0, e.jsx)("div", { className: I.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function dn(v) {
          return (0, e.jsx)("span", {
            className: K.LocalizeBlock,
            children: (0, $.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function gn(v) {
          let I = (0, S.j$)(v.args);
          return I
            ? (0, e.jsx)(Ye, { giveawayid: I })
            : (0, e.jsx)(B.Fragment, {});
        }
        function $e(v) {
          const { showErrorInfo: I, event: M } = v.context,
            F = Number.parseInt((0, S.j$)(v.args)),
            Q = B.useMemo(() => {
              if (M)
                return M.jsondata.sale_sections?.find(
                  (ne) =>
                    ne.section_type == "vo_internal" &&
                    (ne.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      ne.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [M]);
          if (F && Q) {
            const ne = Number.parseInt((0, S.j$)(v.args, "depositpackageid")),
              ge = Number.parseInt((0, S.j$)(v.args, "psulesspackageid")),
              Ce = (0, S.j$)(v.args, "out_of_stock_override"),
              ye = (0, S.j$)(v.args, "delivery_override"),
              ve = (0, S.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(Ie, {
              section: Q,
              reservationPackageID: F,
              depositPackageID: ne,
              psuLessPackageID: ge,
              strOutOfStockOverride: Ce,
              strDeliveryOverride: ve || ye,
              bDeliveryOverrideOnlyIfOutOfStock: !!ve,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var Oe = a(71698),
          un = a(94520);
        function mn(v) {
          const { bSalePage: I } = v,
            [M, F] = B.useState(!1);
          return (
            (0, Oe.H)(M, I),
            B.useEffect(() => {
              ae.Vw.Init(new oe.D(te.TS.WEBAPI_BASE_URL)), Y.O3.Init(), F(!0);
            }, []),
            B.useEffect(() => {
              const Q = (0, $.l4)();
              Q && N.locale(Q);
            }, []),
            M
              ? I
                ? (0, e.jsx)(un.d3, { dictionary: ln(), children: v.children })
                : v.children
              : null
          );
        }
      },
      11811: (G, de, a) => {
        "use strict";
        a.r(de), a.d(de, { default: () => y });
        var e = a(7850),
          N = a(71698),
          B = a(90626),
          oe = a(73259),
          ae = a(76559),
          Y = a(77495),
          $ = a(25679),
          te = a(64641),
          H = a.n(te),
          m = a(85599),
          T = a(18210),
          W = a(3166),
          se = a(17809),
          R = a(85692),
          P = a(41032),
          V = a(51079);
        function y(L) {
          const { eventModel: K } = L;
          return (0, e.jsx)(se.d, {
            bSalePage: !0,
            children: (0, e.jsx)(S, { ...L, overrideEventModel: K }),
          });
        }
        function S(L) {
          const { promotionName: K, language: D, overrideEventModel: l } = L,
            [g, x] = B.useState(
              l ?? Y.O3.GetClanEventFromAnnouncementGID(W.P9.ANNOUNCEMENT_GID),
            );
          B.useEffect(() => {
            if (!l && g?.AnnouncementGID != W.P9.ANNOUNCEMENT_GID) {
              const c = new ae.b(W.UF.CLANSTEAMID);
              Y.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                c,
                W.P9.ANNOUNCEMENT_GID,
                null,
              ).then(x);
            }
          }, [g, l]);
          const J = (0, R.D2)() ?? g,
            A = (0, R.ty)();
          if (((0, N.s)(1500), !J))
            return (0, e.jsx)("div", {
              className: H().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, T.we)("#Loading"),
              }),
            });
          const q =
            (J.visibility_state !== oe.zv.k_EEventStateVisible &&
              J.visibility_state !== oe.zv.k_EEventStateUnlisted) ||
            A;
          return (0, e.jsx)(Z, {
            eventModel: J,
            children: (0, e.jsx)(V.oJ, {
              children: (0, e.jsx)(V.Ay, {
                curator_clanid: J?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)($._, {
                  promotionName: K,
                  language: D,
                  eventModel: J,
                  bIsPreview: q,
                }),
              }),
            }),
          });
        }
        function Z(L) {
          const { eventModel: K, children: D } = L,
            l = K.GetContentHubType() == "adultonly";
          return (0, e.jsx)(P.QA, {
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
      51239: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          CategorySectionsCtn: "YuXdszLjIFoat_EbTkm8U",
          CategorySection: "_2MUQ8QBrMaSxsdhqhiN6tG",
          CategorySectionName: "_2VnsyILlZj23L2UgP3ZsMm",
          CategoriesCtn: "_3yuPyNw3DpZ_ICakOPcu4u",
          Category: "_1uwcZwdwT2vRgumGDlZbtk",
          Grid: "_3anY0OeVUh2enLVFNx50N1",
          CategoryGradient: "_27LrTrejiaFAMHuA0df3qP",
          CategoryName: "_3VNsED3Ez-vqDraw_8QWsp",
          TopLevelCategory: "_2ZYjRLgkQLHW5_cstUffIp",
          BackgroundAnimation: "_10Bfh_1KHpFNk8qNyewY_F",
          "ItemFocusAnim-darkerGrey-nocolor": "_3LFS9sVPAAjvuyGeJ1peaT",
          "ItemFocusAnim-darkerGrey": "_1S59zff-jnAxDy8rr0hHlS",
          "ItemFocusAnim-darkGreySettings": "_34Uv5_hzQOvOrw1Unrblim",
          "ItemFocusAnim-darkGrey": "Hh_85_Fjw1YP9H4vzXEu_",
          "ItemFocusAnim-grey": "_2-9pWSpKgjrjUj71iLnJo7",
          "ItemFocusAnim-translucent-white-10": "W_bdqnE_ztejA8mOAYb6D",
          "ItemFocusAnim-translucent-white-20": "_2rFvANRdudDnTxPKgIBcZd",
          "ItemFocusAnimBorder-darkGrey": "_2b9hABAip8cwkuxxNVwPSw",
          "ItemFocusAnim-green": "_3Jf28OMYy3a68jmK-GOBsc",
          focusAnimation: "MlTzZ1Co7fkjpq6p2zQ0",
          hoverAnimation: "_19RLtomnrOIiHhk5GWSMdR",
        };
      },
      44894: (G, de, a) => {
        "use strict";
        a.d(de, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
