/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1349, 8843],
  {
    50122: (e) => {
      e.exports = {
        TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
        TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
        Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
        "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
        "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
        "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
        "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
      };
    },
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
    11131: (e) => {
      e.exports = { WishlistModalOverride: "_3zojRjiXppBm0x5n5HgAZ1" };
    },
    28491: (e, n, t) => {
      "use strict";
      t.d(n, { Y: () => l });
      var i = t(7850),
        s = t(20187),
        o = t(11526),
        r = t(50122),
        c = t(8527),
        a = t(45699);
      function l(e) {
        const { underline: n = "auto", ...t } = e,
          s = c.TS.IN_GAMEPADUI ? a.Ii : "a";
        return (0, i.jsx)(s, {
          ...(0, o.mz)({ ...t, underline: n, className: r.TextLink }, d),
        });
      }
      const d = [
        ...s.Ae,
        { prop: "underline", className: (e) => r[`Underline-${e}`] },
      ];
    },
    84547: (e, n, t) => {
      "use strict";
      t.d(n, { E: () => h, l: () => u });
      var i = t(7850),
        s = t(64753),
        o = t(8527),
        r = t(55672),
        c = t(78395),
        a = t(21869),
        l = t(62151);
      function d(e) {
        const { closeModal: n } = e;
        return (0, i.jsx)(c.o0, {
          strTitle: l.F5.Localize("#LoginRedirect_Dialog_Title"),
          strDescription: l.F5.Localize("#LoginRedirect_Dialog_Description"),
          onCancel: n,
          strOKButtonText: r.Z.Localize("#Button_OK"),
          onOK: () => {
            u(), n();
          },
        });
      }
      function h() {
        const [e, n, t] = (0, s.uD)();
        return {
          elDialogElement: (0, i.jsx)(a.E, {
            active: e,
            children: (0, i.jsx)(d, { closeModal: t }),
          }),
          fnShowLogonDialog: n,
        };
      }
      function u() {
        const e = `${o.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        window.location.href = e;
      }
    },
    62151: (e, n, t) => {
      "use strict";
      t.d(n, { F5: () => o });
      var i = t(13843);
      const s = {};
      (s.arabic = () => t.e(3695).then(t.t.bind(t, 93695, 19))),
        (s.brazilian = () => t.e(1091).then(t.t.bind(t, 41091, 19))),
        (s.bulgarian = () => t.e(9180).then(t.t.bind(t, 89180, 19))),
        (s.czech = () => t.e(1514).then(t.t.bind(t, 21514, 19))),
        (s.danish = () => t.e(3217).then(t.t.bind(t, 45598, 19))),
        (s.dutch = () => t.e(5971).then(t.t.bind(t, 55971, 19))),
        (s.english = () => t.e(7217).then(t.t.bind(t, 67217, 19))),
        (s.finnish = () => t.e(7686).then(t.t.bind(t, 27686, 19))),
        (s.french = () => t.e(7623).then(t.t.bind(t, 7623, 19))),
        (s.german = () => t.e(7757).then(t.t.bind(t, 97757, 19))),
        (s.greek = () => t.e(6345).then(t.t.bind(t, 46345, 19))),
        (s.hungarian = () => t.e(5600).then(t.t.bind(t, 5600, 19))),
        (s.indonesian = () => t.e(1163).then(t.t.bind(t, 51163, 19))),
        (s.italian = () => t.e(1913).then(t.t.bind(t, 71913, 19))),
        (s.japanese = () => t.e(9872).then(t.t.bind(t, 79872, 19))),
        (s.koreana = () => t.e(2322).then(t.t.bind(t, 12322, 19))),
        (s.latam = () => t.e(4954).then(t.t.bind(t, 94954, 19))),
        (s.norwegian = () => t.e(8341).then(t.t.bind(t, 48341, 19))),
        (s.polish = () => t.e(7890).then(t.t.bind(t, 97890, 19))),
        (s.portuguese = () => t.e(1810).then(t.t.bind(t, 21810, 19))),
        (s.romanian = () => t.e(5500).then(t.t.bind(t, 75500, 19))),
        (s.russian = () => t.e(2268).then(t.t.bind(t, 72268, 19))),
        (s.schinese = () => t.e(5951).then(t.t.bind(t, 85951, 19))),
        (s.spanish = () => t.e(8265).then(t.t.bind(t, 28265, 19))),
        (s.swedish = () => t.e(2248).then(t.t.bind(t, 82248, 19))),
        (s.tchinese = () => t.e(2020).then(t.t.bind(t, 62020, 19))),
        (s.thai = () => t.e(7841).then(t.t.bind(t, 67841, 19))),
        (s.turkish = () => t.e(4921).then(t.t.bind(t, 94921, 19))),
        (s.ukrainian = () => t.e(1667).then(t.t.bind(t, 11667, 19))),
        (s.vietnamese = () => t.e(4528).then(t.t.bind(t, 74528, 19)));
      const o = (0, i.l)(async function (e) {
        if (s[e]) return s[e]();
      });
    },
    62381: (e, n, t) => {
      "use strict";
      t.d(n, { W: () => c });
      var i = t(37085),
        s = t(30470);
      let o = { success: !0, result: i.R };
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
            let i = this.m_iCallSeq++;
            this.BSendMsg(e, i)
              ? this.m_mapWaitingCallbacks.set(i, {
                  iSeq: i,
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
            universe: s.TS.EUNIVERSE,
            accountid: s.iA.accountid,
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
                    t.success == i.R
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
        FailureResult(e = i.zi) {
          let n = { success: !1, result: e };
          return (
            this.m_connection &&
              !this.m_connection.browser_supported &&
              (n.browser_unsupported = !0),
            this.m_connection &&
              !this.m_connection.connected_to_client &&
              (n.connect_failed = !0),
            e == i.Vr && (n.call_unsupported = !0),
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
            let t = n.result == i.R;
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
            !s.iA.logged_in ||
            s.iA.accountid == this.m_connection.ClientInfo.unAccountID
          );
        }
        GenericEResultCall(e, n = !1) {
          return this.m_connection
            .Connect()
            .then(() =>
              n && !this.BClientAccountMatches()
                ? { success: !1, result: i.$A, account_mismatch: !0 }
                : this.m_connection
                    .SendMsgAndAwaitResponse(e)
                    .then((e) =>
                      e.success === i.R ? o : this.FailureResult(e.success),
                    ),
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = c;
    },
    51706: (e, n, t) => {
      "use strict";
      t.d(n, {
        mt: () => l,
        o0: () => h.o0,
        eV: () => u.eV,
        KG: () => h.KG,
        Ee: () => h.Ee,
        x_: () => c.x_,
        of: () => d,
        pY: () => h.pY,
        EN: () => r.E,
      });
      var i = t(7850),
        s = t(90626),
        o = t(56283),
        r = t(21869),
        c = t(2654);
      t(72739),
        t(48902),
        t(60155),
        t(25118),
        t(84933),
        t(52745),
        t(13871),
        t(78327),
        t(28460);
      function a(e) {
        const { labelledBy: n } = e || {},
          [t, i] = s.useState(void 0);
        return {
          headerId: n || t,
          context: s.useMemo(() => ({ setHeaderId: i }), []),
        };
      }
      function l(e) {
        const {
            active: n,
            onDismiss: t,
            className: s,
            modalClassName: l,
            children: d,
            ...h
          } = e,
          { headerId: u, context: p } = a({ labelledBy: e["aria-labelledby"] });
        return (0, i.jsx)(o.t6.Provider, {
          value: p,
          children: (0, i.jsx)(r.E, {
            active: n,
            children: (0, i.jsx)(c.x_, {
              onEscKeypress: t,
              className: l,
              children: (0, i.jsx)(o.UC, {
                role: "dialog",
                "aria-labelledby": u,
                className: s,
                ...h,
                children: d,
              }),
            }),
          }),
        });
      }
      function d(e) {
        const { className: n, children: t } = e;
        return (0, i.jsx)(r.E, {
          active: !0,
          children: (0, i.jsx)("div", { className: n, children: t }),
        });
      }
      t(81194);
      var h = t(78395),
        u = t(10411);
      t(76222);
    },
    71009: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          OpenInDesktopClient: () => p,
          default: () => _,
          useOpenWebInSteamClient: () => m,
        });
      var i = t(7850),
        s = t(37085),
        o = t(90626),
        r = t(30470),
        c = t(84811),
        a = t(62381),
        l = t(97824),
        d = t(78327),
        h = t(2627),
        u = t(61859);
      const p = (0, c.Nr)(function (e) {
        const { fnOpenInSteamClient: n } = m();
        return (0, i.jsx)("div", {
          className: l.OpenInBannerContainer,
          children: (0, i.jsxs)("div", {
            className: l.OpenInBannerContent,
            children: [
              (0, i.jsx)("div", {
                className: l.BannerButtonContainer,
                children: (0, i.jsx)("div", {
                  onClick: n,
                  className: l.BannerButton,
                  children: (0, u.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, i.jsx)("div", {
                className: l.BannerMessage,
                children: (0, i.jsxs)("div", {
                  className: l.BannerTitle,
                  children: [
                    (0, i.jsx)("b", {
                      children: (0, u.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, u.we)("#OpenInDesktopAppBanner_Body"),
                  ],
                }),
              }),
            ],
          }),
        });
      });
      function m() {
        const [e, n] = o.useState(s._9);
        o.useEffect(() => {
          r.TS.IN_CLIENT ||
            r.TS.IN_MOBILE ||
            r.TS.IN_MOBILE_WEBVIEW ||
            a.W.BClientConnectedAndSupportsMessage("OpenSteamURL").then((e) => {
              n(e ? s.R : s.zi);
            });
        }, []);
        const t = o.useCallback(() => {
          let n = `${(0, d.yl)()}//openurl/`;
          const t = (0, h.VY)("browserid");
          if (t) {
            const e = new URL(window.location.href),
              i = new URLSearchParams(e.search);
            i.set("utm_bid", t),
              (n += e.origin + e.pathname + "?" + i.toString() + e.hash);
          } else n += window.location.href;
          e == s.R ? a.W.OpenSteamURL(n) : (window.location.href = n);
        }, [e]);
        return { eClientConnectedState: e, fnOpenInSteamClient: t };
      }
      const _ = p;
    },
    26240: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { OpenInDesktopOrSignIn: () => k, default: () => w });
      var i = t(7850),
        s = t(53965),
        o = t(83392),
        r = t(20187),
        c = t(28491),
        a = t(37085),
        l = t(62151),
        d = t(84547),
        h = t(55672),
        u = t(84811),
        p = t(51706),
        m = t(71009),
        _ = t(32754),
        C = t(61859),
        b = t(84933),
        g = t(30470),
        S = t(11131),
        f = t.n(S),
        I = t(90626),
        O = t(92724);
      const k = (0, u.Nr)(function (e) {
          const { fnOpenInSteamClient: n, eClientConnectedState: t } = (0,
            m.useOpenWebInSteamClient)(),
            u = t == a.R,
            [S, k, w] = (0, b.uD)();
          return (
            (0, I.use)((0, O.u)()),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(_.Gq, {
                  toolTipContent: h.Z.Localize("#AddToWishlist_ttip"),
                  children: (0, i.jsx)(s.$, {
                    onClick: k,
                    children: (0, C.we)("#AddToYourWishlist"),
                  }),
                }),
                (0, i.jsx)(p.EN, {
                  active: S,
                  children: (0, i.jsxs)(p.o0, {
                    strTitle: (0, C.we)("#OpenInDesktopAppBanner_NotSignedIn"),
                    className: f().WishlistModalOverride,
                    strDescription: l.F5.Localize("#Wishlist_NotSignedIn"),
                    closeModal: w,
                    bAlertDialog: !0,
                    children: [
                      (0, i.jsxs)(o.s, {
                        direction: "row",
                        gap: "4",
                        paddingTop: "4",
                        paddingBottom: "4",
                        children: [
                          (0, i.jsx)(s.$, {
                            onClick: n,
                            children: (0, C.we)(
                              "#OpenInDesktopAppBanner_OpenAppButton",
                            ),
                          }),
                          (0, i.jsx)(s.$, {
                            color: "dull",
                            onClick: d.l,
                            children: h.Z.Localize("#Login_SignIn"),
                          }),
                        ],
                      }),
                      !u &&
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(r.EY, {
                            children: (0, C.oW)(
                              "#GotSteam_NeedSteam",
                              (0, i.jsx)(c.Y, {
                                href: `${g.TS.STORE_BASE_URL}about`,
                              }),
                            ),
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            })
          );
        }),
        w = k;
    },
  },
]);
