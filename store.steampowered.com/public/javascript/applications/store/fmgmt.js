/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [67072],
    {
      91354: (k, ue, y) => {
        "use strict";
        y.d(ue, { c: () => ae });
        var e = y(7850),
          g = y(64238),
          p = y.n(g),
          U = y(16412),
          J = y(36118),
          P = y(89206),
          z = y.n(P);
        function ae(L) {
          const { bExpanded: A, setExpanded: r } = L;
          return (0, e.jsx)(U.wl, {
            className: p()(P.ExpandRowButton, A && P.Selected),
            onClick: () => r(!A),
            children: (0, e.jsx)(J.b8_, { direction: "down" }),
          });
        }
      },
      58679: (k, ue, y) => {
        "use strict";
        y.d(ue, { ff: () => M, iM: () => Y, iV: () => V, pC: () => oe });
        var e = y(7850),
          g = y(90626),
          p = y(20803),
          U = y.n(p),
          J = y(36118),
          P = y(18210),
          z = y(2289),
          ae = y(36707),
          L = y(46943),
          A = y(76559),
          r = y(4874),
          N = y(35098),
          x = y(42993),
          me = y(58612),
          le = y(93125),
          X = y(9852),
          W = y(53107),
          E = y(98609),
          Q = y(99412);
        function S(b) {
          return (0, e.jsx)(J.d1w, {});
        }
        function T(b) {
          return (0, e.jsx)(J.Bir, {});
        }
        function Y(b) {
          return (0, e.jsx)("div", {
            className: (0, ae.A)(p.RoleIcon, b.className),
            children: b.role == z.PQ.sf ? (0, e.jsx)(T, {}) : (0, e.jsx)(S, {}),
          });
        }
        function V(b) {
          const { steamid: O } = b,
            K = (0, N.js)(O),
            I = (0, me.M8)(),
            $ = (0, X.T)(),
            ee = I.data?.get(new A.b(O).GetAccountID()),
            de = $.data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              K.data?.m_strPlayerName || "\xA0",
              " ",
              de &&
                ee &&
                (0, e.jsxs)("span", {
                  className: p.playerNickname,
                  children: ["(", ee, ")"],
                }),
            ],
          });
        }
        function pe(b) {
          const { role: O, persona: K, isSelf: I } = b;
          let $ = b.size || "Large";
          const ee = (0, me.M8)(),
            de = (0, X.T)(),
            ce = ee.data?.get(K.GetAccountID()),
            _e = de.data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: p.ProfileLink,
                children: [
                  (0, e.jsx)(L.i8, {
                    className: p.Avatar,
                    persona: K,
                    size: $,
                    statusPosition: "right",
                  }),
                  (0, e.jsx)(le.D, {
                    className: p.PlayerName,
                    bIsSelf: I,
                    bHideStatus: !1,
                    bHidePersona: !1,
                    bParenthesizeNicknames: _e,
                    bCompactView: !1,
                    persona: K,
                    strNickname: ce,
                    eFriendRelationship: Q._UC,
                    bEllipsisName: !0,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: p.RoleAndIcon,
                children: [
                  (0, e.jsx)(Y, { className: p.ProfileRoleIcon, role: O }),
                  (0, e.jsx)("div", {
                    className: p.RoleName,
                    children: (0, P.we)(`#FamilyManagement_Role_${O}`),
                  }),
                ],
              }),
            ],
          });
        }
        function oe(b) {
          const O = (0, g.useContext)(r.IN);
          return O.errorMessage
            ? (0, e.jsx)("div", {
                className: p.FamilyErrorDisplay,
                children: O.errorMessage,
              })
            : null;
        }
        function M(b) {
          const { persona: O, role: K, invitePending: I } = b,
            ee = (0, x.LH)() == O.GetSteamIDAsString();
          return (0, e.jsxs)("div", {
            className: p.FamilyMemberStatus,
            children: [
              (0, e.jsx)(pe, { role: K, persona: O, isSelf: ee }),
              I &&
                (0, e.jsx)("div", {
                  className: p.InvitePending,
                  children: (0, P.we)("#FamilyManagement_InvitePending"),
                }),
              ee &&
                (0, e.jsx)("span", {
                  className: p.MeBadge,
                  children: (0, P.we)("#FamilyManagement_Me"),
                }),
            ],
          });
        }
        function H(b) {
          const { steamID: O, role: K } = b,
            I = usePlayerSummary(O);
          useQuerySetMessageOnErrorEffect(
            I,
            "#FamilyManagement_ErrorLoadFamilyGeneric",
          );
          const $ = useCallback(
            (ee) => {
              let de = `${Config.COMMUNITY_BASE_URL}profiles/${O}`;
              OpenLinkInNewWindow(ee, de);
            },
            [O],
          );
          return I.isSuccess
            ? jsx(Panel, {
                className: classnames(styles.FamilyMemberRow, styles.InfoRow),
                onActivate: $,
                children: jsx(M, { persona: I.data, role: K }),
              })
            : null;
        }
      },
      54407: (k, ue, y) => {
        "use strict";
        y.d(ue, { B3: () => T, KM: () => X, KT: () => S });
        var e = y(41735),
          g = y.n(e),
          p = y(58632),
          U = y.n(p),
          J = y(90626),
          P = y(80902),
          z = y(75233),
          ae = y(72604),
          L = y(76559),
          A = y(34592),
          r = y(3166),
          N = y(35038),
          x = y(27386),
          me = y(68312);
        const le = "nicknames";
        function X(V) {
          const pe = (0, me.KV)(),
            { data: oe, isLoading: M } = (0, P.I)({
              queryKey: [le],
              queryFn: async () => {
                const H = new Map();
                if (r.iA.logged_in) {
                  const b = N.w.Init(x.w_T),
                    K = (await x.xtC.GetNicknameList(pe, b)).Body().toObject();
                  K?.nicknames &&
                    K.nicknames.length > 0 &&
                    K.nicknames.forEach((I) => {
                      I.accountid &&
                        I.nickname &&
                        H.set(I.accountid, I.nickname);
                    });
                }
                return H;
              },
            });
          return oe ? oe.get(V) : null;
        }
        async function W(V) {
          if (!V || V.length == 0) return [];
          const pe =
            (0, r.yK)() == "community"
              ? r.TS.COMMUNITY_BASE_URL
              : r.TS.STORE_BASE_URL;
          if (V.length == 1) {
            const oe = { accountid: V[0], origin: self.origin },
              M = await g().get(`${pe}actions/ajaxgetavatarpersona`, {
                params: oe,
              });
            if (
              !M ||
              M.status != 200 ||
              M.data?.success != ae.R ||
              !M.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, A.H))(M).strErrorMsg}`;
            return [M.data.userinfo];
          } else {
            const oe = { accountids: V.join(","), origin: self.origin },
              M = await g().get(`${pe}actions/ajaxgetmultiavatarpersona`, {
                params: oe,
              });
            if (
              !M ||
              M.status != 200 ||
              M.data?.success != ae.R ||
              !M.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, A.H))(M).strErrorMsg}`;
            const H = new Map();
            return (
              M.data.userinfos.forEach((b) =>
                H.set(new L.b(b.steamid).GetAccountID(), b),
              ),
              V.map((b) => H.get(b))
            );
          }
        }
        const E = new (U())((V) => W(V), { cache: !1 }),
          Q = "avatarandpersonas";
        function S(V) {
          const { data: pe, isLoading: oe } = (0, P.I)({
            queryKey: [Q, V],
            queryFn: () => E.load(V),
          });
          return [pe, oe];
        }
        function T(V) {
          const pe = (0, z.jE)(),
            { data: oe, isLoading: M } = (0, P.I)({
              queryKey: [Q, V],
              queryFn: async () => {
                const b = await E.loadMany(V);
                return (
                  b.forEach((O) => {
                    if (O instanceof Error) return;
                    const K = [Q, new L.b(O.steamid).GetAccountID()];
                    pe.setQueryData(K, O);
                  }),
                  b
                );
              },
              enabled: V?.length > 0,
            }),
            H = (0, J.useMemo)(() => {
              const b = new Array();
              return (
                oe?.forEach((O) => {
                  O instanceof Error || b.push(O);
                }),
                b
              );
            }, [oe]);
          return M ? null : H;
        }
        function Y(V) {
          return ReactQueryClient.getQueryData([Q, V]);
        }
      },
      9852: (k, ue, y) => {
        "use strict";
        y.d(ue, { T: () => z });
        var e = y(72604),
          g = y(35038),
          p = y(27386),
          U = y(80902),
          J = y(68312);
        function P(ae) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const L = g.w.Init(p.tzK),
                A = await p.xtC.GetCommunityPreferences(ae, L);
              if (A.GetEResult() != e.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${A.GetEResult()} ${A.GetErrorMessage()}`,
                );
              return A.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function z() {
          const ae = (0, J.KV)();
          return (0, U.I)(P(ae));
        }
      },
      95198: (k, ue, y) => {
        "use strict";
        y.d(ue, {
          H5: () => le,
          Rl: () => r,
          TW: () => A,
          V: () => X,
          eH: () => me,
          fd: () => x,
        });
        var e = y(18735),
          g = y(80902),
          p = y(41735),
          U = y.n(p),
          J = y(3166),
          P = y(18210),
          z = y(72609);
        const ae = null;
        function L() {
          return ae.includes(UserConfig.country_code);
        }
        const A = [e.ED, e.M, e.mx, e.T4, e.u7];
        function r(S) {
          let T = [];
          switch (S) {
            case e.ED:
              T.push(e.M), T.push(e.mx);
            case e.mx:
              T.push(e.T4);
            case e.T4:
              T.push(e.u7);
              break;
          }
          return T;
        }
        let N = new Map();
        N.set(e.M, e.ED),
          N.set(e.mx, e.ED),
          N.set(e.T4, e.mx),
          N.set(e.u7, e.T4);
        function x(S) {
          let T = [],
            Y = N.get(S);
          return Y && (T.push(Y), T.push(...x(Y))), T;
        }
        function me(S) {
          return (0, g.I)({
            queryKey: [
              "examples_for_content_descriptor",
              S === null ? null : S.valueOf(),
            ],
            queryFn: async () => {
              if (S === null) return [];
              const T = new URLSearchParams();
              return (
                T.append("filter", "examplesforcontentdescriptors"),
                T.append("ignore_preferences", "1"),
                T.append("category1", "992,994,998"),
                T.append("descids", S.valueOf().toString()),
                T.append("json", "1"),
                (
                  await U()({
                    url: `${J.TS.STORE_BASE_URL}search/results/?${T.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function le(S) {
          let T = null;
          switch (S) {
            case e.ED:
              T = "#ContentDescriptor_GeneralMatureContent";
              break;
            case e.M:
              T = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case e.mx:
              T = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case e.T4:
              T = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case e.u7:
              T = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, P.we)(T);
        }
        function X(S, T = !1) {
          let Y = "";
          switch (S) {
            case e.ED:
              Y += (0, P.we)(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case e.M:
              Y += (0, P.we)(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case e.mx:
              Y += (0, P.we)(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case e.T4:
              Y += (0, P.we)(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case e.u7:
              Y += (0, P.we)(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            T &&
              (S === e.T4 || S === e.u7) &&
              (Y += " " + (0, P.we)("#ContentDescriptor_Affirm18YearsOld")),
            Y
          );
        }
        function W() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function E() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function Q(S) {
          return !UserConfig.logged_in ||
            !S ||
            !S.content_descriptors_to_exclude
            ? W()
            : S.content_descriptors_to_exclude.map(
                (T) => T.content_descriptorid,
              );
        }
      },
      27126: (k, ue, y) => {
        "use strict";
        y.d(ue, { h: () => p });
        var e = y(90626);
        const g = {};
        function p(U) {
          const [J, P] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              let z = !0;
              g[U]
                ? g[U].refCount++
                : (g[U] = { list: window.matchMedia(U), refCount: 1 });
              const ae = g[U].list,
                L = () => {
                  z && P(ae.matches);
                };
              return (
                L(),
                ae.addEventListener("change", L),
                () => {
                  (z = !1),
                    ae.removeEventListener("change", L),
                    g[U].refCount--,
                    g[U].refCount === 0 && delete g[U];
                }
              );
            }, [U]),
            J
          );
        }
      },
      80718: (k, ue, y) => {
        "use strict";
        y.r(ue),
          y.d(ue, {
            FamilyTabContainer: () => sn,
            GenerateNameElementForHistory: () => an,
            default: () => gs,
          });
        var e = y(7850),
          g = y(2289),
          p = y(90626),
          U = y(42993),
          J = y(24660),
          P = y(16412),
          z = y(36118),
          ae = y(21418),
          L = y(85599),
          A = y(36707),
          r = y(18210),
          N = y(70322),
          x = y(4874),
          me = y(58679),
          le = y(46943),
          X = y(35098),
          W = y(92757),
          E = y(96538),
          Q = y(3166),
          S = y(19298);
        function T(i, t) {
          return new URLSearchParams(i.search).get(t);
        }
        const Y = "invitation",
          V = "nonce";
        function pe(i) {
          const { cooldownSecondsRemaining: t } = i,
            n = {
              month: "long",
              day: "numeric",
              year: "numeric",
              weekday: void 0,
            };
          return (0, e.jsx)("div", {
            className: N.DialogText,
            children: (0, r.we)(
              "#FamilyManagement_CooldownAllowed",
              (0, r.TW)(Date.now() / 1e3 + t, n),
            ),
          });
        }
        function oe(i) {
          const {
              inviterSteamID: t,
              familyGroupID: n,
              role: a,
              inviteID: s,
            } = i,
            o = (0, U.LH)(),
            l = (0, x.Bc)(n),
            c = (0, x.v2)(n, o),
            u = (0, X.js)(t),
            d = (0, x.fO)(n, s),
            [m, h] = (0, p.useState)(!1),
            [_, f] = (0, p.useState)(!1),
            [F, C] = (0, p.useState)(""),
            { setErrorMessage: v } = (0, x.RC)();
          (0, x.p8)(u, "#FamilyManagement_ErrorLoadFamilyInviteGeneric");
          const w = (0, W.W6)(),
            G = (0, W.zy)(),
            ie = !!T(G, Y);
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
          const te = (0, x.vo)();
          if (
            (te.isSuccess &&
              !te.data.is_not_member_of_any_group() &&
              w.push("/account/familymanagement"),
            u.isError)
          )
            return null;
          if (u.isLoading)
            return (0, e.jsx)("div", {
              className: N.ThrobberContainer,
              children: (0, e.jsx)(L.t, {}),
            });
          const re = () => {
              v(null),
                l.mutate(null, {
                  onSuccess: (fe) => {
                    fe.cooldown_skip_granted() && f(!0),
                      fe.two_factor_method() === g.GC.SC
                        ? Q.TS.IN_MOBILE_WEBVIEW
                          ? (window.location.href =
                              "steammobile://confirmations?first_of_type=11")
                          : h("awaitmobile2fa")
                        : fe.two_factor_method() === g.GC.Mk
                          ? h("awaitemail2fa")
                          : w.push("/account/familymanagement");
                  },
                });
            },
            ge = () => {
              v(null), c.mutate(), ie && w.push("/account/familymanagement");
            },
            ve = u.data,
            ye = () => h(!1),
            Ce = () => w.push("/account/familymanagement"),
            Fe = (fe) =>
              fe
                ? Q.TS.IN_MOBILE_WEBVIEW
                  ? "#FamilyManagement_Await2FAForJoin_Description_Mobile_MobileApp"
                  : "#FamilyManagement_Await2FAForJoin_Description_Mobile"
                : "#FamilyManagement_Await2FAForJoin_Description_Email",
            Ye = async () => {
              d.mutateAsync(F).then(Ce);
            };
          return (0, e.jsxs)("div", {
            className: N.IncomingInviteRow,
            children: [
              (0, e.jsxs)(E.EN, {
                active: !!m,
                children: [
                  m === "explanation" &&
                    (0, e.jsxs)(E.eV, {
                      title: (0, r.we)(
                        `#FamilyManagement_RoleDescriptionLongHeader_${a}`,
                      ),
                      closeModal: ye,
                      children: [
                        a === g.PQ.s ? (0, e.jsx)(M, {}) : (0, e.jsx)(H, {}),
                        (0, e.jsx)(P.$n, {
                          onClick: ye,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                  m === "confirm" &&
                    (0, e.jsx)(E.o0, {
                      closeModal: ye,
                      onCancel: ye,
                      onOK: re,
                      strTitle: (0, r.we)(
                        "#FamilyManagement_ConfirmJoinDialog",
                      ),
                      children: (0, r.oW)(
                        `#FamilyManagement_ConfirmJoin_${a}`,
                        (0, e.jsx)("b", {}),
                      ),
                    }),
                  m === "awaitmobile2fa" &&
                    (0, e.jsxs)(E.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_Await2FAForJoin_Header",
                      ),
                      closeModal: Ce,
                      children: [
                        (0, e.jsx)("div", {
                          className: N.DialogText,
                          children: (0, r.we)(Fe(m === "awaitmobile2fa")),
                        }),
                        _ &&
                          (0, e.jsx)(pe, {
                            cooldownSecondsRemaining:
                              te.data.cooldown_seconds_remaining(),
                          }),
                        _ &&
                          (0, e.jsx)("div", {
                            className: N.DialogText,
                            children: (0, r.we)(
                              "#FamilyManagement_CooldownAllowed_2_Join",
                            ),
                          }),
                        (0, e.jsx)(P.$n, {
                          onClick: Ce,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                  m === "awaitemail2fa" &&
                    (0, e.jsxs)(E.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_Await2FAForJoin_Header",
                      ),
                      closeModal: Ce,
                      children: [
                        a === g.PQ.sf &&
                          (0, e.jsxs)(S.Z, {
                            className: N.DialogWarning,
                            children: [
                              (0, e.jsx)(S.Z, {
                                className: N.DialogText,
                                children: (0, r.we)(
                                  "#FamilyManagement_Await2FAForJoin_ChildWarning_1",
                                ),
                              }),
                              (0, e.jsx)(S.Z, {
                                className: N.DialogText,
                                children: (0, r.oW)(
                                  "#FamilyManagement_Await2FAForJoin_ChildWarning_2",
                                  (0, e.jsx)("a", {
                                    href: `${Q.TS.HELP_BASE_URL}/wizard/HelpChangePassword`,
                                  }),
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsx)(S.Z, {
                          className: N.DialogText,
                          children: (0, r.we)(
                            "#FamilyManagement_Await2FAForJoin_Description_Email",
                          ),
                        }),
                        (0, e.jsx)(S.Z, {
                          className: N.TwoFactorCodeBox,
                          children: (0, e.jsx)(J.BA, {
                            className: N.EditNameInput,
                            type: "text",
                            onChange: (fe) => {
                              C(fe.target.value), v(null);
                            },
                            value: F,
                            placeholder: (0, r.we)(
                              "#FamilyManagement_Await2FAForJoin_InputPlaceholder",
                            ),
                            maxLength: 128,
                          }),
                        }),
                        (0, e.jsxs)(S.Z, {
                          className: N.DialogButtons,
                          children: [
                            (0, e.jsx)(P.jn, {
                              onClick: Ye,
                              children: (0, r.we)(
                                "#FamilyManagement_AwaitCodeFromEmail_Confirm",
                              ),
                            }),
                            (0, e.jsx)(P.$n, {
                              onClick: ye,
                              children: (0, r.we)(
                                "#FamilyManagement_AwaitCodeFromEmail_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  m == "alreadyaccepted" &&
                    (0, e.jsxs)(E.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_AlreadyAccepted_Header",
                      ),
                      closeModal: Ce,
                      children: [
                        (0, e.jsx)("div", {
                          className: N.DialogText,
                          children: (0, r.we)(
                            "#FamilyManagement_AlreadyAccepted_Text",
                          ),
                        }),
                        (0, e.jsx)(P.$n, {
                          onClick: Ce,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: N.InviteRowHeader,
                children: [
                  (0, e.jsx)("a", {
                    className: N.ProfileLink,
                    href: ve.GetCommunityProfileURL(),
                    children: (0, e.jsx)(le.i8, {
                      className: N.Avatar,
                      persona: ve,
                      size: "Large",
                      statusPosition: "right",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: N.InviteRowDetails,
                    children: (0, r.PP)(
                      a === g.PQ.s
                        ? "#FamilyManagement_PendingFamilyInviteInviteText_Adult"
                        : "#FamilyManagement_PendingFamilyInviteInviteText_Child",
                      (0, e.jsx)("a", {
                        className: N.ProfileLink,
                        href: ve.GetCommunityProfileURL(),
                        children: (0, e.jsx)("span", {
                          className: N.PersonaName,
                          children: ve?.m_strPlayerName,
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: N.RoleBlock,
                        children: [
                          (0, e.jsx)(me.iM, { className: N.RoleIcon, role: a }),
                          (0, e.jsx)("span", {
                            className: N.RoleName,
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
                  className: N.RoleDescriptionShort,
                  children: (0, e.jsx)("p", {
                    children: (0, r.oW)(
                      "#FamilyManagement_RoleDescriptionShort_Adult",
                      (0, e.jsx)("span", { className: N.RoleName }),
                      (0, e.jsx)("a", {
                        className: N.LearnMoreLink,
                        onClick: () => h("explanation"),
                      }),
                    ),
                  }),
                }),
              a == g.PQ.sf &&
                (0, e.jsxs)("div", {
                  className: N.RoleDescriptionShort,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.oW)(
                        "#FamilyManagement_RoleDescriptionShort_Child",
                        (0, e.jsx)("span", { className: N.RoleName }),
                        (0, e.jsx)("a", {
                          className: N.LearnMoreLink,
                          onClick: () => h("explanation"),
                        }),
                      ),
                    }),
                    (0, e.jsxs)("ul", {
                      className: N.RoleDescriptionList,
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
                className: N.Buttons,
                children: [
                  (0, e.jsx)(P.$n, {
                    className: N.AcceptInviteButton,
                    onClick: () => h("confirm"),
                    children: (0, r.we)("#FamilyManagement_AcceptInviteButton"),
                  }),
                  (0, e.jsx)(P.$n, {
                    className: N.DeclineInviteButton,
                    onClick: ge,
                    children: (0, r.we)(
                      "#FamilyManagement_DeclineInviteButton",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function M() {
          return (0, e.jsxs)("div", {
            className: (0, A.A)("account_settings_container"),
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
        function H() {
          return (0, e.jsxs)("div", {
            className: (0, A.A)("account_settings_container"),
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
        const b = "familyid",
          O = "invite";
        function K() {
          const i = (0, W.W6)(),
            t = (0, W.zy)(),
            n = T(t, b),
            a = T(t, O),
            s = T(t, V);
          return (
            (0, x.tN)(n, a, s).mutate(null, {
              onSuccess: () => i.push("/account/familymanagement"),
            }),
            (0, e.jsx)(L.t, {})
          );
        }
        var I = y(80329),
          $ = y(58612),
          ee = y(76559),
          de = y(93125),
          ce = y(9852),
          _e = y(99412),
          xe = y(88268),
          we = y(20169),
          Ie = y(18938),
          De = y(79089),
          Ge = y(33902);
        const $e = p.memo(function (t) {
          const {
              virtualizer: n,
              bDynamic: a,
              scrollAlign: s,
              bNativeScrollIntoView: o,
              idx: l,
              rowGap: c,
              renderItem: u,
            } = t,
            d = p.useCallback(
              (m, h, _) => (n.scrollToIndex(l, { align: s }), !0),
              [n, l, s],
            );
          return (0, e.jsx)(S.Z, {
            ref: a ? n.measureElement : void 0,
            navKey: `VirtualizedListIndex-${l}`,
            "data-index": l,
            fnScrollIntoViewHandler: o ? void 0 : d,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: c },
            children: u(l),
          });
        });
        function et(i) {
          return (0, Ie.QS)(
            (t) => {
              if (!t) return;
              const n = new t.ownerDocument.defaultView.ResizeObserver((o) => {
                i(o[0]);
              });
              let a = [],
                s = t;
              for (; s && s != null; )
                n.observe(s), a.push(s), (s = s.parentElement);
              return () => {
                a.forEach((o) => n.unobserve(o));
              };
            },
            [i],
          );
        }
        function Le(i, t) {
          const n = i.getBoundingClientRect().top;
          return t
            ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
            : n + (i.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const Me = p.forwardRef(function (t, n) {
          const {
              nRows: a,
              nItemHeight: s,
              nRowGap: o,
              overscan: l,
              renderItem: c,
              bDynamic: u,
              measureElement: d,
              className: m,
              forceVirtualizeType: h,
              hintVirtualizeType: _,
              scrollAlign: f,
              bNativeScrollIntoView: F,
              bNoOverscanOffscreen: C,
              bBrowserScrollAnchoring: v,
              initialOffset: w,
              onOffsetChange: G,
              ...ie
            } = t,
            [te, re] = (0, p.useState)(h ?? _),
            [ge, ve] = p.useState(),
            [ye, Ce] = p.useState(),
            [Fe, Ye] = p.useState(),
            fe = p.useRef(null),
            Ds = p.useCallback(
              (Oe) => {
                if (!Oe) return;
                const Xe = (0, De._f)(Oe, "y"),
                  Ns = Le(Oe, h == "window" ? null : Xe),
                  ft = Xe?.getBoundingClientRect(),
                  ln = () => {
                    h != "window" &&
                      (ve(Xe || void 0),
                      Ce((gt) => {
                        if (!ft) return;
                        const cn = Math.round(ft.width),
                          mn = Math.round(ft.height);
                        return gt?.width == cn && gt?.height == mn
                          ? gt
                          : { width: cn, height: mn };
                      })),
                      Ye(Ns),
                      h || re(Xe ? "element" : "window");
                  };
                C ? ln() : (0, p.startTransition)(ln);
              },
              [h, C],
            ),
            rn = p.useRef(ge);
          rn.current = ge;
          const Ms = p.useCallback(() => {
              if (!fe.current) return;
              const Oe = Le(fe.current, rn.current);
              (0, p.startTransition)(() => {
                Ye(Oe);
              });
            }, []),
            bs = et(Ms),
            As = (0, Ie.Ue)(Ds, fe, bs, n),
            on = {
              nRows: a,
              nItemHeight: s,
              nRowGap: o,
              overscan: l,
              renderItem: c,
              bDynamic: u,
              measureElement: d,
              forceVirtualizeType: h,
              hintVirtualizeType: _,
              scrollAlign: f,
              bNativeScrollIntoView: F,
              bNoOverscanOffscreen: C,
              bBrowserScrollAnchoring: v,
              initialOffset: w,
              onOffsetChange: G,
            };
          return (0, e.jsx)(S.Z, {
            className: m,
            ref: As,
            ...ie,
            children: (0, e.jsxs)(p.Suspense, {
              children: [
                te === "element" &&
                  (0, e.jsx)(nt, {
                    ...on,
                    nScrollMargin: Fe,
                    elScrollable: ge,
                    rectScrollable: ye,
                  }),
                te === "window" && (0, e.jsx)(tt, { ...on, nScrollMargin: Fe }),
              ],
            }),
          });
        });
        function Be(i, t, n) {
          p.useEffect(() => {
            n ||
              (0, p.startTransition)(() => {
                i.measure();
              });
          }, [i, t, n]);
        }
        function ke(i, t, n) {
          if (!t) return "first";
          const a = i.options.scrollMargin,
            s = a + i.getTotalSize(),
            o = i.scrollOffset ?? 0,
            l = (i.scrollRect ?? i.options.initialRect).height;
          return a > o + l + n ? "first" : s < o - n ? "last" : "all";
        }
        function We(i, t, n) {
          const [, a] = (0, p.useState)(0),
            s = p.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: "all" });
          (s.current.bPositionKnown = t), (s.current.nMargin = n);
          const o = p.useCallback(
            (c, u) =>
              Ue(c, (d, m) => {
                u(d, m);
                const {
                  bPositionKnown: h,
                  nMargin: _,
                  eRowWindow: f,
                } = s.current;
                ke(c, h, _) != f && a((F) => F + 1);
              }),
            [],
          );
          return {
            observeElementOffset: i ? o : Ue,
            fnGetRowWindow: (c) => {
              const u = i ? ke(c, t, n) : "all";
              return (s.current.eRowWindow = u), u;
            },
          };
        }
        function tt(i) {
          const {
              nScrollMargin: t,
              nRows: n,
              nItemHeight: a,
              nRowGap: s = 10,
              overscan: o = 6,
              initialOffset: l,
              onOffsetChange: c,
              measureElement: u,
              bDynamic: d,
              bNoOverscanOffscreen: m,
              bBrowserScrollAnchoring: h,
            } = i,
            _ = (0, Ge.d)(),
            f = a + s,
            { observeElementOffset: F, fnGetRowWindow: C } = We(
              m,
              t !== void 0,
              o * f,
            ),
            v = (0, xe.XW)({
              count: n,
              scrollMargin: t,
              estimateSize: p.useCallback(() => f, [f]),
              measureElement: u,
              overscan: o,
              initialOffset: l ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: F,
              observeElementRect: at,
              onChange(w, G) {
                c?.(w.scrollOffset);
              },
            });
          return (
            (v.shouldAdjustScrollPositionOnItemSizeChange = (w) =>
              !h && t !== void 0 && w.start < (v.scrollOffset ?? 0)),
            Be(v, f, d),
            (0, e.jsx)(He, { ...i, virtualizer: v, eRowWindow: C(v) })
          );
        }
        function nt(i) {
          const {
              nRows: t,
              nScrollMargin: n,
              elScrollable: a,
              rectScrollable: s,
              nItemHeight: o,
              nRowGap: l = 10,
              overscan: c = 6,
              initialOffset: u,
              onOffsetChange: d,
              measureElement: m,
              bDynamic: h,
              bNoOverscanOffscreen: _,
              bBrowserScrollAnchoring: f,
            } = i,
            F = o + l,
            C = (0, Ge.d)(),
            { observeElementOffset: v, fnGetRowWindow: w } = We(
              _,
              a !== void 0 && n !== void 0,
              c * F,
            ),
            G = (0, xe.Te)({
              count: t,
              scrollMargin: n ?? 0,
              getScrollElement: () => (
                a &&
                  G.scrollElement !== a &&
                  u === void 0 &&
                  (G.scrollOffset = a.scrollTop),
                a ?? null
              ),
              estimateSize: p.useCallback(() => F, [F]),
              measureElement: m,
              overscan: c,
              initialRect: a
                ? s
                : {
                    height: C.viewportHeight?.value ?? 1e3,
                    width: C.viewportWidth?.value ?? 1e3,
                  },
              initialOffset: u,
              observeElementOffset: v,
              observeElementRect: Ke,
              onChange(ie, te) {
                d?.(ie.scrollOffset);
              },
            });
          return (
            (G.shouldAdjustScrollPositionOnItemSizeChange = (ie) =>
              !f && a !== void 0 && ie.start < (G.scrollOffset ?? 0)),
            Be(G, F, h),
            (0, e.jsx)(He, { ...i, virtualizer: G, eRowWindow: w(G) })
          );
        }
        function He(i) {
          const {
              virtualizer: t,
              eRowWindow: n,
              nRowGap: a,
              renderItem: s,
              bDynamic: o,
              scrollAlign: l = "center",
              bNativeScrollIntoView: c,
            } = i,
            u = t.getVirtualItems(),
            d =
              n == "first"
                ? t.measurementsCache[0]
                : t.measurementsCache[t.measurementsCache.length - 1],
            m = n == "all" ? u : d ? [d] : [],
            h = m.length ? m[0].start - t.options.scrollMargin : 0,
            _ = Math.max(0, t.getTotalSize());
          return (0, e.jsx)(S.Z, {
            "flow-children": "column",
            navEntryPreferPosition: we.iU.MAINTAIN_Y,
            style: { height: `${_}px`, width: "100%", position: "relative" },
            children: (0, e.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${h}px )`,
              },
              children: m.map((f) =>
                (0, e.jsx)(
                  $e,
                  {
                    virtualizer: t,
                    bDynamic: o,
                    scrollAlign: l,
                    bNativeScrollIntoView: c,
                    idx: f.index,
                    rowGap: a,
                    renderItem: s,
                  },
                  f.key,
                ),
              ),
            }),
          });
        }
        function be(i) {
          return (...t) => {
            queueMicrotask(() => {
              (0, p.startTransition)(() => {
                i(...t);
              });
            });
          };
        }
        function Ue(i, t) {
          const n = i.scrollElement;
          if (!n) return;
          let a;
          "scrollX" in n
            ? (a = be((l) =>
                t(n[i.options.horizontal ? "scrollX" : "scrollY"], l),
              ))
            : (a = be((l) =>
                t(n[i.options.horizontal ? "scrollLeft" : "scrollTop"], l),
              ));
          const s = () => a(!0),
            o = () => a(!1);
          return (
            o(),
            n.addEventListener("scroll", s, { passive: !0 }),
            n.addEventListener("scrollend", o, { passive: !0 }),
            () => {
              n.removeEventListener("scroll", s),
                n.removeEventListener("scrollend", o);
            }
          );
        }
        function at(i, t) {
          const n = i.scrollElement;
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
        function Ke(i, t) {
          const n = i.scrollElement;
          if (!n) return;
          const a = be((l) =>
            t({ width: Math.round(l.width), height: Math.round(l.height) }),
          );
          a(n.getBoundingClientRect());
          const s = n.ownerDocument.defaultView;
          if (!s?.ResizeObserver) return () => {};
          const o = new s.ResizeObserver((l) => {
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
        var qe = y(48473);
        function Qe(i) {
          return new URLSearchParams(i.search).get("inviteuser");
        }
        function st(i) {
          const { familyGroupID: t } = i,
            n = (0, W.zy)(),
            [a, s] = (0, p.useState)(Qe(n)),
            [o, l] = (0, p.useState)(a == null ? "splash" : "selectRole"),
            c = (0, x.Hs)(t),
            u =
              c.data.slot_cooldown_remaining_seconds() > 0 &&
              c.data.slot_cooldown_overrides() === 0,
            d = (m) => {
              s(m), l("selectRole");
            };
          return o === "splash"
            ? (0, e.jsx)(it, { onClick: () => l("selectMethod") })
            : o === "selectMethod" && !u
              ? (0, e.jsx)(un, {
                  familyGroupID: t,
                  onCancel: () => l("splash"),
                  onSelect: d,
                })
              : o === "selectMethod" && u
                ? (0, e.jsx)(pn, {
                    slotCooldownSeconds:
                      c.data.slot_cooldown_remaining_seconds(),
                    familyGroupID: t,
                    onCancel: () => l("splash"),
                    onSelect: d,
                  })
                : o === "selectRole"
                  ? (0, e.jsx)(yn, {
                      familyGroupID: t,
                      steamid: a,
                      onCancel: () => l("splash"),
                    })
                  : null;
        }
        function it(i) {
          const t = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, e.jsx)("div", {
            className: I.InviteButtonCtn,
            children: (0, e.jsxs)(P.jn, {
              noFocusRing: !1,
              className: I.InviteButton,
              onClick: i.onClick,
              children: [
                z.e6B({}),
                (0, e.jsx)("span", {
                  children: (0, r.we)("#FamilyManagement_InviteAMember"),
                }),
              ],
            }),
          });
        }
        function dn(i) {
          const { familyGroupID: t, onSelect: n } = i,
            a = (0, x.Hs)(t),
            s = (0, x.QU)(t),
            o = (0, $.EW)();
          (0, x.gv)(
            s,
            "#FamilyManagement_ErrorLoadUsersSharingDevice",
            x.eS.k_EFamilyQueryGetUsersSharingDevice,
          );
          const l = s.data
            ?.users()
            .filter(
              (c) => !a.data?.pending_invites().some((u) => u.steamid() == c),
            )
            .filter((c) => o.data?.indexOf(c) === -1);
          return s.isError || l?.length == 0 || !o.isSuccess
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: I.Text,
                    children: (0, r.we)("#FamilyManagement_PreviousUsers"),
                  }),
                  s.isLoading
                    ? (0, e.jsx)("div", {
                        className: I.ThrobberContainer,
                        children: (0, e.jsx)(L.t, {}),
                      })
                    : (0, e.jsx)(_t, { steamids: l, onSelect: n }),
                ],
              });
        }
        function un(i) {
          const { familyGroupID: t, onSelect: n, onCancel: a } = i;
          return (0, e.jsxs)("div", {
            className: I.SelectAccountContainer,
            children: [
              (0, e.jsx)(P.wl, {
                className: I.CloseButton,
                onClick: a,
                children: (0, e.jsx)(z.sED, {}),
              }),
              (0, e.jsx)("div", {
                className: I.Header,
                children: (0, r.we)("#FamilyManagement_InviteAMember"),
              }),
              (0, e.jsx)("div", {
                className: I.Text,
                children: (0, r.we)("#FamilyManagement_InviteMethodText"),
              }),
              (0, e.jsx)(S.Z, {
                className: I.MethodButtons,
                children: (0, e.jsx)(gn, { familyGroupID: t, onSelect: n }),
              }),
              (0, e.jsx)(dn, { familyGroupID: t, onSelect: n }),
            ],
          });
        }
        function pn(i) {
          const {
            familyGroupID: t,
            onSelect: n,
            onCancel: a,
            slotCooldownSeconds: s,
          } = i;
          let o = (0, p.useRef)(
            (0, r.TW)(Math.floor(new Date().getTime() / 1e3) + s, !1, !0),
          );
          const l = (0, x.Hs)(t),
            c = (0, $.EW)();
          if (!c.isSuccess) return null;
          const u = l.data
            .former_members()
            .map((d) => d.steamid())
            .filter((d) => c.data.indexOf(d) === -1);
          return (0, e.jsxs)("div", {
            className: I.SelectAccountContainer,
            children: [
              (0, e.jsx)(P.wl, {
                className: I.CloseButton,
                noFocusRing: !1,
                onClick: a,
                children: (0, e.jsx)(z.sED, {}),
              }),
              (0, e.jsx)("div", {
                className: I.Header,
                children: (0, r.we)("#FamilyManagement_InviteAMember"),
              }),
              (0, e.jsx)("div", {
                className: I.Text,
                children: (0, r.we)(
                  "#FamilyManagement_CooldownAndReinvite",
                  o.current,
                ),
              }),
              (0, e.jsx)(_t, { steamids: u, onSelect: n }),
            ],
          });
        }
        function yn(i) {
          const { familyGroupID: t, steamid: n, onCancel: a } = i,
            { setErrorMessage: s } = (0, x.RC)(),
            o = (0, X.js)(n);
          (0, x.p8)(o, "#FamilyManagement_ErrorLoadFamilyGeneric");
          const [l, c] = (0, p.useState)(g.PQ.kr),
            [u, d] = (0, p.useState)(null),
            m = (0, x.HM)(t, n, l);
          (0, x.gv)(
            m,
            "#FamilyManagement_ErrorInvite",
            x.eS.k_EFamilyQueryInviteToFamily,
          );
          const h = () => {
            m.mutateAsync(null, {
              onSuccess: (F) => {
                F.two_factor_method() === g.GC.uk
                  ? a()
                  : F.two_factor_method() === g.GC.SC
                    ? d("awaitmobile2fa")
                    : F.two_factor_method() === g.GC.Mk && d("awaitemail2fa");
              },
            });
          };
          if (o.isLoading)
            return (0, e.jsx)("div", {
              className: I.ThrobberContainer,
              children: (0, e.jsx)(L.t, {}),
            });
          const _ = o.data,
            f = (F) => {
              s(""), c(F);
            };
          return (0, e.jsxs)("div", {
            className: I.SelectRoleContainer,
            children: [
              (0, e.jsx)(E.EN, {
                active: l !== g.PQ.kr,
                children:
                  u === "awaitmobile2fa" || u === "awaitemail2fa"
                    ? (0, e.jsx)(hn, {
                        onClose: a,
                        eMethod: u === "awaitemail2fa" ? g.GC.Mk : g.GC.SC,
                      })
                    : (0, e.jsx)(fn, {
                        steamid: n,
                        role: l,
                        onCancel: () => c(g.PQ.kr),
                        onConfirm: h,
                      }),
              }),
              (0, e.jsx)(S.Z, {
                className: I.CloseButton,
                onActivate: a,
                children: (0, e.jsx)(z.sED, {}),
              }),
              (0, e.jsxs)("div", {
                className: I.Header,
                children: [
                  (0, e.jsx)("span", {
                    className: I.Invite,
                    children: (0, r.we)("#FamilyManagement_Invite"),
                  }),
                  (0, e.jsx)(le.i8, {
                    className: I.Avatar,
                    persona: _,
                    size: "Large",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    className: I.PlayerName,
                    children: _?.m_strPlayerName,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: I.Text,
                children: (0, r.we)("#FamilyManagement_ChooseRole"),
              }),
              (0, e.jsxs)(S.Z, {
                className: I.InviteButtonCtn,
                children: [
                  (0, e.jsx)(xt, { role: g.PQ.s, onSelect: () => f(g.PQ.s) }),
                  (0, e.jsx)(xt, { role: g.PQ.sf, onSelect: () => f(g.PQ.sf) }),
                ],
              }),
            ],
          });
        }
        function hn(i) {
          const { eMethod: t, onClose: n } = i;
          let a;
          if (t === g.GC.SC && Q.TS.IN_MOBILE_WEBVIEW)
            a = "#FamilyManagement_Await2FAForInvite_MobileAuth_InMobileApp";
          else if (t === g.GC.SC)
            a = "#FamilyManagement_Await2FAForInvite_MobileAuth";
          else if (t === g.GC.Mk)
            a = "#FamilyManagement_Await2FAForInvite_EmailAuth";
          else return null;
          return (0, e.jsxs)(E.o0, {
            bAlertDialog: !0,
            onOK: n,
            closeModal: n,
            strTitle: (0, r.we)("#FamilyManagement_ConfirmInviteTitle"),
            children: [
              (0, e.jsx)(me.pC, {}),
              (0, e.jsx)("div", { className: I.Text, children: (0, r.we)(a) }),
            ],
          });
        }
        function fn(i) {
          const { onCancel: t, onConfirm: n, steamid: a, role: s } = i,
            l = (0, X.js)(a).data;
          return (0, e.jsxs)(E.o0, {
            onCancel: t,
            strTitle: (0, r.we)("#FamilyManagement_ConfirmInviteTitle"),
            onOK: n,
            strOKButtonText: (0, r.we)("#FamilyManagement_Invite"),
            children: [
              (0, e.jsx)(me.pC, {}),
              (0, e.jsxs)("div", {
                className: I.ProfilePlusRole,
                children: [
                  (0, e.jsx)(le.i8, {
                    className: I.Avatar,
                    persona: l,
                    size: "Large",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    className: I.PlayerName,
                    children: l?.m_strPlayerName,
                  }),
                  (0, e.jsx)(me.iM, { className: I.RoleIcon, role: s }),
                  (0, e.jsx)("div", {
                    className: I.RoleName,
                    children: (0, r.we)(`#FamilyManagement_Role_${s}`),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: I.Text,
                children: (0, r.we)("#FamilyManagement_ConfirmInvite"),
              }),
            ],
          });
        }
        function gn(i) {
          const { familyGroupID: t, onSelect: n } = i,
            [a, s] = (0, p.useState)(!1),
            l = (0, x.Hs)(t)
              .data.members()
              .map((c) => c.steamid());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(E.EN, {
                active: a,
                children: (0, e.jsx)(E.eV, {
                  title: (0, r.we)("#FamilyManagement_InviteMethodFriend"),
                  className: I.SelectFriendModal,
                  onCancel: () => s(!1),
                  children: (0, e.jsx)(xn, {
                    setSelectedFriendSteamID: n,
                    excludeSteamIDs: l,
                  }),
                }),
              }),
              (0, e.jsx)(P.$n, {
                noFocusRing: !1,
                onClick: () => s(!0),
                children: (0, r.we)("#FamilyManagement_InviteMethodFriend"),
              }),
            ],
          });
        }
        function _t(i) {
          const { steamids: t, onSelect: n } = i;
          return (0, e.jsx)(S.Z, {
            className: I.ProfileSelector,
            "flow-children": "grid",
            children: t.map((a) =>
              (0, e.jsx)(_n, { steamid: a, onClick: () => n(a) }, a),
            ),
          });
        }
        function _n(i) {
          const { steamid: t, onClick: n } = i,
            a = new ee.b(t),
            s = (0, X.js)(t),
            o = (0, $.M8)(),
            c = (0, ce.T)().data?.preferences().parenthesize_nicknames(),
            u = o.data?.get(a.GetAccountID());
          if (
            ((0, x.p8)(s, "#FamilyManagement_ErrorLoadFamilyGeneric"),
            s.isLoading)
          )
            return null;
          const d = s.data;
          return (0, e.jsxs)(S.Z, {
            className: I.ProfileChoice,
            onActivate: n,
            children: [
              (0, e.jsx)("div", {
                className: I.Avatar,
                children: (0, e.jsx)(le.i8, {
                  className: I.Avatar,
                  persona: d,
                  size: "Large",
                  statusPosition: "right",
                }),
              }),
              (0, e.jsx)(de.D, {
                className: I.PlayerName,
                bParenthesizeNicknames: c,
                bIsSelf: !1,
                bHideStatus: !0,
                bHidePersona: !1,
                bCompactView: !1,
                persona: d,
                strNickname: u,
                eFriendRelationship: _e._UC,
              }),
            ],
          });
        }
        function xt(i) {
          const { role: t, onSelect: n } = i;
          return (0, e.jsxs)(P.jn, {
            className: (0, A.A)(I.InviteButton),
            noFocusRing: !1,
            onClick: () => n(t),
            children: [
              t == g.PQ.sf ? (0, e.jsx)(z.Bir, {}) : (0, e.jsx)(z.d1w, {}),
              (0, e.jsx)("span", {
                children: (0, r.we)(
                  `#FamilyManagement_InviteAsRoleButton_${t}`,
                ),
              }),
            ],
          });
        }
        function xn(i) {
          const { setSelectedFriendSteamID: t, excludeSteamIDs: n } = i,
            a = (0, $.Dv)();
          (0, x.p8)(a, "#FamilyManagement_ErrorLoadFriendListGeneric");
          const s = a.data;
          return a.isLoading
            ? (0, e.jsx)("div", {
                className: I.ThrobberContainer,
                children: (0, e.jsx)(L.t, {}),
              })
            : a.isError
              ? null
              : (0, e.jsx)(vn, {
                  setSelectedFriendSteamID: t,
                  steamIDs: s,
                  excludeSteamIDs: n,
                });
        }
        function vn(i) {
          const {
              setSelectedFriendSteamID: t,
              steamIDs: n,
              excludeSteamIDs: a,
            } = i,
            s = (0, X.DW)(n),
            o = (0, $.M8)(),
            l = (0, ce.T)(),
            [c, u] = p.useState(""),
            d = l.data?.preferences().parenthesize_nicknames(),
            m = p.useCallback(
              (F, C) => {
                let v = F.persona.m_strPlayerName,
                  w = C.persona.m_strPlayerName;
                return (
                  d ||
                    (F.nickname && (v = F.nickname),
                    C.nickname && (w = C.nickname)),
                  (0, qe.lY)(v, w) ||
                    F.persona.m_steamid.GetAccountID() -
                      C.persona.m_steamid.GetAccountID()
                );
              },
              [d],
            ),
            h = (0, p.useMemo)(
              () =>
                s
                  .map((v) => v.data)
                  .filter((v) => !!v)
                  .filter(
                    (v) =>
                      c == "" ||
                      Sn(
                        c.toLowerCase(),
                        v?.m_strPlayerName,
                        o.data?.get(v?.m_steamid.GetAccountID()),
                      ),
                  )
                  .filter(
                    (v) => a.indexOf(v?.m_steamid.ConvertTo64BitString()) == -1,
                  )
                  .map((v) => ({
                    persona: v,
                    nickname: o.data?.get(v?.m_steamid.GetAccountID()),
                  }))
                  .sort(m),
              [a, s, o, c, m],
            ),
            _ = p.useCallback(
              (F) =>
                (0, e.jsx)(Pn, {
                  persona: h[F].persona,
                  nickname: h[F].nickname,
                  setSelectedFriendSteamID: t,
                }),
              [h, t],
            ),
            f = s.some((F) => F.isLoading);
          return (0, e.jsxs)(S.Z, {
            className: I.InviteFriendSelector,
            children: [
              (0, e.jsx)("p", {
                className: I.InviteText,
                children: (0, r.we)("#FamilyManagement_SelectFriend"),
              }),
              f && (0, e.jsx)(L.t, { size: "xlarge" }),
              !f &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(S.Z, {
                      className: I.InputContainer,
                      children: (0, e.jsx)(Cn, { strFilter: c, setFilter: u }),
                    }),
                    (0, e.jsx)(S.Z, {
                      className: I.FriendList,
                      children: (0, e.jsx)(Me, {
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
        function Cn(i) {
          const { strFilter: t, setFilter: n } = i;
          return (0, e.jsx)(P.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: I.InviteFriendInput,
            type: "text",
            onChange: (a) => n(a.target.value),
            value: t,
            placeholder: (0, r.we)(
              "#FamilyManagement_InviteFriendNamePlaceholder",
            ),
          });
        }
        function Sn(i, t, n) {
          return (
            !i ||
            (t && t.toLowerCase().includes(i)) ||
            (n && n.toLowerCase().includes(i))
          );
        }
        function Pn(i) {
          const { persona: t, nickname: n, setSelectedFriendSteamID: a } = i,
            o = (0, ce.T)().data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(S.Z, {
            className: I.FriendSelectorRow,
            onActivate: (l) => {
              a(t.m_steamid.ConvertTo64BitString());
            },
            children: [
              (0, e.jsx)(le.i8, {
                className: I.Avatar,
                persona: t,
                size: "Large",
                statusPosition: "right",
              }),
              (0, e.jsx)(de.D, {
                className: I.PlayerName,
                bIsSelf: !1,
                bHideStatus: !1,
                bHidePersona: !1,
                bParenthesizeNicknames: o,
                bCompactView: !1,
                persona: t,
                strNickname: n,
                eFriendRelationship: _e._UC,
              }),
            ],
          });
        }
        var D = y(16195),
          Z = y(34286),
          jn = y(20803),
          Re = y(30096);
        function Fn(i) {
          return typeof i.cooldown_seconds_remaining == "function";
        }
        function rt(i) {
          const { familyGroupID: t, member: n } = i,
            a = (0, X.js)(n.steamid());
          (0, x.p8)(a, "#FamilyManagement_ErrorLoadFamilyGeneric");
          const [s, o, l] = (0, Re.uD)(!1);
          if (!a.isSuccess) return null;
          let c = a.data,
            u = !1,
            d = null;
          return (
            Fn(n)
              ? ((d = (0, e.jsx)(Dn, {
                  active: s,
                  onClose: l,
                  familyGroupID: t,
                  member: n,
                  persona: c,
                })),
                (u = !0))
              : (d = (0, e.jsx)(bn, {
                  active: s,
                  onClose: l,
                  familyGroupID: t,
                  invited: n,
                  persona: c,
                })),
            (0, e.jsxs)(e.Fragment, {
              children: [
                d,
                (0, e.jsx)(S.Z, {
                  className: (0, A.A)(jn.FamilyMemberRow, Z.FamilyMemberRow),
                  onActivate: o,
                  children: (0, e.jsx)("div", {
                    className: Z.TopRow,
                    children: (0, e.jsx)(me.ff, {
                      persona: c,
                      role: n.role(),
                      invitePending: !u,
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function wn(i) {
          const t = new Date(i.time_joined() * 1e3);
          return (
            (new Date().getTime() - t.getTime()) / (1e3 * 24 * 60 * 60) < 30
          );
        }
        function In(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              member: s,
              persona: o,
              isSelf: l,
            } = i,
            { setErrorMessage: c } = (0, x.RC)(),
            u = (0, x._K)(a, s.steamid()),
            d = (0, W.W6)(),
            m = (0, W.zy)(),
            h = Math.ceil(s.cooldown_seconds_remaining() / (3600 * 24) || 0);
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
          const F = () => {
            c(null), u.mutate(null, { onSuccess: () => d.push(m.pathname) });
          };
          return (0, e.jsx)(E.EN, {
            active: t,
            children: (0, e.jsx)(E.o0, {
              strTitle: f,
              onOK: F,
              closeModal: n,
              children: (0, e.jsx)("div", {
                className: Z.RemovalDescription,
                children: _,
              }),
            }),
          });
        }
        function Dn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              member: s,
              persona: o,
            } = i,
            [l, c, u] = (0, Re.uD)(!1),
            d = (0, x._K)(a, s.steamid()),
            { setErrorMessage: m } = (0, x.RC)();
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorRemovingFromFamily",
            x.eS.k_EFamilyQueryRemoveFromFamily,
          );
          const _ = (0, U.LH)() == s.steamid(),
            f = wn(s),
            C = (0, x.vo)().data?.role(),
            w = (0, x.Hs)(a).data.members().length === 1,
            G = (0, W.W6)(),
            { url: ie } = (0, W.W5)(),
            te = () => {
              m(null), c(), n();
            },
            re = () => {
              const Fe = new ee.b(s.steamid());
              window.location.href =
                Q.TS.HELP_BASE_URL +
                "wizard/HelpRecoverFamilyMember?childid=" +
                Fe.GetAccountID();
            },
            ge = () => {
              window.location.href =
                Q.TS.COMMUNITY_BASE_URL + "profiles/" + s.steamid();
            },
            ve = () => {
              window.location.href =
                Q.TS.STORE_BASE_URL + "wishlist/profiles/" + s.steamid();
            },
            ye = () => {
              const Fe = ie.endsWith("/") ? ie.slice(0, -1) : ie;
              G.push(`${Fe}/parentalcontrols/${s.steamid()}`);
            };
          let Ce = (0, r.we)(
            "#FamilyManagement_ManageDialogTitle",
            o?.m_strPlayerName,
          );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(In, {
                active: l,
                onClose: u,
                familyGroupID: a,
                member: s,
                persona: o,
                isSelf: _,
              }),
              (0, e.jsx)(E.EN, {
                active: t,
                children: (0, e.jsx)(E.eV, {
                  className: Z.FamilyMemberActionsDialog,
                  titleClassName: Z.Title,
                  title: Ce,
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  bHideCloseIcon: !0,
                  children: (0, e.jsxs)("div", {
                    className: Z.ButtonList,
                    children: [
                      (0, e.jsx)(P.$n, {
                        className: Z.ManagementButton,
                        onClick: ge,
                        children: (0, r.we)("#FamilyManagement_ProfileLink"),
                      }),
                      (0, e.jsx)(P.$n, {
                        className: Z.ManagementButton,
                        onClick: ve,
                        children: (0, r.we)("#FamilyManagement_WishlistLink"),
                      }),
                      (0, e.jsx)(P.Nu, { className: Z.Separator }),
                      !_ &&
                        s.role() == g.PQ.sf &&
                        (0, e.jsx)(P.$n, {
                          className: Z.ManagementButton,
                          onClick: ye,
                          children: (0, r.we)(
                            "#FamilyManagement_ParentalControls",
                          ),
                        }),
                      !f &&
                        !_ &&
                        s.role() == g.PQ.sf &&
                        (0, e.jsx)(P.$n, {
                          className: Z.ManagementButton,
                          disabled: f,
                          onClick: re,
                          children: (0, r.we)(
                            "#FamilyManagement_RecoverMember",
                          ),
                        }),
                      !w &&
                        C !== g.PQ.sf &&
                        (0, e.jsx)(P.$n, {
                          className: (0, A.A)(Z.ManagementButton, Z.Remove),
                          onClick: te,
                          children: (0, r.we)(
                            _
                              ? "#FamilyManagement_RemoveMember_Self"
                              : "#FamilyManagement_RemoveMember",
                          ),
                        }),
                      w && (0, e.jsx)(An, { familyGroupID: a }),
                      (0, e.jsx)(P.Nu, { className: Z.Separator }),
                      (0, e.jsx)(P.$n, {
                        className: Z.ManagementButton,
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
        function Mn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              invited: s,
              persona: o,
            } = i,
            l = (0, x.v2)(a, s.steamid()),
            { setErrorMessage: c } = (0, x.RC)();
          (0, x.gv)(
            l,
            "#FamilyManagement_ErrorCancelInvite",
            x.eS.k_EFamilyQueryDeclineInvite,
          );
          const u = () => {
            c(null), l.mutate();
          };
          let d = (0, r.we)(
            "#FamilyManagement_CancelInvitationConfirmationText",
            o?.m_strPlayerName,
          );
          return (0, e.jsx)(E.EN, {
            active: t,
            children: (0, e.jsx)(E.o0, {
              strTitle: (0, r.we)(
                "#FamilyManagement_CancelInvitationConfirmationTitle",
              ),
              strDescription: d,
              onOK: u,
              closeModal: n,
            }),
          });
        }
        function bn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              invited: s,
              persona: o,
            } = i,
            [l, c, u] = (0, Re.uD)(!1),
            d = (0, x.v2)(a, s.steamid()),
            { setErrorMessage: m } = (0, x.RC)();
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorCancelInvite",
            x.eS.k_EFamilyQueryDeclineInvite,
          );
          const h = () => {
              window.location.href =
                Q.TS.COMMUNITY_BASE_URL + "profiles/" + s.steamid();
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
              (0, e.jsx)(Mn, {
                active: l,
                onClose: u,
                familyGroupID: a,
                invited: s,
                persona: o,
              }),
              (0, e.jsx)(E.EN, {
                active: t,
                children: (0, e.jsx)(E.eV, {
                  className: Z.FamilyMemberActionsDialog,
                  titleClassName: Z.Title,
                  title: f,
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  bHideCloseIcon: !0,
                  children: (0, e.jsxs)("div", {
                    className: Z.ButtonList,
                    children: [
                      (0, e.jsx)(P.$n, {
                        className: Z.ManagementButton,
                        onClick: h,
                        children: (0, r.we)("#FamilyManagement_ProfileLink"),
                      }),
                      (0, e.jsx)(P.Nu, { className: Z.Separator }),
                      (0, e.jsx)(P.$n, {
                        className: (0, A.A)(Z.ManagementButton, Z.CancelInvite),
                        onClick: _,
                        children: (0, r.we)(
                          "#FamilyManagement_CancelInviteButton",
                        ),
                      }),
                      (0, e.jsx)(P.Nu, { className: Z.Separator }),
                      (0, e.jsx)(P.$n, {
                        className: Z.ManagementButton,
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
        function An(i) {
          const { familyGroupID: t } = i,
            [n, a, s] = (0, Re.uD)(!1),
            o = (0, x.Y0)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            "#FamilyManagement_ErrorDeleteFamily",
            x.eS.k_EFamilyQueryDeleteFamily,
          );
          const u = (0, x.vo)().data.cooldown_seconds_remaining(),
            d = Date.now() / 1e3 + u,
            m = (0, r.TW)(d),
            h = (0, W.W6)();
          if (o.isPending)
            return (0, e.jsx)("div", {
              className: Z.ThrobberContainer,
              children: (0, e.jsx)(L.t, {}),
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
              (0, e.jsx)(E.EN, {
                active: n,
                children: (0, e.jsxs)(E.o0, {
                  strTitle: (0, r.we)(
                    "#FamilyManagement_DeleteFamilyConfirmationTitle",
                  ),
                  onOK: f,
                  closeModal: s,
                  children: [
                    u > 0 &&
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
                    u === 0 &&
                      (0, e.jsx)("p", {
                        children: (0, r.we)(
                          "#FamilyManagement_DeleteFamilyConfirmationText_NoCooldown",
                        ),
                      }),
                  ],
                }),
              }),
              (0, e.jsx)(P.$n, {
                className: (0, A.A)(Z.DeleteFamily, Z.ManagementButton),
                noFocusRing: !1,
                onClick: _,
                children: (0, r.we)("#FamilyManagement_DeleteFamilyButton"),
              }),
            ],
          });
        }
        var Pe = y(92264);
        function Nn(i) {
          const { familyGroupID: t, ...n } = i,
            a = (0, x.Ww)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadHistory",
            x.eS.k_EFamilyQueryLoadHistory,
          );
          let s = (0, p.useMemo)(() => a.data?.slice(0).reverse() || [], [a]);
          const o = parseInt(n.nFamilyHistoryRowHeight),
            l = p.useCallback(
              (c) =>
                (0, e.jsx)(Rn, {
                  entry: s[c],
                  styleProps: n,
                  fnRenderName: i.FnRenderName,
                }),
              [s, n, i.FnRenderName],
            );
          return (0, e.jsx)(S.Z, {
            className: n.FamilyHistory,
            children: (0, e.jsx)(Me, {
              bDynamic: !0,
              nRows: s.length,
              nItemHeight: o,
              renderItem: l,
            }),
          });
        }
        function Rn(i) {
          let { entry: t, styleProps: n, fnRenderName: a, ...s } = i;
          const o = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              month: "numeric",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
            l = new Date(parseInt(t.timestamp()) * 1e3),
            c = o.format(l),
            u = (0, r.we)("#FamilyHistory_SteamSupport"),
            d = (0, X.js)(t.actor_steamid());
          let m,
            h = a(t.actor_steamid());
          t.actor_steamid()
            ? t.by_support()
              ? (m = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: d.data?.m_strPlayerName }),
                    " (",
                    u,
                    ")",
                  ],
                }))
              : (m = h)
            : (m = u);
          let _ = JSON.parse(t.body());
          const f = a(_.account),
            F = _.seconds && (0, Pe.R2)(_.seconds),
            C = _.reason ? _.reason : "";
          let v;
          switch (t.type()) {
            case g.NP.E4:
              v = (0, r.PP)("#FamilyHistory_FamilyCreated", m, _.name);
              break;
            case g.NP.RE:
              v = (0, r.PP)("#FamilyHistory_FamilyModified", m, _.name);
              break;
            case g.NP.xD:
              v = (0, r.PP)("#FamilyHistory_FamilyDeleted", m);
              break;
            case g.NP.fd:
              const w = (0, r.we)(
                `#FamilyManagement_Role_${_.role}`,
              ).toLocaleLowerCase();
              v = (0, r.PP)("#FamilyHistory_AccountInvited", m, w, f);
              break;
            case g.NP.M4:
              v = (0, r.PP)("#FamilyHistory_InviteDeniedByFamilySize", m, f);
              break;
            case g.NP.Ve:
              v = (0, r.PP)("#FamilyHistory_JoinedFamily", m);
              break;
            case g.NP.pu:
              v = (0, r.PP)("#FamilyHistory_JoinDeniedByRegionMismatch", m);
              break;
            case g.NP.SW:
              v = (0, r.PP)("#FamilyHistory_JoinDenied", m, C);
              break;
            case g.NP.Ig:
              v = (0, r.PP)("#FamilyHistory_JoinDeniedByMissingIpAddress", m);
              break;
            case g.NP.yu:
              v = (0, r.PP)("#FamilyHistory_JoinDeniedByFamilyCooldown", m, F);
              break;
            case g.NP.zA:
              v = (0, r.PP)("#FamilyHistory_JoinDeniedByUserCooldown", m, F);
              break;
            case g.NP.kv:
              v = (0, r.PP)("#FamilyHistory_JoinDeniedByOtherFamily", m);
              break;
            case g.NP.yt:
              v = (0, r.PP)("#FamilyHistory_AccountRemoved", m, f);
              break;
            case g.NP.H$:
              t.actor_steamid() === _.account
                ? (v = (0, r.PP)("#FamilyHistory_InviteRejected", m))
                : (v = (0, r.PP)("#FamilyHistory_InviteCancelled", m, f));
              break;
            case g.NP.am:
              v = (0, r.PP)("#FamilyHistory_PurchaseRequested", m);
              break;
            case g.NP.n0:
              v = (0, r.PP)("#FamilyHistory_ParentalSettingsDisabled", m, f);
              break;
            case g.NP.i6:
              v = (0, r.PP)("#FamilyHistory_ParentalSettingsEnabled", m, f);
              break;
            case g.NP.Pj:
              v = (0, r.PP)("#FamilyHistory_ParentalSettingsChanged", m, f);
              break;
            case g.NP.v9:
              v = (0, r.PP)(
                "#FamilyHistory_FamilyCooldownOverridesChanged",
                m,
                _.count,
              );
              break;
            case g.NP.yZ:
              v = (0, r.PP)("#FamilyHistory_PurchaseRequestCanceled", m);
              break;
            case g.NP.Wl:
              v = (0, r.PP)("#FamilyHistory_PurchaseRequestApproved", m, f);
              break;
            case g.NP.re:
              v = (0, r.PP)("#FamilyHistory_PurchaseRequestDeclined", m, f);
              break;
            case g.NP.Pm:
              v = (0, r.PP)("#FamilyHistory_CooldownSkipConsumed", m);
              break;
            case g.NP.qe:
              v = (0, r.PP)("#FamilyHistory_FamilyRestored", m);
              break;
            case g.NP.X9:
              v = (0, r.PP)("#FamilyHistory_ForceAcceptedInvite", m, f);
              break;
            default:
              v = (0, r.PP)("#FamilyHistory_UnknownChange");
              break;
          }
          return (0, e.jsxs)(S.Z, {
            className: (0, A.A)(n.Entry),
            focusable: !0,
            ...s,
            children: [
              (0, e.jsx)("div", {
                className: (0, A.A)(n.Timestamp),
                children: c,
              }),
              (0, e.jsx)("div", {
                className: (0, A.A)(n.EntryText),
                children: v,
              }),
            ],
          });
        }
        var ne = y(96214),
          En = y(22185),
          Tn = y(84278),
          R = y.n(Tn),
          vt = y(54407),
          je = y(84676),
          On = y(19367),
          Se = y.n(On),
          Gn = y(41635),
          Ln = y(71742),
          Bn = y(92298),
          Ct = y.n(Bn),
          j = y(73712),
          q = y(79365),
          kn = y(21721),
          Wn = y(64238),
          Hn = y.n(Wn),
          Ee = y(29528);
        const Un =
          y.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var Kn = y(2259),
          qn = y(1242);
        function Qn(i) {
          const {
              idxStart: t,
              idxEnd: n,
              renderItem: a,
              height: s,
              itemWidth: o,
              columnGap: l,
            } = i,
            c = [];
          for (let u = t; u < n; u++) c.push(a(u, o));
          return (0, e.jsx)(S.Z, {
            className: qn.VirtualizedGridRow,
            style: { height: s, gap: l },
            children: c,
          });
        }
        function zn(i) {
          const {
              nItems: t,
              renderItem: n,
              nAspectRatio: a,
              nColumns: s = 7,
              nColumnGap: o = 10,
              nRowGap: l = 10,
              onWidthChanged: c,
            } = i,
            [u, d] = p.useState(0),
            m = Math.ceil(t / s),
            h = Math.max(0, Math.floor((u - (s - 1) * o) / s)),
            _ = Math.floor(h / a),
            f = p.useCallback(
              (v) => {
                d(v.borderBoxSize[0].inlineSize),
                  c &&
                    c(
                      v.target.ownerDocument.defaultView?.innerWidth || 0,
                      v.borderBoxSize[0].inlineSize,
                    );
              },
              [c],
            ),
            F = (0, Kn.wY)(f),
            C = (v) =>
              (0, e.jsx)(
                Qn,
                {
                  idxStart: v * s,
                  idxEnd: Math.min(t, (v + 1) * s),
                  height: _,
                  itemWidth: h,
                  columnGap: o,
                  renderItem: n,
                },
                v,
              );
          return (0, e.jsx)(Me, {
            ref: F,
            nRows: m,
            nItemHeight: _,
            nRowGap: l,
            renderItem: C,
          });
        }
        function Vn(i) {
          const { app: t, width: n, index: a, renderItem: s } = i,
            [o, l] = p.useState("loading"),
            c = (0, kn.pd)(t.appid);
          if (c === void 0) return null;
          const u = o == "error" || !c;
          let d;
          u
            ? (d = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("img", {
                    className: Ee.Capsule,
                    src: Un,
                    alt: t.name,
                    loading: "lazy",
                  }),
                  (0, e.jsx)("div", { className: Ee.Label, children: t.name }),
                ],
              }))
            : (d = (0, e.jsx)("img", {
                className: Ee.Capsule,
                src: c,
                alt: t.name,
                onLoad: () => l("loaded"),
                onError: () => l("error"),
              }));
          const m = {
            className: Hn()(Ee.AppGridItem, (u || o == "loaded") && Ee.Loaded),
            style: { width: n },
            fnScrollIntoViewHandler: () => !0,
            children: d,
          };
          return s(t, a, m);
        }
        function St(i) {
          const { rgApps: t, renderItem: n, ...a } = i,
            s = p.useCallback(
              (o, l) => {
                const c = t[o];
                return (0, e.jsx)(
                  Vn,
                  { app: c, width: l, index: o, renderItem: n },
                  c.appid,
                );
              },
              [t, n],
            );
          return (0, e.jsx)(zn, {
            nItems: t.length,
            renderItem: s,
            nAspectRatio: 600 / 900,
            ...a,
          });
        }
        var ot = y(56718),
          lt = y(20117),
          Pt = y(40358),
          Zn = y(29522),
          Jn = y(16346),
          ze = y(56925),
          Yn = y(13977),
          Ae = y(34360),
          jt = y(80702),
          Ft = y(53107),
          Te = y(82734),
          B = y(63043);
        function wt(i, t) {
          (0, Ft.EP)(i, `steam://open/games/details/${t}`);
        }
        function ct(i, t) {
          t && (Q.TS.IN_CLIENT ? (window.location.href = t) : (0, Ft.EP)(i, t));
        }
        function Xn(i) {
          const { app: t, sort: n } = i,
            a = (0, U.LH)(),
            s = (0, ze.Uy)(t.appid),
            o = t.owner_steamids.filter((C) => C != a),
            l = (0, X.DW)(o),
            c = (0, $.M8)(),
            d = (0, ce.T)().data?.preferences().parenthesize_nicknames();
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
              s
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
              className: B.Acquired,
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
          const _ = (C) =>
            It(l[C].data, c.data?.get(new lt.b2(o[C]).GetAccountID()), d);
          let f, F;
          if (
            (m &&
              (f = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: B.Excluded,
                    children: (0, r.we)(m),
                  }),
                  (0, e.jsx)("div", {
                    className: B.ExcludedCode,
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
              (s &&
                !f &&
                (f = (0, e.jsx)("div", {
                  className: B.Excluded,
                  children: (0, r.we)("#FamilyGame_Excluded_Private"),
                })),
              o.length == 0 || l.some((C) => !C.isSuccess))
            )
              F = null;
            else {
              const C = o.length != t.owner_steamids.length && !s;
              o.length == 1
                ? (F = (0, e.jsx)("div", {
                    className: B.LibraryOwnerSingle,
                    children: (0, r.we)(
                      C
                        ? "#FamilyGames_FromTheLibraryOf_Single_Owned"
                        : "#FamilyGames_FromTheLibraryOf_Single",
                      _(0),
                    ),
                  }))
                : (F = (0, e.jsxs)("div", {
                    className: B.LibraryOwnerMultiple,
                    children: [
                      (0, e.jsx)("div", {
                        className: B.Header,
                        children: (0, r.we)(
                          C
                            ? "#FamilyGames_FromTheLibraryOf_Header_Owned"
                            : "#FamilyGames_FromTheLibraryOf_Header",
                        ),
                      }),
                      (0, e.jsx)("ul", {
                        children: o.map((v, w) =>
                          (0, e.jsx)(
                            "li",
                            { className: B.Owner, children: _(w) },
                            v,
                          ),
                        ),
                      }),
                    ],
                  }));
            }
          return (0, e.jsxs)("div", {
            className: B.AdditionalHoverCtn,
            children: [f, F, h],
          });
        }
        function $n(i) {
          const { item: t } = i,
            n = (0, ze.Uy)(t.appid),
            a = (0, U.LH)();
          let s = t.owner_steamids.length;
          return (
            n && t.owner_steamids.includes(a) && (s = s - 1),
            s <= 1
              ? null
              : (0, e.jsx)("div", { className: B.LicenseCount, children: s })
          );
        }
        function It(i, t, n) {
          let a = i.m_strPlayerName;
          return t && (a = n ? `${i.m_strPlayerName} (${t})` : `${t}*`), a;
        }
        function Dt(i) {
          const t = new lt.b2(i),
            n = (0, X.js)(i),
            a = (0, $.M8)(),
            s = (0, ce.T)(),
            o = a.data?.get(t.GetAccountID()),
            l = s.data?.preferences().parenthesize_nicknames();
          return !n.isSuccess || !a.isSuccess || !s.isSuccess
            ? null
            : It(n.data, o, l);
        }
        function ea(i) {
          const { item: t, strSteamID: n } = i,
            a = Dt(n),
            s = t.appid,
            { settings: o, mapAppsAllowed: l } = (0, ne.S0)(n).data,
            c = l?.get(t.appid) || !1,
            u = (0, ne.At)(n),
            d = p.useCallback(() => {
              (0, ne.qR)(o, !c, [s]), u.mutate(o);
            }, [s, o, u, c]);
          return !a || !o || !o.is_enabled || o.applist_base_id == 0
            ? null
            : (0, e.jsx)(Ae.kt, {
                onSelected: d,
                children: (0, r.we)(
                  c ? "#FamilyGame_DenyForChild" : "#FamilyGame_AllowForChild",
                  a,
                ),
              });
        }
        function ta(i) {
          const { item: t, bOwnsGame: n, familyContext: a } = i,
            s = (0, U.LH)(),
            { familyGroup: o, invalidateGamesList: l } = a,
            c = o.members.find((w) => w.steamid == s).role == g.PQ.s,
            { data: u } = (0, Pt.J$)({ appid: t.appid }),
            d = n || t.exclude_reason == g.fO.RN,
            m = (0, ze.Uy)(t.appid),
            { mutateAsync: h } = (0, ze.bD)(t.appid),
            _ = Q.TS.IN_CLIENT,
            f = p.useCallback(async () => {
              await h(!m), l();
            }, [h, m, l]),
            F = p.useCallback(
              (w) => {
                u &&
                  ct(
                    (0, Te.uX)(w),
                    `${Q.TS.STORE_BASE_URL}${u.store_url_path}`,
                  );
              },
              [u],
            ),
            C = p.useCallback(
              (w) => {
                wt((0, Te.uX)(w), t.appid);
              },
              [t],
            ),
            v = _ && d;
          return (0, e.jsxs)(Ae.tz, {
            children: [
              d &&
                (0, e.jsx)(Ae.kt, {
                  onSelected: () => {
                    (0, Yn.o)(t.appid, t.name);
                  },
                  children: (0, r.we)("#FamilyGame_PlayGame"),
                }),
              v &&
                (0, e.jsx)(Ae.kt, {
                  onSelected: C,
                  children: (0, r.we)("#FamilyGame_OpenAppDetails"),
                }),
              u?.visible &&
                (0, e.jsx)(Ae.kt, {
                  onSelected: F,
                  children: (0, r.we)("#FamilyGame_ViewStore"),
                }),
              (0, e.jsx)(Ae.kt, {
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
                      ea,
                      { item: t, strSteamID: w.steamid },
                      w.steamid,
                    ),
                  ),
            ],
          });
        }
        function na(i) {
          const {
              app: t,
              item: n,
              bShowLicenseCount: a,
              sort: s,
              className: o,
              children: l,
              ...c
            } = i,
            u = (0, U.LH)(),
            d = p.useContext(Rt),
            m = (0, e.jsx)(Xn, { app: n, sort: s }),
            h = { direction: "right", style: { minWidth: "320px" } },
            _ = (0, Zn.$5)(n.appid),
            { data: f } = (0, Pt.J$)(_),
            F = n.exclude_reason == g.fO.RN || n.exclude_reason == g.fO.zC,
            C = n.owner_steamids.some((re) => re == u),
            v = Q.TS.IN_CLIENT,
            w = f && f.visible,
            G = p.useCallback(
              (re) => {
                (0, Jn.lX)(
                  (0, e.jsx)(ta, { item: n, bOwnsGame: C, familyContext: d }),
                  re,
                ),
                  re.stopPropagation(),
                  re.preventDefault();
              },
              [n, C, d],
            ),
            ie = (v && (F || C)) || w,
            te = p.useCallback(
              (re) => {
                v && (F || C)
                  ? wt((0, Te.uX)(re), t.appid)
                  : w &&
                    ct(
                      (0, Te.uX)(re),
                      `${Q.TS.STORE_BASE_URL}${f.store_url_path}`,
                    );
              },
              [t.appid, F, C, f, w, v],
            );
          return (0, e.jsx)(jt.Q, {
            id: _,
            name: n.name,
            bPreventNavigation: C || F,
            bHidePrice: C,
            bShowWishlistButton: !C,
            hoverProps: h,
            className: B.HoverSource,
            elElementToAppend: m,
            children: (0, e.jsxs)(S.Z, {
              className: (0, A.A)(o, B.FamilyGameItem, ie && B.Selectable),
              focusable: !0,
              onActivate: ie ? te : void 0,
              onContextMenu: G,
              ...c,
              children: [l, a && (0, e.jsx)($n, { item: n })],
            }),
          });
        }
        function aa() {
          const [i, t] = p.useState(7),
            n = p.useCallback((a, s) => {
              let o;
              a <= parseInt(B.nNarrowWidth)
                ? (o = 3)
                : a <= parseInt(B.nMediumWidth)
                  ? (o = 5)
                  : (o = 7),
                t(o);
            }, []);
          return [i, n];
        }
        function sa(i) {
          const { nRows: n, setShowAll: a, setRows: s, nIncrement: o = 2 } = i,
            l = p.useRef(void 0),
            c = () => {
              s(n + o);
            };
          return (
            p.useEffect(() => {
              l.current?.BHasFocus() &&
                (l.current
                  .Node()
                  ?.GetLastFocusElement()
                  .scrollIntoView({ block: "end" }),
                l.current?.Node().ForceMeasureFocusRing());
            }, [n]),
            (0, e.jsxs)(S.Z, {
              className: B.Buttons,
              children: [
                (0, e.jsx)("div", {
                  className: B.ButtonWrapper,
                  children: (0, e.jsx)(P.$n, {
                    className: B.Button,
                    navRef: l,
                    onClick: c,
                    children: (0, r.we)("#FamilyGames_ShowMore"),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: B.ButtonWrapper,
                  children: (0, e.jsx)(P.$n, {
                    className: B.Button,
                    onClick: () => a(!0),
                    children: (0, r.we)("#FamilyGames_ShowAll"),
                  }),
                }),
              ],
            })
          );
        }
        function Mt(i, t) {
          const [n, a] = aa(),
            [s, o] = p.useState(2),
            [l, c] = p.useState(t),
            u = p.useMemo(
              () =>
                (l ? i : i.slice(0, n * s))?.map((_) => ({
                  appid: _.appid,
                  name: _.name,
                })),
              [l, i, s, n],
            ),
            d = Math.max(i.length - n * s, 0),
            m = l || d == 0;
          return {
            rgApps: u,
            nRows: s,
            setRows: o,
            bDisplayingAll: m,
            setShowAll: c,
            nColumns: n,
            OnWidthChanged: a,
          };
        }
        function mt(i) {
          const {
              rgSortedGames: t,
              strLabel: n,
              bShowLicenseCount: a = !0,
              sort: s,
            } = i,
            {
              rgApps: o,
              nRows: l,
              setRows: c,
              bDisplayingAll: u,
              setShowAll: d,
              nColumns: m,
              OnWidthChanged: h,
            } = Mt(t, !1),
            _ = p.useCallback(
              (f, F, C) =>
                (0, e.jsx)(na, {
                  app: f,
                  item: t[F],
                  bShowLicenseCount: a,
                  sort: s,
                  ...C,
                }),
              [t, a, s],
            );
          return t?.length
            ? (0, e.jsxs)("div", {
                className: B.FamilyGamesSection,
                children: [
                  (0, e.jsxs)("div", {
                    className: B.Header,
                    children: [
                      (0, e.jsx)("div", { className: B.Label, children: n }),
                      (0, e.jsx)("div", {
                        className: B.Count,
                        children: (0, r.we)("#FamilyGames_Count", t.length),
                      }),
                    ],
                  }),
                  (0, e.jsx)(St, {
                    rgApps: o,
                    nColumns: m,
                    onWidthChanged: h,
                    renderItem: _,
                  }),
                  !u && (0, e.jsx)(sa, { nRows: l, setRows: c, setShowAll: d }),
                ],
              })
            : null;
        }
        function bt(i) {
          const {
              rgOptions: t,
              sort: n,
              setSort: a,
              bAscending: s,
              children: o,
            } = i,
            l = t.findIndex((d) => d == n),
            c = l != -1,
            u = t[(l + 1) % t.length];
          return (0, e.jsxs)(S.Z, {
            className: (0, A.A)(B.FamilyGamesSortSelector, c && B.Selected),
            onActivate: () => a(u),
            children: [
              o,
              (0, e.jsx)("div", {
                className: B.DirectionIndicator,
                children:
                  c && (0, e.jsx)(ot.i3G, { direction: s ? "up" : "down" }),
              }),
            ],
          });
        }
        function ia(i) {
          const { sort: t, setSort: n } = i;
          return (0, e.jsxs)(S.Z, {
            className: B.FamilyGamesSort,
            children: [
              (0, e.jsx)(bt, {
                rgOptions: ["alpha-asc", "alpha-desc"],
                sort: t,
                setSort: n,
                bAscending: t == "alpha-asc",
                children: (0, r.we)("#FamilyGames_Sort_Alphabetical"),
              }),
              (0, e.jsx)(bt, {
                rgOptions: ["date_acquired-desc", "date_acquired-asc"],
                sort: t,
                setSort: n,
                bAscending: t == "date_acquired-asc",
                children: (0, r.we)("#FamilyGames_Sort_DateAcquired"),
              }),
            ],
          });
        }
        function At(i) {
          const { strFilter: t, setFilter: n } = i,
            a = p.useCallback(
              (s) => {
                n(s.target.value);
              },
              [n],
            );
          return (0, e.jsx)(S.Z, {
            className: B.FamilyGamesSearchBox,
            children: (0, e.jsx)(P.pd, {
              className: B.Input,
              value: t,
              onChange: a,
              placeholder: (0, r.we)("#Parental_GameList_Search"),
            }),
          });
        }
        function ra(i) {
          const { strFilter: t, setFilter: n, sort: a, setSort: s } = i;
          return (0, e.jsxs)(S.Z, {
            className: B.FamilyGamesControls,
            children: [
              (0, e.jsx)(ia, { sort: a, setSort: s }),
              (0, e.jsx)(At, { strFilter: t, setFilter: n }),
            ],
          });
        }
        const Nt = { bIncludeOwn: !0, bIncludeExcluded: !0 };
        function oa(i) {
          const { familyGroupID: t, children: n } = i,
            a = (0, x.Xq)(t, Nt),
            s = (0, x.Hs)(t),
            o = p.useMemo(
              () => ({
                familyGroupID: t,
                familyGroup: s.data?.toObject(),
                invalidateGamesList: a,
              }),
              [t, s.data, a],
            );
          return (0, e.jsx)(Rt.Provider, { value: o, children: n });
        }
        const Rt = p.createContext(void 0);
        function la(i) {
          const { familyGroupID: t } = i,
            [n, a] = p.useState(""),
            [s, o] = p.useState("alpha-asc"),
            l = (0, x.yM)(t, Nt),
            c = (0, x.YW)(l.data, s, n),
            u = p.useMemo(
              () => c?.filter((h) => h.exclude_reason == g.fO.RN),
              [c],
            ),
            d = p.useMemo(
              () =>
                c?.filter(
                  (h) =>
                    h.exclude_reason != g.fO.RN && h.exclude_reason != g.fO.zC,
                ),
              [c],
            ),
            m = p.useMemo(
              () => c?.filter((h) => h.exclude_reason == g.fO.zC),
              [c],
            );
          return (0, e.jsxs)(oa, {
            familyGroupID: t,
            children: [
              l.isFetching &&
                (0, e.jsx)("div", {
                  className: B.Loading,
                  children: (0, e.jsx)(L.t, {}),
                }),
              l.isError &&
                (0, e.jsx)("div", {
                  className: B.Error,
                  children: (0, r.we)("#FamilyGames_Error", l.error),
                }),
              l.isSuccess &&
                (0, e.jsxs)("div", {
                  className: B.FamilyGames,
                  children: [
                    l.data?.length > 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(ra, {
                            strFilter: n,
                            setFilter: a,
                            sort: s,
                            setSort: o,
                          }),
                          (0, e.jsx)(mt, {
                            rgSortedGames: u,
                            strLabel: (0, r.we)("#FamilyGames_IncludedGames"),
                            sort: s,
                          }),
                          (0, e.jsx)(mt, {
                            rgSortedGames: d,
                            bShowLicenseCount: !1,
                            strLabel: (0, r.we)("#FamilyGames_ExcludedGames"),
                            sort: s,
                          }),
                          (0, e.jsx)(mt, {
                            rgSortedGames: m,
                            bShowLicenseCount: !1,
                            strLabel: (0, r.we)("#FamilyGames_FreeGames"),
                            sort: s,
                          }),
                          c?.length == 0 &&
                            (0, e.jsx)("div", {
                              className: B.Empty,
                              children: (0, r.we)("#FamilyGames_EmptySearch"),
                            }),
                        ],
                      }),
                    l.data?.length == 0 &&
                      (0, e.jsx)("div", {
                        className: B.Empty,
                        children: (0, r.we)("#FamilyGames_NoGames"),
                      }),
                  ],
                }),
            ],
          });
        }
        var Ve = y(71421),
          Et = y(23903),
          Tt = y(80902),
          Ot = y(57168),
          Gt = y(83153),
          ca = y(35038),
          dt = y(84192),
          ma = y(68312),
          Ze = y(10142),
          Lt = y(24525);
        function Bt(i, t) {
          const n = Se()()
              .startOf("day")
              .add(30 * i, "minutes"),
            a = Se()()
              .startOf("day")
              .add(30 * t, "minutes"),
            s = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              hour: "numeric",
              minute: "numeric",
            });
          return (
            s.format(n.toDate()).replace(" ", "\xA0") +
            "-" +
            s.format(a.toDate()).replace(" ", "\xA0")
          );
        }
        function ut(i) {
          if (i == BigInt(0)) return (0, r.we)("#Parental_Playtime_Never");
          if (i == BigInt(0xffffffffffff))
            return (0, r.we)("#Parental_Playtime_AnyTime");
          let t = [],
            n = -1;
          for (let a = 0; a < 48; a++)
            i & (BigInt(1) << BigInt(a))
              ? n == -1 && (n = a)
              : n != -1 && (t.push(Bt(n, a)), (n = -1));
          return n != -1 && (t.push(Bt(n, 48)), (n = -1)), t.join(", ");
        }
        var he = y(95198);
        function da(i, t) {
          return t
            .members()
            .filter((a) => a.role() == g.PQ.sf && a.steamid() != i)
            .map((a) => a.steamid());
        }
        function ua(i) {
          const { steamid: t, settings: n, familyGroup: a } = i,
            s = (0, ne.vM)(t, n),
            o = (0, ne.Ut)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.p8)(s, "#FamilyManagement_ErrorModifyParentalSettingsGeneric"),
            (0, x.p8)(
              o,
              "#FamilyManagement_ErrorModifyParentalSettingsGeneric",
            );
          let [c, u] = (0, p.useState)(""),
            d = da(t, a);
          const m = (0, X.DW)(d),
            h = Gn.$D(m, (C) => C.isSuccess),
            _ = (0, p.useMemo)(() => {
              let C = [];
              if (
                (C.push({
                  label: (0, r.we)("#Parental_EnabledSetting"),
                  data: "enabled",
                }),
                C.push({
                  label: (0, r.we)("#Parental_DisabledSetting"),
                  data: "disabled",
                }),
                h > 0)
              ) {
                C.push({ bIsSeparator: !0 });
                for (let v of m) {
                  if (!v.isSuccess) continue;
                  let w = (0, r.we)(
                    "#Parental_CopySettingsFrom",
                    v.data.m_strPlayerName,
                  );
                  C.push({
                    label: w,
                    data: `copy_${v.data.GetSteamIDAsString()}`,
                  });
                }
              }
              return C;
            }, [m, h]),
            f = p.useCallback(
              (C) => {
                l(null);
                let v = C.data;
                if (v == "enabled") s.mutate();
                else if (v == "disabled") o.mutate();
                else if (v.startsWith("copy_")) {
                  let w = v.split("_");
                  u(w[1]);
                }
              },
              [l, s, o],
            );
          let F = n.is_enabled ? "enabled" : "disabled";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(pa, {
                steamid: t,
                otherChildrenQuery: m,
                confirmCopy: c,
                setConfirmCopy: u,
              }),
              (0, e.jsx)(P.Vb, {
                strClassName: j.DropDownCtn,
                controlled: !0,
                bottomSeparator: "none",
                label: (0, r.we)("#Parental_EnableDropdown"),
                rgOptions: _,
                selectedOption: F,
                onChange: f,
                bMatchWidth: !1,
              }),
            ],
          });
        }
        function pa(i) {
          const {
              steamid: t,
              otherChildrenQuery: n,
              confirmCopy: a,
              setConfirmCopy: s,
            } = i,
            o = (0, X.js)(t),
            l = (0, ne.Xl)(),
            c = p.useCallback(() => {
              a.length != 0 &&
                (l.mutate({ steamidSrc: a, steamidDest: t }), s(""));
            }, [t, a, s, l]);
          let u = "";
          if (a.length > 0) {
            for (let h of n)
              !h.isSuccess ||
                h.data.GetSteamIDAsString() != a ||
                (u = h.data.m_strPlayerName);
            u.length == 0 && (u = a);
          }
          let d = t;
          o.isSuccess && (d = o.data.m_strPlayerName);
          let m = (0, r.we)("#Parental_CopySettingsConfirmation_Desc", d, u);
          return (0, e.jsx)(E.EN, {
            active: a.length > 0,
            children: (0, e.jsx)(E.o0, {
              closeModal: () => s(""),
              onOK: c,
              strTitle: (0, r.we)("#Parental_CopySettingsConfirmation_Title"),
              children: (0, e.jsx)("div", {
                className: j.ConfirmCopyDescription,
                children: m,
              }),
            }),
          });
        }
        function ya(i) {
          const { steamid: t, settings: n } = i,
            a = (0, ne.At)(t),
            { setErrorMessage: s } = (0, x.RC)();
          (0, x.p8)(a, "#FamilyManagement_ErrorModifyParentalSettingsGeneric");
          const o = p.useMemo(
              () => [
                { label: (0, r.we)("#Parental_Baselist_AllGames"), data: 0 },
                { label: (0, r.we)("#Parental_Baselist_NoGames"), data: 1 },
              ],
              [],
            ),
            l = p.useCallback(
              (c, u) => {
                s(null), (n.applist_base_id = c.data), a.mutate(n);
              },
              [n, a, s],
            );
          return (0, e.jsx)(P.Vb, {
            focusable: !0,
            strClassName: j.DropDownCtn,
            bottomSeparator: "none",
            label: (0, r.we)("#Parental_Baselist_Label"),
            rgOptions: o,
            selectedOption: n.applist_base_id,
            onChange: l,
          });
        }
        function ha(i) {
          const { steamid: t, settings: n, game: a, ...s } = i,
            o = (0, ne.At)(t),
            l = a.appid,
            c = n.applist_custom.find((_) => _.appid == l),
            { setErrorMessage: u } = (0, x.RC)();
          (0, x.p8)(o, "#FamilyManagement_ErrorModifyParentalSettingsGeneric");
          const d = c?.is_allowed || !1,
            m =
              a.img_icon_url ||
              (a.img_icon_hash &&
                Q.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  l +
                  "/" +
                  a.img_icon_hash +
                  ".jpg"),
            h = p.useCallback(() => {
              u(null), (0, ne.qR)(n, !d, [l]), o.mutate(n);
            }, [l, n, o, u, d]);
          return (0, e.jsxs)(S.Z, {
            className: (0, A.A)(j.ParentalGameRow, d && j.Allowed),
            onActivate: h,
            ...s,
            children: [
              m && (0, e.jsx)("img", { className: j.Icon, src: m }),
              !m && (0, e.jsx)("div", { className: j.Icon }),
              (0, e.jsx)("div", { className: j.Name, children: a.name }),
              (0, e.jsx)(P.Od, {
                className: j.RoundCheckbox,
                checked: d,
                onChange: h,
              }),
            ],
          });
        }
        function fa(i) {
          const {
              setContentDescriptors: t,
              selectedContentDescriptors: n,
              showFilter: a,
              setShowFilter: s,
              onDismiss: o,
            } = i,
            [l, c] = (0, p.useState)(n),
            u = (m) => (h) => {
              let _ = [];
              if (h) {
                const F = [m].concat((0, he.fd)(m));
                for (const C of he.TW)
                  (l.includes(C) || F.includes(C)) && _.push(C);
              } else {
                const F = [m].concat((0, he.Rl)(m));
                for (const C of he.TW)
                  l.includes(C) && !F.includes(C) && _.push(C);
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
              (0, e.jsx)(P.Y9, {
                children: (0, r.we)(
                  "#Parental_GameList_ShowGamesThatAreFilterHeader",
                ),
              }),
              (0, e.jsx)(S.Z, {
                className: j.FilterDropdownCtn,
                children: (0, e.jsx)(P.ZU, {
                  focusable: !0,
                  rgOptions: d,
                  selectedOption: a,
                  onChange: (m) => s(m.data),
                }),
              }),
              (0, e.jsx)(P.Y9, {
                children: (0, r.we)(
                  "#Parental_GameList_ContentDescriptorFilterHeader",
                ),
              }),
              (0, e.jsx)(S.Z, {
                className: j.FilterSection,
                children: he.TW.map((m) => {
                  const h = l.includes(m),
                    _ = u(m);
                  return (0, e.jsxs)(
                    S.Z,
                    {
                      className: j.FilterRow,
                      children: [
                        (0, e.jsx)(S.Z, {
                          className: j.FilterInfo,
                          children: (0, he.H5)(m),
                        }),
                        (0, e.jsx)(S.Z, {
                          className: j.FilterToggle,
                          children: (0, e.jsx)(P.Yh, {
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
              (0, e.jsx)(P.CB, {
                onCancel: o,
                onOK: () => {
                  t(l), o();
                },
                strOKText: (0, r.we)("#Parental_GameList_Button_Apply"),
                className: j.FilterModalButtons,
              }),
            ],
          });
        }
        function ga(i) {
          const {
              strFilter: t,
              setFilter: n,
              strView: a,
              setView: s,
              setContentDescriptors: o,
              selectedContentDescriptors: l,
              showFilter: c,
              setShowFilter: u,
            } = i,
            [d, m] = (0, p.useState)(!1);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(E.mt, {
                active: d,
                onDismiss: () => m(!1),
                className: j.FilterModal,
                children: (0, e.jsx)(fa, {
                  selectedContentDescriptors: l,
                  setContentDescriptors: o,
                  showFilter: c,
                  setShowFilter: u,
                  onDismiss: () => m(!1),
                }),
              }),
              (0, e.jsxs)(S.Z, {
                className: j.ParentalGameListHeader,
                children: [
                  (0, e.jsx)("div", {
                    className: j.Title,
                    children: (0, r.we)("#Parental_GameList_Header"),
                  }),
                  (0, e.jsxs)(S.Z, {
                    className: j.SearchCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: j.SelectorCtn,
                        children: [
                          (0, e.jsx)(S.Z, {
                            className: (0, A.A)(
                              j.ViewSelector,
                              a == "list" && j.Selected,
                            ),
                            onActivate: () => s("list"),
                            children: (0, e.jsx)(Ve.he, {
                              toolTipContent: (0, r.we)(
                                "#Parental_GameList_List",
                              ),
                              children: (0, e.jsx)(ot.B8B, {}),
                            }),
                          }),
                          (0, e.jsx)(S.Z, {
                            className: (0, A.A)(
                              j.ViewSelector,
                              a == "grid" && j.Selected,
                            ),
                            onActivate: () => s("grid"),
                            children: (0, e.jsx)(Ve.he, {
                              toolTipContent: (0, r.we)(
                                "#Parental_GameList_Grid",
                              ),
                              children: (0, e.jsx)(ot.F7C, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)(At, { strFilter: t, setFilter: n }),
                      (0, e.jsx)(S.Z, {
                        className: j.FilterDropdownButton,
                        onActivate: () => m(!0),
                        children: (0, e.jsx)(Ve.he, {
                          toolTipContent: (0, r.we)(
                            "#Parental_GameList_Filter",
                          ),
                          children: (0, e.jsx)(z.nkJ, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _a(i) {
          const t = (0, ma.KV)(),
            n = ["ParentalSearchSuggestions", i];
          return (0, Tt.I)({
            queryKey: n,
            queryFn: async () => {
              if (i.length < 2) return [];
              const a = ca.w.Init(Gt.pI);
              a.Body().set_query_name(JSON.stringify(n)),
                a.Body().set_search_term(i),
                (0, dt.rV)(a),
                (0, dt.Bn)(a, { include_basic_info: !0, include_assets: !0 }),
                (0, dt.hc)(a, {
                  type_filters: { include_games: !0 },
                  price_filters: { only_free_items: !0 },
                }),
                a.Body().set_max_results(20),
                a.Body().set_use_spellcheck(!0);
              let s = await Gt.Fs.SearchSuggestions(t, a);
              return s.BSuccess()
                ? s
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
            placeholderData: Ot.rX,
          });
        }
        function xa(i) {
          const t = i.applist_custom.map((a) => a.appid),
            n = (0, je.zX)(t, { include_assets: !0 });
          return (0, Tt.I)({
            queryKey: ["ParentalStoreItems", t],
            queryFn: async () =>
              t
                .map((a) => {
                  const s = Ze.A.Get().GetApp(a);
                  return (
                    s && {
                      appid: s.GetAppID(),
                      name: s.GetName(),
                      capsule_filename: s.GetAssets().GetLibraryCapsuleURL(),
                      img_icon_url: s.GetAssets().GetCommunityIconURL(),
                      parentalApp: !0,
                    }
                  );
                })
                .filter((a) => !!a),
            enabled: n != je.Sq,
            placeholderData: Ot.rX,
          });
        }
        function va(i, t, n) {
          const a = (0, x.vo)()?.data.family_groupid(),
            s = (0, x.yM)(a, {
              bIncludeOwn: !0,
              bIncludeExcluded: !0,
              bIncludeNonGames: !0,
              for_account_id: parseInt(i.steamid),
            }).data;
          let o = xa(i).data,
            l = _a(t).data;
          const [c, u] = p.useMemo(() => {
            const _ = lt.b2
                .InitFromAccountID(parseInt(i.steamid), Q.TS.EUNIVERSE)
                .ConvertTo64BitString(),
              f = s?.filter(
                (v) =>
                  v.app_type != Lt.B7 &&
                  (v.exclude_reason == g.fO.RN || v.owner_steamids.includes(_)),
              ),
              F = s?.filter(
                (v) => v.app_type == Lt.B7 && v.owner_steamids.includes(_),
              ),
              C = t ? l?.concat(F || []) : [];
            return [f, C];
          }, [s, l, t, i.steamid]);
          (l = u?.filter((_) => c.findIndex((f) => f.appid == _.appid) == -1)),
            (o = o?.filter(
              (_) => u.findIndex((f) => f.appid == _.appid) == -1,
            ));
          const d = p.useMemo(() => {
              const _ = new Map();
              return (
                o?.forEach((f) => _.set(f.appid, f)),
                c?.forEach((f) => _.set(f.appid, f)),
                Array.from(_.values())
              );
            }, [c, o]),
            m = (0, x.YW)(d, "alpha-asc", t, n),
            h = (0, x.YW)(u, "alpha-asc", t, n);
          return [m, h];
        }
        function Ca(i) {
          const {
              strToken: t,
              steamid: n,
              nAllowed: a,
              nTotal: s,
              setAllowAllApps: o,
            } = i,
            l = Dt(n);
          return (0, e.jsxs)("div", {
            className: j.SectionHeader,
            children: [
              (0, e.jsx)("div", {
                className: j.Title,
                children: (0, r.we)(t + (s ? "_Count" : ""), a, s, l),
              }),
              o &&
                (0, e.jsxs)(S.Z, {
                  className: j.SelectorCtn,
                  children: [
                    (0, e.jsx)(P.$n, {
                      onClick: () => o(!0),
                      children: (0, r.we)("#Parental_GameList_AllowAll"),
                    }),
                    (0, e.jsx)(P.$n, {
                      onClick: () => o(!1),
                      children: (0, r.we)("#Parental_GameList_DenyAll"),
                    }),
                  ],
                }),
            ],
          });
        }
        function kt(i) {
          const {
              strTitleToken: t,
              nAllowed: n,
              nTotal: a,
              setAllowAllApps: s,
              strView: o,
              steamid: l,
              settings: c,
              rgAllApps: u,
            } = i,
            d = !0,
            {
              rgApps: m,
              bDisplayingAll: h,
              nColumns: _,
              OnWidthChanged: f,
            } = Mt(u, d);
          return (
            (0, Ln.wT)(h, "Parental Control Library not displaying all"),
            u.length == 0
              ? null
              : (0, e.jsxs)("div", {
                  className: j.ParentalGameSection,
                  children: [
                    (0, e.jsx)(Ca, {
                      strToken: t,
                      steamid: l,
                      nAllowed: n,
                      nTotal: a,
                      setAllowAllApps: s,
                    }),
                    o == "list" &&
                      (0, e.jsx)(Pa, {
                        steamid: l,
                        settings: c,
                        rgSortedGames: u,
                      }),
                    o == "grid" &&
                      (0, e.jsx)(Fa, {
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
        function Sa(i) {
          const { steamid: t, settings: n, mapAppsAllowed: a } = i,
            s = (0, ne.At)(t),
            [o, l] = p.useState(""),
            [c, u] = p.useState([]),
            [d, m] = p.useState("show_all"),
            [h, _] = p.useState("grid");
          let [f, F] = va(n, o, c);
          const C = f?.filter((te) => !(0, ne.or)(te.appid, !0, n, a)),
            v = new Set(C.map((te) => te.appid)),
            w = C?.length || 0,
            G = (!o && f?.length) || 0,
            ie = p.useCallback(
              (te) => {
                (0, ne.qR)(
                  n,
                  te,
                  f.map((re) => re.appid),
                ),
                  s.mutate(n);
              },
              [n, f, s],
            );
          return f.length == 0 && !o && c.length === 0
            ? null
            : (d === "show_allowed_only"
                ? (f = f.filter((te) => v.has(te.appid)))
                : d === "show_denied_only" &&
                  (f = f.filter((te) => !v.has(te.appid))),
              (0, e.jsxs)("div", {
                className: j.ParentalGameListOuter,
                children: [
                  (0, e.jsx)(ga, {
                    strFilter: o,
                    setFilter: l,
                    strView: h,
                    setView: _,
                    selectedContentDescriptors: c,
                    setContentDescriptors: u,
                    showFilter: d,
                    setShowFilter: m,
                  }),
                  (0, e.jsxs)("div", {
                    className: j.Content,
                    children: [
                      (0, e.jsx)(kt, {
                        strTitleToken: "#Parental_GameList_Library",
                        strView: h,
                        nAllowed: w,
                        nTotal: G,
                        setAllowAllApps: !o && ie,
                        steamid: t,
                        settings: n,
                        rgAllApps: f,
                      }),
                      (0, e.jsx)(kt, {
                        strTitleToken: "#Parental_GameList_Store",
                        strView: h,
                        steamid: t,
                        settings: n,
                        rgAllApps: F,
                      }),
                      f.length + F.length == 0 &&
                        (0, e.jsx)("div", {
                          className: j.Empty,
                          children: (0, r.we)("#Parental_GameList_Empty"),
                        }),
                    ],
                  }),
                ],
              }));
        }
        function Pa(i) {
          const { steamid: t, settings: n, rgSortedGames: a } = i,
            s = parseInt(j.nParentalListRowHeight),
            o = p.useCallback(
              (l) => (0, e.jsx)(ha, { steamid: t, settings: n, game: a[l] }, l),
              [t, n, a],
            );
          return (0, e.jsx)(Me, {
            nRows: a?.length,
            nItemHeight: s,
            nRowGap: 0,
            renderItem: o,
          });
        }
        function ja(i) {
          const {
            app: t,
            item: n,
            bIsAllowed: a,
            setAllowed: s,
            className: o,
            children: l,
            ...c
          } = i;
          return (0, e.jsx)(S.Z, {
            className: (0, A.A)(o, j.ParentalApp, a && j.Allowed),
            focusable: !0,
            onActivate: () => s(t, !a),
            ...c,
            children: l,
          });
        }
        function Fa(i) {
          const {
              steamid: t,
              settings: n,
              rgSortedGames: a,
              nColumns: s,
              onWidthChanged: o,
            } = i,
            l = (0, ne.At)(t),
            c = p.useMemo(
              () => a?.map((m) => ({ appid: m.appid, name: m.name })),
              [a],
            ),
            u = p.useCallback(
              (m, h) => {
                (0, ne.qR)(n, h, [m.appid]), l.mutate(n);
              },
              [n, l],
            ),
            d = p.useCallback(
              (m, h, _) => {
                const f =
                  n.applist_custom.find((F) => F.appid == m.appid)
                    ?.is_allowed || !1;
                return (0, e.jsx)(ja, {
                  app: m,
                  item: c[h],
                  bIsAllowed: f,
                  setAllowed: u,
                  ..._,
                });
              },
              [c, n, u],
            );
          return (0, e.jsx)(St, {
            rgApps: c,
            nColumns: s,
            onWidthChanged: o,
            renderItem: d,
          });
        }
        function wa(i) {
          const { steamid: t, settings: n, mapAppsAllowed: a } = i;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(ya, { steamid: t, settings: n }),
              n.applist_base_id != 0 &&
                (0, e.jsx)(Sa, { steamid: t, settings: n, mapAppsAllowed: a }),
            ],
          });
        }
        function Ia(i) {
          const { steamid: t, settings: n, feature: a, label: s } = i,
            o = !!(n.enabled_features & (1 << a)),
            l = (0, ne.At)(t),
            c = p.useCallback(
              (u) => {
                const d = n.enabled_features ^ (1 << a);
                (n.enabled_features = d), l.mutate(n);
              },
              [l, n, a],
            );
          return (0, e.jsx)(P.y4, {
            className: j.ToggleCtn,
            bottomSeparator: "none",
            label: (0, r.we)(s),
            checked: o,
            onChange: c,
          });
        }
        const Je = {
          [q.Gm]: null,
          [q.ip]: {
            featureDescription: "#Parental_Feature_Store",
            requestDescription: "#Parental_FeatureRequest_Store",
            requestDescriptionSelf: "#Parental_FeatureRequest_Store_Self",
          },
          [q.qR]: {
            featureDescription: "#Parental_Feature_Community",
            requestDescription: "#Parental_FeatureRequest_Community",
            requestDescriptionSelf: "#Parental_FeatureRequest_Community_Self",
          },
          [q.WJ]: {
            featureDescription: "#Parental_Feature_Profile",
            requestDescription: "#Parental_FeatureRequest_Profile",
            requestDescriptionSelf: "#Parental_FeatureRequest_Profile_Self",
          },
          [q.M]: {
            featureDescription: "#Parental_Feature_Friends",
            requestDescription: "#Parental_FeatureRequest_Friends",
            requestDescriptionSelf: "#Parental_FeatureRequest_Friends_Self",
          },
          [q.S9]: {
            featureDescription: "#Parental_Feature_News",
            requestDescription: "#Parental_FeatureRequest_News",
            requestDescriptionSelf: "#Parental_FeatureRequest_News_Self",
          },
          [q.ut]: {
            featureDescription: "#Parental_Feature_Trading",
            requestDescription: "#Parental_FeatureRequest_Trading",
            requestDescriptionSelf: "#Parental_FeatureRequest_Trading_Self",
          },
          [q.OK]: {
            featureDescription: "#Parental_Feature_Settings",
            requestDescription: "#Parental_FeatureRequest_Settings",
            requestDescriptionSelf: "#Parental_FeatureRequest_Settings_Self",
          },
          [q.U8]: {
            featureDescription: "#Parental_Feature_Console",
            requestDescription: "#Parental_FeatureRequest_Console",
            requestDescriptionSelf: "#Parental_FeatureRequest_Console_Self",
          },
          [q.rE]: {
            featureDescription: "#Parental_Feature_Browser",
            requestDescription: "#Parental_FeatureRequest_Browser",
            requestDescriptionSelf: "#Parental_FeatureRequest_Browser_Self",
          },
          [q.$R]: null,
          [q.ms]: null,
          [q.FC]: null,
          [q.bV]: null,
          [q.lA]: null,
          [q.dB]: null,
          [q.b]: {
            featureDescription: "#Parental_Feature_Desktop",
            requestDescription: "#Parental_FeatureRequest_Desktop",
            requestDescriptionSelf: "#Parental_FeatureRequest_Desktop_Self",
          },
          [q.Xd]: null,
        };
        function Da(i) {
          const { steamid: t, settings: n } = i,
            a = p.useRef(n.enabled_features),
            s = [q.ip, q.qR, q.WJ, q.M],
            o = [q.$R, q.ms, q.FC, q.bV, q.lA, q.dB],
            l = [];
          for (let c = q.ip; c < q.Xd; c++)
            !o.includes(c) &&
              (s.includes(c) || a.current & (1 << c)) &&
              l.push(c);
          return (0, e.jsxs)("div", {
            className: j.ParentalFeatures,
            children: [
              (0, e.jsx)("hr", {}),
              l.map((c) =>
                Je[c]
                  ? (0, e.jsxs)(
                      p.Fragment,
                      {
                        children: [
                          (0, e.jsx)(Ia, {
                            steamid: t,
                            settings: n,
                            feature: c,
                            label: Je[c].featureDescription,
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
        function Ma(i) {
          const {
              className: t,
              enabled: n,
              locked: a,
              slotIndex: s,
              onToggle: o,
              dragState: l,
              setDragState: c,
              ...u
            } = i,
            [d, m] = (0, p.useState)(!1),
            h = (0, p.useRef)(void 0),
            _ = (w) => {
              l !== null && !a && n !== l && o(s),
                w.target.releasePointerCapture(w.pointerId);
            },
            f = (w) => {
              w.target.releasePointerCapture(w.pointerId);
            },
            F = (w) => {
              c(!n), m(!0), o(s), w.target.releasePointerCapture(w.pointerId);
            },
            C = () => {
              c(null);
            },
            v = () => {
              !a && !d && o(s), c(null), m(!1);
            };
          return (0, e.jsx)(S.Z, {
            ref: h,
            ...u,
            className: (0, A.A)(
              t,
              j.ParentalPlaytimeWindowSelector,
              n && j.Enabled,
              a && j.Locked,
            ),
            onActivate: v,
            onPointerDown: F,
            onPointerEnter: _,
            onPointerLeave: f,
            onPointerUp: C,
          });
        }
        function Wt(i) {
          const {
              className: t,
              nWindows: n,
              nLockedWindows: a,
              onToggle: s,
            } = i,
            o = [],
            l = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              hour: "numeric",
              minute: "numeric",
            }),
            [c, u] = (0, p.useState)(null);
          for (let d = 0; d < 48; d++) {
            const m = n & (BigInt(1) << BigInt(d)),
              h = a && a & (BigInt(1) << BigInt(d));
            o.push(
              (0, e.jsx)(
                Ma,
                {
                  enabled: !!m,
                  locked: !!h,
                  slotIndex: d,
                  onToggle: s,
                  dragState: c,
                  setDragState: u,
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
                { className: (0, A.A)(j.HashMark, "HashMark" + d), style: m },
                "HashMark" + d,
              ),
            );
          }
          for (let d = 0; d <= 48; d = d + 8) {
            const m = Se()()
              .startOf("day")
              .add(Math.floor(d / 2), "hours");
            let h = l.format(m.toDate());
            const _ = d == 0 ? 0 : d - 4,
              f = d == 0 || d == 48 ? 4 : 8,
              F = { gridColumnStart: _ + 1, gridColumnEnd: _ + 1 + f };
            o.push(
              (0, e.jsx)(
                "div",
                {
                  className: (0, A.A)(j.HourMarker, "Hour" + d),
                  style: F,
                  children: h,
                },
                "Hour" + d,
              ),
            );
          }
          return (0, e.jsx)(S.Z, {
            className: (0, A.A)(j.ParentalPlaytimeGrid, t),
            onMouseLeave: () => u(null),
            children: o,
          });
        }
        function ba(i) {
          const {
              steamid: t,
              settings: n,
              dayIndexStart: a,
              closeModal: s,
            } = i,
            [o, l] = p.useState(a),
            c = p.useRef(Object.assign({}, n)),
            u = (0, ne.At)(t),
            d = () => {
              u.mutate(c.current), s();
            };
          return (0, e.jsx)(E.o0, {
            className: j.ParentalPlaytimeWindowsDialog,
            closeModal: s,
            onOK: d,
            strTitle: (0, e.jsx)(P.Y9, {
              className: j.Title,
              children: (0, r.we)("#Parental_PlaytimeWindows_Title"),
            }),
            children: (0, e.jsx)(Na, {
              restrictions: c.current.playtime_restrictions?.playtime_days[o],
              dayIndex: o,
              setDayIndex: l,
            }),
          });
        }
        function Aa(i) {
          const { dayIndex: t, onChange: n } = i,
            a = p.useCallback(
              (o) => {
                n(o.data);
              },
              [n],
            ),
            s = qt();
          return (0, e.jsx)(P.ZU, {
            rgOptions: s,
            selectedOption: t,
            onChange: a,
            strDropDownButtonClassName: j.DaySelector,
            arrowClassName: j.Arrow,
            contextMenuPositionOptions: {
              bMatchWidth: !0,
              bDisablePopTop: !0,
              bFitToWindow: !0,
            },
          });
        }
        function Na(i) {
          const { restrictions: t, dayIndex: n, setDayIndex: a } = i,
            [s, o] = p.useState(BigInt(parseInt(t?.allowed_time_windows) || 0)),
            l = (0, Q.Qn)();
          p.useEffect(() => {
            o(BigInt(parseInt(t?.allowed_time_windows) || 0));
          }, [t]);
          const c = p.useCallback(
              (m) => {
                const h = s ^ (BigInt(1) << BigInt(m));
                (t.allowed_time_windows = h.toString()), o(h);
              },
              [s, t],
            ),
            u = p.useCallback(
              (m) => {
                (t.allowed_time_windows = m.toString()), o(m);
              },
              [t],
            ),
            d = p.useCallback(
              (m) => {
                t.allowed_daily_minutes = m;
              },
              [t],
            );
          return (0, e.jsxs)("div", {
            className: j.ParentalPlaytimeWindowsDialogInner,
            children: [
              (0, e.jsxs)(S.Z, {
                className: j.TopRow,
                children: [
                  (0, e.jsx)(Aa, { dayIndex: n, onChange: a }),
                  (0, e.jsxs)("div", {
                    className: j.Right,
                    children: [
                      (0, e.jsx)("div", {
                        className: j.PlaytimeDescription,
                        children: ut(s),
                      }),
                      (0, e.jsxs)(S.Z, {
                        className: j.PlaytimeButtons,
                        children: [
                          s == BigInt(0) &&
                            (0, e.jsx)(J.Ii, {
                              onClick: () => u(BigInt(0xffffffffffff)),
                              children: (0, r.we)(
                                "#Parental_PlaytimeWindows_AllowAll",
                              ),
                            }),
                          s != BigInt(0) &&
                            (0, e.jsx)(J.Ii, {
                              onClick: () => u(BigInt(0)),
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
                className: j.ParentalPlaytimeWindows,
                children: [
                  (0, e.jsx)(Wt, {
                    className: j.Grid,
                    nWindows: s,
                    onToggle: c,
                  }),
                  !l &&
                    (0, e.jsx)(Ra, {
                      className: j.Input,
                      nWindows: s,
                      onSet: u,
                    }),
                ],
              }),
              (0, e.jsx)(Kt, {
                strLabel: "#Parental_Playtime_Limit",
                nMinutes: t.allowed_daily_minutes || 0,
                onSelected: d,
              }),
            ],
          });
        }
        function Ht(i, t) {
          let n = BigInt(0),
            a = BigInt(1) << BigInt(i);
          for (let s = i; s < t; s++) (n = n | a), (a = a << BigInt(1));
          return n;
        }
        function Ra(i) {
          const { className: t, nWindows: n, onSet: a, ...s } = i,
            [o, l] = p.useState(Se()().startOf("day")),
            [c, u] = p.useState(Se()().startOf("day").add(1, "day")),
            d = o;
          let m = Se()(c);
          const h = (d.hour() ?? 0) * 2 + (d.minute() ?? 0) / 30;
          let _ =
            (m.hour() ?? 0) * 2 +
            (m.minute() ?? 0) / 30 +
            (m.day() - d.day()) * 48;
          const f = p.useCallback(() => {
              let w = Ht(h, _);
              a(n | w);
            }, [a, n, h, _]),
            F = p.useCallback(() => {
              let w = Ht(h, _);
              a(n & ~w);
            }, [a, n, h, _]),
            C = p.useCallback(
              (w) => {
                const G = w;
                l(G), G > m && u(G);
              },
              [m],
            ),
            v = p.useCallback(
              (w) => {
                let G = w;
                G.hours() != 0 || G.minutes() != 0
                  ? (G = G.day(d.day()))
                  : (G = G.day(d.day() + 1)),
                  G >= d ? u(G) : u(Se()(d));
              },
              [d],
            );
          return (0, e.jsxs)("div", {
            className: (0, A.A)(j.ParentalPlaytimeInput, t),
            ...s,
            children: [
              (0, e.jsx)("div", {
                children: (0, r.we)("#Parental_PlaytimeWindows_From"),
              }),
              (0, e.jsx)("div", {
                children: (0, r.we)("#Parental_PlaytimeWindows_To"),
              }),
              (0, e.jsx)("div", {}),
              (0, e.jsx)(Ct(), {
                className: j.Datetime,
                value: d,
                onChange: C,
                dateFormat: !1,
                open: !0,
                input: !1,
                timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
              }),
              (0, e.jsx)(Ct(), {
                className: j.Datetime,
                value: m,
                onChange: v,
                dateFormat: !1,
                open: !0,
                input: !1,
                timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
              }),
              (0, e.jsxs)("div", {
                className: j.ButtonCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: j.ButtonWrapper,
                    children: (0, e.jsx)(P.$n, {
                      className: j.Button,
                      disabled: h >= _,
                      onClick: f,
                      children: "+",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: j.ButtonWrapper,
                    children: (0, e.jsx)(P.$n, {
                      className: j.Button,
                      disabled: h >= _,
                      onClick: F,
                      children: "-",
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Ut(i) {
          let t = (0, r.Yp)("#Parental_Playtime_Hours", i);
          return (
            i == 0
              ? (t = (0, r.we)("#Parental_Playtime_Hours_None"))
              : i == 24 &&
                (t = (0, r.we)("#Parental_Playtime_Hours_NoRestriction")),
            t
          );
        }
        function Ea(i) {
          const t = Math.floor(i / 60);
          return Ut(t);
        }
        function Kt(i) {
          const {
              strLabel: t,
              nMinutes: n,
              onSelected: a,
              nMin: s = 0,
              nMax: o = 25,
            } = i,
            c = (0, Et.xC)() === "mobile" ? "below" : "inline",
            u = p.useCallback(
              (m) => {
                a(m.data * 60);
              },
              [a],
            ),
            d = [];
          for (let m = s; m < o; m++) d.push({ data: m, label: Ut(m) });
          return (0, e.jsx)(P.Vb, {
            layout: c,
            label: (0, r.we)(t),
            bottomSeparator: "none",
            rgOptions: d,
            selectedOption: Math.floor(n / 60),
            onChange: u,
            strDropDownButtonClassName: j.HoursSelector,
            arrowClassName: j.Arrow,
            contextMenuPositionOptions: {
              bMatchWidth: !0,
              bDisablePopTop: !0,
              bFitToWindow: !0,
            },
          });
        }
        function Ta(i) {
          const { steamid: t, settings: n, dayIndex: a, strDay: s } = i,
            [o, l] = p.useState(!1),
            c = BigInt(
              parseInt(
                n.playtime_restrictions?.playtime_days[a]?.allowed_time_windows,
              ) || 0,
            ),
            u =
              n.playtime_restrictions?.playtime_days[a]
                ?.allowed_daily_minutes || 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(S.Z, {
                className: j.ParentalPlaytimeRow,
                onActivate: () => l(!0),
                children: [
                  (0, e.jsx)("div", { className: j.Day, children: s }),
                  (0, e.jsx)("div", { className: j.Windows, children: ut(c) }),
                  (0, e.jsxs)("div", {
                    className: j.Minutes,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [(0, r.we)("#Parental_Playtime_Limit"), ":"],
                      }),
                      (0, e.jsx)("div", { children: Ea(u) }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(E.EN, {
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
        function qt() {
          const i = Se()
              .localeData(r.pf.GetPreferredLocales()[0])
              .firstDayOfWeek(),
            t = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              weekday: "long",
            });
          return Array.from({ length: 7 }, (n, a) => {
            const s = (a + i) % 7;
            return { data: s, label: t.format(Se()().day(s).toDate()) };
          });
        }
        function Oa(i) {
          const { steamid: t, settings: n } = i,
            a = qt().map((s) =>
              (0, e.jsx)(
                Ta,
                { steamid: t, settings: n, dayIndex: s.data, strDay: s.label },
                s.data,
              ),
            );
          return (0, e.jsx)("div", {
            className: j.ParentalPlaytimeInner,
            children: a,
          });
        }
        function Ga(i) {
          const { steamid: t, settings: n } = i,
            a = (0, ne.At)(t),
            s = p.useCallback(
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
            className: j.ParentalPlaytime,
            children: [
              (0, e.jsx)(P.y4, {
                className: j.ToggleCtn,
                bottomSeparator: "none",
                label: (0, r.we)("#Parental_EnablePlaytimeRestrictions"),
                checked: o,
                onChange: s,
              }),
              o && (0, e.jsx)(Oa, { steamid: t, settings: n }),
            ],
          });
        }
        function La(i) {
          const {
              steamid: t,
              eContentDescriptor: n,
              settings: a,
              fnSelectContentDescriptor: s,
            } = i,
            o = (0, ne.At)(t);
          let l = (0, he.H5)(n),
            c = (0, he.V)(n, !0);
          const u = (C) => C.excluded_store_content_descriptors,
            d = (C, v) => {
              C.excluded_store_content_descriptors = v;
            },
            m = (C) => C.excluded_community_content_descriptors,
            h = (C, v) => {
              C.excluded_community_content_descriptors = v;
            },
            _ = (C, v) => (w) => {
              const G = !w;
              let ie = C(a);
              if (G) {
                const te = [n].concat((0, he.Rl)(n));
                for (const re of te)
                  ie.findIndex((ye) => ye === re.valueOf()) !== -1 ||
                    ie.push(re.valueOf());
              } else {
                const te = [n].concat((0, he.fd)(n));
                for (const re of te) {
                  const ge = ie.findIndex((ye) => ye === re.valueOf());
                  ge !== -1 && ie.splice(ge, 1);
                }
              }
              v(a, ie), o.mutate(a);
            },
            f = !a.excluded_store_content_descriptors.includes(n.valueOf()),
            F = !a.excluded_community_content_descriptors.includes(n.valueOf());
          return (0, e.jsxs)(S.Z, {
            className: j.ContentDescriptorRow,
            navEntryPreferPosition: we.iU.MAINTAIN_X,
            children: [
              (0, e.jsxs)(S.Z, {
                className: j.ContentDescriptorInfo,
                children: [
                  (0, e.jsx)("div", {
                    className: j.ContentDescriptorName,
                    children: l,
                  }),
                  (0, e.jsxs)("div", {
                    className: j.ContentDescriptorDescription,
                    children: [
                      c,
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(J.Ii, {
                        className: j.ContentDescriptorViewExamples,
                        onClick: () => s(n),
                        children: (0, r.we)(
                          "#ContentDescriptors_ViewExampleProducts",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(S.Z, {
                className: j.ContentDescriptorToggle,
                children: (0, e.jsx)(P.Yh, { checked: f, onChange: _(u, d) }),
              }),
              (0, e.jsx)(S.Z, {
                className: j.ContentDescriptorToggle,
                children: (0, e.jsx)(P.Yh, { checked: F, onChange: _(m, h) }),
              }),
            ],
          });
        }
        function Ba(i) {
          const { strName: t, strLogoUrl: n } = i;
          return (0, e.jsxs)(S.Z, {
            className: j.ContentDescriptorExampleApp,
            focusable: !0,
            children: [
              (0, e.jsx)("img", { src: n }),
              (0, e.jsx)("div", { children: t }),
            ],
          });
        }
        function ka(i) {
          const { eSelectedContentDescriptor: t, fnSelectDescriptor: n } = i,
            a = (0, he.eH)(t);
          return (0, e.jsx)(E.EN, {
            active: t !== null,
            children: (0, e.jsxs)(E.eV, {
              title: (0, r.we)("#ContentDescriptor_ExampleProductsHeader"),
              closeModal: () => n(null),
              children: [
                !a.data && (0, e.jsx)(L.t, {}),
                a.data?.length === 0 &&
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#ContentDescriptorExample_NoGames"),
                  }),
                a.data?.length > 0 &&
                  a.data.map((s, o) =>
                    (0, e.jsx)(Ba, { strName: s.name, strLogoUrl: s.logo }, o),
                  ),
              ],
            }),
          });
        }
        function Wa(i) {
          const { steamid: t, settings: n } = i,
            [a, s] = (0, p.useState)(null);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ka, {
                eSelectedContentDescriptor: a,
                fnSelectDescriptor: s,
              }),
              (0, e.jsxs)(S.Z, {
                className: j.ContentDescriptorParentalSettings,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#Parental_ContentDescriptors_Intro"),
                  }),
                  (0, e.jsxs)(S.Z, {
                    className: j.ContentDescriptorParentalSettingsInner,
                    children: [
                      (0, e.jsxs)(S.Z, {
                        className: j.ContentDescriptorRow,
                        children: [
                          (0, e.jsx)(S.Z, {
                            className: j.ContentDescriptorInfo,
                          }),
                          (0, e.jsx)(S.Z, {
                            className: j.ContentDescriptorToggle,
                            children: (0, r.we)(
                              "#Parental_ContentDescriptors_Store",
                            ),
                          }),
                          (0, e.jsx)(S.Z, {
                            className: j.ContentDescriptorToggle,
                            children: (0, r.we)(
                              "#Parental_ContentDescriptors_Community",
                            ),
                          }),
                        ],
                      }),
                      he.TW.map((o) =>
                        (0, e.jsx)(
                          La,
                          {
                            steamid: t,
                            eContentDescriptor: o,
                            settings: n,
                            fnSelectContentDescriptor: s,
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
        function Qt(i) {
          return (0, e.jsx)("div", {
            className: j.ErrorLoading,
            children: (0, r.we)("#Parental_Settings_PageError"),
          });
        }
        function Ha(i) {
          let t = (0, W.g)();
          const n = (0, U.LH)(),
            a = t.steamid,
            s = (0, W.W6)(),
            o = () => {
              s.push("/account/familymanagement");
            },
            l = (0, x.vo)(!0),
            c = (0, ne.S0)(a),
            u = (0, X.js)(a),
            d = l.isLoading || c.isLoading || u.isLoading,
            m = l.isError || c.isError || u.isError;
          if (d && !m) return (0, e.jsx)(L.t, { position: "center" });
          if (m || !c.data.settings) return (0, e.jsx)(Qt, {});
          const h = l.data.family_group(),
            _ = (0, x.Ee)(h, n),
            f = (0, x.Ee)(h, t.steamid);
          if (!_ || !f || _.role() != g.PQ.s || f.role() != g.PQ.sf)
            return (0, e.jsx)(Qt, {});
          const { settings: F, mapAppsAllowed: C } = c.data,
            v = u.data;
          return (0, e.jsxs)("div", {
            className: j.FamilyMemberParentalSettings,
            children: [
              (0, e.jsx)(S.Z, {
                className: j.ReturnToFamily,
                onActivate: o,
                children: (0, r.we)("#Parental_Settings_Return"),
              }),
              (0, e.jsxs)("div", {
                className: j.HeaderContainer,
                children: [
                  (0, e.jsx)(Ua, { member: f, persona: v }),
                  (0, e.jsx)(ua, { steamid: a, settings: F, familyGroup: h }),
                ],
              }),
              F.is_enabled &&
                (0, e.jsx)(Ka, { steamID: a, settings: F, mapAppsAllowed: C }),
            ],
          });
        }
        function Ua(i) {
          const { member: t, persona: n } = i;
          return (0, e.jsxs)("div", {
            className: j.ParentalHeader,
            children: [
              (0, e.jsx)("div", {
                className: j.Title,
                children: (0, r.we)("#Parental_Settings_For"),
              }),
              (0, e.jsx)(me.ff, { persona: n, role: t.role() }),
            ],
          });
        }
        function Ka(i) {
          const { steamID: t, settings: n, mapAppsAllowed: a } = i,
            s = (0, p.useMemo)(
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
                  contents: (0, e.jsx)(qa, { steamid: t, settings: n }),
                },
                {
                  name: (0, r.we)("#Parental_Tab_PlaytimeLimits"),
                  key: "playtime",
                  contents: (0, e.jsx)(Ga, { steamid: t, settings: n }),
                },
              ],
              [t, n, a],
            );
          return (0, e.jsx)(ae.V, {
            tabs: s,
            classNameCtn: D.FamilyTabs,
            classNameTab: D.FamilyTab,
          });
        }
        function qa(i) {
          const { steamid: t, settings: n } = i;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Da, { steamid: t, settings: n }),
              (0, e.jsx)(Wa, { steamid: t, settings: n }),
            ],
          });
        }
        var Qa = y(14874),
          za = y(78192),
          Va = ((i) => (
            (i[(i.k_ParentalFeature = 0)] = "k_ParentalFeature"),
            (i[(i.k_ParentalPlaytime = 1)] = "k_ParentalPlaytime"),
            (i[(i.k_PurchaseRequest = 2)] = "k_PurchaseRequest"),
            i
          ))(Va || {});
        function Za(i) {
          const t = (0, U.LH)(),
            a = p.useRef(Math.floor(Date.now() / 1e3)).current - 3600 * 24 * 30,
            s = (0, ne.ve)(i, a),
            o = (0, x.BO)(i, a);
          if (!s.isSuccess || !o.isSuccess) return [];
          let l = s.data
            .feature_requests()
            .map((c) => ({
              type: 0,
              key: "parentalfeature_" + c.requestid(),
              data: c,
              requestTimestamp: c.time_requested(),
            }));
          return (
            (l = l.concat(
              s.data
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
            l.sort((c, u) => u.requestTimestamp - c.requestTimestamp),
            l
          );
        }
        function Ja(i) {
          const { item: t, closeModal: n } = i,
            a = (0, ne.EB)(t),
            [s, o] = p.useState(3600),
            c = (0, Et.xC)() === "mobile" ? "below" : "inline",
            u = p.useCallback(() => {
              a.mutateAsync({ bApprove: !0, durationSec: s });
            }, [a, s]),
            d = p.useCallback((h, _) => {
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
          return (0, e.jsxs)(E.o0, {
            className: R().ApproveRequestDialog,
            closeModal: n,
            onOK: u,
            strTitle: (0, e.jsx)(P.Y9, {
              className: R().Title,
              children: (0, r.we)("#FeatureRequest_AcceptDialog_Title"),
            }),
            children: [
              (0, e.jsx)(P.a3, {
                children: (0, r.we)("#FeatureRequest_AcceptDialog_BodyText"),
              }),
              (0, e.jsx)(P.Vb, {
                layout: c,
                bottomSeparator: "none",
                label: (0, r.we)("#FeatureRequest_AcceptDialog_AllowAccess"),
                rgOptions: m,
                selectedOption: s,
                onChange: d,
              }),
            ],
          });
        }
        function Ya(i) {
          const {
              currentMinutes: t,
              currentWindows: n,
              additionalMinutes: a,
              setAdditionalMinutes: s,
              nWindows: o,
              setWindows: l,
            } = i,
            c = n == BigInt(0xffffffffffff),
            u = t == 1440,
            d = p.useCallback(
              (_) => {
                const f = o ^ (BigInt(1) << BigInt(_));
                l(f);
              },
              [o, l],
            ),
            m = p.useCallback(
              (_) => {
                s(_);
              },
              [s],
            );
          let h = "#PlaytimeRequest_AcceptDialog_BodyText";
          return (
            c &&
              (h = "#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedWindows"),
            u && (h = "#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedHours"),
            (0, e.jsxs)("div", {
              className: R().ApprovePlaytimeDialog,
              children: [
                (0, e.jsx)(P.a3, { children: (0, r.we)(h) }),
                !c &&
                  (0, e.jsxs)("div", {
                    className: R().ParentalPlaytimeWindows,
                    children: [
                      (0, e.jsx)("div", {
                        className: R().Text,
                        children: ut(o),
                      }),
                      (0, e.jsx)(Wt, {
                        nWindows: o,
                        nLockedWindows: n,
                        onToggle: d,
                      }),
                    ],
                  }),
                !u &&
                  (0, e.jsxs)("div", {
                    className: R().CurrentHours,
                    children: [
                      (0, r.Yp)(
                        "#PlaytimeRequest_AcceptDialog_CurrentHours",
                        Math.floor(t / 60),
                      ),
                      " ",
                    ],
                  }),
                u &&
                  (0, e.jsx)("div", {
                    className: R().CurrentHours,
                    children: (0, r.we)(
                      "#PlaytimeRequest_AcceptDialog_UnlimitedHours",
                    ),
                  }),
                !u &&
                  (0, e.jsx)(Kt, {
                    strLabel: "#PlaytimeRequest_AcceptDialog_AdditionalTime",
                    nMinutes: a,
                    onSelected: m,
                    nMax: 25 - t / 60,
                  }),
              ],
            })
          );
        }
        function Xa(i) {
          const { item: t, closeModal: n } = i,
            a = (0, ne.To)(t),
            [s, o] = p.useState(!1),
            l = t.current_playtime_restrictions().allowed_daily_minutes(),
            c = BigInt(
              parseInt(
                t.current_playtime_restrictions().allowed_time_windows(),
              ),
            ),
            [u, d] = p.useState(60),
            [m, h] = p.useState(c);
          p.useEffect(() => {
            o(u == 0 && c == m);
          }, [u, c, m]);
          const _ = p.useCallback(() => {
            const f = new En.$A();
            f.restrictions(!0).set_allowed_daily_minutes(l + u),
              f.restrictions(!0).set_allowed_time_windows(m.toString()),
              f.set_rtime_expires(t.time_expires()),
              a.mutateAsync({ bApprove: !0, restrictions: f });
          }, [a, l, u, m, t]);
          return (0, e.jsx)(E.o0, {
            className: R().ApproveRequestDialog,
            closeModal: n,
            onOK: _,
            bOKDisabled: s,
            strTitle: (0, e.jsx)(P.Y9, {
              className: R().Title,
              children: (0, r.we)("#FeatureRequest_AcceptDialog_Title"),
            }),
            children: (0, e.jsx)(Ya, {
              currentMinutes: l,
              currentWindows: c,
              additionalMinutes: u,
              setAdditionalMinutes: d,
              nWindows: m,
              setWindows: h,
            }),
          });
        }
        function zt(i) {
          let { steamIDResponder: t, resultMessage: n, timeResponded: a } = i;
          const s = (0, X.js)(t.ConvertTo64BitString()),
            o = s?.data,
            l = (0, vt.KM)(t.GetAccountID()),
            c = (0, ce.T)();
          return (
            o || (n = (0, r.we)("#ParentalRequest_Canceled")),
            (0, e.jsxs)("div", {
              className: R().RequestResponse,
              children: [
                (0, e.jsx)("div", { className: R().Result, children: n }),
                !!o &&
                  (0, e.jsxs)("div", {
                    className: R().AvatarAndPersona,
                    children: [
                      (0, e.jsx)(le.i8, {
                        className: R().Avatar,
                        persona: o,
                        size: "Medium",
                        statusPosition: "right",
                      }),
                      (0, e.jsx)(de.A, {
                        persona: s.data,
                        bParenthesizeNicknames: c.data
                          ?.preferences()
                          .parenthesize_nicknames(),
                        strNickname: l,
                      }),
                    ],
                  }),
                (0, e.jsx)("div", {
                  className: R().TimeResponded,
                  children: (0, r.Nm)(a),
                }),
              ],
            })
          );
        }
        function Vt(i) {
          const { steamID: t, locToken: n, locTokenPlurality: a } = i,
            s = (0, X.js)(t.ConvertTo64BitString()),
            o = s?.data,
            l = (0, vt.KM)(t.GetAccountID()),
            c = (0, ce.T)();
          return s.isSuccess
            ? (0, e.jsxs)("div", {
                className: R().AvatarAndPersona,
                children: [
                  (0, e.jsx)(le.i8, {
                    className: R().Avatar,
                    persona: o,
                    size: "Medium",
                    statusPosition: "right",
                  }),
                  (0, r.TG)(
                    n,
                    a,
                    (0, e.jsx)(de.A, {
                      persona: s.data,
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
        function Zt(i) {
          const {
              item: t,
              nFeatures: n,
              onReject: a,
              renderApproveDialog: s,
            } = i,
            o = (0, U.LH)(),
            l = t.steamid() == o,
            c = !n,
            [u, d] = p.useState(!1),
            m = p.useCallback(() => {
              d(!0);
            }, []);
          let h = [],
            _ = n;
          for (let f = 0; f < 32; f++)
            if (_ & (1 << f)) {
              const F = f,
                C = l
                  ? Je[F]?.requestDescriptionSelf
                  : Je[F]?.requestDescription;
              C && h.push((0, r.we)(C));
            }
          return h.length == 0 && !c
            ? null
            : (0, e.jsxs)("div", {
                className: (0, A.A)(
                  R().FamilyRequestItem,
                  R().ParentalFeatureRequestItem,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: R().RequestInfo,
                    children: [
                      l &&
                        (0, e.jsx)("div", {
                          className: R().SelfRequested,
                          children: (0, r.we)(
                            c
                              ? "#PlaytimeRequest_UserRequested_Self"
                              : "#FeatureRequest_UserRequested_Self",
                          ),
                        }),
                      !l &&
                        (0, e.jsx)(Vt, {
                          steamID: new ee.b(t.steamid()),
                          locToken: c
                            ? "#PlaytimeRequest_UserRequested"
                            : "#FeatureRequest_UserRequested",
                          locTokenPlurality: 1,
                        }),
                      (0, e.jsxs)("ul", {
                        className: R().FeatureList,
                        children: [
                          h.map((f) =>
                            (0, e.jsx)(
                              "li",
                              { className: R().Feature, children: f },
                              f,
                            ),
                          ),
                          (0, e.jsx)("div", {
                            className: R().TimeResponded,
                            children: (0, r.Nm)(t.time_requested()),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: R().StatusCtn,
                    children: [
                      !l &&
                        !t.time_responded() &&
                        (0, e.jsxs)(S.Z, {
                          className: R().Buttons,
                          children: [
                            (0, e.jsx)(P.jn, {
                              noFocusRing: !1,
                              onClick: m,
                              children: (0, r.we)("#ParentalRequest_Accept"),
                            }),
                            (0, e.jsx)(P.$n, {
                              noFocusRing: !1,
                              onClick: a,
                              children: (0, r.we)("#ParentalRequest_Reject"),
                            }),
                          ],
                        }),
                      l &&
                        !t.time_responded() &&
                        (0, e.jsx)("div", {
                          className: (0, A.A)(R().Buttons, R().Pending),
                          children: (0, r.we)("#ParentalRequest_Pending"),
                        }),
                      !!t.time_responded() &&
                        (0, e.jsx)(zt, {
                          steamIDResponder: new ee.b(t.steamid_responder()),
                          resultMessage: (0, r.we)(
                            t.approved()
                              ? "#ParentalRequest_AcceptedBy"
                              : "#ParentalRequest_RejectedBy",
                          ),
                          timeResponded: t.time_responded(),
                        }),
                      !t.time_responded() &&
                        (0, e.jsx)(E.EN, {
                          active: u,
                          children: s(() => d(!1)),
                        }),
                    ],
                  }),
                ],
              });
        }
        function $a(i) {
          const { item: t } = i,
            n = (0, ne.EB)(t),
            a = p.useCallback(() => {
              n.mutateAsync({ bApprove: !1, durationSec: 0 });
            }, [n]),
            s = p.useCallback(
              (l) => (0, e.jsx)(Ja, { item: t, closeModal: l }),
              [t],
            ),
            o = t.features();
          return (0, e.jsx)(Zt, {
            item: t,
            nFeatures: o,
            onReject: a,
            renderApproveDialog: s,
          });
        }
        function es(i) {
          const { item: t } = i,
            n = (0, ne.To)(t),
            a = p.useCallback(() => {
              n.mutateAsync({ bApprove: !1, restrictions: null });
            }, [n]),
            s = p.useCallback(
              (o) => (0, e.jsx)(Xa, { item: t, closeModal: o }),
              [t],
            );
          return (0, e.jsx)(Zt, {
            item: t,
            onReject: a,
            renderApproveDialog: s,
          });
        }
        function ts(i) {
          const { packageIDs: t, bundleIDs: n } = i;
          return !t.length && !n.length
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: R().Purchased,
                    children: (0, r.Yp)(
                      "#PurchaseRequest_Purchased",
                      t.length + n.length,
                    ),
                  }),
                  (0, e.jsx)(Jt, { packageIDs: t, bundleIDs: n }),
                ],
              });
        }
        function Jt(i) {
          const { packageIDs: t, bundleIDs: n } = i,
            [a, s] = (0, p.useState)(!1),
            o = 5;
          if (!t.length && !n.length) return null;
          const l = t.length + n.length;
          let c = null;
          if (a || l <= o) c = Yt(t, n, l);
          else {
            (c = Yt(t, n, o)),
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
            const u = t.length + n.length - o;
            c.push(
              (0, e.jsx)(
                S.Z,
                {
                  onActivate: () => s(!0),
                  className: (0, A.A)(R().PackageShowMore, R().Selectable),
                  focusable: !0,
                  children: (0, r.we)(
                    "#PurchaseRequest_PackageLinksShowMore",
                    u,
                  ),
                },
                "showMore",
              ),
            );
          }
          return (0, e.jsx)("div", {
            className: R().PackageLinks,
            children: c,
          });
        }
        function Yt(i, t, n) {
          let a = [],
            s = 0;
          for (let o = 0; o < i.length && s < n; o++, s++) {
            const l = i[o];
            a.push((0, e.jsx)(ns, { packageID: l }, l)),
              s < n - 1 &&
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
          for (let o = 0; o < t.length && s < n; o++, s++) {
            const l = t[o];
            a.push((0, e.jsx)(as, { bundleID: l }, l)),
              s < n - 1 &&
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
        function ns(i) {
          const { packageID: t } = i,
            [n] = (0, je.Gg)(t, {});
          return (0, e.jsx)(Xt, { storeItem: n });
        }
        function as(i) {
          const { bundleID: t } = i,
            [n] = (0, je.Ow)(t, {});
          return (0, e.jsx)(Xt, { storeItem: n });
        }
        function Xt(i) {
          const { storeItem: t } = i,
            n = { direction: "right", style: { minWidth: "320px" } },
            a = (0, Qa.DJ)(t),
            s = p.useCallback(
              (l) => {
                ct((0, Te.uX)(l), t.GetStorePageURL());
              },
              [t],
            );
          if (!t) return null;
          const o = t.GetStoreItemType() === za.c6.RD ? "sub" : "bundle";
          return (0, e.jsx)(jt.Q, {
            id: a,
            name: t.GetName(),
            bPreventNavigation: !0,
            bHidePrice: !1,
            bShowWishlistButton: !1,
            hoverProps: n,
            className: R().HoverSource,
            children: (0, e.jsx)(S.Z, {
              className: (0, A.A)(R().PackageLinkItem, R().Selectable),
              focusable: !0,
              onActivate: s,
              children: (0, e.jsx)("div", {
                className: R().PackageLinkItemText,
                children: t.GetName(),
              }),
            }),
          });
        }
        function ss(i) {
          const { item: t, familyGroupID: n } = i,
            a = (0, U.LH)(),
            s = t.requester_steamid() === a,
            o = (0, x.Ke)(n, t.request_id(), s ? g.IG.jG : g.IG.DP),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            s
              ? "#FamilyManagement_ErrorCancelPurchaseRequest"
              : "#FamilyManagement_ErrorDeclinePurchaseRequest",
            x.eS.k_EFamilyQueryDeclinePurchaseRequest,
          );
          const c = (0, x.w1)(n, t.request_id()),
            u = () => {
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
              className: (0, A.A)(
                R().FamilyRequestItem,
                R().PurchaseRequestItem,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: R().RequestInfo,
                  children: [
                    s &&
                      (0, e.jsx)("div", {
                        className: R().SelfRequested,
                        children: (0, r.Yp)(
                          "#PurchaseRequest_UserRequested_Self",
                          t.requested_packageids()?.length,
                        ),
                      }),
                    !s &&
                      (0, e.jsx)(Vt, {
                        steamID: new ee.b(t.requester_steamid()),
                        locToken: "#PurchaseRequest_UserRequested",
                        locTokenPlurality: t.requested_packageids()?.length,
                      }),
                    (0, e.jsx)(Jt, {
                      packageIDs: t.requested_packageids(),
                      bundleIDs: t.requested_bundleids(),
                    }),
                    !m &&
                      (0, e.jsx)(ts, {
                        packageIDs: t.purchased_packageids(),
                        bundleIDs: t.purchased_bundleids(),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: R().StatusCtn,
                  children: [
                    !t.time_responded() &&
                      (0, e.jsxs)(S.Z, {
                        className: R().Buttons,
                        children: [
                          !s &&
                            !t.time_responded() &&
                            (0, e.jsx)("a", {
                              href: c,
                              children: (0, e.jsx)(P.jn, {
                                noFocusRing: !1,
                                children: (0, r.we)("#PurchaseRequest_Approve"),
                              }),
                            }),
                          (0, e.jsx)(P.$n, {
                            noFocusRing: !1,
                            onClick: u,
                            children: (0, r.we)(
                              s
                                ? "#PurchaseRequest_Cancel"
                                : "#PurchaseRequest_Decline",
                            ),
                          }),
                        ],
                      }),
                    t.time_responded() &&
                      (0, e.jsx)(zt, {
                        steamIDResponder: new ee.b(t.responder_steamid()),
                        resultMessage: d,
                        timeResponded: t.time_responded(),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function is(i) {
          const { item: t, familyGroupID: n } = i;
          let a;
          switch (t.type) {
            case 0:
              a = (0, e.jsx)($a, { item: t.data });
              break;
            case 1:
              a = (0, e.jsx)(es, { item: t.data });
              break;
            case 2:
              a = (0, e.jsx)(ss, { item: t.data, familyGroupID: n });
              break;
            default:
              a = null;
              break;
          }
          return a;
        }
        function rs(i) {
          const { rgRequests: t, familyGroupID: n } = i,
            a = t.length > 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !a &&
                (0, e.jsx)("div", {
                  className: R().NoFamilyRequests,
                  children: (0, r.we)("#FamilyManagement_NoCurrentRequests"),
                }),
              a &&
                (0, e.jsx)("div", {
                  className: R().FamilyRequests,
                  children: t.map((s) =>
                    (0, e.jsx)(is, { item: s, familyGroupID: n }, s.key),
                  ),
                }),
            ],
          });
        }
        var $t = y(36175),
          se = y(49118),
          os = y(91354),
          ls = y(98609);
        const cs =
            y.p +
            "images/applications/store/defaultappimage.png?v=valveisgoodatcaching",
          Ne = 1,
          pt = 24 / Ne,
          ms = 14;
        function ds(i) {
          const { steamid: t } = i,
            n = (0, x.lF)(t);
          if (((0, je.YM)(), n.isLoading))
            return (0, e.jsx)("div", {
              className: se.ThrobberContainer,
              children: (0, e.jsx)(L.t, {}),
            });
          const a = (l) => {
            const c = l.getTime() / 1e3;
            let u = new Date(l);
            u.setDate(u.getDate() + 1);
            const d = u.getTime() / 1e3;
            return n.isSuccess
              ? n.data.filter((m) => m.time_start <= d && m.time_end >= c)
              : [];
          };
          let s = new Date();
          s.setHours(0, 0, 0, 0);
          let o = [...Array(ms).keys()].map((l) => {
            let c = new Date(s);
            return c.setDate(c.getDate() - l), c;
          });
          return (0, e.jsx)(
            "div",
            {
              className: se.PlaytimeHistoryBrowser,
              children: o.map((l, c) =>
                (0, e.jsx)(us, { date: l, vecSessions: a(l) }, c),
              ),
            },
            t,
          );
        }
        function us(i) {
          const { date: t, vecSessions: n } = i;
          let a = new Date(t);
          a.setDate(a.getDate() + 1);
          const s = t.getTime() / 1e3,
            o = a.getTime() / 1e3,
            l = (0, Pe._l)(s, !0, !0, !1, !0),
            [c, u] = (0, p.useState)(!1);
          let d = 0;
          for (const C of n)
            d += Math.min(C.time_end, o) - Math.max(C.time_start, s);
          const m =
              d === 0 ? (0, r.we)("#FamilyPlaytime_NoPlaytime") : (0, Pe.IH)(d),
            h = (C) => {
              const v = s + Ne * 3600 * C,
                w = s + Ne * 3600 * (C + 1);
              return n.filter((G) => G.time_start <= w && G.time_end >= v);
            };
          let _ = new Map();
          for (const C of n) {
            _.has(C.appid) || _.set(C.appid, 0);
            const v = Math.min(C.time_end, o) - Math.max(C.time_start, s);
            _.set(C.appid, _.get(C.appid) + v);
          }
          const f = Array.from(_.entries());
          f.sort((C, v) => v[1] - C[1]);
          const F = n.length == 0;
          return (0, e.jsxs)(S.Z, {
            className: (0, A.A)(se.PlaytimeHistoryDay, F && se.Empty),
            children: [
              (0, e.jsxs)(S.Z, {
                className: se.PlaytimeOnDay,
                onClick: F ? void 0 : () => u(!c),
                children: [
                  (0, e.jsxs)(S.Z, {
                    className: se.DateColumn,
                    onActivate: F ? void 0 : () => u(!c),
                    children: [
                      l,
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("span", {
                        className: se.TotalTimePlayed,
                        children: m,
                      }),
                    ],
                  }),
                  d > 0 &&
                    [...Array(pt).keys()].map((C) =>
                      (0, e.jsx)(
                        ys,
                        { nDate: s, nBin: C, vecSessions: h(C) },
                        C,
                      ),
                    ),
                  !F && (0, e.jsx)(os.c, { bExpanded: c, setExpanded: u }),
                ],
              }),
              c &&
                !F &&
                (0, e.jsx)(S.Z, {
                  className: se.PlaytimeSessionRows,
                  children: f.map((C, v) =>
                    (0, e.jsx)(hs, { appid: C[0], nSecondsPlayed: C[1] }, v),
                  ),
                }),
            ],
          });
        }
        function en(i) {
          const { appid: t } = i,
            [n, a] = p.useState(0),
            [s, o] = p.useState(!1),
            [l] = (0, je.t7)(t, Ze.A.k_DataRequest_Assets);
          if (!l) return null;
          const c = ls.TS.STORE_ICON_BASE_URL;
          let u = [`${c}${t}/library_600x900.jpg`, `${c}${t}/portrait.png`, cs];
          l.GetAssets()?.GetLibraryCapsuleURL() &&
            (u = [l.GetAssets()?.GetLibraryCapsuleURL(), ...u]);
          const d = () => {
              o(!0);
            },
            m = () => {
              n < u.length && a((_) => _ + 1);
            },
            h = u[n];
          return (0, e.jsx)("img", {
            className: (0, A.A)(se.AppImage, s && se.Loaded),
            onLoad: d,
            onError: m,
            src: h,
          });
        }
        function ps(i) {
          const { appid: t } = i,
            [n] = (0, je.t7)(t, Ze.A.k_DataRequest_Assets);
          return n
            ? (0, e.jsx)(J.Ii, {
                href: n.GetStorePageURL(),
                children: (0, e.jsx)(en, { appid: t }),
              })
            : null;
        }
        function ys(i) {
          const { nDate: t, nBin: n, vecSessions: a } = i,
            s = t + Ne * 3600 * n,
            o = t + Ne * 3600 * (n + 1),
            [l, c] = (0, p.useState)(!1);
          let u = 0,
            d = new Set();
          for (const w of a)
            (u += Math.min(w.time_end, o) - Math.max(w.time_start, s)),
              d.add(w.appid);
          const m = se.strBarForegroundColor,
            h = se.strBarBackgroundColor,
            _ = Math.round((100 * u) / (Ne * 3600)),
            f = `linear-gradient(0deg, ${m} 0%, ${m} ${_}%, ${h} ${_}%, ${h} 100%)`,
            F = (w) => {
              if (w === 0 || w === pt) return "";
              const G = Math.round(pt / 6);
              return w % G === G / 2
                ? new Date(s * 1e3).toLocaleTimeString(
                    r.pf.GetPreferredLocales(),
                    { hour: "numeric" },
                  )
                : "";
            };
          let C =
              d.size === 0
                ? null
                : (0, e.jsx)(S.Z, {
                    className: se.AppListTooltipApps,
                    children: Array.from(d).map((w) =>
                      (0, e.jsx)(ps, { appid: w }, w),
                    ),
                  }),
            v = (0, e.jsxs)("div", {
              className: se.AppListTooltip,
              children: [
                (0, e.jsxs)("div", {
                  className: se.TimeRangeTooltip,
                  children: [(0, Pe.KC)(s), " - ", (0, Pe.KC)(o)],
                }),
                C,
              ],
            });
          return (0, e.jsxs)(S.Z, {
            focusable: d.size > 0,
            onOKButton: () => c(!0),
            children: [
              (0, e.jsxs)(E.mt, {
                active: l,
                onDismiss: () => c(!1),
                children: [
                  (0, e.jsx)("div", {
                    className: se.TimeRangeTooltip,
                    children: (0, r.we)(
                      "#FamilyPlaytime_GamesPlayedBetween",
                      (0, Pe.KC)(s),
                      (0, Pe.KC)(o),
                    ),
                  }),
                  C,
                ],
              }),
              (0, e.jsx)(Ve.m9, {
                toolTipContent: v,
                nDelayShowMS: 0,
                children: (0, e.jsx)("div", {
                  className: (0, A.A)(se.PlaytimeHistoryBin),
                  style: { background: f },
                  children: (0, e.jsx)("span", {
                    className: se.TimeLabel,
                    children: F(n),
                  }),
                }),
              }),
            ],
          });
        }
        function hs(i) {
          const { appid: t, nSecondsPlayed: n } = i,
            [a] = (0, je.t7)(t, Ze.A.k_DataRequest_Assets);
          return a
            ? (0, e.jsx)(J.Ii, {
                href: a.GetStorePageURL(),
                children: (0, e.jsxs)(S.Z, {
                  className: se.SessionRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: se.GameIcon,
                      children: (0, e.jsx)(en, { appid: t }),
                    }),
                    (0, e.jsx)("div", {
                      className: se.SessionRowTimeRange,
                      children: (0, Pe.IH)(n),
                    }),
                    (0, e.jsx)("div", {
                      className: se.SessionRowGameName,
                      children: a.GetName(),
                    }),
                  ],
                }),
              })
            : null;
        }
        function fs(i) {
          const { familyGroupID: t } = i,
            n = (0, x.Hs)(t),
            a = n.data
              ?.members()
              .filter((m) => m.role() === g.PQ.sf)
              .map((m) => m.steamid()),
            s = (0, X.DW)(a),
            o = (0, $.M8)(),
            l = (0, ce.T)(),
            [c, u] = (0, p.useState)(a ? a[0] : null);
          if (n.isLoading || s.some((m) => m.isLoading) || o.isLoading)
            return (0, e.jsx)("div", {
              className: $t.ThrobberContainer,
              children: (0, e.jsx)(L.t, {}),
            });
          if (a.length === 0)
            return (0, e.jsx)("p", {
              children: (0, r.we)("#FamilyPlaytime_NoChildren"),
            });
          const d = s.map((m) => ({
            label: (0, e.jsx)(de.A, {
              persona: m.data,
              bIgnorePersonaStatus: !0,
              bParenthesizeNicknames: l.data
                ?.preferences()
                .parenthesize_nicknames(),
              strNickname: o.data.get(m.data.m_steamid.GetAccountID()),
            }),
            data: m.data.m_steamid.ConvertTo64BitString(),
          }));
          return (0, e.jsxs)(S.Z, {
            className: $t.FamilyPlaytime,
            children: [
              (0, e.jsx)(P.Vb, {
                rgOptions: d,
                selectedOption: c,
                onChange: (m) => u(m.data),
                label: (0, r.we)("#FamilyPlaytime_ShowPlaytimeFor"),
                layout: "inline",
                childrenContainerWidth: "max",
              }),
              (0, e.jsx)(ds, { steamid: c }),
            ],
          });
        }
        const gs = function () {
          const [t, n] = (0, p.useState)(null),
            a = (0, W.W5)(),
            s = (0, x.vo)();
          if (s.isError) return null;
          const o = !s.data?.is_not_member_of_any_group(),
            l = Q.TS.HELP_BASE_URL + "faqs/view/054C-3167-DD7F-49D4";
          return (0, e.jsx)(x.Tv, {
            staleTimeMs: 3e3,
            children: (0, e.jsxs)(x.IN.Provider, {
              value: { errorMessage: t, setErrorMessage: n },
              children: [
                (0, e.jsx)(me.pC, {}),
                (0, e.jsxs)(Ps, {
                  children: [
                    (0, e.jsx)(z.Hxx, {}),
                    (0, e.jsx)("span", {
                      className: D.FamilyManagementTitle,
                      children: (0, r.we)("#FamilyManagement_Title"),
                    }),
                    (0, e.jsx)(J.Ii, {
                      className: D.HelpLink,
                      href: l,
                      children: (0, e.jsx)(z._VW, {}),
                    }),
                  ],
                }),
                s.isLoading &&
                  (0, e.jsx)("div", {
                    className: D.ThrobberContainer,
                    children: (0, e.jsx)(L.t, {}),
                  }),
                !s.isLoading &&
                  (0, e.jsx)("div", {
                    className: D.FamilySettingsContainer,
                    children: (0, e.jsx)(S.Z, {
                      className: D.FamilyContainer,
                      children: (0, e.jsxs)(W.dO, {
                        children: [
                          (0, e.jsx)(W.qh, {
                            path: `${a.path}/create`,
                            component: vs,
                          }),
                          (0, e.jsx)(W.qh, {
                            path: `${a.path}/join`,
                            component: Cs,
                          }),
                          (0, e.jsx)(W.qh, {
                            path: `${a.path}/confirm_invite`,
                            component: K,
                          }),
                          (0, e.jsx)(W.qh, {
                            path: `${a.path}/parentalcontrols/:steamid`,
                            component: Ha,
                          }),
                          (0, e.jsx)(W.qh, {
                            children: o
                              ? (0, e.jsx)(sn, {
                                  familyGroupID: s.data.family_groupid(),
                                })
                              : (0, e.jsx)(xs, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
          });
        };
        function tn(i) {
          const t = [
            {
              name: (0, r.we)("#FamilyManagement_SetupTab"),
              key: "setup",
              contents: i.children,
            },
          ];
          return (0, e.jsx)(ae.V, { tabs: t, classNameCtn: D.FamilyTabs });
        }
        function yt(i) {
          const t = [
            {
              name: (0, r.we)("#FamilyManagement_JoinAFamily"),
              key: "setup",
              contents: i.children,
            },
          ];
          return (0, e.jsx)(ae.V, { tabs: t, classNameCtn: D.FamilyTabs });
        }
        function _s(i) {
          const { familyGroupID: t } = i,
            { mutate: n } = (0, x.vu)(t);
          return (0, e.jsx)(P.jn, {
            className: D.UndeleteSplashButton,
            onClick: () => n(),
            children: (0, r.we)("#FamilyManagement_UndeleteButton"),
          });
        }
        function xs(i) {
          const t = (0, W.W6)(),
            n = (0, x.vo)(),
            { setErrorMessage: a } = (0, x.RC)();
          if (n.isLoading) return (0, e.jsx)(L.t, {});
          const s = n.data?.pending_group_invites().length,
            o = () => {
              a(""), t.push("/account/familymanagement/create");
            },
            l = () => {
              a(""), t.push("/account/familymanagement/join");
            };
          let c;
          s === 0
            ? (c = null)
            : s === 1
              ? (c = (0, r.we)(
                  "#FamilyManagement_SelectJoinButtonPendingInvite",
                ))
              : (c = (0, r.we)(
                  "#FamilyManagement_SelectJoinButtonPendingInvites",
                  s,
                ));
          const u = n.data.cooldown_seconds_remaining() > 0,
            d = n.data.can_undelete_last_joined_family();
          return (0, e.jsx)(tn, {
            children: (0, e.jsxs)("div", {
              className: D.OnboardSplashContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: D.WallOfText,
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
                (u || d) &&
                  (0, e.jsxs)("div", {
                    className: D.SplashCooldown,
                    children: [
                      (0, e.jsx)(z.eTF, { color: D.colorCautionSign }),
                      (0, e.jsxs)("div", {
                        children: [
                          !d && (0, r.we)("#FamilyManagement_CanRejoin"),
                          d && (0, r.we)("#FamilyManagement_CanUndelete"),
                        ],
                      }),
                      d &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsx)(_s, {
                            familyGroupID:
                              n.data.latest_joined_family_groupid(),
                          }),
                        }),
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: D.OnboardSplashButtons,
                  children: [
                    (0, e.jsxs)(P.jn, {
                      className: D.OnboardSplashButton,
                      onClick: l,
                      children: [
                        (0, e.jsx)("div", {
                          className: D.OnboardSplashButtonLabel,
                          children: (0, r.we)(
                            "#FamilyManagement_SelectJoinButton",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: D.OnboardSplashButtonGraphic,
                          children: (0, e.jsx)(z.dsc, {}),
                        }),
                        s > 0 &&
                          (0, e.jsx)("div", {
                            className: D.OnboardSplashButtonBadge,
                            children: c,
                          }),
                      ],
                    }),
                    (0, e.jsxs)(P.jn, {
                      className: D.OnboardSplashButton,
                      onClick: o,
                      children: [
                        (0, e.jsx)("div", {
                          className: D.OnboardSplashButtonLabel,
                          children: (0, r.we)(
                            "#FamilyManagement_SelectCreateButton",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: D.OnboardSplashButtonGraphic,
                          children: (0, e.jsx)(z.LDq, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function nn(i) {
          const {
            active: t,
            isCreate: n,
            closeModal: a,
            cooldownSeconds: s,
          } = i;
          return (0, e.jsx)(E.EN, {
            active: t,
            children: (0, e.jsxs)(E.o0, {
              bAlertDialog: !0,
              onOK: a,
              closeModal: a,
              strTitle: (0, r.we)(
                n
                  ? "#FamilyManagement_FamilyCreated"
                  : "#FamilyManagement_FamilyJoined",
              ),
              children: [
                (0, e.jsx)(pe, { cooldownSecondsRemaining: s }),
                (0, e.jsx)("div", {
                  className: D.DialogText,
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
        function vs(i) {
          const [t, n] = (0, p.useState)(""),
            a = (0, x.TI)(),
            s = (0, W.W6)(),
            o = (0, x.vo)(),
            [l, c, u] = (0, Re.uD)(!1),
            { setErrorMessage: d } = (0, x.RC)();
          if (
            ((0, x.gv)(
              a,
              "#FamilyManagement_ErrorCreateFamily",
              x.eS.k_EFamilyQueryCreateFamily,
            ),
            o.data && !o.data?.is_not_member_of_any_group() && !l)
          )
            return (0, e.jsx)(W.rd, { to: "/account/familymanagement" });
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
                className: D.ThrobberContainer,
                children: (0, e.jsx)(L.t, {}),
              })
            : (0, e.jsxs)(tn, {
                children: [
                  (0, e.jsx)(nn, {
                    active: l,
                    isCreate: !0,
                    closeModal: u,
                    cooldownSeconds: o.data.cooldown_seconds_remaining(),
                  }),
                  (0, e.jsxs)("div", {
                    className: D.CreateFamilyContainer,
                    children: [
                      (0, e.jsx)(ht, {
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
                        className: D.CreateFamilyForm,
                        children: [
                          (0, e.jsx)(J.BA, {
                            type: "text",
                            onChange: (h) => {
                              n(h.target.value), d(null);
                            },
                            value: t,
                            placeholder: (0, r.we)(
                              "#FamilyManagement_InputNamePlaceholder",
                            ),
                          }),
                          (0, e.jsx)(P.jn, {
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
        function Cs(i) {
          const t = (0, x.vo)(),
            n = t.data?.pending_group_invites().length,
            [a, s] = (0, p.useState)(!1),
            o = (0, W.W6)(),
            [l, c] = (0, p.useState)(!1),
            u = (0, W.zy)(),
            d = T(u, Y),
            m = (0, x.Bc)(d);
          if (t.data && !t.data?.is_not_member_of_any_group() && !a)
            return d
              ? (0, e.jsx)(W.rd, {
                  to: `/account/familymanagement?invitation=${d}`,
                })
              : (0, e.jsx)(W.rd, { to: "/account/familymanagement" });
          let h = null,
            _ = t.data.pending_group_invites();
          if (d) {
            const f = _.findIndex((F) => F.family_groupid() === d);
            f !== -1 && ((h = _[f]), (_ = _.slice()), _.splice(f, 1));
          }
          return (
            h !== null &&
              h.awaiting_2fa() &&
              Q.TS.IN_MOBILE_WEBVIEW &&
              (m.mutate(),
              (window.location.href =
                "steammobile://confirmations?first_of_type=11")),
            a
              ? (0, e.jsx)(yt, {
                  children: (0, e.jsx)(nn, {
                    active: a,
                    isCreate: !1,
                    closeModal: () => {
                      s(!1), o.push("/account/familymanagement");
                    },
                    cooldownSeconds: t.data?.cooldown_seconds_remaining(),
                  }),
                })
              : h
                ? (0, e.jsx)(yt, {
                    children: (0, e.jsxs)("div", {
                      className: D.JoinFamilyContainer,
                      children: [
                        (0, e.jsxs)("p", {
                          children: [
                            (0, r.oW)(
                              "#FamilyManagement_PendingInvitesText",
                              (0, e.jsx)("span", { className: D.JoinWarning }),
                              (0, e.jsx)("b", {}),
                            ),
                            " ",
                          ],
                        }),
                        (0, e.jsx)(
                          oe,
                          {
                            inviteID: h.invite_id(),
                            inviterSteamID: h.inviter_steamid(),
                            familyGroupID: h.family_groupid(),
                            role: h.role(),
                            setCooldownModalActive: s,
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
                                    oe,
                                    {
                                      inviterSteamID: f.inviter_steamid(),
                                      inviteID: f.invite_id(),
                                      familyGroupID: f.family_groupid(),
                                      role: f.role(),
                                      setCooldownModalActive: s,
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
                : (0, e.jsx)(yt, {
                    children: (0, e.jsxs)("div", {
                      className: D.JoinFamilyContainer,
                      children: [
                        d &&
                          (0, e.jsx)("div", {
                            className: D.IncomingInviteGone,
                            children: (0, r.we)(
                              "#FamilyManagement_IncomingInviteGone",
                            ),
                          }),
                        (0, e.jsx)(ht, {
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
                              (0, e.jsx)(ht, {
                                children: (0, r.we)(
                                  "#FamilyManagement_PendingInvitesHeader",
                                ),
                              }),
                              (0, e.jsxs)("p", {
                                children: [
                                  (0, r.oW)(
                                    "#FamilyManagement_PendingInvitesText",
                                    (0, e.jsx)("span", {
                                      className: D.JoinWarning,
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
                                    oe,
                                    {
                                      inviteID: f.invite_id(),
                                      inviterSteamID: f.inviter_steamid(),
                                      familyGroupID: f.family_groupid(),
                                      role: f.role(),
                                      setCooldownModalActive: s,
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
        function Ss(i) {
          const t = (0, x.vo)(),
            n = t.data.family_groupid(),
            a = t.data.role() === g.PQ.s,
            s = (0, x.Hs)(n);
          return (
            (0, x.gv)(
              s,
              "#FamilyManagement_ErrorLoadFamily",
              x.eS.k_EFamilyQueryLoadFamily,
            ),
            s.isLoading
              ? (0, e.jsx)("div", {
                  className: D.ManageFamily,
                  children: (0, e.jsx)("div", {
                    className: D.ThrobberContainer,
                    children: (0, e.jsx)(L.t, {}),
                  }),
                })
              : s.isError
                ? null
                : (0, e.jsxs)(S.Z, {
                    className: D.ManageFamily,
                    children: [
                      (0, e.jsx)(js, {}),
                      (0, e.jsx)(Fs, { familyGroupID: n, isAdult: a }),
                      (0, e.jsx)(ws, { familyGroupID: n }),
                    ],
                  })
          );
        }
        function ht(i) {
          return (0, e.jsx)("div", {
            className: D.FamilySubsection,
            children: i.children,
          });
        }
        function Ps(i) {
          const t = (0, W.W6)();
          function n() {
            t.push("/account/familymanagement");
          }
          return (0, e.jsx)("div", {
            className: D.PreferencesHeader,
            children: (0, e.jsx)("div", {
              className: (0, A.A)(
                D.AccountHeader,
                "account_header_line noicon",
              ),
              onClick: n,
              children: i.children,
            }),
          });
        }
        function js() {
          const i = (0, W.zy)(),
            t = T(i, Y),
            n = (0, x.vo)(),
            a = !n.data.is_not_member_of_any_group();
          return !t || !a || t === n.data.family_groupid()
            ? null
            : (0, e.jsxs)("div", {
                className: D.IncomingInviteGone,
                children: [
                  (0, e.jsx)(z.eTF, { color: D.colorCautionSign }),
                  (0, e.jsx)("span", {
                    children: (0, r.we)(
                      "#FamilyManagement_CannotJoinWhileAlreadyMember",
                    ),
                  }),
                ],
              });
        }
        function Fs(i) {
          const { familyGroupID: t, isAdult: n } = i,
            a = (0, x.Hs)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const s = a.data,
            o = s.members().length + s.pending_invites().length,
            l =
              s.free_spots() + s.members().length + s.pending_invites().length;
          return (0, e.jsxs)("div", {
            className: D.FamilyNameAndSlots,
            children: [
              (0, e.jsx)(Is, { familyGroupID: t, isAdult: n }),
              n &&
                (0, e.jsx)("div", {
                  className: D.FamilySlotsContainer,
                  children: (0, r.we)("#FamilyManagement_MemberCount", o, l),
                }),
            ],
          });
        }
        function an(i) {
          const t = (0, X.js)(i),
            n = `${Q.TS.COMMUNITY_BASE_URL}profiles/${i}`;
          return t.isSuccess
            ? (0, e.jsx)(J.Ii, {
                className: D.FamilyHistoryName,
                href: n,
                children: (0, e.jsx)("b", {
                  children: (0, e.jsx)(me.iV, { steamid: i }),
                }),
              })
            : null;
        }
        function sn(i) {
          const { familyGroupID: t } = i,
            n = Za(t),
            a = (0, x.ll)(t),
            s = [
              {
                name: (0, r.we)("#FamilyManagement_ManageTab"),
                key: "manage",
                contents: (0, e.jsx)(Ss, {}),
              },
            ];
          return (
            s.push({
              name: (0, r.we)("#FamilyManagement_LibraryTab"),
              key: "library",
              contents: (0, e.jsx)(la, { familyGroupID: t }),
            }),
            s.push({
              name: (0, r.we)("#FamilyManagement_RequestsTab"),
              key: "requests",
              contents: (0, e.jsx)(rs, { rgRequests: n, familyGroupID: t }),
            }),
            a === g.PQ.s &&
              (s.push({
                name: (0, r.we)("#FamilyManagement_PlaytimeTab"),
                key: "playtime",
                contents: (0, e.jsx)(fs, { familyGroupID: t }),
              }),
              s.push({
                name: (0, r.we)("#FamilyManagement_HistoryTab"),
                key: "history",
                contents: (0, e.jsx)(Nn, {
                  familyGroupID: t,
                  nFamilyHistoryRowHeight: D.nFamilyHistoryRowHeight,
                  FamilyHistory: D.FamilyHistory,
                  Entry: D.Entry,
                  Timestamp: D.Timestamp,
                  EntryText: D.EntryText,
                  FnRenderName: an,
                }),
              })),
            (0, e.jsx)(S.Z, {
              autoFocus: !0,
              focusableIfEmpty: !0,
              children: (0, e.jsx)(ae.V, {
                tabs: s,
                classNameCtn: D.FamilyTabs,
                classNameTab: D.FamilyTab,
                preferredFocus: !0,
              }),
            })
          );
        }
        function ws(i) {
          const { familyGroupID: t } = i,
            n = (0, x.ll)(t),
            a = (0, x.Hs)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const s = (0, U.LH)();
          if (a.isLoading)
            return (0, e.jsx)("div", {
              className: D.ThrobberContainer,
              children: (0, e.jsx)(L.t, {}),
            });
          if (a.isError) return null;
          const o = n == g.PQ.s,
            l = a.data.members().findIndex((d) => d.steamid() === s),
            c = a.data.members()[l],
            u = a.data.members().slice();
          return (
            l !== -1 && u.splice(l, 1),
            (0, e.jsxs)(e.Fragment, {
              children: [
                l !== -1 &&
                  (0, e.jsx)(rt, { familyGroupID: t, member: c }, c.steamid()),
                u.map((d) =>
                  (0, e.jsx)(rt, { familyGroupID: t, member: d }, d.steamid()),
                ),
                o &&
                  a.data
                    ?.pending_invites()
                    .map((d) =>
                      (0, e.jsx)(
                        rt,
                        { familyGroupID: t, member: d },
                        d.steamid(),
                      ),
                    ),
                o &&
                  a.data.free_spots() > 0 &&
                  (0, e.jsx)(st, { familyGroupID: t }),
              ],
            })
          );
        }
        function Is(i) {
          const { familyGroupID: t, isAdult: n } = i,
            [a, s] = (0, p.useState)(!1),
            o = (0, x.Hs)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const [c, u] = (0, p.useState)(o.data?.name()),
            d = (0, x.DD)(t);
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorModifyFamily",
            x.eS.k_EFamilyQueryModifyFamily,
          );
          const m = (f) => {
              l(null), d.mutate(f), s(!1);
            },
            h = () => {
              s(!0), l(null);
            },
            _ = (f) => {
              u(f.target.value), l(null);
            };
          return a && n
            ? (0, e.jsxs)(S.Z, {
                className: D.FamilyNameEditor,
                children: [
                  (0, e.jsx)("span", {
                    className: D.YourFamily,
                    children: (0, r.we)("#FamilyManagement_YourFamily"),
                  }),
                  (0, e.jsx)(J.BA, {
                    className: D.EditNameInput,
                    type: "text",
                    onChange: _,
                    value: c,
                    placeholder: (0, r.we)(
                      "#FamilyManagement_InputNamePlaceholder",
                    ),
                    maxLength: 128,
                  }),
                  (0, e.jsx)(P.$n, {
                    className: D.SaveButton,
                    noFocusRing: !1,
                    onClick: () => m(c),
                    children: (0, r.we)(
                      "#FamilyManagement_EditFamilyNameSaveButton",
                    ),
                  }),
                  (0, e.jsx)(P.$n, {
                    className: D.CancelButton,
                    noFocusRing: !1,
                    onClick: () => {
                      s(!1), l(null);
                    },
                    children: (0, r.we)(
                      "#FamilyManagement_EditFamilyNameCancelButton",
                    ),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: D.FamilyNameEditor,
                children: [
                  (0, e.jsx)("span", {
                    className: D.YourFamily,
                    children: (0, r.we)("#FamilyManagement_YourFamily"),
                  }),
                  (0, e.jsxs)(S.Z, {
                    className: D.FamilyNameButton,
                    onActivate: n ? h : void 0,
                    children: [
                      (0, e.jsx)("div", {
                        className: D.FamilyName,
                        children: c,
                      }),
                      n &&
                        (0, e.jsx)(S.Z, {
                          className: D.EditButton,
                          children: (0, e.jsx)(z.ffu, {}),
                        }),
                    ],
                  }),
                ],
              });
        }
      },
      23903: (k, ue, y) => {
        "use strict";
        y.d(ue, {
          BJ: () => r,
          Kt: () => oe,
          OM: () => pe,
          Th: () => S,
          WH: () => T,
          Yp: () => X,
          az: () => L,
          cV: () => A,
          mG: () => le,
          tv: () => Y,
          xC: () => V,
        });
        var e = y(7850),
          g = y(90626),
          p = y(4399),
          U = y.n(p),
          J = y(36707),
          P = y(19298),
          z = y(27126),
          ae = y(3166);
        const L = (0, g.forwardRef)(function (H, b) {
            const {
                component: O,
                padding: K,
                paddingX: I,
                paddingY: $,
                paddingRight: ee,
                paddingLeft: de,
                paddingTop: ce,
                paddingBottom: _e,
                margin: xe,
                marginX: we,
                marginY: Ie,
                marginLeft: De,
                marginTop: Ge,
                marginRight: $e,
                marginBottom: et,
                display: Le,
                flexDirection: Me,
                flexWrap: Be,
                justifyContent: ke,
                alignItems: We,
                flexGrow: tt,
                flexShrink: nt,
                flexBasis: He,
                flex: be,
                className: Ue,
                style: at,
                ...Ke
              } = H,
              qe = (0, J.A)(
                S("padding-left", de || I || K),
                S("padding-top", ce || $ || K),
                S("padding-right", ee || I || K),
                S("padding-bottom", _e || $ || K),
                S("margin-left", De || we || xe),
                S("margin-top", Ge || Ie || xe),
                S("margin-right", $e || we || xe),
                S("margin-bottom", et || Ie || xe),
                Ue,
              ),
              Qe = {
                display: Le,
                flexDirection: Me,
                flexWrap: Be,
                justifyContent: ke,
                alignItems: We,
                flexGrow: tt,
                flexShrink: nt,
                flexBasis: He,
                flex: be,
                ...at,
              },
              st = { className: qe, style: Qe, ref: b, ...Ke };
            if (O) {
              const it = O;
              return (0, e.jsx)(it, { ...st });
            }
            return (0, e.jsx)(P.Z, { className: qe, style: Qe, ref: b, ...Ke });
          }),
          A = (0, g.forwardRef)(function (H, b) {
            const {
                children: O,
                style: K,
                spacing: I,
                horizontalSpacing: $,
                verticalSpacing: ee,
                itemClassName: de,
                "flow-children": ce = "row",
                ..._e
              } = H,
              xe = le(),
              we = xe.spacing[Y($ || I || "none")],
              Ie = xe.spacing[Y(ee || I || "none")];
            return (0, e.jsx)(P.Z, {
              "flow-children": ce,
              ref: b,
              style: { ...(K || {}), marginTop: N(-Ie) },
              ..._e,
              children: (0, e.jsx)("div", {
                style: { marginLeft: N(-we) },
                className: p.InlineContainer,
                children: g.Children.map(O, (De) =>
                  De != null
                    ? (0, e.jsx)(L, {
                        paddingLeft: $ || I,
                        paddingTop: ee || I,
                        className: de,
                        children: De,
                      })
                    : null,
                ),
              }),
            });
          }),
          r = (0, g.forwardRef)(function (H, b) {
            const {
                spacing: O,
                itemClassName: K,
                children: I,
                className: $,
                ...ee
              } = H,
              de = g.Children.count(I);
            return (0, e.jsx)(P.Z, {
              "flow-children": "column",
              ref: b,
              className: $,
              ...ee,
              children: g.Children.map(I, (ce, _e) =>
                ce != null
                  ? (0, e.jsx)(L, {
                      paddingBottom: _e !== de - 1 ? O : void 0,
                      className: (0, J.A)(K, p.RemoveOnEmpty),
                      children: ce,
                    })
                  : null,
              ),
            });
          }),
          N = (M) => `${M}px`,
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
          le = () => (0, g.useContext)(me),
          X = (M) => {
            const { config: H, children: b } = M,
              O = H || x,
              K = (0, g.useMemo)(() => W(O), [O]),
              [I, $] = (0, g.useState)(0);
            return (
              (0, g.useLayoutEffect)(() => {
                $((ee) => ee + 1);
              }, [K]),
              (0, e.jsxs)(g.Fragment, {
                children: [(0, e.jsx)("style", { children: K }), b],
              })
            );
          };
        function W(M) {
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
            .map((b) =>
              Object.keys(M.spacing)
                .map((O) => Q(b, O, M.spacing[O]))
                .join(`
`),
            )
            .join(`
`);
        }
        const E = (M, H) => `${M}-${H}`,
          Q = (M, H, b) => `.${E(M, H)} { ${M}: ${b}px; }`,
          S = (M, H) => {
            const b = Y(H);
            return H ? E(M, b) : "";
          };
        function T(M) {
          const H = le(),
            b = Y(M);
          return (M && H.spacing[b]) || 0;
        }
        function Y(M) {
          const H = V();
          return Array.isArray(M)
            ? M[
                Math.min(
                  H === "desktop" ? 2 : H === "tablet" ? 1 : 0,
                  M.length - 1,
                )
              ]
            : M;
        }
        function V() {
          const {
              breakpoint: { tablet: M, desktop: H },
            } = le(),
            b = (0, z.h)(`(min-width: ${M}px)`),
            O = (0, z.h)(`(min-width: ${H}px)`);
          return (0, ae.Qn)()
            ? "mobile"
            : O
              ? "desktop"
              : b
                ? "tablet"
                : "mobile";
        }
        function pe(M) {
          return M.children(V());
        }
        function oe(M) {
          return (0, e.jsx)(L, { component: P.Z, ...M });
        }
      },
      29528: (k) => {
        k.exports = {
          AppGridItem: "_3EHR0vjVp91HIDN-WKXpuB",
          NoImage: "_--1j5crfWvm4vTD76qd0G",
          Capsule: "_3dBfx1sV1COVdSsh7RdgMd",
          Loaded: "FmbmC2C9Se8Jqjj-uQjAw",
          Label: "_1tVCPhzTgmUpMpErm-4mHX",
        };
      },
      1242: (k) => {
        k.exports = {
          VirtualizedGridWrapper: "K6224j9GEn0UKuVD4_m0E",
          VirtualizedGridRow: "-padb24TteB2RGJuMHdLn",
        };
      },
      89206: (k) => {
        k.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      20803: (k) => {
        k.exports = {
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
      49118: (k) => {
        k.exports = {
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
      63043: (k) => {
        k.exports = {
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
      70322: (k) => {
        k.exports = {
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
      80329: (k) => {
        k.exports = {
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
      16195: (k) => {
        k.exports = {
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
      34286: (k) => {
        k.exports = {
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
      73712: (k) => {
        k.exports = {
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
      36175: (k) => {
        k.exports = {
          ThrobberContainer: "_3VjPauBxHErDMNCJVlsgYs",
          FamilyPlaytime: "_1b1sthnt2e6izmHyDW7fam",
        };
      },
      84278: (k) => {
        k.exports = {
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
      4399: (k) => {
        k.exports = {
          InlineContainer: "_3nHerBg5ELmarLbN--Gmpp",
          RemoveOnEmpty: "_1Y8hK5A-ASv-Y5SGGb5Em5",
        };
      },
    },
  ]);
})();
