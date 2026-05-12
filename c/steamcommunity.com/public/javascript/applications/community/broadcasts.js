(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2079],
  {
    chunkid: (module) => {
      module.exports = {
        SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
        Header: "_2vrXB5mprkP7EUv5iR8us3",
        AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
      };
    },
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module) => {
      module.exports = {
        AdminControls: "_3KL0bXxikaWzpb1AY27eH0",
      };
    },
    chunkid: (module) => {
      module.exports = {
        AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
        NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, _._)(this);
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
        async LoadBroadcastDebugInfo(_) {
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
            _ = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              origin: self.origin,
            };
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return null;
            if (_ && 200 == _.status && _.data && _.data.success == _._)
              return (this.m_curDebugInfo = _.data), this.m_curDebugInfo;
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("LoadBroadcastDebugInfo: Failed " + _.strErrorMsg, _);
          }
          return null;
        }
        async UpdateBroadcastSettings(_, _, _) {
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            _ = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: _,
              title: _,
              sessionid: _._.SESSIONID,
            };
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return !1;
            if (_ && 200 == _.status && _.data && _.data.success == _._) {
              const _ = _._.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                _ &&
                  (0, _._)(() => {
                    _.m_strTitle = _;
                  }),
                !0
              );
            }
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "UpdateBroadcastSettings: Failed " + _.strErrorMsg,
              _,
            );
          }
          return !1;
        }
        async StopBroadcast(_) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "StopBroadcast",
            _,
            _,
            _,
          );
        }
        async SetBroadcasterRestrictions(_, _, _) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              type: _,
              days: _,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            _,
            _,
            _,
          );
        }
        async SetUnBannable(_) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/unban",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetUnBannable",
            _,
            _,
            _,
          );
        }
        async SendUserReportOnBroadcast(_) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/report",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              description: _,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SendUserReportOnBroadcast",
            _,
            _,
            null,
          );
        }
        async InternalSendSimpleGetRequest(_, _, _, _) {
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return !1;
            if (_ && 200 == _.status && _.data && _.data.success == _._)
              return !0;
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              `CCommunityBroadcastStore:${_}: Failed ` + _.strErrorMsg,
              _,
            );
          }
          return !1;
        }
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        Init() {
          let _ = (0, _._)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(_) &&
            ((this.m_steamid = new _._(_.steamid)),
            (this.m_bShowOnlyChat = Boolean(_.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(_.show_only_video)));
        }
        ValidateStoreDefault(_) {
          return !(!_ || "object" != typeof _) && "string" == typeof _.steamid;
        }
      }
      (0, _._)([_._], _.prototype, "m_curDebugInfo", void 0);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
          const _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)(null);
          return (
            (0, _.useEffect)(
              () => () => {
                _.current && _.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            (0, _.jsx)(_._, {
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_.Container),
                children: [
                  (0, _.jsx)("div", {
                    className: _.Controls,
                    children: (0, _.jsx)(_._, {
                      onClick: async () => {
                        _.current && _.current();
                        const _ = _().CancelToken.source();
                        (_.current = _.cancel),
                          _(await _.Get().LoadBroadcastDebugInfo(_));
                      },
                      children: "(VO) Load Debug Info",
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      info: _,
                    }),
                  }),
                ],
              }),
            })
          );
        },
        _ = (_) => {
          var _;
          const { info: _ } = _,
            [_, _] = (0, _.useState)(!1);
          if (!_) return null;
          const _ = _.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          return (0, _.jsxs)("div", {
            className: _.DisplaySection,
            children: [
              Boolean(_.last_error_result && _.last_error_result != _._) &&
                (0, _.jsxs)("div", {
                  className: _.SubSection,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.Header,
                      children: "Error",
                    }),
                    (0, _.jsxs)("div", {
                      children: [
                        "EResult: ",
                        _.last_error_result,
                        ", occurred ",
                        _.last_error_time,
                        " - ",
                        (0, _.jsx)(_._, {
                          dateAndTime: _.last_error_time,
                          bSingleLine: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "Broadcast Setup",
                  }),
                  (0, _.jsxs)("div", {
                    children: ["Broadcaster: ", _.steam_id, ", SteamID: ", _],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Directory Server: ",
                      _.directory_server,
                      ", SessionID: ",
                      _.broadcast_id,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Ingester Server: ",
                      _.relay_server,
                      ", UploadID: ",
                      _.upload_id,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["Origin Server: ", _.origin_server],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Chat Server: ",
                      _.chat_server,
                      ", chat_id: ",
                      _.chat_id,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["Transcoder Server : ", _.transcode_server],
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "Ingester Info",
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Client: ",
                      _.remote_address,
                      " ",
                      Boolean(_.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Video Config: ",
                      _.upload_height,
                      "x",
                      _.upload_width,
                      "@",
                      _.upload_fps,
                      ", ",
                      _.upload_bandwidth,
                      " kbps ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Audio Config: ",
                      _.upload_audio_channels,
                      "x",
                      _.upload_audio_samplerate,
                      "Hz, ",
                      _.upload_audio_bitrate / 1e3,
                      " kbps ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Upload Stats: ",
                      _.upload_avg_fps,
                      " FPS, ",
                      _.upload_avg_bandwidth,
                      " kbps, ",
                      _.upload_avg_key_interval,
                      " msec key frame interval",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Upload Totals: ",
                      _.upload_total_frames_received,
                      " video frames,  ",
                      Math.round(
                        (_.upload_current_video_pts -
                          _.upload_first_video_pts) /
                          _.upload_video_timescale,
                      ),
                      " seconds ( ",
                      (0, _._)(_.upload_total_bytes_uploaded || 0, 1),
                      " ) ",
                    ],
                  }),
                ],
              }),
              Boolean(_.transcode_server) &&
                (0, _.jsxs)("div", {
                  className: _.SubSection,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.Header,
                      children: "Transcoder Info",
                    }),
                    (0, _.jsxs)("div", {
                      children: [
                        "Decoder ( ",
                        _.upload_height,
                        "x",
                        _.upload_width,
                        "@",
                        _.upload_fps,
                        ", ",
                        _.upload_bandwidth,
                        " kbps ) :  ",
                        _.transcoder_frames_to_decode,
                        " queued,  ",
                        _.transcoder_frames_total_decoded,
                        " decoded",
                      ],
                    }),
                    _.transcoder_streams.map((_) =>
                      (0, _.jsxs)(
                        "div",
                        {
                          children: [
                            "Encoder ",
                            _.representation_id,
                            " ( ",
                            _.height,
                            "x",
                            _.width,
                            "@",
                            _.fps,
                            " ",
                            _.bitrate,
                            " kbps ) : ",
                            _.frames_to_encode,
                            " queued, ",
                            _.frames_total_encoded,
                            " encoded",
                          ],
                        },
                        _.representation_id,
                      ),
                    ),
                  ],
                }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "Origin Info",
                  }),
                  null === (_ = null == _ ? void 0 : _.origin_video_streams) ||
                  void 0 === _
                    ? void 0
                    : _.map((_) =>
                        (0, _.jsxs)(
                          "div",
                          {
                            children: [
                              "Video Stream ",
                              _.representation_id,
                              " ( ",
                              _.height,
                              "x",
                              _.width,
                              "@",
                              _.fps,
                              " ",
                              _.bitrate,
                              " kbps ) :  ",
                              _.num_frames_queued,
                              " frames queued,  ",
                              _.num_segments_received,
                              " segments received,  ",
                              2 * _.num_segments_cached,
                              " seconds cached ( ",
                              (0, _._)(_.memory_used, 2),
                              " )",
                            ],
                          },
                          _.representation_id,
                        ),
                      ),
                  "Audio Stream ",
                  _.origin_audio_stream.representation_id,
                  " ( ",
                  _.upload_audio_channels,
                  "x",
                  _.upload_audio_samplerate,
                  "Hz, ",
                  _.upload_audio_bitrate / 1e3,
                  " kbps ) :  ",
                  _.origin_audio_stream.num_frames_queued,
                  " frames queued,  ",
                  _.origin_audio_stream.num_segments_received,
                  " segments received,  ",
                  2 * _.origin_audio_stream.num_segments_cached,
                  " seconds cached ( ",
                  (0, _._)(_.origin_audio_stream.memory_used, 2),
                  " )",
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "Viewer Info",
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Viewers: ",
                      _.current_viewers,
                      " current (",
                      _.current_anon_viewers,
                      " anonymous), ",
                      _.total_unique_viewers,
                      " total unique, ",
                      _.max_concurrent_viewers,
                      " max concurrent",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Average time watched: ",
                      _.average_watch_duration,
                      " seconds",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Last Minute: ",
                      _.added_viewers_last_minute,
                      " watch requests, ",
                      _.rejected_viewers_last_minute,
                      " rejected",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["Restrictions: ", _.restriction],
                  }),
                  (0, _.jsx)("div", {
                    children: _.extra_viewer_info,
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "Settings",
                  }),
                  (0, _.jsxs)("div", {
                    children: ["is replay? ", _.is_replay],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "is replay local file? ",
                      _.is_replay_local_file,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["is replay clip? ", _.is_replay_clip],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["is capturing VOD? ", _.is_capturing_vod],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "is white listed for store streaming? ",
                      _.is_whitelisted,
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "App Info",
                  }),
                  (0, _.jsxs)("div", {
                    children: ["appid: ", _.app_id],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["app name: ", _.app_name],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["broadcast title: ", _.title],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["thumbnail: ", _.thumbnail_url],
                  }),
                  Boolean(_.thumbnail_url) &&
                    (0, _.jsx)("img", {
                      src: _.thumbnail_url,
                    }),
                  Boolean(_.app_id && _.app_id > 0) &&
                    (0, _.jsx)("div", {
                      className: _.AppSummaryWidgetCtn,
                      children: (0, _.jsx)(_._, {
                        _: _.app_id,
                        type: "game",
                        bPreferAssetWithoutOverride: !1,
                      }),
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.SubSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Header,
                    children: "Manifest Information",
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Heartbeat Interval: ",
                      _.m_data.heartbeat_interval,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["DASH MPEG Url: ", _.m_data.url],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["HLS Url: ", _.m_data.hls_url],
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                onClick: () => _(!_),
                children: "Toggle Raw Data",
              }),
              Boolean(_) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _.SubSection,
                      children: (0, _.jsx)(_._, {
                        data: _,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _.SubSection,
                      children: (0, _.jsx)(_._, {
                        data: (null == _ ? void 0 : _.m_data) || "",
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        const _ = _.steamid.GetAccountID(),
          { data: _ } = (0, _._)(_);
        return (0, _.jsxs)("div", {
          className: _.AvatarCtn,
          children: [
            (0, _.jsx)("a", {
              href: __webpack_require__.GetCommunityProfileURL(),
              "data-miniprofile": "s" + _.steamid.ConvertTo64BitString(),
              children: (0, _.jsx)(_._, {
                persona: _,
                size: _.size,
                statusPosition: "bottom",
              }),
            }),
            (0, _.jsxs)("div", {
              className: _.NameAndProps,
              children: [
                Boolean(_.bShowName) &&
                  (0, _.jsx)("a", {
                    href: __webpack_require__.GetCommunityProfileURL(),
                    "data-miniprofile": "s" + _.steamid.ConvertTo64BitString(),
                    children: _.m_strProfileURL,
                  }),
                _.children,
              ],
            }),
          ],
        });
      };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { broadcasterSteamID: _ } = _,
          _ = _.ConvertTo64BitString(),
          [_, _] = (0, _._)(() => {
            const _ = _._.GetOrCreateBroadcastInfo(_);
            let _ = _.m_nAppID != _._ ? _.m_nAppID : 0;
            return [_.m_nViewerCount, _];
          }),
          [_] = (0, _._)(_, {
            include_assets: !0,
          });
        let _ = null == _ ? void 0 : _.GetAssets().GetMainCapsuleURL(),
          _ = _ && _.length > 0;
        return (0, _.jsx)(_._, {
          children: (0, _.jsxs)("div", {
            className: _.ProfileCtn,
            children: [
              _ &&
                (0, _.jsx)("a", {
                  className: _.GameCapsule,
                  href: (0, _._)(
                    (null == _ ? void 0 : _.GetStorePageURL()) ||
                      _._.STORE_BASE_URL + "app/" + _,
                  ),
                  children: (0, _.jsx)("img", {
                    src: _,
                  }),
                }),
              (0, _.jsxs)("div", {
                className: _.StreamDetailsCtn,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.GameAndOptionsCtn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.GameAndViewersCtn,
                        children: [
                          (0, _.jsx)(_, {
                            broadcasterSteamID: _,
                          }),
                          (0, _.jsx)("div", {
                            className: _.ViewerCount,
                            children: (0, _._)(
                              "#Broadcast_ViewerCount",
                              (0, _._)(_),
                            ),
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        broadcasterSteamID: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    steamid: _,
                    size: "Medium",
                    bShowName: !0,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      const _ = (0, _._)((_) => {
          const { broadcasterSteamID: _ } = _,
            _ = _.ConvertTo64BitString(),
            [_, _] = (0, _._)(() => {
              const _ = _._.GetOrCreateBroadcastInfo(_);
              let _ = _.m_nAppID != _._ ? _.m_nAppID : 0;
              return [_.m_strAppTitle, _];
            }),
            [_] = (0, _._)(_, {
              include_assets: !0,
            });
          return (0, _.jsxs)("div", {
            className: _.BroadcastTitleCtn,
            children: [
              (0, _._)("#Broadcast_Playing"),
              (0, _.jsx)("a", {
                href: (0, _._)(
                  (null == _ ? void 0 : _.GetStorePageURL()) ||
                    _._.STORE_BASE_URL + "app/" + _,
                ),
                children: Boolean(_) ? _ : null == _ ? void 0 : _.GetName(),
              }),
              Boolean((null == _ ? void 0 : _.length) > 0) &&
                (0, _.jsxs)("span", {
                  children: [" - ", _],
                }),
            ],
          });
        }),
        _ = (0, _._)((_) => {
          const { broadcasterSteamID: _ } = _;
          _.ConvertTo64BitString();
          return (0, _.jsxs)("div", {
            className: _.BroadcastUserActionsCtn,
            children: [
              Boolean(
                _._.steamid != _.broadcasterSteamID.ConvertTo64BitString(),
              ) &&
                (0, _.jsx)(_._, {
                  onClick: (_) => {
                    _._.logged_in
                      ? (0, _._)(
                          (0, _.jsx)(_, {
                            broadcasterSteamID: _,
                          }),
                          (0, _._)(_),
                        )
                      : (0, _._)(
                          (0, _.jsx)(_._, {
                            strTitle: (0, _._)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, _._)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                            onOK: () => (0, _._)(),
                          }),
                          (0, _._)(_),
                        );
                  },
                  children: (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)("#Broadcast_User_Report_ttip"),
                    children: (0, _.jsx)(_.lNU, {}),
                  }),
                }),
              (0, _.jsx)(_._, {
                onClick: (_) =>
                  (0, _._)(
                    _,
                    "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                  ),
                children: (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)("#Broadcast_User_FAQ_ttip"),
                  children: (0, _.jsx)(_.$$j, {}),
                }),
              }),
            ],
          });
        }),
        _ = (_) => {
          const [_, _] = (0, _.useState)("");
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)("#Broadcast_ReportItem_Title"),
            strDescription: (0, _._)("#Broadcast_ReportItem_Description"),
            onCancel: _.closeModal,
            bOKDisabled: 0 == _.trim().length,
            onOK: async () => {
              await _.Get().SendUserReportOnBroadcast(_),
                _.closeModal && _.closeModal();
            },
            children: (0, _.jsx)("textarea", {
              value: _,
              onChange: (_) => __webpack_require__(_.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          });
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
          if (!_._.is_support) return null;
          const _ = (_, _) => {
              (0, _._)(
                (0, _.jsx)(_, {
                  broadcastSteamID: _.broadcastSteamID,
                  strAction: _,
                }),
                (0, _._)(_),
              );
            },
            _ =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              _.broadcastSteamID.ConvertTo64BitString();
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.AdminControls, _().ValveOnlyBackground),
            children: [
              (0, _.jsx)("div", {
                children: "(VO) Support Tools",
              }),
              (0, _.jsx)(_._, {
                onClick: (_) => _(_, "frontpage"),
                children: "Remove from Front Page",
              }),
              (0, _.jsx)(_._, {
                onClick: (_) => _(_, "ban"),
                children: "Ban from Broadcasting",
              }),
              (0, _.jsx)(_._, {
                onClick: (_) => {
                  (0, _._)(
                    (0, _.jsx)(_, {
                      steamid: _.broadcastSteamID,
                    }),
                    (0, _._)(_),
                  );
                },
                children: "Make Unbannable",
              }),
              (0, _.jsx)(_._, {
                onClick: (_) => (0, _._)(_, _),
                children: "Go to Support Page",
              }),
            ],
          });
        },
        _ = (0, _._)((_) => {
          const { broadcastSteamID: _, strAction: _ } = _,
            [_, _] = (0, _.useState)(1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const _ = () => _.closeModal && _.closeModal();
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              onEscKeypress: _,
              children: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    children:
                      "frontpage" == _
                        ? "Remove Broadcast From Front Page"
                        : "Ban from Broadcasting",
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)("p", {
                          children:
                            "frontpage" == _
                              ? "How long should we prevent the broadcast from appearing in community or store?"
                              : "How long should we prevent the user from Broadcast at all on Steam?",
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)(_._, {
                              rgOptions: [
                                {
                                  label: "1 Day",
                                  data: 1,
                                },
                                {
                                  label: "1 Week",
                                  data: 7,
                                },
                                {
                                  label: "1 Month",
                                  data: 30,
                                },
                                {
                                  label: "6 Months",
                                  data: 180,
                                },
                                {
                                  label: "1 Year",
                                  data: 365,
                                },
                              ],
                              selectedOption: _,
                              onChange: (_) => _(_.data),
                            }),
                            Boolean(_) && (0, _.jsx)(_._, {}),
                            Boolean(_) &&
                              (0, _.jsx)("div", {
                                children: _
                                  ? "Successfully Completed Request"
                                  : "Failed to complete request, check browser console and/or try again later",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: _
                      ? (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)("#Button_Dismiss"),
                        })
                      : (0, _.jsxs)(_._, {
                          children: [
                            (0, _.jsx)(_._, {
                              onClick: _,
                              children: (0, _._)("#Button_Cancel"),
                            }),
                            (0, _.jsx)(_._, {
                              onClick: async () => {
                                _(!0);
                                try {
                                  _.current && _.current();
                                  const _ = _().CancelToken.source();
                                  _.current = _.cancel;
                                  let _ =
                                    await _.Get().SetBroadcasterRestrictions(
                                      _,
                                      _,
                                      _,
                                    );
                                  _.token.reason || (_ = !0);
                                } finally {
                                  _(!1), _(!0), _(false);
                                }
                              },
                              children: (0, _._)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        }),
        _ = (_) => {
          const [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            () => () => {
              _.current && _.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const _ = () => _.closeModal && _.closeModal();
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              onEscKeypress: _,
              children: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    children: "Make Broadcast Unbannable",
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)("p", {
                          children:
                            "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            Boolean(_) && (0, _.jsx)(_._, {}),
                            Boolean(_) &&
                              (0, _.jsx)("div", {
                                children: _
                                  ? "Successfully Set Unbannable"
                                  : "Failed to make Unbannable",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: _
                      ? (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)("#Button_Dismiss"),
                        })
                      : (0, _.jsxs)(_._, {
                          children: [
                            (0, _.jsx)(_._, {
                              onClick: _,
                              children: (0, _._)("#Button_Cancel"),
                            }),
                            (0, _.jsx)(_._, {
                              onClick: async () => {
                                __webpack_require__(!0);
                                let _ = !1;
                                try {
                                  _.current && _.current();
                                  const _ = _().CancelToken.source();
                                  (_.current = _.cancel),
                                    (_ = await _.Get().SetUnBannable(_));
                                } finally {
                                  __webpack_require__(!1), _(!0), _(_);
                                }
                              },
                              children: (0, _._)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const _ = _.Get().GetBroadcasterSteamID(),
          _ = null == _ ? void 0 : _.ConvertTo64BitString(),
          _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("ewatchlocation", "application_config") || _._._,
            );
            return _;
          })(),
          [_, _] = (0, _._)("muted", !0),
          _ = _._.GetBroadcast(_),
          _ = _._.GetOrCreateBroadcastInfo(_);
        return _
          ? (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_.BroadcastPage),
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().BroadcastAndChat),
                    children: [
                      Boolean(!_.Get().BShowOnlyChat()) &&
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)("div", {
                            className: (0, _._)(_().wrapper),
                            children: (0, _.jsx)("div", {
                              className: (0, _._)({
                                [_().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [_().NoChat]: _.Get().BShowOnlyVideo(),
                              }),
                              children: (0, _.jsx)("div", {
                                className: _().BroadcastPlayerContainer,
                                children: (0, _.jsx)(_._, {
                                  children: (0, _.jsx)(_.default, {
                                    steamIDBroadcast: _,
                                    watchLocation: _,
                                    bStartMuted: _,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      Boolean(!_.Get().BShowOnlyVideo()) &&
                        (0, _.jsx)("div", {
                          className: _().detail_chat_ctn,
                          children: (0, _.jsx)("div", {
                            className: _().ChatContainer,
                            children: (0, _.jsx)(_._, {
                              children: (0, _.jsx)(_._, {
                                emoticonStore: _._,
                                watchLocation: _._._,
                                steamID: _,
                                broadcastID: _ ? _.m_ulBroadcastID : void 0,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  Boolean(!_.Get().BShowInIframe()) &&
                    (0, _.jsx)(_, {
                      broadcasterSteamID: _,
                      broadcastInfo: _,
                    }),
                ],
              }),
            })
          : null;
      });
      function _(_) {
        return 0 != _ && _ != _._;
      }
      const _ = (0, _._)((_) => {
          const { broadcasterSteamID: _, broadcastInfo: _ } = _,
            [_, _] = (0, _.useState)(null);
          let _ = _.m_nAppID;
          return (
            (0, _.useEffect)(() => {
              _(_) &&
                (async () => {
                  let _ = await _._.LoadOGGClanInfoForAppID(_);
                  _(_);
                })();
            }, [_]),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  broadcasterSteamID: _,
                }),
                (0, _.jsx)(_, {
                  steamid: _,
                }),
                Boolean(_._.is_support) &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)(_, {
                        broadcastSteamID: _,
                      }),
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().ValveOnlyBackground,
                          _.DebugCtn,
                        ),
                        children: (0, _.jsx)(_, {}),
                      }),
                    ],
                  }),
                _(_) &&
                  (0, _.jsxs)("div", {
                    className: _.GameInfoCtn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.GameAboutTitleCtn,
                        children: [
                          (0, _.jsxs)("div", {
                            className: _.GameAboutTitle,
                            children: [
                              " ",
                              (0, _._)("#Broadcast_About_Game"),
                              " ",
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: _().EventSectionSpacer,
                            children: " ",
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _.GameInfo,
                        children: (0, _.jsx)(_._, {
                          _: Number.parseInt(_.m_strAppId),
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                    ],
                  }),
                Boolean(_) &&
                  (0, _.jsx)("div", {
                    className: _.RelatedEvents,
                    children: (0, _.jsx)(_._, {
                      clanAccountID: _.clanAccountID,
                      trackingLocation: _._._,
                      partnerEventStore: _._,
                      bViewAllShowInfiniteScroll: !0,
                    }),
                  }),
              ],
            })
          );
        }),
        _ = (0, _._)((_) => {
          const _ = (0, _.useRef)(null);
          let _ = _._.GetOrCreateBroadcastInfo(
            _.steamid.ConvertTo64BitString(),
          );
          const [_, _] = (0, _.useState)(_.m_strTitle),
            [_, _] = (0, _.useState)(""),
            [_, _] = (0, _.useState)(null);
          if (
            ((0, _.useEffect)(
              () => (
                _(_.m_strTitle),
                () => {
                  _.current && _.current("BroadcastControls: unmounting");
                }
              ),
              [_.m_strTitle],
            ),
            _._.accountid != _.steamid.GetAccountID())
          )
            return null;
          return (0, _.jsxs)("div", {
            className: _.ControlCtn,
            children: [
              (0, _.jsx)("div", {
                className: _.ControlsTitle,
                children: (0, _._)("#Broadcaster_Control_title"),
              }),
              (0, _.jsxs)("div", {
                className: _.TitleInput,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.Options,
                    children: [
                      (0, _.jsx)(_._, {
                        type: "text",
                        label: (0, _._)("#Broadcast_title_title"),
                        onChange: (_) => _(_.currentTarget.value || ""),
                        placeholder: (0, _._)("#Broadcast_title_placeholder"),
                        value: _,
                      }),
                      (0, _.jsx)(_._, {
                        type: "text",
                        label: (0, _._)("#Broadcast_Control_matchid"),
                        onChange: (_) => _(_.currentTarget.value || ""),
                        value: _,
                      }),
                      (0, _.jsxs)(_._, {
                        onClick: async () => {
                          _.current && _.current();
                          const _ = _().CancelToken.source();
                          _.current = _.cancel;
                          let _ = await _.Get().UpdateBroadcastSettings(
                            _,
                            _,
                            _,
                          );
                          _.token.reason ||
                            _(
                              (0, _._)(
                                _
                                  ? "#Broadcast_Control_Success"
                                  : "#Broadcast_Control_Failure",
                              ),
                            );
                        },
                        children: [
                          (0, _._)("#Broadcast_save_changes"),
                          (0, _.jsx)(_._, {
                            tooltip: (0, _._)("#Broadcast_save_title_ttip"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.StopCtn,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: (_) => {
                          (0, _._)(
                            (0, _.jsx)(_._, {
                              strTitle: (0, _._)(
                                "#Broadcast_Control_StopBroadcast",
                              ),
                              strDescription: (0, _._)(
                                "#EventEditor_GenericAreYouSure",
                              ),
                              onOK: async () => {
                                _.current && _.current();
                                const _ = _().CancelToken.source();
                                _.current = _.cancel;
                                let _ = await _.Get().StopBroadcast(_);
                                _.token.reason ||
                                  _(
                                    (0, _._)(
                                      _
                                        ? "#Broadcast_Control_StopSuccess"
                                        : "#Broadcast_Control_StopFailure",
                                    ),
                                  );
                              },
                            }),
                            (0, _._)(_),
                          );
                        },
                        children: (0, _._)("#Broadcast_Control_StopBroadcast"),
                      }),
                      Boolean(_) &&
                        (0, _.jsx)("div", {
                          children: _,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      var _ = __webpack_require__("chunkid");
      let _ = {
        BroadcastWatch: (_) => `/broadcast/(watch|watchnew)/${_}`,
      };
      function _(_) {
        const [_, _] = _.useState(!0);
        return (
          (0, _.useEffect)(() => {
            _ && _._.InitGlobal().then(() => __webpack_require__(!1));
          }, [_]),
          _
            ? (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
                position: "center",
                size: "medium",
              })
            : (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      path: _.BroadcastWatch(":steamid_or_user_vanity"),
                      render: (_) =>
                        (0, _.jsx)(_, {
                          strSteamID: _.match.params.steamid_or_user_vanity,
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      component: _._,
                    }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
