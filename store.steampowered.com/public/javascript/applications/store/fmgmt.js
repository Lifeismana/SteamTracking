/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [67072],
    {
      91354: (W, de, u) => {
        "use strict";
        u.d(de, { c: () => re });
        var e = u(7850),
          g = u(64238),
          y = u.n(g),
          O = u(16412),
          X = u(36118),
          j = u(89206),
          B = u.n(j);
        function re(T) {
          const { bExpanded: G, setExpanded: r } = T;
          return (0, e.jsx)(O.wl, {
            className: y()(j.ExpandRowButton, G && j.Selected),
            onClick: () => r(!G),
            children: (0, e.jsx)(X.b8_, { direction: "down" }),
          });
        }
      },
      58679: (W, de, u) => {
        "use strict";
        u.d(de, { ff: () => b, iM: () => ge, iV: () => ee, pC: () => le });
        var e = u(7850),
          g = u(90626),
          y = u(20803),
          O = u.n(y),
          X = u(36118),
          j = u(18210),
          B = u(2289),
          re = u(36707),
          T = u(46943),
          G = u(76559),
          r = u(4874),
          U = u(35098),
          x = u(42993),
          me = u(58612),
          ne = u(93125),
          ae = u(9852),
          L = u(53107),
          k = u(98609),
          J = u(99412);
        function C(R) {
          return (0, e.jsx)(X.d1w, {});
        }
        function K(R) {
          return (0, e.jsx)(X.Bir, {});
        }
        function ge(R) {
          return (0, e.jsx)("div", {
            className: (0, re.A)(y.RoleIcon, R.className),
            children: R.role == B.PQ.sf ? (0, e.jsx)(K, {}) : (0, e.jsx)(C, {}),
          });
        }
        function ee(R) {
          const { steamid: A } = R,
            D = (0, U.js)(A),
            v = (0, me.M8)(),
            M = (0, ae.T)(),
            E = v.data?.get(new G.b(A).GetAccountID()),
            V = M.data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              D.data?.m_strPlayerName || "\xA0",
              " ",
              V &&
                E &&
                (0, e.jsxs)("span", {
                  className: y.playerNickname,
                  children: ["(", E, ")"],
                }),
            ],
          });
        }
        function pe(R) {
          const { role: A, persona: D, isSelf: v } = R;
          let M = R.size || "Large";
          const E = (0, me.M8)(),
            V = (0, ae.T)(),
            z = E.data?.get(D.GetAccountID()),
            ye = V.data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: y.ProfileLink,
                children: [
                  (0, e.jsx)(T.i8, {
                    className: y.Avatar,
                    persona: D,
                    size: M,
                    statusPosition: "right",
                  }),
                  (0, e.jsx)(ne.D, {
                    className: y.PlayerName,
                    bIsSelf: v,
                    bHideStatus: !1,
                    bHidePersona: !1,
                    bParenthesizeNicknames: ye,
                    bCompactView: !1,
                    persona: D,
                    strNickname: z,
                    eFriendRelationship: J._UC,
                    bEllipsisName: !0,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: y.RoleAndIcon,
                children: [
                  (0, e.jsx)(ge, { className: y.ProfileRoleIcon, role: A }),
                  (0, e.jsx)("div", {
                    className: y.RoleName,
                    children: (0, j.we)(`#FamilyManagement_Role_${A}`),
                  }),
                ],
              }),
            ],
          });
        }
        function le(R) {
          const A = (0, g.useContext)(r.IN);
          return A.errorMessage
            ? (0, e.jsx)("div", {
                className: y.FamilyErrorDisplay,
                children: A.errorMessage,
              })
            : null;
        }
        function b(R) {
          const { persona: A, role: D, invitePending: v } = R,
            E = (0, x.LH)() == A.GetSteamIDAsString();
          return (0, e.jsxs)("div", {
            className: y.FamilyMemberStatus,
            children: [
              (0, e.jsx)(pe, { role: D, persona: A, isSelf: E }),
              v &&
                (0, e.jsx)("div", {
                  className: y.InvitePending,
                  children: (0, j.we)("#FamilyManagement_InvitePending"),
                }),
              E &&
                (0, e.jsx)("span", {
                  className: y.MeBadge,
                  children: (0, j.we)("#FamilyManagement_Me"),
                }),
            ],
          });
        }
        function Q(R) {
          const { steamID: A, role: D } = R,
            v = usePlayerSummary(A);
          useQuerySetMessageOnErrorEffect(
            v,
            "#FamilyManagement_ErrorLoadFamilyGeneric",
          );
          const M = useCallback(
            (E) => {
              let V = `${Config.COMMUNITY_BASE_URL}profiles/${A}`;
              OpenLinkInNewWindow(E, V);
            },
            [A],
          );
          return v.isSuccess
            ? jsx(Panel, {
                className: classnames(styles.FamilyMemberRow, styles.InfoRow),
                onActivate: M,
                children: jsx(b, { persona: v.data, role: D }),
              })
            : null;
        }
      },
      93125: (W, de, u) => {
        "use strict";
        u.d(de, { A: () => R, D: () => Q });
        var e = u(7850),
          g = u(90626),
          y = u(75844),
          O = u(18210),
          X = u(99412),
          j = u(5858),
          B = u(36707),
          re = u(56420),
          T = u.n(re),
          G = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          U = (A, D, v, M) => {
            for (
              var E = M > 1 ? void 0 : M ? r(D, v) : D, V = A.length - 1, z;
              V >= 0;
              V--
            )
              (z = A[V]) && (E = (M ? z(D, v, E) : z(E)) || E);
            return M && E && G(D, v, E), E;
          };
        let x = class extends g.Component {
          static get hoverClass() {
            return T().hoverParent;
          }
          render() {
            const {
              persona: A,
              animating: D,
              className: v,
              size: M,
              dim: E,
              ...V
            } = this.props;
            let z = "";
            return (
              M == "medium"
                ? (z = T().Medium)
                : M == "large" && (z = T().Large),
              (0, e.jsxs)("div", {
                className: (0, B.A)(
                  T().SnoozeContainer,
                  A.online_state,
                  v,
                  D && T().animating,
                  z,
                  E && T().Dim,
                ),
                ...V,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, B.A)(T().SnoozeZ, T().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, B.A)(T().SnoozeZ, T().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, B.A)(T().SnoozeZ, T().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        x = U([y.PA], x);
        var me = u(88363),
          ne = u(36118),
          ae = u(70342),
          L = u.n(ae),
          k = u(75975);
        const J = (0, y.PA)((A) => {
          const { persona: D, className: v, ...M } = A;
          if (!D || !D.is_online) return null;
          const E = D.HasStateFlag(me.R$),
            V = D.HasStateFlag(me.hs),
            z = D.m_eGamingDeviceType == X.LS$,
            ye = D.m_eGamingDeviceType == X.ppM,
            he = !z && !ye && !V && D.HasStateFlag(me.sr);
          return (0, e.jsxs)(g.Fragment, {
            children: [
              E &&
                (0, e.jsx)("div", {
                  className: (0, B.A)(
                    v,
                    L().PersonaStatusIcon,
                    L().MobilePhoneIcon,
                    (0, j.rO)(D),
                  ),
                  title: (0, O.we)("#Platform_Hint_Mobile"),
                  ...M,
                  children: (0, e.jsx)(k.rf, {}),
                }),
              V &&
                (0, e.jsx)("div", {
                  className: (0, B.A)(
                    v,
                    L().PersonaStatusIcon,
                    L().VRIcon,
                    (0, j.rO)(D),
                  ),
                  title: (0, O.we)("#Platform_Hint_VR"),
                  ...M,
                  children: (0, e.jsx)(ne.MUh, {}),
                }),
              he &&
                (0, e.jsx)("div", {
                  className: (0, B.A)(
                    v,
                    L().PersonaStatusIcon,
                    L().BigPictureIcon,
                    (0, j.rO)(D),
                  ),
                  title: (0, O.we)("#Platform_Hint_BigPicture"),
                  ...M,
                  children: (0, e.jsx)(ne.bPr, {}),
                }),
              z &&
                (0, e.jsx)("div", {
                  className: (0, B.A)(
                    v,
                    L().PersonaStatusIcon,
                    L().SteamDeckIcon,
                    (0, j.rO)(D),
                  ),
                  title: (0, O.we)("#Platform_Hint_SteamDeck"),
                  ...M,
                  children: (0, e.jsx)(ne.DQe, {}),
                }),
              ye &&
                (0, e.jsx)("div", {
                  className: (0, B.A)(
                    v,
                    L().PersonaStatusIcon,
                    L().SteamDeckIcon,
                    (0, j.rO)(D),
                  ),
                  title: (0, O.we)("#Platform_Hint_LegionGoS"),
                  ...M,
                  children: (0, e.jsx)(ne.DQe, {}),
                }),
            ],
          });
        });
        var C = u(18828),
          K = u.n(C),
          ge = u(3166),
          ee = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          le = (A, D, v, M) => {
            for (
              var E = M > 1 ? void 0 : M ? pe(D, v) : D, V = A.length - 1, z;
              V >= 0;
              V--
            )
              (z = A[V]) && (E = (M ? z(D, v, E) : z(E)) || E);
            return M && E && ee(D, v, E), E;
          };
        function b(A) {
          return (0, e.jsxs)(g.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: K().partyBeaconJoin,
                children: (0, O.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              A.persona.GetCurrentGameName(),
            ],
          });
        }
        let Q = class extends g.Component {
          render() {
            const {
              className: A,
              onContextMenu: D,
              persona: v,
              eFriendRelationship: M,
              bIsSelf: E,
              bParenthesizeNicknames: V,
              strNickname: z,
              bCompactView: ye,
              bHideGameName: he,
              bHideEnhancedRichPresenceLabel: xe,
              bHideSnooze: Se,
              bHideStatus: Ie,
              renderStatus: Ee,
              renderRichPresence: We,
              bHidePersona: we,
              bDNDSet: Ue,
              bHasPartyBeacon: Ae,
              bHasGamePrivacy: Ke,
              bNoMask: Ve,
              bEllipsisName: Ze,
              bDropPadding: Te,
              ...be
            } = this.props;
            let Ge = null,
              _e = null,
              je = null,
              De = [
                A,
                K().personaNameAndStatusLabel,
                (0, j.rO)(v),
                ye ? K().compactView : void 0,
                Ve ? K().NoMask : void 0,
              ];
            Ae || v.has_public_party_beacon
              ? (_e = (0, e.jsx)(b, { persona: v }))
              : (0, X.aPS)(M)
                ? ((_e = (0, O.we)("#PersonaStateBlocked")),
                  De.push(K().blocked))
                : v.is_ingame
                  ? (!v.is_in_nonsteam_game || E || (0, X.S$u)(M)
                      ? (_e = v.GetCurrentGameName())
                      : (_e = (0, O.we)("#PersonaStateInNonSteamGame")),
                    !E && !we
                      ? (je = v.GetCurrentGameRichPresence())
                      : E &&
                        v.is_awayOrSnooze &&
                        (je = (0, O.we)("#PersonaStateAway")))
                  : v.m_broadcastAccountId &&
                    (_e = (0, O.we)("#PersonaStateWatchingBroadcast")),
              _e || (_e = v.GetLocalizedOnlineStatus()),
              Ee && (_e = Ee());
            let Oe = !we && !Se;
            Se === !1 && (Oe = !0),
              v.is_awayOrSnooze && Oe && (Ge = (0, e.jsx)(x, { persona: v }));
            let Le = (0, e.jsx)(e.Fragment, {});
            D
              ? (Le = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: D,
                  children: (0, e.jsx)(ne.GB9, {}),
                }))
              : De.push(K().noContextMenu),
              we && De.push(K().hidePersona),
              We && (je = We()),
              (he || !je) && De.push(K().twoLine);
            const Be = !v.is_ingame && !Ie,
              ke = !xe && je,
              ze = _e && (!he || !ke),
              ct = (0, X.IDH)(ge.TS.LAUNCHER_TYPE);
            let tt = z && !V,
              mt = tt ? z : v.m_strPlayerName,
              nt = !we && (ze || Be) && ke;
            return (0, e.jsxs)("div", {
              ...be,
              className: (0, B.A)(...De),
              onContextMenu: D,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, B.A)(
                    K().statusAndName,
                    nt ? K().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, B.A)(
                        K().playerName,
                        Ze ? K().EllipsisName : void 0,
                      ),
                      children: [
                        mt || "\xA0",
                        V &&
                          z &&
                          (0, e.jsxs)("span", {
                            className: K().playerNickname,
                            children: ["(", z, ")"],
                          }),
                      ],
                    }),
                    Ue &&
                      (0, e.jsx)("div", {
                        className: K().DNDContainer,
                        title: (0, O.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(ne.Aj0, {}),
                      }),
                    tt &&
                      (0, e.jsx)("span", {
                        className: K().playerNicknameBracket,
                        title: (0, O.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(J, { persona: v }),
                    Ge,
                    (v.m_bPlayerNamePending || v.m_bAvatarPending) &&
                      ct &&
                      (0, e.jsx)("div", {
                        className: K().PendingPersona,
                        title: (0, O.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(ne.zD7, {}),
                      }),
                    Le,
                  ],
                }),
                !we &&
                  (0, e.jsxs)("div", {
                    className: K().richPresenceContainer,
                    children: [
                      (ze || Be) &&
                        (0, e.jsxs)("div", {
                          className: (0, B.A)(
                            K().gameName,
                            nt ? K().threeLines : void 0,
                            K().richPresenceLabel,
                            Te && K().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            Ke &&
                              (0, e.jsx)("div", {
                                className: K().gameIsPrivateIcon,
                                title: (0, O.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(ne.jZl, {}),
                              }),
                            _e,
                          ],
                        }),
                      ke &&
                        (0, e.jsxs)("div", {
                          className: (0, B.A)(
                            K().richPresenceLabel,
                            Te && K().dropPadding,
                            "no-drag",
                          ),
                          children: [je, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        Q = le([y.PA], Q);
        const R = (0, y.PA)((A) => {
          const {
            persona: D,
            bParenthesizeNicknames: v,
            strNickname: M,
            bIgnorePersonaStatus: E,
            bDisableColoring: V,
            className: z,
            ...ye
          } = A;
          let xe = M && !v ? M : D.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...ye,
            className: (0, B.A)(
              z,
              V && K().DisableColoring,
              !E && (0, j.rO)(D),
            ),
            children: (0, e.jsxs)("span", {
              className: K().playerName,
              children: [
                xe || "\xA0",
                v &&
                  M &&
                  (0, e.jsxs)("span", {
                    className: K().playerNickname,
                    children: ["(", M, ")"],
                  }),
              ],
            }),
          });
        });
      },
      54407: (W, de, u) => {
        "use strict";
        u.d(de, { B3: () => K, KM: () => ae, KT: () => C });
        var e = u(41735),
          g = u.n(e),
          y = u(58632),
          O = u.n(y),
          X = u(90626),
          j = u(80902),
          B = u(75233),
          re = u(72604),
          T = u(76559),
          G = u(34592),
          r = u(3166),
          U = u(35038),
          x = u(27386),
          me = u(68312);
        const ne = "nicknames";
        function ae(ee) {
          const pe = (0, me.KV)(),
            { data: le, isLoading: b } = (0, j.I)({
              queryKey: [ne],
              queryFn: async () => {
                const Q = new Map();
                if (r.iA.logged_in) {
                  const R = U.w.Init(x.w_T),
                    D = (await x.xtC.GetNicknameList(pe, R)).Body().toObject();
                  D?.nicknames &&
                    D.nicknames.length > 0 &&
                    D.nicknames.forEach((v) => {
                      Q.set(v.accountid, v.nickname);
                    });
                }
                return Q;
              },
            });
          return le ? le.get(ee) : null;
        }
        async function L(ee) {
          if (!ee || ee.length == 0) return [];
          const pe =
            (0, r.yK)() == "community"
              ? r.TS.COMMUNITY_BASE_URL
              : r.TS.STORE_BASE_URL;
          if (ee.length == 1) {
            const le = { accountid: ee[0], origin: self.origin },
              b = await g().get(`${pe}actions/ajaxgetavatarpersona`, {
                params: le,
              });
            if (
              !b ||
              b.status != 200 ||
              b.data?.success != re.R ||
              !b.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, G.H))(b).strErrorMsg}`;
            return [b.data.userinfo];
          } else {
            const le = { accountids: ee.join(","), origin: self.origin },
              b = await g().get(`${pe}actions/ajaxgetmultiavatarpersona`, {
                params: le,
              });
            if (
              !b ||
              b.status != 200 ||
              b.data?.success != re.R ||
              !b.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, G.H))(b).strErrorMsg}`;
            const Q = new Map();
            return (
              b.data.userinfos.forEach((R) =>
                Q.set(new T.b(R.steamid).GetAccountID(), R),
              ),
              ee.map((R) => Q.get(R))
            );
          }
        }
        const k = new (O())((ee) => L(ee), { cache: !1 }),
          J = "avatarandpersonas";
        function C(ee) {
          const { data: pe, isLoading: le } = (0, j.I)({
            queryKey: [J, ee],
            queryFn: () => k.load(ee),
          });
          return [pe, le];
        }
        function K(ee) {
          const pe = (0, B.jE)(),
            { data: le, isLoading: b } = (0, j.I)({
              queryKey: [J, ee],
              queryFn: async () => {
                const R = await k.loadMany(ee);
                return (
                  R.forEach((A) => {
                    const D = [J, new T.b(A.steamid).GetAccountID()];
                    pe.setQueryData(D, A);
                  }),
                  R
                );
              },
              enabled: ee?.length > 0,
            }),
            Q = (0, X.useMemo)(() => {
              const R = new Array();
              return (
                le?.forEach((A) => {
                  A instanceof Error || R.push(A);
                }),
                R
              );
            }, [le]);
          return b ? null : Q;
        }
        function ge(ee) {
          return ReactQueryClient.getQueryData([J, ee]);
        }
      },
      9852: (W, de, u) => {
        "use strict";
        u.d(de, { T: () => B });
        var e = u(72604),
          g = u(35038),
          y = u(27386),
          O = u(80902),
          X = u(68312);
        function j(re) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const T = g.w.Init(y.tzK),
                G = await y.xtC.GetCommunityPreferences(re, T);
              if (G.GetEResult() != e.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${G.GetEResult()} ${G.GetErrorMessage()}`,
                );
              return G.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function B() {
          const re = (0, X.KV)();
          return (0, O.I)(j(re));
        }
      },
      27126: (W, de, u) => {
        "use strict";
        u.d(de, { h: () => y });
        var e = u(90626);
        const g = {};
        function y(O) {
          const [X, j] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              let B = !0;
              g[O]
                ? g[O].refCount++
                : (g[O] = { list: window.matchMedia(O), refCount: 1 });
              const re = g[O].list,
                T = () => {
                  B && j(re.matches);
                };
              return (
                T(),
                re.addEventListener("change", T),
                () => {
                  (B = !1),
                    re.removeEventListener("change", T),
                    g[O].refCount--,
                    g[O].refCount === 0 && delete g[O];
                }
              );
            }, [O]),
            X
          );
        }
      },
      80052: (W, de, u) => {
        "use strict";
        u.r(de),
          u.d(de, {
            FamilyTabContainer: () => un,
            GenerateNameElementForHistory: () => dn,
            default: () => _s,
          });
        var e = u(7850),
          g = u(2289),
          y = u(90626),
          O = u(42993),
          X = u(24660),
          j = u(16412),
          B = u(36118),
          re = u(21418),
          T = u(85599),
          G = u(36707),
          r = u(18210),
          U = u(70322),
          x = u(4874),
          me = u(58679),
          ne = u(46943),
          ae = u(35098),
          L = u(92757),
          k = u(96538),
          J = u(3166),
          C = u(19298);
        function K(s, t) {
          return new URLSearchParams(s.search).get(t);
        }
        const ge = "invitation",
          ee = "nonce";
        function pe(s) {
          const { cooldownSecondsRemaining: t } = s,
            n = {
              month: "long",
              day: "numeric",
              year: "numeric",
              weekday: void 0,
            };
          return (0, e.jsx)("div", {
            className: U.DialogText,
            children: (0, r.we)(
              "#FamilyManagement_CooldownAllowed",
              (0, r.TW)(Date.now() / 1e3 + t, n),
            ),
          });
        }
        function le(s) {
          const {
              inviterSteamID: t,
              familyGroupID: n,
              role: a,
              inviteID: i,
            } = s,
            o = (0, O.LH)(),
            l = (0, x.Bc)(n),
            c = (0, x.v2)(n, o),
            p = (0, ae.js)(t),
            d = (0, x.fO)(n, i),
            [m, h] = (0, y.useState)(!1),
            [_, f] = (0, y.useState)(!1),
            [I, S] = (0, y.useState)(""),
            { setErrorMessage: P } = (0, x.RC)();
          (0, x.p8)(p, "#FamilyManagement_ErrorLoadFamilyInviteGeneric");
          const w = (0, L.W6)(),
            Y = (0, L.zy)(),
            ue = !!K(Y, ge);
          (0, x.gv)(
            l,
            "#FamilyManagement_ErrorAcceptInvite",
            x.eS.k_EFamilyQueryJoinFamily,
          ),
            (0, x.gv)(
              c,
              "#FamilyManagement_ErrorDeclineInvite",
              x.eS.k_EFamilyQueryDeclineInvite,
            );
          const ie = (0, x.vo)();
          if (
            (ie.isSuccess &&
              !ie.data.is_not_member_of_any_group() &&
              w.push("/account/familymanagement"),
            p.isError)
          )
            return null;
          if (p.isLoading)
            return (0, e.jsx)("div", {
              className: U.ThrobberContainer,
              children: (0, e.jsx)(T.t, {}),
            });
          const ce = () => {
              P(null),
                l.mutate(null, {
                  onSuccess: (Pe) => {
                    Pe.cooldown_skip_granted() && f(!0),
                      Pe.two_factor_method() === g.GC.SC
                        ? J.TS.IN_MOBILE_WEBVIEW
                          ? (window.location.href =
                              "steammobile://confirmations?first_of_type=11")
                          : h("awaitmobile2fa")
                        : Pe.two_factor_method() === g.GC.Mk
                          ? h("awaitemail2fa")
                          : w.push("/account/familymanagement");
                  },
                });
            },
            Ce = () => {
              P(null), c.mutate(), ue && w.push("/account/familymanagement");
            },
            ve = p.data,
            fe = () => h(!1),
            Fe = () => w.push("/account/familymanagement"),
            He = (Pe) =>
              Pe
                ? J.TS.IN_MOBILE_WEBVIEW
                  ? "#FamilyManagement_Await2FAForJoin_Description_Mobile_MobileApp"
                  : "#FamilyManagement_Await2FAForJoin_Description_Mobile"
                : "#FamilyManagement_Await2FAForJoin_Description_Email",
            jt = async () => {
              d.mutateAsync(I).then(Fe);
            };
          return (0, e.jsxs)("div", {
            className: U.IncomingInviteRow,
            children: [
              (0, e.jsxs)(k.EN, {
                active: !!m,
                children: [
                  m === "explanation" &&
                    (0, e.jsxs)(k.eV, {
                      title: (0, r.we)(
                        `#FamilyManagement_RoleDescriptionLongHeader_${a}`,
                      ),
                      closeModal: fe,
                      children: [
                        a === g.PQ.s ? (0, e.jsx)(b, {}) : (0, e.jsx)(Q, {}),
                        (0, e.jsx)(j.$n, {
                          onClick: fe,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                  m === "confirm" &&
                    (0, e.jsx)(k.o0, {
                      closeModal: fe,
                      onCancel: fe,
                      onOK: ce,
                      strTitle: (0, r.we)(
                        "#FamilyManagement_ConfirmJoinDialog",
                      ),
                      children: (0, r.oW)(
                        `#FamilyManagement_ConfirmJoin_${a}`,
                        (0, e.jsx)("b", {}),
                      ),
                    }),
                  m === "awaitmobile2fa" &&
                    (0, e.jsxs)(k.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_Await2FAForJoin_Header",
                      ),
                      closeModal: Fe,
                      children: [
                        (0, e.jsx)("div", {
                          className: U.DialogText,
                          children: (0, r.we)(He(m === "awaitmobile2fa")),
                        }),
                        _ &&
                          (0, e.jsx)(pe, {
                            cooldownSecondsRemaining:
                              ie.data.cooldown_seconds_remaining(),
                          }),
                        _ &&
                          (0, e.jsx)("div", {
                            className: U.DialogText,
                            children: (0, r.we)(
                              "#FamilyManagement_CooldownAllowed_2_Join",
                            ),
                          }),
                        (0, e.jsx)(j.$n, {
                          onClick: Fe,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                  m === "awaitemail2fa" &&
                    (0, e.jsxs)(k.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_Await2FAForJoin_Header",
                      ),
                      closeModal: Fe,
                      children: [
                        a === g.PQ.sf &&
                          (0, e.jsxs)(C.Z, {
                            className: U.DialogWarning,
                            children: [
                              (0, e.jsx)(C.Z, {
                                className: U.DialogText,
                                children: (0, r.we)(
                                  "#FamilyManagement_Await2FAForJoin_ChildWarning_1",
                                ),
                              }),
                              (0, e.jsx)(C.Z, {
                                className: U.DialogText,
                                children: (0, r.oW)(
                                  "#FamilyManagement_Await2FAForJoin_ChildWarning_2",
                                  (0, e.jsx)("a", {
                                    href: `${J.TS.HELP_BASE_URL}/wizard/HelpChangePassword`,
                                  }),
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsx)(C.Z, {
                          className: U.DialogText,
                          children: (0, r.we)(
                            "#FamilyManagement_Await2FAForJoin_Description_Email",
                          ),
                        }),
                        (0, e.jsx)(C.Z, {
                          className: U.TwoFactorCodeBox,
                          children: (0, e.jsx)(X.BA, {
                            className: U.EditNameInput,
                            type: "text",
                            onChange: (Pe) => {
                              S(Pe.target.value), P(null);
                            },
                            value: I,
                            placeholder: (0, r.we)(
                              "#FamilyManagement_Await2FAForJoin_InputPlaceholder",
                            ),
                            maxLength: 128,
                          }),
                        }),
                        (0, e.jsxs)(C.Z, {
                          className: U.DialogButtons,
                          children: [
                            (0, e.jsx)(j.jn, {
                              onClick: jt,
                              children: (0, r.we)(
                                "#FamilyManagement_AwaitCodeFromEmail_Confirm",
                              ),
                            }),
                            (0, e.jsx)(j.$n, {
                              onClick: fe,
                              children: (0, r.we)(
                                "#FamilyManagement_AwaitCodeFromEmail_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  m == "alreadyaccepted" &&
                    (0, e.jsxs)(k.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_AlreadyAccepted_Header",
                      ),
                      closeModal: Fe,
                      children: [
                        (0, e.jsx)("div", {
                          className: U.DialogText,
                          children: (0, r.we)(
                            "#FamilyManagement_AlreadyAccepted_Text",
                          ),
                        }),
                        (0, e.jsx)(j.$n, {
                          onClick: Fe,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: U.InviteRowHeader,
                children: [
                  (0, e.jsx)("a", {
                    className: U.ProfileLink,
                    href: ve.GetCommunityProfileURL(),
                    children: (0, e.jsx)(ne.i8, {
                      className: U.Avatar,
                      persona: ve,
                      size: "Large",
                      statusPosition: "right",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: U.InviteRowDetails,
                    children: (0, r.PP)(
                      a === g.PQ.s
                        ? "#FamilyManagement_PendingFamilyInviteInviteText_Adult"
                        : "#FamilyManagement_PendingFamilyInviteInviteText_Child",
                      (0, e.jsx)("a", {
                        className: U.ProfileLink,
                        href: ve.GetCommunityProfileURL(),
                        children: (0, e.jsx)("span", {
                          className: U.PersonaName,
                          children: ve?.m_strPlayerName,
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: U.RoleBlock,
                        children: [
                          (0, e.jsx)(me.iM, { className: U.RoleIcon, role: a }),
                          (0, e.jsx)("span", {
                            className: U.RoleName,
                            children: (0, r.we)(`#FamilyManagement_Role_${a}`),
                          }),
                        ],
                      }),
                    ),
                  }),
                ],
              }),
              a == g.PQ.s &&
                (0, e.jsx)("div", {
                  className: U.RoleDescriptionShort,
                  children: (0, e.jsx)("p", {
                    children: (0, r.oW)(
                      "#FamilyManagement_RoleDescriptionShort_Adult",
                      (0, e.jsx)("span", { className: U.RoleName }),
                      (0, e.jsx)("a", {
                        className: U.LearnMoreLink,
                        onClick: () => h("explanation"),
                      }),
                    ),
                  }),
                }),
              a == g.PQ.sf &&
                (0, e.jsxs)("div", {
                  className: U.RoleDescriptionShort,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.oW)(
                        "#FamilyManagement_RoleDescriptionShort_Child",
                        (0, e.jsx)("span", { className: U.RoleName }),
                        (0, e.jsx)("a", {
                          className: U.LearnMoreLink,
                          onClick: () => h("explanation"),
                        }),
                      ),
                    }),
                    (0, e.jsxs)("ul", {
                      className: U.RoleDescriptionList,
                      children: [
                        (0, e.jsx)("li", {
                          children: (0, r.we)(
                            "#FamilyManagement_RoleDescriptionShort_Child_1",
                          ),
                        }),
                        (0, e.jsx)("li", {
                          children: (0, r.we)(
                            "#FamilyManagement_RoleDescriptionShort_Child_2",
                          ),
                        }),
                        (0, e.jsx)("li", {
                          children: (0, r.we)(
                            "#FamilyManagement_RoleDescriptionShort_Child_3",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: U.Buttons,
                children: [
                  (0, e.jsx)(j.$n, {
                    className: U.AcceptInviteButton,
                    onClick: () => h("confirm"),
                    children: (0, r.we)("#FamilyManagement_AcceptInviteButton"),
                  }),
                  (0, e.jsx)(j.$n, {
                    className: U.DeclineInviteButton,
                    onClick: Ce,
                    children: (0, r.we)(
                      "#FamilyManagement_DeclineInviteButton",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function b() {
          return (0, e.jsxs)("div", {
            className: (0, G.A)("account_settings_container"),
            children: [
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_AdultDescription_1"),
              }),
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_AdultDescription_2"),
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_AdultDescription_3"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_AdultDescription_4"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_AdultDescription_5"),
                  }),
                ],
              }),
            ],
          });
        }
        function Q() {
          return (0, e.jsxs)("div", {
            className: (0, G.A)("account_settings_container"),
            children: [
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_ChildDescription_1"),
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_ChildDescription_2"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_ChildDescription_3"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_ChildDescription_4"),
                  }),
                ],
              }),
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_ChildDescription_5"),
              }),
            ],
          });
        }
        const R = "familyid",
          A = "invite";
        function D() {
          const s = (0, L.W6)(),
            t = (0, L.zy)(),
            n = K(t, R),
            a = K(t, A),
            i = K(t, ee);
          return (
            (0, x.tN)(n, a, i).mutate(null, {
              onSuccess: () => s.push("/account/familymanagement"),
            }),
            (0, e.jsx)(T.t, {})
          );
        }
        var v = u(80329),
          M = u(58612),
          E = u(76559),
          V = u(93125),
          z = u(9852),
          ye = u(99412),
          he = u(88268),
          xe = u(20169),
          Se = u(18938),
          Ie = u(79089),
          Ee = u(33902);
        const We = y.memo(function (t) {
          const {
              virtualizer: n,
              bDynamic: a,
              scrollAlign: i,
              bNativeScrollIntoView: o,
              idx: l,
              rowGap: c,
              renderItem: p,
            } = t,
            d = y.useCallback(
              (m, h, _) => (n.scrollToIndex(l, { align: i }), !0),
              [n, l, i],
            );
          return (0, e.jsx)(C.Z, {
            ref: a ? n.measureElement : void 0,
            navKey: `VirtualizedListIndex-${l}`,
            "data-index": l,
            fnScrollIntoViewHandler: o ? void 0 : d,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: c },
            children: p(l),
          });
        });
        function we(s) {
          return (0, Se.QS)(
            (t) => {
              if (!t) return;
              const n = new t.ownerDocument.defaultView.ResizeObserver((o) => {
                s(o[0]);
              });
              let a = [],
                i = t;
              for (; i && i != null; )
                n.observe(i), a.push(i), (i = i.parentElement);
              return () => {
                a.forEach((o) => n.unobserve(o));
              };
            },
            [s],
          );
        }
        function Ue(s, t) {
          const n = s.getBoundingClientRect().top;
          return t
            ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
            : n + (s.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const Ae = y.forwardRef(function (t, n) {
          const {
              nRows: a,
              nItemHeight: i,
              nRowGap: o,
              overscan: l,
              renderItem: c,
              bDynamic: p,
              measureElement: d,
              className: m,
              forceVirtualizeType: h,
              hintVirtualizeType: _,
              scrollAlign: f,
              bNativeScrollIntoView: I,
              initialOffset: S,
              onOffsetChange: P,
              ...w
            } = t,
            [Y, ue] = (0, y.useState)(h ?? _),
            [ie, ce] = y.useState(),
            [Ce, ve] = y.useState(),
            fe = y.useRef(null),
            Fe = y.useCallback(
              (lt) => {
                if (!lt) return;
                const et = (0, Ie._f)(lt, "y"),
                  Ns = Ue(lt, h == "window" ? null : et);
                (0, y.startTransition)(() => {
                  h != "window" && ce(et || void 0),
                    ve(Ns),
                    h || ue(et ? "element" : "window");
                });
              },
              [h],
            ),
            He = we((lt) => {
              if (!fe.current) return;
              const et = Ue(fe.current, ie);
              (0, y.startTransition)(() => {
                ve(et);
              });
            }),
            jt = (0, Se.Ue)(Fe, fe, He, n),
            Pe = {
              nRows: a,
              nItemHeight: i,
              nRowGap: o,
              overscan: l,
              renderItem: c,
              bDynamic: p,
              measureElement: d,
              forceVirtualizeType: h,
              hintVirtualizeType: _,
              scrollAlign: f,
              bNativeScrollIntoView: I,
              initialOffset: S,
              onOffsetChange: P,
            };
          return (0, e.jsx)(C.Z, {
            className: m,
            ref: jt,
            ...w,
            children: (0, e.jsxs)(y.Suspense, {
              children: [
                Y === "element" &&
                  (0, e.jsx)(Ze, {
                    ...Pe,
                    nScrollMargin: Ce || 0,
                    elScrollable: ie,
                  }),
                Y === "window" && (0, e.jsx)(Ve, { ...Pe, nScrollMargin: Ce }),
              ],
            }),
          });
        });
        function Ke(s, t, n) {
          y.useEffect(() => {
            n ||
              (0, y.startTransition)(() => {
                s.measure();
              });
          }, [s, t, n]);
        }
        function Ve(s) {
          const {
              nScrollMargin: t,
              nRows: n,
              nItemHeight: a,
              nRowGap: i = 10,
              overscan: o = 6,
              initialOffset: l,
              onOffsetChange: c,
              measureElement: p,
              bDynamic: d,
            } = s,
            m = (0, Ee.d)(),
            h = a + i,
            _ = (0, he.XW)({
              count: n,
              scrollMargin: t,
              estimateSize: y.useCallback(() => h, [h]),
              measureElement: p,
              overscan: o,
              initialOffset: l ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: Ge,
              observeElementRect: _e,
              onChange(f, I) {
                c?.(f.scrollOffset);
              },
            });
          return (
            (_.shouldAdjustScrollPositionOnItemSizeChange = (f) =>
              t !== void 0 && f.start < (_.scrollOffset ?? 0)),
            Ke(_, h, d),
            (0, e.jsx)(Te, { ...s, virtualizer: _ })
          );
        }
        function Ze(s) {
          const {
              nRows: t,
              nScrollMargin: n,
              elScrollable: a,
              nItemHeight: i,
              nRowGap: o = 10,
              overscan: l = 6,
              initialOffset: c,
              onOffsetChange: p,
              measureElement: d,
              bDynamic: m,
            } = s,
            h = i + o,
            _ = (0, Ee.d)(),
            f = (0, he.Te)({
              count: t,
              scrollMargin: n,
              getScrollElement: () => (
                a &&
                  f.scrollElement !== a &&
                  c === void 0 &&
                  (f.scrollOffset = a.scrollTop),
                a ?? null
              ),
              estimateSize: y.useCallback(() => h, [h]),
              measureElement: d,
              overscan: l,
              initialRect: a
                ? void 0
                : {
                    height: _.viewportHeight?.value ?? 1e3,
                    width: _.viewportWidth?.value ?? 1e3,
                  },
              initialOffset: c,
              observeElementOffset: Ge,
              observeElementRect: je,
              onChange(I, S) {
                p?.(I.scrollOffset);
              },
            });
          return (
            (f.shouldAdjustScrollPositionOnItemSizeChange = (I) =>
              a !== void 0 && I.start < (f.scrollOffset ?? 0)),
            Ke(f, h, m),
            (0, e.jsx)(Te, { ...s, virtualizer: f })
          );
        }
        function Te(s) {
          const {
              virtualizer: t,
              nRowGap: n,
              renderItem: a,
              bDynamic: i,
              scrollAlign: o = "center",
              bNativeScrollIntoView: l,
            } = s,
            c = t.getVirtualItems(),
            p = c.length ? c[0].start - t.options.scrollMargin : 0,
            d = Math.max(0, t.getTotalSize());
          return (0, e.jsx)(C.Z, {
            "flow-children": "column",
            navEntryPreferPosition: xe.iU.MAINTAIN_Y,
            style: { height: `${d}px`, width: "100%", position: "relative" },
            children: (0, e.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${p}px )`,
              },
              children: c.map((m) =>
                (0, e.jsx)(
                  We,
                  {
                    virtualizer: t,
                    bDynamic: i,
                    scrollAlign: o,
                    bNativeScrollIntoView: l,
                    idx: m.index,
                    rowGap: n,
                    renderItem: a,
                  },
                  m.key,
                ),
              ),
            }),
          });
        }
        function be(s) {
          return (...t) => {
            queueMicrotask(() => {
              (0, y.startTransition)(() => {
                s(...t);
              });
            });
          };
        }
        function Ge(s, t) {
          const n = s.scrollElement;
          if (!n) return;
          let a;
          "scrollX" in n
            ? (a = be((l) =>
                t(n[s.options.horizontal ? "scrollX" : "scrollY"], l),
              ))
            : (a = be((l) =>
                t(n[s.options.horizontal ? "scrollLeft" : "scrollTop"], l),
              ));
          const i = () => a(!0),
            o = () => a(!1);
          return (
            o(),
            n.addEventListener("scroll", i, { passive: !0 }),
            n.addEventListener("scrollend", o, { passive: !0 }),
            () => {
              n.removeEventListener("scroll", i),
                n.removeEventListener("scrollend", o);
            }
          );
        }
        function _e(s, t) {
          const n = s.scrollElement;
          if (!n) return;
          const a = be(() => t({ width: n.innerWidth, height: n.innerHeight }));
          return (
            a(),
            n.addEventListener("resize", a, { passive: !0 }),
            () => {
              n.removeEventListener("resize", a);
            }
          );
        }
        function je(s, t) {
          const n = s.scrollElement;
          if (!n) return;
          const a = be((l) =>
            t({ width: Math.round(l.width), height: Math.round(l.height) }),
          );
          a(n.getBoundingClientRect());
          const i = n.ownerDocument.defaultView;
          if (!i?.ResizeObserver) return () => {};
          const o = new i.ResizeObserver((l) => {
            if (l[0]?.borderBoxSize[0]) {
              a({
                width: l[0].borderBoxSize[0].inlineSize,
                height: l[0].borderBoxSize[0].blockSize,
              });
              return;
            }
            a(n.getBoundingClientRect());
          });
          return (
            o.observe(n, { box: "border-box" }),
            () => {
              o.unobserve(n);
            }
          );
        }
        var De = u(48473);
        function Oe(s) {
          return new URLSearchParams(s.search).get("inviteuser");
        }
        function Le(s) {
          const { familyGroupID: t } = s,
            n = (0, L.zy)(),
            [a, i] = (0, y.useState)(Oe(n)),
            [o, l] = (0, y.useState)(a == null ? "splash" : "selectRole"),
            c = (0, x.Hs)(t),
            p =
              c.data.slot_cooldown_remaining_seconds() > 0 &&
              c.data.slot_cooldown_overrides() === 0,
            d = (m) => {
              i(m), l("selectRole");
            };
          return o === "splash"
            ? (0, e.jsx)(Be, { onClick: () => l("selectMethod") })
            : o === "selectMethod" && !p
              ? (0, e.jsx)(ze, {
                  familyGroupID: t,
                  onCancel: () => l("splash"),
                  onSelect: d,
                })
              : o === "selectMethod" && p
                ? (0, e.jsx)(ct, {
                    slotCooldownSeconds:
                      c.data.slot_cooldown_remaining_seconds(),
                    familyGroupID: t,
                    onCancel: () => l("splash"),
                    onSelect: d,
                  })
                : o === "selectRole"
                  ? (0, e.jsx)(tt, {
                      familyGroupID: t,
                      steamid: a,
                      onCancel: () => l("splash"),
                    })
                  : null;
        }
        function Be(s) {
          const t = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, e.jsx)("div", {
            className: v.InviteButtonCtn,
            children: (0, e.jsxs)(j.jn, {
              noFocusRing: !1,
              className: v.InviteButton,
              onClick: s.onClick,
              children: [
                B.e6B({}),
                (0, e.jsx)("span", {
                  children: (0, r.we)("#FamilyManagement_InviteAMember"),
                }),
              ],
            }),
          });
        }
        function ke(s) {
          const { familyGroupID: t, onSelect: n } = s,
            a = (0, x.Hs)(t),
            i = (0, x.QU)(t),
            o = (0, M.EW)();
          (0, x.gv)(
            i,
            "#FamilyManagement_ErrorLoadUsersSharingDevice",
            x.eS.k_EFamilyQueryGetUsersSharingDevice,
          );
          const l = i.data
            ?.users()
            .filter(
              (c) => !a.data?.pending_invites().some((p) => p.steamid() == c),
            )
            .filter((c) => o.data?.indexOf(c) === -1);
          return i.isError || l?.length == 0 || !o.isSuccess
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: v.Text,
                    children: (0, r.we)("#FamilyManagement_PreviousUsers"),
                  }),
                  i.isLoading
                    ? (0, e.jsx)("div", {
                        className: v.ThrobberContainer,
                        children: (0, e.jsx)(T.t, {}),
                      })
                    : (0, e.jsx)(Ct, { steamids: l, onSelect: n }),
                ],
              });
        }
        function ze(s) {
          const { familyGroupID: t, onSelect: n, onCancel: a } = s;
          return (0, e.jsxs)("div", {
            className: v.SelectAccountContainer,
            children: [
              (0, e.jsx)(j.wl, {
                className: v.CloseButton,
                onClick: a,
                children: (0, e.jsx)(B.sED, {}),
              }),
              (0, e.jsx)("div", {
                className: v.Header,
                children: (0, r.we)("#FamilyManagement_InviteAMember"),
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)("#FamilyManagement_InviteMethodText"),
              }),
              (0, e.jsx)(C.Z, {
                className: v.MethodButtons,
                children: (0, e.jsx)(pn, { familyGroupID: t, onSelect: n }),
              }),
              (0, e.jsx)(ke, { familyGroupID: t, onSelect: n }),
            ],
          });
        }
        function ct(s) {
          const {
            familyGroupID: t,
            onSelect: n,
            onCancel: a,
            slotCooldownSeconds: i,
          } = s;
          let o = (0, y.useRef)(
            (0, r.TW)(Math.floor(new Date().getTime() / 1e3) + i, !1, !0),
          );
          const l = (0, x.Hs)(t),
            c = (0, M.EW)();
          if (!c.isSuccess) return null;
          const p = l.data
            .former_members()
            .map((d) => d.steamid())
            .filter((d) => c.data.indexOf(d) === -1);
          return (0, e.jsxs)("div", {
            className: v.SelectAccountContainer,
            children: [
              (0, e.jsx)(j.wl, {
                className: v.CloseButton,
                noFocusRing: !1,
                onClick: a,
                children: (0, e.jsx)(B.sED, {}),
              }),
              (0, e.jsx)("div", {
                className: v.Header,
                children: (0, r.we)("#FamilyManagement_InviteAMember"),
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)(
                  "#FamilyManagement_CooldownAndReinvite",
                  o.current,
                ),
              }),
              (0, e.jsx)(Ct, { steamids: p, onSelect: n }),
            ],
          });
        }
        function tt(s) {
          const { familyGroupID: t, steamid: n, onCancel: a } = s,
            { setErrorMessage: i } = (0, x.RC)(),
            o = (0, ae.js)(n);
          (0, x.p8)(o, "#FamilyManagement_ErrorLoadFamilyGeneric");
          const [l, c] = (0, y.useState)(g.PQ.kr),
            [p, d] = (0, y.useState)(null),
            m = (0, x.HM)(t, n, l);
          (0, x.gv)(
            m,
            "#FamilyManagement_ErrorInvite",
            x.eS.k_EFamilyQueryInviteToFamily,
          );
          const h = () => {
            m.mutateAsync(null, {
              onSuccess: (I) => {
                I.two_factor_method() === g.GC.uk
                  ? a()
                  : I.two_factor_method() === g.GC.SC
                    ? d("awaitmobile2fa")
                    : I.two_factor_method() === g.GC.Mk && d("awaitemail2fa");
              },
            });
          };
          if (o.isLoading)
            return (0, e.jsx)("div", {
              className: v.ThrobberContainer,
              children: (0, e.jsx)(T.t, {}),
            });
          const _ = o.data,
            f = (I) => {
              i(""), c(I);
            };
          return (0, e.jsxs)("div", {
            className: v.SelectRoleContainer,
            children: [
              (0, e.jsx)(k.EN, {
                active: l !== g.PQ.kr,
                children:
                  p === "awaitmobile2fa" || p === "awaitemail2fa"
                    ? (0, e.jsx)(mt, {
                        onClose: a,
                        eMethod: p === "awaitemail2fa" ? g.GC.Mk : g.GC.SC,
                      })
                    : (0, e.jsx)(nt, {
                        steamid: n,
                        role: l,
                        onCancel: () => c(g.PQ.kr),
                        onConfirm: h,
                      }),
              }),
              (0, e.jsx)(C.Z, {
                className: v.CloseButton,
                onActivate: a,
                children: (0, e.jsx)(B.sED, {}),
              }),
              (0, e.jsxs)("div", {
                className: v.Header,
                children: [
                  (0, e.jsx)("span", {
                    className: v.Invite,
                    children: (0, r.we)("#FamilyManagement_Invite"),
                  }),
                  (0, e.jsx)(ne.i8, {
                    className: v.Avatar,
                    persona: _,
                    size: "Large",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    className: v.PlayerName,
                    children: _?.m_strPlayerName,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)("#FamilyManagement_ChooseRole"),
              }),
              (0, e.jsxs)(C.Z, {
                className: v.InviteButtonCtn,
                children: [
                  (0, e.jsx)(Ft, { role: g.PQ.s, onSelect: () => f(g.PQ.s) }),
                  (0, e.jsx)(Ft, { role: g.PQ.sf, onSelect: () => f(g.PQ.sf) }),
                ],
              }),
            ],
          });
        }
        function mt(s) {
          const { eMethod: t, onClose: n } = s;
          let a;
          if (t === g.GC.SC && J.TS.IN_MOBILE_WEBVIEW)
            a = "#FamilyManagement_Await2FAForInvite_MobileAuth_InMobileApp";
          else if (t === g.GC.SC)
            a = "#FamilyManagement_Await2FAForInvite_MobileAuth";
          else if (t === g.GC.Mk)
            a = "#FamilyManagement_Await2FAForInvite_EmailAuth";
          else return null;
          return (0, e.jsxs)(k.o0, {
            bAlertDialog: !0,
            onOK: n,
            closeModal: n,
            strTitle: (0, r.we)("#FamilyManagement_ConfirmInviteTitle"),
            children: [
              (0, e.jsx)(me.pC, {}),
              (0, e.jsx)("div", { className: v.Text, children: (0, r.we)(a) }),
            ],
          });
        }
        function nt(s) {
          const { onCancel: t, onConfirm: n, steamid: a, role: i } = s,
            l = (0, ae.js)(a).data;
          return (0, e.jsxs)(k.o0, {
            onCancel: t,
            strTitle: (0, r.we)("#FamilyManagement_ConfirmInviteTitle"),
            onOK: n,
            strOKButtonText: (0, r.we)("#FamilyManagement_Invite"),
            children: [
              (0, e.jsx)(me.pC, {}),
              (0, e.jsxs)("div", {
                className: v.ProfilePlusRole,
                children: [
                  (0, e.jsx)(ne.i8, {
                    className: v.Avatar,
                    persona: l,
                    size: "Large",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    className: v.PlayerName,
                    children: l?.m_strPlayerName,
                  }),
                  (0, e.jsx)(me.iM, { className: v.RoleIcon, role: i }),
                  (0, e.jsx)("div", {
                    className: v.RoleName,
                    children: (0, r.we)(`#FamilyManagement_Role_${i}`),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)("#FamilyManagement_ConfirmInvite"),
              }),
            ],
          });
        }
        function pn(s) {
          const { familyGroupID: t, onSelect: n } = s,
            [a, i] = (0, y.useState)(!1),
            l = (0, x.Hs)(t)
              .data.members()
              .map((c) => c.steamid());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(k.EN, {
                active: a,
                children: (0, e.jsx)(k.eV, {
                  title: (0, r.we)("#FamilyManagement_InviteMethodFriend"),
                  className: v.SelectFriendModal,
                  onCancel: () => i(!1),
                  children: (0, e.jsx)(hn, {
                    setSelectedFriendSteamID: n,
                    excludeSteamIDs: l,
                  }),
                }),
              }),
              (0, e.jsx)(j.$n, {
                noFocusRing: !1,
                onClick: () => i(!0),
                children: (0, r.we)("#FamilyManagement_InviteMethodFriend"),
              }),
            ],
          });
        }
        function Ct(s) {
          const { steamids: t, onSelect: n } = s;
          return (0, e.jsx)(C.Z, {
            className: v.ProfileSelector,
            "flow-children": "grid",
            children: t.map((a) =>
              (0, e.jsx)(yn, { steamid: a, onClick: () => n(a) }, a),
            ),
          });
        }
        function yn(s) {
          const { steamid: t, onClick: n } = s,
            a = new E.b(t),
            i = (0, ae.js)(t),
            o = (0, M.M8)(),
            c = (0, z.T)().data?.preferences().parenthesize_nicknames(),
            p = o.data?.get(a.GetAccountID());
          if (
            ((0, x.p8)(i, "#FamilyManagement_ErrorLoadFamilyGeneric"),
            i.isLoading)
          )
            return null;
          const d = i.data;
          return (0, e.jsxs)(C.Z, {
            className: v.ProfileChoice,
            onActivate: n,
            children: [
              (0, e.jsx)("div", {
                className: v.Avatar,
                children: (0, e.jsx)(ne.i8, {
                  className: v.Avatar,
                  persona: d,
                  size: "Large",
                  statusPosition: "right",
                }),
              }),
              (0, e.jsx)(V.D, {
                className: v.PlayerName,
                bParenthesizeNicknames: c,
                bIsSelf: !1,
                bHideStatus: !0,
                bHidePersona: !1,
                bCompactView: !1,
                persona: d,
                strNickname: p,
                eFriendRelationship: ye._UC,
              }),
            ],
          });
        }
        function Ft(s) {
          const { role: t, onSelect: n } = s;
          return (0, e.jsxs)(j.jn, {
            className: (0, G.A)(v.InviteButton),
            noFocusRing: !1,
            onClick: () => n(t),
            children: [
              t == g.PQ.sf ? (0, e.jsx)(B.Bir, {}) : (0, e.jsx)(B.d1w, {}),
              (0, e.jsx)("span", {
                children: (0, r.we)(
                  `#FamilyManagement_InviteAsRoleButton_${t}`,
                ),
              }),
            ],
          });
        }
        function hn(s) {
          const { setSelectedFriendSteamID: t, excludeSteamIDs: n } = s,
            a = (0, M.Dv)();
          (0, x.p8)(a, "#FamilyManagement_ErrorLoadFriendListGeneric");
          const i = a.data;
          return a.isLoading
            ? (0, e.jsx)("div", {
                className: v.ThrobberContainer,
                children: (0, e.jsx)(T.t, {}),
              })
            : a.isError
              ? null
              : (0, e.jsx)(gn, {
                  setSelectedFriendSteamID: t,
                  steamIDs: i,
                  excludeSteamIDs: n,
                });
        }
        function gn(s) {
          const {
              setSelectedFriendSteamID: t,
              steamIDs: n,
              excludeSteamIDs: a,
            } = s,
            i = (0, ae.DW)(n),
            o = (0, M.M8)(),
            l = (0, z.T)(),
            [c, p] = y.useState(""),
            d = l.data?.preferences().parenthesize_nicknames(),
            m = y.useCallback(
              (I, S) => {
                let P = I.persona.m_strPlayerName,
                  w = S.persona.m_strPlayerName;
                return (
                  d ||
                    (I.nickname && (P = I.nickname),
                    S.nickname && (w = S.nickname)),
                  (0, De.lY)(P, w) ||
                    I.persona.m_steamid.GetAccountID() -
                      S.persona.m_steamid.GetAccountID()
                );
              },
              [d],
            ),
            h = (0, y.useMemo)(
              () =>
                i
                  .map((P) => P.data)
                  .filter((P) => !!P)
                  .filter(
                    (P) =>
                      c == "" ||
                      _n(
                        c.toLowerCase(),
                        P?.m_strPlayerName,
                        o.data?.get(P?.m_steamid.GetAccountID()),
                      ),
                  )
                  .filter(
                    (P) => a.indexOf(P?.m_steamid.ConvertTo64BitString()) == -1,
                  )
                  .map((P) => ({
                    persona: P,
                    nickname: o.data?.get(P?.m_steamid.GetAccountID()),
                  }))
                  .sort(m),
              [a, i, o, c, m],
            ),
            _ = y.useCallback(
              (I) =>
                (0, e.jsx)(xn, {
                  persona: h[I].persona,
                  nickname: h[I].nickname,
                  setSelectedFriendSteamID: t,
                }),
              [h, t],
            ),
            f = i.some((I) => I.isLoading);
          return (0, e.jsxs)(C.Z, {
            className: v.InviteFriendSelector,
            children: [
              (0, e.jsx)("p", {
                className: v.InviteText,
                children: (0, r.we)("#FamilyManagement_SelectFriend"),
              }),
              f && (0, e.jsx)(T.t, { size: "xlarge" }),
              !f &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(C.Z, {
                      className: v.InputContainer,
                      children: (0, e.jsx)(fn, { strFilter: c, setFilter: p }),
                    }),
                    (0, e.jsx)(C.Z, {
                      className: v.FriendList,
                      children: (0, e.jsx)(Ae, {
                        nRows: h.length,
                        nItemHeight: 84,
                        renderItem: _,
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function fn(s) {
          const { strFilter: t, setFilter: n } = s;
          return (0, e.jsx)(j.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: v.InviteFriendInput,
            type: "text",
            onChange: (a) => n(a.target.value),
            value: t,
            placeholder: (0, r.we)(
              "#FamilyManagement_InviteFriendNamePlaceholder",
            ),
          });
        }
        function _n(s, t, n) {
          return (
            !s ||
            (t && t.toLowerCase().includes(s)) ||
            (n && n.toLowerCase().includes(s))
          );
        }
        function xn(s) {
          const { persona: t, nickname: n, setSelectedFriendSteamID: a } = s,
            o = (0, z.T)().data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(C.Z, {
            className: v.FriendSelectorRow,
            onActivate: (l) => {
              a(t.m_steamid.ConvertTo64BitString());
            },
            children: [
              (0, e.jsx)(ne.i8, {
                className: v.Avatar,
                persona: t,
                size: "Large",
                statusPosition: "right",
              }),
              (0, e.jsx)(V.D, {
                className: v.PlayerName,
                bIsSelf: !1,
                bHideStatus: !1,
                bHidePersona: !1,
                bParenthesizeNicknames: o,
                bCompactView: !1,
                persona: t,
                strNickname: n,
                eFriendRelationship: ye._UC,
              }),
            ],
          });
        }
        var N = u(16195),
          te = u(34286),
          vn = u(20803),
          Je = u(30096);
        function Pn(s) {
          return typeof s.cooldown_seconds_remaining == "function";
        }
        function dt(s) {
          const { familyGroupID: t, member: n } = s,
            a = (0, ae.js)(n.steamid());
          (0, x.p8)(a, "#FamilyManagement_ErrorLoadFamilyGeneric");
          const [i, o, l] = (0, Je.uD)(!1);
          if (!a.isSuccess) return null;
          let c = a.data,
            p = !1,
            d = null;
          return (
            Pn(n)
              ? ((d = (0, e.jsx)(Cn, {
                  active: i,
                  onClose: l,
                  familyGroupID: t,
                  member: n,
                  persona: c,
                })),
                (p = !0))
              : (d = (0, e.jsx)(In, {
                  active: i,
                  onClose: l,
                  familyGroupID: t,
                  invited: n,
                  persona: c,
                })),
            (0, e.jsxs)(e.Fragment, {
              children: [
                d,
                (0, e.jsx)(C.Z, {
                  className: (0, G.A)(vn.FamilyMemberRow, te.FamilyMemberRow),
                  onActivate: o,
                  children: (0, e.jsx)("div", {
                    className: te.TopRow,
                    children: (0, e.jsx)(me.ff, {
                      persona: c,
                      role: n.role(),
                      invitePending: !p,
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function Sn(s) {
          const t = new Date(s.time_joined() * 1e3);
          return (
            (new Date().getTime() - t.getTime()) / (1e3 * 24 * 60 * 60) < 30
          );
        }
        function jn(s) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              member: i,
              persona: o,
              isSelf: l,
            } = s,
            { setErrorMessage: c } = (0, x.RC)(),
            p = (0, x._K)(a, i.steamid()),
            d = (0, L.W6)(),
            m = (0, L.zy)(),
            h = Math.ceil(i.cooldown_seconds_remaining() / (3600 * 24) || 0);
          let _ = l
            ? (0, r.we)("#FamilyManagement_RemoveMemberConfirmationText_Self")
            : (0, r.we)(
                "#FamilyManagement_RemoveMemberConfirmationText",
                o?.m_strPlayerName,
              );
          h !== 0 &&
            (_ +=
              " " +
              (l
                ? (0, r.Yp)("#FamilyManagement_CannotJoinFor_Self", h)
                : (0, r.we)("#FamilyManagement_CannotJoinFor", h)));
          let f = l
            ? (0, r.we)("#FamilyManagement_RemoveMemberConfirmationTitle_Self")
            : (0, r.we)("#FamilyManagement_RemoveMemberConfirmationTitle");
          const I = () => {
            c(null), p.mutate(null, { onSuccess: () => d.push(m.pathname) });
          };
          return (0, e.jsx)(k.EN, {
            active: t,
            children: (0, e.jsx)(k.o0, {
              strTitle: f,
              onOK: I,
              closeModal: n,
              children: (0, e.jsx)("div", {
                className: te.RemovalDescription,
                children: _,
              }),
            }),
          });
        }
        function Cn(s) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              member: i,
              persona: o,
            } = s,
            [l, c, p] = (0, Je.uD)(!1),
            d = (0, x._K)(a, i.steamid()),
            { setErrorMessage: m } = (0, x.RC)();
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorRemovingFromFamily",
            x.eS.k_EFamilyQueryRemoveFromFamily,
          );
          const _ = (0, O.LH)() == i.steamid(),
            f = Sn(i),
            S = (0, x.vo)().data?.role(),
            w = (0, x.Hs)(a).data.members().length === 1,
            Y = (0, L.W6)(),
            { url: ue } = (0, L.W5)(),
            ie = () => {
              m(null), c(), n();
            },
            ce = () => {
              const He = new E.b(i.steamid());
              window.location.href =
                J.TS.HELP_BASE_URL +
                "wizard/HelpRecoverFamilyMember?childid=" +
                He.GetAccountID();
            },
            Ce = () => {
              window.location.href =
                J.TS.COMMUNITY_BASE_URL + "profiles/" + i.steamid();
            },
            ve = () => {
              window.location.href =
                J.TS.STORE_BASE_URL + "wishlist/profiles/" + i.steamid();
            },
            fe = () => {
              const He = ue.endsWith("/") ? ue.slice(0, -1) : ue;
              Y.push(`${He}/parentalcontrols/${i.steamid()}`);
            };
          let Fe = (0, r.we)(
            "#FamilyManagement_ManageDialogTitle",
            o?.m_strPlayerName,
          );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(jn, {
                active: l,
                onClose: p,
                familyGroupID: a,
                member: i,
                persona: o,
                isSelf: _,
              }),
              (0, e.jsx)(k.EN, {
                active: t,
                children: (0, e.jsx)(k.eV, {
                  className: te.FamilyMemberActionsDialog,
                  titleClassName: te.Title,
                  title: Fe,
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  bHideCloseIcon: !0,
                  children: (0, e.jsxs)("div", {
                    className: te.ButtonList,
                    children: [
                      (0, e.jsx)(j.$n, {
                        className: te.ManagementButton,
                        onClick: Ce,
                        children: (0, r.we)("#FamilyManagement_ProfileLink"),
                      }),
                      (0, e.jsx)(j.$n, {
                        className: te.ManagementButton,
                        onClick: ve,
                        children: (0, r.we)("#FamilyManagement_WishlistLink"),
                      }),
                      (0, e.jsx)(j.Nu, { className: te.Separator }),
                      !_ &&
                        i.role() == g.PQ.sf &&
                        (0, e.jsx)(j.$n, {
                          className: te.ManagementButton,
                          onClick: fe,
                          children: (0, r.we)(
                            "#FamilyManagement_ParentalControls",
                          ),
                        }),
                      !f &&
                        !_ &&
                        i.role() == g.PQ.sf &&
                        (0, e.jsx)(j.$n, {
                          className: te.ManagementButton,
                          disabled: f,
                          onClick: ce,
                          children: (0, r.we)(
                            "#FamilyManagement_RecoverMember",
                          ),
                        }),
                      !w &&
                        S !== g.PQ.sf &&
                        (0, e.jsx)(j.$n, {
                          className: (0, G.A)(te.ManagementButton, te.Remove),
                          onClick: ie,
                          children: (0, r.we)(
                            _
                              ? "#FamilyManagement_RemoveMember_Self"
                              : "#FamilyManagement_RemoveMember",
                          ),
                        }),
                      w && (0, e.jsx)(wn, { familyGroupID: a }),
                      (0, e.jsx)(j.Nu, { className: te.Separator }),
                      (0, e.jsx)(j.$n, {
                        className: te.ManagementButton,
                        onClick: n,
                        children: (0, r.we)("#FamilyManagement_Cancel"),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Fn(s) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              invited: i,
              persona: o,
            } = s,
            l = (0, x.v2)(a, i.steamid()),
            { setErrorMessage: c } = (0, x.RC)();
          (0, x.gv)(
            l,
            "#FamilyManagement_ErrorCancelInvite",
            x.eS.k_EFamilyQueryDeclineInvite,
          );
          const p = () => {
            c(null), l.mutate();
          };
          let d = (0, r.we)(
            "#FamilyManagement_CancelInvitationConfirmationText",
            o?.m_strPlayerName,
          );
          return (0, e.jsx)(k.EN, {
            active: t,
            children: (0, e.jsx)(k.o0, {
              strTitle: (0, r.we)(
                "#FamilyManagement_CancelInvitationConfirmationTitle",
              ),
              strDescription: d,
              onOK: p,
              closeModal: n,
            }),
          });
        }
        function In(s) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              invited: i,
              persona: o,
            } = s,
            [l, c, p] = (0, Je.uD)(!1),
            d = (0, x.v2)(a, i.steamid()),
            { setErrorMessage: m } = (0, x.RC)();
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorCancelInvite",
            x.eS.k_EFamilyQueryDeclineInvite,
          );
          const h = () => {
              window.location.href =
                J.TS.COMMUNITY_BASE_URL + "profiles/" + i.steamid();
            },
            _ = () => {
              m(null), c(), n();
            };
          let f = (0, r.we)(
            "#FamilyManagement_ManageDialogTitle",
            o?.m_strPlayerName,
          );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Fn, {
                active: l,
                onClose: p,
                familyGroupID: a,
                invited: i,
                persona: o,
              }),
              (0, e.jsx)(k.EN, {
                active: t,
                children: (0, e.jsx)(k.eV, {
                  className: te.FamilyMemberActionsDialog,
                  titleClassName: te.Title,
                  title: f,
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  bHideCloseIcon: !0,
                  children: (0, e.jsxs)("div", {
                    className: te.ButtonList,
                    children: [
                      (0, e.jsx)(j.$n, {
                        className: te.ManagementButton,
                        onClick: h,
                        children: (0, r.we)("#FamilyManagement_ProfileLink"),
                      }),
                      (0, e.jsx)(j.Nu, { className: te.Separator }),
                      (0, e.jsx)(j.$n, {
                        className: (0, G.A)(
                          te.ManagementButton,
                          te.CancelInvite,
                        ),
                        onClick: _,
                        children: (0, r.we)(
                          "#FamilyManagement_CancelInviteButton",
                        ),
                      }),
                      (0, e.jsx)(j.Nu, { className: te.Separator }),
                      (0, e.jsx)(j.$n, {
                        className: te.ManagementButton,
                        onClick: n,
                        children: (0, r.we)("#FamilyManagement_Cancel"),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function wn(s) {
          const { familyGroupID: t } = s,
            [n, a, i] = (0, Je.uD)(!1),
            o = (0, x.Y0)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            "#FamilyManagement_ErrorDeleteFamily",
            x.eS.k_EFamilyQueryDeleteFamily,
          );
          const p = (0, x.vo)().data.cooldown_seconds_remaining(),
            d = Date.now() / 1e3 + p,
            m = (0, r.TW)(d),
            h = (0, L.W6)();
          if (o.isPending)
            return (0, e.jsx)("div", {
              className: te.ThrobberContainer,
              children: (0, e.jsx)(T.t, {}),
            });
          const _ = () => {
              l(null), a();
            },
            f = () => {
              l(null),
                o.mutate(null, {
                  onSuccess: () => h.push("/account/familymanagement"),
                });
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(k.EN, {
                active: n,
                children: (0, e.jsxs)(k.o0, {
                  strTitle: (0, r.we)(
                    "#FamilyManagement_DeleteFamilyConfirmationTitle",
                  ),
                  onOK: f,
                  closeModal: i,
                  children: [
                    p > 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, r.we)(
                              "#FamilyManagement_DeleteFamilyConfirmationText_1",
                            ),
                          }),
                          (0, e.jsxs)("ul", {
                            children: [
                              (0, e.jsx)("li", {
                                children: (0, r.we)(
                                  "#FamilyManagement_DeleteFamilyConfirmationText_2",
                                  m,
                                ),
                              }),
                              (0, e.jsx)("li", {
                                children: (0, r.we)(
                                  "#FamilyManagement_DeleteFamilyConfirmationText_3",
                                ),
                              }),
                              (0, e.jsx)("li", {
                                children: (0, r.we)(
                                  "#FamilyManagement_DeleteFamilyConfirmationText_4",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    p === 0 &&
                      (0, e.jsx)("p", {
                        children: (0, r.we)(
                          "#FamilyManagement_DeleteFamilyConfirmationText_NoCooldown",
                        ),
                      }),
                  ],
                }),
              }),
              (0, e.jsx)(j.$n, {
                className: (0, G.A)(te.DeleteFamily, te.ManagementButton),
                noFocusRing: !1,
                onClick: _,
                children: (0, r.we)("#FamilyManagement_DeleteFamilyButton"),
              }),
            ],
          });
        }
        var Me = u(92264);
        function Dn(s) {
          const { familyGroupID: t, ...n } = s,
            a = (0, x.Ww)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadHistory",
            x.eS.k_EFamilyQueryLoadHistory,
          );
          let i = (0, y.useMemo)(() => a.data?.slice(0).reverse() || [], [a]);
          const o = parseInt(n.nFamilyHistoryRowHeight),
            l = y.useCallback(
              (c) =>
                (0, e.jsx)(Nn, {
                  entry: i[c],
                  styleProps: n,
                  fnRenderName: s.FnRenderName,
                }),
              [i, n, s.FnRenderName],
            );
          return (0, e.jsx)(C.Z, {
            className: n.FamilyHistory,
            children: (0, e.jsx)(Ae, {
              bDynamic: !0,
              nRows: i.length,
              nItemHeight: o,
              renderItem: l,
            }),
          });
        }
        function Nn(s) {
          let { entry: t, styleProps: n, fnRenderName: a, ...i } = s;
          const o = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              month: "numeric",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
            l = new Date(parseInt(t.timestamp()) * 1e3),
            c = o.format(l),
            p = (0, r.we)("#FamilyHistory_SteamSupport"),
            d = (0, ae.js)(t.actor_steamid());
          let m,
            h = a(t.actor_steamid());
          t.actor_steamid()
            ? t.by_support()
              ? (m = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: d.data?.m_strPlayerName }),
                    " (",
                    p,
                    ")",
                  ],
                }))
              : (m = h)
            : (m = p);
          let _ = JSON.parse(t.body());
          const f = a(_.account),
            I = _.seconds && (0, Me.R2)(_.seconds),
            S = _.reason ? _.reason : "";
          let P;
          switch (t.type()) {
            case g.NP.E4:
              P = (0, r.PP)("#FamilyHistory_FamilyCreated", m, _.name);
              break;
            case g.NP.RE:
              P = (0, r.PP)("#FamilyHistory_FamilyModified", m, _.name);
              break;
            case g.NP.xD:
              P = (0, r.PP)("#FamilyHistory_FamilyDeleted", m);
              break;
            case g.NP.fd:
              const w = (0, r.we)(
                `#FamilyManagement_Role_${_.role}`,
              ).toLocaleLowerCase();
              P = (0, r.PP)("#FamilyHistory_AccountInvited", m, w, f);
              break;
            case g.NP.M4:
              P = (0, r.PP)("#FamilyHistory_InviteDeniedByFamilySize", m, f);
              break;
            case g.NP.Ve:
              P = (0, r.PP)("#FamilyHistory_JoinedFamily", m);
              break;
            case g.NP.pu:
              P = (0, r.PP)("#FamilyHistory_JoinDeniedByRegionMismatch", m);
              break;
            case g.NP.SW:
              P = (0, r.PP)("#FamilyHistory_JoinDenied", m, S);
              break;
            case g.NP.Ig:
              P = (0, r.PP)("#FamilyHistory_JoinDeniedByMissingIpAddress", m);
              break;
            case g.NP.yu:
              P = (0, r.PP)("#FamilyHistory_JoinDeniedByFamilyCooldown", m, I);
              break;
            case g.NP.zA:
              P = (0, r.PP)("#FamilyHistory_JoinDeniedByUserCooldown", m, I);
              break;
            case g.NP.kv:
              P = (0, r.PP)("#FamilyHistory_JoinDeniedByOtherFamily", m);
              break;
            case g.NP.yt:
              P = (0, r.PP)("#FamilyHistory_AccountRemoved", m, f);
              break;
            case g.NP.H$:
              t.actor_steamid() === _.account
                ? (P = (0, r.PP)("#FamilyHistory_InviteRejected", m))
                : (P = (0, r.PP)("#FamilyHistory_InviteCancelled", m, f));
              break;
            case g.NP.am:
              P = (0, r.PP)("#FamilyHistory_PurchaseRequested", m);
              break;
            case g.NP.n0:
              P = (0, r.PP)("#FamilyHistory_ParentalSettingsDisabled", m, f);
              break;
            case g.NP.i6:
              P = (0, r.PP)("#FamilyHistory_ParentalSettingsEnabled", m, f);
              break;
            case g.NP.Pj:
              P = (0, r.PP)("#FamilyHistory_ParentalSettingsChanged", m, f);
              break;
            case g.NP.v9:
              P = (0, r.PP)(
                "#FamilyHistory_FamilyCooldownOverridesChanged",
                m,
                _.count,
              );
              break;
            case g.NP.yZ:
              P = (0, r.PP)("#FamilyHistory_PurchaseRequestCanceled", m);
              break;
            case g.NP.Wl:
              P = (0, r.PP)("#FamilyHistory_PurchaseRequestApproved", m, f);
              break;
            case g.NP.re:
              P = (0, r.PP)("#FamilyHistory_PurchaseRequestDeclined", m, f);
              break;
            case g.NP.Pm:
              P = (0, r.PP)("#FamilyHistory_CooldownSkipConsumed", m);
              break;
            case g.NP.qe:
              P = (0, r.PP)("#FamilyHistory_FamilyRestored", m);
              break;
            case g.NP.X9:
              P = (0, r.PP)("#FamilyHistory_ForceAcceptedInvite", m, f);
              break;
            default:
              P = (0, r.PP)("#FamilyHistory_UnknownChange");
              break;
          }
          return (0, e.jsxs)(C.Z, {
            className: (0, G.A)(n.Entry),
            focusable: !0,
            ...i,
            children: [
              (0, e.jsx)("div", {
                className: (0, G.A)(n.Timestamp),
                children: c,
              }),
              (0, e.jsx)("div", {
                className: (0, G.A)(n.EntryText),
                children: P,
              }),
            ],
          });
        }
        var se = u(96214),
          An = u(22185),
          bn = u(84278),
          H = u.n(bn),
          It = u(54407),
          Re = u(84676),
          Mn = u(19367),
          Ne = u.n(Mn),
          Rn = u(41635),
          En = u(71742),
          Tn = u(92298),
          wt = u.n(Tn),
          F = u(73712),
          $ = u(79365),
          Gn = u(21721),
          On = u(64238),
          Ln = u.n(On),
          Ye = u(29528);
        const Bn =
          u.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var kn = u(2259),
          Hn = u(1242);
        function Wn(s) {
          const {
              idxStart: t,
              idxEnd: n,
              renderItem: a,
              height: i,
              itemWidth: o,
              columnGap: l,
            } = s,
            c = [];
          for (let p = t; p < n; p++) c.push(a(p, o));
          return (0, e.jsx)(C.Z, {
            className: Hn.VirtualizedGridRow,
            style: { height: i, gap: l },
            children: c,
          });
        }
        function Un(s) {
          const {
              nItems: t,
              renderItem: n,
              nAspectRatio: a,
              nColumns: i = 7,
              nColumnGap: o = 10,
              nRowGap: l = 10,
              onWidthChanged: c,
            } = s,
            [p, d] = y.useState(0),
            m = Math.ceil(t / i),
            h = Math.max(0, Math.floor((p - (i - 1) * o) / i)),
            _ = Math.floor(h / a),
            f = y.useCallback(
              (P) => {
                d(P.borderBoxSize[0].inlineSize),
                  c &&
                    c(
                      P.target.ownerDocument.defaultView?.innerWidth || 0,
                      P.borderBoxSize[0].inlineSize,
                    );
              },
              [c],
            ),
            I = (0, kn.wY)(f),
            S = (P) =>
              (0, e.jsx)(
                Wn,
                {
                  idxStart: P * i,
                  idxEnd: Math.min(t, (P + 1) * i),
                  height: _,
                  itemWidth: h,
                  columnGap: o,
                  renderItem: n,
                },
                P,
              );
          return (0, e.jsx)(Ae, {
            ref: I,
            nRows: m,
            nItemHeight: _,
            nRowGap: l,
            renderItem: S,
          });
        }
        function Kn(s) {
          const { app: t, width: n, index: a, renderItem: i } = s,
            [o, l] = y.useState("loading"),
            c = (0, Gn.pd)(t.appid);
          if (c === void 0) return null;
          const p = o == "error" || !c;
          let d;
          p
            ? (d = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("img", {
                    className: Ye.Capsule,
                    src: Bn,
                    alt: t.name,
                    loading: "lazy",
                  }),
                  (0, e.jsx)("div", { className: Ye.Label, children: t.name }),
                ],
              }))
            : (d = (0, e.jsx)("img", {
                className: Ye.Capsule,
                src: c,
                alt: t.name,
                onLoad: () => l("loaded"),
                onError: () => l("error"),
              }));
          const m = {
            className: Ln()(Ye.AppGridItem, (p || o == "loaded") && Ye.Loaded),
            style: { width: n },
            fnScrollIntoViewHandler: () => !0,
            children: d,
          };
          return i(t, a, m);
        }
        function Dt(s) {
          const { rgApps: t, renderItem: n, ...a } = s,
            i = y.useCallback(
              (o, l) => {
                const c = t[o];
                return (0, e.jsx)(
                  Kn,
                  { app: c, width: l, index: o, renderItem: n },
                  c.appid,
                );
              },
              [t, n],
            );
          return (0, e.jsx)(Un, {
            nItems: t.length,
            renderItem: i,
            nAspectRatio: 600 / 900,
            ...a,
          });
        }
        var ut = u(56718),
          pt = u(20117),
          Nt = u(40358),
          zn = u(29522),
          Qn = u(16346),
          at = u(56925),
          qn = u(13977),
          Qe = u(34360),
          At = u(80702),
          bt = u(53107),
          Xe = u(82734),
          q = u(63043);
        function Mt(s, t) {
          (0, bt.EP)(s, `steam://open/games/details/${t}`);
        }
        function yt(s, t) {
          t && (J.TS.IN_CLIENT ? (window.location.href = t) : (0, bt.EP)(s, t));
        }
        function Vn(s) {
          const { app: t, sort: n } = s,
            a = (0, O.LH)(),
            i = (0, at.Uy)(t.appid),
            o = t.owner_steamids.filter((S) => S != a),
            l = (0, ae.DW)(o),
            c = (0, M.M8)(),
            d = (0, z.T)().data?.preferences().parenthesize_nicknames();
          let m = null;
          switch (t.exclude_reason) {
            case g.fO.RN:
              break;
            case g.fO.C2:
              m = "#FamilyGame_Excluded_License";
              break;
            case g.fO.zC:
            case g.fO.ro:
              m = "#FamilyGame_Excluded_FreeApp";
              break;
            case g.fO.xg:
              i
                ? (m = "#FamilyGame_Excluded_Private")
                : (m = "#FamilyGame_Excluded_PrivateLicense");
              break;
            case g.fO.sA:
            case g.fO.xO:
              m = "#FamilyGame_Excluded_OptedOut";
              break;
            case g.fO.DG:
              m = "#FamilyGame_Excluded_Nonrefundable_DLC";
              break;
            case g.fO.iz:
              m = "#FamilyGame_Excluded_ParentAppExcluded";
              break;
            case g.fO.Az:
              m = "#FamilyGame_Excluded_UnreleasedApp";
              break;
            case g.fO.jp:
              m = "#FamilyGame_Excluded_WrongAppType";
              break;
            case g.fO.DQ:
            case g.fO.SU:
            case g.fO.Wr:
              m = "#FamilyGame_Excluded_DevPackage";
              break;
            case g.fO.L6:
              m = "#FamilyGame_Excluded_FreeWeekend";
              break;
            case g.fO.xr:
              m = "#FamilyGame_Excluded_InvalidPackage";
              break;
            case g.fO.A1:
            case g.fO.w4:
            case g.fO.FN:
              m = "#FamilyGame_Excluded_Subscription";
              break;
            case g.fO.zg:
              m = "#FamilyGame_Excluded_SpecialPackage";
              break;
            case g.fO.CY:
              m = "#FamilyGame_Excluded_WrongLicenseType";
              break;
            case g.fO.Wv:
              m = "#FamilyGame_Excluded_NoShareableApps";
              break;
            case g.fO.cZ:
            case g.fO.Qs:
            case g.fO.DI:
              m = "#FamilyGame_Excluded_Borrowed";
              break;
            case g.fO.Ec:
              m = "#FamilyGame_Excluded_LicensePending";
              break;
            case g.fO.Yt:
              m = "#FamilyGame_Excluded_RefundPending";
              break;
            case g.fO.CB:
              m = "#FamilyGame_Excluded_TimedTrial";
              break;
            case g.fO.qG:
              m = "#FamilyGame_Excluded_LicenseInactive";
              break;
            default:
              m = "#FamilyGame_Excluded_Unknown";
              break;
          }
          let h;
          (n == "date_acquired-asc" || n == "date_acquired-desc") &&
            t.rt_time_acquired &&
            (h = (0, e.jsx)("div", {
              className: q.Acquired,
              children: (0, r.we)(
                "#FamilyGame_DateAcquired",
                (0, r.TW)(t.rt_time_acquired, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  weekday: void 0,
                }),
              ),
            }));
          const _ = (S) =>
            Rt(l[S].data, c.data?.get(new pt.b2(o[S]).GetAccountID()), d);
          let f, I;
          if (
            (m &&
              (f = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: q.Excluded,
                    children: (0, r.we)(m),
                  }),
                  (0, e.jsx)("div", {
                    className: q.ExcludedCode,
                    children: (0, r.we)(
                      "#FamilyGame_ExcludedCode",
                      t.exclude_reason,
                    ),
                  }),
                ],
              })),
            t.exclude_reason != g.fO.zC)
          )
            if (
              (i &&
                !f &&
                (f = (0, e.jsx)("div", {
                  className: q.Excluded,
                  children: (0, r.we)("#FamilyGame_Excluded_Private"),
                })),
              o.length == 0 || l.some((S) => !S.isSuccess))
            )
              I = null;
            else {
              const S = o.length != t.owner_steamids.length && !i;
              o.length == 1
                ? (I = (0, e.jsx)("div", {
                    className: q.LibraryOwnerSingle,
                    children: (0, r.we)(
                      S
                        ? "#FamilyGames_FromTheLibraryOf_Single_Owned"
                        : "#FamilyGames_FromTheLibraryOf_Single",
                      _(0),
                    ),
                  }))
                : (I = (0, e.jsxs)("div", {
                    className: q.LibraryOwnerMultiple,
                    children: [
                      (0, e.jsx)("div", {
                        className: q.Header,
                        children: (0, r.we)(
                          S
                            ? "#FamilyGames_FromTheLibraryOf_Header_Owned"
                            : "#FamilyGames_FromTheLibraryOf_Header",
                        ),
                      }),
                      (0, e.jsx)("ul", {
                        children: o.map((P, w) =>
                          (0, e.jsx)(
                            "li",
                            { className: q.Owner, children: _(w) },
                            P,
                          ),
                        ),
                      }),
                    ],
                  }));
            }
          return (0, e.jsxs)("div", {
            className: q.AdditionalHoverCtn,
            children: [f, I, h],
          });
        }
        function Zn(s) {
          const { item: t } = s,
            n = (0, at.Uy)(t.appid),
            a = (0, O.LH)();
          let i = t.owner_steamids.length;
          return (
            n && t.owner_steamids.includes(a) && (i = i - 1),
            i <= 1
              ? null
              : (0, e.jsx)("div", { className: q.LicenseCount, children: i })
          );
        }
        function Rt(s, t, n) {
          let a = s.m_strPlayerName;
          return t && (a = n ? `${s.m_strPlayerName} (${t})` : `${t}*`), a;
        }
        function Et(s) {
          const t = new pt.b2(s),
            n = (0, ae.js)(s),
            a = (0, M.M8)(),
            i = (0, z.T)(),
            o = a.data?.get(t.GetAccountID()),
            l = i.data?.preferences().parenthesize_nicknames();
          return !n.isSuccess || !a.isSuccess || !i.isSuccess
            ? null
            : Rt(n.data, o, l);
        }
        function Jn(s) {
          const { item: t, strSteamID: n } = s,
            a = Et(n),
            i = t.appid,
            { settings: o, mapAppsAllowed: l } = (0, se.S0)(n).data,
            c = l?.get(t.appid) || !1,
            p = (0, se.At)(n),
            d = y.useCallback(() => {
              (0, se.qR)(o, !c, [i]), p.mutate(o);
            }, [i, o, p, c]);
          return !a || !o || !o.is_enabled || o.applist_base_id == 0
            ? null
            : (0, e.jsx)(Qe.kt, {
                onSelected: d,
                children: (0, r.we)(
                  c ? "#FamilyGame_DenyForChild" : "#FamilyGame_AllowForChild",
                  a,
                ),
              });
        }
        function Yn(s) {
          const { item: t, bOwnsGame: n, familyContext: a } = s,
            i = (0, O.LH)(),
            { familyGroup: o, invalidateGamesList: l } = a,
            c = o.members.find((w) => w.steamid == i).role == g.PQ.s,
            { data: p } = (0, Nt.J$)({ appid: t.appid }),
            d = n || t.exclude_reason == g.fO.RN,
            m = (0, at.Uy)(t.appid),
            { mutateAsync: h } = (0, at.bD)(t.appid),
            _ = J.TS.IN_CLIENT,
            f = y.useCallback(async () => {
              await h(!m), l();
            }, [h, m, l]),
            I = y.useCallback(
              (w) => {
                p &&
                  yt(
                    (0, Xe.uX)(w),
                    `${J.TS.STORE_BASE_URL}${p.store_url_path}`,
                  );
              },
              [p],
            ),
            S = y.useCallback(
              (w) => {
                Mt((0, Xe.uX)(w), t.appid);
              },
              [t],
            ),
            P = _ && d;
          return (0, e.jsxs)(Qe.tz, {
            children: [
              d &&
                (0, e.jsx)(Qe.kt, {
                  onSelected: () => {
                    (0, qn.o)(t.appid, t.name);
                  },
                  children: (0, r.we)("#FamilyGame_PlayGame"),
                }),
              P &&
                (0, e.jsx)(Qe.kt, {
                  onSelected: S,
                  children: (0, r.we)("#FamilyGame_OpenAppDetails"),
                }),
              p?.visible &&
                (0, e.jsx)(Qe.kt, {
                  onSelected: I,
                  children: (0, r.we)("#FamilyGame_ViewStore"),
                }),
              (0, e.jsx)(Qe.kt, {
                onSelected: f,
                children: (0, r.we)(
                  m
                    ? "#FamilyGame_UnmarkAsPrivate"
                    : "#FamilyGame_MarkAsPrivate",
                ),
              }),
              c &&
                o.members
                  .filter((w) => w.role == g.PQ.sf)
                  .map((w) =>
                    (0, e.jsx)(
                      Jn,
                      { item: t, strSteamID: w.steamid },
                      w.steamid,
                    ),
                  ),
            ],
          });
        }
        function Xn(s) {
          const {
              app: t,
              item: n,
              bShowLicenseCount: a,
              sort: i,
              className: o,
              children: l,
              ...c
            } = s,
            p = (0, O.LH)(),
            d = y.useContext(Bt),
            m = (0, e.jsx)(Vn, { app: n, sort: i }),
            h = { direction: "right", style: { minWidth: "320px" } },
            _ = (0, zn.$5)(n.appid),
            { data: f } = (0, Nt.J$)(_),
            I = n.exclude_reason == g.fO.RN || n.exclude_reason == g.fO.zC,
            S = n.owner_steamids.some((ce) => ce == p),
            P = J.TS.IN_CLIENT,
            w = f && f.visible,
            Y = y.useCallback(
              (ce) => {
                (0, Qn.lX)(
                  (0, e.jsx)(Yn, { item: n, bOwnsGame: S, familyContext: d }),
                  ce,
                ),
                  ce.stopPropagation(),
                  ce.preventDefault();
              },
              [n, S, d],
            ),
            ue = (P && (I || S)) || w,
            ie = y.useCallback(
              (ce) => {
                P && (I || S)
                  ? Mt((0, Xe.uX)(ce), t.appid)
                  : w &&
                    yt(
                      (0, Xe.uX)(ce),
                      `${J.TS.STORE_BASE_URL}${f.store_url_path}`,
                    );
              },
              [t.appid, I, S, f, w, P],
            );
          return (0, e.jsx)(At.Q, {
            id: _,
            name: n.name,
            bPreventNavigation: S || I,
            bHidePrice: S,
            bShowWishlistButton: !S,
            hoverProps: h,
            className: q.HoverSource,
            elElementToAppend: m,
            children: (0, e.jsxs)(C.Z, {
              className: (0, G.A)(o, q.FamilyGameItem, ue && q.Selectable),
              focusable: !0,
              onActivate: ue ? ie : void 0,
              onContextMenu: Y,
              ...c,
              children: [l, a && (0, e.jsx)(Zn, { item: n })],
            }),
          });
        }
        function $n() {
          const [s, t] = y.useState(7),
            n = y.useCallback((a, i) => {
              let o;
              a <= parseInt(q.nNarrowWidth)
                ? (o = 3)
                : a <= parseInt(q.nMediumWidth)
                  ? (o = 5)
                  : (o = 7),
                t(o);
            }, []);
          return [s, n];
        }
        function ea(s) {
          const { nRows: n, setShowAll: a, setRows: i, nIncrement: o = 2 } = s,
            l = y.useRef(void 0),
            c = () => {
              i(n + o);
            };
          return (
            y.useEffect(() => {
              l.current?.BHasFocus() &&
                (l.current
                  .Node()
                  ?.GetLastFocusElement()
                  .scrollIntoView({ block: "end" }),
                l.current?.Node().ForceMeasureFocusRing());
            }, [n]),
            (0, e.jsxs)(C.Z, {
              className: q.Buttons,
              children: [
                (0, e.jsx)("div", {
                  className: q.ButtonWrapper,
                  children: (0, e.jsx)(j.$n, {
                    className: q.Button,
                    navRef: l,
                    onClick: c,
                    children: (0, r.we)("#FamilyGames_ShowMore"),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: q.ButtonWrapper,
                  children: (0, e.jsx)(j.$n, {
                    className: q.Button,
                    onClick: () => a(!0),
                    children: (0, r.we)("#FamilyGames_ShowAll"),
                  }),
                }),
              ],
            })
          );
        }
        function Tt(s, t) {
          const [n, a] = $n(),
            [i, o] = y.useState(2),
            [l, c] = y.useState(t),
            p = y.useMemo(
              () =>
                (l ? s : s.slice(0, n * i))?.map((_) => ({
                  appid: _.appid,
                  name: _.name,
                })),
              [l, s, i, n],
            ),
            d = Math.max(s.length - n * i, 0),
            m = l || d == 0;
          return {
            rgApps: p,
            nRows: i,
            setRows: o,
            bDisplayingAll: m,
            setShowAll: c,
            nColumns: n,
            OnWidthChanged: a,
          };
        }
        function ht(s) {
          const {
              rgSortedGames: t,
              strLabel: n,
              bShowLicenseCount: a = !0,
              sort: i,
            } = s,
            {
              rgApps: o,
              nRows: l,
              setRows: c,
              bDisplayingAll: p,
              setShowAll: d,
              nColumns: m,
              OnWidthChanged: h,
            } = Tt(t, !1),
            _ = y.useCallback(
              (f, I, S) =>
                (0, e.jsx)(Xn, {
                  app: f,
                  item: t[I],
                  bShowLicenseCount: a,
                  sort: i,
                  ...S,
                }),
              [t, a, i],
            );
          return t?.length
            ? (0, e.jsxs)("div", {
                className: q.FamilyGamesSection,
                children: [
                  (0, e.jsxs)("div", {
                    className: q.Header,
                    children: [
                      (0, e.jsx)("div", { className: q.Label, children: n }),
                      (0, e.jsx)("div", {
                        className: q.Count,
                        children: (0, r.we)("#FamilyGames_Count", t.length),
                      }),
                    ],
                  }),
                  (0, e.jsx)(Dt, {
                    rgApps: o,
                    nColumns: m,
                    onWidthChanged: h,
                    renderItem: _,
                  }),
                  !p && (0, e.jsx)(ea, { nRows: l, setRows: c, setShowAll: d }),
                ],
              })
            : null;
        }
        function Gt(s) {
          const {
              rgOptions: t,
              sort: n,
              setSort: a,
              bAscending: i,
              children: o,
            } = s,
            l = t.findIndex((d) => d == n),
            c = l != -1,
            p = t[(l + 1) % t.length];
          return (0, e.jsxs)(C.Z, {
            className: (0, G.A)(q.FamilyGamesSortSelector, c && q.Selected),
            onActivate: () => a(p),
            children: [
              o,
              (0, e.jsx)("div", {
                className: q.DirectionIndicator,
                children:
                  c && (0, e.jsx)(ut.i3G, { direction: i ? "up" : "down" }),
              }),
            ],
          });
        }
        function ta(s) {
          const { sort: t, setSort: n } = s;
          return (0, e.jsxs)(C.Z, {
            className: q.FamilyGamesSort,
            children: [
              (0, e.jsx)(Gt, {
                rgOptions: ["alpha-asc", "alpha-desc"],
                sort: t,
                setSort: n,
                bAscending: t == "alpha-asc",
                children: (0, r.we)("#FamilyGames_Sort_Alphabetical"),
              }),
              (0, e.jsx)(Gt, {
                rgOptions: ["date_acquired-desc", "date_acquired-asc"],
                sort: t,
                setSort: n,
                bAscending: t == "date_acquired-asc",
                children: (0, r.we)("#FamilyGames_Sort_DateAcquired"),
              }),
            ],
          });
        }
        function Ot(s) {
          const { strFilter: t, setFilter: n } = s,
            a = y.useCallback(
              (i) => {
                n(i.target.value);
              },
              [n],
            );
          return (0, e.jsx)(C.Z, {
            className: q.FamilyGamesSearchBox,
            children: (0, e.jsx)(j.pd, {
              className: q.Input,
              value: t,
              onChange: a,
              placeholder: (0, r.we)("#Parental_GameList_Search"),
            }),
          });
        }
        function na(s) {
          const { strFilter: t, setFilter: n, sort: a, setSort: i } = s;
          return (0, e.jsxs)(C.Z, {
            className: q.FamilyGamesControls,
            children: [
              (0, e.jsx)(ta, { sort: a, setSort: i }),
              (0, e.jsx)(Ot, { strFilter: t, setFilter: n }),
            ],
          });
        }
        const Lt = { bIncludeOwn: !0, bIncludeExcluded: !0 };
        function aa(s) {
          const { familyGroupID: t, children: n } = s,
            a = (0, x.Xq)(t, Lt),
            i = (0, x.Hs)(t),
            o = y.useMemo(
              () => ({
                familyGroupID: t,
                familyGroup: i.data?.toObject(),
                invalidateGamesList: a,
              }),
              [t, i.data, a],
            );
          return (0, e.jsx)(Bt.Provider, { value: o, children: n });
        }
        const Bt = y.createContext(void 0);
        function sa(s) {
          const { familyGroupID: t } = s,
            [n, a] = y.useState(""),
            [i, o] = y.useState("alpha-asc"),
            l = (0, x.yM)(t, Lt),
            c = (0, x.YW)(l.data, i, n),
            p = y.useMemo(
              () => c?.filter((h) => h.exclude_reason == g.fO.RN),
              [c],
            ),
            d = y.useMemo(
              () =>
                c?.filter(
                  (h) =>
                    h.exclude_reason != g.fO.RN && h.exclude_reason != g.fO.zC,
                ),
              [c],
            ),
            m = y.useMemo(
              () => c?.filter((h) => h.exclude_reason == g.fO.zC),
              [c],
            );
          return (0, e.jsxs)(aa, {
            familyGroupID: t,
            children: [
              l.isFetching &&
                (0, e.jsx)("div", {
                  className: q.Loading,
                  children: (0, e.jsx)(T.t, {}),
                }),
              l.isError &&
                (0, e.jsx)("div", {
                  className: q.Error,
                  children: (0, r.we)("#FamilyGames_Error", l.error),
                }),
              l.isSuccess &&
                (0, e.jsxs)("div", {
                  className: q.FamilyGames,
                  children: [
                    l.data?.length > 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(na, {
                            strFilter: n,
                            setFilter: a,
                            sort: i,
                            setSort: o,
                          }),
                          (0, e.jsx)(ht, {
                            rgSortedGames: p,
                            strLabel: (0, r.we)("#FamilyGames_IncludedGames"),
                            sort: i,
                          }),
                          (0, e.jsx)(ht, {
                            rgSortedGames: d,
                            bShowLicenseCount: !1,
                            strLabel: (0, r.we)("#FamilyGames_ExcludedGames"),
                            sort: i,
                          }),
                          (0, e.jsx)(ht, {
                            rgSortedGames: m,
                            bShowLicenseCount: !1,
                            strLabel: (0, r.we)("#FamilyGames_FreeGames"),
                            sort: i,
                          }),
                          c?.length == 0 &&
                            (0, e.jsx)("div", {
                              className: q.Empty,
                              children: (0, r.we)("#FamilyGames_EmptySearch"),
                            }),
                        ],
                      }),
                    l.data?.length == 0 &&
                      (0, e.jsx)("div", {
                        className: q.Empty,
                        children: (0, r.we)("#FamilyGames_NoGames"),
                      }),
                  ],
                }),
            ],
          });
        }
        var st = u(71421),
          kt = u(23903),
          gt = u(80902),
          Ht = u(57168),
          Wt = u(83153),
          ia = u(35038),
          ft = u(84192),
          ra = u(68312),
          it = u(10142),
          Ut = u(24525);
        function Kt(s, t) {
          const n = Ne()()
              .startOf("day")
              .add(30 * s, "minutes"),
            a = Ne()()
              .startOf("day")
              .add(30 * t, "minutes"),
            i = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              hour: "numeric",
              minute: "numeric",
            });
          return (
            i.format(n.toDate()).replace(" ", "\xA0") +
            "-" +
            i.format(a.toDate()).replace(" ", "\xA0")
          );
        }
        function _t(s) {
          if (s == BigInt(0)) return (0, r.we)("#Parental_Playtime_Never");
          if (s == BigInt(0xffffffffffff))
            return (0, r.we)("#Parental_Playtime_AnyTime");
          let t = [],
            n = -1;
          for (let a = 0; a < 48; a++)
            s & (BigInt(1) << BigInt(a))
              ? n == -1 && (n = a)
              : n != -1 && (t.push(Kt(n, a)), (n = -1));
          return n != -1 && (t.push(Kt(n, 48)), (n = -1)), t.join(", ");
        }
        var Z = u(18735),
          oa = u(41735),
          la = u.n(oa),
          As = u(72609);
        const rt = [Z.ED, Z.M, Z.mx, Z.T4, Z.u7];
        function zt(s) {
          let t = [];
          switch (s) {
            case Z.ED:
              t.push(Z.M), t.push(Z.mx);
            case Z.mx:
              t.push(Z.T4);
            case Z.T4:
              t.push(Z.u7);
              break;
          }
          return t;
        }
        let $e = new Map();
        $e.set(Z.M, Z.ED),
          $e.set(Z.mx, Z.ED),
          $e.set(Z.T4, Z.mx),
          $e.set(Z.u7, Z.T4);
        function xt(s) {
          let t = [],
            n = $e.get(s);
          return n && (t.push(n), t.push(...xt(n))), t;
        }
        function ca(s) {
          return (0, gt.I)({
            queryKey: [
              "examples_for_content_descriptor",
              s === null ? null : s.valueOf(),
            ],
            queryFn: async () => {
              if (s === null) return [];
              const t = new URLSearchParams();
              return (
                t.append("filter", "examplesforcontentdescriptors"),
                t.append("ignore_preferences", "1"),
                t.append("category1", "992,994,998"),
                t.append("descids", s.valueOf().toString()),
                t.append("json", "1"),
                (
                  await la()({
                    url: `${J.TS.STORE_BASE_URL}search/results/?${t.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function Qt(s) {
          let t = null;
          switch (s) {
            case Z.ED:
              t = "#ContentDescriptor_GeneralMatureContent";
              break;
            case Z.M:
              t = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case Z.mx:
              t = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case Z.T4:
              t = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case Z.u7:
              t = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, r.we)(t);
        }
        function ma(s, t = !1) {
          let n = "";
          switch (s) {
            case Z.ED:
              n += (0, r.we)(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case Z.M:
              n += (0, r.we)(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case Z.mx:
              n += (0, r.we)(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case Z.T4:
              n += (0, r.we)(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case Z.u7:
              n += (0, r.we)(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            t &&
              (s === Z.T4 || s === Z.u7) &&
              (n += " " + (0, r.we)("#ContentDescriptor_Affirm18YearsOld")),
            n
          );
        }
        function da() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function bs() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function Ms(s) {
          return !UserConfig.logged_in ||
            !s ||
            !s.content_descriptors_to_exclude
            ? da()
            : s.content_descriptors_to_exclude.map(
                (t) => t.content_descriptorid,
              );
        }
        function ua(s, t) {
          return t
            .members()
            .filter((a) => a.role() == g.PQ.sf && a.steamid() != s)
            .map((a) => a.steamid());
        }
        function pa(s) {
          const { steamid: t, settings: n, familyGroup: a } = s,
            i = (0, se.vM)(t, n),
            o = (0, se.Ut)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.p8)(i, "#FamilyManagement_ErrorModifyParentalSettingsGeneric"),
            (0, x.p8)(
              o,
              "#FamilyManagement_ErrorModifyParentalSettingsGeneric",
            );
          let [c, p] = (0, y.useState)(""),
            d = ua(t, a);
          const m = (0, ae.DW)(d),
            h = Rn.$D(m, (S) => S.isSuccess),
            _ = (0, y.useMemo)(() => {
              let S = [];
              if (
                (S.push({
                  label: (0, r.we)("#Parental_EnabledSetting"),
                  data: "enabled",
                }),
                S.push({
                  label: (0, r.we)("#Parental_DisabledSetting"),
                  data: "disabled",
                }),
                h > 0)
              ) {
                S.push({ bIsSeparator: !0 });
                for (let P of m) {
                  if (!P.isSuccess) continue;
                  let w = (0, r.we)(
                    "#Parental_CopySettingsFrom",
                    P.data.m_strPlayerName,
                  );
                  S.push({
                    label: w,
                    data: `copy_${P.data.GetSteamIDAsString()}`,
                  });
                }
              }
              return S;
            }, [m, h]),
            f = y.useCallback(
              (S) => {
                l(null);
                let P = S.data;
                if (P == "enabled") i.mutate();
                else if (P == "disabled") o.mutate();
                else if (P.startsWith("copy_")) {
                  let w = P.split("_");
                  p(w[1]);
                }
              },
              [l, i, o],
            );
          let I = n.is_enabled ? "enabled" : "disabled";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ya, {
                steamid: t,
                otherChildrenQuery: m,
                confirmCopy: c,
                setConfirmCopy: p,
              }),
              (0, e.jsx)(j.Vb, {
                strClassName: F.DropDownCtn,
                controlled: !0,
                bottomSeparator: "none",
                label: (0, r.we)("#Parental_EnableDropdown"),
                rgOptions: _,
                selectedOption: I,
                onChange: f,
                bMatchWidth: !1,
              }),
            ],
          });
        }
        function ya(s) {
          const {
              steamid: t,
              otherChildrenQuery: n,
              confirmCopy: a,
              setConfirmCopy: i,
            } = s,
            o = (0, ae.js)(t),
            l = (0, se.Xl)(),
            c = y.useCallback(() => {
              a.length != 0 &&
                (l.mutate({ steamidSrc: a, steamidDest: t }), i(""));
            }, [t, a, i, l]);
          let p = "";
          if (a.length > 0) {
            for (let h of n)
              !h.isSuccess ||
                h.data.GetSteamIDAsString() != a ||
                (p = h.data.m_strPlayerName);
            p.length == 0 && (p = a);
          }
          let d = t;
          o.isSuccess && (d = o.data.m_strPlayerName);
          let m = (0, r.we)("#Parental_CopySettingsConfirmation_Desc", d, p);
          return (0, e.jsx)(k.EN, {
            active: a.length > 0,
            children: (0, e.jsx)(k.o0, {
              closeModal: () => i(""),
              onOK: c,
              strTitle: (0, r.we)("#Parental_CopySettingsConfirmation_Title"),
              children: (0, e.jsx)("div", {
                className: F.ConfirmCopyDescription,
                children: m,
              }),
            }),
          });
        }
        function ha(s) {
          const { steamid: t, settings: n } = s,
            a = (0, se.At)(t),
            { setErrorMessage: i } = (0, x.RC)();
          (0, x.p8)(a, "#FamilyManagement_ErrorModifyParentalSettingsGeneric");
          const o = y.useMemo(
              () => [
                { label: (0, r.we)("#Parental_Baselist_AllGames"), data: 0 },
                { label: (0, r.we)("#Parental_Baselist_NoGames"), data: 1 },
              ],
              [],
            ),
            l = y.useCallback(
              (c, p) => {
                i(null), (n.applist_base_id = c.data), a.mutate(n);
              },
              [n, a, i],
            );
          return (0, e.jsx)(j.Vb, {
            focusable: !0,
            strClassName: F.DropDownCtn,
            bottomSeparator: "none",
            label: (0, r.we)("#Parental_Baselist_Label"),
            rgOptions: o,
            selectedOption: n.applist_base_id,
            onChange: l,
          });
        }
        function ga(s) {
          const { steamid: t, settings: n, game: a, ...i } = s,
            o = (0, se.At)(t),
            l = a.appid,
            c = n.applist_custom.find((_) => _.appid == l),
            { setErrorMessage: p } = (0, x.RC)();
          (0, x.p8)(o, "#FamilyManagement_ErrorModifyParentalSettingsGeneric");
          const d = c?.is_allowed || !1,
            m =
              a.img_icon_url ||
              (a.img_icon_hash &&
                J.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  l +
                  "/" +
                  a.img_icon_hash +
                  ".jpg"),
            h = y.useCallback(() => {
              p(null), (0, se.qR)(n, !d, [l]), o.mutate(n);
            }, [l, n, o, p, d]);
          return (0, e.jsxs)(C.Z, {
            className: (0, G.A)(F.ParentalGameRow, d && F.Allowed),
            onActivate: h,
            ...i,
            children: [
              m && (0, e.jsx)("img", { className: F.Icon, src: m }),
              !m && (0, e.jsx)("div", { className: F.Icon }),
              (0, e.jsx)("div", { className: F.Name, children: a.name }),
              (0, e.jsx)(j.Od, {
                className: F.RoundCheckbox,
                checked: d,
                onChange: h,
              }),
            ],
          });
        }
        function fa(s) {
          const {
              setContentDescriptors: t,
              selectedContentDescriptors: n,
              showFilter: a,
              setShowFilter: i,
              onDismiss: o,
            } = s,
            [l, c] = (0, y.useState)(n),
            p = (m) => (h) => {
              let _ = [];
              if (h) {
                const I = [m].concat(xt(m));
                for (const S of rt)
                  (l.includes(S) || I.includes(S)) && _.push(S);
              } else {
                const I = [m].concat(zt(m));
                for (const S of rt)
                  l.includes(S) && !I.includes(S) && _.push(S);
              }
              c(_);
            },
            d = [
              {
                label: (0, r.we)("#Parental_GameList_ShowAllFilter"),
                data: "show_all",
              },
              {
                label: (0, r.we)("#Parental_GameList_ShowAllowedOnlyFilter"),
                data: "show_allowed_only",
              },
              {
                label: (0, r.we)("#Parental_GameList_ShowDeniedOnlyFilter"),
                data: "show_denied_only",
              },
            ];
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(j.Y9, {
                children: (0, r.we)(
                  "#Parental_GameList_ShowGamesThatAreFilterHeader",
                ),
              }),
              (0, e.jsx)(C.Z, {
                className: F.FilterDropdownCtn,
                children: (0, e.jsx)(j.ZU, {
                  focusable: !0,
                  rgOptions: d,
                  selectedOption: a,
                  onChange: (m) => i(m.data),
                }),
              }),
              (0, e.jsx)(j.Y9, {
                children: (0, r.we)(
                  "#Parental_GameList_ContentDescriptorFilterHeader",
                ),
              }),
              (0, e.jsx)(C.Z, {
                className: F.FilterSection,
                children: rt.map((m) => {
                  const h = l.includes(m),
                    _ = p(m);
                  return (0, e.jsxs)(
                    C.Z,
                    {
                      className: F.FilterRow,
                      children: [
                        (0, e.jsx)(C.Z, {
                          className: F.FilterInfo,
                          children: Qt(m),
                        }),
                        (0, e.jsx)(C.Z, {
                          className: F.FilterToggle,
                          children: (0, e.jsx)(j.Yh, {
                            checked: h,
                            onChange: _,
                          }),
                        }),
                      ],
                    },
                    m,
                  );
                }),
              }),
              (0, e.jsx)(j.CB, {
                onCancel: o,
                onOK: () => {
                  t(l), o();
                },
                strOKText: (0, r.we)("#Parental_GameList_Button_Apply"),
                className: F.FilterModalButtons,
              }),
            ],
          });
        }
        function _a(s) {
          const {
              strFilter: t,
              setFilter: n,
              strView: a,
              setView: i,
              setContentDescriptors: o,
              selectedContentDescriptors: l,
              showFilter: c,
              setShowFilter: p,
            } = s,
            [d, m] = (0, y.useState)(!1);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(k.mt, {
                active: d,
                onDismiss: () => m(!1),
                className: F.FilterModal,
                children: (0, e.jsx)(fa, {
                  selectedContentDescriptors: l,
                  setContentDescriptors: o,
                  showFilter: c,
                  setShowFilter: p,
                  onDismiss: () => m(!1),
                }),
              }),
              (0, e.jsxs)(C.Z, {
                className: F.ParentalGameListHeader,
                children: [
                  (0, e.jsx)("div", {
                    className: F.Title,
                    children: (0, r.we)("#Parental_GameList_Header"),
                  }),
                  (0, e.jsxs)(C.Z, {
                    className: F.SearchCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: F.SelectorCtn,
                        children: [
                          (0, e.jsx)(C.Z, {
                            className: (0, G.A)(
                              F.ViewSelector,
                              a == "list" && F.Selected,
                            ),
                            onActivate: () => i("list"),
                            children: (0, e.jsx)(st.he, {
                              toolTipContent: (0, r.we)(
                                "#Parental_GameList_List",
                              ),
                              children: (0, e.jsx)(ut.B8B, {}),
                            }),
                          }),
                          (0, e.jsx)(C.Z, {
                            className: (0, G.A)(
                              F.ViewSelector,
                              a == "grid" && F.Selected,
                            ),
                            onActivate: () => i("grid"),
                            children: (0, e.jsx)(st.he, {
                              toolTipContent: (0, r.we)(
                                "#Parental_GameList_Grid",
                              ),
                              children: (0, e.jsx)(ut.F7C, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)(Ot, { strFilter: t, setFilter: n }),
                      (0, e.jsx)(C.Z, {
                        className: F.FilterDropdownButton,
                        onActivate: () => m(!0),
                        children: (0, e.jsx)(st.he, {
                          toolTipContent: (0, r.we)(
                            "#Parental_GameList_Filter",
                          ),
                          children: (0, e.jsx)(B.nkJ, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function xa(s) {
          const t = (0, ra.KV)(),
            n = ["ParentalSearchSuggestions", s];
          return (0, gt.I)({
            queryKey: n,
            queryFn: async () => {
              if (s.length < 2) return [];
              const a = ia.w.Init(Wt.pI);
              a.Body().set_query_name(JSON.stringify(n)),
                a.Body().set_search_term(s),
                (0, ft.rV)(a),
                (0, ft.Bn)(a, { include_basic_info: !0, include_assets: !0 }),
                (0, ft.hc)(a, {
                  type_filters: { include_games: !0 },
                  price_filters: { only_free_items: !0 },
                }),
                a.Body().set_max_results(20),
                a.Body().set_use_spellcheck(!0);
              let i = await Wt.Fs.SearchSuggestions(t, a);
              return i.BSuccess()
                ? i
                    .Body()
                    .store_items()
                    .map((o) => {
                      const l = o.name().replace(/^The |^A |^An /i, "");
                      return {
                        appid: o.appid(),
                        name: o.name(),
                        sort_as: l,
                        capsule_filename: o.assets().library_capsule(),
                        img_icon_hash: o.assets().community_icon(),
                        searchSuggestion: !0,
                      };
                    })
                : [];
            },
            placeholderData: Ht.rX,
          });
        }
        function va(s) {
          const t = s.applist_custom.map((a) => a.appid),
            n = (0, Re.zX)(t, { include_assets: !0 });
          return (0, gt.I)({
            queryKey: ["ParentalStoreItems", t],
            queryFn: async () =>
              t
                .map((a) => {
                  const i = it.A.Get().GetApp(a);
                  return (
                    i && {
                      appid: i.GetAppID(),
                      name: i.GetName(),
                      capsule_filename: i.GetAssets().GetLibraryCapsuleURL(),
                      img_icon_url: i.GetAssets().GetCommunityIconURL(),
                      parentalApp: !0,
                    }
                  );
                })
                .filter((a) => !!a),
            enabled: n != Re.Sq,
            placeholderData: Ht.rX,
          });
        }
        function Pa(s, t, n) {
          const a = (0, x.vo)()?.data.family_groupid(),
            i = (0, x.yM)(a, {
              bIncludeOwn: !0,
              bIncludeExcluded: !0,
              bIncludeNonGames: !0,
              for_account_id: parseInt(s.steamid),
            }).data;
          let o = va(s).data,
            l = xa(t).data;
          const [c, p] = y.useMemo(() => {
            const _ = pt.b2
                .InitFromAccountID(parseInt(s.steamid), J.TS.EUNIVERSE)
                .ConvertTo64BitString(),
              f = i?.filter(
                (P) =>
                  P.app_type != Ut.B7 &&
                  (P.exclude_reason == g.fO.RN || P.owner_steamids.includes(_)),
              ),
              I = i?.filter(
                (P) => P.app_type == Ut.B7 && P.owner_steamids.includes(_),
              ),
              S = t ? l?.concat(I || []) : [];
            return [f, S];
          }, [i, l, t, s.steamid]);
          (l = p?.filter((_) => c.findIndex((f) => f.appid == _.appid) == -1)),
            (o = o?.filter(
              (_) => p.findIndex((f) => f.appid == _.appid) == -1,
            ));
          const d = y.useMemo(() => {
              const _ = new Map();
              return (
                o?.forEach((f) => _.set(f.appid, f)),
                c?.forEach((f) => _.set(f.appid, f)),
                Array.from(_.values())
              );
            }, [c, o]),
            m = (0, x.YW)(d, "alpha-asc", t, n),
            h = (0, x.YW)(p, "alpha-asc", t, n);
          return [m, h];
        }
        function Sa(s) {
          const {
              strToken: t,
              steamid: n,
              nAllowed: a,
              nTotal: i,
              setAllowAllApps: o,
            } = s,
            l = Et(n);
          return (0, e.jsxs)("div", {
            className: F.SectionHeader,
            children: [
              (0, e.jsx)("div", {
                className: F.Title,
                children: (0, r.we)(t + (i ? "_Count" : ""), a, i, l),
              }),
              o &&
                (0, e.jsxs)(C.Z, {
                  className: F.SelectorCtn,
                  children: [
                    (0, e.jsx)(j.$n, {
                      onClick: () => o(!0),
                      children: (0, r.we)("#Parental_GameList_AllowAll"),
                    }),
                    (0, e.jsx)(j.$n, {
                      onClick: () => o(!1),
                      children: (0, r.we)("#Parental_GameList_DenyAll"),
                    }),
                  ],
                }),
            ],
          });
        }
        function qt(s) {
          const {
              strTitleToken: t,
              nAllowed: n,
              nTotal: a,
              setAllowAllApps: i,
              strView: o,
              steamid: l,
              settings: c,
              rgAllApps: p,
            } = s,
            d = !0,
            {
              rgApps: m,
              bDisplayingAll: h,
              nColumns: _,
              OnWidthChanged: f,
            } = Tt(p, d);
          return (
            (0, En.wT)(h, "Parental Control Library not displaying all"),
            p.length == 0
              ? null
              : (0, e.jsxs)("div", {
                  className: F.ParentalGameSection,
                  children: [
                    (0, e.jsx)(Sa, {
                      strToken: t,
                      steamid: l,
                      nAllowed: n,
                      nTotal: a,
                      setAllowAllApps: i,
                    }),
                    o == "list" &&
                      (0, e.jsx)(Ca, {
                        steamid: l,
                        settings: c,
                        rgSortedGames: p,
                      }),
                    o == "grid" &&
                      (0, e.jsx)(Ia, {
                        steamid: l,
                        settings: c,
                        rgSortedGames: m,
                        nColumns: _,
                        onWidthChanged: f,
                      }),
                  ],
                })
          );
        }
        function ja(s) {
          const { steamid: t, settings: n, mapAppsAllowed: a } = s,
            i = (0, se.At)(t),
            [o, l] = y.useState(""),
            [c, p] = y.useState([]),
            [d, m] = y.useState("show_all"),
            [h, _] = y.useState("grid");
          let [f, I] = Pa(n, o, c);
          const S = f?.filter((ie) => !(0, se.or)(ie.appid, !0, n, a)),
            P = new Set(S.map((ie) => ie.appid)),
            w = S?.length || 0,
            Y = (!o && f?.length) || 0,
            ue = y.useCallback(
              (ie) => {
                (0, se.qR)(
                  n,
                  ie,
                  f.map((ce) => ce.appid),
                ),
                  i.mutate(n);
              },
              [n, f, i],
            );
          return f.length == 0 && !o && c.length === 0
            ? null
            : (d === "show_allowed_only"
                ? (f = f.filter((ie) => P.has(ie.appid)))
                : d === "show_denied_only" &&
                  (f = f.filter((ie) => !P.has(ie.appid))),
              (0, e.jsxs)("div", {
                className: F.ParentalGameListOuter,
                children: [
                  (0, e.jsx)(_a, {
                    strFilter: o,
                    setFilter: l,
                    strView: h,
                    setView: _,
                    selectedContentDescriptors: c,
                    setContentDescriptors: p,
                    showFilter: d,
                    setShowFilter: m,
                  }),
                  (0, e.jsxs)("div", {
                    className: F.Content,
                    children: [
                      (0, e.jsx)(qt, {
                        strTitleToken: "#Parental_GameList_Library",
                        strView: h,
                        nAllowed: w,
                        nTotal: Y,
                        setAllowAllApps: !o && ue,
                        steamid: t,
                        settings: n,
                        rgAllApps: f,
                      }),
                      (0, e.jsx)(qt, {
                        strTitleToken: "#Parental_GameList_Store",
                        strView: h,
                        steamid: t,
                        settings: n,
                        rgAllApps: I,
                      }),
                      f.length + I.length == 0 &&
                        (0, e.jsx)("div", {
                          className: F.Empty,
                          children: (0, r.we)("#Parental_GameList_Empty"),
                        }),
                    ],
                  }),
                ],
              }));
        }
        function Ca(s) {
          const { steamid: t, settings: n, rgSortedGames: a } = s,
            i = parseInt(F.nParentalListRowHeight),
            o = y.useCallback(
              (l) => (0, e.jsx)(ga, { steamid: t, settings: n, game: a[l] }, l),
              [t, n, a],
            );
          return (0, e.jsx)(Ae, {
            nRows: a?.length,
            nItemHeight: i,
            nRowGap: 0,
            renderItem: o,
          });
        }
        function Fa(s) {
          const {
            app: t,
            item: n,
            bIsAllowed: a,
            setAllowed: i,
            className: o,
            children: l,
            ...c
          } = s;
          return (0, e.jsx)(C.Z, {
            className: (0, G.A)(o, F.ParentalApp, a && F.Allowed),
            focusable: !0,
            onActivate: () => i(t, !a),
            ...c,
            children: l,
          });
        }
        function Ia(s) {
          const {
              steamid: t,
              settings: n,
              rgSortedGames: a,
              nColumns: i,
              onWidthChanged: o,
            } = s,
            l = (0, se.At)(t),
            c = y.useMemo(
              () => a?.map((m) => ({ appid: m.appid, name: m.name })),
              [a],
            ),
            p = y.useCallback(
              (m, h) => {
                (0, se.qR)(n, h, [m.appid]), l.mutate(n);
              },
              [n, l],
            ),
            d = y.useCallback(
              (m, h, _) => {
                const f =
                  n.applist_custom.find((I) => I.appid == m.appid)
                    ?.is_allowed || !1;
                return (0, e.jsx)(Fa, {
                  app: m,
                  item: c[h],
                  bIsAllowed: f,
                  setAllowed: p,
                  ..._,
                });
              },
              [c, n, p],
            );
          return (0, e.jsx)(Dt, {
            rgApps: c,
            nColumns: i,
            onWidthChanged: o,
            renderItem: d,
          });
        }
        function wa(s) {
          const { steamid: t, settings: n, mapAppsAllowed: a } = s;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(ha, { steamid: t, settings: n }),
              n.applist_base_id != 0 &&
                (0, e.jsx)(ja, { steamid: t, settings: n, mapAppsAllowed: a }),
            ],
          });
        }
        function Da(s) {
          const { steamid: t, settings: n, feature: a, label: i } = s,
            o = !!(n.enabled_features & (1 << a)),
            l = (0, se.At)(t),
            c = y.useCallback(
              (p) => {
                const d = n.enabled_features ^ (1 << a);
                (n.enabled_features = d), l.mutate(n);
              },
              [l, n, a],
            );
          return (0, e.jsx)(j.y4, {
            className: F.ToggleCtn,
            bottomSeparator: "none",
            label: (0, r.we)(i),
            checked: o,
            onChange: c,
          });
        }
        const ot = {
          [$.Gm]: null,
          [$.ip]: {
            featureDescription: "#Parental_Feature_Store",
            requestDescription: "#Parental_FeatureRequest_Store",
            requestDescriptionSelf: "#Parental_FeatureRequest_Store_Self",
          },
          [$.qR]: {
            featureDescription: "#Parental_Feature_Community",
            requestDescription: "#Parental_FeatureRequest_Community",
            requestDescriptionSelf: "#Parental_FeatureRequest_Community_Self",
          },
          [$.WJ]: {
            featureDescription: "#Parental_Feature_Profile",
            requestDescription: "#Parental_FeatureRequest_Profile",
            requestDescriptionSelf: "#Parental_FeatureRequest_Profile_Self",
          },
          [$.M]: {
            featureDescription: "#Parental_Feature_Friends",
            requestDescription: "#Parental_FeatureRequest_Friends",
            requestDescriptionSelf: "#Parental_FeatureRequest_Friends_Self",
          },
          [$.S9]: {
            featureDescription: "#Parental_Feature_News",
            requestDescription: "#Parental_FeatureRequest_News",
            requestDescriptionSelf: "#Parental_FeatureRequest_News_Self",
          },
          [$.ut]: {
            featureDescription: "#Parental_Feature_Trading",
            requestDescription: "#Parental_FeatureRequest_Trading",
            requestDescriptionSelf: "#Parental_FeatureRequest_Trading_Self",
          },
          [$.OK]: {
            featureDescription: "#Parental_Feature_Settings",
            requestDescription: "#Parental_FeatureRequest_Settings",
            requestDescriptionSelf: "#Parental_FeatureRequest_Settings_Self",
          },
          [$.U8]: {
            featureDescription: "#Parental_Feature_Console",
            requestDescription: "#Parental_FeatureRequest_Console",
            requestDescriptionSelf: "#Parental_FeatureRequest_Console_Self",
          },
          [$.rE]: {
            featureDescription: "#Parental_Feature_Browser",
            requestDescription: "#Parental_FeatureRequest_Browser",
            requestDescriptionSelf: "#Parental_FeatureRequest_Browser_Self",
          },
          [$.$R]: null,
          [$.ms]: null,
          [$.FC]: null,
          [$.bV]: null,
          [$.lA]: null,
          [$.dB]: null,
          [$.b]: {
            featureDescription: "#Parental_Feature_Desktop",
            requestDescription: "#Parental_FeatureRequest_Desktop",
            requestDescriptionSelf: "#Parental_FeatureRequest_Desktop_Self",
          },
          [$.Xd]: null,
        };
        function Na(s) {
          const { steamid: t, settings: n } = s,
            a = y.useRef(n.enabled_features),
            i = [$.ip, $.qR, $.WJ, $.M],
            o = [$.$R, $.ms, $.FC, $.bV, $.lA, $.dB],
            l = [];
          for (let c = $.ip; c < $.Xd; c++)
            !o.includes(c) &&
              (i.includes(c) || a.current & (1 << c)) &&
              l.push(c);
          return (0, e.jsxs)("div", {
            className: F.ParentalFeatures,
            children: [
              (0, e.jsx)("hr", {}),
              l.map((c) =>
                ot[c]
                  ? (0, e.jsxs)(
                      y.Fragment,
                      {
                        children: [
                          (0, e.jsx)(Da, {
                            steamid: t,
                            settings: n,
                            feature: c,
                            label: ot[c].featureDescription,
                          }),
                          (0, e.jsx)("hr", {}),
                        ],
                      },
                      c,
                    )
                  : null,
              ),
            ],
          });
        }
        function Aa(s) {
          const {
              className: t,
              enabled: n,
              locked: a,
              slotIndex: i,
              onToggle: o,
              dragState: l,
              setDragState: c,
              ...p
            } = s,
            [d, m] = (0, y.useState)(!1),
            h = (0, y.useRef)(void 0),
            _ = (w) => {
              l !== null && !a && n !== l && o(i),
                w.target.releasePointerCapture(w.pointerId);
            },
            f = (w) => {
              w.target.releasePointerCapture(w.pointerId);
            },
            I = (w) => {
              c(!n), m(!0), o(i), w.target.releasePointerCapture(w.pointerId);
            },
            S = () => {
              c(null);
            },
            P = () => {
              !a && !d && o(i), c(null), m(!1);
            };
          return (0, e.jsx)(C.Z, {
            ref: h,
            ...p,
            className: (0, G.A)(
              t,
              F.ParentalPlaytimeWindowSelector,
              n && F.Enabled,
              a && F.Locked,
            ),
            onActivate: P,
            onPointerDown: I,
            onPointerEnter: _,
            onPointerLeave: f,
            onPointerUp: S,
          });
        }
        function Vt(s) {
          const {
              className: t,
              nWindows: n,
              nLockedWindows: a,
              onToggle: i,
            } = s,
            o = [],
            l = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              hour: "numeric",
              minute: "numeric",
            }),
            [c, p] = (0, y.useState)(null);
          for (let d = 0; d < 48; d++) {
            const m = n & (BigInt(1) << BigInt(d)),
              h = a && a & (BigInt(1) << BigInt(d));
            o.push(
              (0, e.jsx)(
                Aa,
                {
                  enabled: !!m,
                  locked: !!h,
                  slotIndex: d,
                  onToggle: i,
                  dragState: c,
                  setDragState: p,
                },
                d,
              ),
            );
          }
          for (let d = 0; d < 48; d = d + 8) {
            const m = { gridColumnStart: d + 1, gridColumnEnd: d + 9 };
            o.push(
              (0, e.jsx)(
                "div",
                { className: (0, G.A)(F.HashMark, "HashMark" + d), style: m },
                "HashMark" + d,
              ),
            );
          }
          for (let d = 0; d <= 48; d = d + 8) {
            const m = Ne()()
              .startOf("day")
              .add(Math.floor(d / 2), "hours");
            let h = l.format(m.toDate());
            const _ = d == 0 ? 0 : d - 4,
              f = d == 0 || d == 48 ? 4 : 8,
              I = { gridColumnStart: _ + 1, gridColumnEnd: _ + 1 + f };
            o.push(
              (0, e.jsx)(
                "div",
                {
                  className: (0, G.A)(F.HourMarker, "Hour" + d),
                  style: I,
                  children: h,
                },
                "Hour" + d,
              ),
            );
          }
          return (0, e.jsx)(C.Z, {
            className: (0, G.A)(F.ParentalPlaytimeGrid, t),
            onMouseLeave: () => p(null),
            children: o,
          });
        }
        function ba(s) {
          const {
              steamid: t,
              settings: n,
              dayIndexStart: a,
              closeModal: i,
            } = s,
            [o, l] = y.useState(a),
            c = y.useRef(Object.assign({}, n)),
            p = (0, se.At)(t),
            d = () => {
              p.mutate(c.current), i();
            };
          return (0, e.jsx)(k.o0, {
            className: F.ParentalPlaytimeWindowsDialog,
            closeModal: i,
            onOK: d,
            strTitle: (0, e.jsx)(j.Y9, {
              className: F.Title,
              children: (0, r.we)("#Parental_PlaytimeWindows_Title"),
            }),
            children: (0, e.jsx)(Ra, {
              restrictions: c.current.playtime_restrictions?.playtime_days[o],
              dayIndex: o,
              setDayIndex: l,
            }),
          });
        }
        function Ma(s) {
          const { dayIndex: t, onChange: n } = s,
            a = y.useCallback(
              (o) => {
                n(o.data);
              },
              [n],
            ),
            i = Xt();
          return (0, e.jsx)(j.ZU, {
            rgOptions: i,
            selectedOption: t,
            onChange: a,
            strDropDownButtonClassName: F.DaySelector,
            arrowClassName: F.Arrow,
            contextMenuPositionOptions: {
              bMatchWidth: !0,
              bDisablePopTop: !0,
              bFitToWindow: !0,
            },
          });
        }
        function Ra(s) {
          const { restrictions: t, dayIndex: n, setDayIndex: a } = s,
            [i, o] = y.useState(BigInt(parseInt(t?.allowed_time_windows) || 0)),
            l = (0, J.Qn)();
          y.useEffect(() => {
            o(BigInt(parseInt(t?.allowed_time_windows) || 0));
          }, [t]);
          const c = y.useCallback(
              (m) => {
                const h = i ^ (BigInt(1) << BigInt(m));
                (t.allowed_time_windows = h.toString()), o(h);
              },
              [i, t],
            ),
            p = y.useCallback(
              (m) => {
                (t.allowed_time_windows = m.toString()), o(m);
              },
              [t],
            ),
            d = y.useCallback(
              (m) => {
                t.allowed_daily_minutes = m;
              },
              [t],
            );
          return (0, e.jsxs)("div", {
            className: F.ParentalPlaytimeWindowsDialogInner,
            children: [
              (0, e.jsxs)(C.Z, {
                className: F.TopRow,
                children: [
                  (0, e.jsx)(Ma, { dayIndex: n, onChange: a }),
                  (0, e.jsxs)("div", {
                    className: F.Right,
                    children: [
                      (0, e.jsx)("div", {
                        className: F.PlaytimeDescription,
                        children: _t(i),
                      }),
                      (0, e.jsxs)(C.Z, {
                        className: F.PlaytimeButtons,
                        children: [
                          i == BigInt(0) &&
                            (0, e.jsx)(X.Ii, {
                              onClick: () => p(BigInt(0xffffffffffff)),
                              children: (0, r.we)(
                                "#Parental_PlaytimeWindows_AllowAll",
                              ),
                            }),
                          i != BigInt(0) &&
                            (0, e.jsx)(X.Ii, {
                              onClick: () => p(BigInt(0)),
                              children: (0, r.we)(
                                "#Parental_PlaytimeWindows_ClearAll",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: F.ParentalPlaytimeWindows,
                children: [
                  (0, e.jsx)(Vt, {
                    className: F.Grid,
                    nWindows: i,
                    onToggle: c,
                  }),
                  !l &&
                    (0, e.jsx)(Ea, {
                      className: F.Input,
                      nWindows: i,
                      onSet: p,
                    }),
                ],
              }),
              (0, e.jsx)(Yt, {
                strLabel: "#Parental_Playtime_Limit",
                nMinutes: t.allowed_daily_minutes || 0,
                onSelected: d,
              }),
            ],
          });
        }
        function Zt(s, t) {
          let n = BigInt(0),
            a = BigInt(1) << BigInt(s);
          for (let i = s; i < t; i++) (n = n | a), (a = a << BigInt(1));
          return n;
        }
        function Ea(s) {
          const { className: t, nWindows: n, onSet: a, ...i } = s,
            [o, l] = y.useState(Ne()().startOf("day")),
            [c, p] = y.useState(Ne()().startOf("day").add(1, "day")),
            d = o;
          let m = Ne()(c);
          const h = (d.hour() ?? 0) * 2 + (d.minute() ?? 0) / 30;
          let _ =
            (m.hour() ?? 0) * 2 +
            (m.minute() ?? 0) / 30 +
            (m.day() - d.day()) * 48;
          const f = y.useCallback(() => {
              let w = Zt(h, _);
              a(n | w);
            }, [a, n, h, _]),
            I = y.useCallback(() => {
              let w = Zt(h, _);
              a(n & ~w);
            }, [a, n, h, _]),
            S = y.useCallback(
              (w) => {
                const Y = w;
                l(Y), Y > m && p(Y);
              },
              [m],
            ),
            P = y.useCallback(
              (w) => {
                let Y = w;
                Y.hours() != 0 || Y.minutes() != 0
                  ? (Y = Y.day(d.day()))
                  : (Y = Y.day(d.day() + 1)),
                  Y >= d ? p(Y) : p(Ne()(d));
              },
              [d],
            );
          return (0, e.jsxs)("div", {
            className: (0, G.A)(F.ParentalPlaytimeInput, t),
            ...i,
            children: [
              (0, e.jsx)("div", {
                children: (0, r.we)("#Parental_PlaytimeWindows_From"),
              }),
              (0, e.jsx)("div", {
                children: (0, r.we)("#Parental_PlaytimeWindows_To"),
              }),
              (0, e.jsx)("div", {}),
              (0, e.jsx)(wt(), {
                className: F.Datetime,
                value: d,
                onChange: S,
                dateFormat: !1,
                open: !0,
                input: !1,
                timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
              }),
              (0, e.jsx)(wt(), {
                className: F.Datetime,
                value: m,
                onChange: P,
                dateFormat: !1,
                open: !0,
                input: !1,
                timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
              }),
              (0, e.jsxs)("div", {
                className: F.ButtonCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: F.ButtonWrapper,
                    children: (0, e.jsx)(j.$n, {
                      className: F.Button,
                      disabled: h >= _,
                      onClick: f,
                      children: "+",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: F.ButtonWrapper,
                    children: (0, e.jsx)(j.$n, {
                      className: F.Button,
                      disabled: h >= _,
                      onClick: I,
                      children: "-",
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Jt(s) {
          let t = (0, r.Yp)("#Parental_Playtime_Hours", s);
          return (
            s == 0
              ? (t = (0, r.we)("#Parental_Playtime_Hours_None"))
              : s == 24 &&
                (t = (0, r.we)("#Parental_Playtime_Hours_NoRestriction")),
            t
          );
        }
        function Ta(s) {
          const t = Math.floor(s / 60);
          return Jt(t);
        }
        function Yt(s) {
          const {
              strLabel: t,
              nMinutes: n,
              onSelected: a,
              nMin: i = 0,
              nMax: o = 25,
            } = s,
            c = (0, kt.xC)() === "mobile" ? "below" : "inline",
            p = y.useCallback(
              (m) => {
                a(m.data * 60);
              },
              [a],
            ),
            d = [];
          for (let m = i; m < o; m++) d.push({ data: m, label: Jt(m) });
          return (0, e.jsx)(j.Vb, {
            layout: c,
            label: (0, r.we)(t),
            bottomSeparator: "none",
            rgOptions: d,
            selectedOption: Math.floor(n / 60),
            onChange: p,
            strDropDownButtonClassName: F.HoursSelector,
            arrowClassName: F.Arrow,
            contextMenuPositionOptions: {
              bMatchWidth: !0,
              bDisablePopTop: !0,
              bFitToWindow: !0,
            },
          });
        }
        function Ga(s) {
          const { steamid: t, settings: n, dayIndex: a, strDay: i } = s,
            [o, l] = y.useState(!1),
            c = BigInt(
              parseInt(
                n.playtime_restrictions?.playtime_days[a]?.allowed_time_windows,
              ) || 0,
            ),
            p =
              n.playtime_restrictions?.playtime_days[a]
                ?.allowed_daily_minutes || 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(C.Z, {
                className: F.ParentalPlaytimeRow,
                onActivate: () => l(!0),
                children: [
                  (0, e.jsx)("div", { className: F.Day, children: i }),
                  (0, e.jsx)("div", { className: F.Windows, children: _t(c) }),
                  (0, e.jsxs)("div", {
                    className: F.Minutes,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [(0, r.we)("#Parental_Playtime_Limit"), ":"],
                      }),
                      (0, e.jsx)("div", { children: Ta(p) }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(k.EN, {
                active: o,
                children: (0, e.jsx)(ba, {
                  steamid: t,
                  settings: n,
                  dayIndexStart: a,
                  closeModal: () => l(!1),
                }),
              }),
            ],
          });
        }
        function Xt() {
          const s = Ne()
              .localeData(r.pf.GetPreferredLocales()[0])
              .firstDayOfWeek(),
            t = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              weekday: "long",
            });
          return Array.from({ length: 7 }, (n, a) => {
            const i = (a + s) % 7;
            return { data: i, label: t.format(Ne()().day(i).toDate()) };
          });
        }
        function Oa(s) {
          const { steamid: t, settings: n } = s,
            a = Xt().map((i) =>
              (0, e.jsx)(
                Ga,
                { steamid: t, settings: n, dayIndex: i.data, strDay: i.label },
                i.data,
              ),
            );
          return (0, e.jsx)("div", {
            className: F.ParentalPlaytimeInner,
            children: a,
          });
        }
        function La(s) {
          const { steamid: t, settings: n } = s,
            a = (0, se.At)(t),
            i = y.useCallback(
              (l) => {
                if (
                  ((n.playtime_restrictions.apply_playtime_restrictions = l),
                  !n.playtime_restrictions.playtime_days?.length)
                ) {
                  n.playtime_restrictions.playtime_days = [];
                  for (let c = 0; c < 7; c++)
                    n.playtime_restrictions.playtime_days.push({});
                }
                a.mutate(n);
              },
              [a, n],
            ),
            o = n.playtime_restrictions.apply_playtime_restrictions;
          return (0, e.jsxs)("div", {
            className: F.ParentalPlaytime,
            children: [
              (0, e.jsx)(j.y4, {
                className: F.ToggleCtn,
                bottomSeparator: "none",
                label: (0, r.we)("#Parental_EnablePlaytimeRestrictions"),
                checked: o,
                onChange: i,
              }),
              o && (0, e.jsx)(Oa, { steamid: t, settings: n }),
            ],
          });
        }
        function Ba(s) {
          const {
              steamid: t,
              eContentDescriptor: n,
              settings: a,
              fnSelectContentDescriptor: i,
            } = s,
            o = (0, se.At)(t);
          let l = Qt(n),
            c = ma(n, !0);
          const p = (S) => S.excluded_store_content_descriptors,
            d = (S, P) => {
              S.excluded_store_content_descriptors = P;
            },
            m = (S) => S.excluded_community_content_descriptors,
            h = (S, P) => {
              S.excluded_community_content_descriptors = P;
            },
            _ = (S, P) => (w) => {
              const Y = !w;
              let ue = S(a);
              if (Y) {
                const ie = [n].concat(zt(n));
                for (const ce of ie)
                  ue.findIndex((fe) => fe === ce.valueOf()) !== -1 ||
                    ue.push(ce.valueOf());
              } else {
                const ie = [n].concat(xt(n));
                for (const ce of ie) {
                  const Ce = ue.findIndex((fe) => fe === ce.valueOf());
                  Ce !== -1 && ue.splice(Ce, 1);
                }
              }
              P(a, ue), o.mutate(a);
            },
            f = !a.excluded_store_content_descriptors.includes(n.valueOf()),
            I = !a.excluded_community_content_descriptors.includes(n.valueOf());
          return (0, e.jsxs)(C.Z, {
            className: F.ContentDescriptorRow,
            navEntryPreferPosition: xe.iU.MAINTAIN_X,
            children: [
              (0, e.jsxs)(C.Z, {
                className: F.ContentDescriptorInfo,
                children: [
                  (0, e.jsx)("div", {
                    className: F.ContentDescriptorName,
                    children: l,
                  }),
                  (0, e.jsxs)("div", {
                    className: F.ContentDescriptorDescription,
                    children: [
                      c,
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(X.Ii, {
                        className: F.ContentDescriptorViewExamples,
                        onClick: () => i(n),
                        children: (0, r.we)(
                          "#ContentDescriptors_ViewExampleProducts",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(C.Z, {
                className: F.ContentDescriptorToggle,
                children: (0, e.jsx)(j.Yh, { checked: f, onChange: _(p, d) }),
              }),
              (0, e.jsx)(C.Z, {
                className: F.ContentDescriptorToggle,
                children: (0, e.jsx)(j.Yh, { checked: I, onChange: _(m, h) }),
              }),
            ],
          });
        }
        function ka(s) {
          const { strName: t, strLogoUrl: n } = s;
          return (0, e.jsxs)(C.Z, {
            className: F.ContentDescriptorExampleApp,
            focusable: !0,
            children: [
              (0, e.jsx)("img", { src: n }),
              (0, e.jsx)("div", { children: t }),
            ],
          });
        }
        function Ha(s) {
          const { eSelectedContentDescriptor: t, fnSelectDescriptor: n } = s,
            a = ca(t);
          return (0, e.jsx)(k.EN, {
            active: t !== null,
            children: (0, e.jsxs)(k.eV, {
              title: (0, r.we)("#ContentDescriptor_ExampleProductsHeader"),
              closeModal: () => n(null),
              children: [
                !a.data && (0, e.jsx)(T.t, {}),
                a.data?.length === 0 &&
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#ContentDescriptorExample_NoGames"),
                  }),
                a.data?.length > 0 &&
                  a.data.map((i, o) =>
                    (0, e.jsx)(ka, { strName: i.name, strLogoUrl: i.logo }, o),
                  ),
              ],
            }),
          });
        }
        function Wa(s) {
          const { steamid: t, settings: n } = s,
            [a, i] = (0, y.useState)(null);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ha, {
                eSelectedContentDescriptor: a,
                fnSelectDescriptor: i,
              }),
              (0, e.jsxs)(C.Z, {
                className: F.ContentDescriptorParentalSettings,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#Parental_ContentDescriptors_Intro"),
                  }),
                  (0, e.jsxs)(C.Z, {
                    className: F.ContentDescriptorParentalSettingsInner,
                    children: [
                      (0, e.jsxs)(C.Z, {
                        className: F.ContentDescriptorRow,
                        children: [
                          (0, e.jsx)(C.Z, {
                            className: F.ContentDescriptorInfo,
                          }),
                          (0, e.jsx)(C.Z, {
                            className: F.ContentDescriptorToggle,
                            children: (0, r.we)(
                              "#Parental_ContentDescriptors_Store",
                            ),
                          }),
                          (0, e.jsx)(C.Z, {
                            className: F.ContentDescriptorToggle,
                            children: (0, r.we)(
                              "#Parental_ContentDescriptors_Community",
                            ),
                          }),
                        ],
                      }),
                      rt.map((o) =>
                        (0, e.jsx)(
                          Ba,
                          {
                            steamid: t,
                            eContentDescriptor: o,
                            settings: n,
                            fnSelectContentDescriptor: i,
                          },
                          o,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function $t(s) {
          return (0, e.jsx)("div", {
            className: F.ErrorLoading,
            children: (0, r.we)("#Parental_Settings_PageError"),
          });
        }
        function Ua(s) {
          let t = (0, L.g)();
          const n = (0, O.LH)(),
            a = t.steamid,
            i = (0, L.W6)(),
            o = () => {
              i.push("/account/familymanagement");
            },
            l = (0, x.vo)(!0),
            c = (0, se.S0)(a),
            p = (0, ae.js)(a),
            d = l.isLoading || c.isLoading || p.isLoading,
            m = l.isError || c.isError || p.isError;
          if (d && !m) return (0, e.jsx)(T.t, { position: "center" });
          if (m || !c.data.settings) return (0, e.jsx)($t, {});
          const h = l.data.family_group(),
            _ = (0, x.Ee)(h, n),
            f = (0, x.Ee)(h, t.steamid);
          if (!_ || !f || _.role() != g.PQ.s || f.role() != g.PQ.sf)
            return (0, e.jsx)($t, {});
          const { settings: I, mapAppsAllowed: S } = c.data,
            P = p.data;
          return (0, e.jsxs)("div", {
            className: F.FamilyMemberParentalSettings,
            children: [
              (0, e.jsx)(C.Z, {
                className: F.ReturnToFamily,
                onActivate: o,
                children: (0, r.we)("#Parental_Settings_Return"),
              }),
              (0, e.jsxs)("div", {
                className: F.HeaderContainer,
                children: [
                  (0, e.jsx)(Ka, { member: f, persona: P }),
                  (0, e.jsx)(pa, { steamid: a, settings: I, familyGroup: h }),
                ],
              }),
              I.is_enabled &&
                (0, e.jsx)(za, { steamID: a, settings: I, mapAppsAllowed: S }),
            ],
          });
        }
        function Ka(s) {
          const { member: t, persona: n } = s;
          return (0, e.jsxs)("div", {
            className: F.ParentalHeader,
            children: [
              (0, e.jsx)("div", {
                className: F.Title,
                children: (0, r.we)("#Parental_Settings_For"),
              }),
              (0, e.jsx)(me.ff, { persona: n, role: t.role() }),
            ],
          });
        }
        function za(s) {
          const { steamID: t, settings: n, mapAppsAllowed: a } = s,
            i = (0, y.useMemo)(
              () => [
                {
                  name: (0, r.we)("#Parental_Tab_AllowedGames"),
                  key: "games",
                  contents: (0, e.jsx)(wa, {
                    steamid: t,
                    settings: n,
                    mapAppsAllowed: a,
                  }),
                },
                {
                  name: (0, r.we)("#Parental_Tab_Settings"),
                  key: "settings",
                  contents: (0, e.jsx)(Qa, { steamid: t, settings: n }),
                },
                {
                  name: (0, r.we)("#Parental_Tab_PlaytimeLimits"),
                  key: "playtime",
                  contents: (0, e.jsx)(La, { steamid: t, settings: n }),
                },
              ],
              [t, n, a],
            );
          return (0, e.jsx)(re.V, {
            tabs: i,
            classNameCtn: N.FamilyTabs,
            classNameTab: N.FamilyTab,
          });
        }
        function Qa(s) {
          const { steamid: t, settings: n } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Na, { steamid: t, settings: n }),
              (0, e.jsx)(Wa, { steamid: t, settings: n }),
            ],
          });
        }
        var qa = u(14874),
          Va = u(56062),
          Za = ((s) => (
            (s[(s.k_ParentalFeature = 0)] = "k_ParentalFeature"),
            (s[(s.k_ParentalPlaytime = 1)] = "k_ParentalPlaytime"),
            (s[(s.k_PurchaseRequest = 2)] = "k_PurchaseRequest"),
            s
          ))(Za || {});
        function Ja(s) {
          const t = (0, O.LH)(),
            a = y.useRef(Math.floor(Date.now() / 1e3)).current - 3600 * 24 * 30,
            i = (0, se.ve)(s, a),
            o = (0, x.BO)(s, a);
          if (!i.isSuccess || !o.isSuccess) return [];
          let l = i.data
            .feature_requests()
            .map((c) => ({
              type: 0,
              key: "parentalfeature_" + c.requestid(),
              data: c,
              requestTimestamp: c.time_requested(),
            }));
          return (
            (l = l.concat(
              i.data
                .playtime_requests()
                .map((c) => ({
                  type: 1,
                  key: "parentalplaytime_" + c.requestid(),
                  data: c,
                  requestTimestamp: c.time_requested(),
                })),
            )),
            (l = l.concat(
              o.data
                .requests()
                .map((c) => ({
                  type: 2,
                  key: "purchaserequest_" + c.request_id(),
                  data: c,
                  requestTimestamp: c.time_requested(),
                })),
            )),
            l.sort((c, p) => p.requestTimestamp - c.requestTimestamp),
            l
          );
        }
        function Ya(s) {
          const { item: t, closeModal: n } = s,
            a = (0, se.EB)(t),
            [i, o] = y.useState(3600),
            c = (0, kt.xC)() === "mobile" ? "below" : "inline",
            p = y.useCallback(() => {
              a.mutateAsync({ bApprove: !0, durationSec: i });
            }, [a, i]),
            d = y.useCallback((h, _) => {
              o(h.data);
            }, []),
            m = [
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_1Hour"),
                data: 3600,
              },
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_4Hours"),
                data: 14400,
              },
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_24Hours"),
                data: 1440 * 60,
              },
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_Permanently"),
                data: 0,
              },
            ];
          return (0, e.jsxs)(k.o0, {
            className: H().ApproveRequestDialog,
            closeModal: n,
            onOK: p,
            strTitle: (0, e.jsx)(j.Y9, {
              className: H().Title,
              children: (0, r.we)("#FeatureRequest_AcceptDialog_Title"),
            }),
            children: [
              (0, e.jsx)(j.a3, {
                children: (0, r.we)("#FeatureRequest_AcceptDialog_BodyText"),
              }),
              (0, e.jsx)(j.Vb, {
                layout: c,
                bottomSeparator: "none",
                label: (0, r.we)("#FeatureRequest_AcceptDialog_AllowAccess"),
                rgOptions: m,
                selectedOption: i,
                onChange: d,
              }),
            ],
          });
        }
        function Xa(s) {
          const {
              currentMinutes: t,
              currentWindows: n,
              additionalMinutes: a,
              setAdditionalMinutes: i,
              nWindows: o,
              setWindows: l,
            } = s,
            c = n == BigInt(0xffffffffffff),
            p = t == 1440,
            d = y.useCallback(
              (_) => {
                const f = o ^ (BigInt(1) << BigInt(_));
                l(f);
              },
              [o, l],
            ),
            m = y.useCallback(
              (_) => {
                i(_);
              },
              [i],
            );
          let h = "#PlaytimeRequest_AcceptDialog_BodyText";
          return (
            c &&
              (h = "#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedWindows"),
            p && (h = "#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedHours"),
            (0, e.jsxs)("div", {
              className: H().ApprovePlaytimeDialog,
              children: [
                (0, e.jsx)(j.a3, { children: (0, r.we)(h) }),
                !c &&
                  (0, e.jsxs)("div", {
                    className: H().ParentalPlaytimeWindows,
                    children: [
                      (0, e.jsx)("div", {
                        className: H().Text,
                        children: _t(o),
                      }),
                      (0, e.jsx)(Vt, {
                        nWindows: o,
                        nLockedWindows: n,
                        onToggle: d,
                      }),
                    ],
                  }),
                !p &&
                  (0, e.jsxs)("div", {
                    className: H().CurrentHours,
                    children: [
                      (0, r.Yp)(
                        "#PlaytimeRequest_AcceptDialog_CurrentHours",
                        Math.floor(t / 60),
                      ),
                      " ",
                    ],
                  }),
                p &&
                  (0, e.jsx)("div", {
                    className: H().CurrentHours,
                    children: (0, r.we)(
                      "#PlaytimeRequest_AcceptDialog_UnlimitedHours",
                    ),
                  }),
                !p &&
                  (0, e.jsx)(Yt, {
                    strLabel: "#PlaytimeRequest_AcceptDialog_AdditionalTime",
                    nMinutes: a,
                    onSelected: m,
                    nMax: 25 - t / 60,
                  }),
              ],
            })
          );
        }
        function $a(s) {
          const { item: t, closeModal: n } = s,
            a = (0, se.To)(t),
            [i, o] = y.useState(!1),
            l = t.current_playtime_restrictions().allowed_daily_minutes(),
            c = BigInt(
              parseInt(
                t.current_playtime_restrictions().allowed_time_windows(),
              ),
            ),
            [p, d] = y.useState(60),
            [m, h] = y.useState(c);
          y.useEffect(() => {
            o(p == 0 && c == m);
          }, [p, c, m]);
          const _ = y.useCallback(() => {
            const f = new An.$A();
            f.restrictions(!0).set_allowed_daily_minutes(l + p),
              f.restrictions(!0).set_allowed_time_windows(m.toString()),
              f.set_rtime_expires(t.time_expires()),
              a.mutateAsync({ bApprove: !0, restrictions: f });
          }, [a, l, p, m, t]);
          return (0, e.jsx)(k.o0, {
            className: H().ApproveRequestDialog,
            closeModal: n,
            onOK: _,
            bOKDisabled: i,
            strTitle: (0, e.jsx)(j.Y9, {
              className: H().Title,
              children: (0, r.we)("#FeatureRequest_AcceptDialog_Title"),
            }),
            children: (0, e.jsx)(Xa, {
              currentMinutes: l,
              currentWindows: c,
              additionalMinutes: p,
              setAdditionalMinutes: d,
              nWindows: m,
              setWindows: h,
            }),
          });
        }
        function en(s) {
          let { steamIDResponder: t, resultMessage: n, timeResponded: a } = s;
          const i = (0, ae.js)(t.ConvertTo64BitString()),
            o = i?.data,
            l = (0, It.KM)(t.GetAccountID()),
            c = (0, z.T)();
          return (
            o || (n = (0, r.we)("#ParentalRequest_Canceled")),
            (0, e.jsxs)("div", {
              className: H().RequestResponse,
              children: [
                (0, e.jsx)("div", { className: H().Result, children: n }),
                !!o &&
                  (0, e.jsxs)("div", {
                    className: H().AvatarAndPersona,
                    children: [
                      (0, e.jsx)(ne.i8, {
                        className: H().Avatar,
                        persona: o,
                        size: "Medium",
                        statusPosition: "right",
                      }),
                      (0, e.jsx)(V.A, {
                        persona: i.data,
                        bParenthesizeNicknames: c.data
                          ?.preferences()
                          .parenthesize_nicknames(),
                        strNickname: l,
                      }),
                    ],
                  }),
                (0, e.jsx)("div", {
                  className: H().TimeResponded,
                  children: (0, r.Nm)(a),
                }),
              ],
            })
          );
        }
        function tn(s) {
          const { steamID: t, locToken: n, locTokenPlurality: a } = s,
            i = (0, ae.js)(t.ConvertTo64BitString()),
            o = i?.data,
            l = (0, It.KM)(t.GetAccountID()),
            c = (0, z.T)();
          return i.isSuccess
            ? (0, e.jsxs)("div", {
                className: H().AvatarAndPersona,
                children: [
                  (0, e.jsx)(ne.i8, {
                    className: H().Avatar,
                    persona: o,
                    size: "Medium",
                    statusPosition: "right",
                  }),
                  (0, r.TG)(
                    n,
                    a,
                    (0, e.jsx)(V.A, {
                      persona: i.data,
                      bParenthesizeNicknames: c.data
                        ?.preferences()
                        .parenthesize_nicknames(),
                      strNickname: l,
                    }),
                  ),
                ],
              })
            : null;
        }
        function nn(s) {
          const {
              item: t,
              nFeatures: n,
              onReject: a,
              renderApproveDialog: i,
            } = s,
            o = (0, O.LH)(),
            l = t.steamid() == o,
            c = !n,
            [p, d] = y.useState(!1),
            m = y.useCallback(() => {
              d(!0);
            }, []);
          let h = [],
            _ = n;
          for (let f = 0; f < 32; f++)
            if (_ & (1 << f)) {
              const I = f,
                S = l
                  ? ot[I]?.requestDescriptionSelf
                  : ot[I]?.requestDescription;
              S && h.push((0, r.we)(S));
            }
          return h.length == 0 && !c
            ? null
            : (0, e.jsxs)("div", {
                className: (0, G.A)(
                  H().FamilyRequestItem,
                  H().ParentalFeatureRequestItem,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: H().RequestInfo,
                    children: [
                      l &&
                        (0, e.jsx)("div", {
                          className: H().SelfRequested,
                          children: (0, r.we)(
                            c
                              ? "#PlaytimeRequest_UserRequested_Self"
                              : "#FeatureRequest_UserRequested_Self",
                          ),
                        }),
                      !l &&
                        (0, e.jsx)(tn, {
                          steamID: new E.b(t.steamid()),
                          locToken: c
                            ? "#PlaytimeRequest_UserRequested"
                            : "#FeatureRequest_UserRequested",
                          locTokenPlurality: 1,
                        }),
                      (0, e.jsxs)("ul", {
                        className: H().FeatureList,
                        children: [
                          h.map((f) =>
                            (0, e.jsx)(
                              "li",
                              { className: H().Feature, children: f },
                              f,
                            ),
                          ),
                          (0, e.jsx)("div", {
                            className: H().TimeResponded,
                            children: (0, r.Nm)(t.time_requested()),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: H().StatusCtn,
                    children: [
                      !l &&
                        !t.time_responded() &&
                        (0, e.jsxs)(C.Z, {
                          className: H().Buttons,
                          children: [
                            (0, e.jsx)(j.jn, {
                              noFocusRing: !1,
                              onClick: m,
                              children: (0, r.we)("#ParentalRequest_Accept"),
                            }),
                            (0, e.jsx)(j.$n, {
                              noFocusRing: !1,
                              onClick: a,
                              children: (0, r.we)("#ParentalRequest_Reject"),
                            }),
                          ],
                        }),
                      l &&
                        !t.time_responded() &&
                        (0, e.jsx)("div", {
                          className: (0, G.A)(H().Buttons, H().Pending),
                          children: (0, r.we)("#ParentalRequest_Pending"),
                        }),
                      !!t.time_responded() &&
                        (0, e.jsx)(en, {
                          steamIDResponder: new E.b(t.steamid_responder()),
                          resultMessage: (0, r.we)(
                            t.approved()
                              ? "#ParentalRequest_AcceptedBy"
                              : "#ParentalRequest_RejectedBy",
                          ),
                          timeResponded: t.time_responded(),
                        }),
                      !t.time_responded() &&
                        (0, e.jsx)(k.EN, {
                          active: p,
                          children: i(() => d(!1)),
                        }),
                    ],
                  }),
                ],
              });
        }
        function es(s) {
          const { item: t } = s,
            n = (0, se.EB)(t),
            a = y.useCallback(() => {
              n.mutateAsync({ bApprove: !1, durationSec: 0 });
            }, [n]),
            i = y.useCallback(
              (l) => (0, e.jsx)(Ya, { item: t, closeModal: l }),
              [t],
            ),
            o = t.features();
          return (0, e.jsx)(nn, {
            item: t,
            nFeatures: o,
            onReject: a,
            renderApproveDialog: i,
          });
        }
        function ts(s) {
          const { item: t } = s,
            n = (0, se.To)(t),
            a = y.useCallback(() => {
              n.mutateAsync({ bApprove: !1, restrictions: null });
            }, [n]),
            i = y.useCallback(
              (o) => (0, e.jsx)($a, { item: t, closeModal: o }),
              [t],
            );
          return (0, e.jsx)(nn, {
            item: t,
            onReject: a,
            renderApproveDialog: i,
          });
        }
        function ns(s) {
          const { packageIDs: t, bundleIDs: n } = s;
          return !t.length && !n.length
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: H().Purchased,
                    children: (0, r.Yp)(
                      "#PurchaseRequest_Purchased",
                      t.length + n.length,
                    ),
                  }),
                  (0, e.jsx)(an, { packageIDs: t, bundleIDs: n }),
                ],
              });
        }
        function an(s) {
          const { packageIDs: t, bundleIDs: n } = s,
            [a, i] = (0, y.useState)(!1),
            o = 5;
          if (!t.length && !n.length) return null;
          const l = t.length + n.length;
          let c = null;
          if (a || l <= o) c = sn(t, n, l);
          else {
            (c = sn(t, n, o)),
              c.push(
                (0, e.jsx)(
                  "span",
                  {
                    children: (0, r.we)(
                      "#PurchaseRequest_PackageLinksFinalSeparator",
                    ),
                  },
                  "sepand",
                ),
              );
            const p = t.length + n.length - o;
            c.push(
              (0, e.jsx)(
                C.Z,
                {
                  onActivate: () => i(!0),
                  className: (0, G.A)(H().PackageShowMore, H().Selectable),
                  focusable: !0,
                  children: (0, r.we)(
                    "#PurchaseRequest_PackageLinksShowMore",
                    p,
                  ),
                },
                "showMore",
              ),
            );
          }
          return (0, e.jsx)("div", {
            className: H().PackageLinks,
            children: c,
          });
        }
        function sn(s, t, n) {
          let a = [],
            i = 0;
          for (let o = 0; o < s.length && i < n; o++, i++) {
            const l = s[o];
            a.push((0, e.jsx)(as, { packageID: l }, l)),
              i < n - 1 &&
                a.push(
                  (0, e.jsx)(
                    "span",
                    {
                      children: (0, r.we)(
                        "#PurchaseRequest_PackageLinksSeparator",
                      ),
                    },
                    "sep" + l,
                  ),
                );
          }
          for (let o = 0; o < t.length && i < n; o++, i++) {
            const l = t[o];
            a.push((0, e.jsx)(ss, { bundleID: l }, l)),
              i < n - 1 &&
                a.push(
                  (0, e.jsx)(
                    "span",
                    {
                      children: (0, r.we)(
                        "#PurchaseRequest_PackageLinksSeparator",
                      ),
                    },
                    "sep" + l,
                  ),
                );
          }
          return a;
        }
        function as(s) {
          const { packageID: t } = s,
            [n] = (0, Re.Gg)(t, {});
          return (0, e.jsx)(rn, { storeItem: n });
        }
        function ss(s) {
          const { bundleID: t } = s,
            [n] = (0, Re.Ow)(t, {});
          return (0, e.jsx)(rn, { storeItem: n });
        }
        function rn(s) {
          const { storeItem: t } = s,
            n = { direction: "right", style: { minWidth: "320px" } },
            a = (0, qa.DJ)(t),
            i = y.useCallback(
              (l) => {
                yt((0, Xe.uX)(l), t.GetStorePageURL());
              },
              [t],
            );
          if (!t) return null;
          const o = t.GetStoreItemType() === Va.c6.RD ? "sub" : "bundle";
          return (0, e.jsx)(At.Q, {
            id: a,
            name: t.GetName(),
            bPreventNavigation: !0,
            bHidePrice: !1,
            bShowWishlistButton: !1,
            hoverProps: n,
            className: H().HoverSource,
            children: (0, e.jsx)(C.Z, {
              className: (0, G.A)(H().PackageLinkItem, H().Selectable),
              focusable: !0,
              onActivate: i,
              children: (0, e.jsx)("div", {
                className: H().PackageLinkItemText,
                children: t.GetName(),
              }),
            }),
          });
        }
        function is(s) {
          const { item: t, familyGroupID: n } = s,
            a = (0, O.LH)(),
            i = t.requester_steamid() === a,
            o = (0, x.Ke)(n, t.request_id(), i ? g.IG.jG : g.IG.DP),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            i
              ? "#FamilyManagement_ErrorCancelPurchaseRequest"
              : "#FamilyManagement_ErrorDeclinePurchaseRequest",
            x.eS.k_EFamilyQueryDeclinePurchaseRequest,
          );
          const c = (0, x.w1)(n, t.request_id()),
            p = () => {
              l(null), o.mutate();
            };
          let d = "";
          if (t.is_completed())
            switch (t.response_action()) {
              case g.IG.Z5:
              case g.IG.hs:
                break;
              case g.IG.DP:
                d = (0, r.we)("#PurchaseRequest_DeclinedBy");
                break;
              case g.IG.ge:
                d = (0, r.we)("#PurchaseRequest_PurchasedBy");
                break;
              case g.IG.JV:
                d = (0, r.we)("#PurchaseRequest_Abandoned");
                break;
              case g.IG.jG:
                d = (0, r.we)("#PurchaseRequest_CanceledBy");
                break;
            }
          let m = !1;
          return (
            t.purchased_packageids() &&
              t.requested_packageids() &&
              t.purchased_packageids().length ==
                t.requested_packageids().length &&
              t.purchased_bundleids() &&
              t.requested_bundleids() &&
              t.purchased_bundleids().length ==
                t.requested_bundleids().length &&
              (m = !0),
            (0, e.jsxs)("div", {
              className: (0, G.A)(
                H().FamilyRequestItem,
                H().PurchaseRequestItem,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: H().RequestInfo,
                  children: [
                    i &&
                      (0, e.jsx)("div", {
                        className: H().SelfRequested,
                        children: (0, r.Yp)(
                          "#PurchaseRequest_UserRequested_Self",
                          t.requested_packageids()?.length,
                        ),
                      }),
                    !i &&
                      (0, e.jsx)(tn, {
                        steamID: new E.b(t.requester_steamid()),
                        locToken: "#PurchaseRequest_UserRequested",
                        locTokenPlurality: t.requested_packageids()?.length,
                      }),
                    (0, e.jsx)(an, {
                      packageIDs: t.requested_packageids(),
                      bundleIDs: t.requested_bundleids(),
                    }),
                    !m &&
                      (0, e.jsx)(ns, {
                        packageIDs: t.purchased_packageids(),
                        bundleIDs: t.purchased_bundleids(),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: H().StatusCtn,
                  children: [
                    !t.time_responded() &&
                      (0, e.jsxs)(C.Z, {
                        className: H().Buttons,
                        children: [
                          !i &&
                            !t.time_responded() &&
                            (0, e.jsx)("a", {
                              href: c,
                              children: (0, e.jsx)(j.jn, {
                                noFocusRing: !1,
                                children: (0, r.we)("#PurchaseRequest_Approve"),
                              }),
                            }),
                          (0, e.jsx)(j.$n, {
                            noFocusRing: !1,
                            onClick: p,
                            children: (0, r.we)(
                              i
                                ? "#PurchaseRequest_Cancel"
                                : "#PurchaseRequest_Decline",
                            ),
                          }),
                        ],
                      }),
                    t.time_responded() &&
                      (0, e.jsx)(en, {
                        steamIDResponder: new E.b(t.responder_steamid()),
                        resultMessage: d,
                        timeResponded: t.time_responded(),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function rs(s) {
          const { item: t, familyGroupID: n } = s;
          let a;
          switch (t.type) {
            case 0:
              a = (0, e.jsx)(es, { item: t.data });
              break;
            case 1:
              a = (0, e.jsx)(ts, { item: t.data });
              break;
            case 2:
              a = (0, e.jsx)(is, { item: t.data, familyGroupID: n });
              break;
            default:
              a = null;
              break;
          }
          return a;
        }
        function os(s) {
          const { rgRequests: t, familyGroupID: n } = s,
            a = t.length > 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !a &&
                (0, e.jsx)("div", {
                  className: H().NoFamilyRequests,
                  children: (0, r.we)("#FamilyManagement_NoCurrentRequests"),
                }),
              a &&
                (0, e.jsx)("div", {
                  className: H().FamilyRequests,
                  children: t.map((i) =>
                    (0, e.jsx)(rs, { item: i, familyGroupID: n }, i.key),
                  ),
                }),
            ],
          });
        }
        var on = u(36175),
          oe = u(49118),
          ls = u(91354),
          cs = u(98609),
          ms = u(27309);
        const qe = 1,
          vt = 24 / qe,
          ds = 14;
        function us(s) {
          const { steamid: t } = s,
            n = (0, x.lF)(t);
          if (((0, Re.YM)(), n.isLoading))
            return (0, e.jsx)("div", {
              className: oe.ThrobberContainer,
              children: (0, e.jsx)(T.t, {}),
            });
          const a = (l) => {
            const c = l.getTime() / 1e3;
            let p = new Date(l);
            p.setDate(p.getDate() + 1);
            const d = p.getTime() / 1e3;
            return n.isSuccess
              ? n.data.filter((m) => m.time_start <= d && m.time_end >= c)
              : [];
          };
          let i = new Date();
          i.setHours(0, 0, 0, 0);
          let o = [...Array(ds).keys()].map((l) => {
            let c = new Date(i);
            return c.setDate(c.getDate() - l), c;
          });
          return (0, e.jsx)(
            "div",
            {
              className: oe.PlaytimeHistoryBrowser,
              children: o.map((l, c) =>
                (0, e.jsx)(ps, { date: l, vecSessions: a(l) }, c),
              ),
            },
            t,
          );
        }
        function ps(s) {
          const { date: t, vecSessions: n } = s;
          let a = new Date(t);
          a.setDate(a.getDate() + 1);
          const i = t.getTime() / 1e3,
            o = a.getTime() / 1e3,
            l = (0, Me._l)(i, !0, !0, !1, !0),
            [c, p] = (0, y.useState)(!1);
          let d = 0;
          for (const S of n)
            d += Math.min(S.time_end, o) - Math.max(S.time_start, i);
          const m =
              d === 0 ? (0, r.we)("#FamilyPlaytime_NoPlaytime") : (0, Me.IH)(d),
            h = (S) => {
              const P = i + qe * 3600 * S,
                w = i + qe * 3600 * (S + 1);
              return n.filter((Y) => Y.time_start <= w && Y.time_end >= P);
            };
          let _ = new Map();
          for (const S of n) {
            _.has(S.appid) || _.set(S.appid, 0);
            const P = Math.min(S.time_end, o) - Math.max(S.time_start, i);
            _.set(S.appid, _.get(S.appid) + P);
          }
          const f = Array.from(_.entries());
          f.sort((S, P) => P[1] - S[1]);
          const I = n.length == 0;
          return (0, e.jsxs)(C.Z, {
            className: (0, G.A)(oe.PlaytimeHistoryDay, I && oe.Empty),
            children: [
              (0, e.jsxs)(C.Z, {
                className: oe.PlaytimeOnDay,
                onClick: I ? void 0 : () => p(!c),
                children: [
                  (0, e.jsxs)(C.Z, {
                    className: oe.DateColumn,
                    onActivate: I ? void 0 : () => p(!c),
                    children: [
                      l,
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("span", {
                        className: oe.TotalTimePlayed,
                        children: m,
                      }),
                    ],
                  }),
                  d > 0 &&
                    [...Array(vt).keys()].map((S) =>
                      (0, e.jsx)(
                        hs,
                        { nDate: i, nBin: S, vecSessions: h(S) },
                        S,
                      ),
                    ),
                  !I && (0, e.jsx)(ls.c, { bExpanded: c, setExpanded: p }),
                ],
              }),
              c &&
                !I &&
                (0, e.jsx)(C.Z, {
                  className: oe.PlaytimeSessionRows,
                  children: f.map((S, P) =>
                    (0, e.jsx)(gs, { appid: S[0], nSecondsPlayed: S[1] }, P),
                  ),
                }),
            ],
          });
        }
        function ln(s) {
          const { appid: t } = s,
            [n, a] = y.useState(0),
            [i, o] = y.useState(!1),
            [l] = (0, Re.t7)(t, it.A.k_DataRequest_Assets);
          if (!l) return null;
          const c = cs.TS.STORE_ICON_BASE_URL;
          let p = [
            `${c}${t}/library_600x900.jpg`,
            `${c}${t}/portrait.png`,
            ms.A,
          ];
          l.GetAssets()?.GetLibraryCapsuleURL() &&
            (p = [l.GetAssets()?.GetLibraryCapsuleURL(), ...p]);
          const d = () => {
              o(!0);
            },
            m = () => {
              n < p.length && a((_) => _ + 1);
            },
            h = p[n];
          return (0, e.jsx)("img", {
            className: (0, G.A)(oe.AppImage, i && oe.Loaded),
            onLoad: d,
            onError: m,
            src: h,
          });
        }
        function ys(s) {
          const { appid: t } = s,
            [n] = (0, Re.t7)(t, it.A.k_DataRequest_Assets);
          return n
            ? (0, e.jsx)(X.Ii, {
                href: n.GetStorePageURL(),
                children: (0, e.jsx)(ln, { appid: t }),
              })
            : null;
        }
        function hs(s) {
          const { nDate: t, nBin: n, vecSessions: a } = s,
            i = t + qe * 3600 * n,
            o = t + qe * 3600 * (n + 1),
            [l, c] = (0, y.useState)(!1);
          let p = 0,
            d = new Set();
          for (const w of a)
            (p += Math.min(w.time_end, o) - Math.max(w.time_start, i)),
              d.add(w.appid);
          const m = oe.strBarForegroundColor,
            h = oe.strBarBackgroundColor,
            _ = Math.round((100 * p) / (qe * 3600)),
            f = `linear-gradient(0deg, ${m} 0%, ${m} ${_}%, ${h} ${_}%, ${h} 100%)`,
            I = (w) => {
              if (w === 0 || w === vt) return "";
              const Y = Math.round(vt / 6);
              return w % Y === Y / 2
                ? new Date(i * 1e3).toLocaleTimeString(
                    r.pf.GetPreferredLocales(),
                    { hour: "numeric" },
                  )
                : "";
            };
          let S =
              d.size === 0
                ? null
                : (0, e.jsx)(C.Z, {
                    className: oe.AppListTooltipApps,
                    children: Array.from(d).map((w) =>
                      (0, e.jsx)(ys, { appid: w }, w),
                    ),
                  }),
            P = (0, e.jsxs)("div", {
              className: oe.AppListTooltip,
              children: [
                (0, e.jsxs)("div", {
                  className: oe.TimeRangeTooltip,
                  children: [(0, Me.KC)(i), " - ", (0, Me.KC)(o)],
                }),
                S,
              ],
            });
          return (0, e.jsxs)(C.Z, {
            focusable: d.size > 0,
            onOKButton: () => c(!0),
            children: [
              (0, e.jsxs)(k.mt, {
                active: l,
                onDismiss: () => c(!1),
                children: [
                  (0, e.jsx)("div", {
                    className: oe.TimeRangeTooltip,
                    children: (0, r.we)(
                      "#FamilyPlaytime_GamesPlayedBetween",
                      (0, Me.KC)(i),
                      (0, Me.KC)(o),
                    ),
                  }),
                  S,
                ],
              }),
              (0, e.jsx)(st.m9, {
                toolTipContent: P,
                nDelayShowMS: 0,
                children: (0, e.jsx)("div", {
                  className: (0, G.A)(oe.PlaytimeHistoryBin),
                  style: { background: f },
                  children: (0, e.jsx)("span", {
                    className: oe.TimeLabel,
                    children: I(n),
                  }),
                }),
              }),
            ],
          });
        }
        function gs(s) {
          const { appid: t, nSecondsPlayed: n } = s,
            [a] = (0, Re.t7)(t, it.A.k_DataRequest_Assets);
          return a
            ? (0, e.jsx)(X.Ii, {
                href: a.GetStorePageURL(),
                children: (0, e.jsxs)(C.Z, {
                  className: oe.SessionRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: oe.GameIcon,
                      children: (0, e.jsx)(ln, { appid: t }),
                    }),
                    (0, e.jsx)("div", {
                      className: oe.SessionRowTimeRange,
                      children: (0, Me.IH)(n),
                    }),
                    (0, e.jsx)("div", {
                      className: oe.SessionRowGameName,
                      children: a.GetName(),
                    }),
                  ],
                }),
              })
            : null;
        }
        function fs(s) {
          const { familyGroupID: t } = s,
            n = (0, x.Hs)(t),
            a = n.data
              ?.members()
              .filter((m) => m.role() === g.PQ.sf)
              .map((m) => m.steamid()),
            i = (0, ae.DW)(a),
            o = (0, M.M8)(),
            l = (0, z.T)(),
            [c, p] = (0, y.useState)(a ? a[0] : null);
          if (n.isLoading || i.some((m) => m.isLoading) || o.isLoading)
            return (0, e.jsx)("div", {
              className: on.ThrobberContainer,
              children: (0, e.jsx)(T.t, {}),
            });
          if (a.length === 0)
            return (0, e.jsx)("p", {
              children: (0, r.we)("#FamilyPlaytime_NoChildren"),
            });
          const d = i.map((m) => ({
            label: (0, e.jsx)(V.A, {
              persona: m.data,
              bIgnorePersonaStatus: !0,
              bParenthesizeNicknames: l.data
                ?.preferences()
                .parenthesize_nicknames(),
              strNickname: o.data.get(m.data.m_steamid.GetAccountID()),
            }),
            data: m.data.m_steamid.ConvertTo64BitString(),
          }));
          return (0, e.jsxs)(C.Z, {
            className: on.FamilyPlaytime,
            children: [
              (0, e.jsx)(j.Vb, {
                rgOptions: d,
                selectedOption: c,
                onChange: (m) => p(m.data),
                label: (0, r.we)("#FamilyPlaytime_ShowPlaytimeFor"),
                layout: "inline",
                childrenContainerWidth: "max",
              }),
              (0, e.jsx)(us, { steamid: c }),
            ],
          });
        }
        const _s = function () {
          const [t, n] = (0, y.useState)(null),
            a = (0, L.W5)(),
            i = (0, x.vo)();
          if (i.isError) return null;
          const o = !i.data?.is_not_member_of_any_group(),
            l = J.TS.HELP_BASE_URL + "faqs/view/054C-3167-DD7F-49D4";
          return (0, e.jsx)(x.Tv, {
            staleTimeMs: 3e3,
            children: (0, e.jsxs)(x.IN.Provider, {
              value: { errorMessage: t, setErrorMessage: n },
              children: [
                (0, e.jsx)(me.pC, {}),
                (0, e.jsxs)(Cs, {
                  children: [
                    (0, e.jsx)(B.Hxx, {}),
                    (0, e.jsx)("span", {
                      className: N.FamilyManagementTitle,
                      children: (0, r.we)("#FamilyManagement_Title"),
                    }),
                    (0, e.jsx)(X.Ii, {
                      className: N.HelpLink,
                      href: l,
                      children: (0, e.jsx)(B._VW, {}),
                    }),
                  ],
                }),
                i.isLoading &&
                  (0, e.jsx)("div", {
                    className: N.ThrobberContainer,
                    children: (0, e.jsx)(T.t, {}),
                  }),
                !i.isLoading &&
                  (0, e.jsx)("div", {
                    className: N.FamilySettingsContainer,
                    children: (0, e.jsx)(C.Z, {
                      className: N.FamilyContainer,
                      children: (0, e.jsxs)(L.dO, {
                        children: [
                          (0, e.jsx)(L.qh, {
                            path: `${a.path}/create`,
                            component: Ps,
                          }),
                          (0, e.jsx)(L.qh, {
                            path: `${a.path}/join`,
                            component: Ss,
                          }),
                          (0, e.jsx)(L.qh, {
                            path: `${a.path}/confirm_invite`,
                            component: D,
                          }),
                          (0, e.jsx)(L.qh, {
                            path: `${a.path}/parentalcontrols/:steamid`,
                            component: Ua,
                          }),
                          (0, e.jsx)(L.qh, {
                            children: o
                              ? (0, e.jsx)(un, {
                                  familyGroupID: i.data.family_groupid(),
                                })
                              : (0, e.jsx)(vs, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
          });
        };
        function cn(s) {
          const t = [
            {
              name: (0, r.we)("#FamilyManagement_SetupTab"),
              key: "setup",
              contents: s.children,
            },
          ];
          return (0, e.jsx)(re.V, { tabs: t, classNameCtn: N.FamilyTabs });
        }
        function Pt(s) {
          const t = [
            {
              name: (0, r.we)("#FamilyManagement_JoinAFamily"),
              key: "setup",
              contents: s.children,
            },
          ];
          return (0, e.jsx)(re.V, { tabs: t, classNameCtn: N.FamilyTabs });
        }
        function xs(s) {
          const { familyGroupID: t } = s,
            { mutate: n } = (0, x.vu)(t);
          return (0, e.jsx)(j.jn, {
            className: N.UndeleteSplashButton,
            onClick: () => n(),
            children: (0, r.we)("#FamilyManagement_UndeleteButton"),
          });
        }
        function vs(s) {
          const t = (0, L.W6)(),
            n = (0, x.vo)(),
            { setErrorMessage: a } = (0, x.RC)();
          if (n.isLoading) return (0, e.jsx)(T.t, {});
          const i = n.data?.pending_group_invites().length,
            o = () => {
              a(""), t.push("/account/familymanagement/create");
            },
            l = () => {
              a(""), t.push("/account/familymanagement/join");
            };
          let c;
          i === 0
            ? (c = null)
            : i === 1
              ? (c = (0, r.we)(
                  "#FamilyManagement_SelectJoinButtonPendingInvite",
                ))
              : (c = (0, r.we)(
                  "#FamilyManagement_SelectJoinButtonPendingInvites",
                  i,
                ));
          const p = n.data.cooldown_seconds_remaining() > 0,
            d = n.data.can_undelete_last_joined_family();
          return (0, e.jsx)(cn, {
            children: (0, e.jsxs)("div", {
              className: N.OnboardSplashContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: N.WallOfText,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.we)(
                        "#FamilyManagement_CreateInstructions",
                      ),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, r.we)(
                        "#FamilyManagement_CreateInstructions_2",
                      ),
                    }),
                  ],
                }),
                (p || d) &&
                  (0, e.jsxs)("div", {
                    className: N.SplashCooldown,
                    children: [
                      (0, e.jsx)(B.eTF, { color: N.colorCautionSign }),
                      (0, e.jsxs)("div", {
                        children: [
                          !d && (0, r.we)("#FamilyManagement_CanRejoin"),
                          d && (0, r.we)("#FamilyManagement_CanUndelete"),
                        ],
                      }),
                      d &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsx)(xs, {
                            familyGroupID:
                              n.data.latest_joined_family_groupid(),
                          }),
                        }),
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: N.OnboardSplashButtons,
                  children: [
                    (0, e.jsxs)(j.jn, {
                      className: N.OnboardSplashButton,
                      onClick: l,
                      children: [
                        (0, e.jsx)("div", {
                          className: N.OnboardSplashButtonLabel,
                          children: (0, r.we)(
                            "#FamilyManagement_SelectJoinButton",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: N.OnboardSplashButtonGraphic,
                          children: (0, e.jsx)(B.dsc, {}),
                        }),
                        i > 0 &&
                          (0, e.jsx)("div", {
                            className: N.OnboardSplashButtonBadge,
                            children: c,
                          }),
                      ],
                    }),
                    (0, e.jsxs)(j.jn, {
                      className: N.OnboardSplashButton,
                      onClick: o,
                      children: [
                        (0, e.jsx)("div", {
                          className: N.OnboardSplashButtonLabel,
                          children: (0, r.we)(
                            "#FamilyManagement_SelectCreateButton",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: N.OnboardSplashButtonGraphic,
                          children: (0, e.jsx)(B.LDq, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function mn(s) {
          const {
            active: t,
            isCreate: n,
            closeModal: a,
            cooldownSeconds: i,
          } = s;
          return (0, e.jsx)(k.EN, {
            active: t,
            children: (0, e.jsxs)(k.o0, {
              bAlertDialog: !0,
              onOK: a,
              closeModal: a,
              strTitle: (0, r.we)(
                n
                  ? "#FamilyManagement_FamilyCreated"
                  : "#FamilyManagement_FamilyJoined",
              ),
              children: [
                (0, e.jsx)(pe, { cooldownSecondsRemaining: i }),
                (0, e.jsx)("div", {
                  className: N.DialogText,
                  children: (0, r.we)(
                    n
                      ? "#FamilyManagement_CooldownAllowed_2_Create"
                      : "#FamilyManagement_CooldownAllowed_2_Join",
                  ),
                }),
              ],
            }),
          });
        }
        function Ps(s) {
          const [t, n] = (0, y.useState)(""),
            a = (0, x.TI)(),
            i = (0, L.W6)(),
            o = (0, x.vo)(),
            [l, c, p] = (0, Je.uD)(!1),
            { setErrorMessage: d } = (0, x.RC)();
          if (
            ((0, x.gv)(
              a,
              "#FamilyManagement_ErrorCreateFamily",
              x.eS.k_EFamilyQueryCreateFamily,
            ),
            o.data && !o.data?.is_not_member_of_any_group() && !l)
          )
            return (0, e.jsx)(L.rd, { to: "/account/familymanagement" });
          const m = () => {
            d(null),
              a.mutate(t, {
                onSuccess: (h) => {
                  h.cooldown_skip_granted() && c();
                },
              });
          };
          return a.isPending
            ? (0, e.jsx)("div", {
                className: N.ThrobberContainer,
                children: (0, e.jsx)(T.t, {}),
              })
            : (0, e.jsxs)(cn, {
                children: [
                  (0, e.jsx)(mn, {
                    active: l,
                    isCreate: !0,
                    closeModal: p,
                    cooldownSeconds: o.data.cooldown_seconds_remaining(),
                  }),
                  (0, e.jsxs)("div", {
                    className: N.CreateFamilyContainer,
                    children: [
                      (0, e.jsx)(St, {
                        children: (0, r.we)(
                          "#FamilyManagement_CreateAFamilyHeader",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, r.we)(
                          "#FamilyManagement_CreateAFamilyText",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: N.CreateFamilyForm,
                        children: [
                          (0, e.jsx)(X.BA, {
                            type: "text",
                            onChange: (h) => {
                              n(h.target.value), d(null);
                            },
                            value: t,
                            placeholder: (0, r.we)(
                              "#FamilyManagement_InputNamePlaceholder",
                            ),
                          }),
                          (0, e.jsx)(j.jn, {
                            disabled: t.length === 0,
                            onClick: m,
                            children: (0, r.we)(
                              "#FamilyManagement_FinalizeCreateFamily",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        function Ss(s) {
          const t = (0, x.vo)(),
            n = t.data?.pending_group_invites().length,
            [a, i] = (0, y.useState)(!1),
            o = (0, L.W6)(),
            [l, c] = (0, y.useState)(!1),
            p = (0, L.zy)(),
            d = K(p, ge),
            m = (0, x.Bc)(d);
          if (t.data && !t.data?.is_not_member_of_any_group() && !a)
            return d
              ? (0, e.jsx)(L.rd, {
                  to: `/account/familymanagement?invitation=${d}`,
                })
              : (0, e.jsx)(L.rd, { to: "/account/familymanagement" });
          let h = null,
            _ = t.data.pending_group_invites();
          if (d) {
            const f = _.findIndex((I) => I.family_groupid() === d);
            f !== -1 && ((h = _[f]), (_ = _.slice()), _.splice(f, 1));
          }
          return (
            h !== null &&
              h.awaiting_2fa() &&
              J.TS.IN_MOBILE_WEBVIEW &&
              (m.mutate(),
              (window.location.href =
                "steammobile://confirmations?first_of_type=11")),
            a
              ? (0, e.jsx)(Pt, {
                  children: (0, e.jsx)(mn, {
                    active: a,
                    isCreate: !1,
                    closeModal: () => {
                      i(!1), o.push("/account/familymanagement");
                    },
                    cooldownSeconds: t.data?.cooldown_seconds_remaining(),
                  }),
                })
              : h
                ? (0, e.jsx)(Pt, {
                    children: (0, e.jsxs)("div", {
                      className: N.JoinFamilyContainer,
                      children: [
                        (0, e.jsxs)("p", {
                          children: [
                            (0, r.oW)(
                              "#FamilyManagement_PendingInvitesText",
                              (0, e.jsx)("span", { className: N.JoinWarning }),
                              (0, e.jsx)("b", {}),
                            ),
                            " ",
                          ],
                        }),
                        (0, e.jsx)(
                          le,
                          {
                            inviteID: h.invite_id(),
                            inviterSteamID: h.inviter_steamid(),
                            familyGroupID: h.family_groupid(),
                            role: h.role(),
                            setCooldownModalActive: i,
                          },
                          d,
                        ),
                        _.length > 0 &&
                          !l &&
                          (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsxs)("p", {
                              children: [
                                (0, r.we)(
                                  _.length === 1
                                    ? "#FamilyManagement_OtherInvite"
                                    : "#FamilyManagement_OtherInvites",
                                  _.length,
                                ),
                                " ",
                                (0, e.jsx)("a", {
                                  onClick: () => c(!0),
                                  children: (0, r.we)(
                                    "#FamilyManagement_Expand",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        _.length > 0 &&
                          l &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsxs)("p", {
                                children: [
                                  (0, r.we)(
                                    _.length === 1
                                      ? "#FamilyManagement_OtherInvite"
                                      : "#FamilyManagement_OtherInvites",
                                    _.length,
                                  ),
                                  " ",
                                  (0, e.jsx)("a", {
                                    onClick: () => c(!1),
                                    children: (0, r.we)(
                                      "#FamilyManagement_Collapse",
                                    ),
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                children: _.map((f) =>
                                  (0, e.jsx)(
                                    le,
                                    {
                                      inviterSteamID: f.inviter_steamid(),
                                      inviteID: f.invite_id(),
                                      familyGroupID: f.family_groupid(),
                                      role: f.role(),
                                      setCooldownModalActive: i,
                                    },
                                    f.family_groupid(),
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                  })
                : (0, e.jsx)(Pt, {
                    children: (0, e.jsxs)("div", {
                      className: N.JoinFamilyContainer,
                      children: [
                        d &&
                          (0, e.jsx)("div", {
                            className: N.IncomingInviteGone,
                            children: (0, r.we)(
                              "#FamilyManagement_IncomingInviteGone",
                            ),
                          }),
                        (0, e.jsx)(St, {
                          children: (0, r.we)("#FamilyManagement_JoinAFamily"),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, r.we)(
                            "#FamilyManagement_ToJoinInstructions",
                          ),
                        }),
                        (0, e.jsx)("br", {}),
                        n > 0 &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)(St, {
                                children: (0, r.we)(
                                  "#FamilyManagement_PendingInvitesHeader",
                                ),
                              }),
                              (0, e.jsxs)("p", {
                                children: [
                                  (0, r.oW)(
                                    "#FamilyManagement_PendingInvitesText",
                                    (0, e.jsx)("span", {
                                      className: N.JoinWarning,
                                    }),
                                    (0, e.jsx)("b", {}),
                                  ),
                                  " ",
                                ],
                              }),
                              t.data
                                ?.pending_group_invites()
                                .map((f) =>
                                  (0, e.jsx)(
                                    le,
                                    {
                                      inviteID: f.invite_id(),
                                      inviterSteamID: f.inviter_steamid(),
                                      familyGroupID: f.family_groupid(),
                                      role: f.role(),
                                      setCooldownModalActive: i,
                                    },
                                    f.family_groupid(),
                                  ),
                                ),
                            ],
                          }),
                      ],
                    }),
                  })
          );
        }
        function js(s) {
          const t = (0, x.vo)(),
            n = t.data.family_groupid(),
            a = t.data.role() === g.PQ.s,
            i = (0, x.Hs)(n);
          return (
            (0, x.gv)(
              i,
              "#FamilyManagement_ErrorLoadFamily",
              x.eS.k_EFamilyQueryLoadFamily,
            ),
            i.isLoading
              ? (0, e.jsx)("div", {
                  className: N.ManageFamily,
                  children: (0, e.jsx)("div", {
                    className: N.ThrobberContainer,
                    children: (0, e.jsx)(T.t, {}),
                  }),
                })
              : i.isError
                ? null
                : (0, e.jsxs)(C.Z, {
                    className: N.ManageFamily,
                    children: [
                      (0, e.jsx)(Fs, {}),
                      (0, e.jsx)(Is, { familyGroupID: n, isAdult: a }),
                      (0, e.jsx)(ws, { familyGroupID: n }),
                    ],
                  })
          );
        }
        function St(s) {
          return (0, e.jsx)("div", {
            className: N.FamilySubsection,
            children: s.children,
          });
        }
        function Cs(s) {
          const t = (0, L.W6)();
          function n() {
            t.push("/account/familymanagement");
          }
          return (0, e.jsx)("div", {
            className: N.PreferencesHeader,
            children: (0, e.jsx)("div", {
              className: (0, G.A)(
                N.AccountHeader,
                "account_header_line noicon",
              ),
              onClick: n,
              children: s.children,
            }),
          });
        }
        function Fs() {
          const s = (0, L.zy)(),
            t = K(s, ge),
            n = (0, x.vo)(),
            a = !n.data.is_not_member_of_any_group();
          return !t || !a || t === n.data.family_groupid()
            ? null
            : (0, e.jsxs)("div", {
                className: N.IncomingInviteGone,
                children: [
                  (0, e.jsx)(B.eTF, { color: N.colorCautionSign }),
                  (0, e.jsx)("span", {
                    children: (0, r.we)(
                      "#FamilyManagement_CannotJoinWhileAlreadyMember",
                    ),
                  }),
                ],
              });
        }
        function Is(s) {
          const { familyGroupID: t, isAdult: n } = s,
            a = (0, x.Hs)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const i = a.data,
            o = i.members().length + i.pending_invites().length,
            l =
              i.free_spots() + i.members().length + i.pending_invites().length;
          return (0, e.jsxs)("div", {
            className: N.FamilyNameAndSlots,
            children: [
              (0, e.jsx)(Ds, { familyGroupID: t, isAdult: n }),
              n &&
                (0, e.jsx)("div", {
                  className: N.FamilySlotsContainer,
                  children: (0, r.we)("#FamilyManagement_MemberCount", o, l),
                }),
            ],
          });
        }
        function dn(s) {
          const t = (0, ae.js)(s),
            n = `${J.TS.COMMUNITY_BASE_URL}profiles/${s}`;
          return t.isSuccess
            ? (0, e.jsx)(X.Ii, {
                className: N.FamilyHistoryName,
                href: n,
                children: (0, e.jsx)("b", {
                  children: (0, e.jsx)(me.iV, { steamid: s }),
                }),
              })
            : null;
        }
        function un(s) {
          const { familyGroupID: t } = s,
            n = Ja(t),
            a = (0, x.ll)(t),
            i = [
              {
                name: (0, r.we)("#FamilyManagement_ManageTab"),
                key: "manage",
                contents: (0, e.jsx)(js, {}),
              },
            ];
          return (
            i.push({
              name: (0, r.we)("#FamilyManagement_LibraryTab"),
              key: "library",
              contents: (0, e.jsx)(sa, { familyGroupID: t }),
            }),
            i.push({
              name: (0, r.we)("#FamilyManagement_RequestsTab"),
              key: "requests",
              contents: (0, e.jsx)(os, { rgRequests: n, familyGroupID: t }),
            }),
            a === g.PQ.s &&
              (i.push({
                name: (0, r.we)("#FamilyManagement_PlaytimeTab"),
                key: "playtime",
                contents: (0, e.jsx)(fs, { familyGroupID: t }),
              }),
              i.push({
                name: (0, r.we)("#FamilyManagement_HistoryTab"),
                key: "history",
                contents: (0, e.jsx)(Dn, {
                  familyGroupID: t,
                  nFamilyHistoryRowHeight: N.nFamilyHistoryRowHeight,
                  FamilyHistory: N.FamilyHistory,
                  Entry: N.Entry,
                  Timestamp: N.Timestamp,
                  EntryText: N.EntryText,
                  FnRenderName: dn,
                }),
              })),
            (0, e.jsx)(C.Z, {
              autoFocus: !0,
              focusableIfEmpty: !0,
              children: (0, e.jsx)(re.V, {
                tabs: i,
                classNameCtn: N.FamilyTabs,
                classNameTab: N.FamilyTab,
                preferredFocus: !0,
              }),
            })
          );
        }
        function ws(s) {
          const { familyGroupID: t } = s,
            n = (0, x.ll)(t),
            a = (0, x.Hs)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const i = (0, O.LH)();
          if (a.isLoading)
            return (0, e.jsx)("div", {
              className: N.ThrobberContainer,
              children: (0, e.jsx)(T.t, {}),
            });
          if (a.isError) return null;
          const o = n == g.PQ.s,
            l = a.data.members().findIndex((d) => d.steamid() === i),
            c = a.data.members()[l],
            p = a.data.members().slice();
          return (
            l !== -1 && p.splice(l, 1),
            (0, e.jsxs)(e.Fragment, {
              children: [
                l !== -1 &&
                  (0, e.jsx)(dt, { familyGroupID: t, member: c }, c.steamid()),
                p.map((d) =>
                  (0, e.jsx)(dt, { familyGroupID: t, member: d }, d.steamid()),
                ),
                o &&
                  a.data
                    ?.pending_invites()
                    .map((d) =>
                      (0, e.jsx)(
                        dt,
                        { familyGroupID: t, member: d },
                        d.steamid(),
                      ),
                    ),
                o &&
                  a.data.free_spots() > 0 &&
                  (0, e.jsx)(Le, { familyGroupID: t }),
              ],
            })
          );
        }
        function Ds(s) {
          const { familyGroupID: t, isAdult: n } = s,
            [a, i] = (0, y.useState)(!1),
            o = (0, x.Hs)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const [c, p] = (0, y.useState)(o.data?.name()),
            d = (0, x.DD)(t);
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorModifyFamily",
            x.eS.k_EFamilyQueryModifyFamily,
          );
          const m = (f) => {
              l(null), d.mutate(f), i(!1);
            },
            h = () => {
              i(!0), l(null);
            },
            _ = (f) => {
              p(f.target.value), l(null);
            };
          return a && n
            ? (0, e.jsxs)(C.Z, {
                className: N.FamilyNameEditor,
                children: [
                  (0, e.jsx)("span", {
                    className: N.YourFamily,
                    children: (0, r.we)("#FamilyManagement_YourFamily"),
                  }),
                  (0, e.jsx)(X.BA, {
                    className: N.EditNameInput,
                    type: "text",
                    onChange: _,
                    value: c,
                    placeholder: (0, r.we)(
                      "#FamilyManagement_InputNamePlaceholder",
                    ),
                    maxLength: 128,
                  }),
                  (0, e.jsx)(j.$n, {
                    className: N.SaveButton,
                    noFocusRing: !1,
                    onClick: () => m(c),
                    children: (0, r.we)(
                      "#FamilyManagement_EditFamilyNameSaveButton",
                    ),
                  }),
                  (0, e.jsx)(j.$n, {
                    className: N.CancelButton,
                    noFocusRing: !1,
                    onClick: () => {
                      i(!1), l(null);
                    },
                    children: (0, r.we)(
                      "#FamilyManagement_EditFamilyNameCancelButton",
                    ),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: N.FamilyNameEditor,
                children: [
                  (0, e.jsx)("span", {
                    className: N.YourFamily,
                    children: (0, r.we)("#FamilyManagement_YourFamily"),
                  }),
                  (0, e.jsxs)(C.Z, {
                    className: N.FamilyNameButton,
                    onActivate: n ? h : void 0,
                    children: [
                      (0, e.jsx)("div", {
                        className: N.FamilyName,
                        children: c,
                      }),
                      n &&
                        (0, e.jsx)(C.Z, {
                          className: N.EditButton,
                          children: (0, e.jsx)(B.ffu, {}),
                        }),
                    ],
                  }),
                ],
              });
        }
      },
      23903: (W, de, u) => {
        "use strict";
        u.d(de, {
          BJ: () => r,
          Kt: () => le,
          OM: () => pe,
          Th: () => C,
          WH: () => K,
          Yp: () => ae,
          az: () => T,
          cV: () => G,
          mG: () => ne,
          tv: () => ge,
          xC: () => ee,
        });
        var e = u(7850),
          g = u(90626),
          y = u(4399),
          O = u.n(y),
          X = u(36707),
          j = u(19298),
          B = u(27126),
          re = u(3166);
        const T = (0, g.forwardRef)(function (Q, R) {
            const {
                component: A,
                padding: D,
                paddingX: v,
                paddingY: M,
                paddingRight: E,
                paddingLeft: V,
                paddingTop: z,
                paddingBottom: ye,
                margin: he,
                marginX: xe,
                marginY: Se,
                marginLeft: Ie,
                marginTop: Ee,
                marginRight: We,
                marginBottom: we,
                display: Ue,
                flexDirection: Ae,
                flexWrap: Ke,
                justifyContent: Ve,
                alignItems: Ze,
                flexGrow: Te,
                flexShrink: be,
                flexBasis: Ge,
                flex: _e,
                className: je,
                style: De,
                ...Oe
              } = Q,
              Le = (0, X.A)(
                C("padding-left", V || v || D),
                C("padding-top", z || M || D),
                C("padding-right", E || v || D),
                C("padding-bottom", ye || M || D),
                C("margin-left", Ie || xe || he),
                C("margin-top", Ee || Se || he),
                C("margin-right", We || xe || he),
                C("margin-bottom", we || Se || he),
                je,
              ),
              Be = {
                display: Ue,
                flexDirection: Ae,
                flexWrap: Ke,
                justifyContent: Ve,
                alignItems: Ze,
                flexGrow: Te,
                flexShrink: be,
                flexBasis: Ge,
                flex: _e,
                ...De,
              },
              ke = { className: Le, style: Be, ref: R, ...Oe };
            if (A) {
              const ze = A;
              return (0, e.jsx)(ze, { ...ke });
            }
            return (0, e.jsx)(j.Z, { className: Le, style: Be, ref: R, ...Oe });
          }),
          G = (0, g.forwardRef)(function (Q, R) {
            const {
                children: A,
                style: D,
                spacing: v,
                horizontalSpacing: M,
                verticalSpacing: E,
                itemClassName: V,
                "flow-children": z = "row",
                ...ye
              } = Q,
              he = ne(),
              xe = he.spacing[ge(M || v || "none")],
              Se = he.spacing[ge(E || v || "none")];
            return (0, e.jsx)(j.Z, {
              "flow-children": z,
              ref: R,
              style: { ...(D || {}), marginTop: U(-Se) },
              ...ye,
              children: (0, e.jsx)("div", {
                style: { marginLeft: U(-xe) },
                className: y.InlineContainer,
                children: g.Children.map(A, (Ie) =>
                  Ie != null
                    ? (0, e.jsx)(T, {
                        paddingLeft: M || v,
                        paddingTop: E || v,
                        className: V,
                        children: Ie,
                      })
                    : null,
                ),
              }),
            });
          }),
          r = (0, g.forwardRef)(function (Q, R) {
            const {
                spacing: A,
                itemClassName: D,
                children: v,
                className: M,
                ...E
              } = Q,
              V = g.Children.count(v);
            return (0, e.jsx)(j.Z, {
              "flow-children": "column",
              ref: R,
              className: M,
              ...E,
              children: g.Children.map(v, (z, ye) =>
                z != null
                  ? (0, e.jsx)(T, {
                      paddingBottom: ye !== V - 1 ? A : void 0,
                      className: (0, X.A)(D, y.RemoveOnEmpty),
                      children: z,
                    })
                  : null,
              ),
            });
          }),
          U = (b) => `${b}px`,
          x = {
            spacing: {
              none: 0,
              xxsmall: 4,
              xsmall: 8,
              small: 12,
              medium: 20,
              large: 32,
              xlarge: 48,
              xxlarge: 96,
              xxxlarge: 192,
            },
            breakpoint: { mobile: 0, tablet: 740, desktop: 965 },
          },
          me = (0, g.createContext)(x),
          ne = () => (0, g.useContext)(me),
          ae = (b) => {
            const { config: Q, children: R } = b,
              A = Q || x,
              D = (0, g.useMemo)(() => L(A), [A]),
              [v, M] = (0, g.useState)(0);
            return (
              (0, g.useLayoutEffect)(() => {
                M((E) => E + 1);
              }, [D]),
              (0, e.jsxs)(g.Fragment, {
                children: [(0, e.jsx)("style", { children: D }), R],
              })
            );
          };
        function L(b) {
          return [
            "padding",
            "padding-top",
            "padding-bottom",
            "padding-right",
            "padding-left",
            "margin",
            "margin-left",
            "margin-top",
            "margin-right",
            "margin-bottom",
          ]
            .map((R) =>
              Object.keys(b.spacing)
                .map((A) => J(R, A, b.spacing[A]))
                .join(`
`),
            )
            .join(`
`);
        }
        const k = (b, Q) => `${b}-${Q}`,
          J = (b, Q, R) => `.${k(b, Q)} { ${b}: ${R}px; }`,
          C = (b, Q) => {
            const R = ge(Q);
            return Q ? k(b, R) : "";
          };
        function K(b) {
          const Q = ne(),
            R = ge(b);
          return (b && Q.spacing[R]) || 0;
        }
        function ge(b) {
          const Q = ee();
          return Array.isArray(b)
            ? b[
                Math.min(
                  Q === "desktop" ? 2 : Q === "tablet" ? 1 : 0,
                  b.length - 1,
                )
              ]
            : b;
        }
        function ee() {
          const {
              breakpoint: { tablet: b, desktop: Q },
            } = ne(),
            R = (0, B.h)(`(min-width: ${b}px)`),
            A = (0, B.h)(`(min-width: ${Q}px)`);
          return (0, re.Qn)()
            ? "mobile"
            : A
              ? "desktop"
              : R
                ? "tablet"
                : "mobile";
        }
        function pe(b) {
          return b.children(ee());
        }
        function le(b) {
          return (0, e.jsx)(T, { component: j.Z, ...b });
        }
      },
      29528: (W) => {
        W.exports = {
          AppGridItem: "_3EHR0vjVp91HIDN-WKXpuB",
          NoImage: "_--1j5crfWvm4vTD76qd0G",
          Capsule: "_3dBfx1sV1COVdSsh7RdgMd",
          Loaded: "FmbmC2C9Se8Jqjj-uQjAw",
          Label: "_1tVCPhzTgmUpMpErm-4mHX",
        };
      },
      1242: (W) => {
        W.exports = {
          VirtualizedGridWrapper: "K6224j9GEn0UKuVD4_m0E",
          VirtualizedGridRow: "-padb24TteB2RGJuMHdLn",
        };
      },
      89206: (W) => {
        W.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      20803: (W) => {
        W.exports = {
          narrowWidth: "500px",
          RoleIcon: "_1uvKF_UbD6VhnVdaRkXhbu",
          ProfileLink: "_2oSTSohQ1CZIgVn7E6_0Ft",
          MeBadge: "_2W_HQa5Rhf-hHITgV5H0bu",
          PlayerName: "AdQYbMq7HHJ3Jgljib9UX",
          RoleAndIcon: "_3VzCnvA_1SxskuCqmZkkHA",
          RoleName: "_3C9nRrwzQk9qHlJx6NaXDI",
          FamilyErrorDisplay: "egC2pffk2Ff-wvlnEHOqf",
          FamilyMemberStatus: "bMHOg1F_hCL_s5erx4pWC",
          FamilyMemberRow: "_2LyGIHuQ8SFKb5T262YUvg",
          InfoRow: "_3TgL3aJ2hUdLP2stFZ2wZv",
          InvitePending: "_1IeeH6Qo58UdaFJ3hkLMzs",
        };
      },
      56420: (W) => {
        W.exports = {
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
      18828: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
          BackgroundAnimation: "_2hlRK2hm0pHy1YSxwknFCj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Ye-Lgym31_-ibnmbFywrn",
          "ItemFocusAnim-darkerGrey": "_1klcEk0V0JFATe7imIRZ1C",
          "ItemFocusAnim-darkGreySettings": "_1o29CI_yDNVtgTV1cxDqGZ",
          "ItemFocusAnim-darkGrey": "_2BtPOA0wSbFULgc-Zh-0_x",
          "ItemFocusAnim-grey": "_24LF-yODOtVFSuejuQ_xu2",
          "ItemFocusAnim-translucent-white-10": "uTNXVgYo8JPxZgJyTl9LQ",
          "ItemFocusAnim-translucent-white-20": "ItJlj151fY2eNJEBeWVOA",
          "ItemFocusAnimBorder-darkGrey": "_2blFzc6unV1uJG63OhTkyP",
          "ItemFocusAnim-green": "_3CaU0PXdB2ThLG-Q0foVrK",
          focusAnimation: "_1EZdMwnQzoxjAOoFpXHuZ_",
          hoverAnimation: "kfeP_UGfxsZwzWvFD4ytm",
        };
      },
      70342: (W) => {
        W.exports = {
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
      49118: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strBarForegroundColor: "#1a9fff",
          strBarBackgroundColor: "hsla(0,0%,100%,.1)",
          ThrobberContainer: "_1dfVPvR3jkg7V5wYeWqGje",
          PlaytimeHistoryBrowser: "_3Q_itK0y9iym9Rf_hRp2U4",
          PlaytimeHistoryDay: "_1tN3Fqg4eB8P5q6VnP8zsU",
          Empty: "_37RhGmL2y7OEHIbTvldv-2",
          PlaytimeOnDay: "_1vwoIEn92Lj8rkCnAsZInK",
          DateColumn: "_2I7p_DHJUzX-5BTwCYcuSY",
          TotalTimePlayed: "_5khZsbwVzrlOZXIrVdCIq",
          PlaytimeHistoryBin: "OX7BJg-jEVTFZj9J7KJxS",
          TimeLabel: "zaoHrBgKPKb_8Q_YRESk5",
          TimeRangeTooltip: "_1kxEvVLftK9NWs_-7SKLLe",
          PlaytimeSessionRows: "_2oOtUbkUZKW62otpARvY3f",
          SessionRow: "AkQ21cho5ASGMCVe165gM",
          GameIcon: "_1AKx5e4_hXQPEx3rkBwKbz",
          SessionRowTimeRange: "_2tyLYvLUbwnf1okXNXBFG4",
          SessionRowGameName: "dWjmpmQNPsKL-1WrIqiMw",
          AppListTooltipApps: "_2om9ImjdyOLWxlqRouLCL",
          AppListTooltip: "_2gqejUUMCHd51lF8qlQ1ns",
          AppImage: "_3Jl4YQadMqVmN9rTlDoxsJ",
          Loaded: "emNZdRnzXbk4gR0vRINf8",
          BackgroundAnimation: "_1skXl8WnIZKGbIikWx5BQ-",
          "ItemFocusAnim-darkerGrey-nocolor": "_1-51lPwmuvdjQkvcL4mg0p",
          "ItemFocusAnim-darkerGrey": "_2zLHr0TQ3Cw2_wBzgQqi1u",
          "ItemFocusAnim-darkGreySettings": "_3ssmTtvWPb13bQl5_2beiv",
          "ItemFocusAnim-darkGrey": "_1R0sxt2GyuTiRYm0lI8lJv",
          "ItemFocusAnim-grey": "_34M9qiJoSUi5SHy4MZsgPR",
          "ItemFocusAnim-translucent-white-10": "MIFiVCx0d1Zy-bjTA_w1X",
          "ItemFocusAnim-translucent-white-20": "Re5K2D0jN-MNmc8WhESaT",
          "ItemFocusAnimBorder-darkGrey": "_238UxDx4xOQoNJYxliEhdt",
          "ItemFocusAnim-green": "_2LrzaGXXvD_v3bx9bHNk0E",
          focusAnimation: "_24chPJqOvTQQi5ZL5IGWlg",
          hoverAnimation: "_3u4E9lRS_kkm8hY_-pJOTk",
        };
      },
      63043: (W) => {
        W.exports = {
          narrowWidth: "500px",
          nMediumWidth: "620px",
          nNarrowWidth: "500px",
          FamilyGames: "_3Pnf9j-DVi9cm7cJ383yI1",
          Header: "LP9H7bBiPB8N8jFzCQumL",
          Buttons: "_35BlnGUYkm2MwN318q0gZU",
          ButtonWrapper: "_1ve5nrPCrUjlbKp1PXsiJD",
          Button: "_2UOyb8dGbKlL6QDQiqYFoc",
          FamilyGamesSection: "_1o7lKXffOJjZ_CpH1bHfY-",
          Label: "_1M5eDPxFjv1ByJEK38h5Tu",
          Count: "_3x604kYqXRJbqWmeLWAHrj",
          FamilyGameItem: "gDwBcqV9krVb3dtAUyPfF",
          Selectable: "_1tuLMqXoTmpR6w6XzgePfq",
          HoverSource: "_2BUegwuSTdD1TQkecqv9B3",
          LicenseCount: "OchtG0jyJQXcr2o0t34q7",
          FamilyGamesSearchBox: "_2wXQTbH2iavMx1sFDH_Xpn",
          Input: "_29VTx5sjP43UH8k1twOUgE",
          FamilyGamesControls: "_1uN1cZ9U62K-VgLto02fC3",
          FamilyGamesSort: "_24xN9g6I0FudAHqb3lnrNP",
          FamilyGamesSortSelector: "_259TK-AiNNlYVUpyzutBh7",
          Selected: "_1dj3rXk2ck61UrJGt3pP9e",
          DirectionIndicator: "_3HYMkq8Ske2dJk0k51ve3J",
          AdditionalHoverCtn: "_3-q8xJGfslyHFJUlzGes_H",
          Loading: "_15y-D2NYrFwOAZ-AfJKy6Q",
          Error: "_3fKMV_g7GIfskW_oGQqbaD",
          ExcludedCode: "_3vYQgrrL-TpIRWQXAb6Ip3",
        };
      },
      70322: (W) => {
        W.exports = {
          narrowWidth: "500px",
          IncomingInviteRow: "_1GICwsV-USjHjcokRCO32i",
          InviteRowHeader: "AYHhNB9WZZdRWcPm20I_O",
          Avatar: "_3LPMSQpCd5Dh0Tocxewoz1",
          PersonaName: "_3x3dDlfuVsF9BPonkyl0Gs",
          FamilyName: "boWA49TLaFWuuS_Ky4jMH",
          RoleIcon: "_3BhC4y8ABw34stugO_WlSv",
          RoleBlock: "_1NYqqNQkcNPs6ODhW3Ypqh",
          RoleName: "EVV-aE5THCnYYlB0cbnGO",
          RoleDescriptionShort: "OKxvRrmFkD6Cbv6RU6Y7",
          RoleDescriptionList: "_1X5cbFGqhqwIKqeZJyMvCY",
          LearnMoreLink: "_32K94kiZEjBxfu4vkQbXWU",
          Buttons: "iZCbdcapOSWH8Bs2semvQ",
          AcceptInviteButton: "_34In_8oy6NEHpqq-u5b5h0",
          DeclineInviteButton: "_3CEsyOSHFq2lEntEwtgg1u",
          WallOfText: "_20gCk09IqQIza6FC80pgIq",
          FamilyIncomingInvites: "_3-_pKi5c78GisE2tgnAzly",
          IncomingInvitesHeader: "_3zIHX47b2_-2BEnV4mv6AF",
          IncomingInvitesDescription: "_1j-XQvhcdMiYcBB3tYFDnM",
          DimChildren: "_27iWdfYJ_Jr2hfkHCNphO6",
          IncomingInviteGone: "_2spwHF-2Z9jxpKmreqhL3_",
          ThrobberContainer: "_2gVuBqs4SNVBbo83R8fc23",
          DialogText: "kRsD9njPy9CclBtipmAzj",
          DialogWarning: "_2qS0rCuMQ43B6InDgKODss",
          TwoFactorCodeBox: "_3-gKfctqYjcg0lvG4G_N3V",
          DialogButtons: "U6nihCNIspsVrDb7fjYhK",
        };
      },
      80329: (W) => {
        W.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          InviteButtonCtn: "O_QQdR2Hi2oq9k3mKRAQl",
          InviteButton: "_2hzB3GB7oJwh8smVP_Jjsq",
          SelectAccountContainer: "_3VYLj7Kf9u3FCG4cI1gnM7",
          SelectRoleContainer: "_1JFlDaoGEUJH6J-nks7h-3",
          CloseButton: "_3GXpDskii1UGmRC-JIajGR",
          Text: "_2HfX7xCmrFI48UShMW9H7k",
          Header: "_1YrjrkSMcrtL9YsMwaq-ky",
          MethodButtons: "_2MucXf7fH6QXYLpMhmrT8S",
          Invite: "Be14tb8AvIFhQgzHQ2Gw7",
          PlayerName: "_5DVuU_EZQ7FWM_Gs2mObd",
          InviteRoles: "_1jIMhV96QtN_-zMiSXwe8U",
          InviteRole: "_14G2MX9wX6jZwm4vRY9uZ-",
          RoleIcon: "MzHevEd7isedooX-dErvr",
          ProfilePlusRole: "IZ-EC_FBcyFeQM2ZdsOfn",
          RoleName: "_1Ja4dF0wi9qfpZpCIbSb-U",
          ProfileSelector: "_2ABK2CdU7SYpNUQL2ZSddE",
          ProfileChoice: "_2yH7U_to45JvL82cS0kLO_",
          InviteFamilyMember: "_1X3V1K6d_Smanitk41kTtC",
          InviteMemberExpandButton: "_1G0KkUtCmwE6qlPSgXMXIj",
          InviteSection: "_10bmoN5pr9IoO7oOL8fSJ0",
          CloseInviteSection: "_1wpqyKESN_wEn81FPDQ94h",
          GroupSlotCooldownDescription: "T0rj6BcIrWI_LupPa0Krq",
          InviteRoleDescription: "_10qEfACVIhYw-jJZWn4F7G",
          ActiveRole: "_2Z5KMxr37lGmQOHfyK7uXu",
          InviteMethodHeader: "_1PqTYpV-fONsTV2vNQlpPW",
          InviteMethods: "LOswIy4swgXiAV3TibgcO",
          InviteMethodButton: "ikBZQxjgLua65wWg99hcW",
          SelectedFriend: "_2UvjLeiLbL0VdXxQ48cdDm",
          Avatar: "_3s-ErxnICuPZvoWoVW2_Kr",
          RemoveSelection: "UkN21FQZ2LHSovqod6EG7",
          InviteSectionButtons: "_2SSgCAiCn56XkIDHnLrry6",
          CancelButton: "_15nCumxrzH9OacfaL6NRGn",
          SelectFriendModal: "JR6QKI9nDOVWuQsyrwBX",
          InviteFriendSelector: "_21OW_bu1x6BeYWyN4DWfhk",
          InputContainer: "_2SnCfenTfnFsm3g2upYnsl",
          InviteFriendInput: "Rz-seYcbbpBPbzlRxLnso",
          FriendList: "_1G_Dah5zXlksozZnevEGRE",
          FriendSelectorRow: "_2qyKwMuoCMj5o3CO6NW_IO",
          InviteText: "_2H_R6xqjQOWNiRA9qQrhV1",
          ThrobberContainer: "_12k1ELQW10xFpZWSrbnaad",
          FriendSelectorPlaceholder: "_2r46bpLc_qpnLHbnayzmSG",
          Error: "rE1IiJak5Yg84H2WpLPYJ",
          BackgroundAnimation: "_2gMFjtI3Npavu3drgAC-AR",
          "ItemFocusAnim-darkerGrey-nocolor": "_15Cg2WWyrbx6rCN-pmv59J",
          "ItemFocusAnim-darkerGrey": "_2rRq8Gy9yiXoX8z6rDNWVn",
          "ItemFocusAnim-darkGreySettings": "_27pb_HIkONceiGG5UIoqY9",
          "ItemFocusAnim-darkGrey": "_2WHt-XB4uzgTCI4w5ZfQM7",
          "ItemFocusAnim-grey": "_3vZZjLOqYQmrrgAPi_7AiJ",
          "ItemFocusAnim-translucent-white-10": "y9mw3g-UiKMQ_H2lckG0Q",
          "ItemFocusAnim-translucent-white-20": "dOJ_xBzYKLq_t7kNPf5pU",
          "ItemFocusAnimBorder-darkGrey": "_1SidwQ9O2E2VOFjgEURpzO",
          "ItemFocusAnim-green": "E8HfymaSbnYz0P9nwLk64",
          focusAnimation: "hEfJZd3QktV9Zsg-tsoEe",
          hoverAnimation: "I-3xyBNE4dVX5NZUEtdk5",
        };
      },
      16195: (W) => {
        W.exports = {
          narrowWidth: "500px",
          nFamilyHistoryRowHeight: "30px",
          colorCautionSign: "#ffc82c",
          FamilyManagementHeader: "_34_DnraB5jiO2jDJudbSRN",
          SectionDescription: "_1z6ZWxnxh-VlWIVrqxYoc2",
          AccountHeader: "_2kInmhTbJ8d4tM_ShAhrbw",
          BetaBadge: "_14wvJiLS17Em5n9DNQnI0n",
          PreferencesHeader: "_17sdi2EINuHcyjS90RFKbR",
          FamilyContainer: "_2Fq1ae8YHWoFHZKQRZRJJS",
          FamilySubsection: "_2SKgwaV-ptKsHUdNFpSDOI",
          FamilyTabs: "_1W5zoA-Qt32wmR4cAQXU4P",
          FamilyTab: "_2OMeCsUQ6WiH_72QYhi0I0",
          ThrobberContainer: "_2guJiCyy6CRVp5xixbQ2hs",
          ManageFamily: "_3ayYOCw_ZCm0rF1vDVmwfO",
          FamilyNameAndSlots: "rG9v6g24n_n7jdI7rK5zY",
          FamilyNameEditor: "_3OIDlxU9x7bhWVKKi8wwaH",
          YourFamily: "_2odf9s6doISgveVnyo9_Km",
          FamilyName: "_1X4chbdWPqQwoi2pg7-ebI",
          FamilyNameButton: "_21tUbooOHqAFZy0hfNkcnb",
          EditNameInput: "_2cXhAZJGVLrDD_TVE6hdwq",
          EditButton: "o6KnEAuyHthAy8wUoldpD",
          SaveButton: "_39Ldnfxr7DlhXHZZgBVF4W",
          CancelButton: "_15P7ohP3vq0SmtT5d274y1",
          OnboardSplashContainer: "_3HBvbSDPYGc6K_O32LovGq",
          WallOfText: "xdQkSQDFlnZtUOE3pU4T4",
          SplashCooldown: "spLt3RYXreScsUzo4yQRa",
          UndeleteSplashButton: "_3zUm6DMGoA_yO_qpX09tpM",
          OnboardSplashButtons: "_12md3Zc1vL6ogBUmI1k4Jh",
          OnboardSplashButton: "_2R8KFsdzOosYGjDF6ahgMK",
          OnboardSplashButtonLabel: "_1hqqUWxUB1RwYN5jPH4nkd",
          OnboardSplashButtonBadge: "_1JrBU1ac5Cr9HZ2VrohqRJ",
          FamilySettingsContainer: "hMgR2gFc_fP8LK9e2Vwvq",
          FamilyHistory: "_1t_5IvfyF8aF_tGXLkprpc",
          Entry: "_2xRpeEOhZkwE0Gm2T2nIrX",
          Timestamp: "_3s0E2Z45PIt1bxfcerFwdD",
          EntryText: "_3G8Ee5GQgCv2RgtSRwZSHB",
          IncomingInviteGone: "_2sKy8KMVlq2ZVtrEewVS88",
          CreateFamilyContainer: "_3uS4aqCTqfDSxjRsr1bSA-",
          CreateFamilyForm: "_10fN6VvSPscMJyGHfvePu3",
          JoinFamilyContainer: "JtCI1J9RW7AZBsaJV_p5E",
          FriendCodeContainer: "_2gJ6mJtdYFclXTWyIArECF",
          FriendCodeDisplay: "_1jANphzwbKMsFwdNGymA1",
          FriendCodeCopyButton: "_38Z3nE8M3k-kUjLmv9e4Nu",
          YourFriendCode: "_24iUjHaXmTFLxuFxA6BgTU",
          JoinWarning: "_2nK5N79jK_gB0gCK-fVR5k",
          DialogText: "_2ujgTTfdXjs504qXqBeqdE",
        };
      },
      34286: (W) => {
        W.exports = {
          narrowWidth: "500px",
          FamilyMemberActionsDialog: "_16A2KJKlnPu1uaHtIUYb4F",
          Title: "_1oYQjM_dBVgi6H5huhPIki",
          Separator: "_sqvJIOU6QsulQvWR_x2C",
          ButtonList: "_1Bw-Ncug82ur21Gez97m41",
          FamilyMemberRow: "TTgPUDgZKRwRLHs0om_Jn",
          TopRow: "_20bk3gw7mQb1rm93YkO757",
          ManagementButton: "vDtJqUVxjZtCpsN9muEoX",
          Remove: "UzQPbZ_qXs2s2AEpznJmt",
          DeleteFamily: "_2zCYLK35m4KaTz5TqLnLt3",
          CancelInvite: "-ycr5X2s8Env2lwBiW1Gf",
          RemovalDescription: "_1qHe5zeiRC5b-3dT5JRul4",
        };
      },
      73712: (W) => {
        W.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          nParentalListRowHeight: "40px",
          nAppGridRowHeight: "80px",
          FamilyMemberParentalSettings: "_34chYS1nDoOgMNeYQ2KpPQ",
          DropDownCtn: "_1TwO8yn7ASLQbAlH4osa5H",
          ToggleCtn: "lrSecLbPDqHGdI_gp4x5C",
          ButtonCtn: "_2R0PG64-Sn4ejGmmWHbT2a",
          ReturnToFamily: "_1wt3faSKMXs0FgGEy9uvMF",
          HeaderContainer: "_9EsRZs9cB4vhvCP1Pk_LP",
          ErrorLoading: "_2sfuO43Z8B5siCLX3SXkZ0",
          ConfirmCopyDescription: "RWuJfirXaFrrS6t62DdSl",
          ParentalHeader: "nF5tVZsrtsN88yqlPUc2t",
          Title: "_-8pd6RexnzXuLFobm1T_",
          ParentalGameListHeader: "_2oJ9Bxj4Co72Go5Mq42_8J",
          SearchCtn: "_4O472KmMFFSaSAt4-H58T",
          SelectorCtn: "_257siDy9PId0Lc6msYf5YS",
          Selector: "_2Qb3-2-5hh4aG44Uv8q7tK",
          ParentalGameListOuter: "_3RbIcjnPaWTf4nrib_HPAa",
          Content: "_3FkfJa0i5BibbYgnVlSDrQ",
          Empty: "YKTZD66mFdor5BQFmpdzy",
          ParentalGameSection: "_1ugy_CuPjW56powwI-s6vo",
          SectionHeader: "_5THBvRlV9B8tkkqRPlnFA",
          ParentalGameRow: "e8fXQNSRl1DAFQiRHLK2a",
          Name: "_3L8NHpo6ao9nHVhHW4CJnU",
          Allowed: "_2JNwI2OBNP8taZ7Z34Tulo",
          Icon: "_1HZTsnBVB3gvbCbtf4Rckz",
          RoundCheckbox: "_30BdYsMXN1KhvFxz_fCUrS",
          ParentalFeatures: "Cj34zDTvglJR_N8wUJM2s",
          ParentalPlaytimeInner: "_1XMBkpG_zeKHHXvOLAWyLB",
          ParentalPlaytimeRow: "_2X1GpAOA6OS_jbvfZEbmuy",
          Day: "_2WgTQHCpIlhduEs0_ySokI",
          Windows: "_30S29pj6VtyDi-6ffWPYFG",
          Minutes: "_2q90EvCIjIfUU67XpXQWua",
          ParentalPlaytimeWindowsDialog: "_1EzaeIxWkbPFGeLyQ98IV8",
          ParentalPlaytimeWindows: "_11oc_xrTDyyj9ZIxooI-",
          Grid: "_2arYwLUx8UfUtRcIbFfI-B",
          Input: "y-FOnDjy_tNVLyKOnQeqk",
          ParentalPlaytimeGrid: "l1Uf2XvwgC0si0e3wdxRD",
          Hours: "PY2SzP1sfP0Ll0V2CzE0y",
          HourMarker: "_68UkF7YzyOQrMl7YbBADF",
          HashMark: "_3kxXNsmvYCtmrscTD9Hsh0",
          ParentalPlaytimeWindowSelector: "_1xAKt33YaSfi9TbbgpIb5T",
          Enabled: "qJJzOstLWPhnslUP39MVH",
          Locked: "SBNDnArArnkjfTiY2AeNp",
          ParentalPlaytimeWindowsDialogInner: "w9peVHXHbe1cE2WEnClu3",
          TopRow: "_3jjYvVw0DXqdRBamdby62z",
          DaySelector: "h80CX0NYBW4dEIMSCZBuL",
          Right: "_3r2iJrVwylbyvjWNXwKjhg",
          PlaytimeDescription: "_1--tArXALehoeK4lZrrbA4",
          PlaytimeButtons: "_2zGFisWaeH_w7QiULc8Ag",
          ParentalApp: "wpR_GbuToqyTLpZsMsX3C",
          Children: "_30MsmlQHLV3q3ZvN0CLSfg",
          ViewSelector: "_2YLQ1uAUrlpbuBRLIL6ZnO",
          Selected: "_24VpjKSJH67vIJjrqQGiBn",
          FilterDropdownCtn: "_3EmrLTvrmiuJhDHruK1InH",
          FilterSection: "_1sE_cisDa8U8UTvKWU9Jap",
          FilterRow: "_2I98IhEnkkp7yb-OAZmeFR",
          FilterInfo: "_3AuGnq9lNERQibR7oKltQE",
          FilterToggle: "_3ONn74kY596zlxdOS6aIPC",
          FilterModalButtons: "_39LNRgxdemgkP8aWCKa6Og",
          FilterDropdownButton: "_2xKXgM4yOrIS77zORU2B54",
          ParentalPlaytimeInput: "_1HPx9mmyzR0JvJprjPjyTs",
          Button: "_1snFfw3ZgFquKvyfpzcnfk",
          ButtonWrapper: "_1QZ73K7rBNcO70omwFjI_S",
          Datetime: "e_tMs874rAZ2qdE84Uqfq",
          ContentDescriptorParentalSettings: "_2QmEXbQMp-fr7KyOPphSk4",
          ContentDescriptorParentalSettingsInner: "_39Yb4R8Nr6Q9CJ_CXvsoca",
          ContentDescriptorRow: "DIAUSLue3_bmzvCwbTeIG",
          ContentDescriptorInfo: "_2fn59ljMtlie2g5NSiaVxH",
          ContentDescriptorName: "_2d-NRXGvXbBXFM1u3qO8HK",
          ContentDescriptorDescription: "_1CzqDvlI9BiZ34y76ZxiDP",
          ContentDescriptorToggle: "_2BQ5kejzl2IpMdjad_8Zmd",
          ContentDescriptorExampleApp: "_2Dst3UKiLxmHuFByhiTRzj",
          BackgroundAnimation: "_3d47hDyXHjImQ-0sBNKN4m",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Va_HlTCtMyS00qHlQAUEM",
          "ItemFocusAnim-darkerGrey": "_3p3wgY2eTPLi2hqQpaK9p2",
          "ItemFocusAnim-darkGreySettings": "HEYNYwmGnFOfnMkG7Az1U",
          "ItemFocusAnim-darkGrey": "_2i-dF3_dt4Ic_OSaazxG3w",
          "ItemFocusAnim-grey": "_3SyVw-_Wu7fZM8KhSrs9rO",
          "ItemFocusAnim-translucent-white-10": "_20DNPKptIqSEKzhV0GH0xW",
          "ItemFocusAnim-translucent-white-20": "_3sKISgTqXMmXihaUvMOYeZ",
          "ItemFocusAnimBorder-darkGrey": "_1YBr5gruJDFH9r8hJ30BPR",
          "ItemFocusAnim-green": "_1EQrVuWmXvELpyS3EgWgn3",
          focusAnimation: "_31hEvRiEdPzD2TCl1Dqyxd",
          hoverAnimation: "_3elDD1evSEYwuNdPRRVKeQ",
        };
      },
      36175: (W) => {
        W.exports = {
          ThrobberContainer: "_3VjPauBxHErDMNCJVlsgYs",
          FamilyPlaytime: "_1b1sthnt2e6izmHyDW7fam",
        };
      },
      84278: (W) => {
        W.exports = {
          narrowWidth: "500px",
          FamilyRequests: "_1VbIwyMsiBOa0cCBINYbUo",
          FamilyRequestItem: "_2g9TrrGm4UVImhlSMi3Ab4",
          RequestInfo: "_1gqAhfkhB_yUwqiMnvwFtO",
          Feature: "_2zPRlByGX4zzYpKzhpw0dW",
          FeatureList: "ccxwViiWCqhlNZIMKy0Dx",
          CartSummary: "_25GJW5fEysaxc-6VinR_c_",
          SelfRequested: "jxmvXGE_bd9-iXyJ1mBMX",
          TimeResponded: "_2mypsPC8VzdlSBBGYvRd1T",
          StatusCtn: "d6z4dkaukQvCKtJEog0Um",
          Pending: "_38w9gDJ4Dba_cpV4cRzvfe",
          Buttons: "_2T2ciAqKK4YMDU48BrX3Py",
          AvatarAndPersona: "i8dlhqpE5lRgbz0R-UIRK",
          RequestResponse: "_1M_WB3PUCjX1GT-w3A1es5",
          ParentalFeatureRequestItem: "_3aZNXtMcw5GPCPLdGtqnlQ",
          ParentalPlaytimeRequestItem: "_1FS_d-SzgkBxRpPjD8P57h",
          PurchaseRequestItem: "wm_NtPLFihN_RUct8gc9h",
          HoverSource: "_8CRZn6CXwhlJ8ODhQbkp2",
          PackageLinks: "PaWyIiMaw2nN1x3vzbIPW",
          PackageLinkItem: "_24yzKI2Y4Kl01CPt0KotCe",
          PackageLinkItemText: "_1jx9ws3qC6giFHNd9kXKKg",
          PackageShowMore: "_1c6u1vQE3mhKaPmnRAaHuL",
          ApprovePlaytimeDialog: "_1ZDtFPLB0QT6g3T7TTRc2I",
          CurrentHours: "_1NbpMdC9cNXB7ZXejpX0JO",
          Text: "_2bwyfbue6YKiiz5sPD-aUw",
        };
      },
      4399: (W) => {
        W.exports = {
          InlineContainer: "_3nHerBg5ELmarLbN--Gmpp",
          RemoveOnEmpty: "_1Y8hK5A-ASv-Y5SGGb5Em5",
        };
      },
      27309: (W, de, u) => {
        "use strict";
        u.d(de, { A: () => e });
        const e =
          u.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
      },
    },
  ]);
})();
