/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [83276],
    {
      94381: (G, ce, a) => {
        "use strict";
        a.d(ce, { S: () => z });
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
        var ne = a(21895),
          V = a(64238),
          X = a.n(V),
          $ = a(80549);
        function z(F) {
          const {
              checked: oe,
              onChange: w,
              disabled: B,
              children: H,
              ref: y,
              variant: b,
              color: se,
              align: N = "center",
              icon: Q,
              ...E
            } = F,
            l = oe === "indeterminate",
            g = Q ?? (l ? O : ae),
            _ = () => {
              B || (w && w(l ? !0 : !oe));
            },
            j = (P) => {
              B ||
                (P.key === " " &&
                  (_(), P.preventDefault(), P.stopPropagation()));
            },
            Z = (0, $.f)("Checkbox", b);
          return (0, e.jsxs)(U.s, {
            align: N,
            ref: y,
            role: "checkbox",
            "aria-checked": l ? "mixed" : oe,
            "data-state": m(oe),
            className: X()(ne.Root, ne[`Variant-${Z}`], B && ne.Disabled),
            onClick: _,
            tabIndex: 0,
            onKeyDown: j,
            cursor: "default",
            "aria-disabled": B,
            "data-accent-color": se,
            ...E,
            children: [
              (0, e.jsx)("div", {
                className: ne.Checkbox,
                children: oe && (0, e.jsx)(g, { className: ne.Icon }),
              }),
              H,
            ],
          });
        }
        function m(F) {
          return F === "indeterminate" ? F : F ? "checked" : "unchecked";
        }
        function O(F) {
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
          ne = a.n(ae);
        function V(O) {
          return (0, e.jsx)("svg", { ...z(O) });
        }
        const X = [
          ...A.L,
          {
            prop: "size",
            responsive: !0,
            className: (O) => ae[`IconSize-${O}`],
          },
          {
            prop: "color",
            className: ae.Color,
            cssProperty: (O) => ["--icon-color", $(O)],
          },
          {
            prop: "hitSlop",
            className: ae.HitSlop,
            cssProperty: (O) => [
              "--hit-slop-custom",
              typeof O == "string" ? O : "",
            ],
          },
          A.h.find(({ prop: O }) => O === "cursor"),
        ];
        function $(O) {
          return !O || O[0] === "#" ? O : (0, U.w7)(O);
        }
        function z(O) {
          const { viewBox: F, ...oe } = O,
            B = { className: oe.size ? void 0 : ae.IconSizeDefault, ...oe };
          return F && (B.viewBox = m(F)), (0, U.mz)(B, X);
        }
        function m(O) {
          if (O)
            return typeof O == "number"
              ? `0 0 ${O} ${O}`
              : typeof O == "string"
                ? O
                : `0 0 ${O.width} ${O.height}`;
        }
      },
      71698: (G, ce, a) => {
        "use strict";
        a.d(ce, { H: () => ae, s: () => ne });
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
        function ne(V) {
          const [X, $] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const z = window.setTimeout(() => $(!0), V);
            return () => window.clearTimeout(z);
          }, [V]),
            ae(X);
        }
      },
      85528: (G, ce, a) => {
        "use strict";
        a.d(ce, { Vw: () => Q });
        var e = a(14947),
          U = a(99412),
          A = a(72604),
          ae = a(35038),
          ne = a(67529),
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
              j = this.GetTokenList(_),
              Z = _ != "english" ? this.GetTokenList("english") : null;
            return $(l, j, Z, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let _ = V.TS.LANGUAGE,
              j = this.GetTokenList(_),
              Z = _ != "english" ? this.GetTokenList("english") : null;
            return z(l, j, Z, this.m_appid, g);
          }
        }
        function $(E, l, g, _, j) {
          if (!E.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                E,
                "appid",
                _,
                "tokens",
                l,
              ),
              ""
            );
          let Z = E;
          E = E.toLowerCase();
          let P = "";
          if (
            (l && l.has(E) && (P = l.get(E)),
            !P && g && g.has(E) && (P = g.get(E)),
            P)
          )
            P = z(P, l, g, _, j);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                _,
                Z,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && V.TS.EUNIVERSE != U.wLO)
          )
            return E;
          return P;
        }
        function z(E, l, g, _, j) {
          let Z = /{[A-za-z0-9_%#:]+}/g,
            P = E.match(Z);
          if (P)
            for (let ee of P) {
              let c = ee.slice(1, -1),
                fe = m(c, j),
                Ze = $(fe, l, g, _, j);
              if (!Ze) return "";
              E = E.replace(ee, Ze);
            }
          return (E = m(E, j)), E;
        }
        function m(E, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            _ = E.match(g);
          if (_)
            for (let j of _) {
              let Z = j.slice(1, -1).toLowerCase(),
                P = l.get(Z);
              P == null
                ? console.log("No rich presence found for", Z)
                : (E = E.replace(j, P));
            }
          return E;
        }
        var O = a(72849),
          F = a(71742),
          oe = a(8323),
          w = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          H = (E, l, g, _) => {
            for (
              var j = _ > 1 ? void 0 : _ ? B(l, g) : l, Z = E.length - 1, P;
              Z >= 0;
              Z--
            )
              (P = E[Z]) && (j = (_ ? P(l, g, j) : P(j)) || j);
            return _ && j && w(l, g, j), j;
          };
        function y(E) {
          return useObserver(() => Q.GetAppInfo(E));
        }
        function b(E) {
          return useObserver(() => E.map((l) => Q.GetAppInfo(l)));
        }
        const se = 3600 * 24 * 7 * 2;
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
              let g = new ne.by(l);
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
              let _ = ae.w.Init(O._z);
              _.Body().set_language((0, U.sfN)(V.TS.LANGUAGE));
              const j = 50;
              for (; g.length > 0; ) {
                const Z = Math.min(j, g.length),
                  P = g.slice(0, Z);
                (g = g.slice(Z)), _.Body().set_appids(P);
                const ee = await O.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                );
                ee.GetEResult() == A.R
                  ? this.OnGetAppsResponse(ee)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${ee.GetEResult()}, AppIDs:`,
                      P,
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
              let j = this.m_mapAppInfo.get(_.appid());
              (0, F.wT)(
                j,
                `Got AppInfo response for unrequested AppID: ${_.appid()}`,
              ),
                j &&
                  ((j = new ne.by(_.appid())),
                  j.DeserializeFromMessage(_),
                  this.m_mapAppInfo.set(_.appid(), j),
                  g.push(j));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const _ = new ne.by(g.appid());
              _.DeserializeFromAppOverview(g),
                _.is_initialized && this.m_mapAppInfo.set(g.appid(), _);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((_) => {
                let j = this.m_mapAppInfo.get(_);
                if (j) {
                  j.is_valid || (g = !0);
                  return;
                }
                (j = new ne.by(_)),
                  this.m_mapAppInfo.set(_, j),
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
            const g = new Date(new Date().getTime() - se * 1e3),
              _ = async (ee) => {
                const c = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(ee),
                );
                if (!c) return ee;
                let fe = this.m_mapAppInfo.get(ee);
                return (
                  (0, F.wT)(
                    fe,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  fe
                    ? ((fe = new ne.by(ee)),
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
            let j = l.map((ee) => _(ee));
            return (await Promise.all(j)).filter((ee) => ee !== null);
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
            const j = this.GetRichPresenceLoc(l);
            return j
              ? j.Localize(g, _)
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
                _.m_nLastUpdated + 1e3 * 60 * ne.IU < Date.now() &&
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
              let j = _.language(),
                Z = l.m_mapLanguages.get(j);
              Z
                ? Z.clear()
                : (l.m_mapLanguages.set(j, new Map()),
                  (Z = l.m_mapLanguages.get(j)));
              for (let P of _.tokens())
                Z?.set(P.name().toLowerCase(), P.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = ae.w.Init(O.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(V.TS.LANGUAGE),
                      O.BE.GetAppRichPresenceLocalization(
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
        H([e.XI], N.prototype, "OnGetAppsResponse", 1),
          H([e.XI], N.prototype, "OnRichPresenceLocUpdate", 1);
        const Q = new N();
      },
      50109: (G, ce, a) => {
        "use strict";
        a.d(ce, { E: () => oe, O: () => F });
        var e = a(14947),
          U = a(65946),
          A = a(99412),
          ae = a(41635),
          ne = a(27066),
          V = a(3166),
          X = a(38585),
          $ = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          m = (w, B, H, y) => {
            for (
              var b = y > 1 ? void 0 : y ? z(B, H) : B, se = w.length - 1, N;
              se >= 0;
              se--
            )
              (N = w[se]) && (b = (y ? N(B, H, b) : N(b)) || b);
            return y && b && $(B, H, b), b;
          };
        const O = class It {
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
            B.forEach((H, y) => {
              this.m_rgHasData[y] != H && (this.m_rgHasData[y] = H);
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
              It.s_globalSingletonStore ||
                (It.s_globalSingletonStore = new It()),
              It.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], O.prototype, "m_eCurLang", 2),
          m([e.sH], O.prototype, "m_rgHasData", 2),
          m([e.sH], O.prototype, "m_bHasLocalizationContext", 2),
          m([ne.o], O.prototype, "GetCurEditLanguage", 1),
          m([ne.o], O.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], O.prototype, "SetHasLanguage", 1),
          m([ne.o], O.prototype, "BHasLanguageData", 1);
        let F = O;
        function oe() {
          return (0, U.q3)(() => F.Get().GetCurEditLanguage());
        }
      },
      37656: (G, ce, a) => {
        "use strict";
        a.d(ce, { w: () => Q });
        var e = a(41735),
          U = a.n(e),
          A = a(14947),
          ae = a(65946),
          ne = a(90626),
          V = a(27066),
          X = a(8323),
          $ = a(30096),
          z = a(3166),
          m = Object.defineProperty,
          O = Object.getOwnPropertyDescriptor,
          F = (E, l, g, _) => {
            for (
              var j = _ > 1 ? void 0 : _ ? O(l, g) : l, Z = E.length - 1, P;
              Z >= 0;
              Z--
            )
              (P = E[Z]) && (j = (_ ? P(l, g, j) : P(j)) || j);
            return _ && j && m(l, g, j), j;
          };
        const oe = class Tn {
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
        F([A.sH], oe.prototype, "giveaway_id", 2),
          F([A.sH], oe.prototype, "seconds_until_drawing", 2),
          F([A.sH], oe.prototype, "rtime_start", 2),
          F([A.sH], oe.prototype, "rtime_end", 2),
          F([A.sH], oe.prototype, "closed", 2),
          F([A.sH], oe.prototype, "winner_count", 2);
        let w = oe;
        const B = class at {
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
            let _ = z.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              j = null,
              Z = { origin: self.origin };
            return (
              (j = await U().get(_, { params: Z })),
              (0, A.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(l) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, new w()),
                  this.CopyToGiveaway(
                    j.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(l),
                  ),
                  g !== void 0)
                ) {
                  const P = this.GetKey(l, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(P) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      P,
                      new w(),
                    ),
                    this.CopyToGiveaway(
                      j.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(P),
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
              let l = (0, z.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new w();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        F([A.sH], B.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          F([A.XI], B.prototype, "CopyToGiveaway", 1);
        let H = B;
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
              let _ =
                l.seconds_until_drawing <= 0 && l.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, _);
            }
          }
          SetupCountDown(l, g) {
            l > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        F([V.o], y.prototype, "ClearRefreshInterval", 1),
          F([V.o], y.prototype, "ClearCountDown", 1),
          F([V.o], y.prototype, "SetupRefreshDataInterval", 1),
          F([V.o], y.prototype, "SetupCountDown", 1);
        let b = y;
        function se(E, l) {
          const g = H.Get().GetInfoByInstance(E, l.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown();
        }
        function N(E, l) {
          const g = H.Get().GetInfoByInstance(E, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            H.Get()
              .ReloadGiveaway(E, l.m_myInstanceNumber)
              .then((_) => {
                l.SetupCountDown(_.seconds_until_drawing, () => se(E, l));
              }));
        }
        function Q(E) {
          const [l] = (0, ne.useState)(new b()),
            g = (0, $.CH)();
          (0, ne.useEffect)(
            () => (
              H.Get()
                .ReloadGiveaway(E, l.m_myInstanceNumber)
                .then((ee) => {
                  l.SetupRefreshDataInterval(ee, () => N(E, l)),
                    l.SetupCountDown(ee.seconds_until_drawing, () => se(E, l)),
                    g();
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, E, g],
          );
          const _ = H.Get().GetInfoByInstance(E, l.m_myInstanceNumber),
            [j, Z, P] = (0, ae.q3)(() => [
              _?.winner_count,
              _?.closed,
              _?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_ || _.giveaway_id == null || !_.BStarted() || j === void 0,
            winner_count: j,
            closed: Z,
            seconds_until_drawing: P,
          };
        }
      },
      21042: (G, ce, a) => {
        "use strict";
        a.d(ce, { Sm: () => X, U: () => ne, r3: () => z });
        var e = a(99412),
          U = a(72609),
          A = a(73259),
          ae = a(76559);
        function ne(m, O, F, oe) {
          const w = new A.lh();
          return (
            (w.type = O),
            (w.clanSteamID = new ae.b(m, U.TS.EUNIVERSE, e.P3F, 0)),
            (w.GID = "fakeevent_" + V++),
            (w.visibility_state = A.zv.k_EEventStateUnlisted),
            (w.visibilityStartTime = oe - 1),
            (w.jsondata.bSaleEnabled = !0),
            (w.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (w.jsondata.sale_vanity_id = F),
            (w.jsondata.sale_header_offset = 0),
            (w.jsondata.sale_header_disable_top_margin = !1),
            w
          );
        }
        let V = 1234;
        function X(m, O) {
          return {
            unique_id: V++,
            capsules: [],
            events: [],
            links: [],
            section_type: m,
            localized_label: [],
            default_label: O,
          };
        }
        const $ = "socialcontent_";
        function z() {
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
        a.d(ce, { r: () => oe, z: () => O });
        var e = a(7850),
          U = a(90626),
          A = a(16412),
          ae = a(25792),
          ne = a(96538),
          V = a(18210),
          X = a(85599),
          $ = a(17618),
          z = a.n($),
          m = a(53424);
        const O = (w) => {
            const { clanSteamID: B, fnImageSelectCallBack: H } = w,
              [y, b] = (0, U.useState)(""),
              se = (0, m.mr)(w.clanSteamID.GetAccountID()),
              N = () => w.closeModal && w.closeModal(),
              Q = m.pU.GetFilteredClanImages(B, y),
              E = (l) => {
                H(l), N();
              };
            return (0, e.jsx)(ae.tH, {
              children: (0, e.jsx)(ne.x_, {
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
                            value: y,
                            onChange: (l) => b(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: $.ImagesOuterContainer,
                            children: se
                              ? (0, e.jsx)(X.t, {
                                  size: "medium",
                                  string: (0, V.we)("#Loading"),
                                })
                              : Q.length > 0
                                ? Q.map((l) =>
                                    (0, e.jsx)(
                                      F,
                                      {
                                        clanImage: l,
                                        searchStringHilight: y,
                                        fnImageClick: E,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : y.trim().length == 0
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
          F = (w) => {
            const { clanImage: B, searchStringHilight: H, fnImageClick: y } = w;
            let b = B.file_name ? B.file_name : "",
              se = oe(H, b, String(B.imageid), $.Hilight);
            return (0, e.jsxs)("div", {
              className: $.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: $.Image,
                  style: { backgroundImage: `url( '${B.thumb_url}' )` },
                  onDoubleClick: () => y(B),
                }),
                (0, e.jsx)("div", {
                  className: $.ImageFilename,
                  title: b,
                  children: se,
                }),
              ],
            });
          };
        function oe(w, B, H, y) {
          let b = [];
          if (w.length > 0) {
            let se = B.toLocaleLowerCase();
            for (let N = 0; N < B.length; ) {
              let Q = se.indexOf(w, N);
              if (Q < 0) {
                b.push(
                  (0, e.jsx)(
                    "span",
                    { children: B.substring(N) },
                    H + "_" + String(N),
                  ),
                );
                break;
              } else
                N < Q &&
                  b.push(
                    (0, e.jsx)(
                      "span",
                      { children: B.substring(N, Q) },
                      H + "_" + String(N),
                    ),
                  ),
                  b.push(
                    (0, e.jsx)(
                      "span",
                      { className: y, children: B.substr(Q, w.length) },
                      H + "_" + String(N),
                    ),
                  ),
                  (N = Q + w.length);
            }
          } else b.push((0, e.jsx)("span", { children: B }, H + "_null"));
          return b;
        }
      },
      24806: (G, ce, a) => {
        "use strict";
        a.d(ce, { Ng: () => y });
        var e = a(7850),
          U = a(75844),
          A = a(90626),
          ae = a(99412),
          ne = a(32093),
          V = a(50109),
          X = a(95695),
          $ = a.n(X),
          z = a(36707),
          m = a(18210),
          O = a(92264),
          F = a(30096),
          oe = a(71421),
          w = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          H = (N, Q, E, l) => {
            for (
              var g = l > 1 ? void 0 : l ? B(Q, E) : Q, _ = N.length - 1, j;
              _ >= 0;
              _--
            )
              (j = N[_]) && (g = (l ? j(Q, E, g) : j(g)) || g);
            return l && g && w(Q, E, g), g;
          };
        let y = class extends A.Component {
          GenerateLanguageOptions() {
            let N = [];
            const {
              fnFilterLanguage: Q,
              fnLangHasData: E,
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
            const j = this.props.realms || [ne.TU.k_ESteamRealmGlobal];
            for (const P of m.A0.GetLanguageListForRealms(j)) {
              if (Q && !Q(P)) continue;
              const ee = (0, ae.LgB)(P),
                c = (0, m.we)("#Language_" + ee),
                fe = !!(g && g(P));
              _.push({ eLang: P, sLocName: c, bSupported: fe });
            }
            _.sort((P, ee) =>
              P.bSupported != ee.bSupported
                ? P.bSupported
                  ? -1
                  : 1
                : P.sLocName.localeCompare(ee.sLocName),
            );
            let Z = !1;
            for (const P of _) {
              P.bSupported != Z &&
                (N.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: $().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        P.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    P.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Z = P.bSupported));
              const ee = E && E(P.eLang),
                c = l && l(P.eLang);
              let fe = P.sLocName;
              c &&
                c !== 0 &&
                ((fe += " "),
                (fe += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(c) +
                    " @ " +
                    (0, O.KC)(c, { bForce24HourClock: !1 }),
                ))),
                N.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: P.eLang,
                      className: (0, z.A)(
                        { [$().LanguageWithContent]: ee },
                        P.bSupported
                          ? $().SupportedLanguage
                          : $().UnsupportedLanguage,
                      ),
                      children: fe,
                    },
                    "langpicker" + P.eLang + (ee ? "_hasdata" : ""),
                  ),
                );
            }
            return N;
          }
          OnLanguageChange(N) {
            const { fnOnLanguageChanged: Q, selectedLang: E } = this.props;
            let l = Number.parseInt(N.currentTarget.value);
            l != E && Q && Q(l);
          }
          render() {
            const { selectedLang: N, bDisabled: Q, strTooltip: E } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(oe.he, {
              toolTipContent: E,
              children: (0, e.jsx)("select", {
                value: N,
                onChange: this.OnLanguageChange,
                disabled: Q,
                children: l,
              }),
            });
          }
        };
        H([F.oI], y.prototype, "OnLanguageChange", 1), (y = H([U.PA], y));
        function b(N) {
          const [Q, E] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(y, {
            selectedLang: E,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !Q,
            strTooltip: Q ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function se(N) {
          const { fnLangHasData: Q } = N;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const E = useObserver(() => {
            const l = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              l[g] = !!(Q && Q(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(E), [E]),
            jsx(Fragment, {})
          );
        }
      },
      25679: (G, ce, a) => {
        "use strict";
        a.d(ce, { _: () => eo });
        var e = a(7850),
          U = a(99412),
          A = a(19298),
          ae = a(20169),
          ne = a(28604),
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
        var z = a(65946),
          m = a(90626),
          O = a(73259),
          F = a(25792),
          oe = a(52393),
          w = a.n(oe),
          B = a(95695),
          H = a.n(B),
          y = a(36707),
          b = a(3166),
          se = a(82054),
          N = a(68266);
        function Q(o) {
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
                  className: (0, y.A)(
                    w().SaleBackground,
                    w()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    w().fullscreen_bg_video,
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
        function E(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, N.m0)(t, "sale_header", n),
            [h] = (0, z.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!d) return;
            const I = new Image();
            (I.onload = () => {
              const C = (100 * I.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", C);
            }),
              (I.src = d);
          }, [d]);
          const u = t.jsondata.sale_sections?.some(
              (I) => I.section_type === "contenthubmaincarousel",
            ),
            p =
              t.jsondata.item_source_type === O.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                u),
            f = d ? `url(${d})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              h
                ? (0, e.jsx)(se.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: h,
                    styleVariation: se.g.k_SubMenu,
                  })
                : (0, e.jsx)($, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, y.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, y.A)(
                    w()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    w().SaleBackground,
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
                            H().SalePageBackground,
                            H().BackgroundImage,
                            H().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, y.A)(
                            H().SalePageBackground,
                            H().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: f,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(Q, { event: t, bIsPreview: r }),
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
          j = a.n(_);
        function Z(o) {
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
              className: j().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: j().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: j().WarningText,
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
        var P = a(76789),
          ee = a.n(P),
          c = a(18210);
        function fe(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, z.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: ee().SalePageLogoCtn,
                  href: b.TS.STORE_BASE_URL + s,
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
            s = (0, N.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var kt = a(72865),
          xt = a(71347),
          ot = a.n(xt),
          st = a(53107);
        function Ke(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, U.sfN)(b.TS.LANGUAGE);
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
            s = (0, kt.aL)(t.url);
          return (0, e.jsx)(st.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: ot().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Nt = a(60480),
          _t = a(92757),
          Ve = a(18994),
          Je = a(56412),
          Ct = a(86515),
          rt = a(39153),
          Ft = a(61478);
        function Dt(o) {
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
          Et = a(98609),
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
              (o.groups?.forEach((D, C) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const M = new Array();
                for (
                  let L = 0;
                  L < (D?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++L, ++u
                ) {
                  const K = t[u].unique_id;
                  M.push(K),
                    r.set(K, D.background_id),
                    L === 0 && i.set(K, D.background_id);
                }
                if (
                  (s.set(D.background_id, {
                    nBackgroundGroupID: D.background_id,
                    sectionUniqueIDs: M,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (f === void 0 || u < f)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  C + 1 == I && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let L = u;
                    L < t.length &&
                    (!p || !p.enabled || L < f) &&
                    !(t[L].section_type == "tabs" && p?.enabled);
                    ++L
                  ) {
                    const K = t[L].unique_id;
                    r.set(K, D.background_id);
                  }
              }),
              u < t.length && (f === void 0 || u < f) && (d = t[u].unique_id),
              p?.enabled && f !== void 0)
            ) {
              let D = f;
              const C = p.groups.length;
              for (
                p.groups.forEach((M, R) => {
                  if (D >= t.length) return;
                  const L = new Array();
                  for (
                    let k = 0;
                    k < M.num_sections && D < t.length;
                    ++k, ++D
                  ) {
                    const Y = t[D],
                      re = Y.unique_id;
                    (0, Xe.bF)(n, Y)
                      ? (L.push(re),
                        r.set(re, M.background_id),
                        k === 0 && i.set(re, M.background_id))
                      : --k;
                  }
                  let S = D;
                  for (; S < t.length && !(0, Xe.bF)(n, t[S]); ) S += 1;
                  if (
                    (s.set(M.background_id, {
                      nBackgroundGroupID: M.background_id,
                      sectionUniqueIDs: L,
                      nSaleSectionLastIndex: D - 1,
                      nUniqueIDNextSaleSection:
                        S < t.length ? t[S].unique_id : void 0,
                    }),
                    R + 1 == C && p.last_group_until_cover_section_until_end)
                  )
                    for (let k = D; k < t.length; ++k) {
                      const Y = t[k];
                      if (Y.section_type == "tabs" && p?.enabled) break;
                      (0, Xe.bF)(n, Y) && r.set(Y.unique_id, M.background_id);
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
          Kt = a(68434),
          St = a(15181),
          lt = a(41635),
          Ge = a(81416);
        function jt(o, t, n, s) {
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
                  n !== Ge.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Vt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Vt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, Kt.M)(`sale_section_seed_${t}`, (0, St.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, St.A)(s);
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
              (C, M) => {
                $e.set(r.nBackgroundGroupID, M);
              },
              [r],
            ),
            h = (0, ze.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const C = (0, U.LgB)(i),
              M =
                C in t.localized_background_art
                  ? C
                  : c.A0.GetLanguageFallback(Et.TS.LANGUAGE),
              R = t.localized_background_art[M];
            R && (u = pe.zU.GenerateURLFromHashAndExt(s.clanSteamID, R));
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
                    ? B.ValveOnlyAdminBackground
                    : B.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var te = a(16412),
          ue = a(96538),
          Se = a(88003),
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
          Pt = a(75909),
          je = a(53424),
          Bt = a(72604),
          dn = a(41735),
          gn = a.n(dn),
          tt = a(14947),
          Ue = a(9046),
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
                b.TS.COMMUNITY_BASE_URL +
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
            for (let h = U.Bhc; h < U.bP9; ++h)
              i.push(Mn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, tt.h5)(() => {
              for (let h = U.Bhc; h < U.bP9; ++h)
                d[h] &&
                  (this.m_curLocImageGroup.localized_images[h] =
                    pe.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Ue.wI.full,
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
                    Ue.wI.full,
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
                    Ue.wI.full,
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
        let J = T;
        const W = new J();
        var q = a(38410),
          de = a(34592),
          _e = a(75844),
          be = a(32093),
          me = a(72849),
          we = a(64),
          Re = a(72739),
          Le = a(82734);
        function Gt(o, t) {
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
            Re.createPortal(
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
        function Un(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = In(t),
            [h, u] = Gt(t, {
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
          Rn = a(21254),
          kn = a(27344),
          Ce = a.n(kn),
          Nn = a(9472);
        function Fn(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [h, u] = (0, z.q3)(() => [
              t.GetUploadImages(),
              Fe.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (D) => {
                let C = Array.from(D),
                  M = !0;
                for (let R = 0; R < C.length; R++) {
                  const L = C[R],
                    { language: S } = (0, q.jj)(L?.name, u);
                  try {
                    const K = (0, q.PD)(S, u, d);
                    (M = await t.AddImageForLanguage(L, K)),
                      M ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            R +
                            " file=" +
                            L.name,
                        ),
                        (0, Se.pg)(
                          (0, e.jsx)(ue.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              L.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (K) {
                    let k = (0, de.H)(K);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + k.strErrorMsg,
                      k,
                    ),
                      (0, Se.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            k.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return M;
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
          (0, z.q3)(() =>
            h.map((D) => ({ a: D.GetCurrentImageOption(), b: D.language })),
          );
          const I = async () => {
            const D = await t.UploadAllImages(r);
            n?.(D);
          };
          return (0, e.jsxs)(Un, {
            onDropFiles: p,
            elAdditonalButtons: f,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Ce().UploadPreviewCtn,
                  children: h.map((D) =>
                    (0, e.jsx)(
                      _n,
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
            [s] = (0, z.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Ce().UploadPreviewButtonsCtn,
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
        const _n = (0, _e.PA)(Hn);
        function Hn(o) {
          const t = (C) => {
              if (C instanceof we.M7) {
                C.ResetImage();
                const M = window,
                  R = (0, e.jsx)(Rn.q, {
                    ownerWin: M,
                    uploadFile: C,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || me.bg.dU,
                  });
                (0, Se.HT)(R, M, "CropModal", {
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
              let M = C?.fnGetLabelText(),
                R;
              C.bEnforceDimensions && (M += ` - ${C.width}x${C.height}`),
                C.bDeprecated &&
                  ((M += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (R = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let L;
              return (
                (n.BIsOriginalMinimumDimensions(C) &&
                  n.FileTypeMatchesImageTypes(C)) ||
                  (L = Ce().ImageDimensionTooSmall),
                { label: M, data: C, strOptionClass: L, tooltip: R }
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
              ? Vn(
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
            D && (I = i?.find((C) => C.data.sKey == D.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Ce().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Ce().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(mt.sED, {}),
                }),
                (0, e.jsx)(Wn, { asset: n }),
                h &&
                  (0, e.jsx)(te.m, {
                    strDropDownClassName: H().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (C) => (n.language = C.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(te.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: I,
                    onChange: (C) => n.SetCurrentImageOption(C.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((C, M) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ce().UploadPreviewWarning, children: C },
                      `warning${M}`,
                    ),
                  ),
                p &&
                  u.messages?.map((C, M) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ce().UploadPreviewMessage, children: C },
                      `message${M}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, y.A)({
                    [H().FlexColumnContainer]: !0,
                    [Ce().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    f,
                    (0, Nn.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: ye().FlexCenter,
                        children: (0, e.jsx)(Ae.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Ce().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: Ce().UploadPreviewError,
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
                className: Ce().PreviewImgCtn,
                onClick: (n) =>
                  (0, Se.pg)((0, e.jsx)(Kn, { asset: t }), (0, Le.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Ce().PreviewImgInfo,
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
                className: Ce().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Ce().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Kn(o) {
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
        function Vn(o) {
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
        var Tt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Tt || {});
        function Cn(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function mo(o, t, n) {
          let s = "";
          const r = Cn(t);
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
            const i = Cn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var Yn = a(55436),
          Qn = a(53732),
          De = a.n(Qn),
          Dn = a(49460);
        function Zn(o) {
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
        const Jn = m.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: h,
          } = t;
          return (0, e.jsx)(En, {
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
        function En(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, je.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = je.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = Me.b.InitFromClanID(t);
            let u = je.pU.GetLoadState(h);
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
        function ho(o) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = o;
          return jsx(En, {
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
                je.pU.GetClanImageDragListener().forEach((xe) => {
                  let Be = Me.b.InitFromClanID(t.clanAccountID);
                  xe(Be, !0);
                }));
            },
            C = (ge) => {
              t.url &&
                je.pU.GetClanImageDragListener().forEach((xe) => {
                  let Be = Me.b.InitFromClanID(t.clanAccountID);
                  xe(Be, !1);
                });
            },
            M = (ge) => {
              (0, Se.pg)(
                (0, e.jsx)(ue.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: L,
                  onCancel: S,
                  closeModal: S,
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
            R = (ge) => {
              console.log("ClanImageWrapper on delete error: " + ge),
                (0, Se.pg)(
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
            L = () => {
              u(!0);
              let ge = Me.b.InitFromClanID(t.clanAccountID);
              je.pU
                .DeleteClanImage(ge, t)
                .then((xe) => {
                  xe.success != Bt.R && R((0, de.H)(xe).strErrorMsg), u(!1);
                })
                .catch((xe) => {
                  R((0, de.H)(xe).strErrorMsg), u(!1);
                }),
                S();
            },
            S = () => {},
            K = () => {
              r && r(t);
            },
            k = t.file_name ? t.file_name : "",
            Y = (0, Yn.r)(n, k, String(t.imageid), De().Hilight),
            re = pe.zU.BIsClanImageVideo(t),
            ie = i && !h && !re,
            he = i && !h && !re,
            Pe = i && !h && re,
            le = i && !h && !re;
          return (0, e.jsx)(yt.K, {
            placeholderHeight: "100vh",
            className: De().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: De().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: De().ImageWrapper,
                  style: {
                    backgroundImage: re ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: D,
                  onDragEnd: C,
                  onDoubleClick: p,
                  onClick: K,
                  children: (0, e.jsx)(Sn, {
                    clanImage: t,
                    className: De().VideoBackground,
                  }),
                }),
                ie &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: p,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(Ae.t, {
                    size: "medium",
                    className: De().FloatingThrobber,
                  }),
                he &&
                  (0, e.jsx)("span", {
                    className: De().Thumb,
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
                Pe &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: f,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: De().Delete,
                    onClick: M,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: De().ImageWrapperFilename,
                  title: k,
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
                className: (0, y.A)(De().Localized, H().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function Sn(o) {
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
                  ? jsx(Sn, { clanImage: t })
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
                  (0, Se.pg)(
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
            [h] = (0, z.q3)(() => [Fe.O.Get().GetCurEditLanguage()]),
            u = (0, Pt.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [f, I] = m.useState(!1),
            D = m.useCallback(
              async (R, L) => {
                if (!f) {
                  I(!0);
                  try {
                    const { language: S } = (0, q.jj)(R.file_name ?? "", h),
                      K = (0, q.PD)(S, h, d);
                    await p.AddExistingClanImage(R, K);
                  } catch (S) {
                    let K = (0, de.H)(S);
                    console.error("AddExistingClanImage: " + K.strErrorMsg, K),
                      (0, Se.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            K.strErrorMsg ?? "",
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
            C = m.useMemo(
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
            M = (R) => {
              for (const L of R) {
                const S = L.uploadResult;
                if (S?.origimagehash) {
                  const K = (0, q.PD)(S.language, h, d);
                  W.AddLocalizeImageUploaded(S.origimagehash, K);
                } else {
                  const K = je.pU.GetClanImageByImageHash(
                      t,
                      S?.image_hash ?? "",
                    ),
                    k = L.image.GetCurrentImageOption();
                  if (K && k) {
                    const Y = (0, q.PD)(L.image.language, h, d);
                    i(k.artworkType, K, Y);
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
              : C,
            fnUploadComplete: M,
          });
        }
        var ht = a(25279),
          jn = a(84676),
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
            f = (0, z.q3)(() =>
              pe.zU.GenerateURLFromHashAndExt(p, pe.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, y.A)(H().FlexColumnContainer, ve().ReassignCtn),
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
          (0, je.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const f = c.A0.GetLanguageListForRealms([
                be.TU.k_ESteamRealmGlobal,
                be.TU.k_ESteamRealmChina,
              ]);
              for (const I of f) {
                const D = n(I);
                if (D) {
                  const C = (0, U.LgB)(I),
                    M = (0, c.we)("#Language_" + C);
                  p.push({ lang: I, strLang: C, locLang: M, imgHash: D });
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
                    for (let p = 0; p < U.bP9; p++) s && r && s(p) && r(p);
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
            [h, u] = (0, z.q3)(() => {
              const p = je.pU.GetClanImageByImageHash(t, n.imgHash);
              let f = "";
              p &&
                (f = pe.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  pe.zU.GetHashAndExt(p),
                  Ue.wI.full,
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
              let f = (0, U.sfN)(p.currentTarget.id);
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
            f = (0, z.q3)(() => {
              const I = r(n.lang);
              return (
                (0, He.wT)(
                  !I || !I.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + I,
                ),
                je.pU.GetClanImageByImageHash(t, I)
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
              (0, e.jsx)(F.tH, {
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
              (0, e.jsx)(F.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: s,
                  children: (0, e.jsx)(ue.o0, {
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
        var pn = a(13465),
          fa = a(21659),
          Ia = a(15496),
          Ee = a.n(Ia),
          xa = a(88812);
        function _a(o) {
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
              (S) => {
                S.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, U.sfN)(b.TS.LANGUAGE),
            [f, I, D] = (0, z.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let C = "spotlight",
            M = Ue.wI.spotlight_main;
          (t.appid == 2434320 || b.TS.EUNIVERSE == U.Rv) &&
            ((C = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (M = Ue.wI.full));
          let R =
            (0, xa.WC)(n !== void 0 ? void 0 : t, C, p, M) ??
            (n !== void 0 ? [n] : []);
          i && R && (R = i(R));
          const L = f.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: Ee().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(A.Z, {
                className: (0, y.A)(
                  Ee().AppDetailsSpotlightContainer,
                  Ee().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Ee().MajorEventBackground,
                    children: (0, e.jsx)(pn.c, {
                      className: Ee().MajorEventImageBackgroundBlur,
                      rgSources: R,
                      onIncrementalError: (S, K, k) => r && r(K),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ee().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(pn.c, {
                        className: Ee().MajorEventImage,
                        rgSources: R,
                        onIncrementalError: (S, K, k) => r && r(K),
                      }),
                      (0, e.jsx)("div", {
                        className: Ee().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Ee().MajoreEventImageContentContainer,
                        children:
                          D &&
                          (0, e.jsxs)("div", {
                            className: Ee().MajorEventContent,
                            children: [
                              (0, e.jsx)(pn.c, {
                                className: Ee().MajorEventSpotlightBackground,
                                rgSources: R,
                                onIncrementalError: (S, K, k) => r && r(K),
                              }),
                              (0, e.jsxs)("div", {
                                className: Ee().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ee().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Ee().MajorEventSummary,
                                    children: L,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: Ee().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Ca = a(79949),
          Ie = a.n(Ca);
        function Da(o) {
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
            C = D
              ? pe.zU.GenerateURLFromHashAndExtAndLang(r, D, Ue.wI.full, t)
              : "",
            [M] = (0, z.q3)(() => [Aa(n, I)]);
          return M == 0
            ? (0, e.jsxs)("div", {
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(yn, {
                      imgURL:
                        b.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(An, {
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
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(yn, {
                      imgURL: C,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(An, {
                      imgURL: C,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Ot, { imgURL: C, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ot, { imgURL: C, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ot, { imgURL: C, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(ja, {
                      imgURL: C,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(ba, { imgURL: C }),
                  n === "sale_overlay" && (0, e.jsx)(ya, { imgURL: C }),
                  Ue.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: ca.PreviewImg,
                      src: W.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(pt, { imgURL: C }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(pt, { imgURL: C }),
                  n === "sale_logo" && (0, e.jsx)(pt, { imgURL: C }),
                  n === "bestofyear_banner" && (0, e.jsx)(pt, { imgURL: C }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(pt, { imgURL: C }),
                  (0, e.jsx)(ma, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: f,
                    fnGetImageHash: (R) => mn(I(n, R) ?? ""),
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
        function Ea(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = ht.Fj[t],
            i = m.useMemo(
              () =>
                Sa(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Ot, { lang: n, imgURL: i, event: s });
        }
        function Sa(o, t) {
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
            [i, d, h, u, p] = (0, z.q3)(() => [
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
              u != U.Fwr &&
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
            const [t] = (0, jn.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ie().SpotlightExample,
              children: (0, e.jsx)(_a, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          ja = (o) => {
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
          for (let s = U.Bhc; s < U.bP9; ++s)
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
        const Pa =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ba = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Ba || {});
        function Ga(o) {
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
            [I] = (0, jn.t7)(s, { include_assets: !0 }),
            [D, C] = (0, z.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            M = D == U.ajI;
          let R = null;
          n === 2
            ? (R = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (R = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (R = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let L = null;
          t === "capsule"
            ? M
              ? (L = (0, e.jsxs)(e.Fragment, {
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
              : (L = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!C &&
                      (0, e.jsxs)("div", {
                        className: ve().HighlightBox,
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
              ? (L = (0, e.jsx)(e.Fragment, {
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
                ? (L = (0, e.jsx)(e.Fragment, {
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
                  ? (L = (0, e.jsx)(e.Fragment, {
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
                    ? (L = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (L = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: H().EventElementRequired,
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
                          (L = (0, e.jsxs)(e.Fragment, {
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
                          ? (L = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Pa,
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
                            ? (L = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: H().EventElementOptional,
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
                              ? (L = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: H().EventElementOptional,
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
                                ? (L = (0, e.jsxs)(e.Fragment, {
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
                                  ? (L = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: H().EventElementOptional,
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
                                  : (L = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: H().EventElementRequired,
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
          const S = ht.Fj[o.artworkType].width,
            K = ht.Fj[o.artworkType].height;
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
                    R,
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
                    L,
                    !!(S && K) &&
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
                            (0, ht.qj)(S),
                            (0, ht.qj)(K),
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
                        onClick: (k) => {
                          (0, Se.pg)(
                            (0, e.jsx)(Ta, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, Le.uX)(k) ?? window,
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
            [C, M] = m.useState(new Array()),
            R = m.useCallback(
              (S, K, k) => {
                let Y = [];
                C.find((ie) => ie.clanImage.imageid == S.imageid)
                  ? (Y = C.map((ie) =>
                      ie.clanImage.imageid == S.imageid
                        ? { clanImage: S, lang: K }
                        : ie,
                    ))
                  : k && (Y = C.concat({ clanImage: S, lang: K })),
                  M(Y);
              },
              [C],
            ),
            L = m.useCallback(
              (S, K, k) => {
                (0, tt.h5)(() => {
                  mn(i(t, K) ?? "") == S.image_hash && d(t, null, K),
                    d(t, S, k),
                    R(S, k, !1);
                });
              },
              [i, t, d, R],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(te.$n, {
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
                  (0, e.jsx)(Ut, {
                    list: C,
                    fnOnArtworkLanguageChange: L,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, y.A)(
                        ve().SelectImageBlock,
                        ve().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Da, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (S) => {
                          S != I && D(S);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: f ? null : L,
                        artworkType: t,
                        fnOnRemoveImage: f ? null : (S) => d(t, null, S),
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
        let Ut = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, Se.pg)(
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
                let i = (0, c.we)("#Language_" + (0, U.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: H().FlexRowContainer,
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
        wn([ze.oI], Ut.prototype, "ShowLangChangeDialog", 1),
          (Ut = wn([_e.PA], Ut));
        var Oa = a(6658);
        function Ua(o) {
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
            C = (0, Pt.zO)(t, d),
            M = t.GetAccountID(),
            [R] = (0, z.q3)(() => [
              C.GetFilesToUpload().length - C.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            D(!1),
              W.ClearImageGroup(),
              i?.forEach((k, Y) => {
                const re = Me.b.InitFromClanID(M);
                if (W.GetAllLocalizedGroupImages().length == 0) {
                  const ie = k && pe.zU.GetHashFromHashAndExt(k),
                    he = ie && je.pU.GetClanImageByImageHash(re, ie);
                  he && W.SetPrimaryImageForImageGroup(he, d);
                }
                W.SetLocalizedImageGroupAtLang(Y, re, k ?? null);
              }),
              D(!0);
          }, [i, M, d]);
          const L = (0, m.useCallback)(
              (k, Y, re = U.Bhc) => {
                const ie = Me.b.InitFromClanID(M),
                  he = pe.zU.GetHashAndExt(Y ?? null);
                if (W.GetAllLocalizedGroupImages().length == 0) {
                  const Pe = he && pe.zU.GetHashFromHashAndExt(he),
                    le = Pe && je.pU.GetClanImageByImageHash(ie, Pe);
                  le && W.SetPrimaryImageForImageGroup(le, k);
                }
                W.SetLocalizedImageGroupAtLang(re, ie, he);
              },
              [M],
            ),
            S = (0, m.useCallback)((k, Y) => {
              const ie = W.GetLocalizedImageGroupForEdit()?.localized_images[Y];
              return ie && ie.split("/").pop();
            }, []),
            K = () => {
              const k = W.GetLocalizedImageGroupForEdit();
              for (let Y = U.Bhc; Y < U.bP9; ++Y) {
                const re = k?.localized_images[Y];
                if (re) {
                  const ie = re.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: mn(ie),
                      clanAccountID: M,
                      file_type: (0, Oa.yh)(ie) ?? me.bg.w3,
                      imageid: 0,
                    },
                    Y,
                  );
                } else p(d, null, Y);
              }
              W.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(ue.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, y.A)(Mt.NotTooWideModal, Mt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: R > 0,
            onOK: K,
            strOKButtonText:
              R > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(na, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: L,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: C,
                      }),
                      (0, e.jsx)(Ga, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => W.ClearImageGroup(),
                        fnSetImageURL: L,
                        fnGetImageHashAndExt: S,
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
              (0, e.jsx)(te.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(te.m, {
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
        var ka = a(94381);
        function Na(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = rn(),
            [d, h] = (0, m.useState)(() => n),
            [u, p, f, I, D, C, M, R] = (0, z.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [L] = (0, m.useState)(() => Fa(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Ua, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: gt.O3,
            artworkType: "localized_background_art",
            realms: M,
            loc_images: L,
            fnLangHasData: (S) => !!L[S],
            fnGetImageHash: (S, K) => L[K],
            fnSetImageURL: async (S, K, k) => {
              h((Y) => {
                const re = { ...Y.localized_background_art },
                  ie = pe.zU.GetHashAndExt(K);
                return (
                  ie ? (re[(0, U.LgB)(k)] = ie) : delete re[(0, U.LgB)(k)],
                  { ...Y, localized_background_art: re }
                );
              });
            },
            onOK: () => {
              h((S) => (s(S), t && setTimeout(t, 1), { ...S }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Te().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Te().ImageOptions,
                    children: [
                      (0, e.jsx)(Ra, {
                        setting: u,
                        fnUpdateSetting: (S) => {
                          h(
                            S !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: S,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: S },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(za, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (S) => h({ ...d, scaling_setting: S }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(Wa, {
                          position_settings: C,
                          fnUpdateSetting: (S) =>
                            h({ ...d, position_setting: S }),
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
                            onClick: (S) =>
                              i(S, {
                                color: f ?? "",
                                onChange: (K) =>
                                  h({ ...d, background_color1: K }),
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
                              onClick: (S) =>
                                i(S, {
                                  color: I ?? "",
                                  onChange: (K) =>
                                    h({ ...d, background_color2: K }),
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
                        fnUpdateSetting: (S) =>
                          h({ ...d, gradient_setting: S }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)($t, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(ka.S, {
                  checked: !!R,
                  onChange: (S) => {
                    d.randomize_section_order = S;
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
          const t = lt.$Y([], U.bP9, null);
          for (const n in o) {
            const s = (0, U.sfN)(n);
            s != U.xPp && (t[s] = o[n]);
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
        function Ka(o) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = o,
            [i, d] = (0, m.useState)(t.BIsBackgroundImageEnabled()),
            [h, u, p] = (0, ze.uD)(),
            f = (0, z.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, y.A)(Te().Ctn, r && B.ValveOnlyBackground),
            children: (0, e.jsxs)(F.tH, {
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
                  href: `${Et.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
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
            [f, I, D, C] = (0, z.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            M = D && i + 1 === C,
            [R, L, S] = (0, ze.uD)(),
            [K, k, Y] = (0, ze.uD)();
          let re;
          f?.nUniqueIDNextSaleSection &&
            (re = (0, dt.h_)(
              V.HY,
              r.GetSaleSectionByID(f?.nUniqueIDNextSaleSection),
              p,
              h,
              f.nSaleSectionLastIndex + 1,
            ));
          let ie;
          if (f && I?.length > 1) {
            const he = I[I.length - 1];
            ie = (0, dt.h_)(
              V.HY,
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
                  onClick: L,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(ue.EN, {
                  active: R,
                  children: (0, e.jsx)(Na, {
                    imgGroup: d,
                    closeModal: S,
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
                            V.W3,
                            r.GetSaleSectionByID(he),
                            p,
                            h,
                            r.GetSaleSectionIndexByID(he, !0),
                          ),
                        },
                        "li_" + he,
                      ),
                    ),
                    !!M &&
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
                        onClick: k,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(ue.EN, {
                        active: K,
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
        function Va(o) {
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
            ? (0, e.jsx)(Va, { backgroundImageEditModel: r, nTabID: t })
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
            d = i.findIndex((R) => R.background_id === t),
            h = i[d],
            [u, p] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const R = (0, Se.pg)(
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
              R.then((L) => L.Close());
            };
          }, [u, r, h, d, n, s]);
          const f = (0, z.q3)(() => $e.get(t)),
            [I, D] = (0, m.useState)(null),
            C = m.useCallback((R, L) => {
              D(L);
            }, []),
            M = (0, ze.w6)(C);
          return (0, e.jsxs)("div", {
            className: Te().CtnEditor,
            ref: M,
            children: [
              !!(f && I && I > f) &&
                (0, e.jsx)(te.$n, {
                  onClick: (R) => p(!0),
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
            const f = (0, Se.pg)(
              (0, e.jsx)(ue.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Pn, { ...o }),
              }),
              window,
            );
            return () => {
              f.then((I) => I.Close());
            };
          }, [n, o]);
          const r = (0, z.q3)(() => {
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
              (0, e.jsx)(Pn, { ...o }),
            ],
          });
        }
        function Pn(o) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = o,
            [r, i] = (0, m.useState)(null),
            [d, h, u, p] = (0, z.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(F.tH, {
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
          const h = (0, z.q3)(() => vt.TU.Get().GetMouseOverSectionID()),
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
                [w().SaleSectionLivePreview]: !0,
                [w().Hover]: !!u,
                [w().JumpedTo]: !!i,
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
                      className: w().JumpToButton,
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
            D = (0, z.q3)(() => n.jsondata.sale_header_disable_top_margin),
            C = to(n, u, (0, qa.TC)(!!s)),
            [M, R] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !f &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, b.yK)() == "community"
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
          const L = n?.jsondata,
            S = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(b.UF.CLANACCOUNTID),
                nAppIDVOD: Number(L?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? L?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  L?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, L, r, t],
            ),
            K = (0, z.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            k = At(n?.clanSteamID);
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
                .some((Ne) => Ne.section_type === "contenthubtitle"),
              he = re && ie;
            let Pe,
              le = !0;
            Y
              ? (Pe = 0)
              : n.BUsesContentHubForItemSource()
                ? (Pe = 20)
                : n.GetEventType() == U.ajI
                  ? ((Pe = 0), (le = !1))
                  : (Pe = n.jsondata.sale_header_offset || 0);
            const ge = le && n.jsondata.sale_header_offset === 530,
              Be = !Ct.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              Qe = s
                ? !M && i?.BIsBackgroundImageEnabled()
                  ? Ge.S.EPreviewMode_EditBackground
                  : Ge.S.EPreviewMode_Enabled
                : Ge.S.EPreviewMode_Disabled,
              ke = K || n.GetEventType() != U.ajI,
              ft = re ? ae.Yo.NoTransform : ae.Yo.NoTransformSparseContent,
              Rt = (0, y.A)(
                w().SaleOuterContainer,
                D && w().SaleOuterTopMargin,
                ge && w().SaleNewSizing,
                w()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                Y && w().SalePageLogoSet,
                he && w().ContentHub,
              );
            return (0, e.jsx)(F.tH, {
              children: (0, e.jsx)(ne.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(V.Cs, {
                  location: s ? V.HY : V.bs,
                  children: (0, e.jsxs)(E, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      Be && (0, e.jsx)(ne.Sn, {}),
                      (0, e.jsx)(Z, { eventModel: n }),
                      !!i &&
                        (ke || k) &&
                        (0, e.jsx)(Ka, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: M,
                          fnSetBackgroundImgGroupEditMode: R,
                          bShowAsValveOnly: !ke,
                        }),
                      (0, e.jsxs)(A.Z, {
                        style: he ? void 0 : { marginTop: `${Pe || 0}px` },
                        className: Rt,
                        scrollIntoViewType: ft,
                        children: [
                          (0, e.jsx)(fe, { eventModel: n, language: r }),
                          (0, e.jsx)(Ke, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Dt, {
                            event: n,
                            broadcastEmbedContext: S,
                          }),
                          (0, e.jsx)(ao, {
                            ePreviewMode: Qe,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: S,
                            selectedTab: C,
                            tagSelection: C?.GetTagSelection(),
                          }),
                          !h &&
                            (0, e.jsx)(it, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Ne) => {
                                Ne != u &&
                                  ((n.m_overrideCurrentDay = Ne), p(Ne));
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
          const [s] = (0, Ye.QD)(Ve.jD, void 0),
            [r] = (0, Ye.QD)(Je.dk, void 0),
            [i] = (0, Ye.QD)(Je.NV, void 0),
            d = m.useMemo(() => {
              const I = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((D) => !D.hide);
              if (I && I.length > 0) {
                let D = s > 0 ? I.find((M) => M.unique_id == s) : void 0;
                D || (D = I[0]);
                const C = D === I[0];
                return { selTab: D, bIsDefaultTab: C };
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
            [h, u] = m.useState((0, Ve.rp)()),
            p = m.useMemo(() => new Zt(), []),
            f = m.useCallback(() => u((0, Ve.rp)()), []);
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
          const I = (0, _t.W6)(),
            D = (le, ge) => {
              (0, Ye.ip)(I, { ...(ge || {}), [Ve.jD]: le.toString() });
            },
            [C, M] = (0, Ye.QD)("controller"),
            [R, L] = (0, z.q3)(() => {
              const le =
                  Nt.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
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
          let S = !1;
          const K = new ct.y(void 0, s),
            k = [{ elements: [], activeTab: K }];
          let Y = null;
          const re = (0, b.Qn)(),
            ie = (0, vt.ty)(),
            he = m.useMemo(() => {
              const le = Bn();
              if (!le) return;
              const ge = L.findIndex((xe) => xe.section_anchor === le);
              return ge > -1 ? ge : void 0;
            }, [L]);
          L.forEach((le, ge) => {
            const xe = k[k.length - 1].activeTab;
            if (xe && !xe.ShouldShowSection(le)) return;
            const Be = Ct.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Qe = h && !Be && !t.jsondata.content_hub_restricted_width;
            let ke = (0, Ge.I)(le, r, t, n, re);
            if (ke === void 0) return;
            if (!ke)
              if ((0, qe.su)(le) && !b.iA.logged_in)
                S ||
                  ((ke = (0, e.jsx)(qe.CC, {
                    section: le,
                    event: t,
                    language: n,
                  })),
                  (S = !0));
              else {
                const io = le.diable_tab_id_filtering
                  ? new ct.y(void 0, xe && xe.GetSaleDay())
                  : xe;
                le.section_type == "tabs" &&
                  le.tabs?.some(
                    (lo) => lo.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  k.push({ activeTab: i, elements: [] }),
                  (ke = (0, e.jsx)($a.H, {
                    ...o,
                    section: le,
                    activeTab: io,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: D,
                    expanded: Qe,
                    controllerCategory: C,
                    setControllerCategory: M,
                  }));
              }
            ie &&
              (ke = (0, e.jsx)(Xa, { nSectionID: le.unique_id, children: ke }));
            const ft = k && k.length && k[k.length - 1];
            let Rt = (0, e.jsx)(
              ro,
              {
                section: le,
                nActiveTabID:
                  ft && ft.activeTab && ft.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ge,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: R,
                backgroundImageEditModel: d,
                bExpanded: Qe,
                children: (0, e.jsx)(yt._, {
                  enabled: !he || ge > he,
                  children: ke,
                }),
              },
              "SaleSectionIndex_" + le.unique_id + "_" + ge,
            );
            const Ne = R.mapSectionToGroup.get(le.unique_id);
            Y &&
              Y.groupID != Ne &&
              (k[k.length - 1].elements.push(
                jt(t, Y, r, i && i?.GetActiveTabUniqueID()),
              ),
              (Y = null)),
              Ne
                ? (Y ||
                    (Y = {
                      groupID: Ne,
                      elSaleSections: [],
                      derivedGroupInfo: R.mapGroupToSections.get(Ne),
                    }),
                  Y.elSaleSections.push(Rt))
                : k[k.length - 1].elements.push(Rt);
          }),
            Y &&
              (k[k.length - 1].elements.push(
                jt(t, Y, r, i && i?.GetActiveTabUniqueID()),
              ),
              (Y = null));
          const Pe = k.map((le, ge) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, y.A)(
                  w().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: le.elements,
              },
              "TabSection_" + ge,
            ),
          );
          return (0, e.jsx)(A.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Pe,
          });
        }
        const ao = (0, _t.y)(no);
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
        function Gn({ children: o, onChange: t }) {
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
              : Ve.mj + (t.unique_id || n),
            f = t.section_type != "tabs",
            [I, D] = (0, m.useState)(!0);
          return I
            ? (0, e.jsx)(F.tH, {
                children: (0, e.jsx)(oo, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: f
                    ? (0, e.jsx)(A.Z, {
                        navKey: p,
                        id: p,
                        className: (0, y.A)({
                          [w().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [w().SaleSectionBackgroundImageGroupEdit]:
                            r == Ge.S.EPreviewMode_EditBackground,
                          [w().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Ge.S.EPreviewMode_EditBackground
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
                            : (0, e.jsx)(Gn, { onChange: D, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Ge.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, y.A)({
                                  [w().SaleSectionCtn]: !0,
                                  [w().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [w().NoTopPadding]: t.collapse_header_space,
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
                            : (0, e.jsx)(Gn, { onChange: D, children: u }),
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
          ne = a(90626),
          V = a(36707),
          X = a(95695),
          $ = a.n(X),
          z = a(25792),
          m = a(64734),
          O = a.n(m),
          F = a(65946),
          oe = a(11243);
        function w(y) {
          const {
              title: b,
              tooltip: se,
              getMinimized: N,
              toggleMinimized: Q,
              className: E,
              children: l,
              elAdditionalButtons: g,
            } = y,
            _ = (0, F.q3)(() => N());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, V.A)(
                  E,
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
                    children: [b, !!se && (0, e.jsx)(oe.o, { tooltip: se })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(H, { bIsMinimized: _, fnToggleMinimize: Q }),
                    ],
                  }),
                ],
              }),
              !_ && (0, e.jsx)(z.tH, { children: l }),
            ],
          });
        }
        function B(y) {
          const [b, se] = ne.useState(!!y.bStartMinimized);
          return (0, e.jsx)(w, {
            ...y,
            getMinimized: () => b,
            toggleMinimized: () => se(!b),
            children: y.children,
          });
        }
        function H(y) {
          const { bIsMinimized: b, fnToggleMinimize: se } = y,
            N = b ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(U.$n, {
            "data-tooltip-text": (0, A.we)(N),
            onClick: se,
            children: y.bIsMinimized
              ? (0, e.jsx)(ae.hz4, {})
              : (0, e.jsx)(ae.Xjb, {}),
          });
        }
      },
      29462: (G, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => O });
        var e = a(7850),
          U = a(90626),
          A = a(3166),
          ae = a(99412),
          ne = a(77495),
          V = a(85599),
          X = a(11811),
          $ = a(179),
          z = a(7582),
          m = a(21042);
        function O(F) {
          const { clanAccountID: oe, gidEvent: w } = F;
          let { eventModel: B, bLoading: H } = (0, ne.dB)(oe, w);
          const y = (0, ae.sfN)(A.TS.LANGUAGE),
            [b] = (0, $.QD)("livepreview");
          return (
            b && (B = (0, m.U)(oe, ae.ajI, "creatorhome_fake", (0, z.sB)())),
            U.useEffect(() => {
              if (!H && !B) {
                const se = new URL(window.location.href);
                se.searchParams.set("v1", "1"),
                  window.location.replace(se.toString());
              }
            }, [H, B]),
            B
              ? (0, e.jsx)(X.default, {
                  eventModel: B,
                  promotionName: `creatorhome_${w}`,
                  language: y,
                })
              : (0, e.jsx)(V.t, {})
          );
        }
      },
      17809: (G, ce, a) => {
        "use strict";
        a.d(ce, { d: () => un });
        var e = a(7850),
          U = a(19367),
          A = a(90626),
          ae = a(3685),
          ne = a(85528),
          V = a(77495),
          X = a(18210),
          $ = a(3166),
          z = a(75779),
          m = a(80902),
          O = a(30454);
        async function F() {
          const v = await (0, O.d)(
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
        function w() {
          return ["DeckCompatCounts"];
        }
        function B() {
          return {
            queryKey: w(),
            queryFn: () => F(),
            staleTime: oe,
            retry: !1,
          };
        }
        function H() {
          const { data: v } = (0, m.I)(B());
          return v;
        }
        function y(v, x) {
          switch (x) {
            case z.sd:
              return v?.playable;
            case z.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var b = a(70187),
          se = a(45251),
          N = a(39153),
          Q = a(6878),
          E = a(99412),
          l = a(72609),
          g = a(47610),
          _ = a(18860),
          j = a(41635),
          Z = a(25792),
          P = a(85599),
          ee = a(87805);
        const c = A.Fragment;
        function fe(v) {
          const {
              reservationPackageID: x,
              depositPackageID: T,
              bIsPreview: J,
              psuLessPackageID: W,
              strOutOfStockOverride: q,
              strDeliveryOverride: de,
              bDeliveryOverrideOnlyIfOutOfStock: _e,
              section: be,
            } = v,
            { data: me } = (0, g.DR)(x),
            { data: we } = (0, g.DR)(W),
            Re = (0, A.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + x,
                  reservation_package: x,
                  deposit_package: T,
                  localized_reservation_desc: (0, j.$Y)([], E.bP9, null),
                  localized_out_of_stock_override: (0, j.$Y)(
                    [q || null],
                    E.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, j.$Y)(
                    [de || null],
                    E.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!_e,
                  psu_less_package: W,
                },
              ],
              [x, T, q, de, _e, W],
            );
          if (!me || (W && !we))
            return (0, e.jsx)(P.t, {
              string: (0, X.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Le = !l.iA.logged_in || !me.account_restricted_from_purchasing,
            Gt =
              me.reservation_state == _.G.k_EPurchaseReservationState_Reserved
                ? me
                : void 0;
          return (0, e.jsxs)(Z.tH, {
            children: [
              (0, e.jsx)(A.Suspense, {
                fallback: null,
                children: (0, e.jsx)(c, {
                  bIsPreview: !!J,
                  rgReservationDef: Re,
                }),
              }),
              !!me.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Re[0].unique_id,
                  children: [
                    (0, e.jsx)(ee.b, {
                      reservationDef: Re[0],
                      hardwareDetail: me,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Gt,
                    }),
                    Le &&
                      (0, e.jsx)(ee.p, {
                        section: be,
                        reservationDef: Re[0],
                        hardwareDetail: me,
                        reservedHardwareDetail: Gt,
                      }),
                    we &&
                      we?.allow_purchase_in_country &&
                      (0, e.jsx)(ee.b, {
                        reservationDef: Re[0],
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
        var kt = a(21035),
          xt = a(72865),
          ot = a(38081),
          st = a.n(ot),
          Ke = a(36707),
          Oe = a(69596),
          Nt = a(10026),
          _t = a.n(Nt),
          Ve = a(19298),
          Je = a(11996),
          Ct = a(19047),
          rt = a(36118),
          Ft = a(47689),
          Dt = a(89926),
          zt = a(32545),
          it = a.n(zt);
        function Ye(v) {
          const { appID: x, classOverride: T, styleOverride: J } = v,
            [W, q] = (0, A.useState)(!1),
            de = (0, Ft.m)("GameHoverFollowButton"),
            { elDialogElement: _e, fnShowLogonDialog: be } = (0, Dt.l)(),
            me = (0, Je.Fh)(x),
            { mutateAsync: we } = (0, Ct.L)(x, !me, void 0),
            Re = async (Le) => {
              Le.preventDefault(),
                Le.stopPropagation(),
                $.iA.logged_in
                  ? (q(!0), await we(), de.token.reason || q(!1))
                  : be();
            };
          return (0, e.jsxs)(Ve.Z, {
            className: (0, Ke.A)(it().FollowButton, T),
            onClick: Re,
            style: J,
            children: [
              me ? (0, e.jsx)(rt.pPV, {}) : (0, e.jsx)(rt.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ke.A)(
                  it().FollowButtonText,
                  W && it().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, X.we)(
                  me ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              _e,
            ],
          });
        }
        function Fe(v) {
          const { appid: x, color: T, bgcolor: J } = v,
            W = (0, xt.n9)();
          return (0, e.jsx)(Ye, {
            appID: x,
            classOverride: (0, Ke.A)(
              st().FollowGameButtonNotTop,
              _t().BBCodeFollowButton,
            ),
            styleOverride: { color: T, backgroundColor: J },
          });
        }
        function ze(v) {
          const x = Number(v.args.appid);
          if (!x) return null;
          const T = (0, Oe.O)(v.args.color, "black"),
            J = (0, Oe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Fe, { appid: x, color: T, bgcolor: J });
        }
        var Et = a(20681),
          Xe = a(18657),
          $e = a.n(Xe),
          Ht = a(63026);
        function Wt(v) {
          const { clanAccountID: x, color: T, bgcolor: J } = v;
          (0, Et.mx)();
          const [W, q] = A.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ke.A)($e().BBCodeFollowButton, W && $e().isHovered),
            onMouseEnter: () => q(!0),
            onMouseLeave: () => q(!1),
            children: (0, e.jsx)(Ht.Q, {
              nCreatorAccountID: x,
              classOverride: st().FollowGameButtonNotTop,
              styleOverride: { color: T, backgroundColor: J },
              followType: "group",
            }),
          });
        }
        function pe(v) {
          const { event: x } = v.context,
            T = Number(v.args.groupid) || x?.clanSteamID.GetAccountID();
          if (!T) return null;
          const J = (0, Oe.O)(v.args.color, "black"),
            W = (0, Oe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Wt, { clanAccountID: T, color: J, bgcolor: W });
        }
        var Kt = a(83482),
          St = a(44267),
          lt = a(9202),
          Ge = a.n(lt),
          jt = a(29522);
        function Vt(v) {
          const { appid: x, color: T, bgcolor: J } = v,
            W = (0, xt.n9)(),
            q = (0, jt.$5)(x),
            de = (0, Kt.L3)(W);
          return (0, e.jsx)("div", {
            className: Ge().WishlistHoverCtn,
            children: (0, e.jsx)(St.E, {
              snr: de,
              id: q,
              classOverride: (0, Ke.A)(
                st().WishlistButtonNotTop,
                Ge().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: T, backgroundColor: J },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Yt(v) {
          const x = Number(v.args.appid);
          if (!x) return null;
          const T = (0, Oe.O)(v.args.color, "black"),
            J = (0, Oe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Vt, { appid: x, color: T, bgcolor: J });
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
              bLoadingGiveawayInfo: J,
              winner_count: W,
              closed: q,
              seconds_until_drawing: de,
            } = T;
          return J
            ? null
            : (0, e.jsxs)("div", {
                className: ye.countdownCtn,
                children: [
                  !!q &&
                    (0, e.jsx)("div", {
                      className: ye.Closed,
                      children:
                        W > 0
                          ? (0, X.we)("#Giveaway_Closed", (0, Ae.D)(W))
                          : (0, X.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !q &&
                    (0, e.jsxs)(A.Fragment, {
                      children: [
                        de <= 0
                          ? (0, e.jsxs)("div", {
                              className: ye.Throbber,
                              children: [
                                (0, e.jsx)(P.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, X.we)("#Giveaway_RandomDraw"),
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
                                    (0, X.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, X.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        W > 0 &&
                          (0, e.jsxs)("div", {
                            className: ye.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: ye.WinnerCount,
                                children: (0, Ae.D)(W),
                              }),
                              (0, e.jsx)("div", {
                                className: ye.WinnerText,
                                children: (0, X.we)("#Giveaway_Congratulation"),
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
          Se = a(4720),
          qt = a(75110),
          dt = a(57810),
          gt = a(36631),
          en = a(55817),
          wt = a(81416);
        function tn(v) {
          const { eventModel: x, nEventBadgeID: T } = v,
            J = (0, At.fy)(T);
          if (J?.level > 0) {
            let W = J.level;
            if (x?.BHasSaleEnabled()) {
              const q = x.GetSaleSectionsByType("badge_progress");
              if (q?.length == 1) {
                const de = q[0].badge_progress;
                if (de?.event_badgeid == T && de?.granted_by_discovery_queue) {
                  const _e = de.levels[de.levels.length - 1].level;
                  return (0, e.jsx)(We, {
                    eventModel: x,
                    nBadgeLevel: W,
                    nMaxLevel: _e,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Ae.D)(W),
            });
          }
          return null;
        }
        function We(v) {
          const { eventModel: x, nBadgeLevel: T, nMaxLevel: J } = v,
            W = A.useMemo(() => {
              const me = x
                .GetSaleSections()
                .filter((we) => we.section_type == "discoveryqueue");
              return me?.length > 0 ? me[0] : null;
            }, [x]),
            { storePageFilter: q, eStoreDiscoveryQueueType: de } = A.useMemo(
              () => (0, qt.lx)(x, W),
              [x, W],
            ),
            _e = (0, dt.Uf)(de, q),
            be = Math.min(T + _e, J);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Ae.D)(be),
          });
        }
        function nn(v) {
          const { event: x } = v.context,
            T = Number.parseInt((0, b.j$)(v.args, "eventid"));
          return $.iA.logged_in && T
            ? (0, e.jsx)(tn, { nEventBadgeID: T, eventModel: x })
            : null;
        }
        function et(v) {
          const { nDoorIndex: x, children: T } = v,
            J = (0, N.OM)(x),
            W = (0, N.gP)(),
            [q, de] = A.useState(!1),
            [_e, be] = A.useState(!1),
            { elDialogElement: me, fnShowLogonDialog: we } = (0, Dt.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($t.$n, {
                disabled: J,
                onClick: (Re) => {
                  q ||
                    ($.iA.logged_in
                      ? (de(!0),
                        W({ iDoorIndex: x })
                          .then((Le) => {
                            Le || be(!0), de(!1);
                          })
                          .catch(() => {
                            be(!0), de(!1);
                          }))
                      : we());
                },
                children: _e
                  ? (0, e.jsx)("div", {
                      children: (0, X.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!q && (0, e.jsx)(P.t, { size: "small" }),
                        !!J && (0, e.jsx)(rt.Jlk, {}),
                        T,
                      ],
                    }),
              }),
              me,
            ],
          });
        }
        function an(v) {
          const x = Number.parseInt((0, b.j$)(v.args)) || 0;
          return x >= 0 && x < 32
            ? (0, e.jsx)(et, { nDoorIndex: x, children: v.children })
            : null;
        }
        const on = (0, te.y)(en.H);
        function sn(v) {
          const x = Number.parseInt((0, b.j$)(v.args)),
            { event: T, showErrorInfo: J } = v.context;
          if (x) {
            const W = T?.jsondata?.sale_sections?.findIndex(
              (q) => q.unique_id == x,
            );
            if (W >= 0) {
              const q = T.GetDayIndexFromEventStart();
              return (0, e.jsx)(gt.Cs, {
                location: J ? gt.HY : gt.bs,
                children: (0, e.jsx)(on, {
                  event: T,
                  section: T.jsondata.sale_sections[W],
                  activeTab: new Se.y(null, q),
                  language: v.language,
                  nSaleDayIndex: q,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: J
                    ? wt.S.EPreviewMode_Enabled
                    : wt.S.EPreviewMode_Disabled,
                }),
              });
            } else if (J)
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
                ["chooseaccount", { Constructor: Pt, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: nn, autocloses: !1 }],
                ["optindoorquest", { Constructor: an, autocloses: !1 }],
                ["classname", { Constructor: je, autocloses: !1 }],
                ["localize", { Constructor: Bt, autocloses: !1 }],
                ["salesection", { Constructor: sn, autocloses: !1 }],
                ["reservationbutton", { Constructor: gn, autocloses: !1 }],
              ])),
            ut
          );
        }
        function ln(v) {
          const { event: x } = v.context,
            T = Number.parseInt((0, b.j$)(v.args, "appid")),
            J = Number.parseInt((0, b.j$)(v.args, "itemdefid")),
            W = Number.parseInt((0, b.j$)(v.args, "maxquantity")),
            q = (0, b.j$)(v.args, "calltoaction");
          return !(0, Xt.gS)(T, J, !1) || !x
            ? (0, e.jsx)(P.t, {
                size: "small",
                position: "center",
                string: (0, X.we)("#Loading"),
              })
            : (0, e.jsx)(kt.f, {
                language: v.language,
                clanAccountID: x.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: T, nItemDefID: J, max_quantity: W },
                strCallToAction: q,
              });
        }
        function Te(v) {
          const x = H();
          if (!x) return (0, e.jsx)(P.t, { size: "small" });
          const T = Number.parseInt((0, b.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Ae.D)(Number(y(x, T))) });
        }
        function cn(v) {
          const x = (0, se.jR)($.iA.accountid, "library");
          if (!x) return (0, e.jsx)(P.t, { size: "small" });
          const T = Number.parseInt((0, b.j$)(v.args));
          let J = x.verifiedList?.length || 0;
          switch (T) {
            case z.sd:
              J = x.playableList?.length || 0;
              break;
            case z.V8:
              J = x.unsupportedList?.length || 0;
              break;
            case z.YX:
              J = x.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Ae.D)(Number(J)) });
        }
        function Lt(v) {
          const x = Number.parseInt((0, b.j$)(v.args)),
            T =
              "hide" in v.args && !!Number.parseInt((0, b.j$)(v.args, "hide"));
          return x >= 0
            ? (0, e.jsx)(Me, { nDoorIndex: x, bHide: T, children: v.children })
            : null;
        }
        function Me(v) {
          const { nDoorIndex: x, bHide: T, children: J } = v,
            W = (0, N.OM)(x);
          return W == null
            ? null
            : (W && !T) || (!W && T)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function Pt(v) {
          if ($.iA.logged_in) {
            const x = Number.parseInt((0, b.j$)(v.args)),
              T = Number.parseInt((0, b.j$)(v.args, "mod"));
            if (T > 0 && x < T && $.iA.accountid % T == x) return v.children;
          }
          return null;
        }
        function je(v) {
          const x = (0, b.j$)(v.args);
          return x?.trim().length > 0
            ? (0, e.jsx)("div", { className: x.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function Bt(v) {
          return (0, e.jsx)("span", {
            className: Q.LocalizeBlock,
            children: (0, X.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function dn(v) {
          let x = (0, b.j$)(v.args);
          return x
            ? (0, e.jsx)(Zt, { giveawayid: x })
            : (0, e.jsx)(A.Fragment, {});
        }
        function gn(v) {
          const { showErrorInfo: x, event: T } = v.context,
            J = Number.parseInt((0, b.j$)(v.args)),
            W = A.useMemo(() => {
              if (T)
                return T.jsondata.sale_sections?.find(
                  (q) =>
                    q.section_type == "vo_internal" &&
                    (q.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      q.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [T]);
          if (J && W) {
            const q = Number.parseInt((0, b.j$)(v.args, "depositpackageid")),
              de = Number.parseInt((0, b.j$)(v.args, "psulesspackageid")),
              _e = (0, b.j$)(v.args, "out_of_stock_override"),
              be = (0, b.j$)(v.args, "delivery_override"),
              me = (0, b.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(fe, {
              section: W,
              reservationPackageID: J,
              depositPackageID: q,
              psuLessPackageID: de,
              strOutOfStockOverride: _e,
              strDeliveryOverride: me || be,
              bDeliveryOverrideOnlyIfOutOfStock: !!me,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var tt = a(71698),
          Ue = a(94520);
        function un(v) {
          const { bSalePage: x } = v,
            [T, J] = A.useState(!1);
          return (
            (0, tt.H)(T, x),
            A.useEffect(() => {
              ne.Vw.Init(new ae.D($.TS.WEBAPI_BASE_URL)), V.O3.Init(), J(!0);
            }, []),
            A.useEffect(() => {
              const W = (0, X.l4)();
              W && U.locale(W);
            }, []),
            T
              ? x
                ? (0, e.jsx)(Ue.d3, { dictionary: rn(), children: v.children })
                : v.children
              : null
          );
        }
      },
      11811: (G, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => y });
        var e = a(7850),
          U = a(71698),
          A = a(90626),
          ae = a(73259),
          ne = a(76559),
          V = a(77495),
          X = a(25679),
          $ = a(64641),
          z = a.n($),
          m = a(85599),
          O = a(18210),
          F = a(3166),
          oe = a(17809),
          w = a(85692),
          B = a(41032),
          H = a(51079);
        function y(N) {
          const { eventModel: Q } = N;
          return (0, e.jsx)(oe.d, {
            bSalePage: !0,
            children: (0, e.jsx)(b, { ...N, overrideEventModel: Q }),
          });
        }
        function b(N) {
          const { promotionName: Q, language: E, overrideEventModel: l } = N,
            [g, _] = A.useState(
              l ?? V.O3.GetClanEventFromAnnouncementGID(F.P9.ANNOUNCEMENT_GID),
            );
          A.useEffect(() => {
            if (!l && g?.AnnouncementGID != F.P9.ANNOUNCEMENT_GID) {
              const c = new ne.b(F.UF.CLANSTEAMID);
              V.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                c,
                F.P9.ANNOUNCEMENT_GID,
                null,
              ).then(_);
            }
          }, [g, l]);
          const Z = (0, w.D2)() ?? g,
            P = (0, w.ty)();
          if (((0, U.s)(1500), !Z))
            return (0, e.jsx)("div", {
              className: z().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, O.we)("#Loading"),
              }),
            });
          const ee =
            (Z.visibility_state !== ae.zv.k_EEventStateVisible &&
              Z.visibility_state !== ae.zv.k_EEventStateUnlisted) ||
            P;
          return (0, e.jsx)(se, {
            eventModel: Z,
            children: (0, e.jsx)(H.oJ, {
              children: (0, e.jsx)(H.Ay, {
                curator_clanid: Z?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(X._, {
                  promotionName: Q,
                  language: E,
                  eventModel: Z,
                  bIsPreview: ee,
                }),
              }),
            }),
          });
        }
        function se(N) {
          const { eventModel: Q, children: E } = N,
            l = Q.GetContentHubType() == "adultonly";
          return (0, e.jsx)(B.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: E,
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
