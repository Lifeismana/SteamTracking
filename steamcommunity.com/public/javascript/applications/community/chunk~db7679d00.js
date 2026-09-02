/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [1063],
    {
      24544: (ft, Ue, h) => {
        h.d(Ue, { s: () => z, Q: () => gt });
        var je = h(41735),
          $ = h.n(je),
          Ee = h(71944),
          I = h(14947),
          f = h(72604),
          Oe = h(99412),
          d = h(35038),
          De = h(76559),
          O = h(75916),
          D = h(3166),
          X = h(36191),
          ie = h(71742),
          g = h(80613),
          u = h.n(g),
          s = h(75245),
          p = h(66781),
          ke = Object.defineProperty,
          $e = (n, e, t) =>
            e in n
              ? ke(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          E = (n, e, t) => $e(n, typeof e != "symbol" ? e + "" : e, t);
        const de = class S extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.language || s.Sg(S.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    language: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(S.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new S();
            return S.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(S.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(S.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        };
        E(de, "sm_m"), E(de, "sm_mbf");
        let ne = de;
        const me = class y extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.language || s.Sg(y.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    language: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(y.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new y();
            return y.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(y.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(y.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        };
        E(me, "sm_m"), E(me, "sm_mbf");
        let se = me;
        const ge = class b extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.dictionary || s.Sg(b.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(b.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new b();
            return b.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(b.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(b.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        };
        E(ge, "sm_m"), E(ge, "sm_mbf");
        let fe = ge;
        const he = class w extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.language || s.Sg(w.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    language: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(w.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new w();
            return w.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(w.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(w.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        };
        E(he, "sm_m"), E(he, "sm_mbf");
        let pe = he;
        const Se = class T extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.pid || s.Sg(T.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    pid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(T.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new T();
            return T.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(T.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(T.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        };
        E(Se, "sm_m"), E(Se, "sm_mbf");
        let ye = Se;
        const be = class M extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.gameid || s.Sg(M.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    gameid: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(M.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new M();
            return M.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(M.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(M.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        };
        E(be, "sm_m"), E(be, "sm_mbf");
        let we = be;
        const Te = class B extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.gameid || s.Sg(B.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    gameid: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(B.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new B();
            return B.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(B.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(B.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        };
        E(Te, "sm_m"), E(Te, "sm_mbf");
        let Me = Te;
        const Be = class C extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.search_term || s.Sg(C.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    search_term: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    max_results: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = s.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(C.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new C();
            return C.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(C.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(C.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        };
        E(Be, "sm_m"), E(Be, "sm_mbf");
        let Ce = Be;
        const Re = class R extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.appids || s.Sg(R.M()),
              g.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = s.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(R.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new R();
            return R.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(R.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(R.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        };
        E(Re, "sm_m"), E(Re, "sm_mbf");
        let xe = Re;
        var K;
        ((n) => {
          n.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: ne,
          };
          function e(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    n.UpdateTextFilterDictionaryHandler,
                    m,
                  )
            );
          }
          n.RegisterForUpdateTextFilterDictionary = e;
          function t(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, d.I8)(ne, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.UpdateTextFilterDictionary = t;
          function r(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, d.I8)(ne, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgUpdateTextFilterDictionary = r),
            (n.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: se,
              response: fe,
            });
          function i(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, d.I8)(se, m),
                    fe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.GetTextFilterDictionary = i;
          function a(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, d.I8)(se, m),
                    fe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgGetTextFilterDictionary = a),
            (n.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: pe,
            });
          function l(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    n.NotifyTextFilterDictionaryChangedHandler,
                    m,
                  )
            );
          }
          n.RegisterForNotifyTextFilterDictionaryChanged = l;
          function c(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, d.I8)(pe, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.NotifyTextFilterDictionaryChanged = c;
          function _(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, d.I8)(pe, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgNotifyTextFilterDictionaryChanged = _),
            (n.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: ye,
              response: we,
            });
          function v(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, d.I8)(ye, m),
                    we,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.GetGameIDForPID = v;
          function q(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, d.I8)(ye, m),
                    we,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgGetGameIDForPID = q),
            (n.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: Me,
            });
          function ee(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultHandlerRegistry()),
              o == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : o.RegisterServiceNotificationHandler(
                    n.SetOverlayEscapeKeyHandlingHandler,
                    m,
                  )
            );
          }
          n.RegisterForSetOverlayEscapeKeyHandling = ee;
          function te(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, d.I8)(Me, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.SetOverlayEscapeKeyHandling = te;
          function Ae(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : o.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, d.I8)(Me, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgSetOverlayEscapeKeyHandling = Ae),
            (n.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: Ce,
              response: xe,
            });
          function k(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, d.I8)(Ce, m),
                    xe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.SearchAppDataCacheByStoreKeywords = k;
          function ue(m, o) {
            return (
              (o = o || (0, p.OI)().GetDefaultTransport()),
              o == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : o.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, d.I8)(Ce, m),
                    xe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.SendMsgSearchAppDataCacheByStoreKeywords = ue;
        })(K || (K = {}));
        var A = h(54963),
          Ke = h(15369),
          ae = h(94354),
          We = h(57589);
        const ze = 0,
          Ve = 1,
          Ye = 2,
          ht = 3;
        function pt(n) {
          return "unknown EClientExecutionSite ( " + n + " )";
        }
        class j extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new j();
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new j();
            return j.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var He = Object.defineProperty,
          Xe = Object.getOwnPropertyDescriptor,
          Je = (n, e, t) =>
            e in n
              ? He(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          Pe = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? Xe(e, t) : e, a = n.length - 1, l;
              a >= 0;
              a--
            )
              (l = n[a]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && He(e, t, i), i;
          },
          oe = (n, e, t) => Je(n, typeof e != "symbol" ? e + "" : e, t);
        class Fe {
          constructor() {
            oe(this, "m_mapCallbacks", new Map()),
              oe(this, "m_rgRegisteredEMsgs", []),
              oe(this, "m_mapServiceMethodHandlers", new Map()),
              oe(this, "m_rgRegisteredServiceMethodHandlers", []),
              (0, I.Gn)(this);
          }
          DispatchMsgToHandlers(e, t) {
            let r = e.GetEMsg();
            if (r == ae.bSr) {
              let i = e.Hdr().target_job_name();
              if (i) {
                let a = this.m_mapServiceMethodHandlers.get(i);
                if (a) {
                  this.DEBUG_LogMessageDispatch(e, a[0]);
                  for (let l of a)
                    try {
                      l.invoke(e, t);
                    } catch (c) {
                      c instanceof Error
                        ? (0, X.aj)().ReportError(c)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${i}): `,
                            c,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let i = this.m_mapCallbacks.get(r);
              if (i) {
                this.DEBUG_LogMessageDispatch(e, i[0]);
                for (let a of i)
                  try {
                    a.invoke(e);
                  } catch (l) {
                    l instanceof Error
                      ? (0, X.aj)().ReportError(l)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          l,
                        );
                  }
                return !0;
              }
            }
            return !1;
          }
          DEBUG_LogMessageDispatch(e, t) {}
          get emsg_list() {
            return this.m_rgRegisteredEMsgs;
          }
          get servicemethod_list() {
            return this.m_rgRegisteredServiceMethodHandlers;
          }
          AddCallback(e, t, r) {
            let i = this.m_mapCallbacks.get(e);
            return (
              i ||
                ((i = []),
                this.m_mapCallbacks.set(e, i),
                this.m_rgRegisteredEMsgs.push(e)),
              i.push({ invoke: r, msgClass: t }),
              {
                invoke: r,
                unregister: () => {
                  let a = this.m_mapCallbacks.get(e);
                  if (a)
                    for (let l = 0; l < a.length; l++)
                      a[l].invoke == r && (a.splice(l, 1), l--);
                },
              }
            );
          }
          AddServiceMethodHandler(e, t) {
            let r = (i, a) => {
              let l = d.w.InitFromMsg(e.request, i),
                c = d.w.Init(e.response, ae.kHd),
                _ = t(l, c),
                v = (q) => {
                  c.Hdr().set_eresult(q), a(c);
                };
              _ instanceof Promise
                ? _.then(v).catch(() => {
                    v(f.zi);
                  })
                : v(_);
            };
            return (
              this.m_mapServiceMethodHandlers.has(e.name)
                ? console.error("Duplicate registration for method " + e.name)
                : (this.m_mapServiceMethodHandlers.set(e.name, [
                    { invoke: r, msgClass: e.request },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
              {
                invoke: r,
                unregister: () => {
                  let i = this.m_mapServiceMethodHandlers.get(e.name);
                  if (i)
                    for (let a = 0; a < i.length; a++)
                      i[a].invoke == r && (i.splice(a, 1), a--);
                },
              }
            );
          }
          AddServiceNotificationHandler(e, t) {
            let r = (a, l) => {
                let c = d.w.InitFromMsg(e.request, a);
                t(c);
              },
              i = this.m_mapServiceMethodHandlers.get(e.name);
            return (
              i ||
                ((i = []),
                this.m_mapServiceMethodHandlers.set(e.name, i),
                this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
              i.push({ invoke: r, msgClass: e.request }),
              {
                invoke: r,
                unregister: () => {
                  let a = this.m_mapServiceMethodHandlers.get(e.name);
                  if (a)
                    for (let l = 0; l < a.length; l++)
                      a[l].invoke == r && (a.splice(l, 1), l--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(e, t) {
            return this.AddCallback(e, void 0, t);
          }
          RegisterEMessageHandler(e, t, r) {
            return this.AddCallback(e, t, (i) => {
              r(d.w.InitFromMsg(t, i));
            });
          }
          RegisterEMessageAction(e, t, r) {
            return this.AddCallback(e, t, (i) => {
              (0, I.h5)(() => {
                r(d.w.InitFromMsg(t, i));
              });
            });
          }
          RegisterServiceNotificationHandler(e, t) {
            return this.AddServiceNotificationHandler(e, t);
          }
          RegisterServiceNotificationHandlerAction(e, t) {
            return this.AddServiceNotificationHandler(e, (r) => {
              let i;
              return (
                (0, I.h5)(() => {
                  i = t(r);
                }),
                i
              );
            });
          }
          RegisterServiceMethodHandler(e, t) {
            return this.AddServiceMethodHandler(e, t);
          }
          RegisterServiceMethodHandlerAction(e, t) {
            return this.AddServiceMethodHandler(e, (r, i) => {
              let a;
              return (
                (0, I.h5)(() => {
                  a = t(r, i);
                }),
                a
              );
            });
          }
        }
        Pe([I.sH], Fe.prototype, "m_rgRegisteredEMsgs", 2),
          Pe([I.sH], Fe.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        var Qe = Object.defineProperty,
          Ze = (n, e, t) =>
            e in n
              ? Qe(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          Ge = (n, e, t) => Ze(n, typeof e != "symbol" ? e + "" : e, t);
        const _e = class x extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.auth_key || s.Sg(x.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = s.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(x.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new x();
            return x.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(x.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(x.M(), e, t);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        };
        Ge(_e, "sm_m"), Ge(_e, "sm_mbf");
        let le = _e;
        class H extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new H();
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new H();
            return H.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class P extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new P();
          }
          static deserializeBinary(e) {
            let t = new (u().BinaryReader)(e),
              r = new P();
            return P.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var J;
        ((n) => {
          n.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: le,
            response: H,
          };
          function e(l, c) {
            return (
              (c = c || (0, p.OI)().GetDefaultTransport()),
              c == null
                ? new Promise((_, v) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      v(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : c.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, d.I8)(le, l),
                    H,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          n.Authenticate = e;
          function t(l, c) {
            return (
              (c = c || (0, p.OI)().GetDefaultTransport()),
              c == null
                ? new Promise((_, v) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      v(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : c.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, d.I8)(le, l),
                    H,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (n.SendMsgAuthenticate = t),
            (n.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: P,
            });
          function r(l, c) {
            return (
              (c = c || (0, p.OI)().GetDefaultHandlerRegistry()),
              c == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : c.RegisterServiceNotificationHandler(
                    n.NotifyStartShutdownHandler,
                    l,
                  )
            );
          }
          n.RegisterForNotifyStartShutdown = r;
          function i(l, c) {
            return (
              (c = c || (0, p.OI)().GetDefaultTransport()),
              c == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : c.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, d.I8)(P, l),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          n.NotifyStartShutdown = i;
          function a(l, c) {
            return (
              (c = c || (0, p.OI)().GetDefaultTransport()),
              c == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : c.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, d.I8)(P, l),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          n.SendMsgNotifyStartShutdown = a;
        })(J || (J = {}));
        var et = h(98609),
          tt = h(13854),
          Le = Object.defineProperty,
          rt = Object.getOwnPropertyDescriptor,
          it = (n, e, t) =>
            e in n
              ? Le(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          ce = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? rt(e, t) : e, a = n.length - 1, l;
              a >= 0;
              a--
            )
              (l = n[a]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && Le(e, t, i), i;
          },
          W = (n, e, t) => it(n, typeof e != "symbol" ? e + "" : e, t);
        class Q {
          constructor(e, t) {
            W(this, "m_socket", null),
              W(this, "m_sName"),
              W(this, "m_sURL"),
              W(
                this,
                "Log",
                new We.wd("CWebSocketConnection", () => this.m_sName),
              ),
              W(this, "m_bDisconnectRequested", !1),
              W(this, "m_bConnecting", !1),
              W(this, "m_fnOnMessageHandler"),
              W(this, "m_fnOnCloseHandler"),
              W(this, "m_fnOnReconnectStartHandler"),
              W(this, "m_fnOnReconnectFinishHandler"),
              W(this, "m_nConnectAttemptsMax"),
              W(this, "m_nConnectAttemptTimeoutMs"),
              W(this, "m_bReconnectOnFailure"),
              W(this, "m_nReconnectAttemptTimeoutMs"),
              W(this, "m_nReconnectAttemptsMax");
            var r, i, a, l, c, _, v;
            (this.m_sName = e),
              (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                (r = t.fnOnReconnectStartHandler) != null ? r : () => {}),
              (this.m_fnOnReconnectFinishHandler =
                (i = t.fnOnReconnectFinishHandler) != null ? i : () => {}),
              (this.m_nConnectAttemptsMax =
                (a = t.nConnectAttemptsMax) != null ? a : 8),
              (this.m_nConnectAttemptTimeoutMs =
                (l = t.nConnectAttemptTimeoutMs) != null ? l : 1e3),
              (this.m_bReconnectOnFailure =
                (c = t.bReconnectOnFailure) != null ? c : !1),
              (this.m_nReconnectAttemptsMax =
                (_ = t.nReconnectAttemptsMax) != null ? _ : 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                (v = t.nReconnectAttemptTimeoutMs) != null ? v : 1e4);
          }
          get name() {
            return this.m_sName;
          }
          async Connect(e) {
            return (
              (this.m_sURL = e),
              this.ConnectWithRetry(
                this.m_sURL,
                this.m_nConnectAttemptsMax,
                this.m_nConnectAttemptTimeoutMs,
              )
            );
          }
          async Reconnect() {
            return this.ConnectWithRetry(
              this.m_sURL,
              this.m_nReconnectAttemptsMax,
              this.m_nReconnectAttemptTimeoutMs,
            );
          }
          GetInterAttemptBackoffMs(e) {
            return (0, tt.OQ)(e, 1, 5) * 1e3;
          }
          async ConnectWithRetry(e, t, r) {
            this.m_bConnecting = !0;
            let i = 0;
            do {
              try {
                const l = await this.ConnectToSocket(e, r);
                if (l.result == f.R) return (this.m_bConnecting = !1), l;
                this.Log.Warning(
                  `connect attempt failed: ${l.result} - ${l.message}`,
                );
              } catch (l) {
                this.Log.Warning(
                  `connect attempt failed: exception ${l.name} - ${l}`,
                );
              }
              const a = this.GetInterAttemptBackoffMs(i);
              this.Log.Info(`connect retry: attempt:${i}/${t} backoff:${a}`),
                await new Promise((l) => setTimeout(l, a)),
                (this.m_socket = null),
                (i += 1);
            } while (i < t);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: f.zi, message: "not ready, exceeded retry count" }
            );
          }
          Disconnect() {
            this.Log.Info("disconnect requested"),
              (this.m_bDisconnectRequested = !0),
              this.m_socket.close();
          }
          PrepareForShutdown() {
            this.Log.Info("shutdown pending"),
              (this.m_bDisconnectRequested = !0);
          }
          BShouldReconnect() {
            return this.m_bConnecting || !this.m_bReconnectOnFailure
              ? !1
              : !this.m_bDisconnectRequested;
          }
          async StartReconnect() {
            if (
              (this.Log.Info("start reconnect"),
              (this.m_socket = null),
              this.m_fnOnReconnectStartHandler({ connection: this }),
              (await this.Reconnect()).result != f.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: f.zi,
                }),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !0,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            this.Log.Info("reconnect successful"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: f.R,
              });
          }
          async ConnectToSocket(e, t) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: f.zi, message: "websocket in an unexpected state" })
                : { result: f.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(e);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: f.iV,
                  message: "Failed to initialize websocket connection",
                }
              );
            }
            return (
              (this.m_socket.binaryType = "arraybuffer"),
              (this.m_socket.onerror = this.OnSocketError),
              (this.m_socket.onmessage = this.OnSocketMessage),
              (this.m_socket.onopen = this.OnSocketOpen),
              (this.m_socket.onclose = this.OnSocketClose),
              (await this.WaitForSocketOpen(this.m_socket, t))
                ? (this.Log.Info("connection ready"),
                  { result: f.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: f.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(e, t) {
            if (e.readyState != WebSocket.CONNECTING)
              return e.readyState == WebSocket.OPEN;
            const r = 100;
            let i = t / r;
            for (; e.readyState == WebSocket.CONNECTING && i > 0; )
              i--, await new Promise((a) => setTimeout(a, r));
            return e.readyState == WebSocket.OPEN;
          }
          BCanSendMessages() {
            return (
              this.m_socket != null &&
              this.m_socket.readyState == WebSocket.OPEN
            );
          }
          OnSocketError(e) {
            this.Log.Warning("websocket error");
          }
          OnSocketOpen(e) {
            this.Log.Info("websocket open");
          }
          OnSocketClose(e) {
            if (this.m_bDisconnectRequested) {
              this.Log.Info("websocket closed"),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !1,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            if (this.m_bConnecting) return;
            this.Log.Warning("websocket unexpectedly closed");
            const t = this.BShouldReconnect();
            this.m_fnOnCloseHandler({
              connection: this,
              bError: !0,
              bIsExpectedToReconnect: t,
            }),
              t && this.StartReconnect();
          }
          async OnSocketMessage(e) {
            this.m_fnOnMessageHandler(e.data);
          }
          SendSerializedMessage(e) {
            try {
              return this.m_socket.send(e), f.R;
            } catch {
              return f.zi;
            }
          }
        }
        ce([A.oI], Q.prototype, "OnSocketError", 1),
          ce([A.oI], Q.prototype, "OnSocketOpen", 1),
          ce([A.oI], Q.prototype, "OnSocketClose", 1),
          ce([A.oI], Q.prototype, "OnSocketMessage", 1);
        var Ne = Object.defineProperty,
          nt = Object.getOwnPropertyDescriptor,
          st = (n, e, t) =>
            e in n
              ? Ne(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          Z = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? nt(e, t) : e, a = n.length - 1, l;
              a >= 0;
              a--
            )
              (l = n[a]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && Ne(e, t, i), i;
          },
          U = (n, e, t) => st(n, typeof e != "symbol" ? e + "" : e, t);
        const at = "localhost",
          G = new We.wd("WebUITransport");
        class V {
          constructor() {
            U(this, "m_iMsgSeq", 1),
              U(this, "m_mapPendingMethodRequests", new Map()),
              U(this, "m_messageHandlers", new Fe()),
              U(this, "m_mapServiceCallErrorCount", new Map()),
              U(this, "m_mapConnectionDetails", new Map()),
              U(this, "m_fnOnStatusEventHandler"),
              U(this, "m_fnOnReconnectErrorHandler"),
              U(this, "m_bInitialized", !1),
              U(this, "m_nMaximumMsgSizeBytes", 1024);
          }
          BIsValid() {
            return this.m_bInitialized;
          }
          GetMaximumMsgSizeBytes() {
            return this.m_nMaximumMsgSizeBytes;
          }
          TEST_GetMaximumMsgBodySizeBytes() {
            return (
              this.m_nMaximumMsgSizeBytes -
              this.TEST_GetMsgHeaderEstimatedSizeBytes()
            );
          }
          TEST_GetMsgHeaderEstimatedSizeBytes() {
            return 128;
          }
          TEST_GetExcessivelyLargeBodySize() {
            return 64 * 1024 * 1024;
          }
          ReportError(e) {
            G.Warning(e);
            const t = (0, X.aj)();
            t &&
              t.ReportError(new Error(e), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!et.TS.IN_CLIENT) return;
            const e = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
              this.CreateConnection(
                Ve,
                "steamUI",
                e.portSteamUI,
                e.authKeySteamUI,
              ),
              this.CreateConnection(
                Ye,
                "clientdll",
                e.portClientdll,
                e.authKeyClientdll,
              ),
              (0, p.OI)().SetDefaultTransport(this),
              (0, p.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
              J.RegisterForNotifyStartShutdown(this.OnStartShutdown);
          }
          get messageHandlers() {
            return this.m_messageHandlers;
          }
          SetStatusEventHandler(e) {
            this.m_fnOnStatusEventHandler = e;
          }
          SetReconnectErrorHandler(e) {
            this.m_fnOnReconnectErrorHandler = e;
          }
          CreateConnection(e, t, r, i) {
            const a = {
                bReconnectOnFailure: !0,
                fnOnMessageHandler: this.OnWebsocketMessage,
                fnOnCloseHandler: this.OnWebsocketClose,
                fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
                fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
                nConnectAttemptsMax: 8,
                nConnectAttemptTimeoutMs: 1e4,
                nReconnectAttemptsMax: 8,
                nReconnectAttemptTimeoutMs: 1e4,
              },
              l = {
                connection: new Q(t, a),
                sUrl: `ws://${at}:${r}/transportsocket/`,
                sAuthKey: i,
                eClientExecutionSite: e,
              };
            this.m_mapConnectionDetails.set(e, l);
          }
          SendMsg(e, t, r, i) {
            return new Promise((a, l) => {
              var c;
              const _ = i.eClientExecutionSite;
              if (_ == null || _ == ze) {
                G.Error(`SendMsg: Invalid client execution site: ${_}`),
                  l(`Transport SendMsg: invalid client execution site ${_}`);
                return;
              }
              const v = this.m_mapConnectionDetails.get(_);
              if (v == null) {
                G.Error(
                  `SendMsg: could not find connection for execution site: ${_}`,
                ),
                  l(
                    `Transport SendMsg: could not find connection for execution site ${_}`,
                  );
                return;
              }
              const q = v.connection;
              if (!q.BCanSendMessages()) {
                const k =
                  (c = this.m_mapServiceCallErrorCount.get(e)) != null ? c : 1;
                this.m_mapServiceCallErrorCount.set(e, k + 1);
                const ue = `SendMsg: Attempt to send message but socket wasn't ready: ${q.name} - ${e}`;
                k == 1 && this.ReportError(ue),
                  G.Warning(ue + ` error count: ${k}`),
                  l("Transport SendMsg: socket not ready");
                return;
              }
              const ee = this.m_iMsgSeq++;
              t.SetEMsg(ae.bSr),
                t.Hdr().set_target_job_name(e),
                t.Hdr().set_jobid_source("" + ee);
              const te = t.Serialize();
              if (te.byteLength >= this.m_nMaximumMsgSizeBytes) {
                G.Error(
                  `SendMsg: message exceeds maximum size: ${te.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const k = d.w.Init(r);
                k.Hdr().set_eresult(f.zi), a(k);
                return;
              }
              if (q.SendSerializedMessage(te) != f.R) {
                G.Error("SendMsg: Failed to send message"),
                  l("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(ee, {
                m_iSeq: ee,
                m_responseClass: r,
                m_fnCallback: a,
                m_fnError: l,
              });
            });
          }
          SendNotification(e, t, r) {
            var i;
            const a = r.eClientExecutionSite;
            if (a == null || a == ze)
              return (
                G.Error(
                  `SendNotification: Invalid client execution site: ${a}`,
                ),
                !1
              );
            const l = this.m_mapConnectionDetails.get(a);
            if (l == null)
              return (
                G.Error(
                  `SendNotification: could not find connection for execution site: ${a}`,
                ),
                !1
              );
            const c = l.connection;
            if (!c.BCanSendMessages()) {
              const v =
                (i = this.m_mapServiceCallErrorCount.get(e)) != null ? i : 1;
              this.m_mapServiceCallErrorCount.set(e, v + 1);
              const q = `SendNotification: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
              return (
                v == 1 && this.ReportError(q),
                G.Warning(q + ` error count: ${v}`),
                !1
              );
            }
            return (
              t.SetEMsg(ae.bSr),
              t.Hdr().set_target_job_name(e),
              c.SendSerializedMessage(t.Serialize()) == f.R
            );
          }
          async ConnectToSite(e) {
            const r = await e.connection.Connect(e.sUrl);
            return r.result != f.R
              ? r
              : (await this.SendAuthMessage(e)).BSuccess()
                ? { result: f.R, message: "connected" }
                : { result: f.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const e = [];
            for (const [r, i] of this.m_mapConnectionDetails)
              e.push(this.ConnectToSite(i));
            const t = await Promise.all(e);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const r of t) if (r.result != f.R) return r;
            return { result: f.R, message: "ready" };
          }
          GetConnectionDetails(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              if (r.connection === e) return r;
            return (
              G.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let e = !0;
            for (const [t, r] of this.m_mapConnectionDetails)
              r.connection.BCanSendMessages() || (e = !1);
            this.m_fnOnStatusEventHandler({ bConnected: e });
          }
          OnWebsocketReconnectStart(e) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(e) {
            var t;
            if ((this.DispatchTransportStatusUpdate(), e.eResult != f.R)) {
              G.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                (t = this.m_fnOnReconnectErrorHandler) == null ||
                  t.call(this, {});
              return;
            }
            this.FailAllPendingRequests();
            const r = this.GetConnectionDetails(e.connection);
            r && this.SendAuthMessage(r);
          }
          OnWebsocketClose(e) {
            e.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(e) {
            const t = new Ke.pV(e),
              r = d.w.InitHeaderFromPacket(t);
            r.Hdr().jobid_target() && r.Hdr().jobid_target() !== Oe.kFb
              ? this.DispatchMethodResponse(r)
              : this.DispatchNotification(r);
          }
          DispatchMethodResponse(e) {
            const t = parseInt(e.Hdr().jobid_target()),
              r = this.m_mapPendingMethodRequests.get(t);
            if (r == null) {
              (0, ie.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, ie.wT)(
              t == r.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(t);
            const i = d.w.InitFromMsg(r.m_responseClass, e);
            r.m_fnCallback(i);
          }
          DispatchNotification(e) {
            const t = (r) => {
              (0, ie.wT)(
                !1,
                "Transport Error: A notification should not generate a response",
              );
            };
            this.m_messageHandlers.DispatchMsgToHandlers(e, t);
          }
          FailAllPendingRequests() {
            for (const [e, t] of this.m_mapPendingMethodRequests) {
              this.ReportError(
                `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
              );
              let r = d.w.Init(t.m_responseClass);
              r.Hdr().set_eresult(f.zi), t.m_fnCallback(r);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(e) {
            const t = J.AuthenticateHandler.name,
              r = { eClientExecutionSite: e.eClientExecutionSite },
              i = d.w.Init(le);
            return (
              i.Hdr().set_webui_auth_key(e.sAuthKey),
              await this.SendMsg(t, i, J.AuthenticateHandler.response, r)
            );
          }
          OnStartShutdown(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              r.connection.PrepareForShutdown();
            return f.R;
          }
        }
        Z([A.oI], V.prototype, "OnWebsocketReconnectStart", 1),
          Z([A.oI], V.prototype, "OnWebsocketReconnectFinish", 1),
          Z([A.oI], V.prototype, "OnWebsocketClose", 1),
          Z([A.oI], V.prototype, "OnWebsocketMessage", 1),
          Z([A.oI], V.prototype, "OnStartShutdown", 1);
        const ot = new V();
        var lt = h(27066),
          qe = Object.defineProperty,
          ct = Object.getOwnPropertyDescriptor,
          ut = (n, e, t) =>
            e in n
              ? qe(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          L = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? ct(e, t) : e, a = n.length - 1, l;
              a >= 0;
              a--
            )
              (l = n[a]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && qe(e, t, i), i;
          },
          F = (n, e, t) => ut(n, typeof e != "symbol" ? e + "" : e, t);
        function Y() {
          return D.TS.IN_MOBILE ? D.NQ : (0, D.xv)();
        }
        function dt(n) {
          if (n === "") return !1;
          try {
            return new RegExp("\\b(" + n + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${n}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const mt = 3600,
          ve = "(1)";
        class z {
          constructor(e) {
            F(this, "m_WebUIServiceTransport"),
              F(this, "m_unAccountID"),
              F(this, "m_Transport", null),
              F(this, "m_Storage", null),
              F(this, "m_TextFilterPreferences", {
                eTextFilterSetting: O.Bx6.NS,
                bIgnoreFriends: !1,
              }),
              F(this, "m_TextFilterWords"),
              F(this, "m_mapPlayerCache", new Map()),
              F(this, "m_strBannedWords", ""),
              F(this, "m_strProfanityWords", ""),
              F(this, "m_strCleanWords", ""),
              F(this, "m_strBannedPattern", ""),
              F(this, "m_strCleanPattern", ""),
              F(this, "m_regexBannedWords", null),
              F(this, "m_regexCleanWords", null),
              F(this, "m_bShownFilterTip", !1),
              F(this, "m_bInitialized", !1),
              F(this, "m_bFilterChangedWhileLoading", !1),
              F(this, "m_bOngoingLoad", !1),
              F(this, "m_DataAccess"),
              F(this, "m_nLoadLanguagesRetryTimeout"),
              (0, I.Gn)(this);
            let t = new O.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: t.text_filter_setting(),
              bIgnoreFriends: t.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new O.EyI()),
              (this.m_DataAccess = e);
          }
          async Init(e = 0, t = null, r = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = ot),
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
              await (0, I.z7)(() => !this.m_bOngoingLoad),
              await this.InitFiltersWithRetry();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                K.NotifyTextFilterDictionaryChangedHandler,
                this.OnTextFilterDictionaryChanged,
              ),
              this.InitSteamEngineLanguage(D.TS.LANGUAGE),
              D.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(e) {
            return (
              this.m_bInitialized
                ? this.InitFiltersWithRetry()
                : (this.m_bFilterChangedWhileLoading = !0),
              f.R
            );
          }
          async InitFiltersWithRetry() {
            do
              (this.m_bFilterChangedWhileLoading = !1),
                (this.m_bInitialized = !1),
                (this.m_bOngoingLoad = !0),
                await this.LoadLanguages(),
                this.OnFilterDataChanged(),
                (this.m_bInitialized = !0);
            while (this.m_bFilterChangedWhileLoading);
            this.m_bOngoingLoad = !1;
          }
          InitSteamEngineLanguage(e) {
            const t = d.w.Init(ne);
            t.Body().set_language(e),
              t.Body().set_type("profanity"),
              K.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              ),
              t.Body().set_type("banned"),
              K.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(e, t) {
            const r = d.w.Init(se);
            return (
              r.Body().set_language(e),
              r.Body().set_type(t),
              K.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
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
              const t = new TextEncoder().encode(ve + e);
              return Ee.fromByteArray(t);
            } catch {
              return "";
            }
          }
          DeobfuscateString(e) {
            try {
              const t = Ee.toByteArray(e);
              let r = new TextDecoder().decode(t);
              return r.startsWith(ve)
                ? ((r = r.slice(ve.length)), r)
                : (console.log(
                    "DeobfuscateString given invalid base64 data, ignoring: " +
                      e,
                  ),
                  "");
            } catch {
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
                this.m_TextFilterWords = O.EyI.fromObject(JSON.parse(e));
              } catch {
                console.warn("Error parsing cached text filter word list", e),
                  (this.m_TextFilterWords = new O.EyI());
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
            e != null && t != null && this.BRebuildFilter(e, t);
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
            let e = new O.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let t = d.w.Init(O.tzK);
                  e = (await O.xtC.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: (0, D.KC)(), origin: Y() };
                  const r = await $().get(
                    D.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 },
                  );
                  e = O.B4H.fromObject(r.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new O.EyI();
              if (e.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let r = d.w.Init(O.SCE);
                    t = (await O.xtC.GetTextFilterWords(this.m_Transport, r))
                      .Body()
                      .words();
                  } else {
                    let r = { sessionid: (0, D.KC)(), origin: Y() };
                    const i = await $().get(
                      D.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: r, withCredentials: !0 },
                    );
                    t = O.EyI.fromObject(i.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(t);
            }
          }
          UpdateCommunityPreferences(e) {
            var t;
            let r = !1;
            e.text_filter_setting() !==
              ((t = this.m_TextFilterPreferences) == null
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
              await this.LoadLanguage(D.TS.LANGUAGE),
                D.TS.LANGUAGE !== "english" &&
                  (await this.LoadLanguage("english"));
            } catch (t) {
              this.m_nLoadLanguagesRetryTimeout &&
                ((0, ie.wT)(
                  !this.m_nLoadLanguagesRetryTimeout,
                  "Got two concurrent calls to TextFilteringStore.LoadLanguages",
                ),
                window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0)),
                (e = Math.min(e * 2, mt)),
                console.warn(
                  "LoadLanguages caught",
                  t,
                  "retry in",
                  e,
                  "seconds",
                ),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                  async () => {
                    (this.m_nLoadLanguagesRetryTimeout = void 0),
                      await this.LoadLanguages(e),
                      this.OnFilterDataChanged();
                  },
                  e * 1e3,
                ));
            }
          }
          async LoadLanguage(e) {
            let t = "1",
              r = "",
              i = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const a = await this.GetSteamEngineTextFilterDictionary(
                    e,
                    "banned",
                  );
                  this.m_strBannedWords += a.Body().dictionary();
                }
                {
                  const a = await this.GetSteamEngineTextFilterDictionary(
                    e,
                    "profanity",
                  );
                  this.m_strProfanityWords += a.Body().dictionary();
                }
                i = !0;
              } catch (a) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  a,
                );
              }
            if (!i) {
              r = `${D.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=${t}&origin=${Y()}`;
              {
                const a = await $().get(r);
                this.m_strBannedWords += a.data;
              }
              r = `${D.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=${t}&origin=${Y()}`;
              {
                const a = await $().get(r);
                this.m_strProfanityWords += a.data;
              }
            }
            r = `${D.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=${t}&origin=${Y()}`;
            {
              const a = await $().get(r);
              this.m_strCleanWords += a.data;
            }
          }
          CreatePattern(e) {
            let t = e.filter(function (r) {
              return dt(r);
            });
            return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            let e = new RegExp(/\s*[\r\n]+\s*/g),
              t = [],
              r = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case O.Bx6.C5:
                break;
              case O.Bx6.NS:
                break;
              case O.Bx6.bf:
                t = t.concat(this.m_strBannedWords.split(e));
                break;
              default:
                t = t.concat(
                  this.m_strProfanityWords.split(e),
                  this.m_strBannedWords.split(e),
                );
                break;
            }
            (t = t.concat(
              this.m_TextFilterWords.text_filter_custom_banned_words(),
            )),
              (r = this.m_strCleanWords.split(e)),
              (r = r.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let i = this.CreatePattern(t),
              a = this.CreatePattern(r);
            a != "" && (a = "^(" + a + ")$"),
              this.BRebuildFilter(i, a) && this.SaveFilter();
          }
          BRebuildFilter(e, t) {
            if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
              return !1;
            if (
              ((this.m_regexBannedWords = null),
              (this.m_strBannedPattern = e),
              e !== "")
            )
              try {
                this.m_regexBannedWords = new RegExp(e, "ugi");
              } catch (r) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, X.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${r}`,
                    ),
                  ),
                  (this.m_strBannedPattern = "");
              }
            if (
              ((this.m_regexCleanWords = null),
              (this.m_strCleanPattern = t),
              t !== "")
            )
              try {
                this.m_regexCleanWords = new RegExp(t, "ugi");
              } catch (r) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, X.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${r}`,
                    ),
                  ),
                  (this.m_strCleanPattern = "");
              }
            return !0;
          }
          CreateProfanityReplacement(e) {
            return "\u2665".repeat(e);
          }
          BHasFilter() {
            return this.m_regexBannedWords != null;
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
            return (
              typeof e == "string" && e !== ""
                ? (r = new De.b(e).GetAccountID())
                : typeof e == "number" && (r = e),
              !t ||
              r == this.m_unAccountID ||
              (e &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(r))
                ? t
                : t.replace(this.m_regexBannedWords, (i) =>
                    this.m_regexCleanWords &&
                    i.search(this.m_regexCleanWords) == 0
                      ? i
                      : this.CreateProfanityReplacement(i.length),
                  )
            );
          }
        }
        L([I.sH], z.prototype, "m_TextFilterPreferences", 2),
          L([I.sH], z.prototype, "m_mapPlayerCache", 2),
          L([I.sH], z.prototype, "m_regexBannedWords", 2),
          L([I.sH], z.prototype, "m_regexCleanWords", 2),
          L([I.sH], z.prototype, "m_bInitialized", 2),
          L([I.sH], z.prototype, "m_bFilterChangedWhileLoading", 2),
          L([I.sH], z.prototype, "m_bOngoingLoad", 2),
          L([I.XI], z.prototype, "Init", 1),
          L([lt.o], z.prototype, "OnTextFilterDictionaryChanged", 1),
          L([I.XI], z.prototype, "UpdateCommunityPreferences", 1),
          L([I.XI], z.prototype, "BRebuildFilter", 1);
        let Ie;
        function gt() {
          if (!Ie) {
            const n = new Set();
            let e = { sessionid: (0, D.KC)(), origin: Y() };
            $()
              .get(D.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: e,
                withCredentials: !0,
              })
              .then((t) => {
                var r, i;
                for (const a of (i =
                  (r = t.data.friendslist) == null ? void 0 : r.friends) != null
                  ? i
                  : [])
                  (0, Oe.S$u)(a.efriendrelationship) &&
                    n.add(new De.b(a.ulfriendid).GetAccountID());
              }),
              (Ie = (t) => n.has(t));
          }
          return Ie;
        }
      },
    },
  ]);
})();
