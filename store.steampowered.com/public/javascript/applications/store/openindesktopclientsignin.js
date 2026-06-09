/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1349, 8843],
  {
    69041: (e) => {
      e.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-default": "RttCMpsTJp47IkzXpZYvA",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    73406: (e) => {
      e.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    44041: (e) => {
      e.exports = { Box: "_2YzOLNBx6TonKU0Zmp20l4" };
    },
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
    91239: (e) => {
      e.exports = { Reset: "_3A_c3YHYd4YIjA8Y-olnPl" };
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
    53965: (e, n, t) => {
      "use strict";
      t.d(n, { $: () => g, v: () => x });
      var i = t(7850),
        s = t(64238),
        o = t.n(s),
        r = t(69041),
        a = t(75659),
        c = t(11526),
        l = t(11820),
        d = t(73406),
        h = t(90534),
        p = t(83392);
      function u(e) {
        const {
          size: n = "3",
          loading: t = !0,
          children: s,
          color: o,
          variant: r,
          ...a
        } = e;
        return s || !t
          ? (0, i.jsxs)(h.az, {
              position: "relative",
              ...a,
              width: "fit-content",
              children: [
                (0, i.jsx)("div", {
                  "data-visibility": !t,
                  className: d.ChildContainer,
                  children: s,
                }),
                t &&
                  (0, i.jsx)(p.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)(m, { size: n, color: o, variant: r }),
                  }),
              ],
            })
          : (0, i.jsx)(m, { size: n, color: o, variant: r, ...a });
      }
      function m(e) {
        const { className: n, color: t, ...s } = (0, c.mz)(e, _);
        return (0, i.jsx)("div", {
          "data-accent-color": t,
          className: o()(n, d.Spinner),
          ...s,
        });
      }
      const _ = [
        ...a.L,
        { prop: "size", responsive: !0, className: (e) => d[`Size-${e}`] },
        { prop: "variant", className: (e) => d[`Variant-${e}`] },
      ];
      var b = t(45699),
        S = t(8527);
      function C(e) {
        e.preventDefault();
      }
      const f = [
          ...a.L,
          { prop: "size", responsive: !0, className: (e) => r[`Size-${e}`] },
          { prop: "variant", className: (e) => r[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: r.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: r.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        g = function (e) {
          const {
              variant: n = "default",
              size: t = "2",
              minWidth: s = "fit-content",
              color: a,
              loading: l,
              children: d,
              onClick: h,
              icon: p,
              focusable: m,
              navProps: _,
              ...C
            } = e,
            g = l
              ? (0, i.jsx)(u, {
                  size: t,
                  color: a,
                  variant: "bright",
                  children: d,
                })
              : d,
            x = l ? void 0 : h,
            v = m ?? _?.focusable ?? !!x,
            I = {
              type: "button",
              ...(0, c.mz)(
                {
                  ...C,
                  variant: n,
                  size: t,
                  minWidth: s,
                  color: a,
                  className: o()(r.Button, p && r.Icon),
                  onClick: x,
                },
                f,
              ),
              children: g,
            };
          return S.TS.IN_GAMEPADUI && (v || _)
            ? (0, i.jsx)(b.fu, { ...I, ...(_ || {}), focusable: v })
            : (0, i.jsx)("button", { ...I });
        },
        x = function (e) {
          const {
              variant: n = "default",
              size: t = "2",
              minWidth: s = "fit-content",
              disabled: a,
              icon: d,
              focusable: h,
              navProps: p,
              ...u
            } = e,
            m = a ? C : void 0,
            _ = (0, c.mz)(
              {
                onClick: m,
                ...u,
                variant: n,
                size: t,
                minWidth: s,
                className: o()(r.Button, d && r.Icon, (0, l.T)()),
              },
              f,
            );
          return S.TS.IN_GAMEPADUI && (h || p)
            ? (0, i.jsx)(b.Ii, { ..._, ...(p || {}), focusable: h })
            : (0, i.jsx)("a", { ..._ });
        };
    },
    90534: (e, n, t) => {
      "use strict";
      t.d(n, { az: () => h });
      var i = t(7850),
        s = t(44041),
        o = t(39479),
        r = t(64238),
        a = t.n(r),
        c = t(11526),
        l = t(75659),
        d = t(8527);
      function h(e) {
        const { as: n = "div", focusable: t, navProps: r, ref: l, ...h } = e,
          u = (0, c.mz)({ ...h, className: a()(s.Box, e.className) }, p),
          m = t ?? r?.focusable ?? !!h.onClick,
          _ = (0, i.jsx)(n, { ref: l, ...u });
        return d.TS.IN_GAMEPADUI && (m || r)
          ? (0, i.jsx)(o.J, { ...(r || {}), focusable: m, children: _ })
          : _;
      }
      const p = l.h;
    },
    20187: (e, n, t) => {
      "use strict";
      t.d(n, { Ae: () => p, EY: () => d, U6: () => h });
      var i = t(7850),
        s = t(55348),
        o = t(11526),
        r = t(75659),
        a = t(64238),
        c = t.n(a),
        l = t(65274);
      function d(e) {
        const { as: n = "span", ref: t, className: s, ...r } = e,
          a = n;
        return (0, i.jsx)(a, {
          ref: t,
          ...(0, o.mz)({ ...r, className: c()(l.Text, s) }, p),
        });
      }
      const h = [
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
        p = [
          ...h,
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
        a = t(8527),
        c = t(45699);
      function l(e) {
        const { underline: n = "auto", focusable: t, navProps: o, ...l } = e,
          h = t ?? o?.focusable ?? !!l.href,
          p = (0, r.mz)({ ...l, underline: n, className: s.TextLink }, d);
        return a.TS.IN_GAMEPADUI && (h || o)
          ? (0, i.jsx)(c.Ii, { ...p, ...(o || {}), focusable: h })
          : (0, i.jsx)("a", { ...p });
      }
      const d = [
        ...o.Ae,
        { prop: "underline", className: (e) => s[`Underline-${e}`] },
      ];
    },
    11820: (e, n, t) => {
      "use strict";
      t.d(n, { T: () => s });
      var i = t(91239);
      function s() {
        return i.Reset;
      }
    },
    84547: (e, n, t) => {
      "use strict";
      t.d(n, { E: () => h, l: () => p });
      var i = t(7850),
        s = t(64753),
        o = t(8527),
        r = t(55672),
        a = t(78395),
        c = t(21869),
        l = t(62151);
      function d(e) {
        const { closeModal: n } = e;
        return (0, i.jsx)(a.o0, {
          strTitle: l.F5.Localize("#LoginRedirect_Dialog_Title"),
          strDescription: l.F5.Localize("#LoginRedirect_Dialog_Description"),
          onCancel: n,
          strOKButtonText: r.Z.Localize("#Button_OK"),
          onOK: () => {
            p(), n();
          },
        });
      }
      function h() {
        const [e, n, t] = (0, s.uD)();
        return {
          elDialogElement: (0, i.jsx)(c.E, {
            active: e,
            children: (0, i.jsx)(d, { closeModal: t }),
          }),
          fnShowLogonDialog: n,
        };
      }
      function p() {
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
        (s.malay = () => t.e(4753).then(t.t.bind(t, 87134, 19))),
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
      t.d(n, { W: () => a });
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
      let a = new (class {
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
      window.ClientConnectionAPI = a;
    },
    51706: (e, n, t) => {
      "use strict";
      t.d(n, {
        mt: () => l,
        o0: () => h.o0,
        eV: () => p.eV,
        KG: () => h.KG,
        Ee: () => h.Ee,
        x_: () => a.x_,
        of: () => d,
        pY: () => h.pY,
        EN: () => r.E,
      });
      var i = t(7850),
        s = t(90626),
        o = t(56283),
        r = t(21869),
        a = t(2654);
      t(72739),
        t(48902),
        t(60155),
        t(25118),
        t(84933),
        t(52745),
        t(13871),
        t(78327),
        t(28460);
      function c(e) {
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
          { headerId: p, context: u } = c({ labelledBy: e["aria-labelledby"] });
        return (0, i.jsx)(o.t6.Provider, {
          value: u,
          children: (0, i.jsx)(r.E, {
            active: n,
            children: (0, i.jsx)(a.x_, {
              onEscKeypress: t,
              className: l,
              children: (0, i.jsx)(o.UC, {
                role: "dialog",
                "aria-labelledby": p,
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
        p = t(10411);
      t(76222);
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
        a = t(84811),
        c = t(62381),
        l = t(97824),
        d = t(78327),
        h = t(2627),
        p = t(61859);
      const u = (0, a.Nr)(function (e) {
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
                  children: (0, p.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, i.jsx)("div", {
                className: l.BannerMessage,
                children: (0, i.jsxs)("div", {
                  className: l.BannerTitle,
                  children: [
                    (0, i.jsx)("b", {
                      children: (0, p.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, p.we)("#OpenInDesktopAppBanner_Body"),
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
            c.W.BClientConnectedAndSupportsMessage("OpenSteamURL").then((e) => {
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
          e == s.R ? c.W.OpenSteamURL(n) : (window.location.href = n);
        }, [e]);
        return { eClientConnectedState: e, fnOpenInSteamClient: t };
      }
      const _ = u;
    },
    26240: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { OpenInDesktopOrSignIn: () => I, default: () => z });
      var i = t(7850),
        s = t(53965),
        o = t(83392),
        r = t(20187),
        a = t(28491),
        c = t(37085),
        l = t(62151),
        d = t(84547),
        h = t(55672),
        p = t(84811),
        u = t(51706),
        m = t(71009),
        _ = t(32754),
        b = t(61859),
        S = t(84933),
        C = t(30470),
        f = t(11131),
        g = t.n(f),
        x = t(90626),
        v = t(92724);
      const I = (0, p.Nr)(function (e) {
          const { fnOpenInSteamClient: n, eClientConnectedState: t } = (0,
            m.useOpenWebInSteamClient)(),
            p = t == c.R,
            [f, I, z] = (0, S.uD)();
          return (
            (0, x.use)((0, v.u)()),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(_.Gq, {
                  toolTipContent: h.Z.Localize("#AddToWishlist_ttip"),
                  children: (0, i.jsx)(s.$, {
                    onClick: I,
                    children: (0, b.we)("#AddToYourWishlist"),
                  }),
                }),
                (0, i.jsx)(u.EN, {
                  active: f,
                  children: (0, i.jsxs)(u.o0, {
                    strTitle: (0, b.we)("#OpenInDesktopAppBanner_NotSignedIn"),
                    className: g().WishlistModalOverride,
                    strDescription: l.F5.Localize("#Wishlist_NotSignedIn"),
                    closeModal: z,
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
                            children: (0, b.we)(
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
                      !p &&
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(r.EY, {
                            children: (0, b.oW)(
                              "#GotSteam_NeedSteam",
                              (0, i.jsx)(a.Y, {
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
        z = I;
    },
  },
]);
