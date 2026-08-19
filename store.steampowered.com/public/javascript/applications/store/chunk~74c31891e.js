/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [12287],
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
    5729: (e, n, t) => {
      "use strict";
      t.d(n, { H: () => a, s: () => i });
      var o = t(90626),
        r = t(11158);
      let s = 0;
      function a(e, n) {
        (0, o.useEffect)(() => {
          if (!e && !n)
            return (
              s++,
              () => {
                0 == --s && (0, r.s)();
              }
            );
        }, [e, n]);
      }
      function i(e) {
        const [n, t] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          const n = window.setTimeout(() => t(!0), e);
          return () => window.clearTimeout(n);
        }, [e]),
          a(n);
      }
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
            r = { origin: self.origin };
          return (
            (o = await s().get(t, { params: r })),
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
      t.d(n, { d: () => Ve });
      var o = t(7850),
        r = t(19367),
        s = t(90626),
        a = t(72034),
        i = t(51006),
        l = t(82429),
        c = t(6379),
        u = t(61859),
        d = t(78327),
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
                d.TS.STORE_BASE_URL + "saleaction/ajaxgetuserdeckcompatcounts",
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
              ("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = h.s_globalSingletonStore)),
            h.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let e = (0, d.Tc)("deckcompatcount", "application_config");
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
        f = t(56631),
        y = t(35400),
        D = t(6878),
        C = t(22837),
        x = t(66418),
        b = t(1090),
        j = t(53807),
        S = t(62490),
        k = t(84811),
        N = t(22797),
        G = t(77291);
      const B = s.Fragment;
      function T(e) {
        const {
            reservationPackageID: n,
            depositPackageID: t,
            bIsPreview: r,
            psuLessPackageID: a,
            strOutOfStockOverride: i,
            strDeliveryOverride: l,
            bDeliveryOverrideOnlyIfOutOfStock: c,
            section: d,
          } = e,
          { data: _ } = (0, b.DR)(n),
          { data: m } = (0, b.DR)(a),
          g = (0, s.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + n,
                reservation_package: n,
                deposit_package: t,
                localized_reservation_desc: (0, S.$Y)([], C.bP9, null),
                localized_out_of_stock_override: (0, S.$Y)(
                  [i || null],
                  C.bP9,
                  null,
                ),
                localized_delivery_override_desc: (0, S.$Y)(
                  [l || null],
                  C.bP9,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(c),
                psu_less_package: a,
              },
            ],
            [n, t, i, l, c, a],
          );
        if (!_ || (a && !m))
          return (0, o.jsx)(N.t, {
            string: (0, u.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const w = !x.iA.logged_in || !_.account_restricted_from_purchasing,
          v =
            _.reservation_state == j.G.k_EPurchaseReservationState_Reserved
              ? _
              : void 0;
        return (0, o.jsxs)(k.tH, {
          children: [
            (0, o.jsx)(s.Suspense, {
              fallback: null,
              children: (0, o.jsx)(B, { bIsPreview: !!r, rgReservationDef: g }),
            }),
            Boolean(_.allow_purchase_in_country) &&
              (0, o.jsxs)("div", {
                className: g[0].unique_id,
                children: [
                  (0, o.jsx)(G.bk, {
                    reservationDef: g[0],
                    hardwareDetail: _,
                    bPSULessModel: !1,
                    reservedHardwareDetail: v,
                  }),
                  w &&
                    (0, o.jsx)(G.pc, {
                      section: d,
                      reservationDef: g[0],
                      hardwareDetail: _,
                      reservedHardwareDetail: v,
                    }),
                  m &&
                    m?.allow_purchase_in_country &&
                    (0, o.jsx)(G.bk, {
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
      var A = t(28188),
        F = t(60014),
        E = t(55963),
        L = t(73371),
        O = t.n(L),
        P = t(52038),
        H = t(94636),
        M = t(20446),
        R = t(9202),
        W = t.n(R),
        U = t(35380);
      function q(e) {
        const { appid: n, color: t, bgcolor: r } = e,
          s = (0, F.n9)(),
          a = (0, U.$5)(n),
          i = (0, E.L3)(s);
        return (0, o.jsx)("div", {
          className: W().WishlistHoverCtn,
          children: (0, o.jsx)(H.E, {
            snr: i,
            id: a,
            classOverride: (0, P.A)(
              O().WishlistButtonNotTop,
              W().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: { color: t, backgroundColor: r },
            bShowInGamepadUI: !0,
          }),
        });
      }
      function $(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, M.O)(e.args.color, "black"),
          r = (0, M.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(q, { appid: n, color: t, bgcolor: r });
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
        const { appID: n, classOverride: t, styleOverride: r } = e,
          [a, i] = (0, s.useState)(!1),
          l = (0, K.m)("GameHoverFollowButton"),
          { elDialogElement: c, fnShowLogonDialog: _ } = (0, J.lS)(),
          m = (0, Z.Fh)(n),
          { mutateAsync: g } = (0, X.L)(n, !m, void 0);
        return (0, o.jsxs)(V.Z, {
          className: (0, P.A)(ne().FollowButton, t),
          onClick: async (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              d.iA.logged_in
                ? (i(!0), await g(), l.token.reason || i(!1))
                : _();
          },
          style: r,
          children: [
            m ? (0, o.jsx)(Y.pPV, {}) : (0, o.jsx)(Y.c9e, {}),
            (0, o.jsx)("div", {
              className: (0, P.A)(
                ne().FollowButtonText,
                a && ne().FollowLoadingText,
                "FollowGameButton",
              ),
              children: (0, u.we)(
                m ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
              ),
            }),
            c,
          ],
        });
      }
      function oe(e) {
        const { appid: n, color: t, bgcolor: r } = e;
        (0, F.n9)();
        return (0, o.jsx)(te, {
          appID: n,
          classOverride: (0, P.A)(
            O().FollowGameButtonNotTop,
            Q().BBCodeFollowButton,
          ),
          styleOverride: { color: t, backgroundColor: r },
        });
      }
      function re(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, M.O)(e.args.color, "black"),
          r = (0, M.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(oe, { appid: n, color: t, bgcolor: r });
      }
      var se = t(94057),
        ae = t(29868),
        ie = t(6083);
      function le(e) {
        return e < 10 ? "0" + e : e;
      }
      function ce(e) {
        const { giveawayid: n } = e,
          t = (0, se.w)(n),
          {
            bLoadingGiveawayInfo: r,
            winner_count: a,
            closed: i,
            seconds_until_drawing: l,
          } = t;
        return r
          ? null
          : (0, o.jsxs)("div", {
              className: ae.countdownCtn,
              children: [
                Boolean(i) &&
                  (0, o.jsx)("div", {
                    className: ae.Closed,
                    children:
                      a > 0
                        ? (0, u.we)("#Giveaway_Closed", (0, ie.D)(a))
                        : (0, u.we)("#Giveaway_Closed_NoWinnerInfo"),
                  }),
                Boolean(!i) &&
                  (0, o.jsxs)(s.Fragment, {
                    children: [
                      Boolean(l <= 0)
                        ? (0, o.jsxs)("div", {
                            className: ae.Throbber,
                            children: [
                              (0, o.jsx)(N.t, { size: "small" }),
                              (0, o.jsx)("div", {
                                children: (0, u.we)("#Giveaway_RandomDraw"),
                              }),
                            ],
                          })
                        : (0, o.jsxs)("div", {
                            className: ae.CountDownCtn,
                            children: [
                              (0, o.jsx)("div", {
                                className: ae.CountDownTime,
                                children:
                                  le(Math.floor(l / 60)) + ":" + le(l % 60),
                              }),
                              (0, o.jsxs)("div", {
                                className: ae.CountDownText,
                                children: [
                                  (0, u.we)("#Giveaway_CountDown2"),
                                  " ",
                                  (0, u.we)("#Giveaway_KeepWatching"),
                                ],
                              }),
                            ],
                          }),
                      Boolean(a > 0) &&
                        (0, o.jsxs)("div", {
                          className: ae.WinnerInfo,
                          children: [
                            (0, o.jsx)("div", {
                              className: ae.WinnerCount,
                              children: (0, ie.D)(a),
                            }),
                            (0, o.jsx)("div", {
                              className: ae.WinnerText,
                              children: (0, u.we)("#Giveaway_Congratulation"),
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
        fe = t(98191),
        ye = t(40353);
      function De(e) {
        const { eventModel: n, nEventBadgeID: t } = e,
          r = (0, de.fy)(t);
        if (r?.level > 0) {
          let e = r.level;
          if (n?.BHasSaleEnabled()) {
            const r = n.GetSaleSectionsByType("badge_progress");
            if (1 == r?.length) {
              const s = r[0].badge_progress;
              if (s?.event_badgeid == t && s?.granted_by_discovery_queue) {
                const t = s.levels[s.levels.length - 1].level;
                return (0, o.jsx)(Ce, {
                  eventModel: n,
                  nBadgeLevel: e,
                  nMaxLevel: t,
                });
              }
            }
          }
          return (0, o.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, ie.D)(e),
          });
        }
        return null;
      }
      function Ce(e) {
        const { eventModel: n, nBadgeLevel: t, nMaxLevel: r } = e,
          a = s.useMemo(() => {
            const e = n
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [n]),
          { storePageFilter: i, eStoreDiscoveryQueueType: l } = s.useMemo(
            () => (0, pe.lx)(n, a),
            [n, a],
          ),
          c = (0, he.Uf)(l, i),
          u = Math.min(t + c, r);
        return (0, o.jsx)("span", {
          className: "DisplayBadgeProgress",
          children: (0, ie.D)(u),
        });
      }
      function xe(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args, "eventid"));
        return d.iA.logged_in && t
          ? (0, o.jsx)(De, { nEventBadgeID: t, eventModel: n })
          : null;
      }
      function be(e) {
        const { nDoorIndex: n, children: t } = e,
          r = (0, y.OM)(n),
          { fnOpenDoor: a } = (0, y.OC)(),
          [i, l] = s.useState(!1),
          [c, _] = s.useState(!1);
        return (0, o.jsx)(_e.$n, {
          disabled: r,
          onClick: (e) => {
            i ||
              (d.iA.logged_in
                ? (l(!0),
                  a(n, !0, null, !1)
                    .then((e) => {
                      e || _(!0), l(!1);
                    })
                    .catch(() => {
                      _(!0), l(!1);
                    }))
                : (0, me.vg)());
          },
          children: Boolean(c)
            ? (0, o.jsx)("div", {
                children: (0, u.we)("#GrantAwardError_Busy"),
              })
            : (0, o.jsxs)(o.Fragment, {
                children: [
                  Boolean(i) && (0, o.jsx)(N.t, { size: "small" }),
                  Boolean(r) && (0, o.jsx)(Y.Jlk, {}),
                  t,
                ],
              }),
        });
      }
      function je(e) {
        const n = Number.parseInt((0, m.j$)(e.args)) || 0;
        return n >= 0 && n < 32
          ? (0, o.jsx)(be, { nDoorIndex: n, children: e.children })
          : null;
      }
      const Se = (0, ge.y)(fe.H);
      function ke(e) {
        const n = Number.parseInt((0, m.j$)(e.args)),
          { event: t, showErrorInfo: r } = e.context;
        if (n) {
          const s = t?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == n,
          );
          if (s >= 0) {
            const n = t.GetDayIndexFromEventStart();
            return (0, o.jsx)(Ie.Cs, {
              location: r ? Ie.HY : Ie.bs,
              children: (0, o.jsx)(Se, {
                event: t,
                section: t.jsondata.sale_sections[s],
                activeTab: new ve.y(null, n),
                language: e.language,
                nSaleDayIndex: n,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: r
                  ? ye.S.EPreviewMode_Enabled
                  : ye.S.EPreviewMode_Disabled,
              }),
            });
          }
          if (r)
            return (0, o.jsxs)("div", {
              className: we.ErrorDiv,
              children: ["Error could not find sale section ", n],
            });
        }
        return null;
      }
      var Ne = t(72119),
        Ge = t(18657),
        Be = t.n(Ge),
        Te = t(10705);
      function Ae(e) {
        const { clanAccountID: n, color: t, bgcolor: r } = e;
        (0, Ne.L2)();
        const [a, i] = s.useState(!1);
        return (0, o.jsx)("div", {
          className: (0, P.A)(Be().BBCodeFollowButton, a && Be().isHovered),
          onMouseEnter: () => i(!0),
          onMouseLeave: () => i(!1),
          children: (0, o.jsx)(Te.Q, {
            nCreatorAccountID: n,
            classOverride: O().FollowGameButtonNotTop,
            styleOverride: { color: t, backgroundColor: r },
            followType: "group",
          }),
        });
      }
      function Fe(e) {
        const { event: n } = e.context,
          t = Number(e.args.groupid) || n.clanSteamID.GetAccountID();
        if (!t) return null;
        const r = (0, M.O)(e.args.color, "black"),
          s = (0, M.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(Ae, { clanAccountID: t, color: r, bgcolor: s });
      }
      let Ee = null;
      function Le(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, m.j$)(e.args, "appid")),
          r = Number.parseInt((0, m.j$)(e.args, "itemdefid")),
          s = Number.parseInt((0, m.j$)(e.args, "maxquantity")),
          a = (0, m.j$)(e.args, "calltoaction");
        return (0, f.gS)(t, r)
          ? (0, o.jsx)(A.f, {
              language: e.language,
              clanAccountID: n.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: t, nItemDefID: r, max_quantity: s },
              strCallToAction: a,
            })
          : (0, o.jsx)(N.t, {
              size: "small",
              position: "center",
              string: (0, u.we)("#Loading"),
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
        if (!n) return (0, o.jsx)(N.t, { size: "small" });
        const t = Number.parseInt((0, m.j$)(e.args));
        let r = n.verified;
        switch (t) {
          case _.sd:
            r = n.playable;
            break;
          case _.V8:
            r = n.unsupported;
        }
        return (0, o.jsx)("span", { children: (0, ie.D)(Number(r)) });
      }
      function Pe(e) {
        const n = (0, I.j)(d.iA.accountid, "library");
        if (!n) return (0, o.jsx)(N.t, { size: "small" });
        const t = Number.parseInt((0, m.j$)(e.args));
        let r = n.verifiedList?.length || 0;
        switch (t) {
          case _.sd:
            r = n.playableList?.length || 0;
            break;
          case _.V8:
            r = n.unsupportedList?.length || 0;
            break;
          case _.YX:
            r = n.unknownList?.length || 0;
        }
        return (0, o.jsx)("span", { children: (0, ie.D)(Number(r)) });
      }
      function He(e) {
        const n = Number.parseInt((0, m.j$)(e.args)),
          t =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, m.j$)(e.args, "hide")));
        return n >= 0
          ? (0, o.jsx)(Me, { nDoorIndex: n, bHide: t, children: e.children })
          : null;
      }
      function Me(e) {
        const { nDoorIndex: n, bHide: t, children: r } = e,
          s = (0, y.OM)(n);
        return null == s
          ? null
          : (s && !t) || (!s && t)
            ? (0, o.jsx)(o.Fragment, { children: e.children })
            : null;
      }
      function Re(e) {
        if (d.iA.logged_in) {
          const n = Number.parseInt((0, m.j$)(e.args)),
            t = Number.parseInt((0, m.j$)(e.args, "mod"));
          if (t > 0 && n < t && d.iA.accountid % t == n) return e.children;
        }
        return null;
      }
      function We(e) {
        const n = (0, m.j$)(e.args);
        return n?.trim().length > 0
          ? (0, o.jsx)("div", { className: n.trim(), children: e.children })
          : (0, o.jsx)(o.Fragment, { children: e.children });
      }
      function Ue(e) {
        return (0, o.jsx)("span", {
          className: D.LocalizeBlock,
          children: (0, u.oW)(
            e.children,
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
          ),
        });
      }
      function qe(e) {
        let n = (0, m.j$)(e.args);
        return n
          ? (0, o.jsx)(ce, { giveawayid: n })
          : (0, o.jsx)(s.Fragment, {});
      }
      function $e(e) {
        const { showErrorInfo: n, event: t } = e.context,
          r = Number.parseInt((0, m.j$)(e.args)),
          a = s.useMemo(
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
        if (r && a) {
          const n = Number.parseInt((0, m.j$)(e.args, "depositpackageid")),
            t = Number.parseInt((0, m.j$)(e.args, "psulesspackageid")),
            s = (0, m.j$)(e.args, "out_of_stock_override"),
            i = (0, m.j$)(e.args, "delivery_override"),
            l = (0, m.j$)(e.args, "delivery_override_out_of_stock");
          return (0, o.jsx)(T, {
            section: a,
            reservationPackageID: r,
            depositPackageID: n,
            psuLessPackageID: t,
            strOutOfStockOverride: s,
            strDeliveryOverride: l || i,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(l),
          });
        }
        return (0, o.jsx)(o.Fragment, {});
      }
      var ze = t(5729),
        Qe = t(1083);
      function Ve(e) {
        const { bSalePage: n } = e,
          [t, _] = s.useState(l.KN.IsInitialized());
        return (
          (0, ze.H)(t, n),
          s.useEffect(() => {
            i.Vw.Init(new a.D(d.TS.WEBAPI_BASE_URL)),
              c.O3.Init(),
              l.KN.InitGlobal().then(() => _(!0));
          }, []),
          s.useEffect(() => {
            const e = (0, u.l4)();
            e && r.locale(e);
          }, []),
          t
            ? n
              ? (0, o.jsx)(Qe.d3, {
                  dictionary:
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
                        ["followgame", { Constructor: re, autocloses: !1 }],
                        ["followgroup", { Constructor: Fe, autocloses: !1 }],
                        [
                          "deckcompatcount",
                          { Constructor: Oe, autocloses: !1 },
                        ],
                        [
                          "deckcompatuserlibrarycount",
                          { Constructor: Pe, autocloses: !1 },
                        ],
                        ["giveawayinfo", { Constructor: qe, autocloses: !1 }],
                        ["price", { Constructor: ue.zD, autocloses: !1 }],
                        [
                          "pricesavings",
                          { Constructor: ue.y7, autocloses: !1 },
                        ],
                        [
                          "eventdoorvisibility",
                          { Constructor: He, autocloses: !1 },
                        ],
                        ["chooseaccount", { Constructor: Re, autocloses: !1 }],
                        [
                          "badgecurrentlevel",
                          { Constructor: xe, autocloses: !1 },
                        ],
                        ["optindoorquest", { Constructor: je, autocloses: !1 }],
                        ["classname", { Constructor: We, autocloses: !1 }],
                        ["localize", { Constructor: Ue, autocloses: !1 }],
                        ["salesection", { Constructor: ke, autocloses: !1 }],
                        [
                          "reservationbutton",
                          { Constructor: $e, autocloses: !1 },
                        ],
                      ])),
                    Ee),
                  children: e.children,
                })
              : e.children
            : null
        );
      }
    },
  },
]);
