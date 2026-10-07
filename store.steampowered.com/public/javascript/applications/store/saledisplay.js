/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      94381: (G, ce, a) => {
        "use strict";
        a.d(ce, { S: () => F });
        var e = a(7850),
          N = a(68031),
          B = a(31857);
        function oe(z) {
          return (0, e.jsx)(B.I, {
            ...z,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var ae = a(21895),
          Q = a(64238),
          q = a.n(Q),
          ne = a(80549);
        function F(z) {
          const {
              checked: se,
              onChange: R,
              disabled: P,
              children: W,
              ref: y,
              variant: S,
              color: Z,
              align: L = "center",
              icon: K,
              ...j
            } = z,
            l = se === "indeterminate",
            g = K ?? (l ? M : oe),
            C = () => {
              P || (R && R(l ? !0 : !se));
            },
            b = (w) => {
              P ||
                (w.key === " " &&
                  (C(), w.preventDefault(), w.stopPropagation()));
            },
            J = (0, ne.f)("Checkbox", S);
          return (0, e.jsxs)(N.s, {
            align: L,
            ref: y,
            role: "checkbox",
            "aria-checked": l ? "mixed" : se,
            "data-state": m(se),
            className: q()(ae.Root, ae[`Variant-${J}`], P && ae.Disabled),
            onClick: C,
            tabIndex: 0,
            onKeyDown: b,
            cursor: "default",
            "aria-disabled": P,
            "data-accent-color": Z,
            ...j,
            children: [
              (0, e.jsx)("div", {
                className: ae.Checkbox,
                children: se && (0, e.jsx)(g, { className: ae.Icon }),
              }),
              W,
            ],
          });
        }
        function m(z) {
          return z === "indeterminate" ? z : z ? "checked" : "unchecked";
        }
        function M(z) {
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
        a.d(ce, { I: () => Q });
        var e = a(7850),
          N = a(69289),
          B = a(8928),
          oe = a(16619),
          ae = a.n(oe);
        function Q(M) {
          return (0, e.jsx)("svg", { ...F(M) });
        }
        const q = [
          ...B.L,
          {
            prop: "size",
            responsive: !0,
            className: (M) => oe[`IconSize-${M}`],
          },
          {
            prop: "color",
            className: oe.Color,
            cssProperty: (M) => ["--icon-color", ne(M)],
          },
          {
            prop: "hitSlop",
            className: oe.HitSlop,
            cssProperty: (M) => [
              "--hit-slop-custom",
              typeof M == "string" ? M : "",
            ],
          },
          B.h.find(({ prop: M }) => M === "cursor"),
        ];
        function ne(M) {
          return !M || M[0] === "#" ? M : (0, N.w7)(M);
        }
        function F(M) {
          const { viewBox: z, ...se } = M,
            P = { className: se.size ? void 0 : oe.IconSizeDefault, ...se };
          return z && (P.viewBox = m(z)), (0, N.mz)(P, q);
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
        a.d(ce, { H: () => oe, s: () => ae });
        var e = a(90626),
          N = a(41623);
        let B = 0;
        function oe(Q, q) {
          (0, e.useEffect)(() => {
            if (!(Q || q))
              return (
                B++,
                () => {
                  --B == 0 && (0, N.s)();
                }
              );
          }, [Q, q]);
        }
        function ae(Q) {
          const [q, ne] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const F = window.setTimeout(() => ne(!0), Q);
            return () => window.clearTimeout(F);
          }, [Q]),
            oe(q);
        }
      },
      85528: (G, ce, a) => {
        "use strict";
        a.d(ce, { Vw: () => K });
        var e = a(14947),
          N = a(99412),
          B = a(72604),
          oe = a(35038),
          ae = a(67529),
          Q = a(3166);
        class q {
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
            let C = Q.TS.LANGUAGE,
              b = this.GetTokenList(C),
              J = C != "english" ? this.GetTokenList("english") : null;
            return ne(l, b, J, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let C = Q.TS.LANGUAGE,
              b = this.GetTokenList(C),
              J = C != "english" ? this.GetTokenList("english") : null;
            return F(l, b, J, this.m_appid, g);
          }
        }
        function ne(j, l, g, C, b) {
          if (!j.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                j,
                "appid",
                C,
                "tokens",
                l,
              ),
              ""
            );
          let J = j;
          j = j.toLowerCase();
          let w = "";
          if (
            (l && l.has(j) && (w = l.get(j)),
            !w && g && g.has(j) && (w = g.get(j)),
            w)
          )
            w = F(w, l, g, C, b);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                C,
                J,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && Q.TS.EUNIVERSE != N.wLO)
          )
            return j;
          return w;
        }
        function F(j, l, g, C, b) {
          let J = /{[A-za-z0-9_%#:]+}/g,
            w = j.match(J);
          if (w)
            for (let ee of w) {
              let c = ee.slice(1, -1),
                fe = m(c, b),
                Ze = ne(fe, l, g, C, b);
              if (!Ze) return "";
              j = j.replace(ee, Ze);
            }
          return (j = m(j, b)), j;
        }
        function m(j, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            C = j.match(g);
          if (C)
            for (let b of C) {
              let J = b.slice(1, -1).toLowerCase(),
                w = l.get(J);
              w == null
                ? console.log("No rich presence found for", J)
                : (j = j.replace(b, w));
            }
          return j;
        }
        var M = a(72849),
          z = a(71742),
          se = a(8323),
          R = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          W = (j, l, g, C) => {
            for (
              var b = C > 1 ? void 0 : C ? P(l, g) : l, J = j.length - 1, w;
              J >= 0;
              J--
            )
              (w = j[J]) && (b = (C ? w(l, g, b) : w(b)) || b);
            return C && b && R(l, g, b), b;
          };
        function y(j) {
          return useObserver(() => K.GetAppInfo(j));
        }
        function S(j) {
          return useObserver(() => j.map((l) => K.GetAppInfo(l)));
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
              (0, z.wT)(
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
              ((0, z.wT)(
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
              let C = oe.w.Init(M._z);
              C.Body().set_language((0, N.sfN)(Q.TS.LANGUAGE));
              const b = 50;
              for (; g.length > 0; ) {
                const J = Math.min(b, g.length),
                  w = g.slice(0, J);
                (g = g.slice(J)), C.Body().set_appids(w);
                const ee = await M.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  C,
                );
                ee.GetEResult() == B.R
                  ? this.OnGetAppsResponse(ee)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${ee.GetEResult()}, AppIDs:`,
                      w,
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
            for (let C of l.Body().apps()) {
              let b = this.m_mapAppInfo.get(C.appid());
              (0, z.wT)(
                b,
                `Got AppInfo response for unrequested AppID: ${C.appid()}`,
              ),
                b &&
                  ((b = new ae.by(C.appid())),
                  b.DeserializeFromMessage(C),
                  this.m_mapAppInfo.set(C.appid(), b),
                  g.push(b));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const C = new ae.by(g.appid());
              C.DeserializeFromAppOverview(g),
                C.is_initialized && this.m_mapAppInfo.set(g.appid(), C);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((C) => {
                let b = this.m_mapAppInfo.get(C);
                if (b) {
                  b.is_valid || (g = !0);
                  return;
                }
                (b = new ae.by(C)),
                  this.m_mapAppInfo.set(C, b),
                  this.QueueAppInfoRequest(C),
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
              C = async (ee) => {
                const c = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(ee),
                );
                if (!c) return ee;
                let fe = this.m_mapAppInfo.get(ee);
                return (
                  (0, z.wT)(
                    fe,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  fe
                    ? ((fe = new ae.by(ee)),
                      fe.DeserializeFromCacheObject(c),
                      fe.is_initialized
                        ? (this.m_mapAppInfo.set(ee, fe),
                          fe.time_updated_from_server < g ? ee : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            ee,
                            c,
                          ),
                          ee))
                    : ee
                );
              };
            let b = l.map((ee) => C(ee));
            return (await Promise.all(b)).filter((ee) => ee !== null);
          }
          async SaveAppInfoBatchToLocalCache(l) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                l.map((g) => g.appid),
              );
              for (const g of l) {
                const C = g.SerializeToCacheObject();
                C &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    C,
                  );
              }
            }
          }
          Localize(l, g, C) {
            const b = this.GetRichPresenceLoc(l);
            return b
              ? b.Localize(g, C)
              : Q.TS.EUNIVERSE != N.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${l} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(l) {
            if (this.m_mapRichPresenceLoc.has(l.toString())) {
              let C = this.m_mapRichPresenceLoc.get(l.toString());
              return (
                C.m_nLastUpdated + 1e3 * 60 * ae.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(C),
                C
              );
            }
            let g = new q(l);
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
            for (let C of g) {
              let b = C.language(),
                J = l.m_mapLanguages.get(b);
              J
                ? J.clear()
                : (l.m_mapLanguages.set(b, new Map()),
                  (J = l.m_mapLanguages.get(b)));
              for (let w of C.tokens())
                J?.set(w.name().toLowerCase(), w.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = oe.w.Init(M.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(Q.TS.LANGUAGE),
                      M.BE.GetAppRichPresenceLocalization(
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
        W([e.XI], L.prototype, "OnGetAppsResponse", 1),
          W([e.XI], L.prototype, "OnRichPresenceLocUpdate", 1);
        const K = new L();
      },
      50109: (G, ce, a) => {
        "use strict";
        a.d(ce, { E: () => se, O: () => z });
        var e = a(14947),
          N = a(65946),
          B = a(99412),
          oe = a(41635),
          ae = a(27066),
          Q = a(3166),
          q = a(38585),
          ne = Object.defineProperty,
          F = Object.getOwnPropertyDescriptor,
          m = (R, P, W, y) => {
            for (
              var S = y > 1 ? void 0 : y ? F(P, W) : P, Z = R.length - 1, L;
              Z >= 0;
              Z--
            )
              (L = R[Z]) && (S = (y ? L(P, W, S) : L(S)) || S);
            return y && S && ne(P, W, S), S;
          };
        const M = class It {
          m_eCurLang = (0, B.sfN)(Q.TS.LANGUAGE);
          m_rgHasData = (0, oe.$Y)([], B.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new q.l();
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
            P.forEach((W, y) => {
              this.m_rgHasData[y] != W && (this.m_rgHasData[y] = W);
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
              It.s_globalSingletonStore ||
                (It.s_globalSingletonStore = new It()),
              It.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], M.prototype, "m_eCurLang", 2),
          m([e.sH], M.prototype, "m_rgHasData", 2),
          m([e.sH], M.prototype, "m_bHasLocalizationContext", 2),
          m([ae.o], M.prototype, "GetCurEditLanguage", 1),
          m([ae.o], M.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], M.prototype, "SetHasLanguage", 1),
          m([ae.o], M.prototype, "BHasLanguageData", 1);
        let z = M;
        function se() {
          return (0, N.q3)(() => z.Get().GetCurEditLanguage());
        }
      },
      37656: (G, ce, a) => {
        "use strict";
        a.d(ce, { w: () => K });
        var e = a(41735),
          N = a.n(e),
          B = a(14947),
          oe = a(65946),
          ae = a(90626),
          Q = a(27066),
          q = a(8323),
          ne = a(30096),
          F = a(3166),
          m = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          z = (j, l, g, C) => {
            for (
              var b = C > 1 ? void 0 : C ? M(l, g) : l, J = j.length - 1, w;
              J >= 0;
              J--
            )
              (w = j[J]) && (b = (C ? w(l, g, b) : w(b)) || b);
            return C && b && m(l, g, b), b;
          };
        const se = class Tn {
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
            const l = new Tn();
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
        z([B.sH], se.prototype, "giveaway_id", 2),
          z([B.sH], se.prototype, "seconds_until_drawing", 2),
          z([B.sH], se.prototype, "rtime_start", 2),
          z([B.sH], se.prototype, "rtime_end", 2),
          z([B.sH], se.prototype, "closed", 2),
          z([B.sH], se.prototype, "winner_count", 2);
        let R = se;
        const P = class at {
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
                this.m_mapNextDrawChangeCallback.set(l, new q.lu()),
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
            let C = F.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              b = null,
              J = { origin: self.origin };
            return (
              (b = await N().get(C, { params: J })),
              (0, B.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(l) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, new R()),
                  this.CopyToGiveaway(
                    b.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(l),
                  ),
                  g !== void 0)
                ) {
                  const w = this.GetKey(l, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(w) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      w,
                      new R(),
                    ),
                    this.CopyToGiveaway(
                      b.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(w),
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
              at.s_Singleton ||
                ((at.s_Singleton = new at()), at.s_Singleton.Init()),
              at.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let l = (0, F.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new R();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        z([B.sH], P.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          z([B.XI], P.prototype, "CopyToGiveaway", 1);
        let W = P;
        const y = class fn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = fn.s_GlobalInstance),
              (fn.s_GlobalInstance += 1);
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
              let C =
                l.seconds_until_drawing <= 0 && l.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, C);
            }
          }
          SetupCountDown(l, g) {
            l > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        z([Q.o], y.prototype, "ClearRefreshInterval", 1),
          z([Q.o], y.prototype, "ClearCountDown", 1),
          z([Q.o], y.prototype, "SetupRefreshDataInterval", 1),
          z([Q.o], y.prototype, "SetupCountDown", 1);
        let S = y;
        function Z(j, l) {
          const g = W.Get().GetInfoByInstance(j, l.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown();
        }
        function L(j, l) {
          const g = W.Get().GetInfoByInstance(j, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            W.Get()
              .ReloadGiveaway(j, l.m_myInstanceNumber)
              .then((C) => {
                l.SetupCountDown(C.seconds_until_drawing, () => Z(j, l));
              }));
        }
        function K(j) {
          const [l] = (0, ae.useState)(new S()),
            g = (0, ne.CH)();
          (0, ae.useEffect)(
            () => (
              W.Get()
                .ReloadGiveaway(j, l.m_myInstanceNumber)
                .then((ee) => {
                  l.SetupRefreshDataInterval(ee, () => L(j, l)),
                    l.SetupCountDown(ee.seconds_until_drawing, () => Z(j, l)),
                    g();
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, j, g],
          );
          const C = W.Get().GetInfoByInstance(j, l.m_myInstanceNumber),
            [b, J, w] = (0, oe.q3)(() => [
              C?.winner_count,
              C?.closed,
              C?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !C || C.giveaway_id == null || !C.BStarted() || b === void 0,
            winner_count: b,
            closed: J,
            seconds_until_drawing: w,
          };
        }
      },
      55436: (G, ce, a) => {
        "use strict";
        a.d(ce, { r: () => se, z: () => M });
        var e = a(7850),
          N = a(90626),
          B = a(16412),
          oe = a(25792),
          ae = a(96538),
          Q = a(18210),
          q = a(85599),
          ne = a(17618),
          F = a.n(ne),
          m = a(53424);
        const M = (R) => {
            const { clanSteamID: P, fnImageSelectCallBack: W } = R,
              [y, S] = (0, N.useState)(""),
              Z = (0, m.mr)(R.clanSteamID.GetAccountID()),
              L = () => R.closeModal && R.closeModal(),
              K = m.pU.GetFilteredClanImages(P, y),
              j = (l) => {
                W(l), L();
              };
            return (0, e.jsx)(oe.tH, {
              children: (0, e.jsx)(ae.x_, {
                onEscKeypress: L,
                children: (0, e.jsxs)(B.UC, {
                  children: [
                    (0, e.jsx)(B.Y9, {
                      children: (0, Q.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(B.nB, {
                      children: (0, e.jsxs)(B.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, Q.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(B.pd, {
                            placeholder: (0, Q.we)("#ClanImageChooser_Search"),
                            value: y,
                            onChange: (l) => S(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: ne.ImagesOuterContainer,
                            children: Z
                              ? (0, e.jsx)(q.t, {
                                  size: "medium",
                                  string: (0, Q.we)("#Loading"),
                                })
                              : K.length > 0
                                ? K.map((l) =>
                                    (0, e.jsx)(
                                      z,
                                      {
                                        clanImage: l,
                                        searchStringHilight: y,
                                        fnImageClick: j,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : y.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, Q.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, Q.we)(
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
                        children: (0, Q.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          z = (R) => {
            const { clanImage: P, searchStringHilight: W, fnImageClick: y } = R;
            let S = P.file_name ? P.file_name : "",
              Z = se(W, S, String(P.imageid), ne.Hilight);
            return (0, e.jsxs)("div", {
              className: ne.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: ne.Image,
                  style: { backgroundImage: `url( '${P.thumb_url}' )` },
                  onDoubleClick: () => y(P),
                }),
                (0, e.jsx)("div", {
                  className: ne.ImageFilename,
                  title: S,
                  children: Z,
                }),
              ],
            });
          };
        function se(R, P, W, y) {
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
                    W + "_" + String(L),
                  ),
                );
                break;
              } else
                L < K &&
                  S.push(
                    (0, e.jsx)(
                      "span",
                      { children: P.substring(L, K) },
                      W + "_" + String(L),
                    ),
                  ),
                  S.push(
                    (0, e.jsx)(
                      "span",
                      { className: y, children: P.substr(K, R.length) },
                      W + "_" + String(L),
                    ),
                  ),
                  (L = K + R.length);
            }
          } else S.push((0, e.jsx)("span", { children: P }, W + "_null"));
          return S;
        }
      },
      24806: (G, ce, a) => {
        "use strict";
        a.d(ce, { Ng: () => y });
        var e = a(7850),
          N = a(75844),
          B = a(90626),
          oe = a(99412),
          ae = a(32093),
          Q = a(50109),
          q = a(95695),
          ne = a.n(q),
          F = a(36707),
          m = a(18210),
          M = a(92264),
          z = a(30096),
          se = a(71421),
          R = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          W = (L, K, j, l) => {
            for (
              var g = l > 1 ? void 0 : l ? P(K, j) : K, C = L.length - 1, b;
              C >= 0;
              C--
            )
              (b = L[C]) && (g = (l ? b(K, j, g) : b(g)) || g);
            return l && g && R(K, j, g), g;
          };
        let y = class extends B.Component {
          GenerateLanguageOptions() {
            let L = [];
            const {
              fnFilterLanguage: K,
              fnLangHasData: j,
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
            let C = new Array();
            const b = this.props.realms || [ae.TU.k_ESteamRealmGlobal];
            for (const w of m.A0.GetLanguageListForRealms(b)) {
              if (K && !K(w)) continue;
              const ee = (0, oe.LgB)(w),
                c = (0, m.we)("#Language_" + ee),
                fe = !!(g && g(w));
              C.push({ eLang: w, sLocName: c, bSupported: fe });
            }
            C.sort((w, ee) =>
              w.bSupported != ee.bSupported
                ? w.bSupported
                  ? -1
                  : 1
                : w.sLocName.localeCompare(ee.sLocName),
            );
            let J = !1;
            for (const w of C) {
              w.bSupported != J &&
                (L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: ne().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        w.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    w.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (J = w.bSupported));
              const ee = j && j(w.eLang),
                c = l && l(w.eLang);
              let fe = w.sLocName;
              c &&
                c !== 0 &&
                ((fe += " "),
                (fe += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(c) +
                    " @ " +
                    (0, M.KC)(c, { bForce24HourClock: !1 }),
                ))),
                L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: w.eLang,
                      className: (0, F.A)(
                        { [ne().LanguageWithContent]: ee },
                        w.bSupported
                          ? ne().SupportedLanguage
                          : ne().UnsupportedLanguage,
                      ),
                      children: fe,
                    },
                    "langpicker" + w.eLang + (ee ? "_hasdata" : ""),
                  ),
                );
            }
            return L;
          }
          OnLanguageChange(L) {
            const { fnOnLanguageChanged: K, selectedLang: j } = this.props;
            let l = Number.parseInt(L.currentTarget.value);
            l != j && K && K(l);
          }
          render() {
            const { selectedLang: L, bDisabled: K, strTooltip: j } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(se.he, {
              toolTipContent: j,
              children: (0, e.jsx)("select", {
                value: L,
                onChange: this.OnLanguageChange,
                disabled: K,
                children: l,
              }),
            });
          }
        };
        W([z.oI], y.prototype, "OnLanguageChange", 1), (y = W([N.PA], y));
        function S(L) {
          const [K, j] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(y, {
            selectedLang: j,
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
          const j = useObserver(() => {
            const l = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              l[g] = !!(K && K(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(j), [j]),
            jsx(Fragment, {})
          );
        }
      },
      25679: (G, ce, a) => {
        "use strict";
        a.d(ce, { _: () => eo });
        var e = a(7850),
          N = a(99412),
          B = a(19298),
          oe = a(20169),
          ae = a(28604),
          Q = a(36631),
          q = a(64387);
        function ne(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: q.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var F = a(65946),
          m = a(90626),
          M = a(73259),
          z = a(25792),
          se = a(52393),
          R = a.n(se),
          P = a(95695),
          W = a.n(P),
          y = a(36707),
          S = a(3166),
          Z = a(82054),
          L = a(68266);
        function K(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(z.tH, {
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
        function j(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, L.m0)(t, "sale_header", n),
            [h] = (0, F.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!d) return;
            const I = new Image();
            (I.onload = () => {
              const _ = (100 * I.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", _);
            }),
              (I.src = d);
          }, [d]);
          const u = t.jsondata.sale_sections?.some(
              (I) => I.section_type === "contenthubmaincarousel",
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
                ? (0, e.jsx)(Z.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: h,
                    styleVariation: Z.g.k_SubMenu,
                  })
                : (0, e.jsx)(ne, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, y.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
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
                            W().SalePageBackground,
                            W().BackgroundImage,
                            W().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, y.A)(
                            W().SalePageBackground,
                            W().BackgroundImage,
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
          C = a(50909),
          b = a.n(C);
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
              className: b().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: b().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: b().WarningText,
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
        var w = a(76789),
          ee = a.n(w),
          c = a(18210);
        function fe(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, F.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: ee().SalePageLogoCtn,
                  href: S.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(Ze, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, y.A)(ee().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(Ze, { ...o }),
                })
            : null;
        }
        function Ze(o) {
          const { eventModel: t, language: n } = o,
            s = (0, L.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Ut = a(72865),
          xt = a(71347),
          ot = a.n(xt),
          st = a(53107);
        function Ve(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, N.sfN)(S.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, y.A)(
                  ot().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(Oe, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, y.A)(
                  ot().PresenterDisclaimer,
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
                            (0, e.jsx)(Oe, { presentor: s, lang: n }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(Oe, { presentor: t[t.length - 1], lang: n }),
                ),
              });
        }
        function Oe(o) {
          const { presentor: t, lang: n } = o,
            s = (0, Ut.aL)(t.url);
          return (0, e.jsx)(st.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: ot().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Rt = a(60480),
          Ct = a(92757),
          Ke = a(18994),
          Je = a(56412),
          _t = a(86515),
          rt = a(39153),
          Ft = a(61478);
        function St(o) {
          const { event: t, broadcastEmbedContext: n } = o,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            r = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Ft.B, {
                event: t,
                broadcastEmbedContext: n,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: r,
              }),
          });
        }
        var zt = a(85671);
        function it(o) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = o;
          return (0, e.jsx)(zt.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: n,
            addtionalAdminButtons: s,
            bSupportsSticky: !0,
          });
        }
        var Ye = a(179),
          Fe = a(50109),
          ze = a(30096),
          Dt = a(98609),
          Xe = a(57673);
        const $e = new Map();
        function Ht(o, t) {
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
        function Wt(o, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let d,
            h,
            u = 0;
          const { selectedTabBackgroundDef: p, nTabSaleSectionIndex: f } = Ht(
            t,
            n,
          );
          if (o?.enabled) {
            const I = o.groups?.length;
            if (
              (o.groups?.forEach((D, _) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const O = new Array();
                for (
                  let A = 0;
                  A < (D?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++A, ++u
                ) {
                  const V = t[u].unique_id;
                  O.push(V),
                    r.set(V, D.background_id),
                    A === 0 && i.set(V, D.background_id);
                }
                if (
                  (s.set(D.background_id, {
                    nBackgroundGroupID: D.background_id,
                    sectionUniqueIDs: O,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (f === void 0 || u < f)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  _ + 1 == I && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let A = u;
                    A < t.length &&
                    (!p || !p.enabled || A < f) &&
                    !(t[A].section_type == "tabs" && p?.enabled);
                    ++A
                  ) {
                    const V = t[A].unique_id;
                    r.set(V, D.background_id);
                  }
              }),
              u < t.length && (f === void 0 || u < f) && (d = t[u].unique_id),
              p?.enabled && f !== void 0)
            ) {
              let D = f;
              const _ = p.groups.length;
              for (
                p.groups.forEach((O, k) => {
                  if (D >= t.length) return;
                  const A = new Array();
                  for (
                    let U = 0;
                    U < O.num_sections && D < t.length;
                    ++U, ++D
                  ) {
                    const Y = t[D],
                      re = Y.unique_id;
                    (0, Xe.bF)(n, Y)
                      ? (A.push(re),
                        r.set(re, O.background_id),
                        U === 0 && i.set(re, O.background_id))
                      : --U;
                  }
                  let E = D;
                  for (; E < t.length && !(0, Xe.bF)(n, t[E]); ) E += 1;
                  if (
                    (s.set(O.background_id, {
                      nBackgroundGroupID: O.background_id,
                      sectionUniqueIDs: A,
                      nSaleSectionLastIndex: D - 1,
                      nUniqueIDNextSaleSection:
                        E < t.length ? t[E].unique_id : void 0,
                    }),
                    k + 1 == _ && p.last_group_until_cover_section_until_end)
                  )
                    for (let U = D; U < t.length; ++U) {
                      const Y = t[U];
                      if (Y.section_type == "tabs" && p?.enabled) break;
                      (0, Xe.bF)(n, Y) && r.set(Y.unique_id, O.background_id);
                    }
                });
                D < t.length && !(0, Xe.bF)(n, t[D]);
              )
                D++;
              D < t.length && (h = t[D].unique_id);
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
        var pe = a(29630),
          Vt = a(68434),
          jt = a(15181),
          lt = a(41635),
          Pe = a(81416);
        function Et(o, t, n, s) {
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
              Yt,
              {
                eventModel: o,
                displayDef: i,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  i &&
                  i.randomize_section_order &&
                  n !== Pe.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Kt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Kt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, Vt.M)(`sale_section_seed_${t}`, (0, jt.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, jt.A)(s);
            return (0, e.jsx)(e.Fragment, { children: lt.fW(n, 0, i) });
          }
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Yt(o) {
          const {
              displayDef: t,
              children: n,
              eventModel: s,
              derivedGroupInfo: r,
            } = o,
            i = (0, Fe.E)(),
            d = m.useCallback(
              (_, O) => {
                $e.set(r.nBackgroundGroupID, O);
              },
              [r],
            ),
            h = (0, ze.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const _ = (0, N.LgB)(i),
              O =
                _ in t.localized_background_art
                  ? _
                  : c.A0.GetLanguageFallback(Dt.TS.LANGUAGE),
              k = t.localized_background_art[O];
            k && (u = pe.zU.GenerateURLFromHashAndExt(s.clanSteamID, k));
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
            I = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            D = {
              backgroundImage: p ? `url(${u}), ${p}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: I ? t.position_setting : void 0,
              backgroundColor: f ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: h,
            style: D,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var qe = a(9807),
          ct = a(4720),
          Qt = a(64641),
          ye = a.n(Qt),
          Ae = a(85599);
        function bt(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class Zt {
          Keyify = (t) => bt(t);
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
        var He = a(71742),
          Jt = a(53113),
          yt = a(90405);
        function Xt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function At(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, l.hM)(n ? o.GetAccountID() : 0);
          return n && Xt(s, t);
        }
        function $t(o) {
          const { clanSteamID: t, id: n } = o;
          return At(t, o.requireAdmin)
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
        var te = a(16412),
          ue = a(96538),
          je = a(88003),
          qt = a(12932),
          dt = a(46777),
          gt = a(77495),
          en = a(16346),
          wt = a(61257),
          tn = a(56718),
          We = a(71421),
          nn = a(27828),
          et = a.n(nn);
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
                  I = on(f);
                d(I), n(I);
              } catch (u) {
                console.warn(g.Z.Localize("#Sale_EyeDropperFailed"), u);
              }
            }, [n]);
          return (0, e.jsxs)("div", {
            className: et().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)(te.JU, { children: s }),
              (0, e.jsx)(wt.xk, {
                onChange: (u) => {
                  const p = an(u);
                  d(p), n(p);
                },
                color: i,
                disableAlpha: r,
                className: et().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: et().EyeDropperCtn,
                children: (0, e.jsx)(We.Gq, {
                  toolTipContent: g.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(te.$n, {
                    className: et().EyeDropperBtn,
                    onClick: h,
                    children: (0, e.jsx)(tn.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function ut(o) {
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
        function rn() {
          return {
            openColorPicker: (0, m.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, en.lX)(
                (0, e.jsx)(ut, {
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
          Te = a.n(ln),
          cn = a(32190),
          Lt = a.n(cn),
          Me = a(76559),
          Gt = a(75909),
          Ee = a(53424),
          Bt = a(72604),
          dn = a(41735),
          gn = a.n(dn),
          tt = a(14947),
          Ne = a(9046),
          un = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          x = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? v(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && un(t, n, r), r;
          };
        const T = class Mn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, tt.Gn)(this);
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
                .success == Bt.R
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
              (this.m_curLocImageGroup.localized_images = (0, lt.$Y)(
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
              s = Me.b.InitFromClanID(n.clanAccountID),
              r = pe.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let h = N.Bhc; h < N.bP9; ++h)
              i.push(Mn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, tt.h5)(() => {
              for (let h = N.Bhc; h < N.bP9; ++h)
                d[h] &&
                  (this.m_curLocImageGroup.localized_images[h] =
                    pe.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Ne.wI.full,
                      h,
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
                    Ne.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, n) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const r = Me.b.InitFromClanID(s.clanAccountID),
                i = pe.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  pe.zU.GenerateURLFromHashAndExtAndLang(
                    r,
                    i,
                    Ne.wI.full,
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
        x([tt.sH], T.prototype, "m_curLocImageGroup", 2);
        let X = T;
        const H = new X();
        var $ = a(38410),
          de = a(34592),
          Ce = a(75844),
          be = a(32093),
          me = a(72849),
          we = a(64),
          ke = a(72739),
          Le = a(82734);
        function Pt(o, t) {
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
            ke.createPortal(
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
        function In(o) {
          const [t, n] = m.useState(!1),
            s = m.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = m.useCallback((u) => {
              Le.NO(u) && n(!1);
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
        async function co(o, t = 1e3) {
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
        function go(o) {
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
        var On = a(71647),
          nt = a.n(On);
        function Nn(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = In(t),
            [h, u] = Pt(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, y.A)(
              d ? nt().DragAndDropContainerDragging : nt().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: nt().ImageUploadBar,
                children: [
                  h,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: nt().SelectImageButton,
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
          kn = a(21254),
          Un = a(27344),
          _e = a.n(Un),
          Rn = a(9472);
        function Fn(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [h, u] = (0, F.q3)(() => [
              t.GetUploadImages(),
              Fe.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (D) => {
                let _ = Array.from(D),
                  O = !0;
                for (let k = 0; k < _.length; k++) {
                  const A = _[k],
                    { language: E } = (0, $.jj)(A?.name, u);
                  try {
                    const V = (0, $.PD)(E, u, d);
                    (O = await t.AddImageForLanguage(A, V)),
                      O ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            k +
                            " file=" +
                            A.name,
                        ),
                        (0, je.pg)(
                          (0, e.jsx)(ue.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              A.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (V) {
                    let U = (0, de.H)(V);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + U.strErrorMsg,
                      U,
                    ),
                      (0, je.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            U.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return O;
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
          (0, F.q3)(() =>
            h.map((D) => ({ a: D.GetCurrentImageOption(), b: D.language })),
          );
          const I = async () => {
            const D = await t.UploadAllImages(r);
            n?.(D);
          };
          return (0, e.jsxs)(Nn, {
            onDropFiles: p,
            elAdditonalButtons: f,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: _e().UploadPreviewCtn,
                  children: h.map((D) =>
                    (0, e.jsx)(
                      Cn,
                      {
                        asset: D,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(D),
                        languageRealms: d,
                      },
                      "arttabupload_" + D.filename + "_" + D.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(zn, { imageUploader: t, fnOnUploadImageRequested: I }),
            ],
          });
        }
        function zn(o) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = o,
            [s] = (0, F.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: _e().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(te.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(te.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function uo(o, t, n, s, r) {
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
        const Cn = (0, Ce.PA)(Hn);
        function Hn(o) {
          const t = (_) => {
              if (_ instanceof we.M7) {
                _.ResetImage();
                const O = window,
                  k = (0, e.jsx)(kn.q, {
                    ownerWin: O,
                    uploadFile: _,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || me.bg.dU,
                  });
                (0, je.HT)(k, O, "CropModal", {
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
              let O = _?.fnGetLabelText(),
                k;
              _.bEnforceDimensions && (O += ` - ${_.width}x${_.height}`),
                _.bDeprecated &&
                  ((O += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (k = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let A;
              return (
                (n.BIsOriginalMinimumDimensions(_) &&
                  n.FileTypeMatchesImageTypes(_)) ||
                  (A = _e().ImageDimensionTooSmall),
                { label: O, data: _, strOptionClass: A, tooltip: k }
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
            h = n.BSupportsLanguages()
              ? Kn(
                  c.A0.GetLanguageListForRealms(
                    r ?? [be.TU.k_ESteamRealmGlobal],
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
          let I;
          const D = n.GetCurrentImageOption();
          return (
            D && (I = i?.find((_) => _.data.sKey == D.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: _e().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: _e().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(mt.sED, {}),
                }),
                (0, e.jsx)(Wn, { asset: n }),
                h &&
                  (0, e.jsx)(te.m, {
                    strDropDownClassName: W().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (_) => (n.language = _.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(te.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: I,
                    onChange: (_) => n.SetCurrentImageOption(_.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((_, O) =>
                    (0, e.jsx)(
                      "div",
                      { className: _e().UploadPreviewWarning, children: _ },
                      `warning${O}`,
                    ),
                  ),
                p &&
                  u.messages?.map((_, O) =>
                    (0, e.jsx)(
                      "div",
                      { className: _e().UploadPreviewMessage, children: _ },
                      `message${O}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, y.A)({
                    [W().FlexColumnContainer]: !0,
                    [_e().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    f,
                    (0, Rn.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: ye().FlexCenter,
                        children: (0, e.jsx)(Ae.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: _e().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: _e().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)(te.jn, {
                    onClick: () => t(n),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Wn(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: _e().PreviewImgCtn,
                onClick: (n) =>
                  (0, je.pg)((0, e.jsx)(Vn, { asset: t }), (0, Le.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: _e().PreviewImgInfo,
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
                className: _e().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: _e().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Vn(o) {
          const { asset: t, closeModal: n } = o;
          return (0, e.jsx)(ue.o0, {
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
        function Kn(o) {
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
        var Tt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Tt || {});
        function _n(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function mo(o, t, n) {
          let s = "";
          const r = _n(t);
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
            const i = _n(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var Yn = a(55436),
          Qn = a(53732),
          Se = a.n(Qn),
          Sn = a(49460);
        function Zn(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, m.useRef)(null);
          return (0, e.jsx)("div", {
            className: Sn.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: Sn.SearchInput,
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
        const Jn = m.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: h,
          } = t;
          return (0, e.jsx)(Dn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (u, p) =>
              u.map((f) =>
                (0, e.jsx)(
                  Xn,
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
        function Dn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, Ee.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = Ee.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = Me.b.InitFromClanID(t);
            let u = Ee.pU.GetLoadState(h);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Se().ResultNotification,
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
                      className: Se().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: Se().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(d, i);
        }
        function ho(o) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = o;
          return jsx(Dn, {
            clanAccountID: t,
            fileNameSearch: n,
            children: (i) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: i.map((d) =>
                  jsx(
                    qn,
                    { clanImage: d, selected: d == r, onImageSelected: s },
                    d.imageid,
                  ),
                ),
              }),
          });
        }
        function Xn(o) {
          const {
              clanImage: t,
              searchStringHilight: n,
              imageInsertCallBack: s,
              OnImageClick: r,
              showImageActions: i,
              fnOnOpenLocalizedImageGroup: d,
            } = o,
            [h, u] = m.useState(!1),
            p = () => s(t, Tt.k_eInsertFullImage),
            f = () => s(t, Tt.k_eInsertVideo),
            I = () => s(t, Tt.k_eInsertThumbnail),
            D = (ge) => {
              t.url &&
                (ge.dataTransfer.setData("text", t.url),
                Ee.pU.GetClanImageDragListener().forEach((xe) => {
                  let Be = Me.b.InitFromClanID(t.clanAccountID);
                  xe(Be, !0);
                }));
            },
            _ = (ge) => {
              t.url &&
                Ee.pU.GetClanImageDragListener().forEach((xe) => {
                  let Be = Me.b.InitFromClanID(t.clanAccountID);
                  xe(Be, !1);
                });
            },
            O = (ge) => {
              (0, je.pg)(
                (0, e.jsx)(ue.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: A,
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
                (0, Le.uX)(ge) ?? window,
              );
            },
            k = (ge) => {
              console.log("ClanImageWrapper on delete error: " + ge),
                (0, je.pg)(
                  (0, e.jsx)(ue.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ge }),
                  }),
                  window,
                );
            },
            A = () => {
              u(!0);
              let ge = Me.b.InitFromClanID(t.clanAccountID);
              Ee.pU
                .DeleteClanImage(ge, t)
                .then((xe) => {
                  xe.success != Bt.R && k((0, de.H)(xe).strErrorMsg), u(!1);
                })
                .catch((xe) => {
                  k((0, de.H)(xe).strErrorMsg), u(!1);
                }),
                E();
            },
            E = () => {},
            V = () => {
              r && r(t);
            },
            U = t.file_name ? t.file_name : "",
            Y = (0, Yn.r)(n, U, String(t.imageid), Se().Hilight),
            re = pe.zU.BIsClanImageVideo(t),
            ie = i && !h && !re,
            he = i && !h && !re,
            Ge = i && !h && re,
            le = i && !h && !re;
          return (0, e.jsx)(yt.K, {
            placeholderHeight: "100vh",
            className: Se().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: Se().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: Se().ImageWrapper,
                  style: {
                    backgroundImage: re ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: D,
                  onDragEnd: _,
                  onDoubleClick: p,
                  onClick: V,
                  children: (0, e.jsx)(jn, {
                    clanImage: t,
                    className: Se().VideoBackground,
                  }),
                }),
                ie &&
                  (0, e.jsx)("span", {
                    className: Se().Full,
                    onClick: p,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(Ae.t, {
                    size: "medium",
                    className: Se().FloatingThrobber,
                  }),
                he &&
                  (0, e.jsx)("span", {
                    className: Se().Thumb,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                le &&
                  d &&
                  (0, e.jsx)($n, {
                    bDeleting: h,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Ge &&
                  (0, e.jsx)("span", {
                    className: Se().Full,
                    onClick: f,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: Se().Delete,
                    onClick: O,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: Se().ImageWrapperFilename,
                  title: U,
                  children: Y,
                }),
              ],
            }),
          });
        }
        function $n(o) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: n,
              bDeleting: s,
            } = o,
            { data: r } = (0, l.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, y.A)(Se().Localized, W().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function jn(o) {
          const { clanImage: t, className: n } = o;
          return pe.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == me.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function qn(o) {
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
        function ea(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = m.useCallback(
              (h, u) => {
                s?.(h, u), n?.();
              },
              [s, n],
            ),
            [i, d] = m.useState("");
          return (0, e.jsxs)(ue.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: n,
            onCancel: n,
            children: [
              (0, e.jsx)(Zn, { fnSetImageSearch: d }),
              (0, e.jsx)(Jn, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: i,
                imageInsertCallBack: r,
                showImageActions: !1,
              }),
            ],
          });
        }
        function ta(o) {
          const { clanSteamID: t, OnClanImageSelected: n } = o;
          return (0, e.jsxs)("div", {
            className: nt().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: nt().SelectImageButton,
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
                    (0, e.jsx)(ea, { clanSteamID: t, OnClanImageSelected: n }),
                    (0, Le.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function na(o) {
          const {
              clanSteamID: t,
              rgSupportArtwork: n,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: r,
              fnSetImageURL: i,
              rgRealmList: d,
            } = o,
            [h] = (0, F.q3)(() => [Fe.O.Get().GetCurEditLanguage()]),
            u = (0, Gt.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [f, I] = m.useState(!1),
            D = m.useCallback(
              async (k, A) => {
                if (!f) {
                  I(!0);
                  try {
                    const { language: E } = (0, $.jj)(k.file_name ?? "", h),
                      V = (0, $.PD)(E, h, d);
                    await p.AddExistingClanImage(k, V);
                  } catch (E) {
                    let V = (0, de.H)(E);
                    console.error("AddExistingClanImage: " + V.strErrorMsg, V),
                      (0, je.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            V.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  I(!1);
                }
              },
              [f, p, h, d],
            ),
            _ = m.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          ta,
                          { clanSteamID: t, OnClanImageSelected: D },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [D, r, t],
            ),
            O = (k) => {
              for (const A of k) {
                const E = A.uploadResult;
                if (E?.origimagehash) {
                  const V = (0, $.PD)(E.language, h, d);
                  H.AddLocalizeImageUploaded(E.origimagehash, V);
                } else {
                  const V = Ee.pU.GetClanImageByImageHash(
                      t,
                      E?.image_hash ?? "",
                    ),
                    U = A.image.GetCurrentImageOption();
                  if (V && U) {
                    const Y = (0, $.PD)(A.image.language, h, d);
                    i(U.artworkType, V, Y);
                  }
                }
              }
            };
          return (0, e.jsx)(Fn, {
            ...o,
            imageUploader: p,
            rgRealmList: d,
            elAdditonalButtons: f
              ? [
                  (0, e.jsx)(
                    Ae.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : _,
            fnUploadComplete: O,
          });
        }
        var ht = a(25279),
          En = a(84676),
          aa = a(25359),
          ve = a.n(aa),
          oa = a(24806);
        function bn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [h, u] = (0, m.useState)(s),
            p = Me.b.InitFromClanID(t.clanAccountID),
            f = (0, F.q3)(() =>
              pe.zU.GenerateURLFromHashAndExt(p, pe.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, y.A)(W().FlexColumnContainer, ve().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: ve().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: ve().ArtworkPreview,
                    src: f,
                  }),
                }),
                (0, e.jsx)(oa.Ng, {
                  selectedLang: h,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Mt = a(56330);
        function mn(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var sa = a(58483),
          ra = a(82385),
          ia = a(94520),
          la = a(95174),
          ca = a(9709),
          hn = a(64868),
          da = a(44894);
        const ga =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var ua = a(11243);
        function ma(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, Ee.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const f = c.A0.GetLanguageListForRealms([
                be.TU.k_ESteamRealmGlobal,
                be.TU.k_ESteamRealmChina,
              ]);
              for (const I of f) {
                const D = n(I);
                if (D) {
                  const _ = (0, N.LgB)(I),
                    O = (0, c.we)("#Language_" + _);
                  p.push({ lang: I, strLang: _, locLang: O, imgHash: D });
                }
              }
              return (
                (p = p.sort((I, D) =>
                  I.locLang > D.locLang ? 1 : I.locLang < D.locLang ? -1 : 0,
                )),
                p
              );
            }, [n]),
            [d, h, u] = (0, hn.uD)();
          return (0, e.jsxs)("div", {
            className: ve().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: ve().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: ve().LanguageListContainer,
                children: i.map((p) =>
                  (0, e.jsx)(
                    ha,
                    { langData: p, ...o },
                    "lang_select_" + t.GetAccountID() + " " + p.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)(te.$n, {
                  onClick: h,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(ua.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(ue.EN, {
                active: d,
                children: (0, e.jsx)(ue.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < N.bP9; p++) s && r && s(p) && r(p);
                  },
                }),
              }),
            ],
          });
        }
        function ha(o) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: d,
            } = o,
            [h, u] = (0, F.q3)(() => {
              const p = Ee.pU.GetClanImageByImageHash(t, n.imgHash);
              let f = "";
              p &&
                (f = pe.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  pe.zU.GetHashAndExt(p),
                  Ne.wI.full,
                  n.lang,
                ));
              let I = ve().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (I = n.imgHash
                    ? ve().LanguageSelector
                    : ve().LanguageSelectorNoData),
                [f, I]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: ve().LanguageContainer,
            onClick: (p) => {
              let f = (0, N.sfN)(p.currentTarget.id);
              r(f);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: ve().LanguageOptions,
                children: [
                  !!h &&
                    (0, e.jsx)("a", {
                      href: h,
                      target: "_blank",
                      children: (0, e.jsx)(We.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: mt.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(pa, { ...o }),
                  !!d && (0, e.jsx)(va, { fnOnRemoveImage: d, langData: n }),
                ],
              }),
            ],
          });
        }
        function pa(o) {
          const {
              clanSteamID: t,
              langData: n,
              fnOnArtworkLangChange: s,
              fnGetImageHash: r,
              fnLangHasData: i,
              realms: d,
            } = o,
            [h, u, p] = (0, hn.uD)(),
            f = (0, F.q3)(() => {
              const I = r(n.lang);
              return (
                (0, He.wT)(
                  !I || !I.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + I,
                ),
                Ee.pU.GetClanImageByImageHash(t, I)
              );
            });
          if (!f) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(We.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ga,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: h,
                  children: (0, e.jsx)(bn, {
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
        function va(o) {
          const { fnOnRemoveImage: t, langData: n } = o,
            [s, r, i] = (0, hn.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(We.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: da.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: s,
                  children: (0, e.jsx)(ue.o0, {
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
        var pn = a(13465),
          fa = a(21659),
          Ia = a(15496),
          De = a.n(Ia),
          xa = a(88812);
        function Ca(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            h = (0, fa.c5)(),
            u = m.useCallback(
              (E) => {
                E.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, N.sfN)(S.TS.LANGUAGE),
            [f, I, D] = (0, F.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let _ = "spotlight",
            O = Ne.wI.spotlight_main;
          (t.appid == 2434320 || S.TS.EUNIVERSE == N.Rv) &&
            ((_ = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (O = Ne.wI.full));
          let k =
            (0, xa.WC)(n !== void 0 ? void 0 : t, _, p, O) ??
            (n !== void 0 ? [n] : []);
          i && k && (k = i(k));
          const A = f.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: De().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(B.Z, {
                className: (0, y.A)(
                  De().AppDetailsSpotlightContainer,
                  De().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: De().MajorEventBackground,
                    children: (0, e.jsx)(pn.c, {
                      className: De().MajorEventImageBackgroundBlur,
                      rgSources: k,
                      onIncrementalError: (E, V, U) => r && r(V),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: De().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(pn.c, {
                        className: De().MajorEventImage,
                        rgSources: k,
                        onIncrementalError: (E, V, U) => r && r(V),
                      }),
                      (0, e.jsx)("div", {
                        className: De().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: De().MajoreEventImageContentContainer,
                        children:
                          D &&
                          (0, e.jsxs)("div", {
                            className: De().MajorEventContent,
                            children: [
                              (0, e.jsx)(pn.c, {
                                className: De().MajorEventSpotlightBackground,
                                rgSources: k,
                                onIncrementalError: (E, V, U) => r && r(V),
                              }),
                              (0, e.jsxs)("div", {
                                className: De().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: De().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: De().MajorEventSummary,
                                    children: A,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: De().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var _a = a(79949),
          Ie = a.n(_a);
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
              fnGetImageHashAndExt: I,
            } = o,
            D = I(n, t),
            _ = D
              ? pe.zU.GenerateURLFromHashAndExtAndLang(r, D, Ne.wI.full, t)
              : "",
            [O] = (0, F.q3)(() => [Aa(n, I)]);
          return O == 0
            ? (0, e.jsxs)("div", {
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(yn, {
                      imgURL:
                        S.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(An, {
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
                    (0, e.jsx)(Da, {
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
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(yn, {
                      imgURL: _,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(An, {
                      imgURL: _,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Ot, { imgURL: _, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ot, { imgURL: _, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ot, { imgURL: _, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(Ea, {
                      imgURL: _,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(ba, { imgURL: _ }),
                  n === "sale_overlay" && (0, e.jsx)(ya, { imgURL: _ }),
                  Ne.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: ca.PreviewImg,
                      src: H.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(pt, { imgURL: _ }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(pt, { imgURL: _ }),
                  n === "sale_logo" && (0, e.jsx)(pt, { imgURL: _ }),
                  n === "bestofyear_banner" && (0, e.jsx)(pt, { imgURL: _ }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(pt, { imgURL: _ }),
                  (0, e.jsx)(ma, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: f,
                    fnGetImageHash: (k) => mn(I(n, k) ?? ""),
                  }),
                ],
              });
        }
        function po(o) {
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
        function Da(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = ht.Fj[t],
            i = m.useMemo(
              () =>
                ja(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Ot, { lang: n, imgURL: i, event: s });
        }
        function ja(o, t) {
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
        function yn(o) {
          const { imgURL: t, eventModel: n, langOverride: s } = o,
            r = (0, Fe.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(la.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function An(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, sa.LJ)(),
            [i, d, h, u, p] = (0, F.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let f = d
            ? (0, e.jsx)(ia.fh, {
                text: d || "",
                showErrorInfo: !1,
                event: n,
                languageOverride: Fe.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Ie().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Ie().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, y.A)(
                  Ie().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Ie().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie().MainImageCtn,
                      children: (0, e.jsx)("img", { src: o.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Ie().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Ie().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ie().TextTitle,
                            children:
                              i ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie().TextSubTitle,
                            children:
                              h ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie().TextBody,
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
                    (0, e.jsx)("div", { className: Ie().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Ie().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, y.A)(
                        Ie().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Ie().DetailExample2,
                        children: (0, e.jsx)(
                          ra.He,
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
        const Ot = (o) => {
            const [t] = (0, En.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ie().SpotlightExample,
              children: (0, e.jsx)(Ca, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          Ea = (o) => {
            const t = [
              (0, e.jsx)("img", { src: o.imgURL }, "img"),
              (0, e.jsx)("div", { className: ve().BroadcastPreview }, "video"),
            ];
            return (
              o.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Ie().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          ba = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          ya = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          pt = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function Aa(o, t) {
          let n = 0;
          for (let s = N.Bhc; s < N.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var wa = Object.defineProperty,
          La = Object.getOwnPropertyDescriptor,
          wn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? La(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && wa(t, n, r), r;
          };
        const Ga =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ba = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Ba || {});
        function Pa(o) {
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
            [I] = (0, En.t7)(s, { include_assets: !0 }),
            [D, _] = (0, F.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            O = D == N.ajI;
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
          let A = null;
          t === "capsule"
            ? O
              ? (A = (0, e.jsxs)(e.Fragment, {
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
              : (A = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!_ &&
                      (0, e.jsxs)("div", {
                        className: ve().HighlightBox,
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
              ? (A = (0, e.jsx)(e.Fragment, {
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
                ? (A = (0, e.jsx)(e.Fragment, {
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
                  ? (A = (0, e.jsx)(e.Fragment, {
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
                    ? (A = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (A = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: W().EventElementRequired,
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
                        ? I &&
                          (A = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !I.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Mt.ErrorStylesBackground,
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
                          ? (A = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ga,
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
                            ? (A = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: W().EventElementOptional,
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
                              ? (A = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: W().EventElementOptional,
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
                                ? (A = (0, e.jsxs)(e.Fragment, {
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
                                  ? (A = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: W().EventElementOptional,
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
                                  : (A = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: W().EventElementRequired,
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
            V = ht.Fj[o.artworkType].height;
          return (0, e.jsxs)("div", {
            id: o.id,
            className: ve().ArtworkSelectorContainer,
            children: [
              !!o.title &&
                (0, e.jsxs)("div", {
                  className: ve().Title,
                  onDoubleClick: r,
                  children: [
                    o.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    k,
                    r &&
                      (0, e.jsx)(te.$n, {
                        onClick: r,
                        children: (0, e.jsx)(We.he, {
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
                  className: (0, y.A)(ve().SelectImageBlock, ve().Tips),
                  children: [
                    A,
                    !!(E && V) &&
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
                            (0, ht.qj)(V),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Mt.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)(te.$n, {
                        onClick: (U) => {
                          (0, je.pg)(
                            (0, e.jsx)(Ta, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, Le.uX)(U) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsx)(Ma, {
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
        function Ta(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), n?.();
            },
            onCancel: n,
          });
        }
        function Ma(o) {
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
            [I, D] = m.useState((0, Fe.E)()),
            [_, O] = m.useState(new Array()),
            k = m.useCallback(
              (E, V, U) => {
                let Y = [];
                _.find((ie) => ie.clanImage.imageid == E.imageid)
                  ? (Y = _.map((ie) =>
                      ie.clanImage.imageid == E.imageid
                        ? { clanImage: E, lang: V }
                        : ie,
                    ))
                  : U && (Y = _.concat({ clanImage: E, lang: V })),
                  O(Y);
              },
              [_],
            ),
            A = m.useCallback(
              (E, V, U) => {
                (0, tt.h5)(() => {
                  mn(i(t, V) ?? "") == E.image_hash && d(t, null, V),
                    d(t, E, U),
                    k(E, U, !1);
                });
              },
              [i, t, d, k],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(te.$n, {
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
                  (0, e.jsx)(Nt, {
                    list: _,
                    fnOnArtworkLanguageChange: A,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, y.A)(
                        ve().SelectImageBlock,
                        ve().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Sa, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (E) => {
                          E != I && D(E);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: f ? null : A,
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
              (0, e.jsx)(bn, {
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
                      className: W().FlexRowContainer,
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
              className: ve().UploadSuccess,
              children: t,
            });
          }
        };
        wn([ze.oI], Nt.prototype, "ShowLangChangeDialog", 1),
          (Nt = wn([Ce.PA], Nt));
        var Oa = a(6658);
        function Na(o) {
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
            [I, D] = (0, m.useState)(!1),
            _ = (0, Gt.zO)(t, d),
            O = t.GetAccountID(),
            [k] = (0, F.q3)(() => [
              _.GetFilesToUpload().length - _.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            D(!1),
              H.ClearImageGroup(),
              i?.forEach((U, Y) => {
                const re = Me.b.InitFromClanID(O);
                if (H.GetAllLocalizedGroupImages().length == 0) {
                  const ie = U && pe.zU.GetHashFromHashAndExt(U),
                    he = ie && Ee.pU.GetClanImageByImageHash(re, ie);
                  he && H.SetPrimaryImageForImageGroup(he, d);
                }
                H.SetLocalizedImageGroupAtLang(Y, re, U ?? null);
              }),
              D(!0);
          }, [i, O, d]);
          const A = (0, m.useCallback)(
              (U, Y, re = N.Bhc) => {
                const ie = Me.b.InitFromClanID(O),
                  he = pe.zU.GetHashAndExt(Y ?? null);
                if (H.GetAllLocalizedGroupImages().length == 0) {
                  const Ge = he && pe.zU.GetHashFromHashAndExt(he),
                    le = Ge && Ee.pU.GetClanImageByImageHash(ie, Ge);
                  le && H.SetPrimaryImageForImageGroup(le, U);
                }
                H.SetLocalizedImageGroupAtLang(re, ie, he);
              },
              [O],
            ),
            E = (0, m.useCallback)((U, Y) => {
              const ie = H.GetLocalizedImageGroupForEdit()?.localized_images[Y];
              return ie && ie.split("/").pop();
            }, []),
            V = () => {
              const U = H.GetLocalizedImageGroupForEdit();
              for (let Y = N.Bhc; Y < N.bP9; ++Y) {
                const re = U?.localized_images[Y];
                if (re) {
                  const ie = re.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: mn(ie),
                      clanAccountID: O,
                      file_type: (0, Oa.yh)(ie) ?? me.bg.w3,
                      imageid: 0,
                    },
                    Y,
                  );
                } else p(d, null, Y);
              }
              H.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(ue.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, y.A)(Mt.NotTooWideModal, Mt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: k > 0,
            onOK: V,
            strOKButtonText:
              k > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(na, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: A,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: _,
                      }),
                      (0, e.jsx)(Pa, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => H.ClearImageGroup(),
                        fnSetImageURL: A,
                        fnGetImageHashAndExt: E,
                        fnLangHasData: h,
                        partnerEventStore: f,
                      }),
                    ],
                  })
                : (0, e.jsx)(Ae.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function ka(o) {
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
              (0, e.jsx)(te.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(te.m, {
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
        var Ua = a(94381);
        function Ra(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = rn(),
            [d, h] = (0, m.useState)(() => n),
            [u, p, f, I, D, _, O, k] = (0, F.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [A] = (0, m.useState)(() => Fa(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Na, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: gt.O3,
            artworkType: "localized_background_art",
            realms: O,
            loc_images: A,
            fnLangHasData: (E) => !!A[E],
            fnGetImageHash: (E, V) => A[V],
            fnSetImageURL: async (E, V, U) => {
              h((Y) => {
                const re = { ...Y.localized_background_art },
                  ie = pe.zU.GetHashAndExt(V);
                return (
                  ie ? (re[(0, N.LgB)(U)] = ie) : delete re[(0, N.LgB)(U)],
                  { ...Y, localized_background_art: re }
                );
              });
            },
            onOK: () => {
              h((E) => (s(E), t && setTimeout(t, 1), { ...E }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Te().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Te().ImageOptions,
                    children: [
                      (0, e.jsx)(ka, {
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
                      (0, e.jsx)(za, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (E) => h({ ...d, scaling_setting: E }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(Wa, {
                          position_settings: _,
                          fnUpdateSetting: (E) =>
                            h({ ...d, position_setting: E }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Te().ColorOptions,
                    children: [
                      (0, e.jsx)(te.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Lt().ColorCtn,
                        children: [
                          (0, e.jsx)(te.$n, {
                            style: { backgroundColor: f },
                            onClick: (E) =>
                              i(E, {
                                color: f ?? "",
                                onChange: (V) =>
                                  h({ ...d, background_color1: V }),
                              }),
                            children: (0, c.we)(
                              f === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(te.$n, {
                            onClick: () =>
                              h({ ...d, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Te().SwapColorsCtn,
                        children: (0, e.jsx)(te.$n, {
                          onClick: () =>
                            h({
                              ...d,
                              background_color1: I,
                              background_color2: f,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      D !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Lt().ColorCtn,
                          children: [
                            (0, e.jsx)(te.$n, {
                              style: { backgroundColor: I },
                              onClick: (E) =>
                                i(E, {
                                  color: I ?? "",
                                  onChange: (V) =>
                                    h({ ...d, background_color2: V }),
                                }),
                              children: (0, c.we)(
                                I === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(te.$n, {
                              onClick: () =>
                                h({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Ha, {
                        gradient: D ?? "top-to-bottom",
                        fnUpdateSetting: (E) =>
                          h({ ...d, gradient_setting: E }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)($t, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Ua.S, {
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
        function Fa(o) {
          const t = lt.$Y([], N.bP9, null);
          for (const n in o) {
            const s = (0, N.sfN)(n);
            s != N.xPp && (t[s] = o[n]);
          }
          return t;
        }
        function za(o) {
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
              (0, e.jsx)(te.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(te.m, {
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
        function Ha(o) {
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
              (0, e.jsx)(te.JU, {
                children: s || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(te.m, {
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
        function Wa(o) {
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
              (0, e.jsx)(te.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(te.m, {
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
        function Va(o) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = o,
            [i, d] = (0, m.useState)(t.BIsBackgroundImageEnabled()),
            [h, u, p] = (0, ze.uD)(),
            f = (0, F.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, y.A)(Te().Ctn, r && P.ValveOnlyBackground),
            children: (0, e.jsxs)(z.tH, {
              children: [
                (0, e.jsx)(te.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (I) => {
                    d(I), t.SetBackgroundImageEnabled(I);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(te.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)(te.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: f,
                          onChange: (I) =>
                            t.SetSalePageLastCoverSectionUntilEnd(I),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(te.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(ue.EN, {
                          active: h,
                          children: (0, e.jsx)(ue.o0, {
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
                  href: `${Dt.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const vn = m.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: h,
              nTabIndex: u,
            } = t,
            p = (0, Fe.E)(),
            [f, I, D, _] = (0, F.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            O = D && i + 1 === _,
            [k, A, E] = (0, ze.uD)(),
            [V, U, Y] = (0, ze.uD)();
          let re;
          f?.nUniqueIDNextSaleSection &&
            (re = (0, dt.h_)(
              Q.HY,
              r.GetSaleSectionByID(f?.nUniqueIDNextSaleSection),
              p,
              h,
              f.nSaleSectionLastIndex + 1,
            ));
          let ie;
          if (f && I?.length > 1) {
            const he = I[I.length - 1];
            ie = (0, dt.h_)(
              Q.HY,
              r?.GetSaleSectionByID(he),
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
                (0, e.jsx)(te.$n, {
                  onClick: A,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(ue.EN, {
                  active: k,
                  children: (0, e.jsx)(Ra, {
                    imgGroup: d,
                    closeModal: E,
                    eventModel: h,
                    fnUpdateImageGroup: (he) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, he)
                        : r.SetSalePageBackgroundGroup(i, he),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Te().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    I.map((he) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, dt.h_)(
                            Q.W3,
                            r.GetSaleSectionByID(he),
                            p,
                            h,
                            r.GetSaleSectionIndexByID(he, !0),
                          ),
                        },
                        "li_" + he,
                      ),
                    ),
                    !!O &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!ie &&
                  (0, e.jsx)(te.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Reduce", ie),
                  }),
                !!re &&
                  (0, e.jsx)(te.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Extend", re),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(te.$n, {
                        onClick: U,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(ue.EN, {
                        active: V,
                        children: (0, e.jsx)(ue.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            u != null
                              ? r.RemoveTabBackgroundGroup(u, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: Y,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Ka(o) {
          const { backgroundImageEditModel: t, nTabID: n } = o;
          return (0, e.jsx)("div", {
            className: Te().CtnEditor,
            children: (0, e.jsx)(te.$n, {
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
        function Ya(o) {
          const {
              nTabID: t,
              nSectionUniqueID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i = s.mapFirstSectionToGroup.get(n);
          return n == s.nFirstSaleSectionIDWithoutGroup ||
            n == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Ka, { backgroundImageEditModel: r, nTabID: t })
            : i
              ? (0, e.jsx)(Qa, { ...o, groupID: i })
              : null;
        }
        function Qa(o) {
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
              (0, e.jsx)(ue.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(vn, {
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
              k.then((A) => A.Close());
            };
          }, [u, r, h, d, n, s]);
          const f = (0, F.q3)(() => $e.get(t)),
            [I, D] = (0, m.useState)(null),
            _ = m.useCallback((k, A) => {
              D(A);
            }, []),
            O = (0, ze.w6)(_);
          return (0, e.jsxs)("div", {
            className: Te().CtnEditor,
            ref: O,
            children: [
              !!(f && I && I > f) &&
                (0, e.jsx)(te.$n, {
                  onClick: (k) => p(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(vn, {
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
        var Za = a(81557),
          Ln = a.n(Za);
        function Ja(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const f = (0, je.pg)(
              (0, e.jsx)(ue.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Gn, { ...o }),
              }),
              window,
            );
            return () => {
              f.then((I) => I.Close());
            };
          }, [n, o]);
          const r = (0, F.q3)(() => {
              const f = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (f) {
                const I = t.mapGroupToSections.get(f);
                if (I) return $e.get(I?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, m.useState)(null),
            h = m.useCallback((f, I) => {
              d(I);
            }, []),
            u = (0, ze.w6)(h),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, y.A)(Te().CtnEditor, Ln().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)(te.$n, {
                  onClick: (f) => s(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Gn, { ...o }),
            ],
          });
        }
        function Gn(o) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = o,
            [r, i] = (0, m.useState)(null),
            [d, h, u, p] = (0, F.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(z.tH, {
            children: [
              (0, e.jsx)(te.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: h,
                onChange: (f) => {
                  if (
                    ((0, He.wT)(t, "edit model mising"),
                    (0, He.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const I = t.SetTabEnabled(s, f);
                    (0, He.wT)(
                      !!I,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(I);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!h &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(te.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (f) => t.SetTabLastCoverSectionUntilEnd(s, f),
                    }),
                    (0, e.jsx)(vn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (u || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: p,
                      nTabIndex: s,
                      classNameHeader: Ln().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var vt = a(85692);
        function Xa(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = m.useState(!1),
            [i, d] = m.useState(!1);
          m.useEffect(() => {
            vt.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const h = (0, F.q3)(() => vt.TU.Get().GetMouseOverSectionID()),
            u = t && t == h,
            p = () => vt.TU.Get().JumpToSection(t),
            f = m.useRef(null);
          return (
            (0, vt.lM)((I) =>
              t != I ? !1 : (f.current?.scrollIntoView(), d(!0), !0),
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
                  (0, e.jsx)(We.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: R().JumpToButton,
                      onClick: p,
                      children: (0, e.jsx)(mt.ffu, {}),
                    }),
                  }),
                n,
              ],
            })
          );
        }
        var $a = a(55817),
          qa = a(20557);
        function eo(o) {
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
            [f, I] = m.useState(null),
            D = (0, F.q3)(() => n.jsondata.sale_header_disable_top_margin),
            _ = to(n, u, (0, qa.TC)(!!s)),
            [O, k] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !f &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, S.yK)() == "community"
            ) {
              const re = document.getElementsByTagName("HEAD")[0],
                ie = document.createElement("style");
              (ie.innerText = (0, Jt.L$)(n.jsondata.sale_custom_css)),
                I(ie),
                re.appendChild(ie);
            }
            const Y = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, He.wT)(
                Y.length <= 1,
                "Must have at most one react_landing_background",
              ),
              Y.length >= 1 && (Y[0].style.backgroundImage = ""),
              () => {
                f && (f.remove(), I(null));
              }
            );
          }, [n, f, s]);
          const A = n?.jsondata,
            E = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(S.UF.CLANACCOUNTID),
                nAppIDVOD: Number(A?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? A?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  A?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, A, r, t],
            ),
            V = (0, F.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            U = At(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: ye().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Ae.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const Y =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              re = n.BUsesContentHubForItemSource(),
              ie = n
                .GetSaleSections()
                .some((Re) => Re.section_type === "contenthubtitle"),
              he = re && ie;
            let Ge,
              le = !0;
            Y
              ? (Ge = 0)
              : n.BUsesContentHubForItemSource()
                ? (Ge = 20)
                : n.GetEventType() == N.ajI
                  ? ((Ge = 0), (le = !1))
                  : (Ge = n.jsondata.sale_header_offset || 0);
            const ge = le && n.jsondata.sale_header_offset === 530,
              Be = !_t.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              Qe = s
                ? !O && i?.BIsBackgroundImageEnabled()
                  ? Pe.S.EPreviewMode_EditBackground
                  : Pe.S.EPreviewMode_Enabled
                : Pe.S.EPreviewMode_Disabled,
              Ue = V || n.GetEventType() != N.ajI,
              ft = re ? oe.Yo.NoTransform : oe.Yo.NoTransformSparseContent,
              kt = (0, y.A)(
                R().SaleOuterContainer,
                D && R().SaleOuterTopMargin,
                ge && R().SaleNewSizing,
                R()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                Y && R().SalePageLogoSet,
                he && R().ContentHub,
              );
            return (0, e.jsx)(z.tH, {
              children: (0, e.jsx)(ae.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(Q.Cs, {
                  location: s ? Q.HY : Q.bs,
                  children: (0, e.jsxs)(j, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      Be && (0, e.jsx)(ae.Sn, {}),
                      (0, e.jsx)(J, { eventModel: n }),
                      !!i &&
                        (Ue || U) &&
                        (0, e.jsx)(Va, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: O,
                          fnSetBackgroundImgGroupEditMode: k,
                          bShowAsValveOnly: !Ue,
                        }),
                      (0, e.jsxs)(B.Z, {
                        style: he ? void 0 : { marginTop: `${Ge || 0}px` },
                        className: kt,
                        scrollIntoViewType: ft,
                        children: [
                          (0, e.jsx)(fe, { eventModel: n, language: r }),
                          (0, e.jsx)(Ve, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(St, {
                            event: n,
                            broadcastEmbedContext: E,
                          }),
                          (0, e.jsx)(ao, {
                            ePreviewMode: Qe,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: E,
                            selectedTab: _,
                            tagSelection: _?.GetTagSelection(),
                          }),
                          !h &&
                            (0, e.jsx)(it, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Re) => {
                                Re != u &&
                                  ((n.m_overrideCurrentDay = Re), p(Re));
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
        function to(o, t, n) {
          const [s] = (0, Ye.QD)(Ke.jD, void 0),
            [r] = (0, Ye.QD)(Je.dk, void 0),
            [i] = (0, Ye.QD)(Je.NV, void 0),
            d = m.useMemo(() => {
              const I = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((D) => !D.hide);
              if (I && I.length > 0) {
                let D = s > 0 ? I.find((O) => O.unique_id == s) : void 0;
                D || (D = I[0]);
                const _ = D === I[0];
                return { selTab: D, bIsDefaultTab: _ };
              }
            }, [o, s]),
            h = (0, Je.U9)((0, Je.XL)(r, i), d?.selTab.tab_tag_filter, n),
            u = h?.strParentKey,
            p = h?.strChildKey;
          return m.useMemo(() => {
            if (!d) return;
            let f;
            u && (f = { strParentKey: u, strChildKey: p });
            const I =
              o.jsondata.sale_opt_in_page_name ||
              o.jsondata.prune_list_optin_name;
            return new ct.y(d.selTab, t, d.bIsDefaultTab, f, I);
          }, [o, t, d, u, p]);
        }
        function Bn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function no(o) {
          const {
              event: t,
              language: n,
              nSaleDayIndex: s,
              ePreviewMode: r,
              selectedTab: i,
              backgroundImageEditModel: d,
            } = o,
            [h, u] = m.useState((0, Ke.rp)()),
            p = m.useMemo(() => new Zt(), []),
            f = m.useCallback(() => u((0, Ke.rp)()), []);
          m.useEffect(
            () => (
              window.addEventListener("resize", f),
              () => window.removeEventListener("resize", f)
            ),
            [f],
          ),
            m.useEffect(() => {
              let le = "";
              const ge = () => {
                  const Be = Bn();
                  if (Be && Be != le) {
                    const Qe = document.getElementById(Be);
                    Qe && ((le = Be), Qe.scrollIntoView({ block: "start" }));
                  }
                },
                xe = setTimeout(() => ge(), 150);
              return (
                window.addEventListener("hashchange", ge),
                () => {
                  clearTimeout(xe),
                    window.removeEventListener("hashchange", ge);
                }
              );
            }, []);
          const I = (0, Ct.W6)(),
            D = (le, ge) => {
              (0, Ye.ip)(I, { ...(ge || {}), [Ke.jD]: le.toString() });
            },
            [_, O] = (0, Ye.QD)("controller"),
            [k, A] = (0, F.q3)(() => {
              const le =
                  Rt.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ge = t.GetSaleSectionIncludingFooterSections(le);
              return [
                Wt(
                  t.jsondata.sale_background_img_groups,
                  ge,
                  i && i.GetActiveTabUniqueID(),
                ),
                ge,
              ];
            });
          let E = !1;
          const V = new ct.y(void 0, s),
            U = [{ elements: [], activeTab: V }];
          let Y = null;
          const re = (0, S.Qn)(),
            ie = (0, vt.ty)(),
            he = m.useMemo(() => {
              const le = Bn();
              if (!le) return;
              const ge = A.findIndex((xe) => xe.section_anchor === le);
              return ge > -1 ? ge : void 0;
            }, [A]);
          A.forEach((le, ge) => {
            const xe = U[U.length - 1].activeTab;
            if (xe && !xe.ShouldShowSection(le)) return;
            const Be = _t.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Qe = h && !Be && !t.jsondata.content_hub_restricted_width;
            let Ue = (0, Pe.I)(le, r, t, n, re);
            if (Ue === void 0) return;
            if (!Ue)
              if ((0, qe.su)(le) && !S.iA.logged_in)
                E ||
                  ((Ue = (0, e.jsx)(qe.CC, {
                    section: le,
                    event: t,
                    language: n,
                  })),
                  (E = !0));
              else {
                const io = le.diable_tab_id_filtering
                  ? new ct.y(void 0, xe && xe.GetSaleDay())
                  : xe;
                le.section_type == "tabs" &&
                  le.tabs?.some(
                    (lo) => lo.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  U.push({ activeTab: i, elements: [] }),
                  (Ue = (0, e.jsx)($a.H, {
                    ...o,
                    section: le,
                    activeTab: io,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: D,
                    expanded: Qe,
                    controllerCategory: _,
                    setControllerCategory: O,
                  }));
              }
            ie &&
              (Ue = (0, e.jsx)(Xa, { nSectionID: le.unique_id, children: Ue }));
            const ft = U && U.length && U[U.length - 1];
            let kt = (0, e.jsx)(
              ro,
              {
                section: le,
                nActiveTabID:
                  ft && ft.activeTab && ft.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ge,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: k,
                backgroundImageEditModel: d,
                bExpanded: Qe,
                children: (0, e.jsx)(yt._, {
                  enabled: !he || ge > he,
                  children: Ue,
                }),
              },
              "SaleSectionIndex_" + le.unique_id + "_" + ge,
            );
            const Re = k.mapSectionToGroup.get(le.unique_id);
            Y &&
              Y.groupID != Re &&
              (U[U.length - 1].elements.push(
                Et(t, Y, r, i && i?.GetActiveTabUniqueID()),
              ),
              (Y = null)),
              Re
                ? (Y ||
                    (Y = {
                      groupID: Re,
                      elSaleSections: [],
                      derivedGroupInfo: k.mapGroupToSections.get(Re),
                    }),
                  Y.elSaleSections.push(kt))
                : U[U.length - 1].elements.push(kt);
          }),
            Y &&
              (U[U.length - 1].elements.push(
                Et(t, Y, r, i && i?.GetActiveTabUniqueID()),
              ),
              (Y = null));
          const Ge = U.map((le, ge) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, y.A)(
                  R().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: le.elements,
              },
              "TabSection_" + ge,
            ),
          );
          return (0, e.jsx)(B.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Ge,
          });
        }
        const ao = (0, Ct.y)(no);
        function oo(o) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = o;
          return t && n != null
            ? (0, e.jsx)(so, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function so(o) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: n,
              children: s,
            } = o,
            r = (0, rt.OM)(n);
          return (t == "hide_when_open_door_index" && r) ||
            (t == "show_when_open_door_index" && !r)
            ? null
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function Pn({ children: o, onChange: t }) {
          const n = m.useRef(null);
          return (
            (0, m.useEffect)(() => {
              t(!!m.Children.toArray(o).filter(Boolean).length);
            }, [o, t]),
            o
          );
        }
        function ro(o) {
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
              : Ke.mj + (t.unique_id || n),
            f = t.section_type != "tabs",
            [I, D] = (0, m.useState)(!0);
          return I
            ? (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(oo, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: f
                    ? (0, e.jsx)(B.Z, {
                        navKey: p,
                        id: p,
                        className: (0, y.A)({
                          [R().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [R().SaleSectionBackgroundImageGroupEdit]:
                            r == Pe.S.EPreviewMode_EditBackground,
                          [R().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Pe.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  u,
                                  (0, e.jsx)(Ya, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: d,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Pn, { onChange: D, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Pe.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, y.A)({
                                  [R().SaleSectionCtn]: !0,
                                  [R().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [R().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  u,
                                  (0, e.jsx)(Ja, {
                                    backgroundImageEditModel: d,
                                    nTabID: s,
                                    imgGroupDerivedMapping: i,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Pn, { onChange: D, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (G, ce, a) => {
        "use strict";
        a.d(ce, { qx: () => P });
        var e = a(7850),
          N = a(16412),
          B = a(18210),
          oe = a(36118),
          ae = a(90626),
          Q = a(36707),
          q = a(95695),
          ne = a.n(q),
          F = a(25792),
          m = a(64734),
          M = a.n(m),
          z = a(65946),
          se = a(11243);
        function R(y) {
          const {
              title: S,
              tooltip: Z,
              getMinimized: L,
              toggleMinimized: K,
              className: j,
              children: l,
              elAdditionalButtons: g,
            } = y,
            C = (0, z.q3)(() => L());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, Q.A)(
                  j,
                  m.SectionTitleHeader,
                  m.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, Q.A)(
                      q.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [S, !!Z && (0, e.jsx)(se.o, { tooltip: Z })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(W, { bIsMinimized: C, fnToggleMinimize: K }),
                    ],
                  }),
                ],
              }),
              !C && (0, e.jsx)(F.tH, { children: l }),
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
        function W(y) {
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
      46636: (G, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => y });
        var e = a(7850),
          N = a(90626),
          B = a(24660),
          oe = a(19298),
          ae = a(7967),
          Q = a(20169),
          q = a(90405),
          ne = a(36707),
          F = a(3166),
          m = a(51239);
        class M {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return M.s_singleton || (M.s_singleton = new M()), M.s_singleton;
          }
          constructor() {
            this.m_rgSections = (0, F.Tc)("categories", "application_config");
          }
        }
        function z() {
          const S = M.Get(),
            [Z, L] = (0, N.useState)(S.GetSections());
          return { sections: Z };
        }
        function se() {
          const { sections: S } = z(),
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
            K = (0, F.Qn)(),
            j = (0, e.jsxs)("div", {
              className: m.CategorySection,
              children: [
                (0, e.jsx)("span", {
                  className: m.CategorySectionName,
                  children: Z.name,
                }),
                (0, e.jsx)(ae.MS, {
                  className: m.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: Q.iU.MAINTAIN_X,
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
            ? j
            : (0, e.jsx)(q.K, { placeholderHeight: "150px", children: j });
        }
        function P(S) {
          const { category: Z, autoFocus: L } = S;
          return (0, e.jsx)(oe.Z, {
            focusableIfEmpty: !0,
            autoFocus: L,
            navKey: "cat_panel" + Z.name,
            children: (0, e.jsxs)(B.Ii, {
              href: F.TS.STORE_BASE_URL + Z.url,
              className: (0, ne.A)({
                [m.Category]: !0,
                [m.TopLevelCategory]: Z.is_toplevel_genre,
              }),
              children: [
                (0, e.jsx)(W, { ...S }),
                (0, e.jsx)("div", { className: m.CategoryGradient }),
                (0, e.jsx)("span", {
                  className: m.CategoryName,
                  children: (0, e.jsx)("span", { children: Z.name }),
                }),
              ],
            }),
          });
        }
        function W(S) {
          let { category: Z } = S;
          return (0, e.jsx)("div", {
            className: m.GridOuter,
            children: (0, e.jsx)("div", {
              className: m.Grid,
              children: (0, e.jsx)("img", {
                src: F.TS.STORE_BASE_URL + Z.image_url,
              }),
            }),
          });
        }
        const y = se;
      },
      17809: (G, ce, a) => {
        "use strict";
        a.d(ce, { d: () => un });
        var e = a(7850),
          N = a(19367),
          B = a(90626),
          oe = a(3685),
          ae = a(85528),
          Q = a(77495),
          q = a(18210),
          ne = a(3166),
          F = a(75779),
          m = a(80902),
          M = a(30454);
        async function z() {
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
        const se = 300 * 1e3;
        function R() {
          return ["DeckCompatCounts"];
        }
        function P() {
          return {
            queryKey: R(),
            queryFn: () => z(),
            staleTime: se,
            retry: !1,
          };
        }
        function W() {
          const { data: v } = (0, m.I)(P());
          return v;
        }
        function y(v, x) {
          switch (x) {
            case F.sd:
              return v?.playable;
            case F.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var S = a(70187),
          Z = a(45251),
          L = a(39153),
          K = a(6878),
          j = a(99412),
          l = a(72609),
          g = a(47610),
          C = a(18860),
          b = a(41635),
          J = a(25792),
          w = a(85599),
          ee = a(87805);
        const c = B.Fragment;
        function fe(v) {
          const {
              reservationPackageID: x,
              depositPackageID: T,
              bIsPreview: X,
              psuLessPackageID: H,
              strOutOfStockOverride: $,
              strDeliveryOverride: de,
              bDeliveryOverrideOnlyIfOutOfStock: Ce,
              section: be,
            } = v,
            { data: me } = (0, g.DR)(x),
            { data: we } = (0, g.DR)(H),
            ke = (0, B.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + x,
                  reservation_package: x,
                  deposit_package: T,
                  localized_reservation_desc: (0, b.$Y)([], j.bP9, null),
                  localized_out_of_stock_override: (0, b.$Y)(
                    [$ || null],
                    j.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, b.$Y)(
                    [de || null],
                    j.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!Ce,
                  psu_less_package: H,
                },
              ],
              [x, T, $, de, Ce, H],
            );
          if (!me || (H && !we))
            return (0, e.jsx)(w.t, {
              string: (0, q.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Le = !l.iA.logged_in || !me.account_restricted_from_purchasing,
            Pt =
              me.reservation_state == C.G.k_EPurchaseReservationState_Reserved
                ? me
                : void 0;
          return (0, e.jsxs)(J.tH, {
            children: [
              (0, e.jsx)(B.Suspense, {
                fallback: null,
                children: (0, e.jsx)(c, {
                  bIsPreview: !!X,
                  rgReservationDef: ke,
                }),
              }),
              !!me.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: ke[0].unique_id,
                  children: [
                    (0, e.jsx)(ee.b, {
                      reservationDef: ke[0],
                      hardwareDetail: me,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Pt,
                    }),
                    Le &&
                      (0, e.jsx)(ee.p, {
                        section: be,
                        reservationDef: ke[0],
                        hardwareDetail: me,
                        reservedHardwareDetail: Pt,
                      }),
                    we &&
                      we?.allow_purchase_in_country &&
                      (0, e.jsx)(ee.b, {
                        reservationDef: ke[0],
                        hardwareDetail: we,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function Ze(v) {
          if (v?.bDepositRequired) {
            if (
              v.rgDepositPackageInfo &&
              v.rgDepositPackageInfo?.length > 0 &&
              v.rgDepositPackageInfo.filter((x) => x.bVisible).length == 0 &&
              v?.rgReservationPackageInfo &&
              v?.rgReservationPackageInfo?.length > 0 &&
              v?.rgReservationPackageInfo.filter((x) => x.bVisible).length == 0
            )
              return !1;
          } else if (
            v?.rgReservationPackageInfo &&
            v?.rgReservationPackageInfo?.length > 0 &&
            v?.rgReservationPackageInfo.filter((x) => x.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var Ut = a(21035),
          xt = a(72865),
          ot = a(38081),
          st = a.n(ot),
          Ve = a(36707),
          Oe = a(69596),
          Rt = a(10026),
          Ct = a.n(Rt),
          Ke = a(19298),
          Je = a(11996),
          _t = a(19047),
          rt = a(36118),
          Ft = a(47689),
          St = a(89926),
          zt = a(32545),
          it = a.n(zt);
        function Ye(v) {
          const { appID: x, classOverride: T, styleOverride: X } = v,
            [H, $] = (0, B.useState)(!1),
            de = (0, Ft.m)("GameHoverFollowButton"),
            { elDialogElement: Ce, fnShowLogonDialog: be } = (0, St.l)(),
            me = (0, Je.Fh)(x),
            { mutateAsync: we } = (0, _t.L)(x, !me, void 0),
            ke = async (Le) => {
              Le.preventDefault(),
                Le.stopPropagation(),
                ne.iA.logged_in
                  ? ($(!0), await we(), de.token.reason || $(!1))
                  : be();
            };
          return (0, e.jsxs)(Ke.Z, {
            className: (0, Ve.A)(it().FollowButton, T),
            onClick: ke,
            style: X,
            children: [
              me ? (0, e.jsx)(rt.pPV, {}) : (0, e.jsx)(rt.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ve.A)(
                  it().FollowButtonText,
                  H && it().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, q.we)(
                  me ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              Ce,
            ],
          });
        }
        function Fe(v) {
          const { appid: x, color: T, bgcolor: X } = v,
            H = (0, xt.n9)();
          return (0, e.jsx)(Ye, {
            appID: x,
            classOverride: (0, Ve.A)(
              st().FollowGameButtonNotTop,
              Ct().BBCodeFollowButton,
            ),
            styleOverride: { color: T, backgroundColor: X },
          });
        }
        function ze(v) {
          const x = Number(v.args.appid);
          if (!x) return null;
          const T = (0, Oe.O)(v.args.color, "black"),
            X = (0, Oe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Fe, { appid: x, color: T, bgcolor: X });
        }
        var Dt = a(20681),
          Xe = a(18657),
          $e = a.n(Xe),
          Ht = a(63026);
        function Wt(v) {
          const { clanAccountID: x, color: T, bgcolor: X } = v;
          (0, Dt.mx)();
          const [H, $] = B.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ve.A)($e().BBCodeFollowButton, H && $e().isHovered),
            onMouseEnter: () => $(!0),
            onMouseLeave: () => $(!1),
            children: (0, e.jsx)(Ht.Q, {
              nCreatorAccountID: x,
              classOverride: st().FollowGameButtonNotTop,
              styleOverride: { color: T, backgroundColor: X },
              followType: "group",
            }),
          });
        }
        function pe(v) {
          const { event: x } = v.context,
            T = Number(v.args.groupid) || x?.clanSteamID.GetAccountID();
          if (!T) return null;
          const X = (0, Oe.O)(v.args.color, "black"),
            H = (0, Oe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Wt, { clanAccountID: T, color: X, bgcolor: H });
        }
        var Vt = a(83482),
          jt = a(44267),
          lt = a(9202),
          Pe = a.n(lt),
          Et = a(29522);
        function Kt(v) {
          const { appid: x, color: T, bgcolor: X } = v,
            H = (0, xt.n9)(),
            $ = (0, Et.$5)(x),
            de = (0, Vt.L3)(H);
          return (0, e.jsx)("div", {
            className: Pe().WishlistHoverCtn,
            children: (0, e.jsx)(jt.E, {
              snr: de,
              id: $,
              classOverride: (0, Ve.A)(
                st().WishlistButtonNotTop,
                Pe().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: T, backgroundColor: X },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Yt(v) {
          const x = Number(v.args.appid);
          if (!x) return null;
          const T = (0, Oe.O)(v.args.color, "black"),
            X = (0, Oe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Kt, { appid: x, color: T, bgcolor: X });
        }
        let qe = null;
        function ct() {
          return (
            qe == null &&
              (qe = new Map([
                ["wishlist", { Constructor: Yt, autocloses: !1 }],
                ["followgroup", { Constructor: pe, autocloses: !1 }],
              ])),
            qe
          );
        }
        var Qt = a(37656),
          ye = a(29868),
          Ae = a(24642);
        function bt(v) {
          return v < 10 ? "0" + v : v;
        }
        function Zt(v) {
          const { giveawayid: x } = v,
            T = (0, Qt.w)(x),
            {
              bLoadingGiveawayInfo: X,
              winner_count: H,
              closed: $,
              seconds_until_drawing: de,
            } = T;
          return X
            ? null
            : (0, e.jsxs)("div", {
                className: ye.countdownCtn,
                children: [
                  !!$ &&
                    (0, e.jsx)("div", {
                      className: ye.Closed,
                      children:
                        H > 0
                          ? (0, q.we)("#Giveaway_Closed", (0, Ae.D)(H))
                          : (0, q.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !$ &&
                    (0, e.jsxs)(B.Fragment, {
                      children: [
                        de <= 0
                          ? (0, e.jsxs)("div", {
                              className: ye.Throbber,
                              children: [
                                (0, e.jsx)(w.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, q.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: ye.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: ye.CountDownTime,
                                  children:
                                    bt(Math.floor(de / 60)) + ":" + bt(de % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: ye.CountDownText,
                                  children: [
                                    (0, q.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, q.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        H > 0 &&
                          (0, e.jsxs)("div", {
                            className: ye.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: ye.WinnerCount,
                                children: (0, Ae.D)(H),
                              }),
                              (0, e.jsx)("div", {
                                className: ye.WinnerText,
                                children: (0, q.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var He = a(57646);
        function Jt(v) {
          const x = Number(v.args.packageid);
          return x
            ? (0, e.jsx)(He.eF, {
                packageID: x,
                display_style: (0, He._w)(v.args.display),
              })
            : null;
        }
        function yt(v) {
          const x = Number(v.args.packageid),
            T = Number(v.args.compareid);
          return !x || !T
            ? null
            : (0, e.jsx)(He.hJ, { packageID: x, compareID: T });
        }
        var Xt = a(88245),
          At = a(35702),
          $t = a(16412),
          te = a(92757),
          ue = a(39256),
          je = a(4720),
          qt = a(75110),
          dt = a(57810),
          gt = a(36631),
          en = a(55817),
          wt = a(81416);
        function tn(v) {
          const { eventModel: x, nEventBadgeID: T } = v,
            X = (0, At.fy)(T);
          if (X?.level > 0) {
            let H = X.level;
            if (x?.BHasSaleEnabled()) {
              const $ = x.GetSaleSectionsByType("badge_progress");
              if ($?.length == 1) {
                const de = $[0].badge_progress;
                if (de?.event_badgeid == T && de?.granted_by_discovery_queue) {
                  const Ce = de.levels[de.levels.length - 1].level;
                  return (0, e.jsx)(We, {
                    eventModel: x,
                    nBadgeLevel: H,
                    nMaxLevel: Ce,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Ae.D)(H),
            });
          }
          return null;
        }
        function We(v) {
          const { eventModel: x, nBadgeLevel: T, nMaxLevel: X } = v,
            H = B.useMemo(() => {
              const me = x
                .GetSaleSections()
                .filter((we) => we.section_type == "discoveryqueue");
              return me?.length > 0 ? me[0] : null;
            }, [x]),
            { storePageFilter: $, eStoreDiscoveryQueueType: de } = B.useMemo(
              () => (0, qt.lx)(x, H),
              [x, H],
            ),
            Ce = (0, dt.Uf)(de, $),
            be = Math.min(T + Ce, X);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Ae.D)(be),
          });
        }
        function nn(v) {
          const { event: x } = v.context,
            T = Number.parseInt((0, S.j$)(v.args, "eventid"));
          return ne.iA.logged_in && T
            ? (0, e.jsx)(tn, { nEventBadgeID: T, eventModel: x })
            : null;
        }
        function et(v) {
          const { nDoorIndex: x, children: T } = v,
            X = (0, L.OM)(x),
            H = (0, L.gP)(),
            [$, de] = B.useState(!1),
            [Ce, be] = B.useState(!1),
            { elDialogElement: me, fnShowLogonDialog: we } = (0, St.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($t.$n, {
                disabled: X,
                onClick: (ke) => {
                  $ ||
                    (ne.iA.logged_in
                      ? (de(!0),
                        H({ iDoorIndex: x })
                          .then((Le) => {
                            Le || be(!0), de(!1);
                          })
                          .catch(() => {
                            be(!0), de(!1);
                          }))
                      : we());
                },
                children: Ce
                  ? (0, e.jsx)("div", {
                      children: (0, q.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!$ && (0, e.jsx)(w.t, { size: "small" }),
                        !!X && (0, e.jsx)(rt.Jlk, {}),
                        T,
                      ],
                    }),
              }),
              me,
            ],
          });
        }
        function an(v) {
          const x = Number.parseInt((0, S.j$)(v.args)) || 0;
          return x >= 0 && x < 32
            ? (0, e.jsx)(et, { nDoorIndex: x, children: v.children })
            : null;
        }
        const on = (0, te.y)(en.H);
        function sn(v) {
          const x = Number.parseInt((0, S.j$)(v.args)),
            { event: T, showErrorInfo: X } = v.context;
          if (x) {
            const H = T?.jsondata?.sale_sections?.findIndex(
              ($) => $.unique_id == x,
            );
            if (H >= 0) {
              const $ = T.GetDayIndexFromEventStart();
              return (0, e.jsx)(gt.Cs, {
                location: X ? gt.HY : gt.bs,
                children: (0, e.jsx)(on, {
                  event: T,
                  section: T.jsondata.sale_sections[H],
                  activeTab: new je.y(null, $),
                  language: v.language,
                  nSaleDayIndex: $,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: X
                    ? wt.S.EPreviewMode_Enabled
                    : wt.S.EPreviewMode_Disabled,
                }),
              });
            } else if (X)
              return (0, e.jsxs)("div", {
                className: ue.ErrorDiv,
                children: ["Error could not find sale section ", x],
              });
          }
          return null;
        }
        let ut = null;
        function rn() {
          return (
            ut == null &&
              (ut = new Map([
                ...Array.from(ct().entries()),
                [
                  "itemdef",
                  {
                    Constructor: ln,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: ze, autocloses: !1 }],
                ["deckcompatcount", { Constructor: Te, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: cn, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: dn, autocloses: !1 }],
                ["price", { Constructor: Jt, autocloses: !1 }],
                ["pricesavings", { Constructor: yt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Lt, autocloses: !1 }],
                ["chooseaccount", { Constructor: Gt, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: nn, autocloses: !1 }],
                ["optindoorquest", { Constructor: an, autocloses: !1 }],
                ["classname", { Constructor: Ee, autocloses: !1 }],
                ["localize", { Constructor: Bt, autocloses: !1 }],
                ["salesection", { Constructor: sn, autocloses: !1 }],
                ["reservationbutton", { Constructor: gn, autocloses: !1 }],
              ])),
            ut
          );
        }
        function ln(v) {
          const { event: x } = v.context,
            T = Number.parseInt((0, S.j$)(v.args, "appid")),
            X = Number.parseInt((0, S.j$)(v.args, "itemdefid")),
            H = Number.parseInt((0, S.j$)(v.args, "maxquantity")),
            $ = (0, S.j$)(v.args, "calltoaction");
          return !(0, Xt.gS)(T, X, !1) || !x
            ? (0, e.jsx)(w.t, {
                size: "small",
                position: "center",
                string: (0, q.we)("#Loading"),
              })
            : (0, e.jsx)(Ut.f, {
                language: v.language,
                clanAccountID: x.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: T, nItemDefID: X, max_quantity: H },
                strCallToAction: $,
              });
        }
        function Te(v) {
          const x = W();
          if (!x) return (0, e.jsx)(w.t, { size: "small" });
          const T = Number.parseInt((0, S.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Ae.D)(Number(y(x, T))) });
        }
        function cn(v) {
          const x = (0, Z.jR)(ne.iA.accountid, "library");
          if (!x) return (0, e.jsx)(w.t, { size: "small" });
          const T = Number.parseInt((0, S.j$)(v.args));
          let X = x.verifiedList?.length || 0;
          switch (T) {
            case F.sd:
              X = x.playableList?.length || 0;
              break;
            case F.V8:
              X = x.unsupportedList?.length || 0;
              break;
            case F.YX:
              X = x.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Ae.D)(Number(X)) });
        }
        function Lt(v) {
          const x = Number.parseInt((0, S.j$)(v.args)),
            T =
              "hide" in v.args && !!Number.parseInt((0, S.j$)(v.args, "hide"));
          return x >= 0
            ? (0, e.jsx)(Me, { nDoorIndex: x, bHide: T, children: v.children })
            : null;
        }
        function Me(v) {
          const { nDoorIndex: x, bHide: T, children: X } = v,
            H = (0, L.OM)(x);
          return H == null
            ? null
            : (H && !T) || (!H && T)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function Gt(v) {
          if (ne.iA.logged_in) {
            const x = Number.parseInt((0, S.j$)(v.args)),
              T = Number.parseInt((0, S.j$)(v.args, "mod"));
            if (T > 0 && x < T && ne.iA.accountid % T == x) return v.children;
          }
          return null;
        }
        function Ee(v) {
          const x = (0, S.j$)(v.args);
          return x?.trim().length > 0
            ? (0, e.jsx)("div", { className: x.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function Bt(v) {
          return (0, e.jsx)("span", {
            className: K.LocalizeBlock,
            children: (0, q.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function dn(v) {
          let x = (0, S.j$)(v.args);
          return x
            ? (0, e.jsx)(Zt, { giveawayid: x })
            : (0, e.jsx)(B.Fragment, {});
        }
        function gn(v) {
          const { showErrorInfo: x, event: T } = v.context,
            X = Number.parseInt((0, S.j$)(v.args)),
            H = B.useMemo(() => {
              if (T)
                return T.jsondata.sale_sections?.find(
                  ($) =>
                    $.section_type == "vo_internal" &&
                    ($.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      $.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [T]);
          if (X && H) {
            const $ = Number.parseInt((0, S.j$)(v.args, "depositpackageid")),
              de = Number.parseInt((0, S.j$)(v.args, "psulesspackageid")),
              Ce = (0, S.j$)(v.args, "out_of_stock_override"),
              be = (0, S.j$)(v.args, "delivery_override"),
              me = (0, S.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(fe, {
              section: H,
              reservationPackageID: X,
              depositPackageID: $,
              psuLessPackageID: de,
              strOutOfStockOverride: Ce,
              strDeliveryOverride: me || be,
              bDeliveryOverrideOnlyIfOutOfStock: !!me,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var tt = a(71698),
          Ne = a(94520);
        function un(v) {
          const { bSalePage: x } = v,
            [T, X] = B.useState(!1);
          return (
            (0, tt.H)(T, x),
            B.useEffect(() => {
              ae.Vw.Init(new oe.D(ne.TS.WEBAPI_BASE_URL)), Q.O3.Init(), X(!0);
            }, []),
            B.useEffect(() => {
              const H = (0, q.l4)();
              H && N.locale(H);
            }, []),
            T
              ? x
                ? (0, e.jsx)(Ne.d3, { dictionary: rn(), children: v.children })
                : v.children
              : null
          );
        }
      },
      11811: (G, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => y });
        var e = a(7850),
          N = a(71698),
          B = a(90626),
          oe = a(73259),
          ae = a(76559),
          Q = a(77495),
          q = a(25679),
          ne = a(64641),
          F = a.n(ne),
          m = a(85599),
          M = a(18210),
          z = a(3166),
          se = a(17809),
          R = a(85692),
          P = a(41032),
          W = a(51079);
        function y(L) {
          const { eventModel: K } = L;
          return (0, e.jsx)(se.d, {
            bSalePage: !0,
            children: (0, e.jsx)(S, { ...L, overrideEventModel: K }),
          });
        }
        function S(L) {
          const { promotionName: K, language: j, overrideEventModel: l } = L,
            [g, C] = B.useState(
              l ?? Q.O3.GetClanEventFromAnnouncementGID(z.P9.ANNOUNCEMENT_GID),
            );
          B.useEffect(() => {
            if (!l && g?.AnnouncementGID != z.P9.ANNOUNCEMENT_GID) {
              const c = new ae.b(z.UF.CLANSTEAMID);
              Q.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                c,
                z.P9.ANNOUNCEMENT_GID,
                null,
              ).then(C);
            }
          }, [g, l]);
          const J = (0, R.D2)() ?? g,
            w = (0, R.ty)();
          if (((0, N.s)(1500), !J))
            return (0, e.jsx)("div", {
              className: F().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, M.we)("#Loading"),
              }),
            });
          const ee =
            (J.visibility_state !== oe.zv.k_EEventStateVisible &&
              J.visibility_state !== oe.zv.k_EEventStateUnlisted) ||
            w;
          return (0, e.jsx)(Z, {
            eventModel: J,
            children: (0, e.jsx)(W.oJ, {
              children: (0, e.jsx)(W.Ay, {
                curator_clanid: J?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(q._, {
                  promotionName: K,
                  language: j,
                  eventModel: J,
                  bIsPreview: ee,
                }),
              }),
            }),
          });
        }
        function Z(L) {
          const { eventModel: K, children: j } = L,
            l = K.GetContentHubType() == "adultonly";
          return (0, e.jsx)(P.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: j,
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
      44894: (G, ce, a) => {
        "use strict";
        a.d(ce, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
