/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2694],
  {
    15527: (e) => {
      e.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    3067: (e, t, s) => {
      "use strict";
      s.d(t, { td: () => n });
      var i = s(34629),
        a = s(14947),
        o = s(78327);
      o.TS.CHAT_BASE_URL, o.TS.CHAT_BASE_URL;
      class r {
        constructor(e) {
          (this.bValid = !1),
            (this.stream = { 0: "#Broadcast_EnglishMain" }),
            (this.name = ""),
            (this.appName = ""),
            (this.appID = 0),
            (this.link = ""),
            (this.linkName = ""),
            (this.tabIcon = ""),
            (this.offlineImage = ""),
            (this.gidEvent = ""),
            (0, a.Gn)(this),
            this.init(e);
        }
        init(e) {
          (this.bValid = e.bValid),
            (this.stream = e.stream),
            (this.name = e.name),
            (this.appName = e.appName),
            (this.appID = e.appID),
            (this.link = e.link),
            (this.linkName = e.linkName),
            (this.tabIcon = e.tabIcon),
            (this.offlineImage = e.offlineImage),
            (this.gidEvent = e.gidEvent);
        }
      }
      (0, i.Cg)([a.sH], r.prototype, "bValid", void 0),
        (0, i.Cg)([a.sH], r.prototype, "stream", void 0),
        (0, i.Cg)([a.sH], r.prototype, "name", void 0),
        (0, i.Cg)([a.sH], r.prototype, "appName", void 0),
        (0, i.Cg)([a.sH], r.prototype, "appID", void 0),
        (0, i.Cg)([a.sH], r.prototype, "link", void 0),
        (0, i.Cg)([a.sH], r.prototype, "linkName", void 0),
        (0, i.Cg)([a.sH], r.prototype, "tabIcon", void 0),
        (0, i.Cg)([a.sH], r.prototype, "offlineImage", void 0),
        (0, i.Cg)([a.sH], r.prototype, "gidEvent", void 0);
      let n = new r({
        bValid: !1,
        stream: { 0: "#Broadcast_EnglishMain" },
        name: "",
        appName: "",
        appID: 0,
        link: "",
        linkName: "",
        tabIcon: "",
        offlineImage: "",
      });
    },
    4299: (e, t, s) => {
      "use strict";
      var i, a;
      s.d(t, { J8: () => o, X8: () => a }),
        (function (e) {
          (e[(e.Hover = 0)] = "Hover"),
            (e[(e.ClickPopup = 1)] = "ClickPopup"),
            (e[(e.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion");
        })(i || (i = {})),
        (function (e) {
          (e[(e.Chat = 0)] = "Chat"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Error = 2)] = "Error");
        })(a || (a = {}));
      class o {}
    },
    72224: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastDetails: () => le,
          LinkOverlay: () => me,
          default: () => Q,
        });
      var i = s(34629),
        a = s(7850),
        o = s(14947),
        r = s(75844),
        n = s(90626),
        l = s(88997),
        d = s(86328),
        m = s(55963),
        h = s(54728),
        c = s(16021),
        p = s(73745),
        u = s(6144);
      class _ extends n.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new u.LU()),
            (this.m_bSetupComplete = !1);
        }
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(e) {
          this.m_elCanvas = e;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let e = this.props.scaleFactor || [1, 1],
            t = this.props.elementRef,
            s = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let i = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor,
            ),
            a = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor,
            );
          (this.m_elCanvas.width = i),
            (this.m_elCanvas.height = a),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let o = () => {
            this.m_Context.drawImage(t, 0, 0, i * e[0], a * e[1]),
              s > 0 && this.m_schUpdate.Schedule(s, o);
          };
          o(), (this.m_bSetupComplete = !0);
        }
        render() {
          return (0, a.jsx)("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, i.Cg)([p.oI], _.prototype, "BindCanvasRef", null),
        (0, i.Cg)([p.oI], _.prototype, "updateCanvas", null);
      var S = s(60155),
        g = s(16569),
        v = s(63741),
        b = s(52038);
      const C = 500;
      class y extends n.Component {
        render() {
          let {
            keyExtractor: e,
            style: t,
            duration: s = C,
            className: i,
            children: o,
            childRef: r,
            ...n
          } = this.props;
          const l = { ...(t || {}), transitionDuration: s / 1e3 + "s" };
          return (0, a.jsx)(g.A, {
            ...n,
            className: (0, b.A)("crossfade", i),
            children: (0, a.jsx)(
              v.A,
              {
                nodeRef: r,
                classNames: "crossfade-anim",
                timeout: s,
                style: l,
                children: o,
              },
              e(),
            ),
          });
        }
      }
      function f(e) {
        const { src: t, ...s } = e,
          i = { backgroundImage: `url(${t})` },
          o = n.useRef(null);
        return (0, a.jsx)(y, {
          style: i,
          keyExtractor: () => t,
          childRef: o,
          ...s,
          children: (0, a.jsx)("div", { ref: o, className: "crossfade-img" }),
        });
      }
      var D = s(41399),
        w = s(69409),
        I = s(81416),
        B = s(12155),
        V = s(51272),
        T = s(56011),
        k = s(61859),
        M = s(82227),
        P = s(25489),
        O = s(78327),
        x = s(3067),
        G = s(36064),
        A = s(15527),
        R = s.n(A),
        E = s(22797);
      function H() {
        return (0, a.jsx)("div", {
          className: "STV_ReplayBanner",
          children: (0, k.we)("#DASHPlayerControls_IsReplay"),
        });
      }
      const L = (0, r.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let s = h.fK.Loading,
          i = "";
        if (t) {
          (s = t.GetBroadcastState()), (i = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          s == h.fK.Unlocking && ((s = h.fK.Loading), (i = "")),
            s == h.fK.Ready && e && ((s = h.fK.Loading), (i = ""));
        }
        if (t && s != h.fK.Error && t.GetUserInputNeeded()) return null;
        if (s == h.fK.Ready) return null;
        let o = s == h.fK.Loading;
        return (0, a.jsxs)("div", {
          className: "BroadcastVideoWatchState",
          style: { filter: "hue-rotate(40deg)" },
          children: [
            o && (0, a.jsx)(E.t, {}),
            !o &&
              (0, a.jsx)("div", {
                className: "BroadcastVideoWatchState_Text",
                children: i,
              }),
          ],
        });
      });
      class j extends n.Component {
        OnClick() {
          h.es.UserInputClickVideo(this.props.video);
        }
        render() {
          return (0, a.jsxs)("div", {
            className: "BroadcastVideoUserInputNeeded",
            onClick: this.OnClick,
            children: [
              (0, a.jsx)(B.jGG, {}),
              (0, a.jsx)("span", {
                children: (0, k.we)("#DASHPlayerControls_ClickToPlay"),
              }),
            ],
          });
        }
      }
      (0, i.Cg)([p.oI], j.prototype, "OnClick", null);
      let N = class extends n.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return (0, a.jsxs)("div", {
            className: "dash_video_stats",
            children: [
              (0, a.jsx)("button", {
                className: "dash_stat_close_button",
                onClick: this.HideStats,
                children: (0, a.jsx)(B.sED, {}),
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_BufferingResolution"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBufferingResolutionToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_PlaybackResolution"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetPlaybackResolutionToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_HtmlResolution"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetHTMLVideoResolutionToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_ContentServer"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetContentServerToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_StallEvents"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetStalledEventsToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_FailedDownloads"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetFailedDownloadsToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_TimeToFirstFrame"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetTimeToFirstFrameToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_PlaybackRate"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetPlaybackRateForDisplay(),
                  }),
                ],
              }),
              (0, a.jsx)(U, { stats: e }),
            ],
          });
        }
      };
      (0, i.Cg)([p.oI], N.prototype, "HideStats", null),
        (N = (0, i.Cg)([r.PA], N));
      let U = class extends n.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            s = [],
            i = e ? "vidbuf" : "audbuf",
            o = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (o > 0)
            for (let r = 0; r < o; ++r) {
              let o = (0, k.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  r,
                ),
                n = e
                  ? t.GetBufferedVideoSegmentForDisplay(r)
                  : t.GetBufferedAudioSegmentForDisplay(r);
              s.push(
                (0, a.jsxs)(
                  "div",
                  {
                    children: [
                      o,
                      " ",
                      (0, a.jsx)("span", {
                        className: "videoStatsValue",
                        children: n,
                      }),
                    ],
                  },
                  i + r,
                ),
              );
            }
          else {
            let t = (0, k.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            s.push((0, a.jsx)("div", { children: t }, i + "none"));
          }
          return s;
        }
        render() {
          let e = this.props.stats;
          return (0, a.jsxs)("div", {
            className: "dash_video_quick_stats",
            children: [
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_BytesReceived"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBytesReceivedToDisplay(),
                  }),
                ],
              }),
              this.props.stats.BHasFrameInformation() &&
                (0, a.jsxs)("div", {
                  children: [
                    (0, k.we)("#DASHPlayerStats_DroppedFrames"),
                    " ",
                    (0, a.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetDroppedFramesToDisplay(),
                    }),
                  ],
                }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_VideoBuffered"),
                  " ",
                  (0, a.jsxs)("span", {
                    className: "videoStatsValue",
                    children: [e.GetVideoBufferedToDisplay(), " "],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_AudioBuffered"),
                  " ",
                  (0, a.jsxs)("span", {
                    className: "videoStatsValue",
                    children: [e.GetAudioBufferedToDisplay(), " "],
                  }),
                ],
              }),
              this.createBufferedRange(!0),
              this.createBufferedRange(!1),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_BandwidthRequired"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBandwidthRequiredToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_BandwidthVideo"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBandwithVideoToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_BandwidthNums"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBandwidthStatsToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_DownloadNums"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetDownloadTimeStatsToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_ActiveDownloads"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetActiveDownloadsToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_VideoDownloadProgress"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetVideoDownloadProgressToDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_DroppingFrames"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetPersistentFrameDropsForDisplay(),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, k.we)("#DASHPlayerStats_CurrentFPS"),
                  " ",
                  (0, a.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetCurrentFPSForDisplay(),
                  }),
                ],
              }),
            ],
          });
        }
      };
      U = (0, i.Cg)([r.PA], U);
      var F = s(74872);
      class W extends n.Component {
        constructor(e) {
          super(e),
            (this.m_elSubtitlesButton = n.createRef()),
            (this.m_elSubtitlesPanel = n.createRef()),
            (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
        }
        OnVideoControlClick(e) {
          this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
            (this.m_SettingsButtonPos = [
              this.m_elSettingsButton.offsetLeft,
              this.m_elSettingsButton.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnSubtitlesClick(e) {
          this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
            (this.m_SubtitlesButtonPos = [
              this.m_elSubtitlesButton.current.offsetLeft,
              this.m_elSubtitlesButton.current.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            );
        }
        OnMouseUp(e) {
          this.m_elClickListener.removeEventListener(
            "mouseup",
            this.OnMouseUp,
            !0,
          ),
            (0, T.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, T.id)(this.m_elSubtitlesPanel.current, e.target) ||
              this.setState({ bSubtitlesOpen: !1 });
        }
        bindSettingsButton(e) {
          this.m_elSettingsButton = e;
        }
        BindSettingsPanel(e) {
          this.m_elSettingsPanel = e;
        }
        OnShowStats(e) {
          this.props.onShowStats(e),
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
        }
        render() {
          let e = !1,
            t = !1;
          const { video: s, actions: i } = this.props;
          let o,
            r,
            n = 0,
            l = (0, a.jsx)(
              "div",
              { className: "settingsMenuSeparator" },
              "separator",
            );
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (o = this.props.video.GetVideoRepresentations()),
              (r = o.map((e) =>
                (0, a.jsx)(
                  F.n,
                  {
                    onClick: () => {
                      this.props.video.SetVideoRepresentation(e),
                        this.setState({
                          bSettingsOpen: !this.state.bSettingsOpen,
                        });
                    },
                    bChecked: e.selected,
                    children: e.displayName,
                  },
                  e.id,
                ),
              )),
              r.push(l),
              r.push(
                (0, a.jsxs)(
                  F.D,
                  {
                    onClick: this.OnShowStats,
                    children: [
                      (0, k.we)("#Broadcast_VideoContext_ToggleStats"),
                      "\t",
                    ],
                  },
                  "statsToggle",
                ),
              ),
              (n = 0 - (21 * r.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (r = []),
              r.push(
                (0, a.jsx)(
                  F.n,
                  {
                    onClick: () => {
                      this.props.video.SetSubtitles(null),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    className: "NoSubtitles",
                    bChecked: !1,
                    children: (0, k.we)("#Broadcast_None"),
                  },
                  "none",
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              r.push(
                (0, a.jsx)(
                  F.n,
                  {
                    onClick: () => {
                      this.props.video.SetSubtitles(t.language),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    bChecked: "showing" === t.mode,
                    children: t.label,
                  },
                  t.language,
                ),
              );
            }
            n = -292;
          }
          const d =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return (0, a.jsxs)("div", {
            className: "STV_BroadcastSettings",
            children: [
              d &&
                (0, a.jsx)("div", {
                  className:
                    "videoControlButton" + (d ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                  children: (0, a.jsx)(B.N8C, {}),
                }),
              (0, a.jsx)("div", {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
                children: (0, a.jsx)(B.wB_, {}),
              }),
              (0, a.jsx)(J, { video: s }),
              i &&
                i.map((e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: "videoControlButton videoControlFitWidth",
                      children: e,
                    },
                    e.key,
                  ),
                ),
              e &&
                (0, a.jsx)("div", {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: n,
                  },
                  children: (0, a.jsx)("div", {
                    className: "STV_BroadcastSettingsMenuItems",
                    children: r,
                  }),
                }),
              t &&
                (0, a.jsx)("div", {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: n,
                  },
                  children: (0, a.jsx)("div", {
                    className: "STV_BroadcastSettingsMenuItems",
                    children: r,
                  }),
                }),
            ],
          });
        }
      }
      (0, i.Cg)([p.oI], W.prototype, "OnVideoControlClick", null),
        (0, i.Cg)([p.oI], W.prototype, "OnSubtitlesClick", null),
        (0, i.Cg)([p.oI], W.prototype, "OnMouseUp", null),
        (0, i.Cg)([p.oI], W.prototype, "bindSettingsButton", null),
        (0, i.Cg)([p.oI], W.prototype, "BindSettingsPanel", null),
        (0, i.Cg)([p.oI], W.prototype, "OnShowStats", null);
      const z = !0;
      let J = class extends n.Component {
        constructor(e) {
          super(e),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = z),
            (this.m_schHideSlider = new u.LU()),
            (this.m_bChildDragging = !1),
            (this.m_bMouseOver = !1),
            (0, o.Gn)(this);
        }
        componentWillUnmount() {
          this.m_schHideSlider.Cancel();
        }
        ToggleMute() {
          let e = this.props.video,
            t = e.IsMuted();
          e.SetMute(!t), e.GetVolume() < 0.01 && e.SetVolume(0.5);
        }
        OnMouseEnter(e) {
          (this.m_bShowSlider = !0),
            (this.m_bMouseOver = !0),
            this.m_schHideSlider.Cancel();
        }
        OnMouseLeave(e) {
          (this.m_bMouseOver = !1), this.ScheduleHide();
        }
        OnChildDrag(e) {
          (this.m_bChildDragging = e), this.ScheduleHide();
        }
        ScheduleHide() {
          this.m_bMouseOver ||
            this.m_bChildDragging ||
            this.m_schHideSlider.Schedule(
              this.k_nHideSliderTimeout,
              () => (this.m_bShowSlider = z),
            );
        }
        render() {
          let e = this.props.video,
            t = e.IsMuted(),
            s = 100 * e.GetVolume(),
            i = "videoControlButton";
          s > 65
            ? (i += " HighestVolume")
            : s > 45
              ? (i += " HighVolume")
              : s < 46 && s > 24
                ? (i += " MedVolume")
                : s < 25 && (i += " LowVolume");
          let o = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (o += " ShowVolumeSlider"),
            t && (o += " muted"),
            (0, a.jsx)("div", {
              className: o,
              onMouseEnter: this.OnMouseEnter,
              onMouseLeave: this.OnMouseLeave,
              children: (0, a.jsxs)("div", {
                className: "BroadcastVolumeControl_FixedLayout",
                children: [
                  (0, a.jsx)("div", {
                    className: i,
                    onClick: this.ToggleMute,
                    children: (0, a.jsx)(B.fSs, {}),
                  }),
                  (0, a.jsx)(q, { video: e, onDrag: this.OnChildDrag }),
                ],
              }),
            })
          );
        }
      };
      (0, i.Cg)([o.sH], J.prototype, "m_bShowSlider", void 0),
        (0, i.Cg)([p.oI], J.prototype, "ToggleMute", null),
        (0, i.Cg)([p.oI], J.prototype, "OnMouseEnter", null),
        (0, i.Cg)([p.oI], J.prototype, "OnMouseLeave", null),
        (0, i.Cg)([p.oI], J.prototype, "OnChildDrag", null),
        (J = (0, i.Cg)([r.PA], J));
      let q = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = null),
            (this.m_nVolumeStartOfDrag = 0),
            (0, o.Gn)(this);
        }
        OnMouseDown(e) {
          let t = e.currentTarget;
          (this.m_elSlider = t),
            (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
            this.SetVolumeWithCoord(t, e.clientX),
            t.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            t.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.props.onDrag(!0);
        }
        OnMouseMove(e) {
          this.m_elSlider &&
            this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
        }
        OnMouseUp(e) {
          if (!this.m_elSlider) return;
          this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
          let t = this.props.video;
          t.IsMuted() && t.SetVolume(this.m_nVolumeStartOfDrag),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mousemove",
              this.OnMouseMove,
            ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            (this.m_nVolumeStartOfDrag = 0),
            (this.m_elSlider = null),
            this.props.onDrag(!1);
        }
        SetVolumeWithCoord(e, t) {
          let s = e.getBoundingClientRect(),
            i = P.Fu(t, s.left, s.right, 0, 1),
            a = P.OQ(i, 0, 1),
            o = this.props.video;
          o.SetMute(i < 0.01), o.SetVolume(a);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let s = { left: `${t}%` },
            i = { width: `${t}%` };
          return (0, a.jsxs)("div", {
            className: "BroadcastVolumeSlider",
            onMouseDown: this.OnMouseDown,
            children: [
              (0, a.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
              (0, a.jsx)("div", {
                className: "BroadcastVolumeSlider_Fill",
                style: i,
              }),
              (0, a.jsx)("div", {
                className: "BroadcastVolumeSlider_Thumb",
                style: s,
              }),
            ],
          });
        }
      };
      (0, i.Cg)([p.oI], q.prototype, "OnMouseDown", null),
        (0, i.Cg)([p.oI], q.prototype, "OnMouseMove", null),
        (0, i.Cg)([p.oI], q.prototype, "OnMouseUp", null),
        (0, i.Cg)([o.XI], q.prototype, "SetVolumeWithCoord", null),
        (q = (0, i.Cg)([r.PA], q));
      var K = s(15759);
      const X = 15;
      let $ = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_schHideControls = new u.LU()),
            (this.m_schUnmountControls = new u.LU()),
            (this.m_elVideo = null),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new u.Ji()),
            (this.state = {
              bMountControls: !1,
              bControlsVisible: !1,
              bShowStats: !1,
              video: null,
              nResizedHeight: null,
              bFullscreen: !1,
            });
        }
        StopVideo() {
          var e, t;
          let s = this.state.video;
          s &&
            (h.es.StopVideo(s),
            this.setState({ video: null }),
            null === (t = (e = this.props).fnSetBroadcastVideo) ||
              void 0 === t ||
              t.call(e, null));
        }
        IsMuted() {
          let e = this.state.video;
          return !e || e.IsMuted();
        }
        StopPlaybackTillUserInput() {
          let e = this.state.video;
          e && e.StopPlaybackTillUserInput();
        }
        componentDidUpdate(e, t) {
          !t.bMountControls && this.state.bMountControls
            ? setTimeout(() => {
                this.setState((e) => ({ bControlsVisible: e.bMountControls }));
              }, 15)
            : t.bControlsVisible &&
              !this.state.bControlsVisible &&
              this.state.video &&
              !this.state.video.IsPaused() &&
              this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
            this.props.steamIDBroadcast !== e.steamIDBroadcast &&
              this.BindVideoRef(this.m_elVideo),
            !this.props.nAppIDVOD ||
              (void 0 !== t.strInitialCapsuleImageUrl &&
                e.nAppIDVOD == this.props.nAppIDVOD) ||
              c.A.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = c.A.Get().GetApp(this.props.nAppIDVOD),
                    t =
                      (null == e
                        ? void 0
                        : e.GetAssets().GetMainCapsuleURL()) || "";
                  this.setState({ strInitialCapsuleImageUrl: t });
                });
        }
        componentWillUnmount() {
          this.m_listeners.Unregister(),
            this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.StopVideo();
        }
        BindBroadcastPlayerRef(e) {
          this.m_listeners.Unregister(),
            (this.m_elBroadcastPlayer = e),
            e &&
              (this.m_listeners.AddEventListener(
                e,
                "fullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                e,
                "mozfullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                e,
                "webkitfullscreenchange",
                this.OnFullscreenChange,
              ),
              this.m_listeners.AddEventListener(
                e,
                "msfullscreenchange",
                this.OnFullscreenChange,
              ));
        }
        BindVideoRef(e) {
          var t, s;
          let i;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (i = h.es.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (i = h.es.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((i = h.es.CreateVODVideo(
                    e,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    i.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            i &&
              (this.props.bStartMuted && i.SetMute(!0),
              this.props.bStartWithSubtitles && i.SetStartWithSubtitles(!0),
              this.props.bStartPaused
                ? i.StopPlaybackTillUserInput()
                : i.Play()),
            this.setState({ video: i }),
            null === (s = (t = this.props).fnSetBroadcastVideo) ||
              void 0 === s ||
              s.call(t, i),
            (this.m_elVideo = e);
        }
        OnMouseDown(e) {
          (this.m_bMouseDown = !0),
            (this.m_elMouseDown = e.currentTarget),
            this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp,
            );
        }
        OnMouseUp(e) {
          (this.m_bMouseDown = !1),
            this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp,
            ),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseMove(e) {
          this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.state.bMountControls
              ? this.state.bControlsVisible ||
                this.setState({ bControlsVisible: !0 })
              : this.setState({ bMountControls: !0 }),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseLeave(e) {
          this.HideControls();
        }
        HideControls() {
          this.state.bControlsVisible &&
            !this.m_bMouseDown &&
            this.setState({ bControlsVisible: !1 });
        }
        UmountControls() {
          this.setState((e) => {
            if (!e.bControlsVisible && e.bMountControls)
              return { bMountControls: !1 };
          });
        }
        ShowStatsView() {
          let e = this.state.video;
          e &&
            (this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0)));
        }
        OnContextMenu(e) {
          this.state.bFullscreen ||
            ((0, l.lX)(
              (0, a.jsx)(S.tz, { children: this.GetContextMenuItems() }),
              e,
            ),
            e.preventDefault());
        }
        ToggleStatsView(e) {
          let t = !this.state.bShowStats;
          this.setState({ bShowStats: t });
          let s = this.state.video;
          s && s.SetStatsViewIsVisible(t);
        }
        ShowStorePage(e) {
          let t = this.state.video;
          if (!t || !this.props.onOpenLinkInNewWindow) return;
          let s = t.GetBroadcastInfo();
          if (!s) return;
          let i = (0, m.k2)(`${O.TS.STORE_BASE_URL}app/${s.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, i), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let s = t.GetBroadcastInfo();
          return (
            e.push(
              (0, a.jsx)(
                S.IK,
                {
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                  children: (0, k.we)("#Broadcast_VideoContext_ToggleStats"),
                },
                "togglestats",
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != h.fO &&
              e.push(
                (0, a.jsx)(
                  S.kt,
                  {
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                    children: (0, k.we)("#Broadcast_VideoContext_OpenStore"),
                  },
                  "visitstore",
                ),
              ),
            e
          );
        }
        CloseStats() {
          let e = this.state.video;
          e &&
            this.state.bShowStats &&
            (this.setState({ bShowStats: !1 }), e.SetStatsViewIsVisible(!1));
        }
        OnToggleFullscreen() {
          this.m_elBroadcastPlayer &&
            ((0, T.ww)(this.m_elBroadcastPlayer)
              ? (0, T.MS)(this.m_elBroadcastPlayer)
              : (0, T.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, T.ww)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            h.es.GetBroadcastState(e) == h.fK.Error
          );
        }
        render() {
          var e;
          const t = this.state.video,
            s = t && t.IsPaused(),
            i = t && t.BHasDASHStats() && this.state.bShowStats,
            o = Boolean(t && t.IsReplay()),
            r = this.state.bMountControls,
            n = this.state.bControlsVisible || s,
            l = t && t.GetUserInputNeeded(),
            d =
              (null == t ? void 0 : t.IsBroadcastVOD()) &&
              l &&
              this.state.strInitialCapsuleImageUrl;
          let m = "videoContainer";
          n || (m += " HidePlayerControls"),
            s && (m += " VideoPaused"),
            this.state.bFullscreen && (m += " fullscreenVideo"),
            this.props.classes && (m += " " + this.props.classes);
          let h = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (h = h.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              h.push(
                (0, a.jsx)(
                  "div",
                  {
                    onClick: this.props.onTheaterMode,
                    title: (0, k.we)("#Broadcast_View_Theater"),
                    className: "BroadcastTheaterToggle",
                  },
                  "ChatPosToggle ChatTheaterToggle",
                ),
              ),
            h.push(
              (0, a.jsx)(
                "div",
                {
                  title: (0, k.we)("#Broadcast_View_Fullscreen"),
                  onClick: this.OnToggleFullscreen,
                  className: "BroadcastFullscreenToggle",
                },
                "FullscreenToggle",
              ),
            );
          const c = r && !this.BHideVideoControls(),
            p = r && !this.state.bFullscreen,
            u =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return (0, a.jsxs)("div", {
            ref: this.BindBroadcastPlayerRef,
            className: m,
            onMouseMove: this.OnMouseMove,
            onClick: this.OnMouseMove,
            onMouseLeave: this.OnMouseLeave,
            onContextMenu: this.OnContextMenu,
            onMouseDown: this.OnMouseDown,
            children: [
              u &&
                (0, a.jsx)("div", {
                  className: R().BroadcastContext,
                  children: u,
                }),
              o && (0, a.jsx)(H, {}),
              this.props.showVideoBackgroundBlur &&
                (0, a.jsx)(_, {
                  className: "videoBlur",
                  elementRef: this.m_elVideo,
                  updateRate: 33,
                  width: 320,
                  height: 180,
                  reductionFactor: 10,
                  blurAmount: 5,
                }),
              (0, a.jsx)("video", {
                className: "videoSrc",
                ref: this.BindVideoRef,
                muted: null === (e = this.props.bMuted) || void 0 === e || e,
                autoPlay: !0,
                playsInline: !0,
                controls: !1,
                onVolumeChange: this.props.fnVolumeChanged,
                onClick: this.props.fnVideoClick,
              }),
              this.props.linkRegions
                ? (0, a.jsx)(me, {
                    linkRegions: this.props.linkRegions,
                    editMode: this.props.editMode,
                    onSaveLinkRegions: this.props.onSaveLinkRegions,
                  })
                : null,
              this.props.linkElement,
              d &&
                (0, a.jsx)("img", {
                  loading: "lazy",
                  className: (0, b.A)(
                    R().BroadcastPlaceholderImg,
                    "BroadcastPlaceholderImg",
                  ),
                  src: this.state.strInitialCapsuleImageUrl,
                }),
              c &&
                (0, a.jsx)(Y, {
                  video: t,
                  actions: h,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                  onShowStats: this.ToggleStatsView,
                  bIncludeClipEditor: this.props.bIncludeClipEditor,
                }),
              p && (0, a.jsx)(Z, { onClick: this.props.onRequestClose }),
              i &&
                (0, a.jsx)(N, {
                  stats: t.GetDASHPlayerStats(),
                  closeStats: this.CloseStats,
                }),
              (0, a.jsx)(L, { video: t }),
              l && (0, a.jsx)(j, { video: t }),
            ],
          });
        }
      };
      (0, i.Cg)([p.oI], $.prototype, "BindBroadcastPlayerRef", null),
        (0, i.Cg)([p.oI], $.prototype, "BindVideoRef", null),
        (0, i.Cg)([p.oI], $.prototype, "OnMouseDown", null),
        (0, i.Cg)([p.oI], $.prototype, "OnMouseUp", null),
        (0, i.Cg)([p.oI], $.prototype, "OnMouseMove", null),
        (0, i.Cg)([p.oI], $.prototype, "OnMouseLeave", null),
        (0, i.Cg)([p.oI], $.prototype, "HideControls", null),
        (0, i.Cg)([p.oI], $.prototype, "UmountControls", null),
        (0, i.Cg)([p.oI], $.prototype, "ShowStatsView", null),
        (0, i.Cg)([p.oI], $.prototype, "OnContextMenu", null),
        (0, i.Cg)([p.oI], $.prototype, "ToggleStatsView", null),
        (0, i.Cg)([p.oI], $.prototype, "ShowStorePage", null),
        (0, i.Cg)([p.oI], $.prototype, "CloseStats", null),
        (0, i.Cg)([p.oI], $.prototype, "OnToggleFullscreen", null),
        (0, i.Cg)([p.oI], $.prototype, "OnFullscreenChange", null),
        ($ = (0, i.Cg)([r.PA], $));
      const Q = $;
      let Y = class extends n.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return (0, a.jsxs)("div", {
            className: "videoControls",
            children: [
              (0, a.jsx)(le, {
                steamID: this.props.video.GetBroadcastSteamID(),
                bHideThumbnail: !0,
                bVerticalBroadcastChat: !0,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
              }),
              (0, a.jsxs)("div", {
                className: "videoControlsBottom" + (t ? "" : " noSegments"),
                children: [
                  (0, a.jsx)(ne, {
                    video: e,
                    bIncludeClipEditor: this.props.bIncludeClipEditor,
                  }),
                  (0, a.jsxs)("div", {
                    className: "STV_BroadcastController",
                    children: [
                      (0, a.jsx)("div", {
                        className: "videoControlsButtons LeftSpacer",
                      }),
                      (0, a.jsx)(ee, { video: e }),
                      (0, a.jsx)(te, { video: e }),
                      (0, a.jsx)(W, {
                        video: e,
                        actions: this.props.actions,
                        onShowStats: this.props.onShowStats,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      };
      Y = (0, i.Cg)([r.PA], Y);
      class Z extends n.PureComponent {
        render() {
          return this.props.onClick
            ? (0, a.jsx)("div", {
                className: "STV_BroadcastClose",
                onClick: this.props.onClick,
                children: (0, a.jsx)(B.sED, {}),
              })
            : null;
        }
      }
      class ee extends n.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(X);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return (0, a.jsxs)("div", {
            className: "videoControlsButtons PlayControls",
            children: [
              (0, a.jsx)(ie, { video: e }),
              t &&
                (0, a.jsxs)("div", {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                  children: [
                    (0, a.jsx)(B.tID, {
                      bHidePostArrow: !0,
                      bHidePreArrow: !0,
                      bShowJumpAheadBox: !0,
                      bFlipHorizontal: !0,
                    }),
                    (0, a.jsx)("div", {
                      className: "jumpAheadValue",
                      children: X,
                    }),
                  ],
                }),
              (0, a.jsx)(se, { video: e }),
              t &&
                (0, a.jsxs)("div", {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                  children: [
                    (0, a.jsx)(B.tID, {
                      bHidePostArrow: !0,
                      bHidePreArrow: !0,
                      bShowJumpAheadBox: !0,
                      bFlipHorizontal: !1,
                    }),
                    (0, a.jsx)("div", {
                      className: "jumpAheadValue",
                      children: X,
                    }),
                  ],
                }),
              t && (0, a.jsx)(ae, { video: e }),
            ],
          });
        }
      }
      (0, i.Cg)([p.oI], ee.prototype, "OnJumpBackward", null),
        (0, i.Cg)([p.oI], ee.prototype, "OnJumpForward", null);
      const te = (0, r.PA)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return (0, a.jsx)("div", {
          className: "videoControlsButtons GoLive",
          children: (0, a.jsxs)("div", {
            className:
              "videoControlButton videoControlGoLive" +
              (t ? " isLiveEdge" : ""),
            onClick: t
              ? null
              : (t) => {
                  e.video.JumpToLiveEdge();
                },
            children: [
              (0, a.jsx)(B.tID, {
                bHidePreArrow: !0,
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
              (0, a.jsx)("div", {
                className: "jumpGoLive",
                children: (0, k.we)(
                  t
                    ? "#DASHPlayerControls_IsLive"
                    : "#DASHPlayerControls_GoLive",
                ),
              }),
            ],
          }),
        });
      });
      let se = class extends n.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return (0, a.jsx)("div", {
            className: "videoControlButton buttonPlayPause",
            onClick: this.OnTogglePlayPause,
            children: e ? (0, a.jsx)(B.jGG, {}) : (0, a.jsx)(B.vRz, {}),
          });
        }
      };
      (0, i.Cg)([p.oI], se.prototype, "OnTogglePlayPause", null),
        (se = (0, i.Cg)([r.PA], se));
      let ie = class extends n.Component {
        constructor(e) {
          super(e),
            (this.video = void 0),
            (0, o.Gn)(this),
            (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        get has_previous_marker() {
          return void 0 !== this.GetPreviousMarkerTime();
        }
        GetPreviousMarkerTime() {
          if (!this.video.has_markers) return;
          let e = this.video.GetTimelineMarkers(),
            t = this.video.GetPlaybackTime();
          for (let s = e.length - 1; s >= 0; s--)
            if (!(e[s].nTime >= t)) return e[s].nTime;
        }
        OnJumpToPreviousMarkerClicked(e) {
          let t = this.GetPreviousMarkerTime();
          void 0 !== t && this.props.video.Seek(t - 0.2);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return (0, a.jsx)("div", {
            className:
              "videoControlButton jumpToMarker controlFlip" +
              (e ? "" : " noMarkersOrSegments") +
              (this.has_previous_marker ? "" : " noMarkersInDirection"),
            onClick: this.OnJumpToPreviousMarkerClicked,
            children: (0, a.jsx)(B.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !0,
            }),
          });
        }
      };
      (0, i.Cg)([o.sH], ie.prototype, "video", void 0),
        (0, i.Cg)([o.EW], ie.prototype, "has_previous_marker", null),
        (0, i.Cg)([p.oI], ie.prototype, "OnJumpToPreviousMarkerClicked", null),
        (ie = (0, i.Cg)([r.PA], ie));
      let ae = class extends n.Component {
        constructor(e) {
          super(e),
            (this.video = void 0),
            (0, o.Gn)(this),
            (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        get has_next_marker() {
          return void 0 !== this.GetNextMarkerTime();
        }
        GetNextMarkerTime() {
          if (!this.video.has_markers) return;
          let e = this.video.GetTimelineMarkers(),
            t = this.video.GetPlaybackTime();
          for (let s = 0; s < e.length; s++)
            if (!(e[s].nTime <= t)) return e[s].nTime;
        }
        OnJumpToNextMarkerClicked(e) {
          let t = this.GetNextMarkerTime();
          void 0 !== t && this.props.video.Seek(t);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return (0, a.jsx)("div", {
            className:
              "videoControlButton jumpToMarker" +
              (e ? "" : " noMarkersOrSegments") +
              (this.has_next_marker ? "" : " noMarkersInDirection"),
            onClick: this.OnJumpToNextMarkerClicked,
            children: (0, a.jsx)(B.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
          });
        }
      };
      (0, i.Cg)([o.sH], ae.prototype, "video", void 0),
        (0, i.Cg)([o.EW], ae.prototype, "has_next_marker", null),
        (0, i.Cg)([p.oI], ae.prototype, "OnJumpToNextMarkerClicked", null),
        (ae = (0, i.Cg)([r.PA], ae));
      const oe = (e) =>
        (0, a.jsx)("div", {
          className: "timelineMarker",
          title: e.label,
          style: { left: e.pos + "%" },
          onMouseEnter: () => e.onMouseEnter(e.pos),
          onMouseLeave: e.onMouseLeave,
          onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          children: (0, a.jsx)("div", {
            className: "timelineMarkerIcon",
            children: (0, a.jsx)(B.Dp6, {}),
          }),
        });
      function re(e) {
        let t = e.startPos,
          s = e.endPos,
          i = "",
          o = 1;
        return (
          t < 0 && ((o = (s - t) / 10), (t = 0), (i = " hideFront")),
          (0, a.jsxs)("div", {
            className: "STV_timelineSegment" + i,
            style: { left: t + "%", width: s - t + "%", opacity: o },
            onClick: e.onClick,
            children: [
              (0, a.jsx)("div", {
                className: "STV_timelineSegmentFrontFill",
                style: { borderColor: "rgb(" + e.color + ")" },
              }),
              (0, a.jsx)("div", {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
                children: e.label,
              }),
              (0, a.jsx)("div", {
                className: "STV_timelineSegmentBackFill",
                style: { borderColor: "rgb(" + e.color + ")" },
              }),
            ],
          })
        );
      }
      let ne = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = n.createRef()),
            (this.m_rectSlider = void 0),
            (this.state = {
              nGrabberMouseDownTime: 0,
              bGrabberMouseDown: !1,
              nHoverValue: void 0,
              hoverX: 0,
              bStartMouseDown: !1,
              bEndMouseDown: !1,
              thumbnailURL: "",
            });
        }
        OnMouseDown(e, t) {
          if (this.m_elSlider) {
            e.persist(),
              (this.m_rectSlider =
                this.m_elSlider.current &&
                this.m_elSlider.current.getBoundingClientRect());
            let s = {};
            "start" === t
              ? ((s = { bStartMouseDown: !0 }), e.stopPropagation())
              : "end" === t
                ? ((s = { bEndMouseDown: !0 }), e.stopPropagation())
                : (s = { bGrabberMouseDown: !0 }),
              this.setState(s, () => this.AdjustSliderForClientX(e.clientX)),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
        }
        OnMouseMove(e) {
          this.AdjustSliderForClientX(e.clientX);
        }
        OnMouseUp(e) {
          this.state.bStartMouseDown
            ? this.setState({ bStartMouseDown: !1 })
            : this.state.bEndMouseDown
              ? this.setState({ bEndMouseDown: !1 })
              : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                this.setState({
                  bGrabberMouseDown: !1,
                  nGrabberMouseDownTime: 0,
                })),
            this.m_elSlider.current &&
              (this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ));
        }
        OnKeyDown(e) {
          e.keyCode == d.ek
            ? (this.props.video.JumpTime(-15), e.preventDefault())
            : e.keyCode == d.JI &&
              (this.props.video.JumpTime(15), e.preventDefault());
        }
        AdjustSliderForClientX(e) {
          let t = this.props.video,
            s = t.GetTimelineStartPos(),
            i = t.GetTimelineStartPos() + t.GetTimelineDuration(),
            a = t.GetTimeAtMousePosition(e, this.m_rectSlider, s, i);
          if (this.state.bStartMouseDown) {
            const e = P.OQ(a, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = P.OQ(a, t.m_editorStartTime + 5, i);
            t.m_editorEndTime = e;
          } else
            a != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: a });
        }
        OnMouseHoverMove(e) {
          this.AdjustHoverForClientX(e.clientX);
        }
        OnMouseHoverLeave(e) {
          this.setState({ hoverX: 0 });
        }
        AdjustHoverForClientX(e) {
          let t = this.props.video,
            s = t.GetTimelineStartPos(),
            i = t.GetTimelineStartPos() + t.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          t.GetTimeAtMousePosition(e, this.m_rectSlider, s, i);
        }
        OnSegmentClick(e) {
          this.props.video.Seek(e);
        }
        OnMarkerMouseEnter(e) {
          this.setState({ nHoverValue: e });
        }
        OnMarkerMouseLeave() {
          this.setState({ nHoverValue: void 0 });
        }
        render() {
          let e = this.props.video,
            t = this.state.bGrabberMouseDown,
            s = e.GetPercentOffsetFromTime(
              this.state.nGrabberMouseDownTime,
              h.a0.Timeline,
            ),
            i = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), h.a0.Timeline),
            o = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              h.a0.Timeline,
            );
          o < 0.05 && (o = 0);
          let r = P.OQ(s, 0, 100).toFixed(1) + "%",
            n = P.OQ(i, 0, 100).toFixed(1) + "%",
            l = P.OQ(o, 0, 100).toFixed(1) + "%",
            d = {},
            m = {},
            c = {},
            p = {};
          t
            ? ((p.left = r), (d.width = r), (m.width = n), (c.width = l))
            : ((p.left = n), (m.width = n), (c.width = l));
          let u = (0, G.ap)(e.GetPlaybackTime()),
            _ = (0, G.ap)(this.state.nHoverValue),
            S = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (S += " grabberDown"),
            e.IsTimelineMapActive() && (S += " minimapActive");
          let g = "";
          (s = t ? s : i),
            s > 100
              ? (g = " grabberOffScreenRight grabberOffscreen")
              : s < 0 && (g = " grabberOffScreenLeft grabberOffscreen");
          let v = [];
          e.GetTimelineMarkers().forEach((t, s) => {
            let i = e.GetPercentOffsetFromTime(t.nTime, h.a0.Timeline);
            i < 0 ||
              i > 100 ||
              v.push(
                (0, a.jsx)(
                  oe,
                  {
                    pos: i,
                    label: t.strTemplateName,
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                  },
                  s,
                ),
              );
          });
          let b = [];
          e.GetTimelineSegments().forEach((t, s) => {
            let i = e.GetPercentOffsetFromTime(t.nTimeStart, h.a0.Timeline);
            if (i > 100) return;
            let o = e.GetPercentOffsetFromTime(t.nTimeEnd, h.a0.Timeline);
            o < 0 ||
              b.push(
                (0, a.jsx)(
                  re,
                  {
                    startPos: i,
                    endPos: o,
                    label: t.strTemplateName,
                    color: t.color,
                    onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                  },
                  s,
                ),
              );
          });
          const C = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              h.a0.Timeline,
            ),
            y = e.GetPercentOffsetFromTime(e.m_editorEndTime, h.a0.Timeline),
            f = this.props.bIncludeClipEditor
              ? [
                  (0, a.jsx)(
                    oe,
                    {
                      pos: C,
                      label: (0, k.we)("#DASHPlayerControls_Start"),
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                      onMouseDown: (e) => this.OnMouseDown(e, "start"),
                    },
                    "start",
                  ),
                  (0, a.jsx)(
                    oe,
                    {
                      pos: y,
                      label: (0, k.we)("#DASHPlayerControls_End"),
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                      onMouseDown: (e) => this.OnMouseDown(e, "end"),
                    },
                    "end",
                  ),
                ]
              : [];
          return (0, a.jsx)("div", {
            className: "videoTimelineMain",
            tabIndex: 0,
            onKeyDown: this.OnKeyDown,
            children: (0, a.jsxs)("div", {
              className: S,
              children: [
                (0, a.jsx)("div", { className: "DialogLabel", children: u }),
                (0, a.jsx)("div", {
                  className: "STV_timelineSegmentsContainer",
                  children: b,
                }),
                (0, a.jsx)("div", {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                  children: (0, a.jsxs)("div", {
                    className: "VideoTimelineSlider",
                    children: [
                      (0, a.jsx)("div", {
                        className: "STV_timelineValue",
                        style: d,
                      }),
                      (0, a.jsx)("div", {
                        className: "STV_timelineGhostValue",
                        style: m,
                      }),
                      (0, a.jsx)("div", {
                        className: "STV_timelineNoVideo",
                        style: c,
                      }),
                      v,
                      f,
                      Boolean(this.state.hoverX) &&
                        (0, a.jsx)(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              left: this.state.hoverX - 75,
                              bottom: "30px",
                            },
                            children: (0, a.jsxs)("div", {
                              style: {
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                              },
                              children: [
                                this.state.thumbnailURL &&
                                  (0, a.jsx)("img", {
                                    style: { width: "150px" },
                                    src: this.state.thumbnailURL,
                                  }),
                                (0, a.jsx)("span", {
                                  className: "STV_timelineGrabberValue",
                                  style: {
                                    position: "absolute",
                                    bottom: "4px",
                                  },
                                  children: _,
                                }),
                              ],
                            }),
                          },
                          "grabbertime",
                        ),
                      (0, a.jsx)("div", {
                        className: "STV_timelineGrabber_Wrapper",
                        style: p,
                        children: (0, a.jsx)("div", {
                          className: "STV_timelineGrabber" + g,
                          children: (0, a.jsx)("div", {
                            className: "STV_timelineGrabberArrow",
                            children: (0, a.jsx)(B.apU, {}),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
      };
      (0, i.Cg)([p.oI], ne.prototype, "OnMouseDown", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnMouseMove", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnMouseUp", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnKeyDown", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnMouseHoverMove", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnMouseHoverLeave", null),
        (0, i.Cg)([p.oI], ne.prototype, "AdjustHoverForClientX", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnSegmentClick", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnMarkerMouseEnter", null),
        (0, i.Cg)([p.oI], ne.prototype, "OnMarkerMouseLeave", null),
        (ne = (0, i.Cg)([r.PA], ne));
      let le = class extends n.Component {
        constructor() {
          super(...arguments), (this.state = { info: null });
        }
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (h.es.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: h.es.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && h.es.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return x.td.stream[e]
            ? (0, a.jsx)(de, {
                value: e,
                options: x.td.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = (0, M.Dq)(e.m_nViewerCount));
          let s =
              x.td.bValid && x.td.stream && x.td.stream[e.m_steamIDBroadcast],
            i =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || s);
          const o =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            s &&
            x.td.gidEvent;
          return (0, a.jsxs)("div", {
            className: "BroadcastDetails",
            children: [
              !this.props.bHideThumbnail &&
                (0, a.jsx)(f, {
                  className: "broadcastDetailsThumbBlur",
                  src: e.m_strThumbnailUrl,
                  draggable: !1,
                  duration: 2500,
                }),
              (0, a.jsxs)("div", {
                className: "BroadcastDetailsHeader",
                children: [
                  e &&
                    e.m_strAppTitle &&
                    (0, a.jsxs)("div", {
                      className: "displayColumn",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "Info",
                          children: [
                            (0, a.jsx)("span", {
                              className: "AppTitle",
                              children: e.m_strAppTitle,
                            }),
                            e.m_strTitle &&
                              (0, a.jsxs)("span", {
                                className: "BroadcastTitle",
                                children: [" - ", e.m_strTitle],
                              }),
                            this.props.onLocalStreamChange &&
                              this.RenderStreamSwitcher(),
                          ],
                        }),
                        t &&
                          (0, a.jsxs)("div", {
                            className: "BroadcastDetailsHeader_ViewerCount",
                            children: [
                              (0, a.jsx)(B.y_e, {}),
                              (0, k.Yp)("#Broadcast_ViewerCount", t),
                            ],
                          }),
                      ],
                    }),
                  s &&
                    this.props.onOpenLinkInNewWindow &&
                    (0, a.jsx)("div", {
                      className: "Actions",
                      children: (0, a.jsx)("div", {
                        onClick: (e) =>
                          this.props.onOpenLinkInNewWindow(e, x.td.link),
                        className: "BroadcastLink",
                        children: x.td.linkName,
                      }),
                    }),
                ],
              }),
              o && (0, a.jsx)(w.m, { gidEvent: x.td.gidEvent }),
              i &&
                (0, a.jsx)(D.p, {
                  id:
                    x.td.bValid &&
                    x.td.stream &&
                    x.td.stream[e.m_steamIDBroadcast]
                      ? x.td.appID
                      : parseInt(e.m_strAppId),
                  type: "game",
                  bPreferAssetWithoutOverride: !1,
                }),
            ],
          });
        }
      };
      le = (0, i.Cg)([r.PA], le);
      class de extends n.Component {
        showContextMenu(e) {
          const { options: t, value: s, onChange: i } = this.props,
            o = Object.keys(t).map((e) =>
              (0, a.jsx)(
                S.IK,
                {
                  onSelected: () => i(e),
                  bChecked: e === s,
                  children: (0, k.we)(t[e]),
                },
                e,
              ),
            );
          (0, l.lX)((0, a.jsx)(S.tz, { children: o }), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return (0, a.jsxs)("div", {
            className: "BroadcastLanguage",
            onClick: this.showContextMenu,
            children: [
              (0, a.jsxs)("span", { children: [" - ", (0, k.we)(s)] }),
              (0, a.jsx)("div", {
                className: "ContextMenuButton",
                children: (0, a.jsx)(B.GB9, {}),
              }),
            ],
          });
        }
      }
      (0, i.Cg)([p.oI], de.prototype, "showContextMenu", null);
      let me = class extends n.Component {
        constructor(e) {
          super(e), (this.state = { sizableRegion: [] });
        }
        async AddLinkRegion() {
          let e = this.state.sizableRegion.length;
          this.state.sizableRegion.push({
            xPosPct: 2.5 + e,
            yPosPct: 2.5 + e,
            widthPct: 20,
            heightPct: 15,
          }),
            this.setState({ sizableRegion: this.state.sizableRegion }, () =>
              this.OnSaveRegions(),
            );
        }
        componentDidUpdate(e) {
          0 == e.linkRegions.length &&
            this.props.linkRegions.forEach((e, t) => {
              this.LoadLinkRegion(e, t);
            });
        }
        async LoadLinkRegion(e, t) {
          this.state.sizableRegion.length;
          this.state.sizableRegion.push({
            xPosPct: e.left,
            yPosPct: e.top,
            widthPct: e.width,
            heightPct: e.height,
            link_url: e.url,
            link_description: e.link_description,
            link_index: e.link_index,
          }),
            await this.setState({ sizableRegion: this.state.sizableRegion });
        }
        OnSaveRegions() {
          let e;
          e = { links: [] };
          for (let t = 0; t < this.state.sizableRegion.length; t++) {
            let s;
            (s = {
              left: Math.floor(100 * this.state.sizableRegion[t].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[t].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[t].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[t].heightPct),
              url: this.state.sizableRegion[t].link_url,
              link_description: this.state.sizableRegion[t].link_description,
              link_index: t,
            }),
              e.links.push(s);
          }
          this.props.onSaveLinkRegions(e);
        }
        async DeleteRegion(e) {
          this.state.sizableRegion.splice(e, 1),
            console.log("keys: ", this.state.sizableRegion.keys),
            this.setState({ sizableRegion: this.state.sizableRegion }, () =>
              this.OnSaveRegions(),
            );
        }
        async UpdatePanel(e, t) {
          const s = [...this.state.sizableRegion];
          (s[e] = t),
            this.setState({ sizableRegion: s }, () => this.OnSaveRegions());
        }
        render() {
          return (0, a.jsxs)("div", {
            className: "LinkOverlayContainer",
            children: [
              (0, a.jsxs)("div", {
                className: "LinkOverlayValidRegion",
                children: [
                  !this.props.editMode && this.props.linkRegions
                    ? this.props.linkRegions.map((e) => {
                        const t = (0, K.p)(e.url);
                        return (0, a.jsx)(
                          V.uU,
                          {
                            href: e.url,
                            bForceExternal: t,
                            bUseLinkFilter: t,
                            children: (0, a.jsx)("div", {
                              className: "LinkRegion",
                              style: {
                                left: e.left + "%",
                                top: e.top + "%",
                                width: e.width + "%",
                                height: e.height + "%",
                              },
                              children: (0, a.jsxs)("div", {
                                className: "LinkRegionText",
                                children: [e.link_description, " "],
                              }),
                            }),
                          },
                          e.link_index,
                        );
                      })
                    : null,
                  this.props.editMode &&
                    this.state.sizableRegion.map((e, t) =>
                      (0, a.jsx)(
                        I.I,
                        {
                          index: t,
                          deleteFn: this.DeleteRegion,
                          updateFn: this.UpdatePanel,
                          xPosPct: e.xPosPct,
                          yPosPct: e.yPosPct,
                          widthPct: e.widthPct,
                          heightPct: e.heightPct,
                          link_url: e.link_url,
                          link_description: e.link_description,
                        },
                        100 * t + e.xPosPct,
                      ),
                    ),
                  this.props.editMode &&
                    (0, a.jsx)("div", {
                      className: "AddLinkRegion",
                      onClick: this.AddLinkRegion,
                      children: (0, k.we)("#SteamTV_AddLinkRegion"),
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "LinkOverlayInvalidRegion",
                children: (0, a.jsx)("div", {
                  children: (0, k.we)("#SteamTV_LinkRegionReserved"),
                }),
              }),
            ],
          });
        }
      };
      (0, i.Cg)([p.oI], me.prototype, "AddLinkRegion", null),
        (0, i.Cg)([p.oI], me.prototype, "LoadLinkRegion", null),
        (0, i.Cg)([p.oI], me.prototype, "OnSaveRegions", null),
        (0, i.Cg)([p.oI], me.prototype, "DeleteRegion", null),
        (0, i.Cg)([p.oI], me.prototype, "UpdatePanel", null),
        (me = (0, i.Cg)([r.PA], me));
    },
    34010: (e, t, s) => {
      "use strict";
      s.d(t, {
        M5: () => v,
        MU: () => y,
        MX: () => D,
        Rt: () => C,
        U7: () => f,
        fn: () => g,
        j: () => b,
      });
      var i = s(34629),
        a = s(16021),
        o = s(41735),
        r = s.n(o),
        n = s(14947),
        l = s(37085),
        d = s(17720),
        m = s(45285),
        h = s(54728),
        c = s(44165),
        p = s(68033),
        u = s(68797),
        _ = s(78327),
        S = s(75515);
      function g(e) {
        return Boolean(e && e.thumbnail_http_address);
      }
      function v(e, t) {
        if (t || e) {
          const s = t || e;
          return Boolean(s && b.Get().BIsAppStreaming(s));
        }
        return !1;
      }
      class b {
        constructor() {
          (this.m_inFlightRequests = new Map()),
            (this.m_lookupKeyToEmbedStreamDef = new Map()),
            (this.m_lookupStreams = new Map()),
            (this.m_playReadyStream = new Map()),
            (this.m_bMapHasStartedVideo = new Map()),
            (this.m_mapBroadcastChecked = new Map()),
            (this.m_pageChatStatus = "hide"),
            (this.m_streamChatStatus = "hide"),
            (this.m_bUserChatExpanded = void 0),
            (this.m_bUserPreferenceHideBroadcastByDefault = void 0),
            (this.m_bCollapsed = void 0),
            (this.m_setStreamChangedListeners = new Set()),
            (this.m_bUseFakeData = !1),
            (this.m_onLoadContextCall = new Map()),
            (0, n.Gn)(this);
        }
        BHasStreams(e) {
          const t = this.GetStreams(e);
          return Boolean(t && t.length > 0);
        }
        AddCallbackOnNewContext(e, t, s) {
          this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), {
            name: t,
            fnCallback: s,
          });
        }
        ClearCallbackOnNewContext(e) {
          this.m_onLoadContextCall.set(
            this.GetStreamsLookupKeyFromDef(e),
            null,
          );
        }
        GetPlayReadyStream(e) {
          let t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_playReadyStream.get(t);
        }
        BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(e) {
          this.m_bCollapsed != e && (this.m_bCollapsed = e);
        }
        GetConcurrentStreams(e) {
          const t = this.GetStreams(e);
          return t ? t.filter((e) => g(e)).length : 0;
        }
        GetChatVisibility() {
          return "remove" === this.m_pageChatStatus ||
            "remove" === this.m_streamChatStatus
            ? "remove"
            : void 0 !== this.m_bUserChatExpanded
              ? this.m_bUserChatExpanded
                ? "show"
                : "hide"
              : "show" === this.m_pageChatStatus
                ? "show"
                : "hide" === this.m_pageChatStatus ||
                    "hide" === this.m_streamChatStatus
                  ? "hide"
                  : "show";
        }
        ToggleChatVisibility() {
          const e = this.GetChatVisibility();
          "remove" !== e && (this.m_bUserChatExpanded = "hide" === e);
        }
        DebugDumpContextAndAvailableContext(e) {
          console.log("Requested context", this.GetStreamsLookupKeyFromDef(e)),
            console.log("Available context count: ", this.m_lookupStreams.size),
            this.m_lookupStreams.forEach((e, t) => {
              console.log(t, e.length);
            });
        }
        GetStreams(e) {
          const t = this.GetStreamsLookupKeyFromDef(e);
          return this.m_lookupStreams.get(t);
        }
        GetBroadcastURL(e) {
          let t = null;
          return (
            (t = e.steamid
              ? new d.b(e.steamid)
              : d.b.InitFromAccountID(e.accountid)),
            _.TS.COMMUNITY_BASE_URL +
              "broadcast/watch/" +
              t.ConvertTo64BitString()
          );
        }
        BIsAppStreaming(e) {
          let t = !1;
          return (
            this.m_lookupStreams.forEach((s) => {
              t ||
                (t =
                  Boolean(s) &&
                  s.some(
                    (t) =>
                      h.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e,
                  ));
            }),
            t
          );
        }
        GetStreamsForAppID(e) {
          const t = new Array();
          return (
            this.m_lookupStreams.forEach((s) => {
              null == s ||
                s.forEach((s) => {
                  h.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID === e &&
                    t.push(s);
                });
            }),
            t
          );
        }
        AddStreamChangedListener(e) {
          this.m_setStreamChangedListeners.add(e);
        }
        RemoveStreamChangedListener(e) {
          this.m_setStreamChangedListeners.delete(e);
        }
        async LoadBIsEmbeddedBroadcastHidden(e) {
          if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
            let t = (0, _.Tc)("broadcastuser", "application_config");
            if (!t)
              try {
                let s =
                    _.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences",
                  i = await r().get(s, { params: {}, cancelToken: e.token });
                t = i.data;
              } catch (e) {
                console.log(
                  "LoadBIsEmbeddedBroadcastHidden: " + (0, u.H)(e).strErrorMsg,
                ),
                  (t = { bHideStoreBroadcast: !1 });
              }
            (0, n.h5)(() => {
              (this.m_bUserPreferenceHideBroadcastByDefault =
                t.bHideStoreBroadcast),
                (this.m_bCollapsed = t.bHideStoreBroadcast);
            });
          }
          return this.m_bUserPreferenceHideBroadcastByDefault;
        }
        async SetupEmbeddableVOD(e, t) {
          (this.m_bUseFakeData = !1),
            (this.m_streamChatStatus = "remove"),
            await a.A.Get().QueueAppRequest(e.nAppIDVOD, {
              include_assets: !0,
              include_trailers: !0,
            });
          const s = a.A.Get().GetApp(e.nAppIDVOD),
            i = new S.TT();
          if (
            ((i.accountid = 0),
            (i.nAppIDVOD = e.nAppIDVOD),
            (i.default_selection_priority = S.mY.k_ePrimary),
            (i.current_selection_priority = S.mY.k_ePrimary),
            (i.thumbnail_http_address =
              (null == s ? void 0 : s.GetAssets().GetHeaderURL()) || ""),
            (i.title = (null == s ? void 0 : s.GetName()) || ""),
            this.GetStreams(e).unshift(i),
            t)
          ) {
            const t = this.GetStreamsLookupKeyFromDef(e);
            this.m_playReadyStream.set(t, i);
          }
        }
        async HintLoadEmbeddablePreviewStreams(e) {
          let t = null,
            s = {
              eventid: e.event ? e.event.GID : void 0,
              previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
                ? e.accountIDs.slice().sort().join(",")
                : void 0,
            };
          try {
            return (
              (t = await r().get(
                _.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                { params: s },
              )),
              this.HandleHintLoadBroadcastResponse(e, t.data)
            );
          } catch (e) {
            let t = (0, u.H)(e);
            console.error(
              "HintLoadEmbeddablePreviewStreams hit error loading: " +
                t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        async HintLoadEmbeddableStreams(e) {
          let t = this.MapEmbeddableStreamToRequest(e),
            s = this.GetStreamsLookupKeyFromParam(t);
          if (!this.m_inFlightRequests.has(s)) {
            this.m_lookupKeyToEmbedStreamDef.set(s, e);
            const i = this.InternalHintLoadEmbeddableStreams(e, t);
            this.m_inFlightRequests.set(s, i);
          }
          return this.m_inFlightRequests.get(s);
        }
        async InternalHintLoadEmbeddableStreams(e, t) {
          let s = (0, _.Tc)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, S.h7)(s)) return this.HandleHintLoadBroadcastResponse(e, s);
          try {
            let s = null;
            return (
              (s = await r().get(
                _.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                { params: t },
              )),
              this.HandleHintLoadBroadcastResponse(e, s.data)
            );
          } catch (e) {
            let t = (0, u.H)(e);
            console.error(
              "HintLoadEmbeddableStreams hit error loading: " + t.strErrorMsg,
              t,
            );
          }
          return [];
        }
        async HandleHintLoadBroadcastResponse(e, t) {
          var s;
          (this.m_bUseFakeData = !1),
            e.bIsPreview &&
              ((null === (s = null == t ? void 0 : t.filtered) || void 0 === s
                ? void 0
                : s.length) > 0
                ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                    e.event,
                    t.filtered,
                  )
                : ((t = {
                    filtered: [{}],
                    success: 1,
                    total_count: 1,
                    err_msg: "",
                    broadcast_chat_visibility: "hide",
                  }),
                  (this.m_bUseFakeData = !0))),
            t.broadcast_chat_visibility &&
              (this.m_pageChatStatus = t.broadcast_chat_visibility);
          const i = new Array();
          (0, n.h5)(() => {
            t.filtered.forEach((e) => {
              if (!e.steamid) {
                const t = d.b.InitFromAccountID(e.accountid);
                e.steamid = t.ConvertTo64BitString();
              }
              const t = h.es.GetOrCreateBroadcastInfo(e.steamid),
                s = e.appid ? Number(e.appid) : h.fO;
              (t.m_nAppID = s),
                (t.m_strAppId = "" + s),
                void 0 === e.current_selection_priority &&
                  (e.current_selection_priority = e.default_selection_priority),
                s != h.fO && i.push(s);
            });
          });
          const a = this.GetStreamsLookupKeyFromDef(e);
          if (
            (this.m_lookupStreams.set(a, t.filtered),
            this.m_onLoadContextCall.has(a))
          ) {
            const e = this.m_onLoadContextCall.get(a);
            e
              ? ("dev" == _.TS.WEB_UNIVERSE &&
                  console.log(
                    "CBroadcastEmbeddableStore initialized after caller using callback to " +
                      e.name,
                  ),
                e.fnCallback())
              : "dev" == _.TS.WEB_UNIVERSE &&
                console.log(
                  "CBroadcastEmbeddableStore initialized after caller, however callback is since cleared",
                );
          }
          const o = this.GetStreams(e);
          return await this.AutoStartVideoStream(e, o), o;
        }
        ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
          var s, i;
          const a = Array.from(
              null !== (s = e.jsondata.broadcast_whitelist) && void 0 !== s
                ? s
                : [],
            ),
            o = Array.from(
              null !== (i = e.jsondata.broadcast_priority) && void 0 !== i
                ? i
                : [],
            ),
            r = new Map();
          for (let e = 0; e < a.length && !(e >= o.length); e++)
            r.set(a[e], (0, S.PH)(o[e]));
          t.forEach((e) => {
            const t = Number(e.accountid);
            r.has(t) && (e.current_selection_priority = r.get(t));
          });
        }
        async AutoStartVideoStream(e, t) {
          let s = this.GetStreamsLookupKeyFromDef(e);
          if (this.m_bMapHasStartedVideo.get(s)) return null;
          if (this.m_bUseFakeData) {
            if (!this.m_playReadyStream.get(s)) {
              const e = {
                accountid: 0,
                thumbnail_http_address: "",
                default_selection_priority: S.mY.k_eGeneral,
                current_selection_priority: S.mY.k_eGeneral,
              };
              this.m_playReadyStream.set(s, e);
            }
            return this.m_playReadyStream;
          }
          return this.PlayFromAvailableStreams(e, t);
        }
        async PlayFromAvailableStreams(e, t, s = !1) {
          const i = new Set();
          for (;;) {
            const a = t.filter((e) => !(i.has(e) || (s && e.nAppIDVOD))),
              o = this.GetAutoStartStream(a);
            if (!o) return null;
            if (await this.AttemptToPlayStream(e, o)) return o;
            i.add(o);
          }
        }
        async AttemptToPlayStream(e, t) {
          let s = this.GetStreamsLookupKeyFromDef(e);
          if (
            (this.m_bMapHasStartedVideo.set(s, !0),
            this.m_mapBroadcastChecked.has(t.accountid) ||
              this.m_mapBroadcastChecked.set(
                t.accountid,
                this.InternalAttemptToPlayStream(e, t),
              ),
            t.nAppIDVOD)
          )
            this.m_playReadyStream.set(s, t);
          else {
            const i = await this.m_mapBroadcastChecked.get(t.accountid);
            if ((null == i ? void 0 : i.success) != l.R) return null;
            (t.steamid = i.steamid),
              this.m_playReadyStream.set(s, t),
              this.GetConcurrentStreams(e) > 1
                ? (this.m_streamChatStatus = "hide")
                : (this.m_streamChatStatus = t.broadcast_chat_visibility),
              this.m_setStreamChangedListeners.forEach((e) => e(t));
            f(
              h.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
              m.Mc.iy,
              t.snr,
            );
          }
          return t;
        }
        async InternalAttemptToPlayStream(e, t) {
          this.GetStreamsLookupKeyFromDef(e);
          let s = null;
          try {
            const e = _.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
            let i = {
              broadcastaccountid: t.accountid,
              viewer_token: h.es.GetViewerToken(),
              origin: self.origin,
            };
            return (s = await r().get(e, { params: i })), s.data;
          } catch (e) {
            let t = (0, u.H)(e);
            console.error("Broadcast.AttemptToPlayStream: " + t.strErrorMsg, t);
          }
          return null;
        }
        GetAutoStartStream(e) {
          if (!e) return null;
          const t = e.filter((e) => g(e)),
            s = t.reduce((e, t) => Math.max(e, C(t)), 0),
            i = t.filter((e) => C(e) === s);
          if (0 === i.length) return null;
          return i[Math.floor(Math.random() * i.length)];
        }
        MapEmbeddableStreamToRequest(e) {
          var t, s, i;
          return {
            appid: e.appid,
            promotionName: e.bIsPreview ? "preview" : e.promotionName,
            clanid: e.clanid
              ? e.clanid
              : e.event
                ? e.event.clanSteamID.GetAccountID()
                : void 0,
            listid: e.listid,
            subid: e.subid,
            bundleid: e.bundleid,
            eventid: e.event ? e.event.GID : void 0,
            previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
              ? e.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
            cc: _.TS.COUNTRY,
            l: _.TS.LANGUAGE,
            hubtype:
              null === (t = e.event) || void 0 === t
                ? void 0
                : t.GetContentHubType(),
            hubcategory:
              null === (s = e.event) || void 0 === s
                ? void 0
                : s.GetContentHubCategory(),
            hubtagid:
              null === (i = e.event) || void 0 === i
                ? void 0
                : i.GetContentHubTag(),
            tabuniqueid: e.tabuniqueid,
            tabfilter: e.tabfilter,
            rt_now_override_test: c.HD.BHasTimeOverride()
              ? c.HD.GetTimeNowWithOverride()
              : void 0,
          };
        }
        GetStreamsLookupKeyFromDef(e) {
          return this.GetStreamsLookupKeyFromParam(
            this.MapEmbeddableStreamToRequest(e),
          );
        }
        GetStreamsLookupKeyFromParam(e) {
          return JSON.stringify(e);
        }
        static Get() {
          return (
            b.s_GlobalStore ||
              ((b.s_GlobalStore = new b()),
              "dev" == _.TS.WEB_UNIVERSE &&
                (window.g_BroadcastEmbeddableStore = b.s_GlobalStore),
              b.s_GlobalStore.Init()),
            b.s_GlobalStore
          );
        }
        Init() {}
      }
      function C(e) {
        return e.current_selection_priority || S.mY.k_eGeneral;
      }
      function y(e) {
        e.sort((e, t) =>
          C(e) != C(t)
            ? C(t) - C(e)
            : e.viewer_count != t.viewer_count
              ? t.viewer_count - e.viewer_count
              : t.accountid - e.accountid,
        );
      }
      async function f(e, t, s) {
        if (e > 0 && 7 != e && s) {
          let i = new URLSearchParams();
          i.append("page_action", "" + t),
            i.append("snr", s),
            r().post(
              _.TS.STORE_BASE_URL + "ajaxreportproductaction/" + e + "/",
              i,
            );
        }
      }
      (0, i.Cg)([n.sH], b.prototype, "m_lookupStreams", void 0),
        (0, i.Cg)([n.sH], b.prototype, "m_playReadyStream", void 0),
        (0, i.Cg)([n.sH], b.prototype, "m_pageChatStatus", void 0),
        (0, i.Cg)([n.sH], b.prototype, "m_streamChatStatus", void 0),
        (0, i.Cg)([n.sH], b.prototype, "m_bUserChatExpanded", void 0),
        (0, i.Cg)(
          [n.sH],
          b.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0,
        ),
        (0, i.Cg)([n.sH], b.prototype, "m_bCollapsed", void 0),
        (0, i.Cg)(
          [n.XI],
          b.prototype,
          "HintLoadEmbeddablePreviewStreams",
          null,
        ),
        (0, i.Cg)([n.XI], b.prototype, "AttemptToPlayStream", null);
      const D = new p.T();
    },
    60727: (e, t, s) => {
      "use strict";
      s.d(t, { l: () => d, m: () => l });
      var i = s(34629),
        a = s(14947),
        o = s(17720),
        r = s(44165),
        n = s(91254);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, a.Gn)(this);
        }
        static GetBBCodeParam(e, t, s = "") {
          const i = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return i ? i[1] : s;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            s = new Array();
          for (;;) {
            const i = t.exec(e);
            if (null === i) break;
            const a = i[1],
              r = i[2],
              n = l.GetBBCodeParam(a, "steamid"),
              d = {
                steamID: n ? new o.b(n) : void 0,
                name: l.GetBBCodeParam(a, "name"),
                title: l.GetBBCodeParam(a, "title"),
                company: l.GetBBCodeParam(a, "company"),
                photo: l.GetBBCodeParam(a, "photo"),
                bio: r,
              };
            s.push(d);
          }
          return s;
        }
        static ParseEventModelPresenters(e, t) {
          const s = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(s);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            s = new Set();
          for (;;) {
            const i = t.exec(e);
            if (null === i) break;
            const a = i[1];
            s.add(Number(a));
          }
          return s;
        }
        static ParseEventModelAppReferences(e, t) {
          var s;
          const i = e.GetDescriptionWithFallback(t),
            a = l.ParseEventAppReferencesFromText(i);
          if (
            null === (s = e.jsondata) || void 0 === s
              ? void 0
              : s.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) a.add(t);
          return a;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = r.HD.GetTimeNowWithOverride(),
            s = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of s.rgCalendarItems)
            n.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const i = s.rgCalendarItems.map((e) =>
              n.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                o.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            a = await Promise.all(i),
            l = new Map();
          for (const e of a)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
          return l;
        }
        IsBroadcasterAlreadyBound(e, t) {
          const s = this.m_mapBroadcasterSteamIDToEvents.get(e),
            i = s ? s.length : 0;
          if ((t ? t.length : 0) != i) return !1;
          for (let e = 0; e < i; e++) if (s[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let s = new Map();
          for (const i of e) {
            if (!i) continue;
            const e = l.ParseEventModelPresenters(i, t);
            for (const t of e)
              t.steamID && s.set(t.steamID.ConvertTo64BitString(), t);
          }
          return s;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((s, i) => {
            e.has(i) || t.push(i);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const s = new Set();
          for (const i of e) {
            l.ParseEventModelAppReferences(i, t).forEach((e) => s.add(e));
          }
          return Array.from(s);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, s) => {
            if (this.IsBroadcasterAlreadyBound(s, e)) return;
            const i = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(s, i),
              this.m_mapBroadcasterSteamIDToEvents.set(
                s,
                e.map((e) => e.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(e, t) {
          const s = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
          this.RemoveCachedDataIfNotInMap(s),
            this.UpdateCachedDataFromEvents(s, t);
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, i.Cg)([a.sH], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const d = new l();
    },
    54728: (e, t, s) => {
      "use strict";
      s.d(t, { es: () => U, fK: () => O, a0: () => x, fO: () => P });
      var i = s(34629),
        a = s(41735),
        o = s.n(a),
        r = s(14947),
        n = s(3067),
        l = s(4299);
      function d(e, t, s) {
        return [e, t, s];
      }
      class m extends Error {}
      class h extends l.J8 {
        constructor(e) {
          super(), (this.m_appid = e || 0);
        }
        GetAppID() {
          return this.m_appid;
        }
        parseColor(e) {
          if ("string" != typeof e || !e.match(/^#[0-9a-fA-F]{6}$/))
            throw new m("expected color string");
          return [
            parseInt(e.substring(1, 3), 16),
            parseInt(e.substring(3, 5), 16),
            parseInt(e.substring(5, 7), 16),
          ];
        }
        parseString(e) {
          if ("string" == typeof e) return e;
          throw new m("expected string");
        }
        parseNumber(e) {
          if ("number" == typeof e) return e;
          throw new m("expected number");
        }
        parseDate(e) {
          if ("number" == typeof e) return new Date(e);
          throw new m("expected timestamp");
        }
        parseArray(e, t) {
          let s = [];
          if ("object" != typeof e || !Array.isArray(e))
            throw new m("expected array");
          let i = e.length;
          for (let a = 0; a < i; ++a)
            try {
              s.push(t(e[a]));
            } catch (e) {
              throw ((e.message += "\n...while parsing array element " + a), e);
            }
          return s;
        }
        parseDict(e, t) {
          let s = new Map();
          if ("object" != typeof e || Array.isArray(e))
            throw new m("expected object");
          for (let i in e)
            try {
              s.set(i, t(e[i]));
            } catch (e) {
              throw (
                ((e.message += "\n...while parsing dictionary element " + i), e)
              );
            }
          return s;
        }
        parseBracket(e) {
          let t = {
            name: this.parseString(e.name),
            start: this.parseDate(e.start),
            color: [255, 0, 255],
          };
          return (
            "params" in e &&
              (t.params = this.parseDict(
                e.params,
                this.parseString.bind(this),
              )),
            "end" in e && (t.end = this.parseDate(e.end)),
            "color" in e && (t.color = this.parseColor(e.color)),
            t
          );
        }
        parseMarker(e) {
          let t = { time: this.parseDate(e.time), color: [0, 255, 255] };
          return (
            "name" in e && (t.name = this.parseString(e.name)),
            "params" in e &&
              (t.params = this.parseDict(
                e.params,
                this.parseString.bind(this),
              )),
            "color" in e && (t.color = this.parseColor(e.color)),
            t
          );
        }
        parseSoundTrack(e) {
          let t = {};
          return (
            "song_title" in e &&
              (t.song_title = this.parseString(e.song_title)),
            "appid" in e && (t.appid = this.parseNumber(e.appid)),
            "song_index" in e &&
              (t.song_index = this.parseNumber(e.song_index)),
            t
          );
        }
        parseBroadcastGameData(e) {
          let t = { appid: 0, brackets: [], markers: [] };
          return (
            "appid" in e && (t.appid = this.parseNumber(e.appid)),
            "brackets" in e &&
              (t.brackets = this.parseArray(
                e.brackets,
                this.parseBracket.bind(this),
              )),
            "markers" in e &&
              (t.markers = this.parseArray(
                e.markers,
                this.parseMarker.bind(this),
              )),
            "soundtrack" in e &&
              (t.soundtrack = this.parseSoundTrack(e.soundtrack)),
            t
          );
        }
        convertTime(e, t) {
          return e - t / 1e3;
        }
        UpdateMarkers(e, t) {
          let s = [],
            i = [];
          for (const a of e)
            a.persistent
              ? (i.length > 0 &&
                  (i[i.length - 1].nTimeEnd = this.convertTime(a.Timestamp, t)),
                a.name.length > 0 &&
                  i.push({
                    strTemplateName: a.name,
                    nTimeStart: this.convertTime(a.Timestamp, t),
                    nTimeEnd: -1,
                    color: d(a.color_r, a.color_g, a.color_b),
                  }))
              : s.push({
                  strTemplateName: a.name,
                  nTime: this.convertTime(a.Timestamp, t),
                  color: d(a.color_r, a.color_g, a.color_b),
                });
          return { rgMarkers: s, rgSegments: i };
        }
        UpdateRegions(e) {
          let t = [];
          for (const s of e)
            t.push({
              strTemplateName: s.name,
              min: { x: s.min_x, y: s.min_y },
              max: { x: s.max_x, y: s.max_y },
              behavior: s.behavior,
            });
          return t;
        }
        UpdateSoundtrack(e, t) {}
      }
      var c = s(36064),
        p = s(47143),
        u = s(25489),
        _ = s(78327),
        S = s(6419),
        g = s(81952),
        v = s(36586),
        b = s(6144),
        C = s(37085);
      class y {
        constructor(e) {
          (this.m_elVideo = null),
            (this.m_peerConnection = null),
            (this.m_strBroadcastSteamID = void 0),
            (this.m_ulWebRTCSessionID = void 0),
            (this.m_schCandidateTimer = new b.LU()),
            (this.m_nHostCandidateGeneration = void 0),
            (this.m_nCandidateUpdateIntervalMS = void 0),
            (this.m_listeners = new b.Ji()),
            (this.m_bFirstPlay = !0),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new b.LU()),
            (this.m_stats = new g._L()),
            (0, r.Gn)(this),
            (this.m_elVideo = e);
        }
        async PlayMPD(e, t, s) {}
        async PlayWebRTC(e, t, s, i, a) {
          (this.m_strBroadcastSteamID = e),
            (this.m_ulWebRTCSessionID = s),
            (this.m_nHostCandidateGeneration = 0),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "resize",
              this.OnVideoResize,
            );
          let r = {
            iceServers: [
              { urls: ["stun:" + i] },
              { urls: ["turn:" + i], username: t, credential: s },
            ],
            iceTransportPolicy: "relay",
          };
          (this.m_peerConnection = new RTCPeerConnection(r)),
            (this.m_peerConnection.oniceconnectionstatechange = ((e) => {
              this.m_peerConnection &&
                (console.log(
                  "BroadcastWebRTC: ICE connection state changed to " +
                    this.m_peerConnection.iceConnectionState,
                ),
                "failed" === this.m_peerConnection.iceConnectionState
                  ? this.OnWebRTCConnectionFailed()
                  : "disconnected" ===
                      this.m_peerConnection.iceConnectionState &&
                    this.OnWebRTCConnectionRetry());
            }).bind(this)),
            (this.m_peerConnection.onicecandidate = ((e) => {
              if (e.candidate) {
                const t = new FormData();
                t.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  t.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  t.append("sdp_mid", e.candidate.sdpMid),
                  t.append(
                    "sdp_mline_index",
                    String(e.candidate.sdpMLineIndex),
                  ),
                  t.append("candidate", e.candidate.candidate),
                  o()
                    .post(
                      `${_.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                      t,
                    )
                    .then((e) => {
                      const t = e.data;
                      (t.success && t.success == C.R) ||
                        console.log(
                          "Failed to add a WebRTC session ICE candidate: " +
                            String(t.success),
                        );
                    })
                    .catch((e) =>
                      console.log(
                        "Failed to add a WebRTC session ICE candidate" + e,
                      ),
                    );
              }
            }).bind(this)),
            (this.m_peerConnection.ontrack = ((e) => {
              "video" === e.track.kind &&
                ((this.m_elVideo.src = null),
                (this.m_elVideo.srcObject = e.streams[0]),
                this.Play());
            }).bind(this)),
            this.m_peerConnection
              .setRemoteDescription({ type: "offer", sdp: a })
              .then(async () => {
                await this.m_peerConnection.setLocalDescription(
                  await this.m_peerConnection.createAnswer(),
                );
                const e = new FormData();
                e.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  e.append(
                    "answer",
                    this.m_peerConnection.localDescription.sdp,
                  );
                try {
                  await o()
                    .post(
                      `${_.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                      e,
                    )
                    .then((e) => {
                      const t = e.data;
                      if (!t.success || t.success != C.R)
                        throw new Error(String(t.success));
                    });
                } catch (e) {
                  return (
                    console.log(
                      "Failed to set the WebRTC session answer: " + e,
                    ),
                    void this.OnWebRTCConnectionRetry()
                  );
                }
                (this.m_nCandidateUpdateIntervalMS = 250),
                  this.m_schCandidateTimer.Schedule(
                    this.m_nCandidateUpdateIntervalMS,
                    () => this.GetHostCandidates(),
                  );
              });
        }
        async GetHostCandidates() {
          const e = new FormData();
          e.append("broadcaststeamid", this.m_strBroadcastSteamID),
            e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
            e.append(
              "candidate_generation",
              String(this.m_nHostCandidateGeneration),
            );
          try {
            await o()
              .post(
                `${_.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                e,
              )
              .then((e) => {
                const t = e.data,
                  s = t.data;
                if (!t.success || t.success != C.R)
                  throw new Error(String(t.success));
                s.candidate_generation > this.m_nHostCandidateGeneration
                  ? (s.candidates.forEach((e) => {
                      const t = new RTCIceCandidate({
                        sdpMid: e.sdp_mid,
                        sdpMLineIndex: e.sdp_mline_index,
                        candidate: e.candidate,
                      });
                      this.m_peerConnection
                        .addIceCandidate(t)
                        .catch((e) => console.error(e));
                    }),
                    (this.m_nHostCandidateGeneration = s.candidate_generation))
                  : this.m_nHostCandidateGeneration > 0 &&
                    (this.m_nCandidateUpdateIntervalMS *= 2);
              });
          } catch (e) {
            return (
              console.log("Failed to get WebRTC session ICE candidates" + e),
              void this.OnWebRTCConnectionRetry()
            );
          }
          this.m_schCandidateTimer.Schedule(
            this.m_nCandidateUpdateIntervalMS,
            () => this.GetHostCandidates(),
          );
        }
        DispatchEvent(e, t = null) {
          let s = new CustomEvent(e, {
            cancelable: !0,
            bubbles: !0,
            detail: t,
          });
          this.m_elVideo.dispatchEvent(s);
        }
        OnWebRTCConnectionRetry() {
          this.DispatchEvent("valve-webrtcretry");
        }
        OnWebRTCConnectionFailed() {
          this.DispatchEvent("valve-webrtcfailed");
        }
        Close() {
          this.m_listeners.Unregister(),
            this.m_schCandidateTimer.Cancel(),
            this.m_schCaptureDisplayStatsTrigger.Cancel(),
            this.m_peerConnection &&
              (this.m_peerConnection.close(), (this.m_peerConnection = null)),
            this.m_elVideo.pause(),
            (this.m_elVideo.srcObject = null),
            this.m_stats &&
              (this.m_stats.GetFPSMonitor().Close(), (this.m_stats = null)),
            (this.m_bFirstPlay = !0);
        }
        IsBuffering() {
          return !1;
        }
        GetCurrentPlayTime() {
          return 0;
        }
        GetLiveContentStartTime() {
          return null;
        }
        GetAvailableVideoStartTime() {
          return 0;
        }
        GetBufferedLiveEdgeTime() {
          return 0;
        }
        IsPaused() {
          return this.m_elVideo.paused;
        }
        async Play() {
          const e = this.m_bFirstPlay;
          this.m_bFirstPlay = !1;
          let t = !1;
          const s = () => {
            (t = !0),
              this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                );
          };
          try {
            await this.m_elVideo.play(), s();
          } catch (e) {
            e.name;
          }
          !t && e && this.DispatchEvent("valve-userinputneeded");
        }
        Pause() {
          this.m_elVideo.pause();
        }
        CanSeek() {
          return !1;
        }
        SeekAndPlay(e) {
          return this.Play(), 0;
        }
        Seek(e) {
          return 0;
        }
        JumpTime(e) {
          return 0;
        }
        IsMuted() {
          return this.m_elVideo.muted;
        }
        SetMuted(e) {
          this.m_elVideo.muted = e;
        }
        SetVolume(e) {
          (e = u.OQ(e, 0, 1)), (this.m_elVideo.volume = e);
        }
        GetVolume() {
          return this.m_elVideo.volume;
        }
        GetDASHPlayerStats() {
          return this.m_stats;
        }
        SetStatsViewIsVisible(e) {
          e && !this.m_bStatsViewVisible
            ? (this.CaptureStatsForDisplay(),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                250,
                this.CaptureStatsForDisplay,
              ))
            : !e &&
              this.m_bStatsViewVisible &&
              this.m_schCaptureDisplayStatsTrigger.Cancel(),
            (this.m_bStatsViewVisible = e);
        }
        CaptureStatsForDisplay() {
          this.m_stats.SetHTMLVideoPlayerDisplay(
            this.m_elVideo.videoWidth,
            this.m_elVideo.videoHeight,
            this.m_elVideo.clientWidth,
            this.m_elVideo.clientHeight,
          ),
            this.m_schCaptureDisplayStatsTrigger.Schedule(
              250,
              this.CaptureStatsForDisplay,
            );
        }
        OnVideoPause(e) {
          this.m_stats.GetFPSMonitor().Close();
        }
        OnVideoResize(e) {
          this.m_stats.GetFPSMonitor().SetWindowResized();
        }
        GetVideoRepresentations() {
          let e = [];
          return e.push({ id: v.Y, displayName: "Auto", selected: !0 }), e;
        }
        SetVideoRepresentation(e) {}
        IsLiveContent() {
          return !0;
        }
        BHasTimedText() {
          return !1;
        }
      }
      (0, i.Cg)([S.o], y.prototype, "PlayWebRTC", null),
        (0, i.Cg)([r.XI.bound], y.prototype, "CaptureStatsForDisplay", null),
        (0, i.Cg)([S.o], y.prototype, "OnVideoPause", null),
        (0, i.Cg)([S.o], y.prototype, "OnVideoResize", null);
      var f = s(22837),
        D = s(55815),
        w = s(62490),
        I = s(81393),
        B = s(61859),
        V = s(68797),
        T = s(6469),
        k = s(43882),
        M = s(66703);
      const P = 7;
      var O, x;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Unlocking = 1)] = "Unlocking"),
          (e[(e.Loading = 2)] = "Loading"),
          (e[(e.Ready = 3)] = "Ready"),
          (e[(e.Error = 4)] = "Error");
      })(O || (O = {}));
      class G {
        constructor() {
          (this.m_rtUnlockTime = 0), (this.m_schUnlockTimeout = new b.LU());
        }
        UnlockH264(e, t) {
          this.BCanUnlockH264()
            ? (e.SetState(O.Unlocking, ""),
              console.log("Unlocking H.264 for broadcast video playback"),
              this.RequestUnlockH264(),
              (this.m_broadcast = e),
              (this.m_video = t),
              (this.m_rtUnlockTime = Date.now()),
              this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ))
            : e.SetState(O.Error, (0, B.we)("#BroadcastWatch_MinBrowser"));
        }
        BCanUnlockH264() {
          return (0, M.Dp)("RemotePlay.UnlockH264")
            ? (console.log("Client supports direct H.264 unlock"), !0)
            : (0, M.Dp)("BrowserView.PostMessageToParent")
              ? (console.log("Client supports browserview H.264 unlock"), !0)
              : (console.log("Client does not support H.264 unlock"), !1);
        }
        RequestUnlockH264() {
          (0, M.Dp)("RemotePlay.UnlockH264")
            ? (console.log("Requesting direct H.264 unlock"),
              SteamClient.RemotePlay.UnlockH264())
            : (0, M.Dp)("BrowserView.PostMessageToParent")
              ? (console.log("Requesting browserview unlock"),
                SteamClient.BrowserView.PostMessageToParent(
                  "UnlockH264Request",
                  "CUnlockH264Helper",
                ))
              : console.log(
                  "Failed to request H.264 unlock: no method supported",
                );
        }
        CheckUnlockState() {
          if (this.m_broadcast.m_eWatchState != O.Unlocking) return;
          if ((0, c.Mc)() || (0, c.aM)())
            return (
              console.log("Unlocking H.264 successful"),
              this.m_broadcast.SetState(O.None, ""),
              void this.m_video.Restart()
            );
          Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                "Unlocking H.264 timed out (Steam client or servers offline?)",
              ),
              this.m_broadcast.SetState(
                O.Error,
                (0, B.we)("#BroadcastWatch_MinBrowser"),
              ))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              );
        }
      }
      class A {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_ulBroadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_bWebRTC = !1),
            (this.m_eWatchState = O.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (this.m_schManifestTimeout = new b.LU()),
            (this.m_schHeartbeatTimeout = new b.LU()),
            (0, r.Gn)(this);
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == O.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, i.Cg)([r.sH], A.prototype, "m_ulBroadcastID", void 0),
        (0, i.Cg)([r.sH], A.prototype, "m_eWatchState", void 0),
        (0, i.Cg)([r.sH], A.prototype, "m_strStateDescription", void 0),
        (0, i.Cg)([r.XI], A.prototype, "SetState", null);
      class R {
        constructor(e) {
          (this.m_steamIDBroadcast = ""),
            (this.m_bInitialized = !1),
            (this.m_strTitle = ""),
            (this.m_strAppId = "" + P),
            (this.m_nAppID = P),
            (this.m_strAppTitle = ""),
            (this.m_strThumbnailUrl = ""),
            (this.m_nViewerCount = 0),
            (this.m_bIsOnline = !1),
            (this.m_schUpdateTimeout = new b.LU()),
            (this.m_nRefCount = 0),
            (0, r.Gn)(this),
            (this.m_steamIDBroadcast = e);
        }
      }
      (0, i.Cg)([r.sH], R.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_strTitle", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_strAppId", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_nAppID", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_strAppTitle", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_strThumbnailUrl", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_nViewerCount", void 0),
        (0, i.Cg)([r.sH], R.prototype, "m_bIsOnline", void 0);
      class E {
        constructor() {
          (this.m_eWatchState = O.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (0, r.Gn)(this);
        }
        SetState(e, t = "") {
          (this.m_eWatchState = e),
            (this.m_strStateDescription = t),
            e == O.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, i.Cg)([r.sH], E.prototype, "m_eWatchState", void 0),
        (0, i.Cg)([r.sH], E.prototype, "m_strStateDescription", void 0),
        (0, i.Cg)([r.XI], E.prototype, "SetState", null);
      class H extends E {}
      class L extends E {}
      class j {
        constructor() {
          (this.m_mapBroadcasts = new Map()),
            (this.m_mapClips = new Map()),
            (this.m_mapVODs = new Map()),
            (this.m_activeVideo = null),
            (this.m_broadcastSettings = {
              nVolume: 1,
              bMuted: !1,
              ulViewerToken: "0",
            }),
            (this.m_schSaveSettings = new b.LU()),
            (this.m_broadcastInfos = {}),
            (0, r.Gn)(this),
            this.LoadBroadcastSettings();
        }
        GetBroadcastState(e) {
          if (e.IsBroadcastClip()) {
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            return t ? t.m_eWatchState : O.None;
          }
          if (e.IsBroadcastVOD()) {
            const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            return t ? t.m_eWatchState : O.None;
          }
          {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            return t ? t.m_eWatchState : O.None;
          }
        }
        GetBroadcastStateDescription(e) {
          if (e.IsBroadcastClip()) {
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            return t ? t.m_strStateDescription : "";
          }
          if (e.IsBroadcastVOD()) {
            const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            return t ? t.m_strStateDescription : "";
          }
          {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            return t ? t.m_strStateDescription : "";
          }
        }
        CreateBroadcastVideo(e, t, s, i) {
          let a = this.GetOrCreateBroadcast(t),
            { nVolume: o, bMuted: r } = this.m_broadcastSettings,
            n = new N(e, o, r, s);
          if (
            (n.SetBroadcastSteamID(t),
            a.m_rgVideos.push(n),
            (a.m_bWebRTC = i),
            !(0, c.Mc)() && !(0, c.aM)())
          ) {
            return new G().UnlockH264(a, n), n;
          }
          return n;
        }
        CreateClipVideo(e, t, s) {
          let i = this.GetOrCreateClip(t),
            { nVolume: a, bMuted: o } = this.m_broadcastSettings,
            r = new N(e, a, o, s);
          if (
            (r.SetBroadcastClipID(t),
            i.m_rgVideos.push(r),
            !(0, c.Mc)() && !(0, c.aM)())
          ) {
            return new G().UnlockH264(i, r), r;
          }
          return r;
        }
        CreateVODVideo(e, t, s) {
          let i = this.GetOrCreateVOD(t),
            { nVolume: a, bMuted: o } = this.m_broadcastSettings,
            r = new N(e, a, o, s);
          if (
            (r.SetBroadcastAppIDVOD(t),
            i.m_rgVideos.push(r),
            !(0, c.Mc)() && !(0, c.aM)())
          ) {
            return new G().UnlockH264(i, r), r;
          }
          return r;
        }
        StartVideo(e) {
          if (e.IsBroadcastClip()) {
            console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
            let t = this.m_mapClips.get(e.GetBroadcastClipID());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == O.None
                ? this.GetClipManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == O.Ready && e.StartClip(t);
          } else if (e.IsBroadcastVOD()) {
            console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
            let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == O.None
                ? this.GetVODManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == O.Ready && e.StartVOD(t);
          } else {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            if (!t) return;
            this.SetActiveVideo(e),
              t.m_eWatchState == O.None
                ? this.GetBroadcastManifest(t, e.GetWatchLocation())
                : t.m_eWatchState == O.Ready && e.StartBroadcast(t);
          }
        }
        SetActiveVideo(e) {
          this.m_mapBroadcasts.forEach((t) => {
            for (let s of t.m_rgVideos) s != e && s.StopPlaybackTillUserInput();
          }),
            this.m_mapClips.forEach((t) => {
              for (let s of t.m_rgVideos)
                s != e && s.StopPlaybackTillUserInput();
            }),
            (this.m_activeVideo = e);
        }
        PauseAllVideo() {
          this.m_mapBroadcasts.forEach((e) => {
            for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
          });
        }
        async StopVideo(e) {
          let t = e.GetBroadcastSteamID(),
            s = this.m_mapBroadcasts.get(t);
          e.Stop(),
            s &&
              (s.m_ulBroadcastID &&
                (async function (e, t, s) {
                  if (!t) return;
                  let i = new FormData();
                  i.append("steamid", e),
                    i.append("broadcastid", t),
                    i.append("viewertoken", s);
                  try {
                    await o().post(
                      _.TS.CHAT_BASE_URL + "broadcast/stopwatching",
                      i,
                    );
                  } catch {}
                })(
                  t,
                  s.m_ulBroadcastID,
                  this.m_broadcastSettings.ulViewerToken,
                ),
              w.Wp(s.m_rgVideos, (t) => t == e),
              this.RemoveBroadcastIfUnused(s));
        }
        StartInfo(e) {
          const t = this.GetOrCreateBroadcastInfo(e);
          return (
            t.m_nRefCount++,
            (t.m_bInitialized && t.m_schUpdateTimeout.IsScheduled()) ||
              this.LoadBroadcastInfo(t),
            t
          );
        }
        StopInfo(e) {
          e.m_nRefCount--;
        }
        GetOrCreateBroadcastInfo(e) {
          if (!e) {
            return new R("");
          }
          if (!this.m_broadcastInfos[e]) {
            const t = (0, r.sH)(new R(e));
            this.m_broadcastInfos[e] = t;
          }
          return this.m_broadcastInfos[e];
        }
        GetOrCreateBroadcast(e) {
          let t = this.m_mapBroadcasts.get(e);
          return (
            t ||
            ((t = new A()),
            (t.m_steamIDBroadcast = e),
            (t.m_eWatchState = O.None),
            this.m_mapBroadcasts.set(e, t),
            t)
          );
        }
        GetBroadcast(e) {
          return this.m_mapBroadcasts.get(e);
        }
        GetBroadcastClip(e) {
          return this.m_mapClips.get(e);
        }
        GetBroadcastVOD(e) {
          return this.m_mapVODs.get(e);
        }
        RemoveBroadcastIfUnused(e) {
          e.m_rgVideos.length ||
            (e.m_schHeartbeatTimeout.Cancel(),
            e.m_schManifestTimeout.Cancel(),
            this.m_mapBroadcasts.delete(e.m_steamIDBroadcast));
        }
        GetOrCreateClip(e) {
          let t = this.m_mapClips.get(e);
          return (
            t ||
            ((t = new H()),
            (t.m_clipID = e),
            (t.m_eWatchState = O.None),
            this.m_mapClips.set(e, t),
            t)
          );
        }
        GetOrCreateVOD(e) {
          let t = this.m_mapVODs.get(e);
          return (
            t ||
            ((t = new L()),
            (t.m_nAppIDVOD = e),
            (t.m_eWatchState = O.None),
            this.m_mapVODs.set(e, t),
            t)
          );
        }
        async LoadBroadcastInfo(e) {
          let t = "0",
            s = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
          if ((s && (t = s.m_ulBroadcastID), 0 == e.m_nRefCount)) return;
          const i = {
            steamid: e.m_steamIDBroadcast,
            broadcastid: t,
            location:
              s &&
              s.m_rgVideos &&
              s.m_rgVideos[0] &&
              s.m_rgVideos[0].GetWatchLocation(),
          };
          try {
            const t = await o().get(
              `${_.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
              { params: i },
            );
            if (!t || !t.data || !t.data.success || t.data.success != C.R)
              return void (e.m_bInitialized = !0);
            const s = t.data;
            (0, r.h5)(() => {
              (e.m_bInitialized = !0),
                (e.m_strTitle = s.title),
                (e.m_strAppId = s.appid),
                (e.m_nAppID = Number.parseInt(s.appid)),
                (e.m_strAppTitle = s.app_title),
                (e.m_strThumbnailUrl = s.thumbnail_url),
                (e.m_nViewerCount = s.viewer_count),
                (e.m_bIsOnline = s.is_online),
                !e.m_strTitle &&
                  n.td &&
                  ((e.m_strTitle = n.td.name),
                  (e.m_strAppTitle = n.td.appName || n.td.name));
              const t = s.update_interval;
              t &&
                "number" == typeof t &&
                e.m_schUpdateTimeout.Schedule(1e3 * t, () =>
                  this.LoadBroadcastInfo(e),
                );
            });
          } catch (e) {
            console.error(e);
          }
        }
        DelayedGetBroadcastManifest(e, t, s = Date.now()) {
          e.m_schManifestTimeout.Schedule(5e3, () =>
            this.GetBroadcastManifest(e, t, s),
          );
        }
        async GetBroadcastManifest(e, t, s = Date.now()) {
          e.SetState(O.Loading, "");
          let i = {
              steamid: e.m_steamIDBroadcast,
              broadcastid: 0,
              viewertoken: this.m_broadcastSettings.ulViewerToken,
              watchlocation: t,
              sessionid: _.TS.SESSIONID,
              is_webrtc: e.m_bWebRTC,
            },
            a = null;
          try {
            a = await o().get(
              _.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
              { params: i, withCredentials: !0 },
            );
          } catch (e) {
            let t = (0, V.H)(e);
            console.error(
              "Failed to get broadcast manifest!" + t.strErrorMsg,
              t,
            );
          }
          if (!a || 200 != a.status)
            return void e.SetState(
              O.Error,
              (0, B.we)("#BroadcastWatch_RequestFailed"),
            );
          let r = a.data;
          r.viewertoken && this.SetViewerToken(r.viewertoken);
          let n = r.success;
          if ("ready" == n)
            e.SetState(O.Ready),
              (e.m_ulBroadcastID = r.broadcastid),
              (e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
              (e.m_strCDNAuthUrlParameters = r.cdn_auth_url_parameters),
              (e.m_bWebRTC = r.is_webrtc),
              (e.m_data = r),
              this.LoadBroadcast(e),
              setTimeout(() => {
                e.m_schHeartbeatTimeout.Schedule(
                  1e3 * e.m_data.heartbeat_interval,
                  () => this.HeartbeatBroadcast(e),
                );
              }, 3e4 * Math.random());
          else if ("waiting" == n) {
            e.SetState(
              O.Loading,
              (0, B.we)("#BroadcastWatch_WaitingForResponse"),
            );
            let i = Date.now() - s;
            if (i > 6e4)
              return void e.SetState(
                O.Error,
                (0, B.we)("#BroadcastWatch_NotAvailable"),
              );
            let a = i > 3e4 ? r.retry : 5e3;
            e.m_schManifestTimeout.Schedule(a, () =>
              this.GetBroadcastManifest(e, t, s),
            );
          } else
            "waiting_for_start" == n
              ? (e.SetState(
                  O.Loading,
                  (0, B.we)("#BroadcastWatch_WaitingForStart"),
                ),
                e.m_schManifestTimeout.Schedule(r.retry, () =>
                  this.GetBroadcastManifest(e, t, s),
                ))
              : "waiting_for_reconnect" == n
                ? (e.SetState(
                    O.Loading,
                    (0, B.we)("#BroadcastWatch_WaitingForReconnect"),
                  ),
                  e.m_schManifestTimeout.Schedule(r.retry, () =>
                    this.GetBroadcastManifest(e, t, s),
                  ))
                : "end" == n
                  ? e.SetState(
                      O.Error,
                      (0, B.we)("#BroadcastWatch_NotAvailable"),
                    )
                  : "too_many_broadcasts" == n
                    ? e.SetState(
                        O.Error,
                        (0, B.we)("#BroadcastWatch_TooManyBroadcasts"),
                      )
                    : "system_not_supported" == n
                      ? e.SetState(
                          O.Error,
                          (0, B.we)("#BroadcastWatch_SystemNotSupported"),
                        )
                      : "user_restricted" == n
                        ? e.SetState(
                            O.Error,
                            (0, B.we)("#BroadcastWatch_UserRestricted"),
                          )
                        : "poor_upload_quality" == n
                          ? e.SetState(
                              O.Error,
                              (0, B.we)("#BroadcastWatch_PoorUploadQuality"),
                            )
                          : "request_failed" == n
                            ? e.SetState(
                                O.Error,
                                (0, B.we)("#BroadcastWatch_RequestFailed"),
                              )
                            : "too_many_viewers" == n
                              ? e.SetState(
                                  O.Error,
                                  (0, B.we)("#BroadcastWatch_TooManyViewers"),
                                )
                              : e.SetState(
                                  O.Error,
                                  (0, B.we)("#BroadcastWatch_NotAvailable"),
                                );
        }
        async GetClipManifest(e, t) {
          e.SetState(O.Loading, "");
          let s = {
              clipid: e.m_clipID,
              watchlocation: t,
              sessionid: _.TS.SESSIONID,
            },
            i = null;
          try {
            i = await o().get(_.TS.CHAT_BASE_URL + "broadcast/getclipdetails", {
              params: s,
              withCredentials: !0,
            });
          } catch (e) {
            console.error(e), console.log("Failed to get clip manifest!");
          }
          if (!i || 200 != i.status)
            return void e.SetState(
              O.Error,
              (0, B.we)("#BroadcastWatch_RequestFailed"),
            );
          let a = i.data;
          a.success == C.R
            ? (e.SetState(O.Ready), (e.m_data = a), this.LoadClip(e))
            : e.SetState(O.Error, (0, B.we)("#BroadcastWatch_RequestFailed"));
        }
        async GetVODManifest(e, t) {
          e.SetState(O.Loading, "");
          let s = await T.K.Get().LoadVODForAppID(e.m_nAppIDVOD);
          s
            ? (e.SetState(O.Ready),
              (e.m_manifestURL = s.video_url),
              this.LoadVOD(e))
            : e.SetState(O.Error, (0, B.we)("#BroadcastWatch_RequestFailed"));
        }
        async HeartbeatBroadcast(e) {
          let t = new FormData();
          t.append("steamid", e.m_steamIDBroadcast),
            t.append("broadcastid", e.m_ulBroadcastID),
            t.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
            o().post(_.TS.CHAT_BASE_URL + "broadcast/heartbeat/", t),
            e.m_schHeartbeatTimeout.Schedule(
              1e3 * e.m_data.heartbeat_interval,
              () => this.HeartbeatBroadcast(e),
            );
        }
        LoadBroadcast(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartBroadcast(e);
        }
        LoadClip(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartClip(e);
        }
        LoadVOD(e) {
          e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0 &&
            this.m_activeVideo.StartVOD(e);
        }
        BroadcastDownloadFailed(e, t = !0, s = p.N_.Invalid) {
          e.Stop();
          let i = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
          i &&
            i.m_eWatchState != O.Loading &&
            (i.m_bWebRTC && t && (i.m_bWebRTC = !1),
            s == p.N_.StreamGone
              ? this.DelayedGetBroadcastManifest(i, e.GetWatchLocation())
              : this.GetBroadcastManifest(i, e.GetWatchLocation()));
        }
        UserInputClickVideo(e) {
          if (
            this.m_activeVideo != e &&
            (this.PauseAllVideo(),
            (this.m_activeVideo = e),
            !e.IsBroadcastClip() && !e.IsBroadcastVOD())
          ) {
            let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
            this.GetBroadcastManifest(t, e.GetWatchLocation());
          }
          e.UserInputClick();
        }
        LoadBroadcastSettings() {
          if (!window.localStorage) return;
          let e = window.localStorage.getItem("broadcastSettings");
          if (!e) return;
          let t = JSON.parse(e);
          if (!t) return;
          Object.assign(this.m_broadcastSettings, t);
          let s = this.m_broadcastSettings;
          (s.bMuted = !!s.bMuted),
            (s.nVolume = u.OQ(s.nVolume, 0, 1)),
            "string" != typeof s.ulViewerToken && (s.ulViewerToken = "0");
        }
        SaveBroadcastSettings() {
          window.localStorage &&
            this.m_schSaveSettings.Schedule(1e3, () => {
              try {
                window.localStorage.setItem(
                  "broadcastSettings",
                  JSON.stringify(this.m_broadcastSettings),
                );
              } catch (e) {}
            });
        }
        SetViewerToken(e) {
          this.m_broadcastSettings.ulViewerToken != e &&
            ((this.m_broadcastSettings.ulViewerToken = e),
            this.SaveBroadcastSettings());
        }
        GetViewerToken() {
          return this.m_broadcastSettings.ulViewerToken;
        }
        SaveVolumeChange(e, t) {
          (this.m_broadcastSettings.nVolume == e &&
            this.m_broadcastSettings.bMuted == t) ||
            ((this.m_broadcastSettings.nVolume = e),
            (this.m_broadcastSettings.bMuted = t),
            this.SaveBroadcastSettings());
        }
      }
      (0, i.Cg)([r.sH], j.prototype, "m_mapBroadcasts", void 0),
        (function (e) {
          (e[(e.Timeline = 1)] = "Timeline"), (e[(e.Minimap = 2)] = "Minimap");
        })(x || (x = {}));
      class N {
        constructor(e, t, s, i) {
          (this.m_elVideo = null),
            (this.m_player = null),
            (this.m_listeners = new b.Ji()),
            (this.m_gameDataParser = null),
            (this.m_eWatchLocation = D.nn.Tq),
            (this.m_bStartWithSubtitles = !1),
            (this.m_steamIDBroadcast = null),
            (this.m_BroadcastInfo = null),
            (this.m_broadcastClipID = null),
            (this.m_nBroadcastAppIDVOD = null),
            (this.m_bPaused = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_bBuffering = !1),
            (this.m_bOnLiveEdge = !1),
            (this.m_nVolume = 0),
            (this.m_bMuted = !1),
            (this.m_bUserInputNeeded = !1),
            (this.m_bIsReplay = !1),
            (this.m_nTimelineDuration = 1800),
            (this.m_nVideoStartPos = 0),
            (this.m_nVideoEndPos = 0),
            (this.m_editorStartTime = 0),
            (this.m_editorEndTime = 0),
            (this.m_rgMarkers = r.sH.array()),
            (this.m_rgSegments = r.sH.array()),
            (this.m_rgRegions = r.sH.array()),
            (0, r.Gn)(this),
            (this.m_elVideo = e),
            (this.m_nVolume = t),
            (this.m_bMuted = s),
            (this.m_eWatchLocation = i);
        }
        SetBroadcastSteamID(e) {
          this.m_steamIDBroadcast = e;
        }
        GetBroadcastSteamID() {
          return this.m_steamIDBroadcast;
        }
        GetWatchLocation() {
          return this.m_eWatchLocation;
        }
        IsPaused() {
          return this.m_bPaused;
        }
        GetPlaybackTime() {
          return this.m_nPlaybackTime;
        }
        SetStatsViewIsVisible(e) {
          this.m_player && this.m_player.SetStatsViewIsVisible(e);
        }
        GetDASHPlayerStats() {
          return this.m_player.GetDASHPlayerStats();
        }
        BHasDASHStats() {
          return null != this.m_player;
        }
        IsTimelineMapActive() {
          return !1;
        }
        CanSeek() {
          return this.m_player && this.m_player.CanSeek();
        }
        IsBuffering() {
          return this.m_bBuffering;
        }
        IsOnLiveEdge() {
          return this.m_bOnLiveEdge;
        }
        GetVideoAvailableStartTime() {
          return this.m_nVideoStartPos;
        }
        GetVolume() {
          return this.m_nVolume;
        }
        GetUserInputNeeded() {
          return this.m_bUserInputNeeded;
        }
        IsReplay() {
          return this.m_bIsReplay;
        }
        IsBroadcastClip() {
          return null != this.m_broadcastClipID;
        }
        SetBroadcastClipID(e) {
          this.m_broadcastClipID = e;
        }
        GetBroadcastClipID() {
          return this.m_broadcastClipID;
        }
        IsBroadcastVOD() {
          return null != this.m_nBroadcastAppIDVOD;
        }
        SetBroadcastAppIDVOD(e) {
          this.m_nBroadcastAppIDVOD = e;
        }
        GetBroadcastAppIDVOD() {
          return this.m_nBroadcastAppIDVOD;
        }
        GetVideoRepresentations() {
          return this.m_player ? this.m_player.GetVideoRepresentations() : [];
        }
        SetVideoRepresentation(e) {
          this.m_player.SetVideoRepresentation(e);
        }
        GetBroadcastInfo() {
          return this.m_BroadcastInfo;
        }
        BHasTimedText() {
          var e;
          return null === (e = this.m_player) || void 0 === e
            ? void 0
            : e.BHasTimedText();
        }
        BHasPlayer() {
          return Boolean(this.m_player);
        }
        ListSubtitles() {
          return this.m_elVideo.textTracks;
        }
        GetSubtitles() {
          for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
            const t = this.m_elVideo.textTracks[e];
            if ("showing" === t.mode) return t;
          }
          return null;
        }
        SetSubtitles(e) {
          let t = e ? B.bi[e] : f.xPp;
          this.m_player.SetSubtitles(t);
        }
        SetStartWithSubtitles(e) {
          this.m_bStartWithSubtitles = e;
        }
        GetBroadcastState() {
          return U.GetBroadcastState(this);
        }
        GetBroadcastStateDescription() {
          return U.GetBroadcastStateDescription(this);
        }
        SetOnVideoCallback(e) {
          this.m_fnOnVideoEnd = e;
        }
        InitPlayer() {
          (0, I.wT)(!this.m_player, "Initialized twice?"),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "playing",
              this.OnVideoPlaying,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "pause",
              this.OnVideoPause,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "timeupdate",
              this.OnVideoTimeUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "volumechange",
              this.OnVolumeUpdated,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-bufferupdate",
              this.OnVideoTimeUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-gamedataupdate",
              this.OnGameDataUpdate,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-downloadfailed",
              this.OnDownloadFailed,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-webrtcretry",
              this.OnWebRTCRetry,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-webrtcfailed",
              this.OnWebRTCFailed,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              "valve-userinputneeded",
              this.OnUserInputNeeded,
            ),
            (this.m_bPaused = !1),
            (this.m_nPlaybackTime = 0),
            (this.m_bBuffering = !1),
            (this.m_nTimelineDuration = 1800),
            (this.m_nVideoStartPos = 0),
            (this.m_nVideoEndPos = 0),
            this.m_rgMarkers.clear(),
            this.m_rgSegments.clear(),
            (this.m_bUserInputNeeded = !1),
            (this.m_bIsReplay = !1);
        }
        Restart() {
          this.IsMuted() ||
            this.IsPaused() ||
            this.GetUserInputNeeded() ||
            this.Play();
        }
        StartBroadcast(e) {
          if ((this.InitPlayer(), e.m_data.url)) {
            let t = new p.Zn(this.m_elVideo);
            t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = t),
              t.PlayMPD(
                e.m_data.url,
                e.m_data.hls_url,
                void 0,
                e.m_strCDNAuthUrlParameters,
              );
          } else {
            let t = new y(this.m_elVideo);
            (this.m_player = t),
              t.PlayWebRTC(
                this.m_steamIDBroadcast,
                e.m_ulViewerToken,
                e.m_data.webrtc_session_id,
                e.m_data.webrtc_turn_server,
                e.m_data.webrtc_offer_sdp,
              );
          }
          this.SetVolume(this.m_nVolume), this.m_player.SetMuted(this.m_bMuted);
          let t = this.m_player.GetDASHPlayerStats();
          t &&
            t.SetBroadcasterAndViewerInfo(
              this.m_steamIDBroadcast,
              _.iA.steamid,
              e.m_ulBroadcastID,
              e.m_ulViewerToken,
            ),
            (this.m_BroadcastInfo = U.StartInfo(this.m_steamIDBroadcast));
        }
        StartClip(e) {
          this.InitPlayer();
          let t = new p.Zn(this.m_elVideo);
          t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = t),
            t.PlayMPD(e.m_data.clip_url),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        StartVOD(e) {
          this.InitPlayer();
          let t = new p.Zn(this.m_elVideo);
          t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = t),
            _.iA.logged_in &&
              e.m_nAppIDVOD &&
              t.SetBookmarkAdapter(new k.M(e.m_nAppIDVOD)),
            t.PlayMPD(e.m_manifestURL),
            this.SetVolume(this.m_nVolume),
            this.m_player.SetMuted(this.m_bMuted);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_BroadcastInfo &&
              (U.StopInfo(this.m_BroadcastInfo), (this.m_BroadcastInfo = null)),
            (this.m_gameDataParser = null),
            this.m_player && (this.m_player.Close(), (this.m_player = null));
        }
        TogglePlayPause() {
          !this.m_player || this.m_player.IsPaused()
            ? this.Play()
            : this.Pause();
        }
        Play() {
          const e = this.GetBroadcastState();
          e == O.None || this.IsBroadcastClip()
            ? U.StartVideo(this)
            : e == O.Ready &&
              (U.SetActiveVideo(this),
              this.m_player
                ? this.m_player.Play()
                : this.IsBroadcastVOD()
                  ? this.StartVOD(U.GetBroadcastVOD(this.m_nBroadcastAppIDVOD))
                  : this.StartBroadcast(
                      U.GetBroadcast(this.m_steamIDBroadcast),
                    ));
        }
        Pause() {
          console.log(
            "Pause ",
            this.m_steamIDBroadcast,
            this.m_nBroadcastAppIDVOD,
            this.m_broadcastClipID,
          ),
            this.m_player && this.m_player.Pause();
        }
        JumpTime(e) {
          this.m_player.JumpTime(e);
        }
        Seek(e) {
          var t;
          null === (t = this.m_player) || void 0 === t || t.Seek(e);
        }
        SeekAndPlay(e) {
          this.m_player.SeekAndPlay(e);
        }
        JumpToLiveEdge() {
          this.m_player.IsLiveContent()
            ? this.SeekAndPlay(this.m_player.GetBufferedLiveEdgeTime())
            : this.SeekAndPlay(this.m_player.GetAvailableVideoStartTime());
        }
        SetVolume(e) {
          this.m_player && this.m_player.SetVolume(e),
            (this.m_nVolume = this.m_player.GetVolume()),
            U.SaveVolumeChange(e, this.m_bMuted);
        }
        SetMute(e) {
          this.m_player && this.m_player.SetMuted(e),
            (this.m_bMuted = e),
            U.SaveVolumeChange(this.m_nVolume, e);
        }
        IsMuted() {
          return this.m_bMuted;
        }
        OnVideoPlaying() {
          (this.m_bPaused = !1),
            0 === this.m_editorStartTime &&
              0 === this.m_editorEndTime &&
              ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
              (this.m_editorEndTime =
                this.GetVideoAvailableStartTime() +
                this.GetTimelineDuration()));
        }
        OnVideoPause() {
          this.m_bPaused = !0;
        }
        OnVideoTimeUpdate() {
          if (
            (window.clearTimeout(this.m_videoEndingTimer),
            this.IsBroadcastClip())
          )
            (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()),
              (this.m_nVideoStartPos =
                this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoEndPos = this.m_player.GetBufferedLiveEdgeTime()),
              (this.m_nTimelineDuration =
                this.m_nVideoEndPos - this.m_nVideoStartPos),
              (this.m_bOnLiveEdge = !1),
              (this.m_bBuffering = this.m_player.IsBuffering());
          else {
            if (
              ((this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()),
              (this.m_nVideoStartPos =
                this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoEndPos = Math.max(
                this.m_player.GetBufferedLiveEdgeTime(),
                this.m_nPlaybackTime,
              )),
              this.IsBroadcastVOD() &&
                ((this.m_nTimelineDuration = this.m_nVideoEndPos),
                this.m_fnOnVideoEnd &&
                  this.m_nVideoEndPos - this.m_nPlaybackTime < p.Br))
            ) {
              const e = 400;
              this.m_videoEndingTimer = window.setTimeout(() => {
                this.m_fnOnVideoEnd();
              }, e);
            }
            (this.m_bBuffering = this.m_player.IsBuffering()),
              (this.m_bOnLiveEdge =
                this.m_nVideoEndPos - this.m_nPlaybackTime < p.Br),
              this.m_player.IsPaused() && (this.m_bOnLiveEdge = !1);
          }
        }
        OnVolumeUpdated() {
          (this.m_nVolume = this.m_player.GetVolume()),
            (this.m_bMuted = this.m_player.IsMuted());
        }
        OnGameDataUpdate(e) {
          let t = e.detail;
          if (!t || "object" != typeof t.gamedata) return;
          (this.m_gameDataParser &&
            this.m_gameDataParser.GetAppID() == t.gamedata.__appid) ||
            (this.m_gameDataParser = new h(t.gamedata.__appid));
          const s = this.m_player.GetLiveContentStartTime().getTime();
          if ("timelinemarkers" in t.gamedata) {
            const e = this.m_gameDataParser.UpdateMarkers(
              t.gamedata.__timelinemarkers,
              s,
            );
            e &&
              (this.m_rgMarkers.replace(e.rgMarkers || []),
              this.m_rgSegments.replace(e.rgSegments || []));
            const i = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
            i && this.m_rgRegions.replace(i);
          } else
            "soundtrack" in t.gamedata &&
              this.m_gameDataParser.UpdateSoundtrack(
                this.m_steamIDBroadcast,
                t.gamedata.soundtrack,
              );
        }
        OnDownloadFailed(e) {
          let t = e.detail || p.N_.Invalid;
          U.BroadcastDownloadFailed(this, !0, t);
        }
        OnWebRTCRetry() {
          U.BroadcastDownloadFailed(this, !1);
        }
        OnWebRTCFailed() {
          U.BroadcastDownloadFailed(this, !0);
        }
        OnUserInputNeeded() {
          this.m_bUserInputNeeded = !0;
        }
        UserInputClick() {
          (this.m_bUserInputNeeded = !1),
            this.m_player ? this.JumpToLiveEdge() : this.Play();
        }
        StopPlaybackTillUserInput() {
          this.Stop(), this.OnUserInputNeeded();
        }
        GetTimelineStartPos() {
          return this.m_nVideoEndPos - this.m_nTimelineDuration;
        }
        GetTimelineDuration() {
          return this.m_nTimelineDuration;
        }
        GetTimeAtMousePosition(e, t, s, i) {
          let a = u.Fu(e, t.left, t.right, s, i);
          return Math.floor(a + 0.5);
        }
        GetPercentOffsetFromTime(e, t) {
          let s = 0,
            i = 0;
          return (
            t == x.Timeline
              ? ((i = this.m_nVideoEndPos), (s = i - this.m_nTimelineDuration))
              : ((s = 0), (i = 0)),
            u.Fu(e, s, i, 0, 100)
          );
        }
        GetTimelineMarkers() {
          return this.m_rgMarkers;
        }
        GetTimelineSegments() {
          return this.m_rgSegments;
        }
        GetGameDataRegions() {
          return this.m_rgRegions;
        }
        BHasMarkersOrSegments() {
          return this.has_segments || this.has_markers;
        }
        get has_markers() {
          return this.m_rgMarkers.length > 0;
        }
        get has_segments() {
          return this.m_rgSegments.length > 0;
        }
      }
      (0, i.Cg)([r.sH], N.prototype, "m_player", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_bPaused", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_nPlaybackTime", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_bBuffering", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_bOnLiveEdge", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_nVolume", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_bMuted", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_bUserInputNeeded", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_bIsReplay", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_nTimelineDuration", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_nVideoStartPos", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_nVideoEndPos", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_editorStartTime", void 0),
        (0, i.Cg)([r.sH], N.prototype, "m_editorEndTime", void 0),
        (0, i.Cg)([r.XI.bound], N.prototype, "StartBroadcast", null),
        (0, i.Cg)([r.XI.bound], N.prototype, "StartClip", null),
        (0, i.Cg)([r.XI.bound], N.prototype, "StartVOD", null),
        (0, i.Cg)([S.o], N.prototype, "OnVideoPlaying", null),
        (0, i.Cg)([S.o], N.prototype, "OnVideoPause", null),
        (0, i.Cg)([r.XI.bound], N.prototype, "OnVideoTimeUpdate", null),
        (0, i.Cg)([S.o], N.prototype, "OnVolumeUpdated", null),
        (0, i.Cg)([r.XI.bound], N.prototype, "OnGameDataUpdate", null),
        (0, i.Cg)([S.o], N.prototype, "OnDownloadFailed", null),
        (0, i.Cg)([S.o], N.prototype, "OnWebRTCRetry", null),
        (0, i.Cg)([S.o], N.prototype, "OnWebRTCFailed", null),
        (0, i.Cg)([S.o], N.prototype, "OnUserInputNeeded", null);
      const U = new j();
      window.uiBroadcastWatchStore = U;
    },
  },
]);
