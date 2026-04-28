/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3615],
  {
    60092: (e, t, r) => {
      r.d(t, { g: () => qt });
      var i,
        n,
        a,
        s = r(7850),
        o = r(41735),
        l = r.n(o),
        c = r(65946),
        m = r(90626),
        u = r(62641),
        d = r(75933),
        g = r(39733),
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
      class h extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.promotion_id || y.Sg(h.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
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
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class R extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.plan || y.Sg(R.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m || (R.sm_m = { proto: R, fields: { plan: { n: 1, c: M } } }),
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
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class v extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class j extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.plan || y.Sg(j.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { plan: { n: 1, c: M, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = y.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
      class O extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.rtime || y.Sg(O.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  rtime: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
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
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class I extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.plans || y.Sg(I.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
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
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class C extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.promotion_id || y.Sg(C.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = y.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class U extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
      class A extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.plan || y.Sg(A.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { plan: { n: 1, c: M, r: !0, q: !0 } },
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
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class D extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appids || y.Sg(D.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
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
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class E extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.plans || y.Sg(E.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  plans: { n: 1, c: M, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: N, r: !0, q: !0 },
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
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class N extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appids || y.Sg(N.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
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
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class G extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.partnerid || y.Sg(G.M()),
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
                  partnerid: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  start_date: {
                    n: 5,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  end_date: { n: 6, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  show_hidden: { n: 4, br: y.qM.readBool, bw: y.gp.writeBool },
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
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class k extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.plans || y.Sg(k.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { plans: { n: 1, c: M, r: !0, q: !0 } },
              }),
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
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class V extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.input_access_key || y.Sg(V.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = y.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class L extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.plan || y.Sg(L.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m || (L.sm_m = { proto: L, fields: { plan: { n: 1, c: M } } }),
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
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class H extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.promotion_id || y.Sg(H.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                  value: { n: 2, br: y.qM.readBool, bw: y.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = y.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class K extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (p().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
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
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class J extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class X extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.promotion_id || y.Sg(X.M()),
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
                fields: { results: { n: 1, c: $, r: !0, q: !0 } },
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
      class $ extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.notification_id || y.Sg($.M()),
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
          return "CPromotionNotificationResults";
        }
      }
      class Q extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.promotion_id || y.Sg(Q.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
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
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = y.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
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
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class te extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.promotion_id || y.Sg(te.M()),
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
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class re extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class ie extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.clan_account_id || y.Sg(ie.M()),
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
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class ne extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.clan_account_id || y.Sg(ne.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
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
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class ae extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.total_gross_sales_usdx100 || y.Sg(ae.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
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
          return "CPromotionPlan_SummarySaleResult";
        }
      }
      class se extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.promotionids || y.Sg(se.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
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
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
        }
      }
      class oe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.sales || y.Sg(oe.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  sales: { n: 1, c: me, r: !0, q: !0 },
                  partial_access: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
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
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
        }
      }
      class le extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.rtime_date || y.Sg(le.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  date: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  summary_sales: { n: 3, c: ae },
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
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
        }
      }
      class ce extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || y.Sg(ce.M()),
            b.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
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
                  summary_sales: { n: 4, c: ae },
                  daily_promo_sales: { n: 5, c: le, r: !0, q: !0 },
                  package_billing_type: {
                    n: 6,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
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
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
        }
      }
      class me extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.promotionid || y.Sg(me.M()),
            b.Message.initialize(this, e, 0, -1, [2, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  promotionid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  daily_promo_sales: { n: 2, c: le, r: !0, q: !0 },
                  summary_sales: { n: 3, c: ae },
                  products: { n: 4, c: ce, r: !0, q: !0 },
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
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
        }
      }
      class ue extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.request_list || y.Sg(ue.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: { request_list: { n: 1, c: de, r: !0, q: !0 } },
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
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class de extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.clan_account_id || y.Sg(de.M()),
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
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class ge extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.plans || y.Sg(ge.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: { plans: { n: 1, c: M, r: !0, q: !0 } },
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
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class Be extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.rtstart || y.Sg(Be.M()),
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
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class _e extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.package_details || y.Sg(_e.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  package_details: { n: 1, c: be, r: !0, q: !0 },
                  app_details: { n: 2, c: pe, r: !0, q: !0 },
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
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class be extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.package_id || y.Sg(be.M()),
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
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class pe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.appid || y.Sg(pe.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
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
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class ye extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.account_id || y.Sg(ye.M()),
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
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class Me extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.clans || y.Sg(Me.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: { clans: { n: 1, c: fe, r: !0, q: !0 } },
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
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class we extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.clan_account_id || y.Sg(we.M()),
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
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class fe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.clan_account_id || y.Sg(fe.M()),
            b.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
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
                  sale_pages: { n: 4, c: we, r: !0, q: !0 },
                },
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
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class ze extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.partner_id || y.Sg(ze.M()),
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
                  partner_id: {
                    n: 1,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
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
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class Se extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.advertising_apps || y.Sg(Se.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: { advertising_apps: { n: 1, c: he, r: !0, q: !0 } },
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
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class he extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.appid || y.Sg(he.M()),
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
                  appid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  app_name: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  itemid: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
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
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class Re extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.spotlight_due_date || y.Sg(Re.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
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
          return "CPromotionRequirements";
        }
      }
      class ve extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.inviteid || y.Sg(ve.M()),
            b.Message.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
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
                  deadlines: { n: 14, c: Re },
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
          return "CPromotionEventInvitation";
        }
      }
      class je extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.invite || y.Sg(je.M()),
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
                  invite: { n: 1, c: ve },
                  queue_email_to_send: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
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
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class Fe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.inviteid || y.Sg(Fe.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
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
          return "CPromotionEventInvites_SetInvite_Response";
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
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class We extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.invites || y.Sg(We.M()),
            b.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { invites: { n: 1, c: ve, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = y.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
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
                  only_notify_additional_email: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
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
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class Te extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
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
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class Ie extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.accountid || y.Sg(Ie.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
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
          return "CPromotionEventInviteReceive";
        }
      }
      class Ce extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.targets || y.Sg(Ce.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  targets: { n: 1, c: Ie, r: !0, q: !0 },
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
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class Ue extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.inviteid || y.Sg(Ue.M()),
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
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class xe extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.gid || y.Sg(xe.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  gid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = y.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class Ae extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.inviteid || y.Sg(Ae.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  inviteid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = y.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class De extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new De();
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class Ee extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.opt_in_name || y.Sg(Ee.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
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
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class Ne extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.stats || y.Sg(Ne.M()),
            b.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  stats: { n: 1, c: Ge, r: !0, q: !0 },
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
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ge extends b.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.appid || y.Sg(Ge.M()),
            b.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
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
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = y.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (p().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (p().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (p().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, _.I8)(w, t),
            f,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, _.I8)(w, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, _.I8)(z, t),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, _.I8)(z, t),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, _.I8)(z, t),
              S,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, _.I8)(C, t),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, _.I8)(h, t),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, _.I8)(v, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, _.I8)(F, t),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByAssociationID = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, _.I8)(q, t),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, _.I8)(O, t),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, _.I8)(x, t),
              A,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, _.I8)(D, t),
              E,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, _.I8)(G, t),
              k,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, _.I8)(V, t),
              L,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, _.I8)(H, t),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, _.I8)(Y, t),
              J,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, _.I8)(X, t),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, _.I8)(Q, t),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, _.I8)(te, t),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanSalesDaily = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, _.I8)(se, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, _.I8)(ue, t),
              ge,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, _.I8)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, _.I8)(Be, t),
              _e,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, _.I8)(ye, t),
              Me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, _.I8)(ze, t),
              Se,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, _.I8)(je, t),
              Fe,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, _.I8)(Pe, t),
                We,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, _.I8)(Ue, t),
                xe,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, _.I8)(Ae, t),
                De,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, _.I8)(qe, t),
                Te,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, _.I8)(Oe, t),
                Ce,
                { ePrivilege: 4 },
              );
            });
        })(n || (n = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, _.I8)(Ee, t),
              Ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(a || (a = {}));
      var ke = r(80902),
        Ve = r(72034),
        Le = r(30470),
        He = r(24484);
      function Ke(e, t) {
        const [r] = (0, m.useState)(() =>
          (function () {
            const e = (0, He.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, B.wT)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new Ve.D(Le.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, ke.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            if (!r) return null;
            const n = _.w.Init(ue),
              a = new de();
            a.set_clan_account_id(e),
              a.set_gid_clan_event(t),
              n.Body().add_request_list(a);
            const s = await i.GetPromotionPlanForSalePages(r, n);
            if (1 != s.GetEResult())
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
      var Ye = r(60746),
        Je = r(34824),
        Xe = r(56283),
        Ze = r(84811),
        $e = r(34629),
        Qe = r(51706),
        et = r(61859),
        tt = r(84933),
        rt = r(56330),
        it = r.n(rt),
        nt = r(22837),
        at = r(22797),
        st = r(78327),
        ot = r(68797);
      const lt = new (class {
        async DeleteForumTopic(e, t, r, i, n) {
          let a =
            st.TS.COMMUNITY_BASE_URL +
            "forum/" +
            e.GetAccountID() +
            "/" +
            t +
            "/deletetopic/";
          null != r && "" != r && (a += r + "/");
          const s = new FormData();
          s.append("sessionid", st.TS.SESSIONID), s.append("gidforumtopic", i);
          let o = await l().post(a, s, {
            withCredentials: !0,
            cancelToken: n.token,
          });
          if (1 != o.data.success) throw o.data;
          return o.data;
        }
      })();
      class ct extends m.Component {
        static m_uniqueError = 0;
        m_forumTopicGID;
        m_clanSteamID;
        m_cancelSignal = l().CancelToken.source();
        constructor(e) {
          super(e),
            (this.state = {
              dialogState: this.props.bNoConfirmationNeeded
                ? "waiting"
                : "confirmation",
              bDeleteCommentThread: !1,
            });
        }
        componentDidMount() {
          this.props.bNoConfirmationNeeded && this.OnDelete();
        }
        OnDeleteEventSuccessCallback() {
          this.props.partnerEventStore.ResetModel(),
            this.state.bDeleteCommentThread
              ? lt
                  .DeleteForumTopic(
                    this.m_clanSteamID,
                    "Event",
                    void 0,
                    this.m_forumTopicGID,
                    this.m_cancelSignal,
                  )
                  .then(this.OnDeleteForumTopicSuccessCallback)
                  .catch(this.OnDeleteForumTopicFailureCallback)
              : this.setState({ dialogState: "success" });
        }
        OnDeleteForumTopicSuccessCallback() {
          this.setState({ dialogState: "success" });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("component unmounted");
        }
        OnDeleteEventFailureCallback(e) {
          this.setState({ dialogState: "error", ...(0, ot.H)(e) });
        }
        OnDeleteForumTopicFailureCallback(e) {
          this.setState({
            dialogState: "failed_thread_delete",
            ...(0, ot.H)(e),
          });
        }
        SetToWaiting() {
          "waiting" != this.state.dialogState &&
            this.setState({ dialogState: "waiting" });
        }
        OnDelete() {
          const { eventModel: e, partnerEventStore: t } = this.props;
          let r = e.clanSteamID,
            i = e.GID,
            n = e.AnnouncementGID;
          (this.m_forumTopicGID = e.forumTopicGID),
            (this.m_clanSteamID = r),
            !this.props.eventModel.bOldAnnouncement &&
            i &&
            "0" != i &&
            i != nt.kF
              ? (this.SetToWaiting(),
                t
                  .DeleteClanEvent(r, i)
                  .then(this.OnDeleteEventSuccessCallback)
                  .catch(this.OnDeleteEventFailureCallback))
              : this.props.eventModel.bOldAnnouncement
                ? (this.SetToWaiting(),
                  t
                    .DeleteOldAnnouncement(r, n)
                    .then(this.OnDeleteEventSuccessCallback)
                    .catch(this.OnDeleteEventFailureCallback))
                : (t.ResetModel(), this.setState({ dialogState: "success" }));
        }
        OnChangeDeleteForum() {
          this.setState({
            bDeleteCommentThread: !this.state.bDeleteCommentThread,
          });
        }
        render() {
          let e = this.props.eventModel,
            t = this.props.closeModal,
            r = "",
            i = new Array();
          switch (this.state.dialogState) {
            case "confirmation":
              let n = e.GetNameWithFallback((0, nt.sf)(st.TS.LANGUAGE)),
                a = e.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (r = (0, et.we)(a, n)),
                (t = this.OnDelete),
                e.BHasForumTopicGID() &&
                  i.push(
                    (0, s.jsxs)(
                      "div",
                      {
                        className: it().Padding,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            id: "del_cmt_post",
                            name: "del_cmt_post",
                            defaultChecked: this.state.bDeleteCommentThread,
                            onChange: this.OnChangeDeleteForum,
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: "del_cmt_post",
                            children: (0, et.we)(
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
              (r = (0, et.we)("#EventDisplay_DeleteEvent_InProgress")),
                i.push((0, s.jsx)(at.t, {}, "throbber"));
              break;
            case "error":
              (r = (0, et.we)("#EventDisplay_DeleteEvent_Error")),
                i.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: it().ErrorStyles,
                      children: this.state.strErrorMsg,
                    },
                    "deleteerror_" + ++ct.m_uniqueError,
                  ),
                );
              break;
            case "failed_thread_delete":
              (r = (0, et.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                i.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: it().ErrorStyles,
                      children: this.state.strErrorMsg,
                    },
                    "deleteerror_" + ++ct.m_uniqueError,
                  ),
                ),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
              break;
            case "success":
              (r = (0, et.we)("#EventDisplay_DeleteEvent_Success")),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
          }
          return (0, s.jsx)(Qe.o0, {
            strTitle: (0, et.we)("#EventDisplay_DeleteEvent"),
            strDescription: r,
            onCancel: this.props.closeModal,
            onOK: t,
            bAlertDialog: "confirmation" != this.state.dialogState,
            bOKDisabled: "waiting" == this.state.dialogState,
            bDestructiveWarning: "error" == this.state.dialogState,
            children: i,
          });
        }
      }
      (0, $e.Cg)([tt.oI], ct.prototype, "OnDeleteEventSuccessCallback", null),
        (0, $e.Cg)(
          [tt.oI],
          ct.prototype,
          "OnDeleteForumTopicSuccessCallback",
          null,
        ),
        (0, $e.Cg)([tt.oI], ct.prototype, "OnDeleteEventFailureCallback", null),
        (0, $e.Cg)(
          [tt.oI],
          ct.prototype,
          "OnDeleteForumTopicFailureCallback",
          null,
        ),
        (0, $e.Cg)([tt.oI], ct.prototype, "SetToWaiting", null),
        (0, $e.Cg)([tt.oI], ct.prototype, "OnDelete", null),
        (0, $e.Cg)([tt.oI], ct.prototype, "OnChangeDeleteForum", null);
      var mt = r(75113),
        ut = r(60860),
        dt = r(95695),
        gt = r(738),
        Bt = r(52038),
        _t = r(56011),
        bt = r(64846),
        pt = r(14947),
        yt = r(1501),
        Mt = r(35400),
        wt = r(36735),
        ft = r(90316);
      function zt(e) {
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
          ? (0, s.jsx)(ht, { ...e })
          : null;
      }
      const St = "Answered as: ";
      function ht(e) {
        const { eventModel: t } = e,
          [r, i] = (0, m.useState)(!1),
          n = (0, Mt.Tn)();
        if (
          ((0, m.useEffect)(() => {
            Mt.hH
              .Get()
              .LoadDoorData()
              .then(() => i(!0));
          }, []),
          !r)
        )
          return null;
        const a = t.GetSaleSectionsByType("quiz"),
          o = [],
          l =
            1 == a?.length &&
            ("scenario" == a[0].quiz.quiz_type ||
              "branching" == a[0].quiz.quiz_type) &&
            a[0].quiz.answer_categories?.length > 0;
        if (l)
          o.push({ label: "State: Reset the Quiz", data: -1 }),
            o.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: St + e.category_name,
                data: e.door_index,
              })),
            ),
            o.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: "Rewarded as: " + e.category_name,
                data: e.door_index,
              })),
            );
        else {
          const e = Mt.hH.Get().GetMaxDoor();
          for (let t = -1; t <= e; ++t)
            o.push({ label: "Doors Opened " + (t + 1), data: t });
        }
        const c = t.GetSaleSectionsByType("rewards"),
          u = c?.length > 0 ? c[0] : null;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("a", {
              className: (0, Bt.A)(dt.Button, ft.AdminButton),
              onClick: (e) => {
                (0, gt.pg)(
                  (0, s.jsx)(Qe.o0, {
                    strTitle: (0, et.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => Mt.hH.Get().CloseAllDoors(st.UF.CLANACCOUNTID),
                  }),
                  (0, _t.uX)(e),
                );
              },
              children: "Reset All Doors",
            }),
            (0, s.jsx)(Xe.m, {
              strDropDownClassName: (0, Bt.A)(dt.DropDownScroll),
              rgOptions: o,
              selectedOption: n,
              label: "Minigame States:",
              onChange: (e) => {
                const t = new Array();
                if (l)
                  (0, pt.h5)(() => {
                    if (
                      ((0, Mt.Sp)(-1),
                      yt.N.Get().ClearAnswersAndCategories(),
                      -1 != e.data)
                    ) {
                      const r = a[0].quiz.answer_categories.find(
                        (t) => t.door_index == e.data,
                      );
                      r &&
                        a[0].quiz.questions
                          .filter((e) => e.answers?.length > 0)
                          .forEach((e, t) => {
                            let i = e.answers.findIndex((e) =>
                              e.category_ids?.includes(r.category_id),
                            );
                            i < 0 && (i = 0),
                              yt.N.Get().SetAnswerCategory(
                                t,
                                e.answers[i].category_ids,
                              ),
                              yt.N.Get().SetAnswer(t, e.answers[i]);
                          }),
                        e.label.toString().startsWith(St) ||
                          ((0, Mt.my)(0, !0),
                          (0, Mt.my)(e.data, !0),
                          t.push(0),
                          t.push(e.data));
                    }
                  });
                else {
                  for (let r = 0; r <= e.data; ++r) t.push(r);
                  (0, Mt.Sp)(e.data);
                }
                if (
                  u &&
                  u.rewards?.reward_items?.length > 0 &&
                  e.data > -1 &&
                  !e.label.toString().startsWith(St)
                ) {
                  const e = t
                      .map((e) =>
                        (function (e, t) {
                          if (e && "rewards" == e.section_type) {
                            const r = e.rewards.reward_items?.filter(
                              (e) => e.item_bucket == t,
                            );
                            if (r?.length > 0)
                              return r.map((e) => ({
                                appid: e.appid,
                                item_type: e.community_item_type,
                                amount: "1",
                              }));
                          }
                          return null;
                        })(u, e),
                      )
                      .filter(Boolean),
                    r = new Array();
                  e.forEach((e) => r.push(...e)),
                    (0, wt.l5)(u.rewards?.reward_items[0].appid, r);
                }
              },
            }),
          ],
        });
      }
      var Rt = r(95034),
        vt = r(12155),
        jt = r(32754),
        Ft = r(77021),
        Pt = r(8092),
        Wt = r(27939);
      function qt(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
            bSupportsSticky: a = !1,
          } = e,
          o = (0, st.Qn)(),
          l = (0, ut.MU)(),
          [d, g] = m.useState(!1),
          B = (0, c.q3)(() =>
            (function (e) {
              let t;
              e?.BHasSaleEnabled() &&
                (e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    (0, u.ye)(e.section_type) &&
                      !(0, u.CU)(e) &&
                      e.capsules.forEach((e) => {
                        void 0 !== e.visibility_index &&
                          (void 0 === t || t < e.visibility_index) &&
                          (t = e.visibility_index);
                      });
                  }),
                e.jsondata.sale_num_headers > 1 &&
                  (void 0 === t || t < e.jsondata.sale_num_headers) &&
                  (t = e.jsondata.sale_num_headers));
              return t;
            })(t),
          ),
          [_, b] = m.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [p, y, M, w] = (0, c.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          f = (0, Ye.Ec)(w),
          [z, S] = m.useState(a),
          { bVisible: h, ref: R } = (0, tt.hd)(),
          v = (e) => {
            (0, gt.pg)(
              (0, s.jsx)(ct, {
                eventModel: t,
                onDeleteSuccessAndCloseDialog: () => g(!0),
                partnerEventStore: r,
              }),
              (0, _t.uX)(e),
            );
          },
          j = (0, Ft.ty)(),
          { creatorHome: F } = (0, Pt.FV)(w);
        if (d)
          return (0, s.jsx)(mt.OG, {
            eventModel: t,
            route: mt.PH.k_eCommunityAdminPage,
          });
        if ((f.can_edit || f.support_user) && !o && !j) {
          const e = [];
          if (void 0 !== B)
            for (let t = 0; t <= B; ++t)
              e.push({
                label: (0, et.we)("#SalePage_Admin_SaleEventDay", t + 1),
                data: t,
              });
          const o = (0, st.yK)(),
            c = "community" == o,
            d = "store" == o,
            g = st.iA.is_support && (0, bt.m)(t.clanSteamID, !0),
            f = z && !h,
            j = 36 == t.GetEventType(),
            P = j && F?.GetLinkedEventGID() == t.GID,
            W =
              (p == u.zv.k_EEventStateVisible ||
                p == u.zv.k_EEventStateUnlisted) &&
              (!j || P),
            q = p == u.zv.k_EEventStateStaged;
          return (0, s.jsxs)(Ze.tH, {
            children: [
              (0, s.jsx)("div", {
                className: (0, Bt.A)(
                  ft.DisplayAdminPanel_TopSpacer,
                  f && ft.Sticky,
                ),
              }),
              (0, s.jsxs)("div", {
                className: (0, Bt.A)({
                  [ft.DisplayAdminPanel]: !0,
                  [ft.Locked]: c,
                  [ft.Sticky]: f,
                }),
                children: [
                  (0, s.jsx)("span", {
                    className: ft.DisplayAdminPanel_Title,
                    children: (0, et.we)("#EventDisplay_Admin_Title"),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, Bt.A)(
                      ft.DisplayAdminPanel_ctn,
                      f && ft.Sticky,
                    ),
                    children: [
                      i,
                      i &&
                        (0, s.jsx)("span", {
                          className: ft.DisplayAdminPanel_Spacer,
                          children: " ",
                        }),
                      (0, s.jsx)(mt.tj, {
                        eventModel: t,
                        route: mt.PH.k_eCommunityEdit,
                        className: (0, Bt.A)(dt.Button, ft.AdminButton),
                        children: j
                          ? (0, et.we)("#EventEditor_Edit_Page")
                          : (0, et.we)("#EventEditor_Edit"),
                      }),
                      Boolean(r && "community" == (0, st.yK)()) &&
                        (0, s.jsx)("span", {
                          className: dt.Button + " " + ft.AdminButton,
                          onClick: v,
                          children: (0, et.we)("#EventDisplay_DeleteEvent"),
                        }),
                      !W &&
                        (0, s.jsx)(m.Fragment, {
                          children: (0, s.jsx)(mt.tj, {
                            eventModel: t,
                            route: mt.PH.k_eCommunityPublish,
                            className: (0, Bt.A)(dt.Button, ft.AdminButton),
                            children: (0, et.we)(
                              q
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish",
                            ),
                          }),
                        }),
                      (0, s.jsx)(mt.tj, {
                        eventModel: t,
                        route: mt.PH.k_eCommunityAdminPage,
                        className: (0, Bt.A)(dt.Button, ft.AdminButton),
                        children: (0, et.we)("#EventDisplay_Events"),
                      }),
                      Boolean(void 0 !== B && e.length > 0) &&
                        (0, s.jsx)(Xe.m, {
                          strDropDownClassName: dt.DropDownScroll,
                          rgOptions: e,
                          selectedOption: Math.min(B, _),
                          onChange: (e) => {
                            b(e.data), n(e.data);
                          },
                          bDisableMouseOverlay: !0,
                          contextMenuPositionOptions: {
                            bDisableMouseOverlay: !0,
                          },
                        }),
                      Boolean(t.jsondata.bSaleEnabled && l && !j) &&
                        (0, s.jsx)(mt.tj, {
                          eventModel: t,
                          route: mt.PH.k_eStoreSalePage,
                          className: (0, Bt.A)(dt.Button, ft.AdminButton),
                          children: (0, et.we)("#EventDisplay_SalesPage"),
                        }),
                      Boolean(y && st.iA.is_support && M) &&
                        (0, s.jsx)("a", {
                          href:
                            st.TS.STATS_BASE_URL +
                            "sales/details/?gid=" +
                            M +
                            "&clanid=" +
                            w,
                          target: st.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, Bt.A)(
                            dt.Button,
                            ft.AdminButton,
                            dt.ValveOnlyBackground,
                          ),
                          children: (0, et.we)("#EventDisplay_StatsPage"),
                        }),
                      Boolean(y && st.iA.is_support && M && !j) &&
                        (0, s.jsx)("a", {
                          href:
                            st.TS.PARTNER_BASE_URL +
                            "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                            M +
                            "&saleclanaccountid=" +
                            w,
                          target: st.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, Bt.A)(
                            dt.Button,
                            ft.AdminButton,
                            dt.ValveOnlyBackground,
                          ),
                          children: (0, et.we)(
                            "#EventDisplay_InvitationPlannerPage",
                          ),
                        }),
                      Boolean(y && g && M) &&
                        (0, s.jsx)(Ct, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          gidClanEvent: M,
                        }),
                      Boolean(
                        y && g && Wt.bv == w && t.GetContentHubCategory(),
                      ) &&
                        (0, s.jsx)("a", {
                          href: `${st.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                          target: st.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, Bt.A)(
                            dt.Button,
                            ft.AdminButton,
                            dt.ValveOnlyBackground,
                          ),
                          children: (0, et.we)("#EventDisplay_CategoryEditor"),
                        }),
                      Boolean(W && (d || (l && !c))) &&
                        (0, s.jsx)(mt.tj, {
                          eventModel: t,
                          route: y
                            ? mt.PH.k_eCommunityPreviewSale
                            : mt.PH.k_eCommunityView,
                          className: (0, Bt.A)(dt.Button, ft.AdminButton),
                          children: (0, et.we)(
                            y
                              ? "#EventDisplay_PreviewOnCommunity"
                              : "#EventDisplay_ViewOnCommunity",
                          ),
                        }),
                      Boolean(W && c) &&
                        (0, s.jsx)(mt.tj, {
                          eventModel: t,
                          route: mt.PH.k_eStoreView,
                          className: (0, Bt.A)(dt.Button, ft.AdminButton),
                          children: (0, et.we)("#EventDisplay_ViewOnStore"),
                        }),
                      (0, s.jsx)(zt, { eventModel: t }),
                      (0, s.jsx)(Ot, { eventModel: t }),
                      Boolean(st.iA.is_support) &&
                        (0, s.jsx)(Tt, { eventModel: t }),
                      f &&
                        (0, s.jsx)("div", {
                          className: ft.DisplayAdminPanelClose,
                          onClick: () => S(!1),
                          children: (0, s.jsx)(jt.Gq, {
                            toolTipContent: (0, et.we)(
                              "#EventDisplay_Admin_Close_ttip",
                            ),
                            children: (0, s.jsx)(vt.X, {}),
                          }),
                        }),
                      !z &&
                        a &&
                        (0, s.jsx)("div", {
                          className: ft.DisplayAdminPanelClose,
                          onClick: () => S(!0),
                          children: (0, s.jsx)(jt.Gq, {
                            toolTipContent: (0, et.we)(
                              "#EventDisplay_Admin_Reopen_ttip",
                            ),
                            children: (0, s.jsx)(vt.i3G, { angle: 0 }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: ft.DisplayAdminPanelMarker,
                ref: R,
              }),
            ],
          });
        }
        return (0, s.jsx)("span", {});
      }
      function Tt(e) {
        const { eventModel: t } = e,
          r = (0, Je.Fb)(),
          [i] = (0, Rt.QD)(d.jD, void 0);
        return Boolean(
          r &&
            t.jsondata?.bSaleEnabled &&
            t.jsondata?.sale_sections?.length > 0,
        )
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("a", {
                  className: (0, Bt.A)(
                    dt.Button,
                    ft.AdminButton,
                    dt.ValveOnlyBackground,
                  ),
                  onClick: () => {
                    const e = t.jsondata.sale_sections.find(
                        (e) => "tabs" == e.section_type,
                      ),
                      n =
                        i ||
                        (e?.tabs?.length > 0 && e.tabs[0].unique_id) ||
                        null,
                      a = new Array();
                    t.jsondata.sale_sections.forEach((e) => {
                      (0, Je.Jz)(e) &&
                        a.push({
                          ...r,
                          insertion_requirement: null,
                          sectionID: e.unique_id,
                          tabID: n,
                          insertionIndex: 0,
                          force_preview_mode: !0,
                        });
                    }),
                      (0, Je.YH)(a);
                  },
                  children: "(VO) Inject Capsule",
                }),
                (0, s.jsx)("a", {
                  className: (0, Bt.A)(
                    dt.Button,
                    ft.AdminButton,
                    dt.ValveOnlyBackground,
                  ),
                  onClick: (e) =>
                    (0, gt.pg)(
                      (0, s.jsx)(Qe.o0, {
                        strTitle: "Clear Rewards for Summer 2022",
                        onOK: async () => {
                          const e = new FormData();
                          e.append("sessionid", st.TS.SESSIONID),
                            e.append(
                              "clan_accountid",
                              "" + st.UF.CLANACCOUNTID,
                            ),
                            e.append("event_id", "15");
                          const t = await l().post(
                            `${st.TS.STORE_BASE_URL}saleaction/ajaxgresetopendoorrewards`,
                            e,
                            { withCredentials: !0 },
                          );
                          console.log("ajaxgresetopendoorrewards", t);
                        },
                      }),
                      (0, _t.uX)(e),
                    ),
                  children: "( VO ) Clear Summer 2022 Rewards",
                }),
              ],
            })
          : null;
      }
      function Ot(e) {
        const { eventModel: t } = e,
          r = (0, c.q3)(() => t.jsondata.sale_sections),
          i = (0, m.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i?.badge_progress?.levels?.length > 0 && st.iA.is_support
          ? (0, s.jsx)(It, { section: i })
          : null;
      }
      function It(e) {
        const { section: t } = e,
          r = (0, g.fy)(t.badge_progress?.event_badgeid),
          i = (0, c.q3)(() => t.badge_progress.levels),
          n = Math.max(...i.map((e) => e.level));
        if (!r) return null;
        const a = [];
        for (let e = 0; e <= n; ++e) a.push({ label: "Level " + e, data: e });
        return (0, s.jsx)(Xe.m, {
          strDropDownClassName: (0, Bt.A)(
            dt.DropDownScroll,
            dt.ValveOnlyBackground,
          ),
          rgOptions: a,
          selectedOption: r.level,
          onChange: (e) =>
            (0, g.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function Ct(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = Ke(t, r);
        return i
          ? (0, s.jsx)(s.Fragment, {
              children: i.map((e) =>
                (0, s.jsx)(
                  "a",
                  {
                    href: `${st.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: st.TS.IN_CLIENT ? "" : "_blank",
                    className: (0, Bt.A)(
                      dt.Button,
                      ft.AdminButton,
                      dt.ValveOnlyBackground,
                    ),
                    children: (0, et.we)("#EventDisplay_PromotionEditor"),
                  },
                  e,
                ),
              ),
            })
          : null;
      }
    },
    64846: (e, t, r) => {
      r.d(t, { E: () => l, m: () => o });
      var i = r(7850),
        n = r(60746),
        a = r(95695),
        s = r(52038);
      function o(e, t) {
        if (!e || !e.BIsClanAccount()) return !1;
        const r = n.KN.Get().GetPartnerEventPermissions(e);
        return !!r && (t ? r.valve_admin : r.valve_admin || r.support_user);
      }
      function l(e) {
        const { clanSteamID: t, id: r } = e;
        return o(t, e.requireAdmin)
          ? (0, i.jsx)("div", {
              id: r,
              className: (0, s.A)(
                e.className,
                e.requireAdmin
                  ? a.ValveOnlyAdminBackground
                  : a.ValveOnlyBackground,
              ),
              children: e.children,
            })
          : null;
      }
    },
    44894: (e, t, r) => {
      r.d(t, { A: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
