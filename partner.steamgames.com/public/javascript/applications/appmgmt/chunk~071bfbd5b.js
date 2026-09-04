/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [6627],
    {
      88034: (H, C, o) => {
        "use strict";
        o.d(C, { Gw: () => g, Lk: () => j, ai: () => u, mm: () => y });
        var _ = o(14947);
        const P = _.sH.box(void 0);
        function y() {
          return P.get();
        }
        function u(l) {
          (0, _.h5)(() => P.set(l));
        }
        function g() {
          const l = P.get();
          return l || Math.floor(Date.now() / 1e3);
        }
        function j() {
          const l = P.get();
          return l ? new Date(l * 1e3) : new Date();
        }
      },
      85528: (H, C, o) => {
        "use strict";
        o.d(C, { Vw: () => G });
        var _ = o(14947),
          P = o(99412),
          y = o(72604),
          u = o(35038),
          g = o(69561),
          j = o(3166);
        class l {
          m_nLastUpdated = 0;
          m_mapLanguages = _.sH.map();
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
            let t = j.TS.LANGUAGE,
              i = this.GetTokenList(t),
              n = t != "english" ? this.GetTokenList("english") : null;
            return S(e, i, n, this.m_appid, s);
          }
          SubstituteParams(e, s) {
            let t = j.TS.LANGUAGE,
              i = this.GetTokenList(t),
              n = t != "english" ? this.GetTokenList("english") : null;
            return A(e, i, n, this.m_appid, s);
          }
        }
        function S(m, e, s, t, i) {
          if (!m.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                m,
                "appid",
                t,
                "tokens",
                e,
              ),
              ""
            );
          let n = m;
          m = m.toLowerCase();
          let f = "";
          if (
            (e && e.has(m) && (f = e.get(m)),
            !f && s && s.has(m) && (f = s.get(m)),
            f)
          )
            f = A(f, e, s, t, i);
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
            e && j.TS.EUNIVERSE != P.wLO)
          )
            return m;
          return f;
        }
        function A(m, e, s, t, i) {
          let n = /{[A-za-z0-9_%#:]+}/g,
            f = m.match(n);
          if (f)
            for (let d of f) {
              let D = d.slice(1, -1),
                b = v(D, i),
                N = S(b, e, s, t, i);
              if (!N) return "";
              m = m.replace(d, N);
            }
          return (m = v(m, i)), m;
        }
        function v(m, e) {
          let s = /%[A-Za-z0-9_:]+%/g,
            t = m.match(s);
          if (t)
            for (let i of t) {
              let n = i.slice(1, -1).toLowerCase(),
                f = e.get(n);
              f == null
                ? console.log("No rich presence found for", n)
                : (m = m.replace(i, f));
            }
          return m;
        }
        var O = o(72849),
          L = o(71742),
          z = o(8323),
          U = Object.defineProperty,
          k = Object.getOwnPropertyDescriptor,
          R = (m, e, s, t) => {
            for (
              var i = t > 1 ? void 0 : t ? k(e, s) : e, n = m.length - 1, f;
              n >= 0;
              n--
            )
              (f = m[n]) && (i = (t ? f(e, s, i) : f(i)) || i);
            return t && i && U(e, s, i), i;
          };
        function I(m) {
          return useObserver(() => G.GetAppInfo(m));
        }
        function F(m) {
          return useObserver(() => m.map((e) => G.GetAppInfo(e)));
        }
        const M = 3600 * 24 * 7 * 2;
        class T {
          m_CMInterface;
          m_mapAppInfo = _.sH.map();
          m_mapRichPresenceLoc = _.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new z.lu();
          constructor() {
            (0, _.Gn)(this);
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
              (0, L.wT)(
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
              ((0, L.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(e))
            ) {
              let s = new g.by(e);
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
              let t = u.w.Init(O._z);
              t.Body().set_language((0, P.sfN)(j.TS.LANGUAGE));
              const i = 50;
              for (; s.length > 0; ) {
                const n = Math.min(i, s.length),
                  f = s.slice(0, n);
                (s = s.slice(n)), t.Body().set_appids(f);
                const d = await O.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  t,
                );
                d.GetEResult() == y.R
                  ? this.OnGetAppsResponse(d)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${d.GetEResult()}, AppIDs:`,
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
              let i = this.m_mapAppInfo.get(t.appid());
              (0, L.wT)(
                i,
                `Got AppInfo response for unrequested AppID: ${t.appid()}`,
              ),
                i &&
                  ((i = new g.by(t.appid())),
                  i.DeserializeFromMessage(t),
                  this.m_mapAppInfo.set(t.appid(), i),
                  s.push(i));
            }
            this.SaveAppInfoBatchToLocalCache(s);
          }
          OnAppOverviewChange(e) {
            for (let s of e) {
              const t = new g.by(s.appid());
              t.DeserializeFromAppOverview(s),
                t.is_initialized && this.m_mapAppInfo.set(s.appid(), t);
            }
          }
          async EnsureAppInfoForAppIDs(e) {
            let s = !1;
            return (
              e.forEach((t) => {
                let i = this.m_mapAppInfo.get(t);
                if (i) {
                  i.is_valid || (s = !0);
                  return;
                }
                (i = new g.by(t)),
                  this.m_mapAppInfo.set(t, i),
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
            const s = new Date(new Date().getTime() - M * 1e3),
              t = async (d) => {
                const D = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(d),
                );
                if (!D) return d;
                let b = this.m_mapAppInfo.get(d);
                return (
                  (0, L.wT)(
                    b,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  b
                    ? ((b = new g.by(d)),
                      b.DeserializeFromCacheObject(D),
                      b.is_initialized
                        ? (this.m_mapAppInfo.set(d, b),
                          b.time_updated_from_server < s ? d : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            d,
                            D,
                          ),
                          d))
                    : d
                );
              };
            let i = e.map((d) => t(d));
            return (await Promise.all(i)).filter((d) => d !== null);
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
            const i = this.GetRichPresenceLoc(e);
            return i
              ? i.Localize(s, t)
              : j.TS.EUNIVERSE != P.wLO
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
                t.m_nLastUpdated + 1e3 * 60 * g.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(t),
                t
              );
            }
            let s = new l(e);
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
              let i = t.language(),
                n = e.m_mapLanguages.get(i);
              n
                ? n.clear()
                : (e.m_mapLanguages.set(i, new Map()),
                  (n = e.m_mapLanguages.get(i)));
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
                    let s = u.w.Init(O.zQ);
                    return (
                      s.Body().set_appid(e.GetAppID()),
                      s.Body().set_language(j.TS.LANGUAGE),
                      O.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        s,
                      )
                    );
                  })
                  .then(
                    (s) => (
                      (e.m_fetching = null),
                      s.GetEResult() != y.R
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
        R([_.XI], T.prototype, "OnGetAppsResponse", 1),
          R([_.XI], T.prototype, "OnRichPresenceLocUpdate", 1);
        const G = new T();
      },
      7582: (H, C, o) => {
        "use strict";
        o.d(C, { HD: () => S, P_: () => A, f1: () => U, sB: () => z });
        var _ = o(19367),
          P = o.n(_),
          y = o(90626),
          u = o(88034),
          g = o(47689),
          j = o(77291);
        class l {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, u.mm)();
          }
          set nOverrideDateNow(I) {
            (0, u.ai)(I);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, u.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, u.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, u.mm)();
          }
          ParseDevOverrides(I) {
            if (!I || I.length == 0) return;
            new URLSearchParams(I[0] == "?" ? I.substring(1) : I).has("t");
          }
        }
        const S = new l();
        (0, j.V)("g_EventCalendarDevFeatures", S);
        function A(R = 1) {
          const [I, F] = y.useState(() => L()),
            M = (0, g.m)("useTimeNowWithOverride"),
            T = y.useCallback(() => {
              M.token.reason || F(L());
            }, []);
          return (
            y.useEffect(() => {
              const G = 1e3 * R,
                m = Date.now() % G,
                e = G - m,
                s = window.setTimeout(T, e);
              return () => {
                window.clearTimeout(s);
              };
            }, [I, R, T]),
            I
          );
        }
        const O = Math.floor(new Date().getTime() / 1e3);
        function L() {
          const R = Math.floor(Date.now() / 1e3);
          return S.nOverrideDateNow ? S.nOverrideDateNow + (R - O) : R;
        }
        function z() {
          return S.nOverrideDateNow ?? O;
        }
        function U() {
          return y.useMemo(() => z(), []);
        }
        function k() {
          return React.useMemo(() => S.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      30131: (H, C, o) => {
        "use strict";
        o.d(C, { z0: () => X, DW: () => Q, js: () => W, hW: () => $ });
        var _ = o(90626),
          P = o(20194),
          y = o(54806),
          u = o(99412),
          g = o(68312),
          j = o(15369),
          l = o(14947),
          S = o(31561),
          A = o(85528),
          v = o(18210);
        const O = 1,
          L = 2,
          z = 4,
          U = 8,
          k = 256,
          R = 512,
          I = 1024,
          F = 2048,
          M = 4096,
          T = 8192;
        var G = o(3166),
          m = o(35413),
          e = Object.defineProperty,
          s = Object.getOwnPropertyDescriptor,
          t = (c, r, a, p) => {
            for (
              var h = p > 1 ? void 0 : p ? s(r, a) : r, w = c.length - 1, E;
              w >= 0;
              w--
            )
              (E = c[w]) && (h = (p ? E(r, a, h) : E(h)) || h);
            return p && h && e(r, a, h), h;
          };
        function i(c) {
          let r = "offline";
          return (
            c &&
              (c.is_ingame
                ? (r = "ingame")
                : c.m_broadcastAccountId
                  ? (r = "watchingbroadcast")
                  : c.is_online && (r = "online"),
              c.is_awayOrSnooze && (r += " awayOrSnooze")),
            r
          );
        }
        class n {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = u.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = m.d;
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
          m_eGamingDeviceType = u.eSB;
          m_mapRichPresence = l.sH.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(r) {
            (0, l.Gn)(this), (this.m_steamid = r);
          }
          Reset() {
            (this.m_ePersonaState = u.cU3),
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
              (this.m_eGamingDeviceType = u.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != u.cU3 && this.m_ePersonaState != u._3b
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
            return ((this.m_unPersonaStateFlags ?? 0) & L) != 0;
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
              this.m_ePersonaState == u.PrD || this.m_ePersonaState == u.vPz
            );
          }
          HasStateFlag(r) {
            return ((this.m_unPersonaStateFlags ?? 0) & r) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != u.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(z);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? A.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? A.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? A.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
              let r = A.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (r) {
                let a = this.m_mapRichPresence.get("steam_display");
                return r.Localize(a, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(U))
              return (0, v.we)("#PersonaStateRemotePlayTogether");
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
            const r = 60,
              a = r * 60,
              p = a * 24;
            let h = 1e3;
            const w =
              A.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return w > p ? (h *= a) : w > 2 * a ? (h *= r) : (h *= r / 4), h;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, v.we)("#PersonaStateOffline");
            let r = this.GetOfflineStatusUpdateRate();
            (!G.TS.IN_MOBILE || r <= 60) && (0, S.tB)(r);
            let a = A.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return a < 60
              ? (0, v.we)("#PersonaStateLastSeen_JustNow")
              : (0, v.we)("#PersonaStateLastSeen", (0, v.Hq)(a));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case u.cU3:
              case u._3b:
                return this.GetOfflineStatusTime();
              case u.UXk:
                return (0, v.we)("#PersonaStateOnline");
              case u.wcG:
                return (0, v.we)("#PersonaStateBusy");
              case u.PrD:
                return (0, v.we)("#PersonaStateAway");
              case u.vPz:
                return (0, v.we)("#PersonaStateSnooze");
              case u.Hrn:
                return (0, v.we)("#PersonaStateLookingToTrade");
              case u.HAb:
                return (0, v.we)("#PersonaStateLookingToPlay");
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
            return this.m_strAvatarHash != m.d;
          }
          get avatar_url() {
            return (0, m.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, m.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, m.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(r, a, p) {
            if (a.has_public_party_beacon) {
              if (!p.has_public_party_beacon) return -1;
            } else {
              if (p.has_public_party_beacon) return 1;
              if (a.is_ingame)
                if (p.is_ingame)
                  if (r) {
                    if (a.is_awayOrSnooze) {
                      if (!p.is_awayOrSnooze) return 1;
                    } else if (p.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (p.is_ingame) return 1;
            }
            if (a.is_online) {
              if (!p.is_online) return -1;
            } else if (p.is_online) return 1;
            if (r) {
              if (a.is_awayOrSnooze) {
                if (!p.is_awayOrSnooze) return 1;
              } else if (p.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${G.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${G.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        t([l.sH], n.prototype, "m_bInitialized", 2),
          t([l.sH], n.prototype, "m_ePersonaState", 2),
          t([l.sH], n.prototype, "m_unGamePlayedAppID", 2),
          t([l.sH], n.prototype, "m_gameid", 2),
          t([l.sH], n.prototype, "m_unPersonaStateFlags", 2),
          t([l.sH], n.prototype, "m_strPlayerName", 2),
          t([l.sH], n.prototype, "m_strAvatarHash", 2),
          t([l.sH], n.prototype, "m_strAccountName", 2),
          t([l.sH], n.prototype, "m_rtLastSeenOnline", 2),
          t([l.sH], n.prototype, "m_strGameExtraInfo", 2),
          t([l.sH], n.prototype, "m_unGameServerIP", 2),
          t([l.sH], n.prototype, "m_unGameServerPort", 2),
          t([l.sH], n.prototype, "m_game_lobby_id", 2),
          t([l.sH], n.prototype, "m_bPlayerNamePending", 2),
          t([l.sH], n.prototype, "m_bAvatarPending", 2),
          t([l.sH], n.prototype, "m_broadcastId", 2),
          t([l.sH], n.prototype, "m_broadcastAccountId", 2),
          t([l.sH], n.prototype, "m_broadcastAppId", 2),
          t([l.sH], n.prototype, "m_broadcastViewerCount", 2),
          t([l.sH], n.prototype, "m_strBroadcastTitle", 2),
          t([l.sH], n.prototype, "m_bCommunityBanned", 2),
          t([l.sH], n.prototype, "m_eGamingDeviceType", 2),
          t([l.sH], n.prototype, "m_bNameInitialized", 2);
        var f = o(76559),
          d = o(40497),
          D = o(59514),
          b = o(58632),
          N = o.n(b);
        function x(c, r) {
          return new (N())(
            async (a) => {
              const p = [...a],
                h = await D.xtC.GetPlayerLinkDetails(c, { steamids: p }),
                w = new Map();
              return (
                h
                  .Body()
                  .accounts()
                  .forEach((E) => {
                    const K = E.toObject();
                    w.set(K.public_data.steamid, K);
                  }),
                p.map((E) => w.get(E) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...r },
          );
        }
        function q(c) {
          return useDataLoader("PlayerLinkDetails", () => x(c));
        }
        function W(c) {
          const r = (0, g.KV)(),
            a = _.useContext(B);
          return (0, P.I)(V(a, r, c));
        }
        function $(c) {
          const r = _.useRef(void 0),
            a = W(c);
          return a.data
            ? a
            : (r.current ||
                (r.current = new n(
                  typeof c == "string" ? new f.b(c) : f.b.InitFromAccountID(c),
                )),
              { ...a, data: r.current });
        }
        function Q(c) {
          const r = (0, g.KV)(),
            a = _.useContext(B);
          return (0, y.E)({ queries: c.map((p) => V(a, r, p)) });
        }
        function X(c) {
          return d.L.getQueryData(["PlayerSummary", c]);
        }
        function ee(c) {
          const { loadPersonaState: r, children: a } = c,
            p = React.useMemo(() => ({ loadPersonaState: r }), [r]);
          return React.createElement(B.Provider, { value: p }, a);
        }
        const B = _.createContext({
          loadPersonaState: async (c, r) => {
            if (c == null) return null;
            const a = await Y(r).load(
              f.b.InitFromAccountID(c).ConvertTo64BitString(),
            );
            return Z(f.b.InitFromAccountID(c), a);
          },
        });
        function te() {
          return React.useContext(B);
        }
        function V(c, r, a) {
          const p = typeof a == "string" ? new f.b(a).GetAccountID() : a;
          return {
            queryKey: ["PlayerSummary", p],
            queryFn: () => c.loadPersonaState(p, r),
            enabled: !!p,
          };
        }
        let J;
        function Y(c) {
          return (J ??= x(c));
        }
        function Z(c, r) {
          let a = new n(c);
          const p = r?.public_data,
            h = r?.private_data;
          return (
            (a.m_bInitialized = !!r),
            (a.m_ePersonaState = h?.persona_state ?? u.cU3),
            (a.m_strAvatarHash = p?.sha_digest_avatar
              ? (0, j.Kx)(p.sha_digest_avatar)
              : m.d),
            (a.m_strPlayerName = p?.persona_name ?? c.ConvertTo64BitString()),
            (a.m_strAccountName = h?.account_name),
            h?.persona_state_flags &&
              (a.m_unPersonaStateFlags = h?.persona_state_flags),
            h?.game_id && (a.m_gameid = h?.game_id),
            h?.game_server_ip_address &&
              (a.m_unGameServerIP = h?.game_server_ip_address),
            h?.lobby_steam_id && (a.m_game_lobby_id = h?.lobby_steam_id),
            h?.game_extra_info && (a.m_strGameExtraInfo = h?.game_extra_info),
            p?.profile_url && (a.m_strProfileURL = p.profile_url),
            a
          );
        }
      },
      61738: (H, C, o) => {
        var _ = {
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
        function P(u) {
          var g = y(u);
          return o(g);
        }
        function y(u) {
          if (!o.o(_, u)) {
            var g = new Error("Cannot find module '" + u + "'");
            throw ((g.code = "MODULE_NOT_FOUND"), g);
          }
          return _[u];
        }
        (P.keys = function () {
          return Object.keys(_);
        }),
          (P.resolve = y),
          (H.exports = P),
          (P.id = 61738);
      },
    },
  ]);
})();
