/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9517],
    {
      54089: (D, j, a) => {
        "use strict";
        a.r(j),
          a.d(j, {
            BroadcastEmbeddablePopoutHeader: () => et,
            default: () => Wt,
          });
        var t = a(7850),
          U = a(41735),
          J = a.n(U),
          L = a(75844),
          O = a(65946),
          S = a(90626),
          at = a(9398),
          nt = a(23240),
          rt = a(83482),
          ot = a(44420),
          it = a(84676),
          G = a(18654),
          lt = a(13004),
          z = a(95414),
          dt = a(72865),
          ct = a(85599),
          p = a(36707),
          g = a(3166),
          mt = a(43087),
          V = a.n(mt),
          W = a(29522),
          B = a(40358),
          ht = a(47875),
          Y = a(21721),
          pt = a(3348);
        const ut = (0, L.PA)((s) => {
          const { appid: e } = s,
            n = (0, dt.n9)(),
            l = (0, S.useRef)({ include_assets: !0, include_release: !0 }),
            o = (0, W.$5)(e),
            { data: i } = (0, B.J$)(o),
            { data: c } = (0, B.lv)(o),
            { data: m } = (0, B.by)(o),
            [h, A] = (0, it.t7)(e, l.current);
          let b = (0, p.A)(
              V().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            w = V().StoreSaleWidgetImage_mini,
            Q = V().StoreSaleImage_mini;
          if (i == null)
            return (0, t.jsx)("div", {
              className: b,
              children: (0, t.jsx)(ct.t, { size: "medium" }),
            });
          if (i == null || !i.name)
            return (0, t.jsx)("div", {
              className: G.StoreSaleWidgetEmptyContainer,
            });
          const Zt = i.type != ot.uE.gQ,
            st = (0, rt.wJ)((0, ht._)(i), n);
          return (0, t.jsxs)("div", {
            className: b,
            children: [
              (0, t.jsx)("a", {
                href: st,
                target: g.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, t.jsx)(z.j, {
                  id: o,
                  children: (0, t.jsx)("div", {
                    className: w,
                    children:
                      c &&
                      (0, t.jsx)("img", {
                        className: Q,
                        src: (0, Y.b0)(c, "small_capsule"),
                        alt: i.name,
                      }),
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: G.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, t.jsx)("a", {
                    href: st,
                    target: g.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, t.jsx)(z.j, {
                      id: o,
                      children: (0, t.jsx)("div", {
                        className: (0, p.A)(
                          G.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: i.name,
                      }),
                    }),
                  }),
                  m &&
                    (0, t.jsx)("div", {
                      className: G.StoreSaleWidgetRelease,
                      children: (0, pt.CC)(m),
                    }),
                  !!Zt && (0, t.jsx)(lt.w, { id: o, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var H = a(99412);
        function y() {
          let s = window.GetUsabilityTracker;
          if (s) return s();
        }
        var Z = a(90711),
          E = a(61639),
          _ = a(83963),
          At = a(18614),
          v = a(74498),
          d = a(25317),
          X = a(10142),
          St = a(98932),
          gt = a(39239),
          vt = a(64377),
          f = a(36118),
          x = a(71421),
          u = a(18210),
          K = a(19730),
          C = a(54963),
          bt = a(76559),
          $ = a(60480),
          jt = a(53120),
          r = a.n(jt);
        const Nt = (0, L.PA)((s) => {
          const { event: e } = s,
            n = e.clanSteamID.GetAccountID(),
            l = !e || !e.jsondata || !e.jsondata.broadcast_item_drops_enabled,
            o = (0, S.useRef)(null),
            [i, c] = (0, S.useState)(
              e ? $.pF.GetCreatorHome(e.clanSteamID) : null,
            );
          if (
            ((0, S.useEffect)(() => {
              const h = J().CancelToken.source();
              return (
                (o.current = h.cancel),
                (async () => {
                  const b = bt.b.InitFromClanID(n),
                    w = await $.pF.LoadCreatorHome(b, !1, h);
                  h.token.reason || c(w);
                })(),
                () => {
                  o.current && o.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [n]),
            l || !i || !i.BIsLoaded())
          )
            return null;
          const m =
            g.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            e.jsondata.broadcast_item_drops_details_event_gid;
          return (0, t.jsx)("div", {
            className: r().item_drop_ctn,
            children: (0, t.jsxs)("div", {
              children: [
                (0, u.we)(
                  i.GetName().length > 0
                    ? e.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : e.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  e.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? e.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : e.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  i.GetName(),
                ),
                !!e.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, t.jsx)("a", {
                    href: m,
                    target: g.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, u.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var It = a(95695),
          M = a.n(It),
          xt = a(96715),
          Ct = a(10886),
          Dt = a(19654),
          ft = a(3209),
          Mt = a(2801),
          k = a(53107),
          Tt = a(14256),
          I = a.n(Tt);
        function Bt(s) {
          const { steamid: e, closeModal: n } = s;
          return (0, t.jsxs)(Mt.o0, {
            strDescription: "",
            strTitle: (0, u.we)("#Button_Share"),
            onCancel: n,
            onOK: n,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, t.jsx)(yt, { steamid: e }),
              (0, t.jsx)(Et, { steamid: e }),
            ],
          });
        }
        function yt(s) {
          const { steamid: e } = s,
            n = wt(e);
          return (0, t.jsxs)("div", {
            className: (0, p.A)(M().FlexRowContainer, I().share_controls_ctn),
            children: [
              (0, t.jsx)(x.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, t.jsx)(k.uU, {
                  href: n.strFacebookUrl,
                  className: I().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, p.A)(M().Button),
                    src: Ct.A,
                  }),
                }),
              }),
              (0, t.jsx)(x.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, t.jsx)(k.uU, {
                  href: n.strTwitterUrl,
                  className: I().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, p.A)(M().Button),
                    src: ft.A,
                  }),
                }),
              }),
              (0, t.jsx)(x.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnReddit"),
                children: (0, t.jsx)(k.uU, {
                  href: n.strRedditUrl,
                  className: I().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, p.A)(M().Button),
                    src: Dt.A,
                  }),
                }),
              }),
            ],
          });
        }
        function Et(s) {
          const { steamid: e } = s,
            n = S.createRef(),
            [l, o] = S.useState(""),
            i = S.createRef(),
            c = S.useCallback(
              (h) => {
                n.current &&
                  n.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(n.current.value)
                    .then((A) => {
                      o((0, u.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((A) => {
                      o(
                        (0, u.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", A);
                    });
              },
              [n],
            ),
            m = g.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)("div", {
                className: (0, p.A)(M().FlexRowContainer, I().linkField),
                onClick: c,
                children: [
                  (0, t.jsx)("span", {
                    className: I().LinkInputLabel,
                    children: (0, u.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, t.jsx)("textarea", {
                    className: I().LinkInput,
                    ref: n,
                    value: m,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, t.jsx)(x.he, {
                      toolTipContent: (0, u.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, t.jsx)("div", {
                        className: (0, p.A)(
                          M().Button,
                          M().Icon,
                          I().LinkButton,
                        ),
                        children: (0, t.jsx)("img", {
                          className: I().ClipboardIcon,
                          src: xt.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                ref: i,
                className: I().ClipboardText,
                children: l,
              }),
            ],
          });
        }
        function wt(s) {
          const e = g.TS.COMMUNITY_BASE_URL + "broadcast/share/" + s;
          return {
            strFacebookUrl: e + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: e + "?site=twitter",
            strRedditUrl: e + "?site=reddit",
          };
        }
        var Lt = a(82734),
          Pt = a(88003),
          Ut = a(29125),
          Ot = a(37589),
          Gt = a(34032),
          q = Object.defineProperty,
          zt = Object.getOwnPropertyDescriptor,
          Rt = (s, e, n) =>
            e in s
              ? q(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (s[e] = n),
          N = (s, e, n, l) => {
            for (
              var o = l > 1 ? void 0 : l ? zt(e, n) : e, i = s.length - 1, c;
              i >= 0;
              i--
            )
              (c = s[i]) && (o = (l ? c(e, n, o) : c(o)) || o);
            return l && o && q(e, n, o), o;
          },
          R = (s, e, n) => Rt(s, typeof e != "symbol" ? e + "" : e, n);
        const Ft = {
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
        function Vt() {
          const s = (0, g.Qn)();
          return !(0, g.Y2)() && !s;
        }
        function Wt(s) {
          return Vt() ? (0, t.jsx)(T, { ...s }) : null;
        }
        let T = class extends S.Component {
          constructor() {
            super(...arguments),
              R(this, "m_cancelSignal", J().CancelToken.source()),
              R(this, "m_bMarkedUsabilitySeen", !1),
              R(this, "state", {
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
            await d.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !d.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: d.j
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? d.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : d.j.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                d.j
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
            this.m_cancelSignal.cancel(
              "BroadcastEmbeddable component unmounted",
            );
          }
          ToggleBroadcastExpandShrink() {
            let s = d.j.Get().GetPlayReadyStream(this.props);
            const e = this.state.bExpanded,
              n = v.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID;
            (0, d.U7)(n, e ? E.Mc.U6 : E.Mc.B_, s.snr),
              e && y() && y().AddEvent(_.Xm.d),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: e ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              e ||
                this.setState({ bExpanded: !this.state.bExpanded }, () =>
                  d.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                d.j.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(s) {
            this.setState({ bStartMuted: !1 }),
              d.j.Get().GetPlayReadyStream(this.props).accountid !=
                s.accountid &&
                (await d.j.Get().AttemptToPlayStream(this.props, s));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const s = d.j
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
              );
            await d.j.Get().PlayFromAvailableStreams(this.props, s, !0);
          }
          ConstructSidePanels(s, e) {
            let n = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return n;
            const l = d.j.Get().GetConcurrentStreams(this.props) > 1;
            let o = v.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
              i = (0, t.jsx)(tt, { ImgUrl: s.right_panel }, "right" + o),
              c = (0, t.jsx)(tt, { ImgUrl: s.left_panel }, "left" + o);
            const m = 11;
            if (o < m) {
              const h = At.l.GetAppIDListForBroadcasterSteamID(s.steamid);
              h && h.length === 1 && (o = h[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                o >= m &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((i = (0, t.jsx)(ut, { appid: o }, "mini" + s.accountid)),
                (n.bRightPanelArtworkOrEmpty = !1)),
              l && !e
                ? ((n.leftPanel = (0, t.jsx)(
                    kt,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: s,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + o,
                  )),
                  (n.rightPanel = i))
                : e
                  ? ((n.leftPanel = (0, t.jsx)("div", {})),
                    (n.rightPanel = (0, t.jsx)(Yt, {
                      stream: s,
                      orientation: "rightside",
                    })),
                    (n.bRightPanelArtworkOrEmpty = !1))
                  : ((n.leftPanel = c), (n.rightPanel = i)),
              n
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              y() && y().AddEvent(_.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let s = d.j.Get().GetPlayReadyStream(this.props);
            if (s) {
              this.MarkBroadcastSeen();
              let e = d.j.Get().GetChatVisibility() === "show";
              const {
                event: n,
                language: l,
                fnRenderBroadcastContext: o,
              } = this.props;
              n &&
                (s = {
                  ...s,
                  left_panel: n.GetImageURL(
                    "broadcast_left",
                    l || (0, H.sfN)(g.TS.LANGUAGE),
                  ),
                  right_panel: n.GetImageURL(
                    "broadcast_right",
                    l || (0, H.sfN)(g.TS.LANGUAGE),
                  ),
                  store_title: n.GetBroadcastTitle(
                    l || (0, H.sfN)(g.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
                });
              let i = this.ConstructSidePanels(s, e),
                c = s.store_title ? s.store_title : s.title,
                m = d.j.Get().GetConcurrentStreams(this.props) > 1;
              const h = () => {
                var A, b;
                s.nAppIDVOD && this.PlayNextNonVOD(),
                  (b = (A = this.props).fnOnVideoEnd) == null || b.call(A);
              };
              return (0, t.jsx)(S.Fragment, {
                children: (0, t.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, t.jsxs)("div", {
                      className: (0, p.A)({
                        [r().bordered_container]: !0,
                        [r().Event]: !!n,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, t.jsxs)("div", {
                          className: (0, p.A)(
                            r().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, t.jsx)(St.K, {}),
                            (0, t.jsx)("div", {
                              className: r().streamTitle,
                              children: c,
                            }),
                            (0, t.jsxs)("div", {
                              className: r().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, t.jsx)(x.he, {
                                    toolTipContent: (0, u.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, t.jsx)("div", {
                                      className: r().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${g.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, t.jsx)(x.he, {
                                  toolTipContent: (0, u.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, t.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? r().bordered_corner_expanded
                                      : r().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!s.gamedata_subtitle &&
                              (0, t.jsx)("div", {
                                className: r().bordered_subtitle,
                                children: s.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, t.jsxs)("div", {
                            className: (0, p.A)({
                              [r().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: m,
                              broadcast_right_panel_simple:
                                i.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: e,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, t.jsx)("div", {
                                className: r().LeftPanelCtn,
                                children: i.leftPanel,
                              }),
                              (0, t.jsx)(F, {
                                stream: s,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: o,
                                fnOnVideoEnd: h,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, t.jsx)("div", {
                                className: r().RightPanelCtn,
                                children: i.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, t.jsx)(P, {
                                  stream: s,
                                  bMultistream: m,
                                  chatAnnouncementGivewayGID: i.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      n &&
                      n.jsondata &&
                      n.jsondata.broadcast_item_drops_enabled
                    ) && (0, t.jsx)(Nt, { event: n }),
                    (0, t.jsx)("div", { className: r().clear_div }),
                  ],
                }),
              });
            } else
              return (0, t.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        N([C.oI], T.prototype, "ToggleBroadcastExpandShrink", 1),
          N([C.oI], T.prototype, "OnShrinkTransitionEnd", 1),
          N([C.oI], T.prototype, "onStreamSelect", 1),
          N([C.oI], T.prototype, "PlayNextNonVOD", 1),
          (T = N([L.PA], T));
        class F extends S.Component {
          constructor(e) {
            super(e),
              R(this, "m_iVideoContainerRef", S.createRef()),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const e = v.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, d.U7)(e, E.Mc.n6, this.props.stream.snr),
              y() && y().AddEvent(_.Xm.ok),
              this.setState({ bPopout: !1, bPreventPopup: !0 });
          }
          OnEnter() {
            !this.state.bPreventPopup &&
              this.state.bPopout &&
              this.setState({ bPopout: !1 });
          }
          OnLeave() {
            !this.state.bPreventPopup &&
              !this.state.bPopout &&
              this.setState({ bPopout: !0 });
          }
          render() {
            return (0, t.jsx)("div", {
              className: r().wrapper,
              children: (0, t.jsx)(Ot.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (e) => {
                  e.isIntersecting || this.OnLeave();
                },
                className: (0, p.A)({
                  [r().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [r().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, t.jsxs)("div", {
                  className: this.state.bPopout
                    ? r().broadcast_floating
                    : r().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, t.jsx)(et, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, t.jsx)("div", {
                      className: r().BroadcastPlayerContainer,
                      children: (0, t.jsx)(nt.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: Z.nn.fe,
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
        N([C.oI], F.prototype, "CloseBroadcastPopup", 1),
          N([C.oI], F.prototype, "OnEnter", 1),
          N([C.oI], F.prototype, "OnLeave", 1);
        function Ht(s) {
          const { stream: e } = s,
            [n] = (0, O.q3)(() => [e.steamid]),
            l = v.es.GetOrCreateBroadcastInfo(n).m_nAppID,
            o = Ft.list.find(
              (i) =>
                i.appid == l &&
                (!i.broadcasterAccountID ||
                  i.broadcasterAccountID == e.accountid),
            );
          if (o) {
            let i = o.url;
            return (
              (g.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (i = "steam://openurl/" + i),
              (0, t.jsx)("a", {
                href: i,
                children: (0, u.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const i = g.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
            return (0, t.jsx)(x.he, {
              toolTipContent: (0, u.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, t.jsx)("a", {
                href: i,
                className: r().external_link,
                children: (0, t.jsx)(f.GrD, {}),
              }),
            });
          }
        }
        let P = class extends S.Component {
          OnToggleChat(s) {
            s.preventDefault();
            const e = v.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, d.U7)(
              e,
              d.j.Get().GetChatVisibility() === "show" ? E.Mc.kz : E.Mc.bW,
              this.props.stream.snr,
            ),
              d.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const s = v.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, d.U7)(s, E.Mc.Is, this.props.stream.snr);
          }
          render() {
            const s = d.j.Get().GetChatVisibility() != "remove",
              e = d.j.Get().GetChatVisibility() === "hide",
              n = !this.props.stream.nAppIDVOD,
              l = n;
            let o = Number.parseInt(
              "" +
                v.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, t.jsxs)("div", {
              className: (0, p.A)(r().viewer_bar, "viewer_bar"),
              children: [
                (0, t.jsxs)("div", {
                  className: (0, p.A)(r().viewer_count, "viewer_count"),
                  children: [(0, t.jsx)(f.y_e, {}), (0, K.Dq)(o)],
                }),
                (0, t.jsxs)("div", {
                  className: (0, p.A)(r().viewer_links, "viewer_links"),
                  children: [
                    !!(s && !e && this.props.bMultistream) &&
                      (0, t.jsx)("div", {
                        className: r().chat_link,
                        children: (0, t.jsx)("a", {
                          href: "#",
                          className: r().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, u.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    s &&
                      (0, t.jsxs)("div", {
                        className: r().chat_link,
                        children: [
                          (0, t.jsx)(f.ROZ, {}),
                          (0, t.jsx)("a", {
                            href: "#",
                            className: r().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, u.we)(
                              e
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    l &&
                      (0, t.jsxs)("div", {
                        className: r().chat_link,
                        children: [
                          (0, t.jsx)(f.SYj, {}),
                          (0, t.jsx)("a", {
                            href: "#",
                            className: r().ChatToggle,
                            onClick: (i) =>
                              (0, Pt.pg)(
                                (0, t.jsx)(Bt, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, Lt.uX)(i),
                              ),
                            children: (0, u.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, t.jsx)(x.he, {
                      toolTipContent: (0, u.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, t.jsx)("a", {
                        href:
                          g.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: g.TS.IN_CLIENT ? void 0 : "_blank",
                        className: r().settings_link,
                        children: (0, t.jsx)(f.wB_, {}),
                      }),
                    }),
                    n && (0, t.jsx)(Ht, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, t.jsx)(Ut.V, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        N([C.oI], P.prototype, "OnToggleChat", 1),
          N([C.oI], P.prototype, "onWatchBroadcastPage", 1),
          (P = N([L.PA], P));
        class tt extends S.Component {
          render() {
            let e = this.props.ImgUrl;
            return (0, t.jsxs)("div", {
              className: r().SidePanelBackground,
              children: [
                e &&
                  (0, t.jsx)("img", {
                    className: r().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && (0, t.jsx)("div", { className: r().side_panels }),
              ],
            });
          }
        }
        const et = (0, L.PA)((s) => {
          const { steamIDBroadcast: e } = s;
          let n = v.es.GetOrCreateBroadcastInfo(e).m_nAppID;
          n = n != v.fO ? n : 0;
          const l = (0, W.$5)(n),
            { data: o } = (0, B.J$)(l);
          return (0, t.jsxs)("div", {
            className: [r().PopOutVideoTitleBar, r().NoSeslect].join(" "),
            children: [
              o
                ? (0, t.jsx)(z.u, {
                    id: l,
                    className: r().PopOutVideoTitleText,
                    children: (0, u.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, t.jsx)("div", {
                    className: r().PopOutVideoTitleText,
                    children: (0, u.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, t.jsx)(x.he, {
                toolTipContent: (0, u.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, t.jsx)("button", {
                  className: r().PopOutVideoCloseButton,
                  onClick: s.OnPreventPopup,
                  children: (0, t.jsx)(f.X, {}),
                }),
              }),
            ],
          });
        });
        function _t(s, e) {
          var n;
          const l = v.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            o = X.A.Get().GetApp(l),
            i =
              s &&
              ((n = o == null ? void 0 : o.GetAssets()) == null
                ? void 0
                : n.GetHeaderURL());
          return parseInt(
            i
              ? r().strStreamIconCapsuleArtHeight
              : r().strStreamIconScreenshotArtHeight,
          );
        }
        function kt(s) {
          const {
              curStream: e,
              onStreamSelect: n,
              fnFilterStreams: l,
              bShowCapsuleArt: o,
              broadcastEmbedContext: i,
            } = s,
            c = (0, S.useRef)(void 0),
            m = (0, S.useMemo)(() => {
              const h = d.j
                .Get()
                .GetStreams(i)
                .filter((A) => !l || l(A));
              return (0, d.MU)(h), h;
            }, [i, l]);
          return (
            (0, S.useEffect)(() => {
              if (c && c.current) {
                const h = m
                  .map((A) => v.es.GetOrCreateBroadcastInfo(A.steamid).m_nAppID)
                  .filter(Boolean);
                X.A.Get()
                  .QueueMultipleAppRequests(h, { include_assets: !0 })
                  .then(() => {
                    if (c.current) {
                      let A = 0;
                      for (const b of m) {
                        if (e.accountid == b.accountid) break;
                        A += _t(o, b);
                      }
                      c.current.scrollTop = A;
                    }
                  });
              }
            }, [m, o, e.accountid, c]),
            (0, t.jsx)("div", {
              ref: c,
              className: (0, p.A)({
                [r().side_panels]: !0,
                side_panels: !0,
                [r().multistream]: !0,
                [r().scrollingstreams]: m.length > 3,
              }),
              children: (0, t.jsx)("div", {
                className: r().MultiStreamCtn,
                children: m.map((h) => {
                  var A;
                  return (0, t.jsx)(
                    Qt,
                    {
                      stream: h,
                      bSelected: e.accountid == h.accountid,
                      onStreamSelect: n,
                      bShowCapsuleArt: o,
                    },
                    (A = h.accountid) != null ? A : h.steamid,
                  );
                }),
              }),
            })
          );
        }
        function Qt(s) {
          const {
            onStreamSelect: e,
            bSelected: n,
            stream: l,
            bShowCapsuleArt: o,
          } = s;
          let i = (0, O.q3)(
            () => v.es.GetOrCreateBroadcastInfo(l.steamid).m_nAppID,
          );
          i = i != v.fO ? i : 0;
          const c = (0, W.$5)(i),
            { data: m } = (0, B.J$)(c),
            { data: h } = (0, B.lv)(c);
          if (!(0, d.fn)(l)) return null;
          const A = o && h && (0, Y.b0)(h, "header"),
            b = Number.parseInt("" + l.viewer_count),
            w = !Number.isNaN(b),
            Q = !!l.nAppIDVOD && (m == null ? void 0 : m.name);
          return (0, t.jsxs)("div", {
            className: (0, p.A)({
              [r().stream_icon_and_viewer_container]: !0,
              [r().stream_featured]:
                l.current_selection_priority == Gt.mY.k_eFeatured,
              [r().display_capsule_art]: !!A,
            }),
            children: [
              (0, t.jsx)(z.j, {
                id: c,
                hoverClassName: r().StreamCapsule,
                children: (0, t.jsx)(vt.K, {
                  className: (0, p.A)(
                    r().stream_icon_container,
                    n && r().stream_selected,
                  ),
                  onClick: () => e && e(l),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, t.jsx)(Jt, {
                    strThumbnail: l.thumbnail_http_address,
                    bSelected: n,
                    strCapsuleArtURL: A,
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, p.A)(r().viewer_count, !w && r().vod_title),
                children: w
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(f.y_e, {}),
                        (0, t.jsx)("div", {
                          className: r().ViewerNum,
                          children: (0, K.Dq)(b),
                        }),
                      ],
                    })
                  : Q,
              }),
            ],
          });
        }
        function Jt(s) {
          const { strCapsuleArtURL: e, strThumbnail: n, bSelected: l } = s,
            o = l ? r().stream_icon_selected : r().stream_icon;
          if (e) {
            const i = [e];
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("img", {
                  className: (0, p.A)(o, r().stream_icon_hide_on_hover),
                  src: e,
                }),
                (0, t.jsx)(gt.o, {
                  className: (0, p.A)(o, r().stream_icon_show_on_hover),
                  srcs: i,
                }),
              ],
            });
          } else return (0, t.jsx)("img", { className: o, src: n });
        }
        function Yt(s) {
          const { stream: e, orientation: n } = s,
            l = n == "below",
            [o, i] = (0, O.q3)(() => {
              var m;
              return [
                v.es.GetBroadcast(e.steamid),
                (m = v.es.GetBroadcast(e.steamid)) == null
                  ? void 0
                  : m.m_ulBroadcastID,
              ];
            }),
            c = (0, O.q3)(() => e.steamid);
          return o
            ? (0, t.jsx)("div", {
                className: (0, p.A)({
                  [r().chat_below_container]: l,
                  [r().chat_rightside_container]: !l,
                  [r().store_chat_ctn]: !0,
                }),
                children: (0, t.jsx)("div", {
                  className: r().ChatContainer,
                  children: (0, t.jsx)(at.I, {
                    emoticonStore: d.MX,
                    watchLocation: Z.nn.fe,
                    steamID: c,
                    broadcastID: i,
                  }),
                }),
              })
            : null;
        }
      },
      43087: (D) => {
        D.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      96715: (D, j, a) => {
        "use strict";
        a.d(j, { A: () => t });
        const t =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (D, j, a) => {
        "use strict";
        a.d(j, { A: () => t });
        const t =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (D, j, a) => {
        "use strict";
        a.d(j, { A: () => t });
        const t =
          a.p +
          "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (D, j, a) => {
        "use strict";
        a.d(j, { A: () => t });
        const t =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
      59913: (D, j, a) => {
        "use strict";
        a.d(j, { A: () => t });
        function t(U) {
          if (U === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return U;
        }
      },
    },
  ]);
})();
