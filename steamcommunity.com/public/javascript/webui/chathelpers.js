/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10632517";
(() => {
  var e,
    t,
    n,
    s,
    i,
    r = {
      9437: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [83784, 6518],
          "./friendsui_brazilian.json": [18522, 4154],
          "./friendsui_bulgarian.json": [96737, 6385],
          "./friendsui_czech.json": [60347, 7487],
          "./friendsui_danish.json": [78365, 4787],
          "./friendsui_dutch.json": [46350, 4302],
          "./friendsui_english.json": [30188, 3016],
          "./friendsui_finnish.json": [47487, 8759],
          "./friendsui_french.json": [25572, 8194],
          "./friendsui_german.json": [43898, 5480],
          "./friendsui_greek.json": [90192, 4488],
          "./friendsui_hungarian.json": [5365, 5341],
          "./friendsui_indonesian.json": [49588, 762],
          "./friendsui_italian.json": [68740, 3232],
          "./friendsui_japanese.json": [611, 3485],
          "./friendsui_koreana.json": [33731, 6971],
          "./friendsui_latam.json": [923, 1499],
          "./friendsui_norwegian.json": [80148, 4776],
          "./friendsui_polish.json": [92357, 6127],
          "./friendsui_portuguese.json": [77505, 3415],
          "./friendsui_romanian.json": [31807, 7861],
          "./friendsui_russian.json": [30757, 2945],
          "./friendsui_sc_schinese.json": [69423, 43],
          "./friendsui_schinese.json": [5184, 9746],
          "./friendsui_spanish.json": [86700, 9808],
          "./friendsui_swedish.json": [41005, 6609],
          "./friendsui_tchinese.json": [50195, 8766],
          "./friendsui_thai.json": [47194, 6888],
          "./friendsui_turkish.json": [37468, 3e3],
          "./friendsui_ukrainian.json": [6922, 4434],
          "./friendsui_vietnamese.json": [53179, 3789],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 9437), (e.exports = i);
      },
      48516: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [83784, 6518],
          "./friendsui_brazilian.json": [18522, 4154],
          "./friendsui_bulgarian.json": [96737, 6385],
          "./friendsui_czech.json": [60347, 7487],
          "./friendsui_danish.json": [78365, 4787],
          "./friendsui_dutch.json": [46350, 4302],
          "./friendsui_english.json": [30188, 3016],
          "./friendsui_finnish.json": [47487, 8759],
          "./friendsui_french.json": [25572, 8194],
          "./friendsui_german.json": [43898, 5480],
          "./friendsui_greek.json": [90192, 4488],
          "./friendsui_hungarian.json": [5365, 5341],
          "./friendsui_indonesian.json": [49588, 762],
          "./friendsui_italian.json": [68740, 3232],
          "./friendsui_japanese.json": [611, 3485],
          "./friendsui_koreana.json": [33731, 6971],
          "./friendsui_latam.json": [923, 1499],
          "./friendsui_norwegian.json": [80148, 4776],
          "./friendsui_polish.json": [92357, 6127],
          "./friendsui_portuguese.json": [77505, 3415],
          "./friendsui_romanian.json": [31807, 7861],
          "./friendsui_russian.json": [30757, 2945],
          "./friendsui_sc_schinese.json": [69423, 43],
          "./friendsui_schinese.json": [5184, 9746],
          "./friendsui_spanish.json": [86700, 9808],
          "./friendsui_swedish.json": [41005, 6609],
          "./friendsui_tchinese.json": [50195, 8766],
          "./friendsui_thai.json": [47194, 6888],
          "./friendsui_turkish.json": [37468, 3e3],
          "./friendsui_ukrainian.json": [6922, 4434],
          "./friendsui_vietnamese.json": [53179, 3789],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 48516), (e.exports = i);
      },
      14919: (e, t, n) => {
        var s = {
          "./shared_arabic.json": [23287, 3710],
          "./shared_brazilian.json": [1451, 6562],
          "./shared_bulgarian.json": [99908, 1449],
          "./shared_czech.json": [84066, 7591],
          "./shared_danish.json": [59414, 6523],
          "./shared_dutch.json": [35211, 5110],
          "./shared_english.json": [80809, 2256],
          "./shared_finnish.json": [19950, 6031],
          "./shared_french.json": [80879, 5018],
          "./shared_german.json": [80165, 6208],
          "./shared_greek.json": [8721, 9712],
          "./shared_hungarian.json": [66712, 6165],
          "./shared_indonesian.json": [80515, 8306],
          "./shared_italian.json": [3617, 3912],
          "./shared_japanese.json": [13448, 1973],
          "./shared_koreana.json": [13578, 7539],
          "./shared_latam.json": [85570, 2435],
          "./shared_norwegian.json": [48237, 2320],
          "./shared_polish.json": [79530, 8967],
          "./shared_portuguese.json": [76682, 6239],
          "./shared_romanian.json": [50692, 2749],
          "./shared_russian.json": [60868, 8025],
          "./shared_sc_schinese.json": [86078, 9027],
          "./shared_schinese.json": [66231, 7786],
          "./shared_spanish.json": [99185, 2632],
          "./shared_swedish.json": [59456, 1225],
          "./shared_tchinese.json": [99260, 5241],
          "./shared_thai.json": [9801, 976],
          "./shared_turkish.json": [5169, 9152],
          "./shared_ukrainian.json": [34363, 2954],
          "./shared_vietnamese.json": [73912, 6149],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 14919), (e.exports = i);
      },
      68042: (e, t, n) => {
        var s = {
          "./shared_arabic.json": [23287, 3710],
          "./shared_brazilian.json": [1451, 6562],
          "./shared_bulgarian.json": [99908, 1449],
          "./shared_czech.json": [84066, 7591],
          "./shared_danish.json": [59414, 6523],
          "./shared_dutch.json": [35211, 5110],
          "./shared_english.json": [80809, 2256],
          "./shared_finnish.json": [19950, 6031],
          "./shared_french.json": [80879, 5018],
          "./shared_german.json": [80165, 6208],
          "./shared_greek.json": [8721, 9712],
          "./shared_hungarian.json": [66712, 6165],
          "./shared_indonesian.json": [80515, 8306],
          "./shared_italian.json": [3617, 3912],
          "./shared_japanese.json": [13448, 1973],
          "./shared_koreana.json": [13578, 7539],
          "./shared_latam.json": [85570, 2435],
          "./shared_norwegian.json": [48237, 2320],
          "./shared_polish.json": [79530, 8967],
          "./shared_portuguese.json": [76682, 6239],
          "./shared_romanian.json": [50692, 2749],
          "./shared_russian.json": [60868, 8025],
          "./shared_sc_schinese.json": [86078, 9027],
          "./shared_schinese.json": [66231, 7786],
          "./shared_spanish.json": [99185, 2632],
          "./shared_swedish.json": [59456, 1225],
          "./shared_tchinese.json": [99260, 5241],
          "./shared_thai.json": [9801, 976],
          "./shared_turkish.json": [5169, 9152],
          "./shared_ukrainian.json": [34363, 2954],
          "./shared_vietnamese.json": [73912, 6149],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 68042), (e.exports = i);
      },
      53586: (e, t, n) => {
        "use strict";
        n(81405);
        var s = n(63696),
          i = n(7470);
        function r(e, t) {
          return (
            (e = Math.ceil(e)),
            (t = Math.floor(t)),
            Math.floor(Math.random() * (t - e + 1)) + e
          );
        }
        function a(e) {
          if (!o() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function o() {
          return !!window.document;
        }
        const c = "webui_config";
        let l;
        function _() {
          const e = (function () {
            let e = "";
            for (let t = 0; t < 24; t++) e += r(0, 35).toString(36);
            return e;
          })();
          return (
            (function (e, t, n, s) {
              if (!o()) return;
              s || (s = "/");
              let i = "";
              if (void 0 !== n && n) {
                const e = new Date();
                e.setTime(e.getTime() + 864e5 * n),
                  (i = "; expires=" + e.toUTCString());
              }
              document.cookie =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(t) +
                i +
                ";path=" +
                s;
            })("sessionid", e, 0),
            e
          );
        }
        function d(e = c) {
          const t = {},
            n = m("config", e);
          n && (delete n.SESSIONID, Object.assign(f, n), (t.config = !0));
          const s = m("userinfo", e);
          s &&
            (Object.assign(I, s),
            (t.userConfig = !0),
            I.is_support &&
              (function () {
                let e = null;
                o() && (e = a(g));
                return Boolean(e && 1 === Number.parseInt(e));
              })() &&
              (I.is_support = !1));
          const i = m("broadcast", e);
          i && (Object.assign(k, i), (t.broadcastConfig = !0));
          const r = m("community", e);
          r && (Object.assign(S, r), (t.communityConfig = !0));
          const l = m("event", e);
          return (
            l && (Object.assign(E, l), (t.eventConfig = !0)),
            (h = !0),
            u.forEach((e) => e()),
            t
          );
        }
        let u = new Set(),
          h = !1;
        function m(e, t = c) {
          return p(e, t, !0);
        }
        function p(e, t = c, n) {
          let s;
          if (
            ((s =
              "string" == typeof t
                ? {
                    NODE_ENV: "production",
                    STEAM_BUILD: "buildbot",
                    VALVE_BUILD: "false",
                  }.MOBILE_BUILD
                  ? null
                  : document.getElementById(t)
                : t),
            s)
          )
            try {
              if (s.hasAttribute("data-" + e)) {
                return JSON.parse(s.getAttribute("data-" + e));
              }
              return null;
            } catch (e) {
              console.error(
                "Failed to parse config for " +
                  I.steamid +
                  " (" +
                  window.location.href +
                  ")",
                e,
              );
            }
          else n && console.error("Missing config element #", t);
        }
        const g = "presentation_mode";
        const f = {
            EUNIVERSE: 0,
            WEB_UNIVERSE: "",
            LANGUAGE: "english",
            SUPPORTED_LANGUAGES: [],
            COUNTRY: "",
            AVATAR_BASE_URL: "",
            MEDIA_CDN_COMMUNITY_URL: "",
            MEDIA_CDN_URL: "",
            CLAN_CDN_ASSET_URL: "",
            COMMUNITY_ASSETS_BASE_URL: "",
            VIDEO_CDN_URL: "",
            COMMUNITY_CDN_URL: "",
            COMMUNITY_CDN_ASSET_URL: "",
            BASE_URL_SHARED_CDN: "",
            STORE_CDN_URL: "",
            PUBLIC_SHARED_URL: "",
            COMMUNITY_BASE_URL: "",
            CHAT_BASE_URL: "",
            STORE_BASE_URL: "",
            STORE_CHECKOUT_BASE_URL: "",
            LOGIN_BASE_URL: "",
            SUPPORT_BASE_URL: "",
            STORE_ICON_BASE_URL: "",
            STORE_ITEM_BASE_URL: "",
            IMG_URL: "",
            STEAMTV_BASE_URL: "",
            HELP_BASE_URL: "",
            PARTNER_BASE_URL: "",
            STATS_BASE_URL: "",
            INTERNAL_STATS_BASE_URL: "",
            BASE_URL_STORE_CDN_ASSETS: "",
            IN_CLIENT: !1,
            USE_POPUPS: !1,
            IN_MOBILE: !1,
            IN_MOBILE_WEBVIEW: !1,
            IN_TENFOOT: !1,
            PLATFORM: "",
            SNR: "",
            LAUNCHER_TYPE: 0,
            EREALM: 0,
            IN_CHROMEOS: !1,
            TESLA: !1,
            LOCAL_HOSTNAME: "",
            WEBAPI_BASE_URL: "",
            TOKEN_URL: "",
            BUILD_TIMESTAMP: 0,
            PAGE_TIMESTAMP: 0,
            FROM_WEB: !1,
            WEBSITE_ID: "Unknown",
            get SESSIONID() {
              return (function () {
                if (!o()) return l || (l = _()), l;
                let e = a("sessionid");
                return e || (e = _()), e;
              })();
            },
            FRIENDSUI_BETA: !1,
            STEAM_TV: !1,
            DEV_MODE: !1,
            IN_STEAMUI: !1,
            IN_GAMEPADUI: !1,
            IN_STEAMUI_SHARED_CONTEXT: !1,
            FORCED_DISPLAY_MODE: void 0,
            ON_DECK: !1,
            ON_FRAME: !1,
            ON_STEAMOS: !1,
            IN_GAMESCOPE: !1,
            IN_LOGIN: !1,
            IN_LOGIN_REFRESH: !1,
            USE_LONGEST_LOC_STRING: !1,
            SILENT_STARTUP: !1,
            CLIENT_SESSION: 0,
            NOW: 0,
          },
          I = {
            logged_in: !1,
            steamid: "",
            accountid: 0,
            account_name: "",
            token: void 0,
            token_use_id: void 0,
            webapi_token: "",
            authwgtoken: "",
            is_support: !1,
            is_limited: !1,
            is_partner_member: !1,
            is_valve_email: !1,
            short_url: "",
            country_code: "",
            excluded_content_descriptors: [3, 4, 1],
          },
          k = { steamid: "", clanid: 0, listid: 0 },
          S = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          E = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        s.createContext({});
        let C = { success: !0, result: 1 };
        class b {
          m_connection = new v();
          FailureResult(e = 2) {
            let t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              7 == e && (t.call_unsupported = !0),
              t
            );
          }
          BClientConnected() {
            return this.m_connection.Connect().then(
              () => C,
              () => this.FailureResult(),
            );
          }
          BClientConnectedAndSupportsMessage(e) {
            return this.m_connection
              .Connect()
              .then(() => this.BClientSupportsMessage(e))
              .catch(() => !1);
          }
          BClientSupportsMessage(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }
          OpenFriendChatDialog(e) {
            let t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }
          OpenChatRoomGroupDialog(e, t) {
            let n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }
          ShowChatRoomGroupInvite(e, t = !0) {
            let n = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(n, t);
          }
          m_mapCacheSubscribedApp = new Map();
          BIsSubscribedApp(e) {
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            let t = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(t, !0).then((t) => {
              if (t.connect_failed) return;
              let n = 1 == t.result;
              return this.m_mapCacheSubscribedApp.set(e, n), n;
            });
          }
          OpenFriendsDialog() {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }
          OpenSteamURL(e, t = !1) {
            let n = { message: "OpenSteamURL", url: e };
            return this.GenericEResultCall(n, t);
          }
          BClientAccountMatches() {
            return (
              !I.logged_in ||
              I.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }
          GenericEResultCall(e, t = !1) {
            return this.m_connection
              .Connect()
              .then(() =>
                t && !this.BClientAccountMatches()
                  ? { success: !1, result: 19, account_mismatch: !0 }
                  : this.m_connection
                      .SendMsgAndAwaitResponse(e)
                      .then((e) =>
                        1 === e.success ? C : this.FailureResult(e.success),
                      ),
              )
              .catch(() => this.FailureResult());
          }
        }
        class v {
          m_mapWaitingCallbacks = new Map();
          m_socket;
          m_iCallSeq = 1;
          m_bReady = !1;
          m_bClientConnectionFailed = !1;
          m_bSecurityException = !1;
          m_promiseConnect;
          m_ClientInfo = {
            ulVersion: "",
            bFriendsUIEnabled: !1,
            unAccountID: 0,
            rgSupportedMessages: [],
          };
          constructor() {}
          get ClientInfo() {
            return this.m_ClientInfo;
          }
          get ready() {
            return this.m_bReady;
          }
          get browser_supported() {
            return !this.m_bSecurityException;
          }
          get connected_to_client() {
            return (
              !!this.m_socket && this.m_socket.readyState == WebSocket.OPEN
            );
          }
          SendMsgAndAwaitResponse(e) {
            return new Promise((t, n) => {
              let s = this.m_iCallSeq++;
              this.BSendMsg(e, s)
                ? this.m_mapWaitingCallbacks.set(s, {
                    iSeq: s,
                    fnCallback: t,
                    fnError: n,
                  })
                : n();
            });
          }
          BSendMsg(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            let n = Object.assign({}, e, {
              universe: f.EUNIVERSE,
              accountid: I.accountid,
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }
          OnSocketMessage(e) {
            try {
              let t = JSON.parse(e.data);
              if (t.sequenceid) {
                let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (e)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void e.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }
          Connect() {
            if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            let e = new Promise((e, t) => {
              try {
                this.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/",
                );
              } catch (e) {
                return (this.m_bSecurityException = !0), void t(e);
              }
              (this.m_socket.onerror = (e) => {
                t();
              }),
                (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
                (this.m_socket.onopen = () => {
                  this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then((n) => {
                      1 == n.success
                        ? ((this.m_ClientInfo.ulVersion = n.clientversion),
                          (this.m_ClientInfo.bFriendsUIEnabled = !!n.friendsui),
                          (this.m_ClientInfo.unAccountID = n.accountid),
                          n.supported_messages &&
                            (this.m_ClientInfo.rgSupportedMessages =
                              n.supported_messages),
                          e())
                        : t();
                    })
                    .catch(t);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(() => {
                  (this.m_bReady = !0), (this.m_promiseConnect = void 0);
                })
                .catch(() => {
                  (this.m_bClientConnectionFailed = !0),
                    (this.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }
        }
        let A = new b();
        window.ClientConnectionAPI = A;
        n(83957), n(22386);
        new Map();
        var j;
        !(function (e) {
          (e[(e.kPFIFlag_MicroTransactionFile = 1)] =
            "kPFIFlag_MicroTransactionFile"),
            (e[(e.kPFIFlag_Incompatible = 2)] = "kPFIFlag_Incompatible"),
            (e[(e.kPFIFlag_RevenueSplitsFinalized = 4)] =
              "kPFIFlag_RevenueSplitsFinalized"),
            (e[(e.kPFIFlag_AcceptedForUse = 8)] = "kPFIFlag_AcceptedForUse"),
            (e[(e.kPFIFlag_CollectionShowSubscribeAll = 16)] =
              "kPFIFlag_CollectionShowSubscribeAll"),
            (e[(e.kPFIFlag_ItemInProgress = 32)] = "kPFIFlag_ItemInProgress"),
            (e[(e.kPFIFlag_GamePlayable = 64)] = "kPFIFlag_GamePlayable"),
            (e[(e.kPFIFlag_AwaitingModeration = 128)] =
              "kPFIFlag_AwaitingModeration"),
            (e[(e.kPFIFlag_PendingApproval = 256)] =
              "kPFIFlag_PendingApproval"),
            (e[(e.kPFIFlag_FixedStats = 1536)] = "kPFIFlag_FixedStats"),
            (e[(e.kPFIFlag_LatestWorkshopTermsNotAccepted = 2048)] =
              "kPFIFlag_LatestWorkshopTermsNotAccepted"),
            (e[(e.kPFIFlag_DepotContent = 4096)] = "kPFIFlag_DepotContent"),
            (e[(e.kPFIFlag_CollectionAllOwnerItems = 8192)] =
              "kPFIFlag_CollectionAllOwnerItems"),
            (e[(e.kPFIFlag_CollectionIsASet = 16384)] =
              "kPFIFlag_CollectionIsASet"),
            (e[(e.kPFIFlag_Subscribable = 32768)] = "kPFIFlag_Subscribable"),
            (e[(e.kPFIFlag_ForceUnbanned = 65536)] = "kPFIFlag_ForceUnbanned"),
            (e[(e.kPFIFlag_ForceInappropriate = 131072)] =
              "kPFIFlag_ForceInappropriate"),
            (e[(e.kPFIFlag_ForceAppropriate = 262144)] =
              "kPFIFlag_ForceAppropriate"),
            (e[(e.kPFIFlag_RequireVerification = 524288)] =
              "kPFIFlag_RequireVerification"),
            (e[(e.kPFIFlag_HasApprovedSteamChinaContent = 1048576)] =
              "kPFIFlag_HasApprovedSteamChinaContent"),
            (e[(e.kPFIFlag_HasApprovedContent = 2097152)] =
              "kPFIFlag_HasApprovedContent"),
            (e[(e.kPFIFlag_IgnoreTextContentCheckFlag = 4194304)] =
              "kPFIFlag_IgnoreTextContentCheckFlag"),
            (e[(e.kPFIFlag_DisableComments = 8388608)] =
              "kPFIFlag_DisableComments"),
            (e[(e.kPFIFlag_NeedsContentCheck = 16777216)] =
              "kPFIFlag_NeedsContentCheck"),
            (e[(e.kPFIFlag_SteamChinaCreated = 33554432)] =
              "kPFIFlag_SteamChinaCreated"),
            (e[(e.kPFIFlag_RejectedLatestContent = 67108864)] =
              "kPFIFlag_RejectedLatestContent"),
            (e[(e.kPFIFlag_ManagedContentDescriptors = 134217728)] =
              "kPFIFlag_ManagedContentDescriptors"),
            (e[(e.kPFIFlag_HasAuthorSnapshots = 268435456)] =
              "kPFIFlag_HasAuthorSnapshots");
        })(j || (j = {}));
        const T = 2147483647;
        function P(e, t = 0) {
          switch (e) {
            case "english":
              return 0;
            case "german":
              return 1;
            case "french":
              return 2;
            case "italian":
              return 3;
            case "korean":
            case "koreana":
              return 4;
            case "spanish":
              return 5;
            case "schinese":
              return 6;
            case "tchinese":
              return 7;
            case "russian":
              return 8;
            case "thai":
              return 9;
            case "japanese":
              return 10;
            case "portuguese":
              return 11;
            case "polish":
              return 12;
            case "danish":
              return 13;
            case "dutch":
              return 14;
            case "finnish":
              return 15;
            case "norwegian":
              return 16;
            case "swedish":
              return 17;
            case "hungarian":
              return 18;
            case "czech":
              return 19;
            case "romanian":
              return 20;
            case "turkish":
              return 21;
            case "arabic":
              return 25;
            case "brazilian":
              return 22;
            case "bulgarian":
              return 23;
            case "greek":
              return 24;
            case "ukrainian":
              return 26;
            case "latam":
              return 27;
            case "vietnamese":
              return 28;
            case "sc_schinese":
              return 29;
            case "indonesian":
              return 30;
            default:
              return t;
          }
        }
        var y, F, R, L, M, N, U, w, O, G, D, B, x, W, V, H, z;
        !(function (e) {
          (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
            "k_EConnectivityTestResult_Unknown"),
            (e[(e.k_EConnectivityTestResult_Connected = 1)] =
              "k_EConnectivityTestResult_Connected"),
            (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
              "k_EConnectivityTestResult_CaptivePortal"),
            (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
              "k_EConnectivityTestResult_TimedOut"),
            (e[(e.k_EConnectivityTestResult_Failed = 4)] =
              "k_EConnectivityTestResult_Failed"),
            (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
              "k_EConnectivityTestResult_WifiDisabled"),
            (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
              "k_EConnectivityTestResult_NoLAN");
        })(y || (y = {})),
          (function (e) {
            (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
              "k_ENetFakeLocalSystemState_Normal"),
              (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
                "k_ENetFakeLocalSystemState_NoLAN"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
              (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
                "k_ENetFakeLocalSystemState_NoInternet"),
              (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
                "k_ENetFakeLocalSystemState_NoSteam");
          })(F || (F = {})),
          (function (e) {
            (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
              "k_ESuspendResumeProgressState_Invalid"),
              (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
                "k_ESuspendResumeProgressState_Complete"),
              (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
                "k_ESuspendResumeProgressState_CloudSync"),
              (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
                "k_ESuspendResumeProgressState_LoggingIn"),
              (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
                "k_ESuspendResumeProgressState_WaitingForApp"),
              (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
                "k_ESuspendResumeProgressState_Working");
          })(R || (R = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(L || (L = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(M || (M = {})),
          (function (e) {
            (e[(e.k_EAppUpdateProgress_VerifyingInstalledFiles = 0)] =
              "k_EAppUpdateProgress_VerifyingInstalledFiles"),
              (e[(e.k_EAppUpdateProgress_Preallocating = 1)] =
                "k_EAppUpdateProgress_Preallocating"),
              (e[(e.k_EAppUpdateProgress_Download = 2)] =
                "k_EAppUpdateProgress_Download"),
              (e[(e.k_EAppUpdateProgress_Staging = 3)] =
                "k_EAppUpdateProgress_Staging"),
              (e[(e.k_EAppUpdateProgress_VerifyingStagedFiles = 4)] =
                "k_EAppUpdateProgress_VerifyingStagedFiles"),
              (e[(e.k_EAppUpdateProgress_Copying = 5)] =
                "k_EAppUpdateProgress_Copying"),
              (e[(e.k_EAppUpdateProgress_Committing = 6)] =
                "k_EAppUpdateProgress_Committing"),
              (e[(e.k_EAppUpdateProgress_Max = 7)] =
                "k_EAppUpdateProgress_Max");
          })(N || (N = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(U || (U = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(w || (w = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(O || (O = {})),
          (function (e) {
            (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
              "k_ECommunityProfileItemProperty_ImageSmall"),
              (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
                "k_ECommunityProfileItemProperty_ImageLarge"),
              (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
                "k_ECommunityProfileItemProperty_InternalName"),
              (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
                "k_ECommunityProfileItemProperty_Title"),
              (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
                "k_ECommunityProfileItemProperty_Description"),
              (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
                "k_ECommunityProfileItemProperty_AppID"),
              (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
                "k_ECommunityProfileItemProperty_TypeID"),
              (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
                "k_ECommunityProfileItemProperty_Class"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
                "k_ECommunityProfileItemProperty_MovieWebM"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
                "k_ECommunityProfileItemProperty_MovieMP4"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
                "k_ECommunityProfileItemProperty_MovieWebMSmall"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
                "k_ECommunityProfileItemProperty_MovieMP4Small");
          })(G || (G = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(D || (D = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(B || (B = {})),
          (function (e) {
            (e[(e.k_EAppReleaseState_Unknown = 0)] =
              "k_EAppReleaseState_Unknown"),
              (e[(e.k_EAppReleaseState_Unavailable = 1)] =
                "k_EAppReleaseState_Unavailable"),
              (e[(e.k_EAppReleaseState_Prerelease = 2)] =
                "k_EAppReleaseState_Prerelease"),
              (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
                "k_EAppReleaseState_PreloadOnly"),
              (e[(e.k_EAppReleaseState_Released = 4)] =
                "k_EAppReleaseState_Released"),
              (e[(e.k_EAppReleaseState_Disabled = 5)] =
                "k_EAppReleaseState_Disabled");
          })(x || (x = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut");
          })(W || (W = {})),
          (function (e) {
            (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
              (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
              (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
                "k_EInstallMgrStateWaitLicense"),
              (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
                "k_EInstallMgrStateFreeLicense"),
              (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
                "k_EInstallMgrStateShowCDKey"),
              (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
                "k_EInstallMgrStateWaitAppInfo"),
              (e[(e.k_EInstallMgrStateShowPassword = 6)] =
                "k_EInstallMgrStateShowPassword"),
              (e[(e.k_EInstallMgrStateShowConfig = 7)] =
                "k_EInstallMgrStateShowConfig"),
              (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
                "k_EInstallMgrStateShowEULAs"),
              (e[(e.k_EInstallMgrStateCreateApps = 9)] =
                "k_EInstallMgrStateCreateApps"),
              (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
                "k_EInstallMgrStateReadFromMedia"),
              (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
                "k_EInstallMgrStateShowChangeMedia"),
              (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
                "k_EInstallMgrStateWaitLegacyCDKeys"),
              (e[(e.k_EInstallMgrStateShowSignup = 13)] =
                "k_EInstallMgrStateShowSignup"),
              (e[(e.k_EInstallMgrStateComplete = 14)] =
                "k_EInstallMgrStateComplete"),
              (e[(e.k_EInstallMgrStateFailed = 15)] =
                "k_EInstallMgrStateFailed"),
              (e[(e.k_EInstallMgrStateCanceled = 16)] =
                "k_EInstallMgrStateCanceled");
          })(V || (V = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(H || (H = {})),
          (function (e) {
            (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
              (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
              (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
          })(z || (z = {}));
        function $(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        function Y(e, t, n, s) {
          var i,
            r = arguments.length,
            a =
              r < 3
                ? t
                : null === s
                  ? (s = Object.getOwnPropertyDescriptor(t, n))
                  : s;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, s);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (i = e[o]) &&
                (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
          return r > 3 && a && Object.defineProperty(t, n, a), a;
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
        function q(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        function K(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class J {
          m_vecCallbacks = [];
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                q(this.m_vecCallbacks, e);
              },
            };
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
          static PromiseFromAny(e) {
            return new Promise((t) => {
              let n = [];
              const s = () => {
                n.forEach((e) => e.Unregister()), t();
              };
              for (const t of e) n.push(t.Register(s));
            });
          }
        }
        class X {
          SyncStore(e) {
            return this.Subscribe(e).Unsubscribe;
          }
          GetValue() {
            return this.Value;
          }
        }
        Y([K], X.prototype, "SyncStore", null),
          Y([K], X.prototype, "GetValue", null);
        Y(
          [K],
          class {
            m_schTimer;
            m_fnCallback;
            m_fnOnCancel;
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e,
                ));
            }
            AsyncSchedule(e, t) {
              return new Promise((n, s) => {
                this.Schedule(e, () => {
                  t(), n();
                }),
                  (this.m_fnOnCancel = s);
              });
            }
            IsScheduled() {
              return void 0 !== this.m_schTimer;
            }
            Cancel() {
              if (this.m_schTimer) {
                const e = this.m_fnOnCancel;
                clearTimeout(this.m_schTimer), this.Reset(), e && e();
              }
            }
            Reset() {
              (this.m_schTimer = void 0),
                (this.m_fnCallback = void 0),
                (this.m_fnOnCancel = void 0);
            }
            ScheduledInternal() {
              const e = this.m_fnCallback;
              this.Reset(), e?.();
            }
          }.prototype,
          "ScheduledInternal",
          null,
        );
        Y(
          [K],
          class {
            m_vecCallbacks = [];
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => q(e, t));
            }
            Unregister() {
              for (const e of this.m_vecCallbacks) e();
              this.m_vecCallbacks = [];
            }
            GetUnregisterFunc() {
              return this.Unregister;
            }
          }.prototype,
          "Unregister",
          null,
        );
        var Q;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(Q || (Q = {}));
        new Map();
        new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class Z {
          m_mapTokens = new Map();
          m_mapFallbackTokens = new Map();
          m_cbkTokensChanged = new J();
          m_rgLocalesToUse;
          m_bReportIndividualMissingTokens = !0;
          static sm_ErrorReportingStore;
          static InstallErrorReportingStore(e) {
            this.sm_ErrorReportingStore = e;
          }
          static GetLanguageFallback(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return 29 === e ? 6 : 0;
          }
          static IsELanguageValidInRealm(e, t) {
            return (
              t === (29 === e ? z.k_ESteamRealmChina : z.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = 0; n < 31; n++)
              for (const s of e)
                if (this.IsELanguageValidInRealm(n, s)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, s, i, r) {
            r && (this.m_bReportIndividualMissingTokens = !1),
              i || this.m_mapTokens.clear();
            const a = { ...(n || {}), ...e },
              o = { ...(s || {}), ...(t || {}) };
            this.AddTokens(a, o), this.m_cbkTokensChanged.Dispatch();
          }
          InitDirect(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t),
              this.m_cbkTokensChanged.Dispatch();
          }
          AddTokens(e, t) {
            Object.keys(e).forEach((t) => {
              this.m_mapTokens.set(t, e[t]);
            }),
              t &&
                Object.keys(t).forEach((e) => {
                  this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                    this.m_mapFallbackTokens.set(e, t[e]);
                });
          }
          GetTokensChangedCallbackList() {
            return this.m_cbkTokensChanged;
          }
          GetPreferredLocales() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
                ? navigator.languages
                : ["en-US"];
          }
          GetELanguageFallbackOrder(e = null) {
            let t = new Array();
            if (
              (t.push(P(f.LANGUAGE)),
              (f.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != f.LANGUAGE && t.push(P(e.value));
              }),
              e)
            ) {
              Z.GetLanguageListForRealms(e).forEach((e) => {
                -1 == t.indexOf(e) && t.push(e);
              });
            }
            return t;
          }
          SetPreferredLocales(e) {
            this.m_rgLocalesToUse = e;
          }
          BLooksLikeToken(e) {
            return !!e && e.length > 0 && "#" == e.charAt(0);
          }
          LocalizeIfToken(e, t) {
            return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
          }
          LocalizeString(e, t) {
            const n = 0 == this.m_mapTokens.size;
            if (
              ($(
                !n,
                `Attempting to localize token '${e}' with no tokens in our map.`,
              ),
              !this.BLooksLikeToken(e))
            )
              return;
            let s = this.m_mapTokens.get(e.substring(1));
            if (void 0 !== s) return s;
            !t &&
              Z.sm_ErrorReportingStore &&
              !n &&
              this.m_bReportIndividualMissingTokens &&
              Z.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${f.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
                ),
                { bIncludeMessageInIdentifier: !0 },
              );
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
          static GetTokenWithFallback(e) {
            if (!e) return "";
            const t = P(f.LANGUAGE),
              n = e.find((e) => e.language == t);
            if (n) return n.localized_string;
            const s = Z.GetELanguageFallback(t),
              i = e.find((e) => e.language == s);
            return i?.localized_string ?? "";
          }
          static BHasTokenLanguage(e, t) {
            return Boolean(t.find((t) => t.language == e));
          }
        }
        function ee(e, ...t) {
          let n = se.LocalizeString(e);
          return void 0 === n ? e : ne(n, ...t);
        }
        function te(e, ...t) {
          let n = se.LocalizeString(e);
          if (void 0 === n) return e;
          let i,
            r = [],
            a = /(.*?)%(\d+)\$s/g,
            o = 0;
          for (; (i = a.exec(n)); ) {
            (o += i[0].length), r.push(i[1]);
            let e = parseInt(i[2]);
            e >= 1 && e <= t.length && r.push(t[e - 1]);
          }
          return r.push(n.substr(o)), s.createElement(s.Fragment, null, ...r);
        }
        function ne(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  let e = t[n - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        const se = new Z();
        window.LocalizationManager = se;
        var ie = n(62540),
          re = n(89193),
          ae = n(41230);
        class oe {
          m_strInviteCode;
          m_bReady = !1;
          m_bValid = !1;
          m_ulChatRoomGroupID;
          m_ulChatID;
          m_unAccountIDInviter;
          m_rtTimeExpires;
          m_bIsBanned;
          m_rtKickExpires;
          constructor(e) {
            (0, re.Gn)(this), (this.m_strInviteCode = e);
          }
          BIsReady() {
            return this.m_bReady;
          }
          BIsValid() {
            return this.m_bValid;
          }
          BIsInviteLink() {
            return !!this.m_strInviteCode;
          }
          GetInviteCode() {
            return this.m_strInviteCode;
          }
          BNeverExpires() {
            return this.m_rtTimeExpires == T;
          }
          GetChatRoomGroupID() {
            return this.m_ulChatRoomGroupID;
          }
          BIsVoiceChatInvite() {
            return !!this.m_ulChatID;
          }
          GetChatID() {
            return this.m_ulChatID;
          }
          GetURL() {
            return this.m_strInviteCode
              ? ((e = this.m_strInviteCode),
                "public" == f.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${f.COMMUNITY_BASE_URL}chat/invite/${e}`)
              : null;
            var e;
          }
          BIsUserBanned() {
            return this.m_bIsBanned;
          }
          GetTimeKickExpires() {
            return this.m_rtKickExpires;
          }
          get time_expires() {
            return this.m_rtTimeExpires;
          }
          InitInvalid() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }
          InitDirectInvite(e, t, n = !1, s = void 0) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = s),
              (this.m_rtTimeExpires = T),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        Y([re.sH], oe.prototype, "m_bReady", void 0),
          Y([re.XI], oe.prototype, "InitInvalid", null),
          Y([re.XI], oe.prototype, "InitDirectInvite", null);
        var ce = n(37976);
        class le {
          m_ulSteamID;
          constructor(e = 0, t, n, s) {
            e instanceof le
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
                ? (this.m_ulSteamID = ce.A.fromString(e, !0))
                : t && n && void 0 !== s
                  ? this.SetFromComponents(e ?? 0, s, n, t)
                  : (this.m_ulSteamID = e
                      ? ce.A.fromNumber(e, !0)
                      : ce.A.UZERO);
          }
          static InitFromAccountID(e) {
            return new le(Number(e), f.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new le(Number(e), f.EUNIVERSE, 7, 0);
          }
          GetAccountID() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }
          GetInstance() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }
          GetAccountType() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }
          GetUniverse() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }
          ConvertTo64BitString() {
            return this.m_ulSteamID.toString();
          }
          Render() {
            switch (this.GetAccountType()) {
              case 0:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 7:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 4:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 3:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 2:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 5:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 6:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }
          static InitFromString(e) {
            let t = new le();
            try {
              let [n, s, i, r, a] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                o = Number(i),
                c = Number(r),
                l = a ? Number(a) : 1;
              switch (s) {
                case "I":
                  t.SetFromComponents(c, l, 0, o);
                case "g":
                  t.SetFromComponents(c, 0, 7, o);
                case "A":
                  t.SetFromComponents(c, l, 4, o);
                case "G":
                  t.SetFromComponents(c, l, 3, o);
                case "M":
                  t.SetFromComponents(c, l, 2, o);
                case "P":
                  t.SetFromComponents(c, l, 5, o);
                case "C":
                  t.SetFromComponents(c, l, 6, o);
                case "U":
                  t.SetFromComponents(c, l, 1, o);
              }
            } catch (e) {}
            return t;
          }
          BIsValid() {
            let e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            let t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > 4) return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }
          BIsIndividualAccount() {
            return 1 == this.GetAccountType();
          }
          BIsClanAccount() {
            return 7 == this.GetAccountType();
          }
          SetAccountID(e) {
            this.m_ulSteamID = new ce.A(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0,
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse(),
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse(),
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e,
            );
          }
          SetFromComponents(e, t, n, s) {
            let i = ((255 & s) << 24) + ((15 & n) << 20) + (1048575 & t),
              r = 4294967295 & e;
            this.m_ulSteamID = new ce.A(r, i, !0);
          }
        }
        var _e = n(6660);
        class de extends oe {
          constructor(e) {
            super(e), (0, re.Gn)(this);
          }
          BIsExpired() {
            return ue.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new le(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        Y([re.XI], de.prototype, "InitFromPHPInviteLinkInfo", null);
        class ue {
          m_bConnectingToClient = !1;
          m_connectResult = void 0;
          m_invite;
          m_htmlPreRendered;
          static sm_rtTimeCur;
          constructor(e) {
            (0, re.Gn)(this),
              (this.m_invite = new de(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render),
              this.SendInviteToClient();
          }
          BIsInviteValid() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }
          GetInvite() {
            return this.m_invite;
          }
          BIsConnectingToClient() {
            return this.m_bConnectingToClient;
          }
          GetConnectResults() {
            return this.m_connectResult;
          }
          GetPreRenderedHTML() {
            return this.m_htmlPreRendered;
          }
          LaunchWebChat() {
            !(function (e) {
              let t = window.open("", "SteamWebChat", "");
              if (!t) return;
              let n = !1,
                s = !1;
              try {
                n = "about:blank" == t.location.href;
              } catch (e) {
                s = !0;
              }
              if (n) {
                if (e) {
                  let n = function (s) {
                    let i = f.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1",
                    );
                    s.source == t &&
                      "FriendsUIReady" == s.data &&
                      s.origin == i &&
                      (t.postMessage(e, f.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = f.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, f.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            this.SendInviteToClient(!1);
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient(e = !0) {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              A.ShowChatRoomGroupInvite(this.m_invite.GetInviteCode(), e).then(
                (e) => {
                  (0, re.h5)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e);
                  });
                },
              ));
          }
        }
        Y([re.sH], ue.prototype, "m_bConnectingToClient", void 0),
          Y([re.sH], ue.prototype, "m_connectResult", void 0);
        let he = class extends s.Component {
          render() {
            return (0, ie.jsx)("div", {
              className: "InviteLandingRoot",
              children: this.props.controller.BIsInviteValid()
                ? (0, ie.jsx)(me, { controller: this.props.controller })
                : (0, ie.jsx)(pe, { controller: this.props.controller }),
            });
          }
        };
        he = Y([ae.PA], he);
        let me = class extends s.Component {
          constructor(e) {
            super(e), (0, re.Gn)(this);
          }
          m_bTriedToLaunchSteam = !1;
          LaunchWebChat() {
            this.props.controller.LaunchWebChat();
          }
          OpenInSteamIgnoreAccount() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }
          LaunchSteamClient() {
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(() => {
                this.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }
          IsMobileDevice() {
            switch (new _e.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            if (this.props.controller.BIsConnectingToClient())
              return (0, ie.jsx)("div", {
                className: "ChatMessageInvite RequestingInfo NoColumns",
                children: (0, ie.jsx)("div", {
                  className: "postedExpiredInvite",
                  children: ee("#bbcode_invite_requesting_info"),
                }),
              });
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (f.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              s = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (s += " inviteButtonJoinVoice"),
              e.success
                ? (0, ie.jsxs)("div", {
                    className: "ChatMessageInvite NoColumns",
                    children: [
                      (0, ie.jsx)("div", {
                        className: "groupName",
                        children: ee("#InviteLanding_SentToSteam"),
                      }),
                      (0, ie.jsx)("div", {
                        className: "inviteLabel",
                        children: te(
                          "#InviteLanding_SentToSteam_Desc",
                          (0, ie.jsx)("a", {
                            href: "#",
                            onClick: this.LaunchWebChat,
                            children: ee(
                              "#InviteLanding_SentToSteam_Desc_LaunchWebChat",
                            ),
                          }),
                        ),
                      }),
                    ],
                  })
                : e.account_mismatch
                  ? (0, ie.jsxs)(ge, {
                      render: this.props.controller.GetPreRenderedHTML(),
                      children: [
                        (0, ie.jsx)("div", {
                          className: "inviteLabel",
                          children: ee("#InviteLanding_AccountMismatch"),
                        }),
                        (0, ie.jsxs)("div", {
                          className: "inviteLabel",
                          children: [
                            (0, ie.jsx)("button", {
                              className: s,
                              type: "button",
                              onClick: this.OpenInSteamIgnoreAccount,
                              children: ee("#InviteLanding_OpenInSteam"),
                            }),
                            (0, ie.jsx)("button", {
                              className: s,
                              type: "button",
                              onClick: this.LaunchWebChat,
                              children: ee("#InviteLanding_OpenInWebChat"),
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.call_unsupported
                    ? (0, ie.jsxs)("div", {
                        className: "ChatMessageInvite",
                        children: [
                          (0, ie.jsx)("div", {
                            className: "groupName",
                            children: ee("#InviteLanding_SentToSteam"),
                          }),
                          (0, ie.jsx)("div", {
                            className: "inviteLabel",
                            children: te(
                              "#InviteLanding_SentToSteam_Desc",
                              (0, ie.jsx)("a", {
                                href: "#",
                                onClick: this.LaunchWebChat,
                                children: ee(
                                  "#InviteLanding_SentToSteam_Desc_LaunchWebChat",
                                ),
                              }),
                            ),
                          }),
                        ],
                      })
                    : (0, ie.jsxs)(ge, {
                        render: this.props.controller.GetPreRenderedHTML(),
                        children: [
                          (0, ie.jsxs)("div", {
                            className: "inviteLabel inviteLabelButtons",
                            children: [
                              !n &&
                                (0, ie.jsx)("button", {
                                  className: s,
                                  type: "button",
                                  onClick: this.LaunchSteamClient,
                                  children: ee("#InviteLanding_OpenInSteam"),
                                }),
                              (0, ie.jsx)("button", {
                                className: s,
                                type: "button",
                                onClick: this.LaunchWebChat,
                                children: ee("#InviteLanding_OpenInWebChat"),
                              }),
                            ],
                          }),
                          this.m_bTriedToLaunchSteam &&
                            (0, ie.jsx)("div", {
                              className: "inviteLabel inviteLabelLaunchPrompt",
                              children: ee("#InviteLanding_OpenInSteam_Help"),
                            }),
                        ],
                      })
            );
          }
        };
        Y([re.sH], me.prototype, "m_bTriedToLaunchSteam", void 0),
          Y([K], me.prototype, "LaunchWebChat", null),
          Y([K], me.prototype, "OpenInSteamIgnoreAccount", null),
          Y([K], me.prototype, "LaunchSteamClient", null),
          (me = Y([ae.PA], me));
        class pe extends s.Component {
          render() {
            return (0, ie.jsx)("div", {
              className: "ChatMessageInvite",
              children: (0, ie.jsx)("div", {
                className: "postedExpiredInvite",
                children: ee("#InviteLanding_ExpiredOrInvalid"),
              }),
            });
          }
        }
        function ge(e) {
          return (0, ie.jsxs)("div", {
            className: "ChatMessageInvite",
            children: [
              (0, ie.jsx)("div", {
                className: "leftInviteContainer",
                dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
              }),
              (0, ie.jsxs)("div", {
                className: "rightInviteContainer",
                children: [
                  (0, ie.jsx)("div", {
                    className: "inviteLabel",
                    children: te(
                      "#bbcode_invite_description",
                      (0, ie.jsx)("span", {
                        dangerouslySetInnerHTML: {
                          __html: e.render.strInviterNameLinkHTML,
                        },
                      }),
                    ),
                  }),
                  (0, ie.jsx)("div", {
                    className: "groupName",
                    children: e.render.strChatRoomGroupName,
                  }),
                  e.children,
                ],
              }),
            ],
          });
        }
        window.AssertMsg = $;
        let fe = new b();
        function Ie(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          ue.sm_rtTimeCur = t.rtTimeCur;
          let n = new ue(t);
          i.createRoot(e).render(s.createElement(he, { controller: n }));
        }
        (window.ClientConnectionAPI = fe),
          document.addEventListener("DOMContentLoaded", async function () {
            d(),
              await (async function (e) {
                const t = Z.GetLanguageFallback(e),
                  s = e === t,
                  [i, r, a, o] = await Promise.all([
                    n(14919)(`./shared_${e}.json`),
                    n(9437)(`./friendsui_${e}.json`),
                    s ? {} : n(68042)(`./shared_${t}.json`),
                    s ? {} : n(48516)(`./friendsui_${t}.json`),
                  ]);
                se.AddTokens({ ...i, ...r }, { ...a, ...o });
              })(f.LANGUAGE),
              (function () {
                let e = document.querySelectorAll(".ChatReactRoot");
                for (let t = 0; t < e.length; t++) {
                  let n = e[t],
                    s = n.getAttribute("data-component");
                  "ChatInvite" === s
                    ? Ie(n)
                    : $(!1, `unknown component: "${s}"`);
                }
              })();
          });
      },
      81405: (e, t, n) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
    },
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = r),
    (o.amdO = {}),
    (e = []),
    (o.O = (t, n, s, i) => {
      if (!n) {
        var r = 1 / 0;
        for (_ = 0; _ < e.length; _++) {
          for (var [n, s, i] = e[_], a = !0, c = 0; c < n.length; c++)
            (!1 & i || r >= i) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), i < r && (r = i));
          if (a) {
            e.splice(_--, 1);
            var l = s();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var _ = e.length; _ > 0 && e[_ - 1][2] > i; _--) e[_] = e[_ - 1];
      e[_] = [n, s, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      o.r(i);
      var r = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var a = 2 & s && e; "object" == typeof a && !~t.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((t) => (r[t] = () => e[t]));
      return (r.default = () => e), o.d(i, r), i;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) =>
      "javascript/webui/" +
      {
        43: "friendsui_sc_schinese-json",
        762: "friendsui_indonesian-json",
        976: "shared_thai-json",
        1225: "shared_swedish-json",
        1449: "shared_bulgarian-json",
        1499: "friendsui_latam-json",
        1973: "shared_japanese-json",
        2256: "shared_english-json",
        2320: "shared_norwegian-json",
        2435: "shared_latam-json",
        2632: "shared_spanish-json",
        2749: "shared_romanian-json",
        2945: "friendsui_russian-json",
        2954: "shared_ukrainian-json",
        3e3: "friendsui_turkish-json",
        3016: "friendsui_english-json",
        3232: "friendsui_italian-json",
        3415: "friendsui_portuguese-json",
        3485: "friendsui_japanese-json",
        3710: "shared_arabic-json",
        3789: "friendsui_vietnamese-json",
        3912: "shared_italian-json",
        4154: "friendsui_brazilian-json",
        4302: "friendsui_dutch-json",
        4434: "friendsui_ukrainian-json",
        4488: "friendsui_greek-json",
        4776: "friendsui_norwegian-json",
        4787: "friendsui_danish-json",
        5018: "shared_french-json",
        5110: "shared_dutch-json",
        5241: "shared_tchinese-json",
        5341: "friendsui_hungarian-json",
        5480: "friendsui_german-json",
        6031: "shared_finnish-json",
        6127: "friendsui_polish-json",
        6149: "shared_vietnamese-json",
        6165: "shared_hungarian-json",
        6208: "shared_german-json",
        6239: "shared_portuguese-json",
        6385: "friendsui_bulgarian-json",
        6518: "friendsui_arabic-json",
        6523: "shared_danish-json",
        6562: "shared_brazilian-json",
        6609: "friendsui_swedish-json",
        6888: "friendsui_thai-json",
        6971: "friendsui_koreana-json",
        7487: "friendsui_czech-json",
        7539: "shared_koreana-json",
        7591: "shared_czech-json",
        7786: "shared_schinese-json",
        7861: "friendsui_romanian-json",
        8025: "shared_russian-json",
        8194: "friendsui_french-json",
        8306: "shared_indonesian-json",
        8759: "friendsui_finnish-json",
        8766: "friendsui_tchinese-json",
        8967: "shared_polish-json",
        9027: "shared_sc_schinese-json",
        9152: "shared_turkish-json",
        9712: "shared_greek-json",
        9746: "friendsui_schinese-json",
        9808: "friendsui_spanish-json",
      }[e] +
      ".js?contenthash=" +
      {
        43: "93cb79b044e7536c3480",
        762: "8a41f18c9f3ef97f5303",
        976: "fa66cbbe51ecacf3fb84",
        1225: "ec17d6e4a6e589ac1638",
        1449: "882cadaab8acc90e85f0",
        1499: "8776c19ba8a29410ef31",
        1973: "c2aa56231e056a7c22be",
        2256: "96ae643f855f78ce0a82",
        2320: "54b2cab6c994a0653767",
        2435: "8ef2f285e69f913079b5",
        2632: "8315773fd13c232a2580",
        2749: "ed43c5c05bea7cfeb95e",
        2945: "2895f4933307edc83db3",
        2954: "a76bcb2bce4ca2a985c2",
        3e3: "f25eceb68319028bebb7",
        3016: "5350f4e10ad588ceb109",
        3232: "24d7f289046539df24da",
        3415: "af0a539ae9a2911a881f",
        3485: "dc24d873e5b1cbdc703a",
        3710: "029631811ef79b620376",
        3789: "054d0d1457e489ab83cd",
        3912: "9026f0f18b93bf7f3be3",
        4154: "a42f5c8a931faec32b3e",
        4302: "5f96b098b87755d88881",
        4434: "a4963ad2ec6ec578498d",
        4488: "6fc4650152e31925c959",
        4776: "fcef25c79464d2dab63c",
        4787: "f933b9746b9145fdf8c7",
        5018: "46e1b66059504491cbb9",
        5110: "4ea17eab80559f48b6fc",
        5241: "f7a06b2b47984704f5f4",
        5341: "7a78f0e1927e9759e826",
        5480: "d623db031a5e27e6bd30",
        6031: "a4c003d60899f3fad516",
        6127: "079be2dc7d25f9ce1c8d",
        6149: "367a0c08136db7356a97",
        6165: "400086a75dc03877a8ad",
        6208: "2c595e78ae67b27b41da",
        6239: "e02223aef6a1a4037fee",
        6385: "f66f814b48e10c54f083",
        6518: "c15de94ae757264a6aa2",
        6523: "8560d4380f7ca9e0713d",
        6562: "6c00643ae7cc26198670",
        6609: "e86f870358e54ad3dfa0",
        6888: "2ae8e28929899aaa51ef",
        6971: "bfe028a323583ce69801",
        7487: "57b6d1e2b2714ad59b41",
        7539: "4c4fdbaabd7e1bccb2f0",
        7591: "abc8ee9460971251ca44",
        7786: "8cf6c6610caab83f5902",
        7861: "2a1b2fbd3a988273124b",
        8025: "7c94380d15dca34e7727",
        8194: "0919c0bfecd38a2be954",
        8306: "d91b7fdc16e20f3b6d8a",
        8759: "ea1ea31bf8c3bbce45b3",
        8766: "62af14dba1cfc865f4aa",
        8967: "0def7518516b6994a4ba",
        9027: "d1188c30e2da82f8146e",
        9152: "3871c1b954d4ffae3f28",
        9712: "2485e34a938a406e7fc2",
        9746: "a4d9d591f600608f2745",
        9808: "5b208a4b05c2291700a7",
      }[e]),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s = {}),
    (i = "@steam/friendsui:"),
    (o.l = (e, t, n, r) => {
      if (s[e]) s[e].push(t);
      else {
        var a, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), _ = 0;
            _ < l.length;
            _++
          ) {
            var d = l[_];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == i + n
            ) {
              a = d;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", i + n),
          (a.src = e)),
          (s[e] = [t]);
        var u = (t, n) => {
            (a.onerror = a.onload = null), clearTimeout(h);
            var i = s[e];
            if (
              (delete s[e],
              a.parentNode && a.parentNode.removeChild(a),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        (a.onerror = u.bind(null, a.onerror)),
          (a.onload = u.bind(null, a.onload)),
          c && document.head.appendChild(a);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (o.j = 7612),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
          for (var s = n.length - 1; s > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[s--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../");
    })(),
    (() => {
      var e = { 7612: 0 };
      (o.f.j = (t, n) => {
        var s = o.o(e, t) ? e[t] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else {
            var i = new Promise((n, i) => (s = e[t] = [n, i]));
            n.push((s[2] = i));
            var r = o.p + o.u(t),
              a = new Error();
            o.l(
              r,
              (n) => {
                if (o.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0), s)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = r),
                    s[1](a);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (o.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var s,
            i,
            [r, a, c] = n,
            l = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (s in a) o.o(a, s) && (o.m[s] = a[s]);
            if (c) var _ = c(o);
          }
          for (t && t(n); l < r.length; l++)
            (i = r[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(_);
        },
        n = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = o.O(void 0, [1068], () => o(53586));
  c = o.O(c);
})();
