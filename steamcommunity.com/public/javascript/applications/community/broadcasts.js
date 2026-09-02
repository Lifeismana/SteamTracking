/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2079],
    {
      65491: (b, $, s) => {
        "use strict";
        s.r($), s.d($, { default: () => Vt });
        var t = s(7850),
          K = s(64641),
          h = s(90626),
          V = s(92757),
          N = s(90783),
          q = s(41735),
          T = s.n(q),
          W = s(14947),
          E = s(72604),
          at = s(76559),
          g = s(74498),
          y = s(34592),
          f = s(3166),
          tt = Object.defineProperty,
          st = Object.getOwnPropertyDescriptor,
          nt = (l, a, e, r) => {
            for (
              var n = r > 1 ? void 0 : r ? st(a, e) : a, o = l.length - 1, c;
              o >= 0;
              o--
            )
              (c = l[o]) && (n = (r ? c(a, e, n) : c(n)) || n);
            return r && n && tt(a, e, n), n;
          };
        const J = class F {
          constructor() {
            (this.m_bShowOnlyVideo = !1),
              (this.m_bShowOnlyChat = !1),
              (this.m_curDebugInfo = null),
              (0, W.Gn)(this);
          }
          GetBroadcasterSteamID() {
            return this.m_steamid;
          }
          GetDebugInfo() {
            return this.m_curDebugInfo;
          }
          BShowOnlyVideo() {
            return this.m_bShowOnlyVideo;
          }
          BShowOnlyChat() {
            return this.m_bShowOnlyChat;
          }
          BShowInIframe() {
            return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
          }
          async LoadBroadcastDebugInfo(a) {
            let e = f.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let n = await T().get(e, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return null;
              if (n && n.status == 200 && n.data && n.data.success == E.R)
                return (this.m_curDebugInfo = n.data), this.m_curDebugInfo;
            } catch (n) {
              let o = (0, y.H)(n);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + o.strErrorMsg,
                o,
              );
            }
            return null;
          }
          async UpdateBroadcastSettings(a, e, r) {
            let n =
                f.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              o = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: a,
                title: e,
                sessionid: (0, f.KC)(),
              };
            try {
              let c = await T().get(n, {
                params: o,
                withCredentials: !0,
                cancelToken: r ? r.token : void 0,
              });
              if (r && r.token.reason) return !1;
              if (c && c.status == 200 && c.data && c.data.success == E.R) {
                const d = g.es.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString(),
                );
                return (
                  d &&
                    (0, W.h5)(() => {
                      d.m_strTitle = e;
                    }),
                  !0
                );
              }
            } catch (c) {
              let d = (0, y.H)(c);
              console.error(
                "UpdateBroadcastSettings: Failed " + d.strErrorMsg,
                d,
              );
            }
            return !1;
          }
          async StopBroadcast(a) {
            const e = this.m_steamid.ConvertTo64BitString(),
              r = g.es.GetBroadcast(e);
            let n = f.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              o = {
                steamid: e,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: (0, f.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              n,
              o,
              a,
            );
          }
          async SetBroadcasterRestrictions(a, e, r) {
            const n = this.m_steamid.ConvertTo64BitString(),
              o = g.es.GetBroadcast(n);
            let c =
                f.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              d = {
                steamid: n,
                broadcastid: o ? o.m_ulBroadcastID : null,
                type: a,
                days: e,
                sessionid: (0, f.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              c,
              d,
              r,
            );
          }
          async SetUnBannable(a) {
            const e = this.m_steamid.ConvertTo64BitString(),
              r = g.es.GetBroadcast(e);
            let n = f.TS.COMMUNITY_BASE_URL + "broadcast/unban",
              o = {
                steamid: e,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: (0, f.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              n,
              o,
              a,
            );
          }
          async SendUserReportOnBroadcast(a) {
            const e = this.m_steamid.ConvertTo64BitString(),
              r = g.es.GetBroadcast(e);
            let n = f.TS.COMMUNITY_BASE_URL + "broadcast/report",
              o = {
                steamid: e,
                broadcastid: r ? r.m_ulBroadcastID : null,
                description: a,
                sessionid: (0, f.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              n,
              o,
              null,
            );
          }
          async InternalSendSimpleGetRequest(a, e, r, n) {
            try {
              let o = await T().get(e, {
                params: r,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return !1;
              if (o && o.status == 200 && o.data && o.data.success == E.R)
                return !0;
            } catch (o) {
              let c = (0, y.H)(o);
              console.error(
                `CCommunityBroadcastStore:${a}: Failed ` + c.strErrorMsg,
                c,
              );
            }
            return !1;
          }
          static Get() {
            return (
              F.s_Singleton ||
                ((F.s_Singleton = new F()), F.s_Singleton.Init()),
              F.s_Singleton
            );
          }
          Init() {
            let a = (0, f.Tc)("broadcastsinfo", "application_config");
            this.ValidateStoreDefault(a) &&
              ((this.m_steamid = new at.b(a.steamid)),
              (this.m_bShowOnlyChat = !!a.show_only_chat),
              (this.m_bShowOnlyVideo = !!a.show_only_video));
          }
          ValidateStoreDefault(a) {
            const e = a;
            return e && typeof e == "object"
              ? typeof e.steamid == "string"
              : !1;
          }
        };
        nt([W.sH], J.prototype, "m_curDebugInfo", 2);
        let j = J;
        var U = s(75844),
          et = s(9398),
          G = s(23240),
          rt = s(53120),
          R = s.n(rt),
          m = s(90711),
          u = s(98112),
          p = s(25317),
          x = s(813),
          i = s(19316),
          v = s(25792),
          C = s(98854),
          H = s(179),
          X = s(95695),
          Y = s.n(X),
          P = s(40232),
          Z = s(2801),
          k = s(88003),
          Q = s(36707),
          _ = s(82734),
          A = s(18210),
          ct = s(26485),
          St = s(72429),
          ot = s(19730),
          B = s(17337);
        const gt = (l) => {
            const a = (0, h.useRef)(null),
              [e, r] = (0, h.useState)(null);
            return (
              (0, h.useEffect)(
                () => () => {
                  a.current && a.current("BroadcastDebugSection: unmounting");
                },
                [],
              ),
              (0, t.jsx)(v.tH, {
                children: (0, t.jsxs)("div", {
                  className: (0, Q.A)(B.Container),
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Controls,
                      children: (0, t.jsx)(i.$n, {
                        onClick: async () => {
                          a.current && a.current();
                          const n = T().CancelToken.source();
                          (a.current = n.cancel),
                            r(await j.Get().LoadBroadcastDebugInfo(n));
                        },
                        children: "(VO) Load Debug Info",
                      }),
                    }),
                    (0, t.jsx)(v.tH, { children: (0, t.jsx)(xt, { info: e }) }),
                  ],
                }),
              })
            );
          },
          xt = (l) => {
            var a;
            const { info: e } = l,
              [r, n] = (0, h.useState)(!1);
            if (!e) return null;
            const o = j.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
              c = g.es.GetBroadcast(o);
            return (0, t.jsxs)("div", {
              className: B.DisplaySection,
              children: [
                !!(e.last_error_result && e.last_error_result != E.R) &&
                  (0, t.jsxs)("div", {
                    className: B.SubSection,
                    children: [
                      (0, t.jsx)("div", {
                        className: B.Header,
                        children: "Error",
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "EResult: ",
                          e.last_error_result,
                          ", occurred ",
                          e.last_error_time,
                          " - ",
                          (0, t.jsx)(St.K4, {
                            dateAndTime: e.last_error_time,
                            bSingleLine: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Broadcast Setup",
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Broadcaster: ", e.steam_id, ", SteamID: ", o],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Directory Server: ",
                        e.directory_server,
                        ", SessionID: ",
                        e.broadcast_id,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Ingester Server: ",
                        e.relay_server,
                        ", UploadID: ",
                        e.upload_id,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Origin Server: ", e.origin_server],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Chat Server: ",
                        e.chat_server,
                        ", chat_id: ",
                        e.chat_id,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Transcoder Server : ", e.transcode_server],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Ingester Info",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Client: ",
                        e.remote_address,
                        " ",
                        e.is_rtmp ? "(RTMP)" : "(STEAM CLIENT)",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Video Config: ",
                        e.upload_height,
                        "x",
                        e.upload_width,
                        "@",
                        e.upload_fps,
                        ", ",
                        e.upload_bandwidth,
                        " kbps ",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Audio Config: ",
                        e.upload_audio_channels,
                        "x",
                        e.upload_audio_samplerate,
                        "Hz, ",
                        e.upload_audio_bitrate / 1e3,
                        " kbps ",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Upload Stats: ",
                        e.upload_avg_fps,
                        " FPS, ",
                        e.upload_avg_bandwidth,
                        " kbps, ",
                        e.upload_avg_key_interval,
                        " msec key frame interval",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Upload Totals: ",
                        e.upload_total_frames_received,
                        " video frames, \xA0",
                        Math.round(
                          (e.upload_current_video_pts -
                            e.upload_first_video_pts) /
                            e.upload_video_timescale,
                        ),
                        " seconds ( ",
                        (0, ot.dm)(e.upload_total_bytes_uploaded || 0, 1),
                        " ) ",
                      ],
                    }),
                  ],
                }),
                !!e.transcode_server &&
                  (0, t.jsxs)("div", {
                    className: B.SubSection,
                    children: [
                      (0, t.jsx)("div", {
                        className: B.Header,
                        children: "Transcoder Info",
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "Decoder ( ",
                          e.upload_height,
                          "x",
                          e.upload_width,
                          "@",
                          e.upload_fps,
                          ", ",
                          e.upload_bandwidth,
                          " kbps ) : \xA0",
                          e.transcoder_frames_to_decode,
                          " queued, \xA0",
                          e.transcoder_frames_total_decoded,
                          " decoded",
                        ],
                      }),
                      e.transcoder_streams.map((d) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            children: [
                              "Encoder ",
                              d.representation_id,
                              " ( ",
                              d.height,
                              "x",
                              d.width,
                              "@",
                              d.fps,
                              " ",
                              d.bitrate,
                              " kbps ) : ",
                              d.frames_to_encode,
                              " queued, ",
                              d.frames_total_encoded,
                              " encoded",
                            ],
                          },
                          d.representation_id,
                        ),
                      ),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Origin Info",
                    }),
                    (a = e == null ? void 0 : e.origin_video_streams) == null
                      ? void 0
                      : a.map((d) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              children: [
                                "Video Stream ",
                                d.representation_id,
                                " ( ",
                                d.height,
                                "x",
                                d.width,
                                "@",
                                d.fps,
                                " ",
                                d.bitrate,
                                " kbps ) : \xA0",
                                d.num_frames_queued,
                                " frames queued, \xA0",
                                d.num_segments_received,
                                " segments received, \xA0",
                                d.num_segments_cached * 2,
                                " seconds cached ( ",
                                (0, ot.dm)(d.memory_used, 2),
                                " )",
                              ],
                            },
                            d.representation_id,
                          ),
                        ),
                    "Audio Stream ",
                    e.origin_audio_stream.representation_id,
                    " ( ",
                    e.upload_audio_channels,
                    "x",
                    e.upload_audio_samplerate,
                    "Hz, ",
                    e.upload_audio_bitrate / 1e3,
                    " kbps ) : \xA0",
                    e.origin_audio_stream.num_frames_queued,
                    " frames queued, \xA0",
                    e.origin_audio_stream.num_segments_received,
                    " segments received, \xA0",
                    e.origin_audio_stream.num_segments_cached * 2,
                    " seconds cached ( ",
                    (0, ot.dm)(e.origin_audio_stream.memory_used, 2),
                    " )",
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Viewer Info",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Viewers: ",
                        e.current_viewers,
                        " current (",
                        e.current_anon_viewers,
                        " anonymous), ",
                        e.total_unique_viewers,
                        " total unique, ",
                        e.max_concurrent_viewers,
                        " max concurrent",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Average time watched: ",
                        e.average_watch_duration,
                        " seconds",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Last Minute: ",
                        e.added_viewers_last_minute,
                        " watch requests, ",
                        e.rejected_viewers_last_minute,
                        " rejected",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Restrictions: ", e.restriction],
                    }),
                    (0, t.jsx)("div", { children: e.extra_viewer_info }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Settings",
                    }),
                    (0, t.jsxs)("div", {
                      children: ["is replay? ", e.is_replay],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "is replay local file? ",
                        e.is_replay_local_file,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["is replay clip? ", e.is_replay_clip],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["is capturing VOD? ", e.is_capturing_vod],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "is white listed for store streaming? ",
                        e.is_whitelisted,
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "App Info",
                    }),
                    (0, t.jsxs)("div", { children: ["appid: ", e.app_id] }),
                    (0, t.jsxs)("div", {
                      children: ["app name: ", e.app_name],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["broadcast title: ", e.title],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["thumbnail: ", e.thumbnail_url],
                    }),
                    !!e.thumbnail_url &&
                      (0, t.jsx)("img", { src: e.thumbnail_url }),
                    !!(e.app_id && e.app_id > 0) &&
                      (0, t.jsx)("div", {
                        className: B.AppSummaryWidgetCtn,
                        children: (0, t.jsx)(P.p, {
                          id: e.app_id,
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Manifest Information",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Heartbeat Interval: ",
                        c.m_data.heartbeat_interval,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["DASH MPEG Url: ", c.m_data.url],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["HLS Url: ", c.m_data.hls_url],
                    }),
                  ],
                }),
                (0, t.jsx)(i.$n, {
                  onClick: () => n(!r),
                  children: "Toggle Raw Data",
                }),
                !!r &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: B.SubSection,
                        children: (0, t.jsx)(ct.G, { data: e }),
                      }),
                      (0, t.jsx)("div", {
                        className: B.SubSection,
                        children: (0, t.jsx)(ct.G, {
                          data: (c == null ? void 0 : c.m_data) || "",
                        }),
                      }),
                    ],
                  }),
              ],
            });
          };
        var I = s(98371),
          Ct = s(46943),
          jt = s(35098),
          mt = s(16971);
        const bt = (l) => {
          const a = l.steamid.GetAccountID(),
            { data: e } = (0, jt.hW)(a);
          return (0, t.jsxs)("div", {
            className: mt.AvatarCtn,
            children: [
              (0, t.jsx)("a", {
                href: e.GetCommunityProfileURL(),
                "data-miniprofile": "s" + l.steamid.ConvertTo64BitString(),
                children: (0, t.jsx)(Ct.i8, {
                  persona: e,
                  size: l.size,
                  statusPosition: "bottom",
                }),
              }),
              (0, t.jsxs)("div", {
                className: mt.NameAndProps,
                children: [
                  !!l.bShowName &&
                    (0, t.jsx)("a", {
                      href: e.GetCommunityProfileURL(),
                      "data-miniprofile":
                        "s" + l.steamid.ConvertTo64BitString(),
                      children: e.m_strProfileURL,
                    }),
                  l.children,
                ],
              }),
            ],
          });
        };
        var ut = s(65946),
          ht = s(84676),
          It = s(86390),
          At = s(36118),
          vt = s(53107),
          pt = s(53113),
          w = s(46699),
          Bt = s(71421),
          Dt = s(24642);
        function Tt(l) {
          const { broadcasterSteamID: a } = l,
            e = a.ConvertTo64BitString(),
            [r, n] = (0, ut.q3)(() => {
              const D = g.es.GetOrCreateBroadcastInfo(e);
              let M = D.m_nAppID != g.fO ? D.m_nAppID : 0;
              return [D.m_nViewerCount, M];
            }),
            [o] = (0, ht.t7)(n, { include_assets: !0 });
          let c = o == null ? void 0 : o.GetAssets().GetMainCapsuleURL(),
            d = c && c.length > 0;
          return (0, t.jsx)(v.tH, {
            children: (0, t.jsxs)("div", {
              className: w.ProfileCtn,
              children: [
                d &&
                  (0, t.jsx)("a", {
                    className: w.GameCapsule,
                    href: (0, pt.k2)(
                      (o == null ? void 0 : o.GetStorePageURL()) ||
                        f.TS.STORE_BASE_URL + "app/" + n,
                    ),
                    children: (0, t.jsx)("img", { src: c }),
                  }),
                (0, t.jsxs)("div", {
                  className: w.StreamDetailsCtn,
                  children: [
                    (0, t.jsxs)("div", {
                      className: w.GameAndOptionsCtn,
                      children: [
                        (0, t.jsxs)("div", {
                          className: w.GameAndViewersCtn,
                          children: [
                            (0, t.jsx)(Rt, { broadcasterSteamID: a }),
                            (0, t.jsx)("div", {
                              className: w.ViewerCount,
                              children: (0, A.Yp)(
                                "#Broadcast_ViewerCount",
                                (0, Dt.D)(r),
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsx)(yt, { broadcasterSteamID: a }),
                      ],
                    }),
                    (0, t.jsx)(bt, {
                      steamid: a,
                      size: "Medium",
                      bShowName: !0,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        const Rt = (0, U.PA)((l) => {
            const { broadcasterSteamID: a } = l,
              e = a.ConvertTo64BitString(),
              [r, n] = (0, ut.q3)(() => {
                const c = g.es.GetOrCreateBroadcastInfo(e);
                let d = c.m_nAppID != g.fO ? c.m_nAppID : 0;
                return [c.m_strAppTitle, d];
              }),
              [o] = (0, ht.t7)(n, { include_assets: !0 });
            return (0, t.jsxs)("div", {
              className: w.BroadcastTitleCtn,
              children: [
                (0, A.we)("#Broadcast_Playing"),
                (0, t.jsx)("a", {
                  href: (0, pt.k2)(
                    (o == null ? void 0 : o.GetStorePageURL()) ||
                      f.TS.STORE_BASE_URL + "app/" + n,
                  ),
                  children: r || (o == null ? void 0 : o.GetName()),
                }),
                (r == null ? void 0 : r.length) > 0 &&
                  (0, t.jsxs)("span", { children: [" - ", r] }),
              ],
            });
          }),
          yt = (0, U.PA)((l) => {
            const { broadcasterSteamID: a } = l,
              e = a.ConvertTo64BitString(),
              r = (n) => {
                f.iA.logged_in
                  ? (0, k.pg)(
                      (0, t.jsx)(Ut, { broadcasterSteamID: a }),
                      (0, _.uX)(n),
                    )
                  : (0, k.pg)(
                      (0, t.jsx)(Z.o0, {
                        strTitle: (0, A.we)("#EventDisplay_Share_NotLoggedIn"),
                        strDescription: (0, A.we)(
                          "#EventDisplay_Share_NotLoggedIn_Description",
                        ),
                        strOKButtonText: (0, A.we)("#MobileLogin_SignIn"),
                        onOK: () => (0, It.vg)(),
                      }),
                      (0, _.uX)(n),
                    );
              };
            return (0, t.jsxs)("div", {
              className: w.BroadcastUserActionsCtn,
              children: [
                f.iA.steamid != l.broadcasterSteamID.ConvertTo64BitString() &&
                  (0, t.jsx)(i.$n, {
                    onClick: r,
                    children: (0, t.jsx)(Bt.he, {
                      toolTipContent: (0, A.we)("#Broadcast_User_Report_ttip"),
                      children: (0, t.jsx)(At.lNU, {}),
                    }),
                  }),
                (0, t.jsx)(i.$n, {
                  onClick: (n) =>
                    (0, vt.EP)(
                      n,
                      "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                    ),
                  children: (0, t.jsx)(Bt.he, {
                    toolTipContent: (0, A.we)("#Broadcast_User_FAQ_ttip"),
                    children: (0, t.jsx)(At.$$j, {}),
                  }),
                }),
              ],
            });
          }),
          Ut = (l) => {
            const [a, e] = (0, h.useState)(""),
              r = async () => {
                await j.Get().SendUserReportOnBroadcast(a),
                  l.closeModal && l.closeModal();
              };
            return (0, t.jsx)(Z.o0, {
              strTitle: (0, A.we)("#Broadcast_ReportItem_Title"),
              strDescription: (0, A.we)("#Broadcast_ReportItem_Description"),
              onCancel: l.closeModal,
              bOKDisabled: a.trim().length == 0,
              onOK: r,
              children: (0, t.jsx)("textarea", {
                value: a,
                onChange: (n) => e(n.currentTarget.value),
                rows: 10,
                cols: 80,
              }),
            });
          };
        var wt = s(30593),
          it = s(85599);
        const Nt = (l) => {
            if (!f.iA.is_support) return null;
            const a = (n, o) => {
                (0, k.pg)(
                  (0, t.jsx)(Et, {
                    broadcastSteamID: l.broadcastSteamID,
                    strAction: o,
                  }),
                  (0, _.uX)(n),
                );
              },
              e = (n) => {
                (0, k.pg)(
                  (0, t.jsx)(Qt, { steamid: l.broadcastSteamID }),
                  (0, _.uX)(n),
                );
              },
              r =
                "https://steamsupport.valvesoftware.com/account/overview/" +
                l.broadcastSteamID.ConvertTo64BitString();
            return (0, t.jsxs)("div", {
              className: (0, Q.A)(wt.AdminControls, Y().ValveOnlyBackground),
              children: [
                (0, t.jsx)("div", { children: "(VO) Support Tools" }),
                (0, t.jsx)(i.$n, {
                  onClick: (n) => a(n, "frontpage"),
                  children: "Remove from Front Page",
                }),
                (0, t.jsx)(i.$n, {
                  onClick: (n) => a(n, "ban"),
                  children: "Ban from Broadcasting",
                }),
                (0, t.jsx)(i.$n, { onClick: e, children: "Make Unbannable" }),
                (0, t.jsx)(i.$n, {
                  onClick: (n) => (0, vt.EP)(n, r),
                  children: "Go to Support Page",
                }),
              ],
            });
          },
          Et = (0, U.PA)((l) => {
            const { broadcastSteamID: a, strAction: e } = l,
              [r, n] = (0, h.useState)(1),
              [o, c] = (0, h.useState)(!1),
              [d, D] = (0, h.useState)(!1),
              [M, L] = (0, h.useState)(!1),
              S = (0, h.useRef)(null);
            (0, h.useEffect)(
              () => () => {
                S.current && S.current("BroadcastConfirmBanAction: unmounting");
              },
              [],
            );
            const O = [
                { label: "1 Day", data: 1 },
                { label: "1 Week", data: 7 },
                { label: "1 Month", data: 30 },
                { label: "6 Months", data: 180 },
                { label: "1 Year", data: 365 },
              ],
              z = () => l.closeModal && l.closeModal(),
              Wt = async () => {
                let lt = !1;
                c(!0);
                try {
                  S.current && S.current();
                  const dt = T().CancelToken.source();
                  S.current = dt.cancel;
                  let Jt = await j.Get().SetBroadcasterRestrictions(e, r, dt);
                  dt.token.reason || (Jt = !0);
                } finally {
                  c(!1), D(!0), L(lt);
                }
              };
            return (0, t.jsx)(v.tH, {
              children: (0, t.jsx)(Z.x_, {
                onEscKeypress: z,
                children: (0, t.jsxs)(i.UC, {
                  children: [
                    (0, t.jsx)(i.Y9, {
                      children:
                        e == "frontpage"
                          ? "Remove Broadcast From Front Page"
                          : "Ban from Broadcasting",
                    }),
                    (0, t.jsx)(i.nB, {
                      children: (0, t.jsxs)(i.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children:
                              e == "frontpage"
                                ? "How long should we prevent the broadcast from appearing in community or store?"
                                : "How long should we prevent the user from Broadcast at all on Steam?",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(i.m, {
                                rgOptions: O,
                                selectedOption: r,
                                onChange: (lt) => n(lt.data),
                              }),
                              !!o && (0, t.jsx)(it.t, {}),
                              !!d &&
                                (0, t.jsx)("div", {
                                  children: M
                                    ? "Successfully Completed Request"
                                    : "Failed to complete request, check browser console and/or try again later",
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(i.wi, {
                      children: d
                        ? (0, t.jsx)(i.jn, {
                            onClick: z,
                            children: (0, A.we)("#Button_Dismiss"),
                          })
                        : (0, t.jsxs)(i.dR, {
                            children: [
                              (0, t.jsx)(i.$n, {
                                onClick: z,
                                children: (0, A.we)("#Button_Cancel"),
                              }),
                              (0, t.jsx)(i.jn, {
                                onClick: Wt,
                                children: (0, A.we)("#Button_Confirm"),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            });
          }),
          Qt = (l) => {
            const [a, e] = (0, h.useState)(!1),
              [r, n] = (0, h.useState)(!1),
              [o, c] = (0, h.useState)(!1),
              d = (0, h.useRef)(null);
            (0, h.useEffect)(
              () => () => {
                d.current && d.current("BroadcastMakeUnbannable: unmounting");
              },
              [],
            );
            const D = () => l.closeModal && l.closeModal(),
              M = async () => {
                e(!0);
                let L = !1;
                try {
                  d.current && d.current();
                  const S = T().CancelToken.source();
                  (d.current = S.cancel), (L = await j.Get().SetUnBannable(S));
                } finally {
                  e(!1), n(!0), c(L);
                }
              };
            return (0, t.jsx)(v.tH, {
              children: (0, t.jsx)(Z.x_, {
                onEscKeypress: D,
                children: (0, t.jsxs)(i.UC, {
                  children: [
                    (0, t.jsx)(i.Y9, { children: "Make Broadcast Unbannable" }),
                    (0, t.jsx)(i.nB, {
                      children: (0, t.jsxs)(i.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children:
                              "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              !!a && (0, t.jsx)(it.t, {}),
                              !!r &&
                                (0, t.jsx)("div", {
                                  children: o
                                    ? "Successfully Set Unbannable"
                                    : "Failed to make Unbannable",
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(i.wi, {
                      children: r
                        ? (0, t.jsx)(i.jn, {
                            onClick: D,
                            children: (0, A.we)("#Button_Dismiss"),
                          })
                        : (0, t.jsxs)(i.dR, {
                            children: [
                              (0, t.jsx)(i.$n, {
                                onClick: D,
                                children: (0, A.we)("#Button_Cancel"),
                              }),
                              (0, t.jsx)(i.jn, {
                                onClick: M,
                                children: (0, A.we)("#Button_Confirm"),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            });
          };
        var Mt = s(11243),
          Ot = s(75372);
        function Gt() {
          const [l] = (0, h.useState)(
            () => (0, f.Tc)("ewatchlocation", "application_config") || m.nn.CJ,
          );
          return l;
        }
        const Ht = (0, U.PA)((l) => {
          const a = j.Get().GetBroadcasterSteamID(),
            e = a == null ? void 0 : a.ConvertTo64BitString(),
            r = Gt(),
            [n, o] = (0, H.QD)("muted", !0),
            c = g.es.GetBroadcast(e),
            d = g.es.GetOrCreateBroadcastInfo(e);
          return e
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)("div", {
                  className: (0, Q.A)(I.BroadcastPage),
                  children: [
                    (0, t.jsxs)("div", {
                      className: (0, Q.A)(R().BroadcastAndChat),
                      children: [
                        !j.Get().BShowOnlyChat() &&
                          (0, t.jsx)(v.tH, {
                            children: (0, t.jsx)("div", {
                              className: (0, Q.A)(R().wrapper),
                              children: (0, t.jsx)("div", {
                                className: (0, Q.A)({
                                  [R().video_placeholder]: !0,
                                  video_placeholder_trgt: !0,
                                  [R().NoChat]: j.Get().BShowOnlyVideo(),
                                }),
                                children: (0, t.jsx)("div", {
                                  className: R().BroadcastPlayerContainer,
                                  children: (0, t.jsx)(v.tH, {
                                    children: (0, t.jsx)(G.default, {
                                      steamIDBroadcast: e,
                                      watchLocation: r,
                                      bStartMuted: n,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        !j.Get().BShowOnlyVideo() &&
                          (0, t.jsx)("div", {
                            className: R().detail_chat_ctn,
                            children: (0, t.jsx)("div", {
                              className: R().ChatContainer,
                              children: (0, t.jsx)(v.tH, {
                                children: (0, t.jsx)(et.I, {
                                  emoticonStore: p.MX,
                                  watchLocation: m.nn.fe,
                                  steamID: e,
                                  broadcastID: c ? c.m_ulBroadcastID : void 0,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    !j.Get().BShowInIframe() &&
                      (0, t.jsx)(Pt, {
                        broadcasterSteamID: a,
                        broadcastInfo: d,
                      }),
                  ],
                }),
              })
            : null;
        });
        function ft(l) {
          return l != 0 && l != g.fO;
        }
        const Pt = (0, U.PA)((l) => {
            const { broadcasterSteamID: a, broadcastInfo: e } = l,
              [r, n] = (0, h.useState)(null);
            let o = e.m_nAppID;
            return (
              (0, h.useEffect)(() => {
                const c = async () => {
                  let d = await x.ac.LoadOGGClanInfoForAppID(o);
                  n(d);
                };
                ft(o) && c();
              }, [o]),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(Tt, { broadcasterSteamID: a }),
                  (0, t.jsx)(Lt, { steamid: a }),
                  !!f.iA.is_support &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(Nt, { broadcastSteamID: a }),
                        (0, t.jsx)("div", {
                          className: (0, Q.A)(
                            Y().ValveOnlyBackground,
                            I.DebugCtn,
                          ),
                          children: (0, t.jsx)(gt, {}),
                        }),
                      ],
                    }),
                  ft(o) &&
                    (0, t.jsxs)("div", {
                      className: I.GameInfoCtn,
                      children: [
                        (0, t.jsxs)("div", {
                          className: I.GameAboutTitleCtn,
                          children: [
                            (0, t.jsxs)("div", {
                              className: I.GameAboutTitle,
                              children: [
                                " ",
                                (0, A.we)("#Broadcast_About_Game"),
                                " ",
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: Y().EventSectionSpacer,
                              children: "\xA0",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: I.GameInfo,
                          children: (0, t.jsx)(P.p, {
                            id: Number.parseInt(e.m_strAppId),
                            type: "game",
                            bPreferAssetWithoutOverride: !1,
                          }),
                        }),
                      ],
                    }),
                  !!r &&
                    (0, t.jsx)("div", {
                      className: I.RelatedEvents,
                      children: (0, t.jsx)(C.r, {
                        clanAccountID: r.clanAccountID,
                        trackingLocation: u.Tc.My,
                        partnerEventStore: Ot.Av,
                        bViewAllShowInfiniteScroll: !0,
                      }),
                    }),
                ],
              })
            );
          }),
          Lt = (0, U.PA)((l) => {
            const a = (0, h.useRef)(null);
            let e = g.es.GetOrCreateBroadcastInfo(
              l.steamid.ConvertTo64BitString(),
            );
            const [r, n] = (0, h.useState)(e.m_strTitle),
              [o, c] = (0, h.useState)(""),
              [d, D] = (0, h.useState)(null);
            if (
              ((0, h.useEffect)(
                () => (
                  n(e.m_strTitle),
                  () => {
                    a.current && a.current("BroadcastControls: unmounting");
                  }
                ),
                [e.m_strTitle],
              ),
              f.iA.accountid != l.steamid.GetAccountID())
            )
              return null;
            const M = async () => {
                a.current && a.current();
                const S = T().CancelToken.source();
                a.current = S.cancel;
                let O = await j.Get().UpdateBroadcastSettings(o, r, S);
                S.token.reason ||
                  D(
                    (0, A.we)(
                      O
                        ? "#Broadcast_Control_Success"
                        : "#Broadcast_Control_Failure",
                    ),
                  );
              },
              L = (S) => {
                (0, k.pg)(
                  (0, t.jsx)(Z.o0, {
                    strTitle: (0, A.we)("#Broadcast_Control_StopBroadcast"),
                    strDescription: (0, A.we)("#EventEditor_GenericAreYouSure"),
                    onOK: async () => {
                      a.current && a.current();
                      const O = T().CancelToken.source();
                      a.current = O.cancel;
                      let z = await j.Get().StopBroadcast(O);
                      O.token.reason ||
                        D(
                          (0, A.we)(
                            z
                              ? "#Broadcast_Control_StopSuccess"
                              : "#Broadcast_Control_StopFailure",
                          ),
                        );
                    },
                  }),
                  (0, _.uX)(S),
                );
              };
            return (0, t.jsxs)("div", {
              className: I.ControlCtn,
              children: [
                (0, t.jsx)("div", {
                  className: I.ControlsTitle,
                  children: (0, A.we)("#Broadcaster_Control_title"),
                }),
                (0, t.jsxs)("div", {
                  className: I.TitleInput,
                  children: [
                    (0, t.jsxs)("div", {
                      className: I.Options,
                      children: [
                        (0, t.jsx)(i.pd, {
                          type: "text",
                          label: (0, A.we)("#Broadcast_title_title"),
                          onChange: (S) => n(S.currentTarget.value || ""),
                          placeholder: (0, A.we)(
                            "#Broadcast_title_placeholder",
                          ),
                          value: r,
                        }),
                        (0, t.jsx)(i.pd, {
                          type: "text",
                          label: (0, A.we)("#Broadcast_Control_matchid"),
                          onChange: (S) => c(S.currentTarget.value || ""),
                          value: o,
                        }),
                        (0, t.jsxs)(i.$n, {
                          onClick: M,
                          children: [
                            (0, A.we)("#Broadcast_save_changes"),
                            (0, t.jsx)(Mt.o, {
                              tooltip: (0, A.we)("#Broadcast_save_title_ttip"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: I.StopCtn,
                      children: [
                        (0, t.jsx)(i.$n, {
                          onClick: L,
                          children: (0, A.we)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                        }),
                        !!d && (0, t.jsx)("div", { children: d }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          });
        var Ft = s(7638);
        let Kt = { BroadcastWatch: (l) => `/broadcast/(watch|watchnew)/${l}` };
        function Vt(l) {
          const [a, e] = h.useState(!0);
          return (
            (0, h.useEffect)(() => {
              a && Ft.KN.InitGlobal().then(() => e(!1));
            }, [a]),
            a
              ? (0, t.jsx)(it.t, {
                  string: (0, A.we)("#Loading"),
                  position: "center",
                  size: "medium",
                })
              : (0, t.jsx)(t.Fragment, {
                  children: (0, t.jsxs)(V.dO, {
                    children: [
                      (0, t.jsx)(V.qh, {
                        path: Kt.BroadcastWatch(":steamid_or_user_vanity"),
                        render: (r) =>
                          (0, t.jsx)(Ht, {
                            strSteamID: r.match.params.steamid_or_user_vanity,
                          }),
                      }),
                      (0, t.jsx)(V.qh, { component: N.a }),
                    ],
                  }),
                })
          );
        }
      },
      46943: (b, $, s) => {
        "use strict";
        s.d($, { Ul: () => et, i8: () => G });
        var t = s(7850),
          K = s(90626),
          h = s(75844),
          V = s(5858),
          N = s(36707),
          q = s(3166),
          T = s(13465);
        const W =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          E =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          at =
            s.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
        var g = s(43047),
          y = s.n(g),
          f = s(71742),
          tt = Object.defineProperty,
          st = Object.getOwnPropertyDescriptor,
          nt = (m, u, p) =>
            u in m
              ? tt(m, u, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (m[u] = p),
          J = (m, u, p, x) => {
            for (
              var i = x > 1 ? void 0 : x ? st(u, p) : u, v = m.length - 1, C;
              v >= 0;
              v--
            )
              (C = m[v]) && (i = (x ? C(u, p, i) : C(i)) || i);
            return x && i && tt(u, p, i), i;
          },
          j = (m, u, p) => nt(m, typeof u != "symbol" ? u + "" : u, p);
        function U(m) {
          switch (m) {
            case "X-Small":
            case "Small":
              return W;
            case "Medium":
            case "MediumLarge":
              return E;
            case "Large":
            case "X-Large":
            case "FillArea":
              return at;
            default:
              return (0, f.z_)(m, `Unhandled size ${m}`), E;
          }
        }
        const et = K.memo(function (u) {
          const {
              strAvatarURL: p,
              size: x = "Medium",
              className: i,
              statusStyle: v,
              statusPosition: C,
              children: H,
              ...X
            } = u,
            Y = K.useMemo(() => {
              const P = [];
              return p && P.push(p), P.push(U(x)), P;
            }, [p, x]);
          return (0, t.jsxs)("div", {
            className: (0, N.A)(
              y().avatarHolder,
              "avatarHolder",
              "no-drag",
              x,
              i,
            ),
            ...X,
            children: [
              (0, t.jsx)("div", {
                className: (0, N.A)(y().avatarStatus, "avatarStatus", C),
                style: v,
              }),
              (0, t.jsx)(T.c, {
                className: (0, N.A)(y().avatar, "avatar"),
                rgSources: Y,
                draggable: !1,
              }),
              H,
            ],
          });
        });
        let G = class extends K.Component {
          render() {
            const {
              persona: m,
              size: u = "Medium",
              animatedAvatar: p,
              className: x,
              strBackupAvatarURL: i,
              ...v
            } = this.props;
            let C = "";
            return (
              p && p.image_small && p.image_small.length != 0
                ? (C = q.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + p.image_small)
                : m
                  ? ((C = m.avatar_url_medium),
                    u == "Small" || u == "X-Small"
                      ? (C = m.avatar_url)
                      : (u == "Large" || u == "X-Large" || u == "FillArea") &&
                        (C = m.avatar_url_full))
                  : i && (C = i),
              (0, t.jsx)(et, {
                strAvatarURL: C,
                size: u,
                className: (0, N.A)((0, V.rO)(m), x),
                ...v,
              })
            );
          }
        };
        G = J([h.PA], G);
        const rt = (0, h.PA)((m) => {
          const {
            profileItem: u,
            className: p,
            bDisableAnimation: x,
            ...i
          } = m;
          if (!u || !u.image_small || u.image_small.length == 0) return null;
          let v = x ? u.image_large : u.image_small;
          return (
            v || (v = u.image_small),
            v.startsWith("https://") ||
              (v = q.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + v),
            (0, t.jsx)("div", {
              className: (0, N.A)(y().avatarFrame, p, "avatarFrame"),
              ...i,
              children: (0, t.jsx)("img", {
                className: y().avatarFrameImg,
                src: v,
              }),
            })
          );
        });
        let R = class extends K.Component {
          constructor(m) {
            super(m),
              j(this, "m_timer"),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let m = 0;
            switch (this.props.loopDuration) {
              case "Short":
                m = 2500;
                break;
              case "Medium":
                m = 5e3;
                break;
              case "Long":
                m = 1e4;
                break;
            }
            m != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                m,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(m) {
            this.props.loopDuration != m.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != m.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: m,
              animatedAvatar: u,
              avatarFrame: p,
              children: x,
              style: i,
              bLimitProfileFrameAnimationTime: v,
              bParentHovered: C,
              ...H
            } = this.props;
            H.onClick && (i = { ...i, cursor: "pointer" });
            const X = this.state.bAnimate && u != null ? u : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(G, {
                animatedAvatar: X,
                ...H,
                children: [
                  x,
                  (0, t.jsx)(rt, {
                    profileItem: p != null ? p : null,
                    bDisableAnimation: v && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        R = J([h.PA], R);
      },
      17337: (b) => {
        b.exports = {
          SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
          Header: "_2vrXB5mprkP7EUv5iR8us3",
          AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
        };
      },
      98371: (b) => {
        b.exports = {
          BroadcastPage: "_3IVNUsV5MmxvVS3iAXgvah",
          ChatAndVideoContainer: "_3T2XhjHO-dGHFcW8wuOjPy",
          PlayerContainer: "_1YtbIC-J77gSgwSKsT5fi6",
          ControlCtn: "_3NMuAFkwI2iBEQ0Xc65_vU",
          ControlsTitle: "_2gpZbx7qR5ehVb4ZyjSePO",
          TitleInput: "_2hXPK8xeIJv-TaWiO-axvZ",
          Options: "_1zp3YgxRk_19JEyx47Y3i0",
          StopCtn: "_3swF91W-Cz8khVEz54YOq_",
          GameInfoCtn: "_4stlZwCqqseNCH-QLOQER",
          GameInfo: "_3LaZv8YHg2VjZ_HhcZ7bpk",
          GameAboutTitleCtn: "_3CMlOE34UtaORvJyHk5EGa",
          GameAboutTitle: "_2RJzuglNdpYTXg51KXQnOn",
          RelatedEvents: "_2RjLr7PFg6CZiul6cV6z_I",
          DebugCtn: "FKW0z5NevNCuD5xXlFgY5",
        };
      },
      46699: (b) => {
        b.exports = {
          ProfileCtn: "_qonROBlfDEqgHmEnTXf3",
          GameAndOptionsCtn: "Qo4I3mYF0bFBK2epQsXG2",
          GameAndViewersCtn: "XQo2J9u8ebB9kBJWDwPNW",
          BroadcastTitleCtn: "_1R6Q5E3iChq6o6-dvC9wVB",
          StreamDetailsCtn: "_11FAt4TX08YfslIrMg2DVM",
          ViewerCount: "_2skQ1ea4HbEWoM-0eRZQJ2",
          BroadcastUserActionsCtn: "_1MeMBOgHJbg6D0H83lpxWS",
          GameCapsule: "_1oJMxM2S4G0iIY4g7hHqVh",
        };
      },
      30593: (b) => {
        b.exports = { AdminControls: "_3KL0bXxikaWzpb1AY27eH0" };
      },
      16971: (b) => {
        b.exports = {
          AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
          NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
        };
      },
      43047: (b) => {
        b.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
    },
  ]);
})();
