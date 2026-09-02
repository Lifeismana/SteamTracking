/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8138],
    {
      10635: (w, Pe, d) => {
        "use strict";
        d.r(Pe), d.d(Pe, { ProfileEditRoutes: () => hr, default: () => Oa });
        var t = d(7850);
        let O = { ProfileURL: "" };
        var W = d(41735),
          k = d.n(W),
          c = d(14947),
          b = d(99412),
          ve = d(84110),
          X = d(85528),
          C = d(75844),
          h = d(90626),
          l = d(18210),
          N = d(88363),
          j = d(5858),
          v = d(36707),
          D = d(36118),
          Y = d(70342),
          y = d.n(Y),
          M = d(75975);
        const Q = (0, C.PA)((r) => {
          const { persona: e, className: i, ...s } = r;
          if (!e || !e.is_online) return null;
          const a = e.HasStateFlag(N.R$),
            o = e.HasStateFlag(N.hs),
            n = e.m_eGamingDeviceType == b.LS$,
            p = e.m_eGamingDeviceType == b.ppM,
            g = !n && !p && !o && e.HasStateFlag(N.sr);
          return (0, t.jsxs)(h.Fragment, {
            children: [
              a &&
                (0, t.jsx)("div", {
                  className: (0, v.A)(
                    i,
                    y().PersonaStatusIcon,
                    y().MobilePhoneIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_Mobile"),
                  ...s,
                  children: (0, t.jsx)(M.rf, {}),
                }),
              o &&
                (0, t.jsx)("div", {
                  className: (0, v.A)(
                    i,
                    y().PersonaStatusIcon,
                    y().VRIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_VR"),
                  ...s,
                  children: (0, t.jsx)(D.MUh, {}),
                }),
              g &&
                (0, t.jsx)("div", {
                  className: (0, v.A)(
                    i,
                    y().PersonaStatusIcon,
                    y().BigPictureIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_BigPicture"),
                  ...s,
                  children: (0, t.jsx)(D.bPr, {}),
                }),
              n &&
                (0, t.jsx)("div", {
                  className: (0, v.A)(
                    i,
                    y().PersonaStatusIcon,
                    y().SteamDeckIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_SteamDeck"),
                  ...s,
                  children: (0, t.jsx)(D.DQe, {}),
                }),
              p &&
                (0, t.jsx)("div", {
                  className: (0, v.A)(
                    i,
                    y().PersonaStatusIcon,
                    y().SteamDeckIcon,
                    (0, j.rO)(e),
                  ),
                  title: (0, l.we)("#Platform_Hint_LegionGoS"),
                  ...s,
                  children: (0, t.jsx)(D.DQe, {}),
                }),
            ],
          });
        });
        var te = d(56420),
          K = d.n(te),
          we = Object.defineProperty,
          Ue = Object.getOwnPropertyDescriptor,
          E = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ue(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && we(e, i, a), a;
          };
        let G = class extends h.Component {
          static get hoverClass() {
            return K().hoverParent;
          }
          render() {
            const {
              persona: r,
              animating: e,
              className: i,
              size: s,
              dim: a,
              ...o
            } = this.props;
            let n = "";
            return (
              s == "medium"
                ? (n = K().Medium)
                : s == "large" && (n = K().Large),
              (0, t.jsxs)("div", {
                className: (0, v.A)(
                  K().SnoozeContainer,
                  r.online_state,
                  i,
                  e && K().animating,
                  n,
                  a && K().Dim,
                ),
                ...o,
                children: [
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, v.A)(K().SnoozeZ, K().Z1),
                    children: "Z",
                  }),
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, v.A)(K().SnoozeZ, K().Z2),
                    children: "Z",
                  }),
                  (0, t.jsx)("div", {
                    "data-text": "Z",
                    className: (0, v.A)(K().SnoozeZ, K().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        G = E([C.PA], G);
        var f = d(85198),
          m = d.n(f),
          _ = d(46943),
          P = d(84676),
          x = d(36174),
          u = d(3166),
          T = Object.defineProperty,
          J = Object.getOwnPropertyDescriptor,
          ye = (r, e, i) =>
            e in r
              ? T(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (r[e] = i),
          He = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? J(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && T(e, i, a), a;
          },
          at = (r, e, i) => ye(r, typeof e != "symbol" ? e + "" : e, i);
        const Vr = x.Kp.PerMinute;
        class fr {
          constructor(e) {
            at(this, "m_accountid"),
              at(this, "m_bLoadingData", !1),
              at(this, "m_rtLastLoad", 0),
              at(this, "m_communityData"),
              (0, c.Gn)(this),
              (this.m_accountid = e);
          }
          get community_data() {
            return this.m_communityData;
          }
          get community_data_ready() {
            return this.m_communityData !== void 0;
          }
          get player_level() {
            return this.m_communityData && this.m_communityData.level;
          }
          get player_level_class() {
            return this.m_communityData && this.m_communityData.level_class;
          }
          get player_badge() {
            return this.m_communityData && this.m_communityData.favorite_badge;
          }
          get profile_background() {
            return (
              this.m_communityData && this.m_communityData.profile_background
            );
          }
          Reload() {
            (this.m_rtLastLoad = 0), this.EnsureCommunityDataLoaded();
          }
          EnsureCommunityDataLoaded() {
            const e = this.m_communityData || this.m_bLoadingData,
              i = Date.now() > this.m_rtLastLoad + Vr * 1e3;
            (!e || (i && !this.m_bLoadingData)) &&
              ((this.m_bLoadingData = !0),
              k()
                .get(
                  u.TS.CHAT_BASE_URL +
                    "miniprofile/" +
                    this.m_accountid +
                    "/json/?origin=" +
                    (0, u.xv)(),
                )
                .then((s) => {
                  let a = s.data;
                  typeof a.level == "number" &&
                    typeof a.level_class == "string" &&
                    (this.m_communityData = a),
                    (this.m_bLoadingData = !1),
                    (this.m_rtLastLoad = Date.now());
                })
                .catch((s) => {
                  this.m_bLoadingData = !1;
                }));
          }
        }
        He([c.sH], fr.prototype, "m_communityData", 2);
        var Zr = Object.defineProperty,
          Yr = Object.getOwnPropertyDescriptor,
          ke = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Yr(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Zr(e, i, a), a;
          };
        let It = class extends h.Component {
          render() {
            const { community_data: r } = this.props;
            let e = r && r.favorite_badge;
            return e
              ? (0, t.jsxs)("div", {
                  className: (0, v.A)(
                    m().miniProfileFeaturedContainer,
                    this.props.className,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: m().favoriteBadgeIcon,
                      children: (0, t.jsx)("img", {
                        src: e.icon,
                        className: m().badgeIcon,
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, v.A)(
                        m().featuredLabels,
                        m().favoriteBadgeDescription,
                      ),
                      children: [
                        (0, t.jsx)("div", {
                          className: m().featuredTitle,
                          children: e.name,
                        }),
                        (0, t.jsx)("div", {
                          className: m().featuredSubTitle,
                          children: (0, l.we)("#Hover_BadgeXP", e.xp),
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }
        };
        It = ke([C.PA], It);
        let Et = class extends h.Component {
          render() {
            const { community_data: r, className: e } = this.props;
            return r
              ? (0, t.jsxs)("div", {
                  className: (0, v.A)(m().miniProfileFeaturedContainer, e),
                  children: [
                    (0, t.jsx)("div", {
                      className: r.level_class,
                      children: (0, t.jsx)("span", {
                        className: m().friendPlayerLevelNum,
                        children: r.level,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: m().featuredLabels,
                      children: (0, t.jsx)("div", {
                        className: m().featuredTitle,
                        children: (0, l.we)("#Hover_SteamLevel") + " ",
                      }),
                    }),
                  ],
                })
              : null;
          }
        };
        Et = ke([C.PA], Et);
        let Gt = class extends h.Component {
          render() {
            var r;
            let e = this.props.persona,
              i = this.props.community_data;
            return (0, t.jsxs)("div", {
              className: (0, v.A)(
                m().miniProfileGameContainer,
                this.props.className,
              ),
              children: [
                ((r = i == null ? void 0 : i.in_game) == null
                  ? void 0
                  : r.logo) &&
                  (0, t.jsx)("img", {
                    className: m().gameLogo,
                    src: i.in_game.logo,
                  }),
                (0, t.jsxs)("div", {
                  className: (0, v.A)(
                    m().gameContent,
                    m().persona,
                    m().ingame,
                    m().ellipsis,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: m().gameState,
                      children: (0, l.we)(
                        e.is_in_nonsteam_game
                          ? "#PersonaStateInNonSteamGame"
                          : "#PersonaStateInGame",
                      ),
                    }),
                    this.props.persona.GetCurrentGameName(),
                    this.props.persona.HasCurrentGameRichPresence() &&
                      (0, t.jsx)("div", {
                        className: m().richPresence,
                        children:
                          this.props.persona.GetCurrentGameRichPresence(),
                      }),
                    this.props.in_game_section_additional,
                  ],
                }),
              ],
            });
          }
        };
        Gt = ke([C.PA], Gt);
        function Xr(r) {
          var e;
          const { appID: i } = r,
            [s] = (0, P.t7)(i, { include_assets_without_overrides: !0 }),
            a =
              (e = s == null ? void 0 : s.GetAssetsWithoutOverrides()) == null
                ? void 0
                : e.GetHeaderURL();
          return a
            ? (0, t.jsx)("img", { className: m().gameLogo, src: a })
            : null;
        }
        let Rt = class extends h.Component {
          render() {
            let r,
              e,
              i = this.props.broadcast_description;
            return (
              i && ((r = (0, l.we)("#PersonaStateWatchingBroadcast")), (e = i)),
              (0, t.jsxs)("div", {
                className: (0, v.A)(
                  m().miniProfileGameContainer,
                  this.props.className,
                ),
                children: [
                  this.props.persona.m_broadcastAppId &&
                    (0, t.jsx)(Xr, {
                      appID: this.props.persona.m_broadcastAppId,
                    }),
                  (0, t.jsxs)("div", {
                    className: (0, v.A)(
                      m().gameContent,
                      m().persona,
                      m().watchingbroadcast,
                      m().ellipsis,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: m().gameState,
                        children: r,
                      }),
                      e &&
                        (0, t.jsx)("div", {
                          className: m().richPresence,
                          children: e,
                        }),
                      (0, t.jsx)("div", {
                        className: m().watchingbroadcastThumbnail,
                        children: this.props.broadcast_thumbnail,
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Rt = ke([C.PA], Rt);
        let bt = class extends h.Component {
          render() {
            const {
              className: r,
              persona: e,
              data_loader: i,
              community_data_override: s,
              nickname: a,
              is_friend: o,
              is_blocked: n,
              friend_relationship: p,
              broadcast_description: g,
              broadcast_thumbnail: S,
              mutual_friends: R,
              in_game_section_additional: q,
              bottom_section_additional: H,
              ...L
            } = this.props;
            let Z = i.community_data;
            s && (Z = { ...Z, ...s });
            const xe =
              Object.keys((Z && Z.profile_background) || {}).length > 0;
            let Ne,
              Me = m().miniProfileContent;
            e.is_ingame
              ? (Ne = (0, t.jsx)(Gt, {
                  ...this.props,
                  community_data: Z,
                  className: xe ? m().miniProfileBackdropBlur : void 0,
                }))
              : e.is_watchingbroadcast
                ? (Ne = (0, t.jsx)(Rt, {
                    ...this.props,
                    className: xe ? m().miniProfileBackdropBlur : void 0,
                  }))
                : (Me += " " + m().notInOrWatchingGame);
            let pr = !0,
              wt = !1,
              jt = !1;
            o || ((Me += " " + m().notFriends), (pr = !1)),
              n && ((Me += " " + m().communicationBlocked), (jt = !0));
            let Fa = a !== void 0,
              Bt = e.is_awayOrSnooze,
              vr;
            return (
              Fa
                ? (vr = (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsxs)("div", {
                        className: m().personaAndIcons,
                        children: [
                          (0, t.jsxs)("div", {
                            className: (0, v.A)(m().personaName, m().nickName),
                            children: [
                              (0, t.jsx)("div", {
                                className: m().personaNameLabel,
                                children: this.props.nickname,
                              }),
                              (0, t.jsx)("div", {
                                className: m().playerNicknameBracket,
                                title: (0, l.we)("#isNickname"),
                                children: "*",
                              }),
                            ],
                          }),
                          (0, t.jsx)(Q, { persona: e }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, v.A)(m().personaName, m().hasNickname),
                        children: [
                          "( ",
                          (0, t.jsx)("div", {
                            className: m().personaNameLabel,
                            children: e.m_strPlayerName,
                          }),
                          " )",
                        ],
                      }),
                    ],
                  }))
                : (vr = (0, t.jsxs)("div", {
                    className: m().personaAndIcons,
                    children: [
                      (0, t.jsx)("div", {
                        className: m().personaName,
                        children: (0, t.jsx)("div", {
                          className: m().personaNameLabel,
                          children: e.m_strPlayerName,
                        }),
                      }),
                      (0, t.jsx)(Q, { persona: e }),
                    ],
                  })),
              this.props.friend_relationship == b.UXi && (wt = !0),
              (0, t.jsx)(h.Fragment, {
                children: (0, t.jsx)(
                  "div",
                  {
                    className: (0, v.A)(this.props.className, m().miniProfile),
                    ...L,
                    children: (0, t.jsxs)("div", {
                      className: Me,
                      children: [
                        (0, t.jsx)(Jr, { community_data: Z, persona: e }),
                        (0, t.jsx)("div", {
                          className: m().miniProfileHeader,
                          children: (0, t.jsxs)("div", {
                            className: (0, v.A)(
                              m().miniProfilePlayer,
                              e.online_state,
                              Bt && m().isAway,
                              (0, j.rO)(e),
                            ),
                            children: [
                              (0, t.jsx)($r, {
                                persona: this.props.persona,
                                community_data: Z,
                              }),
                              Bt &&
                                (0, t.jsx)(G, {
                                  persona: e,
                                  animating: !0,
                                  className: m().SnoozeContainer,
                                  size: "large",
                                }),
                              (0, t.jsx)("div", {
                                className: m().playerContent,
                                children: (0, t.jsx)("div", {
                                  className: m().playerName,
                                  children: (0, t.jsxs)("div", {
                                    className: m().persona,
                                    children: [
                                      vr,
                                      Bt &&
                                        (0, t.jsx)("div", {
                                          className: m().awayStatusLabel,
                                          children: (0, l.we)(
                                            "#PersonaStateAway",
                                          ),
                                        }),
                                      !e.is_online &&
                                        (0, t.jsx)("div", {
                                          className: m().awayStatusLabel,
                                          children:
                                            this.props.persona.GetLocalizedOnlineStatus(),
                                        }),
                                      e.online_state == "online" &&
                                        !Bt &&
                                        (0, t.jsx)("div", {
                                          className: m().awayStatusLabel,
                                          children: (0, l.we)(
                                            "#PersonaStateOnline",
                                          ),
                                        }),
                                      !pr &&
                                        (0, t.jsx)("div", {
                                          className: m().miniProfileNotFriends,
                                          children: wt
                                            ? (0, l.we)(
                                                "#Friend_Menu_NotAFriendRequesting",
                                              )
                                            : (0, l.we)(
                                                "#Friend_Menu_NotAFriendLabel",
                                              ),
                                        }),
                                      jt &&
                                        (0, t.jsx)("div", {
                                          className: m().miniProfileBlocked,
                                          children: (0, l.we)(
                                            "#PersonaStateBlocked",
                                          ),
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        Ne,
                        (0, t.jsxs)("div", {
                          className: (0, v.A)(
                            m().miniProfileBottom,
                            xe && m().miniProfileBackdropBlur,
                          ),
                          children: [
                            (0, t.jsx)(It, { community_data: Z }),
                            (0, t.jsx)(Et, { community_data: Z }),
                          ],
                        }),
                        H,
                        (0, t.jsx)("div", {
                          className: m().mutualFriends,
                          children: this.props.mutual_friends,
                        }),
                      ],
                    }),
                  },
                  e.GetAccountID(),
                ),
              })
            );
          }
        };
        bt = ke([C.PA], bt);
        const Jr = ({ community_data: r, persona: e }) => {
            if (r && r.profile_background) {
              const { image: i, ...s } = r.profile_background;
              if (Object.keys(s).length)
                return (0, t.jsx)(
                  "div",
                  {
                    className: m().miniProfileVideoBackgroundContainer,
                    children: (0, t.jsx)("video", {
                      className: m().miniProfileVideoBackground,
                      playsInline: !0,
                      muted: !0,
                      autoPlay: !0,
                      loop: !0,
                      poster: i,
                      children: Object.keys(s).map((a) =>
                        (0, t.jsx)("source", { src: s[a], type: a }, a),
                      ),
                    }),
                  },
                  s["video/webm"] || s["video/mp4"] || "image",
                );
              if (i)
                return (0, t.jsx)("div", {
                  className: m().miniProfileVideoBackgroundContainer,
                  children: (0, t.jsx)("img", {
                    className: m().miniProfileVideoBackground,
                    src: i,
                  }),
                });
            }
            return (0, t.jsx)("div", {
              className: m().miniProfileBackground,
              children: (0, t.jsx)("img", {
                className: m().miniProfileBackgroundBlur,
                src: e.avatar_url,
              }),
            });
          },
          $r = (r) => {
            const { persona: e, community_data: i, size: s, ...a } = r,
              o =
                i &&
                i.avatar_frame &&
                (0, t.jsx)("img", {
                  src: i.avatar_frame,
                  className: m().Frame,
                }),
              n = i && i.animated_avatar,
              p = {
                size: s || "X-Large",
                statusPosition: "bottom",
                className: m().playerAvatar,
              };
            return n
              ? (0, t.jsx)(_.Ul, { ...a, strAvatarURL: n, ...p, children: o })
              : (0, t.jsx)(_.i8, { persona: e, ...a, ...p, children: o });
          };
        var Nt = d(76559),
          ei = d(28462),
          U = d(72604),
          ne = d(35038),
          _r = d(98112),
          ti = Object.defineProperty,
          ri = Object.getOwnPropertyDescriptor,
          ii = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ri(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && ti(e, i, a), a;
          };
        class gr {
          constructor(e) {
            (this.m_rgPreviousAvatars = []),
              (0, c.Gn)(this),
              (this.m_SteamInterface = e);
          }
          GetAvatarHistory() {
            return this.StartLoadIfNeeded(), this.m_rgPreviousAvatars || [];
          }
          RefreshAvatarHistory() {
            this.m_promiseLoading = this.LoadAvatarHistory();
          }
          async BWaitForLoad() {
            return this.StartLoadIfNeeded(), this.m_promiseLoading;
          }
          StartLoadIfNeeded() {
            this.m_promiseLoading ||
              (this.m_promiseLoading = this.LoadAvatarHistory());
          }
          async LoadAvatarHistory() {
            const e = ne.w.Init(_r.Vc);
            e.SetBodyFields({
              steamid: u.iA.steamid,
              filter_user_uploaded_only: !0,
            });
            let i = await _r.BE.GetAvatarHistory(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            return (
              i.GetEResult() == U.R
                ? ((this.m_rgPreviousAvatars = []),
                  i
                    .Body()
                    .toObject()
                    .avatars.map((s) => {
                      this.m_rgPreviousAvatars.push({
                        avatar_hash: s.avatar_sha1,
                        timestamp: s.timestamp,
                      });
                    }))
                : console.error(
                    `Error when calling CommunityService.GetAvatarHistory: EResult=${i.GetEResult()}`,
                  ),
              !!this.m_rgPreviousAvatars
            );
          }
          async SetPreviousAvatar(e) {
            let i = e.GetAvatarHash();
            for (let s = 0; s < this.m_rgPreviousAvatars.length; ++s)
              if (this.m_rgPreviousAvatars[s].avatar_hash == i)
                return this.SelectAvatar(e, i);
            return U.p;
          }
          async SelectAvatar(e, i) {
            let s = new FormData();
            s.append("sessionid", (0, u.KC)()),
              s.append("json", "1"),
              s.append("sha", i);
            let o =
              (
                await k().post(
                  `${u.TS.COMMUNITY_BASE_URL}actions/selectPreviousAvatar`,
                  s,
                )
              ).data.success || U.zi;
            return o == U.R && e.CommitAvatarHash(), o;
          }
        }
        ii([c.sH], gr.prototype, "m_rgPreviousAvatars", 2);
        var si = Object.defineProperty,
          ai = Object.getOwnPropertyDescriptor,
          oi = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ai(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && si(e, i, a), a;
          };
        class Pr {
          constructor() {
            (this.m_AvatarData = void 0), (0, c.Gn)(this);
          }
          GetRecentGameAvatars() {
            return (
              this.StartLoadIfNeeded(),
              (this.m_AvatarData && this.m_AvatarData.rgRecentGames) || []
            );
          }
          GetOwnedGameAvatars() {
            return (
              this.StartLoadIfNeeded(),
              (this.m_AvatarData && this.m_AvatarData.rgOwnedGames) || []
            );
          }
          GetOtherGameAvatars() {
            return (
              this.StartLoadIfNeeded(),
              (this.m_AvatarData && this.m_AvatarData.rgOtherGames) || []
            );
          }
          async BWaitForLoad() {
            return this.StartLoadIfNeeded(), this.m_promiseLoading;
          }
          StartLoadIfNeeded() {
            this.m_promiseLoading ||
              (this.m_promiseLoading = this.LoadOGGAvatars());
          }
          async LoadOGGAvatars() {
            let e = await k().get(
              `${u.TS.COMMUNITY_BASE_URL}actions/GameAvatars/?json=1&l=${u.TS.LANGUAGE}`,
            );
            return (this.m_AvatarData = e.data || null), !!e.data;
          }
          async SetPlayerOGGAvatar(e) {
            let i = li(this),
              s,
              a = e.GetAvatarHash();
            for (; (s = i.next().value); ) {
              let o = s.avatars.find((n) => n.avatar_hash == a);
              if (o) return this.SelectGameAvatar(e, s.appid, o.ordinal);
            }
            return U.p;
          }
          async SelectGameAvatar(e, i, s) {
            let a = new FormData();
            a.append("sessionid", (0, u.KC)()),
              a.append("json", "1"),
              a.append("selectedAvatar", "" + s);
            let n =
              (
                await k().post(
                  `${u.TS.COMMUNITY_BASE_URL}ogg/${i}/selectAvatar`,
                  a,
                )
              ).data.success || U.zi;
            return n == U.R && e.CommitAvatarHash(), n;
          }
          UpdateAvatarsForGame(e, i) {
            const s = ["rgRecentGames", "rgOwnedGames", "rgOtherGames"];
            let a = new Set();
            for (const o of s) {
              const n = this.m_AvatarData[o];
              if (!(!n || !Array.isArray(n)))
                for (const p of n) p.appid === e && ((p.avatars = i), a.add(o));
            }
            a.forEach((o) => {
              const n = this.m_AvatarData[o];
              !n || !Array.isArray(n) || (this.m_AvatarData[o] = [...n]);
            });
          }
        }
        oi([c.sH.shallow], Pr.prototype, "m_AvatarData", 2);
        function* ni(r) {
          for (let e of [
            r.GetRecentGameAvatars(),
            r.GetOwnedGameAvatars(),
            r.GetOtherGameAvatars(),
          ])
            for (let i of e) for (let s of i.avatars) yield s;
        }
        function* li(r) {
          for (let e of [
            r.GetRecentGameAvatars(),
            r.GetOwnedGameAvatars(),
            r.GetOtherGameAvatars(),
          ])
            for (let i of e) yield i;
        }
        var mi = Object.defineProperty,
          di = Object.getOwnPropertyDescriptor,
          ot = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? di(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && mi(e, i, a), a;
          };
        const Da = null,
          Lt = 0,
          Ot = 1,
          Ft = 2,
          Le = 0,
          Dt = 1,
          Tt = 2,
          Mt = 3;
        function yr(r) {
          switch (r) {
            case b.uvF:
              return (0, l.we)("#Privacy_Private");
            case b.Snd:
              return (0, l.we)("#Privacy_FriendsOnly");
            case b.Quy:
              return (0, l.we)("#Privacy_Public");
            default:
              return "";
          }
        }
        function ci(r) {
          switch (r) {
            case Lt:
              return (0, l.we)("#Privacy_FriendsOnly");
            case Ot:
              return (0, l.we)("#Privacy_Public");
            case Ft:
              return (0, l.we)("#Privacy_Private");
            default:
              return "";
          }
        }
        function qe(r, e) {
          return r < e ? r : e;
        }
        function ui(r, e) {
          return e == b.uvF ? Ft : e == b.Snd && r == Ot ? Lt : r;
        }
        class Ke {
          constructor(e, i) {
            (this.m_PrivacySettings = void 0),
              (this.m_eCommentPermission = void 0),
              (this.m_eSaveStateByKey = new Map()),
              (this.m_eCommentSaveState = Le),
              (0, c.Gn)(this),
              (this.m_PrivacySettings = e),
              (this.m_eCommentPermission = i);
          }
          GetPrivacySetting(e) {
            return e == "PrivacyOwnedGames"
              ? qe(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyOwnedGames,
                )
              : e == "PrivacyPlaytime"
                ? qe(
                    this.GetPrivacySetting("PrivacyOwnedGames"),
                    this.m_PrivacySettings.PrivacyPlaytime,
                  )
                : e == "PrivacyInventory"
                  ? qe(
                      this.m_PrivacySettings.PrivacyProfile,
                      this.m_PrivacySettings.PrivacyInventory,
                    )
                  : e == "PrivacyInventoryGifts"
                    ? qe(
                        this.GetPrivacySetting("PrivacyInventory"),
                        this.m_PrivacySettings.PrivacyInventoryGifts,
                      )
                    : e == "PrivacyFriendsList"
                      ? qe(
                          this.m_PrivacySettings.PrivacyProfile,
                          this.m_PrivacySettings.PrivacyFriendsList,
                        )
                      : this.m_PrivacySettings[e];
          }
          get CommentPermission() {
            return this.m_eCommentPermission;
          }
          GetSaveState(e) {
            return this.m_eSaveStateByKey.get(e) || Le;
          }
          GetCommentSaveState() {
            return this.m_eCommentSaveState;
          }
          ChangePrivacySetting(e, i, s) {
            if (this.m_PrivacySettings[e] == i) return;
            this.m_PrivacySettings[e] = i;
            let a = this.SavePrivacy(),
              o = s || e;
            a
              ? (this.m_eSaveStateByKey.set(o, Dt),
                a.then((n) => {
                  n
                    ? this.m_eSaveStateByKey.set(o, Tt)
                    : this.m_eSaveStateByKey.set(o, Mt);
                }))
              : this.m_eSaveStateByKey.set(o, Le);
          }
          ChangeCommentPermission(e) {
            if (this.m_eCommentPermission == e) return;
            this.m_eCommentPermission = e;
            let i = this.SavePrivacy();
            i
              ? ((this.m_eCommentSaveState = Dt),
                i.then((s) => {
                  s
                    ? (this.m_eCommentSaveState = Tt)
                    : (this.m_eCommentSaveState = Mt);
                }))
              : (this.m_eCommentSaveState = Le);
          }
          SavePrivacy() {
            let e = new FormData();
            return (
              e.append("sessionid", (0, u.KC)()),
              e.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
              e.append(
                "eCommentPermission",
                JSON.stringify(this.m_eCommentPermission),
              ),
              k()
                .post(O.ProfileURL + "ajaxsetprivacy/", e)
                .then((i) => {
                  let s = i.data;
                  if (s.success != U.R)
                    return (
                      window.ShowAlertDialog(
                        (0, l.we)("#Error_Error"),
                        (0, l.we)("#Error_CommentEditFailed"),
                      ),
                      !1
                    );
                  let a = s.Privacy;
                  return (
                    a &&
                      a.PrivacySettings &&
                      a.eCommentPermission &&
                      (0, c.h5)(() => {
                        (this.m_PrivacySettings = a.PrivacySettings),
                          (this.m_eCommentPermission = a.eCommentPermission);
                      }),
                    !0
                  );
                })
                .catch(
                  (i) => (
                    window.ShowAlertDialog(
                      (0, l.we)("#Error_Error"),
                      (0, l.we)("#Error_CommentEditFailed"),
                    ),
                    !1
                  ),
                )
            );
          }
        }
        ot([c.sH], Ke.prototype, "m_PrivacySettings", 2),
          ot([c.sH], Ke.prototype, "m_eCommentPermission", 2),
          ot([c.sH], Ke.prototype, "m_eSaveStateByKey", 2),
          ot([c.sH], Ke.prototype, "m_eCommentSaveState", 2);
        var z = d(75916),
          hi = Object.defineProperty,
          pi = Object.getOwnPropertyDescriptor,
          Ut = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? pi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && hi(e, i, a), a;
          };
        class nt {
          constructor(e, i, s) {
            (this.m_rgBadges = []),
              (this.m_FavoriteBadge = void 0),
              (0, c.Gn)(this),
              (this.m_CMInterface = e),
              (this.m_AppInfoStore = i);
            const a = s.rgBadges,
              o = s.FavoriteBadge;
            if (!Array.isArray(a))
              for (let n in a) {
                const p = a[n];
                let g;
                "communityitemid" in p
                  ? (g = new fi(p, this.m_AppInfoStore))
                  : (g = new vi(p)),
                  this.m_rgBadges.push(g),
                  o &&
                    g.BIsFavoriteBadge(o) &&
                    (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge = g);
              }
          }
          get Badges() {
            return this.m_rgBadges;
          }
          get FavoriteBadge() {
            return this.m_FavoriteBadge;
          }
          get FavoriteBadgeID() {
            return this.m_FavoriteBadge
              ? this.m_FavoriteBadge.GetFavoriteBadgeID()
              : {};
          }
          SetFavoriteBadge(e) {
            this.m_FavoriteBadge = e;
          }
          RevertFavoriteBadge() {
            this.m_FavoriteBadge = this.m_CommittedFavoriteBadge;
          }
          BFavoriteBadgeUncomitted() {
            return this.m_FavoriteBadge != this.m_CommittedFavoriteBadge;
          }
          async CommitFavoriteBadgeChanges() {
            if (this.m_FavoriteBadge == this.m_CommittedFavoriteBadge)
              return U.R;
            let e = this.FavoriteBadgeID,
              i = ne.w.Init(z.Hrm);
            e.badgeid
              ? i.Body().set_badgeid(e.badgeid)
              : e.communityitemid &&
                i.Body().set_communityitemid(e.communityitemid);
            let s = await z.xtC.SetFavoriteBadge(
              this.m_CMInterface.GetServiceTransport(),
              i,
            );
            return (
              s.GetEResult() == U.R &&
                (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge),
              s.GetEResult()
            );
          }
          GetFavoriteBadgePreview() {
            return this.m_FavoriteBadge
              ? {
                  name: this.m_FavoriteBadge.GetName(),
                  xp: parseInt(this.m_FavoriteBadge.GetXP()),
                  level: 0,
                  description: this.m_FavoriteBadge.GetGameName(),
                  icon: this.m_FavoriteBadge.GetIconURL(),
                }
              : null;
          }
        }
        Ut([c.sH], nt.prototype, "m_FavoriteBadge", 2),
          Ut([c.XI], nt.prototype, "SetFavoriteBadge", 1),
          Ut([c.XI], nt.prototype, "RevertFavoriteBadge", 1);
        class Ar {
          constructor(e) {
            (this.m_strIconURL = e.icon),
              (this.m_strName = e.name),
              (this.m_strXP = e.xp);
          }
          GetIconURL() {
            return this.m_strIconURL;
          }
          GetName() {
            return this.m_strName;
          }
          GetXP() {
            return this.m_strXP;
          }
          GetGameName() {
            return "";
          }
          BIsFoil() {
            return !1;
          }
        }
        class vi extends Ar {
          constructor(e) {
            super(e), (this.m_unBadgeID = e.badgeid);
          }
          GetFavoriteBadgeID() {
            return { badgeid: this.m_unBadgeID };
          }
          BIsFavoriteBadge(e) {
            return e.badgeid && e.badgeid == this.m_unBadgeID;
          }
        }
        class fi extends Ar {
          constructor(e, i) {
            super(e),
              (this.m_ulCommunityItemID = e.communityitemid),
              (this.m_usItemType = e.item_type),
              (this.m_unAppID = e.appid),
              (this.m_unBorderColor = e.border_color),
              (this.m_AppInfoStore = i);
          }
          GetFavoriteBadgeID() {
            return { communityitemid: this.m_ulCommunityItemID };
          }
          BIsFavoriteBadge(e) {
            return (
              e.communityitemid && e.communityitemid == this.m_ulCommunityItemID
            );
          }
          GetGameName() {
            return this.m_AppInfoStore.GetAppInfo(this.m_unAppID).name;
          }
          BIsFoil() {
            return this.m_unBorderColor == 1;
          }
        }
        var lt = d(80876),
          _i = d(8323),
          gi = Object.defineProperty,
          Pi = Object.getOwnPropertyDescriptor,
          pe = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Pi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && gi(e, i, a), a;
          };
        function yi(r) {
          return Ee(r.movie_webm);
        }
        function Ai(r) {
          return Ee(r.movie_webm_small) || Ee(r.movie_webm);
        }
        function Ci(r) {
          return Ee(r.movie_mp4);
        }
        function Si(r) {
          return Ee(r.movie_mp4_small) || Ee(r.movie_mp4);
        }
        function mt(r) {
          return Ee(r.image_small);
        }
        function Re(r) {
          return Ee(r.image_large);
        }
        function Ht(r) {
          return xi(r, 252, 160);
        }
        function xi(r, e, i) {
          return r
            ? r.image_large
              ? `${u.TS.COMMUNITY_CDN_URL}economy/profilebackground/${r.image_large}?size=${e}x${i}`
              : null
            : `${u.TS.COMMUNITY_CDN_URL}public/images/profile/2020/bg_dots.png`;
        }
        function kt(r, e = !1) {
          let i = {},
            s = e ? Ai(r) : yi(r);
          s && (i["video/webm"] = s);
          let a = e ? Si(r) : Ci(r);
          return a && (i["video/mp4"] = a), i;
        }
        function Ee(r) {
          return r ? `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/${r}` : null;
        }
        class We {
          constructor(e, i, s) {
            (this.m_Backgrounds = new de(this)),
              (this.m_MiniProfileBackgrounds = new de(this)),
              (this.m_Avatars = new de(this)),
              (this.m_AvatarFrames = new de(this)),
              (this.m_ProfileModifiers = new de(this)),
              (this.m_OnAvatarEquipmentChangedCallbacks = new _i.lu()),
              (this.m_mapGoldenProfileConfigByAppID = new Map()),
              (0, c.Gn)(this),
              (this.m_SteamInterface = e),
              (this.m_AppInfoStore = i);
            for (let a of s)
              this.m_mapGoldenProfileConfigByAppID.set(a.appid, a);
            this.Initialize();
          }
          get AppInfoStore() {
            return this.m_AppInfoStore;
          }
          async GetOwnedBackgrounds() {
            return (
              this.m_Backgrounds.m_rgOwnedItems ||
                (await this.m_Backgrounds.SetItems(
                  (await this.m_promiseOwned).Body().profile_backgrounds(),
                )),
              this.m_Backgrounds.m_rgOwnedItems
            );
          }
          GetEquippedBackground() {
            return (
              this.m_Backgrounds.m_bEquippedLoaded ||
                (async () =>
                  this.m_Backgrounds.LoadEquipped(
                    (await this.m_promiseEquipped)
                      .Body()
                      .profile_background(!1),
                  ))(),
              this.m_Backgrounds.m_EquippedItem
            );
          }
          SetEquippedBackground(e) {
            this.m_Backgrounds.SetEquipped(e);
          }
          GetEquippedBackgroundFlags() {
            return this.m_Backgrounds.m_EquipFlags || 0;
          }
          SetEquippedBackgroundFlags(e) {
            this.m_Backgrounds.SetEquippedFlags(e);
          }
          BIsBackgroundUncomitted() {
            return this.m_Backgrounds.BIsUncomitted();
          }
          async SetAndEquipProfileBackground(e) {
            if (
              (this.m_Backgrounds.SetEquipped(e),
              this.m_Backgrounds.BIsUncomitted())
            ) {
              {
                let i = ne.w.Init(z.F55);
                i.Body().set_communityitemid(
                  this.m_Backgrounds.m_EquippedItem &&
                    this.m_Backgrounds.m_EquippedItem.communityitemid,
                );
                let s = await z.xtC.SetProfileBackground(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (s.GetEResult() != U.R) return s.GetEResult();
              }
              if (
                this.m_Backgrounds.m_EquippedItem &&
                this.m_Backgrounds.m_EquippedItem.communityitemid
              ) {
                let i = ne.w.Init(z.MK$);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_Backgrounds.m_EquippedItem.communityitemid,
                  ),
                  i.Body().set_flags(this.m_Backgrounds.m_EquipFlags);
                let s = await z.xtC.SetEquippedProfileItemFlags(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                s.GetEResult() != U.R &&
                  console.error(
                    `Error when calling PlayerService.SetEquippedProfileItemFlags: EResult=${s.GetEResult()}`,
                  );
              }
            }
            return this.m_Backgrounds.SetComitted(), U.R;
          }
          RevertBackgroundChanges() {
            this.m_Backgrounds.Revert();
          }
          async GetOwnedMiniProfileBackgrounds() {
            return (
              this.m_MiniProfileBackgrounds.m_rgOwnedItems ||
                (await this.m_MiniProfileBackgrounds.SetItems(
                  (await this.m_promiseOwned).Body().mini_profile_backgrounds(),
                )),
              this.m_MiniProfileBackgrounds.m_rgOwnedItems
            );
          }
          GetEquippedMiniProfileBackground() {
            return (
              this.m_MiniProfileBackgrounds.m_bEquippedLoaded ||
                (async () =>
                  this.m_MiniProfileBackgrounds.LoadEquipped(
                    (await this.m_promiseEquipped)
                      .Body()
                      .mini_profile_background(!1),
                  ))(),
              this.m_MiniProfileBackgrounds.m_EquippedItem
            );
          }
          SetEquippedMiniProfileBackground(e) {
            this.m_MiniProfileBackgrounds.SetEquipped(e);
          }
          BIsMiniProfileBackgroundUncomitted() {
            return this.m_MiniProfileBackgrounds.BIsUncomitted();
          }
          async CommitMiniProfileChanges() {
            if (this.m_MiniProfileBackgrounds.BIsUncomitted()) {
              let e = ne.w.Init(z.A6_);
              e.Body().set_communityitemid(
                this.m_MiniProfileBackgrounds.m_EquippedItem &&
                  this.m_MiniProfileBackgrounds.m_EquippedItem.communityitemid,
              );
              let i = await z.xtC.SetMiniProfileBackground(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              );
              if (i.GetEResult() != U.R) return i.GetEResult();
            }
            return (
              this.m_MiniProfileBackgrounds.SetComitted(),
              this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
              U.R
            );
          }
          RevertMiniProfileBackgroundChanges() {
            this.m_MiniProfileBackgrounds.Revert();
          }
          BIsAvatarUncomitted() {
            return (
              this.m_Avatars.BIsUncomitted() ||
              this.m_AvatarFrames.BIsUncomitted()
            );
          }
          async CommitAvatarChanges() {
            let e, i;
            if (this.m_Avatars.BIsUncomitted()) {
              let o = ne.w.Init(z.UMm);
              o
                .Body()
                .set_communityitemid(
                  this.m_Avatars.m_EquippedItem &&
                    this.m_Avatars.m_EquippedItem.communityitemid,
                ),
                (e = z.xtC.SetAnimatedAvatar(
                  this.m_SteamInterface.GetServiceTransport(),
                  o,
                ));
            }
            if (this.m_AvatarFrames.BIsUncomitted()) {
              let o = ne.w.Init(z.C0y);
              o
                .Body()
                .set_communityitemid(
                  this.m_AvatarFrames.m_EquippedItem &&
                    this.m_AvatarFrames.m_EquippedItem.communityitemid,
                ),
                (i = z.xtC.SetAvatarFrame(
                  this.m_SteamInterface.GetServiceTransport(),
                  o,
                ));
            }
            const [s, a] = await Promise.all([e, i]);
            return s && s.GetEResult() != U.R
              ? s.GetEResult()
              : a && a.GetEResult() != U.R
                ? a.GetEResult()
                : (this.m_Avatars.SetComitted(),
                  this.m_AvatarFrames.SetComitted(),
                  this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
                  U.R);
          }
          RevertAvatarChanges() {
            this.m_Avatars.Revert(), this.m_AvatarFrames.Revert();
          }
          AddOnAvatarEquipmentChangedCallback(e) {
            this.m_OnAvatarEquipmentChangedCallbacks.Register(e);
          }
          async GetOwnedAvatars() {
            return (
              this.m_Avatars.m_rgOwnedItems ||
                (await this.m_Avatars.SetItems(
                  (await this.m_promiseOwned).Body().animated_avatars(),
                )),
              this.m_Avatars.m_rgOwnedItems
            );
          }
          GetEquippedAvatar() {
            return (
              this.m_Avatars.m_bEquippedLoaded ||
                (async () =>
                  this.m_Avatars.LoadEquipped(
                    (await this.m_promiseEquipped).Body().animated_avatar(!1),
                  ))(),
              this.m_Avatars.m_EquippedItem
            );
          }
          GetCommittedEquippedAvatar() {
            return (
              this.m_Avatars.m_bEquippedLoaded ||
                (async () =>
                  this.m_Avatars.LoadEquipped(
                    (await this.m_promiseEquipped).Body().animated_avatar(!1),
                  ))(),
              this.m_Avatars.m_CommittedEquippedItem
            );
          }
          SetEquippedAvatar(e, i = !1) {
            this.m_Avatars.SetEquipped(e, i);
          }
          async GetOwnedAvatarFrames() {
            return (
              this.m_AvatarFrames.m_rgOwnedItems ||
                (await this.m_AvatarFrames.SetItems(
                  (await this.m_promiseOwned).Body().avatar_frames(),
                )),
              this.m_AvatarFrames.m_rgOwnedItems
            );
          }
          GetEquippedAvatarFrame() {
            return (
              this.m_AvatarFrames.m_bEquippedLoaded ||
                (async () =>
                  this.m_AvatarFrames.LoadEquipped(
                    (await this.m_promiseEquipped).Body().avatar_frame(!1),
                  ))(),
              this.m_AvatarFrames.m_EquippedItem
            );
          }
          GetCommittedEquippedAvatarFrame() {
            return (
              this.m_AvatarFrames.m_bEquippedLoaded ||
                (async () =>
                  this.m_AvatarFrames.LoadEquipped(
                    (await this.m_promiseEquipped).Body().avatar_frame(!1),
                  ))(),
              this.m_AvatarFrames.m_CommittedEquippedItem
            );
          }
          SetEquippedAvatarFrame(e) {
            this.m_AvatarFrames.SetEquipped(e);
          }
          async GetOwnedProfileModifiers() {
            return (
              this.m_ProfileModifiers.m_rgOwnedItems ||
                (await this.m_ProfileModifiers.SetItems(
                  (await this.m_promiseOwned).Body().profile_modifiers(),
                )),
              this.m_ProfileModifiers.m_rgOwnedItems
            );
          }
          GetEquippedProfileModifier() {
            return (
              this.m_ProfileModifiers.m_bEquippedLoaded ||
                (async () =>
                  this.m_ProfileModifiers.LoadEquipped(
                    (await this.m_promiseEquipped).Body().profile_modifier(!1),
                  ))(),
              this.m_ProfileModifiers.m_EquippedItem
            );
          }
          GetCommittedEquippedProfileModifier() {
            return (
              this.m_ProfileModifiers.m_bEquippedLoaded ||
                (async () =>
                  this.m_ProfileModifiers.LoadEquipped(
                    (await this.m_promiseEquipped).Body().profile_modifier(!1),
                  ))(),
              this.m_ProfileModifiers.m_CommittedEquippedItem
            );
          }
          BHasAnyProfileModifiers() {
            return (
              this.GetOwnedProfileModifiers(),
              !!this.m_ProfileModifiers.GetOwnedItemCount()
            );
          }
          SetEquippedProfileModifier(e) {
            this.m_ProfileModifiers.SetEquipped(e);
          }
          RevertProfileModifierChanges() {
            this.m_ProfileModifiers.Revert();
          }
          ReloadEquippedItems() {
            let e = ne.w.Init(z.aKf);
            e.Body().set_steamid(u.iA.steamid),
              e.Body().set_language(u.TS.LANGUAGE),
              (this.m_promiseEquipped = z.xtC.GetProfileItemsEquipped(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              )),
              this.m_AvatarFrames.SetEquipped(null, !0),
              (this.m_AvatarFrames.m_bEquippedLoaded = !1),
              this.GetEquippedAvatarFrame(),
              this.m_Backgrounds.SetEquipped(null, !0),
              (this.m_Backgrounds.m_bEquippedLoaded = !1),
              this.GetEquippedBackground(),
              this.m_MiniProfileBackgrounds.SetEquipped(null, !0),
              (this.m_MiniProfileBackgrounds.m_bEquippedLoaded = !1),
              this.GetEquippedMiniProfileBackground();
          }
          async CommitProfileModifierChanges() {
            if (this.m_ProfileModifiers.BIsUncomitted()) {
              let e = !1;
              if (
                this.m_ProfileModifiers.m_CommittedEquippedItem &&
                this.m_ProfileModifiers.m_CommittedEquippedItem !=
                  this.m_ProfileModifiers.m_EquippedItem
              ) {
                let i = ne.w.Init(lt.fp);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_CommittedEquippedItem
                      .communityitemid,
                  ),
                  i
                    .Body()
                    .set_appid(
                      this.m_ProfileModifiers.m_CommittedEquippedItem.appid,
                    ),
                  i.Body().set_activate(!1);
                let s = await lt.uy.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (s.GetEResult() != U.R) return s.GetEResult();
                e = !0;
              }
              if (this.m_ProfileModifiers.m_EquippedItem) {
                let i = ne.w.Init(lt.fp);
                i
                  .Body()
                  .set_communityitemid(
                    this.m_ProfileModifiers.m_EquippedItem.communityitemid,
                  ),
                  i
                    .Body()
                    .set_appid(this.m_ProfileModifiers.m_EquippedItem.appid),
                  i.Body().set_activate(!0);
                let s = await lt.uy.ActivateProfileModifierItem(
                  this.m_SteamInterface.GetServiceTransport(),
                  i,
                );
                if (s.GetEResult() != U.R) return s.GetEResult();
                e = !0;
              }
              this.m_ProfileModifiers.SetComitted(),
                e &&
                  (0, c.h5)(() => {
                    this.ReloadEquippedItems();
                  });
            }
            return U.R;
          }
          BIsLegacyGoldenProfile(e) {
            return this.m_mapGoldenProfileConfigByAppID.has(e);
          }
          GetGoldenProfileConfigValue(e) {
            let i = this.GetEquippedProfileModifier();
            if (!i) return null;
            let s = this.m_mapGoldenProfileConfigByAppID.get(i.appid);
            return s ? s[e] : null;
          }
          GetProfileModifierCSSURL() {
            return this.GetGoldenProfileConfigValue("css_url");
          }
          GetProfileModifierAvatarFrameURL() {
            return this.GetGoldenProfileConfigValue("frame_url");
          }
          GetProfileModifierMiniProfileBackground() {
            return this.GetGoldenProfileConfigValue("miniprofile_background");
          }
          GetProfileModifierMiniProfileBackgroundMovies() {
            return this.GetGoldenProfileConfigValue("miniprofile_movie");
          }
          async Initialize() {
            let e = ne.w.Init(z.YkN);
            e.Body().set_language(u.TS.LANGUAGE),
              (this.m_promiseOwned = z.xtC.GetProfileItemsOwned(
                this.m_SteamInterface.GetServiceTransport(),
                e,
              ));
            let i = ne.w.Init(z.aKf);
            i.Body().set_steamid(u.iA.steamid),
              i.Body().set_language(u.TS.LANGUAGE),
              (this.m_promiseEquipped = z.xtC.GetProfileItemsEquipped(
                this.m_SteamInterface.GetServiceTransport(),
                i,
              ));
          }
        }
        pe([c.XI], We.prototype, "RevertBackgroundChanges", 1),
          pe([c.XI], We.prototype, "RevertMiniProfileBackgroundChanges", 1),
          pe([c.XI], We.prototype, "RevertAvatarChanges", 1),
          pe([c.XI], We.prototype, "ReloadEquippedItems", 1);
        class de {
          constructor(e) {
            (this.m_cItemsOwned = void 0),
              (this.m_bEquippedLoaded = !1),
              (this.m_bUnsavedChanges = !1),
              (this.m_CommittedEquippedItem = void 0),
              (this.m_EquippedItem = void 0),
              (this.m_EquipFlags = void 0),
              (0, c.Gn)(this),
              (this.m_parent = e);
          }
          GetOwnedItemCount() {
            return this.m_cItemsOwned;
          }
          async SetItems(e) {
            let i = e.map((s) => s.toObject());
            (this.m_rgOwnedItems = (await this.FillAppNames(i)).reverse()),
              (this.m_cItemsOwned = this.m_rgOwnedItems.length);
          }
          async LoadEquipped(e) {
            if (e !== void 0 && e.communityitemid()) {
              let i = e.toObject();
              if (i) {
                let [s] = await this.FillAppNames([i]);
                (0, c.h5)(() => {
                  (this.m_CommittedEquippedItem = this.m_EquippedItem = s),
                    (this.m_EquipFlags = s && s.equipped_flags);
                });
              }
              this.m_bEquippedLoaded = !0;
            }
          }
          SetEquipped(e, i = !1) {
            (this.m_EquippedItem = e),
              (this.m_bEquippedLoaded = !0),
              i
                ? this.SetComitted()
                : (e &&
                      (!this.m_CommittedEquippedItem ||
                        this.m_CommittedEquippedItem.communityitemid !=
                          e.communityitemid ||
                        this.m_CommittedEquippedItem.equipped_flags !=
                          this.m_EquipFlags)) ||
                    (!e && this.m_CommittedEquippedItem)
                  ? (this.m_bUnsavedChanges = !0)
                  : (this.m_bUnsavedChanges = !1);
          }
          SetEquippedFlags(e) {
            this.m_EquipFlags = e;
          }
          BIsUncomitted() {
            return this.m_bUnsavedChanges;
          }
          SetComitted() {
            (this.m_bUnsavedChanges = !1),
              (this.m_CommittedEquippedItem = this.m_EquippedItem),
              this.m_CommittedEquippedItem &&
                (this.m_CommittedEquippedItem.equipped_flags =
                  this.m_EquipFlags);
          }
          Revert() {
            (this.m_EquippedItem = this.m_CommittedEquippedItem),
              (this.m_EquipFlags =
                this.m_EquippedItem && this.m_EquippedItem.equipped_flags),
              (this.m_bUnsavedChanges = !1);
          }
          async FillAppNames(e) {
            await this.m_parent.AppInfoStore.EnsureAppInfoForAppIDs(
              e.map((i) => i.appid),
            );
            for (let i of e)
              i.app_name = i.appid
                ? this.m_parent.AppInfoStore.GetAppInfo(i.appid).name
                : "";
            return e;
          }
        }
        pe([c.sH], de.prototype, "m_cItemsOwned", 2),
          pe([c.sH], de.prototype, "m_bUnsavedChanges", 2),
          pe([c.sH], de.prototype, "m_CommittedEquippedItem", 2),
          pe([c.sH], de.prototype, "m_EquippedItem", 2),
          pe([c.sH], de.prototype, "m_EquipFlags", 2),
          pe([c.XI], de.prototype, "SetEquipped", 1),
          pe([c.XI], de.prototype, "SetEquippedFlags", 1),
          pe([c.XI], de.prototype, "Revert", 1);
        var wi = Object.defineProperty,
          ji = Object.getOwnPropertyDescriptor,
          ce = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ji(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && wi(e, i, a), a;
          };
        class me {
          constructor(e, i, s, a, o, n) {
            (this.m_strDisplayCountry = void 0),
              (this.m_strDisplayState = void 0),
              (this.m_strDisplayCity = void 0),
              (this.m_strCountryCode = void 0),
              (this.m_strStateCode = void 0),
              (this.m_strCityCode = void 0),
              (this.m_bStateSelectionAvailable = !1),
              (this.m_bCitySelectionAvailable = !1),
              (0, c.Gn)(this),
              (this.m_strDisplayCountry = e),
              (this.m_strDisplayState = s),
              (this.m_strDisplayCity = o),
              (this.m_strCountryCode = i),
              (this.m_strStateCode = a),
              (this.m_strCityCode = n),
              this.m_strStateCode
                ? (this.m_bStateSelectionAvailable = !0)
                : this.m_strCountryCode && this.GetCountryList(),
              (this.m_bCitySelectionAvailable = !!this.m_strStateCode);
          }
          get Country() {
            return this.m_strDisplayCountry;
          }
          get CountryCode() {
            return this.m_strCountryCode;
          }
          SetCountry(e, i) {
            e != this.m_strCountryCode &&
              ((this.m_strStateCode = ""),
              (this.m_strDisplayState = ""),
              (this.m_strCityCode = ""),
              (this.m_strDisplayCity = "")),
              (this.m_strCountryCode = e),
              (this.m_strDisplayCountry = i),
              this.FindAndSetActiveCountry(),
              this.FindAndSetActiveState();
          }
          BIsStateSelectionAvailable() {
            return this.m_bStateSelectionAvailable;
          }
          get State() {
            return this.m_strDisplayState;
          }
          get StateCode() {
            return this.m_strStateCode;
          }
          SetState(e, i) {
            e != this.m_strStateCode &&
              ((this.m_strCityCode = ""), (this.m_strDisplayCity = "")),
              (this.m_strStateCode = e),
              (this.m_strDisplayState = i),
              this.FindAndSetActiveState();
          }
          BIsCitySelectionAvailable() {
            return this.m_bCitySelectionAvailable;
          }
          get City() {
            return this.m_strDisplayCity;
          }
          get CityCode() {
            return this.m_strCityCode;
          }
          SetCity(e, i) {
            (this.m_strCityCode = e), (this.m_strDisplayCity = i);
          }
          async GetCountryList() {
            return this.m_rgCountryList
              ? this.m_rgCountryList
              : this.m_promiseLoadCountries
                ? this.m_promiseLoadCountries
                : ((this.m_promiseLoadCountries = k()
                    .get(u.TS.COMMUNITY_BASE_URL + "/actions/QueryLocations/")
                    .then((e) => e.data)),
                  this.m_promiseLoadCountries.then(
                    (e) => {
                      (this.m_rgCountryList = e),
                        (this.m_promiseLoadCountries = null),
                        this.FindAndSetActiveCountry();
                    },
                    () => {
                      this.m_promiseLoadCountries = null;
                    },
                  ),
                  this.m_promiseLoadCountries);
          }
          FindAndSetActiveCountry() {
            (this.m_CountryCur =
              this.m_strCountryCode &&
              this.m_rgCountryList.find(
                (e) => e.countrycode == this.m_strCountryCode,
              )),
              (this.m_bStateSelectionAvailable =
                this.m_CountryCur && !!this.m_CountryCur.hasstates);
          }
          async GetStateList() {
            this.m_CountryCur || (await this.GetCountryList());
            let e = this.m_CountryCur;
            return !e || !e.hasstates
              ? []
              : e.states !== void 0
                ? e.states
                : (e.stateloader ||
                    ((e.stateloader = k()
                      .get(
                        u.TS.COMMUNITY_BASE_URL +
                          `/actions/QueryLocations/${e.countrycode}/`,
                      )
                      .then((i) => i.data)),
                    e.stateloader.then(
                      (i) => {
                        (e.states = i || []),
                          delete e.stateloader,
                          this.FindAndSetActiveState();
                      },
                      () => {
                        delete e.stateloader;
                      },
                    )),
                  e.stateloader);
          }
          FindAndSetActiveState() {
            (this.m_StateCur =
              this.m_CountryCur &&
              this.m_CountryCur.states &&
              this.m_CountryCur.states.find(
                (e) => e.statecode == this.m_strStateCode,
              )),
              (this.m_bCitySelectionAvailable = !!this.m_StateCur);
          }
          async GetCityList() {
            this.m_StateCur || (await this.GetStateList());
            let e = this.m_StateCur;
            return e
              ? e.cities !== void 0
                ? e.cities
                : (e.cityloader ||
                    ((e.cityloader = k()
                      .get(
                        u.TS.COMMUNITY_BASE_URL +
                          `/actions/QueryLocations/${e.countrycode}/${e.statecode}`,
                      )
                      .then((i) => i.data)),
                    e.cityloader.then(
                      (i) => {
                        (e.cities = i || []), delete e.cityloader;
                      },
                      () => {
                        delete e.cityloader;
                      },
                    )),
                  e.cityloader)
              : [];
          }
        }
        ce([c.sH], me.prototype, "m_strDisplayCountry", 2),
          ce([c.sH], me.prototype, "m_strDisplayState", 2),
          ce([c.sH], me.prototype, "m_strDisplayCity", 2),
          ce([c.sH], me.prototype, "m_strCountryCode", 2),
          ce([c.sH], me.prototype, "m_strStateCode", 2),
          ce([c.sH], me.prototype, "m_strCityCode", 2),
          ce([c.sH], me.prototype, "m_bStateSelectionAvailable", 2),
          ce([c.sH], me.prototype, "m_bCitySelectionAvailable", 2),
          ce([c.XI], me.prototype, "SetCountry", 1),
          ce([c.XI], me.prototype, "SetState", 1),
          ce([c.XI], me.prototype, "SetCity", 1),
          ce([c.XI], me.prototype, "FindAndSetActiveCountry", 1),
          ce([c.XI], me.prototype, "FindAndSetActiveState", 1);
        var Bi = Object.defineProperty,
          Ii = Object.getOwnPropertyDescriptor,
          Cr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ii(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Bi(e, i, a), a;
          };
        class qt {
          constructor(e, i, s) {
            (this.m_ActiveTheme = void 0),
              (0, c.Gn)(this),
              (this.m_CMInterface = e),
              (this.m_rgAvailableThemes = s.map((a) => ({
                ...a,
                theme_id: a.theme_id || "Default",
                title: (0, l.we)(a.title),
              }))),
              i === void 0 || i.theme_id === ""
                ? this.SetActiveTheme("Default", !0)
                : ((this.m_ActiveTheme = i), (this.m_ComittedActiveTheme = i));
          }
          get ActiveTheme() {
            return this.m_ActiveTheme;
          }
          get AvailableThemes() {
            return this.m_rgAvailableThemes;
          }
          SetActiveTheme(e, i = !1) {
            for (let s of this.m_rgAvailableThemes)
              if (e === s.theme_id) {
                (this.m_ActiveTheme = s), i && (this.m_ComittedActiveTheme = s);
                break;
              }
          }
          BActiveThemeUncomitted() {
            return (
              this.m_ActiveTheme.theme_id != this.m_ComittedActiveTheme.theme_id
            );
          }
          RevertActiveTheme() {
            this.m_ActiveTheme = this.m_ComittedActiveTheme;
          }
          async CommitActiveTheme() {
            let e = ne.w.Init(z.yow);
            e.Body().set_theme_id(
              this.ActiveTheme.theme_id == "Default"
                ? ""
                : this.ActiveTheme.theme_id,
            );
            const i = await z.xtC.SetProfileTheme(
              this.m_CMInterface.GetServiceTransport(),
              e,
            );
            return (
              i.GetEResult() == U.R &&
                (this.m_ComittedActiveTheme = this.ActiveTheme),
              i.GetEResult()
            );
          }
        }
        Cr([c.sH], qt.prototype, "m_ActiveTheme", 2),
          Cr([c.XI], qt.prototype, "RevertActiveTheme", 1);
        var Kt = d(35413);
        async function Wt(r, e) {
          let i;
          if (e instanceof FormData) i = e;
          else {
            i = new FormData();
            for (const a in e) i.append(a, e[a]);
          }
          i.append("type", r),
            i.append("sessionID", (0, u.KC)()),
            i.append("json", "1");
          const s = `${O.ProfileURL}edit/`;
          try {
            let a = await k().post(s, i);
            return {
              eResult: a.data.success,
              strHTMLError: a.data.errmsg,
              strRedirectURL: a.data.redirect,
            };
          } catch {
            return {
              eResult: U.iV,
              strHTMLError: (0, l.we)("#ConnectionTrouble_FailedToConnect"),
            };
          }
        }
        var Ei = Object.defineProperty,
          Gi = Object.getOwnPropertyDescriptor,
          dt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Gi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ei(e, i, a), a;
          };
        class Qe {
          constructor(e) {
            (this.m_PrimaryGroup = void 0),
              (this.m_bLoaded = !1),
              (0, c.Gn)(this),
              e &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup =
                  new Sr(new Nt.b(e.steamid), e.name, e.avatarHash));
          }
          get PrimaryGroup() {
            return this.m_PrimaryGroup;
          }
          SetPrimaryGroup(e) {
            this.m_PrimaryGroup = e;
          }
          BGroupsLoaded() {
            return this.m_bLoaded;
          }
          BHasAnyGroups() {
            return this.m_rgUserGroups.length > 0;
          }
          GetUserGroups() {
            return (
              this.m_bLoaded || this.StartUserGroupLoad(), this.m_rgUserGroups
            );
          }
          async BWaitForUserGroups() {
            return this.StartUserGroupLoad(), this.m_promiseLoading;
          }
          StartUserGroupLoad() {
            this.m_promiseLoading ||
              (this.m_promiseLoading = this.LoadUserGroups());
          }
          async LoadUserGroups() {
            let e = await k().get(
              `${O.ProfileURL}ajaxgroupinvite?select_primary=1&json=1`,
            );
            return (
              (0, c.h5)(() => {
                e.data &&
                  (this.m_rgUserGroups = e.data.map(
                    (i) => new Sr(new Nt.b(i.steamid), i.name, i.avatarHash),
                  )),
                  (this.m_bLoaded = !0);
              }),
              !!e.data
            );
          }
          BPrimaryGroupUncomitted() {
            return (
              (this.m_PrimaryGroup &&
                this.m_PrimaryGroup.GetSteamID().GetAccountID()) !=
              (this.m_CommittedPrimaryGroup &&
                this.m_CommittedPrimaryGroup.GetSteamID().GetAccountID())
            );
          }
          async CommitPrimaryGroup() {
            let e = await Wt("favoriteclan", {
              primary_group_steamid: this.m_PrimaryGroup
                .GetSteamID()
                .ConvertTo64BitString(),
            });
            return (
              e.eResult == U.R &&
                (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup),
              e
            );
          }
          RevertPrimaryGroupChanges() {
            this.m_PrimaryGroup = this.m_CommittedPrimaryGroup;
          }
        }
        dt([c.sH], Qe.prototype, "m_PrimaryGroup", 2),
          dt([c.sH], Qe.prototype, "m_bLoaded", 2),
          dt([c.XI], Qe.prototype, "SetPrimaryGroup", 1),
          dt([c.XI], Qe.prototype, "RevertPrimaryGroupChanges", 1);
        class Sr {
          constructor(e, i, s) {
            (this.m_steamID = e),
              (this.m_strName = i),
              (this.m_strAvatarHash = s);
          }
          GetSteamID() {
            return this.m_steamID;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURL(e) {
            return (0, Kt.t)(
              this.m_strAvatarHash ||
                "0000000000000000000000000000000000000000",
              e,
            );
          }
        }
        var Ri = Object.defineProperty,
          bi = Object.getOwnPropertyDescriptor,
          fe = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? bi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ri(e, i, a), a;
          };
        class Ni {
          constructor(e, i, s) {
            (this.m_OGGAvatars = new Pr()),
              (this.m_EmoticonStore = new ei.T()),
              (this.m_Profile = new V(e)),
              (this.m_WebAPI = s),
              (this.m_AppInfoStore = new X.Mi()),
              this.m_AppInfoStore.Init(this.m_WebAPI),
              this.m_AppInfoStore.SetCacheStorage(new ve.A()),
              (this.m_ProfileBadges = new nt(
                this.m_WebAPI,
                this.m_AppInfoStore,
                i,
              )),
              (this.m_ProfileItems = new We(
                this.m_WebAPI,
                this.m_AppInfoStore,
                e.rgGoldenProfileData,
              )),
              (this.m_ProfileTheme = new qt(
                this.m_WebAPI,
                e.ActiveTheme,
                e.rgAvailableThemes,
              )),
              (this.m_ProfilePrivacy = new Ke(
                e.Privacy.PrivacySettings,
                e.Privacy.eCommentPermission,
              )),
              (this.m_AvatarHistory = new gr(this.m_WebAPI)),
              this.m_ProfileItems.AddOnAvatarEquipmentChangedCallback(() => {
                this.m_Profile.MiniProfileData.Reload(),
                  this.m_AvatarHistory.RefreshAvatarHistory();
              });
          }
          get ServiceTransport() {
            return this.m_WebAPI.GetServiceTransport();
          }
          get Profile() {
            return this.m_Profile;
          }
          get ProfileBadges() {
            return this.m_ProfileBadges;
          }
          get ProfileItems() {
            return this.m_ProfileItems;
          }
          get ProfileTheme() {
            return this.m_ProfileTheme;
          }
          get ProfilePrivacy() {
            return this.m_ProfilePrivacy;
          }
          get OGGAvatarStore() {
            return this.m_OGGAvatars;
          }
          get AvatarHistory() {
            return this.m_AvatarHistory;
          }
          get EmoticonStore() {
            return this.m_EmoticonStore;
          }
          get MiniProfileOverrideData() {
            return {
              favorite_badge: this.m_ProfileBadges.GetFavoriteBadgePreview(),
            };
          }
        }
        class V {
          constructor(e) {
            (this.m_strPersonaName = void 0),
              (this.m_strCommittedPersonaName = void 0),
              (this.m_strCustomURL = void 0),
              (this.m_strRealName = void 0),
              (this.m_strSummary = void 0),
              (this.m_strAvatarHash = void 0),
              (this.m_strCommittedAvatarHash = void 0),
              (this.m_Preferences = void 0),
              (0, c.Gn)(this),
              (this.m_strPersonaName = e.strPersonaName),
              (this.m_strFilteredPersonaName = e.strFilteredPersonaName),
              (this.m_strCustomURL = e.strCustomURL),
              (this.m_strRealName = e.strRealName),
              (this.m_strFilteredRealName = e.strFilteredRealName),
              (this.m_strSummary = e.strSummary),
              (this.m_Preferences = e.ProfilePreferences),
              this.SetBasicInfoChangesComitted(),
              (this.m_strCommittedAvatarHash = this.m_strAvatarHash =
                e.strAvatarHash);
            const {
              LocationData: {
                locCountry: i,
                locCountryCode: s,
                locState: a,
                locStateCode: o,
                locCity: n,
                locCityCode: p,
              },
            } = e;
            (this.m_Location = new me(i, s, a, o, n, p)),
              (this.m_GroupList = new Qe(e.PrimaryGroup));
            const g = new Nt.b(u.iA.steamid);
            (this.m_MiniProfileData = new fr(g.GetAccountID())),
              (this.m_persona = new j.Z(g)),
              (0, c.fm)(() => {
                this.BuildPersonaStateObject();
              }),
              (this.m_rtPersonaNameBannedUntil =
                e.rtPersonaNameBannedUntil || void 0),
              (this.m_rtProfileSummaryBannedUntil =
                e.rtProfileSummaryBannedUntil || void 0),
              (this.m_rtAvatarBannedUntil = e.rtAvatarBannedUntil || void 0);
          }
          RevertBasicInfoChanges() {
            (this.m_strPersonaName = this.m_strCommittedPersonaName),
              (this.m_strFilteredPersonaName =
                this.m_strCommittedFilteredPersonaName),
              (this.m_strCustomURL = this.m_strComittedCustomURL),
              (this.m_strRealName = this.m_strComittedRealName),
              (this.m_strFilteredRealName =
                this.m_strCommittedFilteredRealName),
              (this.m_strSummary = this.m_strComittedSummary);
          }
          SetBasicInfoChangesComitted() {
            (this.m_strCommittedPersonaName = this.m_strPersonaName),
              (this.m_strCommittedFilteredPersonaName =
                this.m_strFilteredPersonaName),
              (this.m_strComittedCustomURL = this.m_strCustomURL),
              (this.m_strComittedRealName = this.m_strRealName),
              (this.m_strCommittedFilteredRealName =
                this.m_strFilteredRealName),
              (this.m_strComittedSummary = this.m_strSummary);
          }
          NotifyRNMobileAppStateChanged() {
            const e = Reflect.get(window, "ReactNativeWebView");
            if (e != null && e.postMessage) {
              const i = {
                event_name: "personastatechanged",
                steamid: u.iA.steamid,
              };
              e.postMessage(JSON.stringify(i));
            }
          }
          GetPersonaName() {
            return this.m_strPersonaName;
          }
          GetComittedPersonaName() {
            return this.m_strCommittedPersonaName;
          }
          SetPersonaName(e) {
            (this.m_strPersonaName = e), (this.m_strFilteredPersonaName = e);
          }
          HasFilteredPersonaName() {
            return this.m_strPersonaName !== this.m_strFilteredPersonaName;
          }
          GetRealName() {
            return this.m_strRealName;
          }
          SetRealName(e) {
            (this.m_strRealName = e), (this.m_strFilteredRealName = e);
          }
          HasFilteredRealName() {
            return this.m_strRealName !== this.m_strFilteredRealName;
          }
          GetCustomURL() {
            return this.m_strCustomURL;
          }
          SetCustomURL(e) {
            this.m_strCustomURL = e;
          }
          GetConstructedURL() {
            return this.m_strCustomURL
              ? `${u.TS.COMMUNITY_BASE_URL}id/${this.m_strCustomURL}/`
              : `${u.TS.COMMUNITY_BASE_URL}profiles/${u.iA.steamid}/`;
          }
          GetAvatarHash() {
            return this.m_strAvatarHash;
          }
          GetCommittedAvatarHash() {
            return this.m_strCommittedAvatarHash;
          }
          GetSummary() {
            return this.m_strSummary;
          }
          SetSummary(e) {
            this.m_strSummary = e;
          }
          GetPreferences() {
            return this.m_Preferences;
          }
          SetPreferences(e) {
            this.m_Preferences = e;
          }
          GetPrimaryGroupSteamID() {
            return (
              this.m_GroupList.PrimaryGroup &&
              this.m_GroupList.PrimaryGroup.GetSteamID()
            );
          }
          get GroupList() {
            return this.m_GroupList;
          }
          get Location() {
            return this.m_Location;
          }
          get MiniProfileData() {
            return (
              this.m_MiniProfileData.EnsureCommunityDataLoaded(),
              this.m_MiniProfileData
            );
          }
          get PersonaState() {
            return this.m_persona;
          }
          BuildPersonaStateObject() {
            (this.m_persona.m_strPlayerName = this.m_strPersonaName),
              (this.m_persona.m_strAvatarHash = this.m_strAvatarHash),
              (this.m_persona.m_ePersonaState = b.UXk);
          }
          async UploadAvatar(e) {
            let i = new FormData();
            i.append("avatar", e),
              i.append("type", "player_avatar_image"),
              i.append("sId", u.iA.steamid),
              i.append("sessionid", (0, u.KC)()),
              i.append("doSub", "1"),
              i.append("json", "1");
            let s = !1,
              a = "";
            try {
              let o = await k().post(
                `${u.TS.COMMUNITY_BASE_URL}actions/FileUploader/`,
                i,
              );
              o.data && o.data.success
                ? ((s = !0), this.SetAvatarHash(o.data.hash, !0))
                : (a =
                    (o.data && o.data.message) ||
                    (0, l.we)("#Chat_Settings_Error_ServerError"));
            } catch (o) {
              a =
                (o.response && o.response.data.message) ||
                (0, l.we)("#Chat_Settings_Error_ServerError");
            }
            return { bSuccess: s, strError: a };
          }
          SetAvatarHash(e, i = !1) {
            (this.m_strAvatarHash = e), i && this.CommitAvatarHash();
          }
          BHasUncomittedAvatarChanges() {
            return this.m_strAvatarHash != this.m_strCommittedAvatarHash;
          }
          CommitAvatarHash() {
            this.m_strCommittedAvatarHash = this.m_strAvatarHash;
          }
          RevertToComittedAvatarHash() {
            this.m_strAvatarHash = this.m_strCommittedAvatarHash;
          }
          BIsPersonaNameChangeOnCooldown() {
            return !!this.m_rtPersonaNameBannedUntil;
          }
          GetPersonaNameCooldownEndRTime() {
            return this.m_rtPersonaNameBannedUntil;
          }
          BIsProfileSummaryChangeOnCooldown() {
            return !!this.m_rtProfileSummaryBannedUntil;
          }
          GetProfileSummaryCooldownEndRTime() {
            return this.m_rtProfileSummaryBannedUntil;
          }
          BIsAvatarChangeOnCooldown() {
            return !!this.m_rtAvatarBannedUntil;
          }
          GetAvatarChangeCooldownEndRTime() {
            return this.m_rtAvatarBannedUntil;
          }
        }
        (V.k_strPersonaNameCooldownSupportURL =
          "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B"),
          (V.k_strProfileSummaryCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B"),
          (V.k_strAvatarCooldownSupportURL =
            "https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B"),
          (V.k_strNameFilteredSupportURL =
            "https://help.steampowered.com/wizard/HelpWithSteamIssue/?issueid=415"),
          fe([c.sH], V.prototype, "m_strPersonaName", 2),
          fe([c.sH], V.prototype, "m_strCommittedPersonaName", 2),
          fe([c.sH], V.prototype, "m_strCustomURL", 2),
          fe([c.sH], V.prototype, "m_strRealName", 2),
          fe([c.sH], V.prototype, "m_strSummary", 2),
          fe([c.sH], V.prototype, "m_strAvatarHash", 2),
          fe([c.sH], V.prototype, "m_strCommittedAvatarHash", 2),
          fe([c.sH], V.prototype, "m_Preferences", 2),
          fe([c.XI], V.prototype, "RevertBasicInfoChanges", 1),
          fe([c.XI], V.prototype, "SetAvatarHash", 1),
          fe([c.XI], V.prototype, "RevertToComittedAvatarHash", 1);
        var $ = d(92757),
          ue = d(32093),
          Qt = d(68312),
          Ta = d(64641),
          Li = d(72739),
          ee = d(35471),
          I = d(19316),
          B = d(54963),
          Oi = d(72609),
          ze = d(88942),
          A = d(45301),
          F = d(19298),
          ie = d(31270),
          xr = d(2801),
          je = d(25792),
          Fi = d(92264),
          Di = Object.defineProperty,
          Ti = Object.getOwnPropertyDescriptor,
          ct = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Ti(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Di(e, i, a), a;
          };
        const Ma = ({ className: r, children: e }) =>
            jsx("div", {
              className: classnames(styles.ProfileRow, r),
              children: e,
            }),
          Ua = ({ className: r, children: e }) =>
            jsx("div", {
              className: classnames(styles.ProfileCol, r),
              children: e,
            }),
          ut = ({ title: r, className: e, children: i }) =>
            (0, t.jsxs)("div", {
              className: (0, v.A)(ie.ProfileBox, e),
              children: [
                (0, t.jsx)("div", {
                  className: ie.ProfileBoxTitle,
                  children: r,
                }),
                (0, t.jsx)("div", {
                  className: ie.ProfileBoxContent,
                  children: (0, t.jsx)(je.tH, { children: i }),
                }),
              ],
            }),
          Oe = ({ onSave: r, onCancel: e, disabled: i }) =>
            (0, t.jsxs)(F.Z, {
              className: ie.SaveCancelButtons,
              "flow-children": "row-reverse",
              children: [
                (0, t.jsx)(I.jn, {
                  onClick: r,
                  disabled: i,
                  children: (0, l.we)("#Button_Save"),
                }),
                (0, t.jsx)(I.$n, {
                  onClick: e,
                  children: (0, l.we)("#Button_Cancel"),
                }),
              ],
            });
        function Ve(r) {
          return (0, l.we)(r).replace(/%s/g, "");
        }
        function Ha(r) {
          const { active: e, onDismiss: i, strDialogTitle: s, ...a } = r;
          return jsxs(DialogModal, {
            active: e,
            onDismiss: i,
            children: [
              s && jsx(Dialog.Header, { children: s }),
              jsx(Dialog.Body, {
                children: jsx(ErrorBoundary, { children: jsx(Ze, { ...a }) }),
              }),
            ],
          });
        }
        class be extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { activeItem: void 0, bSaving: !1 });
          }
          static getDerivedStateFromProps(e, i) {
            return {
              activeItem: i.activeItem !== void 0 ? i.activeItem : e.ActiveItem,
            };
          }
          async CommitChanges() {
            this.setState({ bSaving: !0 });
            let e = await this.props.fnCommitChanges(this.state.activeItem);
            this.setState({ bSaving: !1 });
          }
          async RevertChanges() {
            this.setState({ activeItem: this.props.ActiveItem }),
              this.props.fnRevertChanges();
          }
          OnItemSelected(e) {
            this.setState({ activeItem: e });
          }
          render() {
            const {
                strDialogTitle: e,
                ActiveItem: i,
                className: s,
                fnRenderPreview: a,
                ...o
              } = this.props,
              { activeItem: n, bSaving: p } = this.state;
            return (0, t.jsxs)(I.nB, {
              className: (0, v.A)(ie.PickerPreviewDialog, s),
              children: [
                (0, t.jsx)($.XG, {
                  when: !o.fnIsSameItem(n, this.props.ActiveItem),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsxs)(F.Z, {
                  className: ie.PickerPreviewBody,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("div", {
                      className: ie.PickerPreview,
                      children: (0, t.jsx)(je.tH, { children: a(n) }),
                    }),
                    e && (0, t.jsx)(I.Y9, { children: e }),
                    (0, t.jsx)("div", {
                      className: ie.PickerPreviewItems,
                      children: (0, t.jsx)(je.tH, {
                        children: (0, t.jsx)(Ze, {
                          ...o,
                          onItemSelected: this.OnItemSelected,
                          activeItem: n,
                        }),
                      }),
                    }),
                    (0, t.jsx)(Oe, {
                      onSave: this.CommitChanges,
                      onCancel: this.RevertChanges,
                      disabled: p,
                    }),
                  ],
                }),
              ],
            });
          }
        }
        ct([B.oI], be.prototype, "CommitChanges", 1),
          ct([B.oI], be.prototype, "RevertChanges", 1),
          ct([B.oI], be.prototype, "OnItemSelected", 1);
        function Mi(r) {
          return r ? r.toLocaleLowerCase().replace(/\W/g, "") : "";
        }
        class Ze extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { strSearch: "" }),
              (this.m_rgSearchableItems = null),
              (this.m_refRootDiv = h.createRef());
          }
          async componentDidMount() {
            if (this.m_rgSearchableItems === null) {
              const {
                  getItems: e,
                  getSearchFields: i,
                  onItemSelected: s,
                } = this.props,
                a = await e();
              this.m_fnSearchFieldsDisposer = (0, c.fm)(() => {
                (this.m_rgSearchableItems = a.map((o, n) => ({
                  key: "" + n,
                  normalized_search_strings: i && i(o).map(Mi),
                  OnSelected: () => {
                    s(o);
                  },
                  item: o,
                }))),
                  this.props.RenderDefaultComponent &&
                    this.m_rgSearchableItems.unshift({
                      key: "default",
                      normalized_search_strings: [""],
                      OnSelected: () => {
                        s(null);
                      },
                      item: null,
                    }),
                  this.forceUpdate();
              });
            }
          }
          componentWillUnmount() {
            this.m_fnSearchFieldsDisposer && this.m_fnSearchFieldsDisposer();
          }
          BuildFilterPredicate() {
            const { strSearch: e } = this.state;
            if (e && e.trim().length) {
              let i = e
                .toLocaleLowerCase()
                .split(/\W/)
                .filter((s) => s.trim().length > 0);
              return (s) => {
                for (let a of i) {
                  let o = !1;
                  for (let n of s.normalized_search_strings)
                    if (n.includes(a)) {
                      o = !0;
                      break;
                    }
                  if (!o) return !1;
                }
                return !0;
              };
            }
            return null;
          }
          OnSearchChange(e) {
            let i = e.currentTarget.value;
            this.setState((s) => {
              let a = { strSearch: i };
              if (!s.strSearch && i) {
                let o = this.m_refRootDiv.current.getBoundingClientRect();
                (a.nHeight = o.height), (a.nWidth = o.width);
              } else
                s.strSearch && !i && ((a.nHeight = null), (a.nWidth = null));
              return a;
            });
          }
          render() {
            const {
                ItemComponent: e,
                RenderDefaultComponent: i,
                getSearchFields: s,
                activeItem: a,
                fnIsSameItem: o,
                classNameItemPicker: n,
              } = this.props,
              { strSearch: p, nWidth: g, nHeight: S } = this.state;
            if (this.m_rgSearchableItems === null) return null;
            let R = this.BuildFilterPredicate(),
              q = {};
            g && S && (q = { width: g + "px", height: S + "px" });
            let H =
              o ||
              function (L, Z) {
                return L == Z;
              };
            return (0, t.jsxs)(F.Z, {
              className: (0, v.A)(ie.ItemPicker, n),
              ref: this.m_refRootDiv,
              style: q,
              "flow-children": "column",
              children: [
                s &&
                  (0, t.jsx)("div", {
                    className: ie.ItemPickeFilter,
                    children: (0, t.jsx)(I.pd, {
                      value: p,
                      label: (0, l.we)("#ItemPicker_Filter"),
                      onChange: this.OnSearchChange,
                    }),
                  }),
                (0, t.jsx)("div", {
                  className: ie.ItemPickerCtn,
                  children: (0, t.jsx)(F.Z, {
                    className: ie.ItemPickerList,
                    "flow-children": "grid",
                    children: this.m_rgSearchableItems.map((L) =>
                      R && !R(L)
                        ? null
                        : L.item
                          ? (0, t.jsx)(
                              je.tH,
                              {
                                children: (0, t.jsx)(e, {
                                  Item: L.item,
                                  onSelected: L.OnSelected,
                                  active: a && H(L.item, a),
                                }),
                              },
                              L.key,
                            )
                          : (0, t.jsx)(
                              je.tH,
                              {
                                children: i({
                                  onSelected: L.OnSelected,
                                  active: !a,
                                }),
                              },
                              L.key,
                            ),
                    ),
                  }),
                }),
              ],
            });
          }
        }
        ct([B.oI], Ze.prototype, "OnSearchChange", 1);
        const Fe = ({ strHTMLError: r }) =>
            r
              ? (0, t.jsxs)("div", {
                  className: ie.HTMLErrorBox,
                  children: [
                    (0, t.jsxs)("b", {
                      children: [(0, l.we)("#Error_Generic_Label"), "\xA0"],
                    }),
                    (0, t.jsx)("span", {
                      className: ie.HTMLError,
                      dangerouslySetInnerHTML: { __html: r },
                    }),
                  ],
                })
              : null,
          ht = ({
            strCooldownLabel: r,
            rtCooldownEnd: e,
            strCooldownDescHTML: i,
            children: s,
          }) => {
            if (!e) return (0, t.jsx)(t.Fragment, { children: s });
            const a = Math.max(0, e - Date.now() / 1e3);
            return (0, t.jsxs)("div", {
              className: ie.CooldownNotice,
              children: [
                (0, t.jsxs)("div", {
                  className: ie.HTMLErrorBox,
                  children: [
                    (0, t.jsxs)("div", {
                      className: ie.ErrorMessage,
                      children: [
                        r,
                        " ",
                        (0, l.Hq)(a, {
                          eSuffix: Fi.a8.None,
                          bForceSingleUnits: !0,
                        }),
                        " ",
                      ],
                    }),
                    (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: ie.DisabledInputCtn,
                  children: s,
                }),
              ],
            });
          };
        function wr(r) {
          const { image: e, onSelected: i, className: s } = r,
            [a, o] = h.useState(!1),
            [n, p] = h.useState(!1),
            g = () => o(!0),
            S = () => o(!1),
            R = () => p(!0),
            q = () => p(!1),
            H = () => i(e);
          return (0, t.jsx)(F.Z, {
            className: s,
            onGamepadFocus: R,
            onGamepadBlur: q,
            onMouseEnter: g,
            onMouseLeave: S,
            onActivate: H,
            children: (0, t.jsx)("img", {
              src: a || n || ts ? mt(e) : Re(e),
              loading: "lazy",
            }),
          });
        }
        var Ui = d(24642),
          Hi = Object.defineProperty,
          ki = Object.getOwnPropertyDescriptor,
          pt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ki(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Hi(e, i, a), a;
          };
        let De = class extends h.Component {
          constructor() {
            super(...arguments), (this.state = { bReady: !1 });
          }
          async componentDidMount() {
            let r;
            ([this.m_rgAvatars, r] = await Promise.all([
              this.props.ProfileItems.GetOwnedAvatars(),
              this.props.OGGAvatars.BWaitForLoad(),
            ])),
              this.setState({ bReady: !0 });
          }
          SelectAnimatedAvatar(r) {
            this.props.Profile.RevertToComittedAvatarHash(),
              this.props.ProfileItems.SetEquippedAvatar(r),
              this.props.fnOnCollapse();
          }
          SelectOGGAvatar(r) {
            this.props.Profile.SetAvatarHash(r),
              this.props.ProfileItems.SetEquippedAvatar(null),
              this.props.fnOnCollapse();
          }
          SelectPreviousAvatar(r) {
            this.props.Profile.SetAvatarHash(r),
              this.props.ProfileItems.SetEquippedAvatar(null),
              this.props.fnOnCollapse();
          }
          GetTopAvatars(r = 4) {
            let e;
            if (((e = this.m_rgAvatars.slice(0, r)), e.length < r)) {
              const i = this.props.AvatarHistory.GetAvatarHistory();
              for (
                let s = 0;
                s < i.length && (e.push(i[s]), !(e.length >= r));
                ++s
              );
            }
            if (e.length < r) {
              let i = ni(this.props.OGGAvatars);
              for (
                let s = i.next();
                s.value && (e.push(s.value), !(e.length >= r));
                s = i.next()
              );
            }
            return e;
          }
          render() {
            if (!this.state.bReady) return !1;
            const {
              bExpanded: r,
              fnOnExpand: e,
              OGGAvatars: i,
              AvatarHistory: s,
              fnOnCollapse: a,
            } = this.props;
            if (r)
              return (0, t.jsxs)("div", {
                className: A.AvatarCollection,
                children: [
                  (0, t.jsx)(vt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourAvatars"),
                  }),
                  (0, t.jsx)(qi, {
                    rgAnimatedAvatars: this.m_rgAvatars,
                    OGGAvatars: i,
                    AvatarHistory: s,
                    onSelectAnimatedAvatar: this.SelectAnimatedAvatar,
                    onSelectOGGAvatar: this.SelectOGGAvatar,
                    onSelectPreviousAvatar: this.SelectPreviousAvatar,
                  }),
                ],
              });
            {
              let o = this.GetTopAvatars();
              return (0, t.jsxs)("div", {
                className: A.AvatarCollection,
                children: [
                  (0, t.jsx)(vt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourAvatars"),
                  }),
                  (0, t.jsx)("div", {
                    className: A.AvatarCollectionSingleRowWrapper,
                    children: (0, t.jsx)(F.Z, {
                      className: A.AvatarCollectionSingleRow,
                      "flow-children": "row",
                      children: o.map((n) =>
                        "communityitemid" in n
                          ? (0, t.jsxs)(
                              h.Fragment,
                              {
                                children: [
                                  (0, t.jsx)(jr, {
                                    avatar: n,
                                    onSelected: this.SelectAnimatedAvatar,
                                    large: !0,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: A.AvatarRowSpacer,
                                  }),
                                ],
                              },
                              n.communityitemid,
                            )
                          : "timestamp" in n
                            ? (0, t.jsxs)(
                                h.Fragment,
                                {
                                  children: [
                                    (0, t.jsx)(ft, {
                                      hash: n.avatar_hash,
                                      onSelected: this.SelectPreviousAvatar,
                                      large: !0,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: A.AvatarRowSpacer,
                                    }),
                                  ],
                                },
                                n.avatar_hash,
                              )
                            : (0, t.jsxs)(
                                h.Fragment,
                                {
                                  children: [
                                    (0, t.jsx)(ft, {
                                      hash: n.avatar_hash,
                                      onSelected: this.SelectOGGAvatar,
                                      large: !0,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: A.AvatarRowSpacer,
                                    }),
                                  ],
                                },
                                n.avatar_hash,
                              ),
                      ),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: A.ExpandButtonContainer,
                    children: (0, t.jsx)(I.$n, {
                      onClick: e,
                      children: (0, l.we)("#Profile_Edit_Avatar_SeeAll"),
                    }),
                  }),
                ],
              });
            }
          }
        };
        pt([B.oI], De.prototype, "SelectAnimatedAvatar", 1),
          pt([B.oI], De.prototype, "SelectOGGAvatar", 1),
          pt([B.oI], De.prototype, "SelectPreviousAvatar", 1),
          (De = pt([C.PA], De));
        const vt = ({ children: r }) =>
          (0, t.jsx)("div", {
            className: A.AvatarCollectionHeader,
            children: (0, t.jsx)("div", {
              className: A.AvatarCollectionName,
              children: r,
            }),
          });
        function jr(r) {
          const { avatar: e, onSelected: i, large: s } = r;
          return (0, t.jsx)(wr, {
            image: e,
            onSelected: i,
            className: (0, v.A)(A.AvatarPreview, A.Animated, s && A.Large),
          });
        }
        const ft = ({ hash: r, onSelected: e, large: i }) =>
            (0, t.jsx)(F.Z, {
              className: (0, v.A)(A.AvatarPreview, A.Static, i && A.Large),
              onClick: () => e(r),
              onActivate: () => e(r),
              children: (0, t.jsx)("img", {
                src: (0, j.tp)(r, i ? "full" : "medium"),
                loading: "lazy",
              }),
            }),
          qi = (0, C.PA)(
            ({
              rgAnimatedAvatars: r,
              OGGAvatars: e,
              AvatarHistory: i,
              onSelectAnimatedAvatar: s,
              onSelectOGGAvatar: a,
              onSelectPreviousAvatar: o,
            }) => {
              let n = i.GetAvatarHistory(),
                p = [...e.GetRecentGameAvatars(), ...e.GetOwnedGameAvatars()];
              return (0, t.jsxs)(F.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(Ki, { rgAnimatedAvatars: r, onSelected: s }),
                  (0, t.jsx)(Wi, { rgAvatars: n, onSelected: o }),
                  (0, t.jsx)(Br, {
                    OGGAvatars: e,
                    rgAvatars: p,
                    onSelected: a,
                    title: (0, l.we)("#Profile_Edit_YourGameAvatars"),
                  }),
                  p.length < 20 &&
                    (0, t.jsx)(Br, {
                      OGGAvatars: e,
                      rgAvatars: e.GetOtherGameAvatars(),
                      onSelected: a,
                      title: (0, l.we)("#Profile_Edit_MoreGameAvatars"),
                    }),
                ],
              });
            },
          ),
          Ki = ({ rgAnimatedAvatars: r, onSelected: e }) =>
            r.length
              ? (0, t.jsxs)("div", {
                  className: (0, v.A)(A.CollectionGroup, A.Primary),
                  children: [
                    (0, t.jsx)("div", {
                      className: A.Title,
                      children: (0, l.we)(
                        "#Profile_Edit_PurchasedFromRewardsStore",
                      ),
                    }),
                    (0, t.jsx)(F.Z, {
                      className: A.CollectionGroupAvatars,
                      "flow-children": "grid",
                      children: r.map((i) =>
                        (0, t.jsx)(
                          jr,
                          { avatar: i, onSelected: e },
                          i.communityitemid,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          Wi = (0, C.PA)(({ rgAvatars: r, onSelected: e }) =>
            r.length
              ? (0, t.jsxs)("div", {
                  className: (0, v.A)(A.CollectionGroup, A.Primary),
                  children: [
                    (0, t.jsx)("div", {
                      className: A.Title,
                      children: (0, l.we)("#Profile_Edit_YourPreviousAvatars"),
                    }),
                    (0, t.jsx)("div", {
                      className: A.CollectionGroupAvatars,
                      children: r.map((i) =>
                        (0, t.jsx)(
                          ft,
                          { hash: i.avatar_hash, onSelected: e },
                          i.avatar_hash,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          );
        function Br(r) {
          const { rgAvatars: e, OGGAvatars: i, onSelected: s, title: a } = r;
          return e.length
            ? (0, t.jsxs)("div", {
                className: (0, v.A)(A.CollectionGroup, A.Primary),
                children: [
                  (0, t.jsx)("div", { className: A.Title, children: a }),
                  e.map((o) =>
                    (0, t.jsx)(
                      Qi,
                      { OGGAvatars: i, game: o, onSelected: s },
                      o.appid,
                    ),
                  ),
                ],
              })
            : null;
        }
        function Qi(r) {
          const { game: e, onSelected: i, OGGAvatars: s } = r,
            [a, o] = h.useState(!1),
            { isLoading: n, data: p } = zi(s, e.appid, a);
          let g;
          a && p
            ? (g = p)
            : e.avatar_count == e.avatars.length
              ? (g = e.avatars)
              : (g = e.avatars.slice(0, 5));
          const S = e.avatar_count - g.length;
          return (0, t.jsxs)("div", {
            className: A.CollectionGroup,
            children: [
              (0, t.jsx)("div", { className: A.Title, children: e.name }),
              (0, t.jsxs)(F.Z, {
                className: A.CollectionGroupAvatars,
                "flow-children": "grid",
                children: [
                  g.map((R) =>
                    (0, t.jsx)(
                      ft,
                      { hash: R.avatar_hash, onSelected: i },
                      R.avatar_hash,
                    ),
                  ),
                  (!a || n) &&
                    S > 0 &&
                    (0, t.jsxs)(I.$n, {
                      type: "button",
                      className: (0, v.A)(
                        A.AvatarPreview,
                        A.ExpandAvatarsButton,
                        A.Static,
                      ),
                      disabled: n,
                      onClick: n ? void 0 : () => o(!0),
                      children: ["+", (0, Ui.D)(S)],
                    }),
                ],
              }),
            ],
          });
        }
        function zi(r, e, i) {
          return (0, ze.I)({
            queryKey: ["OGGAvatars", e],
            queryFn: async () => {
              const a = await (
                await fetch(
                  `${Oi.TS.COMMUNITY_BASE_URL}actions/GameAvatarsForGame/${e}`,
                )
              ).json();
              return r.UpdateAvatarsForGame(e, a), a;
            },
            enabled: i,
          });
        }
        var Vi = Object.defineProperty,
          Zi = Object.getOwnPropertyDescriptor,
          Yi = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Zi(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Vi(e, i, a), a;
          };
        class Ir extends h.Component {
          constructor() {
            super(...arguments), (this.state = { bReady: !1 });
          }
          async componentDidMount() {
            (this.m_rgFrames =
              await this.props.ProfileItems.GetOwnedAvatarFrames()),
              this.setState({ bReady: !0 });
          }
          SelectFrame(e) {
            this.props.ProfileItems.SetEquippedAvatarFrame(e),
              this.props.fnOnCollapse();
          }
          render() {
            if (!this.state.bReady) return !1;
            const {
              bExpanded: e,
              ProfileItems: i,
              fnOnExpand: s,
              fnOnCollapse: a,
            } = this.props;
            if (e)
              return (0, t.jsxs)("div", {
                className: A.AvatarCollection,
                children: [
                  (0, t.jsx)(vt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourFrames"),
                  }),
                  (0, t.jsx)(je.tH, {
                    children: (0, t.jsx)(Xi, {
                      rgFrames: this.m_rgFrames,
                      ProfileItems: i,
                      onSelected: this.SelectFrame,
                    }),
                  }),
                ],
              });
            {
              let o = this.m_rgFrames.slice(0, 2),
                n = this.m_rgFrames.length > 2;
              return (0, t.jsxs)(F.Z, {
                className: A.AvatarCollection,
                "flow-children": "column",
                children: [
                  (0, t.jsx)(vt, {
                    children: (0, l.we)("#Profile_Edit_Avatar_YourFrames"),
                  }),
                  (0, t.jsx)("div", {
                    className: A.AvatarCollectionSingleRowWrapper,
                    children: (0, t.jsxs)(F.Z, {
                      className: (0, v.A)(
                        A.AvatarCollectionSingleRow,
                        A.ThreeColumns,
                      ),
                      "flow-children": "row",
                      children: [
                        (0, t.jsx)(Gr, {
                          onSelected: this.SelectFrame,
                          large: !0,
                          ProfileItems: i,
                        }),
                        (0, t.jsx)("div", { className: A.AvatarRowSpacer }),
                        (0, t.jsx)(je.tH, {
                          children: o.map((p) =>
                            (0, t.jsxs)(
                              h.Fragment,
                              {
                                children: [
                                  (0, t.jsx)(Er, {
                                    frame: p,
                                    onSelected: this.SelectFrame,
                                    large: !0,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: A.AvatarRowSpacer,
                                  }),
                                ],
                              },
                              p.communityitemid,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  n &&
                    (0, t.jsx)("div", {
                      className: A.ExpandButtonContainer,
                      children: (0, t.jsx)(I.$n, {
                        onClick: s,
                        children: (0, l.we)("#Profile_Edit_Avatar_SeeAll"),
                      }),
                    }),
                ],
              });
            }
          }
        }
        Yi([B.oI], Ir.prototype, "SelectFrame", 1);
        function Er(r) {
          const { frame: e, onSelected: i, large: s } = r;
          return (0, t.jsx)(wr, {
            image: e,
            onSelected: i,
            className: (0, v.A)(A.FramePreview, s && A.Large),
          });
        }
        const Gr = (0, C.PA)(({ onSelected: r, ProfileItems: e, large: i }) => {
            let s = e.GetProfileModifierAvatarFrameURL();
            return s
              ? (0, t.jsx)(F.Z, {
                  className: (0, v.A)(A.FramePreview, i && A.Large),
                  onActivate: () => r(null),
                  children: (0, t.jsx)("img", { src: s }),
                })
              : (0, t.jsx)(F.Z, {
                  className: (0, v.A)(
                    A.FramePreview,
                    i && A.Large,
                    A.DefaultAvatarFramePreview,
                  ),
                  onActivate: () => r(null),
                  children: (0, t.jsx)("div", {
                    className: A.DefaultAvatarFrame,
                    children: (0, t.jsx)("div", {
                      className: A.DefaultAvatarFrameContent,
                    }),
                  }),
                });
          }),
          Xi = ({ rgFrames: r, ProfileItems: e, onSelected: i }) =>
            (0, t.jsxs)("div", {
              className: (0, v.A)(A.CollectionGroup, A.Primary),
              children: [
                (0, t.jsx)("div", {
                  className: A.Title,
                  children: (0, l.we)(
                    "#Profile_Edit_PurchasedFromRewardsStore",
                  ),
                }),
                (0, t.jsxs)(F.Z, {
                  className: A.CollectionGroupAvatars,
                  "flow-children": "grid",
                  children: [
                    (0, t.jsx)(Gr, { onSelected: i, ProfileItems: e }),
                    r.map((s) =>
                      (0, t.jsx)(
                        Er,
                        { frame: s, onSelected: i },
                        s.communityitemid,
                      ),
                    ),
                  ],
                }),
              ],
            });
        var Ji = Object.defineProperty,
          $i = Object.getOwnPropertyDescriptor,
          Be = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? $i(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ji(e, i, a), a;
          };
        const es = h.lazy(() =>
            Promise.all([d.e(4922), d.e(5278)]).then(d.bind(d, 66185)),
          ),
          ts = !0;
        let zt = class extends h.Component {
          render() {
            return (0, t.jsx)(Ie, { ...this.props });
          }
        };
        zt = Be([C.PA], zt);
        class rs extends h.Component {
          componentDidMount() {
            document
              .querySelector(".profile_small_header_avatar")
              .classList.add(ee.HideDefaultAvatar),
              (this.m_disposer = (0, c.fm)(() => {
                const { Profile: e, ProfileItems: i } = this.props,
                  s = Ye(
                    e.GetCommittedAvatarHash(),
                    i.GetCommittedEquippedAvatar(),
                    "small",
                    { disableAnimation: !0 },
                  );
                document
                  .querySelectorAll(".user_avatar > img")
                  .forEach((a) => (a.src = s));
              }));
          }
          componentWillUnmount() {
            document
              .querySelector(".profile_small_header_avatar")
              .classList.remove(ee.HideDefaultAvatar),
              this.m_disposer();
          }
          render() {
            const { Profile: e, ProfileItems: i } = this.props;
            return Li.createPortal(
              (0, t.jsx)(os, { Profile: e, ProfileItems: i }),
              document.querySelector(".profile_small_header_avatar"),
            );
          }
        }
        class Ie extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = {
                uploadImage: null,
                strUploadError: "",
                bAvatarCollectionExpanded: !1,
                bFrameCollectionExpanded: !1,
                bSaving: !1,
                bHTMLError: !1,
              }),
              (this.cropRef = h.createRef());
          }
          OnUploadSelected(e) {
            this.setState({
              uploadImage: e,
              bAvatarCollectionExpanded: !1,
              bFrameCollectionExpanded: !1,
            });
          }
          OnShowAllAvatarsClicked() {
            this.setState({
              bAvatarCollectionExpanded: !0,
              bFrameCollectionExpanded: !1,
            });
          }
          OnShowAllFramesClicked() {
            this.setState({
              bAvatarCollectionExpanded: !1,
              bFrameCollectionExpanded: !0,
            });
          }
          Reset() {
            (this.cropRef = h.createRef()),
              this.setState({
                uploadImage: null,
                strUploadError: "",
                bAvatarCollectionExpanded: !1,
                bFrameCollectionExpanded: !1,
                bHTMLError: !1,
              });
          }
          RevertChanges() {
            this.props.ProfileItems.RevertAvatarChanges(),
              this.props.Profile.RevertToComittedAvatarHash(),
              this.Reset();
          }
          async OnSave() {
            this.setState({ bSaving: !0 }),
              this.state.uploadImage
                ? await this.SaveUpload()
                : await this.CommitChanges(),
              this.setState({ bSaving: !1 }),
              this.props.Profile.NotifyRNMobileAppStateChanged();
          }
          async SaveUpload() {
            var e;
            const {
                Profile: i,
                ProfileItems: s,
                AvatarHistory: a,
              } = this.props,
              o = await i.UploadAvatar(
                await ((e = this.cropRef.current) == null
                  ? void 0
                  : e.getBlob()),
              );
            if (!o.bSuccess) {
              this.setState({ strUploadError: o.strError });
              return;
            }
            this.setState({ uploadImage: null, strUploadError: "" }),
              (this.cropRef = h.createRef()),
              s.SetEquippedAvatar(null, !0),
              a.RefreshAvatarHistory(),
              this.setState({
                bHTMLError: (await s.CommitAvatarChanges()) !== U.R,
              });
          }
          async CommitChanges() {
            const {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: s,
                AvatarHistory: a,
              } = this.props,
              [o, n, p] = await Promise.all([
                i.CommitAvatarChanges(),
                e.BHasUncomittedAvatarChanges()
                  ? s.SetPlayerOGGAvatar(e)
                  : Promise.resolve(U.R),
                e.BHasUncomittedAvatarChanges()
                  ? a.SetPreviousAvatar(e)
                  : Promise.resolve(U.R),
              ]);
            this.setState({
              bHTMLError: o !== U.R || (n !== U.R && p !== U.R),
            }),
              a.RefreshAvatarHistory();
          }
          componentWillUnmount() {
            this.RevertChanges();
          }
          render() {
            const {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: s,
                AvatarHistory: a,
              } = this.props,
              {
                uploadImage: o,
                bAvatarCollectionExpanded: n,
                bFrameCollectionExpanded: p,
                bSaving: g,
              } = this.state,
              S = {
                Profile: e,
                ProfileItems: i,
                OGGAvatars: s,
                AvatarHistory: a,
                fnOnCollapse: this.Reset,
              };
            return (0, t.jsxs)(I.nB, {
              className: ee.AvatarDialog,
              children: [
                (0, t.jsx)($.XG, {
                  when: i.BIsAvatarUncomitted(),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsxs)(F.Z, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(F.Z, {
                      className: ee.AvatarDialogBody,
                      "flow-children": "column",
                      children: [
                        (0, t.jsx)(I.Y9, {
                          children: (0, l.we)("#Profile_FieldAvatar"),
                        }),
                        (0, t.jsx)(I.a3, {
                          children: (0, l.we)(
                            "#Profile_Edit_Avatar_Instructions",
                          ),
                        }),
                        (0, t.jsx)(Fe, {
                          strHTMLError: this.state.bHTMLError
                            ? (0, l.we)("#ConnectionTrouble_FailedToConnect")
                            : "",
                        }),
                        (0, t.jsxs)(is, {
                          Profile: e,
                          children: [
                            (0, t.jsxs)("div", {
                              className: ee.AvatarDialogTop,
                              children: [
                                (0, t.jsx)(ss, { Profile: e, ProfileItems: i }),
                                (0, t.jsxs)("div", {
                                  className: ee.AvatarDialogUploadArea,
                                  children: [
                                    (0, t.jsx)(as, {
                                      OnAvatarSelected: this.OnUploadSelected,
                                      disabled: this.state.bSaving,
                                      strError: this.state.strUploadError,
                                    }),
                                    (0, t.jsx)("div", {
                                      children: (0, l.we)(
                                        "#Profile_Edit_Avatar_UploadInstructions",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o &&
                              (0, t.jsx)(h.Suspense, {
                                fallback: null,
                                children: (0, t.jsx)(es, {
                                  imageData: o,
                                  ref: this.cropRef,
                                }),
                              }),
                            !o &&
                              !p &&
                              (0, t.jsx)(De, {
                                ...S,
                                bExpanded: n,
                                fnOnExpand: this.OnShowAllAvatarsClicked,
                              }),
                            !o &&
                              !n &&
                              (0, t.jsx)(Ir, {
                                ...S,
                                bExpanded: p,
                                fnOnExpand: this.OnShowAllFramesClicked,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(Oe, {
                      onSave: this.OnSave,
                      onCancel: this.RevertChanges,
                      disabled: g || e.BIsAvatarChangeOnCooldown(),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        Be([B.oI], Ie.prototype, "OnUploadSelected", 1),
          Be([B.oI], Ie.prototype, "OnShowAllAvatarsClicked", 1),
          Be([B.oI], Ie.prototype, "OnShowAllFramesClicked", 1),
          Be([B.oI], Ie.prototype, "Reset", 1),
          Be([B.oI], Ie.prototype, "RevertChanges", 1),
          Be([B.oI], Ie.prototype, "OnSave", 1),
          Be([B.oI], Ie.prototype, "SaveUpload", 1),
          Be([B.oI], Ie.prototype, "CommitChanges", 1);
        const is = ({ Profile: r, children: e }) =>
          r.BIsAvatarChangeOnCooldown()
            ? (0, t.jsx)(ht, {
                rtCooldownEnd: r.GetAvatarChangeCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_AvatarUploadingBanned"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_AvatarUploadingBanned_Desc",
                  V.k_strAvatarCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        function Ye(r, e, i, s) {
          return e
            ? s != null && s.disableAnimation
              ? Re(e)
              : mt(e)
            : (0, Kt.t)(r || Kt.d, i);
        }
        const ss = (0, C.PA)(({ Profile: r, ProfileItems: e }) => {
            const i = r.GetAvatarHash(),
              s = e.GetEquippedAvatar(),
              a = e.GetEquippedAvatarFrame();
            let o = !a && e.GetEquippedProfileModifier();
            o && !e.BIsLegacyGoldenProfile(o.appid) && (o = null);
            let n = null;
            return (
              o ? (n = e.GetProfileModifierAvatarFrameURL()) : a && (n = mt(a)),
              (0, t.jsxs)("div", {
                className: ee.AvatarRow,
                children: [
                  (0, t.jsx)(Vt, {
                    sizeClassName: ee.Large,
                    sizePx: 184,
                    avatarURL: Ye(i, s, "full"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                  (0, t.jsx)(Vt, {
                    sizeClassName: ee.Medium,
                    sizePx: 64,
                    avatarURL: Ye(i, s, "medium"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                  (0, t.jsx)(Vt, {
                    sizeClassName: ee.Small,
                    sizePx: 32,
                    avatarURL: Ye(i, s, "small"),
                    frameURL: n,
                    isGolden: !!o,
                  }),
                ],
              })
            );
          }),
          Vt = ({
            sizeClassName: r,
            sizePx: e,
            avatarURL: i,
            frameURL: s,
            isGolden: a,
          }) =>
            (0, t.jsxs)("div", {
              className: (0, v.A)(ee.Avatar, r),
              children: [
                (0, t.jsxs)("div", {
                  className: ee.AvatarImgCtn,
                  children: [
                    (0, t.jsx)("div", { className: ee.AvatarCropPreview }),
                    s &&
                      (0, t.jsx)("div", {
                        className: ee.AvatarFrame,
                        children: (0, t.jsx)("img", { src: s }),
                      }),
                    a &&
                      (0, t.jsx)("div", { className: "goldenAvatarOverlay" }),
                    (0, t.jsx)("img", { src: i }),
                  ],
                }),
                (0, t.jsxs)("div", { className: ee.size, children: [e, "px"] }),
              ],
            });
        function as(r) {
          const { OnAvatarSelected: e, disabled: i, strError: s } = r,
            a = h.useRef(void 0),
            o = h.useCallback(() => {
              var n;
              const p = (n = a.current) == null ? void 0 : n.files;
              (p == null ? void 0 : p.length) > 0 &&
                p[0].type.startsWith("image/") &&
                (e(p[0]), (a.current.value = null));
            }, [e]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "file",
                accept: "image/*",
                style: { display: "none" },
                ref: a,
                onInput: o,
              }),
              !!s && (0, t.jsx)("div", { className: ee.Error, children: s }),
              (0, t.jsx)(I.$n, {
                onClick: () => a.current.click(),
                disabled: i,
                children: (0, l.we)("#Profile_UploadAvatar"),
              }),
            ],
          });
        }
        const os = (0, C.PA)(({ Profile: r, ProfileItems: e }) => {
          const i = Ye(
              r.GetCommittedAvatarHash(),
              e.GetCommittedEquippedAvatar(),
              "full",
            ),
            s = e.GetCommittedEquippedAvatarFrame(),
            a = !s && e.GetCommittedEquippedProfileModifier();
          let o = null;
          return (
            a ? (o = e.GetProfileModifierAvatarFrameURL()) : s && (o = mt(s)),
            (0, t.jsx)("div", {
              className: (0, v.A)(ee.Avatar, ee.Medium),
              children: (0, t.jsxs)("div", {
                className: ee.AvatarImgCtn,
                children: [
                  o &&
                    (0, t.jsx)("div", {
                      className: ee.AvatarFrame,
                      children: (0, t.jsx)("img", { src: o }),
                    }),
                  (0, t.jsx)("img", { src: i }),
                ],
              }),
            })
          );
        });
        var ns = d(43828),
          Rr = d(27456),
          Zt = d(65946);
        function ls(r) {
          const {
            Profile: { Location: e },
          } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(ms, { LocationStore: e }),
              (0, t.jsx)(ds, { LocationStore: e }),
              (0, t.jsx)(cs, { LocationStore: e }),
            ],
          });
        }
        async function Yt(r, e) {
          const i = await r();
          return [
            { label: (0, l.we)("#Profile_LocationDoNotDisplay"), data: null },
            ...i
              .map(e)
              .sort((s, a) =>
                s.data.strDisplayText.localeCompare(a.data.strDisplayText),
              ),
          ];
        }
        function ms(r) {
          const { LocationStore: e } = r,
            { CountryCode: i, Country: s } = e,
            [a, o] = h.useState(),
            n = (0, ze.I)({
              queryKey: ["CountryEdit"],
              queryFn: async () =>
                await Yt(
                  () => e.GetCountryList(),
                  (S) => ({
                    label: S.countryname,
                    data: {
                      strCode: S.countrycode,
                      strDisplayText: S.countryname,
                    },
                  }),
                ),
              staleTime: 1 / 0,
            });
          h.useEffect(() => {
            var g, S, R;
            o(
              (R =
                (g = n.data) == null
                  ? void 0
                  : g.find((q) => {
                      var H;
                      return (
                        ((H = q.data) == null ? void 0 : H.strCode) ==
                        e.CountryCode
                      );
                    })) != null
                ? R
                : ((S = n.data) == null ? void 0 : S.length) > 0
                  ? n.data[0]
                  : void 0,
            );
          }, [n.data, e.CountryCode]);
          const p = h.useCallback(
            (g) => {
              var S, R;
              e.SetCountry(
                (S = g.data) == null ? void 0 : S.strCode,
                (R = g.data) != null && R.strCode
                  ? g.data.strDisplayText
                  : void 0,
              ),
                o(g);
            },
            [e],
          );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "country",
                value: i || "",
              }),
              (0, t.jsx)(I.m, {
                contextMenuPositionOptions: { bDisablePopTop: !0 },
                label: (0, l.we)("#Profile_FieldCountry"),
                rgOptions: n.data,
                selectedOption: a == null ? void 0 : a.data,
                controlled: !0,
                disabled: n.isFetching,
                onChange: p,
                strDefaultLabel:
                  s || (0, l.we)("#Profile_LocationDoNotDisplay"),
                tooltip: Ve("#Profile_DescriptionLocation"),
              }),
            ],
          });
        }
        function ds(r) {
          const { LocationStore: e } = r,
            { StateCode: i, State: s } = e,
            [a, o] = h.useState(),
            [n, p] = (0, Zt.q3)(() => [
              e.BIsStateSelectionAvailable(),
              e.CountryCode,
            ]),
            g = (0, ze.I)({
              queryKey: ["StateEdit", p],
              queryFn: async () =>
                await Yt(
                  () => e.GetStateList(),
                  (H) => ({
                    label: H.statename,
                    data: { strCode: H.statecode, strDisplayText: H.statename },
                  }),
                ),
              staleTime: 1 / 0,
            });
          h.useEffect(() => {
            var q, H, L;
            o(
              (L =
                (q = g.data) == null
                  ? void 0
                  : q.find((Z) => {
                      var xe;
                      return (
                        ((xe = Z.data) == null ? void 0 : xe.strCode) ==
                        e.StateCode
                      );
                    })) != null
                ? L
                : ((H = g.data) == null ? void 0 : H.length) > 0
                  ? g.data[0]
                  : void 0,
            );
          }, [g.data, e.StateCode]);
          const S = h.useCallback(
              (q) => {
                var H, L;
                e.SetState(
                  (H = q.data) == null ? void 0 : H.strCode,
                  (L = q.data) != null && L.strCode
                    ? q.data.strDisplayText
                    : void 0,
                ),
                  o(q);
              },
              [e],
            ),
            R = n && !g.isError;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "state",
                value: i || "",
              }),
              R &&
                (0, t.jsx)(I.m, {
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                  label: (0, l.we)("#Profile_FieldState"),
                  rgOptions: g.data,
                  selectedOption: a == null ? void 0 : a.data,
                  controlled: !0,
                  disabled: g.isFetching,
                  onChange: S,
                  strDefaultLabel:
                    s || (0, l.we)("#Profile_LocationDoNotDisplay"),
                  tooltip: Ve("#Profile_DescriptionLocation"),
                }),
            ],
          });
        }
        function cs(r) {
          const { LocationStore: e } = r,
            { CityCode: i, City: s } = e,
            [a, o] = h.useState(),
            [n, p, g] = (0, Zt.q3)(() => [
              e.BIsCitySelectionAvailable(),
              e.CountryCode,
              e.StateCode,
            ]),
            S = (0, ze.I)({
              queryKey: ["CityEdit", p, g],
              queryFn: async () =>
                await Yt(
                  () => e.GetCityList(),
                  (L) => ({
                    label: L.cityname,
                    data: {
                      strCode: "" + L.cityid,
                      strDisplayText: L.cityname,
                    },
                  }),
                ),
              staleTime: 1 / 0,
              retry: !1,
            });
          h.useEffect(() => {
            var H, L, Z;
            o(
              (Z =
                (H = S.data) == null
                  ? void 0
                  : H.find((xe) => {
                      var Ne;
                      return (
                        ((Ne = xe.data) == null ? void 0 : Ne.strCode) ==
                        e.CityCode
                      );
                    })) != null
                ? Z
                : ((L = S.data) == null ? void 0 : L.length) > 0
                  ? S.data[0]
                  : void 0,
            );
          }, [S.data, e.CityCode]);
          const R = h.useCallback(
              (H) => {
                var L, Z;
                e.SetCity(
                  (L = H.data) == null ? void 0 : L.strCode,
                  (Z = H.data) != null && Z.strCode
                    ? H.data.strDisplayText
                    : void 0,
                ),
                  o(H);
              },
              [e],
            ),
            q = n && !S.isError;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("input", {
                type: "hidden",
                name: "city",
                value: i || "",
              }),
              q &&
                (0, t.jsx)(I.m, {
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                  label: (0, l.we)("#Profile_FieldCity"),
                  rgOptions: S.data,
                  selectedOption: a == null ? void 0 : a.data,
                  controlled: !0,
                  disabled: S.isFetching,
                  onChange: R,
                  strDefaultLabel:
                    s || (0, l.we)("#Profile_LocationDoNotDisplay"),
                  tooltip: Ve("#Profile_DescriptionLocation"),
                }),
            ],
          });
        }
        var us = d(22714),
          _t = d(19838),
          hs = Object.defineProperty,
          ps = Object.getOwnPropertyDescriptor,
          br = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ps(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && hs(e, i, a), a;
          };
        class Xt extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { strSummary: "" }),
              (this.m_refTextInput = h.createRef());
          }
          static getDerivedStateFromProps(e) {
            return { strSummary: e.Profile.GetSummary() };
          }
          OnChange(e) {
            this.SetInputValue(e.currentTarget.value);
          }
          InsertEmoticon(e, i) {
            i || this.m_refTextInput.current.focus(),
              this.InsertAtCursor(`:${e}:`);
          }
          InsertAtCursor(e) {
            let i = this.m_refTextInput.current.textarea,
              s = i.value,
              a = s.substr(0, i.selectionStart) + e + s.substr(i.selectionEnd),
              o = i.selectionStart + e.length;
            this.SetInputValue(a, () => {
              i.selectionStart = i.selectionEnd = o;
            });
          }
          SetInputValue(e, i) {
            this.setState({ strSummary: e }, i),
              this.props.Profile.SetSummary(e);
          }
          render() {
            const { EmoticonStore: e, Profile: i } = this.props,
              { strSummary: s } = this.state;
            return (0, t.jsx)(vs, {
              Profile: i,
              children: (0, t.jsxs)("div", {
                className: _t.summaryContainer,
                children: [
                  (0, t.jsx)(I.Cl, {
                    nMinHeight: 40,
                    name: "summary",
                    rows: 3,
                    cols: 40,
                    onChange: this.OnChange,
                    className: _t.summaryTextArea,
                    value: s,
                    ref: this.m_refTextInput,
                  }),
                  (0, t.jsx)("div", {
                    className: _t.formattingButtons,
                    children: (0, t.jsx)(us.A, {
                      className: _t.formattingButton,
                      disabled: !1,
                      OnEmoticonSelected: this.InsertEmoticon,
                      emoticonStore: e,
                    }),
                  }),
                ],
              }),
            });
          }
        }
        br([B.oI], Xt.prototype, "OnChange", 1),
          br([B.oI], Xt.prototype, "InsertEmoticon", 1);
        const vs = ({ Profile: r, children: e }) =>
          r.BIsProfileSummaryChangeOnCooldown()
            ? (0, t.jsx)(ht, {
                rtCooldownEnd: r.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_ProfileSummaryCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_ProfileSummaryCooldown_Desc",
                  V.k_strProfileSummaryCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        var Jt = d(72976),
          fs = Object.defineProperty,
          _s = Object.getOwnPropertyDescriptor,
          Ae = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? _s(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && fs(e, i, a), a;
          };
        class $t extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          OnSubmit(e) {
            e.preventDefault(), this.CommitChanges(e.currentTarget);
          }
          async CommitChanges(e) {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let i = await Wt("profileSave", new FormData(e));
            if (i.strRedirectURL) {
              window.location.href = `${i.strRedirectURL}/info`;
              return;
            }
            this.props.Profile.SetBasicInfoChangesComitted(),
              i.strHTMLError
                ? this.setState({ strHTMLError: i.strHTMLError })
                : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 }),
              this.props.Profile.NotifyRNMobileAppStateChanged();
          }
          RevertChanges() {
            const { Profile: e } = this.props;
            e.RevertBasicInfoChanges(), this.setState({ strHTMLError: "" });
          }
          render() {
            const { Profile: e, EmoticonStore: i } = this.props,
              { bSaving: s, strHTMLError: a } = this.state;
            return (0, t.jsx)(F.Z, {
              "flow-children": "column",
              navEntryPreferPosition: Jt.iU.MAINTAIN_Y,
              children: (0, t.jsxs)("form", {
                method: "POST",
                action: `${O.ProfileURL}edit/info`,
                onSubmit: this.OnSubmit,
                children: [
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "sessionID",
                    value: (0, u.KC)(),
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "type",
                    value: "profileSave",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_1_title",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_1_url",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_2_title",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_2_url",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_3_title",
                    value: "",
                  }),
                  (0, t.jsx)("input", {
                    type: "hidden",
                    name: "weblink_3_url",
                    value: "",
                  }),
                  (0, t.jsx)(I.Y9, { children: (0, l.we)("#Profile_About") }),
                  (0, t.jsx)(I.a3, { children: (0, t.jsx)(gs, {}) }),
                  (0, t.jsx)(Fe, { strHTMLError: a }),
                  (0, t.jsxs)(ut, {
                    title: (0, l.we)("#Profile_Edit_BasicInfo"),
                    children: [
                      (0, t.jsx)(Xe, { Profile: e }),
                      !(0, ue.nA)(u.TS.EREALM) &&
                        (0, t.jsx)(gt, { Profile: e }),
                    ],
                  }),
                  !(0, ue.nA)(u.TS.EREALM) &&
                    (0, t.jsx)(ut, {
                      title: (0, l.we)("#Profile_Edit_Location"),
                      children: (0, t.jsx)(ls, { Profile: e }),
                    }),
                  !(0, ue.nA)(u.TS.EREALM) &&
                    (0, t.jsx)(ut, {
                      title: (0, l.we)("#Profile_FieldSummary"),
                      children: (0, t.jsx)(Xt, {
                        Profile: e,
                        EmoticonStore: i,
                      }),
                    }),
                  !(0, ue.nA)(u.TS.EREALM) &&
                    (0, t.jsx)(ut, {
                      title: (0, l.we)("#Profile_Edit_Preferences"),
                      children: (0, t.jsx)(Pt, { Profile: e }),
                    }),
                  (0, t.jsx)(Oe, { onCancel: this.RevertChanges, disabled: s }),
                ],
              }),
            });
          }
        }
        Ae([B.oI], $t.prototype, "OnSubmit", 1),
          Ae([B.oI], $t.prototype, "RevertChanges", 1);
        class gs extends h.Component {
          render() {
            return (0, t.jsx)("div", {
              style: { display: "block" },
              children: (0, t.jsx)(ns.h, {
                text: (0, l.we)(
                  (0, ue.nA)(u.TS.EREALM)
                    ? "#Profile_Edit_About_Instructions_SteamChina"
                    : "#Profile_Edit_About_Instructions",
                ),
              }),
            });
          }
        }
        let Xe = class extends h.Component {
          OnPersonaNameChange(r) {
            this.props.Profile.SetPersonaName(r.target.value);
          }
          OnRealNameChange(r) {
            this.props.Profile.SetRealName(r.target.value);
          }
          render() {
            const { Profile: r } = this.props;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(Ps, {
                  Profile: r,
                  children: [
                    (0, t.jsx)(I.pd, {
                      label: (0, l.we)("#Profile_FieldProfileName"),
                      disabled: r.BIsPersonaNameChangeOnCooldown(),
                      name: "personaName",
                      value: r.GetPersonaName(),
                      onChange: this.OnPersonaNameChange,
                    }),
                    (0, t.jsx)(ys, { Profile: r }),
                  ],
                }),
                !(0, ue.nA)(u.TS.EREALM) &&
                  (0, t.jsxs)(As, {
                    Profile: r,
                    children: [
                      (0, t.jsx)(I.pd, {
                        label: (0, l.we)("#Profile_FieldRealName"),
                        disabled: r.BIsProfileSummaryChangeOnCooldown(),
                        tooltip: Ve("#Profile_DescriptionRealName"),
                        name: "real_name",
                        value: r.GetRealName(),
                        onChange: this.OnRealNameChange,
                      }),
                      (0, t.jsx)(Cs, { Profile: r }),
                    ],
                  }),
              ],
            });
          }
        };
        Ae([B.oI], Xe.prototype, "OnPersonaNameChange", 1),
          Ae([B.oI], Xe.prototype, "OnRealNameChange", 1),
          (Xe = Ae([C.PA], Xe));
        const Ps = ({ Profile: r, children: e }) =>
          r.BIsPersonaNameChangeOnCooldown()
            ? (0, t.jsx)(ht, {
                rtCooldownEnd: r.GetPersonaNameCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_PersonaNameCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_PersonaNameCooldown_Desc",
                  V.k_strPersonaNameCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        class ys extends h.Component {
          render() {
            const { Profile: e } = this.props;
            return e.HasFilteredPersonaName()
              ? (0, t.jsx)("div", {
                  className: Rr.FilteredNameWarning,
                  children: (0, l.oW)(
                    "#Profile_PersonaNameFiltered",
                    (0, t.jsx)("a", { href: V.k_strNameFilteredSupportURL }),
                  ),
                })
              : null;
          }
        }
        const As = ({ Profile: r, children: e }) =>
          r.BIsProfileSummaryChangeOnCooldown()
            ? (0, t.jsx)(ht, {
                rtCooldownEnd: r.GetProfileSummaryCooldownEndRTime(),
                strCooldownLabel: (0, l.we)("#Profile_RealNameCooldown"),
                strCooldownDescHTML: (0, l.we)(
                  "#Profile_RealNameCooldown_Desc",
                  V.k_strPersonaNameCooldownSupportURL,
                ),
                children: e,
              })
            : (0, t.jsx)(t.Fragment, { children: e });
        class Cs extends h.Component {
          render() {
            const { Profile: e } = this.props;
            return e.HasFilteredRealName()
              ? (0, t.jsx)("div", {
                  className: Rr.FilteredNameWarning,
                  children: (0, l.oW)(
                    "#Profile_RealNameFiltered",
                    (0, t.jsx)("a", { href: V.k_strNameFilteredSupportURL }),
                  ),
                })
              : null;
          }
        }
        let gt = class extends h.Component {
          OnProfileURLChange(r) {
            this.props.Profile.SetCustomURL(r.target.value);
          }
          render() {
            const { Profile: r } = this.props;
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsx)(I.pd, {
                label: (0, l.we)("#Profile_FieldCustomURL"),
                tooltip: Ve("#Profile_DescriptionCustomURL"),
                name: "customURL",
                value: r.GetCustomURL(),
                onChange: this.OnProfileURLChange,
                description: (0, l.we)(
                  "#Profile_ProfileAvailableAtURL",
                  r.GetConstructedURL(),
                ),
              }),
            });
          }
        };
        Ae([B.oI], gt.prototype, "OnProfileURLChange", 1),
          (gt = Ae([C.PA], gt));
        let er = class extends h.Component {
          componentDidMount() {
            this.m_disposer = (0, c.fm)(() => {
              const { Profile: r } = this.props;
              document
                .querySelectorAll(".persona_name_text_content")
                .forEach((e) => (e.textContent = r.GetComittedPersonaName()));
            });
          }
          componentWillUnmount() {
            this.m_disposer();
          }
          render() {
            return null;
          }
        };
        er = Ae([C.PA], er);
        let Pt = class extends h.Component {
          OnProfileAwardsCheckboxChecked(r) {
            let { Profile: e } = this.props,
              i = r,
              s = e.GetPreferences();
            (s.hide_profile_awards = i), e.SetPreferences(s);
          }
          render() {
            const { Profile: r } = this.props,
              e = r.GetPreferences();
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(I.Yh, {
                  label: (0, l.we)("#Profile_Preferences_HideProfileAwards"),
                  checked: e.hide_profile_awards,
                  onChange: this.OnProfileAwardsCheckboxChecked,
                }),
                (0, t.jsx)("input", {
                  type: "hidden",
                  name: "hide_profile_awards",
                  value: e.hide_profile_awards ? 1 : 0,
                }),
              ],
            });
          }
        };
        Ae([B.oI], Pt.prototype, "OnProfileAwardsCheckboxChecked", 1),
          (Pt = Ae([C.PA], Pt));
        var re = d(90713),
          Ss = Object.defineProperty,
          xs = Object.getOwnPropertyDescriptor,
          tr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? xs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Ss(e, i, a), a;
          };
        let Je = class extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          async CommitFavoriteBadge() {
            const r = this.props.Badges;
            this.setState({ bSaving: !0 }),
              (await r.CommitFavoriteBadgeChanges()) != U.R
                ? this.setState({
                    strHTMLError: (0, l.we)(
                      "#ConnectionTrouble_FailedToConnect",
                    ),
                  })
                : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertFavoriteBadge() {
            this.props.Badges.RevertFavoriteBadge(),
              this.setState({ strHTMLError: "" });
          }
          componentWillUnmount() {
            this.props.Badges.RevertFavoriteBadge();
          }
          render() {
            const { Badges: r } = this.props,
              { bSaving: e, strHTMLError: i } = this.state;
            let s = r.FavoriteBadge;
            return (0, t.jsx)(je.tH, {
              children: (0, t.jsxs)(F.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)($.XG, {
                    when: r.BFavoriteBadgeUncomitted(),
                    message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                  }),
                  (0, t.jsx)(I.Y9, {
                    children: (0, l.we)("#Profile_Edit_FavoriteBadge"),
                  }),
                  (0, t.jsx)(I.a3, {
                    children: (0, l.we)("#Profile_Edit_Badge_Instructions"),
                  }),
                  (0, t.jsx)(Fe, { strHTMLError: i }),
                  s && (0, t.jsx)(ws, { badge: s }),
                  !s && (0, t.jsx)(js, { count: r.Badges.length }),
                  (0, t.jsx)(Ze, {
                    getSearchFields: Bs,
                    getItems: async () => r.Badges,
                    onItemSelected: (a) => {
                      r.SetFavoriteBadge(a);
                    },
                    ItemComponent: Is,
                  }),
                  (0, t.jsx)(Oe, {
                    onSave: this.CommitFavoriteBadge,
                    onCancel: this.RevertFavoriteBadge,
                    disabled: e,
                  }),
                ],
              }),
            });
          }
        };
        tr([B.oI], Je.prototype, "CommitFavoriteBadge", 1),
          tr([B.oI], Je.prototype, "RevertFavoriteBadge", 1),
          (Je = tr([C.PA], Je));
        const ws = ({ badge: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, v.A)(re.Badge, re.FavoriteBadge),
              children: [
                (0, t.jsx)("img", {
                  className: re.BadgeImage,
                  src: r.GetIconURL(),
                }),
                (0, t.jsxs)("div", {
                  className: re.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: re.BadgeName,
                      children: r.GetName(),
                    }),
                    (0, t.jsx)("div", {
                      className: re.GameName,
                      children: r.GetGameName(),
                    }),
                  ],
                }),
              ],
            }),
          js = ({ count: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, v.A)(re.Badge, re.FavoriteBadge),
              children: [
                (0, t.jsx)("div", {
                  className: re.BadgeImageNone,
                  children: (0, t.jsx)("img", {
                    className: re.BadgeImage,
                    src: `${u.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: re.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: re.BadgeName,
                      children: "None selected",
                    }),
                    (0, t.jsx)("div", {
                      className: re.GameName,
                      children: `${r} badges available`,
                    }),
                  ],
                }),
              ],
            }),
          Bs = (r) => [r.GetName(), r.GetGameName()],
          Is = ({ Item: r, onSelected: e }) => {
            const i = r;
            return (0, t.jsxs)(F.Z, {
              className: (0, v.A)(re.Badge, re.BadgeOption),
              onActivate: e,
              children: [
                (0, t.jsx)("img", {
                  className: re.BadgeImage,
                  src: i.GetIconURL(),
                  loading: "lazy",
                }),
                (0, t.jsxs)("div", {
                  className: re.BadgeDetails,
                  children: [
                    (0, t.jsx)("div", {
                      className: re.BadgeName,
                      children: i.GetName(),
                    }),
                    (0, t.jsx)("div", {
                      className: re.GameName,
                      children: i.GetGameName(),
                    }),
                  ],
                }),
              ],
            });
          };
        var Ce = d(53841),
          Es = Object.defineProperty,
          Gs = Object.getOwnPropertyDescriptor,
          rr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Gs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Es(e, i, a), a;
          };
        let $e = class extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          async CommitFavoriteGroup() {
            const r = this.props.Profile.GroupList;
            this.setState({ bSaving: !0 });
            let e = await r.CommitPrimaryGroup();
            e.strHTMLError
              ? this.setState({ strHTMLError: e.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertFavoriteGroup() {
            this.props.Profile.GroupList.RevertPrimaryGroupChanges(),
              this.setState({ strHTMLError: "" });
          }
          componentWillUnmount() {
            this.props.Profile.GroupList.RevertPrimaryGroupChanges();
          }
          render() {
            const { Profile: r } = this.props,
              { bSaving: e, strHTMLError: i } = this.state,
              s = r.GroupList,
              a = s.PrimaryGroup;
            return (0, t.jsxs)(F.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)($.XG, {
                  when: s.BPrimaryGroupUncomitted(),
                  message: (0, l.we)("#Profile_Edit_UnsavedChangesWarning"),
                }),
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_FavoriteGroup"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)("#Profile_Edit_Group_Instructions"),
                }),
                (0, t.jsx)(Fe, { strHTMLError: i }),
                a && (0, t.jsx)(Rs, { group: a }),
                (0, t.jsx)(Ze, {
                  getSearchFields: bs,
                  getItems: async () => (
                    await s.BWaitForUserGroups(), s.GetUserGroups()
                  ),
                  onItemSelected: (o) => {
                    s.SetPrimaryGroup(o);
                  },
                  ItemComponent: Ns,
                }),
                (0, t.jsx)(Oe, {
                  onSave: this.CommitFavoriteGroup,
                  onCancel: this.RevertFavoriteGroup,
                  disabled: e,
                }),
              ],
            });
          }
        };
        rr([B.oI], $e.prototype, "CommitFavoriteGroup", 1),
          rr([B.oI], $e.prototype, "RevertFavoriteGroup", 1),
          ($e = rr([C.PA], $e));
        const Rs = ({ group: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: (0, v.A)(Ce.Group, Ce.FavoriteGroup),
              children: [
                (0, t.jsx)("img", {
                  className: Ce.GroupAvatar,
                  src: r.GetAvatarURL("full"),
                }),
                (0, t.jsx)("div", {
                  className: Ce.GroupDetails,
                  children: (0, t.jsx)("div", {
                    className: Ce.GroupName,
                    children: r.GetName(),
                  }),
                }),
              ],
            }),
          bs = (r) => [r.GetName()],
          Ns = ({ Item: r, onSelected: e }) => {
            const i = r;
            return (0, t.jsxs)(F.Z, {
              className: (0, v.A)(Ce.Group, Ce.GroupOption),
              onActivate: e,
              children: [
                (0, t.jsx)("img", {
                  className: Ce.GroupAvatar,
                  src: i.GetAvatarURL("full"),
                  loading: "lazy",
                }),
                (0, t.jsx)("div", {
                  className: Ce.GroupDetails,
                  children: (0, t.jsx)("div", {
                    className: Ce.GroupName,
                    children: i.GetName(),
                  }),
                }),
              ],
            });
          };
        var se = d(30082);
        const Nr = ({ Item: r, small: e }) => {
            let i = kt(r, e);
            return Object.keys(i).length == 0
              ? null
              : (0, t.jsx)("video", {
                  loop: !0,
                  preload: "none",
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  children: Object.keys(i).map((s) =>
                    (0, t.jsx)("source", { src: i[s], type: s }, s),
                  ),
                });
          },
          Lr = ({ Background: r, className: e, small: i }) =>
            r
              ? (0, t.jsx)("div", {
                  className: e,
                  children: (0, t.jsx)(Nr, { Item: r, small: i }),
                })
              : null;
        function Or(r) {
          r.currentTarget.querySelector("video").play();
        }
        function Ls(r) {
          r.detail.focusedNode.Element.querySelector("video").play();
        }
        function ir(r) {
          return [r.item_title, r.app_name];
        }
        function sr(r, e) {
          return r ? (e ? r.communityitemid === e.communityitemid : !1) : !e;
        }
        var Os = Object.defineProperty,
          Fs = Object.getOwnPropertyDescriptor,
          Fr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Fs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Os(e, i, a), a;
          };
        let yt = class extends h.Component {
          RevertChanges() {
            this.props.ProfileEdit.ProfileItems.RevertMiniProfileBackgroundChanges();
          }
          render() {
            const { ProfileEdit: r } = this.props,
              { Profile: e, ProfileItems: i, MiniProfileOverrideData: s } = r,
              { MiniProfileData: a, PersonaState: o } = e;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_MiniProfile"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)("#Profile_Edit_MiniProfile_Instructions"),
                }),
                (0, t.jsx)(Ds, {
                  ProfileItems: i,
                  Profile: e,
                  MiniProfileOverrideData: s,
                  onDismiss: this.RevertChanges,
                }),
              ],
            });
          }
        };
        Fr([B.oI], yt.prototype, "RevertChanges", 1), (yt = Fr([C.PA], yt));
        const Ds = (0, C.PA)(
            ({
              Profile: r,
              ProfileItems: e,
              MiniProfileOverrideData: i,
              onDismiss: s,
            }) => {
              let a = e.GetEquippedProfileModifier();
              return (
                a && !e.BIsLegacyGoldenProfile(a.appid) && (a = null),
                (0, t.jsx)(be, {
                  fnRevertChanges: s,
                  getSearchFields: ir,
                  getItems: () => e.GetOwnedMiniProfileBackgrounds(),
                  fnCommitChanges: async (o) => (
                    e.SetEquippedMiniProfileBackground(o),
                    e.CommitMiniProfileChanges()
                  ),
                  ItemComponent: Dr,
                  RenderDefaultComponent: ({ onSelected: o, active: n }) =>
                    (0, t.jsx)(Ms, { onSelected: o, active: n, Modifier: a }),
                  ActiveItem: e.GetEquippedMiniProfileBackground(),
                  fnIsSameItem: sr,
                  fnRenderPreview: (o) =>
                    (0, t.jsx)(Ts, {
                      MiniProfileBackground: o,
                      Profile: r,
                      ProfileItems: e,
                      MiniProfileOverrideData: i,
                    }),
                })
              );
            },
          ),
          Ts = ({
            MiniProfileBackground: r,
            MiniProfileOverrideData: e,
            Profile: i,
            ProfileItems: s,
          }) => {
            const { MiniProfileData: a, PersonaState: o } = i;
            let n;
            if (r) {
              n = kt(r);
              let p = Re(r);
              p && (n.image = p);
            } else {
              n = s.GetProfileModifierMiniProfileBackgroundMovies();
              let p = s.GetProfileModifierMiniProfileBackground();
              p && (n.image = p);
            }
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsx)("div", {
                className: se.MiniProfileDialogPreviewCtn,
                children: (0, t.jsx)(bt, {
                  persona: o,
                  className: se.MiniProfilePreview,
                  data_loader: a,
                  community_data_override: { ...e, profile_background: n },
                }),
              }),
            });
          },
          Dr = ({ Item: r, onSelected: e, children: i, active: s }) => {
            let a = kt(r),
              o = Object.keys(a).length > 0;
            return (0, t.jsxs)(F.Z, {
              className: (0, v.A)(
                se.MiniProfileBackgroundOption,
                o && se.WithVideo,
                s && se.Active,
              ),
              onActivate: e,
              onMouseEnter: o ? Or : void 0,
              children: [
                (0, t.jsxs)("div", {
                  className: se.Preview,
                  children: [
                    (0, t.jsx)("img", { src: Re(r), loading: "lazy" }),
                    o &&
                      (0, t.jsx)("div", {
                        className: se.PreviewVideo,
                        children: (0, t.jsx)(Nr, { Item: r }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: se.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: se.Title,
                          children: r.item_title,
                        }),
                        (0, t.jsx)("div", {
                          className: se.App,
                          children: r.app_name,
                        }),
                      ],
                    }),
                    i,
                  ],
                }),
              ],
            });
          },
          Ms = ({ Modifier: r, onSelected: e, children: i, active: s }) =>
            r
              ? (0, t.jsx)(Dr, { Item: r, onSelected: e, active: s })
              : (0, t.jsxs)(F.Z, {
                  className: (0, v.A)(
                    se.MiniProfileBackgroundOption,
                    s && se.Active,
                  ),
                  onClick: e,
                  onActivate: e,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, v.A)(se.Preview, se.BlankBackground),
                      children: (0, t.jsx)("img", {
                        src: `${u.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                        loading: "lazy",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: se.Details,
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className: se.Title,
                              children: (0, l.we)(
                                "#Profile_Edit_DefaultBlankBackground",
                              ),
                            }),
                            (0, t.jsx)("div", { className: se.App }),
                          ],
                        }),
                        i,
                      ],
                    }),
                  ],
                });
        var Ge = d(24660),
          Us = Object.defineProperty,
          Hs = Object.getOwnPropertyDescriptor,
          ar = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Hs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Us(e, i, a), a;
          };
        let or = class extends h.Component {
          render() {
            let r = this.props.PrivacyStore;
            return (0, t.jsxs)(F.Z, {
              className: "ProfilePrivacyRoot",
              "flow-children": "column",
              navEntryPreferPosition: Jt.iU.MAINTAIN_Y,
              children: [
                (0, t.jsx)(Te, {
                  PrivacyStore: r,
                  strLabel: (0, l.we)("#ProfilePrivacy_BasicDetails"),
                  strReadOnlySetting: yr(b.Quy),
                  children: (0, l.we)("#ProfilePrivacy_BasicDetails_Desc"),
                }),
                (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                (0, t.jsxs)(Te, {
                  PrivacyStore: r,
                  strLabel: (0, l.we)("#ProfilePrivacy_Profile"),
                  PrivacyKey: "PrivacyProfile",
                  children: [
                    (0, t.jsx)("p", {
                      children: (0, l.we)("#ProfilePrivacy_Profile_Desc"),
                    }),
                    (0, t.jsx)("p", {
                      children: (0, l.we)("#ProfilePrivacy_Profile_Desc2"),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "ProfilePrivacyRoot_Indent",
                  children: [
                    (0, t.jsxs)(Te, {
                      PrivacyStore: r,
                      strLabel: (0, l.we)("#ProfilePrivacy_GameLibrary"),
                      PrivacyKey: "PrivacyOwnedGames",
                      LimitPrivacyKey: "PrivacyProfile",
                      children: [
                        (0, l.we)("#ProfilePrivacy_GameLibrary_Desc"),
                        r.GetPrivacySetting("PrivacyOwnedGames") != b.uvF &&
                          (0, t.jsx)(Ur, {
                            PrivacyStore: r,
                            PrivacyKey: "PrivacyPlaytime",
                            LimitPrivacyKey: "PrivacyOwnedGames",
                            children: (0, l.we)("#ProfilePrivacy_Playtime"),
                          }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsx)(Te, {
                      PrivacyStore: r,
                      strLabel: (0, l.we)("#ProfilePrivacy_FriendsList"),
                      PrivacyKey: "PrivacyFriendsList",
                      LimitPrivacyKey: "PrivacyProfile",
                      children: (0, l.we)("#ProfilePrivacy_FriendsList_Desc"),
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsxs)(Te, {
                      PrivacyStore: r,
                      strLabel: (0, l.we)("#ProfilePrivacy_Inventory"),
                      PrivacyKey: "PrivacyInventory",
                      LimitPrivacyKey: "PrivacyProfile",
                      children: [
                        (0, t.jsx)(F.Z, {
                          "flow-children": "row",
                          children: (0, l.PP)(
                            "#ProfilePrivacy_Inventory_Desc",
                            (0, t.jsx)(Ge.Ii, {
                              href: O.ProfileURL + "inventory/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_Inventory_Inventory",
                              ),
                            }),
                            (0, t.jsx)(Ge.Ii, {
                              href: O.ProfileURL + "inventory/#753_6",
                              children: (0, l.we)(
                                "#ProfilePrivacy_Inventory_TradingCards",
                              ),
                            }),
                          ),
                        }),
                        r.GetPrivacySetting("PrivacyInventory") != b.uvF &&
                          (0, t.jsx)(Ur, {
                            PrivacyStore: r,
                            PrivacyKey: "PrivacyInventoryGifts",
                            LimitPrivacyKey: "PrivacyInventory",
                            children: (0, l.we)("#ProfilePrivacy_Gifts"),
                          }),
                      ],
                    }),
                    (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    (0, t.jsxs)(Tr, {
                      children: [
                        (0, l.we)("#ProfilePrivacy_Comments"),
                        ":",
                        (0, t.jsx)(At, { PrivacyStore: r }),
                      ],
                    }),
                    !(0, ue.nA)(u.TS.EREALM) &&
                      (0, t.jsx)("div", { className: "ProfilePrivacyHR" }),
                    !(0, ue.nA)(u.TS.EREALM) &&
                      (0, t.jsx)(Te, {
                        PrivacyStore: r,
                        strLabel: (0, l.we)("#ProfilePrivacy_UGC"),
                        strReadOnlySetting: (0, l.we)("#Privacy_PerItem"),
                        children: (0, t.jsx)(F.Z, {
                          "flow-children": "row",
                          children: (0, l.PP)(
                            "#ProfilePrivacy_UGC_Desc",
                            (0, t.jsx)(Ge.Ii, {
                              href: O.ProfileURL + "screenshots/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_UGC_Desc_Screenshots",
                              ),
                            }),
                            (0, t.jsx)(Ge.Ii, {
                              href: O.ProfileURL + "myworkshopfiles/",
                              children: (0, l.we)(
                                "#ProfilePrivacy_UGC_Desc_WorkshopItems",
                              ),
                            }),
                          ),
                        }),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        or = ar([C.PA], or);
        function Te(r) {
          let e;
          return (
            r.strReadOnlySetting
              ? (e = (0, t.jsx)(Qs, { strLabel: r.strReadOnlySetting }))
              : (e = (0, t.jsx)(Ks, {
                  PrivacyStore: r.PrivacyStore,
                  PrivacyKey: r.PrivacyKey,
                  LimitPrivacyKey: r.LimitPrivacyKey,
                })),
            (0, t.jsxs)(h.Fragment, {
              children: [
                (0, t.jsxs)(Tr, { children: [r.strLabel, ":", e] }),
                (0, t.jsx)(ks, { children: r.children }),
              ],
            })
          );
        }
        function Tr(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyHeader",
            children: r.children,
          });
        }
        function ks(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyDesc",
            children: r.children,
          });
        }
        function qs(r) {
          const e = [
              { label: (0, l.we)("#Privacy_Public"), data: b.Quy },
              { label: (0, l.we)("#Privacy_FriendsOnly"), data: b.Snd },
              { label: (0, l.we)("#Privacy_Private"), data: b.uvF },
            ],
            i = r != null ? r : b.Quy;
          return e.filter((s) => i >= s.data);
        }
        const Ks = (0, C.PA)(function (e) {
          const {
              PrivacyStore: i,
              PrivacyKey: s,
              LimitPrivacyKey: a,
              children: o,
            } = e,
            n = h.useCallback(() => {
              if (a) return i.GetPrivacySetting(a);
            }, [i, a]),
            p = h.useCallback(
              (q) => {
                i.ChangePrivacySetting(s, q);
              },
              [i, s],
            );
          let g = i.GetPrivacySetting(s),
            S = yr(g);
          const R = qs(n());
          return (0, t.jsxs)(h.Fragment, {
            children: [
              (0, t.jsx)(I.ZU, {
                strDropDownButtonClassName: "ProfilePrivacyDropDown",
                bMatchWidth: !1,
                rgOptions: R,
                onChange: (q) => p(q.data),
                selectedOption: g,
              }),
              (0, t.jsx)(Mr, { eSaveState: i.GetSaveState(s) }),
            ],
          });
        });
        function Mr(r) {
          switch (r.eSaveState) {
            case Dt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Saving",
                children: (0, l.we)("#Shared_Saving"),
              });
            case Mt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Error",
                children: (0, l.we)("#Error_Error"),
              });
            case Tt:
              return (0, t.jsx)("div", {
                className: "PrivacySaveNotice Saved",
                children: (0, l.we)("#Shared_Saved"),
              });
            case Le:
            default:
              return null;
          }
        }
        function Ur(r) {
          const {
              PrivacyStore: e,
              PrivacyKey: i,
              LimitPrivacyKey: s,
              children: a,
            } = r,
            o = h.useCallback(
              (g) => {
                let S = g.currentTarget.checked ? b.uvF : b.Quy;
                e.ChangePrivacySetting(i, S, s);
              },
              [e, i, s],
            );
          let p = (0, Zt.q3)(() => e.GetPrivacySetting(i)) == b.uvF;
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyCheckbox",
            children: (0, t.jsxs)("label", {
              children: [
                (0, t.jsx)(Ge.BA, {
                  className: "ProfilePrivacyCheckbox_Input",
                  type: "checkbox",
                  checked: p,
                  onChange: o,
                }),
                (0, t.jsx)("div", {
                  className: "ProfilePrivacyCheckbox_Desc",
                  children: a,
                }),
              ],
            }),
          });
        }
        function Ws(r) {
          const e = [
              {
                label: (0, l.we)("#Profile_CommentPermission_Public_Desc"),
                data: Ot,
              },
              {
                label: (0, l.we)("#Profile_CommentPermission_FriendsOnly_Desc"),
                data: Lt,
              },
              {
                label: (0, l.we)("#Profile_CommentPermission_Private_Desc"),
                data: Ft,
              },
            ],
            i = r != null ? r : b.Quy;
          return e.filter((s) => i >= s.data);
        }
        let At = class extends h.Component {
          constructor(r) {
            super(r), (this.state = { eSaveState: Le });
          }
          OnSettingChanged(r) {
            this.props.PrivacyStore.ChangeCommentPermission(r);
          }
          render() {
            let r = this.props.PrivacyStore.CommentPermission,
              e = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
              i = ci(ui(r, e));
            const s = Ws(e);
            return (0, t.jsxs)(h.Fragment, {
              children: [
                (0, t.jsx)(I.ZU, {
                  strDropDownButtonClassName: "ProfilePrivacyDropDown",
                  rgOptions: s,
                  bMatchWidth: !1,
                  onChange: (a) => this.OnSettingChanged(a.data),
                  selectedOption: r,
                }),
                (0, t.jsx)(Mr, {
                  eSaveState: this.props.PrivacyStore.GetCommentSaveState(),
                }),
              ],
            });
          }
        };
        ar([B.oI], At.prototype, "OnSettingChanged", 1), (At = ar([C.PA], At));
        function Qs(r) {
          return (0, t.jsx)("div", {
            className: "ProfilePrivacyDropDown readonly",
            children: r.strLabel,
          });
        }
        var le = d(26075),
          _e = d(38945),
          nr = d(19939),
          Hr = d(54212);
        const zs = ({ className: r, width: e, height: i, theme: s }) => {
            s || (s = "Default"), (s = s + "Theme");
            const [a, o] = (0, Hr.l)(),
              [n, p] = (0, Hr.l)();
            return (0, t.jsxs)("svg", {
              width: e || "401",
              height: i || "399",
              viewBox: "0 0 401 399",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: (0, v.A)(r, _e.ProfilePreview, nr[s]),
              children: [
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "386",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "0.5",
                  y: "13.5",
                  width: "400",
                  height: "385",
                  stroke: "black",
                  strokeOpacity: "0.5",
                }),
                (0, t.jsx)("rect", {
                  x: "26",
                  y: "33",
                  width: "61",
                  height: "61",
                  rx: "10",
                  fill: "#272B30",
                }),
                (0, t.jsx)("path", {
                  d: "M57.0246 64.052C63.4696 64.052 68.6942 58.8273 68.6942 52.3823C68.6942 45.9373 63.4696 40.7126 57.0246 40.7126C50.5796 40.7126 45.3549 45.9373 45.3549 52.3823C45.3549 58.8273 50.5796 64.052 57.0246 64.052Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("path", {
                  d: "M77.4319 72.8873C76.6734 68.1167 70.0792 66.5175 65.3744 65.0024C63.1235 66.918 60.2118 68.0792 57.0246 68.0792C53.8374 68.0792 50.9262 66.918 48.6753 65.0024C43.97 66.5175 37.3763 68.1167 36.6172 72.8873C35.2667 81.3728 47.8848 86.2873 57.0246 86.2873C66.1648 86.2873 78.7825 81.3728 77.4319 72.8873Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "50",
                  width: "91",
                  height: "31.882",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "87",
                  width: "44",
                  height: "10",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "346",
                  y: "87",
                  width: "44",
                  height: "10",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "104.091",
                  width: "91",
                  height: "240.254",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "103",
                  y: "57",
                  width: "82",
                  height: "6",
                  rx: "3",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "103",
                  y: "67",
                  width: "82",
                  height: "6",
                  rx: "3",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "26",
                  y: "117.755",
                  width: "260",
                  height: "87.6755",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "32",
                  y: "182.755",
                  width: "246",
                  height: "17",
                  rx: "3",
                  fill: "#262B31",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "185.755",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "192.755",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "185.755",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "192.755",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("path", {
                  d: "M26 120.755C26 119.098 27.3431 117.755 29 117.755H283C284.657 117.755 286 119.098 286 120.755V131.755H26V120.755Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "35",
                  y: "120.755",
                  width: "37",
                  height: "7",
                  rx: "3",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "103",
                  y: "38.0502",
                  width: "57",
                  height: "11.3864",
                  rx: "3",
                  fill: "#4F555C",
                }),
                (0, t.jsx)("rect", {
                  x: "299",
                  y: "32",
                  width: "35",
                  height: "11",
                  rx: "3",
                  fill: "#4F555C",
                }),
                (0, t.jsx)("rect", {
                  x: "26",
                  y: "214.54",
                  width: "260",
                  height: "167.381",
                  rx: "3",
                  fill: "#272B30",
                }),
                (0, t.jsx)("rect", {
                  x: "32",
                  y: "358.54",
                  width: "246",
                  height: "17",
                  rx: "3",
                  fill: "#262B31",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "361.54",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "37",
                  y: "368.54",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "361.54",
                  width: "21",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "71",
                  y: "368.54",
                  width: "12",
                  height: "4",
                  rx: "2",
                  fill: "#373C42",
                }),
                (0, t.jsx)("path", {
                  d: "M26 217.54C26 215.883 27.3431 214.54 29 214.54H283C284.657 214.54 286 215.883 286 217.54V228.54H26V217.54Z",
                  fill: "#444A51",
                }),
                (0, t.jsx)("rect", {
                  x: "35",
                  y: "217.54",
                  width: "37",
                  height: "7",
                  rx: "3",
                  fill: "#373C42",
                }),
                (0, t.jsx)("circle", {
                  cx: "347.5",
                  cy: "37.5",
                  r: "8.5",
                  stroke: "#4F555C",
                  strokeWidth: "2",
                }),
                (0, t.jsx)("rect", {
                  x: "41",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "36",
                  y: "241",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "36",
                  y: "283",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "161",
                  y: "241",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "161",
                  y: "283",
                  width: "111",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "91",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "141",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "191",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  x: "241",
                  y: "144",
                  width: "31",
                  height: "31",
                  rx: "5",
                  fill: "#373C42",
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: "var(--gradient-background)",
                  fillOpacity: "0.23",
                  className: _e.ThemeBackground,
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: o,
                  className: _e.PaintRadial0,
                }),
                (0, t.jsx)("rect", {
                  y: "13",
                  width: "401",
                  height: "382",
                  fill: p,
                  className: _e.PaintRadial1,
                }),
                (0, t.jsxs)("defs", {
                  children: [
                    (0, t.jsxs)("radialGradient", {
                      id: a,
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(11 126) rotate(9.77175) scale(182.65 191.735)",
                      children: [
                        (0, t.jsx)("stop", {
                          stopColor: "var(--gradient-left)",
                        }),
                        (0, t.jsx)("stop", {
                          offset: "1",
                          stopColor: "var(--gradient-background-left)",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("radialGradient", {
                      id: n,
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(385 148) rotate(-164.809) scale(312.935 328.499)",
                      children: [
                        (0, t.jsx)("stop", {
                          offset: "0.348958",
                          stopColor: "var(--gradient-right)",
                        }),
                        (0, t.jsx)("stop", {
                          offset: "1",
                          stopColor: "var(--gradient-background-right)",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          ka = null,
          kr = (0, C.PA)(({ ProfileItems: r, Background: e, theme: i }) => {
            e === void 0 && (e = r.GetEquippedBackground());
            let s = e && e.movie_webm,
              a = e && e.tiled,
              o = e ? Re(e) : Ht(null);
            const n = e && !a && r.GetEquippedBackgroundFlags() == z.JA9.Z;
            let p = null;
            return (
              a &&
                (p = {
                  backgroundImage: `url( ${o} )`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "125px 125px",
                }),
              (0, t.jsxs)("div", {
                style: p,
                className: _e.ProfilePagePreviewCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: _e.BackgroundPosition,
                    children: (0, t.jsxs)("div", {
                      className: (0, v.A)(_e.Background, n && _e.FullScreen),
                      children: [
                        !s && !a && (0, t.jsx)("img", { src: o }),
                        s && (0, t.jsx)(Lr, { Background: e, className: "" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: _e.ProfilePreviewPosition,
                    children: (0, t.jsx)("div", {
                      className: _e.ProfilePreviewCtn,
                      children: (0, t.jsx)(zs, {
                        className: _e.ProfilePreview,
                        width: "50%",
                        height: "auto",
                        theme: i,
                      }),
                    }),
                  }),
                ],
              })
            );
          });
        var Vs = Object.defineProperty,
          Zs = Object.getOwnPropertyDescriptor,
          et = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? Zs(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && Vs(e, i, a), a;
          };
        let tt = class extends h.Component {
          constructor() {
            super(...arguments), (this.state = { equipFlags: 0 });
          }
          async componentDidMount() {
            const { ProfileItems: r } = this.props;
            let e = await r.GetEquippedBackground();
          }
          async CommitChanges(r) {
            const { ProfileItems: e } = this.props;
            return e.SetAndEquipProfileBackground(r);
          }
          RevertChanges() {
            const { ProfileItems: r } = this.props;
            r.RevertBackgroundChanges();
          }
          render() {
            const { ProfileItems: r, ProfileTheme: e } = this.props;
            let i = r.GetEquippedBackground(),
              s = r.GetEquippedProfileModifier();
            return (
              s && !r.BIsLegacyGoldenProfile(s.appid) && (s = null),
              (0, t.jsxs)(F.Z, {
                "flow-children": "column",
                children: [
                  (0, t.jsx)(I.Y9, {
                    children: (0, l.we)("#Profile_Edit_ChooseBackground"),
                  }),
                  (0, t.jsx)(I.a3, {
                    children: (0, l.we)(
                      "#Profile_Edit_Background_Instructions",
                    ),
                  }),
                  (0, t.jsx)(be, {
                    className: le.BackgroundPickerPage,
                    getSearchFields: ir,
                    getItems: () => r.GetOwnedBackgrounds(),
                    fnCommitChanges: this.CommitChanges,
                    fnRevertChanges: this.RevertChanges,
                    ItemComponent: Wr,
                    RenderDefaultComponent: ({ onSelected: a, active: o }) =>
                      (0, t.jsx)(Xs, { Modifier: s, onSelected: a, active: o }),
                    ActiveItem: r.GetEquippedBackground(),
                    fnIsSameItem: sr,
                    fnRenderPreview: (a) =>
                      (0, t.jsx)(Ys, {
                        Background: a,
                        ProfileItems: r,
                        theme: e.ActiveTheme.theme_id,
                      }),
                  }),
                ],
              })
            );
          }
        };
        et([B.oI], tt.prototype, "CommitChanges", 1),
          et([B.oI], tt.prototype, "RevertChanges", 1),
          (tt = et([C.PA], tt));
        const qr = ({ label: r, currentFlag: e, flag: i, onSelect: s }) => {
          let a = (o) => {
            o && s(i);
          };
          return (0, t.jsx)("div", {
            className: le.ProfileBackgroundEquipOption,
            children: (0, t.jsx)(I.Od, {
              checked: e == i,
              disabled: e == i,
              onChange: a,
              label: r,
            }),
          });
        };
        let Ct = class extends h.Component {
          OnChange(r) {
            this.props.ProfileItems.SetEquippedBackgroundFlags(r);
          }
          render() {
            let { Background: r, ProfileItems: e } = this.props;
            const i = !r || (r == null ? void 0 : r.tiled),
              s = e.GetEquippedBackgroundFlags();
            let a = (0, t.jsx)(qr, {
                flag: z.JA9.Z,
                currentFlag: s,
                onSelect: this.OnChange,
                label: (0, l.we)(
                  "#Profile_Edit_BackgroundEquipFlag_FullScreen",
                ),
              }),
              o = (0, t.jsx)(qr, {
                flag: 0,
                currentFlag: s,
                onSelect: this.OnChange,
                label: (0, l.we)(
                  "#Profile_Edit_BackgroundEquipFlag_OriginalSize",
                ),
              });
            return (0, t.jsxs)("div", {
              className: (0, v.A)(
                le.ProfileBackgroundEquipOptions,
                i && le.HideEquipOptions,
              ),
              children: [a, o],
            });
          }
        };
        et([B.oI], Ct.prototype, "OnChange", 1), (Ct = et([C.PA], Ct));
        const Ys = (0, C.PA)(({ Background: r, ProfileItems: e, theme: i }) =>
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(
                  kr,
                  { Background: r, ProfileItems: e, theme: i },
                  r && r.communityitemid,
                ),
                (0, t.jsx)(Ct, { ProfileItems: e, Background: r }),
              ],
            }),
          ),
          Kr = ({ Background: r, children: e }) =>
            (0, t.jsxs)("div", {
              className: le.Details,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: le.Title,
                      children: r
                        ? r.item_title
                        : (0, l.we)("#Profile_Edit_DefaultBlankBackground"),
                    }),
                    (0, t.jsx)("div", {
                      className: le.App,
                      children: r && r.app_name,
                    }),
                  ],
                }),
                e,
              ],
            }),
          Wr = ({ Item: r, onSelected: e, active: i, children: s }) => {
            let a = !!r.movie_webm;
            return (0, t.jsxs)(F.Z, {
              className: (0, v.A)(
                le.BackgroundOption,
                a && le.WithVideo,
                i && le.Active,
              ),
              onClick: e,
              onActivate: e,
              onGamepadFocus: a ? Ls : void 0,
              onMouseEnter: a ? Or : void 0,
              focusable: !0,
              children: [
                (0, t.jsxs)("div", {
                  className: le.Preview,
                  children: [
                    (0, t.jsx)("img", { src: Ht(r), loading: "lazy" }),
                    (0, t.jsx)(Lr, {
                      Background: r,
                      className: le.PreviewVideo,
                      small: !0,
                    }),
                  ],
                }),
                (0, t.jsx)(Kr, { Background: r, children: s }),
              ],
            });
          },
          Xs = ({ onSelected: r, Modifier: e, active: i, children: s }) =>
            e
              ? (0, t.jsx)(Wr, { Item: e, onSelected: r, active: i })
              : (0, t.jsxs)("div", {
                  className: (0, v.A)(le.BackgroundOption, i && le.Active),
                  onClick: r,
                  children: [
                    (0, t.jsx)("div", {
                      className: le.Preview,
                      children: (0, t.jsx)("img", { src: Ht(null) }),
                    }),
                    (0, t.jsx)(Kr, { Background: null, children: s }),
                  ],
                });
        var Js = d(75130),
          $s = d(17083);
        function ea(r) {
          return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
        }
        function Qr(r) {
          const { navigate: e, onClick: i, ...s } = r,
            { target: a } = s,
            o = (n) => {
              try {
                i && i(n);
              } catch (p) {
                throw (n.preventDefault(), p);
              }
              !n.defaultPrevented &&
                n.button === 0 &&
                (!a || a === "_self") &&
                !ea(n) &&
                (n.preventDefault(), e());
            };
          return (0, t.jsx)(Ge.Ii, { ...s, onClick: o });
        }
        function ta(r) {
          return (0, t.jsx)($s.k2, { component: Qr, ...r });
        }
        function qa(r) {
          return jsx(Link, { component: Qr, ...r });
        }
        var ge = d(78091);
        function ra(r) {
          const { root: e, currentPath: i, linksAvailable: s, children: a } = r;
          return (0, t.jsx)(Js.u, {
            navID: "ProfileEditShell",
            children: (0, t.jsx)(F.Z, {
              children: (0, t.jsxs)(F.Z, {
                className: ge.Shell,
                "flow-children": "row",
                navEntryPreferPosition: Jt.iU.FIRST,
                children: [
                  (0, t.jsx)(ia, {
                    root: e,
                    currentPath: i,
                    linksAvailable: s,
                  }),
                  (0, t.jsx)("div", {
                    className: ge.PageContent,
                    children: (0, t.jsx)(je.tH, { children: a }),
                  }),
                ],
              }),
            }),
          });
        }
        const ia = ({ root: r, currentPath: e, linksAvailable: i }) => {
            const s = { root: r, currentPath: e },
              a = hr,
              o = (0, u.Qn)();
            return (0, t.jsxs)(F.Z, {
              className: ge.Navigation,
              "flow-children": "column",
              children: [
                (0, t.jsx)("div", {
                  className: ge.BackToProfileCtn,
                  children: (0, t.jsx)(Ge.Ii, {
                    href: O.ProfileURL,
                    children: (0, l.we)("#Profile_ReturnToYourProfile"),
                  }),
                }),
                (0, t.jsx)("div", { className: ge.ProfileEditLine }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.Info(),
                  children: (0, l.we)("#Profile_Edit_BasicInfo"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.Avatar(),
                  children: (0, l.we)("#Profile_FieldAvatar"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.Background(),
                  children: (0, l.we)("#Profile_FieldProfileBackground"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.MiniProfile(),
                  children: (0, l.we)("#Profile_Edit_MiniProfile"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.Theme(),
                  children: (0, l.we)("#Profile_Edit_Theme"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.ProfileModifier(),
                  fnVisible: i.ProfileModifierAvailable,
                  children: (0, l.we)("#Profile_Edit_ProfileModifier"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.FavoriteBadge(),
                  fnVisible: i.BadgesAvailable,
                  children: (0, l.we)("#Profile_Edit_FavoriteBadge"),
                }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.FavoriteGroup(),
                  fnVisible: i.GroupsAvailable,
                  children: (0, l.we)("#Profile_Edit_FavoriteGroup"),
                }),
                !o &&
                  (0, t.jsx)(Se, {
                    ...s,
                    to: a.Showcases(),
                    fnVisible: i.ShowcasesAvailable,
                    children: (0, l.we)("#Profile_Edit_FeaturedShowcase"),
                  }),
                (0, t.jsx)("div", { className: ge.ProfileEditLine }),
                (0, t.jsx)(Se, {
                  ...s,
                  to: a.Privacy(),
                  children: (0, l.we)("#Profile_EditPrivacySettings"),
                }),
                (0, t.jsx)("div", {
                  className: ge.ProfileEditStoreLink,
                  children: (0, t.jsx)(Ge.Ii, {
                    className: (0, v.A)(ge.ExternalLink),
                    href: `${u.TS.STORE_BASE_URL}points/`,
                    children: (0, l.we)("#SteamPointsShop"),
                  }),
                }),
              ],
            });
          },
          Se = (0, C.PA)(
            ({
              root: r,
              currentPath: e,
              to: i,
              fnVisible: s,
              fnDisabled: a,
              children: o,
            }) => {
              const n = `${r}${i}`,
                p = n == e;
              if (!p && s && !s()) return null;
              const g = a && a(),
                S = !!g;
              let R;
              return (
                g && (R = (q) => q.preventDefault()),
                (0, t.jsx)(ta, {
                  className: (0, v.A)(
                    ge.NavLink,
                    p && ge.Active,
                    S && ge.Disabled,
                  ),
                  to: n,
                  onClick: R,
                  title: g,
                  children: o,
                })
              );
            },
          );
        var ae = d(49622),
          sa = Object.defineProperty,
          aa = Object.getOwnPropertyDescriptor,
          rt = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? aa(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && sa(e, i, a), a;
          };
        let it = class extends h.Component {
          constructor() {
            super(...arguments), (this.state = { bDialogActive: !1 });
          }
          ShowDialog() {
            this.setState({ bDialogActive: !0 });
          }
          HideDialog() {
            this.setState({ bDialogActive: !1 });
          }
          render() {
            const { ProfileItems: r } = this.props;
            return r.BHasAnyProfileModifiers()
              ? (0, t.jsx)(St, {
                  active: this.state.bDialogActive,
                  ProfileItems: r,
                  onDismiss: this.HideDialog,
                })
              : null;
          }
        };
        rt([B.oI], it.prototype, "ShowDialog", 1),
          rt([B.oI], it.prototype, "HideDialog", 1),
          (it = rt([C.PA], it));
        const oa = (0, C.PA)(({ ProfileItems: r }) => {
            let e = r.GetProfileModifierCSSURL();
            return e
              ? (0, t.jsx)("link", {
                  rel: "stylesheet",
                  type: "text/css",
                  href: e,
                })
              : null;
          }),
          na = ({ ProfileModifier: r }) => {
            const e = r
                ? Re(r)
                : `${u.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
              i = r
                ? r.item_title
                : (0, l.we)("#Profile_Edit_DefaultBlankBackground"),
              s = r ? r.app_name : "";
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: ae.ProfileModifierBody,
                children: [
                  (0, t.jsx)("img", {
                    className: ae.GoldenProfileItemImage,
                    src: e,
                  }),
                  (0, t.jsx)("div", {
                    className: ae.GoldenProfileTitle,
                    children: i,
                  }),
                  (0, t.jsx)("div", {
                    className: ae.GoldenProfileApp,
                    children: s,
                  }),
                ],
              }),
            });
          };
        let St = class extends h.Component {
          OnDismiss() {
            this.props.ProfileItems.RevertProfileModifierChanges(),
              this.props.onDismiss();
          }
          render() {
            const { ProfileItems: r } = this.props;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_ProfileModifier"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)(
                    "#Profile_Edit_ProfileModifier_Instructions",
                  ),
                }),
                (0, t.jsx)(be, {
                  fnRevertChanges: this.OnDismiss,
                  getSearchFields: ir,
                  getItems: () => r.GetOwnedProfileModifiers(),
                  fnCommitChanges: async (e) => (
                    r.SetEquippedProfileModifier(e),
                    r.CommitProfileModifierChanges()
                  ),
                  ItemComponent: la,
                  RenderDefaultComponent: ({ onSelected: e, active: i }) =>
                    (0, t.jsx)(ma, { onSelected: e, active: i }),
                  ActiveItem: r.GetEquippedProfileModifier(),
                  fnIsSameItem: sr,
                  fnRenderPreview: (e) =>
                    (0, t.jsx)(na, { ProfileModifier: e }),
                }),
              ],
            });
          }
        };
        rt([B.oI], St.prototype, "OnDismiss", 1), (St = rt([C.PA], St));
        const la = ({ Item: r, onSelected: e, children: i, active: s }) =>
            (0, t.jsxs)(F.Z, {
              className: (0, v.A)(ae.ProfileModifierOption, s && ae.Active),
              onActivate: e,
              children: [
                (0, t.jsx)("div", {
                  className: ae.Preview,
                  children: (0, t.jsx)("img", { src: Re(r), loading: "lazy" }),
                }),
                (0, t.jsxs)("div", {
                  className: ae.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: ae.Title,
                          children: r.item_title,
                        }),
                        (0, t.jsx)("div", {
                          className: ae.App,
                          children: r.app_name,
                        }),
                      ],
                    }),
                    i,
                  ],
                }),
              ],
            }),
          ma = ({ onSelected: r, children: e, active: i }) =>
            (0, t.jsxs)(F.Z, {
              className: (0, v.A)(ae.ProfileModifierOption, i && ae.Active),
              onActivate: r,
              children: [
                (0, t.jsx)("div", {
                  className: (0, v.A)(ae.Preview, ae.BlankBackground),
                  children: (0, t.jsx)("img", {
                    src: `${u.TS.COMMUNITY_CDN_URL}public/images/trans.gif`,
                    loading: "lazy",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: ae.Details,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: ae.Title,
                          children: (0, l.we)("#ProfileModifier_DisabledTitle"),
                        }),
                        (0, t.jsx)("div", { className: ae.App }),
                      ],
                    }),
                    e,
                  ],
                }),
              ],
            });
        var oe = d(20644),
          da = Object.defineProperty,
          ca = Object.getOwnPropertyDescriptor,
          lr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ca(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && da(e, i, a), a;
          };
        let st = class extends h.Component {
          constructor() {
            super(...arguments),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          async CommitChanges(r) {
            const { ProfileTheme: e } = this.props;
            this.setState({ bSaving: !0, strHTMLError: "" }),
              e.SetActiveTheme(r.theme_id);
            let i = await e.CommitActiveTheme();
            return (
              i != U.R &&
                this.setState({
                  strHTMLError: (0, l.we)("#ConnectionTrouble_FailedToConnect"),
                }),
              this.setState({ bSaving: !1 }),
              i
            );
          }
          RevertChanges() {
            const { ProfileTheme: r } = this.props;
            this.setState({ strHTMLError: "" }), r.RevertActiveTheme();
          }
          render() {
            const { ProfileTheme: r, ProfileItems: e } = this.props;
            let i = !!e.GetEquippedProfileModifier();
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(I.Y9, {
                  children: (0, l.we)("#Profile_Edit_Theme"),
                }),
                (0, t.jsx)(I.a3, {
                  children: (0, l.we)("#Profile_Edit_Theme_Instructions"),
                }),
                (0, t.jsx)(Fe, { strHTMLError: this.state.strHTMLError }),
                i && (0, t.jsx)(fa, {}),
                (0, t.jsx)(be, {
                  getSearchFields: null,
                  ActiveItem: r.ActiveTheme,
                  getItems: async () => r.AvailableThemes,
                  fnCommitChanges: this.CommitChanges,
                  fnRevertChanges: this.RevertChanges,
                  fnRenderPreview: (s) =>
                    (0, t.jsx)(ha, { Theme: s, ProfileItems: e }),
                  fnIsSameItem: pa,
                  ItemComponent: va,
                  classNameItemPicker: oe.ProfileThemePicker,
                  className: (0, v.A)(i && oe.ThemePickerDisabled),
                }),
              ],
            });
          }
        };
        lr([B.oI], st.prototype, "CommitChanges", 1),
          lr([B.oI], st.prototype, "RevertChanges", 1),
          (st = lr([C.PA], st));
        const ua = ({ Theme: r, children: e }) => {
            let i;
            return (
              typeof r == "string"
                ? (i = r + "Theme")
                : (i =
                    ((r == null ? void 0 : r.theme_id) || "Default") + "Theme"),
              (0, t.jsx)("div", { className: nr[i], children: e })
            );
          },
          ha = (0, C.PA)(({ Theme: r, ProfileItems: e }) =>
            (0, t.jsx)("div", {
              className: oe.ProfileThemePreviewCtn,
              children: (0, t.jsx)(kr, { ProfileItems: e, theme: r.theme_id }),
            }),
          ),
          Ka = (r) => [r.title],
          pa = (r, e) => (r && r.theme_id) === (e && e.theme_id),
          va = ({ Item: r, onSelected: e, active: i, children: s }) => {
            const a = r.theme_id + "Theme",
              o = `ThemeOption${a}`;
            return (0, t.jsxs)(F.Z, {
              className: (0, v.A)(
                oe.ProfileTheme,
                e && oe.Option,
                i && oe.Active,
                nr[a],
              ),
              onActivate: e,
              children: [
                (0, t.jsx)("div", {
                  className: oe.PreviewCtn,
                  children: (0, t.jsxs)("svg", {
                    className: (0, v.A)(oe.Preview),
                    viewBox: "0 0 382 382",
                    width: "100%",
                    height: "100%",
                    children: [
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: "var(--edit-background)",
                        className: oe.EditBackground,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: "var(--gradient-background)",
                        fillOpacity: "0.23",
                        className: oe.ThemeBackground,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: `url(#${o}paint0_radial)`,
                        className: oe.PaintRadial0,
                      }),
                      (0, t.jsx)("rect", {
                        width: "382",
                        height: "382",
                        fill: `url(#${o}paint1_radial)`,
                        className: oe.PaintRadial1,
                      }),
                      (0, t.jsxs)("defs", {
                        children: [
                          (0, t.jsxs)("radialGradient", {
                            id: `${o}paint0_radial`,
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(11 126) rotate(9.77175) scale(182.65 191.735)",
                            children: [
                              (0, t.jsx)("stop", {
                                stopColor: "var(--gradient-left)",
                              }),
                              (0, t.jsx)("stop", {
                                offset: "1",
                                stopColor: "var(--gradient-background-left)",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("radialGradient", {
                            id: `${o}paint1_radial`,
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(385 148) rotate(-164.809) scale(312.935 328.499)",
                            children: [
                              (0, t.jsx)("stop", {
                                offset: "0.348958",
                                stopColor: "var(--gradient-right)",
                              }),
                              (0, t.jsx)("stop", {
                                offset: "1",
                                stopColor: "var(--gradient-background-right)",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: oe.Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: oe.Title,
                      children: r.title,
                    }),
                    s,
                  ],
                }),
              ],
            });
          },
          fa = ({ children: r }) =>
            (0, t.jsx)("div", {
              className: oe.ThemesDisabledNotice,
              children: (0, t.jsx)("div", {
                className: oe.Notice,
                children: (0, l.we)(
                  "#Profile_Edit_GoldenProfileOverridesTheme",
                ),
              }),
            });
        var _a = Object.defineProperty,
          ga = Object.getOwnPropertyDescriptor,
          zr = (r, e, i, s) => {
            for (
              var a = s > 1 ? void 0 : s ? ga(e, i) : e, o = r.length - 1, n;
              o >= 0;
              o--
            )
              (n = r[o]) && (a = (s ? n(e, i, a) : n(a)) || a);
            return s && a && _a(e, i, a), a;
          };
        class mr extends h.Component {
          constructor() {
            super(...arguments),
              (this.m_refDiv = h.createRef()),
              (this.state = { bSaving: !1, strHTMLError: "" });
          }
          OnSubmit(e) {
            e.preventDefault(), this.CommitChanges(e.currentTarget);
          }
          async CommitChanges(e) {
            this.setState({ bSaving: !0, strHTMLError: "" });
            let i = await Wt("showcases", new FormData(e));
            i.strHTMLError
              ? this.setState({ strHTMLError: i.strHTMLError })
              : this.setState({ strHTMLError: "" }),
              this.setState({ bSaving: !1 });
          }
          RevertChanges() {
            window.location.href = O.ProfileURL;
          }
          componentDidMount() {
            this.props.elShowcases &&
              ((this.props.elShowcases.style.display = ""),
              this.m_refDiv.current.appendChild(this.props.elShowcases));
          }
          render() {
            const { bSaving: e, strHTMLError: i } = this.state,
              { ProfileTheme: s } = this.props;
            return (0, t.jsx)(ua, {
              Theme: s.ActiveTheme,
              children: (0, t.jsxs)("form", {
                onSubmit: this.OnSubmit,
                children: [
                  (0, t.jsx)(I.Y9, {
                    children: (0, l.we)("#Profile_Edit_FeaturedShowcase"),
                  }),
                  (0, t.jsx)(I.a3, {
                    children: (0, l.oW)(
                      "#Profile_Edit_Showcase_Instructions",
                      (0, t.jsx)("a", {
                        href:
                          u.TS.STORE_BASE_URL + "points/shop/profileshowcases",
                      }),
                    ),
                  }),
                  (0, t.jsx)(Fe, { strHTMLError: i }),
                  (0, t.jsx)("div", { ref: this.m_refDiv }),
                  (0, t.jsx)(Oe, { onCancel: this.RevertChanges, disabled: e }),
                ],
              }),
            });
          }
        }
        zr([B.oI], mr.prototype, "OnSubmit", 1),
          zr([B.oI], mr.prototype, "RevertChanges", 1);
        let dr, cr, ur;
        async function Pa(r) {
          let e = (0, u.Tc)("config", "profile_config");
          e && Object.assign(O, e),
            (dr = new Ni(
              (0, u.Tc)("profile-edit", "profile_edit_config"),
              (0, u.Tc)("profile-badges", "profile_edit_config"),
              r,
            )),
            (0, ue.nA)(u.TS.EREALM) || dr.Profile.GroupList.GetUserGroups(),
            (cr = document.getElementById("showcases"));
        }
        function ya(r) {
          const [e, i] = h.useState(!1),
            s = (0, Qt.TR)();
          if (
            (h.useEffect(() => {
              ur || (ur = Pa(s)), ur.then(() => i(!0));
            }, [s]),
            h.useLayoutEffect(() => {
              if (e)
                for (let H of [
                  "profile_edit_main_content",
                  "profile_edit_leftcol",
                ]) {
                  let L = document.getElementById(H);
                  L && (L.style.visibility = "");
                }
            }, [e]),
            !e)
          )
            return null;
          const a = r.match.url,
            o = dr,
            {
              Profile: n,
              ProfileItems: p,
              ProfileTheme: g,
              EmoticonStore: S,
            } = o,
            R = hr,
            q = {
              ProfileModifierAvailable: () => p.BHasAnyProfileModifiers(),
              BadgesAvailable: () =>
                !(0, ue.nA)(u.TS.EREALM) && o.ProfileBadges.Badges.length > 0,
              GroupsAvailable: () =>
                !(0, ue.nA)(u.TS.EREALM) &&
                (n.GroupList.BGroupsLoaded()
                  ? n.GroupList.BHasAnyGroups()
                  : !0),
              ShowcasesAvailable: () => cr != null,
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(oa, { ProfileItems: p }),
              (0, t.jsx)(er, { Profile: n }),
              (0, t.jsx)(rs, { Profile: n, ProfileItems: p }),
              (0, t.jsx)(ra, {
                root: a,
                currentPath: r.location.pathname,
                linksAvailable: q,
                children: (0, t.jsxs)($.dO, {
                  children: [
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.Info()}`,
                      children: (0, t.jsx)($t, {
                        Profile: n,
                        EmoticonStore: S,
                      }),
                    }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.Avatar()}`,
                      children: (0, t.jsx)(zt, {
                        Profile: n,
                        ProfileItems: p,
                        OGGAvatars: o.OGGAvatarStore,
                        AvatarHistory: o.AvatarHistory,
                      }),
                    }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.Background()}`,
                      children: (0, t.jsx)(tt, {
                        ProfileTheme: g,
                        ProfileItems: p,
                      }),
                    }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.MiniProfile()}`,
                      children: (0, t.jsx)(yt, { ProfileEdit: o }),
                    }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.Theme()}`,
                      children: (0, t.jsx)(st, {
                        ProfileTheme: g,
                        ProfileItems: p,
                      }),
                    }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.ProfileModifier()}`,
                      children: (0, t.jsx)(it, { ProfileItems: p }),
                    }),
                    !(0, ue.nA)(u.TS.EREALM) &&
                      (0, t.jsx)($.qh, {
                        path: `${a}${R.FavoriteBadge()}`,
                        children: (0, t.jsx)(Je, { Badges: o.ProfileBadges }),
                      }),
                    !(0, ue.nA)(u.TS.EREALM) &&
                      (0, t.jsx)($.qh, {
                        path: `${a}${R.FavoriteGroup()}`,
                        children: (0, t.jsx)($e, { Profile: n }),
                      }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.Privacy()}`,
                      children: (0, t.jsx)(or, {
                        PrivacyStore: o.ProfilePrivacy,
                      }),
                    }),
                    (0, t.jsx)($.qh, {
                      path: `${a}${R.Showcases()}`,
                      children: (0, t.jsx)(mr, {
                        elShowcases: cr,
                        ProfileTheme: g,
                      }),
                    }),
                    (0, t.jsx)($.qh, {
                      children: (0, t.jsx)($.rd, { to: `${a}${R.Info()}` }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var Aa = d(9591),
          Ca = d(76006),
          Sa = d(20076),
          xa = d(48399),
          wa = d(16114),
          ja = d(46085),
          he = d(26072),
          xt = d(16277),
          Ba = d(29385),
          Ia = d(61739),
          Ea = d(85599);
        function Ga(r) {
          const [e, i] = (0, h.useState)(!1),
            s = Ra(r.steamid),
            a = ba(r.steamid),
            o = (0, h.useRef)(null),
            n = (0, h.useRef)(null),
            [p, g] = (0, h.useState)(!1),
            S = (0, ja.KQ)(r.steamid),
            R = async () => {
              var L, Z;
              if ((g(!0), !o.current)) return;
              const xe = o.current.value,
                Me = parseInt(xe) * 86400,
                wt = Math.floor(new Date().getTime() / 1e3) + Me,
                jt =
                  (Z = (L = n.current) == null ? void 0 : L.checked) != null
                    ? Z
                    : !1;
              await a.mutateAsync({
                rtCooldownEnds: wt,
                bClearOpenReports: jt,
              }),
                i(!1),
                g(!1);
            },
            q = async () => {
              await a.mutateAsync({ rtCooldownEnds: 0 }), i(!1);
            };
          let H = "";
          if (s.isSuccess && s.data > 0) {
            const L = Math.floor((s.data - new Date().getTime() / 1e3) / 86400);
            H = " " + he.u.Localize("#setcooldown_cooldownsummary", L);
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(xr.EN, {
                active: e,
                children: (0, t.jsxs)(xr.o0, {
                  onCancel: () => i(!1),
                  onOK: R,
                  strTitle: he.u.Localize("#setcooldown_dialogtitle"),
                  strDescription: he.u.Localize(
                    "#setcooldown_dialogdescription",
                  ),
                  strOKButtonText: he.u.Localize("#setcooldown_setbutton"),
                  bOKDisabled: p,
                  children: [
                    s.isLoading &&
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)(Ea.t, { size: "small" }),
                          " ",
                          he.u.Localize("#setcooldown_loading"),
                        ],
                      }),
                    s.isError &&
                      (0, t.jsx)("p", {
                        children: he.u.Localize("#setcooldown_errorloading"),
                      }),
                    s.isSuccess &&
                      s.data > 0 &&
                      (0, t.jsx)("p", {
                        children: he.u.Localize(
                          "#setcooldown_expireson",
                          (0, wa.P0)(s.data, !1, ""),
                        ),
                      }),
                    s.isSuccess &&
                      s.data === 0 &&
                      (0, t.jsx)("p", {
                        children: he.u.Localize("#setcooldown_nocooldown"),
                      }),
                    S.isSuccess &&
                      !!S.data &&
                      (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("p", {
                          children: he.u.Localize(
                            "#setcooldown_statssummary",
                            S.data.total_acquitted_reports,
                            S.data.total_reports,
                            S.data.acquitted_reports_in_last_week,
                            S.data.reports_in_last_week,
                          ),
                        }),
                      }),
                    (0, t.jsxs)("p", {
                      children: [
                        (0, t.jsxs)("label", {
                          children: [
                            he.u.Localize("#setcooldown_newcooldownlabel"),
                            " ",
                            (0, t.jsx)("input", {
                              type: "number",
                              min: "0",
                              placeholder: he.u.Localize("#setcooldown_days"),
                              ref: o,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            (0, t.jsx)("input", { type: "checkbox", ref: n }),
                            " ",
                            he.u.Localize("#setcooldown_clearopenreports"),
                          ],
                        }),
                        (0, t.jsx)("button", {
                          disabled: p,
                          onClick: q,
                          children: he.u.Localize("#setcooldown_clearcooldown"),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("a", {
                className: "popup_menu_item",
                onClick: () => i(!0),
                children: ["Reporting Cooldown", H],
              }),
            ],
          });
        }
        function Ra(r) {
          const e = (0, Qt.KV)();
          return (0, ze.I)({
            queryKey: ["reportercooldown", r],
            queryFn: async () => {
              var i;
              const s = ne.w.Init(xt.a9);
              s.Body().set_steamid(r);
              const a = await xt.fL.GetReporterCooldown(e, s);
              if (!a.BSuccess()) throw new Error("EResult " + a.GetEResult());
              return (i = a.Body().rtime_cooldown_ends()) != null ? i : 0;
            },
          });
        }
        function ba(r) {
          const e = (0, Qt.KV)(),
            i = (0, Ba.jE)();
          return (0, Ia.n)({
            mutationFn: async (s) => {
              const a = ne.w.Init(xt.f0);
              a.Body().set_steamid(r),
                a.Body().set_rtime_cooldown_ends(s.rtCooldownEnds),
                s.bClearOpenReports !== void 0 &&
                  a.Body().set_acquit_unresolved_reports(s.bClearOpenReports);
              const o = await xt.fL.UpdateReporterCooldown(e, a);
              if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
            },
            onSuccess: async () => {
              await i.invalidateQueries({ queryKey: ["reportercooldown", r] });
            },
          });
        }
        const Na = {
            ProfileEdit: () => "edit",
            ProfilePrivacy: () => "edit/settings",
            Games: () => "games",
            ItemCollection: () => "itemcollection",
          },
          hr = {
            Info: () => "/info",
            Avatar: () => "/avatar",
            Background: () => "/background",
            MiniProfile: () => "/miniprofile",
            Theme: () => "/theme",
            ProfileModifier: () => "/goldenprofile",
            FavoriteBadge: () => "/favoritebadge",
            FavoriteGroup: () => "/favoritegroup",
            Privacy: () => "/settings",
            Showcases: () => "/showcases",
          };
        function La(r) {
          return (0, t.jsx)("div", {
            children: (0, t.jsx)(Ca.Ay, { targetType: Aa.Pw.BZ }),
          });
        }
        function Oa(r) {
          const e = r.match.path;
          return (0, t.jsxs)($.dO, {
            children: [
              (0, t.jsx)($.qh, {
                path: `${e}/${Na.ProfileEdit()}`,
                render: (i) => (0, t.jsx)(ya, { ...i }),
              }),
              (0, t.jsx)($.qh, {
                path: `${e}`,
                render: (i) =>
                  (0, t.jsx)(Sa.X, {
                    config: {
                      "profile-rewards": () => (0, t.jsx)(La, { ...i }),
                      "ugc-file-content-moderation-report-dialog": (s) =>
                        (0, t.jsx)(xa.Xi, { ...s }),
                      "reporter-cooldown-dialog": (s) =>
                        (0, t.jsx)(Ga, { ...s }),
                    },
                  }),
              }),
            ],
          });
        }
      },
      46085: (w, Pe, d) => {
        "use strict";
        d.d(Pe, {
          EC: () => E,
          KQ: () => we,
          Kt: () => Y,
          N8: () => M,
          c3: () => G,
          iW: () => l,
          kZ: () => v,
          lY: () => y,
          wy: () => te,
          y4: () => Q,
        });
        var t = d(35038),
          O = d(16277),
          W = d(68312),
          k = d(88942),
          c = d(29385),
          b = d(61739),
          ve = d(72604),
          X = d(98112);
        const C = "get_content_report_subject_group",
          h = "get_content_report_subject_audit_log";
        async function l(f, m, _, P) {
          return Promise.all([
            f.invalidateQueries({ queryKey: [C, m, _] }),
            f.invalidateQueries({ queryKey: [h, m, _, P] }),
          ]);
        }
        async function N(f, m, _) {
          return Promise.all([
            f.invalidateQueries({ queryKey: [C, m, _] }),
            f.invalidateQueries({ queryKey: [h, m, _] }),
          ]);
        }
        function j(f, m, _) {
          return {
            queryKey: [C, m, _],
            queryFn: async () => {
              const P = t.w.Init(O.ge);
              P.Body().set_subject_type(m), P.Body().set_subject_group_id(_);
              const x = await O.fL.GetContentReportSubjectGroup(f, P);
              if (!x.BSuccess())
                throw new Error(
                  "Failed in GetContentReportSubjectGroup, EResult: " +
                    x.GetEResult(),
                );
              return x.Body().toObject();
            },
          };
        }
        function v(f, m) {
          const _ = (0, W.KV)();
          return (0, k.I)(j(_, f, m));
        }
        function D(f, m, _, P) {
          return {
            queryKey: [h, m, _, P],
            queryFn: async () => {
              if (m === void 0 || _ === void 0 || P === void 0) return;
              const x = t.w.Init(O.Ru);
              return (
                x.Body().set_subject_type(m),
                x.Body().set_subject_group_id(_),
                x.Body().set_subject_id(P),
                (await O.fL.GetAuditLog(f, x)).Body().toObject()
              );
            },
          };
        }
        function Y(f, m, _) {
          const P = (0, W.KV)();
          return (0, k.I)(D(P, f, m, _));
        }
        function y(f, m, _) {
          const P = (0, W.KV)(),
            x = (0, c.jE)();
          return (0, b.n)({
            mutationFn: async (u) => {
              const T = t.w.Init(O.u5);
              T.Body().set_subject_type(f),
                T.Body().set_subject_group_id(m),
                T.Body().set_subject_id(_),
                T.Body().set_required_level(u.eNewLevel),
                u.eReason && T.Body().set_reason(u.eReason),
                u.strNote && T.Body().set_note(u.strNote);
              const J = await O.fL.EscalateSubject(P, T);
              if (J.GetEResult() !== ve.R)
                throw new Error(`Failed to escalate subject: ${J.GetEMsg()}`);
            },
            onSuccess: async (u, T) => {
              await Promise.all([
                l(x, f, m, _),
                x.invalidateQueries({ queryKey: ["get_claimed"] }),
                x.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function M() {
          const f = (0, W.KV)(),
            m = (0, c.jE)();
          return (0, b.n)({
            mutationFn: async (_) => {
              const P = t.w.Init(O.j);
              P.Body().set_subject_type(_.eSubjectType),
                P.Body().set_subject_group_id(_.ulSubjectGroupID),
                P.Body().set_subject_id(_.ulSubjectID);
              const x = await O.fL.SustainModeration(f, P);
            },
            onSuccess: async (_, P) => {
              await m.invalidateQueries({ queryKey: ["get_claimed"] }),
                await l(m, P.eSubjectType, P.ulSubjectGroupID, P.ulSubjectID);
            },
          });
        }
        function Q(f, m, _, P, x) {
          const u = (0, W.KV)(),
            T = (0, c.jE)();
          return (0, b.n)({
            mutationFn: async () => {
              const J = t.w.Init(O.ZV);
              J.Body().set_steamid(f),
                J.Body().set_subject_type(m),
                J.Body().set_subject_group_id(_),
                J.Body().set_subject_id(P),
                J.Body().set_details(x);
              const ye = await O.fL.DisputeModerationForSubject(u, J);
            },
            onSuccess: async () => {
              await l(T, m, _, P);
            },
          });
        }
        function te(f, m, _, P) {
          const x = (0, c.jE)(),
            u = (0, W.KV)();
          return (0, b.n)({
            mutationFn: async () => {
              const T = t.w.Init(O.zF);
              T.Body().set_subject_type(f),
                T.Body().set_subject_group_id(m),
                T.Body().set_subject_id(_),
                T.Body().set_owner_dispute_details(P);
              const J = await O.fL.UpdateSubject(u, T);
              if (!J.BSuccess()) throw new Error("EResult " + J.GetEResult());
            },
            onSuccess: async () => {
              await l(x, f, m, _);
            },
          });
        }
        function K(f, m) {
          return {
            queryKey: ["reporterstats", m],
            queryFn: async () => {
              const _ = t.w.Init(O.KD);
              _.Body().set_steamid(m);
              const P = await O.fL.GetReporterStats(f, _);
              if (!P.BSuccess()) throw new Error("EResult " + P.GetEResult());
              return P.Body().toObject();
            },
          };
        }
        function we(f) {
          const m = (0, W.KV)();
          return (0, k.I)(K(m, f));
        }
        function Ue(f, m) {
          const _ = useActiveServiceTransport(),
            P = useQueryClient();
          return useMutation({
            mutationFn: async (x) => {
              const u = CProtoBufMsg.Init(
                CContentModeration_UpdateSubjectGroup_Request,
              );
              u.Body().set_subject_type(f),
                u.Body().set_subject_group_id(m),
                u.Body().set_new_subject_group_id(x.ulNewSubjectGroupID),
                u
                  .Body()
                  .set_additional_subject_data(x.rgNewAdditionalSubjectData);
              const T = await ContentModerationService.UpdateSubjectGroup(_, u);
              if (!u.BSuccess())
                throw new Error(
                  "UpdateSubjectGroup returned EResult " + T.GetEResult(),
                );
            },
            onSuccess: async (x, u) => {
              await N(P, f, m), await N(P, f, u.ulNewSubjectGroupID);
            },
          });
        }
        function E(f, m, _) {
          const P = (0, W.KV)(),
            x = (0, c.jE)();
          return (0, b.n)({
            mutationFn: async (u) => {
              const T = t.w.Init(X.Er);
              T.Body().set_steamid(f),
                T.Body().set_comment_thread_id(m),
                T.Body().set_gidcomment(_),
                T.Body().set_reason(u.reason),
                T.Body().set_note(u.message);
              for (const ye of u.sanctions) {
                const He = new X.u6();
                He.set_sanction(ye.sanction),
                  ye.days && He.set_days(ye.days),
                  T.Body().add_sanctions(He);
              }
              const J = await X.BE.SanctionComment(P, T);
              if (!J.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${J.GetEResult()} (${J.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await x.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function G(f, m, _) {
          const P = (0, W.KV)(),
            x = (0, c.jE)();
          return (0, b.n)({
            mutationFn: async () => {
              const u = t.w.Init(X.RX);
              u.Body().set_steamid(f),
                u.Body().set_comment_thread_id(m),
                u.Body().set_gidcomment(_),
                u.Body().set_report_action(X.du.Pn),
                u.Body().set_resolve(!0),
                await X.Vi.UpdateCommentReportState(P, u);
            },
            onSuccess: async () => {
              await x.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      88363: (w, Pe, d) => {
        "use strict";
        d.d(Pe, {
          Fj: () => O,
          R$: () => b,
          Zx: () => W,
          hs: () => X,
          o5: () => k,
          sr: () => ve,
        });
        const t = 1,
          O = 2,
          W = 4,
          k = 8,
          c = 256,
          b = 512,
          ve = 1024,
          X = 2048,
          C = 4096,
          h = 8192;
      },
      5858: (w, Pe, d) => {
        "use strict";
        d.d(Pe, { Z: () => D, dV: () => X.d, rO: () => v, tp: () => X.t });
        var t = d(14947),
          O = d(31561),
          W = d(85528),
          k = d(18210),
          c = d(99412),
          b = d(88363),
          ve = d(3166),
          X = d(35413),
          C = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          l = (Y, y, M) =>
            y in Y
              ? C(Y, y, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: M,
                })
              : (Y[y] = M),
          N = (Y, y, M, Q) => {
            for (
              var te = Q > 1 ? void 0 : Q ? h(y, M) : y, K = Y.length - 1, we;
              K >= 0;
              K--
            )
              (we = Y[K]) && (te = (Q ? we(y, M, te) : we(te)) || te);
            return Q && te && C(y, M, te), te;
          },
          j = (Y, y, M) => l(Y, typeof y != "symbol" ? y + "" : y, M);
        function v(Y) {
          let y = "offline";
          return (
            Y &&
              (Y.is_ingame
                ? (y = "ingame")
                : Y.m_broadcastAccountId
                  ? (y = "watchingbroadcast")
                  : Y.is_online && (y = "online"),
              Y.is_awayOrSnooze && (y += " awayOrSnooze")),
            y
          );
        }
        class D {
          constructor(y) {
            j(this, "m_steamid"),
              j(this, "m_bInitialized", !1),
              j(this, "m_ePersonaState", c.cU3),
              j(this, "m_unGamePlayedAppID", 0),
              j(this, "m_gameid", "0"),
              j(this, "m_unPersonaStateFlags", 0),
              j(this, "m_strPlayerName", ""),
              j(this, "m_strAvatarHash", X.d),
              j(this, "m_strAccountName", ""),
              j(this, "m_rtLastSeenOnline", 0),
              j(this, "m_strGameExtraInfo", ""),
              j(this, "m_unGameServerIP", 0),
              j(this, "m_unGameServerPort", 0),
              j(this, "m_game_lobby_id", ""),
              j(this, "m_bPlayerNamePending", !1),
              j(this, "m_bAvatarPending", !1),
              j(this, "m_broadcastId"),
              j(this, "m_broadcastAccountId"),
              j(this, "m_broadcastAppId"),
              j(this, "m_broadcastViewerCount"),
              j(this, "m_strBroadcastTitle"),
              j(this, "m_bCommunityBanned"),
              j(this, "m_eGamingDeviceType", c.eSB),
              j(this, "m_mapRichPresence", t.sH.map()),
              j(this, "m_bNameInitialized", !1),
              j(this, "m_bStatusInitialized", !1),
              j(this, "m_strProfileURL"),
              (0, t.Gn)(this),
              (this.m_steamid = y);
          }
          Reset() {
            (this.m_ePersonaState = c.cU3),
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
              (this.m_eGamingDeviceType = c.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != c.cU3 && this.m_ePersonaState != c._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
          }
          get is_in_joinable_game() {
            return (
              this.has_joinable_game_flag ||
              this.is_in_valid_lobby ||
              this.has_server_ip
            );
          }
          get has_joinable_game_flag() {
            var y;
            return (
              (((y = this.m_unPersonaStateFlags) != null ? y : 0) & b.Fj) != 0
            );
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == c.PrD || this.m_ePersonaState == c.vPz
            );
          }
          HasStateFlag(y) {
            var M;
            return (
              (((M = this.m_unPersonaStateFlags) != null ? M : 0) & y) != 0
            );
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != c.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(b.Zx);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? W.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? W.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? W.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
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
              let y = W.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (y) {
                let M = this.m_mapRichPresence.get("steam_display");
                return y.Localize(M, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(b.o5))
              return (0, k.we)("#PersonaStateRemotePlayTogether");
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
            if (this.last_seen_online == 0) return 3e4;
            const y = 60,
              M = y * 60,
              Q = M * 24;
            let te = 1e3;
            const K =
              W.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (
              K > Q ? (te *= M) : K > 2 * M ? (te *= y) : (te *= y / 4), te
            );
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, k.we)("#PersonaStateOffline");
            let y = this.GetOfflineStatusUpdateRate();
            (!ve.TS.IN_MOBILE || y <= 60) && (0, O.tB)(y);
            let M = W.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return M < 60
              ? (0, k.we)("#PersonaStateLastSeen_JustNow")
              : (0, k.we)("#PersonaStateLastSeen", (0, k.Hq)(M));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case c.cU3:
              case c._3b:
                return this.GetOfflineStatusTime();
              case c.UXk:
                return (0, k.we)("#PersonaStateOnline");
              case c.wcG:
                return (0, k.we)("#PersonaStateBusy");
              case c.PrD:
                return (0, k.we)("#PersonaStateAway");
              case c.vPz:
                return (0, k.we)("#PersonaStateSnooze");
              case c.Hrn:
                return (0, k.we)("#PersonaStateLookingToTrade");
              case c.HAb:
                return (0, k.we)("#PersonaStateLookingToPlay");
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
            return this.m_strAvatarHash != X.d;
          }
          get avatar_url() {
            return (0, X.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, X.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, X.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(y, M, Q) {
            if (M.has_public_party_beacon) {
              if (!Q.has_public_party_beacon) return -1;
            } else {
              if (Q.has_public_party_beacon) return 1;
              if (M.is_ingame)
                if (Q.is_ingame)
                  if (y) {
                    if (M.is_awayOrSnooze) {
                      if (!Q.is_awayOrSnooze) return 1;
                    } else if (Q.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (Q.is_ingame) return 1;
            }
            if (M.is_online) {
              if (!Q.is_online) return -1;
            } else if (Q.is_online) return 1;
            if (y) {
              if (M.is_awayOrSnooze) {
                if (!Q.is_awayOrSnooze) return 1;
              } else if (Q.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${ve.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${ve.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        N([t.sH], D.prototype, "m_bInitialized", 2),
          N([t.sH], D.prototype, "m_ePersonaState", 2),
          N([t.sH], D.prototype, "m_unGamePlayedAppID", 2),
          N([t.sH], D.prototype, "m_gameid", 2),
          N([t.sH], D.prototype, "m_unPersonaStateFlags", 2),
          N([t.sH], D.prototype, "m_strPlayerName", 2),
          N([t.sH], D.prototype, "m_strAvatarHash", 2),
          N([t.sH], D.prototype, "m_strAccountName", 2),
          N([t.sH], D.prototype, "m_rtLastSeenOnline", 2),
          N([t.sH], D.prototype, "m_strGameExtraInfo", 2),
          N([t.sH], D.prototype, "m_unGameServerIP", 2),
          N([t.sH], D.prototype, "m_unGameServerPort", 2),
          N([t.sH], D.prototype, "m_game_lobby_id", 2),
          N([t.sH], D.prototype, "m_bPlayerNamePending", 2),
          N([t.sH], D.prototype, "m_bAvatarPending", 2),
          N([t.sH], D.prototype, "m_broadcastId", 2),
          N([t.sH], D.prototype, "m_broadcastAccountId", 2),
          N([t.sH], D.prototype, "m_broadcastAppId", 2),
          N([t.sH], D.prototype, "m_broadcastViewerCount", 2),
          N([t.sH], D.prototype, "m_strBroadcastTitle", 2),
          N([t.sH], D.prototype, "m_bCommunityBanned", 2),
          N([t.sH], D.prototype, "m_eGamingDeviceType", 2),
          N([t.sH], D.prototype, "m_bNameInitialized", 2);
      },
      46943: (w, Pe, d) => {
        "use strict";
        d.d(Pe, { Ul: () => te, i8: () => K });
        var t = d(7850),
          O = d(90626),
          W = d(75844),
          k = d(5858),
          c = d(36707),
          b = d(3166),
          ve = d(13465);
        const X =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          C =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          h =
            d.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
        var l = d(43047),
          N = d.n(l),
          j = d(71742),
          v = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          Y = (E, G, f) =>
            G in E
              ? v(E, G, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: f,
                })
              : (E[G] = f),
          y = (E, G, f, m) => {
            for (
              var _ = m > 1 ? void 0 : m ? D(G, f) : G, P = E.length - 1, x;
              P >= 0;
              P--
            )
              (x = E[P]) && (_ = (m ? x(G, f, _) : x(_)) || _);
            return m && _ && v(G, f, _), _;
          },
          M = (E, G, f) => Y(E, typeof G != "symbol" ? G + "" : G, f);
        function Q(E) {
          switch (E) {
            case "X-Small":
            case "Small":
              return X;
            case "Medium":
            case "MediumLarge":
              return C;
            case "Large":
            case "X-Large":
            case "FillArea":
              return h;
            default:
              return (0, j.z_)(E, `Unhandled size ${E}`), C;
          }
        }
        const te = O.memo(function (G) {
          const {
              strAvatarURL: f,
              size: m = "Medium",
              className: _,
              statusStyle: P,
              statusPosition: x,
              children: u,
              ...T
            } = G,
            J = O.useMemo(() => {
              const ye = [];
              return f && ye.push(f), ye.push(Q(m)), ye;
            }, [f, m]);
          return (0, t.jsxs)("div", {
            className: (0, c.A)(
              N().avatarHolder,
              "avatarHolder",
              "no-drag",
              m,
              _,
            ),
            ...T,
            children: [
              (0, t.jsx)("div", {
                className: (0, c.A)(N().avatarStatus, "avatarStatus", x),
                style: P,
              }),
              (0, t.jsx)(ve.c, {
                className: (0, c.A)(N().avatar, "avatar"),
                rgSources: J,
                draggable: !1,
              }),
              u,
            ],
          });
        });
        let K = class extends O.Component {
          render() {
            const {
              persona: E,
              size: G = "Medium",
              animatedAvatar: f,
              className: m,
              strBackupAvatarURL: _,
              ...P
            } = this.props;
            let x = "";
            return (
              f && f.image_small && f.image_small.length != 0
                ? (x = b.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + f.image_small)
                : E
                  ? ((x = E.avatar_url_medium),
                    G == "Small" || G == "X-Small"
                      ? (x = E.avatar_url)
                      : (G == "Large" || G == "X-Large" || G == "FillArea") &&
                        (x = E.avatar_url_full))
                  : _ && (x = _),
              (0, t.jsx)(te, {
                strAvatarURL: x,
                size: G,
                className: (0, c.A)((0, k.rO)(E), m),
                ...P,
              })
            );
          }
        };
        K = y([W.PA], K);
        const we = (0, W.PA)((E) => {
          const {
            profileItem: G,
            className: f,
            bDisableAnimation: m,
            ..._
          } = E;
          if (!G || !G.image_small || G.image_small.length == 0) return null;
          let P = m ? G.image_large : G.image_small;
          return (
            P || (P = G.image_small),
            P.startsWith("https://") ||
              (P = b.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + P),
            (0, t.jsx)("div", {
              className: (0, c.A)(N().avatarFrame, f, "avatarFrame"),
              ..._,
              children: (0, t.jsx)("img", {
                className: N().avatarFrameImg,
                src: P,
              }),
            })
          );
        });
        let Ue = class extends O.Component {
          constructor(E) {
            super(E),
              M(this, "m_timer"),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let E = 0;
            switch (this.props.loopDuration) {
              case "Short":
                E = 2500;
                break;
              case "Medium":
                E = 5e3;
                break;
              case "Long":
                E = 1e4;
                break;
            }
            E != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                E,
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
          componentDidUpdate(E) {
            this.props.loopDuration != E.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != E.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: E,
              animatedAvatar: G,
              avatarFrame: f,
              children: m,
              style: _,
              bLimitProfileFrameAnimationTime: P,
              bParentHovered: x,
              ...u
            } = this.props;
            u.onClick && (_ = { ..._, cursor: "pointer" });
            const T = this.state.bAnimate && G != null ? G : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(K, {
                animatedAvatar: T,
                ...u,
                children: [
                  m,
                  (0, t.jsx)(we, {
                    profileItem: f != null ? f : null,
                    bDisableAnimation: P && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        Ue = y([W.PA], Ue);
      },
      35471: (w) => {
        w.exports = {
          AvatarRow: "_2_WvK_kw61MeIY0BLQuTYk",
          Avatar: "_27tBXgfdEAfkIIkBVcHcz7",
          AvatarImgCtn: "_38rbzqVaeYFSog5HY2wIfA",
          AvatarCropPreview: "_2Oe26ilBQ7C8rjQMvDsmgp",
          AvatarFrame: "_3ySvFQWUuRAY6Vx1d5Efkw",
          Large: "EYMShwguH1_ideNSQzvMS",
          Medium: "_14qK3ssEIfafgHxF-tSLUd",
          Small: "_2pCRw3iWEG_XNKhAxycr9t",
          size: "_2jOhbF8XC1faroHD7ujZfC",
          AvatarDialog: "_1p-WxvRlOfiudkoGE7ksJy",
          AvatarDialogBody: "_39Ovvp_JpX-r2RWezUkAdX",
          AvatarDialogTop: "aCrGPGVeH6HvzyPW8PaAj",
          AvatarDialogUploadArea: "_22EnaYFQb5I0kYtH2UHEhV",
          AvatarSaveActions: "_1c6Pv0fgCBFtwWexhQwIT-",
          Error: "eo3iM5FQXIYFjV6icGtOt",
          HideDefaultAvatar: "_6zU6FltqwlftPqcXGNwdg",
        };
      },
      45301: (w) => {
        w.exports = {
          AvatarCollectionHeader: "_27Q-8T7of0bKkwA3zlx1kz",
          AvatarCollectionName: "_2pum1YNak3hPxNcovBkHLM",
          AvatarCollection: "_1UoAvYFtO-OEv3DMwZCL8A",
          AvatarCollectionSingleRowWrapper: "_1vTT_zTYgCMac88oxQi3Ha",
          ExpandButtonContainer: "_1gQbx3Kj8dnEC2lP45X6kS",
          AvatarCollectionSingleRow: "BT8ZjnpbIcKCaGUGlVd-v",
          AvatarRowSpacer: "_3g0nrYJivLhKmdWlHk1uhD",
          AvatarPreview: "_29CGQrIvjYllKwVQKe8d8R",
          Large: "_1aa4CwlUeZE1tRZGOsRPx9",
          ExpandAvatarsButton: "_3PolQ91t3Uohfvr4beUAM9",
          FramePreview: "_16w1DqxiJ7Hou6al4RGELE",
          DefaultAvatarFrame: "Z3REHSppX48KICnAjjh90",
          DefaultAvatarFrameContent: "_2TBs_xzgkuwXPkgIBiITOJ",
          CollectionGroup: "_2kbA6NLESf88_j1ERdI8Gv",
          Title: "_2Gy0LT9CY0HBBCjrM9Ffs7",
          Primary: "_24kMLN7TtIY39bpBnG9XZv",
          CollectionGroupAvatars: "wWso7JTRLQM-cuJ7gvxf3",
        };
      },
      27456: (w) => {
        w.exports = { FilteredNameWarning: "WMztNH2YVTVVxIq6OxSLt" };
      },
      90713: (w) => {
        w.exports = {
          Badge: "_2ODUBJas15JwSZWN9fWb07",
          BadgeImage: "_3M7FE3-Qhs3rPPI1uEviqM",
          BadgeImageNone: "_1oIYR3fmUnOC9eWJOv-Rz-",
          BadgeDetails: "_3Y40HABkqaQQVn7lIX0Rm9",
          GameName: "k5TyflBXF_FmpbYNKfggk",
          Active: "_1r9u8u8kKtPi6zOrEDoLzY",
          FavoriteBadge: "_3lkNZaOsD0rSbyrItINirx",
          BadgeOption: "P1MG7839XeRbNLY9PPQ38",
        };
      },
      53841: (w) => {
        w.exports = {
          Group: "_1yHxtA_qbj9xWiLkUiovpE",
          GroupAvatar: "_1C_n640PvrV_-DCXwOeCZY",
          GroupDetails: "aUFBJvbETNq6EL-n8KopY",
          Active: "_12sHAG2Fad1srfzqUDKzBF",
          FavoriteGroup: "_2XwzRFYfrwfarnDmtGb8Hj",
          GroupOption: "_3neyrJugKgECRdGVuulTG5",
        };
      },
      30082: (w) => {
        w.exports = {
          MiniProfilePreview: "_1MWlWL7ZhPBM6BDFnIiZC-",
          MiniProfileBackgroundOption: "_1kB6_rUcA_VRp7MER6E0Vi",
          Preview: "_1JFlRrkeYJegFK8xCBRfYw",
          Active: "B-qJhQJWkxUckMndLyqeR",
          Details: "_3-aXJM9nyOBORZvUQyQ3ap",
          BlankBackground: "_19sKX1Sg9icPcVJAPT7kN0",
          PreviewVideo: "_3PAmyizPC3zW2TZLRI8I9P",
          Title: "_2l5zy4BaLwvaZNuUvyQnU6",
          App: "xmRMR8QAsdIDgZA0PoBxy",
          WithVideo: "_1BBISLCwQa0DE2a_Xy6Icq",
        };
      },
      26075: (w) => {
        w.exports = {
          EquippedBackgroundBlock: "_1PihrEGH3HghW5Q87-82wa",
          EquippedBackgroundPreview: "_2k_2LLU5UqpUgiNx2F04-w",
          BackgroundOption: "_189ERe_A-jhzSSRw4f2Hw",
          Preview: "_2Zeggw-2qC5ma2qpjzHRlF",
          Active: "evPn26xhwAuh_SlWNY26E",
          Details: "_1xKo7wTahW2CJNXn4Gfkxj",
          PreviewVideo: "_2zA7YWc8urB45EvldeF88g",
          WithVideo: "_3muY5fT_nvt4gikS1bVHmO",
          Title: "o0PlP8_WMy75QKdhVlbov",
          App: "_3yGh0iLXIo7GSx2Pg69p8j",
          ProfileBackgroundEquipOptions: "RS77Un974Vp7lUC-yWzSj",
          HideEquipOptions: "_1XNnrCt7ro_dtfW9NhPTVH",
          ProfileBackgroundEquipOption: "_3Hc2RndZ1VBwa3ChKjT5r_",
        };
      },
      78091: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          Shell: "_2kqKZFxhF8XvzaoAekjV7m",
          Navigation: "_33Kl16vpskBOQpwINGA8ah",
          NavLink: "_3rtIpqfC_9VWz4DRSTPach",
          ExternalLink: "_1xCANgh2DSCcadDX6X0PpT",
          Disabled: "k9wPoKS3UeY-ju9JEoeZZ",
          Active: "_3H7Awq1oAhxrdDo3ANR4mu",
          ProfileEditStoreLink: "_3iaJsP4avEYu4oI9gP8Gro",
          PageContent: "_23XE60ehNyeIhLHf5L7QPl",
          table: "_3hkXCJfwhtQ7cIylRaBXqu",
          grey_bevel: "TyiecoVJmS6-thhLSt8g3",
          ProfileEditLine: "_58Mghr8vhm_-IZP3Mkcb_",
          BackToProfileCtn: "_1YOt2792y012GM8bOQs0kh",
          BackgroundAnimation: "_2KBoHhvcLeo2vQwWuj0IRb",
          "ItemFocusAnim-darkerGrey-nocolor": "tmP6KcnuW7UY3GT67_yjy",
          "ItemFocusAnim-darkerGrey": "_2z9xuC0Na9M0VX4xEFjoSR",
          "ItemFocusAnim-darkGreySettings": "_2AOpRetkacszHSv5tq9OQa",
          "ItemFocusAnim-darkGrey": "_1X0OQa5fPKjWOsHz5d-xAO",
          "ItemFocusAnim-grey": "X_zua7jreE_f2rGbT4l-O",
          "ItemFocusAnim-translucent-white-10": "_3PmOIuJLR5U9VhCcOub_Uz",
          "ItemFocusAnim-translucent-white-20": "YMb3o1HrEEjr7vA9uSIUi",
          "ItemFocusAnimBorder-darkGrey": "_1zSKntJJ3QOyql8hDShLJz",
          "ItemFocusAnim-green": "_1fvU-7Mr4_64KzW_eUa87u",
          focusAnimation: "_1gK9ZDrO_OJkKiiO1p7daU",
          hoverAnimation: "MK_YH9374l4-TSjBSAaxv",
        };
      },
      49622: (w) => {
        w.exports = {
          ProfileModifierPreview: "OhBEtbgKwv_tF8ApEBKW1",
          ProfileModifierOption: "_3NIiYdehUu4wAz6rNXR_OB",
          Preview: "_2GvFUUI49ePmg62crk2qDO",
          Active: "_3nePJyNcthWMTkF4NSI7aI",
          Details: "v3WjrE9N9goFIJQPWYt2y",
          BlankBackground: "Gd3-pJ25GXL-bDaQAnChb",
          Title: "_3be6DMXFaQOXetdgMvAlAB",
          App: "_2SYZ_HWvH4AGrrsvCxfhv",
        };
      },
      38945: (w) => {
        w.exports = {
          ProfilePreview: "sJ5StnbpDdxWmTGb1GPaI",
          PaintRadial0: "_3ygvjjstY4gEw5KnTovscL",
          PaintRadial1: "_1iVdB4h9VHJh3-Y2uaYV_a",
          ThemeBackground: "_2cgol9Az0EgKe5fq221xB1",
          ProfilePagePreviewCtn: "jnA47pnC2fs47Uo4apcHu",
          BackgroundPosition: "_2iCc5ucakNB4NVioWadFOk",
          Background: "_3gdqW4BrRxMHh-BiNB6op0",
          FullScreen: "_3wfiB3fzVjHX4d37oNIrws",
          ProfilePreviewPosition: "_2YO8vzkqzPjjFQ2DkjOdUE",
          ProfilePreviewCtn: "uyN_gy4zQkYOLt9JjhqwO",
        };
      },
      20644: (w) => {
        w.exports = {
          ProfileThemePicker: "_37I7qqfjDrrodNn7HMcUDt",
          ThemePickerDisabled: "_1gBl2q9swlXkDKS1stCsJI",
          ProfileThemePreviewCtn: "_3PwJq2PZopqeihMUUx3DFr",
          ThemesDisabledNotice: "_3GOAIB03esypNEP7awK6mV",
          Notice: "_2fpuQBcIAw_0cP_FLqJqBR",
          ProfileTheme: "_39ksjd1_LKKPt0CIOhnMF7",
          Option: "_2aQ08chNRS9DgKjACdNLuA",
          Details: "mHggMG8QHavW0I9eosXGZ",
          Preview: "_36oStJXlvGWLdFxYUgNyg-",
          Active: "_1axztkRY8LVC4m3V8pYDb3",
          PreviewCtn: "_33SnKgfa_4ZtACekXcqli0",
          EditBackground: "_1idPP7NJkL8W_tzA70RqD_",
          PaintRadial0: "_18laVD4VvL_F7TfqStTAlc",
          PaintRadial1: "W_TqKQWMZV-fb62eqJZLF",
          ProfilePreview: "MneEOvQdS_KqFNR9i_Uxz",
        };
      },
      19838: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          formattingButtons: "_2T2D7Afq6aW35s3wV5Tgkz",
          formattingButton: "LhNoIaEKN1cIpOrnt59wq",
          summaryTextArea: "_2ipSt29jAqoPXf-_iTAL0-",
          summaryContainer: "_3sH5hzWvrCU2QOKpNxfq3m",
          BackgroundAnimation: "iQhnWyYlwgFi5YWYBMwJ4",
          "ItemFocusAnim-darkerGrey-nocolor": "_12rtn7LW8NeHZuOZRYrQUr",
          "ItemFocusAnim-darkerGrey": "_3ASpBDSwq0FQWK7k3PCaCE",
          "ItemFocusAnim-darkGreySettings": "_2imfEHKAKkMI4e0U6blAKg",
          "ItemFocusAnim-darkGrey": "_2eY89CR3ALmqkaa5c8qJnd",
          "ItemFocusAnim-grey": "mGBoBubSOBDji6ZhWGlSk",
          "ItemFocusAnim-translucent-white-10": "jQ_HCKVuc3Rbnyna4TT6k",
          "ItemFocusAnim-translucent-white-20": "_31vG8GURxLO6NzzoGFspfp",
          "ItemFocusAnimBorder-darkGrey": "_3y-gKQtRDkvMB_jhfgrSpC",
          "ItemFocusAnim-green": "_2CI6zPlogHCygbXcFwfdub",
          focusAnimation: "_3JagW-WJua436yyI1Rep86",
          hoverAnimation: "TNBcq_UtYAx1mhBY2fZD9",
        };
      },
      31270: (w) => {
        w.exports = {
          ProfileEditRoot: "_1lBbVHO5WRsyO1b79tnWM7",
          ItemPicker: "n1M1oAE4l0f1dxNm_ux2s",
          ItemPickerCtn: "_20EDLy9ziFgZhS3jI4b1FG",
          ItemPickerList: "SMUuC8C6RWRfyx8muAw-S",
          PickerPreviewDialog: "_20HXbZxc7PM5Cr1hOzK2SC",
          PickerPreviewBody: "_2sArlom6cS_SfcD2RzzHW2",
          PickerPreviewItems: "_2N5uyja8fIs2OYuVFmwXLH",
          SaveCancelButtons: "_2KJ8a96V8ilTQR7aQd6wsC",
          ProfileRow: "_302o-E1lWNsjmNpOpQSdDC",
          ProfileCol: "_3tMGe9MfyRH0586o3fy4n5",
          ProfileBox: "uwqwoAlIVWyJ8l71i77-i",
          ProfileBoxTitle: "_2CGYg9che0ONznDOoGhp9Y",
          ProfileBoxContent: "_3s6BBoF1hXm0yeOzoVsAQj",
          ShortLeftCol: "_1tHO9JW5QgfwCm1zzF3wgo",
          HTMLErrorBox: "_2MfLNiVZp5dIGmdFChe4Dg",
          HTMLErrorBoxAppear: "_1QYzncYqyxT6XGGW0-0gTG",
          CooldownNotice: "_2kl3Ad3oDakegWuvxJmSOH",
          ErrorMessage: "_3j9lmAnUKBFcmX-wJ4iTF7",
          DisabledInputCtn: "ZePu4IVRyGY6qjrJ4cgua",
        };
      },
      56420: (w) => {
        w.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      85198: (w) => {
        w.exports = {
          miniProfile: "_2QPdq7GZ_03AD1ioPixVXW",
          miniProfileContent: "_1xTATKELHR-lRS_s3A4yzd",
          miniProfileHeader: "_3CZcHyWskP9Hc5t7AOo75A",
          miniProfilePlayer: "_2jZ0A5VjGTNGTQm03FbLrF",
          playerContent: "_2-pwJCHlrc7zxN4iup2TR7",
          miniProfileBackground: "_3HzZhZyBuR0K4qXaQoHMxI",
          miniProfileBackgroundBlur: "xUosYQXZvivPCxe-KwpvT",
          miniProfileVideoBackground: "_2ZqfbNDeHFU_qaf3X3_Jjv",
          miniProfileVideoBackgroundContainer: "_3MrYvAGQ-g7bNccn6VJNpK",
          miniProfileBackdropBlur: "_1QhpYlQvI1J05uCM2I2e3X",
          miniProfileBlocked: "_39Jef4sV4jnGy6XES6JdVs",
          miniProfileNotFriends: "_3Ea91LEoevcAXAuoA2-uLa",
          notFriends: "_2zgR7xa30ESr7HTdIXFpx_",
          SnoozeContainer: "_1cAsx42HMUFngn5IALUvH0",
          miniProfileHover: "_2AWayy-K0ZoNKv_Fr3CT_R",
          miniprofile_arrow: "_1YsNonjqp5KW66H9OqH1uE",
          left: "_1qS_btEzAb6Qf5ngmgbhmz",
          playerAvatar: "_36eQg-jp1ebbdaE6PBniHu",
          Frame: "_2nPONxDUmK4rQXzK4Y3vG2",
          avatarStatus: "_1YdpXFoH7P9pEEXDMITSHu",
          miniProfileAvatarStatus: "_1k5YkN8kx48i2TZ6kG9muA",
          personaName: "qiP8aEgNz331tt6X4NMNW",
          hasNickname: "_2TAWSrfSd1CiZ9WSYsc69c",
          personaNameLabel: "_2VUw8xyYCaD1WduLCK3nlW",
          nickName: "h_So5GaEfmXOgB9hCC0Is",
          persona: "_3c5GOobmMUyjAWTosaUKUS",
          personaAndIcons: "_1p9kf3ahuMynhiqV1RC7aC",
          awayStatusLabel: "_1FgWIOIaRCAekjhGj0zFWq",
          nickname: "_1SWhpi9ByGQrwHGQgTJCF5",
          playerNicknameBracket: "_3qa8cpVZ8PcsB3PpYNfVgb",
          notInOrWatchingGame: "_1NkB7RuIs66QCtsv4kxeCu",
          miniProfileBottom: "_26ga2HHZL2HlK6wwFImcgX",
          miniProfileGameContainer: "_7-U6jtoeGvesTm7JFGH0-",
          gameLogo: "A0XYrZMFUpzFpMU7qBrhJ",
          ingame: "_24oQzlBma4VdZUDiSBaYFA",
          richPresence: "_39T3EbAEqqKrJl5rX1-qPW",
          gameState: "_3Hxc3f2ZlkYTKbrxVoS9sq",
          watchingbroadcast: "_3hSAG74hI2XkboOz8Vpg5L",
          watchingbroadcastThumbnail: "FmBWyeU1wuwOi6NsbQ4c2",
          gameContent: "_3YwnZTz_58lZ5anORkzDg3",
          miniProfileFeaturedContainer: "_1KDhdcZYSzJ8bcqGIVKlWI",
          favoriteBadgeIcon: "qP4hsoQxxvaLVT3Gkm4J8",
          badgeIcon: "_1oWOaeg_sFX88v15LwM2PO",
          featuredLabels: "_39hariVfr4A85k8c2TC_x1",
          friendPlayerLevelNum: "_3vvwMiUuxFKnz-LwGwe5Do",
          featuredTitle: "_2mCgtDakdGp_qrKcyIcZii",
          mutualFriends: "_3AWk3BnPfsx8KJEGVge4Cr",
          featuredSubTitle: "_3DelZ7HZu1TfU115lLc7vl",
        };
      },
      70342: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
          BackgroundAnimation: "_3EMAF_7GAyPW8G7OSt8s0z",
          "ItemFocusAnim-darkerGrey-nocolor": "_3fWOpZpfDmwOCKEdw8xcqf",
          "ItemFocusAnim-darkerGrey": "_2Tvf1f8cUg1eYlQg027B3W",
          "ItemFocusAnim-darkGreySettings": "_1tKhhjTYPWAz5_eQe91O1A",
          "ItemFocusAnim-darkGrey": "_1l7IyrCH5ez4PBO7R4h8RT",
          "ItemFocusAnim-grey": "_3X7_M9NEYzjKEgQRMQevkQ",
          "ItemFocusAnim-translucent-white-10": "_3YCxpOEfjLuLbB1hut87fZ",
          "ItemFocusAnim-translucent-white-20": "_2kvhksXgWA4vxGz5Oy1tV1",
          "ItemFocusAnimBorder-darkGrey": "_3N1wGZIJ5QySTBWgyBavuM",
          "ItemFocusAnim-green": "Vgab6fHUHvZ-iWKRJwy8h",
          focusAnimation: "GvE_FaPqTf1D0HASx1C_0",
          hoverAnimation: "_88lGefJsUDJUpRFJ3pUq7",
        };
      },
      43047: (w) => {
        w.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      19939: (w) => {
        w.exports = {
          DefaultTheme: "tedMfud89T5ZrUuQ8lAqa",
          CosmicTheme: "_17vHyc7XLi7gzu2oXAzl5a",
          SummerTheme: "_2skFv_DvfYIlpykYdWu7xV",
          MidnightTheme: "M8Pf4xHIhZLaD7sf8J3vu",
          DarkModeTheme: "_2p-_xCU5_sEJ9phLJw-z_3",
          SteelTheme: "xdD8LlOZDqnQ4lJDHdXGW",
          PinkTealTheme: "_3M7clERndkEKPNIhBohVMW",
          MutedRedTheme: "_3lp4RPxbavagP3nVyYOqZR",
          SteamGreenTheme: "_335yQcbM4tv-C34Oxp247l",
          BlueRedTheme: "_2wH82wp5kaa9YD2ljk9RES",
          GoldBurgundyTheme: "YGKfXNHlIS_8t5PbZ990c",
          VibrantBlueTheme: "_3DOwBWizAt9lgmPWTYUHGM",
          GoldenProfileDebutTheme: "_3BHT2anoumk7shbvRYLwFK",
          WinterProfile2020Theme: "_3jPiA59YTBrjF0Yke8xtNc",
          GoldenWeekProfile2021Theme: "_24NEVre-U6vI5Uy2EbOWXo",
          Summer2021Theme: "_2bB_m6htDqAvdWtyyUGztf",
          MutedBlueTheme: "_3-7Wke7qwH61HrZRnXuxmv",
          GoldTheme: "l3sX-a8OUjKBofHsEf91k",
          BurntOrangeTheme: "_37pNJIGOi3wXudkvWXoSml",
          FlatGreyTheme: "_2AFCapxkkQ1VOQHq5zlYQC",
          PurpleTheme: "KM8jQtPy2nL-Nk9L8yGP",
          GreenSlimeTheme: "FdC8cnFr-QlxSBx3MwbCE",
          GhostTheme: "_1JZpez3LJOrJQwH9KGB0RI",
          ColorNightmareTheme: "_2LNsd64hsGzgmRbQ8WSHSh",
          MurugiahTheme: "_22BXC8Rv2JkvXu3mmagICl",
          Winter2021Theme: "X0_g81BFvECaAe-ByasOs",
          Lunar2022Theme: "_1NSMHkt3eWfSDC6LEzKeJn",
          SteamDeckTheme: "_2aDQKbd2fBPJ0D_2CiGhRT",
        };
      },
    },
  ]);
})();
