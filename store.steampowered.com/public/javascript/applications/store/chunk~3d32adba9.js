/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [61975],
    {
      71698: (P, H, t) => {
        "use strict";
        t.d(H, { H: () => R, s: () => _ });
        var o = t(90626),
          K = t(41623);
        let u = 0;
        function R(p, b) {
          (0, o.useEffect)(() => {
            if (!(p || b))
              return (
                u++,
                () => {
                  --u == 0 && (0, K.s)();
                }
              );
          }, [p, b]);
        }
        function _(p) {
          const [b, I] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            const x = window.setTimeout(() => I(!0), p);
            return () => window.clearTimeout(x);
          }, [p]),
            R(b);
        }
      },
      37656: (P, H, t) => {
        "use strict";
        t.d(H, { w: () => f });
        var o = t(41735),
          K = t.n(o),
          u = t(14947),
          R = t(65946),
          _ = t(90626),
          p = t(27066),
          b = t(8323),
          I = t(30096),
          x = t(3166),
          M = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          w = (y, s, l, m) => {
            for (
              var c = m > 1 ? void 0 : m ? q(s, l) : s, h = y.length - 1, v;
              h >= 0;
              h--
            )
              (v = y[h]) && (c = (m ? v(s, l, c) : v(c)) || c);
            return m && c && M(s, l, c), c;
          };
        const j = class Ie {
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
        w([u.sH], j.prototype, "giveaway_id", 2),
          w([u.sH], j.prototype, "seconds_until_drawing", 2),
          w([u.sH], j.prototype, "rtime_start", 2),
          w([u.sH], j.prototype, "rtime_end", 2),
          w([u.sH], j.prototype, "closed", 2),
          w([u.sH], j.prototype, "winner_count", 2);
        let $ = j;
        const k = class Y {
          constructor() {
            (0, u.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(s, l) {
            return s + "_" + l;
          }
          GetInfoByInstance(s, l) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(s, l),
            );
          }
          GetNextDrawChangeCallback(s) {
            return (
              this.m_mapNextDrawChangeCallback.has(s) ||
                this.m_mapNextDrawChangeCallback.set(s, new b.lu()),
              this.m_mapNextDrawChangeCallback.get(s)
            );
          }
          CopyToGiveaway(s, l) {
            l.closed != s.closed && (l.closed = s.closed),
              l.giveaway_id != s.giveaway_id && (l.giveaway_id = s.giveaway_id),
              l.rtime_start != s.rtime_start && (l.rtime_start = s.rtime_start),
              l.rtime_end != s.rtime_end && (l.rtime_end = s.rtime_end),
              l.winner_count != s.winner_count &&
                (l.winner_count = s.winner_count),
              l.seconds_until_drawing != s.seconds_until_drawing &&
                (l.seconds_until_drawing = s.seconds_until_drawing);
          }
          async ReloadGiveaway(s, l) {
            if (!s) return null;
            let m = x.TS.STORE_BASE_URL + "prizes/nextdraw/" + s,
              c = null,
              h = { origin: self.origin };
            return (
              (c = await K().get(m, { params: h })),
              (0, u.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(s) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(s, new $()),
                  this.CopyToGiveaway(
                    c.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(s),
                  ),
                  l !== void 0)
                ) {
                  const v = this.GetKey(s, l);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(v) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      v,
                      new $(),
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
              Y.s_Singleton ||
                ((Y.s_Singleton = new Y()), Y.s_Singleton.Init()),
              Y.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let s = (0, x.Tc)("giveawaynextdraw", "application_config");
              if (s && s.giveaway_id) {
                let l = new $();
                this.CopyToGiveaway(s, l),
                  this.m_mapGiveawayIDToNextDrawInfo.set(s.giveaway_id, l);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        w([u.sH], k.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          w([u.XI], k.prototype, "CopyToGiveaway", 1);
        let G = k;
        const L = class de {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = de.s_GlobalInstance),
              (de.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(s, l) {
            if ((this.ClearRefreshInterval(), !s.closed)) {
              let m =
                s.seconds_until_drawing <= 0 && s.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(l, m);
            }
          }
          SetupCountDown(s, l) {
            s > 0 && (this.m_intervalCountDownID = window.setInterval(l, 1e3));
          }
        };
        w([p.o], L.prototype, "ClearRefreshInterval", 1),
          w([p.o], L.prototype, "ClearCountDown", 1),
          w([p.o], L.prototype, "SetupRefreshDataInterval", 1),
          w([p.o], L.prototype, "SetupCountDown", 1);
        let Q = L;
        function z(y, s) {
          const l = G.Get().GetInfoByInstance(y, s.m_myInstanceNumber);
          (l.seconds_until_drawing -= 1),
            l.seconds_until_drawing == 0 && s.ClearCountDown();
        }
        function J(y, s) {
          const l = G.Get().GetInfoByInstance(y, s.m_myInstanceNumber);
          l &&
            l.BIsValid() &&
            l.seconds_until_drawing <= 0 &&
            !l.closed &&
            (s.ClearCountDown(),
            G.Get()
              .ReloadGiveaway(y, s.m_myInstanceNumber)
              .then((m) => {
                s.SetupCountDown(m.seconds_until_drawing, () => z(y, s));
              }));
        }
        function f(y) {
          const [s] = (0, _.useState)(new Q()),
            l = (0, I.CH)();
          (0, _.useEffect)(
            () => (
              G.Get()
                .ReloadGiveaway(y, s.m_myInstanceNumber)
                .then((E) => {
                  s.SetupRefreshDataInterval(E, () => J(y, s)),
                    s.SetupCountDown(E.seconds_until_drawing, () => z(y, s)),
                    l();
                }),
              () => {
                s.ClearRefreshInterval(), s.ClearCountDown();
              }
            ),
            [s, y, l],
          );
          const m = G.Get().GetInfoByInstance(y, s.m_myInstanceNumber),
            [c, h, v] = (0, R.q3)(() => [
              m?.winner_count,
              m?.closed,
              m?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !m || m.giveaway_id == null || !m.BStarted() || c === void 0,
            winner_count: c,
            closed: h,
            seconds_until_drawing: v,
          };
        }
      },
      19188: (P, H, t) => {
        "use strict";
        t.d(H, { N: () => l });
        var o = t(7850),
          K = t(41735),
          u = t.n(K),
          R = t(75844),
          _ = t(90626),
          p = t(90537),
          b = t(58483),
          I = t(82385),
          x = t(96538),
          M = t(88843),
          q = t.n(M),
          w = t(64641),
          j = t.n(w),
          $ = t(85599),
          k = t(34592),
          G = t(3166),
          L = t(72609),
          Q = t(6469),
          z = t(53107),
          J = t(25792),
          f = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          s = (c, h, v, E) => {
            for (
              var C = E > 1 ? void 0 : E ? y(h, v) : h, B = c.length - 1, S;
              B >= 0;
              B--
            )
              (S = c[B]) && (C = (E ? S(h, v, C) : S(C)) || C);
            return E && C && f(h, v, C), C;
          };
        const l = (c) => {
          let { bShowOnlyInitialEvent: h } = c;
          const v = (0, G.Qn)(),
            E = (0, p.Y)();
          return (0, o.jsx)(J.tH, {
            children: (0, o.jsx)(m, {
              ...c,
              bShowOnlyInitialEvent: h || v,
              tracker: E,
            }),
          });
        };
        let m = class extends _.Component {
          state = { bLoading: !1, eventModel: this.props.eventModel };
          m_refParent = _.createRef();
          m_cancelSignal = u().CancelToken.source();
          componentDidMount() {
            this.state.eventModel ||
              this.setState({ bLoading: !0 }, this.LoadEvent);
            let c = this.GetBodyElement();
            c &&
              this.props.bPrimaryPageFeature &&
              c.classList.add(M.BodyNoScroll);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
            let c = this.GetBodyElement();
            c &&
              this.props.bPrimaryPageFeature &&
              c.classList.remove(M.BodyNoScroll);
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
              partnerEventStore: E,
              additionalParams: C,
            } = this.props;
            E.LoadAdjacentPartnerEventsByAnnouncement(
              v,
              h,
              c,
              0,
              3,
              C,
              this.m_cancelSignal,
            )
              .then((B) => {
                B.length > 0
                  ? this.setState(
                      { bLoading: !1, eventModel: B[0] },
                      this.HandleReadEvent,
                    )
                  : (this.props.onEventNotFound && this.props.onEventNotFound(),
                    this.setState({ bLoading: !1 }));
              })
              .catch((B) => {
                let S = (0, k.H)(B);
                console.error(
                  "EventInfiniteScrollModal failed " + S.strErrorMsg,
                  S,
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
              return (0, o.jsx)(x.EN, {
                active: !0,
                children: (0, o.jsx)("div", {
                  className: j().FlexCenter,
                  style: { height: "400px" },
                  children: (0, o.jsx)($.t, {}),
                }),
              });
            const {
              closeModal: E,
              appid: C,
              clanSteamID: B,
              className: S,
              partnerEventStore: ne,
              showAppHeader: ue,
              bPrimaryPageFeature: ee,
              additionalParams: te,
              eventClassName: oe,
            } = this.props;
            let V;
            L.TS.IN_CLIENT &&
              v?.appid &&
              (Q.Fm.Get().HintLoad(),
              Q.Fm.Get().BOwnsApp(v.appid) &&
                (V = (T) =>
                  (0, z.EP)(T, "steam://nav/games/details/" + v.appid)));
            const U = (0, o.jsx)(b.sU, {
              children: (T) =>
                (0, o.jsx)(I.AD, {
                  initialEvent: v,
                  appid: C,
                  clanSteamID: B,
                  partnerEventStore: ne,
                  emoticonStore: T,
                  closeModal: !ee && E,
                  showAppHeader: ue,
                  bShowOnlyInitialEvent: c,
                  additionalParams: te,
                  eventClassName: oe,
                  onAppIconClick: V,
                }),
            });
            return ee
              ? U
              : (0, o.jsx)(x.EN, {
                  active: !0,
                  children: (0, o.jsx)("div", { className: S, children: U }),
                });
          }
        };
        m = s([R.PA], m);
      },
      17809: (P, H, t) => {
        "use strict";
        t.d(H, { d: () => Ct });
        var o = t(7850),
          K = t(19367),
          u = t(90626),
          R = t(3685),
          _ = t(85528),
          p = t(7638),
          b = t(79118),
          I = t(18210),
          x = t(3166),
          M = t(75779),
          q = t(80902),
          w = t(72604),
          j = t(72609);
        function $() {
          return typeof self < "u" ? self.origin : "store";
        }
        async function k() {
          const e = new URLSearchParams(),
            n = $();
          n && e.set("origin", n);
          const a = `${j.TS.STORE_BASE_URL}saleaction/ajaxgetuserdeckcompatcounts?${e}`,
            r = await fetch(a);
          if (!r.ok) throw new Error(`${a} answered ${r.status}`);
          const i = await r.json();
          if (i?.success != w.R || !i.counts)
            throw new Error(`${a} answered EResult ${i?.success}`);
          return i.counts;
        }
        const G = 300 * 1e3;
        function L() {
          return ["DeckCompatCounts"];
        }
        function Q() {
          return { queryKey: L(), queryFn: () => k(), staleTime: G, retry: !1 };
        }
        function z() {
          const { data: e } = (0, q.I)(Q());
          return e;
        }
        function J(e, n) {
          switch (n) {
            case M.sd:
              return e?.playable;
            case M.V8:
              return e?.unsupported;
            default:
              return e?.verified;
          }
        }
        var f = t(70187),
          y = t(7379),
          s = t(64703),
          l = t(6878),
          m = t(99412),
          c = t(47610),
          h = t(18860),
          v = t(41635),
          E = t(25792),
          C = t(85599),
          B = t(5565);
        const S = u.Fragment;
        function ne(e) {
          const {
              reservationPackageID: n,
              depositPackageID: a,
              bIsPreview: r,
              psuLessPackageID: i,
              strOutOfStockOverride: d,
              strDeliveryOverride: g,
              bDeliveryOverrideOnlyIfOutOfStock: O,
              section: A,
            } = e,
            { data: D } = (0, c.DR)(n),
            { data: N } = (0, c.DR)(i),
            W = (0, u.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + n,
                  reservation_package: n,
                  deposit_package: a,
                  localized_reservation_desc: (0, v.$Y)([], m.bP9, null),
                  localized_out_of_stock_override: (0, v.$Y)(
                    [d || null],
                    m.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, v.$Y)(
                    [g || null],
                    m.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!O,
                  psu_less_package: i,
                },
              ],
              [n, a, d, g, O, i],
            );
          if (!D || (i && !N))
            return (0, o.jsx)(C.t, {
              string: (0, I.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const X = !j.iA.logged_in || !D.account_restricted_from_purchasing,
            De =
              D.reservation_state == h.G.k_EPurchaseReservationState_Reserved
                ? D
                : void 0;
          return (0, o.jsxs)(E.tH, {
            children: [
              (0, o.jsx)(u.Suspense, {
                fallback: null,
                children: (0, o.jsx)(S, {
                  bIsPreview: !!r,
                  rgReservationDef: W,
                }),
              }),
              !!D.allow_purchase_in_country &&
                (0, o.jsxs)("div", {
                  className: W[0].unique_id,
                  children: [
                    (0, o.jsx)(B.bk, {
                      reservationDef: W[0],
                      hardwareDetail: D,
                      bPSULessModel: !1,
                      reservedHardwareDetail: De,
                    }),
                    X &&
                      (0, o.jsx)(B.pc, {
                        section: A,
                        reservationDef: W[0],
                        hardwareDetail: D,
                        reservedHardwareDetail: De,
                      }),
                    N &&
                      N?.allow_purchase_in_country &&
                      (0, o.jsx)(B.bk, {
                        reservationDef: W[0],
                        hardwareDetail: N,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function ue(e) {
          if (e?.bDepositRequired) {
            if (
              e.rgDepositPackageInfo &&
              e.rgDepositPackageInfo?.length > 0 &&
              e.rgDepositPackageInfo.filter((n) => n.bVisible).length == 0 &&
              e?.rgReservationPackageInfo &&
              e?.rgReservationPackageInfo?.length > 0 &&
              e?.rgReservationPackageInfo.filter((n) => n.bVisible).length == 0
            )
              return !1;
          } else if (
            e?.rgReservationPackageInfo &&
            e?.rgReservationPackageInfo?.length > 0 &&
            e?.rgReservationPackageInfo.filter((n) => n.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var ee = t(21035),
          te = t(72865),
          oe = t(73371),
          V = t.n(oe),
          U = t(36707),
          T = t(53041),
          ye = t(10026),
          Ce = t.n(ye),
          we = t(19298),
          pe = t(11996),
          xe = t(19047),
          se = t(36118),
          Ee = t(47689),
          ve = t(89926),
          Be = t(32545),
          ae = t.n(Be);
        function Pe(e) {
          const { appID: n, classOverride: a, styleOverride: r } = e,
            [i, d] = (0, u.useState)(!1),
            g = (0, Ee.m)("GameHoverFollowButton"),
            { elDialogElement: O, fnShowLogonDialog: A } = (0, ve.l)(),
            D = (0, pe.Fh)(n),
            { mutateAsync: N } = (0, xe.L)(n, !D, void 0),
            W = async (X) => {
              X.preventDefault(),
                X.stopPropagation(),
                x.iA.logged_in
                  ? (d(!0), await N(), g.token.reason || d(!1))
                  : A();
            };
          return (0, o.jsxs)(we.Z, {
            className: (0, U.A)(ae().FollowButton, a),
            onClick: W,
            style: r,
            children: [
              D ? (0, o.jsx)(se.pPV, {}) : (0, o.jsx)(se.c9e, {}),
              (0, o.jsx)("div", {
                className: (0, U.A)(
                  ae().FollowButtonText,
                  i && ae().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, I.we)(
                  D ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              O,
            ],
          });
        }
        function je(e) {
          const { appid: n, color: a, bgcolor: r } = e,
            i = (0, te.n9)();
          return (0, o.jsx)(Pe, {
            appID: n,
            classOverride: (0, U.A)(
              V().FollowGameButtonNotTop,
              Ce().BBCodeFollowButton,
            ),
            styleOverride: { color: a, backgroundColor: r },
          });
        }
        function Oe(e) {
          const n = Number(e.args.appid);
          if (!n) return null;
          const a = (0, T.O)(e.args.color, "black"),
            r = (0, T.O)(e.args.bgcolor, "white");
          return (0, o.jsx)(je, { appid: n, color: a, bgcolor: r });
        }
        var Me = t(20681),
          be = t(18657),
          fe = t.n(be),
          Se = t(63026);
        function Te(e) {
          const { clanAccountID: n, color: a, bgcolor: r } = e;
          (0, Me.mx)();
          const [i, d] = u.useState(!1);
          return (0, o.jsx)("div", {
            className: (0, U.A)(fe().BBCodeFollowButton, i && fe().isHovered),
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: (0, o.jsx)(Se.Q, {
              nCreatorAccountID: n,
              classOverride: V().FollowGameButtonNotTop,
              styleOverride: { color: a, backgroundColor: r },
              followType: "group",
            }),
          });
        }
        function Ae(e) {
          const { event: n } = e.context,
            a = Number(e.args.groupid) || n?.clanSteamID.GetAccountID();
          if (!a) return null;
          const r = (0, T.O)(e.args.color, "black"),
            i = (0, T.O)(e.args.bgcolor, "white");
          return (0, o.jsx)(Te, { clanAccountID: a, color: r, bgcolor: i });
        }
        var Ne = t(83482),
          _e = t(44267),
          Ge = t(9202),
          me = t.n(Ge),
          Le = t(29522);
        function Fe(e) {
          const { appid: n, color: a, bgcolor: r } = e,
            i = (0, te.n9)(),
            d = (0, Le.$5)(n),
            g = (0, Ne.L3)(i);
          return (0, o.jsx)("div", {
            className: me().WishlistHoverCtn,
            children: (0, o.jsx)(_e.E, {
              snr: g,
              id: d,
              classOverride: (0, U.A)(
                V().WishlistButtonNotTop,
                me().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: a, backgroundColor: r },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Re(e) {
          const n = Number(e.args.appid);
          if (!n) return null;
          const a = (0, T.O)(e.args.color, "black"),
            r = (0, T.O)(e.args.bgcolor, "white");
          return (0, o.jsx)(Fe, { appid: n, color: a, bgcolor: r });
        }
        let re = null;
        function Ue() {
          return (
            re == null &&
              (re = new Map([
                ["wishlist", { Constructor: Re, autocloses: !1 }],
                ["followgroup", { Constructor: Ae, autocloses: !1 }],
              ])),
            re
          );
        }
        var We = t(37656),
          F = t(29868),
          Z = t(24642);
        function ge(e) {
          return e < 10 ? "0" + e : e;
        }
        function He(e) {
          const { giveawayid: n } = e,
            a = (0, We.w)(n),
            {
              bLoadingGiveawayInfo: r,
              winner_count: i,
              closed: d,
              seconds_until_drawing: g,
            } = a;
          return r
            ? null
            : (0, o.jsxs)("div", {
                className: F.countdownCtn,
                children: [
                  !!d &&
                    (0, o.jsx)("div", {
                      className: F.Closed,
                      children:
                        i > 0
                          ? (0, I.we)("#Giveaway_Closed", (0, Z.D)(i))
                          : (0, I.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !d &&
                    (0, o.jsxs)(u.Fragment, {
                      children: [
                        g <= 0
                          ? (0, o.jsxs)("div", {
                              className: F.Throbber,
                              children: [
                                (0, o.jsx)(C.t, { size: "small" }),
                                (0, o.jsx)("div", {
                                  children: (0, I.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, o.jsxs)("div", {
                              className: F.CountDownCtn,
                              children: [
                                (0, o.jsx)("div", {
                                  className: F.CountDownTime,
                                  children:
                                    ge(Math.floor(g / 60)) + ":" + ge(g % 60),
                                }),
                                (0, o.jsxs)("div", {
                                  className: F.CountDownText,
                                  children: [
                                    (0, I.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, I.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        i > 0 &&
                          (0, o.jsxs)("div", {
                            className: F.WinnerInfo,
                            children: [
                              (0, o.jsx)("div", {
                                className: F.WinnerCount,
                                children: (0, Z.D)(i),
                              }),
                              (0, o.jsx)("div", {
                                className: F.WinnerText,
                                children: (0, I.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var ie = t(57646);
        function Ke(e) {
          const n = Number(e.args.packageid);
          return n
            ? (0, o.jsx)(ie.eF, {
                packageID: n,
                display_style: (0, ie._w)(e.args.display),
              })
            : null;
        }
        function $e(e) {
          const n = Number(e.args.packageid),
            a = Number(e.args.compareid);
          return !n || !a
            ? null
            : (0, o.jsx)(ie.hJ, { packageID: n, compareID: a });
        }
        var ke = t(88245),
          Qe = t(35702),
          ze = t(16412),
          Ve = t(92757),
          Ze = t(39256),
          Xe = t(4720),
          Ye = t(75110),
          Je = t(57810),
          le = t(36631),
          qe = t(25533),
          he = t(81416);
        function et(e) {
          const { eventModel: n, nEventBadgeID: a } = e,
            r = (0, Qe.fy)(a);
          if (r?.level > 0) {
            let i = r.level;
            if (n?.BHasSaleEnabled()) {
              const d = n.GetSaleSectionsByType("badge_progress");
              if (d?.length == 1) {
                const g = d[0].badge_progress;
                if (g?.event_badgeid == a && g?.granted_by_discovery_queue) {
                  const O = g.levels[g.levels.length - 1].level;
                  return (0, o.jsx)(tt, {
                    eventModel: n,
                    nBadgeLevel: i,
                    nMaxLevel: O,
                  });
                }
              }
            }
            return (0, o.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Z.D)(i),
            });
          }
          return null;
        }
        function tt(e) {
          const { eventModel: n, nBadgeLevel: a, nMaxLevel: r } = e,
            i = u.useMemo(() => {
              const D = n
                .GetSaleSections()
                .filter((N) => N.section_type == "discoveryqueue");
              return D?.length > 0 ? D[0] : null;
            }, [n]),
            { storePageFilter: d, eStoreDiscoveryQueueType: g } = u.useMemo(
              () => (0, Ye.lx)(n, i),
              [n, i],
            ),
            O = (0, Je.Uf)(g, d),
            A = Math.min(a + O, r);
          return (0, o.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Z.D)(A),
          });
        }
        function nt(e) {
          const { event: n } = e.context,
            a = Number.parseInt((0, f.j$)(e.args, "eventid"));
          return x.iA.logged_in && a
            ? (0, o.jsx)(et, { nEventBadgeID: a, eventModel: n })
            : null;
        }
        function ot(e) {
          const { nDoorIndex: n, children: a } = e,
            r = (0, s.OM)(n),
            { fnOpenDoor: i } = (0, s.OC)(),
            [d, g] = u.useState(!1),
            [O, A] = u.useState(!1),
            { elDialogElement: D, fnShowLogonDialog: N } = (0, ve.l)();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(ze.$n, {
                disabled: r,
                onClick: (W) => {
                  d ||
                    (x.iA.logged_in
                      ? (g(!0),
                        i(n, !0, null, !1)
                          .then((X) => {
                            X || A(!0), g(!1);
                          })
                          .catch(() => {
                            A(!0), g(!1);
                          }))
                      : N());
                },
                children: O
                  ? (0, o.jsx)("div", {
                      children: (0, I.we)("#GrantAwardError_Busy"),
                    })
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        !!d && (0, o.jsx)(C.t, { size: "small" }),
                        !!r && (0, o.jsx)(se.Jlk, {}),
                        a,
                      ],
                    }),
              }),
              D,
            ],
          });
        }
        function st(e) {
          const n = Number.parseInt((0, f.j$)(e.args)) || 0;
          return n >= 0 && n < 32
            ? (0, o.jsx)(ot, { nDoorIndex: n, children: e.children })
            : null;
        }
        const at = (0, Ve.y)(qe.H);
        function rt(e) {
          const n = Number.parseInt((0, f.j$)(e.args)),
            { event: a, showErrorInfo: r } = e.context;
          if (n) {
            const i = a?.jsondata?.sale_sections?.findIndex(
              (d) => d.unique_id == n,
            );
            if (i >= 0) {
              const d = a.GetDayIndexFromEventStart();
              return (0, o.jsx)(le.Cs, {
                location: r ? le.HY : le.bs,
                children: (0, o.jsx)(at, {
                  event: a,
                  section: a.jsondata.sale_sections[i],
                  activeTab: new Xe.y(null, d),
                  language: e.language,
                  nSaleDayIndex: d,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: r
                    ? he.S.EPreviewMode_Enabled
                    : he.S.EPreviewMode_Disabled,
                }),
              });
            } else if (r)
              return (0, o.jsxs)("div", {
                className: Ze.ErrorDiv,
                children: ["Error could not find sale section ", n],
              });
          }
          return null;
        }
        let ce = null;
        function it() {
          return (
            ce == null &&
              (ce = new Map([
                ...Array.from(Ue().entries()),
                [
                  "itemdef",
                  {
                    Constructor: lt,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Oe, autocloses: !1 }],
                ["deckcompatcount", { Constructor: ct, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: dt, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: ht, autocloses: !1 }],
                ["price", { Constructor: Ke, autocloses: !1 }],
                ["pricesavings", { Constructor: $e, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: ut, autocloses: !1 }],
                ["chooseaccount", { Constructor: ft, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: nt, autocloses: !1 }],
                ["optindoorquest", { Constructor: st, autocloses: !1 }],
                ["classname", { Constructor: mt, autocloses: !1 }],
                ["localize", { Constructor: gt, autocloses: !1 }],
                ["salesection", { Constructor: rt, autocloses: !1 }],
                ["reservationbutton", { Constructor: Dt, autocloses: !1 }],
              ])),
            ce
          );
        }
        function lt(e) {
          const { event: n } = e.context,
            a = Number.parseInt((0, f.j$)(e.args, "appid")),
            r = Number.parseInt((0, f.j$)(e.args, "itemdefid")),
            i = Number.parseInt((0, f.j$)(e.args, "maxquantity")),
            d = (0, f.j$)(e.args, "calltoaction");
          return !(0, ke.gS)(a, r, !1) || !n
            ? (0, o.jsx)(C.t, {
                size: "small",
                position: "center",
                string: (0, I.we)("#Loading"),
              })
            : (0, o.jsx)(ee.f, {
                language: e.language,
                clanAccountID: n.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: a, nItemDefID: r, max_quantity: i },
                strCallToAction: d,
              });
        }
        function ct(e) {
          const n = z();
          if (!n) return (0, o.jsx)(C.t, { size: "small" });
          const a = Number.parseInt((0, f.j$)(e.args));
          return (0, o.jsx)("span", { children: (0, Z.D)(Number(J(n, a))) });
        }
        function dt(e) {
          const n = (0, y.j)(x.iA.accountid, "library");
          if (!n) return (0, o.jsx)(C.t, { size: "small" });
          const a = Number.parseInt((0, f.j$)(e.args));
          let r = n.verifiedList?.length || 0;
          switch (a) {
            case M.sd:
              r = n.playableList?.length || 0;
              break;
            case M.V8:
              r = n.unsupportedList?.length || 0;
              break;
            case M.YX:
              r = n.unknownList?.length || 0;
              break;
          }
          return (0, o.jsx)("span", { children: (0, Z.D)(Number(r)) });
        }
        function ut(e) {
          const n = Number.parseInt((0, f.j$)(e.args)),
            a =
              "hide" in e.args && !!Number.parseInt((0, f.j$)(e.args, "hide"));
          return n >= 0
            ? (0, o.jsx)(vt, { nDoorIndex: n, bHide: a, children: e.children })
            : null;
        }
        function vt(e) {
          const { nDoorIndex: n, bHide: a, children: r } = e,
            i = (0, s.OM)(n);
          return i == null
            ? null
            : (i && !a) || (!i && a)
              ? (0, o.jsx)(o.Fragment, { children: e.children })
              : null;
        }
        function ft(e) {
          if (x.iA.logged_in) {
            const n = Number.parseInt((0, f.j$)(e.args)),
              a = Number.parseInt((0, f.j$)(e.args, "mod"));
            if (a > 0 && n < a && x.iA.accountid % a == n) return e.children;
          }
          return null;
        }
        function mt(e) {
          const n = (0, f.j$)(e.args);
          return n?.trim().length > 0
            ? (0, o.jsx)("div", { className: n.trim(), children: e.children })
            : (0, o.jsx)(o.Fragment, { children: e.children });
        }
        function gt(e) {
          return (0, o.jsx)("span", {
            className: l.LocalizeBlock,
            children: (0, I.oW)(
              e.children,
              (0, o.jsx)("b", {}),
              (0, o.jsx)("b", {}),
              (0, o.jsx)("b", {}),
              (0, o.jsx)("b", {}),
            ),
          });
        }
        function ht(e) {
          let n = (0, f.j$)(e.args);
          return n
            ? (0, o.jsx)(He, { giveawayid: n })
            : (0, o.jsx)(u.Fragment, {});
        }
        function Dt(e) {
          const { showErrorInfo: n, event: a } = e.context,
            r = Number.parseInt((0, f.j$)(e.args)),
            i = u.useMemo(() => {
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
          if (r && i) {
            const d = Number.parseInt((0, f.j$)(e.args, "depositpackageid")),
              g = Number.parseInt((0, f.j$)(e.args, "psulesspackageid")),
              O = (0, f.j$)(e.args, "out_of_stock_override"),
              A = (0, f.j$)(e.args, "delivery_override"),
              D = (0, f.j$)(e.args, "delivery_override_out_of_stock");
            return (0, o.jsx)(ne, {
              section: i,
              reservationPackageID: r,
              depositPackageID: d,
              psuLessPackageID: g,
              strOutOfStockOverride: O,
              strDeliveryOverride: D || A,
              bDeliveryOverrideOnlyIfOutOfStock: !!D,
            });
          }
          return (0, o.jsx)(o.Fragment, {});
        }
        var It = t(71698),
          yt = t(82206);
        function Ct(e) {
          const { bSalePage: n } = e,
            [a, r] = u.useState(p.KN.IsInitialized());
          return (
            (0, It.H)(a, n),
            u.useEffect(() => {
              _.Vw.Init(new R.D(x.TS.WEBAPI_BASE_URL)),
                b.O3.Init(),
                p.KN.InitGlobal().then(() => r(!0));
            }, []),
            u.useEffect(() => {
              const i = (0, I.l4)();
              i && K.locale(i);
            }, []),
            a
              ? n
                ? (0, o.jsx)(yt.d3, { dictionary: it(), children: e.children })
                : e.children
              : null
          );
        }
      },
      32545: (P) => {
        P.exports = {
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
      10026: (P) => {
        P.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (P) => {
        P.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (P) => {
        P.exports = {
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
      9202: (P) => {
        P.exports = {
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
