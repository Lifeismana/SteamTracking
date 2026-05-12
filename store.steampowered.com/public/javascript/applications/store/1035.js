/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1035],
  {
    43047: (e) => {
      e.exports = {
        narrowWidth: "500px",
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    38924: (e, t, a) => {
      "use strict";
      a.d(t, {
        Fj: () => r,
        R$: () => n,
        Zx: () => i,
        hs: () => m,
        o5: () => s,
        sr: () => o,
      });
      const r = 2,
        i = 4,
        s = 8,
        n = 512,
        o = 1024,
        m = 2048;
    },
    10622: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => p, dV: () => _.d, rO: () => c });
      var r = a(34629),
        i = a(14947),
        s = a(31561),
        n = a(51006),
        o = a(61859),
        m = a(22837),
        A = a(38924),
        l = a(78327),
        _ = a(85044);
      function c(e) {
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
      class p {
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = m.cU3;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = _.d;
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
        m_eGamingDeviceType = m.eSB;
        m_mapRichPresence = i.sH.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, i.Gn)(this), (this.m_steamid = e);
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
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & A.Fj);
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
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != m.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(A.Zx);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? n.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? n.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            n.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = n.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(A.o5))
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
          const a = n.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!l.TS.IN_MOBILE || e <= 60) && (0, s.tB)(e);
          let t = n.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
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
          return this.m_strAvatarHash != _.d;
        }
        get avatar_url() {
          return (0, _.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, _.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, _.t)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, a) {
          if (t.has_public_party_beacon) {
            if (!a.has_public_party_beacon) return -1;
          } else {
            if (a.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!a.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            } else if (a.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!a.is_online) return -1;
          } else if (a.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!a.is_awayOrSnooze) return 1;
            } else if (a.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${l.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${l.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, r.Cg)([i.sH], p.prototype, "m_bInitialized", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_ePersonaState", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_gameid", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_strPlayerName", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_strAvatarHash", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_strAccountName", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_strGameExtraInfo", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_unGameServerIP", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_unGameServerPort", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_game_lobby_id", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_bPlayerNamePending", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_bAvatarPending", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_broadcastId", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_broadcastAccountId", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_broadcastAppId", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_broadcastViewerCount", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_strBroadcastTitle", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_bCommunityBanned", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_eGamingDeviceType", void 0),
        (0, r.Cg)([i.sH], p.prototype, "m_bNameInitialized", void 0);
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => g, xz: () => B, $Y: () => S, i8: () => d });
      var r = a(34629),
        i = a(7850),
        s = a(90626),
        n = a(75844),
        o = a(10622),
        m = a(52038),
        A = a(78327),
        l = a(3088);
      const _ =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        c =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var p = a(43047),
        u = a.n(p),
        h = a(81393);
      const g = s.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: r,
            statusStyle: n,
            statusPosition: o,
            children: A,
            ...p
          } = e,
          g = s.useMemo(() => {
            const e = [];
            return (
              t && e.push(t),
              e.push(
                (function (e) {
                  switch (e) {
                    case "X-Small":
                    case "Small":
                      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                    case "Medium":
                    case "MediumLarge":
                      return _;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return c;
                    default:
                      return (0, h.z_)(e, `Unhandled size ${e}`), _;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return (0, i.jsxs)("div", {
          className: (0, m.A)(
            u().avatarHolder,
            "avatarHolder",
            "no-drag",
            a,
            r,
          ),
          ...p,
          children: [
            (0, i.jsx)("div", {
              className: (0, m.A)(u().avatarStatus, "avatarStatus", o),
              style: n,
            }),
            (0, i.jsx)(l.c, {
              className: (0, m.A)(u().avatar, "avatar"),
              rgSources: g,
              draggable: !1,
            }),
            A,
          ],
        });
      });
      let d = class extends s.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: r,
            strBackupAvatarURL: s,
            ...n
          } = this.props;
          let l = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (l = A.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e
                ? ((l = e.avatar_url_medium),
                  "Small" == t || "X-Small" == t
                    ? (l = e.avatar_url)
                    : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                      (l = e.avatar_url_full))
                : s && (l = s),
            (0, i.jsx)(g, {
              strAvatarURL: l,
              size: t,
              className: (0, m.A)((0, o.rO)(e), r),
              ...n,
            })
          );
        }
      };
      d = (0, r.Cg)([n.PA], d);
      const S = (0, n.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: r, ...s } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let n = r ? t.image_large : t.image_small;
        return (
          n || (n = t.image_small),
          n.startsWith("https://") ||
            (n = A.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + n),
          (0, i.jsx)("div", {
            className: (0, m.A)(u().avatarFrame, a, "avatarFrame"),
            ...s,
            children: (0, i.jsx)("img", {
              className: u().avatarFrameImg,
              src: n,
            }),
          })
        );
      });
      let B = class extends s.Component {
        m_timer;
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e,
            )));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        onHover() {
          this.SetupAnimationTimer();
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : (this.setState({ bAnimate: !0 }),
                  this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let {
            loopDuration: e,
            animatedAvatar: t,
            avatarFrame: a,
            children: r,
            style: s,
            bLimitProfileFrameAnimationTime: n,
            bParentHovered: o,
            ...m
          } = this.props;
          m.onClick && (s = { ...s, cursor: "pointer" });
          const A = this.state.bAnimate ? (t ?? null) : null;
          return (0, i.jsx)("div", {
            onMouseEnter: () =>
              this.setState({ bAnimate: "None" != this.props.loopDuration }),
            onMouseLeave: () => this.SetupAnimationTimer(),
            children: (0, i.jsxs)(d, {
              animatedAvatar: A,
              ...m,
              children: [
                r,
                (0, i.jsx)(S, {
                  profileItem: a,
                  bDisableAnimation: n && !this.state.bAnimate,
                }),
              ],
            }),
          });
        }
      };
      B = (0, r.Cg)([n.PA], B);
    },
    3088: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => s });
      var r = a(7850),
        i = a(90626);
      function s(e) {
        const {
            rgSources: t,
            onIncrementalError: a,
            onError: s,
            strAltText: n,
            ref: o,
            ...m
          } = e,
          A = i.useRef(null),
          [l, _] = i.useState(0),
          [c, p] = i.useState(0);
        i.useImperativeHandle(
          o,
          () => ({ imgRef: A, nSourceIndex: l, nSourceLength: t.length }),
          [A, l, t],
        );
        const u = i.useMemo(() => JSON.stringify(t), [t]);
        i.useEffect(() => {
          _(0), p((e) => e + 1);
        }, [u]);
        const h = i.useMemo(() => {
            let a = "";
            return (
              t && t.length > l && (a = t[l]),
              a ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  l,
                ),
                (a =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              a
            );
          }, [t, l, e]),
          g = i.useCallback(
            (e) => {
              a?.(e, t[l], l);
              const r = l + 1;
              r >= t.length && s && s(e), r < t.length && _(r);
            },
            [l, s, a, t],
          );
        return (0, r.jsx)(
          "img",
          { ref: A, ...m, src: h, onError: g, alt: n },
          c,
        );
      }
    },
  },
]);
