/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10632517";
(() => {
  "use strict";
  function e(e, t) {
    return (
      (e = Math.ceil(e)),
      (t = Math.floor(t)),
      Math.floor(Math.random() * (t - e + 1)) + e
    );
  }
  function t(e) {
    if (!n() || !window.document.cookie) return null;
    const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
    return t && t[2] ? decodeURIComponent(t[2]) : null;
  }
  function n() {
    return !!window.document;
  }
  const i = {
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
          if (!n()) return a || (a = u()), a;
          let e = t("sessionid");
          e || (e = u());
          return e;
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
    s = {
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
    o = { steamid: "", clanid: 0, listid: 0 },
    c = {
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
    r = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" },
    _ = "webui_config";
  let a;
  function u() {
    const t = (function () {
      let t = "";
      for (let n = 0; n < 24; n++) t += e(0, 35).toString(36);
      return t;
    })();
    return (
      (function (e, t, i, s) {
        if (!n()) return;
        s || (s = "/");
        let o = "";
        if (void 0 !== i && i) {
          const e = new Date();
          e.setTime(e.getTime() + 864e5 * i),
            (o = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          o +
          ";path=" +
          s;
      })("sessionid", t, 0),
      t
    );
  }
  function l(e = _) {
    const a = {},
      u = m("config", e);
    u && (delete u.SESSIONID, Object.assign(i, u), (a.config = !0));
    const l = m("userinfo", e);
    l &&
      (Object.assign(s, l),
      (a.userConfig = !0),
      s.is_support &&
        (function () {
          let e = null;
          n() && (e = t(C));
          return Boolean(e && 1 === Number.parseInt(e));
        })() &&
        (s.is_support = !1));
    const d = m("broadcast", e);
    d && (Object.assign(o, d), (a.broadcastConfig = !0));
    const h = m("community", e);
    h && (Object.assign(c, h), (a.communityConfig = !0));
    const A = m("event", e);
    return (
      A && (Object.assign(r, A), (a.eventConfig = !0)),
      (S = !0),
      E.forEach((e) => e()),
      a
    );
  }
  let E = new Set(),
    S = !1;
  function m(e, t = _) {
    return d(e, t, !0);
  }
  function d(e, t = _, n) {
    let i;
    if (
      ((i =
        "string" == typeof t
          ? {
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false",
            }.MOBILE_BUILD
            ? null
            : document.getElementById(t)
          : t),
      i)
    )
      try {
        if (i.hasAttribute("data-" + e)) {
          return JSON.parse(i.getAttribute("data-" + e));
        }
        return null;
      } catch (e) {
        console.error(
          "Failed to parse config for " +
            s.steamid +
            " (" +
            window.location.href +
            ")",
          e,
        );
      }
    else n && console.error("Missing config element #", t);
  }
  const C = "presentation_mode";
  let h = { success: !0, result: 1 };
  class A {
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
      return !!this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
    }
    SendMsgAndAwaitResponse(e) {
      return new Promise((t, n) => {
        let i = this.m_iCallSeq++;
        this.BSendMsg(e, i)
          ? this.m_mapWaitingCallbacks.set(i, {
              iSeq: i,
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
        universe: i.EUNIVERSE,
        accountid: s.accountid,
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
          this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
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
  let p = new (class {
    m_connection = new A();
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
        () => h,
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
        !(!this.m_connection.connected_to_client || !this.m_connection.ready) &&
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
        !s.logged_in || s.accountid == this.m_connection.ClientInfo.unAccountID
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
                  1 === e.success ? h : this.FailureResult(e.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  })();
  (window.ClientConnectionAPI = p),
    document.addEventListener("DOMContentLoaded", function () {
      l(), (window.ClientConnectionAPI = p);
    });
})();
