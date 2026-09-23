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
      t.d(n, { H: () => s, s: () => i });
      var o = t(90626),
        r = t(11158);
      let a = 0;
      function s(e, n) {
        (0, o.useEffect)(() => {
          if (!e && !n)
            return (
              a++,
              () => {
                0 == --a && (0, r.s)();
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
          s(n);
      }
    },
    94057: (e, n, t) => {
      "use strict";
      t.d(n, { w: () => p });
      var o = t(34629),
        r = t(41735),
        a = t.n(r),
        s = t(14947),
        i = t(65946),
        l = t(90626),
        c = t(6419),
        u = t(6144),
        d = t(84933),
        m = t(78327);
      class _ {
        constructor() {
          (0, s.Gn)(this);
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
      (0, o.Cg)([s.sH], _.prototype, "giveaway_id", void 0),
        (0, o.Cg)([s.sH], _.prototype, "seconds_until_drawing", void 0),
        (0, o.Cg)([s.sH], _.prototype, "rtime_start", void 0),
        (0, o.Cg)([s.sH], _.prototype, "rtime_end", void 0),
        (0, o.Cg)([s.sH], _.prototype, "closed", void 0),
        (0, o.Cg)([s.sH], _.prototype, "winner_count", void 0);
      class g {
        constructor() {
          (0, s.Gn)(this);
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
            (o = await a().get(t, { params: r })),
            (0, s.h5)(() => {
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
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
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
      (0, o.Cg)([s.sH], g.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, o.Cg)([s.XI], g.prototype, "CopyToGiveaway", null);
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
          [r, a, s] = (0, i.q3)(() => [
            o?.winner_count,
            o?.closed,
            o?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !o || null == o.giveaway_id || !o.BStarted() || void 0 === r,
          winner_count: r,
          closed: a,
          seconds_until_drawing: s,
        };
      }
      (0, o.Cg)([c.o], w.prototype, "ClearRefreshInterval", null),
        (0, o.Cg)([c.o], w.prototype, "ClearCountDown", null),
        (0, o.Cg)([c.o], w.prototype, "SetupRefreshDataInterval", null),
        (0, o.Cg)([c.o], w.prototype, "SetupCountDown", null);
    },
    84173: (e, n, t) => {
      "use strict";
      t.d(n, { d: () => Xe });
      var o = t(7850),
        r = t(19367),
        a = t(90626),
        s = t(72034),
        i = t(51006),
        l = t(91254),
        c = t(61859),
        u = t(78327),
        d = t(34104),
        m = t(80902),
        _ = t(69071);
      const g = 3e5;
      function w() {
        return {
          queryKey: ["DeckCompatCounts"],
          queryFn: () =>
            (async function () {
              const e = await (0, _.d)(
                "ajaxgetuserdeckcompatcounts",
                new URLSearchParams(),
              );
              if (!e.counts)
                throw new Error(
                  "ajaxgetuserdeckcompatcounts answered without counts",
                );
              return e.counts;
            })(),
          staleTime: g,
          retry: !1,
        };
      }
      function v(e, n) {
        switch (n) {
          case d.sd:
            return e?.playable;
          case d.V8:
            return e?.unsupported;
          default:
            return e?.verified;
        }
      }
      var p = t(59952),
        h = t(69854),
        I = t(72668),
        f = t(6878),
        y = t(22837),
        D = t(66418),
        x = t(1090),
        b = t(53807),
        C = t(62490),
        j = t(84811),
        k = t(22797),
        N = t(70189);
      const G = a.Fragment;
      function B(e) {
        const {
            reservationPackageID: n,
            depositPackageID: t,
            bIsPreview: r,
            psuLessPackageID: s,
            strOutOfStockOverride: i,
            strDeliveryOverride: l,
            bDeliveryOverrideOnlyIfOutOfStock: u,
            section: d,
          } = e,
          { data: m } = (0, x.DR)(n),
          { data: _ } = (0, x.DR)(s),
          g = (0, a.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + n,
                reservation_package: n,
                deposit_package: t,
                localized_reservation_desc: (0, C.$Y)([], y.bP9, null),
                localized_out_of_stock_override: (0, C.$Y)(
                  [i || null],
                  y.bP9,
                  null,
                ),
                localized_delivery_override_desc: (0, C.$Y)(
                  [l || null],
                  y.bP9,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(u),
                psu_less_package: s,
              },
            ],
            [n, t, i, l, u, s],
          );
        if (!m || (s && !_))
          return (0, o.jsx)(k.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const w = !D.iA.logged_in || !m.account_restricted_from_purchasing,
          v =
            m.reservation_state == b.G.k_EPurchaseReservationState_Reserved
              ? m
              : void 0;
        return (0, o.jsxs)(j.tH, {
          children: [
            (0, o.jsx)(a.Suspense, {
              fallback: null,
              children: (0, o.jsx)(G, { bIsPreview: !!r, rgReservationDef: g }),
            }),
            Boolean(m.allow_purchase_in_country) &&
              (0, o.jsxs)("div", {
                className: g[0].unique_id,
                children: [
                  (0, o.jsx)(N.b, {
                    reservationDef: g[0],
                    hardwareDetail: m,
                    bPSULessModel: !1,
                    reservedHardwareDetail: v,
                  }),
                  w &&
                    (0, o.jsx)(N.p, {
                      section: d,
                      reservationDef: g[0],
                      hardwareDetail: m,
                      reservedHardwareDetail: v,
                    }),
                  _ &&
                    _?.allow_purchase_in_country &&
                    (0, o.jsx)(N.b, {
                      reservationDef: g[0],
                      hardwareDetail: _,
                      bPSULessModel: !0,
                      reservedHardwareDetail: void 0,
                    }),
                ],
              }),
          ],
        });
      }
      var S = t(28188),
        A = t(60014),
        F = t(73371),
        T = t.n(F),
        O = t(52038),
        E = t(20446),
        P = t(10026),
        L = t.n(P),
        M = t(76217),
        H = t(68009),
        R = t(1062),
        W = t(12155),
        q = t(4434),
        U = t(84547),
        $ = t(32545),
        Q = t.n($);
      function z(e) {
        const { appID: n, classOverride: t, styleOverride: r } = e,
          [s, i] = (0, a.useState)(!1),
          l = (0, q.m)("GameHoverFollowButton"),
          { elDialogElement: d, fnShowLogonDialog: m } = (0, U.l)(),
          _ = (0, H.Fh)(n),
          { mutateAsync: g } = (0, R.L)(n, !_, void 0);
        return (0, o.jsxs)(M.Z, {
          className: (0, O.A)(Q().FollowButton, t),
          onClick: async (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              u.iA.logged_in
                ? (i(!0), await g(), l.token.reason || i(!1))
                : m();
          },
          style: r,
          children: [
            _ ? (0, o.jsx)(W.pPV, {}) : (0, o.jsx)(W.c9e, {}),
            (0, o.jsx)("div", {
              className: (0, O.A)(
                Q().FollowButtonText,
                s && Q().FollowLoadingText,
                "FollowGameButton",
              ),
              children: (0, c.we)(
                _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
              ),
            }),
            d,
          ],
        });
      }
      function Z(e) {
        const { appid: n, color: t, bgcolor: r } = e;
        (0, A.n9)();
        return (0, o.jsx)(z, {
          appID: n,
          classOverride: (0, O.A)(
            T().FollowGameButtonNotTop,
            L().BBCodeFollowButton,
          ),
          styleOverride: { color: t, backgroundColor: r },
        });
      }
      function X(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, E.O)(e.args.color, "black"),
          r = (0, E.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(Z, { appid: n, color: t, bgcolor: r });
      }
      var V = t(37744),
        Y = t(18657),
        J = t.n(Y),
        K = t(10705);
      function ee(e) {
        const { clanAccountID: n, color: t, bgcolor: r } = e;
        (0, V.mx)();
        const [s, i] = a.useState(!1);
        return (0, o.jsx)("div", {
          className: (0, O.A)(J().BBCodeFollowButton, s && J().isHovered),
          onMouseEnter: () => i(!0),
          onMouseLeave: () => i(!1),
          children: (0, o.jsx)(K.Q, {
            nCreatorAccountID: n,
            classOverride: T().FollowGameButtonNotTop,
            styleOverride: { color: t, backgroundColor: r },
            followType: "group",
          }),
        });
      }
      function ne(e) {
        const { event: n } = e.context,
          t = Number(e.args.groupid) || n?.clanSteamID.GetAccountID();
        if (!t) return null;
        const r = (0, E.O)(e.args.color, "black"),
          a = (0, E.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(ee, { clanAccountID: t, color: r, bgcolor: a });
      }
      var te = t(55963),
        oe = t(94636),
        re = t(9202),
        ae = t.n(re),
        se = t(14987);
      function ie(e) {
        const { appid: n, color: t, bgcolor: r } = e,
          a = (0, A.n9)(),
          s = (0, se.$5)(n),
          i = (0, te.L3)(a);
        return (0, o.jsx)("div", {
          className: ae().WishlistHoverCtn,
          children: (0, o.jsx)(oe.E, {
            snr: i,
            id: s,
            classOverride: (0, O.A)(
              T().WishlistButtonNotTop,
              ae().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: { color: t, backgroundColor: r },
            bShowInGamepadUI: !0,
          }),
        });
      }
      function le(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, E.O)(e.args.color, "black"),
          r = (0, E.O)(e.args.bgcolor, "white");
        return (0, o.jsx)(ie, { appid: n, color: t, bgcolor: r });
      }
      let ce = null;
      var ue = t(94057),
        de = t(29868),
        me = t(6083);
      function _e(e) {
        return e < 10 ? "0" + e : e;
      }
      function ge(e) {
        const { giveawayid: n } = e,
          t = (0, ue.w)(n),
          {
            bLoadingGiveawayInfo: r,
            winner_count: s,
            closed: i,
            seconds_until_drawing: l,
          } = t;
        return r
          ? null
          : (0, o.jsxs)("div", {
              className: de.countdownCtn,
              children: [
                Boolean(i) &&
                  (0, o.jsx)("div", {
                    className: de.Closed,
                    children:
                      s > 0
                        ? (0, c.we)("#Giveaway_Closed", (0, me.D)(s))
                        : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                  }),
                Boolean(!i) &&
                  (0, o.jsxs)(a.Fragment, {
                    children: [
                      Boolean(l <= 0)
                        ? (0, o.jsxs)("div", {
                            className: de.Throbber,
                            children: [
                              (0, o.jsx)(k.t, { size: "small" }),
                              (0, o.jsx)("div", {
                                children: (0, c.we)("#Giveaway_RandomDraw"),
                              }),
                            ],
                          })
                        : (0, o.jsxs)("div", {
                            className: de.CountDownCtn,
                            children: [
                              (0, o.jsx)("div", {
                                className: de.CountDownTime,
                                children:
                                  _e(Math.floor(l / 60)) + ":" + _e(l % 60),
                              }),
                              (0, o.jsxs)("div", {
                                className: de.CountDownText,
                                children: [
                                  (0, c.we)("#Giveaway_CountDown2"),
                                  " ",
                                  (0, c.we)("#Giveaway_KeepWatching"),
                                ],
                              }),
                            ],
                          }),
                      Boolean(s > 0) &&
                        (0, o.jsxs)("div", {
                          className: de.WinnerInfo,
                          children: [
                            (0, o.jsx)("div", {
                              className: de.WinnerCount,
                              children: (0, me.D)(s),
                            }),
                            (0, o.jsx)("div", {
                              className: de.WinnerText,
                              children: (0, c.we)("#Giveaway_Congratulation"),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            });
      }
      var we = t(40895);
      function ve(e) {
        const n = Number(e.args.packageid);
        return n
          ? (0, o.jsx)(we.eF, {
              packageID: n,
              display_style: (0, we._w)(e.args.display),
            })
          : null;
      }
      function pe(e) {
        const n = Number(e.args.packageid),
          t = Number(e.args.compareid);
        return n && t
          ? (0, o.jsx)(we.hJ, { packageID: n, compareID: t })
          : null;
      }
      var he = t(97670),
        Ie = t(39733),
        fe = t(56283),
        ye = t(92757),
        De = t(39256),
        xe = t(99487),
        be = t(7193),
        Ce = t(39199),
        je = t(60860),
        ke = t(15604),
        Ne = t(40353);
      function Ge(e) {
        const { eventModel: n, nEventBadgeID: t } = e,
          r = (0, Ie.fy)(t);
        if (r?.level > 0) {
          let e = r.level;
          if (n?.BHasSaleEnabled()) {
            const r = n.GetSaleSectionsByType("badge_progress");
            if (1 == r?.length) {
              const a = r[0].badge_progress;
              if (a?.event_badgeid == t && a?.granted_by_discovery_queue) {
                const t = a.levels[a.levels.length - 1].level;
                return (0, o.jsx)(Be, {
                  eventModel: n,
                  nBadgeLevel: e,
                  nMaxLevel: t,
                });
              }
            }
          }
          return (0, o.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, me.D)(e),
          });
        }
        return null;
      }
      function Be(e) {
        const { eventModel: n, nBadgeLevel: t, nMaxLevel: r } = e,
          s = a.useMemo(() => {
            const e = n
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [n]),
          { storePageFilter: i, eStoreDiscoveryQueueType: l } = a.useMemo(
            () => (0, be.lx)(n, s),
            [n, s],
          ),
          c = (0, Ce.Uf)(l, i),
          u = Math.min(t + c, r);
        return (0, o.jsx)("span", {
          className: "DisplayBadgeProgress",
          children: (0, me.D)(u),
        });
      }
      function Se(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, p.j$)(e.args, "eventid"));
        return u.iA.logged_in && t
          ? (0, o.jsx)(Ge, { nEventBadgeID: t, eventModel: n })
          : null;
      }
      function Ae(e) {
        const { nDoorIndex: n, children: t } = e,
          r = (0, I.OM)(n),
          s = (0, I.gP)(),
          [i, l] = a.useState(!1),
          [d, m] = a.useState(!1),
          { elDialogElement: _, fnShowLogonDialog: g } = (0, U.l)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(fe.$n, {
              disabled: r,
              onClick: (e) => {
                i ||
                  (u.iA.logged_in
                    ? (l(!0),
                      s({ iDoorIndex: n })
                        .then((e) => {
                          e || m(!0), l(!1);
                        })
                        .catch(() => {
                          m(!0), l(!1);
                        }))
                    : g());
              },
              children: Boolean(d)
                ? (0, o.jsx)("div", {
                    children: (0, c.we)("#GrantAwardError_Busy"),
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      Boolean(i) && (0, o.jsx)(k.t, { size: "small" }),
                      Boolean(r) && (0, o.jsx)(W.Jlk, {}),
                      t,
                    ],
                  }),
            }),
            _,
          ],
        });
      }
      function Fe(e) {
        const n = Number.parseInt((0, p.j$)(e.args)) || 0;
        return n >= 0 && n < 32
          ? (0, o.jsx)(Ae, { nDoorIndex: n, children: e.children })
          : null;
      }
      const Te = (0, ye.y)(ke.H);
      function Oe(e) {
        const n = Number.parseInt((0, p.j$)(e.args)),
          { event: t, showErrorInfo: r } = e.context;
        if (n) {
          const a = t?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == n,
          );
          if (a >= 0) {
            const n = t.GetDayIndexFromEventStart();
            return (0, o.jsx)(je.Cs, {
              location: r ? je.HY : je.bs,
              children: (0, o.jsx)(Te, {
                event: t,
                section: t.jsondata.sale_sections[a],
                activeTab: new xe.y(null, n),
                language: e.language,
                nSaleDayIndex: n,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: r
                  ? Ne.S.EPreviewMode_Enabled
                  : Ne.S.EPreviewMode_Disabled,
              }),
            });
          }
          if (r)
            return (0, o.jsxs)("div", {
              className: De.ErrorDiv,
              children: ["Error could not find sale section ", n],
            });
        }
        return null;
      }
      let Ee = null;
      function Pe(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, p.j$)(e.args, "appid")),
          r = Number.parseInt((0, p.j$)(e.args, "itemdefid")),
          a = Number.parseInt((0, p.j$)(e.args, "maxquantity")),
          s = (0, p.j$)(e.args, "calltoaction");
        return (0, he.gS)(t, r, !1) && n
          ? (0, o.jsx)(S.f, {
              language: e.language,
              clanAccountID: n.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: t, nItemDefID: r, max_quantity: a },
              strCallToAction: s,
            })
          : (0, o.jsx)(k.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function Le(e) {
        const n = (function () {
          const { data: e } = (0, m.I)(w());
          return e;
        })();
        if (!n) return (0, o.jsx)(k.t, { size: "small" });
        const t = Number.parseInt((0, p.j$)(e.args));
        return (0, o.jsx)("span", { children: (0, me.D)(Number(v(n, t))) });
      }
      function Me(e) {
        const n = (0, h.jR)(u.iA.accountid, "library");
        if (!n) return (0, o.jsx)(k.t, { size: "small" });
        const t = Number.parseInt((0, p.j$)(e.args));
        let r = n.verifiedList?.length || 0;
        switch (t) {
          case d.sd:
            r = n.playableList?.length || 0;
            break;
          case d.V8:
            r = n.unsupportedList?.length || 0;
            break;
          case d.YX:
            r = n.unknownList?.length || 0;
        }
        return (0, o.jsx)("span", { children: (0, me.D)(Number(r)) });
      }
      function He(e) {
        const n = Number.parseInt((0, p.j$)(e.args)),
          t =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, p.j$)(e.args, "hide")));
        return n >= 0
          ? (0, o.jsx)(Re, { nDoorIndex: n, bHide: t, children: e.children })
          : null;
      }
      function Re(e) {
        const { nDoorIndex: n, bHide: t, children: r } = e,
          a = (0, I.OM)(n);
        return null == a
          ? null
          : (a && !t) || (!a && t)
            ? (0, o.jsx)(o.Fragment, { children: e.children })
            : null;
      }
      function We(e) {
        if (u.iA.logged_in) {
          const n = Number.parseInt((0, p.j$)(e.args)),
            t = Number.parseInt((0, p.j$)(e.args, "mod"));
          if (t > 0 && n < t && u.iA.accountid % t == n) return e.children;
        }
        return null;
      }
      function qe(e) {
        const n = (0, p.j$)(e.args);
        return n?.trim().length > 0
          ? (0, o.jsx)("div", { className: n.trim(), children: e.children })
          : (0, o.jsx)(o.Fragment, { children: e.children });
      }
      function Ue(e) {
        return (0, o.jsx)("span", {
          className: f.LocalizeBlock,
          children: (0, c.oW)(
            e.children,
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
            (0, o.jsx)("b", {}),
          ),
        });
      }
      function $e(e) {
        let n = (0, p.j$)(e.args);
        return n
          ? (0, o.jsx)(ge, { giveawayid: n })
          : (0, o.jsx)(a.Fragment, {});
      }
      function Qe(e) {
        const { showErrorInfo: n, event: t } = e.context,
          r = Number.parseInt((0, p.j$)(e.args)),
          s = a.useMemo(() => {
            if (t)
              return t.jsondata.sale_sections?.find(
                (e) =>
                  "vo_internal" == e.section_type &&
                  ("reservation_widget" ==
                    e.internal_section_data?.internal_type ||
                    "while_supplies_last" ==
                      e.internal_section_data?.internal_type),
              );
          }, [t]);
        if (r && s) {
          const n = Number.parseInt((0, p.j$)(e.args, "depositpackageid")),
            t = Number.parseInt((0, p.j$)(e.args, "psulesspackageid")),
            a = (0, p.j$)(e.args, "out_of_stock_override"),
            i = (0, p.j$)(e.args, "delivery_override"),
            l = (0, p.j$)(e.args, "delivery_override_out_of_stock");
          return (0, o.jsx)(B, {
            section: s,
            reservationPackageID: r,
            depositPackageID: n,
            psuLessPackageID: t,
            strOutOfStockOverride: a,
            strDeliveryOverride: l || i,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(l),
          });
        }
        return (0, o.jsx)(o.Fragment, {});
      }
      var ze = t(5729),
        Ze = t(69776);
      function Xe(e) {
        const { bSalePage: n } = e,
          [t, d] = a.useState(!1);
        return (
          (0, ze.H)(t, n),
          a.useEffect(() => {
            i.Vw.Init(new s.D(u.TS.WEBAPI_BASE_URL)), l.O3.Init(), d(!0);
          }, []),
          a.useEffect(() => {
            const e = (0, c.l4)();
            e && r.locale(e);
          }, []),
          t
            ? n
              ? (0, o.jsx)(Ze.d3, {
                  dictionary:
                    (null == Ee &&
                      (Ee = new Map([
                        ...Array.from(
                          (null == ce &&
                            (ce = new Map([
                              ["wishlist", { Constructor: le, autocloses: !1 }],
                              [
                                "followgroup",
                                { Constructor: ne, autocloses: !1 },
                              ],
                            ])),
                          ce).entries(),
                        ),
                        [
                          "itemdef",
                          {
                            Constructor: Pe,
                            autocloses: !1,
                            skipInternalNewline: !0,
                            allowWrapTextForCopying: !0,
                          },
                        ],
                        ["followgame", { Constructor: X, autocloses: !1 }],
                        [
                          "deckcompatcount",
                          { Constructor: Le, autocloses: !1 },
                        ],
                        [
                          "deckcompatuserlibrarycount",
                          { Constructor: Me, autocloses: !1 },
                        ],
                        ["giveawayinfo", { Constructor: $e, autocloses: !1 }],
                        ["price", { Constructor: ve, autocloses: !1 }],
                        ["pricesavings", { Constructor: pe, autocloses: !1 }],
                        [
                          "eventdoorvisibility",
                          { Constructor: He, autocloses: !1 },
                        ],
                        ["chooseaccount", { Constructor: We, autocloses: !1 }],
                        [
                          "badgecurrentlevel",
                          { Constructor: Se, autocloses: !1 },
                        ],
                        ["optindoorquest", { Constructor: Fe, autocloses: !1 }],
                        ["classname", { Constructor: qe, autocloses: !1 }],
                        ["localize", { Constructor: Ue, autocloses: !1 }],
                        ["salesection", { Constructor: Oe, autocloses: !1 }],
                        [
                          "reservationbutton",
                          { Constructor: Qe, autocloses: !1 },
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
