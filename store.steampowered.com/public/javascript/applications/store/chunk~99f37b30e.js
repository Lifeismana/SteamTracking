/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [97250],
  {
    65580: (e, t, r) => {
      r.d(t, { g: () => Ut });
      var i,
        n,
        a,
        s = r(7850),
        o = r(56284),
        l = r(22837),
        c = r(65946),
        m = r(90626),
        u = r(62641),
        d = r(39733),
        g = r(37085),
        B = r(81393),
        _ = r(56545),
        b = r(80613),
        p = r.n(b),
        y = r(89068);
      class M extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.promotion_id || y.Sg(M.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class w extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.plan || y.Sg(w.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m || (w.sm_m = { proto: w, fields: { plan: { n: 1, c: M } } }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = y.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class f extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.promotion_id || y.Sg(f.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = y.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class z extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.plan || y.Sg(z.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  plan: { n: 1, c: M },
                  promotion_id: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = y.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class S extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class R extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.promotion_id || y.Sg(R.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class v extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.plan || y.Sg(v.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m || (v.sm_m = { proto: v, fields: { plan: { n: 1, c: M } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = y.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class j extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (p().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class h extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.plan || y.Sg(h.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { plan: { n: 1, c: M, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = y.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class F extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.oldest_rtime || y.Sg(F.M()),
            b.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  oldest_rtime: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  newest_rtime: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = y.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
        }
      }
      class P extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.plans || y.Sg(P.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { plans: { n: 1, c: M, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = y.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
        }
      }
      class W extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.type || y.Sg(W.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  type: { n: 1, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  promotion_planid: {
                    n: 3,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = y.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromoAssociation";
        }
      }
      class q extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.requested || y.Sg(q.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { requested: { n: 1, c: W, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = y.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Request";
        }
      }
      class T extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.matching || y.Sg(T.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  matching: { n: 1, c: W, r: !0, q: !0 },
                  plans: { n: 2, c: M, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = y.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Response";
        }
      }
      class I extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.rtime || y.Sg(I.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  rtime: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = y.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class O extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.plans || y.Sg(O.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  plans: { n: 1, c: M, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: y.qM.readFixed64String,
                    pbr: y.qM.readPackedFixed64String,
                    bw: y.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = y.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class U extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.promotion_id || y.Sg(U.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = y.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class C extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class x extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.token || y.Sg(x.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  token: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = y.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class D extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.plan || y.Sg(D.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { plan: { n: 1, c: M, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class E extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appids || y.Sg(E.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = y.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class N extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.plans || y.Sg(N.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  plans: { n: 1, c: M, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: A, r: !0, q: !0 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = y.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class A extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appids || y.Sg(A.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = y.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class G extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.input_access_key || y.Sg(G.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = y.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class k extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.plan || y.Sg(k.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m || (k.sm_m = { proto: k, fields: { plan: { n: 1, c: M } } }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = y.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class L extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.promotion_id || y.Sg(L.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  value: { n: 2, br: y.qM.readBool, bw: y.gp.writeBool },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = y.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class H extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (p().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class K extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.promotion_id || y.Sg(K.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = y.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class V extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class $ extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.promotion_id || y.Sg($.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = y.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT($.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class Z extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.results || y.Sg(Z.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { results: { n: 1, c: X, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = y.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class X extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.notification_id || y.Sg(X.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  notification_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  status: { n: 5, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  type: { n: 6, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = y.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class Y extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.promotion_id || y.Sg(Y.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = y.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class Q extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class J extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.promotion_id || y.Sg(J.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  add: { n: 2, br: y.qM.readBool, bw: y.gp.writeBool },
                  email_address: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = y.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class ee extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class te extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.clan_account_id || y.Sg(te.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  rtime_sale_start: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime_sale_end: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  daily_deal_gid: {
                    n: 5,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 6,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  create_asset_request: {
                    n: 7,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  partner_id: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  advertising_appid: {
                    n: 9,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = y.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class re extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.clan_account_id || y.Sg(re.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  daily_deal_gid: {
                    n: 3,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 4,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  asset_request_gid: {
                    n: 5,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  advertising_appid: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = y.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class ie extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.total_gross_sales_usdx100 || y.Sg(ie.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  total_gross_sales_usdx100: {
                    n: 1,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  total_gross_returns_usdx100: {
                    n: 2,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  total_net_tax_usdx100: {
                    n: 3,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  steam_gross_sales_usdx100: {
                    n: 4,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  steam_gross_returns_usdx100: {
                    n: 5,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  steam_net_tax_usdx100: {
                    n: 6,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  in_game_gross_sales_usdx100: {
                    n: 7,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  in_game_gross_returns_usdx100: {
                    n: 8,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  in_game_net_tax_usdx100: {
                    n: 9,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  total_net_sales_usdx100: {
                    n: 10,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  steam_net_sales_usdx100: {
                    n: 11,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  in_game_net_sales_usdx100: {
                    n: 12,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  steam_gross_units_sold: {
                    n: 13,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  steam_gross_units_returned: {
                    n: 14,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                  gross_units_activated: {
                    n: 15,
                    br: y.qM.readInt64String,
                    bw: y.gp.writeInt64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = y.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_SummarySaleResult";
        }
      }
      class ne extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.promotionids || y.Sg(ne.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  promotionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint64String,
                    pbr: y.qM.readPackedUint64String,
                    bw: y.gp.writeRepeatedUint64String,
                  },
                  partnerid: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = y.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
        }
      }
      class ae extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.sales || y.Sg(ae.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  sales: { n: 1, c: le, r: !0, q: !0 },
                  partial_access: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = y.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
        }
      }
      class se extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.rtime_date || y.Sg(se.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  date: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  summary_sales: { n: 3, c: ie },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = y.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
        }
      }
      class oe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || y.Sg(oe.M()),
            b.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  packageid: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  secondary_product_id: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  summary_sales: { n: 4, c: ie },
                  daily_promo_sales: { n: 5, c: se, r: !0, q: !0 },
                  package_billing_type: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = y.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
        }
      }
      class le extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.promotionid || y.Sg(le.M()),
            b.Message.initialize(this, e, 0, -1, [2, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  promotionid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  daily_promo_sales: { n: 2, c: se, r: !0, q: !0 },
                  summary_sales: { n: 3, c: ie },
                  products: { n: 4, c: oe, r: !0, q: !0 },
                  products_missing_user_rights: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = y.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
        }
      }
      class ce extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.request_list || y.Sg(ce.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: { request_list: { n: 1, c: me, r: !0, q: !0 } },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = y.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class me extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.clan_account_id || y.Sg(me.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = y.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class ue extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.plans || y.Sg(ue.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: { plans: { n: 1, c: M, r: !0, q: !0 } },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = y.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class de extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.rtstart || y.Sg(de.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  rtstart: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  rtend: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  include_packages: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  filter_modified_sales_rank: {
                    n: 4,
                    d: !0,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = y.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class ge extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.package_details || y.Sg(ge.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  package_details: { n: 1, c: Be, r: !0, q: !0 },
                  app_details: { n: 2, c: _e, r: !0, q: !0 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = y.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class Be extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.package_id || y.Sg(Be.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  package_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_id: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_name: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  discount_percentage: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  original_price_usd: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_price_usd: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = y.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class _e extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.appid || y.Sg(_e.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  cheapest_package_id: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  cheapest_discount_id: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  cheapest_discount_name: {
                    n: 5,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  package_original_price_usd: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discounted_price_usd: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_percentage: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 9,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 10,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  num_discounted_packages: {
                    n: 11,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  modified_sales_rank: {
                    n: 12,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = y.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class be extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.account_id || y.Sg(be.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  account_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  include_published: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = y.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class pe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.clans || y.Sg(pe.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { clans: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = y.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class ye extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.clan_account_id || y.Sg(ye.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  name: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  published: { n: 4, br: y.qM.readBool, bw: y.gp.writeBool },
                  start_time: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  end_time: { n: 6, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  external_sale_event_type: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = y.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class Me extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.clan_account_id || y.Sg(Me.M()),
            b.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  clan_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  is_creator_home: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  sale_pages: { n: 4, c: ye, r: !0, q: !0 },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = y.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class we extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.partner_id || y.Sg(we.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  partner_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = y.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class fe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.advertising_apps || y.Sg(fe.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { advertising_apps: { n: 1, c: ze, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = y.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class ze extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.appid || y.Sg(ze.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  app_name: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  itemid: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = y.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class Se extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.spotlight_due_date || y.Sg(Se.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = y.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class Re extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.inviteid || y.Sg(Re.M()),
            b.Message.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  type: { n: 6, br: y.qM.readEnum, bw: y.gp.writeEnum },
                  accept_account: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  deadlines: { n: 14, c: Se },
                  notify_partner: {
                    n: 15,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  cancelled: { n: 18, br: y.qM.readBool, bw: y.gp.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  require_sale_page: {
                    n: 20,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  require_sale_page_type: {
                    n: 21,
                    br: y.qM.readEnum,
                    bw: y.gp.writeEnum,
                  },
                  admin_notes: {
                    n: 22,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  partner_notes: {
                    n: 23,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = y.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class ve extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.invite || y.Sg(ve.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  invite: { n: 1, c: Re },
                  queue_email_to_send: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = y.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class je extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.inviteid || y.Sg(je.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = y.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class he extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.inviteid || y.Sg(he.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  packageid: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  bundleid: { n: 4, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = y.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class Fe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.invites || y.Sg(Fe.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { invites: { n: 1, c: Re, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = y.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class Pe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.inviteid || y.Sg(Pe.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = y.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class We extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class qe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.inviteid || y.Sg(qe.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = y.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class Te extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.accountid || y.Sg(Te.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  accountid: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = y.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class Ie extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.targets || y.Sg(Ie.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  targets: { n: 1, c: Te, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = y.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class Oe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.inviteid || y.Sg(Oe.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = y.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Ue extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.gid || y.Sg(Ue.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  gid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = y.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class Ce extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.inviteid || y.Sg(Ce.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = y.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class xe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new xe();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class De extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.opt_in_name || y.Sg(De.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  partner_id: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = y.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class Ee extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.stats || y.Sg(Ee.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  stats: { n: 1, c: Ne, r: !0, q: !0 },
                  appid_without_permissions: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = y.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ne extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.appid || y.Sg(Ne.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rt_start_time: {
                    n: 3,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  demo_player_count: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  wishlist_count: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  player_wishlist_count: {
                    n: 7,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  rt_last_update_time: {
                    n: 9,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = y.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t, r) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, _.I8)(w, t, r),
            f,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, _.I8)(w, t, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, _.I8)(z, t, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, _.I8)(z, t, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, _.I8)(z, t, r),
              S,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, _.I8)(U, t, r),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, _.I8)(R, t, r),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, _.I8)(j, t, r),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, _.I8)(F, t, r),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByAssociationID = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, _.I8)(q, t, r),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, _.I8)(I, t, r),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, _.I8)(x, t, r),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, _.I8)(E, t, r),
              N,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, _.I8)(G, t, r),
              k,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, _.I8)(L, t, r),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, _.I8)(K, t, r),
              V,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, _.I8)($, t, r),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, _.I8)(Y, t, r),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, _.I8)(J, t, r),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanSalesDaily = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, _.I8)(ne, t, r),
              ae,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, _.I8)(ce, t, r),
              ue,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, _.I8)(te, t, r),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, _.I8)(de, t, r),
              ge,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, _.I8)(be, t, r),
              pe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, _.I8)(we, t, r),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.SetInvite = function (e, t, r) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, _.I8)(ve, t, r),
              je,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, _.I8)(he, t, r),
                Fe,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, _.I8)(Oe, t, r),
                Ue,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, _.I8)(Ce, t, r),
                xe,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, _.I8)(Pe, t, r),
                We,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, _.I8)(qe, t, r),
                Ie,
                { ePrivilege: 4 },
              );
            });
        })(n || (n = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t, r) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, _.I8)(De, t, r),
              Ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(a || (a = {}));
      var Ae = r(80902),
        Ge = r(72034),
        ke = r(30470),
        Le = r(24484);
      function He(e, t) {
        const [r] = (0, m.useState)(() =>
          (function () {
            const e = (0, Le.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, B.wT)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new Ge.D(ke.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, Ae.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            if (!r) return null;
            const n = _.w.Init(ce),
              a = new me();
            a.set_clan_account_id(e),
              a.set_gid_clan_event(t),
              n.Body().add_request_list(a);
            const s = await i.GetPromotionPlanForSalePages(r, n);
            if (s.GetEResult() != g.R)
              throw new Error(
                `Error from PromotionPlanBySalePage: ${s.GetEResult()}`,
              );
            return s
              .Body()
              .plans()
              .map((e) => e.promotion_id());
          },
          placeholderData: null,
          enabled: Boolean(r),
        }).data;
      }
      var Ke = r(56283),
        Ve = r(74568),
        $e = r(61859),
        Ze = r(56330),
        Xe = r.n(Ze),
        Ye = r(22797),
        Qe = r(78327),
        Je = r(68797),
        et = r(66418),
        tt = r(51614);
      function rt() {
        return (0, tt.n)({
          mutationFn: (e) =>
            (async function (e) {
              const {
                clanAccountID: t,
                forumType: r,
                forumGID: i,
                forumTopicGID: n,
                signal: a,
              } = e;
              let s =
                et.TS.COMMUNITY_BASE_URL +
                "forum/" +
                t +
                "/" +
                r +
                "/deletetopic/";
              null != i && "" != i && (s += i + "/");
              const o = new FormData();
              o.append("sessionid", (0, Le.KC)()), o.append("gidforumtopic", n);
              const l = await fetch(s, {
                method: "POST",
                body: o,
                credentials: "include",
                signal: a,
              });
              if (!l.ok) throw new Error(`${s} answered ${l.status}`);
              const c = await l.json();
              if (c.success != g.R) throw c;
              return c;
            })(e),
        });
      }
      let it = 0;
      function nt(e) {
        const {
            closeModal: t,
            eventModel: r,
            onDeleteSuccessAndCloseDialog: i,
            bNoConfirmationNeeded: n,
            partnerEventStore: a,
          } = e,
          [o, c] = (0, m.useState)(n ? "waiting" : "confirmation"),
          [u, d] = (0, m.useState)({}),
          [g, B] = (0, m.useState)(!1),
          _ = (0, m.useRef)(void 0),
          b = (0, m.useMemo)(() => new AbortController(), []);
        m.useEffect(() => () => b.abort(), [b]);
        const { mutate: p } = rt(),
          y = (0, m.useCallback)(() => {
            a.ResetModel();
            const e = _.current?.forumTopicGID;
            g && e && _.current
              ? p(
                  {
                    clanAccountID: _.current.clanAccountID,
                    forumType: "Event",
                    forumTopicGID: e,
                    signal: b.signal,
                  },
                  {
                    onSuccess: () => c("success"),
                    onError: (e) => {
                      d((0, Je.H)(e)), c("failed_thread_delete");
                    },
                  },
                )
              : c("success");
          }, [a, g, p, b]),
          M = (0, m.useCallback)((e) => {
            d((0, Je.H)(e)), c("error");
          }, []),
          w = (0, m.useCallback)(() => {
            const e = r.clanSteamID,
              t = r.GID,
              i = r.AnnouncementGID;
            (_.current = {
              clanAccountID: e.GetAccountID(),
              forumTopicGID: r.forumTopicGID,
            }),
              !r.bOldAnnouncement && t && "0" != t && t != l.kFb
                ? (c("waiting"), a.DeleteClanEvent(e, t).then(y).catch(M))
                : r.bOldAnnouncement && i
                  ? (c("waiting"),
                    a.DeleteOldAnnouncement(e, i).then(y).catch(M))
                  : (a.ResetModel(), c("success"));
          }, [r, a, y, M]),
          f = (0, m.useRef)(!1);
        m.useEffect(() => {
          n && !f.current && ((f.current = !0), w());
        }, [n, w]);
        let z = t,
          S = "";
        const R = new Array();
        switch (o) {
          case "confirmation":
            const e = r.GetNameWithFallback((0, l.sfN)(Qe.TS.LANGUAGE)),
              n = r.BIsVisibleEvent()
                ? "#EventDisplay_AreYouSure_Visible"
                : "#EventDisplay_AreYouSure";
            (S = (0, $e.we)(n, e ?? "")),
              (z = w),
              r.BHasForumTopicGID() &&
                R.push(
                  (0, s.jsxs)(
                    "div",
                    {
                      className: Xe().Padding,
                      children: [
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          id: "del_cmt_post",
                          name: "del_cmt_post",
                          defaultChecked: g,
                          onChange: () => B(!g),
                        }),
                        (0, s.jsx)("label", {
                          htmlFor: "del_cmt_post",
                          children: (0, $e.we)(
                            "#EventDisplay_DeleteEvent_Comment",
                          ),
                        }),
                      ],
                    },
                    "WantToDeleteCmtThread",
                  ),
                );
            break;
          case "waiting":
            (S = (0, $e.we)("#EventDisplay_DeleteEvent_InProgress")),
              R.push((0, s.jsx)(Ye.t, {}, "throbber"));
            break;
          case "error":
            (S = (0, $e.we)("#EventDisplay_DeleteEvent_Error")),
              R.push(
                (0, s.jsx)(
                  "div",
                  { className: Xe().ErrorStyles, children: u.strErrorMsg },
                  "deleteerror_" + ++it,
                ),
              );
            break;
          case "failed_thread_delete":
            (S = (0, $e.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
              R.push(
                (0, s.jsx)(
                  "div",
                  { className: Xe().ErrorStyles, children: u.strErrorMsg },
                  "deleteerror_" + ++it,
                ),
              ),
              i &&
                (z = () => {
                  i?.(), t?.();
                });
            break;
          case "success":
            (S = (0, $e.we)("#EventDisplay_DeleteEvent_Success")),
              i &&
                (z = () => {
                  i?.(), t?.();
                });
        }
        return (0, s.jsx)(Ve.o0, {
          strTitle: (0, $e.we)("#EventDisplay_DeleteEvent"),
          strDescription: S,
          onCancel: t,
          onOK: z,
          bAlertDialog: "confirmation" != o,
          bOKDisabled: "waiting" == o,
          bDestructiveWarning: "error" == o,
          children: R,
        });
      }
      var at = r(32803),
        st = r(27939),
        ot = r(60860),
        lt = r(78686),
        ct = r(84811),
        mt = r(90316),
        ut = r.n(mt),
        dt = r(95695),
        gt = r.n(dt),
        Bt = r(12155),
        _t = r(32754),
        bt = r(52038),
        pt = r(84933);
      function yt(e) {
        const {
            eventModel: t,
            permissions: r,
            bIsCreatorHomeVisible: i,
            additionalButtons: n,
            onDeleteRequest: a,
            saleDayControl: o,
            promotionPlanLinks: d,
            testControls: g,
            bSupportsSticky: B = !1,
          } = e,
          _ = (0, Qe.Qn)(),
          b = (0, ot.MU)(),
          [p, y, M, w] = (0, c.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          [f, z] = m.useState(B),
          { bVisible: S, ref: R } = (0, pt.hd)();
        if ((!r?.can_edit && !r?.support_user) || _)
          return (0, s.jsx)("span", {});
        const v = (0, Qe.yK)(),
          j = "community" == v,
          h = "store" == v,
          F = Boolean(r.support_user),
          P = wt(r),
          W = f && !S,
          q = t.GetEventType() == l.ajI,
          T =
            (p == u.zv.k_EEventStateVisible ||
              p == u.zv.k_EEventStateUnlisted) &&
            (!q || i),
          I = p == u.zv.k_EEventStateStaged;
        return (0, s.jsxs)(ct.tH, {
          children: [
            (0, s.jsx)("div", {
              className: (0, bt.A)(
                ut().DisplayAdminPanel_TopSpacer,
                W && ut().Sticky,
              ),
            }),
            (0, s.jsxs)("div", {
              className: (0, bt.A)({
                [ut().DisplayAdminPanel]: !0,
                [ut().Locked]: j,
                [ut().Sticky]: W,
              }),
              children: [
                (0, s.jsx)("span", {
                  className: ut().DisplayAdminPanel_Title,
                  children: lt.Z.Localize("#EventDisplay_Admin_Title"),
                }),
                (0, s.jsxs)("div", {
                  className: (0, bt.A)(
                    ut().DisplayAdminPanel_ctn,
                    W && ut().Sticky,
                  ),
                  children: [
                    n,
                    n &&
                      (0, s.jsx)("span", {
                        className: ut().DisplayAdminPanel_Spacer,
                        children: " ",
                      }),
                    (0, s.jsx)(at.tj, {
                      eventModel: t,
                      route: at.PH.k_eCommunityEdit,
                      className: (0, bt.A)(gt().Button, ut().AdminButton),
                      children: q
                        ? lt.Z.Localize("#EventEditor_Edit_Page")
                        : lt.Z.Localize("#EventEditor_Edit"),
                    }),
                    a &&
                      (0, s.jsx)("span", {
                        className: gt().Button + " " + ut().AdminButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: a,
                        onKeyDown: Mt(a),
                        children: lt.Z.Localize("#EventDisplay_DeleteEvent"),
                      }),
                    !T &&
                      (0, s.jsx)(m.Fragment, {
                        children: (0, s.jsx)(at.tj, {
                          eventModel: t,
                          route: at.PH.k_eCommunityPublish,
                          className: (0, bt.A)(gt().Button, ut().AdminButton),
                          children: lt.Z.Localize(
                            I
                              ? "#EventEditor_Publish_VisibleNow"
                              : "#Button_Publish",
                          ),
                        }),
                      }),
                    (0, s.jsx)(at.tj, {
                      eventModel: t,
                      route: at.PH.k_eCommunityAdminPage,
                      className: (0, bt.A)(gt().Button, ut().AdminButton),
                      children: lt.Z.Localize("#EventDisplay_Events"),
                    }),
                    o,
                    Boolean(y && b && !q) &&
                      (0, s.jsx)(at.tj, {
                        eventModel: t,
                        route: at.PH.k_eStoreSalePage,
                        className: (0, bt.A)(gt().Button, ut().AdminButton),
                        children: lt.Z.Localize("#EventDisplay_SalesPage"),
                      }),
                    Boolean(y && F && M) &&
                      (0, s.jsx)("a", {
                        href:
                          et.TS.STATS_BASE_URL +
                          "sales/details/?gid=" +
                          M +
                          "&clanid=" +
                          w,
                        target: et.TS.IN_CLIENT ? "" : "_blank",
                        rel: "noreferrer",
                        className: (0, bt.A)(
                          gt().Button,
                          ut().AdminButton,
                          gt().ValveOnlyBackground,
                        ),
                        children: lt.Z.Localize("#EventDisplay_StatsPage"),
                      }),
                    Boolean(y && F && M && !q) &&
                      (0, s.jsx)("a", {
                        href:
                          et.TS.PARTNER_BASE_URL +
                          "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                          M +
                          "&saleclanaccountid=" +
                          w,
                        target: et.TS.IN_CLIENT ? "" : "_blank",
                        rel: "noreferrer",
                        className: (0, bt.A)(
                          gt().Button,
                          ut().AdminButton,
                          gt().ValveOnlyBackground,
                        ),
                        children: lt.Z.Localize(
                          "#EventDisplay_InvitationPlannerPage",
                        ),
                      }),
                    d,
                    Boolean(
                      y && P && st.bv == w && t.GetContentHubCategory(),
                    ) &&
                      (0, s.jsx)("a", {
                        href: `${et.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                        target: et.TS.IN_CLIENT ? "" : "_blank",
                        rel: "noreferrer",
                        className: (0, bt.A)(
                          gt().Button,
                          ut().AdminButton,
                          gt().ValveOnlyBackground,
                        ),
                        children: lt.Z.Localize("#EventDisplay_CategoryEditor"),
                      }),
                    Boolean(T && (h || (b && !j))) &&
                      (0, s.jsx)(at.tj, {
                        eventModel: t,
                        route: y
                          ? at.PH.k_eCommunityPreviewSale
                          : at.PH.k_eCommunityView,
                        className: (0, bt.A)(gt().Button, ut().AdminButton),
                        children: lt.Z.Localize(
                          y
                            ? "#EventDisplay_PreviewOnCommunity"
                            : "#EventDisplay_ViewOnCommunity",
                        ),
                      }),
                    Boolean(T && j) &&
                      (0, s.jsx)(at.tj, {
                        eventModel: t,
                        route: at.PH.k_eStoreView,
                        className: (0, bt.A)(gt().Button, ut().AdminButton),
                        children: lt.Z.Localize("#EventDisplay_ViewOnStore"),
                      }),
                    g,
                    W &&
                      (0, s.jsx)("div", {
                        className: ut().DisplayAdminPanelClose,
                        role: "button",
                        tabIndex: 0,
                        onClick: () => z(!1),
                        onKeyDown: Mt(() => z(!1)),
                        children: (0, s.jsx)(_t.Gq, {
                          toolTipContent: lt.Z.Localize(
                            "#EventDisplay_Admin_Close_ttip",
                          ),
                          children: (0, s.jsx)(Bt.X, {}),
                        }),
                      }),
                    !f &&
                      B &&
                      (0, s.jsx)("div", {
                        className: ut().DisplayAdminPanelClose,
                        role: "button",
                        tabIndex: 0,
                        onClick: () => z(!0),
                        onKeyDown: Mt(() => z(!0)),
                        children: (0, s.jsx)(_t.Gq, {
                          toolTipContent: lt.Z.Localize(
                            "#EventDisplay_Admin_Reopen_ttip",
                          ),
                          children: (0, s.jsx)(Bt.i3G, { angle: 0 }),
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: ut().DisplayAdminPanelMarker,
              ref: R,
            }),
          ],
        });
      }
      function Mt(e) {
        return (t) => {
          ("Enter" !== t.key && " " !== t.key) || (t.preventDefault(), e(t));
        };
      }
      function wt(e) {
        return Boolean(e?.support_user && e?.valve_admin);
      }
      var ft = r(738),
        zt = r(56011),
        St = r(14947),
        Rt = r(72668),
        vt = r(71432),
        jt = r(2677),
        ht = r(85179),
        Ft = r(75233);
      function Pt(e) {
        const { eventModel: t } = e,
          r = (0, c.q3)(() => t.jsondata.sale_sections);
        return (0, m.useMemo)(
          () =>
            r?.some(
              (e) =>
                ("quiz" == e.section_type &&
                  e.quiz?.track_with_cozy_cottage_doors) ||
                "quest" == e.section_type ||
                "rewards" == e.section_type,
            ),
          [r],
        )
          ? (0, s.jsx)(Tt, { ...e })
          : null;
      }
      const Wt = "Answered as: ";
      function qt(e) {
        return "string" == typeof e ? e : "";
      }
      function Tt(e) {
        const { eventModel: t } = e,
          [r, i] = (0, m.useState)(!1),
          n = (0, Rt.Tn)(),
          a = (0, Ft.jE)(),
          o = (0, Rt.Um)();
        if (
          ((0, m.useEffect)(() => {
            (0, Rt.Nb)(a).then(() => i(!0));
          }, [a]),
          !r)
        )
          return null;
        const l = t.GetSaleSectionsByType("quiz"),
          c = l.length > 0 ? l[0].quiz : void 0,
          u = c?.answer_categories ?? [],
          d = [],
          g = l.length > 0 ? l[0].unique_id : void 0,
          B =
            1 == l.length &&
            ("scenario" == c?.quiz_type || "branching" == c?.quiz_type) &&
            u.length > 0;
        if (B)
          d.push({ label: "State: Reset the Quiz", data: -1 }),
            d.push(
              ...u.map((e) => ({
                label: Wt + e.category_name,
                data: e.door_index ?? 0,
              })),
            ),
            d.push(
              ...u.map((e) => ({
                label: "Rewarded as: " + e.category_name,
                data: e.door_index ?? 0,
              })),
            );
        else
          for (let e = -1; e <= vt.F; ++e)
            d.push({ label: "Doors Opened " + (e + 1), data: e });
        const _ = t.GetSaleSectionsByType("rewards"),
          b = _.length > 0 ? _[0] : void 0,
          p = b?.rewards?.reward_items ?? [];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("a", {
              className: (0, bt.A)(dt.Button, mt.AdminButton),
              onClick: (e) => {
                (0, ft.pg)(
                  (0, s.jsx)(Ve.o0, {
                    strTitle: (0, $e.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => o(Qe.UF.CLANACCOUNTID),
                  }),
                  (0, zt.uX)(e) ?? window,
                );
              },
              children: "Reset All Doors",
            }),
            (0, s.jsx)(Ke.m, {
              strDropDownClassName: (0, bt.A)(dt.DropDownScroll),
              rgOptions: d,
              selectedOption: n,
              label: "Minigame States:",
              onChange: (e) => {
                const t = new Array();
                if (B)
                  (0, St.h5)(() => {
                    if (((0, Rt.qn)(a, -1), (0, jt.LM)(a, g), -1 != e.data)) {
                      const r = u.find((t) => t.door_index == e.data),
                        i = r?.category_id;
                      r &&
                        void 0 !== i &&
                        (c?.questions ?? [])
                          .filter((e) => (e.answers?.length ?? 0) > 0)
                          .forEach((e, t) => {
                            const r = e.answers ?? [];
                            let n = r.findIndex((e) =>
                              e.category_ids?.includes(i),
                            );
                            n < 0 && (n = 0),
                              (0, jt.VX)(a, g, t, r[n].category_ids),
                              (0, jt.xN)(a, g, t, r[n]);
                          }),
                        qt(e.label).startsWith(Wt) ||
                          ((0, Rt.kW)(a, 0, !0),
                          (0, Rt.kW)(a, e.data, !0),
                          t.push(0),
                          t.push(e.data));
                    }
                  });
                else {
                  for (let r = 0; r <= e.data; ++r) t.push(r);
                  (0, Rt.qn)(a, e.data);
                }
                const r = p[0]?.appid;
                if (
                  b &&
                  void 0 !== r &&
                  e.data > -1 &&
                  !qt(e.label).startsWith(Wt)
                ) {
                  const e = t
                      .map((e) =>
                        (function (e, t) {
                          if (e && "rewards" == e.section_type) {
                            const r = e.rewards?.reward_items?.filter(
                              (e) => e.item_bucket == t,
                            );
                            if (r && r.length > 0)
                              return r.map((e) => ({
                                appid: e.appid,
                                item_type: e.community_item_type,
                                amount: "1",
                              }));
                          }
                          return [];
                        })(b, e),
                      )
                      .filter(Boolean),
                    i = new Array();
                  e.forEach((e) => i.push(...e)), (0, ht._u)(a, r, i);
                }
              },
            }),
          ],
        });
      }
      var It = r(77021),
        Ot = r(67165);
      function Ut(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
            bSupportsSticky: a = !1,
          } = e,
          [d, g] = m.useState(!1),
          B = (0, c.q3)(() =>
            (function (e) {
              let t;
              if (e?.BHasSaleEnabled()) {
                e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    (0, u.ye)(e.section_type) &&
                      !(0, u.CU)(e) &&
                      e.capsules.forEach((e) => {
                        void 0 !== e.visibility_index &&
                          (void 0 === t || t < e.visibility_index) &&
                          (t = e.visibility_index);
                      });
                  });
                const r = e.jsondata.sale_num_headers ?? 0;
                r > 1 && (void 0 === t || t < r) && (t = r);
              }
              return t;
            })(t),
          ),
          [_, b] = m.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [p, y, M] = (0, c.q3)(() => [
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          { data: w } = (0, o.hM)(M),
          f = (0, It.ty)(),
          { creatorHome: z } = (0, Ot.FV)(M);
        if (d)
          return (0, s.jsx)(at.OG, {
            eventModel: t,
            route: at.PH.k_eCommunityAdminPage,
          });
        if (f) return (0, s.jsx)("span", {});
        const S = [];
        if (void 0 !== B)
          for (let e = 0; e <= B; ++e)
            S.push({
              label: (0, $e.we)("#SalePage_Admin_SaleEventDay", e + 1),
              data: e,
            });
        const R = t.GetEventType() == l.ajI;
        return (0, s.jsx)(yt, {
          eventModel: t,
          permissions: w,
          bIsCreatorHomeVisible: R && z?.GetLinkedEventGID() == t.GID,
          additionalButtons: i,
          onDeleteRequest: Boolean(r && "community" == (0, Qe.yK)())
            ? (e) => {
                r &&
                  (0, ft.pg)(
                    (0, s.jsx)(nt, {
                      eventModel: t,
                      onDeleteSuccessAndCloseDialog: () => g(!0),
                      partnerEventStore: r,
                    }),
                    (0, zt.uX)(e) ?? window,
                  );
              }
            : void 0,
          saleDayControl:
            void 0 !== B &&
            S.length > 0 &&
            (0, s.jsx)(Ke.m, {
              strDropDownClassName: dt.DropDownScroll,
              rgOptions: S,
              selectedOption: Math.min(B, _),
              onChange: (e) => {
                b(e.data), n?.(e.data);
              },
              bDisableMouseOverlay: !0,
              contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
            }),
          promotionPlanLinks:
            Boolean(p && wt(w)) &&
            void 0 !== y &&
            (0, s.jsx)(Dt, { clanAccountID: M, gidClanEvent: y }),
          testControls: (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(Pt, { eventModel: t }),
              (0, s.jsx)(Ct, { eventModel: t }),
            ],
          }),
          bSupportsSticky: a,
        });
      }
      function Ct(e) {
        const { eventModel: t } = e,
          r = (0, c.q3)(() => t.jsondata.sale_sections),
          i = (0, m.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i &&
          (i.badge_progress?.levels?.length ?? 0) > 0 &&
          Qe.iA.is_support
          ? (0, s.jsx)(xt, { section: i })
          : null;
      }
      function xt(e) {
        const { section: t } = e,
          r = (0, d.fy)(t.badge_progress?.event_badgeid),
          i = (0, c.q3)(() => t.badge_progress?.levels),
          n = Math.max(...(i ?? []).map((e) => e.level ?? 0));
        if (!r) return null;
        const a = [];
        for (let e = 0; e <= n; ++e) a.push({ label: "Level " + e, data: e });
        return (0, s.jsx)(Ke.m, {
          strDropDownClassName: (0, bt.A)(
            dt.DropDownScroll,
            dt.ValveOnlyBackground,
          ),
          rgOptions: a,
          selectedOption: r.level,
          onChange: (e) =>
            (0, d.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function Dt(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = He(t, r);
        return i
          ? (0, s.jsx)(s.Fragment, {
              children: i.map((e) =>
                (0, s.jsx)(
                  "a",
                  {
                    href: `${Qe.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: Qe.TS.IN_CLIENT ? "" : "_blank",
                    rel: "noreferrer",
                    className: (0, bt.A)(
                      dt.Button,
                      mt.AdminButton,
                      dt.ValveOnlyBackground,
                    ),
                    children: (0, $e.we)("#EventDisplay_PromotionEditor"),
                  },
                  e,
                ),
              ),
            })
          : null;
      }
    },
  },
]);
