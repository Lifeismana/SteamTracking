/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [58987, 6953],
    {
      58679: (y, R, e) => {
        "use strict";
        e.d(R, { ff: () => i, iM: () => N, iV: () => r, pC: () => m });
        var s = e(7850),
          I = e(90626),
          o = e(20803),
          O = e.n(o),
          P = e(36118),
          M = e(18210),
          T = e(2289),
          E = e(36707),
          C = e(46943),
          g = e(76559),
          L = e(4874),
          U = e(35098),
          p = e(42993),
          D = e(58612),
          x = e(93125),
          A = e(9852),
          F = e(53107),
          K = e(98609),
          _ = e(99412);
        function B(n) {
          return (0, s.jsx)(P.d1w, {});
        }
        function W(n) {
          return (0, s.jsx)(P.Bir, {});
        }
        function N(n) {
          return (0, s.jsx)("div", {
            className: (0, E.A)(o.RoleIcon, n.className),
            children: n.role == T.PQ.sf ? (0, s.jsx)(W, {}) : (0, s.jsx)(B, {}),
          });
        }
        function r(n) {
          const { steamid: t } = n,
            a = (0, U.js)(t),
            u = (0, D.M8)(),
            l = (0, A.T)(),
            c = u.data?.get(new g.b(t).GetAccountID()),
            d = l.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              a.data?.m_strPlayerName || "\xA0",
              " ",
              d &&
                c &&
                (0, s.jsxs)("span", {
                  className: o.playerNickname,
                  children: ["(", c, ")"],
                }),
            ],
          });
        }
        function h(n) {
          const { role: t, persona: a, isSelf: u } = n;
          let l = n.size || "Large";
          const c = (0, D.M8)(),
            d = (0, A.T)(),
            j = c.data?.get(a.GetAccountID()),
            S = d.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: o.ProfileLink,
                children: [
                  (0, s.jsx)(C.i8, {
                    className: o.Avatar,
                    persona: a,
                    size: l,
                    statusPosition: "right",
                  }),
                  (0, s.jsx)(x.D, {
                    className: o.PlayerName,
                    bIsSelf: u,
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
                className: o.RoleAndIcon,
                children: [
                  (0, s.jsx)(N, { className: o.ProfileRoleIcon, role: t }),
                  (0, s.jsx)("div", {
                    className: o.RoleName,
                    children: (0, M.we)(`#FamilyManagement_Role_${t}`),
                  }),
                ],
              }),
            ],
          });
        }
        function m(n) {
          const t = (0, I.useContext)(L.IN);
          return t.errorMessage
            ? (0, s.jsx)("div", {
                className: o.FamilyErrorDisplay,
                children: t.errorMessage,
              })
            : null;
        }
        function i(n) {
          const { persona: t, role: a, invitePending: u } = n,
            c = (0, p.LH)() == t.GetSteamIDAsString();
          return (0, s.jsxs)("div", {
            className: o.FamilyMemberStatus,
            children: [
              (0, s.jsx)(h, { role: a, persona: t, isSelf: c }),
              u &&
                (0, s.jsx)("div", {
                  className: o.InvitePending,
                  children: (0, M.we)("#FamilyManagement_InvitePending"),
                }),
              c &&
                (0, s.jsx)("span", {
                  className: o.MeBadge,
                  children: (0, M.we)("#FamilyManagement_Me"),
                }),
            ],
          });
        }
        function f(n) {
          const { steamID: t, role: a } = n,
            u = usePlayerSummary(t);
          useQuerySetMessageOnErrorEffect(
            u,
            "#FamilyManagement_ErrorLoadFamilyGeneric",
          );
          const l = useCallback(
            (c) => {
              let d = `${Config.COMMUNITY_BASE_URL}profiles/${t}`;
              OpenLinkInNewWindow(c, d);
            },
            [t],
          );
          return u.isSuccess
            ? jsx(Panel, {
                className: classnames(styles.FamilyMemberRow, styles.InfoRow),
                onActivate: l,
                children: jsx(i, { persona: u.data, role: a }),
              })
            : null;
        }
      },
      54407: (y, R, e) => {
        "use strict";
        e.d(R, { B3: () => W, KM: () => A, KT: () => B });
        var s = e(41735),
          I = e.n(s),
          o = e(58632),
          O = e.n(o),
          P = e(90626),
          M = e(80902),
          T = e(75233),
          E = e(72604),
          C = e(76559),
          g = e(34592),
          L = e(3166),
          U = e(35038),
          p = e(27386),
          D = e(68312);
        const x = "nicknames";
        function A(r) {
          const h = (0, D.KV)(),
            { data: m, isLoading: i } = (0, M.I)({
              queryKey: [x],
              queryFn: async () => {
                const f = new Map();
                if (L.iA.logged_in) {
                  const n = U.w.Init(p.w_T),
                    a = (await p.xtC.GetNicknameList(h, n)).Body().toObject();
                  a?.nicknames &&
                    a.nicknames.length > 0 &&
                    a.nicknames.forEach((u) => {
                      f.set(u.accountid, u.nickname);
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
            (0, L.yK)() == "community"
              ? L.TS.COMMUNITY_BASE_URL
              : L.TS.STORE_BASE_URL;
          if (r.length == 1) {
            const m = { accountid: r[0], origin: self.origin },
              i = await I().get(`${h}actions/ajaxgetavatarpersona`, {
                params: m,
              });
            if (
              !i ||
              i.status != 200 ||
              i.data?.success != E.R ||
              !i.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, g.H))(i).strErrorMsg}`;
            return [i.data.userinfo];
          } else {
            const m = { accountids: r.join(","), origin: self.origin },
              i = await I().get(`${h}actions/ajaxgetmultiavatarpersona`, {
                params: m,
              });
            if (
              !i ||
              i.status != 200 ||
              i.data?.success != E.R ||
              !i.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, g.H))(i).strErrorMsg}`;
            const f = new Map();
            return (
              i.data.userinfos.forEach((n) =>
                f.set(new C.b(n.steamid).GetAccountID(), n),
              ),
              r.map((n) => f.get(n))
            );
          }
        }
        const K = new (O())((r) => F(r), { cache: !1 }),
          _ = "avatarandpersonas";
        function B(r) {
          const { data: h, isLoading: m } = (0, M.I)({
            queryKey: [_, r],
            queryFn: () => K.load(r),
          });
          return [h, m];
        }
        function W(r) {
          const h = (0, T.jE)(),
            { data: m, isLoading: i } = (0, M.I)({
              queryKey: [_, r],
              queryFn: async () => {
                const n = await K.loadMany(r);
                return (
                  n.forEach((t) => {
                    const a = [_, new C.b(t.steamid).GetAccountID()];
                    h.setQueryData(a, t);
                  }),
                  n
                );
              },
              enabled: r?.length > 0,
            }),
            f = (0, P.useMemo)(() => {
              const n = new Array();
              return (
                m?.forEach((t) => {
                  t instanceof Error || n.push(t);
                }),
                n
              );
            }, [m]);
          return i ? null : f;
        }
        function N(r) {
          return ReactQueryClient.getQueryData([_, r]);
        }
      },
      9852: (y, R, e) => {
        "use strict";
        e.d(R, { T: () => T });
        var s = e(72604),
          I = e(35038),
          o = e(27386),
          O = e(80902),
          P = e(68312);
        function M(E) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const C = I.w.Init(o.tzK),
                g = await o.xtC.GetCommunityPreferences(E, C);
              if (g.GetEResult() != s.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${g.GetEResult()} ${g.GetErrorMessage()}`,
                );
              return g.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function T() {
          const E = (0, P.KV)();
          return (0, O.I)(M(E));
        }
      },
      46296: (y, R, e) => {
        "use strict";
        e.r(R), e.d(R, { default: () => o });
        var s = e(7850),
          I = e(6953);
        function o(O) {
          const { familyGroupID: P } = O;
          return (0, s.jsx)(I.PurchaseRequestSimpleInfoPage, {
            familyGroupID: P,
            headerLocToken: "#PurchaseRequested_Header",
            infoLocToken: "#PurchaseRequested_Info",
          });
        }
      },
      6953: (y, R, e) => {
        "use strict";
        e.r(R),
          e.d(R, { PurchaseRequestSimpleInfoPage: () => f, default: () => W });
        var s = e(7850),
          I = e(9843),
          o = e(83665),
          O = e(23366),
          P = e(90626),
          M = e(75233),
          T = e(42993),
          E = e(4874),
          C = e(58679),
          g = e(76559),
          L = e(54407),
          U = e(16412),
          p = e(85599),
          D = e(18210),
          x = e(98609),
          A = e(66372);
        function F(t) {
          const { familyGroupID: a } = t,
            u = (0, E.Hs)(a),
            c = (0, E.BO)(a).data?.requests()?.length;
          if (!c) return null;
          const d = (0, D.Yp)("#PurchaseRequestBanner_PendingRequest", c);
          return (0, s.jsx)("div", {
            className: A.PurchaseRequestBanner,
            children: (0, D.PP)(
              "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
              (0, s.jsx)("a", {
                href:
                  x.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
                children: d,
              }),
              (0, s.jsx)("span", { children: u.data?.name() }),
            ),
          });
        }
        var K = e(91721),
          _ = e.n(K),
          B = e(60424);
        function W(t) {
          const { familyGroupID: a, requestID: u } = t,
            [l, c] = P.useState(),
            d = (0, E.Qn)(a, u),
            j = (0, B.useInitCartLocalization)(),
            S = (0, T.LH)(),
            G = (0, M.jE)(),
            v = d.data;
          return (
            (0, P.useEffect)(() => {
              if (v) {
                const H = {
                    type: "request",
                    gid: v.gidshoppingcart,
                    requestID: v.request_id,
                  },
                  q = (0, O.Vh)();
                q?.requestcartgid === H.gid &&
                  q.requestcart &&
                  (0, o.LN)(G, H, (0, I.qS)(q.requestcart)),
                  c(H);
              }
            }, [v, G]),
            d.isError
              ? (0, s.jsx)(N, { familyGroupID: a })
              : d.isLoading || !j || (v && !l)
                ? (0, s.jsx)(r, {})
                : v
                  ? v.is_completed
                    ? (0, s.jsx)(m, { familyGroupID: a })
                    : v.requester_steamid === S
                      ? (0, s.jsx)(i, { familyGroupID: a })
                      : (0, s.jsx)(n, { request: v, cartID: l })
                  : (0, s.jsx)(h, { familyGroupID: a })
          );
        }
        function N(t) {
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
        function i(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(f, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestPendingHeader",
            infoLocToken: "#PurchaseRequest_RequestPendingInfo",
          });
        }
        function f(t) {
          const { familyGroupID: a, headerLocToken: u, infoLocToken: l } = t,
            [c, d] = P.useState(null),
            j = () => {
              window.location.assign(x.TS.STORE_BASE_URL);
            };
          return (0, s.jsx)("div", {
            className: _().PurchaseRequestInfoPage,
            children: (0, s.jsxs)(E.IN.Provider, {
              value: { errorMessage: c, setErrorMessage: d },
              children: [
                (0, s.jsx)("div", {
                  className: _().Header,
                  children: (0, D.we)(u),
                }),
                (0, s.jsx)(C.pC, {}),
                (0, s.jsx)(F, { familyGroupID: a }),
                !!l &&
                  (0, s.jsx)("div", {
                    className: _().Info,
                    children: (0, D.we)(l),
                  }),
                (0, s.jsx)("div", {
                  className: _().ButtonContainer,
                  children: (0, s.jsx)(U.jn, {
                    className: _().PrimaryButton,
                    onClick: j,
                    children: (0, D.we)("#PurchaseRequested_ReturnToStore"),
                  }),
                }),
              ],
            }),
          });
        }
        function n(t) {
          const { request: a, cartID: u } = t,
            l = new g.b(a.requester_steamid).GetAccountID(),
            [c] = (0, L.KT)(l),
            [d, j] = P.useState({ accountid_giftee: l }),
            S = P.useRef(() => {}).current,
            G = (0, D.we)("#Cart_PurchaseRequestTitle", c?.persona_name);
          return (0, s.jsx)(B.BaseCartPage, {
            cartID: u,
            step: "gifts",
            onStepChange: S,
            title: G,
            cartWideGiftInfo: d,
            onCartWideGiftInfoChange: j,
          });
        }
      },
      20803: (y) => {
        y.exports = {
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
      66372: (y) => {
        y.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
          PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
        };
      },
      91721: (y) => {
        y.exports = {
          PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
          Header: "kw7cBqn_8NJ4l9R4nkZXE",
          ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
          PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
        };
      },
    },
  ]);
})();
