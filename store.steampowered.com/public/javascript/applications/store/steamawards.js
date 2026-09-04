/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [23027],
    {
      15860: (X, Z, t) => {
        "use strict";
        t.d(Z, { L: () => n, c: () => k });
        var e = t(27386),
          Q = t(76617),
          G = t(58632),
          h = t.n(G);
        function k(B, M) {
          return new (h())(
            async (O) => {
              const v = [...O],
                T = await e.xtC.GetPlayerLinkDetails(B, { steamids: v }),
                U = new Map();
              return (
                T.Body()
                  .accounts()
                  .forEach((f) => {
                    const y = f.toObject();
                    U.set(y.public_data.steamid, y);
                  }),
                v.map((f) => U.get(f) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...M },
          );
        }
        function n(B) {
          return (0, Q.V)("PlayerLinkDetails", () => k(B));
        }
      },
      95174: (X, Z, t) => {
        "use strict";
        t.d(Z, { u: () => ne, z: () => ve });
        var e = t(7850),
          Q = t(9046),
          G = t(99412),
          h = t(19298),
          k = t(68266),
          n = t(56492),
          B = t(72609),
          M = t(80702),
          O = t(21721),
          v = t(95995),
          T = t(29522),
          U = t(40358),
          f = t(72865),
          y = t(41032),
          L = t(65946),
          s = t(68031),
          d = t(90626),
          R = t(73259),
          b = t(33924),
          E = t.n(b),
          A = t(86866),
          I = t(18654),
          C = t.n(I),
          P = t(78069),
          W = t(72429),
          te = t(13465),
          ae = t(36118),
          D = t(36707),
          $ = t(3166);
        const ce = 30;
        function ne(he) {
          const {
              event: z,
              imageURLOverride: j,
              bShowAssociatedApp: de,
              langOverride: oe,
              onClick: _e,
              eEventRount: se,
              bHidePrices: me,
              nSummaryMaxLength: ge,
            } = he,
            pe = (0, y.Zj)(z.appid),
            qe = (0, A.n)(),
            Ae = oe || (0, G.sfN)(B.TS.LANGUAGE),
            Se =
              (0, k.m0)(
                j !== void 0 ? void 0 : z,
                "capsule",
                Ae,
                Q.wI.capsule_main,
              ) ?? j,
            Fe =
              (0, k.m0)(j !== void 0 ? void 0 : z, "capsule", Ae, Q.wI.full) ??
              j,
            [He, Ue, Pe, je] = (0, L.q3)(() => [
              z.GetNameWithFallback(Ae) || "",
              z.GetCategoryAsString(),
              z.GetSummaryWithFallback(Ae, ge),
              z.GetSubTitleWithLanguageFallback(Ae) || "",
            ]),
            ye = (0, T.$5)(z.appid),
            { data: Ce } = (0, U.lv)(ye),
            fe = [];
          if ((Se && fe.push(Se), Fe && Fe !== Se && fe.push(Fe), Ce)) {
            const Oe = (0, O.b0)(Ce, "main_capsule");
            Oe && fe.push(Oe);
          }
          const [We, Te] = (0, d.useState)(Se),
            Ke = (Oe, J, Qe) => {
              Qe >= fe.length && Te(void 0), Te(fe[Qe + 1]);
            };
          if (!z)
            return (0, e.jsx)("div", { className: E().OtherEvents_EventCtn });
          const ke = z ? z.GetStartTimeAndDateUnixSeconds() : 0;
          let we = je;
          return (
            je && (je.length > ce || He.length > ce) && (we = void 0),
            (0, e.jsxs)("div", {
              className: E().EventSizer,
              children: [
                (0, e.jsxs)(n.tj, {
                  className: (0, D.A)(
                    E().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    E().HoversEnabled,
                  ),
                  eventModel: z,
                  route: se || n.PH.k_eView,
                  onClick: _e,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, D.A)(
                        E().EventSummaryContainer,
                        E().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: E().EventSummaryType,
                          children: Ue,
                        }),
                        (0, e.jsx)("div", {
                          className: E().EventSummaryText,
                          children: Pe,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: E().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: We ? `url(${(0, R.j3)(We)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: E().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            E().OtherEvents_MainImageCtn,
                            pe && E().MaskImages,
                          ),
                          children: (0, e.jsx)(te.c, {
                            rgSources: fe,
                            onIncrementalError: Ke,
                            className: E().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: E().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: E().OtherEvents_TextTitle,
                              children: He,
                            }),
                            !!we &&
                              (0, e.jsx)("div", {
                                className: E().OtherEvents_SubTitle,
                                children: we,
                              }),
                            (0, e.jsxs)(s.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, D.A)(
                                    E().EventType,
                                    E().ShowInWideMode,
                                  ),
                                  children: Ue,
                                }),
                                ke > qe
                                  ? (0, e.jsx)("div", {
                                      className: (0, D.A)(
                                        E().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, e.jsx)(W.K4, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          z.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, e.jsx)(W.K4, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        z.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, D.A)(
                                E().EventSummaryText,
                                E().ShowInWideMode,
                              ),
                              children: Pe,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(de && z.appid) &&
                  (0, e.jsx)(ve, { appid: z.appid, bHidePrice: me }),
              ],
            })
          );
        }
        function ve(he) {
          const { appid: z, bHidePrice: j } = he,
            de = (0, T.$5)(z),
            { data: oe } = (0, U.J$)(de),
            { data: _e } = (0, U.lv)(de),
            { data: se } = (0, U.Q_)(de),
            me = (0, f.n9)(),
            ge = (0, $.Qn)();
          if (!_e || !oe) return null;
          const pe = se && se.hide_discount_pct_for_compliance;
          return (0, e.jsx)(v.A, {
            appID: z,
            children: (0, e.jsxs)(h.Z, {
              className: (0, D.A)(E().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, P.S)(oe, me, ge, !1),
              children: [
                (0, e.jsx)(M.Q, {
                  id: de,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, D.A)(E().AppCapsuleImage, E().CapsuleShadow),
                    src: (0, O.b0)(_e, "small_capsule"),
                    alt: oe.name,
                  }),
                }),
                !j &&
                  !oe.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, D.A)(
                      E().AppCapsulePrice,
                      se?.discount_pct ? C().Discounted : "",
                    ),
                    children: [
                      !!(se?.discount_pct && pe) &&
                        (0, e.jsx)("div", {
                          className: C().DiscountIconCtn,
                          children: (0, e.jsx)(ae.XH_, {}),
                        }),
                      !!(se?.discount_pct && !pe) &&
                        (0, e.jsx)("span", {
                          className: C().StoreSaleDiscountBox,
                          children: `-${se?.discount_pct}%`,
                        }),
                      se &&
                        se.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: C().StoreSalePriceBox,
                          children: se.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      95414: (X, Z, t) => {
        "use strict";
        t.d(Z, { j: () => U, u: () => f });
        var e = t(7850),
          Q = t(90626),
          G = t(24660),
          h = t(83482),
          k = t(72865),
          n = t(77200),
          B = t(53113),
          M = t(68094),
          O = t(72609),
          v = t(3166);
        function T(y) {
          if (y) {
            if ("appid" in y) return "app";
            if ("bundleid" in y) return "bundle";
            if ("packageid" in y) return "sub";
          }
        }
        function U(y) {
          const {
              id: L,
              hoverClassName: s,
              fnGetIDOverride: d,
              fnHoverState: R,
              disableScreenshots: b,
              children: E,
            } = y,
            A = Q.useRef(null),
            I = Q.useCallback(
              (P) => {
                const W = T(L);
                W &&
                  (R && R(!0),
                  window.GameHover &&
                    (A.current &&
                      b &&
                      (A.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(d ? d() : A.current, P, "global_hover", {
                      type: W,
                      id: (0, M.G$)(L).id,
                      v6: 1,
                    })));
              },
              [R, d, b, L],
            ),
            C = Q.useCallback(
              (P) => {
                T(L) &&
                  (R && P.relatedTarget && R(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      d ? d() : A.current,
                      P,
                      "global_hover",
                    ));
              },
              [L, R, d],
            );
          return (0, e.jsx)("div", {
            ref: A,
            className: s,
            onMouseEnter: I,
            onMouseLeave: C,
            onFocus: I,
            onBlur: C,
            children: E,
          });
        }
        function f(y) {
          const {
              id: L,
              strExtraParams: s,
              fnOnClickOverride: d,
              strOverrideURL: R,
            } = y,
            b = (0, k.n9)(),
            E = (0, n.w)(),
            A = (0, B.NT)(
              R ||
                (L && "creatorid" in L
                  ? (0, h.It)(
                      `${O.TS.STORE_BASE_URL}curator/${((0, M.G$))(L).id}${s ? `?${s}` : ""}`,
                      b,
                      E,
                    )
                  : (0, h.It)(
                      `${O.TS.STORE_BASE_URL}${T(L)}/${((0, M.G$))(L).id}${s ? `?${s}` : ""}`,
                      b,
                      E,
                    )),
            );
          return (0, e.jsx)(U, {
            ...y,
            children: (0, e.jsx)(G.Ii, {
              className: y.className,
              href: d ? void 0 : A,
              target: O.TS.IN_CLIENT || d ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: d,
              children: y.children,
            }),
          });
        }
      },
      76617: (X, Z, t) => {
        "use strict";
        t.d(Z, { V: () => M });
        function e(O) {
          return Object.prototype.toString.call(O) === "[object Object]";
        }
        function Q(O) {
          if (!e(O)) return !1;
          const v = O.constructor;
          if (typeof v > "u") return !0;
          const T = v.prototype;
          return !(
            !e(T) || !Object.prototype.hasOwnProperty.call(T, "isPrototypeOf")
          );
        }
        function G(...O) {
          return JSON.stringify(O, (v, T) => {
            if (Q(T)) {
              const U = {};
              return (
                Object.keys(T)
                  .sort()
                  .forEach((f) => {
                    U[f] = T[f];
                  }),
                U
              );
            }
            return T;
          });
        }
        var h = t(90626),
          k = t(7850);
        const n = (0, h.createContext)({ instances: {}, factories: {} });
        function B(O) {
          const { name: v, fnFactory: T, children: U } = O,
            f = React.useContext(n),
            [y] = useState({}),
            L = useMemo(
              () => ({
                instances: y,
                factories: { ...f.factories, [v]: T },
                parent: f,
              }),
              [y, v, f],
            );
          return jsx(n.Provider, { value: L, children: U });
        }
        function M(O, v) {
          const T = (0, h.useContext)(n),
            U = typeof O == "string" ? O : G(...O);
          let f = T;
          for (; f; ) {
            if (U in f.instances) return f.instances[U];
            if (U in f.factories) break;
            f = f.parent;
          }
          const L = (f?.factories[U] ?? v)();
          return ((f ?? T).instances[U] = L), L;
        }
      },
      53025: (X, Z, t) => {
        "use strict";
        t.d(Z, { $: () => B });
        var e = t(41735),
          Q = t.n(e),
          G = t(3166),
          h = t(79118),
          k = t(73259),
          n = t(72604);
        class B extends h.ZQ {
          async DeleteOldAnnouncement(O, v) {
            let T = new URLSearchParams();
            T.append("sessionid", (0, G.KC)());
            let U =
                G.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                O.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                v,
              f = await Q().post(U, T);
            if (f.data.success != n.R) throw f.data;
            return this.RemoveGIDFromList(O, k.cB + v), f.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              B.sm_Instance ||
                ((B.sm_Instance = new B()), B.sm_Instance.Init()),
              B.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              B.sm_SummaryInstance ||
                ((B.sm_SummaryInstance = new B(!0)),
                B.sm_SummaryInstance.Init()),
              B.sm_SummaryInstance
            );
          }
        }
      },
      35098: (X, Z, t) => {
        "use strict";
        t.d(Z, { DW: () => U, js: () => v, mK: () => d, tb: () => s });
        var e = t(90626),
          Q = t(80902),
          G = t(54806),
          h = t(99412),
          k = t(68312),
          n = t(15369),
          B = t(5858),
          M = t(76559),
          O = t(15860);
        function v(A) {
          const I = (0, k.KV)(),
            C = e.useContext(L);
          return (0, Q.I)(d(C, I, A));
        }
        function T(A) {
          const I = React.useRef(void 0),
            C = v(A);
          return C.data
            ? C
            : (I.current ||
                (I.current = new CPersonaStateImpl(
                  typeof A == "string"
                    ? new CSteamID(A)
                    : CSteamID.InitFromAccountID(A),
                )),
              { ...C, data: I.current });
        }
        function U(A) {
          const I = (0, k.KV)(),
            C = e.useContext(L);
          return (0, G.E)({ queries: A.map((P) => d(C, I, P)) });
        }
        function f(A) {
          return ReactQueryClient.getQueryData(["PlayerSummary", A]);
        }
        function y(A) {
          const { loadPersonaState: I, children: C } = A,
            P = React.useMemo(() => ({ loadPersonaState: I }), [I]);
          return React.createElement(L.Provider, { value: P }, C);
        }
        const L = e.createContext({
          loadPersonaState: async (A, I) => {
            if (A == null) return null;
            const C = await b(I).load(
              M.b.InitFromAccountID(A).ConvertTo64BitString(),
            );
            return E(M.b.InitFromAccountID(A), C);
          },
        });
        function s() {
          return e.useContext(L);
        }
        function d(A, I, C) {
          const P = typeof C == "string" ? new M.b(C).GetAccountID() : C;
          return {
            queryKey: ["PlayerSummary", P],
            queryFn: () => A.loadPersonaState(P, I),
            enabled: !!P,
          };
        }
        let R;
        function b(A) {
          return (R ??= (0, O.c)(A));
        }
        function E(A, I) {
          let C = new B.Z(A);
          const P = I?.public_data,
            W = I?.private_data;
          return (
            (C.m_bInitialized = !!I),
            (C.m_ePersonaState = W?.persona_state ?? h.cU3),
            (C.m_strAvatarHash = P?.sha_digest_avatar
              ? (0, n.Kx)(P.sha_digest_avatar)
              : B.dV),
            (C.m_strPlayerName = P?.persona_name ?? A.ConvertTo64BitString()),
            (C.m_strAccountName = W?.account_name),
            W?.persona_state_flags &&
              (C.m_unPersonaStateFlags = W?.persona_state_flags),
            W?.game_id && (C.m_gameid = W?.game_id),
            W?.game_server_ip_address &&
              (C.m_unGameServerIP = W?.game_server_ip_address),
            W?.lobby_steam_id && (C.m_game_lobby_id = W?.lobby_steam_id),
            W?.game_extra_info && (C.m_strGameExtraInfo = W?.game_extra_info),
            P?.profile_url && (C.m_strProfileURL = P.profile_url),
            C
          );
        }
      },
      82385: (X, Z, t) => {
        "use strict";
        t.d(Z, { AD: () => ie, He: () => ze });
        var e = t(7850),
          Q = t(14947),
          G = t(75844),
          h = t(90626),
          k = t(99412),
          n = t(41301),
          B = t(19298),
          M = t(72849),
          O = t(9046),
          v = t(813),
          T = t(7582),
          U = t(34360),
          f = t(40976),
          y = t(82206),
          L = t(67598),
          s = t(90316),
          d = t.n(s),
          R = t(91376),
          b = t(95695),
          E = t.n(b),
          A = t(13465),
          I = t(36118),
          C = t(85599),
          P = t(53107),
          W = t(5552),
          te = t(71742),
          ae = t(8323),
          D = t(36707),
          $ = t(82734),
          ce = t(18210),
          ne = t(30096),
          ve = t(53113),
          he = t(3166),
          z = t(17009),
          j = t.n(z),
          de = t(90537),
          oe = t(56492),
          _e = t(88812),
          se = t(42184),
          me = t(43193),
          ge = t(87897),
          pe = t(7967),
          qe = t(76559),
          Ae = t(60480),
          Se = t(84676);
        function Fe(r) {
          const { bOn: i } = r;
          return jsx("div", {
            className: i ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize(i ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function He(r) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(Ue, { identifier: r.identifier })
            : CommunityConfig.IS_CURATOR
              ? jsx(Pe, { identifier: r.identifier })
              : jsx(je, { identifier: r.identifier });
        }
        function Ue(r) {
          const i = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: g } = useCreatorHome(i.GetAccountID());
          return !g || !g.BIsLoaded()
            ? null
            : jsx(ye, {
                strURL: NavLink(g.GetCreatorHomeURL("developer")),
                strImgUrl: g.GetAvatarURLFullSize(),
                strName: g.GetName(),
              });
        }
        function Pe(r) {
          const i = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return i
            ? jsx(ye, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: i.avatar_full_url,
                strName: i.group_name,
              })
            : null;
        }
        function je(r) {
          const [i] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return i
            ? jsx(ye, {
                strURL: NavLink(i.GetStorePageURL()),
                strImgUrl: i.GetAssets().GetSmallCapsuleURL(),
                strName: i.GetName(),
              })
            : null;
        }
        function ye(r) {
          const { strURL: i, strImgUrl: g, strName: S } = r;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: i,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [jsx("img", { src: g }), S],
              }),
            }),
          });
        }
        function Ce(r) {
          const { children: i } = r;
          return (0, he.Qn)() && !he.TS.IN_STEAMUI
            ? (0, e.jsx)(pe.Qg, {
                className: b.GamepadOnlyScrollPanel,
                children: i,
              })
            : (0, e.jsx)(e.Fragment, { children: i });
        }
        var fe = t(16085),
          We = t(90046),
          Te = t(41032),
          Ke = t(37589),
          ke = t(20169),
          we = Object.defineProperty,
          Oe = Object.getOwnPropertyDescriptor,
          J = (r, i, g, S) => {
            for (
              var p = S > 1 ? void 0 : S ? Oe(i, g) : i, V = r.length - 1, Y;
              V >= 0;
              V--
            )
              (Y = r[V]) && (p = (S ? Y(i, g, p) : Y(p)) || p);
            return S && p && we(i, g, p), p;
          };
        const Qe = 56,
          rt = 136,
          ot = h.lazy(() =>
            Promise.all([
              t.e(36597),
              t.e(56589),
              t.e(85599),
              t.e(33512),
              t.e(18307),
              t.e(79611),
              t.e(94781),
              t.e(80702),
              t.e(48355),
              t.e(60480),
              t.e(97169),
              t.e(63089),
              t.e(1703),
              t.e(33884),
              t.e(13524),
              t.e(94932),
              t.e(73810),
              t.e(79139),
              t.e(34004),
              t.e(10177),
              t.e(68396),
            ]).then(t.bind(t, 2422)),
          );
        function it(r) {
          const [i, g] = (0, Se.t7)(r.appid, { include_assets: !0 }),
            [S, p] = (0, v.TB)(r.clanID);
          let V = "";
          return (
            r.appid
              ? (V = i?.GetAssets()?.GetCommunityIconURL() || "")
              : r.clanID && (V = p ? p.avatar_full_url : ""),
            (0, e.jsx)("div", {
              className: (0, D.A)(j().ScrollButton, j().GameArt, j().AnimIn),
              onClick: r.onAppIconClick,
              children: !!V && (0, e.jsx)("img", { src: V }),
            })
          );
        }
        let ie = class extends h.Component {
          m_loader = null;
          m_refPage = h.createRef();
          m_refContent = h.createRef();
          m_refScroll = h.createRef();
          m_refScrollAnchor = h.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(r) {
            super(r),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                ((this.m_loader = new Ge(this.props.partnerEventStore)),
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                ));
          }
          FindCurrentlyViewedEventIndex() {
            if (!this.m_refContent.current || !this.m_refScroll.current)
              return -1;
            let i = this.m_refContent.current.children,
              g = this.GetScrollTopForComparison();
            for (let S = 0; S < i.length; S++) {
              let p = i[S],
                V = p.offsetTop,
                Y = V + p.clientHeight;
              if (V <= g && Y > g) return S;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? rt : Qe;
          }
          GetScrollTopForComparison() {
            return Math.ceil(
              this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
            );
          }
          ScrollToEvent(r) {
            let i = this.m_refContent.current;
            if (!i || r < 0 || r >= i.children.length || this.m_scrollAnimation)
              return;
            let g = i.children[r].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(g);
          }
          ScrollToOffset(r) {
            let i = this.m_refScroll.current;
            if (!i) return;
            let g = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new W.JV(i, { scrollTop: r }, g)),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let r = this.m_loader.GetEvents(),
              i = this.FindCurrentlyViewedEventIndex() + 1;
            if (i >= r.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent(i),
              i == r.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let r = this.FindCurrentlyViewedEventIndex(),
              i = r - 1;
            if (i < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let g = this.m_refContent.current;
            if (g) {
              let S = g.children[r],
                p = S.offsetTop,
                V = p + S.clientHeight,
                Y = this.GetScrollTopForComparison();
              (Y = Y - (V - p) * 0.3), p <= Y && (i = r);
            }
            this.ScrollToEvent(i);
          }
          OnScrollComplete() {
            this.m_scrollAnimation = null;
          }
          Close() {
            if (this.props.closeModal) {
              this.props.closeModal();
              return;
            }
          }
          OnBackgroundClick(r) {
            r.currentTarget == r.target && this.Close();
          }
          OnKeyDown(r) {
            r.keyCode == n.zV && this.Close();
          }
          OnScroll(r) {
            if (this.props.bShowOnlyInitialEvent) return;
            let i = this.m_refScroll.current;
            if (!i) return;
            let g = i.clientHeight;
            i.scrollHeight - (i.scrollTop + g) <= g &&
              this.m_loader.LoadMoreAtEnd(),
              i.scrollTop <= g && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(r) {
            let i = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !i)
            )
              return null;
            let g = this.m_refScroll.current;
            if (!g || !this.m_refScrollAnchor.current) return null;
            let S = this.m_refScrollAnchor.current.GetDOM();
            return S ? S.offsetTop - g.scrollTop : null;
          }
          OnTouchStart(r) {
            r.touches.length == 1 &&
              (this.m_nTouchStartClientY = r.touches[0].clientY);
          }
          OnTouchMove(r) {
            if (!this.m_refScroll.current || r.touches.length == 0) return;
            const i = this.m_nTouchStartClientY - r.touches[0].clientY;
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(r, i);
          }
          OnWheel(r) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(r, r.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(r, i) {
            const g =
                $.kD(r.target) && $.id(this.m_refScroll.current, r.target),
              S = i < 0 && this.m_refScroll.current.scrollTop < 1,
              p =
                this.m_refScroll.current.scrollHeight -
                  this.m_refScroll.current.scrollTop <=
                this.m_refScroll.current.clientHeight,
              V = i > 0 && p;
            (!g || S || V) && r.cancelable && r.preventDefault();
          }
          SetGlobalHeaderHidden(r) {
            const i = document.getElementsByClassName("responsive_header");
            (0, te.wT)(
              i.length <= 1,
              "Must have at most one responsive_header",
            ),
              i.length >= 1 && (i[0].style.display = r ? "none" : null);
          }
          SetFooterPinnedToBottom(r) {
            const i = document.getElementById("footer");
            i && (i.style.position = r ? "absolute" : null);
          }
          componentDidMount() {
            const r = this.m_refScroll.current;
            r && !$.id(r, r.ownerDocument.activeElement) && r.focus();
            const i = this.m_refPage.current;
            i &&
              (i.addEventListener("touchstart", this.OnTouchStart),
              i.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              i.addEventListener("wheel", this.OnWheel, { passive: !1 })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(r, i, g) {
            if (g !== null) {
              let S = this.m_refScroll.current;
              S && !$.id(S, S.ownerDocument.activeElement) && S.focus();
              let p = this.m_refScrollAnchor.current
                ? this.m_refScrollAnchor.current.GetDOM()
                : null;
              p && (S.scrollTop = p.offsetTop - g);
            }
          }
          componentWillUnmount() {
            const r = this.m_refPage.current;
            r &&
              (r.removeEventListener("touchstart", this.OnTouchStart),
              r.removeEventListener("touchmove", this.OnTouchMove),
              r.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: r, bShowOnlyInitialEvent: i } = this.props,
              g = !r,
              S = g ? [] : i ? [r] : this.m_loader.GetEvents(),
              p = [];
            let V = this.props.appid,
              Y = this.props.clanSteamID?.GetAccountID();
            for (const u of S) {
              const re = u.GID == this.props.initialEvent.GID,
                Ee = re;
              p.push(
                (0, e.jsx)(
                  ze,
                  {
                    ref: re ? this.m_refScrollAnchor : null,
                    event: u,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: re,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !Ee,
                    className: this.props.eventClassName,
                  },
                  u.GID,
                ),
              ),
                V == null && (V = u.appid),
                Y == null && (Y = u.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = p.length),
              (0, e.jsxs)(B.Z, {
                onCancelButton: this.props.closeModal,
                className: j().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, e.jsx)(se.v, { appId: V, clanId: Y }),
                  (0, e.jsx)(B.Z, {
                    className: (0, D.A)(
                      j().AppPartnerEventsBody,
                      j().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: ke.Yo.NoTransformSparseContent,
                    children: g
                      ? (0, e.jsx)("div", {
                          className: j().NoEvents,
                          children: (0, ce.we)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, D.A)(
                                j().ControlSection,
                                !this.props.onAppIconClick && j().NoGameLink,
                                i && j().NoScrollArrows,
                              ),
                              children: (0, e.jsx)("div", {
                                className: j().ControlSectionWidth,
                                children: (0, e.jsxs)("div", {
                                  className: j().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, e.jsx)("div", {
                                        className: (0, D.A)(
                                          j().CloseButton,
                                          j().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, e.jsx)(I.sED, {}),
                                      }),
                                    !i &&
                                      (0, e.jsx)("div", {
                                        className: (0, D.A)(
                                          j().ScrollButton,
                                          j().Up,
                                          j().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, e.jsx)(I.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !i &&
                                      (0, e.jsx)("div", {
                                        className: (0, D.A)(
                                          j().ScrollButton,
                                          j().Down,
                                          j().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, e.jsx)(I.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, e.jsx)(it, {
                                        appid: V,
                                        clanID: Y,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !i &&
                              (0, e.jsx)(et, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, e.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, D.A)(
                                j().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && j().NoGameLink,
                              ),
                              children: p,
                            }),
                            !i &&
                              (0, e.jsx)(et, {
                                loader: this.m_loader,
                                location: "bottom",
                              }),
                          ],
                        }),
                  }),
                ],
              })
            );
          }
        };
        J([ne.oI], ie.prototype, "ScrollToNextEvent", 1),
          J([ne.oI], ie.prototype, "ScrollToPrevEvent", 1),
          J([ne.oI], ie.prototype, "OnScrollComplete", 1),
          J([ne.oI], ie.prototype, "Close", 1),
          J([ne.oI], ie.prototype, "OnBackgroundClick", 1),
          J([ne.oI], ie.prototype, "OnKeyDown", 1),
          J([ne.oI], ie.prototype, "OnScroll", 1),
          J([ne.oI], ie.prototype, "OnTouchStart", 1),
          J([ne.oI], ie.prototype, "OnTouchMove", 1),
          J([ne.oI], ie.prototype, "OnWheel", 1),
          (ie = J([G.PA], ie));
        const et = (0, G.PA)((r) => {
            let i = r.loader.GetNewerState(),
              g = r.loader.GetOlderState();
            return i == 2 && g == 2
              ? null
              : (r.location == "top" ? i : g) == 2
                ? (0, e.jsx)("div", {
                    className: j().DirectionState,
                    children: (0, e.jsx)(C.t, {
                      position: "center",
                      string: (0, ce.we)("#Loading"),
                    }),
                  })
                : null;
          }),
          ze = h.forwardRef(function (i, g) {
            const S = (0, he.Qn)(),
              [p, V] = (0, Se.t7)(i.event.appid, { include_assets: !0 }),
              Y = (0, Te.Zj)(i.event.appid),
              u = (0, de.Y)();
            return (0, e.jsx)(Ie, {
              ref: g,
              ...i,
              bInGamepadUI: S,
              bShouldMaskImages: Y,
              storeItem: p,
              tracker: u,
            });
          });
        let Ie = class extends h.Component {
          m_refContent = h.createRef();
          m_sendReadInfo = new ae.LU();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const r = 750,
              i = () => {
                this.props.tracker.RecordEventRead(this.props.event, M.Tc.ot),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(r, i);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: r,
                langOverride: i,
                partnerEventStore: g,
                emoticonStore: S,
                className: p,
                additionalTypeAndDateElement: V,
                headerClassnames: Y,
                isPreview: u,
                bShouldMaskImages: re,
                storeItem: Ee,
              } = this.props,
              ue = i || (0, k.sfN)(he.TS.LANGUAGE),
              Ye = r.GetDescriptionWithFallback(ue) || "",
              dt = Y,
              mt = "300px",
              Be = r.GetCategoryAsString(),
              ut = r.type;
            let Xe = "";
            if (r.appid) Xe = Ee?.GetName() || "";
            else if (r.clanSteamID) {
              const nt = v.ac.GetClanInfoByClanAccountID(
                r.clanSteamID.GetAccountID(),
              );
              Xe = nt ? nt.group_name : "";
            }
            const ht = T.HD.GetTimeNowWithOverride(),
              tt =
                ut !== k.uYK && ht < r.GetStartTimeAndDateUnixSeconds() && !u;
            return (0, e.jsx)(Ce, {
              children: (0, e.jsxs)("div", {
                ref: this.m_refContent,
                className: (0, D.A)(
                  p,
                  j().PartnerEvent,
                  d().InLibraryView,
                  dt == "editor" ? d().InEditor : "",
                ),
                children: [
                  (0, e.jsx)(lt, { ...this.props, eLanguage: ue }),
                  (0, e.jsx)("div", {
                    className: d().LibraryEventTitleContainer,
                    children: (0, e.jsxs)("div", {
                      className: d().EventDetailTitleContainer,
                      children: [
                        this.props.headerElement,
                        (0, e.jsxs)("div", {
                          className: (0, D.A)(
                            j().EventTypeAndTimeRow,
                            tt && j().WithReminder,
                          ),
                          children: [
                            (0, e.jsxs)("div", {
                              className: j().TimeandPostedBy,
                              children: [
                                (0, e.jsx)("span", {
                                  className: j().EventType,
                                  children: Be,
                                }),
                                (0, e.jsxs)("span", {
                                  className: j().PostedBy,
                                  children: [
                                    " ",
                                    (0, ce.we)("#EventDisplay_PostedBy"),
                                    Xe,
                                    " ",
                                  ],
                                }),
                                (0, e.jsx)(R.O, { event: r }),
                              ],
                            }),
                            tt &&
                              !u &&
                              (0, e.jsx)("div", {
                                className: j().ReminderContainer,
                                children: (0, e.jsx)(me.j, {
                                  eventModel: r,
                                  lang: ue,
                                  bExpandLeft: !0,
                                }),
                              }),
                            !u && V,
                          ],
                        }),
                        !this.props.disableReadTracking &&
                          !u &&
                          (0, e.jsx)(Ke.Y, {
                            onEnter: this.OnEnterVisible,
                            onLeave: this.OnLeaveVisible,
                            options: { rootMargin: `0px 0px -${mt} 0px` },
                          }),
                        this.props.bInGamepadUI
                          ? (0, e.jsx)("div", {
                              className: d().EventDetailTitle,
                              children: r.GetNameWithFallback(ue),
                            })
                          : (0, e.jsx)(oe.tj, {
                              eventModel: r,
                              route: oe.PH.k_eView,
                              className: d().EventDetailTitle,
                              children: r.GetNameWithFallback(ue),
                            }),
                        r.BHasSubTitle(ue) &&
                          (0, e.jsx)("div", {
                            className: (0, D.A)(
                              d().EventDetailsSubTitle,
                              j().LibraryViewSubtitle,
                            ),
                            children: r.GetSubTitle(ue),
                          }),
                        (0, e.jsx)("div", {
                          className: d().EventDetailUserType,
                        }),
                      ],
                    }),
                  }),
                  !!(
                    r.BEventCanShowBroadcastWidget() &&
                    !this.props.bDisableBroadcastPlayer
                  ) &&
                    (0, e.jsx)("div", {
                      className: d().EventBroadcastCtn,
                      children: (0, e.jsx)(h.Suspense, {
                        fallback: null,
                        children: (0, e.jsx)(ot, { event: this.props.event }),
                      }),
                    }),
                  r.BHasTag("steam_award_nomination_request") &&
                    (0, e.jsx)(L.EventDisplaySteamAwardNomination, {
                      event: r,
                      lang: ue,
                    }),
                  r.BHasTag("steam_award_vote_request") &&
                    (0, e.jsx)(L.WinterSaleSteamAwardVoteWrapper, {
                      appID: r.appid,
                      bIsEventActionEnabled: r.BIsEventActionEnabled(),
                      voteCategories: r.GetSteamAwardNomineeCategories(),
                    }),
                  (0, e.jsxs)("div", {
                    className: d().LibraryEventBodyContainer,
                    children: [
                      (0, e.jsxs)("div", {
                        className: (0, D.A)(
                          d().EventDetailsBody,
                          j().EventDetailsBody,
                          re && d().MaskImages,
                        ),
                        onContextMenu: he.TS.IN_CLIENT ? U.aE : void 0,
                        children: [
                          (0, e.jsx)(y.fh, {
                            text: Ye,
                            partnerEventStore: g,
                            event: r,
                          }),
                          (0, e.jsx)("span", { className: E().Clear }),
                        ],
                      }),
                      (0, e.jsx)(ge._, { event: this.props.event }),
                      !!r.jsondata.read_more_link &&
                        (0, e.jsx)("div", {
                          className: (0, D.A)(j().ReadMoreCnt),
                          children: (0, e.jsx)(P.uU, {
                            className: (0, D.A)(E().Button),
                            href: r.jsondata.read_more_link,
                            children: (0, ce.we)(
                              "#EventEmail_Button_ClickForMoreDetails",
                            ),
                          }),
                        }),
                      !!(
                        r.jsondata.bSaleEnabled && r.jsondata.sale_vanity_id
                      ) &&
                        (0, e.jsxs)("div", {
                          className: (0, D.A)(j().ReadMoreCnt),
                          children: [
                            (0, e.jsx)(fe.m, { gidEvent: r.GID }),
                            (0, e.jsx)("a", {
                              className: (0, D.A)(E().Button, "LinkButton"),
                              href: (0, ve.k2)((0, Ae.n4)(r)),
                              children: (0, ce.we)(
                                "#Event_Button_VisitSalePage",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(We.lS, { appid: r.appid }),
                    ],
                  }),
                  !u &&
                    (0, e.jsx)(f.F, {
                      eventModel: r,
                      partnerEventStore: g,
                      emoticonStore: S,
                    }),
                ],
              }),
            });
          }
        };
        J([ne.oI], Ie.prototype, "OnEnterVisible", 1),
          J([ne.oI], Ie.prototype, "OnLeaveVisible", 1),
          (Ie = J([G.PA], Ie));
        function lt(r) {
          const {
              event: i,
              fnFilterImageURLsForKnownFailures: g,
              fnImageFailureCallback: S,
              eLanguage: p,
              bShouldMaskImages: V,
            } = r,
            Y = i.BImageNeedScreenshotFallback("background", p),
            u = i.type;
          let re = (0, _e.WC)(i, "background", p, O.wI.background_main, !Y);
          return (
            g && re && (re = g(re)),
            (0, e.jsxs)(e.Fragment, {
              children: [
                u != k.Fwr &&
                  !Y &&
                  (0, e.jsx)(A.c, {
                    className: (0, D.A)(
                      d().EventCoverImageBackground,
                      V && d().MaskImages,
                    ),
                    rgSources: re,
                    onIncrementalError: (Ee, ue, Ye) => S && S(ue),
                  }),
                re &&
                  re.length > 0 &&
                  (0, e.jsx)(A.c, {
                    className: d().EventBackgroundBlur,
                    rgSources: re,
                    onIncrementalError: (Ee, ue, Ye) => S && S(ue),
                  }),
              ],
            })
          );
        }
        var ct = ((r) => (
          (r[(r.Idle = 1)] = "Idle"),
          (r[(r.Loading = 2)] = "Loading"),
          (r[(r.EndOfContent = 3)] = "EndOfContent"),
          r
        ))(ct || {});
        class Ge {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID;
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor(i) {
            (0, Q.Gn)(this), (this.m_partnerEventStore = i);
          }
          GetEvents() {
            return this.m_rgEvents;
          }
          GetAppID() {
            return this.m_nAppID;
          }
          GetOlderState() {
            return this.m_eOlderDirection;
          }
          GetNewerState() {
            return this.m_eNewerDirection;
          }
          async InitAroundEvent(i, g) {
            const S = this.m_partnerEventStore;
            (this.m_nAppID = i.appid),
              (this.m_clanSteamID = i.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = g),
              this.m_rgEvents.push(i);
            let p = null;
            try {
              p = await S.LoadAdjacentPartnerEventsByEvent(
                i,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, Q.h5)(() => {
              if (!p || p.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let V = p.findIndex((re) => re.GID == i.GID),
                Y = V,
                u = V >= 0 ? p.length - V - 1 : 0;
              (this.m_eNewerDirection = Y >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection = u >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = p);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let i = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let g = null;
            try {
              g =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  i,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, Q.h5)(() => {
              if (!g) {
                this.m_eOlderDirection = 1;
                return;
              }
              const S = new Set(this.m_rgEvents.map((p) => p.GID));
              for (let p of g)
                S.has(p.GID) || (this.m_rgEvents.push(p), S.add(p.GID));
              this.m_eOlderDirection =
                g.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let i = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let g = null;
            try {
              g =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  i,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, Q.h5)(() => {
              if (!g) {
                this.m_eNewerDirection = 1;
                return;
              }
              const S = new Set(this.m_rgEvents.map((p) => p.GID));
              for (let p of g.reverse())
                S.has(p.GID) || (this.m_rgEvents.unshift(p), S.add(p.GID));
              this.m_eNewerDirection =
                g.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        J([Q.sH.shallow], Ge.prototype, "m_rgEvents", 2),
          J([Q.sH], Ge.prototype, "m_eOlderDirection", 2),
          J([Q.sH], Ge.prototype, "m_eNewerDirection", 2);
      },
      91424: (X, Z, t) => {
        "use strict";
        t.d(Z, { H: () => d, Y: () => s });
        var e = t(7850),
          Q = t(75844),
          G = t(90626),
          h = t(53025),
          k = t(79118),
          n = t(58483),
          B = t(82385),
          M = t(88003),
          O = t(30096),
          v = t(19332),
          T = t.n(v),
          U = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          y = (R, b, E, A) => {
            for (
              var I = A > 1 ? void 0 : A ? f(b, E) : b, C = R.length - 1, P;
              C >= 0;
              C--
            )
              (P = R[C]) && (I = (A ? P(b, E, I) : P(I)) || I);
            return A && I && U(b, E, I), I;
          };
        function L(R) {
          const { event: b, closeModal: E } = R,
            A = (0, n.LJ)();
          return (0, e.jsx)(B.AD, {
            initialEvent: b,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: k.O3,
            emoticonStore: A,
            showAppHeader: !0,
            closeModal: E,
          });
        }
        function s(R, b) {
          (0, M.pg)((0, e.jsx)(L, { event: R }), b);
        }
        let d = class extends G.Component {
          m_refFocus = G.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(R) {
            const { fnClose: b } = this.props;
            R.keyCode === 27 && b && b();
          }
          OnBackgroundClick(R) {
            R.currentTarget == R.target && this.props.fnClose();
          }
          render() {
            const { event: R, langOverride: b, isPreview: E } = this.props;
            return (0, e.jsx)("div", {
              ref: this.m_refFocus,
              className: v.Main,
              onClick: this.OnBackgroundClick,
              children: (0, e.jsx)(n.sU, {
                children: (A) =>
                  (0, e.jsx)(
                    B.He,
                    {
                      event: R,
                      emoticonStore: A,
                      partnerEventStore: h.$.Get(),
                      langOverride: b,
                      isPreview: E,
                      bDisableBroadcastPlayer: !1,
                    },
                    R.GID,
                  ),
              }),
            });
          }
        };
        y([O.oI], d.prototype, "escFunction", 1),
          y([O.oI], d.prototype, "OnBackgroundClick", 1),
          (d = y([Q.PA], d));
      },
      86390: (X, Z, t) => {
        "use strict";
        t.d(Z, { Cg: () => U, pZ: () => y, vg: () => f });
        var e = t(7850),
          Q = t(90626),
          G = t(88003),
          h = t(18210),
          k = t(3166),
          n = t(34004),
          B = t(6740),
          M = t(3685),
          O = t(8059),
          v = t(96538);
        function T(s) {
          return (0, e.jsx)(G.x_, {
            onEscKeypress: s.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(L, {
              redirectURL: s.redirectURL,
              guestOption: s.guestOption,
            }),
          });
        }
        function U(s) {
          const { redirectURL: d = window.location.href } = s;
          return (0, e.jsx)(v.EN, {
            active: !0,
            children: (0, e.jsx)(T, { redirectURL: d }),
          });
        }
        function f() {
          (0, G.pg)(
            (0, e.jsx)(T, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, h.we)("#Login_SignInTitle") },
          );
        }
        function y(s, d) {
          (0, G.pg)(
            (0, e.jsx)(T, { ownerWin: window, redirectURL: s, guestOption: d }),
            window,
            { strTitle: (0, h.we)("#Login_SignInTitle") },
          );
        }
        function L(s) {
          const { redirectURL: d, guestOption: R } = s,
            [b] = (0, Q.useState)(
              new M.D(k.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [E, A] = (0, Q.useState)(!1),
            I = (C) => {
              C == O.wI.k_PrimaryDomainFail ? A(!0) : window.location.assign(d);
            };
          return (0, e.jsx)("div", {
            children: E
              ? (0, e.jsx)(n.Fn, {})
              : (0, e.jsx)(n.YN, {
                  autoFocus: !0,
                  transport: b,
                  platform: B.SS.tS,
                  onComplete: I,
                  redirectUrl: d,
                  theme: "modal",
                  children: R && (0, e.jsx)(n.Mk, { redirectURL: d }),
                }),
          });
        }
      },
      81081: (X, Z, t) => {
        "use strict";
        t.d(Z, { _: () => A, r: () => E });
        var e = t(7850),
          Q = t(56062),
          G = t(29522),
          h = t(40358),
          k = t(72865),
          n = t(24179),
          B = t(54528),
          M = t(96362),
          O = t(90626),
          v = t(83482),
          T = t(18654),
          U = t.n(T),
          f = t(85705),
          y = t(36118),
          L = t(71421),
          s = t(36707),
          d = t(18210),
          R = t(3166),
          b = t(89926);
        function E(P) {
          const { appid: W, className: te, bTextMode: ae } = P,
            D = (0, G.$5)(W),
            { data: $ } = (0, h.J$)(D),
            { data: ce } = (0, h.by)(D);
          return (0, e.jsx)(A, {
            appid: W,
            bIsFree: !!$?.is_free,
            bIsComingSoon: !!ce?.is_coming_soon,
            bTextMode: ae,
            className: te,
          });
        }
        function A(P) {
          const [W, te] = O.useState(!1),
            ae = (0, k.n9)(),
            {
              appid: D,
              bIsFree: $,
              bIsComingSoon: ce,
              className: ne,
              bTextMode: ve,
            } = P,
            he = (0, G.$5)(D),
            { bIsOwned: z } = (0, n.ZJ)(he),
            j = (0, B.bB)(D),
            { mutateAsync: de } = (0, M.s)(D, !j, (0, v.L3)(ae)),
            { elDialogElement: oe, fnShowLogonDialog: _e } = (0, b.l)(),
            se = async () => {
              if (!R.iA.logged_in) {
                _e();
                return;
              }
              W || (te(!0), await de(), te(!1));
            };
          if (z || (!ce && $))
            return $ ? (0, e.jsx)(I, { possibleDemoAppID: D }) : null;
          let me = null;
          return (
            W && !ve
              ? (me = (0, e.jsx)(f.k, { size: 18 }))
              : j
                ? j &&
                  (me = ve ? (0, d.we)("#OnWishlist") : (0, e.jsx)(y.qnF, {}))
                : (me = ve
                    ? (0, d.we)("#wishlist_add_to_wishlist")
                    : (0, e.jsx)(y.T4m, {})),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(L.he, {
                  toolTipContent: (0, d.we)("#AddToWishlist_ttip"),
                  children: (0, e.jsx)("div", {
                    className: (0, s.A)(U().WishList, ne),
                    onClick: se,
                    children: me,
                  }),
                }),
                oe,
              ],
            })
          );
        }
        function I(P) {
          const { possibleDemoAppID: W, className: te } = P,
            ae = (0, G.$5)(W),
            { data: D } = (0, h.J$)(ae);
          return D &&
            (D.type == Q.uE.ue || D.type == Q.uE.Vi) &&
            D.related_items?.parent_appid
            ? (0, e.jsx)(C, {
                parentAppID: D.related_items?.parent_appid,
                className: te,
              })
            : null;
        }
        function C(P) {
          const { parentAppID: W, className: te } = P,
            ae = (0, G.$5)(W),
            { data: D } = (0, h.J$)(ae),
            { data: $ } = (0, h.by)(ae);
          return !D || !$
            ? null
            : (0, e.jsx)(A, {
                appid: W,
                bIsComingSoon: !!$.is_coming_soon,
                bIsFree: !!D.is_free,
                className: te,
              });
        }
      },
      37643: (X, Z, t) => {
        "use strict";
        t.r(Z), t.d(Z, { default: () => Mt });
        var e = t(7850),
          Q = t(58732),
          G = t(92757),
          h = t(90626),
          k = t(85415),
          n = t.n(k),
          B = t(24660),
          M = t(19298),
          O = t(95414),
          v = t(76035),
          T = t(98609),
          U = t(82734),
          f = t(3166),
          y = t(16412),
          L = t(36118),
          s = t(18210),
          d = t(36707),
          R = t(96538),
          b = t(88003),
          E = t(27386),
          A = t(86390),
          I = t(34041),
          C = t(85599),
          P = t(84676),
          W = t(72604),
          te = t(51079),
          ae = t(18994),
          D = t(68538),
          $ = t(79118),
          ce = t(76559),
          ne = t(90537),
          ve = t(95174),
          he = t(10142),
          z = t(72849),
          j = t(91424),
          de = t(30096),
          oe = t(71568),
          _e = t(28124),
          se = t(67598),
          me = t(29522),
          ge = t(40358),
          pe = t(21721);
        const qe = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
        };
        function Ae(o) {
          const {
              category: a,
              fnShowPicker: l,
              rgPrevLaborOfLoveWinners: m,
            } = o,
            [c, _] = h.useState("");
          if (!(0, v.jT)(a.voteid).data)
            return (0, e.jsx)(C.t, {
              size: "medium",
              position: "center",
              msDelayAppear: 200,
            });
          let N = (0, s.we)("#Steamawards_Nominate_ThisYear");
          return (
            a.flag == I.Xs.bV &&
              (N = (0, s.we)("#Steamawards_Nominate_PastYear")),
            (0, e.jsxs)("div", {
              className: n().NominationPickerCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: n().TopRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: n().TopBarText,
                      children: N,
                    }),
                    (0, e.jsx)("div", {
                      className: n().SearchBarCtn,
                      children: (0, e.jsx)(y.pd, {
                        focusOnMount: !0,
                        onChange: (w) =>
                          _(w.currentTarget.value.toLocaleLowerCase()),
                        value: c,
                        className: n().SearchBar,
                        placeholder: (0, s.we)("#Steamawards_Nominate_Search"),
                        bShowClearAction: !0,
                      }),
                    }),
                    (0, e.jsx)(B.fu, {
                      className: n().CloseButton,
                      onClick: () => l(!1),
                      children: (0, s.we)("#Button_Close"),
                    }),
                  ],
                }),
                c.trim().length > 0
                  ? (0, e.jsx)(He, {
                      strSearch: c,
                      category: a,
                      rgPrevLaborOfLoveWinners: m,
                    })
                  : (0, e.jsx)(Se, { category: a, fnShowPicker: l }),
                (0, e.jsx)("div", {
                  className: n().BottomRow,
                  children: (0, e.jsx)(Ce, {
                    unAppID: v.Fq,
                    eSteamAwardCategoryID: a.voteid,
                    eNominatonSource: I.Ji.HW,
                    fnShowPicker: l,
                  }),
                }),
              ],
            })
          );
        }
        function Se(o) {
          const { category: a, fnShowPicker: l } = o,
            m = (0, v.jT)(a.voteid),
            c = (0, v.cO)(),
            _ = (0, f.Qn)(),
            x = h.useMemo(() => {
              let N = [];
              return m.data.played_app
                .map((F) => ({ appID: F.appid, nPlaytime: F.playtime }))
                .filter((F) =>
                  c.data?.some(
                    (q) => q.appid == F.appID && q.category_id != a.voteid,
                  )
                    ? (N.push(F), !1)
                    : !0,
                )
                .concat(N);
            }, [a.voteid, c.data, m.data.played_app]);
          return (0, e.jsxs)("div", {
            className: n().CarouselView,
            children: [
              m.data?.played_app?.length
                ? (0, e.jsxs)("div", {
                    className: (0, d.A)(n().RecommendationRow, n().Games),
                    children: [
                      (0, e.jsx)("div", {
                        className: n().RecommendationRowTitle,
                        children: (0, s.we)(
                          "#Steamawards_Nominate_GamesYouPlayed",
                        ),
                      }),
                      (0, e.jsx)(je, {
                        eSteamAwardCategoryID: a.voteid,
                        eNominatonSource: I.Ji.MU,
                        rgGameCarouselItems: x,
                      }),
                    ],
                  })
                : (0, e.jsx)(Fe, {
                    eSteamAwardCategoryID: a.voteid,
                    fnShowPicker: l,
                  }),
              !_ &&
                m.data?.suggested_events?.length > 0 &&
                (0, e.jsxs)("div", {
                  className: (0, d.A)(n().RecommendationRow, n().Events),
                  children: [
                    (0, e.jsx)("div", {
                      className: n().RecommendationRowTitle,
                      children: (0, s.we)("#Steamawards_Nominate_Events"),
                    }),
                    (0, e.jsx)(fe, { rgEvents: m.data.suggested_events }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: (0, d.A)(n().RecommendationRow, n().Games),
                children: [
                  (0, e.jsx)("div", {
                    className: n().RecommendationRowTitle,
                    children: (0, s.we)("#Steamawards_Nominate_Recommended"),
                  }),
                  m.data?.suggested_apps &&
                    (0, e.jsx)(je, {
                      eSteamAwardCategoryID: a.voteid,
                      eNominatonSource: I.Ji.qP,
                      rgGameCarouselItems: m.data.suggested_apps.map((N) => ({
                        appID: N.appid,
                      })),
                    }),
                ],
              }),
            ],
          });
        }
        function Fe(o) {
          const { eSteamAwardCategoryID: a, fnShowPicker: l } = o;
          return (0, e.jsxs)("div", {
            className: (0, d.A)(n().RecommendationRow, n().NoEligibleGamesCtn),
            children: [
              (0, e.jsx)("div", {
                className: n().RecommendationRowTitle,
                children: (0, s.we)("#Steamawards_Nominate_NoEligibleGames"),
              }),
              (0, e.jsx)("div", {
                className: n().RecommendationRowSubtitle,
                children: (0, s.we)(
                  "#Steamawards_Nominate_NoEligibleGames_cont",
                ),
              }),
              (0, e.jsx)(Ce, {
                unAppID: v.Fq,
                eSteamAwardCategoryID: a,
                eNominatonSource: I.Ji.HW,
                fnShowPicker: l,
              }),
            ],
          });
        }
        function He(o) {
          const { strSearch: a, category: l, rgPrevLaborOfLoveWinners: m } = o,
            c = (0, v.lE)(a, l, m),
            _ = h.useRef(void 0),
            x = (0, f.Qn)();
          return (
            h.useEffect(() => {
              _?.current && x && _.current.scrollIntoView();
            }, [c, x]),
            (0, e.jsx)("div", {
              className: n().SearchContainer,
              ref: _,
              children: c.isLoading
                ? (0, e.jsx)(C.t, {
                    className: n().SearchThrobber,
                    size: "large",
                    position: "center",
                    msDelayAppear: 200,
                  })
                : (0, e.jsx)(e.Fragment, {
                    children:
                      c.data?.length > 0
                        ? (0, e.jsx)(M.Z, {
                            className: n().SearchResultsContainer,
                            children: c.data.map((N) =>
                              (0, e.jsx)(
                                Ue,
                                {
                                  eSteamAwardCategoryID: l.voteid,
                                  eNominatonSource: I.Ji.RU,
                                  appSuggestion: N,
                                },
                                N.id,
                              ),
                            ),
                          })
                        : (0, e.jsx)("div", {
                            className: n().NoResultsCtn,
                            children: (0, s.we)(
                              "#Steamawards_Search_NoResults",
                            ),
                          }),
                  }),
            })
          );
        }
        function Ue(o) {
          const {
              appSuggestion: a,
              eSteamAwardCategoryID: l,
              eNominatonSource: m,
            } = o,
            c = parseInt(a.id),
            _ = (0, me.$5)(c);
          return (0, e.jsxs)(M.Z, {
            className: n().SearchResultApp,
            children: [
              (0, e.jsx)(O.u, {
                id: _,
                children: (0, e.jsx)("img", { src: a.small_cap }),
              }),
              (0, e.jsx)(Ce, {
                eSteamAwardCategoryID: l,
                eNominatonSource: m,
                unAppID: c,
              }),
            ],
          });
        }
        function Pe(o) {
          let a = 1;
          return (
            o.innerWidth >= 1080
              ? (a = 4)
              : o.innerWidth >= 800
                ? (a = 3)
                : o.innerWidth >= 600 && (a = 2),
            a
          );
        }
        function je(o) {
          const {
              rgGameCarouselItems: a,
              eSteamAwardCategoryID: l,
              eNominatonSource: m,
            } = o,
            c = (0, P.zX)(
              a?.map((ee) => ee.appID),
              qe,
            ),
            x = (0, oe.R7)()?.ownerWindow || window,
            [N, w] = h.useState(() => Pe(x)),
            F = (0, f.Qn)(),
            K = h.useCallback(
              (ee) => {
                w(Pe(x));
              },
              [x],
            ),
            q = (0, de.wY)(K);
          if (c == P.Sq) return null;
          const le = a.filter((ee) => he.A.Get().BHasApp(ee.appID));
          return (0, e.jsx)("div", {
            ref: q,
            className: n().SuggestionCarousel,
            children: (0, e.jsx)(te.Ay, {
              feature: "steamawards_nominate",
              children: (0, e.jsx)(D.F, {
                gap: 12,
                hideArrows: !(0, ae.rp)(),
                visibleElements: N,
                useTestScrollbar: !0,
                bLazyRenderChildren: !0,
                hidePips: F,
                screenIsWide: (0, ae.rp)(),
                children: le.map((ee) =>
                  (0, e.jsx)(
                    ye,
                    {
                      eNominatonSource: m,
                      eSteamAwardCategoryID: l,
                      appID: ee.appID,
                      nPlaytime: ee.nPlaytime,
                    },
                    ee.appID,
                  ),
                ),
              }),
            }),
          });
        }
        function ye(o) {
          const {
              appID: a,
              eSteamAwardCategoryID: l,
              eNominatonSource: m,
              nPlaytime: c,
            } = o,
            _ = (0, me.$5)(a),
            { data: x } = (0, ge.J$)(_),
            { data: N } = (0, ge.gy)(_);
          if (!x) return null;
          let w = null;
          return (
            c && (w = (c / 60).toFixed(1)),
            (0, e.jsxs)("div", {
              className: n().GameCarouselItemCtn,
              children: [
                w &&
                  (0, e.jsx)("div", {
                    className: n().PlaytimeIndicator,
                    children: (0, s.we)("#Steamawards_Playtime_Hours", w),
                  }),
                (0, e.jsx)(O.u, {
                  id: _,
                  children: (0, e.jsx)("img", {
                    className: _e.AppCapsuleImage,
                    src: (0, pe.b0)(N, "small_capsule"),
                    alt: x.name || "",
                  }),
                }),
                (0, e.jsx)(Ce, {
                  unAppID: a,
                  eNominatonSource: m,
                  eSteamAwardCategoryID: l,
                }),
              ],
            })
          );
        }
        function Ce(o) {
          const {
              unAppID: a,
              eSteamAwardCategoryID: l,
              eNominatonSource: m,
              fnShowPicker: c,
            } = o,
            _ = (0, v.cO)(),
            N = (0, oe.R7)()?.ownerWindow || window,
            w = a === v.Fq,
            F = h.useMemo(
              () => _.data?.find((Le) => Le.category_id == l)?.appid === a,
              [l, _.data, a],
            ),
            K = h.useCallback(
              (xe) => {
                let Le = (0, s.we)(
                  "#Steamawards_Nominate_Error_Generic",
                  a,
                  xe ?? "Unknown",
                );
                xe == W.p &&
                  (Le = (0, s.we)("#Steamawards_Nominate_Error_NoMatch", a)),
                  (0, R.pY)(Le, N);
              },
              [N, a],
            ),
            q = h.useCallback(() => {
              a === v.Fq && c && c(!1);
            }, [c, a]),
            le = (0, v.$d)(a, l, m, K, q);
          let ee = (0, s.we)("#Steamawards_Nominate"),
            Me = null,
            Ze = (xe) => {
              if (F) {
                xe.preventDefault();
                return;
              }
              if ((0, se.UserEligibleToNominateOrVote)(!1)) le.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            };
          return (
            w
              ? ((ee = (0, s.we)("#Steamawards_Skip_Btn")),
                (Me = (0, e.jsx)(L.MOk, {})))
              : F && (ee = (0, s.we)("#Steamawards_Nominated")),
            (0, e.jsxs)(y.$n, {
              onClick: Ze,
              className: (0, d.A)(n().NominateGameButton, F && n().Nominated),
              children: [Me, ee],
            })
          );
        }
        function fe(o) {
          const { rgEvents: a } = o,
            [l, m] = h.useState(!1),
            _ = (0, oe.R7)()?.ownerWindow || window,
            [x, N] = h.useState(4),
            w = h.useCallback(
              (K) => {
                let q = 1;
                _.innerWidth >= 1080
                  ? (q = 4)
                  : _.innerWidth >= 920
                    ? (q = 3)
                    : _.innerWidth >= 600 && (q = 2),
                  N(q);
              },
              [_],
            ),
            F = (0, de.wY)(w);
          return (
            h.useEffect(() => {
              if (l) return;
              (async () => {
                a.forEach((le) => {
                  $.O3.QueueLoadPartnerEvent(le.clanid, le.event_gid, !1);
                });
                const q = a.map((le) =>
                  $.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    ce.b.InitFromClanID(le.clanid),
                    le.event_gid,
                    0,
                    !1,
                  ),
                );
                await Promise.all(q), m(!0);
              })();
            }, [a, l]),
            a.length
              ? l
                ? (0, e.jsx)("div", {
                    ref: F,
                    className: n().EventCarousel,
                    children: (0, e.jsx)(te.Ay, {
                      feature: "steamawards_event",
                      children: (0, e.jsx)(D.F, {
                        gap: 12,
                        hideArrows: !(0, ae.rp)(),
                        visibleElements: x,
                        useTestScrollbar: !0,
                        bLazyRenderChildren: !0,
                        className: n().GameCarousel,
                        screenIsWide: (0, ae.rp)(),
                        children: a.map((K) =>
                          (0, e.jsx)(
                            We,
                            { gidEvent: K.event_gid },
                            K.event_gid,
                          ),
                        ),
                      }),
                    }),
                  })
                : (0, e.jsx)(C.t, {
                    className: n().EventCarousel,
                    size: "xlarge",
                    position: "center",
                  })
              : null
          );
        }
        function We(o) {
          const { gidEvent: a } = o,
            l = $.O3.GetClanEventModel(a),
            m = (0, ne.Y)();
          if (!l) return null;
          const c = (_) => {
            m.RecordEventRead(l, z.Tc.HX),
              (0, j.Y)(l, U.uX(_)),
              _.stopPropagation(),
              _.preventDefault();
          };
          return (0, e.jsx)(ve.u, {
            event: l,
            bShowAssociatedApp: !0,
            bHidePrices: !0,
            onClick: c,
          });
        }
        var Te = t(7638),
          Ke = t(179),
          ke = t(35098),
          we = t(19367),
          Oe = t.n(we),
          J = t(7582);
        function Qe(o) {
          const { steamID: a, nYear: l } = o,
            [m, c] = h.useState(() => Te.KN.IsInitialized()),
            [_] = (0, Ke.QD)("k", null),
            x = !!((a && a != T.iA.steamid) || _),
            N = Oe()("2025-12-01T10:00:00-08:00").unix(),
            w = J.HD.GetTimeNowWithOverride(),
            F = !x && w <= N;
          return (
            h.useEffect(() => {
              $.O3.Init(), Te.KN.InitGlobal().then(() => c(!0));
            }, []),
            (0, e.jsx)(te.Ay, {
              method: "nominations",
              children: (0, e.jsxs)(M.Z, {
                className: n().NominationsPageContent,
                children: [
                  x
                    ? (0, e.jsx)(ot, { bEnableNominating: F, steamid: a })
                    : (0, e.jsx)(rt, { year: l }),
                  !x &&
                    (0, e.jsxs)("div", {
                      className: (0, d.A)(
                        n().SectionContent,
                        n().ProgressAndShareCtn,
                      ),
                      children: [
                        (0, e.jsx)(it, {}),
                        (0, e.jsx)(V, { nYear: l }),
                      ],
                    }),
                  m && (0, e.jsx)(ie, { bEnableNominating: F }),
                  (0, e.jsxs)("div", {
                    className: n().BackgroundDark,
                    children: [!x && (0, e.jsx)(ct, {}), (0, e.jsx)(g, {})],
                  }),
                ],
              }),
            })
          );
        }
        function rt(o) {
          return (0, e.jsx)("div", {
            className: n().NominationsHeaderCtn,
            children: (0, e.jsx)("div", {
              className: n().FAQHeaderArea,
              children: (0, e.jsxs)("div", {
                className: n().FAQHeaderCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: n().FAQSaletitle,
                    children: (0, s.PP)(
                      "#Steamawards_Title",
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: n().FAQComingsoon,
                    children: (0, s.we)("#Steamawards_NominateNow"),
                  }),
                  (0, e.jsx)("div", {
                    className: n().FAQComingsoon,
                    children: (0, s.we)("#Steamawards_LevelUpNow", o.year),
                  }),
                  (0, e.jsx)("div", {
                    className: n().FAQComingsoon,
                    children: (0, s.we)("#Steamawards_VoteWinter"),
                  }),
                  (0, e.jsx)("div", {
                    className: n().FAQComingsoon,
                    children: (0, s.we)("#Steamawards_WinnersAnnounced"),
                  }),
                ],
              }),
            }),
          });
        }
        function ot(o) {
          const { steamid: a, bEnableNominating: l } = o,
            m = (0, ke.js)(a);
          return (0, e.jsx)("div", {
            className: n().NominationsHeaderCtn,
            children: (0, e.jsxs)("div", {
              className: (0, d.A)(n().FAQHeaderArea, n().FriendsHeader),
              children: [
                (0, e.jsxs)("div", {
                  className: n().FriendsHeaderCtn,
                  children: [
                    (0, e.jsx)("img", { src: m.data?.avatar_url_full }),
                    (0, e.jsxs)("div", {
                      className: n().FriendsTitleCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, d.A)(n().FriendsTitle, n().Gold),
                          children: (0, s.we)("#Steamawards_TheSteamAwards"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FriendsTitle,
                          children: (0, s.we)(
                            "#Steamawards_FriendsNominations",
                            m.data?.m_strPlayerName,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                l &&
                  (0, e.jsx)("div", {
                    className: n().HeaderButtonCtn,
                    children: (0, e.jsx)("a", {
                      href: `${f.TS.STORE_BASE_URL}steamawards/nominations`,
                      className: (0, d.A)(n().NominateGameButton, n().White),
                      children: (0, s.we)(
                        "#Steamawards_MakeYourOwnNominations_Btn",
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function it(o) {
          const a = (0, v.cO)(),
            l = (0, v.Jo)(v.Ri);
          if (!l.data?.votes) return null;
          const m = !a.data || a.data.length == 0 ? "0" : "" + a.data.length;
          return (0, e.jsx)(M.Z, {
            className: (0, d.A)(n().NominationProgressCtn),
            children: (0, e.jsx)("div", {
              className: n().ProgressTitle,
              children: (0, s.PP)(
                "#Steamawards_TotalNominations",
                m,
                l.data?.votes?.length,
              ),
            }),
          });
        }
        function ie(o) {
          const { bEnableNominating: a } = o,
            l = (0, v.Jo)(v.Ri);
          if (!l.data) return null;
          const m = l.data.votes.map((c) =>
            (0, e.jsx)(
              et,
              {
                bEnableNominating: a,
                category: c,
                rgPrevLaborOfLoveWinners: l.data.labor_of_love_winners,
              },
              c.voteid,
            ),
          );
          return (0, e.jsx)(M.Z, {
            className: (0, d.A)(n().SectionContent, n().SteamAwardCategories),
            children: m,
          });
        }
        function et(o) {
          const {
              category: a,
              bEnableNominating: l,
              rgPrevLaborOfLoveWinners: m,
            } = o,
            { currentNomination: c } = (0, v.Vz)(a.voteid),
            [_, x] = h.useState(!1),
            N = a.internal_name,
            w =
              f.TS.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              N +
              ".jpg?v=3";
          return (0, e.jsxs)(M.Z, {
            className: (0, d.A)(
              n().SteamAwardCategory,
              c && n().Nominated,
              _ && n().PickerOpen,
            ),
            children: [
              (0, e.jsx)("div", {
                className: (0, d.A)(n().SteamAwardCategoryBackground),
                style: { backgroundImage: `url( ${w} )` },
              }),
              (0, e.jsx)("div", {
                className: (0, d.A)(n().SteamAwardCategoryBlurryBackground),
                style: { backgroundImage: `url( ${w} )` },
              }),
              (0, e.jsxs)("div", {
                className: n().CategoryRow,
                children: [
                  (0, e.jsxs)("div", {
                    className: n().LeftColumn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: n().CategoryTitleRow,
                        children: [
                          l &&
                            (0, e.jsx)("div", {
                              className: n().Checkbox,
                              children:
                                c &&
                                (0, e.jsx)(L.X4B, {
                                  color: "#ffffff",
                                  highlightColor: "#ffffff",
                                }),
                            }),
                          (0, e.jsx)("div", {
                            className: n().CategoryTitle,
                            children: a.localization.title_award,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: n().CategoryDescription,
                        children: a.localization.award_description,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, d.A)(n().RightColumn, _ && n().PickerOpen),
                    children: [
                      (0, e.jsx)("div", {
                        className: n().CapsuleBlurryContainer,
                        children: c
                          ? (0, e.jsx)(ze, { nomination: c, bBlurry: !0 })
                          : (0, e.jsx)(Ie, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: n().CapsuleContainer,
                        children: c
                          ? (0, e.jsx)(ze, { nomination: c, bBlurry: !1 })
                          : (0, e.jsx)(Ie, {}),
                      }),
                      l &&
                        (0, e.jsx)(lt, {
                          fnShowPicker: x,
                          has_nomination: !!c,
                        }),
                    ],
                  }),
                ],
              }),
              _ &&
                (0, e.jsx)(Ae, {
                  fnShowPicker: x,
                  category: a,
                  rgPrevLaborOfLoveWinners: m,
                }),
            ],
          });
        }
        function ze(o) {
          const { nomination: a, bBlurry: l } = o,
            m = (0, me.$5)(a.appid),
            { data: c } = (0, ge.J$)(m),
            { data: _ } = (0, ge.gy)(m);
          return c
            ? l
              ? (0, e.jsx)("img", { src: (0, pe.b0)(_, "header"), alt: c.name })
              : (0, e.jsx)(O.u, {
                  className: n().NominatedGameCapsule,
                  id: m,
                  children: (0, e.jsx)("img", {
                    src: (0, pe.b0)(_, "header"),
                    alt: c.name,
                  }),
                })
            : null;
        }
        function Ie() {
          return (0, e.jsx)("div", { className: n().NominatedGameCapsule });
        }
        function lt(o) {
          const { has_nomination: a, fnShowPicker: l } = o;
          let m = (0, s.we)("#Steamawards_Nominate_Btn"),
            c = n().ActionNominate,
            _ = () => l(!0);
          return (
            T.iA.logged_in
              ? a &&
                ((m = (0, s.we)("#Steamawards_Edit_Btn")), (c = n().ActionEdit))
              : ((m = (0, s.we)("#Steamawards_Login_Btn")),
                (c = n().ActionLogin),
                (_ = () => (0, A.vg)())),
            (0, e.jsx)("div", {
              className: (0, d.A)(n().NominateBtnCtn, c),
              children: (0, e.jsx)(y.$n, {
                onClick: _,
                className: (0, d.A)(n().NominateButton),
                children: m,
              }),
            })
          );
        }
        function ct() {
          const o = (0, v.ed)(E.GPz.Mt);
          let a = 0;
          const l = o.data?.quests?.map(
            (c) => (
              c.completed && a++,
              (0, e.jsx)(
                i,
                { eStoreQuestID: c.questid, completed: c.completed },
                c.questid,
              )
            ),
          );
          let m = [];
          for (let c = 1; c < 5; c++)
            m.push((0, e.jsx)(Ge, { nBadgeLevel: c, bCompleted: a >= c }, c));
          return (0, e.jsxs)("div", {
            className: (0, d.A)(n().BadgeSectionCtn, n().SectionContent),
            children: [
              T.iA.logged_in &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: n().BadgeSectionTitle,
                      children: (0, s.we)("#Steamawards_Badge_SectionTitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: n().BadgeTasksCtn,
                      children: l,
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: n().BadgeStatusCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: n().BadgeStatusTitle,
                    children: (0, s.we)("#Steamawards_Badge_BadgeTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: n().BadgeStatusDesc,
                    children: (0, s.we)("#Steamawards_Badge_BadgeDesc"),
                  }),
                  (0, e.jsx)("div", {
                    className: n().BadgeImageRow,
                    children: m,
                  }),
                ],
              }),
            ],
          });
        }
        function Ge(o) {
          const { nBadgeLevel: a, bCompleted: l } = o;
          return (0, e.jsxs)("div", {
            className: (0, d.A)(n().BadgeItem, l && n().Active),
            children: [
              (0, e.jsx)("div", {
                className: n().BadgeImage,
                children: (0, e.jsx)("img", {
                  src:
                    f.TS.BASE_URL_STORE_CDN_ASSETS +
                    `promo/steamawards2025/level_0${a}.webp`,
                }),
              }),
              (0, e.jsx)("div", {
                className: n().BadgeDesc,
                children: (0, s.we)(`#Steamawards_Badge_BadgeTask${a}`),
              }),
            ],
          });
        }
        function r(o) {
          switch (o) {
            case 610:
              return (0, s.we)("#Steamawards_Task1");
            case 611:
              return (0, s.we)("#Steamawards_Task2");
            case 612:
              return (0, s.we)("#Steamawards_Task3");
            case 613:
              return (0, s.we)("#Steamawards_Task4");
            default:
              return "Unknown Task";
          }
        }
        function i(o) {
          const { eStoreQuestID: a, completed: l } = o;
          return (0, e.jsxs)("div", {
            className: n().BadgeTask,
            children: [
              (0, e.jsx)("div", {
                className: n().Checkbox,
                children: l ? (0, e.jsx)(L.Jlk, {}) : null,
              }),
              (0, e.jsx)("div", { className: n().TaskTitle, children: r(a) }),
            ],
          });
        }
        function g() {
          const o = f.TS.COMMUNITY_BASE_URL + "my/badges/";
          return (0, e.jsx)("div", {
            className: (0, d.A)(n().NominationsFAQ, n().SectionContent),
            children: (0, e.jsxs)("div", {
              className: n().NominationsFAQCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: n().LeftCol,
                  children: [
                    (0, e.jsx)("h3", {
                      className: n().FaqSectionTitle,
                      children: (0, s.we)("#Steamawards_FAQ_Title_Badges"),
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)("#Steamawards_FAQ_XP_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)("#Steamawards_FAQ_XP_A"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)("#Steamawards_FAQ_BadgesAll_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.PP)(
                            "#Steamawards_FAQ_BadgesAll_A_wLink",
                            (0, e.jsx)("a", {
                              href: o,
                              children: (0, s.we)(
                                "#Steamawards_FAQ_BadgesAll_A_YourBadges",
                              ),
                            }),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)("#Steamawards_FAQ_ReviewsPrev_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)("#Steamawards_FAQ_ReviewsPrev_A"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_BadgeSkipping_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_BadgeSkipping_A1",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_BadgeSkipping_A2",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: n().RightCol,
                  children: [
                    (0, e.jsx)("h3", {
                      className: n().FaqSectionTitle,
                      children: (0, s.we)("#Steamawards_FAQ_Title_Nominations"),
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_WhoCanNominate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_WhoCanNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_HowToNominate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_HowToNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)("#Steamawards_FAQ_WhichGames_Q"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)("#Steamawards_FAQ_WhichGames_A1"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)("#Steamawards_FAQ_WhichGames_A2"),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)("#Steamawards_FAQ_WhichGames_A3"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_NominateMultiple_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_NominateMultiple_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_EditNominations_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_EditNominations_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_HowShareFriends_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_HowShareFriends_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_WinnersSelected_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_WinnersSelected_A",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n().FaqEntry,
                      children: [
                        (0, e.jsx)("div", {
                          className: n().FAQ_Q,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_WhyParticipate_Q",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: n().FAQ_A,
                          children: (0, s.we)(
                            "#Steamawards_FAQ_WhyParticipate_A",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function S(o, a) {
          (0, b.pg)((0, e.jsx)(p, { nYear: o }), a);
        }
        function p(o) {
          const { closeModal: a, nYear: l } = o,
            m = (0, v.np)(),
            c = (0, v._C)(),
            [_, x] = (0, h.useState)(!1);
          if (!m.data) return null;
          const [N, w] = m.data;
          let F = "";
          w.code &&
            (F =
              f.TS.STORE_BASE_URL +
              `steamawards/nominations/${l}/` +
              T.iA.steamid +
              "?k=" +
              w.code);
          const K = () => {
            navigator.clipboard.writeText(F), x(!0);
          };
          return (0, e.jsx)(R.o0, {
            closeModal: a,
            bAlertDialog: !0,
            strCancelButtonText: (0, s.we)("#Steamawards_Close_Btn"),
            strTitle: (0, s.we)("#Steamawards_ShareLink_Title"),
            children: (0, e.jsxs)(M.Z, {
              className: n().ShareModalBody,
              "flow-children": "column",
              children: [
                (0, e.jsx)("p", {
                  className: (0, d.A)(n().ShareModalText, n().IntroText),
                  children: (0, s.we)("#Steamawards_ShareModal_Description"),
                }),
                F &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(y.JU, {
                        children: (0, s.we)("#YIR_ShareModal_YourLink"),
                      }),
                      (0, e.jsxs)("div", {
                        className: n().UrlContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: n().Url,
                            children: F,
                          }),
                          (0, e.jsx)(y.jn, {
                            className: n().Button,
                            onClick: K,
                            children: (0, s.we)(
                              _
                                ? "#YIR_ShareModal_CopyLink_Success"
                                : "#YIR_ShareModal_CopyLink",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("p", {
                        className: n().ShareModalText,
                        children: (0, s.we)(
                          "#Steamawards_ShareModal_Description2",
                        ),
                      }),
                    ],
                  }),
                (0, e.jsx)(y.$n, {
                  className: n().GenerateShareLinkBtn,
                  onClick: () => c.mutate(),
                  children: (0, s.we)(
                    F
                      ? "#Steamawards_GenerateLink_Btn_Renew"
                      : "#Steamawards_GenerateLink_Btn",
                  ),
                }),
              ],
            }),
          });
        }
        function V(o) {
          const { nYear: a } = o,
            l = (0, v.cO)();
          return !T.iA.logged_in || !l.data || l.data.length == 0
            ? (0, e.jsx)("div", {
                className: n().ShareLinkCtn,
                children: (0, e.jsx)("div", {
                  className: n().ProgressTitle,
                  children: (0, s.we)("#Steamawards_GenerateLink_Fallback"),
                }),
              })
            : (0, e.jsx)("div", {
                className: n().ShareLinkCtn,
                children: (0, e.jsxs)(B.Ii, {
                  className: n().ShareBtn,
                  onClick: (m) => {
                    m.preventDefault(), m.stopPropagation(), S(a, (0, U.uX)(m));
                  },
                  children: [
                    (0, e.jsx)(L.SYj, {}),
                    (0, e.jsx)("span", {
                      children: (0, s.we)("#Steamawards_ShareLink_Btn"),
                    }),
                  ],
                }),
              });
        }
        var Y = t(4775),
          u = t.n(Y),
          re = t(95892),
          Ee = t(72865),
          ue = t(25792),
          Ye = t(7414),
          dt = t(76867),
          mt = t(41032);
        const Be = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
          include_trailers: !0,
        };
        function ut() {
          const o = h.useContext(v.AD);
          return o
            ? (0, e.jsxs)(M.Z, {
                className: u().VotingPageContent,
                children: [
                  (0, e.jsx)(Xe, {
                    bIsVotingOpen: o.bVotingOpen,
                    bIsVotingPast: o.bVotingPast,
                  }),
                  (0, e.jsxs)("div", {
                    className: u().VotingArea,
                    children: [
                      o.bHasStickerRewards &&
                        (0, e.jsx)(ht, {
                          unSaleAppID: o.config.appid,
                          bIsVotingOpen: o.bVotingOpen,
                          bIsVotingPast: o.bVotingPast,
                        }),
                      (0, e.jsx)(nt, {
                        bIsVotingOpen: o.bVotingOpen,
                        bIsVotingPast: o.bVotingPast,
                        unSaleAppID: o.config.appid,
                      }),
                    ],
                  }),
                  (0, e.jsx)(xt, {}),
                ],
              })
            : null;
        }
        function Xe(o) {
          const { bIsVotingOpen: a, bIsVotingPast: l } = o,
            m = h.useContext(v.AD),
            c = (0, v.CF)();
          let _;
          return (
            a
              ? (_ = (0, s.we)("#Steamawards_Voting_Header_VoteNow"))
              : l
                ? (_ = (0, s.we)("#Steamawards_Voting_Header_WinnersUp"))
                : (_ = (0, s.we)(
                    "#Steamawards_Voting_Header_VoteSoon_New",
                    be(m.rtVoteStart),
                  )),
            (0, e.jsx)(M.Z, {
              children: (0, e.jsx)("div", {
                className: (0, d.A)(u().HeaderCtn, c.HeaderCtn),
                children: (0, e.jsx)("div", {
                  className: u().HeaderContent,
                  children: (0, e.jsxs)("div", {
                    className: u().TextColumn,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, d.A)(u().EventTitle, c.EventTitle),
                        children: (0, s.PP)(
                          "#Steamawards_Title_WithYear",
                          m.nYear,
                          (0, e.jsx)("br", {}),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, d.A)(
                          u().InfoText,
                          u().Large,
                          c.InfoText,
                          c.Large,
                        ),
                        children: _,
                      }),
                      l
                        ? (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsx)("div", {
                              className: (0, d.A)(u().InfoText, c.InfoText),
                              children: (0, s.PP)(
                                "#Steamawards_Voting_Header_Winners",
                                m.nYear,
                              ),
                            }),
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("div", {
                                className: (0, d.A)(u().InfoText, c.InfoText),
                                children: (0, s.we)(
                                  "#Steamawards_Voting_Header_Finalists",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, d.A)(u().InfoText, c.InfoText),
                                children: (0, s.we)(
                                  "#Steamawards_Voting_Header_HowTo",
                                  be(m.rtVoteEnd),
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, d.A)(u().InfoText, c.InfoText),
                                children: (0, s.we)(
                                  "#Steamawards_Voting_Header_Dates_New",
                                  be(m.rtVoteEnd),
                                ),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              }),
            })
          );
        }
        function ht(o) {
          const { unSaleAppID: a, bIsVotingOpen: l, bIsVotingPast: m } = o,
            c = (0, v.Jo)(a),
            _ = (0, v.a8)(a),
            x = (0, v.CF)();
          if (!c.data) return null;
          const N = c.data.votes.map((F) =>
            (0, e.jsx)(tt, { unSaleAppID: a, definition: F }, F.voteid),
          );
          let w = null;
          return (
            m
              ? (w = (0, s.PP)(
                  "#Steamawards_Progress_Title_Past",
                  _.data?.length ?? 0,
                  c.data.votes.length,
                ))
              : l
                ? f.iA.logged_in
                  ? _.data?.length > 0
                    ? (w = (0, s.PP)(
                        "#Steamawards_Progress_Title",
                        _.data?.length,
                        c.data.votes.length,
                      ))
                    : (w = (0, s.PP)(
                        "#Steamawards_Progress_Title_None",
                        c.data.votes.length,
                      ))
                  : (w = (0, s.we)("#Steamawards_Progress_Title_LoggedOut"))
                : (w = (0, s.PP)(
                    "#Steamawards_Progress_Title_Soon",
                    c.data.votes.length,
                  )),
            (0, e.jsxs)(M.Z, {
              className: (0, d.A)(
                u().ProgressCtn,
                u().SectionContent,
                x.ProgressCtn,
              ),
              children: [
                (0, e.jsx)("div", { className: u().Title, children: w }),
                (0, e.jsx)("div", { className: u().StickerRow, children: N }),
              ],
            })
          );
        }
        function tt(o) {
          const { definition: a, unSaleAppID: l } = o,
            m = (0, v.Mn)(l, a.voteid),
            c = () =>
              (window.location.href =
                "#" + a.localization.title.replace(/\s/g, "")),
            _ = (0, v.PV)(l, a.voteid),
            x = (0, v.CF)(),
            N = `${f.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${l}/${m ? _?.item_image_small : _?.item_image_large}`,
            w = `${f.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${l}/${_?.item_image_small}`;
          return (0, e.jsxs)("div", {
            className: (0, d.A)(u().CategoryStickerCtn, x.CategoryStickerCtn),
            children: [
              (0, e.jsx)("img", {
                className: (0, d.A)(
                  u().CategoryStickerHover,
                  x.CategoryStickerHover,
                ),
                src: w,
              }),
              (0, e.jsx)(M.Z, {
                className: (0, d.A)(u().CategorySticker, !m && u().Inactive),
                onActivate: c,
                style: { backgroundImage: `url( '${N}' )` },
              }),
            ],
          });
        }
        function nt(o) {
          const { unSaleAppID: a, bIsVotingOpen: l, bIsVotingPast: m } = o,
            _ = (0, v.Jo)(a).data.votes.map((x) =>
              (0, e.jsx)(
                ft,
                {
                  bIsVotingOpen: l,
                  bIsVotingPast: m,
                  unSaleAppID: a,
                  definition: x,
                },
                x.voteid,
              ),
            );
          return (0, e.jsx)(M.Z, {
            id: "Categories",
            className: (0, d.A)(u().CategoryList, u().SectionContent),
            children: _,
          });
        }
        function ft(o) {
          const {
              definition: a,
              unSaleAppID: l,
              bIsVotingOpen: m,
              bIsVotingPast: c,
            } = o,
            _ = (0, P.zX)(
              a.app_discounts.map((H) => H.appid),
              Be,
            ),
            x = (0, v.Mn)(l, a.voteid),
            N = h.useRef(0),
            w = (0, oe.R7)(),
            F = h.useContext(v.AD),
            [K, q] = h.useState([]),
            [le, ee] = h.useState(0),
            [Me, Ze] = h.useState(!1),
            [xe, Le] = h.useState(0),
            [_t, Lt] = h.useState(!x && !c),
            [Rt, Ft] = h.useState(),
            [Ve, Ut] = h.useState(669),
            pt =
              f.TS.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              a.internal_name +
              ".jpg?v=1",
            Wt = f.TS.IMG_URL + "promo/steamawards2023/placeholder_main.png",
            Je = w?.ownerWindow || window,
            Qt = h.useCallback((H) => {
              Ut(H.contentRect.height);
            }, []),
            Gt = (0, de.wY)(Qt),
            st = h.useCallback(() => {
              let H = "-20% 0px -50% 0px";
              if (Je.innerHeight <= Ve) H = "0px 0px 0px 0px";
              else {
                const Re = Je.innerHeight / Ve,
                  Ne = Math.min(
                    Re * 40 + Re * Ve - (Ve + 40),
                    Je.innerHeight * 0.65,
                  );
                H = `-${Math.min(Ve * 0.4, Je.innerHeight * 0.1)}px 0px -${Ne}px 0px`;
              }
              Ft(H);
            }, [Je.innerHeight, Ve]);
          h.useEffect(
            () => (
              window.addEventListener("resize", st),
              () => window.removeEventListener("resize", st)
            ),
          ),
            h.useEffect(() => {
              const H = async () => {
                let $e = [];
                if (f.iA.logged_in) {
                  const Re = await Promise.all(
                    a.app_discounts?.map(async (Ne) => {
                      const at = [Ne.appid, f.iA.accountid].toString(),
                        Xt = await (0, Ye.sx)(at);
                      return { appid: Ne.appid, hash: Xt };
                    }),
                  );
                  Re.sort((Ne, at) => (Ne.hash > at.hash ? 1 : -1)),
                    ($e = Re.map((Ne) => Ne.appid));
                } else $e = a.app_discounts.map((Re) => Re.appid);
                q($e), ee($e[N.current]), st();
              };
              K.length || H();
            }, [a.app_discounts, st, K]);
          const bt = h.useCallback(() => {
              if (!xe) {
                let H = N.current + 1;
                H >= K.length && (H = 0), (N.current = H), ee(K[N.current]);
              }
            }, [K, xe]),
            Vt = h.useCallback((H) => {
              Ze(H);
            }, []),
            Ht = h.useCallback((H) => {
              Le(H), ee(H);
            }, []),
            Kt = h.useCallback(() => {
              Le(0), ee(K[N.current]);
            }, [K]);
          if (_ == P.Sq)
            return (0, e.jsx)(C.t, {
              position: "center",
              size: "large",
              msDelayAppear: 300,
            });
          const kt = K?.map((H) =>
              (0, e.jsx)(
                Et,
                {
                  eCategory: a.voteid,
                  unSaleAppID: l,
                  bCurrentlyActive: le === H,
                  unAppID: H,
                  bIsVotingOpen: m,
                  bIsCurrentVoteApp: x == H,
                  fnOnMouseLeaveApp: Kt,
                  fnOnMouseEnterApp: Ht,
                },
                H,
              ),
            ),
            zt = K?.map((H) =>
              (0, e.jsx)(
                Ct,
                {
                  bHoveringApp: H == xe,
                  unAppID: H,
                  bPlayMicrotrailers: Me,
                  bCurrentlyActive: le === H,
                  fnOnVideoEnd: bt,
                },
                H,
              ),
            ),
            Yt = 500;
          let gt = (0, e.jsx)(e.Fragment, { children: zt });
          return (
            a.winner_appid && c
              ? (gt = (0, e.jsx)(St, { unAppID: a.winner_appid }))
              : x && (gt = (0, e.jsx)(At, { unAppID: x })),
            (0, e.jsx)(ue.tH, {
              children: (0, e.jsx)(re.J, {
                thresholds: [0.4],
                rootMargin: Rt,
                trigger: "repeated",
                onVisibilityChange: Vt,
                children: (0, e.jsxs)(M.Z, {
                  ref: Gt,
                  className: (0, d.A)(
                    u().SteamAwardCategory,
                    x && u().CategoryVoted,
                    Me && u().Active,
                  ),
                  children: [
                    (0, e.jsx)("a", {
                      id: a.localization.title.replace(/\s/g, ""),
                      className: u().Anchor,
                    }),
                    (0, e.jsx)("div", {
                      className: (0, d.A)(u().SteamAwardCategoryBackground),
                      style: { backgroundImage: `url( ${pt} )` },
                    }),
                    (0, e.jsx)("div", {
                      className: (0, d.A)(
                        u().SteamAwardCategoryBlurryBackground,
                      ),
                      style: { backgroundImage: `url( ${pt} )` },
                    }),
                    (0, e.jsxs)("div", {
                      className: u().CategoryRow,
                      children: [
                        (0, e.jsxs)("div", {
                          className: u().LeftColumn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: u().CategoryTitleRow,
                              children: [
                                (0, e.jsx)("div", {
                                  className: u().CategoryYear,
                                  children: (0, s.PP)(
                                    "#Steamawards_Title_WithYear_NoBreaks",
                                    F.nYear,
                                  ),
                                }),
                                (0, e.jsx)("div", {
                                  className: u().CategoryTitle,
                                  children: a.localization.title_award,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: u().CategoryDescription,
                              children: a.localization.award_description,
                            }),
                            (x || c) &&
                              (0, e.jsx)(y.$n, {
                                className: u().HideShowBtn,
                                onClick: () => Lt(!_t),
                                children: _t
                                  ? (0, s.we)("#Steamawards_HideFinalists_Btn")
                                  : (0, s.we)("#Steamawards_ShowFinalists_Btn"),
                              }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: (0, d.A)(u().RightColumn),
                          children: (0, e.jsxs)("div", {
                            className: u().CapsuleContainer,
                            children: [gt, (0, e.jsx)("img", { src: Wt })],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(dt.M, {
                      timeout: Yt,
                      unmountOnExit: !0,
                      mountOnEnter: !0,
                      in: _t,
                      classNames: {
                        enter: u().Enter,
                        enterActive: u().EnterActive,
                        exit: u().Exit,
                        exitActive: u().ExitActive,
                      },
                      children: (H) =>
                        (0, e.jsxs)("div", {
                          ref: H,
                          className: u().FinalistsCtn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: u().FinalistsIntro,
                              children: [
                                (0, e.jsx)("div", {
                                  children: c
                                    ? (0, s.we)(
                                        "#Steamawards_Voting_Finalists_Past",
                                      )
                                    : (0, s.we)(
                                        "#Steamawards_Voting_Finalists",
                                      ),
                                }),
                                (0, e.jsx)("div", {
                                  className: u().FinalistsLine,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: u().FinalistsRow,
                              children: kt,
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function At(o) {
          const { unAppID: a } = o,
            [l] = (0, P.t7)(a, Be),
            m = (0, Ee.aL)(l?.GetStorePageURL(), "nominee_capsule");
          return l
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: u().CurrentVoteBanner,
                    children: (0, s.we)("#Steamawards_Voting_YourVote"),
                  }),
                  (0, e.jsx)("a", {
                    href: m,
                    children: (0, e.jsx)("img", {
                      src: l.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function St(o) {
          const { unAppID: a } = o,
            [l] = (0, P.t7)(a, Be),
            m = (0, Ee.aL)(l?.GetStorePageURL(), "winner_capsule");
          return l
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: u().CurrentVoteBanner,
                    children: (0, s.we)("#Steamawards_Voting_Winner"),
                  }),
                  (0, e.jsx)("a", {
                    className: u().WinnerCapsule,
                    href: m,
                    children: (0, e.jsx)("img", {
                      src: l.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function Ct(o) {
          const {
              unAppID: a,
              bCurrentlyActive: l,
              fnOnVideoEnd: m,
              bPlayMicrotrailers: c,
              bHoveringApp: _,
            } = o,
            [x] = (0, P.t7)(a, Be),
            N = h.useRef(void 0),
            w = (0, mt.dy)();
          h.useEffect(() => {
            N.current && (l && c ? N.current.play() : N.current.pause());
          }, [l, c]);
          const F = x?.GetMicroTrailer(w);
          return !x || !F?.strWebMURL
            ? null
            : (0, e.jsxs)("video", {
                className: (0, d.A)(u().MicrotrailerVideo, l && u().Active),
                poster: x.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                onEnded: m,
                ref: N,
                preload: "auto",
                loop: _,
                playsInline: !0,
                muted: !0,
                children: [
                  (0, e.jsx)("source", {
                    src: F.strWebMURL,
                    type: "video/webm",
                  }),
                  !f.TS.IN_CLIENT &&
                    (0, e.jsx)("source", {
                      src: F.strMP4URL,
                      type: "video/mp4",
                    }),
                ],
              });
        }
        function Et(o) {
          const {
              unAppID: a,
              unSaleAppID: l,
              eCategory: m,
              bCurrentlyActive: c,
              fnOnMouseEnterApp: _,
              fnOnMouseLeaveApp: x,
              bIsVotingOpen: N,
              bIsCurrentVoteApp: w,
            } = o,
            [F] = (0, P.t7)(a, Be),
            K = (0, v.ZB)(a, m, l),
            q = (0, Ee.aL)(F?.GetStorePageURL(), "nominee_capsule"),
            le = (0, v.Vz)(m),
            ee = le && le.currentNomination?.appid === a,
            Me = h.useCallback(() => {
              if ((0, se.UserEligibleToNominateOrVote)(!0)) w || K.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            }, [w, K]);
          if (!F) return null;
          const Ze = w
            ? (0, s.we)("#Steamawards_Voting_Action_Voted")
            : (0, s.we)("#Steamawards_Voting_Action_Vote");
          return (0, e.jsxs)(M.Z, {
            className: (0, d.A)(
              u().FinalistGameCtn,
              c ? u().CurrentlyFeatured : "",
              w ? u().MyVote : "",
            ),
            onMouseEnter: () => _(a),
            onBlur: x,
            onFocus: () => _(a),
            onMouseLeave: x,
            children: [
              (0, e.jsxs)("a", {
                href: q,
                className: u().CapsuleLink,
                children: [
                  (0, e.jsx)("img", {
                    src: F.GetAssetsWithoutOverrides().GetHeroCapsuleURL(),
                    className: u().Capsule,
                  }),
                  (0, e.jsx)("div", {
                    className: u().Highlight,
                    children: "\xA0",
                  }),
                ],
              }),
              N &&
                (0, e.jsx)(y.$n, {
                  onClick: Me,
                  className: u().ActionButton,
                  children: Ze,
                }),
              ee &&
                (0, e.jsx)("div", {
                  className: u().YourNomination,
                  children: (0, s.we)("#Steamawards_Voting_Action_YourNominee"),
                }),
            ],
          });
        }
        function xt() {
          const o = h.useContext(v.AD),
            a = (0, v.CF)(),
            l = f.TS.HELP_BASE_URL + "faqs/view/71D3-35C2-AD96-AA3A",
            m =
              "#Steamawards_Voting_FAQ_6_Q" + (o.nYear >= 2024 ? "_2024" : ""),
            c =
              "#Steamawards_Voting_FAQ_6_A" + (o.nYear >= 2024 ? "_2024" : "");
          let _ = [
            (0, e.jsx)(
              De,
              {
                strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_1_Q"),
                strAnswer: (0, s.oW)(
                  "#Steamawards_Voting_FAQ_1_A",
                  (0, e.jsx)("a", { href: l, children: ", " }),
                ),
              },
              "FAQ_1",
            ),
          ];
          return (
            o.bHasStickerRewards &&
              _.push(
                (0, e.jsx)(
                  De,
                  {
                    strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_2_Q"),
                    strAnswer: (0, s.we)("#Steamawards_Voting_FAQ_2_A"),
                  },
                  "FAQ_2",
                ),
              ),
            (_ = [
              ..._,
              (0, e.jsx)(
                De,
                {
                  strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_3_Q"),
                  strAnswer: (0, s.we)(
                    "#Steamawards_Voting_FAQ_3_A_New",
                    be(o.rtVoteStart),
                    be(o.rtVoteEnd),
                  ),
                },
                "FAQ_3",
              ),
              (0, e.jsx)(
                De,
                {
                  strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_7_Q"),
                  strAnswer: (0, s.we)("#Steamawards_Voting_FAQ_7_A"),
                },
                "FAQ_4",
              ),
              (0, e.jsx)(
                De,
                {
                  strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_8_Q"),
                  strAnswer: (0, s.we)("#Steamawards_Voting_FAQ_8_A"),
                },
                "FAQ_5",
              ),
              (0, e.jsx)(
                De,
                {
                  strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_4_Q"),
                  strAnswer: (0, s.we)(
                    "#Steamawards_Voting_FAQ_4_A_New",
                    be(o.rtVoteEnd),
                  ),
                },
                "FAQ_6",
              ),
              (0, e.jsx)(
                De,
                {
                  strQuestion: (0, s.we)("#Steamawards_Voting_FAQ_5_Q"),
                  strAnswer: (0, s.we)("#Steamawards_Voting_FAQ_5_A"),
                },
                "FAQ_7",
              ),
              (0, e.jsx)(
                De,
                { strQuestion: (0, s.we)(m), strAnswer: (0, s.we)(c) },
                "FAQ_8",
              ),
            ]),
            (0, e.jsxs)("div", {
              className: (0, d.A)(u().FAQWrapper, u().SectionContent),
              children: [
                (0, e.jsx)("div", {
                  className: (0, d.A)(u().FaqSectionTitle, a.FaqSectionTitle),
                  children: (0, s.we)("#Steamawards_Voting_FAQ_Title"),
                }),
                (0, e.jsx)("div", {
                  className: (0, d.A)(u().FAQCtn, a.FAQCtn),
                  children: _,
                }),
              ],
            })
          );
        }
        function De(o) {
          const { strQuestion: a, strAnswer: l } = o,
            m = (0, v.CF)();
          return (0, e.jsxs)(M.Z, {
            className: (0, d.A)(u().FaqEntry, m.FaqEntry),
            children: [
              (0, e.jsx)("div", {
                className: (0, d.A)(u().FAQ_Q, m.FAQ_Q),
                children: a,
              }),
              (0, e.jsx)("div", {
                className: (0, d.A)(u().FAQ_A, m.FAQ_A),
                children: l,
              }),
            ],
          });
        }
        function be(o) {
          return new Date(o * 1e3).toLocaleString(s.pf.GetPreferredLocales(), {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          });
        }
        var jt = t(26019),
          It = t.n(jt),
          Dt = t(79870),
          Nt = t.n(Dt),
          Pt = t(66701),
          yt = t.n(Pt);
        function Tt(o) {
          const { nYear: a } = o,
            l = (0, J.f1)(),
            m = (0, v.RE)(),
            c = Bt(a),
            _ = h.useMemo(() => {
              if (!m || !m.definitions?.votes?.length) return null;
              const x = m.definitions.votes[0].start_time,
                N = m.definitions.votes[0].end_time,
                w = l >= x && l < N,
                F = l >= N,
                K = m.definitions.votes.some((q) => !!q.item_type);
              return {
                config: m,
                bVotingOpen: w,
                bVotingPast: F,
                yearStyles: c,
                nYear: a,
                rtVoteStart: x,
                rtVoteEnd: N,
                bHasStickerRewards: K,
              };
            }, [a, l, m, c]);
          return _
            ? (0, e.jsx)(te.Ay, {
                method: "steamawards",
                children: (0, e.jsx)(v.AD.Provider, {
                  value: _,
                  children: (0, e.jsx)(ut, {}),
                }),
              })
            : null;
        }
        const vt = { 2023: It(), 2024: Nt(), 2025: yt() },
          wt = Object.values(vt).reduce((o, a) => ({ ...o, ...a }), {}),
          Ot = 2023;
        function Bt(o) {
          const [a, l] = h.useState({});
          return (
            h.useEffect(() => {
              let c = vt[o];
              c || (c = vt[Ot]), l({ ...wt, ...c });
            }, [o]),
            a
          );
        }
        const Mt = () =>
          (0, e.jsx)(te.Ay, {
            controller: "steamawards",
            children: (0, e.jsxs)(G.dO, {
              children: [
                (0, e.jsx)(G.qh, {
                  path: Q.B.SteamAwardNominations(),
                  render: (o) =>
                    (0, e.jsx)(Qe, {
                      nYear: parseInt(o.match.params.year),
                      steamID: o.match.params.steamid,
                      ...o,
                    }),
                }),
                (0, e.jsx)(G.qh, {
                  path: Q.B.SteamAwards(),
                  render: (o) =>
                    (0, e.jsx)(Tt, { nYear: parseInt(o.match.params.year) }),
                }),
              ],
            }),
          });
      },
      19332: (X) => {
        X.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      33924: (X) => {
        X.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      28124: () => {},
      85415: (X) => {
        X.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          NominationsPageContent: "w8AKcU3i8ClK1UzQzqzI",
          SectionContent: "_20IkdxpCDwL8VLda92dq2Y",
          SteamAwardCategories: "_192O0SfNHIDsbHXq5iRgCM",
          NominationCategory: "_2G4S0SFOCuBF1c4Bx-dELf",
          BackgroundDark: "_1tIgRv45QmeUOQXrV9mdMq",
          NominationsHeaderCtn: "_1TnKc86XFqFWZThfWLgaRw",
          FAQHeaderArea: "_2Mwx1ICH6jNzJoeIPhhFDv",
          FAQHeaderCtn: "_3Jx_3njrOqCGvmBb5b53I6",
          FriendsHeader: "_27LlNtlWucjFwSNWY-Sbyb",
          FAQSaletitle: "_3s_6VHcgaXEyyUZ16zweVp",
          FAQComingsoon: "_1cG2WETjKlQ8Z5EC0lw0i9",
          NominationsFAQCtn: "_296AV5WTzSw4KsXXNtA2_x",
          FaqSectionTitle: "_1XIaoVZxTy-yIN4iv4QqL1",
          LeftCol: "Swdwp186ooghtuQCkEqml",
          RightCol: "_2RbOCvYEtWD-qpyXmp3Ye7",
          FaqEntry: "_3QrF1mai6HX6dr7jJijnTT",
          FAQ_Q: "_3Mou7FjFlqrR-kKuTt9N8g",
          FAQ_A: "-K9ED0JWohLoxFufaRmWt",
          SteamAwardCategory: "_3i1u-y7pjl-qc98gufdZUu",
          PickerOpen: "_1rSWia4DrhNXjIAW9m_H7R",
          SteamAwardCategoryBackground: "_35LJC3vUDhyY8YWBfRTzRB",
          Nominated: "_4GIBs4zFQvYzih0mbwMoB",
          SteamAwardCategoryBlurryBackground: "_3obFcpxM1lY5DMX8dIuroo",
          CategoryRow: "_1n-khJ_oWP9-ADtdauxmaP",
          LeftColumn: "_3Od-8EtYzDWL-rqzXdco_3",
          CategoryTitleRow: "_21wHFSOia958bDDSKRAnuz",
          Checkbox: "_33AlTMfX070fpO5wsAbYCj",
          CategoryTitle: "_3nVYk2PImiZU57xx8MxH-X",
          CategoryDescription: "_3mFT207sfDAaxfn-HB15sj",
          RightColumn: "_1g7X8N5RaLG09kZx1u2fbV",
          NominateBtnCtn: "_1HYrGX2M4CebVc7ClAyqi5",
          NominateButton: "_3yYqk-nDDM0DcyB3Id8NjD",
          PickerShown: "_2O-paI1bSbPTq6FALASFAe",
          ActionLogin: "_3s5xsmskAdOpXRyYWej0pj",
          ActionEdit: "_2p6oT45t7Kjk11DKng_WDR",
          CapsuleContainer: "_1fSqpH3qLOnMPsLvsocjDD",
          CapsuleBlurryContainer: "_1NTFi-9ML6rmzzrsR1dDt4",
          SectionTitle: "_2pyDiHU7ljm9ZRO_MWsJwr",
          BadgeSectionCtn: "_2lMcC-ffwNaKEZXfHcIZ2R",
          BadgeTasksCtn: "lVHOaGMQxyd0Pv3gC9QUj",
          BadgeTask: "_3nxfLmk626DE9RgzkJKLsD",
          TaskTitle: "uZMkLwiiLuPCt8EGWV29h",
          BadgeStatusCtn: "_2y8n9AG3gE8R7p0vnCu11y",
          BadgeStatusTitle: "_2sMYOvGVozOqLO6WXFCAMk",
          BadgeStatusDesc: "_3L4e0hBb8fmEtnQ8yFIoZe",
          BadgeImageRow: "_2MLgogShQSsdXcjJVnCrs_",
          BadgeItem: "PJRtCS56eG2Y0_F_VSsx7",
          BadgeImage: "_2sB2cTqit-_ethQFZRSqSN",
          Active: "_20Ol8bIY8KcNPBctmmB8zn",
          NominationPickerCtn: "_3I1Ga7kMZPDXXbOfgfBTDj",
          CarouselView: "_3mKDmumAiG1vMlU0jWpTe0",
          BottomRow: "a3_pmPQJhnwuVtzHgSyu8",
          TopRow: "_1ARPXpnwKMwds0ED6n65hh",
          CloseButton: "_2kep5HQu4ssXfj5IcG2_Zk",
          TopBarText: "_1CNpmoVrp_326dsK0CmqNS",
          SearchBarCtn: "_2sWS-29Gf-VMMR6kq1I0bN",
          RecommendationRow: "_3Xwn8eFK1QXh1ckrOXov07",
          RecommendationRowTitle: "_2Q0KQMyl8fMBpSMgOn0jsf",
          RecommendationRowSubtitle: "xKXQL9kh2IaXx62pUvaM8",
          Events: "kigvxizh8JmTyh5cyzSEA",
          Games: "IpzhVl6SWsWj5Vcmktozv",
          NoEligibleGamesCtn: "_2AqJTwluya2l8sHRS0Nrne",
          SearchContainer: "KBqkfDknFrTcr7ETAE2OW",
          SearchThrobber: "i4KlSZuYm2iFdxbjUegqJ",
          SearchResultsContainer: "_3M2mdkv-ZvUKBkLPH46U8S",
          SearchResultApp: "_3cbS4zsH_qv-1ZcwaA-4Tt",
          NominateGameButton: "CEmahjyiRmgWZlXL6XEpv",
          GameCarouselItemCtn: "_1Em3_QE0y0zfLhSA7n0NDm",
          PlaytimeIndicator: "_3t0T2BFkpBYduyOOwxnBI2",
          BadgeSectionTitle: "_3G1iNhfSRJ9NLuaxjN8MRA",
          White: "_17enANXtRLMRK09o9OKDdF",
          NoResultsCtn: "_2IlW9sfsAiruuo0GxHGgwl",
          ShareLinkCtn: "_15-jFxRvrZDrlMsnc5flU3",
          FriendsHeaderCtn: "_1T9FWlr19WP72HpE5wYup8",
          FriendsTitleCtn: "_3we3-2_E8Qgoj9vpaFu9JG",
          FriendsTitle: "oaA8CcFGe_Kz-3D-qR28Z",
          ProgressAndShareCtn: "_3FdxnzdLCLEUpdpoJJThYZ",
          ProgressTitle: "_3x6HhTNw3LbAwygEgTzwDr",
          ShareBtn: "_1t4jW207kK9lq0dm7UwBIq",
          HeaderButtonCtn: "WSKzFdd9sj_fIAKnqmiOT",
          Gold: "_3f-rIyt2OF08sZWkdxcuzG",
          EventCarousel: "_1ggzska8h4zQPvkSiT3642",
          ShareModalBody: "_3gj5bE9dm_7GXn87PPWJ7q",
          ShareModalText: "_1xonFOaYYv3jpu4vluDcs6",
          IntroText: "_3_Vb7QOOCe07PD_0t4UL0",
          Button: "_2Ynf3ZGFeViNrevWHYC6a-",
          UrlContainer: "_3CXjxVNiKxUH_xCflrU0fv",
          Url: "_3YxsXALKJ70zL3MTTWqibh",
          GenerateShareLinkBtn: "_23i3vxhJO5yZFZ8UkYUHfq",
          BackgroundAnimation: "_2LOnSlelExzMt5V4a0dNMM",
          "ItemFocusAnim-darkerGrey-nocolor": "_1HvhiBok8gSNZxjvKJodk_",
          "ItemFocusAnim-darkerGrey": "_27N4Tx9ZkLoouSi6u2L0Rj",
          "ItemFocusAnim-darkGreySettings": "_3BuduqT5jtwJUrO_Rlx9pN",
          "ItemFocusAnim-darkGrey": "_1t5LnzcxRDUwMaXczWLvT9",
          "ItemFocusAnim-grey": "UvYtyIHWLaxtSAiaOZoaD",
          "ItemFocusAnim-translucent-white-10": "_2Ze0Xg_Rmw0Fw4dtnjqu06",
          "ItemFocusAnim-translucent-white-20": "_6KKdX8p_ia-DW2BgO6XxL",
          "ItemFocusAnimBorder-darkGrey": "_2VHjMLLOWNhhfZTRb8KGKl",
          "ItemFocusAnim-green": "_3qPaUa-qxMzbOWeav6OXLP",
          focusAnimation: "_2YJq7kaNhJ2mQ-Kc9fGZdd",
          hoverAnimation: "_1Ic0fzk_zPsp6jbxsdCaeZ",
        };
      },
      26019: (X) => {
        X.exports = {
          HeaderCtn: "_1oXTW_jpUID161hkqtu59M",
          EventTitle: "_3xLoBdLse_J3sDGG1p-yXS",
          InfoText: "_2ajjx_6sFyPgZhqB5H3ZnC",
          Large: "TDUFDP_Bl5TP_b5lgQUzr",
          FAQCtn: "_21i-Qc2WCMVQJPd0uWk5t4",
          FAQ_Q: "dwrawv-PnUTEQ1WVRwb1A",
          FAQ_A: "_2EmOv2BukDb5pXZiDipwMd",
          ProgressCtn: "_10nGaDuKJPA3cGdfbd7NPA",
          CategoryStickerCtn: "bI10T2_lqnfiIng7NCXzs",
          CategoryStickerHover: "_10SrgdoAjwiz9kvKG9lBKZ",
          FaqSectionTitle: "_3iDsXG7lNe9DQrxH1NNhwu",
        };
      },
      79870: (X) => {
        X.exports = {
          HeaderCtn: "_1GMPkxVZv0yXnOWg0EPh6C",
          EventTitle: "_2tLWKoQISyrtT5cRa7Bthz",
          InfoText: "_3FtbGRpd5Nc_3f0NWPSmPD",
          Large: "_3lWFGFpuyI0hO8I3yb_rNn",
          FAQCtn: "_3VrYL1Qsqq2VRPBJkD_HaR",
          FAQ_Q: "_3RNM6O7oImIghEzoU__8Xv",
          FAQ_A: "Eq7UcjWcQdQ6tRTSkwOAX",
          ProgressCtn: "_33gp2xeb7nySC065zyyBA4",
          CategoryStickerCtn: "BLVGwcLwZotI2A0JYeAmO",
          CategoryStickerHover: "_3gQFhFaB86zoAkrwBD3DlC",
          FaqSectionTitle: "_1M-Tp2eIsHzDqKVdeyNwEE",
        };
      },
      66701: (X) => {
        X.exports = {
          HeaderCtn: "_1LNVToRGS4KgtDmwChCdO-",
          EventTitle: "SHcWFaCZK_WUravI9p1Lm",
          InfoText: "_3Rnea2kVxFT3chmOmqisne",
          Large: "_2jbNvt46h0RqPVOeAwcb8o",
          FAQCtn: "_3UcPLvxpWKhkpPp5vuNZ4T",
          FaqEntry: "_8B-oP4jghkxueOwLkY5FR",
          FAQ_Q: "_3PJmH1yq33fNNGz3U9m-G0",
          FAQ_A: "_2CZcny1e2NwmV-B3klLJiN",
          ProgressCtn: "_3NRXvKouZmkfv0SJaRwm3z",
          CategoryStickerCtn: "_3aAMtCHlbBv9NIEZdV0q4E",
          CategoryStickerHover: "MofbE6cz8noD7aLG-RuYg",
          FaqSectionTitle: "_1KImUETUAUTMVe-r0tBhbv",
        };
      },
      4775: (X) => {
        X.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          VotingPageContent: "_1HBQ3phQnNEooQ3rlXJWEU",
          SectionContent: "zKwKtEP3BYYZy9vgcUrYt",
          HeaderCtn: "_13RFBrxHyoARje0nMxX8tH",
          HeaderContent: "_1o6dhi3wA_BGCQuKqQs9Ms",
          TextColumn: "PsKAPvFalwTAqd-O5tpBs",
          FriendsHeader: "_2pdEK8BhZO9Fsk7gBzJcYG",
          EventTitle: "_2mq56csinWHiVtUbhcbIOM",
          InfoText: "_1fILAMegJPwehj7zLNiCnz",
          Large: "_2mg9K9HjkOCk8oaDZr8nkp",
          FaqSectionTitle: "_1EC9jX-4aGWknZdkL2jXz_",
          FAQWrapper: "_3k0Nep9QQO6OOkrJKij0rN",
          FAQCtn: "_2771UKLz1V9nHv-LmzpMxN",
          FaqEntry: "_2ajVjokAhuY_AzHO1fxS-N",
          FAQ_Q: "_1HaJqKTqlf4p0CRH0hJkFP",
          FAQ_A: "_3471NyjBfuVEY6GEgzQvTL",
          CategoryList: "_1XPN-o00qToVhhqCl0uCTs",
          SteamAwardCategory: "_1XBoC_51pQmCRN5avridVk",
          Anchor: "VcuHpIeUsOyyyT_KdUjAm",
          Active: "_1O8sHGuQHPL5zH5Sb46LPO",
          SteamAwardCategoryBackground: "_1ZcFSopSc0cwMRbi5HSVry",
          SteamAwardCategoryBlurryBackground: "L4OcSCmIVcuUl12bXB0TX",
          CategoryVoted: "_1t5sSouAYZGCwMwKgvAnnK",
          FinalistGameCtn: "_1BgO7N4S-tDGDCVnQbvKkq",
          MyVote: "_280DKBVL06EUXmV8oW_Stf",
          FinalistsRow: "gyb_bFa1822peSfG3BTXg",
          CurrentlyFeatured: "_26AMuDHs36difPA2OiqXtX",
          CapsuleLink: "_2jKUwrwbrF2t4kX3B82jyy",
          Highlight: "_2U0iDjf7-xhJmnwL85CgAL",
          CategoryRow: "_2coYuktGYgHFSf2bVXdpq_",
          LeftColumn: "_3Jr5t3bKaU_ex0uuo649cF",
          CategoryTitleRow: "xuEPVrSwJC-vQEtreQvnm",
          CategoryYear: "mRgEVFiqQRKYg192KYX8p",
          CategoryTitle: "_3Ly3DC2P8CDiJ7Xasn2ebQ",
          CategoryDescription: "JP2ZzubSDTJPbrIuVD2dj",
          RightColumn: "p_hWPrN8iGC3gBczTo-6t",
          HideShowBtn: "_15hKKH8LRiReglaS1WuEv3",
          CapsuleContainer: "_1hsDa2rFPpjzMu9rjU82U2",
          MicrotrailerVideo: "_3vYc4xomNAmkqKxT6BWe7-",
          CurrentVoteBanner: "_1jM-nBkKTkN_b8SE_j6ZlE",
          FinalistsCtn: "e6QP7VDRKVVFuD2RnEOjR",
          Enter: "_2bR4vh-7XndeYuAbZ9m3mi",
          EnterActive: "HzogqjfTp-YZfCxAYW1fk",
          "open-finalists": "_28Ukz2J5tkhC8hlAaMrh4a",
          Exit: "_1ihgKIWB0hGadYHxkDnfkc",
          ExitActive: "_2PHm0gzC_ah6_cbZ3Oy37F",
          "close-finalists": "_16yj_nglGTyrUl6zzC-jbj",
          FinalistsIntro: "_1tf4a4qNCkQo4ge5yBdOKV",
          FinalistsLine: "_1Se69bGQiI6RkGrQPuVBAa",
          Capsule: "bfZUvnddL__eLX2GmRP-F",
          ActionButton: "_38mJcOp4-kSzGLzkPdUCp",
          YourNomination: "_2KubnqoAbzyD4ZXRpsMPHy",
          WinnerInfoCtn: "_33Gx5kCJIh6ENRNdv04f9b",
          WinnerText: "joZ0rl06vZjm-lcXLbuSO",
          WinnerName: "_3ycfW5X-9UvOmi_kWZgnNU",
          WinnerCapsule: "_3ELJccHCME0WPJAkoGrxJt",
          VotingArea: "n6ZgKyivXpFdb4SqlA64M",
          ProgressCtn: "_2vUweIYz36Cfi6nm57qY0E",
          Title: "_3BVrSWCKUqUJI-Y9JHyPzu",
          StickerRow: "_1zyzM5BB2snSZ78ORI-3no",
          CategoryStickerCtn: "_1-Z8yTrwnOFgH8CFXjAh50",
          CategorySticker: "_1draD7X6gu1HpgfRr0k3bO",
          Inactive: "_1N55FNJtt9fgD3oEKh1ulo",
          CategoryStickerHover: "_16qkH83hzNBjI3OfNA2yPZ",
          BackgroundAnimation: "_1seXoMt6Gw5ShAn1fMGCk1",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Pfbc5UJLub15f3GMuUOpu",
          "ItemFocusAnim-darkerGrey": "_1zD-uKidolXqoKdiqmbZmN",
          "ItemFocusAnim-darkGreySettings": "_1CaH5L10wLn4wyijOgOTH6",
          "ItemFocusAnim-darkGrey": "_3Hclo3bSXjWjLg7ak63JZU",
          "ItemFocusAnim-grey": "_276KuR-DDgs7rfFECDuv2Q",
          "ItemFocusAnim-translucent-white-10": "_1yYdEMizQD0Hu99aKPdShy",
          "ItemFocusAnim-translucent-white-20": "_8CBvtVkjTgCz2X_r9V8wT",
          "ItemFocusAnimBorder-darkGrey": "_3Buhs9OTFb_CFYf4_t6djI",
          "ItemFocusAnim-green": "_436DEQij8XRuUbarXlQ7H",
          focusAnimation: "_2oswwg33QBrwNVBaVy2Cz0",
          hoverAnimation: "ux33-vIaysS2_ZFy8EmtK",
        };
      },
    },
  ]);
})();
