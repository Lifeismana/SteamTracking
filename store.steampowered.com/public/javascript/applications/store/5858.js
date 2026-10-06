/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [5858],
    {
      88363: (H, C, c) => {
        c.d(C, {
          Fj: () => G,
          R$: () => P,
          Zx: () => I,
          hs: () => A,
          o5: () => g,
          sr: () => R,
        });
        const a = 1,
          G = 2,
          I = 4,
          g = 8,
          l = 256,
          P = 512,
          R = 1024,
          A = 2048,
          O = 4096,
          w = 8192;
      },
      85528: (H, C, c) => {
        c.d(C, { Vw: () => T });
        var a = c(14947),
          G = c(99412),
          I = c(72604),
          g = c(35038),
          l = c(67529),
          P = c(3166);
        class R {
          m_nLastUpdated = 0;
          m_mapLanguages = a.sH.map();
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
          Localize(e, t) {
            let s = P.TS.LANGUAGE,
              n = this.GetTokenList(s),
              _ = s != "english" ? this.GetTokenList("english") : null;
            return A(e, n, _, this.m_appid, t);
          }
          SubstituteParams(e, t) {
            let s = P.TS.LANGUAGE,
              n = this.GetTokenList(s),
              _ = s != "english" ? this.GetTokenList("english") : null;
            return O(e, n, _, this.m_appid, t);
          }
        }
        function A(i, e, t, s, n) {
          if (!i.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                i,
                "appid",
                s,
                "tokens",
                e,
              ),
              ""
            );
          let _ = i;
          i = i.toLowerCase();
          let p = "";
          if (
            (e && e.has(i) && (p = e.get(i)),
            !p && t && t.has(i) && (p = t.get(i)),
            p)
          )
            p = O(p, e, t, s, n);
          else if (
            ((e || t) &&
              console.log(
                "No loc found for appid",
                s,
                _,
                "Tokens:",
                e,
                "Fallback:",
                t,
              ),
            e && P.TS.EUNIVERSE != G.wLO)
          )
            return i;
          return p;
        }
        function O(i, e, t, s, n) {
          let _ = /{[A-za-z0-9_%#:]+}/g,
            p = i.match(_);
          if (p)
            for (let f of p) {
              let E = f.slice(1, -1),
                y = w(E, n),
                U = A(y, e, t, s, n);
              if (!U) return "";
              i = i.replace(f, U);
            }
          return (i = w(i, n)), i;
        }
        function w(i, e) {
          let t = /%[A-Za-z0-9_:]+%/g,
            s = i.match(t);
          if (s)
            for (let n of s) {
              let _ = n.slice(1, -1).toLowerCase(),
                p = e.get(_);
              p == null
                ? console.log("No rich presence found for", _)
                : (i = i.replace(n, p));
            }
          return i;
        }
        var o = c(72849),
          L = c(71742),
          m = c(8323),
          S = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          h = (i, e, t, s) => {
            for (
              var n = s > 1 ? void 0 : s ? r(e, t) : e, _ = i.length - 1, p;
              _ >= 0;
              _--
            )
              (p = i[_]) && (n = (s ? p(e, t, n) : p(n)) || n);
            return s && n && S(e, t, n), n;
          };
        function u(i) {
          return useObserver(() => T.GetAppInfo(i));
        }
        function d(i) {
          return useObserver(() => i.map((e) => T.GetAppInfo(e)));
        }
        const v = 3600 * 24 * 7 * 2;
        class b {
          m_CMInterface;
          m_mapAppInfo = a.sH.map();
          m_mapRichPresenceLoc = a.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new m.lu();
          constructor() {
            (0, a.Gn)(this);
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
              let t = new l.by(e);
              this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
            }
            return this.m_mapAppInfo.get(e);
          }
          QueueAppInfoRequest(e) {
            return e
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (t) => (this.m_PendingAppInfoResolve = t),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(e),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(t),
              e?.();
          }
          async LoadAppInfoBatch(e) {
            this.m_cAppInfoRequestsInFlight++;
            let t = await this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let s = g.w.Init(o._z);
              s.Body().set_language((0, G.sfN)(P.TS.LANGUAGE));
              const n = 50;
              for (; t.length > 0; ) {
                const _ = Math.min(n, t.length),
                  p = t.slice(0, _);
                (t = t.slice(_)), s.Body().set_appids(p);
                const f = await o.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  s,
                );
                f.GetEResult() == I.R
                  ? this.OnGetAppsResponse(f)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${f.GetEResult()}, AppIDs:`,
                      p,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(e) {
            let t = [];
            for (let s of e.Body().apps()) {
              let n = this.m_mapAppInfo.get(s.appid());
              (0, L.wT)(
                n,
                `Got AppInfo response for unrequested AppID: ${s.appid()}`,
              ),
                n &&
                  ((n = new l.by(s.appid())),
                  n.DeserializeFromMessage(s),
                  this.m_mapAppInfo.set(s.appid(), n),
                  t.push(n));
            }
            this.SaveAppInfoBatchToLocalCache(t);
          }
          OnAppOverviewChange(e) {
            for (let t of e) {
              const s = new l.by(t.appid());
              s.DeserializeFromAppOverview(t),
                s.is_initialized && this.m_mapAppInfo.set(t.appid(), s);
            }
          }
          async EnsureAppInfoForAppIDs(e) {
            let t = !1;
            return (
              e.forEach((s) => {
                let n = this.m_mapAppInfo.get(s);
                if (n) {
                  n.is_valid || (t = !0);
                  return;
                }
                (n = new l.by(s)),
                  this.m_mapAppInfo.set(s, n),
                  this.QueueAppInfoRequest(s),
                  (t = !0);
              }),
              t && this.m_PendingAppInfoPromise !== void 0
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
            const t = new Date(new Date().getTime() - v * 1e3),
              s = async (f) => {
                const E = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(f),
                );
                if (!E) return f;
                let y = this.m_mapAppInfo.get(f);
                return (
                  (0, L.wT)(
                    y,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  y
                    ? ((y = new l.by(f)),
                      y.DeserializeFromCacheObject(E),
                      y.is_initialized
                        ? (this.m_mapAppInfo.set(f, y),
                          y.time_updated_from_server < t ? f : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            f,
                            E,
                          ),
                          f))
                    : f
                );
              };
            let n = e.map((f) => s(f));
            return (await Promise.all(n)).filter((f) => f !== null);
          }
          async SaveAppInfoBatchToLocalCache(e) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((t) => t.appid),
              );
              for (const t of e) {
                const s = t.SerializeToCacheObject();
                s &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    s,
                  );
              }
            }
          }
          Localize(e, t, s) {
            const n = this.GetRichPresenceLoc(e);
            return n
              ? n.Localize(t, s)
              : P.TS.EUNIVERSE != G.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
                  ),
                  t)
                : "";
          }
          GetRichPresenceLoc(e) {
            if (this.m_mapRichPresenceLoc.has(e.toString())) {
              let s = this.m_mapRichPresenceLoc.get(e.toString());
              return (
                s.m_nLastUpdated + 1e3 * 60 * l.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(s),
                s
              );
            }
            let t = new R(e);
            return (
              this.m_mapRichPresenceLoc.set(e.toString(), t),
              this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          GetRichPresenceLocAsync(e) {
            let t = this.GetRichPresenceLoc(e);
            return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
          }
          OnRichPresenceLocUpdate(e, t) {
            e.m_nLastUpdated = Date.now();
            for (let s of t) {
              let n = s.language(),
                _ = e.m_mapLanguages.get(n);
              _
                ? _.clear()
                : (e.m_mapLanguages.set(n, new Map()),
                  (_ = e.m_mapLanguages.get(n)));
              for (let p of s.tokens())
                _?.set(p.name().toLowerCase(), p.value());
            }
          }
          QueueRichPresenceLocRequest(e) {
            return (
              e.m_fetching ||
                ((e.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let t = g.w.Init(o.zQ);
                    return (
                      t.Body().set_appid(e.GetAppID()),
                      t.Body().set_language(P.TS.LANGUAGE),
                      o.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        t,
                      )
                    );
                  })
                  .then(
                    (t) => (
                      (e.m_fetching = null),
                      t.GetEResult() != I.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            e,
                            t.Body().token_lists(),
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
        h([a.XI], b.prototype, "OnGetAppsResponse", 1),
          h([a.XI], b.prototype, "OnRichPresenceLocUpdate", 1);
        const T = new b();
      },
      5858: (H, C, c) => {
        c.d(C, { Z: () => m, dV: () => A.d, rO: () => L });
        var a = c(14947),
          G = c(31561),
          I = c(85528),
          g = c(18210),
          l = c(99412),
          P = c(88363),
          R = c(3166),
          A = c(35413),
          O = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          o = (S, r, h, u) => {
            for (
              var d = u > 1 ? void 0 : u ? w(r, h) : r, v = S.length - 1, b;
              v >= 0;
              v--
            )
              (b = S[v]) && (d = (u ? b(r, h, d) : b(d)) || d);
            return u && d && O(r, h, d), d;
          };
        function L(S) {
          let r = "offline";
          return (
            S &&
              (S.is_ingame
                ? (r = "ingame")
                : S.m_broadcastAccountId
                  ? (r = "watchingbroadcast")
                  : S.is_online && (r = "online"),
              S.is_awayOrSnooze && (r += " awayOrSnooze")),
            r
          );
        }
        class m {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = l.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = A.d;
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
          m_mapRichPresence = a.sH.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(r) {
            (0, a.Gn)(this), (this.m_steamid = r);
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
            return ((this.m_unPersonaStateFlags ?? 0) & P.Fj) != 0;
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
          HasStateFlag(r) {
            return ((this.m_unPersonaStateFlags ?? 0) & r) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != l.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(P.Zx);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? I.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? I.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? I.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
              let r = I.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (r) {
                let h = this.m_mapRichPresence.get("steam_display");
                return r.Localize(h, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(P.o5))
              return (0, g.we)("#PersonaStateRemotePlayTogether");
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
              h = r * 60,
              u = h * 24;
            let d = 1e3;
            const v =
              I.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return v > u ? (d *= h) : v > 2 * h ? (d *= r) : (d *= r / 4), d;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, g.we)("#PersonaStateOffline");
            let r = this.GetOfflineStatusUpdateRate();
            (!R.TS.IN_MOBILE || r <= 60) && (0, G.tB)(r);
            let h = I.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return h < 60
              ? (0, g.we)("#PersonaStateLastSeen_JustNow")
              : (0, g.we)("#PersonaStateLastSeen", (0, g.Hq)(h));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case l.cU3:
              case l._3b:
                return this.GetOfflineStatusTime();
              case l.UXk:
                return (0, g.we)("#PersonaStateOnline");
              case l.wcG:
                return (0, g.we)("#PersonaStateBusy");
              case l.PrD:
                return (0, g.we)("#PersonaStateAway");
              case l.vPz:
                return (0, g.we)("#PersonaStateSnooze");
              case l.Hrn:
                return (0, g.we)("#PersonaStateLookingToTrade");
              case l.HAb:
                return (0, g.we)("#PersonaStateLookingToPlay");
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
            return this.m_strAvatarHash != A.d;
          }
          get avatar_url() {
            return (0, A.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, A.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, A.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(r, h, u) {
            if (h.has_public_party_beacon) {
              if (!u.has_public_party_beacon) return -1;
            } else {
              if (u.has_public_party_beacon) return 1;
              if (h.is_ingame)
                if (u.is_ingame)
                  if (r) {
                    if (h.is_awayOrSnooze) {
                      if (!u.is_awayOrSnooze) return 1;
                    } else if (u.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (u.is_ingame) return 1;
            }
            if (h.is_online) {
              if (!u.is_online) return -1;
            } else if (u.is_online) return 1;
            if (r) {
              if (h.is_awayOrSnooze) {
                if (!u.is_awayOrSnooze) return 1;
              } else if (u.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${R.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${R.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        o([a.sH], m.prototype, "m_bInitialized", 2),
          o([a.sH], m.prototype, "m_ePersonaState", 2),
          o([a.sH], m.prototype, "m_unGamePlayedAppID", 2),
          o([a.sH], m.prototype, "m_gameid", 2),
          o([a.sH], m.prototype, "m_unPersonaStateFlags", 2),
          o([a.sH], m.prototype, "m_strPlayerName", 2),
          o([a.sH], m.prototype, "m_strAvatarHash", 2),
          o([a.sH], m.prototype, "m_strAccountName", 2),
          o([a.sH], m.prototype, "m_rtLastSeenOnline", 2),
          o([a.sH], m.prototype, "m_strGameExtraInfo", 2),
          o([a.sH], m.prototype, "m_unGameServerIP", 2),
          o([a.sH], m.prototype, "m_unGameServerPort", 2),
          o([a.sH], m.prototype, "m_game_lobby_id", 2),
          o([a.sH], m.prototype, "m_bPlayerNamePending", 2),
          o([a.sH], m.prototype, "m_bAvatarPending", 2),
          o([a.sH], m.prototype, "m_broadcastId", 2),
          o([a.sH], m.prototype, "m_broadcastAccountId", 2),
          o([a.sH], m.prototype, "m_broadcastAppId", 2),
          o([a.sH], m.prototype, "m_broadcastViewerCount", 2),
          o([a.sH], m.prototype, "m_strBroadcastTitle", 2),
          o([a.sH], m.prototype, "m_bCommunityBanned", 2),
          o([a.sH], m.prototype, "m_eGamingDeviceType", 2),
          o([a.sH], m.prototype, "m_bNameInitialized", 2);
      },
    },
  ]);
})();
