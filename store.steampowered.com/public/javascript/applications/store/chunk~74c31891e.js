/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2287],
  {
    32545: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
        FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
        FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
        "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
        "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
        "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
        "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
        "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
        "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
        "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
        "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
        focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
        hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
      };
    },
    10026: (e) => {
      e.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
    },
    18657: (e) => {
      e.exports = {
        BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
        isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
      };
    },
    29868: (e) => {
      e.exports = {
        countdownCtn: "GWWacIf04lQysYMFJma0A",
        Closed: "ATX_xEE69rX8wVxQvONEx",
        CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
        CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
        CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
        LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
        Throbber: "bEkRtFmRUW_smWksM-k9g",
        WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
        WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
        WinnerText: "chkuqox_QD6U5ID_AHTLk",
      };
    },
    9202: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        storeMenuResponsiveModeWidth: "730px",
        SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
        WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
        BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
        "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
        "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
        "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
        "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
        "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
        "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
        "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
        "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
        focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
        hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
      };
    },
    94057: (e, n, t) => {
      "use strict";
      t.d(n, { w: () => p });
      var o = t(34629),
        r = t(41735),
        s = t.n(r),
        a = t(14947),
        i = t(65946),
        l = t(90626),
        c = t(6419),
        u = t(6144),
        d = t(84933),
        m = t(78327);
      class _ {
        constructor() {
          (0, a.Gn)(this);
        }
        giveaway_id = void 0;
        seconds_until_drawing = void 0;
        rtime_start = void 0;
        rtime_end = void 0;
        closed = void 0;
        winner_count = void 0;
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
        clone() {
          const e = new _();
          return (
            (e.giveaway_id = this.giveaway_id),
            (e.seconds_until_drawing = this.seconds_until_drawing),
            (e.rtime_start = this.rtime_start),
            (e.rtime_end = this.rtime_end),
            (e.closed = this.closed),
            (e.winner_count = this.winner_count),
            e
          );
        }
      }
      (0, o.Cg)([a.sH], _.prototype, "giveaway_id", void 0),
        (0, o.Cg)([a.sH], _.prototype, "seconds_until_drawing", void 0),
        (0, o.Cg)([a.sH], _.prototype, "rtime_start", void 0),
        (0, o.Cg)([a.sH], _.prototype, "rtime_end", void 0),
        (0, o.Cg)([a.sH], _.prototype, "closed", void 0),
        (0, o.Cg)([a.sH], _.prototype, "winner_count", void 0);
      class g {
        constructor() {
          (0, a.Gn)(this);
        }
        m_mapGiveawayIDToNextDrawInfo = new Map();
        m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
        m_bLoadedFromConfig = !1;
        m_mapNextDrawChangeCallback = new Map();
        GetKey(e, n) {
          return e + "_" + n;
        }
        GetInfoByInstance(e, n) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, n),
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new u.lu()),
            this.m_mapNextDrawChangeCallback.get(e)
          );
        }
        CopyToGiveaway(e, n) {
          n.closed != e.closed && (n.closed = e.closed),
            n.giveaway_id != e.giveaway_id && (n.giveaway_id = e.giveaway_id),
            n.rtime_start != e.rtime_start && (n.rtime_start = e.rtime_start),
            n.rtime_end != e.rtime_end && (n.rtime_end = e.rtime_end),
            n.winner_count != e.winner_count &&
              (n.winner_count = e.winner_count),
            n.seconds_until_drawing != e.seconds_until_drawing &&
              (n.seconds_until_drawing = e.seconds_until_drawing);
        }
        async ReloadGiveaway(e, n) {
          if (!e) return null;
          let t = m.TS.STORE_BASE_URL + "prizes/nextdraw/" + e,
            o = null,
            r = { origin: self.origin };
          return (
            (o = await s().get(t, { params: r })),
            (0, a.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new _()),
                this.CopyToGiveaway(
                  o.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== n)
              ) {
                const t = this.GetKey(e, n);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(t) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(t, new _()),
                  this.CopyToGiveaway(
                    o.data,
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(t),
                  );
              }
            }),
            this.GetNextDrawChangeCallback(e).Dispatch(
              this.m_mapGiveawayIDToNextDrawInfo.get(e),
            ),
            this.m_mapGiveawayIDToNextDrawInfo.get(e)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            g.s_Singleton ||
              ((g.s_Singleton = new g()),
              g.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_GiveawayStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, m.Tc)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let n = new _();
              this.CopyToGiveaway(e, n),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, n);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, o.Cg)([a.sH], g.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, o.Cg)([a.XI], g.prototype, "CopyToGiveaway", null);
      class w {
        m_intervalID;
        m_intervalCountDownID;
        static s_GlobalInstance = 0;
        m_myInstanceNumber = 0;
        constructor() {
          (this.m_myInstanceNumber = w.s_GlobalInstance),
            (w.s_GlobalInstance += 1);
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
        SetupRefreshDataInterval(e, n) {
          if ((this.ClearRefreshInterval(), !e.closed)) {
            let t =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(n, t);
          }
        }
        SetupCountDown(e, n) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(n, 1e3));
        }
      }
      function v(e, n) {
        const t = g.Get().GetInfoByInstance(e, n.m_myInstanceNumber);
        (t.seconds_until_drawing -= 1),
          0 == t.seconds_until_drawing && n.ClearCountDown();
      }
      function p(e) {
        const [n] = (0, l.useState)(new w()),
          t = (0, d.CH)();
        (0, l.useEffect)(
          () => (
            g
              .Get()
              .ReloadGiveaway(e, n.m_myInstanceNumber)
              .then((o) => {
                n.SetupRefreshDataInterval(o, () =>
                  (function (e, n) {
                    const t = g
                      .Get()
                      .GetInfoByInstance(e, n.m_myInstanceNumber);
                    t &&
                      t.BIsValid() &&
                      t.seconds_until_drawing <= 0 &&
                      !t.closed &&
                      (n.ClearCountDown(),
                      g
                        .Get()
                        .ReloadGiveaway(e, n.m_myInstanceNumber)
                        .then((t) => {
                          n.SetupCountDown(t.seconds_until_drawing, () =>
                            v(e, n),
                          );
                        }));
                  })(e, n),
                ),
                  n.SetupCountDown(o.seconds_until_drawing, () => v(e, n)),
                  t();
              }),
            () => {
              n.ClearRefreshInterval(), n.ClearCountDown();
            }
          ),
          [n, e, t],
        );
        const o = g.Get().GetInfoByInstance(e, n.m_myInstanceNumber),
          [r, s, a] = (0, i.q3)(() => [
            o?.winner_count,
            o?.closed,
            o?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !o || null == o.giveaway_id || !o.BStarted() || void 0 === r,
          winner_count: r,
          closed: s,
          seconds_until_drawing: a,
        };
      }
      (0, o.Cg)([c.o], w.prototype, "ClearRefreshInterval", null),
        (0, o.Cg)([c.o], w.prototype, "ClearCountDown", null),
        (0, o.Cg)([c.o], w.prototype, "SetupRefreshDataInterval", null),
        (0, o.Cg)([c.o], w.prototype, "SetupCountDown", null);
    },
    90609: (e, n, t) => {
      "use strict";
      t.d(n, { d: () => qe });
      var o = t(19367),
        r = t(90626),
        s = t(72034),
        a = t(51006),
        i = t(60746),
        l = t(6379),
        c = t(61859),
        u = t(78327),
        d = t(7850),
        m = t(59952),
        _ = t(41735),
        g = t.n(_),
        w = t(68797);
      class v {
        m_counts = null;
        m_promise;
        GetCounts() {
          return this.m_counts;
        }
        async LoadCounts() {
          return Boolean(this.m_counts)
            ? this.m_counts
            : (this.m_promise || (this.m_promise = this.LoadInternalCount()),
              this.m_promise);
        }
        async LoadInternalCount() {
          let e = null;
          try {
            const n =
                u.TS.STORE_BASE_URL + "saleaction/ajaxgetuserdeckcompatcounts",
              t = await g().get(n, {});
            if (200 == t?.status && 1 == t.data?.success && t.data?.counts)
              return (this.m_counts = t.data.counts), this.m_counts;
            e = (0, w.H)(t);
          } catch (n) {
            e = (0, w.H)(n);
          }
          return (
            console.error(
              "CDeckCompCountStore.LoadInternalCount failed: " + e?.strErrorMsg,
              e,
            ),
            null
          );
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            v.s_globalSingletonStore ||
              ((v.s_globalSingletonStore = new v()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = v.s_globalSingletonStore)),
            v.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let e = (0, u.Tc)("deckcompatcount", "application_config");
            v.ValidateListCompat(e) && (this.m_counts = e);
          }
        }
        static ValidateListCompat(e) {
          const n = e;
          return (
            n &&
            "number" == typeof n.verified &&
            "number" == typeof n.unsupported &&
            "number" == typeof n.playable
          );
        }
      }
      var p = t(85320),
        h = t(56631),
        I = t(35400),
        f = t(6878),
        y = t(8527),
        D = t(67645),
        C = t(62490),
        x = t(84811),
        b = t(22797),
        j = t(37474);
      const N = r.Fragment;
      function S(e) {
        const {
            reservationPackageID: n,
            depositPackageID: t,
            bIsPreview: o,
            psuLessPackageID: s,
            strOutOfStockOverride: a,
            strDeliveryOverride: i,
            bDeliveryOverrideOnlyIfOutOfStock: l,
          } = e,
          { data: u } = (0, D.DR)(n),
          { data: m } = (0, D.DR)(s),
          _ = (0, r.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + n,
                reservation_package: n,
                deposit_package: t,
                localized_reservation_desc: (0, C.$Y)([], 31, null),
                localized_out_of_stock_override: (0, C.$Y)(
                  [a || null],
                  31,
                  null,
                ),
                localized_delivery_override_desc: (0, C.$Y)(
                  [i || null],
                  31,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(l),
                psu_less_package: s,
              },
            ],
            [n, t, a, i, l, s],
          );
        if (!u || (s && !m))
          return (0, d.jsx)(b.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const g = !y.iA.logged_in || !u.account_restricted_from_purchasing;
        return (0, d.jsxs)(x.tH, {
          children: [
            (0, d.jsx)(r.Suspense, {
              fallback: null,
              children: (0, d.jsx)(N, { bIsPreview: !!o, rgReservationDef: _ }),
            }),
            Boolean(u.allow_purchase_in_country) &&
              (0, d.jsxs)("div", {
                className: _[0].unique_id,
                children: [
                  (0, d.jsx)(j.bk, {
                    reservationDef: _[0],
                    hardwareDetail: u,
                    bPSULessModel: !1,
                  }),
                  g &&
                    (0, d.jsx)(j.pc, {
                      reservationDef: _[0],
                      hardwareDetail: u,
                    }),
                  m &&
                    m?.allow_purchase_in_country &&
                    (0, d.jsx)(j.bk, {
                      reservationDef: _[0],
                      hardwareDetail: m,
                      bPSULessModel: !0,
                    }),
                ],
              }),
          ],
        });
      }
      var k = t(28188),
        B = t(60014),
        G = t(55963),
        T = t(73371),
        A = t.n(T),
        F = t(52038),
        E = t(94636),
        L = t(20446),
        O = t(9202),
        M = t.n(O),
        P = t(35380);
      function R(e) {
        const { appid: n, color: t, bgcolor: o } = e,
          r = (0, B.n9)(),
          s = (0, P.$5)(n),
          a = (0, G.L3)(r);
        return (0, d.jsx)("div", {
          className: M().WishlistHoverCtn,
          children: (0, d.jsx)(E.E, {
            snr: a,
            id: s,
            classOverride: (0, F.A)(
              A().WishlistButtonNotTop,
              M().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: { color: t, backgroundColor: o },
          }),
        });
      }
      function H(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, L.O)(e.args.color, "black"),
          o = (0, L.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(R, { appid: n, color: t, bgcolor: o });
      }
      var W = t(10026),
        q = t.n(W),
        U = t(76217),
        $ = t(68009),
        z = t(1062),
        Q = t(12155),
        Z = t(4434),
        V = t(84547),
        X = t(32545),
        K = t.n(X);
      function J(e) {
        const { appID: n, classOverride: t, styleOverride: o } = e,
          [s, a] = (0, r.useState)(!1),
          i = (0, Z.m)("GameHoverFollowButton"),
          { elDialogElement: l, fnShowLogonDialog: m } = (0, V.E)(),
          _ = (0, $.Fh)(n),
          { mutateAsync: g } = (0, z.L)(n, !_, void 0);
        return (0, d.jsxs)(U.Z, {
          className: (0, F.A)(K().FollowButton, t),
          onClick: async (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              u.iA.logged_in
                ? (a(!0), await g(), i.token.reason || a(!1))
                : m();
          },
          style: o,
          children: [
            _ ? (0, d.jsx)(Q.pPV, {}) : (0, d.jsx)(Q.c9e, {}),
            (0, d.jsx)("div", {
              className: (0, F.A)(
                K().FollowButtonText,
                s && K().FollowLoadingText,
                "FollowGameButton",
              ),
              children: (0, c.we)(
                _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
              ),
            }),
            l,
          ],
        });
      }
      function Y(e) {
        const { appid: n, color: t, bgcolor: o } = e;
        (0, B.n9)();
        return (0, d.jsx)(J, {
          appID: n,
          classOverride: (0, F.A)(
            A().FollowGameButtonNotTop,
            q().BBCodeFollowButton,
          ),
          styleOverride: { color: t, backgroundColor: o },
        });
      }
      function ee(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, L.O)(e.args.color, "black"),
          o = (0, L.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(Y, { appid: n, color: t, bgcolor: o });
      }
      var ne = t(94057),
        te = t(29868),
        oe = t(6083);
      function re(e) {
        return e < 10 ? "0" + e : e;
      }
      function se(e) {
        const { giveawayid: n } = e,
          t = (0, ne.w)(n),
          {
            bLoadingGiveawayInfo: o,
            winner_count: s,
            closed: a,
            seconds_until_drawing: i,
          } = t;
        return o
          ? null
          : (0, d.jsxs)("div", {
              className: te.countdownCtn,
              children: [
                Boolean(a) &&
                  (0, d.jsx)("div", {
                    className: te.Closed,
                    children:
                      s > 0
                        ? (0, c.we)("#Giveaway_Closed", (0, oe.D)(s))
                        : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                  }),
                Boolean(!a) &&
                  (0, d.jsxs)(r.Fragment, {
                    children: [
                      Boolean(i <= 0)
                        ? (0, d.jsxs)("div", {
                            className: te.Throbber,
                            children: [
                              (0, d.jsx)(b.t, { size: "small" }),
                              (0, d.jsx)("div", {
                                children: (0, c.we)("#Giveaway_RandomDraw"),
                              }),
                            ],
                          })
                        : (0, d.jsxs)("div", {
                            className: te.CountDownCtn,
                            children: [
                              (0, d.jsx)("div", {
                                className: te.CountDownTime,
                                children:
                                  re(Math.floor(i / 60)) + ":" + re(i % 60),
                              }),
                              (0, d.jsxs)("div", {
                                className: te.CountDownText,
                                children: [
                                  (0, c.we)("#Giveaway_CountDown2"),
                                  " ",
                                  (0, c.we)("#Giveaway_KeepWatching"),
                                ],
                              }),
                            ],
                          }),
                      Boolean(s > 0) &&
                        (0, d.jsxs)("div", {
                          className: te.WinnerInfo,
                          children: [
                            (0, d.jsx)("div", {
                              className: te.WinnerCount,
                              children: (0, oe.D)(s),
                            }),
                            (0, d.jsx)("div", {
                              className: te.WinnerText,
                              children: (0, c.we)("#Giveaway_Congratulation"),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            });
      }
      var ae = t(10962),
        ie = t(39733),
        le = t(56283),
        ce = t(82477),
        ue = t(92757),
        de = t(39256),
        me = t(99487),
        _e = t(7193),
        ge = t(39199),
        we = t(60860),
        ve = t(67081),
        pe = t(40353);
      function he(e) {
        const { eventModel: n, nEventBadgeID: t } = e,
          o = (0, ie.fy)(t);
        if (o?.level > 0) {
          let e = o.level;
          if (n?.BHasSaleEnabled()) {
            const o = n.GetSaleSectionsByType("badge_progress");
            if (1 == o?.length) {
              const r = o[0].badge_progress;
              if (r?.event_badgeid == t && r?.granted_by_discovery_queue) {
                const t = r.levels[r.levels.length - 1].level;
                return (0, d.jsx)(Ie, {
                  eventModel: n,
                  nBadgeLevel: e,
                  nMaxLevel: t,
                });
              }
            }
          }
          return (0, d.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, oe.D)(e),
          });
        }
        return null;
      }
      function Ie(e) {
        const { eventModel: n, nBadgeLevel: t, nMaxLevel: o } = e,
          s = r.useMemo(() => {
            const e = n
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [n]),
          { storePageFilter: a, eStoreDiscoveryQueueType: i } = r.useMemo(
            () => (0, _e.lx)(n, s),
            [n, s],
          ),
          l = (0, ge.Uf)(i, a),
          c = Math.min(t + l, o);
        return (0, d.jsx)("span", {
          className: "DisplayBadgeProgress",
          children: (0, oe.D)(c),
        });
      }
      function fe(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args, "eventid"));
        return u.iA.logged_in && t
          ? (0, d.jsx)(he, { nEventBadgeID: t, eventModel: n })
          : null;
      }
      function ye(e) {
        const { nDoorIndex: n, children: t } = e,
          o = (0, I.OM)(n),
          { fnOpenDoor: s } = (0, I.OC)(),
          [a, i] = r.useState(!1),
          [l, m] = r.useState(!1);
        return (0, d.jsx)(le.$n, {
          disabled: o,
          onClick: (e) => {
            a ||
              (u.iA.logged_in
                ? (i(!0),
                  s(n, !0, null, !1)
                    .then((e) => {
                      e || m(!0), i(!1);
                    })
                    .catch(() => {
                      m(!0), i(!1);
                    }))
                : (0, ce.vg)());
          },
          children: Boolean(l)
            ? (0, d.jsx)("div", {
                children: (0, c.we)("#GrantAwardError_Busy"),
              })
            : (0, d.jsxs)(d.Fragment, {
                children: [
                  Boolean(a) && (0, d.jsx)(b.t, { size: "small" }),
                  Boolean(o) && (0, d.jsx)(Q.Jlk, {}),
                  t,
                ],
              }),
        });
      }
      function De(e) {
        const n = Number.parseInt((0, m.j$)(e.args)) || 0;
        return n >= 0 && n < 32
          ? (0, d.jsx)(ye, { nDoorIndex: n, children: e.children })
          : null;
      }
      const Ce = (0, ue.y)(ve.H);
      function xe(e) {
        const n = Number.parseInt((0, m.j$)(e.args)),
          { event: t, showErrorInfo: o } = e.context;
        if (n) {
          const r = t?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == n,
          );
          if (r >= 0) {
            const n = t.GetDayIndexFromEventStart();
            return (0, d.jsx)(we.Cs, {
              location: o ? 2 : 0,
              children: (0, d.jsx)(Ce, {
                event: t,
                section: t.jsondata.sale_sections[r],
                activeTab: new me.y(null, n),
                language: e.language,
                nSaleDayIndex: n,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: o
                  ? pe.S.EPreviewMode_Enabled
                  : pe.S.EPreviewMode_Disabled,
              }),
            });
          }
          if (o)
            return (0, d.jsxs)("div", {
              className: de.ErrorDiv,
              children: ["Error could not find sale section ", n],
            });
        }
        return null;
      }
      var be = t(30894),
        je = t(18657),
        Ne = t.n(je),
        Se = t(18638);
      function ke(e) {
        const { clanAccountID: n, color: t, bgcolor: o } = e;
        (0, be.L2)();
        const [s, a] = r.useState(!1);
        return (0, d.jsx)("div", {
          className: (0, F.A)(Ne().BBCodeFollowButton, s && Ne().isHovered),
          onMouseEnter: () => a(!0),
          onMouseLeave: () => a(!1),
          children: (0, d.jsx)(Se.Q, {
            nCreatorAccountID: n,
            classOverride: A().FollowGameButtonNotTop,
            styleOverride: { color: t, backgroundColor: o },
            followType: "group",
          }),
        });
      }
      function Be(e) {
        const { event: n } = e.context,
          t = Number(e.args.groupid) || n.clanSteamID.GetAccountID();
        if (!t) return null;
        const o = (0, L.O)(e.args.color, "black"),
          r = (0, L.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(ke, { clanAccountID: t, color: o, bgcolor: r });
      }
      let Ge = null;
      function Te(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args, "appid")),
          o = Number.parseInt((0, m.j$)(e.args, "itemdefid")),
          r = Number.parseInt((0, m.j$)(e.args, "maxquantity")),
          s = (0, m.j$)(e.args, "calltoaction");
        return (0, h.gS)(t, o)
          ? (0, d.jsx)(k.f, {
              language: e.language,
              clanAccountID: n.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: t, nItemDefID: o, max_quantity: r },
              strCallToAction: s,
            })
          : (0, d.jsx)(b.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function Ae(e) {
        const n = (function () {
          const [e, n] = r.useState(v.Get().GetCounts());
          return (
            r.useEffect(() => {
              e || v.Get().LoadCounts().then(n);
            }, []),
            e
          );
        })();
        if (!n) return (0, d.jsx)(b.t, { size: "small" });
        const t = Number.parseInt((0, m.j$)(e.args));
        let o = n.verified;
        switch (t) {
          case 2:
            o = n.playable;
            break;
          case 1:
            o = n.unsupported;
        }
        return (0, d.jsx)("span", { children: (0, oe.D)(Number(o)) });
      }
      function Fe(e) {
        const n = (0, p.j)("library");
        if (!n) return (0, d.jsx)(b.t, { size: "small" });
        const t = Number.parseInt((0, m.j$)(e.args));
        let o = n.verifiedList?.length || 0;
        switch (t) {
          case 2:
            o = n.playableList?.length || 0;
            break;
          case 1:
            o = n.unsupportedList?.length || 0;
            break;
          case 0:
            o = n.unknownList?.length || 0;
        }
        return (0, d.jsx)("span", { children: (0, oe.D)(Number(o)) });
      }
      function Ee(e) {
        const n = Number.parseInt((0, m.j$)(e.args)),
          t =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, m.j$)(e.args, "hide")));
        return n >= 0
          ? (0, d.jsx)(Le, { nDoorIndex: n, bHide: t, children: e.children })
          : null;
      }
      function Le(e) {
        const { nDoorIndex: n, bHide: t, children: o } = e,
          r = (0, I.OM)(n);
        return null == r
          ? null
          : (r && !t) || (!r && t)
            ? (0, d.jsx)(d.Fragment, { children: e.children })
            : null;
      }
      function Oe(e) {
        if (u.iA.logged_in) {
          const n = Number.parseInt((0, m.j$)(e.args)),
            t = Number.parseInt((0, m.j$)(e.args, "mod"));
          if (t > 0 && n < t && u.iA.accountid % t == n) return e.children;
        }
        return null;
      }
      function Me(e) {
        const n = (0, m.j$)(e.args);
        return n?.trim().length > 0
          ? (0, d.jsx)("div", { className: n.trim(), children: e.children })
          : (0, d.jsx)(d.Fragment, { children: e.children });
      }
      function Pe(e) {
        return (0, d.jsx)("span", {
          className: f.LocalizeBlock,
          children: (0, c.oW)(
            e.children,
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
          ),
        });
      }
      function Re(e) {
        let n = (0, m.j$)(e.args);
        return n
          ? (0, d.jsx)(se, { giveawayid: n })
          : (0, d.jsx)(r.Fragment, {});
      }
      function He(e) {
        const { showErrorInfo: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args));
        if (t) {
          const n = Number.parseInt((0, m.j$)(e.args, "depositpackageid")),
            o = Number.parseInt((0, m.j$)(e.args, "psulesspackageid")),
            r = (0, m.j$)(e.args, "out_of_stock_override"),
            s = (0, m.j$)(e.args, "delivery_override"),
            a = (0, m.j$)(e.args, "delivery_override_out_of_stock");
          return (0, d.jsx)(S, {
            reservationPackageID: t,
            depositPackageID: n,
            psuLessPackageID: o,
            strOutOfStockOverride: r,
            strDeliveryOverride: a || s,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(a),
          });
        }
        return (0, d.jsx)(d.Fragment, {});
      }
      var We = t(32337);
      function qe(e) {
        const { bSalePage: n } = e,
          [t, d] = r.useState(i.KN.IsInitialized());
        return (
          r.useEffect(() => {
            a.Vw.Init(new s.D(u.TS.WEBAPI_BASE_URL)),
              l.O3.Init(),
              n &&
                We.us.AddDictionary(
                  (null == Ge &&
                    (Ge = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: Te,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      ["wishlist", { Constructor: H, autocloses: !1 }],
                      ["followgame", { Constructor: ee, autocloses: !1 }],
                      ["followgroup", { Constructor: Be, autocloses: !1 }],
                      ["deckcompatcount", { Constructor: Ae, autocloses: !1 }],
                      [
                        "deckcompatuserlibrarycount",
                        { Constructor: Fe, autocloses: !1 },
                      ],
                      ["giveawayinfo", { Constructor: Re, autocloses: !1 }],
                      ["price", { Constructor: ae.zD, autocloses: !1 }],
                      ["pricesavings", { Constructor: ae.y7, autocloses: !1 }],
                      [
                        "eventdoorvisibility",
                        { Constructor: Ee, autocloses: !1 },
                      ],
                      ["chooseaccount", { Constructor: Oe, autocloses: !1 }],
                      [
                        "badgecurrentlevel",
                        { Constructor: fe, autocloses: !1 },
                      ],
                      ["optindoorquest", { Constructor: De, autocloses: !1 }],
                      ["classname", { Constructor: Me, autocloses: !1 }],
                      ["localize", { Constructor: Pe, autocloses: !1 }],
                      ["salesection", { Constructor: xe, autocloses: !1 }],
                      [
                        "reservationbutton",
                        { Constructor: He, autocloses: !1 },
                      ],
                    ])),
                  Ge),
                ),
              i.KN.InitGlobal().then(() => d(!0));
          }, [n]),
          r.useEffect(() => {
            const e = (0, c.l4)();
            e && o.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
  },
]);
