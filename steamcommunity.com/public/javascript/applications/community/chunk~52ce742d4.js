/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [12694],
  {
    3067: (t, e, a) => {
      a.d(e, { td: () => n });
      var i = a(34629),
        r = a(14947),
        s = a(78327);
      s.TS.CHAT_BASE_URL, s.TS.CHAT_BASE_URL;
      class o {
        constructor(t) {
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
            (0, r.Gn)(this),
            this.init(t);
        }
        init(t) {
          var e, a, i;
          (this.bValid = t.bValid),
            (this.stream = t.stream),
            (this.name = t.name),
            (this.appName = null !== (e = t.appName) && void 0 !== e ? e : ""),
            (this.appID = t.appID),
            (this.link = t.link),
            (this.linkName = t.linkName),
            (this.tabIcon = null !== (a = t.tabIcon) && void 0 !== a ? a : ""),
            (this.offlineImage = t.offlineImage),
            (this.gidEvent =
              null !== (i = t.gidEvent) && void 0 !== i ? i : "");
        }
      }
      (0, i.Cg)([r.sH], o.prototype, "bValid", void 0),
        (0, i.Cg)([r.sH], o.prototype, "stream", void 0),
        (0, i.Cg)([r.sH], o.prototype, "name", void 0),
        (0, i.Cg)([r.sH], o.prototype, "appName", void 0),
        (0, i.Cg)([r.sH], o.prototype, "appID", void 0),
        (0, i.Cg)([r.sH], o.prototype, "link", void 0),
        (0, i.Cg)([r.sH], o.prototype, "linkName", void 0),
        (0, i.Cg)([r.sH], o.prototype, "tabIcon", void 0),
        (0, i.Cg)([r.sH], o.prototype, "offlineImage", void 0),
        (0, i.Cg)([r.sH], o.prototype, "gidEvent", void 0);
      let n = new o({
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
    4299: (t, e, a) => {
      var i, r;
      a.d(e, { J8: () => s, X8: () => r }),
        (function (t) {
          (t[(t.Hover = 0)] = "Hover"),
            (t[(t.ClickPopup = 1)] = "ClickPopup"),
            (t[(t.ClickSurroundingRegion = 2)] = "ClickSurroundingRegion");
        })(i || (i = {})),
        (function (t) {
          (t[(t.Chat = 0)] = "Chat"),
            (t[(t.Notification = 1)] = "Notification"),
            (t[(t.Error = 2)] = "Error");
        })(r || (r = {}));
      class s {}
    },
    34010: (t, e, a) => {
      a.d(e, {
        M5: () => b,
        MU: () => f,
        MX: () => C,
        Rt: () => B,
        U7: () => v,
        fn: () => g,
        j: () => y,
      });
      var i = a(34629),
        r = a(16021),
        s = a(41735),
        o = a.n(s),
        n = a(14947),
        d = a(37085),
        m = a(17720),
        l = a(45285),
        c = a(61556),
        h = a(44165),
        p = a(68033),
        _ = a(68797),
        u = a(78327),
        S = a(75515);
      function g(t) {
        return Boolean(t && t.thumbnail_http_address);
      }
      function b(t, e) {
        if (e || t) {
          const a = e || t;
          return Boolean(a && y.Get().BIsAppStreaming(a));
        }
        return !1;
      }
      class y {
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
        BHasStreams(t) {
          const e = this.GetStreams(t);
          return Boolean(e && e.length > 0);
        }
        AddCallbackOnNewContext(t, e, a) {
          this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(t), {
            name: e,
            fnCallback: a,
          });
        }
        ClearCallbackOnNewContext(t) {
          this.m_onLoadContextCall.set(
            this.GetStreamsLookupKeyFromDef(t),
            null,
          );
        }
        GetPlayReadyStream(t) {
          let e = this.GetStreamsLookupKeyFromDef(t);
          return this.m_playReadyStream.get(e);
        }
        BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
          return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
        }
        BIsEmbeddedStreamCollapsed() {
          return Boolean(this.m_bCollapsed);
        }
        SetEmbeddedStreamCollapsed(t) {
          this.m_bCollapsed != t && (this.m_bCollapsed = t);
        }
        GetConcurrentStreams(t) {
          const e = this.GetStreams(t);
          return e ? e.filter((t) => g(t)).length : 0;
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
          const t = this.GetChatVisibility();
          "remove" !== t && (this.m_bUserChatExpanded = "hide" === t);
        }
        DebugDumpContextAndAvailableContext(t) {
          console.log("Requested context", this.GetStreamsLookupKeyFromDef(t)),
            console.log("Available context count: ", this.m_lookupStreams.size),
            this.m_lookupStreams.forEach((t, e) => {
              console.log(e, t.length);
            });
        }
        GetStreams(t) {
          const e = this.GetStreamsLookupKeyFromDef(t);
          return this.m_lookupStreams.get(e);
        }
        GetBroadcastURL(t) {
          let e = null;
          return (
            (e = t.steamid
              ? new m.b(t.steamid)
              : m.b.InitFromAccountID(t.accountid)),
            u.TS.COMMUNITY_BASE_URL +
              "broadcast/watch/" +
              e.ConvertTo64BitString()
          );
        }
        BIsAppStreaming(t) {
          let e = !1;
          return (
            this.m_lookupStreams.forEach((a) => {
              e ||
                (e =
                  Boolean(a) &&
                  a.some(
                    (e) =>
                      c.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID === t,
                  ));
            }),
            e
          );
        }
        GetStreamsForAppID(t) {
          const e = new Array();
          return (
            this.m_lookupStreams.forEach((a) => {
              null == a ||
                a.forEach((a) => {
                  c.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID === t &&
                    e.push(a);
                });
            }),
            e
          );
        }
        AddStreamChangedListener(t) {
          this.m_setStreamChangedListeners.add(t);
        }
        RemoveStreamChangedListener(t) {
          this.m_setStreamChangedListeners.delete(t);
        }
        async LoadBIsEmbeddedBroadcastHidden(t) {
          if (void 0 === this.m_bUserPreferenceHideBroadcastByDefault) {
            let e = (0, u.Tc)("broadcastuser", "application_config");
            if (!e)
              try {
                let a =
                    u.TS.STORE_BASE_URL +
                    "broadcast/ajaxgetuserbroadcastpreferences",
                  i = await o().get(a, { params: {}, cancelToken: t.token });
                e = i.data;
              } catch (t) {
                console.log(
                  "LoadBIsEmbeddedBroadcastHidden: " + (0, _.H)(t).strErrorMsg,
                ),
                  (e = { bHideStoreBroadcast: !1 });
              }
            (0, n.h5)(() => {
              (this.m_bUserPreferenceHideBroadcastByDefault =
                e.bHideStoreBroadcast),
                (this.m_bCollapsed = e.bHideStoreBroadcast);
            });
          }
          return this.m_bUserPreferenceHideBroadcastByDefault;
        }
        async SetupEmbeddableVOD(t, e) {
          (this.m_bUseFakeData = !1),
            (this.m_streamChatStatus = "remove"),
            await r.A.Get().QueueAppRequest(t.nAppIDVOD, {
              include_assets: !0,
              include_trailers: !0,
            });
          const a = r.A.Get().GetApp(t.nAppIDVOD),
            i = new S.TT();
          if (
            ((i.accountid = 0),
            (i.nAppIDVOD = t.nAppIDVOD),
            (i.default_selection_priority = S.mY.k_ePrimary),
            (i.current_selection_priority = S.mY.k_ePrimary),
            (i.thumbnail_http_address =
              (null == a ? void 0 : a.GetAssets().GetHeaderURL()) || ""),
            (i.title = (null == a ? void 0 : a.GetName()) || ""),
            this.GetStreams(t).unshift(i),
            e)
          ) {
            const e = this.GetStreamsLookupKeyFromDef(t);
            this.m_playReadyStream.set(e, i);
          }
        }
        async HintLoadEmbeddablePreviewStreams(t) {
          let e = null,
            a = {
              eventid: t.event ? t.event.GID : void 0,
              previewAccounts: Boolean(t.bIsPreview && t.accountIDs)
                ? t.accountIDs.slice().sort().join(",")
                : void 0,
            };
          try {
            return (
              (e = await o().get(
                u.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpreview",
                { params: a },
              )),
              this.HandleHintLoadBroadcastResponse(t, e.data)
            );
          } catch (t) {
            let e = (0, _.H)(t);
            console.error(
              "HintLoadEmbeddablePreviewStreams hit error loading: " +
                e.strErrorMsg,
              e,
            );
          }
          return [];
        }
        async HintLoadEmbeddableStreams(t) {
          let e = this.MapEmbeddableStreamToRequest(t),
            a = this.GetStreamsLookupKeyFromParam(e);
          if (!this.m_inFlightRequests.has(a)) {
            this.m_lookupKeyToEmbedStreamDef.set(a, t);
            const i = this.InternalHintLoadEmbeddableStreams(t, e);
            this.m_inFlightRequests.set(a, i);
          }
          return this.m_inFlightRequests.get(a);
        }
        async InternalHintLoadEmbeddableStreams(t, e) {
          let a = (0, u.Tc)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, S.h7)(a)) return this.HandleHintLoadBroadcastResponse(t, a);
          try {
            let a = null;
            return (
              (a = await o().get(
                u.TS.STORE_BASE_URL + "broadcast/ajaxgetstreamersforpage",
                { params: e },
              )),
              this.HandleHintLoadBroadcastResponse(t, a.data)
            );
          } catch (t) {
            let e = (0, _.H)(t);
            console.error(
              "HintLoadEmbeddableStreams hit error loading: " + e.strErrorMsg,
              e,
            );
          }
          return [];
        }
        async HandleHintLoadBroadcastResponse(t, e) {
          var a;
          (this.m_bUseFakeData = !1),
            t.bIsPreview &&
              ((null === (a = null == e ? void 0 : e.filtered) || void 0 === a
                ? void 0
                : a.length) > 0
                ? this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
                    t.event,
                    e.filtered,
                  )
                : ((e = {
                    filtered: [{}],
                    success: 1,
                    total_count: 1,
                    err_msg: "",
                    broadcast_chat_visibility: "hide",
                  }),
                  (this.m_bUseFakeData = !0))),
            e.broadcast_chat_visibility &&
              (this.m_pageChatStatus = e.broadcast_chat_visibility);
          const i = new Array();
          (0, n.h5)(() => {
            e.filtered.forEach((t) => {
              if (!t.steamid) {
                const e = m.b.InitFromAccountID(t.accountid);
                t.steamid = e.ConvertTo64BitString();
              }
              const e = c.es.GetOrCreateBroadcastInfo(t.steamid),
                a = t.appid ? Number(t.appid) : c.fO;
              (e.m_nAppID = a),
                (e.m_strAppId = "" + a),
                void 0 === t.current_selection_priority &&
                  (t.current_selection_priority = t.default_selection_priority),
                a != c.fO && i.push(a);
            });
          });
          const r = this.GetStreamsLookupKeyFromDef(t);
          if (
            (this.m_lookupStreams.set(r, e.filtered),
            this.m_onLoadContextCall.has(r))
          ) {
            const t = this.m_onLoadContextCall.get(r);
            t && t.fnCallback();
          }
          const s = this.GetStreams(t);
          return await this.AutoStartVideoStream(t, s), s;
        }
        ExtractBroadcastPrioritiesFromPartnerEventForPreview(t, e) {
          var a, i;
          const r = Array.from(
              null !== (a = t.jsondata.broadcast_whitelist) && void 0 !== a
                ? a
                : [],
            ),
            s = Array.from(
              null !== (i = t.jsondata.broadcast_priority) && void 0 !== i
                ? i
                : [],
            ),
            o = new Map();
          for (let t = 0; t < r.length && !(t >= s.length); t++)
            o.set(r[t], (0, S.PH)(s[t]));
          e.forEach((t) => {
            const e = Number(t.accountid);
            o.has(e) && (t.current_selection_priority = o.get(e));
          });
        }
        async AutoStartVideoStream(t, e) {
          let a = this.GetStreamsLookupKeyFromDef(t);
          if (this.m_bMapHasStartedVideo.get(a)) return null;
          if (this.m_bUseFakeData) {
            if (!this.m_playReadyStream.get(a)) {
              const t = {
                accountid: 0,
                thumbnail_http_address: "",
                default_selection_priority: S.mY.k_eGeneral,
                current_selection_priority: S.mY.k_eGeneral,
              };
              this.m_playReadyStream.set(a, t);
            }
            return this.m_playReadyStream;
          }
          return this.PlayFromAvailableStreams(t, e);
        }
        async PlayFromAvailableStreams(t, e, a = !1) {
          const i = new Set();
          for (;;) {
            const r = e.filter((t) => !(i.has(t) || (a && t.nAppIDVOD))),
              s = this.GetAutoStartStream(r);
            if (!s) return null;
            if (await this.AttemptToPlayStream(t, s)) return s;
            i.add(s);
          }
        }
        async AttemptToPlayStream(t, e) {
          let a = this.GetStreamsLookupKeyFromDef(t);
          if (
            (this.m_bMapHasStartedVideo.set(a, !0),
            this.m_mapBroadcastChecked.has(e.accountid) ||
              this.m_mapBroadcastChecked.set(
                e.accountid,
                this.InternalAttemptToPlayStream(t, e),
              ),
            e.nAppIDVOD)
          )
            this.m_playReadyStream.set(a, e);
          else {
            const i = await this.m_mapBroadcastChecked.get(e.accountid);
            if ((null == i ? void 0 : i.success) != d.R) return null;
            (e.steamid = i.steamid),
              this.m_playReadyStream.set(a, e),
              this.GetConcurrentStreams(t) > 1
                ? (this.m_streamChatStatus = "hide")
                : (this.m_streamChatStatus = e.broadcast_chat_visibility),
              this.m_setStreamChangedListeners.forEach((t) => t(e));
            v(
              c.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
              l.Mc.iy,
              e.snr,
            );
          }
          return e;
        }
        async InternalAttemptToPlayStream(t, e) {
          this.GetStreamsLookupKeyFromDef(t);
          let a = null;
          try {
            const t = u.TS.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast";
            let i = {
              broadcastaccountid: e.accountid,
              viewer_token: c.es.GetViewerToken(),
              origin: self.origin,
            };
            return (a = await o().get(t, { params: i })), a.data;
          } catch (t) {
            let e = (0, _.H)(t);
            console.error("Broadcast.AttemptToPlayStream: " + e.strErrorMsg, e);
          }
          return null;
        }
        GetAutoStartStream(t) {
          if (!t) return null;
          const e = t.filter((t) => g(t)),
            a = e.reduce((t, e) => Math.max(t, B(e)), 0),
            i = e.filter((t) => B(t) === a);
          if (0 === i.length) return null;
          return i[Math.floor(Math.random() * i.length)];
        }
        MapEmbeddableStreamToRequest(t) {
          var e, a, i;
          return {
            appid: t.appid,
            promotionName: t.bIsPreview ? "preview" : t.promotionName,
            clanid: t.clanid
              ? t.clanid
              : t.event
                ? t.event.clanSteamID.GetAccountID()
                : void 0,
            listid: t.listid,
            subid: t.subid,
            bundleid: t.bundleid,
            eventid: t.event ? t.event.GID : void 0,
            previewAccounts: Boolean(t.bIsPreview && t.accountIDs)
              ? t.accountIDs.slice().sort().join(",")
              : void 0,
            test: false,
            cc: u.TS.COUNTRY,
            l: u.TS.LANGUAGE,
            hubtype:
              null === (e = t.event) || void 0 === e
                ? void 0
                : e.GetContentHubType(),
            hubcategory:
              null === (a = t.event) || void 0 === a
                ? void 0
                : a.GetContentHubCategory(),
            hubtagid:
              null === (i = t.event) || void 0 === i
                ? void 0
                : i.GetContentHubTag(),
            tabuniqueid: t.tabuniqueid,
            tabfilter: t.tabfilter,
            rt_now_override_test: h.HD.BHasTimeOverride()
              ? h.HD.GetTimeNowWithOverride()
              : void 0,
          };
        }
        GetStreamsLookupKeyFromDef(t) {
          return this.GetStreamsLookupKeyFromParam(
            this.MapEmbeddableStreamToRequest(t),
          );
        }
        GetStreamsLookupKeyFromParam(t) {
          return JSON.stringify(t);
        }
        static Get() {
          return (
            y.s_GlobalStore ||
              ((y.s_GlobalStore = new y()), y.s_GlobalStore.Init()),
            y.s_GlobalStore
          );
        }
        Init() {}
      }
      function B(t) {
        return t.current_selection_priority || S.mY.k_eGeneral;
      }
      function f(t) {
        t.sort((t, e) =>
          B(t) != B(e)
            ? B(e) - B(t)
            : t.viewer_count != e.viewer_count
              ? e.viewer_count - t.viewer_count
              : e.accountid - t.accountid,
        );
      }
      async function v(t, e, a) {
        if (t > 0 && 7 != t && a) {
          let i = new URLSearchParams();
          i.append("page_action", "" + e),
            i.append("snr", a),
            o().post(
              u.TS.STORE_BASE_URL + "ajaxreportproductaction/" + t + "/",
              i,
            );
        }
      }
      (0, i.Cg)([n.sH], y.prototype, "m_lookupStreams", void 0),
        (0, i.Cg)([n.sH], y.prototype, "m_playReadyStream", void 0),
        (0, i.Cg)([n.sH], y.prototype, "m_pageChatStatus", void 0),
        (0, i.Cg)([n.sH], y.prototype, "m_streamChatStatus", void 0),
        (0, i.Cg)([n.sH], y.prototype, "m_bUserChatExpanded", void 0),
        (0, i.Cg)(
          [n.sH],
          y.prototype,
          "m_bUserPreferenceHideBroadcastByDefault",
          void 0,
        ),
        (0, i.Cg)([n.sH], y.prototype, "m_bCollapsed", void 0),
        (0, i.Cg)(
          [n.XI],
          y.prototype,
          "HintLoadEmbeddablePreviewStreams",
          null,
        ),
        (0, i.Cg)([n.XI], y.prototype, "AttemptToPlayStream", null);
      const C = new p.T();
    },
    60727: (t, e, a) => {
      a.d(e, { l: () => m, m: () => d });
      var i = a(34629),
        r = a(14947),
        s = a(17720),
        o = a(44165),
        n = a(91254);
      class d {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, r.Gn)(this);
        }
        static GetBBCodeParam(t, e, a = "") {
          const i = new RegExp(`\\W${e}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(t);
          return i ? i[1] : a;
        }
        static ParseCalendarEventPresentersFromText(t) {
          const e = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const i = e.exec(t);
            if (null === i) break;
            const r = i[1],
              o = i[2],
              n = d.GetBBCodeParam(r, "steamid"),
              m = {
                steamID: n ? new s.b(n) : void 0,
                name: d.GetBBCodeParam(r, "name"),
                title: d.GetBBCodeParam(r, "title"),
                company: d.GetBBCodeParam(r, "company"),
                photo: d.GetBBCodeParam(r, "photo"),
                bio: o,
              };
            a.push(m);
          }
          return a;
        }
        static ParseEventModelPresenters(t, e) {
          const a = t.GetDescriptionWithFallback(e);
          return d.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(t) {
          const e = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const i = e.exec(t);
            if (null === i) break;
            const r = i[1];
            a.add(Number(r));
          }
          return a;
        }
        static ParseEventModelAppReferences(t, e) {
          var a;
          const i = t.GetDescriptionWithFallback(e),
            r = d.ParseEventAppReferencesFromText(i);
          if (
            null === (a = t.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const e of t.jsondata.referenced_appids) r.add(e);
          return r;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(t) {
          const e = o.HD.GetTimeNowWithOverride(),
            a = t.GetCalendarItemsInTimeRange(e - 3600, e);
          for (const t of a.rgCalendarItems)
            n.O3.QueueLoadPartnerEvent(t.clanid, t.unique_id);
          const i = a.rgCalendarItems.map((t) =>
              n.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                s.b.InitFromClanID(t.clanid),
                t.unique_id,
                0,
              ),
            ),
            r = await Promise.all(i),
            d = new Map();
          for (const t of r)
            if (t && !(t.endTime && t.endTime < e))
              for (const e of t.GetBroadcastWhitelistAsSteamIDs())
                d.has(e) ? d.get(e).push(t) : d.set(e, [t]);
          return d;
        }
        IsBroadcasterAlreadyBound(t, e) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(t),
            i = a ? a.length : 0;
          if ((e ? e.length : 0) != i) return !1;
          for (let t = 0; t < i; t++) if (a[t] != e[t].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(t, e) {
          let a = new Map();
          for (const i of t) {
            if (!i) continue;
            const t = d.ParseEventModelPresenters(i, e);
            for (const e of t)
              e.steamID && a.set(e.steamID.ConvertTo64BitString(), e);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(t) {
          const e = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, i) => {
            t.has(i) || e.push(i);
          }),
            e.forEach((t) => {
              this.m_mapBroadcasterSteamIDData.delete(t),
                this.m_mapBroadcasterSteamIDToEvents.delete(t);
            });
        }
        static BuildAppIDRefsForEventList(t, e) {
          const a = new Set();
          for (const i of t) {
            d.ParseEventModelAppReferences(i, e).forEach((t) => a.add(t));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(t, e) {
          t.forEach((t, a) => {
            if (this.IsBroadcasterAlreadyBound(a, t)) return;
            const i = {
              m_mapPresenters: d.BuildSteamIDToPresenterMapFromEventList(t, e),
              m_rgAppIDs: d.BuildAppIDRefsForEventList(t, e),
            };
            this.m_mapBroadcasterSteamIDData.set(a, i),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                t.map((t) => t.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(t, e) {
          const a = await this.BuildBroadcasterSteamIDToActiveEventMap(t);
          this.RemoveCachedDataIfNotInMap(a),
            this.UpdateCachedDataFromEvents(a, e);
        }
        GetPresenterMapForBroadcasterSteamID(t) {
          var e;
          return null === (e = this.m_mapBroadcasterSteamIDData.get(t)) ||
            void 0 === e
            ? void 0
            : e.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(t) {
          var e;
          return null === (e = this.m_mapBroadcasterSteamIDData.get(t)) ||
            void 0 === e
            ? void 0
            : e.m_rgAppIDs;
        }
      }
      (0, i.Cg)([r.sH], d.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const m = new d();
    },
    61556: (t, e, a) => {
      a.d(e, { es: () => nt, fK: () => $, a0: () => Q, fO: () => Y });
      var i = a(34629),
        r = a(41735),
        s = a.n(r),
        o = a(14947),
        n = a(3067),
        d = a(4299);
      function m(t, e, a) {
        return [t, e, a];
      }
      class l extends Error {}
      class c extends d.J8 {
        constructor(t) {
          super(), (this.m_appid = t || 0);
        }
        GetAppID() {
          return this.m_appid;
        }
        parseColor(t) {
          if ("string" != typeof t || !t.match(/^#[0-9a-fA-F]{6}$/))
            throw new l("expected color string");
          return [
            parseInt(t.substring(1, 3), 16),
            parseInt(t.substring(3, 5), 16),
            parseInt(t.substring(5, 7), 16),
          ];
        }
        parseString(t) {
          if ("string" == typeof t) return t;
          throw new l("expected string");
        }
        parseNumber(t) {
          if ("number" == typeof t) return t;
          throw new l("expected number");
        }
        parseDate(t) {
          if ("number" == typeof t) return new Date(t);
          throw new l("expected timestamp");
        }
        parseArray(t, e) {
          let a = [];
          if ("object" != typeof t || !Array.isArray(t))
            throw new l("expected array");
          let i = t.length;
          for (let r = 0; r < i; ++r)
            try {
              a.push(e(t[r]));
            } catch (t) {
              throw ((t.message += "\n...while parsing array element " + r), t);
            }
          return a;
        }
        parseDict(t, e) {
          let a = new Map();
          if ("object" != typeof t || Array.isArray(t))
            throw new l("expected object");
          for (let i in t)
            try {
              a.set(i, e(t[i]));
            } catch (t) {
              throw (
                ((t.message += "\n...while parsing dictionary element " + i), t)
              );
            }
          return a;
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
          let a = [],
            i = [];
          for (const r of t)
            r.persistent
              ? (i.length > 0 &&
                  (i[i.length - 1].nTimeEnd = this.convertTime(r.Timestamp, e)),
                r.name.length > 0 &&
                  i.push({
                    strTemplateName: r.name,
                    nTimeStart: this.convertTime(r.Timestamp, e),
                    nTimeEnd: -1,
                    color: m(r.color_r, r.color_g, r.color_b),
                  }))
              : a.push({
                  strTemplateName: r.name,
                  nTime: this.convertTime(r.Timestamp, e),
                  color: m(r.color_r, r.color_g, r.color_b),
                });
          return { rgMarkers: a, rgSegments: i };
        }
        UpdateRegions(t) {
          let e = [];
          for (const a of t)
            e.push({
              strTemplateName: a.name,
              min: { x: a.min_x, y: a.min_y },
              max: { x: a.max_x, y: a.max_y },
              behavior: a.behavior,
            });
          return e;
        }
        UpdateSoundtrack(t, e) {}
      }
      var h = a(36064),
        p = a(47143),
        _ = a(25489),
        u = a(78327),
        S = a(6419),
        g = a(81952),
        b = a(36586),
        y = a(6144),
        B = a(37085);
      class f {
        constructor(t) {
          (this.m_peerConnection = null),
            (this.m_strBroadcastSteamID = ""),
            (this.m_ulWebRTCSessionID = ""),
            (this.m_schCandidateTimer = new y.LU()),
            (this.m_nHostCandidateGeneration = 0),
            (this.m_nCandidateUpdateIntervalMS = 0),
            (this.m_listeners = new y.Ji()),
            (this.m_bFirstPlay = !0),
            (this.m_bStatsViewVisible = !1),
            (this.m_schCaptureDisplayStatsTrigger = new y.LU()),
            (this.m_stats = new g._L()),
            (0, o.Gn)(this),
            (this.m_elVideo = t);
        }
        async PlayMPD(t, e, a) {}
        async PlayWebRTC(t, e, a, i, r) {
          (this.m_strBroadcastSteamID = t),
            (this.m_ulWebRTCSessionID = a),
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
          const o = new RTCPeerConnection({
            iceServers: [
              { urls: ["stun:" + i] },
              { urls: ["turn:" + i], username: e, credential: a },
            ],
            iceTransportPolicy: "relay",
          });
          (this.m_peerConnection = o),
            (o.oniceconnectionstatechange = ((t) => {
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
            (o.onicecandidate = ((t) => {
              if (t.candidate) {
                const e = new FormData();
                e.append("broadcaststeamid", this.m_strBroadcastSteamID),
                  e.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                  e.append("sdp_mid", String(t.candidate.sdpMid)),
                  e.append(
                    "sdp_mline_index",
                    String(t.candidate.sdpMLineIndex),
                  ),
                  e.append("candidate", t.candidate.candidate),
                  s()
                    .post(
                      `${u.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                      e,
                    )
                    .then((t) => {
                      const e = t.data;
                      (e.success && e.success == B.R) ||
                        console.log(
                          "Failed to add a WebRTC session ICE candidate: " +
                            String(e.success),
                        );
                    })
                    .catch((t) =>
                      console.log(
                        "Failed to add a WebRTC session ICE candidate" + t,
                      ),
                    );
              }
            }).bind(this)),
            (o.ontrack = ((t) => {
              "video" === t.track.kind &&
                ((this.m_elVideo.src = ""),
                (this.m_elVideo.srcObject = t.streams[0]),
                this.Play());
            }).bind(this)),
            o.setRemoteDescription({ type: "offer", sdp: r }).then(async () => {
              var t, e;
              await o.setLocalDescription(await o.createAnswer());
              const a = new FormData();
              a.append("broadcaststeamid", this.m_strBroadcastSteamID),
                a.append("webrtc_session_id", this.m_ulWebRTCSessionID),
                a.append(
                  "answer",
                  null !==
                    (e =
                      null === (t = o.localDescription) || void 0 === t
                        ? void 0
                        : t.sdp) && void 0 !== e
                    ? e
                    : "",
                );
              try {
                await s()
                  .post(
                    `${u.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`,
                    a,
                  )
                  .then((t) => {
                    const e = t.data;
                    if (!e.success || e.success != B.R)
                      throw new Error(String(e.success));
                  });
              } catch (t) {
                return (
                  console.log("Failed to set the WebRTC session answer: " + t),
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
          const t = new FormData();
          t.append("broadcaststeamid", this.m_strBroadcastSteamID),
            t.append("webrtc_session_id", this.m_ulWebRTCSessionID),
            t.append(
              "candidate_generation",
              String(this.m_nHostCandidateGeneration),
            );
          try {
            await s()
              .post(
                `${u.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`,
                t,
              )
              .then((t) => {
                const e = t.data,
                  a = e.data,
                  i = this.m_peerConnection;
                if (!e.success || e.success != B.R)
                  throw new Error(String(e.success));
                i && a.candidate_generation > this.m_nHostCandidateGeneration
                  ? (a.candidates.forEach((t) => {
                      const e = new RTCIceCandidate({
                        sdpMid: t.sdp_mid,
                        sdpMLineIndex: t.sdp_mline_index,
                        candidate: t.candidate,
                      });
                      i.addIceCandidate(e).catch((t) => console.error(t));
                    }),
                    (this.m_nHostCandidateGeneration = a.candidate_generation))
                  : this.m_nHostCandidateGeneration > 0 &&
                    (this.m_nCandidateUpdateIntervalMS *= 2);
              });
          } catch (t) {
            return (
              console.log("Failed to get WebRTC session ICE candidates" + t),
              void this.OnWebRTCConnectionRetry()
            );
          }
          this.m_schCandidateTimer.Schedule(
            this.m_nCandidateUpdateIntervalMS,
            () => this.GetHostCandidates(),
          );
        }
        DispatchEvent(t, e = null) {
          let a = new CustomEvent(t, {
            cancelable: !0,
            bubbles: !0,
            detail: e,
          });
          this.m_elVideo.dispatchEvent(a);
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
          const a = () => {
            (e = !0),
              this.m_stats
                .GetFPSMonitor()
                .StartTracking(() =>
                  this.m_stats.ExtractFrameInfo(this.m_elVideo),
                );
          };
          try {
            await this.m_elVideo.play(), a();
          } catch (t) {
            t.name;
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
          (t = _.OQ(t, 0, 1)), (this.m_elVideo.volume = t);
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
                250,
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
              250,
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
      (0, i.Cg)([S.o], f.prototype, "PlayWebRTC", null),
        (0, i.Cg)([o.XI.bound], f.prototype, "CaptureStatsForDisplay", null),
        (0, i.Cg)([S.o], f.prototype, "OnVideoPause", null),
        (0, i.Cg)([S.o], f.prototype, "OnVideoResize", null);
      var v,
        C,
        w,
        I = a(22837),
        D = a(55815),
        T = a(62490),
        k = a(81393),
        V = a(61859),
        M = a(68797),
        R = a(7860),
        G = a(41833),
        P = a(56545),
        O = a(96059),
        A = a(80613),
        E = a.n(A),
        U = a(89068);
      class H extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            H.prototype.video_id || U.Sg(H.M()),
            A.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  video_id: {
                    n: 1,
                    br: U.qM.readUint64String,
                    bw: U.gp.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: U.qM.readUint32,
                    bw: U.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = U.w0(H.M())), H.sm_mbf;
        }
        toObject(t = !1) {
          return H.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(H.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(H.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new H();
          return H.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(H.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(H.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return H.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class W extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            W.prototype.video_id || U.Sg(W.M()),
            A.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  video_id: {
                    n: 1,
                    br: U.qM.readUint64String,
                    bw: U.gp.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: U.qM.readString,
                    bw: U.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = U.w0(W.M())), W.sm_mbf;
        }
        toObject(t = !1) {
          return W.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(W.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(W.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new W();
          return W.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(W.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(W.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return W.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class L extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            L.prototype.encryption_key || U.Sg(L.M()),
            A.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: U.qM.readBytes,
                    bw: U.gp.writeBytes,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = U.w0(L.M())), L.sm_mbf;
        }
        toObject(t = !1) {
          return L.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(L.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(L.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new L();
          return L.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(L.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(L.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return L.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class F extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            F.prototype.app_id || U.Sg(F.M()),
            A.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  app_id: { n: 1, br: U.qM.readUint32, bw: U.gp.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: U.qM.readUint32,
                    bw: U.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = U.w0(F.M())), F.sm_mbf;
        }
        toObject(t = !1) {
          return F.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(F.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(F.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new F();
          return F.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(F.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(F.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return F.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class z extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            z.prototype.app_id || U.Sg(z.M()),
            A.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  app_id: { n: 1, br: U.qM.readUint32, bw: U.gp.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: U.qM.readString,
                    bw: U.gp.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = U.w0(z.M())), z.sm_mbf;
        }
        toObject(t = !1) {
          return z.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(z.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(z.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new z();
          return z.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(z.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(z.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return z.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class N extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            N.prototype.app_id || U.Sg(N.M()),
            A.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  app_id: { n: 1, br: U.qM.readUint32, bw: U.gp.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: U.qM.readUint32,
                    bw: U.gp.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: U.qM.readUint64String,
                    bw: U.gp.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: U.qM.readUint64String,
                    bw: U.gp.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: U.qM.readUint64String,
                    bw: U.gp.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: U.qM.readUint32,
                    bw: U.gp.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: U.qM.readBool,
                    bw: U.gp.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: U.qM.readBool,
                    bw: U.gp.writeBool,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = U.w0(N.M())), N.sm_mbf;
        }
        toObject(t = !1) {
          return N.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(N.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(N.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new N();
          return N.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(N.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(N.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return N.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class x extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            x.prototype.bookmarks || U.Sg(x.M()),
            A.Message.initialize(this, t, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { bookmarks: { n: 1, c: N, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = U.w0(x.M())), x.sm_mbf;
        }
        toObject(t = !1) {
          return x.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(x.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(x.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new x();
          return x.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(x.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(x.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return x.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class j extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            j.prototype.appids || U.Sg(j.M()),
            A.Message.initialize(this, t, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: U.qM.readUint32,
                    pbr: U.qM.readPackedUint32,
                    bw: U.gp.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
                    br: U.qM.readUint32,
                    bw: U.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = U.w0(j.M())), j.sm_mbf;
        }
        toObject(t = !1) {
          return j.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(j.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(j.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new j();
          return j.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(j.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(j.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return j.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class q extends A.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            q.prototype.bookmarks || U.Sg(q.M()),
            A.Message.initialize(this, t, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { bookmarks: { n: 1, c: N, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = U.w0(q.M())), q.sm_mbf;
        }
        toObject(t = !1) {
          return q.toObject(t, this);
        }
        static toObject(t, e) {
          return U.BT(q.M(), t, e);
        }
        static fromObject(t) {
          return U.Uq(q.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (E().BinaryReader)(t),
            a = new q();
          return q.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return U.zj(q.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (E().BinaryWriter)();
          return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          U.i0(q.M(), t, e);
        }
        serializeBase64String() {
          var t = new (E().BinaryWriter)();
          return q.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (t) {
        (t.ClientGetVideoURL = function (t, e, a) {
          return t.SendMsg("Video.ClientGetVideoURL#1", (0, P.I8)(H, e, a), W, {
            ePrivilege: 1,
          });
        }),
          (t.SetVideoBookmark = function (t, e) {
            return t.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, P.I8)(x, e),
              { ePrivilege: 1 },
            );
          }),
          (t.GetVideoBookmarks = function (t, e, a) {
            return t.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, P.I8)(j, e, a),
              q,
              { ePrivilege: 1 },
            );
          });
      })(v || (v = {})),
        (function (t) {
          t.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: L,
          };
        })(C || (C = {})),
        (function (t) {
          t.ClientGetOPFSettings = function (t, e, a) {
            return t.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, P.I8)(F, e, a),
              z,
              { ePrivilege: 1 },
            );
          };
        })(w || (w = {}));
      class K {
        constructor() {
          (this.m_transport = null), (this.m_mapBookmarks = new Map());
        }
        SetBookmarkForApp(t, e) {
          this.ValidateBookmarkData(e)
            ? this.m_mapBookmarks.set(t, N.fromObject(e))
            : this.InitializeBookmarkForApp(t);
        }
        ValidateBookmarkData(t) {
          const e = t;
          return (
            "object" == typeof e &&
            Number.isInteger(e.playback_position_in_seconds) &&
            Number.isInteger(e.app_id)
          );
        }
        InitializeBookmarkForApp(t) {
          if (!this.m_mapBookmarks.has(t)) {
            let e = {
              app_id: t,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(t, new N(e));
          }
        }
        GetBookmarkPlayTimeInSeconds(t) {
          let e = this.m_mapBookmarks.get(t);
          if (e) {
            let t = e.playback_position_in_seconds();
            if (Number.isInteger(t)) return t;
          }
          return 0;
        }
        async SendBookMarkedTimeToServer(t, e, a, i, r) {
          if (!u.iA.logged_in) return;
          if (!this.m_transport)
            return void console.warn(
              "CVideoBookmarkStore:SetBookMark no auth token / transport",
            );
          const s = P.w.Init(x);
          let o = this.m_mapBookmarks.get(t);
          if (o) {
            let n = !1;
            o.app_id() != t && ((n = !0), o.set_app_id(t)),
              o.playback_position_in_seconds() != e &&
                ((n = !0), o.set_playback_position_in_seconds(e)),
              (a = a || "0"),
              o.video_track_id() != a && (o.set_video_track_id(a), (n = !0)),
              (i = i || "0"),
              o.audio_track_id() != i && (o.set_audio_track_id(i), (n = !0)),
              (r = r || "0") != o.timedtext_track_id() &&
                (o.set_timedtext_track_id(r), (n = !0)),
              n &&
                (s.Body().add_bookmarks(o),
                v.SetVideoBookmark(this.m_transport, s));
          }
        }
        static Get() {
          return (
            K.s_VODStore || ((K.s_VODStore = new K()), K.s_VODStore.Init()),
            K.s_VODStore
          );
        }
        Init() {
          u.iA.logged_in && this.LoadWatchVideoOAuthToken();
        }
        async LoadWatchVideoOAuthToken() {
          const t =
              "community" == (0, u.yK)()
                ? u.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                : u.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
            e = {};
          try {
            let a = await s().get(t, { params: e, withCredentials: !0 });
            if (
              a &&
              200 == a.status &&
              a.data &&
              a.data.success == B.R &&
              a.data.webapi_token
            )
              return void (this.m_transport = new O.D(
                u.TS.WEBAPI_BASE_URL,
                a.data.webapi_token,
              ).GetServiceTransport());
          } catch (t) {
            let e = (0, M.H)(t);
            console.error(
              "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                e.strErrorMsg,
              e,
            );
          }
        }
      }
      class J {
        constructor(t) {
          this.m_appid = t;
        }
        async SetBookmark(t, e, a, i) {
          u.iA.logged_in &&
            K.Get().SendBookMarkedTimeToServer(
              this.m_appid,
              Math.floor(t),
              e,
              a,
              i,
            );
        }
        GetBeginPlaytime() {
          return u.iA.logged_in
            ? K.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
      var X = a(66703);
      const Y = 7;
      var $, Q;
      !(function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Unlocking = 1)] = "Unlocking"),
          (t[(t.Loading = 2)] = "Loading"),
          (t[(t.Ready = 3)] = "Ready"),
          (t[(t.Error = 4)] = "Error");
      })($ || ($ = {}));
      class Z {
        constructor() {
          (this.m_rtUnlockTime = 0), (this.m_schUnlockTimeout = new y.LU());
        }
        UnlockH264(t, e) {
          this.BCanUnlockH264()
            ? (t.SetState($.Unlocking, ""),
              console.log("Unlocking H.264 for broadcast video playback"),
              this.RequestUnlockH264(),
              (this.m_broadcast = t),
              (this.m_video = e),
              (this.m_rtUnlockTime = Date.now()),
              this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ))
            : t.SetState($.Error, (0, V.we)("#BroadcastWatch_MinBrowser"));
        }
        BCanUnlockH264() {
          return (0, X.Dp)("RemotePlay.UnlockH264")
            ? (console.log("Client supports direct H.264 unlock"), !0)
            : (0, X.Dp)("BrowserView.PostMessageToParent")
              ? (console.log("Client supports browserview H.264 unlock"), !0)
              : (console.log("Client does not support H.264 unlock"), !1);
        }
        RequestUnlockH264() {
          (0, X.Dp)("RemotePlay.UnlockH264")
            ? (console.log("Requesting direct H.264 unlock"),
              SteamClient.RemotePlay.UnlockH264())
            : (0, X.Dp)("BrowserView.PostMessageToParent")
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
          if (this.m_broadcast.m_eWatchState != $.Unlocking) return;
          if ((0, h.Mc)() || (0, h.aM)())
            return (
              console.log("Unlocking H.264 successful"),
              this.m_broadcast.SetState($.None, ""),
              void this.m_video.Restart()
            );
          Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                "Unlocking H.264 timed out (Steam client or servers offline?)",
              ),
              this.m_broadcast.SetState(
                $.Error,
                (0, V.we)("#BroadcastWatch_MinBrowser"),
              ))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              );
        }
      }
      class tt {
        constructor() {
          (this.m_steamIDBroadcast = ""),
            (this.m_ulBroadcastID = ""),
            (this.m_ulViewerToken = ""),
            (this.m_strCDNAuthUrlParameters = void 0),
            (this.m_bWebRTC = !1),
            (this.m_eWatchState = $.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (this.m_schManifestTimeout = new y.LU()),
            (this.m_schHeartbeatTimeout = new y.LU()),
            (0, o.Gn)(this);
        }
        SetState(t, e = "") {
          (this.m_eWatchState = t),
            (this.m_strStateDescription = e),
            t == $.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, i.Cg)([o.sH], tt.prototype, "m_ulBroadcastID", void 0),
        (0, i.Cg)([o.sH], tt.prototype, "m_eWatchState", void 0),
        (0, i.Cg)([o.sH], tt.prototype, "m_strStateDescription", void 0),
        (0, i.Cg)([o.XI], tt.prototype, "SetState", null);
      class et {
        constructor(t) {
          (this.m_steamIDBroadcast = ""),
            (this.m_bInitialized = !1),
            (this.m_strTitle = ""),
            (this.m_strAppId = "" + Y),
            (this.m_nAppID = Y),
            (this.m_strAppTitle = ""),
            (this.m_strThumbnailUrl = ""),
            (this.m_nViewerCount = 0),
            (this.m_bIsOnline = !1),
            (this.m_schUpdateTimeout = new y.LU()),
            (this.m_nRefCount = 0),
            (0, o.Gn)(this),
            (this.m_steamIDBroadcast = t);
        }
      }
      (0, i.Cg)([o.sH], et.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_strTitle", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_strAppId", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_nAppID", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_strAppTitle", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_strThumbnailUrl", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_nViewerCount", void 0),
        (0, i.Cg)([o.sH], et.prototype, "m_bIsOnline", void 0);
      class at {
        constructor() {
          (this.m_eWatchState = $.None),
            (this.m_strStateDescription = ""),
            (this.m_rgVideos = []),
            (0, o.Gn)(this);
        }
        SetState(t, e = "") {
          (this.m_eWatchState = t),
            (this.m_strStateDescription = e),
            t == $.Error && console.log(this.m_strStateDescription);
        }
      }
      (0, i.Cg)([o.sH], at.prototype, "m_eWatchState", void 0),
        (0, i.Cg)([o.sH], at.prototype, "m_strStateDescription", void 0),
        (0, i.Cg)([o.XI], at.prototype, "SetState", null);
      class it extends at {}
      class rt extends at {}
      class st {
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
            (this.m_schSaveSettings = new y.LU()),
            (this.m_broadcastInfos = {}),
            (0, o.Gn)(this),
            this.LoadBroadcastSettings();
        }
        GetBroadcastState(t) {
          if (t.IsBroadcastClip()) {
            let e = this.m_mapClips.get(t.GetBroadcastClipID());
            return e ? e.m_eWatchState : $.None;
          }
          if (t.IsBroadcastVOD()) {
            const e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
            return e ? e.m_eWatchState : $.None;
          }
          {
            let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            return e ? e.m_eWatchState : $.None;
          }
        }
        GetBroadcastStateDescription(t) {
          if (t.IsBroadcastClip()) {
            let e = this.m_mapClips.get(t.GetBroadcastClipID());
            return e ? e.m_strStateDescription : "";
          }
          if (t.IsBroadcastVOD()) {
            const e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
            return e ? e.m_strStateDescription : "";
          }
          {
            let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            return e ? e.m_strStateDescription : "";
          }
        }
        CreateBroadcastVideo(t, e, a, i) {
          let r = this.GetOrCreateBroadcast(e),
            { nVolume: s, bMuted: o } = this.m_broadcastSettings,
            n = new ot(t, s, o, a);
          if (
            (n.SetBroadcastSteamID(e),
            r.m_rgVideos.push(n),
            (r.m_bWebRTC = i),
            !(0, h.Mc)() && !(0, h.aM)())
          ) {
            return new Z().UnlockH264(r, n), n;
          }
          return n;
        }
        CreateClipVideo(t, e, a) {
          let i = this.GetOrCreateClip(e),
            { nVolume: r, bMuted: s } = this.m_broadcastSettings,
            o = new ot(t, r, s, a);
          if (
            (o.SetBroadcastClipID(e),
            i.m_rgVideos.push(o),
            !(0, h.Mc)() && !(0, h.aM)())
          ) {
            return new Z().UnlockH264(i, o), o;
          }
          return o;
        }
        CreateVODVideo(t, e, a) {
          let i = this.GetOrCreateVOD(e),
            { nVolume: r, bMuted: s } = this.m_broadcastSettings,
            o = new ot(t, r, s, a);
          if (
            (o.SetBroadcastAppIDVOD(e),
            i.m_rgVideos.push(o),
            !(0, h.Mc)() && !(0, h.aM)())
          ) {
            return new Z().UnlockH264(i, o), o;
          }
          return o;
        }
        StartVideo(t) {
          if (t.IsBroadcastClip()) {
            console.log(`Starting clip for ${t.GetBroadcastClipID()}`);
            let e = this.m_mapClips.get(t.GetBroadcastClipID());
            if (!e) return;
            this.SetActiveVideo(t),
              e.m_eWatchState == $.None
                ? this.GetClipManifest(e, t.GetWatchLocation())
                : e.m_eWatchState == $.Ready && t.StartClip(e);
          } else if (t.IsBroadcastVOD()) {
            console.log(`Starting VOD for ${t.GetBroadcastAppIDVOD()}`);
            let e = this.m_mapVODs.get(t.GetBroadcastAppIDVOD());
            if (!e) return;
            this.SetActiveVideo(t),
              e.m_eWatchState == $.None
                ? this.GetVODManifest(e, t.GetWatchLocation())
                : e.m_eWatchState == $.Ready && t.StartVOD(e);
          } else {
            let e = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
            if (!e) return;
            this.SetActiveVideo(t),
              e.m_eWatchState == $.None
                ? this.GetBroadcastManifest(e, t.GetWatchLocation())
                : e.m_eWatchState == $.Ready && t.StartBroadcast(e);
          }
        }
        SetActiveVideo(t) {
          this.m_mapBroadcasts.forEach((e) => {
            for (let a of e.m_rgVideos) a != t && a.StopPlaybackTillUserInput();
          }),
            this.m_mapClips.forEach((e) => {
              for (let a of e.m_rgVideos)
                a != t && a.StopPlaybackTillUserInput();
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
            a = this.m_mapBroadcasts.get(e);
          t.Stop(),
            a &&
              (a.m_ulBroadcastID &&
                (async function (t, e, a) {
                  if (!e) return;
                  let i = new FormData();
                  i.append("steamid", t),
                    i.append("broadcastid", e),
                    i.append("viewertoken", a);
                  try {
                    await s().post(
                      u.TS.CHAT_BASE_URL + "broadcast/stopwatching",
                      i,
                    );
                  } catch {}
                })(
                  e,
                  a.m_ulBroadcastID,
                  this.m_broadcastSettings.ulViewerToken,
                ),
              T.Wp(a.m_rgVideos, (e) => e == t),
              this.RemoveBroadcastIfUnused(a));
        }
        StartInfo(t) {
          const e = this.GetOrCreateBroadcastInfo(t);
          return (
            e.m_nRefCount++,
            (e.m_bInitialized && e.m_schUpdateTimeout.IsScheduled()) ||
              this.LoadBroadcastInfo(e),
            e
          );
        }
        StopInfo(t) {
          t.m_nRefCount--;
        }
        GetOrCreateBroadcastInfo(t) {
          if (!t) {
            return new et("");
          }
          if (!this.m_broadcastInfos[t]) {
            const e = (0, o.sH)(new et(t));
            this.m_broadcastInfos[t] = e;
          }
          return this.m_broadcastInfos[t];
        }
        GetOrCreateBroadcast(t) {
          let e = this.m_mapBroadcasts.get(t);
          return (
            e ||
            ((e = new tt()),
            (e.m_steamIDBroadcast = t),
            (e.m_eWatchState = $.None),
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
            ((e = new it()),
            (e.m_clipID = t),
            (e.m_eWatchState = $.None),
            this.m_mapClips.set(t, e),
            e)
          );
        }
        GetOrCreateVOD(t) {
          let e = this.m_mapVODs.get(t);
          return (
            e ||
            ((e = new rt()),
            (e.m_nAppIDVOD = t),
            (e.m_eWatchState = $.None),
            this.m_mapVODs.set(t, e),
            e)
          );
        }
        async LoadBroadcastInfo(t) {
          let e = "0",
            a = this.m_mapBroadcasts.get(t.m_steamIDBroadcast);
          if ((a && (e = a.m_ulBroadcastID), 0 == t.m_nRefCount)) return;
          const i = {
            steamid: t.m_steamIDBroadcast,
            broadcastid: e,
            location:
              a &&
              a.m_rgVideos &&
              a.m_rgVideos[0] &&
              a.m_rgVideos[0].GetWatchLocation(),
          };
          try {
            const e = await s().get(
              `${u.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
              { params: i },
            );
            if (!e || !e.data || !e.data.success || e.data.success != B.R)
              return void (t.m_bInitialized = !0);
            const a = e.data;
            (0, o.h5)(() => {
              (t.m_bInitialized = !0),
                (t.m_strTitle = a.title),
                (t.m_strAppId = a.appid),
                (t.m_nAppID = Number.parseInt(a.appid)),
                (t.m_strAppTitle = a.app_title),
                (t.m_strThumbnailUrl = a.thumbnail_url),
                (t.m_nViewerCount = a.viewer_count),
                (t.m_bIsOnline = a.is_online),
                !t.m_strTitle &&
                  n.td &&
                  ((t.m_strTitle = n.td.name),
                  (t.m_strAppTitle = n.td.appName || n.td.name));
              const e = a.update_interval;
              e &&
                "number" == typeof e &&
                t.m_schUpdateTimeout.Schedule(1e3 * e, () =>
                  this.LoadBroadcastInfo(t),
                );
            });
          } catch (t) {
            console.error(t);
          }
        }
        DelayedGetBroadcastManifest(t, e, a = Date.now()) {
          t.m_schManifestTimeout.Schedule(5e3, () =>
            this.GetBroadcastManifest(t, e, a),
          );
        }
        async GetBroadcastManifest(t, e, a = Date.now()) {
          t.SetState($.Loading, "");
          let i = {
              steamid: t.m_steamIDBroadcast,
              broadcastid: 0,
              viewertoken: this.m_broadcastSettings.ulViewerToken,
              watchlocation: e,
              sessionid: (0, u.KC)(),
              is_webrtc: t.m_bWebRTC,
            },
            r = null;
          try {
            r = await s().get(
              u.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/",
              { params: i, withCredentials: !0 },
            );
          } catch (t) {
            let e = (0, M.H)(t);
            console.error(
              "Failed to get broadcast manifest!" + e.strErrorMsg,
              e,
            );
          }
          if (!r || 200 != r.status)
            return void t.SetState(
              $.Error,
              (0, V.we)("#BroadcastWatch_RequestFailed"),
            );
          let o = r.data;
          o.viewertoken && this.SetViewerToken(o.viewertoken);
          let n = o.success;
          if ("ready" == n)
            t.SetState($.Ready),
              (t.m_ulBroadcastID = o.broadcastid),
              (t.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
              (t.m_strCDNAuthUrlParameters = o.cdn_auth_url_parameters),
              (t.m_bWebRTC = o.is_webrtc),
              (t.m_data = o),
              this.LoadBroadcast(t),
              setTimeout(() => {
                t.m_schHeartbeatTimeout.Schedule(
                  1e3 * t.m_data.heartbeat_interval,
                  () => this.HeartbeatBroadcast(t),
                );
              }, 3e4 * Math.random());
          else if ("waiting" == n) {
            t.SetState(
              $.Loading,
              (0, V.we)("#BroadcastWatch_WaitingForResponse"),
            );
            let i = Date.now() - a;
            if (i > 6e4)
              return void t.SetState(
                $.Error,
                (0, V.we)("#BroadcastWatch_NotAvailable"),
              );
            let r = i > 3e4 ? o.retry : 5e3;
            t.m_schManifestTimeout.Schedule(r, () =>
              this.GetBroadcastManifest(t, e, a),
            );
          } else
            "waiting_for_start" == n
              ? (t.SetState(
                  $.Loading,
                  (0, V.we)("#BroadcastWatch_WaitingForStart"),
                ),
                t.m_schManifestTimeout.Schedule(o.retry, () =>
                  this.GetBroadcastManifest(t, e, a),
                ))
              : "waiting_for_reconnect" == n
                ? (t.SetState(
                    $.Loading,
                    (0, V.we)("#BroadcastWatch_WaitingForReconnect"),
                  ),
                  t.m_schManifestTimeout.Schedule(o.retry, () =>
                    this.GetBroadcastManifest(t, e, a),
                  ))
                : "end" == n
                  ? t.SetState(
                      $.Error,
                      (0, V.we)("#BroadcastWatch_NotAvailable"),
                    )
                  : "too_many_broadcasts" == n
                    ? t.SetState(
                        $.Error,
                        (0, V.we)("#BroadcastWatch_TooManyBroadcasts"),
                      )
                    : "system_not_supported" == n
                      ? t.SetState(
                          $.Error,
                          (0, V.we)("#BroadcastWatch_SystemNotSupported"),
                        )
                      : "user_restricted" == n
                        ? t.SetState(
                            $.Error,
                            (0, V.we)("#BroadcastWatch_UserRestricted"),
                          )
                        : "poor_upload_quality" == n
                          ? t.SetState(
                              $.Error,
                              (0, V.we)("#BroadcastWatch_PoorUploadQuality"),
                            )
                          : "request_failed" == n
                            ? t.SetState(
                                $.Error,
                                (0, V.we)("#BroadcastWatch_RequestFailed"),
                              )
                            : "too_many_viewers" == n
                              ? t.SetState(
                                  $.Error,
                                  (0, V.we)("#BroadcastWatch_TooManyViewers"),
                                )
                              : t.SetState(
                                  $.Error,
                                  (0, V.we)("#BroadcastWatch_NotAvailable"),
                                );
        }
        async GetClipManifest(t, e) {
          t.SetState($.Loading, "");
          let a = {
              clipid: t.m_clipID,
              watchlocation: e,
              sessionid: (0, u.KC)(),
            },
            i = null;
          try {
            i = await s().get(u.TS.CHAT_BASE_URL + "broadcast/getclipdetails", {
              params: a,
              withCredentials: !0,
            });
          } catch (t) {
            console.error(t), console.log("Failed to get clip manifest!");
          }
          if (!i || 200 != i.status)
            return void t.SetState(
              $.Error,
              (0, V.we)("#BroadcastWatch_RequestFailed"),
            );
          let r = i.data;
          r.success == B.R
            ? (t.SetState($.Ready), (t.m_data = r), this.LoadClip(t))
            : t.SetState($.Error, (0, V.we)("#BroadcastWatch_RequestFailed"));
        }
        async GetVODManifest(t, e) {
          t.SetState($.Loading, "");
          let a = await R.L.fetchQuery((0, G.uj)(t.m_nAppIDVOD)).catch((e) => {
            console.error(
              "BroadcastWatchStore:GetVODManifest: Failed to load VOD " +
                t.m_nAppIDVOD,
              e,
            );
          });
          a
            ? (a.bookmark
                ? K.Get().SetBookmarkForApp(t.m_nAppIDVOD, a.bookmark)
                : K.Get().InitializeBookmarkForApp(t.m_nAppIDVOD),
              t.SetState($.Ready),
              (t.m_manifestURL = a.video_url),
              this.LoadVOD(t))
            : t.SetState($.Error, (0, V.we)("#BroadcastWatch_RequestFailed"));
        }
        async HeartbeatBroadcast(t) {
          let e = new FormData();
          e.append("steamid", t.m_steamIDBroadcast),
            e.append("broadcastid", t.m_ulBroadcastID),
            e.append("viewertoken", this.m_broadcastSettings.ulViewerToken),
            s().post(u.TS.CHAT_BASE_URL + "broadcast/heartbeat/", e),
            t.m_schHeartbeatTimeout.Schedule(
              1e3 * t.m_data.heartbeat_interval,
              () => this.HeartbeatBroadcast(t),
            );
        }
        LoadBroadcast(t) {
          const e = this.m_activeVideo;
          e &&
            t.m_rgVideos.findIndex((t) => t == e) >= 0 &&
            e.StartBroadcast(t);
        }
        LoadClip(t) {
          const e = this.m_activeVideo;
          e && t.m_rgVideos.findIndex((t) => t == e) >= 0 && e.StartClip(t);
        }
        LoadVOD(t) {
          const e = this.m_activeVideo;
          e && t.m_rgVideos.findIndex((t) => t == e) >= 0 && e.StartVOD(t);
        }
        BroadcastDownloadFailed(t, e = !0, a = p.N_.Invalid) {
          t.Stop();
          let i = this.m_mapBroadcasts.get(t.GetBroadcastSteamID());
          i &&
            i.m_eWatchState != $.Loading &&
            (i.m_bWebRTC && e && (i.m_bWebRTC = !1),
            a == p.N_.StreamGone
              ? this.DelayedGetBroadcastManifest(i, t.GetWatchLocation())
              : this.GetBroadcastManifest(i, t.GetWatchLocation()));
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
          let a = this.m_broadcastSettings;
          (a.bMuted = !!a.bMuted),
            (a.nVolume = _.OQ(a.nVolume, 0, 1)),
            "string" != typeof a.ulViewerToken && (a.ulViewerToken = "0");
        }
        SaveBroadcastSettings() {
          window.localStorage &&
            this.m_schSaveSettings.Schedule(1e3, () => {
              try {
                window.localStorage.setItem(
                  "broadcastSettings",
                  JSON.stringify(this.m_broadcastSettings),
                );
              } catch (t) {}
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
      (0, i.Cg)([o.sH], st.prototype, "m_mapBroadcasts", void 0),
        (function (t) {
          (t[(t.Timeline = 1)] = "Timeline"), (t[(t.Minimap = 2)] = "Minimap");
        })(Q || (Q = {}));
      class ot {
        constructor(t, e, a, i) {
          (this.m_player = null),
            (this.m_listeners = new y.Ji()),
            (this.m_gameDataParser = null),
            (this.m_eWatchLocation = D.nn.Tq),
            (this.m_bStartWithSubtitles = !1),
            (this.m_steamIDBroadcast = ""),
            (this.m_BroadcastInfo = null),
            (this.m_broadcastClipID = ""),
            (this.m_nBroadcastAppIDVOD = 0),
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
            (this.m_rgMarkers = o.sH.array()),
            (this.m_rgSegments = o.sH.array()),
            (this.m_rgRegions = o.sH.array()),
            (0, o.Gn)(this),
            (this.m_elVideo = t),
            (this.m_nVolume = e),
            (this.m_bMuted = a),
            (this.m_eWatchLocation = i);
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
          return null === (t = this.m_player) || void 0 === t
            ? void 0
            : t.GetDASHPlayerStats();
        }
        BHasDASHStats() {
          return null != this.m_player;
        }
        IsTimelineMapActive() {
          return !1;
        }
        CanSeek() {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.m_player) || void 0 === t
                  ? void 0
                  : t.CanSeek()) &&
            void 0 !== e &&
            e
          );
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
          return Boolean(this.m_broadcastClipID);
        }
        SetBroadcastClipID(t) {
          this.m_broadcastClipID = t;
        }
        GetBroadcastClipID() {
          return this.m_broadcastClipID;
        }
        IsBroadcastVOD() {
          return Boolean(this.m_nBroadcastAppIDVOD);
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
          null === (e = this.m_player) ||
            void 0 === e ||
            e.SetVideoRepresentation(t);
        }
        GetBroadcastInfo() {
          return this.m_BroadcastInfo;
        }
        BHasTimedText() {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.m_player) || void 0 === t
                  ? void 0
                  : t.BHasTimedText()) &&
            void 0 !== e &&
            e
          );
        }
        BHasPlayer() {
          return Boolean(this.m_player);
        }
        ListSubtitles() {
          return this.m_elVideo.textTracks;
        }
        GetSubtitles() {
          for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
            const e = this.m_elVideo.textTracks[t];
            if ("showing" === e.mode) return e;
          }
          return null;
        }
        SetSubtitles(t) {
          let e = t ? V.bi[t] : I.xPp;
          this.m_player.SetSubtitles(e);
        }
        SetStartWithSubtitles(t) {
          this.m_bStartWithSubtitles = t;
        }
        GetBroadcastState() {
          return nt.GetBroadcastState(this);
        }
        GetBroadcastStateDescription() {
          return nt.GetBroadcastStateDescription(this);
        }
        SetOnVideoCallback(t) {
          this.m_fnOnVideoEnd = t;
        }
        InitPlayer() {
          (0, k.wT)(!this.m_player, "Initialized twice?"),
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
        StartBroadcast(t) {
          var e, a;
          if ((this.InitPlayer(), t.m_data.url)) {
            let e = new p.Zn(this.m_elVideo);
            e.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
              (this.m_player = e),
              e.PlayMPD(
                t.m_data.url,
                t.m_data.hls_url,
                void 0,
                t.m_strCDNAuthUrlParameters,
              );
          } else {
            let e = new f(this.m_elVideo);
            (this.m_player = e),
              e.PlayWebRTC(
                this.m_steamIDBroadcast,
                t.m_ulViewerToken,
                t.m_data.webrtc_session_id,
                t.m_data.webrtc_turn_server,
                t.m_data.webrtc_offer_sdp,
              );
          }
          this.SetVolume(this.m_nVolume),
            null === (e = this.m_player) ||
              void 0 === e ||
              e.SetMuted(this.m_bMuted);
          let i =
            null === (a = this.m_player) || void 0 === a
              ? void 0
              : a.GetDASHPlayerStats();
          i &&
            i.SetBroadcasterAndViewerInfo(
              this.m_steamIDBroadcast,
              u.iA.steamid,
              t.m_ulBroadcastID,
              t.m_ulViewerToken,
            ),
            (this.m_BroadcastInfo = nt.StartInfo(this.m_steamIDBroadcast));
        }
        StartClip(t) {
          var e;
          this.InitPlayer();
          let a = new p.Zn(this.m_elVideo);
          a.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = a),
            a.PlayMPD(t.m_data.clip_url),
            this.SetVolume(this.m_nVolume),
            null === (e = this.m_player) ||
              void 0 === e ||
              e.SetMuted(this.m_bMuted);
        }
        StartVOD(t) {
          var e;
          this.InitPlayer();
          let a = new p.Zn(this.m_elVideo);
          a.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
            (this.m_player = a),
            u.iA.logged_in &&
              t.m_nAppIDVOD &&
              a.SetBookmarkAdapter(new J(t.m_nAppIDVOD)),
            t.m_manifestURL && a.PlayMPD(t.m_manifestURL),
            this.SetVolume(this.m_nVolume),
            null === (e = this.m_player) ||
              void 0 === e ||
              e.SetMuted(this.m_bMuted);
        }
        Stop() {
          this.m_listeners.Unregister(),
            this.m_BroadcastInfo &&
              (nt.StopInfo(this.m_BroadcastInfo),
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
          if (t == $.None || this.IsBroadcastClip()) nt.StartVideo(this);
          else if (t == $.Ready)
            if ((nt.SetActiveVideo(this), this.m_player)) this.m_player.Play();
            else if (this.IsBroadcastVOD()) {
              const t = nt.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
              t && this.StartVOD(t);
            } else {
              const t = nt.GetBroadcast(this.m_steamIDBroadcast);
              t && this.StartBroadcast(t);
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
          null === (e = this.m_player) || void 0 === e || e.JumpTime(t);
        }
        Seek(t) {
          var e;
          null === (e = this.m_player) || void 0 === e || e.Seek(t);
        }
        SeekAndPlay(t) {
          var e;
          null === (e = this.m_player) || void 0 === e || e.SeekAndPlay(t);
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
            nt.SaveVolumeChange(t, this.m_bMuted);
        }
        SetMute(t) {
          this.m_player && this.m_player.SetMuted(t),
            (this.m_bMuted = t),
            nt.SaveVolumeChange(this.m_nVolume, t);
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
                const t = this.m_fnOnVideoEnd;
                if (t && this.m_nVideoEndPos - this.m_nPlaybackTime < p.Br) {
                  const e = 400;
                  this.m_videoEndingTimer = window.setTimeout(() => {
                    t();
                  }, e);
                }
              }
              (this.m_bBuffering = t.IsBuffering()),
                (this.m_bOnLiveEdge =
                  this.m_nVideoEndPos - this.m_nPlaybackTime < p.Br),
                t.IsPaused() && (this.m_bOnLiveEdge = !1);
            }
        }
        OnVolumeUpdated() {
          const t = this.m_player;
          t &&
            ((this.m_nVolume = t.GetVolume()), (this.m_bMuted = t.IsMuted()));
        }
        OnGameDataUpdate(t) {
          var e, a;
          let i = t.detail;
          if (!i || "object" != typeof i.gamedata) return;
          (this.m_gameDataParser &&
            this.m_gameDataParser.GetAppID() == i.gamedata.__appid) ||
            (this.m_gameDataParser = new c(i.gamedata.__appid));
          const r =
            null !==
              (a =
                null === (e = this.m_player) || void 0 === e
                  ? void 0
                  : e.GetLiveContentStartTime().getTime()) && void 0 !== a
              ? a
              : 0;
          if ("timelinemarkers" in i.gamedata) {
            const t = this.m_gameDataParser.UpdateMarkers(
              i.gamedata.__timelinemarkers,
              r,
            );
            t &&
              (this.m_rgMarkers.replace(t.rgMarkers || []),
              this.m_rgSegments.replace(t.rgSegments || []));
            const e = this.m_gameDataParser.UpdateRegions(i.gamedata.__regions);
            e && this.m_rgRegions.replace(e);
          } else
            "soundtrack" in i.gamedata &&
              this.m_gameDataParser.UpdateSoundtrack(
                this.m_steamIDBroadcast,
                i.gamedata.soundtrack,
              );
        }
        OnDownloadFailed(t) {
          let e = t.detail || p.N_.Invalid;
          nt.BroadcastDownloadFailed(this, !0, e);
        }
        OnWebRTCRetry() {
          nt.BroadcastDownloadFailed(this, !1);
        }
        OnWebRTCFailed() {
          nt.BroadcastDownloadFailed(this, !0);
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
        GetTimeAtMousePosition(t, e, a, i) {
          let r = _.Fu(t, e.left, e.right, a, i);
          return Math.floor(r + 0.5);
        }
        GetPercentOffsetFromTime(t, e) {
          let a = 0,
            i = 0;
          return (
            e == Q.Timeline
              ? ((i = this.m_nVideoEndPos), (a = i - this.m_nTimelineDuration))
              : ((a = 0), (i = 0)),
            _.Fu(t, a, i, 0, 100)
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
      (0, i.Cg)([o.sH], ot.prototype, "m_player", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_bPaused", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_nPlaybackTime", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_bBuffering", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_bOnLiveEdge", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_nVolume", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_bMuted", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_bUserInputNeeded", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_bIsReplay", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_nTimelineDuration", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_nVideoStartPos", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_nVideoEndPos", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_editorStartTime", void 0),
        (0, i.Cg)([o.sH], ot.prototype, "m_editorEndTime", void 0),
        (0, i.Cg)([o.XI.bound], ot.prototype, "StartBroadcast", null),
        (0, i.Cg)([o.XI.bound], ot.prototype, "StartClip", null),
        (0, i.Cg)([o.XI.bound], ot.prototype, "StartVOD", null),
        (0, i.Cg)([S.o], ot.prototype, "OnVideoPlaying", null),
        (0, i.Cg)([S.o], ot.prototype, "OnVideoPause", null),
        (0, i.Cg)([o.XI.bound], ot.prototype, "OnVideoTimeUpdate", null),
        (0, i.Cg)([S.o], ot.prototype, "OnVolumeUpdated", null),
        (0, i.Cg)([o.XI.bound], ot.prototype, "OnGameDataUpdate", null),
        (0, i.Cg)([S.o], ot.prototype, "OnDownloadFailed", null),
        (0, i.Cg)([S.o], ot.prototype, "OnWebRTCRetry", null),
        (0, i.Cg)([S.o], ot.prototype, "OnWebRTCFailed", null),
        (0, i.Cg)([S.o], ot.prototype, "OnUserInputNeeded", null);
      const nt = new st();
      window.uiBroadcastWatchStore = nt;
    },
  },
]);
