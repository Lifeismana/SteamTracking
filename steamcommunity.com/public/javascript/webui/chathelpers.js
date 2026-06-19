/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10748202";
(() => {
  var e,
    t,
    n,
    s,
    i,
    r = {
      9437: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [64541, 6518],
          "./friendsui_brazilian.json": [34977, 4154],
          "./friendsui_bulgarian.json": [29322, 6385],
          "./friendsui_czech.json": [88612, 7487],
          "./friendsui_danish.json": [23992, 4787],
          "./friendsui_dutch.json": [26117, 4302],
          "./friendsui_english.json": [20723, 3016],
          "./friendsui_finnish.json": [80444, 8759],
          "./friendsui_french.json": [79337, 8194],
          "./friendsui_german.json": [51651, 5480],
          "./friendsui_greek.json": [74483, 4488],
          "./friendsui_hungarian.json": [35798, 5341],
          "./friendsui_indonesian.json": [88097, 762],
          "./friendsui_italian.json": [67291, 3232],
          "./friendsui_japanese.json": [52118, 3485],
          "./friendsui_koreana.json": [9104, 6971],
          "./friendsui_latam.json": [42944, 1499],
          "./friendsui_malay.json": [18495, 2532],
          "./friendsui_norwegian.json": [53267, 4776],
          "./friendsui_polish.json": [92180, 6127],
          "./friendsui_portuguese.json": [90828, 3415],
          "./friendsui_romanian.json": [35534, 7861],
          "./friendsui_russian.json": [44330, 2945],
          "./friendsui_sc_schinese.json": [27088, 43],
          "./friendsui_schinese.json": [77033, 9746],
          "./friendsui_spanish.json": [22619, 9808],
          "./friendsui_swedish.json": [40842, 6609],
          "./friendsui_tchinese.json": [34618, 8766],
          "./friendsui_thai.json": [33779, 6888],
          "./friendsui_turkish.json": [22483, 3e3],
          "./friendsui_ukrainian.json": [54297, 4434],
          "./friendsui_vietnamese.json": [13414, 3789],
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
          "./friendsui_arabic.json": [64541, 6518],
          "./friendsui_brazilian.json": [34977, 4154],
          "./friendsui_bulgarian.json": [29322, 6385],
          "./friendsui_czech.json": [88612, 7487],
          "./friendsui_danish.json": [23992, 4787],
          "./friendsui_dutch.json": [26117, 4302],
          "./friendsui_english.json": [20723, 3016],
          "./friendsui_finnish.json": [80444, 8759],
          "./friendsui_french.json": [79337, 8194],
          "./friendsui_german.json": [51651, 5480],
          "./friendsui_greek.json": [74483, 4488],
          "./friendsui_hungarian.json": [35798, 5341],
          "./friendsui_indonesian.json": [88097, 762],
          "./friendsui_italian.json": [67291, 3232],
          "./friendsui_japanese.json": [52118, 3485],
          "./friendsui_koreana.json": [9104, 6971],
          "./friendsui_latam.json": [42944, 1499],
          "./friendsui_malay.json": [18495, 2532],
          "./friendsui_norwegian.json": [53267, 4776],
          "./friendsui_polish.json": [92180, 6127],
          "./friendsui_portuguese.json": [90828, 3415],
          "./friendsui_romanian.json": [35534, 7861],
          "./friendsui_russian.json": [44330, 2945],
          "./friendsui_sc_schinese.json": [27088, 43],
          "./friendsui_schinese.json": [77033, 9746],
          "./friendsui_spanish.json": [22619, 9808],
          "./friendsui_swedish.json": [40842, 6609],
          "./friendsui_tchinese.json": [34618, 8766],
          "./friendsui_thai.json": [33779, 6888],
          "./friendsui_turkish.json": [22483, 3e3],
          "./friendsui_ukrainian.json": [54297, 4434],
          "./friendsui_vietnamese.json": [13414, 3789],
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
          "./shared_arabic.json": [8476, 3710],
          "./shared_brazilian.json": [99574, 6562],
          "./shared_bulgarian.json": [43789, 1449],
          "./shared_czech.json": [815, 7591],
          "./shared_danish.json": [4289, 6523],
          "./shared_dutch.json": [54978, 5110],
          "./shared_english.json": [33800, 2256],
          "./shared_finnish.json": [3907, 6031],
          "./shared_french.json": [45040, 5018],
          "./shared_german.json": [94750, 6208],
          "./shared_greek.json": [69668, 9712],
          "./shared_hungarian.json": [45233, 6165],
          "./shared_indonesian.json": [90200, 8306],
          "./shared_italian.json": [31864, 3912],
          "./shared_japanese.json": [7263, 1973],
          "./shared_koreana.json": [30295, 7539],
          "./shared_latam.json": [50559, 2435],
          "./shared_malay.json": [61136, 6332],
          "./shared_norwegian.json": [86512, 2320],
          "./shared_polish.json": [52889, 8967],
          "./shared_portuguese.json": [72269, 6239],
          "./shared_romanian.json": [34419, 2749],
          "./shared_russian.json": [75777, 8025],
          "./shared_sc_schinese.json": [23723, 9027],
          "./shared_schinese.json": [85436, 7786],
          "./shared_spanish.json": [76736, 2632],
          "./shared_swedish.json": [94625, 1225],
          "./shared_tchinese.json": [15191, 5241],
          "./shared_thai.json": [4230, 976],
          "./shared_turkish.json": [34792, 9152],
          "./shared_ukrainian.json": [27246, 2954],
          "./shared_vietnamese.json": [59863, 6149],
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
          "./shared_arabic.json": [8476, 3710],
          "./shared_brazilian.json": [99574, 6562],
          "./shared_bulgarian.json": [43789, 1449],
          "./shared_czech.json": [815, 7591],
          "./shared_danish.json": [4289, 6523],
          "./shared_dutch.json": [54978, 5110],
          "./shared_english.json": [33800, 2256],
          "./shared_finnish.json": [3907, 6031],
          "./shared_french.json": [45040, 5018],
          "./shared_german.json": [94750, 6208],
          "./shared_greek.json": [69668, 9712],
          "./shared_hungarian.json": [45233, 6165],
          "./shared_indonesian.json": [90200, 8306],
          "./shared_italian.json": [31864, 3912],
          "./shared_japanese.json": [7263, 1973],
          "./shared_koreana.json": [30295, 7539],
          "./shared_latam.json": [50559, 2435],
          "./shared_malay.json": [61136, 6332],
          "./shared_norwegian.json": [86512, 2320],
          "./shared_polish.json": [52889, 8967],
          "./shared_portuguese.json": [72269, 6239],
          "./shared_romanian.json": [34419, 2749],
          "./shared_russian.json": [75777, 8025],
          "./shared_sc_schinese.json": [23723, 9027],
          "./shared_schinese.json": [85436, 7786],
          "./shared_spanish.json": [76736, 2632],
          "./shared_swedish.json": [94625, 1225],
          "./shared_tchinese.json": [15191, 5241],
          "./shared_thai.json": [4230, 976],
          "./shared_turkish.json": [34792, 9152],
          "./shared_ukrainian.json": [27246, 2954],
          "./shared_vietnamese.json": [59863, 6149],
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
      43592: (e, t, n) => {
        "use strict";
        n(9163);
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
        function d() {
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
        function u(e = c) {
          const t = {},
            n = m("config", e);
          n && (delete n.SESSIONID, Object.assign(k, n), (t.config = !0));
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
          i && (Object.assign(S, i), (t.broadcastConfig = !0));
          const r = m("community", e);
          r && (Object.assign(b, r), (t.communityConfig = !0));
          const l = m("event", e);
          return (
            l && (Object.assign(E, l), (t.eventConfig = !0)),
            (h = !0),
            _.forEach((e) => e()),
            t
          );
        }
        let _ = new Set(),
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
        var f = n(49211);
        const k = {
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
            ARCH: "",
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
                if (!o()) return l || (l = d()), l;
                let e = a("sessionid");
                return e || (e = d()), e;
              })();
            },
            FRIENDSUI_BETA: !1,
            STEAM_TV: !1,
            DEV_MODE: !1,
            IN_STEAMUI: !1,
            IN_GAMEPADUI: !1,
            FORCED_DISPLAY_MODE: void 0,
            ON_DECK: !1,
            ON_FRAME: !1,
            IS_STEAMOS_MANAGEMENT_ENABLED: !1,
            ON_STEAMOS_CLIENT_BRANCH: !1,
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
            excluded_content_descriptors: [f.u7, f.T4, f.mx],
          },
          S = { steamid: "", clanid: 0, listid: 0 },
          b = {
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
        var C = n(98768);
        let v = { success: !0, result: C.R };
        class R {
          m_connection = new T();
          FailureResult(e = C.zi) {
            let t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              e == C.Vr && (t.call_unsupported = !0),
              t
            );
          }
          BClientConnected() {
            return this.m_connection.Connect().then(
              () => v,
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
              let n = t.result == C.R;
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
                  ? { success: !1, result: C.$A, account_mismatch: !0 }
                  : this.m_connection
                      .SendMsgAndAwaitResponse(e)
                      .then((e) =>
                        e.success === C.R ? v : this.FailureResult(e.success),
                      ),
              )
              .catch(() => this.FailureResult());
          }
        }
        class T {
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
              universe: k.EUNIVERSE,
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
                      n.success == C.R
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
        let A = new R();
        window.ClientConnectionAPI = A;
        n(83957), n(22386);
        new Map();
        var y;
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
        })(y || (y = {}));
        const j = 2147483647,
          F = 30;
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
              return F;
            case "malay":
              return 31;
            default:
              return t;
          }
        }
        var w, M, L, O, N, U, G, D;
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
        })(w || (w = {})),
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
          })(M || (M = {})),
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
          })(L || (L = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(O || (O = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(N || (N = {})),
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
          })(U || (U = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(G || (G = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(D || (D = {}));
        var B, x, W, V, H, z;
        !(function (e) {
          (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
            "k_ERaiseGameWindowResult_NotRunning"),
            (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure");
        })(B || (B = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(x || (x = {})),
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
          })(W || (W = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut");
          })(V || (V = {})),
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
          })(H || (H = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(z || (z = {}));
        var $;
        !(function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })($ || ($ = {}));
        function q(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        var Y = n(1427);
        function K(e, t, n, s) {
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
        function J(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        function Q(e, t, n) {
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
        class X {
          m_vecCallbacks = [];
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                J(this.m_vecCallbacks, e);
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
        class Z {
          SyncStore(e) {
            return this.Subscribe(e).Unsubscribe;
          }
          GetValue() {
            return this.Value;
          }
        }
        K([Q], Z.prototype, "SyncStore", null),
          K([Q], Z.prototype, "GetValue", null);
        K(
          [Q],
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
        K(
          [Q],
          class {
            m_vecCallbacks = [];
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => J(e, t));
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
        var ee;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(ee || (ee = {}));
        new Map();
        new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class te {
          m_mapTokens = new Map();
          m_mapFallbackTokens = new Map();
          m_cbkTokensChanged = new X();
          m_rgLocalesToUse;
          m_bReportIndividualMissingTokens = !0;
          static GetLanguageFallback(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return 29 === e ? 6 : 0;
          }
          static IsELanguageValidInRealm(e, t) {
            return (
              t === (29 === e ? $.k_ESteamRealmChina : $.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = 0; n < 32; n++)
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
              (t.push(P(k.LANGUAGE)),
              (k.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != k.LANGUAGE && t.push(P(e.value));
              }),
              e)
            ) {
              te.GetLanguageListForRealms(e).forEach((e) => {
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
              (q(
                !n,
                `Attempting to localize token '${e}' with no tokens in our map.`,
              ),
              !this.BLooksLikeToken(e))
            )
              return;
            let s = this.m_mapTokens.get(e.substring(1));
            if (void 0 !== s) return s;
            t ||
              n ||
              !this.m_bReportIndividualMissingTokens ||
              (0, Y.aj)().ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${k.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
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
            const t = P(k.LANGUAGE),
              n = e.find((e) => e.language == t);
            if (n) return n.localized_string;
            const s = te.GetELanguageFallback(t),
              i = e.find((e) => e.language == s);
            return i?.localized_string ?? "";
          }
          static BHasTokenLanguage(e, t) {
            return Boolean(t.find((t) => t.language == e));
          }
        }
        function ne(e, ...t) {
          let n = re.LocalizeString(e);
          return void 0 === n ? e : ie(n, ...t);
        }
        function se(e, ...t) {
          let n = re.LocalizeString(e);
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
        function ie(e, ...t) {
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
        const re = new te();
        window.LocalizationManager = re;
        var ae = n(62540),
          oe = n(89193),
          ce = n(41230);
        class le {
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
            (0, oe.Gn)(this), (this.m_strInviteCode = e);
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
            return this.m_rtTimeExpires == j;
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
                "public" == k.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${k.COMMUNITY_BASE_URL}chat/invite/${e}`)
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
              (this.m_rtTimeExpires = j),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        K([oe.sH], le.prototype, "m_bReady", void 0),
          K([oe.XI], le.prototype, "InitInvalid", null),
          K([oe.XI], le.prototype, "InitDirectInvite", null);
        var de = n(37976);
        class ue {
          m_ulSteamID;
          constructor(e = 0, t, n, s) {
            e instanceof ue
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
                ? (this.m_ulSteamID = de.A.fromString(e, !0))
                : t && n && void 0 !== s
                  ? this.SetFromComponents(e ?? 0, s, n, t)
                  : (this.m_ulSteamID = e
                      ? de.A.fromNumber(e, !0)
                      : de.A.UZERO);
          }
          static InitFromAccountID(e) {
            return new ue(Number(e), k.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new ue(Number(e), k.EUNIVERSE, 7, 0);
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
            let t = new ue();
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
            this.m_ulSteamID = new de.A(
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
            this.m_ulSteamID = new de.A(r, i, !0);
          }
        }
        var _e = n(6660);
        class he extends le {
          constructor(e) {
            super(e), (0, oe.Gn)(this);
          }
          BIsExpired() {
            return me.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new ue(e.steamid_sender);
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
        K([oe.XI], he.prototype, "InitFromPHPInviteLinkInfo", null);
        class me {
          m_bConnectingToClient = !1;
          m_connectResult = void 0;
          m_invite;
          m_htmlPreRendered;
          static sm_rtTimeCur;
          constructor(e) {
            (0, oe.Gn)(this),
              (this.m_invite = new he(e.strInviteCode)),
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
                    let i = k.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1",
                    );
                    s.source == t &&
                      "FriendsUIReady" == s.data &&
                      s.origin == i &&
                      (t.postMessage(e, k.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = k.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, k.COMMUNITY_BASE_URL);
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
                  (0, oe.h5)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e);
                  });
                },
              ));
          }
        }
        K([oe.sH], me.prototype, "m_bConnectingToClient", void 0),
          K([oe.sH], me.prototype, "m_connectResult", void 0);
        let pe = class extends s.Component {
          render() {
            return (0, ae.jsx)("div", {
              className: "InviteLandingRoot",
              children: this.props.controller.BIsInviteValid()
                ? (0, ae.jsx)(ge, { controller: this.props.controller })
                : (0, ae.jsx)(fe, { controller: this.props.controller }),
            });
          }
        };
        pe = K([ce.PA], pe);
        let ge = class extends s.Component {
          constructor(e) {
            super(e), (0, oe.Gn)(this);
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
              return (0, ae.jsx)("div", {
                className: "ChatMessageInvite RequestingInfo NoColumns",
                children: (0, ae.jsx)("div", {
                  className: "postedExpiredInvite",
                  children: ne("#bbcode_invite_requesting_info"),
                }),
              });
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (k.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              s = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (s += " inviteButtonJoinVoice"),
              e.success
                ? (0, ae.jsxs)("div", {
                    className: "ChatMessageInvite NoColumns",
                    children: [
                      (0, ae.jsx)("div", {
                        className: "groupName",
                        children: ne("#InviteLanding_SentToSteam"),
                      }),
                      (0, ae.jsx)("div", {
                        className: "inviteLabel",
                        children: se(
                          "#InviteLanding_SentToSteam_Desc",
                          (0, ae.jsx)("a", {
                            href: "#",
                            onClick: this.LaunchWebChat,
                            children: ne(
                              "#InviteLanding_SentToSteam_Desc_LaunchWebChat",
                            ),
                          }),
                        ),
                      }),
                    ],
                  })
                : e.account_mismatch
                  ? (0, ae.jsxs)(ke, {
                      render: this.props.controller.GetPreRenderedHTML(),
                      children: [
                        (0, ae.jsx)("div", {
                          className: "inviteLabel",
                          children: ne("#InviteLanding_AccountMismatch"),
                        }),
                        (0, ae.jsxs)("div", {
                          className: "inviteLabel",
                          children: [
                            (0, ae.jsx)("button", {
                              className: s,
                              type: "button",
                              onClick: this.OpenInSteamIgnoreAccount,
                              children: ne("#InviteLanding_OpenInSteam"),
                            }),
                            (0, ae.jsx)("button", {
                              className: s,
                              type: "button",
                              onClick: this.LaunchWebChat,
                              children: ne("#InviteLanding_OpenInWebChat"),
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.call_unsupported
                    ? (0, ae.jsxs)("div", {
                        className: "ChatMessageInvite",
                        children: [
                          (0, ae.jsx)("div", {
                            className: "groupName",
                            children: ne("#InviteLanding_SentToSteam"),
                          }),
                          (0, ae.jsx)("div", {
                            className: "inviteLabel",
                            children: se(
                              "#InviteLanding_SentToSteam_Desc",
                              (0, ae.jsx)("a", {
                                href: "#",
                                onClick: this.LaunchWebChat,
                                children: ne(
                                  "#InviteLanding_SentToSteam_Desc_LaunchWebChat",
                                ),
                              }),
                            ),
                          }),
                        ],
                      })
                    : (0, ae.jsxs)(ke, {
                        render: this.props.controller.GetPreRenderedHTML(),
                        children: [
                          (0, ae.jsxs)("div", {
                            className: "inviteLabel inviteLabelButtons",
                            children: [
                              !n &&
                                (0, ae.jsx)("button", {
                                  className: s,
                                  type: "button",
                                  onClick: this.LaunchSteamClient,
                                  children: ne("#InviteLanding_OpenInSteam"),
                                }),
                              (0, ae.jsx)("button", {
                                className: s,
                                type: "button",
                                onClick: this.LaunchWebChat,
                                children: ne("#InviteLanding_OpenInWebChat"),
                              }),
                            ],
                          }),
                          this.m_bTriedToLaunchSteam &&
                            (0, ae.jsx)("div", {
                              className: "inviteLabel inviteLabelLaunchPrompt",
                              children: ne("#InviteLanding_OpenInSteam_Help"),
                            }),
                        ],
                      })
            );
          }
        };
        K([oe.sH], ge.prototype, "m_bTriedToLaunchSteam", void 0),
          K([Q], ge.prototype, "LaunchWebChat", null),
          K([Q], ge.prototype, "OpenInSteamIgnoreAccount", null),
          K([Q], ge.prototype, "LaunchSteamClient", null),
          (ge = K([ce.PA], ge));
        class fe extends s.Component {
          render() {
            return (0, ae.jsx)("div", {
              className: "ChatMessageInvite",
              children: (0, ae.jsx)("div", {
                className: "postedExpiredInvite",
                children: ne("#InviteLanding_ExpiredOrInvalid"),
              }),
            });
          }
        }
        function ke(e) {
          return (0, ae.jsxs)("div", {
            className: "ChatMessageInvite",
            children: [
              (0, ae.jsx)("div", {
                className: "leftInviteContainer",
                dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
              }),
              (0, ae.jsxs)("div", {
                className: "rightInviteContainer",
                children: [
                  (0, ae.jsx)("div", {
                    className: "inviteLabel",
                    children: se(
                      "#bbcode_invite_description",
                      (0, ae.jsx)("span", {
                        dangerouslySetInnerHTML: {
                          __html: e.render.strInviterNameLinkHTML,
                        },
                      }),
                    ),
                  }),
                  (0, ae.jsx)("div", {
                    className: "groupName",
                    children: e.render.strChatRoomGroupName,
                  }),
                  e.children,
                ],
              }),
            ],
          });
        }
        window.AssertMsg = q;
        let Ie = new R();
        function Se(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          me.sm_rtTimeCur = t.rtTimeCur;
          let n = new me(t);
          i.createRoot(e).render(s.createElement(pe, { controller: n }));
        }
        (window.ClientConnectionAPI = Ie),
          document.addEventListener("DOMContentLoaded", async function () {
            u(),
              await (async function (e) {
                const t = te.GetLanguageFallback(e),
                  s = e === t,
                  [i, r, a, o] = await Promise.all([
                    n(14919)(`./shared_${e}.json`),
                    n(9437)(`./friendsui_${e}.json`),
                    s ? {} : n(68042)(`./shared_${t}.json`),
                    s ? {} : n(48516)(`./friendsui_${t}.json`),
                  ]);
                re.AddTokens({ ...i, ...r }, { ...a, ...o });
              })(k.LANGUAGE),
              (function () {
                let e = document.querySelectorAll(".ChatReactRoot");
                for (let t = 0; t < e.length; t++) {
                  let n = e[t],
                    s = n.getAttribute("data-component");
                  "ChatInvite" === s
                    ? Se(n)
                    : q(!1, `unknown component: "${s}"`);
                }
              })();
          });
      },
      98768: (e, t, n) => {
        "use strict";
        n.d(t, { $A: () => a, R: () => s, Vr: () => r, zi: () => i });
        const s = 1,
          i = 2,
          r = 7,
          a = 19;
      },
      1427: (e, t, n) => {
        "use strict";
        async function s(e, t = "SHA-256") {
          let n;
          var s;
          "string" == typeof e
            ? ((s = e), (n = new TextEncoder().encode(s).buffer))
            : (n = e);
          return (function (e) {
            const t = new Uint8Array(e);
            let n = "";
            for (let e = 0; e < t.length; e++)
              n += ("00" + t[e].toString(16)).slice(-2);
            return n;
          })(await window.crypto.subtle.digest(t, n));
        }
        n.d(t, { aj: () => v });
        var i = n(97530),
          r = n(28663),
          a = n(63696);
        const o =
          window.addEventListener ||
          (globalThis && globalThis.addEventListener) ||
          (() => {});
        let c,
          l = [],
          d = (e, t, n) =>
            l.push({ error: e, cCallsitesToIgnore: t, strComponentStack: n });
        const u = !0;
        class _ extends Error {
          constructor(...e) {
            super(...e), (this.name = "Assertion Failed");
          }
        }
        {
          const e = console.assert;
          console.assert = (t, n, ...s) => {
            if (!t) {
              const e = p();
              d(new _(f(n, ...s)), 2, e);
            }
            e.apply(console, [t, n, ...s]);
          };
          const t = console.error;
          (console.error = (e, ...n) => {
            const s = p();
            d(new Error(f(e, ...n)), 1, s), t.apply(console, [e, ...n]);
          }),
            (console.clogerror = (e, n, ...s) => {
              const i = p();
              d(new Error(f(n, ...s)), e + 1, i), t.apply(console, [n, ...s]);
            }),
            o("error", (e) => {
              d(e.error, 0);
            }),
            o("unhandledrejection", (e) => {
              d(e.reason, 0);
            }),
            (c = window.setTimeout(() => {
              (l = []), (d = () => {});
            }, 3e4));
        }
        const h = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
          m = [
            "(localhost|127.0.0.1):(?!(80|443))",
            "chrome-extension://",
            "HTMLDivElement.onreset \\(/market",
            "/.millennium/Dist",
            "Millennium internal",
            "millenium",
            "Refused unauthorized RPC command",
          ];
        function p() {
          try {
            const e =
              a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
            if (
              e &&
              "object" == typeof e &&
              "function" == typeof e.getCurrentStack
            ) {
              const t = e.getCurrentStack();
              if ("string" == typeof t) return t;
            }
          } catch (e) {}
        }
        class g {
          m_strProduct;
          m_strVersion;
          m_transport = null;
          m_rgErrorQueue = [];
          m_sendTimer = null;
          m_bReportingPaused = !1;
          m_pauseTimer = void 0;
          m_fnGetReportingInterval = T;
          m_fnGetReportTags = () => [];
          m_fnGetURL = () => location.href;
          m_bEnabled = !0;
          m_bInitialized = !1;
          constructor(e = !0) {
            e
              ? (l.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: n }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: n,
                    }),
                ),
                (d = (e, t, n) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: n,
                  })))
              : (d = () => {}),
              (l = []),
              clearTimeout(c),
              window.setTimeout(() => {
                this.m_bInitialized ||
                  ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
              }, 3e4);
          }
          Init(e, t, n, s = {}) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = e),
              (this.m_strVersion = t),
              (this.m_transport = n),
              s.fnGetReportingInterval &&
                (this.m_fnGetReportingInterval = s.fnGetReportingInterval),
              s.fnGetReportTags && (this.m_fnGetReportTags = s.fnGetReportTags),
              s.fnGetURL && (this.m_fnGetURL = s.fnGetURL),
              this.m_bEnabled ||
                (console.error(
                  "Error reporting was initialized after being disabled, possibly dropping errors.",
                ),
                (this.m_bEnabled = !0)),
              this.m_rgErrorQueue.length &&
                (this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = []));
          }
          SetGetURL(e) {
            this.m_fnGetURL = e;
          }
          async ReportError(e, t) {
            if (!e)
              return (
                console.warn(
                  "Failed to report error: ReportError() was called without an error to report.",
                ),
                null
              );
            try {
              const n = { ...h, ...t };
              if (!this.m_bEnabled) return null;
              0;
              const s = await (function (e, t) {
                try {
                  return e.stack && e.stack.match(k)
                    ? (async function (e, t) {
                        const {
                            cCallsitesToIgnore: n,
                            bIncludeMessageInIdentifier: s,
                          } = t,
                          { message: i, stack: r } = e,
                          a = r?.split("\n") ?? [];
                        let o = C(a.filter((e) => !!e.match(k))[n]);
                        s && (o = `${o} ${i}`);
                        const c = a
                          .map((e) => {
                            let t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                            if (
                              ((t && 5 == t.length) ||
                                (t = e.match(/(.*at )(http.*):(\d+):(\d+)/)),
                              !t)
                            )
                              return e;
                            if (5 === t.length) {
                              const [e, n, s, i, r] = t,
                                a = parseInt(i),
                                o = parseInt(r);
                              if (!isNaN(a) && !isNaN(o)) return [n, s, a, o];
                            }
                            return e;
                          })
                          .filter((e) => !!e);
                        return {
                          identifier: o,
                          identifierHash: await R(o),
                          message: c,
                        };
                      })(e, t)
                    : e.stack && e.stack.match(I)
                      ? (async function (e, t) {
                          const {
                              cCallsitesToIgnore: n,
                              bIncludeMessageInIdentifier: s,
                            } = t,
                            i = e.stack?.split("\n") ?? [];
                          let r = C(i.filter((e) => !!e.match(I))[n]);
                          s && (r = `${r} ${e.message}`);
                          const a = i
                            .map((e) => {
                              const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, n, s, i, r] = t,
                                  a = parseInt(i),
                                  o = parseInt(r);
                                if (!isNaN(a) && !isNaN(o)) return [n, s, a, o];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: r,
                            identifierHash: await R(r),
                            message: [e.message, ...a],
                          };
                        })(e, t)
                      : e.stack && e.stack.match(S)
                        ? (async function (e, t) {
                            const {
                                bIncludeMessageInIdentifier: n,
                                cCallsitesToIgnore: s,
                              } = t,
                              i = e.stack?.split("\n") ?? [],
                              r = i[s],
                              a = r.split("/");
                            let o = a[a.length - 1];
                            r.indexOf("@") > -1 &&
                              (o = r.split("@")[0] + "@" + o);
                            n && (o = `${o} ${e.message}`);
                            const c = i
                              .map((e) => {
                                const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  const [e, n, s, i, r] = t,
                                    a = parseInt(i),
                                    o = parseInt(r);
                                  if (!isNaN(a) && !isNaN(o))
                                    return [n, s, a, o];
                                }
                                return e;
                              })
                              .filter((e) => !!e);
                            return {
                              identifier: o,
                              identifierHash: await R(o),
                              message: [e.message, ...c],
                            };
                          })(e, t)
                        : (E ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(e.stack),
                            (E = !0)),
                          null);
                } catch (e) {
                  return (
                    console.warn(`Failed to normalize error stack: ${e}`), null
                  );
                }
              })(e, n);
              return s
                ? (n.cCallsitesToIgnore &&
                    s.message.splice(1, n.cCallsitesToIgnore),
                  n.strComponentStack &&
                    (s.strComponentStack = n.strComponentStack),
                  (s.strUrl = this.m_fnGetURL()),
                  this.SendErrorReport(s),
                  s)
                : null;
            } catch (e) {
              return console.log(`Failed to report error: ${e}`), null;
            }
          }
          PauseReportingForDuration(e) {
            this.PauseReporting(),
              (this.m_pauseTimer = window.setTimeout(
                () => this.ResumeReporting(),
                e,
              ));
          }
          PauseReporting() {
            (this.m_bReportingPaused = !0),
              window.clearTimeout(this.m_pauseTimer);
          }
          ResumeReporting() {
            (this.m_bReportingPaused = !1),
              window.clearTimeout(this.m_pauseTimer),
              this.ScheduleSend();
          }
          BIsBlacklisted(e) {
            for (let t of e.message) {
              let n = JSON.stringify(t);
              for (let t of m) {
                const s = new RegExp(t);
                if (n.match(s))
                  return console.warn("Report", e, "matched regex", t), !0;
              }
            }
            return !1;
          }
          SendErrorReport(e) {
            this.BIsBlacklisted(e) ||
              (this.m_transport
                ? this.QueueReport(e)
                : this.m_rgErrorQueue.push(e));
          }
          QueueReport(e) {
            this.m_rgErrorQueue.push(e),
              this.m_bReportingPaused || this.ScheduleSend();
          }
          ScheduleSend() {
            this.m_sendTimer ||
              (this.m_sendTimer = window.setTimeout(() => {
                this.SendErrorReports(this.m_rgErrorQueue),
                  (this.m_rgErrorQueue = []),
                  (this.m_sendTimer = null);
              }, this.m_fnGetReportingInterval()));
          }
          SendErrorReports(e) {
            if (!e || !e.length) return;
            const t = i.w.Init(r.Gf),
              n = e.reduce(
                (e, t) => (
                  e[t.identifier]
                    ? e[t.identifier].count++
                    : (e[t.identifier] = { report: t, count: 1 }),
                  e
                ),
                {},
              ),
              s = Object.keys(n).map((e) => {
                const { report: t, count: s } = n[e],
                  i = new r.tF();
                let a;
                return (
                  i.set_count(s),
                  i.set_identifier(t.identifier + " " + t.identifierHash),
                  i.set_message(JSON.stringify(t.message)),
                  t.strComponentStack &&
                    ((a ??= {}), (a.componentStack = t.strComponentStack)),
                  a && i.set_context(JSON.stringify(a)),
                  t.strUrl && i.set_url(t.strUrl),
                  i
                );
              });
            t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(s);
            for (const e of this.m_fnGetReportTags()) t.Body().add_tags(e);
            r._5.ReportClientError(this.m_transport, t);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
          get reporting_enabled() {
            return u;
          }
        }
        function f(e, ...t) {
          if ("string" == typeof e && 0 === t.length) return e;
          return [e, ...t]
            .map((e) => {
              try {
                let t = String(e);
                return "[object Object]" == t && (t = JSON.stringify(e)), t;
              } catch (e) {
                return "[Stringify Error]";
              }
            })
            .join(", ");
        }
        const k = /^\s*at .*(\S+:\d+|\(native\))/m,
          I = /(^|@)\S+:\d+/,
          S = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
        let b,
          E = !1;
        function C(e) {
          return (function (e) {
            const t = "https://",
              n = e.indexOf(t);
            if (-1 === n) return e;
            const s = e.indexOf("/", n + t.length);
            return -1 === s ? e : e.slice(0, n) + e.slice(s);
          })(
            (function (e) {
              const t = e.lastIndexOf("?");
              if (-1 === t) return e;
              const n = e.indexOf(":", t);
              return -1 === n ? e : e.slice(0, t) + e.slice(n);
            })(e),
          );
        }
        const v = () => (b || (b = new g()), b);
        async function R(e) {
          try {
            return (await s(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        }
        function T() {
          return 1e4;
        }
      },
      97530: (e, t, n) => {
        "use strict";
        n.d(t, { I8: () => u, w: () => d });
        var s = n(1427),
          i = n(98768),
          r = n(58663),
          a = n(29246),
          o = n(67660),
          c = n(9765);
        class l {
          static InitHeaderFromPacket(e) {
            return new l(void 0, e);
          }
          m_eMsg;
          m_bValid;
          m_netPacket;
          m_cubHeader;
          m_header;
          m_body;
          constructor(e, t, n, s, i, a) {
            if (s)
              (this.m_eMsg = s.m_eMsg),
                (this.m_bValid = s.m_bValid),
                this.m_bValid &&
                  ((this.m_netPacket = s.m_netPacket),
                  (this.m_cubHeader = s.m_cubHeader),
                  (this.m_header = s.m_header),
                  this.InitForType(n));
            else {
              if (((this.m_header = new o.LH(null)), (this.m_bValid = !0), t))
                if (
                  ((this.m_netPacket = t),
                  this.m_netPacket.SeekGetHead(),
                  (this.m_eMsg = this.m_netPacket.GetUint32()),
                  2147483648 & this.m_eMsg)
                ) {
                  (this.m_eMsg = 2147483647 & this.m_eMsg),
                    (this.m_cubHeader = this.m_netPacket.GetUint32());
                  try {
                    o.LH.deserializeBinaryFromReader(
                      this.m_header,
                      new r.BinaryReader(
                        this.m_netPacket.GetPacket(),
                        this.m_netPacket.TellGet(),
                        this.m_cubHeader,
                      ),
                    ),
                      this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                      n && this.InitForType(n);
                  } catch (e) {
                    console.error("Exception deserializing protobuf", e),
                      (this.m_bValid = !1);
                  }
                } else this.m_bValid = !1;
              else
                e && (this.m_eMsg = e),
                  a && n
                    ? (this.m_body = n.fromObject(a))
                    : n && (this.m_body = new n());
              i && this.m_header.set_jobid_target(i.Hdr().jobid_target());
            }
          }
          InitForType(e) {
            (this.m_body = new e()),
              this.m_netPacket &&
                (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
                this.ReadBodyFromBuffer(e, this.m_netPacket));
          }
          ReadBodyFromBuffer(e, t) {
            try {
              e.deserializeBinaryFromReader(
                this.m_body,
                new r.BinaryReader(
                  t.GetPacket(),
                  t.TellGet(),
                  t.GetCountBytesRemaining(),
                ),
              );
            } catch (e) {
              this.m_bValid = !1;
              const t = (0, s.aj)(),
                n = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              t &&
                t.ReportError(new Error(n), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(n),
                console.log(e.stack || e);
            }
          }
          BIsValid() {
            return this.m_bValid;
          }
          Body() {
            return this.m_body;
          }
          SetBodyJSON(e) {
            (e.toObject = () => e), (this.m_body = e);
          }
          Hdr() {
            return this.m_header;
          }
          GetEMsg() {
            return this.m_eMsg;
          }
          SetEMsg(e) {
            this.m_eMsg = e;
          }
          GetEResult() {
            return this.Hdr().eresult();
          }
          BSuccess() {
            return this.Hdr().eresult() == i.R;
          }
          GetErrorMessage() {
            return this.Hdr().error_message()
              ? this.Hdr().error_message()
              : `eresult ${this.Hdr().eresult()}`;
          }
          Serialize() {
            const e = this.m_header.serializeBinary(),
              t = this.m_body.serializeBinary(),
              n = 2147483648 | this.m_eMsg,
              s = new Uint8Array(8 + e.length + t.length),
              i = new c.pV(s);
            return (
              i.PutUint32(n),
              i.PutUint32(e.length),
              i.PutBytes(e),
              i.PutBytes(t),
              s
            );
          }
          SerializeBody() {
            const e = this.m_body.serializeBinary(),
              t = new Uint8Array(e.length);
            return new c.pV(t).PutBytes(e), t;
          }
          DEBUG_ToObject() {
            return {};
          }
          DEBUG_LogToConsole() {
            0;
          }
        }
        class d extends l {
          constructor(e, t = a.MSr, n, s, i) {
            super(t, n, e, s, void 0, i);
          }
          static InitFromPacket(e, t) {
            return new d(e, 0, t);
          }
          static InitFromMsg(e, t) {
            return new d(e, void 0, void 0, t);
          }
          static Init(e, t) {
            return new d(e, t);
          }
          static InitFromObject(e, t) {
            return new d(e, void 0, void 0, void 0, t);
          }
          Body() {
            return super.Body();
          }
          SetBodyFields(e) {
            for (const t in e)
              Array.isArray(e[t])
                ? this.Body()[`add_${t}`] &&
                  e[t].forEach((e) => {
                    this.Body()[`add_${t}`](e);
                  })
                : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
          }
        }
        function u(e, t) {
          return t instanceof d ? t : d.InitFromObject(e, t);
        }
      },
      32073: (e, t, n) => {
        "use strict";
        n.d(t, {
          BT: () => c,
          Sg: () => u,
          Uq: () => o,
          gp: () => r,
          i0: () => d,
          qM: () => i,
          w0: () => a,
          zj: () => l,
        });
        var s = n(58663);
        const i = s.BinaryReader.prototype,
          r = s.BinaryWriter.prototype;
        function a(e) {
          const t = {},
            { fields: n } = e;
          for (const e in n) {
            const s = n[e];
            t[s.n] = s;
          }
          return t;
        }
        function o(e, t) {
          const { proto: n, fields: i } = e,
            r = new n();
          if (null == t) return r;
          for (const e in i) {
            const { n, c: a, r: o, d: c, q: l } = i[e];
            if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
            const d = t[e];
            a
              ? o
                ? s.Message.setRepeatedWrapperField(
                    r,
                    n,
                    Array.isArray(d) ? d.map((e) => a.fromObject(e)) : [],
                  )
                : s.Message.setWrapperField(r, n, a.fromObject(d))
              : s.Message.setField(r, n, d);
          }
          return r;
        }
        function c(e, t, n) {
          const { proto: i, fields: r } = e,
            a = {};
          for (const e in r) {
            const { n: i, c: o, r: c, d: l, q: d } = r[e];
            if (o)
              if (c)
                a[e] = s.Message.toObjectList(
                  s.Message.getRepeatedWrapperField(n, o, i),
                  o.toObject,
                  t,
                );
              else {
                const r = s.Message.getWrapperField(n, o, i, d ? 1 : 0);
                r && (a[e] = o.toObject(t, r));
              }
            else {
              const t = s.Message.getFieldWithDefault(
                n,
                i,
                void 0 !== l ? l : null,
              );
              (null !== t || d) && (a[e] = t);
            }
          }
          return t && (a.$jspbMessageInstance = n), a;
        }
        function l(e, t, n) {
          for (; n.nextField() && !n.isEndGroup(); ) {
            const i = e[n.getFieldNumber()];
            if (i) {
              const { n: e, c: r, r: a, d: o, q: c, br: l } = i;
              if (r) {
                const i = new r();
                n.readMessage(i, r.deserializeBinaryFromReader),
                  a
                    ? s.Message.addToRepeatedWrapperField(t, e, i, r)
                    : s.Message.setWrapperField(t, e, i);
              } else if (l) {
                const i = l.call(n);
                a
                  ? s.Message.addToRepeatedField(t, e, i)
                  : s.Message.setField(t, e, i);
              } else
                console.assert(
                  !!l,
                  `Reader func not set for field number ${e} in class ${r}`,
                ),
                  n.skipField();
            } else n.skipField();
          }
          return t;
        }
        function d(e, t, n) {
          const { fields: i } = e;
          for (const e in i) {
            const { n: r, c: a, r: o, d: c, q: l, bw: d } = i[e];
            if (a)
              if (o) {
                const e = s.Message.getRepeatedWrapperField(t, a, r);
                ((e && e.length) || l) &&
                  n.writeRepeatedMessage(r, e, a.serializeBinaryToWriter);
              } else {
                const e = s.Message.getWrapperField(t, a, r, l ? 1 : 0);
                e && n.writeMessage(r, e, a.serializeBinaryToWriter);
              }
            else if (d) {
              const e = s.Message.getField(t, r);
              void 0 !== e && d.call(n, r, e);
            } else
              console.assert(
                !!d,
                `Writer func not set for field number ${r} in class ${a}`,
              );
          }
        }
        function u(e) {
          const t = e.proto;
          for (const n in e.fields) {
            const i = e.fields[n],
              { n: r, c: a, r: o, d: c, q: l } = i;
            Object.prototype.hasOwnProperty.call(i, "d")
              ? (t.prototype[n] = _(s.Message.getFieldWithDefault, r, c))
              : (t.prototype[n] = a
                  ? o
                    ? _(s.Message.getRepeatedWrapperField, a, r)
                    : h(a, r)
                  : _(s.Message.getField, r)),
              (t.prototype[`set_${n}`] = m(
                a
                  ? o
                    ? s.Message.setRepeatedWrapperField
                    : s.Message.setWrapperField
                  : s.Message.setField,
                r,
              )),
              o && (t.prototype[`add_${n}`] = p(r, a));
          }
        }
        function _(e, ...t) {
          return function () {
            return e(this, ...t);
          };
        }
        function h(e, t) {
          return function (n = !0) {
            return s.Message.getWrapperField(this, e, t, n ? 1 : 0);
          };
        }
        function m(e, t) {
          return function (n) {
            return e(this, t, n);
          };
        }
        function p(e, t) {
          return t
            ? function (n, i) {
                return s.Message.addToRepeatedWrapperField(this, e, n, t, i);
              }
            : function (t, n) {
                s.Message.addToRepeatedField(this, e, t, n);
              };
        }
      },
      9765: (e, t, n) => {
        "use strict";
        n.d(t, { pV: () => s });
        class s {
          m_nOffset;
          m_nLength;
          m_viewPacket;
          m_rgubPacket;
          m_iGet;
          m_iPut;
          constructor(e, t = 0, n) {
            (this.m_nOffset = t || 0),
              e instanceof Uint8Array || e instanceof DataView
                ? ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                  (this.m_nOffset += e.byteOffset),
                  (this.m_viewPacket = new DataView(
                    e.buffer,
                    this.m_nOffset,
                    this.m_nLength,
                  )))
                : ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                  (this.m_viewPacket = new DataView(
                    e,
                    this.m_nOffset,
                    this.m_nLength,
                  ))),
              (this.m_rgubPacket = new Uint8Array(
                this.m_viewPacket.buffer,
                this.m_viewPacket.byteOffset,
                this.m_viewPacket.byteLength,
              )),
              (this.m_iGet = 0),
              (this.m_iPut = 0);
          }
          TellGet() {
            return this.m_iGet + this.m_viewPacket.byteOffset;
          }
          GetPacket() {
            return this.m_viewPacket.buffer;
          }
          GetUint8() {
            return this.m_viewPacket.getUint8(this.m_iGet++);
          }
          GetUint32(e = !0) {
            const t = this.m_viewPacket.getUint32(this.m_iGet, e);
            return (this.m_iGet += 4), t;
          }
          SeekGetHead(e = 0) {
            this.m_iGet = e || 0;
          }
          SeekGetCurrent(e) {
            this.m_iGet += e;
          }
          TellPut() {
            return this.m_iPut + this.m_viewPacket.byteOffset;
          }
          TellMaxPut() {
            return this.m_viewPacket.byteLength;
          }
          PutUint8(e) {
            this.m_viewPacket.setUint8(this.m_iPut++, e);
          }
          PutUint32(e, t = !0) {
            this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
          }
          PutBytes(e) {
            this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
          }
          SeekPut(e) {
            this.m_iPut += e;
          }
          GetCountBytesRemaining() {
            return this.m_viewPacket.byteLength - this.m_iGet;
          }
        }
      },
      9163: (e, t, n) => {
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
        for (d = 0; d < e.length; d++) {
          for (var [n, s, i] = e[d], a = !0, c = 0; c < n.length; c++)
            (!1 & i || r >= i) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), i < r && (r = i));
          if (a) {
            e.splice(d--, 1);
            var l = s();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [n, s, i];
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
        2532: "friendsui_malay-json",
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
        6332: "shared_malay-json",
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
        43: "8170f2c895e19202cd65",
        762: "da846d9434cb0fa053d0",
        976: "81f76d287266f15ed3a5",
        1225: "c6c8601a9e6abe184672",
        1449: "245718266a7cc519216f",
        1499: "fac3c5fdc04308b95497",
        1973: "a877203ae1007ab646d2",
        2256: "004d35481f20381e48e0",
        2320: "fd11ddb4a03c8dfae672",
        2435: "c8861d3816c4c0d59a3b",
        2532: "740ae502ef03c9aca44b",
        2632: "69a977cc2579d3f89e5e",
        2749: "834f73d43aa0072895d5",
        2945: "e07e4818e2a0d4fcc6a4",
        2954: "be32792023eda93331f1",
        3e3: "9d84323971dec0188c80",
        3016: "aa776518a1c8d05e2346",
        3232: "7e18a3c2d3045e97050e",
        3415: "f91b674a80d33488244d",
        3485: "c54eec1e659f8c59da85",
        3710: "c3d922ea241c5459ebea",
        3789: "43b07ba659d8cbaa69f3",
        3912: "a347cb3df9be272faf3c",
        4154: "94ca8cb2d2aa1f47d22a",
        4302: "26c6c68d68ef95ef5f8d",
        4434: "b76bcd1bc89404745cc8",
        4488: "9b7902a9dcd57e5a8ac3",
        4776: "ef1dcbea9d59f8743bf8",
        4787: "07b24eb37c9e0b433d0c",
        5018: "490872e9df94ed12c5c0",
        5110: "79325e808ded97e787f0",
        5241: "b4f9ae4d5bea90476bc4",
        5341: "671fa39c7d33a83df311",
        5480: "fe1e2469122f1c0d37d0",
        6031: "40199c163213017e50cc",
        6127: "165f942ae61f710d7fe3",
        6149: "12d0286432e695885906",
        6165: "58603c391af6c7c3d751",
        6208: "02967cd6852818826544",
        6239: "cd4c8ed09120f0e3b238",
        6332: "d2576b8487cb0b0c59e9",
        6385: "7f9b40cc12e05621335e",
        6518: "dc5f6ae58364d09cceda",
        6523: "68e74d73af1ab4519ff1",
        6562: "740c619446c4e69cace1",
        6609: "29f4e0907b3805eda2f2",
        6888: "f5ebd78ad10b3118603c",
        6971: "39f358e2496a3d2a55c3",
        7487: "c0d8195dd6dab3975615",
        7539: "dd49f82be147ae2e7392",
        7591: "85dc493eb7f99f948fad",
        7786: "e12b6c818a761e190080",
        7861: "46f4c386b3edcfa9f92b",
        8025: "7f128b680c3df6163111",
        8194: "36f74d61aa3af730900f",
        8306: "0125ccaf814904f3ecfa",
        8759: "959f10c584a5ca3aac3b",
        8766: "33682347c9abfde5c73d",
        8967: "1ca597e299aba31f42ea",
        9027: "c3ecf25b0d84cd1028c3",
        9152: "f1e0ecebc58cfb71e2d2",
        9712: "4f5d803e3c385485c825",
        9746: "793a8abfe2e6fc8551cb",
        9808: "942f6e1ad27af2af89a2",
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
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var u = l[d];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == i + n
            ) {
              a = u;
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
        var _ = (t, n) => {
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
            _.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        (a.onerror = _.bind(null, a.onerror)),
          (a.onload = _.bind(null, a.onload)),
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
            if (c) var d = c(o);
          }
          for (t && t(n); l < r.length; l++)
            (i = r[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(d);
        },
        n = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = o.O(void 0, [3987, 9489, 1068], () => o(43592));
  c = o.O(c);
})();
