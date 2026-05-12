/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4317],
  {
    6083: (e, r, t) => {
      t.d(r, { D: () => a });
      var i = t(3049);
      function a(e) {
        return e.toLocaleString((0, i.J)());
      }
    },
    3049: (e, r, t) => {
      t.d(r, { J: () => s });
      var i = t(8527),
        a = t(13843);
      function s() {
        return (0, a.A)().languages.map((e) => {
          return 2 == (r = e.strISOCode).length && i.TS.COUNTRY
            ? `${r}-${i.TS.COUNTRY}`
            : r;
          var r;
        });
      }
    },
    66008: (e, r, t) => {
      t.d(r, {
        RY: () => v,
        Sm: () => x,
        bA: () => T,
        pt: () => b,
        GB: () => V,
        Pw: () => a,
        Pk: () => i,
        l3: () => Q,
        a9: () => se,
      });
      var i = {};
      t.r(i), t.d(i, { au: () => u });
      var a = {};
      t.r(a),
        t.d(a, {
          Zp: () => y,
          uz: () => g,
          Ri: () => m,
          BZ: () => B,
          tN: () => d,
          j3: () => c,
        });
      var s = t(80613),
        n = t.n(s),
        o = t(89068),
        l = t(56545);
      const u = 0,
        m = 0,
        c = 1,
        d = 2,
        B = 3,
        g = 4,
        y = 5;
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || o.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = o.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.summary || o.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  summary: { n: 1, c: w },
                  timestamp_updated: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = o.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.points || o.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  points: {
                    n: 1,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = o.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.amount || o.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  amount: {
                    n: 1,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  ecurrency: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.points || o.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  points: {
                    n: 1,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.defid || o.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  defid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  expected_points_cost: {
                    n: 2,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = o.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.defid || o.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  defid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  num_levels: {
                    n: 2,
                    d: 1,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = o.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.defid || o.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  defid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = o.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.communityitemid || o.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = o.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.customization_type || o.Sg(q.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  customization_type: {
                    n: 1,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = o.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class W extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.purchaseid || o.Sg(W.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = o.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class j extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.customization_type || o.Sg(j.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  customization_type: {
                    n: 1,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  new_level: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = o.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class F extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.serial_number || o.Sg(F.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  serial_number: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  controller_code: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = o.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.granted_profile_modifier || o.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = o.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.target_type || o.Sg(v.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  target_type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  targetid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  reactionid: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = o.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class O extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.target_type || o.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  target_type: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  targetid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = o.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class U extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.reactionids || o.Sg(U.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = o.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || o.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = o.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class P extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.total || o.Sg(P.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  total: { n: 1, c: L, r: !0, q: !0 },
                  user_reviews: { n: 2, c: L, r: !0, q: !0 },
                  ugc: { n: 3, c: L, r: !0, q: !0 },
                  profile: { n: 4, c: L, r: !0, q: !0 },
                  forum_topics: { n: 5, c: L, r: !0, q: !0 },
                  comments: { n: 6, c: L, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = o.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class L extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.reactionid || o.Sg(L.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  reactionid: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  given: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  received: { n: 3, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  points_given: {
                    n: 4,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  purchaseable: { n: 6, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = o.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class x extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.elanguage || o.Sg(x.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  elanguage: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = o.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class N extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.reactions || o.Sg(N.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { reactions: { n: 3, c: E, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = o.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class E extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.reactionid || o.Sg(E.M()),
            s.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  reactionid: { n: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  points_cost: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  purchaseable: { n: 6, br: o.qM.readBool, bw: o.gp.writeBool },
                  localized_title: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  localized_desc: {
                    n: 8,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  available_until: {
                    n: 9,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = o.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class G extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class k extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.points_cost || o.Sg(k.M()),
            s.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  points_cost: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = o.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class D extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.apps || o.Sg(D.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { apps: { n: 1, c: K, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = o.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class K extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || o.Sg(K.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  event_app: { n: 3, br: o.qM.readBool, bw: o.gp.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  owned: { n: 5, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = o.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class Q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || o.Sg(Q.M()),
            s.Message.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  defid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  type: { n: 3, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: o.qM.readInt64String,
                    bw: o.gp.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  active: { n: 12, br: o.qM.readBool, bw: o.gp.writeBool },
                  community_item_data: { n: 13, c: $ },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  timestamp_free_until: {
                    n: 18,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = o.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class $ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.item_name || o.Sg($.M()),
            s.Message.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  item_name: {
                    n: 1,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_title: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_description: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  animated: { n: 8, br: o.qM.readBool, bw: o.gp.writeBool },
                  badge_data: { n: 9, c: Y, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  tiled: { n: 13, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = o.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT($.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class Y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.level || o.Sg(Y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  level: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  image: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = o.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class J extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.bonusid || o.Sg(J.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  bonusid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  active: { n: 3, br: o.qM.readBool, bw: o.gp.writeBool },
                  points: { n: 4, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  internal_description: {
                    n: 7,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = o.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class Z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class H extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.bonuses || o.Sg(H.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { bonuses: { n: 1, c: J, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = o.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class V extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appids || o.Sg(V.M()),
            s.Message.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
              null,
            );
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  time_available: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  community_item_classes: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.qM.readInt32,
                    pbr: o.qM.readPackedInt32,
                    bw: o.gp.writeRepeatedInt32,
                  },
                  language: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  count: { n: 5, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  cursor: { n: 6, br: o.qM.readString, bw: o.gp.writeString },
                  sort: { n: 7, d: 1, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  sort_descending: {
                    n: 8,
                    d: !0,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  reward_types: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  excluded_community_item_classes: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: o.qM.readInt32,
                    pbr: o.qM.readPackedInt32,
                    bw: o.gp.writeRepeatedInt32,
                  },
                  definitionids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  filters: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: o.qM.readEnum,
                    pbr: o.qM.readPackedEnum,
                    bw: o.gp.writeRepeatedEnum,
                  },
                  filter_match_all_category_tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: o.qM.readString,
                    bw: o.gp.writeRepeatedString,
                  },
                  filter_match_any_category_tags: {
                    n: 14,
                    r: !0,
                    q: !0,
                    br: o.qM.readString,
                    bw: o.gp.writeRepeatedString,
                  },
                  contains_definitionids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  include_direct_purchase_disabled: {
                    n: 16,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  excluded_content_descriptors: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  excluded_appids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  excluded_store_tagids: {
                    n: 19,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  store_tagids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                  search_term: {
                    n: 21,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = o.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class X extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.definitions || o.Sg(X.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  definitions: { n: 1, c: Q, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  count: { n: 3, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = o.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class ee extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.requests || o.Sg(ee.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { requests: { n: 1, c: V, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = o.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class re extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.responses || o.Sg(re.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { responses: { n: 1, c: te, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = o.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class te extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.eresult || o.Sg(te.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  eresult: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  response: { n: 2, c: X },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = o.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class ie extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || o.Sg(ie.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  language: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = o.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class ae extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.active_definitions || o.Sg(ae.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  active_definitions: { n: 1, c: Q, r: !0, q: !0 },
                  inactive_definitions: { n: 2, c: Q, r: !0, q: !0 },
                  bundle_definitions: { n: 3, c: Q, r: !0, q: !0 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = o.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return o.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return o.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return o.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          o.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Response";
        }
      }
      var se;
      !(function (e) {
        (e.GetPointsForSpend = function (e, r) {
          return e.SendMsg(
            "LoyaltyRewards.GetPointsForSpend#1",
            (0, l.I8)(p, r),
            _,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, l.I8)(b, r),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RedeemPoints = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, l.I8)(z, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForBadgeLevel = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, l.I8)(f, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, l.I8)(R, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, l.I8)(q, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, l.I8)(j, r),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, l.I8)(F, r),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, l.I8)(v, r),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, l.I8)(T, r),
              U,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, l.I8)(C, r),
              P,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, l.I8)(x, r),
              N,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileCustomizationsConfig = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, l.I8)(G, r),
              k,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEligibleApps = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, l.I8)(A, r),
              D,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetActivePurchaseBonuses = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, l.I8)(Z, r),
              H,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.QueryRewardItems = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, l.I8)(V, r),
              X,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BatchedQueryRewardItems = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, l.I8)(ee, r),
              re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEquippedProfileItems = function (e, r) {
            return e.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, l.I8)(ie, r),
              ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(se || (se = {}));
    },
  },
]);
