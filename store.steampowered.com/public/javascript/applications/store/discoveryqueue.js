/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
        BackgroundAnimation: "_1Z5QxYX1JW3xFfBP4Olbj8",
        "ItemFocusAnim-darkerGrey-nocolor": "_2-B-maYes-hWNZaATdM3tO",
        "ItemFocusAnim-darkerGrey": "_7SrvWzxxGnhg_rsCG_oIn",
        "ItemFocusAnim-darkGreySettings": "_2XbtC6kB1lhuX_TsQSZLwO",
        "ItemFocusAnim-darkGrey": "_1eAeT6Xs-BGjbRYdD0Wir2",
        "ItemFocusAnim-grey": "_3EzLQA3urt8YNbSeiYzqLQ",
        "ItemFocusAnim-translucent-white-10": "_3dWS2PSA5ggPqUc4QB-P1Z",
        "ItemFocusAnim-translucent-white-20": "_2qWHGTZs1PRzk_FzWgYwvS",
        "ItemFocusAnimBorder-darkGrey": "_1gEGV4txNqIr0COruFARVh",
        "ItemFocusAnim-green": "_1kT_vT6X_21tgdACN3MD1r",
        focusAnimation: "_2VIlPFJOxlK-lazFTkek7v",
        hoverAnimation: "I3jGaAXmpxTOQldGALnOQ",
      };
    },
    14336: (e, t, a) => {
      "use strict";
      a.d(t, { mK: () => C, DW: () => y, js: () => _, tb: () => g });
      var n = a(90626),
        i = a(80902),
        s = a(54806),
        r = a(22837),
        o = a(23809),
        l = a(44654),
        c = a(10622),
        d = a(17720),
        m = a(42457),
        u = a(58632),
        h = a.n(u);
      function p(e, t) {
        return new (h())(
          async (t) => {
            const a = [...t],
              n = await m.xt.GetPlayerLinkDetails(e, { steamids: a }),
              i = new Map();
            return (
              n
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  i.set(t.public_data.steamid, t);
                }),
              a.map((e) => i.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        const t = (0, o.KV)(),
          a = n.useContext(f);
        return (0, i.I)(C(a, t, e));
      }
      function y(e) {
        const t = (0, o.KV)(),
          a = n.useContext(f);
        return (0, s.E)({ queries: e.map((e) => C(a, t, e)) });
      }
      const f = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (S ??= p(e));
          })(t).load(d.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let a = new c.Z(e);
            const n = t?.public_data,
              i = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = i?.persona_state ?? r.cU3),
              (a.m_strAvatarHash = n?.sha_digest_avatar
                ? (0, l.Kx)(n.sha_digest_avatar)
                : c.dV),
              (a.m_strPlayerName = n?.persona_name ?? e.ConvertTo64BitString()),
              (a.m_strAccountName = i?.account_name),
              i?.persona_state_flags &&
                (a.m_unPersonaStateFlags = i?.persona_state_flags);
            i?.game_id && (a.m_gameid = i?.game_id);
            i?.game_server_ip_address &&
              (a.m_unGameServerIP = i?.game_server_ip_address);
            i?.lobby_steam_id && (a.m_game_lobby_id = i?.lobby_steam_id);
            i?.game_extra_info && (a.m_strGameExtraInfo = i?.game_extra_info);
            n?.profile_url && (a.m_strProfileURL = n.profile_url);
            return a;
          })(d.b.InitFromAccountID(e), a);
        },
      });
      function g() {
        return n.useContext(f);
      }
      function C(e, t, a) {
        const n = "string" == typeof a ? new d.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let S;
    },
    93973: (e, t, a) => {
      "use strict";
      a.d(t, {
        CC: () => x,
        Oz: () => S,
        Qt: () => w,
        lu: () => I,
        ns: () => v,
        os: () => A,
      });
      var n = a(34629),
        i = a(37085),
        s = a(56545),
        r = a(72034),
        o = a(46371),
        l = a(81393),
        c = a(78327),
        d = a(90626),
        m = a(68797),
        u = a(6144),
        h = a(84933),
        p = a(14947),
        _ = a(40259),
        y = a(37621),
        f = a(23809),
        g = a(80902);
      class C {
        m_claimState = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new u.lu();
        m_testNextClaimFakeResponse = null;
        m_bInTestMode = !1;
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(e) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            e.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: y.Ed,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(e) {
          const t = s.w.Init(_.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const a = await _.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            a.GetEResult() != i.R &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${a.GetEResult()}`,
              ),
            a.GetEResult()
          );
        }
        async LoadCanUserClaimItem() {
          return this.m_bInTestMode
            ? this.m_claimState
            : (this.m_canClaimPromise ||
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
              this.m_canClaimPromise);
        }
        async InternalLoadCanUserClaimItem() {
          (0, l.wT)(
            c.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = s.w.Init(o.c3);
          e.Body().set_language(c.TS.LANGUAGE);
          let t = null;
          try {
            const a = await o.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (a.GetEResult() == i.R)
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  a.Body().reward_item()?.defid(),
                )
                  ? a.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!a.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (a.Body().next_claim_time() ?? 0) > 0
                      ? a.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = a.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            t = (0, m.H)(a);
          } catch (e) {
            t = (0, m.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, p.HO)(this.m_testNextClaimFakeResponse),
              ),
              (this.m_claimState = this.m_testNextClaimFakeResponse),
              this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
              (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
              this.SetClaimTimer(),
              (this.m_testNextClaimFakeResponse = null)),
            this.m_bInTestMode
              ? this.m_claimState
              : (this.m_claimPromise ||
                  (this.m_claimPromise = this.InternalUserClaimItem()),
                this.m_claimPromise)
          );
        }
        async InternalUserClaimItem() {
          (0, l.wT)(
            c.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, l.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = s.w.Init(o.wt);
          e.Body().set_language(c.TS.LANGUAGE);
          let t = null;
          try {
            const a = await o.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (a.GetEResult() == i.R)
              return (
                (this.m_claimedFreeItemDef =
                  a.Body().reward_item()?.toObject() ?? {}),
                (this.m_claimState = {
                  bCanClaimNewItem: !1,
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef.community_item_class,
                  rtNextClaimTime:
                    (a.Body().next_claim_time() ?? 0) > 0
                      ? a.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = a.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (a.GetEResult() == i.Ze)
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, m.H)(a);
          } catch (e) {
            t = (0, m.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const e = Date.now();
          let t = new Date(1e3 * this.m_rtNextClaimTime);
          const a = Math.max(0, Math.min(1, t.getTime() - e));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > t.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState,
                    ))
                  : this.SetClaimTimer();
            },
            a > 3e5 ? a / 2 : a,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            C.s_Singleton ||
              ((C.s_Singleton = new C()),
              C.s_Singleton.Init(),
              "dev" == c.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = C.s_Singleton)),
            C.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, c.Tc)("loyalty_webapi_token", "application_config");
          (0, l.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new r.D(c.TS.WEBAPI_BASE_URL, e));
        }
      }
      function S() {
        const [e, t] = (0, d.useState)(C.Get().GetClaimItemState()),
          [a, n] = (0, d.useState)(!0);
        return (
          (0, d.useEffect)(() => {
            C.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => n(!1));
          }, []),
          (0, h.hL)(C.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: a }
        );
      }
      function x() {
        return { fnClaimItem: C.Get().UserClaimItem };
      }
      function I() {
        return { fnSetClaimState: C.Get().TEST_OverrideClaimState };
      }
      async function v(e) {
        return C.Get().ActivateProfileModifier(e);
      }
      function w(e, t, a) {
        const n = (0, f.KV)();
        return (0, g.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${a}`],
          queryFn: async () =>
            (async function (e, t, a, n) {
              const i = s.w.Init(o.R4);
              return (
                i.Body().set_sale_def_type(t),
                i.Body().set_language(a),
                i.Body().set_include_community_item_def(n),
                (await o.Qm.GetCurrentDefinition(e, i)).Body().toObject()
              );
            })(n, e, t, a),
          staleTime: 1 / 0,
        });
      }
      function A(e, t, a, n) {
        const i = (0, f.KV)();
        return (0, g.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${a}_${n}`],
          queryFn: async () =>
            (async function (e, t, a, n) {
              const i = s.w.Init(o.Ju);
              return (
                i.Body().set_sale_def_type(t),
                i.Body().set_language(a),
                i.Body().set_include_community_item_def(n),
                (await o.Qm.GetClaimedSaleRewards(e, i)).Body().toObject()
              );
            })(i, e, t, a),
          staleTime: 1 / 0,
        });
      }
      (0, n.Cg)([h.oI], C.prototype, "TEST_OverrideClaimState", null),
        (0, n.Cg)([h.oI], C.prototype, "UserClaimItem", null);
    },
    69409: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => h });
      var n = a(7850),
        i = a(90626),
        s = a(22837),
        r = a(38390),
        o = a(52038),
        l = a(61859),
        c = a(61336),
        d = a(78327),
        m = a(15392),
        u = a(27666);
      function h(e) {
        const { gidEvent: t } = e,
          a = (0, r.RR)(t),
          [h, p] = (0, i.useMemo)(() => {
            if (
              a?.jsondata?.localized_sale_product_banner?.length > 0 &&
              a?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, s.sfN)(d.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  a.jsondata.localized_sale_product_banner,
                  e,
                ),
                n = l.NT.GetWithFallback(
                  a.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && n?.length > 0)
                return [
                  u.z.GenerateURLFromHashAndExt(a.clanSteamID, t),
                  u.z.GenerateURLFromHashAndExt(a.clanSteamID, n),
                ];
            }
            return [null, null];
          }, [a]);
        return h?.length > 0 && p?.length > 0
          ? (0, n.jsxs)("a", {
              href: (0, c.k2)(a.GetSaleURL()),
              className: m.Link,
              children: [
                (0, n.jsx)("img", {
                  src: h,
                  className: (0, o.A)(m.Banner, m.Big),
                }),
                (0, n.jsx)("img", {
                  src: p,
                  className: (0, o.A)(m.Banner, m.Mobile),
                }),
              ],
            })
          : null;
      }
    },
    30769: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Qe });
      var n = a(90626),
        i = a(7850),
        s = a(45699),
        r = a(76217),
        o = a(37788),
        l = a(23310),
        c = a(46371),
        d = a(23809),
        m = a(62093),
        u = a(60014),
        h = a(13871),
        p = a(30894),
        _ = a(93973),
        y = a(16021),
        f = a(55263),
        g = a(12155),
        C = a(32630),
        S = a(4434),
        x = a(52038),
        I = a(61859),
        v = a(60778),
        w = a(25489),
        A = a(44691),
        D = a(78327),
        b = a(39199),
        j = a(40594);
      const T = ({ nPercent: e, size: t = 120, strokeWidth: a = 20 }) => {
        const n = (t - a) / 2,
          s = 2 * Math.PI * n,
          r = s - (e / 100) * s,
          o = 100 == e;
        return (0, i.jsx)("div", {
          className: (0, x.A)({ [j.Circular]: !0, [j.Full]: o }),
          children: (0, i.jsxs)("svg", {
            width: t,
            height: t,
            style: { transform: "rotate(-90deg)" },
            children: [
              (0, i.jsx)("circle", {
                cx: t / 2,
                cy: t / 2,
                r: n,
                stroke: "#0c131d",
                strokeWidth: a,
                fill: "none",
              }),
              (0, i.jsx)("circle", {
                cx: t / 2,
                cy: t / 2,
                r: n,
                stroke: "#1a9fff",
                strokeWidth: a,
                fill: "none",
                strokeDasharray: s,
                strokeDashoffset: r,
                style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
              }),
            ],
          }),
        });
      };
      var N = a(22797),
        R = a(10224),
        G = a(43706),
        F = a(60779),
        Q = a(92834),
        B = a(3740),
        P = a(44986),
        L = a(32754),
        k = a(61336),
        E = a(20713),
        W = a(40807),
        O = a(80902),
        M = a(22837),
        U = a(1035),
        q = a(34181),
        z = a(17720),
        V = a(4796),
        H = a(67165),
        Z = a(75279),
        K = a(706),
        Y = a(37085),
        X = a(56545),
        $ = a(23134),
        J = a(56854),
        ee = a(41735),
        te = a.n(ee),
        ae = a(3734);
      class ne {
        static async LoadFriendsRecommendedApp(e, t) {
          const a = X.w.Init(J.KV);
          a.Body().set_appid(t);
          const n = await J.YK.GetFriendsRecommendedApp(e, a),
            i = n.GetEResult();
          if (i == Y.R) return n.Body().toObject();
          throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            a = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const n = (
            await te().get(
              `${D.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            n &&
              n.success == Y.R &&
              (n.results.similar_played_apps &&
                (a.arrSimilarPlayedApps = n.results.similar_played_apps.map(
                  (e) => ({
                    appid: e.appid,
                    playtimeForever: e.playtime_forever,
                  }),
                )),
              n.results.recommended_by_ir && (a.bRecommendedByIR = !0)),
            a
          );
        }
      }
      var ie = a(57834),
        se = a.n(ie),
        re = a(14336),
        oe = a(26505),
        le = a(6083);
      const ce = new v.wd("AppRelevance").Debug;
      function de(e) {
        const {
            appID: t,
            bShowAvatars: a,
            storeItem: s,
            bHideDescription: r,
            bShowCuratorInfo: o,
            bShowCreatorInfo: l,
          } = e,
          c = (0, oe.Nd)(t),
          m = (function (e) {
            const t = (0, d.KV)();
            return (0, O.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => ne.LoadFriendsRecommendedApp(t, e),
              enabled: D.iA.logged_in,
            });
          })(t),
          u = (function (e) {
            return (0, O.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => ne.LoadStoreRelevanceData(e),
              enabled: D.iA.logged_in,
            });
          })(t),
          h = (function () {
            const { data: e } = (0, ae.PG)("App Relevance Store Top Sellers", {
              sort: $.Dq.Rm,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          _ = (0, O.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              y.A.Get().QueueMultipleAppRequests(
                u.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: u.isSuccess,
          }),
          f = (function (e, t) {
            const a = (0, n.useMemo)(
              () => p.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, O.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  a?.map((e) => V.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && a && a.length > 0,
            });
          })(t, o),
          g = (0, n.useMemo)(() => {
            let e = [];
            return (
              s &&
                ((e = e.concat(
                  s
                    .GetAllFranchiseCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "franchise" })),
                )),
                (e = e.concat(
                  s
                    .GetAllDeveloperCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "developer" })),
                )),
                (e = e.concat(
                  s
                    .GetAllPublisherCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "publisher" })),
                )),
                (e = e.filter((e) =>
                  p.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [s]),
          C = (0, O.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              V.ac
                .LoadClanInfoForClanAccountID(g[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: g[0].type })),
            enabled: !!l && g && g.length > 0,
          }),
          S = (0, O.I)({
            queryKey: ["PlayerSummaries", t, a],
            queryFn: async () => {
              let e = [],
                t = [],
                n = [];
              const i = a ? 10 : 1;
              for (
                let t = 0;
                t < m.data.accountids_recommended?.length && t < i;
                t++
              ) {
                const a = z.b.InitFromAccountID(
                  m.data.accountids_recommended[t],
                );
                e.push(a.ConvertTo64BitString());
              }
              for (let e = 0; e < c.data.in_wishlist?.length && e < i; e++) {
                const a = new z.b(c.data.in_wishlist[e].steamid);
                t.push(a.ConvertTo64BitString());
              }
              for (let e = 0; e < c.data.owns?.length && e < i; e++) {
                const t = new z.b(c.data.owns[e].steamid);
                n.push(t.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: e,
                rgWishlistFriends: t,
                rgOwnedFriends: n,
              };
            },
            enabled: m.isSuccess && c.isSuccess,
          });
        if (
          !h ||
          _.isLoading ||
          u.isLoading ||
          m.isLoading ||
          c.isLoading ||
          f.isLoading ||
          C.isLoading ||
          S.isLoading
        )
          return (0, i.jsx)(N.t, { size: "medium", position: "center" });
        let v = [];
        u.isSuccess &&
          u.data.arrSimilarPlayedApps &&
          u.data.arrSimilarPlayedApps.forEach((e) => {
            const a = y.A.Get().GetApp(e.appid);
            a
              ? v.push(
                  (0, i.jsx)(
                    he,
                    { lifetimePlaytime: e.playtimeForever, storeItem: a },
                    e.appid,
                  ),
                )
              : console.error("Failed to load store data ", t);
          });
        const w = h.GetItemIDs().findIndex((e) => e.appid === t),
          A = u.data?.bRecommendedByIR,
          b = v.length > 0,
          j = c.data?.owns?.length,
          T = c.data?.in_wishlist?.length,
          R = m.data?.accountids_recommended?.length;
        let G = 0;
        return (
          j > 0 && G++,
          T > 0 && G++,
          R > 0 && G++,
          A && G++,
          w >= 0 && G++,
          v.length > 0 && G++,
          o && f?.data?.length > 0 && G++,
          l && Boolean(C.data) && G++,
          ce(
            "FriendsOwned: ",
            j,
            " FriendsWishlisted: ",
            T,
            "cRecommended: ",
            R,
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              G > 0 &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", {
                      className: se().WhyRelevant,
                      children: (0, I.we)("#DiscoveryQueue_WhyRelevant"),
                    }),
                    (0, i.jsxs)("div", {
                      role: "list",
                      className: se().RelevantCtn,
                      children: [
                        b &&
                          (0, i.jsx)(ge, {
                            header: (0, I.we)("#DiscoveryQueue_SimilarGames"),
                            children: (0, i.jsx)("div", {
                              className: se().ReleventSimilarAppsCtn,
                              children: v,
                            }),
                          }),
                        o &&
                          f?.data?.length > 0 &&
                          (0, i.jsx)(ge, {
                            header: (0, I.we)(
                              "#ContentHub_Recommendation_Curators",
                            ),
                            children: (0, i.jsx)("div", {
                              className: (0, x.A)(
                                se().ReleventSimilarAppsCtn,
                                se().RecommendingCuratorsCtn,
                              ),
                              children: f.data
                                .filter(Boolean)
                                .map((e) =>
                                  (0, i.jsx)(
                                    ue,
                                    { curator: e },
                                    "curator_" + e.clanAccountID,
                                  ),
                                ),
                            }),
                          }),
                        l &&
                          Boolean(C.data) &&
                          (0, i.jsx)(me, { creatorInfo: C.data }),
                        w >= 0 &&
                          (0, i.jsx)(ge, {
                            header: (0, I.um)(
                              "#DiscoveryQueue_TopSellers",
                              (0, le.D)(w + 1),
                              (0, i.jsx)("span", {
                                className: se().RelevantTextBold,
                              }),
                            ),
                          }),
                        A &&
                          !b &&
                          (0, i.jsx)(ge, {
                            header: (0, I.we)(
                              "#DiscoveryQueue_RecommendedByIR",
                            ),
                          }),
                        (0, i.jsx)(pe, {
                          bShowAvatars: a,
                          count: m.data?.accountids_recommended?.length,
                          locToken: "#DiscoveryQueue_FriendsRecommended",
                          arrSteamIDs: S.data?.rgRecommendedFriends,
                        }),
                        (0, i.jsx)(pe, {
                          bShowAvatars: a,
                          count: c.data?.owns?.length,
                          locToken: "#DiscoveryQueue_FriendsOwned",
                          arrSteamIDs: S.data?.rgOwnedFriends,
                        }),
                        (0, i.jsx)(pe, {
                          bShowAvatars: a,
                          count: c.data?.in_wishlist?.length,
                          locToken: "#DiscoveryQueue_FriendsWishlisted",
                          arrSteamIDs: S.data?.rgWishlistFriends,
                        }),
                      ],
                    }),
                  ],
                }),
              r && 0 != G
                ? (0, i.jsx)("div", { "aria-label": s.GetShortDescription() })
                : (0, i.jsx)("div", {
                    className: (0, x.A)(se().AppDescription, G && se().Divider),
                    children: s.GetShortDescription(),
                  }),
            ],
          })
        );
      }
      function me(e) {
        const { creatorInfo: t } = e;
        if (!t) return null;
        let a;
        switch (t.type) {
          case "publisher":
            a = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            a = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            a = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return a
          ? (0, i.jsx)(ge, {
              header: (0, I.PP)(
                a,
                (0, i.jsx)("span", {
                  className: se().RelevantTextBold,
                  children: t.clanInfo?.group_name,
                }),
              ),
            })
          : null;
      }
      function ue(e) {
        const { curator: t } = e,
          { creatorHome: a } = (0, H.FV)(t?.clanAccountID);
        return t && a
          ? (0, i.jsx)(s.Ii, {
              href: a.GetCreatorHomeURL(null),
              children: (0, i.jsx)("img", { src: t.avatar_medium_url }),
            })
          : null;
      }
      function he(e) {
        const { lifetimePlaytime: t, storeItem: a } = e,
          n = (0, Z.DJ)(a);
        return (0, i.jsx)("div", {
          className: se().SimilarAppCtn,
          children: (0, i.jsx)(K.Q, {
            id: n,
            bHidePrice: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, i.jsx)("img", {
              className: se().SimilarAppImg,
              alt: a.GetName(),
              src: a.GetAssets().GetSmallCapsuleURL(),
            }),
          }),
        });
      }
      function pe(e) {
        const { arrSteamIDs: t, count: a, locToken: n, bShowAvatars: s } = e;
        return a
          ? 1 != a || s
            ? (0, i.jsx)(ge, {
                header: (0, I.um)(
                  n,
                  a,
                  (0, i.jsx)("span", { className: se().RelevantTextBold }),
                ),
                children:
                  s &&
                  t.length > 0 &&
                  (0, i.jsx)("div", {
                    className: se().FriendAvatarsCtn,
                    children:
                      1 == a
                        ? (0, i.jsx)(fe, { steamid: t[0] })
                        : (0, i.jsx)(ye, { arrSteamIDs: t }),
                  }),
              })
            : (0, i.jsx)(ge, {
                header: (0, I.PP)(
                  n + "_Single",
                  (0, i.jsx)(_e, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function _e(e) {
        const { steamid: t } = e,
          { data: a } = (0, re.js)(t);
        return a && a.m_bInitialized
          ? (0, i.jsx)("span", {
              "data-miniprofile": "s" + a.m_steamid.ConvertTo64BitString(),
              className: se().RelevantTextBold,
              children: a.m_strPlayerName,
            })
          : null;
      }
      function ye(e) {
        const { arrSteamIDs: t } = e,
          a = (0, re.DW)(t);
        return (0, i.jsx)(i.Fragment, {
          children: a.map(
            ({ data: e }) =>
              e &&
              (0, i.jsx)(
                U.i8,
                {
                  "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                  persona: e,
                  size: "Small",
                  statusPosition: "right",
                },
                e.m_steamid.ConvertTo64BitString(),
              ),
          ),
        });
      }
      function fe(e) {
        const { steamid: t } = e,
          { data: a } = (0, re.js)(t);
        return a
          ? (0, i.jsxs)(r.Z, {
              className: se().FriendBlockCtn,
              "data-miniprofile": "s" + t,
              children: [
                (0, i.jsx)(U.i8, {
                  persona: a,
                  size: "Small",
                  statusPosition: "right",
                }),
                (0, i.jsx)(q.D, {
                  className: se().PersonaStatus,
                  persona: a,
                  eFriendRelationship: M._UC,
                  bIsSelf: !1,
                  strNickname: null,
                  bParenthesizeNicknames: !1,
                  bCompactView: !1,
                  bNoMask: !0,
                }),
              ],
            })
          : null;
      }
      function ge(e) {
        const { children: t, header: a } = e;
        return (0, i.jsxs)("div", {
          className: se().RelevantItem,
          children: [
            (0, i.jsx)("div", {
              className: se().RelevantCheck,
              children: (0, i.jsx)(g.Jlk, {}),
            }),
            (0, i.jsxs)("div", {
              className: se().RelevantColumn,
              children: [
                (0, i.jsx)("div", {
                  className: se().ReleventText,
                  children: a,
                }),
                t,
              ],
            }),
          ],
        });
      }
      var Ce = a(43188),
        Se = a(24267),
        xe = a(35380);
      new v.wd("DiscoveryQueueApp").Debug;
      function Ie(e) {
        const {
            appID: t,
            nItemHeight: a,
            nItemWidth: s,
            selected: o,
            fnFocused: l,
            eStoreDiscoveryQueueType: c,
            storePageFilter: d,
            bPreferDemoStorePage: m,
            elVideo: u,
            elDetails: p,
            appAriaIDs: _,
          } = e,
          [y] = (0, f.t7)(t, Ce.Gy),
          g = (0, D.Qn)(),
          C = (0, h.R7)(),
          S = C?.ownerWindow || window,
          v = ve(y, c, d, m),
          { bIsIgnored: w, fnUpdateIgnored: A } = (0, Ce.TK)(t),
          { bIsWishlisted: b, fnUpdateWishlist: j } = (0, Ce.u4)(t),
          T = n.useRef(void 0);
        if (
          (n.useEffect(() => {
            o && T.current && T.current.focus({ preventScroll: !0 });
          }, [o]),
          !y)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const N = { width: s || void 0, height: a || void 0 };
        return (0, i.jsxs)(r.Z, {
          "aria-labelledby": (0, Q.q)(
            _.nameId,
            _.tagsId,
            _.reviewId,
            _.relevanceId,
            _.buttonsId,
          ),
          ref: T,
          style: N,
          className: (0, x.A)(se().DiscoveryQueueApp, o && se().Selected),
          onOptionsActionDescription: b
            ? (0, I.we)("#DiscoveryQueue_RemoveFromWishlist")
            : (0, I.we)("#DiscoveryQueue_AddToWishlist"),
          onOptionsButton: j,
          onOKActionDescription: (0, I.we)("#DiscoveryQueue_ViewStorePage"),
          onOKButton: () => {
            S.location.href = v;
          },
          onSecondaryActionDescription: w
            ? (0, I.we)("#DiscoveryQueue_Undo")
            : (0, I.we)("#DiscoveryQueue_IgnoreLink"),
          onSecondaryButton: A,
          fnScrollIntoViewHandler: () => (l(), !0),
          children: [
            (0, i.jsx)("div", {
              className: (0, x.A)(se().IgnoredCtn, w && se().Active),
              children: (0, i.jsxs)("div", {
                className: (0, x.A)(se().IgnoredInfo, w && se().Active),
                children: [
                  (0, i.jsx)("div", {
                    className: se().IgnoredTitle,
                    children: (0, I.we)("#DiscoveryQueue_Ignored"),
                  }),
                  (0, i.jsx)("div", {
                    className: se().IgnoredDescription,
                    children: (0, I.we)("#DiscoveryQueue_IgnoredConfirmation"),
                  }),
                  (0, i.jsxs)(r.Z, {
                    className: (0, x.A)(
                      se().QueueButton,
                      se().UndoIgnoreButton,
                    ),
                    onClick: A,
                    children: [
                      g &&
                        (0, i.jsx)(P.$m, {
                          button: E.g4.X,
                          type: P.wt.Light,
                          size: P.xY.Medium,
                        }),
                      (0, I.we)("#DiscoveryQueue_Undo"),
                    ],
                  }),
                ],
              }),
            }),
            u,
            p,
          ],
        });
      }
      function ve(e, t, a, i) {
        const s = (0, u.n9)();
        return n.useMemo(() => {
          if (!e) return;
          const n = (0, b.Bk)(a),
            r = t >= G.QV.qy ? "?inqueue=" + t + (a ? "_" + n : "") : "",
            o = (0, u.bV)(s, e.GetStorePageURL(i) + r);
          return (0, k.NT)(o);
        }, [i, t, s, e, a]);
      }
      function we(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: a,
            eStoreDiscoveryQueueType: n,
            storePageFilter: s,
            bPreferDemoStorePage: o,
            appAriaIDs: l,
          } = e,
          [c] = (0, f.t7)(t, Ce.Gy),
          d = (0, xe.$5)(t),
          { bIsIgnored: m, fnUpdateIgnored: u } = (0, Ce.TK)(t),
          { bIsWishlisted: h, fnUpdateWishlist: p } = (0, Ce.u4)(t),
          _ = ve(c, n, s, o),
          y = (0, D.Qn)(),
          C = y;
        if (!c) return;
        const S = c.GetAssets().GetLibraryCapsuleURL(),
          v = c.GetAssets().GetHeaderURL();
        return (0, i.jsxs)(r.Z, {
          className: se().AppDetailsCtn,
          children: [
            (0, i.jsxs)("div", {
              className: se().AppDetailsCtnTop,
              children: [
                S &&
                  (0, i.jsxs)("a", {
                    className: (0, x.A)(se().CapsuleLink),
                    href: _,
                    children: [
                      (0, i.jsx)("img", {
                        className: se().AppLibraryHero,
                        src: S,
                      }),
                      v &&
                        (0, i.jsx)("img", {
                          className: se().AppHeader,
                          src: v,
                        }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  id: l.nameId,
                  className: se().RightColumn,
                  children: [
                    (0, i.jsx)("a", {
                      className: (0, x.A)(se().AppName),
                      href: _,
                      children: c.GetName(),
                    }),
                    (0, i.jsx)(B.N, { bSingleLineMode: !0, id: d }),
                  ],
                }),
                (0, i.jsx)(Ae, {
                  rgTagIDs: c.GetTagIDs(),
                  ariaLabelID: l.tagsId,
                }),
                (0, i.jsx)("div", {
                  className: se().AppReviews,
                  id: l.reviewId,
                  children: (0, i.jsx)(Se.J, {
                    bShowTooltip: !0,
                    bTruncateTotalReviews: a,
                    id: d,
                  }),
                }),
                (0, i.jsx)("div", {
                  id: l.relevanceId,
                  className: se().AppRelevanceCtn,
                  children: (0, i.jsx)(de, {
                    bHideDescription: y,
                    bShowAvatars: !a,
                    storeItem: c,
                    appID: t,
                  }),
                }),
              ],
            }),
            !y &&
              (0, i.jsx)("div", {
                className: se().AppActionButtonsCtn,
                children: (0, i.jsx)("div", {
                  id: l.buttonsId,
                  className: se().AppActionJustButtonsCtn,
                  children: (0, i.jsxs)("div", {
                    className: se().ButtonsRowWrap,
                    children: [
                      c.BHasDemo() &&
                        (0, i.jsx)(W.j, {
                          id: d,
                          className: (0, x.A)(
                            se().QueueButton,
                            se().Primary,
                            se().Launch,
                          ),
                        }),
                      (0, i.jsxs)("a", {
                        className: (0, x.A)(se().QueueButton, se().Primary),
                        href: _,
                        children: [
                          C &&
                            (0, i.jsx)(P.$m, {
                              button: E.g4.Y,
                              type: P.wt.Light,
                              size: P.xY.Medium,
                              additionalClassName: se().YGlyph,
                            }),
                          " ",
                          (0, I.we)("#DiscoveryQueue_ViewStorePage"),
                        ],
                      }),
                      (0, i.jsx)(L.he, {
                        toolTipContent: h
                          ? (0, I.we)("#RemoveFromWishlist_ttip")
                          : (0, I.we)("#AddToWishlist_ttip"),
                        children: (0, i.jsxs)(r.Z, {
                          "aria-label": h
                            ? (0, I.we)("#Sale_RemoveFromWishlist")
                            : (0, I.we)("#Sale_AddToWishlist"),
                          focusable: !0,
                          className: (0, x.A)(
                            se().QueueButton,
                            h && se().Active,
                          ),
                          onClick: p,
                          children: [
                            C &&
                              (0, i.jsx)(P.$m, {
                                button: E.g4.Y,
                                type: P.wt.Light,
                                size: P.xY.Medium,
                                additionalClassName: se().YGlyph,
                              }),
                            h ? (0, i.jsx)(g.qnF, {}) : (0, i.jsx)(g.T4m, {}),
                          ],
                        }),
                      }),
                      (0, i.jsx)(L.he, {
                        toolTipContent: (0, I.we)(
                          "#SaleTrailerCarousel_IgnoreLink_ttip",
                        ),
                        children: (0, i.jsx)(r.Z, {
                          "aria-label": (0, I.we)("#DiscoveryQueue_IgnoreLink"),
                          focusable: !0,
                          className: (0, x.A)(
                            se().QueueButton,
                            m && se().Active,
                          ),
                          onClick: u,
                          children: (0, i.jsx)(g.NtH, {}),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      function Ae(e) {
        const { rgTagIDs: t, ariaLabelID: a } = e,
          n = [...(0, Ce.W3)(t)].slice(0, 8);
        return (0, i.jsx)("div", {
          id: a,
          role: "list",
          className: se().AppTagsCtn,
          children: n.map((e) =>
            (0, i.jsx)(F.Fz, { className: se().TagEntry, tagID: e }, e),
          ),
        });
      }
      var De = a(60884),
        be = a(90511),
        je = a(17376);
      const Te = new v.wd("DiscoveryQueueWizard").Debug,
        Ne = 1,
        Re = 1400,
        Ge = "discoveryqueue2022";
      async function Fe(e, t, a, n) {
        let i = [],
          s = !1;
        try {
          const { appids: r, exhausted: o } = await b.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, n);
          (i = [...r]),
            (s = o),
            a && -1 === i.findIndex((e) => e === a) && i.unshift(a),
            await y.A.Get().QueueMultipleAppRequests(i, { ...Ce.Gy, ...be.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: i, exhausted: s };
      }
      function Qe(e) {
        const [t, a] = n.useState(!1),
          s = (0, d.KV)();
        return (
          (0, n.useEffect)(() => {
            b.aI.Init(s), a(!0);
          }, [s]),
          t ? (0, i.jsx)(Be, { ...e }) : null
        );
      }
      function Be(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: a,
            includeAppID: o,
            storePageFilter: c,
            bPreferDemoStorePage: d,
            bShowAOAutoPlayWarning: _,
          } = e,
          [y, f] = n.useState(0),
          [v, j] = n.useState(void 0),
          [T, N] = n.useState(0),
          G = (0, h.R7)(),
          F = G?.ownerWindow || window,
          Q = (0, u.ru)(Ge),
          [B, P] = n.useState(0),
          L = (0, m.b)();
        (0, A.E)("ArrowLeft", () => M(!1), !0, !0),
          (0, A.E)("Left", () => M(!1), !0, !0),
          (0, A.E)("ArrowRight", () => M(!0), !0, !0),
          (0, A.E)("Right", () => M(!0), !0, !0),
          (0, A.E)("Escape", () => a?.(), !0, !0),
          (0, A.E)("Esc", () => a?.(), !0, !0);
        const E = n.useMemo(() => Boolean(F.innerWidth < Re), [F]),
          { fnGetDiscoveryQueue: W, rgAppIDs: O } = (function (e, t, a) {
            const [i, s] = n.useState([]),
              r = (0, S.m)("DiscoveryQueueWizard"),
              o = async (n) => {
                let { appids: o } = await Fe(e, !n, n && a, t);
                if (n && !o.length) {
                  let { appids: a } = await Fe(e, !0, void 0, t);
                  o = a;
                }
                if (!r?.token?.reason) {
                  const e = [...(i ?? []), ...o, Ne];
                  s(e);
                }
                Te("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: o, rgAppIDs: i };
          })(t, c, o);
        n.useEffect(() => {
          W(!0), p.Fm.Get().HintLoad();
        }, []),
          n.useEffect(() => {
            const e = O[y];
            e != v && (e && e != Ne && L.AddImpression(e, Q), j(e));
          }, [L, y, v, O, Q]);
        const M = (e) => {
          const t = w.OQ(y + (e ? 1 : -1), 0, O.length - 1);
          t != y &&
            (f(t), Te("New selected index: ", t, " Prev selected index: ", y));
        };
        n.useEffect(() => {
          O?.length &&
            O[y] !== Ne &&
            (P((e) => e + 1),
            b.aI
              .Get()
              .SkipDiscoveryQueueItem(O[y], t, c)
              .then(() => P((e) => e - 1)));
        }, [t, y, O, c]),
          n.useEffect(() => {
            O.length != T &&
              (N(O.length), O.length > T && O[y] == Ne && f(y + 1));
          }, [T, y, O]);
        const [U] = n.useState(new Map()),
          q = (0, b.WX)(t, c),
          z = !(0, R.c5)() && y > 0,
          V = !(0, R.c5)() && y < O.length - 1,
          {
            refContainer: H,
            bIsDragging: Z,
            nDragOffset: K,
            nDragSelectedOffsetIndex: Y,
            handleTouchStart: X,
            handleTouchMove: $,
            handleTouchEnd: J,
          } = (function (e, t) {
            const a = n.useRef(null),
              [i, s] = n.useState(0),
              [r, o] = n.useState(!1),
              [l, c] = n.useState(0),
              d = n.useRef(0),
              m = 50,
              u = (e) => {
                o(!0), (d.current = e.touches[0].clientX), s(0), c(0);
              },
              h = (e) => {
                if (!r) return;
                const t = e.touches[0].clientX - d.current;
                s(t), c(i > m ? 1 : i < -m ? -1 : 0);
              },
              p = () => {
                r &&
                  (o(!1),
                  i > m
                    ? e((e) => Math.max(e - 1, 0))
                    : i < -m && e((e) => Math.min(e + 1, t - 1)),
                  s(0),
                  c(0));
              };
            return {
              refContainer: a,
              bIsDragging: r,
              nDragOffset: i,
              nDragSelectedOffsetIndex: l,
              handleTouchStart: u,
              handleTouchMove: h,
              handleTouchEnd: p,
            };
          })((e) => f(e), O.length),
          ee = (e) => w.W(y + e, O) && (w.LA(e, -1, 1) || Z),
          te = (0, u.aL)(D.TS.STORE_BASE_URL + "explore?dq=widget"),
          ae = O[y] !== Ne,
          { nQueueStart: ne, nCount: ie } = (function (e, t) {
            let a = 0;
            for (let n = 0; n < e; n++) t[n] == Ne && (a = n + 1);
            let n = 0;
            for (let a = e; a < t.length; a++) {
              if (t[a] == Ne) {
                n = a;
                break;
              }
              a == t.length - 1 && (n = t.length);
            }
            const i = n - a;
            return { nQueueStart: a, nQueueEnd: n, nCount: i };
          })(y, O);
        return (0, i.jsx)(C.Ay, {
          feature: Ge,
          children: (0, i.jsx)(r.Z, {
            role: "dialog",
            focusable: !1,
            "flow-children": "column",
            className: se().DiscoveryQueueCarouselCtn,
            navEntryPreferPosition: l.iU.LAST,
            onCancelButton: () => a?.(),
            onCancelActionDescription: (0, I.we)("#Button_Close"),
            children: (0, i.jsxs)("div", {
              className: se().DiscoveryQueueWrapper,
              onClick: (e) => {
                e.target == e.currentTarget && (a?.(), e.stopPropagation());
              },
              children: [
                q.length > 0 &&
                  (0, i.jsx)(r.Z, {
                    "flow-children": "row",
                    className: se().DiscoveryQueueName,
                    children: q,
                  }),
                (0, i.jsxs)(r.Z, {
                  "flow-children": "row",
                  className: se().TopBarCtn,
                  children: [
                    (0, i.jsx)(r.Z, {
                      className: se().LearnMore,
                      children: (0, I.oW)(
                        "#DiscoveryQueue_LearnMore_Default",
                        (0, i.jsx)(s.Ii, {
                          className: se().LearnMoreLink,
                          href: (0, k.NT)(te),
                        }),
                      ),
                    }),
                    (0, i.jsx)(r.Z, {
                      className: se().ControlsCtn,
                      children: (0, i.jsx)(r.Z, {
                        focusable: !0,
                        className: se().QueueButton,
                        onClick: a,
                        "aria-label": (0, I.we)("#Button_Close"),
                        onActivate: () => a && a(),
                        children: (0, i.jsx)(g.X, {}),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(r.Z, {
                  role: "button",
                  "aria-label": (0, I.we)("#Carousel_Next"),
                  onClick: () => M(!1),
                  className: (0, x.A)(
                    se().QueueNavArrow,
                    se().LeftArrow,
                    z && se().Enable,
                  ),
                  children: (0, i.jsx)(g.l8x, { angle: 180 }),
                }),
                (0, i.jsx)(r.Z, {
                  role: "button",
                  "aria-label": (0, I.we)("#Carousel_Prev"),
                  onClick: () => M(!0),
                  className: (0, x.A)(
                    se().QueueNavArrow,
                    se().RightArrow,
                    V && se().Enable,
                  ),
                  children: (0, i.jsx)(g.l8x, { angle: 0 }),
                }),
                (0, i.jsx)(r.Z, {
                  ref: H,
                  className: se().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: X,
                  onTouchMove: $,
                  onTouchEnd: J,
                  children: [-2, -1, 0, 1, 2].map((e) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: (0, x.A)({
                          [se().DiscoveryQueueItemPositioner]: !0,
                          [se().Dragging]: Z,
                          [se().InRange]: ee(e),
                          [se().FarLeft]: -2 == e,
                          [se().Left]: -1 == e,
                          [se().Current]: 0 == e,
                          [se().Right]: 1 == e,
                          [se().FarRight]: 2 == e,
                          [se().Selected]: e + Y == 0,
                        }),
                        style: { "--dragOffsetX": `${K}px` },
                        children:
                          ee(e) &&
                          (0, i.jsx)(Pe, {
                            eStoreDiscoveryQueueType: t,
                            storePageFilter: c,
                            rgAppIDs: O,
                            index: y + e,
                            bShowMinimizedDisplay: E,
                            selectedIndex: y,
                            bPreferDemoStorePage: Boolean(d),
                            mapViewedAppCount: U,
                            fnCloseModal: a,
                            fnLoadNextQueue: () => W(!1),
                            fnAdvance: M,
                            bSkipAppRequestPending: Boolean(0 != B),
                            showAOAutoPlayWarning: Boolean(_),
                          }),
                      },
                      y + e,
                    ),
                  ),
                }),
                (0, i.jsx)(De.A, {
                  className: (0, x.A)(!ae && se().ProgressHidden),
                  showPriorAsActive: !0,
                  count: ie,
                  selectedIndex: y - ne,
                }),
              ],
            }),
          }),
        });
      }
      function Pe(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: a,
            rgAppIDs: s,
            index: r,
            bShowMinimizedDisplay: o,
            selectedIndex: l,
            bPreferDemoStorePage: c,
            mapViewedAppCount: d,
            fnCloseModal: m,
            fnLoadNextQueue: u,
            fnAdvance: h,
            bSkipAppRequestPending: p,
            showAOAutoPlayWarning: _,
          } = e,
          [y, f] = n.useState(!1),
          g = {
            nameId: n.useId(),
            tagsId: n.useId(),
            reviewId: n.useId(),
            relevanceId: n.useId(),
            buttonsId: n.useId(),
          },
          C = () => {
            l != r && h(r > l);
          },
          S = l === r,
          x = n.useRef(S);
        if (
          (n.useEffect(() => {
            const e = x.current;
            if (((x.current = S), e && !S)) {
              f(!0);
              const e = setTimeout(() => f(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [S]),
          s[r] == Ne)
        ) {
          let i = 0;
          for (let e = r - 1; e >= 0; e--) s[e] == Ne && (i += 1);
          let o = 0;
          for (let e = r - 1; e >= 0 && s[e] !== Ne; e--) o++;
          return (
            d.has(i) ||
              d.set(i, b.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, a)),
            (0, n.createElement)(Le, {
              ...e,
              key: l,
              selected: S,
              lastCard: l == s.length - 1,
              fnLoadNextQueue: u,
              fnCloseModal: m,
              summaryCardIndex: i,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (d.get(i) || 0) + o,
              fnFocused: C,
              fnAdvance: () => h(!0),
              bSkipAppRequestPending: p,
            })
          );
        }
        const I = S || x.current || y;
        return (0, i.jsx)(Ie, {
          appAriaIDs: g,
          eStoreDiscoveryQueueType: t,
          storePageFilter: a,
          selected: S,
          appID: s[r],
          bPreferDemoStorePage: c,
          fnFocused: C,
          elVideo: (0, i.jsx)(Ce.y3, {
            appID: s[r],
            focused: I,
            showAOAutoPlayWarning: _,
          }),
          elDetails: (0, i.jsx)(we, {
            appID: s[r],
            bShowMinimizedDisplay: o,
            eStoreDiscoveryQueueType: t,
            storePageFilter: a,
            bPreferDemoStorePage: c,
            appAriaIDs: g,
          }),
        });
      }
      function Le(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: a,
            summaryCardIndex: s,
            lastCard: o,
            selected: l,
            fnLoadNextQueue: d,
            storePageFilter: m,
            fnDisplaySummaryReward: h,
            viewedAppCount: y,
            fnFocused: f,
            fnAdvance: g,
            bSkipAppRequestPending: C,
          } = e,
          [v, w] = n.useState(!1),
          A = (0, D.Qn)(),
          j = (0, _.Qt)(c.L6.Jz, D.TS.LANGUAGE, !1),
          [T, N] = n.useState(0),
          [R, G] = n.useState(0),
          { data: F } = (0, je.F0)();
        n.useEffect(() => {
          l &&
            !v &&
            F &&
            p.Fm.Get()
              .HintLoad()
              .then(() => {
                b.aI
                  .Get()
                  .LoadSkippedApps(t, m)
                  .then((e) => {
                    N(e.reduce((e, t) => (F.has(t) ? e + 1 : e), 0)),
                      G(
                        e.reduce(
                          (e, t) => (p.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      w(!0);
                  });
              });
        }, [v, t, l, m, F]);
        const [Q, B] = n.useState(!1),
          P = (0, b.IH)(t, m),
          L = (0, S.m)("DiscoveryQueueSummary"),
          E = async () => {
            o ? Q || (B(!0), await d(), L?.token?.reason || B(!1)) : g();
          };
        return (0, i.jsxs)(ke, {
          selected: l,
          fnFocused: f,
          fnOnContinue: E,
          fnCloseModal: a,
          bLoaded: v,
          children: [
            (0, i.jsxs)("div", {
              className: se().SummaryContentCtn,
              children: [
                (0, i.jsx)("div", {
                  className: se().SummaryTitle,
                  children: (0, I.we)("#DiscoveryQueue_SummaryTitle"),
                }),
                !P &&
                  l &&
                  j.data?.definition &&
                  (0, i.jsx)(We, {
                    bSkipAppRequestPending: C,
                    summaryCardIdx: s,
                  }),
                (0, i.jsx)("div", {
                  className: se().YourStats,
                  children: (0, I.we)("#DiscoveryQueue_YourStats"),
                }),
                (0, i.jsxs)(r.Z, {
                  "flow-children": "row",
                  className: se().SummaryGrid,
                  children: [
                    (0, i.jsxs)("div", {
                      className: se().GridItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: se().GridTitle,
                          children: (0, I.we)("#DiscoveryQueue_ViewedCaps"),
                        }),
                        (0, i.jsx)("div", {
                          className: se().GridNumber,
                          children: (0, le.D)(y),
                        }),
                        (0, i.jsx)("div", {
                          className: se().GridSubTitle,
                          children: (0, I.we)("#DiscoveryQueue_Titles"),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: se().GridItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: se().GridTitle,
                          children: (0, I.we)("#DiscoveryQueue_WishlistedCaps"),
                        }),
                        (0, i.jsx)("div", {
                          className: se().GridNumber,
                          children: (0, le.D)(T),
                        }),
                        (0, i.jsx)(u.Fh, {
                          className: (0, x.A)(se().GridSubTitle, se().TextLink),
                          href: (0, k.NT)(D.TS.STORE_BASE_URL + "wishlist"),
                          children: (0, I.we)("#DiscoveryQueue_ViewWishlist"),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: se().GridItem,
                      children: [
                        (0, i.jsx)("div", {
                          className: se().GridTitle,
                          children: (0, I.we)("#DiscoveryQueue_IgnoredCaps"),
                        }),
                        (0, i.jsx)("div", {
                          className: se().GridNumber,
                          children: (0, le.D)(R),
                        }),
                        (0, i.jsx)(u.Fh, {
                          className: (0, x.A)(se().GridSubTitle, se().TextLink),
                          href: (0, k.NT)(
                            D.TS.STORE_BASE_URL + "account/notinterested",
                          ),
                          children: (0, I.we)("#DiscoveryQueue_ViewIgnored"),
                        }),
                      ],
                    }),
                  ],
                }),
                !A &&
                  (0, i.jsxs)(r.Z, {
                    className: se().SummaryActionButtonsCtn,
                    children: [
                      (0, i.jsx)(r.Z, {
                        className: (0, x.A)(se().QueueButton, se().Wide),
                        onClick: a,
                        children: (0, I.we)("#ActionButtonLabelDone"),
                      }),
                      !P &&
                        (0, i.jsx)(r.Z, {
                          className: (0, x.A)(
                            Q && se().Disabled,
                            se().QueueButton,
                            se().Primary,
                            se().Wide,
                          ),
                          onClick: E,
                          children: Q
                            ? (0, I.we)("#Loading")
                            : (0, I.we)("#Button_Continue"),
                        }),
                    ],
                  }),
              ],
            }),
            Boolean(!P) &&
              (0, i.jsx)(i.Fragment, { children: Boolean(h) && h(s + 1) }),
          ],
        });
      }
      function ke(e) {
        const {
            children: t,
            selected: a,
            fnOnContinue: s,
            fnCloseModal: r,
            fnFocused: l,
            bLoaded: c,
          } = e,
          d = (0, u.aL)(D.TS.STORE_BASE_URL + "wishlist"),
          m = (0, h.R7)(),
          p = m?.ownerWindow || window,
          _ = n.useRef(void 0);
        return (
          n.useEffect(() => {
            a && _.current && _.current.focus({ preventScroll: !0 });
          }, [a]),
          (0, i.jsx)(o.YZ, {
            ref: _,
            "aria-live": "polite",
            className: (0, x.A)(
              se().SummaryCtn,
              se().DiscoveryQueueApp,
              a && se().Selected,
            ),
            onOptionsActionDescription: (0, I.we)(
              "#DiscoveryQueue_ViewWishlist",
            ),
            onOptionsButton: () => {
              p.location.href = (0, k.NT)(d);
            },
            onOKActionDescription: (0, I.we)("#Button_Continue"),
            onOKButton: () => {
              s();
            },
            onCancelActionDescription: (0, I.we)("#ActionButtonLabelDone"),
            onCancelButton: () => r && r(),
            fnScrollIntoViewHandler: () => (l(), !0),
            children: c
              ? t
              : (0, i.jsx)(N.t, {
                  className: se().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          })
        );
      }
      function Ee() {
        return (0, i.jsx)(r.Z, {
          className: se().SaleRewardsCtn,
          children: (0, i.jsx)(N.t, { size: "large", position: "center" }),
        });
      }
      function We(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: a } = e;
        return t ? (0, i.jsx)(Ee, {}) : (0, i.jsx)(Oe, { summaryCardIdx: a });
      }
      function Oe(e) {
        const { summaryCardIdx: t } = e,
          a = (0, _.os)(c.L6.Jz, D.TS.LANGUAGE, !1, t.toString()),
          [n] = (0, f.t7)(a?.data?.current_def?.appid, {}),
          s = (0, D.Qn)();
        if (!a?.data?.current_def || !n?.GetName().length)
          return (0, i.jsx)(Ee, {});
        const o = a.data.num_items_earned,
          l = a.data.current_def.num_items_per_def,
          d = l - o,
          m = (o / l) * 100;
        return (0, i.jsxs)(r.Z, {
          className: se().SaleRewardsCtn,
          children: [
            (0, i.jsx)(T, { nPercent: m, size: 70, strokeWidth: 12 }),
            (0, i.jsxs)(r.Z, {
              className: se().RewardStatusCtn,
              children: [
                (0, i.jsx)("div", {
                  className: se().SaleRewardAppTitle,
                  children: (0, I.we)(
                    "#DiscoveryQueue_SaleStatus_Title" + (d ? "" : "_Complete"),
                    (0, le.D)(o),
                    n.GetName(),
                  ),
                }),
                d > 0 &&
                  (0, i.jsx)("div", {
                    className: se().SaleRewardAppTitle,
                    children: (0, I.we)(
                      "#DiscoveryQueue_SaleStatus_Desc",
                      (0, le.D)(d),
                      n.GetName(),
                    ),
                  }),
                !s &&
                  (0, i.jsx)("a", {
                    href: (0, k.NT)(
                      D.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    ),
                    children: (0, I.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
              ],
            }),
          ],
        });
      }
    },
    47554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => g });
      var n = a(7850),
        i = a(90626),
        s = a(12447),
        r = a(76217),
        o = a(43706),
        l = a(39199),
        c = a(55263),
        d = a(95034),
        m = a(12155),
        u = a(26749),
        h = a(61859),
        p = a(71109),
        _ = a.n(p),
        y = a(78327),
        f = a(90511);
      function g(e) {
        const { appID: t } = e,
          a = (0, u.G)(),
          [p] = (0, d.QD)("inqueue", "" + o.QV.qy),
          [g, C] = (0, i.useState)(!1),
          [S] = (0, c.t7)(t, { include_assets: !0 }),
          x = i.useRef(void 0);
        i.useEffect(() => x.current?.Activate(!0), []);
        const I = (0, y.Qn)(),
          { eStoreDiscoveryQueueType: v, storePageFilter: w } =
            i.useMemo(() => {
              if (p?.length > 0) {
                const e = p.split("_"),
                  t = Number(e[0]);
                let a;
                return (
                  e.length > 1 && (a = (0, l.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: a }
                );
              }
              return {
                eStoreDiscoveryQueueType: o.QV.qy,
                storePageFilter: void 0,
              };
            }, [p]),
          { showDiscoveryQueue: A } = (0, f.GV)(v, {
            includeAppID: t,
            storePageFilter: w,
          }),
          D = i.useCallback(() => {
            C(!0);
          }, []),
          b = (0, l.WX)(v, w);
        return a && S
          ? g
            ? null
            : (0, n.jsx)(s.u, {
                navTreeRef: x,
                navID: "DiscoveryQueueAppWidget",
                children: (0, n.jsxs)(r.Z, {
                  focusable: !0,
                  className: _().DiscoveryQueueWidgetCtn,
                  onSecondaryButton: D,
                  onOKButton: A,
                  onOKActionDescription: (0, h.we)(
                    "#DiscoveryQueue_ResumeWizard",
                  ),
                  onSecondaryActionDescription: (0, h.we)("#Button_Close"),
                  children: [
                    (0, n.jsxs)("div", {
                      onClick: A,
                      className: _().WidgetText,
                      children: [
                        (0, n.jsx)(m.mcU, {}),
                        (0, h.we)("#DiscoveryQueue_ResumeWizard"),
                        b?.length > 0 && ": " + b,
                      ],
                    }),
                    !I &&
                      (0, n.jsx)("div", {
                        className: _().CloseButton,
                        onClick: D,
                        children: (0, n.jsx)(m.X, {}),
                      }),
                  ],
                }),
              })
          : null;
      }
    },
    6804: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => l });
      var n = a(7850),
        i = a(12447),
        s = a(43706),
        r = a(96236),
        o = a(38405);
      function l() {
        return (0, n.jsx)(r.K, {
          placeholderHeight: "200px",
          rootMargin: "0px 0px 100% 0px",
          children: (0, n.jsx)(i.u, {
            navID: "DiscoveryQueueWidget",
            children: (0, n.jsx)(o.g, { eStoreDiscoveryQueueType: s.QV.qy }),
          }),
        });
      }
    },
    25054: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => h });
      var n = a(7850),
        i = a(90626),
        s = a(43706),
        r = a(61859),
        o = a(26749),
        l = a(76217),
        c = a(78327),
        d = a(51706),
        m = a(738),
        u = a(90511);
      function h(e) {
        const t = (0, o.G)(),
          { showDiscoveryQueue: a } = (0, u.GV)(s.QV.qy),
          h = i.useCallback(() => {
            c.iA.logged_in
              ? a()
              : (0, m.pg)(
                  (0, n.jsx)(d.KG, {
                    onOK: () => {
                      window.location.href = `${c.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, r.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, r.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [a]);
        return t
          ? (0, n.jsx)(l.Z, {
              children: (0, n.jsx)("a", {
                onClick: h,
                className: "experiment-button",
                children: (0, r.we)("#DiscoveryQueue_OpenWizard"),
              }),
            })
          : (0, n.jsx)("div", {
              className: "experiment-button-placeholder",
              children: " ",
            });
      }
    },
  },
]);
