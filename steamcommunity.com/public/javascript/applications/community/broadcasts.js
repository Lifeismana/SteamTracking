/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2079],
  {
    17337: (e) => {
      e.exports = {
        SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
        Header: "_2vrXB5mprkP7EUv5iR8us3",
        AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
      };
    },
    98371: (e) => {
      e.exports = {
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
    46699: (e) => {
      e.exports = {
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
    30593: (e) => {
      e.exports = { AdminControls: "_3KL0bXxikaWzpb1AY27eH0" };
    },
    16971: (e) => {
      e.exports = {
        AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
        NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
      };
    },
    35261: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => Be });
      var a = s(7850),
        n = (s(64641), s(90626)),
        r = s(92757),
        i = s(97058),
        o = s(41735),
        d = s.n(o),
        c = s(34629),
        l = s(14947),
        u = s(37085),
        m = s(17720),
        h = s(54728),
        _ = s(68797),
        p = s(78327);
      class S {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, l.Gn)(this);
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
        async LoadBroadcastDebugInfo(e) {
          let t = p.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
            s = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              origin: self.origin,
            };
          try {
            let a = await d().get(t, {
              params: s,
              withCredentials: !0,
              cancelToken: e ? e.token : void 0,
            });
            if (e && e.token.reason) return null;
            if (a && 200 == a.status && a.data && a.data.success == u.R)
              return (this.m_curDebugInfo = a.data), this.m_curDebugInfo;
          } catch (e) {
            let t = (0, _.H)(e);
            console.error("LoadBroadcastDebugInfo: Failed " + t.strErrorMsg, t);
          }
          return null;
        }
        async UpdateBroadcastSettings(e, t, s) {
          let a = p.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            n = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: e,
              title: t,
              sessionid: p.TS.SESSIONID,
            };
          try {
            let e = await d().get(a, {
              params: n,
              withCredentials: !0,
              cancelToken: s ? s.token : void 0,
            });
            if (s && s.token.reason) return !1;
            if (e && 200 == e.status && e.data && e.data.success == u.R) {
              const e = h.es.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                e &&
                  (0, l.h5)(() => {
                    e.m_strTitle = t;
                  }),
                !0
              );
            }
          } catch (e) {
            let t = (0, _.H)(e);
            console.error(
              "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
              t,
            );
          }
          return !1;
        }
        async StopBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            s = h.es.GetBroadcast(t);
          let a = p.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            n = {
              steamid: t,
              broadcastid: s ? s.m_ulBroadcastID : null,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "StopBroadcast",
            a,
            n,
            e,
          );
        }
        async SetBroadcasterRestrictions(e, t, s) {
          const a = this.m_steamid.ConvertTo64BitString(),
            n = h.es.GetBroadcast(a);
          let r = p.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            i = {
              steamid: a,
              broadcastid: n ? n.m_ulBroadcastID : null,
              type: e,
              days: t,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            r,
            i,
            s,
          );
        }
        async SetUnBannable(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            s = h.es.GetBroadcast(t);
          let a = p.TS.COMMUNITY_BASE_URL + "broadcast/unban",
            n = {
              steamid: t,
              broadcastid: s ? s.m_ulBroadcastID : null,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetUnBannable",
            a,
            n,
            e,
          );
        }
        async SendUserReportOnBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            s = h.es.GetBroadcast(t);
          let a = p.TS.COMMUNITY_BASE_URL + "broadcast/report",
            n = {
              steamid: t,
              broadcastid: s ? s.m_ulBroadcastID : null,
              description: e,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SendUserReportOnBroadcast",
            a,
            n,
            null,
          );
        }
        async InternalSendSimpleGetRequest(e, t, s, a) {
          try {
            let e = await d().get(t, {
              params: s,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
            if (a && a.token.reason) return !1;
            if (e && 200 == e.status && e.data && e.data.success == u.R)
              return !0;
          } catch (t) {
            let s = (0, _.H)(t);
            console.error(
              `CCommunityBroadcastStore:${e}: Failed ` + s.strErrorMsg,
              s,
            );
          }
          return !1;
        }
        static Get() {
          return (
            S.s_Singleton || ((S.s_Singleton = new S()), S.s_Singleton.Init()),
            S.s_Singleton
          );
        }
        Init() {
          let e = (0, p.Tc)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new m.b(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, c.Cg)([l.sH], S.prototype, "m_curDebugInfo", void 0);
      var v = s(75844),
        x = s(39606),
        j = s(72224),
        g = s(53120),
        B = s.n(g),
        C = s(55815),
        b = s(34214),
        f = s(34010),
        w = s(4796),
        I = s(68255),
        y = s(84811),
        D = s(35685),
        T = s(95034),
        N = s(95695),
        A = s.n(N),
        O = s(41399),
        k = s(9154),
        G = s(738),
        R = s(52038),
        E = s(56011),
        U = s(61859),
        M = s(14932),
        H = s(76684),
        P = s(82227),
        V = s(17337);
      const L = (e) => {
          const t = (0, n.useRef)(null),
            [s, r] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            (0, a.jsx)(y.tH, {
              children: (0, a.jsxs)("div", {
                className: (0, R.A)(V.Container),
                children: [
                  (0, a.jsx)("div", {
                    className: V.Controls,
                    children: (0, a.jsx)(I.$n, {
                      onClick: async () => {
                        t.current && t.current();
                        const e = d().CancelToken.source();
                        (t.current = e.cancel),
                          r(await S.Get().LoadBroadcastDebugInfo(e));
                      },
                      children: "(VO) Load Debug Info",
                    }),
                  }),
                  (0, a.jsx)(y.tH, { children: (0, a.jsx)(q, { info: s }) }),
                ],
              }),
            })
          );
        },
        q = (e) => {
          var t;
          const { info: s } = e,
            [r, i] = (0, n.useState)(!1);
          if (!s) return null;
          const o = S.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            d = h.es.GetBroadcast(o);
          return (0, a.jsxs)("div", {
            className: V.DisplaySection,
            children: [
              Boolean(s.last_error_result && s.last_error_result != u.R) &&
                (0, a.jsxs)("div", {
                  className: V.SubSection,
                  children: [
                    (0, a.jsx)("div", {
                      className: V.Header,
                      children: "Error",
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        "EResult: ",
                        s.last_error_result,
                        ", occurred ",
                        s.last_error_time,
                        " - ",
                        (0, a.jsx)(H.K4, {
                          dateAndTime: s.last_error_time,
                          bSingleLine: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "Broadcast Setup",
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Broadcaster: ", s.steam_id, ", SteamID: ", o],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Directory Server: ",
                      s.directory_server,
                      ", SessionID: ",
                      s.broadcast_id,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Ingester Server: ",
                      s.relay_server,
                      ", UploadID: ",
                      s.upload_id,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Origin Server: ", s.origin_server],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Chat Server: ",
                      s.chat_server,
                      ", chat_id: ",
                      s.chat_id,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Transcoder Server : ", s.transcode_server],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "Ingester Info",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Client: ",
                      s.remote_address,
                      " ",
                      Boolean(s.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Video Config: ",
                      s.upload_height,
                      "x",
                      s.upload_width,
                      "@",
                      s.upload_fps,
                      ", ",
                      s.upload_bandwidth,
                      " kbps ",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Audio Config: ",
                      s.upload_audio_channels,
                      "x",
                      s.upload_audio_samplerate,
                      "Hz, ",
                      s.upload_audio_bitrate / 1e3,
                      " kbps ",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Upload Stats: ",
                      s.upload_avg_fps,
                      " FPS, ",
                      s.upload_avg_bandwidth,
                      " kbps, ",
                      s.upload_avg_key_interval,
                      " msec key frame interval",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Upload Totals: ",
                      s.upload_total_frames_received,
                      " video frames,  ",
                      Math.round(
                        (s.upload_current_video_pts -
                          s.upload_first_video_pts) /
                          s.upload_video_timescale,
                      ),
                      " seconds ( ",
                      (0, P.dm)(s.upload_total_bytes_uploaded || 0, 1),
                      " ) ",
                    ],
                  }),
                ],
              }),
              Boolean(s.transcode_server) &&
                (0, a.jsxs)("div", {
                  className: V.SubSection,
                  children: [
                    (0, a.jsx)("div", {
                      className: V.Header,
                      children: "Transcoder Info",
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        "Decoder ( ",
                        s.upload_height,
                        "x",
                        s.upload_width,
                        "@",
                        s.upload_fps,
                        ", ",
                        s.upload_bandwidth,
                        " kbps ) :  ",
                        s.transcoder_frames_to_decode,
                        " queued,  ",
                        s.transcoder_frames_total_decoded,
                        " decoded",
                      ],
                    }),
                    s.transcoder_streams.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          children: [
                            "Encoder ",
                            e.representation_id,
                            " ( ",
                            e.height,
                            "x",
                            e.width,
                            "@",
                            e.fps,
                            " ",
                            e.bitrate,
                            " kbps ) : ",
                            e.frames_to_encode,
                            " queued, ",
                            e.frames_total_encoded,
                            " encoded",
                          ],
                        },
                        e.representation_id,
                      ),
                    ),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "Origin Info",
                  }),
                  null === (t = null == s ? void 0 : s.origin_video_streams) ||
                  void 0 === t
                    ? void 0
                    : t.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            children: [
                              "Video Stream ",
                              e.representation_id,
                              " ( ",
                              e.height,
                              "x",
                              e.width,
                              "@",
                              e.fps,
                              " ",
                              e.bitrate,
                              " kbps ) :  ",
                              e.num_frames_queued,
                              " frames queued,  ",
                              e.num_segments_received,
                              " segments received,  ",
                              2 * e.num_segments_cached,
                              " seconds cached ( ",
                              (0, P.dm)(e.memory_used, 2),
                              " )",
                            ],
                          },
                          e.representation_id,
                        ),
                      ),
                  "Audio Stream ",
                  s.origin_audio_stream.representation_id,
                  " ( ",
                  s.upload_audio_channels,
                  "x",
                  s.upload_audio_samplerate,
                  "Hz, ",
                  s.upload_audio_bitrate / 1e3,
                  " kbps ) :  ",
                  s.origin_audio_stream.num_frames_queued,
                  " frames queued,  ",
                  s.origin_audio_stream.num_segments_received,
                  " segments received,  ",
                  2 * s.origin_audio_stream.num_segments_cached,
                  " seconds cached ( ",
                  (0, P.dm)(s.origin_audio_stream.memory_used, 2),
                  " )",
                ],
              }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "Viewer Info",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Viewers: ",
                      s.current_viewers,
                      " current (",
                      s.current_anon_viewers,
                      " anonymous), ",
                      s.total_unique_viewers,
                      " total unique, ",
                      s.max_concurrent_viewers,
                      " max concurrent",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Average time watched: ",
                      s.average_watch_duration,
                      " seconds",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Last Minute: ",
                      s.added_viewers_last_minute,
                      " watch requests, ",
                      s.rejected_viewers_last_minute,
                      " rejected",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Restrictions: ", s.restriction],
                  }),
                  (0, a.jsx)("div", { children: s.extra_viewer_info }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "Settings",
                  }),
                  (0, a.jsxs)("div", {
                    children: ["is replay? ", s.is_replay],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "is replay local file? ",
                      s.is_replay_local_file,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["is replay clip? ", s.is_replay_clip],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["is capturing VOD? ", s.is_capturing_vod],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "is white listed for store streaming? ",
                      s.is_whitelisted,
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "App Info",
                  }),
                  (0, a.jsxs)("div", { children: ["appid: ", s.app_id] }),
                  (0, a.jsxs)("div", { children: ["app name: ", s.app_name] }),
                  (0, a.jsxs)("div", {
                    children: ["broadcast title: ", s.title],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["thumbnail: ", s.thumbnail_url],
                  }),
                  Boolean(s.thumbnail_url) &&
                    (0, a.jsx)("img", { src: s.thumbnail_url }),
                  Boolean(s.app_id && s.app_id > 0) &&
                    (0, a.jsx)("div", {
                      className: V.AppSummaryWidgetCtn,
                      children: (0, a.jsx)(O.p, {
                        id: s.app_id,
                        type: "game",
                        bPreferAssetWithoutOverride: !1,
                      }),
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: V.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: V.Header,
                    children: "Manifest Information",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Heartbeat Interval: ",
                      d.m_data.heartbeat_interval,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["DASH MPEG Url: ", d.m_data.url],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["HLS Url: ", d.m_data.hls_url],
                  }),
                ],
              }),
              (0, a.jsx)(I.$n, {
                onClick: () => i(!r),
                children: "Toggle Raw Data",
              }),
              Boolean(r) &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: V.SubSection,
                      children: (0, a.jsx)(M.G, { data: s }),
                    }),
                    (0, a.jsx)("div", {
                      className: V.SubSection,
                      children: (0, a.jsx)(M.G, {
                        data: (null == d ? void 0 : d.m_data) || "",
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
      var F = s(98371),
        Y = s(1035),
        X = s(41471),
        W = s(16971);
      const $ = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: s } = (0, X.hW)(t);
        return (0, a.jsxs)("div", {
          className: W.AvatarCtn,
          children: [
            (0, a.jsx)("a", {
              href: s.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              children: (0, a.jsx)(Y.i8, {
                persona: s,
                size: e.size,
                statusPosition: "bottom",
              }),
            }),
            (0, a.jsxs)("div", {
              className: W.NameAndProps,
              children: [
                Boolean(e.bShowName) &&
                  (0, a.jsx)("a", {
                    href: s.GetCommunityProfileURL(),
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                    children: s.m_strProfileURL,
                  }),
                e.children,
              ],
            }),
          ],
        });
      };
      var z = s(65946),
        K = s(55263),
        J = s(82477),
        Q = s(12155),
        Z = s(51272),
        ee = s(61336),
        te = s(46699),
        se = s(32754),
        ae = s(6083);
      function ne(e) {
        const { broadcasterSteamID: t } = e,
          s = t.ConvertTo64BitString(),
          [n, r] = (0, z.q3)(() => {
            const e = h.es.GetOrCreateBroadcastInfo(s);
            let t = e.m_nAppID != h.fO ? e.m_nAppID : 0;
            return [e.m_nViewerCount, t];
          }),
          [i] = (0, K.t7)(r, { include_assets: !0 });
        let o = null == i ? void 0 : i.GetAssets().GetMainCapsuleURL(),
          d = o && o.length > 0;
        return (0, a.jsx)(y.tH, {
          children: (0, a.jsxs)("div", {
            className: te.ProfileCtn,
            children: [
              d &&
                (0, a.jsx)("a", {
                  className: te.GameCapsule,
                  href: (0, ee.k2)(
                    (null == i ? void 0 : i.GetStorePageURL()) ||
                      p.TS.STORE_BASE_URL + "app/" + r,
                  ),
                  children: (0, a.jsx)("img", { src: o }),
                }),
              (0, a.jsxs)("div", {
                className: te.StreamDetailsCtn,
                children: [
                  (0, a.jsxs)("div", {
                    className: te.GameAndOptionsCtn,
                    children: [
                      (0, a.jsxs)("div", {
                        className: te.GameAndViewersCtn,
                        children: [
                          (0, a.jsx)(re, { broadcasterSteamID: t }),
                          (0, a.jsx)("div", {
                            className: te.ViewerCount,
                            children: (0, U.Yp)(
                              "#Broadcast_ViewerCount",
                              (0, ae.D)(n),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(ie, { broadcasterSteamID: t }),
                    ],
                  }),
                  (0, a.jsx)($, { steamid: t, size: "Medium", bShowName: !0 }),
                ],
              }),
            ],
          }),
        });
      }
      const re = (0, v.PA)((e) => {
          const { broadcasterSteamID: t } = e,
            s = t.ConvertTo64BitString(),
            [n, r] = (0, z.q3)(() => {
              const e = h.es.GetOrCreateBroadcastInfo(s);
              let t = e.m_nAppID != h.fO ? e.m_nAppID : 0;
              return [e.m_strAppTitle, t];
            }),
            [i] = (0, K.t7)(r, { include_assets: !0 });
          return (0, a.jsxs)("div", {
            className: te.BroadcastTitleCtn,
            children: [
              (0, U.we)("#Broadcast_Playing"),
              (0, a.jsx)("a", {
                href: (0, ee.k2)(
                  (null == i ? void 0 : i.GetStorePageURL()) ||
                    p.TS.STORE_BASE_URL + "app/" + r,
                ),
                children: Boolean(n) ? n : null == i ? void 0 : i.GetName(),
              }),
              Boolean((null == n ? void 0 : n.length) > 0) &&
                (0, a.jsxs)("span", { children: [" - ", n] }),
            ],
          });
        }),
        ie = (0, v.PA)((e) => {
          const { broadcasterSteamID: t } = e;
          t.ConvertTo64BitString();
          return (0, a.jsxs)("div", {
            className: te.BroadcastUserActionsCtn,
            children: [
              Boolean(
                p.iA.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
              ) &&
                (0, a.jsx)(I.$n, {
                  onClick: (e) => {
                    p.iA.logged_in
                      ? (0, G.pg)(
                          (0, a.jsx)(oe, { broadcasterSteamID: t }),
                          (0, E.uX)(e),
                        )
                      : (0, G.pg)(
                          (0, a.jsx)(k.o0, {
                            strTitle: (0, U.we)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, U.we)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, U.we)("#MobileLogin_SignIn"),
                            onOK: () => (0, J.vg)(),
                          }),
                          (0, E.uX)(e),
                        );
                  },
                  children: (0, a.jsx)(se.he, {
                    toolTipContent: (0, U.we)("#Broadcast_User_Report_ttip"),
                    children: (0, a.jsx)(Q.lNU, {}),
                  }),
                }),
              (0, a.jsx)(I.$n, {
                onClick: (e) =>
                  (0, Z.EP)(
                    e,
                    "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                  ),
                children: (0, a.jsx)(se.he, {
                  toolTipContent: (0, U.we)("#Broadcast_User_FAQ_ttip"),
                  children: (0, a.jsx)(Q.$$j, {}),
                }),
              }),
            ],
          });
        }),
        oe = (e) => {
          const [t, s] = (0, n.useState)("");
          return (0, a.jsx)(k.o0, {
            strTitle: (0, U.we)("#Broadcast_ReportItem_Title"),
            strDescription: (0, U.we)("#Broadcast_ReportItem_Description"),
            onCancel: e.closeModal,
            bOKDisabled: 0 == t.trim().length,
            onOK: async () => {
              await S.Get().SendUserReportOnBroadcast(t),
                e.closeModal && e.closeModal();
            },
            children: (0, a.jsx)("textarea", {
              value: t,
              onChange: (e) => s(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          });
        };
      var de = s(30593),
        ce = s(22797);
      const le = (e) => {
          if (!p.iA.is_support) return null;
          const t = (t, s) => {
              (0, G.pg)(
                (0, a.jsx)(ue, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: s,
                }),
                (0, E.uX)(t),
              );
            },
            s =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return (0, a.jsxs)("div", {
            className: (0, R.A)(de.AdminControls, A().ValveOnlyBackground),
            children: [
              (0, a.jsx)("div", { children: "(VO) Support Tools" }),
              (0, a.jsx)(I.$n, {
                onClick: (e) => t(e, "frontpage"),
                children: "Remove from Front Page",
              }),
              (0, a.jsx)(I.$n, {
                onClick: (e) => t(e, "ban"),
                children: "Ban from Broadcasting",
              }),
              (0, a.jsx)(I.$n, {
                onClick: (t) => {
                  (0, G.pg)(
                    (0, a.jsx)(me, { steamid: e.broadcastSteamID }),
                    (0, E.uX)(t),
                  );
                },
                children: "Make Unbannable",
              }),
              (0, a.jsx)(I.$n, {
                onClick: (e) => (0, Z.EP)(e, s),
                children: "Go to Support Page",
              }),
            ],
          });
        },
        ue = (0, v.PA)((e) => {
          const { broadcastSteamID: t, strAction: s } = e,
            [r, i] = (0, n.useState)(1),
            [o, c] = (0, n.useState)(!1),
            [l, u] = (0, n.useState)(!1),
            [m, h] = (0, n.useState)(!1),
            _ = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const p = () => e.closeModal && e.closeModal();
          return (0, a.jsx)(y.tH, {
            children: (0, a.jsx)(k.x_, {
              onEscKeypress: p,
              children: (0, a.jsxs)(I.UC, {
                children: [
                  (0, a.jsx)(I.Y9, {
                    children:
                      "frontpage" == s
                        ? "Remove Broadcast From Front Page"
                        : "Ban from Broadcasting",
                  }),
                  (0, a.jsx)(I.nB, {
                    children: (0, a.jsxs)(I.a3, {
                      children: [
                        (0, a.jsx)("p", {
                          children:
                            "frontpage" == s
                              ? "How long should we prevent the broadcast from appearing in community or store?"
                              : "How long should we prevent the user from Broadcast at all on Steam?",
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(I.m, {
                              rgOptions: [
                                { label: "1 Day", data: 1 },
                                { label: "1 Week", data: 7 },
                                { label: "1 Month", data: 30 },
                                { label: "6 Months", data: 180 },
                                { label: "1 Year", data: 365 },
                              ],
                              selectedOption: r,
                              onChange: (e) => i(e.data),
                            }),
                            Boolean(o) && (0, a.jsx)(ce.t, {}),
                            Boolean(l) &&
                              (0, a.jsx)("div", {
                                children: m
                                  ? "Successfully Completed Request"
                                  : "Failed to complete request, check browser console and/or try again later",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(I.wi, {
                    children: l
                      ? (0, a.jsx)(I.jn, {
                          onClick: p,
                          children: (0, U.we)("#Button_Dismiss"),
                        })
                      : (0, a.jsxs)(I.dR, {
                          children: [
                            (0, a.jsx)(I.$n, {
                              onClick: p,
                              children: (0, U.we)("#Button_Cancel"),
                            }),
                            (0, a.jsx)(I.jn, {
                              onClick: async () => {
                                c(!0);
                                try {
                                  _.current && _.current();
                                  const e = d().CancelToken.source();
                                  _.current = e.cancel;
                                  let t =
                                    await S.Get().SetBroadcasterRestrictions(
                                      s,
                                      r,
                                      e,
                                    );
                                  e.token.reason || (t = !0);
                                } finally {
                                  c(!1), u(!0), h(false);
                                }
                              },
                              children: (0, U.we)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        }),
        me = (e) => {
          const [t, s] = (0, n.useState)(!1),
            [r, i] = (0, n.useState)(!1),
            [o, c] = (0, n.useState)(!1),
            l = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              l.current && l.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const u = () => e.closeModal && e.closeModal();
          return (0, a.jsx)(y.tH, {
            children: (0, a.jsx)(k.x_, {
              onEscKeypress: u,
              children: (0, a.jsxs)(I.UC, {
                children: [
                  (0, a.jsx)(I.Y9, { children: "Make Broadcast Unbannable" }),
                  (0, a.jsx)(I.nB, {
                    children: (0, a.jsxs)(I.a3, {
                      children: [
                        (0, a.jsx)("p", {
                          children:
                            "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            Boolean(t) && (0, a.jsx)(ce.t, {}),
                            Boolean(r) &&
                              (0, a.jsx)("div", {
                                children: o
                                  ? "Successfully Set Unbannable"
                                  : "Failed to make Unbannable",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(I.wi, {
                    children: r
                      ? (0, a.jsx)(I.jn, {
                          onClick: u,
                          children: (0, U.we)("#Button_Dismiss"),
                        })
                      : (0, a.jsxs)(I.dR, {
                          children: [
                            (0, a.jsx)(I.$n, {
                              onClick: u,
                              children: (0, U.we)("#Button_Cancel"),
                            }),
                            (0, a.jsx)(I.jn, {
                              onClick: async () => {
                                s(!0);
                                let e = !1;
                                try {
                                  l.current && l.current();
                                  const t = d().CancelToken.source();
                                  (l.current = t.cancel),
                                    (e = await S.Get().SetUnBannable(t));
                                } finally {
                                  s(!1), i(!0), c(e);
                                }
                              },
                              children: (0, U.we)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        };
      var he = s(26408),
        _e = s(25888);
      const pe = (0, v.PA)((e) => {
        const t = S.Get().GetBroadcasterSteamID(),
          s = null == t ? void 0 : t.ConvertTo64BitString(),
          r = (function () {
            const [e] = (0, n.useState)(
              () =>
                (0, p.Tc)("ewatchlocation", "application_config") || C.nn.CJ,
            );
            return e;
          })(),
          [i, o] = (0, T.QD)("muted", !0),
          d = h.es.GetBroadcast(s),
          c = h.es.GetOrCreateBroadcastInfo(s);
        return s
          ? (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                className: (0, R.A)(F.BroadcastPage),
                children: [
                  (0, a.jsxs)("div", {
                    className: (0, R.A)(B().BroadcastAndChat),
                    children: [
                      Boolean(!S.Get().BShowOnlyChat()) &&
                        (0, a.jsx)(y.tH, {
                          children: (0, a.jsx)("div", {
                            className: (0, R.A)(B().wrapper),
                            children: (0, a.jsx)("div", {
                              className: (0, R.A)({
                                [B().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [B().NoChat]: S.Get().BShowOnlyVideo(),
                              }),
                              children: (0, a.jsx)("div", {
                                className: B().BroadcastPlayerContainer,
                                children: (0, a.jsx)(y.tH, {
                                  children: (0, a.jsx)(j.default, {
                                    steamIDBroadcast: s,
                                    watchLocation: r,
                                    bStartMuted: i,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      Boolean(!S.Get().BShowOnlyVideo()) &&
                        (0, a.jsx)("div", {
                          className: B().detail_chat_ctn,
                          children: (0, a.jsx)("div", {
                            className: B().ChatContainer,
                            children: (0, a.jsx)(y.tH, {
                              children: (0, a.jsx)(x.I, {
                                emoticonStore: f.MX,
                                watchLocation: C.nn.fe,
                                steamID: s,
                                broadcastID: d ? d.m_ulBroadcastID : void 0,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  Boolean(!S.Get().BShowInIframe()) &&
                    (0, a.jsx)(ve, { broadcasterSteamID: t, broadcastInfo: c }),
                ],
              }),
            })
          : null;
      });
      function Se(e) {
        return 0 != e && e != h.fO;
      }
      const ve = (0, v.PA)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: s } = e,
            [r, i] = (0, n.useState)(null);
          let o = s.m_nAppID;
          return (
            (0, n.useEffect)(() => {
              Se(o) &&
                (async () => {
                  let e = await w.ac.LoadOGGClanInfoForAppID(o);
                  i(e);
                })();
            }, [o]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(ne, { broadcasterSteamID: t }),
                (0, a.jsx)(xe, { steamid: t }),
                Boolean(p.iA.is_support) &&
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(le, { broadcastSteamID: t }),
                      (0, a.jsx)("div", {
                        className: (0, R.A)(
                          A().ValveOnlyBackground,
                          F.DebugCtn,
                        ),
                        children: (0, a.jsx)(L, {}),
                      }),
                    ],
                  }),
                Se(o) &&
                  (0, a.jsxs)("div", {
                    className: F.GameInfoCtn,
                    children: [
                      (0, a.jsxs)("div", {
                        className: F.GameAboutTitleCtn,
                        children: [
                          (0, a.jsxs)("div", {
                            className: F.GameAboutTitle,
                            children: [
                              " ",
                              (0, U.we)("#Broadcast_About_Game"),
                              " ",
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: A().EventSectionSpacer,
                            children: " ",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: F.GameInfo,
                        children: (0, a.jsx)(O.p, {
                          id: Number.parseInt(s.m_strAppId),
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                    ],
                  }),
                Boolean(r) &&
                  (0, a.jsx)("div", {
                    className: F.RelatedEvents,
                    children: (0, a.jsx)(D.rN, {
                      clanAccountID: r.clanAccountID,
                      trackingLocation: b.Tc.My,
                      partnerEventStore: _e.Av,
                      bViewAllShowInfiniteScroll: !0,
                    }),
                  }),
              ],
            })
          );
        }),
        xe = (0, v.PA)((e) => {
          const t = (0, n.useRef)(null);
          let s = h.es.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [r, i] = (0, n.useState)(s.m_strTitle),
            [o, c] = (0, n.useState)(""),
            [l, u] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                i(s.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [s.m_strTitle],
            ),
            p.iA.accountid != e.steamid.GetAccountID())
          )
            return null;
          return (0, a.jsxs)("div", {
            className: F.ControlCtn,
            children: [
              (0, a.jsx)("div", {
                className: F.ControlsTitle,
                children: (0, U.we)("#Broadcaster_Control_title"),
              }),
              (0, a.jsxs)("div", {
                className: F.TitleInput,
                children: [
                  (0, a.jsxs)("div", {
                    className: F.Options,
                    children: [
                      (0, a.jsx)(I.pd, {
                        type: "text",
                        label: (0, U.we)("#Broadcast_title_title"),
                        onChange: (e) => i(e.currentTarget.value || ""),
                        placeholder: (0, U.we)("#Broadcast_title_placeholder"),
                        value: r,
                      }),
                      (0, a.jsx)(I.pd, {
                        type: "text",
                        label: (0, U.we)("#Broadcast_Control_matchid"),
                        onChange: (e) => c(e.currentTarget.value || ""),
                        value: o,
                      }),
                      (0, a.jsxs)(I.$n, {
                        onClick: async () => {
                          t.current && t.current();
                          const e = d().CancelToken.source();
                          t.current = e.cancel;
                          let s = await S.Get().UpdateBroadcastSettings(
                            o,
                            r,
                            e,
                          );
                          e.token.reason ||
                            u(
                              (0, U.we)(
                                s
                                  ? "#Broadcast_Control_Success"
                                  : "#Broadcast_Control_Failure",
                              ),
                            );
                        },
                        children: [
                          (0, U.we)("#Broadcast_save_changes"),
                          (0, a.jsx)(he.o, {
                            tooltip: (0, U.we)("#Broadcast_save_title_ttip"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: F.StopCtn,
                    children: [
                      (0, a.jsx)(I.$n, {
                        onClick: (e) => {
                          (0, G.pg)(
                            (0, a.jsx)(k.o0, {
                              strTitle: (0, U.we)(
                                "#Broadcast_Control_StopBroadcast",
                              ),
                              strDescription: (0, U.we)(
                                "#EventEditor_GenericAreYouSure",
                              ),
                              onOK: async () => {
                                t.current && t.current();
                                const e = d().CancelToken.source();
                                t.current = e.cancel;
                                let s = await S.Get().StopBroadcast(e);
                                e.token.reason ||
                                  u(
                                    (0, U.we)(
                                      s
                                        ? "#Broadcast_Control_StopSuccess"
                                        : "#Broadcast_Control_StopFailure",
                                    ),
                                  );
                              },
                            }),
                            (0, E.uX)(e),
                          );
                        },
                        children: (0, U.we)("#Broadcast_Control_StopBroadcast"),
                      }),
                      Boolean(l) && (0, a.jsx)("div", { children: l }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      var je = s(60746);
      let ge = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function Be(e) {
        const [t, s] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && je.KN.InitGlobal().then(() => s(!1));
          }, [t]),
          t
            ? (0, a.jsx)(ce.t, {
                string: (0, U.we)("#Loading"),
                position: "center",
                size: "medium",
              })
            : (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)(r.dO, {
                  children: [
                    (0, a.jsx)(r.qh, {
                      path: ge.BroadcastWatch(":steamid_or_user_vanity"),
                      render: (e) =>
                        (0, a.jsx)(pe, {
                          strSteamID: e.match.params.steamid_or_user_vanity,
                        }),
                    }),
                    (0, a.jsx)(r.qh, { component: i.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
