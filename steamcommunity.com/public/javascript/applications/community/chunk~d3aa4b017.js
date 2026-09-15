/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9517],
  {
    43087: (e) => {
      e.exports = {
        StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
        Action: "_2Xpw9--lhL-kpt-lUannE1",
        WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
        StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
        StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
        StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
      };
    },
    45476: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => fe,
          default: () => be,
        });
      var s = a(34629),
        r = a(7850),
        n = a(41735),
        i = a.n(n),
        o = a(75844),
        l = a(65946),
        d = a(90626),
        c = a(39606),
        p = a(67397),
        h = a(55963),
        m = a(30570),
        _ = a(55263),
        u = a(18654),
        S = a(94095),
        b = a(20433),
        x = a(60014),
        v = a(22797),
        g = a(52038),
        j = a(78327),
        C = a(43087),
        f = a.n(C),
        N = a(14987),
        w = a(39777),
        I = a(71420),
        A = a(42834),
        B = a(5309);
      const y = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, x.n9)(),
          s = (0, d.useRef)({ include_assets: !0, include_release: !0 }),
          n = (0, N.$5)(t),
          { data: i } = (0, w.J$)(n),
          { data: o } = (0, w.lv)(n),
          { data: l } = (0, w.by)(n),
          [c, p] = (0, _.t7)(t, s.current);
        let C = (0, g.A)(
            f().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          y = f().StoreSaleWidgetImage_mini,
          P = f().StoreSaleImage_mini;
        if (null == i)
          return (0, r.jsx)("div", {
            className: C,
            children: (0, r.jsx)(v.t, { size: "medium" }),
          });
        if (null == i || !i.name)
          return (0, r.jsx)("div", {
            className: u.StoreSaleWidgetEmptyContainer,
          });
        const T = i.type != m.uE.gQ,
          D = (0, h.wJ)((0, I._)(i), a);
        return (0, r.jsxs)("div", {
          className: C,
          children: [
            (0, r.jsx)("a", {
              href: D,
              target: j.TS.IN_CLIENT ? void 0 : "_blank",
              children: (0, r.jsx)(b.j, {
                id: n,
                children: (0, r.jsx)("div", {
                  className: y,
                  children:
                    o &&
                    (0, r.jsx)("img", {
                      className: P,
                      src: (0, A.b0)(o, "small_capsule"),
                      alt: i.name,
                    }),
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: u.StoreSaleBroadcastWidgetRight,
              children: [
                (0, r.jsx)("a", {
                  href: D,
                  target: j.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, r.jsx)(b.j, {
                    id: n,
                    children: (0, r.jsx)("div", {
                      className: (0, g.A)(
                        u.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: i.name,
                    }),
                  }),
                }),
                l &&
                  (0, r.jsx)("div", {
                    className: u.StoreSaleWidgetRelease,
                    children: (0, B.CC)(l),
                  }),
                Boolean(T) && (0, r.jsx)(S.w, { id: n, bShowDemoButton: !0 }),
              ],
            }),
          ],
        });
      });
      var P = a(22837);
      function T() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var D = a(55815),
        E = a(45285),
        G = a(39302),
        O = a(60727),
        k = a(54728),
        U = a(34010),
        L = a(16021),
        R = a(94011),
        M = a(26296),
        V = a(96236),
        W = a(12155),
        F = a(32754),
        H = a(61859),
        q = a(82227),
        X = a(73745),
        z = a(17720),
        Y = a(67165),
        $ = a(53120),
        J = a.n($);
      const K = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, d.useRef)(null),
          [o, l] = (0, d.useState)(
            t ? Y.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, d.useEffect)(() => {
            const e = i().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = z.b.InitFromClanID(a),
                  s = await Y.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || l(s);
              })(),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          s || !o || !o.BIsLoaded())
        )
          return null;
        const c =
          j.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return (0, r.jsx)("div", {
          className: J().item_drop_ctn,
          children: (0, r.jsxs)("div", {
            children: [
              (0, H.we)(
                o.GetName().length > 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                    ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                    : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                    ? "#SalePage_WatchForDrop_Hours_Developer"
                    : "#SalePage_WatchForDrop_Minutes_Developer",
                t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                o.GetName(),
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                (0, r.jsx)("a", {
                  href: c,
                  target: j.TS.IN_CLIENT ? "" : "_blank",
                  children: (0, H.we)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
      });
      var Q = a(95695),
        Z = a.n(Q),
        ee = a(96715),
        te = a(10886),
        ae = a(19654),
        se = a(3209),
        re = a(9154),
        ne = a(51272),
        ie = a(14256),
        oe = a.n(ie);
      function le(e) {
        const { steamid: t, closeModal: a } = e;
        return (0, r.jsxs)(re.o0, {
          strDescription: "",
          strTitle: (0, H.we)("#Button_Share"),
          onCancel: a,
          onOK: a,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, r.jsx)(de, { steamid: t }),
            (0, r.jsx)(ce, { steamid: t }),
          ],
        });
      }
      function de(e) {
        const { steamid: t } = e,
          a = (function (e) {
            const t = j.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return (0, r.jsxs)("div", {
          className: (0, g.A)(Z().FlexRowContainer, oe().share_controls_ctn),
          children: [
            (0, r.jsx)(F.he, {
              toolTipContent: (0, H.we)("#EventDisplay_Share_OnFaceBook"),
              children: (0, r.jsx)(ne.uU, {
                href: a.strFacebookUrl,
                className: oe().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: te.A,
                }),
              }),
            }),
            (0, r.jsx)(F.he, {
              toolTipContent: (0, H.we)("#EventDisplay_Share_OnTwitter"),
              children: (0, r.jsx)(ne.uU, {
                href: a.strTwitterUrl,
                className: oe().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: se.A,
                }),
              }),
            }),
            (0, r.jsx)(F.he, {
              toolTipContent: (0, H.we)("#EventDisplay_Share_OnReddit"),
              children: (0, r.jsx)(ne.uU, {
                href: a.strRedditUrl,
                className: oe().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: ae.A,
                }),
              }),
            }),
          ],
        });
      }
      function ce(e) {
        const { steamid: t } = e,
          a = d.createRef(),
          [s, n] = d.useState(""),
          i = d.createRef(),
          o = d.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    n((0, H.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, H.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          l = j.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)("div", {
              className: (0, g.A)(Z().FlexRowContainer, oe().linkField),
              onClick: o,
              children: [
                (0, r.jsx)("span", {
                  className: oe().LinkInputLabel,
                  children: (0, H.we)("#EventDisplay_Share_Link"),
                }),
                (0, r.jsx)("textarea", {
                  className: oe().LinkInput,
                  ref: a,
                  value: l,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, r.jsx)(F.he, {
                    toolTipContent: (0, H.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, r.jsx)("div", {
                      className: (0, g.A)(
                        Z().Button,
                        Z().Icon,
                        oe().LinkButton,
                      ),
                      children: (0, r.jsx)("img", {
                        className: oe().ClipboardIcon,
                        src: ee.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              ref: i,
              className: oe().ClipboardText,
              children: s,
            }),
          ],
        });
      }
      var pe = a(56011),
        he = a(738),
        me = a(29268),
        _e = a(23338),
        ue = a(75515);
      const Se = {
        list: [
          { appid: 444090, url: "https://steam.tv/paladins" },
          { appid: 386360, url: "https://steam.tv/smite" },
          { appid: 813820, url: "https://steam.tv/realmroyale" },
          {
            appid: 583950,
            url: "https://steam.tv/artifact",
            broadcasterAccountID: 912972716,
          },
          {
            appid: 570,
            url: "https://steam.tv/dota",
            broadcasterAccountID: 238221269,
          },
          {
            appid: 1025790,
            url: "https://steam.tv/steamawards",
            broadcasterAccountID: 934427243,
          },
          {
            appid: 730,
            url: "https://steam.tv/csgo",
            broadcasterAccountID: 927819071,
          },
        ],
      };
      function be(e) {
        return (function () {
          const e = (0, j.Qn)();
          return !(0, j.Y2)() && !e;
        })()
          ? (0, r.jsx)(xe, { ...e })
          : null;
      }
      let xe = class extends d.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
            (this.state = {
              bShowPopoutHeader: !1,
              bExpanded: !1,
              bLoadingPreference: !0,
              style: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              innerStyle: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              bStartMuted: !0,
            });
        }
        async componentDidMount() {
          await U.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !U.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: U.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? U.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : U.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              U.j
                .Get()
                .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
            window.setTimeout(() => {
              this.m_cancelSignal.token.reason ||
                this.setState({
                  style: { ...this.state.style, maxHeight: "100vh" },
                });
            }, 10);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = U.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = k.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, U.U7)(a, t ? E.Mc.U6 : E.Mc.B_, e.snr),
            t && T() && T().AddEvent(G.Xm.d),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: t ? "0vh" : "100vh",
                  },
                }),
              10,
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                U.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              U.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            U.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await U.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = U.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await U.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const s = U.j.Get().GetConcurrentStreams(this.props) > 1;
          let n = k.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            i = (0, r.jsx)(Ce, { ImgUrl: e.right_panel }, "right" + n),
            o = (0, r.jsx)(Ce, { ImgUrl: e.left_panel }, "left" + n);
          if (n < 11) {
            const t = O.l.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (n = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              n >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((i = (0, r.jsx)(y, { appid: n }, "mini" + e.accountid)),
              (a.bRightPanelArtworkOrEmpty = !1)),
            s && !t
              ? ((a.leftPanel = (0, r.jsx)(
                  we,
                  {
                    broadcastEmbedContext: this.props,
                    curStream: e,
                    onStreamSelect: this.onStreamSelect,
                    fnFilterStreams: this.props.fnFilterStreams,
                    bShowCapsuleArt: this.props.bShowCapsuleArt,
                  },
                  "selector" + n,
                )),
                (a.rightPanel = i))
              : t
                ? ((a.leftPanel = (0, r.jsx)("div", {})),
                  (a.rightPanel = (0, r.jsx)(Be, {
                    stream: e,
                    orientation: "rightside",
                  })),
                  (a.bRightPanelArtworkOrEmpty = !1))
                : ((a.leftPanel = o), (a.rightPanel = i)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), T() && T().AddEvent(G.Xm.ex));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = U.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === U.j.Get().GetChatVisibility();
            const {
              event: a,
              language: s,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = {
                ...e,
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  s || (0, P.sfN)(j.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  s || (0, P.sfN)(j.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(
                  s || (0, P.sfN)(j.TS.LANGUAGE),
                ),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let i = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              l = U.j.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, a;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
            return (0, r.jsx)(d.Fragment, {
              children: (0, r.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, r.jsxs)("div", {
                    className: (0, g.A)({
                      [J().bordered_container]: !0,
                      [J().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, g.A)(
                          J().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, r.jsx)(R.K, {}),
                          (0, r.jsx)("div", {
                            className: J().streamTitle,
                            children: o,
                          }),
                          (0, r.jsxs)("div", {
                            className: J().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, r.jsx)(F.he, {
                                  toolTipContent: (0, H.we)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, r.jsx)("div", {
                                    className: J().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${j.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, r.jsx)(F.he, {
                                toolTipContent: (0, H.we)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, r.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? J().bordered_corner_expanded
                                    : J().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(e.gamedata_subtitle) &&
                            (0, r.jsx)("div", {
                              className: J().bordered_subtitle,
                              children: e.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, r.jsxs)("div", {
                          className: (0, g.A)({
                            [J().container]: !0,
                            embeddable_ctn_trgt: !0,
                            multistream: l,
                            broadcast_right_panel_simple:
                              i.bRightPanelArtworkOrEmpty,
                            broadcast_chat_expanded: t,
                          }),
                          style: { ...this.state.innerStyle },
                          onTransitionEnd: this.OnShrinkTransitionEnd,
                          children: [
                            (0, r.jsx)("div", {
                              className: J().LeftPanelCtn,
                              children: i.leftPanel,
                            }),
                            (0, r.jsx)(ve, {
                              stream: e,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: n,
                              fnOnVideoEnd: c,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, r.jsx)("div", {
                              className: J().RightPanelCtn,
                              children: i.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, r.jsx)(je, {
                                stream: e,
                                bMultistream: l,
                                chatAnnouncementGivewayGID: i.rightPanel
                                  ? void 0
                                  : this.props.chat_announcement_giveaway,
                              }),
                          ],
                        }),
                    ],
                  }),
                  Boolean(
                    a && a.jsondata && a.jsondata.broadcast_item_drops_enabled,
                  ) && (0, r.jsx)(K, { event: a }),
                  (0, r.jsx)("div", { className: J().clear_div }),
                ],
              }),
            });
          }
          return (0, r.jsx)("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, s.Cg)([X.oI], xe.prototype, "ToggleBroadcastExpandShrink", null),
        (0, s.Cg)([X.oI], xe.prototype, "OnShrinkTransitionEnd", null),
        (0, s.Cg)([X.oI], xe.prototype, "onStreamSelect", null),
        (0, s.Cg)([X.oI], xe.prototype, "PlayNextNonVOD", null),
        (xe = (0, s.Cg)([o.PA], xe));
      class ve extends d.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = d.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = k.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, U.U7)(e, E.Mc.n6, this.props.stream.snr),
            T() && T().AddEvent(G.Xm.ok),
            this.setState({ bPopout: !1, bPreventPopup: !0 });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({ bPopout: !1 });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({ bPopout: !0 });
        }
        render() {
          return (0, r.jsx)("div", {
            className: J().wrapper,
            children: (0, r.jsx)(_e.j, {
              onEnter: this.OnEnter,
              onLeave: this.OnLeave,
              onIntersectionChange: (e) => {
                e.isIntersecting || this.OnLeave();
              },
              className: (0, g.A)({
                [J().video_placeholder]: !0,
                video_placeholder_trgt: !0,
                [J().WidePlayer]: this.props.bWidePlayer,
              }),
              ref: this.m_iVideoContainerRef,
              children: (0, r.jsxs)("div", {
                className: this.state.bPopout
                  ? J().broadcast_floating
                  : J().video_container,
                children: [
                  this.state.bPopout &&
                    (0, r.jsx)(fe, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, r.jsx)("div", {
                    className: J().BroadcastPlayerContainer,
                    children: (0, r.jsx)(p.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: D.nn.fe,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
                      fnOnVideoEnd: this.props.fnOnVideoEnd,
                      nAppIDVOD: this.props.stream.nAppIDVOD,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
      }
      function ge(e) {
        const { stream: t } = e,
          [a] = (0, l.q3)(() => [t.steamid]),
          s = k.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = Se.list.find(
            (e) =>
              e.appid == s &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (j.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            (0, r.jsx)("a", {
              href: e,
              children: (0, H.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            })
          );
        }
        {
          const e = j.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return (0, r.jsx)(F.he, {
            toolTipContent: (0, H.we)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, r.jsx)("a", {
              href: e,
              className: J().external_link,
              children: (0, r.jsx)(W.GrD, {}),
            }),
          });
        }
      }
      (0, s.Cg)([X.oI], ve.prototype, "CloseBroadcastPopup", null),
        (0, s.Cg)([X.oI], ve.prototype, "OnEnter", null),
        (0, s.Cg)([X.oI], ve.prototype, "OnLeave", null);
      let je = class extends d.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = k.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, U.U7)(
            t,
            "show" === U.j.Get().GetChatVisibility() ? E.Mc.kz : E.Mc.bW,
            this.props.stream.snr,
          ),
            U.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = k.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, U.U7)(e, E.Mc.Is, this.props.stream.snr);
        }
        render() {
          const e = "remove" != U.j.Get().GetChatVisibility(),
            t = "hide" === U.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            s = a;
          let n = Number.parseInt(
            "" +
              k.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, r.jsxs)("div", {
            className: (0, g.A)(J().viewer_bar, "viewer_bar"),
            children: [
              (0, r.jsxs)("div", {
                className: (0, g.A)(J().viewer_count, "viewer_count"),
                children: [(0, r.jsx)(W.y_e, {}), (0, q.Dq)(n)],
              }),
              (0, r.jsxs)("div", {
                className: (0, g.A)(J().viewer_links, "viewer_links"),
                children: [
                  Boolean(e && !t && this.props.bMultistream) &&
                    (0, r.jsx)("div", {
                      className: J().chat_link,
                      children: (0, r.jsx)("a", {
                        href: "#",
                        className: J().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, H.we)("#sale_three_section_show_streams"),
                      }),
                    }),
                  e &&
                    (0, r.jsxs)("div", {
                      className: J().chat_link,
                      children: [
                        (0, r.jsx)(W.ROZ, {}),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: J().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, H.we)(
                            t
                              ? "#sale_three_section_show_chat"
                              : "#sale_three_section_hide_chat",
                          ),
                        }),
                      ],
                    }),
                  s &&
                    (0, r.jsxs)("div", {
                      className: J().chat_link,
                      children: [
                        (0, r.jsx)(W.SYj, {}),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: J().ChatToggle,
                          onClick: (e) =>
                            (0, he.pg)(
                              (0, r.jsx)(le, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, pe.uX)(e),
                            ),
                          children: (0, H.we)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, r.jsx)(F.he, {
                    toolTipContent: (0, H.we)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, r.jsx)("a", {
                      href:
                        j.TS.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: j.TS.IN_CLIENT ? void 0 : "_blank",
                      className: J().settings_link,
                      children: (0, r.jsx)(W.wB_, {}),
                    }),
                  }),
                  a && (0, r.jsx)(ge, { ...this.props }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, r.jsx)(me.V, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, s.Cg)([X.oI], je.prototype, "OnToggleChat", null),
        (0, s.Cg)([X.oI], je.prototype, "onWatchBroadcastPage", null),
        (je = (0, s.Cg)([o.PA], je));
      class Ce extends d.Component {
        render() {
          let e = this.props.ImgUrl;
          return (0, r.jsxs)("div", {
            className: J().SidePanelBackground,
            children: [
              e &&
                (0, r.jsx)("img", {
                  className: J().side_panels,
                  src: this.props.ImgUrl,
                }),
              !e && (0, r.jsx)("div", { className: J().side_panels }),
            ],
          });
        }
      }
      const fe = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = k.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != k.fO ? a : 0;
        const s = (0, N.$5)(a),
          { data: n } = (0, w.J$)(s);
        return (0, r.jsxs)("div", {
          className: [J().PopOutVideoTitleBar, J().NoSeslect].join(" "),
          children: [
            Boolean(n)
              ? (0, r.jsx)(b.u, {
                  id: s,
                  className: J().PopOutVideoTitleText,
                  children: (0, H.we)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, r.jsx)("div", {
                  className: J().PopOutVideoTitleText,
                  children: (0, H.we)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, r.jsx)(F.he, {
              toolTipContent: (0, H.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              children: (0, r.jsx)("button", {
                className: J().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
                children: (0, r.jsx)(W.X, {}),
              }),
            }),
          ],
        });
      });
      function Ne(e, t) {
        var a;
        const s = k.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          r = L.A.Get().GetApp(s);
        return e &&
          (null === (a = null == r ? void 0 : r.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(J().strStreamIconCapsuleArtHeight)
          : parseInt(J().strStreamIconScreenshotArtHeight);
      }
      function we(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: s,
            bShowCapsuleArt: n,
            broadcastEmbedContext: i,
          } = e,
          o = (0, d.useRef)(void 0),
          l = (0, d.useMemo)(() => {
            const e = U.j
              .Get()
              .GetStreams(i)
              .filter((e) => !s || s(e));
            return (0, U.MU)(e), e;
          }, [i, s]);
        return (
          (0, d.useEffect)(() => {
            if (o && o.current) {
              const e = l
                .map((e) => k.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              L.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of l) {
                      if (t.accountid == a.accountid) break;
                      e += Ne(n, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [l, n, t.accountid, o]),
          (0, r.jsx)("div", {
            ref: o,
            className: (0, g.A)({
              [J().side_panels]: !0,
              side_panels: !0,
              [J().multistream]: !0,
              [J().scrollingstreams]: l.length > 3,
            }),
            children: (0, r.jsx)("div", {
              className: J().MultiStreamCtn,
              children: l.map((e) => {
                var s;
                return (0, r.jsx)(
                  Ie,
                  {
                    stream: e,
                    bSelected: t.accountid == e.accountid,
                    onStreamSelect: a,
                    bShowCapsuleArt: n,
                  },
                  null !== (s = e.accountid) && void 0 !== s ? s : e.steamid,
                );
              }),
            }),
          })
        );
      }
      function Ie(e) {
        const {
          onStreamSelect: t,
          bSelected: a,
          stream: s,
          bShowCapsuleArt: n,
        } = e;
        let i = (0, l.q3)(
          () => k.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
        );
        i = i != k.fO ? i : 0;
        const o = (0, N.$5)(i),
          { data: d } = (0, w.J$)(o),
          { data: c } = (0, w.lv)(o);
        if (!(0, U.fn)(s)) return null;
        const p = n && c && (0, A.b0)(c, "header"),
          h = Number.parseInt("" + s.viewer_count),
          m = !Number.isNaN(h),
          _ = !!s.nAppIDVOD && (null == d ? void 0 : d.name);
        return (0, r.jsxs)("div", {
          className: (0, g.A)({
            [J().stream_icon_and_viewer_container]: !0,
            [J().stream_featured]:
              s.current_selection_priority == ue.mY.k_eFeatured,
            [J().display_capsule_art]: Boolean(p),
          }),
          children: [
            (0, r.jsx)(b.j, {
              id: o,
              hoverClassName: J().StreamCapsule,
              children: (0, r.jsx)(V.K, {
                className: (0, g.A)(
                  J().stream_icon_container,
                  a && J().stream_selected,
                ),
                onClick: () => t && t(s),
                rootMargin: "100px 0px 100px 0px",
                children: (0, r.jsx)(Ae, {
                  strThumbnail: s.thumbnail_http_address,
                  bSelected: a,
                  strCapsuleArtURL: p,
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, g.A)(J().viewer_count, !m && J().vod_title),
              children: m
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(W.y_e, {}),
                      (0, r.jsx)("div", {
                        className: J().ViewerNum,
                        children: (0, q.Dq)(h),
                      }),
                    ],
                  })
                : _,
            }),
          ],
        });
      }
      function Ae(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: s } = e,
          n = s ? J().stream_icon_selected : J().stream_icon;
        if (t) {
          const e = [t];
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("img", {
                className: (0, g.A)(n, J().stream_icon_hide_on_hover),
                src: t,
              }),
              (0, r.jsx)(M.o, {
                className: (0, g.A)(n, J().stream_icon_show_on_hover),
                srcs: e,
              }),
            ],
          });
        }
        return (0, r.jsx)("img", { className: n, src: a });
      }
      function Be(e) {
        const { stream: t, orientation: a } = e,
          s = "below" == a,
          [n, i] = (0, l.q3)(() => {
            var e;
            return [
              k.es.GetBroadcast(t.steamid),
              null === (e = k.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, l.q3)(() => t.steamid);
        return n
          ? (0, r.jsx)("div", {
              className: (0, g.A)({
                [J().chat_below_container]: s,
                [J().chat_rightside_container]: !s,
                [J().store_chat_ctn]: !0,
              }),
              children: (0, r.jsx)("div", {
                className: J().ChatContainer,
                children: (0, r.jsx)(c.I, {
                  emoticonStore: U.MX,
                  watchLocation: D.nn.fe,
                  steamID: o,
                  broadcastID: i,
                }),
              }),
            })
          : null;
      }
    },
    59913: (e, t, a) => {
      "use strict";
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      a.d(t, { A: () => s });
    },
  },
]);
