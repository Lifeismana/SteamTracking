/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [38843],
  {
    97824: (e) => {
      e.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    62381: (e, n, t) => {
      "use strict";
      t.d(n, { W: () => c });
      var s = t(37085),
        i = t(30470);
      let o = { success: !0, result: s.R };
      class r {
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
          return new Promise((n, t) => {
            let s = this.m_iCallSeq++;
            this.BSendMsg(e, s)
              ? this.m_mapWaitingCallbacks.set(s, {
                  iSeq: s,
                  fnCallback: n,
                  fnError: t,
                })
              : t();
          });
        }
        BSendMsg(e, n) {
          if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
            return !1;
          let t = Object.assign({}, e, {
            universe: i.TS.EUNIVERSE,
            accountid: i.iA.accountid,
          });
          void 0 !== n && (t.sequenceid = n);
          try {
            return this.m_socket.send(JSON.stringify(t)), !0;
          } catch (e) {
            return !1;
          }
        }
        OnSocketMessage(e) {
          try {
            let n = JSON.parse(e.data);
            if (n.sequenceid) {
              let e = this.m_mapWaitingCallbacks.get(n.sequenceid);
              if (e)
                return (
                  this.m_mapWaitingCallbacks.delete(n.sequenceid),
                  void e.fnCallback(n)
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
          let e = new Promise((e, n) => {
            try {
              this.m_socket = new WebSocket(
                "ws://127.0.0.1:27060/clientsocket/",
              );
            } catch (e) {
              return (this.m_bSecurityException = !0), void n(e);
            }
            (this.m_socket.onerror = (e) => {
              n();
            }),
              (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
              (this.m_socket.onopen = () => {
                this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                  .then((t) => {
                    t.success == s.R
                      ? ((this.m_ClientInfo.ulVersion = t.clientversion),
                        (this.m_ClientInfo.bFriendsUIEnabled = !!t.friendsui),
                        (this.m_ClientInfo.unAccountID = t.accountid),
                        t.supported_messages &&
                          (this.m_ClientInfo.rgSupportedMessages =
                            t.supported_messages),
                        e())
                      : n();
                  })
                  .catch(n);
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
      let c = new (class {
        m_connection = new r();
        FailureResult(e = s.zi) {
          let n = { success: !1, result: e };
          return (
            this.m_connection &&
              !this.m_connection.browser_supported &&
              (n.browser_unsupported = !0),
            this.m_connection &&
              !this.m_connection.connected_to_client &&
              (n.connect_failed = !0),
            e == s.Vr && (n.call_unsupported = !0),
            n
          );
        }
        BClientConnected() {
          return this.m_connection.Connect().then(
            () => o,
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
              !this.m_connection.connected_to_client || !this.m_connection.ready
            ) &&
            -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
          );
        }
        OpenFriendChatDialog(e) {
          let n = { message: "ShowFriendChatDialog", steamid: e };
          return this.GenericEResultCall(n);
        }
        OpenChatRoomGroupDialog(e, n) {
          let t = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
          return n && (t.chat_room_id = n), this.GenericEResultCall(t);
        }
        ShowChatRoomGroupInvite(e, n = !0) {
          let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
          return this.GenericEResultCall(t, n);
        }
        m_mapCacheSubscribedApp = new Map();
        BIsSubscribedApp(e) {
          if (this.m_mapCacheSubscribedApp.has(e))
            return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
          let n = { message: "IsSubscribedApp", appid: e };
          return this.GenericEResultCall(n, !0).then((n) => {
            if (n.connect_failed) return;
            let t = n.result == s.R;
            return this.m_mapCacheSubscribedApp.set(e, t), t;
          });
        }
        OpenFriendsDialog() {
          return this.GenericEResultCall({ message: "OpenFriendsDialog" });
        }
        OpenSteamURL(e, n = !1) {
          let t = { message: "OpenSteamURL", url: e };
          return this.GenericEResultCall(t, n);
        }
        BClientAccountMatches() {
          return (
            !i.iA.logged_in ||
            i.iA.accountid == this.m_connection.ClientInfo.unAccountID
          );
        }
        GenericEResultCall(e, n = !1) {
          return this.m_connection
            .Connect()
            .then(() =>
              n && !this.BClientAccountMatches()
                ? { success: !1, result: s.$A, account_mismatch: !0 }
                : this.m_connection
                    .SendMsgAndAwaitResponse(e)
                    .then((e) =>
                      e.success === s.R ? o : this.FailureResult(e.success),
                    ),
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = c;
    },
    71009: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          OpenInDesktopClient: () => p,
          default: () => _,
          useOpenWebInSteamClient: () => d,
        });
      var s = t(7850),
        i = t(37085),
        o = t(90626),
        r = t(30470),
        c = t(84811),
        a = t(62381),
        l = t(97824),
        u = t(78327),
        h = t(2627),
        m = t(61859);
      const p = (0, c.Nr)(function (e) {
        const { fnOpenInSteamClient: n } = d();
        return (0, s.jsx)("div", {
          className: l.OpenInBannerContainer,
          children: (0, s.jsxs)("div", {
            className: l.OpenInBannerContent,
            children: [
              (0, s.jsx)("div", {
                className: l.BannerButtonContainer,
                children: (0, s.jsx)("div", {
                  onClick: n,
                  className: l.BannerButton,
                  children: (0, m.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, s.jsx)("div", {
                className: l.BannerMessage,
                children: (0, s.jsxs)("div", {
                  className: l.BannerTitle,
                  children: [
                    (0, s.jsx)("b", {
                      children: (0, m.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, s.jsx)("br", {}),
                    (0, m.we)("#OpenInDesktopAppBanner_Body"),
                  ],
                }),
              }),
            ],
          }),
        });
      });
      function d() {
        const [e, n] = o.useState(i._9);
        o.useEffect(() => {
          r.TS.IN_CLIENT ||
            r.TS.IN_MOBILE ||
            r.TS.IN_MOBILE_WEBVIEW ||
            a.W.BClientConnectedAndSupportsMessage("OpenSteamURL").then((e) => {
              n(e ? i.R : i.zi);
            });
        }, []);
        const t = o.useCallback(() => {
          let n = `${(0, u.yl)()}//openurl/`;
          const t = (0, h.VY)("browserid");
          if (t) {
            const e = new URL(window.location.href),
              s = new URLSearchParams(e.search);
            s.set("utm_bid", t),
              (n += e.origin + e.pathname + "?" + s.toString() + e.hash);
          } else n += window.location.href;
          e == i.R ? a.W.OpenSteamURL(n) : (window.location.href = n);
        }, [e]);
        return { eClientConnectedState: e, fnOpenInSteamClient: t };
      }
      const _ = p;
    },
  },
]);
