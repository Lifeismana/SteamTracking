/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2694],
    {
      6600: (rt, Q, f) => {
        f.d(Q, { td: () => N });
        var E = f(14947),
          O = f(3166),
          h = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          q = (g, o, l) =>
            o in g
              ? h(g, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (g[o] = l),
          M = (g, o, l, c) => {
            for (
              var p = c > 1 ? void 0 : c ? v(o, l) : o, b = g.length - 1, I;
              b >= 0;
              b--
            )
              (I = g[b]) && (p = (c ? I(o, l, p) : I(p)) || p);
            return c && p && h(o, l, p), p;
          },
          H = (g, o, l) => q(g, typeof o != "symbol" ? o + "" : o, l);
        const K = O.TS.CHAT_BASE_URL + "public/images/broadcast/ti9_30x30.png",
          Y = O.TS.CHAT_BASE_URL + "public/images/broadcast/yule_30x30.png";
        class w {
          constructor(o) {
            H(this, "bValid", !1),
              H(this, "stream", { 0: "#Broadcast_EnglishMain" }),
              H(this, "name", ""),
              H(this, "appName", ""),
              H(this, "appID", 0),
              H(this, "link", ""),
              H(this, "linkName", ""),
              H(this, "tabIcon", ""),
              H(this, "offlineImage", ""),
              H(this, "gidEvent", ""),
              (0, E.Gn)(this),
              this.init(o);
          }
          init(o) {
            var l, c, p;
            (this.bValid = o.bValid),
              (this.stream = o.stream),
              (this.name = o.name),
              (this.appName = (l = o.appName) != null ? l : ""),
              (this.appID = o.appID),
              (this.link = o.link),
              (this.linkName = o.linkName),
              (this.tabIcon = (c = o.tabIcon) != null ? c : ""),
              (this.offlineImage = o.offlineImage),
              (this.gidEvent = (p = o.gidEvent) != null ? p : "");
          }
        }
        M([E.sH], w.prototype, "bValid", 2),
          M([E.sH], w.prototype, "stream", 2),
          M([E.sH], w.prototype, "name", 2),
          M([E.sH], w.prototype, "appName", 2),
          M([E.sH], w.prototype, "appID", 2),
          M([E.sH], w.prototype, "link", 2),
          M([E.sH], w.prototype, "linkName", 2),
          M([E.sH], w.prototype, "tabIcon", 2),
          M([E.sH], w.prototype, "offlineImage", 2),
          M([E.sH], w.prototype, "gidEvent", 2);
        let N = new w({
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
        function V(g) {
          (g == "76561198888084799" || g == "76561198910244427") &&
            N.init({
              bValid: !0,
              stream: {
                "76561198888084799": "#Broadcast_Stream1",
                "76561198910244427": "#Broadcast_Stream2",
              },
              name: "Cologne Major 2026",
              appID: 730,
              link: "https://store.steampowered.com/app/730/CounterStrike_2/",
              linkName: "Counter-Strike 2 on Steam",
              tabIcon:
                Config.CHAT_BASE_URL +
                "public/images/broadcast/cs2_major2026_cologne_icon.png",
              offlineImage: "public/images/broadcast/cs2_major2026_cologne.png",
            }),
            g == "76561197960266962" &&
              N.init({
                bValid: !0,
                stream: {},
                appName: "Winter Sale 2019",
                name: "Yule Log",
                appID: 0,
                link: "https://store.steampowered.com/",
                linkName: "View Sale Info Here!",
                tabIcon: Y,
                offlineImage: "public/images/broadcast/winter_sale_2019.png",
              });
        }
      },
      90828: (rt, Q, f) => {
        f.d(Q, { J8: () => h, X8: () => O });
        var E = ((v) => (
            (v[(v.Hover = 0)] = "Hover"),
            (v[(v.ClickPopup = 1)] = "ClickPopup"),
            (v[(v.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion"),
            v
          ))(E || {}),
          O = ((v) => (
            (v[(v.Chat = 0)] = "Chat"),
            (v[(v.Notification = 1)] = "Notification"),
            (v[(v.Error = 2)] = "Error"),
            v
          ))(O || {});
        class h {}
      },
      25317: (rt, Q, f) => {
        f.d(Q, {
          M5: () => G,
          MU: () => F,
          MX: () => lt,
          Rt: () => j,
          U7: () => nt,
          fn: () => R,
          j: () => ot,
        });
        var E = f(10142),
          O = f(41735),
          h = f.n(O),
          v = f(14947),
          q = f(72604),
          M = f(76559),
          H = f(61639),
          K = f(74498),
          Y = f(7582),
          w = f(28462),
          N = f(34592),
          V = f(3166),
          g = f(34032),
          o = Object.defineProperty,
          l = Object.getOwnPropertyDescriptor,
          c = (P, a, i) =>
            a in P
              ? o(P, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (P[a] = i),
          p = (P, a, i, d) => {
            for (
              var _ = d > 1 ? void 0 : d ? l(a, i) : a, y = P.length - 1, B;
              y >= 0;
              y--
            )
              (B = P[y]) && (_ = (d ? B(a, i, _) : B(_)) || _);
            return d && _ && o(a, i, _), _;
          },
          b = (P, a, i) => c(P, typeof a != "symbol" ? a + "" : a, i);
        let I = !1;
        function R(P) {
          return !!(P && P.thumbnail_http_address);
        }
        function G(P, a) {
          if (a || P) {
            const i = a || P;
            return !!(i && ot.Get().BIsAppStreaming(i));
          }
          return !1;
        }
        const L = class at {
          constructor() {
            b(this, "m_inFlightRequests", new Map()),
              b(this, "m_lookupKeyToEmbedStreamDef", new Map()),
              b(this, "m_lookupStreams", new Map()),
              b(this, "m_playReadyStream", new Map()),
              b(this, "m_bMapHasStartedVideo", new Map()),
              b(this, "m_mapBroadcastChecked", new Map()),
              b(this, "m_pageChatStatus", "hide"),
              b(this, "m_streamChatStatus", "hide"),
              b(this, "m_bUserChatExpanded"),
              b(this, "m_bUserPreferenceHideBroadcastByDefault"),
              b(this, "m_bCollapsed"),
              b(this, "m_setStreamChangedListeners", new Set()),
              b(this, "m_bUseFakeData", !1),
              b(this, "m_onLoadContextCall", new Map()),
              (0, v.Gn)(this);
          }
          BHasStreams(a) {
            const i = this.GetStreams(a);
            return !!(i && i.length > 0);
          }
          AddCallbackOnNewContext(a, i, d) {
            this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(a), {
              name: i,
              fnCallback: d,
            });
          }
          ClearCallbackOnNewContext(a) {
            this.m_onLoadContextCall.set(
              this.GetStreamsLookupKeyFromDef(a),
              null,
            );
          }
          GetPlayReadyStream(a) {
            let i = this.GetStreamsLookupKeyFromDef(a);
            return this.m_playReadyStream.get(i);
          }
          BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
            return !!this.m_bUserPreferenceHideBroadcastByDefault;
          }
          BIsEmbeddedStreamCollapsed() {
            return !!this.m_bCollapsed;
          }
          SetEmbeddedStreamCollapsed(a) {
            this.m_bCollapsed != a && (this.m_bCollapsed = a);
          }
          GetConcurrentStreams(a) {
            const i = this.GetStreams(a);
            return i ? i.filter((d) => R(d)).length : 0;
          }
          GetChatVisibility() {
            return this.m_pageChatStatus === "remove" ||
              this.m_streamChatStatus === "remove"
              ? "remove"
              : this.m_bUserChatExpanded !== void 0
                ? this.m_bUserChatExpanded
                  ? "show"
                  : "hide"
                : this.m_pageChatStatus === "show"
                  ? "show"
                  : this.m_pageChatStatus === "hide" ||
                      this.m_streamChatStatus === "hide"
                    ? "hide"
                    : "show";
          }
          ToggleChatVisibility() {
            const a = this.GetChatVisibility();
            a !== "remove" && (this.m_bUserChatExpanded = a === "hide");
          }
          DebugDumpContextAndAvailableContext(a) {
            console.log(
              "Requested context",
              this.GetStreamsLookupKeyFromDef(a),
            ),
              console.log(
                "Available context count: ",
                this.m_lookupStreams.size,
              ),
              this.m_lookupStreams.forEach((i, d) => {
                console.log(d, i.length);
              });
          }
          GetStreams(a) {
            const i = this.GetStreamsLookupKeyFromDef(a);
            return this.m_lookupStreams.get(i);
          }
          GetBroadcastURL(a) {
            let i = null;
            return (
              a.steamid
                ? (i = new M.b(a.steamid))
                : (i = M.b.InitFromAccountID(a.accountid)),
              V.TS.COMMUNITY_BASE_URL +
                "broadcast/watch/" +
                i.ConvertTo64BitString()
            );
          }
          BIsAppStreaming(a) {
            let i = !1;
            return (
              this.m_lookupStreams.forEach((d) => {
                i ||
                  (i =
                    !!d &&
                    d.some(
                      (_) =>
                        K.es.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === a,
                    ));
              }),
              i
            );
          }
          GetStreamsForAppID(a) {
            const i = new Array();
            return (
              this.m_lookupStreams.forEach((d) => {
                d == null ||
                  d.forEach((_) => {
                    K.es.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === a &&
                      i.push(_);
                  });
              }),
              i
            );
          }
          AddStreamChangedListener(a) {
            this.m_setStreamChangedListeners.add(a);
          }
          RemoveStreamChangedListener(a) {
            this.m_setStreamChangedListeners.delete(a);
          }
          async LoadBIsEmbeddedBroadcastHidden(a) {
            if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
              let i = (0, V.Tc)("broadcastuser", "application_config");
              if (!i)
                try {
                  let d =
                    V.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences";
                  i = (await h().get(d, { params: {}, cancelToken: a.token }))
                    .data;
                } catch (d) {
                  console.log(
                    "LoadBIsEmbeddedBroadcastHidden: " +
                      (0, N.H)(d).strErrorMsg,
                  ),
                    (i = { bHideStoreBroadcast: !1 });
                }
              (0, v.h5)(() => {
                (this.m_bUserPreferenceHideBroadcastByDefault =
                  i.bHideStoreBroadcast),
                  (this.m_bCollapsed = i.bHideStoreBroadcast);
              });
            }
            return this.m_bUserPreferenceHideBroadcastByDefault;
          }
          async SetupEmbeddableVOD(a, i) {
            (this.m_bUseFakeData = !1),
              (this.m_streamChatStatus = "remove"),
              await E.A.Get().QueueAppRequest(a.nAppIDVOD, {
                include_assets: !0,
                include_trailers: !0,
              });
            const d = E.A.Get().GetApp(a.nAppIDVOD),
              _ = new g.TT();
            if (
              ((_.accountid = 0),
              (_.nAppIDVOD = a.nAppIDVOD),
              (_.default_selection_priority = g.mY.k_ePrimary),
              (_.current_selection_priority = g.mY.k_ePrimary),
              (_.thumbnail_http_address =
                (d == null ? void 0 : d.GetAssets().GetHeaderURL()) || ""),
              (_.title = (d == null ? void 0 : d.GetName()) || ""),
              this.GetStreams(a).unshift(_),
              i)
            ) {
              const y = this.GetStreamsLookupKeyFromDef(a);
              this.m_playReadyStream.set(y, _);
            }
          }
          async HintLoadEmbeddablePreviewStreams(a) {
            let i = null,
              d = {
                eventid: a.event ? a.event.GID : void 0,
                previewAccounts:
                  a.bIsPreview && a.accountIDs
                    ? a.accountIDs.slice().sort().join(",")
                    : void 0,
              };
            try {
              return (
                (i = await h().get(
                  V.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                  { params: d },
                )),
                this.HandleHintLoadBroadcastResponse(a, i.data)
              );
            } catch (_) {
              let y = (0, N.H)(_);
              console.error(
                "HintLoadEmbeddablePreviewStreams hit error loading: " +
                  y.strErrorMsg,
                y,
              );
            }
            return [];
          }
          async HintLoadEmbeddableStreams(a) {
            let i = this.MapEmbeddableStreamToRequest(a),
              d = this.GetStreamsLookupKeyFromParam(i);
            if (!this.m_inFlightRequests.has(d)) {
              this.m_lookupKeyToEmbedStreamDef.set(d, a);
              const _ = this.InternalHintLoadEmbeddableStreams(a, i);
              this.m_inFlightRequests.set(d, _);
            }
            return this.m_inFlightRequests.get(d);
          }
          async InternalHintLoadEmbeddableStreams(a, i) {
            let d = (0, V.Tc)(
              "broadcast_available_for_page",
              "application_config",
            );
            if ((0, g.h7)(d)) return this.HandleHintLoadBroadcastResponse(a, d);
            try {
              let _ = null;
              return (
                (_ = await h().get(
                  V.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                  { params: i },
                )),
                this.HandleHintLoadBroadcastResponse(a, _.data)
              );
            } catch (_) {
              let y = (0, N.H)(_);
              console.error(
                "HintLoadEmbeddableStreams hit error loading: " + y.strErrorMsg,
                y,
              );
            }
            return [];
          }
          async HandleHintLoadBroadcastResponse(a, i) {
            var d;
            (this.m_bUseFakeData = !1),
              a.bIsPreview &&
                (((d = i == null ? void 0 : i.filtered) == null
                  ? void 0
                  : d.length) > 0
                  ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                      a.event,
                      i.filtered,
                    )
                  : ((i = {
                      filtered: [{}],
                      success: 1,
                      total_count: 1,
                      err_msg: "",
                      broadcast_chat_visibility: "hide",
                    }),
                    (this.m_bUseFakeData = !0))),
              i.broadcast_chat_visibility &&
                (this.m_pageChatStatus = i.broadcast_chat_visibility);
            const _ = new Array();
            (0, v.h5)(() => {
              i.filtered.forEach((A) => {
                if (!A.steamid) {
                  const mt = M.b.InitFromAccountID(A.accountid);
                  A.steamid = mt.ConvertTo64BitString();
                }
                const U = K.es.GetOrCreateBroadcastInfo(A.steamid),
                  z = A.appid ? Number(A.appid) : K.fO;
                (U.m_nAppID = z),
                  (U.m_strAppId = "" + z),
                  A.current_selection_priority === void 0 &&
                    (A.current_selection_priority =
                      A.default_selection_priority),
                  z != K.fO && _.push(z);
              });
            });
            const y = this.GetStreamsLookupKeyFromDef(a);
            if (
              (this.m_lookupStreams.set(y, i.filtered),
              this.m_onLoadContextCall.has(y))
            ) {
              const A = this.m_onLoadContextCall.get(y);
              A && A.fnCallback();
            }
            const B = this.GetStreams(a);
            return await this.AutoStartVideoStream(a, B), B;
          }
          ExtractBroadcastPrioritiesFromPartnerEventForPreview(a, i) {
            var d, _;
            const y = Array.from(
                (d = a.jsondata.broadcast_whitelist) != null ? d : [],
              ),
              B = Array.from(
                (_ = a.jsondata.broadcast_priority) != null ? _ : [],
              ),
              A = new Map();
            for (let U = 0; U < y.length && !(U >= B.length); U++)
              A.set(y[U], (0, g.PH)(B[U]));
            i.forEach((U) => {
              const z = Number(U.accountid);
              A.has(z) && (U.current_selection_priority = A.get(z));
            });
          }
          async AutoStartVideoStream(a, i) {
            let d = this.GetStreamsLookupKeyFromDef(a);
            if (this.m_bMapHasStartedVideo.get(d)) return null;
            if (this.m_bUseFakeData) {
              if (!this.m_playReadyStream.get(d)) {
                const _ = {
                  accountid: 0,
                  thumbnail_http_address: "",
                  default_selection_priority: g.mY.k_eGeneral,
                  current_selection_priority: g.mY.k_eGeneral,
                };
                this.m_playReadyStream.set(d, _);
              }
              return this.m_playReadyStream;
            }
            return this.PlayFromAvailableStreams(a, i);
          }
          async PlayFromAvailableStreams(a, i, d = !1) {
            const _ = new Set();
            for (;;) {
              const y = i.filter((U) => !_.has(U) && (!d || !U.nAppIDVOD)),
                B = this.GetAutoStartStream(y);
              if (!B) return null;
              if (await this.AttemptToPlayStream(a, B)) return B;
              _.add(B);
            }
          }
          async AttemptToPlayStream(a, i) {
            let d = this.GetStreamsLookupKeyFromDef(a);
            if (
              (this.m_bMapHasStartedVideo.set(d, !0),
              this.m_mapBroadcastChecked.has(i.accountid) ||
                this.m_mapBroadcastChecked.set(
                  i.accountid,
                  this.InternalAttemptToPlayStream(a, i),
                ),
              i.nAppIDVOD)
            )
              this.m_playReadyStream.set(d, i);
            else {
              const _ = await this.m_mapBroadcastChecked.get(i.accountid);
              if ((_ == null ? void 0 : _.success) == q.R) {
                (i.steamid = _.steamid),
                  this.m_playReadyStream.set(d, i),
                  this.GetConcurrentStreams(a) > 1
                    ? (this.m_streamChatStatus = "hide")
                    : (this.m_streamChatStatus = i.broadcast_chat_visibility),
                  this.m_setStreamChangedListeners.forEach((B) => B(i));
                const y = K.es.GetOrCreateBroadcastInfo(i.steamid).m_nAppID;
                nt(y, H.Mc.iy, i.snr);
              } else return null;
            }
            return i;
          }
          async InternalAttemptToPlayStream(a, i) {
            let d = this.GetStreamsLookupKeyFromDef(a),
              _ = null;
            try {
              const y = V.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
              let B = {
                broadcastaccountid: i.accountid,
                viewer_token: K.es.GetViewerToken(),
                origin: self.origin,
              };
              return (_ = await h().get(y, { params: B })), _.data;
            } catch (y) {
              let B = (0, N.H)(y);
              console.error(
                "Broadcast.AttemptToPlayStream: " + B.strErrorMsg,
                B,
              );
            }
            return null;
          }
          GetAutoStartStream(a) {
            if (!a) return null;
            const i = a.filter((B) => R(B)),
              d = i.reduce((B, A) => Math.max(B, j(A)), 0),
              _ = i.filter((B) => j(B) === d);
            if (_.length === 0) return null;
            const y = Math.floor(Math.random() * _.length);
            return _[y];
          }
          MapEmbeddableStreamToRequest(a) {
            var i, d, _;
            return {
              appid: a.appid,
              promotionName: a.bIsPreview ? "preview" : a.promotionName,
              clanid: a.clanid
                ? a.clanid
                : a.event
                  ? a.event.clanSteamID.GetAccountID()
                  : void 0,
              listid: a.listid,
              subid: a.subid,
              bundleid: a.bundleid,
              eventid: a.event ? a.event.GID : void 0,
              previewAccounts:
                a.bIsPreview && a.accountIDs
                  ? a.accountIDs.slice().sort().join(",")
                  : void 0,
              test: I,
              cc: V.TS.COUNTRY,
              l: V.TS.LANGUAGE,
              hubtype: (i = a.event) == null ? void 0 : i.GetContentHubType(),
              hubcategory:
                (d = a.event) == null ? void 0 : d.GetContentHubCategory(),
              hubtagid: (_ = a.event) == null ? void 0 : _.GetContentHubTag(),
              tabuniqueid: a.tabuniqueid,
              tabfilter: a.tabfilter,
              rt_now_override_test: Y.HD.BHasTimeOverride()
                ? Y.HD.GetTimeNowWithOverride()
                : void 0,
            };
          }
          GetStreamsLookupKeyFromDef(a) {
            return this.GetStreamsLookupKeyFromParam(
              this.MapEmbeddableStreamToRequest(a),
            );
          }
          GetStreamsLookupKeyFromParam(a) {
            return JSON.stringify(a);
          }
          static Get() {
            return (
              at.s_GlobalStore ||
                ((at.s_GlobalStore = new at()), at.s_GlobalStore.Init()),
              at.s_GlobalStore
            );
          }
          Init() {}
        };
        b(L, "s_GlobalStore"),
          p([v.sH], L.prototype, "m_lookupStreams", 2),
          p([v.sH], L.prototype, "m_playReadyStream", 2),
          p([v.sH], L.prototype, "m_pageChatStatus", 2),
          p([v.sH], L.prototype, "m_streamChatStatus", 2),
          p([v.sH], L.prototype, "m_bUserChatExpanded", 2),
          p([v.sH], L.prototype, "m_bUserPreferenceHideBroadcastByDefault", 2),
          p([v.sH], L.prototype, "m_bCollapsed", 2),
          p([v.XI], L.prototype, "HintLoadEmbeddablePreviewStreams", 1),
          p([v.XI], L.prototype, "AttemptToPlayStream", 1);
        let ot = L;
        function j(P) {
          return P.current_selection_priority || g.mY.k_eGeneral;
        }
        function F(P) {
          P.sort((a, i) =>
            j(a) != j(i)
              ? j(i) - j(a)
              : a.viewer_count != i.viewer_count
                ? i.viewer_count - a.viewer_count
                : i.accountid - a.accountid,
          );
        }
        async function nt(P, a, i) {
          if (P > 0 && P != 7 && i) {
            let d = new URLSearchParams();
            d.append("page_action", "" + a),
              d.append("snr", i),
              h().post(
                V.TS.STORE_BASE_URL + "ajaxreportproductaction/" + P + "/",
                d,
              );
          }
        }
        const lt = new w.T();
      },
      18614: (rt, Q, f) => {
        f.d(Q, { l: () => V, m: () => N });
        var E = f(14947),
          O = f(76559),
          h = f(7582),
          v = f(77495),
          q = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          H = (g, o, l) =>
            o in g
              ? q(g, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (g[o] = l),
          K = (g, o, l, c) => {
            for (
              var p = c > 1 ? void 0 : c ? M(o, l) : o, b = g.length - 1, I;
              b >= 0;
              b--
            )
              (I = g[b]) && (p = (c ? I(o, l, p) : I(p)) || p);
            return c && p && q(o, l, p), p;
          },
          Y = (g, o, l) => H(g, typeof o != "symbol" ? o + "" : o, l);
        const w = class J {
          constructor() {
            Y(this, "m_mapBroadcasterSteamIDToEvents", new Map()),
              Y(this, "m_mapBroadcasterSteamIDData", new Map()),
              (0, E.Gn)(this);
          }
          static GetBBCodeParam(o, l, c = "") {
            const b = new RegExp(`\\W${l}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(o);
            return b ? b[1] : c;
          }
          static ParseCalendarEventPresentersFromText(o) {
            const l =
                /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
              c = new Array();
            for (;;) {
              const p = l.exec(o);
              if (p === null) break;
              const b = p[1],
                I = p[2],
                R = J.GetBBCodeParam(b, "steamid"),
                G = {
                  steamID: R ? new O.b(R) : void 0,
                  name: J.GetBBCodeParam(b, "name"),
                  title: J.GetBBCodeParam(b, "title"),
                  company: J.GetBBCodeParam(b, "company"),
                  photo: J.GetBBCodeParam(b, "photo"),
                  bio: I,
                };
              c.push(G);
            }
            return c;
          }
          static ParseEventModelPresenters(o, l) {
            const c = o.GetDescriptionWithFallback(l);
            return J.ParseCalendarEventPresentersFromText(c);
          }
          static ParseEventAppReferencesFromText(o) {
            const l = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
              c = new Set();
            for (;;) {
              const p = l.exec(o);
              if (p === null) break;
              const b = p[1];
              c.add(Number(b));
            }
            return c;
          }
          static ParseEventModelAppReferences(o, l) {
            var c;
            const p = o.GetDescriptionWithFallback(l),
              b = J.ParseEventAppReferencesFromText(p);
            if ((c = o.jsondata) != null && c.referenced_appids)
              for (const I of o.jsondata.referenced_appids) b.add(I);
            return b;
          }
          async BuildBroadcasterSteamIDToActiveEventMap(o) {
            const l = h.HD.GetTimeNowWithOverride(),
              p = o.GetCalendarItemsInTimeRange(l - 3600, l);
            for (const G of p.rgCalendarItems)
              v.O3.QueueLoadPartnerEvent(G.clanid, G.unique_id);
            const b = p.rgCalendarItems.map((G) =>
                v.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  O.b.InitFromClanID(G.clanid),
                  G.unique_id,
                  0,
                ),
              ),
              I = await Promise.all(b),
              R = new Map();
            for (const G of I)
              if (G && !(G.endTime && G.endTime < l))
                for (const L of G.GetBroadcastWhitelistAsSteamIDs())
                  R.has(L) ? R.get(L).push(G) : R.set(L, [G]);
            return R;
          }
          IsBroadcasterAlreadyBound(o, l) {
            const c = this.m_mapBroadcasterSteamIDToEvents.get(o),
              p = c ? c.length : 0;
            if ((l ? l.length : 0) != p) return !1;
            for (let I = 0; I < p; I++) if (c[I] != l[I].GID) return !1;
            return !0;
          }
          static BuildSteamIDToPresenterMapFromEventList(o, l) {
            let c = new Map();
            for (const p of o) {
              if (!p) continue;
              const b = J.ParseEventModelPresenters(p, l);
              for (const I of b)
                I.steamID && c.set(I.steamID.ConvertTo64BitString(), I);
            }
            return c;
          }
          RemoveCachedDataIfNotInMap(o) {
            const l = new Array();
            this.m_mapBroadcasterSteamIDToEvents.forEach((c, p) => {
              o.has(p) || l.push(p);
            }),
              l.forEach((c) => {
                this.m_mapBroadcasterSteamIDData.delete(c),
                  this.m_mapBroadcasterSteamIDToEvents.delete(c);
              });
          }
          static BuildAppIDRefsForEventList(o, l) {
            const c = new Set();
            for (const p of o)
              J.ParseEventModelAppReferences(p, l).forEach((I) => c.add(I));
            return Array.from(c);
          }
          UpdateCachedDataFromEvents(o, l) {
            o.forEach((c, p) => {
              if (this.IsBroadcasterAlreadyBound(p, c)) return;
              const b = {
                m_mapPresenters: J.BuildSteamIDToPresenterMapFromEventList(
                  c,
                  l,
                ),
                m_rgAppIDs: J.BuildAppIDRefsForEventList(c, l),
              };
              this.m_mapBroadcasterSteamIDData.set(p, b),
                this.m_mapBroadcasterSteamIDToEvents.set(
                  p,
                  c.map((I) => I.GID),
                );
            });
          }
          async SynchronizeEventsWithBroadcasts(o, l) {
            const c = await this.BuildBroadcasterSteamIDToActiveEventMap(o);
            this.RemoveCachedDataIfNotInMap(c),
              this.UpdateCachedDataFromEvents(c, l);
          }
          GetPresenterMapForBroadcasterSteamID(o) {
            var l;
            return (l = this.m_mapBroadcasterSteamIDData.get(o)) == null
              ? void 0
              : l.m_mapPresenters;
          }
          GetAppIDListForBroadcasterSteamID(o) {
            var l;
            return (l = this.m_mapBroadcasterSteamIDData.get(o)) == null
              ? void 0
              : l.m_rgAppIDs;
          }
        };
        K([E.sH], w.prototype, "m_mapBroadcasterSteamIDData", 2);
        let N = w;
        const V = new N();
      },
      74498: (rt, Q, f) => {
        f.d(Q, { es: () => W, fK: () => _t, a0: () => St, fO: () => dt });
        var E = f(41735),
          O = f.n(E),
          h = f(14947),
          v = f(6600),
          q = f(90828),
          M = Object.defineProperty,
          H = (u, t, e) =>
            t in u
              ? M(u, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                })
              : (u[t] = e),
          K = (u, t, e) => H(u, typeof t != "symbol" ? t + "" : t, e);
        function Y(u, t, e) {
          return [u, t, e];
        }
        class w extends Error {}
        class N extends q.J8 {
          constructor(t) {
            super(), K(this, "m_appid"), (this.m_appid = t || 0);
          }
          GetAppID() {
            return this.m_appid;
          }
          parseColor(t) {
            if (typeof t != "string" || !t.match(/^#[0-9a-fA-F]{6}$/))
              throw new w("expected color string");
            return [
              parseInt(t.substring(1, 3), 16),
              parseInt(t.substring(3, 5), 16),
              parseInt(t.substring(5, 7), 16),
            ];
          }
          parseString(t) {
            if (typeof t == "string") return t;
            throw new w("expected string");
          }
          parseNumber(t) {
            if (typeof t == "number") return t;
            throw new w("expected number");
          }
          parseDate(t) {
            if (typeof t == "number") return new Date(t);
            throw new w("expected timestamp");
          }
          parseArray(t, e) {
            let s = [];
            if (typeof t != "object" || !Array.isArray(t))
              throw new w("expected array");
            let r = t.length;
            for (let n = 0; n < r; ++n)
              try {
                s.push(e(t[n]));
              } catch (S) {
                throw (
                  ((S.message +=
                    `
...while parsing array element ` + n),
                  S)
                );
              }
            return s;
          }
          parseDict(t, e) {
            let s = new Map();
            if (typeof t != "object" || Array.isArray(t))
              throw new w("expected object");
            for (let r in t)
              try {
                s.set(r, e(t[r]));
              } catch (n) {
                throw (
                  ((n.message +=
                    `
...while parsing dictionary element ` + r),
                  n)
                );
              }
            return s;
          }
          parseBracket(t) {
            let e = {
              name: this.parseString(t.name),
              start: this.parseDate(t.start),
              color: [255, 0, 255],
            };
            return (
              "params" in t &&
                (e.params = this.parseDict(
                  t.params,
                  this.parseString.bind(this),
                )),
              "end" in t && (e.end = this.parseDate(t.end)),
              "color" in t && (e.color = this.parseColor(t.color)),
              e
            );
          }
          parseMarker(t) {
            let e = { time: this.parseDate(t.time), color: [0, 255, 255] };
            return (
              "name" in t && (e.name = this.parseString(t.name)),
              "params" in t &&
                (e.params = this.parseDict(
                  t.params,
                  this.parseString.bind(this),
                )),
              "color" in t && (e.color = this.parseColor(t.color)),
              e
            );
          }
          parseSoundTrack(t) {
            let e = {};
            return (
              "song_title" in t &&
                (e.song_title = this.parseString(t.song_title)),
              "appid" in t && (e.appid = this.parseNumber(t.appid)),
              "song_index" in t &&
                (e.song_index = this.parseNumber(t.song_index)),
              e
            );
          }
          parseBroadcastGameData(t) {
            let e = { appid: 0, brackets: [], markers: [] };
            return (
              "appid" in t && (e.appid = this.parseNumber(t.appid)),
              "brackets" in t &&
                (e.brackets = this.parseArray(
                  t.brackets,
                  this.parseBracket.bind(this),
                )),
              "markers" in t &&
                (e.markers = this.parseArray(
                  t.markers,
                  this.parseMarker.bind(this),
                )),
              "soundtrack" in t &&
                (e.soundtrack = this.parseSoundTrack(t.soundtrack)),
              e
            );
          }
          convertTime(t, e) {
            return t - e / 1e3;
          }
          UpdateMarkers(t, e) {
            let s = [],
              r = [];
            for (const n of t)
              n.persistent
                ? (r.length > 0 &&
                    (r[r.length - 1].nTimeEnd = this.convertTime(
                      n.Timestamp,
                      e,
                    )),
                  n.name.length > 0 &&
                    r.push({
                      strTemplateName: n.name,
                      nTimeStart: this.convertTime(n.Timestamp, e),
                      nTimeEnd: -1,
                      color: Y(n.color_r, n.color_g, n.color_b),
                    }))
                : s.push({
                    strTemplateName: n.name,
                    nTime: this.convertTime(n.Timestamp, e),
                    color: Y(n.color_r, n.color_g, n.color_b),
                  });
            return { rgMarkers: s, rgSegments: r };
          }
          UpdateRegions(t) {
            let e = [];
            for (const s of t)
              e.push({
                strTemplateName: s.name,
                min: { x: s.min_x, y: s.min_y },
                max: { x: s.max_x, y: s.max_y },
                behavior: s.behavior,
              });
            return e;
          }
          UpdateSoundtrack(t, e) {}
        }
        var V = f(48937),
          g = f(89083),
          o = f(13854),
          l = f(3166),
          c = f(27066),
          p = f(7409),
          b = f(14043),
          I = f(8323),
          R = f(72604),
          G = Object.defineProperty,
          L = Object.getOwnPropertyDescriptor,
          ot = (u, t, e) =>
            t in u
              ? G(u, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                })
              : (u[t] = e),
          j = (u, t, e, s) => {
            for (
              var r = s > 1 ? void 0 : s ? L(t, e) : t, n = u.length - 1, S;
              n >= 0;
              n--
            )
              (S = u[n]) && (r = (s ? S(t, e, r) : S(r)) || r);
            return s && r && G(t, e, r), r;
          },
          F = (u, t, e) => ot(u, typeof t != "symbol" ? t + "" : t, e);
        const nt = 250,
          lt = 250;
        class P {
          constructor(t) {
            F(this, "m_elVideo"),
              F(this, "m_peerConnection", null),
              F(this, "m_strBroadcastSteamID", ""),
              F(this, "m_ulWebRTCSessionID", ""),
              F(this, "m_schCandidateTimer", new I.LU()),
              F(this, "m_nHostCandidateGeneration", 0),
              F(this, "m_nCandidateUpdateIntervalMS", 0),
              F(this, "m_listeners", new I.Ji()),
              F(this, "m_bFirstPlay", !0),
              F(this, "m_bStatsViewVisible", !1),
              F(this, "m_schCaptureDisplayStatsTrigger", new I.LU()),
              F(this, "m_stats", new p._L()),
              (0, h.Gn)(this),
              (this.m_elVideo = t);
          }
          async PlayMPD(t, e, s) {}
          async PlayWebRTC(t, e, s, r, n) {
            (this.m_strBroadcastSteamID = t),
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
            let S = { urls: ["stun:" + r] },
              C = { urls: ["turn:" + r], username: e, credential: s },
              k = { iceServers: [S, C], iceTransportPolicy: "relay" };
            const x = new RTCPeerConnection(k);
            (this.m_peerConnection = x),
              (x.oniceconnectionstatechange = ((X) => {
                this.m_peerConnection &&
                  (console.log(
                    "BroadcastWebRTC: ICE connection state changed to " +
                      this.m_peerConnection.iceConnectionState,
                  ),
                  this.m_peerConnection.iceConnectionState === "failed"
                    ? this.OnWebRTCConnectionFailed()
                    : this.m_peerConnection.iceConnectionState ===
                        "disconnected" && this.OnWebRTCConnectionRetry());
              }).bind(this)),
              (x.onicecandidate = ((X) => {
                if (X.candidate) {
                  const Z = new FormData();
                  Z.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    Z.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    Z.append("sdp_mid", String(X.candidate.sdpMid)),
                    Z.append(
                      "sdp_mline_index",
                      String(X.candidate.sdpMLineIndex),
                    ),
                    Z.append("candidate", X.candidate.candidate),
                    O()
                      .post(
                        `${l.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                        Z,
                      )
                      .then((tt) => {
                        const et = tt.data;
                        (et.success && et.success == R.R) ||
                          console.log(
                            "Failed to add a WebRTC session ICE candidate: " +
                              String(et.success),
                          );
                      })
                      .catch((tt) =>
                        console.log(
                          "Failed to add a WebRTC session ICE candidate" + tt,
                        ),
                      );
                }
              }).bind(this)),
              (x.ontrack = ((X) => {
                X.track.kind === "video" &&
                  ((this.m_elVideo.src = ""),
                  (this.m_elVideo.srcObject = X.streams[0]),
                  this.Play());
              }).bind(this)),
              x
                .setRemoteDescription({ type: "offer", sdp: n })
                .then(async () => {
                  var X, Z;
                  await x.setLocalDescription(await x.createAnswer());
                  const tt = new FormData();
                  tt.append("broadcaststeamid", this.m_strBroadcastSteamID),
                    tt.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                    tt.append(
                      "answer",
                      (Z = (X = x.localDescription) == null ? void 0 : X.sdp) !=
                        null
                        ? Z
                        : "",
                    );
                  try {
                    await O()
                      .post(
                        `${l.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                        tt,
                      )
                      .then((et) => {
                        const ht = et.data;
                        if (!(ht.success && ht.success == R.R))
                          throw new Error(String(ht.success));
                      });
                  } catch (et) {
                    console.log(
                      "Failed to set the WebRTC session answer: " + et,
                    ),
                      this.OnWebRTCConnectionRetry();
                    return;
                  }
                  (this.m_nCandidateUpdateIntervalMS = nt),
                    this.m_schCandidateTimer.Schedule(
                      this.m_nCandidateUpdateIntervalMS,
                      () => this.GetHostCandidates(),
                    );
                });
          }
          async GetHostCandidates() {
            const t = new FormData();
            t.append("broadcaststeamid", this.m_strBroadcastSteamID),
              t.append("webrtc_session_id", this.m_ulWebRTCSessionID),
              t.append(
                "candidate_generation",
                String(this.m_nHostCandidateGeneration),
              );
            try {
              await O()
                .post(
                  `${l.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                  t,
                )
                .then((e) => {
                  const s = e.data,
                    r = s.data,
                    n = this.m_peerConnection;
                  if (s.success && s.success == R.R)
                    n &&
                    r.candidate_generation > this.m_nHostCandidateGeneration
                      ? (r.candidates.forEach((S) => {
                          const C = new RTCIceCandidate({
                            sdpMid: S.sdp_mid,
                            sdpMLineIndex: S.sdp_mline_index,
                            candidate: S.candidate,
                          });
                          n.addIceCandidate(C).catch((k) => console.error(k));
                        }),
                        (this.m_nHostCandidateGeneration =
                          r.candidate_generation))
                      : this.m_nHostCandidateGeneration > 0 &&
                        (this.m_nCandidateUpdateIntervalMS *= 2);
                  else throw new Error(String(s.success));
                });
            } catch (e) {
              console.log("Failed to get WebRTC session ICE candidates" + e),
                this.OnWebRTCConnectionRetry();
              return;
            }
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            );
          }
          DispatchEvent(t, e = null) {
            let s = new CustomEvent(t, {
              cancelable: !0,
              bubbles: !0,
              detail: e,
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
              this.m_stats.GetFPSMonitor().Close(),
              (this.m_bFirstPlay = !0);
          }
          IsBuffering() {
            return !1;
          }
          GetCurrentPlayTime() {
            return 0;
          }
          GetLiveContentStartTime() {
            return new Date(0);
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
            const t = this.m_bFirstPlay;
            this.m_bFirstPlay = !1;
            let e = !1;
            const s = () => {
                (e = !0),
                  this.m_stats
                    .GetFPSMonitor()
                    .StartTracking(() =>
                      this.m_stats.ExtractFrameInfo(this.m_elVideo),
                    );
              },
              r = (S, C) => !1,
              n = (S, C) => !1;
            try {
              await this.m_elVideo.play(), s();
            } catch (S) {
              S.name === "NotAllowedError"
                ? r("Failed to play video, probably due to auto play policy", S)
                : n("Failed to play video", S);
            }
            !e && t && this.DispatchEvent("valve-userinputneeded");
          }
          Pause() {
            this.m_elVideo.pause();
          }
          CanSeek() {
            return !1;
          }
          SeekAndPlay(t) {
            return this.Play(), 0;
          }
          Seek(t) {
            return 0;
          }
          JumpTime(t) {
            return 0;
          }
          IsMuted() {
            return this.m_elVideo.muted;
          }
          SetMuted(t) {
            this.m_elVideo.muted = t;
          }
          SetVolume(t) {
            (t = o.OQ(t, 0, 1)), (this.m_elVideo.volume = t);
          }
          GetVolume() {
            return this.m_elVideo.volume;
          }
          GetDASHPlayerStats() {
            return this.m_stats;
          }
          SetStatsViewIsVisible(t) {
            t && !this.m_bStatsViewVisible
              ? (this.CaptureStatsForDisplay(),
                this.m_schCaptureDisplayStatsTrigger.Schedule(
                  lt,
                  this.CaptureStatsForDisplay,
                ))
              : !t &&
                this.m_bStatsViewVisible &&
                this.m_schCaptureDisplayStatsTrigger.Cancel(),
              (this.m_bStatsViewVisible = t);
          }
          CaptureStatsForDisplay() {
            this.m_stats.SetHTMLVideoPlayerDisplay(
              this.m_elVideo.videoWidth,
              this.m_elVideo.videoHeight,
              this.m_elVideo.clientWidth,
              this.m_elVideo.clientHeight,
            ),
              this.m_schCaptureDisplayStatsTrigger.Schedule(
                lt,
                this.CaptureStatsForDisplay,
              );
          }
          OnVideoPause(t) {
            this.m_stats.GetFPSMonitor().Close();
          }
          OnVideoResize(t) {
            this.m_stats.GetFPSMonitor().SetWindowResized();
          }
          GetVideoRepresentations() {
            let t = [];
            return t.push({ id: b.Y, displayName: "Auto", selected: !0 }), t;
          }
          SetVideoRepresentation(t) {}
          IsLiveContent() {
            return !0;
          }
          BHasTimedText() {
            return !1;
          }
        }
        j([c.o], P.prototype, "PlayWebRTC", 1),
          j([h.XI.bound], P.prototype, "CaptureStatsForDisplay", 1),
          j([c.o], P.prototype, "OnVideoPause", 1),
          j([c.o], P.prototype, "OnVideoResize", 1);
        var a = f(99412),
          i = f(90711),
          d = f(41635),
          _ = f(71742),
          y = f(18210),
          B = f(34592),
          A = f(30720),
          U = f(54326),
          z = f(44930),
          mt = Object.defineProperty,
          ft = Object.getOwnPropertyDescriptor,
          yt = (u, t, e) =>
            t in u
              ? mt(u, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                })
              : (u[t] = e),
          D = (u, t, e, s) => {
            for (
              var r = s > 1 ? void 0 : s ? ft(t, e) : t, n = u.length - 1, S;
              n >= 0;
              n--
            )
              (S = u[n]) && (r = (s ? S(t, e, r) : S(r)) || r);
            return s && r && mt(t, e, r), r;
          },
          m = (u, t, e) => yt(u, typeof t != "symbol" ? t + "" : t, e);
        const pt = 1800,
          bt = 1e3,
          Dt = 5 * 1e3,
          dt = 7;
        var _t = ((u) => (
          (u[(u.None = 0)] = "None"),
          (u[(u.Unlocking = 1)] = "Unlocking"),
          (u[(u.Loading = 2)] = "Loading"),
          (u[(u.Ready = 3)] = "Ready"),
          (u[(u.Error = 4)] = "Error"),
          u
        ))(_t || {});
        async function gt(u, t, e) {
          if (!t) return;
          let s = new FormData();
          s.append("steamid", u),
            s.append("broadcastid", t),
            s.append("viewertoken", e);
          try {
            await O().post(l.TS.CHAT_BASE_URL + "broadcast/stopwatching", s);
          } catch {}
        }
        class ct {
          constructor() {
            m(this, "m_rtUnlockTime", 0),
              m(this, "m_schUnlockTimeout", new I.LU()),
              m(this, "m_broadcast"),
              m(this, "m_video");
          }
          UnlockH264(t, e) {
            this.BCanUnlockH264()
              ? (t.SetState(1, ""),
                console.log("Unlocking H.264 for broadcast video playback"),
                this.RequestUnlockH264(),
                (this.m_broadcast = t),
                (this.m_video = e),
                (this.m_rtUnlockTime = Date.now()),
                this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                ))
              : t.SetState(4, (0, y.we)("#BroadcastWatch_MinBrowser"));
          }
          BCanUnlockH264() {
            return (0, z.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Client supports direct H.264 unlock"), !0)
              : (0, z.Dp)("BrowserView.PostMessageToParent")
                ? (console.log("Client supports browserview H.264 unlock"), !0)
                : (console.log("Client does not support H.264 unlock"), !1);
          }
          RequestUnlockH264() {
            (0, z.Dp)("RemotePlay.UnlockH264")
              ? (console.log("Requesting direct H.264 unlock"),
                SteamClient.RemotePlay.UnlockH264())
              : (0, z.Dp)("BrowserView.PostMessageToParent")
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
            if (this.m_broadcast.m_eWatchState != 1) return;
            if ((0, V.Mc)() || (0, V.aM)()) {
              console.log("Unlocking H.264 successful"),
                this.m_broadcast.SetState(0, ""),
                this.m_video.Restart();
              return;
            }
            Date.now() - this.m_rtUnlockTime > 6 * 1e3
              ? (console.log(
                  "Unlocking H.264 timed out (Steam client or servers offline?)",
                ),
                this.m_broadcast.SetState(
                  4,
                  (0, y.we)("#BroadcastWatch_MinBrowser"),
                ))
              : this.m_schUnlockTimeout.Schedule(100, () =>
                  this.CheckUnlockState(),
                );
          }
        }
        class st {
          constructor() {
            m(this, "m_steamIDBroadcast", ""),
              m(this, "m_ulBroadcastID", ""),
              m(this, "m_ulViewerToken", ""),
              m(this, "m_strCDNAuthUrlParameters"),
              m(this, "m_bWebRTC", !1),
              m(this, "m_data"),
              m(this, "m_eWatchState", 0),
              m(this, "m_strStateDescription", ""),
              m(this, "m_rgVideos", []),
              m(this, "m_schManifestTimeout", new I.LU()),
              m(this, "m_schHeartbeatTimeout", new I.LU()),
              (0, h.Gn)(this);
          }
          SetState(t, e = "") {
            (this.m_eWatchState = t),
              (this.m_strStateDescription = e),
              t == 4 && console.log(this.m_strStateDescription);
          }
        }
        D([h.sH], st.prototype, "m_ulBroadcastID", 2),
          D([h.sH], st.prototype, "m_eWatchState", 2),
          D([h.sH], st.prototype, "m_strStateDescription", 2),
          D([h.XI], st.prototype, "SetState", 1);
        class $ {
          constructor(t) {
            m(this, "m_steamIDBroadcast", ""),
              m(this, "m_bInitialized", !1),
              m(this, "m_strTitle", ""),
              m(this, "m_strAppId", "" + dt),
              m(this, "m_nAppID", dt),
              m(this, "m_strAppTitle", ""),
              m(this, "m_strThumbnailUrl", ""),
              m(this, "m_nViewerCount", 0),
              m(this, "m_bIsOnline", !1),
              m(this, "m_schUpdateTimeout", new I.LU()),
              m(this, "m_nRefCount", 0),
              (0, h.Gn)(this),
              (this.m_steamIDBroadcast = t);
          }
        }
        D([h.sH], $.prototype, "m_bInitialized", 2),
          D([h.sH], $.prototype, "m_strTitle", 2),
          D([h.sH], $.prototype, "m_strAppId", 2),
          D([h.sH], $.prototype, "m_nAppID", 2),
          D([h.sH], $.prototype, "m_strAppTitle", 2),
          D([h.sH], $.prototype, "m_strThumbnailUrl", 2),
          D([h.sH], $.prototype, "m_nViewerCount", 2),
          D([h.sH], $.prototype, "m_bIsOnline", 2);
        class it {
          constructor() {
            m(this, "m_eWatchState", 0),
              m(this, "m_strStateDescription", ""),
              m(this, "m_rgVideos", []),
              (0, h.Gn)(this);
          }
          SetState(t, e = "") {
            (this.m_eWatchState = t),
              (this.m_strStateDescription = e),
              t == 4 && console.log(this.m_strStateDescription);
          }
        }
        D([h.sH], it.prototype, "m_eWatchState", 2),
          D([h.sH], it.prototype, "m_strStateDescription", 2),
          D([h.XI], it.prototype, "SetState", 1);
        class vt extends it {
          constructor() {
            super(...arguments), m(this, "m_clipID"), m(this, "m_data");
          }
        }
        class It extends it {
          constructor() {
            super(...arguments),
              m(this, "m_nAppIDVOD"),
              m(this, "m_manifestURL");
          }
        }
        class ut {
          constructor() {
            m(this, "m_mapBroadcasts", new Map()),
              m(this, "m_mapClips", new Map()),
              m(this, "m_mapVODs", new Map()),
              m(this, "m_activeVideo", null),
              m(this, "m_broadcastSettings", {
                nVolume: 1,
                bMuted: !1,
                ulViewerToken: "0",
              }),
              m(this, "m_schSaveSettings", new I.LU()),
              m(this, "m_broadcastInfos", {}),
              (0, h.Gn)(this),
              this.LoadBroadcastSettings();
          }
          GetBroadcastState(t) {
            if (t.IsBroadcastClip()) {
              let e = this.m_mapClips.get(t.GetBroadcastClipID());
              return e ? e.m_eWatchState : 0;
            } else if (t.IsBroadcastVOD()) {
              const e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
              return e ? e.m_eWatchState : 0;
            } else {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              return e ? e.m_eWatchState : 0;
            }
          }
          GetBroadcastStateDescription(t) {
            if (t.IsBroadcastClip()) {
              let e = this.m_mapClips.get(t.GetBroadcastClipID());
              return e ? e.m_strStateDescription : "";
            } else if (t.IsBroadcastVOD()) {
              const e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
              return e ? e.m_strStateDescription : "";
            } else {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              return e ? e.m_strStateDescription : "";
            }
          }
          CreateBroadcastVideo(t, e, s, r) {
            let n = this.GetOrCreateBroadcast(e),
              { nVolume: S, bMuted: C } = this.m_broadcastSettings,
              k = new T(t, S, C, s);
            return (
              k.SetBroadcastSteamID(e),
              n.m_rgVideos.push(k),
              (n.m_bWebRTC = r),
              !(0, V.Mc)() && !(0, V.aM)() && new ct().UnlockH264(n, k),
              k
            );
          }
          CreateClipVideo(t, e, s) {
            let r = this.GetOrCreateClip(e),
              { nVolume: n, bMuted: S } = this.m_broadcastSettings,
              C = new T(t, n, S, s);
            return (
              C.SetBroadcastClipID(e),
              r.m_rgVideos.push(C),
              !(0, V.Mc)() && !(0, V.aM)() && new ct().UnlockH264(r, C),
              C
            );
          }
          CreateVODVideo(t, e, s) {
            let r = this.GetOrCreateVOD(e),
              { nVolume: n, bMuted: S } = this.m_broadcastSettings,
              C = new T(t, n, S, s);
            return (
              C.SetBroadcastAppIDVOD(e),
              r.m_rgVideos.push(C),
              !(0, V.Mc)() && !(0, V.aM)() && new ct().UnlockH264(r, C),
              C
            );
          }
          StartVideo(t) {
            if (t.IsBroadcastClip()) {
              console.log(`Starting clip for ${t.GetBroadcastClipID()}`);
              let e = this.m_mapClips.get(t.GetBroadcastClipID());
              if (!e) return;
              this.SetActiveVideo(t),
                e.m_eWatchState == 0
                  ? this.GetClipManifest(e, t.GetWatchLocation())
                  : e.m_eWatchState == 3 && t.StartClip(e);
            } else if (t.IsBroadcastVOD()) {
              console.log(`Starting VOD for ${t.GetBroadcastAppIDVOD()}`);
              let e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
              if (!e) return;
              this.SetActiveVideo(t),
                e.m_eWatchState == 0
                  ? this.GetVODManifest(e, t.GetWatchLocation())
                  : e.m_eWatchState == 3 && t.StartVOD(e);
            } else {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              if (!e) return;
              this.SetActiveVideo(t),
                e.m_eWatchState == 0
                  ? this.GetBroadcastManifest(e, t.GetWatchLocation())
                  : e.m_eWatchState == 3 && t.StartBroadcast(e);
            }
          }
          SetActiveVideo(t) {
            this.m_mapBroadcasts.forEach((e) => {
              for (let s of e.m_rgVideos)
                s != t && s.StopPlaybackTillUserInput();
            }),
              this.m_mapClips.forEach((e) => {
                for (let s of e.m_rgVideos)
                  s != t && s.StopPlaybackTillUserInput();
              }),
              (this.m_activeVideo = t);
          }
          PauseAllVideo() {
            this.m_mapBroadcasts.forEach((t) => {
              for (let e of t.m_rgVideos) e.StopPlaybackTillUserInput();
            });
          }
          async StopVideo(t) {
            let e = t.GetBroadcastSteamID(),
              s = this.m_mapBroadcasts.get(e);
            t.Stop(),
              s &&
                (s.m_ulBroadcastID &&
                  gt(
                    e,
                    s.m_ulBroadcastID,
                    this.m_broadcastSettings.ulViewerToken,
                  ),
                d.Wp(s.m_rgVideos, (r) => r == t),
                this.RemoveBroadcastIfUnused(s));
          }
          StartInfo(t) {
            const e = this.GetOrCreateBroadcastInfo(t);
            return (
              e.m_nRefCount++,
              (!e.m_bInitialized || !e.m_schUpdateTimeout.IsScheduled()) &&
                this.LoadBroadcastInfo(e),
              e
            );
          }
          StopInfo(t) {
            t.m_nRefCount--;
          }
          GetOrCreateBroadcastInfo(t) {
            if (!t) return new $("");
            if (!this.m_broadcastInfos[t]) {
              const e = (0, h.sH)(new $(t));
              this.m_broadcastInfos[t] = e;
            }
            return this.m_broadcastInfos[t];
          }
          GetOrCreateBroadcast(t) {
            let e = this.m_mapBroadcasts.get(t);
            return (
              e ||
              ((e = new st()),
              (e.m_steamIDBroadcast = t),
              (e.m_eWatchState = 0),
              this.m_mapBroadcasts.set(t, e),
              e)
            );
          }
          GetBroadcast(t) {
            return this.m_mapBroadcasts.get(t);
          }
          GetBroadcastClip(t) {
            return this.m_mapClips.get(t);
          }
          GetBroadcastVOD(t) {
            return this.m_mapVODs.get(t);
          }
          RemoveBroadcastIfUnused(t) {
            t.m_rgVideos.length ||
              (t.m_schHeartbeatTimeout.Cancel(),
              t.m_schManifestTimeout.Cancel(),
              this.m_mapBroadcasts.delete(t.m_steamIDBroadcast));
          }
          GetOrCreateClip(t) {
            let e = this.m_mapClips.get(t);
            return (
              e ||
              ((e = new vt()),
              (e.m_clipID = t),
              (e.m_eWatchState = 0),
              this.m_mapClips.set(t, e),
              e)
            );
          }
          GetOrCreateVOD(t) {
            let e = this.m_mapVODs.get(t);
            return (
              e ||
              ((e = new It()),
              (e.m_nAppIDVOD = t),
              (e.m_eWatchState = 0),
              this.m_mapVODs.set(t, e),
              e)
            );
          }
          async LoadBroadcastInfo(t) {
            let e = "0",
              s = this.m_mapBroadcasts.get(t.m_steamIDBroadcast);
            if ((s && (e = s.m_ulBroadcastID), t.m_nRefCount == 0)) return;
            const r = {
              steamid: t.m_steamIDBroadcast,
              broadcastid: e,
              location:
                s &&
                s.m_rgVideos &&
                s.m_rgVideos[0] &&
                s.m_rgVideos[0].GetWatchLocation(),
            };
            try {
              const n = await O().get(
                `${l.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
                { params: r },
              );
              if (!n || !n.data || !n.data.success || n.data.success != R.R) {
                t.m_bInitialized = !0;
                return;
              }
              const S = n.data;
              (0, h.h5)(() => {
                (t.m_bInitialized = !0),
                  (t.m_strTitle = S.title),
                  (t.m_strAppId = S.appid),
                  (t.m_nAppID = Number.parseInt(S.appid)),
                  (t.m_strAppTitle = S.app_title),
                  (t.m_strThumbnailUrl = S.thumbnail_url),
                  (t.m_nViewerCount = S.viewer_count),
                  (t.m_bIsOnline = S.is_online),
                  !t.m_strTitle &&
                    v.td &&
                    ((t.m_strTitle = v.td.name),
                    (t.m_strAppTitle = v.td.appName || v.td.name));
                const C = S.update_interval;
                C &&
                  typeof C == "number" &&
                  t.m_schUpdateTimeout.Schedule(C * 1e3, () =>
                    this.LoadBroadcastInfo(t),
                  );
              });
            } catch (n) {
              console.error(n);
            }
          }
          DelayedGetBroadcastManifest(t, e, s = Date.now()) {
            t.m_schManifestTimeout.Schedule(Dt, () =>
              this.GetBroadcastManifest(t, e, s),
            );
          }
          async GetBroadcastManifest(t, e, s = Date.now()) {
            t.SetState(2, "");
            let r = {
                steamid: t.m_steamIDBroadcast,
                broadcastid: 0,
                viewertoken: this.m_broadcastSettings.ulViewerToken,
                watchlocation: e,
                sessionid: (0, l.KC)(),
                is_webrtc: t.m_bWebRTC,
              },
              n = null;
            try {
              n = await O().get(
                l.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
                { params: r, withCredentials: !0 },
              );
            } catch (k) {
              let x = (0, B.H)(k);
              console.error(
                "Failed to get broadcast manifest!" + x.strErrorMsg,
                x,
              );
            }
            if (!n || n.status != 200) {
              t.SetState(4, (0, y.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let S = n.data;
            S.viewertoken && this.SetViewerToken(S.viewertoken);
            let C = S.success;
            if (C == "ready")
              t.SetState(3),
                (t.m_ulBroadcastID = S.broadcastid),
                (t.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
                (t.m_strCDNAuthUrlParameters = S.cdn_auth_url_parameters),
                (t.m_bWebRTC = S.is_webrtc),
                (t.m_data = S),
                this.LoadBroadcast(t),
                setTimeout(() => {
                  t.m_schHeartbeatTimeout.Schedule(
                    t.m_data.heartbeat_interval * 1e3,
                    () => this.HeartbeatBroadcast(t),
                  );
                }, Math.random() * 3e4);
            else if (C == "waiting") {
              t.SetState(2, (0, y.we)("#BroadcastWatch_WaitingForResponse"));
              let k = Date.now() - s;
              if (k > 60 * 1e3) {
                t.SetState(4, (0, y.we)("#BroadcastWatch_NotAvailable"));
                return;
              }
              let x = k > 30 * 1e3 ? S.retry : 5e3;
              t.m_schManifestTimeout.Schedule(x, () =>
                this.GetBroadcastManifest(t, e, s),
              );
            } else
              C == "waiting_for_start"
                ? (t.SetState(2, (0, y.we)("#BroadcastWatch_WaitingForStart")),
                  t.m_schManifestTimeout.Schedule(S.retry, () =>
                    this.GetBroadcastManifest(t, e, s),
                  ))
                : C == "waiting_for_reconnect"
                  ? (t.SetState(
                      2,
                      (0, y.we)("#BroadcastWatch_WaitingForReconnect"),
                    ),
                    t.m_schManifestTimeout.Schedule(S.retry, () =>
                      this.GetBroadcastManifest(t, e, s),
                    ))
                  : C == "end"
                    ? t.SetState(4, (0, y.we)("#BroadcastWatch_NotAvailable"))
                    : C == "too_many_broadcasts"
                      ? t.SetState(
                          4,
                          (0, y.we)("#BroadcastWatch_TooManyBroadcasts"),
                        )
                      : C == "system_not_supported"
                        ? t.SetState(
                            4,
                            (0, y.we)("#BroadcastWatch_SystemNotSupported"),
                          )
                        : C == "user_restricted"
                          ? t.SetState(
                              4,
                              (0, y.we)("#BroadcastWatch_UserRestricted"),
                            )
                          : C == "poor_upload_quality"
                            ? t.SetState(
                                4,
                                (0, y.we)("#BroadcastWatch_PoorUploadQuality"),
                              )
                            : C == "request_failed"
                              ? t.SetState(
                                  4,
                                  (0, y.we)("#BroadcastWatch_RequestFailed"),
                                )
                              : C == "too_many_viewers"
                                ? t.SetState(
                                    4,
                                    (0, y.we)("#BroadcastWatch_TooManyViewers"),
                                  )
                                : t.SetState(
                                    4,
                                    (0, y.we)("#BroadcastWatch_NotAvailable"),
                                  );
          }
          async GetClipManifest(t, e) {
            t.SetState(2, "");
            let s = {
                clipid: t.m_clipID,
                watchlocation: e,
                sessionid: (0, l.KC)(),
              },
              r = null;
            try {
              r = await O().get(
                l.TS.CHAT_BASE_URL + "broadcast/getclipdetails",
                { params: s, withCredentials: !0 },
              );
            } catch (S) {
              console.error(S), console.log("Failed to get clip manifest!");
            }
            if (!r || r.status != 200) {
              t.SetState(4, (0, y.we)("#BroadcastWatch_RequestFailed"));
              return;
            }
            let n = r.data;
            n.success == R.R
              ? (t.SetState(3), (t.m_data = n), this.LoadClip(t))
              : t.SetState(4, (0, y.we)("#BroadcastWatch_RequestFailed"));
          }
          async GetVODManifest(t, e) {
            t.SetState(2, "");
            let s = await A.K.Get().LoadVODForAppID(t.m_nAppIDVOD);
            s
              ? (t.SetState(3),
                (t.m_manifestURL = s.video_url),
                this.LoadVOD(t))
              : t.SetState(4, (0, y.we)("#BroadcastWatch_RequestFailed"));
          }
          async HeartbeatBroadcast(t) {
            let e = new FormData();
            e.append("steamid", t.m_steamIDBroadcast),
              e.append("broadcastid", t.m_ulBroadcastID),
              e.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
              O().post(l.TS.CHAT_BASE_URL + "broadcast/heartbeat/", e),
              t.m_schHeartbeatTimeout.Schedule(
                t.m_data.heartbeat_interval * 1e3,
                () => this.HeartbeatBroadcast(t),
              );
          }
          LoadBroadcast(t) {
            const e = this.m_activeVideo;
            e &&
              t.m_rgVideos.findIndex((s) => s == e) >= 0 &&
              e.StartBroadcast(t);
          }
          LoadClip(t) {
            const e = this.m_activeVideo;
            e && t.m_rgVideos.findIndex((s) => s == e) >= 0 && e.StartClip(t);
          }
          LoadVOD(t) {
            const e = this.m_activeVideo;
            e && t.m_rgVideos.findIndex((s) => s == e) >= 0 && e.StartVOD(t);
          }
          BroadcastDownloadFailed(t, e = !0, s = g.N_.Invalid) {
            t.Stop();
            let r = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            r &&
              r.m_eWatchState != 2 &&
              (r.m_bWebRTC && e && (r.m_bWebRTC = !1),
              s == g.N_.StreamGone
                ? this.DelayedGetBroadcastManifest(r, t.GetWatchLocation())
                : this.GetBroadcastManifest(r, t.GetWatchLocation()));
          }
          UserInputClickVideo(t) {
            if (
              this.m_activeVideo != t &&
              (this.PauseAllVideo(),
              (this.m_activeVideo = t),
              !t.IsBroadcastClip() && !t.IsBroadcastVOD())
            ) {
              let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
              e && this.GetBroadcastManifest(e, t.GetWatchLocation());
            }
            t.UserInputClick();
          }
          LoadBroadcastSettings() {
            if (!window.localStorage) return;
            let t = window.localStorage.getItem("broadcastSettings");
            if (!t) return;
            let e = JSON.parse(t);
            if (!e) return;
            Object.assign(this.m_broadcastSettings, e);
            let s = this.m_broadcastSettings;
            (s.bMuted = !!s.bMuted),
              (s.nVolume = o.OQ(s.nVolume, 0, 1)),
              typeof s.ulViewerToken != "string" && (s.ulViewerToken = "0");
          }
          SaveBroadcastSettings() {
            window.localStorage &&
              this.m_schSaveSettings.Schedule(bt, () => {
                try {
                  window.localStorage.setItem(
                    "broadcastSettings",
                    JSON.stringify(this.m_broadcastSettings),
                  );
                } catch {}
              });
          }
          SetViewerToken(t) {
            this.m_broadcastSettings.ulViewerToken != t &&
              ((this.m_broadcastSettings.ulViewerToken = t),
              this.SaveBroadcastSettings());
          }
          GetViewerToken() {
            return this.m_broadcastSettings.ulViewerToken;
          }
          SaveVolumeChange(t, e) {
            (this.m_broadcastSettings.nVolume == t &&
              this.m_broadcastSettings.bMuted == e) ||
              ((this.m_broadcastSettings.nVolume = t),
              (this.m_broadcastSettings.bMuted = e),
              this.SaveBroadcastSettings());
          }
        }
        D([h.sH], ut.prototype, "m_mapBroadcasts", 2);
        var St = ((u) => (
          (u[(u.Timeline = 1)] = "Timeline"),
          (u[(u.Minimap = 2)] = "Minimap"),
          u
        ))(St || {});
        class T {
          constructor(t, e, s, r) {
            m(this, "m_elVideo"),
              m(this, "m_player", null),
              m(this, "m_listeners", new I.Ji()),
              m(this, "m_gameDataParser", null),
              m(this, "m_eWatchLocation", i.nn.Tq),
              m(this, "m_bStartWithSubtitles", !1),
              m(this, "m_steamIDBroadcast", ""),
              m(this, "m_BroadcastInfo", null),
              m(this, "m_broadcastClipID", ""),
              m(this, "m_nBroadcastAppIDVOD", 0),
              m(this, "m_bPaused", !1),
              m(this, "m_nPlaybackTime", 0),
              m(this, "m_bBuffering", !1),
              m(this, "m_bOnLiveEdge", !1),
              m(this, "m_nVolume", 0),
              m(this, "m_bMuted", !1),
              m(this, "m_bUserInputNeeded", !1),
              m(this, "m_bIsReplay", !1),
              m(this, "m_nTimelineDuration", pt),
              m(this, "m_nVideoStartPos", 0),
              m(this, "m_nVideoEndPos", 0),
              m(this, "m_editorStartTime", 0),
              m(this, "m_editorEndTime", 0),
              m(this, "m_rgMarkers", h.sH.array()),
              m(this, "m_rgSegments", h.sH.array()),
              m(this, "m_rgRegions", h.sH.array()),
              m(this, "m_fnOnVideoEnd"),
              m(this, "m_videoEndingTimer"),
              (0, h.Gn)(this),
              (this.m_elVideo = t),
              (this.m_nVolume = e),
              (this.m_bMuted = s),
              (this.m_eWatchLocation = r);
          }
          SetBroadcastSteamID(t) {
            this.m_steamIDBroadcast = t;
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
          SetStatsViewIsVisible(t) {
            this.m_player && this.m_player.SetStatsViewIsVisible(t);
          }
          GetDASHPlayerStats() {
            var t;
            return (t = this.m_player) == null
              ? void 0
              : t.GetDASHPlayerStats();
          }
          BHasDASHStats() {
            return this.m_player != null;
          }
          IsTimelineMapActive() {
            return !1;
          }
          CanSeek() {
            var t, e;
            return (e = (t = this.m_player) == null ? void 0 : t.CanSeek()) !=
              null
              ? e
              : !1;
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
            return !!this.m_broadcastClipID;
          }
          SetBroadcastClipID(t) {
            this.m_broadcastClipID = t;
          }
          GetBroadcastClipID() {
            return this.m_broadcastClipID;
          }
          IsBroadcastVOD() {
            return !!this.m_nBroadcastAppIDVOD;
          }
          SetBroadcastAppIDVOD(t) {
            this.m_nBroadcastAppIDVOD = t;
          }
          GetBroadcastAppIDVOD() {
            return this.m_nBroadcastAppIDVOD;
          }
          GetVideoRepresentations() {
            return this.m_player ? this.m_player.GetVideoRepresentations() : [];
          }
          SetVideoRepresentation(t) {
            var e;
            (e = this.m_player) == null || e.SetVideoRepresentation(t);
          }
          GetBroadcastInfo() {
            return this.m_BroadcastInfo;
          }
          BHasTimedText() {
            var t, e;
            return (e =
              (t = this.m_player) == null ? void 0 : t.BHasTimedText()) != null
              ? e
              : !1;
          }
          BHasPlayer() {
            return !!this.m_player;
          }
          ListSubtitles() {
            return this.m_elVideo.textTracks;
          }
          GetSubtitles() {
            for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
              const e = this.m_elVideo.textTracks[t];
              if (e.mode === "showing") return e;
            }
            return null;
          }
          SetSubtitles(t) {
            let e = t ? y.bi[t] : a.xPp;
            this.m_player.SetSubtitles(e);
          }
          SetStartWithSubtitles(t) {
            this.m_bStartWithSubtitles = t;
          }
          GetBroadcastState() {
            return W.GetBroadcastState(this);
          }
          GetBroadcastStateDescription() {
            return W.GetBroadcastStateDescription(this);
          }
          SetOnVideoCallback(t) {
            this.m_fnOnVideoEnd = t;
          }
          InitPlayer() {
            (0, _.wT)(!this.m_player, "Initialized twice?"),
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
              (this.m_nTimelineDuration = pt),
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
          StartBroadcast(t) {
            var e, s;
            if ((this.InitPlayer(), t.m_data.url)) {
              let n = new g.Zn(this.m_elVideo);
              n.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
                (this.m_player = n),
                n.PlayMPD(
                  t.m_data.url,
                  t.m_data.hls_url,
                  void 0,
                  t.m_strCDNAuthUrlParameters,
                );
            } else {
              let n = new P(this.m_elVideo);
              (this.m_player = n),
                n.PlayWebRTC(
                  this.m_steamIDBroadcast,
                  t.m_ulViewerToken,
                  t.m_data.webrtc_session_id,
                  t.m_data.webrtc_turn_server,
                  t.m_data.webrtc_offer_sdp,
                );
            }
            this.SetVolume(this.m_nVolume),
              (e = this.m_player) == null || e.SetMuted(this.m_bMuted);
            let r =
              (s = this.m_player) == null ? void 0 : s.GetDASHPlayerStats();
            r &&
              r.SetBroadcasterAndViewerInfo(
                this.m_steamIDBroadcast,
                l.iA.steamid,
                t.m_ulBroadcastID,
                t.m_ulViewerToken,
              ),
              (this.m_BroadcastInfo = W.StartInfo(this.m_steamIDBroadcast));
          }
          StartClip(t) {
            var e;
            this.InitPlayer();
            let s = new g.Zn(this.m_elVideo);
            s.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = s),
              s.PlayMPD(t.m_data.clip_url),
              this.SetVolume(this.m_nVolume),
              (e = this.m_player) == null || e.SetMuted(this.m_bMuted);
          }
          StartVOD(t) {
            var e;
            this.InitPlayer();
            let s = new g.Zn(this.m_elVideo);
            s.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = s),
              l.iA.logged_in &&
                t.m_nAppIDVOD &&
                s.SetBookmarkAdapter(new U.M(t.m_nAppIDVOD)),
              t.m_manifestURL && s.PlayMPD(t.m_manifestURL),
              this.SetVolume(this.m_nVolume),
              (e = this.m_player) == null || e.SetMuted(this.m_bMuted);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_BroadcastInfo &&
                (W.StopInfo(this.m_BroadcastInfo),
                (this.m_BroadcastInfo = null)),
              (this.m_gameDataParser = null),
              this.m_player && (this.m_player.Close(), (this.m_player = null));
          }
          TogglePlayPause() {
            !this.m_player || this.m_player.IsPaused()
              ? this.Play()
              : this.Pause();
          }
          Play() {
            const t = this.GetBroadcastState();
            if (t == 0 || this.IsBroadcastClip()) {
              W.StartVideo(this);
              return;
            } else if (t == 3)
              if ((W.SetActiveVideo(this), this.m_player)) this.m_player.Play();
              else if (this.IsBroadcastVOD()) {
                const e = W.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
                e && this.StartVOD(e);
              } else {
                const e = W.GetBroadcast(this.m_steamIDBroadcast);
                e && this.StartBroadcast(e);
              }
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
          JumpTime(t) {
            var e;
            (e = this.m_player) == null || e.JumpTime(t);
          }
          Seek(t) {
            var e;
            (e = this.m_player) == null || e.Seek(t);
          }
          SeekAndPlay(t) {
            var e;
            (e = this.m_player) == null || e.SeekAndPlay(t);
          }
          JumpToLiveEdge() {
            const t = this.m_player;
            t &&
              (t.IsLiveContent()
                ? this.SeekAndPlay(t.GetBufferedLiveEdgeTime())
                : this.SeekAndPlay(t.GetAvailableVideoStartTime()));
          }
          SetVolume(t) {
            this.m_player &&
              (this.m_player.SetVolume(t),
              (this.m_nVolume = this.m_player.GetVolume())),
              W.SaveVolumeChange(t, this.m_bMuted);
          }
          SetMute(t) {
            this.m_player && this.m_player.SetMuted(t),
              (this.m_bMuted = t),
              W.SaveVolumeChange(this.m_nVolume, t);
          }
          IsMuted() {
            return this.m_bMuted;
          }
          OnVideoPlaying() {
            (this.m_bPaused = !1),
              this.m_editorStartTime === 0 &&
                this.m_editorEndTime === 0 &&
                ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
                (this.m_editorEndTime =
                  this.GetVideoAvailableStartTime() +
                  this.GetTimelineDuration()));
          }
          OnVideoPause() {
            this.m_bPaused = !0;
          }
          OnVideoTimeUpdate() {
            window.clearTimeout(this.m_videoEndingTimer);
            const t = this.m_player;
            if (t)
              if (this.IsBroadcastClip())
                (this.m_nPlaybackTime = t.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = t.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = t.GetBufferedLiveEdgeTime()),
                  (this.m_nTimelineDuration =
                    this.m_nVideoEndPos - this.m_nVideoStartPos),
                  (this.m_bOnLiveEdge = !1),
                  (this.m_bBuffering = t.IsBuffering());
              else {
                if (
                  ((this.m_nPlaybackTime = t.GetCurrentPlayTime()),
                  (this.m_nVideoStartPos = t.GetAvailableVideoStartTime()),
                  (this.m_nVideoEndPos = Math.max(
                    t.GetBufferedLiveEdgeTime(),
                    this.m_nPlaybackTime,
                  )),
                  this.IsBroadcastVOD())
                ) {
                  this.m_nTimelineDuration = this.m_nVideoEndPos;
                  const e = this.m_fnOnVideoEnd;
                  e &&
                    this.m_nVideoEndPos - this.m_nPlaybackTime < g.Br &&
                    (this.m_videoEndingTimer = window.setTimeout(() => {
                      e();
                    }, 400));
                }
                (this.m_bBuffering = t.IsBuffering()),
                  (this.m_bOnLiveEdge =
                    this.m_nVideoEndPos - this.m_nPlaybackTime < g.Br),
                  t.IsPaused() && (this.m_bOnLiveEdge = !1);
              }
          }
          OnVolumeUpdated() {
            const t = this.m_player;
            t &&
              ((this.m_nVolume = t.GetVolume()), (this.m_bMuted = t.IsMuted()));
          }
          OnGameDataUpdate(t) {
            var e, s;
            let r = t.detail;
            if (!r || typeof r.gamedata != "object") return;
            (!this.m_gameDataParser ||
              this.m_gameDataParser.GetAppID() != r.gamedata.__appid) &&
              (this.m_gameDataParser = new N(r.gamedata.__appid));
            const n =
              (s =
                (e = this.m_player) == null
                  ? void 0
                  : e.GetLiveContentStartTime().getTime()) != null
                ? s
                : 0;
            if ("timelinemarkers" in r.gamedata) {
              const S = this.m_gameDataParser.UpdateMarkers(
                r.gamedata.__timelinemarkers,
                n,
              );
              S &&
                (this.m_rgMarkers.replace(S.rgMarkers || []),
                this.m_rgSegments.replace(S.rgSegments || []));
              const C = this.m_gameDataParser.UpdateRegions(
                r.gamedata.__regions,
              );
              C && this.m_rgRegions.replace(C);
            } else
              "soundtrack" in r.gamedata &&
                this.m_gameDataParser.UpdateSoundtrack(
                  this.m_steamIDBroadcast,
                  r.gamedata.soundtrack,
                );
          }
          OnDownloadFailed(t) {
            let e = t.detail || g.N_.Invalid;
            W.BroadcastDownloadFailed(this, !0, e);
          }
          OnWebRTCRetry() {
            W.BroadcastDownloadFailed(this, !1);
          }
          OnWebRTCFailed() {
            W.BroadcastDownloadFailed(this, !0);
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
          GetTimeAtMousePosition(t, e, s, r) {
            let n = o.Fu(t, e.left, e.right, s, r);
            return Math.floor(n + 0.5);
          }
          GetPercentOffsetFromTime(t, e) {
            let s = 0,
              r = 0;
            return (
              e == 1
                ? ((r = this.m_nVideoEndPos),
                  (s = r - this.m_nTimelineDuration))
                : ((s = 0), (r = 0)),
              o.Fu(t, s, r, 0, 100)
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
        D([h.sH], T.prototype, "m_player", 2),
          D([h.sH], T.prototype, "m_bPaused", 2),
          D([h.sH], T.prototype, "m_nPlaybackTime", 2),
          D([h.sH], T.prototype, "m_bBuffering", 2),
          D([h.sH], T.prototype, "m_bOnLiveEdge", 2),
          D([h.sH], T.prototype, "m_nVolume", 2),
          D([h.sH], T.prototype, "m_bMuted", 2),
          D([h.sH], T.prototype, "m_bUserInputNeeded", 2),
          D([h.sH], T.prototype, "m_bIsReplay", 2),
          D([h.sH], T.prototype, "m_nTimelineDuration", 2),
          D([h.sH], T.prototype, "m_nVideoStartPos", 2),
          D([h.sH], T.prototype, "m_nVideoEndPos", 2),
          D([h.sH], T.prototype, "m_editorStartTime", 2),
          D([h.sH], T.prototype, "m_editorEndTime", 2),
          D([h.XI.bound], T.prototype, "StartBroadcast", 1),
          D([h.XI.bound], T.prototype, "StartClip", 1),
          D([h.XI.bound], T.prototype, "StartVOD", 1),
          D([c.o], T.prototype, "OnVideoPlaying", 1),
          D([c.o], T.prototype, "OnVideoPause", 1),
          D([h.XI.bound], T.prototype, "OnVideoTimeUpdate", 1),
          D([c.o], T.prototype, "OnVolumeUpdated", 1),
          D([h.XI.bound], T.prototype, "OnGameDataUpdate", 1),
          D([c.o], T.prototype, "OnDownloadFailed", 1),
          D([c.o], T.prototype, "OnWebRTCRetry", 1),
          D([c.o], T.prototype, "OnWebRTCFailed", 1),
          D([c.o], T.prototype, "OnUserInputNeeded", 1);
        const W = new ut();
        window.uiBroadcastWatchStore = W;
      },
    },
  ]);
})();
