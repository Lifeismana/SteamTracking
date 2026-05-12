/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1063],
  {
    56228: (e, t, r) => {
      r.d(t, { s: () => D, Q: () => P });
      var i,
        n = r(34629),
        a = r(41735),
        s = r.n(a),
        o = r(71944),
        l = r(14947),
        c = r(37085),
        d = r(22837),
        g = r(56545),
        u = r(17720),
        m = r(78619),
        y = r(78327),
        h = r(17204),
        f = r(81393),
        S = r(80613),
        p = r.n(S),
        _ = r(89068),
        B = r(21920);
      class T extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.language || _.Sg(T.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  language: { n: 1, br: _.qM.readString, bw: _.gp.writeString },
                  type: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = _.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_UpdateTextFilterDictionary_Notification";
        }
      }
      class b extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.language || _.Sg(b.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  language: { n: 1, br: _.qM.readString, bw: _.gp.writeString },
                  type: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Request";
        }
      }
      class x extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.dictionary || _.Sg(x.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  dictionary: {
                    n: 1,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = _.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Response";
        }
      }
      class w extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || _.Sg(w.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: _.qM.readString, bw: _.gp.writeString },
                  type: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = _.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_TextFilterDictionaryChanged_Notification";
        }
      }
      class F extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.pid || _.Sg(F.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  pid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = _.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Request";
        }
      }
      class M extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.gameid || _.Sg(M.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  gameid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = _.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Response";
        }
      }
      class C extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.gameid || _.Sg(C.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  gameid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  should_handle: {
                    n: 2,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = _.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
        }
      }
      class v extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.search_term || _.Sg(v.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  search_term: {
                    n: 1,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  max_results: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = _.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
        }
      }
      class I extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appids || _.Sg(I.M()),
            S.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = _.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
        }
      }
      !(function (e) {
        (e.UpdateTextFilterDictionaryHandler = {
          name: "SteamEngine.UpdateTextFilterDictionary#1",
          request: T,
        }),
          (e.RegisterForUpdateTextFilterDictionary = function (t, r) {
            return null == (r = r || (0, B.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.UpdateTextFilterDictionaryHandler,
                  t,
                );
          }),
          (e.UpdateTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, g.I8)(T, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgUpdateTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, g.I8)(T, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTextFilterDictionaryHandler = {
            name: "SteamEngine.GetTextFilterDictionary#1",
            request: b,
            response: x,
          }),
          (e.GetTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, g.I8)(b, e),
                  x,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, g.I8)(b, e),
                  x,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTextFilterDictionaryChangedHandler = {
            name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            request: w,
          }),
          (e.RegisterForNotifyTextFilterDictionaryChanged = function (t, r) {
            return null == (r = r || (0, B.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTextFilterDictionaryChangedHandler,
                  t,
                );
          }),
          (e.NotifyTextFilterDictionaryChanged = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, g.I8)(w, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTextFilterDictionaryChanged = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, g.I8)(w, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetGameIDForPIDHandler = {
            name: "SteamEngine.GetGameIDForPID#1",
            request: F,
            response: M,
          }),
          (e.GetGameIDForPID = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, g.I8)(F, e), M, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetGameIDForPID = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, g.I8)(F, e), M, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SetOverlayEscapeKeyHandlingHandler = {
            name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
            request: C,
          }),
          (e.RegisterForSetOverlayEscapeKeyHandling = function (t, r) {
            return null == (r = r || (0, B.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.SetOverlayEscapeKeyHandlingHandler,
                  t,
                );
          }),
          (e.SetOverlayEscapeKeyHandling = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.SetOverlayEscapeKeyHandling#1",
                  (0, g.I8)(C, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgSetOverlayEscapeKeyHandling = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.SetOverlayEscapeKeyHandling#1",
                  (0, g.I8)(C, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SearchAppDataCacheByStoreKeywordsHandler = {
            name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            request: v,
            response: I,
          }),
          (e.SearchAppDataCacheByStoreKeywords = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                  (0, g.I8)(v, e),
                  I,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgSearchAppDataCacheByStoreKeywords = function (e, t) {
            return null == (t = t || (0, B.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                  (0, g.I8)(v, e),
                  I,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(i || (i = {}));
      var W = r(15230),
        E = r(6419);
      function O() {
        return y.TS.IN_MOBILE ? y.NQ : (0, y.xv)();
      }
      const z = "(1)";
      class D {
        constructor(e) {
          (this.m_Transport = null),
            (this.m_Storage = null),
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: m.Bx.NS,
              bIgnoreFriends: !1,
            }),
            (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_bInitialized = !1),
            (this.m_bFilterChangedWhileLoading = !1),
            (this.m_bOngoingLoad = !1),
            (this.m_nLoadLanguagesRetryTimeout = void 0),
            (0, l.Gn)(this);
          let t = new m.B4();
          (this.m_TextFilterPreferences = {
            eTextFilterSetting: t.text_filter_setting(),
            bIgnoreFriends: t.text_filter_ignore_friends(),
          }),
            (this.m_TextFilterWords = new m.Ey()),
            (this.m_DataAccess = e);
        }
        async Init(e = 0, t = null, r = null) {
          (this.m_bInitialized = !1),
            (this.m_WebUIServiceTransport = W.N),
            (this.m_unAccountID = e),
            (this.m_Transport = t),
            (this.m_Storage = r),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            this.InitSteamEngineLanguages(),
            await this.LoadFilter(),
            await this.LoadTextFilterPreferences(),
            await this.LoadTextFilterWords(),
            await this.RequestUpdatedSettings(),
            await (0, l.z7)(() => !this.m_bOngoingLoad),
            await this.InitFiltersWithRetry();
        }
        InitSteamEngineLanguages() {
          this.m_WebUIServiceTransport.BIsValid() &&
            (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
              i.NotifyTextFilterDictionaryChangedHandler,
              this.OnTextFilterDictionaryChanged,
            ),
            this.InitSteamEngineLanguage(y.TS.LANGUAGE),
            "english" !== y.TS.LANGUAGE &&
              this.InitSteamEngineLanguage("english"));
        }
        OnTextFilterDictionaryChanged(e) {
          return (
            this.m_bInitialized
              ? this.InitFiltersWithRetry()
              : (this.m_bFilterChangedWhileLoading = !0),
            c.R
          );
        }
        async InitFiltersWithRetry() {
          do {
            (this.m_bFilterChangedWhileLoading = !1),
              (this.m_bInitialized = !1),
              (this.m_bOngoingLoad = !0),
              await this.LoadLanguages(),
              this.OnFilterDataChanged(),
              (this.m_bInitialized = !0);
          } while (this.m_bFilterChangedWhileLoading);
          this.m_bOngoingLoad = !1;
        }
        InitSteamEngineLanguage(e) {
          const t = g.w.Init(T);
          t.Body().set_language(e),
            t.Body().set_type("profanity"),
            i.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            ),
            t.Body().set_type("banned"),
            i.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            );
        }
        GetSteamEngineTextFilterDictionary(e, t) {
          const r = g.w.Init(b);
          return (
            r.Body().set_language(e),
            r.Body().set_type(t),
            i.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
          );
        }
        GetStorageKey(e) {
          return e + "_" + this.m_unAccountID;
        }
        async LoadTextFilterPreferences() {
          if (this.m_Storage) {
            let e = await this.m_Storage.GetObject(
              this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
            );
            e && (this.m_TextFilterPreferences = e);
          }
        }
        SaveTextFilterPreferences() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              this.m_TextFilterPreferences,
            );
        }
        ObfuscateString(e) {
          try {
            const t = new TextEncoder().encode(z + e);
            return o.fromByteArray(t);
          } catch (e) {
            return "";
          }
        }
        DeobfuscateString(e) {
          try {
            const t = o.toByteArray(e);
            let r = new TextDecoder().decode(t);
            return r.startsWith(z)
              ? ((r = r.slice(3)), r)
              : (console.log(
                  "DeobfuscateString given invalid base64 data, ignoring: " + e,
                ),
                "");
          } catch (e) {
            return "";
          }
        }
        async LoadObfuscatedString(e) {
          if (this.m_Storage) {
            let t = await this.m_Storage.GetString(this.GetStorageKey(e));
            if (t) return this.DeobfuscateString(t);
          }
          return null;
        }
        async SaveObfuscatedString(e, t) {
          this.m_Storage &&
            this.m_Storage.StoreString(
              this.GetStorageKey(e),
              this.ObfuscateString(t),
            );
        }
        async LoadTextFilterWords() {
          let e = await this.LoadObfuscatedString(
            "CTextFilterStore_TextFilterWords",
          );
          if (e)
            try {
              this.m_TextFilterWords = m.Ey.fromObject(JSON.parse(e));
            } catch (t) {
              console.warn("Error parsing cached text filter word list", e),
                (this.m_TextFilterWords = new m.Ey());
            }
        }
        SaveTextFilterWords() {
          this.SaveObfuscatedString(
            "CTextFilterStore_TextFilterWords",
            JSON.stringify(this.m_TextFilterWords.toObject()),
          );
        }
        async LoadFilter() {
          let e = await this.LoadObfuscatedString(
              "CTextFilterStore_strBannedPattern",
            ),
            t = await this.LoadObfuscatedString(
              "CTextFilterStore_strCleanPattern",
            );
          null != e && null != t && this.BRebuildFilter(e, t);
        }
        SaveFilter() {
          this.SaveObfuscatedString(
            "CTextFilterStore_strBannedPattern",
            this.m_strBannedPattern,
          ),
            this.SaveObfuscatedString(
              "CTextFilterStore_strCleanPattern",
              this.m_strCleanPattern,
            );
        }
        async RequestUpdatedSettings() {
          let e = new m.B4();
          if (0 !== this.m_unAccountID)
            try {
              if (this.m_Transport) {
                let t = g.w.Init(m.tz);
                e = (await m.xt.GetCommunityPreferences(this.m_Transport, t))
                  .Body()
                  .preferences();
              } else {
                let t = { sessionid: y.TS.SESSIONID, origin: O() };
                const r = await s().get(
                  y.TS.COMMUNITY_BASE_URL +
                    "textfilter/ajaxgetcommunitypreferences",
                  { params: t, withCredentials: !0 },
                );
                e = m.B4.fromObject(r.data.preferences);
              }
            } catch (e) {}
          if (
            (this.UpdateCommunityPreferences(e),
            e.text_filter_words_revision() !==
              this.m_TextFilterWords.text_filter_words_revision())
          ) {
            let t = new m.Ey();
            if (0 !== e.text_filter_words_revision())
              try {
                if (this.m_Transport) {
                  let e = g.w.Init(m.SC);
                  t = (await m.xt.GetTextFilterWords(this.m_Transport, e))
                    .Body()
                    .words();
                } else {
                  let e = { sessionid: y.TS.SESSIONID, origin: O() };
                  const r = await s().get(
                    y.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgettextfiltercustomwords",
                    { params: e, withCredentials: !0 },
                  );
                  t = m.Ey.fromObject(r.data.words);
                }
              } catch (e) {}
            this.UpdateTextFilterWords(t);
          }
        }
        UpdateCommunityPreferences(e) {
          var t;
          let r = !1;
          e.text_filter_setting() !==
            (null === (t = this.m_TextFilterPreferences) || void 0 === t
              ? void 0
              : t.eTextFilterSetting) &&
            ((this.m_TextFilterPreferences.eTextFilterSetting =
              e.text_filter_setting()),
            (r = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends =
                e.text_filter_ignore_friends()),
              (r = !0)),
            r && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        async LoadLanguages(e = 15) {
          (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = "");
          try {
            await this.LoadLanguage(y.TS.LANGUAGE),
              "english" !== y.TS.LANGUAGE &&
                (await this.LoadLanguage("english"));
          } catch (t) {
            this.m_nLoadLanguagesRetryTimeout &&
              ((0, f.wT)(
                !this.m_nLoadLanguagesRetryTimeout,
                "Got two concurrent calls to TextFilteringStore.LoadLanguages",
              ),
              window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
              (this.m_nLoadLanguagesRetryTimeout = void 0)),
              (e = Math.min(2 * e, 3600)),
              console.warn("LoadLanguages caught", t, "retry in", e, "seconds"),
              (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                async () => {
                  (this.m_nLoadLanguagesRetryTimeout = void 0),
                    await this.LoadLanguages(e),
                    this.OnFilterDataChanged();
                },
                1e3 * e,
              ));
          }
        }
        async LoadLanguage(e) {
          let t = "",
            r = !1;
          if (this.m_WebUIServiceTransport.BIsValid())
            try {
              {
                const t = await this.GetSteamEngineTextFilterDictionary(
                  e,
                  "banned",
                );
                this.m_strBannedWords += t.Body().dictionary();
              }
              {
                const t = await this.GetSteamEngineTextFilterDictionary(
                  e,
                  "profanity",
                );
                this.m_strProfanityWords += t.Body().dictionary();
              }
              r = !0;
            } catch (e) {
              console.warn("LoadLanguage caught while loading from cache:", e);
            }
          if (!r) {
            t = `${y.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${O()}`;
            {
              const e = await s().get(t);
              this.m_strBannedWords += e.data;
            }
            t = `${y.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${O()}`;
            {
              const e = await s().get(t);
              this.m_strProfanityWords += e.data;
            }
          }
          t = `${y.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${O()}`;
          {
            const e = await s().get(t);
            this.m_strCleanWords += e.data;
          }
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return (function (e) {
              if ("" === e) return !1;
              try {
                return new RegExp("\\b(" + e + ")\\b", "ugi"), !0;
              } catch (t) {
                return (
                  console.log(
                    `'${e}' is an invalid expression, removing from text filter`,
                  ),
                  !1
                );
              }
            })(e);
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
            t = [],
            r = [];
          switch (this.m_TextFilterPreferences.eTextFilterSetting) {
            case m.Bx.C5:
            case m.Bx.NS:
              break;
            case m.Bx.bf:
              t = t.concat(this.m_strBannedWords.split(e));
              break;
            default:
              t = t.concat(
                this.m_strProfanityWords.split(e),
                this.m_strBannedWords.split(e),
              );
          }
          (t = t.concat(
            this.m_TextFilterWords.text_filter_custom_banned_words(),
          )),
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words(),
            ));
          let i = this.CreatePattern(t),
            n = this.CreatePattern(r);
          "" != n && (n = "^(" + n + ")$"),
            this.BRebuildFilter(i, n) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (
            ((this.m_regexBannedWords = null),
            (this.m_strBannedPattern = e),
            "" !== e)
          )
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                (0, h.aj)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`,
                  ),
                ),
                (this.m_strBannedPattern = "");
            }
          if (
            ((this.m_regexCleanWords = null),
            (this.m_strCleanPattern = t),
            "" !== t)
          )
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                (0, h.aj)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`,
                  ),
                ),
                (this.m_strCleanPattern = "");
            }
          return !0;
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
        }
        BShownFilterTip() {
          return this.m_bShownFilterTip;
        }
        SetFilterTipShown(e) {
          this.m_bShownFilterTip = e;
        }
        FilterText(e, t) {
          if (!this.m_regexBannedWords) return t;
          let r = 0;
          if ("string" == typeof e && "" !== e) {
            r = new u.b(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (e &&
              this.m_TextFilterPreferences.bIgnoreFriends &&
              this.m_DataAccess.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length),
              );
        }
      }
      let R;
      function P() {
        if (!R) {
          const e = new Set();
          let t = { sessionid: y.TS.SESSIONID, origin: O() };
          s()
            .get(y.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
              params: t,
              withCredentials: !0,
            })
            .then((t) => {
              var r, i;
              for (const n of null !==
                (i =
                  null === (r = t.data.friendslist) || void 0 === r
                    ? void 0
                    : r.friends) && void 0 !== i
                ? i
                : [])
                (0, d.S$u)(n.efriendrelationship) &&
                  e.add(new u.b(n.ulfriendid).GetAccountID());
            }),
            (R = (t) => e.has(t));
        }
        return R;
      }
      (0, n.Cg)([l.sH], D.prototype, "m_TextFilterPreferences", void 0),
        (0, n.Cg)([l.sH], D.prototype, "m_mapPlayerCache", void 0),
        (0, n.Cg)([l.sH], D.prototype, "m_regexBannedWords", void 0),
        (0, n.Cg)([l.sH], D.prototype, "m_regexCleanWords", void 0),
        (0, n.Cg)([l.sH], D.prototype, "m_bInitialized", void 0),
        (0, n.Cg)([l.sH], D.prototype, "m_bFilterChangedWhileLoading", void 0),
        (0, n.Cg)([l.sH], D.prototype, "m_bOngoingLoad", void 0),
        (0, n.Cg)([l.XI], D.prototype, "Init", null),
        (0, n.Cg)([E.o], D.prototype, "OnTextFilterDictionaryChanged", null),
        (0, n.Cg)([l.XI], D.prototype, "UpdateCommunityPreferences", null),
        (0, n.Cg)([l.XI], D.prototype, "BRebuildFilter", null);
    },
  },
]);
