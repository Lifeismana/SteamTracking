/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [70351],
  {
    20019: (e, t, n) => {
      n.d(t, { U: () => r });
      var o = n(95578);
      function r(e) {
        switch (e) {
          case o.uE.HT:
            return "game";
          case o.uE.Sv:
            return "software";
          case o.uE.ue:
            return "demo";
          case o.uE._i:
            return "dlc";
          case o.uE.Wz:
          case o.uE.FS:
            return "video";
          case o.uE.Ov:
            return "music";
          case o.uE.Vi:
            return "beta";
          case o.uE.RA:
            return "mod";
        }
        return "invalid";
      }
    },
    72668: (e, t, n) => {
      n.d(t, {
        qr: () => I,
        aL: () => v,
        Nb: () => B,
        Ys: () => S,
        kW: () => F,
        qn: () => L,
        Um: () => G,
        DV: () => C,
        W3: () => D,
        OM: () => b,
        Tn: () => w,
        dI: () => M,
        fF: () => _,
        gP: () => j,
      });
      var o = n(66418),
        r = n(80902),
        s = n(75233),
        a = n(51614),
        i = n(90626),
        c = n(37085),
        u = n(30470),
        l = n(24484);
      const d = !0;
      function m(e) {
        return o.TS.STORE_BASE_URL + "saleaction/" + e;
      }
      async function p(e, t) {
        const n = await fetch(e, { credentials: "include", ...t });
        if (!n.ok) throw new Error(`${e} answered ${n.status}`);
        return await n.json();
      }
      function g() {
        return (0, l.Fd)("doorinfo", "application_config") ?? void 0;
      }
      var f = n(71432);
      function h(e = !0) {
        return {
          queryKey: ["EventDoors"],
          queryFn: () =>
            (async function () {
              const e = await p(m("ajaxgetopendoor"), { method: "GET" });
              if (!e.doordata)
                throw new Error("ajaxgetopendoor answered " + e.success);
              return e.doordata;
            })(),
          initialData: g,
          enabled: d && e,
          staleTime: 1 / 0,
          gcTime: 1 / 0,
          retry: !1,
        };
      }
      function v(e, t) {
        return (
          !(!e || null == t) && Boolean(t >= 0 && t < e.length && e[t].opened)
        );
      }
      function S(e) {
        let t = f.K;
        return (
          e?.forEach((e) => {
            e.opened && e.day > t && (t = e.day);
          }),
          t
        );
      }
      function I(e) {
        return S(e) != f.K;
      }
      function _(e = !0) {
        const { data: t } = (0, r.I)(h(e));
        return t;
      }
      function C() {
        return null != _();
      }
      function b(e) {
        return v(_(), e);
      }
      function w() {
        return S(_());
      }
      function D() {
        return I(_());
      }
      const y = { nOpenCount: 0, iLastDoorIndex: f.K };
      function M() {
        const { data: e } = (0, r.I)({
          queryKey: ["EventDoorOpened"],
          queryFn: () => y,
          initialData: y,
          staleTime: 1 / 0,
          gcTime: 1 / 0,
        });
        return e ?? y;
      }
      const E = new WeakMap();
      function x(e) {
        let t = E.get(e);
        return t || ((t = new Map()), E.set(e, t)), t;
      }
      async function T(e, t) {
        const {
          iDoorIndex: n,
          bOpenDoor: r = !0,
          datarecord: s,
          bPreviewMode: a = !1,
        } = t;
        const i = e.getQueryData(["EventDoors"]);
        if (!o.iA.logged_in || !i || n > i.length || n < 0) return null;
        const d = x(e),
          g = d.get(n);
        if (g) return g;
        if (i[n].opened == r) return {};
        const f = (async function (e, t, n, o, r) {
          try {
            const s = await (async function (e, t, n, o) {
              const r = new FormData();
              r.append("sessionid", (0, l.KC)()),
                r.append("door_index", "" + e),
                n && r.append("datarecord", n),
                o && r.append("fake_open", "" + o),
                r.append("clan_accountid", "" + u.UF.CLANACCOUNTID),
                t || r.append("open_door", "0");
              const s = await p(m("ajaxopendoor"), { method: "POST", body: r });
              if (s.success != c.R)
                throw new Error(
                  "ajaxopendoor answered " +
                    s.success +
                    (s.err_msg ? ": " + s.err_msg : ""),
                );
              return s;
            })(t, n, o, r);
            return (
              O(e, t, n),
              n &&
                !r &&
                e.setQueryData(["EventDoorOpened"], (e) => ({
                  nOpenCount: (e?.nOpenCount ?? 0) + 1,
                  iLastDoorIndex: t,
                })),
              s
            );
          } catch (n) {
            return (
              x(e).delete(t), console.error("OpenEventDoor hit error", n), null
            );
          }
        })(e, n, r, s, a);
        return d.set(n, f), f;
      }
      function j() {
        const e = (0, s.jE)(),
          { mutateAsync: t } = (0, a.n)({ mutationFn: (t) => T(e, t) });
        return t;
      }
      function B(e) {
        return e.ensureQueryData(h());
      }
      function F(e, t, n) {
        t < 0 || t >= f.F
          ? console.error("SetEventDoorState: Wrong door being set " + t)
          : O(e, t, n);
      }
      function O(e, t, n) {
        e.setQueryData(["EventDoors"], (e) =>
          e?.map((e, o) => (o == t && e.opened != n ? { ...e, opened: n } : e)),
        );
      }
      function L(e, t) {
        e.setQueryData(["EventDoors"], (e) =>
          e?.map((e, n) => {
            if (n >= f.F) return e;
            const o = n <= t;
            return e.opened != o ? { ...e, opened: o } : e;
          }),
        );
      }
      async function A(e, t) {
        const n = await (async function (e) {
          const t = new FormData();
          t.append("sessionid", (0, l.KC)()),
            t.append("clan_accountid", "" + e);
          const n = await p(m("ajaxclosealldoor"), { method: "POST", body: t });
          if (n.success != c.R)
            throw new Error("ajaxclosealldoor answered " + n.success);
          return n.count ?? 0;
        })(t);
        return (
          console.log("CloseAllEventDoors - closed " + n),
          L(e, f.K),
          x(e).clear(),
          n
        );
      }
      function G() {
        const e = (0, s.jE)(),
          { mutate: t } = (0, a.n)({
            mutationFn: (t) => A(e, t),
            onError: (e) => console.error("CloseAllEventDoors failed", e),
          });
        return (0, i.useCallback)((e) => t(e), [t]);
      }
    },
    71432: (e, t, n) => {
      n.d(t, { F: () => o, K: () => r });
      const o = 7,
        r = -1;
    },
    2677: (e, t, n) => {
      n.d(t, {
        Ig: () => g,
        Jz: () => f,
        LM: () => I,
        LS: () => m,
        P9: () => p,
        VX: () => S,
        Z$: () => C,
        fp: () => d,
        xN: () => v,
        xe: () => h,
      });
      var o = n(80902),
        r = n(75233),
        s = n(51614),
        a = n(90626),
        i = n(56055);
      const c = 64,
        u = [];
      function l(e) {
        return ["SaleQuizAnswers", e];
      }
      function d(e) {
        const { data: t } = (0, o.I)(
          (function (e) {
            return {
              queryKey: l(e),
              queryFn: () => u,
              initialData: u,
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            };
          })(e),
        );
        return t ?? u;
      }
      function m(e, t) {
        return d(e)[t];
      }
      function p(e) {
        for (let t = e.length - 1; t >= 0; --t) if (e[t]?.answer) return t + 1;
        return 0;
      }
      function g(e) {
        return e.map((e) => e?.answer).filter((e) => Boolean(e));
      }
      function f(e) {
        return e.flatMap((e) => e?.rgCategoryIDs?.filter(Boolean) ?? []);
      }
      function h(e) {
        return e.some((e) => e?.answer?.reveal_question_id == i.b2);
      }
      function v(e, t, n, o) {
        _(e, t, n, { answer: o });
      }
      function S(e, t, n, o) {
        _(e, t, n, { rgCategoryIDs: o?.length ? o : void 0 });
      }
      function I(e, t) {
        e.setQueryData(l(t), u);
      }
      function _(e, t, n, o) {
        const r = Math.min(Math.max(n, 0), c);
        e.setQueryData(l(t), (e) => {
          const t = (e ?? u).slice();
          for (; t.length <= r; ) t.push(void 0);
          return (t[r] = { ...t[r], ...o }), t;
        });
      }
      function C(e) {
        const t = (0, r.jE)(),
          { mutate: n } = (0, s.n)({
            mutationFn: async (n) => {
              switch (n.type) {
                case "answer":
                  v(t, e, n.iQuestionIndex, n.answer);
                  break;
                case "categories":
                  S(t, e, n.iQuestionIndex, n.rgCategoryIDs);
                  break;
                case "clear":
                  I(t, e);
              }
            },
          });
        return (0, a.useMemo)(
          () => ({
            fnSetAnswer: (e, t) =>
              n({ type: "answer", iQuestionIndex: e, answer: t }),
            fnSetAnswerCategories: (e, t) =>
              n({ type: "categories", iQuestionIndex: e, rgCategoryIDs: t }),
            fnClearAnswers: () => n({ type: "clear" }),
          }),
          [n],
        );
      }
    },
    56055: (e, t, n) => {
      n.d(t, { b2: () => o, nx: () => r });
      const o = "terminal";
      var r;
      !(function (e) {
        (e[(e.TemplateFAQDisplayColumn = 1)] = "TemplateFAQDisplayColumn"),
          (e[(e.TemplateFAQDisplaySimpleRow = 2)] =
            "TemplateFAQDisplaySimpleRow");
      })(r || (r = {}));
    },
    39733: (e, t, n) => {
      n.d(t, { Du: () => g, fy: () => p, pt: () => f });
      var o = n(68797),
        r = n(78327),
        s = n(41735),
        a = n.n(s),
        i = n(37085),
        c = n(90626),
        u = n(6144),
        l = n(84933),
        d = n(81393);
      class m {
        m_mapBadgeInfo = new Map();
        m_mapBadgeLoadPromises = new Map();
        m_eventBadgehangeCallback = new Map();
        m_mapInitialBadgeInfo = new Map();
        GetBadgeInfo(e) {
          return this.m_mapBadgeInfo.get(e);
        }
        GetInitialBadgeInfo(e) {
          return this.m_mapInitialBadgeInfo.get(e);
        }
        GetBadgeInfoChangeCallback(e) {
          return (
            this.m_eventBadgehangeCallback.has(e) ||
              this.m_eventBadgehangeCallback.set(e, new u.lu()),
            this.m_eventBadgehangeCallback.get(e)
          );
        }
        Test_SetBadgeInfo(e) {
          e.badgeid &&
            (this.m_mapBadgeInfo.set(e.badgeid, e),
            this.GetBadgeInfoChangeCallback(e.badgeid).Dispatch(e));
        }
        async LoadBadgeInfo(e) {
          return this.m_mapBadgeInfo.has(e)
            ? this.m_mapBadgeInfo.get(e)
            : (this.m_mapBadgeLoadPromises.has(e) ||
                this.m_mapBadgeLoadPromises.set(
                  e,
                  this.InternalLoadBadgeInfo(e),
                ),
              this.m_mapBadgeLoadPromises.get(e));
        }
        async InternalLoadBadgeInfo(e) {
          if (!e || !Number.isInteger(e)) return { badgeid: e, level: 0 };
          let t = null;
          try {
            const n = (0, r.xv)();
            (0, d.wT)(
              n == r.TS.STORE_BASE_URL || n == r.TS.COMMUNITY_BASE_URL,
              "ajaxgetbadgeinfo called on wrong unsupported site: " + n,
            );
            const s = n + "actions/ajaxgetbadgeinfo",
              c = { badgeid: e },
              u = await a().get(s, { params: c, withCredentials: !0 });
            if (
              200 == u.status &&
              (u.data?.success == i.R || u.data?.success == i.p)
            ) {
              const t = {
                badgeid: u.data.badgeid,
                level: u.data.level,
                xp: u.data.xp,
                completion_time: u.data.completion_time,
              };
              return (
                this.m_mapBadgeInfo.set(e, t),
                this.m_mapInitialBadgeInfo.has(e) ||
                  this.m_mapInitialBadgeInfo.set(e, t),
                t
              );
            }
            t = (0, o.H)(u);
          } catch (e) {
            t = (0, o.H)(e);
          }
          console.error("useEventBadge: " + t?.strErrorMsg, t);
          const n = { badgeid: e, level: 0 };
          return this.m_mapBadgeInfo.set(e, n), n;
        }
        static s_Singleton;
        static Get() {
          return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
        }
        constructor() {}
      }
      function p(e) {
        const [t, n] = (0, c.useState)(e ? m.Get().GetBadgeInfo(e) : void 0);
        return (
          (0, c.useEffect)(() => {
            !t &&
              e &&
              m
                .Get()
                .LoadBadgeInfo(e)
                .then((e) => n(e));
          }, [e, t]),
          (0, l.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, n),
          t
        );
      }
      function g(e) {
        m.Get().Test_SetBadgeInfo(e);
      }
      function f(e) {
        const [t, n] = (0, c.useState)(
          e ? m.Get().GetInitialBadgeInfo(e) : void 0,
        );
        return (
          (0, c.useEffect)(() => {
            !t && e && m.Get().LoadBadgeInfo(e);
          }, [e, t]),
          (0, l.hL)(e ? m.Get().GetBadgeInfoChangeCallback(e) : void 0, () =>
            n(e ? m.Get().GetInitialBadgeInfo(e) : void 0),
          ),
          t
        );
      }
    },
    94333: (e, t, n) => {
      n.d(t, { hA: () => j, LG: () => B });
      var o = n(7850),
        r = n(67165),
        s = n(30894),
        a = n(61859),
        i = n(78327),
        c = n(84811),
        u = n(22797),
        l = n(45699),
        d = n(66407),
        m = n(39777),
        p = n(14987),
        g = n(90626),
        f = n(56524),
        h = n.n(f),
        v = n(76217),
        S = n(95695),
        I = n.n(S),
        _ = n(32630),
        C = n(17289),
        b = n(52038),
        w = n(82227),
        D = n(61336);
      function y(e) {
        const {
          strURL: t,
          strName: n,
          strAvatarURL: r,
          nFollowers: s,
          strCreatorType: i,
          strTagLine: c,
          strMemberListURL: u,
          followButton: l,
          bSmallFormat: d,
          bMinimalDisplay: m,
        } = e;
        return (0, o.jsx)(_.Ay, {
          feature: "salecreatorhome",
          children: (0, o.jsxs)(v.Z, {
            className: (0, b.A)(
              h().DevSummaryCtn,
              d ? h().SmallFormat : h().LargeFormat,
              m ? h().MinimalDisplay : "",
            ),
            "flow-children": "row",
            children: [
              Boolean(i) &&
                (0, o.jsx)("span", { className: h().Title, children: i }),
              (0, o.jsxs)("div", {
                className: h().DevSummaryWidgetCtn,
                children: [
                  (0, o.jsx)("div", {
                    className: h().DevSummaryBackground,
                    style: { backgroundImage: `url(${r} )` },
                  }),
                  (0, o.jsxs)("div", {
                    className: (0, b.A)(h().DevSummaryContent),
                    children: [
                      (0, o.jsxs)("div", {
                        className: I().FlexRowContainer,
                        children: [
                          (0, o.jsx)(C.m, {
                            href: (0, D.k2)(t),
                            className: h().AvatarLink,
                            bAllowFocuseableAnchor: !0,
                            children: (0, o.jsx)("img", {
                              className: (0, b.A)(h().Avatar, "Avatar_Trgt"),
                              src: r,
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            className: (0, b.A)(
                              I().FlexColumnContainer,
                              h().CreatorDescCtn,
                            ),
                            children: [
                              (0, o.jsxs)("div", {
                                className: (0, b.A)(
                                  h().CreatorTitleCtn,
                                  I().FlexColumnContainer,
                                ),
                                children: [
                                  (0, o.jsx)(C.m, {
                                    href: (0, D.k2)(t),
                                    className: h().CreatorNameName,
                                    children: n,
                                  }),
                                  Boolean(c) &&
                                    (0, o.jsx)("div", {
                                      className: (0, b.A)(
                                        I().FlexColumnContainer,
                                        h().CreatorTagline,
                                      ),
                                      children: c,
                                    }),
                                ],
                              }),
                              (0, o.jsx)("div", {
                                className: (0, b.A)({
                                  [I().FlexColumnContainer]: d,
                                  [I().FlexRowContainer]: !d,
                                  [h().SocialFollowersCtn]: !0,
                                }),
                                children: (0, o.jsxs)("div", {
                                  className: (0, b.A)(h().FollowBtnCtn),
                                  children: [
                                    l,
                                    (0, o.jsxs)("div", {
                                      className: (0, b.A)({
                                        [h().Followers]: !0,
                                      }),
                                      children: [
                                        (0, o.jsx)("span", {
                                          children: (0, a.we)(
                                            "#CreatorHome_JustFollowers",
                                          ),
                                        }),
                                        (0, o.jsx)("span", {
                                          className: h().FollowerCount,
                                          children: (0, w.Dq)(s),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Boolean(u) &&
                        (0, o.jsx)("a", {
                          href: u,
                          target: "_blank",
                          className: h().MembersListLink,
                          children: (0, a.we)("#ClanMembershipList"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var M = n(28372);
      function E(e) {
        const { data: t, isPending: n } = (0, m.wl)(e ? { appid: e } : void 0);
        return g.useMemo(() => {
          if (!e) return [];
          if (!t) return n ? void 0 : [];
          const o = [],
            r = new Set(),
            s = [
              ["developer", (0, p.Qm)(t.developers)],
              ["publisher", (0, p.Qm)(t.publishers)],
              ["franchise", (0, p.Qm)(t.franchises)],
            ];
          for (const [t, n] of s)
            for (const s of n)
              r.has(s) ||
                (r.add(s),
                o.push({ appid: e, name: "", clan_account_id: s, type: t }));
          return o;
        }, [e, t, n]);
      }
      function x(e) {
        const { rgCreators: t, renderCreator: n } = e,
          [r, s] = g.useState(0);
        if (!t.length) return null;
        if (1 == t.length) return (0, o.jsx)(o.Fragment, { children: n(t[0]) });
        const a = r % t.length;
        return (0, o.jsxs)("div", {
          className: h().CreatorCarouselCtn,
          children: [
            n(t[a]),
            (0, o.jsx)("div", {
              className: h().CreatorCarouselCrumbs,
              children: t.map((e, t) =>
                (0, o.jsx)(
                  l.ml,
                  {
                    className: h().CreatorCarouselCrumb,
                    onClick: () => s(t),
                    "aria-label": T(e.type),
                    children: (0, o.jsx)(d.U, { bIsActive: t == a }),
                  },
                  e.clan_account_id,
                ),
              ),
            }),
          ],
        });
      }
      function T(e) {
        switch (e) {
          case "publisher":
            return (0, a.we)("#CreatorHome_PublishedBy");
          case "franchise":
            return (0, a.we)("#CreatorHome_InFranchise");
        }
        return (0, a.we)("#CreatorHome_DevelopedBy");
      }
      function j(e) {
        const {
            creatorID: t,
            bShowTagline: n,
            bHideCreatorType: l,
            bSmallFormat: d,
            bHideFollowButton: m,
            bAddLinkToMemberList: p,
            bMinimalDisplay: g,
          } = e,
          { creatorHome: h, isFetching: v } = (0, r.FV)(t.clan_account_id),
          [S] = (0, s.L2)();
        return S || (!h && v)
          ? (0, o.jsx)("div", {
              className: f.DevSummaryWidgetCtn,
              children: (0, o.jsx)(u.t, {
                string: (0, a.we)("#Loading"),
                size: "medium",
                position: "center",
              }),
            })
          : h
            ? (0, o.jsx)(c.tH, {
                children: (0, o.jsx)(y, {
                  strURL: h.GetCreatorHomeURL(t.type),
                  strName: h.GetName(),
                  strAvatarURL: h.GetAvatarURLFullSize(),
                  nFollowers: h.GetNumFollowers(),
                  strCreatorType: l ? void 0 : T(t.type),
                  strTagLine: n ? h.GetTagLine() : void 0,
                  strMemberListURL: p
                    ? i.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      h.GetClanSteamID().ConvertTo64BitString() +
                      "/members/"
                    : void 0,
                  followButton: m
                    ? void 0
                    : (0, o.jsx)(M.of, {
                        clanAccountID: t.clan_account_id,
                        creatorID: t,
                      }),
                  bSmallFormat: d,
                  bMinimalDisplay: g,
                }),
              })
            : null;
      }
      function B(e) {
        const { appid: t, bSmallFormat: n } = e,
          r = E(t);
        return r
          ? (0, o.jsx)(c.tH, {
              children: (0, o.jsx)(x, {
                rgCreators: r,
                renderCreator: (e) =>
                  (0, o.jsx)(j, { creatorID: e, bSmallFormat: n }),
              }),
            })
          : (0, o.jsx)("div", {
              className: f.DevSummaryWidgetCtn,
              children: (0, o.jsx)(u.t, {}),
            });
      }
    },
    77021: (e, t, n) => {
      n.d(t, {
        D2: () => m,
        PM: () => g,
        TU: () => l,
        lM: () => p,
        ty: () => d,
      });
      var o = n(34629),
        r = n(90626),
        s = n(84933),
        a = n(14947),
        i = n(95034),
        c = n(65946),
        u = n(62641);
      class l {
        m_sParentOrigin;
        m_eventModelJson = void 0;
        m_setMouseOverSectionID = a.sH.set();
        m_setMouseOverSubsectionID = a.sH.set();
        m_jumpToSection = void 0;
        m_jumpToSubsection = void 0;
        static s_Singleton;
        static Get() {
          return l.s_Singleton || (l.s_Singleton = new l()), l.s_Singleton;
        }
        constructor() {
          (0, a.Gn)(this),
            window.opener &&
              ((this.m_sParentOrigin = (0, i.f3)(
                location.search,
                "parentOrigin",
              )),
              window.addEventListener("message", this.HandleMessage),
              window.addEventListener("beforeunload", () =>
                window.opener.postMessage(
                  { message: "PartnerEventEditor_ClientUnready" },
                  this.m_sParentOrigin,
                ),
              ),
              window.opener.postMessage(
                { message: "PartnerEventEditor_ClientReady" },
                this.m_sParentOrigin,
              ));
        }
        BIsConnected() {
          return !(!window.opener || !this.m_eventModelJson);
        }
        GetEventModelJson() {
          return this.m_eventModelJson;
        }
        GetMouseOverSectionID() {
          return this.m_setMouseOverSectionID.size > 0
            ? this.m_setMouseOverSectionID.values().next().value
            : void 0;
        }
        GetMouseOverSubsectionID() {
          return this.m_setMouseOverSubsectionID.size > 0
            ? this.m_setMouseOverSubsectionID.values().next().value
            : void 0;
        }
        GetJumpToSectionID() {
          return this.m_jumpToSection;
        }
        GetJumpToSubsectionIDs() {
          return this.m_jumpToSubsection;
        }
        ClearJumpToSectionID() {
          (0, a.h5)(() => (this.m_jumpToSection = void 0));
        }
        ClearJumpToSubectionID() {
          (0, a.h5)(() => (this.m_jumpToSubsection = void 0));
        }
        PostMessage(e) {
          window.opener &&
            this.m_sParentOrigin &&
            window.opener.postMessage(e, this.m_sParentOrigin);
        }
        SetMouseOverSection(e, t) {
          if (!this.BIsConnected()) return;
          const n = {
            message: "PartnerEventEditor_MouseOverViewSection",
            nSectionID: e,
            bMouseOver: t,
          };
          this.PostMessage(n);
        }
        SetMouseOverSubsection(e, t) {
          if (!this.BIsConnected()) return;
          const n = {
            message: "PartnerEventEditor_MouseOverViewSubsection",
            strSubsectionID: e,
            bMouseOver: t,
          };
          this.PostMessage(n);
        }
        JumpToSection(e) {
          if (!this.BIsConnected()) return;
          const t = {
            message: "PartnerEventEditor_JumpToViewSection",
            nSectionID: e,
          };
          this.PostMessage(t);
        }
        HandleMessage(e) {
          if (e.origin != this.m_sParentOrigin) return;
          const t =
            e.data && "object" == typeof e.data && "message" in e.data
              ? e.data
              : null;
          if (t)
            switch (t.message) {
              case "PartnerEventEditor_Update":
                if ("eventModelJson" in t && t.eventModelJson) {
                  const e = t;
                  (0, a.h5)(() => (this.m_eventModelJson = e.eventModelJson));
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, a.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSectionID.add(e.nSectionID)
                      : this.m_setMouseOverSectionID.delete(e.nSectionID);
                  });
                }
                break;
              case "PartnerEventEditor_MouseOverEditorSubsection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, a.h5)(() => {
                    e.bMouseOver
                      ? this.m_setMouseOverSubsectionID.add(e.strSubsectionID)
                      : this.m_setMouseOverSubsectionID.delete(
                          e.strSubsectionID,
                        );
                  });
                }
                break;
              case "PartnerEventEditor_JumpToEditorSection":
                if ("nSectionID" in t) {
                  const e = t;
                  (0, a.h5)(() => (this.m_jumpToSection = e.nSectionID));
                }
                break;
              case "PartnerEventEditor_JumpToEditorSubection":
                if ("strSubsectionID" in t) {
                  const e = t;
                  (0, a.h5)(() => {
                    (this.m_jumpToSection = e.nSectionID),
                      (this.m_jumpToSubsection = {
                        nSectionID: e.nSectionID,
                        strSubsectionID: e.strSubsectionID,
                      });
                  });
                }
            }
        }
      }
      function d() {
        return (0, c.q3)(() => l.Get().BIsConnected());
      }
      function m() {
        const e = (0, c.q3)(() => l.Get().GetEventModelJson());
        return r.useMemo(() => {
          if (!e) return;
          const t = u.lh.FromJSON(e);
          return (t.rtime32_last_modified = Math.floor(Date.now() / 1e3)), t;
        }, [e]);
      }
      function p(e) {
        const t = (0, c.q3)(() => l.Get().GetJumpToSectionID());
        r.useEffect(() => {
          if (!l.Get().BIsConnected() || !t) return;
          e(t) && l.Get().ClearJumpToSectionID();
        }, [e, t]);
      }
      function g(e) {
        const t = (0, c.q3)(() => l.Get().GetJumpToSubsectionIDs());
        r.useEffect(() => {
          if (!l.Get().BIsConnected() || !t) return;
          e(t.nSectionID, t.strSubsectionID) &&
            l.Get().ClearJumpToSubectionID();
        }, [e, t]);
      }
      (0, o.Cg)([a.sH], l.prototype, "m_eventModelJson", void 0),
        (0, o.Cg)([a.sH], l.prototype, "m_setMouseOverSectionID", void 0),
        (0, o.Cg)([a.sH], l.prototype, "m_setMouseOverSubsectionID", void 0),
        (0, o.Cg)([a.sH], l.prototype, "m_jumpToSection", void 0),
        (0, o.Cg)([a.sH], l.prototype, "m_jumpToSubsection", void 0),
        (0, o.Cg)([s.oI], l.prototype, "HandleMessage", null);
    },
    17289: (e, t, n) => {
      n.d(t, { m: () => i });
      var o = n(7850),
        r = n(45699),
        s = n(66418),
        a = n(2160);
      function i(e) {
        const { href: t, children: n, bAllowFocuseableAnchor: i, ...c } = e;
        return s.TS.EREALM === a.TU.k_ESteamRealmChina
          ? (0, o.jsx)("div", { ...c, children: n })
          : i
            ? (0, o.jsx)(r.Ii, { href: t, ...c, children: n })
            : (0, o.jsx)("a", { href: t, ...c, children: n });
      }
    },
  },
]);
