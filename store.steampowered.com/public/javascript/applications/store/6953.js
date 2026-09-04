/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [6953],
    {
      58679: (D, v, e) => {
        "use strict";
        e.d(v, { ff: () => o, iM: () => W, iV: () => r, pC: () => m });
        var s = e(7850),
          I = e(90626),
          i = e(20803),
          T = e.n(i),
          E = e(36118),
          R = e(18210),
          L = e(2289),
          P = e(36707),
          O = e(46943),
          M = e(76559),
          C = e(4874),
          U = e(35098),
          p = e(42993),
          g = e(58612),
          x = e(93125),
          A = e(9852),
          F = e(53107),
          K = e(98609),
          _ = e(99412);
        function B(n) {
          return (0, s.jsx)(E.d1w, {});
        }
        function N(n) {
          return (0, s.jsx)(E.Bir, {});
        }
        function W(n) {
          return (0, s.jsx)("div", {
            className: (0, P.A)(i.RoleIcon, n.className),
            children: n.role == L.PQ.sf ? (0, s.jsx)(N, {}) : (0, s.jsx)(B, {}),
          });
        }
        function r(n) {
          const { steamid: t } = n,
            a = (0, U.js)(t),
            c = (0, g.M8)(),
            l = (0, A.T)(),
            u = c.data?.get(new M.b(t).GetAccountID()),
            d = l.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              a.data?.m_strPlayerName || "\xA0",
              " ",
              d &&
                u &&
                (0, s.jsxs)("span", {
                  className: i.playerNickname,
                  children: ["(", u, ")"],
                }),
            ],
          });
        }
        function h(n) {
          const { role: t, persona: a, isSelf: c } = n;
          let l = n.size || "Large";
          const u = (0, g.M8)(),
            d = (0, A.T)(),
            j = u.data?.get(a.GetAccountID()),
            S = d.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: i.ProfileLink,
                children: [
                  (0, s.jsx)(O.i8, {
                    className: i.Avatar,
                    persona: a,
                    size: l,
                    statusPosition: "right",
                  }),
                  (0, s.jsx)(x.D, {
                    className: i.PlayerName,
                    bIsSelf: c,
                    bHideStatus: !1,
                    bHidePersona: !1,
                    bParenthesizeNicknames: S,
                    bCompactView: !1,
                    persona: a,
                    strNickname: j,
                    eFriendRelationship: _._UC,
                    bEllipsisName: !0,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: i.RoleAndIcon,
                children: [
                  (0, s.jsx)(W, { className: i.ProfileRoleIcon, role: t }),
                  (0, s.jsx)("div", {
                    className: i.RoleName,
                    children: (0, R.we)(`#FamilyManagement_Role_${t}`),
                  }),
                ],
              }),
            ],
          });
        }
        function m(n) {
          const t = (0, I.useContext)(C.IN);
          return t.errorMessage
            ? (0, s.jsx)("div", {
                className: i.FamilyErrorDisplay,
                children: t.errorMessage,
              })
            : null;
        }
        function o(n) {
          const { persona: t, role: a, invitePending: c } = n,
            u = (0, p.LH)() == t.GetSteamIDAsString();
          return (0, s.jsxs)("div", {
            className: i.FamilyMemberStatus,
            children: [
              (0, s.jsx)(h, { role: a, persona: t, isSelf: u }),
              c &&
                (0, s.jsx)("div", {
                  className: i.InvitePending,
                  children: (0, R.we)("#FamilyManagement_InvitePending"),
                }),
              u &&
                (0, s.jsx)("span", {
                  className: i.MeBadge,
                  children: (0, R.we)("#FamilyManagement_Me"),
                }),
            ],
          });
        }
        function f(n) {
          const { steamID: t, role: a } = n,
            c = usePlayerSummary(t);
          useQuerySetMessageOnErrorEffect(
            c,
            "#FamilyManagement_ErrorLoadFamilyGeneric",
          );
          const l = useCallback(
            (u) => {
              let d = `${Config.COMMUNITY_BASE_URL}profiles/${t}`;
              OpenLinkInNewWindow(u, d);
            },
            [t],
          );
          return c.isSuccess
            ? jsx(Panel, {
                className: classnames(styles.FamilyMemberRow, styles.InfoRow),
                onActivate: l,
                children: jsx(o, { persona: c.data, role: a }),
              })
            : null;
        }
      },
      54407: (D, v, e) => {
        "use strict";
        e.d(v, { B3: () => N, KM: () => A, KT: () => B });
        var s = e(41735),
          I = e.n(s),
          i = e(58632),
          T = e.n(i),
          E = e(90626),
          R = e(80902),
          L = e(75233),
          P = e(72604),
          O = e(76559),
          M = e(34592),
          C = e(3166),
          U = e(35038),
          p = e(27386),
          g = e(68312);
        const x = "nicknames";
        function A(r) {
          const h = (0, g.KV)(),
            { data: m, isLoading: o } = (0, R.I)({
              queryKey: [x],
              queryFn: async () => {
                const f = new Map();
                if (C.iA.logged_in) {
                  const n = U.w.Init(p.w_T),
                    a = (await p.xtC.GetNicknameList(h, n)).Body().toObject();
                  a?.nicknames &&
                    a.nicknames.length > 0 &&
                    a.nicknames.forEach((c) => {
                      f.set(c.accountid, c.nickname);
                    });
                }
                return f;
              },
            });
          return m ? m.get(r) : null;
        }
        async function F(r) {
          if (!r || r.length == 0) return [];
          const h =
            (0, C.yK)() == "community"
              ? C.TS.COMMUNITY_BASE_URL
              : C.TS.STORE_BASE_URL;
          if (r.length == 1) {
            const m = { accountid: r[0], origin: self.origin },
              o = await I().get(`${h}actions/ajaxgetavatarpersona`, {
                params: m,
              });
            if (
              !o ||
              o.status != 200 ||
              o.data?.success != P.R ||
              !o.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, M.H))(o).strErrorMsg}`;
            return [o.data.userinfo];
          } else {
            const m = { accountids: r.join(","), origin: self.origin },
              o = await I().get(`${h}actions/ajaxgetmultiavatarpersona`, {
                params: m,
              });
            if (
              !o ||
              o.status != 200 ||
              o.data?.success != P.R ||
              !o.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, M.H))(o).strErrorMsg}`;
            const f = new Map();
            return (
              o.data.userinfos.forEach((n) =>
                f.set(new O.b(n.steamid).GetAccountID(), n),
              ),
              r.map((n) => f.get(n))
            );
          }
        }
        const K = new (T())((r) => F(r), { cache: !1 }),
          _ = "avatarandpersonas";
        function B(r) {
          const { data: h, isLoading: m } = (0, R.I)({
            queryKey: [_, r],
            queryFn: () => K.load(r),
          });
          return [h, m];
        }
        function N(r) {
          const h = (0, L.jE)(),
            { data: m, isLoading: o } = (0, R.I)({
              queryKey: [_, r],
              queryFn: async () => {
                const n = await K.loadMany(r);
                return (
                  n.forEach((t) => {
                    const a = [_, new O.b(t.steamid).GetAccountID()];
                    h.setQueryData(a, t);
                  }),
                  n
                );
              },
              enabled: r?.length > 0,
            }),
            f = (0, E.useMemo)(() => {
              const n = new Array();
              return (
                m?.forEach((t) => {
                  t instanceof Error || n.push(t);
                }),
                n
              );
            }, [m]);
          return o ? null : f;
        }
        function W(r) {
          return ReactQueryClient.getQueryData([_, r]);
        }
      },
      9852: (D, v, e) => {
        "use strict";
        e.d(v, { T: () => L });
        var s = e(72604),
          I = e(35038),
          i = e(27386),
          T = e(80902),
          E = e(68312);
        function R(P) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const O = I.w.Init(i.tzK),
                M = await i.xtC.GetCommunityPreferences(P, O);
              if (M.GetEResult() != s.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${M.GetEResult()} ${M.GetErrorMessage()}`,
                );
              return M.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function L() {
          const P = (0, E.KV)();
          return (0, T.I)(R(P));
        }
      },
      6953: (D, v, e) => {
        "use strict";
        e.r(v),
          e.d(v, { PurchaseRequestSimpleInfoPage: () => f, default: () => N });
        var s = e(7850),
          I = e(9843),
          i = e(83665),
          T = e(23366),
          E = e(90626),
          R = e(75233),
          L = e(42993),
          P = e(4874),
          O = e(58679),
          M = e(76559),
          C = e(54407),
          U = e(16412),
          p = e(85599),
          g = e(18210),
          x = e(98609),
          A = e(66372);
        function F(t) {
          const { familyGroupID: a } = t,
            c = (0, P.Hs)(a),
            u = (0, P.BO)(a).data?.requests()?.length;
          if (!u) return null;
          const d = (0, g.Yp)("#PurchaseRequestBanner_PendingRequest", u);
          return (0, s.jsx)("div", {
            className: A.PurchaseRequestBanner,
            children: (0, g.PP)(
              "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
              (0, s.jsx)("a", {
                href:
                  x.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
                children: d,
              }),
              (0, s.jsx)("span", { children: c.data?.name() }),
            ),
          });
        }
        var K = e(91721),
          _ = e.n(K),
          B = e(60424);
        function N(t) {
          const { familyGroupID: a, requestID: c } = t,
            [l, u] = E.useState(),
            d = (0, P.Qn)(a, c),
            j = (0, B.useInitCartLocalization)(),
            S = (0, L.LH)(),
            G = (0, R.jE)(),
            y = d.data;
          return (
            (0, E.useEffect)(() => {
              if (y) {
                const H = {
                    type: "request",
                    gid: y.gidshoppingcart,
                    requestID: y.request_id,
                  },
                  q = (0, T.Vh)();
                q?.requestcartgid === H.gid &&
                  q.requestcart &&
                  (0, i.LN)(G, H, (0, I.qS)(q.requestcart)),
                  u(H);
              }
            }, [y, G]),
            d.isError
              ? (0, s.jsx)(W, { familyGroupID: a })
              : d.isLoading || !j || (y && !l)
                ? (0, s.jsx)(r, {})
                : y
                  ? y.is_completed
                    ? (0, s.jsx)(m, { familyGroupID: a })
                    : y.requester_steamid === S
                      ? (0, s.jsx)(o, { familyGroupID: a })
                      : (0, s.jsx)(n, { request: y, cartID: l })
                  : (0, s.jsx)(h, { familyGroupID: a })
          );
        }
        function W(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(f, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestErrorHeader",
          });
        }
        function r() {
          return (0, s.jsx)("div", {
            className: _().PurchaseRequestInfoPage,
            children: (0, s.jsx)(p.t, { size: "medium", msDelayAppear: 300 }),
          });
        }
        function h(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(f, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
          });
        }
        function m(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(f, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
          });
        }
        function o(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(f, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestPendingHeader",
            infoLocToken: "#PurchaseRequest_RequestPendingInfo",
          });
        }
        function f(t) {
          const { familyGroupID: a, headerLocToken: c, infoLocToken: l } = t,
            [u, d] = E.useState(null),
            j = () => {
              window.location.assign(x.TS.STORE_BASE_URL);
            };
          return (0, s.jsx)("div", {
            className: _().PurchaseRequestInfoPage,
            children: (0, s.jsxs)(P.IN.Provider, {
              value: { errorMessage: u, setErrorMessage: d },
              children: [
                (0, s.jsx)("div", {
                  className: _().Header,
                  children: (0, g.we)(c),
                }),
                (0, s.jsx)(O.pC, {}),
                (0, s.jsx)(F, { familyGroupID: a }),
                !!l &&
                  (0, s.jsx)("div", {
                    className: _().Info,
                    children: (0, g.we)(l),
                  }),
                (0, s.jsx)("div", {
                  className: _().ButtonContainer,
                  children: (0, s.jsx)(U.jn, {
                    className: _().PrimaryButton,
                    onClick: j,
                    children: (0, g.we)("#PurchaseRequested_ReturnToStore"),
                  }),
                }),
              ],
            }),
          });
        }
        function n(t) {
          const { request: a, cartID: c } = t,
            l = new M.b(a.requester_steamid).GetAccountID(),
            [u] = (0, C.KT)(l),
            [d, j] = E.useState({ accountid_giftee: l }),
            S = E.useRef(() => {}).current,
            G = (0, g.we)("#Cart_PurchaseRequestTitle", u?.persona_name);
          return (0, s.jsx)(B.BaseCartPage, {
            cartID: c,
            step: "gifts",
            onStepChange: S,
            title: G,
            cartWideGiftInfo: d,
            onCartWideGiftInfoChange: j,
          });
        }
      },
      20803: (D) => {
        D.exports = {
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
      66372: (D) => {
        D.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
          PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
        };
      },
      91721: (D) => {
        D.exports = {
          PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
          Header: "kw7cBqn_8NJ4l9R4nkZXE",
          ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
          PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
        };
      },
    },
  ]);
})();
