/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [13],
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
        Fj: () => i,
        R$: () => n,
        Zx: () => s,
        hs: () => l,
        o5: () => r,
        sr: () => o,
      });
      const i = 2,
        s = 4,
        r = 8,
        n = 512,
        o = 1024,
        l = 2048;
    },
    10622: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => A, dV: () => c.d, rO: () => _ });
      var i = a(34629),
        s = a(14947),
        r = a(31561),
        n = a(51006),
        o = a(61859),
        l = a(22837),
        m = a(38924),
        u = a(78327),
        c = a(85044);
      function _(e) {
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
      class A {
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
        m_mapRichPresence = s.sH.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, s.Gn)(this), (this.m_steamid = e);
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
          return this.m_ePersonaState != l.cU3 && this.m_ePersonaState != l._3b;
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
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & m.Fj);
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
          return this.m_ePersonaState == l.PrD || this.m_ePersonaState == l.vPz;
        }
        HasStateFlag(e) {
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != l.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(m.Zx);
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
          } else if (this.HasStateFlag(m.o5))
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
          (!u.TS.IN_MOBILE || e <= 60) && (0, r.tB)(e);
          let t = n.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case l.cU3:
            case l._3b:
              return this.GetOfflineStatusTime();
            case l.UXk:
              return (0, o.we)("#PersonaStateOnline");
            case l.wcG:
              return (0, o.we)("#PersonaStateBusy");
            case l.PrD:
              return (0, o.we)("#PersonaStateAway");
            case l.vPz:
              return (0, o.we)("#PersonaStateSnooze");
            case l.Hrn:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case l.HAb:
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
            ? `${u.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${u.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, i.Cg)([s.sH], A.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_ePersonaState", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_unGamePlayedAppID", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_gameid", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_unPersonaStateFlags", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_strPlayerName", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_strAvatarHash", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_strAccountName", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_rtLastSeenOnline", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_strGameExtraInfo", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_unGameServerIP", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_unGameServerPort", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_game_lobby_id", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_bPlayerNamePending", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_bAvatarPending", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_broadcastId", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_broadcastAccountId", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_broadcastAppId", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_broadcastViewerCount", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_strBroadcastTitle", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_bCommunityBanned", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_eGamingDeviceType", void 0),
        (0, i.Cg)([s.sH], A.prototype, "m_bNameInitialized", void 0);
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => h, xz: () => f, $Y: () => S, i8: () => g });
      var i = a(34629),
        s = a(7850),
        r = a(90626),
        n = a(75844),
        o = a(10622),
        l = a(52038),
        m = a(78327),
        u = a(3088);
      const c =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        _ =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var A = a(43047),
        d = a.n(A),
        p = a(81393);
      const h = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: i,
            statusStyle: n,
            statusPosition: o,
            children: m,
            ...A
          } = e,
          h = r.useMemo(() => {
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
                      return c;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return _;
                    default:
                      return (0, p.z_)(e, `Unhandled size ${e}`), c;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return (0, s.jsxs)("div", {
          className: (0, l.A)(
            d().avatarHolder,
            "avatarHolder",
            "no-drag",
            a,
            i,
          ),
          ...A,
          children: [
            (0, s.jsx)("div", {
              className: (0, l.A)(d().avatarStatus, "avatarStatus", o),
              style: n,
            }),
            (0, s.jsx)(u.c, {
              className: (0, l.A)(d().avatar, "avatar"),
              rgSources: h,
              draggable: !1,
            }),
            m,
          ],
        });
      });
      let g = class extends r.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: i,
            strBackupAvatarURL: r,
            ...n
          } = this.props;
          let u = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (u = m.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e
                ? ((u = e.avatar_url_medium),
                  "Small" == t || "X-Small" == t
                    ? (u = e.avatar_url)
                    : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                      (u = e.avatar_url_full))
                : r && (u = r),
            (0, s.jsx)(h, {
              strAvatarURL: u,
              size: t,
              className: (0, l.A)((0, o.rO)(e), i),
              ...n,
            })
          );
        }
      };
      g = (0, i.Cg)([n.PA], g);
      const S = (0, n.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: i, ...r } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let n = i ? t.image_large : t.image_small;
        return (
          n || (n = t.image_small),
          n.startsWith("https://") ||
            (n = m.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + n),
          (0, s.jsx)("div", {
            className: (0, l.A)(d().avatarFrame, a, "avatarFrame"),
            ...r,
            children: (0, s.jsx)("img", {
              className: d().avatarFrameImg,
              src: n,
            }),
          })
        );
      });
      let f = class extends r.Component {
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
            children: i,
            style: r,
            bLimitProfileFrameAnimationTime: n,
            bParentHovered: o,
            ...l
          } = this.props;
          l.onClick && (r = { ...r, cursor: "pointer" });
          const m = this.state.bAnimate ? (t ?? null) : null;
          return (0, s.jsx)("div", {
            onMouseEnter: () =>
              this.setState({ bAnimate: "None" != this.props.loopDuration }),
            onMouseLeave: () => this.SetupAnimationTimer(),
            children: (0, s.jsxs)(g, {
              animatedAvatar: m,
              ...l,
              children: [
                i,
                (0, s.jsx)(S, {
                  profileItem: a,
                  bDisableAnimation: n && !this.state.bAnimate,
                }),
              ],
            }),
          });
        }
      };
      f = (0, i.Cg)([n.PA], f);
    },
    55263: (e, t, a) => {
      "use strict";
      a.d(t, {
        G6: () => A,
        Gg: () => h,
        Ow: () => p,
        Sq: () => u,
        YM: () => v,
        eR: () => c,
        ik: () => _,
        mZ: () => g,
        t7: () => d,
        zX: () => f,
      });
      var i = a(41735),
        s = a.n(i),
        r = a(90626),
        n = a(37085),
        o = a(96171),
        l = a(84933),
        m = a(16021);
      const u = 1,
        c = 2,
        _ = 3;
      function A(e, t, a, i) {
        const o = (0, r.useRef)(void 0),
          A = (0, r.useRef)(void 0),
          d = (0, l.CH)();
        o.current = e;
        const [p, h] = (0, r.useState)(void 0),
          {
            include_assets: g,
            include_release: S,
            include_platforms: f,
            include_all_purchase_options: v,
            include_screenshots: B,
            include_trailers: I,
            include_ratings: C,
            include_tag_count: P,
            include_reviews: y,
            include_basic_info: G,
            include_supported_languages: b,
            include_full_description: Q,
            include_included_items: R,
            include_assets_without_overrides: H,
            apply_user_filters: w,
            include_links: D,
          } = a;
        if (
          ((0, r.useEffect)(() => {
            const a = {
              include_assets: g,
              include_release: S,
              include_platforms: f,
              include_all_purchase_options: v,
              include_screenshots: B,
              include_trailers: I,
              include_ratings: C,
              include_tag_count: P,
              include_reviews: y,
              include_basic_info: G,
              include_supported_languages: b,
              include_full_description: Q,
              include_included_items: R,
              include_assets_without_overrides: H,
              apply_user_filters: w,
              include_links: D,
            };
            let r = null;
            return (
              !e ||
                e < 0 ||
                m.A.Get().BHasStoreItem(e, t, a) ||
                (void 0 !== p && i && i == A.current) ||
                (i !== A.current && (h(void 0), (A.current = i)),
                (r = s().CancelToken.source()),
                m.A.Get()
                  .QueueStoreItemRequest(e, t, a)
                  .then((t) => {
                    r?.token.reason || o.current !== e || h(t == n.R), d();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, p, g, S, f, v, B, I, C, P, y, G, b, Q, R, H, w, D, d]),
          !e)
        )
          return [null, c];
        if (!1 === p) return [void 0, c];
        if (m.A.Get().BIsStoreItemMissing(e, t)) return [void 0, c];
        if (!m.A.Get().BHasStoreItem(e, t, a)) return [void 0, u];
        const E = m.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return E ? [E, _] : [null, c];
      }
      function d(e, t, a) {
        return A(e, o.c6.qI, t, a);
      }
      function p(e, t, a) {
        return A(e, o.c6.xO, t, a);
      }
      function h(e, t, a) {
        return A(e, o.c6.RD, t, a);
      }
      function g(e, t, a) {
        const [i, s] = A(e, t, a);
        let r;
        i?.GetStoreItemType() != o.c6.RD ||
          i.GetAssets()?.GetHeaderURL() ||
          1 != i?.GetIncludedAppIDs().length ||
          (r = i.GetIncludedAppIDs()[0]);
        const [n, l] = d(r, a);
        return r && n?.BIsVisible() ? [n, l] : [i, s];
      }
      function S(e, t, a, i) {
        const n = (0, l.CH)(),
          {
            include_assets: o,
            include_release: A,
            include_platforms: d,
            include_all_purchase_options: p,
            include_screenshots: h,
            include_trailers: g,
            include_ratings: S,
            include_tag_count: f,
            include_reviews: v,
            include_basic_info: B,
            include_supported_languages: I,
            include_full_description: C,
            include_included_items: P,
            include_assets_without_overrides: y,
            apply_user_filters: G,
            include_links: b,
          } = a;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const a = {
                include_assets: o,
                include_release: A,
                include_platforms: d,
                include_all_purchase_options: p,
                include_screenshots: h,
                include_trailers: g,
                include_ratings: S,
                include_tag_count: f,
                include_reviews: v,
                include_basic_info: B,
                include_supported_languages: I,
                include_full_description: C,
                include_included_items: P,
                include_assets_without_overrides: y,
                apply_user_filters: G,
                include_links: b,
              },
              i = e.filter(
                (e) =>
                  !(
                    m.A.Get().BHasStoreItem(e, t, a) ||
                    m.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const r = s().CancelToken.source(),
              l = i.map((e) => m.A.Get().QueueStoreItemRequest(e, t, a));
            return (
              Promise.all(l).then(() => {
                r.token.reason || n();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, n, o, A, d, p, h, g, S, f, v, B, I, C, P, y, G, b]),
          !e)
        )
          return c;
        if (
          !e.every(
            (e) =>
              m.A.Get().BHasStoreItem(e, t, a) ||
              m.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          m.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? _
          : c;
      }
      function f(e, t, a) {
        return S(e, o.c6.qI, t, a);
      }
      function v() {
        r.useEffect(
          () => (
            m.A.Get().SetReturnUnavailableItems(!0),
            () => m.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    3088: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => r });
      var i = a(7850),
        s = a(90626);
      function r(e) {
        const {
            rgSources: t,
            onIncrementalError: a,
            onError: r,
            strAltText: n,
            ref: o,
            ...l
          } = e,
          m = s.useRef(null),
          [u, c] = s.useState(0),
          [_, A] = s.useState(0);
        s.useImperativeHandle(
          o,
          () => ({ imgRef: m, nSourceIndex: u, nSourceLength: t.length }),
          [m, u, t],
        );
        const d = s.useMemo(() => JSON.stringify(t), [t]);
        s.useEffect(() => {
          c(0), A((e) => e + 1);
        }, [d]);
        const p = s.useMemo(() => {
            let a = "";
            return (
              t && t.length > u && (a = t[u]),
              a ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  u,
                ),
                (a =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              a
            );
          }, [t, u, e]),
          h = s.useCallback(
            (e) => {
              a?.(e, t[u], u);
              const i = u + 1;
              i >= t.length && r && r(e), i < t.length && c(i);
            },
            [u, r, a, t],
          );
        return (0, i.jsx)(
          "img",
          { ref: m, ...l, src: p, onError: h, alt: n },
          _,
        );
      }
    },
  },
]);
