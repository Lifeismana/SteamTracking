"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [7653],
  {
    31711: (t, e, a) => {
      a.r(e), a.d(e, { default: () => X });
      var o = a(34629),
        s = a(62540),
        n = a(63696),
        r = a(32424),
        i = a(58490),
        c = a(50376),
        l = a(13869),
        d = a(64608),
        h = a(46108),
        m = a(69649),
        p = a(51115),
        u = a(53414),
        g = a(98829);
      const C = ({ group: t, onClick: e }) => {
        const a = t.watching_broadcast_steamid;
        return (0, s.jsx)("button", {
          className:
            "ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
          onClick: e,
          children: (0, s.jsxs)("div", {
            className: "ChatRoomListGroupItem_header",
            children: [
              (0, s.jsx)(u.I, { group: t, small: !0 }),
              (0, s.jsxs)("div", {
                className: "groupNameStatusContainer",
                children: [
                  (0, s.jsx)("div", {
                    className: "chatRoomName",
                    children: t.name,
                  }),
                  a &&
                    (0, s.jsx)("div", {
                      className: "chatRoomDetails",
                      children: (0, h.we)(
                        "#Broadcast_WatchParty_Viewers_NoneActive",
                      ),
                    }),
                ],
              }),
            ],
          }),
        });
      };
      class S extends n.Component {
        CreateWatchParty(t = !1) {
          const {
            browserContext: e,
            ownerWindow: a,
            broadcastAccountId: o,
            initialFriend: n,
          } = this.props;
          this.Close();
          const i = t && n ? [n.accountid] : [];
          !(function (t, e, a, o) {
            (0, l.HT)(
              (0, s.jsx)(m.zw, {
                browserContext: t,
                bHideChatNameEntry: !1,
                vecInvitePlayers: o,
                chatViewToReplace: void 0,
                creationOptions: { unBroadcastAccountId: a },
                strTitle: (0, h.we)("#Broadcast_CreateWatchParty"),
              }),
              e,
              "CreateChatDialog",
              {
                strTitle: (0, h.we)("#Broadcast_CreateWatchParty"),
                popupWidth: 450,
                popupHeight: 600,
              },
              (0, r.h8)(e),
            );
          })(e, a || window, o, i);
        }
        WatchAlone() {
          this.Close();
        }
        UpgradeExisting(t) {
          const {
            broadcastAccountId: e,
            browserContext: a,
            broadcastChannelID: o,
            broadcastTabId: s,
          } = this.props;
          this.Close(),
            o
              ? t.SetChatRoomGroupWatchingBroadcast(void 0, o)
              : t.SetChatRoomGroupWatchingBroadcast(e);
          const n = i.xm.UIStore.ShowAndOrActivateChatRoomGroup(a, t, !0);
          s && i.xm.UIStore.CloseTabByID(s),
            this.props.bIsNewSteamTVDialog || n.ShowBroadcast();
        }
        Close() {
          const { closeModal: t } = this.props;
          t && t();
        }
        render() {
          const { closeModal: t, initialFriend: e } = this.props,
            a = i.xm.ChatStore.currentChatRoomGroups.filter((t) =>
              t.BCanIAssociateBroadcast(),
            ),
            o = e;
          return (0, s.jsx)("div", {
            className: "chatModalCover",
            children: (0, s.jsx)(l.x_, {
              onEscKeypress: t,
              children: (0, s.jsxs)(d.UC, {
                className: "watchPartyDialog",
                children: [
                  (0, s.jsxs)(d.nB, {
                    children: [
                      (0, s.jsx)("div", {
                        className: "watchPartyPrompt",
                        children: (0, h.we)("#Broadcast_WatchPrompt"),
                      }),
                      (0, s.jsxs)(d.xz, {
                        children: [
                          !this.props.bIsNewSteamTVDialog &&
                            (0, s.jsx)(d.$n, {
                              svgicon: c.Gv$,
                              className: "watchHowButton",
                              onClick: this.WatchAlone,
                              children: (0, h.we)("#Broadcast_WatchAlone"),
                            }),
                          o &&
                            (0, s.jsxs)(d.$n, {
                              className: "watchHowButton",
                              onClick: () => this.CreateWatchParty(!0),
                              children: [
                                (0, s.jsx)(g.gv, {
                                  friend: o,
                                  context: null,
                                  bLarge: !1,
                                }),
                                (0, h.PP)(
                                  "#Broadcast_WatchWith",
                                  (0, s.jsxs)("span", {
                                    className: "highlight",
                                    children: [" ", o.display_name],
                                  }),
                                ),
                              ],
                            }),
                          0 !== a.length &&
                            (0, s.jsxs)(n.Fragment, {
                              children: [
                                (0, s.jsx)(d.JU, {
                                  children: (0, h.we)(
                                    "#Broadcast_WatchWithExistingWatchParty",
                                  ),
                                }),
                                a.map((t) =>
                                  (0, s.jsx)(
                                    C,
                                    {
                                      group: t,
                                      onClick: () => this.UpgradeExisting(t),
                                    },
                                    t.unique_id,
                                  ),
                                ),
                              ],
                            }),
                          (0, s.jsx)(d.$n, {
                            className: "watchHowButton newWatchGroup",
                            svgicon: c.u9R,
                            onClick: () => this.CreateWatchParty(!1),
                            children: (0, h.we)(
                              "#Broadcast_LinkBroadcastToGroup_New",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(d.wi, {}),
                ],
              }),
            }),
          });
        }
      }
      (0, o.Cg)([p.oI], S.prototype, "WatchAlone", null),
        (0, o.Cg)([p.oI], S.prototype, "Close", null);
      var x = a(89193),
        I = a(41230),
        b = a(7470),
        f = a(56654),
        _ = a(89454),
        w = a.n(_),
        B = a(21866),
        v = a(72993),
        T = a(46382),
        j = a(73870),
        L = a(17385),
        D = a(31222),
        W = a(23024),
        y = a(27337),
        M = a(49412),
        N = a(21371),
        P = a(72476),
        R = a(91435);
      class A {
        constructor() {
          (0, x.Gn)(this);
        }
        m_fnLaunchChat;
        m_iTimeoutLogin = void 0;
        m_eLogonState = 0;
        m_steamID = void 0;
        m_reactRoot;
        Init(t) {
          (this.m_fnLaunchChat = t),
            (this.m_steamID = P.GP.steamid),
            window.addEventListener("message", this.HandlePostMessage),
            (this.m_reactRoot = b.createRoot(
              document.getElementById("friendslist-container"),
            )),
            this.m_reactRoot.render(n.createElement(E, { app: this })),
            (this.m_iTimeoutLogin = window.setTimeout(() => {
              0 == this.m_eLogonState && (this.m_eLogonState = 1);
            }, 2500));
        }
        LaunchChat() {
          this.m_reactRoot.unmount(),
            window.removeEventListener("message", this.HandlePostMessage),
            window.clearTimeout(this.m_iTimeoutLogin),
            (0, r.xT)(P.GP.steamid),
            this.m_fnLaunchChat();
        }
        GetLoginURL() {
          return `${P.TS.STORE_BASE_URL}login/?steamtv`;
        }
        BIsPerformingLogonCheck() {
          return 0 == this.m_eLogonState || 1 == this.m_eLogonState;
        }
        BReadyToRender() {
          return 0 != this.m_eLogonState;
        }
        GetSteamIDWatched() {
          return this.m_steamID;
        }
        ExtractOrigin(t) {
          return t.replace(/^(https?:\/\/[^/]*).*$/, "$1");
        }
        HandlePostMessage(t) {
          if (
            t.origin != this.ExtractOrigin(P.TS.STORE_BASE_URL) &&
            t.origin != this.ExtractOrigin(P.TS.CHAT_BASE_URL)
          )
            return void console.warn(
              `Ignoring message from untrusted domain "${t.origin}"`,
            );
          let e = t.data;
          if (e)
            if ("OnLoginButtonClicked" == e.msg)
              console.log("Login button clicked"), (window.location.href = q());
            else if ("LoginNeeded" == e.command) this.m_eLogonState = 2;
            else if ("LogonComplete" == e.command)
              return void this.LaunchChat();
        }
      }
      (0, o.Cg)([x.sH], A.prototype, "m_eLogonState", void 0),
        (0, o.Cg)([x.sH], A.prototype, "m_steamID", void 0),
        (0, o.Cg)([x.XI], A.prototype, "LaunchChat", null),
        (0, o.Cg)([x.XI.bound], A.prototype, "HandlePostMessage", null);
      let E = class extends n.Component {
        m_broadcastInfo = null;
        constructor(t) {
          super(t),
            (this.m_broadcastInfo = W.BroadcastWatchStore.StartInfo(
              this.props.app.GetSteamIDWatched(),
            )),
            (this.state = { bChatCollapsed: !1, bTheaterMode: !1 });
        }
        componentWillUnmount() {
          this.m_broadcastInfo &&
            (W.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
            (this.m_broadcastInfo = null));
        }
        ToggleChat() {
          this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
        }
        ToggleTheaterMode() {
          this.setState({ bTheaterMode: !this.state.bTheaterMode });
        }
        render() {
          const t = this.props.app;
          let e = this.m_broadcastInfo,
            a = V();
          return (0, s.jsxs)(H, {
            children: [
              t.BReadyToRender() &&
                (0, s.jsxs)("div", {
                  className:
                    "StandalonePlayer" +
                    (this.state.bTheaterMode ? " TheaterMode" : ""),
                  children: [
                    (0, s.jsx)(y.y, {
                      className: "FullpageBroadcastBackdrop",
                      src: e.m_strThumbnailUrl,
                      draggable: !1,
                      duration: 2500,
                    }),
                    (0, s.jsxs)("div", {
                      className: "BroadcastTab",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "StandalonePlayerHeader",
                          children: [
                            (0, s.jsx)("div", {
                              className: "STV_Logo",
                              children: (0, s.jsx)(c.P7C, {}),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "BroadcastTab_HeaderRow" +
                                (this.state.bChatCollapsed
                                  ? " ChatCollapsed"
                                  : ""),
                              children: [
                                (0, s.jsx)(k, {
                                  onClick: () => (window.location.href = q()),
                                }),
                                (0, s.jsx)(O, {
                                  onClick: this.ToggleChat,
                                  hideIcon: this.state.bChatCollapsed,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)(F, {
                          steamID: t.GetSteamIDWatched(),
                          watchLocation: a,
                          bHideChat: this.state.bChatCollapsed,
                          onTheaterMode: this.ToggleTheaterMode,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, s.jsx)(U, { app: t }),
            ],
          });
        }
      };
      function G() {
        const t = (0, P.Fd)("loyalty_webapi_token", "application_config");
        return new D.D(P.TS.WEBAPI_BASE_URL, t);
      }
      function H(t) {
        const { children: e } = t,
          a = n.useCallback(() => i.xm?.CMInterface, []),
          o = (0, p.bs)(n.useCallback(() => new j.A(), [])),
          r = (0, p.bs)(G);
        return (0, s.jsx)(N.s, {
          children: (0, s.jsx)(P.ss, {
            children: (0, s.jsx)(R.EO, {
              children: P.iA.logged_in
                ? (0, s.jsx)(T.VQ, {
                    useActiveCMInterface: a,
                    useStorage: o,
                    children: e,
                  })
                : (0, s.jsx)(T.VQ, {
                    useActiveSteamInterface: r,
                    useStorage: o,
                    children: e,
                  }),
            }),
          }),
        });
      }
      (0, o.Cg)([p.oI], E.prototype, "ToggleChat", null),
        (0, o.Cg)([p.oI], E.prototype, "ToggleTheaterMode", null),
        (E = (0, o.Cg)([I.PA], E));
      let U = (0, I.PA)(({ app: t }) =>
        t.BIsPerformingLogonCheck()
          ? (0, s.jsx)("div", {
              children: (0, s.jsx)("iframe", {
                style: { display: "none" },
                src: t.GetLoginURL(),
              }),
            })
          : null,
      );
      function k(t) {
        return (0, s.jsxs)("div", {
          className: "BroadcastButton WatchWithFriends",
          onClick: t.onClick,
          children: [
            (0, s.jsx)(c.y_e, {}),
            (0, h.we)("#Broadcast_WatchWithFriends"),
          ],
        });
      }
      function O(t) {
        return (0, s.jsx)("div", {
          className: "ToggleBroadcastChat",
          title: (0, h.we)("#Broadcast_ToggleChat"),
          onClick: t.onClick,
          children: (0, s.jsx)(c.K7s, { showChat: t.hideIcon }),
        });
      }
      function V() {
        return P.TS.STEAM_TV ? 1 : 3;
      }
      let $ = class extends n.Component {
        m_broadcastInfo = null;
        constructor(t) {
          super(t);
          let e = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
          (this.m_broadcastInfo = W.BroadcastWatchStore.StartInfo(e)),
            (this.state = { bChatCollapsed: !1 });
        }
        componentWillUnmount() {
          this.m_broadcastInfo &&
            (W.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
            (this.m_broadcastInfo = null));
        }
        OnWatchWithFriends() {
          this.props.broadcastView.ShowWatchPromptDialog();
        }
        ToggleChat() {
          this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
        }
        ToggleTheaterMode() {
          i.xm.UIStore.SetTheaterMode(!i.xm.UIStore.GetTheaterMode());
        }
        render() {
          const { broadcastView: t, popup: e, style: a } = this.props,
            o = t.GetSteamID().ConvertTo64BitString();
          let n = V();
          const r = t.m_bShowWatchPromptDialog
            ? (0, s.jsx)(S, {
                closeModal: () => t.HideWatchPromptDialog(),
                broadcastAccountId: t.GetSteamID().GetAccountID(),
                broadcastTabId: t.GetUniqueID(),
                initialFriend: t.m_watchPromptInitialFriend,
                browserContext: L.m,
                ownerWindow: e,
              })
            : null;
          return (0, s.jsxs)("div", {
            className: "BroadcastTab",
            style: a,
            children: [
              (0, s.jsx)(y.y, {
                className: "FullpageBroadcastBackdrop",
                src: this.m_broadcastInfo.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
              (0, s.jsxs)("div", {
                className: "BroadcastTab_OverBackground",
                children: [
                  (0, s.jsx)("div", {
                    className: "BroadcastTabHeaderContainer",
                    children: (0, s.jsxs)("div", {
                      className:
                        "BroadcastTab_HeaderRow" +
                        (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                      children: [
                        (0, s.jsx)(k, { onClick: this.OnWatchWithFriends }),
                        (0, s.jsx)(O, {
                          onClick: this.ToggleChat,
                          hideIcon: this.state.bChatCollapsed,
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(F, {
                    steamID: o,
                    watchLocation: n,
                    bHideChat: this.state.bChatCollapsed,
                    onTheaterMode: this.ToggleTheaterMode,
                    children: r,
                  }),
                ],
              }),
            ],
          });
        }
      };
      (0, o.Cg)([p.oI], $.prototype, "OnWatchWithFriends", null),
        (0, o.Cg)([p.oI], $.prototype, "ToggleChat", null),
        (0, o.Cg)([p.oI], $.prototype, "ToggleTheaterMode", null),
        ($ = (0, o.Cg)([I.PA], $));
      let F = class extends n.Component {
        m_strLocalSteamID = "";
        m_refBroadcastContainer = n.createRef();
        m_elMainContent;
        constructor(t) {
          super(t), (0, x.Gn)(this), (this.state = { info: null });
        }
        componentDidMount() {
          B.td.stream["76561198208088121"] && "chinese" === P.TS.LANGUAGE
            ? this.OnLocalStreamChange("76561198208088121")
            : B.td.stream["76561198207552741"] &&
              "russian" === P.TS.LANGUAGE &&
              this.OnLocalStreamChange("76561198207552741");
        }
        static getDerivedStateFromProps(t, e) {
          if (!e.info || e.info.m_steamIDBroadcast !== t.steamID) {
            e.info && W.BroadcastWatchStore.StopInfo(e.info);
            return { info: W.BroadcastWatchStore.StartInfo(t.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && W.BroadcastWatchStore.StopInfo(this.state.info);
        }
        OnLocalStreamChange(t) {
          this.m_strLocalSteamID = t;
        }
        SetMainContentRef(t) {
          this.m_elMainContent = t;
        }
        CalculateBroadcastSectionStyles(t) {
          if (this.props.bHideChat) return { width: "100%", height: "100%" };
          let e, a;
          r.ZM &&
            ((e = r.ZM.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
            (a = r.ZM.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
          const o = {};
          if (t) {
            const t = e || 66;
            if (((o.height = `${t}%`), this.m_elMainContent)) {
              const { clientWidth: e, clientHeight: a } = this.m_elMainContent,
                s = (9 / 16) * e + 50,
                n = (0, M.OQ)(t, 1, (s / a) * 100);
              o.height = `${n}%`;
            }
          } else
            (o.width = a ? `${a}%` : "66%"),
              (o.minWidth = a ? `${a}%` : "66%"),
              (o.maxWidth = "calc( 100% - 316px )"),
              (o.overflowY = "auto");
          return o;
        }
        OnGrabberMouseDown(t) {
          let e = t.currentTarget.ownerDocument.defaultView;
          e.addEventListener("mousemove", this.HandleMouseMove),
            e.addEventListener("mouseup", this.UnregisterDragEvents),
            this.setState({ bDraggingChatGrabber: !0 });
        }
        HandleMouseMove(t) {
          t.preventDefault(), t.stopPropagation();
          let e = this.m_refBroadcastContainer.current.getBoundingClientRect(),
            a =
              this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
          const o = e.left,
            s = t.clientX,
            n = a.width,
            i = (0, M.OQ)(((s - o) / n) * 100, 1, 100);
          r.ZM.SetUIDisplayPref("nWatchPartyBroadcastWidthPercentage", i);
        }
        UnregisterDragEvents(t) {
          t.view.removeEventListener("mousemove", this.HandleMouseMove),
            t.view.removeEventListener("mouseup", this.UnregisterDragEvents),
            this.setState({ bDraggingChatGrabber: !1 });
        }
        render() {
          let { steamID: t, children: e } = this.props,
            a = this.m_strLocalSteamID || t,
            o = this.state.info.m_bIsOnline,
            n = null;
          const r = this.CalculateBroadcastSectionStyles(!1);
          (r.flexGrow = this.props.bHideChat ? 1 : null),
            B.td.bValid && (n = (0, s.jsx)(z, { info: B.td }));
          const c = (0, s.jsx)("div", {
              className: "LoginDiv",
              children: (0, s.jsx)("a", {
                className: w().ChatLoginButton,
                href: `${P.TS.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
                children: (0, h.we)("#BroadcastChat_Login"),
              }),
            }),
            l = W.BroadcastWatchStore.GetBroadcast(a)
              ? W.BroadcastWatchStore.GetBroadcast(a).m_ulBroadcastID
              : "0";
          return (0, s.jsxs)("div", {
            className: "BroadcastContainer",
            children: [
              (0, s.jsxs)("div", {
                className: "BroadcastContainerSection",
                ref: this.m_refBroadcastContainer,
                style: r,
                children: [
                  (0, s.jsxs)("div", {
                    className: "BroadcastContainerSectionVideoContainer",
                    children: [
                      o &&
                        (0, s.jsx)(
                          v.default,
                          {
                            steamIDBroadcast: a,
                            watchLocation: this.props.watchLocation,
                            onTheaterMode: this.props.onTheaterMode,
                          },
                          a,
                        ),
                      !o && n,
                      (0, s.jsx)("div", { className: "videoContainerSizer" }),
                    ],
                  }),
                  e,
                  (0, s.jsx)("div", {
                    className: "BroadcastDetailsSection",
                    children: (0, s.jsx)(v.BroadcastDetails, {
                      steamID: a,
                      onLocalStreamChange: this.OnLocalStreamChange,
                      bVerticalBroadcastChat: !0,
                    }),
                  }),
                ],
              }),
              !this.props.bHideChat &&
                (0, s.jsx)("div", {
                  className: "BroadcastChatDivider horizontal",
                  onMouseDown: this.OnGrabberMouseDown,
                }),
              (0, s.jsxs)("div", {
                className: "BroadcastChatDiv",
                style: {
                  display: this.props.bHideChat ? "none" : "flex",
                  flexDirection: "column",
                  width: "100%",
                  minWidth: "300px",
                },
                children: [
                  (0, s.jsx)(f.I, {
                    emoticonStore: i.xm ? i.xm.ChatStore.EmoticonStore : null,
                    broadcastID: l,
                    steamID: a,
                    watchLocation: this.props.watchLocation,
                    hidden: this.props.bHideChat,
                  }),
                  P.iA && P.iA.logged_in ? null : c,
                ],
              }),
            ],
          });
        }
      };
      function z(t) {
        let e = `url( "${P.TS.CHAT_BASE_URL + t.info.offlineImage}" )`;
        return (0, s.jsx)("div", {
          style: { backgroundImage: e },
          className: "BroadcastOffline",
        });
      }
      function q() {
        return `${P.TS.STORE_BASE_URL}login?steamtv=1`;
      }
      (0, o.Cg)([x.sH], F.prototype, "m_strLocalSteamID", void 0),
        (0, o.Cg)([p.oI], F.prototype, "OnLocalStreamChange", null),
        (0, o.Cg)([p.oI], F.prototype, "SetMainContentRef", null),
        (0, o.Cg)([p.oI], F.prototype, "OnGrabberMouseDown", null),
        (0, o.Cg)([p.oI], F.prototype, "HandleMouseMove", null),
        (0, o.Cg)([p.oI], F.prototype, "UnregisterDragEvents", null),
        (F = (0, o.Cg)([I.PA], F));
      var Q = a(52003);
      let Z = class extends n.Component {
        render() {
          let t = this.props.broadcastView;
          if (!(t && t instanceof Q.w)) return null;
          let e = {};
          return (
            this.props.isActive || (e.display = "none"),
            (0, s.jsx)($, {
              style: e,
              broadcastView: t,
              popup: this.props.popup,
            })
          );
        }
      };
      Z = (0, o.Cg)([I.PA], Z);
      const X = Z;
    },
    53694: (t, e, a) => {
      a.r(e), a.d(e, { default: () => i });
      var o = a(62540),
        s = a(63696),
        n = a(72993),
        r = a(43397);
      const i = s.forwardRef(function (
        {
          steamID: t,
          localSteamID: e,
          watchLocation: a,
          bWebRTC: s,
          style: i,
          onRequestClose: c,
          actions: l,
          onTheaterMode: d,
          onLocalStreamChange: h,
          bVerticalBroadcastChat: m,
        },
        p,
      ) {
        const u = e || t;
        return (0, o.jsxs)("div", {
          ref: p,
          style: { display: "flex", flexDirection: "column", ...i },
          children: [
            (0, o.jsxs)("div", {
              className: "BroadcastSection",
              children: [
                (0, o.jsx)(
                  n.default,
                  {
                    steamIDBroadcast: u,
                    watchLocation: a,
                    bWebRTC: s,
                    onRequestClose: c,
                    actions: l,
                    onTheaterMode: d,
                    onOpenLinkInNewWindow: r.EP,
                  },
                  u,
                ),
                (0, o.jsx)("div", { className: "videoContainerSizer" }),
              ],
            }),
            (0, o.jsx)("div", {
              className: "BroadcastDetailsSection",
              children: (0, o.jsx)(n.BroadcastDetails, {
                steamID: u,
                onLocalStreamChange: h,
                bVerticalBroadcastChat: m,
              }),
            }),
          ],
        });
      });
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-deckard-hotfix/build/client/steamui/sourcemaps/broadcastapp.js.map
