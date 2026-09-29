/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [96032],
  {
    71698: (e, t, r) => {
      r.d(t, {
        RY: () => Q,
        Dj: () => Be,
        L: () => me,
        IL: () => ie,
        zq: () => ye,
        Sm: () => X,
        bA: () => H,
        pt: () => I,
        GB: () => de,
        mo: () => P,
        jK: () => E,
        P$: () => G,
        Cs: () => C,
        vT: () => l,
        Pw: () => a,
        Pk: () => s,
        kT: () => i,
        _h: () => n,
        l3: () => ne,
        a9: () => Me,
      });
      var i = {};
      r.r(i),
        r.d(i, {
          Wy: () => _,
          X6: () => g,
          Mj: () => b,
          j1: () => B,
          b2: () => d,
        });
      var s = {};
      r.r(s), r.d(s, { au: () => y });
      var a = {};
      r.r(a),
        r.d(a, {
          Zp: () => R,
          uz: () => z,
          Ri: () => p,
          BZ: () => f,
          tN: () => w,
          j3: () => M,
        });
      var n = {};
      r.r(n), r.d(n, { A: () => h, h: () => S });
      var l = {};
      r.r(l), r.d(l, { FK: () => q, Oc: () => W, SO: () => v, qY: () => j });
      var o = r(80613),
        c = r.n(o),
        m = r(89068),
        u = r(56545);
      const d = 1,
        g = 2,
        B = 4,
        b = 5,
        _ = 6,
        y = 0,
        p = 0,
        M = 1,
        w = 2,
        f = 3,
        z = 4,
        R = 5,
        S = 1,
        h = 2,
        q = 1,
        v = 2,
        W = 3,
        j = 4;
      class I extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || m.Sg(I.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = m.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class F extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.summary || m.Sg(F.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  summary: { n: 1, c: O },
                  timestamp_updated: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = m.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class O extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.points || m.Sg(O.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  points: {
                    n: 1,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = m.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class T extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.amount || m.Sg(T.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  amount: {
                    n: 1,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  ecurrency: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = m.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class U extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.points || m.Sg(U.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  points: {
                    n: 1,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = m.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class C extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.defid || m.Sg(C.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  defid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  expected_points_cost: {
                    n: 2,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = m.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class P extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.defid || m.Sg(P.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  defid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  num_levels: {
                    n: 2,
                    d: 1,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = m.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class L extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.defid || m.Sg(L.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  defid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = m.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class x extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.communityitemid || m.Sg(x.M()),
            o.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint64String,
                    pbr: m.qM.readPackedUint64String,
                    bw: m.gp.writeRepeatedUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = m.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class G extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.customization_type || m.Sg(G.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  customization_type: {
                    n: 1,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = m.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class A extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.purchaseid || m.Sg(A.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = m.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class E extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.customization_type || m.Sg(E.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  customization_type: {
                    n: 1,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  new_level: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = m.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
        }
      }
      class k extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class N extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.serial_number || m.Sg(N.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  serial_number: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  controller_code: {
                    n: 2,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = m.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class D extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.granted_profile_modifier || m.Sg(D.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = m.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class Q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.target_type || m.Sg(Q.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  target_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  targetid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  reactionid: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = m.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class K extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class H extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.target_type || m.Sg(H.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  target_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  targetid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = m.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class V extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.reactionids || m.Sg(V.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = m.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class Z extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || m.Sg(Z.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = m.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class $ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.total || m.Sg($.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  total: { n: 1, c: Y, r: !0, q: !0 },
                  user_reviews: { n: 2, c: Y, r: !0, q: !0 },
                  ugc: { n: 3, c: Y, r: !0, q: !0 },
                  profile: { n: 4, c: Y, r: !0, q: !0 },
                  forum_topics: { n: 5, c: Y, r: !0, q: !0 },
                  comments: { n: 6, c: Y, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = m.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT($.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class Y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.reactionid || m.Sg(Y.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  reactionid: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  given: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  received: { n: 3, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  points_given: {
                    n: 4,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  purchaseable: { n: 6, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = m.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class X extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.elanguage || m.Sg(X.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  elanguage: { n: 1, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = m.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class J extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.reactions || m.Sg(J.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { reactions: { n: 3, c: ee, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = m.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class ee extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.reactionid || m.Sg(ee.M()),
            o.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  reactionid: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  points_cost: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  purchaseable: { n: 6, br: m.qM.readBool, bw: m.gp.writeBool },
                  localized_title: {
                    n: 7,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  localized_desc: {
                    n: 8,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  available_until: {
                    n: 9,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = m.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class te extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class re extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.points_cost || m.Sg(re.M()),
            o.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  points_cost: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = m.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class ie extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class se extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.apps || m.Sg(se.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { apps: { n: 1, c: ae, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = m.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class ae extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || m.Sg(ae.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  event_app: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  owned: { n: 5, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = m.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class ne extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || m.Sg(ne.M()),
            o.Message.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  defid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  type: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  active: { n: 12, br: m.qM.readBool, bw: m.gp.writeBool },
                  community_item_data: { n: 13, c: le },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  timestamp_free_until: {
                    n: 18,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = m.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class le extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.item_name || m.Sg(le.M()),
            o.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  item_name: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_title: {
                    n: 2,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_description: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  animated: { n: 8, br: m.qM.readBool, bw: m.gp.writeBool },
                  badge_data: { n: 9, c: oe, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  tiled: { n: 13, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = m.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class oe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.level || m.Sg(oe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  level: { n: 1, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  image: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = m.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class ce extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.bonusid || m.Sg(ce.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  bonusid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  active: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                  points: { n: 4, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  internal_description: {
                    n: 7,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = m.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class me extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class ue extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.bonuses || m.Sg(ue.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: { bonuses: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = m.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class de extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.appids || m.Sg(de.M()),
            o.Message.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  time_available: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  community_item_classes: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: m.qM.readInt32,
                    pbr: m.qM.readPackedInt32,
                    bw: m.gp.writeRepeatedInt32,
                  },
                  language: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  count: { n: 5, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  cursor: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                  sort: { n: 7, d: S, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  sort_descending: {
                    n: 8,
                    d: !0,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  reward_types: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                  excluded_community_item_classes: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: m.qM.readInt32,
                    pbr: m.qM.readPackedInt32,
                    bw: m.gp.writeRepeatedInt32,
                  },
                  definitionids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  filters: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                  filter_match_all_category_tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  filter_match_any_category_tags: {
                    n: 14,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  contains_definitionids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  include_direct_purchase_disabled: {
                    n: 16,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  excluded_content_descriptors: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  excluded_appids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  excluded_store_tagids: {
                    n: 19,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  store_tagids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  search_term: {
                    n: 21,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = m.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class ge extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.definitions || m.Sg(ge.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  definitions: { n: 1, c: ne, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  count: { n: 3, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = m.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class Be extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.requests || m.Sg(Be.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: { requests: { n: 1, c: de, r: !0, q: !0 } },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = m.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class be extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.responses || m.Sg(be.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { responses: { n: 1, c: _e, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = m.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class _e extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.eresult || m.Sg(_e.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  eresult: { n: 1, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  response: { n: 2, c: ge },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = m.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class ye extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.steamid || m.Sg(ye.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  language: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = m.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class pe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.active_definitions || m.Sg(pe.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  active_definitions: { n: 1, c: ne, r: !0, q: !0 },
                  inactive_definitions: { n: 2, c: ne, r: !0, q: !0 },
                  bundle_definitions: { n: 3, c: ne, r: !0, q: !0 },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = m.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Response";
        }
      }
      var Me;
      !(function (e) {
        (e.GetPointsForSpend = function (e, t, r) {
          return e.SendMsg(
            "LoyaltyRewards.GetPointsForSpend#1",
            (0, u.I8)(T, t, r),
            U,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, u.I8)(I, t, r),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RedeemPoints = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, u.I8)(C, t, r),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, u.I8)(P, t, r),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, u.I8)(L, t, r),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, u.I8)(G, t, r),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, u.I8)(E, t, r),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, u.I8)(N, t, r),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, u.I8)(Q, t, r),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, u.I8)(H, t, r),
              V,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, u.I8)(Z, t, r),
              $,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, u.I8)(X, t, r),
              J,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileCustomizationsConfig = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, u.I8)(te, t, r),
              re,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEligibleApps = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, u.I8)(ie, t, r),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetActivePurchaseBonuses = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, u.I8)(me, t, r),
              ue,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.QueryRewardItems = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, u.I8)(de, t, r),
              ge,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BatchedQueryRewardItems = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, u.I8)(Be, t, r),
              be,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEquippedProfileItems = function (e, t, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, u.I8)(ye, t, r),
              pe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(Me || (Me = {}));
    },
    74057: (e, t, r) => {
      r.d(t, { J: () => c });
      var i = r(7850),
        s = r(76217),
        a = r(90626),
        n = r(94104),
        l = r(8871),
        o = r(40236);
      class c extends a.Component {
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        m_observer = null;
        m_refElement = a.createRef();
        m_elTracked = null;
        m_bPreviouslyIntersecting = !1;
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
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
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            (e.rootMargin != this.m_observer.rootMargin ||
              e.thresholds != this.m_observer.thresholds) &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, o.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return (0, n.Kf)(e, (e) => {
            const t = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(c.GetScrollableClassname())
            );
          });
        }
        HandleRef = (e) => {
          (0, l.cZ)(this.m_refElement, e),
            this.props.containerRef && (0, l.cZ)(this.props.containerRef, e);
        };
        OnIntersection = (e) => {
          let t = !1;
          for (const r of e)
            if (r.isIntersecting) {
              t = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != t &&
            ((this.m_bPreviouslyIntersecting = t),
            this.props.onVisibilityChange && this.props.onVisibilityChange(t),
            t && this.BTriggerOnce() && this.DestroyObserver());
        };
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: r,
            horizontal: a,
            containerRef: n,
            ...l
          } = this.props;
          return (0, i.jsx)(s.Z, {
            ref: this.HandleRef,
            ...l,
            children: this.props.children,
          });
        }
      }
    },
    55263: (e, t, r) => {
      r.d(t, {
        G6: () => g,
        Gg: () => _,
        Ow: () => b,
        Sq: () => m,
        YM: () => w,
        eR: () => u,
        ik: () => d,
        mZ: () => y,
        t7: () => B,
        zX: () => M,
      });
      var i = r(41735),
        s = r.n(i),
        a = r(90626),
        n = r(37085),
        l = r(8747),
        o = r(84933),
        c = r(16021);
      const m = 1,
        u = 2,
        d = 3;
      function g(e, t, r, i) {
        const l = (0, a.useRef)(void 0),
          g = (0, a.useRef)(void 0),
          B = (0, o.CH)();
        l.current = e;
        const [b, _] = (0, a.useState)(void 0),
          {
            include_assets: y,
            include_release: p,
            include_platforms: M,
            include_all_purchase_options: w,
            include_screenshots: f,
            include_trailers: z,
            include_ratings: R,
            include_tag_count: S,
            include_reviews: h,
            include_basic_info: q,
            include_supported_languages: v,
            include_full_description: W,
            include_included_items: j,
            include_assets_without_overrides: I,
            apply_user_filters: F,
            include_links: O,
            include_extra_details: T,
            include_optin_registration_tags: U,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            const r = {
              include_assets: y,
              include_release: p,
              include_platforms: M,
              include_all_purchase_options: w,
              include_screenshots: f,
              include_trailers: z,
              include_ratings: R,
              include_tag_count: S,
              include_reviews: h,
              include_basic_info: q,
              include_supported_languages: v,
              include_full_description: W,
              include_included_items: j,
              include_assets_without_overrides: I,
              apply_user_filters: F,
              include_links: O,
              include_extra_details: T,
              include_optin_registration_tags: U,
            };
            let a = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, r) ||
                (void 0 !== b && i && i == g.current) ||
                (i !== g.current && (_(void 0), (g.current = i)),
                (a = s().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, r)
                  .then((t) => {
                    a?.token.reason || l.current !== e || _(t == n.R), B();
                  })),
              () => a?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            i,
            b,
            y,
            p,
            M,
            w,
            f,
            z,
            R,
            S,
            h,
            q,
            v,
            W,
            j,
            I,
            F,
            O,
            T,
            U,
            B,
          ]),
          !e)
        )
          return [null, u];
        if (!1 === b) return [void 0, u];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, u];
        if (!c.A.Get().BHasStoreItem(e, t, r)) return [void 0, m];
        const C = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return C ? [C, d] : [null, u];
      }
      function B(e, t, r) {
        return g(e, l.c6.qI, t, r);
      }
      function b(e, t, r) {
        return g(e, l.c6.xO, t, r);
      }
      function _(e, t, r) {
        return g(e, l.c6.RD, t, r);
      }
      function y(e, t, r) {
        const [i, s] = g(e, t, r);
        let a;
        i?.GetStoreItemType() != l.c6.RD ||
          i.GetAssets()?.GetHeaderURL() ||
          1 != i?.GetIncludedAppIDs().length ||
          (a = i.GetIncludedAppIDs()[0]);
        const [n, o] = B(a, r);
        return a && n?.BIsVisible() ? [n, o] : [i, s];
      }
      function p(e, t, r, i) {
        const n = (0, o.CH)(),
          {
            include_assets: l,
            include_release: g,
            include_platforms: B,
            include_all_purchase_options: b,
            include_screenshots: _,
            include_trailers: y,
            include_ratings: p,
            include_tag_count: M,
            include_reviews: w,
            include_basic_info: f,
            include_supported_languages: z,
            include_full_description: R,
            include_included_items: S,
            include_assets_without_overrides: h,
            apply_user_filters: q,
            include_links: v,
            include_extra_details: W,
            include_optin_registration_tags: j,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: l,
                include_release: g,
                include_platforms: B,
                include_all_purchase_options: b,
                include_screenshots: _,
                include_trailers: y,
                include_ratings: p,
                include_tag_count: M,
                include_reviews: w,
                include_basic_info: f,
                include_supported_languages: z,
                include_full_description: R,
                include_included_items: S,
                include_assets_without_overrides: h,
                apply_user_filters: q,
                include_links: v,
                include_extra_details: W,
                include_optin_registration_tags: j,
              },
              i = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, r) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const a = s().CancelToken.source(),
              o = i.map((e) => c.A.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(o).then(() => {
                a.token.reason || n();
              }),
              () => a.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [
            e,
            t,
            i,
            n,
            l,
            g,
            B,
            b,
            _,
            y,
            p,
            M,
            w,
            f,
            z,
            R,
            S,
            h,
            q,
            v,
            W,
            j,
          ]),
          !e)
        )
          return u;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, r) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return m;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? d
          : u;
      }
      function M(e, t, r) {
        return p(e, l.c6.qI, t, r);
      }
      function w() {
        a.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    3088: (e, t, r) => {
      r.d(t, { c: () => a });
      var i = r(7850),
        s = r(90626);
      function a(e) {
        const {
            rgSources: t,
            onIncrementalError: r,
            onError: a,
            strAltText: n,
            ref: l,
            ...o
          } = e,
          [c, m] = s.useState(0),
          u = s.useMemo(() => JSON.stringify(t), [t]),
          [d, g] = s.useState(u);
        d != u && (g(u), m(0));
        const B = s.useMemo(() => {
            let r = "";
            return (
              t && t.length > c && (r = t[c]),
              r ||
                (console.warn(
                  "MultiSourceImage created with no image src",
                  e,
                  c,
                ),
                (r =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
              r
            );
          }, [t, c, e]),
          b = s.useCallback(
            (e) => {
              r?.(e, t[c], c);
              const i = c + 1;
              i >= t.length && a && a(e), i < t.length && m(i);
            },
            [c, a, r, t],
          ),
          _ = s.useRef(null);
        return (
          s.useImperativeHandle(
            l,
            () => ({ imgRef: _, nSourceIndex: c, nSourceLength: t.length }),
            [_, c, t],
          ),
          s.useEffect(() => {
            const e = _.current;
            e?.complete && 0 == e.naturalWidth && (e.src = e.src);
          }, []),
          (0, i.jsx)("img", { ref: _, ...o, src: B, onError: b, alt: n }, d)
        );
      }
    },
  },
]);
