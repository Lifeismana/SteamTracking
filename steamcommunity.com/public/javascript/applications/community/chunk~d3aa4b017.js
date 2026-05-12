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
    16569: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => u });
      var s = a(81115),
        n = a(58584),
        r = a(59913),
        i = a(42891),
        o = a(90626),
        l = a(28679);
      function c(e, t) {
        var a = Object.create(null);
        return (
          e &&
            o.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              a[e.key] = (function (e) {
                return t && (0, o.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          a
        );
      }
      function d(e, t, a) {
        return null != a[t] ? a[t] : e.props[t];
      }
      function p(e, t, a) {
        var s = c(e.children),
          n = (function (e, t) {
            function a(a) {
              return a in t ? t[a] : e[a];
            }
            (e = e || {}), (t = t || {});
            var s,
              n = Object.create(null),
              r = [];
            for (var i in e)
              i in t ? r.length && ((n[i] = r), (r = [])) : r.push(i);
            var o = {};
            for (var l in t) {
              if (n[l])
                for (s = 0; s < n[l].length; s++) {
                  var c = n[l][s];
                  o[n[l][s]] = a(c);
                }
              o[l] = a(l);
            }
            for (s = 0; s < r.length; s++) o[r[s]] = a(r[s]);
            return o;
          })(t, s);
        return (
          Object.keys(n).forEach(function (r) {
            var i = n[r];
            if ((0, o.isValidElement)(i)) {
              var l = r in t,
                c = r in s,
                p = t[r],
                m = (0, o.isValidElement)(p) && !p.props.in;
              !c || (l && !m)
                ? c || !l || m
                  ? c &&
                    l &&
                    (0, o.isValidElement)(p) &&
                    (n[r] = (0, o.cloneElement)(i, {
                      onExited: a.bind(null, i),
                      in: p.props.in,
                      exit: d(i, "exit", e),
                      enter: d(i, "enter", e),
                    }))
                  : (n[r] = (0, o.cloneElement)(i, { in: !1 }))
                : (n[r] = (0, o.cloneElement)(i, {
                    onExited: a.bind(null, i),
                    in: !0,
                    exit: d(i, "exit", e),
                    enter: d(i, "enter", e),
                  }));
            }
          }),
          n
        );
      }
      var m =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        h = (function (e) {
          function t(t, a) {
            var s,
              n = (s = e.call(this, t, a) || this).handleExited.bind(
                (0, r.A)(s),
              );
            return (
              (s.state = {
                contextValue: { isMounting: !0 },
                handleExited: n,
                firstRender: !0,
              }),
              s
            );
          }
          (0, i.A)(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (a.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var a,
                s,
                n = t.children,
                r = t.handleExited;
              return {
                children: t.firstRender
                  ? ((a = e),
                    (s = r),
                    c(a.children, function (e) {
                      return (0, o.cloneElement)(e, {
                        onExited: s.bind(null, e),
                        in: !0,
                        appear: d(e, "appear", a),
                        enter: d(e, "enter", a),
                        exit: d(e, "exit", a),
                      });
                    }))
                  : p(e, n, r),
                firstRender: !1,
              };
            }),
            (a.handleExited = function (e, t) {
              var a = c(this.props.children);
              e.key in a ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var a = (0, n.A)({}, t.children);
                    return delete a[e.key], { children: a };
                  }));
            }),
            (a.render = function () {
              var e = this.props,
                t = e.component,
                a = e.childFactory,
                n = (0, s.A)(e, ["component", "childFactory"]),
                r = this.state.contextValue,
                i = m(this.state.children).map(a);
              return (
                delete n.appear,
                delete n.enter,
                delete n.exit,
                null === t
                  ? o.createElement(l.A.Provider, { value: r }, i)
                  : o.createElement(
                      l.A.Provider,
                      { value: r },
                      o.createElement(t, n, i),
                    )
              );
            }),
            t
          );
        })(o.Component);
      (h.propTypes = {}),
        (h.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      const u = h;
    },
    45476: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => Ce,
          default: () => je,
        });
      var s = a(34629),
        n = a(7850),
        r = a(41735),
        i = a.n(r),
        o = a(75844),
        l = a(65946),
        c = a(90626),
        d = a(39606),
        p = a(72224),
        m = a(55963),
        h = a(96171),
        u = a(55263),
        A = a(18654),
        _ = a(94095),
        j = a(20433),
        x = a(60014),
        g = a(22797),
        S = a(52038),
        N = a(78327),
        b = a(43087),
        C = a.n(b),
        v = a(35380),
        I = a(39777),
        w = a(71420),
        D = a(42834),
        M = a(5309);
      const y = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, x.n9)(),
          s = (0, c.useRef)({ include_assets: !0, include_release: !0 }),
          r = (0, v.$5)(t),
          { data: i } = (0, I.J$)(r),
          { data: o } = (0, I.lv)(r),
          { data: l } = (0, I.by)(r),
          [d, p] = (0, u.t7)(t, s.current);
        let b = (0, S.A)(
            C().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          y = C().StoreSaleWidgetImage_mini,
          E = C().StoreSaleImage_mini;
        if (null == i)
          return (0, n.jsx)("div", {
            className: b,
            children: (0, n.jsx)(g.t, { size: "medium" }),
          });
        if (null == i || !i.name)
          return (0, n.jsx)("div", {
            className: A.StoreSaleWidgetEmptyContainer,
          });
        const f = i.type != h.uE.gQ,
          T = (0, m.wJ)((0, w._)(i), a);
        return (0, n.jsxs)("div", {
          className: b,
          children: [
            (0, n.jsx)("a", {
              href: T,
              target: N.TS.IN_CLIENT ? void 0 : "_blank",
              children: (0, n.jsx)(j.j, {
                id: r,
                children: (0, n.jsx)("div", {
                  className: y,
                  children:
                    o &&
                    (0, n.jsx)("img", {
                      className: E,
                      src: (0, D.b0)(o, "small_capsule"),
                      alt: i.name,
                    }),
                }),
              }),
            }),
            (0, n.jsxs)("div", {
              className: A.StoreSaleBroadcastWidgetRight,
              children: [
                (0, n.jsx)("a", {
                  href: T,
                  target: N.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, n.jsx)(j.j, {
                    id: r,
                    children: (0, n.jsx)("div", {
                      className: (0, S.A)(
                        A.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: i.name,
                    }),
                  }),
                }),
                l &&
                  (0, n.jsx)("div", {
                    className: A.StoreSaleWidgetRelease,
                    children: (0, M.CC)(l),
                  }),
                Boolean(f) && (0, n.jsx)(_.w, { id: r, bShowDemoButton: !0 }),
              ],
            }),
          ],
        });
      });
      var E = a(22837);
      function f() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var T = a(55815),
        B = a(45285),
        L = a(12563),
        U = a(60727),
        P = a(54728),
        k = a(34010),
        O = a(16021),
        G = a(94011),
        z = a(26296),
        R = a(96236),
        V = a(12155),
        F = a(32754),
        W = a(61859),
        H = a(82227),
        Q = a(73745),
        J = a(17720),
        Y = a(67165),
        Z = a(53120),
        X = a.n(Z);
      const K = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          r = (0, c.useRef)(null),
          [o, l] = (0, c.useState)(
            t ? Y.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, c.useEffect)(() => {
            const e = i().CancelToken.source();
            r.current = e.cancel;
            return (
              (async () => {
                const t = J.b.InitFromClanID(a),
                  s = await Y.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || l(s);
              })(),
              () => {
                r.current && r.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          s || !o || !o.BIsLoaded())
        )
          return null;
        const d =
          N.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return (0, n.jsx)("div", {
          className: X().item_drop_ctn,
          children: (0, n.jsxs)("div", {
            children: [
              (0, W.we)(
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
                (0, n.jsx)("a", {
                  href: d,
                  target: N.TS.IN_CLIENT ? "" : "_blank",
                  children: (0, W.we)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
      });
      var q = a(95695),
        $ = a.n(q),
        ee = a(96715),
        te = a(10886),
        ae = a(19654),
        se = a(3209),
        ne = a(9154),
        re = a(51272),
        ie = a(14256),
        oe = a.n(ie);
      function le(e) {
        const { steamid: t, closeModal: a } = e;
        return (0, n.jsxs)(ne.o0, {
          strDescription: "",
          strTitle: (0, W.we)("#Button_Share"),
          onCancel: a,
          onOK: a,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, n.jsx)(ce, { steamid: t }),
            (0, n.jsx)(de, { steamid: t }),
          ],
        });
      }
      function ce(e) {
        const { steamid: t } = e,
          a = (function (e) {
            const t = N.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return (0, n.jsxs)("div", {
          className: (0, S.A)($().FlexRowContainer, oe().share_controls_ctn),
          children: [
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)("#EventDisplay_Share_OnFaceBook"),
              children: (0, n.jsx)(re.uU, {
                href: a.strFacebookUrl,
                className: oe().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, S.A)($().Button),
                  src: te.A,
                }),
              }),
            }),
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)("#EventDisplay_Share_OnTwitter"),
              children: (0, n.jsx)(re.uU, {
                href: a.strTwitterUrl,
                className: oe().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, S.A)($().Button),
                  src: se.A,
                }),
              }),
            }),
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)("#EventDisplay_Share_OnReddit"),
              children: (0, n.jsx)(re.uU, {
                href: a.strRedditUrl,
                className: oe().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, S.A)($().Button),
                  src: ae.A,
                }),
              }),
            }),
          ],
        });
      }
      function de(e) {
        const { steamid: t } = e,
          a = c.createRef(),
          [s, r] = c.useState(""),
          i = c.createRef(),
          o = c.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    r((0, W.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    r((0, W.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          l = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: (0, S.A)($().FlexRowContainer, oe().linkField),
              onClick: o,
              children: [
                (0, n.jsx)("span", {
                  className: oe().LinkInputLabel,
                  children: (0, W.we)("#EventDisplay_Share_Link"),
                }),
                (0, n.jsx)("textarea", {
                  className: oe().LinkInput,
                  ref: a,
                  value: l,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, n.jsx)(F.he, {
                    toolTipContent: (0, W.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, n.jsx)("div", {
                      className: (0, S.A)(
                        $().Button,
                        $().Icon,
                        oe().LinkButton,
                      ),
                      children: (0, n.jsx)("img", {
                        className: oe().ClipboardIcon,
                        src: ee.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: i,
              className: oe().ClipboardText,
              children: s,
            }),
          ],
        });
      }
      var pe = a(56011),
        me = a(738),
        he = a(29268),
        ue = a(23338),
        Ae = a(75515);
      const _e = {
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
            broadcasterAccountID: 911609735,
          },
        ],
      };
      function je(e) {
        return (function () {
          const e = (0, N.Qn)();
          return !(0, N.Y2)() && !e;
        })()
          ? (0, n.jsx)(xe, { ...e })
          : null;
      }
      let xe = class extends c.Component {
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
          await k.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !k.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: k.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? k.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : k.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              k.j
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
          let e = k.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = P.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, k.U7)(a, t ? B.Mc.U6 : B.Mc.B_, e.snr),
            t && f() && f().AddEvent(L.Xm.d),
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
                k.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              k.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            k.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await k.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = k.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await k.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const s = k.j.Get().GetConcurrentStreams(this.props) > 1;
          let r = P.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            i = (0, n.jsx)(be, { ImgUrl: e.right_panel }, "right" + r),
            o = (0, n.jsx)(be, { ImgUrl: e.left_panel }, "left" + r);
          if (r < 11) {
            const t = U.l.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (r = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              r >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((i = (0, n.jsx)(y, { appid: r }, "mini" + e.accountid)),
              (a.bRightPanelArtworkOrEmpty = !1)),
            s && !t
              ? ((a.leftPanel = (0, n.jsx)(
                  Ie,
                  {
                    broadcastEmbedContext: this.props,
                    curStream: e,
                    onStreamSelect: this.onStreamSelect,
                    fnFilterStreams: this.props.fnFilterStreams,
                    bShowCapsuleArt: this.props.bShowCapsuleArt,
                  },
                  "selector" + r,
                )),
                (a.rightPanel = i))
              : t
                ? ((a.leftPanel = (0, n.jsx)("div", {})),
                  (a.rightPanel = (0, n.jsx)(Me, {
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
            ((this.m_bMarkedUsabilitySeen = !0), f() && f().AddEvent(L.Xm.ex));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = k.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === k.j.Get().GetChatVisibility();
            const {
              event: a,
              language: s,
              fnRenderBroadcastContext: r,
            } = this.props;
            a &&
              (e = {
                ...e,
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  s || (0, E.sfN)(N.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  s || (0, E.sfN)(N.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(
                  s || (0, E.sfN)(N.TS.LANGUAGE),
                ),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let i = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              l = k.j.Get().GetConcurrentStreams(this.props) > 1;
            const d = () => {
              var t, a;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
            return (0, n.jsx)(c.Fragment, {
              children: (0, n.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, S.A)({
                      [X().bordered_container]: !0,
                      [X().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, S.A)(
                          X().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, n.jsx)(G.K, {}),
                          (0, n.jsx)("div", {
                            className: X().streamTitle,
                            children: o,
                          }),
                          (0, n.jsxs)("div", {
                            className: X().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, n.jsx)(F.he, {
                                  toolTipContent: (0, W.we)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, n.jsx)("div", {
                                    className: X().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${N.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, n.jsx)(F.he, {
                                toolTipContent: (0, W.we)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, n.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? X().bordered_corner_expanded
                                    : X().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(e.gamedata_subtitle) &&
                            (0, n.jsx)("div", {
                              className: X().bordered_subtitle,
                              children: e.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, n.jsxs)("div", {
                          className: (0, S.A)({
                            [X().container]: !0,
                            embeddable_ctn_trgt: !0,
                            multistream: l,
                            broadcast_right_panel_simple:
                              i.bRightPanelArtworkOrEmpty,
                            broadcast_chat_expanded: t,
                          }),
                          style: { ...this.state.innerStyle },
                          onTransitionEnd: this.OnShrinkTransitionEnd,
                          children: [
                            (0, n.jsx)("div", {
                              className: X().LeftPanelCtn,
                              children: i.leftPanel,
                            }),
                            (0, n.jsx)(ge, {
                              stream: e,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: r,
                              fnOnVideoEnd: d,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, n.jsx)("div", {
                              className: X().RightPanelCtn,
                              children: i.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, n.jsx)(Ne, {
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
                  ) && (0, n.jsx)(K, { event: a }),
                  (0, n.jsx)("div", { className: X().clear_div }),
                ],
              }),
            });
          }
          return (0, n.jsx)("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, s.Cg)([Q.oI], xe.prototype, "ToggleBroadcastExpandShrink", null),
        (0, s.Cg)([Q.oI], xe.prototype, "OnShrinkTransitionEnd", null),
        (0, s.Cg)([Q.oI], xe.prototype, "onStreamSelect", null),
        (0, s.Cg)([Q.oI], xe.prototype, "PlayNextNonVOD", null),
        (xe = (0, s.Cg)([o.PA], xe));
      class ge extends c.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = P.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.U7)(e, B.Mc.n6, this.props.stream.snr),
            f() && f().AddEvent(L.Xm.ok),
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
          return (0, n.jsx)("div", {
            className: X().wrapper,
            children: (0, n.jsx)(ue.j, {
              onEnter: this.OnEnter,
              onLeave: this.OnLeave,
              onIntersectionChange: (e) => {
                e.isIntersecting || this.OnLeave();
              },
              className: (0, S.A)({
                [X().video_placeholder]: !0,
                video_placeholder_trgt: !0,
                [X().WidePlayer]: this.props.bWidePlayer,
              }),
              ref: this.m_iVideoContainerRef,
              children: (0, n.jsxs)("div", {
                className: this.state.bPopout
                  ? X().broadcast_floating
                  : X().video_container,
                children: [
                  this.state.bPopout &&
                    (0, n.jsx)(Ce, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, n.jsx)("div", {
                    className: X().BroadcastPlayerContainer,
                    children: (0, n.jsx)(p.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: T.nn.fe,
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
      function Se(e) {
        const { stream: t } = e,
          [a] = (0, l.q3)(() => [t.steamid]),
          s = P.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          r = _e.list.find(
            (e) =>
              e.appid == s &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (r) {
          let e = r.url;
          return (
            (N.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            (0, n.jsx)("a", {
              href: e,
              children: (0, W.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            })
          );
        }
        {
          const e = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return (0, n.jsx)(F.he, {
            toolTipContent: (0, W.we)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, n.jsx)("a", {
              href: e,
              className: X().external_link,
              children: (0, n.jsx)(V.GrD, {}),
            }),
          });
        }
      }
      (0, s.Cg)([Q.oI], ge.prototype, "CloseBroadcastPopup", null),
        (0, s.Cg)([Q.oI], ge.prototype, "OnEnter", null),
        (0, s.Cg)([Q.oI], ge.prototype, "OnLeave", null);
      let Ne = class extends c.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = P.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.U7)(
            t,
            "show" === k.j.Get().GetChatVisibility() ? B.Mc.kz : B.Mc.bW,
            this.props.stream.snr,
          ),
            k.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = P.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.U7)(e, B.Mc.Is, this.props.stream.snr);
        }
        render() {
          const e = "remove" != k.j.Get().GetChatVisibility(),
            t = "hide" === k.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            s = a;
          let r = Number.parseInt(
            "" +
              P.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, n.jsxs)("div", {
            className: (0, S.A)(X().viewer_bar, "viewer_bar"),
            children: [
              (0, n.jsxs)("div", {
                className: (0, S.A)(X().viewer_count, "viewer_count"),
                children: [(0, n.jsx)(V.y_e, {}), (0, H.Dq)(r)],
              }),
              (0, n.jsxs)("div", {
                className: (0, S.A)(X().viewer_links, "viewer_links"),
                children: [
                  Boolean(e && !t && this.props.bMultistream) &&
                    (0, n.jsx)("div", {
                      className: X().chat_link,
                      children: (0, n.jsx)("a", {
                        href: "#",
                        className: X().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, W.we)("#sale_three_section_show_streams"),
                      }),
                    }),
                  e &&
                    (0, n.jsxs)("div", {
                      className: X().chat_link,
                      children: [
                        (0, n.jsx)(V.ROZ, {}),
                        (0, n.jsx)("a", {
                          href: "#",
                          className: X().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, W.we)(
                            t
                              ? "#sale_three_section_show_chat"
                              : "#sale_three_section_hide_chat",
                          ),
                        }),
                      ],
                    }),
                  s &&
                    (0, n.jsxs)("div", {
                      className: X().chat_link,
                      children: [
                        (0, n.jsx)(V.SYj, {}),
                        (0, n.jsx)("a", {
                          href: "#",
                          className: X().ChatToggle,
                          onClick: (e) =>
                            (0, me.pg)(
                              (0, n.jsx)(le, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, pe.uX)(e),
                            ),
                          children: (0, W.we)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, n.jsx)(F.he, {
                    toolTipContent: (0, W.we)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, n.jsx)("a", {
                      href:
                        N.TS.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: N.TS.IN_CLIENT ? void 0 : "_blank",
                      className: X().settings_link,
                      children: (0, n.jsx)(V.wB_, {}),
                    }),
                  }),
                  a && (0, n.jsx)(Se, { ...this.props }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, n.jsx)(he.V, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, s.Cg)([Q.oI], Ne.prototype, "OnToggleChat", null),
        (0, s.Cg)([Q.oI], Ne.prototype, "onWatchBroadcastPage", null),
        (Ne = (0, s.Cg)([o.PA], Ne));
      class be extends c.Component {
        render() {
          let e = this.props.ImgUrl;
          return (0, n.jsxs)("div", {
            className: X().SidePanelBackground,
            children: [
              e &&
                (0, n.jsx)("img", {
                  className: X().side_panels,
                  src: this.props.ImgUrl,
                }),
              !e && (0, n.jsx)("div", { className: X().side_panels }),
            ],
          });
        }
      }
      const Ce = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = P.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != P.fO ? a : 0;
        const s = (0, v.$5)(a),
          { data: r } = (0, I.J$)(s);
        return (0, n.jsxs)("div", {
          className: [X().PopOutVideoTitleBar, X().NoSeslect].join(" "),
          children: [
            Boolean(r)
              ? (0, n.jsx)(j.u, {
                  id: s,
                  className: X().PopOutVideoTitleText,
                  children: (0, W.we)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, n.jsx)("div", {
                  className: X().PopOutVideoTitleText,
                  children: (0, W.we)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              children: (0, n.jsx)("button", {
                className: X().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
                children: (0, n.jsx)(V.X, {}),
              }),
            }),
          ],
        });
      });
      function ve(e, t) {
        var a;
        const s = P.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = O.A.Get().GetApp(s);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(X().strStreamIconCapsuleArtHeight)
          : parseInt(X().strStreamIconScreenshotArtHeight);
      }
      function Ie(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: s,
            bShowCapsuleArt: r,
            broadcastEmbedContext: i,
          } = e,
          o = (0, c.useRef)(void 0),
          l = (0, c.useMemo)(() => {
            const e = k.j
              .Get()
              .GetStreams(i)
              .filter((e) => !s || s(e));
            return (0, k.MU)(e), e;
          }, [i, s]);
        return (
          (0, c.useEffect)(() => {
            if (o && o.current) {
              const e = l
                .map((e) => P.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              O.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of l) {
                      if (t.accountid == a.accountid) break;
                      e += ve(r, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [l, r, t.accountid, o]),
          (0, n.jsx)("div", {
            ref: o,
            className: (0, S.A)({
              [X().side_panels]: !0,
              side_panels: !0,
              [X().multistream]: !0,
              [X().scrollingstreams]: l.length > 3,
            }),
            children: (0, n.jsx)("div", {
              className: X().MultiStreamCtn,
              children: l.map((e) => {
                var s;
                return (0, n.jsx)(
                  we,
                  {
                    stream: e,
                    bSelected: t.accountid == e.accountid,
                    onStreamSelect: a,
                    bShowCapsuleArt: r,
                  },
                  null !== (s = e.accountid) && void 0 !== s ? s : e.steamid,
                );
              }),
            }),
          })
        );
      }
      function we(e) {
        const {
          onStreamSelect: t,
          bSelected: a,
          stream: s,
          bShowCapsuleArt: r,
        } = e;
        let i = (0, l.q3)(
          () => P.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
        );
        i = i != P.fO ? i : 0;
        const o = (0, v.$5)(i),
          { data: c } = (0, I.J$)(o),
          { data: d } = (0, I.lv)(o);
        if (!(0, k.fn)(s)) return null;
        const p = r && d && (0, D.b0)(d, "header"),
          m = Number.parseInt("" + s.viewer_count),
          h = !Number.isNaN(m),
          u = !!s.nAppIDVOD && (null == c ? void 0 : c.name);
        return (0, n.jsxs)("div", {
          className: (0, S.A)({
            [X().stream_icon_and_viewer_container]: !0,
            [X().stream_featured]:
              s.current_selection_priority == Ae.mY.k_eFeatured,
            [X().display_capsule_art]: Boolean(p),
          }),
          children: [
            (0, n.jsx)(j.j, {
              id: o,
              hoverClassName: X().StreamCapsule,
              children: (0, n.jsx)(R.K, {
                className: (0, S.A)(
                  X().stream_icon_container,
                  a && X().stream_selected,
                ),
                onClick: () => t && t(s),
                rootMargin: "100px 0px 100px 0px",
                children: (0, n.jsx)(De, {
                  strThumbnail: s.thumbnail_http_address,
                  bSelected: a,
                  strCapsuleArtURL: p,
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: (0, S.A)(X().viewer_count, !h && X().vod_title),
              children: h
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(V.y_e, {}),
                      (0, n.jsx)("div", {
                        className: X().ViewerNum,
                        children: (0, H.Dq)(m),
                      }),
                    ],
                  })
                : u,
            }),
          ],
        });
      }
      function De(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: s } = e,
          r = s ? X().stream_icon_selected : X().stream_icon;
        if (t) {
          const e = [t];
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("img", {
                className: (0, S.A)(r, X().stream_icon_hide_on_hover),
                src: t,
              }),
              (0, n.jsx)(z.o, {
                className: (0, S.A)(r, X().stream_icon_show_on_hover),
                srcs: e,
              }),
            ],
          });
        }
        return (0, n.jsx)("img", { className: r, src: a });
      }
      function Me(e) {
        const { stream: t, orientation: a } = e,
          s = "below" == a,
          [r, i] = (0, l.q3)(() => {
            var e;
            return [
              P.es.GetBroadcast(t.steamid),
              null === (e = P.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, l.q3)(() => t.steamid);
        return r
          ? (0, n.jsx)("div", {
              className: (0, S.A)({
                [X().chat_below_container]: s,
                [X().chat_rightside_container]: !s,
                [X().store_chat_ctn]: !0,
              }),
              children: (0, n.jsx)("div", {
                className: X().ChatContainer,
                children: (0, n.jsx)(d.I, {
                  emoticonStore: k.MX,
                  watchLocation: T.nn.fe,
                  steamID: o,
                  broadcastID: i,
                }),
              }),
            })
          : null;
      }
    },
    96715: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        a.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
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
