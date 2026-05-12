(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1035],
  {
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      const _ = 2,
        _ = 4,
        _ = 8,
        _ = 512,
        _ = 1024,
        _ = 2048;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _._,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        let _ = "offline";
        return (
          _ &&
            (_.is_ingame
              ? (_ = "ingame")
              : _.m_broadcastAccountId
                ? (_ = "watchingbroadcast")
                : _.is_online && (_ = "online"),
            _.is_awayOrSnooze && (_ += " awayOrSnooze")),
          _
        );
      }
      class _ {
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = _.cU3;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = _._;
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
        m_eGamingDeviceType = _.eSB;
        m_mapRichPresence = _._.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(_) {
          (0, _._)(this), (this.m_steamid = _);
        }
        Reset() {
          (this.m_ePersonaState = _.cU3),
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
            (this.m_eGamingDeviceType = _.eSB);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        GetSteamIDAsString() {
          return this.m_steamid.ConvertTo64BitString();
        }
        get is_online() {
          return this.m_ePersonaState != _.cU3 && this.m_ePersonaState != _._3b;
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
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & _._);
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
          return this.m_ePersonaState == _.PrD || this.m_ePersonaState == _.vPz;
        }
        HasStateFlag(_) {
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & _);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != _.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(_._);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? _._.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? _._.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            _._.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let _ = _._.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (_) {
              let _ = this.m_mapRichPresence.get("steam_display");
              return _.Localize(_, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(_._))
            return (0, _._)("#PersonaStateRemotePlayTogether");
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
          const _ = 3600;
          let _ = 1e3;
          const _ = _._.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (_ *= _ > 86400 ? _ : _ > 7200 ? 60 : 15), _;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, _._)("#PersonaStateOffline");
          let _ = this.GetOfflineStatusUpdateRate();
          (!_._.IN_MOBILE || _ <= 60) && (0, _._)(_);
          let _ = _._.CMInterface.GetServerRTime32() - this.last_seen_online;
          return _ < 60
            ? (0, _._)("#PersonaStateLastSeen_JustNow")
            : (0, _._)("#PersonaStateLastSeen", (0, _._)(_));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case _.cU3:
            case _._3b:
              return this.GetOfflineStatusTime();
            case _.UXk:
              return (0, _._)("#PersonaStateOnline");
            case _.wcG:
              return (0, _._)("#PersonaStateBusy");
            case _.PrD:
              return (0, _._)("#PersonaStateAway");
            case _.vPz:
              return (0, _._)("#PersonaStateSnooze");
            case _.Hrn:
              return (0, _._)("#PersonaStateLookingToTrade");
            case _.HAb:
              return (0, _._)("#PersonaStateLookingToPlay");
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
          return this.m_strAvatarHash != _._;
        }
        get avatar_url() {
          return (0, _._)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, _._)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, _._)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(_, _, _) {
          if (_.has_public_party_beacon) {
            if (!_.has_public_party_beacon) return -1;
          } else {
            if (_.has_public_party_beacon) return 1;
            if (_.is_ingame) {
              if (!_.is_ingame) return -1;
              if (!_) return 0;
              if (_.is_awayOrSnooze) {
                if (!_.is_awayOrSnooze) return 1;
              } else if (_.is_awayOrSnooze) return -1;
            } else if (_.is_ingame) return 1;
          }
          if (_.is_online) {
            if (!_.is_online) return -1;
          } else if (_.is_online) return 1;
          if (_)
            if (_.is_awayOrSnooze) {
              if (!_.is_awayOrSnooze) return 1;
            } else if (_.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${_._.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${_._.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, _._)([_._], _.prototype, "m_bInitialized", void 0),
        (0, _._)([_._], _.prototype, "m_ePersonaState", void 0),
        (0, _._)([_._], _.prototype, "m_unGamePlayedAppID", void 0),
        (0, _._)([_._], _.prototype, "m_gameid", void 0),
        (0, _._)([_._], _.prototype, "m_unPersonaStateFlags", void 0),
        (0, _._)([_._], _.prototype, "m_strPlayerName", void 0),
        (0, _._)([_._], _.prototype, "m_strAvatarHash", void 0),
        (0, _._)([_._], _.prototype, "m_strAccountName", void 0),
        (0, _._)([_._], _.prototype, "m_rtLastSeenOnline", void 0),
        (0, _._)([_._], _.prototype, "m_strGameExtraInfo", void 0),
        (0, _._)([_._], _.prototype, "m_unGameServerIP", void 0),
        (0, _._)([_._], _.prototype, "m_unGameServerPort", void 0),
        (0, _._)([_._], _.prototype, "m_game_lobby_id", void 0),
        (0, _._)([_._], _.prototype, "m_bPlayerNamePending", void 0),
        (0, _._)([_._], _.prototype, "m_bAvatarPending", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastId", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastAccountId", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastAppId", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastViewerCount", void 0),
        (0, _._)([_._], _.prototype, "m_strBroadcastTitle", void 0),
        (0, _._)([_._], _.prototype, "m_bCommunityBanned", void 0),
        (0, _._)([_._], _.prototype, "m_eGamingDeviceType", void 0),
        (0, _._)([_._], _.prototype, "m_bNameInitialized", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        _ =
          __webpack_require__._ +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = _.memo(function (_) {
        const {
            strAvatarURL: _,
            size: _ = "Medium",
            className: _,
            statusStyle: _,
            statusPosition: _,
            children: _,
            ..._
          } = _,
          _ = _.useMemo(() => {
            const _ = [];
            return (
              _ && _.push(_),
              _.push(
                (function (_) {
                  switch (_) {
                    case "X-Small":
                    case "Small":
                      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                    case "Medium":
                    case "MediumLarge":
                      return _;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return _;
                    default:
                      return (0, _._)(_, `Unhandled size ${_}`), _;
                  }
                })(_),
              ),
              _
            );
          }, [_, _]);
        return (0, _.jsxs)("div", {
          className: (0, _._)(
            _().avatarHolder,
            "avatarHolder",
            "no-drag",
            _,
            _,
          ),
          ..._,
          children: [
            (0, _.jsx)("div", {
              className: (0, _._)(_().avatarStatus, "avatarStatus", _),
              style: _,
            }),
            (0, _.jsx)(_._, {
              className: (0, _._)(_().avatar, "avatar"),
              rgSources: _,
              draggable: !1,
            }),
            _,
          ],
        });
      });
      let _ = class extends _.Component {
        render() {
          const {
            persona: _,
            size: _ = "Medium",
            animatedAvatar: _,
            className: _,
            strBackupAvatarURL: _,
            ..._
          } = this.props;
          let _ = "";
          return (
            _ && _.image_small && 0 != _.image_small.length
              ? (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small)
              : _
                ? ((_ = _.avatar_url_medium),
                  "Small" == _ || "X-Small" == _
                    ? (_ = _.avatar_url)
                    : ("Large" != _ && "X-Large" != _ && "FillArea" != _) ||
                      (_ = _.avatar_url_full))
                : _ && (_ = _),
            (0, _.jsx)(_, {
              strAvatarURL: _,
              size: _,
              className: (0, _._)((0, _._)(_), _),
              ..._,
            })
          );
        }
      };
      _ = (0, _._)([_._], _);
      const _ = (0, _._)((_) => {
        const { profileItem: _, className: _, bDisableAnimation: _, ..._ } = _;
        if (!_ || !_.image_small || 0 == _.image_small.length) return null;
        let _ = _ ? _.image_large : _.image_small;
        return (
          _ || (_ = _.image_small),
          _.startsWith("https://") ||
            (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
          (0, _.jsx)("div", {
            className: (0, _._)(_().avatarFrame, _, "avatarFrame"),
            ..._,
            children: (0, _.jsx)("img", {
              className: _().avatarFrameImg,
              src: _,
            }),
          })
        );
      });
      let _ = class extends _.Component {
        m_timer;
        constructor(_) {
          super(_),
            (this.state = {
              bAnimate: "None" != this.props.loopDuration,
            }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let _ = 0;
          switch (this.props.loopDuration) {
            case "Short":
              _ = 2500;
              break;
            case "Medium":
              _ = 5e3;
              break;
            case "Long":
              _ = 1e4;
          }
          0 != _ &&
            (this.setState({
              bAnimate: "None" != this.props.loopDuration,
            }),
            (this.m_timer = window.setTimeout(
              () =>
                this.setState({
                  bAnimate: !1,
                }),
              _,
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
        componentDidUpdate(_) {
          this.props.loopDuration != _.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({
                  bAnimate: !1,
                }),
                this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
                ? (this.setState({
                    bAnimate: !0,
                  }),
                  this.StopAnimationTimer())
                : (this.setState({
                    bAnimate: !0,
                  }),
                  this.SetupAnimationTimer())),
            this.props.bParentHovered != _.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({
                    bAnimate: !0,
                  }),
                  this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let {
            loopDuration: _,
            animatedAvatar: _,
            avatarFrame: _,
            children: _,
            style: _,
            bLimitProfileFrameAnimationTime: _,
            bParentHovered: _,
            ..._
          } = this.props;
          _.onClick &&
            (_ = {
              ..._,
              cursor: "pointer",
            });
          const _ = this.state.bAnimate ? (_ ?? null) : null;
          return (0, _.jsx)("div", {
            onMouseEnter: () =>
              this.setState({
                bAnimate: "None" != this.props.loopDuration,
              }),
            onMouseLeave: () => this.SetupAnimationTimer(),
            children: (0, _.jsxs)(_, {
              animatedAvatar: _,
              ..._,
              children: [
                _,
                (0, _.jsx)(_, {
                  profileItem: _,
                  bDisableAnimation: _ && !this.state.bAnimate,
                }),
              ],
            }),
          });
        }
      };
      _ = (0, _._)([_._], _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            rgSources: _,
            onIncrementalError: _,
            onError: _,
            strAltText: _,
            ref: _,
            ..._
          } = _,
          _ = _.useRef(null),
          [_, _] = _.useState(0),
          [_, _] = _.useState(0);
        _.useImperativeHandle(
          _,
          () => ({
            imgRef: _,
            nSourceIndex: _,
            nSourceLength: _.length,
          }),
          [_, _, _],
        );
        const _ = _.useMemo(() => JSON.stringify(_), [_]);
        _.useEffect(() => {
          _(0), _((_) => _ + 1);
        }, [_]);
        const _ = _.useMemo(() => {
            let _ = "";
            return (
              _ && _.length > _ && (_ = _[_]),
              _ ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  _,
                  _,
                ),
                (_ =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              _
            );
          }, [_, _, _]),
          _ = _.useCallback(
            (_) => {
              __webpack_require__?.(_, _[_], _);
              const _ = _ + 1;
              _ >= _.length && _ && _(_), _ < _.length && _(_);
            },
            [_, _, _, _],
          );
        return (0, _.jsx)(
          "img",
          {
            ref: _,
            ..._,
            src: _,
            onError: _,
            alt: _,
          },
          _,
        );
      }
    },
  },
]);
