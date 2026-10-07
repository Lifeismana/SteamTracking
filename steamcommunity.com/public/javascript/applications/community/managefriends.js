/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9129],
    {
      56590: (x, C, r) => {
        "use strict";
        r.r(C), r.d(C, { default: () => m });
        var n = r(7850),
          g = r(1885);
        function m() {
          return (0, n.jsx)(g.Bv, {});
        }
      },
      35413: (x, C, r) => {
        "use strict";
        r.d(C, { d: () => g, t: () => m });
        var n = r(3166);
        const g = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function m(f, _) {
          let p = ".jpg";
          (!f || f === "0000000000000000000000000000000000000000") && (f = g),
            f.length == 44 && ((p = f.substr(-4)), (f = f.substr(0, 40)));
          let o = n.TS.AVATAR_BASE_URL;
          return (
            o ||
              ((o = n.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (o += f.substr(0, 2) + "/")),
            (o += f),
            _ && _ != "small" && (o += "_" + _),
            (o += p),
            o
          );
        }
      },
      1885: (x, C, r) => {
        "use strict";
        r.d(C, { jl: () => F, Bv: () => S });
        var n = r(7850),
          g = r(90626),
          m = r(54963),
          f = r(41735),
          _ = r.n(f),
          p = r(19316),
          o = r(18210),
          w = r(91640),
          i = r.n(w),
          l = r(3166),
          P = r(76559),
          L = r(82734),
          j = r(14947),
          B = r(35413),
          D = r(71742),
          V = r(34592),
          O = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          b = (s, e, t) =>
            e in s
              ? O(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (s[e] = t),
          R = (s, e, t, a) => {
            for (
              var d = a > 1 ? void 0 : a ? U(e, t) : e, u = s.length - 1, h;
              u >= 0;
              u--
            )
              (h = s[u]) && (d = (a ? h(e, t, d) : h(d)) || d);
            return a && d && O(e, t, d), d;
          },
          M = (s, e, t) => b(s, typeof e != "symbol" ? e + "" : e, t);
        class A {
          constructor() {
            M(this, "m_mapProfiles", new Map()),
              M(this, "m_mapProfilesLoading", new Map()),
              (0, j.Gn)(this);
          }
          async LoadProfiles(e, t) {
            (0, D.wT)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let a = e.filter(
              (c) =>
                !this.m_mapProfiles.has(c) && !this.m_mapProfilesLoading.has(c),
            );
            if (a.length == 0) return this.m_mapProfilesLoading.get(e[0]);
            let d = l.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              u = _().get(d, {
                params: { steamids: a.join(",") },
                withCredentials: !0,
                cancelToken: t == null ? void 0 : t.token,
              });
            a.forEach((c) => this.m_mapProfilesLoading.set(c, u));
            let h = await u;
            h.data &&
              h.status == 200 &&
              h.data.forEach((c) => {
                (c.avatar_hash = c.avatar_url),
                  (c.avatar_url_medium = (0, B.t)(c.avatar_url, "medium")),
                  (c.avatar_url_full = (0, B.t)(c.avatar_url, "full")),
                  (c.avatar_url = (0, B.t)(c.avatar_url)),
                  this.m_mapProfiles.set(c.steamid, c),
                  this.m_mapProfilesLoading.delete(c.steamid);
              });
          }
          GetProfile(e) {
            return this.m_mapProfiles.get(e);
          }
          GetProfileByAccountID(e) {
            return this.m_mapProfiles.get(
              P.b.InitFromAccountID(e).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(e) {
            return this.m_mapProfiles.get(e.ConvertTo64BitString());
          }
          BHasProfile(e) {
            return this.m_mapProfiles.has(e);
          }
          BHasProfileByAccountID(e) {
            return this.m_mapProfiles.has(
              P.b.InitFromAccountID(e).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(e) {
            return this.m_mapProfiles.has(e.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(e) {
            return !e.some((t) => !this.BHasProfileBySteamID(t));
          }
          GetProfileURLBySteamID(e) {
            const t = this.GetProfileBySteamID(e);
            return t && t.profile_url
              ? l.TS.COMMUNITY_BASE_URL + "id/" + t.profile_url
              : l.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  e.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(e) {
            const t = this.GetProfileBySteamID(e);
            return t && t.persona_name ? t.persona_name : "";
          }
        }
        R([j.sH], A.prototype, "m_mapProfiles", 2);
        const I = new A();
        function E(s) {
          const e = React.useMemo(
              () => (s ? (typeof s == "string" ? new CSteamID(s) : s) : null),
              [s],
            ),
            [t, a] = useState(!!e && !I.BHasProfileBySteamID(e));
          useEffect(() => {
            const u = axios.CancelToken.source();
            return (
              e &&
                !I.BHasProfileBySteamID(e) &&
                I.LoadProfiles([e.ConvertTo64BitString()])
                  .catch((h) => {
                    const c = GetMsgAndErrorCodeFromResponse(h);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        e.ConvertTo64BitString() +
                        ": " +
                        c.strErrorMsg,
                      c,
                    );
                  })
                  .finally(() => {
                    u.token.reason || a(!1);
                  }),
              () => u.cancel("unmounting useUserProfile")
            );
          }, [s]);
          const d = !!e && I.GetProfileBySteamID(e);
          return [t, d];
        }
        function J(s) {
          const e = React.useMemo(
            () => (s ? CSteamID.InitFromAccountID(s) : null),
            [s],
          );
          return E(e);
        }
        var k = r(72604),
          G = r(36118),
          Y = r(41301),
          T = r(24660),
          N = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          H = (s, e, t) =>
            e in s
              ? N(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (s[e] = t),
          v = (s, e, t, a) => {
            for (
              var d = a > 1 ? void 0 : a ? K(e, t) : e, u = s.length - 1, h;
              u >= 0;
              u--
            )
              (h = s[u]) && (d = (a ? h(e, t, d) : h(d)) || d);
            return a && d && N(e, t, d), d;
          },
          y = (s, e, t) => H(s, typeof e != "symbol" ? e + "" : e, t);
        class S extends g.Component {
          constructor() {
            super(...arguments),
              y(this, "state", {
                invite_token: "",
                input_search: "",
                friend_code_copied: !1,
                invite_copied: !1,
              });
          }
          async componentDidMount() {
            const e = await _().get(
              l.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: (0, l.KC)() } },
            );
            if (e && e.data && e.data.tokens) {
              const t = e.data.tokens.filter((a) => a.valid);
              t.length
                ? this.setState({ invite_token: t[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const e = new FormData();
            e.append("sessionid", (0, l.KC)()),
              e.append("steamid_user", l.iA.steamid),
              e.append("duration", (720 * 60 * 60).toString());
            const t = await _().post(
              l.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              e,
            );
            t &&
              t.data &&
              t.data.invite &&
              this.setState({ invite_token: t.data.invite.invite_token });
          }
          OnCopy(e, t) {
            e === "friend_code" &&
              (this.setState({ friend_code_copied: !0 }),
              setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
              e === "invite" &&
                (this.setState({ invite_copied: !0 }),
                setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
              (0, L.OG)(t);
          }
          async OnAddFriend(e) {
            const t = new FormData();
            t.append("sessionID", (0, l.KC)()),
              t.append("steamid", e),
              t.append("accept_invite", "0");
            try {
              const a = await _().post(
                l.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                t,
              );
              return a && a.data && a.data.success == k.R;
            } catch {
              return !1;
            }
          }
          OnSearchChange(e) {
            this.setState({ input_search: e.target.value });
          }
          OnSearchKeyDown(e) {
            e.keyCode === Y.wd && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              l.TS.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const e = l.iA.short_url + "/" + this.state.invite_token;
            return (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", {
                  className: i().HeaderBlock,
                  children: (0, o.we)("#ManageFriends_AddAFriend"),
                }),
                (0, n.jsxs)("div", {
                  className: i().Background,
                  children: [
                    (0, n.jsx)("h1", {
                      className: i().Heading,
                      children: (0, o.we)("#ManageFriends_YourFriendCode"),
                    }),
                    (0, n.jsxs)("div", {
                      className: i().CopyContainer,
                      children: [
                        (0, n.jsx)("h1", {
                          className: i().Text,
                          children: l.iA.accountid,
                        }),
                        (0, n.jsx)(p.jn, {
                          autoFocus: !0,
                          className: i().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(l.iA.accountid)),
                          children: this.state.friend_code_copied
                            ? (0, o.we)("#ManageFriends_Copied")
                            : (0, o.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className: i().Body,
                      children: (0, o.we)("#ManageFriends_EnterFriendCode"),
                    }),
                    (0, n.jsx)(F, {
                      onButtonClick: this.OnAddFriend,
                      buttonText: (0, o.we)("#ManageFriends_SendInvite"),
                      bDisableForSelf: !0,
                      bDisableForFriends: !0,
                      bShowStatus: !0,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: i().DimBackground,
                  children: [
                    (0, n.jsx)("h1", {
                      className: i().Heading,
                      children: (0, o.we)("#ManageFriends_OrSendQuickInvite"),
                    }),
                    (0, n.jsx)("p", {
                      className: i().Body,
                      children: (0, o.we)(
                        "#ManageFriends_QuickInviteDescription",
                      ),
                    }),
                    (0, n.jsx)("p", {
                      className: i().Body,
                      children: (0, o.we)("#ManageFriends_QuickInviteNote"),
                    }),
                    (0, n.jsxs)("div", {
                      className: i().CopyContainer,
                      children: [
                        !!this.state.invite_token &&
                          (0, n.jsx)("div", {
                            className: i().Link,
                            children: e,
                          }),
                        (0, n.jsx)(p.jn, {
                          className: i().Button,
                          onClick: () => this.OnCopy("invite", e),
                          children: this.state.invite_copied
                            ? (0, o.we)("#ManageFriends_Copied")
                            : (0, o.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, n.jsx)(p.$n, {
                      className: i().GenerateLinkButton,
                      onClick: this.OnCreateInviteLink,
                      children: (0, o.we)("#ManageFriends_CreateInviteLink"),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: i().Background,
                  children: [
                    (0, n.jsx)("h1", {
                      className: i().Heading,
                      children: (0, o.we)("#ManageFriends_OrSearch"),
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "598px",
                        position: "relative",
                      },
                      children: [
                        (0, n.jsx)("div", {
                          style: { width: "100%" },
                          children: (0, n.jsx)(p.pd, {
                            className: i().Input,
                            onKeyDown: this.OnSearchKeyDown,
                            value: this.state.input_search,
                            onChange: this.OnSearchChange,
                            placeholder: (0, o.we)(
                              "#ManageFriends_EnterProfileName",
                            ),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          id: "searchIcon",
                          style: {
                            position: "absolute",
                            right: "10px",
                            cursor: "pointer",
                          },
                          onClick: this.OnSearchSubmit,
                          children: (0, n.jsx)(G.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        v([m.oI], S.prototype, "OnCreateInviteLink", 1),
          v([m.oI], S.prototype, "OnCopy", 1),
          v([m.oI], S.prototype, "OnAddFriend", 1),
          v([m.oI], S.prototype, "OnSearchChange", 1),
          v([m.oI], S.prototype, "OnSearchKeyDown", 1),
          v([m.oI], S.prototype, "OnSearchSubmit", 1);
        class F extends g.Component {
          constructor() {
            super(...arguments),
              y(this, "state", {
                input_friend_code: "",
                disable_send_invite: !1,
                searchResult: null,
                invite_status: "pending",
              }),
              y(this, "m_currentRequest", 0);
          }
          async OnFriendCodeChange(e) {
            const t = e.target.value.split(",")[0];
            this.setState({ input_friend_code: t, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(t),
                500,
              ));
          }
          async LoadProfile(e) {
            if (e) {
              const t = P.b.InitFromAccountID(Number(e));
              await I.LoadProfiles([t.ConvertTo64BitString()]);
              const a = I.GetProfile(t.ConvertTo64BitString());
              a
                ? this.setState({
                    searchResult: a,
                    disable_send_invite:
                      l.iA.is_limited ||
                      (this.props.bDisableForFriends && a.is_friend) ||
                      (this.props.bDisableForSelf &&
                        a.steamid === l.iA.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          }
          async OnActionClick(e) {
            const t = new FormData();
            t.append("sessionID", (0, l.KC)()),
              t.append("steamid", e),
              t.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 }),
              (await this.props.onButtonClick(e))
                ? (this.setState({
                    input_friend_code: "",
                    invite_status: "success",
                  }),
                  setTimeout(() => this.setState({ searchResult: null }), 3e3))
                : this.setState({
                    invite_status: "failure",
                    disable_send_invite: !1,
                  });
          }
          render() {
            return (0, n.jsxs)("div", {
              className: i().FriendCodeSelector,
              children: [
                (0, n.jsx)(p.pd, {
                  className: i().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, o.we)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, n.jsx)(W, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, n.jsx)(p.jn, {
                    className: i().SendInviteButton,
                    onClick: () =>
                      this.OnActionClick(this.state.searchResult.steamid),
                    disabled: this.state.disable_send_invite,
                    children: this.props.buttonText,
                  }),
                }),
              ],
            });
          }
        }
        v([m.oI], F.prototype, "OnFriendCodeChange", 1),
          v([m.oI], F.prototype, "LoadProfile", 1),
          v([m.oI], F.prototype, "OnActionClick", 1);
        const W = (s) => {
          const {
              searchResult: e,
              invite_status: t,
              bShowStatus: a,
              children: d,
            } = s,
            u = (0, l.Qn)();
          return e
            ? (0, n.jsxs)("div", {
                className: i().ProfileCard,
                children: [
                  (0, n.jsxs)("div", {
                    className: i().UserContainer,
                    children: [
                      (0, n.jsx)("div", {
                        className: i().Image,
                        children: (0, n.jsx)("img", {
                          style: { width: "100%", height: "100%" },
                          src: e.avatar_url_full,
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: i().ProfileContent,
                        children: [
                          (0, n.jsx)("h1", {
                            className: i().Heading,
                            children: e.persona_name,
                          }),
                          (0, n.jsxs)("div", {
                            className: i().ProfileLink,
                            children: [
                              (0, n.jsx)(T.Ii, {
                                target: u ? void 0 : "_blank",
                                href:
                                  l.TS.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  e.steamid,
                                children: (0, o.we)(
                                  "#ManageFriends_ProfileLink",
                                ),
                              }),
                              (0, n.jsx)("br", {}),
                              (0, n.jsxs)("span", {
                                className: i().Body,
                                children: [
                                  e.real_name,
                                  (0, n.jsx)("br", {}),
                                  `${e.city}${e.city ? "," : ""} ${e.state}${e.state ? "," : ""} ${e.country}`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      d,
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: i().ProfileLink,
                    children: [
                      e.is_friend &&
                        (0, n.jsx)("div", {
                          children: (0, o.we)("#ManageFriends_IsFriend"),
                        }),
                      e.friends_in_common != 0 &&
                        (0, n.jsx)("div", {
                          children: (0, n.jsx)(T.Ii, {
                            target: u ? void 0 : "_blank",
                            href:
                              l.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              e.steamid +
                              "/friendscommon",
                            children:
                              e.friends_in_common === 1
                                ? (0, o.we)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    e.friends_in_common,
                                  )
                                : (0, o.we)(
                                    "#ManageFriends_FriendsInCommon",
                                    e.friends_in_common,
                                  ),
                          }),
                        }),
                      a &&
                        t === "failure" &&
                        (0, n.jsx)("div", {
                          className: i().Failure,
                          children: (0, o.we)("#ManageFriends_InviteFailure"),
                        }),
                      a &&
                        t === "success" &&
                        (0, n.jsx)("div", {
                          className: i().Success,
                          children: (0, o.we)(
                            "#ManageFriends_InviteSuccess",
                            e.persona_name,
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
      },
      91640: (x) => {
        x.exports = {
          "duration-app-launch": "800ms",
          Heading: "_3kTQIYYiQiVR_DeJepkOwJ",
          Body: "_2s393FLIe2l5quVJHoS53K",
          HeaderBlock: "X9bYNT3rKpg6L1Cgq45pG",
          Background: "_1xwi06sEKXpwIpZcgHle_h",
          DimBackground: "_2N55HNCo3jLIzL6RNNlRUo",
          Input: "_1BUtyMrOPfXVpnfK-Z5OnA",
          CopyContainer: "_1HjkZ3ooQw-4TV518YPtvp",
          Text: "_1ehqRyqgPLFNoFwFifHPPR",
          Link: "_18Sc08YQfmAIVx8H1h8A1V",
          Button: "_2772E6skxrFIemLRdp0EKv",
          GenerateLinkButton: "T52tUwptWdakIKgaAVn3i",
          ProfileCard: "_28a_CNvDls7VgWoPW2-9Kz",
          UserContainer: "_29w-2Eb_kk-viSqGW8RTn2",
          Image: "_1n4lDOfOQzOhvshIPt1UWT",
          ProfileContent: "_1qz9xLw5YttjO8gVfuMwS",
          ProfileLink: "_1tEt0fYckNbFAqGLEfrsfj",
          Failure: "UoMCo-OvninFBFozRomeh",
          Success: "zNkywkFbUJio86FBwBWwx",
          FriendCodeSelector: "_3nmSpgo_T_V0-Er7h8J2Ar",
          SendInviteButton: "kcAlkPA1uhcWs_5eatvVd",
          BackgroundAnimation: "_3yBb7Zq-JsZsUC7j0xfwNs",
          "ItemFocusAnim-darkerGrey-nocolor": "_3mEJMPBWqIai6TZ5Asmwzc",
          "ItemFocusAnim-darkerGrey": "_1bq8dQKi1_Y3Cx4SqKPEbe",
          "ItemFocusAnim-darkGreySettings": "_3HZYqGe5_hsFFJcgBTMMSW",
          "ItemFocusAnim-darkGrey": "qqYMXWoOu5it3a3atTegO",
          "ItemFocusAnim-grey": "ULAazkgE1qcpwKYFDQ6cA",
          "ItemFocusAnim-translucent-white-10": "_2_8edxNWb8zuaY6iv3wJSx",
          "ItemFocusAnim-translucent-white-20": "_1TV5evTLXXGDV16o8ltkb7",
          "ItemFocusAnimBorder-darkGrey": "_2N1KfmpWvdxv64J5Rs82CX",
          "ItemFocusAnim-green": "_3UU3hyYWsBPGsxljxX3hbB",
          focusAnimation: "_2u4UlTYeTMTUGVGicBx0My",
          hoverAnimation: "_16_WHz1Oh5Jy0J3qvG4rto",
        };
      },
    },
  ]);
})();
