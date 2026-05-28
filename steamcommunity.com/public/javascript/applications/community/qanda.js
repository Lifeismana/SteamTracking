/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    45048: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { QAndARoutes: () => m, default: () => _ });
      var n = i(7850),
        r = i(28579),
        a = i(92757),
        s = i(6813),
        o = i(97058);
      const m = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const _ = function (e) {
        return (0, n.jsxs)(a.dO, {
          children: [
            (0, n.jsx)(a.qh, {
              path: m.Dashboard(":vanity_str"),
              render: (e) =>
                (0, n.jsx)(s.X, {
                  config: {
                    "qanda-root": () => {
                      const { vanity_str: t } = e.match.params;
                      return (0, n.jsx)(r.xh, { vanity_str: t });
                    },
                  },
                }),
            }),
            (0, n.jsx)(a.qh, {
              path: m.FullPageView(":vanity_str", ":session_gid"),
              render: (e) =>
                (0, n.jsx)(s.X, {
                  config: {
                    "qanda-root": () => {
                      const { vanity_str: t, session_gid: i } = e.match.params;
                      return (0, n.jsx)(r.AC, { gidSession: i });
                    },
                  },
                }),
            }),
            (0, n.jsx)(a.qh, { component: o.a }),
          ],
        });
      };
    },
    11333: (e, t, i) => {
      "use strict";
      i.d(t, { L: () => m, c: () => o });
      var n = i(78619),
        r = i(49845),
        a = i(58632),
        s = i.n(a);
      function o(e, t) {
        return new (s())(
          async (t) => {
            const i = [...t],
              r = await n.xtC.GetPlayerLinkDetails(e, { steamids: i }),
              a = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  a.set(t.public_data.steamid, t);
                }),
              i.map((e) => {
                var t;
                return null !== (t = a.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function m(e) {
        return (0, r.V)("PlayerLinkDetails", () => o(e));
      }
    },
    6083: (e, t, i) => {
      "use strict";
      i.d(t, { D: () => r });
      var n = i(3049);
      function r(e) {
        return e.toLocaleString((0, n.J)());
      }
    },
    3049: (e, t, i) => {
      "use strict";
      i.d(t, { J: () => a });
      var n = i(8527),
        r = i(13843);
      function a() {
        return (0, r.A)().languages.map((e) => {
          return 2 == (t = e.strISOCode).length && n.TS.COUNTRY
            ? `${t}-${n.TS.COUNTRY}`
            : t;
          var t;
        });
      }
    },
    38924: (e, t, i) => {
      "use strict";
      i.d(t, {
        Fj: () => n,
        R$: () => s,
        Zx: () => r,
        hs: () => m,
        o5: () => a,
        sr: () => o,
      });
      const n = 2,
        r = 4,
        a = 8,
        s = 512,
        o = 1024,
        m = 2048;
    },
    49845: (e, t, i) => {
      "use strict";
      function n(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function r(...e) {
        return JSON.stringify(e, (e, t) => {
          if (
            (function (e) {
              if (!n(e)) return !1;
              const t = e.constructor;
              if (void 0 === t) return !0;
              const i = t.prototype;
              return (
                !!n(i) &&
                !!Object.prototype.hasOwnProperty.call(i, "isPrototypeOf")
              );
            })(t)
          ) {
            const e = {};
            return (
              Object.keys(t)
                .sort()
                .forEach((i) => {
                  e[i] = t[i];
                }),
              e
            );
          }
          return t;
        });
      }
      i.d(t, { V: () => o });
      var a = i(90626);
      i(7850);
      const s = (0, a.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var i;
        const n = (0, a.useContext)(s),
          o = "string" == typeof e ? e : r(...e);
        let m = n;
        for (; m; ) {
          if (o in m.instances) return m.instances[o];
          if (o in m.factories) break;
          m = m.parent;
        }
        const _ = (
          null !== (i = null == m ? void 0 : m.factories[o]) && void 0 !== i
            ? i
            : t
        )();
        return ((null != m ? m : n).instances[o] = _), _;
      }
    },
    10622: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => d, dV: () => l.d, rO: () => u, tp: () => l.t });
      var n = i(34629),
        r = i(14947),
        a = i(31561),
        s = i(51006),
        o = i(61859),
        m = i(22837),
        _ = i(38924),
        c = i(78327),
        l = i(85044);
      function u(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
                ? (t = "watchingbroadcast")
                : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class d {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = m.cU3),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = l.d),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_bCommunityBanned = void 0),
            (this.m_eGamingDeviceType = m.eSB),
            (this.m_mapRichPresence = r.sH.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, r.Gn)(this),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = m.cU3),
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
            (this.m_eGamingDeviceType = m.eSB);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        GetSteamIDAsString() {
          return this.m_steamid.ConvertTo64BitString();
        }
        get is_online() {
          return this.m_ePersonaState != m.cU3 && this.m_ePersonaState != m._3b;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          var e;
          return (
            0 !=
            ((null !== (e = this.m_unPersonaStateFlags) && void 0 !== e
              ? e
              : 0) &
              _.Fj)
          );
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return null != this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return this.m_ePersonaState == m.PrD || this.m_ePersonaState == m.vPz;
        }
        HasStateFlag(e) {
          var t;
          return (
            0 !=
            ((null !== (t = this.m_unPersonaStateFlags) && void 0 !== t
              ? t
              : 0) &
              e)
          );
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != m.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(_.Zx);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            s.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
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
            let e = s.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(_.o5))
            return (0, o.we)("#PersonaStateRemotePlayTogether");
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
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const i = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= i > 86400 ? e : i > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!c.TS.IN_MOBILE || e <= 60) && (0, a.tB)(e);
          let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case m.cU3:
            case m._3b:
              return this.GetOfflineStatusTime();
            case m.UXk:
              return (0, o.we)("#PersonaStateOnline");
            case m.wcG:
              return (0, o.we)("#PersonaStateBusy");
            case m.PrD:
              return (0, o.we)("#PersonaStateAway");
            case m.vPz:
              return (0, o.we)("#PersonaStateSnooze");
            case m.Hrn:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case m.HAb:
              return (0, o.we)("#PersonaStateLookingToPlay");
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
          return this.m_strAvatarHash != l.d;
        }
        get avatar_url() {
          return (0, l.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, l.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, l.t)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, i) {
          if (t.has_public_party_beacon) {
            if (!i.has_public_party_beacon) return -1;
          } else {
            if (i.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!i.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!i.is_awayOrSnooze) return 1;
              } else if (i.is_awayOrSnooze) return -1;
            } else if (i.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!i.is_online) return -1;
          } else if (i.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!i.is_awayOrSnooze) return 1;
            } else if (i.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${c.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${c.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, n.Cg)([r.sH], d.prototype, "m_bInitialized", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_ePersonaState", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_gameid", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strPlayerName", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strAvatarHash", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strAccountName", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strGameExtraInfo", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unGameServerIP", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unGameServerPort", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_game_lobby_id", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bPlayerNamePending", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bAvatarPending", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastId", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastAccountId", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastAppId", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastViewerCount", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strBroadcastTitle", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bCommunityBanned", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_eGamingDeviceType", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bNameInitialized", void 0);
    },
    41471: (e, t, i) => {
      "use strict";
      i.d(t, { hW: () => u, js: () => l });
      var n = i(90626),
        r = i(88942),
        a = i(22837),
        s = i(23809),
        o = i(44654),
        m = i(10622),
        _ = i(17720),
        c = i(11333);
      function l(e) {
        const t = (0, s.KV)(),
          i = n.useContext(d);
        return (0, r.I)(h(i, t, e));
      }
      function u(e) {
        const t = n.useRef(void 0),
          i = l(e);
        return i.data
          ? i
          : (t.current ||
              (t.current = new m.Z(
                "string" == typeof e ? new _.b(e) : _.b.InitFromAccountID(e),
              )),
            { ...i, data: t.current });
      }
      const d = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const i = await (function (e) {
            return null != p ? p : (p = (0, c.c)(e));
          })(t).load(_.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            var i, n;
            let r = new m.Z(e);
            const s = null == t ? void 0 : t.public_data,
              _ = null == t ? void 0 : t.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState =
                null !== (i = null == _ ? void 0 : _.persona_state) &&
                void 0 !== i
                  ? i
                  : a.cU3),
              (r.m_strAvatarHash = (null == s ? void 0 : s.sha_digest_avatar)
                ? (0, o.Kx)(s.sha_digest_avatar)
                : m.dV),
              (r.m_strPlayerName =
                null !== (n = null == s ? void 0 : s.persona_name) &&
                void 0 !== n
                  ? n
                  : e.ConvertTo64BitString()),
              (r.m_strAccountName = null == _ ? void 0 : _.account_name),
              (null == _ ? void 0 : _.persona_state_flags) &&
                (r.m_unPersonaStateFlags =
                  null == _ ? void 0 : _.persona_state_flags);
            (null == _ ? void 0 : _.game_id) &&
              (r.m_gameid = null == _ ? void 0 : _.game_id);
            (null == _ ? void 0 : _.game_server_ip_address) &&
              (r.m_unGameServerIP =
                null == _ ? void 0 : _.game_server_ip_address);
            (null == _ ? void 0 : _.lobby_steam_id) &&
              (r.m_game_lobby_id = null == _ ? void 0 : _.lobby_steam_id);
            (null == _ ? void 0 : _.game_extra_info) &&
              (r.m_strGameExtraInfo = null == _ ? void 0 : _.game_extra_info);
            (null == s ? void 0 : s.profile_url) &&
              (r.m_strProfileURL = s.profile_url);
            return r;
          })(_.b.InitFromAccountID(e), i);
        },
      });
      function h(e, t, i) {
        const n = "string" == typeof i ? new _.b(i).GetAccountID() : i;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let p;
    },
    48479: (e, t, i) => {
      "use strict";
      i.d(t, { AQ: () => h, pn: () => g, qx: () => p });
      var n = i(7850),
        r = i(68255),
        a = i(61859),
        s = i(12155),
        o = i(90626),
        m = i(52038),
        _ = i(95695),
        c = i(84811),
        l = i(64734),
        u = i(65946),
        d = i(26408);
      function h(e) {
        const {
            title: t,
            tooltip: i,
            getMinimized: r,
            toggleMinimized: a,
            className: s,
            children: o,
            elAdditionalButtons: h,
          } = e,
          p = (0, u.q3)(() => r());
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, m.A)(
                s,
                l.SectionTitleHeader,
                l.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, m.A)(
                    _.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(i) && (0, n.jsx)(d.o, { tooltip: i })],
                }),
                (0, n.jsxs)("div", {
                  className: l.SectionTitleButtons,
                  children: [
                    h,
                    (0, n.jsx)(g, { bIsMinimized: p, fnToggleMinimize: a }),
                  ],
                }),
              ],
            }),
            !p && (0, n.jsx)(c.tH, { children: o }),
          ],
        });
      }
      function p(e) {
        const [t, i] = o.useState(Boolean(e.bStartMinimized));
        return (0, n.jsx)(h, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => i(!t),
          children: e.children,
        });
      }
      function g(e) {
        const { bIsMinimized: t, fnToggleMinimize: i } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, n.jsx)(r.$n, {
          "data-tooltip-text": (0, a.we)(o),
          onClick: i,
          children: e.bIsMinimized
            ? (0, n.jsx)(s.hz4, {})
            : (0, n.jsx)(s.Xjb, {}),
        });
      }
    },
  },
]);
