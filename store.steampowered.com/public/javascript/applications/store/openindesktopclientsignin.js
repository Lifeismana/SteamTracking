/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [21349, 38843],
  {
    65274: (e) => {
      e.exports = {
        Text: "f6hU22EA7Z8peFWZVBJU",
        Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
        "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
        "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
        "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
        "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
        "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
        "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
        "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
        "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
        "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
        TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
        TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
        LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
        WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
      };
    },
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
    20187: (e, n, t) => {
      "use strict";
      t.d(n, { Ae: () => h, EY: () => d, U6: () => p });
      var i = t(7850),
        s = t(55348),
        o = t(11526),
        r = t(75659),
        c = t(64238),
        a = t.n(c),
        l = t(65274);
      function d(e) {
        const { as: n = "span", ref: t, className: s, ...r } = e,
          c = n;
        return (0, i.jsx)(c, {
          ref: t,
          ...(0, o.mz)({ ...r, className: a()(l.Text, s) }, h),
        });
      }
      const p = [
          {
            prop: "weight",
            responsive: !0,
            className: l.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: l.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, n, t) => [
              "--text-color",
              (0, o.To)(e, (0, s.I)(n.contrast, t) ?? "body"),
            ],
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, n, t) => [
              "--text-color",
              (0, o.To)((0, s.I)(n.color, t) ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: l.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: l.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: l.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        h = [
          ...p,
          ...r.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => l[`TextSize-${e}`],
          },
        ];
    },
    28491: (e, n, t) => {
      "use strict";
      t.d(n, { Y: () => l });
      var i = t(7850),
        s = t(50122),
        o = t(20187),
        r = t(11526),
        c = t(8527),
        a = t(45699);
      function l(e) {
        const { underline: n = "auto", focusable: t, navProps: o, ...l } = e,
          p = t ?? o?.focusable ?? !!l.href,
          h = (0, r.mz)({ ...l, underline: n, className: s.TextLink }, d);
        return c.TS.IN_GAMEPADUI && (p || o)
          ? (0, i.jsx)(a.Ii, { ...h, ...(o || {}), focusable: p })
          : (0, i.jsx)("a", { ...h });
      }
      const d = [
        ...o.Ae,
        { prop: "underline", className: (e) => s[`Underline-${e}`] },
      ];
    },
    84547: (e, n, t) => {
      "use strict";
      t.d(n, { lS: () => h, lh: () => u, vU: () => m });
      var i = t(7850),
        s = t(64753),
        o = t(8527),
        r = t(78686),
        c = t(78395),
        a = t(21869),
        l = t(67936),
        d = t(53965);
      function p(e) {
        const { closeModal: n, strDescOverride: t } = e;
        return (0, i.jsx)(c.o0, {
          strTitle: l.F5.Localize("#LoginRedirect_Dialog_Title"),
          strDescription:
            t || l.F5.Localize("#LoginRedirect_Dialog_Description"),
          onCancel: n,
          strOKButtonText: r.Z.Localize("#Button_OK"),
          onOK: () => {
            u(), n();
          },
        });
      }
      function h(e) {
        const [n, t, o] = (0, s.uD)();
        return {
          elDialogElement: (0, i.jsx)(a.E, {
            active: n,
            children: (0, i.jsx)(p, { closeModal: o, strDescOverride: e }),
          }),
          fnShowLogonDialog: t,
        };
      }
      function u() {
        const e = `${o.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        window.location.href = e;
      }
      function m(e) {
        const { label: n, strDialogDesc: t } = e,
          { elDialogElement: s, fnShowLogonDialog: o } = h(t);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.$, {
              onClick: o,
              children: n || r.Z.Localize("#Login_SignIn"),
            }),
            s,
          ],
        });
      }
    },
    67936: (e, n, t) => {
      "use strict";
      t.d(n, { F5: () => o });
      var i = t(13843);
      const s = {};
      (s.arabic = () => t.e(22940).then(t.t.bind(t, 22940, 19))),
        (s.brazilian = () => t.e(59990).then(t.t.bind(t, 59990, 19))),
        (s.bulgarian = () => t.e(38573).then(t.t.bind(t, 38573, 19))),
        (s.czech = () => t.e(40975).then(t.t.bind(t, 40975, 19))),
        (s.danish = () => t.e(38721).then(t.t.bind(t, 38721, 19))),
        (s.dutch = () => t.e(354).then(t.t.bind(t, 354, 19))),
        (s.english = () => t.e(49768).then(t.t.bind(t, 49768, 19))),
        (s.finnish = () => t.e(12931).then(t.t.bind(t, 12931, 19))),
        (s.french = () => t.e(6064).then(t.t.bind(t, 6064, 19))),
        (s.german = () => t.e(62942).then(t.t.bind(t, 62942, 19))),
        (s.greek = () => t.e(13924).then(t.t.bind(t, 13924, 19))),
        (s.hungarian = () => t.e(99441).then(t.t.bind(t, 99441, 19))),
        (s.indonesian = () => t.e(42584).then(t.t.bind(t, 42584, 19))),
        (s.italian = () => t.e(97688).then(t.t.bind(t, 97688, 19))),
        (s.japanese = () => t.e(5407).then(t.t.bind(t, 5407, 19))),
        (s.koreana = () => t.e(65815).then(t.t.bind(t, 65815, 19))),
        (s.latam = () => t.e(44287).then(t.t.bind(t, 44287, 19))),
        (s.malay = () => t.e(58160).then(t.t.bind(t, 35779, 19))),
        (s.norwegian = () => t.e(33648).then(t.t.bind(t, 33648, 19))),
        (s.polish = () => t.e(22649).then(t.t.bind(t, 22649, 19))),
        (s.portuguese = () => t.e(23629).then(t.t.bind(t, 23629, 19))),
        (s.romanian = () => t.e(81555).then(t.t.bind(t, 81555, 19))),
        (s.russian = () => t.e(11809).then(t.t.bind(t, 11809, 19))),
        (s.schinese = () => t.e(79004).then(t.t.bind(t, 79004, 19))),
        (s.spanish = () => t.e(97760).then(t.t.bind(t, 97760, 19))),
        (s.swedish = () => t.e(86881).then(t.t.bind(t, 86881, 19))),
        (s.tchinese = () => t.e(28183).then(t.t.bind(t, 28183, 19))),
        (s.thai = () => t.e(10950).then(t.t.bind(t, 10950, 19))),
        (s.turkish = () => t.e(22568).then(t.t.bind(t, 22568, 19))),
        (s.ukrainian = () => t.e(17038).then(t.t.bind(t, 17038, 19))),
        (s.vietnamese = () => t.e(62327).then(t.t.bind(t, 62327, 19)));
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
    74568: (e, n, t) => {
      "use strict";
      t.d(n, {
        mt: () => l,
        o0: () => p.o0,
        eV: () => h.eV,
        KG: () => p.KG,
        Ee: () => p.Ee,
        x_: () => c.x_,
        of: () => d,
        pY: () => p.pY,
        EN: () => r.E,
      });
      var i = t(7850),
        s = t(90626),
        o = t(56283),
        r = t(21869),
        c = t(2654);
      t(37049);
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
            ...p
          } = e,
          { headerId: h, context: u } = a({ labelledBy: e["aria-labelledby"] });
        return (0, i.jsx)(o.t6.Provider, {
          value: u,
          children: (0, i.jsx)(r.E, {
            active: n,
            children: (0, i.jsx)(c.x_, {
              onEscKeypress: t,
              className: l,
              children: (0, i.jsx)(o.UC, {
                role: "dialog",
                "aria-labelledby": h,
                className: s,
                ...p,
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
      var p = t(78395),
        h = t(10411);
      t(76222);
    },
    37049: (e, n, t) => {
      "use strict";
      t.d(n, { w: () => C });
      var i = t(7850),
        s = t(90626),
        o = t(72739),
        r = t(48902),
        c = t(60155),
        a = t(25118),
        l = t(84933),
        d = t(52745),
        p = t(13871),
        h = t(21869),
        u = t(78327),
        m = t(66703),
        _ = t(52038),
        g = t(28460);
      function b(e) {
        const { popup: n, className: t, ...o } = e,
          r = (0, g.GD)(n),
          c = s.useRef(null);
        return (
          s.useEffect(() => {
            const e = c.current;
            if (e && (0, m.Fj)(n, "Window.SetResizeGrip")) {
              let t = 0,
                i = 0;
              const s = e.getBoundingClientRect(),
                o = e.ownerDocument.defaultView;
              s &&
                o &&
                !r &&
                ((t = Math.ceil(o.innerWidth - s.left)),
                (i = Math.ceil(o.innerHeight - s.top))),
                n.SteamClient.Window.SetResizeGrip(t, i);
            }
            return () => {
              (0, m.Fj)(n, "Window.SetResizeGrip") &&
                n.SteamClient.Window.SetResizeGrip(0, 0);
            };
          }, [n, r]),
          r
            ? null
            : (0, i.jsx)("div", {
                className: (0, _.A)("window_resize_grip", t),
                ref: c,
                ...o,
              })
        );
      }
      const C = (e) =>
        (function (e) {
          const n = (0, p.R7)().ownerWindow,
            t = (0, u.Qn)(),
            [o, r] = s.useState(() =>
              t ||
              (!0 === e.onlyPopoutIfNeeded &&
                e.popupHeight < 0.9 * n.innerHeight &&
                e.popupWidth < 0.9 * n.innerWidth &&
                "visible" == n.document.visibilityState)
                ? "inline"
                : "popout",
            );
          return "inline" === o
            ? (0, i.jsx)(h.E, { active: !0, children: e.children })
            : "popout" === o
              ? (0, i.jsx)(S, { ...e })
              : null;
        })({ modal: !0, ...e });
      function S(e) {
        const {
            strName: n,
            strTitle: t,
            popupWidth: h,
            popupHeight: u,
            browserType: m,
            onDismiss: _,
            refPopup: g,
            children: C,
            titleBarClassName: S,
            saveDimensionsKey: x,
          } = e,
          w = (0, p.R7)(),
          I = w?.ownerWindow,
          v = (0, d.yk)(),
          O = { ...(0, r.h3)(x), onClose: _ };
        let R = 0;
        e.resizable && (R |= p.Wf.Resizable),
          (e.minWidth || e.minHeight) &&
            (R |= p.Wf.ApplyBrowserScaleToDimensions),
          e.fullscreen && (R |= p.Wf.FullScreen);
        const k = "PopupWindow_" + (n ? `${n}_` : "") + s.useId(),
          { popup: B, element: W } = (0, r.OJ)(
            k,
            {
              title: t,
              dimensions: { width: h, height: u },
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              popup_class: "fullheight",
              browserType: m,
              minWidth: e.minWidth,
              minHeight: e.minHeight,
              replace_existing_popup: !0,
              center_on_window: v?.BCenterPopupsOnWindow() ? I : void 0,
              eCreationFlags: R,
              target_browser: v?.GetBrowserInfo(),
            },
            O,
          );
        if (
          (s.useEffect(
            () => ((0, l.cZ)(g, B), () => (0, l.cZ)(g, void 0)),
            [g, B],
          ),
          s.useEffect(() => {
            B && (B.document.title = t ?? n);
          }, [B, t, n]),
          !W)
        )
          return null;
        const j = e.modal ?? e.onlyPopoutIfNeeded,
          E = !e.resizable;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            j && (0, i.jsx)(f, { popup: B }),
            o.createPortal(
              (0, i.jsxs)(p.kc, {
                ownerWindow: B,
                children: [
                  (0, i.jsxs)("div", {
                    className: "PopupFullWindow",
                    onContextMenu: c.aE,
                    children: [
                      (0, i.jsx)(a.c, {
                        className: S,
                        hideMin: E,
                        hideMax: E,
                        popup: B,
                        hideActions: !_,
                      }),
                      (0, i.jsx)(d.EO, {
                        bCenterPopupsOnWindow: v?.BCenterPopupsOnWindow(),
                        browserInfo: v?.GetBrowserInfo(),
                        children: C,
                      }),
                    ],
                  }),
                  e.resizable && (0, i.jsx)(b, { popup: B }),
                ],
              }),
              W,
            ),
          ],
        });
      }
      function f(e) {
        const { popup: n } = e,
          t = s.useCallback(() => {
            n?.SteamClient.Window.BringToFront();
          }, [n]);
        return (
          s.useEffect(t, [t]),
          (0, i.jsx)(h.E, {
            active: !0,
            children: (0, i.jsx)("div", {
              style: {
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              },
              onClick: t,
            }),
          })
        );
      }
    },
    71009: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          OpenInDesktopClient: () => u,
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
        p = t(2627),
        h = t(61859);
      const u = (0, c.Nr)(function (e) {
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
                  children: (0, h.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, i.jsx)("div", {
                className: l.BannerMessage,
                children: (0, i.jsxs)("div", {
                  className: l.BannerTitle,
                  children: [
                    (0, i.jsx)("b", {
                      children: (0, h.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, h.we)("#OpenInDesktopAppBanner_Body"),
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
          const t = (0, p.VY)("browserid");
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
      const _ = u;
    },
    26240: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { OpenInDesktopOrSignIn: () => I, default: () => v });
      var i = t(7850),
        s = t(53965),
        o = t(83392),
        r = t(20187),
        c = t(28491),
        a = t(37085),
        l = t(67936),
        d = t(84547),
        p = t(78686),
        h = t(84811),
        u = t(74568),
        m = t(71009),
        _ = t(32754),
        g = t(61859),
        b = t(84933),
        C = t(30470),
        S = t(11131),
        f = t.n(S),
        x = t(90626),
        w = t(92724);
      const I = (0, h.Nr)(function (e) {
          const { fnOpenInSteamClient: n, eClientConnectedState: t } = (0,
            m.useOpenWebInSteamClient)(),
            h = t == a.R,
            [S, I, v] = (0, b.uD)();
          return (
            (0, x.use)((0, w.u)()),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(_.Gq, {
                  toolTipContent: p.Z.Localize("#AddToWishlist_ttip"),
                  children: (0, i.jsx)(s.$, {
                    onClick: I,
                    children: (0, g.we)("#AddToYourWishlist"),
                  }),
                }),
                (0, i.jsx)(u.EN, {
                  active: S,
                  children: (0, i.jsxs)(u.o0, {
                    strTitle: (0, g.we)("#OpenInDesktopAppBanner_NotSignedIn"),
                    className: f().WishlistModalOverride,
                    strDescription: l.F5.Localize("#Wishlist_NotSignedIn"),
                    closeModal: v,
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
                            children: (0, g.we)(
                              "#OpenInDesktopAppBanner_OpenAppButton",
                            ),
                          }),
                          (0, i.jsx)(s.$, {
                            color: "dull",
                            onClick: d.lh,
                            children: p.Z.Localize("#Login_SignIn"),
                          }),
                        ],
                      }),
                      !h &&
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(r.EY, {
                            children: (0, g.oW)(
                              "#GotSteam_NeedSteam",
                              (0, i.jsx)(c.Y, {
                                href: `${C.TS.STORE_BASE_URL}about`,
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
        v = I;
    },
  },
]);
