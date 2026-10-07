/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [61975],
    {
      71698: (x, W, t) => {
        "use strict";
        t.d(W, { H: () => F, s: () => A });
        var n = t(90626),
          U = t(41623);
        let u = 0;
        function F(p, D) {
          (0, n.useEffect)(() => {
            if (!(p || D))
              return (
                u++,
                () => {
                  --u == 0 && (0, U.s)();
                }
              );
          }, [p, D]);
        }
        function A(p) {
          const [D, E] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            const B = window.setTimeout(() => E(!0), p);
            return () => window.clearTimeout(B);
          }, [p]),
            F(D);
        }
      },
      37656: (x, W, t) => {
        "use strict";
        t.d(W, { w: () => Y });
        var n = t(41735),
          U = t.n(n),
          u = t(14947),
          F = t(65946),
          A = t(90626),
          p = t(27066),
          D = t(8323),
          E = t(30096),
          B = t(3166),
          H = Object.defineProperty,
          ee = Object.getOwnPropertyDescriptor,
          w = (I, s, r, g) => {
            for (
              var c = g > 1 ? void 0 : g ? ee(s, r) : s, h = I.length - 1, v;
              h >= 0;
              h--
            )
              (v = I[h]) && (c = (g ? v(s, r, c) : v(c)) || c);
            return g && c && H(s, r, c), c;
          };
        const M = class Ie {
          constructor() {
            (0, u.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const s = new Ie();
            return (
              (s.giveaway_id = this.giveaway_id),
              (s.seconds_until_drawing = this.seconds_until_drawing),
              (s.rtime_start = this.rtime_start),
              (s.rtime_end = this.rtime_end),
              (s.closed = this.closed),
              (s.winner_count = this.winner_count),
              s
            );
          }
        };
        w([u.sH], M.prototype, "giveaway_id", 2),
          w([u.sH], M.prototype, "seconds_until_drawing", 2),
          w([u.sH], M.prototype, "rtime_start", 2),
          w([u.sH], M.prototype, "rtime_end", 2),
          w([u.sH], M.prototype, "closed", 2),
          w([u.sH], M.prototype, "winner_count", 2);
        let K = M;
        const k = class X {
          constructor() {
            (0, u.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(s, r) {
            return s + "_" + r;
          }
          GetInfoByInstance(s, r) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(s, r),
            );
          }
          GetNextDrawChangeCallback(s) {
            return (
              this.m_mapNextDrawChangeCallback.has(s) ||
                this.m_mapNextDrawChangeCallback.set(s, new D.lu()),
              this.m_mapNextDrawChangeCallback.get(s)
            );
          }
          CopyToGiveaway(s, r) {
            r.closed != s.closed && (r.closed = s.closed),
              r.giveaway_id != s.giveaway_id && (r.giveaway_id = s.giveaway_id),
              r.rtime_start != s.rtime_start && (r.rtime_start = s.rtime_start),
              r.rtime_end != s.rtime_end && (r.rtime_end = s.rtime_end),
              r.winner_count != s.winner_count &&
                (r.winner_count = s.winner_count),
              r.seconds_until_drawing != s.seconds_until_drawing &&
                (r.seconds_until_drawing = s.seconds_until_drawing);
          }
          async ReloadGiveaway(s, r) {
            if (!s) return null;
            let g = B.TS.STORE_BASE_URL + "prizes/nextdraw/" + s,
              c = null,
              h = { origin: self.origin };
            return (
              (c = await U().get(g, { params: h })),
              (0, u.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(s) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(s, new K()),
                  this.CopyToGiveaway(
                    c.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(s),
                  ),
                  r !== void 0)
                ) {
                  const v = this.GetKey(s, r);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(v) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      v,
                      new K(),
                    ),
                    this.CopyToGiveaway(
                      c.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(v),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(s).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(s),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(s)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              X.s_Singleton ||
                ((X.s_Singleton = new X()), X.s_Singleton.Init()),
              X.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let s = (0, B.Tc)("giveawaynextdraw", "application_config");
              if (s && s.giveaway_id) {
                let r = new K();
                this.CopyToGiveaway(s, r),
                  this.m_mapGiveawayIDToNextDrawInfo.set(s.giveaway_id, r);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        w([u.sH], k.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          w([u.XI], k.prototype, "CopyToGiveaway", 1);
        let S = k;
        const _ = class ue {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = ue.s_GlobalInstance),
              (ue.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(s, r) {
            if ((this.ClearRefreshInterval(), !s.closed)) {
              let g =
                s.seconds_until_drawing <= 0 && s.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(r, g);
            }
          }
          SetupCountDown(s, r) {
            s > 0 && (this.m_intervalCountDownID = window.setInterval(r, 1e3));
          }
        };
        w([p.o], _.prototype, "ClearRefreshInterval", 1),
          w([p.o], _.prototype, "ClearCountDown", 1),
          w([p.o], _.prototype, "SetupRefreshDataInterval", 1),
          w([p.o], _.prototype, "SetupCountDown", 1);
        let m = _;
        function z(I, s) {
          const r = S.Get().GetInfoByInstance(I, s.m_myInstanceNumber);
          (r.seconds_until_drawing -= 1),
            r.seconds_until_drawing == 0 && s.ClearCountDown();
        }
        function Q(I, s) {
          const r = S.Get().GetInfoByInstance(I, s.m_myInstanceNumber);
          r &&
            r.BIsValid() &&
            r.seconds_until_drawing <= 0 &&
            !r.closed &&
            (s.ClearCountDown(),
            S.Get()
              .ReloadGiveaway(I, s.m_myInstanceNumber)
              .then((g) => {
                s.SetupCountDown(g.seconds_until_drawing, () => z(I, s));
              }));
        }
        function Y(I) {
          const [s] = (0, A.useState)(new m()),
            r = (0, E.CH)();
          (0, A.useEffect)(
            () => (
              S.Get()
                .ReloadGiveaway(I, s.m_myInstanceNumber)
                .then((C) => {
                  s.SetupRefreshDataInterval(C, () => Q(I, s)),
                    s.SetupCountDown(C.seconds_until_drawing, () => z(I, s)),
                    r();
                }),
              () => {
                s.ClearRefreshInterval(), s.ClearCountDown();
              }
            ),
            [s, I, r],
          );
          const g = S.Get().GetInfoByInstance(I, s.m_myInstanceNumber),
            [c, h, v] = (0, F.q3)(() => [
              g?.winner_count,
              g?.closed,
              g?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !g || g.giveaway_id == null || !g.BStarted() || c === void 0,
            winner_count: c,
            closed: h,
            seconds_until_drawing: v,
          };
        }
      },
      19188: (x, W, t) => {
        "use strict";
        t.d(W, { N: () => r });
        var n = t(7850),
          U = t(41735),
          u = t.n(U),
          F = t(75844),
          A = t(90626),
          p = t(90537),
          D = t(58483),
          E = t(82385),
          B = t(96538),
          H = t(88843),
          ee = t.n(H),
          w = t(64641),
          M = t.n(w),
          K = t(85599),
          k = t(34592),
          S = t(3166),
          _ = t(72609),
          m = t(6469),
          z = t(53107),
          Q = t(25792),
          Y = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          s = (c, h, v, C) => {
            for (
              var P = C > 1 ? void 0 : C ? I(h, v) : h, j = c.length - 1, N;
              j >= 0;
              j--
            )
              (N = c[j]) && (P = (C ? N(h, v, P) : N(P)) || P);
            return C && P && Y(h, v, P), P;
          };
        const r = (c) => {
          let { bShowOnlyInitialEvent: h } = c;
          const v = (0, S.Qn)(),
            C = (0, p.Y)();
          return (0, n.jsx)(Q.tH, {
            children: (0, n.jsx)(g, {
              ...c,
              bShowOnlyInitialEvent: h || v,
              tracker: C,
            }),
          });
        };
        let g = class extends A.Component {
          state = { bLoading: !1, eventModel: this.props.eventModel };
          m_refParent = A.createRef();
          m_cancelSignal = u().CancelToken.source();
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let c = this.GetBodyElement();
            c &&
              this.props.bPrimaryPageFeature &&
              c.classList.add(H.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let c = this.GetBodyElement();
            c &&
              this.props.bPrimaryPageFeature &&
              c.classList.remove(H.BodyNoScroll);
          }
          GetBodyElement() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }
          async LoadEvent() {
            const {
              appid: c,
              clanSteamID: h,
              announcementGID: v,
              partnerEventStore: C,
              additionalParams: P,
            } = this.props;
            C.LoadAdjacentPartnerEventsByAnnouncement(
              v,
              h,
              c,
              0,
              3,
              P,
              this.m_cancelSignal,
            )
              .then((j) => {
                j.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: j[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((j) => {
                let N = (0, k.H)(j);
                console.error(
                  "EventInfiniteScrollModal failed " + N.strErrorMsg,
                  N,
                ),
                  this.setState({ bLoading: !1 });
              });
          }
          async HandleReadEvent() {
            const { eventModel: c } = this.state,
              { trackingLocation: h, tracker: v } = this.props;
            c && c.BIsPartnerEvent() && (v.RecordEventRead(c, h), v.Flush());
          }
          render() {
            const { bShowOnlyInitialEvent: c } = this.props,
              { bLoading: h, eventModel: v } = this.state;
            if (h)
              return (0, n.jsx)(B.EN, {
                active: !0,
                children: (0, n.jsx)("div", {
                  className: M().FlexCenter,
                  style: { height: "400px" },
                  children: (0, n.jsx)(K.t, {}),
                }),
              });
            const {
              closeModal: C,
              appid: P,
              clanSteamID: j,
              className: N,
              partnerEventStore: se,
              showAppHeader: te,
              bPrimaryPageFeature: ne,
              additionalParams: J,
              eventClassName: $,
            } = this.props;
            let G;
            _.TS.IN_CLIENT &&
              v?.appid &&
              (m.Fm.Get().HintLoad(),
              m.Fm.Get().BOwnsApp(v.appid) &&
                (G = (q) =>
                  (0, z.EP)(q, "steam://nav/games/details/" + v.appid)));
            const oe = (0, n.jsx)(D.sU, {
              children: (q) =>
                (0, n.jsx)(E.AD, {
                  initialEvent: v,
                  appid: P,
                  clanSteamID: j,
                  partnerEventStore: se,
                  emoticonStore: q,
                  closeModal: !ne && C,
                  showAppHeader: te,
                  bShowOnlyInitialEvent: c,
                  additionalParams: J,
                  eventClassName: $,
                  onAppIconClick: G,
                }),
            });
            return ne
              ? oe
              : (0, n.jsx)(B.EN, {
                  active: !0,
                  children: (0, n.jsx)("div", { className: N, children: oe }),
                });
          }
        };
        g = s([F.PA], g);
      },
      17809: (x, W, t) => {
        "use strict";
        t.d(W, { d: () => It });
        var n = t(7850),
          U = t(19367),
          u = t(90626),
          F = t(3685),
          A = t(85528),
          p = t(77495),
          D = t(18210),
          E = t(3166),
          B = t(75779),
          H = t(80902),
          ee = t(30454);
        async function w() {
          const e = await (0, ee.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!e.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return e.counts;
        }
        const M = 300 * 1e3;
        function K() {
          return ["DeckCompatCounts"];
        }
        function k() {
          return { queryKey: K(), queryFn: () => w(), staleTime: M, retry: !1 };
        }
        function S() {
          const { data: e } = (0, H.I)(k());
          return e;
        }
        function _(e, o) {
          switch (o) {
            case B.sd:
              return e?.playable;
            case B.V8:
              return e?.unsupported;
            default:
              return e?.verified;
          }
        }
        var m = t(70187),
          z = t(45251),
          Q = t(39153),
          Y = t(6878),
          I = t(99412),
          s = t(72609),
          r = t(47610),
          g = t(18860),
          c = t(41635),
          h = t(25792),
          v = t(85599),
          C = t(87805);
        const P = u.Fragment;
        function j(e) {
          const {
              reservationPackageID: o,
              depositPackageID: a,
              bIsPreview: i,
              psuLessPackageID: l,
              strOutOfStockOverride: d,
              strDeliveryOverride: f,
              bDeliveryOverrideOnlyIfOutOfStock: O,
              section: b,
            } = e,
            { data: y } = (0, r.DR)(o),
            { data: T } = (0, r.DR)(l),
            R = (0, u.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + o,
                  reservation_package: o,
                  deposit_package: a,
                  localized_reservation_desc: (0, c.$Y)([], I.bP9, null),
                  localized_out_of_stock_override: (0, c.$Y)(
                    [d || null],
                    I.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, c.$Y)(
                    [f || null],
                    I.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!O,
                  psu_less_package: l,
                },
              ],
              [o, a, d, f, O, l],
            );
          if (!y || (l && !T))
            return (0, n.jsx)(v.t, {
              string: (0, D.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Z = !s.iA.logged_in || !y.account_restricted_from_purchasing,
            De =
              y.reservation_state == g.G.k_EPurchaseReservationState_Reserved
                ? y
                : void 0;
          return (0, n.jsxs)(h.tH, {
            children: [
              (0, n.jsx)(u.Suspense, {
                fallback: null,
                children: (0, n.jsx)(P, {
                  bIsPreview: !!i,
                  rgReservationDef: R,
                }),
              }),
              !!y.allow_purchase_in_country &&
                (0, n.jsxs)("div", {
                  className: R[0].unique_id,
                  children: [
                    (0, n.jsx)(C.b, {
                      reservationDef: R[0],
                      hardwareDetail: y,
                      bPSULessModel: !1,
                      reservedHardwareDetail: De,
                    }),
                    Z &&
                      (0, n.jsx)(C.p, {
                        section: b,
                        reservationDef: R[0],
                        hardwareDetail: y,
                        reservedHardwareDetail: De,
                      }),
                    T &&
                      T?.allow_purchase_in_country &&
                      (0, n.jsx)(C.b, {
                        reservationDef: R[0],
                        hardwareDetail: T,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function N(e) {
          if (e?.bDepositRequired) {
            if (
              e.rgDepositPackageInfo &&
              e.rgDepositPackageInfo?.length > 0 &&
              e.rgDepositPackageInfo.filter((o) => o.bVisible).length == 0 &&
              e?.rgReservationPackageInfo &&
              e?.rgReservationPackageInfo?.length > 0 &&
              e?.rgReservationPackageInfo.filter((o) => o.bVisible).length == 0
            )
              return !1;
          } else if (
            e?.rgReservationPackageInfo &&
            e?.rgReservationPackageInfo?.length > 0 &&
            e?.rgReservationPackageInfo.filter((o) => o.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var se = t(21035),
          te = t(72865),
          ne = t(38081),
          J = t.n(ne),
          $ = t(36707),
          G = t(69596),
          oe = t(10026),
          q = t.n(oe),
          ye = t(19298),
          Ce = t(11996),
          we = t(19047),
          ae = t(36118),
          pe = t(47689),
          ve = t(89926),
          xe = t(32545),
          re = t.n(xe);
        function Ee(e) {
          const { appID: o, classOverride: a, styleOverride: i } = e,
            [l, d] = (0, u.useState)(!1),
            f = (0, pe.m)("GameHoverFollowButton"),
            { elDialogElement: O, fnShowLogonDialog: b } = (0, ve.l)(),
            y = (0, Ce.Fh)(o),
            { mutateAsync: T } = (0, we.L)(o, !y, void 0),
            R = async (Z) => {
              Z.preventDefault(),
                Z.stopPropagation(),
                E.iA.logged_in
                  ? (d(!0), await T(), f.token.reason || d(!1))
                  : b();
            };
          return (0, n.jsxs)(ye.Z, {
            className: (0, $.A)(re().FollowButton, a),
            onClick: R,
            style: i,
            children: [
              y ? (0, n.jsx)(ae.pPV, {}) : (0, n.jsx)(ae.c9e, {}),
              (0, n.jsx)("div", {
                className: (0, $.A)(
                  re().FollowButtonText,
                  l && re().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, D.we)(
                  y ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              O,
            ],
          });
        }
        function Be(e) {
          const { appid: o, color: a, bgcolor: i } = e,
            l = (0, te.n9)();
          return (0, n.jsx)(Ee, {
            appID: o,
            classOverride: (0, $.A)(
              J().FollowGameButtonNotTop,
              q().BBCodeFollowButton,
            ),
            styleOverride: { color: a, backgroundColor: i },
          });
        }
        function Pe(e) {
          const o = Number(e.args.appid);
          if (!o) return null;
          const a = (0, G.O)(e.args.color, "black"),
            i = (0, G.O)(e.args.bgcolor, "white");
          return (0, n.jsx)(Be, { appid: o, color: a, bgcolor: i });
        }
        var je = t(20681),
          Oe = t(18657),
          me = t.n(Oe),
          Me = t(63026);
        function be(e) {
          const { clanAccountID: o, color: a, bgcolor: i } = e;
          (0, je.mx)();
          const [l, d] = u.useState(!1);
          return (0, n.jsx)("div", {
            className: (0, $.A)(me().BBCodeFollowButton, l && me().isHovered),
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: (0, n.jsx)(Me.Q, {
              nCreatorAccountID: o,
              classOverride: J().FollowGameButtonNotTop,
              styleOverride: { color: a, backgroundColor: i },
              followType: "group",
            }),
          });
        }
        function Te(e) {
          const { event: o } = e.context,
            a = Number(e.args.groupid) || o?.clanSteamID.GetAccountID();
          if (!a) return null;
          const i = (0, G.O)(e.args.color, "black"),
            l = (0, G.O)(e.args.bgcolor, "white");
          return (0, n.jsx)(be, { clanAccountID: a, color: i, bgcolor: l });
        }
        var Ae = t(83482),
          Se = t(44267),
          _e = t(9202),
          fe = t.n(_e),
          Ne = t(29522);
        function Ge(e) {
          const { appid: o, color: a, bgcolor: i } = e,
            l = (0, te.n9)(),
            d = (0, Ne.$5)(o),
            f = (0, Ae.L3)(l);
          return (0, n.jsx)("div", {
            className: fe().WishlistHoverCtn,
            children: (0, n.jsx)(Se.E, {
              snr: f,
              id: d,
              classOverride: (0, $.A)(
                J().WishlistButtonNotTop,
                fe().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: a, backgroundColor: i },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Le(e) {
          const o = Number(e.args.appid);
          if (!o) return null;
          const a = (0, G.O)(e.args.color, "black"),
            i = (0, G.O)(e.args.bgcolor, "white");
          return (0, n.jsx)(Ge, { appid: o, color: a, bgcolor: i });
        }
        let ie = null;
        function Fe() {
          return (
            ie == null &&
              (ie = new Map([
                ["wishlist", { Constructor: Le, autocloses: !1 }],
                ["followgroup", { Constructor: Te, autocloses: !1 }],
              ])),
            ie
          );
        }
        var Re = t(37656),
          L = t(29868),
          V = t(24642);
        function ge(e) {
          return e < 10 ? "0" + e : e;
        }
        function We(e) {
          const { giveawayid: o } = e,
            a = (0, Re.w)(o),
            {
              bLoadingGiveawayInfo: i,
              winner_count: l,
              closed: d,
              seconds_until_drawing: f,
            } = a;
          return i
            ? null
            : (0, n.jsxs)("div", {
                className: L.countdownCtn,
                children: [
                  !!d &&
                    (0, n.jsx)("div", {
                      className: L.Closed,
                      children:
                        l > 0
                          ? (0, D.we)("#Giveaway_Closed", (0, V.D)(l))
                          : (0, D.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !d &&
                    (0, n.jsxs)(u.Fragment, {
                      children: [
                        f <= 0
                          ? (0, n.jsxs)("div", {
                              className: L.Throbber,
                              children: [
                                (0, n.jsx)(v.t, { size: "small" }),
                                (0, n.jsx)("div", {
                                  children: (0, D.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className: L.CountDownCtn,
                              children: [
                                (0, n.jsx)("div", {
                                  className: L.CountDownTime,
                                  children:
                                    ge(Math.floor(f / 60)) + ":" + ge(f % 60),
                                }),
                                (0, n.jsxs)("div", {
                                  className: L.CountDownText,
                                  children: [
                                    (0, D.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, D.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        l > 0 &&
                          (0, n.jsxs)("div", {
                            className: L.WinnerInfo,
                            children: [
                              (0, n.jsx)("div", {
                                className: L.WinnerCount,
                                children: (0, V.D)(l),
                              }),
                              (0, n.jsx)("div", {
                                className: L.WinnerText,
                                children: (0, D.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var le = t(57646);
        function Ue(e) {
          const o = Number(e.args.packageid);
          return o
            ? (0, n.jsx)(le.eF, {
                packageID: o,
                display_style: (0, le._w)(e.args.display),
              })
            : null;
        }
        function He(e) {
          const o = Number(e.args.packageid),
            a = Number(e.args.compareid);
          return !o || !a
            ? null
            : (0, n.jsx)(le.hJ, { packageID: o, compareID: a });
        }
        var Ke = t(88245),
          ke = t(35702),
          Qe = t(16412),
          $e = t(92757),
          ze = t(39256),
          Ve = t(4720),
          Ze = t(75110),
          Xe = t(57810),
          ce = t(36631),
          Ye = t(55817),
          he = t(81416);
        function Je(e) {
          const { eventModel: o, nEventBadgeID: a } = e,
            i = (0, ke.fy)(a);
          if (i?.level > 0) {
            let l = i.level;
            if (o?.BHasSaleEnabled()) {
              const d = o.GetSaleSectionsByType("badge_progress");
              if (d?.length == 1) {
                const f = d[0].badge_progress;
                if (f?.event_badgeid == a && f?.granted_by_discovery_queue) {
                  const O = f.levels[f.levels.length - 1].level;
                  return (0, n.jsx)(qe, {
                    eventModel: o,
                    nBadgeLevel: l,
                    nMaxLevel: O,
                  });
                }
              }
            }
            return (0, n.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, V.D)(l),
            });
          }
          return null;
        }
        function qe(e) {
          const { eventModel: o, nBadgeLevel: a, nMaxLevel: i } = e,
            l = u.useMemo(() => {
              const y = o
                .GetSaleSections()
                .filter((T) => T.section_type == "discoveryqueue");
              return y?.length > 0 ? y[0] : null;
            }, [o]),
            { storePageFilter: d, eStoreDiscoveryQueueType: f } = u.useMemo(
              () => (0, Ze.lx)(o, l),
              [o, l],
            ),
            O = (0, Xe.Uf)(f, d),
            b = Math.min(a + O, i);
          return (0, n.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, V.D)(b),
          });
        }
        function et(e) {
          const { event: o } = e.context,
            a = Number.parseInt((0, m.j$)(e.args, "eventid"));
          return E.iA.logged_in && a
            ? (0, n.jsx)(Je, { nEventBadgeID: a, eventModel: o })
            : null;
        }
        function tt(e) {
          const { nDoorIndex: o, children: a } = e,
            i = (0, Q.OM)(o),
            l = (0, Q.gP)(),
            [d, f] = u.useState(!1),
            [O, b] = u.useState(!1),
            { elDialogElement: y, fnShowLogonDialog: T } = (0, ve.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(Qe.$n, {
                disabled: i,
                onClick: (R) => {
                  d ||
                    (E.iA.logged_in
                      ? (f(!0),
                        l({ iDoorIndex: o })
                          .then((Z) => {
                            Z || b(!0), f(!1);
                          })
                          .catch(() => {
                            b(!0), f(!1);
                          }))
                      : T());
                },
                children: O
                  ? (0, n.jsx)("div", {
                      children: (0, D.we)("#GrantAwardError_Busy"),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        !!d && (0, n.jsx)(v.t, { size: "small" }),
                        !!i && (0, n.jsx)(ae.Jlk, {}),
                        a,
                      ],
                    }),
              }),
              y,
            ],
          });
        }
        function nt(e) {
          const o = Number.parseInt((0, m.j$)(e.args)) || 0;
          return o >= 0 && o < 32
            ? (0, n.jsx)(tt, { nDoorIndex: o, children: e.children })
            : null;
        }
        const ot = (0, $e.y)(Ye.H);
        function st(e) {
          const o = Number.parseInt((0, m.j$)(e.args)),
            { event: a, showErrorInfo: i } = e.context;
          if (o) {
            const l = a?.jsondata?.sale_sections?.findIndex(
              (d) => d.unique_id == o,
            );
            if (l >= 0) {
              const d = a.GetDayIndexFromEventStart();
              return (0, n.jsx)(ce.Cs, {
                location: i ? ce.HY : ce.bs,
                children: (0, n.jsx)(ot, {
                  event: a,
                  section: a.jsondata.sale_sections[l],
                  activeTab: new Ve.y(null, d),
                  language: e.language,
                  nSaleDayIndex: d,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: i
                    ? he.S.EPreviewMode_Enabled
                    : he.S.EPreviewMode_Disabled,
                }),
              });
            } else if (i)
              return (0, n.jsxs)("div", {
                className: ze.ErrorDiv,
                children: ["Error could not find sale section ", o],
              });
          }
          return null;
        }
        let de = null;
        function at() {
          return (
            de == null &&
              (de = new Map([
                ...Array.from(Fe().entries()),
                [
                  "itemdef",
                  {
                    Constructor: rt,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Pe, autocloses: !1 }],
                ["deckcompatcount", { Constructor: it, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: lt, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: ft, autocloses: !1 }],
                ["price", { Constructor: Ue, autocloses: !1 }],
                ["pricesavings", { Constructor: He, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: ct, autocloses: !1 }],
                ["chooseaccount", { Constructor: ut, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: et, autocloses: !1 }],
                ["optindoorquest", { Constructor: nt, autocloses: !1 }],
                ["classname", { Constructor: vt, autocloses: !1 }],
                ["localize", { Constructor: mt, autocloses: !1 }],
                ["salesection", { Constructor: st, autocloses: !1 }],
                ["reservationbutton", { Constructor: gt, autocloses: !1 }],
              ])),
            de
          );
        }
        function rt(e) {
          const { event: o } = e.context,
            a = Number.parseInt((0, m.j$)(e.args, "appid")),
            i = Number.parseInt((0, m.j$)(e.args, "itemdefid")),
            l = Number.parseInt((0, m.j$)(e.args, "maxquantity")),
            d = (0, m.j$)(e.args, "calltoaction");
          return !(0, Ke.gS)(a, i, !1) || !o
            ? (0, n.jsx)(v.t, {
                size: "small",
                position: "center",
                string: (0, D.we)("#Loading"),
              })
            : (0, n.jsx)(se.f, {
                language: e.language,
                clanAccountID: o.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: a, nItemDefID: i, max_quantity: l },
                strCallToAction: d,
              });
        }
        function it(e) {
          const o = S();
          if (!o) return (0, n.jsx)(v.t, { size: "small" });
          const a = Number.parseInt((0, m.j$)(e.args));
          return (0, n.jsx)("span", { children: (0, V.D)(Number(_(o, a))) });
        }
        function lt(e) {
          const o = (0, z.jR)(E.iA.accountid, "library");
          if (!o) return (0, n.jsx)(v.t, { size: "small" });
          const a = Number.parseInt((0, m.j$)(e.args));
          let i = o.verifiedList?.length || 0;
          switch (a) {
            case B.sd:
              i = o.playableList?.length || 0;
              break;
            case B.V8:
              i = o.unsupportedList?.length || 0;
              break;
            case B.YX:
              i = o.unknownList?.length || 0;
              break;
          }
          return (0, n.jsx)("span", { children: (0, V.D)(Number(i)) });
        }
        function ct(e) {
          const o = Number.parseInt((0, m.j$)(e.args)),
            a =
              "hide" in e.args && !!Number.parseInt((0, m.j$)(e.args, "hide"));
          return o >= 0
            ? (0, n.jsx)(dt, { nDoorIndex: o, bHide: a, children: e.children })
            : null;
        }
        function dt(e) {
          const { nDoorIndex: o, bHide: a, children: i } = e,
            l = (0, Q.OM)(o);
          return l == null
            ? null
            : (l && !a) || (!l && a)
              ? (0, n.jsx)(n.Fragment, { children: e.children })
              : null;
        }
        function ut(e) {
          if (E.iA.logged_in) {
            const o = Number.parseInt((0, m.j$)(e.args)),
              a = Number.parseInt((0, m.j$)(e.args, "mod"));
            if (a > 0 && o < a && E.iA.accountid % a == o) return e.children;
          }
          return null;
        }
        function vt(e) {
          const o = (0, m.j$)(e.args);
          return o?.trim().length > 0
            ? (0, n.jsx)("div", { className: o.trim(), children: e.children })
            : (0, n.jsx)(n.Fragment, { children: e.children });
        }
        function mt(e) {
          return (0, n.jsx)("span", {
            className: Y.LocalizeBlock,
            children: (0, D.oW)(
              e.children,
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
              (0, n.jsx)("b", {}),
            ),
          });
        }
        function ft(e) {
          let o = (0, m.j$)(e.args);
          return o
            ? (0, n.jsx)(We, { giveawayid: o })
            : (0, n.jsx)(u.Fragment, {});
        }
        function gt(e) {
          const { showErrorInfo: o, event: a } = e.context,
            i = Number.parseInt((0, m.j$)(e.args)),
            l = u.useMemo(() => {
              if (a)
                return a.jsondata.sale_sections?.find(
                  (d) =>
                    d.section_type == "vo_internal" &&
                    (d.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      d.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [a]);
          if (i && l) {
            const d = Number.parseInt((0, m.j$)(e.args, "depositpackageid")),
              f = Number.parseInt((0, m.j$)(e.args, "psulesspackageid")),
              O = (0, m.j$)(e.args, "out_of_stock_override"),
              b = (0, m.j$)(e.args, "delivery_override"),
              y = (0, m.j$)(e.args, "delivery_override_out_of_stock");
            return (0, n.jsx)(j, {
              section: l,
              reservationPackageID: i,
              depositPackageID: d,
              psuLessPackageID: f,
              strOutOfStockOverride: O,
              strDeliveryOverride: y || b,
              bDeliveryOverrideOnlyIfOutOfStock: !!y,
            });
          }
          return (0, n.jsx)(n.Fragment, {});
        }
        var ht = t(71698),
          Dt = t(94520);
        function It(e) {
          const { bSalePage: o } = e,
            [a, i] = u.useState(!1);
          return (
            (0, ht.H)(a, o),
            u.useEffect(() => {
              A.Vw.Init(new F.D(E.TS.WEBAPI_BASE_URL)), p.O3.Init(), i(!0);
            }, []),
            u.useEffect(() => {
              const l = (0, D.l4)();
              l && U.locale(l);
            }, []),
            a
              ? o
                ? (0, n.jsx)(Dt.d3, { dictionary: at(), children: e.children })
                : e.children
              : null
          );
        }
      },
      32545: (x) => {
        x.exports = {
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
      10026: (x) => {
        x.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (x) => {
        x.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (x) => {
        x.exports = {
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
      9202: (x) => {
        x.exports = {
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
    },
  ]);
})();
