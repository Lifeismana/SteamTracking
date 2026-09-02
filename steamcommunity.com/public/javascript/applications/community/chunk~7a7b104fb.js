/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [3256],
    {
      9398: (Gt, Yt, h) => {
        "use strict";
        h.d(Yt, { I: () => Ot });
        var i = h(7850),
          L = h(14947),
          F = h(75844),
          T = h(65946),
          te = h(90626),
          z = h(16346),
          Ut = h(90711),
          G = h(21822),
          Ht = h(18614),
          w = h(90024),
          l = h.n(w),
          n = h(34360),
          t = h(19316),
          X = h(96197),
          H = h(22714),
          c = h(86390),
          Y = h(34736),
          It = h(33543),
          _t = h.n(It);
        const Dt = () =>
            (0, i.jsx)("div", {
              className: _t().FriendsListInsetShadowCtn,
              children: (0, i.jsx)("div", {
                className: _t().FriendListInsetShadowTop,
              }),
            }),
          k = () =>
            (0, i.jsx)("div", {
              className: _t().FriendsListInsetShadowCtn,
              children: (0, i.jsx)("div", {
                className: _t().FriendListInsetShadowBottom,
              }),
            });
        var J = h(36118),
          q = h(36707),
          I = h(18210),
          g = h(54963),
          S = h(3166),
          O = h(63508),
          R = h.n(O),
          xt = h(29125),
          K = h(90828),
          Q = h(71421),
          sr = Object.defineProperty,
          dr = Object.getOwnPropertyDescriptor,
          Qt = (f, b, j) =>
            b in f
              ? sr(f, b, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: j,
                })
              : (f[b] = j),
          kt = (f, b, j, P) => {
            for (
              var U = P > 1 ? void 0 : P ? dr(b, j) : b, A = f.length - 1, Et;
              A >= 0;
              A--
            )
              (Et = f[A]) && (U = (P ? Et(b, j, U) : Et(U)) || U);
            return P && U && sr(b, j, U), U;
          },
          ir = (f, b, j) => Qt(f, typeof b != "symbol" ? b + "" : b, j);
        const Rr = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          zr = null,
          Gr = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function Mr(f, b, j) {
          return j
            ? "presenter"
            : b.GetBroadcastSteamID() === f
              ? "broadcaster"
              : b.BIsUserBroadcastModerator(f)
                ? "moderator"
                : "";
        }
        const re = (f) => {
            const { userType: b, msg: j, presenterInfo: P } = f;
            if (b === "presenter")
              return (0, i.jsx)("span", {
                children: (0, i.jsx)(Y.fI, {
                  name: P.name,
                  title: P.title,
                  photo: P.photo,
                  company: P.company,
                  bioString: P.bio,
                  children: (0, i.jsx)("a", {
                    className: (0, q.A)(R().MessageName, R().MessagePresenter),
                    href: S.TS.COMMUNITY_BASE_URL + "profiles/" + j.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: j.persona_name,
                  }),
                }),
              });
            {
              let U = null;
              return (
                b === "broadcaster"
                  ? (U = R().MessageBroadcaster)
                  : b === "moderator" && (U = R().MessageModerator),
                (0, i.jsx)("span", {
                  children: (0, i.jsx)("a", {
                    className: (0, q.A)(R().MessageName, U),
                    href: S.TS.COMMUNITY_BASE_URL + "profiles/" + j.steamid,
                    "data-miniprofile": "s" + j.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: j.persona_name,
                  }),
                })
              );
            }
          },
          yr = (f) => {
            switch (f.userType) {
              case "presenter":
                return (0, i.jsx)(Q.Gq, {
                  toolTipContent: (0, I.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, i.jsx)("span", {
                    className: R().RoleFlairContainer,
                    children: (0, i.jsx)(J.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, i.jsx)(Q.Gq, {
                  toolTipContent: (0, I.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, i.jsx)("span", {
                    className: R().RoleFlairContainer,
                    children: (0, i.jsx)(J.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, i.jsx)(Q.Gq, {
                  toolTipContent: (0, I.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, i.jsx)("span", {
                    className: R().RoleFlairContainer,
                    children: (0, i.jsx)(J.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let Ot = class extends te.Component {
          constructor(f) {
            super(f),
              ir(this, "m_chat", null),
              ir(this, "messagesContainer", te.createRef()),
              (0, L.Gn)(this);
          }
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(f) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== f.steamID ||
                this.props.broadcastID !== f.broadcastID ||
                this.props.broadcastChannelID !== f.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = G.q
                .Get()
                .GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID,
                )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let f = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, f),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(f) {
            return !!f.match(Gr);
          }
          AddLinksEmoticons(f, b) {
            let j = Rr;
            b && (j = this.m_chat.GetUserEmoticons());
            let P = f.split(Rr);
            const U = [];
            for (let A = 0; A < P.length; A += 1)
              A % 2 === 1
                ? U.push((0, i.jsx)(X.n, { emoticon: P[A], large: !0 }, A))
                : U.push(P[A]);
            return U;
          }
          HandleScroll(f) {
            const b = this.props.bInvertLayout
              ? f.currentTarget.scrollTop < 6
              : f.currentTarget.scrollTop + f.currentTarget.clientHeight >=
                f.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = b);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(f, b) {
            if (b.type !== K.X8.Chat) return null;
            const j = [],
              P = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              U = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (S.iA && S.iA.is_support) || P || U
                ? j.push(
                    (0, i.jsx)(
                      n.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            b.steamid,
                            b.persona_name,
                          ),
                        children: (0, I.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, i.jsx)(
                      n.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            b.steamid,
                            Ut.sW.XP,
                            12,
                            !1,
                            b.persona_name,
                          ),
                        children: (0, I.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, i.jsx)(
                      n.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            b.steamid,
                            Ut.sW.XP,
                            24,
                            !1,
                            b.persona_name,
                          ),
                        children: (0, I.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, i.jsx)(
                      n.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            b.steamid,
                            Ut.sW.XP,
                            168,
                            !1,
                            b.persona_name,
                          ),
                        children: (0, I.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, i.jsx)(
                      n.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            b.steamid,
                            Ut.sW.XP,
                            0,
                            !0,
                            b.persona_name,
                          ),
                        children: (0, I.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, i.jsx)(
                      n.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            b.steamid,
                            Ut.sW.rx,
                            0,
                            !1,
                            b.persona_name,
                            !0,
                          ),
                        children: (0, I.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(b.steamid)
                  ? j.push(
                      (0, i.jsx)(
                        n.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              b.steamid,
                              b.persona_name,
                            ),
                          children: (0, I.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : j.push(
                      (0, i.jsx)(
                        n.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              b.steamid,
                              b.persona_name,
                            ),
                          children: (0, I.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((S.iA && S.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                b.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(b.steamid)
                  ? j.push(
                      (0, i.jsx)(
                        n.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              b.steamid,
                              !1,
                              b.persona_name,
                            ),
                          children: (0, I.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : j.push(
                      (0, i.jsx)(
                        n.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              b.steamid,
                              !0,
                              b.persona_name,
                            ),
                          children: (0, I.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              j.length
                ? (0, z.lX)(
                    (0, i.jsxs)(n.tz, {
                      children: [
                        (0, i.jsxs)("div", {
                          className: R().SelectedUserNameCtn,
                          children: [
                            (0, I.we)("#BroadcastChat_User"),
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)("span", {
                              className: R().SelectedUserName,
                              children: b.persona_name,
                            }),
                          ],
                        }),
                        j,
                      ],
                    }),
                    f,
                  )
                : null
            );
          }
          GetTypeClassName(f) {
            return f.type === K.X8.Notification
              ? R().MessageNotification
              : f.type === K.X8.Error
                ? R().MessageError
                : R().MessageChat;
          }
          FormatMessage(f, b) {
            if (f.type === K.X8.Chat) {
              let j = b ? b.FilterText(f.steamid, f.msg) : f.msg;
              return this.AddLinksEmoticons(j, !1);
            } else return f.msg;
          }
          RenderUserChatLine(f, b, j) {
            let P = j ? j.get(f.steamid) : void 0;
            const U = f.type === K.X8.Chat ? Mr(f.steamid, this.m_chat, P) : "";
            return (0, i.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(f),
                onContextMenu: (A) => this.OnContextMenu(A, f),
                children: [
                  f.type === K.X8.Chat && (0, i.jsx)(yr, { userType: U }),
                  f.flair &&
                    (0, i.jsx)("span", {
                      className: R().FlairContainer,
                      children: this.AddLinksEmoticons(f.flair, !1),
                    }),
                  f.type === K.X8.Chat &&
                    (0, i.jsx)(re, { userType: U, msg: f, presenterInfo: P }),
                  f.type === K.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === f.steamid &&
                    (0, i.jsx)("span", {
                      className: `${R().MessageNotification} ${R().MessageContents}`,
                      children: ` (${(0, I.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  f.type === K.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(f.steamid) &&
                    (0, i.jsx)("span", {
                      className: `${R().MessageNotification} ${R().MessageContents}`,
                      children: ` (${(0, I.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, i.jsxs)("span", {
                    className: `${R().MessageContents} ${this.AddLinksEmoticons(f.msg, !1).filter((A) => A && typeof A == "string").length ? "" : R().EmoticonsOnly}`,
                    children: [
                      f.type === K.X8.Chat ? " : " : "",
                      this.FormatMessage(f, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              f.instance_id + "_" + f.client_ts + "_" + b,
            );
          }
          render() {
            const {
                hidden: f,
                bPartnerMemberOnlyChat: b,
                bInvertLayout: j,
              } = this.props,
              P = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              U = j ? P.reverse() : P,
              A = this.m_chat
                ? Ht.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              Et = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, i.jsxs)("div", {
              className: (0, q.A)(R().ChatPanel, "ChatPanel"),
              style: f ? { display: "none" } : void 0,
              children: [
                (0, i.jsx)(xt.P, { latestAnnouncement: Et }),
                j &&
                  !!this.m_chat &&
                  (0, i.jsx)(D, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: b,
                  }),
                (0, i.jsx)(Dt, {}),
                (0, i.jsx)("div", {
                  className: (0, q.A)(
                    `${R().ChatMessages} ${l().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: U.map((Nt, ur) =>
                    this.RenderUserChatLine(Nt, ur, A),
                  ),
                }),
                (0, i.jsx)(k, {}),
                !j &&
                  !!this.m_chat &&
                  (0, i.jsx)(D, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: b,
                  }),
              ],
            });
          }
        };
        kt([L.sH], Ot.prototype, "m_chat", 2),
          kt([g.oI], Ot.prototype, "StartChat", 1),
          kt([g.oI], Ot.prototype, "HandleScroll", 1),
          kt([g.oI], Ot.prototype, "OnContextMenu", 1),
          kt([g.oI], Ot.prototype, "RenderUserChatLine", 1),
          (Ot = kt([F.PA], Ot));
        function D(f) {
          var b, j, P;
          const { oChat: U, emoticonStore: A, bPartnerMemberOnlyChat: Et } = f;
          return Et &&
            (!((b = S.iA) != null && b.logged_in) ||
              !((j = S.iA) != null && j.is_partner_member))
            ? (0, i.jsx)(Tt, {})
            : (P = S.iA) != null && P.logged_in
              ? (0, i.jsx)(Ur, { oChat: U, emoticonStore: A })
              : null;
        }
        function Ur(f) {
          const { oChat: b, emoticonStore: j } = f,
            [P, U] = te.useState(""),
            A = te.useRef(void 0),
            Et = (0, T.q3)(() => b.m_bRateLimited),
            Nt = te.useCallback(
              (At) => {
                !At.shiftKey &&
                  At.charCode === 13 &&
                  (b.m_bRateLimited || (b.SendMessage(P), U("")),
                  At.preventDefault());
              },
              [b, P],
            ),
            ur = te.useCallback(
              (At, Ct = !1) => {
                U(P + `\u02D0${At}\u02D0`),
                  A != null && A.current && A.current.focus();
              },
              [P, A],
            ),
            Ir = () => {
              b.SendMessage(P), U("");
            };
          let Cr = Et || P.trim().length == 0,
            Ar = (0, q.A)(l().chatSubmitButton, P.length == 0 && l().disabled);
          return (0, i.jsx)("div", {
            className: (0, q.A)(R().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, i.jsxs)("div", {
              className: (0, q.A)(R().ChatEntry, "ChatEntry"),
              children: [
                (0, i.jsxs)("form", {
                  className: `${l().chatEntryControls}`,
                  children: [
                    (0, i.jsx)("textarea", {
                      className: l().chatTextarea,
                      placeholder: (0, I.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: Nt,
                      onChange: (At) => U(At.target.value),
                      value: P,
                      ref: A,
                    }),
                    Et &&
                      (0, i.jsx)(Nr, {
                        nSeconds: b.m_nRateLimitSeconds,
                        bRateLimited: b.m_bRateLimited,
                      }),
                    (0, i.jsx)("button", {
                      className: Ar,
                      title: (0, I.we)("#ChatEntryButton_Submit"),
                      disabled: Cr,
                      onClick: Ir,
                      children: (0, i.jsx)(J.XTb, {}),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  style: { height: "50px" },
                  className: `${l().chatEntryActionsContainer}`,
                  children: (0, i.jsxs)("div", {
                    className: l().chatEntryActionsGroup,
                    children: [
                      (0, i.jsx)(H.A, {
                        disabled: !1,
                        OnEmoticonSelected: ur,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: j,
                      }),
                      (0, i.jsx)(Kt, { ...f, textInputRef: A }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Kt(f) {
          var b;
          const { oChat: j, emoticonStore: P, textInputRef: U } = f;
          return j.m_strFlairGroupID &&
            P.flair_list &&
            (b = P.GetFlairListByGroupID(j.m_strFlairGroupID)) != null &&
            b.length
            ? (0, i.jsx)(H.A, {
                disabled: !1,
                OnEmoticonSelected: (A) => {
                  j.UpdateChatMessageFlair(A),
                    U != null && U.current && U.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: P,
                strFlairGroupID: j.m_strFlairGroupID,
                title: (0, I.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, i.jsx)(J.P7r, {}),
              })
            : null;
        }
        class Nr extends te.Component {
          render() {
            return (0, i.jsx)("div", {
              className: R().TimedProgressBarContainer,
              children: (0, i.jsxs)("div", {
                className: R().wrapper,
                children: [
                  (0, i.jsx)("div", {
                    className: `${R().spinner} ${R().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: `${R().filler} ${R().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: R().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function Tt(f) {
          return (0, i.jsxs)("div", {
            className: R().Description,
            children: [
              (0, i.jsx)("div", {
                className: R().LogInPrompt,
                children: (0, I.we)("#Broadcast_PartnerChat_Login"),
              }),
              !S.iA.logged_in &&
                (0, i.jsx)(t.$n, {
                  onClick: c.vg,
                  className: (0, q.A)(R().SignInButton),
                  children: (0, I.we)("#Login_SignIn"),
                }),
            ],
          });
        }
      },
      29125: (Gt, Yt, h) => {
        "use strict";
        h.d(Yt, { P: () => c, V: () => _t });
        var i = h(7850),
          L = h(65946),
          F = h(90626),
          T = h(21822),
          te = h(74498),
          z = h(29630),
          Ut = h(37656),
          G = h(80913),
          Ht = h(53107),
          w = h(36707),
          l = h(18210),
          n = h(53113),
          t = h(3166),
          X = h(8287),
          H = h.n(X);
        function c(Dt) {
          const { latestAnnouncement: k } = Dt;
          return (k == null ? void 0 : k.type) == "giveaway_draw"
            ? (0, i.jsx)(Y, { latestWinner: k })
            : null;
        }
        function Y(Dt) {
          var k, J;
          const {
              latestWinner: q,
              className: I,
              strActionButton: g,
              strActionClassname: S,
            } = Dt,
            O =
              ((k = q.winners_info) == null ? void 0 : k.length) > 0
                ? q.winners_info[0].accountid
                : 0,
            [R, xt] = F.useState(O),
            K =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            Q = (0, n.L$)(
              `${z.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            sr = (0, n.L$)(
              `${z.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            dr = (0, Ut.w)(q.giveaway_gid);
          let Qt =
            dr.bLoadingGiveawayInfo || dr.closed
              ? null
              : dr.seconds_until_drawing;
          const kt = O === t.iA.accountid;
          F.useEffect(() => {
            R != O && setTimeout(() => xt(O), 1500);
          }, [O, R]);
          const ir =
            ((J = q.winners_info) == null ? void 0 : J.length) > 0 &&
            q.winners_info[0].persona
              ? q.winners_info[0].persona
              : (0, l.we)("#GA2022_UnknownPersonaName");
          return (0, i.jsx)(Ht.uU, {
            href: K,
            className: I,
            children: (0, i.jsxs)("div", {
              className: (0, w.A)({
                [H().GiveawayWinnerBox]: !0,
                [H().GiveawayWinnerAnnounced]: R === O,
              }),
              children: [
                (0, i.jsx)("div", {
                  className: H().GiveawayWinnerBoxLeft,
                  children: (0, i.jsx)("img", {
                    className: H().GiveawayWinnerArt,
                    src: Q,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: H().GiveawayWinnerBoxRight,
                  children: [
                    R !== O &&
                      (0, i.jsx)("div", {
                        className: (0, w.A)(H().GiveawayWinnerText),
                        children: (0, l.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, i.jsx)("br", {}),
                        ),
                      }),
                    R === O &&
                      (0, i.jsx)("div", {
                        className: (0, w.A)(
                          H().GiveawayWinnerText,
                          H().GiveawayWinnerAnnounced,
                        ),
                        children: (0, l.PP)(
                          kt
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          ir,
                          (0, i.jsx)("br", {}),
                        ),
                      }),
                    Qt > 0 &&
                      (0, i.jsx)("div", {
                        className: H().GiveawayWinnerCountdown,
                        children: (0, l.PP)("#GA2022_Congrats_NextDraw", Qt),
                      }),
                  ],
                }),
                (0, i.jsx)("img", {
                  className: H().GiveawayWinnerQuestion,
                  src: sr,
                }),
                !!g &&
                  (0, i.jsx)("div", {
                    className: S,
                    children: kt ? (0, l.we)("#GA2022_YouWonNextSteps") : g,
                  }),
              ],
            }),
          });
        }
        function It(Dt, k) {
          const [J, q] = (0, L.q3)(() => {
              var O;
              return [
                k == null ? void 0 : k.steamid,
                (O = te.es.GetBroadcast(k == null ? void 0 : k.steamid)) == null
                  ? void 0
                  : O.m_ulBroadcastID,
              ];
            }),
            [I, g] = F.useState(null);
          F.useEffect(() => {
            let O = null;
            return (
              (J || q) &&
                ((O = T.q.Get().GetOrCreateChat(q, J)),
                O.StartForSteamID(J, q),
                g(O)),
              () => {
                O && (O.Stop(), g(null));
              }
            );
          }, [J, q]);
          const S = (0, L.q3)(
            () => (I == null ? void 0 : I.m_latestAnnouncement) || null,
          );
          if ((S == null ? void 0 : S.type) == "giveaway_draw") {
            const O = S;
            if (O.giveaway_gid == Dt) return O;
          }
          return null;
        }
        function _t(Dt) {
          const { gidGiveaway: k, stream: J } = Dt,
            q = It(k, J),
            I = (0, G.h)("GameAwardDrop2022");
          let g = null,
            S = H().GiveawayRegisterButton;
          return (
            t.iA.logged_in
              ? I != null && I.registered
                ? ((g = (0, l.we)("#GA2022_AlreadyRegistered")),
                  (S = H().GiveawayAlreadyRegistered))
                : (g = (0, l.we)("#GA2022_RegisterToWin"))
              : (g = (0, l.we)("#GA2022_RegisterLoginToWin")),
            q
              ? (0, i.jsx)(Y, {
                  latestWinner: q,
                  className: H().InViewerBar,
                  strActionButton: g,
                  strActionClassname: S,
                })
              : null
          );
        }
      },
      23240: (Gt, Yt, h) => {
        "use strict";
        h.r(Yt),
          h.d(Yt, {
            BroadcastDetails: () => Fr,
            LinkOverlay: () => tr,
            default: () => ee,
          });
        var i = h(7850),
          L = h(14947),
          F = h(75844),
          T = h(90626),
          te = h(16346),
          z = h(41301),
          Ut = h(83482),
          G = h(74498),
          Ht = h(10142),
          w = h(54963),
          l = h(8323),
          n = Object.defineProperty,
          t = Object.getOwnPropertyDescriptor,
          X = (s, a, m) =>
            a in s
              ? n(s, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: m,
                })
              : (s[a] = m),
          H = (s, a, m, d) => {
            for (
              var u = d > 1 ? void 0 : d ? t(a, m) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, m, u) : B(u)) || u);
            return d && u && n(a, m, u), u;
          },
          c = (s, a, m) => X(s, typeof a != "symbol" ? a + "" : a, m);
        class Y extends T.Component {
          constructor() {
            super(...arguments),
              c(this, "m_elCanvas", null),
              c(this, "m_Context", null),
              c(this, "m_schUpdate", new l.LU()),
              c(this, "m_bSetupComplete", !1);
          }
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(a) {
            this.m_elCanvas = a;
          }
          updateCanvas() {
            var a;
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let m = this.props.scaleFactor || [1, 1],
              d = this.props.elementRef,
              u = this.props.updateRate;
            const p = this.m_elCanvas.getContext("2d");
            if (!p) return;
            this.m_Context = p;
            let B = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              W = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = B),
              (this.m_elCanvas.height = W),
              ((a = this.props.blurAmount) != null ? a : 0) > 0 &&
                (p.filter = "blur(" + this.props.blurAmount + "px)");
            let V = () => {
              p.drawImage(d, 0, 0, B * m[0], W * m[1]),
                u > 0 && this.m_schUpdate.Schedule(u, V);
            };
            V(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, i.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        H([w.oI], Y.prototype, "BindCanvasRef", 1),
          H([w.oI], Y.prototype, "updateCanvas", 1);
        var It = h(34360),
          _t = h(81115),
          Dt = h(58584),
          k = h(59913),
          J = h(42891),
          q = h(28679);
        function I(s, a) {
          var m = function (p) {
              return a && (0, T.isValidElement)(p) ? a(p) : p;
            },
            d = Object.create(null);
          return (
            s &&
              T.Children.map(s, function (u) {
                return u;
              }).forEach(function (u) {
                d[u.key] = m(u);
              }),
            d
          );
        }
        function g(s, a) {
          (s = s || {}), (a = a || {});
          function m(ie) {
            return ie in a ? a[ie] : s[ie];
          }
          var d = Object.create(null),
            u = [];
          for (var p in s)
            p in a ? u.length && ((d[p] = u), (u = [])) : u.push(p);
          var B,
            W = {};
          for (var V in a) {
            if (d[V])
              for (B = 0; B < d[V].length; B++) {
                var se = d[V][B];
                W[d[V][B]] = m(se);
              }
            W[V] = m(V);
          }
          for (B = 0; B < u.length; B++) W[u[B]] = m(u[B]);
          return W;
        }
        function S(s, a, m) {
          return m[a] != null ? m[a] : s.props[a];
        }
        function O(s, a) {
          return I(s.children, function (m) {
            return (0, T.cloneElement)(m, {
              onExited: a.bind(null, m),
              in: !0,
              appear: S(m, "appear", s),
              enter: S(m, "enter", s),
              exit: S(m, "exit", s),
            });
          });
        }
        function R(s, a, m) {
          var d = I(s.children),
            u = g(a, d);
          return (
            Object.keys(u).forEach(function (p) {
              var B = u[p];
              if ((0, T.isValidElement)(B)) {
                var W = p in a,
                  V = p in d,
                  se = a[p],
                  ie = (0, T.isValidElement)(se) && !se.props.in;
                V && (!W || ie)
                  ? (u[p] = (0, T.cloneElement)(B, {
                      onExited: m.bind(null, B),
                      in: !0,
                      exit: S(B, "exit", s),
                      enter: S(B, "enter", s),
                    }))
                  : !V && W && !ie
                    ? (u[p] = (0, T.cloneElement)(B, { in: !1 }))
                    : V &&
                      W &&
                      (0, T.isValidElement)(se) &&
                      (u[p] = (0, T.cloneElement)(B, {
                        onExited: m.bind(null, B),
                        in: se.props.in,
                        exit: S(B, "exit", s),
                        enter: S(B, "enter", s),
                      }));
              }
            }),
            u
          );
        }
        var xt =
            Object.values ||
            function (s) {
              return Object.keys(s).map(function (a) {
                return s[a];
              });
            },
          K = {
            component: "div",
            childFactory: function (a) {
              return a;
            },
          },
          Q = (function (s) {
            (0, J.A)(a, s);
            function a(d, u) {
              var p;
              p = s.call(this, d, u) || this;
              var B = p.handleExited.bind((0, k.A)(p));
              return (
                (p.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: B,
                  firstRender: !0,
                }),
                p
              );
            }
            var m = a.prototype;
            return (
              (m.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (m.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (a.getDerivedStateFromProps = function (u, p) {
                var B = p.children,
                  W = p.handleExited,
                  V = p.firstRender;
                return { children: V ? O(u, W) : R(u, B, W), firstRender: !1 };
              }),
              (m.handleExited = function (u, p) {
                var B = I(this.props.children);
                u.key in B ||
                  (u.props.onExited && u.props.onExited(p),
                  this.mounted &&
                    this.setState(function (W) {
                      var V = (0, Dt.A)({}, W.children);
                      return delete V[u.key], { children: V };
                    }));
              }),
              (m.render = function () {
                var u = this.props,
                  p = u.component,
                  B = u.childFactory,
                  W = (0, _t.A)(u, ["component", "childFactory"]),
                  V = this.state.contextValue,
                  se = xt(this.state.children).map(B);
                return (
                  delete W.appear,
                  delete W.enter,
                  delete W.exit,
                  p === null
                    ? T.createElement(q.A.Provider, { value: V }, se)
                    : T.createElement(
                        q.A.Provider,
                        { value: V },
                        T.createElement(p, W, se),
                      )
                );
              }),
              a
            );
          })(T.Component);
        (Q.propTypes = {}), (Q.defaultProps = K);
        const sr = Q;
        var dr = h(63741),
          Qt = h(36707);
        const kt = 500;
        class ir extends T.Component {
          render() {
            let {
              keyExtractor: a,
              style: m,
              duration: d = kt,
              className: u,
              children: p,
              childRef: B,
              ...W
            } = this.props;
            const V = { ...(m || {}), transitionDuration: `${d / 1e3}s` };
            return (0, i.jsx)(sr, {
              ...W,
              className: (0, Qt.A)("crossfade", u),
              children: (0, i.jsx)(
                dr.A,
                {
                  nodeRef: B,
                  classNames: "crossfade-anim",
                  timeout: d,
                  style: V,
                  children: p,
                },
                a(),
              ),
            });
          }
        }
        function Rr(s) {
          const { src: a, ...m } = s,
            d = { backgroundImage: `url(${a})` },
            u = T.useRef(null);
          return (0, i.jsx)(ir, {
            style: d,
            keyExtractor: () => a,
            childRef: u,
            ...m,
            children: (0, i.jsx)("div", { ref: u, className: "crossfade-img" }),
          });
        }
        var zr = h(40232),
          Gr = h(16085),
          Mr = h(79167),
          re = h(36118),
          yr = h(53107),
          Ot = h(82734),
          D = h(18210),
          Ur = h(19730),
          Kt = h(13854),
          Nr = h(3166),
          Tt = h(6600),
          f = h(48937),
          b = h(15527),
          j = h.n(b),
          P = h(85599),
          U = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          Et = (s, a, m, d) => {
            for (
              var u = d > 1 ? void 0 : d ? A(a, m) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, m, u) : B(u)) || u);
            return d && u && U(a, m, u), u;
          };
        function Nt() {
          return (0, i.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, D.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const ur = (0, F.PA)((s) => {
          let a = s.video;
          if (a && (a.IsBroadcastClip() || a.IsBroadcastVOD())) return null;
          let m = G.fK.Loading,
            d = "";
          if (a) {
            (m = a.GetBroadcastState()), (d = a.GetBroadcastStateDescription());
            let p = a.IsBuffering();
            m == G.fK.Unlocking && ((m = G.fK.Loading), (d = "")),
              m == G.fK.Ready && p && ((m = G.fK.Loading), (d = ""));
          }
          if (
            (a && m != G.fK.Error && a.GetUserInputNeeded()) ||
            m == G.fK.Ready
          )
            return null;
          let u = m == G.fK.Loading;
          return (0, i.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              u && (0, i.jsx)(P.t, {}),
              !u &&
                (0, i.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: d,
                }),
            ],
          });
        });
        class Ir extends T.Component {
          OnClick() {
            G.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, i.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, i.jsx)(re.jGG, {}),
                (0, i.jsx)("span", {
                  children: (0, D.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        Et([w.oI], Ir.prototype, "OnClick", 1);
        var Cr = Object.defineProperty,
          Ar = Object.getOwnPropertyDescriptor,
          At = (s, a, m, d) => {
            for (
              var u = d > 1 ? void 0 : d ? Ar(a, m) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, m, u) : B(u)) || u);
            return d && u && Cr(a, m, u), u;
          };
        let Ct = class extends T.Component {
          constructor(s) {
            super(s);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let s = this.props.stats;
            return (0, i.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, i.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, i.jsx)(re.sED, {}),
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, i.jsx)(Xt, { stats: s }),
              ],
            });
          }
        };
        At([w.oI], Ct.prototype, "HideStats", 1), (Ct = At([F.PA], Ct));
        let Xt = class extends T.Component {
          constructor(s) {
            super(s);
          }
          createBufferedRange(s) {
            let a = this.props.stats,
              m = [],
              d = s ? "vidbuf" : "audbuf",
              u = s
                ? a.GetNumBufferedVideoRanges()
                : a.GetNumBufferedAudioRanges();
            if (u > 0)
              for (let p = 0; p < u; ++p) {
                let B = (0, D.we)(
                    s
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    p,
                  ),
                  W = s
                    ? a.GetBufferedVideoSegmentForDisplay(p)
                    : a.GetBufferedAudioSegmentForDisplay(p);
                m.push(
                  (0, i.jsxs)(
                    "div",
                    {
                      children: [
                        B,
                        " ",
                        (0, i.jsx)("span", {
                          className: "videoStatsValue",
                          children: W,
                        }),
                      ],
                    },
                    d + p,
                  ),
                );
              }
            else {
              let p = (0, D.we)(
                s
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              m.push((0, i.jsx)("div", { children: p }, d + "none"));
            }
            return m;
          }
          render() {
            let s = this.props.stats;
            return (0, i.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, D.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, i.jsx)("span", {
                        className: "videoStatsValue",
                        children: s.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, i.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [s.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, i.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [s.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Xt = At([F.PA], Xt);
        var br = h(82581),
          Zr = Object.defineProperty,
          Zt = Object.getOwnPropertyDescriptor,
          qr = (s, a, m) =>
            a in s
              ? Zr(s, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: m,
                })
              : (s[a] = m),
          Rt = (s, a, m, d) => {
            for (
              var u = d > 1 ? void 0 : d ? Zt(a, m) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, m, u) : B(u)) || u);
            return d && u && Zr(a, m, u), u;
          },
          jt = (s, a, m) => qr(s, typeof a != "symbol" ? a + "" : a, m);
        class hr extends T.Component {
          constructor(a) {
            super(a),
              jt(this, "m_elSettingsButton"),
              jt(this, "m_SettingsButtonPos"),
              jt(this, "m_elClickListener", null),
              jt(this, "m_elSettingsPanel", null),
              jt(this, "m_elSubtitlesButton", T.createRef()),
              jt(this, "m_elSubtitlesPanel", T.createRef()),
              jt(this, "m_SubtitlesButtonPos"),
              (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(a) {
            var m;
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                a.currentTarget.ownerDocument.defaultView),
              (m = this.m_elClickListener) == null ||
                m.addEventListener("mouseup", this.OnMouseUp, !0);
          }
          OnSubtitlesClick(a) {
            var m, d, u;
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                (m = this.m_elSubtitlesButton.current) == null
                  ? void 0
                  : m.offsetLeft,
                (d = this.m_elSubtitlesButton.current) == null
                  ? void 0
                  : d.offsetTop,
              ]),
              (this.m_elClickListener =
                a.currentTarget.ownerDocument.defaultView),
              (u = this.m_elClickListener) == null ||
                u.addEventListener("mouseup", this.OnMouseUp, !0);
          }
          OnMouseUp(a) {
            var m;
            (m = this.m_elClickListener) == null ||
              m.removeEventListener("mouseup", this.OnMouseUp, !0),
              (0, Ot.id)(this.m_elSettingsPanel, a.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, Ot.id)(this.m_elSubtitlesPanel.current, a.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(a) {
            this.m_elSettingsButton = a;
          }
          BindSettingsPanel(a) {
            this.m_elSettingsPanel = a;
          }
          OnShowStats(a) {
            this.props.onShowStats(a),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let a = !1,
              m = !1;
            const { video: d, actions: u } = this.props;
            let p,
              B = [],
              W = 0,
              V = (0, i.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const se = 260,
              ie = 32;
            if (
              (this.state.bSettingsOpen &&
                ((a = !0),
                (p = this.props.video.GetVideoRepresentations()),
                (B = p.map((zt) =>
                  (0, i.jsx)(
                    br.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(zt),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: zt.selected,
                      children: zt.displayName,
                    },
                    zt.id,
                  ),
                )),
                B.push(V),
                B.push(
                  (0, i.jsxs)(
                    br.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, D.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (W = 0 - (B.length * 21 + ie))),
              this.state.bSubtitlesOpen)
            ) {
              (m = !0),
                (B = []),
                B.push(
                  (0, i.jsx)(
                    br.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, D.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let zt = 0;
                zt < this.props.video.ListSubtitles().length;
                zt++
              ) {
                const rr = this.props.video.ListSubtitles()[zt];
                B.push(
                  (0, i.jsx)(
                    br.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(rr.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: rr.mode === "showing",
                      children: rr.label,
                    },
                    rr.language,
                  ),
                );
              }
              W = 0 - (se + ie);
            }
            const or =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, i.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                or &&
                  (0, i.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (or ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, i.jsx)(re.N8C, {}),
                  }),
                (0, i.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (a ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, i.jsx)(re.wB_, {}),
                }),
                (0, i.jsx)(ar, { video: d }),
                u &&
                  u.map((zt) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: zt,
                      },
                      zt.key,
                    ),
                  ),
                a &&
                  (0, i.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: W,
                    },
                    children: (0, i.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: B,
                    }),
                  }),
                m &&
                  (0, i.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: se + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: W,
                    },
                    children: (0, i.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: B,
                    }),
                  }),
              ],
            });
          }
        }
        Rt([w.oI], hr.prototype, "OnVideoControlClick", 1),
          Rt([w.oI], hr.prototype, "OnSubtitlesClick", 1),
          Rt([w.oI], hr.prototype, "OnMouseUp", 1),
          Rt([w.oI], hr.prototype, "bindSettingsButton", 1),
          Rt([w.oI], hr.prototype, "BindSettingsPanel", 1),
          Rt([w.oI], hr.prototype, "OnShowStats", 1);
        const _r = !0;
        let ar = class extends T.Component {
          constructor(s) {
            super(s),
              jt(this, "k_nHideSliderTimeout", 1.5 * 1e3),
              jt(this, "m_bShowSlider", _r),
              jt(this, "m_schHideSlider", new l.LU()),
              jt(this, "m_bChildDragging", !1),
              jt(this, "m_bMouseOver", !1),
              (0, L.Gn)(this);
          }
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let s = this.props.video,
              a = s.IsMuted();
            s.SetMute(!a), s.GetVolume() < 0.01 && s.SetVolume(0.5);
          }
          OnMouseEnter(s) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(s) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(s) {
            (this.m_bChildDragging = s), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = _r),
              );
          }
          render() {
            let s = this.props.video,
              a = s.IsMuted(),
              m = s.GetVolume() * 100,
              d = "videoControlButton";
            m > 65
              ? (d += " HighestVolume")
              : m > 45
                ? (d += " HighVolume")
                : m < 46 && m > 24
                  ? (d += " MedVolume")
                  : m < 25 && (d += " LowVolume");
            let u = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (u += " ShowVolumeSlider"),
              a && (u += " muted"),
              (0, i.jsx)("div", {
                className: u,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, i.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, i.jsx)("div", {
                      className: d,
                      onClick: this.ToggleMute,
                      children: (0, i.jsx)(re.fSs, {}),
                    }),
                    (0, i.jsx)(er, { video: s, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        Rt([L.sH], ar.prototype, "m_bShowSlider", 2),
          Rt([w.oI], ar.prototype, "ToggleMute", 1),
          Rt([w.oI], ar.prototype, "OnMouseEnter", 1),
          Rt([w.oI], ar.prototype, "OnMouseLeave", 1),
          Rt([w.oI], ar.prototype, "OnChildDrag", 1),
          (ar = Rt([F.PA], ar));
        let er = class extends T.Component {
          constructor(s) {
            super(s),
              jt(this, "m_elSlider", null),
              jt(this, "m_nVolumeStartOfDrag", 0),
              (0, L.Gn)(this);
          }
          OnMouseDown(s) {
            var a, m;
            let d = s.currentTarget;
            (this.m_elSlider = d),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(d, s.clientX),
              (a = d.ownerDocument.defaultView) == null ||
                a.addEventListener("mousemove", this.OnMouseMove),
              (m = d.ownerDocument.defaultView) == null ||
                m.addEventListener("mouseup", this.OnMouseUp),
              this.props.onDrag(!0);
          }
          OnMouseMove(s) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, s.clientX);
          }
          OnMouseUp(s) {
            var a, m;
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, s.clientX);
            let d = this.props.video;
            d.IsMuted() && d.SetVolume(this.m_nVolumeStartOfDrag),
              (a = this.m_elSlider.ownerDocument.defaultView) == null ||
                a.removeEventListener("mousemove", this.OnMouseMove),
              (m = this.m_elSlider.ownerDocument.defaultView) == null ||
                m.removeEventListener("mouseup", this.OnMouseUp),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(s, a) {
            let m = s.getBoundingClientRect(),
              d = Kt.Fu(a, m.left, m.right, 0, 1),
              u = Kt.OQ(d, 0, 1),
              p = this.props.video;
            p.SetMute(d < 0.01), p.SetVolume(u);
          }
          render() {
            let s = this.props.video,
              a = s.GetVolume() * 100;
            s.IsMuted() && (a = 0);
            let d = { left: `${a}%` },
              u = { width: `${a}%` };
            return (0, i.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, i.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, i.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: u,
                }),
                (0, i.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: d,
                }),
              ],
            });
          }
        };
        Rt([w.oI], er.prototype, "OnMouseDown", 1),
          Rt([w.oI], er.prototype, "OnMouseMove", 1),
          Rt([w.oI], er.prototype, "OnMouseUp", 1),
          Rt([L.XI], er.prototype, "SetVolumeWithCoord", 1),
          (er = Rt([F.PA], er));
        var es = h(43434),
          jr = Object.defineProperty,
          ts = Object.getOwnPropertyDescriptor,
          Er = (s, a, m) =>
            a in s
              ? jr(s, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: m,
                })
              : (s[a] = m),
          x = (s, a, m, d) => {
            for (
              var u = d > 1 ? void 0 : d ? ts(a, m) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, m, u) : B(u)) || u);
            return d && u && jr(a, m, u), u;
          },
          Z = (s, a, m) => Er(s, typeof a != "symbol" ? a + "" : a, m);
        const xr = 3200,
          Sr = 15;
        let ee = class extends T.Component {
          constructor(s) {
            super(s),
              Z(this, "m_schHideControls", new l.LU()),
              Z(this, "m_schUnmountControls", new l.LU()),
              Z(this, "m_elVideo", null),
              Z(this, "m_elBroadcastPlayer", null),
              Z(this, "m_bMouseDown", !1),
              Z(this, "m_elMouseDown", null),
              Z(this, "m_listeners", new l.Ji()),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            var s, a;
            let m = this.state.video;
            m &&
              (G.es.StopVideo(m),
              this.setState({ video: null }),
              (a = (s = this.props).fnSetBroadcastVideo) == null ||
                a.call(s, null));
          }
          IsMuted() {
            let s = this.state.video;
            return !s || s.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let s = this.state.video;
            s && s.StopPlaybackTillUserInput();
          }
          componentDidUpdate(s, a) {
            !a.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((d) => ({
                    bControlsVisible: d.bMountControls,
                  }));
                }, 15)
              : a.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== s.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const m = this.props.nAppIDVOD;
            m &&
              (a.strInitialCapsuleImageUrl === void 0 || s.nAppIDVOD != m) &&
              Ht.A.Get()
                .QueueAppRequest(m, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  var d;
                  const u = Ht.A.Get().GetApp(m),
                    p =
                      ((d = u == null ? void 0 : u.GetAssets()) == null
                        ? void 0
                        : d.GetMainCapsuleURL()) || "";
                  this.setState({ strInitialCapsuleImageUrl: p });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(s) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = s),
              s &&
                (this.m_listeners.AddEventListener(
                  s,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  s,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  s,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  s,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(s) {
            var a, m;
            let d = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? s &&
                  (d = G.es.CreateBroadcastVideo(
                    s,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? s &&
                    (d = G.es.CreateClipVideo(
                      s,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    s &&
                    ((d = G.es.CreateVODVideo(
                      s,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      d.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              d &&
                (this.props.bStartMuted && d.SetMute(!0),
                this.props.bStartWithSubtitles && d.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? d.StopPlaybackTillUserInput()
                  : d.Play()),
              this.setState({ video: d }),
              (m = (a = this.props).fnSetBroadcastVideo) == null ||
                m.call(a, d),
              (this.m_elVideo = s);
          }
          OnMouseDown(s) {
            var a;
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = s.currentTarget),
              (a = this.m_elMouseDown.ownerDocument.defaultView) == null ||
                a.addEventListener("mouseup", this.OnMouseUp);
          }
          OnMouseUp(s) {
            var a, m;
            (this.m_bMouseDown = !1),
              (m =
                (a = this.m_elMouseDown) == null
                  ? void 0
                  : a.ownerDocument.defaultView) == null ||
                m.removeEventListener("mouseup", this.OnMouseUp),
              this.m_schHideControls.Schedule(xr, this.HideControls);
          }
          OnMouseMove(s) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(xr, this.HideControls);
          }
          OnMouseLeave(s) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((s) =>
              !s.bControlsVisible && s.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let s = this.state.video;
            if (!s) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), s.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(s) {
            this.state.bFullscreen ||
              ((0, te.lX)(
                (0, i.jsx)(It.tz, { children: this.GetContextMenuItems() }),
                s,
              ),
              s.preventDefault());
          }
          ToggleStatsView(s) {
            let a = !this.state.bShowStats;
            this.setState({ bShowStats: a });
            let m = this.state.video;
            m && m.SetStatsViewIsVisible(a);
          }
          ShowStorePage(s) {
            let a = this.state.video;
            if (!a || !this.props.onOpenLinkInNewWindow) return;
            let m = a.GetBroadcastInfo();
            if (!m) return;
            let d = (0, Ut.k2)(`${Nr.TS.STORE_BASE_URL}app/${m.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(s, d), s.stopPropagation();
          }
          GetContextMenuItems() {
            let s = [],
              a = this.state.video;
            if (!a) return s;
            let m = a.GetBroadcastInfo();
            return (
              s.push(
                (0, i.jsx)(
                  It.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (d) => {
                      this.ToggleStatsView(d);
                    },
                    children: (0, D.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              m &&
                m.m_strAppId != "0" &&
                Number.parseInt(m.m_strAppId) != G.fO &&
                s.push(
                  (0, i.jsx)(
                    It.kt,
                    {
                      onSelected: (d) => {
                        this.ShowStorePage(d);
                      },
                      children: (0, D.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              s
            );
          }
          CloseStats() {
            let s = this.state.video;
            s &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), s.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            var s;
            this.m_elBroadcastPlayer &&
              ((0, Ot.ww)(this.m_elBroadcastPlayer)
                ? (0, Ot.MS)(this.m_elBroadcastPlayer)
                : (0, Ot.tl)(
                    this.m_elBroadcastPlayer,
                    (s = this.m_elVideo) != null ? s : void 0,
                  ));
          }
          OnFullscreenChange(s) {
            if (!this.m_elBroadcastPlayer) return;
            let a = (0, Ot.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: a });
          }
          BHideVideoControls() {
            let s = this.state.video;
            return !s || s.GetUserInputNeeded()
              ? !0
              : G.es.GetBroadcastState(s) == G.fK.Error;
          }
          render() {
            var s;
            const a = this.state.video,
              m = a && a.IsPaused(),
              d = a && a.BHasDASHStats() && this.state.bShowStats,
              u = !!(a && a.IsReplay()),
              p = this.state.bMountControls,
              B = this.state.bControlsVisible || m,
              W = !!(a && a.GetUserInputNeeded()),
              V = a == null ? void 0 : a.GetDASHPlayerStats(),
              se =
                (a == null ? void 0 : a.IsBroadcastVOD()) &&
                W &&
                this.state.strInitialCapsuleImageUrl;
            let ie = "videoContainer";
            B || (ie += " HidePlayerControls"),
              m && (ie += " VideoPaused"),
              this.state.bFullscreen && (ie += " fullscreenVideo"),
              this.props.classes && (ie += " " + this.props.classes);
            let Lt = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (Lt = Lt.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                Lt.push(
                  (0, i.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, D.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              Lt.push(
                (0, i.jsx)(
                  "div",
                  {
                    title: (0, D.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const or = p && !this.BHideVideoControls(),
              zt = p && !this.state.bFullscreen,
              rr =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, i.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: ie,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                rr &&
                  (0, i.jsx)("div", {
                    className: j().BroadcastContext,
                    children: rr,
                  }),
                u && (0, i.jsx)(Nt, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, i.jsx)(Y, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, i.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: (s = this.props.bMuted) != null ? s : !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, i.jsx)(tr, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                se &&
                  (0, i.jsx)("img", {
                    loading: "lazy",
                    className: (0, Qt.A)(
                      j().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                or &&
                  a &&
                  (0, i.jsx)(Lr, {
                    video: a,
                    actions: Lt,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                zt && (0, i.jsx)(Hr, { onClick: this.props.onRequestClose }),
                d &&
                  V &&
                  (0, i.jsx)(Ct, { stats: V, closeStats: this.CloseStats }),
                (0, i.jsx)(ur, { video: a }),
                W && a && (0, i.jsx)(Ir, { video: a }),
              ],
            });
          }
        };
        x([w.oI], ee.prototype, "BindBroadcastPlayerRef", 1),
          x([w.oI], ee.prototype, "BindVideoRef", 1),
          x([w.oI], ee.prototype, "OnMouseDown", 1),
          x([w.oI], ee.prototype, "OnMouseUp", 1),
          x([w.oI], ee.prototype, "OnMouseMove", 1),
          x([w.oI], ee.prototype, "OnMouseLeave", 1),
          x([w.oI], ee.prototype, "HideControls", 1),
          x([w.oI], ee.prototype, "UmountControls", 1),
          x([w.oI], ee.prototype, "ShowStatsView", 1),
          x([w.oI], ee.prototype, "OnContextMenu", 1),
          x([w.oI], ee.prototype, "ToggleStatsView", 1),
          x([w.oI], ee.prototype, "ShowStorePage", 1),
          x([w.oI], ee.prototype, "CloseStats", 1),
          x([w.oI], ee.prototype, "OnToggleFullscreen", 1),
          x([w.oI], ee.prototype, "OnFullscreenChange", 1),
          (ee = x([F.PA], ee));
        let Lr = class extends T.Component {
          render() {
            const { video: s } = this.props;
            if (!s) return null;
            let a = s.has_segments;
            return (0, i.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, i.jsx)(Fr, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, i.jsxs)("div", {
                  className: "videoControlsBottom" + (a ? "" : " noSegments"),
                  children: [
                    (0, i.jsx)(Ft, {
                      video: s,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, i.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, i.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, i.jsx)(kr, { video: s }),
                        (0, i.jsx)(Kr, { video: s }),
                        (0, i.jsx)(hr, {
                          video: s,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Lr = x([F.PA], Lr);
        class Hr extends T.PureComponent {
          render() {
            return this.props.onClick
              ? (0, i.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, i.jsx)(re.sED, {}),
                })
              : null;
          }
        }
        class kr extends T.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-Sr);
          }
          OnJumpForward() {
            this.props.video.JumpTime(Sr);
          }
          render() {
            let a = this.props.video,
              m = a.CanSeek();
            return (0, i.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, i.jsx)(nr, { video: a }),
                m &&
                  (0, i.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, i.jsx)(re.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, i.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Sr,
                      }),
                    ],
                  }),
                (0, i.jsx)(Or, { video: a }),
                m &&
                  (0, i.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, i.jsx)(re.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, i.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Sr,
                      }),
                    ],
                  }),
                m && (0, i.jsx)(wr, { video: a }),
              ],
            });
          }
        }
        x([w.oI], kr.prototype, "OnJumpBackward", 1),
          x([w.oI], kr.prototype, "OnJumpForward", 1);
        const Kr = (0, F.PA)((s) => {
          if (s.video.IsBroadcastClip() || s.video.IsBroadcastVOD())
            return null;
          const a = (d) => {
            s.video.JumpToLiveEdge();
          };
          let m = s.video.IsOnLiveEdge();
          return (0, i.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, i.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (m ? " isLiveEdge" : ""),
              onClick: m ? void 0 : a,
              children: [
                (0, i.jsx)(re.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, i.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, D.we)(
                    m
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let Or = class extends T.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let a = this.props.video.IsPaused();
            return (0, i.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: a ? (0, i.jsx)(re.jGG, {}) : (0, i.jsx)(re.vRz, {}),
            });
          }
        };
        x([w.oI], Or.prototype, "OnTogglePlayPause", 1), (Or = x([F.PA], Or));
        let nr = class extends T.Component {
          constructor(s) {
            super(s), Z(this, "video"), (0, L.Gn)(this), (this.video = s.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const s = this.video;
            if (!(s != null && s.has_markers)) return;
            let a = s.GetTimelineMarkers(),
              m = s.GetPlaybackTime();
            for (let d = a.length - 1; d >= 0; d--)
              if (!(a[d].nTime >= m)) return a[d].nTime;
          }
          OnJumpToPreviousMarkerClicked(s) {
            let a = this.GetPreviousMarkerTime();
            a !== void 0 && this.props.video.Seek(a - 0.2);
          }
          render() {
            let s = this.props.video.BHasMarkersOrSegments();
            return (0, i.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (s ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, i.jsx)(re.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        x([L.sH], nr.prototype, "video", 2),
          x([L.EW], nr.prototype, "has_previous_marker", 1),
          x([w.oI], nr.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (nr = x([F.PA], nr));
        let wr = class extends T.Component {
          constructor(s) {
            super(s), Z(this, "video"), (0, L.Gn)(this), (this.video = s.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const s = this.video;
            if (!(s != null && s.has_markers)) return;
            let a = s.GetTimelineMarkers(),
              m = s.GetPlaybackTime();
            for (let d = 0; d < a.length; d++)
              if (!(a[d].nTime <= m)) return a[d].nTime;
          }
          OnJumpToNextMarkerClicked(s) {
            let a = this.GetNextMarkerTime();
            a !== void 0 && this.props.video.Seek(a);
          }
          render() {
            let s = this.props.video.BHasMarkersOrSegments();
            return (0, i.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (s ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, i.jsx)(re.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        x([L.sH], wr.prototype, "video", 2),
          x([L.EW], wr.prototype, "has_next_marker", 1),
          x([w.oI], wr.prototype, "OnJumpToNextMarkerClicked", 1),
          (wr = x([F.PA], wr));
        const vr = (s) => {
          let a = () => s.onMouseEnter(s.pos);
          return (0, i.jsx)("div", {
            className: "timelineMarker",
            title: s.label,
            style: { left: s.pos + "%" },
            onMouseEnter: a,
            onMouseLeave: s.onMouseLeave,
            onMouseDown: s.onMouseDown ? s.onMouseDown : void 0,
            children: (0, i.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, i.jsx)(re.Dp6, {}),
            }),
          });
        };
        function rs(s) {
          let a = s.startPos,
            m = s.endPos,
            d = "",
            u = 1;
          return (
            a < 0 && ((u = (m - a) / 10), (a = 0), (d = " hideFront")),
            (0, i.jsxs)("div", {
              className: "STV_timelineSegment" + d,
              style: { left: a + "%", width: m - a + "%", opacity: u },
              onClick: s.onClick,
              children: [
                (0, i.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + s.color + ")" },
                }),
                (0, i.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + s.color + ")" },
                  children: s.label,
                }),
                (0, i.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + s.color + ")" },
                }),
              ],
            })
          );
        }
        let Ft = class extends T.Component {
          constructor(s) {
            super(s),
              Z(this, "m_elSlider", T.createRef()),
              Z(this, "m_rectSlider"),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(s, a) {
            var m, d;
            const u = this.m_elSlider.current;
            if (u) {
              s.persist(), (this.m_rectSlider = u.getBoundingClientRect());
              let p = {};
              a === "start"
                ? ((p = { bStartMouseDown: !0 }), s.stopPropagation())
                : a === "end"
                  ? ((p = { bEndMouseDown: !0 }), s.stopPropagation())
                  : (p = { bGrabberMouseDown: !0 }),
                this.setState(p, () => this.AdjustSliderForClientX(s.clientX)),
                (m = u.ownerDocument.defaultView) == null ||
                  m.addEventListener("mousemove", this.OnMouseMove),
                (d = u.ownerDocument.defaultView) == null ||
                  d.addEventListener("mouseup", this.OnMouseUp);
            }
          }
          OnMouseMove(s) {
            this.AdjustSliderForClientX(s.clientX);
          }
          OnMouseUp(s) {
            var a, m;
            this.state.bStartMouseDown
              ? this.setState({ bStartMouseDown: !1 })
              : this.state.bEndMouseDown
                ? this.setState({ bEndMouseDown: !1 })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                ((a = this.m_elSlider.current.ownerDocument.defaultView) ==
                  null || a.removeEventListener("mousemove", this.OnMouseMove),
                (m = this.m_elSlider.current.ownerDocument.defaultView) ==
                  null || m.removeEventListener("mouseup", this.OnMouseUp));
          }
          OnKeyDown(s) {
            s.keyCode == z.ek
              ? (this.props.video.JumpTime(-1 * Sr), s.preventDefault())
              : s.keyCode == z.JI &&
                (this.props.video.JumpTime(1 * Sr), s.preventDefault());
          }
          AdjustSliderForClientX(s) {
            const a = this.m_rectSlider;
            if (!a) return;
            let m = this.props.video,
              d = m.GetTimelineStartPos(),
              u = m.GetTimelineStartPos() + m.GetTimelineDuration(),
              p = m.GetTimeAtMousePosition(s, a, d, u);
            const B = 5;
            if (this.state.bStartMouseDown) {
              const W = Kt.OQ(p, d, m.m_editorEndTime - B);
              m.m_editorStartTime = W;
            } else if (this.state.bEndMouseDown) {
              const W = Kt.OQ(p, m.m_editorStartTime + B, u);
              m.m_editorEndTime = W;
            } else
              p != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: p });
          }
          OnMouseHoverMove(s) {
            this.AdjustHoverForClientX(s.clientX);
          }
          OnMouseHoverLeave(s) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(s) {
            var a;
            let m = this.props.video,
              d = m.GetTimelineStartPos(),
              u = m.GetTimelineStartPos() + m.GetTimelineDuration();
            this.m_rectSlider =
              (a = this.m_elSlider.current) == null
                ? void 0
                : a.getBoundingClientRect();
            let p =
              this.m_rectSlider &&
              m.GetTimeAtMousePosition(s, this.m_rectSlider, d, u);
          }
          OnSegmentClick(s) {
            this.props.video.Seek(s);
          }
          OnMarkerMouseEnter(s) {
            this.setState({ nHoverValue: s });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            var s;
            let a = this.props.video,
              m = this.state.bGrabberMouseDown,
              d = a.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                G.a0.Timeline,
              ),
              u = a.GetPercentOffsetFromTime(
                a.GetPlaybackTime(),
                G.a0.Timeline,
              ),
              p = a.GetPercentOffsetFromTime(
                a.GetVideoAvailableStartTime(),
                G.a0.Timeline,
              );
            p < 0.05 && (p = 0);
            let B = Kt.OQ(d, 0, 100).toFixed(1) + "%",
              W = Kt.OQ(u, 0, 100).toFixed(1) + "%",
              V = Kt.OQ(p, 0, 100).toFixed(1) + "%",
              se = {},
              ie = {},
              Lt = {},
              or = {};
            m
              ? ((or.left = B), (se.width = B), (ie.width = W), (Lt.width = V))
              : ((or.left = W), (ie.width = W), (Lt.width = V));
            let zt = (0, f.ap)(a.GetPlaybackTime()),
              rr = (0, f.ap)((s = this.state.nHoverValue) != null ? s : 0),
              Jt = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (Jt += " grabberDown"),
              a.IsTimelineMapActive() && (Jt += " minimapActive");
            let Tr = "";
            (d = m ? d : u),
              d > 100
                ? (Tr = " grabberOffScreenRight grabberOffscreen")
                : d < 0 && (Tr = " grabberOffScreenLeft grabberOffscreen");
            let Xr = [];
            a.GetTimelineMarkers().forEach((Pt, $r) => {
              let Vt = a.GetPercentOffsetFromTime(Pt.nTime, G.a0.Timeline);
              Vt < 0 ||
                Vt > 100 ||
                Xr.push(
                  (0, i.jsx)(
                    vr,
                    {
                      pos: Vt,
                      label: Pt.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    $r,
                  ),
                );
            });
            let Dr = [];
            a.GetTimelineSegments().forEach((Pt, $r) => {
              let Vt = a.GetPercentOffsetFromTime(Pt.nTimeStart, G.a0.Timeline);
              if (Vt > 100) return;
              let Pr = a.GetPercentOffsetFromTime(Pt.nTimeEnd, G.a0.Timeline);
              Pr < 0 ||
                Dr.push(
                  (0, i.jsx)(
                    rs,
                    {
                      startPos: Vt,
                      endPos: Pr,
                      label: Pt.strTemplateName,
                      color: Pt.color,
                      onClick: (Fs) => this.OnSegmentClick(Pt.nTimeStart),
                    },
                    $r,
                  ),
                );
            });
            const ss = a.GetPercentOffsetFromTime(
                a.m_editorStartTime,
                G.a0.Timeline,
              ),
              Jr = a.GetPercentOffsetFromTime(a.m_editorEndTime, G.a0.Timeline),
              is = this.props.bIncludeClipEditor
                ? [
                    (0, i.jsx)(
                      vr,
                      {
                        pos: ss,
                        label: (0, D.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Pt) => this.OnMouseDown(Pt, "start"),
                      },
                      "start",
                    ),
                    (0, i.jsx)(
                      vr,
                      {
                        pos: Jr,
                        label: (0, D.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Pt) => this.OnMouseDown(Pt, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, i.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, i.jsxs)("div", {
                className: Jt,
                children: [
                  (0, i.jsx)("div", { className: "DialogLabel", children: zt }),
                  (0, i.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Dr,
                  }),
                  (0, i.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, i.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, i.jsx)("div", {
                          className: "STV_timelineValue",
                          style: se,
                        }),
                        (0, i.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: ie,
                        }),
                        (0, i.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: Lt,
                        }),
                        Xr,
                        is,
                        !!this.state.hoverX &&
                          (0, i.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, i.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, i.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, i.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: rr,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, i.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: or,
                          children: (0, i.jsx)("div", {
                            className: "STV_timelineGrabber" + Tr,
                            children: (0, i.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, i.jsx)(re.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        x([w.oI], Ft.prototype, "OnMouseDown", 1),
          x([w.oI], Ft.prototype, "OnMouseMove", 1),
          x([w.oI], Ft.prototype, "OnMouseUp", 1),
          x([w.oI], Ft.prototype, "OnKeyDown", 1),
          x([w.oI], Ft.prototype, "OnMouseHoverMove", 1),
          x([w.oI], Ft.prototype, "OnMouseHoverLeave", 1),
          x([w.oI], Ft.prototype, "AdjustHoverForClientX", 1),
          x([w.oI], Ft.prototype, "OnSegmentClick", 1),
          x([w.oI], Ft.prototype, "OnMarkerMouseEnter", 1),
          x([w.oI], Ft.prototype, "OnMarkerMouseLeave", 1),
          (Ft = x([F.PA], Ft));
        let Fr = class extends T.Component {
          constructor() {
            super(...arguments), Z(this, "state", { info: null });
          }
          static getDerivedStateFromProps(s, a) {
            return (!a.info || a.info.m_steamIDBroadcast !== s.steamID) &&
              (a.info && (G.es.StopInfo(a.info), (a.info = null)), s.steamID)
              ? { info: G.es.StartInfo(s.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && G.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const s = this.props.steamID,
              a = this.props.onLocalStreamChange;
            return a && Tt.td.stream[s]
              ? (0, i.jsx)(Wr, { value: s, options: Tt.td.stream, onChange: a })
              : null;
          }
          render() {
            let { info: s } = this.state;
            if (!s) return null;
            let a = "";
            s.m_nViewerCount && (a = (0, Ur.Dq)(s.m_nViewerCount));
            let m =
                Tt.td.bValid &&
                Tt.td.stream &&
                Tt.td.stream[s.m_steamIDBroadcast],
              d =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(s.m_strAppId) > 0 || m);
            const u =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              m &&
              Tt.td.gidEvent;
            return (0, i.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, i.jsx)(Rr, {
                    className: "broadcastDetailsThumbBlur",
                    src: s.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, i.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    s &&
                      s.m_strAppTitle &&
                      (0, i.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, i.jsx)("span", {
                                className: "AppTitle",
                                children: s.m_strAppTitle,
                              }),
                              s.m_strTitle &&
                                (0, i.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", s.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          a &&
                            (0, i.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, i.jsx)(re.y_e, {}),
                                (0, D.Yp)("#Broadcast_ViewerCount", a),
                              ],
                            }),
                        ],
                      }),
                    m &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, i.jsx)("div", {
                        className: "Actions",
                        children: (0, i.jsx)("div", {
                          onClick: (p) => {
                            var B, W;
                            return (W = (B = this.props)
                              .onOpenLinkInNewWindow) == null
                              ? void 0
                              : W.call(B, p, Tt.td.link);
                          },
                          className: "BroadcastLink",
                          children: Tt.td.linkName,
                        }),
                      }),
                  ],
                }),
                u && (0, i.jsx)(Gr.m, { gidEvent: Tt.td.gidEvent }),
                d &&
                  (0, i.jsx)(zr.p, {
                    id:
                      Tt.td.bValid &&
                      Tt.td.stream &&
                      Tt.td.stream[s.m_steamIDBroadcast]
                        ? Tt.td.appID
                        : parseInt(s.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Fr = x([F.PA], Fr);
        class Wr extends T.Component {
          showContextMenu(a) {
            const { options: m, value: d, onChange: u } = this.props,
              p = Object.keys(m).map((B) =>
                (0, i.jsx)(
                  It.IK,
                  {
                    onSelected: () => u(B),
                    bChecked: B === d,
                    children: (0, D.we)(m[B]),
                  },
                  B,
                ),
              );
            (0, te.lX)((0, i.jsx)(It.tz, { children: p }), a);
          }
          render() {
            const { value: a, options: m } = this.props,
              d = m[a];
            return (0, i.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, i.jsxs)("span", { children: ["\xA0- ", (0, D.we)(d)] }),
                (0, i.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, i.jsx)(re.GB9, {}),
                }),
              ],
            });
          }
        }
        x([w.oI], Wr.prototype, "showContextMenu", 1);
        let tr = class extends T.Component {
          constructor(s) {
            super(s), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let s = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + s,
              yPosPct: 2.5 + s,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(s) {
            s.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((a, m) => {
                this.LoadLinkRegion(a, m);
              });
          }
          async LoadLinkRegion(s, a) {
            let m = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: s.left,
              yPosPct: s.top,
              widthPct: s.width,
              heightPct: s.height,
              link_url: s.url,
              link_description: s.link_description,
              link_index: s.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            var s, a;
            let m;
            m = { links: [] };
            for (let d = 0; d < this.state.sizableRegion.length; d++) {
              let u;
              (u = {
                left: Math.floor(this.state.sizableRegion[d].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[d].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[d].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[d].heightPct * 100),
                url: this.state.sizableRegion[d].link_url,
                link_description: this.state.sizableRegion[d].link_description,
                link_index: d,
              }),
                m.links.push(u);
            }
            (a = (s = this.props).onSaveLinkRegions) == null || a.call(s, m);
          }
          async DeleteRegion(s) {
            this.state.sizableRegion.splice(s, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(s, a) {
            const m = [...this.state.sizableRegion];
            (m[s] = a),
              this.setState({ sizableRegion: m }, () => this.OnSaveRegions());
          }
          render() {
            return (0, i.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, i.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((s) => {
                          const a = (0, es.p)(s.url);
                          return (0, i.jsx)(
                            yr.uU,
                            {
                              href: s.url,
                              bForceExternal: a,
                              bUseLinkFilter: a,
                              children: (0, i.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: s.left + "%",
                                  top: s.top + "%",
                                  width: s.width + "%",
                                  height: s.height + "%",
                                },
                                children: (0, i.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [s.link_description, " "],
                                }),
                              }),
                            },
                            s.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((s, a) =>
                        (0, i.jsx)(
                          Mr.I,
                          {
                            index: a,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: s.xPosPct,
                            yPosPct: s.yPosPct,
                            widthPct: s.widthPct,
                            heightPct: s.heightPct,
                            link_url: s.link_url,
                            link_description: s.link_description,
                          },
                          a * 100 + s.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, i.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, D.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, i.jsx)("div", {
                    children: (0, D.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        x([w.oI], tr.prototype, "AddLinkRegion", 1),
          x([w.oI], tr.prototype, "LoadLinkRegion", 1),
          x([w.oI], tr.prototype, "OnSaveRegions", 1),
          x([w.oI], tr.prototype, "DeleteRegion", 1),
          x([w.oI], tr.prototype, "UpdatePanel", 1),
          (tr = x([F.PA], tr));
      },
      21822: (Gt, Yt, h) => {
        "use strict";
        h.d(Yt, { q: () => gi });
        var i = h(41735),
          L = h.n(i),
          F = h(14947),
          T = h(90828),
          te = h(72604),
          z = h(35038),
          Ut = h(84110),
          G = h(13018),
          Ht = h(76559),
          w = h(90711),
          l = h(80613),
          n = h.n(l),
          t = h(75245),
          X = Object.defineProperty,
          H = (_, e, r) =>
            e in _
              ? X(_, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (_[e] = r),
          c = (_, e, r) => H(_, typeof e != "symbol" ? e + "" : e, r);
        function Y(_) {
          return "unknown EBroadcastImageType ( " + _ + " )";
        }
        function It(_) {
          return "unknown EGetGamesAlgorithm ( " + _ + " )";
        }
        function _t(_) {
          return "unknown EGetChannelsAlgorithm ( " + _ + " )";
        }
        function Dt(_) {
          return "unknown ESteamTVContentTemplate ( " + _ + " )";
        }
        const k = class ae extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.unique_name || t.Sg(ae.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ae();
            return ae.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        };
        c(k, "sm_m"), c(k, "sm_mbf");
        let J = k;
        const q = class ne extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.broadcast_channel_id || t.Sg(ne.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ne();
            return ne.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        };
        c(q, "sm_m"), c(q, "sm_mbf");
        let I = q;
        const g = class oe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.unique_name || t.Sg(oe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new oe();
            return oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        };
        c(g, "sm_m"), c(g, "sm_mbf");
        let S = g;
        const O = class le extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.broadcast_channel_id || t.Sg(le.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new le();
            return le.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        };
        c(O, "sm_m"), c(O, "sm_mbf");
        let R = O;
        const xt = class me extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.broadcast_channel_id || t.Sg(me.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(me.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new me();
            return me.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        };
        c(xt, "sm_m"), c(xt, "sm_mbf");
        let K = xt;
        class Q extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Q();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Q();
            return Q.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        const sr = class ce extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.broadcast_channel_id || t.Sg(ce.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ce.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ce();
            return ce.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        };
        c(sr, "sm_m"), c(sr, "sm_mbf");
        let dr = sr;
        const Qt = class de extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.unique_name || t.Sg(de.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new de();
            return de.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        };
        c(Qt, "sm_m"), c(Qt, "sm_mbf");
        let kt = Qt;
        const ir = class ue extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.broadcast_channel_id || t.Sg(ue.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    undo: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ue();
            return ue.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        };
        c(ir, "sm_m"), c(ir, "sm_mbf");
        let Rr = ir;
        const zr = class he extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.replace_image_hash || t.Sg(he.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(he.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new he();
            return he.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(he.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(he.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        };
        c(zr, "sm_m"), c(zr, "sm_mbf");
        let Gr = zr;
        const Mr = class ge extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.broadcast_channel_id || t.Sg(ge.M()),
              l.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ge.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ge();
            return ge.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        };
        c(Mr, "sm_m"), c(Mr, "sm_mbf");
        let re = Mr;
        const yr = class pe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.images || t.Sg(pe.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { images: { n: 1, c: Ur, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(pe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new pe();
            return pe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        };
        c(yr, "sm_m"), c(yr, "sm_mbf");
        let Ot = yr;
        const D = class Be extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.image_type || t.Sg(Be.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    image_type: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Be.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Be();
            return Be.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        };
        c(D, "sm_m"), c(D, "sm_mbf");
        let Ur = D;
        const Kt = class fe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.broadcast_channel_id || t.Sg(fe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(fe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new fe();
            return fe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        };
        c(Kt, "sm_m"), c(Kt, "sm_mbf");
        let Nr = Kt;
        const Tt = class be extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.links || t.Sg(be.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: { links: { n: 1, c: j, r: !0, q: !0 } },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(be.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new be();
            return be.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        };
        c(Tt, "sm_m"), c(Tt, "sm_mbf");
        let f = Tt;
        const b = class Se extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.link_index || t.Sg(Se.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    link_index: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Se();
            return Se.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        };
        c(b, "sm_m"), c(b, "sm_mbf");
        let j = b;
        const P = class we extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.broadcast_channel_id || t.Sg(we.M()),
              l.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    links: { n: 2, c: Et, r: !0, q: !0 },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(we.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new we();
            return we.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(we.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(we.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        };
        c(P, "sm_m"), c(P, "sm_mbf");
        let U = P;
        const A = class Me extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.link_index || t.Sg(Me.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    link_index: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Me.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Me();
            return Me.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        };
        c(A, "sm_m"), c(A, "sm_mbf");
        let Et = A;
        class Nt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Nt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Nt();
            return Nt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        const ur = class ye extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.broadcast_channel_id || t.Sg(ye.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ye.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ye();
            return ye.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        };
        c(ur, "sm_m"), c(ur, "sm_mbf");
        let Ir = ur;
        const Cr = class Ce extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.is_live || t.Sg(Ce.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    is_live: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ce.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ce();
            return Ce.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        };
        c(Cr, "sm_m"), c(Cr, "sm_mbf");
        let Ar = Cr;
        const At = class ve extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.broadcast_channel_id || t.Sg(ve.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    appid: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_live: { n: 16, br: t.qM.readBool, bw: t.gp.writeBool },
                    language: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ve.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ve();
            return ve.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        };
        c(At, "sm_m"), c(At, "sm_mbf");
        let Ct = At;
        class Xt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Xt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Xt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Xt();
            return Xt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        const br = class Te extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.results || t.Sg(Te.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: { results: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Te();
            return Te.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        };
        c(br, "sm_m"), c(br, "sm_mbf");
        let Zr = br;
        class Zt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Zt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Zt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Zt();
            return Zt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        const qr = class Re extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.results || t.Sg(Re.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: { results: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Re();
            return Re.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        };
        c(qr, "sm_m"), c(qr, "sm_mbf");
        let Rt = qr;
        const jt = class ze extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.broadcast_channel_id || t.Sg(ze.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ze.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ze();
            return ze.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        };
        c(jt, "sm_m"), c(jt, "sm_mbf");
        let hr = jt;
        const _r = class Ie extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.is_followed || t.Sg(Ie.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ie();
            return Ie.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        };
        c(_r, "sm_m"), c(_r, "sm_mbf");
        let ar = _r;
        const er = class _e extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.broadcast_channel_id || t.Sg(_e.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_e.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new _e();
            return _e.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        };
        c(er, "sm_m"), c(er, "sm_mbf");
        let es = er;
        const jr = class je extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.is_subscribed || t.Sg(je.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(je.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new je();
            return je.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        };
        c(jr, "sm_m"), c(jr, "sm_mbf");
        let ts = jr;
        const Er = class xe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.broadcast_channel_id || t.Sg(xe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(xe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new xe();
            return xe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        };
        c(Er, "sm_m"), c(Er, "sm_mbf");
        let x = Er;
        class Z extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Z();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Z();
            return Z.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        const xr = class Oe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.broadcast_channel_id || t.Sg(Oe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Oe();
            return Oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        };
        c(xr, "sm_m"), c(xr, "sm_mbf");
        let Sr = xr;
        const ee = class Fe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.is_followed || t.Sg(Fe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Fe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Fe();
            return Fe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        };
        c(ee, "sm_m"), c(ee, "sm_mbf");
        let Lr = ee;
        const Hr = class We extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.appid || t.Sg(We.M()),
              l.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    image: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channels: { n: 5, c: Ct, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = t.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(We.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new We();
            return We.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(We.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(We.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        };
        c(Hr, "sm_m"), c(Hr, "sm_mbf");
        let kr = Hr;
        const Kr = class De extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.appid || t.Sg(De.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    algorithm: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(De.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new De();
            return De.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(De.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(De.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        };
        c(Kr, "sm_m"), c(Kr, "sm_mbf");
        let Or = Kr;
        const nr = class Pe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.results || t.Sg(Pe.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: { results: { n: 1, c: kr, r: !0, q: !0 } },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Pe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Pe();
            return Pe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        };
        c(nr, "sm_m"), c(nr, "sm_mbf");
        let wr = nr;
        const vr = class Ve extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.algorithm || t.Sg(Ve.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    algorithm: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ve.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ve();
            return Ve.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        };
        c(vr, "sm_m"), c(vr, "sm_mbf");
        let rs = vr;
        const Ft = class Ge extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.results || t.Sg(Ge.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: { results: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ge.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ge();
            return Ge.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        };
        c(Ft, "sm_m"), c(Ft, "sm_mbf");
        let Fr = Ft;
        const Wr = class Ue extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.broadcast_channel_id || t.Sg(Ue.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ue();
            return Ue.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        };
        c(Wr, "sm_m"), c(Wr, "sm_mbf");
        let tr = Wr;
        const s = class Ne extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.broadcasters || t.Sg(Ne.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: { broadcasters: { n: 1, c: d, r: !0, q: !0 } },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ne();
            return Ne.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        };
        c(s, "sm_m"), c(s, "sm_mbf");
        let a = s;
        const m = class Ae extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.steamid || t.Sg(Ae.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ae();
            return Ae.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        };
        c(m, "sm_m"), c(m, "sm_mbf");
        let d = m;
        const u = class qe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.issuer_steamid || t.Sg(qe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    name: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(qe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new qe();
            return qe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(qe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(qe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        };
        c(u, "sm_m"), c(u, "sm_mbf");
        let p = u;
        const B = class Ee extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.broadcast_channel_id || t.Sg(Ee.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    undo: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ee();
            return Ee.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        };
        c(B, "sm_m"), c(B, "sm_mbf");
        let W = B;
        class V extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new V();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new V();
            return V.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        const se = class Le extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.broadcast_channel_id || t.Sg(Le.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Le();
            return Le.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        };
        c(se, "sm_m"), c(se, "sm_mbf");
        let ie = se;
        const Lt = class He extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.results || t.Sg(He.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: { results: { n: 1, c: p, r: !0, q: !0 } },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(He.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new He();
            return He.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(He.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(He.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        };
        c(Lt, "sm_m"), c(Lt, "sm_mbf");
        let or = Lt;
        const zt = class ke extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.broadcast_channel_id || t.Sg(ke.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ke.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ke();
            return ke.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ke.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ke.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        };
        c(zt, "sm_m"), c(zt, "sm_mbf");
        let rr = zt;
        class Jt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Jt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Jt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Jt();
            return Jt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        const Tr = class Ke extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.broadcast_channel_id || t.Sg(Ke.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ke.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ke();
            return Ke.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ke.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ke.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        };
        c(Tr, "sm_m"), c(Tr, "sm_mbf");
        let Xr = Tr;
        const Dr = class Xe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.steamid || t.Sg(Xe.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = t.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Xe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Xe();
            return Xe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        };
        c(Dr, "sm_m"), c(Dr, "sm_mbf");
        let ss = Dr;
        const Jr = class Je extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.results || t.Sg(Je.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: { results: { n: 1, c: ss, r: !0, q: !0 } },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = t.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Je.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Je();
            return Je.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        };
        c(Jr, "sm_m"), c(Jr, "sm_mbf");
        let is = Jr;
        const Pt = class $e extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.broadcast_channel_id || t.Sg($e.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    word: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($e.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new $e();
            return $e.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        };
        c(Pt, "sm_m"), c(Pt, "sm_mbf");
        let $r = Pt;
        class Vt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Vt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Vt();
            return Vt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        const Pr = class Ye extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.broadcast_channel_id || t.Sg(Ye.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ye.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ye();
            return Ye.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        };
        c(Pr, "sm_m"), c(Pr, "sm_mbf");
        let Fs = Pr;
        const as = class Qe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.results || t.Sg(Qe.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Qe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Qe();
            return Qe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Qe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Qe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        };
        c(as, "sm_m"), c(as, "sm_mbf");
        let Us = as;
        const ns = class Ze extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.broadcast_channel_id || t.Sg(Ze.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ze.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ze();
            return Ze.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        };
        c(ns, "sm_m"), c(ns, "sm_mbf");
        let Ws = ns;
        const os = class et extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.chat_id || t.Sg(et.M()),
              l.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(et.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new et();
            return et.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(et.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(et.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        };
        c(os, "sm_m"), c(os, "sm_mbf");
        let Ns = os;
        const ls = class tt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.term || t.Sg(tt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    term: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(tt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new tt();
            return tt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(tt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(tt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        };
        c(ls, "sm_m"), c(ls, "sm_mbf");
        let As = ls;
        const ms = class rt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.results || t.Sg(rt.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { results: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(rt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new rt();
            return rt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(rt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(rt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        };
        c(ms, "sm_m"), c(ms, "sm_mbf");
        let qs = ms;
        class gr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return gr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new gr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new gr();
            return gr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        const cs = class st extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.stream_live_email || t.Sg(st.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(st.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new st();
            return st.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(st.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(st.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        };
        c(cs, "sm_m"), c(cs, "sm_mbf");
        let Es = cs;
        const ds = class it extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.stream_live_email || t.Sg(it.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(it.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new it();
            return it.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(it.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(it.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        };
        c(ds, "sm_m"), c(ds, "sm_mbf");
        let Ls = ds;
        class pr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return pr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new pr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new pr();
            return pr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class Br extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Br.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Br();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Br();
            return Br.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        const us = class at extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.results || t.Sg(at.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: { results: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(at.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new at();
            return at.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(at.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(at.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        };
        c(us, "sm_m"), c(us, "sm_mbf");
        let Hs = us;
        const hs = class nt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.broadcasts || t.Sg(nt.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: { broadcasts: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(nt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new nt();
            return nt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(nt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(nt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        };
        c(hs, "sm_m"), c(hs, "sm_mbf");
        let ks = hs;
        const gs = class ot extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.broadcasts || t.Sg(ot.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    broadcasts: { n: 1, c: Ct, r: !0, q: !0 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = t.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ot.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ot();
            return ot.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ot.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ot.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        };
        c(gs, "sm_m"), c(gs, "sm_mbf");
        let Ks = gs;
        const ps = class lt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.appid || t.Sg(lt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast: { n: 3, c: Ct },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(lt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new lt();
            return lt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(lt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(lt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        };
        c(ps, "sm_m"), c(ps, "sm_mbf");
        let Xs = ps;
        const Bs = class mt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.entries || t.Sg(mt.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    entries: { n: 1, c: Xs, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = t.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(mt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new mt();
            return mt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(mt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(mt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        };
        c(Bs, "sm_m"), c(Bs, "sm_mbf");
        let Js = Bs;
        const fs = class ct extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.broadcasts || t.Sg(ct.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    broadcasts: { n: 1, c: Ct, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ct.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ct();
            return ct.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ct.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ct.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        };
        c(fs, "sm_m"), c(fs, "sm_mbf");
        let $s = fs;
        const bs = class dt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.broadcasts || t.Sg(dt.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    broadcasts: { n: 1, c: Ct, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(dt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new dt();
            return dt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(dt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(dt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        };
        c(bs, "sm_m"), c(bs, "sm_mbf");
        let Ys = bs;
        const Ss = class ut extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.broadcast || t.Sg(ut.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    broadcast: { n: 1, c: Ct },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = t.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ut.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ut();
            return ut.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ut.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ut.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        };
        c(Ss, "sm_m"), c(Ss, "sm_mbf");
        let Qs = Ss;
        const ws = class ht extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.broadcast || t.Sg(ht.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    broadcast: { n: 1, c: Ct },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ht.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ht();
            return ht.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ht.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ht.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        };
        c(ws, "sm_m"), c(ws, "sm_mbf");
        let Zs = ws;
        const Ms = class gt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.title || t.Sg(gt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(gt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new gt();
            return gt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(gt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(gt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        };
        c(Ms, "sm_m"), c(Ms, "sm_mbf");
        let ei = Ms;
        const ys = class pt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.template_type || t.Sg(pt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    template_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    takeover: { n: 2, c: ks },
                    single_game: { n: 3, c: Ks },
                    game_list: { n: 4, c: Js },
                    quick_explore: { n: 5, c: $s },
                    conveyor_belt: { n: 6, c: Ys },
                    watch_party: { n: 7, c: Qs },
                    developer: { n: 8, c: Zs },
                    event: { n: 9, c: ei },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(pt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new pt();
            return pt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(pt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(pt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        };
        c(ys, "sm_m"), c(ys, "sm_mbf");
        let ti = ys;
        class fr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return fr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new fr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new fr();
            return fr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        const Cs = class Bt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.rows || t.Sg(Bt.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: { rows: { n: 1, c: ti, r: !0, q: !0 } },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = t.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Bt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Bt();
            return Bt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Bt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Bt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        };
        c(Cs, "sm_m"), c(Cs, "sm_mbf");
        let ri = Cs;
        const vs = class ft extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.broadcast_channel_id || t.Sg(ft.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = t.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ft.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ft();
            return ft.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ft.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ft.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        };
        c(vs, "sm_m"), c(vs, "sm_mbf");
        let si = vs;
        const Ts = class bt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.broadcast_clip_id || t.Sg(bt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(bt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new bt();
            return bt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(bt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(bt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        };
        c(Ts, "sm_m"), c(Ts, "sm_mbf");
        let ii = Ts;
        const Rs = class St extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.clips || t.Sg(St.M()),
              l.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    clips: { n: 1, c: ii, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(St.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new St();
            return St.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(St.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(St.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        };
        c(Rs, "sm_m"), c(Rs, "sm_mbf");
        let ai = Rs;
        const zs = class wt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.cheer_type || t.Sg(wt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(wt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new wt();
            return wt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(wt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(wt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        };
        c(zs, "sm_m"), c(zs, "sm_mbf");
        let ni = zs;
        const Is = class Mt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.app_id || t.Sg(Mt.M()),
              l.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: ni, r: !0, q: !0 },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = t.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Mt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Mt();
            return Mt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Mt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Mt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        };
        c(Is, "sm_m"), c(Is, "sm_mbf");
        let oi = Is;
        const _s = class yt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.aggregation_delay_ms || t.Sg(yt.M()),
              l.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(yt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new yt();
            return yt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(yt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(yt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        };
        c(_s, "sm_m"), c(_s, "sm_mbf");
        let li = _s;
        var Yr;
        ((_) => {
          function e(y, C, v) {
            return y.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, z.I8)(J, C, v),
              I,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.CreateBroadcastChannel = e;
          function r(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, z.I8)(S, C, v),
              R,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetBroadcastChannelID = r;
          function o(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, z.I8)(K, C, v),
              Q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.SetBroadcastChannelProfile = o;
          function M(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, z.I8)(dr, C, v),
              kt,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetBroadcastChannelProfile = M;
          function N(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, z.I8)(Rr, C, v),
              Gr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.SetBroadcastChannelImage = N;
          function $(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, z.I8)(re, C, v),
              Ot,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetBroadcastChannelImages = $;
          function cr(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, z.I8)(U, C, v),
              Nt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.SetBroadcastChannelLinkRegions = cr;
          function $t(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, z.I8)(Nr, C, v),
              f,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetBroadcastChannelLinks = $t;
          function qt(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, z.I8)(tr, C, v),
              a,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetBroadcastChannelBroadcasters = qt;
          function pi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, z.I8)(Xt, C, v),
              Zr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetFollowedChannels = pi;
          function Bi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, z.I8)(Zt, C, v),
              Rt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetSubscribedChannels = Bi;
          function fi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, z.I8)(Ir, C, v),
              Ar,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetBroadcastChannelStatus = fi;
          function bi(y, C, v) {
            return y.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, z.I8)(hr, C, v),
              ar,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.FollowBroadcastChannel = bi;
          function Si(y, C, v) {
            return y.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, z.I8)(es, C, v),
              ts,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.SubscribeBroadcastChannel = Si;
          function wi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, z.I8)(si, C, v),
              ai,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetBroadcastChannelClips = wi;
          function Mi(y, C, v) {
            return y.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, z.I8)(x, C, v),
              Z,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.ReportBroadcastChannel = Mi;
          function yi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, z.I8)(Sr, C, v),
              Lr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetBroadcastChannelInteraction = yi;
          function Ci(y, C, v) {
            return y.SendMsg("SteamTV.GetGames#1", (0, z.I8)(Or, C, v), wr, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetGames = Ci;
          function vi(y, C, v) {
            return y.SendMsg("SteamTV.GetChannels#1", (0, z.I8)(rs, C, v), Fr, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetChannels = vi;
          function Ti(y, C, v) {
            return y.SendMsg("SteamTV.AddChatBan#1", (0, z.I8)(W, C, v), V, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.AddChatBan = Ti;
          function Ri(y, C, v) {
            return y.SendMsg("SteamTV.GetChatBans#1", (0, z.I8)(ie, C, v), or, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetChatBans = Ri;
          function zi(y, C, v) {
            return y.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, z.I8)(rr, C, v),
              Jt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.AddChatModerator = zi;
          function Ii(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, z.I8)(Xr, C, v),
              is,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          _.GetChatModerators = Ii;
          function _i(y, C, v) {
            return y.SendMsg("SteamTV.AddWordBan#1", (0, z.I8)($r, C, v), Vt, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.AddWordBan = _i;
          function ji(y, C, v) {
            return y.SendMsg("SteamTV.GetWordBans#1", (0, z.I8)(Fs, C, v), Us, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetWordBans = ji;
          function xi(y, C, v) {
            return y.SendMsg("SteamTV.JoinChat#1", (0, z.I8)(Ws, C, v), Ns, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.JoinChat = xi;
          function Oi(y, C, v) {
            return y.SendMsg("SteamTV.Search#1", (0, z.I8)(As, C, v), qs, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          _.Search = Oi;
          function Fi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, z.I8)(gr, C, v),
              Es,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetSteamTVUserSettings = Fi;
          function Wi(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, z.I8)(Ls, C, v),
              pr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.SetSteamTVUserSettings = Wi;
          function Di(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, z.I8)(Br, C, v),
              Hs,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          _.GetMyBroadcastChannels = Di;
          function Pi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, z.I8)(fr, C, v),
              ri,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          _.GetHomePageContents = Pi;
          function Vi(y, C, v) {
            return y.SendMsg("SteamTV.AppCheer#1", (0, z.I8)(oi, C, v), li, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.AppCheer = Vi;
        })(Yr || (Yr = {}));
        var js = h(27066),
          Ds = h(8323),
          Wt = h(18210),
          vt = h(3166),
          Ps = h(24544),
          Vs = Object.defineProperty,
          mi = Object.getOwnPropertyDescriptor,
          ci = (_, e, r) =>
            e in _
              ? Vs(_, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (_[e] = r),
          lr = (_, e, r, o) => {
            for (
              var M = o > 1 ? void 0 : o ? mi(e, r) : e, N = _.length - 1, $;
              N >= 0;
              N--
            )
              ($ = _[N]) && (M = (o ? $(e, r, M) : $(M)) || M);
            return o && M && Vs(e, r, M), M;
          },
          E = (_, e, r) => ci(_, typeof e != "symbol" ? e + "" : e, r);
        const di = 4,
          ui = 500,
          hi = 10,
          xs = class Qr {
            constructor() {
              E(this, "m_mapChats", new Map()), (0, F.Gn)(this);
            }
            GetChat(e, r) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(r);
            }
            GetOrCreateChat(e, r) {
              let o = this.GetChat(e, r);
              return o || ((o = new mr()), this.m_mapChats.set(e || r, o)), o;
            }
            static Get() {
              return (
                Qr.s_Singleton || (Qr.s_Singleton = new Qr()), Qr.s_Singleton
              );
            }
          };
        E(xs, "s_Singleton"), lr([F.sH], xs.prototype, "m_mapChats", 2);
        let gi = xs;
        class mr {
          constructor() {
            E(this, "m_ulBroadcastChannelID", ""),
              E(this, "m_ulChatID", ""),
              E(this, "m_strFlairGroupID", ""),
              E(this, "m_bAutoScroll", !0),
              E(this, "m_ulBroadcastID", ""),
              E(this, "m_ulBroadcastSteamID", ""),
              E(this, "m_tsFirstRequest", null),
              E(this, "m_nFromFirstRequestMS", 0),
              E(this, "m_nNextChatTS", 0),
              E(this, "m_cConsecutiveErrors", 0),
              E(this, "m_nNudgeFactorMS", 0),
              E(this, "m_nLastSleepMS", 0),
              E(this, "m_bReconnecting", !1),
              E(this, "m_strChatURL"),
              E(this, "m_webApiToken"),
              E(this, "m_unInstanceID", Math.floor(Math.random() * 4294967296)),
              E(this, "m_strUserSteamID", ""),
              E(this, "m_regexUserEmoticons", null),
              E(this, "m_chatScheduledFunc", null),
              E(this, "m_webAPIInterface", null),
              E(this, "m_textFilterStore", null),
              E(this, "m_bHasAddedWelcomeChat", !1),
              E(this, "m_mapMutedUsers", {}),
              E(this, "m_mapChannelModeratorUsers", new Map()),
              E(this, "m_mapBroadcastModeratorUsers", new Map()),
              E(this, "m_nRateLimitSeconds", 0),
              E(this, "m_bRateLimited", !1),
              E(this, "m_rgChatMessages", []),
              E(this, "m_rgAnnouncements", []),
              E(this, "m_latestAnnouncement", null),
              (0, F.Gn)(this),
              (this.m_webAPIInterface = new G.D(
                vt.TS.WEBAPI_BASE_URL,
                vt.iA.webapi_token,
              ));
          }
          InitTextFilter() {
            this.m_textFilterStore = new Ps.s({ BIsFriend: (0, Ps.Q)() });
            let e = 0;
            vt.iA.steamid !== "" &&
              (e = new Ht.b(vt.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(e, null, new Ut.A());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          StartForSteamID(e, r) {
            (this.m_webAPIInterface = new G.D(
              vt.TS.WEBAPI_BASE_URL,
              vt.iA.webapi_token,
            )),
              (this.m_ulBroadcastSteamID = e),
              (this.m_ulBroadcastID = r),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(e) {
            (this.m_webAPIInterface = new G.D(
              vt.TS.WEBAPI_BASE_URL,
              vt.iA.webapi_token,
            )),
              (this.m_ulBroadcastChannelID = e),
              (this.m_strUserSteamID = vt.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(e) {
            const r = e.trim();
            if (r.length != 0)
              try {
                let o, M, N;
                if (this.m_webApiToken) {
                  const $ = new FormData();
                  $.append("chat_id", this.m_ulChatID),
                    $.append("message", r),
                    $.append("instance_id", this.m_unInstanceID.toString()),
                    (M = await L().post(
                      `${vt.TS.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      $,
                    )),
                    (N = M.data && M.data.response);
                } else {
                  const $ = z.w.Init(w.Lw);
                  $.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: r,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (o = await w.DK.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      $,
                    )),
                    (N = {
                      result: o.GetEResult(),
                      cooldown_time_seconds: o.Body().cooldown_time_seconds(),
                      in_game: o.Body().in_game(),
                      persona_name: o.Body().persona_name(),
                    });
                }
                if (N && N.result && N.result != te.R) {
                  let $ = "";
                  N.result == te.f4
                    ? ($ = (0, Wt.we)("#BroadcastChat_YouMuted"))
                    : N.result == te.h_
                      ? ($ = (0, Wt.we)(
                          "#BroadcastChat_Cooldown",
                          N.cooldown_time_seconds,
                        ))
                      : ($ = (0, Wt.we)("#BroadcastChat_FailedToSendMsg", r)),
                    this.m_rgChatMessages.push({
                      type: T.X8.Error,
                      msg: $,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: N.in_game,
                      persona_name: N.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = N.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: T.X8.Error,
                  msg: (0, Wt.we)("#BroadcastChat_FailedToSendMsg", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(e) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const r = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, vt.KC)(),
                },
                o = await L().get(
                  `${vt.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: r,
                    withCredentials: !0,
                    cancelToken: e == null ? void 0 : e.token,
                  },
                );
              (!e || !e.token.reason) &&
                (0, F.h5)(() => {
                  const M = o.data;
                  (this.m_strChatURL = M.view_url_template),
                    (this.m_ulChatID = M.chat_id),
                    (this.m_strFlairGroupID =
                      M.flair_group_ids && M.flair_group_ids[0]),
                    M.blocked && console.log("User is blocked from chat"),
                    M.steamid && (this.m_strUserSteamID = M.steamid),
                    M.token && (this.m_webApiToken = M.token),
                    M.emoticons && this.SetOwnedEmoticons(M.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: T.X8.Notification,
                        msg: (0, Wt.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    M.moderators_steamid &&
                      M.moderators_steamid.forEach((N) =>
                        this.m_mapBroadcastModeratorUsers.set(N, !0),
                      ),
                    (this.m_chatScheduledFunc = new Ds.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (r) {
              console.error(r), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const e = z.w.Init(Ws);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let r = await Yr.JoinChat(
                this.m_webAPIInterface.GetServiceTransport(),
                e,
              );
              if (!r.Body().chat_id || !r.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = r.Body().view_url_template()),
                (this.m_ulChatID = r.Body().chat_id()),
                (this.m_strFlairGroupID =
                  r.Body().flair_group_ids() && r.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: T.X8.Notification,
                  msg: (0, Wt.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Ds.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const e = z.w.Init(Xr);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const o = (
                await Yr.GetChatModerators(
                  this.m_webAPIInterface.GetServiceTransport(),
                  e,
                )
              )
                .Body()
                .results(),
              M = new Map();
            o.forEach((N) => {
              M.set(N.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = M);
          }
          ReplaceChatAnnouncementIfAny(e) {
            var r;
            ((r = e.announcements) == null ? void 0 : r.length) > 0
              ? ((this.m_rgAnnouncements = e.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const e = {},
              r = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            r == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (e.t = this.m_nNextChatTS);
            try {
              const M = (await L().get(r, { params: e })).data;
              this.m_cConsecutiveErrors = 0;
              const N = M.messages
                .map(($t) => ({
                  ...$t,
                  type: T.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter(($t) => !this.IsUserMutedLocally($t.steamid));
              this.m_rgChatMessages.push(...N),
                this.ReplaceChatAnnouncementIfAny(M);
              const $ = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > $ &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - $,
                  ),
                M.muted)
              )
                for (const $t of M.muted) {
                  const qt =
                    $t.muted == this.m_strUserSteamID
                      ? (0, Wt.we)("#BroadcastChat_YouMuted", $t.persona_name)
                      : (0, Wt.we)("#BroadcastChat_UserMuted", $t.persona_name);
                  this.m_rgChatMessages.push({
                    type: T.X8.Notification,
                    msg: qt,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (M.remove_msgs)
                for (const $t of M.remove_msgs)
                  this.RemoveUserMessagesLocal($t.steamid);
              let cr = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                M.initial_delay
              ) {
                if (M.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + M.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = M.next_request),
                  (cr = M.initial_delay);
              } else {
                if (M.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  M.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = M.next_request),
                  (cr =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = cr),
                cr < 0 && (cr = 0),
                this.m_chatScheduledFunc.Schedule(cr, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += hi),
                this.m_cConsecutiveErrors >= di)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: T.X8.Error,
                    msg: (0, Wt.we)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(ui, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(e) {
            let r = [];
            for (let M = 0; M < e.length; M++) {
              let N = e[M];
              N.length >= 2 && N[0] == ":"
                ? r.push(N.substr(1, N.length - 2))
                : r.push(N);
            }
            let o = ":(" + r.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(o, "g");
          }
          async UpdateBroadcastChatModerator(e, r, o) {
            {
              const M = new FormData();
              M.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                M.append("moderatorsteamid", e),
                M.append("bAdd", r ? "1" : "0"),
                M.append("sessionid", (0, vt.KC)());
              try {
                await L().post(
                  `${vt.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  M,
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, r);
                const N = (0, Wt.we)(
                  r
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  o,
                );
                this.m_rgChatMessages.push({ type: T.X8.Notification, msg: N });
              } catch {
                const N = (0, Wt.we)(
                  r
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  o,
                );
                this.m_rgChatMessages.push({ type: T.X8.Error, msg: N });
              }
            }
          }
          async UpdateUserChatBan(e, r, o, M, N, $) {
            const cr = this.m_ulBroadcastSteamID,
              $t = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const qt = z.w.Init(W);
              qt.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: o * 3600,
                permanent: M,
                undo: $,
              }),
                await Yr.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  qt,
                );
            } else {
              const qt = new FormData();
              qt.append("broadcaststeamid", cr),
                qt.append("issuersteamid", $t),
                qt.append("chattersteamid", e),
                qt.append("bantype", r),
                qt.append("duration", o.toString()),
                qt.append("perm", M ? "1" : "0"),
                qt.append("sessionid", (0, vt.KC)());
              try {
                await L().post(
                  `${vt.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  qt,
                ),
                  r == w.sW.rx
                    ? delete this.m_mapMutedUsers[e]
                    : (this.m_mapMutedUsers[e] = N);
              } catch {
                console.log("Failed to update mute for " + N);
              }
            }
          }
          async MuteUserForSession(e, r) {
            if (e == this.m_strUserSteamID || this.m_ulBroadcastSteamID == e)
              return;
            let o = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[e]) {
              this.m_mapMutedUsers[e] = r;
              try {
                if (this.m_webApiToken) {
                  const M = new FormData();
                  M.append("chat_id", this.m_ulChatID),
                    M.append("user_steamid", e),
                    M.append("muted", "1"),
                    await L().post(
                      `${vt.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      M,
                    );
                } else {
                  const M = z.w.Init(w.hW);
                  M.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !0,
                  }),
                    await w.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      M,
                    );
                }
              } catch {
                o &&
                  (this.m_rgChatMessages.push({
                    type: T.X8.Error,
                    msg: (0, Wt.we)("#BroadcastChat_UserMuteFailed", r),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[e]);
              }
            }
            o ||
              this.m_rgChatMessages.push({
                type: T.X8.Notification,
                msg: (0, Wt.we)("#BroadcastChat_UserMutedLocal", r),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(e, r) {
            if (e == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                if (this.m_webApiToken) {
                  const M = new FormData();
                  M.append("chat_id", this.m_ulChatID),
                    M.append("user_steamid", e),
                    M.append("muted", "0"),
                    await L().post(
                      `${vt.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      M,
                    );
                } else {
                  const M = z.w.Init(w.hW);
                  M.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !1,
                  }),
                    await w.DK.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      M,
                    );
                }
                this.m_rgChatMessages.push({
                  type: T.X8.Notification,
                  msg: (0, Wt.we)("#BroadcastChat_UserUnmutedLocal", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch {
                this.m_rgChatMessages.push({
                  type: T.X8.Error,
                  msg: (0, Wt.we)("#BroadcastChat_UserUnmuteFailed", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: T.X8.Notification,
                msg: (0, Wt.we)("#BroadcastChat_UserUnmutedLocal", r),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(e) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (r) => r.steamid !== e,
            );
          }
          async RemoveUserMessagesServer(e, r) {
            if (e != this.m_strUserSteamID)
              try {
                if (this.m_webApiToken) {
                  const o = new FormData();
                  o.append("chat_id", this.m_ulChatID),
                    o.append("user_steamid", e),
                    await L().post(
                      `${vt.TS.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      o,
                    );
                } else {
                  const o = z.w.Init(w.ku);
                  o.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                  }),
                    await w.DK.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      o,
                    );
                }
              } catch {
                this.m_rgChatMessages.push({
                  type: T.X8.Error,
                  msg: (0, Wt.we)("#BroadcastChat_RemoveMessagesFailed", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(e) {
            if (this.m_webApiToken) {
              const r = new FormData();
              r.append("chat_id", this.m_ulChatID),
                r.append("flair", `^${this.m_strFlairGroupID}^:${e}:`),
                await L().post(
                  `${vt.TS.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  r,
                );
            } else {
              const r = z.w.Init(w.Mn);
              r.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${e}:`,
              }),
                await w.DK.UpdateChatMessageFlair(
                  this.m_webAPIInterface.GetServiceTransport(),
                  r,
                );
            }
          }
          IsUserMutedLocally(e) {
            return !!this.m_mapMutedUsers[e];
          }
          BIsUserBroadcastModerator(e) {
            return this.m_mapBroadcastModeratorUsers.has(e);
          }
          IsUserBroadcaster(e) {
            return e === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        lr([F.sH], mr.prototype, "m_mapChannelModeratorUsers", 2),
          lr([F.sH], mr.prototype, "m_mapBroadcastModeratorUsers", 2),
          lr([F.sH], mr.prototype, "m_nRateLimitSeconds", 2),
          lr([F.sH], mr.prototype, "m_bRateLimited", 2),
          lr([F.sH], mr.prototype, "m_rgChatMessages", 2),
          lr([F.sH], mr.prototype, "m_latestAnnouncement", 2),
          lr([js.o], mr.prototype, "FetchChatModerators", 1),
          lr([js.o], mr.prototype, "RequestLoop", 1),
          lr([js.o], mr.prototype, "MuteUserForSession", 1);
      },
      37656: (Gt, Yt, h) => {
        "use strict";
        h.d(Yt, { w: () => q });
        var i = h(41735),
          L = h.n(i),
          F = h(14947),
          T = h(65946),
          te = h(90626),
          z = h(27066),
          Ut = h(8323),
          G = h(54963),
          Ht = h(3166),
          w = Object.defineProperty,
          l = Object.getOwnPropertyDescriptor,
          n = (I, g, S) =>
            g in I
              ? w(I, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: S,
                })
              : (I[g] = S),
          t = (I, g, S, O) => {
            for (
              var R = O > 1 ? void 0 : O ? l(g, S) : g, xt = I.length - 1, K;
              xt >= 0;
              xt--
            )
              (K = I[xt]) && (R = (O ? K(g, S, R) : K(R)) || R);
            return O && R && w(g, S, R), R;
          },
          X = (I, g, S) => n(I, typeof g != "symbol" ? g + "" : g, S);
        const H = class Gs {
          constructor() {
            X(this, "giveaway_id"),
              X(this, "seconds_until_drawing"),
              X(this, "rtime_start"),
              X(this, "rtime_end"),
              X(this, "closed"),
              X(this, "winner_count"),
              (0, F.Gn)(this);
          }
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const g = new Gs();
            return (
              (g.giveaway_id = this.giveaway_id),
              (g.seconds_until_drawing = this.seconds_until_drawing),
              (g.rtime_start = this.rtime_start),
              (g.rtime_end = this.rtime_end),
              (g.closed = this.closed),
              (g.winner_count = this.winner_count),
              g
            );
          }
        };
        t([F.sH], H.prototype, "giveaway_id", 2),
          t([F.sH], H.prototype, "seconds_until_drawing", 2),
          t([F.sH], H.prototype, "rtime_start", 2),
          t([F.sH], H.prototype, "rtime_end", 2),
          t([F.sH], H.prototype, "closed", 2),
          t([F.sH], H.prototype, "winner_count", 2);
        let c = H;
        const Y = class Vr {
          constructor() {
            X(this, "m_mapGiveawayIDToNextDrawInfo", new Map()),
              X(this, "m_mapGiveawayIDAndInstanceToNextDrawInfo", new Map()),
              X(this, "m_bLoadedFromConfig", !1),
              X(this, "m_mapNextDrawChangeCallback", new Map()),
              (0, F.Gn)(this);
          }
          GetKey(g, S) {
            return g + "_" + S;
          }
          GetInfoByInstance(g, S) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(g, S),
            );
          }
          GetNextDrawChangeCallback(g) {
            return (
              this.m_mapNextDrawChangeCallback.has(g) ||
                this.m_mapNextDrawChangeCallback.set(g, new Ut.lu()),
              this.m_mapNextDrawChangeCallback.get(g)
            );
          }
          CopyToGiveaway(g, S) {
            S.closed != g.closed && (S.closed = g.closed),
              S.giveaway_id != g.giveaway_id && (S.giveaway_id = g.giveaway_id),
              S.rtime_start != g.rtime_start && (S.rtime_start = g.rtime_start),
              S.rtime_end != g.rtime_end && (S.rtime_end = g.rtime_end),
              S.winner_count != g.winner_count &&
                (S.winner_count = g.winner_count),
              S.seconds_until_drawing != g.seconds_until_drawing &&
                (S.seconds_until_drawing = g.seconds_until_drawing);
          }
          async ReloadGiveaway(g, S) {
            if (!g) return null;
            let O = Ht.TS.STORE_BASE_URL + "prizes/nextdraw/" + g,
              R = null,
              xt = { origin: self.origin };
            return (
              (R = await L().get(O, { params: xt })),
              (0, F.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(g) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(g, new c()),
                  this.CopyToGiveaway(
                    R.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(g),
                  ),
                  S !== void 0)
                ) {
                  const K = this.GetKey(g, S);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(K) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      K,
                      new c(),
                    ),
                    this.CopyToGiveaway(
                      R.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(K),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(g).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(g),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(g)
            );
          }
          static Get() {
            return (
              Vr.s_Singleton ||
                ((Vr.s_Singleton = new Vr()), Vr.s_Singleton.Init()),
              Vr.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let g = (0, Ht.Tc)("giveawaynextdraw", "application_config");
              if (g && g.giveaway_id) {
                let S = new c();
                this.CopyToGiveaway(g, S),
                  this.m_mapGiveawayIDToNextDrawInfo.set(g.giveaway_id, S);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        X(Y, "s_Singleton"),
          t([F.sH], Y.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          t([F.XI], Y.prototype, "CopyToGiveaway", 1);
        let It = Y;
        const _t = class Os {
          constructor() {
            X(this, "m_intervalID"),
              X(this, "m_intervalCountDownID"),
              X(this, "m_myInstanceNumber", 0),
              (this.m_myInstanceNumber = Os.s_GlobalInstance),
              (Os.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(g, S) {
            if ((this.ClearRefreshInterval(), !g.closed)) {
              let O =
                g.seconds_until_drawing <= 0 && g.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(S, O);
            }
          }
          SetupCountDown(g, S) {
            g > 0 && (this.m_intervalCountDownID = window.setInterval(S, 1e3));
          }
        };
        X(_t, "s_GlobalInstance", 0),
          t([z.o], _t.prototype, "ClearRefreshInterval", 1),
          t([z.o], _t.prototype, "ClearCountDown", 1),
          t([z.o], _t.prototype, "SetupRefreshDataInterval", 1),
          t([z.o], _t.prototype, "SetupCountDown", 1);
        let Dt = _t;
        function k(I, g) {
          const S = It.Get().GetInfoByInstance(I, g.m_myInstanceNumber);
          (S.seconds_until_drawing -= 1),
            S.seconds_until_drawing == 0 && g.ClearCountDown();
        }
        function J(I, g) {
          const S = It.Get().GetInfoByInstance(I, g.m_myInstanceNumber);
          S &&
            S.BIsValid() &&
            S.seconds_until_drawing <= 0 &&
            !S.closed &&
            (g.ClearCountDown(),
            It.Get()
              .ReloadGiveaway(I, g.m_myInstanceNumber)
              .then((O) => {
                g.SetupCountDown(O.seconds_until_drawing, () => k(I, g));
              }));
        }
        function q(I) {
          const [g] = (0, te.useState)(new Dt()),
            S = (0, G.CH)();
          (0, te.useEffect)(
            () => (
              It.Get()
                .ReloadGiveaway(I, g.m_myInstanceNumber)
                .then((Q) => {
                  g.SetupRefreshDataInterval(Q, () => J(I, g)),
                    g.SetupCountDown(Q.seconds_until_drawing, () => k(I, g)),
                    S();
                }),
              () => {
                g.ClearRefreshInterval(), g.ClearCountDown();
              }
            ),
            [g, I, S],
          );
          const O = It.Get().GetInfoByInstance(I, g.m_myInstanceNumber),
            [R, xt, K] = (0, T.q3)(() => [
              O == null ? void 0 : O.winner_count,
              O == null ? void 0 : O.closed,
              O == null ? void 0 : O.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !O || O.giveaway_id == null || !O.BStarted() || R === void 0,
            winner_count: R,
            closed: xt,
            seconds_until_drawing: K,
          };
        }
      },
      86390: (Gt, Yt, h) => {
        "use strict";
        h.d(Yt, { vg: () => t });
        var i = h(7850),
          L = h(90626),
          F = h(88003),
          T = h(18210),
          te = h(3166),
          z = h(1317),
          Ut = h(94276),
          G = h(13018),
          Ht = h(8059),
          w = h(2801);
        function l(c) {
          return (0, i.jsx)(F.x_, {
            onEscKeypress: c.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, i.jsx)(H, {
              redirectURL: c.redirectURL,
              guestOption: c.guestOption,
            }),
          });
        }
        function n(c) {
          const { redirectURL: Y = window.location.href } = c;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(l, { redirectURL: Y }),
          });
        }
        function t() {
          (0, F.pg)(
            (0, i.jsx)(l, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, T.we)("#Login_SignInTitle") },
          );
        }
        function X(c, Y) {
          ShowModalDialog(
            jsx(l, { ownerWin: window, redirectURL: c, guestOption: Y }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function H(c) {
          const { redirectURL: Y, guestOption: It } = c,
            [_t] = (0, L.useState)(
              new G.D(te.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [Dt, k] = (0, L.useState)(!1),
            J = (q) => {
              q == Ht.wI.k_PrimaryDomainFail
                ? k(!0)
                : window.location.assign(Y);
            };
          return (0, i.jsx)("div", {
            children: Dt
              ? (0, i.jsx)(z.Fn, {})
              : (0, i.jsx)(z.YN, {
                  autoFocus: !0,
                  transport: _t,
                  platform: Ut.SS.tS,
                  onComplete: J,
                  redirectUrl: Y,
                  theme: "modal",
                  children: It && (0, i.jsx)(z.Mk, { redirectURL: Y }),
                }),
          });
        }
      },
      53120: (Gt) => {
        Gt.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      63508: (Gt) => {
        Gt.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      8287: (Gt) => {
        Gt.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      15527: (Gt) => {
        Gt.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      33543: (Gt) => {
        Gt.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
    },
  ]);
})();
