(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3834],
  {
    86721: (e) => {
      e.exports = {
        BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
        BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
        BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
        BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
      };
    },
    21501: (e) => {
      e.exports = {
        LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
        EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
        LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
        LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
        TopLeft: "Clgi---P85XXv25yLZwB0",
        Top: "_2Z9VyBAzofV3JvK__dECbX",
        TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
        Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
        Middle: "_1HecozzoSZfUZSci9dLkxN",
        LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
        LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
        Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
        BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
        Bottom: "sIHlK9sN2255-irERXD_V",
        BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
        topleft: "_3W096h6Ka6U7sOZVa9lXQo",
        top: "_1iRW1Msfh60zHqD-xe4EAk",
        topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
        left: "_2iBrmAEyXuaKAeZ-g-4CPF",
        right: "_15t6A4l27DY4KRL1aAUTTS",
        bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
        bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
        bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
        middle: "_1CS75ZrrDXna6xatw5ZvPR",
        LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
        DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
        LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
        LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
      };
    },
    72993: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastDetails: () => oe,
          LinkOverlay: () => re,
          default: () => J,
        });
      var i = s(34629),
        o = s(62540),
        n = s(89193),
        r = s(41230),
        l = s(63696),
        a = s(31084),
        d = s(67687),
        h = s(45328),
        c = s(23024),
        u = s(52492),
        p = s(65016),
        m = s(88750),
        g = s(27337),
        S = s(3539),
        v = s(59848),
        C = s(29381),
        P = s(50376),
        _ = s(43397),
        b = s(79769),
        x = s(90765),
        k = s(54644),
        w = s(46108),
        f = s(34428),
        M = s(49412),
        D = s(51115),
        O = s(72476),
        L = s(21866),
        y = s(59715),
        B = s(86721),
        j = s.n(B),
        T = s(26853);
      function V() {
        return (0, o.jsx)("div", {
          className: "STV_ReplayBanner",
          children: (0, w.we)("#DASHPlayerControls_IsReplay"),
        });
      }
      const R = (0, r.PA)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let s = c.fK.Loading,
          i = "";
        if (t) {
          (s = t.GetBroadcastState()), (i = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          s == c.fK.Unlocking && ((s = c.fK.Loading), (i = "")),
            s == c.fK.Ready && e && ((s = c.fK.Loading), (i = ""));
        }
        if (t && s != c.fK.Error && t.GetUserInputNeeded()) return null;
        if (s == c.fK.Ready) return null;
        let n = s == c.fK.Loading;
        return (0, o.jsxs)("div", {
          className: "BroadcastVideoWatchState",
          style: { filter: "hue-rotate(40deg)" },
          children: [
            n && (0, o.jsx)(T.t, {}),
            !n &&
              (0, o.jsx)("div", {
                className: "BroadcastVideoWatchState_Text",
                children: i,
              }),
          ],
        });
      });
      class I extends l.Component {
        OnClick() {
          c.BroadcastWatchStore.UserInputClickVideo(this.props.video);
        }
        render() {
          return (0, o.jsxs)("div", {
            className: "BroadcastVideoUserInputNeeded",
            onClick: this.OnClick,
            children: [
              (0, o.jsx)(P.jGG, {}),
              (0, o.jsx)("span", {
                children: (0, w.we)("#DASHPlayerControls_ClickToPlay"),
              }),
            ],
          });
        }
      }
      (0, i.Cg)([D.oI], I.prototype, "OnClick", null);
      let N = class extends l.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return (0, o.jsxs)("div", {
            className: "dash_video_stats",
            children: [
              (0, o.jsx)("button", {
                className: "dash_stat_close_button",
                onClick: this.HideStats,
                children: (0, o.jsx)(P.sED, {}),
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_BufferingResolution"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBufferingResolutionToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_PlaybackResolution"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetPlaybackResolutionToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_HtmlResolution"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetHTMLVideoResolutionToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_ContentServer"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetContentServerToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_StallEvents"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetStalledEventsToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_FailedDownloads"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetFailedDownloadsToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_TimeToFirstFrame"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetTimeToFirstFrameToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_PlaybackRate"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetPlaybackRateForDisplay(),
                  }),
                ],
              }),
              (0, o.jsx)(A, { stats: e }),
            ],
          });
        }
      };
      (0, i.Cg)([D.oI], N.prototype, "HideStats", null),
        (N = (0, i.Cg)([r.PA], N));
      let A = class extends l.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            s = [],
            i = e ? "vidbuf" : "audbuf",
            n = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (n > 0)
            for (let r = 0; r < n; ++r) {
              let n = (0, w.we)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  r,
                ),
                l = e
                  ? t.GetBufferedVideoSegmentForDisplay(r)
                  : t.GetBufferedAudioSegmentForDisplay(r);
              s.push(
                (0, o.jsxs)(
                  "div",
                  {
                    children: [
                      n,
                      " ",
                      (0, o.jsx)("span", {
                        className: "videoStatsValue",
                        children: l,
                      }),
                    ],
                  },
                  i + r,
                ),
              );
            }
          else {
            let t = (0, w.we)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation",
            );
            s.push((0, o.jsx)("div", { children: t }, i + "none"));
          }
          return s;
        }
        render() {
          let e = this.props.stats;
          return (0, o.jsxs)("div", {
            className: "dash_video_quick_stats",
            children: [
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_BytesReceived"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBytesReceivedToDisplay(),
                  }),
                ],
              }),
              this.props.stats.BHasFrameInformation() &&
                (0, o.jsxs)("div", {
                  children: [
                    (0, w.we)("#DASHPlayerStats_DroppedFrames"),
                    " ",
                    (0, o.jsx)("span", {
                      className: "videoStatsValue",
                      children: e.GetDroppedFramesToDisplay(),
                    }),
                  ],
                }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_VideoBuffered"),
                  " ",
                  (0, o.jsxs)("span", {
                    className: "videoStatsValue",
                    children: [e.GetVideoBufferedToDisplay(), " "],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_AudioBuffered"),
                  " ",
                  (0, o.jsxs)("span", {
                    className: "videoStatsValue",
                    children: [e.GetAudioBufferedToDisplay(), " "],
                  }),
                ],
              }),
              this.createBufferedRange(!0),
              this.createBufferedRange(!1),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_BandwidthRequired"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBandwidthRequiredToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_BandwidthVideo"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBandwithVideoToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_BandwidthNums"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetBandwidthStatsToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_DownloadNums"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetDownloadTimeStatsToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_ActiveDownloads"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetActiveDownloadsToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_VideoDownloadProgress"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetVideoDownloadProgressToDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_DroppingFrames"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetPersistentFrameDropsForDisplay(),
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, w.we)("#DASHPlayerStats_CurrentFPS"),
                  " ",
                  (0, o.jsx)("span", {
                    className: "videoStatsValue",
                    children: e.GetCurrentFPSForDisplay(),
                  }),
                ],
              }),
            ],
          });
        }
      };
      A = (0, i.Cg)([r.PA], A);
      var E = s(32263);
      class H extends l.Component {
        m_elSettingsButton;
        m_SettingsButtonPos;
        m_elClickListener;
        m_elSettingsPanel;
        m_elSubtitlesButton = l.createRef();
        m_elSubtitlesPanel = l.createRef();
        m_SubtitlesButtonPos;
        constructor(e) {
          super(e), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
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
            (0, k.id)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            (0, k.id)(this.m_elSubtitlesPanel.current, e.target) ||
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
          let n,
            r,
            l = 0,
            a = (0, o.jsx)(
              "div",
              { className: "settingsMenuSeparator" },
              "separator",
            );
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (n = this.props.video.GetVideoRepresentations()),
              (r = n.map((e) =>
                (0, o.jsx)(
                  E.n,
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
              r.push(a),
              r.push(
                (0, o.jsxs)(
                  E.D,
                  {
                    onClick: this.OnShowStats,
                    children: [
                      (0, w.we)("#Broadcast_VideoContext_ToggleStats"),
                      "\t",
                    ],
                  },
                  "statsToggle",
                ),
              ),
              (l = 0 - (21 * r.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (r = []),
              r.push(
                (0, o.jsx)(
                  E.n,
                  {
                    onClick: () => {
                      this.props.video.SetSubtitles(null),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    className: "NoSubtitles",
                    bChecked: !1,
                    children: (0, w.we)("#Broadcast_None"),
                  },
                  "none",
                ),
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              r.push(
                (0, o.jsx)(
                  E.n,
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
            l = -292;
          }
          const d =
            this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
          return (0, o.jsxs)("div", {
            className: "STV_BroadcastSettings",
            children: [
              d &&
                (0, o.jsx)("div", {
                  className:
                    "videoControlButton" + (d ? " ClosedCaptionsActive" : ""),
                  onClick: this.OnSubtitlesClick,
                  ref: this.m_elSubtitlesButton,
                  children: (0, o.jsx)(P.N8C, {}),
                }),
              (0, o.jsx)("div", {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
                children: (0, o.jsx)(P.wB_, {}),
              }),
              (0, o.jsx)(U, { video: s }),
              i &&
                i.map((e) =>
                  (0, o.jsx)(
                    "div",
                    {
                      className: "videoControlButton videoControlFitWidth",
                      children: e,
                    },
                    e.key,
                  ),
                ),
              e &&
                (0, o.jsx)("div", {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: l,
                  },
                  children: (0, o.jsx)("div", {
                    className: "STV_BroadcastSettingsMenuItems",
                    children: r,
                  }),
                }),
              t &&
                (0, o.jsx)("div", {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "260px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: l,
                  },
                  children: (0, o.jsx)("div", {
                    className: "STV_BroadcastSettingsMenuItems",
                    children: r,
                  }),
                }),
            ],
          });
        }
      }
      (0, i.Cg)([D.oI], H.prototype, "OnVideoControlClick", null),
        (0, i.Cg)([D.oI], H.prototype, "OnSubtitlesClick", null),
        (0, i.Cg)([D.oI], H.prototype, "OnMouseUp", null),
        (0, i.Cg)([D.oI], H.prototype, "bindSettingsButton", null),
        (0, i.Cg)([D.oI], H.prototype, "BindSettingsPanel", null),
        (0, i.Cg)([D.oI], H.prototype, "OnShowStats", null);
      const G = !0;
      let U = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this);
        }
        k_nHideSliderTimeout = 1500;
        m_bShowSlider = G;
        m_schHideSlider = new b.LU();
        m_bChildDragging = !1;
        m_bMouseOver = !1;
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
              () => (this.m_bShowSlider = G),
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
          let n = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (n += " ShowVolumeSlider"),
            t && (n += " muted"),
            (0, o.jsx)("div", {
              className: n,
              onMouseEnter: this.OnMouseEnter,
              onMouseLeave: this.OnMouseLeave,
              children: (0, o.jsxs)("div", {
                className: "BroadcastVolumeControl_FixedLayout",
                children: [
                  (0, o.jsx)("div", {
                    className: i,
                    onClick: this.ToggleMute,
                    children: (0, o.jsx)(P.fSs, {}),
                  }),
                  (0, o.jsx)(F, { video: e, onDrag: this.OnChildDrag }),
                ],
              }),
            })
          );
        }
      };
      (0, i.Cg)([n.sH], U.prototype, "m_bShowSlider", void 0),
        (0, i.Cg)([D.oI], U.prototype, "ToggleMute", null),
        (0, i.Cg)([D.oI], U.prototype, "OnMouseEnter", null),
        (0, i.Cg)([D.oI], U.prototype, "OnMouseLeave", null),
        (0, i.Cg)([D.oI], U.prototype, "OnChildDrag", null),
        (U = (0, i.Cg)([r.PA], U));
      let F = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this);
        }
        m_elSlider = null;
        m_nVolumeStartOfDrag = 0;
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
            i = M.Fu(t, s.left, s.right, 0, 1),
            o = M.OQ(i, 0, 1),
            n = this.props.video;
          n.SetMute(i < 0.01), n.SetVolume(o);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let s = { left: `${t}%` },
            i = { width: `${t}%` };
          return (0, o.jsxs)("div", {
            className: "BroadcastVolumeSlider",
            onMouseDown: this.OnMouseDown,
            children: [
              (0, o.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
              (0, o.jsx)("div", {
                className: "BroadcastVolumeSlider_Fill",
                style: i,
              }),
              (0, o.jsx)("div", {
                className: "BroadcastVolumeSlider_Thumb",
                style: s,
              }),
            ],
          });
        }
      };
      (0, i.Cg)([D.oI], F.prototype, "OnMouseDown", null),
        (0, i.Cg)([D.oI], F.prototype, "OnMouseMove", null),
        (0, i.Cg)([D.oI], F.prototype, "OnMouseUp", null),
        (0, i.Cg)([n.XI], F.prototype, "SetVolumeWithCoord", null),
        (F = (0, i.Cg)([r.PA], F));
      var W = s(92008);
      const z = 15;
      let X = class extends l.Component {
        m_schHideControls = new b.LU();
        m_schUnmountControls = new b.LU();
        m_elVideo = null;
        m_elBroadcastPlayer = null;
        m_bMouseDown = !1;
        m_elMouseDown = null;
        m_listeners = new b.Ji();
        constructor(e) {
          super(e),
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
          let e = this.state.video;
          e &&
            (c.BroadcastWatchStore.StopVideo(e),
            this.setState({ video: null }),
            this.props.fnSetBroadcastVideo?.(null));
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
              u.A.Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = u.A.Get().GetApp(this.props.nAppIDVOD),
                    t = e?.GetAssets().GetMainCapsuleURL() || "";
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
          let t;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (t = c.BroadcastWatchStore.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC,
                ))
              : this.props.broadcastClipID
                ? e &&
                  (t = c.BroadcastWatchStore.CreateClipVideo(
                    e,
                    this.props.broadcastClipID,
                    this.props.watchLocation,
                  ))
                : this.props.nAppIDVOD &&
                  e &&
                  ((t = c.BroadcastWatchStore.CreateVODVideo(
                    e,
                    this.props.nAppIDVOD,
                    this.props.watchLocation,
                  )),
                  this.props.fnOnVideoEnd &&
                    t.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            t &&
              (this.props.bStartMuted && t.SetMute(!0),
              this.props.bStartWithSubtitles && t.SetStartWithSubtitles(!0),
              this.props.bStartPaused
                ? t.StopPlaybackTillUserInput()
                : t.Play()),
            this.setState({ video: t }),
            this.props.fnSetBroadcastVideo?.(t),
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
            ((0, a.lX)(
              (0, o.jsx)(m.tz, { children: this.GetContextMenuItems() }),
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
          let i = (0, h.k2)(`${O.TS.STORE_BASE_URL}app/${s.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, i), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let s = t.GetBroadcastInfo();
          return (
            e.push(
              (0, o.jsx)(
                m.IK,
                {
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                  children: (0, w.we)("#Broadcast_VideoContext_ToggleStats"),
                },
                "togglestats",
              ),
            ),
            s &&
              "0" != s.m_strAppId &&
              Number.parseInt(s.m_strAppId) != c.fO &&
              e.push(
                (0, o.jsx)(
                  m.kt,
                  {
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                    children: (0, w.we)("#Broadcast_VideoContext_OpenStore"),
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
            ((0, k.ww)(this.m_elBroadcastPlayer)
              ? (0, k.MS)(this.m_elBroadcastPlayer)
              : (0, k.tl)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = (0, k.ww)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            c.BroadcastWatchStore.GetBroadcastState(e) == c.fK.Error
          );
        }
        render() {
          const e = this.state.video,
            t = e && e.IsPaused(),
            s = e && e.BHasDASHStats() && this.state.bShowStats,
            i = Boolean(e && e.IsReplay()),
            n = this.state.bMountControls,
            r = this.state.bControlsVisible || t,
            l = e && e.GetUserInputNeeded(),
            a =
              e?.IsBroadcastVOD() && l && this.state.strInitialCapsuleImageUrl;
          let d = "videoContainer";
          r || (d += " HidePlayerControls"),
            t && (d += " VideoPaused"),
            this.state.bFullscreen && (d += " fullscreenVideo"),
            this.props.classes && (d += " " + this.props.classes);
          let h = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (h = h.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              h.push(
                (0, o.jsx)(
                  "div",
                  {
                    onClick: this.props.onTheaterMode,
                    title: (0, w.we)("#Broadcast_View_Theater"),
                    className: "BroadcastTheaterToggle",
                  },
                  "ChatPosToggle ChatTheaterToggle",
                ),
              ),
            h.push(
              (0, o.jsx)(
                "div",
                {
                  title: (0, w.we)("#Broadcast_View_Fullscreen"),
                  onClick: this.OnToggleFullscreen,
                  className: "BroadcastFullscreenToggle",
                },
                "FullscreenToggle",
              ),
            );
          const c = n && !this.BHideVideoControls(),
            u = n && !this.state.bFullscreen,
            m =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return (0, o.jsxs)("div", {
            ref: this.BindBroadcastPlayerRef,
            className: d,
            onMouseMove: this.OnMouseMove,
            onClick: this.OnMouseMove,
            onMouseLeave: this.OnMouseLeave,
            onContextMenu: this.OnContextMenu,
            onMouseDown: this.OnMouseDown,
            children: [
              m &&
                (0, o.jsx)("div", {
                  className: j().BroadcastContext,
                  children: m,
                }),
              i && (0, o.jsx)(V, {}),
              this.props.showVideoBackgroundBlur &&
                (0, o.jsx)(p.m, {
                  className: "videoBlur",
                  elementRef: this.m_elVideo,
                  updateRate: 33,
                  width: 320,
                  height: 180,
                  reductionFactor: 10,
                  blurAmount: 5,
                }),
              (0, o.jsx)("video", {
                className: "videoSrc",
                ref: this.BindVideoRef,
                muted: this.props.bMuted ?? !0,
                autoPlay: !0,
                playsInline: !0,
                controls: !1,
                onVolumeChange: this.props.fnVolumeChanged,
                onClick: this.props.fnVideoClick,
              }),
              this.props.linkRegions
                ? (0, o.jsx)(re, {
                    linkRegions: this.props.linkRegions,
                    editMode: this.props.editMode,
                    onSaveLinkRegions: this.props.onSaveLinkRegions,
                  })
                : null,
              this.props.linkElement,
              a &&
                (0, o.jsx)("img", {
                  loading: "lazy",
                  className: (0, x.A)(
                    j().BroadcastPlaceholderImg,
                    "BroadcastPlaceholderImg",
                  ),
                  src: this.state.strInitialCapsuleImageUrl,
                }),
              c &&
                (0, o.jsx)(K, {
                  video: e,
                  actions: h,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                  onShowStats: this.ToggleStatsView,
                  bIncludeClipEditor: this.props.bIncludeClipEditor,
                }),
              u && (0, o.jsx)($, { onClick: this.props.onRequestClose }),
              s &&
                (0, o.jsx)(N, {
                  stats: e.GetDASHPlayerStats(),
                  closeStats: this.CloseStats,
                }),
              (0, o.jsx)(R, { video: e }),
              l && (0, o.jsx)(I, { video: e }),
            ],
          });
        }
      };
      (0, i.Cg)([D.oI], X.prototype, "BindBroadcastPlayerRef", null),
        (0, i.Cg)([D.oI], X.prototype, "BindVideoRef", null),
        (0, i.Cg)([D.oI], X.prototype, "OnMouseDown", null),
        (0, i.Cg)([D.oI], X.prototype, "OnMouseUp", null),
        (0, i.Cg)([D.oI], X.prototype, "OnMouseMove", null),
        (0, i.Cg)([D.oI], X.prototype, "OnMouseLeave", null),
        (0, i.Cg)([D.oI], X.prototype, "HideControls", null),
        (0, i.Cg)([D.oI], X.prototype, "UmountControls", null),
        (0, i.Cg)([D.oI], X.prototype, "ShowStatsView", null),
        (0, i.Cg)([D.oI], X.prototype, "OnContextMenu", null),
        (0, i.Cg)([D.oI], X.prototype, "ToggleStatsView", null),
        (0, i.Cg)([D.oI], X.prototype, "ShowStorePage", null),
        (0, i.Cg)([D.oI], X.prototype, "CloseStats", null),
        (0, i.Cg)([D.oI], X.prototype, "OnToggleFullscreen", null),
        (0, i.Cg)([D.oI], X.prototype, "OnFullscreenChange", null),
        (X = (0, i.Cg)([r.PA], X));
      const J = X;
      let K = class extends l.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return (0, o.jsxs)("div", {
            className: "videoControls",
            children: [
              (0, o.jsx)(oe, {
                steamID: this.props.video.GetBroadcastSteamID(),
                bHideThumbnail: !0,
                bVerticalBroadcastChat: !0,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
              }),
              (0, o.jsxs)("div", {
                className: "videoControlsBottom" + (t ? "" : " noSegments"),
                children: [
                  (0, o.jsx)(ie, {
                    video: e,
                    bIncludeClipEditor: this.props.bIncludeClipEditor,
                  }),
                  (0, o.jsxs)("div", {
                    className: "STV_BroadcastController",
                    children: [
                      (0, o.jsx)("div", {
                        className: "videoControlsButtons LeftSpacer",
                      }),
                      (0, o.jsx)(Y, { video: e }),
                      (0, o.jsx)(Q, { video: e }),
                      (0, o.jsx)(H, {
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
      K = (0, i.Cg)([r.PA], K);
      class $ extends l.PureComponent {
        render() {
          return this.props.onClick
            ? (0, o.jsx)("div", {
                className: "STV_BroadcastClose",
                onClick: this.props.onClick,
                children: (0, o.jsx)(P.sED, {}),
              })
            : null;
        }
      }
      class Y extends l.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(z);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return (0, o.jsxs)("div", {
            className: "videoControlsButtons PlayControls",
            children: [
              (0, o.jsx)(Z, { video: e }),
              t &&
                (0, o.jsxs)("div", {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                  children: [
                    (0, o.jsx)(P.tID, {
                      bHidePostArrow: !0,
                      bHidePreArrow: !0,
                      bShowJumpAheadBox: !0,
                      bFlipHorizontal: !0,
                    }),
                    (0, o.jsx)("div", {
                      className: "jumpAheadValue",
                      children: z,
                    }),
                  ],
                }),
              (0, o.jsx)(q, { video: e }),
              t &&
                (0, o.jsxs)("div", {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                  children: [
                    (0, o.jsx)(P.tID, {
                      bHidePostArrow: !0,
                      bHidePreArrow: !0,
                      bShowJumpAheadBox: !0,
                      bFlipHorizontal: !1,
                    }),
                    (0, o.jsx)("div", {
                      className: "jumpAheadValue",
                      children: z,
                    }),
                  ],
                }),
              t && (0, o.jsx)(ee, { video: e }),
            ],
          });
        }
      }
      (0, i.Cg)([D.oI], Y.prototype, "OnJumpBackward", null),
        (0, i.Cg)([D.oI], Y.prototype, "OnJumpForward", null);
      const Q = (0, r.PA)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return (0, o.jsx)("div", {
          className: "videoControlsButtons GoLive",
          children: (0, o.jsxs)("div", {
            className:
              "videoControlButton videoControlGoLive" +
              (t ? " isLiveEdge" : ""),
            onClick: t
              ? null
              : (t) => {
                  e.video.JumpToLiveEdge();
                },
            children: [
              (0, o.jsx)(P.tID, {
                bHidePreArrow: !0,
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
              (0, o.jsx)("div", {
                className: "jumpGoLive",
                children: (0, w.we)(
                  t
                    ? "#DASHPlayerControls_IsLive"
                    : "#DASHPlayerControls_GoLive",
                ),
              }),
            ],
          }),
        });
      });
      let q = class extends l.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return (0, o.jsx)("div", {
            className: "videoControlButton buttonPlayPause",
            onClick: this.OnTogglePlayPause,
            children: e ? (0, o.jsx)(P.jGG, {}) : (0, o.jsx)(P.vRz, {}),
          });
        }
      };
      (0, i.Cg)([D.oI], q.prototype, "OnTogglePlayPause", null),
        (q = (0, i.Cg)([r.PA], q));
      let Z = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this), (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        video = void 0;
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
          return (0, o.jsx)("div", {
            className:
              "videoControlButton jumpToMarker controlFlip" +
              (e ? "" : " noMarkersOrSegments") +
              (this.has_previous_marker ? "" : " noMarkersInDirection"),
            onClick: this.OnJumpToPreviousMarkerClicked,
            children: (0, o.jsx)(P.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !0,
            }),
          });
        }
      };
      (0, i.Cg)([n.sH], Z.prototype, "video", void 0),
        (0, i.Cg)([n.EW], Z.prototype, "has_previous_marker", null),
        (0, i.Cg)([D.oI], Z.prototype, "OnJumpToPreviousMarkerClicked", null),
        (Z = (0, i.Cg)([r.PA], Z));
      let ee = class extends l.Component {
        constructor(e) {
          super(e), (0, n.Gn)(this), (this.video = e.video);
        }
        componentDidUpdate() {
          this.video = this.props.video;
        }
        video = void 0;
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
          return (0, o.jsx)("div", {
            className:
              "videoControlButton jumpToMarker" +
              (e ? "" : " noMarkersOrSegments") +
              (this.has_next_marker ? "" : " noMarkersInDirection"),
            onClick: this.OnJumpToNextMarkerClicked,
            children: (0, o.jsx)(P.tID, {
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
          });
        }
      };
      (0, i.Cg)([n.sH], ee.prototype, "video", void 0),
        (0, i.Cg)([n.EW], ee.prototype, "has_next_marker", null),
        (0, i.Cg)([D.oI], ee.prototype, "OnJumpToNextMarkerClicked", null),
        (ee = (0, i.Cg)([r.PA], ee));
      const te = (e) =>
        (0, o.jsx)("div", {
          className: "timelineMarker",
          title: e.label,
          style: { left: e.pos + "%" },
          onMouseEnter: () => e.onMouseEnter(e.pos),
          onMouseLeave: e.onMouseLeave,
          onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          children: (0, o.jsx)("div", {
            className: "timelineMarkerIcon",
            children: (0, o.jsx)(P.Dp6, {}),
          }),
        });
      function se(e) {
        let t = e.startPos,
          s = e.endPos,
          i = "",
          n = 1;
        return (
          t < 0 && ((n = (s - t) / 10), (t = 0), (i = " hideFront")),
          (0, o.jsxs)("div", {
            className: "STV_timelineSegment" + i,
            style: { left: t + "%", width: s - t + "%", opacity: n },
            onClick: e.onClick,
            children: [
              (0, o.jsx)("div", {
                className: "STV_timelineSegmentFrontFill",
                style: { borderColor: "rgb(" + e.color + ")" },
              }),
              (0, o.jsx)("div", {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
                children: e.label,
              }),
              (0, o.jsx)("div", {
                className: "STV_timelineSegmentBackFill",
                style: { borderColor: "rgb(" + e.color + ")" },
              }),
            ],
          })
        );
      }
      let ie = class extends l.Component {
        m_elSlider = l.createRef();
        m_rectSlider = void 0;
        constructor(e) {
          super(e),
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
            o = t.GetTimeAtMousePosition(e, this.m_rectSlider, s, i);
          if (this.state.bStartMouseDown) {
            const e = M.OQ(o, s, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = M.OQ(o, t.m_editorStartTime + 5, i);
            t.m_editorEndTime = e;
          } else
            o != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: o });
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
              c.a0.Timeline,
            ),
            i = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), c.a0.Timeline),
            n = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              c.a0.Timeline,
            );
          n < 0.05 && (n = 0);
          let r = M.OQ(s, 0, 100).toFixed(1) + "%",
            l = M.OQ(i, 0, 100).toFixed(1) + "%",
            a = M.OQ(n, 0, 100).toFixed(1) + "%",
            d = {},
            h = {},
            u = {},
            p = {};
          t
            ? ((p.left = r), (d.width = r), (h.width = l), (u.width = a))
            : ((p.left = l), (h.width = l), (u.width = a));
          let m = (0, y.ap)(e.GetPlaybackTime()),
            g = (0, y.ap)(this.state.nHoverValue),
            S = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (S += " grabberDown"),
            e.IsTimelineMapActive() && (S += " minimapActive");
          let v = "";
          (s = t ? s : i),
            s > 100
              ? (v = " grabberOffScreenRight grabberOffscreen")
              : s < 0 && (v = " grabberOffScreenLeft grabberOffscreen");
          let C = [];
          e.GetTimelineMarkers().forEach((t, s) => {
            let i = e.GetPercentOffsetFromTime(t.nTime, c.a0.Timeline);
            i < 0 ||
              i > 100 ||
              C.push(
                (0, o.jsx)(
                  te,
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
          let _ = [];
          e.GetTimelineSegments().forEach((t, s) => {
            let i = e.GetPercentOffsetFromTime(t.nTimeStart, c.a0.Timeline);
            if (i > 100) return;
            let n = e.GetPercentOffsetFromTime(t.nTimeEnd, c.a0.Timeline);
            n < 0 ||
              _.push(
                (0, o.jsx)(
                  se,
                  {
                    startPos: i,
                    endPos: n,
                    label: t.strTemplateName,
                    color: t.color,
                    onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                  },
                  s,
                ),
              );
          });
          const b = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              c.a0.Timeline,
            ),
            x = e.GetPercentOffsetFromTime(e.m_editorEndTime, c.a0.Timeline),
            k = this.props.bIncludeClipEditor
              ? [
                  (0, o.jsx)(
                    te,
                    {
                      pos: b,
                      label: (0, w.we)("#DASHPlayerControls_Start"),
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                      onMouseDown: (e) => this.OnMouseDown(e, "start"),
                    },
                    "start",
                  ),
                  (0, o.jsx)(
                    te,
                    {
                      pos: x,
                      label: (0, w.we)("#DASHPlayerControls_End"),
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                      onMouseDown: (e) => this.OnMouseDown(e, "end"),
                    },
                    "end",
                  ),
                ]
              : [];
          return (0, o.jsx)("div", {
            className: "videoTimelineMain",
            tabIndex: 0,
            onKeyDown: this.OnKeyDown,
            children: (0, o.jsxs)("div", {
              className: S,
              children: [
                (0, o.jsx)("div", { className: "DialogLabel", children: m }),
                (0, o.jsx)("div", {
                  className: "STV_timelineSegmentsContainer",
                  children: _,
                }),
                (0, o.jsx)("div", {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                  children: (0, o.jsxs)("div", {
                    className: "VideoTimelineSlider",
                    children: [
                      (0, o.jsx)("div", {
                        className: "STV_timelineValue",
                        style: d,
                      }),
                      (0, o.jsx)("div", {
                        className: "STV_timelineGhostValue",
                        style: h,
                      }),
                      (0, o.jsx)("div", {
                        className: "STV_timelineNoVideo",
                        style: u,
                      }),
                      C,
                      k,
                      Boolean(this.state.hoverX) &&
                        (0, o.jsx)(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              left: this.state.hoverX - 75,
                              bottom: "30px",
                            },
                            children: (0, o.jsxs)("div", {
                              style: {
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                              },
                              children: [
                                this.state.thumbnailURL &&
                                  (0, o.jsx)("img", {
                                    style: { width: "150px" },
                                    src: this.state.thumbnailURL,
                                  }),
                                (0, o.jsx)("span", {
                                  className: "STV_timelineGrabberValue",
                                  style: {
                                    position: "absolute",
                                    bottom: "4px",
                                  },
                                  children: g,
                                }),
                              ],
                            }),
                          },
                          "grabbertime",
                        ),
                      (0, o.jsx)("div", {
                        className: "STV_timelineGrabber_Wrapper",
                        style: p,
                        children: (0, o.jsx)("div", {
                          className: "STV_timelineGrabber" + v,
                          children: (0, o.jsx)("div", {
                            className: "STV_timelineGrabberArrow",
                            children: (0, o.jsx)(P.apU, {}),
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
      (0, i.Cg)([D.oI], ie.prototype, "OnMouseDown", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnMouseMove", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnMouseUp", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnKeyDown", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnMouseHoverMove", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnMouseHoverLeave", null),
        (0, i.Cg)([D.oI], ie.prototype, "AdjustHoverForClientX", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnSegmentClick", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnMarkerMouseEnter", null),
        (0, i.Cg)([D.oI], ie.prototype, "OnMarkerMouseLeave", null),
        (ie = (0, i.Cg)([r.PA], ie));
      let oe = class extends l.Component {
        state = { info: null };
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info &&
              (c.BroadcastWatchStore.StopInfo(t.info), (t.info = null)),
            e.steamID)
          ) {
            return { info: c.BroadcastWatchStore.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && c.BroadcastWatchStore.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return L.td.stream[e]
            ? (0, o.jsx)(ne, {
                value: e,
                options: L.td.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount && (t = (0, f.Dq)(e.m_nViewerCount));
          let s =
              L.td.bValid && L.td.stream && L.td.stream[e.m_steamIDBroadcast],
            i =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || s);
          const n =
            !this.props.bHideThumbnail &&
            this.props.bVerticalBroadcastChat &&
            s &&
            L.td.gidEvent;
          return (0, o.jsxs)("div", {
            className: "BroadcastDetails",
            children: [
              !this.props.bHideThumbnail &&
                (0, o.jsx)(g.y, {
                  className: "broadcastDetailsThumbBlur",
                  src: e.m_strThumbnailUrl,
                  draggable: !1,
                  duration: 2500,
                }),
              (0, o.jsxs)("div", {
                className: "BroadcastDetailsHeader",
                children: [
                  e &&
                    e.m_strAppTitle &&
                    (0, o.jsxs)("div", {
                      className: "displayColumn",
                      children: [
                        (0, o.jsxs)("div", {
                          className: "Info",
                          children: [
                            (0, o.jsx)("span", {
                              className: "AppTitle",
                              children: e.m_strAppTitle,
                            }),
                            e.m_strTitle &&
                              (0, o.jsxs)("span", {
                                className: "BroadcastTitle",
                                children: [" - ", e.m_strTitle],
                              }),
                            this.props.onLocalStreamChange &&
                              this.RenderStreamSwitcher(),
                          ],
                        }),
                        t &&
                          (0, o.jsxs)("div", {
                            className: "BroadcastDetailsHeader_ViewerCount",
                            children: [
                              (0, o.jsx)(P.y_e, {}),
                              (0, w.Yp)("#Broadcast_ViewerCount", t),
                            ],
                          }),
                      ],
                    }),
                  s &&
                    this.props.onOpenLinkInNewWindow &&
                    (0, o.jsx)("div", {
                      className: "Actions",
                      children: (0, o.jsx)("div", {
                        onClick: (e) =>
                          this.props.onOpenLinkInNewWindow(e, L.td.link),
                        className: "BroadcastLink",
                        children: L.td.linkName,
                      }),
                    }),
                ],
              }),
              n && (0, o.jsx)(v.m, { gidEvent: L.td.gidEvent }),
              i &&
                (0, o.jsx)(S.p, {
                  id:
                    L.td.bValid &&
                    L.td.stream &&
                    L.td.stream[e.m_steamIDBroadcast]
                      ? L.td.appID
                      : parseInt(e.m_strAppId),
                  type: "game",
                  bPreferAssetWithoutOverride: !1,
                }),
            ],
          });
        }
      };
      oe = (0, i.Cg)([r.PA], oe);
      class ne extends l.Component {
        showContextMenu(e) {
          const { options: t, value: s, onChange: i } = this.props,
            n = Object.keys(t).map((e) =>
              (0, o.jsx)(
                m.IK,
                {
                  onSelected: () => i(e),
                  bChecked: e === s,
                  children: (0, w.we)(t[e]),
                },
                e,
              ),
            );
          (0, a.lX)((0, o.jsx)(m.tz, { children: n }), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            s = t[e];
          return (0, o.jsxs)("div", {
            className: "BroadcastLanguage",
            onClick: this.showContextMenu,
            children: [
              (0, o.jsxs)("span", { children: [" - ", (0, w.we)(s)] }),
              (0, o.jsx)("div", {
                className: "ContextMenuButton",
                children: (0, o.jsx)(P.GB9, {}),
              }),
            ],
          });
        }
      }
      (0, i.Cg)([D.oI], ne.prototype, "showContextMenu", null);
      let re = class extends l.Component {
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
          return (0, o.jsxs)("div", {
            className: "LinkOverlayContainer",
            children: [
              (0, o.jsxs)("div", {
                className: "LinkOverlayValidRegion",
                children: [
                  !this.props.editMode && this.props.linkRegions
                    ? this.props.linkRegions.map((e) => {
                        const t = (0, W.p)(e.url);
                        return (0, o.jsx)(
                          _.uU,
                          {
                            href: e.url,
                            bForceExternal: t,
                            bUseLinkFilter: t,
                            children: (0, o.jsx)("div", {
                              className: "LinkRegion",
                              style: {
                                left: e.left + "%",
                                top: e.top + "%",
                                width: e.width + "%",
                                height: e.height + "%",
                              },
                              children: (0, o.jsxs)("div", {
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
                      (0, o.jsx)(
                        C.I,
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
                    (0, o.jsx)("div", {
                      className: "AddLinkRegion",
                      onClick: this.AddLinkRegion,
                      children: (0, w.we)("#SteamTV_AddLinkRegion"),
                    }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "LinkOverlayInvalidRegion",
                children: (0, o.jsx)("div", {
                  children: (0, w.we)("#SteamTV_LinkRegionReserved"),
                }),
              }),
            ],
          });
        }
      };
      (0, i.Cg)([D.oI], re.prototype, "AddLinkRegion", null),
        (0, i.Cg)([D.oI], re.prototype, "LoadLinkRegion", null),
        (0, i.Cg)([D.oI], re.prototype, "OnSaveRegions", null),
        (0, i.Cg)([D.oI], re.prototype, "DeleteRegion", null),
        (0, i.Cg)([D.oI], re.prototype, "UpdatePanel", null),
        (re = (0, i.Cg)([r.PA], re));
    },
    29381: (e, t, s) => {
      "use strict";
      s.d(t, { I: () => S });
      var i,
        o = s(34629),
        n = s(62540),
        r = s(63696),
        l = s(51115),
        a = s(41230),
        d = s(79769),
        h = s(46108),
        c = s(64608),
        u = s(50376),
        p = s(21501),
        m = s.n(p),
        g = s(49412);
      !(function (e) {
        (e.topleft = "topleft"),
          (e.top = "top"),
          (e.topright = "topright"),
          (e.left = "left"),
          (e.middle = "middle"),
          (e.right = "right"),
          (e.bottomleft = "bottomleft"),
          (e.bottom = "bottom"),
          (e.bottomright = "bottomright");
      })(i || (i = {}));
      let S = class extends r.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new d.Ji();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(e) {
          super(e),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
              curBottomPosPct:
                100 - (this.props.yPosPct + this.props.heightPct),
              curWidthPct: this.props.widthPct,
              curHeightPct: this.props.heightPct,
              EdgeDown: void 0,
              text_link_url: this.props.link_url,
              text_link_description: this.props.link_description,
              bEditingLink: !1,
              valid_link: this.validateUrl(this.props.link_url),
            }),
            (this.m_strDescription = this.props.link_description ?? ""),
            (this.m_aspectRatio =
              this.props.heightPct > 0 && this.props.widthPct > 0
                ? this.props.widthPct / this.props.heightPct
                : 1);
        }
        LinkRegionBoxRef(e) {
          this.m_elLinkRegionBox = e;
        }
        OnMouseDown(e, t) {
          this.m_elLinkRegionBox?.parentElement &&
            this.m_elLinkRegionBox.ownerDocument.defaultView &&
            ((this.m_fnMouseUp = (e) => {
              this.OnMouseUp(e, t);
            }),
            (this.m_fnMouseMove = (e) => {
              this.OnMouseMove(e, t);
            }),
            this.setState({ EdgeDown: t }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((e.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((e.clientY - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
              this.state.curTopPosPct),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mousemove",
              this.m_fnMouseMove,
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp,
            )),
            e.preventDefault(),
            e.stopPropagation();
        }
        OnMouseMove(e, t) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
              case i.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case i.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case i.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
                break;
              case i.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case i.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(e.clientY),
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case i.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(e.clientY),
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case i.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case i.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case i.middle: {
                const t = (0, g.OQ)(
                    this.CalcLeftEdge(e.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  s = 100 - (t + this.state.curWidthPct),
                  i = (0, g.OQ)(
                    this.CalcTopEdge(e.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  o = {
                    curLeftPosPct: t,
                    curRightPosPct: s,
                    curTopPosPct: i,
                    curBottomPosPct: 100 - (i + this.state.curHeightPct),
                  };
                this.setState(o);
                break;
              }
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        IsValidPct(e) {
          return e >= 0 && e <= 100;
        }
        UpdateState(e) {
          let t =
              void 0 !== e.curTopPosPct
                ? e.curTopPosPct
                : this.state.curTopPosPct,
            s =
              void 0 !== e.curBottomPosPct
                ? e.curBottomPosPct
                : this.state.curBottomPosPct,
            i =
              void 0 !== e.curLeftPosPct
                ? e.curLeftPosPct
                : this.state.curLeftPosPct,
            o =
              void 0 !== e.curRightPosPct
                ? e.curRightPosPct
                : this.state.curRightPosPct,
            n = (0, g.OQ)(
              100 - o - i,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            r = (0, g.OQ)(
              100 - s - t,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== e.curLeftPosPct || void 0 !== e.curRightPosPct
              ? (r = n / this.m_aspectRatio)
              : (n = r * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (i = 100 - o - n)
              : (o = 100 - (i + n)),
            void 0 !== e.curTopPosPct ? (t = 100 - s - r) : (s = 100 - (t + r));
          const l = 100 - o - i,
            a = 100 - s - t;
          this.IsValidPct(i) &&
            this.IsValidPct(o) &&
            this.IsValidPct(t) &&
            this.IsValidPct(s) &&
            this.IsValidPct(l) &&
            this.IsValidPct(a) &&
            this.setState({
              curLeftPosPct: i,
              curRightPosPct: o,
              curTopPosPct: t,
              curBottomPosPct: s,
            });
        }
        GetXPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
                (this.m_nLocalOffsetXPct ?? 0)
            : 0;
        }
        GetYPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
                (this.m_nLocalOffsetYPct ?? 0)
            : 0;
        }
        CalcLeftEdge(e) {
          return (0, g.OQ)(this.GetXPercent(e), 0, 100);
        }
        CalcRightEdge(e) {
          return (0, g.OQ)(
            100 - (this.GetXPercent(e) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(e) {
          return (0, g.OQ)(this.GetYPercent(e), 0, 100);
        }
        CalcBottomEdge(e) {
          return (0, g.OQ)(
            100 - (this.GetYPercent(e) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(e, t) {
          this.setState({
            curWidthPct:
              100 - this.state.curRightPosPct - this.state.curLeftPosPct,
          }),
            this.setState({
              curHeightPct:
                100 - this.state.curBottomPosPct - this.state.curTopPosPct,
            }),
            this.setState({ EdgeDown: void 0 }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            }),
            this.m_listeners.Unregister();
        }
        async HandleDelete() {
          this.props.deleteFn && this.props.deleteFn(this.props.index);
        }
        OnSetLinkURLChange(e) {
          this.setState({
            text_link_url: e.target.value,
            valid_link: this.validateUrl(e.target.value),
          });
        }
        OnSetLinkDescriptionChange(e) {
          this.setState({ text_link_description: e.target.value });
        }
        validateUrl(e) {
          return (
            null != e &&
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e,
            )
          );
        }
        OnSaveLink() {
          (this.m_strDescription = this.state.text_link_description ?? ""),
            this.setState({ bEditingLink: !this.state.bEditingLink }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            });
        }
        OnEditLink() {
          this.setState({ bEditingLink: !this.state.bEditingLink });
        }
        render() {
          let e = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            t = m().LinkRegionDragBox;
          return (
            null != this.state.EdgeDown &&
              (t += ` ${m().EdgeDown} ` + m()[this.state.EdgeDown]),
            (0, n.jsxs)("div", {
              className: t,
              style: e,
              ref: this.LinkRegionBoxRef,
              draggable: !1,
              children: [
                (0, n.jsxs)("div", {
                  className: m().LinkRegionGridBox,
                  children: [
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().TopLeft}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.topleft);
                      },
                      draggable: !1,
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().Top}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.top);
                      },
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().TopRight}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.topright);
                      },
                      draggable: !1,
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().Left}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.left);
                      },
                      draggable: !1,
                    }),
                    (0, n.jsxs)("div", {
                      className: `${m().LinkRegionEdge} ${m().Middle}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.middle);
                      },
                      draggable: !1,
                      children: [
                        this.props.deleteFn &&
                          (0, n.jsx)("div", {
                            className: m().LinkRegionDelete,
                            onClick: this.HandleDelete,
                            children: (0, n.jsx)(u.sED, {}),
                          }),
                        !this.props.bDisableLink &&
                          (0, n.jsx)("div", {
                            className: m().LinkRegionSettings,
                            onClick: this.OnEditLink,
                            children: (0, n.jsx)(u.xv8, {}),
                          }),
                        (0, n.jsxs)("div", {
                          className: m().LinkText,
                          children: [" ", this.m_strDescription, " "],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().Right}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.right);
                      },
                      draggable: !1,
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().BottomLeft}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.bottomleft);
                      },
                      draggable: !1,
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().Bottom}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.bottom);
                      },
                      draggable: !1,
                    }),
                    (0, n.jsx)("div", {
                      className: `${m().LinkRegionEdge} ${m().BottomRight}`,
                      onMouseDown: (e) => {
                        this.OnMouseDown(e, i.bottomright);
                      },
                      draggable: !1,
                    }),
                  ],
                }),
                this.state.bEditingLink &&
                  (0, n.jsxs)("div", {
                    className: m().LinkRegionInfo,
                    children: [
                      (0, n.jsx)(c.pd, {
                        className: m().LinkRegionInput,
                        type: "text",
                        name: "link_url",
                        value: this.state.text_link_url,
                        label: (0, h.we)("#SteamTV_LinkURL"),
                        placeholder: "https://www.example.com",
                        onChange: this.OnSetLinkURLChange,
                        mustBeURL: !0,
                      }),
                      (0, n.jsx)(c.pd, {
                        className: m().LinkRegionInput,
                        type: "text",
                        name: "link_description",
                        value: this.state.text_link_description,
                        label: (0, h.we)("#SteamTV_LinkDescription"),
                        placeholder: (0, h.we)(
                          "#SteamTV_LinkDescription_Placeholder",
                        ),
                        onChange: this.OnSetLinkDescriptionChange,
                      }),
                      (0, n.jsxs)("div", {
                        className: m().LinkRegionButtonContainer,
                        children: [
                          (0, n.jsxs)(c.$n, {
                            disabled: !this.state.valid_link,
                            onClick: this.OnSaveLink,
                            children: [" ", (0, h.we)("#Button_OK"), " "],
                          }),
                          (0, n.jsxs)(c.$n, {
                            onClick: this.OnEditLink,
                            children: [" ", (0, h.we)("#Button_Cancel")],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        }
      };
      (0, o.Cg)([l.oI], S.prototype, "LinkRegionBoxRef", null),
        (0, o.Cg)([l.oI], S.prototype, "OnMouseDown", null),
        (0, o.Cg)([l.oI], S.prototype, "OnMouseMove", null),
        (0, o.Cg)([l.oI], S.prototype, "OnMouseUp", null),
        (0, o.Cg)([l.oI], S.prototype, "HandleDelete", null),
        (0, o.Cg)([l.oI], S.prototype, "OnSetLinkURLChange", null),
        (0, o.Cg)([l.oI], S.prototype, "OnSetLinkDescriptionChange", null),
        (0, o.Cg)([l.oI], S.prototype, "OnSaveLink", null),
        (0, o.Cg)([l.oI], S.prototype, "OnEditLink", null),
        (S = (0, o.Cg)([a.PA], S));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-hotfix-steamui/build/client/steamui/sourcemaps/chunk~1a96cdf59.js.map
