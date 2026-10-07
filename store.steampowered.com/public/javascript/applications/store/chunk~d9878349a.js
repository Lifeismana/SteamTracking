/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [10177],
    {
      81944: (ge, ie, m) => {
        m.d(ie, { J: () => f });
        var ne = m(7850),
          E = m(19298),
          Z = m(90626),
          I = m(79089),
          b = m(18938),
          ee = m(2259);
        class f extends Z.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = Z.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(g) {
            this.UpdateObserver(g);
          }
          UpdateObserver(g) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              g &&
              (g.rootMargin != this.m_observer.rootMargin ||
                g.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let u = this.m_refElement.current;
            if (
              (this.m_observer &&
                u != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && u)
            ) {
              let N = { root: this.FindScrollableAncestor(u) };
              this.props.rootMargin && (N.rootMargin = this.props.rootMargin),
                this.props.thresholds && (N.threshold = this.props.thresholds),
                (this.m_observer = (0, ee.md)(u, this.OnIntersection, N));
            }
            this.m_observer &&
              u &&
              u != this.m_elTracked &&
              (this.m_observer.observe(u), (this.m_elTracked = u));
          }
          FindScrollableAncestor(g) {
            return (0, I.Kf)(g, (u) => {
              const H = this.props.horizontal
                ? window.getComputedStyle(u).overflowX
                : window.getComputedStyle(u).overflowY;
              return !!(
                H == "scroll" ||
                H == "auto" ||
                u.classList.contains(f.GetScrollableClassname())
              );
            });
          }
          HandleRef = (g) => {
            (0, b.cZ)(this.m_refElement, g),
              this.props.containerRef && (0, b.cZ)(this.props.containerRef, g);
          };
          OnIntersection = (g) => {
            let u = !1;
            for (const H of g)
              if (H.isIntersecting) {
                u = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != u &&
              ((this.m_bPreviouslyIntersecting = u),
              this.props.onVisibilityChange && this.props.onVisibilityChange(u),
              u && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: g,
              rootMargin: u,
              trigger: H,
              horizontal: N,
              containerRef: M,
              ...d
            } = this.props;
            return (0, ne.jsx)(E.Z, {
              ref: this.HandleRef,
              ...d,
              children: this.props.children,
            });
          }
        }
      },
      24544: (ge, ie, m) => {
        m.d(ie, { s: () => L, Q: () => Le });
        var ne = m(41735),
          E = m.n(ne),
          Z = m(71944),
          I = m(14947),
          b = m(72604),
          ee = m(99412),
          f = m(35038),
          ce = m(76559),
          g = m(27386),
          u = m(3166),
          H = m(7414),
          N = m(71742),
          M = m(80613),
          d = m.n(M),
          i = m(75245),
          z = m(66781);
        class p extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.language || i.Sg(p.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(p.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new p();
            return p.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(p.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(p.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        }
        class B extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.language || i.Sg(B.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(B.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new B();
            return B.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(B.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(B.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.dictionary || i.Sg(y.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(y.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new y();
            return y.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(y.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(y.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        }
        class v extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.language || i.Sg(v.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(v.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new v();
            return v.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(v.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(v.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class O extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.pid || i.Sg(O.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    pid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(O.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new O();
            return O.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(O.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(O.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class T extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.gameid || i.Sg(T.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    gameid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(T.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new T();
            return T.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(T.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(T.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class W extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.gameid || i.Sg(W.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    gameid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(W.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new W();
            return W.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(W.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(W.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class x extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.search_term || i.Sg(x.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    search_term: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    max_results: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = i.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(x.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new x();
            return x.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(x.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(x.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class S extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.appids || i.Sg(S.M()),
              M.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(S.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new S();
            return S.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(S.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(S.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var X;
        ((l) => {
          l.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: p,
          };
          function e(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultHandlerRegistry()),
              n == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : n.RegisterServiceNotificationHandler(
                    l.UpdateTextFilterDictionaryHandler,
                    h,
                  )
            );
          }
          l.RegisterForUpdateTextFilterDictionary = e;
          function t(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, f.I8)(p, h),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.UpdateTextFilterDictionary = t;
          function r(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, f.I8)(p, h),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (l.SendMsgUpdateTextFilterDictionary = r),
            (l.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: B,
              response: y,
            });
          function s(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((_, $) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      $(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, f.I8)(B, h),
                    y,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.GetTextFilterDictionary = s;
          function a(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((_, $) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      $(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, f.I8)(B, h),
                    y,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (l.SendMsgGetTextFilterDictionary = a),
            (l.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: v,
            });
          function o(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultHandlerRegistry()),
              n == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : n.RegisterServiceNotificationHandler(
                    l.NotifyTextFilterDictionaryChangedHandler,
                    h,
                  )
            );
          }
          l.RegisterForNotifyTextFilterDictionaryChanged = o;
          function c(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, f.I8)(v, h),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.NotifyTextFilterDictionaryChanged = c;
          function F(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, f.I8)(v, h),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (l.SendMsgNotifyTextFilterDictionaryChanged = F),
            (l.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: O,
              response: T,
            });
          function R(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((_, $) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      $(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, f.I8)(O, h),
                    T,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.GetGameIDForPID = R;
          function Y(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((_, $) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      $(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, f.I8)(O, h),
                    T,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (l.SendMsgGetGameIDForPID = Y),
            (l.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: W,
            });
          function K(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultHandlerRegistry()),
              n == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : n.RegisterServiceNotificationHandler(
                    l.SetOverlayEscapeKeyHandlingHandler,
                    h,
                  )
            );
          }
          l.RegisterForSetOverlayEscapeKeyHandling = K;
          function me(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, f.I8)(W, h),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.SetOverlayEscapeKeyHandling = me;
          function V(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, f.I8)(W, h),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (l.SendMsgSetOverlayEscapeKeyHandling = V),
            (l.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: x,
              response: S,
            });
          function se(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((_, $) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      $(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, f.I8)(x, h),
                    S,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.SearchAppDataCacheByStoreKeywords = se;
          function Pe(h, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((_, $) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      $(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, f.I8)(x, h),
                    S,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          l.SendMsgSearchAppDataCacheByStoreKeywords = Pe;
        })(X || (X = {}));
        var C = m(30096),
          he = m(15369),
          te = m(94354),
          de = m(57589);
        const ue = 0,
          be = 1,
          Me = 2,
          je = 3;
        function ke(l) {
          return "unknown EClientExecutionSite ( " + l + " )";
        }
        class A extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new A();
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new A();
            return A.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var pe = Object.defineProperty,
          Be = Object.getOwnPropertyDescriptor,
          fe = (l, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? Be(e, t) : e, a = l.length - 1, o;
              a >= 0;
              a--
            )
              (o = l[a]) && (s = (r ? o(e, t, s) : o(s)) || s);
            return r && s && pe(e, t, s), s;
          };
        class ae {
          constructor() {
            (0, I.Gn)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(e, t) {
            let r = e.GetEMsg();
            if (r == te.bSr) {
              let s = e.Hdr().target_job_name();
              if (s) {
                let a = this.m_mapServiceMethodHandlers.get(s);
                if (a) {
                  this.DEBUG_LogMessageDispatch(e, a[0]);
                  for (let o of a)
                    try {
                      o.invoke(e, t);
                    } catch (c) {
                      c instanceof Error
                        ? (0, H.aj)().ReportError(c)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${s}): `,
                            c,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let s = this.m_mapCallbacks.get(r);
              if (s) {
                this.DEBUG_LogMessageDispatch(e, s[0]);
                for (let a of s)
                  try {
                    a.invoke(e);
                  } catch (o) {
                    o instanceof Error
                      ? (0, H.aj)().ReportError(o)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          o,
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
            let s = this.m_mapCallbacks.get(e);
            return (
              s ||
                ((s = []),
                this.m_mapCallbacks.set(e, s),
                this.m_rgRegisteredEMsgs.push(e)),
              s.push({ invoke: r, msgClass: t }),
              {
                invoke: r,
                unregister: () => {
                  let a = this.m_mapCallbacks.get(e);
                  if (a)
                    for (let o = 0; o < a.length; o++)
                      a[o].invoke == r && (a.splice(o, 1), o--);
                },
              }
            );
          }
          AddServiceMethodHandler(e, t) {
            let r = (s, a) => {
              let o = f.w.InitFromMsg(e.request, s),
                c = f.w.Init(e.response, te.kHd),
                F = t(o, c),
                R = (Y) => {
                  c.Hdr().set_eresult(Y), a(c);
                };
              F instanceof Promise
                ? F.then(R).catch(() => {
                    R(b.zi);
                  })
                : R(F);
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
                  let s = this.m_mapServiceMethodHandlers.get(e.name);
                  if (s)
                    for (let a = 0; a < s.length; a++)
                      s[a].invoke == r && (s.splice(a, 1), a--);
                },
              }
            );
          }
          AddServiceNotificationHandler(e, t) {
            let r = (a, o) => {
                let c = f.w.InitFromMsg(e.request, a);
                t(c);
              },
              s = this.m_mapServiceMethodHandlers.get(e.name);
            return (
              s ||
                ((s = []),
                this.m_mapServiceMethodHandlers.set(e.name, s),
                this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
              s.push({ invoke: r, msgClass: e.request }),
              {
                invoke: r,
                unregister: () => {
                  let a = this.m_mapServiceMethodHandlers.get(e.name);
                  if (a)
                    for (let o = 0; o < a.length; o++)
                      a[o].invoke == r && (a.splice(o, 1), o--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(e, t) {
            return this.AddCallback(e, void 0, t);
          }
          RegisterEMessageHandler(e, t, r) {
            return this.AddCallback(e, t, (s) => {
              r(f.w.InitFromMsg(t, s));
            });
          }
          RegisterEMessageAction(e, t, r) {
            return this.AddCallback(e, t, (s) => {
              (0, I.h5)(() => {
                r(f.w.InitFromMsg(t, s));
              });
            });
          }
          RegisterServiceNotificationHandler(e, t) {
            return this.AddServiceNotificationHandler(e, t);
          }
          RegisterServiceNotificationHandlerAction(e, t) {
            return this.AddServiceNotificationHandler(e, (r) => {
              let s;
              return (
                (0, I.h5)(() => {
                  s = t(r);
                }),
                s
              );
            });
          }
          RegisterServiceMethodHandler(e, t) {
            return this.AddServiceMethodHandler(e, t);
          }
          RegisterServiceMethodHandlerAction(e, t) {
            return this.AddServiceMethodHandler(e, (r, s) => {
              let a;
              return (
                (0, I.h5)(() => {
                  a = t(r, s);
                }),
                a
              );
            });
          }
        }
        fe([I.sH], ae.prototype, "m_rgRegisteredEMsgs", 2),
          fe([I.sH], ae.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class w extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.auth_key || i.Sg(w.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(w.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new w();
            return w.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(w.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(w.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        }
        class P extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (d().BinaryReader)(e),
              r = new P();
            return P.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class j extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (d().BinaryReader)(e),
              r = new j();
            return j.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var q;
        ((l) => {
          l.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: w,
            response: P,
          };
          function e(o, c) {
            return (
              (c = c || (0, z.OI)().GetDefaultTransport()),
              c == null
                ? new Promise((F, R) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      R(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : c.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, f.I8)(w, o),
                    P,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          l.Authenticate = e;
          function t(o, c) {
            return (
              (c = c || (0, z.OI)().GetDefaultTransport()),
              c == null
                ? new Promise((F, R) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      R(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : c.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, f.I8)(w, o),
                    P,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (l.SendMsgAuthenticate = t),
            (l.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: j,
            });
          function r(o, c) {
            return (
              (c = c || (0, z.OI)().GetDefaultHandlerRegistry()),
              c == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : c.RegisterServiceNotificationHandler(
                    l.NotifyStartShutdownHandler,
                    o,
                  )
            );
          }
          l.RegisterForNotifyStartShutdown = r;
          function s(o, c) {
            return (
              (c = c || (0, z.OI)().GetDefaultTransport()),
              c == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : c.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, f.I8)(j, o),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          l.NotifyStartShutdown = s;
          function a(o, c) {
            return (
              (c = c || (0, z.OI)().GetDefaultTransport()),
              c == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : c.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, f.I8)(j, o),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          l.SendMsgNotifyStartShutdown = a;
        })(q || (q = {}));
        var we = m(98609),
          ye = m(13854),
          ve = Object.defineProperty,
          Oe = Object.getOwnPropertyDescriptor,
          re = (l, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? Oe(e, t) : e, a = l.length - 1, o;
              a >= 0;
              a--
            )
              (o = l[a]) && (s = (r ? o(e, t, s) : o(s)) || s);
            return r && s && ve(e, t, s), s;
          };
        class D {
          m_socket = null;
          m_sName;
          m_sURL;
          Log = new de.wd("CWebSocketConnection", () => this.m_sName);
          m_bDisconnectRequested = !1;
          m_bConnecting = !1;
          m_fnOnMessageHandler;
          m_fnOnCloseHandler;
          m_fnOnReconnectStartHandler;
          m_fnOnReconnectFinishHandler;
          m_nConnectAttemptsMax;
          m_nConnectAttemptTimeoutMs;
          m_bReconnectOnFailure;
          m_nReconnectAttemptTimeoutMs;
          m_nReconnectAttemptsMax;
          constructor(e, t) {
            (this.m_sName = e),
              (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                t.fnOnReconnectStartHandler ?? (() => {})),
              (this.m_fnOnReconnectFinishHandler =
                t.fnOnReconnectFinishHandler ?? (() => {})),
              (this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8),
              (this.m_nConnectAttemptTimeoutMs =
                t.nConnectAttemptTimeoutMs ?? 1e3),
              (this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? !1),
              (this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                t.nReconnectAttemptTimeoutMs ?? 1e4);
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
            return (0, ye.OQ)(e, 1, 5) * 1e3;
          }
          async ConnectWithRetry(e, t, r) {
            this.m_bConnecting = !0;
            let s = 0;
            do {
              try {
                const o = await this.ConnectToSocket(e, r);
                if (o.result == b.R) return (this.m_bConnecting = !1), o;
                this.Log.Warning(
                  `connect attempt failed: ${o.result} - ${o.message}`,
                );
              } catch (o) {
                this.Log.Warning(
                  `connect attempt failed: exception ${o.name} - ${o}`,
                );
              }
              const a = this.GetInterAttemptBackoffMs(s);
              this.Log.Info(`connect retry: attempt:${s}/${t} backoff:${a}`),
                await new Promise((o) => setTimeout(o, a)),
                (this.m_socket = null),
                (s += 1);
            } while (s < t);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: b.zi, message: "not ready, exceeded retry count" }
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
              (await this.Reconnect()).result != b.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: b.zi,
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
                eResult: b.R,
              });
          }
          async ConnectToSocket(e, t) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: b.zi, message: "websocket in an unexpected state" })
                : { result: b.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(e);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: b.iV,
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
                  { result: b.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: b.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(e, t) {
            if (e.readyState != WebSocket.CONNECTING)
              return e.readyState == WebSocket.OPEN;
            const r = 100;
            let s = t / r;
            for (; e.readyState == WebSocket.CONNECTING && s > 0; )
              s--, await new Promise((a) => setTimeout(a, r));
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
              return this.m_socket.send(e), b.R;
            } catch {
              return b.zi;
            }
          }
        }
        re([C.oI], D.prototype, "OnSocketError", 1),
          re([C.oI], D.prototype, "OnSocketOpen", 1),
          re([C.oI], D.prototype, "OnSocketClose", 1),
          re([C.oI], D.prototype, "OnSocketMessage", 1);
        var Te = Object.defineProperty,
          We = Object.getOwnPropertyDescriptor,
          G = (l, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? We(e, t) : e, a = l.length - 1, o;
              a >= 0;
              a--
            )
              (o = l[a]) && (s = (r ? o(e, t, s) : o(s)) || s);
            return r && s && Te(e, t, s), s;
          };
        const xe = "localhost",
          k = new de.wd("WebUITransport");
        class J {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new ae();
          m_mapServiceCallErrorCount = new Map();
          m_mapConnectionDetails = new Map();
          m_fnOnStatusEventHandler;
          m_fnOnReconnectErrorHandler;
          m_bInitialized = !1;
          m_nMaximumMsgSizeBytes = 1024;
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
            k.Warning(e);
            const t = (0, H.aj)();
            t &&
              t.ReportError(new Error(e), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!we.TS.IN_CLIENT) return;
            const e = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
              this.CreateConnection(
                be,
                "steamUI",
                e.portSteamUI,
                e.authKeySteamUI,
              ),
              this.CreateConnection(
                Me,
                "clientdll",
                e.portClientdll,
                e.authKeyClientdll,
              ),
              (0, z.OI)().SetDefaultTransport(this),
              (0, z.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
              q.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
          CreateConnection(e, t, r, s) {
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
              o = {
                connection: new D(t, a),
                sUrl: `ws://${xe}:${r}/transportsocket/`,
                sAuthKey: s,
                eClientExecutionSite: e,
              };
            this.m_mapConnectionDetails.set(e, o);
          }
          SendMsg(e, t, r, s) {
            return new Promise((a, o) => {
              const c = s.eClientExecutionSite;
              if (c == null || c == ue) {
                k.Error(`SendMsg: Invalid client execution site: ${c}`),
                  o(`Transport SendMsg: invalid client execution site ${c}`);
                return;
              }
              const F = this.m_mapConnectionDetails.get(c);
              if (F == null) {
                k.Error(
                  `SendMsg: could not find connection for execution site: ${c}`,
                ),
                  o(
                    `Transport SendMsg: could not find connection for execution site ${c}`,
                  );
                return;
              }
              const R = F.connection;
              if (!R.BCanSendMessages()) {
                const V = this.m_mapServiceCallErrorCount.get(e) ?? 1;
                this.m_mapServiceCallErrorCount.set(e, V + 1);
                const se = `SendMsg: Attempt to send message but socket wasn't ready: ${R.name} - ${e}`;
                V == 1 && this.ReportError(se),
                  k.Warning(se + ` error count: ${V}`),
                  o("Transport SendMsg: socket not ready");
                return;
              }
              const Y = this.m_iMsgSeq++;
              t.SetEMsg(te.bSr),
                t.Hdr().set_target_job_name(e),
                t.Hdr().set_jobid_source("" + Y);
              const K = t.Serialize();
              if (K.byteLength >= this.m_nMaximumMsgSizeBytes) {
                k.Error(
                  `SendMsg: message exceeds maximum size: ${K.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const V = f.w.Init(r);
                V.Hdr().set_eresult(b.zi), a(V);
                return;
              }
              if (R.SendSerializedMessage(K) != b.R) {
                k.Error("SendMsg: Failed to send message"),
                  o("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(Y, {
                m_iSeq: Y,
                m_responseClass: r,
                m_fnCallback: a,
                m_fnError: o,
              });
            });
          }
          SendNotification(e, t, r) {
            const s = r.eClientExecutionSite;
            if (s == null || s == ue)
              return (
                k.Error(
                  `SendNotification: Invalid client execution site: ${s}`,
                ),
                !1
              );
            const a = this.m_mapConnectionDetails.get(s);
            if (a == null)
              return (
                k.Error(
                  `SendNotification: could not find connection for execution site: ${s}`,
                ),
                !1
              );
            const o = a.connection;
            if (!o.BCanSendMessages()) {
              const F = this.m_mapServiceCallErrorCount.get(e) ?? 1;
              this.m_mapServiceCallErrorCount.set(e, F + 1);
              const R = `SendNotification: Attempt to send message but socket wasn't ready: ${o.name} - ${e}`;
              return (
                F == 1 && this.ReportError(R),
                k.Warning(R + ` error count: ${F}`),
                !1
              );
            }
            return (
              t.SetEMsg(te.bSr),
              t.Hdr().set_target_job_name(e),
              o.SendSerializedMessage(t.Serialize()) == b.R
            );
          }
          async ConnectToSite(e) {
            const r = await e.connection.Connect(e.sUrl);
            return r.result != b.R
              ? r
              : (await this.SendAuthMessage(e)).BSuccess()
                ? { result: b.R, message: "connected" }
                : { result: b.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const e = [];
            for (const [r, s] of this.m_mapConnectionDetails)
              e.push(this.ConnectToSite(s));
            const t = await Promise.all(e);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const r of t) if (r.result != b.R) return r;
            return { result: b.R, message: "ready" };
          }
          GetConnectionDetails(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              if (r.connection === e) return r;
            return (
              k.Error("GetConnectionDetails: failed to identify connection"),
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
            if ((this.DispatchTransportStatusUpdate(), e.eResult != b.R)) {
              k.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                this.m_fnOnReconnectErrorHandler?.({});
              return;
            }
            this.FailAllPendingRequests();
            const t = this.GetConnectionDetails(e.connection);
            t && this.SendAuthMessage(t);
          }
          OnWebsocketClose(e) {
            e.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(e) {
            const t = new he.pV(e),
              r = f.w.InitHeaderFromPacket(t);
            r.Hdr().jobid_target() && r.Hdr().jobid_target() !== ee.kFb
              ? this.DispatchMethodResponse(r)
              : this.DispatchNotification(r);
          }
          DispatchMethodResponse(e) {
            const t = parseInt(e.Hdr().jobid_target()),
              r = this.m_mapPendingMethodRequests.get(t);
            if (r == null) {
              (0, N.wT)(!1, "Transport Error: no pending callback for request");
              return;
            }
            (0, N.wT)(
              t == r.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(t);
            const s = f.w.InitFromMsg(r.m_responseClass, e);
            r.m_fnCallback(s);
          }
          DispatchNotification(e) {
            const t = (r) => {
              (0, N.wT)(
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
              let r = f.w.Init(t.m_responseClass);
              r.Hdr().set_eresult(b.zi), t.m_fnCallback(r);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(e) {
            const t = q.AuthenticateHandler.name,
              r = { eClientExecutionSite: e.eClientExecutionSite },
              s = f.w.Init(w);
            return (
              s.Hdr().set_webui_auth_key(e.sAuthKey),
              await this.SendMsg(t, s, q.AuthenticateHandler.response, r)
            );
          }
          OnStartShutdown(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              r.connection.PrepareForShutdown();
            return b.R;
          }
        }
        G([C.oI], J.prototype, "OnWebsocketReconnectStart", 1),
          G([C.oI], J.prototype, "OnWebsocketReconnectFinish", 1),
          G([C.oI], J.prototype, "OnWebsocketClose", 1),
          G([C.oI], J.prototype, "OnWebsocketMessage", 1),
          G([C.oI], J.prototype, "OnStartShutdown", 1);
        const Se = new J();
        var ze = m(27066),
          Ie = Object.defineProperty,
          Re = Object.getOwnPropertyDescriptor,
          U = (l, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? Re(e, t) : e, a = l.length - 1, o;
              a >= 0;
              a--
            )
              (o = l[a]) && (s = (r ? o(e, t, s) : o(s)) || s);
            return r && s && Ie(e, t, s), s;
          };
        function Q() {
          return u.TS.IN_MOBILE ? u.NQ : (0, u.xv)();
        }
        function Fe(l) {
          if (l === "") return !1;
          try {
            return new RegExp("\\b(" + l + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${l}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const He = 3600,
          oe = "(1)";
        class L {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: g.Bx6.NS,
            bIgnoreFriends: !1,
          };
          m_TextFilterWords;
          m_mapPlayerCache = new Map();
          m_strBannedWords = "";
          m_strProfanityWords = "";
          m_strCleanWords = "";
          m_strBannedPattern = "";
          m_strCleanPattern = "";
          m_regexBannedWords = null;
          m_regexCleanWords = null;
          m_bShownFilterTip = !1;
          m_bInitialized = !1;
          m_bFilterChangedWhileLoading = !1;
          m_bOngoingLoad = !1;
          m_DataAccess;
          constructor(e) {
            (0, I.Gn)(this);
            let t = new g.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: t.text_filter_setting(),
              bIgnoreFriends: t.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new g.EyI()),
              (this.m_DataAccess = e);
          }
          async Init(e = 0, t = null, r = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = Se),
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
                X.NotifyTextFilterDictionaryChangedHandler,
                this.OnTextFilterDictionaryChanged,
              ),
              this.InitSteamEngineLanguage(u.TS.LANGUAGE),
              u.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(e) {
            return (
              this.m_bInitialized
                ? this.InitFiltersWithRetry()
                : (this.m_bFilterChangedWhileLoading = !0),
              b.R
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
            const t = f.w.Init(p);
            t.Body().set_language(e),
              t.Body().set_type("profanity"),
              X.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              ),
              t.Body().set_type("banned"),
              X.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(e, t) {
            const r = f.w.Init(B);
            return (
              r.Body().set_language(e),
              r.Body().set_type(t),
              X.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
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
              const t = new TextEncoder().encode(oe + e);
              return Z.iI(t);
            } catch {
              return "";
            }
          }
          DeobfuscateString(e) {
            try {
              const t = Z.bg(e);
              let r = new TextDecoder().decode(t);
              return r.startsWith(oe)
                ? ((r = r.slice(oe.length)), r)
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
                this.m_TextFilterWords = g.EyI.fromObject(JSON.parse(e));
              } catch {
                console.warn("Error parsing cached text filter word list", e),
                  (this.m_TextFilterWords = new g.EyI());
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
            let e = new g.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let t = f.w.Init(g.tzK);
                  e = (await g.xtC.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: (0, u.KC)(), origin: Q() };
                  const r = await E().get(
                    u.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 },
                  );
                  e = g.B4H.fromObject(r.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new g.EyI();
              if (e.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let r = f.w.Init(g.SCE);
                    t = (await g.xtC.GetTextFilterWords(this.m_Transport, r))
                      .Body()
                      .words();
                  } else {
                    let r = { sessionid: (0, u.KC)(), origin: Q() };
                    const s = await E().get(
                      u.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: r, withCredentials: !0 },
                    );
                    t = g.EyI.fromObject(s.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(t);
            }
          }
          UpdateCommunityPreferences(e) {
            let t = !1;
            e.text_filter_setting() !==
              this.m_TextFilterPreferences?.eTextFilterSetting &&
              ((this.m_TextFilterPreferences.eTextFilterSetting =
                e.text_filter_setting()),
              (t = !0)),
              e.text_filter_ignore_friends() !==
                this.m_TextFilterPreferences.bIgnoreFriends &&
                ((this.m_TextFilterPreferences.bIgnoreFriends =
                  e.text_filter_ignore_friends()),
                (t = !0)),
              t && this.SaveTextFilterPreferences();
          }
          get TextFilterPreferences() {
            return this.m_TextFilterPreferences;
          }
          UpdateTextFilterWords(e) {
            (this.m_TextFilterWords = e), this.SaveTextFilterWords();
          }
          m_nLoadLanguagesRetryTimeout = void 0;
          async LoadLanguages(e = 15) {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = "");
            try {
              await this.LoadLanguage(u.TS.LANGUAGE),
                u.TS.LANGUAGE !== "english" &&
                  (await this.LoadLanguage("english"));
            } catch (t) {
              this.m_nLoadLanguagesRetryTimeout &&
                ((0, N.wT)(
                  !this.m_nLoadLanguagesRetryTimeout,
                  "Got two concurrent calls to TextFilteringStore.LoadLanguages",
                ),
                window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0)),
                (e = Math.min(e * 2, He)),
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
              s = !1;
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
                s = !0;
              } catch (a) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  a,
                );
              }
            if (!s) {
              r = `${u.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=${t}&origin=${Q()}`;
              {
                const a = await E().get(r);
                this.m_strBannedWords += a.data;
              }
              r = `${u.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=${t}&origin=${Q()}`;
              {
                const a = await E().get(r);
                this.m_strProfanityWords += a.data;
              }
            }
            r = `${u.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=${t}&origin=${Q()}`;
            {
              const a = await E().get(r);
              this.m_strCleanWords += a.data;
            }
          }
          CreatePattern(e) {
            let t = e.filter(function (r) {
              return Fe(r);
            });
            return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            let e = new RegExp(/\s*[\r\n]+\s*/g),
              t = [],
              r = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case g.Bx6.C5:
                break;
              case g.Bx6.NS:
                break;
              case g.Bx6.bf:
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
            let s = this.CreatePattern(t),
              a = this.CreatePattern(r);
            a != "" && (a = "^(" + a + ")$"),
              this.BRebuildFilter(s, a) && this.SaveFilter();
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
                  (0, H.aj)().ReportError(
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
                  (0, H.aj)().ReportError(
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
                ? (r = new ce.b(e).GetAccountID())
                : typeof e == "number" && (r = e),
              !t ||
              r == this.m_unAccountID ||
              (e &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(r))
                ? t
                : t.replace(this.m_regexBannedWords, (s) =>
                    this.m_regexCleanWords &&
                    s.search(this.m_regexCleanWords) == 0
                      ? s
                      : this.CreateProfanityReplacement(s.length),
                  )
            );
          }
        }
        U([I.sH], L.prototype, "m_TextFilterPreferences", 2),
          U([I.sH], L.prototype, "m_mapPlayerCache", 2),
          U([I.sH], L.prototype, "m_regexBannedWords", 2),
          U([I.sH], L.prototype, "m_regexCleanWords", 2),
          U([I.sH], L.prototype, "m_bInitialized", 2),
          U([I.sH], L.prototype, "m_bFilterChangedWhileLoading", 2),
          U([I.sH], L.prototype, "m_bOngoingLoad", 2),
          U([I.XI], L.prototype, "Init", 1),
          U([ze.o], L.prototype, "OnTextFilterDictionaryChanged", 1),
          U([I.XI], L.prototype, "UpdateCommunityPreferences", 1),
          U([I.XI], L.prototype, "BRebuildFilter", 1);
        let le;
        function Le() {
          if (!le) {
            const l = new Set();
            let e = { sessionid: (0, u.KC)(), origin: Q() };
            E()
              .get(u.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: e,
                withCredentials: !0,
              })
              .then((t) => {
                for (const r of t.data.friendslist?.friends ?? [])
                  (0, ee.S$u)(r.efriendrelationship) &&
                    l.add(new ce.b(r.ulfriendid).GetAccountID());
              }),
              (le = (t) => l.has(t));
          }
          return le;
        }
      },
    },
  ]);
})();
