/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [46627],
    {
      49614: (U, E, a) => {
        "use strict";
        a.d(E, { c: () => O, L: () => F });
        var g = a(27386);
        function I(P) {
          return Object.prototype.toString.call(P) === "[object Object]";
        }
        function b(P) {
          if (!I(P)) return !1;
          const R = P.constructor;
          if (typeof R > "u") return !0;
          const d = R.prototype;
          return !(
            !I(d) || !Object.prototype.hasOwnProperty.call(d, "isPrototypeOf")
          );
        }
        function l(...P) {
          return JSON.stringify(P, (R, d) => {
            if (b(d)) {
              const h = {};
              return (
                Object.keys(d)
                  .sort()
                  .forEach((v) => {
                    h[v] = d[v];
                  }),
                h
              );
            }
            return d;
          });
        }
        var j = a(90626),
          G = a(7850);
        const m = (0, j.createContext)({ instances: {}, factories: {} });
        function w(P) {
          const { name: R, fnFactory: d, children: h } = P,
            v = React.useContext(m),
            [D] = useState({}),
            A = useMemo(
              () => ({
                instances: D,
                factories: { ...v.factories, [R]: d },
                parent: v,
              }),
              [D, R, v],
            );
          return jsx(m.Provider, { value: A, children: h });
        }
        function L(P, R) {
          const d = (0, j.useContext)(m),
            h = typeof P == "string" ? P : l(...P);
          let v = d;
          for (; v; ) {
            if (h in v.instances) return v.instances[h];
            if (h in v.factories) break;
            v = v.parent;
          }
          const A = (v?.factories[h] ?? R)();
          return ((v ?? d).instances[h] = A), A;
        }
        var S = a(58632),
          z = a.n(S);
        function O(P, R) {
          return new (z())(
            async (d) => {
              const h = [...d],
                v = await g.xtC.GetPlayerLinkDetails(P, { steamids: h }),
                D = new Map();
              return (
                v
                  .Body()
                  .accounts()
                  .forEach((A) => {
                    const C = A.toObject();
                    D.set(C.public_data.steamid, C);
                  }),
                h.map((A) => D.get(A) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...R },
          );
        }
        function F(P) {
          return L("PlayerLinkDetails", () => O(P));
        }
      },
      59432: (U, E, a) => {
        "use strict";
        a.d(E, { Gw: () => j, Lk: () => G, ai: () => l, mm: () => b });
        var g = a(14947);
        const I = g.sH.box(void 0);
        function b() {
          return I.get();
        }
        function l(m) {
          (0, g.h5)(() => I.set(m));
        }
        function j() {
          const m = I.get();
          return m || Math.floor(Date.now() / 1e3);
        }
        function G() {
          const m = I.get();
          return m ? new Date(m * 1e3) : new Date();
        }
      },
      85528: (U, E, a) => {
        "use strict";
        a.d(E, { Vw: () => C });
        var g = a(14947),
          I = a(99412),
          b = a(72604),
          l = a(35038),
          j = a(69561),
          G = a(3166);
        class m {
          m_nLastUpdated = 0;
          m_mapLanguages = g.sH.map();
          m_appid;
          m_fetching = null;
          constructor(e) {
            this.m_appid = e;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(e) {
            return this.m_mapLanguages.has(e)
              ? this.m_mapLanguages.get(e)
              : null;
          }
          Localize(e, s) {
            let t = G.TS.LANGUAGE,
              o = this.GetTokenList(t),
              n = t != "english" ? this.GetTokenList("english") : null;
            return w(e, o, n, this.m_appid, s);
          }
          SubstituteParams(e, s) {
            let t = G.TS.LANGUAGE,
              o = this.GetTokenList(t),
              n = t != "english" ? this.GetTokenList("english") : null;
            return L(e, o, n, this.m_appid, s);
          }
        }
        function w(c, e, s, t, o) {
          if (!c.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                c,
                "appid",
                t,
                "tokens",
                e,
              ),
              ""
            );
          let n = c;
          c = c.toLowerCase();
          let f = "";
          if (
            (e && e.has(c) && (f = e.get(c)),
            !f && s && s.has(c) && (f = s.get(c)),
            f)
          )
            f = L(f, e, s, t, o);
          else if (
            ((e || s) &&
              console.log(
                "No loc found for appid",
                t,
                n,
                "Tokens:",
                e,
                "Fallback:",
                s,
              ),
            e && G.TS.EUNIVERSE != I.wLO)
          )
            return c;
          return f;
        }
        function L(c, e, s, t, o) {
          let n = /{[A-za-z0-9_%#:]+}/g,
            f = c.match(n);
          if (f)
            for (let y of f) {
              let H = y.slice(1, -1),
                T = S(H, o),
                N = w(T, e, s, t, o);
              if (!N) return "";
              c = c.replace(y, N);
            }
          return (c = S(c, o)), c;
        }
        function S(c, e) {
          let s = /%[A-Za-z0-9_:]+%/g,
            t = c.match(s);
          if (t)
            for (let o of t) {
              let n = o.slice(1, -1).toLowerCase(),
                f = e.get(n);
              f == null
                ? console.log("No rich presence found for", n)
                : (c = c.replace(o, f));
            }
          return c;
        }
        var z = a(72849),
          O = a(71742),
          F = a(8323),
          P = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          d = (c, e, s, t) => {
            for (
              var o = t > 1 ? void 0 : t ? R(e, s) : e, n = c.length - 1, f;
              n >= 0;
              n--
            )
              (f = c[n]) && (o = (t ? f(e, s, o) : f(o)) || o);
            return t && o && P(e, s, o), o;
          };
        function h(c) {
          return useObserver(() => C.GetAppInfo(c));
        }
        function v(c) {
          return useObserver(() => c.map((e) => C.GetAppInfo(e)));
        }
        const D = 3600 * 24 * 7 * 2;
        class A {
          m_CMInterface;
          m_mapAppInfo = g.sH.map();
          m_mapRichPresenceLoc = g.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new F.lu();
          constructor() {
            (0, g.Gn)(this);
          }
          Init(e) {
            this.m_CMInterface = e;
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
          RegisterCallbackOnLoad(e) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, O.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                e();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(e);
          }
          IsLoadingAppID(e) {
            return this.m_setPendingAppInfo.has(e);
          }
          GetAppInfo(e) {
            if (
              ((0, O.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(e))
            ) {
              let s = new j.by(e);
              this.m_mapAppInfo.set(e, s), this.QueueAppInfoRequest(e);
            }
            return this.m_mapAppInfo.get(e);
          }
          QueueAppInfoRequest(e) {
            return e
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (s) => (this.m_PendingAppInfoResolve = s),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(e),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const e = this.m_PendingAppInfoResolve,
              s = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(s),
              e?.();
          }
          async LoadAppInfoBatch(e) {
            this.m_cAppInfoRequestsInFlight++;
            let s = await this.LoadAppInfoBatchFromLocalCache(e);
            if (s.length) {
              console.log("Loading batch of App Info from Steam: ", s),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let t = l.w.Init(z._z);
              t.Body().set_language((0, I.sfN)(G.TS.LANGUAGE));
              const o = 50;
              for (; s.length > 0; ) {
                const n = Math.min(o, s.length),
                  f = s.slice(0, n);
                (s = s.slice(n)), t.Body().set_appids(f);
                const y = await z.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  t,
                );
                y.GetEResult() == b.R
                  ? this.OnGetAppsResponse(y)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${y.GetEResult()}, AppIDs:`,
                      f,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(e) {
            let s = [];
            for (let t of e.Body().apps()) {
              let o = this.m_mapAppInfo.get(t.appid());
              (0, O.wT)(
                o,
                `Got AppInfo response for unrequested AppID: ${t.appid()}`,
              ),
                o &&
                  ((o = new j.by(t.appid())),
                  o.DeserializeFromMessage(t),
                  this.m_mapAppInfo.set(t.appid(), o),
                  s.push(o));
            }
            this.SaveAppInfoBatchToLocalCache(s);
          }
          OnAppOverviewChange(e) {
            for (let s of e) {
              const t = new j.by(s.appid());
              t.DeserializeFromAppOverview(s),
                t.is_initialized && this.m_mapAppInfo.set(s.appid(), t);
            }
          }
          async EnsureAppInfoForAppIDs(e) {
            let s = !1;
            return (
              e.forEach((t) => {
                let o = this.m_mapAppInfo.get(t);
                if (o) {
                  o.is_valid || (s = !0);
                  return;
                }
                (o = new j.by(t)),
                  this.m_mapAppInfo.set(t, o),
                  this.QueueAppInfoRequest(t),
                  (s = !0);
              }),
              s && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(e) {
            this.m_CacheStorage = e;
          }
          GetCacheKeyForAppID(e) {
            return "APPINFO_" + e;
          }
          async LoadAppInfoBatchFromLocalCache(e) {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const s = new Date(new Date().getTime() - D * 1e3),
              t = async (y) => {
                const H = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(y),
                );
                if (!H) return y;
                let T = this.m_mapAppInfo.get(y);
                return (
                  (0, O.wT)(
                    T,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  T
                    ? ((T = new j.by(y)),
                      T.DeserializeFromCacheObject(H),
                      T.is_initialized
                        ? (this.m_mapAppInfo.set(y, T),
                          T.time_updated_from_server < s ? y : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            y,
                            H,
                          ),
                          y))
                    : y
                );
              };
            let o = e.map((y) => t(y));
            return (await Promise.all(o)).filter((y) => y !== null);
          }
          async SaveAppInfoBatchToLocalCache(e) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((s) => s.appid),
              );
              for (const s of e) {
                const t = s.SerializeToCacheObject();
                t &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(s.appid),
                    t,
                  );
              }
            }
          }
          Localize(e, s, t) {
            const o = this.GetRichPresenceLoc(e);
            return o
              ? o.Localize(s, t)
              : G.TS.EUNIVERSE != I.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${e} token ${s}, this may not have had a chance to load yet`,
                  ),
                  s)
                : "";
          }
          GetRichPresenceLoc(e) {
            if (this.m_mapRichPresenceLoc.has(e.toString())) {
              let t = this.m_mapRichPresenceLoc.get(e.toString());
              return (
                t.m_nLastUpdated + 1e3 * 60 * j.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(t),
                t
              );
            }
            let s = new m(e);
            return (
              this.m_mapRichPresenceLoc.set(e.toString(), s),
              this.QueueRichPresenceLocRequest(s),
              s
            );
          }
          GetRichPresenceLocAsync(e) {
            let s = this.GetRichPresenceLoc(e);
            return s.m_nLastUpdated ? Promise.resolve(s) : s.m_fetching;
          }
          OnRichPresenceLocUpdate(e, s) {
            e.m_nLastUpdated = Date.now();
            for (let t of s) {
              let o = t.language(),
                n = e.m_mapLanguages.get(o);
              n
                ? n.clear()
                : (e.m_mapLanguages.set(o, new Map()),
                  (n = e.m_mapLanguages.get(o)));
              for (let f of t.tokens())
                n?.set(f.name().toLowerCase(), f.value());
            }
          }
          QueueRichPresenceLocRequest(e) {
            return (
              e.m_fetching ||
                ((e.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let s = l.w.Init(z.zQ);
                    return (
                      s.Body().set_appid(e.GetAppID()),
                      s.Body().set_language(G.TS.LANGUAGE),
                      z.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        s,
                      )
                    );
                  })
                  .then(
                    (s) => (
                      (e.m_fetching = null),
                      s.GetEResult() != b.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            e,
                            s.Body().token_lists(),
                          ),
                          Promise.resolve(e))
                    ),
                  )),
                e.m_fetching.catch(() => {
                  e.m_fetching = null;
                })),
              e.m_fetching
            );
          }
        }
        d([g.XI], A.prototype, "OnGetAppsResponse", 1),
          d([g.XI], A.prototype, "OnRichPresenceLocUpdate", 1);
        const C = new A();
      },
      7582: (U, E, a) => {
        "use strict";
        a.d(E, { HD: () => w, P_: () => L, f1: () => P, sB: () => F });
        var g = a(19367),
          I = a.n(g),
          b = a(90626),
          l = a(59432),
          j = a(47689),
          G = a(77291);
        class m {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, l.mm)();
          }
          set nOverrideDateNow(h) {
            (0, l.ai)(h);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, l.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, l.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, l.mm)();
          }
          ParseDevOverrides(h) {
            if (!h || h.length == 0) return;
            new URLSearchParams(h[0] == "?" ? h.substring(1) : h).has("t");
          }
        }
        const w = new m();
        (0, G.V)("g_EventCalendarDevFeatures", w);
        function L(d = 1) {
          const [h, v] = b.useState(() => O()),
            D = (0, j.m)("useTimeNowWithOverride"),
            A = b.useCallback(() => {
              D.token.reason || v(O());
            }, []);
          return (
            b.useEffect(() => {
              const C = 1e3 * d,
                c = Date.now() % C,
                e = C - c,
                s = window.setTimeout(A, e);
              return () => {
                window.clearTimeout(s);
              };
            }, [h, d, A]),
            h
          );
        }
        const z = Math.floor(new Date().getTime() / 1e3);
        function O() {
          const d = Math.floor(Date.now() / 1e3);
          return w.nOverrideDateNow ? w.nOverrideDateNow + (d - z) : d;
        }
        function F() {
          return w.nOverrideDateNow ?? z;
        }
        function P() {
          return b.useMemo(() => F(), []);
        }
        function R() {
          return React.useMemo(() => w.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      62092: (U, E, a) => {
        "use strict";
        a.d(E, { z0: () => K, DW: () => W, js: () => T, hW: () => N });
        var g = a(90626),
          I = a(20194),
          b = a(54806),
          l = a(99412),
          j = a(68312),
          G = a(15369),
          m = a(14947),
          w = a(31561),
          L = a(85528),
          S = a(18210);
        const z = 1,
          O = 2,
          F = 4,
          P = 8,
          R = 256,
          d = 512,
          h = 1024,
          v = 2048,
          D = 4096,
          A = 8192;
        var C = a(3166),
          c = a(35413),
          e = Object.defineProperty,
          s = Object.getOwnPropertyDescriptor,
          t = (u, i, r, p) => {
            for (
              var _ = p > 1 ? void 0 : p ? s(i, r) : i, M = u.length - 1, x;
              M >= 0;
              M--
            )
              (x = u[M]) && (_ = (p ? x(i, r, _) : x(_)) || _);
            return p && _ && e(i, r, _), _;
          };
        function o(u) {
          let i = "offline";
          return (
            u &&
              (u.is_ingame
                ? (i = "ingame")
                : u.m_broadcastAccountId
                  ? (i = "watchingbroadcast")
                  : u.is_online && (i = "online"),
              u.is_awayOrSnooze && (i += " awayOrSnooze")),
            i
          );
        }
        class n {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = l.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = c.d;
          m_strAccountName = "";
          m_rtLastSeenOnline = 0;
          m_strGameExtraInfo = "";
          m_unGameServerIP = 0;
          m_unGameServerPort = 0;
          m_game_lobby_id = "";
          m_bPlayerNamePending = !1;
          m_bAvatarPending = !1;
          m_broadcastId = void 0;
          m_broadcastAccountId = void 0;
          m_broadcastAppId = void 0;
          m_broadcastViewerCount = void 0;
          m_strBroadcastTitle = void 0;
          m_bCommunityBanned = void 0;
          m_eGamingDeviceType = l.eSB;
          m_mapRichPresence = m.sH.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(i) {
            (0, m.Gn)(this), (this.m_steamid = i);
          }
          Reset() {
            (this.m_ePersonaState = l.cU3),
              (this.m_unGamePlayedAppID = 0),
              (this.m_gameid = "0"),
              (this.m_strGameExtraInfo = ""),
              (this.m_unGameServerIP = 0),
              (this.m_unGameServerPort = 0),
              (this.m_game_lobby_id = ""),
              this.m_mapRichPresence.clear(),
              (this.m_broadcastId = void 0),
              (this.m_broadcastAccountId = void 0),
              (this.m_broadcastAppId = void 0),
              (this.m_broadcastViewerCount = void 0),
              (this.m_strBroadcastTitle = void 0),
              (this.m_eGamingDeviceType = l.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != l.cU3 && this.m_ePersonaState != l._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
          }
          get is_in_joinable_game() {
            return (
              this.has_joinable_game_flag ||
              this.is_in_valid_lobby ||
              this.has_server_ip
            );
          }
          get has_joinable_game_flag() {
            return ((this.m_unPersonaStateFlags ?? 0) & O) != 0;
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == l.PrD || this.m_ePersonaState == l.vPz
            );
          }
          HasStateFlag(i) {
            return ((this.m_unPersonaStateFlags ?? 0) & i) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != l.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(F);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? L.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? L.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? L.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
          }
          HasCurrentGameRichPresence() {
            return this.m_mapRichPresence.has("steam_display");
          }
          HasRichPresenceForViewGameInfo() {
            return !!(
              this.m_mapRichPresence.has("status") ||
              this.m_mapRichPresence.has("connect") ||
              this.m_mapRichPresence.has("connect_private")
            );
          }
          GetCurrentGameRichPresence() {
            if (this.HasCurrentGameRichPresence()) {
              let i = L.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (i) {
                let r = this.m_mapRichPresence.get("steam_display");
                return i.Localize(r, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(P))
              return (0, S.we)("#PersonaStateRemotePlayTogether");
            return "";
          }
          GetCurrentGameStatus() {
            return (
              this.GetCurrentGameRichPresence() ||
              this.m_mapRichPresence.get("status") ||
              ""
            );
          }
          GetOfflineStatusUpdateRate() {
            if (this.last_seen_online == 0) return 3e4;
            const i = 60,
              r = i * 60,
              p = r * 24;
            let _ = 1e3;
            const M =
              L.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return M > p ? (_ *= r) : M > 2 * r ? (_ *= i) : (_ *= i / 4), _;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, S.we)("#PersonaStateOffline");
            let i = this.GetOfflineStatusUpdateRate();
            (!C.TS.IN_MOBILE || i <= 60) && (0, w.tB)(i);
            let r = L.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return r < 60
              ? (0, S.we)("#PersonaStateLastSeen_JustNow")
              : (0, S.we)("#PersonaStateLastSeen", (0, S.Hq)(r));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case l.cU3:
              case l._3b:
                return this.GetOfflineStatusTime();
              case l.UXk:
                return (0, S.we)("#PersonaStateOnline");
              case l.wcG:
                return (0, S.we)("#PersonaStateBusy");
              case l.PrD:
                return (0, S.we)("#PersonaStateAway");
              case l.vPz:
                return (0, S.we)("#PersonaStateSnooze");
              case l.Hrn:
                return (0, S.we)("#PersonaStateLookingToTrade");
              case l.HAb:
                return (0, S.we)("#PersonaStateLookingToPlay");
              default:
                return "";
            }
          }
          get has_public_party_beacon() {
            return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
          }
          get player_group() {
            return this.m_mapRichPresence.has("steam_player_group")
              ? this.m_mapRichPresence.get("steam_player_group")
              : "";
          }
          get player_group_size() {
            return this.m_mapRichPresence.has("steam_player_group_size")
              ? Number.parseInt(
                  this.m_mapRichPresence.get("steam_player_group_size"),
                )
              : 0;
          }
          get online_state() {
            return this.is_online
              ? this.is_ingame
                ? "in-game"
                : this.m_broadcastAccountId
                  ? "watchingbroadcast"
                  : "online"
              : "offline";
          }
          BHasAvatarSet() {
            return this.m_strAvatarHash != c.d;
          }
          get avatar_url() {
            return (0, c.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, c.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, c.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(i, r, p) {
            if (r.has_public_party_beacon) {
              if (!p.has_public_party_beacon) return -1;
            } else {
              if (p.has_public_party_beacon) return 1;
              if (r.is_ingame)
                if (p.is_ingame)
                  if (i) {
                    if (r.is_awayOrSnooze) {
                      if (!p.is_awayOrSnooze) return 1;
                    } else if (p.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (p.is_ingame) return 1;
            }
            if (r.is_online) {
              if (!p.is_online) return -1;
            } else if (p.is_online) return 1;
            if (i) {
              if (r.is_awayOrSnooze) {
                if (!p.is_awayOrSnooze) return 1;
              } else if (p.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${C.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${C.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        t([m.sH], n.prototype, "m_bInitialized", 2),
          t([m.sH], n.prototype, "m_ePersonaState", 2),
          t([m.sH], n.prototype, "m_unGamePlayedAppID", 2),
          t([m.sH], n.prototype, "m_gameid", 2),
          t([m.sH], n.prototype, "m_unPersonaStateFlags", 2),
          t([m.sH], n.prototype, "m_strPlayerName", 2),
          t([m.sH], n.prototype, "m_strAvatarHash", 2),
          t([m.sH], n.prototype, "m_strAccountName", 2),
          t([m.sH], n.prototype, "m_rtLastSeenOnline", 2),
          t([m.sH], n.prototype, "m_strGameExtraInfo", 2),
          t([m.sH], n.prototype, "m_unGameServerIP", 2),
          t([m.sH], n.prototype, "m_unGameServerPort", 2),
          t([m.sH], n.prototype, "m_game_lobby_id", 2),
          t([m.sH], n.prototype, "m_bPlayerNamePending", 2),
          t([m.sH], n.prototype, "m_bAvatarPending", 2),
          t([m.sH], n.prototype, "m_broadcastId", 2),
          t([m.sH], n.prototype, "m_broadcastAccountId", 2),
          t([m.sH], n.prototype, "m_broadcastAppId", 2),
          t([m.sH], n.prototype, "m_broadcastViewerCount", 2),
          t([m.sH], n.prototype, "m_strBroadcastTitle", 2),
          t([m.sH], n.prototype, "m_bCommunityBanned", 2),
          t([m.sH], n.prototype, "m_eGamingDeviceType", 2),
          t([m.sH], n.prototype, "m_bNameInitialized", 2);
        var f = a(76559),
          y = a(40497),
          H = a(49614);
        function T(u) {
          const i = (0, j.KV)(),
            r = g.useContext(B);
          return (0, I.I)(k(r, i, u));
        }
        function N(u) {
          const i = g.useRef(void 0),
            r = T(u);
          return r.data
            ? r
            : (i.current ||
                (i.current = new n(
                  typeof u == "string" ? new f.b(u) : f.b.InitFromAccountID(u),
                )),
              { ...r, data: i.current });
        }
        function W(u) {
          const i = (0, j.KV)(),
            r = g.useContext(B);
          return (0, b.E)({ queries: u.map((p) => k(r, i, p)) });
        }
        function K(u) {
          return y.L.getQueryData(["PlayerSummary", u]);
        }
        function J(u) {
          const { loadPersonaState: i, children: r } = u,
            p = React.useMemo(() => ({ loadPersonaState: i }), [i]);
          return React.createElement(B.Provider, { value: p }, r);
        }
        const B = g.createContext({
          loadPersonaState: async (u, i) => {
            if (u == null) return null;
            const r = await $(i).load(
              f.b.InitFromAccountID(u).ConvertTo64BitString(),
            );
            return Q(f.b.InitFromAccountID(u), r);
          },
        });
        function X() {
          return React.useContext(B);
        }
        function k(u, i, r) {
          const p = typeof r == "string" ? new f.b(r).GetAccountID() : r;
          return {
            queryKey: ["PlayerSummary", p],
            queryFn: () => u.loadPersonaState(p, i),
            enabled: !!p,
          };
        }
        let V;
        function $(u) {
          return (V ??= (0, H.c)(u));
        }
        function Q(u, i) {
          let r = new n(u);
          const p = i?.public_data,
            _ = i?.private_data;
          return (
            (r.m_bInitialized = !!i),
            (r.m_ePersonaState = _?.persona_state ?? l.cU3),
            (r.m_strAvatarHash = p?.sha_digest_avatar
              ? (0, G.Kx)(p.sha_digest_avatar)
              : c.d),
            (r.m_strPlayerName = p?.persona_name ?? u.ConvertTo64BitString()),
            (r.m_strAccountName = _?.account_name),
            _?.persona_state_flags &&
              (r.m_unPersonaStateFlags = _?.persona_state_flags),
            _?.game_id && (r.m_gameid = _?.game_id),
            _?.game_server_ip_address &&
              (r.m_unGameServerIP = _?.game_server_ip_address),
            _?.lobby_steam_id && (r.m_game_lobby_id = _?.lobby_steam_id),
            _?.game_extra_info && (r.m_strGameExtraInfo = _?.game_extra_info),
            p?.profile_url && (r.m_strProfileURL = p.profile_url),
            r
          );
        }
      },
      61738: (U, E, a) => {
        var g = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function I(l) {
          var j = b(l);
          return a(j);
        }
        function b(l) {
          if (!a.o(g, l)) {
            var j = new Error("Cannot find module '" + l + "'");
            throw ((j.code = "MODULE_NOT_FOUND"), j);
          }
          return g[l];
        }
        (I.keys = function () {
          return Object.keys(g);
        }),
          (I.resolve = b),
          (U.exports = I),
          (I.id = 61738);
      },
    },
  ]);
})();
