/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [99517],
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
    45476: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastEmbeddablePopoutHeader: () => ve,
          default: () => Ne,
        });
      var a = s(34629),
        r = s(7850),
        n = s(41735),
        i = s.n(n),
        o = s(75844),
        c = s(65946),
        l = s(90626),
        d = s(39606),
        p = s(67397),
        m = s(55963),
        h = s(30570),
        u = s(55263),
        _ = s(76532),
        j = s(20433),
        N = s(85862),
        x = s(60014),
        S = s(22797),
        b = s(52038),
        g = s(78327),
        M = s(43087),
        v = s.n(M),
        C = s(14987),
        w = s(39777),
        I = s(71420),
        D = s(42834),
        y = s(5309);
      const T = (0, o.PA)((e) => {
        const { appid: t } = e,
          s = (0, x.n9)(),
          a = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          n = (0, C.$5)(t),
          { data: i } = (0, w.J$)(n),
          { data: o } = (0, w.lv)(n),
          { data: c } = (0, w.by)(n),
          [d, p] = (0, u.t7)(t, a.current);
        let M = (0, b.A)(
            v().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          T = v().StoreSaleWidgetImage_mini,
          L = v().StoreSaleImage_mini;
        if (null == i)
          return (0, r.jsx)("div", {
            className: M,
            children: (0, r.jsx)(S.t, { size: "medium" }),
          });
        if (null == i || !i.name)
          return (0, r.jsx)("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const f = i.type != h.uE.gQ,
          E = (0, m.wJ)((0, I._)(i), s);
        return (0, r.jsxs)("div", {
          className: M,
          children: [
            (0, r.jsx)("a", {
              href: E,
              target: g.TS.IN_CLIENT ? void 0 : "_blank",
              children: (0, r.jsx)(j.j, {
                id: n,
                children: (0, r.jsx)("div", {
                  className: T,
                  children:
                    o &&
                    (0, r.jsx)("img", {
                      className: L,
                      src: (0, D.b0)(o, "small_capsule"),
                      alt: i.name,
                    }),
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: _.StoreSaleBroadcastWidgetRight,
              children: [
                (0, r.jsx)("a", {
                  href: E,
                  target: g.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, r.jsx)(j.j, {
                    id: n,
                    children: (0, r.jsx)("div", {
                      className: (0, b.A)(
                        _.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: i.name,
                    }),
                  }),
                }),
                c &&
                  (0, r.jsx)("div", {
                    className: _.StoreSaleWidgetRelease,
                    children: (0, y.CC)(c),
                  }),
                Boolean(f) && (0, r.jsx)(N.w, { id: n, bShowDemoButton: !0 }),
              ],
            }),
          ],
        });
      });
      var L = s(22837);
      function f() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var E = s(55815),
        A = s(45285),
        B = s(39302),
        P = s(60727),
        k = s(61556),
        G = s(34010),
        O = s(16021),
        U = s(89938),
        z = s(26296),
        R = s(43474),
        W = s(12155),
        V = s(32754),
        H = s(61859),
        Q = s(82227),
        F = s(73745),
        Y = s(17720),
        Z = s(67165),
        J = s(53120),
        X = s.n(J);
      const K = (0, o.PA)((e) => {
        const { event: t } = e,
          s = t.clanSteamID.GetAccountID(),
          a = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, l.useRef)(null),
          [o, c] = (0, l.useState)(
            t ? Z.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = i().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = Y.b.InitFromClanID(s),
                  a = await Z.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || c(a);
              })(),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [s]),
          a || !o || !o.BIsLoaded())
        )
          return null;
        const d =
          g.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return (0, r.jsx)("div", {
          className: X().item_drop_ctn,
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
                  href: d,
                  target: g.TS.IN_CLIENT ? "" : "_blank",
                  children: (0, H.we)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
      });
      var q = s(95695),
        $ = s.n(q),
        ee = s(96715),
        te = s(10886),
        se = s(19654),
        ae = s(3209),
        re = s(9154),
        ne = s(51272),
        ie = s(14256),
        oe = s.n(ie);
      function ce(e) {
        const { steamid: t, closeModal: s } = e;
        return (0, r.jsxs)(re.o0, {
          strDescription: "",
          strTitle: (0, H.we)("#Button_Share"),
          onCancel: s,
          onOK: s,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, r.jsx)(le, { steamid: t }),
            (0, r.jsx)(de, { steamid: t }),
          ],
        });
      }
      function le(e) {
        const { steamid: t } = e,
          s = (function (e) {
            const t = g.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return (0, r.jsxs)("div", {
          className: (0, b.A)($().FlexRowContainer, oe().share_controls_ctn),
          children: [
            (0, r.jsx)(V.he, {
              toolTipContent: (0, H.we)("#EventDisplay_Share_OnFaceBook"),
              children: (0, r.jsx)(ne.uU, {
                href: s.strFacebookUrl,
                className: oe().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, b.A)($().Button),
                  src: te.A,
                }),
              }),
            }),
            (0, r.jsx)(V.he, {
              toolTipContent: (0, H.we)("#EventDisplay_Share_OnTwitter"),
              children: (0, r.jsx)(ne.uU, {
                href: s.strTwitterUrl,
                className: oe().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, b.A)($().Button),
                  src: ae.A,
                }),
              }),
            }),
            (0, r.jsx)(V.he, {
              toolTipContent: (0, H.we)("#EventDisplay_Share_OnReddit"),
              children: (0, r.jsx)(ne.uU, {
                href: s.strRedditUrl,
                className: oe().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, b.A)($().Button),
                  src: se.A,
                }),
              }),
            }),
          ],
        });
      }
      function de(e) {
        const { steamid: t } = e,
          s = l.createRef(),
          [a, n] = l.useState(""),
          i = l.createRef(),
          o = l.useCallback(
            (e) => {
              s.current &&
                s.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(s.current.value)
                  .then((e) => {
                    n((0, H.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, H.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [s],
          ),
          c = g.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)("div", {
              className: (0, b.A)($().FlexRowContainer, oe().linkField),
              onClick: o,
              children: [
                (0, r.jsx)("span", {
                  className: oe().LinkInputLabel,
                  children: (0, H.we)("#EventDisplay_Share_Link"),
                }),
                (0, r.jsx)("textarea", {
                  className: oe().LinkInput,
                  ref: s,
                  value: c,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, r.jsx)(V.he, {
                    toolTipContent: (0, H.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, r.jsx)("div", {
                      className: (0, b.A)(
                        $().Button,
                        $().Icon,
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
              children: a,
            }),
          ],
        });
      }
      var pe = s(56011),
        me = s(738),
        he = s(29268),
        ue = s(23338),
        _e = s(75515);
      const je = {
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
      function Ne(e) {
        return (function () {
          const e = (0, g.Qn)();
          return !(0, g.Y2)() && !e;
        })()
          ? (0, r.jsx)(xe, { ...e })
          : null;
      }
      let xe = class extends l.Component {
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
          await G.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !G.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: G.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? G.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : G.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              G.j
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
          let e = G.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            s = k.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, G.U7)(s, t ? A.Mc.U6 : A.Mc.B_, e.snr),
            t && f() && f().AddEvent(B.Xm.d),
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
                G.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              G.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            G.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await G.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = G.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await G.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let s = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return s;
          const a = G.j.Get().GetConcurrentStreams(this.props) > 1;
          let n = k.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            i = (0, r.jsx)(Me, { ImgUrl: e.right_panel }, "right" + n),
            o = (0, r.jsx)(Me, { ImgUrl: e.left_panel }, "left" + n);
          if (n < 11) {
            const t = P.l.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((i = (0, r.jsx)(T, { appid: n }, "mini" + e.accountid)),
              (s.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((s.leftPanel = (0, r.jsx)(
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
                (s.rightPanel = i))
              : t
                ? ((s.leftPanel = (0, r.jsx)("div", {})),
                  (s.rightPanel = (0, r.jsx)(ye, {
                    stream: e,
                    orientation: "rightside",
                  })),
                  (s.bRightPanelArtworkOrEmpty = !1))
                : ((s.leftPanel = o), (s.rightPanel = i)),
            s
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), f() && f().AddEvent(B.Xm.ex));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = G.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === G.j.Get().GetChatVisibility();
            const {
              event: s,
              language: a,
              fnRenderBroadcastContext: n,
            } = this.props;
            s &&
              (e = {
                ...e,
                left_panel: s.GetImageURL(
                  "broadcast_left",
                  a || (0, L.sfN)(g.TS.LANGUAGE),
                ),
                right_panel: s.GetImageURL(
                  "broadcast_right",
                  a || (0, L.sfN)(g.TS.LANGUAGE),
                ),
                store_title: s.GetBroadcastTitle(
                  a || (0, L.sfN)(g.TS.LANGUAGE),
                ),
                broadcast_chat_visibility: s.GetBroadcastChatVisibility(),
              });
            let i = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              c = G.j.Get().GetConcurrentStreams(this.props) > 1;
            const d = () => {
              var t, s;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (s = (t = this.props).fnOnVideoEnd) ||
                  void 0 === s ||
                  s.call(t);
            };
            return (0, r.jsx)(l.Fragment, {
              children: (0, r.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, r.jsxs)("div", {
                    className: (0, b.A)({
                      [X().bordered_container]: !0,
                      [X().Event]: Boolean(s),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, b.A)(
                          X().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, r.jsx)(U.K, {}),
                          (0, r.jsx)("div", {
                            className: X().streamTitle,
                            children: o,
                          }),
                          (0, r.jsxs)("div", {
                            className: X().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, r.jsx)(V.he, {
                                  toolTipContent: (0, H.we)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, r.jsx)("div", {
                                    className: X().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${g.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, r.jsx)(V.he, {
                                toolTipContent: (0, H.we)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, r.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? X().bordered_corner_expanded
                                    : X().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(e.gamedata_subtitle) &&
                            (0, r.jsx)("div", {
                              className: X().bordered_subtitle,
                              children: e.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, r.jsxs)("div", {
                          className: (0, b.A)({
                            [X().container]: !0,
                            embeddable_ctn_trgt: !0,
                            multistream: c,
                            broadcast_right_panel_simple:
                              i.bRightPanelArtworkOrEmpty,
                            broadcast_chat_expanded: t,
                          }),
                          style: { ...this.state.innerStyle },
                          onTransitionEnd: this.OnShrinkTransitionEnd,
                          children: [
                            (0, r.jsx)("div", {
                              className: X().LeftPanelCtn,
                              children: i.leftPanel,
                            }),
                            (0, r.jsx)(Se, {
                              stream: e,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: n,
                              fnOnVideoEnd: d,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, r.jsx)("div", {
                              className: X().RightPanelCtn,
                              children: i.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, r.jsx)(ge, {
                                stream: e,
                                bMultistream: c,
                                chatAnnouncementGivewayGID: i.rightPanel
                                  ? void 0
                                  : this.props.chat_announcement_giveaway,
                              }),
                          ],
                        }),
                    ],
                  }),
                  Boolean(
                    s && s.jsondata && s.jsondata.broadcast_item_drops_enabled,
                  ) && (0, r.jsx)(K, { event: s }),
                  (0, r.jsx)("div", { className: X().clear_div }),
                ],
              }),
            });
          }
          return (0, r.jsx)("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, a.Cg)([F.oI], xe.prototype, "ToggleBroadcastExpandShrink", null),
        (0, a.Cg)([F.oI], xe.prototype, "OnShrinkTransitionEnd", null),
        (0, a.Cg)([F.oI], xe.prototype, "onStreamSelect", null),
        (0, a.Cg)([F.oI], xe.prototype, "PlayNextNonVOD", null),
        (xe = (0, a.Cg)([o.PA], xe));
      class Se extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = k.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, G.U7)(e, A.Mc.n6, this.props.stream.snr),
            f() && f().AddEvent(B.Xm.ok),
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
            className: X().wrapper,
            children: (0, r.jsx)(ue.j, {
              onEnter: this.OnEnter,
              onLeave: this.OnLeave,
              onIntersectionChange: (e) => {
                e.isIntersecting || this.OnLeave();
              },
              className: (0, b.A)({
                [X().video_placeholder]: !0,
                video_placeholder_trgt: !0,
                [X().WidePlayer]: this.props.bWidePlayer,
              }),
              ref: this.m_iVideoContainerRef,
              children: (0, r.jsxs)("div", {
                className: this.state.bPopout
                  ? X().broadcast_floating
                  : X().video_container,
                children: [
                  this.state.bPopout &&
                    (0, r.jsx)(ve, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, r.jsx)("div", {
                    className: X().BroadcastPlayerContainer,
                    children: (0, r.jsx)(p.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: E.nn.fe,
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
      function be(e) {
        const { stream: t } = e,
          [s] = (0, c.q3)(() => [t.steamid]),
          a = k.es.GetOrCreateBroadcastInfo(s).m_nAppID,
          n = je.list.find(
            (e) =>
              e.appid == a &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (g.TS.IN_CLIENT ||
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
          const e = g.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + s;
          return (0, r.jsx)(V.he, {
            toolTipContent: (0, H.we)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, r.jsx)("a", {
              href: e,
              className: X().external_link,
              children: (0, r.jsx)(W.GrD, {}),
            }),
          });
        }
      }
      (0, a.Cg)([F.oI], Se.prototype, "CloseBroadcastPopup", null),
        (0, a.Cg)([F.oI], Se.prototype, "OnEnter", null),
        (0, a.Cg)([F.oI], Se.prototype, "OnLeave", null);
      let ge = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = k.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, G.U7)(
            t,
            "show" === G.j.Get().GetChatVisibility() ? A.Mc.kz : A.Mc.bW,
            this.props.stream.snr,
          ),
            G.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = k.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, G.U7)(e, A.Mc.Is, this.props.stream.snr);
        }
        render() {
          const e = "remove" != G.j.Get().GetChatVisibility(),
            t = "hide" === G.j.Get().GetChatVisibility(),
            s = !this.props.stream.nAppIDVOD,
            a = s;
          let n = Number.parseInt(
            "" +
              k.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, r.jsxs)("div", {
            className: (0, b.A)(X().viewer_bar, "viewer_bar"),
            children: [
              (0, r.jsxs)("div", {
                className: (0, b.A)(X().viewer_count, "viewer_count"),
                children: [(0, r.jsx)(W.y_e, {}), (0, Q.Dq)(n)],
              }),
              (0, r.jsxs)("div", {
                className: (0, b.A)(X().viewer_links, "viewer_links"),
                children: [
                  Boolean(e && !t && this.props.bMultistream) &&
                    (0, r.jsx)("div", {
                      className: X().chat_link,
                      children: (0, r.jsx)("a", {
                        href: "#",
                        className: X().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, H.we)("#sale_three_section_show_streams"),
                      }),
                    }),
                  e &&
                    (0, r.jsxs)("div", {
                      className: X().chat_link,
                      children: [
                        (0, r.jsx)(W.ROZ, {}),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: X().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, H.we)(
                            t
                              ? "#sale_three_section_show_chat"
                              : "#sale_three_section_hide_chat",
                          ),
                        }),
                      ],
                    }),
                  a &&
                    (0, r.jsxs)("div", {
                      className: X().chat_link,
                      children: [
                        (0, r.jsx)(W.SYj, {}),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: X().ChatToggle,
                          onClick: (e) =>
                            (0, me.pg)(
                              (0, r.jsx)(ce, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, pe.uX)(e),
                            ),
                          children: (0, H.we)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, r.jsx)(V.he, {
                    toolTipContent: (0, H.we)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, r.jsx)("a", {
                      href:
                        g.TS.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: g.TS.IN_CLIENT ? void 0 : "_blank",
                      className: X().settings_link,
                      children: (0, r.jsx)(W.wB_, {}),
                    }),
                  }),
                  s && (0, r.jsx)(be, { ...this.props }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, r.jsx)(he.V, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, a.Cg)([F.oI], ge.prototype, "OnToggleChat", null),
        (0, a.Cg)([F.oI], ge.prototype, "onWatchBroadcastPage", null),
        (ge = (0, a.Cg)([o.PA], ge));
      class Me extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return (0, r.jsxs)("div", {
            className: X().SidePanelBackground,
            children: [
              e &&
                (0, r.jsx)("img", {
                  className: X().side_panels,
                  src: this.props.ImgUrl,
                }),
              !e && (0, r.jsx)("div", { className: X().side_panels }),
            ],
          });
        }
      }
      const ve = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let s = k.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        s = s != k.fO ? s : 0;
        const a = (0, C.$5)(s),
          { data: n } = (0, w.J$)(a);
        return (0, r.jsxs)("div", {
          className: [X().PopOutVideoTitleBar, X().NoSeslect].join(" "),
          children: [
            Boolean(n)
              ? (0, r.jsx)(j.u, {
                  id: a,
                  className: X().PopOutVideoTitleText,
                  children: (0, H.we)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, r.jsx)("div", {
                  className: X().PopOutVideoTitleText,
                  children: (0, H.we)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, r.jsx)(V.he, {
              toolTipContent: (0, H.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              children: (0, r.jsx)("button", {
                className: X().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
                children: (0, r.jsx)(W.X, {}),
              }),
            }),
          ],
        });
      });
      function Ce(e, t) {
        var s;
        const a = k.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          r = O.A.Get().GetApp(a);
        return e &&
          (null === (s = null == r ? void 0 : r.GetAssets()) || void 0 === s
            ? void 0
            : s.GetHeaderURL())
          ? parseInt(X().strStreamIconCapsuleArtHeight)
          : parseInt(X().strStreamIconScreenshotArtHeight);
      }
      function we(e) {
        const {
            curStream: t,
            onStreamSelect: s,
            fnFilterStreams: a,
            bShowCapsuleArt: n,
            broadcastEmbedContext: i,
          } = e,
          o = (0, l.useRef)(void 0),
          c = (0, l.useMemo)(() => {
            const e = G.j
              .Get()
              .GetStreams(i)
              .filter((e) => !a || a(e));
            return (0, G.MU)(e), e;
          }, [i, a]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = c
                .map((e) => k.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              O.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const s of c) {
                      if (t.accountid == s.accountid) break;
                      e += Ce(n, s);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [c, n, t.accountid, o]),
          (0, r.jsx)("div", {
            ref: o,
            className: (0, b.A)({
              [X().side_panels]: !0,
              side_panels: !0,
              [X().multistream]: !0,
              [X().scrollingstreams]: c.length > 3,
            }),
            children: (0, r.jsx)("div", {
              className: X().MultiStreamCtn,
              children: c.map((e) => {
                var a;
                return (0, r.jsx)(
                  Ie,
                  {
                    stream: e,
                    bSelected: t.accountid == e.accountid,
                    onStreamSelect: s,
                    bShowCapsuleArt: n,
                  },
                  null !== (a = e.accountid) && void 0 !== a ? a : e.steamid,
                );
              }),
            }),
          })
        );
      }
      function Ie(e) {
        const {
          onStreamSelect: t,
          bSelected: s,
          stream: a,
          bShowCapsuleArt: n,
        } = e;
        let i = (0, c.q3)(
          () => k.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID,
        );
        i = i != k.fO ? i : 0;
        const o = (0, C.$5)(i),
          { data: l } = (0, w.J$)(o),
          { data: d } = (0, w.lv)(o);
        if (!(0, G.fn)(a)) return null;
        const p = n && d && (0, D.b0)(d, "header"),
          m = Number.parseInt("" + a.viewer_count),
          h = !Number.isNaN(m),
          u = !!a.nAppIDVOD && (null == l ? void 0 : l.name);
        return (0, r.jsxs)("div", {
          className: (0, b.A)({
            [X().stream_icon_and_viewer_container]: !0,
            [X().stream_featured]:
              a.current_selection_priority == _e.mY.k_eFeatured,
            [X().display_capsule_art]: Boolean(p),
          }),
          children: [
            (0, r.jsx)(j.j, {
              id: o,
              hoverClassName: X().StreamCapsule,
              children: (0, r.jsx)(R.K, {
                className: (0, b.A)(
                  X().stream_icon_container,
                  s && X().stream_selected,
                ),
                onClick: () => t && t(a),
                rootMargin: "100px 0px 100px 0px",
                children: (0, r.jsx)(De, {
                  strThumbnail: a.thumbnail_http_address,
                  bSelected: s,
                  strCapsuleArtURL: p,
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, b.A)(X().viewer_count, !h && X().vod_title),
              children: h
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(W.y_e, {}),
                      (0, r.jsx)("div", {
                        className: X().ViewerNum,
                        children: (0, Q.Dq)(m),
                      }),
                    ],
                  })
                : u,
            }),
          ],
        });
      }
      function De(e) {
        const { strCapsuleArtURL: t, strThumbnail: s, bSelected: a } = e,
          n = a ? X().stream_icon_selected : X().stream_icon;
        if (t) {
          const e = [t];
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("img", {
                className: (0, b.A)(n, X().stream_icon_hide_on_hover),
                src: t,
              }),
              (0, r.jsx)(z.o, {
                className: (0, b.A)(n, X().stream_icon_show_on_hover),
                srcs: e,
              }),
            ],
          });
        }
        return (0, r.jsx)("img", { className: n, src: s });
      }
      function ye(e) {
        const { stream: t, orientation: s } = e,
          a = "below" == s,
          [n, i] = (0, c.q3)(() => {
            var e;
            return [
              k.es.GetBroadcast(t.steamid),
              null === (e = k.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, c.q3)(() => t.steamid);
        return n
          ? (0, r.jsx)("div", {
              className: (0, b.A)({
                [X().chat_below_container]: a,
                [X().chat_rightside_container]: !a,
                [X().store_chat_ctn]: !0,
              }),
              children: (0, r.jsx)("div", {
                className: X().ChatContainer,
                children: (0, r.jsx)(d.I, {
                  emoticonStore: G.MX,
                  watchLocation: E.nn.fe,
                  steamID: o,
                  broadcastID: i,
                }),
              }),
            })
          : null;
      }
    },
    96715: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    19654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        s.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    59913: (e, t, s) => {
      "use strict";
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      s.d(t, { A: () => a });
    },
  },
]);
