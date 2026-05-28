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
        "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
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
        "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
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
        s = t(41735),
        r = t.n(s),
        a = t(14947),
        i = t(65946),
        l = t(90626),
        c = t(6419),
        u = t(6144),
        d = t(84933),
        _ = t(78327);
      class m {
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
          const e = new m();
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
      (0, o.Cg)([a.sH], m.prototype, "giveaway_id", void 0),
        (0, o.Cg)([a.sH], m.prototype, "seconds_until_drawing", void 0),
        (0, o.Cg)([a.sH], m.prototype, "rtime_start", void 0),
        (0, o.Cg)([a.sH], m.prototype, "rtime_end", void 0),
        (0, o.Cg)([a.sH], m.prototype, "closed", void 0),
        (0, o.Cg)([a.sH], m.prototype, "winner_count", void 0);
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
          let t = _.TS.STORE_BASE_URL + "prizes/nextdraw/" + e,
            o = null,
            s = { origin: self.origin };
          return (
            (o = await r().get(t, { params: s })),
            (0, a.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new m()),
                this.CopyToGiveaway(
                  o.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== n)
              ) {
                const t = this.GetKey(e, n);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(t) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(t, new m()),
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
              "dev" == _.TS.WEB_UNIVERSE &&
                (window.g_GiveawayStore = g.s_Singleton)),
            g.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.Tc)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let n = new m();
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
          [s, r, a] = (0, i.q3)(() => [
            o?.winner_count,
            o?.closed,
            o?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !o || null == o.giveaway_id || !o.BStarted() || void 0 === s,
          winner_count: s,
          closed: r,
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
      t.d(n, { d: () => Qe });
      var o = t(19367),
        s = t(90626),
        r = t(72034),
        a = t(51006),
        i = t(82429),
        l = t(6379),
        c = t(61859),
        u = t(78327),
        d = t(7850),
        _ = t(34104),
        m = t(59952),
        g = t(41735),
        w = t.n(g),
        v = t(37085),
        p = t(68797);
      class h {
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
              t = await w().get(n, {});
            if (200 == t?.status && t.data?.success == v.R && t.data?.counts)
              return (this.m_counts = t.data.counts), this.m_counts;
            e = (0, p.H)(t);
          } catch (n) {
            e = (0, p.H)(n);
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
            h.s_globalSingletonStore ||
              ((h.s_globalSingletonStore = new h()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = h.s_globalSingletonStore)),
            h.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let e = (0, u.Tc)("deckcompatcount", "application_config");
            h.ValidateListCompat(e) && (this.m_counts = e);
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
      var I = t(85320),
        y = t(56631),
        f = t(35400),
        D = t(6878),
        C = t(22837),
        x = t(8527),
        b = t(67645),
        j = t(53807),
        S = t(62490),
        k = t(84811),
        N = t(22797),
        G = t(37474);
      const B = s.Fragment;
      function A(e) {
        const {
            reservationPackageID: n,
            depositPackageID: t,
            bIsPreview: o,
            psuLessPackageID: r,
            strOutOfStockOverride: a,
            strDeliveryOverride: i,
            bDeliveryOverrideOnlyIfOutOfStock: l,
            section: u,
          } = e,
          { data: _ } = (0, b.DR)(n),
          { data: m } = (0, b.DR)(r),
          g = (0, s.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + n,
                reservation_package: n,
                deposit_package: t,
                localized_reservation_desc: (0, S.$Y)([], C.bP9, null),
                localized_out_of_stock_override: (0, S.$Y)(
                  [a || null],
                  C.bP9,
                  null,
                ),
                localized_delivery_override_desc: (0, S.$Y)(
                  [i || null],
                  C.bP9,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(l),
                psu_less_package: r,
              },
            ],
            [n, t, a, i, l, r],
          );
        if (!_ || (r && !m))
          return (0, d.jsx)(N.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const w = !x.iA.logged_in || !_.account_restricted_from_purchasing,
          v =
            _.reservation_state == j.G.k_EPurchaseReservationState_Reserved
              ? _
              : void 0;
        return (0, d.jsxs)(k.tH, {
          children: [
            (0, d.jsx)(s.Suspense, {
              fallback: null,
              children: (0, d.jsx)(B, { bIsPreview: !!o, rgReservationDef: g }),
            }),
            Boolean(_.allow_purchase_in_country) &&
              (0, d.jsxs)("div", {
                className: g[0].unique_id,
                children: [
                  (0, d.jsx)(G.bk, {
                    reservationDef: g[0],
                    hardwareDetail: _,
                    bPSULessModel: !1,
                    reservedHardwareDetail: v,
                  }),
                  w &&
                    (0, d.jsx)(G.pc, {
                      section: u,
                      reservationDef: g[0],
                      hardwareDetail: _,
                    }),
                  m &&
                    m?.allow_purchase_in_country &&
                    (0, d.jsx)(G.bk, {
                      reservationDef: g[0],
                      hardwareDetail: m,
                      bPSULessModel: !0,
                      reservedHardwareDetail: void 0,
                    }),
                ],
              }),
          ],
        });
      }
      var T = t(28188),
        F = t(60014),
        E = t(55963),
        L = t(73371),
        O = t.n(L),
        P = t(52038),
        M = t(94636),
        R = t(20446),
        H = t(9202),
        W = t.n(H),
        q = t(35380);
      function U(e) {
        const { appid: n, color: t, bgcolor: o } = e,
          s = (0, F.n9)(),
          r = (0, q.$5)(n),
          a = (0, E.L3)(s);
        return (0, d.jsx)("div", {
          className: W().WishlistHoverCtn,
          children: (0, d.jsx)(M.E, {
            snr: a,
            id: r,
            classOverride: (0, P.A)(
              O().WishlistButtonNotTop,
              W().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: { color: t, backgroundColor: o },
          }),
        });
      }
      function $(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, R.O)(e.args.color, "black"),
          o = (0, R.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(U, { appid: n, color: t, bgcolor: o });
      }
      var z = t(10026),
        Q = t.n(z),
        V = t(76217),
        Z = t(68009),
        X = t(1062),
        Y = t(12155),
        K = t(4434),
        J = t(84547),
        ee = t(32545),
        ne = t.n(ee);
      function te(e) {
        const { appID: n, classOverride: t, styleOverride: o } = e,
          [r, a] = (0, s.useState)(!1),
          i = (0, K.m)("GameHoverFollowButton"),
          { elDialogElement: l, fnShowLogonDialog: _ } = (0, J.E)(),
          m = (0, Z.Fh)(n),
          { mutateAsync: g } = (0, X.L)(n, !m, void 0);
        return (0, d.jsxs)(V.Z, {
          className: (0, P.A)(ne().FollowButton, t),
          onClick: async (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              u.iA.logged_in
                ? (a(!0), await g(), i.token.reason || a(!1))
                : _();
          },
          style: o,
          children: [
            m ? (0, d.jsx)(Y.pPV, {}) : (0, d.jsx)(Y.c9e, {}),
            (0, d.jsx)("div", {
              className: (0, P.A)(
                ne().FollowButtonText,
                r && ne().FollowLoadingText,
                "FollowGameButton",
              ),
              children: (0, c.we)(
                m ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
              ),
            }),
            l,
          ],
        });
      }
      function oe(e) {
        const { appid: n, color: t, bgcolor: o } = e;
        (0, F.n9)();
        return (0, d.jsx)(te, {
          appID: n,
          classOverride: (0, P.A)(
            O().FollowGameButtonNotTop,
            Q().BBCodeFollowButton,
          ),
          styleOverride: { color: t, backgroundColor: o },
        });
      }
      function se(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, R.O)(e.args.color, "black"),
          o = (0, R.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(oe, { appid: n, color: t, bgcolor: o });
      }
      var re = t(94057),
        ae = t(29868),
        ie = t(6083);
      function le(e) {
        return e < 10 ? "0" + e : e;
      }
      function ce(e) {
        const { giveawayid: n } = e,
          t = (0, re.w)(n),
          {
            bLoadingGiveawayInfo: o,
            winner_count: r,
            closed: a,
            seconds_until_drawing: i,
          } = t;
        return o
          ? null
          : (0, d.jsxs)("div", {
              className: ae.countdownCtn,
              children: [
                Boolean(a) &&
                  (0, d.jsx)("div", {
                    className: ae.Closed,
                    children:
                      r > 0
                        ? (0, c.we)("#Giveaway_Closed", (0, ie.D)(r))
                        : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                  }),
                Boolean(!a) &&
                  (0, d.jsxs)(s.Fragment, {
                    children: [
                      Boolean(i <= 0)
                        ? (0, d.jsxs)("div", {
                            className: ae.Throbber,
                            children: [
                              (0, d.jsx)(N.t, { size: "small" }),
                              (0, d.jsx)("div", {
                                children: (0, c.we)("#Giveaway_RandomDraw"),
                              }),
                            ],
                          })
                        : (0, d.jsxs)("div", {
                            className: ae.CountDownCtn,
                            children: [
                              (0, d.jsx)("div", {
                                className: ae.CountDownTime,
                                children:
                                  le(Math.floor(i / 60)) + ":" + le(i % 60),
                              }),
                              (0, d.jsxs)("div", {
                                className: ae.CountDownText,
                                children: [
                                  (0, c.we)("#Giveaway_CountDown2"),
                                  " ",
                                  (0, c.we)("#Giveaway_KeepWatching"),
                                ],
                              }),
                            ],
                          }),
                      Boolean(r > 0) &&
                        (0, d.jsxs)("div", {
                          className: ae.WinnerInfo,
                          children: [
                            (0, d.jsx)("div", {
                              className: ae.WinnerCount,
                              children: (0, ie.D)(r),
                            }),
                            (0, d.jsx)("div", {
                              className: ae.WinnerText,
                              children: (0, c.we)("#Giveaway_Congratulation"),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            });
      }
      var ue = t(10962),
        de = t(39733),
        _e = t(56283),
        me = t(82477),
        ge = t(92757),
        we = t(39256),
        ve = t(99487),
        pe = t(7193),
        he = t(39199),
        Ie = t(60860),
        ye = t(76647),
        fe = t(40353);
      function De(e) {
        const { eventModel: n, nEventBadgeID: t } = e,
          o = (0, de.fy)(t);
        if (o?.level > 0) {
          let e = o.level;
          if (n?.BHasSaleEnabled()) {
            const o = n.GetSaleSectionsByType("badge_progress");
            if (1 == o?.length) {
              const s = o[0].badge_progress;
              if (s?.event_badgeid == t && s?.granted_by_discovery_queue) {
                const t = s.levels[s.levels.length - 1].level;
                return (0, d.jsx)(Ce, {
                  eventModel: n,
                  nBadgeLevel: e,
                  nMaxLevel: t,
                });
              }
            }
          }
          return (0, d.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, ie.D)(e),
          });
        }
        return null;
      }
      function Ce(e) {
        const { eventModel: n, nBadgeLevel: t, nMaxLevel: o } = e,
          r = s.useMemo(() => {
            const e = n
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [n]),
          { storePageFilter: a, eStoreDiscoveryQueueType: i } = s.useMemo(
            () => (0, pe.lx)(n, r),
            [n, r],
          ),
          l = (0, he.Uf)(i, a),
          c = Math.min(t + l, o);
        return (0, d.jsx)("span", {
          className: "DisplayBadgeProgress",
          children: (0, ie.D)(c),
        });
      }
      function xe(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args, "eventid"));
        return u.iA.logged_in && t
          ? (0, d.jsx)(De, { nEventBadgeID: t, eventModel: n })
          : null;
      }
      function be(e) {
        const { nDoorIndex: n, children: t } = e,
          o = (0, f.OM)(n),
          { fnOpenDoor: r } = (0, f.OC)(),
          [a, i] = s.useState(!1),
          [l, _] = s.useState(!1);
        return (0, d.jsx)(_e.$n, {
          disabled: o,
          onClick: (e) => {
            a ||
              (u.iA.logged_in
                ? (i(!0),
                  r(n, !0, null, !1)
                    .then((e) => {
                      e || _(!0), i(!1);
                    })
                    .catch(() => {
                      _(!0), i(!1);
                    }))
                : (0, me.vg)());
          },
          children: Boolean(l)
            ? (0, d.jsx)("div", {
                children: (0, c.we)("#GrantAwardError_Busy"),
              })
            : (0, d.jsxs)(d.Fragment, {
                children: [
                  Boolean(a) && (0, d.jsx)(N.t, { size: "small" }),
                  Boolean(o) && (0, d.jsx)(Y.Jlk, {}),
                  t,
                ],
              }),
        });
      }
      function je(e) {
        const n = Number.parseInt((0, m.j$)(e.args)) || 0;
        return n >= 0 && n < 32
          ? (0, d.jsx)(be, { nDoorIndex: n, children: e.children })
          : null;
      }
      const Se = (0, ge.y)(ye.H);
      function ke(e) {
        const n = Number.parseInt((0, m.j$)(e.args)),
          { event: t, showErrorInfo: o } = e.context;
        if (n) {
          const s = t?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == n,
          );
          if (s >= 0) {
            const n = t.GetDayIndexFromEventStart();
            return (0, d.jsx)(Ie.Cs, {
              location: o ? Ie.HY : Ie.bs,
              children: (0, d.jsx)(Se, {
                event: t,
                section: t.jsondata.sale_sections[s],
                activeTab: new ve.y(null, n),
                language: e.language,
                nSaleDayIndex: n,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: o
                  ? fe.S.EPreviewMode_Enabled
                  : fe.S.EPreviewMode_Disabled,
              }),
            });
          }
          if (o)
            return (0, d.jsxs)("div", {
              className: we.ErrorDiv,
              children: ["Error could not find sale section ", n],
            });
        }
        return null;
      }
      var Ne = t(30894),
        Ge = t(18657),
        Be = t.n(Ge),
        Ae = t(81204);
      function Te(e) {
        const { clanAccountID: n, color: t, bgcolor: o } = e;
        (0, Ne.L2)();
        const [r, a] = s.useState(!1);
        return (0, d.jsx)("div", {
          className: (0, P.A)(Be().BBCodeFollowButton, r && Be().isHovered),
          onMouseEnter: () => a(!0),
          onMouseLeave: () => a(!1),
          children: (0, d.jsx)(Ae.Q, {
            nCreatorAccountID: n,
            classOverride: O().FollowGameButtonNotTop,
            styleOverride: { color: t, backgroundColor: o },
            followType: "group",
          }),
        });
      }
      function Fe(e) {
        const { event: n } = e.context,
          t = Number(e.args.groupid) || n.clanSteamID.GetAccountID();
        if (!t) return null;
        const o = (0, R.O)(e.args.color, "black"),
          s = (0, R.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(Te, { clanAccountID: t, color: o, bgcolor: s });
      }
      let Ee = null;
      function Le(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args, "appid")),
          o = Number.parseInt((0, m.j$)(e.args, "itemdefid")),
          s = Number.parseInt((0, m.j$)(e.args, "maxquantity")),
          r = (0, m.j$)(e.args, "calltoaction");
        return (0, y.gS)(t, o)
          ? (0, d.jsx)(T.f, {
              language: e.language,
              clanAccountID: n.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: t, nItemDefID: o, max_quantity: s },
              strCallToAction: r,
            })
          : (0, d.jsx)(N.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function Oe(e) {
        const n = (function () {
          const [e, n] = s.useState(h.Get().GetCounts());
          return (
            s.useEffect(() => {
              e || h.Get().LoadCounts().then(n);
            }, []),
            e
          );
        })();
        if (!n) return (0, d.jsx)(N.t, { size: "small" });
        const t = Number.parseInt((0, m.j$)(e.args));
        let o = n.verified;
        switch (t) {
          case _.sd:
            o = n.playable;
            break;
          case _.V8:
            o = n.unsupported;
        }
        return (0, d.jsx)("span", { children: (0, ie.D)(Number(o)) });
      }
      function Pe(e) {
        const n = (0, I.j)(u.iA.accountid, "library");
        if (!n) return (0, d.jsx)(N.t, { size: "small" });
        const t = Number.parseInt((0, m.j$)(e.args));
        let o = n.verifiedList?.length || 0;
        switch (t) {
          case _.sd:
            o = n.playableList?.length || 0;
            break;
          case _.V8:
            o = n.unsupportedList?.length || 0;
            break;
          case _.YX:
            o = n.unknownList?.length || 0;
        }
        return (0, d.jsx)("span", { children: (0, ie.D)(Number(o)) });
      }
      function Me(e) {
        const n = Number.parseInt((0, m.j$)(e.args)),
          t =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, m.j$)(e.args, "hide")));
        return n >= 0
          ? (0, d.jsx)(Re, { nDoorIndex: n, bHide: t, children: e.children })
          : null;
      }
      function Re(e) {
        const { nDoorIndex: n, bHide: t, children: o } = e,
          s = (0, f.OM)(n);
        return null == s
          ? null
          : (s && !t) || (!s && t)
            ? (0, d.jsx)(d.Fragment, { children: e.children })
            : null;
      }
      function He(e) {
        if (u.iA.logged_in) {
          const n = Number.parseInt((0, m.j$)(e.args)),
            t = Number.parseInt((0, m.j$)(e.args, "mod"));
          if (t > 0 && n < t && u.iA.accountid % t == n) return e.children;
        }
        return null;
      }
      function We(e) {
        const n = (0, m.j$)(e.args);
        return n?.trim().length > 0
          ? (0, d.jsx)("div", { className: n.trim(), children: e.children })
          : (0, d.jsx)(d.Fragment, { children: e.children });
      }
      function qe(e) {
        return (0, d.jsx)("span", {
          className: D.LocalizeBlock,
          children: (0, c.oW)(
            e.children,
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
          ),
        });
      }
      function Ue(e) {
        let n = (0, m.j$)(e.args);
        return n
          ? (0, d.jsx)(ce, { giveawayid: n })
          : (0, d.jsx)(s.Fragment, {});
      }
      function $e(e) {
        const { showErrorInfo: n, event: t } = e.context,
          o = Number.parseInt((0, m.j$)(e.args)),
          r = s.useMemo(
            () =>
              t.jsondata.sale_sections?.find(
                (e) =>
                  "vo_internal" == e.section_type &&
                  ("reservation_widget" ==
                    e.internal_section_data?.internal_type ||
                    "while_supplies_last" ==
                      e.internal_section_data?.internal_type),
              ),
            [t],
          );
        if (o && r) {
          const n = Number.parseInt((0, m.j$)(e.args, "depositpackageid")),
            t = Number.parseInt((0, m.j$)(e.args, "psulesspackageid")),
            s = (0, m.j$)(e.args, "out_of_stock_override"),
            a = (0, m.j$)(e.args, "delivery_override"),
            i = (0, m.j$)(e.args, "delivery_override_out_of_stock");
          return (0, d.jsx)(A, {
            section: r,
            reservationPackageID: o,
            depositPackageID: n,
            psuLessPackageID: t,
            strOutOfStockOverride: s,
            strDeliveryOverride: i || a,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(i),
          });
        }
        return (0, d.jsx)(d.Fragment, {});
      }
      var ze = t(52885);
      function Qe(e) {
        const { bSalePage: n } = e,
          [t, d] = s.useState(i.KN.IsInitialized());
        return (
          s.useEffect(() => {
            a.Vw.Init(new r.D(u.TS.WEBAPI_BASE_URL)),
              l.O3.Init(),
              n &&
                ze.us.AddDictionary(
                  (null == Ee &&
                    (Ee = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: Le,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      ["wishlist", { Constructor: $, autocloses: !1 }],
                      ["followgame", { Constructor: se, autocloses: !1 }],
                      ["followgroup", { Constructor: Fe, autocloses: !1 }],
                      ["deckcompatcount", { Constructor: Oe, autocloses: !1 }],
                      [
                        "deckcompatuserlibrarycount",
                        { Constructor: Pe, autocloses: !1 },
                      ],
                      ["giveawayinfo", { Constructor: Ue, autocloses: !1 }],
                      ["price", { Constructor: ue.zD, autocloses: !1 }],
                      ["pricesavings", { Constructor: ue.y7, autocloses: !1 }],
                      [
                        "eventdoorvisibility",
                        { Constructor: Me, autocloses: !1 },
                      ],
                      ["chooseaccount", { Constructor: He, autocloses: !1 }],
                      [
                        "badgecurrentlevel",
                        { Constructor: xe, autocloses: !1 },
                      ],
                      ["optindoorquest", { Constructor: je, autocloses: !1 }],
                      ["classname", { Constructor: We, autocloses: !1 }],
                      ["localize", { Constructor: qe, autocloses: !1 }],
                      ["salesection", { Constructor: ke, autocloses: !1 }],
                      [
                        "reservationbutton",
                        { Constructor: $e, autocloses: !1 },
                      ],
                    ])),
                  Ee),
                ),
              i.KN.InitGlobal().then(() => d(!0));
          }, [n]),
          s.useEffect(() => {
            const e = (0, c.l4)();
            e && o.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
  },
]);
